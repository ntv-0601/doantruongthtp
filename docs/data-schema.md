# Cấu trúc dữ liệu

Mỗi tệp trong `data/` là một mảng JSON, mỗi phần tử là một bản ghi có trường `id`. Tệp CSV cùng tên trong `data/csv/` dùng để mở bằng Excel (mã hóa UTF-8 có BOM).

| Bộ dữ liệu | Nội dung | Mã bản ghi (`id`) | Trường chính |
| --- | --- | --- | --- |
| `activities` | Hoạt động Đoàn | tự sinh | `title`, `type`, `date` (YYYY-MM-DD), `time`, `place`, `slots` (0 = không giới hạn), `points` (điểm rèn luyện), `desc`, `media` |
| `diemtuan` | Điểm thi đua chi đoàn theo tuần | `T<tuần>-<lớp>`, ví dụ `T10-11A2` | `tuan`, `lop`, `nenep` (tối đa 40), `hoctap` (30), `phongtrao` (20), `tinhnguyen` (10), `source` (`excel`, `bithu`) |
| `phancong` | Phân công trực tuần | `T<tuần>` | `tuan`, `tuNgay`, `denNgay`, `trucban`, `laodong`, `khuVuc`, `ketQua` (`tot`, `dat`, `chua`, rỗng), `ghiChu`, `media` |
| `news` | Bản tin, Góc đọc sách, Gương mặt tiêu biểu | tự sinh | `title`, `body`, `tag` (`tin`, `vanhoadoc`, `guongmat`), `lop`, `date`, `media` |
| `registrations` | Đăng ký hoạt động | mã tài khoản người đăng ký | `hoTen`, `lop`, `activities` (danh sách `id` hoạt động) |
| `vaitro` | Vai trò đã duyệt | mã tài khoản | `vaiTro` (`bithu`, `gvcn`), `lop`, `hoTen` |
| `yeucau` | Đề nghị vai trò | mã tài khoản | `vaiTro`, `lop`, `hoTen`, `status` (`cho`, `duyet`, `tuchoi`) |
| `dexuat` | Tự chấm của bí thư | mã tài khoản bí thư | `lop`, `items` theo khóa `T<tuần>`: 4 tiêu chí, `ghiChu`, `status`, `sentAt` |
| `xacnhan` | Xác nhận của giáo viên chủ nhiệm | mã tài khoản giáo viên | `lop`, `items` theo khóa `<mã bí thư>:T<tuần>`: `status` (`ok`, `tralai`), `lyDo`, `sentAt` |

`type` của hoạt động: `tinhnguyen`, `laodong`, `trucban`, `ngoaikhoa`, `diachido`, `vanhoadoc`, `vannghe`, `thethao`, `hocthuat`, `khac`.

`media`: danh sách `{id, kind}` với `kind` là `image` hoặc `video`. Ảnh, video lưu trên claude.ai nên không có trong kho này; các bản xuất để `media` rỗng.

## Quy tắc phân quyền khi chạy trên claude.ai

Xem `docs/access-rules.json`. Mức `view` là người được xem, `interact` là người tham gia, `admin` là người có quyền chỉnh sửa trang (Ban Chấp hành). Đường dẫn có `{self}` chỉ cho mỗi người ghi bản ghi của chính mình.

## Quyền riêng tư

`data/registrations.json` trong kho là bản ghi minh họa. Không đưa họ tên thật, mã tài khoản, ngày sinh, số điện thoại của học sinh lên kho công khai. Nếu cần lưu dữ liệu thật, để trong `data/private/` (đã bị `.gitignore` loại trừ) hoặc dùng kho riêng tư.
