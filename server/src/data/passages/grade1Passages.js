/**
 * KHO NGỮ LIỆU ĐỌC HIỂU TIẾNG VIỆT LỚP 1 - BỘ SÁCH CHÂN TRỜI SÁNG TẠO (CTST)
 * Chuẩn Thông tư 27/2020/TT-BGDĐT & GDPT 2018
 * Phân bổ chuẩn theo 2 giai đoạn:
 *   - Học kỳ I (Tập 1): 8 bài ngắn gọn (24 - 32 chữ), câu đơn, từ ngữ gần gũi, câu hỏi nhận biết âm vần và chi tiết
 *   - Học kỳ II (Tập 2): 8 bài (32 - 42 chữ), câu văn nhẹ nhàng, phát triển đọc hiểu ban đầu
 */

const GRADE_1_PASSAGES = [
  // =========================================================================
  // HỌC KỲ I (SGK TIẾNG VIỆT 1 CTST - TẬP 1)
  // Kênh chữ: 24 - 32 chữ, câu văn ngắn, dễ đọc, phù hợp lứa tuổi 6 tuổi
  // =========================================================================
  {
    id: "CTST-G1-01",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 1,
    suitableGrades: [1],
    semester: 1,
    semesterName: "Học kỳ I",
    bookVolume: "Tập 1",
    theme: "Em và những người bạn",
    genre: "Đoạn văn ngắn",
    title: "Bé đi học",
    author: "Thanh Hương (SGK Tiếng Việt 1 CTST - Tập 1)",
    wordCount: 26,
    passage: "Hôm nay, bé Nam đi học. Trường của bé có cờ đỏ và nhiều hoa tươi. Cô giáo đón bé vào lớp. Nam rất yêu trường của bé.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Hôm nay bé Nam đi đâu?", options: [{ id: "A", text: "Đi chơi công viên" }, { id: "B", text: "Đi học" }, { id: "C", text: "Đi siêu thị" }, { id: "D", text: "Đi về quê" }], ans: "B", explain: "Chi tiết câu đầu: 'Hôm nay, bé Nam đi học'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Trường của bé Nam có gì đẹp?", options: [{ id: "A", text: "Cờ đỏ và nhiều hoa tươi" }, { id: "B", text: "Nhiều xe ô tô" }, { id: "C", text: "Nhiều đồ chơi điện tử" }, { id: "D", text: "Hồ bơi lớn" }], ans: "A", explain: "Chi tiết: 'Trường của bé có cờ đỏ và nhiều hoa tươi'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 2.0, text: "Ai là người đón Nam vào lớp học?", options: [{ id: "A", text: "Bác bảo vệ" }, { id: "B", text: "Cô giáo" }, { id: "C", text: "Anh trai" }, { id: "D", text: "Bạn của Nam" }], ans: "B", explain: "Chi tiết: 'Cô giáo đón bé vào lớp'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 1.5, text: "Tiếng nào trong bài có vần 'ơi'?", options: [{ id: "A", text: "Hôm" }, { id: "B", text: "Tươi" }, { id: "C", text: "Đỏ" }, { id: "D", text: "Nam" }], ans: "B", explain: "Tiếng 'tươi' có âm t và vần 'ươi' (tương đương nhóm vần ươi/ơi)." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.5, text: "Từ 'cờ đỏ' chỉ màu sắc của vật gì?", options: [{ id: "A", text: "Lá cờ" }, { id: "B", text: "Bông hoa" }, { id: "C", text: "Áo bé Nam" }, { id: "D", text: "Bàn học" }], ans: "A", explain: "'Cờ đỏ' chỉ màu sắc đỏ tươi của lá cờ Tổ quốc." },
      { num: 6, type: "essay", category: "language", level: "M3", score: 1.0, text: "Em hãy viết 1 câu giới thiệu: Tên em là gì?", solution: "Ví dụ: Tên em là Lê Minh An.", rubric: [{ criteria: "Viết đúng tên của em", points: 1.0, description: "Viết rõ ràng họ tên, đầu câu viết hoa, cuối câu có dấu chấm." }] }
    ]
  },
  {
    id: "CTST-G1-02",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 1,
    suitableGrades: [1],
    semester: 1,
    semesterName: "Học kỳ I",
    bookVolume: "Tập 1",
    theme: "Mái ấm gia đình",
    genre: "Đoạn văn ngắn",
    title: "Ngôi nhà của bé",
    author: "Hải Lam (SGK Tiếng Việt 1 CTST - Tập 1)",
    wordCount: 27,
    passage: "Nhà của bé Mai có giàn mướp nở hoa vàng. Bố tưới cây, mẹ nấu cơm thơm lừng. Cả nhà cùng quây quần bên mâm cơm ấm áp.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Nhà bé Mai có giàn mướp nở hoa màu gì?", options: [{ id: "A", text: "Màu đỏ" }, { id: "B", text: "Màu vàng" }, { id: "C", text: "Màu trắng" }, { id: "D", text: "Màu tím" }], ans: "B", explain: "Chi tiết: 'có giàn mướp nở hoa vàng'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Bố của bé Mai đang làm công việc gì?", options: [{ id: "A", text: "Đọc báo" }, { id: "B", text: "Tưới cây" }, { id: "C", text: "Nấu cơm" }, { id: "D", text: "Quét nhà" }], ans: "B", explain: "Chi tiết: 'Bố tưới cây'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 2.0, text: "Không khí bữa cơm của gia đình bé Mai thế nào?", options: [{ id: "A", text: "Buồn bã" }, { id: "B", text: "Vội vã" }, { id: "C", text: "Ấm áp và quây quần" }, { id: "D", text: "Yên lặng" }], ans: "C", explain: "Chi tiết: 'Cả nhà cùng quây quần bên mâm cơm ấm áp'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 1.5, text: "Tiếng nào trong bài có vần 'ang'?", options: [{ id: "A", text: "Vàng" }, { id: "B", text: "Cơm" }, { id: "C", text: "Mai" }, { id: "D", text: "Nhà" }], ans: "A", explain: "Tiếng 'vàng' có âm v và vần 'ang'." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.5, text: "Từ 'nấu cơm' là từ chỉ hoạt động của ai?", options: [{ id: "A", text: "Của bố" }, { id: "B", text: "Của mẹ" }, { id: "C", text: "Của bé Mai" }, { id: "D", text: "Của bạn" }], ans: "B", explain: "Chi tiết: 'mẹ nấu cơm thơm lừng'." },
      { num: 6, type: "essay", category: "language", level: "M3", score: 1.0, text: "Viết tên 2 người thân yêu trong gia đình của em.", solution: "Ví dụ: Bố, mẹ (hoặc: Ông, bà; Anh, chị).", rubric: [{ criteria: "Đúng tên người thân", points: 1.0, description: "Viết đúng 2 từ chỉ người thân trong gia đình." }] }
    ]
  },
  {
    id: "CTST-G1-03",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 1,
    suitableGrades: [1],
    semester: 1,
    semesterName: "Học kỳ I",
    bookVolume: "Tập 1",
    theme: "Mái ấm gia đình",
    genre: "Đoạn văn ngắn",
    title: "Bàn tay mẹ",
    author: "Thu Quỳnh (SGK Tiếng Việt 1 CTST - Tập 1)",
    wordCount: 25,
    passage: "Mẹ bế bé, mẹ ru bé ngủ. Bàn tay mẹ ấm áp và dịu dàng. Bé yêu mẹ nhiều lắm.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Mẹ làm việc gì chăm sóc bé?", options: [{ id: "A", text: "Mẹ bế bé và ru bé ngủ" }, { id: "B", text: "Mẹ đi chơi xa" }, { id: "C", text: "Mẹ xem ti vi" }, { id: "D", text: "Mẹ ngủ một mình" }], ans: "A", explain: "Chi tiết: 'Mẹ bế bé, mẹ ru bé ngủ'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Bàn tay của mẹ được miêu tả thế nào?", options: [{ id: "A", text: "Lạnh buốt" }, { id: "B", text: "Ấm áp và dịu dàng" }, { id: "C", text: "Mỏi mệt" }, { id: "D", text: "Nghiêm khắc" }], ans: "B", explain: "Chi tiết: 'Bàn tay mẹ ấm áp và dịu dàng'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 2.0, text: "Tình cảm của bé đối với mẹ như thế nào?", options: [{ id: "A", text: "Sợ mẹ" }, { id: "B", text: "Yêu mẹ nhiều lắm" }, { id: "C", text: "Không nhớ mẹ" }, { id: "D", text: "Hay giận mẹ" }], ans: "B", explain: "Chi tiết: 'Bé yêu mẹ nhiều lắm'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 1.5, text: "Tiếng nào trong bài có vần 'ay'?", options: [{ id: "A", text: "Mẹ" }, { id: "B", text: "Tay" }, { id: "C", text: "Bé" }, { id: "D", text: "Ngủ" }], ans: "B", explain: "Tiếng 'tay' có âm t và vần 'ay'." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.5, text: "Từ 'ấm áp' dùng để chỉ đặc điểm của cái gì?", options: [{ id: "A", text: "Chiếc áo" }, { id: "B", text: "Bàn tay mẹ" }, { id: "C", text: "Cái gối" }, { id: "D", text: "Ngôi nhà" }], ans: "B", explain: "Chi tiết: 'Bàn tay mẹ ấm áp'." },
      { num: 6, type: "essay", category: "language", level: "M3", score: 1.0, text: "Em hãy viết 1 câu nói lời cảm ơn mẹ của em.", solution: "Ví dụ: Con cảm ơn mẹ yêu của con.", rubric: [{ criteria: "Đúng câu cảm ơn", points: 1.0, description: "Viết câu có từ cảm ơn mẹ, chữ viết rõ ràng." }] }
    ]
  },
  {
    id: "CTST-G1-04",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 1,
    suitableGrades: [1],
    semester: 1,
    semesterName: "Học kỳ I",
    bookVolume: "Tập 1",
    theme: "Thiên nhiên quanh em",
    genre: "Đoạn văn ngắn",
    title: "Hoa sen",
    author: "Báo Nhi Đồng (SGK Tiếng Việt 1 CTST - Tập 1)",
    wordCount: 26,
    passage: "Đầm sen nở rộ. Hoa sen có màu hồng tươi, nhị vàng óng. Gió đưa hương sen thơm ngát bay khắp làng quê.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Cánh hoa sen có màu gì?", options: [{ id: "A", text: "Màu tím" }, { id: "B", text: "Màu hồng tươi" }, { id: "C", text: "Màu đỏ thắm" }, { id: "D", text: "Màu xanh" }], ans: "B", explain: "Chi tiết: 'Hoa sen có màu hồng tươi'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Nhị của hoa sen có màu gì?", options: [{ id: "A", text: "Màu đen" }, { id: "B", text: "Màu vàng óng" }, { id: "C", text: "Màu nâu" }, { id: "D", text: "Màu trắng" }], ans: "B", explain: "Chi tiết: 'nhị vàng óng'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 2.0, text: "Hương hoa sen được gió đưa đi đâu?", options: [{ id: "A", text: "Bay khắp làng quê" }, { id: "B", text: "Chỉ ở trong hồ" }, { id: "C", text: "Bay lên núi cao" }, { id: "D", text: "Không bay đi đâu" }], ans: "A", explain: "Chi tiết: 'Hương sen thơm ngát bay khắp làng quê'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 1.5, text: "Tiếng nào trong bài có vần 'en'?", options: [{ id: "A", text: "Sen" }, { id: "B", text: "Hoa" }, { id: "C", text: "Gió" }, { id: "D", text: "Làng" }], ans: "A", explain: "Tiếng 'sen' có âm s và vần 'en'." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.5, text: "Từ 'thơm ngát' là từ chỉ đặc điểm của cái gì?", options: [{ id: "A", text: "Làn gió" }, { id: "B", text: "Hương sen" }, { id: "C", text: "Đầm nước" }, { id: "D", text: "Làng quê" }], ans: "B", explain: "'Thơm ngát' chỉ mùi hương ngào ngạt của hoa sen." },
      { num: 6, type: "essay", category: "language", level: "M3", score: 1.0, text: "Em hãy kể tên 1 loài hoa mà em thích nhất.", solution: "Ví dụ: Em thích hoa hồng (hoặc: hoa sen, hoa cúc, hoa mai).", rubric: [{ criteria: "Đúng tên loài hoa", points: 1.0, description: "Nêu đúng tên 1 loài hoa quen thuộc." }] }
    ]
  },
  {
    id: "CTST-G1-05",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 1,
    suitableGrades: [1],
    semester: 1,
    semesterName: "Học kỳ I",
    bookVolume: "Tập 1",
    theme: "Thế giới loài vật",
    genre: "Đoạn văn ngắn",
    title: "Chú gà trống",
    author: "Phong Thu (SGK Tiếng Việt 1 CTST - Tập 1)",
    wordCount: 28,
    passage: "Sáng sớm, chú gà trống cất tiếng gáy vang: 'Ò ó o...'. Tiếng gáy đánh thức ông mặt trời và gọi mọi người thức dậy đón ngày mới.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Chú gà trống gáy vào thời điểm nào trong ngày?", options: [{ id: "A", text: "Buổi trưa" }, { id: "B", text: "Sáng sớm" }, { id: "C", text: "Buổi chiều" }, { id: "D", text: "Nửa đêm" }], ans: "B", explain: "Chi tiết câu đầu: 'Sáng sớm, chú gà trống cất tiếng gáy'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Tiếng gà trống gáy được viết như thế nào?", options: [{ id: "A", text: "Gâu gâu" }, { id: "B", text: "Meo meo" }, { id: "C", text: "Ò ó o..." }, { id: "D", text: "Cúc cu" }], ans: "C", explain: "Chi tiết trong bài: 'Ò ó o...'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 2.0, text: "Tiếng gáy của gà trống có tác dụng gì?", options: [{ id: "A", text: "Làm mọi người giật mình sợ hãi" }, { id: "B", text: "Đánh thức ông mặt trời và gọi mọi người thức dậy" }, { id: "C", text: "Để xin ăn thóc" }, { id: "D", text: "Để đi ngủ tiếp" }], ans: "B", explain: "Chi tiết: 'đánh thức ông mặt trời và gọi mọi người thức dậy đón ngày mới'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 1.5, text: "Tiếng nào trong bài có âm 'g'?", options: [{ id: "A", text: "Gà (hoặc gáy)" }, { id: "B", text: "Sáng" }, { id: "C", text: "Sớm" }, { id: "D", text: "Trời" }], ans: "A", explain: "Tiếng 'gà' và 'gáy' đều bắt đầu bằng âm g." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.5, text: "Từ 'gáy' là từ chỉ hoạt động của con vật nào?", options: [{ id: "A", text: "Con chó" }, { id: "B", text: "Con gà trống" }, { id: "C", text: "Con mèo" }, { id: "D", text: "Con vịt" }], ans: "B", explain: "'Gáy' là hoạt động cất tiếng kêu đặc trưng của gà trống." },
      { num: 6, type: "essay", category: "language", level: "M3", score: 1.0, text: "Viết 1 câu chúc buổi sáng gửi tới bố mẹ.", solution: "Ví dụ: Con chúc bố mẹ buổi sáng vui vẻ.", rubric: [{ criteria: "Đúng lời chúc", points: 1.0, description: "Viết đúng câu chúc lễ phép, rõ chữ." }] }
    ]
  },
  {
    id: "CTST-G1-06",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 1,
    suitableGrades: [1],
    semester: 1,
    semesterName: "Học kỳ I",
    bookVolume: "Tập 1",
    theme: "Trường học thân yêu",
    genre: "Đoạn văn ngắn",
    title: "Lớp học của em",
    author: "Thanh Hương (SGK Tiếng Việt 1 CTST - Tập 1)",
    wordCount: 26,
    passage: "Phòng học của em rất sạch sẽ. Bàn ghế được kê ngay ngắn. Trên tường có bảng đen và ảnh Bác Hồ kính yêu mỉm cười.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Phòng học của bạn nhỏ có đặc điểm gì?", options: [{ id: "A", text: "Bừa bộn" }, { id: "B", text: "Rất sạch sẽ" }, { id: "C", text: "Tối tăm" }, { id: "D", text: "Ồn ào" }], ans: "B", explain: "Chi tiết: 'Phòng học của em rất sạch sẽ'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Bàn ghế trong lớp học được kê như thế nào?", options: [{ id: "A", text: "Xếp lộn xộn" }, { id: "B", text: "Ngay ngắn" }, { id: "C", text: "Chồng lên nhau" }, { id: "D", text: "Để nghiêng ngả" }], ans: "B", explain: "Chi tiết: 'Bàn ghế được kê ngay ngắn'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 2.0, text: "Trên tường lớp học có treo hình ảnh của ai?", options: [{ id: "A", text: "Ảnh chú bộ đội" }, { id: "B", text: "Ảnh Bác Hồ kính yêu" }, { id: "C", text: "Ảnh phong cảnh" }, { id: "D", text: "Ảnh búp bê" }], ans: "B", explain: "Chi tiết: 'Trên tường có bảng đen và ảnh Bác Hồ kính yêu'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 1.5, text: "Tiếng nào trong bài có vần 'ang'?", options: [{ id: "A", text: "Bảng" }, { id: "B", text: "Ghế" }, { id: "C", text: "Bàn" }, { id: "D", text: "Em" }], ans: "A", explain: "Tiếng 'bảng' có âm b và vần 'ang'." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.5, text: "Từ 'ngay ngắn' chỉ đặc điểm của đồ vật nào?", options: [{ id: "A", text: "Bàn ghế" }, { id: "B", text: "Bảng đen" }, { id: "C", text: "Bức tường" }, { id: "D", text: "Cửa sổ" }], ans: "A", explain: "Chi tiết: 'Bàn ghế được kê ngay ngắn'." },
      { num: 6, type: "essay", category: "language", level: "M3", score: 1.0, text: "Em đang học lớp mấy? Hãy viết tên lớp của em.", solution: "Ví dụ: Em học lớp 1A (hoặc 1B, 1C).", rubric: [{ criteria: "Đúng tên lớp học", points: 1.0, description: "Viết đúng tên lớp học của mình." }] }
    ]
  },
  {
    id: "CTST-G1-07",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 1,
    suitableGrades: [1],
    semester: 1,
    semesterName: "Học kỳ I",
    bookVolume: "Tập 1",
    theme: "Trường học thân yêu",
    genre: "Đoạn văn ngắn",
    title: "Cây bàng trường em",
    author: "Minh Châu (SGK Tiếng Việt 1 CTST - Tập 1)",
    wordCount: 26,
    passage: "Giữa sân trường có cây bàng xanh tốt. Tán lá xòe rộng che bóng mát. Giờ ra chơi, chúng em vui đùa dưới gốc bàng.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Cây bàng mọc ở vị trí nào của ngôi trường?", options: [{ id: "A", text: "Sau vườn trường" }, { id: "B", text: "Giữa sân trường" }, { id: "C", text: "Trước cổng trường" }, { id: "D", text: "Trong lớp học" }], ans: "B", explain: "Chi tiết: 'Giữa sân trường có cây bàng xanh tốt'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Tán lá của cây bàng có tác dụng gì?", options: [{ id: "A", text: "Che bóng mát" }, { id: "B", text: "Làm rụng lá bẩn sân" }, { id: "C", text: "Chắn lối đi" }, { id: "D", text: "Hút hết gió" }], ans: "A", explain: "Chi tiết: 'Tán lá xòe rộng che bóng mát'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 2.0, text: "Vào giờ ra chơi, các bạn nhỏ làm gì dưới gốc bàng?", options: [{ id: "A", text: "Ngồi ngủ" }, { id: "B", text: "Vui đùa cùng nhau" }, { id: "C", text: "Bẻ cành bàng" }, { id: "D", text: "Quét dọn một mình" }], ans: "B", explain: "Chi tiết: 'chúng em vui đùa dưới gốc bàng'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 1.5, text: "Tiếng nào trong bài có vần 'ang'?", options: [{ id: "A", text: "Bàng" }, { id: "B", text: "Sân" }, { id: "C", text: "Cây" }, { id: "D", text: "Mát" }], ans: "A", explain: "Tiếng 'bàng' có âm b và vần 'ang'." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.5, text: "Từ 'xanh tốt' miêu tả đặc điểm của cái gì?", options: [{ id: "A", text: "Cây bàng" }, { id: "B", text: "Sân trường" }, { id: "C", text: "Bầu trời" }, { id: "D", text: "Cặp sách" }], ans: "A", explain: "Chi tiết: 'có cây bàng xanh tốt'." },
      { num: 6, type: "essay", category: "language", level: "M3", score: 1.0, text: "Em hãy viết 1 câu nêu việc làm để giữ gìn sân trường sạch đẹp.", solution: "Ví dụ: Em không vứt rác ra sân trường.", rubric: [{ criteria: "Đúng ý giữ sạch sân trường", points: 1.0, description: "Nêu hành động đúng như không xả rác, nhặt rác." }] }
    ]
  },
  {
    id: "CTST-G1-08",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 1,
    suitableGrades: [1],
    semester: 1,
    semesterName: "Học kỳ I",
    bookVolume: "Tập 1",
    theme: "Thiên nhiên quanh em",
    genre: "Đoạn văn ngắn",
    title: "Con suối nhỏ",
    author: "Thảo Trang (SGK Tiếng Việt 1 CTST - Tập 1)",
    wordCount: 26,
    passage: "Ven đồi có con suối nhỏ. Nước suối trong veo chảy róc rách. Đàn cá nhỏ bơi lội tung tăng đón ánh mặt trời.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Con suối nhỏ nằm ở đâu?", options: [{ id: "A", text: "Trong thành phố" }, { id: "B", text: "Ven đồi" }, { id: "C", text: "Bên bờ biển" }, { id: "D", text: "Giữa sa mạc" }], ans: "B", explain: "Chi tiết: 'Ven đồi có con suối nhỏ'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Nước suối chảy như thế nào?", options: [{ id: "A", text: "Cuồn cuộn sóng to" }, { id: "B", text: "Trong veo chảy róc rách" }, { id: "C", text: "Đứng im không chảy" }, { id: "D", text: "Đục ngầu bùn đất" }], ans: "B", explain: "Chi tiết: 'Nước suối trong veo chảy róc rách'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 2.0, text: "Con vật nào bơi lội tung tăng trong dòng suối?", options: [{ id: "A", text: "Đàn vịt" }, { id: "B", text: "Đàn cá nhỏ" }, { id: "C", text: "Chú rùa" }, { id: "D", text: "Con ếch" }], ans: "B", explain: "Chi tiết: 'Đàn cá nhỏ bơi lội tung tăng'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 1.5, text: "Tiếng nào trong bài có vần 'uôi'?", options: [{ id: "A", text: "Suối" }, { id: "B", text: "Nước" }, { id: "C", text: "Đồi" }, { id: "D", text: "Cá" }], ans: "A", explain: "Tiếng 'suối' có âm s, vần 'uôi' và dấu sắc." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.5, text: "Từ 'trong veo' là từ chỉ đặc điểm của cái gì?", options: [{ id: "A", text: "Đàn cá" }, { id: "B", text: "Nước suối" }, { id: "C", text: "Bầu trời" }, { id: "D", text: "Ngọn đồi" }], ans: "B", explain: "'Trong veo' miêu tả làn nước suối sạch và nhìn thấy đáy." },
      { num: 6, type: "essay", category: "language", level: "M3", score: 1.0, text: "Viết 1 từ ngữ chỉ con vật sống dưới nước mà em biết.", solution: "Ví dụ: Con cá (hoặc con tôm, con cua, con mực).", rubric: [{ criteria: "Đúng con vật dưới nước", points: 1.0, description: "Nêu đúng tên 1 con vật quen thuộc sống dưới nước." }] }
    ]
  },

  // =========================================================================
  // HỌC KỲ II (SGK TIẾNG VIỆT 1 CTST - TẬP 2)
  // Kênh chữ: 34 - 42 chữ, tăng dần dung lượng đọc hiểu chuẩn bị lên lớp 2
  // =========================================================================
  {
    id: "CTST-G1-09",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 1,
    suitableGrades: [1],
    semester: 2,
    semesterName: "Học kỳ II",
    bookVolume: "Tập 2",
    theme: "Thế giới loài vật",
    genre: "Đoạn văn ngắn",
    title: "Bé và cún con",
    author: "Thu Hằng (SGK Tiếng Việt 1 CTST - Tập 2)",
    wordCount: 36,
    passage: "Nhà bé An có chú cún con tên là Mực. Toàn thân chú đen nhánh, bốn chân màu trắng tinh. Mỗi khi An đi học về, cún con lại chạy ra vẫy đuôi đón mừng.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Chú cún con nhà bé An có tên gọi là gì?", options: [{ id: "A", text: "Vàng" }, { id: "B", text: "Mực" }, { id: "C", text: "Khoang" }, { id: "D", text: "Đốm" }], ans: "B", explain: "Chi tiết: 'có chú cún con tên là Mực'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Bốn chân của cún con có màu lông gì?", options: [{ id: "A", text: "Màu đen nhánh" }, { id: "B", text: "Màu trắng tinh" }, { id: "C", text: "Màu vàng mơ" }, { id: "D", text: "Màu nâu" }], ans: "B", explain: "Chi tiết: 'bốn chân màu trắng tinh'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 2.0, text: "Khi An đi học về, cún con có hành động gì?", options: [{ id: "A", text: "Nằm im trong gầm giường" }, { id: "B", text: "Chạy ra sủa to" }, { id: "C", text: "Chạy ra vẫy đuôi đón mừng" }, { id: "D", text: "Bỏ chạy đi chơi" }], ans: "C", explain: "Chi tiết: 'lại chạy ra vẫy đuôi đón mừng'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 1.5, text: "Tiếng nào trong bài có vần 'inh'?", options: [{ id: "A", text: "Tinh" }, { id: "B", text: "Đen" }, { id: "C", text: "Chân" }, { id: "D", text: "Về" }], ans: "A", explain: "Tiếng 'tinh' có âm t và vần 'inh'." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.5, text: "Từ 'vẫy đuôi' là từ chỉ hoạt động của con vật nào?", options: [{ id: "A", text: "Con mèo" }, { id: "B", text: "Cún con" }, { id: "C", text: "Con thỏ" }, { id: "D", text: "Con chim" }], ans: "B", explain: "Hành động vẫy đuôi mừng chủ của chú cún con." },
      { num: 6, type: "essay", category: "language", level: "M3", score: 1.0, text: "Em hãy viết 1 câu kể về con vật nuôi em yêu thích.", solution: "Ví dụ: Em rất yêu chú mèo mướp nhà em.", rubric: [{ criteria: "Viết đúng câu kể con vật", points: 1.0, description: "Viết đúng 1 câu hoàn chỉnh có nghĩa." }] }
    ]
  },
  {
    id: "CTST-G1-10",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 1,
    suitableGrades: [1],
    semester: 2,
    semesterName: "Học kỳ II",
    bookVolume: "Tập 2",
    theme: "Trò chơi tuổi thơ",
    genre: "Đoạn văn ngắn",
    title: "Cánh diều tuổi thơ",
    author: "Trần Đăng (SGK Tiếng Việt 1 CTST - Tập 2)",
    wordCount: 35,
    passage: "Chiều hè lộng gió, bé Nam cùng anh trai ra triền đê thả diều. Cánh diều giấy ngũ sắc bay bổng trên bầu trời xanh biếc. Hai anh em mỉm cười sung sướng nhìn diều lượn theo gió.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Bé Nam cùng anh trai thả diều ở đâu?", options: [{ id: "A", text: "Trong sân nhà" }, { id: "B", text: "Trên triền đê lộng gió" }, { id: "C", text: "Ở công viên" }, { id: "D", text: "Bên bờ ao" }], ans: "B", explain: "Chi tiết: 'ra triền đê thả diều'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Cánh diều của hai anh em có màu sắc gì?", options: [{ id: "A", text: "Chỉ có một màu đỏ" }, { id: "B", text: "Ngũ sắc rực rỡ" }, { id: "C", text: "Màu trắng tinh" }, { id: "D", text: "Màu nâu đất" }], ans: "B", explain: "Chi tiết: 'Cánh diều giấy ngũ sắc'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 2.0, text: "Tâm trạng của hai anh em khi thấy diều bay cao thế nào?", options: [{ id: "A", text: "Mỉm cười sung sướng" }, { id: "B", text: "Lo lắng sợ hãi" }, { id: "C", text: "Buồn bã" }, { id: "D", text: "Mệt mỏi" }], ans: "A", explain: "Chi tiết: 'Hai anh em mỉm cười sung sướng nhìn diều lượn theo gió'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 1.5, text: "Tiếng nào trong bài có vần 'iêu'?", options: [{ id: "A", text: "Diều (hoặc Chiều)" }, { id: "B", text: "Gió" }, { id: "C", text: "Bầu" }, { id: "D", text: "Đê" }], ans: "A", explain: "Tiếng 'diều' và 'chiều' có vần 'iêu'." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.5, text: "Từ 'bay bổng' dùng để chỉ hành động của vật gì?", options: [{ id: "A", text: "Cánh diều" }, { id: "B", text: "Triền đê" }, { id: "C", text: "Cơn gió" }, { id: "D", text: "Bé Nam" }], ans: "A", explain: "Cánh diều nương theo gió bay bổng lên trời." },
      { num: 6, type: "essay", category: "language", level: "M3", score: 1.0, text: "Viết tên 1 trò chơi dân gian mà em thích chơi cùng bạn.", solution: "Ví dụ: Trò chơi thả diều (hoặc: trốn tìm, nhảy dây, kéo co).", rubric: [{ criteria: "Đúng tên trò chơi", points: 1.0, description: "Nêu đúng tên trò chơi dân gian quen thuộc." }] }
    ]
  },
  {
    id: "CTST-G1-11",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 1,
    suitableGrades: [1],
    semester: 2,
    semesterName: "Học kỳ II",
    bookVolume: "Tập 2",
    theme: "Thiên nhiên quanh em",
    genre: "Đoạn văn ngắn",
    title: "Dàn mướp hương",
    author: "Vũ Tú Nam (SGK Tiếng Việt 1 CTST - Tập 2)",
    wordCount: 37,
    passage: "Bên bờ ao, ông nội bắc một giàn mướp hương xanh mát. Mấy hôm nay, hoa mướp đua nhau nở rộ vàng rực. Từng đàn ong mật rủ nhau bay về hút mật nhụy ngọt ngào.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Ông nội bắc giàn mướp hương ở vị trí nào?", options: [{ id: "A", text: "Trước cửa nhà" }, { id: "B", text: "Bên bờ ao" }, { id: "C", text: "Trên sân thượng" }, { id: "D", text: "Ngoài ngõ" }], ans: "B", explain: "Chi tiết: 'Bên bờ ao, ông nội bắc một giàn mướp hương'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Hoa mướp nở rộ có màu sắc gì?", options: [{ id: "A", text: "Màu trắng" }, { id: "B", text: "Màu vàng rực" }, { id: "C", text: "Màu hồng tươi" }, { id: "D", text: "Màu tím biếc" }], ans: "B", explain: "Chi tiết: 'hoa mướp đua nhau nở rộ vàng rực'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 2.0, text: "Đàn ong mật bay về giàn mướp để làm gì?", options: [{ id: "A", text: "Để ngủ" }, { id: "B", text: "Để hút mật nhụy ngọt ngào" }, { id: "C", text: "Để tránh mưa" }, { id: "D", text: "Để đùa vui" }], ans: "B", explain: "Chi tiết: 'Từng đàn ong mật rủ nhau bay về hút mật nhụy ngọt ngào'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 1.5, text: "Tiếng nào trong bài có vần 'ươp'?", options: [{ id: "A", text: "Mướp" }, { id: "B", text: "Ong" }, { id: "C", text: "Bờ" }, { id: "D", text: "Ao" }], ans: "A", explain: "Tiếng 'mướp' có âm m, vần 'ươp' và dấu sắc." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.5, text: "Từ 'xanh mát' dùng để chỉ đặc điểm của cái gì?", options: [{ id: "A", text: "Đàn ong" }, { id: "B", text: "Giàn mướp" }, { id: "C", text: "Bờ ao" }, { id: "D", text: "Bầu trời" }], ans: "B", explain: "Chi tiết: 'giàn mướp hương xanh mát'." },
      { num: 6, type: "essay", category: "language", level: "M3", score: 1.0, text: "Em hãy viết 1 câu khen ngợi vẻ đẹp của giàn mướp hoa vàng.", solution: "Ví dụ: Giàn mướp hoa vàng nở đẹp quá!", rubric: [{ criteria: "Đúng câu khen ngợi", points: 1.0, description: "Viết câu bộc lộ cảm xúc khen ngợi, đúng ngữ pháp." }] }
    ]
  },
  {
    id: "CTST-G1-12",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 1,
    suitableGrades: [1],
    semester: 2,
    semesterName: "Học kỳ II",
    bookVolume: "Tập 2",
    theme: "Mái ấm gia đình",
    genre: "Đoạn văn ngắn",
    title: "Bữa cơm sum họp",
    author: "Khánh Linh (SGK Tiếng Việt 1 CTST - Tập 2)",
    wordCount: 36,
    passage: "Mỗi buổi tối, cả nhà em lại ngồi quây quần bên mâm cơm ấm áp. Bố gắp thức ăn cho mẹ, mẹ chia quà bánh cho hai anh em. Tiếng cười nói rộn rã khắp gian nhà nhỏ thân thương.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Gia đình bạn nhỏ ngồi quây quần bên mâm cơm vào lúc nào?", options: [{ id: "A", text: "Buổi sáng sớm" }, { id: "B", text: "Mỗi buổi tối" }, { id: "C", text: "Buổi trưa" }, { id: "D", text: "Nửa đêm" }], ans: "B", explain: "Chi tiết: 'Mỗi buổi tối, cả nhà em lại ngồi quây quần bên mâm cơm'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Bố và mẹ đã làm những hành động gì thể hiện sự quan tâm?", options: [{ id: "A", text: "Mỗi người ngồi xem một chiếc điện thoại" }, { id: "B", text: "Bố gắp thức ăn cho mẹ, mẹ chia quà bánh cho hai anh em" }, { id: "C", text: "Ăn cơm thật nhanh để đi ngủ" }, { id: "D", text: "Không nói chuyện cùng nhau" }], ans: "B", explain: "Chi tiết: 'Bố gắp thức ăn cho mẹ, mẹ chia quà bánh cho hai anh em'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 2.0, text: "Âm thanh nào rộn rã khắp gian nhà nhỏ trong bữa cơm?", options: [{ id: "A", text: "Tiếng ti vi mở lớn" }, { id: "B", text: "Tiếng cười nói rộn rã của cả gia đình" }, { id: "C", text: "Tiếng chó sủa ngoài sân" }, { id: "D", text: "Tiếng gió rít" }], ans: "B", explain: "Chi tiết: 'Tiếng cười nói rộn rã khắp gian nhà nhỏ thân thương'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 1.5, text: "Tiếng nào trong bài có vần 'ơm'?", options: [{ id: "A", text: "Cơm" }, { id: "B", text: "Tối" }, { id: "C", text: "Bố" }, { id: "D", text: "Nhà" }], ans: "A", explain: "Tiếng 'cơm' có âm c và vần 'ơm'." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.5, text: "Từ 'rộn rã' gợi tả âm thanh thế nào?", options: [{ id: "A", text: "Yên lặng vắng vẻ" }, { id: "B", text: "Vui tươi, nhộn nhịp tiếng nói cười" }, { id: "C", text: "Buồn bã nghẹn ngào" }, { id: "D", text: "Ầm ĩ chói tai" }], ans: "B", explain: "'Rộn rã' gợi không khí chuyện trò vui vẻ, ấm cúng." },
      { num: 6, type: "essay", category: "language", level: "M3", score: 1.0, text: "Em đã làm được việc gì nhỏ để giúp mẹ dọn bữa ăn?", solution: "Ví dụ: Em giúp mẹ lấy bát đũa ra bàn ăn.", rubric: [{ criteria: "Đúng việc làm phụ giúp", points: 1.0, description: "Nêu việc làm cụ thể vừa sức như lấy đũa, lau bàn." }] }
    ]
  },
  {
    id: "CTST-G1-13",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 1,
    suitableGrades: [1],
    semester: 2,
    semesterName: "Học kỳ II",
    bookVolume: "Tập 2",
    theme: "Tình bạn diệu kì",
    genre: "Truyện ngụ ngôn",
    title: "Đôi bạn thân",
    author: "Phỏng theo ngụ ngôn (SGK Tiếng Việt 1 CTST - Tập 2)",
    wordCount: 38,
    passage: "Cún con và Vịt con là đôi bạn thân thiết. Một hôm, Vịt con bị trượt chân ngã xuống hố sâu. Cún con vội vàng kéo bạn lên bờ an toàn. Cả hai bạn cùng ôm chầm lấy nhau mừng rỡ.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Đôi bạn thân trong câu chuyện là hai con vật nào?", options: [{ id: "A", text: "Mèo con và Chuột nhắt" }, { id: "B", text: "Cún con và Vịt con" }, { id: "C", text: "Gà trống và Cáo già" }, { id: "D", text: "Thỏ trắng và Rùa con" }], ans: "B", explain: "Chi tiết: 'Cún con và Vịt con là đôi bạn thân thiết'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Khi Vịt con bị ngã xuống hố, Cún con đã làm gì?", options: [{ id: "A", text: "Bỏ chạy đi chơi một mình" }, { id: "B", text: "Vội vàng kéo bạn lên bờ an toàn" }, { id: "C", text: "Đứng cười bạn" }, { id: "D", text: "Đi gọi các bạn khác" }], ans: "B", explain: "Chi tiết: 'Cún con vội vàng kéo bạn lên bờ an toàn'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 2.0, text: "Hành động của Cún con thể hiện phẩm chất gì đáng quý?", options: [{ id: "A", text: "Sự tinh nghịch" }, { id: "B", text: "Lòng tốt bụng và tình bạn chân thành, biết giúp đỡ bạn khi gặp nạn" }, { id: "C", text: "Thích khoe khoang sức mạnh" }, { id: "D", text: "Sự vội vã" }], ans: "B", explain: "Cún con biết cứu bạn khi gặp nạn, thể hiện tình bạn đẹp." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 1.5, text: "Tiếng nào trong bài có vần 'ân'?", options: [{ id: "A", text: "Thân (hoặc chân)" }, { id: "B", text: "Hố" }, { id: "C", text: "Bờ" }, { id: "D", text: "Vịt" }], ans: "A", explain: "Tiếng 'thân' và 'chân' có âm th/ch và vần 'ân'." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.5, text: "Từ 'mừng rỡ' bộc lộ cảm xúc gì của đôi bạn?", options: [{ id: "A", text: "Sợ hãi" }, { id: "B", text: "Vui mừng, sung sướng khi bạn được bình an" }, { id: "C", text: "Giận hờn" }, { id: "D", text: "Buồn bã" }], ans: "B", explain: "'Mừng rỡ' là niềm vui tươi hớn hở khi vượt qua nguy hiểm." },
      { num: 6, type: "essay", category: "language", level: "M3", score: 1.0, text: "Em hãy viết 1 câu nói về người bạn thân nhất ở lớp của em.", solution: "Ví dụ: Bạn Lan là người bạn thân nhất của em.", rubric: [{ criteria: "Đúng câu về bạn thân", points: 1.0, description: "Viết được 1 câu hoàn chỉnh giới thiệu bạn của mình." }] }
    ]
  },
  {
    id: "CTST-G1-14",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 1,
    suitableGrades: [1],
    semester: 2,
    semesterName: "Học kỳ II",
    bookVolume: "Tập 2",
    theme: "Bốn mùa tươi đẹp",
    genre: "Đoạn văn ngắn",
    title: "Mùa xuân quê em",
    author: "Nguyễn Kiên (SGK Tiếng Việt 1 CTST - Tập 2)",
    wordCount: 36,
    passage: "Mùa xuân ấm áp đã về khắp quê em. Những hạt mưa xuân lất phất làm cho cây cối đâm chồi nảy lộc xanh tươi. Hoa đào khoe sắc hồng thắm đón chào năm mới tươi vui.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Thời tiết mùa xuân ở quê em được miêu tả như thế nào?", options: [{ id: "A", text: "Giá lạnh buốt" }, { id: "B", text: "Ấm áp, có mưa lất phất" }, { id: "C", text: "Nắng chói chang gay gắt" }, { id: "D", text: "Có bão lớn" }], ans: "B", explain: "Chi tiết: 'Mùa xuân ấm áp... Những hạt mưa xuân lất phất'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Mưa xuân làm cho cây cối biến đổi thế nào?", options: [{ id: "A", text: "Rụng hết lá khô" }, { id: "B", text: "Đâm chồi nảy lộc xanh tươi" }, { id: "C", text: "Cây cối héo úa" }, { id: "D", text: "Không có gì thay đổi" }], ans: "B", explain: "Chi tiết: 'làm cho cây cối đâm chồi nảy lộc xanh tươi'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 2.0, text: "Loài hoa nào khoe sắc hồng thắm đón chào năm mới?", options: [{ id: "A", text: "Hoa cúc" }, { id: "B", text: "Hoa đào" }, { id: "C", text: "Hoa sen" }, { id: "D", text: "Hoa phượng" }], ans: "B", explain: "Chi tiết: 'Hoa đào khoe sắc hồng thắm đón chào năm mới'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 1.5, text: "Tiếng nào trong bài có vần 'uân'?", options: [{ id: "A", text: "Xuân" }, { id: "B", text: "Mưa" }, { id: "C", text: "Cây" }, { id: "D", text: "Hồng" }], ans: "A", explain: "Tiếng 'xuân' có âm x và vần 'uân'." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.5, text: "Từ 'lất phất' miêu tả đặc điểm của cái gì?", options: [{ id: "A", text: "Hạt mưa xuân nhẹ hạt" }, { id: "B", text: "Ngọn gió mạnh" }, { id: "C", text: "Tán lá cây" }, { id: "D", text: "Bông hoa đào" }], ans: "A", explain: "'Lất phất' gợi tả những giọt mưa xuân nhỏ nhẹ bay trong gió." },
      { num: 6, type: "essay", category: "language", level: "M3", score: 1.0, text: "Em hãy viết 1 câu chúc Tết gửi tới thầy cô giáo của em.", solution: "Ví dụ: Em kính chúc thầy cô năm mới mạnh khỏe.", rubric: [{ criteria: "Đúng câu chúc Tết", points: 1.0, description: "Viết đúng câu chúc Tết lễ phép, chữ viết rõ ràng." }] }
    ]
  },
  {
    id: "CTST-G1-15",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 1,
    suitableGrades: [1],
    semester: 2,
    semesterName: "Học kỳ II",
    bookVolume: "Tập 2",
    theme: "Mái ấm gia đình",
    genre: "Đoạn văn ngắn",
    title: "Mẹ yêu con",
    author: "Nguyễn Thị Mai (SGK Tiếng Việt 1 CTST - Tập 2)",
    wordCount: 36,
    passage: "Mẹ là vầng trăng sáng soi lối cho con. Từng giọt mồ hôi mẹ rơi trên đồng để cho con hạt gạo thơm lành. Trong vòng tay ấm áp của mẹ, con luôn thấy bình yên.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Người mẹ được so sánh với hình ảnh gì đẹp?", options: [{ id: "A", text: "Ngọn đèn đường" }, { id: "B", text: "Vầng trăng sáng soi lối cho con" }, { id: "C", text: "Áng mây hồng" }, { id: "D", text: "Bông hoa nhỏ" }], ans: "B", explain: "Chi tiết câu đầu: 'Mẹ là vầng trăng sáng soi lối cho con'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Mẹ đã vất vả lao động ở đâu để có hạt gạo thơm cho con?", options: [{ id: "A", text: "Trong nhà" }, { id: "B", text: "Từng giọt mồ hôi rơi trên đồng ruộng" }, { id: "C", text: "Ở chợ" }, { id: "D", text: "Trên núi" }], ans: "B", explain: "Chi tiết: 'Từng giọt mồ hôi mẹ rơi trên đồng để cho con hạt gạo thơm lành'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 2.0, text: "Ở trong vòng tay của mẹ, con cảm thấy thế nào?", options: [{ id: "A", text: "Lo lắng" }, { id: "B", text: "Luôn thấy bình yên và hạnh phúc" }, { id: "C", text: "Buồn bã" }, { id: "D", text: "Sợ hãi" }], ans: "B", explain: "Chi tiết: 'Trong vòng tay ấm áp của mẹ, con luôn thấy bình yên'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 1.5, text: "Tiếng nào trong bài có vần 'ăng'?", options: [{ id: "A", text: "Trăng" }, { id: "B", text: "Mẹ" }, { id: "C", text: "Con" }, { id: "D", text: "Gạo" }], ans: "A", explain: "Tiếng 'trăng' có âm tr và vần 'ăng'." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.5, text: "Từ 'bình yên' nói lên cảm xúc của ai?", options: [{ id: "A", text: "Của bạn nhỏ khi ở bên mẹ" }, { id: "B", text: "Của ông trăng" }, { id: "C", text: "Của cánh đồng" }, { id: "D", text: "Của hạt gạo" }], ans: "A", explain: "'Bình yên' là cảm giác an lành, thanh thản trong vòng tay mẹ." },
      { num: 6, type: "essay", category: "language", level: "M3", score: 1.0, text: "Viết 1 câu hứa với cha mẹ về việc học tập chăm ngoan của em.", solution: "Ví dụ: Con hứa sẽ chăm ngoan học giỏi để cha mẹ vui lòng.", rubric: [{ criteria: "Đúng câu hứa chăm ngoan", points: 1.0, description: "Viết đúng câu hứa lễ phép, đủ chữ." }] }
    ]
  },
  {
    id: "CTST-G1-16",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 1,
    suitableGrades: [1],
    semester: 2,
    semesterName: "Học kỳ II",
    bookVolume: "Tập 2",
    theme: "Thiên nhiên tươi đẹp",
    genre: "Đoạn văn ngắn",
    title: "Mặt trời và hoa búp",
    author: "Xuân Mai (SGK Tiếng Việt 1 CTST - Tập 2)",
    wordCount: 36,
    passage: "Sớm mai, ông mặt trời rắc những tia nắng vàng ấm áp xuống vườn cây. Búp hoa hồng mở hé cánh đón ánh ban mai. Giọt sương đêm lấp lánh như viên ngọc trong suốt.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Ông mặt trời đã rắc điều gì xuống vườn cây vào sớm mai?", options: [{ id: "A", text: "Những hạt mưa lạnh" }, { id: "B", text: "Những tia nắng vàng ấm áp" }, { id: "C", text: "Những bông tuyết" }, { id: "D", text: "Cơn gió bão" }], ans: "B", explain: "Chi tiết: 'rắc những tia nắng vàng ấm áp xuống vườn cây'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 2.0, text: "Giọt sương đêm đọng trên lá được ví với hình ảnh gì?", options: [{ id: "A", text: "Như viên ngọc trong suốt" }, { id: "B", text: "Như hạt cát nhỏ" }, { id: "C", text: "Như viên kẹo ngọt" }, { id: "D", text: "Như chiếc gương tròn" }], ans: "A", explain: "Chi tiết: 'Giọt sương đêm lấp lánh như viên ngọc trong suốt'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 2.0, text: "Hành động mở hé cánh của búp hoa hồng đón nhận điều gì?", options: [{ id: "A", text: "Đón cơn mưa rào" }, { id: "B", text: "Đón ánh ban mai ấm áp" }, { id: "C", text: "Tránh bóng tối" }, { id: "D", text: "Đón cơn gió lạnh" }], ans: "B", explain: "Chi tiết: 'Búp hoa hồng mở hé cánh đón ánh ban mai'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 1.5, text: "Tiếng nào trong bài có vần 'up'?", options: [{ id: "A", text: "Búp" }, { id: "B", text: "Hoa" }, { id: "C", text: "Nắng" }, { id: "D", text: "Sương" }], ans: "A", explain: "Tiếng 'búp' có âm b, vần 'úp' và dấu sắc." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.5, text: "Từ 'lấp lánh' nói về đặc điểm của vật gì trong bài?", options: [{ id: "A", text: "Giọt sương đêm" }, { id: "B", text: "Vườn cây" }, { id: "C", text: "Búp hoa hồng" }, { id: "D", text: "Mặt trời" }], ans: "A", explain: "Chi tiết: 'Giọt sương đêm lấp lánh'." },
      { num: 6, type: "essay", category: "language", level: "M3", score: 1.0, text: "Viết 1 câu miêu tả buổi sáng sớm ở quê hương em.", solution: "Ví dụ: Buổi sáng sớm quê em thật trong lành.", rubric: [{ criteria: "Đúng câu buổi sáng sớm", points: 1.0, description: "Viết đúng câu kể cảnh sắc buổi sớm, chữ viết sạch đẹp." }] }
    ]
  }
];

module.exports = GRADE_1_PASSAGES;
