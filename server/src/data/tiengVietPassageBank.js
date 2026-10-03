/**
 * KHO NGỮ LIỆU ĐỌC HIỂU TIẾNG VIỆT TIỂU HỌC CHUẨN THÔNG TƯ 27 & GDPT 2018
 * NGUỒN ĐỐI CHIẾU: 10 FILE SÁCH GIÁO KHOA TIẾNG VIỆT BỘ SÁCH CHÂN TRỜI SÁNG TẠO (CTST) TỪ LỚP 1 ĐẾN LỚP 5
 * (Theo quy định TT27: Không lấy ngữ liệu trong SGK Kết nối tri thức là bộ sách chính khóa của trường)
 * 
 * Phục vụ 4 định hướng ngữ liệu theo chuẩn đánh giá quốc tế SEA-PLM:
 * 1. literary: Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK Chân trời sáng tạo)
 *    - Phân chia chuẩn xác theo từng khối lớp: Lớp 1, 2, 3, 4, 5 (16 bài mỗi khối lớp = 80 bài)
 *    - Đúng tên bài đọc, tác giả, chủ điểm SGK CTST
 *    - Đầy đủ hệ thống câu hỏi chuẩn TT27 (M1, M2, M3, trắc nghiệm và tự luận vận dụng kèm rubric)
 * 2. informational_vinhlong: Văn bản thông tin thực tế / Địa phương Vĩnh Long (124 xã/phường)
 * 3. non_continuous_seaplm: Văn bản không liên tục / Hỗn hợp (Bảng biểu, sơ đồ chuẩn SEA-PLM)
 * 4. custom: Tự nhập ngữ liệu đọc hiểu tùy chỉnh
 */

const GRADE_1_PASSAGES = require('./passages/grade1Passages');
const GRADE_2_PASSAGES = require('./passages/grade2Passages');
const GRADE_3_PASSAGES = require('./passages/grade3Passages');
const GRADE_4_PASSAGES = require('./passages/grade4Passages');
const GRADE_5_PASSAGES = require('./passages/grade5Passages');

// =========================================================================
// 1. VĂN BẢN NGHỆ THUẬT (TRUYỆN, THƠ THEO CHỦ ĐIỂM SGK CHÂN TRỜI SÁNG TẠO)
// TỔNG CỘNG: 80 BÀI ĐỌC HIỂU (16 BÀI CHO MỖI KHỐI LỚP 1, 2, 3, 4, 5)
// =========================================================================
const LITERARY_PASSAGES = [
  ...GRADE_1_PASSAGES,
  ...GRADE_2_PASSAGES,
  ...GRADE_3_PASSAGES,
  ...GRADE_4_PASSAGES,
  ...GRADE_5_PASSAGES,
];

// =========================================================================
// 2. VĂN BẢN THÔNG TIN THỰC TẾ / ĐỊA PHƯƠNG VĨNH LONG (124 XÃ/PHƯỜNG)
// =========================================================================
const VINHLONG_INFO_PASSAGES = [
  {
    id: "VL-INFO-01",
    category: "informational_vinhlong",
    categoryName: "Văn bản thông tin thực tế / Địa phương Vĩnh Long (124 xã/phường)",
    theme: "Di sản làng nghề truyền thống Vĩnh Long",
    genre: "Văn bản thông tin",
    suitableGrades: [3, 4, 5],
    title: "Vương quốc gốm đỏ sông Cổ Chiên Mang Thít",
    author: "Báo Vĩnh Long (Tư liệu địa phương)",
    wordCount: 210,
    passage: "Trải dài hơn 30 ki-lô-mét ven dòng sông Cổ Chiên và kênh Thầy Cai thuộc huyện Mang Thít, tỉnh Vĩnh Long là hàng ngàn lò gạch gốm đỏ hình tròn cổ kính. Nhìn từ trên cao, quần thể lò gạch nhấp nhô san sát trông như những chiếc tháp nung sừng sững giữa bầu trời xanh. Trải qua hơn một thế kỉ hình thành và phát triển, các nghệ nhân Mang Thít đã khéo léo biến dòng đất sét phù sa màu mỡ thành những sản phẩm gốm đỏ mỹ nghệ độc đáo, tinh xảo xuất khẩu sang nhiều nước trên thế giới. Hiện nay, tỉnh Vĩnh Long đang triển khai đề án bảo tồn 'Di sản đương đại Mang Thít' để biến nơi đây thành điểm du lịch văn hóa tầm cỡ quốc tế.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Vương quốc gốm đỏ độc đáo của tỉnh Vĩnh Long trải dài ven dòng sông nào?", options: [{ id: "A", text: "Sông Hậu" }, { id: "B", text: "Sông Cổ Chiên và kênh Thầy Cai (huyện Mang Thít)" }, { id: "C", text: "Sông Đồng Nai" }, { id: "D", text: "Sông Sài Gòn" }], ans: "B", explain: "Chi tiết: 'Trải dài hơn 30 ki-lô-mét ven dòng sông Cổ Chiên và kênh Thầy Cai thuộc huyện Mang Thít'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Nguyên liệu chính để tạo nên sản phẩm gốm đỏ Mang Thít trứ danh là gì?", options: [{ id: "A", text: "Đá vôi và cát trắng" }, { id: "B", text: "Đất sét phù sa màu mỡ của vùng đồng bằng sông Cửu Long" }, { id: "C", text: "Bột gỗ thông" }, { id: "D", text: "Nhựa tổng hợp" }], ans: "B", explain: "Chi tiết: 'biến dòng đất sét phù sa màu mỡ thành những sản phẩm gốm đỏ mỹ nghệ'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 1.0, text: "Ý nghĩa của đề án 'Di sản đương đại Mang Thít' đối với sự phát triển của Vĩnh Long là gì?", options: [{ id: "A", text: "Chỉ để nung gạch xây nhà" }, { id: "B", text: "Bảo tồn giá trị văn hóa làng nghề truyền thống và phát triển du lịch quốc tế" }, { id: "C", text: "Xóa bỏ các lò gạch cũ" }, { id: "D", text: "Chuyển thành khu công nghiệp nặng" }], ans: "B", explain: "Đề án giúp gìn giữ di sản kiến trúc lò gạch và thu hút khách du lịch trong, ngoài nước." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 0.5, text: "Từ 'tinh xảo' trong bài thuộc từ loại nào?", options: [{ id: "A", text: "Danh từ" }, { id: "B", text: "Động từ" }, { id: "C", text: "Tính từ" }, { id: "D", text: "Đại từ" }], ans: "C", explain: "'Tinh xảo' là tính từ chỉ mức độ khéo léo, công phu, tỉ mỉ." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.0, text: "Xác định thành phần trạng ngữ trong câu: 'Trải qua hơn một thế kỉ, làng nghề gốm đỏ Mang Thít vẫn giữ vẹn nguyên nét đẹp cổ kính.'?", options: [{ id: "A", text: "Trải qua hơn một thế kỉ" }, { id: "B", text: "Làng nghề gốm đỏ Mang Thít" }, { id: "C", text: "Vẫn giữ vẹn nguyên" }, { id: "D", text: "Nét đẹp cổ kính" }], ans: "A", explain: "'Trải qua hơn một thế kỉ' là trạng ngữ chỉ thời gian." },
      { num: 6, type: "essay", category: "language", level: "M2", score: 1.0, text: "Tìm trong bài 1 danh từ riêng chỉ địa danh và 1 từ chỉ đặc điểm của sản phẩm gốm.", solution: "- Danh từ riêng: Mang Thít, Cổ Chiên (hoặc Vĩnh Long).\n- Từ chỉ đặc điểm: đỏ, độc đáo, tinh xảo...", rubric: [{ criteria: "Đúng danh từ riêng và từ chỉ đặc điểm", points: 1.0, description: "Tìm đúng danh từ riêng (0,5đ) và từ chỉ đặc điểm (0,5đ)." }] },
      { num: 7, type: "essay", category: "language", level: "M3", score: 1.5, text: "Em hãy viết 1 câu giới thiệu về làng nghề gốm đỏ Mang Thít cho một người bạn phương xa.", solution: "Ví dụ: Làng nghề gốm đỏ Mang Thít quê mình với hàng ngàn lò gạch cổ kính soi bóng bên sông Cổ Chiên là một điểm đến di sản văn hóa tuyệt đẹp mà bạn không nên bỏ lỡ.", rubric: [{ criteria: "Giới thiệu sinh động", points: 1.0, description: "Câu văn giàu hình ảnh, giới thiệu hấp dẫn về quê hương Vĩnh Long." }, { criteria: "Ngữ pháp", points: 0.5, description: "Câu văn đúng ngữ pháp, không lỗi chính tả." }] }
    ]
  },
  {
    id: "VL-INFO-02",
    category: "informational_vinhlong",
    categoryName: "Văn bản thông tin thực tế / Địa phương Vĩnh Long (124 xã/phường)",
    theme: "Trái cây miệt vườn Nam Bộ",
    genre: "Văn bản thông tin",
    suitableGrades: [3, 4, 5],
    title: "Hương sắc miệt vườn Chợ Lách Bến Tre",
    author: "Minh Tân (Tư liệu Vĩnh Long mới)",
    wordCount: 200,
    passage: "Huyện Chợ Lách (thuộc địa bàn tỉnh Vĩnh Long mới sau sáp nhập) từ lâu đã nổi danh là thủ phủ cây giống và hoa kiểng lớn nhất nước ta. Nằm giữa hai con sông lớn là sông Cổ Chiên và sông Hàm Luông, đất đai phù sa nơi đây trù phú diệu kì. Đến thăm các làng hoa Cái Mơn, Vĩnh Thành vào dịp giáp Tết, du khách sẽ ngỡ ngàng trước muôn sắc cúc mâm xôi vàng rực, vạn thọ cam tươi cùng những vườn sầu riêng, chôm chôm, măng cụt trĩu quả bốn mùa. Bằng đôi bàn tay tài hoa và sự cần mẫn, những nghệ nhân nông dân đã tạo nên một vùng cây trái tốt tươi, góp phần làm giàu cho quê hương đất nước.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Vùng đất Chợ Lách được mệnh danh là thủ phủ nổi tiếng gì của cả nước?", options: [{ id: "A", text: "Thủ phủ lúa gạo xuất khẩu" }, { id: "B", text: "Thủ phủ cây giống và hoa kiểng lớn nhất nước ta" }, { id: "C", text: "Trung tâm đóng tàu biển" }, { id: "D", text: "Thủ phủ dệt chiếu" }], ans: "B", explain: "Chi tiết: 'nổi danh là thủ phủ cây giống và hoa kiểng lớn nhất nước ta'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Hai dòng sông nào đã bồi đắp lượng phù sa màu mỡ cho miệt vườn Chợ Lách?", options: [{ id: "A", text: "Sông Đồng Nai và sông Sài Gòn" }, { id: "B", text: "Sông Cổ Chiên và sông Hàm Luông" }, { id: "C", text: "Sông Hồng và sông Đáy" }, { id: "D", text: "Sông Ba Lai và sông Vàm Cỏ" }], ans: "B", explain: "Chi tiết: 'Nằm giữa hai con sông lớn là sông Cổ Chiên và sông Hàm Luông'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 1.0, text: "Yếu tố nào làm nên vẻ đẹp trù phú của làng hoa, miệt vườn Chợ Lách?", options: [{ id: "A", text: "Sự cần cù, tài hoa và bàn tay khéo léo của người nông dân kết hợp đất mẹ phù sa" }, { id: "B", text: "Do máy móc tự động hoàn toàn" }, { id: "C", text: "Chỉ nhờ khí hậu tự nhiên" }, { id: "D", text: "Do cây tự mọc trong rừng" }], ans: "A", explain: "Kết hợp giữa phù sa thiên nhiên và bàn tay tài hoa, cần mẫn của con người." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 0.5, text: "Các từ 'sầu riêng, chôm chôm, măng cụt, cúc mâm xôi' thuộc từ loại nào?", options: [{ id: "A", text: "Danh từ" }, { id: "B", text: "Động từ" }, { id: "C", text: "Tính từ" }, { id: "D", text: "Đại từ" }], ans: "A", explain: "Đây là các danh từ chỉ tên gọi cây cối, hoa quả." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.0, text: "Chủ ngữ trong câu 'Những nghệ nhân nông dân cần mẫn chăm sóc từng luống hoa tết.' là gì?", options: [{ id: "A", text: "Những nghệ nhân nông dân" }, { id: "B", text: "Cần mẫn chăm sóc" }, { id: "C", text: "Từng luống hoa tết" }, { id: "D", text: "Hoa tết" }], ans: "A", explain: "Chủ ngữ là cụm danh từ 'Những nghệ nhân nông dân'." },
      { num: 6, type: "essay", category: "language", level: "M2", score: 1.0, text: "Đặt 1 câu miêu tả vẻ đẹp của mùa trái cây chín ở miệt vườn quê hương.", solution: "Ví dụ: Những chùm chôm chôm chín đỏ rực lúc lỉu trên cành như những đốm lửa nhỏ sưởi ấm khu vườn.", rubric: [{ criteria: "Đúng câu miêu tả trái cây", points: 1.0, description: "Câu đúng ngữ pháp, giàu hình ảnh miêu tả sinh động." }] },
      { num: 7, type: "essay", category: "language", level: "M3", score: 1.5, text: "Em cảm nhận được phẩm chất tốt đẹp nào của những người nông dân qua bài đọc?", solution: "Ví dụ: Qua bài đọc, em cảm nhận được sự cần cù, chịu thương chịu khó và đôi bàn tay tài hoa, sáng tạo của những người nông dân. Họ đã đổ bao mồ hôi công sức để mang lại hoa thơm trái ngọt làm đẹp cho đời.", rubric: [{ criteria: "Cảm nhận sâu sắc", points: 1.0, description: "Nêu được phẩm chất cần cù, khéo léo của người nông dân." }, { criteria: "Trình bày chuẩn", points: 0.5, description: "Diễn đạt mạch lạc, không sai lỗi chính tả." }] }
    ]
  },
  {
    id: "VL-INFO-03",
    category: "informational_vinhlong",
    categoryName: "Văn bản thông tin thực tế / Địa phương Vĩnh Long (124 xã/phường)",
    theme: "Đặc sản địa phương Vĩnh Long",
    genre: "Văn bản thông tin",
    suitableGrades: [3, 4, 5],
    title: "Huyền thoại xứ sở dừa sáp Cầu Kè",
    author: "Thạch Som Nang (Tư liệu Vĩnh Long mới)",
    wordCount: 195,
    passage: "Huyện Cầu Kè (thuộc vùng đất Trà Vinh - tỉnh Vĩnh Long mới) là địa danh duy nhất ở nước ta trồng được giống dừa sáp đặc sản vô cùng thơm ngon. Không giống như những trái dừa bình thường nhiều nước, trái dừa sáp có lớp cơm dừa dày cộm, mềm mịn và béo ngậy như kem tươi. Nước dừa bên trong đặc sệt, trong veo như giọt mật ong ròng. Để thu hoạch được những buồng dừa sáp chất lượng cao, người dân Cầu Kè đã chăm sóc từng gốc dừa bằng tất cả sự cần mẫn và tình yêu sâu nặng với vùng đất ngọt ngào phù sa.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Xứ sở Cầu Kè nổi tiếng khắp cả nước với loại đặc sản độc đáo nào?", options: [{ id: "A", text: "Bưởi da xanh" }, { id: "B", text: "Giống dừa sáp đặc biệt" }, { id: "C", text: "Cam sành Tam Bình" }, { id: "D", text: "Măng cụt Chợ Lách" }], ans: "B", explain: "Chi tiết: 'Huyện Cầu Kè... là địa danh duy nhất ở nước ta trồng được giống dừa sáp đặc sản'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Cơm của trái dừa sáp có đặc điểm gì đặc biệt so với dừa thường?", options: [{ id: "A", text: "Cứng và mỏng" }, { id: "B", text: "Dày cộm, mềm mịn và béo ngậy như kem tươi" }, { id: "C", text: "Có vị mặn mòi" }, { id: "D", text: "Rỗng ruột hoàn toàn" }], ans: "B", explain: "Chi tiết: 'cơm dừa dày cộm, mềm mịn và béo ngậy như kem tươi'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 1.0, text: "Hình ảnh nước dừa sáp được so sánh với điều gì để làm nổi bật độ quý giá?", options: [{ id: "A", text: "Như giọt nước mưa" }, { id: "B", text: "Trong veo và ngọt quánh như giọt mật ong ròng" }, { id: "C", text: "Như dòng sữa mẹ" }, { id: "D", text: "Như nước suối nguồn" }], ans: "B", explain: "Chi tiết: 'Nước dừa bên trong đặc sệt, trong veo như giọt mật ong ròng'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 0.5, text: "Từ 'béo ngậy' trong bài thuộc nhóm từ loại nào?", options: [{ id: "A", text: "Danh từ" }, { id: "B", text: "Động từ" }, { id: "C", text: "Tính từ" }, { id: "D", text: "Quan hệ từ" }], ans: "C", explain: "'Béo ngậy' là tính từ miêu tả cảm giác vị giác béo đậm đà." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.0, text: "Trong câu 'Cây dừa sáp vươn cao hiên ngang đón gió biển.', từ 'hiên ngang' làm rõ nghĩa cho bộ phận nào?", options: [{ id: "A", text: "Cây dừa sáp" }, { id: "B", text: "Vươn cao" }, { id: "C", text: "Đón gió biển" }, { id: "D", text: "Gió biển" }], ans: "B", explain: "'Hiên ngang' là tính từ bổ nghĩa cho hành động 'vươn cao'." },
      { num: 6, type: "essay", category: "language", level: "M2", score: 1.0, text: "Tìm trong bài 1 từ ghép và 1 từ láy miêu tả đặc điểm của dừa sáp.", solution: "- Từ ghép: đặc sản, thơm ngon...\n- Từ láy: dày cộm, sền sệt, trong veo...", rubric: [{ criteria: "Đúng từ ghép và từ láy", points: 1.0, description: "Tìm đúng từ ghép (0,5đ) và từ láy (0,5đ)." }] },
      { num: 7, type: "essay", category: "language", level: "M3", score: 1.5, text: "Viết đoạn văn ngắn (2 đến 3 câu) giới thiệu món ngon từ dừa sáp quê hương cho du khách thập phương.", solution: "Ví dụ: Món sinh tố dừa sáp Cầu Kè là thức uống thơm ngon nức tiếng mà ai ghé thăm Nam Bộ cũng say mê. Từng thìa dừa sáp béo ngậy hòa quyện cùng sữa đặc và đá xay tạo nên hương vị ngọt bùi khó quên. Món quà thiên nhiên quý giá này luôn làm nức lòng du khách gần xa.", rubric: [{ criteria: "Giới thiệu hấp dẫn", points: 1.0, description: "Nêu được nét độc đáo của món ăn, khơi gợi lòng tự hào quê hương." }, { criteria: "Diễn đạt tốt", points: 0.5, description: "Câu văn mạch lạc, không mắc lỗi chính tả." }] }
    ]
  },
  {
    id: "VL-INFO-04",
    category: "informational_vinhlong",
    categoryName: "Văn bản thông tin thực tế / Địa phương Vĩnh Long (124 xã/phường)",
    theme: "Công trình giao thông hiện đại Vĩnh Long",
    genre: "Văn bản thông tin",
    suitableGrades: [3, 4, 5],
    title: "Cây cầu Mỹ Thuận – Nhịp cầu nối những bờ vui",
    author: "Phương Nam (Tư liệu quê hương)",
    wordCount: 205,
    passage: "Bắc qua dòng sông Tiền mênh mông sóng nước, cầu Mỹ Thuận sừng sững nối liền hai bờ Tiền Giang và Vĩnh Long. Đây là cây cầu dây văng hiện đại đầu tiên của Việt Nam, khánh thành vào năm 2000 trong niềm vui vỡ òa của hàng triệu người dân đồng bằng sông Cửu Long. Từ trên đỉnh cầu phóng tầm mắt ra xa, dòng sông Tiền cuồn cuộn phù sa đỏ rực, thuyền bè tấp nập ngược xuôi. Những sợi dây văng trắng muốt đan chéo nhau như những phím đàn khổng lồ tấu lên bản hùng ca phát triển của vùng đất phương Nam. Cầu Mỹ Thuận không chỉ giúp giao thông thông suốt mà còn mở ra kỉ nguyên phát triển kinh tế, văn hóa rực rỡ cho quê hương Vĩnh Long.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Cầu Mỹ Thuận bắc qua dòng sông nào và nối liền hai tỉnh nào?", options: [{ id: "A", text: "Bắc qua sông Hậu, nối Cần Thơ và Vĩnh Long" }, { id: "B", text: "Bắc qua sông Tiền, nối Tiền Giang và Vĩnh Long" }, { id: "C", text: "Bắc qua sông Cổ Chiên" }, { id: "D", text: "Bắc qua sông Sài Gòn" }], ans: "B", explain: "Chi tiết: 'Bắc qua dòng sông Tiền mênh mông sóng nước, cầu Mỹ Thuận sừng sững nối liền hai bờ Tiền Giang và Vĩnh Long'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Những sợi dây văng của cây cầu được tác giả ví von với hình ảnh gì?", options: [{ id: "A", text: "Những dải lụa mềm" }, { id: "B", text: "Những phím đàn khổng lồ tấu lên bản hùng ca phát triển" }, { id: "C", text: "Những chiếc nan quạt khổng lồ" }, { id: "D", text: "Những cánh buồm no gió" }], ans: "B", explain: "Chi tiết: 'như những phím đàn khổng lồ tấu lên bản hùng ca phát triển của vùng đất phương Nam'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 1.0, text: "Sự ra đời của cầu Mỹ Thuận có ý nghĩa lịch sử to lớn như thế nào đối với nhân dân miền Tây?", options: [{ id: "A", text: "Chấm dứt cảnh lụy phà ngăn cách, mở ra kỉ nguyên phát triển kinh tế xã hội mạnh mẽ" }, { id: "B", text: "Chỉ để phục vụ người đi bộ" }, { id: "C", text: "Làm giảm lượng tàu thuyền trên sông" }, { id: "D", text: "Không làm thay đổi giao thông" }], ans: "A", explain: "Cầu nối đôi bờ, giải phóng cảnh chờ phà ách tắc và thúc đẩy kinh tế toàn vùng bứt phá." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 0.5, text: "Từ nào dưới đây là từ láy tượng hình gợi tả sự đông đúc, nhộn nhịp?", options: [{ id: "A", text: "Mênh mông" }, { id: "B", text: "Tấp nập" }, { id: "C", text: "Sừng sững" }, { id: "D", text: "Trắng muốt" }], ans: "B", explain: "'Tấp nập' là từ láy gợi tả cảnh người và xe cộ đi lại đông đúc, nhộn nhịp." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.0, text: "Xác định các danh từ riêng trong câu: 'Cầu Mỹ Thuận bắc qua sông Tiền nối liền Vĩnh Long với các tỉnh miền Tây.'?", options: [{ id: "A", text: "Mỹ Thuận, Tiền, Vĩnh Long, Tây" }, { id: "B", text: "Cầu, sông, tỉnh" }, { id: "C", text: "Bắc qua, nối liền" }, { id: "D", text: "Miền Tây, chiếc cầu" }], ans: "A", explain: "Các danh từ riêng chỉ tên cầu, tên sông và địa danh hành chính." },
      { num: 6, type: "essay", category: "language", level: "M2", score: 1.0, text: "Tìm trong bài đọc 1 câu văn có sử dụng biện pháp so sánh.", solution: "Câu: 'Những sợi dây văng trắng muốt đan chéo nhau như những phím đàn khổng lồ tấu lên bản hùng ca phát triển của vùng đất phương Nam.'", rubric: [{ criteria: "Đúng câu so sánh", points: 1.0, description: "Trích chính xác câu có hình ảnh so sánh chuẩn mực." }] },
      { num: 7, type: "essay", category: "language", level: "M3", score: 1.5, text: "Viết đoạn văn ngắn (từ 2 đến 3 câu) nêu niềm tự hào của em về những công trình đổi mới của quê hương đất nước.", solution: "Ví dụ: Nhìn những cây cầu hiện đại và đường cao tốc thênh thang bắc qua sông Tiền, sông Hậu, em cảm thấy vô cùng tự hào về sự đổi mới của quê hương. Những công trình kì vĩ ấy là biểu tượng cho bàn tay và khối óc tài hoa của người Việt Nam. Em nguyện học tập thật tốt để mai sau góp phần dựng xây quê hương ngày càng tươi đẹp.", rubric: [{ criteria: "Cảm xúc tự hào sâu sắc", points: 1.0, description: "Thể hiện tình yêu quê hương, niềm tự hào về sự phát triển của đất nước." }, { criteria: "Kỹ năng viết", points: 0.5, description: "Đoạn văn đúng số câu, ngữ pháp chuẩn, không lỗi chính tả." }] }
    ]
  },
  {
    id: "VL-INFO-05",
    category: "informational_vinhlong",
    categoryName: "Văn bản thông tin thực tế / Địa phương Vĩnh Long (124 xã/phường)",
    theme: "Danh nhân Đất học Vĩnh Long",
    genre: "Văn bản thông tin",
    suitableGrades: [4, 5],
    title: "Giáo sư - Viện sĩ Trần Đại Nghĩa - Người con ưu tú Vĩnh Long",
    author: "Bảo tàng Lịch sử Vĩnh Long",
    wordCount: 220,
    passage: "Giáo sư - Viện sĩ Trần Đại Nghĩa tên thật là Phạm Quang Lễ, sinh ra tại vùng đất Tam Bình, tỉnh Vĩnh Long. Thuở nhỏ mồ côi cha, nhờ tư chất thông minh và ý chí kiên cường, ông đã giành được học bổng du học Pháp rồi tốt nghiệp nhiều bằng kỹ sư danh tiếng tại châu Âu. Khi Bác Hồ sang Pháp năm 1946, nghe theo tiếng gọi thiêng liêng của Tổ quốc, ông đã từ bỏ cuộc sống giàu sang nơi xứ người để về nước tham gia kháng chiến. Giữa chiến khu gian khổ, ông đã ngày đêm nghiên cứu, chế tạo thành công súng Ba-dô-ka và súng không giật SKZ, góp công to lớn vào thắng lợi của dân tộc. Tên tuổi của người con ưu tú Vĩnh Long mãi mãi ngời sáng như tấm gương sáng ngời về lòng yêu nước và tinh thần cống hiến hết mình cho khoa học Việt Nam.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Giáo sư - Viện sĩ Trần Đại Nghĩa sinh ra tại huyện nào của tỉnh Vĩnh Long?", options: [{ id: "A", text: "Huyện Mang Thít" }, { id: "B", text: "Huyện Tam Bình" }, { id: "C", text: "Huyện Long Hồ" }, { id: "D", text: "Thị xã Bình Minh" }], ans: "B", explain: "Chi tiết: 'sinh ra tại vùng đất Tam Bình, tỉnh Vĩnh Long'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Hành động cao đẹp nào chứng minh lòng yêu nước sâu sắc của Giáo sư Trần Đại Nghĩa?", options: [{ id: "A", text: "Ở lại Pháp lập nghiệp" }, { id: "B", text: "Từ bỏ cuộc sống giàu sang nơi xứ người để theo Bác Hồ về nước kháng chiến" }, { id: "C", text: "Chỉ làm việc tại các công ty nước ngoài" }, { id: "D", text: "Không tham gia nghiên cứu vũ khí" }], ans: "B", explain: "Chi tiết: 'ông đã từ bỏ cuộc sống giàu sang nơi xứ người để về nước tham gia kháng chiến'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 1.0, text: "Đóng góp kiệt xuất của ông cho sự nghiệp bảo vệ Tổ quốc là gì?", options: [{ id: "A", text: "Sáng tác nhiều tác phẩm văn học" }, { id: "B", text: "Nghiên cứu chế tạo thành công súng Ba-dô-ka và súng SKZ chi viện cho chiến trường" }, { id: "C", text: "Xây dựng các công trình thủy lợi" }, { id: "D", text: "Làm bác sĩ cứu chữa thương binh" }], ans: "B", explain: "Ông là cha đẻ của ngành quân giới cách mạng Việt Nam, chế tạo súng Ba-dô-ka và súng không giật SKZ." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 0.5, text: "Từ 'ưu tú' trong bài thuộc từ loại nào?", options: [{ id: "A", text: "Danh từ" }, { id: "B", text: "Động từ" }, { id: "C", text: "Tính từ" }, { id: "D", text: "Đại từ" }], ans: "C", explain: "'Ưu tú' là tính từ miêu tả phẩm chất xuất sắc, vượt trội." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.0, text: "Dấu gạch ngang trong cụm từ 'Giáo sư - Viện sĩ Trần Đại Nghĩa' được dùng để làm gì?", options: [{ id: "A", text: "Đánh dấu lời nói trực tiếp" }, { id: "B", text: "Nối các học hàm, học vị cao quý của nhân vật" }, { id: "C", text: "Báo hiệu phần liệt kê" }, { id: "D", text: "Kết thúc câu" }], ans: "B", explain: "Dấu gạch ngang dùng để nối các danh xưng, chức danh khoa học." },
      { num: 6, type: "essay", category: "language", level: "M2", score: 1.0, text: "Tìm trong bài 1 từ chỉ phẩm chất và 1 từ chỉ ý chí vươn lên của Giáo sư Trần Đại Nghĩa.", solution: "- Phẩm chất: yêu nước, cống hiến, thông minh...\n- Ý chí: kiên cường, ngày đêm nghiên cứu...", rubric: [{ criteria: "Đúng 2 từ chỉ phẩm chất và ý chí", points: 1.0, description: "Tìm đúng mỗi từ được 0,5đ." }] },
      { num: 7, type: "essay", category: "language", level: "M3", score: 1.5, text: "Noi gương Giáo sư Trần Đại Nghĩa, em cần rèn luyện những đức tính gì trong học tập hôm nay?", solution: "Ví dụ: Noi gương Giáo sư Trần Đại Nghĩa, em sẽ luôn chăm chỉ học tập, kiên trì vượt qua bài vở khó khăn và không ngừng tìm tòi, khám phá kiến thức khoa học. Em ước mong mai sau có thể mang tri thức của mình góp phần xây dựng đất nước Việt Nam ngày càng văn minh, giàu mạnh.", rubric: [{ criteria: "Tinh thần học tập noi gương", points: 1.0, description: "Liên hệ bài học chăm ngoan, nuôi dưỡng ước mơ khoa học cống hiến." }, { criteria: "Trình bày mạch lạc", points: 0.5, description: "Hành văn lưu loát, không mắc lỗi chính tả." }] }
    ]
  }
];

// =========================================================================
// 3. VĂN BẢN KHÔNG LIÊN TỤC / HỖN HỢP (CHUẨN ĐÁNH GIÁ QUỐC TẾ SEA-PLM)
// =========================================================================
const NON_CONTINUOUS_SEAPLM_PASSAGES = [
  {
    id: "SEAPLM-NON-01",
    category: "non_continuous_seaplm",
    categoryName: "Văn bản không liên tục / Hỗn hợp (Bảng biểu, sơ đồ chuẩn SEA-PLM)",
    theme: "Văn hóa đọc học đường",
    genre: "Bảng biểu số liệu",
    suitableGrades: [3, 4, 5],
    title: "Ngày hội đọc sách Tiểu học - Báo cáo thống kê SEA-PLM",
    author: "Ban Chỉ đạo Thư viện trường Tiểu học",
    wordCount: 180,
    passage: `BẢNG TỔNG HỢP KẾT QUẢ NGÀY HỘI ĐỌC SÁCH NĂM HỌC 2026 - 2027
(Chuẩn đánh giá năng lực Đọc hiểu học sinh Tiểu học Đông Nam Á - SEA-PLM)

1. Khối lớp tham gia và Số lượng sách đã đọc:
- Khối 1: 150 học sinh tham gia • Đọc 320 lượt sách tranh, truyện cổ tích.
- Khối 2: 145 học sinh tham gia • Đọc 410 lượt truyện ngụ ngôn, sách khám phá.
- Khối 3: 160 học sinh tham gia • Đọc 580 lượt sách khoa học thường thức, văn học.
- Khối 4: 155 học sinh tham gia • Đọc 690 lượt sách lịch sử, truyện danh nhân thế giới.
- Khối 5: 150 học sinh tham gia • Đọc 780 lượt bách khoa toàn thư, văn học kinh điển.

2. Thể loại sách được mượn nhiều nhất:
- Sách Khoa học đời sống: chiếm 35% tổng số lượt mượn.
- Truyện tranh lịch sử Việt Nam: chiếm 30% tổng số lượt mượn.
- Văn học thiếu nhi trong nước: chiếm 25% tổng số lượt mượn.
- Sách kỹ năng sống: chiếm 10% tổng số lượt mượn.`,
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Theo bảng thống kê, khối lớp nào có số lượt đọc sách nhiều nhất trong Ngày hội đọc sách?", options: [{ id: "A", text: "Khối 1" }, { id: "B", text: "Khối 3" }, { id: "C", text: "Khối 4" }, { id: "D", text: "Khối 5 (780 lượt đọc)" }], ans: "D", explain: "Dựa vào bảng số liệu: Khối 5 đọc 780 lượt sách (nhiều nhất toàn trường)." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Thể loại sách nào được học sinh toàn trường mượn đọc với tỉ lệ cao nhất (35%)?", options: [{ id: "A", text: "Sách Khoa học đời sống" }, { id: "B", text: "Sách Kỹ năng sống" }, { id: "C", text: "Truyện ngụ ngôn" }, { id: "D", text: "Sách tranh cổ tích" }], ans: "A", explain: "Chi tiết: 'Sách Khoa học đời sống: chiếm 35% tổng số lượt mượn'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 1.0, text: "Dữ liệu thống kê trên cho thấy xu hướng đọc sách của học sinh tiểu học ngày nay là gì?", options: [{ id: "A", text: "Học sinh không thích đọc sách" }, { id: "B", text: "Các em rất ham thích tìm tòi kiến thức khoa học và tìm hiểu lịch sử hào hùng của dân tộc" }, { id: "C", text: "Chỉ đọc truyện tranh giải trí" }, { id: "D", text: "Chỉ đọc khi bị thầy cô ép buộc" }], ans: "B", explain: "65% lượt mượn tập trung vào Khoa học đời sống và Lịch sử Việt Nam, chứng tỏ tinh thần ham học hỏi." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 0.5, text: "Từ 'thống kê' trong văn bản là từ loại nào?", options: [{ id: "A", text: "Danh từ" }, { id: "B", text: "Động từ" }, { id: "C", text: "Tính từ" }, { id: "D", text: "Đại từ" }], ans: "B", explain: "'Thống kê' là động từ chỉ hoạt động thu thập, phân loại và đếm số liệu." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.0, text: "Tác dụng của các dấu gạch đầu dòng (-) trong bảng báo cáo trên là gì?", options: [{ id: "A", text: "Đánh dấu các ý liệt kê số liệu rành mạch, rõ ràng" }, { id: "B", text: "Đánh dấu lời nói trực tiếp của nhân vật" }, { id: "C", text: "Nối các từ ngữ trong tên riêng" }, { id: "D", text: "Kết thúc đoạn văn" }], ans: "A", explain: "Dấu gạch đầu dòng dùng để phân tách và liệt kê các dữ liệu độc lập." },
      { num: 6, type: "essay", category: "language", level: "M2", score: 1.0, text: "Dựa vào bảng số liệu trên, em hãy viết 1 câu so sánh số lượt đọc sách giữa Khối 4 và Khối 1.", solution: "Ví dụ: Số lượt đọc sách của học sinh Khối 4 (690 lượt) nhiều hơn gấp đôi so với số lượt đọc của Khối 1 (320 lượt).", rubric: [{ criteria: "Đúng câu so sánh số liệu", points: 1.0, description: "Câu đúng ngữ pháp, số liệu trích xuất chính xác." }] },
      { num: 7, type: "essay", category: "language", level: "M3", score: 1.5, text: "Việc đọc sách mang lại những lợi ích to lớn gì cho học sinh? Em sẽ làm gì để hình thành thói quen đọc sách mỗi ngày?", solution: "Ví dụ: Đọc sách giúp em mở rộng vốn hiểu biết, làm giàu vốn từ ngữ và nuôi dưỡng những tình cảm tốt đẹp. Mỗi ngày, em dành ra ít nhất 30 phút trước khi đi ngủ để đọc sách và thường xuyên cùng các bạn đến thư viện trường tìm đọc những cuốn sách bổ ích.", rubric: [{ criteria: "Lợi ích và hành động cụ thể", points: 1.0, description: "Nêu được lợi ích to lớn của sách và biện pháp rèn thói quen đọc sách hàng ngày." }, { criteria: "Trình bày", points: 0.5, description: "Hành văn trong sáng, không sai chính tả." }] }
    ]
  },
  {
    id: "SEAPLM-NON-02",
    category: "non_continuous_seaplm",
    categoryName: "Văn bản không liên tục / Hỗn hợp (Bảng biểu, sơ đồ chuẩn SEA-PLM)",
    theme: "Sức khỏe học đường & Dinh dưỡng",
    genre: "Sơ đồ hướng dẫn",
    suitableGrades: [3, 4, 5],
    title: "Tháp dinh dưỡng hợp lý cho học sinh tiểu học",
    author: "Viện Dinh dưỡng Quốc gia & SEA-PLM Health",
    wordCount: 195,
    passage: `HƯỚNG DẪN DINH DƯỠNG CÂN ĐỐI CHO HỌC SINH TIỂU HỌC (6 - 11 TUỔI)

Tầng 1 (Đỉnh tháp - ĂN RẤT HẠN CHẾ):
- Muối: Dưới 4 gam/ngày (khoảng dưới 1 thìa cà phê).
- Đường tinh luyện: Dưới 15 gam/ngày (hạn chế tối đa bánh kẹo ngọt, nước ngọt có ga).

Tầng 2 (ĂN VỪA PHẢI):
- Dầu, mỡ thực vật và bơ: 20 - 25 gam/ngày (tương đương 4 - 5 thìa cà phê).

Tầng 3 (ĂN HỢP LÝ VÀ ĐA DẠNG):
- Thực phẩm giàu đạm: 150 - 200 gam/ngày (thịt, cá, tôm, đậu phụ, trứng). Khuyến khích ăn cá ít nhất 2 - 3 bữa/tuần.
- Sữa và chế phẩm sữa: 400 - 500 ml sữa tươi hoặc sữa chua/ngày để bổ sung canxi phát triển chiều cao.

Tầng 4 (Đáy tháp - ĂN ĐỦ VÀ ĂN NHIỀU):
- Rau xanh và quả chín: 200 - 300 gam rau củ + 150 - 200 gam quả chín (cung cấp vitamin, khoáng chất và chất xơ).
- Lương thực (cơm, bánh mì, khoai củ): 3 - 4 bát cơm/ngày (cung cấp năng lượng học tập).
- Nước sạch: Uống đủ 1,5 đến 2 lít nước lọc mỗi ngày. Kết hợp vận động thể thao ít nhất 60 phút/ngày.`,
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Theo Tháp dinh dưỡng, nhóm thực phẩm nào nằm ở đỉnh tháp và cần ăn rất hạn chế?", options: [{ id: "A", text: "Rau xanh và quả chín" }, { id: "B", text: "Muối và đường tinh luyện" }, { id: "C", text: "Cơm và bánh mì" }, { id: "D", text: "Thịt và cá" }], ans: "B", explain: "Chi tiết: 'Tầng 1 (Đỉnh tháp - ĂN RẤT HẠN CHẾ): Muối và Đường'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Học sinh tiểu học cần uống bao nhiêu nước lọc và vận động thể thao bao lâu mỗi ngày?", options: [{ id: "A", text: "Chỉ uống nước ngọt đóng chai" }, { id: "B", text: "1,5 đến 2 lít nước lọc và vận động thể thao ít nhất 60 phút mỗi ngày" }, { id: "C", text: "5 lít nước và tập 3 tiếng" }, { id: "D", text: "Chỉ uống nước khi thấy khát" }], ans: "B", explain: "Chi tiết: 'Nước sạch: Uống đủ 1,5 đến 2 lít nước lọc mỗi ngày. Kết hợp vận động thể thao ít nhất 60 phút/ngày'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 1.0, text: "Vì sao chúng ta cần ăn nhiều rau xanh và quả chín mỗi ngày?", options: [{ id: "A", text: "Vì rau củ đắt tiền nhất" }, { id: "B", text: "Để cung cấp đầy đủ vitamin, khoáng chất và chất xơ giúp cơ thể khỏe mạnh, tăng sức đề kháng" }, { id: "C", text: "Để thay thế hoàn toàn cơm và thịt" }, { id: "D", text: "Vì ăn rau không cần uống nước" }], ans: "B", explain: "Rau củ quả cung cấp vitamin, chất xơ và khoáng chất bảo vệ sức khỏe và hệ tiêu hóa." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 0.5, text: "Từ 'chất đạm' trong bài thuộc nhóm từ loại nào?", options: [{ id: "A", text: "Danh từ" }, { id: "B", text: "Động từ" }, { id: "C", text: "Tính từ" }, { id: "D", text: "Đại từ" }], ans: "A", explain: "'Chất đạm' là danh từ chỉ nhóm chất dinh dưỡng cần thiết cho cơ thể." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.0, text: "Dấu ngoặc đơn trong cụm từ '(cung cấp năng lượng học tập)' dùng để làm gì?", options: [{ id: "A", text: "Bổ sung thông tin giải thích tác dụng của nhóm lương thực" }, { id: "B", text: "Đánh dấu câu hỏi" }, { id: "C", text: "Trích dẫn lời nói trực tiếp" }, { id: "D", text: "Kết thúc đoạn văn" }], ans: "A", explain: "Dấu ngoặc đơn dùng để chú thích, bổ sung thông tin giải thích." },
      { num: 6, type: "essay", category: "language", level: "M2", score: 1.0, text: "Viết 1 câu khuyên các bạn học sinh hạn chế ăn đồ ăn vặt và nước ngọt có ga.", solution: "Ví dụ: Các bạn học sinh nên hạn chế uống nước ngọt có ga và đồ ăn vặt chiên rán để bảo vệ sức khỏe và hàm răng của mình.", rubric: [{ criteria: "Đúng câu khuyên bảo", points: 1.0, description: "Câu đúng ngữ pháp, có tính thuyết phục cao." }] },
      { num: 7, type: "essay", category: "language", level: "M3", score: 1.5, text: "Em hãy tự nhận xét thói quen ăn uống và vận động của bản thân; em cần thay đổi điều gì để cơ thể phát triển khỏe mạnh, cân đối?", solution: "Ví dụ: Hằng ngày em đã có thói quen ăn nhiều rau xanh và uống đủ nước, nhưng em vẫn còn lười tập thể dục buổi sáng. Thời gian tới, em sẽ thức dậy sớm hơn để tập thể dục 30 phút mỗi ngày và hạn chế ăn đồ ngọt để cơ thể luôn khỏe mạnh, dẻo dai.", rubric: [{ criteria: "Tự nhận xét trung thực và giải pháp", points: 1.0, description: "Tự đánh giá trung thực và đề ra biện pháp khắc phục hợp lý." }, { criteria: "Trình bày", points: 0.5, description: "Viết đúng ngữ pháp, không sai lỗi chính tả." }] }
    ]
  }
];

// Gom tất cả vào một kho hoàn chỉnh
const ALL_PASSAGES = [
  ...LITERARY_PASSAGES,
  ...VINHLONG_INFO_PASSAGES,
  ...NON_CONTINUOUS_SEAPLM_PASSAGES
];

/**
 * Lấy danh sách bài đọc theo tiêu chí phân loại, khối lớp và học kỳ
 */
function getReadingPassages({ category = 'all', grade = 4, semester = null }) {
  const g = Number(grade) || 4;
  let targetSem = null;
  if (semester) {
    const s = String(semester).toLowerCase();
    if (s.includes('1') || (s.includes('i') && !s.includes('ii') && !s.includes('cuối năm'))) {
      targetSem = 1;
    } else if (s.includes('2') || s.includes('ii') || s.includes('cuối năm')) {
      targetSem = 2;
    }
  }

  return ALL_PASSAGES.filter(p => {
    const matchCat = category === 'all' || p.category === category;
    const matchGrade = !p.suitableGrades || p.suitableGrades.includes(g) || p.grade === g;
    const matchSemester = !targetSem || !p.semester || p.semester === targetSem;
    return matchCat && matchGrade && matchSemester;
  });
}

/**
 * Lấy bài đọc theo ID
 */
function getPassageById(id) {
  return ALL_PASSAGES.find(p => p.id === id) || null;
}

module.exports = {
  LITERARY_PASSAGES,
  VINHLONG_INFO_PASSAGES,
  NON_CONTINUOUS_SEAPLM_PASSAGES,
  ALL_PASSAGES,
  getReadingPassages,
  getPassageById
};
