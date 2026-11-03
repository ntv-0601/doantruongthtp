# Áo Xanh Đoàn Trường

Cổng thông tin số cho Đoàn trường THPT: lịch và đăng ký hoạt động, thi đua chi đoàn theo tuần, phân công trực ban và lao động sáng thứ Hai, bản tin, Góc đọc sách, album ảnh, video và phân quyền 6 vai trò.

> Bản mẫu tham khảo. Giao diện và mã nguồn trong kho này được tạo bằng công cụ AI Claude theo yêu cầu của người hỗ trợ, ngày 03/11/2026. Nếu dùng cho một dự án nghiên cứu khoa học, kỹ thuật của học sinh, phần này phải được khai báo trung thực ở Phụ lục V và mục Người hỗ trợ của nhật ký nghiên cứu.

## Chức năng

| Khối | Chức năng |
| --- | --- |
| Lịch hoạt động | 10 loại hoạt động (tình nguyện, lao động, trực ban, ngoại khóa, địa chỉ đỏ, văn hóa đọc, văn nghệ, thể thao, học thuật, khác); đăng ký, hủy đăng ký; đếm số chỗ |
| Thi đua chi đoàn | Điểm lưu theo từng tuần, 4 tiêu chí (Nề nếp 40, Học tập 30, Phong trào 20, Tình nguyện 10); xem theo tuần hoặc trung bình; so sánh với tuần trước; lọc theo khối |
| Trực tuần | Chi đoàn trực ban, chi đoàn lao động sáng thứ Hai, khu vực, kết quả từng tuần |
| Bản tin, album | Bản tin, Góc đọc sách, Gương mặt tiêu biểu; đăng ảnh, video có xác nhận về hình ảnh học sinh |
| Tài khoản | 6 vai trò: quản trị, Ban Chấp hành, giáo viên chủ nhiệm, bí thư chi đoàn, đoàn viên, khách; quy trình bí thư gửi điểm, giáo viên chủ nhiệm xác nhận, Ban Chấp hành duyệt |
| Excel | Ban Chấp hành nhập điểm từ Excel (có kiểm lỗi, xem trước), xuất bảng thi đua, xuất danh sách đăng ký |

## Cấu trúc kho

```
index.html            Toàn bộ giao diện và mã (một tệp)
data/*.json           Dữ liệu minh họa cho chế độ trình diễn
data/csv/*.csv        Cùng dữ liệu dạng CSV để mở bằng Excel
docs/data-schema.md   Mô tả các bộ dữ liệu và trường
docs/access-rules.json Quy tắc phân quyền dùng khi chạy trên claude.ai
```

## Hai chế độ chạy

1. **Trên claude.ai (đầy đủ chức năng).** Lưu dữ liệu, tài khoản, tải ảnh và xuất tệp dùng hệ thống của claude.ai. Bản gốc chạy ở chế độ này.
2. **Chế độ trình diễn (GitHub Pages, chỉ đọc).** Khi mở ngoài claude.ai, trang tự đọc dữ liệu minh họa trong `data/`. Xem được lịch, thi đua, trực tuần, bản tin; không đăng ký, không nhập điểm, không tải ảnh được.

Muốn chạy đầy đủ ngoài claude.ai, cần thay phần kết nối dữ liệu (`window.claude.use("db")`, `"user"`, `"assets"`, `"downloads"`) bằng một máy chủ dữ liệu khác, ví dụ Firebase, Supabase hoặc Google Apps Script kết hợp Google Sheets, và tự xây phần đăng nhập, phân quyền.

## Đưa lên GitHub Pages

1. Tạo kho mới trên GitHub, tải toàn bộ thư mục này lên (giữ nguyên cấu trúc).
2. Vào **Settings > Pages**, chọn nhánh `main`, thư mục `/ (root)`, bấm Save.
3. Sau 1–2 phút, trang có ở `https://<tên-tài-khoản>.github.io/<tên-kho>/`.

Mở `index.html` trực tiếp từ máy (đường dẫn `file://`) sẽ không đọc được `data/` vì trình duyệt chặn; dùng GitHub Pages hoặc một máy chủ cục bộ, ví dụ `python3 -m http.server`.

## Dữ liệu và quyền riêng tư

Toàn bộ dữ liệu trong kho là dữ liệu minh họa. Không ghi tên trường, logo, họ tên, ảnh mặt học sinh trong kho công khai. Xem thêm `docs/data-schema.md`.

## Giấy phép

Chưa chọn giấy phép. Chủ kho tự chọn (ví dụ MIT hoặc CC BY 4.0) và thêm tệp `LICENSE` trước khi công khai.
