# Hướng dẫn triển khai bản nâng cấp P0 + P1

Bản này thêm vào trang hiện có (GitHub Pages + Firebase Firestore):

| Mức | Nội dung |
|---|---|
| P0 | Đăng nhập bảo mật bằng Firebase Authentication (mật khẩu không còn nằm trong Firestore) |
| P0 | Luật bảo mật Firestore chạy trên máy chủ: phân quyền theo vai trò, Cờ đỏ chỉ sửa Nề nếp, bí thư chỉ gửi cho lớp mình |
| P0 | Điểm danh hoạt động bằng mã QR đổi mỗi 30 giây, máy chủ kiểm tra mã |
| P0 | Nhật ký điểm cá nhân (diemLog) không sửa, không xóa được; điều chỉnh phải có lý do |
| P0 | Báo cáo nghiên cứu KHKT: 8 chỉ số, dữ liệu ẩn danh, chỉ tính người có phiếu đồng ý |
| P1 | Điểm rèn luyện cá nhân, cấp bậc (Mầm xanh → Thủ lĩnh xanh), 4 huy hiệu |
| P1 | Cây xanh chi đoàn trong mục Thi đua |
| Game | "Thoát bẫy lừa đảo": 5 phòng, 40 tình huống, bài kiểm tra đầu vào/đầu ra đề A/B, phiếu hài lòng, thẻ Chiến binh an toàn mạng, xuất dữ liệu nghiên cứu |

Tất cả dùng gói **Spark miễn phí** của Firebase, không cần thẻ thanh toán.

## Các tệp

```
index.html            Trang chính (đã nối các module mới)
firestore.rules       Luật bảo mật, dán vào Firebase Console
js/dt-auth.js         Đăng nhập, tạo tài khoản, chuyển tài khoản cũ
js/dt-qr.js           Màn chiếu QR, điểm danh
js/dt-diem.js         Điểm cá nhân, cấp bậc, huy hiệu, cây chi đoàn, báo cáo
js/game-kichban.js    NỘI DUNG game (tình huống, đáp án, đề kiểm tra). Sửa nội dung ở đây.
js/dt-game.js         Bộ máy game (vẽ màn hình, chấm điểm, lưu kết quả)
docs/kich-ban-game.md Kịch bản đầy đủ để giáo viên duyệt (sinh từ game-kichban.js)
docs/sinh-kich-ban.js Lệnh sinh lại tài liệu kịch bản
```

## Các bước triển khai (làm đúng thứ tự)

### Bước 1. Bật đăng nhập Email/Password
Firebase Console → dự án `doantruong-d8d36` → **Authentication** → **Get started** → **Sign-in method** → bật **Email/Password** → Save.

Vào tab **Settings → Authorized domains** và thêm `ntv-0601.github.io`.

### Bước 2. Tạo tài khoản quản trị đầu tiên (làm tay một lần)
1. **Authentication → Users → Add user**:
   - Email: `quantri@doantruong.local` (đổi `quantri` thành tên tài khoản muốn dùng)
   - Mật khẩu: ít nhất 6 ký tự
2. Chép **User UID** vừa tạo.
3. **Firestore Database → Data → users → Add document**:
   - Document ID: dán User UID
   - Thêm các trường:
     - `username` (string) = `quantri`
     - `role` (string) = `admin`
     - `hoTen` (string) = `Ban Chấp hành Đoàn trường`
     - `lop` (string) = rỗng
     - `khoa` (boolean) = `false`

Không dùng tên `admin`, vì tên này trùng với tài khoản kiểu cũ.

### Bước 3. Đưa mã mới lên GitHub
Trên trang kho `ntv-0601/doantruongthtp`:
1. Chọn **Add file → Upload files**.
2. Kéo thả các mục sau: `index.html`, `firestore.rules`, thư mục `js/`, tệp hướng dẫn này.
3. Ghi nội dung commit, ví dụ: "P0 P1: đăng nhập bảo mật, điểm danh QR".

Đợi 1–2 phút để GitHub Pages cập nhật.

### Bước 4. Chuyển tài khoản cũ
1. Mở trang, đăng nhập bằng `quantri`.
2. Vào **Bảng điều khiển → Quản lý tài khoản**, bấm **Chuyển tài khoản cũ sang đăng nhập bảo mật**.
3. Trang tải về tệp `TaiKhoan_DaChuyen.csv`:
   - Tài khoản có mật khẩu dưới 6 ký tự được cấp mật khẩu mới.
   - Phát lại mật khẩu cho từng người, rồi xóa tệp này.

### Bước 5. Bật luật bảo mật (bắt buộc)
**Firestore Database → Rules** → xóa nội dung cũ → dán toàn bộ nội dung `firestore.rules` → **Publish**.

Luật cũ dạng "test mode" tự hết hạn sau 30 ngày. Khi hết hạn, cả trang sẽ ngừng ghi được dữ liệu.

### Bước 6. Thu phiếu đồng ý
Chỉ tick cột **Đồng ý NC** trong bảng tài khoản khi đã có phiếu đồng ý (IIId) của phụ huynh. Báo cáo KHKT chỉ tính những tài khoản đã được tick.

## Cách dùng điểm danh QR
1. **BCH** tạo hoạt động có **điểm rèn luyện**. Ngày diễn ra hoạt động, vào **Bảng điều khiển → Điểm danh bằng mã QR**, chọn hoạt động, bấm **Chiếu mã QR**. Nên chiếu lên TV hoặc máy chiếu.
2. **Đoàn viên** mở camera điện thoại quét mã. Trang tự mở mục Điểm danh.
   - Nếu chưa đăng nhập: đăng nhập trong 90 giây, trang tự gửi điểm danh.
   - Không quét được: vào mục **Điểm danh**, gõ mã 6 ký tự đang hiện trên màn chiếu.
3. Hết giờ, BCH bấm **Dừng điểm danh**.
4. **Lượt điểm danh sai** (người không có mặt): bấm **Hủy lượt**. Hệ thống xóa lượt và tự ghi một dòng trừ điểm, có lý do.

## Game "Thoát bẫy lừa đảo"
- **Khách:** chơi được cả 5 phòng, tiến độ chỉ lưu trên máy, không có bài kiểm tra.
- **Đoàn viên đã đăng nhập:**
  1. Làm bài kiểm tra đầu vào (10 câu, đề A hoặc B ngẫu nhiên) mới mở được Phòng 1.
  2. Mỗi phòng đạt 52/64 thì mở phòng tiếp.
  3. Qua đủ 5 phòng thì làm bài đầu ra (đề còn lại), điền phiếu hài lòng, nhận thẻ.
- **Ban Chấp hành:**
  - Xem trước mọi phòng.
  - Bấm **Xuất dữ liệu game** để lấy 4 bảng: Trước-Sau, Từng câu, Từng phòng, Từng tình huống. Chỉ tính người có phiếu đồng ý.
- **Sửa câu hỏi kiểm tra:** sửa cả `js/game-kichban.js` lẫn hàm `dapAn()` trong `firestore.rules`. Máy chủ tự chấm lại điểm, nếu đáp án hai nơi lệch nhau thì bài nộp sẽ bị từ chối.
- **Điểm game không cộng vào điểm rèn luyện:** điểm do trình duyệt chấm nên có thể bị sửa. Chỉ dùng để học và nghiên cứu.

## Kiểm thử luật bảo mật (dùng làm minh chứng nghiệm thu)
Firestore Database → Rules → **Rules Playground**. Mỗi ca chạy một lần, rồi ghi kết quả thực tế vào cột cuối.

Trước khi chạy, cần chuẩn bị sẵn:
- 1 tài khoản đoàn viên lớp 10A1 (uid ký hiệu `DV`).
- 1 bí thư lớp 10A1 (`BT`).
- 1 Cờ đỏ (`CD`).
- 1 hoạt động `act1` có `points` = 3.
- 1 bảng điểm `diemtuan/T10-10A1`.

| # | Người thử | Thao tác | Đường dẫn | Dữ liệu | Kỳ vọng | Thực tế |
|---|---|---|---|---|---|---|
| 1 | Khách (không đăng nhập) | get | `users/DV` | | Deny | |
| 2 | DV | get | `users/BT` | | Deny | |
| 3 | DV | create | `diemLog/x1` | `{uid:DV, nguon:"dieuchinh", diem:50, lyDo:"tự cộng", boi:DV}` | Deny | |
| 4 | DV | update | `diemtuan/T10-10A1` | đổi `nenep` thành 40 | Deny | |
| 5 | CD | update | `diemtuan/T10-10A1` | chỉ đổi `nenep` | Allow | |
| 6 | CD | update | `diemtuan/T10-10A1` | đổi `hoctap` | Deny | |
| 7 | BT | create | `dexuat/BT` | `{lop:"10A2", items:{}}` | Deny | |
| 8 | BT | create | `dexuat/BT` | `{lop:"10A1", items:{}}` | Allow | |
| 9 | DV | get | `qrPhien/act1` | | Deny | |
| 10 | DV | create | `checkIn/act1_DV` | mã sai | Deny | |
| 11 | Admin | update | `diemLog/<id bất kỳ>` | | Deny (kể cả Admin) | |
| 12 | DV | create | `users/DV2` | `{role:"admin"}` | Deny | |
| 13 | DV | create | `khaoSat/DV` | `truoc` với `diem` lớn hơn số câu đúng thật | Deny | |
| 14 | DV | update | `khaoSat/DV` | ghi đè `truoc` lần 2 | Deny | |
| 15 | DV | update | `gameLuot/<id>` | sửa `diem` | Deny | |

Ngoài Rules Playground, cần kiểm tra trên điện thoại thật:

| Tiêu chí | Cách kiểm tra |
|---|---|
| Mật khẩu không lộ | Firestore → users: không bản ghi nào có trường `password` |
| Quét QR được | 3 điện thoại khác nhau (Android, iPhone), mạng 4G và Wi-Fi trường |
| Mã cũ hết hạn | Chụp màn QR, đợi 2 phút rồi gõ mã đó → bị từ chối |
| Mỗi người một lần | Quét lại cùng hoạt động → báo "đã điểm danh" |
| Điểm đúng | Tổng điểm trong thẻ "Điểm rèn luyện của tôi" bằng tổng các dòng lịch sử |
| Báo cáo | Xuất Excel, đối chiếu số lượt điểm danh với danh sách trong Bảng điều khiển |

## Giới hạn đã biết (ghi vào báo cáo)
1. **Chuyển mã cho bạn vắng mặt:** người có mặt chụp màn hình gửi bạn trong vòng 60 giây thì vẫn điểm danh được. Biện pháp hiện có: BCH xem cột "Không đăng ký trước" và hủy lượt nghi ngờ.
2. **Tổng điểm cộng trên trình duyệt:** tổng điểm được cộng ở máy người xem. Từng dòng điểm thì do máy chủ kiểm tra và không sửa được, nên ai sửa trên máy mình chỉ thay đổi phần hiển thị của chính họ.
3. **Quên mật khẩu:** trang web không đặt lại được mật khẩu cho người khác. Phải xóa tài khoản trong Firebase Console rồi tạo lại; lịch sử điểm cũ gắn với tài khoản cũ.
4. **Hạn mức gói miễn phí:** khoảng 50.000 lượt đọc mỗi ngày (cần kiểm tra lại trên trang giá của Firebase). Mỗi người mở trang sẽ đọc toàn bộ hoạt động, bảng điểm, bản tin. Theo dõi tại Firestore → **Usage**.
5. **Luật dùng phép so sánh có điều kiện (`? :`):** nếu Firebase báo lỗi cú pháp khi Publish, chụp lỗi gửi lại để sửa.
6. **Ảnh lưu trong bản ghi:** mỗi bản ghi Firestore tối đa 1 MiB. Đăng nhiều ảnh vào cùng một tin có thể vượt giới hạn và không lưu được.

## Khai báo sử dụng AI (Phụ lục V)
- Các tệp `js/dt-auth.js`, `js/dt-qr.js`, `js/dt-diem.js`, `firestore.rules` và phần sửa `index.html` do Claude viết ngày 26/11/2026, theo yêu cầu của người hỗ trợ.
- Game: kịch bản `js/game-kichban.js` (40 tình huống, 2 đề kiểm tra) và bộ máy `js/dt-game.js` cũng do Claude viết ngày 26/11/2026. Kịch bản dựa trên trang phong trào Bình dân học vụ số và các bài cảnh báo của Công an. Giáo viên hướng dẫn cần duyệt nội dung trước khi cho học sinh chơi.
- Phần nối Firebase, vai trò Cờ đỏ, đăng nhập và nén ảnh có trong kho trước ngày này được đưa lên từ tài khoản ntv-0601. Cần ghi rõ ai làm phần này và có dùng AI hay không.
- Ghi đúng phần học sinh tự kiểm thử, tự sửa sau ngày này.
