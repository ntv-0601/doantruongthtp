/* game-nganhang.js: NGÂN HÀNG TÌNH HUỐNG DO AI SINH (Claude, 26/11/2026)
   Giáo viên phải duyệt từng tình huống trong mục "Duyệt ngân hàng tình huống"
   trước khi game được rút ra cho học sinh chơi. Tệp sinh tự động bằng
   node docs/gop-ngan-hang.js từ thư mục data-gen/. */
window.GAME_NGANHANG = [
 {
  "id": "p1-g01",
  "that": true,
  "loai": "chon",
  "kenh": "zalo",
  "tu": "Cô Lan (GVCN 10A1)",
  "phu": "Nhóm lớp 10A1 · tài khoản cô dùng từ đầu năm",
  "nguon": "Tình huống thường ngày (thật)",
  "tin": [
   "Các em lưu ý: Đoàn trường tổ chức trại hè kỹ năng 2 ngày tại trường. Em nào đăng ký thì nộp phiếu có chữ ký phụ huynh cho lớp trưởng, đóng phí tại phòng Tài vụ của trường, có biên lai."
  ],
  "hoi": "Bạn muốn tham gia. Bạn làm gì?",
  "chon": [
   {
    "t": "Chặn tài khoản cô vì tin nào nhắc đến tiền cũng là lừa đảo.",
    "dung": false,
    "g": "Phản ứng thái quá. Tin đến từ tài khoản quen, nộp tiền trực tiếp ở trường, có biên lai."
   },
   {
    "t": "Xin phụ huynh ký phiếu, nộp cho lớp trưởng và đóng phí tại phòng Tài vụ.",
    "dung": true,
    "g": "Đúng. Kênh quen thuộc, thu tiền tại trường có biên lai: đây là thông báo thật."
   },
   {
    "t": "Nhắn riêng cô xin số tài khoản để chuyển cho nhanh.",
    "dung": false,
    "g": "Tự đổi sang chuyển khoản cá nhân là bỏ qua quy trình an toàn mà trường đã đặt ra."
   }
  ],
  "hoc": "Tin thật thường đến từ kênh quen và cho phép bạn nộp tiền trực tiếp, có biên lai.",
  "phong": "p1"
 },
 {
  "id": "p1-g02",
  "that": true,
  "loai": "chon",
  "kenh": "email",
  "tu": "Phòng Công tác học sinh <congtachs@thpta.edu.vn>",
  "phu": "Địa chỉ email của trường",
  "nguon": "Tình huống thường ngày (thật)",
  "tin": [
   "Chúc mừng em được nhận học bổng khuyến học học kỳ I theo kết quả học tập đã công bố.",
   "Em mang thẻ học sinh đến phòng Đoàn trường vào giờ ra chơi thứ Năm để ký nhận. Không thu bất kỳ khoản phí nào."
  ],
  "hoi": "Bạn có trong danh sách học sinh giỏi đã dán ở bảng tin. Bạn làm gì?",
  "chon": [
   {
    "t": "Đến phòng Đoàn trường đúng hẹn, mang thẻ học sinh để ký nhận.",
    "dung": true,
    "g": "Đúng. Thư từ địa chỉ của trường, khớp với danh sách công khai, nhận trực tiếp, không mất phí."
   },
   {
    "t": "Xóa thư vì email trúng học bổng đều là lừa.",
    "dung": false,
    "g": "Không phải thư học bổng nào cũng giả. Hãy xem dấu hiệu: địa chỉ gửi, có đòi phí không, có khớp thông tin công khai không."
   },
   {
    "t": "Trả lời thư kèm ảnh căn cước cho chắc.",
    "dung": false,
    "g": "Thư không yêu cầu, và không cần gửi giấy tờ qua email."
   }
  ],
  "hoc": "Học bổng thật: khớp thông tin công khai, nhận trực tiếp, không mất phí.",
  "phong": "p1"
 },
 {
  "id": "p1-g03",
  "that": true,
  "loai": "chon",
  "kenh": "facebook",
  "tu": "Đoàn TNCS Trường THPT A",
  "phu": "Trang Đoàn trường bạn theo dõi từ lớp 10, thầy cô hay chia sẻ",
  "nguon": "Tình huống thường ngày (thật)",
  "tin": [
   "Phát động cuộc thi ảnh \"Góc học tập xanh\". Nộp ảnh qua biểu mẫu: điền họ tên, lớp, tải ảnh lên. Hạn nộp hết tháng này. Giải thưởng trao tại buổi chào cờ."
  ],
  "hoi": "Biểu mẫu chỉ hỏi họ tên, lớp và ảnh. Bạn làm gì?",
  "chon": [
   {
    "t": "Báo cáo trang vì có chữ \"giải thưởng\".",
    "dung": false,
    "g": "Phản ứng thái quá. Trang quen, không thu phí, không xin thông tin nhạy cảm."
   },
   {
    "t": "Điền thêm mật khẩu Facebook vào ô ghi chú để ban tổ chức dễ liên hệ.",
    "dung": false,
    "g": "Không bao giờ ghi mật khẩu vào biểu mẫu, kể cả biểu mẫu thật."
   },
   {
    "t": "Tham gia: điền đúng các ô được hỏi và nộp ảnh.",
    "dung": true,
    "g": "Đúng. Biểu mẫu chỉ hỏi thông tin cần thiết, trao giải trực tiếp tại trường."
   }
  ],
  "hoc": "Cuộc thi thật chỉ hỏi thông tin cần cho cuộc thi và không thu phí qua tài khoản cá nhân.",
  "phong": "p1"
 },
 {
  "id": "p1-g04",
  "that": true,
  "loai": "chon",
  "kenh": "app",
  "tu": "Ứng dụng Ghép Ảnh Kỷ Yếu",
  "phu": "Tải từ kho ứng dụng chính thức, nhiều đánh giá",
  "nguon": "Bình dân học vụ số - Quản lý quyền riêng tư",
  "tin": [
   "Ứng dụng xin quyền: Truy cập ảnh bạn chọn (để ghép ảnh kỷ yếu)."
  ],
  "hoi": "Bạn cần ghép ảnh lớp. Bạn làm gì?",
  "chon": [
   {
    "t": "Gỡ ngay vì ứng dụng nào xin quyền cũng nguy hiểm.",
    "dung": false,
    "g": "Ứng dụng ghép ảnh cần đọc ảnh là hợp lý. Điều cần xem là quyền có khớp với chức năng không."
   },
   {
    "t": "Cho phép truy cập những ảnh bạn chọn, dùng xong có thể thu hồi quyền.",
    "dung": true,
    "g": "Đúng. Quyền khớp chức năng, tải từ kho chính thức, chỉ cấp phần cần thiết."
   },
   {
    "t": "Cấp thêm quyền tin nhắn và danh bạ cho ứng dụng chạy mượt.",
    "dung": false,
    "g": "Ứng dụng ghép ảnh không cần tin nhắn hay danh bạ. Không cấp quyền thừa."
   }
  ],
  "hoc": "Cấp quyền vừa đủ cho đúng chức năng, ưu tiên \"chỉ ảnh đã chọn\".",
  "phong": "p1"
 },
 {
  "id": "p1-g05",
  "that": true,
  "loai": "chon",
  "kenh": "sms",
  "tu": "SaoMobile",
  "phu": "Tên tổng đài nhà mạng bạn đang dùng",
  "nguon": "Tình huống thường ngày (thật)",
  "tin": [
   "SaoMobile: Uu dai cho hoc sinh: goi data 30 ngay gia uu dai. Dang ky trong ung dung SaoMobile hoac tai cua hang. Khong yeu cau cung cap ma OTP cho bat ky ai."
  ],
  "hoi": "Tin không có đường link, hướng dẫn dùng ứng dụng chính thức. Bạn làm gì?",
  "chon": [
   {
    "t": "Hỏi bố mẹ rồi tự mở ứng dụng nhà mạng để xem gói, đăng ký nếu cần.",
    "dung": true,
    "g": "Đúng. Tự mở ứng dụng chính thức là cách kiểm tra an toàn nhất."
   },
   {
    "t": "Gọi số lạ vừa nhắn cho bạn tuần trước để hỏi về gói cước.",
    "dung": false,
    "g": "Hỏi người lạ không giúp kiểm tra. Dùng ứng dụng hoặc cửa hàng chính thức."
   },
   {
    "t": "Báo cáo lừa đảo vì tin nhắn quảng cáo nào cũng giả.",
    "dung": false,
    "g": "Tin này không có link lạ, không đòi OTP hay tiền. Không cần báo cáo."
   }
  ],
  "hoc": "Không bấm link trong tin; tự mở ứng dụng chính thức để kiểm tra ưu đãi.",
  "phong": "p1"
 },
 {
  "id": "p1-g06",
  "that": true,
  "loai": "chon",
  "kenh": "goi",
  "tu": "Chú Hùng (trưởng thôn)",
  "phu": "Số điện thoại nhà bạn đã lưu nhiều năm",
  "nguon": "Tình huống thường ngày (thật)",
  "tin": [
   "\"Cháu nhắn bà là chủ nhật này chùa làng làm lễ cầu an, ai muốn công đức thì bỏ hòm công đức tại chùa, có ban quản lý ghi sổ nhé.\""
  ],
  "hoi": "Bà nhờ bạn chuyển lời. Bạn nói gì với bà?",
  "chon": [
   {
    "t": "Bảo bà chuyển khoản trước cho chú Hùng để giữ chỗ.",
    "dung": false,
    "g": "Chú không hề yêu cầu chuyển khoản. Đừng tự thêm bước chuyển tiền."
   },
   {
    "t": "Bảo bà đây chắc chắn là lừa đảo, đừng đi.",
    "dung": false,
    "g": "Người quen, số đã lưu, công đức trực tiếp tại chùa có sổ sách: không có dấu hiệu lừa."
   },
   {
    "t": "Báo bà lịch lễ, nếu muốn công đức thì bỏ trực tiếp vào hòm tại chùa.",
    "dung": true,
    "g": "Đúng. Công đức trực tiếp, có ban quản lý ghi chép."
   }
  ],
  "hoc": "Góp tiền trực tiếp, có sổ sách, có người quen xác nhận là cách an toàn.",
  "phong": "p1"
 },
 {
  "id": "p1-g07",
  "that": true,
  "loai": "chon",
  "kenh": "web",
  "tu": "Trang tin Thành Đoàn",
  "phu": "Đường link do thầy Bí thư Đoàn trường đăng trong nhóm chính thức",
  "nguon": "Tình huống thường ngày (thật)",
  "tin": [
   "Thông báo trại hè \"Thanh niên tình nguyện\" dành cho học sinh THPT. Hồ sơ nộp qua Đoàn trường. Kinh phí do Thành Đoàn hỗ trợ, học sinh không phải đóng phí."
  ],
  "hoi": "Bạn muốn đăng ký. Bạn làm gì?",
  "chon": [
   {
    "t": "Hỏi thầy Bí thư cách nộp hồ sơ qua Đoàn trường.",
    "dung": true,
    "g": "Đúng. Đúng quy trình được thông báo, qua người phụ trách bạn biết rõ."
   },
   {
    "t": "Tìm trên mạng một trang khác nhận đăng ký nhanh hơn rồi nộp phí giữ chỗ ở đó.",
    "dung": false,
    "g": "Trang khác có thể là trang giả lợi dụng chương trình thật. Chương trình này không thu phí."
   },
   {
    "t": "Không tin vì trại hè miễn phí là không có thật.",
    "dung": false,
    "g": "Có những chương trình được hỗ trợ kinh phí thật. Kiểm tra qua kênh chính thức là được."
   }
  ],
  "hoc": "Chương trình thật có quy trình rõ, nộp qua đơn vị bạn biết, không thu phí giữ chỗ.",
  "phong": "p1"
 },
 {
  "id": "p1-g08",
  "that": true,
  "loai": "chon",
  "kenh": "facebook",
  "tu": "Hà (bạn cùng bàn)",
  "phu": "Nhắn tin trên Facebook, hai bạn vừa nói chuyện ở lớp sáng nay",
  "nguon": "Tình huống thường ngày (thật)",
  "tin": [
   "Ê thả tim giúp tao bài dự thi ảnh trên trang Đoàn trường nha, bài số 12 đó. Không cần đăng nhập gì đâu, cứ vào trang là thả được."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Gửi cho Hà mật khẩu Facebook để Hà tự thả tim hộ.",
    "dung": false,
    "g": "Không đưa mật khẩu cho ai, kể cả bạn thân."
   },
   {
    "t": "Vào trang Đoàn trường trên Facebook, tìm bài số 12 và thả tim.",
    "dung": true,
    "g": "Đúng. Bình chọn ngay trên trang quen, không qua link lạ, không đăng nhập ở đâu khác."
   },
   {
    "t": "Chặn Hà vì tin nhắn nhờ bình chọn đều là lừa.",
    "dung": false,
    "g": "Lời nhờ này không kèm link lạ hay đòi đăng nhập. Bạn vừa gặp Hà sáng nay."
   }
  ],
  "hoc": "Bình chọn thật diễn ra ngay trên trang quen, không đòi đăng nhập ở trang lạ.",
  "phong": "p1"
 },
 {
  "id": "p1-g09",
  "that": true,
  "loai": "chon",
  "kenh": "email",
  "tu": "Ban tổ chức Olympic Tiếng Anh <olympic@thpta.edu.vn>",
  "phu": "Địa chỉ email của trường",
  "nguon": "Tình huống thường ngày (thật)",
  "tin": [
   "Xác nhận em đã đăng ký vòng trường Olympic Tiếng Anh. Thi tại phòng máy B2 lúc 14h thứ Sáu. Em đăng nhập bằng tài khoản học tập nhà trường đã cấp. Cuộc thi không thu phí."
  ],
  "hoi": "Bạn đã đăng ký cuộc thi này tuần trước. Bạn làm gì?",
  "chon": [
   {
    "t": "Trả lời thư hỏi có cần nộp lệ phí không, rồi chuyển khoản trước cho chắc.",
    "dung": false,
    "g": "Thư đã nói rõ không thu phí. Đừng tự đề nghị chuyển tiền."
   },
   {
    "t": "Không đi thi vì thư nào gửi tới cũng có thể là giả.",
    "dung": false,
    "g": "Thư khớp với việc bạn đã đăng ký, gửi từ địa chỉ trường, không đòi gì bất thường."
   },
   {
    "t": "Ghi lịch, đến phòng thi đúng giờ, đăng nhập bằng tài khoản trường cấp.",
    "dung": true,
    "g": "Đúng. Thông tin khớp với việc bạn đã làm, kênh chính thức, không đòi phí."
   }
  ],
  "hoc": "Thông báo thật khớp với việc bạn đã làm và không đòi điều bất thường.",
  "phong": "p1"
 },
 {
  "id": "p1-g10",
  "that": true,
  "loai": "chon",
  "kenh": "facebook",
  "tu": "Thư viện Trường THPT A",
  "phu": "Livestream trên trang thư viện, cô thủ thư dẫn chương trình",
  "nguon": "Tình huống thường ngày (thật)",
  "tin": [
   "Minigame tuần lễ đọc sách: bình luận tên cuốn sách em thích nhất. 10 bạn may mắn nhận sách tại thư viện, mang thẻ học sinh. Không thu phí, không cần chuyển khoản."
  ],
  "hoi": "Bạn có tên trong danh sách may mắn. Bạn làm gì?",
  "chon": [
   {
    "t": "Mang thẻ học sinh đến thư viện nhận sách.",
    "dung": true,
    "g": "Đúng. Nhận quà trực tiếp, không phí, có người quen phụ trách."
   },
   {
    "t": "Nhắn trang xin chuyển sách qua bưu điện và gửi trước phí ship.",
    "dung": false,
    "g": "Không cần trả phí khi đã có thể nhận trực tiếp."
   },
   {
    "t": "Bỏ qua vì minigame trên mạng nào cũng là bẫy.",
    "dung": false,
    "g": "Minigame này không đòi phí hay thông tin nhạy cảm, nhận tại trường."
   }
  ],
  "hoc": "Quà thật: nhận trực tiếp, không phí, không đòi thông tin nhạy cảm.",
  "phong": "p1"
 },
 {
  "id": "p1-g11",
  "that": false,
  "loai": "chon",
  "kenh": "facebook",
  "tu": "Quỹ Trái Tim Nhỏ",
  "phu": "Trang tạo 2 tuần trước, đổi tên 3 lần",
  "nguon": "Bình dân học vụ số - Tư duy phản biện",
  "tin": [
   "😢 Bé 5 tuổi cần gấp 300 triệu để phẫu thuật tim. Mọi tấm lòng xin chuyển về tài khoản cá nhân của chị quản trị: Pham Thi K, Ngân hàng Sao Việt."
  ],
  "hoi": "Bạn xúc động muốn góp tiền tiêu vặt. Bạn làm gì?",
  "chon": [
   {
    "t": "Chuyển ngay 100.000đ vì cứu người là việc gấp.",
    "dung": false,
    "g": "Trang mới, đổi tên nhiều lần, nhận vào tài khoản cá nhân: dấu hiệu từ thiện giả."
   },
   {
    "t": "Chia sẻ bài cho cả lớp cùng góp.",
    "dung": false,
    "g": "Bạn có thể vô tình lan truyền bẫy cho người khác."
   },
   {
    "t": "Dừng lại, hỏi bố mẹ, chỉ góp qua tổ chức từ thiện có pháp nhân hoặc qua Đoàn trường.",
    "dung": true,
    "g": "Đúng. Từ thiện thật minh bạch, nhận tiền vào tài khoản của tổ chức."
   }
  ],
  "hoc": "Từ thiện thật minh bạch; trang mới lập nhận tiền vào tài khoản cá nhân là dấu hiệu giả.",
  "phong": "p1"
 },
 {
  "id": "p1-g12",
  "that": false,
  "loai": "chon",
  "kenh": "zalo",
  "tu": "Học bổng Anh ngữ Toàn Cầu",
  "phu": "Tài khoản cá nhân, mới kết bạn",
  "nguon": "CA Bắc Ninh 04/2026 - học bổng, trại hè giả",
  "tin": [
   "Em được chọn thi học bổng tiếng Anh 100%. Để vào phòng thi thử online, em nộp lệ phí 300.000đ vào tài khoản cô nhé, hôm nay là hạn cuối."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Nộp 300.000đ vì học bổng 100% rất đáng.",
    "dung": false,
    "g": "Học bổng không thu phí \"thi thử\" qua tài khoản cá nhân."
   },
   {
    "t": "Không nộp, hỏi giáo viên tiếng Anh hoặc bố mẹ về chương trình này.",
    "dung": true,
    "g": "Đúng. Người lạ, tài khoản cá nhân, hạn chót gấp: đủ dấu hiệu để dừng lại."
   },
   {
    "t": "Xin giảm còn 150.000đ.",
    "dung": false,
    "g": "Mặc cả vẫn là trả tiền cho kẻ gian."
   }
  ],
  "hoc": "Không ai được \"chọn\" học bổng mà phải nộp phí cho người lạ.",
  "phong": "p1"
 },
 {
  "id": "p1-g13",
  "that": false,
  "loai": "chon",
  "kenh": "telegram",
  "tu": "Nhóm \"Săn quà miễn phí\"",
  "phu": "Nhóm 5.000 thành viên",
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng",
  "tin": [
   "Chương trình nhân đôi thẻ cào: gửi số seri và mã nạp của thẻ cào 50k, admin trả lại thẻ 100k sau 5 phút."
  ],
  "hoi": "Bạn có một thẻ cào 50k. Bạn làm gì?",
  "chon": [
   {
    "t": "Gửi mã thẻ, mất 50k cũng không nhiều.",
    "dung": false,
    "g": "Gửi mã là mất thẻ ngay. Không có chuyện nhân đôi."
   },
   {
    "t": "Gửi số seri nhưng giữ mã nạp.",
    "dung": false,
    "g": "Vẫn là tham gia trò lừa, họ sẽ tìm cách xin tiếp."
   },
   {
    "t": "Không gửi mã thẻ cho ai, rời nhóm.",
    "dung": true,
    "g": "Đúng. Mã thẻ cào như tiền mặt. Gửi đi là mất."
   }
  ],
  "hoc": "Mã thẻ cào, mã OTP, mã nạp: không gửi cho ai.",
  "phong": "p1"
 },
 {
  "id": "p1-g14",
  "that": false,
  "loai": "chon",
  "kenh": "app",
  "tu": "Ứng dụng \"Bói Tình Yêu AI\"",
  "phu": "Tải từ đường link trong bình luận TikTok",
  "nguon": "Bình dân học vụ số - Quản lý quyền riêng tư",
  "tin": [
   "Để xem kết quả, hãy đăng nhập tài khoản Facebook ngay trong ứng dụng và cho phép truy cập danh bạ."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Không cài, hoặc gỡ ngay; không đăng nhập Facebook trong ứng dụng lạ.",
    "dung": true,
    "g": "Đúng. Ứng dụng bói vui không cần danh bạ hay mật khẩu Facebook."
   },
   {
    "t": "Đăng nhập rồi đổi mật khẩu sau.",
    "dung": false,
    "g": "Kẻ gian có thể chiếm tài khoản ngay lúc bạn đăng nhập."
   },
   {
    "t": "Cho quyền danh bạ nhưng không đăng nhập.",
    "dung": false,
    "g": "Danh bạ của bạn có thể bị dùng để lừa người thân, bạn bè."
   }
  ],
  "hoc": "Ứng dụng giải trí từ link lạ đòi đăng nhập và danh bạ: không cài.",
  "phong": "p1"
 },
 {
  "id": "p1-g15",
  "that": false,
  "loai": "chon",
  "kenh": "sms",
  "tu": "0912 xxx xxx",
  "phu": "Số điện thoại lạ",
  "nguon": "Bình dân học vụ số - Tư duy phản biện",
  "tin": [
   "Ban da duoc chon nhan voucher 2.000.000d tu sieu thi Sao Mai. Kich hoat tai saomai-voucher.click va nhap so the ngan hang de nhan tien."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Nhập số thẻ của mẹ để nhận tiền.",
    "dung": false,
    "g": "Nhận voucher không bao giờ cần số thẻ ngân hàng. Đây là trang lấy cắp thông tin thẻ."
   },
   {
    "t": "Bỏ qua tin nhắn, không bấm link; báo bố mẹ để cả nhà cảnh giác.",
    "dung": true,
    "g": "Đúng. Số lạ, tên miền lạ, đòi số thẻ: ba dấu hiệu rõ ràng."
   },
   {
    "t": "Bấm link xem thử nhưng không nhập gì.",
    "dung": false,
    "g": "Bấm vào link lạ đã có thể bị dẫn tới trang tải mã độc."
   }
  ],
  "hoc": "Quà tặng đòi số thẻ ngân hàng là bẫy lấy cắp tiền.",
  "phong": "p1"
 },
 {
  "id": "p1-g16",
  "that": false,
  "loai": "chon",
  "kenh": "web",
  "tu": "cuocthive-toanquoc.top",
  "phu": "Cuộc thi vẽ \"Tài năng nhí toàn quốc\"",
  "nguon": "CA Bắc Ninh 04/2026 - cuộc thi, sân chơi giả",
  "tin": [
   "Giải nhất 50 triệu đồng! Mỗi thí sinh nộp lệ phí 150.000đ vào tài khoản cá nhân của trưởng ban giám khảo. Không có địa chỉ, không có số điện thoại ban tổ chức."
  ],
  "hoi": "Bạn vẽ đẹp và muốn dự thi. Bạn làm gì?",
  "chon": [
   {
    "t": "Nộp phí ngay để kịp hạn.",
    "dung": false,
    "g": "Đơn vị tổ chức không rõ ràng, thu phí qua tài khoản cá nhân: Công an đã cảnh báo dạng cuộc thi giả này."
   },
   {
    "t": "Hỏi thầy cô mỹ thuật và chỉ dự thi các cuộc thi có đơn vị tổ chức rõ ràng.",
    "dung": true,
    "g": "Đúng. Cuộc thi thật có đơn vị tổ chức, thể lệ, liên hệ công khai."
   },
   {
    "t": "Nộp phí hộ cả nhóm bạn để được giảm.",
    "dung": false,
    "g": "Bạn còn kéo thêm bạn bè vào bẫy."
   }
  ],
  "hoc": "Cuộc thi không rõ đơn vị tổ chức mà thu phí cá nhân: không tham gia.",
  "phong": "p1"
 },
 {
  "id": "p1-g17",
  "that": false,
  "loai": "chon",
  "kenh": "goi",
  "tu": "Số lạ 0377 xxx xxx",
  "phu": "Cuộc gọi đến",
  "nguon": "CA Bắc Ninh 04/2026 - cuộc thi, sân chơi giả",
  "tin": [
   "\"Chúc mừng em đạt giải ba cuộc thi viết về quê hương! Giải thưởng là máy tính bảng. Em chuyển 500.000đ phí vận chuyển và bảo hiểm để nhận quà nhé.\""
  ],
  "hoi": "Bạn không nhớ đã tham gia cuộc thi nào như vậy. Bạn làm gì?",
  "chon": [
   {
    "t": "Hỏi lại tên cuộc thi để nhớ ra rồi chuyển tiền.",
    "dung": false,
    "g": "Kẻ gian sẽ bịa ra tên cuộc thi. Phí nhận giải là dấu hiệu lừa."
   },
   {
    "t": "Chuyển một nửa, nhận quà rồi trả nốt.",
    "dung": false,
    "g": "Không có món quà nào cả."
   },
   {
    "t": "Từ chối, cúp máy; giải thưởng thật không bắt người nhận trả phí.",
    "dung": true,
    "g": "Đúng. Không dự thi thì không thể đoạt giải."
   }
  ],
  "hoc": "Không tham gia thì không thể trúng giải. Có phí nhận giải là lừa đảo.",
  "phong": "p1"
 },
 {
  "id": "p1-g18",
  "that": false,
  "loai": "chon",
  "kenh": "email",
  "tu": "admission.summercamp@gmail.com",
  "phu": "Tiêu đề: Thư mời trại hè Đại học quốc tế",
  "nguon": "CA Bắc Ninh 04/2026 - học bổng, trại hè giả",
  "tin": [
   "Em được đặc cách tham dự trại hè tại một trường đại học nước ngoài.",
   "Em gửi ảnh hộ chiếu, ảnh căn cước của bố mẹ và chuyển 5.000.000đ đặt cọc trong 3 ngày."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Báo bố mẹ, không gửi giấy tờ, không chuyển tiền; kiểm tra trên trang chính thức của trường đại học.",
    "dung": true,
    "g": "Đúng. Gmail cá nhân, \"đặc cách\" không lý do, đòi giấy tờ và tiền cọc: dấu hiệu giả."
   },
   {
    "t": "Gửi ảnh hộ chiếu trước, tiền cọc tính sau.",
    "dung": false,
    "g": "Ảnh giấy tờ có thể bị dùng làm giả hồ sơ, vay tiền đứng tên gia đình bạn."
   },
   {
    "t": "Trả lời thư hỏi có được giảm tiền cọc không.",
    "dung": false,
    "g": "Trả lời là xác nhận hộp thư hoạt động, bạn sẽ bị bám theo."
   }
  ],
  "hoc": "Không gửi giấy tờ tùy thân và tiền cọc theo thư mời lạ.",
  "phong": "p1"
 },
 {
  "id": "p1-g19",
  "that": false,
  "loai": "chon",
  "kenh": "facebook",
  "tu": "Livestream \"Vòng Quay May Mắn\"",
  "phu": "Đang phát trực tiếp, 2.000 người xem",
  "nguon": "Bình dân học vụ số - Tư duy phản biện",
  "tin": [
   "Chuyển 20.000đ nhận 1 số dự thưởng, cuối buổi quay trúng điện thoại! Chuyển xong bình luận mã giao dịch nhé."
  ],
  "hoi": "Bạn bè trong lớp đang chuyển. Bạn làm gì?",
  "chon": [
   {
    "t": "Chuyển 20.000đ thử vận may.",
    "dung": false,
    "g": "Đây là hình thức cờ bạc trá hình, người tổ chức có thể không trả thưởng."
   },
   {
    "t": "Không chuyển; nhắc bạn bè đây là trò may rủi trên mạng, dễ mất tiền và có thể vi phạm pháp luật.",
    "dung": true,
    "g": "Đúng. Mua số dự thưởng qua livestream là bẫy, kể cả khi đông người tham gia."
   },
   {
    "t": "Chuyển rồi chụp màn hình làm bằng chứng.",
    "dung": false,
    "g": "Có bằng chứng thì tiền vẫn mất."
   }
  ],
  "hoc": "Đông người tham gia không có nghĩa là an toàn.",
  "phong": "p1"
 },
 {
  "id": "p1-g20",
  "that": false,
  "loai": "chon",
  "kenh": "zalo",
  "tu": "Thử Thách 30 Ngày Nhận Quà",
  "phu": "Nhóm mới, bạn được thêm vào",
  "nguon": "Bình dân học vụ số - Tư duy phản biện",
  "tin": [
   "Hoàn thành thử thách 30 ngày nhận tai nghe xịn! Điều kiện: mời đủ 10 bạn vào nhóm và đóng 99.000đ phí thành viên."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Mời 10 bạn rồi đóng phí.",
    "dung": false,
    "g": "Bắt mời người và đóng phí là dấu hiệu mô hình kéo người, người đến sau mất tiền."
   },
   {
    "t": "Rời nhóm, không mời bạn bè, không đóng phí.",
    "dung": true,
    "g": "Đúng. Quà thật không bắt bạn đóng tiền và kéo thêm người."
   },
   {
    "t": "Đóng phí nhưng không mời ai.",
    "dung": false,
    "g": "Vẫn mất tiền cho kẻ gian."
   }
  ],
  "hoc": "Bắt đóng phí và mời thêm người là dấu hiệu bẫy kéo người.",
  "phong": "p1"
 },
 {
  "id": "p1-g21",
  "that": false,
  "loai": "chon",
  "kenh": "telegram",
  "tu": "Nhóm \"Tài liệu đề thi HSG có đáp án\"",
  "phu": "Nhóm kín",
  "nguon": "Bình dân học vụ số - Tư duy phản biện",
  "tin": [
   "Bán trước đề thi học sinh giỏi cấp thành phố năm nay, có đáp án. Chuyển 200.000đ vào tài khoản admin, gửi đề trong 10 phút."
  ],
  "hoi": "Bạn sắp thi học sinh giỏi. Bạn làm gì?",
  "chon": [
   {
    "t": "Mua để ôn cho chắc.",
    "dung": false,
    "g": "Đề thi chính thức được bảo mật. Đây là chiêu đánh vào nỗi lo thi cử để lấy tiền."
   },
   {
    "t": "Rủ bạn góp tiền cùng mua.",
    "dung": false,
    "g": "Bạn kéo bạn bè cùng mất tiền."
   },
   {
    "t": "Không mua, báo thầy cô; đề thi chính thức không thể mua trên mạng.",
    "dung": true,
    "g": "Đúng. \"Bán đề thi\" là lừa đảo, đồng thời là hành vi gian lận."
   }
  ],
  "hoc": "Không có \"đề thi lộ\" để mua. Đây là chiêu đánh vào nỗi lo thi cử.",
  "phong": "p1"
 },
 {
  "id": "p1-g22",
  "that": false,
  "loai": "chon",
  "kenh": "app",
  "tu": "Trang \"Quay thưởng skin miễn phí\"",
  "phu": "Yêu cầu cài tệp SkinFree.apk",
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng",
  "tin": [
   "Quay thưởng nhận skin hiếm! Tải tệp SkinFree.apk, cài đặt và bật quyền \"Cài ứng dụng không rõ nguồn gốc\"."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Cài vì chỉ là game.",
    "dung": false,
    "g": "Tệp .apk từ nguồn lạ có thể chứa mã độc đọc tin nhắn, lấy tài khoản."
   },
   {
    "t": "Không tải, không bật cài ứng dụng không rõ nguồn gốc; chỉ nhận quà trong game chính thức.",
    "dung": true,
    "g": "Đúng. Bật cài từ nguồn lạ là mở cửa cho mã độc."
   },
   {
    "t": "Cài vào máy của em nhỏ cho an toàn.",
    "dung": false,
    "g": "Máy nào cài cũng gặp nguy, và em nhỏ càng khó nhận ra."
   }
  ],
  "hoc": "Không cài tệp .apk từ nguồn lạ, không bật cài ứng dụng không rõ nguồn gốc.",
  "phong": "p1"
 },
 {
  "id": "p1-g23",
  "that": false,
  "loai": "chon",
  "kenh": "facebook",
  "tu": "Thư Viện Số Miễn Phí",
  "phu": "Bài quảng cáo",
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng",
  "tin": [
   "Tặng tài khoản học trực tuyến trọn đời! Chỉ cần nhập địa chỉ email và mật khẩu email của bạn để kích hoạt."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Nhập email và mật khẩu, đổi mật khẩu sau.",
    "dung": false,
    "g": "Kẻ gian có thể chiếm email ngay lập tức, rồi lấy luôn các tài khoản liên kết."
   },
   {
    "t": "Không nhập; không trang nào cần mật khẩu email của bạn để tặng quà.",
    "dung": true,
    "g": "Đúng. Mật khẩu email là chìa khóa cho mọi tài khoản khác."
   },
   {
    "t": "Nhập email của bạn thân cho an toàn.",
    "dung": false,
    "g": "Bạn đẩy rủi ro sang người khác."
   }
  ],
  "hoc": "Không ai cần mật khẩu email của bạn để kích hoạt quà.",
  "phong": "p1"
 },
 {
  "id": "p1-g24",
  "that": false,
  "loai": "chon",
  "kenh": "zalo",
  "tu": "Nam (bạn lớp bên)",
  "phu": "Nhắn tin Zalo",
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng",
  "tin": [
   "Bình chọn giúp em gái tao với! Mày quét mã QR này bằng Zalo để đăng nhập trang bình chọn nha."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Quét mã bằng Zalo để bình chọn.",
    "dung": false,
    "g": "Quét mã đăng nhập do người khác gửi có thể cho họ đăng nhập vào chính tài khoản Zalo của bạn."
   },
   {
    "t": "Gọi điện cho Nam xác minh; không quét mã QR đăng nhập do người khác gửi.",
    "dung": true,
    "g": "Đúng. Tài khoản của Nam có thể đã bị chiếm."
   },
   {
    "t": "Quét rồi đăng xuất ngay.",
    "dung": false,
    "g": "Chỉ vài giây là kẻ gian đã vào được tài khoản."
   }
  ],
  "hoc": "Không quét mã QR đăng nhập do người khác gửi.",
  "phong": "p1"
 },
 {
  "id": "p1-g25",
  "that": false,
  "loai": "soi",
  "kenh": "facebook",
  "tu": "Quỹ Học Bổng Ánh Dương",
  "phu": "Trang tạo 5 ngày trước",
  "nguon": "CA Bắc Ninh 04/2026 - học bổng, trại hè giả",
  "tin": [
   [
    "Chương trình tặng xe đạp điện cho học sinh vượt khó năm học mới."
   ],
   [
    {
     "t": "Mỗi xã chỉ còn 2 suất, đăng ký trước 20h tối nay",
     "n": true,
     "g": "Thúc ép thời gian, khan hiếm giả."
    }
   ],
   [
    "Đối tượng: học sinh THPT có hoàn cảnh khó khăn."
   ],
   [
    {
     "t": "Đóng 350.000đ phí vận chuyển vào tài khoản cá nhân",
     "n": true,
     "g": "Quà tặng thật không thu phí, nhất là qua tài khoản cá nhân."
    },
    " và ",
    {
     "t": "gửi ảnh căn cước của bố hoặc mẹ",
     "n": true,
     "g": "Giấy tờ tùy thân có thể bị dùng để làm giả hồ sơ."
    }
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu đáng ngờ, rồi bấm Xác nhận.",
  "hoc": "Quà tặng thật không thu phí, không xin giấy tờ qua tin nhắn, không ép hạn trong vài giờ.",
  "phong": "p1"
 },
 {
  "id": "p1-g26",
  "that": false,
  "loai": "soi",
  "kenh": "web",
  "tu": "hocbong-duhoc-2026.vip/dang-ky",
  "phu": "Mẫu đăng ký học bổng du học",
  "nguon": "CA Bắc Ninh 04/2026 - học bổng, trại hè giả",
  "tin": [
   [
    "Họ và tên học sinh, lớp, trường đang học"
   ],
   [
    {
     "t": "Số tài khoản ngân hàng và mã OTP để xác minh",
     "n": true,
     "g": "Không quy trình học bổng nào cần mã OTP."
    }
   ],
   [
    "Bảng điểm học kỳ gần nhất của học sinh"
   ],
   [
    {
     "t": "Phí xét hồ sơ 1.500.000đ, không hoàn lại",
     "n": true,
     "g": "Đòi phí trước khi xét là dấu hiệu lừa đảo học bổng."
    }
   ],
   [
    {
     "t": "Tên miền .vip, không có địa chỉ văn phòng",
     "n": true,
     "g": "Không kiểm chứng được tổ chức."
    }
   ]
  ],
  "hoi": "Chạm vào những mục đáng ngờ trong mẫu đăng ký.",
  "hoc": "Mẫu đăng ký đòi OTP và phí xét hồ sơ: dừng lại ngay.",
  "phong": "p1"
 },
 {
  "id": "p1-g27",
  "that": false,
  "loai": "soi",
  "kenh": "sms",
  "tu": "TraiHeQuocTe",
  "phu": "Tin nhắn SMS",
  "nguon": "CA Bắc Ninh 04/2026 - học bổng, trại hè giả",
  "tin": [
   [
    "Chuc mung hoc sinh duoc chon tham gia trai he ky nang mien phi tai Da Lat."
   ],
   [
    "Chuong trinh danh cho hoc sinh co thanh tich hoc tap tot."
   ],
   [
    {
     "t": "Dong 800.000d phi bao hiem",
     "n": true,
     "g": "Chương trình \"miễn phí\" mà bắt đóng phí bảo hiểm qua tin nhắn là mâu thuẫn."
    },
    " tai ",
    {
     "t": "traihe-dalat.click",
     "n": true,
     "g": "Tên miền lạ, không phải trang của tổ chức có thật."
    }
   ],
   [
    {
     "t": "Het han sau 2 gio",
     "n": true,
     "g": "Thúc ép thời gian."
    }
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu lừa đảo trong tin nhắn.",
  "hoc": "\"Miễn phí\" nhưng phải đóng phí khác là dấu hiệu quen thuộc.",
  "phong": "p1"
 },
 {
  "id": "p1-g28",
  "that": false,
  "loai": "soi",
  "kenh": "email",
  "tu": "Ban tổ chức Khoa học Quốc tế <sciencefair.vn@gmail.com>",
  "phu": "Tiêu đề: Đề tài của em lọt vào chung kết quốc tế",
  "nguon": "CA Bắc Ninh 04/2026 - cuộc thi, sân chơi giả",
  "tin": [
   [
    {
     "t": "Đề tài của em được chọn dù em chưa nộp bài dự thi",
     "n": true,
     "g": "Không nộp bài thì không thể được chọn."
    }
   ],
   [
    "Vòng chung kết tổ chức trực tuyến vào tháng sau."
   ],
   [
    {
     "t": "Gửi phí đăng ký 2.000.000đ để giữ suất",
     "n": true,
     "g": "Đòi phí giữ suất là chiêu thu tiền."
    }
   ],
   [
    "Mọi thắc mắc em vui lòng trả lời thư này."
   ],
   [
    {
     "t": "Gửi từ gmail cá nhân",
     "n": true,
     "g": "Cuộc thi quốc tế thật dùng địa chỉ của tổ chức."
    }
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu đáng ngờ.",
  "hoc": "Được \"chọn\" khi chưa dự thi và bị đòi phí: đó là bẫy.",
  "phong": "p1"
 },
 {
  "id": "p1-g29",
  "that": false,
  "loai": "soi",
  "kenh": "telegram",
  "tu": "Kênh \"Airdrop Coin Học Sinh\"",
  "phu": "Kênh 12.000 người theo dõi",
  "nguon": "Bình dân học vụ số - Tư duy phản biện",
  "tin": [
   [
    {
     "t": "Tặng 1.000.000đ tiền ảo cho học sinh đầu tiên đăng ký",
     "n": true,
     "g": "Tiền miễn phí dễ dàng là mồi nhử."
    }
   ],
   [
    "Hướng dẫn chi tiết có trong bài ghim của kênh."
   ],
   [
    {
     "t": "Nạp 100.000đ phí kích hoạt ví",
     "n": true,
     "g": "Bắt nạp tiền mới nhận quà."
    },
    " để nhận quà."
   ],
   [
    {
     "t": "Mời 5 bạn để rút tiền về tài khoản",
     "n": true,
     "g": "Kéo thêm người là dấu hiệu mô hình lừa đảo."
    }
   ],
   [
    "Chúc các bạn may mắn trong mùa thi."
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu lừa đảo.",
  "hoc": "Quà tặng bắt nạp tiền và mời người: tránh xa.",
  "phong": "p1"
 },
 {
  "id": "p1-g30",
  "that": false,
  "loai": "soi",
  "kenh": "zalo",
  "tu": "Nhóm Thiện Nguyện Vì Miền Trung",
  "phu": "Nhóm bạn được thêm vào",
  "nguon": "Bình dân học vụ số - Tư duy phản biện",
  "tin": [
   [
    "Bà con vùng lũ đang cần sự giúp đỡ của mọi người."
   ],
   [
    {
     "t": "Ảnh trong bài lấy từ một bài báo năm cũ",
     "n": true,
     "g": "Dùng ảnh cũ trên mạng để tạo xúc động."
    }
   ],
   [
    {
     "t": "Chuyển tiền vào tài khoản cá nhân của trưởng nhóm, không có sao kê",
     "n": true,
     "g": "Từ thiện thật minh bạch thu chi, dùng tài khoản của tổ chức."
    }
   ],
   [
    {
     "t": "Ai không góp là vô cảm",
     "n": true,
     "g": "Gây áp lực cảm xúc, đánh vào lòng tốt."
    }
   ],
   [
    "Cảm ơn tấm lòng của các bạn trẻ."
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu đáng ngờ của lời kêu gọi từ thiện.",
  "hoc": "Muốn giúp vùng lũ: góp qua tổ chức có pháp nhân, Đoàn trường hoặc chính quyền địa phương.",
  "phong": "p1"
 },
 {
  "id": "p1-g31",
  "that": false,
  "loai": "soi",
  "kenh": "app",
  "tu": "Ứng dụng \"Ảnh Già Đi 50 Tuổi\"",
  "phu": "Trend đang hot, tải từ link ngoài",
  "nguon": "Bình dân học vụ số - Quản lý quyền riêng tư",
  "tin": [
   [
    "Chụp ảnh chân dung để xem bạn già đi trông thế nào."
   ],
   [
    {
     "t": "Cho phép đọc tin nhắn SMS",
     "n": true,
     "g": "Ứng dụng chỉnh ảnh không cần đọc tin nhắn, có thể dùng để lấy mã OTP."
    }
   ],
   [
    {
     "t": "Cho phép quyền Trợ năng để chạy nhanh hơn",
     "n": true,
     "g": "Quyền Trợ năng cho ứng dụng điều khiển máy."
    }
   ],
   [
    "Chia sẻ kết quả lên mạng xã hội cùng bạn bè."
   ],
   [
    {
     "t": "Tải từ đường link ngoài kho ứng dụng",
     "n": true,
     "g": "Ứng dụng ngoài kho chính thức dễ chứa mã độc."
    }
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu nguy hiểm.",
  "hoc": "Ứng dụng trend đòi đọc tin nhắn, quyền Trợ năng: không cài.",
  "phong": "p1"
 },
 {
  "id": "p1-g32",
  "that": false,
  "loai": "soi",
  "kenh": "facebook",
  "tu": "Livestream \"Shop Quà Teen\"",
  "phu": "Đang phát trực tiếp",
  "nguon": "Bình dân học vụ số - Tư duy phản biện",
  "tin": [
   [
    "Cảm ơn các bạn đã xem livestream của shop hôm nay!"
   ],
   [
    {
     "t": "Bạn Minh Anh trúng giải đặc biệt: tai nghe trị giá 3 triệu",
     "n": true,
     "g": "Thông báo trúng thưởng bất ngờ để dụ nạn nhân."
    }
   ],
   [
    {
     "t": "Inbox shop, chuyển 99.000đ phí xác minh để nhận quà",
     "n": true,
     "g": "Phí xác minh là chiêu lấy tiền."
    }
   ],
   [
    "Shop có nhiều mẫu mới, các bạn ghé xem nhé."
   ],
   [
    {
     "t": "Chỉ giữ quà trong 15 phút",
     "n": true,
     "g": "Thúc ép thời gian."
    }
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu lừa đảo.",
  "hoc": "Trúng thưởng mà phải trả phí xác minh: đó là bẫy.",
  "phong": "p1"
 },
 {
  "id": "p2-g01",
  "phong": "p2",
  "that": true,
  "loai": "chon",
  "kenh": "sms",
  "tu": "SaoVietBank",
  "phu": "Tin nhắn SMS, ngay sau khi bạn bấm Đăng nhập trên ứng dụng",
  "tin": [
   "Ma OTP dang nhap ung dung cua quy khach la 615204. Tuyet doi KHONG cung cap ma nay cho bat ky ai."
  ],
  "hoi": "Bạn vừa tự đăng nhập ứng dụng ngân hàng trên máy mình và nhận tin này. Bạn làm gì?",
  "chon": [
   {
    "t": "Nhập mã vào chính ứng dụng ngân hàng mình đang mở, không gửi cho ai.",
    "dung": true,
    "g": "Đúng. Mã do chính bạn yêu cầu thì dùng ngay trong ứng dụng của bạn, và chỉ ở đó."
   },
   {
    "t": "Báo công an vì có tin nhắn chứa mã OTP.",
    "dung": false,
    "g": "Phản ứng thái quá. Mã đến đúng lúc bạn tự đăng nhập là bình thường."
   },
   {
    "t": "Chụp màn hình gửi bạn thân nhờ nhập hộ.",
    "dung": false,
    "g": "Không bao giờ gửi OTP cho người khác, kể cả bạn thân."
   }
  ],
  "hoc": "OTP do chính mình yêu cầu: chỉ nhập vào ứng dụng của mình, không gửi cho ai.",
  "nguon": "Tình huống thường ngày (thật)"
 },
 {
  "id": "p2-g02",
  "phong": "p2",
  "that": true,
  "loai": "chon",
  "kenh": "sms",
  "tu": "SaoVietBank",
  "phu": "Tin nhắn SMS",
  "tin": [
   "TK 0123xxx789 +200,000VND luc 19:42 26/11. SD: 1,350,000VND. ND: ME CHUYEN TIEN HOC THEM."
  ],
  "hoi": "Mẹ vừa nói sẽ chuyển tiền học thêm cho bạn. Tin nhắn không có đường link nào. Bạn làm gì?",
  "chon": [
   {
    "t": "Gọi ngay cho ngân hàng đòi khóa tài khoản vì sợ bị lừa.",
    "dung": false,
    "g": "Không cần. Tin báo biến động số dư không kèm link, khớp với việc mẹ vừa chuyển."
   },
   {
    "t": "Coi là bình thường; nếu muốn chắc thì mở ứng dụng ngân hàng chính thức xem lại số dư.",
    "dung": true,
    "g": "Đúng. Kiểm tra trong ứng dụng chính thức là cách xác minh an toàn nhất."
   },
   {
    "t": "Trả lời tin nhắn để cảm ơn ngân hàng.",
    "dung": false,
    "g": "Không cần trả lời tin báo số dư tự động."
   }
  ],
  "hoc": "Tin báo số dư thật không kèm link và không yêu cầu bạn làm gì.",
  "nguon": "Tình huống thường ngày (thật)"
 },
 {
  "id": "p2-g03",
  "phong": "p2",
  "that": true,
  "loai": "chon",
  "kenh": "zalo",
  "tu": "Nhóm Zalo lớp 10A1 (nhóm cũ, có cô chủ nhiệm)",
  "phu": "Cô Hương, GVCN, nhắn trong nhóm lớp",
  "tin": [
   "Các em nhắc bố mẹ họp phụ huynh lúc 8h sáng Chủ nhật tại phòng 204. Cô không thu tiền gì qua mạng, mọi khoản thu nộp tại lớp có biên lai."
  ],
  "hoi": "Bạn làm gì với tin này?",
  "chon": [
   {
    "t": "Báo lại cho bố mẹ giờ và địa điểm họp.",
    "dung": true,
    "g": "Đúng. Tin đến từ nhóm lớp quen thuộc, có cô trong nhóm, không đòi tiền, không có link lạ."
   },
   {
    "t": "Báo cáo tin nhắn là lừa đảo cho chắc.",
    "dung": false,
    "g": "Phản ứng thái quá. Tin không có dấu hiệu lừa đảo nào."
   },
   {
    "t": "Chuyển trước tiền quỹ cho cô qua tài khoản để khỏi quên.",
    "dung": false,
    "g": "Cô đã nói không thu tiền qua mạng. Tự chuyển tiền là làm liều."
   }
  ],
  "hoc": "Tin thật thường đến từ kênh quen, không đòi tiền, không thúc ép, không kèm link lạ.",
  "nguon": "Tình huống thường ngày (thật)"
 },
 {
  "id": "p2-g04",
  "phong": "p2",
  "that": true,
  "loai": "chon",
  "kenh": "app",
  "tu": "Ứng dụng MXH Kết Nối",
  "phu": "Thông báo đẩy",
  "tin": [
   "Đăng nhập mới vào tài khoản của bạn từ \"Điện thoại Android, Bắc Ninh\" lúc 20:05. Nếu đây là bạn, không cần làm gì."
  ],
  "hoi": "Bạn vừa đăng nhập tài khoản trên chiếc điện thoại mới mua lúc 20:05. Bạn làm gì?",
  "chon": [
   {
    "t": "Đổi mật khẩu ngay và đăng xuất mọi thiết bị.",
    "dung": false,
    "g": "Không sai, nhưng không cần thiết khi chính bạn vừa đăng nhập."
   },
   {
    "t": "Bỏ qua vì đúng là mình vừa đăng nhập trên máy mới.",
    "dung": true,
    "g": "Đúng. Thông báo khớp thiết bị, thời gian, địa điểm của bạn."
   },
   {
    "t": "Gỡ ứng dụng ra cho an toàn.",
    "dung": false,
    "g": "Gỡ ứng dụng không liên quan đến bảo mật tài khoản."
   }
  ],
  "hoc": "Thông báo đăng nhập khớp với việc mình vừa làm thì không cần lo. Không khớp thì đổi mật khẩu ngay trong ứng dụng.",
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p2-g05",
  "phong": "p2",
  "that": true,
  "loai": "chon",
  "kenh": "email",
  "tu": "Văn phòng Trường THPT A <vanphong@thpta.edu.vn>",
  "phu": "Tiêu đề: Lịch kiểm tra cuối học kỳ I",
  "tin": [
   "Nhà trường gửi lịch kiểm tra cuối học kỳ I dạng tệp PDF đính kèm: LichKiemTra_HKI.pdf.",
   "Lịch cũng được dán tại bảng tin và đăng trên trang của trường."
  ],
  "hoi": "Thư gửi từ địa chỉ của trường mà bạn vẫn nhận thư từ đầu năm. Bạn làm gì?",
  "chon": [
   {
    "t": "Không mở bất kỳ tệp nào, xóa thư ngay.",
    "dung": false,
    "g": "Quá thận trọng. Tệp PDF từ địa chỉ quen của trường, nội dung khớp bảng tin là bình thường."
   },
   {
    "t": "Đổi mật khẩu email vì có tệp đính kèm.",
    "dung": false,
    "g": "Không cần. Tệp đính kèm không có nghĩa là bị tấn công."
   },
   {
    "t": "Mở tệp PDF để xem lịch, có thể đối chiếu với bảng tin của trường.",
    "dung": true,
    "g": "Đúng. Địa chỉ quen, tệp PDF (không phải .apk, .exe), nội dung có thể đối chiếu."
   }
  ],
  "hoc": "Thư thật: địa chỉ quen, tệp tài liệu thông thường, nội dung đối chiếu được ở kênh khác.",
  "nguon": "Tình huống thường ngày (thật)"
 },
 {
  "id": "p2-g06",
  "phong": "p2",
  "that": true,
  "loai": "chon",
  "kenh": "goi",
  "tu": "Shipper",
  "phu": "Cuộc gọi đến",
  "tin": [
   "\"Em ơi anh giao đơn sách em đặt trên ứng dụng ShopNhanh, anh đang ở cổng nhà, em ra nhận giúp anh. Đơn thanh toán khi nhận 85 nghìn như trên ứng dụng nhé.\""
  ],
  "hoi": "Bạn có đặt đơn sách 85.000đ, ứng dụng báo đơn đang giao. Bạn làm gì?",
  "chon": [
   {
    "t": "Ra nhận hàng, kiểm tra đúng đơn và số tiền như trên ứng dụng rồi thanh toán.",
    "dung": true,
    "g": "Đúng. Mọi thông tin khớp với đơn bạn đặt, không có link, không đòi phí lạ."
   },
   {
    "t": "Từ chối nhận vì shipper gọi từ số lạ.",
    "dung": false,
    "g": "Shipper thường dùng số cá nhân. Khớp đơn hàng thì nhận bình thường."
   },
   {
    "t": "Chuyển khoản trước 85 nghìn cho shipper cho nhanh.",
    "dung": false,
    "g": "Không cần chuyển trước khi đã chọn thanh toán khi nhận hàng."
   }
  ],
  "hoc": "Đối chiếu với đơn trong ứng dụng: khớp thì nhận, có phí lạ hay link lạ thì dừng.",
  "nguon": "Tình huống thường ngày (thật)"
 },
 {
  "id": "p2-g07",
  "phong": "p2",
  "that": true,
  "loai": "chon",
  "kenh": "facebook",
  "tu": "Đoàn Trường THPT A",
  "phu": "Trang bạn đã theo dõi 2 năm, có tích xác minh của trường",
  "tin": [
   "Thông báo: Chủ nhật này ra quân dọn vệ sinh khu di tích. Đoàn viên đăng ký với bí thư chi đoàn hoặc trên cổng thông tin Đoàn trường. Không thu phí."
  ],
  "hoi": "Bạn muốn tham gia. Bạn làm gì?",
  "chon": [
   {
    "t": "Bình luận số điện thoại và địa chỉ nhà để được gọi lại.",
    "dung": false,
    "g": "Không cần để lộ thông tin cá nhân công khai. Đăng ký qua bí thư hoặc cổng thông tin."
   },
   {
    "t": "Đăng ký với bí thư chi đoàn hoặc trên cổng thông tin Đoàn trường.",
    "dung": true,
    "g": "Đúng. Trang quen, không thu phí, đăng ký qua kênh chính thức."
   },
   {
    "t": "Chặn trang vì sợ lừa đảo.",
    "dung": false,
    "g": "Phản ứng thái quá với trang chính thức bạn đã theo dõi lâu."
   }
  ],
  "hoc": "Thông báo thật hướng bạn tới kênh chính thức và không thu phí.",
  "nguon": "Tình huống thường ngày (thật)"
 },
 {
  "id": "p2-g08",
  "phong": "p2",
  "that": true,
  "loai": "chon",
  "kenh": "web",
  "tu": "mxhketnoi.vn/doi-mat-khau",
  "phu": "Trang bạn tự gõ địa chỉ",
  "tin": [
   "Bạn tự gõ địa chỉ trang mạng xã hội quen thuộc, vào Cài đặt, chọn Đổi mật khẩu.",
   "Trang yêu cầu nhập mật khẩu cũ, rồi gửi mã xác nhận về số điện thoại của bạn."
  ],
  "hoi": "Bạn có nên nhập mã xác nhận vào trang này không?",
  "chon": [
   {
    "t": "Không, mọi trang hỏi mã đều là lừa đảo.",
    "dung": false,
    "g": "Không đúng. Trang chính thức do bạn tự mở và tự yêu cầu đổi mật khẩu thì nhập mã là bình thường."
   },
   {
    "t": "Nhập mã vào trang này nhưng gửi thêm cho bạn để lưu hộ.",
    "dung": false,
    "g": "Không bao giờ gửi mã cho người khác."
   },
   {
    "t": "Có, vì chính bạn tự mở trang chính thức và tự yêu cầu đổi mật khẩu.",
    "dung": true,
    "g": "Đúng. Điểm khác biệt: bạn tự gõ địa chỉ, không bấm từ link lạ, và chính bạn khởi động thao tác."
   }
  ],
  "hoc": "Tự mở trang chính thức, tự yêu cầu thao tác thì dùng mã là an toàn. Bị người khác dẫn vào thì dừng lại.",
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p2-g09",
  "phong": "p2",
  "that": true,
  "loai": "chon",
  "kenh": "app",
  "tu": "Kho ứng dụng của điện thoại",
  "phu": "Mục Cập nhật",
  "tin": [
   "Ứng dụng \"Ngân hàng Sao Việt\" (nhà phát triển: Ngân hàng Sao Việt) có bản cập nhật mới. Bấm Cập nhật."
  ],
  "hoi": "Bạn thấy thông báo cập nhật trong kho ứng dụng chính thức của máy. Bạn làm gì?",
  "chon": [
   {
    "t": "Không bao giờ cập nhật ứng dụng ngân hàng.",
    "dung": false,
    "g": "Ngược lại, cập nhật qua kho chính thức giúp vá lỗi bảo mật."
   },
   {
    "t": "Cập nhật ngay trong kho ứng dụng chính thức.",
    "dung": true,
    "g": "Đúng. Cập nhật qua kho chính thức là cách an toàn, khác hẳn tải tệp .apk từ link trong tin nhắn."
   },
   {
    "t": "Tìm link tải bản mới trên mạng cho nhanh hơn.",
    "dung": false,
    "g": "Link tải ngoài kho chính thức có thể chứa mã độc."
   }
  ],
  "hoc": "Cập nhật ứng dụng qua kho chính thức, không qua link trong tin nhắn.",
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p2-g10",
  "phong": "p2",
  "that": true,
  "loai": "chon",
  "kenh": "sms",
  "tu": "NhaMangSao",
  "phu": "Tin nhắn SMS, ngay sau khi bạn nạp thẻ",
  "tin": [
   "Quy khach da nap thanh cong 50.000d vao tai khoan chinh luc 21:10. Tran trong."
  ],
  "hoi": "Bạn vừa tự nạp thẻ điện thoại 50.000đ. Bạn làm gì?",
  "chon": [
   {
    "t": "Gọi lại số gửi tin để hỏi cho chắc.",
    "dung": false,
    "g": "Không cần. Tin khớp với việc bạn vừa làm và không yêu cầu gì."
   },
   {
    "t": "Chuyển tiếp tin cho cả nhóm lớp cảnh giác.",
    "dung": false,
    "g": "Đây là tin thật, không có gì phải cảnh báo."
   },
   {
    "t": "Coi là bình thường, có thể kiểm tra tài khoản bằng ứng dụng của nhà mạng.",
    "dung": true,
    "g": "Đúng. Tin xác nhận không kèm link, không đòi thông tin."
   }
  ],
  "hoc": "Tin xác nhận đúng việc mình vừa làm, không link, không yêu cầu thêm: bình thường.",
  "nguon": "Tình huống thường ngày (thật)"
 },
 {
  "id": "p2-g11",
  "phong": "p2",
  "that": false,
  "loai": "chon",
  "kenh": "sms",
  "tu": "5G-KhuyenMai",
  "phu": "Tin nhắn SMS",
  "tin": [
   "Tang ban goi data 30GB mien phi 3 thang. Dang ky ngay tai: t.ly/data30gb truoc 23h hom nay."
  ],
  "hoi": "Bạn đang hết data. Bạn làm gì?",
  "chon": [
   {
    "t": "Bấm link đăng ký ngay vì miễn phí.",
    "dung": false,
    "g": "Link rút gọn che trang đích. Trang có thể đòi đăng nhập, số thẻ hoặc cài ứng dụng lạ."
   },
   {
    "t": "Không bấm. Muốn đăng ký gói cước thì dùng ứng dụng chính thức của nhà mạng.",
    "dung": true,
    "g": "Đúng. Ưu đãi thật có trong ứng dụng hoặc kênh chính thức của nhà mạng."
   },
   {
    "t": "Chuyển link cho bạn bè cùng nhận.",
    "dung": false,
    "g": "Bạn giúp kẻ gian lan truyền bẫy."
   }
  ],
  "hoc": "Ưu đãi qua link rút gọn và hạn chót gấp: kiểm tra trong ứng dụng chính thức.",
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p2-g12",
  "phong": "p2",
  "that": false,
  "loai": "chon",
  "kenh": "goi",
  "tu": "\"Nhân viên hỗ trợ Ví Sao\"",
  "phu": "Cuộc gọi đến",
  "tin": [
   "\"Ví điện tử của em đang lỗi giao dịch. Em cài ứng dụng Hỗ Trợ Từ Xa và bật chia sẻ màn hình để anh sửa giúp nhé.\""
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Cài ứng dụng và chia sẻ màn hình để được sửa nhanh.",
    "dung": false,
    "g": "Chia sẻ màn hình cho người lạ là để họ nhìn thấy mật khẩu, mã OTP và điều khiển ví của bạn."
   },
   {
    "t": "Chỉ chia sẻ màn hình, không đọc mã.",
    "dung": false,
    "g": "Màn hình chia sẻ đã đủ để họ đọc mã khi tin nhắn hiện lên."
   },
   {
    "t": "Cúp máy, không cài gì. Có lỗi thì tự liên hệ hỗ trợ trong ứng dụng chính thức.",
    "dung": true,
    "g": "Đúng. Không ai cần điều khiển máy bạn để \"sửa lỗi ví\"."
   }
  ],
  "hoc": "Không cài ứng dụng điều khiển từ xa, không chia sẻ màn hình theo yêu cầu người lạ.",
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p2-g13",
  "phong": "p2",
  "that": false,
  "loai": "chon",
  "kenh": "zalo",
  "tu": "Bưu Cục Quốc Tế",
  "phu": "Tài khoản lạ",
  "tin": [
   "Bạn có 1 bưu kiện quốc tế đang bị giữ ở kho. Đóng phí thông quan 350.000đ vào tài khoản cá nhân dưới đây để được giao trong ngày."
  ],
  "hoi": "Bạn không chờ bưu kiện nào từ nước ngoài. Bạn làm gì?",
  "chon": [
   {
    "t": "Không chuyển tiền, không trả lời và báo bố mẹ.",
    "dung": true,
    "g": "Đúng. Không chờ hàng mà bị đòi phí, lại chuyển vào tài khoản cá nhân: dấu hiệu lừa đảo."
   },
   {
    "t": "Chuyển tiền vì biết đâu có người tặng quà.",
    "dung": false,
    "g": "Kẻ gian dùng sự tò mò để bạn tự chuyển tiền."
   },
   {
    "t": "Gửi ảnh căn cước để họ kiểm tra người nhận.",
    "dung": false,
    "g": "Ảnh căn cước có thể bị dùng để làm giả hồ sơ đứng tên bạn."
   }
  ],
  "hoc": "Không chờ hàng mà bị đòi phí thông quan: lờ đi, báo người lớn.",
  "nguon": "Cảnh báo của Công an về lừa đảo trực tuyến"
 },
 {
  "id": "p2-g14",
  "phong": "p2",
  "that": false,
  "loai": "chon",
  "kenh": "email",
  "tu": "Quản trị hộp thư <admin@mailsao-capnhat.co>",
  "phu": "Tiêu đề: Hộp thư của bạn đã đầy 99%",
  "tin": [
   "Hộp thư của bạn sắp ngừng nhận thư. Đăng nhập tại đường link dưới đây để nâng cấp dung lượng miễn phí trong 24 giờ."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Đăng nhập qua link vì sợ mất thư.",
    "dung": false,
    "g": "Trang đăng nhập giả sẽ lấy mật khẩu email của bạn."
   },
   {
    "t": "Trả lời thư hỏi xem có mất phí không.",
    "dung": false,
    "g": "Trả lời giúp kẻ gian biết hộp thư đang dùng."
   },
   {
    "t": "Không bấm link. Tự mở hộp thư bằng địa chỉ quen để xem dung lượng thật.",
    "dung": true,
    "g": "Đúng. Địa chỉ gửi lạ, thúc ép 24 giờ, link đăng nhập: thư giả."
   }
  ],
  "hoc": "Thư dọa đầy hộp thư kèm link đăng nhập: tự kiểm tra trong trang chính thức.",
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p2-g15",
  "phong": "p2",
  "that": false,
  "loai": "chon",
  "kenh": "facebook",
  "tu": "Trung Tâm Bản Quyền MXH",
  "phu": "Tin nhắn từ trang lạ",
  "tin": [
   "Trang cá nhân của bạn vi phạm bản quyền âm nhạc và sẽ bị xóa sau 24 giờ. Gửi kháng nghị tại: khangnghi-banquyen.site"
  ],
  "hoi": "Bạn có đăng một video có nhạc nền. Bạn làm gì?",
  "chon": [
   {
    "t": "Vào link kháng nghị và đăng nhập để giữ trang.",
    "dung": false,
    "g": "Trang kháng nghị giả để lấy mật khẩu và chiếm tài khoản."
   },
   {
    "t": "Kiểm tra mục Thông báo, Trạng thái tài khoản ngay trong ứng dụng mạng xã hội; bỏ qua tin này.",
    "dung": true,
    "g": "Đúng. Thông báo vi phạm thật nằm trong mục trạng thái tài khoản của ứng dụng, không qua link lạ."
   },
   {
    "t": "Nhắn lại xin lỗi và gửi số điện thoại.",
    "dung": false,
    "g": "Bạn tự cung cấp thêm thông tin cho kẻ gian."
   }
  ],
  "hoc": "Cảnh báo vi phạm thật nằm trong ứng dụng chính thức, không đến qua link lạ.",
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p2-g16",
  "phong": "p2",
  "that": false,
  "loai": "chon",
  "kenh": "telegram",
  "tu": "Nhóm \"Tặng Tiền Số Miễn Phí\"",
  "phu": "Tin nhắn ghim trong nhóm",
  "tin": [
   "Nhận ngay 100 USD tiền số miễn phí! Kết nối ví và nhập cụm 12 từ khôi phục ví để xác minh."
  ],
  "hoi": "Bạn có một ví tiền số do anh trai tạo hộ. Bạn làm gì?",
  "chon": [
   {
    "t": "Nhập cụm từ khôi phục để nhận tiền.",
    "dung": false,
    "g": "Cụm từ khôi phục là chìa khóa ví. Ai có nó là lấy hết tiền trong ví."
   },
   {
    "t": "Rời nhóm, không nhập gì, báo anh trai hoặc bố mẹ.",
    "dung": true,
    "g": "Đúng. Không có trang hợp lệ nào xin cụm từ khôi phục."
   },
   {
    "t": "Nhập một nửa cụm từ cho an toàn.",
    "dung": false,
    "g": "Kẻ gian vẫn có thể dò phần còn lại."
   }
  ],
  "hoc": "Cụm từ khôi phục ví, mật khẩu, OTP: không đưa cho ai.",
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p2-g17",
  "phong": "p2",
  "that": false,
  "loai": "chon",
  "kenh": "web",
  "tu": "Cửa sổ bật lên khi đọc truyện online",
  "phu": "Trang đọc truyện lạ",
  "tin": [
   "CẢNH BÁO! Điện thoại của bạn nhiễm 3 virus. Bấm TẢI NGAY \"DiệtVirus.apk\" để bảo vệ dữ liệu."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Tải ứng dụng diệt virus ngay.",
    "dung": false,
    "g": "Cảnh báo giả để bạn tự cài mã độc."
   },
   {
    "t": "Đóng trang, không tải gì. Nếu lo, kiểm tra bằng công cụ bảo mật có sẵn của điện thoại.",
    "dung": true,
    "g": "Đúng. Trang web không thể \"quét\" virus trong máy bạn."
   },
   {
    "t": "Bấm vào cảnh báo để xem virus là gì.",
    "dung": false,
    "g": "Bấm vào là đi tiếp vào bẫy."
   }
  ],
  "hoc": "Cảnh báo virus bật lên trên trang web là giả. Đóng trang, không tải gì.",
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p2-g18",
  "phong": "p2",
  "that": false,
  "loai": "chon",
  "kenh": "sms",
  "tu": "DiemThuong",
  "phu": "Tin nhắn SMS",
  "tin": [
   "Quy khach co 1.250 diem thuong sap het han hom nay. Doi qua tai: doiqua-diemthuong.top"
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Đổi quà ngay kẻo hết hạn.",
    "dung": false,
    "g": "Trang đổi quà giả thường đòi số thẻ, mã OTP để \"trả phí vận chuyển\"."
   },
   {
    "t": "Trả lời tin nhắn để hỏi điểm của ai.",
    "dung": false,
    "g": "Trả lời giúp kẻ gian xác nhận số điện thoại đang dùng."
   },
   {
    "t": "Không bấm. Nếu có tích điểm ở đâu, kiểm tra trong ứng dụng chính thức của nơi đó.",
    "dung": true,
    "g": "Đúng. Không rõ điểm của ai, tên miền lạ, hạn trong ngày: dấu hiệu giả."
   }
  ],
  "hoc": "Điểm thưởng sắp hết hạn kèm link lạ: kiểm tra trong ứng dụng gốc.",
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p2-g19",
  "phong": "p2",
  "that": false,
  "loai": "chon",
  "kenh": "app",
  "tu": "Điện thoại của bạn",
  "phu": "Bạn vừa lỡ cài tệp .apk từ một tin nhắn",
  "tin": [
   "Sau khi cài, máy nóng lên, màn hình tự mở trang lạ, ứng dụng mới xin quyền Trợ năng."
  ],
  "hoi": "Việc cần làm NGAY là gì?",
  "chon": [
   {
    "t": "Ngắt mạng, không cấp quyền, gỡ ứng dụng; báo bố mẹ, liên hệ ngân hàng qua tổng đài in sau thẻ nếu máy có ứng dụng ngân hàng.",
    "dung": true,
    "g": "Đúng. Ngắt mạng để mã độc không gửi dữ liệu ra ngoài, rồi nhờ người lớn kiểm tra máy."
   },
   {
    "t": "Cấp quyền cho xong để máy hết nóng.",
    "dung": false,
    "g": "Quyền Trợ năng cho mã độc đọc màn hình và điều khiển máy."
   },
   {
    "t": "Để đó, mai tính.",
    "dung": false,
    "g": "Mã độc có thể lấy mã OTP và mật khẩu ngay trong đêm."
   }
  ],
  "hoc": "Lỡ cài ứng dụng lạ: ngắt mạng, gỡ, báo người lớn, báo ngân hàng.",
  "nguon": "Cảnh báo của Công an về lừa đảo trực tuyến"
 },
 {
  "id": "p2-g20",
  "phong": "p2",
  "that": false,
  "loai": "chon",
  "kenh": "zalo",
  "tu": "Nhóm lớp 10A1",
  "phu": "Một tài khoản lạ vừa vào nhóm",
  "tin": [
   "Danh sách học sinh vi phạm nề nếp tuần này, ai có tên thì tự xem nhé 👀",
   "📎 DanhSachViPham.apk"
  ],
  "hoi": "Bạn làm gì với tệp này?",
  "chon": [
   {
    "t": "Mở ngay xem mình có tên không.",
    "dung": false,
    "g": "Danh sách thật là tệp tài liệu, không phải tệp cài ứng dụng .apk."
   },
   {
    "t": "Không mở. Báo bí thư, giáo viên chủ nhiệm để xóa tin và mời tài khoản lạ ra khỏi nhóm.",
    "dung": true,
    "g": "Đúng. Tệp .apk đội lốt tài liệu là cách phát tán mã độc."
   },
   {
    "t": "Tải về máy tính mở cho an toàn.",
    "dung": false,
    "g": "Mở ở đâu cũng có rủi ro. Không mở tệp lạ."
   }
  ],
  "hoc": "Tài liệu thật không bao giờ là tệp .apk.",
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p2-g21",
  "phong": "p2",
  "that": false,
  "loai": "chon",
  "kenh": "goi",
  "tu": "\"Tổng đài nhà mạng\"",
  "phu": "Cuộc gọi đến",
  "tin": [
   "\"Sim của em đủ điều kiện nâng cấp 5G miễn phí. Em soạn tin theo cú pháp anh đọc và gửi đến số này để kích hoạt sim mới.\""
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Soạn tin theo hướng dẫn để được 5G.",
    "dung": false,
    "g": "Cú pháp đó có thể chuyển số điện thoại của bạn sang sim của kẻ gian, rồi chúng nhận hết OTP."
   },
   {
    "t": "Đọc số căn cước để họ kiểm tra trước.",
    "dung": false,
    "g": "Thêm thông tin cá nhân cho kẻ gian."
   },
   {
    "t": "Cúp máy. Muốn đổi sim thì ra cửa hàng nhà mạng cùng bố mẹ.",
    "dung": true,
    "g": "Đúng. Đổi, nâng cấp sim làm tại cửa hàng hoặc ứng dụng chính thức."
   }
  ],
  "hoc": "Không làm theo cú pháp tin nhắn do người gọi đến đọc cho.",
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p2-g22",
  "phong": "p2",
  "that": false,
  "loai": "chon",
  "kenh": "sms",
  "tu": "BaoMatTK",
  "phu": "Tin nhắn SMS",
  "tin": [
   "Tai khoan MXH cua ban vua dang nhap tu thiet bi la tai nuoc ngoai. Neu khong phai ban, huy ngay tai: huy-dangnhap.click"
  ],
  "hoi": "Bạn hơi lo. Bạn làm gì?",
  "chon": [
   {
    "t": "Bấm link hủy đăng nhập ngay.",
    "dung": false,
    "g": "Đây là chiêu dọa để bạn tự nhập mật khẩu vào trang giả."
   },
   {
    "t": "Mở ứng dụng mạng xã hội chính thức, xem mục Thiết bị đăng nhập; thấy lạ thì đổi mật khẩu trong ứng dụng.",
    "dung": true,
    "g": "Đúng. Xử lý cảnh báo trong ứng dụng gốc, không qua link."
   },
   {
    "t": "Xóa tài khoản cho chắc.",
    "dung": false,
    "g": "Không cần xóa. Kiểm tra trong ứng dụng là đủ."
   }
  ],
  "hoc": "Cảnh báo bảo mật kèm link: bỏ qua link, kiểm tra trong ứng dụng gốc.",
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p2-g23",
  "phong": "p2",
  "that": false,
  "loai": "chon",
  "kenh": "email",
  "tu": "Công ty Điện Lực Sao <hoadon.dien@gmail.com>",
  "phu": "Tiêu đề: Hóa đơn tiền điện tăng bất thường",
  "tin": [
   "Hóa đơn tháng này của gia đình bạn tăng gấp 3. Mở tệp đính kèm HoaDon_Thang11.exe để xem chi tiết."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Mở tệp để xem nhà mình tốn bao nhiêu.",
    "dung": false,
    "g": "Tệp .exe là chương trình chạy được, không phải hóa đơn. Mở ra có thể cài mã độc."
   },
   {
    "t": "Không mở. Báo bố mẹ kiểm tra hóa đơn qua kênh chính thức của điện lực.",
    "dung": true,
    "g": "Đúng. Gmail cá nhân, tệp .exe, gây hoảng: thư giả."
   },
   {
    "t": "Chuyển thư cho bố mẹ mở trên máy của họ.",
    "dung": false,
    "g": "Chuyển tiếp là đưa rủi ro sang máy người thân."
   }
  ],
  "hoc": "Hóa đơn thật không phải tệp .exe.",
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p2-g24",
  "phong": "p2",
  "that": false,
  "loai": "chon",
  "kenh": "telegram",
  "tu": "\"Hoàn tiền đơn hàng\"",
  "phu": "Tin nhắn riêng",
  "tin": [
   "Đơn hàng của bạn bị giao lỗi, shop hoàn 120.000đ. Bạn quét mã QR này bằng ứng dụng ngân hàng và nhập mã PIN để nhận tiền hoàn."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Quét mã và nhập mã PIN để nhận tiền.",
    "dung": false,
    "g": "Quét QR và nhập PIN là thao tác TRẢ tiền, không phải nhận tiền."
   },
   {
    "t": "Gửi số tài khoản thay vì quét mã.",
    "dung": false,
    "g": "Không cần cho người lạ số tài khoản. Hoàn tiền thật đi qua ứng dụng mua hàng."
   },
   {
    "t": "Không quét. Kiểm tra trạng thái hoàn tiền trong ứng dụng mua hàng chính thức.",
    "dung": true,
    "g": "Đúng. Nhận tiền không bao giờ cần bạn nhập PIN hay quét mã."
   }
  ],
  "hoc": "Nhận tiền không cần quét QR hay nhập PIN. Phải nhập PIN là đang trả tiền.",
  "nguon": "Cảnh báo của Công an về lừa đảo trực tuyến"
 },
 {
  "id": "p2-g25",
  "phong": "p2",
  "that": false,
  "loai": "soi",
  "kenh": "sms",
  "tu": "NhaMang-UuDai",
  "phu": "Tin nhắn SMS",
  "tin": [
   [
    "Cam on quy khach da dong hanh cung nha mang. "
   ],
   [
    "Tang ",
    {
     "t": "goi 5G mien phi 12 thang",
     "n": true,
     "g": "Ưu đãi quá lớn, quá dễ nhận để dụ bạn bấm link."
    },
    ", dang ky ",
    {
     "t": "truoc 24h",
     "n": true,
     "g": "Thúc ép thời gian để bạn không kịp kiểm tra."
    }
   ],
   [
    "tai: ",
    {
     "t": "bit.ly/5g-free12",
     "n": true,
     "g": "Link rút gọn che giấu trang đích thật."
    }
   ],
   [
    "Chi tiet lien he cua hang gan nhat."
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu lừa đảo trong tin nhắn.",
  "hoc": "Ưu đãi lớn, hạn gấp, link rút gọn: kiểm tra trong ứng dụng nhà mạng.",
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p2-g26",
  "phong": "p2",
  "that": false,
  "loai": "soi",
  "kenh": "email",
  "tu": "Bộ phận Bảo mật <baomat@mailsao-secure.co>",
  "phu": "Tiêu đề: Mật khẩu của bạn hết hạn hôm nay",
  "tin": [
   [
    "Xin chào bạn, cảm ơn bạn đã sử dụng dịch vụ thư điện tử của chúng tôi."
   ],
   [
    {
     "t": "Mật khẩu của bạn hết hạn trong hôm nay",
     "n": true,
     "g": "Dọa hết hạn để gây vội vàng."
    },
    ". ",
    {
     "t": "Bấm vào đây để giữ mật khẩu cũ",
     "n": true,
     "g": "Link dẫn tới trang đăng nhập giả để lấy mật khẩu."
    }
   ],
   [
    {
     "t": "Gửi từ tên miền mailsao-secure.co, không phải tên miền của dịch vụ",
     "n": true,
     "g": "Tên miền lạ giả làm bộ phận bảo mật."
    }
   ],
   [
    "Trân trọng, đội ngũ hỗ trợ khách hàng."
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu đáng ngờ trong thư.",
  "hoc": "Thư đòi \"giữ mật khẩu\" qua link là thư lừa. Đổi mật khẩu thì tự vào trang chính thức.",
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p2-g27",
  "phong": "p2",
  "that": false,
  "loai": "soi",
  "kenh": "web",
  "tu": "Cửa sổ bật lên",
  "phu": "Khi bạn đang xem trang tin tức",
  "tin": [
   [
    "Hôm nay là một ngày may mắn của bạn!"
   ],
   [
    "Bạn là ",
    {
     "t": "người truy cập thứ 1.000.000, trúng điện thoại đời mới",
     "n": true,
     "g": "Trúng thưởng vô cớ là mồi nhử quen thuộc."
    }
   ],
   [
    {
     "t": "Nhập số thẻ ngân hàng để trả phí vận chuyển 1.000đ",
     "n": true,
     "g": "Phí nhỏ là cái cớ để lấy thông tin thẻ của bạn."
    },
    ". ",
    {
     "t": "Ưu đãi kết thúc sau 59 giây",
     "n": true,
     "g": "Đồng hồ đếm ngược ép bạn hành động ngay."
    }
   ],
   [
    "Cảm ơn bạn đã luôn đồng hành cùng chúng tôi."
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu lừa đảo.",
  "hoc": "Trúng thưởng vô cớ, đòi số thẻ, đếm ngược: đóng trang ngay.",
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p2-g28",
  "phong": "p2",
  "that": false,
  "loai": "soi",
  "kenh": "zalo",
  "tu": "Nhóm lớp 11A2",
  "phu": "Tin nhắn trong nhóm",
  "tin": [
   [
    {
     "t": "Tài khoản \"Minh Anh 2k10\" vừa được thêm vào nhóm hôm nay",
     "n": true,
     "g": "Tài khoản lạ mới vào nhóm đã gửi link."
    }
   ],
   [
    {
     "t": "Ơ đây có phải bạn trong video này không??",
     "n": true,
     "g": "Câu hỏi gây tò mò, lo lắng để bạn bấm ngay."
    }
   ],
   [
    "Mọi người nhớ mang áo đoàn thứ Hai nhé."
   ],
   [
    "Xem tại: ",
    {
     "t": "vid-lop11.link (yêu cầu đăng nhập Facebook để xem)",
     "n": true,
     "g": "Video không cần đăng nhập ở trang lạ. Đây là bẫy lấy tài khoản."
    }
   ],
   [
    "Lịch trực nhật tuần sau cô đã gửi ở trên."
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu đáng ngờ trong nhóm lớp.",
  "hoc": "Link gây tò mò từ tài khoản lạ, đòi đăng nhập: không bấm, báo bí thư.",
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p2-g29",
  "phong": "p2",
  "that": false,
  "loai": "soi",
  "kenh": "facebook",
  "tu": "Đội Hỗ trợ Bảo mật MXH",
  "phu": "Trang tạo 3 ngày trước, gửi tin nhắn riêng",
  "tin": [
   [
    "Chúng tôi luôn nỗ lực giữ cộng đồng an toàn."
   ],
   [
    "Tài khoản của bạn ",
    {
     "t": "đã vi phạm tiêu chuẩn cộng đồng và sẽ bị vô hiệu hóa sau 12 giờ",
     "n": true,
     "g": "Đe dọa và thúc ép thời gian."
    }
   ],
   [
    "Để giữ tài khoản, ",
    {
     "t": "điền mật khẩu và mã xác thực 2 lớp tại biểu mẫu",
     "n": true,
     "g": "Không bên hỗ trợ thật nào xin mật khẩu và mã xác thực của bạn."
    }
   ],
   [
    {
     "t": "Trang mới lập, không có dấu xác minh",
     "n": true,
     "g": "Mạo danh đội hỗ trợ bằng trang lạ."
    }
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu lừa đảo.",
  "hoc": "Hỗ trợ thật không nhắn riêng đòi mật khẩu hay mã xác thực.",
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p2-g30",
  "phong": "p2",
  "that": false,
  "loai": "soi",
  "kenh": "telegram",
  "tu": "Nhóm \"Săn Mã Giảm Giá\"",
  "phu": "Tin nhắn ghim",
  "tin": [
   [
    "Chào mừng các bạn đến với nhóm săn sale cùng nhau."
   ],
   [
    {
     "t": "Tải ứng dụng SanSale.apk để nhận mã giảm 90%",
     "n": true,
     "g": "Tệp .apk ngoài kho chính thức có thể chứa mã độc; giảm 90% là mồi."
    }
   ],
   [
    "Khi cài, ",
    {
     "t": "cấp quyền Đọc tin nhắn và Trợ năng",
     "n": true,
     "g": "Ứng dụng mã giảm giá không cần đọc tin nhắn; quyền này để lấy mã OTP."
    }
   ],
   [
    "Mỗi ngày nhóm cập nhật mã mới vào buổi tối."
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu lừa đảo.",
  "hoc": "Ứng dụng ngoài kho chính thức, xin quyền đọc tin nhắn: không cài.",
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p2-g31",
  "phong": "p2",
  "that": false,
  "loai": "soi",
  "kenh": "goi",
  "tu": "\"Nhân viên Ngân hàng Sao Việt\"",
  "phu": "Cuộc gọi đến",
  "tin": [
   [
    "Alo, chào em, anh gọi từ phòng chăm sóc khách hàng."
   ],
   [
    {
     "t": "Tài khoản em vừa có giao dịch 5 triệu lạ",
     "n": true,
     "g": "Gây hoảng hốt bằng giao dịch không có thật."
    }
   ],
   [
    {
     "t": "Em đọc mã OTP vừa nhận để anh hủy giao dịch",
     "n": true,
     "g": "Ngân hàng không bao giờ xin OTP. Đọc mã là giao tiền cho kẻ gian."
    }
   ],
   [
    {
     "t": "Đừng tắt máy, nếu tắt giao dịch sẽ hoàn tất",
     "n": true,
     "g": "Giữ máy để bạn không kịp hỏi ai."
    }
   ],
   [
    "Anh hỗ trợ em trong giờ hành chính nhé."
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu lừa đảo trong cuộc gọi.",
  "hoc": "Ngân hàng không xin OTP. Cúp máy, tự gọi tổng đài in sau thẻ.",
  "nguon": "Cảnh báo của Công an về lừa đảo trực tuyến"
 },
 {
  "id": "p2-g32",
  "phong": "p2",
  "that": false,
  "loai": "soi",
  "kenh": "sms",
  "tu": "SaoViet-Bank",
  "phu": "Tin nhắn SMS",
  "tin": [
   [
    "Kinh gui quy khach hang than thiet."
   ],
   [
    {
     "t": "Ung dung cua quy khach sap ngung hoat dong",
     "n": true,
     "g": "Đe dọa để bạn vội cập nhật."
    }
   ],
   [
    "Vui long ",
    {
     "t": "cap nhat ban moi tai: saoviet-update.apk.link",
     "n": true,
     "g": "Ngân hàng cập nhật qua kho ứng dụng chính thức, không gửi tệp .apk qua tin nhắn."
    }
   ],
   [
    "Xin cam on va chuc quy khach mot ngay tot lanh."
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu lừa đảo.",
  "hoc": "Cập nhật ứng dụng ngân hàng chỉ qua kho ứng dụng chính thức.",
  "nguon": "Cảnh báo của Công an về lừa đảo trực tuyến"
 },
 {
  "id": "p3-g01",
  "phong": "p3",
  "loai": "chon",
  "kenh": "zalo",
  "tu": "Cô Hương (GVCN)",
  "phu": "Nhóm lớp 10A1 quen thuộc, cô đã dùng từ đầu năm",
  "tin": [
   "Cả lớp nhắc bố mẹ: họp phụ huynh cuối kỳ lúc 8h sáng Chủ nhật tại phòng 204. Không thu khoản nào, các em báo lại cô số phụ huynh dự."
  ],
  "hoi": "Bạn làm gì với tin này?",
  "chon": [
   {
    "t": "Báo cáo nhóm vì nghi lừa đảo.",
    "dung": false,
    "g": "Tin không đòi tiền, không có link lạ, gửi từ nhóm lớp quen. Báo cáo nhầm gây rối cho cả lớp."
   },
   {
    "t": "Chuyển lời cho bố mẹ và báo cô số người dự như cô dặn.",
    "dung": true,
    "g": "Đúng. Kênh quen, nội dung bình thường, không đòi tiền hay thông tin nhạy cảm."
   },
   {
    "t": "Bỏ qua vì không phải việc của mình.",
    "dung": false,
    "g": "Đây là thông báo thật của lớp, bỏ qua sẽ làm bố mẹ lỡ buổi họp."
   }
  ],
  "hoc": "Tin từ kênh quen, không đòi tiền, không xin thông tin nhạy cảm thì có thể làm theo.",
  "nguon": "Tình huống thường ngày (thật)",
  "that": true
 },
 {
  "id": "p3-g02",
  "phong": "p3",
  "loai": "chon",
  "kenh": "sms",
  "tu": "Bố",
  "phu": "Số điện thoại của bố đã lưu từ lâu",
  "tin": [
   "Chiều nay bố về muộn, con đón em ở cổng trường tiểu học lúc 5h nhé. Về nhà nhắn bố."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Đón em đúng giờ rồi nhắn bố khi về đến nhà.",
    "dung": true,
    "g": "Đúng. Số quen, nội dung bình thường, không có yêu cầu tiền hay bí mật."
   },
   {
    "t": "Không đón vì sợ tin giả.",
    "dung": false,
    "g": "Phản ứng thái quá. Tin không có dấu hiệu bất thường nào."
   },
   {
    "t": "Chặn số này cho an toàn.",
    "dung": false,
    "g": "Chặn nhầm số của bố sẽ làm lỡ liên lạc trong gia đình."
   }
  ],
  "hoc": "Không phải tin nào cũng là bẫy: xem kênh, xem yêu cầu rồi mới quyết định.",
  "nguon": "Tình huống thường ngày (thật)",
  "that": true
 },
 {
  "id": "p3-g03",
  "phong": "p3",
  "loai": "chon",
  "kenh": "goi",
  "tu": "Mẹ",
  "phu": "Cuộc gọi từ số của mẹ, giọng quen",
  "tin": [
   "\"Con ơi mẹ quên ví ở nhà, con mang giúp mẹ ra cửa hàng đầu ngõ được không?\""
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Cúp máy và báo công an vì nghi lừa đảo.",
    "dung": false,
    "g": "Không có yêu cầu chuyển tiền hay thông tin. Đây là việc nhà bình thường."
   },
   {
    "t": "Hỏi mẹ ví để đâu rồi mang ra cho mẹ.",
    "dung": true,
    "g": "Đúng. Mẹ gọi từ số quen, nhờ việc bình thường trong gia đình."
   },
   {
    "t": "Đòi mẹ chuyển khoản trước mới mang.",
    "dung": false,
    "g": "Không hợp lý và không liên quan đến an toàn."
   }
  ],
  "hoc": "Cuộc gọi của người thân nhờ việc bình thường, không đòi tiền: cứ giúp như mọi ngày.",
  "nguon": "Tình huống thường ngày (thật)",
  "that": true
 },
 {
  "id": "p3-g04",
  "phong": "p3",
  "loai": "chon",
  "kenh": "facebook",
  "tu": "Đoàn Trường THPT A",
  "phu": "Trang chính thức trường vẫn chia sẻ, có tích quen thuộc",
  "tin": [
   "Thông báo: Chủ nhật tuần này Đoàn trường tổ chức ra quân dọn vệ sinh khu di tích. Đoàn viên đăng ký qua bí thư chi đoàn. Không thu phí."
  ],
  "hoi": "Bạn muốn tham gia. Bạn làm gì?",
  "chon": [
   {
    "t": "Nhắn bí thư chi đoàn để đăng ký như thông báo.",
    "dung": true,
    "g": "Đúng. Trang quen, đăng ký qua kênh nội bộ, không thu phí."
   },
   {
    "t": "Gửi ảnh căn cước cho trang để đăng ký nhanh.",
    "dung": false,
    "g": "Thông báo không yêu cầu, không nên tự gửi giấy tờ qua mạng."
   },
   {
    "t": "Bình luận số điện thoại công khai dưới bài.",
    "dung": false,
    "g": "Lộ thông tin cá nhân không cần thiết."
   }
  ],
  "hoc": "Đăng ký hoạt động qua kênh nội bộ quen thuộc, không gửi thêm thông tin không được yêu cầu.",
  "nguon": "Tình huống thường ngày (thật)",
  "that": true
 },
 {
  "id": "p3-g05",
  "phong": "p3",
  "loai": "chon",
  "kenh": "email",
  "tu": "Phòng Đào tạo <daotao@thpta.edu.vn>",
  "phu": "Địa chỉ trường dùng từ đầu năm",
  "tin": [
   "Lịch thi học kỳ I đã cập nhật trên bảng tin và cổng thông tin của trường. Học sinh xem lịch, không cần trả lời thư này."
  ],
  "hoi": "Thư không có tệp đính kèm, không có link đăng nhập. Bạn làm gì?",
  "chon": [
   {
    "t": "Xem lịch thi trên bảng tin hoặc cổng thông tin của trường như thư hướng dẫn.",
    "dung": true,
    "g": "Đúng. Thư từ địa chỉ quen, không đòi đăng nhập hay tải tệp."
   },
   {
    "t": "Trả lời thư kèm mật khẩu tài khoản học tập để được xác nhận.",
    "dung": false,
    "g": "Không ai cần mật khẩu của bạn, kể cả nhà trường."
   },
   {
    "t": "Xóa ngay vì mọi email đều nguy hiểm.",
    "dung": false,
    "g": "Phản ứng thái quá. Thư này không có dấu hiệu lừa đảo."
   }
  ],
  "hoc": "Thư thật thường không ép đăng nhập, không ép tải tệp, chỉ hướng dẫn xem ở kênh chính thức.",
  "nguon": "Tình huống thường ngày (thật)",
  "that": true
 },
 {
  "id": "p3-g06",
  "phong": "p3",
  "loai": "chon",
  "kenh": "zalo",
  "tu": "Minh (bạn cùng lớp)",
  "phu": "Bạn thân, nhắn đúng như mọi khi",
  "tin": [
   "Mai mang hộ tao quyển vở Hóa nhé, hôm trước tao để quên ở nhà mày."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Hỏi Minh mã OTP để xác minh là bạn ấy.",
    "dung": false,
    "g": "Không bao giờ hỏi hay xin OTP. Việc nhỏ thế này không cần xác minh kiểu đó."
   },
   {
    "t": "Mang vở cho Minh như bình thường.",
    "dung": true,
    "g": "Đúng. Không đòi tiền, không link, không bí mật: tin nhắn bình thường giữa bạn bè."
   },
   {
    "t": "Chặn Minh vì sợ tài khoản bị chiếm.",
    "dung": false,
    "g": "Không có dấu hiệu bất thường để nghi ngờ."
   }
  ],
  "hoc": "Dấu hiệu bị chiếm tài khoản là đòi tiền, link lạ, gấp gáp. Tin bình thường thì cứ trả lời bình thường.",
  "nguon": "Tình huống thường ngày (thật)",
  "that": true
 },
 {
  "id": "p3-g07",
  "phong": "p3",
  "loai": "chon",
  "kenh": "app",
  "tu": "Ứng dụng ngân hàng Sao Việt",
  "phu": "Ứng dụng chính thức đã cài từ kho ứng dụng",
  "tin": [
   "Thông báo: Tài khoản của bạn vừa nhận 200.000đ từ NGUYEN THI LAN (mẹ). Nội dung: tien an sang tuan nay."
  ],
  "hoi": "Mẹ đã báo trước sẽ chuyển tiền ăn sáng. Bạn làm gì?",
  "chon": [
   {
    "t": "Gọi số lạ trên mạng để hỏi ngân hàng.",
    "dung": false,
    "g": "Không cần, và số lạ trên mạng có thể là số giả."
   },
   {
    "t": "Chuyển trả lại vì sợ bị lừa.",
    "dung": false,
    "g": "Tiền từ mẹ, đúng như mẹ báo, không có gì bất thường."
   },
   {
    "t": "Kiểm tra số dư trong ứng dụng, nhắn mẹ đã nhận được.",
    "dung": true,
    "g": "Đúng. Thông báo trong ứng dụng chính thức, khớp với lời mẹ báo trước."
   }
  ],
  "hoc": "Xác minh bằng chính ứng dụng chính thức và người thân, không qua link hay số lạ.",
  "nguon": "Tình huống thường ngày (thật)",
  "that": true
 },
 {
  "id": "p3-g08",
  "phong": "p3",
  "loai": "chon",
  "kenh": "goi",
  "tu": "Cô Mai (cô dạy Tin)",
  "phu": "Số điện thoại cô đã cho cả lớp lưu",
  "tin": [
   "\"Em ơi, chiều nay câu lạc bộ lập trình đổi sang phòng máy 2 nhé, em báo các bạn trong nhóm giúp cô.\""
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Báo các bạn trong nhóm câu lạc bộ đổi phòng.",
    "dung": true,
    "g": "Đúng. Số quen, việc bình thường, không đòi tiền hay thông tin."
   },
   {
    "t": "Đòi cô gửi ảnh căn cước để chứng minh.",
    "dung": false,
    "g": "Không cần và không phù hợp. Đây là cuộc gọi bình thường."
   },
   {
    "t": "Tắt máy, báo công an.",
    "dung": false,
    "g": "Phản ứng thái quá với một thông báo đổi phòng."
   }
  ],
  "hoc": "Đánh giá theo yêu cầu: không có yêu cầu nhạy cảm thì không cần hoảng.",
  "nguon": "Tình huống thường ngày (thật)",
  "that": true
 },
 {
  "id": "p3-g09",
  "phong": "p3",
  "loai": "chon",
  "kenh": "telegram",
  "tu": "Nhóm \"CLB Robot THPT A\"",
  "phu": "Nhóm câu lạc bộ do thầy phụ trách lập, bạn tham gia 6 tháng",
  "tin": [
   "Thầy Bình: Thứ 7 cả nhóm mang laptop đến xưởng để lắp mạch, không cần chuẩn bị gì thêm."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Rời nhóm vì Telegram toàn lừa đảo.",
    "dung": false,
    "g": "Ứng dụng không quyết định thật hay giả; nội dung và người gửi mới quan trọng."
   },
   {
    "t": "Chuẩn bị laptop và đến đúng giờ.",
    "dung": true,
    "g": "Đúng. Nhóm quen, người quen, không có yêu cầu bất thường."
   },
   {
    "t": "Hỏi thầy số tài khoản để nộp tiền trước cho chắc.",
    "dung": false,
    "g": "Thầy không đòi tiền, tự đề nghị chuyển tiền là không cần thiết."
   }
  ],
  "hoc": "Không đánh giá theo ứng dụng, đánh giá theo nội dung và yêu cầu.",
  "nguon": "Tình huống thường ngày (thật)",
  "that": true
 },
 {
  "id": "p3-g10",
  "phong": "p3",
  "loai": "chon",
  "kenh": "zalo",
  "tu": "Bác Tư (hàng xóm)",
  "phu": "Số đã lưu, hay nhắn cho gia đình",
  "tin": [
   "Cháu ơi bố mẹ đi vắng, bác để gói bánh trước cổng nhà cháu rồi nhé, lấy vào kẻo mưa."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Ra lấy gói bánh vào nhà và nhắn cảm ơn bác.",
    "dung": true,
    "g": "Đúng. Người quen, việc thường ngày, không đòi gì."
   },
   {
    "t": "Gửi bác mã OTP vừa nhận để cảm ơn.",
    "dung": false,
    "g": "Không bao giờ gửi OTP cho ai, kể cả người quen."
   },
   {
    "t": "Không ra lấy vì sợ bị bắt cóc.",
    "dung": false,
    "g": "Lo lắng thái quá: đây là tình huống thường ngày với người quen."
   }
  ],
  "hoc": "Cảnh giác đúng chỗ: với việc thường ngày của người quen, cứ cư xử bình thường.",
  "nguon": "Tình huống thường ngày (thật)",
  "that": true
 },
 {
  "id": "p3-g11",
  "phong": "p3",
  "loai": "soi",
  "kenh": "zalo",
  "tu": "Thầy Nam (dạy Toán)",
  "phu": "Tài khoản mới, ảnh đại diện giống thầy",
  "tin": [
   [
    "Các em thân mến, thầy mở lớp ôn thi học kỳ online."
   ],
   [
    {
     "t": "Học phí 500.000đ chuyển vào tài khoản PHAM VAN K",
     "n": true,
     "g": "Tên tài khoản không phải tên thầy, nhận tiền qua người lạ."
    },
    ". Lớp học qua phần mềm riêng."
   ],
   [
    {
     "t": "Thầy đổi Zalo nên các em kết bạn lại tài khoản này",
     "n": true,
     "g": "Lý do quen thuộc để dụ kết bạn với tài khoản giả."
    },
    ", ",
    {
     "t": "hạn chót đóng tiền là 9h tối nay",
     "n": true,
     "g": "Thúc ép thời gian."
    }
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu đáng ngờ.",
  "hoc": "Thầy cô \"đổi tài khoản\" kèm thu tiền vào tên người khác: hỏi trực tiếp ở lớp trước khi làm gì.",
  "nguon": "CA Bắc Ninh 04/2026 - giả mạo khóa học",
  "that": false
 },
 {
  "id": "p3-g12",
  "phong": "p3",
  "loai": "soi",
  "kenh": "sms",
  "tu": "0912 xxx xxx",
  "phu": "Số lạ",
  "tin": [
   [
    "Chao con, minh la ban cua bo con."
   ],
   [
    {
     "t": "Bo con vua bi xe tong, dang nam vien",
     "n": true,
     "g": "Tin dữ bất ngờ để gây hoảng loạn."
    },
    ". Bac dang o benh vien cung bo."
   ],
   [
    {
     "t": "Con chuyen ngay 15 trieu vao tai khoan bac de dong vien phi",
     "n": true,
     "g": "Đòi tiền gấp qua tài khoản cá nhân của người lạ."
    },
    " ",
    {
     "t": "dung bao me, me lo lai ngat",
     "n": true,
     "g": "Bắt giấu người thân để bạn không xác minh được."
    }
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu lừa đảo.",
  "hoc": "Tin dữ + đòi tiền + bắt giấu người thân: gọi ngay cho bố mẹ bằng số đã lưu.",
  "nguon": "Cảnh báo lừa đảo người thân gặp nạn",
  "that": false
 },
 {
  "id": "p3-g13",
  "phong": "p3",
  "loai": "soi",
  "kenh": "facebook",
  "tu": "Lan Anh (bạn cùng câu lạc bộ)",
  "phu": "Tin nhắn Messenger lúc 1 giờ sáng",
  "tin": [
   [
    "Ê bạn ơi, mình đang ở ngoài."
   ],
   [
    {
     "t": "Mình cần gấp 1 triệu, sáng mai trả liền",
     "n": true,
     "g": "Vay gấp qua tin nhắn, giờ khuya, không giải thích rõ."
    }
   ],
   [
    {
     "t": "Chuyển vào tài khoản của chị họ mình",
     "n": true,
     "g": "Tài khoản nhận tiền không phải của người nhắn."
    },
    ". Đang bận không nghe máy được, ",
    {
     "t": "đừng gọi nhé",
     "n": true,
     "g": "Chặn đường xác minh bằng cuộc gọi."
    }
   ],
   [
    "Thương bạn nhiều nha."
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu tài khoản bạn bè bị chiếm.",
  "hoc": "Bạn bè nhắn vay tiền gấp: gọi điện hoặc hỏi trực tiếp, không chuyển theo tin nhắn.",
  "nguon": "Cảnh báo chiếm tài khoản mạng xã hội",
  "that": false
 },
 {
  "id": "p3-g14",
  "phong": "p3",
  "loai": "soi",
  "kenh": "goi",
  "tu": "\"Viện kiểm sát nhân dân\"",
  "phu": "Cuộc gọi từ số lạ, giọng nghiêm",
  "tin": [
   [
    "\"Tôi là cán bộ Viện kiểm sát, đang làm việc với em.\""
   ],
   [
    {
     "t": "\"Tài khoản ngân hàng đứng tên em liên quan đến đường dây ma túy\"",
     "n": true,
     "g": "Gán tội nghiêm trọng để gây sợ hãi."
    }
   ],
   [
    {
     "t": "\"Em phải chuyển toàn bộ tiền tiết kiệm vào tài khoản tạm giữ của Viện\"",
     "n": true,
     "g": "Cơ quan tố tụng không yêu cầu chuyển tiền qua điện thoại."
    },
    ", ",
    {
     "t": "\"không được nói với ai, kể cả bố mẹ\"",
     "n": true,
     "g": "Bắt giữ bí mật với gia đình là dấu hiệu lừa đảo rõ nhất."
    }
   ],
   [
    "\"Em cứ bình tĩnh nghe tôi hướng dẫn.\""
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu lừa đảo.",
  "hoc": "Cơ quan tố tụng không làm việc qua điện thoại để yêu cầu chuyển tiền hay giữ bí mật với gia đình.",
  "nguon": "CA Bắc Ninh 04/2026 - giả danh viện kiểm sát",
  "that": false
 },
 {
  "id": "p3-g15",
  "phong": "p3",
  "loai": "soi",
  "kenh": "telegram",
  "tu": "\"Đội điều tra công nghệ cao\"",
  "phu": "Tài khoản ẩn danh, ảnh đại diện có quân hàm",
  "tin": [
   [
    "Em đang bị nghi liên quan một vụ lừa đảo trực tuyến."
   ],
   [
    {
     "t": "Em tải ứng dụng \"Hồ sơ điều tra\" theo link này để khai báo",
     "n": true,
     "g": "Ứng dụng lạ có thể chiếm quyền điện thoại, đọc tin nhắn, OTP."
    }
   ],
   [
    {
     "t": "Mở camera liên tục để cán bộ giám sát",
     "n": true,
     "g": "Đòi giám sát qua camera là cách kẻ gian cô lập, điều khiển nạn nhân."
    },
    ". ",
    {
     "t": "Ra khỏi nhà, đến nơi vắng người để làm việc",
     "n": true,
     "g": "Kịch bản bắt cóc online: tách nạn nhân khỏi người thân."
    }
   ],
   [
    "Hợp tác tốt sẽ được xem xét giảm nhẹ."
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu nguy hiểm.",
  "hoc": "Bị yêu cầu cài ứng dụng, bật camera, rời khỏi nhà: dừng ngay, báo bố mẹ, thầy cô, gọi 113 nếu bị đe dọa.",
  "nguon": "Cảnh báo bắt cóc online 10/2025",
  "that": false
 },
 {
  "id": "p3-g16",
  "phong": "p3",
  "loai": "soi",
  "kenh": "email",
  "tu": "Ban Chấp hành Đoàn Trường <doantruong.thpta2026@gmail.com>",
  "phu": "Tiêu đề: Hồ sơ xét Đoàn viên ưu tú",
  "tin": [
   [
    "Chúc mừng em được đề cử xét danh hiệu Đoàn viên ưu tú cấp tỉnh."
   ],
   [
    {
     "t": "Gửi từ gmail cá nhân, không phải địa chỉ của trường",
     "n": true,
     "g": "Đoàn trường dùng kênh chính thức và bí thư chi đoàn để thông báo."
    }
   ],
   [
    "Em điền hồ sơ tại: ",
    {
     "t": "doanvien-utu.online/hoso",
     "n": true,
     "g": "Tên miền lạ, không phải trang của trường hay Đoàn."
    },
    ", ",
    {
     "t": "kèm ảnh hai mặt căn cước và mật khẩu email",
     "n": true,
     "g": "Không hồ sơ nào cần mật khẩu; ảnh căn cước có thể bị dùng mạo danh."
    }
   ],
   [
    "Trân trọng, Ban Chấp hành."
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu đáng ngờ.",
  "hoc": "Danh hiệu, khen thưởng thật được thông báo qua kênh của trường, không xin mật khẩu hay ảnh căn cước qua thư.",
  "nguon": "Cảnh báo giả mạo tổ chức xin dữ liệu cá nhân",
  "that": false
 },
 {
  "id": "p3-g17",
  "phong": "p3",
  "loai": "soi",
  "kenh": "web",
  "tu": "video-call-gia-dinh.site",
  "phu": "Trang mở từ tin nhắn của \"anh họ\"",
  "tin": [
   [
    "Anh họ bạn gọi video 5 giây rồi gửi đường link này."
   ],
   [
    {
     "t": "\"Vào đây xem video anh vừa quay, đăng nhập Facebook để mở\"",
     "n": true,
     "g": "Trang lạ đòi đăng nhập mạng xã hội là bẫy lấy mật khẩu."
    }
   ],
   [
    {
     "t": "Hình trong cuộc gọi bị mờ, khẩu hình không khớp tiếng",
     "n": true,
     "g": "Dấu hiệu video ghép mặt (deepfake)."
    },
    ". Sau đó nhắn: ",
    {
     "t": "\"Anh cần mượn 3 triệu, chuyển nhanh giúp anh\"",
     "n": true,
     "g": "Mượn tiền gấp ngay sau cuộc gọi ngắn bất thường."
    }
   ],
   [
    "Ảnh đại diện vẫn là ảnh của anh họ."
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu lừa đảo.",
  "hoc": "Video vài giây, mờ, khẩu hình lệch không đủ để tin. Gọi lại số đã lưu để xác minh.",
  "nguon": "Cảnh báo lừa đảo video ghép mặt",
  "that": false
 },
 {
  "id": "p3-g18",
  "phong": "p3",
  "loai": "soi",
  "kenh": "app",
  "tu": "Ứng dụng kết bạn \"TeenChat\"",
  "phu": "Tin nhắn từ người lạ, quen được 1 tuần",
  "tin": [
   [
    "Mình thấy hợp với bạn ghê, ngày nào cũng muốn nói chuyện."
   ],
   [
    {
     "t": "Bạn đừng kể chuyện mình với bố mẹ nhé, họ không hiểu đâu",
     "n": true,
     "g": "Tách bạn khỏi gia đình là dấu hiệu thao túng."
    }
   ],
   [
    {
     "t": "Gửi mình một tấm ảnh riêng tư để làm kỷ niệm",
     "n": true,
     "g": "Người tốt không đòi ảnh riêng tư."
    },
    ". ",
    {
     "t": "Không gửi là không còn coi mình là bạn",
     "n": true,
     "g": "Gây áp lực cảm xúc để ép bạn làm theo."
    }
   ],
   [
    "Mình chỉ muốn tốt cho bạn thôi."
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu thao túng.",
  "hoc": "Người lạ đòi giữ bí mật với gia đình và đòi ảnh riêng tư: không gửi, chặn, giữ bằng chứng, kể với bố mẹ hoặc thầy cô.",
  "nguon": "Cảnh báo bắt cóc online 10/2025 - thao túng cảm xúc",
  "that": false
 },
 {
  "id": "p3-g19",
  "phong": "p3",
  "loai": "chon",
  "kenh": "zalo",
  "tu": "Cô Mai (cô giáo chủ nhiệm cũ)",
  "phu": "Tài khoản mới tạo, ảnh đại diện là ảnh cô",
  "tin": [
   "Em ơi cô đang ở viện, điện thoại cũ hỏng. Em mua giúp cô 3 thẻ cào 200 nghìn rồi gửi mã thẻ cho cô, mai cô trả em."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Mua thẻ gửi mã ngay vì thương cô.",
    "dung": false,
    "g": "Mã thẻ cào gửi đi là mất ngay, không lấy lại được. Đây là chiêu quen thuộc."
   },
   {
    "t": "Không gửi mã thẻ; liên hệ cô qua số cũ hoặc hỏi thầy cô ở trường.",
    "dung": true,
    "g": "Đúng. Tài khoản mới + đòi mã thẻ cào + gấp: xác minh qua kênh cũ."
   },
   {
    "t": "Hỏi trên tài khoản đó xem có đúng là cô không.",
    "dung": false,
    "g": "Kẻ gian sẽ khẳng định là đúng. Hỏi trên kênh đáng ngờ không có giá trị."
   }
  ],
  "hoc": "Người quen đổi tài khoản rồi đòi mã thẻ cào: luôn xác minh qua kênh cũ.",
  "nguon": "Cảnh báo giả mạo người quen mua thẻ cào",
  "that": false
 },
 {
  "id": "p3-g20",
  "phong": "p3",
  "loai": "chon",
  "kenh": "goi",
  "tu": "\"Bệnh viện tỉnh\"",
  "phu": "Số lạ gọi đến",
  "tin": [
   "\"Em gái em bị ngã ở trường, đang cấp cứu. Em chuyển ngay 5 triệu tạm ứng cho bác sĩ trực, số tài khoản tôi nhắn qua.\""
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Gọi ngay cho bố mẹ và trường của em gái bằng số đã lưu.",
    "dung": true,
    "g": "Đúng. Xác minh qua người thân và nhà trường. Bệnh viện không đòi chuyển tiền gấp vào tài khoản bác sĩ."
   },
   {
    "t": "Chuyển ngay vì sợ chậm trễ.",
    "dung": false,
    "g": "Đây là kịch bản đánh vào cảm xúc. Bệnh viện thu phí qua quầy hoặc tài khoản bệnh viện."
   },
   {
    "t": "Hỏi số tài khoản của bệnh viện rồi chuyển.",
    "dung": false,
    "g": "Vẫn đang làm theo kịch bản kẻ gian. Phải xác minh trước."
   }
  ],
  "hoc": "Tin cấp cứu kèm đòi tiền: dừng lại, gọi người thân bằng số đã lưu.",
  "nguon": "Cảnh báo lừa đảo người thân cấp cứu",
  "that": false
 },
 {
  "id": "p3-g21",
  "phong": "p3",
  "loai": "chon",
  "kenh": "facebook",
  "tu": "Hùng (anh họ)",
  "phu": "Tài khoản quen, nhắn lúc nửa đêm",
  "tin": [
   "Em ơi anh đang cần gấp, em cho anh mượn tài khoản ngân hàng nhận giúp tiền từ bạn anh, mai anh rút ra ngay."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Cho mượn vì là anh họ.",
    "dung": false,
    "g": "Tài khoản của bạn có thể bị dùng nhận tiền lừa đảo. Người đứng tên có thể bị xử lý."
   },
   {
    "t": "Gửi anh tên đăng nhập ngân hàng để anh tự làm.",
    "dung": false,
    "g": "Không bao giờ đưa thông tin đăng nhập ngân hàng cho người khác."
   },
   {
    "t": "Từ chối, gọi điện cho anh hoặc báo bố mẹ kiểm tra.",
    "dung": true,
    "g": "Đúng. Tài khoản quen có thể bị chiếm. Không cho mượn tài khoản ngân hàng."
   }
  ],
  "hoc": "Tài khoản ngân hàng của bạn không cho ai mượn, kể cả người quen.",
  "nguon": "CA Thanh Hóa 07/2026 - mượn tài khoản ngân hàng",
  "that": false
 },
 {
  "id": "p3-g22",
  "phong": "p3",
  "loai": "chon",
  "kenh": "sms",
  "tu": "\"Công an phường\"",
  "phu": "Tin nhắn từ số lạ",
  "tin": [
   "Mời em đến làm việc về vụ việc trên không gian mạng. Để được làm việc online, em bấm link cài ứng dụng Dịch vụ công: dvc-congan.app"
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Bấm link cài ứng dụng để làm việc online.",
    "dung": false,
    "g": "Ứng dụng từ link lạ có thể chiếm điện thoại. Giấy mời thật không yêu cầu cài ứng dụng qua link."
   },
   {
    "t": "Không bấm link, báo bố mẹ; nếu lo lắng, cùng bố mẹ đến trụ sở công an phường hỏi trực tiếp.",
    "dung": true,
    "g": "Đúng. Xác minh trực tiếp tại cơ quan, đi cùng người lớn."
   },
   {
    "t": "Trả lời tin nhắn kèm số căn cước để họ tra hồ sơ.",
    "dung": false,
    "g": "Gửi thông tin cá nhân cho số lạ là giúp kẻ gian mạo danh bạn."
   }
  ],
  "hoc": "Giấy mời làm việc thật không kèm link cài ứng dụng. Xác minh trực tiếp tại trụ sở.",
  "nguon": "CA Bắc Ninh 04/2026 - giả danh công an",
  "that": false
 },
 {
  "id": "p3-g23",
  "phong": "p3",
  "loai": "chon",
  "kenh": "goi",
  "tu": "\"Tòa án nhân dân\"",
  "phu": "Cuộc gọi tự động",
  "tin": [
   "\"Bạn có giấy triệu tập của tòa án. Bấm phím 1 để nghe chi tiết và gặp thư ký tòa.\""
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Bấm phím 1 để biết mình bị gì.",
    "dung": false,
    "g": "Bấm phím sẽ nối bạn tới kẻ gian, họ sẽ dọa và đòi thông tin, tiền."
   },
   {
    "t": "Gọi lại số đó để hỏi cho rõ.",
    "dung": false,
    "g": "Gọi lại vẫn là nói chuyện với kẻ gian."
   },
   {
    "t": "Cúp máy, kể với bố mẹ. Giấy triệu tập thật không gửi bằng cuộc gọi tự động.",
    "dung": true,
    "g": "Đúng. Không làm theo hướng dẫn của cuộc gọi lạ."
   }
  ],
  "hoc": "Cuộc gọi tự động báo \"giấy triệu tập\": cúp máy, kể với người lớn.",
  "nguon": "Cảnh báo giả danh cơ quan tố tụng",
  "that": false
 },
 {
  "id": "p3-g24",
  "phong": "p3",
  "loai": "chon",
  "kenh": "zalo",
  "tu": "\"Cán bộ điều tra\"",
  "phu": "Gọi video, mặc đồng phục, phông nền giống phòng làm việc",
  "tin": [
   "\"Em đang bị điều tra. Đi thuê một phòng khách sạn, tắt định vị, chặn số bố mẹ để không làm lộ hồ sơ mật.\""
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Làm theo vì họ mặc đồng phục.",
    "dung": false,
    "g": "Đồng phục, phông nền đều làm giả được. Đây là kịch bản bắt cóc online."
   },
   {
    "t": "Dừng cuộc gọi, liên lạc ngay với bố mẹ, thầy cô. Nếu bị đe dọa, gọi 113.",
    "dung": true,
    "g": "Đúng. Không bao giờ tự cô lập theo yêu cầu người lạ."
   },
   {
    "t": "Làm theo nhưng nhắn riêng cho bạn thân vị trí.",
    "dung": false,
    "g": "Vẫn đang tự cô lập. Phải dừng làm theo và báo người lớn."
   }
  ],
  "hoc": "Bị yêu cầu tắt định vị, chặn số gia đình, ở một mình: đó là bẫy, liên lạc người thân ngay.",
  "nguon": "Cảnh báo bắt cóc online 10/2025",
  "that": false
 },
 {
  "id": "p3-g25",
  "phong": "p3",
  "loai": "chon",
  "kenh": "telegram",
  "tu": "Người tự xưng \"cán bộ\"",
  "phu": "Tin nhắn sau cuộc gọi đe dọa",
  "tin": [
   "\"Em gọi cho bố mẹ, nói em đang bị tạm giữ và cần 50 triệu bảo lãnh. Không được nói là anh hướng dẫn.\""
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Gọi cho bố mẹ kể toàn bộ sự thật: có người lạ ép mình nói dối để lấy tiền.",
    "dung": true,
    "g": "Đúng. Nói thật với bố mẹ phá vỡ kịch bản. Bố mẹ sẽ báo công an."
   },
   {
    "t": "Gọi cho bố mẹ nói đúng như họ dặn.",
    "dung": false,
    "g": "Bạn đang bị dùng làm công cụ để lừa chính gia đình mình."
   },
   {
    "t": "Im lặng và chặn tài khoản rồi thôi.",
    "dung": false,
    "g": "Chặn là tốt nhưng cần kể với bố mẹ để được bảo vệ."
   }
  ],
  "hoc": "Không ai có quyền ép bạn nói dối gia đình. Kể thật với bố mẹ ngay.",
  "nguon": "Cảnh báo bắt cóc online 10/2025",
  "that": false
 },
 {
  "id": "p3-g26",
  "phong": "p3",
  "loai": "chon",
  "kenh": "facebook",
  "tu": "Trang \"Đoàn Thanh niên THPT A\"",
  "phu": "Trang mới tạo, đổi tên 2 lần",
  "tin": [
   "Em được chọn nhận học bổng 2 triệu của Đoàn trường. Nhắn lại ảnh hai mặt căn cước và số tài khoản ngân hàng để nhận tiền."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Gửi ngay để nhận học bổng.",
    "dung": false,
    "g": "Trang mới, đổi tên nhiều lần, xin ảnh căn cước: dấu hiệu trang giả mạo."
   },
   {
    "t": "Hỏi bí thư chi đoàn hoặc thầy cô phụ trách Đoàn ở trường.",
    "dung": true,
    "g": "Đúng. Xác minh qua người thật ở trường."
   },
   {
    "t": "Chỉ gửi số tài khoản, không gửi căn cước.",
    "dung": false,
    "g": "Vẫn đang làm theo kẻ gian; số tài khoản cũng có thể bị lợi dụng."
   }
  ],
  "hoc": "Trang lạ mang tên tổ chức quen: xác minh qua người thật ở trường.",
  "nguon": "Cảnh báo giả mạo trang tổ chức",
  "that": false
 },
 {
  "id": "p3-g27",
  "phong": "p3",
  "loai": "chon",
  "kenh": "app",
  "tu": "\"Tổng đài hỗ trợ ngân hàng\"",
  "phu": "Gọi qua ứng dụng nhắn tin, ảnh đại diện logo ngân hàng",
  "tin": [
   "\"Bố em vừa nhờ chúng tôi khóa thẻ của gia đình. Em đọc mã OTP vừa gửi về máy để hoàn tất giúp bố.\""
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Đọc mã vì là việc của bố.",
    "dung": false,
    "g": "Đọc OTP là giao quyền tài khoản cho kẻ gian."
   },
   {
    "t": "Không đọc mã, cúp máy, gọi cho bố bằng số đã lưu.",
    "dung": true,
    "g": "Đúng. Ngân hàng không xin OTP. Xác minh với bố trực tiếp."
   },
   {
    "t": "Đọc mã nhưng nhắn cho bố sau.",
    "dung": false,
    "g": "Muộn rồi: OTP đã giúp kẻ gian vào tài khoản."
   }
  ],
  "hoc": "Mượn danh người thân để xin OTP: không đọc, gọi cho người thân bằng số đã lưu.",
  "nguon": "Cảnh báo giả mạo nhân viên ngân hàng",
  "that": false
 },
 {
  "id": "p3-g28",
  "phong": "p3",
  "loai": "chon",
  "kenh": "email",
  "tu": "\"Hiệu trưởng\" <hieutruong.thpta@outlook.com>",
  "phu": "Thư gửi riêng cho bạn",
  "tin": [
   "Thầy cần em giúp một việc gấp và kín: mua 5 thẻ quà tặng điện tử, gửi mã cho thầy. Thầy sẽ hoàn tiền và có khen thưởng."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Làm ngay vì được thầy hiệu trưởng tin tưởng.",
    "dung": false,
    "g": "Thầy hiệu trưởng không nhờ học sinh mua thẻ qua thư riêng. Đây là giả mạo người có chức vụ."
   },
   {
    "t": "Hỏi lại giáo viên chủ nhiệm hoặc văn phòng trường trực tiếp.",
    "dung": true,
    "g": "Đúng. Việc \"gấp và kín\" từ người có chức vụ là dấu hiệu giả mạo."
   },
   {
    "t": "Trả lời thư xin thêm thông tin.",
    "dung": false,
    "g": "Trả lời giúp kẻ gian biết bạn đang quan tâm và tiếp tục dụ."
   }
  ],
  "hoc": "Người có chức vụ nhờ việc \"gấp và kín\" qua kênh lạ: xác minh trực tiếp.",
  "nguon": "Cảnh báo giả mạo lãnh đạo",
  "that": false
 },
 {
  "id": "p3-g29",
  "phong": "p3",
  "loai": "chon",
  "kenh": "zalo",
  "tu": "Tài khoản ẩn danh",
  "phu": "Tin nhắn đe dọa",
  "tin": [
   "\"Tao có ảnh riêng tư của mày. Chuyển 2 triệu tối nay, không thì tao gửi cho cả lớp.\""
  ],
  "hoi": "Bạn nhận được tin này. Bạn làm gì?",
  "chon": [
   {
    "t": "Không trả tiền, chụp lại tin nhắn làm bằng chứng, kể ngay với bố mẹ, thầy cô và báo công an.",
    "dung": true,
    "g": "Đúng. Đây là hành vi phạm tội. Bạn là nạn nhân, không phải lỗi của bạn. Người lớn và công an sẽ giúp."
   },
   {
    "t": "Chuyển tiền cho xong chuyện.",
    "dung": false,
    "g": "Trả tiền thường dẫn tới bị đòi thêm."
   },
   {
    "t": "Xóa tin nhắn và không nói với ai.",
    "dung": false,
    "g": "Mất bằng chứng và phải chịu đựng một mình. Hãy kể với người lớn tin cậy."
   }
  ],
  "hoc": "Bị đe dọa: không trả tiền, giữ bằng chứng, kể với người lớn. Không phải lỗi của bạn.",
  "nguon": "Cảnh báo bắt cóc online 10/2025 - tống tiền",
  "that": false
 },
 {
  "id": "p3-g30",
  "phong": "p3",
  "loai": "chon",
  "kenh": "sms",
  "tu": "Chị Hà (chị gái)",
  "phu": "Số lạ, xưng là chị gái",
  "tin": [
   "Chị mất điện thoại, đang dùng máy bạn. Em chuyển chị 2 triệu đóng học phí, hạn hôm nay, đừng gọi số cũ vì mất rồi."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Chuyển vì chị đang gấp.",
    "dung": false,
    "g": "Số lạ, đòi tiền, cấm gọi số cũ: đủ dấu hiệu mạo danh."
   },
   {
    "t": "Hỏi một chuyện chỉ hai chị em biết, đồng thời gọi bố mẹ hoặc bạn của chị để xác minh.",
    "dung": true,
    "g": "Đúng. Câu hỏi riêng và xác minh qua người thứ ba giúp lộ kẻ giả mạo."
   },
   {
    "t": "Nhắn lại số tài khoản của mình để chị chuyển trả sau.",
    "dung": false,
    "g": "Không giải quyết vấn đề và để lộ thêm thông tin."
   }
  ],
  "hoc": "Người thân \"mất máy\" nhắn từ số lạ đòi tiền: xác minh qua người thứ ba.",
  "nguon": "Cảnh báo lừa đảo người thân",
  "that": false
 },
 {
  "id": "p3-g31",
  "phong": "p3",
  "loai": "chon",
  "kenh": "web",
  "tu": "Trang \"Tra cứu lệnh truy nã\"",
  "phu": "Trang mở từ tin nhắn của \"công an\"",
  "tin": [
   "Trang hiện ảnh của bạn và dòng chữ \"Đối tượng đang bị điều tra\". Để làm rõ, nhập số căn cước, ngày sinh, số tài khoản ngân hàng."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Nhập đủ thông tin để chứng minh mình vô tội.",
    "dung": false,
    "g": "Trang giả dựng lên để dọa và lấy thông tin. Ảnh của bạn có thể lấy từ mạng xã hội."
   },
   {
    "t": "Đóng trang, không nhập gì, kể với bố mẹ hoặc thầy cô.",
    "dung": true,
    "g": "Đúng. Cơ quan chức năng không làm việc qua trang tra cứu gửi qua tin nhắn."
   },
   {
    "t": "Nhập thông tin giả để thử trang.",
    "dung": false,
    "g": "Vẫn đang tương tác với kẻ gian; tốt nhất là rời trang và báo người lớn."
   }
  ],
  "hoc": "Ảnh của bạn trên trang lạ không chứng minh gì. Đóng trang, kể với người lớn.",
  "nguon": "CA Bắc Ninh 04/2026 - giả danh công an",
  "that": false
 },
 {
  "id": "p3-g32",
  "phong": "p3",
  "loai": "chon",
  "kenh": "facebook",
  "tu": "Người lạ tự xưng \"quản lý người mẫu nhí\"",
  "phu": "Nhắn tin sau khi xem ảnh bạn đăng",
  "tin": [
   "Em có tố chất làm người mẫu. Anh nhận em vào công ty, nhưng phải giữ bí mật với gia đình đến khi ký hợp đồng, gửi anh thêm vài ảnh để duyệt hồ sơ."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Gửi ảnh để không lỡ cơ hội.",
    "dung": false,
    "g": "Đòi giữ bí mật với gia đình và xin ảnh là dấu hiệu dụ dỗ."
   },
   {
    "t": "Không gửi, không giữ bí mật, kể với bố mẹ để cùng kiểm tra.",
    "dung": true,
    "g": "Đúng. Cơ hội thật làm việc công khai với gia đình."
   },
   {
    "t": "Hỏi anh ấy thêm về công ty rồi tính.",
    "dung": false,
    "g": "Kéo dài trò chuyện tạo cơ hội cho kẻ gian thao túng."
   }
  ],
  "hoc": "Cơ hội thật không bắt giấu gia đình. Mời gọi kèm bí mật: dừng và kể với bố mẹ.",
  "nguon": "Cảnh báo bắt cóc online 10/2025 - dụ dỗ",
  "that": false
 },
 {
  "id": "p4-g01",
  "phong": "p4",
  "loai": "chon",
  "kenh": "zalo",
  "that": true,
  "nguon": "Tình huống thường ngày (thật)",
  "tu": "Cô Lan (chủ tiệm sách Hoa Mai)",
  "phu": "Tiệm sách ở số 15 phố Chợ, gần trường",
  "tin": [
   "Chào cháu, hè này tiệm cô cần bạn trông quầy buổi chiều, 25.000đ một giờ.",
   "Cháu đến tiệm thứ Bảy này gặp cô trao đổi, mang theo bố hoặc mẹ nhé. Không mất phí gì cả."
  ],
  "hoi": "Bạn muốn đi làm thêm hè. Bạn làm gì?",
  "chon": [
   {
    "t": "Chặn số cô ngay vì việc làm qua Zalo đều là lừa đảo.",
    "dung": false,
    "g": "Phản ứng thái quá. Tiệm có địa chỉ thật, hẹn gặp trực tiếp, không thu phí."
   },
   {
    "t": "Bàn với bố mẹ, cùng đến tiệm gặp cô trao đổi rõ giờ làm và tiền công.",
    "dung": true,
    "g": "Đúng. Việc làm thật có địa chỉ, gặp trực tiếp, không bắt nộp tiền."
   },
   {
    "t": "Chuyển trước 200.000đ tiền cọc cho cô yên tâm.",
    "dung": false,
    "g": "Cô không yêu cầu, và việc làm thật không bao giờ cần người làm đặt cọc."
   }
  ],
  "hoc": "Việc làm thật: có địa chỉ, gặp trực tiếp, không thu phí, có người lớn đi cùng."
 },
 {
  "id": "p4-g02",
  "phong": "p4",
  "loai": "chon",
  "kenh": "web",
  "that": true,
  "nguon": "Tình huống thường ngày (thật)",
  "tu": "Cổng nạp chính thức của game Rồng Mây",
  "phu": "Mở từ nút Nạp trong game",
  "tin": [
   "Gói 100 kim cương: 20.000đ. Thanh toán bằng thẻ hoặc ví điện tử của phụ huynh. Có hóa đơn gửi qua email."
  ],
  "hoi": "Bạn muốn nạp game. Bạn làm gì?",
  "chon": [
   {
    "t": "Bỏ qua cổng này, tìm shop trên mạng bán rẻ hơn.",
    "dung": false,
    "g": "Shop giá rẻ ngoài hệ thống là nơi hay xảy ra lừa đảo, khóa tài khoản."
   },
   {
    "t": "Không bao giờ nạp tiền vì cổng nào cũng là lừa.",
    "dung": false,
    "g": "Cổng nạp mở từ trong game là kênh chính thức. Cảnh giác không có nghĩa là sợ mọi thứ."
   },
   {
    "t": "Xin phép bố mẹ, nạp đúng số tiền đã thỏa thuận qua cổng chính thức mở từ trong game.",
    "dung": true,
    "g": "Đúng. Kênh chính thức có hóa đơn và hỗ trợ khi lỗi."
   }
  ],
  "hoc": "Nạp game qua cổng mở từ chính trò chơi và có sự đồng ý của bố mẹ."
 },
 {
  "id": "p4-g03",
  "phong": "p4",
  "loai": "chon",
  "kenh": "facebook",
  "that": true,
  "nguon": "Tình huống thường ngày (thật)",
  "tu": "Đoàn Trường THPT A",
  "phu": "Trang Đoàn trường bạn theo dõi từ năm lớp 10",
  "tin": [
   "Đoàn trường tuyển 30 tình nguyện viên hỗ trợ Hội chợ Xuân. Đăng ký tại phòng Đoàn hoặc qua bí thư chi đoàn trước thứ Sáu.",
   "Không thu phí, được cộng điểm rèn luyện."
  ],
  "hoi": "Bạn muốn tham gia. Bạn làm gì?",
  "chon": [
   {
    "t": "Đăng ký qua bí thư chi đoàn hoặc phòng Đoàn như thông báo.",
    "dung": true,
    "g": "Đúng. Trang quen thuộc, đăng ký trực tiếp, không thu phí."
   },
   {
    "t": "Báo cáo trang là lừa đảo vì có chữ \"tuyển\".",
    "dung": false,
    "g": "Phản ứng thái quá. Không có dấu hiệu bất thường nào."
   },
   {
    "t": "Nhắn tin cho người lạ bình luận bên dưới để đăng ký hộ.",
    "dung": false,
    "g": "Không cần qua người lạ. Đăng ký đúng kênh của Đoàn trường."
   }
  ],
  "hoc": "Thông báo từ kênh quen thuộc, đăng ký trực tiếp, không thu phí: có thể tham gia."
 },
 {
  "id": "p4-g04",
  "phong": "p4",
  "loai": "chon",
  "kenh": "email",
  "that": true,
  "nguon": "Tình huống thường ngày (thật)",
  "tu": "Thư viện trường THPT A",
  "phu": "Địa chỉ email của trường",
  "tin": [
   "Thư viện cần 2 học sinh hỗ trợ sắp xếp sách vào chiều thứ Tư hằng tuần.",
   "Em nào quan tâm đến gặp cô thủ thư tại thư viện để đăng ký."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Trả lời thư, gửi kèm ảnh căn cước để đăng ký nhanh.",
    "dung": false,
    "g": "Thư không yêu cầu, và đăng ký trực tiếp thì không cần gửi giấy tờ qua mạng."
   },
   {
    "t": "Xóa thư vì sợ bị lừa.",
    "dung": false,
    "g": "Thư từ địa chỉ của trường, mời gặp trực tiếp tại thư viện: không có dấu hiệu lừa."
   },
   {
    "t": "Đến thư viện gặp cô thủ thư để đăng ký như thư hướng dẫn.",
    "dung": true,
    "g": "Đúng. Gặp trực tiếp tại trường là cách xác minh tốt nhất."
   }
  ],
  "hoc": "Khi được mời gặp trực tiếp ở nơi quen thuộc, đó là kênh an toàn."
 },
 {
  "id": "p4-g05",
  "phong": "p4",
  "loai": "chon",
  "kenh": "app",
  "that": true,
  "nguon": "Tình huống thường ngày (thật)",
  "tu": "Kho ứng dụng trên điện thoại",
  "phu": "Mua vật phẩm trong game Phi Thuyền Nhí",
  "tin": [
   "Gói trang phục 15.000đ. Cần mật khẩu tài khoản kho ứng dụng của phụ huynh để xác nhận thanh toán."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Đưa máy cho bố mẹ xem, để bố mẹ quyết định và tự nhập mật khẩu.",
    "dung": true,
    "g": "Đúng. Mua qua kho ứng dụng chính thức, bố mẹ xác nhận là cách an toàn."
   },
   {
    "t": "Lén thử đoán mật khẩu của bố mẹ.",
    "dung": false,
    "g": "Không trung thực và có thể khóa tài khoản của bố mẹ."
   },
   {
    "t": "Gỡ game vì nghĩ kho ứng dụng lừa đảo.",
    "dung": false,
    "g": "Phản ứng thái quá. Đây là quy trình thanh toán bình thường."
   }
  ],
  "hoc": "Mua trong ứng dụng: qua kho chính thức, bố mẹ xác nhận."
 },
 {
  "id": "p4-g06",
  "phong": "p4",
  "loai": "chon",
  "kenh": "goi",
  "that": true,
  "nguon": "Tình huống thường ngày (thật)",
  "tu": "Quán trà Bên Hồ",
  "phu": "Số in trên tờ thông báo tuyển dụng dán ở cửa quán",
  "tin": [
   "\"Chào em, quán đã nhận đơn của em. Em đến quán chiều thứ Bảy phỏng vấn nhé, nhớ đi cùng phụ huynh để quán trao đổi giờ làm.\""
  ],
  "hoi": "Bạn đã nộp đơn trực tiếp ở quán tuần trước. Bạn làm gì?",
  "chon": [
   {
    "t": "Đồng ý hẹn, báo bố mẹ cùng đi phỏng vấn tại quán.",
    "dung": true,
    "g": "Đúng. Bạn đã nộp đơn thật, số gọi khớp với số dán ở quán, hẹn gặp trực tiếp."
   },
   {
    "t": "Cúp máy và chặn số vì sợ lừa.",
    "dung": false,
    "g": "Phản ứng thái quá. Mọi chi tiết đều khớp với việc bạn đã làm."
   },
   {
    "t": "Hẹn gặp một mình ở chỗ khác do người gọi chọn.",
    "dung": false,
    "g": "Không nên đổi địa điểm lạ. Gặp tại quán, có người lớn đi cùng."
   }
  ],
  "hoc": "Cuộc gọi khớp với việc bạn đã làm, hẹn tại nơi công khai: có thể tin, vẫn đi cùng người lớn."
 },
 {
  "id": "p4-g07",
  "phong": "p4",
  "loai": "chon",
  "kenh": "zalo",
  "that": true,
  "nguon": "Tình huống thường ngày (thật)",
  "tu": "Cô Hà (giáo viên Toán của bạn)",
  "phu": "Số cô đã dùng trong nhóm lớp từ đầu năm",
  "tin": [
   "Hàng xóm nhà cô cần gia sư kèm Toán cho bé lớp 6, 2 buổi một tuần. Em học tốt Toán, có muốn nhận không? Cô gửi số phụ huynh bé để em và bố mẹ gọi trao đổi."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Từ chối vì mọi lời mời việc làm đều là bẫy.",
    "dung": false,
    "g": "Phản ứng thái quá. Lời mời đến từ cô giáo quen qua số đã biết."
   },
   {
    "t": "Cảm ơn cô, nói với bố mẹ rồi cùng gọi cho phụ huynh bé để hẹn gặp.",
    "dung": true,
    "g": "Đúng. Người giới thiệu quen biết, không thu phí, có bố mẹ tham gia."
   },
   {
    "t": "Nhận lời và chuyển cho phụ huynh bé 300.000đ phí giới thiệu.",
    "dung": false,
    "g": "Không ai yêu cầu phí. Thấy bị đòi phí là phải dừng lại."
   }
  ],
  "hoc": "Việc làm qua người quen đáng tin, không thu phí, có bố mẹ cùng trao đổi."
 },
 {
  "id": "p4-g08",
  "phong": "p4",
  "loai": "chon",
  "kenh": "facebook",
  "that": true,
  "nguon": "Tình huống thường ngày (thật)",
  "tu": "Nhóm lớp 11A2 (nhóm kín của lớp)",
  "phu": "Lớp trưởng đăng",
  "tin": [
   "Lớp mình nhận một gian hàng ở hội chợ trường để gây quỹ từ thiện. Bạn nào muốn đứng bán thì ghi tên vào bảng ở lớp, sáng mai cô chủ nhiệm phân ca."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Rời nhóm lớp vì thấy nói chuyện tiền bạc.",
    "dung": false,
    "g": "Phản ứng thái quá. Đây là hoạt động của lớp, có cô chủ nhiệm phụ trách."
   },
   {
    "t": "Nhắn riêng lớp trưởng xin số tài khoản để góp trước tiền hàng.",
    "dung": false,
    "g": "Thông báo không yêu cầu góp tiền. Mọi khoản tiền lớp nên qua cô chủ nhiệm, công khai."
   },
   {
    "t": "Ghi tên vào bảng ở lớp nếu muốn tham gia.",
    "dung": true,
    "g": "Đúng. Đăng ký trực tiếp, có giáo viên quản lý."
   }
  ],
  "hoc": "Hoạt động có giáo viên quản lý, đăng ký trực tiếp: tham gia bình thường."
 },
 {
  "id": "p4-g09",
  "phong": "p4",
  "loai": "chon",
  "kenh": "web",
  "that": true,
  "nguon": "Tình huống thường ngày (thật)",
  "tu": "Trang web của trường THPT A",
  "phu": "Mục Thông báo, mở từ đường link nhà trường gửi qua sổ liên lạc",
  "tin": [
   "Cuộc thi Lập trình trẻ cấp trường: học sinh đăng ký theo mẫu, nộp cho giáo viên Tin học trước ngày 15. Không thu lệ phí."
  ],
  "hoi": "Bạn muốn dự thi. Bạn làm gì?",
  "chon": [
   {
    "t": "Tải mẫu, điền và nộp cho giáo viên Tin học đúng hạn.",
    "dung": true,
    "g": "Đúng. Thông báo trên kênh chính thức của trường, nộp trực tiếp, không phí."
   },
   {
    "t": "Tìm một trang khác nhận đăng ký hộ có thu phí cho nhanh.",
    "dung": false,
    "g": "Không cần qua trung gian. Trang thu phí đăng ký hộ dễ là lừa đảo."
   },
   {
    "t": "Không đăng ký vì sợ trang web bị giả mạo.",
    "dung": false,
    "g": "Bạn mở từ link nhà trường gửi: đây là kênh đã biết, có thể tin."
   }
  ],
  "hoc": "Thông báo trên kênh chính thức, nộp trực tiếp, không phí: an toàn."
 },
 {
  "id": "p4-g10",
  "phong": "p4",
  "loai": "chon",
  "kenh": "app",
  "that": true,
  "nguon": "Tình huống thường ngày (thật)",
  "tu": "Game Rồng Mây",
  "phu": "Hộp thư sự kiện bên trong game",
  "tin": [
   "Chúc mừng bạn hoàn thành sự kiện đăng nhập 7 ngày! Bấm Nhận để lấy 50 kim cương vào túi đồ."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Bỏ qua vì quà nào cũng là bẫy.",
    "dung": false,
    "g": "Quà sự kiện nhận ngay trong game, không đòi thông tin hay tiền: không có dấu hiệu lừa."
   },
   {
    "t": "Bấm Nhận ngay trong game.",
    "dung": true,
    "g": "Đúng. Quà nhận trực tiếp trong hệ thống game, không cần đăng nhập ở trang khác."
   },
   {
    "t": "Tìm trang web bên ngoài để nhận quà gấp đôi.",
    "dung": false,
    "g": "Trang bên ngoài hứa quà gấp đôi thường là trang lấy cắp tài khoản."
   }
  ],
  "hoc": "Quà trong game nhận trong game. Quà bắt ra trang ngoài mới đáng ngờ."
 },
 {
  "id": "p4-g11",
  "phong": "p4",
  "loai": "chon",
  "kenh": "telegram",
  "that": false,
  "nguon": "Cảnh báo của Công an - đầu tư siêu lợi nhuận",
  "tu": "Nhóm \"Tài Chính Thông Minh\"",
  "phu": "Hơn 2.000 thành viên",
  "tin": [
   "Góp từ 1.000.000đ, nhận lãi 10% mỗi ngày. Admin cam kết không lỗ.",
   "Bạn A vừa rút 5 triệu sau 1 tuần (kèm ảnh chụp màn hình)."
  ],
  "hoi": "Bạn có tiền lì xì. Bạn làm gì?",
  "chon": [
   {
    "t": "Góp thử 1 triệu vì có người đã rút được tiền.",
    "dung": false,
    "g": "Ảnh rút tiền dễ làm giả. Lãi 10% mỗi ngày, cam kết không lỗ là dấu hiệu lừa đảo đầu tư."
   },
   {
    "t": "Rời nhóm, không góp tiền, kể với bố mẹ.",
    "dung": true,
    "g": "Đúng. Không có khoản đầu tư hợp pháp nào hứa lãi cao như vậy mà không rủi ro."
   },
   {
    "t": "Rủ thêm bạn bè góp chung cho được nhiều lãi.",
    "dung": false,
    "g": "Bạn vô tình kéo thêm người vào bẫy."
   }
  ],
  "hoc": "Lãi rất cao, cam kết không lỗ: dấu hiệu lừa đảo đầu tư."
 },
 {
  "id": "p4-g12",
  "phong": "p4",
  "loai": "chon",
  "kenh": "facebook",
  "that": false,
  "nguon": "Cảnh báo của Công an - cá cược trá hình",
  "tu": "Trang \"Dự Đoán Bóng Đá Nhận Quà\"",
  "phu": "Quảng cáo",
  "tin": [
   "Đoán đúng tỷ số trận tối nay, nhận gấp 5 số điểm đã nạp! Nạp tối thiểu 50.000đ."
  ],
  "hoi": "Bạn thấy trò này vui. Bạn làm gì?",
  "chon": [
   {
    "t": "Nạp 50 nghìn chơi thử một trận.",
    "dung": false,
    "g": "Nạp tiền để đoán kết quả lấy thưởng là cá cược trá hình, dễ mất tiền và vi phạm pháp luật."
   },
   {
    "t": "Nạp bằng tài khoản ngân hàng của bạn thân cho an toàn.",
    "dung": false,
    "g": "Vẫn là cá cược, còn kéo thêm bạn vào rủi ro."
   },
   {
    "t": "Không tham gia. Đây là cá cược trá hình.",
    "dung": true,
    "g": "Đúng. Nạp tiền rồi đoán kết quả để nhận thưởng là đánh bạc."
   }
  ],
  "hoc": "Nạp tiền để đoán kết quả lấy thưởng là cá cược, tránh xa."
 },
 {
  "id": "p4-g13",
  "phong": "p4",
  "loai": "chon",
  "kenh": "zalo",
  "that": false,
  "nguon": "CA Thanh Hóa 07/2026 - mua bán thông tin cá nhân",
  "tu": "Chị Mai (quen qua nhóm làm thêm)",
  "phu": "Kết bạn 3 ngày",
  "tin": [
   "Em cho chị mượn ảnh căn cước 2 mặt để chị đăng ký sim cho cửa hàng nhé. Chị gửi em 200.000đ tiền cảm ơn."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Đồng ý, chỉ là ảnh thôi mà.",
    "dung": false,
    "g": "Ảnh căn cước có thể bị dùng đăng ký sim, mở tài khoản, vay tiền đứng tên bạn."
   },
   {
    "t": "Từ chối. Không cho mượn, bán hay gửi ảnh căn cước cho người khác.",
    "dung": true,
    "g": "Đúng. Giấy tờ tùy thân chỉ dùng cho việc của chính bạn."
   },
   {
    "t": "Gửi ảnh đã che số căn cước.",
    "dung": false,
    "g": "Đã nhận tiền để cho mượn giấy tờ là sai, và che một phần vẫn có thể bị khai thác."
   }
  ],
  "hoc": "Căn cước của bạn: không cho mượn, không bán, không gửi người lạ."
 },
 {
  "id": "p4-g14",
  "phong": "p4",
  "loai": "chon",
  "kenh": "sms",
  "that": false,
  "nguon": "CA Bắc Ninh 04/2026 - việc nhẹ lương cao",
  "tu": "0912 xxx xxx",
  "phu": "Tin nhắn SMS",
  "tin": [
   "Ban da hoan thanh 10 nhiem vu CTV. Luong 1.200.000d dang cho rut. Nop 150.000d phi xac thuc tai khoan de nhan luong."
  ],
  "hoi": "Bạn có làm vài nhiệm vụ bấm thích video. Bạn làm gì?",
  "chon": [
   {
    "t": "Nộp 150 nghìn để nhận 1,2 triệu.",
    "dung": false,
    "g": "Sau phí xác thực sẽ là phí thuế, phí mở khóa. Lương không bao giờ đến."
   },
   {
    "t": "Không nộp. Việc làm thật không bắt người làm trả phí để nhận lương.",
    "dung": true,
    "g": "Đúng. Có phí để rút lương là dấu hiệu lừa đảo."
   },
   {
    "t": "Nhắn lại xin giảm phí.",
    "dung": false,
    "g": "Trả lời là tạo cơ hội để kẻ gian tiếp tục thuyết phục."
   }
  ],
  "hoc": "Phải nộp tiền mới nhận được lương thì đó là lừa đảo."
 },
 {
  "id": "p4-g15",
  "phong": "p4",
  "loai": "chon",
  "kenh": "goi",
  "that": false,
  "nguon": "CA Bắc Ninh 04/2026 - việc nhẹ lương cao",
  "tu": "\"Phòng nhân sự Siêu thị Bông Lúa\"",
  "phu": "Số lạ",
  "tin": [
   "\"Em đã trúng tuyển nhân viên bán hàng thời vụ. Em chuyển 300.000đ tiền đồng phục và thẻ nhân viên trước hôm nay, mai đi làm luôn, không cần phỏng vấn.\""
  ],
  "hoi": "Bạn có nộp hồ sơ online ở một trang tuyển dụng. Bạn làm gì?",
  "chon": [
   {
    "t": "Chuyển tiền để giữ chỗ làm.",
    "dung": false,
    "g": "Không phỏng vấn mà vẫn trúng tuyển, đòi tiền trước: kịch bản tuyển dụng giả."
   },
   {
    "t": "Hỏi số tài khoản công ty rồi mới chuyển.",
    "dung": false,
    "g": "Tài khoản mang tên công ty vẫn có thể là giả. Vấn đề là việc thu tiền trước."
   },
   {
    "t": "Không chuyển tiền. Tự tìm số điện thoại chính thức của siêu thị để hỏi, kể với bố mẹ.",
    "dung": true,
    "g": "Đúng. Nơi tuyển dụng thật không thu tiền đồng phục trước khi người làm nhận việc."
   }
  ],
  "hoc": "Trúng tuyển không cần phỏng vấn, đòi tiền trước: dừng lại."
 },
 {
  "id": "p4-g16",
  "phong": "p4",
  "loai": "chon",
  "kenh": "app",
  "that": false,
  "nguon": "Cảnh báo của Công an - cá cược trá hình",
  "tu": "Ứng dụng \"Vòng Quay Vàng\"",
  "phu": "Cài từ đường link trên mạng xã hội",
  "tin": [
   "Nạp thẻ điện thoại 100.000đ, quay 5 lượt, cơ hội trúng điện thoại và kim cương game gấp 5 lần!"
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Gỡ ứng dụng, không nạp thẻ. Ứng dụng cài từ link lạ, nạp tiền để quay thưởng là cờ bạc trá hình.",
    "dung": true,
    "g": "Đúng. Ứng dụng ngoài kho chính thức còn có thể chứa mã độc."
   },
   {
    "t": "Nạp thẻ 10 nghìn thử vận may.",
    "dung": false,
    "g": "Ít hay nhiều thì vẫn là nạp tiền vào trò quay thưởng không minh bạch."
   },
   {
    "t": "Nạp thẻ của bố mẹ vì bố mẹ không để ý.",
    "dung": false,
    "g": "Vừa mất tiền vừa không trung thực với bố mẹ."
   }
  ],
  "hoc": "Nạp tiền để quay thưởng: cờ bạc trá hình, tránh xa."
 },
 {
  "id": "p4-g17",
  "phong": "p4",
  "loai": "chon",
  "kenh": "web",
  "that": false,
  "nguon": "Cảnh báo của Công an - mua bán tài khoản game",
  "tu": "shop-acc-giare.store",
  "phu": "Trang bán tài khoản game",
  "tin": [
   "Tài khoản game Rồng Mây cấp cao, giá chỉ 150.000đ (giá thị trường 1 triệu). Chuyển khoản trước, shop gửi tài khoản sau 10 phút. Không qua trung gian."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Chuyển tiền vì rẻ quá.",
    "dung": false,
    "g": "Giá rẻ bất thường, bắt chuyển trước, từ chối trung gian: dấu hiệu lừa."
   },
   {
    "t": "Không mua. Mua bán tài khoản game ngoài hệ thống dễ mất tiền, dễ bị lấy lại tài khoản.",
    "dung": true,
    "g": "Đúng. Nhiều trò chơi cũng cấm mua bán tài khoản."
   },
   {
    "t": "Chuyển một nửa, nhận tài khoản rồi chuyển nốt.",
    "dung": false,
    "g": "Vẫn mất tiền nếu shop là giả."
   }
  ],
  "hoc": "Giá rẻ bất thường, chuyển trước, không trung gian: không mua."
 },
 {
  "id": "p4-g18",
  "phong": "p4",
  "loai": "chon",
  "kenh": "telegram",
  "that": false,
  "nguon": "CA Thanh Hóa 07/2026 - tiếp tay chuyển tiền phạm pháp",
  "tu": "\"Anh Tuấn - việc làm tại nhà\"",
  "phu": "Tin nhắn riêng",
  "tin": [
   "Việc đơn giản: tài khoản em sẽ nhận tiền từ khách, em chuyển tiếp sang số anh gửi, giữ lại 5% công. Mỗi ngày kiếm vài trăm nghìn."
  ],
  "hoi": "Bạn nghĩ sao?",
  "chon": [
   {
    "t": "Nhận làm vì chỉ là chuyển tiền giúp.",
    "dung": false,
    "g": "Tiền nhận vào có thể là tiền lừa đảo. Bạn trở thành người tiếp tay chuyển tiền phạm pháp."
   },
   {
    "t": "Làm vài ngày rồi nghỉ.",
    "dung": false,
    "g": "Chỉ một giao dịch cũng đủ để tài khoản của bạn bị phong tỏa, bị điều tra."
   },
   {
    "t": "Từ chối, chặn, kể với bố mẹ. Đây là cách kẻ gian dùng tài khoản người khác để chuyển tiền phạm pháp.",
    "dung": true,
    "g": "Đúng. Không dùng tài khoản của mình để nhận, chuyển tiền hộ người lạ."
   }
  ],
  "hoc": "Nhận tiền rồi chuyển tiếp hộ người lạ là tiếp tay cho tội phạm."
 },
 {
  "id": "p4-g19",
  "phong": "p4",
  "loai": "chon",
  "kenh": "email",
  "that": false,
  "nguon": "CA Bắc Ninh 04/2026 - việc nhẹ lương cao",
  "tu": "tuyendung.nhaplieu24h@gmail.com",
  "phu": "Tiêu đề: CHÚC MỪNG BẠN TRÚNG TUYỂN CTV NHẬP LIỆU",
  "tin": [
   "Bạn được nhận làm cộng tác viên nhập liệu tại nhà, thu nhập 6 triệu/tháng.",
   "Để bắt đầu, bạn mua bộ tài liệu hướng dẫn giá 300.000đ."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Mua tài liệu để bắt đầu kiếm tiền.",
    "dung": false,
    "g": "Bắt người làm mua tài liệu, đóng phí đào tạo là cách thu tiền phổ biến của việc làm giả."
   },
   {
    "t": "Không trả lời, không mua. Việc làm thật không bán tài liệu cho người làm.",
    "dung": true,
    "g": "Đúng. Thư từ gmail cá nhân, lương cao, đòi tiền trước: nhiều dấu hiệu lừa."
   },
   {
    "t": "Trả lời hỏi xem có được giảm giá tài liệu không.",
    "dung": false,
    "g": "Trả lời là cho kẻ gian biết bạn quan tâm."
   }
  ],
  "hoc": "Phải mua tài liệu, đóng phí mới được làm: đó là bẫy."
 },
 {
  "id": "p4-g20",
  "phong": "p4",
  "loai": "chon",
  "kenh": "facebook",
  "that": false,
  "nguon": "Cảnh báo của Công an - cá cược trá hình",
  "tu": "Livestream \"Mở Hộp Bí Ẩn\"",
  "phu": "Đang phát trực tiếp",
  "tin": [
   "Mua 1 hộp bí ẩn 99.000đ, có thể trúng điện thoại! Ai mua 5 hộp tặng thêm 1. Chuyển khoản vào số tài khoản cá nhân trên màn hình."
  ],
  "hoi": "Bạn bè trong lớp đang rủ mua chung. Bạn làm gì?",
  "chon": [
   {
    "t": "Góp tiền mua chung 5 hộp cho được tặng thêm.",
    "dung": false,
    "g": "Mua nhiều càng mất nhiều. Không biết trong hộp thực sự có gì."
   },
   {
    "t": "Không mua, giải thích cho bạn bè đây là trò may rủi không minh bạch.",
    "dung": true,
    "g": "Đúng. Trả tiền để đổi lấy may rủi, chuyển vào tài khoản cá nhân: rủi ro mất tiền cao."
   },
   {
    "t": "Mua 1 hộp cho biết.",
    "dung": false,
    "g": "Một hộp vẫn là đánh cược tiền vào thứ không kiểm chứng được."
   }
  ],
  "hoc": "Trả tiền lấy may rủi qua livestream: dễ mất tiền, khó đòi lại."
 },
 {
  "id": "p4-g21",
  "phong": "p4",
  "loai": "chon",
  "kenh": "zalo",
  "that": false,
  "nguon": "Cảnh báo của Công an - đầu tư siêu lợi nhuận",
  "tu": "Hùng (bạn học thêm)",
  "phu": "Bạn bè",
  "tin": [
   "Tao đang chơi app đầu tư tiền ảo, có \"thầy\" dẫn dắt, tuần rồi lãi 2 triệu. Mày cài app Sao Bay qua link này, nạp tối thiểu 500k, tao giới thiệu thầy cho."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Cài app qua link rồi nạp ít tiền thử.",
    "dung": false,
    "g": "Ứng dụng ngoài kho chính thức, \"thầy\" dẫn dắt, lãi nhanh: kịch bản lừa đầu tư quen thuộc."
   },
   {
    "t": "Nạp tiền bằng tài khoản của Hùng cho chắc.",
    "dung": false,
    "g": "Vẫn mất tiền, và kéo cả bạn vào thiệt hại."
   },
   {
    "t": "Không cài, không nạp. Nhắc Hùng dừng lại và kể với bố mẹ.",
    "dung": true,
    "g": "Đúng. Lời mời từ bạn bè vẫn có thể là bẫy mà bạn ấy cũng đang mắc."
   }
  ],
  "hoc": "Người quen rủ đầu tư lãi nhanh qua app lạ: không tham gia, nhắc bạn dừng lại."
 },
 {
  "id": "p4-g22",
  "phong": "p4",
  "loai": "chon",
  "kenh": "app",
  "that": false,
  "nguon": "CA Thanh Hóa 07/2026 - lộ thông tin cá nhân",
  "tu": "Ứng dụng \"Vay Nhanh Học Sinh\"",
  "phu": "Quảng cáo trên mạng xã hội",
  "tin": [
   "Vay 2 triệu trong 5 phút, không cần bố mẹ biết! Chỉ cần ảnh căn cước 2 mặt và cho phép truy cập danh bạ."
  ],
  "hoi": "Bạn đang cần tiền mua điện thoại. Bạn làm gì?",
  "chon": [
   {
    "t": "Vay vì nhanh và không ai biết.",
    "dung": false,
    "g": "Ứng dụng xin danh bạ, căn cước để đòi nợ bằng cách quấy rối người thân. Lãi thường rất cao."
   },
   {
    "t": "Không vay. Không gửi căn cước, không cấp quyền danh bạ. Nói chuyện với bố mẹ về khoản tiền cần.",
    "dung": true,
    "g": "Đúng. Lời mời \"không cần bố mẹ biết\" là dấu hiệu nguy hiểm."
   },
   {
    "t": "Vay ít thôi rồi trả sớm.",
    "dung": false,
    "g": "Đã gửi căn cước và danh bạ là bị lộ thông tin, dù vay ít."
   }
  ],
  "hoc": "Lời mời \"không cần bố mẹ biết\" và đòi căn cước, danh bạ: tránh xa."
 },
 {
  "id": "p4-g23",
  "phong": "p4",
  "loai": "chon",
  "kenh": "goi",
  "that": false,
  "nguon": "CA Thanh Hóa 07/2026 - mua bán tài khoản ngân hàng",
  "tu": "Số lạ",
  "phu": "Cuộc gọi đến",
  "tin": [
   "\"Tài khoản của em vừa nhận nhầm 3 triệu của chị. Em chuyển lại ngay vào số này giúp chị, không thì chị báo công an.\""
  ],
  "hoi": "Bạn kiểm tra thấy đúng là có 3 triệu lạ vào tài khoản. Bạn làm gì?",
  "chon": [
   {
    "t": "Chuyển ngay vào số người đó đọc để khỏi rắc rối.",
    "dung": false,
    "g": "Kẻ gian có thể dùng tiền bẩn \"chuyển nhầm\" rồi ép chuyển sang tài khoản khác, hoặc lừa tiếp bằng khoản vay lãi cao."
   },
   {
    "t": "Không tự chuyển theo yêu cầu người lạ. Báo bố mẹ, liên hệ ngân hàng để xử lý khoản tiền.",
    "dung": true,
    "g": "Đúng. Để ngân hàng hoặc công an xử lý khoản tiền lạ theo đúng quy trình."
   },
   {
    "t": "Rút tiền mặt ra tiêu vì không phải lỗi của mình.",
    "dung": false,
    "g": "Tiêu tiền không phải của mình là sai, có thể bị xử lý."
   }
  ],
  "hoc": "Tiền lạ vào tài khoản: báo ngân hàng, không tự chuyển theo lời người lạ."
 },
 {
  "id": "p4-g24",
  "phong": "p4",
  "loai": "chon",
  "kenh": "sms",
  "that": false,
  "nguon": "CA Bắc Ninh 04/2026 - việc nhẹ lương cao",
  "tu": "HoTroCTV",
  "phu": "Tin nhắn SMS",
  "tin": [
   "Tai khoan nhiem vu cua ban dang co 3.400.000d. Do sai cu phap, tai khoan bi dong bang. Nap 1.000.000d de giai bang va rut toan bo."
  ],
  "hoi": "Bạn đã lỡ nạp 300.000đ vào nhóm nhiệm vụ trước đó. Bạn làm gì?",
  "chon": [
   {
    "t": "Mượn tiền bạn để nạp tiếp, lấy lại cả gốc.",
    "dung": false,
    "g": "Kẻ gian sẽ tiếp tục nghĩ ra lý do để bạn nạp thêm. Số dư trên màn hình là giả."
   },
   {
    "t": "Dừng lại, không nạp thêm, chụp lại bằng chứng, báo bố mẹ và báo công an.",
    "dung": true,
    "g": "Đúng. Dừng sớm là cách giảm thiệt hại. Bị lừa không phải điều đáng xấu hổ."
   },
   {
    "t": "Nhắn tin xin giảm phí giải băng.",
    "dung": false,
    "g": "Mặc cả vẫn là tiếp tục làm theo kịch bản của kẻ gian."
   }
  ],
  "hoc": "\"Nạp thêm để rút tiền\": đã đến lúc dừng và báo người lớn."
 },
 {
  "id": "p4-g25",
  "phong": "p4",
  "loai": "soi",
  "kenh": "facebook",
  "that": false,
  "nguon": "CA Bắc Ninh 04/2026 - việc nhẹ lương cao",
  "tu": "Việc Làm Tại Nhà 365",
  "phu": "Bài đăng trong nhóm học sinh",
  "tin": [
   "Tuyển cộng tác viên gõ lại văn bản, làm trên điện thoại.",
   [
    {
     "t": "Thu nhập 400.000đ mỗi ngày, chỉ làm 1 tiếng",
     "n": true,
     "g": "Thu nhập cao bất thường so với công việc đơn giản."
    }
   ],
   [
    "Phù hợp học sinh, sinh viên muốn kiếm thêm. ",
    {
     "t": "Đóng 120.000đ phí kích hoạt tài khoản làm việc",
     "n": true,
     "g": "Việc làm thật không bắt người làm trả phí."
    }
   ],
   [
    {
     "t": "Chỉ nhận đăng ký qua tin nhắn riêng, không gọi điện",
     "n": true,
     "g": "Né liên lạc rõ ràng để khó truy vết."
    },
    ". Cảm ơn mọi người đã quan tâm."
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu của tin tuyển dụng giả.",
  "hoc": "Lương cao bất thường, đòi phí kích hoạt, né gọi điện: tin tuyển giả."
 },
 {
  "id": "p4-g26",
  "phong": "p4",
  "loai": "soi",
  "kenh": "telegram",
  "that": false,
  "nguon": "Cảnh báo của Công an - đầu tư siêu lợi nhuận",
  "tu": "Kênh \"Tín Hiệu VIP\"",
  "phu": "Kênh Telegram",
  "tin": [
   "Chào mừng thành viên mới gia nhập cộng đồng.",
   [
    {
     "t": "Cam kết lãi 30% mỗi tuần, không thể thua lỗ",
     "n": true,
     "g": "Không có khoản đầu tư hợp pháp nào cam kết lãi cao mà không rủi ro."
    }
   ],
   [
    {
     "t": "Chuyển tiền vào tài khoản cá nhân của chuyên gia",
     "n": true,
     "g": "Tổ chức tài chính thật không nhận tiền qua tài khoản cá nhân."
    },
    ", ",
    {
     "t": "ưu đãi chỉ dành cho 10 người đầu tiên",
     "n": true,
     "g": "Tạo khan hiếm giả để thúc ép quyết định."
    }
   ],
   [
    "Lịch tư vấn mỗi tối lúc 8 giờ cho các thành viên."
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu lừa đảo đầu tư.",
  "hoc": "Cam kết lãi cao không lỗ, tài khoản cá nhân, suất có hạn: lừa đảo đầu tư."
 },
 {
  "id": "p4-g27",
  "phong": "p4",
  "loai": "soi",
  "kenh": "web",
  "that": false,
  "nguon": "Cảnh báo của Công an - giả mạo trang nạp game",
  "tu": "rongmay-napthe-uudai.xyz",
  "phu": "Trang nạp game lạ",
  "tin": [
   "Nạp kim cương Rồng Mây nhanh chóng, hỗ trợ mọi nhà mạng.",
   [
    {
     "t": "Khuyến mãi x5 giá trị thẻ nạp hôm nay",
     "n": true,
     "g": "Ưu đãi quá lớn để dụ nạp ở trang lạ."
    }
   ],
   [
    {
     "t": "Nhập tên đăng nhập và mật khẩu game để nhận kim cương",
     "n": true,
     "g": "Trang nạp không cần mật khẩu của bạn. Đây là trang lấy cắp tài khoản."
    }
   ],
   [
    "Câu hỏi thường gặp và hướng dẫn nạp thẻ ở cuối trang."
   ],
   [
    {
     "t": "Tên miền lạ, không phải trang mở từ trong game",
     "n": true,
     "g": "Trang chính thức được mở từ nút Nạp trong game, không phải đường link lạ."
    }
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu đáng ngờ trên trang nạp game.",
  "hoc": "Trang nạp đòi mật khẩu, hứa nhân nhiều lần: trang giả."
 },
 {
  "id": "p4-g28",
  "phong": "p4",
  "loai": "soi",
  "kenh": "zalo",
  "that": false,
  "nguon": "CA Thanh Hóa 07/2026 - mua bán tài khoản ngân hàng",
  "tu": "Anh Phong (người lạ)",
  "phu": "Tin nhắn từ người chưa kết bạn",
  "tin": [
   "Chào em, anh làm bên dịch vụ thanh toán cho cửa hàng.",
   [
    {
     "t": "Thuê tài khoản ngân hàng của em 2 triệu một tháng",
     "n": true,
     "g": "Cho thuê tài khoản ngân hàng là vi phạm pháp luật, tài khoản sẽ bị dùng cho giao dịch phạm pháp."
    }
   ],
   [
    {
     "t": "Em gửi anh tên đăng nhập, mật khẩu và mã OTP",
     "n": true,
     "g": "Không bao giờ đưa thông tin đăng nhập và OTP cho người khác."
    },
    ", ",
    {
     "t": "đừng nói với bố mẹ kẻo phiền",
     "n": true,
     "g": "Đòi giữ bí mật với gia đình là dấu hiệu nguy hiểm."
    }
   ],
   [
    "Cuối tháng anh trả tiền đều đặn cho em nhé."
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu nguy hiểm trong tin nhắn.",
  "hoc": "Thuê, mượn tài khoản ngân hàng là tiếp tay tội phạm (Điều 291 Bộ luật Hình sự)."
 },
 {
  "id": "p4-g29",
  "phong": "p4",
  "loai": "soi",
  "kenh": "sms",
  "that": false,
  "nguon": "Cảnh báo của Công an - giả mạo sự kiện game",
  "tu": "RongMay-SuKien",
  "phu": "Tin nhắn SMS",
  "tin": [
   "Chuc mung ban la nguoi choi tich cuc thang nay.",
   [
    {
     "t": "Ban trung giai dac biet 10.000 kim cuong",
     "n": true,
     "g": "Bạn không tham gia sự kiện nào mà vẫn trúng: mồi nhử."
    }
   ],
   [
    {
     "t": "Dang nhap tai rongmay-qua.top de nhan",
     "n": true,
     "g": "Quà game thật nhận trong game, không qua trang lạ."
    },
    ". ",
    {
     "t": "Het han sau 1 gio",
     "n": true,
     "g": "Thúc ép thời gian."
    }
   ],
   [
    "Tran trong cam on ban da dong hanh."
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu lừa đảo.",
  "hoc": "Quà game thật nhận ngay trong game. Link lạ hứa quà là bẫy chiếm tài khoản."
 },
 {
  "id": "p4-g30",
  "phong": "p4",
  "loai": "soi",
  "kenh": "email",
  "that": false,
  "nguon": "CA Bắc Ninh 04/2026 - cuộc thi, tuyển dụng giả",
  "tu": "casting.ngoisaotre@gmail.com",
  "phu": "Tiêu đề: Mời em làm mẫu ảnh cho thương hiệu thời trang",
  "tin": [
   "Chúng tôi thấy ảnh của em rất ăn ảnh trên mạng xã hội.",
   [
    {
     "t": "Cát-xê 5 triệu cho một buổi chụp",
     "n": true,
     "g": "Thù lao cao bất thường để dụ dỗ."
    }
   ],
   [
    {
     "t": "Em nộp 500.000đ phí làm hồ sơ người mẫu",
     "n": true,
     "g": "Công ty thật trả tiền cho người mẫu, không thu phí của người mẫu."
    },
    ", ",
    {
     "t": "buổi chụp ở địa chỉ riêng, đi một mình",
     "n": true,
     "g": "Gặp người lạ ở nơi riêng, không có người lớn đi cùng là nguy hiểm."
    }
   ],
   [
    "Hồ sơ năng lực công ty gửi kèm trong thư."
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu đáng ngờ trong thư mời.",
  "hoc": "Thù lao cao, đòi phí hồ sơ, hẹn gặp riêng một mình: từ chối và báo người lớn."
 },
 {
  "id": "p4-g31",
  "phong": "p4",
  "loai": "soi",
  "kenh": "app",
  "that": false,
  "nguon": "CA Bắc Ninh 04/2026 - việc nhẹ lương cao",
  "tu": "Ứng dụng \"Xem Quảng Cáo Kiếm Tiền\"",
  "phu": "Cài từ đường link được bạn chia sẻ",
  "tin": [
   "Xem quảng cáo mỗi ngày để tích điểm đổi tiền.",
   [
    {
     "t": "Số dư của bạn: 850.000đ (chưa rút được)",
     "n": true,
     "g": "Số dư trên màn hình có thể chỉ là con số ảo để dụ bạn nạp tiền."
    }
   ],
   [
    {
     "t": "Nâng cấp gói VIP 299.000đ để rút tiền về ngân hàng",
     "n": true,
     "g": "Phải trả tiền mới rút được: dấu hiệu lừa đảo."
    }
   ],
   [
    "Mời bạn bè dùng ứng dụng để nhận thêm điểm thưởng."
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu lừa đảo trong ứng dụng.",
  "hoc": "Số dư ảo, phải nạp mới rút được: ứng dụng lừa đảo."
 },
 {
  "id": "p4-g32",
  "phong": "p4",
  "loai": "soi",
  "kenh": "facebook",
  "that": false,
  "nguon": "Cảnh báo của Công an - cá cược trá hình",
  "tu": "Trang \"Thể Thao Điện Tử Hôm Nay\"",
  "phu": "Trang tạo tuần trước",
  "tin": [
   "Lịch thi đấu các giải thể thao điện tử cuối tuần này.",
   [
    {
     "t": "Đặt cửa đội thắng, ăn gấp 3 lần tiền đặt",
     "n": true,
     "g": "Đặt tiền vào kết quả trận đấu là cá cược."
    }
   ],
   [
    {
     "t": "Nạp qua tài khoản cá nhân của admin",
     "n": true,
     "g": "Tiền vào tài khoản cá nhân, không có gì bảo đảm."
    },
    ", ",
    {
     "t": "học sinh được tặng thêm 50% lần nạp đầu",
     "n": true,
     "g": "Nhắm vào học sinh để dụ tham gia cá cược."
    }
   ],
   [
    "Cập nhật kết quả các trận đấu mỗi tối trên trang."
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu cá cược trá hình.",
  "hoc": "Đặt tiền vào kết quả trận đấu là cá cược, dù gắn mác thể thao điện tử."
 },
 {
  "id": "p5-g01",
  "phong": "p5",
  "loai": "chon",
  "kenh": "email",
  "tu": "Thư Viện Số Hoa Mai <bao-mat@thuvienhoamai.vn>",
  "phu": "Thông báo đăng nhập",
  "tin": [
   "Tài khoản của bạn vừa đăng nhập trên Chrome, Windows, lúc 20:14 hôm nay.",
   "Nếu là bạn, bạn không cần làm gì. Nếu không phải bạn, hãy mở ứng dụng Thư Viện Số và đổi mật khẩu trong mục Bảo mật."
  ],
  "hoi": "Bạn vừa đăng nhập thư viện số trên máy tính ở nhà lúc 20:14. Bạn làm gì?",
  "chon": [
   {
    "t": "Báo cáo thư lừa đảo và xóa tài khoản thư viện.",
    "dung": false,
    "g": "Phản ứng thái quá. Thời gian và thiết bị khớp với việc bạn vừa làm."
   },
   {
    "t": "Không cần làm gì, vì đúng là mình vừa đăng nhập; thư không xin mật khẩu hay bấm link.",
    "dung": true,
    "g": "Đúng. Thông báo đăng nhập là tính năng bảo vệ bạn. Khớp với việc mình làm thì yên tâm."
   },
   {
    "t": "Trả lời thư, gửi kèm mật khẩu để họ kiểm tra giúp.",
    "dung": false,
    "g": "Không bao giờ gửi mật khẩu qua thư, kể cả cho dịch vụ thật."
   }
  ],
  "hoc": "Thông báo đăng nhập khớp với việc mình vừa làm là bình thường; chỉ xử lý khi thấy lạ.",
  "that": true,
  "nguon": "Tình huống thường ngày (thật)"
 },
 {
  "id": "p5-g02",
  "phong": "p5",
  "loai": "chon",
  "kenh": "app",
  "tu": "Cài đặt điện thoại",
  "phu": "Cập nhật hệ thống",
  "tin": [
   "Có bản cập nhật phần mềm mới cho điện thoại của bạn. Bản cập nhật gồm các bản vá bảo mật.",
   "Cập nhật ngay | Tối nay"
  ],
  "hoi": "Thông báo hiện trong mục Cài đặt của máy. Bạn làm gì?",
  "chon": [
   {
    "t": "Bỏ qua mãi mãi vì cập nhật nào cũng là lừa đảo.",
    "dung": false,
    "g": "Không cập nhật khiến máy giữ lỗ hổng cũ."
   },
   {
    "t": "Tải bản cập nhật từ một trang web lạ cho nhanh.",
    "dung": false,
    "g": "Bản cài từ trang lạ có thể chứa mã độc."
   },
   {
    "t": "Cắm sạc, dùng Wi-Fi nhà và cập nhật ngay trong Cài đặt máy.",
    "dung": true,
    "g": "Đúng. Cập nhật từ chính Cài đặt của máy là cách an toàn để vá lỗ hổng."
   }
  ],
  "hoc": "Cập nhật phần mềm từ Cài đặt chính thức giúp máy an toàn hơn.",
  "that": true,
  "nguon": "Tình huống thường ngày (thật)"
 },
 {
  "id": "p5-g03",
  "phong": "p5",
  "loai": "chon",
  "kenh": "app",
  "tu": "Ứng dụng Luyện Nói Tiếng Anh (kho ứng dụng chính thức)",
  "phu": "Xin quyền",
  "tin": [
   "Ứng dụng cần quyền Micro để chấm phát âm khi bạn luyện nói."
  ],
  "hoi": "Cô giáo tiếng Anh giới thiệu ứng dụng này cho cả lớp. Bạn làm gì?",
  "chon": [
   {
    "t": "Cho phép Micro khi dùng ứng dụng, vì quyền khớp đúng chức năng luyện nói.",
    "dung": true,
    "g": "Đúng. Quyền khớp chức năng và ứng dụng từ kho chính thức thì có thể cho phép."
   },
   {
    "t": "Từ chối mọi quyền của mọi ứng dụng.",
    "dung": false,
    "g": "Không có Micro thì ứng dụng luyện nói không chạy được."
   },
   {
    "t": "Cho thêm quyền Danh bạ và Tin nhắn cho chắc.",
    "dung": false,
    "g": "Không cấp quyền thừa ứng dụng không cần."
   }
  ],
  "hoc": "Quyền khớp với chức năng thì cho phép; quyền thừa thì từ chối.",
  "that": true,
  "nguon": "Tình huống thường ngày (thật)"
 },
 {
  "id": "p5-g04",
  "phong": "p5",
  "loai": "chon",
  "kenh": "sms",
  "tu": "MangXanh",
  "phu": "Tin nhắn SMS",
  "tin": [
   "Ma xac thuc dang nhap ung dung Mang Xanh cua ban la 528104. Khong chia se ma nay cho bat ky ai."
  ],
  "hoi": "Bạn vừa bấm \"Đăng nhập\" trên ứng dụng Mạng Xanh và đang chờ mã. Bạn làm gì?",
  "chon": [
   {
    "t": "Gửi mã cho bạn thân giữ hộ.",
    "dung": false,
    "g": "Mã xác thực chỉ để bạn nhập, không gửi cho ai."
   },
   {
    "t": "Nhập mã vào chính ứng dụng mình đang đăng nhập.",
    "dung": true,
    "g": "Đúng. Mã đến đúng lúc bạn yêu cầu thì nhập vào ứng dụng của bạn."
   },
   {
    "t": "Hoảng sợ, đổi số điện thoại mới.",
    "dung": false,
    "g": "Không cần. Đây là mã bạn vừa yêu cầu."
   }
  ],
  "hoc": "Mã xác thực bạn tự yêu cầu thì tự nhập; không đọc, không gửi cho ai.",
  "that": true,
  "nguon": "Tình huống thường ngày (thật)"
 },
 {
  "id": "p5-g05",
  "phong": "p5",
  "loai": "chon",
  "kenh": "zalo",
  "tu": "Nhóm lớp 10A1 (nhóm quen thuộc)",
  "phu": "Cô Lan chủ nhiệm",
  "tin": [
   "Các em vào ứng dụng Sổ Liên Lạc của trường, mục Hồ sơ, kiểm tra lại ngày sinh của mình giúp cô trước thứ Sáu nhé. Sai thì báo cô ở lớp."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Gửi ảnh căn cước vào nhóm cho cô đối chiếu.",
    "dung": false,
    "g": "Không cần và không nên gửi ảnh giấy tờ vào nhóm đông người."
   },
   {
    "t": "Bỏ qua vì sợ lừa đảo.",
    "dung": false,
    "g": "Tin từ nhóm lớp quen thuộc, không xin tiền, không link lạ, chỉ hướng dẫn kiểm tra trong ứng dụng của trường."
   },
   {
    "t": "Mở ứng dụng Sổ Liên Lạc của trường kiểm tra; sai thì báo cô trực tiếp ở lớp.",
    "dung": true,
    "g": "Đúng. Làm trong ứng dụng chính thức và báo trực tiếp là an toàn."
   }
  ],
  "hoc": "Yêu cầu không xin tiền, không link lạ, làm trong ứng dụng chính thức: có thể làm theo.",
  "that": true,
  "nguon": "Tình huống thường ngày (thật)"
 },
 {
  "id": "p5-g06",
  "phong": "p5",
  "loai": "chon",
  "kenh": "web",
  "tu": "Trang cài đặt tài khoản Mạng Xanh",
  "phu": "Bảo mật",
  "tin": [
   "Bật xác thực 2 lớp: mỗi khi đăng nhập trên thiết bị mới, bạn cần nhập thêm mã từ ứng dụng xác thực hoặc tin nhắn.",
   "Lưu lại các mã dự phòng ở nơi an toàn."
  ],
  "hoi": "Bạn tự vào phần cài đặt tài khoản và thấy mục này. Bạn làm gì?",
  "chon": [
   {
    "t": "Bật xác thực 2 lớp và ghi các mã dự phòng ra giấy, cất ở nhà.",
    "dung": true,
    "g": "Đúng. Mã dự phòng giúp bạn vào lại tài khoản khi mất điện thoại."
   },
   {
    "t": "Bật xong chụp mã dự phòng đăng lên Facebook để khỏi quên.",
    "dung": false,
    "g": "Đăng công khai thì ai cũng dùng được mã dự phòng của bạn."
   },
   {
    "t": "Không bật vì phiền.",
    "dung": false,
    "g": "Xác thực 2 lớp chặn người lạ dù họ biết mật khẩu."
   }
  ],
  "hoc": "Bật xác thực 2 lớp và cất mã dự phòng ở nơi riêng tư.",
  "that": true,
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p5-g07",
  "phong": "p5",
  "loai": "chon",
  "kenh": "app",
  "tu": "Trình quản lý mật khẩu có sẵn trong điện thoại",
  "phu": "Gợi ý",
  "tin": [
   "Bạn đang tạo tài khoản mới. Điện thoại gợi ý một mật khẩu mạnh, dài và sẽ tự lưu vào khóa của máy bạn."
  ],
  "hoi": "Đây là điện thoại riêng của bạn, có khóa màn hình. Bạn làm gì?",
  "chon": [
   {
    "t": "Dùng mật khẩu gợi ý và để máy lưu, vì máy riêng có khóa màn hình.",
    "dung": true,
    "g": "Đúng. Trình quản lý mật khẩu giúp mỗi tài khoản có mật khẩu riêng, mạnh."
   },
   {
    "t": "Đổi thành 123456 cho dễ nhớ.",
    "dung": false,
    "g": "Mật khẩu ngắn, phổ biến bị dò ra rất nhanh."
   },
   {
    "t": "Dùng lại mật khẩu Facebook cho tài khoản mới.",
    "dung": false,
    "g": "Dùng chung mật khẩu: lộ một nơi là mất nhiều nơi."
   }
  ],
  "hoc": "Trên máy riêng có khóa, trình quản lý mật khẩu là trợ thủ tốt.",
  "that": true,
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p5-g08",
  "phong": "p5",
  "loai": "chon",
  "kenh": "goi",
  "tu": "Bố",
  "phu": "Số đã lưu trong danh bạ",
  "tin": [
   "\"Con bật chia sẻ vị trí với bố mẹ trong ứng dụng Gia Đình khi đi trại hè nhé, về thì tắt cũng được.\""
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Chia sẻ vị trí công khai lên mạng xã hội cho tiện.",
    "dung": false,
    "g": "Vị trí chỉ nên chia sẻ với người thân tin cậy."
   },
   {
    "t": "Bật chia sẻ vị trí riêng với bố mẹ trong thời gian đi trại.",
    "dung": true,
    "g": "Đúng. Chia sẻ có chọn lọc, có thời hạn với người thân là an toàn."
   },
   {
    "t": "Từ chối vì mọi việc chia sẻ vị trí đều nguy hiểm.",
    "dung": false,
    "g": "Chia sẻ với gia đình khi đi xa là cách giữ an toàn."
   }
  ],
  "hoc": "Chia sẻ vị trí đúng người, đúng lúc, có thời hạn.",
  "that": true,
  "nguon": "Tình huống thường ngày (thật)"
 },
 {
  "id": "p5-g09",
  "phong": "p5",
  "loai": "chon",
  "kenh": "email",
  "tu": "Ổ Lưu Trữ Mây Xanh <thongbao@maxanh.vn>",
  "phu": "Bộ nhớ sắp đầy",
  "tin": [
   "Bộ nhớ ảnh trên tài khoản của bạn đã dùng 90%. Bạn có thể xóa bớt ảnh trùng trong ứng dụng hoặc chọn gói lớn hơn trong mục Cài đặt."
  ],
  "hoi": "Bạn đang dùng ổ lưu trữ này để sao lưu ảnh. Thư không có đường link. Bạn làm gì?",
  "chon": [
   {
    "t": "Mở ứng dụng lưu trữ đã cài, tự kiểm tra dung lượng và xóa ảnh trùng.",
    "dung": true,
    "g": "Đúng. Kiểm tra trong ứng dụng chính thức, không cần bấm gì trong thư."
   },
   {
    "t": "Trả lời thư gửi mật khẩu nhờ họ dọn giúp.",
    "dung": false,
    "g": "Không gửi mật khẩu cho bất kỳ ai."
   },
   {
    "t": "Xóa luôn toàn bộ bản sao lưu cho chắc.",
    "dung": false,
    "g": "Mất bản sao lưu thì hỏng máy là mất hết ảnh."
   }
  ],
  "hoc": "Kiểm tra thông báo bằng cách tự mở ứng dụng chính thức.",
  "that": true,
  "nguon": "Tình huống thường ngày (thật)"
 },
 {
  "id": "p5-g10",
  "phong": "p5",
  "loai": "chon",
  "kenh": "facebook",
  "tu": "Mạng Xanh",
  "phu": "Nhắc kiểm tra quyền riêng tư",
  "tin": [
   "Đã 1 năm bạn chưa xem lại ai có thể thấy bài viết của bạn. Kiểm tra cài đặt quyền riêng tư ngay trong ứng dụng?"
  ],
  "hoi": "Nhắc nhở hiện ngay trong ứng dụng Mạng Xanh bạn đang dùng. Bạn làm gì?",
  "chon": [
   {
    "t": "Đặt mọi bài viết ở chế độ Công khai cho nhiều người xem.",
    "dung": false,
    "g": "Công khai mọi thứ làm lộ dấu chân số của bạn."
   },
   {
    "t": "Xóa tài khoản vì sợ.",
    "dung": false,
    "g": "Không cần. Chỉ cần chỉnh quyền riêng tư."
   },
   {
    "t": "Xem lại, để bài viết cá nhân ở chế độ Bạn bè và ẩn số điện thoại, ngày sinh.",
    "dung": true,
    "g": "Đúng. Thỉnh thoảng rà lại quyền riêng tư là thói quen tốt."
   }
  ],
  "hoc": "Định kỳ rà quyền riêng tư: ai xem được bài, số điện thoại, ngày sinh.",
  "that": true,
  "nguon": "Bình dân học vụ số - Quản lý quyền riêng tư"
 },
 {
  "id": "p5-g11",
  "phong": "p5",
  "loai": "chon",
  "kenh": "email",
  "tu": "Mang Xanh Security <canhbao-mangxanh@gmail.com>",
  "phu": "Cảnh báo đăng nhập",
  "tin": [
   "Có người đăng nhập tài khoản của bạn tại Nga. Nếu không phải bạn, bấm vào đây và nhập mật khẩu hiện tại để khóa tài khoản: mangxanh-baove.top"
  ],
  "hoi": "Bạn không đăng nhập ở đâu lạ. Bạn làm gì?",
  "chon": [
   {
    "t": "Bấm link nhập mật khẩu để khóa ngay.",
    "dung": false,
    "g": "Trang giả sẽ lấy mật khẩu. Thư gửi từ gmail cá nhân, tên miền lạ."
   },
   {
    "t": "Không bấm link; tự mở ứng dụng Mạng Xanh, xem mục Thiết bị đăng nhập và đổi mật khẩu nếu thấy lạ.",
    "dung": true,
    "g": "Đúng. Kiểm tra qua ứng dụng chính thức, không qua link trong thư."
   },
   {
    "t": "Trả lời thư hỏi có thật không.",
    "dung": false,
    "g": "Kẻ gian sẽ trả lời là thật."
   }
  ],
  "hoc": "Cảnh báo kèm link đòi mật khẩu: tự kiểm tra trong ứng dụng chính thức.",
  "that": false,
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p5-g12",
  "phong": "p5",
  "loai": "chon",
  "kenh": "app",
  "tu": "Máy tính thư viện trường",
  "phu": "Máy dùng chung",
  "tin": [
   "Bạn vừa đăng nhập email để in bài. Sắp hết giờ, bạn của bạn đang chờ dùng máy."
  ],
  "hoi": "Bạn làm gì trước khi rời máy?",
  "chon": [
   {
    "t": "Đóng nắp màn hình rồi đi, máy sẽ tự khóa.",
    "dung": false,
    "g": "Máy dùng chung không tự đăng xuất tài khoản của bạn."
   },
   {
    "t": "Nhờ bạn đăng xuất giúp.",
    "dung": false,
    "g": "Bạn có thể quên, hoặc người khác dùng tài khoản của bạn."
   },
   {
    "t": "Đăng xuất email, xóa tệp vừa tải xuống, đóng trình duyệt rồi mới rời máy.",
    "dung": true,
    "g": "Đúng. Trên máy dùng chung, tự tay dọn sạch dấu vết của mình."
   }
  ],
  "hoc": "Máy dùng chung: đăng xuất, xóa tệp tải về, đóng trình duyệt.",
  "that": false,
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p5-g13",
  "phong": "p5",
  "loai": "chon",
  "kenh": "zalo",
  "tu": "Bạn cùng bàn",
  "phu": "Nhắn riêng",
  "tin": [
   "Cho tao mượn mật khẩu tài khoản học trực tuyến của mày để tao xem đáp án bài kiểm tra đã nộp nhé, tao không làm gì đâu."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Đưa mật khẩu vì là bạn thân.",
    "dung": false,
    "g": "Ai có mật khẩu là có thể làm mọi việc dưới tên bạn, kể cả vô tình."
   },
   {
    "t": "Không đưa mật khẩu; nếu bạn cần xem bài thì ngồi cùng xem trên máy của mình.",
    "dung": true,
    "g": "Đúng. Mật khẩu là của riêng bạn, kể cả với bạn thân."
   },
   {
    "t": "Đưa mật khẩu rồi mai đổi.",
    "dung": false,
    "g": "Chỉ một đêm cũng đủ để xảy ra sự cố."
   }
  ],
  "hoc": "Mật khẩu không cho mượn, kể cả bạn thân.",
  "that": false,
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p5-g14",
  "phong": "p5",
  "loai": "chon",
  "kenh": "facebook",
  "tu": "Trang \"Thử thách 10 năm\"",
  "phu": "Trend đang hot",
  "tin": [
   "Đăng ảnh bạn lúc 6 tuổi và bây giờ, kèm tên trường tiểu học và tên thú cưng đầu tiên để mọi người đoán!"
  ],
  "hoi": "Bạn có nên tham gia theo đúng yêu cầu?",
  "chon": [
   {
    "t": "Tham gia đầy đủ cho vui.",
    "dung": false,
    "g": "Tên trường tiểu học, tên thú cưng thường là câu hỏi bảo mật để lấy lại mật khẩu."
   },
   {
    "t": "Chỉ đăng ảnh ở chế độ bạn bè, không ghi tên trường cũ, tên thú cưng.",
    "dung": true,
    "g": "Đúng. Có thể vui mà không tiết lộ thông tin dùng để khôi phục tài khoản."
   },
   {
    "t": "Ghi thêm cả ngày sinh cho đủ.",
    "dung": false,
    "g": "Ngày sinh là mảnh ghép quan trọng để giả mạo bạn."
   }
  ],
  "hoc": "Trend vui vẫn có thể là bẫy thu thập câu trả lời bảo mật.",
  "that": false,
  "nguon": "Bình dân học vụ số - Dấu chân kỹ thuật số"
 },
 {
  "id": "p5-g15",
  "phong": "p5",
  "loai": "chon",
  "kenh": "app",
  "tu": "Ứng dụng Đèn Pin Siêu Sáng",
  "phu": "Tải từ trang web lạ",
  "tin": [
   "Để dùng đèn pin, cho phép truy cập: Vị trí, Danh bạ, Ảnh, Micro."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Gỡ ứng dụng; đèn pin có sẵn trong điện thoại, không cần quyền này.",
    "dung": true,
    "g": "Đúng. Đèn pin không cần vị trí, danh bạ, ảnh hay micro."
   },
   {
    "t": "Cho phép vì đèn pin vô hại.",
    "dung": false,
    "g": "Quyền thừa có thể dùng để thu thập dữ liệu của bạn."
   },
   {
    "t": "Chỉ cho Danh bạ thôi.",
    "dung": false,
    "g": "Đèn pin không cần danh bạ."
   }
  ],
  "hoc": "Ứng dụng xin quyền không liên quan chức năng: gỡ ngay.",
  "that": false,
  "nguon": "Bình dân học vụ số - Quản lý quyền riêng tư"
 },
 {
  "id": "p5-g16",
  "phong": "p5",
  "loai": "chon",
  "kenh": "facebook",
  "tu": "Story của bạn",
  "phu": "Sắp đăng",
  "tin": [
   "\"Cả nhà đi Đà Lạt 5 ngày, nhà vắng tanh hihi\" kèm ảnh cổng nhà có số nhà rõ."
  ],
  "hoi": "Có gì không ổn?",
  "chon": [
   {
    "t": "Không sao, đăng là để khoe.",
    "dung": false,
    "g": "Bạn vừa báo cho cả mạng biết nhà vắng người và địa chỉ nhà."
   },
   {
    "t": "Chỉ cần xóa số nhà là ổn, vẫn ghi nhà vắng.",
    "dung": false,
    "g": "Kẻ xấu vẫn có thể biết bạn ở đâu qua bạn bè chung."
   },
   {
    "t": "Lộ địa chỉ và lịch nhà vắng người; nên đăng ảnh chuyến đi sau khi về và không chụp cổng nhà.",
    "dung": true,
    "g": "Đúng. Đăng sau khi về là thói quen an toàn."
   }
  ],
  "hoc": "Không báo lịch nhà vắng người và địa chỉ nhà trên mạng.",
  "that": false,
  "nguon": "Bình dân học vụ số - Dấu chân kỹ thuật số"
 },
 {
  "id": "p5-g17",
  "phong": "p5",
  "loai": "chon",
  "kenh": "sms",
  "tu": "0866 xxx xxx",
  "phu": "Tin nhắn SMS",
  "tin": [
   "MangXanh: Ban vua yeu cau doi so dien thoai dang nhap. Neu khong phai ban, goi ngay 0866xxxxxx de huy."
  ],
  "hoi": "Bạn không yêu cầu gì cả. Bạn làm gì?",
  "chon": [
   {
    "t": "Gọi ngay số trong tin nhắn để hủy.",
    "dung": false,
    "g": "Số trong tin là của kẻ gian, họ sẽ dụ bạn đọc mã."
   },
   {
    "t": "Không gọi số lạ; mở ứng dụng Mạng Xanh kiểm tra phần bảo mật, đổi mật khẩu nếu thấy lạ.",
    "dung": true,
    "g": "Đúng. Tự kiểm tra trong ứng dụng, không theo số điện thoại trong tin lạ."
   },
   {
    "t": "Nhắn lại mã OTP để xác nhận không phải mình.",
    "dung": false,
    "g": "Không bao giờ gửi OTP."
   }
  ],
  "hoc": "Tin báo thay đổi tài khoản lạ: tự kiểm tra trong ứng dụng, không gọi số lạ.",
  "that": false,
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p5-g18",
  "phong": "p5",
  "loai": "chon",
  "kenh": "web",
  "tu": "Quán cà phê Gió Chiều",
  "phu": "Wi-Fi miễn phí",
  "tin": [
   "Để dùng Wi-Fi, đăng nhập bằng tài khoản Mạng Xanh của bạn tại trang này."
  ],
  "hoi": "Trang đăng nhập Wi-Fi đòi tài khoản mạng xã hội. Bạn làm gì?",
  "chon": [
   {
    "t": "Đăng nhập luôn cho có mạng.",
    "dung": false,
    "g": "Trang đăng nhập Wi-Fi giả có thể lấy mật khẩu mạng xã hội."
   },
   {
    "t": "Dùng mạng di động của mình; không đăng nhập tài khoản mạng xã hội vào trang Wi-Fi lạ.",
    "dung": true,
    "g": "Đúng. Không đưa mật khẩu tài khoản chính cho trang lạ."
   },
   {
    "t": "Đăng nhập rồi đổi mật khẩu sau.",
    "dung": false,
    "g": "Kẻ gian có thể vào tài khoản ngay trước khi bạn kịp đổi."
   }
  ],
  "hoc": "Không nhập mật khẩu tài khoản chính vào trang Wi-Fi công cộng.",
  "that": false,
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p5-g19",
  "phong": "p5",
  "loai": "chon",
  "kenh": "telegram",
  "tu": "Nhóm \"Mở khóa tài khoản bị hack\"",
  "phu": "Nhận hỗ trợ",
  "tin": [
   "Tài khoản bị khóa? Gửi tên đăng nhập, mật khẩu cũ, ảnh căn cước, team mình lấy lại trong 30 phút, phí 200.000đ."
  ],
  "hoi": "Tài khoản game của bạn vừa bị chiếm. Bạn làm gì?",
  "chon": [
   {
    "t": "Gửi đủ thông tin để lấy lại nhanh.",
    "dung": false,
    "g": "Bạn sẽ mất thêm tiền và cả thông tin căn cước."
   },
   {
    "t": "Dùng chức năng Khôi phục tài khoản chính thức của nhà phát hành, nhờ bố mẹ hỗ trợ.",
    "dung": true,
    "g": "Đúng. Chỉ khôi phục qua kênh chính thức."
   },
   {
    "t": "Trả phí trước một nửa.",
    "dung": false,
    "g": "Dịch vụ lấy lại tài khoản qua nhóm lạ thường là lừa đảo lần hai."
   }
  ],
  "hoc": "Mất tài khoản: khôi phục qua kênh chính thức, cảnh giác \"dịch vụ lấy lại\".",
  "that": false,
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p5-g20",
  "phong": "p5",
  "loai": "chon",
  "kenh": "app",
  "tu": "Điện thoại cũ",
  "phu": "Chuẩn bị bán lại",
  "tin": [
   "Bạn sắp bán điện thoại cũ cho một người trên chợ online. Trong máy còn ảnh, tài khoản, tin nhắn."
  ],
  "hoi": "Trước khi giao máy, bạn làm gì?",
  "chon": [
   {
    "t": "Xóa vài ảnh riêng là đủ.",
    "dung": false,
    "g": "Tài khoản và tin nhắn vẫn còn trong máy."
   },
   {
    "t": "Đưa luôn cả mật khẩu khóa màn hình cho người mua.",
    "dung": false,
    "g": "Người mua sẽ vào được mọi tài khoản còn đăng nhập."
   },
   {
    "t": "Sao lưu dữ liệu, đăng xuất mọi tài khoản, rồi khôi phục cài đặt gốc trước khi giao.",
    "dung": true,
    "g": "Đúng. Khôi phục cài đặt gốc xóa sạch dữ liệu cá nhân."
   }
  ],
  "hoc": "Bán, cho máy cũ: sao lưu, đăng xuất, khôi phục cài đặt gốc.",
  "that": false,
  "nguon": "Bình dân học vụ số - Quản lý quyền riêng tư"
 },
 {
  "id": "p5-g21",
  "phong": "p5",
  "loai": "chon",
  "kenh": "zalo",
  "tu": "Nhóm học thêm Toán",
  "phu": "Tài khoản lạ trong nhóm",
  "tin": [
   "Mọi người điền form khảo sát để nhận tài liệu miễn phí nhé: họ tên, ngày sinh, số căn cước, số điện thoại bố mẹ, địa chỉ nhà."
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Không điền; tài liệu học không cần căn cước và địa chỉ nhà. Hỏi thầy dạy thêm trực tiếp.",
    "dung": true,
    "g": "Đúng. Đòi thông tin vượt quá nhu cầu là dấu hiệu thu thập dữ liệu."
   },
   {
    "t": "Điền đủ để được tài liệu.",
    "dung": false,
    "g": "Dữ liệu có thể bị bán hoặc dùng để lừa bố mẹ bạn."
   },
   {
    "t": "Điền thông tin của bạn khác thay mình.",
    "dung": false,
    "g": "Bạn đang làm lộ dữ liệu của người khác."
   }
  ],
  "hoc": "Form đòi thông tin vượt quá mục đích: không điền.",
  "that": false,
  "nguon": "Bình dân học vụ số - Quản lý quyền riêng tư"
 },
 {
  "id": "p5-g22",
  "phong": "p5",
  "loai": "chon",
  "kenh": "facebook",
  "tu": "Ảnh nhóm trên trang lớp",
  "phu": "Bạn bè gắn thẻ",
  "tin": [
   "Một bạn đăng ảnh cả lớp, ghi rõ họ tên đầy đủ, lớp và tên trường từng người, để công khai."
  ],
  "hoi": "Bạn không muốn thông tin của mình bị công khai. Bạn làm gì?",
  "chon": [
   {
    "t": "Báo cáo bạn ấy với nhà trường ngay.",
    "dung": false,
    "g": "Hơi thái quá. Trước hết có thể nhờ bạn sửa."
   },
   {
    "t": "Bỏ gắn thẻ mình, nhắn riêng nhờ bạn để chế độ bạn bè hoặc bỏ họ tên đầy đủ.",
    "dung": true,
    "g": "Đúng. Bạn có quyền quản lý thông tin về mình, và nhắc bạn một cách tôn trọng."
   },
   {
    "t": "Bình luận chê bạn ấy công khai.",
    "dung": false,
    "g": "Không cần làm bạn mất mặt; nhắn riêng hiệu quả hơn."
   }
  ],
  "hoc": "Gỡ gắn thẻ và nhắn riêng khi ảnh làm lộ thông tin của mình.",
  "that": false,
  "nguon": "Bình dân học vụ số - Dấu chân kỹ thuật số"
 },
 {
  "id": "p5-g23",
  "phong": "p5",
  "loai": "chon",
  "kenh": "goi",
  "tu": "\"Nhân viên kỹ thuật Mạng Xanh\"",
  "phu": "Số lạ",
  "tin": [
   "\"Tài khoản em đang bị hack. Em cài ứng dụng Hỗ Trợ Từ Xa anh gửi để anh vào máy xử lý giúp nhé.\""
  ],
  "hoi": "Bạn làm gì?",
  "chon": [
   {
    "t": "Cài ứng dụng để được hỗ trợ.",
    "dung": false,
    "g": "Ứng dụng điều khiển từ xa cho người lạ toàn quyền trên máy bạn."
   },
   {
    "t": "Cài xong rồi gỡ ngay.",
    "dung": false,
    "g": "Trong lúc cài, kẻ gian đã có thể lấy dữ liệu."
   },
   {
    "t": "Cúp máy; không cài ứng dụng điều khiển từ xa theo yêu cầu người lạ.",
    "dung": true,
    "g": "Đúng. Dịch vụ thật không gọi điện bắt bạn cài ứng dụng điều khiển máy."
   }
  ],
  "hoc": "Không cho người lạ điều khiển máy từ xa.",
  "that": false,
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p5-g24",
  "phong": "p5",
  "loai": "chon",
  "kenh": "web",
  "tu": "Trang đăng ký tài khoản học tập",
  "phu": "Tạo mật khẩu",
  "tin": [
   "Bạn cần đặt mật khẩu mới. Bạn định dùng lại đúng mật khẩu email vì sợ quên."
  ],
  "hoi": "Cách nào tốt hơn?",
  "chon": [
   {
    "t": "Dùng lại mật khẩu email cho đỡ quên.",
    "dung": false,
    "g": "Lộ ở trang này thì kẻ gian thử ngay vào email của bạn."
   },
   {
    "t": "Thêm số 1 vào cuối mật khẩu email.",
    "dung": false,
    "g": "Biến thể nhỏ của mật khẩu cũ vẫn dễ bị đoán."
   },
   {
    "t": "Đặt một cụm từ dài khác hẳn, lưu bằng trình quản lý mật khẩu trên máy riêng.",
    "dung": true,
    "g": "Đúng. Mỗi tài khoản một mật khẩu riêng, dài, khó đoán."
   }
  ],
  "hoc": "Không dùng lại mật khẩu email cho trang khác.",
  "that": false,
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p5-g25",
  "phong": "p5",
  "loai": "soi",
  "kenh": "facebook",
  "tu": "Trang cá nhân của bạn",
  "phu": "Bài sắp đăng",
  "tin": [
   [
    "Hôm nay nhận được thẻ học sinh mới, xinh không cả nhà! "
   ],
   [
    {
     "t": "Ảnh thẻ học sinh rõ mã số học sinh và mã vạch",
     "n": true,
     "g": "Mã số, mã vạch có thể bị dùng tra cứu điểm, giả danh bạn."
    }
   ],
   [
    {
     "t": "Sáng nào mình cũng đi bộ một mình qua ngõ 7 lúc 6h15",
     "n": true,
     "g": "Lộ lịch trình di chuyển, kẻ xấu biết bạn ở đâu, lúc nào."
    }
   ],
   [
    "Cảm ơn cô chủ nhiệm đã làm thẻ cho cả lớp."
   ]
  ],
  "hoi": "Chạm vào những thông tin KHÔNG nên đăng.",
  "hoc": "Không đăng mã số, mã vạch giấy tờ và lịch trình đi lại cố định.",
  "that": false,
  "nguon": "Bình dân học vụ số - Dấu chân kỹ thuật số"
 },
 {
  "id": "p5-g26",
  "phong": "p5",
  "loai": "soi",
  "kenh": "email",
  "tu": "Bao mat tai khoan <no-reply@mangxanh-secure.click>",
  "phu": "Tiêu đề: Mật khẩu của bạn sẽ hết hạn",
  "tin": [
   [
    "Xin chào bạn, cảm ơn bạn đã sử dụng dịch vụ."
   ],
   [
    {
     "t": "Mật khẩu của bạn hết hạn sau 1 giờ",
     "n": true,
     "g": "Thúc ép thời gian để bạn không kịp suy nghĩ."
    }
   ],
   [
    "Nhấn ",
    {
     "t": "mangxanh-secure.click/giu-mat-khau",
     "n": true,
     "g": "Tên miền lạ, không phải trang chính thức."
    },
    " và ",
    {
     "t": "nhập mật khẩu cũ để giữ nguyên",
     "n": true,
     "g": "Không dịch vụ nào bắt nhập mật khẩu cũ qua đường link trong thư."
    }
   ],
   [
    "Trân trọng, đội ngũ hỗ trợ khách hàng."
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu lừa đảo.",
  "hoc": "Thư dọa hết hạn mật khẩu kèm link lạ là thư giả.",
  "that": false,
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p5-g27",
  "phong": "p5",
  "loai": "soi",
  "kenh": "web",
  "tu": "tracnghiem-vui.fun",
  "phu": "Bạn hợp với nghề gì?",
  "tin": [
   [
    "Trả lời 4 câu để biết nghề hợp với bạn!"
   ],
   [
    "Câu 1: Bạn thích màu nào nhất trong cầu vồng?"
   ],
   [
    {
     "t": "Câu 2: Tên đường nơi bạn lớn lên?",
     "n": true,
     "g": "Câu hỏi bảo mật thường gặp khi khôi phục tài khoản."
    }
   ],
   [
    {
     "t": "Câu 3: Họ tên đầy đủ của mẹ bạn?",
     "n": true,
     "g": "Thông tin để giả mạo, lừa người thân của bạn."
    }
   ],
   [
    {
     "t": "Đăng nhập bằng email để xem kết quả",
     "n": true,
     "g": "Trang trắc nghiệm không cần tài khoản email của bạn."
    }
   ]
  ],
  "hoi": "Chạm vào những câu hỏi, yêu cầu đáng ngờ.",
  "hoc": "Trắc nghiệm vui hỏi câu bảo mật hoặc đòi đăng nhập: rời trang.",
  "that": false,
  "nguon": "Bình dân học vụ số - Dấu chân kỹ thuật số"
 },
 {
  "id": "p5-g28",
  "phong": "p5",
  "loai": "soi",
  "kenh": "zalo",
  "tu": "Tài khoản \"Hỗ trợ Zalo\"",
  "phu": "Người lạ",
  "tin": [
   [
    "Chào bạn, hệ thống phát hiện tài khoản của bạn có dấu hiệu lạ."
   ],
   [
    {
     "t": "Bạn đọc giúp mã 6 số vừa gửi về điện thoại",
     "n": true,
     "g": "Không ai được xin mã xác thực của bạn, kể cả \"bộ phận hỗ trợ\"."
    }
   ],
   [
    "để chúng tôi xác minh chủ tài khoản. ",
    {
     "t": "Nếu không, tài khoản bị khóa vĩnh viễn trong 15 phút",
     "n": true,
     "g": "Đe dọa và thúc ép thời gian."
    }
   ],
   [
    "Chúc bạn một ngày vui vẻ."
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu lừa đảo.",
  "hoc": "\"Hỗ trợ\" xin mã xác thực qua tin nhắn là kẻ gian.",
  "that": false,
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p5-g29",
  "phong": "p5",
  "loai": "soi",
  "kenh": "sms",
  "tu": "0909 xxx xxx",
  "phu": "Tin nhắn SMS",
  "tin": [
   [
    "Thong bao tu Truong THPT A ve viec cap nhat ho so hoc sinh nam hoc moi."
   ],
   [
    {
     "t": "Tai ung dung Ho So Hoc Sinh tai hosohs-capnhat.apk",
     "n": true,
     "g": "Tệp .apk tải từ link lạ có thể là mã độc, không phải ứng dụng chính thức."
    }
   ],
   [
    {
     "t": "Cap quyen Tro nang de ung dung tu dien thong tin",
     "n": true,
     "g": "Quyền Trợ năng cho ứng dụng điều khiển máy, đọc cả mã OTP."
    }
   ],
   [
    "Cam on phu huynh va hoc sinh."
   ]
  ],
  "hoi": "Chạm vào các dấu hiệu đáng ngờ.",
  "hoc": "Không cài tệp .apk từ link và không cấp quyền Trợ năng.",
  "that": false,
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 },
 {
  "id": "p5-g30",
  "phong": "p5",
  "loai": "soi",
  "kenh": "facebook",
  "tu": "Story của bạn thân",
  "phu": "Vừa đăng",
  "tin": [
   [
    "Thi xong rồi, đi ăn mừng thôi cả nhà ơi! "
   ],
   [
    {
     "t": "Ảnh vé xem phim có mã QR còn hạn",
     "n": true,
     "g": "Người khác có thể dùng mã QR để vào thay bạn."
    }
   ],
   [
    {
     "t": "Chia sẻ vị trí trực tiếp: đang ở quán trà sữa gần trường",
     "n": true,
     "g": "Chia sẻ vị trí công khai theo thời gian thực."
    }
   ],
   [
    "Cảm ơn mọi người đã cổ vũ suốt học kỳ."
   ]
  ],
  "hoi": "Chạm vào những chi tiết làm lộ thông tin.",
  "hoc": "Không đăng mã QR vé, không chia sẻ vị trí trực tiếp công khai.",
  "that": false,
  "nguon": "Bình dân học vụ số - Dấu chân kỹ thuật số"
 },
 {
  "id": "p5-g31",
  "phong": "p5",
  "loai": "soi",
  "kenh": "app",
  "tu": "Trò chơi Nông Trại Vui",
  "phu": "Ứng dụng mới cài",
  "tin": [
   [
    "Chào mừng bạn đến với nông trại! Trồng cây, nuôi gà và thu hoạch mỗi ngày."
   ],
   [
    "Để bắt đầu, trò chơi cần các quyền sau:"
   ],
   [
    {
     "t": "Đọc tin nhắn SMS",
     "n": true,
     "g": "Trò chơi trồng cây không cần đọc tin nhắn, nơi có mã OTP."
    }
   ],
   [
    {
     "t": "Truy cập toàn bộ danh bạ",
     "n": true,
     "g": "Danh bạ không liên quan đến việc chơi."
    }
   ],
   [
    {
     "t": "Ghi âm mọi lúc",
     "n": true,
     "g": "Ghi âm khi không dùng là xâm phạm quyền riêng tư."
    }
   ]
  ],
  "hoi": "Chạm vào các quyền KHÔNG phù hợp với trò chơi.",
  "hoc": "Quyền phải khớp chức năng. Trò chơi đòi đọc tin nhắn là dấu hiệu nguy hiểm.",
  "that": false,
  "nguon": "Bình dân học vụ số - Quản lý quyền riêng tư"
 },
 {
  "id": "p5-g32",
  "phong": "p5",
  "loai": "soi",
  "kenh": "telegram",
  "tu": "\"Admin nhóm Game Thủ Nhí\"",
  "phu": "Nhắn riêng",
  "tin": [
   [
    "Nhóm mình đang tặng skin hiếm cho thành viên tích cực nhé."
   ],
   [
    {
     "t": "Gửi tên đăng nhập và mật khẩu game",
     "n": true,
     "g": "Không bao giờ gửi mật khẩu cho người khác."
    }
   ],
   [
    {
     "t": "Tắt xác thực 2 lớp trước để admin vào nạp skin",
     "n": true,
     "g": "Tắt xác thực 2 lớp là mở cửa cho kẻ gian chiếm tài khoản."
    }
   ],
   [
    "Cảm ơn bạn đã ủng hộ nhóm thời gian qua."
   ]
  ],
  "hoi": "Chạm vào các yêu cầu nguy hiểm.",
  "hoc": "Ai bảo bạn tắt xác thực 2 lớp hoặc gửi mật khẩu đều là kẻ gian.",
  "that": false,
  "nguon": "Bình dân học vụ số - Quản lý an ninh mạng"
 }
];
