/* =====================================================================
   dt-diem.js — ĐIỂM CÁ NHÂN, CẤP BẬC, HUY HIỆU, CÂY CHI ĐOÀN, BÁO CÁO
   ---------------------------------------------------------------------
   Nguồn dữ liệu duy nhất cho điểm cá nhân là bảng diemLog (nhật ký điểm).
   Mỗi dòng ghi: ai, được cộng/trừ bao nhiêu, vì sao, lúc nào.
   Luật máy chủ không cho sửa hay xóa dòng đã ghi, nên tổng điểm luôn
   truy ngược được về từng lần cộng. Tổng = cộng tất cả các dòng.

   P0: điểm cá nhân, điều chỉnh điểm có lý do, báo cáo nghiên cứu.
   P1: cấp bậc, huy hiệu, Cây xanh chi đoàn.
   ===================================================================== */
(function () {
  "use strict";

  // Ngưỡng cấp bậc. Ban Chấp hành có thể sửa các con số này.
  const CAP_BAC = [
    { tu: 0, ten: "Mầm xanh" },
    { tu: 20, ten: "Chồi xanh" },
    { tu: 50, ten: "Áo xanh" },
    { tu: 100, ten: "Thủ lĩnh xanh" },
  ];

  // Huy hiệu tính tự động từ lịch sử điểm danh (không lưu riêng)
  const HUY_HIEU = [
    { ma: "dau-tien", ten: "Lần đầu có mặt", moTa: "Điểm danh hoạt động đầu tiên", dat: (x) => x.soLuot >= 1 },
    { ma: "cham-chi", ten: "Chăm chỉ", moTa: "Có mặt 5 hoạt động", dat: (x) => x.soLuot >= 5 },
    { ma: "da-nang", ten: "Đa năng", moTa: "Tham gia 3 loại hoạt động khác nhau", dat: (x) => x.soLoai >= 3 },
    { ma: "tinh-nguyen", ten: "Trái tim tình nguyện", moTa: "3 lần có mặt ở hoạt động tình nguyện", dat: (x) => (x.theoLoai.tinhnguyen || 0) >= 3 },
  ];

  const fv = () => firebase.firestore.FieldValue;

  function tongDiem(uid) {
    return (DT.S.diemLog || []).filter((d) => d.uid === uid).reduce((s, d) => s + (Number(d.diem) || 0), 0);
  }

  function capBac(diem) {
    let hien = CAP_BAC[0], tiep = null;
    CAP_BAC.forEach((c, i) => { if (diem >= c.tu) { hien = c; tiep = CAP_BAC[i + 1] || null; } });
    const phanTram = tiep ? Math.min(100, Math.round(((diem - hien.tu) / (tiep.tu - hien.tu)) * 100)) : 100;
    return { hien, tiep, phanTram };
  }

  function thongKeDiemDanh(uid) {
    const { S } = DT;
    const cua = (S.checkIns || []).filter((c) => c.uid === uid);
    const theoLoai = {};
    cua.forEach((c) => { const hd = S.acts.find((a) => a.id === c.actId); const loai = hd ? hd.type : "khac"; theoLoai[loai] = (theoLoai[loai] || 0) + 1; });
    return { soLuot: cua.length, soLoai: Object.keys(theoLoai).length, theoLoai };
  }

  /* ---------- Thẻ "Điểm rèn luyện của tôi" (mục Tài khoản) ---------- */
  function theDiemCuaToi() {
    const { S, h } = DT;
    if (!S.currentUser) return null;
    const diem = tongDiem(S.me);
    const cb = capBac(diem);
    const tk = thongKeDiemDanh(S.me);
    const lichSu = (S.diemLog || []).filter((d) => d.uid === S.me)
      .sort((a, b) => (b.luc && a.luc ? b.luc.toMillis() - a.luc.toMillis() : 0)).slice(0, 8);

    const thanh = h("div", { class: "meter", role: "img", "aria-label": cb.phanTram + "% tới cấp tiếp theo" });
    const i = h("i"); i.style.width = cb.phanTram + "%"; thanh.append(i);

    return h("article", { class: "patch" },
      h("span", { class: "label", style: "color:var(--field-text)", text: "Điểm rèn luyện của tôi" }),
      h("div", { class: "diem-to" }, h("b", { class: "tab", text: String(diem) }), h("span", { text: "điểm · " + cb.hien.ten })),
      thanh,
      h("p", { class: "meter-note", text: cb.tiep ? "Còn " + (cb.tiep.tu - diem) + " điểm để lên " + cb.tiep.ten + "." : "Đã đạt cấp cao nhất." }),
      h("div", { class: "huy-hieu" }, ...HUY_HIEU.map((x) => h("span", { class: "hh" + (x.dat(tk) ? " dat" : ""), title: x.moTa, text: x.ten }))),
      lichSu.length ? h("div", { class: "reg-table-wrap" }, h("table", { class: "reg-table" },
        h("thead", {}, h("tr", {}, h("th", { text: "Ngày" }), h("th", { text: "Nội dung" }), h("th", { text: "Điểm" }))),
        h("tbody", {}, ...lichSu.map((d) => {
          const hd = S.acts.find((a) => a.id === d.actId);
          const nd = d.nguon === "qr" ? "Điểm danh: " + (hd ? hd.title : d.actId) : (d.lyDo || "Điều chỉnh");
          return h("tr", {}, h("td", { text: d.luc ? d.luc.toDate().toLocaleDateString("vi-VN") : "…" }), h("td", { text: nd }), h("td", { class: "tab", text: (d.diem > 0 ? "+" : "") + d.diem }));
        })))) : h("p", { class: "meter-note", text: "Chưa có điểm. Điểm danh hoạt động để được cộng điểm." }));
  }

  /* ---------- Ban Chấp hành: điều chỉnh điểm có lý do ---------- */
  function renderAdmin() {
    const { S, h, $, toast, db } = DT;
    const box = $("adm-diem"); if (!box) return;
    box.replaceChildren();
    if (!S.admin) return;
    const dsTk = (S.users || []).filter((u) => !("password" in u)).sort((a, b) => String(a.lop).localeCompare(String(b.lop)) || String(a.username).localeCompare(String(b.username)));
    const sel = h("select", { "aria-label": "Tài khoản" }, ...dsTk.map((u) => h("option", { value: u.id }, (u.lop ? u.lop + " · " : "") + (u.hoTen || u.username) + " (" + tongDiem(u.id) + " điểm)")));
    const diemIn = h("input", { type: "number", min: "-50", max: "50", step: "1", required: true, placeholder: "+/- điểm", "aria-label": "Số điểm" });
    const lyDoIn = h("input", { required: true, minlength: "5", maxlength: "200", placeholder: "Lý do (bắt buộc, ít nhất 5 ký tự)", "aria-label": "Lý do" });
    const f = h("form", {}, h("h3", { text: "Điều chỉnh điểm cá nhân" }),
      h("p", { class: "meter-note", text: "Không sửa được dòng điểm cũ. Mọi điều chỉnh là một dòng mới có lý do và tên người ghi." }),
      sel, h("div", { class: "two" }, diemIn, lyDoIn),
      h("button", { class: "btn btn-go", type: "submit" }, "Ghi điều chỉnh"));
    f.addEventListener("submit", async (e) => {
      e.preventDefault();
      const diem = Math.round(Number(diemIn.value));
      if (!diem || Math.abs(diem) > 50) { toast("Điểm điều chỉnh từ -50 đến 50, khác 0."); return; }
      try {
        await db.collection("diemLog").add({ uid: sel.value, nguon: "dieuchinh", diem, lyDo: lyDoIn.value.trim(), boi: S.me, luc: fv().serverTimestamp() });
        f.reset(); toast("Đã ghi điều chỉnh " + (diem > 0 ? "+" : "") + diem + " điểm.");
      } catch (err) { toast(DTAuth.loiTiengViet(err)); }
    });
    box.append(f);
  }

  /* ---------- P1: Cây xanh chi đoàn (trong mục Thi đua) ----------
     Mỗi chi đoàn là một cây. Cây càng lớn khi điểm thi đua trung bình
     các tuần càng cao (thang 100).                                     */
  function veCay(diem) {
    const ns = "http://www.w3.org/2000/svg";
    const tl = 0.45 + 0.55 * Math.max(0, Math.min(1, diem / 100));
    const svg = document.createElementNS(ns, "svg"); svg.setAttribute("viewBox", "0 0 60 70"); svg.setAttribute("aria-hidden", "true");
    const g = document.createElementNS(ns, "g"); g.setAttribute("transform", "translate(30 66) scale(" + tl.toFixed(2) + ") translate(-30 -66)");
    const than = document.createElementNS(ns, "rect"); Object.entries({ x: 27, y: 40, width: 6, height: 26, rx: 2, fill: "#7A5230" }).forEach(([k, v]) => than.setAttribute(k, v));
    g.append(than);
    [[30, 26, 18], [18, 36, 13], [42, 36, 13]].forEach(([cx, cy, r]) => { const c = document.createElementNS(ns, "circle"); c.setAttribute("cx", cx); c.setAttribute("cy", cy); c.setAttribute("r", r); c.setAttribute("fill", diem >= 85 ? "#1F9D55" : diem >= 70 ? "#38B26A" : "#7CC79A"); g.append(c); });
    svg.append(g); return svg;
  }
  function renderCay() {
    const { S, h, $, total, fmt } = DT;
    const box = $("cay-chidoan"); if (!box) return;
    box.replaceChildren();
    if (!S.loaded.teams || !S.teams.length) return;
    const theoLop = {};
    S.teams.forEach((t) => { (theoLop[t.lop] = theoLop[t.lop] || []).push(total(t)); });
    const ds = Object.entries(theoLop).map(([lop, arr]) => ({ lop, tb: arr.reduce((a, b) => a + b, 0) / arr.length, so: arr.length }))
      .sort((a, b) => b.tb - a.tb);
    box.append(h("h3", { class: "cay-tieude", text: "Cây xanh chi đoàn · trung bình các tuần" }),
      h("div", { class: "cay-hang" }, ...ds.map((x) => h("figure", { class: "cay", title: x.lop + ": " + fmt(x.tb) + " điểm trung bình " + x.so + " tuần" }, veCay(x.tb), h("figcaption", {}, h("b", { text: x.lop }), h("span", { class: "tab", text: fmt(x.tb) }))))));
  }

  /* ---------- Báo cáo nghiên cứu KHKT (xuất Excel) ----------
     Chỉ dùng dữ liệu của tài khoản đã có phiếu đồng ý (dongYNghienCuu = true).
     Không xuất họ tên; mỗi người được thay bằng mã ẩn danh NV001, NV002...  */
  function xuatBaoCao() {
    const { S, toast } = DT;
    if (typeof XLSX === "undefined") { toast("Chưa tải được thư viện Excel."); return; }
    const dongY = new Set((S.users || []).filter((u) => u.dongYNghienCuu === true && !("password" in u)).map((u) => u.id));
    const ci = (S.checkIns || []).filter((c) => dongY.has(c.uid));
    const dl = (S.diemLog || []).filter((d) => dongY.has(d.uid));
    const dk = (S.regs || []).filter((r) => dongY.has(r.id));

    // Sheet 1: theo hoạt động
    const hoatDong = [["Ngày", "Hoạt động", "Loại", "Điểm", "Số đăng ký", "Số điểm danh", "Có mặt / đăng ký (%)", "Điểm danh không đăng ký trước"]];
    let tongDk = 0, tongDd = 0, tongDdKhongDk = 0, soHdQr = 0;
    [...S.acts].sort((a, b) => String(a.date).localeCompare(String(b.date))).forEach((a) => {
      const nguoiDk = new Set(dk.filter((r) => (r.activities || []).includes(a.id)).map((r) => r.id));
      const dd = ci.filter((c) => c.actId === a.id);
      const khongDk = dd.filter((c) => !nguoiDk.has(c.uid)).length;
      const coMatDk = dd.filter((c) => nguoiDk.has(c.uid)).length;
      if (dd.length) soHdQr++;
      tongDk += nguoiDk.size; tongDd += dd.length; tongDdKhongDk += khongDk;
      hoatDong.push([a.date || "", a.title, a.type || "", Number(a.points) || 0, nguoiDk.size, dd.length, nguoiDk.size ? Math.round((coMatDk / nguoiDk.size) * 1000) / 10 : "", khongDk]);
    });

    // Sheet 2: thời gian duyệt điểm thi đua (bí thư gửi -> BCH quyết định)
    const duyet = [["Chi đoàn", "Tuần", "Nguồn", "Gửi lúc", "Quyết định lúc", "Số giờ", "Kết quả"]];
    let soGio = [], soTraLai = 0;
    (S.props || []).forEach((d) => Object.values(d.items || {}).forEach((it) => {
      if (!it.sentAt) return;
      if (it.status === "tuchoi") soTraLai++;
      const gio = it.decidedAt ? Math.round(((new Date(it.decidedAt) - new Date(it.sentAt)) / 36e5) * 10) / 10 : "";
      if (it.status === "duyet" && gio !== "" && it.sourceRole !== "codo") soGio.push(gio);
      duyet.push([it.lop || d.lop || "", it.tuan || "", it.sourceRole === "codo" ? "Cờ đỏ" : "Bí thư", it.sentAt, it.decidedAt || "", gio, it.status || "cho"]);
    }));
    const huyLuot = dl.filter((d) => d.nguon === "dieuchinh" && String(d.lyDo || "").startsWith("Hủy lượt")).length;

    // Sheet 3: cá nhân ẩn danh
    const maAn = {}; [...dongY].sort().forEach((id, i) => (maAn[id] = "NV" + String(i + 1).padStart(3, "0")));
    const caNhan = [["Mã ẩn danh", "Lớp", "Tổng điểm", "Số lượt điểm danh", "Số loại hoạt động", "Cấp bậc"]];
    (S.users || []).filter((u) => dongY.has(u.id)).forEach((u) => {
      const diem = dl.filter((d) => d.uid === u.id).reduce((s, d) => s + (Number(d.diem) || 0), 0);
      const tk = thongKeDiemDanh(u.id);
      caNhan.push([maAn[u.id], u.lop || "", diem, tk.soLuot, tk.soLoai, capBac(diem).hien.ten]);
    });

    // Sheet 0: 8 chỉ số tổng hợp
    const tb = (a) => (a.length ? Math.round((a.reduce((x, y) => x + y, 0) / a.length) * 10) / 10 : "");
    const chiSo = [["STT", "Chỉ số", "Giá trị", "Cách tính"],
      [1, "Số tài khoản có phiếu đồng ý", dongY.size, "users.dongYNghienCuu = true"],
      [2, "Số hoạt động có điểm danh QR", soHdQr, "Hoạt động có ít nhất 1 lượt điểm danh"],
      [3, "Tổng lượt đăng ký", tongDk, "registrations (người đồng ý)"],
      [4, "Tổng lượt điểm danh", tongDd, "checkIn (người đồng ý)"],
      [5, "Tỷ lệ điểm danh không đăng ký trước (%)", tongDd ? Math.round((tongDdKhongDk / tongDd) * 1000) / 10 : "", "Điểm danh nhưng chưa đăng ký / tổng điểm danh"],
      [6, "Số lượt điểm danh bị BCH hủy", huyLuot, "diemLog điều chỉnh có lý do bắt đầu bằng 'Hủy lượt'"],
      [7, "Thời gian duyệt điểm thi đua trung bình (giờ)", tb(soGio), "Từ lúc bí thư gửi đến lúc BCH duyệt"],
      [8, "Số phiếu tự chấm bị trả lại", soTraLai, "dexuat có trạng thái tuchoi"],
      ["", "Xuất lúc", new Date().toLocaleString("vi-VN"), "Số liệu lấy trực tiếp từ hệ thống tại thời điểm xuất"]];

    const wb = XLSX.utils.book_new();
    [["ChiSo", chiSo], ["HoatDong", hoatDong], ["DuyetDiem", duyet], ["CaNhanAnDanh", caNhan]].forEach(([ten, du]) => XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(du), ten));
    const out = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    DT.S.dl.save({ filename: "BaoCao_KHKT_" + new Date().toISOString().slice(0, 10) + ".xlsx", data: new Blob([out], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }) });
    toast("Đã xuất báo cáo (" + dongY.size + " tài khoản có phiếu đồng ý).");
  }

  function renderBaoCao() {
    const { S, h, $ } = DT;
    const box = $("adm-baocao"); if (!box) return;
    box.replaceChildren();
    if (!S.admin) return;
    const soDongY = (S.users || []).filter((u) => u.dongYNghienCuu === true).length;
    box.append(h("h3", { text: "Báo cáo nghiên cứu KHKT" }),
      h("p", { class: "meter-note", text: "Xuất 8 chỉ số và dữ liệu ẩn danh. Chỉ tính " + soDongY + " tài khoản đã có phiếu đồng ý (bật ở bảng tài khoản)." }),
      h("button", { class: "btn btn-export", type: "button", onclick: xuatBaoCao }, "Xuất báo cáo Excel"));
  }

  window.DTDiem = { tongDiem, capBac, theDiemCuaToi, renderAdmin, renderCay, renderBaoCao, xuatBaoCao, CAP_BAC };
})();
