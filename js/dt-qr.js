/* =====================================================================
   dt-qr.js — ĐIỂM DANH HOẠT ĐỘNG BẰNG MÃ QR ĐỘNG
   ---------------------------------------------------------------------
   Luồng chạy:
   1. Ban Chấp hành chọn hoạt động, bấm "Chiếu mã QR". Màn hình chiếu
      đổi mã mới mỗi 30 giây và ghi mã vào qrPhien/{mãHoạtĐộng}.
      Bảng qrPhien chỉ BCH đọc được nên đoàn viên không lấy trộm mã được.
   2. Đoàn viên quét QR bằng camera điện thoại. QR chứa đường link
      .../#diemdanh?a=<mãHoạtĐộng>&c=<mã>. Trang tự mở mục Điểm danh.
   3. Trang ghi CÙNG LÚC 2 bản ghi (batch):
        checkIn/<mãHĐ>_<uid>   : lượt điểm danh
        diemLog/qr_<mãHĐ>_<uid>: dòng cộng điểm cá nhân
      Máy chủ (luật firestore.rules) tự kiểm tra: mã có đúng, còn hạn
      không, điểm có đúng bằng điểm của hoạt động không, đã điểm danh
      chưa. Sai một điều là cả 2 bản ghi bị từ chối.
   ===================================================================== */
(function () {
  "use strict";

  const CHU_KY_GIAY = 30;                 // mã đổi sau mỗi 30 giây
  const KY_TU = "ABCDEFGHJKMNPQRSTUVWXYZ23456789"; // bỏ chữ dễ nhầm: I, L, O, 0, 1
  const KHOA_CHO = "dt_qr_cho";           // lưu tạm mã vừa quét khi chưa đăng nhập

  const fv = () => firebase.firestore.FieldValue;

  function taoMa() {
    const a = new Uint32Array(6); crypto.getRandomValues(a);
    return Array.from(a, (x) => KY_TU[x % KY_TU.length]).join("");
  }

  function linkDiemDanh(actId, ma) {
    return location.origin + location.pathname + "#diemdanh?a=" + encodeURIComponent(actId) + "&c=" + ma;
  }

  // Vẽ mã QR thành ảnh SVG (dùng thư viện qrcode-generator)
  function veQR(noiDung) {
    const qr = qrcode(0, "M"); qr.addData(noiDung); qr.make();
    const n = qr.getModuleCount(), le = 2;
    let d = "";
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (qr.isDark(r, c)) d += "M" + (c + le) + " " + (r + le) + "h1v1h-1z";
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 " + (n + le * 2) + " " + (n + le * 2));
    svg.setAttribute("shape-rendering", "crispEdges");
    svg.setAttribute("role", "img"); svg.setAttribute("aria-label", "Mã QR điểm danh");
    const nen = document.createElementNS(ns, "rect"); nen.setAttribute("width", "100%"); nen.setAttribute("height", "100%"); nen.setAttribute("fill", "#fff");
    const p = document.createElementNS(ns, "path"); p.setAttribute("d", d); p.setAttribute("fill", "#0B2552");
    svg.append(nen, p);
    return svg;
  }

  /* ================= PHÍA BAN CHẤP HÀNH: MÀN CHIẾU QR ================= */
  const chieu = { actId: null, ma: "", hen: null, demNguoc: null, giuSang: null, huyNghe: null, soLuot: 0 };

  async function batDauChieu(actId) {
    const { S, db, h, toast } = DT;
    const hd = S.acts.find((a) => a.id === actId);
    if (!hd) { toast("Chọn một hoạt động trước."); return; }
    chieu.actId = actId;
    chieu.ma = taoMa();
    try {
      await db.doc("qrPhien/" + actId).set({ mo: true, code: chieu.ma, codeTruoc: "", doiLuc: fv().serverTimestamp(), batDau: fv().serverTimestamp(), boi: S.me });
    } catch (e) { toast(DTAuth.loiTiengViet(e)); return; }

    // Lớp phủ toàn màn hình để chiếu lên máy chiếu hoặc TV
    const qrBox = h("div", { class: "qr-big" });
    const maChu = h("b", { class: "qr-code-text" });
    const dem = h("span", { class: "qr-count" });
    const luot = h("span", { class: "qr-luot", text: "0 lượt điểm danh" });
    const dung = h("button", { class: "btn btn-go", type: "button", onclick: dungChieu }, "Dừng điểm danh");
    const lop = h("div", { id: "qr-overlay", class: "qr-overlay", role: "dialog", "aria-modal": "true", "aria-label": "Màn chiếu mã QR" },
      h("div", { class: "qr-stage" },
        h("h2", { text: hd.title }),
        h("p", { class: "qr-hint", text: "Mở camera điện thoại, quét mã. Hoặc vào mục Điểm danh và gõ mã bên dưới." }),
        qrBox,
        h("div", { class: "qr-meta" }, maChu, dem, luot),
        dung));
    document.body.append(lop);

    const ve = () => { qrBox.replaceChildren(veQR(linkDiemDanh(actId, chieu.ma))); maChu.textContent = chieu.ma; };
    ve();
    let conLai = CHU_KY_GIAY;
    chieu.demNguoc = setInterval(() => { conLai--; dem.textContent = "Mã đổi sau " + conLai + " giây"; if (conLai <= 0) conLai = CHU_KY_GIAY; }, 1000);
    chieu.hen = setInterval(async () => {
      const maCu = chieu.ma; chieu.ma = taoMa();
      try { await db.doc("qrPhien/" + actId).update({ code: chieu.ma, codeTruoc: maCu, doiLuc: fv().serverTimestamp() }); ve(); }
      catch (e) { chieu.ma = maCu; toast("Mất kết nối, chưa đổi được mã."); }
    }, CHU_KY_GIAY * 1000);

    // Đếm số lượt điểm danh theo thời gian thực
    chieu.huyNghe = db.collection("checkIn").where("actId", "==", actId).onSnapshot((snap) => {
      chieu.soLuot = snap.size; luot.textContent = snap.size + " lượt điểm danh";
    }, () => {});

    // Giữ màn hình không tắt khi chiếu (nếu trình duyệt hỗ trợ)
    try { if (navigator.wakeLock) chieu.giuSang = await navigator.wakeLock.request("screen"); } catch (e) { /* bỏ qua */ }
  }

  async function dungChieu() {
    const { db, toast } = DT;
    clearInterval(chieu.hen); clearInterval(chieu.demNguoc);
    if (chieu.huyNghe) chieu.huyNghe();
    if (chieu.giuSang) { chieu.giuSang.release().catch(() => {}); chieu.giuSang = null; }
    const el = document.getElementById("qr-overlay"); if (el) el.remove();
    if (chieu.actId) {
      try { await db.doc("qrPhien/" + chieu.actId).update({ mo: false, code: "", codeTruoc: "", ketThuc: fv().serverTimestamp() }); }
      catch (e) { toast("Chưa đóng được phiên QR. Bấm Dừng lại lần nữa."); return; }
      toast("Đã dừng điểm danh. Tổng " + chieu.soLuot + " lượt.");
    }
    chieu.actId = null;
  }

  // Ban Chấp hành hủy một lượt điểm danh sai: xóa lượt + ghi dòng trừ điểm tương ứng
  async function huyLuot(ci, hd) {
    const { db, S, toast } = DT;
    const lyDo = prompt("Lý do hủy lượt điểm danh này (ít nhất 5 ký tự):", "Không có mặt tại hoạt động");
    if (!lyDo || lyDo.trim().length < 5) return;
    const b = db.batch();
    b.delete(db.doc("checkIn/" + ci.id));
    if (Number(ci.diem) !== 0) {
      b.set(db.collection("diemLog").doc(), {
        uid: ci.uid, nguon: "dieuchinh", diem: -Number(ci.diem || 0), actId: ci.actId,
        lyDo: "Hủy lượt điểm danh (" + (hd ? hd.title : ci.actId) + "): " + lyDo.trim(), boi: S.me, luc: fv().serverTimestamp(),
      });
    }
    try { await b.commit(); toast("Đã hủy lượt điểm danh."); } catch (e) { toast(DTAuth.loiTiengViet(e)); }
  }

  // Khối "Điểm danh QR" trong Bảng điều khiển Ban Chấp hành
  function renderAdmin() {
    const { S, h, $, fmtDate } = DT;
    const box = $("adm-qr"); if (!box) return;
    box.replaceChildren();
    if (!S.admin) return;
    const acts = [...S.acts].sort((a, b) => String(b.date).localeCompare(String(a.date)));
    const sel = h("select", { "aria-label": "Chọn hoạt động để điểm danh" },
      ...acts.map((a) => h("option", { value: a.id, selected: a.id === S.qrChon }, (a.date ? fmtDate(a.date) + " · " : "") + a.title + " (" + (a.points || 0) + " điểm)")));
    if (!S.qrChon && acts[0]) S.qrChon = acts[0].id;
    sel.addEventListener("change", () => { S.qrChon = sel.value; renderAdmin(); });
    const btn = h("button", { class: "btn btn-go", type: "button", onclick: () => batDauChieu(sel.value) }, "Chiếu mã QR điểm danh");

    const hd = S.acts.find((a) => a.id === S.qrChon);
    const ds = (S.checkIns || []).filter((c) => c.actId === S.qrChon)
      .sort((a, b) => (b.luc && a.luc ? b.luc.toMillis() - a.luc.toMillis() : 0));
    const reg = new Set((S.regs || []).filter((r) => (r.activities || []).includes(S.qrChon)).map((r) => r.id));
    const tb = h("tbody");
    ds.forEach((c) => {
      const u = (S.users || []).find((x) => x.id === c.uid);
      tb.append(h("tr", {},
        h("td", { text: c.luc ? c.luc.toDate().toLocaleTimeString("vi-VN") : "…" }),
        h("td", { text: u ? (u.hoTen || u.username) : c.uid.slice(0, 6) }),
        h("td", { text: c.lop || "—" }),
        h("td", { text: reg.has(c.uid) ? "Đã đăng ký" : "Không đăng ký trước" }),
        h("td", {}, h("button", { class: "mini-del", type: "button", onclick: () => huyLuot(c, hd) }, "Hủy lượt"))));
    });

    box.append(
      h("h3", { text: "Điểm danh bằng mã QR" }),
      h("p", { class: "meter-note", text: "Mã đổi mỗi " + CHU_KY_GIAY + " giây. Máy chủ chỉ nhận mã đang chiếu hoặc mã vừa đổi, mỗi người một lần cho mỗi hoạt động." }),
      sel, h("div", { class: "row-btn" }, btn),
      h("p", { class: "meter-note", text: (ds.length) + " lượt điểm danh · " + reg.size + " người đã đăng ký trước" }),
      ds.length ? h("div", { class: "reg-table-wrap", style: "max-height:240px" },
        h("table", { class: "reg-table" },
          h("thead", {}, h("tr", {}, h("th", { text: "Giờ" }), h("th", { text: "Đoàn viên" }), h("th", { text: "Lớp" }), h("th", { text: "Đăng ký" }), h("th", { text: "" }))), tb)) : null);
  }

  /* ================= PHÍA ĐOÀN VIÊN: GỬI ĐIỂM DANH ================= */

  async function guiDiemDanh(actId, ma) {
    const { S, db, toast } = DT;
    ma = String(ma || "").trim().toUpperCase();
    if (!S.currentUser) { luuCho(actId, ma); toast("Đăng nhập để hoàn tất điểm danh."); return false; }
    const hd = S.acts.find((a) => a.id === actId);
    if (!hd) { toast("Không tìm thấy hoạt động này."); return false; }
    if ((S.checkIns || []).some((c) => c.actId === actId && c.uid === S.me)) { toast("Bạn đã điểm danh hoạt động này rồi."); return false; }
    if (!/^[A-Z0-9]{6}$/.test(ma)) { toast("Mã điểm danh gồm 6 ký tự."); return false; }

    const diem = Number(hd.points) || 0;
    const b = db.batch();
    b.set(db.doc("checkIn/" + actId + "_" + S.me), { uid: S.me, actId, lop: S.currentUser.lop || "", code: ma, luc: fv().serverTimestamp(), diem });
    b.set(db.doc("diemLog/qr_" + actId + "_" + S.me), { uid: S.me, actId, nguon: "qr", diem, lop: S.currentUser.lop || "", luc: fv().serverTimestamp() });
    try {
      await b.commit();
      xoaCho();
      toast("Điểm danh thành công: " + hd.title + (diem ? " (+" + diem + " điểm)" : "") + ".");
      return true;
    } catch (e) {
      // Máy chủ từ chối: mã sai, mã hết hạn, phiên đã đóng hoặc đã điểm danh
      toast(e && e.code === "permission-denied"
        ? "Mã không đúng hoặc đã hết hạn. Quét lại mã đang chiếu."
        : DTAuth.loiTiengViet(e));
      return false;
    }
  }

  function luuCho(actId, ma) { try { sessionStorage.setItem(KHOA_CHO, JSON.stringify({ actId, ma, luc: Date.now() })); } catch (e) {} }
  function xoaCho() { try { sessionStorage.removeItem(KHOA_CHO); } catch (e) {} }
  function docCho() { try { return JSON.parse(sessionStorage.getItem(KHOA_CHO) || "null"); } catch (e) { return null; } }

  // Đọc đường link #diemdanh?a=...&c=... khi mở trang từ mã QR
  function docLink() {
    const m = location.hash.match(/^#diemdanh\?(.*)$/);
    if (!m) return;
    const p = new URLSearchParams(m[1]);
    const actId = p.get("a"), ma = p.get("c");
    if (actId && ma) luuCho(actId, ma);
    history.replaceState(null, "", location.pathname + "#diemdanh");
    const sec = document.getElementById("diemdanh");
    if (sec) sec.scrollIntoView(); else canCuon = true; // trang chưa vẽ xong thì cuộn sau
    if (window.DT) { renderDoanVien(); xuLyCho(); }
  }
  let canCuon = false;

  // Sau khi đăng nhập hoặc khi dữ liệu đã tải: nếu đang có mã chờ thì gửi luôn
  let dangGui = false;
  async function xuLyCho() {
    const { S } = DT;
    const cho = docCho();
    if (!cho || !S.currentUser || !S.loaded.acts || !S.loaded.checkIns || dangGui) return;
    if (Date.now() - cho.luc > 90 * 1000) { xoaCho(); DT.toast("Mã đã quét quá lâu. Quét lại mã đang chiếu."); renderDoanVien(); return; }
    dangGui = true;
    await guiDiemDanh(cho.actId, cho.ma);
    dangGui = false;
    renderDoanVien();
  }

  // Mục "Điểm danh" trên trang chính
  function renderDoanVien() {
    const { S, h, $, fmtDate, today } = DT;
    const box = $("dd-box"); if (!box) return;
    box.replaceChildren();
    if (canCuon) { canCuon = false; setTimeout(() => $("diemdanh").scrollIntoView(), 50); }
    const cho = docCho();
    if (!S.currentUser) {
      box.append(h("article", { class: "patch" },
        h("h3", { text: cho ? "Bạn vừa quét mã điểm danh" : "Điểm danh hoạt động" }),
        h("p", { text: cho ? "Đăng nhập trong vòng 90 giây để hoàn tất điểm danh." : "Đăng nhập rồi quét mã QR Ban Chấp hành chiếu tại hoạt động." }),
        h("a", { class: "btn btn-go", href: "#taikhoan", style: "text-decoration:none" }, "Đăng nhập")));
      return;
    }
    // Hoạt động trong khoảng 1 ngày trước đến 1 ngày sau hôm nay
    const t = today();
    const gan = S.acts.filter((a) => a.date && Math.abs((new Date(a.date) - new Date(t)) / 864e5) <= 1)
      .sort((a, b) => String(a.date).localeCompare(String(b.date)));
    const sel = h("select", { "aria-label": "Hoạt động" }, ...gan.map((a) => h("option", { value: a.id }, fmtDate(a.date) + " · " + a.title)));
    const maIn = h("input", { maxlength: "6", placeholder: "Mã 6 ký tự", autocomplete: "off", autocapitalize: "characters", style: "text-transform:uppercase;letter-spacing:.2em", "aria-label": "Mã điểm danh" });
    const f = h("form", { class: "reg-form", style: "border:0;padding:0;margin:0" },
      gan.length ? h("label", {}, "Hoạt động", sel) : h("p", { class: "meter-note", text: "Hôm nay không có hoạt động nào để điểm danh." }),
      gan.length ? h("label", {}, "Mã điểm danh trên màn chiếu", maIn) : null,
      gan.length ? h("button", { class: "btn btn-go", type: "submit" }, "Điểm danh") : null);
    f.addEventListener("submit", async (e) => { e.preventDefault(); if (await guiDiemDanh(sel.value, maIn.value)) { maIn.value = ""; renderDoanVien(); } });

    const cua = (S.checkIns || []).filter((c) => c.uid === S.me)
      .sort((a, b) => (b.luc && a.luc ? b.luc.toMillis() - a.luc.toMillis() : 0)).slice(0, 5);
    box.append(h("article", { class: "patch" },
      h("h3", { text: "Điểm danh hoạt động" }),
      h("p", { class: "meter-note", text: "Cách nhanh nhất: dùng camera điện thoại quét mã QR trên màn chiếu. Nếu không quét được, gõ mã 6 ký tự ở đây." }),
      f));
    if (cua.length) {
      box.append(h("article", { class: "patch" }, h("h3", { text: "Lượt điểm danh gần đây" }),
        ...cua.map((c) => { const hd = S.acts.find((a) => a.id === c.actId); return h("div", { class: "prop-item" }, h("b", { text: hd ? hd.title : c.actId }), h("span", { class: "meter-note", text: (c.luc ? c.luc.toDate().toLocaleString("vi-VN") : "") + (c.diem ? " · +" + c.diem + " điểm" : "") })); })));
    }
  }

  window.addEventListener("hashchange", docLink);
  docLink();

  window.DTQR = { renderAdmin, renderDoanVien, xuLyCho, guiDiemDanh, dungChieu };
})();
