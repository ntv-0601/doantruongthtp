/* =====================================================================
   dt-auth.js — ĐĂNG NHẬP VÀ QUẢN LÝ TÀI KHOẢN
   ---------------------------------------------------------------------
   Dùng Firebase Authentication (miễn phí) để giữ mật khẩu.
   - Mật khẩu được Firebase băm và cất riêng, KHÔNG nằm trong Firestore.
   - Học sinh đăng nhập bằng "tên tài khoản" (vd: dv10a1_01). Bên dưới,
     hệ thống tự đổi thành dạng email: dv10a1_01@doantruong.local
     vì Firebase chỉ nhận đăng nhập bằng email.
   - Hồ sơ (vai trò, lớp, họ tên) nằm ở bảng users/{uid} trong Firestore.

   Mọi hàm ở đây gọi qua window.DT (do index.html chia sẻ ra), ví dụ:
   DT.S là trạng thái chung, DT.toast() hiện thông báo.
   ===================================================================== */
(function () {
  "use strict";

  // Đuôi email ảo. Không gửi thư tới địa chỉ này.
  const DUOI_EMAIL = "@doantruong.local";
  const VAI_TRO_HOP_LE = ["admin", "codo", "bithu", "gvcn", "member"];

  const emailCua = (tenTk) => String(tenTk || "").trim().toLowerCase() + DUOI_EMAIL;
  const tenHopLe = (tenTk) => /^[a-z0-9_.-]{3,32}$/.test(tenTk);

  // Đổi mã lỗi Firebase sang câu tiếng Việt dễ hiểu
  function loiTiengViet(err) {
    const ma = (err && err.code) || "";
    const bang = {
      "auth/invalid-credential": "Sai tên tài khoản hoặc mật khẩu.",
      "auth/wrong-password": "Sai tên tài khoản hoặc mật khẩu.",
      "auth/user-not-found": "Sai tên tài khoản hoặc mật khẩu.",
      "auth/invalid-email": "Tên tài khoản chỉ gồm chữ thường, số, dấu _ . -",
      "auth/too-many-requests": "Đăng nhập sai quá nhiều lần. Đợi vài phút rồi thử lại.",
      "auth/email-already-in-use": "Tên tài khoản này đã có.",
      "auth/weak-password": "Mật khẩu cần ít nhất 6 ký tự.",
      "auth/network-request-failed": "Mất kết nối mạng.",
      "permission-denied": "Bạn không có quyền làm việc này.",
    };
    return bang[ma] || "Có lỗi: " + (err && err.message ? err.message : ma);
  }

  /* ---------------- ĐĂNG NHẬP, ĐĂNG XUẤT ---------------- */

  async function dangNhap(tenTk, matKhau) {
    const ten = String(tenTk || "").trim().toLowerCase();
    if (!tenHopLe(ten)) throw { code: "auth/invalid-email" };
    await firebase.auth().signInWithEmailAndPassword(emailCua(ten), String(matKhau || ""));
    // Phần còn lại (đọc hồ sơ, vẽ lại trang) do theoDoiPhien() xử lý.
  }

  function dangXuat() {
    return firebase.auth().signOut();
  }

  // Chạy một lần khi mở trang: mỗi khi trạng thái đăng nhập đổi,
  // đọc hồ sơ users/{uid} rồi báo cho index.html qua hàm khiDoi(hoSo).
  function theoDoiPhien(khiDoi) {
    firebase.auth().onAuthStateChanged(async (nguoiDung) => {
      if (!nguoiDung) { khiDoi(null); return; }
      try {
        const snap = await firebase.firestore().doc("users/" + nguoiDung.uid).get();
        if (!snap.exists) {
          DT.toast("Tài khoản chưa có hồ sơ. Nhờ Ban Chấp hành kiểm tra.");
          await dangXuat(); return;
        }
        const hs = Object.assign({ id: nguoiDung.uid }, snap.data());
        if (hs.khoa) {
          DT.toast("Tài khoản đang bị khóa. Liên hệ Ban Chấp hành.");
          await dangXuat(); return;
        }
        khiDoi(hs);
      } catch (e) {
        DT.toast(loiTiengViet(e));
        khiDoi(null);
      }
    });
  }

  /* ---------------- TẠO TÀI KHOẢN (CHỈ BAN CHẤP HÀNH) ----------------
     Vấn đề: hàm tạo tài khoản của Firebase sẽ tự đăng nhập luôn vào
     tài khoản mới, làm Admin bị đăng xuất.
     Cách giải: mở một "app phụ" riêng chỉ để tạo tài khoản. Admin vẫn
     đăng nhập ở app chính.                                              */
  let appPhu = null;
  function layAppPhu() {
    if (!appPhu) appPhu = firebase.initializeApp(DT.firebaseConfig, "tao-tai-khoan");
    return appPhu;
  }

  // tk = {username, password, role, lop, hoTen}
  async function taoTaiKhoan(tk) {
    const ten = String(tk.username || "").trim().toLowerCase();
    const role = VAI_TRO_HOP_LE.includes(tk.role) ? tk.role : "member";
    const lop = String(tk.lop || "").trim().toUpperCase();
    if (!tenHopLe(ten)) throw { code: "auth/invalid-email" };
    if (String(tk.password || "").length < 6) throw { code: "auth/weak-password" };
    if ((role === "bithu" || role === "gvcn") && !lop) throw { message: "Bí thư và GVCN phải có lớp." };

    const authPhu = layAppPhu().auth();
    const kq = await authPhu.createUserWithEmailAndPassword(emailCua(ten), tk.password);
    const uid = kq.user.uid;
    await authPhu.signOut();

    // Ghi hồ sơ bằng app chính (Admin đang đăng nhập) để luật bảo mật cho phép.
    const hoSo = {
      username: ten, role, lop,
      hoTen: String(tk.hoTen || "").trim(),
      dongYNghienCuu: false,   // BCH bật sau khi đã thu phiếu đồng ý của phụ huynh
      khoa: false,
      taoLuc: new Date().toISOString(),
    };
    await DT.db.doc("users/" + uid).set(hoSo);
    if (role === "bithu" || role === "gvcn") {
      await DT.db.doc("vaitro/" + uid).set({ vaiTro: role, lop, hoTen: hoSo.hoTen, since: hoSo.taoLuc });
    }
    return uid;
  }

  // Tạo nhiều tài khoản từ các dòng Excel: [tên, mật khẩu, vai trò, lớp, họ tên]
  function chuanHoaVaiTro(chu) {
    const s = String(chu || "").toLowerCase();
    if (s.includes("admin") || s.includes("bch")) return "admin";
    if (s.includes("cờ đỏ") || s.includes("codo")) return "codo";
    if (s.includes("bí thư") || s.includes("bithu")) return "bithu";
    if (s.includes("giáo viên") || s.includes("gvcn")) return "gvcn";
    return "member";
  }
  async function taoTuExcel(cacDong, baoTienDo) {
    let ok = 0; const loi = [];
    for (let i = 0; i < cacDong.length; i++) {
      const r = cacDong[i] || [];
      const tk = {
        username: r[0], password: String(r[1] || "").trim(), role: chuanHoaVaiTro(r[2]),
        lop: String(r[3] || "").trim() === "-" ? "" : r[3], hoTen: r[4],
      };
      if (!tk.username) continue;
      try { await taoTaiKhoan(tk); ok++; }
      catch (e) { loi.push("Dòng " + (i + 2) + " (" + tk.username + "): " + loiTiengViet(e)); }
      if (baoTienDo) baoTienDo(i + 1, cacDong.length);
    }
    return { ok, loi };
  }

  /* ---------------- CHUYỂN TÀI KHOẢN CŨ ----------------
     Bản cũ lưu mật khẩu thẳng trong bảng users (ai cũng đọc được).
     Hàm này tạo lại từng tài khoản trên Firebase Authentication rồi xóa
     bản ghi cũ có mật khẩu. Mật khẩu dưới 6 ký tự được cấp mới.
     Trả về danh sách để BCH tải về, phát lại cho từng người.          */
  function matKhauNgauNhien() {
    const kyTu = "abcdefghjkmnpqrstuvwxyz23456789";
    let s = ""; const a = new Uint32Array(8); crypto.getRandomValues(a);
    a.forEach((x) => (s += kyTu[x % kyTu.length]));
    return s;
  }
  async function chuyenTaiKhoanCu() {
    const cu = (DT.S.users || []).filter((u) => "password" in u);
    const ketQua = [];
    for (const u of cu) {
      const mk = String(u.password || "").length >= 6 ? String(u.password) : matKhauNgauNhien();
      try {
        await taoTaiKhoan({ username: u.username, password: mk, role: u.role === "owner" || u.role === "bch" ? "admin" : u.role, lop: u.lop, hoTen: u.hoTen });
        await DT.db.doc("users/" + u.id).delete();
        if (u.role === "bithu" || u.role === "gvcn") await DT.db.doc("vaitro/" + u.id).delete().catch(() => {});
        ketQua.push([u.username, mk, mk === String(u.password) ? "Giữ mật khẩu cũ" : "Mật khẩu mới"]);
      } catch (e) {
        ketQua.push([u.username, "", loiTiengViet(e)]);
      }
    }
    return ketQua;
  }

  // Khóa / mở khóa tài khoản (không xóa được tài khoản người khác từ trình duyệt;
  // muốn xóa hẳn thì vào Firebase Console > Authentication).
  function datKhoa(uid, khoa) {
    return DT.db.doc("users/" + uid).update({ khoa: !!khoa });
  }

  function datDongY(uid, dongY) {
    return DT.db.doc("users/" + uid).update({ dongYNghienCuu: !!dongY });
  }

  window.DTAuth = { dangNhap, dangXuat, theoDoiPhien, taoTaiKhoan, taoTuExcel, chuyenTaiKhoanCu, datKhoa, datDongY, loiTiengViet, emailCua };
})();
