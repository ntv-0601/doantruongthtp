/* =====================================================================
   dt-game.js — BỘ MÁY GAME "THOÁT BẪY LỪA ĐẢO"
   ---------------------------------------------------------------------
   Nội dung lấy từ js/game-kichban.js. Tệp này chỉ lo:
   1. Vẽ bản đồ 5 phòng, khóa/mở phòng theo điểm.
   2. Chơi từng thẻ tình huống: loại "chon" (chọn cách xử lý) và
      loại "soi" (chạm vào chỗ đáng ngờ).
   3. Bài kiểm tra trước/sau (đề A/B) và phiếu hài lòng.
   4. Lưu kết quả vào Firestore khi đã đăng nhập:
        khaoSat/{uid}  : điểm kiểm tra trước, sau, hài lòng
        gameLuot/{id}  : mỗi lượt chơi một phòng (điểm từng thẻ)
      Khách chưa đăng nhập vẫn chơi được, tiến độ lưu trên máy.
   5. Xuất dữ liệu nghiên cứu cho Ban Chấp hành.
   ===================================================================== */
(function () {
  "use strict";

  const KB = () => window.GAME_KICHBAN;
  const KHOA_MAY = "dt_game_khach";   // tiến độ của khách (lưu trên máy)
  const fv = () => firebase.firestore.FieldValue;

  // Dữ liệu game của người đang dùng
  const G = { khaoSat: null, luot: [], tatCaKhaoSat: [], tatCaLuot: [], huyNghe: [], duyet: {}, ngheDuyet: null };

  /* ---------------- NGÂN HÀNG TÌNH HUỐNG ----------------
     Toàn bộ tình huống = 40 thẻ gốc trong game-kichban.js + các thẻ do AI sinh
     trong game-nganhang.js. Game chỉ rút những thẻ giáo viên đã DUYỆT
     (trạng thái lưu ở bảng duyetTH/{mãThẻ} trên Firestore).               */
  function nganHang() {
    const goc = [];
    KB().phong.forEach((p) => p.the.forEach((t) => goc.push(Object.assign({ phong: p.ma, that: false, nguon: "Bộ gốc" }, t))));
    return goc.concat(window.GAME_NGANHANG || []);
  }
  const trangThai = (id) => (G.duyet[id] && G.duyet[id].trangThai) || "cho";
  const theDaDuyet = (maPhong) => nganHang().filter((t) => t.phong === maPhong && trangThai(t.id) === "duyet");
  const SO_THE = 8; // số tình huống mỗi lượt chơi

  // Rút 8 thẻ: cố gắng có 2 tình huống thật, 2 thẻ soi, còn lại ngẫu nhiên
  function rutThe(kho) {
    const lay = (loc, n, da) => tron(kho.filter((t) => loc(t) && !da.includes(t))).slice(0, n);
    const chon = [];
    chon.push(...lay((t) => t.that, 2, chon));
    chon.push(...lay((t) => t.loai === "soi", 2, chon));
    chon.push(...lay(() => true, SO_THE - chon.length, chon));
    return tron(chon);
  }

  // Lắng nghe trạng thái duyệt (ai cũng đọc được, kể cả khách)
  function ngheDuyet() {
    if (G.ngheDuyet || !window.DT) return;
    G.ngheDuyet = DT.db.collection("duyetTH").onSnapshot((snap) => {
      const m = {}; snap.docs.forEach((d) => (m[d.id] = d.data())); G.duyet = m; render();
      const el = document.getElementById("duyet-overlay-body"); if (el && G.veDuyet) G.veDuyet();
    }, () => {});
  }

  /* ---------------- TIỆN ÍCH ---------------- */
  function tron(mang) { const a = mang.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function docMay() { try { return JSON.parse(localStorage.getItem(KHOA_MAY) || "{}"); } catch (e) { return {}; } }
  function ghiMay(d) { try { localStorage.setItem(KHOA_MAY, JSON.stringify(d)); } catch (e) {} }
  const ICON_KENH = { zalo: "Zalo", sms: "Tin nhắn", facebook: "Facebook", web: "Trang web", goi: "Cuộc gọi", email: "Email", telegram: "Telegram", app: "Ứng dụng" };

  // Điểm cao nhất đã đạt ở từng phòng
  function diemCaoNhat(maPhong) {
    const { S } = DT;
    if (S.currentUser) return Math.max(-1, ...G.luot.filter((l) => l.phong === maPhong).map((l) => Number(l.diem) || 0));
    const may = docMay(); return may[maPhong] !== undefined ? may[maPhong] : -1;
  }
  function daQua(maPhong) { return diemCaoNhat(maPhong) >= KB().nguongQua; }
  function daLamTruoc() { return !!(G.khaoSat && G.khaoSat.truoc); }
  function daLamSau() { return !!(G.khaoSat && G.khaoSat.sau); }
  function moKhoa(i) {
    const { S } = DT;
    if (S.admin) return true;                              // BCH xem trước mọi phòng
    if (S.currentUser && !daLamTruoc()) return false;      // phải làm bài đầu vào trước
    return i === 0 || daQua(KB().phong[i - 1].ma);
  }
  function quaHet() { return KB().phong.every((p) => daQua(p.ma)); }

  /* ---------------- LẮNG NGHE DỮ LIỆU ---------------- */
  function khiDoiPhien() {
    const { S, db } = DT;
    G.huyNghe.forEach((f) => f()); G.huyNghe = [];
    G.khaoSat = null; G.luot = []; G.tatCaKhaoSat = []; G.tatCaLuot = [];
    if (!S.currentUser) return;
    G.huyNghe.push(db.doc("khaoSat/" + S.me).onSnapshot((s) => { G.khaoSat = s.exists ? s.data() : null; render(); }, () => {}));
    if (S.admin) {
      G.huyNghe.push(db.collection("gameLuot").onSnapshot((s) => { G.tatCaLuot = s.docs.map((d) => Object.assign({ id: d.id }, d.data())); G.luot = G.tatCaLuot.filter((l) => l.uid === S.me); render(); }, () => {}));
      G.huyNghe.push(db.collection("khaoSat").onSnapshot((s) => { G.tatCaKhaoSat = s.docs.map((d) => Object.assign({ id: d.id }, d.data())); render(); }, () => {}));
    } else {
      G.huyNghe.push(db.collection("gameLuot").where("uid", "==", S.me).onSnapshot((s) => { G.luot = s.docs.map((d) => Object.assign({ id: d.id }, d.data())); render(); }, () => {}));
    }
  }

  /* ---------------- BẢN ĐỒ PHÒNG (trên trang chính) ---------------- */
  function render() {
    if (!window.DT || !KB()) return;
    ngheDuyet();
    const { S, h, $ } = DT;
    const box = $("game-box"); if (!box) return;
    box.replaceChildren();
    const kb = KB();
    const dangNhap = !!S.currentUser;

    // Thẻ giới thiệu và bước tiếp theo
    let buoc;
    if (dangNhap && !daLamTruoc()) buoc = h("button", { class: "btn btn-go", type: "button", onclick: () => moKiemTra("truoc") }, "Bắt đầu: bài kiểm tra đầu vào (10 câu)");
    else if (quaHet() && dangNhap && !daLamSau()) buoc = h("button", { class: "btn btn-go", type: "button", onclick: () => moKiemTra("sau") }, "Bài kiểm tra đầu ra (10 câu)");
    else if (quaHet() && (daLamSau() || !dangNhap)) buoc = h("button", { class: "btn btn-done", type: "button", onclick: moThe }, "Xem thẻ Chiến binh an toàn mạng");
    else { const i = kb.phong.findIndex((p) => !daQua(p.ma)); buoc = h("button", { class: "btn btn-go", type: "button", onclick: () => choiPhong(i) }, "Vào " + (i >= 0 ? "Phòng " + (i + 1) : "phòng")); }

    box.append(h("article", { class: "patch game-intro" },
      h("span", { class: "label", style: "color:var(--red)", text: "Game nhận thức an toàn mạng" }),
      h("h3", { text: kb.ten }),
      h("p", { text: kb.moDau }),
      dangNhap ? null : h("p", { class: "meter-note", text: "Bạn đang chơi ở chế độ khách: tiến độ chỉ lưu trên máy này. Đăng nhập để làm bài kiểm tra và nhận thẻ." }),
      daLamTruoc() ? h("p", { class: "meter-note", text: "Điểm đầu vào: " + G.khaoSat.truoc.diem + "/10" + (daLamSau() ? " · Điểm đầu ra: " + G.khaoSat.sau.diem + "/10" : "") }) : null,
      h("div", { class: "row-btn" }, buoc,
        (S.admin || (S.currentUser && S.currentUser.role === "gvcn")) ? h("button", { class: "btn btn-ghost", type: "button", onclick: moDuyet }, "Duyệt ngân hàng tình huống") : null)));

    const ban = h("div", { class: "game-map" });
    kb.phong.forEach((p, i) => {
      const mo = moKhoa(i), cao = diemCaoNhat(p.ma), qua = cao >= kb.nguongQua;
      ban.append(h("button", { class: "phong" + (mo ? "" : " khoa") + (qua ? " qua" : ""), type: "button", disabled: !mo, onclick: () => choiPhong(i), "aria-label": "Phòng " + (i + 1) + ": " + p.ten + (mo ? "" : " (đang khóa)") },
        h("span", { class: "so", text: String(i + 1) }),
        h("b", { text: p.ten }),
        h("small", { text: p.moTa }),
        h("span", { class: "tt", text: !mo ? "Đạt " + kb.nguongQua + "/64 ở phòng trước để mở" : theDaDuyet(p.ma).length < SO_THE ? "Đang chờ giáo viên duyệt tình huống" : cao < 0 ? "Chưa chơi" : "Cao nhất " + cao + "/64" + (qua ? " · Đã qua" : "") }),
        h("small", { class: "kho", text: theDaDuyet(p.ma).length + " tình huống đã duyệt" })));
    });
    box.append(ban);
    renderAdmin();
  }

  /* ---------------- LỚP PHỦ CHƠI GAME ---------------- */
  function moLopPhu(tieuDe) {
    const { h } = DT;
    dongLopPhu();
    const noi = h("div", { class: "g-noi" });
    const lop = h("div", { id: "game-overlay", class: "game-overlay", role: "dialog", "aria-modal": "true", "aria-label": tieuDe },
      h("div", { class: "g-dau" }, h("b", { text: tieuDe }), h("button", { class: "btn btn-ghost", type: "button", onclick: dongLopPhu }, "Thoát")),
      noi);
    document.body.append(lop);
    document.body.style.overflow = "hidden";
    return noi;
  }
  function dongLopPhu() { const el = document.getElementById("game-overlay"); if (el) el.remove(); document.body.style.overflow = ""; }

  // Vẽ "màn hình điện thoại" mô phỏng tin nhắn
  function veDienThoai(the, cheDoSoi) {
    const { h } = DT;
    const dt = h("div", { class: "phone k-" + the.kenh, "data-the": the.id },
      h("div", { class: "ph-dau" }, h("span", { class: "ph-kenh", text: ICON_KENH[the.kenh] || "" }), h("b", { text: the.tu }), the.phu ? h("small", { text: the.phu }) : null));
    const than = h("div", { class: "ph-than" });
    const cacDoan = [];
    the.tin.forEach((b) => {
      const bb = h("div", { class: "bubble" });
      (Array.isArray(b) ? b : [b]).forEach((phan) => {
        // Ở thẻ "soi", đoạn chữ thường đủ dài cũng bấm được (đoạn "nhiễu", không đáng ngờ)
        // để người chơi phải đọc kỹ chứ không bấm hết là đúng.
        if (typeof phan === "string") {
          if (cheDoSoi && phan.trim().length >= 10) phan = { t: phan, n: false };
          else { bb.append(document.createTextNode(phan)); return; }
        }
        if (cheDoSoi) {
          const nut = h("button", { class: "doan", type: "button", "aria-pressed": "false" }, phan.t);
          nut.addEventListener("click", () => { if (nut.disabled) return; nut.setAttribute("aria-pressed", nut.getAttribute("aria-pressed") === "true" ? "false" : "true"); });
          cacDoan.push({ nut, phan });
          bb.append(nut);
        } else bb.append(document.createTextNode(phan.t));
      });
      than.append(bb);
    });
    dt.append(than);
    return { dt, cacDoan };
  }

  /* ---------------- CHƠI MỘT PHÒNG ---------------- */
  function choiPhong(i) {
    const { h, toast } = DT;
    const p = KB().phong[i];
    if (!p || !moKhoa(i)) { toast("Phòng này đang khóa."); return; }
    const kho = theDaDuyet(p.ma);
    let xemTruoc = false, ds;
    if (kho.length >= SO_THE) ds = rutThe(kho);
    else if (DT.S.admin || (DT.S.currentUser && DT.S.currentUser.role === "gvcn")) {
      // Giáo viên, BCH xem trước khi chưa duyệt đủ: rút từ toàn bộ ngân hàng, KHÔNG lưu kết quả
      xemTruoc = true; ds = rutThe(nganHang().filter((t) => t.phong === p.ma && trangThai(t.id) !== "loai"));
    } else { toast("Phòng " + (i + 1) + " đang chờ giáo viên duyệt đủ " + SO_THE + " tình huống."); return; }
    const noi = moLopPhu("Phòng " + (i + 1) + " · " + p.ten + (xemTruoc ? " (xem trước)" : ""));
    const ketQua = [];   // {id, d}
    let viTri = 0;

    const thanhTien = h("div", { class: "g-tien" }, ...ds.map(() => h("i")));
    const diemEl = h("span", { class: "g-diem", text: "0 điểm" });

    function veThe() {
      noi.replaceChildren(h("div", { class: "g-thanh" }, thanhTien, diemEl));
      const the = ds[viTri];
      const laSoi = the.loai === "soi";
      const { dt, cacDoan } = veDienThoai(the, laSoi);
      const hoi = h("p", { class: "g-hoi", text: the.hoi });
      const vungTraLoi = h("div", { class: "g-traloi" });
      const vungPhanHoi = h("div", { class: "g-phanhoi", "aria-live": "polite" });
      noi.append(dt, hoi, vungTraLoi, vungPhanHoi);

      const xong = (d, loiGiai) => {
        ketQua.push({ id: the.id, d });
        thanhTien.children[viTri].className = d === KB().diemMoiThe ? "dung" : d > 0 ? "nua" : "sai";
        const tong = ketQua.reduce((s, x) => s + x.d, 0);
        diemEl.textContent = tong + " điểm";
        vungPhanHoi.append(
          h("div", { class: "g-kq " + (d === KB().diemMoiThe ? "dung" : d > 0 ? "nua" : "sai") }, h("b", { text: d === KB().diemMoiThe ? "Chính xác! +" + d : d > 0 ? "Gần đúng +" + d : "Chưa đúng +0" }),
            h("span", { class: "g-nhan " + (the.that ? "that" : "gia"), text: the.that ? "Đây là tình huống THẬT, an toàn" : "Đây là tình huống LỪA ĐẢO" }), loiGiai),
          h("p", { class: "g-hoc" }, h("b", { text: "Ghi nhớ: " }), the.hoc),
          h("button", { class: "btn btn-go", type: "button", onclick: () => { viTri++; viTri < ds.length ? veThe() : ketThuc(); } }, viTri + 1 < ds.length ? "Tình huống tiếp" : "Xem kết quả"));
        vungPhanHoi.querySelector("button").focus();
      };

      if (!laSoi) {
        tron(the.chon).forEach((c) => {
          const nut = h("button", { class: "g-chon", type: "button" }, c.t);
          nut.addEventListener("click", () => {
            vungTraLoi.querySelectorAll("button").forEach((b) => (b.disabled = true));
            nut.classList.add(c.dung ? "dung" : "sai");
            if (!c.dung) { const dungNut = [...vungTraLoi.children].find((b) => the.chon.find((x) => x.t === b.textContent).dung); if (dungNut) dungNut.classList.add("dung"); }
            xong(c.dung ? KB().diemMoiThe : 0, h("p", { text: c.g }));
          });
          vungTraLoi.append(nut);
        });
      } else {
        vungTraLoi.append(h("p", { class: "meter-note", text: "Chạm vào đoạn chữ có viền để đánh dấu. Chạm lần nữa để bỏ." }));
        const xn = h("button", { class: "btn btn-go", type: "button" }, "Xác nhận");
        xn.addEventListener("click", () => {
          xn.disabled = true;
          let dungChon = 0, saiChon = 0; const tongNghi = cacDoan.filter((x) => x.phan.n).length;
          const giai = h("ul", { class: "g-giai" });
          cacDoan.forEach(({ nut, phan }) => {
            const chon = nut.getAttribute("aria-pressed") === "true";
            nut.disabled = true;
            if (phan.n && chon) { dungChon++; nut.classList.add("dung"); }
            else if (phan.n && !chon) nut.classList.add("bosot");
            else if (!phan.n && chon) { saiChon++; nut.classList.add("sai"); }
            if (phan.n) giai.append(h("li", {}, h("b", { text: "\"" + phan.t + "\": " }), phan.g || ""));
          });
          // Chấm: đủ hết, không chọn sai = 8; được ít nhất một nửa và sai tối đa 1 = 4; còn lại 0
          const d = dungChon === tongNghi && saiChon === 0 ? KB().diemMoiThe : dungChon * 2 >= tongNghi && saiChon <= 1 ? KB().diemMoiThe / 2 : 0;
          xong(d, h("div", {}, h("p", { text: "Bạn tìm đúng " + dungChon + "/" + tongNghi + " dấu hiệu" + (saiChon ? ", chọn nhầm " + saiChon + " chỗ." : ".") }), giai));
        });
        vungTraLoi.append(xn);
      }
    }

    async function ketThuc() {
      const kb = KB();
      const tong = ketQua.reduce((s, x) => s + x.d, 0);
      const qua = tong >= kb.nguongQua;
      const { S, db, h, toast } = DT;
      // Lưu kết quả
      if (xemTruoc) { /* xem trước: không lưu */ }
      else if (S.currentUser) {
        try {
          await db.collection("gameLuot").add({ uid: S.me, lop: S.currentUser.lop || "", phong: p.ma, diem: tong, chiTiet: ketQua, lan: G.luot.filter((l) => l.phong === p.ma).length + 1, luc: fv().serverTimestamp() });
        } catch (e) { toast("Chưa lưu được kết quả: " + DTAuth.loiTiengViet(e)); }
      } else {
        const may = docMay(); may[p.ma] = Math.max(may[p.ma] ?? -1, tong); ghiMay(may);
      }
      noi.replaceChildren(
        h("div", { class: "g-tongket " + (qua ? "qua" : "truot") },
          h("span", { class: "label", text: qua ? "Vượt phòng" : "Chưa đạt" }),
          h("b", { class: "g-so", text: tong + "/64" }),
          h("p", { text: qua ? "Bạn đã thoát bẫy ở phòng " + p.ten + "." : "Cần " + kb.nguongQua + "/64 để mở phòng tiếp theo. Xem lại các nguyên tắc rồi thử lại nhé." })),
        h("div", { class: "g-nguyentac" }, h("b", { text: "3 nguyên tắc của phòng này" }), h("ol", {}, ...p.nguyenTac.map((x) => h("li", { text: x })))),
        h("p", { class: "meter-note", text: "Kỹ năng công dân số: " + p.kyNang + "." }),
        h("div", { class: "row-btn" },
          h("button", { class: "btn btn-ghost", type: "button", onclick: () => choiPhong(i) }, "Chơi lại"),
          qua && i + 1 < kb.phong.length ? h("button", { class: "btn btn-go", type: "button", onclick: () => choiPhong(i + 1) }, "Sang phòng " + (i + 2)) : null,
          h("button", { class: "btn btn-ghost", type: "button", onclick: () => { dongLopPhu(); render(); } }, "Về bản đồ")));
      render();
    }

    veThe();
  }

  /* ---------------- BÀI KIỂM TRA TRƯỚC / SAU ---------------- */
  function moKiemTra(loai) {
    const { S, db, h, toast } = DT;
    if (!S.currentUser) { toast("Đăng nhập để làm bài kiểm tra."); return; }
    if (loai === "truoc" && daLamTruoc()) { toast("Bạn đã làm bài đầu vào."); return; }
    if (loai === "sau" && (!daLamTruoc() || daLamSau())) return;
    // Chia đề: bài đầu vào chọn ngẫu nhiên A hoặc B; bài đầu ra dùng đề còn lại
    const de = loai === "truoc" ? (Math.random() < 0.5 ? "A" : "B") : (G.khaoSat.truoc.de === "A" ? "B" : "A");
    const cauHoi = KB().kiemTra[de];
    const noi = moLopPhu(loai === "truoc" ? "Bài kiểm tra đầu vào" : "Bài kiểm tra đầu ra");
    const traLoi = new Array(cauHoi.length).fill(-1);

    noi.append(h("p", { class: "meter-note", text: "10 câu, mỗi câu 1 điểm. Chưa hiện đáp án trong lúc làm. Làm trung thực để đo đúng hiểu biết của bạn." }));
    const form = h("form", { class: "g-kt" });
    cauHoi.forEach((c, i) => {
      const nhom = h("fieldset", {}, h("legend", { text: (i + 1) + ". " + c.h }));
      tron(c.c.map((t, j) => ({ t, j }))).forEach((o) => {
        const r = h("input", { type: "radio", name: "c" + i, value: String(o.j) });
        r.addEventListener("change", () => (traLoi[i] = o.j));
        nhom.append(h("label", { class: "g-lc" }, r, h("span", { text: o.t })));
      });
      form.append(nhom);
    });
    const nop = h("button", { class: "btn btn-go", type: "submit" }, "Nộp bài");
    form.append(nop);
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const chua = traLoi.findIndex((x) => x < 0);
      if (chua >= 0) { toast("Còn câu " + (chua + 1) + " chưa trả lời."); return; }
      nop.disabled = true;
      const diem = cauHoi.reduce((s, c, i) => s + (traLoi[i] === c.d ? 1 : 0), 0);
      const bai = { de, diem, traLoi, luc: fv().serverTimestamp() };
      try {
        if (loai === "truoc") await db.doc("khaoSat/" + S.me).set({ truoc: bai });
        else await db.doc("khaoSat/" + S.me).update({ sau: bai });
      } catch (err) { nop.disabled = false; toast("Chưa lưu được bài: " + DTAuth.loiTiengViet(err)); return; }
      noi.replaceChildren(
        h("div", { class: "g-tongket qua" }, h("span", { class: "label", text: "Đã nộp" }), h("b", { class: "g-so", text: diem + "/10" }),
          h("p", { text: loai === "truoc" ? "Giờ hãy vào Phòng 1. Sau 5 phòng, bạn sẽ làm bài đầu ra để xem mình tiến bộ thế nào." : "So với đầu vào: " + G.khaoSat.truoc.diem + "/10." })),
        loai === "sau" ? phieuHaiLong(noi) : h("button", { class: "btn btn-go", type: "button", onclick: () => choiPhong(0) }, "Vào Phòng 1"));
    });
    noi.append(form);
  }

  function phieuHaiLong(noi) {
    const { S, db, h, toast } = DT;
    const f = h("form", { class: "g-kt" });
    const hoi = [["hailong", "Bạn thấy game hữu ích ở mức nào?"], ["tutin", "Bạn tự tin nhận diện lừa đảo hơn trước ở mức nào?"]];
    const gt = {};
    hoi.forEach(([k, t]) => {
      const fs = h("fieldset", {}, h("legend", { text: t }));
      const hang = h("div", { class: "g-sao" });
      [1, 2, 3, 4, 5].forEach((n) => { const r = h("input", { type: "radio", name: k, value: String(n) }); r.addEventListener("change", () => (gt[k] = n)); hang.append(h("label", {}, r, h("span", { text: String(n) }))); });
      fs.append(hang, h("small", { class: "meter-note", text: "1 = rất thấp · 5 = rất cao" }));
      f.append(fs);
    });
    f.append(h("button", { class: "btn btn-go", type: "submit" }, "Gửi và nhận thẻ"));
    f.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!gt.hailong || !gt.tutin) { toast("Chọn mức cho cả 2 câu."); return; }
      try { await db.doc("khaoSat/" + S.me).update({ hailong: { diem: gt.hailong, tutin: gt.tutin, luc: fv().serverTimestamp() } }); }
      catch (err) { toast(DTAuth.loiTiengViet(err)); return; }
      moThe();
    });
    return f;
  }

  /* ---------------- THẺ CHIẾN BINH AN TOÀN MẠNG ---------------- */
  function moThe() {
    const { S, h } = DT;
    const noi = moLopPhu("Thẻ Chiến binh an toàn mạng");
    const ten = S.currentUser ? (S.currentUser.bietDanh || S.currentUser.hoTen || S.currentUser.username) : "Khách";
    noi.append(h("div", { class: "g-the" },
      h("span", { class: "label", text: "Đoàn trường THPT A" }),
      h("b", { class: "g-the-ten", text: "Chiến binh an toàn mạng" }),
      h("p", { text: ten + (S.currentUser && S.currentUser.lop ? " · " + S.currentUser.lop : "") }),
      h("p", { class: "meter-note", text: "Đã vượt 5 phòng: Trend giả mạo · Tin nhắn và link lạ · Mạo danh người quen · Việc nhẹ lương cao · Bảo vệ tài khoản" }),
      h("p", { class: "meter-note", text: "Cấp ngày " + new Date().toLocaleDateString("vi-VN") })),
      h("p", { class: "meter-note", text: "Chụp màn hình thẻ này để chia sẻ. Hãy kể cho người thân 1 thủ đoạn bạn vừa học được." }),
      h("button", { class: "btn btn-go", type: "button", onclick: () => { dongLopPhu(); render(); } }, "Đóng"));
  }

  /* ---------------- GIÁO VIÊN DUYỆT NGÂN HÀNG TÌNH HUỐNG ----------------
     Mỗi thẻ có 3 trạng thái: duyet (được đưa vào game), sua (cần sửa, kèm
     ghi chú), loai (bỏ). Lưu ai duyệt, lúc nào để làm minh chứng.          */
  const NHAN_TT = { cho: "Chờ duyệt", duyet: "Đã duyệt", sua: "Cần sửa", loai: "Loại" };
  const loc = { phong: "p1", tt: "cho", viTri: 0 };

  async function datTrangThai(the, tt, ghiChu) {
    const { S, db, toast } = DT;
    const u = S.currentUser || {};
    try {
      await db.doc("duyetTH/" + the.id).set({
        trangThai: tt,
        ghiChu: ghiChu || "",
        boi: S.me || u.id || "quantri",
        ten: u.bietDanh || u.hoTen || u.maDoanVien || u.username || S.me || "Quản trị viên",
        luc: fv().serverTimestamp()
      });
    } catch (e) { toast(DTAuth.loiTiengViet(e)); return false; }
    return true;
  }

  function moDuyet() {
    const { h } = DT;
    const noi = moLopPhu("Duyệt ngân hàng tình huống");
    noi.id = "duyet-overlay-body";
    G.veDuyet = () => veDuyet(noi);
    veDuyet(noi);
  }

  function veDuyet(noi) {
    const { h, toast } = DT;
    const kb = KB(), tatCa = nganHang();
    const ds = tatCa.filter((t) => t.phong === loc.phong && (loc.tt === "tatca" || trangThai(t.id) === loc.tt));
    if (loc.viTri >= ds.length) loc.viTri = Math.max(0, ds.length - 1);
    const dem = (ma, tt) => tatCa.filter((t) => t.phong === ma && trangThai(t.id) === tt).length;

    const chonPhong = h("select", { "aria-label": "Phòng" }, ...kb.phong.map((p, i) => h("option", { value: p.ma, selected: p.ma === loc.phong }, "Phòng " + (i + 1) + ": " + p.ten + " (" + dem(p.ma, "duyet") + " đã duyệt)")));
    chonPhong.addEventListener("change", () => { loc.phong = chonPhong.value; loc.viTri = 0; veDuyet(noi); });
    const chonTT = h("select", { "aria-label": "Trạng thái" }, ...[["cho", "Chờ duyệt"], ["sua", "Cần sửa"], ["duyet", "Đã duyệt"], ["loai", "Loại"], ["tatca", "Tất cả"]].map(([k, v]) => h("option", { value: k, selected: k === loc.tt }, v + (k === "tatca" ? "" : " (" + dem(loc.phong, k) + ")"))));
    chonTT.addEventListener("change", () => { loc.tt = chonTT.value; loc.viTri = 0; veDuyet(noi); });

    noi.replaceChildren(
      h("p", { class: "meter-note", text: "Tổng " + tatCa.length + " tình huống · Đã duyệt " + tatCa.filter((t) => trangThai(t.id) === "duyet").length + ". Mỗi phòng cần ít nhất " + SO_THE + " tình huống đã duyệt thì học sinh mới chơi được; càng nhiều thì mỗi lượt càng khác nhau." }),
      h("div", { class: "two" }, chonPhong, chonTT),
      h("div", { class: "row-btn" }, h("button", { class: "btn btn-export", type: "button", onclick: xuatNganHang }, "Xuất danh sách để duyệt trên giấy (Excel)")));

    if (!ds.length) { noi.append(h("p", { class: "g-hoc", text: "Không có tình huống nào trong mục này." })); return; }
    const t = ds[loc.viTri];
    const d = G.duyet[t.id];
    const { dt } = veDienThoai(t, false);
    const goiY = t.loai === "soi"
      ? h("ul", { class: "g-giai" }, ...t.tin.flat().filter((x) => typeof x === "object" && x.n).map((x) => h("li", {}, h("b", { text: "\"" + x.t + "\": " }), x.g)))
      : h("ul", { class: "g-giai" }, ...t.chon.map((c) => h("li", {}, h("b", { text: (c.dung ? "✔ ĐÚNG: " : "✘ ") + c.t }), h("br"), c.g)));
    const ghi = h("input", { maxlength: "200", placeholder: "Ghi chú cho người sửa (bắt buộc khi chọn Cần sửa)", value: d && d.ghiChu ? d.ghiChu : "", "aria-label": "Ghi chú" });
    const nut = (tt, nhan, cls) => h("button", { class: "btn " + cls, type: "button", onclick: async () => {
      if (tt === "sua" && ghi.value.trim().length < 5) { toast("Ghi rõ cần sửa gì (ít nhất 5 ký tự)."); ghi.focus(); return; }
      if (await datTrangThai(t, tt, ghi.value.trim())) { toast(NHAN_TT[tt] + ": " + t.id); if (loc.tt === "tatca" || loc.tt === tt) loc.viTri++; }
    } }, nhan);

    noi.append(...[
      h("div", { class: "row-btn", style: "justify-content:space-between" },
        h("button", { class: "btn btn-ghost", type: "button", disabled: loc.viTri === 0, onclick: () => { loc.viTri--; veDuyet(noi); } }, "‹ Trước"),
        h("b", { text: (loc.viTri + 1) + "/" + ds.length }),
        h("button", { class: "btn btn-ghost", type: "button", disabled: loc.viTri >= ds.length - 1, onclick: () => { loc.viTri++; veDuyet(noi); } }, "Sau ›")),
      h("p", { class: "meter-note" }, h("b", { text: t.id }), " · " + (t.loai === "soi" ? "Soi dấu hiệu" : "Chọn cách xử lý") + " · ", h("span", { class: "g-nhan " + (t.that ? "that" : "gia"), text: t.that ? "Tình huống thật" : "Lừa đảo" }), " · Nguồn: " + (t.nguon || "")),
      d ? h("p", { class: "meter-note", text: "Hiện tại: " + NHAN_TT[d.trangThai] + (d.ten ? " · " + d.ten : "") + (d.luc ? " · " + d.luc.toDate().toLocaleString("vi-VN") : "") + (d.ghiChu ? " · Ghi chú: " + d.ghiChu : "") }) : null,
      dt,
      h("p", { class: "g-hoi", text: t.hoi }),
      goiY,
      h("p", { class: "g-hoc" }, h("b", { text: "Ghi nhớ: " }), t.hoc),
      ghi,
      h("div", { class: "row-btn" }, nut("duyet", "Duyệt", "btn-go"), nut("sua", "Cần sửa", "btn-ghost"), nut("loai", "Loại", "btn-ghost"))].filter(Boolean));
  }

  function xuatNganHang() {
    const { S, toast } = DT;
    if (typeof XLSX === "undefined") { toast("Chưa tải được thư viện Excel."); return; }
    const kb = KB();
    const noiDung = (t) => t.tin.map((b) => (Array.isArray(b) ? b : [b]).map((x) => (typeof x === "string" ? x : "[" + x.t + "]")).join("")).join(" / ");
    const dapAn = (t) => (t.loai === "soi" ? t.tin.flat().filter((x) => typeof x === "object" && x.n).map((x) => x.t).join(" | ") : (t.chon.find((c) => c.dung) || {}).t);
    const rows = [["Mã", "Phòng", "Loại", "Thật/Lừa đảo", "Kênh", "Người gửi", "Nội dung", "Câu hỏi", "Đáp án đúng / dấu hiệu", "Ghi nhớ", "Nguồn", "Trạng thái", "Người duyệt", "Thời gian", "Ghi chú", "Ý kiến giáo viên (ghi tay)"]];
    nganHang().forEach((t) => { const d = G.duyet[t.id] || {}; const p = kb.phong.find((x) => x.ma === t.phong) || {}; rows.push([t.id, p.ten, t.loai === "soi" ? "Soi" : "Chọn", t.that ? "Thật" : "Lừa đảo", t.kenh, t.tu, noiDung(t), t.hoi, dapAn(t), t.hoc, t.nguon || "", NHAN_TT[trangThai(t.id)], d.ten || "", d.luc ? d.luc.toDate().toLocaleString("vi-VN") : "", d.ghiChu || "", ""]); });
    const ws = XLSX.utils.aoa_to_sheet(rows);
    ws["!cols"] = [8, 18, 6, 9, 9, 18, 60, 40, 40, 40, 24, 11, 16, 16, 24, 30].map((w) => ({ wch: w }));
    const wb = XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb, ws, "NganHangTinhHuong");
    const out = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    S.dl.save({ filename: "NganHang_TinhHuong_" + new Date().toISOString().slice(0, 10) + ".xlsx", data: new Blob([out], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }) });
  }

  /* ---------------- BAN CHẤP HÀNH: SỐ LIỆU NGHIÊN CỨU ---------------- */
  function renderAdmin() {
    const { S, h, $ } = DT;
    const box = $("adm-game"); if (!box) return;
    box.replaceChildren();
    if (!S.admin) return;
    const ks = G.tatCaKhaoSat;
    const tb = (a) => (a.length ? (a.reduce((x, y) => x + y, 0) / a.length).toFixed(2) : "–");
    const cap = ks.filter((k) => k.truoc && k.sau);
    box.append(h("h3", { text: "Game Thoát bẫy lừa đảo" }),
      h("p", { class: "meter-note", text: ks.filter((k) => k.truoc).length + " bài đầu vào · " + cap.length + " cặp trước/sau · TB trước " + tb(cap.map((k) => k.truoc.diem)) + " → sau " + tb(cap.map((k) => k.sau.diem)) + " (chưa lọc phiếu đồng ý)" }),
      h("button", { class: "btn btn-export", type: "button", onclick: xuatDuLieu }, "Xuất dữ liệu game (Excel)"));
  }

  function xuatDuLieu() {
    const { S, toast } = DT;
    if (typeof XLSX === "undefined") { toast("Chưa tải được thư viện Excel."); return; }
    const dongY = new Set((S.users || []).filter((u) => u.dongYNghienCuu === true).map((u) => u.id));
    const maAn = {}; [...dongY].sort().forEach((id, i) => (maAn[id] = "NV" + String(i + 1).padStart(3, "0")));
    const lopCua = (uid) => ((S.users || []).find((u) => u.id === uid) || {}).lop || "";
    const kb = KB();

    // 1. Trước - sau
    const ts = [["Mã ẩn danh", "Lớp", "Đề trước", "Điểm trước", "Đề sau", "Điểm sau", "Chênh lệch", "Hữu ích (1-5)", "Tự tin (1-5)"]];
    G.tatCaKhaoSat.filter((k) => dongY.has(k.id) && k.truoc).forEach((k) => {
      ts.push([maAn[k.id], lopCua(k.id), k.truoc.de, k.truoc.diem, k.sau ? k.sau.de : "", k.sau ? k.sau.diem : "", k.sau ? k.sau.diem - k.truoc.diem : "", k.hailong ? k.hailong.diem : "", k.hailong ? k.hailong.tutin : ""]);
    });

    // 2. Từng câu kiểm tra: tỷ lệ đúng trước/sau theo câu (câu i của đề A và B đo cùng một hiểu biết)
    const cau = [["Câu", "Nội dung đo (đề A)", "Đúng trước (%)", "Đúng sau (%)", "Số bài trước", "Số bài sau"]];
    for (let i = 0; i < 10; i++) {
      const tr = [], sa = [];
      G.tatCaKhaoSat.filter((k) => dongY.has(k.id)).forEach((k) => {
        if (k.truoc) tr.push(k.truoc.traLoi[i] === kb.kiemTra[k.truoc.de][i].d ? 1 : 0);
        if (k.sau) sa.push(k.sau.traLoi[i] === kb.kiemTra[k.sau.de][i].d ? 1 : 0);
      });
      const pt = (a) => (a.length ? Math.round((a.reduce((x, y) => x + y, 0) / a.length) * 1000) / 10 : "");
      cau.push([i + 1, kb.kiemTra.A[i].h, pt(tr), pt(sa), tr.length, sa.length]);
    }

    // 3. Từng tình huống: tỷ lệ đúng ở LƯỢT CHƠI ĐẦU TIÊN (đo hiểu biết ban đầu)
    const luotDau = {};
    G.tatCaLuot.filter((l) => dongY.has(l.uid)).forEach((l) => {
      const k = l.uid + "|" + l.phong;
      if (!luotDau[k] || (l.luc && luotDau[k].luc && l.luc.toMillis() < luotDau[k].luc.toMillis())) luotDau[k] = l;
    });
    const thongKe = {};
    Object.values(luotDau).forEach((l) => (l.chiTiet || []).forEach((x) => { const t = (thongKe[x.id] = thongKe[x.id] || { n: 0, dung: 0 }); t.n++; if (x.d === kb.diemMoiThe) t.dung++; }));
    const th = [["Mã thẻ", "Phòng", "Loại", "Thật/Lừa đảo", "Tình huống", "Số lượt gặp (lượt đầu)", "Đúng hoàn toàn (%)"]];
    nganHang().filter((t) => trangThai(t.id) === "duyet").forEach((t) => { const s = thongKe[t.id] || { n: 0, dung: 0 }; const p = kb.phong.find((x) => x.ma === t.phong) || {}; th.push([t.id, p.ten, t.loai === "soi" ? "Soi dấu hiệu" : "Chọn cách xử lý", t.that ? "Thật" : "Lừa đảo", t.tu + ": " + (t.hoi.length > 80 ? t.hoi.slice(0, 80) + "…" : t.hoi), s.n, s.n ? Math.round((s.dung / s.n) * 1000) / 10 : ""]); });

    // 4. Từng phòng
    const ph = [["Phòng", "Số người chơi", "Điểm TB lượt đầu (/64)", "Số người đã qua", "Số lượt chơi TB để qua"]];
    kb.phong.forEach((p) => {
      const dau = Object.values(luotDau).filter((l) => l.phong === p.ma);
      const nguoi = [...new Set(G.tatCaLuot.filter((l) => dongY.has(l.uid) && l.phong === p.ma).map((l) => l.uid))];
      const daQuaDs = nguoi.filter((u) => G.tatCaLuot.some((l) => l.uid === u && l.phong === p.ma && l.diem >= kb.nguongQua));
      const soLuot = daQuaDs.map((u) => G.tatCaLuot.filter((l) => l.uid === u && l.phong === p.ma).sort((a, b) => (a.luc && b.luc ? a.luc.toMillis() - b.luc.toMillis() : 0)).findIndex((l) => l.diem >= kb.nguongQua) + 1);
      ph.push([p.ten, nguoi.length, dau.length ? Math.round((dau.reduce((s, l) => s + l.diem, 0) / dau.length) * 10) / 10 : "", daQuaDs.length, soLuot.length ? Math.round((soLuot.reduce((a, b) => a + b, 0) / soLuot.length) * 10) / 10 : ""]);
    });

    const wb = XLSX.utils.book_new();
    [["TruocSau", ts], ["TungCau", cau], ["TungPhong", ph], ["TungTinhHuong", th]].forEach(([n, d]) => XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(d), n));
    const out = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    S.dl.save({ filename: "Game_ThoatBay_" + new Date().toISOString().slice(0, 10) + ".xlsx", data: new Blob([out], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }) });
    toast("Đã xuất dữ liệu game (" + dongY.size + " tài khoản có phiếu đồng ý).");
  }

  window.DTGame = { render, khiDoiPhien, choiPhong, moKiemTra, moDuyet, nganHang };
})();
