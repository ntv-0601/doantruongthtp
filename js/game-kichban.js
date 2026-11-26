/* =====================================================================
   game-kichban.js — KỊCH BẢN GAME "THOÁT BẪY LỪA ĐẢO"
   ---------------------------------------------------------------------
   Tệp này CHỈ chứa nội dung (không có code xử lý). Học sinh và giáo viên
   sửa, thêm tình huống ngay tại đây mà không cần đụng tới dt-game.js.

   Căn cứ nội dung:
   - Phong trào "Bình dân học vụ số", chương trình Người hùng DQ: 8 kỹ năng
     công dân số, trong đó có Quản lý an ninh mạng, Quản lý quyền riêng tư,
     Tư duy phản biện, Quản lý dấu chân kỹ thuật số.
   - Cảnh báo của Công an về các thủ đoạn nhắm vào học sinh, sinh viên:
     học bổng, trại hè giả; việc nhẹ lương cao; giả danh công an;
     "bắt cóc online"; lôi kéo mở, bán tài khoản ngân hàng.
   Mọi tên ngân hàng, cửa hàng, trang web trong game là TÊN GIẢ.

   CẤU TRÚC MỘT THẺ TÌNH HUỐNG
   {
     id: "p1-1",
     loai: "chon"  (chọn cách xử lý)  hoặc "soi" (chạm vào chỗ đáng ngờ),
     kenh: "zalo" | "sms" | "facebook" | "web" | "goi" | "email" | "telegram" | "app",
     tu: "Tên người gửi / tên trang",
     phu: "dòng phụ dưới tên (số điện thoại, đường link...)",
     tin: [ nội dung từng bong bóng tin nhắn ],
          với thẻ "soi", một bong bóng có thể là mảng các đoạn:
          ["chữ thường", {t:"đoạn đáng ngờ", n:true, g:"vì sao đáng ngờ"}]
     hoi: "câu hỏi",
     chon: [ {t:"lựa chọn", dung:true/false, g:"phản hồi"} ]   (thẻ "chon")
     hoc: "bài học rút ra (1 câu)"
   }
   Mỗi phòng 8 thẻ, mỗi thẻ 8 điểm, tổng 64. Đạt từ 52 điểm (≥ 80%)
   thì mở khóa phòng tiếp theo.
   ===================================================================== */
window.GAME_KICHBAN = {
  ten: "Thoát bẫy lừa đảo",
  moDau: "Một tuần bình thường của một đoàn viên lớp 10. Điện thoại liên tục báo tin: quà tặng, việc làm thêm, cuộc gọi lạ, cả tin nhắn từ \"người quen\". Vượt qua 5 phòng thử thách để trở thành Chiến binh an toàn mạng.",
  diemMoiThe: 8,
  nguongQua: 52,

  phong: [
    /* ================= PHÒNG 1 ================= */
    {
      ma: "p1", ten: "Trend giả mạo", moTa: "Quà tặng ảo, học bổng, trại hè, cuộc thi giả",
      kyNang: "Tư duy phản biện",
      nguyenTac: [
        "Quà, học bổng, giải thưởng thật không bắt bạn nộp phí trước.",
        "Tổ chức thật thu tiền vào tài khoản mang tên tổ chức, không vào tài khoản cá nhân.",
        "Càng bị thúc \"chỉ còn hôm nay\", càng phải dừng lại kiểm tra.",
      ],
      the: [
        {
          id: "p1-1", loai: "chon", kenh: "facebook", tu: "Chùa Bình An Online", phu: "Trang tạo 9 ngày trước · Được tài trợ",
          tin: ["🙏 Mùa an lành: gửi lời cầu nguyện và công đức online, nhà chùa làm lễ cầu an cho cả gia đình.", "Công đức chuyển khoản: Nguyen Van T · 0912xxxxxx · Ngân hàng Sao Việt. Ghi rõ họ tên để được hồi hướng."],
          hoi: "Bà nội muốn bạn chuyển giúp 500.000đ công đức qua trang này. Bạn làm gì?",
          chon: [
            { t: "Chuyển ngay vì là việc tốt.", dung: false, g: "Trang mới lập, chạy quảng cáo, nhận tiền vào tài khoản cá nhân: đó là dấu hiệu trang giả mạo chùa để thu tiền." },
            { t: "Khuyên bà dừng lại, cùng tìm kênh liên hệ chính thức của chùa hoặc gọi điện, đến chùa trực tiếp.", dung: true, g: "Đúng. Kiểm tra trang chính thức, số điện thoại của chùa trước khi gửi bất kỳ khoản tiền nào." },
            { t: "Chuyển một nửa trước cho chắc.", dung: false, g: "Chuyển ít hay nhiều thì tiền vẫn vào tay kẻ gian." },
          ],
          hoc: "Trang mới lập + tài khoản cá nhân + kêu gọi chuyển tiền = dừng lại kiểm tra.",
        },
        {
          id: "p1-2", loai: "soi", kenh: "facebook", tu: "Điện Máy Sao Vàng – Tri Ân", phu: "Trang tạo hôm qua",
          tin: [
            ["🎁 Kỷ niệm 20 năm thành lập, ", { t: "tặng 1.000 điện thoại cho học sinh", n: true, g: "Phần quà quá lớn, quá dễ nhận là mồi nhử quen thuộc." }, "!"],
            ["Cách nhận: ", { t: "chia sẻ bài viết và bình luận số điện thoại", n: true, g: "Bắt chia sẻ để lan truyền bẫy, xin số điện thoại để lừa tiếp." }, "."],
            ["Ban tổ chức sẽ gửi mã, ", { t: "bạn nhắn lại mã OTP để xác nhận", n: true, g: "OTP là chìa khóa tài khoản. Không ai cần OTP của bạn để tặng quà." }, "."],
            [{ t: "Chương trình kết thúc sau 2 giờ!", n: true, g: "Thúc ép thời gian để bạn không kịp suy nghĩ." }, " Xem cửa hàng gần bạn tại website."],
          ],
          hoi: "Chạm vào TẤT CẢ các chỗ đáng ngờ trong bài đăng, rồi bấm Xác nhận.",
          hoc: "Quà quá lớn, bắt chia sẻ, xin OTP, thúc ép thời gian: bốn dấu hiệu của bài tặng quà giả.",
        },
        {
          id: "p1-3", loai: "chon", kenh: "zalo", tu: "Trại hè Kỹ năng Quốc tế", phu: "Tài khoản cá nhân",
          tin: ["Chào em! Trại hè kỹ năng 7 ngày tại Singapore, học bổng giảm 70% chỉ còn 3 suất cuối.", "Em chuyển 2.000.000đ giữ chỗ vào số tài khoản cá nhân của cô điều phối trong hôm nay nhé, mai là hết suất."],
          hoi: "Bạn rất muốn đi. Bạn làm gì?",
          chon: [
            { t: "Chuyển tiền ngay kẻo hết suất.", dung: false, g: "\"Chỉ còn 3 suất\", \"trong hôm nay\" là chiêu thúc ép. Công an đã cảnh báo thủ đoạn trại hè, du học giả." },
            { t: "Báo bố mẹ, cùng kiểm tra pháp nhân, địa chỉ, số điện thoại tổ chức và hỏi nhà trường trước khi quyết định.", dung: true, g: "Đúng. Tổ chức thật có thông tin pháp nhân rõ ràng và nhận tiền vào tài khoản của tổ chức." },
            { t: "Xin cô gửi ảnh trại hè năm ngoái, đẹp thì chuyển.", dung: false, g: "Ảnh đẹp có thể lấy trên mạng. Ảnh không chứng minh được tổ chức có thật." },
          ],
          hoc: "Kiểm tra pháp nhân và tài khoản nhận tiền trước khi đóng bất kỳ khoản phí nào.",
        },
        {
          id: "p1-4", loai: "chon", kenh: "email", tu: "hocbong.toancau2026@gmail.com", phu: "Tiêu đề: CHÚC MỪNG EM ĐẠT HỌC BỔNG 100%",
          tin: ["Em đã được chọn nhận học bổng du học toàn phần dù chưa nộp hồ sơ.", "Để giữ học bổng, em nộp 3.500.000đ phí xét hồ sơ trong 48 giờ."],
          hoi: "Bạn nghĩ gì về thư này?",
          chon: [
            { t: "Đây là cơ hội hiếm, nộp phí ngay.", dung: false, g: "Không nộp hồ sơ mà vẫn \"trúng\" học bổng là điều vô lý." },
            { t: "Đây là dấu hiệu lừa đảo: chưa nộp hồ sơ, dùng gmail cá nhân, đòi phí. Không trả lời, báo giáo viên.", dung: true, g: "Đúng. Học bổng thật có quy trình xét chọn công khai, gửi từ địa chỉ chính thức của tổ chức." },
            { t: "Trả lời xin giảm phí.", dung: false, g: "Trả lời cho kẻ gian biết hộp thư của bạn đang hoạt động, bạn sẽ bị nhắm tiếp." },
          ],
          hoc: "Không ứng tuyển thì không thể trúng tuyển. Học bổng không đòi phí để \"giữ suất\".",
        },
        {
          id: "p1-5", loai: "soi", kenh: "web", tu: "dai-su-teen-2026.top/dang-ky", phu: "Cuộc thi Đại sứ hình ảnh tuổi teen",
          tin: [
            ["Họ và tên: ____  Trường: ____"],
            [{ t: "Ảnh chụp 2 mặt căn cước", n: true, g: "Cuộc thi ảnh không cần ảnh căn cước. Ảnh căn cước có thể bị dùng mở tài khoản, vay tiền đứng tên bạn." }],
            [{ t: "Tên đăng nhập và mật khẩu Facebook (để xác minh lượt bình chọn)", n: true, g: "Không trang hợp lệ nào xin mật khẩu của bạn. Đưa mật khẩu là mất tài khoản." }],
            ["Ảnh dự thi đẹp nhất của bạn"],
            [{ t: "Lệ phí 99.000đ chuyển vào tài khoản cá nhân của trưởng ban", n: true, g: "Thu phí qua tài khoản cá nhân, đơn vị tổ chức không rõ ràng." }],
          ],
          hoi: "Chạm vào những mục KHÔNG nên điền hoặc đáng ngờ trong mẫu đăng ký.",
          hoc: "Mẫu đăng ký đòi thông tin vượt quá mức cần thiết là dấu hiệu thu thập dữ liệu cá nhân.",
        },
        {
          id: "p1-6", loai: "chon", kenh: "app", tu: "AnimeMe – Biến ảnh thành anime", phu: "Ứng dụng tải từ đường link trên TikTok",
          tin: ["Để tạo ảnh anime, ứng dụng cần quyền: Danh bạ, Tin nhắn SMS, Trợ năng (điều khiển màn hình)."],
          hoi: "Bạn bè đang chơi trend này. Bạn làm gì?",
          chon: [
            { t: "Cho phép hết, chỉ là app chỉnh ảnh thôi.", dung: false, g: "Ứng dụng chỉnh ảnh không cần đọc tin nhắn hay điều khiển màn hình. Quyền Trợ năng có thể cho kẻ gian đọc mã OTP, điều khiển máy." },
            { t: "Không cài ứng dụng từ đường link lạ; chỉ dùng ứng dụng trong kho chính thức và từ chối quyền không liên quan.", dung: true, g: "Đúng. Quyền phải khớp với chức năng. Cài từ link lạ là cách phổ biến để cài mã độc." },
            { t: "Cài xong rồi gỡ ngay sau khi lấy ảnh.", dung: false, g: "Mã độc có thể đã lấy dữ liệu ngay trong lúc chạy." },
          ],
          hoc: "Quyền ứng dụng phải khớp chức năng. Không cài ứng dụng từ đường link lạ.",
        },
        {
          id: "p1-7", loai: "chon", kenh: "facebook", tu: "Livestream \"Minigame Tri Ân\"", phu: "Đang phát trực tiếp",
          tin: ["Chúc mừng bạn trả lời đúng, nhận thưởng 500.000đ!", "Để nhận thưởng, bạn chuyển 50.000đ phí xác minh tài khoản nhận thưởng."],
          hoi: "Bạn nên làm gì?",
          chon: [
            { t: "50 nghìn để nhận 500 nghìn vẫn lời, chuyển luôn.", dung: false, g: "Sau 50 nghìn sẽ là \"phí thuế\", \"phí mở khóa\"... Tiền mất dần mà không có thưởng." },
            { t: "Không chuyển. Giải thưởng thật không bắt người thắng trả tiền trước.", dung: true, g: "Đúng. Bất kỳ khoản phí nào để \"nhận thưởng\" đều là dấu hiệu lừa đảo." },
            { t: "Đưa số tài khoản để họ chuyển thưởng vào.", dung: false, g: "Cho số tài khoản thì chưa mất tiền, nhưng kẻ gian có thể dùng để lừa tiếp hoặc giả mạo bạn." },
          ],
          hoc: "Thưởng thật không có phí. Có phí là bẫy.",
        },
        {
          id: "p1-8", loai: "chon", kenh: "zalo", tu: "Minh (bạn cùng lớp)", phu: "Bạn bè",
          tin: ["Ê bình chọn giúp tao cuộc thi với!! Vào link này đăng nhập Facebook là bình chọn được: binhchon-hocsinh.click/vote"],
          hoi: "Tin nhắn đến từ tài khoản của bạn thân. Bạn làm gì?",
          chon: [
            { t: "Bạn thân nhờ thì làm luôn.", dung: false, g: "Tài khoản của bạn có thể đã bị chiếm và đang gửi link này cho cả danh bạ. Đăng nhập vào đó là bạn mất tài khoản tiếp." },
            { t: "Gọi điện hoặc hỏi trực tiếp Minh; không đăng nhập Facebook ở trang lạ.", dung: true, g: "Đúng. Xác minh qua kênh khác. Bình chọn thật không bắt đăng nhập ở trang lạ." },
            { t: "Chuyển link cho cả lớp cùng bình chọn.", dung: false, g: "Bạn vô tình giúp kẻ gian chiếm thêm nhiều tài khoản." },
          ],
          hoc: "Tin từ người quen vẫn phải xác minh nếu có link đăng nhập lạ.",
        },
      ],
    },

    /* ================= PHÒNG 2 ================= */
    {
      ma: "p2", ten: "Tin nhắn và đường link lạ", moTa: "Trúng thưởng, link rút gọn, mã OTP",
      kyNang: "Quản lý an ninh mạng",
      nguyenTac: [
        "OTP chỉ dành cho bạn. Không đọc, không gửi cho bất kỳ ai.",
        "Đọc kỹ tên miền trước khi bấm. Ngân hàng không gửi link để bạn \"xác thực\".",
        "Lỡ bấm, lỡ nhập: đổi mật khẩu, bật xác thực 2 lớp, báo người lớn ngay.",
      ],
      the: [
        {
          id: "p2-1", loai: "soi", kenh: "sms", tu: "NHSaoViet", phu: "Tin nhắn SMS",
          tin: [
            ["NHSaoViet: ", { t: "Tai khoan cua quy khach da bi khoa do dang nhap bat thuong", n: true, g: "Đe dọa khóa tài khoản để gây hoảng hốt." }, ". "],
            [{ t: "Xac thuc trong 30 phut", n: true, g: "Thúc ép thời gian." }, " tai: ", { t: "saoviet-bank.vip/xacthuc", n: true, g: "Tên miền lạ (.vip) không phải trang chính thức. Ngân hàng không gửi link yêu cầu đăng nhập." }],
            ["Tran trong."],
          ],
          hoi: "Chạm vào các dấu hiệu lừa đảo trong tin nhắn.",
          hoc: "Ngân hàng không gửi link yêu cầu bạn đăng nhập. Muốn kiểm tra, mở ứng dụng chính thức hoặc gọi tổng đài in sau thẻ.",
        },
        {
          id: "p2-2", loai: "chon", kenh: "goi", tu: "Số lạ 0868 xxx xxx", phu: "Cuộc gọi đến",
          tin: ["(Bạn vừa nhận SMS: \"Mã OTP của bạn là 482913. Không chia sẻ mã này.\")", "\"Alo em ơi, anh gửi nhầm mã vào số em, em đọc lại giúp anh với, anh cần gấp.\""],
          hoi: "Bạn làm gì?",
          chon: [
            { t: "Đọc mã giúp anh ấy vì mình không dùng.", dung: false, g: "Mã đó có thể dùng để đăng nhập, đổi mật khẩu tài khoản của chính bạn." },
            { t: "Không đọc mã, cúp máy; kiểm tra lại các tài khoản và đổi mật khẩu nếu thấy lạ.", dung: true, g: "Đúng. Không có chuyện \"gửi nhầm OTP\". Ai xin OTP của bạn đều là kẻ gian." },
            { t: "Đọc một nửa mã cho an toàn.", dung: false, g: "Kẻ gian có thể đoán phần còn lại hoặc gọi lại xin tiếp." },
          ],
          hoc: "OTP là của bạn. Không ai có quyền xin.",
        },
        {
          id: "p2-3", loai: "chon", kenh: "sms", tu: "0937 xxx xxx", phu: "Tin nhắn SMS",
          tin: ["CHUC MUNG! So thue bao cua ban trung thuong 01 xe may trong chuong trinh tri an khach hang.", "Nop phi truoc ba 2.000.000d vao tai khoan ca nhan de nhan xe trong ngay."],
          hoi: "Bạn làm gì?",
          chon: [
            { t: "Bàn với bố mẹ góp tiền nộp phí.", dung: false, g: "Không tham gia chương trình nào thì không thể trúng thưởng. Phí nộp trước là bẫy." },
            { t: "Bỏ qua, không trả lời; có thể báo tin nhắn rác cho nhà mạng.", dung: true, g: "Đúng. Không trả lời, không gọi lại số lạ." },
            { t: "Gọi lại số đó hỏi cho rõ.", dung: false, g: "Gọi lại là tạo cơ hội cho kẻ gian thuyết phục bạn." },
          ],
          hoc: "Không tham gia thì không thể trúng. Có phí nhận thưởng là lừa đảo.",
        },
        {
          id: "p2-4", loai: "soi", kenh: "email", tu: "Phòng Đào tạo <phongdaotao.thpt@gmail.com>", phu: "Tiêu đề: Kết quả xét học bổng học kỳ I",
          tin: [
            [{ t: "Gửi từ địa chỉ gmail cá nhân", n: true, g: "Nhà trường dùng địa chỉ, kênh thông báo chính thức, không phải gmail cá nhân lạ." }, " thay cho phòng đào tạo."],
            ["Em mở tệp đính kèm để xem kết quả: ", { t: "KetQuaHocBong.apk", n: true, g: "Tệp .apk là bộ cài ứng dụng Android, có thể chứa mã độc. Kết quả học bổng không phải là một ứng dụng." }],
            [{ t: "Tệp chỉ mở được trong 24 giờ.", n: true, g: "Thúc ép thời gian." }],
            ["Chúc em học tốt."],
          ],
          hoi: "Chạm vào các dấu hiệu đáng ngờ trong thư.",
          hoc: "Không mở tệp .apk, .exe gửi qua thư hay tin nhắn. Hỏi lại nhà trường qua kênh chính thức.",
        },
        {
          id: "p2-5", loai: "chon", kenh: "zalo", tu: "Nhóm lớp 10A1", phu: "Tin nhắn từ tài khoản lạ trong nhóm",
          tin: ["Ảnh lớp mình bị đăng lên trang này nè, vào xem có ai không: bit.ly/3xYz-anh-lop"],
          hoi: "Bạn làm gì với đường link rút gọn này?",
          chon: [
            { t: "Bấm xem ngay, chỉ là xem ảnh thôi.", dung: false, g: "Link rút gọn che giấu trang đích. Trang đó có thể đòi đăng nhập hoặc tải mã độc." },
            { t: "Không bấm; hỏi người gửi là ai và báo bí thư hoặc giáo viên chủ nhiệm kiểm tra.", dung: true, g: "Đúng. Tài khoản lạ trong nhóm kèm link gây tò mò là dấu hiệu quen thuộc." },
            { t: "Bấm bằng máy của bạn khác cho an toàn.", dung: false, g: "Máy nào bấm thì máy đó gặp rủi ro." },
          ],
          hoc: "Link rút gọn từ người lạ: không bấm, hỏi lại.",
        },
        {
          id: "p2-6", loai: "chon", kenh: "sms", tu: "GiaoHangNhanh", phu: "Tin nhắn SMS",
          tin: ["Don hang cua ban khong giao duoc do sai dia chi. Cap nhat dia chi va thanh toan phi 15.000d tai: ghn-capnhat.top"],
          hoi: "Bạn có đặt hàng online tuần này. Bạn làm gì?",
          chon: [
            { t: "Bấm link trả 15 nghìn, số tiền nhỏ.", dung: false, g: "Trang giả sẽ lấy số thẻ, thông tin ngân hàng của bạn chứ không chỉ 15 nghìn." },
            { t: "Mở ứng dụng mua hàng chính thức để kiểm tra đơn, hoặc gọi số tổng đài chính thức.", dung: true, g: "Đúng. Luôn kiểm tra trong ứng dụng gốc, không qua link trong tin nhắn." },
            { t: "Trả lời tin nhắn, gửi địa chỉ nhà.", dung: false, g: "Bạn vừa cho kẻ gian thêm thông tin cá nhân." },
          ],
          hoc: "Kiểm tra đơn hàng trong ứng dụng chính thức, không qua link lạ.",
        },
        {
          id: "p2-7", loai: "chon", kenh: "goi", tu: "Tổng đài tự động", phu: "Cuộc gọi đến",
          tin: ["\"Thuê bao của quý khách sẽ bị khóa sau 2 giờ do chưa chuẩn hóa thông tin. Bấm phím 9 để gặp tổng đài viên.\""],
          hoi: "Bạn làm gì?",
          chon: [
            { t: "Bấm phím 9 để được hướng dẫn.", dung: false, g: "Bấm phím sẽ nối bạn với kẻ gian, họ sẽ xin thông tin cá nhân hoặc OTP." },
            { t: "Cúp máy; nếu lo, tự liên hệ nhà mạng qua tổng đài hoặc cửa hàng chính thức.", dung: true, g: "Đúng. Tự liên hệ qua kênh bạn đã biết, không theo hướng dẫn của cuộc gọi lạ." },
            { t: "Đọc số căn cước để họ chuẩn hóa.", dung: false, g: "Thông tin căn cước có thể bị dùng để làm giả hồ sơ đứng tên bạn." },
          ],
          hoc: "Cuộc gọi dọa khóa thuê bao: cúp máy, tự kiểm tra qua kênh chính thức.",
        },
        {
          id: "p2-8", loai: "chon", kenh: "app", tu: "Facebook", phu: "Bạn vừa lỡ nhập mật khẩu vào một trang giả",
          tin: ["Bạn nhận ra trang \"bình chọn\" vừa nhập mật khẩu là trang giả."],
          hoi: "Việc cần làm NGAY là gì?",
          chon: [
            { t: "Đổi mật khẩu ngay, bật xác thực 2 lớp, đăng xuất các thiết bị lạ, báo bạn bè cảnh giác.", dung: true, g: "Đúng. Làm càng sớm càng giảm thiệt hại. Nếu dùng chung mật khẩu cho tài khoản khác, đổi luôn những tài khoản đó." },
            { t: "Chờ xem có chuyện gì không rồi tính.", dung: false, g: "Kẻ gian thường hành động trong vài phút: đổi mật khẩu, nhắn vay tiền bạn bè." },
            { t: "Xóa ứng dụng Facebook khỏi điện thoại.", dung: false, g: "Xóa ứng dụng không làm tài khoản an toàn. Kẻ gian vẫn đăng nhập được từ máy khác." },
          ],
          hoc: "Lỡ lộ mật khẩu: đổi ngay, bật 2 lớp, đăng xuất thiết bị lạ, báo bạn bè.",
        },
      ],
    },

    /* ================= PHÒNG 3 ================= */
    {
      ma: "p3", ten: "Mạo danh người quen", moTa: "Giả thầy cô, người thân, cơ quan công an",
      kyNang: "Quản lý quyền riêng tư và tư duy phản biện",
      nguyenTac: [
        "Người quen nhắn vay tiền, nhờ chuyển tiền: gọi lại số bạn đã biết để xác minh.",
        "Công an không làm việc qua điện thoại, mạng xã hội để yêu cầu chuyển tiền hay giữ bí mật với gia đình.",
        "Bị đe dọa, bị bắt giữ bí mật: dừng lại và báo ngay bố mẹ, thầy cô. Đó không phải lỗi của bạn.",
      ],
      the: [
        {
          id: "p3-1", loai: "chon", kenh: "zalo", tu: "Cô Hương (GVCN)", phu: "Tài khoản mới, ảnh đại diện lấy từ Facebook của cô",
          tin: ["Các em thu quỹ lớp 200.000đ, chuyển vào tài khoản Tran Thi B giúp cô, cô đang bận họp nên nhờ người nhà nhận. Chiều nay hạn chót nhé."],
          hoi: "Bạn làm gì?",
          chon: [
            { t: "Chuyển luôn vì có ảnh cô.", dung: false, g: "Ảnh đại diện dễ sao chép. Tài khoản mới + nhận tiền vào tên người khác + gấp là dấu hiệu giả mạo." },
            { t: "Hỏi lại cô trực tiếp ở lớp hoặc gọi số điện thoại của cô mà lớp đã có; báo lớp trưởng.", dung: true, g: "Đúng. Xác minh qua kênh đã biết trước." },
            { t: "Nhắn hỏi \"có phải cô không ạ?\" trên chính tài khoản đó.", dung: false, g: "Kẻ gian sẽ trả lời \"đúng rồi em\". Hỏi trên kênh đáng ngờ không có giá trị xác minh." },
          ],
          hoc: "Xác minh qua kênh khác, kênh bạn đã biết từ trước.",
        },
        {
          id: "p3-2", loai: "soi", kenh: "sms", tu: "0789 xxx xxx", phu: "Số lạ",
          tin: [
            ["Con ơi, ", { t: "mẹ bị tai nạn đang cấp cứu", n: true, g: "Đánh vào cảm xúc, khiến bạn hoảng loạn." }, " ở bệnh viện."],
            [{ t: "Chuyển gấp 10 triệu tiền mổ", n: true, g: "Đòi tiền gấp." }, " vào ", { t: "tài khoản của bác sĩ: Le Van C", n: true, g: "Bệnh viện thu viện phí qua quầy hoặc tài khoản của bệnh viện, không qua tài khoản cá nhân bác sĩ." }, "."],
            [{ t: "Đừng gọi lại, máy mẹ hỏng rồi.", n: true, g: "Chặn đường xác minh của bạn." }, " ", { t: "Nhanh lên con.", n: true, g: "Thúc giục để bạn không kịp suy nghĩ." }],
          ],
          hoi: "Chạm vào các dấu hiệu lừa đảo.",
          hoc: "Tin gấp, đòi tiền, cấm gọi lại: gọi ngay cho bố mẹ, người thân bằng số đã biết.",
        },
        {
          id: "p3-3", loai: "chon", kenh: "zalo", tu: "Linh (bạn thân)", phu: "Cuộc gọi video 3 giây, hình mờ, rồi tắt",
          tin: ["Mạng lag quá. Tao đang kẹt, cho tao vay 2 triệu, tối tao trả. Chuyển vào số này nha, tài khoản của anh họ tao."],
          hoi: "Bạn đã thấy mặt Linh trong video. Bạn làm gì?",
          chon: [
            { t: "Đã thấy mặt rồi, chuyển luôn.", dung: false, g: "Video ngắn, mờ có thể là video ghép mặt (deepfake). Tài khoản nhận tiền lại không phải của Linh." },
            { t: "Gọi điện thoại bình thường cho Linh hoặc hỏi một chuyện chỉ hai đứa biết trước khi làm gì.", dung: true, g: "Đúng. Gọi lại số đã biết và hỏi chuyện riêng giúp vạch trần kẻ giả mạo." },
            { t: "Chuyển một nửa cho Linh đỡ.", dung: false, g: "Vẫn là chuyển tiền cho kẻ gian." },
          ],
          hoc: "Video vài giây không đủ để tin. Gọi lại và hỏi điều chỉ người thật biết.",
        },
        {
          id: "p3-4", loai: "chon", kenh: "goi", tu: "\"Công an quận\"", phu: "Cuộc gọi video, người mặc đồng phục",
          tin: ["\"Em có liên quan đến một vụ án rửa tiền. Em phải giữ bí mật, không được nói với bố mẹ. Vào phòng riêng, cài ứng dụng này để làm việc trực tuyến với cơ quan điều tra.\""],
          hoi: "Bạn làm gì?",
          chon: [
            { t: "Làm theo vì sợ bị bắt.", dung: false, g: "Đây đúng là kịch bản \"bắt cóc online\". Kẻ gian dùng nỗi sợ để cô lập và điều khiển bạn." },
            { t: "Cúp máy và báo ngay bố mẹ hoặc thầy cô. Cơ quan công an không làm việc kiểu này.", dung: true, g: "Đúng. Cơ quan tiến hành tố tụng không làm việc qua video call để yêu cầu chuyển tiền, cài ứng dụng hay giữ bí mật với gia đình." },
            { t: "Hỏi họ số hiệu, tên cán bộ rồi làm theo.", dung: false, g: "Kẻ gian có sẵn tên, số hiệu, giấy tờ giả. Không làm theo bất kỳ yêu cầu nào." },
          ],
          hoc: "Bị yêu cầu giữ bí mật với gia đình là dấu hiệu nguy hiểm nhất. Nói với người lớn ngay.",
        },
        {
          id: "p3-5", loai: "chon", kenh: "telegram", tu: "\"Cán bộ điều tra\"", phu: "Tin nhắn tiếp theo",
          tin: ["\"Em thuê một phòng khách sạn, tắt định vị, không liên lạc với ai. Sau đó gọi về cho bố mẹ nói em đang bị tạm giữ, cần chuyển tiền bảo lãnh vào tài khoản này.\""],
          hoi: "Đây là gì và bạn làm gì?",
          chon: [
            { t: "Đây là thủ tục điều tra, phải làm theo.", dung: false, g: "Không có thủ tục nào như vậy. Đây là thủ đoạn cô lập nạn nhân để tống tiền gia đình." },
            { t: "Đây là \"bắt cóc online\". Dừng ngay, liên lạc bố mẹ, thầy cô; nếu bị đe dọa, gọi 113.", dung: true, g: "Đúng. Liên lạc với gia đình là cách phá bẫy nhanh nhất." },
            { t: "Làm theo nhưng nhắn riêng cho bạn thân biết.", dung: false, g: "Vẫn tự cô lập mình. Phải báo người lớn và dừng làm theo." },
          ],
          hoc: "Không bao giờ tự cô lập theo yêu cầu của người lạ.",
        },
        {
          id: "p3-6", loai: "soi", kenh: "facebook", tu: "Đoàn Trường THPT A (trang mới)", phu: "Tin nhắn Messenger",
          tin: [
            ["Chúc mừng em được chọn đi giao lưu thanh niên tiêu biểu toàn quốc!"],
            [{ t: "Em gửi ảnh 2 mặt căn cước", n: true, g: "Đoàn trường đã có hồ sơ học sinh, không xin ảnh căn cước qua tin nhắn." }, " và ", { t: "ảnh chân dung cầm căn cước", n: true, g: "Ảnh cầm căn cước là thứ kẻ gian cần để mở tài khoản, vay tiền đứng tên bạn." }, "."],
            [{ t: "Trang mới lập, không phải trang Đoàn trường em vẫn theo dõi", n: true, g: "Trang giả mạo tổ chức quen thuộc." }, ". ", { t: "Hạn chót tối nay.", n: true, g: "Thúc ép thời gian." }],
          ],
          hoi: "Chạm vào các dấu hiệu đáng ngờ.",
          hoc: "Không gửi ảnh căn cước, ảnh cầm căn cước qua tin nhắn. Hỏi lại Đoàn trường trực tiếp.",
        },
        {
          id: "p3-7", loai: "chon", kenh: "facebook", tu: "Người bạn trên mạng", phu: "Kết bạn 2 tuần, nhắn tin mỗi ngày",
          tin: ["Mình tin bạn lắm. Bạn gửi cho mình vài tấm ảnh riêng tư đi, coi như bí mật của hai đứa, đừng kể với ai nha."],
          hoi: "Bạn làm gì?",
          chon: [
            { t: "Gửi vì hai người đã thân.", dung: false, g: "Thân thiết nhanh, đòi ảnh riêng tư, đòi giữ bí mật là chiêu \"thao túng cảm xúc\" Công an đã cảnh báo." },
            { t: "Không gửi, ngừng trò chuyện, chặn và kể với người lớn tin cậy.", dung: true, g: "Đúng. Bạn có quyền từ chối. Người tốt không bắt bạn giữ bí mật với gia đình." },
            { t: "Gửi ảnh đã che mặt.", dung: false, g: "Bất kỳ ảnh riêng tư nào cũng có thể bị dùng để đe dọa." },
          ],
          hoc: "Người lạ đòi ảnh riêng tư và đòi giữ bí mật: không gửi, chặn, báo người lớn.",
        },
        {
          id: "p3-8", loai: "chon", kenh: "telegram", tu: "Tài khoản ẩn danh", phu: "Tin nhắn đe dọa",
          tin: ["Nếu không chuyển 3 triệu trong tối nay, tao sẽ gửi ảnh của mày cho cả trường."],
          hoi: "Một bạn cùng lớp nhận được tin này và kể với bạn. Bạn khuyên gì?",
          chon: [
            { t: "Chuyển tiền cho xong chuyện.", dung: false, g: "Trả tiền thường dẫn tới đòi thêm. Không có gì bảo đảm kẻ gian dừng lại." },
            { t: "Không trả tiền, không xóa tin nhắn (chụp lại làm bằng chứng), báo ngay bố mẹ, thầy cô và công an.", dung: true, g: "Đúng. Đây là hành vi phạm tội. Bạn ấy là nạn nhân, không có lỗi. Người lớn và công an sẽ hỗ trợ." },
            { t: "Xóa hết tài khoản mạng xã hội rồi im lặng.", dung: false, g: "Im lặng một mình khiến nạn nhân bị cô lập. Cần báo người lớn và giữ bằng chứng." },
          ],
          hoc: "Bị đe dọa: không trả tiền, giữ bằng chứng, báo người lớn và công an. Không phải lỗi của bạn.",
        },
      ],
    },

    /* ================= PHÒNG 4 ================= */
    {
      ma: "p4", ten: "Việc nhẹ lương cao và game", moTa: "Cộng tác viên online, nạp game lậu, bán tài khoản ngân hàng",
      kyNang: "Tư duy phản biện",
      nguyenTac: [
        "Việc thật trả lương cho bạn, không bắt bạn nạp tiền.",
        "Mua bán, cho thuê tài khoản ngân hàng là vi phạm pháp luật, tiếp tay cho tội phạm.",
        "Giao dịch game: chỉ qua kênh chính thức của nhà phát hành.",
      ],
      the: [
        {
          id: "p4-1", loai: "chon", kenh: "telegram", tu: "Nhóm \"Kiếm tiền online cho HS\"", phu: "Bạn đã làm 2 nhiệm vụ",
          tin: ["Bạn bấm thích 10 video, nhận 50.000đ (đã nhận thật).", "Nhiệm vụ VIP: nạp 500.000đ, hoàn lại 750.000đ sau 10 phút. Còn 2 suất!"],
          hoi: "Bạn đã được trả tiền thật. Bạn làm gì?",
          chon: [
            { t: "Nạp vì họ đã trả tiền đàng hoàng.", dung: false, g: "Trả ít lúc đầu để tạo niềm tin là bước 1 của kịch bản. Sau khi nạp, bạn sẽ bị đòi nạp thêm để \"rút tiền\"." },
            { t: "Dừng lại, rời nhóm. Việc làm thật không bao giờ bắt người làm nạp tiền.", dung: true, g: "Đúng. Đây là thủ đoạn \"làm nhiệm vụ\" Công an đã cảnh báo nhiều lần." },
            { t: "Nạp 100 nghìn thử trước.", dung: false, g: "Số nhỏ cũng là cửa vào cái bẫy lớn hơn." },
          ],
          hoc: "Phải nạp tiền mới được làm việc thì đó không phải việc làm.",
        },
        {
          id: "p4-2", loai: "soi", kenh: "facebook", tu: "Tuyển Dụng Online 24h", phu: "Bài đăng trong nhóm học sinh",
          tin: [
            ["TUYỂN GẤP ", { t: "học sinh làm thêm tại nhà 300-500k/ngày", n: true, g: "Thu nhập cao bất thường cho việc không cần kỹ năng." }, "."],
            [{ t: "Không cần kinh nghiệm, chỉ cần điện thoại", n: true, g: "Mô tả công việc mơ hồ." }, "."],
            ["Ứng tuyển: ", { t: "nhắn Telegram, không gọi điện", n: true, g: "Chỉ liên lạc qua kênh khó truy vết." }, "."],
            [{ t: "Ưu tiên bạn có tài khoản ngân hàng riêng.", n: true, g: "Kẻ gian có thể nhắm tới việc mượn, mua tài khoản ngân hàng của bạn để nhận tiền phạm pháp." }],
          ],
          hoi: "Chạm vào các dấu hiệu của bài tuyển dụng giả.",
          hoc: "Lương cao, việc mơ hồ, chỉ liên lạc qua Telegram: tránh xa.",
        },
        {
          id: "p4-3", loai: "chon", kenh: "telegram", tu: "Người lạ", phu: "Tin nhắn riêng",
          tin: ["Em mở giúp anh một tài khoản ngân hàng mới đứng tên em, gửi anh tên đăng nhập và mật khẩu. Anh trả 500.000đ, không mất gì của em cả."],
          hoi: "Bạn nghĩ sao?",
          chon: [
            { t: "Được tiền mà không mất gì, đồng ý.", dung: false, g: "Tài khoản đứng tên bạn sẽ được dùng để nhận tiền lừa đảo, rửa tiền. Người đứng tên có thể bị xử lý theo pháp luật." },
            { t: "Từ chối. Mua bán, cho thuê tài khoản ngân hàng là vi phạm pháp luật, có thể bị phạt nặng hoặc truy cứu hình sự.", dung: true, g: "Đúng. Công an đã cảnh báo thủ đoạn lôi kéo học sinh, sinh viên mở, bán tài khoản ngân hàng (Điều 291 Bộ luật Hình sự)." },
            { t: "Chỉ cho mượn vài ngày rồi đổi mật khẩu.", dung: false, g: "Cho mượn cũng là vi phạm. Vài ngày đủ để tài khoản dính vào giao dịch phạm pháp." },
          ],
          hoc: "Tài khoản ngân hàng, căn cước của bạn: không bán, không cho thuê, không cho mượn.",
        },
        {
          id: "p4-4", loai: "chon", kenh: "facebook", tu: "Shop Kim Cương Giá Rẻ", phu: "Bình luận dưới video game",
          tin: ["Kim cương giảm 50%, nạp qua shop rẻ hơn nạp chính thức! Chuyển khoản trước, 5 phút có ngay."],
          hoi: "Bạn muốn nạp game. Bạn làm gì?",
          chon: [
            { t: "Rẻ một nửa, chuyển ngay.", dung: false, g: "Giá rẻ bất thường + chuyển khoản trước cho người lạ = rủi ro mất tiền, thậm chí bị khóa tài khoản game." },
            { t: "Chỉ nạp qua cổng chính thức của nhà phát hành và hỏi ý kiến bố mẹ.", dung: true, g: "Đúng. Kênh chính thức có hóa đơn, có hỗ trợ khi lỗi." },
            { t: "Hẹn shop đưa mật khẩu game để họ nạp hộ.", dung: false, g: "Đưa mật khẩu là mất tài khoản game." },
          ],
          hoc: "Nạp game qua kênh chính thức. Giá rẻ bất thường là mồi.",
        },
        {
          id: "p4-5", loai: "chon", kenh: "web", tu: "napgame-x3.online", phu: "Trang nạp game lạ",
          tin: ["NẠP 100K NHẬN X3! Đăng nhập bằng tài khoản Facebook hoặc Google để nạp."],
          hoi: "Trang yêu cầu đăng nhập. Bạn làm gì?",
          chon: [
            { t: "Đăng nhập bằng Google cho nhanh.", dung: false, g: "Trang giả đăng nhập sẽ lấy mật khẩu Google, kéo theo email, ảnh, các tài khoản liên kết." },
            { t: "Rời trang. Không đăng nhập tài khoản mạng xã hội, email trên trang lạ.", dung: true, g: "Đúng. Ưu đãi \"x3\" không có thật." },
            { t: "Tạo tài khoản mới với mật khẩu giống tài khoản chính.", dung: false, g: "Dùng lại mật khẩu cũ là giao chìa khóa cho kẻ gian." },
          ],
          hoc: "Không đăng nhập tài khoản chính trên trang lạ.",
        },
        {
          id: "p4-6", loai: "soi", kenh: "zalo", tu: "Shop Thời Trang Teen", phu: "Tin nhắn tuyển cộng tác viên",
          tin: [
            ["Shop cần ", { t: "người đặt đơn ảo để tăng tương tác", n: true, g: "Đặt đơn ảo là gian lận, và là bước đầu của bẫy." }, "."],
            [{ t: "Em ứng trước tiền hàng", n: true, g: "Người làm việc phải bỏ tiền trước là dấu hiệu lừa đảo." }, ", ", { t: "shop hoàn tiền kèm 10% hoa hồng", n: true, g: "Hứa lời cao để dụ đặt đơn giá trị lớn dần." }, "."],
            ["Mỗi ngày 5 đơn, làm tại nhà."],
          ],
          hoi: "Chạm vào các dấu hiệu lừa đảo.",
          hoc: "Ứng tiền trước để \"nhận hoa hồng\" là kịch bản lừa đảo cộng tác viên.",
        },
        {
          id: "p4-7", loai: "chon", kenh: "zalo", tu: "Người chơi cùng game", phu: "Chuyển từ game sang Zalo",
          tin: ["Đổi skin với tao không? Bấm link này đăng nhập tài khoản game để xác nhận giao dịch: trade-skin.site"],
          hoi: "Bạn làm gì?",
          chon: [
            { t: "Bấm link đăng nhập để đổi.", dung: false, g: "Trang giả chiếm tài khoản game của bạn." },
            { t: "Chỉ giao dịch trong tính năng của game; không đăng nhập qua link lạ.", dung: true, g: "Đúng. Kéo bạn ra khỏi game sang ứng dụng khác là dấu hiệu lừa." },
            { t: "Gửi mật khẩu để bạn ấy tự làm hộ.", dung: false, g: "Không bao giờ đưa mật khẩu cho người khác." },
          ],
          hoc: "Giao dịch game ngoài hệ thống chính thức: không đáng tin.",
        },
        {
          id: "p4-8", loai: "chon", kenh: "telegram", tu: "Nhóm \"Nhiệm vụ VIP\"", phu: "Bạn đã nạp 500.000đ",
          tin: ["Tài khoản của bạn bị treo do thao tác sai. Nạp thêm 2.000.000đ để mở khóa và rút toàn bộ 2.750.000đ về."],
          hoi: "Bạn đã lỡ nạp tiền. Giờ làm gì?",
          chon: [
            { t: "Nạp thêm để lấy lại tiền cũ.", dung: false, g: "Nạp thêm chỉ mất thêm. Không có khoản rút nào cả." },
            { t: "Dừng ngay, không nạp thêm, chụp lại bằng chứng, báo bố mẹ, liên hệ ngân hàng và công an.", dung: true, g: "Đúng. Báo càng sớm càng có cơ hội ngăn chặn. Bị lừa không có gì đáng xấu hổ." },
            { t: "Giấu bố mẹ, tự tìm cách lấy lại.", dung: false, g: "Kẻ gian lợi dụng việc nạn nhân giấu chuyện để lừa thêm." },
          ],
          hoc: "Lỡ mất tiền: dừng, giữ bằng chứng, báo người lớn, ngân hàng, công an.",
        },
      ],
    },

    /* ================= PHÒNG 5 ================= */
    {
      ma: "p5", ten: "Bảo vệ tài khoản và dữ liệu", moTa: "Mật khẩu, xác thực 2 lớp, lộ thông tin cá nhân",
      kyNang: "Quản lý dấu chân kỹ thuật số",
      nguyenTac: [
        "Mật khẩu dài, khác nhau cho từng tài khoản; bật xác thực 2 lớp.",
        "Không đăng ảnh căn cước, vé, giấy tờ, địa chỉ nhà lên mạng.",
        "Thông tin đã đăng lên mạng rất khó xóa hẳn: nghĩ trước khi đăng.",
      ],
      the: [
        {
          id: "p5-1", loai: "chon", kenh: "app", tu: "Tạo mật khẩu mới", phu: "Chọn mật khẩu an toàn nhất",
          tin: ["Bạn cần đặt mật khẩu cho tài khoản email."],
          hoi: "Mật khẩu nào an toàn nhất?",
          chon: [
            { t: "Hoa2009", dung: false, g: "Tên và năm sinh dễ đoán từ thông tin trên mạng." },
            { t: "12345678", dung: false, g: "Thuộc nhóm mật khẩu bị dò đầu tiên." },
            { t: "Meo-di-hoc-luc-7h-sang!", dung: true, g: "Đúng. Cụm từ dài, có dấu nối và ký tự đặc biệt: dễ nhớ với bạn, khó đoán với người khác." },
          ],
          hoc: "Mật khẩu tốt là một câu dài chỉ bạn hiểu.",
        },
        {
          id: "p5-2", loai: "chon", kenh: "app", tu: "Cài đặt bảo mật", phu: "Xác thực 2 lớp",
          tin: ["Lỡ có người biết mật khẩu của bạn. Tính năng nào vẫn chặn được họ đăng nhập?"],
          hoi: "Chọn đáp án đúng.",
          chon: [
            { t: "Xác thực 2 lớp: đăng nhập phải nhập thêm mã gửi về điện thoại của bạn.", dung: true, g: "Đúng. Có mật khẩu mà không có điện thoại của bạn thì vẫn không vào được." },
            { t: "Đổi ảnh đại diện.", dung: false, g: "Không liên quan đến bảo mật." },
            { t: "Ẩn danh sách bạn bè.", dung: false, g: "Giúp riêng tư hơn nhưng không chặn được đăng nhập." },
          ],
          hoc: "Bật xác thực 2 lớp cho email và mạng xã hội.",
        },
        {
          id: "p5-3", loai: "soi", kenh: "facebook", tu: "Trang cá nhân của bạn", phu: "Bài sắp đăng",
          tin: [
            ["Lần đầu có căn cước nè 😍 ", { t: "(ảnh rõ 2 mặt căn cước)", n: true, g: "Lộ số định danh, ngày sinh, quê quán, đủ để kẻ gian làm giả hồ sơ." }],
            ["Check-in nhà mới ", { t: "số 12, ngõ 34, đường Hoa Sữa", n: true, g: "Lộ địa chỉ nhà." }],
            ["Mai đi thi học sinh giỏi, ", { t: "ảnh thẻ dự thi có mã vạch", n: true, g: "Mã vạch, số báo danh có thể bị dùng để tra cứu, giả mạo." }],
            ["Yêu cả nhà nhiều ❤️"],
          ],
          hoi: "Chạm vào những thông tin KHÔNG nên đăng.",
          hoc: "Ảnh giấy tờ, địa chỉ nhà, mã vạch: không đăng công khai.",
        },
        {
          id: "p5-4", loai: "chon", kenh: "app", tu: "Thói quen của bạn", phu: "",
          tin: ["Bạn dùng một mật khẩu cho Facebook, email, tài khoản game và tài khoản học tập."],
          hoi: "Điều gì có thể xảy ra?",
          chon: [
            { t: "Không sao, dễ nhớ là được.", dung: false, g: "Một trang bị lộ mật khẩu thì mọi tài khoản dùng chung đều gặp nguy." },
            { t: "Lộ ở một nơi là kẻ gian thử vào tất cả. Nên dùng mật khẩu khác nhau, có thể nhờ trình quản lý mật khẩu.", dung: true, g: "Đúng. Ít nhất email và mạng xã hội phải có mật khẩu riêng." },
            { t: "Chỉ cần đổi mật khẩu mỗi năm.", dung: false, g: "Đổi định kỳ không giải quyết việc dùng chung." },
          ],
          hoc: "Mỗi tài khoản quan trọng một mật khẩu riêng.",
        },
        {
          id: "p5-5", loai: "chon", kenh: "app", tu: "Máy tính phòng tin học", phu: "Máy dùng chung",
          tin: ["Bạn vừa đăng nhập Facebook để gửi bài cho cô. Trình duyệt hỏi: \"Lưu mật khẩu?\""],
          hoi: "Bạn làm gì?",
          chon: [
            { t: "Lưu để lần sau đỡ gõ.", dung: false, g: "Người dùng máy sau có thể vào tài khoản của bạn." },
            { t: "Không lưu, đăng xuất khi xong, đóng trình duyệt.", dung: true, g: "Đúng. Trên máy dùng chung luôn đăng xuất." },
            { t: "Không lưu nhưng để nguyên tab.", dung: false, g: "Tài khoản vẫn đang đăng nhập." },
          ],
          hoc: "Máy dùng chung: không lưu mật khẩu, luôn đăng xuất.",
        },
        {
          id: "p5-6", loai: "chon", kenh: "facebook", tu: "Trắc nghiệm vui", phu: "\"Bạn là nhân vật hoạt hình nào?\"",
          tin: ["Trả lời 3 câu: Tên thời con gái của mẹ? Tên thú cưng đầu tiên? Trường tiểu học của bạn?"],
          hoi: "Có gì không ổn?",
          chon: [
            { t: "Không sao, chỉ là trò vui.", dung: false, g: "Đây chính là câu hỏi bảo mật thường dùng để lấy lại mật khẩu." },
            { t: "Các câu hỏi giống câu hỏi bảo mật; trả lời công khai là giúp kẻ gian chiếm tài khoản.", dung: true, g: "Đúng. Trò chơi dạng này thu thập dữ liệu cá nhân." },
            { t: "Chỉ nguy hiểm nếu có hỏi số điện thoại.", dung: false, g: "Thông tin nhỏ ghép lại thành bức tranh đầy đủ về bạn." },
          ],
          hoc: "Cẩn thận với trò chơi hỏi thông tin cá nhân.",
        },
        {
          id: "p5-7", loai: "chon", kenh: "app", tu: "Wi-Fi miễn phí", phu: "Quán trà sữa, không cần mật khẩu",
          tin: ["Bạn cần chuyển khoản tiền học thêm."],
          hoi: "Nên làm thế nào?",
          chon: [
            { t: "Dùng Wi-Fi miễn phí cho tiết kiệm.", dung: false, g: "Wi-Fi công cộng không mật khẩu có thể bị người khác theo dõi." },
            { t: "Dùng mạng 4G của mình cho giao dịch tiền; Wi-Fi công cộng chỉ để đọc tin.", dung: true, g: "Đúng. Giao dịch quan trọng nên dùng mạng riêng." },
            { t: "Hỏi chủ quán mật khẩu Wi-Fi khác.", dung: false, g: "Vẫn là mạng dùng chung với nhiều người lạ." },
          ],
          hoc: "Giao dịch tiền: dùng mạng riêng, không dùng Wi-Fi công cộng.",
        },
        {
          id: "p5-8", loai: "chon", kenh: "app", tu: "Ứng dụng \"Tăng tốc pin\"", phu: "Đòi quyền Trợ năng và đọc tin nhắn",
          tin: ["Điện thoại của bạn nóng, hao pin nhanh sau khi cài ứng dụng này. Ứng dụng xin quyền \"Trợ năng\"."],
          hoi: "Bạn làm gì?",
          chon: [
            { t: "Cấp quyền cho ứng dụng tối ưu.", dung: false, g: "Quyền Trợ năng cho ứng dụng điều khiển máy, đọc màn hình, kể cả mã OTP." },
            { t: "Từ chối, gỡ ứng dụng, đổi mật khẩu quan trọng và báo người lớn kiểm tra máy.", dung: true, g: "Đúng. Máy nóng, hao pin bất thường sau khi cài ứng dụng lạ là dấu hiệu cần kiểm tra ngay." },
            { t: "Khởi động lại máy là xong.", dung: false, g: "Khởi động lại không gỡ được ứng dụng độc hại." },
          ],
          hoc: "Không cấp quyền Trợ năng cho ứng dụng không rõ nguồn gốc.",
        },
      ],
    },
  ],

  /* ============ BÀI KIỂM TRA TRƯỚC / SAU (2 đề song song) ============
     Mỗi đề 10 câu, mỗi câu đo cùng một hiểu biết ở đề A và đề B
     (câu 1 của A và B cùng đo "OTP", câu 2 cùng đo "giả danh công an"...).
     Người chơi làm đề A trước thì làm đề B sau, hoặc ngược lại (chia ngẫu nhiên),
     để tránh nhớ đáp án.                                                     */
  kiemTra: {
    A: [
      { h: "Có người gọi nói gửi nhầm mã OTP vào máy bạn, xin đọc lại. Bạn nên:", c: ["Đọc mã giúp", "Không đọc, cúp máy", "Đọc 3 số đầu"], d: 1 },
      { h: "\"Công an\" gọi video, yêu cầu bạn giữ bí mật với bố mẹ và cài ứng dụng để làm việc. Đây là:", c: ["Thủ tục điều tra bình thường", "Dấu hiệu lừa đảo, bắt cóc online", "Cần làm theo nếu họ mặc đồng phục"], d: 1 },
      { h: "Đường link nào đáng tin nhất để đăng nhập ngân hàng Sao Việt?", c: ["saoviet-bank.vip", "Ứng dụng chính thức của ngân hàng tải từ kho ứng dụng", "bit.ly/saoviet"], d: 1 },
      { h: "Việc làm online trả 50.000đ, sau đó đòi nạp 500.000đ để nhận 750.000đ. Đây là:", c: ["Cơ hội kiếm tiền", "Thủ đoạn lừa đảo làm nhiệm vụ", "Bình thường nếu đã được trả tiền"], d: 1 },
      { h: "Bạn thân nhắn vay tiền gấp, chuyển vào tài khoản người khác. Bạn nên:", c: ["Chuyển ngay", "Gọi điện cho bạn bằng số đã biết để xác minh", "Hỏi lại qua chính tin nhắn đó"], d: 1 },
      { h: "Người lạ trả 500.000đ để bạn mở và bán tài khoản ngân hàng. Việc này:", c: ["Hợp pháp vì tài khoản của mình", "Vi phạm pháp luật, tiếp tay tội phạm", "Được nếu chỉ cho mượn"], d: 1 },
      { h: "Mật khẩu nào an toàn nhất?", c: ["Nam2010", "Ca-phe-sua-da-luc-6h!", "11111111"], d: 1 },
      { h: "Đăng ảnh 2 mặt căn cước lên mạng có thể dẫn đến:", c: ["Không sao vì ai cũng có", "Bị làm giả hồ sơ, vay tiền đứng tên bạn", "Chỉ ảnh hưởng nếu đăng công khai 1 tuần"], d: 1 },
      { h: "Tin báo trúng xe máy, yêu cầu nộp phí trước bạ 2 triệu. Bạn nên:", c: ["Nộp phí để nhận xe", "Bỏ qua, không trả lời", "Gọi lại hỏi cho rõ"], d: 1 },
      { h: "Lỡ chuyển tiền cho kẻ lừa đảo. Việc nên làm là:", c: ["Giấu bố mẹ", "Chuyển thêm để lấy lại", "Dừng, giữ bằng chứng, báo người lớn, ngân hàng, công an"], d: 2 },
    ],
    B: [
      { h: "Tin nhắn từ số lạ: \"Đọc giúp mã xác thực vừa gửi đến máy bạn\". Bạn nên:", c: ["Đọc mã vì không mất gì", "Không chia sẻ mã cho ai", "Gửi ảnh chụp tin nhắn"], d: 1 },
      { h: "Người tự xưng cán bộ điều tra bảo bạn thuê phòng, tắt định vị, không liên lạc gia đình. Bạn nên:", c: ["Làm theo để hợp tác", "Dừng ngay, báo bố mẹ, thầy cô hoặc gọi 113", "Làm theo nhưng báo bạn thân"], d: 1 },
      { h: "SMS: \"Tài khoản bị khóa, xác thực tại saoviet-bank.vip\". Điều đáng ngờ nhất là:", c: ["Tin nhắn không dấu", "Tên miền lạ yêu cầu đăng nhập", "Gửi vào buổi tối"], d: 1 },
      { h: "Shop cần người đặt đơn ảo, ứng tiền trước, hoàn tiền kèm 10% hoa hồng. Đây là:", c: ["Việc làm thêm hợp lý", "Kịch bản lừa đảo cộng tác viên", "An toàn nếu đơn nhỏ"], d: 1 },
      { h: "\"Cô chủ nhiệm\" dùng tài khoản Zalo mới, nhờ chuyển quỹ lớp vào tài khoản người nhà. Bạn nên:", c: ["Chuyển vì có ảnh cô", "Hỏi trực tiếp cô hoặc gọi số đã biết", "Nhắn hỏi lại trên tài khoản đó"], d: 1 },
      { h: "Cho người khác mượn tài khoản ngân hàng đứng tên mình để nhận tiền:", c: ["Không sao nếu là người quen trên mạng", "Có thể bị xử lý theo pháp luật", "Chỉ sai nếu nhận tiền công"], d: 1 },
      { h: "Dùng một mật khẩu cho mọi tài khoản thì:", c: ["Tiện và an toàn", "Lộ một nơi, mọi tài khoản gặp nguy", "Chỉ nguy với tài khoản game"], d: 1 },
      { h: "Thông tin nào KHÔNG nên đăng công khai?", c: ["Ảnh phong cảnh", "Địa chỉ nhà và ảnh giấy tờ tùy thân", "Cảm nhận về một cuốn sách"], d: 1 },
      { h: "Email báo trúng học bổng dù bạn chưa nộp hồ sơ, yêu cầu nộp phí giữ suất. Đây là:", c: ["Cơ hội hiếm", "Dấu hiệu lừa đảo", "Hợp lệ nếu có logo đẹp"], d: 1 },
      { h: "Bạn nhận tin đe dọa phát tán ảnh nếu không chuyển tiền. Nên:", c: ["Chuyển tiền cho xong", "Không trả tiền, giữ bằng chứng, báo người lớn và công an", "Xóa hết tin nhắn rồi im lặng"], d: 1 },
    ],
  },
};
