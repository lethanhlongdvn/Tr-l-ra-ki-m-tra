/**
 * KHO NGỮ LIỆU ĐỌC HIỂU TIẾNG VIỆT LỚP 2 - BỘ SÁCH CHÂN TRỜI SÁNG TẠO (CTST)
 * Chuẩn Thông tư 27/2020/TT-BGDĐT & GDPT 2018
 * Phân bổ chuẩn theo 2 giai đoạn:
 *   - Học kỳ I (Tập 1): 8 bài vừa sức (65 - 75 chữ), chủ điểm bản thân, bạn bè, thầy cô, mái trường
 *   - Học kỳ II (Tập 2): 8 bài (80 - 105 chữ), chủ điểm thiên nhiên bốn mùa, muôn loài, quê hương
 * Số lượng câu hỏi: 7 câu chuẩn hóa (5 TNKQ + 2 Tự luận), đáp án và rubric chi tiết
 */

const GRADE_2_PASSAGES = [
  // =========================================================================
  // HỌC KỲ I (SGK TIẾNG VIỆT 2 CTST - TẬP 1)
  // Kênh chữ: 65 - 75 chữ, câu văn rõ ràng, gần gũi lứa tuổi 7 tuổi
  // =========================================================================
  {
    id: "CTST-G2-01",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 2,
    suitableGrades: [2],
    semester: 1,
    semesterName: "Học kỳ I",
    bookVolume: "Tập 1",
    theme: "Em đã lớn hơn",
    genre: "Truyện ngắn",
    title: "Bé Mai đã lớn",
    author: "Theo Như Khôi (SGK Tiếng Việt 2 CTST - Tập 1)",
    wordCount: 72,
    passage: "Bé Mai đã lớn thật rồi. Sáng sớm thức dậy, Mai không cần mẹ gọi mà tự giác gấp chăn màn gọn gàng. Mai còn giúp mẹ nhặt rau, dọn bát đũa ra bàn ăn. Bố mỉm cười xoa đầu Mai: 'Bé Mai của bố ngoan quá, con đã lớn thật rồi!'. Mai nghe bố khen thì thích lắm, nụ cười rạng rỡ trên môi.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Buổi sáng thức dậy, bé Mai đã tự giác làm việc gì?", options: [{ id: "A", text: "Ngồi xem ti vi" }, { id: "B", text: "Tự giác gấp chăn màn gọn gàng" }, { id: "C", text: "Đòi mẹ mua đồ chơi" }, { id: "D", text: "Chờ mẹ gọi nhiều lần" }], ans: "B", explain: "Chi tiết: 'Mai không cần mẹ gọi mà tự giác gấp chăn màn gọn gàng'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Bé Mai đã giúp mẹ làm những việc nhà nào?", options: [{ id: "A", text: "Nấu cơm một mình" }, { id: "B", text: "Giặt quần áo" }, { id: "C", text: "Nhặt rau và dọn bát đũa ra bàn ăn" }, { id: "D", text: "Đi chợ một mình" }], ans: "C", explain: "Chi tiết: 'Mai còn giúp mẹ nhặt rau, dọn bát đũa ra bàn ăn'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 1.0, text: "Vì sao bố lại khen bé Mai 'đã lớn thật rồi'?", options: [{ id: "A", text: "Vì Mai đi giày cao gót của mẹ" }, { id: "B", text: "Vì Mai biết tự giác và phụ giúp cha mẹ việc nhà vừa sức" }, { id: "C", text: "Vì Mai có chiều cao vượt trội" }, { id: "D", text: "Vì Mai có nhiều quần áo mới" }], ans: "B", explain: "Lớn lên thể hiện ở ý thức tự giác và biết giúp đỡ gia đình." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 0.5, text: "Từ nào dưới đây là từ chỉ hoạt động của bạn Mai trong bài?", options: [{ id: "A", text: "Gấp chăn màn" }, { id: "B", text: "Gọn gàng" }, { id: "C", text: "Bát đũa" }, { id: "D", text: "Bàn ăn" }], ans: "A", explain: "'Gấp chăn màn' là cụm từ chỉ hoạt động của Mai." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.0, text: "Câu nào dưới đây là câu nêu hoạt động?", options: [{ id: "A", text: "Bé Mai là học sinh lớp hai." }, { id: "B", text: "Mai giúp mẹ nhặt rau." }, { id: "C", text: "Chiếc bàn ăn rất đẹp." }, { id: "D", text: "Nụ cười của Mai thật tươi." }], ans: "B", explain: "Câu 'Mai giúp mẹ nhặt rau' có từ chỉ hoạt động 'giúp', 'nhặt rau'." },
      { num: 6, type: "essay", category: "language", level: "M2", score: 1.0, text: "Tìm trong bài 1 từ chỉ đặc điểm của nụ cười bạn Mai.", solution: "- Từ chỉ đặc điểm: rạng rỡ (hoặc ngoan, gọn gàng).", rubric: [{ criteria: "Đúng từ chỉ đặc điểm", points: 1.0, description: "Tìm đúng từ 'rạng rỡ' (1,0đ)." }] },
      { num: 7, type: "essay", category: "language", level: "M3", score: 1.5, text: "Em đã làm được những việc tốt gì ở nhà để giúp đỡ cha mẹ? Hãy viết từ 1 đến 2 câu.", solution: "Ví dụ: Ở nhà, em tự giác xếp gọn góc học tập và quét nhà giúp mẹ.", rubric: [{ criteria: "Viết đúng việc tốt giúp đỡ cha mẹ", points: 1.0, description: "Nêu được việc làm cụ thể, có ý nghĩa." }, { criteria: "Hình thức câu văn", points: 0.5, description: "Viết đúng ngữ pháp, đầu câu viết hoa, cuối câu có dấu chấm." }] }
    ]
  },
  {
    id: "CTST-G2-02",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 2,
    suitableGrades: [2],
    semester: 1,
    semesterName: "Học kỳ I",
    bookVolume: "Tập 1",
    theme: "Em đã lớn hơn",
    genre: "Thơ",
    title: "Ngày hôm qua đâu rồi",
    author: "Bế Kiến Quốc (SGK Tiếng Việt 2 CTST - Tập 1)",
    wordCount: 68,
    passage: "Em cầm tờ lịch cũ\n- Ngày hôm qua đâu rồi?\nBố xoa đầu em cười:\n- Ngày hôm qua ở lại\n\nTrên cành hoa trong vườn\nNụ hồng thêm một tuổi\nĐợi cơn mưa đầu mùa\nCho hoa thơm ngát trời.\n\nNgày hôm qua ở lại\nTrong hạt lúa mẹ trồng\nCánh đồng chờ gặt hái\nChín vàng màu ước mong.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Bạn nhỏ trong bài thơ đã hỏi bố điều gì khi cầm tờ lịch cũ?", options: [{ id: "A", text: "Hôm nay là thứ mấy?" }, { id: "B", text: "Ngày hôm qua đâu rồi?" }, { id: "C", text: "Khi nào thì đến Tết?" }, { id: "D", text: "Mấy giờ đi ngủ?" }], ans: "B", explain: "Câu thơ: 'Em cầm tờ lịch cũ / - Ngày hôm qua đâu rồi?'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Theo lời bố, ngày hôm qua đã ở lại trên những hình ảnh nào?", options: [{ id: "A", text: "Trên chiếc đồng hồ treo tường" }, { id: "B", text: "Trên cành hoa trong vườn và trong hạt lúa mẹ trồng" }, { id: "C", text: "Trong giấc mơ đêm" }, { id: "D", text: "Trên trang vở trắng tinh" }], ans: "B", explain: "Ngày hôm qua ở lại trên cành hoa (nụ hồng lớn thêm) và trong hạt lúa mẹ trồng." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 1.0, text: "Bài thơ nhắn nhủ chúng ta bài học gì về thời gian?", options: [{ id: "A", text: "Thời gian trôi qua không cần phải làm gì" }, { id: "B", text: "Thời gian rất quý giá, mỗi ngày trôi qua cần chăm chỉ học tập và lao động để có kết quả tốt" }, { id: "C", text: "Chỉ cần xé lịch là thời gian quay lại" }, { id: "D", text: "Thời gian đi rất chậm" }], ans: "B", explain: "Mỗi ngày trôi qua đều đọng lại kết quả chăm chỉ của con người." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 0.5, text: "Từ ngữ nào dưới đây chỉ đặc điểm màu sắc của cánh đồng lúa chín?", options: [{ id: "A", text: "Chín vàng" }, { id: "B", text: "Thơm ngát" }, { id: "C", text: "Gặt hái" }, { id: "D", text: "Ước mong" }], ans: "A", explain: "'Chín vàng' là từ chỉ màu sắc vàng óng của lúa chín." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.0, text: "Từ 'xoa đầu' trong câu 'Bố xoa đầu em cười' là từ chỉ gì?", options: [{ id: "A", text: "Từ chỉ sự vật" }, { id: "B", text: "Từ chỉ hoạt động" }, { id: "C", text: "Từ chỉ đặc điểm" }, { id: "D", text: "Từ chỉ màu sắc" }], ans: "B", explain: "'Xoa đầu' là từ chỉ hành động âu yếm của người bố." },
      { num: 6, type: "essay", category: "language", level: "M2", score: 1.0, text: "Tìm 2 từ chỉ hoạt động của con người có trong bài thơ.", solution: "- 2 từ chỉ hoạt động: cầm, cười, trồng, gặt hái.", rubric: [{ criteria: "Tìm đúng từ chỉ hoạt động", points: 1.0, description: "Tìm chính xác 2 từ chỉ hoạt động (1,0đ)." }] },
      { num: 7, type: "essay", category: "language", level: "M3", score: 1.5, text: "Để không lãng phí thời gian mỗi ngày, em cần làm gì? Viết từ 1 đến 2 câu.", solution: "Ví dụ: Em luôn thức dậy đúng giờ và chăm chỉ học bài để mỗi ngày trôi qua thật ý nghĩa.", rubric: [{ criteria: "Đúng ý thức tiết kiệm thời gian", points: 1.0, description: "Nêu hành động học tập chăm chỉ, đúng giờ." }, { criteria: "Ngữ pháp chuẩn", points: 0.5, description: "Câu văn đúng ngữ pháp, không sai chính tả." }] }
    ]
  },
  {
    id: "CTST-G2-03",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 2,
    suitableGrades: [2],
    semester: 1,
    semesterName: "Học kỳ I",
    bookVolume: "Tập 1",
    theme: "Mái ấm gia đình",
    genre: "Thơ",
    title: "Bà nội, bà ngoại",
    author: "Nguyễn Hoàng Sơn (SGK Tiếng Việt 2 CTST - Tập 1)",
    wordCount: 64,
    passage: "Bà nội ở làng quê\nLưng còng tựa đòn gánh\nQuạt nan phe phẩy gió\nRu cháu ngủ trưa hè.\n\nBà ngoại ở ven sông\nVườn trĩu cành cam ngọt\nMỗi lần cháu về thăm\nBà cười tươi rạng rỡ.\n\nCháu yêu hai người bà\nNhư yêu vầng trăng sáng\nĐôi mắt hiền bao la\nSuốt đời vì con cháu.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Bà nội đã dùng đồ vật gì để quạt mát ru cháu ngủ trưa hè?", options: [{ id: "A", text: "Quạt máy" }, { id: "B", text: "Quạt nan phe phẩy gió" }, { id: "C", text: "Chiếc lá sen" }, { id: "D", text: "Tờ báo cũ" }], ans: "B", explain: "Chi tiết: 'Quạt nan phe phẩy gió / Ru cháu ngủ trưa hè'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Vườn nhà bà ngoại ở ven sông có loại quả gì trĩu cành?", options: [{ id: "A", text: "Vườn táo xanh" }, { id: "B", text: "Vườn trĩu cành cam ngọt" }, { id: "C", text: "Vườn ổi chín" }, { id: "D", text: "Giàn nho tím" }], ans: "B", explain: "Chi tiết: 'Vườn trĩu cành cam ngọt'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 1.0, text: "Tác giả so sánh tình yêu thương của cháu dành cho hai người bà với hình ảnh nào?", options: [{ id: "A", text: "Như ngọn đuốc sáng" }, { id: "B", text: "Như vầng trăng sáng" }, { id: "C", text: "Như dòng suối mát" }, { id: "D", text: "Như bông hoa hồng" }], ans: "B", explain: "Chi tiết khổ 3: 'Cháu yêu hai người bà / Như yêu vầng trăng sáng'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 0.5, text: "Từ nào dưới đây là từ chỉ đặc điểm trong bài thơ?", options: [{ id: "A", text: "Bà nội" }, { id: "B", text: "Lưng còng" }, { id: "C", text: "Đòn gánh" }, { id: "D", text: "Ven sông" }], ans: "B", explain: "'Lưng còng' chỉ đặc điểm dáng người còng của bà già." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.0, text: "Hình ảnh so sánh trong câu 'Cháu yêu hai người bà như yêu vầng trăng sáng' sử dụng từ so sánh nào?", options: [{ id: "A", text: "Là" }, { id: "B", text: "Như" }, { id: "C", text: "Bằng" }, { id: "D", text: "Tựa" }], ans: "B", explain: "Từ dùng để so sánh là từ 'như'." },
      { num: 6, type: "essay", category: "language", level: "M2", score: 1.0, text: "Tìm trong bài 1 từ miêu tả ánh mắt của hai người bà.", solution: "- Từ miêu tả ánh mắt: hiền (hoặc bao la, hiền từ).", rubric: [{ criteria: "Đúng từ miêu tả ánh mắt", points: 1.0, description: "Tìm đúng từ 'hiền' trong câu 'Đôi mắt hiền bao la'." }] },
      { num: 7, type: "essay", category: "language", level: "M3", score: 1.5, text: "Em hãy viết 1 câu bày tỏ tình cảm yêu thương của em dành cho ông bà.", solution: "Ví dụ: Em rất yêu quý và kính trọng ông bà của em.", rubric: [{ criteria: "Bày tỏ tình cảm chân thành", points: 1.0, description: "Nêu được tình yêu quý, kính trọng ông bà." }, { criteria: "Ngữ pháp chuẩn", points: 0.5, description: "Đầu câu viết hoa, cuối câu có dấu chấm." }] }
    ]
  },
  {
    id: "CTST-G2-04",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 2,
    suitableGrades: [2],
    semester: 1,
    semesterName: "Học kỳ I",
    bookVolume: "Tập 1",
    theme: "Thầy cô của em",
    genre: "Thơ",
    title: "Cô giáo lớp em",
    author: "Chu Huy (SGK Tiếng Việt 2 CTST - Tập 1)",
    wordCount: 60,
    passage: "Sáng nào em đến lớp\nCũng thấy cô đến rồi\nĐáp lời 'Chào cô ạ!'\nCô mỉm cười thật tươi.\n\nCô dạy em tập viết\nGió đưa thoảng hương nhài\nNắng ghé vào cửa lớp\nXem chúng em học bài.\n\nLời cô ấm trang sách\nThơm tho từng nét chì\nEm yêu cô giáo lắm\nChăm ngoan từng ngày qua.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Mỗi sáng khi học sinh đến lớp, cô giáo đã có mặt và làm gì?", options: [{ id: "A", text: "Cô đang ngồi chấm bài nghiêm nghị" }, { id: "B", text: "Cô mỉm cười thật tươi đáp lời chào của học sinh" }, { id: "C", text: "Cô đi ra ngoài sân" }, { id: "D", text: "Cô chưa đến lớp" }], ans: "B", explain: "Khổ 1: 'Cũng thấy cô đến rồi / Đáp lời Chào cô ạ! / Cô mỉm cười thật tươi'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Hình ảnh thiên nhiên nào ghé vào cửa lớp xem các bạn học bài?", options: [{ id: "A", text: "Cơn mưa rào" }, { id: "B", text: "Ánh nắng vàng" }, { id: "C", text: "Đàn bướm nhỏ" }, { id: "D", text: "Đám mây trắng" }], ans: "B", explain: "Chi tiết: 'Nắng ghé vào cửa lớp / Xem chúng em học bài'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 1.0, text: "Tình cảm của bạn nhỏ đối với cô giáo được thể hiện thế nào?", options: [{ id: "A", text: "Sợ cô giáo phê bình" }, { id: "B", text: "Yêu quý cô giáo và tự nhủ chăm ngoan từng ngày" }, { id: "C", text: "Không muốn đi học" }, { id: "D", text: "Chỉ thích giờ ra chơi" }], ans: "B", explain: "Khổ cuối: 'Em yêu cô giáo lắm / Chăm ngoan từng ngày qua'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 0.5, text: "Từ nào dưới đây là từ chỉ hoạt động của cô giáo?", options: [{ id: "A", text: "Trang sách" }, { id: "B", text: "Tập viết (hoặc dạy)" }, { id: "C", text: "Hương nhài" }, { id: "D", text: "Cửa lớp" }], ans: "B", explain: "'Dạy', 'tập viết' là từ chỉ hoạt động dạy học của cô." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.0, text: "Câu 'Nắng ghé vào cửa lớp xem chúng em học bài' sử dụng biện pháp nghệ thuật gì?", options: [{ id: "A", text: "So sánh" }, { id: "B", text: "Nhân hóa" }, { id: "C", text: "Điệp từ" }, { id: "D", text: "Chơi chữ" }], ans: "B", explain: "Gán cho ánh nắng hành động 'ghé vào', 'xem' giống như con người." },
      { num: 6, type: "essay", category: "language", level: "M2", score: 1.0, text: "Tìm trong bài 1 từ miêu tả giọng nói (lời) của cô giáo.", solution: "- Từ miêu tả: ấm (hoặc thơm tho).", rubric: [{ criteria: "Đúng từ miêu tả lời cô", points: 1.0, description: "Tìm đúng từ 'ấm' trong 'Lời cô ấm trang sách'." }] },
      { num: 7, type: "essay", category: "language", level: "M3", score: 1.5, text: "Em hãy viết 1 câu gửi lời cảm ơn tới thầy cô giáo đã dạy dỗ em.", solution: "Ví dụ: Em cảm ơn cô giáo đã luôn ân cần dạy dỗ chúng em.", rubric: [{ criteria: "Đúng lời cảm ơn thầy cô", points: 1.0, description: "Bày tỏ lòng biết ơn chân thành, đúng chính tả." }, { criteria: "Trình bày", points: 0.5, description: "Chữ viết rõ ràng, đủ dấu câu." }] }
    ]
  },
  {
    id: "CTST-G2-05",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 2,
    suitableGrades: [2],
    semester: 1,
    semesterName: "Học kỳ I",
    bookVolume: "Tập 1",
    theme: "Trường học thân yêu",
    genre: "Truyện ngắn",
    title: "Thời khóa biểu của em",
    author: "Tuấn Khanh (SGK Tiếng Việt 2 CTST - Tập 1)",
    wordCount: 74,
    passage: "Đầu năm học, cô giáo phát cho mỗi bạn một bản thời khóa biểu in màu rất đẹp. Nam cẩn thận dán thời khóa biểu ngay trước bàn học. Nhờ có thời khóa biểu, mỗi tối Nam đều tự giác xem bài và chuẩn bị sách vở chu đáo cho ngày hôm sau. Bố mẹ rất vui khi thấy Nam ngày càng ngăn nắp và tự lập.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Cô giáo đã phát cho mỗi bạn học sinh đồ vật gì vào đầu năm học?", options: [{ id: "A", text: "Một hộp bút chì màu" }, { id: "B", text: "Một bản thời khóa biểu in màu rất đẹp" }, { id: "C", text: "Một cuốn truyện tranh" }, { id: "D", text: "Một chiếc cặp sách mới" }], ans: "B", explain: "Chi tiết: 'phát cho mỗi bạn một bản thời khóa biểu in màu rất đẹp'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Bạn Nam đã dán thời khóa biểu ở vị trí nào?", options: [{ id: "A", text: "Trong ngăn kéo tủ" }, { id: "B", text: "Ngay trước bàn học" }, { id: "C", text: "Trên cánh cửa phòng" }, { id: "D", text: "Trong cặp sách" }], ans: "B", explain: "Chi tiết: 'Nam cẩn thận dán thời khóa biểu ngay trước bàn học'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 1.0, text: "Thời khóa biểu đã giúp bạn Nam hình thành thói quen tốt nào?", options: [{ id: "A", text: "Thích xem hoạt hình hơn" }, { id: "B", text: "Tự giác xem bài và chuẩn bị sách vở chu đáo, ngăn nắp" }, { id: "C", text: "Hay đi học muộn" }, { id: "D", text: "Quên đồ dùng học tập" }], ans: "B", explain: "Chi tiết: 'mỗi tối Nam đều tự giác xem bài và chuẩn bị sách vở chu đáo'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 0.5, text: "Từ 'ngăn nắp' trong bài thuộc nhóm từ nào dưới đây?", options: [{ id: "A", text: "Từ chỉ đồ vật" }, { id: "B", text: "Từ chỉ hoạt động" }, { id: "C", text: "Từ chỉ đặc điểm, tính nết tốt" }, { id: "D", text: "Từ chỉ người" }], ans: "C", explain: "'Ngăn nắp' là từ chỉ đặc điểm gọn gàng, có trật tự." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.0, text: "Xác định bộ phận trả lời cho câu hỏi 'Làm gì?' trong câu: 'Nam chuẩn bị sách vở chu đáo.'?", options: [{ id: "A", text: "Nam" }, { id: "B", text: "Chuẩn bị sách vở chu đáo" }, { id: "C", text: "Sách vở" }, { id: "D", text: "Chu đáo" }], ans: "B", explain: "Bộ phận chỉ hoạt động 'chuẩn bị sách vở chu đáo' trả lời câu hỏi 'Làm gì?'." },
      { num: 6, type: "essay", category: "language", level: "M2", score: 1.0, text: "Tìm trong bài 1 từ đồng nghĩa với từ 'gọn gàng'.", solution: "- Từ đồng nghĩa: ngăn nắp (hoặc cẩn thận).", rubric: [{ criteria: "Đúng từ đồng nghĩa", points: 1.0, description: "Tìm đúng từ 'ngăn nắp' trong bài đọc." }] },
      { num: 7, type: "essay", category: "language", level: "M3", score: 1.5, text: "Em đã làm gì để góc bàn học của mình luôn sạch sẽ và ngăn nắp? Hãy viết từ 1 đến 2 câu.", solution: "Ví dụ: Sau khi học xong, em luôn xếp sách vở ngay ngắn và để hộp bút đúng chỗ.", rubric: [{ criteria: "Ý thức giữ gìn bàn học", points: 1.0, description: "Nêu hành động cụ thể giữ góc học tập gọn gàng." }, { criteria: "Chính tả, câu từ", points: 0.5, description: "Viết đúng ngữ pháp, chữ sạch đẹp." }] }
    ]
  },
  {
    id: "CTST-G2-06",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 2,
    suitableGrades: [2],
    semester: 1,
    semesterName: "Học kỳ I",
    bookVolume: "Tập 1",
    theme: "Bạn bè quanh em",
    genre: "Truyện ngắn",
    title: "Bạn mới đến lớp",
    author: "Minh Quân (SGK Tiếng Việt 2 CTST - Tập 1)",
    wordCount: 72,
    passage: "Hôm nay, lớp hai B đón bạn Tuấn chuyển từ quê lên. Ban đầu, Tuấn còn rụt rè đứng nép bên cửa lớp. Thấy vậy, Nam liền bước tới, nở nụ cười tươi và nắm tay bạn dẫn vào chỗ ngồi. Cả lớp cùng vỗ tay nồng nhiệt chào đón người bạn mới. Tuấn cảm thấy ấm áp vô cùng và mỉm cười vui vẻ.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Lớp học đã đón người bạn mới tên là gì?", options: [{ id: "A", text: "Bạn Hải" }, { id: "B", text: "Bạn Tuấn" }, { id: "C", text: "Bạn Nam" }, { id: "D", text: "Bạn Hùng" }], ans: "B", explain: "Chi tiết: 'đón bạn Tuấn chuyển từ quê lên'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Tâm trạng ban đầu của bạn Tuấn khi mới bước vào lớp thế nào?", options: [{ id: "A", text: "Tự tin nói cười lớn tiếng" }, { id: "B", text: "Rụt rè đứng nép bên cửa lớp" }, { id: "C", text: "Khóc nhè đòi về" }, { id: "D", text: "Chạy nhảy nô đùa" }], ans: "B", explain: "Chi tiết: 'Ban đầu, Tuấn còn rụt rè đứng nép bên cửa lớp'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 1.0, text: "Hành động của bạn Nam và cả lớp thể hiện điều gì?", options: [{ id: "A", text: "Sự xa lánh bạn mới" }, { id: "B", text: "Sự thân thiện, ấm áp và tinh thần đoàn kết chào đón bạn mới" }, { id: "C", text: "Không quan tâm đến bạn" }, { id: "D", text: "Trêu chọc bạn" }], ans: "B", explain: "Nam nắm tay dẫn bạn vào chỗ, cả lớp vỗ tay chào đón thể hiện tình bạn ấm áp." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 0.5, text: "Từ nào dưới đây là từ chỉ hoạt động của cả lớp?", options: [{ id: "A", text: "Vỗ tay" }, { id: "B", text: "Ấm áp" }, { id: "C", text: "Rụt rè" }, { id: "D", text: "Nụ cười" }], ans: "A", explain: "'Vỗ tay' là từ chỉ hoạt động." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.0, text: "Dấu câu nào thích hợp điền vào cuối câu sau: 'Bạn Nam rất tốt bụng và thân thiện [...]'?", options: [{ id: "A", text: "Dấu chấm (.)" }, { id: "B", text: "Dấu hỏi chấm (?)" }, { id: "C", text: "Dấu than (!)" }, { id: "D", text: "Dấu phẩy (,)" }], ans: "A", explain: "Đây là câu kể, cuối câu dùng dấu chấm." },
      { num: 6, type: "essay", category: "language", level: "M2", score: 1.0, text: "Tìm 1 từ chỉ cảm xúc của bạn Tuấn ở cuối bài đọc.", solution: "- Từ chỉ cảm xúc: ấm áp, vui vẻ.", rubric: [{ criteria: "Đúng từ cảm xúc", points: 1.0, description: "Nêu đúng từ 'ấm áp' hoặc 'vui vẻ'." }] },
      { num: 7, type: "essay", category: "language", level: "M3", score: 1.5, text: "Nếu lớp em có bạn mới chuyển đến, em sẽ làm gì để giúp bạn hòa nhập? Hãy viết 1 đến 2 câu.", solution: "Ví dụ: Em sẽ chủ động làm quen và rủ bạn cùng chơi các trò chơi trong giờ ra chơi.", rubric: [{ criteria: "Hành động thân thiện với bạn mới", points: 1.0, description: "Nêu cách ứng xử hòa đồng, giúp đỡ bạn." }, { criteria: "Trình bày", points: 0.5, description: "Câu văn gãy gọn, không sai chính tả." }] }
    ]
  },
  {
    id: "CTST-G2-07",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 2,
    suitableGrades: [2],
    semester: 1,
    semesterName: "Học kỳ I",
    bookVolume: "Tập 1",
    theme: "Thiên nhiên quanh em",
    genre: "Truyện đồng thoại",
    title: "Cây nhút nhát",
    author: "Trần Hoài Dương (SGK Tiếng Việt 2 CTST - Tập 1)",
    wordCount: 75,
    passage: "Ven bờ ruộng có một bụi cây xấu hổ nhỏ bé. Cứ mỗi khi có ngọn gió thổi qua hay một chú bướm chạm nhẹ vào cánh lá, cây liền khép vội những chiếc lá xanh lại như một đứa trẻ ngượng ngùng. Mọi người âu yếm gọi nó là cây nhút nhát. Nhưng khi cơn mưa rào vừa dứt, cây lại từ từ xòe những chiếc lá non đón ánh mặt trời rực rỡ.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Bụi cây xấu hổ trong bài đọc sinh sống ở đâu?", options: [{ id: "A", text: "Trong chậu hoa" }, { id: "B", text: "Ven bờ ruộng" }, { id: "C", text: "Trên đỉnh núi" }, { id: "D", text: "Giữa rừng sâu" }], ans: "B", explain: "Chi tiết: 'Ven bờ ruộng có một bụi cây xấu hổ'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Khi có gió thổi hay chú bướm chạm vào, cây xấu hổ đã làm gì?", options: [{ id: "A", text: "Rụng hết cành lá" }, { id: "B", text: "Khép vội những chiếc lá xanh lại" }, { id: "C", text: "Cất tiếng reo vui" }, { id: "D", text: "Nở hoa ngay lập tức" }], ans: "B", explain: "Chi tiết: 'liền khép vội những chiếc lá xanh lại'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 1.0, text: "Sau khi cơn mưa rào dứt, cây xấu hổ thay đổi thế nào?", options: [{ id: "A", text: "Cây tiếp tục ngủ say" }, { id: "B", text: "Từ từ xòe những chiếc lá non đón ánh mặt trời rực rỡ" }, { id: "C", text: "Cây bị héo úa" }, { id: "D", text: "Lá biến thành màu đỏ" }], ans: "B", explain: "Chi tiết cuối bài: 'cây lại từ từ xòe những chiếc lá non đón ánh mặt trời'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 0.5, text: "Từ 'nhút nhát' trong bài thuộc nhóm từ loại nào?", options: [{ id: "A", text: "Từ chỉ sự vật" }, { id: "B", text: "Từ chỉ hoạt động" }, { id: "C", text: "Từ chỉ đặc điểm, tính nết" }, { id: "D", text: "Từ chỉ đồ vật" }], ans: "C", explain: "'Nhút nhát' là tính từ / từ chỉ đặc điểm tính cách rụt rè." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.0, text: "Hình ảnh cây khép lá 'như một đứa trẻ ngượng ngùng' sử dụng biện pháp nghệ thuật gì?", options: [{ id: "A", text: "So sánh kết hợp nhân hóa" }, { id: "B", text: "Chỉ có đảo ngữ" }, { id: "C", text: "Chơi chữ" }, { id: "D", text: "Điệp ngữ" }], ans: "A", explain: "Dùng từ so sánh 'như' và nhân hóa cây có cảm xúc 'ngượng ngùng'." },
      { num: 6, type: "essay", category: "language", level: "M2", score: 1.0, text: "Tìm 1 từ chỉ màu sắc của lá cây trong bài đọc.", solution: "- Từ chỉ màu sắc: xanh.", rubric: [{ criteria: "Đúng từ chỉ màu sắc", points: 1.0, description: "Tìm đúng từ 'xanh' trong cụm 'chiếc lá xanh'." }] },
      { num: 7, type: "essay", category: "language", level: "M3", score: 1.5, text: "Cây cối đem lại nhiều bóng mát và vẻ đẹp cho thiên nhiên. Em cần làm gì để bảo vệ cây xanh quanh mình? Viết từ 1 đến 2 câu.", solution: "Ví dụ: Em thường xuyên tưới nước cho cây và không bẻ cành hái lá bừa bãi.", rubric: [{ criteria: "Hành động bảo vệ cây xanh", points: 1.0, description: "Nêu việc làm cụ thể như tưới nước, không bẻ cành." }, { criteria: "Trình bày chuẩn", points: 0.5, description: "Câu văn đúng ngữ pháp, không lỗi chính tả." }] }
    ]
  },
  {
    id: "CTST-G2-08",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 2,
    suitableGrades: [2],
    semester: 1,
    semesterName: "Học kỳ I",
    bookVolume: "Tập 1",
    theme: "Tình bạn diệu kì",
    genre: "Thơ",
    title: "Gọi bạn",
    author: "Định Hải (SGK Tiếng Việt 2 CTST - Tập 1)",
    wordCount: 70,
    passage: "Tự xa xưa thuở nào\nTrong rừng xanh sâu thẳm\nĐôi bạn sống bên nhau\nBê Vàng và Dê Trắng.\n\nMột năm trời hạn hán\nSuối cạn cỏ héo khô\nBê Vàng đi tìm cỏ\nLang thang quên đường về.\n\nDê Trắng thương bạn quá\nChạy khắp nẻo tìm quanh\nĐến nay còn gọi mãi:\n- Bê! Bê! gọi bạn hiền.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Đôi bạn sống bên nhau trong rừng xanh sâu thẳm là ai?", options: [{ id: "A", text: "Thỏ Trắng và Rùa Con" }, { id: "B", text: "Bê Vàng và Dê Trắng" }, { id: "C", text: "Hươu Sao và Sóc Nâu" }, { id: "D", text: "Gấu Đen và Voi Con" }], ans: "B", explain: "Khổ 1: 'Đôi bạn sống bên nhau / Bê Vàng và Dê Trắng'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Vì sao bạn Bê Vàng phải đi xa rồi bị lạc đường?", options: [{ id: "A", text: "Vì mải chơi bóng" }, { id: "B", text: "Vì trời hạn hán, suối cạn cỏ khô nên phải đi tìm cỏ" }, { id: "C", text: "Vì trốn bác thợ săn" }, { id: "D", text: "Vì đi tìm suối nước ngọt" }], ans: "B", explain: "Khổ 2: 'Một năm trời hạn hán / Suối cạn cỏ héo khô / Bê Vàng đi tìm cỏ'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 1.0, text: "Tình cảm của Dê Trắng dành cho bạn Bê Vàng thể hiện qua hành động nào?", options: [{ id: "A", text: "Ở yên trong hang ngủ" }, { id: "B", text: "Thương bạn, chạy khắp nẻo tìm kiếm và cất tiếng gọi tha thiết mãi" }, { id: "C", text: "Kết bạn với con vật khác" }, { id: "D", text: "Quên bạn ngay" }], ans: "B", explain: "Dê Trắng chạy khắp nẻo tìm bạn và đến nay vẫn tha thiết cất tiếng gọi 'Bê! Bê!'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 0.5, text: "Từ nào dưới đây là từ chỉ màu sắc của hai nhân vật trong bài thơ?", options: [{ id: "A", text: "Vàng, Trắng" }, { id: "B", text: "Hạn hán" }, { id: "C", text: "Rừng xanh" }, { id: "D", text: "Héo khô" }], ans: "A", explain: "'Vàng' và 'Trắng' là các từ chỉ màu sắc." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.0, text: "Từ 'lang thang' trong câu thơ 'Lang thang quên đường về' chỉ điều gì?", options: [{ id: "A", text: "Đi nhanh về nhà" }, { id: "B", text: "Đi hết nơi này đến nơi khác không có đích đến rõ ràng" }, { id: "C", text: "Đứng yên một chỗ" }, { id: "D", text: "Chạy trốn kẻ thù" }], ans: "B", explain: "'Lang thang' chỉ việc đi vu vơ khắp nơi rồi bị lạc." },
      { num: 6, type: "essay", category: "language", level: "M2", score: 1.0, text: "Tìm trong khổ thơ cuối tiếng kêu của Dê Trắng gọi bạn.", solution: "- Tiếng kêu gọi bạn: Bê! Bê!", rubric: [{ criteria: "Đúng tiếng gọi bạn", points: 1.0, description: "Ghi đúng tiếng 'Bê! Bê!' (1,0đ)." }] },
      { num: 7, type: "essay", category: "language", level: "M3", score: 1.5, text: "Tình bạn giữa Bê Vàng và Dê Trắng gợi cho em suy nghĩ gì về sự gắn bó bạn bè? Viết từ 1 đến 2 câu.", solution: "Ví dụ: Tình bạn thật đáng quý, khi bạn gặp khó khăn chúng ta cần luôn yêu thương và giúp đỡ nhau.", rubric: [{ criteria: "Suy nghĩ về tình bạn đẹp", points: 1.0, description: "Nêu được ý nghĩa tình bạn gắn bó, sẵn sàng giúp đỡ bạn." }, { criteria: "Trình bày", points: 0.5, description: "Viết đúng số câu, không sai chính tả." }] }
    ]
  },

  // =========================================================================
  // HỌC KỲ II (SGK TIẾNG VIỆT 2 CTST - TẬP 2)
  // Kênh chữ: 80 - 105 chữ, mở rộng vốn từ bốn mùa, thế giới muôn loài
  // =========================================================================
  {
    id: "CTST-G2-09",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 2,
    suitableGrades: [2],
    semester: 2,
    semesterName: "Học kỳ II",
    bookVolume: "Tập 2",
    theme: "Bốn mùa tươi đẹp",
    genre: "Truyện ngắn",
    title: "Chuyện bốn mùa",
    author: "Từ Nguyên Tĩnh (SGK Tiếng Việt 2 CTST - Tập 2)",
    wordCount: 88,
    passage: "Một ngày đầu năm, bốn nàng tiên Xuân, Hạ, Thu, Đông gặp nhau. Nàng Đông nói: 'Phải có nàng Xuân về thì cây cối mới đâm chồi nảy lộc'. Nàng Xuân dịu dàng: 'Nhờ có nàng Hạ thì trái cây mới chín ngọt'. Nàng Hạ tiếp lời: 'Nàng Thu lại làm cho trời trong xanh và đem đến đêm hội rằm Trung thu rực rỡ'. Bà Đất mỉm cười hiền từ: 'Mỗi mùa đều có một vẻ đẹp riêng, mùa nào cũng đáng yêu và có ích cho cuộc đời'.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Bốn nàng tiên gặp nhau trong câu chuyện là ai?", options: [{ id: "A", text: "Mây, Mưa, Gió, Nắng" }, { id: "B", text: "Xuân, Hạ, Thu, Đông" }, { id: "C", text: "Hoa, Lá, Quả, Cành" }, { id: "D", text: "Đất, Nước, Lửa, Khí" }], ans: "B", explain: "Chi tiết: 'bốn nàng tiên Xuân, Hạ, Thu, Đông gặp nhau'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Theo lời nàng Hạ, nàng Thu mang lại niềm vui gì cho các bạn thiếu nhi?", options: [{ id: "A", text: "Kì nghỉ hè đi tắm biển" }, { id: "B", text: "Đêm hội rằm Trung thu rực rỡ và bầu trời trong xanh" }, { id: "C", text: "Được mặc áo ấm mùa đông" }, { id: "D", text: "Được đón Tết Nguyên đán" }], ans: "B", explain: "Chi tiết: 'Nàng Thu lại làm cho trời trong xanh và đem đến đêm hội rằm Trung thu rực rỡ'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 1.0, text: "Lời của Bà Đất ở cuối bài khẳng định điều gì về bốn mùa?", options: [{ id: "A", text: "Chỉ có mùa xuân là đẹp nhất" }, { id: "B", text: "Mùa đông quá lạnh nên không ai thích" }, { id: "C", text: "Mỗi mùa đều có vẻ đẹp riêng, mùa nào cũng đáng yêu và có ích cho đời" }, { id: "D", text: "Mùa hè nóng bức nhất" }], ans: "C", explain: "Bà Đất khẳng định: 'Mỗi mùa đều có một vẻ đẹp riêng, mùa nào cũng đáng yêu và có ích cho cuộc đời'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 0.5, text: "Từ nào dưới đây là từ chỉ đặc điểm của tính nết Bà Đất?", options: [{ id: "A", text: "Mỉm cười" }, { id: "B", text: "Hiền từ" }, { id: "C", text: "Cây cối" }, { id: "D", text: "Cuộc đời" }], ans: "B", explain: "'Hiền từ' là từ chỉ phẩm chất, tính nết nhân từ." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.0, text: "Các tên riêng 'Xuân, Hạ, Thu, Đông' trong bài được viết hoa vì sao?", options: [{ id: "A", text: "Vì đứng ở đầu câu" }, { id: "B", text: "Vì là tên riêng nhân hóa gọi các nàng tiên" }, { id: "C", text: "Vì là từ ngữ nước ngoài" }, { id: "D", text: "Vì thích viết hoa" }], ans: "B", explain: "Tên riêng được nhân hóa thành các nhân vật nàng tiên nên viết hoa." },
      { num: 6, type: "essay", category: "language", level: "M2", score: 1.0, text: "Tìm trong bài 1 từ chỉ đặc điểm của quả chín mùa hạ.", solution: "- Từ chỉ đặc điểm: ngọt (hoặc chín ngọt).", rubric: [{ criteria: "Đúng từ chỉ vị quả", points: 1.0, description: "Tìm đúng từ 'ngọt' hoặc 'chín ngọt'." }] },
      { num: 7, type: "essay", category: "language", level: "M3", score: 1.5, text: "Em yêu thích mùa nào nhất trong năm? Hãy viết từ 1 đến 2 câu nêu lí do vì sao.", solution: "Ví dụ: Em thích nhất mùa thu vì mùa thu có Tết Trung thu rước đèn ông sao rất vui vẻ.", rubric: [{ criteria: "Nêu mùa yêu thích và lí do", points: 1.0, description: "Chọn rõ một mùa và có lí do chính đáng." }, { criteria: "Hình thức", points: 0.5, description: "Viết đúng 1-2 câu, không sai lỗi chính tả." }] }
    ]
  },
  {
    id: "CTST-G2-10",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 2,
    suitableGrades: [2],
    semester: 2,
    semesterName: "Học kỳ II",
    bookVolume: "Tập 2",
    theme: "Thiên nhiên muôn màu",
    genre: "Truyện đồng thoại",
    title: "Chú đỗ con",
    author: "Xuân Quỳnh (SGK Tiếng Việt 2 CTST - Tập 2)",
    wordCount: 92,
    passage: "Có một hạt đỗ nhỏ nằm ngủ yên dưới lớp đất ẩm tơi xốp. Một hôm, những giọt mưa xuân tí tách rơi xuống đánh thức đỗ con dậy. Tiếp đó, chị gió xuân lướt nhẹ thì thầm gọi đỗ con vươn vai. Cuối cùng, ông mặt trời rọi những tia nắng vàng ấm áp xuống bãi đất. Đỗ con cựa mình nảy mầm, xòe hai bàn tay lá xanh tươi đón chào bầu trời mùa xuân trong sáng.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Ban đầu, hạt đỗ con nằm ngủ ở đâu?", options: [{ id: "A", text: "Trong lọ thủy tinh" }, { id: "B", text: "Dưới lớp đất ẩm tơi xốp" }, { id: "C", text: "Trên mái nhà" }, { id: "D", text: "Bên bờ suối" }], ans: "B", explain: "Chi tiết: 'nằm ngủ yên dưới lớp đất ẩm tơi xốp'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Những yếu tố nào của thiên nhiên đã giúp đỗ con thức giấc và nảy mầm?", options: [{ id: "A", text: "Cơn bão lớn và sấm chớp" }, { id: "B", text: "Mưa xuân tí tách, gió xuân mát lành và ánh nắng ấm của ông mặt trời" }, { id: "C", text: "Bầy chim sâu" }, { id: "D", text: "Tuyết trắng mùa đông" }], ans: "B", explain: "Mưa xuân, gió xuân và tia nắng ông mặt trời đã tiếp sức cho hạt đỗ nảy mầm." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 1.0, text: "Hình ảnh đỗ con nảy mầm đón ánh nắng thể hiện điều gì?", options: [{ id: "A", text: "Cây cối sợ ánh sáng" }, { id: "B", text: "Sức sống mãnh liệt, tươi vui và diệu kì của thiên nhiên mùa xuân" }, { id: "C", text: "Sự buồn bã của muôn loài" }, { id: "D", text: "Hạt đỗ muốn đi ngủ lại" }], ans: "B", explain: "Mầm cây vươn lên đón nắng tượng trưng cho sức sống mùa xuân trỗi dậy." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 0.5, text: "Từ 'tí tách' trong bài là từ gợi tả âm thanh của hiện tượng nào?", options: [{ id: "A", text: "Tiếng gió thổi" }, { id: "B", text: "Tiếng giọt mưa xuân rơi" }, { id: "C", text: "Tiếng chim hót" }, { id: "D", text: "Tiếng sấm rền" }], ans: "B", explain: "'Tí tách' miêu tả tiếng mưa rơi nhẹ hạt từng giọt một." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.0, text: "Trong câu 'Chị gió xuân lướt nhẹ thì thầm', gió xuân được gọi bằng từ xưng hô nào như con người?", options: [{ id: "A", text: "Bác" }, { id: "B", text: "Chị" }, { id: "C", text: "Chú" }, { id: "D", text: "Ông" }], ans: "B", explain: "Gió xuân được nhân hóa gọi là 'Chị gió'." },
      { num: 6, type: "essay", category: "language", level: "M2", score: 1.0, text: "Tìm trong bài 1 hình ảnh so sánh hai chiếc lá non của đỗ con.", solution: "- Hình ảnh: xòe hai bàn tay lá xanh tươi (so sánh mầm lá như hai bàn tay nhỏ bé).", rubric: [{ criteria: "Đúng hình ảnh so sánh/nhân hóa", points: 1.0, description: "Nêu đúng 'hai bàn tay lá' (1,0đ)." }] },
      { num: 7, type: "essay", category: "language", level: "M3", score: 1.5, text: "Để hạt giống có thể nảy mầm thành cây xanh tốt, chúng ta cần chăm sóc đất và cây như thế nào? Viết từ 1 đến 2 câu.", solution: "Ví dụ: Chúng ta cần gieo hạt vào đất xốp và chăm chỉ tưới nước vừa đủ cho cây đón ánh mặt trời.", rubric: [{ criteria: "Cách gieo trồng chăm sóc", points: 1.0, description: "Nêu việc tưới nước, xới đất, đón ánh sáng." }, { criteria: "Trình bày", points: 0.5, description: "Viết đúng ngữ pháp, chữ sạch đẹp." }] }
    ]
  },
  {
    id: "CTST-G2-11",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 2,
    suitableGrades: [2],
    semester: 2,
    semesterName: "Học kỳ II",
    bookVolume: "Tập 2",
    theme: "Sắc màu quê hương",
    genre: "Đoạn văn ngắn",
    title: "Giàn hoa giấy trước ngõ",
    author: "Nguyễn Thị Ngọc (SGK Tiếng Việt 2 CTST - Tập 2)",
    wordCount: 86,
    passage: "Trước cổng nhà em có một giàn hoa giấy rực rỡ sắc màu. Những chùm hoa màu hồng tím, mỏng manh như cánh bướm rung rinh đón gió ban mai. Dưới vòm hoa râm mát, đàn chim sâu ríu rít chuyền cành tìm bắt sâu bọ. Mỗi buổi trưa hè, đứng dưới giàn hoa ngắm nhìn những cánh hoa nhẹ rơi trên lối đi, em cảm thấy quê hương mình thật thanh bình và tươi đẹp.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Giàn hoa trước cổng nhà bạn nhỏ là loài hoa gì?", options: [{ id: "A", text: "Hoa thiên lí" }, { id: "B", text: "Hoa giấy rực rỡ sắc màu" }, { id: "C", text: "Hoa mướp vàng" }, { id: "D", text: "Hoa hồng leo" }], ans: "B", explain: "Chi tiết: 'có một giàn hoa giấy rực rỡ sắc màu'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Những cánh hoa giấy được so sánh với hình ảnh nào?", options: [{ id: "A", text: "Như những chiếc ô nhỏ" }, { id: "B", text: "Mỏng manh như cánh bướm rung rinh" }, { id: "C", text: "Như ngọn lửa hồng" }, { id: "D", text: "Như dải lụa dài" }], ans: "B", explain: "Chi tiết: 'mỏng manh như cánh bướm rung rinh đón gió'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 1.0, text: "Ngắm giàn hoa giấy trước ngõ, bạn nhỏ cảm nhận được điều gì về quê hương?", options: [{ id: "A", text: "Quê hương thật ồn ào" }, { id: "B", text: "Quê hương thật thanh bình và tươi đẹp" }, { id: "C", text: "Cảm thấy buồn tẻ" }, { id: "D", text: "Chỉ muốn đi xa" }], ans: "B", explain: "Chi tiết cuối bài: 'cảm thấy quê hương mình thật thanh bình và tươi đẹp'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 0.5, text: "Từ láy nào dưới đây miêu tả âm thanh của đàn chim sâu?", options: [{ id: "A", text: "Mỏng manh" }, { id: "B", text: "Rung rinh" }, { id: "C", text: "Ríu rít" }, { id: "D", text: "Rực rỡ" }], ans: "C", explain: "'Ríu rít' là từ láy tượng thanh gợi tiếng chim non hót nối tiếp nhau." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.0, text: "Xác định từ chỉ đặc điểm trong câu: 'Những cánh hoa mỏng manh rung rinh trước gió.'?", options: [{ id: "A", text: "Cánh hoa" }, { id: "B", text: "Mỏng manh" }, { id: "C", text: "Rung rinh" }, { id: "D", text: "Gió" }], ans: "B", explain: "'Mỏng manh' là từ chỉ đặc điểm độ mỏng, nhẹ của cánh hoa." },
      { num: 6, type: "essay", category: "language", level: "M2", score: 1.0, text: "Tìm 2 từ chỉ màu sắc của hoa và lá trong bài đọc.", solution: "- 2 từ chỉ màu sắc: hồng tím, xanh (hoặc rực rỡ).", rubric: [{ criteria: "Đúng 2 từ chỉ màu sắc", points: 1.0, description: "Tìm chính xác 2 từ chỉ màu sắc (1,0đ)." }] },
      { num: 7, type: "essay", category: "language", level: "M3", score: 1.5, text: "Cảnh đẹp quê hương luôn để lại kỉ niệm khó quên. Em hãy viết 1 đến 2 câu kể về một cảnh đẹp ở nơi em sống.", solution: "Ví dụ: Con đường làng quê em rợp bóng cây xanh mát và có dòng sông uốn lượn hiền hòa.", rubric: [{ criteria: "Kể cảnh đẹp quê hương", points: 1.0, description: "Nêu được vẻ đẹp gần gũi, ấm áp của quê hương." }, { criteria: "Trình bày", points: 0.5, description: "Viết đúng số câu, không mắc lỗi chính tả." }] }
    ]
  },
  {
    id: "CTST-G2-12",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 2,
    suitableGrades: [2],
    semester: 2,
    semesterName: "Học kỳ II",
    bookVolume: "Tập 2",
    theme: "Muôn loài kỳ thú",
    genre: "Truyện đồng thoại",
    title: "Đàn kiến con ngoan ngoãn",
    author: "Truyện đồng thoại (SGK Tiếng Việt 2 CTST - Tập 2)",
    wordCount: 88,
    passage: "Bên gốc cây bàng cổ thụ có một tổ kiến lửa đông đúc. Hằng ngày, những chú kiến con luôn dậy sớm, xếp thành từng hàng ngay ngắn để đi tìm mồi. Gặp mẩu bánh mì to quá sức, cả đàn kiến liền cùng nhau chung sức xốc vác đưa về tổ ấm. Thấy bác dế mèn đi qua vác đồ nặng, các chú kiến nhỏ còn nhanh nhẹn chạy lại giúp đỡ. Ai cũng khen đàn kiến con vừa cần cù lại đoàn kết và lễ phép.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Tổ kiến lửa trong câu chuyện nằm ở vị trí nào?", options: [{ id: "A", text: "Trên cành cây cao" }, { id: "B", text: "Bên gốc cây bàng cổ thụ" }, { id: "C", text: "Dưới lòng giếng sâu" }, { id: "D", text: "Trong bụi cỏ rậm" }], ans: "B", explain: "Chi tiết: 'Bên gốc cây bàng cổ thụ có một tổ kiến lửa đông đúc'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Khi gặp mẩu bánh mì to quá sức, đàn kiến con đã làm gì?", options: [{ id: "A", text: "Bỏ đi không mang về" }, { id: "B", text: "Cùng nhau chung sức xốc vác đưa về tổ" }, { id: "C", text: "Tranh giành cắn nhau" }, { id: "D", text: "Chờ con vật khác tha đi" }], ans: "B", explain: "Chi tiết: 'cả đàn kiến liền cùng nhau chung sức xốc vác đưa về tổ ấm'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 1.0, text: "Câu chuyện ca ngợi những phẩm chất tốt đẹp nào của đàn kiến nhỏ?", options: [{ id: "A", text: "Chăm chỉ, đoàn kết biết giúp đỡ nhau và lễ phép với người lớn" }, { id: "B", text: "Chạy nhảy nhanh nhẹn" }, { id: "C", text: "Có hàm răng sắc nhọn" }, { id: "D", text: "Thích ngủ nướng" }], ans: "A", explain: "Kiến vừa cần cù, đoàn kết mang mồi lại biết giúp đỡ bác dế mèn." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 0.5, text: "Từ nào dưới đây là từ chỉ đặc điểm tính nết tốt trong bài đọc?", options: [{ id: "A", text: "Cần cù" }, { id: "B", text: "Bánh mì" }, { id: "C", text: "Gốc cây" }, { id: "D", text: "Đi tìm" }], ans: "A", explain: "'Cần cù' là từ chỉ phẩm chất chăm chỉ, siêng năng." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.0, text: "Bộ phận gạch chân trong câu 'Đàn kiến cùng nhau tha mồi về tổ' trả lời cho câu hỏi nào?", options: [{ id: "A", text: "Ai (con gì)?" }, { id: "B", text: "Làm gì?" }, { id: "C", text: "Thế nào?" }, { id: "D", text: "Ở đâu?" }], ans: "B", explain: "'Cùng nhau tha mồi về tổ' là hoạt động, trả lời câu hỏi 'Làm gì?'." },
      { num: 6, type: "essay", category: "language", level: "M2", score: 1.0, text: "Tìm trong bài 1 từ đồng nghĩa với từ 'chăm chỉ'.", solution: "- Từ đồng nghĩa: cần cù (hoặc chung sức, xốc vác).", rubric: [{ criteria: "Đúng từ đồng nghĩa", points: 1.0, description: "Tìm đúng từ 'cần cù' trong bài đọc." }] },
      { num: 7, type: "essay", category: "language", level: "M3", score: 1.5, text: "Học tập đàn kiến nhỏ, em và các bạn trong lớp cần làm gì khi làm việc nhóm? Viết từ 1 đến 2 câu.", solution: "Ví dụ: Khi làm việc nhóm, chúng em luôn đoàn kết và biết lắng nghe, giúp đỡ lẫn nhau để hoàn thành tốt bài tập.", rubric: [{ criteria: "Tinh thần đoàn kết nhóm", points: 1.0, description: "Nêu được tinh thần hợp tác, giúp đỡ bạn bè." }, { criteria: "Trình bày", points: 0.5, description: "Viết đúng số câu, câu văn gãy gọn." }] }
    ]
  },
  {
    id: "CTST-G2-13",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 2,
    suitableGrades: [2],
    semester: 2,
    semesterName: "Học kỳ II",
    bookVolume: "Tập 2",
    theme: "Bốn mùa tươi đẹp",
    genre: "Thơ",
    title: "Mùa hoa phượng vĩ",
    author: "Trần Quốc Toàn (SGK Tiếng Việt 2 CTST - Tập 2)",
    wordCount: 70,
    passage: "Mùa hè lấp ló bên hiên\nCây bàng trút lá nhường quyền nắng mai\nHoa phượng thắp lửa đỏ cài\nBáo mùa thi đến, tiếng ve ngân dài.\n\nSân trường rợp bóng cờ hoa\nChia tay lớp cũ, nhớ cô nhớ thầy\nTrang vở lưu lại chuỗi ngày\nTuổi thơ tươi thắm đong đầy niềm vui.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Loài hoa nào thắp lửa đỏ báo hiệu mùa hè và mùa thi đã đến?", options: [{ id: "A", text: "Hoa cúc vàng" }, { id: "B", text: "Hoa phượng vĩ" }, { id: "C", text: "Hoa bằng lăng" }, { id: "D", text: "Hoa đào phai" }], ans: "B", explain: "Câu thơ: 'Hoa phượng thắp lửa đỏ cài / Báo mùa thi đến'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Âm thanh đặc trưng nào của mùa hè ngân dài trên vòm cây?", options: [{ id: "A", text: "Tiếng chim hót líu lo" }, { id: "B", text: "Tiếng ve kêu râm ran ngân dài" }, { id: "C", text: "Tiếng gió rít" }, { id: "D", text: "Tiếng mưa rơi tí tách" }], ans: "B", explain: "Chi tiết: 'tiếng ve ngân dài'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 1.0, text: "Khi mùa hè đến và năm học sắp khép lại, bạn nhỏ có tâm trạng gì?", options: [{ id: "A", text: "Chỉ muốn nghỉ hè ngay" }, { id: "B", text: "Bồi hồi lưu luyến khi sắp chia tay lớp cũ, nhớ thầy cô và bạn bè" }, { id: "C", text: "Buồn bã chán nản" }, { id: "D", text: "Quên hết kỉ niệm học trò" }], ans: "B", explain: "Khổ 2: 'Chia tay lớp cũ, nhớ cô nhớ thầy / Trang vở lưu lại chuỗi ngày'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 0.5, text: "Từ ngữ nào chỉ màu sắc của hoa phượng trong bài thơ?", options: [{ id: "A", text: "Đỏ cài" }, { id: "B", text: "Vàng tươi" }, { id: "C", text: "Xanh ngát" }, { id: "D", text: "Tím biếc" }], ans: "A", explain: "Câu thơ: 'Hoa phượng thắp lửa đỏ cài'." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.0, text: "Hình ảnh 'Hoa phượng thắp lửa đỏ cài' sử dụng biện pháp nghệ thuật gì?", options: [{ id: "A", text: "Nhân hóa và ẩn dụ gợi cảm" }, { id: "B", text: "So sánh ngang bằng" }, { id: "C", text: "Điệp ngữ" }, { id: "D", text: "Chơi chữ" }], ans: "A", explain: "Nhân hóa 'thắp lửa' và ẩn dụ hoa đỏ rực như ngọn lửa sưởi ấm mùa hè." },
      { num: 6, type: "essay", category: "language", level: "M2", score: 1.0, text: "Tìm trong bài 1 từ ghép chỉ cảm xúc lưu luyến hướng về thầy cô.", solution: "- Từ chỉ cảm xúc: nhớ thầy, nhớ cô (hoặc yêu, nhớ).", rubric: [{ criteria: "Đúng từ bộc lộ cảm xúc", points: 1.0, description: "Tìm đúng từ 'nhớ' trong câu 'nhớ cô nhớ thầy'." }] },
      { num: 7, type: "essay", category: "language", level: "M3", score: 1.5, text: "Kì nghỉ hè sắp tới, em dự định sẽ làm những việc gì bổ ích? Hãy viết từ 1 đến 2 câu.", solution: "Ví dụ: Trong kì nghỉ hè, em sẽ đọc thêm nhiều cuốn sách hay và phụ giúp cha mẹ làm việc nhà.", rubric: [{ criteria: "Kế hoạch hè bổ ích", points: 1.0, description: "Nêu được hoạt động lành mạnh như đọc sách, rèn thể thao, phụ gia đình." }, { criteria: "Trình bày", points: 0.5, description: "Viết đúng số câu, không sai chính tả." }] }
    ]
  },
  {
    id: "CTST-G2-14",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 2,
    suitableGrades: [2],
    semester: 2,
    semesterName: "Học kỳ II",
    bookVolume: "Tập 2",
    theme: "Sắc màu quê hương",
    genre: "Thơ",
    title: "Mùa lúa chín",
    author: "Nguyễn Khoa Điềm (SGK Tiếng Việt 2 CTST - Tập 2)",
    wordCount: 68,
    passage: "Vây quanh làng quê\nBiển vàng xao động\nSóng lúa nhấp nhô\nTrải dài tít tắp.\n\nHạt gạo dẻo thơm\nẤp ủ hạt nắng\nGiọt mồ hôi mẹ\nRơi trên luống cày.\n\nĐồng làng vào hội\nTiếng hát rộn ràng\nĐón mùa no ấm\nVề với muôn nhà.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Cánh đồng lúa chín quê em được tác giả ví von như hình ảnh nào?", options: [{ id: "A", text: "Như tấm thảm cỏ xanh" }, { id: "B", text: "Như biển vàng xao động nhấp nhô sóng lúa" }, { id: "C", text: "Như chiếc cầu vồng" }, { id: "D", text: "Như dải mây trắng" }], ans: "B", explain: "Khổ 1: 'Biển vàng xao động / Sóng lúa nhấp nhô'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Hạt gạo dẻo thơm kết tinh từ những công sức nhọc nhằn nào?", options: [{ id: "A", text: "Chỉ nhờ nước mưa trên trời" }, { id: "B", text: "Ấp ủ hạt nắng và giọt mồ hôi mẹ rơi trên luống cày" }, { id: "C", text: "Do máy móc tự động" }, { id: "D", text: "Nhờ sương đêm tích tụ" }], ans: "B", explain: "Khổ 2: 'Ấp ủ hạt nắng / Giọt mồ hôi mẹ / Rơi trên luống cày'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 1.0, text: "Không khí ngày gặt lúa trên đồng làng hiện lên thế nào?", options: [{ id: "A", text: "Vắng lặng không một bóng người" }, { id: "B", text: "Rộn ràng tiếng hát mừng mùa no ấm về với muôn nhà" }, { id: "C", text: "Buồn bã lo âu" }, { id: "D", text: "Vội vã chạy mưa" }], ans: "B", explain: "Khổ 3: 'Đồng làng vào hội / Tiếng hát rộn ràng / Đón mùa no ấm'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 0.5, text: "Từ 'dẻo thơm' trong bài thuộc nhóm từ loại nào?", options: [{ id: "A", text: "Từ chỉ sự vật" }, { id: "B", text: "Từ chỉ đặc điểm của hạt gạo" }, { id: "C", text: "Từ chỉ hoạt động gặt hái" }, { id: "D", text: "Từ chỉ người nông dân" }], ans: "B", explain: "'Dẻo thơm' là tính từ / từ chỉ đặc điểm của cơm gạo mới." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.0, text: "Từ láy 'nhấp nhô' trong câu thơ 'Sóng lúa nhấp nhô' gợi tả điều gì?", options: [{ id: "A", text: "Những gợn sóng lúa nhô lên hạ xuống uốn lượn mềm mại theo gió" }, { id: "B", text: "Cánh đồng bằng phẳng đứng yên" }, { id: "C", text: "Lúa bị gãy đổ rạp" }, { id: "D", text: "Tiếng sáo diều kêu" }], ans: "A", explain: "'Nhấp nhô' gợi tả chuyển động uốn lượn liên tiếp của bông lúa theo làn gió." },
      { num: 6, type: "essay", category: "language", level: "M2", score: 1.0, text: "Tìm trong bài 1 từ đồng nghĩa với từ 'ấm no'.", solution: "- Từ đồng nghĩa: no ấm.", rubric: [{ criteria: "Đúng từ đồng nghĩa", points: 1.0, description: "Tìm đúng từ 'no ấm' trong câu 'Đón mùa no ấm'." }] },
      { num: 7, type: "essay", category: "language", level: "M3", score: 1.5, text: "Ăn bát cơm dẻo thơm, em cảm thấy biết ơn ai đã vất vả làm ra hạt gạo? Hãy viết 1 đến 2 câu.", solution: "Ví dụ: Khi ăn cơm, em vô cùng biết ơn các bác nông dân và cha mẹ đã vất vả đổ mồ hôi làm ra hạt gạo dẻo thơm.", rubric: [{ criteria: "Lòng biết ơn người lao động", points: 1.0, description: "Nêu được lòng tri ân người nông dân và gia đình." }, { criteria: "Trình bày", points: 0.5, description: "Viết đúng số câu, chữ viết sạch đẹp." }] }
    ]
  },
  {
    id: "CTST-G2-15",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 2,
    suitableGrades: [2],
    semester: 2,
    semesterName: "Học kỳ II",
    bookVolume: "Tập 2",
    theme: "Sắc màu quê hương",
    genre: "Thơ",
    title: "Về quê ngoại",
    author: "Chử Văn Long (SGK Tiếng Việt 2 CTST - Tập 2)",
    wordCount: 72,
    passage: "Em về quê ngoại nghỉ hè\nGặp đầm sen nở, gặp bè chuối trôi\nNgắm trăng lên đỉnh đồi tròn\nThả diều no gió trên triền đê xanh.\n\nBà ngoại quạt mát ngọt lành\nKể chuyện cổ tích dưới cành khế xưa\nQuê hương êm ả sớm trưa\nThấm vào trang sách ước mơ tuổi hồng.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Bạn nhỏ được về thăm quê ngoại vào dịp nào?", options: [{ id: "A", text: "Vào dịp Tết Nguyên đán" }, { id: "B", text: "Vào kì nghỉ hè" }, { id: "C", text: "Vào dịp nghỉ cuối tuần" }, { id: "D", text: "Vào ngày tựu trường" }], ans: "B", explain: "Câu đầu: 'Em về quê ngoại nghỉ hè'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Ở quê ngoại, bạn nhỏ đã được ngắm nhìn và tham gia những cảnh đẹp, trò chơi nào?", options: [{ id: "A", text: "Chỉ ở trong nhà xem phim" }, { id: "B", text: "Ngắm đầm sen nở, bè chuối trôi, ngắm trăng đồi và thả diều trên triền đê" }, { id: "C", text: "Đi tắm hồ bơi nhân tạo" }, { id: "D", text: "Đi mua sắm ở chợ lớn" }], ans: "B", explain: "Khổ 1: 'Gặp đầm sen nở, gặp bè chuối trôi / Ngắm trăng lên đỉnh đồi tròn / Thả diều no gió'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 1.0, text: "Hình ảnh bà ngoại hiện lên gắn liền với kỉ niệm ấm áp nào?", options: [{ id: "A", text: "Quạt mát ngọt lành và kể chuyện cổ tích dưới cành khế xưa" }, { id: "B", text: "Dẫn cháu đi mua đồ chơi điện tử" }, { id: "C", text: "Bắt cháu làm bài tập khó" }, { id: "D", text: "Đi làm đồng suốt cả ngày" }], ans: "A", explain: "Khổ 2: 'Bà ngoại quạt mát ngọt lành / Kể chuyện cổ tích dưới cành khế xưa'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 0.5, text: "Từ 'ngọt lành' trong bài dùng để chỉ đặc điểm của cái gì?", options: [{ id: "A", text: "Quả khế ngọt" }, { id: "B", text: "Làn gió mát từ tay bà quạt" }, { id: "C", text: "Bát chè đỗ đen" }, { id: "D", text: "Nước sông quê" }], ans: "B", explain: "'Bà ngoại quạt mát ngọt lành' - chỉ ngọn gió yêu thương mát lành của bà." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.0, text: "Từ nào dưới đây là từ chỉ địa danh nơi sinh sống của ông bà?", options: [{ id: "A", text: "Quê ngoại" }, { id: "B", text: "Nghỉ hè" }, { id: "C", text: "Trang sách" }, { id: "D", text: "Tuổi hồng" }], ans: "A", explain: "'Quê ngoại' là từ chỉ quê hương của mẹ và ông bà ngoại." },
      { num: 6, type: "essay", category: "language", level: "M2", score: 1.0, text: "Tìm trong bài 1 từ chỉ đặc điểm của vầng trăng trên đỉnh đồi.", solution: "- Từ chỉ đặc điểm: tròn (đồi tròn / trăng tròn).", rubric: [{ criteria: "Đúng từ chỉ đặc điểm", points: 1.0, description: "Tìm đúng từ 'tròn' trong khổ thơ 1." }] },
      { num: 7, type: "essay", category: "language", level: "M3", score: 1.5, text: "Em có kỉ niệm đẹp nào với quê nội hoặc quê ngoại của mình? Hãy viết từ 1 đến 2 câu chia sẻ.", solution: "Ví dụ: Mỗi lần về quê, em thích nhất là được cùng ông bà ra vườn hái quả và nghe bà kể chuyện cổ tích.", rubric: [{ criteria: "Kỉ niệm quê hương chân thực", points: 1.0, description: "Chia sẻ được kỉ niệm ấm áp với ông bà ở quê." }, { criteria: "Trình bày", points: 0.5, description: "Viết đúng ngữ pháp, không lỗi chính tả." }] }
    ]
  },
  {
    id: "CTST-G2-16",
    category: "literary",
    categoryName: "Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK)",
    grade: 2,
    suitableGrades: [2],
    semester: 2,
    semesterName: "Học kỳ II",
    bookVolume: "Tập 2",
    theme: "Muôn loài kỳ thú",
    genre: "Thơ",
    title: "Dàn đồng ca mùa hạ",
    author: "Minh Huệ (SGK Tiếng Việt 2 CTST - Tập 2)",
    wordCount: 70,
    passage: "Chẳng nhìn thấy ve đâu\nChỉ râm ran tiếng hát\nCây bàng xòe ô mát\nĐón khúc nhạc ban mai.\n\nVe gảy đàn suốt ngày\nNhư dàn hòa tấu lớn\nCánh phượng hồng chao lượn\nGọi mùa thi xôn xao.\n\nEm lắng nghe tiếng ve\nLòng rộn ràng bao ước\nMùa hạ về trước ngõ\nTràn ngập ánh nắng vàng.",
    questions: [
      { num: 1, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Nhân vật nào cất tiếng hát râm ran tạo thành 'Dàn đồng ca mùa hạ'?", options: [{ id: "A", text: "Những chú chim sâu" }, { id: "B", text: "Những chú ve sầu" }, { id: "C", text: "Bầy dế mèn" }, { id: "D", text: "Bầy ong mật" }], ans: "B", explain: "Chi tiết: 'Chẳng nhìn thấy ve đâu / Chỉ râm ran tiếng hát'." },
      { num: 2, type: "mcq", category: "reading", level: "M1", score: 0.5, text: "Cây bàng trong sân trường được miêu tả có hành động gì chào đón tiếng ve?", options: [{ id: "A", text: "Trút lá ngủ say" }, { id: "B", text: "Xòe ô mát đón khúc nhạc ban mai" }, { id: "C", text: "Nghiêng mình né tránh" }, { id: "D", text: "Đứng im phăng phắc" }], ans: "B", explain: "Chi tiết: 'Cây bàng xòe ô mát / Đón khúc nhạc ban mai'." },
      { num: 3, type: "mcq", category: "reading", level: "M2", score: 1.0, text: "Lắng nghe tiếng ve gọi mùa hè, bạn nhỏ cảm thấy trong lòng thế nào?", options: [{ id: "A", text: "Cảm thấy buồn bực khó chịu" }, { id: "B", text: "Lòng rộn ràng bao ước mơ tươi đẹp" }, { id: "C", text: "Lo sợ mùa thi" }, { id: "D", text: "Muốn bịt tai lại" }], ans: "B", explain: "Khổ cuối: 'Em lắng nghe tiếng ve / Lòng rộn ràng bao ước'." },
      { num: 4, type: "mcq", category: "language", level: "M1", score: 0.5, text: "Từ láy nào trong bài miêu tả âm thanh rộn rã của tiếng ve mùa hạ?", options: [{ id: "A", text: "Râm ran" }, { id: "B", text: "Chao lượn" }, { id: "C", text: "Ánh nắng" }, { id: "D", text: "Trước ngõ" }], ans: "A", explain: "'Râm ran' là từ láy tượng thanh gợi tả âm thanh tiếng ve đồng loạt kêu vang." },
      { num: 5, type: "mcq", category: "language", level: "M2", score: 1.0, text: "Hình ảnh 'Ve gảy đàn suốt ngày như dàn hòa tấu lớn' sử dụng biện pháp tu từ nào?", options: [{ id: "A", text: "Chỉ có so sánh" }, { id: "B", text: "Nhân hóa kết hợp so sánh" }, { id: "C", text: "Nói quá" }, { id: "D", text: "Đảo ngữ" }], ans: "B", explain: "Nhân hóa ve biết 'gảy đàn' và so sánh tiếng ve 'như dàn hòa tấu lớn'." },
      { num: 6, type: "essay", category: "language", level: "M2", score: 1.0, text: "Tìm trong bài 1 từ chỉ màu sắc của hoa phượng và 1 từ chỉ màu sắc của nắng.", solution: "- Màu sắc của hoa phượng: hồng (hoặc đỏ).\n- Màu sắc của nắng: vàng.", rubric: [{ criteria: "Đúng 2 từ chỉ màu sắc", points: 1.0, description: "Tìm đúng 'hồng' (0,5đ) và 'vàng' (0,5đ)." }] },
      { num: 7, type: "essay", category: "language", level: "M3", score: 1.5, text: "Âm thanh mùa hè gợi cho em cảm xúc gì khi chuẩn bị bước vào kì nghỉ hè? Hãy viết từ 1 đến 2 câu.", solution: "Ví dụ: Tiếng ve râm ran gọi hè về làm lòng em rộn rã niềm vui, háo hức chờ đón những ngày hè bổ ích bên gia đình.", rubric: [{ criteria: "Cảm xúc mùa hè", points: 1.0, description: "Bộc lộ niềm vui, cảm xúc trong sáng của lứa tuổi học trò." }, { criteria: "Trình bày", points: 0.5, description: "Viết đúng số câu, không mắc lỗi chính tả." }] }
    ]
  }
];

module.exports = GRADE_2_PASSAGES;
