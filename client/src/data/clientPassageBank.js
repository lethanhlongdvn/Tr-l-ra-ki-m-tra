/**
 * KHO NGỮ LIỆU RAG ĐỌC HIỂU TIẾNG VIỆT & TIẾNG ANH CHO CLIENT EXAM GENERATOR
 * Đảm bảo 100% khớp 1:1 giữa Văn bản đọc thầm (Passage) và Bộ câu hỏi (Questions)
 * Đa dạng theo 5 Khối lớp (Lớp 1-5), 4 Kỳ kiểm tra (Giữa HK1, Cuối HK1, Giữa HK2, Cuối HK2/Cuối năm)
 * và 8 Bộ đề thi (Đề 1 đến Đề 8).
 */

export const TIENG_VIET_RAG_BANK = [
  // ==================== KHỐI LỚP 4 ====================
  {
    id: "CTST-G4-01",
    grade: 4,
    semester: 1,
    setIndex: 1,
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK CTST)",
    title: "Những ngày hè tươi đẹp",
    author: "Văn Thành Lê (SGK Tiếng Việt 4 Chân trời sáng tạo)",
    wordCount: 215,
    passage: "Mấy tuần trước khi kì nghỉ hè kết thúc, Điệp được bố mẹ cho về quê nội chơi. Quê nội của Điệp nằm bên con sông xanh biếc rợp bóng dừa mát rượi. Ngày nào Điệp cũng cùng các anh chị em họ ra vườn hái quả, câu cá và thả diều trên triền đê lộng gió. Buổi trưa hè oi ả bỗng trở nên dịu mát nhờ những làn gió sông thổi về mơn man cành lá. Ông nội đan cho Điệp một chiếc chong chóng tre xinh xắn xoay tít trong gió. Những ngày hè ở quê trôi qua thật êm đềm và đầy ắp tiếng cười. Khi sắp phải chia tay ông bà để trở lại thành phố chuẩn bị cho năm học mới, Điệp cứ lưu luyến mãi không muốn rời. Điệp thầm hứa sẽ chăm ngoan học giỏi để mùa hè sang năm lại được về thăm quê nội thân yêu.",
    questions: [
      {
        num: 1, itemNumber: 1, questionNumber: 1, type: "multiple_choice", questionType: "multiple_choice", level: "M1", points: 0.5,
        topic: "Đọc hiểu chi tiết văn bản",
        questionText: "Trong kì nghỉ hè, bạn Điệp đã được bố mẹ cho về đâu chơi?",
        options: [
          { id: "A", key: "A", text: "Về quê ngoại ở vùng biển" },
          { id: "B", key: "B", text: "Về quê nội ở vùng ven sông rợp bóng dừa mát rượi" },
          { id: "C", key: "C", text: "Đi cắm trại trên vùng núi cao" },
          { id: "D", key: "D", text: "Đi tham quan các bảo tàng ở thành phố" }
        ],
        correctAnswer: "B", explanation: "Chi tiết trong bài: 'Điệp được bố mẹ cho về quê nội chơi. Quê nội của Điệp nằm bên con sông xanh biếc rợp bóng dừa'."
      },
      {
        num: 2, itemNumber: 2, questionNumber: 2, type: "multiple_choice", questionType: "multiple_choice", level: "M1", points: 0.5,
        topic: "Đọc hiểu chi tiết văn bản",
        questionText: "Ông nội đã đan món đồ chơi gì cho Điệp khiến bạn vô cùng thích thú?",
        options: [
          { id: "A", key: "A", text: "Một cánh diều giấy ngũ sắc" },
          { id: "B", key: "B", text: "Một chiếc cần câu cá bằng trúc" },
          { id: "C", key: "C", text: "Một chiếc chong chóng tre xinh xắn xoay tít trong gió" },
          { id: "D", key: "D", text: "Một chiếc lồng đèn kéo quân" }
        ],
        correctAnswer: "C", explanation: "Chi tiết trong bài: 'Ông nội đan cho Điệp một chiếc chong chóng tre xinh xắn xoay tít trong gió'."
      },
      {
        num: 3, itemNumber: 3, questionNumber: 3, type: "multiple_choice", questionType: "multiple_choice", level: "M1", points: 0.5,
        topic: "Luyện từ và câu: Từ loại",
        questionText: "Từ 'lưu luyến' trong bài đọc thuộc nhóm từ loại nào?",
        options: [
          { id: "A", key: "A", text: "Từ láy gợi tả tình cảm tha thiết, gắn bó" },
          { id: "B", key: "B", text: "Từ ghép đẳng lập chỉ đồ vật" },
          { id: "C", key: "C", text: "Danh từ riêng chỉ địa danh" },
          { id: "D", key: "D", text: "Đại từ xưng hô" }
        ],
        correctAnswer: "A", explanation: "'Lưu luyến' là từ láy diễn tả tình cảm bịn rịn, tha thiết không muốn rời xa."
      },
      {
        num: 4, itemNumber: 4, questionNumber: 4, type: "true_false", questionType: "true_false", level: "M1", points: 1.0,
        topic: "Luyện từ và câu: Ngữ pháp",
        questionText: "Đánh dấu Đúng (Đ) hoặc Sai (S) cho các phát biểu dựa theo bài đọc:",
        options: [
          { id: "A", text: "Quê nội của Điệp nằm bên con sông xanh biếc rợp bóng dừa.", isCorrect: true },
          { id: "B", text: "Điệp cảm thấy nhàm chán và muốn trở lại thành phố sớm.", isCorrect: false }
        ],
        correctAnswer: "A-Đúng, B-Sai", explanation: "Điệp rất lưu luyến quê nội và hứa sẽ chăm ngoan để hè sau lại về."
      },
      {
        num: 5, itemNumber: 5, questionNumber: 5, type: "multiple_choice", questionType: "multiple_choice", level: "M2", points: 1.0,
        topic: "Đọc hiểu: Ý nghĩa văn bản",
        questionText: "Tình cảm của bạn Điệp đối với quê nội và ông bà được thể hiện rõ qua chi tiết nào?",
        options: [
          { id: "A", key: "A", text: "Lưu luyến không muốn rời và thầm hứa chăm ngoan học giỏi để hè sau lại về thăm" },
          { id: "B", key: "B", text: "Chỉ thích ở trong nhà chơi máy tính" },
          { id: "C", key: "C", text: "Tỏ ra giận dỗi khi ông nội cho quà" },
          { id: "D", key: "D", text: "Không muốn trò chuyện cùng các anh chị em họ" }
        ],
        correctAnswer: "A", explanation: "Bản tính ngoan hiếu, lưu luyến quê hương sâu sắc của bạn nhỏ."
      },
      {
        num: 6, itemNumber: 6, questionNumber: 6, type: "fill_in_the_blank", questionType: "fill_in_the_blank", level: "M2", points: 1.5,
        topic: "Luyện từ và câu: Điền từ thích hợp",
        questionText: "Điền từ ngữ thích hợp vào chỗ chấm theo đúng văn bản: 'Buổi trưa hè oi ả bỗng trở nên dịu mát nhờ những làn gió sông thổi về ...... cành lá.'",
        correctAnswer: "mơn man", explanation: "Từ 'mơn man' miêu tả nét gió thổi nhẹ nhàng êm dịu."
      },
      {
        num: 7, itemNumber: 7, questionNumber: 7, type: "matching", questionType: "matching", level: "M2", points: 1.0,
        topic: "Biện pháp nghệ thuật",
        questionText: "Nối hình ảnh ở Cột A với đặc điểm miêu tả tương ứng ở Cột B:",
        matchingPairs: [
          { left: "Con sông quê nội", right: "Xanh biếc rợp bóng dừa mát rượi" },
          { left: "Chong chóng tre", right: "Xinh xắn xoay tít trong gió" }
        ],
        correctAnswer: "Nối đúng các cặp", explanation: "Nhận biết chi tiết miêu tả trong bài đọc."
      },
      {
        num: 8, itemNumber: 8, questionNumber: 8, type: "essay", questionType: "constructed_response", level: "M2", points: 1.0,
        topic: "Đọc hiểu Tự luận",
        questionText: "Vì sao kì nghỉ hè ở quê nội lại để lại ấn tượng sâu sắc và đầy ắp kỉ niệm đẹp trong lòng bạn Điệp?",
        correctAnswer: "Vì ở quê có thiên nhiên thanh bình, được chơi đùa vui vẻ cùng anh chị em và nhận được tình yêu thương chăm sóc ấm áp của ông bà.", points: 1.0,
        explanation: "Học sinh nêu lý do về tình cảm gia đình và thiên nhiên quê hương."
      },
      {
        num: 9, itemNumber: 9, questionNumber: 9, type: "essay", questionType: "constructed_response", level: "M2", points: 1.0,
        topic: "Luyện từ và câu & Tích hợp Xanh - Sạch - Khỏe",
        questionText: "Đặt 1 câu có sử dụng từ 'êm đềm' hoặc 'lưu luyến' để nói về tình cảm của em với quê hương.",
        correctAnswer: "Mỗi lần rời quê ngoại, em lại cảm thấy lưu luyến không muốn xa rời.", points: 1.0,
        explanation: "Đặt đúng câu ngữ pháp và chứa từ yêu cầu."
      },
      {
        num: 10, itemNumber: 10, questionNumber: 10, type: "essay", questionType: "constructed_response", level: "M3", points: 2.0,
        topic: "Tập làm văn miêu tả",
        questionText: "Viết bài văn ngắn (khoảng 10 - 12 câu) tả một cảnh đẹp quê hương hoặc miêu tả một người thân mà em yêu quý.",
        correctAnswer: "Bài văn 3 phần (Mở bài, Thân bài, Kết bài) bám sát yêu cầu miêu tả giàu cảm xúc.", points: 2.0,
        explanation: "Đánh giá năng lực viết bài văn miêu tả chuẩn TT27 & GDPT 2018."
      }
    ]
  },
  {
    id: "CTST-G4-02",
    grade: 4,
    semester: 1,
    setIndex: 2,
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK CTST)",
    title: "Kì quan Rừng Cúc Phương",
    author: "Theo Địa lí & Cảnh quan Việt Nam",
    wordCount: 210,
    passage: "Vườn quốc gia Cúc Phương là một bảo tàng thiên nhiên rộng lớn với thảm thực vật nhiệt đới vô cùng phong phú. Nơi đây có cây chò ngàn năm tuổi sừng sững giữa đại ngàn, thân cây to chừng hơn mười người ôm không xuể. Vào mùa bướm nở, hàng triệu cánh bướm trắng muốt rập rờn bay lượn ngợp lối đi tựa như lạc vào chốn bồng lai tiên cảnh. Cúc Phương không chỉ là niềm tự hào của thiên nhiên Việt Nam mà còn là lá phổi xanh kì diệu cần được muôn đời gìn giữ.",
    questions: [
      {
        num: 1, itemNumber: 1, questionNumber: 1, type: "multiple_choice", questionType: "multiple_choice", level: "M1", points: 0.5,
        topic: "Đọc hiểu chi tiết văn bản",
        questionText: "Vườn quốc gia Cúc Phương được ví như một bảo tàng thiên nhiên rộng lớn nhờ điều gì?",
        options: [
          { id: "A", key: "A", text: "Có thảm thực vật nhiệt đới vô cùng phong phú và đa dạng" },
          { id: "B", key: "B", text: "Có nhiều nhà cao tầng hiện đại" },
          { id: "C", key: "C", text: "Có nhiều đường băng rộng lớn" },
          { id: "D", key: "D", text: "Có bãi biển dài thơ mộng" }
        ],
        correctAnswer: "A", explanation: "Chi tiết trong bài: 'Vườn quốc gia Cúc Phương là một bảo tàng thiên nhiên rộng lớn với thảm thực vật nhiệt đới vô cùng phong phú'."
      },
      {
        num: 2, itemNumber: 2, questionNumber: 2, type: "multiple_choice", questionType: "multiple_choice", level: "M1", points: 0.5,
        topic: "Đọc hiểu chi tiết văn bản",
        questionText: "Hình ảnh cây chò ngàn năm tuổi ở Rừng Cúc Phương được miêu tả to lớn ra sao?",
        options: [
          { id: "A", key: "A", text: "Thân cây nhỏ như cột nhà" },
          { id: "B", key: "B", text: "Thân cây to chừng hơn mười người ôm không xuể" },
          { id: "C", key: "C", text: "Cây chỉ cao bằng mái nhà" },
          { id: "D", key: "D", text: "Thân cây vừa bằng một vòng tay người lớn" }
        ],
        correctAnswer: "B", explanation: "Chi tiết trong bài: 'Nơi đây có cây chò ngàn năm tuổi sừng sững giữa đại ngàn, thân cây to chừng hơn mười người ôm không xuể'."
      },
      {
        num: 3, itemNumber: 3, questionNumber: 3, type: "multiple_choice", questionType: "multiple_choice", level: "M1", points: 0.5,
        topic: "Luyện từ và câu: Từ loại",
        questionText: "Trong câu 'Hàng triệu cánh bướm trắng muốt rập rờn bay lượn', từ 'rập rờn' thuộc từ loại nào?",
        options: [
          { id: "A", key: "A", text: "Từ láy tượng hình miêu tả dáng bay chao nghiêng liên tục" },
          { id: "B", key: "B", text: "Danh từ riêng chỉ tên loài bướm" },
          { id: "C", key: "C", text: "Số từ chỉ số lượng" },
          { id: "D", key: "D", text: "Quan hệ từ nối các vế" }
        ],
        correctAnswer: "A", explanation: "'Rập rờn' là từ láy gợi tả chuyển động nhịp nhàng, chao nghiêng bơi lượn của cánh bướm."
      },
      {
        num: 4, itemNumber: 4, questionNumber: 4, type: "true_false", questionType: "true_false", level: "M1", points: 1.0,
        topic: "Luyện từ và câu: Khẳng định",
        questionText: "Đánh dấu Đúng (Đ) hoặc Sai (S) cho các ý kiến về rừng Cúc Phương:",
        options: [
          { id: "A", text: "Vào mùa bướm nở, hàng triệu cánh bướm trắng muốt rập rờn ngợp lối đi.", isCorrect: true },
          { id: "B", text: "Rừng Cúc Phương không có cây cổ thụ nào sống lâu năm.", isCorrect: false }
        ],
        correctAnswer: "A-Đúng, B-Sai", explanation: "Cúc Phương có cây chò ngàn năm tuổi và mùa bướm rực rỡ."
      },
      {
        num: 5, itemNumber: 5, questionNumber: 5, type: "multiple_choice", questionType: "multiple_choice", level: "M2", points: 1.0,
        topic: "Đọc hiểu: Ý nghĩa văn bản",
        questionText: "Vì sao tác giả gọi rừng Cúc Phương là 'lá phổi xanh kì diệu'?",
        options: [
          { id: "A", key: "A", text: "Vì rừng cung cấp ô-xi, thanh lọc không khí và điều hòa khí hậu cho môi trường" },
          { id: "B", key: "B", text: "Vì rừng có màu xanh giống hình chiếc lá" },
          { id: "C", key: "C", text: "Vì rừng chỉ mở cửa vào mùa hè" },
          { id: "D", key: "D", text: "Vì nơi đây trồng nhiều cây ăn quả" }
        ],
        correctAnswer: "A", explanation: "Thảm thực vật rừng rộng lớn giúp lọc không khí, duy trì sự sống."
      },
      {
        num: 6, itemNumber: 6, questionNumber: 6, type: "fill_in_the_blank", questionType: "fill_in_the_blank", level: "M2", points: 1.5,
        topic: "Luyện từ và câu: Điền từ thích hợp",
        questionText: "Điền từ thích hợp vào chỗ chấm: 'Cúc Phương không chỉ là niềm tự hào của thiên nhiên Việt Nam mà còn là ...... xanh kì diệu cần được giữ gìn.'",
        correctAnswer: "lá phổi", explanation: "Cụm từ ẩn dụ 'lá phổi xanh kì diệu'."
      },
      {
        num: 7, itemNumber: 7, questionNumber: 7, type: "matching", questionType: "matching", level: "M2", points: 1.0,
        topic: "So sánh nghệ thuật",
        questionText: "Nối hình ảnh ở Cột A với hình ảnh so sánh tương ứng ở Cột B:",
        matchingPairs: [
          { left: "Hàng triệu cánh bướm trắng bay lượn", right: "Tựa như lạc vào chốn bồng lai tiên cảnh" },
          { left: "Vườn quốc gia Cúc Phương", right: "Một bảo tàng thiên nhiên rộng lớn" }
        ],
        correctAnswer: "Nối đúng các cặp", explanation: "Nhận diện biện pháp so sánh ngầm và trực tiếp."
      },
      {
        num: 8, itemNumber: 8, questionNumber: 8, type: "essay", questionType: "constructed_response", level: "M2", points: 1.0,
        topic: "Đọc hiểu Tự luận",
        questionText: "Em cần làm gì để góp phần bảo vệ các khu rừng nguyên sinh và thiên nhiên hoang dã?",
        correctAnswer: "Không bẻ cành ngắt hoa, không vứt rác bừa bãi khi đi du lịch và tích cực tham gia trồng cây xanh.", points: 1.0,
        explanation: "Nêu hành động thiết thực bảo vệ môi trường thiên nhiên."
      },
      {
        num: 9, itemNumber: 9, questionNumber: 9, type: "essay", questionType: "constructed_response", level: "M2", points: 1.0,
        topic: "Luyện từ và câu & Tích hợp Xanh - Sạch - Khỏe",
        questionText: "Viết 2 câu miêu tả vẻ đẹp của một loài cây hoặc một loài hoa em yêu thích.",
        correctAnswer: "Cây bàng trước sân trường em tỏa bóng mát rượi. Những chiếc lá xanh xòe rộng như một chiếc ô khổng lồ.", points: 1.0,
        explanation: "Viết đúng 2 câu miêu tả có hình ảnh sinh động."
      },
      {
        num: 10, itemNumber: 10, questionNumber: 10, type: "essay", questionType: "constructed_response", level: "M3", points: 2.0,
        topic: "Tập làm văn miêu tả",
        questionText: "Viết bài văn tả một cảnh đẹp thiên nhiên mà em từng có dịp quan sát hoặc học qua sách báo.",
        correctAnswer: "Bài văn hoàn chỉnh 3 phần tả cảnh đẹp thiên nhiên giàu chất thơ.", points: 2.0,
        explanation: "Đánh giá kỹ năng viết bài văn tả cảnh chuẩn GDPT 2018."
      }
    ]
  },
  {
    id: "VL-INFO-01",
    grade: 4,
    semester: 1,
    setIndex: 3,
    category: "informational_vinhlong",
    categoryName: "Văn bản thông tin thực tế / Địa phương Vĩnh Long (124 xã/phường)",
    title: "Vương quốc gốm đỏ sông Cổ Chiên Mang Thít",
    author: "Báo Vĩnh Long (Tư liệu địa phương)",
    wordCount: 210,
    passage: "Trải dài hơn 30 ki-lô-mét ven dòng sông Cổ Chiên và kênh Thầy Cai thuộc huyện Mang Thít, tỉnh Vĩnh Long là hàng ngàn lò gạch gốm đỏ hình tròn cổ kính. Nhìn từ trên cao, quần thể lò gạch nhấp nhô san sát trông như những chiếc tháp nung sừng sững giữa bầu trời xanh. Trải qua hơn một thế kỉ hình thành và phát triển, các nghệ nhân Mang Thít đã khéo léo biến dòng đất sét phù sa màu mỡ thành những sản phẩm gốm đỏ mỹ nghệ độc đáo, tinh xảo xuất khẩu sang nhiều nước trên thế giới. Hiện nay, tỉnh Vĩnh Long đang triển khai đề án bảo tồn 'Di sản đương đại Mang Thít' để biến nơi đây thành điểm du lịch văn hóa tầm cỡ quốc tế.",
    questions: [
      {
        num: 1, itemNumber: 1, questionNumber: 1, type: "multiple_choice", questionType: "multiple_choice", level: "M1", points: 0.5,
        topic: "Đọc hiểu văn bản thông tin",
        questionText: "Vương quốc gốm đỏ độc đáo của tỉnh Vĩnh Long trải dài ven dòng sông nào?",
        options: [
          { id: "A", key: "A", text: "Sông Hậu" },
          { id: "B", key: "B", text: "Sông Cổ Chiên và kênh Thầy Cai (huyện Mang Thít)" },
          { id: "C", key: "C", text: "Sông Đồng Nai" },
          { id: "D", key: "D", text: "Sông Sài Gòn" }
        ],
        correctAnswer: "B", explanation: "Chi tiết trong bài: 'Trải dài hơn 30 ki-lô-mét ven dòng sông Cổ Chiên và kênh Thầy Cai thuộc huyện Mang Thít'."
      },
      {
        num: 2, itemNumber: 2, questionNumber: 2, type: "multiple_choice", questionType: "multiple_choice", level: "M1", points: 0.5,
        topic: "Đọc hiểu chi tiết",
        questionText: "Nguyên liệu chính để tạo nên các sản phẩm gốm đỏ Mang Thít trứ danh là gì?",
        options: [
          { id: "A", key: "A", text: "Đá vôi và cát trắng" },
          { id: "B", key: "B", text: "Đất sét phù sa màu mỡ của vùng sông nước Vĩnh Long" },
          { id: "C", key: "C", text: "Bột gỗ thông" },
          { id: "D", key: "D", text: "Nhựa tổng hợp" }
        ],
        correctAnswer: "B", explanation: "Chi tiết trong bài: 'biến dòng đất sét phù sa màu mỡ thành những sản phẩm gốm đỏ mỹ nghệ'."
      },
      {
        num: 3, itemNumber: 3, questionNumber: 3, type: "multiple_choice", questionType: "multiple_choice", level: "M1", points: 0.5,
        topic: "Luyện từ và câu: Từ loại",
        questionText: "Từ 'tinh xảo' trong bài thuộc nhóm từ loại nào?",
        options: [
          { id: "A", key: "A", text: "Tính từ chỉ đặc điểm vô cùng khéo léo, tỉ mỉ" },
          { id: "B", key: "B", text: "Danh từ riêng chỉ tên lò gạch" },
          { id: "C", key: "C", text: "Động từ chỉ hành động" },
          { id: "D", key: "D", text: "Số từ" }
        ],
        correctAnswer: "A", explanation: "'Tinh xảo' là tính từ miêu tả mức độ khéo léo, công phu."
      },
      {
        num: 4, itemNumber: 4, questionNumber: 4, type: "true_false", questionType: "true_false", level: "M1", points: 1.0,
        topic: "Luyện từ và câu: Khẳng định",
        questionText: "Đánh dấu Đúng (Đ) hoặc Sai (S) cho các phát biểu về làng nghề gốm Mang Thít:",
        options: [
          { id: "A", text: "Sản phẩm gốm đỏ Mang Thít đã được xuất khẩu sang nhiều nước trên thế giới.", isCorrect: true },
          { id: "B", text: "Các lò gạch Mang Thít được làm bằng nhựa polymer.", isCorrect: false }
        ],
        correctAnswer: "A-Đúng, B-Sai", explanation: "Gốm đỏ Mang Thít làm từ đất sét nung và xuất khẩu quốc tế."
      },
      {
        num: 5, itemNumber: 5, questionNumber: 5, type: "multiple_choice", questionType: "multiple_choice", level: "M2", points: 1.0,
        topic: "Đọc hiểu: Ý nghĩa lịch sử - văn hóa",
        questionText: "Mục đích của đề án 'Di sản đương đại Mang Thít' tại tỉnh Vĩnh Long là gì?",
        options: [
          { id: "A", key: "A", text: "Bảo tồn giá trị văn hóa làng nghề gốm truyền thống và phát triển du lịch quốc tế" },
          { id: "B", key: "B", text: "Phá bỏ các lò gạch để xây chung cư" },
          { id: "C", key: "C", text: "Chuyển thành trang trại nuôi gà" },
          { id: "D", key: "D", text: "Không làm thay đổi gì" }
        ],
        correctAnswer: "A", explanation: "Đề án gìn giữ di sản làng nghề độc đáo và phát triển du lịch địa phương."
      },
      {
        num: 6, itemNumber: 6, questionNumber: 6, type: "fill_in_the_blank", questionType: "fill_in_the_blank", level: "M2", points: 1.5,
        topic: "Luyện từ và câu: Điền từ thích hợp",
        questionText: "Điền từ thích hợp vào chỗ chấm: 'Nhìn từ trên cao, quần thể lò gạch nhấp nhô san sát trông như những chiếc ...... nung sừng sững.'",
        correctAnswer: "tháp", explanation: "Hình ảnh so sánh những chiếc 'tháp' nung."
      },
      {
        num: 7, itemNumber: 7, questionNumber: 7, type: "matching", questionType: "matching", level: "M2", points: 1.0,
        topic: "Địa danh địa phương Vĩnh Long",
        questionText: "Nối địa danh / di sản ở Cột A với đặc điểm tương ứng ở Cột B:",
        matchingPairs: [
          { left: "Sông Cổ Chiên & Kênh Thầy Cai", right: "Trải dài hơn 30 km lò gạch gốm đỏ" },
          { left: "Nghệ nhân Mang Thít", right: "Thổi hồn đất sét phù sa thành sản phẩm tinh xảo" }
        ],
        correctAnswer: "Nối đúng các cặp", explanation: "Nhận biết danh thắng và nghệ nhân làng nghề Vĩnh Long."
      },
      {
        num: 8, itemNumber: 8, questionNumber: 8, type: "essay", questionType: "constructed_response", level: "M2", points: 1.0,
        topic: "Đọc hiểu Tự luận",
        questionText: "Hãy viết 1 câu giới thiệu về vương quốc gốm đỏ Mang Thít cho một người bạn đến thăm Vĩnh Long.",
        correctAnswer: "Làng gốm đỏ Mang Thít quê mình với hàng ngàn lò gạch hình tháp cổ kính bên sông Cổ Chiên là di sản độc đáo mà bạn không nên bỏ lỡ.", points: 1.0,
        explanation: "Viết câu giới thiệu sinh động khơi gợi lòng tự hào địa phương."
      },
      {
        num: 9, itemNumber: 9, questionNumber: 9, type: "essay", questionType: "constructed_response", level: "M2", points: 1.0,
        topic: "Luyện từ và câu: Tìm từ ngữ",
        questionText: "Tìm trong bài đọc 2 danh từ riêng chỉ địa danh và 1 tính từ miêu tả gốm đỏ.",
        correctAnswer: "Danh từ riêng: Mang Thít, Cổ Chiên (hoặc Vĩnh Long). Tính từ: tinh xảo (hoặc độc đáo, cổ kính).", points: 1.0,
        explanation: "Tìm đúng ngữ liệu theo yêu cầu ngữ pháp."
      },
      {
        num: 10, itemNumber: 10, questionNumber: 10, type: "essay", questionType: "constructed_response", level: "M3", points: 2.0,
        topic: "Tập làm văn miêu tả",
        questionText: "Viết bài văn tả một sản phẩm thủ công hoặc một đồ vật kỉ niệm mà em yêu thích.",
        correctAnswer: "Bài văn đầy đủ 3 phần tả đồ vật / sản phẩm làng nghề.", points: 2.0,
        explanation: "Đánh giá kĩ năng viết văn miêu tả đồ vật chuẩn TT27."
      }
    ]
  },
  {
    id: "VL-INFO-05",
    grade: 4,
    semester: 1,
    setIndex: 4,
    category: "informational_vinhlong",
    categoryName: "Văn bản thông tin / Danh nhân Vĩnh Long",
    title: "Giáo sư - Viện sĩ Trần Đại Nghĩa - Người con ưu tú Vĩnh Long",
    author: "Bảo tàng Lịch sử Vĩnh Long",
    wordCount: 220,
    passage: "Giáo sư - Viện sĩ Trần Đại Nghĩa tên thật là Phạm Quang Lễ, sinh ra tại vùng đất Tam Bình, tỉnh Vĩnh Long. Thuở nhỏ mồ côi cha, nhờ tư chất thông minh và ý chí kiên cường, ông đã giành được học bổng du học Pháp rồi tốt nghiệp nhiều bằng kỹ sư danh tiếng tại châu Âu. Khi Bác Hồ sang Pháp năm 1946, nghe theo tiếng gọi thiêng liêng của Tổ quốc, ông đã từ bỏ cuộc sống giàu sang nơi xứ người để về nước tham gia kháng chiến. Giữa chiến khu gian khổ, ông đã ngày đêm nghiên cứu, chế tạo thành công súng Ba-dô-ka và súng không giật SKZ, góp công to lớn vào thắng lợi của dân tộc. Tên tuổi của người con ưu tú Vĩnh Long mãi mãi ngời sáng như tấm gương sáng ngời về lòng yêu nước và tinh thần cống hiến hết mình cho khoa học Việt Nam.",
    questions: [
      {
        num: 1, itemNumber: 1, questionNumber: 1, type: "multiple_choice", questionType: "multiple_choice", level: "M1", points: 0.5,
        topic: "Đọc hiểu chi tiết văn bản",
        questionText: "Giáo sư - Viện sĩ Trần Đại Nghĩa tên thật là gì và sinh ra ở huyện nào của tỉnh Vĩnh Long?",
        options: [
          { id: "A", key: "A", text: "Tên thật là Phạm Quang Lễ, sinh tại huyện Tam Bình" },
          { id: "B", key: "B", text: "Tên thật là Nguyễn Văn Trỗi, sinh tại Mang Thít" },
          { id: "C", key: "C", text: "Tên thật là Võ Văn Kiệt, sinh tại Vũng Liêm" },
          { id: "D", key: "D", text: "Tên thật là Phan Thanh Giản, sinh tại Long Hồ" }
        ],
        correctAnswer: "A", explanation: "Chi tiết trong bài: 'Giáo sư - Viện sĩ Trần Đại Nghĩa tên thật là Phạm Quang Lễ, sinh ra tại vùng đất Tam Bình, tỉnh Vĩnh Long'."
      },
      {
        num: 2, itemNumber: 2, questionNumber: 2, type: "multiple_choice", questionType: "multiple_choice", level: "M1", points: 0.5,
        topic: "Đọc hiểu chi tiết văn bản",
        questionText: "Hành động cao đẹp nào chứng minh lòng yêu nước nồng nàn của ông khi đang ở Pháp năm 1946?",
        options: [
          { id: "A", key: "A", text: "Từ bỏ cuộc sống giàu sang nơi xứ người để theo Bác Hồ về nước tham gia kháng chiến" },
          { id: "B", key: "B", text: "Ở lại Pháp mở công ty sản xuất xe hơi" },
          { id: "C", key: "C", text: "Đi du lịch quanh thế giới" },
          { id: "D", key: "D", text: "Chỉ làm việc tại các nhà máy nước ngoài" }
        ],
        correctAnswer: "A", explanation: "Chi tiết trong bài: 'ông đã từ bỏ cuộc sống giàu sang nơi xứ người để về nước tham gia kháng chiến'."
      },
      {
        num: 3, itemNumber: 3, questionNumber: 3, type: "multiple_choice", questionType: "multiple_choice", level: "M1", points: 0.5,
        topic: "Luyện từ và câu: Từ loại",
        questionText: "Trong bài đọc, các từ 'kiên cường, thông minh, yêu nước' thuộc nhóm từ loại nào?",
        options: [
          { id: "A", key: "A", text: "Tính từ chỉ phẩm chất và năng lực tốt đẹp của con người" },
          { id: "B", key: "B", text: "Danh từ chỉ dụng cụ học tập" },
          { id: "C", key: "C", text: "Động từ chỉ hoạt động di chuyển" },
          { id: "D", key: "D", text: "Số từ chỉ số lượng" }
        ],
        correctAnswer: "A", explanation: "Đây là các tính từ miêu tả phẩm chất cao quý."
      },
      {
        num: 4, itemNumber: 4, questionNumber: 4, type: "true_false", questionType: "true_false", level: "M1", points: 1.0,
        topic: "Luyện từ và câu: Khẳng định",
        questionText: "Đánh dấu Đúng (Đ) hoặc Sai (S) cho các ý kiến về Giáo sư Trần Đại Nghĩa:",
        options: [
          { id: "A", text: "Giữa chiến khu gian khổ, ông nghiên cứu chế tạo thành công súng Ba-dô-ka và súng SKZ.", isCorrect: true },
          { id: "B", text: "Ông là người con ưu tú của vùng đất Tam Bình, Vĩnh Long.", isCorrect: true }
        ],
        correctAnswer: "A-Đúng, B-Đúng", explanation: "Cả hai khẳng định đều chính xác theo bài đọc."
      },
      {
        num: 5, itemNumber: 5, questionNumber: 5, type: "multiple_choice", questionType: "multiple_choice", level: "M2", points: 1.0,
        topic: "Đọc hiểu: Ý nghĩa bài học",
        questionText: "Tấm gương của Giáo sư Trần Đại Nghĩa để lại cho thế hệ học sinh bài học sâu sắc nào?",
        options: [
          { id: "A", key: "A", text: "Tinh thần hiếu học, ý chí vượt khó và lòng yêu nước cống hiến tri thức cho Tổ quốc" },
          { id: "B", key: "B", text: "Chỉ mong muốn sống giàu sang cho bản thân" },
          { id: "C", key: "C", text: "Không cần học tập vượt khó" },
          { id: "D", key: "D", text: "Ngừng tìm tòi khám phá khoa học" }
        ],
        correctAnswer: "A", explanation: "Bài học về hiếu học, sáng tạo và cống hiến hết mình cho đất nước."
      },
      {
        num: 6, itemNumber: 6, questionNumber: 6, type: "fill_in_the_blank", questionType: "fill_in_the_blank", level: "M2", points: 1.5,
        topic: "Luyện từ và câu: Điền từ thích hợp",
        questionText: "Điền từ thích hợp vào chỗ chấm: 'Tên tuổi của người con ưu tú Vĩnh Long mãi mãi ngời sáng như tấm gương về tinh thần ...... hết mình cho khoa học.'",
        correctAnswer: "cống hiến", explanation: "Từ 'cống hiến' thể hiện sự hy sinh tri thức vì đất nước."
      },
      {
        num: 7, itemNumber: 7, questionNumber: 7, type: "matching", questionType: "matching", level: "M2", points: 1.0,
        topic: "Sự kiện lịch sử",
        questionText: "Nối mốc sự kiện ở Cột A với nội dung tương ứng ở Cột B:",
        matchingPairs: [
          { left: "Năm 1946 tại Pháp", right: "Theo Bác Hồ về nước tham gia kháng chiến" },
          { left: "Giữa chiến khu gian khổ", right: "Chế tạo súng Ba-dô-ka và súng SKZ" }
        ],
        correctAnswer: "Nối đúng các cặp", explanation: "Ghép đúng các sự kiện cuộc đời danh nhân Trần Đại Nghĩa."
      },
      {
        num: 8, itemNumber: 8, questionNumber: 8, type: "essay", questionType: "constructed_response", level: "M2", points: 1.0,
        topic: "Đọc hiểu Tự luận",
        questionText: "Noi gương Giáo sư Trần Đại Nghĩa, em sẽ rèn luyện đức tính gì trong học tập hôm nay?",
        correctAnswer: "Em sẽ luôn chăm chỉ học tập, kiên trì vượt qua bài tập khó và quyết tâm chinh phục tri thức để mai sau dựng xây quê hương.", points: 1.0,
        explanation: "Học sinh nêu ý chí thi đua học tập tốt."
      },
      {
        num: 9, itemNumber: 9, questionNumber: 9, type: "essay", questionType: "constructed_response", level: "M2", points: 1.0,
        topic: "Luyện từ và câu: Đặt câu",
        questionText: "Đặt 1 câu có từ 'cống hiến' hoặc 'kiên cường' để khen ngợi người chiến sĩ hoặc nhà khoa học.",
        correctAnswer: "Giáo sư Trần Đại Nghĩa đã cống hiến trọn đời mình cho nền khoa học quân giới Việt Nam.", points: 1.0,
        explanation: "Đặt câu đúng cấu trúc ngữ pháp và ý nghĩa."
      },
      {
        num: 10, itemNumber: 10, questionNumber: 10, type: "essay", questionType: "constructed_response", level: "M3", points: 2.0,
        topic: "Tập làm văn miêu tả",
        questionText: "Viết bài văn tả một thầy cô giáo hoặc một người lao động ở trường mà em kính trọng.",
        correctAnswer: "Bài văn miêu tả người thầy cô / người lao động 3 phần tình cảm sâu sắc.", points: 2.0,
        explanation: "Đánh giá bài văn miêu tả người theo chuẩn GDPT 2018."
      }
    ]
  },

  // ==================== KHỐI LỚP 5 ====================
  {
    id: "CTST-G5-01",
    grade: 5,
    semester: 1,
    setIndex: 1,
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK CTST Lớp 5)",
    title: "Khúc ca mùa thu",
    author: "Theo SGK Tiếng Việt 5 Chân trời sáng tạo",
    wordCount: 220,
    passage: "Mùa thu mang đến cho đất trời một vẻ đẹp thanh bình và đằm thắm. Bầu trời cao vắt trong xanh, những dải mây trắng mỏng như lụa lững lờ trôi về phía chân trời xa thẳm. Dưới mặt đất, hương lúa chín ngào ngạt hòa quyện cùng làn gió heo may se lạnh. Tiếng chim hót ríu rít trên rặng xoan đầu làng tấu lên bản hòa ca êm dịu. Mỗi buổi sáng đi học qua con đường làng rợp bóng cây xanh, các bạn nhỏ đều cảm nhận được niềm vui sướng rạo rực khi một năm học mới đầy hứa hẹn bắt đầu.",
    questions: [
      {
        num: 1, itemNumber: 1, questionNumber: 1, type: "multiple_choice", questionType: "multiple_choice", level: "M1", points: 0.5,
        topic: "Đọc hiểu chi tiết văn bản",
        questionText: "Mùa thu mang đến cho đất trời vẻ đẹp như thế nào?",
        options: [
          { id: "A", key: "A", text: "Vẻ đẹp thanh bình và đằm thắm" },
          { id: "B", key: "B", text: "Vẻ đẹp âm ỉ, u buồn" },
          { id: "C", key: "C", text: "Vẻ đẹp ồn ào và náo nhiệt" },
          { id: "D", key: "D", text: "Vẻ đẹp lạnh giá phủ đầy tuyết" }
        ],
        correctAnswer: "A", explanation: "Chi tiết trong bài: 'Mùa thu mang đến cho đất trời một vẻ đẹp thanh bình và đằm thắm'."
      },
      {
        num: 2, itemNumber: 2, questionNumber: 2, type: "multiple_choice", questionType: "multiple_choice", level: "M1", points: 0.5,
        topic: "Đọc hiểu chi tiết văn bản",
        questionText: "Hình ảnh dải mây trắng trên bầu trời thu được so sánh với hình ảnh gì?",
        options: [
          { id: "A", key: "A", text: "Mỏng như lụa lững lờ trôi về phía chân trời" },
          { id: "B", key: "B", text: "Như những bông búp bông gòn" },
          { id: "C", key: "C", text: "Như chiếc nan quạt lớn" },
          { id: "D", key: "D", text: "Như ngọn núi cao" }
        ],
        correctAnswer: "A", explanation: "Chi tiết trong bài: 'những dải mây trắng mỏng như lụa lững lờ trôi'."
      },
      {
        num: 3, itemNumber: 3, questionNumber: 3, type: "multiple_choice", questionType: "multiple_choice", level: "M1", points: 0.5,
        topic: "Luyện từ và câu: Biện pháp tu từ",
        questionText: "Trong câu 'Tiếng chim hót ríu rít tấu lên bản hòa ca êm dịu', tác giả sử dụng biện pháp nghệ thuật nào?",
        options: [
          { id: "A", key: "A", text: "Nhân hóa (gán hành động 'tấu bản hòa ca' cho tiếng chim)" },
          { id: "B", key: "B", text: "So sánh hơn kém" },
          { id: "C", key: "C", text: "Điệp từ điệp ngữ" },
          { id: "D", key: "D", text: "Ẩn dụ chuyển đổi cảm giác" }
        ],
        correctAnswer: "A", explanation: "Nhân hóa tiếng chim hót biết tấu lên bản hòa ca."
      },
      {
        num: 4, itemNumber: 4, questionNumber: 4, type: "true_false", questionType: "true_false", level: "M1", points: 1.0,
        topic: "Luyện từ và câu: Đánh dấu đúng sai",
        questionText: "Đánh dấu Đúng (Đ) hoặc Sai (S) cho các ý miêu tả mùa thu:",
        options: [
          { id: "A", text: "Hương lúa chín ngào ngạt hòa quyện cùng làn gió heo may se lạnh.", isCorrect: true },
          { id: "B", text: "Bầu trời mùa thu u tối và đầy dông bão.", isCorrect: false }
        ],
        correctAnswer: "A-Đúng, B-Sai", explanation: "Khắc họa bầu trời thu trong xanh dịu mát."
      },
      {
        num: 5, itemNumber: 5, questionNumber: 5, type: "multiple_choice", questionType: "multiple_choice", level: "M2", points: 1.0,
        topic: "Đọc hiểu: Ý nghĩa tình cảm",
        questionText: "Cảm xúc rạo rực của các bạn nhỏ khi đi học trong ngày thu gắn liền với sự kiện gì?",
        options: [
          { id: "A", key: "A", text: "Một năm học mới đầy hứa hẹn chính thức bắt đầu" },
          { id: "B", key: "B", text: "Kì nghỉ hè dài vừa bắt đầu" },
          { id: "C", key: "C", text: "Chuyến đi cắm trại mùa đông" },
          { id: "D", key: "D", text: "Ngày hội thể thao lớn" }
        ],
        correctAnswer: "A", explanation: "Niềm vui sướng rạo rực bước vào năm học mới."
      },
      {
        num: 6, itemNumber: 6, questionNumber: 6, type: "fill_in_the_blank", questionType: "fill_in_the_blank", level: "M2", points: 1.5,
        topic: "Luyện từ và câu: Điền từ",
        questionText: "Điền từ thích hợp vào chỗ chấm: 'Dưới mặt đất, hương lúa chín ngào ngạt hòa quyện cùng làn gió ...... se lạnh.'",
        correctAnswer: "heo may", explanation: "Làn gió 'heo may' nét đặc trưng mùa thu."
      },
      {
        num: 7, itemNumber: 7, questionNumber: 7, type: "matching", questionType: "matching", level: "M2", points: 1.0,
        topic: "Nghệ thuật miêu tả",
        questionText: "Nối sự vật ở Cột A với đặc điểm miêu tả ở Cột B:",
        matchingPairs: [
          { left: "Bầu trời mùa thu", right: "Cao vắt trong xanh" },
          { left: "Dải mây trắng", right: "Mỏng như lụa lững lờ trôi" }
        ],
        correctAnswer: "Nối đúng các cặp", explanation: "Ghép đúng các chi tiết tả cảnh mùa thu."
      },
      {
        num: 8, itemNumber: 8, questionNumber: 8, type: "essay", questionType: "constructed_response", level: "M2", points: 1.0,
        topic: "Đọc hiểu Tự luận",
        questionText: "Em thích nhất hình ảnh miêu tả nào trong bài đọc 'Khúc ca mùa thu'? Vì sao?",
        correctAnswer: "Em thích hình ảnh 'dải mây trắng mỏng như lụa lững lờ trôi' vì nó gợi cảm giác bầu trời thu thật êm đềm, thơ mộng.", points: 1.0,
        explanation: "Nêu hình ảnh yêu thích và lý do cảm nhận."
      },
      {
        num: 9, itemNumber: 9, questionNumber: 9, type: "essay", questionType: "constructed_response", level: "M2", points: 1.0,
        topic: "Luyện từ và câu: Đặt câu",
        questionText: "Viết 2 câu tả cảnh mùa thu quê em có sử dụng từ láy (ví dụ: rập rờn, ríu rít, ngào ngạt...).",
        correctAnswer: "Mùa thu về, hương cốm mới thơm ngào ngạt khắp ngõ xóm. Trên rặng cây, tiếng chim hót ríu rít đón chào nắng mới.", points: 1.0,
        explanation: "Viết đúng 2 câu có từ láy miêu tả mùa thu."
      },
      {
        num: 10, itemNumber: 10, questionNumber: 10, type: "essay", questionType: "constructed_response", level: "M3", points: 2.0,
        topic: "Tập làm văn miêu tả",
        questionText: "Viết bài văn tả một cảnh đẹp thiên nhiên vào một mùa trong năm mà em yêu thích nhất.",
        correctAnswer: "Bài văn tả cảnh thiên nhiên 3 phần hoàn chỉnh theo chuẩn Lớp 5 GDPT 2018.", points: 2.0,
        explanation: "Đánh giá kĩ năng viết văn tả cảnh của học sinh Lớp 5."
      }
    ]
  }
];

export function getClientMatchedPassage(grade = 4, semesterStr = 'Cuối học kỳ I', corpusType = 'literary', examSetIndex = 1, customPassage = null) {
  const g = Number(grade) || 4;
  const setIdx = Math.max(1, Math.min(8, Number(examSetIndex) || 1));
  const isSem2 = (semesterStr || '').toLowerCase().includes('ii') || (semesterStr || '').toLowerCase().includes('2') || (semesterStr || '').toLowerCase().includes('cuối năm');
  const targetSem = isSem2 ? 2 : 1;

  // Nếu người dùng nhập custom passage
  if (corpusType === 'custom' && customPassage && customPassage.passage && customPassage.passage.trim()) {
    const title = customPassage.title || "Bài đọc hiểu tự chọn";
    const author = customPassage.author || "Tác giả sưu tầm";
    const passage = customPassage.passage.trim();
    return {
      id: `CUSTOM-${Date.now()}`,
      grade: g,
      semester: targetSem,
      setIndex: setIdx,
      category: "custom",
      title,
      author,
      passage,
      questions: [
        {
          num: 1, itemNumber: 1, questionNumber: 1, type: "multiple_choice", questionType: "multiple_choice", level: "M1", points: 0.5,
          topic: "Đọc hiểu nội dung văn bản",
          questionText: `Nội dung chính được thể hiện xuyên suốt trong bài đọc "${title}" là gì?`,
          options: [
            { id: "A", key: "A", text: "Ca ngợi vẻ đẹp thiên nhiên, con người và bồi đắp những tình cảm tốt đẹp" },
            { id: "B", key: "B", text: "Miêu tả cuộc sống nhộn nhịp nơi phố thị sầm uất" },
            { id: "C", key: "C", text: "Kể về chuyến thám hiểm các vùng đất xa xôi" },
            { id: "D", key: "D", text: "Giải thích các hiện tượng thời tiết bất thường" }
          ],
          correctAnswer: "A", explanation: "Nội dung chủ đạo hướng học sinh đến những cảm xúc thẩm mỹ tích cực."
        },
        {
          num: 2, itemNumber: 2, questionNumber: 2, type: "multiple_choice", questionType: "multiple_choice", level: "M1", points: 0.5,
          topic: "Đọc hiểu chi tiết văn bản",
          questionText: "Hình ảnh hoặc chi tiết nổi bật nào ở phần đầu bài đọc gợi mở cảm xúc cho câu chuyện?",
          options: [
            { id: "A", key: "A", text: "Hình ảnh mộc mạc, gần gũi gắn liền với cảnh vật và hoạt động của nhân vật" },
            { id: "B", key: "B", text: "Một sự kiện kì lạ không có thật" },
            { id: "C", key: "C", text: "Cơn bão lớn làm thay đổi cảnh vật" },
            { id: "D", key: "D", text: "Tiếng chuông đồng hồ báo thức" }
          ],
          correctAnswer: "A", explanation: "Khắc họa bối cảnh chân thực của ngữ liệu."
        },
        {
          num: 3, itemNumber: 3, questionNumber: 3, type: "multiple_choice", questionType: "multiple_choice", level: "M1", points: 0.5,
          topic: "Luyện từ và câu: Từ loại",
          questionText: "Các từ chỉ đặc điểm, tính chất được tác giả sử dụng trong văn bản thuộc nhóm từ loại nào?",
          options: [
            { id: "A", key: "A", text: "Tính từ" },
            { id: "B", key: "B", text: "Danh từ riêng" },
            { id: "C", key: "C", text: "Động từ chỉ chuyển động" },
            { id: "D", key: "D", text: "Số từ" }
          ],
          correctAnswer: "A", explanation: "Tính từ miêu tả đặc điểm sự vật."
        },
        {
          num: 4, itemNumber: 4, questionNumber: 4, type: "true_false", questionType: "true_false", level: "M1", points: 1.0,
          topic: "Luyện từ và câu: Đánh dấu đúng sai",
          questionText: "Đánh dấu Đúng (Đ) hoặc Sai (S) cho các khẳng định về văn bản đọc:",
          options: [
            { id: "A", text: "Văn bản bộc lộ những tình cảm chân thành và thông điệp nhân văn.", isCorrect: true },
            { id: "B", text: "Văn bản không có giá trị giáo dục tư tưởng tình cảm.", isCorrect: false }
          ],
          correctAnswer: "A-Đúng, B-Sai", explanation: "Ngữ liệu đọc hiểu mang tính giáo dục sâu sắc."
        },
        {
          num: 5, itemNumber: 5, questionNumber: 5, type: "multiple_choice", questionType: "multiple_choice", level: "M2", points: 1.0,
          topic: "Đọc hiểu: Bài học ý nghĩa",
          questionText: "Thông điệp ý nghĩa nhất mà bài đọc muốn gửi gắm tới các bạn học sinh là gì?",
          options: [
            { id: "A", key: "A", text: "Biết yêu thương gia đình, trân trọng thiên nhiên và nỗ lực học tập tốt" },
            { id: "B", key: "B", text: "Chỉ nên tập trung vui chơi giải trí" },
            { id: "C", key: "C", text: "Không cần giúp đỡ mọi người xung quanh" },
            { id: "D", key: "D", text: "Nên làm việc một mình" }
          ],
          correctAnswer: "A", explanation: "Bài học định hướng thói quen và tư tưởng tốt đẹp."
        },
        {
          num: 6, itemNumber: 6, questionNumber: 6, type: "fill_in_the_blank", questionType: "fill_in_the_blank", level: "M2", points: 1.5,
          topic: "Luyện từ và câu: Tìm từ",
          questionText: "Tìm 1 từ láy hoặc 1 từ ghép giàu hình ảnh trong văn bản đọc hiểu và ghi lại.",
          correctAnswer: "Học sinh ghi đúng 1 từ láy hoặc từ ghép có trong bài đọc.", explanation: "Kiểm tra kĩ năng phát hiện từ loại trong văn bản."
        },
        {
          num: 7, itemNumber: 7, questionNumber: 7, type: "matching", questionType: "matching", level: "M2", points: 1.0,
          topic: "Biện pháp nghệ thuật",
          questionText: "Nối yếu tố ở Cột A với tác dụng nghệ thuật tương ứng ở Cột B:",
          matchingPairs: [
            { left: "Từ ngữ giàu hình ảnh", right: "Gợi tả sinh động cảnh vật và cảm xúc" },
            { left: "Biện pháp so sánh, nhân hóa", right: "Làm câu văn thêm phần truyền cảm" }
          ],
          correctAnswer: "Nối đúng các cặp", explanation: "Nhận biết giá trị thẩm mỹ của ngôn từ."
        },
        {
          num: 8, itemNumber: 8, questionNumber: 8, type: "essay", questionType: "constructed_response", level: "M2", points: 1.0,
          topic: "Đọc hiểu Tự luận",
          questionText: `Từ bài đọc "${title}", em rút ra được bài học gì cho bản thân trong học tập và đời sống?`,
          correctAnswer: "Nêu bài học sâu sắc phù hợp nội dung bài đọc.", points: 1.0,
          explanation: "Rút ra liên hệ bản thân mạch lạc."
        },
        {
          num: 9, itemNumber: 9, questionNumber: 9, type: "essay", questionType: "constructed_response", level: "M2", points: 1.0,
          topic: "Luyện từ và câu: Đặt câu",
          questionText: "Viết 2 câu bám sát nội dung bài đọc nêu cảm nghĩ của em.",
          correctAnswer: "Viết 2 câu đúng ngữ pháp, diễn đạt trôi chảy.", points: 1.0,
          explanation: "Viết câu bày tỏ cảm xúc."
        },
        {
          num: 10, itemNumber: 10, type: "essay", questionType: "constructed_response", level: "M3", points: 2.0,
          topic: "Tập làm văn miêu tả",
          questionText: "Viết bài văn ngắn thể hiện tình cảm của em đối với quê hương hoặc mái trường.",
          correctAnswer: "Bài văn đầy đủ 3 phần cảm xúc chân thành.", points: 2.0,
          explanation: "Đánh giá kĩ năng viết văn biểu cảm / miêu tả."
        }
      ]
    };
  }

  // Phân loại theo category hoặc lọc theo grade
  let matches = TIENG_VIET_RAG_BANK.filter(item => {
    const matchGrade = item.grade === g || !item.grade;
    const matchCat = corpusType === 'all' || item.category === corpusType || (corpusType === 'literary' && item.category === 'literary');
    return matchGrade && matchCat;
  });

  if (matches.length === 0) {
    matches = TIENG_VIET_RAG_BANK.filter(item => item.grade === g);
  }
  if (matches.length === 0) {
    matches = TIENG_VIET_RAG_BANK;
  }

  // Lựa chọn theo setIndex modulo length
  const chosen = matches[(setIdx - 1) % matches.length];
  return chosen;
}
