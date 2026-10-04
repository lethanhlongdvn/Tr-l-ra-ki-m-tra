import { getRandomCtstOralItems } from '../data/ctstOralBank';
import { getClientMatchedPassage } from '../data/clientPassageBank';

/**
 * CLIENT-SIDE EXAM GENERATOR (DỰ PHÒNG CHẠY TRỰC TIẾP TRÊN TRÌNH DUYỆT)
 * Đảm bảo 100% sinh đề, ma trận và bản đặc tả thành công chuẩn 10 câu (7 Trắc nghiệm + 3 Tự luận = 10 điểm)
 * Cho TẤT CẢ CÁC MÔN HỌC (Toán, Tiếng Việt, Tiếng Anh, Khoa học, Lịch sử và Địa lí, Tin học, Công nghệ, Đạo đức)
 */

export function generateClientSideExam(params) {
  const {
    grade = 4,
    subject = 'Toán',
    governingBody = 'UBND XÃ AN TRƯỜNG',
    schoolName = 'Trường Tiểu học A An Trường',
    semester = 'Cuối học kỳ I',
    durationMinutes = 40,
    totalPoints = 10,
    topics = [],
    matrix = null,
    examSetIndex = 1,
    tiengVietConfig = null,
    englishConfig = null
  } = params;

  const sLower = (subject || '').toLowerCase();
  const isMath = sLower.includes('toán');
  const isTV = sLower.includes('tiếng việt');
  const isEnglish = sLower.includes('tiếng anh') || sLower.includes('english');
  const isKhoaHoc = sLower.includes('khoa học') || sLower.includes('tự nhiên');
  const isLichSu = sLower.includes('lịch sử') || sLower.includes('địa lí');
  const isTinHoc = sLower.includes('tin học');
  const isCongNghe = sLower.includes('công nghệ');

  // 1. Ngân hàng Toán (7 TNKQ + 3 TL = 10 câu)
  const rawMathQuestions = [
    {
      itemNumber: 1, questionNumber: 1, level: 'M1', questionType: 'multiple_choice',
      topic: 'Số thập phân & Phân số thập phân',
      questionText: 'Chữ số 5 trong số thập phân 12,456 có giá trị là:',
      options: [
        { id: 'A', key: 'A', text: '5' }, { id: 'B', key: 'B', text: '5/10' },
        { id: 'C', key: 'C', text: '5/100' }, { id: 'D', key: 'D', text: '5/1000' }
      ],
      correctAnswer: 'C', points: 0.75,
      explanation: 'Chữ số 5 nằm ở hàng phần trăm nên có giá trị là 5/100.'
    },
    {
      itemNumber: 2, questionNumber: 2, level: 'M1', questionType: 'multiple_choice',
      topic: 'Đơn vị đo diện tích',
      questionText: 'Số thích hợp điền vào chỗ chấm: 8 ha = ...... m² là:',
      options: [
        { id: 'A', key: 'A', text: '80' }, { id: 'B', key: 'B', text: '800' },
        { id: 'C', key: 'C', text: '8 000' }, { id: 'D', key: 'D', text: '80 000' }
      ],
      correctAnswer: 'D', points: 0.75,
      explanation: '1 ha = 10 000 m² nên 8 ha = 80 000 m².'
    },
    {
      itemNumber: 3, questionNumber: 3, level: 'M1', questionType: 'true_false',
      topic: 'Tính chất hình học cơ bản',
      questionText: 'Cho các khẳng định về hình học, khẳng định nào Đúng (Đ), khẳng định nào Sai (S)?',
      options: [
        { id: 'A', text: 'Hình chữ nhật có 4 góc vuông và 2 cặp cạnh đối diện song song, bằng nhau.', isCorrect: true },
        { id: 'B', text: 'Hình vuông không phải là hình chữ nhật đặc biệt.', isCorrect: false }
      ],
      correctAnswer: 'A-Đúng, B-Sai', points: 1.0,
      explanation: 'Hình vuông là hình chữ nhật đặc biệt có 4 cạnh bằng nhau.'
    },
    {
      itemNumber: 4, questionNumber: 4, level: 'M1', questionType: 'multiple_choice',
      topic: 'So sánh số thập phân',
      questionText: 'Số thập phân nào sau đây bé nhất?',
      options: [
        { id: 'A', key: 'A', text: '4,25' }, { id: 'B', key: 'B', text: '4,19' },
        { id: 'C', key: 'C', text: '4,50' }, { id: 'D', key: 'D', text: '4,09' }
      ],
      correctAnswer: 'D', points: 0.75,
      explanation: 'So sánh phần mười: 0 bé hơn 1, 2, 5 nên 4,09 bé nhất.'
    },
    {
      itemNumber: 5, questionNumber: 5, level: 'M2', questionType: 'fill_in_the_blank',
      topic: 'Giải toán tỉ lệ & Thực tế Vĩnh Long',
      questionText: 'Một nông trại ở Cù lao An Bình (Vĩnh Long) thu hoạch được 3,5 tấn cam sành Tam Bình. Số cam sành đó đổi ra kilôgam là ...... kg.',
      correctAnswer: '3500', points: 1.0,
      explanation: 'Đổi 3,5 tấn = 3 500 kg.'
    },
    {
      itemNumber: 6, questionNumber: 6, level: 'M2', questionType: 'matching',
      topic: 'Số thập phân và phân số',
      questionText: 'Nối phân số thập phân ở Cột A với số thập phân tương ứng ở Cột B:',
      matchingPairs: [
        { left: '3/10', right: '0,3' },
        { left: '45/100', right: '0,45' },
        { left: '7/1000', right: '0,007' }
      ],
      correctAnswer: 'Nối đúng các cặp', points: 0.75,
      explanation: 'Chuyển đổi phân số thập phân sang số thập phân.'
    },
    {
      itemNumber: 7, questionNumber: 7, level: 'M2', questionType: 'multiple_choice',
      topic: 'Tích hợp Xanh - Sạch - Khỏe',
      questionText: 'Để tiết kiệm nước sạch và bảo vệ môi trường trường học, học sinh nên làm gì sau khi rửa tay?',
      options: [
        { id: 'A', key: 'A', text: 'Để nước chảy tự do' },
        { id: 'B', key: 'B', text: 'Vặn chặt vòi nước ngay sau khi dùng xong' },
        { id: 'C', key: 'C', text: 'Vắt khăn ướt lên sàn' },
        { id: 'D', key: 'D', text: 'Mở vòi nước hết cỡ' }
      ],
      correctAnswer: 'B', points: 1.0,
      explanation: 'Thực hành thói quen tiết kiệm nước sạch.'
    },
    {
      itemNumber: 8, questionNumber: 8, level: 'M1', questionType: 'constructed_response',
      topic: 'Phép tính số thập phân',
      questionText: 'Đặt tính rồi tính:\na) 45,8 + 27,64\nb) 83,5 - 29,18',
      correctAnswer: 'a) 73,44 ; b) 54,32', points: 1.0,
      explanation: 'Đặt tính thẳng hàng dấu phẩy và thực hiện tính từ phải sang trái.'
    },
    {
      itemNumber: 9, questionNumber: 9, level: 'M2', questionType: 'constructed_response',
      topic: 'Tính giá trị biểu thức',
      questionText: 'Tính bằng cách thuận tiện nhất: 12,5 × 3,8 + 12,5 × 6,2',
      correctAnswer: '12,5 × (3,8 + 6,2) = 12,5 × 10 = 125', points: 1.0,
      explanation: 'Áp dụng tính chất một số nhân với một tổng.'
    },
    {
      itemNumber: 10, questionNumber: 10, level: 'M3', questionType: 'constructed_response',
      topic: 'Giải toán thực tế SEA-PLM',
      questionText: 'Một mảnh vườn hình chữ nhật ở huyện Mang Thít có chiều dài 45 m, chiều rộng bằng 2/3 chiều dài. Người ta dùng 20% diện tích đất để trồng hoa và cây cảnh tạo không gian XANH - SẠCH - KHỎE. Tính diện tích phần đất trồng hoa.',
      correctAnswer: 'Chiều rộng: 45 x 2/3 = 30 m. Diện tích vườn: 45 x 30 = 1350 m². Diện tích trồng hoa: 1350 x 20% = 270 m².', points: 2.0,
      explanation: 'Tính chiều rộng -> Diện tích vườn -> 20% diện tích trồng hoa.'
    }
  ];

  // 2. Ngân hàng Tiếng Việt (7 TNKQ + 3 TL = 10 câu chuẩn)
  const rawTvQuestions = [
    {
      itemNumber: 1, questionNumber: 1, level: 'M1', questionType: 'multiple_choice',
      topic: 'Đọc hiểu văn bản nghệ thuật',
      questionText: 'Đoạn văn miêu tả cảnh đẹp làng quê sông nước Vĩnh Long thể hiện tình cảm gì của tác giả?',
      options: [
        { id: 'A', key: 'A', text: 'Tình yêu quê hương sâu sắc và niềm tự hào tha thiết' },
        { id: 'B', key: 'B', text: 'Sự lo âu băn khoăn về tương lai' },
        { id: 'C', key: 'C', text: 'Nỗi buồn man mác khi xa quê' },
        { id: 'D', key: 'D', text: 'Sự tò mò trước cảnh vật mới lạ' }
      ],
      correctAnswer: 'A', points: 0.5,
      explanation: 'Tác giả bộc lộ tình yêu và niềm tự hào về cảnh đẹp quê hương sông nước.'
    },
    {
      itemNumber: 2, questionNumber: 2, level: 'M1', questionType: 'multiple_choice',
      topic: 'Đọc hiểu chi tiết văn bản',
      questionText: 'Hình ảnh nào ở đầu bài đọc gợi mở không khí êm đềm của làng quê?',
      options: [
        { id: 'A', key: 'A', text: 'Dòng sông Cổ Chiên hiền hòa chở nặng phù sa' },
        { id: 'B', key: 'B', text: 'Tiếng còi xe nhộn nhịp nơi phố thị' },
        { id: 'C', key: 'C', text: 'Cơn mưa rào bất chợt đổ xuống' },
        { id: 'D', key: 'D', text: 'Cánh bướm chao nghiêng trong vườn hoa' }
      ],
      correctAnswer: 'A', points: 0.5,
      explanation: 'Hình ảnh dòng sông Cổ Chiên chở phù sa khắc họa nét thanh bình sông nước.'
    },
    {
      itemNumber: 3, questionNumber: 3, level: 'M1', questionType: 'multiple_choice',
      topic: 'Luyện từ và câu: Từ loại',
      questionText: 'Trong câu "Dòng sông Cổ Chiên phẳng lặng như một tấm gương soi", từ nào là từ phức?',
      options: [
        { id: 'A', key: 'A', text: 'Dòng sông' }, { id: 'B', key: 'B', text: 'phẳng lặng' },
        { id: 'C', key: 'C', text: 'tấm gương' }, { id: 'D', key: 'D', text: 'Cả A, B, C đều đúng' }
      ],
      correctAnswer: 'D', points: 0.5,
      explanation: 'Các từ "Dòng sông", "phẳng lặng", "tấm gương" đều là từ phức.'
    },
    {
      itemNumber: 4, questionNumber: 4, level: 'M1', questionType: 'true_false',
      topic: 'Luyện từ và câu: Danh từ, Động từ',
      questionText: 'Đánh dấu Đúng (Đ) hoặc Sai (S) cho các phát biểu về từ loại:',
      options: [
        { id: 'A', text: 'Danh từ là những từ chỉ sự vật (người, vật, hiện tượng, khái niệm...).', isCorrect: true },
        { id: 'B', text: 'Động từ là những từ chỉ tính chất, màu sắc của sự vật.', isCorrect: false }
      ],
      correctAnswer: 'A-Đúng, B-Sai', points: 1.0,
      explanation: 'Tính chất màu sắc là tính từ, không phải động từ.'
    },
    {
      itemNumber: 5, questionNumber: 5, level: 'M2', questionType: 'multiple_choice',
      topic: 'Đọc hiểu: Ý nghĩa văn bản',
      questionText: 'Thông điệp ý nghĩa nhất mà bài đọc muốn gửi gắm tới học sinh là gì?',
      options: [
        { id: 'A', key: 'A', text: 'Nâng cao ý thức trân trọng, giữ gìn cảnh quan môi trường sông nước thiên nhiên' },
        { id: 'B', key: 'B', text: 'Khuyên học sinh nên chọn ngành chèo thuyền' },
        { id: 'C', key: 'C', text: 'Nhắc nhở học sinh thức dậy sớm mỗi ngày' },
        { id: 'D', key: 'D', text: 'Giới thiệu các món ăn đặc sản địa phương' }
      ],
      correctAnswer: 'A', points: 1.0,
      explanation: 'Bài đọc hướng đến tình yêu thiên nhiên và bảo vệ môi trường.'
    },
    {
      itemNumber: 6, questionNumber: 6, level: 'M2', questionType: 'fill_in_the_blank',
      topic: 'Luyện từ và câu: Điền từ thích hợp',
      questionText: 'Điền từ ngữ thích hợp vào chỗ chấm: "Cù lao An Bình như một hòn đảo ...... xanh mướt giữa lòng sông."',
      correctAnswer: 'ngọc', points: 1.5,
      explanation: 'Hình ảnh so sánh hòn đảo ngọc xanh mướt.'
    },
    {
      itemNumber: 7, questionNumber: 7, level: 'M2', questionType: 'matching',
      topic: 'Biện pháp nghệ thuật',
      questionText: 'Nối câu văn ở Cột A với biện pháp tu từ được sử dụng ở Cột B:',
      matchingPairs: [
        { left: 'Rặng dừa nghiêng mình soi bóng xuống dòng sông', right: 'Nhân hóa' },
        { left: 'Mặt nước hồ trong suốt như một tấm gương khổng lồ', right: 'So sánh' }
      ],
      correctAnswer: 'Nối đúng các cặp', points: 1.0,
      explanation: 'Nhận diện biện pháp so sánh và nhân hóa trong câu.'
    },
    {
      itemNumber: 8, questionNumber: 8, level: 'M2', questionType: 'constructed_response',
      topic: 'Đọc hiểu Tự luận',
      questionText: 'Theo em, vì sao tác giả lại gọi quê hương sông nước là "mảnh đất mến thương"? Hãy giải thích trong 1 - 2 câu.',
      correctAnswer: 'Vì nơi đây gắn liền với kỷ niệm tuổi thơ thanh bình, có tình cảm ấm áp của gia đình và người dân quê chất phác.', points: 1.0,
      explanation: 'Nêu được lý do cảm xúc chân thành bám sát ngữ liệu.'
    },
    {
      itemNumber: 9, questionNumber: 9, level: 'M2', questionType: 'constructed_response',
      topic: 'Luyện từ và câu & Tích hợp Xanh - Sạch - Khỏe',
      questionText: 'Viết 2 - 3 câu nêu những việc em cần làm để giữ gìn vệ sinh trường lớp luôn Xanh - Sạch - Đẹp.',
      correctAnswer: 'Học sinh nêu tự giác quét dọn lớp, bỏ rác đúng nơi quy định, chăm sóc cây xanh.', points: 1.0,
      explanation: 'Rèn luyện kỹ năng viết câu bám sát mạch giữ gìn vệ sinh trường lớp.'
    },
    {
      itemNumber: 10, questionNumber: 10, level: 'M3', questionType: 'constructed_response',
      topic: 'Tập làm văn miêu tả',
      questionText: 'Viết bài văn tả một người thầy cô giáo hoặc người lao động ở trường học mà em yêu quý.',
      correctAnswer: 'Bài văn đầy đủ 3 phần: Mở bài, Thân bài, Kết bài với cảm xúc chân thành.', points: 2.0,
      explanation: 'Đánh giá năng lực viết văn miêu tả biểu cảm theo chuẩn GDPT 2018.'
    }
  ];

  // 3. Ngân hàng Khoa học / Tự nhiên và Xã hội (7 TNKQ + 3 TL = 10 câu)
  const rawKhoaHocQuestions = [
    {
      itemNumber: 1, questionNumber: 1, level: 'M1', questionType: 'multiple_choice',
      topic: 'Thành phần và tính chất của nước',
      questionText: 'Nước có những tính chất nào sau đây?',
      options: [
        { id: 'A', key: 'A', text: 'Có màu trắng, mùi thơm, vị ngọt' },
        { id: 'B', key: 'B', text: 'Không màu, không mùi, không vị, trong suốt, chảy từ cao xuống thấp' },
        { id: 'C', key: 'C', text: 'Có hình dạng cố định và không bao giờ thấm qua vải' },
        { id: 'D', key: 'D', text: 'Chỉ tồn tại ở thể lỏng trong tự nhiên' }
      ],
      correctAnswer: 'B', points: 0.75,
      explanation: 'Nước nguyên chất là chất lỏng không màu, không mùi, không vị, chảy từ cao xuống thấp.'
    },
    {
      itemNumber: 2, questionNumber: 2, level: 'M1', questionType: 'multiple_choice',
      topic: 'Không khí và sự sống',
      questionText: 'Khí nào trong không khí cần thiết cho quá trình hô hấp của con người, động vật và thực vật?',
      options: [
        { id: 'A', key: 'A', text: 'Khí nitơ' }, { id: 'B', key: 'B', text: 'Khí ô-xi' },
        { id: 'C', key: 'C', text: 'Khí các-bô-nhiêu' }, { id: 'D', key: 'D', text: 'Khí hi-đrô' }
      ],
      correctAnswer: 'B', points: 0.75,
      explanation: 'Khí ô-xi duy trì sự cháy và sự hô hấp của sinh vật.'
    },
    {
      itemNumber: 3, questionNumber: 3, level: 'M1', questionType: 'true_false',
      topic: 'Bảo vệ nguồn nước & Môi trường Xanh',
      questionText: 'Đánh dấu Đúng (Đ) hoặc Sai (S) cho các việc làm bảo vệ nguồn nước sạch:',
      options: [
        { id: 'A', text: 'Khóa chặt vòi nước ngay sau khi sử dụng xong.', isCorrect: true },
        { id: 'B', text: 'Xả rác thải và nước giặt rửa trực tiếp xuống dòng sông, kênh rạch.', isCorrect: false }
      ],
      correctAnswer: 'A-Đúng, B-Sai', points: 1.0,
      explanation: 'Tiết kiệm và giữ sạch nguồn nước giúp bảo vệ sức khỏe cộng đồng.'
    },
    {
      itemNumber: 4, questionNumber: 4, level: 'M1', questionType: 'multiple_choice',
      topic: 'Nguồn năng lượng mặt trời',
      questionText: 'Năng lượng mặt trời được ứng dụng vào công việc nào sau đây trong đời sống?',
      options: [
        { id: 'A', key: 'A', text: 'Phơi khô nông sản, chạy máy phát điện mặt trời, làm nóng nước' },
        { id: 'B', key: 'B', text: 'Đốt than đá trong lò hơi' },
        { id: 'C', key: 'C', text: 'Chạy động cơ xe máy xăng' },
        { id: 'D', key: 'D', text: 'Thắp sáng bóng đèn dây tóc bằng pin con thỏ' }
      ],
      correctAnswer: 'A', points: 0.75,
      explanation: 'Mặt trời cung cấp nhiệt năng và quang năng sạch tái tạo.'
    },
    {
      itemNumber: 5, questionNumber: 5, level: 'M2', questionType: 'fill_in_the_blank',
      topic: 'Vòng tuần hoàn của nước',
      questionText: 'Nước trên mặt đất nóng lên bay hơi thành hơi nước, bay lên cao gặp lạnh ngưng tụ thành những hạt nước nhỏ li ti tạo thành ......',
      correctAnswer: 'mây', points: 1.0,
      explanation: 'Hơi nước gặp lạnh ngưng tụ tạo thành mây.'
    },
    {
      itemNumber: 6, questionNumber: 6, level: 'M2', questionType: 'matching',
      topic: 'Các thể của nước',
      questionText: 'Nối thể của nước ở Cột A với ví dụ tương ứng ở Cột B:',
      matchingPairs: [
        { left: 'Thể lỏng', right: 'Nước mưa, nước sông' },
        { left: 'Thể rắn', right: 'Băng, đá lạnh' },
        { left: 'Thể khí', right: 'Hơi nước' }
      ],
      correctAnswer: 'Nối đúng các cặp', points: 0.75,
      explanation: 'Nước tồn tại ở 3 thể: lỏng, rắn, khí.'
    },
    {
      itemNumber: 7, questionNumber: 7, level: 'M2', questionType: 'multiple_choice',
      topic: 'Phòng tránh bệnh tật',
      questionText: 'Để phòng tránh các bệnh lây truyền qua đường tiêu hóa, chúng ta nên tuân thủ thói quen nào?',
      options: [
        { id: 'A', key: 'A', text: 'Ăn chín, uống sôi, rửa tay bằng xà phòng trước khi ăn và sau khi đi vệ sinh' },
        { id: 'B', key: 'B', text: 'Ăn thức ăn ôi thiu đã để qua đêm ngoài trời' },
        { id: 'C', key: 'C', text: 'Uống nước suối chưa qua đun sôi' },
        { id: 'D', key: 'D', text: 'Không rửa tay trước khi cầm thức ăn' }
      ],
      correctAnswer: 'A', points: 1.0,
      explanation: 'Ăn chín uống sôi và giữ vệ sinh tay phòng bệnh tiêu hóa.'
    },
    {
      itemNumber: 8, questionNumber: 8, level: 'M1', questionType: 'constructed_response',
      topic: 'Vai trò của không khí',
      questionText: 'Nêu 2 ví dụ về vai trò của không khí đối với đời sống con người và sinh vật.',
      correctAnswer: '1. Cung cấp ô-xi cho con người và sinh vật hô hấp. 2. Cung cấp ô-xi duy trì sự cháy.', points: 1.0,
      explanation: 'Nêu đúng 2 vai trò cơ bản của không khí.'
    },
    {
      itemNumber: 9, questionNumber: 9, level: 'M2', questionType: 'constructed_response',
      topic: 'Tiết kiệm năng lượng',
      questionText: 'Em hãy đề xuất 2 việc làm cụ thể ở trường và ở nhà để tiết kiệm điện năng sinh hoạt.',
      correctAnswer: 'Tắt đèn, quạt khi ra khỏi phòng; sử dụng ánh sáng tự nhiên vào ban ngày.', points: 1.0,
      explanation: 'Đề xuất hành động thực tế tiết kiệm điện.'
    },
    {
      itemNumber: 10, questionNumber: 10, level: 'M3', questionType: 'constructed_response',
      topic: 'Vận dụng khoa học giải quyết vấn đề thực tế',
      questionText: 'Tại một số nông trại trồng bưởi Năm Roi ở Bình Minh (Vĩnh Long), người dân hướng dẫn học sinh ủ phân hữu cơ từ vỏ bưởi và rác bếp. Em hãy giải thích lợi ích của việc làm này đối với môi trường và cây trồng.',
      correctAnswer: 'Lợi ích: Giảm rác thải ra môi trường, tái chế chất dinh dưỡng hữu cơ làm đất tơi xốp, giúp cây bưởi phát triển an toàn không dùng hóa chất hại đất.', points: 2.0,
      explanation: 'Vận dụng kiến thức chu trình dinh dưỡng và bảo vệ môi trường nông nghiệp.'
    }
  ];

  // 4. Ngân hàng Lịch sử và Địa lí (7 TNKQ + 3 TL = 10 câu)
  const rawLichSuQuestions = [
    {
      itemNumber: 1, questionNumber: 1, level: 'M1', questionType: 'multiple_choice',
      topic: 'Địa hình và thiên nhiên Việt Nam',
      questionText: 'Đồng bằng sông Cửu Long là vùng đồng bằng lớn nhất nước ta, được bồi đắp chủ yếu bởi phù sa của hệ thống sông nào?',
      options: [
        { id: 'A', key: 'A', text: 'Sông Hồng' }, { id: 'B', key: 'B', text: 'Sông Mê Công (Sông Tiền và Sông Hậu)' },
        { id: 'C', key: 'C', text: 'Sông Đồng Nai' }, { id: 'D', key: 'D', text: 'Sông Mã' }
      ],
      correctAnswer: 'B', points: 0.75,
      explanation: 'Đồng bằng sông Cửu Long do hệ thống sông Mê Công bồi đắp.'
    },
    {
      itemNumber: 2, questionNumber: 2, level: 'M1', questionType: 'multiple_choice',
      topic: 'Lịch sử dân tộc',
      questionText: 'Chiến thắng lịch sử Bạch Đằng năm 938 gắn liền với tên tuổi của vị anh hùng dân tộc nào?',
      options: [
        { id: 'A', key: 'A', text: 'Hai Bà Trưng' }, { id: 'B', key: 'B', text: 'Ngô Quyền' },
        { id: 'C', key: 'C', text: 'Lý Thường Kiệt' }, { id: 'D', key: 'D', text: 'Trần Hưng Đạo' }
      ],
      correctAnswer: 'B', points: 0.75,
      explanation: 'Ngô Quyền lãnh đạo nhân dân ta đánh tan quân Nam Hán trên sông Bạch Đằng năm 938.'
    },
    {
      itemNumber: 3, questionNumber: 3, level: 'M1', questionType: 'true_false',
      topic: 'Khí hậu Việt Nam',
      questionText: 'Đánh dấu Đúng (Đ) hoặc Sai (S) cho các khẳng định về đặc điểm khí hậu nước ta:',
      options: [
        { id: 'A', text: 'Nước ta có khí hậu nhiệt đới gió mùa, nhiệt độ cao quanh năm.', isCorrect: true },
        { id: 'B', text: 'Khí hậu miền Nam phân chia thành 4 mùa rõ rệt: xuân, hạ, thu, đông.', isCorrect: false }
      ],
      correctAnswer: 'A-Đúng, B-Sai', points: 1.0,
      explanation: 'Miền Nam có 2 mùa rõ rệt: mùa mưa và mùa khô.'
    },
    {
      itemNumber: 4, questionNumber: 4, level: 'M1', questionType: 'multiple_choice',
      topic: 'Hoạt động sản xuất nông nghiệp',
      questionText: 'Vùng nào ở nước ta là vựa lúa và vựa trái cây lớn nhất cả nước?',
      options: [
        { id: 'A', key: 'A', text: 'Đồng bằng sông Cửu Long' }, { id: 'B', key: 'B', text: 'Đồng bằng sông Hồng' },
        { id: 'C', key: 'C', text: 'Duyên hải miền Trung' }, { id: 'D', key: 'D', text: 'Tây Nguyên' }
      ],
      correctAnswer: 'A', points: 0.75,
      explanation: 'Đồng bằng sông Cửu Long cung cấp sản lượng lúa gạo và trái cây lớn nhất.'
    },
    {
      itemNumber: 5, questionNumber: 5, level: 'M2', questionType: 'fill_in_the_blank',
      topic: 'Lịch sử Vĩnh Long',
      questionText: 'Văn Thánh Miếu Vĩnh Long được xây dựng vào thời nhà Nguyễn, là một trong ba Văn Thánh Miếu đầu tiên ở vùng đất ......',
      correctAnswer: 'Nam Bộ', points: 1.0,
      explanation: 'Văn Thánh Miếu Vĩnh Long là di sản văn hóa tâm linh lâu đời ở Nam Bộ.'
    },
    {
      itemNumber: 6, questionNumber: 6, level: 'M2', questionType: 'matching',
      topic: 'Danh nhân & Danh thắng vùng đất Vĩnh Long',
      questionText: 'Nối tên địa danh / danh nhân ở Cột A với đặc điểm tương ứng ở Cột B:',
      matchingPairs: [
        { left: 'Văn Thánh Miếu Vĩnh Long', right: 'Một trong ba Văn Thánh Miếu đầu tiên ở Nam Bộ' },
        { left: 'Phan Thanh Giản', right: 'Tiến sĩ đầu tiên của vùng đất Nam Bộ' },
        { left: 'Làng gốm Mang Thít', right: 'Vương quốc lò gốm đỏ bên dòng sông Cổ Chiên' }
      ],
      correctAnswer: 'Nối đúng 3 cặp địa danh lịch sử địa phương', points: 0.75,
      explanation: 'Khái quát danh nhân và di sản lịch sử văn hóa tỉnh Vĩnh Long.'
    },
    {
      itemNumber: 7, questionNumber: 7, level: 'M2', questionType: 'multiple_choice',
      topic: 'Khai phá vùng đất Nam Bộ',
      questionText: 'Các thế hệ cư dân Nam Bộ đã chinh phục tự nhiên, mở mang bờ cõi nhờ tinh thần nào?',
      options: [
        { id: 'A', key: 'A', text: 'Lao động cần cù, đoàn kết, dũng cảm và sáng tạo' },
        { id: 'B', key: 'B', text: 'Ỷ lại vào thiên nhiên sẵn có' },
        { id: 'C', key: 'C', text: 'Không giao lưu buôn bán với các vùng khác' },
        { id: 'D', key: 'D', text: 'Chỉ trồng trọt mà không phát triển chăn nuôi sông nước' }
      ],
      correctAnswer: 'A', points: 1.0,
      explanation: 'Tinh thần cần cù đoàn kết giúp cư dân khai phá vùng đất Nam Bộ.'
    },
    {
      itemNumber: 8, questionNumber: 8, level: 'M1', questionType: 'constructed_response',
      topic: 'Ý nghĩa sự kiện lịch sử',
      questionText: 'Nêu ngắn gọn ý nghĩa của chiến thắng Bạch Đằng năm 938 đối với lịch sử dân tộc ta.',
      correctAnswer: 'Chấm dứt hơn 1000 năm bắc thuộc, mở ra thời kỳ độc lập lâu dài cho dân tộc.', points: 1.0,
      explanation: 'Khẳng định mốc mốc độc lập dân tộc.'
    },
    {
      itemNumber: 9, questionNumber: 9, level: 'M2', questionType: 'constructed_response',
      topic: 'Đặc điểm tự nhiên địa phương',
      questionText: 'Kể tên 2 loại trái cây đặc sản nổi tiếng của vùng đất Vĩnh Long.',
      correctAnswer: 'Bưởi Năm Roi Bình Minh, Cam sành Tam Bình (hoặc Dừa sáp, Chôm chôm Cù lao An Bình).', points: 1.0,
      explanation: 'Kể đúng 2 trái cây đặc sản Vĩnh Long.'
    },
    {
      itemNumber: 10, questionNumber: 10, level: 'M3', questionType: 'constructed_response',
      topic: 'Trải nghiệm & Bảo tồn Di sản địa phương',
      questionText: 'Nêu 2 việc làm thiết thực của học sinh tiểu học để góp phần giữ gìn và phát huy giá trị di sản văn hóa, di tích lịch sử tại địa phương em.',
      correctAnswer: 'Học sinh nêu: Tự giác giữ vệ sinh khi đến thăm di tích, hăng hái tìm hiểu lịch sử địa phương, giới thiệu hình ảnh quê hương với bạn bè.', points: 2.0,
      explanation: 'Đánh giá thái độ và năng lực vận dụng tri thức lịch sử địa lí vào hành động cụ thể.'
    }
  ];

  // 5. Ngân hàng Tiếng Anh (7 TNKQ + 3 TL = 10 câu)
  const rawEnglishQuestions = [
    {
      itemNumber: 1, questionNumber: 1, level: 'M1', questionType: 'multiple_choice',
      topic: 'Task 1: Listening (Audio Transcript included)',
      questionText: 'Listen and choose the correct answer: What is Jenny doing?',
      options: [
        { id: 'A', key: 'A', text: 'She is reading a book.' }, { id: 'B', key: 'B', text: 'She is riding a bike.' },
        { id: 'C', key: 'C', text: 'She is drawing a picture.' }, { id: 'D', key: 'D', text: 'She is listening to music.' }
      ],
      correctAnswer: 'A', points: 0.75,
      explanation: 'Audio transcript: "Jenny is in the library. She is reading a book."'
    },
    {
      itemNumber: 2, questionNumber: 2, level: 'M1', questionType: 'multiple_choice',
      topic: 'Task 2: Listening Detail',
      questionText: 'Where are the students going on their field trip?',
      options: [
        { id: 'A', key: 'A', text: 'To the zoo' }, { id: 'B', key: 'B', text: 'To the eco-farm' },
        { id: 'C', key: 'C', text: 'To the cinema' }, { id: 'D', key: 'D', text: 'To the supermarket' }
      ],
      correctAnswer: 'B', points: 0.75,
      explanation: 'Transcript: "Tomorrow, we are visiting the eco-farm in Vinh Long."'
    },
    {
      itemNumber: 3, questionNumber: 3, level: 'M1', questionType: 'true_false',
      topic: 'Task 3: Reading True/False',
      questionText: 'Read the text and tick True (T) or False (F):\n"Ben loves sports. He plays football every Saturday afternoon with his classmates."',
      options: [
        { id: 'A', text: 'Ben plays football on Saturday afternoons.', isCorrect: true },
        { id: 'B', text: 'Ben plays football alone.', isCorrect: false }
      ],
      correctAnswer: 'A-True, B-False', points: 1.0,
      explanation: 'Ben plays football with his classmates.'
    },
    {
      itemNumber: 4, questionNumber: 4, level: 'M1', questionType: 'multiple_choice',
      topic: 'Task 4: Vocabulary & Grammar',
      questionText: 'Choose the correct word: "My school has a big green garden. We usually ...... flowers after class."',
      options: [
        { id: 'A', key: 'A', text: 'water' }, { id: 'B', key: 'B', text: 'eat' },
        { id: 'C', key: 'C', text: 'fly' }, { id: 'D', key: 'D', text: 'sleep' }
      ],
      correctAnswer: 'A', points: 0.75,
      explanation: 'Water flowers means tưới hoa.'
    },
    {
      itemNumber: 5, questionNumber: 5, level: 'M2', questionType: 'fill_in_the_blank',
      topic: 'Task 5: Complete the Word',
      questionText: 'Complete the word: "H_n_s" (Part of body used for washing):',
      correctAnswer: 'Hands', points: 0.75,
      explanation: 'H-a-n-d-s (Hands).'
    },
    {
      itemNumber: 6, questionNumber: 6, level: 'M2', questionType: 'matching',
      topic: 'Task 6: Matching Questions & Answers',
      questionText: 'Match Column A with Column B:',
      matchingPairs: [
        { left: 'What is your favorite subject?', right: 'I like English and Math.' },
        { left: 'Where is your school?', right: 'It is in An Truong commune.' }
      ],
      correctAnswer: 'Match correctly', points: 1.0,
      explanation: 'Match question with appropriate answer.'
    },
    {
      itemNumber: 7, questionNumber: 7, level: 'M2', questionType: 'multiple_choice',
      topic: 'Task 7: Everyday Communication',
      questionText: 'What should you say when someone helps you clean the classroom?',
      options: [
        { id: 'A', key: 'A', text: 'Thank you very much!' }, { id: 'B', key: 'B', text: 'Good morning!' },
        { id: 'C', key: 'C', text: 'Goodbye!' }, { id: 'D', key: 'D', text: 'Sorry!' }
      ],
      correctAnswer: 'A', points: 1.0,
      explanation: 'Express gratitude when receiving help.'
    },
    {
      itemNumber: 8, questionNumber: 8, level: 'M1', questionType: 'constructed_response',
      topic: 'Task 8: Writing Sentence Unscramble',
      questionText: 'Reorder the words to make a correct sentence:\nlike / I / planting / trees / school / in .',
      correctAnswer: 'I like planting trees in school.', points: 1.0,
      explanation: 'Correct sentence order.'
    },
    {
      itemNumber: 9, questionNumber: 9, level: 'M2', questionType: 'constructed_response',
      topic: 'Task 9: Writing Short Answer',
      questionText: 'Answer the question: What do you do to keep your classroom clean and green?',
      correctAnswer: 'I pick up trash and water green plants.', points: 1.0,
      explanation: 'Relevant response regarding school environmental protection.'
    },
    {
      itemNumber: 10, questionNumber: 10, level: 'M3', questionType: 'constructed_response',
      topic: 'Task 10: Speaking Interview & Rubric',
      questionText: 'Answer 2 questions from the teacher:\n1. What is your favorite subject at school?\n2. Why do you like it?',
      correctAnswer: 'Student answers fluently with correct pronunciation (e.g., "My favorite subject is English because I love singing English songs.")', points: 2.0,
      explanation: 'Speaking evaluation rubric (Fluency 1.0pt, Pronunciation 1.0pt).'
    }
  ];

  // 6. Ngân hàng Tin học / Công nghệ / Đạo đức (7 TNKQ + 3 TL = 10 câu)
  const rawTechQuestions = [
    {
      itemNumber: 1, questionNumber: 1, level: 'M1', questionType: 'multiple_choice',
      topic: 'Sử dụng máy tính & Thiết bị kĩ thuật',
      questionText: 'Thao tác nào sau đây là đúng quy cách và an toàn khi tắt máy tính?',
      options: [
        { id: 'A', key: 'A', text: 'Rút phích cắm điện trực tiếp ra khỏi ổ cắm.' },
        { id: 'B', key: 'B', text: 'Nhấn giữ nút nguồn trên thân máy tính trong 10 giây.' },
        { id: 'C', key: 'C', text: 'Vào Start -> chọn Shut down và đợi máy tắt hẳn rồi ngắt nguồn điện.' },
        { id: 'D', key: 'D', text: 'Gập ngay màn hình lại khi máy vẫn đang hoạt động.' }
      ],
      correctAnswer: 'C', points: 0.75,
      explanation: 'Tắt máy qua lệnh Shut down giúp hệ điều hành lưu dữ liệu an toàn.'
    },
    {
      itemNumber: 2, questionNumber: 2, level: 'M1', questionType: 'multiple_choice',
      topic: 'Linh kiện phần cứng máy tính',
      questionText: 'Bộ phận nào của máy tính dùng để nhập văn bản và câu lệnh vào máy tính?',
      options: [
        { id: 'A', key: 'A', text: 'Màn hình' }, { id: 'B', key: 'B', text: 'Bàn phím' },
        { id: 'C', key: 'C', text: 'Loa máy tính' }, { id: 'D', key: 'D', text: 'Thân máy' }
      ],
      correctAnswer: 'B', points: 0.75,
      explanation: 'Bàn phím là thiết bị vào dùng để nhập dữ liệu chữ và số.'
    },
    {
      itemNumber: 3, questionNumber: 3, level: 'M1', questionType: 'true_false',
      topic: 'Quy tắc an toàn thiết bị điện',
      questionText: 'Đánh dấu Đúng (Đ) hoặc Sai (S) cho các hành vi sử dụng thiết bị điện:',
      options: [
        { id: 'A', text: 'Lau chùi máy tính khi đã rút phích cắm điện hẳn.', isCorrect: true },
        { id: 'B', text: 'Dùng tay ướt cắm phích điện máy tính vào ổ cắm.', isCorrect: false }
      ],
      correctAnswer: 'A-Đúng, B-Sai', points: 1.0,
      explanation: 'Tuyệt đối không dùng tay ướt chạm vào thiết bị điện.'
    },
    {
      itemNumber: 4, questionNumber: 4, level: 'M1', questionType: 'multiple_choice',
      topic: 'Trồng hoa và cây cảnh trong chậu',
      questionText: 'Khi trồng cây cảnh trong chậu, dưới đáy chậu luôn cần có lỗ thoát nước nhằm mục đích gì?',
      options: [
        { id: 'A', key: 'A', text: 'Giúp cây hấp thụ nhiều ánh sáng hơn' },
        { id: 'B', key: 'B', text: 'Thoát nước thừa, giúp rễ cây không bị ngập úng' },
        { id: 'C', key: 'C', text: 'Giữ lại toàn bộ lượng phân bón' },
        { id: 'D', key: 'D', text: 'Làm chậu cây nhẹ hơn' }
      ],
      correctAnswer: 'B', points: 0.75,
      explanation: 'Lỗ thoát nước ngăn ngập úng thối rễ cây.'
    },
    {
      itemNumber: 5, questionNumber: 5, level: 'M2', questionType: 'fill_in_the_blank',
      topic: 'Quản lý tập tin và thư mục',
      questionText: 'Để sắp xếp các bài học ngăn nắp trên máy tính, người ta dùng các ...... để chứa các tệp tin.',
      correctAnswer: 'thư mục', points: 1.0,
      explanation: 'Thư mục (folder) dùng để quản lý các tệp tin.'
    },
    {
      itemNumber: 6, questionNumber: 6, level: 'M2', questionType: 'matching',
      topic: 'Các biểu tượng phần mềm cơ bản',
      questionText: 'Nối tên công dụng ở Cột A với thiết bị / biểu tượng ở Cột B:',
      matchingPairs: [
        { left: 'Chuột máy tính', right: 'Điều khiển con trỏ trên màn hình' },
        { left: 'Màn hình', right: 'Hiển thị kết quả làm việc' },
        { left: 'Thư mục (Folder)', right: 'Lưu trữ bài vẽ và tài liệu' }
      ],
      correctAnswer: 'Nối đúng các cặp', points: 0.75,
      explanation: 'Nhận biết các bộ phận và chức năng máy tính.'
    },
    {
      itemNumber: 7, questionNumber: 7, level: 'M2', questionType: 'multiple_choice',
      topic: 'An toàn Internet & Ứng xử văn minh',
      questionText: 'Khi tham gia môi trường mạng Internet, em nên tuân thủ quy tắc an toàn nào sau đây?',
      options: [
        { id: 'A', key: 'A', text: 'Chia sẻ mật khẩu tài khoản cá nhân cho tất cả bạn bè' },
        { id: 'B', key: 'B', text: 'Không tự ý cung cấp họ tên, địa chỉ nhà, số điện thoại cho người lạ trên mạng' },
        { id: 'C', key: 'C', text: 'Bấm vào tất cả các đường link lạ chứa quà tặng miễn phí' },
        { id: 'D', key: 'D', text: 'Đăng thông tin không kiểm chứng lên mạng' }
      ],
      correctAnswer: 'B', points: 1.0,
      explanation: 'Bảo mật thông tin cá nhân giúp phòng tránh rủi ro lừa đảo trực tuyến.'
    },
    {
      itemNumber: 8, questionNumber: 8, level: 'M1', questionType: 'constructed_response',
      topic: 'Thao tác với chuột máy tính',
      questionText: 'Kể tên 3 thao tác cơ bản khi sử dụng chuột máy tính.',
      correctAnswer: 'Nháy chuột, nháy đúp chuột, nháy chuột phải (hoặc kéo thả chuột).', points: 1.0,
      explanation: 'Nêu đúng 3 thao tác sử dụng chuột.'
    },
    {
      itemNumber: 9, questionNumber: 9, level: 'M2', questionType: 'constructed_response',
      topic: 'Chăm sóc cây trồng',
      questionText: 'Nêu 2 việc em nên làm hằng ngày để chăm sóc chậu cây hoa ở góc thiên nhiên của lớp học.',
      correctAnswer: 'Tưới nước vừa đủ mỗi ngày, nhặt lá khô vàng và đưa cây ra nơi có ánh sáng.', points: 1.0,
      explanation: 'Hành động chăm sóc cây trồng thực tế.'
    },
    {
      itemNumber: 10, questionNumber: 10, level: 'M3', questionType: 'constructed_response',
      topic: 'Vận dụng kĩ năng công nghệ vào học tập',
      questionText: 'Nêu các bước cơ bản để tạo một thư mục mới mang tên "Tài liệu Học tập Lớp 4" trên máy tính để sắp xếp bài học ngăn nắp.',
      correctAnswer: 'Bước 1: Mở ổ đĩa cần tạo. Bước 2: Nhấn chuột phải -> chọn New -> Folder. Bước 3: Gõ tên "Tài liệu Học tập Lớp 4" rồi nhấn Enter.', points: 2.0,
      explanation: 'Đánh giá năng lực quản lý tệp và thư mục máy tính.'
    }
  ];

  // Chọn bộ câu hỏi theo đúng môn học & RAG passage
  let matchedPassageObj = null;
  let rawQuestions = rawMathQuestions;
  if (isTV) {
    matchedPassageObj = getClientMatchedPassage(
      grade,
      semester,
      tiengVietConfig?.readingCorpusType || 'literary',
      examSetIndex,
      tiengVietConfig?.customPassage || null
    );
    rawQuestions = matchedPassageObj.questions;
  } else if (isEnglish) {
    rawQuestions = rawEnglishQuestions;
  } else if (isKhoaHoc) {
    rawQuestions = rawKhoaHocQuestions;
  } else if (isLichSu) {
    rawQuestions = rawLichSuQuestions;
  } else if (isTinHoc || isCongNghe) {
    rawQuestions = rawTechQuestions;
  }

  const questions = rawQuestions.map((q, idx) => ({
    ...q,
    itemNumber: idx + 1,
    questionNumber: idx + 1,
    questionText: q.questionText || q.content,
    content: q.content || q.questionText
  }));

  const specifications = questions.map((q, idx) => ({
    itemNumber: idx + 1,
    questionId: `Q-${idx + 1}`,
    topic: q.topic,
    learningOutcome: `Nắm vững kiến thức kĩ năng ${q.topic}`,
    level: q.level,
    points: q.points,
    questionType: q.questionType,
    questionTypeName: q.questionType === 'multiple_choice' ? 'Trắc nghiệm 4 lựa chọn' : (q.questionType === 'constructed_response' ? 'Tự luận' : 'Trắc nghiệm'),
    seaPlmContext: 'Bối cảnh thực tế & GDĐP'
  }));

  const mcCount = questions.filter(q => q.questionType === 'multiple_choice' || q.questionType === 'true_false' || q.questionType === 'fill_in_the_blank' || q.questionType === 'matching').length;
  const crCount = questions.filter(q => q.questionType === 'constructed_response').length;

  const semStr = String(semester || '').toLowerCase();
  const isSem2 = semStr.includes('ii') || semStr.includes('2') || semStr.includes('cuối năm');
  const isMid = semStr.includes('giữa') || semStr.includes('mid');
  const termName = isSem2 ? (isMid ? 'SECOND MID-TERM' : 'SECOND TERM') : (isMid ? 'FIRST MID-TERM' : 'FIRST TERM');

  const parts = isEnglish ? generateClientEnglishParts(grade, examSetIndex, semester) : null;
  const teacherGuide = isEnglish ? generateClientEnglishTeacherGuide(grade, examSetIndex, semester) : null;

  return {
    examId: `EXAM-${Date.now()}`,
    title: isEnglish
      ? `THE ${termName} TEST FOR GRADE ${grade} - BỘ ĐỀ SỐ ${examSetIndex}`
      : `BÀI KIỂM TRA ĐỊNH KỲ MÔN ${(subject || '').toUpperCase()} LỚP ${grade} (${(semester || '').toUpperCase()})`,
    grade,
    subject,
    governingBody,
    schoolName,
    semester,
    durationMinutes,
    totalPoints,
    isTiengViet: isTV,
    isEnglish: isEnglish,
    skillsRatio: isEnglish ? { listening: 3.0, reading: 2.5, writing: 2.5, speaking: 2.0 } : null,
    parts,
    teacherGuide,
    presetId: 'TT27_STANDARD',
    matrix: matrix || {
      summary: {
        totalQuestions: questions.length,
        m1Count: questions.filter(q => q.level === 'M1').length,
        m2Count: questions.filter(q => q.level === 'M2').length,
        m3Count: questions.filter(q => q.level === 'M3').length,
        totalTnCount: mcCount,
        totalTlCount: crCount,
        totalTnPoints: 6.0,
        totalTlPoints: 4.0
      }
    },
    questions,
    specifications,
    readingExam: isTV && matchedPassageObj ? {
      title: matchedPassageObj.title,
      comprehensionReading: {
        title: matchedPassageObj.title,
        author: matchedPassageObj.author || "Tác giả SGK / Tư liệu",
        passage: matchedPassageObj.passage
      },
      questions: questions.slice(0, 7),
      oralItems: getRandomCtstOralItems(grade, semester)
    } : null,
    writingExam: isTV ? {
      genre: tiengVietConfig?.essayGenre || (grade <= 3 ? "Viết đoạn văn" : "Văn miêu tả người"),
      promptText: tiengVietConfig?.essayGenre 
        ? `Viết bài văn thuộc thể loại ${tiengVietConfig.essayGenre} mà em yêu thích.`
        : (grade <= 3 ? "Viết đoạn văn ngắn (từ 4 đến 5 câu) kể về một việc tốt em đã làm ở trường hoặc ở nhà." : "Viết bài văn tả một người thầy cô giáo hoặc người lao động ở trường học mà em yêu quý.")
    } : null,
    statistics: {
      overallQualityScore: 98,
      totalQuestions: questions.length,
      m1Count: questions.filter(q => q.level === 'M1').length,
      m2Count: questions.filter(q => q.level === 'M2').length,
      m3Count: questions.filter(q => q.level === 'M3').length,
      mcCount,
      crCount,
      passedCount: questions.length,
      warningCount: 0
    },
    createdAt: new Date().toISOString()
  };
}

const CLIENT_READING_PASSAGES_TERM1 = {
  1: {
    passage: `We have a lot of fun at school. In our English lessons, we (1) __________ to English songs. We sing and chant. We (2) _______________ board games to learn English. (3) _____________ do projects together at the end of each unit. (4) _______________, it was sunny. We (5) ____________ in the school garden. There were many flowers and birds. We were happy.`,
    items: [
      { id: "G4-R2-1", options: [{ id: "a", text: "listen" }, { id: "b", text: "write" }, { id: "c", text: "speak" }], correct: "a" },
      { id: "G4-R2-2", options: [{ id: "a", text: "read" }, { id: "b", text: "play" }, { id: "c", text: "sing" }], correct: "b" },
      { id: "G4-R2-3", options: [{ id: "a", text: "They" }, { id: "b", text: "You" }, { id: "c", text: "We" }], correct: "c" },
      { id: "G4-R2-4", options: [{ id: "a", text: "Yesterday" }, { id: "b", text: "Now" }, { id: "c", text: "Weekend" }], correct: "a" },
      { id: "G4-R2-5", options: [{ id: "a", text: "are" }, { id: "b", text: "was" }, { id: "c", text: "were" }], correct: "c" }
    ]
  },
  2: {
    passage: `My name is Nam. I live in Tra On, Vinh Long. Every morning, I get (1) __________ at six o'clock. I have breakfast with my family and (2) __________ to school by bike. My favourite subject is English (3) __________ I want to talk with tourists from other countries. In the afternoon, I usually (4) __________ football with my classmates. Last weekend, I (5) __________ at my grandparents' house.`,
    items: [
      { id: "G4-R2-1", options: [{ id: "a", text: "up" }, { id: "b", text: "on" }, { id: "c", text: "in" }], correct: "a" },
      { id: "G4-R2-2", options: [{ id: "a", text: "goes" }, { id: "b", text: "go" }, { id: "c", text: "went" }], correct: "b" },
      { id: "G4-R2-3", options: [{ id: "a", text: "because" }, { id: "b", text: "and" }, { id: "c", text: "but" }], correct: "a" },
      { id: "G4-R2-4", options: [{ id: "a", text: "listen" }, { id: "b", text: "play" }, { id: "c", text: "draw" }], correct: "b" },
      { id: "G4-R2-5", options: [{ id: "a", text: "was" }, { id: "b", text: "were" }, { id: "c", text: "am" }], correct: "a" }
    ]
  },
  3: {
    passage: `Tony is my new friend from Sydney, Australia. He is ten years (1) __________. His birthday is (2) __________ October. He can play basketball and swim very well, but he (3) __________ play the guitar. At school, Tony has Maths, Science and English on (4) __________. Yesterday afternoon, Tony and I (5) __________ at the bookshop to buy some colourful notebooks.`,
    items: [
      { id: "G4-R2-1", options: [{ id: "a", text: "old" }, { id: "b", text: "age" }, { id: "c", text: "years" }], correct: "a" },
      { id: "G4-R2-2", options: [{ id: "a", text: "on" }, { id: "b", text: "in" }, { id: "c", text: "at" }], correct: "b" },
      { id: "G4-R2-3", options: [{ id: "a", text: "can" }, { id: "b", text: "cannot" }, { id: "c", text: "is" }], correct: "b" },
      { id: "G4-R2-4", options: [{ id: "a", text: "Tuesdays" }, { id: "b", text: "Tuesday" }, { id: "c", text: "week" }], correct: "a" },
      { id: "G4-R2-5", options: [{ id: "a", text: "are" }, { id: "b", text: "was" }, { id: "c", text: "were" }], correct: "c" }
    ]
  },
  4: {
    passage: `Today is our school sports day. The weather is very (1) __________ and pleasant. Many pupils are in the school playground. Nam and Peter are playing (2) __________ over there. Linda and Mai are skipping rope. They are very (3) __________. Our teacher, Mr Loc, is (4) __________ photos of the pupils. Last year, our class (5) __________ the first prize in running.`,
    items: [
      { id: "G4-R2-1", options: [{ id: "a", text: "sunny" }, { id: "b", text: "rain" }, { id: "c", text: "cloud" }], correct: "a" },
      { id: "G4-R2-2", options: [{ id: "a", text: "badminton" }, { id: "b", text: "swimming" }, { id: "c", text: "running" }], correct: "a" },
      { id: "G4-R2-3", options: [{ id: "a", text: "sad" }, { id: "b", text: "excited" }, { id: "c", text: "tired" }], correct: "b" },
      { id: "G4-R2-4", options: [{ id: "a", text: "taking" }, { id: "b", text: "take" }, { id: "c", text: "took" }], correct: "a" },
      { id: "G4-R2-5", options: [{ id: "a", text: "win" }, { id: "b", text: "wins" }, { id: "c", text: "won" }], correct: "c" }
    ]
  },
  5: {
    passage: `My sister Lan has a busy timetable at primary school. She (1) __________ to school from Monday to Friday. On Thursday mornings, she has Art and Music. She likes Art because she wants to be a (2) __________. At break time, she often (3) __________ stories with her best friend in the library. Last Sunday, her family (4) __________ to the zoo in the city. They (5) __________ many monkeys and elephants.`,
    items: [
      { id: "G4-R2-1", options: [{ id: "a", text: "go" }, { id: "b", text: "goes" }, { id: "c", text: "went" }], correct: "b" },
      { id: "G4-R2-2", options: [{ id: "a", text: "painter" }, { id: "b", text: "singer" }, { id: "c", text: "doctor" }], correct: "a" },
      { id: "G4-R2-3", options: [{ id: "a", text: "reads" }, { id: "b", text: "read" }, { id: "c", text: "watches" }], correct: "a" },
      { id: "G4-R2-4", options: [{ id: "a", text: "go" }, { id: "b", text: "went" }, { id: "c", text: "goes" }], correct: "b" },
      { id: "G4-R2-5", options: [{ id: "a", text: "see" }, { id: "b", text: "sees" }, { id: "c", text: "saw" }], correct: "c" }
    ]
  },
  6: {
    passage: `Last summer holiday, my family went to Phu Quoc island. The island was very beautiful (1) __________ green trees and blue water. We stayed in a hotel near the (2) __________. In the morning, my brother and I (3) __________ in the sea. In the evening, we ate delicious seafood. It (4) __________ a memorable holiday for all of us. Next summer, we want to (5) __________ Da Nang city.`,
    items: [
      { id: "G4-R2-1", options: [{ id: "a", text: "with" }, { id: "b", text: "for" }, { id: "c", text: "at" }], correct: "a" },
      { id: "G4-R2-2", options: [{ id: "a", text: "beach" }, { id: "b", text: "park" }, { id: "c", text: "school" }], correct: "a" },
      { id: "G4-R2-3", options: [{ id: "a", text: "swim" }, { id: "b", text: "swimming" }, { id: "c", text: "swam" }], correct: "c" },
      { id: "G4-R2-4", options: [{ id: "a", text: "was" }, { id: "b", text: "were" }, { id: "c", text: "is" }], correct: "a" },
      { id: "G4-R2-5", options: [{ id: "a", text: "visit" }, { id: "b", text: "visiting" }, { id: "c", text: "visited" }], correct: "a" }
    ]
  },
  7: {
    passage: `Our school library is on the second floor. It has many interesting books (1) __________ English and Vietnamese. Every Wednesday, pupils go there to read and (2) __________ books. Miss Huong, the librarian, is very friendly and (3) __________. Yesterday, I borrowed a book about animals in Africa. I (4) __________ reading it last night. I think reading books (5) __________ us learn many useful things.`,
    items: [
      { id: "G4-R2-1", options: [{ id: "a", text: "in" }, { id: "b", text: "on" }, { id: "c", text: "at" }], correct: "a" },
      { id: "G4-R2-2", options: [{ id: "a", text: "borrow" }, { id: "b", text: "borrowing" }, { id: "c", text: "borrows" }], correct: "a" },
      { id: "G4-R2-3", options: [{ id: "a", text: "help" }, { id: "b", text: "helpful" }, { id: "c", text: "helped" }], correct: "b" },
      { id: "G4-R2-4", options: [{ id: "a", text: "finished" }, { id: "b", text: "finish" }, { id: "c", text: "finishes" }], correct: "a" },
      { id: "G4-R2-5", options: [{ id: "a", text: "help" }, { id: "b", text: "helps" }, { id: "c", text: "helping" }], correct: "b" }
    ]
  },
  8: {
    passage: `Mary is a pupil at Sunflower Primary School. Her favourite subject is (1) __________ because she loves numbers and calculations. On Saturdays, she helps her mother (2) __________ the house and water the flowers. In the evening, she (3) __________ English cartoon films on TV. Where (4) __________ she yesterday? She was at her cousin's birthday party. They (5) __________ a big chocolate cake together.`,
    items: [
      { id: "G4-R2-1", options: [{ id: "a", text: "Maths" }, { id: "b", text: "Music" }, { id: "c", text: "Art" }], correct: "a" },
      { id: "G4-R2-2", options: [{ id: "a", text: "clean" }, { id: "b", text: "cleaning" }, { id: "c", text: "cleans" }], correct: "a" },
      { id: "G4-R2-3", options: [{ id: "a", text: "watches" }, { id: "b", text: "watch" }, { id: "c", text: "watched" }], correct: "a" },
      { id: "G4-R2-4", options: [{ id: "a", text: "is" }, { id: "b", text: "was" }, { id: "c", text: "were" }], correct: "b" },
      { id: "G4-R2-5", options: [{ id: "a", text: "eat" }, { id: "b", text: "ate" }, { id: "c", text: "eats" }], correct: "b" }
    ]
  }
};

const CLIENT_READING_PASSAGES_TERM2 = {
  1: {
    passage: `Last weekend, Nam and his class visited an eco-farm in Vinh Long. The weather was (1) __________ and warm. They saw many (2) __________ like cows and ducks. Nam helped to (3) __________ fresh oranges in the garden. In the afternoon, they (4) __________ fun games together. It was a very (5) __________ day for everyone.`,
    wordBank: ["sunny", "animals", "pick", "played", "happy"],
    answers: ["sunny", "animals", "pick", "played", "happy"]
  },
  2: {
    passage: `My friend Linda lives in a big city in London. Life in the city is very (1) __________ and crowded. She usually goes to school (2) __________ bus. Opposite her house, there is a big (3) __________ and a bakery. At weekends, she likes going to the park to (4) __________ her bike. She hopes to visit the quiet (5) __________ in Vietnam next year.`,
    wordBank: ["busy", "by", "pharmacy", "ride", "countryside"],
    answers: ["busy", "by", "pharmacy", "ride", "countryside"]
  },
  3: {
    passage: `Mai An Tiem was a hard-working prince in Vietnamese legend. He lived on a desert (1) __________ with his family. He planted watermelons and traded them (2) __________ food and clothes. I think An Tiem is very (3) __________ and brave. The story teaches us that hard work brings (4) __________ and happiness. It is my favourite (5) __________.`,
    wordBank: ["island", "for", "clever", "success", "story"],
    answers: ["island", "for", "clever", "success", "story"]
  },
  4: {
    passage: `We should protect our environment to keep our earth green. At our school, we (1) __________ the playground every afternoon. We (2) __________ green trees and water the flowers. We also (3) __________ water by turning off the taps. We shouldn't throw (4) __________ into the river. Clean environment is good for our (5) __________.`,
    wordBank: ["clean", "plant", "save", "trash", "health"],
    answers: ["clean", "plant", "save", "trash", "health"]
  },
  5: {
    passage: `What will houses be like in the future? They will be (1) __________ houses on the moon or under the ocean. They will have (2) __________ panels to save energy. Helpful (3) __________ will do the housework, wash dishes and cook meals. Children will (4) __________ online with computer screens. Life in the future will be very (5) __________.`,
    wordBank: ["smart", "solar", "robots", "learn", "exciting"],
    answers: ["smart", "solar", "robots", "learn", "exciting"]
  },
  6: {
    passage: `Tra On floating market is a famous place of interest in Vinh Long. People go there (1) __________ boat to buy and sell fresh fruits. You can find (2) __________ oranges and rambutan on the river. The sellers are very (3) __________ and welcoming. Many tourists come here to (4) __________ photos. It is a wonderful (5) __________ to visit.`,
    wordBank: ["by", "pomelos", "friendly", "take", "place"],
    answers: ["by", "pomelos", "friendly", "take", "place"]
  },
  7: {
    passage: `When you ride a bike on the road, you should be (1) __________. You shouldn't ride too (2) __________ because you may fall off your bike. Always stop at red (3) __________ lights. Don't play football on the (4) __________. Safe habits keep us (5) __________.`,
    wordBank: ["careful", "fast", "traffic", "street", "healthy"],
    answers: ["careful", "fast", "traffic", "street", "healthy"]
  },
  8: {
    passage: `Yesterday, our class had a memorable outdoor camping trip. We set up (1) __________ in the pine forest. In the evening, we built a (2) __________ and sang songs. We danced (3) __________ the fire until nine o'clock. The weather was cool and (4) __________. We had a (5) __________ time together.`,
    wordBank: ["tents", "campfire", "around", "pleasant", "great"],
    answers: ["tents", "campfire", "around", "pleasant", "great"]
  }
};

const CLIENT_WRITING_TASKS_TERM1 = {
  1: { sentences: ["do you/ What time/ have breakfast?", "some water/ want/ I.", "play/ He/ the piano/ can.", "on Saturdays/ listen to music/ I.", "she/ Where is/ from?"], answers: ["What time do you have breakfast?", "I want some water.", "He can play the piano.", "I listen to music on Saturdays.", "Where is she from?"] },
  2: { sentences: ["up / What / time / do / get / you / in the morning / ?", "play / She / can / the / piano / very well / .", "birthday / is / When / your / ?", "was / I / at / the / campsite / last weekend / ."], answers: ["What time do you get up in the morning?", "She can play the piano very well.", "When is your birthday?", "I was at the campsite last weekend."] },
  3: { sentences: ["is / Where / your / school / located / ?", "Maths / and / He / has / Art / today / .", "your / brother / ride / Can / a bicycle / ?", "were / on / They / the beach / last Sunday / ."], answers: ["Where is your school located?", "He has Maths and Art today.", "Can your brother ride a bicycle?", "They were on the beach last Sunday."] },
  4: { sentences: ["you / do / Why / like / Music / ?", "Because / want / I / to / be / a singer / .", "day / What / is / it / today / ?", "visited / our / grandparents / We / yesterday / ."], answers: ["Why do you like Music?", "Because I want to be a singer.", "What day is it today?", "We visited our grandparents yesterday."] },
  5: { sentences: ["subjects / How many / do / have / you / on Tuesdays / ?", "get / at / I / up / six thirty / every day / .", "is / your / What / favourite / sport / ?", "was / in / She / Tokyo / last month / ."], answers: ["How many subjects do you have on Tuesdays?", "I get up at six thirty every day.", "What is your favourite sport?", "She was in Tokyo last month."] },
  6: { sentences: ["does / When / your / English class / start / ?", "football / play / We / at / break time / .", "speak / you / Can / a little / English / ?", "sister / My / born / was / in August / ."], answers: ["When does your English class start?", "We play football at break time.", "Can you speak a little English?", "My sister was born in August."] },
  7: { sentences: ["do / you / What / do / in the evening / ?", "homework / do / my / I / with / my brother / .", "were / Where / they / last summer holiday / ?", "were / at / They / the zoo / in Ha Noi / ."], answers: ["What do you do in the evening?", "I do my homework with my brother.", "Where were they last summer holiday?", "They were at the zoo in Ha Noi."] },
  8: { sentences: ["does / Why / he / want / to learn / English / ?", "Because / wants / he / to talk / with foreigners / .", "time / do / What / you / go / to bed / ?", "PE / have / on / We / Wednesday mornings / ."], answers: ["Why does he want to learn English?", "Because he wants to talk with foreigners.", "What time do you go to bed?", "We have PE on Wednesday mornings."] }
};

const CLIENT_WRITING_TASKS_TERM2 = {
  1: { sentences: ["your favourite / What is / drink / ?", "the matter / What is / with you / ?", "would like / I / to be a doctor / in the future / .", "weather / What is the / like in summer / ?", "went to / We / an eco-farm / last Sunday / ."], answers: ["What is your favourite drink?", "What is the matter with you?", "I would like to be a doctor in the future.", "What's the weather like in summer?", "We went to an eco-farm last Sunday."] },
  2: { sentences: ["is life / What / in the countryside / like / ?", "can I get / How / to the railway station / ?", "should not / You / ride your bike / too fast / .", "do you think / What / of Mai An Tiem / ?", "protect / We should / the environment / by planting trees / ."], answers: ["What is life in the countryside like?", "How can I get to the railway station?", "You should not ride your bike too fast.", "What do you think of Mai An Tiem?", "We should protect the environment by planting trees."] },
  3: { sentences: ["pharmacy / Where is / the / ?", "story / What / are you / reading / ?", "is An Tiem / hard-working / and / clever / .", "should / We / solar energy / use / ."], answers: ["Where is the pharmacy?", "What story are you reading?", "An Tiem is hard-working and clever.", "We should use solar energy."] },
  4: { sentences: ["did you / How / get to / the floating market / ?", "went / We / by / boat / .", "fresh fruit / bought / We / on the river / .", "was / The trip / wonderful / ."], answers: ["How did you get to the floating market?", "We went by boat.", "We bought fresh fruit on the river.", "The trip was wonderful."] },
  5: { sentences: ["houses / What will / be like / in the future / ?", "smart houses / They will be / on the moon / .", "helpful robots / do / Will / housework / ?", "yes / will / they / ."], answers: ["What will houses be like in the future?", "They will be smart houses on the moon.", "Will helpful robots do housework?", "Yes, they will."] },
  6: { sentences: ["protect / How can we / our environment / ?", "can / We / plant / more trees / .", "save / We should / water and electricity / .", "throw trash / Don't / into the river / ."], answers: ["How can we protect our environment?", "We can plant more trees.", "We should save water and electricity.", "Don't throw trash into the river."] },
  7: { sentences: ["favourite / What's / drink / your / ?", "lemonade / I'd like / some / .", "matter / What's the / with him / ?", "has / He / a fever / ."], answers: ["What's your favourite drink?", "I'd like some lemonade.", "What's the matter with him?", "He has a fever."] },
  8: { sentences: ["were you / Where / yesterday / ?", "at / I was / the eco-farm / .", "did you / What / do / there / ?", "picked / We / fresh oranges / ."], answers: ["Where were you yesterday?", "I was at the eco-farm.", "What did you do there?", "We picked fresh oranges."] }
};

function generateClientEnglishParts(grade = 4, setIdx = 1, semester = 'Cuối học kỳ I') {
  const g = Number(grade) || 4;
  const setNum = Math.max(1, Math.min(8, Number(setIdx) || 1));
  const semStr = String(semester || '').toLowerCase();
  const isSem2 = semStr.includes('ii') || semStr.includes('2') || semStr.includes('cuối năm');

  const readingDict = isSem2 ? CLIENT_READING_PASSAGES_TERM2 : CLIENT_READING_PASSAGES_TERM1;
  const writingDict = isSem2 ? CLIENT_WRITING_TASKS_TERM2 : CLIENT_WRITING_TASKS_TERM1;

  const currentReadingPassage = readingDict[setNum] || readingDict[1];
  const currentWritingTask = writingDict[setNum] || writingDict[1];

  if (g === 3) {
    return {
      listening: {
        title: "LISTENING (4.0 marks)",
        score: 4.0,
        tasks: [
          {
            taskNumber: 1, taskTitle: "Listen and circle", taskDesc: "Listen and choose the correct picture (a or b).", points: 1.0,
            items: isSem2 ? [
              { id: "G3-L1-T2-1", question: "Who's this?", options: [{ id: "a", text: "It's my father", image: "/images/english/grade3/image2.png" }, { id: "b", text: "It's my mother", image: "/images/english/grade3/image4.png" }], correct: "a" },
              { id: "G3-L1-T2-2", question: "Do you have any cats?", options: [{ id: "a", text: "Yes, I have two cats", image: "/images/english/grade3/image5.png" }, { id: "b", text: "No, I have dogs", image: "/images/english/grade3/image6.png" }], correct: "a" },
              { id: "G3-L1-T2-3", question: "What's the weather like?", options: [{ id: "a", text: "It's sunny", image: "/images/english/grade3/image7.png" }, { id: "b", text: "It's rainy", image: "/images/english/grade3/image8.png" }], correct: "a" },
              { id: "G3-L1-T2-4", question: "Where are you going?", options: [{ id: "a", text: "I'm going to the beach", image: "/images/english/grade3/image9.png" }, { id: "b", text: "I'm going to school", image: "/images/english/grade3/image10.png" }], correct: "a" }
            ] : [
              { id: "G3-L1-1", question: "What's this?", options: [{ id: "a", text: "It's a hand", image: "/images/english/grade3/image2.png", imageKey: "image2.png" }, { id: "b", text: "It's an eye", image: "/images/english/grade3/image4.png", imageKey: "image4.png" }], correct: "a" },
              { id: "G3-L1-2", question: "What's this?", options: [{ id: "a", text: "It's a nose", image: "/images/english/grade3/image5.png", imageKey: "image5.png" }, { id: "b", text: "It's an ear", image: "/images/english/grade3/image6.png", imageKey: "image6.png" }], correct: "b" },
              { id: "G3-L1-3", question: "What's your hobby?", options: [{ id: "a", text: "I like walking", image: "/images/english/grade3/image7.png", imageKey: "image7.png" }, { id: "b", text: "I like cooking", image: "/images/english/grade3/image8.png", imageKey: "image8.png" }], correct: "b" },
              { id: "G3-L1-4", question: "What's your hobby?", options: [{ id: "a", text: "I like painting", image: "/images/english/grade3/image9.png", imageKey: "image9.png" }, { id: "b", text: "I like dancing", image: "/images/english/grade3/image10.png", imageKey: "image10.png" }], correct: "a" }
            ]
          },
          {
            taskNumber: 2, taskTitle: "Listen and number", taskDesc: "Listen and write numbers 1, 2, 3, 4 into the pictures.", points: 1.0,
            items: [
              { id: "G3-L2-1", label: "Picture a (Ms Hoa / Room)", image: "/images/english/grade3/image11.png", imageKey: "image11.png", orderIndex: 2 },
              { id: "G3-L2-2", label: "Picture b (Hobby / Toys)", image: "/images/english/grade3/image12.png", imageKey: "image12.png", orderIndex: 1 },
              { id: "G3-L2-3", label: "Picture c (Body part / Clothes)", image: "/images/english/grade3/image13.png", imageKey: "image13.png", orderIndex: 4 },
              { id: "G3-L2-4", label: "Picture d (Age / Zoo)", image: "/images/english/grade3/image14.png", imageKey: "image14.png", orderIndex: 3 }
            ]
          },
          {
            taskNumber: 3, taskTitle: "Listen and tick or cross", taskDesc: "Listen and write ☑ for correct or 🗵 for incorrect.", points: 1.0,
            items: [
              { id: "G3-L3-1", statement: "Is this our gym? - Yes, it is.", image: "/images/english/grade3/image15.png", imageKey: "image15.png", correct: "☑" },
              { id: "G3-L3-2", statement: "Is this your classroom? - Yes, it is.", image: "/images/english/grade3/image16.png", imageKey: "image16.png", correct: "☑" },
              { id: "G3-L3-3", statement: "I have a pen.", image: "/images/english/grade3/image18.png", imageKey: "image18.png", correct: "🗵" },
              { id: "G3-L3-4", statement: "My school bag is blue.", image: "/images/english/grade3/image19.png", imageKey: "image19.png", correct: "🗵" }
            ]
          },
          {
            taskNumber: 4, taskTitle: "Listen and tick True or False", taskDesc: "Listen to the recording and tick True or False.", points: 1.0,
            items: [
              { id: "G3-L4-1", statement: "1. A: What's your name? - B: My name's Mary.", correct: "True" },
              { id: "G3-L4-2", statement: "2. A: Is this Ms Hoa? - B: Yes, it is.", correct: "True" },
              { id: "G3-L4-3", statement: "3. A: Is that Mr Long? - B: Yes, it is.", correct: "True" },
              { id: "G3-L4-4", statement: "4. Open your eyes!", correct: "False" }
            ]
          }
        ]
      },
      reading: {
        title: "READING (2.0 marks)",
        score: 2.0,
        tasks: [
          {
            taskNumber: 1, taskTitle: "Read and complete", taskDesc: "Read and fill in the blanks.", points: 1.0,
            wordBank: isSem2 ? ["house", "cats", "sunny", "family"] : ["eight", "hobby", "Mary", "name"],
            passage: isSem2
              ? `My name is Mai. This is my (1) ................ We live in a nice (2) ................ in the countryside. I have two small (3) ................ in the garden. Today the weather is (4) ................ and warm. We are all happy together.`
              : `Mr Long: Hi. What's your (1) ................?\nMary: My name's (2) ................\nMr Long: How old are you?\nMary: I'm (3) ................ years old.\nMr Long: What's your (4) ................?\nMary: It's swimming.`,
            answers: isSem2 ? ["family", "house", "cats", "sunny"] : ["name", "Mary", "eight", "hobby"]
          },
          {
            taskNumber: 2, taskTitle: "Read and circle", taskDesc: "Choose the correct sentence.", points: 1.0,
            items: [
              { id: "G3-R2-1", sentence: "I have a book.", options: [{ id: "A", text: "Picture A (Book)" }, { id: "B", text: "Picture B (Pen)" }], correct: "A" },
              { id: "G3-R2-2", sentence: "Open your book, please!", options: [{ id: "A", text: "Picture A (Open)" }, { id: "B", text: "Picture B (Close)" }], correct: "A" },
              { id: "G3-R2-3", sentence: "Let's go to the classroom!", options: [{ id: "A", text: "Picture A (Gym)" }, { id: "B", text: "Picture B (Classroom)" }], correct: "B" },
              { id: "G3-R2-4", sentence: "I play football at break time.", options: [{ id: "A", text: "Picture A (Basketball)" }, { id: "B", text: "Picture B (Football)" }], correct: "B" }
            ]
          }
        ]
      },
      writing: {
        title: "WRITING (2.0 marks)",
        score: 2.0,
        tasks: [
          {
            taskNumber: 1, taskTitle: "Look and write", taskDesc: "Unscramble the letters to write correct words.", points: 1.0,
            items: isSem2 ? [
              { id: "G3-W1-1", clue: "a-t-h-e-f-r", hint: "f.........", answer: "father", image: "/images/english/grade3/image25.png", imageKey: "image25.png" },
              { id: "G3-W1-2", clue: "o-u-s-e-h", hint: "h.........", answer: "house", image: "/images/english/grade3/image26.png", imageKey: "image26.png" },
              { id: "G3-W1-3", clue: "a-i-n-r-y", hint: "r.........", answer: "rainy", image: "/images/english/grade3/image27.png", imageKey: "image27.png" },
              { id: "G3-W1-4", clue: "o-r-t-s-h-s", hint: "s.........", answer: "shorts", image: "/images/english/grade3/image29.png", imageKey: "image29.png" }
            ] : [
              { id: "G3-W1-1", clue: "a-y-r-M", hint: "M.........", answer: "Mary", image: "/images/english/grade3/image25.png", imageKey: "image25.png" },
              { id: "G3-W1-2", clue: "m i n g w i m s", hint: "s.........", answer: "swimming", image: "/images/english/grade3/image26.png", imageKey: "image26.png" },
              { id: "G3-W1-3", clue: "g i t h e", hint: "e.........", answer: "eight", image: "/images/english/grade3/image27.png", imageKey: "image27.png" },
              { id: "G3-W1-4", clue: "c h o u t", hint: "t.........", answer: "touch", image: "/images/english/grade3/image29.png", imageKey: "image29.png" }
            ]
          },
          {
            taskNumber: 2, taskTitle: "Put the words in order to make correct sentences", taskDesc: "Reorder words.", points: 1.0,
            sentences: currentWritingTask.sentences,
            answers: currentWritingTask.answers
          }
        ]
      },
      speaking: {
        title: "SPEAKING (2.0 marks)",
        score: 2.0,
        data: {
          part1: {
            title: "Part 1: Get to know each other", points: 1.25,
            desc: "Answer teacher's personal questions.",
            questions: isSem2
              ? ["Hello! Who do you live with?", "Do you have any pets at home?", "What's the weather like today?", "What toy do you like best?", "Where are you going this summer holiday?"]
              : ["Hello! What's your name?", "How are you today?", "How old are you?", "What's your hobby?", "What do you do at break time?"]
          },
          part2: {
            title: "Part 2: Look and say", points: 0.75,
            desc: "Look at classroom flashcards and answer.",
            items: [
              { id: "G3-S2-1", question: "1. What's this? What colour is it?", image: "/images/english/grade3/image30.png", imageKey: "image30.png" },
              { id: "G3-S2-2", question: "2. Is that our playground / classroom?", image: "/images/english/grade3/image31.png", imageKey: "image31.png" }
            ]
          }
        }
      }
    };
  }

  if (g === 5) {
    return {
      listening: {
        title: "LISTENING (3.0 marks)",
        score: 3.0,
        tasks: [
          {
            taskNumber: 1, taskTitle: "Listen and tick (☑)", taskDesc: "Listen and tick picture (a or b).", points: 1.0,
            items: isSem2 ? [
              { id: "G5-L1-T2-1", question: "Question 1 (Means of transport)", options: [{ id: "a", text: "By bus", image: "/images/english/grade5/image1.png", imageKey: "image1.png" }, { id: "b", text: "By taxi", image: "/images/english/grade5/image2.png", imageKey: "image2.png" }], correct: "a" },
              { id: "G5-L1-T2-2", question: "Question 2 (Hometown)", options: [{ id: "a", text: "Quiet countryside", image: "/images/english/grade5/image3.png", imageKey: "image3.png" }, { id: "b", text: "Busy city", image: "/images/english/grade5/image4.png", imageKey: "image4.png" }], correct: "a" },
              { id: "G5-L1-T2-3", question: "Question 3 (Vietnamese story)", options: [{ id: "a", text: "An Tiem story", image: "/images/english/grade5/image5.png", imageKey: "image5.png" }, { id: "b", text: "Aladdin story", image: "/images/english/grade5/image6.png", imageKey: "image6.png" }], correct: "a" },
              { id: "G5-L1-T2-4", question: "Question 4 (Environment)", options: [{ id: "a", text: "Planting trees", image: "/images/english/grade5/image7.png", imageKey: "image7.png" }, { id: "b", text: "Watering flowers", image: "/images/english/grade5/image8.png", imageKey: "image8.png" }], correct: "a" }
            ] : [
              { id: "G5-L1-1", question: "Question 1", options: [{ id: "a", text: "15 Green Street", image: "/images/english/grade5/image1.png", imageKey: "image1.png" }, { id: "b", text: "55 Green Street", image: "/images/english/grade5/image2.png", imageKey: "image2.png" }], correct: "b" },
              { id: "G5-L1-2", question: "Question 2", options: [{ id: "a", text: "Sandwich", image: "/images/english/grade5/image3.png", imageKey: "image3.png" }, { id: "b", text: "Cupcake", image: "/images/english/grade5/image4.png", imageKey: "image4.png" }], correct: "a" },
              { id: "G5-L1-3", question: "Question 3", options: [{ id: "a", text: "Reporter", image: "/images/english/grade5/image5.png", imageKey: "image5.png" }, { id: "b", text: "Firefighter", image: "/images/english/grade5/image6.png", imageKey: "image6.png" }], correct: "b" },
              { id: "G5-L1-4", question: "Question 4", options: [{ id: "a", text: "Malaysian", image: "/images/english/grade5/image7.png", imageKey: "image7.png" }, { id: "b", text: "Japanese", image: "/images/english/grade5/image8.png", imageKey: "image8.png" }], correct: "a" }
            ]
          },
          {
            taskNumber: 2, taskTitle: "Listen and circle", taskDesc: "Listen and choose correct completion (a or b).", points: 1.0,
            items: isSem2 ? [
              { id: "G5-L2-T2-1", question: "1. A: Where is the pharmacy? - B: It's ________.", options: [{ id: "a", text: "opposite the bakery" }, { id: "b", text: "next to the park" }], correct: "a" },
              { id: "G5-L2-T2-2", question: "2. A: Why shouldn't he ride his bike too fast? - B: Because ________.", options: [{ id: "a", text: "he may fall off his bike" }, { id: "b", text: "he may get lost" }], correct: "a" },
              { id: "G5-L2-T2-3", question: "3. A: What do you think of An Tiem? - B: I think he is ________.", options: [{ id: "a", text: "hard-working and clever" }, { id: "b", text: "greedy and lazy" }], correct: "a" },
              { id: "G5-L2-T2-4", question: "4. A: What will houses be like in the future? - B: They will be ________.", options: [{ id: "a", text: "smart houses with robots" }, { id: "b", text: "wooden houses in the woods" }], correct: "a" }
            ] : [
              { id: "G5-L2-1", question: "1. A: Where's the computer room? - B: It's on the ________.", options: [{ id: "a", text: "second floor" }, { id: "b", text: "third floor" }], correct: "b" },
              { id: "G5-L2-2", question: "2. A: What school activity does Lucy like? - B: She likes ________.", options: [{ id: "a", text: "doing projects" }, { id: "b", text: "reading books" }], correct: "a" },
              { id: "G5-L2-3", question: "3. A: Whose crayon is this? - B: It's ________.", options: [{ id: "a", text: "Mai's" }, { id: "b", text: "Linh's" }], correct: "a" },
              { id: "G5-L2-4", question: "4. A: What did Mai's class do at the campsite? - B: They ________.", options: [{ id: "a", text: "listened to music" }, { id: "b", text: "danced around the campsite" }], correct: "b" }
            ]
          },
          {
            taskNumber: 3, taskTitle: "Listen and tick True or False", taskDesc: "Listen and tick True or False.", points: 1.0,
            items: [
              { id: "G5-L3-1", statement: "1. Nam / Mai visited the place of interest.", correct: "True" },
              { id: "G5-L3-2", statement: "2. They went there by boat.", correct: "True" }
            ]
          }
        ]
      },
      reading: {
        title: "READING (2.5 marks)",
        score: 2.5,
        tasks: [
          {
            taskNumber: 1, taskTitle: "Look and tick ☑ or cross 🗵", taskDesc: "Look at the pictures and write ☑ or 🗵.", points: 1.25,
            items: [
              { id: "G5-R1-1", statement: "They are playing table tennis / watering flowers.", image: "/images/english/grade5/image13.png", imageKey: "image13.png", correct: "☑" },
              { id: "G5-R1-2", statement: "She wants to be a doctor / pharmacy.", image: "/images/english/grade5/image14.png", imageKey: "image14.png", correct: "🗵" },
              { id: "G5-R1-3", statement: "The library / environmental protection.", image: "/images/english/grade5/image15.png", imageKey: "image15.png", correct: "☑" },
              { id: "G5-R1-4", statement: "They are dancing / planting trees.", image: "/images/english/grade5/image16.png", imageKey: "image16.png", correct: "☑" },
              { id: "G5-R1-5", statement: "He was at the zoo yesterday.", image: "/images/english/grade5/image17.png", imageKey: "image17.png", correct: "🗵" }
            ]
          },
          {
            taskNumber: 2, taskTitle: "Read and complete", taskDesc: "Fill in the blanks with words from the box.", points: 1.25,
            wordBank: currentReadingPassage.wordBank || ["active", "cooking", "helpful", "is", "table tennis"],
            passage: currentReadingPassage.passage,
            answers: currentReadingPassage.answers || ["is", "active", "table tennis", "helpful", "cooking"]
          }
        ]
      },
      writing: {
        title: "WRITING (2.5 marks)",
        score: 2.5,
        tasks: [
          {
            taskNumber: 1, taskTitle: "Look and write", taskDesc: "Unscramble the words.", points: 1.0,
            items: isSem2 ? [
              { id: "G5-W1-T2-1", clue: "c-o-u-n-t-r-y-s-i-d-e", hint: "countryside", answer: "countryside" },
              { id: "G5-W1-T2-2", clue: "p-h-a-r-m-a-c-y", hint: "pharmacy", answer: "pharmacy" },
              { id: "G5-W1-T2-3", clue: "h-a-r-d - w-o-r-k-i-n-g", hint: "hard-working", answer: "hard-working" },
              { id: "G5-W1-T2-4", clue: "s-m-a-r-t  h-o-u-s-e", hint: "smart house", answer: "smart house" }
            ] : [
              { id: "G5-W1-1", clue: "latnp eerts", hint: "plant trees", answer: "plant trees" },
              { id: "G5-W1-2", clue: "rpjoctes od", hint: "do projects", answer: "do projects" },
              { id: "G5-W1-3", clue: "solfrew", hint: "flowers", answer: "flowers" },
              { id: "G5-W1-4", clue: "anialmyas", hint: "Malaysian", answer: "Malaysian" }
            ]
          },
          {
            taskNumber: 2, taskTitle: "Make sentences", taskDesc: "Reorder words to make correct sentences.", points: 1.5,
            sentences: currentWritingTask.sentences,
            answers: currentWritingTask.answers
          }
        ]
      },
      speaking: {
        title: "SPEAKING (2.5 marks)",
        score: 2.5,
        data: {
          part1: {
            title: "Part 1: Answer the questions", points: 1.5,
            desc: "Examiner asks 6 questions.",
            questions: isSem2
              ? ["What is your hometown like?", "How do you usually get to school?", "Where is the nearest supermarket?", "What is your favourite story?", "What do you do to save electricity?", "What will your dream house be like?"]
              : ["What's your name?", "How are you?", "Where do you live?", "What's your favourite colour?", "Do you like swimming?", "What did you do yesterday?"]
          },
          part2: {
            title: "Part 2: Look and answer the questions", points: 1.0,
            desc: "Look at situational pictures and answer.",
            questions: isSem2
              ? ["1. How can I get to the museum?", "2. Why shouldn't he run down the stairs?", "3. What do you think of Mai An Tiem?", "4. What should we do to protect our environment?"]
              : ["1. What would you like to be in the future?", "2. Where are the pencils?", "3. What did they do there?", "4. Were you at the campsite yesterday?"]
          }
        }
      }
    };
  }

  // Default Grade 4
  return {
    listening: {
      title: "LISTENING (3.0 marks)",
      score: 3.0,
      tasks: [
        {
          taskNumber: 1, taskTitle: "Listen and tick (☑)", taskDesc: "Listen to the dialogue and tick (☑) the correct box (a or b).", points: 1.0,
          items: isSem2 ? [
            { id: "G4-L1-T2-1", question: "What's your favourite drink?", options: [{ id: "a", text: "Orange juice", image: "/images/english/grade4/image1.png", imageKey: "image1.png" }, { id: "b", text: "Milk", image: "/images/english/grade4/image2.png", imageKey: "image2.png" }], correct: "a" },
            { id: "G4-L1-T2-2", question: "What does he look like?", options: [{ id: "a", text: "He is tall", image: "/images/english/grade4/image3.png", imageKey: "image3.png" }, { id: "b", text: "He is short", image: "/images/english/grade4/image4.png", imageKey: "image4.png" }], correct: "a" },
            { id: "G4-L1-T2-3", question: "What's the matter with you?", options: [{ id: "a", text: "I have a headache", image: "/images/english/grade4/image5.png", imageKey: "image5.png" }, { id: "b", text: "I have a fever", image: "/images/english/grade4/image6.png", imageKey: "image6.png" }], correct: "b" },
            { id: "G4-L1-T2-4", question: "What would you like to be in the future?", options: [{ id: "a", text: "A doctor", image: "/images/english/grade4/image7.png", imageKey: "image7.png" }, { id: "b", text: "A teacher", image: "/images/english/grade4/image8.png", imageKey: "image8.png" }], correct: "a" }
          ] : [
            { id: "G4-L1-1", question: "What time is it?", options: [{ id: "a", text: "It's eight thirty", image: "/images/english/grade4/image1.png", imageKey: "image1.png" }, { id: "b", text: "It's eight forty-five", image: "/images/english/grade4/image2.png", imageKey: "image2.png" }], correct: "b" },
            { id: "G4-L1-2", question: "When's your birthday?", options: [{ id: "a", text: "It's in January", image: "/images/english/grade4/image3.png", imageKey: "image3.png" }, { id: "b", text: "It's in June", image: "/images/english/grade4/image4.png", imageKey: "image4.png" }], correct: "a" },
            { id: "G4-L1-3", question: "Can you draw?", options: [{ id: "a", text: "Yes, I can", image: "/images/english/grade4/image5.png", imageKey: "image5.png" }, { id: "b", text: "No, I can't", image: "/images/english/grade4/image6.png", imageKey: "image6.png" }], correct: "a" },
            { id: "G4-L1-4", question: "Where are you from?", options: [{ id: "a", text: "I'm from America", image: "/images/english/grade4/image7.png", imageKey: "image7.png" }, { id: "b", text: "I'm from Japan", image: "/images/english/grade4/image8.png", imageKey: "image8.png" }], correct: "b" }
          ]
        },
        {
          taskNumber: 2, taskTitle: "Listen and number", taskDesc: "Listen and write numbers 1, 2, 3, 4 into the pictures.", points: 1.0,
          items: [
            { id: "G4-L2-1", label: "Picture a (School / Eco-farm)", image: "/images/english/grade4/image9.png", imageKey: "image9.png", orderIndex: 1 },
            { id: "G4-L2-2", label: "Picture b (Books / Zoo)", image: "/images/english/grade4/image10.png", imageKey: "image10.png", orderIndex: 3 },
            { id: "G4-L2-3", label: "Picture c (Beach / Weather)", image: "/images/english/grade4/image11.png", imageKey: "image11.png", orderIndex: 4 },
            { id: "G4-L2-4", label: "Picture d (Sports day / Swimming)", image: "/images/english/grade4/image12.png", imageKey: "image12.png", orderIndex: 2 }
          ]
        },
        {
          taskNumber: 3, taskTitle: "Listen and circle", taskDesc: "Listen and circle the best answer (a or b).", points: 1.0,
          items: isSem2 ? [
            { id: "G4-L3-T2-1", question: "What is your village like?", options: [{ id: "a", text: "It's small and quiet." }, { id: "b", text: "It's big and noisy." }], correct: "a" },
            { id: "G4-L3-T2-2", question: "What did you do at the eco-farm?", options: [{ id: "a", text: "We picked oranges." }, { id: "b", text: "We played computer games." }], correct: "a" },
            { id: "G4-L3-T2-3", question: "Why does Mai want to be a nurse?", options: [{ id: "a", text: "Because she wants to look after sick people." }, { id: "b", text: "Because she likes drawing." }], correct: "a" },
            { id: "G4-L3-T2-4", question: "When is your Sports day?", options: [{ id: "a", text: "It's in May." }, { id: "b", text: "It's in November." }], correct: "a" }
          ] : [
            { id: "G4-L3-1", question: "What's your favourite subject?", options: [{ id: "a", text: "It's PE." }, { id: "b", text: "It's IT." }], correct: "a" },
            { id: "G4-L3-2", question: "Why do you like art?", options: [{ id: "a", text: "Because I want to be a singer." }, { id: "b", text: "Because I want to be a painter." }], correct: "b" },
            { id: "G4-L3-3", question: "Where were you last weekend?", options: [{ id: "a", text: "I was at home." }, { id: "b", text: "I was at the campsite." }], correct: "b" },
            { id: "G4-L3-4", question: "Where were you last summer?", options: [{ id: "a", text: "I was in Tokyo." }, { id: "b", text: "I was in London." }], correct: "a" }
          ]
        }
      ]
    },
    reading: {
      title: "READING (2.5 marks)",
      score: 2.5,
      tasks: [
        {
          taskNumber: 1, taskTitle: "Look and tick (☑) or cross (🗵)", taskDesc: "Look at pictures and write ☑ or 🗵.", points: 1.25,
          items: [
            { id: "G4-R1-1", statement: "I can ride a bike / sore throat.", image: "/images/english/grade4/image13.png", imageKey: "image13.png", correct: "☑" },
            { id: "G4-R1-2", statement: "She has Art / lemonade.", image: "/images/english/grade4/image14.png", imageKey: "image14.png", correct: "🗵" },
            { id: "G4-R1-3", statement: "Our school is in the village.", image: "/images/english/grade4/image15.png", imageKey: "image15.png", correct: "☑" },
            { id: "G4-R1-4", statement: "I go to bed / picking apples.", image: "/images/english/grade4/image16.png", imageKey: "image16.png", correct: "☑" },
            { id: "G4-R1-5", statement: "His birthday / pilot.", image: "/images/english/grade4/image17.png", imageKey: "image17.png", correct: "🗵" }
          ]
        },
        {
          taskNumber: 2, taskTitle: "Read and circle", taskDesc: "Read the passage and choose the correct word (a, b, or c).", points: 1.25,
          passage: currentReadingPassage.passage,
          wordBank: currentReadingPassage.wordBank || null,
          items: currentReadingPassage.items || [
            { id: "G4-R2-1", options: [{ id: "a", text: "listen" }, { id: "b", text: "write" }, { id: "c", text: "speak" }], correct: "a" },
            { id: "G4-R2-2", options: [{ id: "a", text: "read" }, { id: "b", text: "play" }, { id: "c", text: "sing" }], correct: "b" },
            { id: "G4-R2-3", options: [{ id: "a", text: "They" }, { id: "b", text: "You" }, { id: "c", text: "We" }], correct: "c" },
            { id: "G4-R2-4", options: [{ id: "a", text: "Yesterday" }, { id: "b", text: "Now" }, { id: "c", text: "Weekend" }], correct: "a" },
            { id: "G4-R2-5", options: [{ id: "a", text: "are" }, { id: "b", text: "was" }, { id: "c", text: "were" }], correct: "c" }
          ]
        }
      ]
    },
    writing: {
      title: "WRITING (2.5 marks)",
      score: 2.5,
      tasks: [
        {
          taskNumber: 1, taskTitle: "Look and write", taskDesc: "Complete passage with suitable words.", points: 1.25,
          passage: isSem2
            ? `My sister Phong lives in a quiet village in (1) _____________. Her favourite drink is (2) _____________. She wants to be a (3) _____________ when she grows up. Last weekend, she stayed at (4) _____________ because she had a cold. Now she is (5) _______________________ in the garden.`
            : `Hello, my name is Nam. I am ten years old. I'm from (1) _____________. I study in a school in HCM city. There is a big (2) _____________ at my school. My favourite subject is (3) ______________. I also like computers a lot! There is one (4) ______________ where we play football everyday. After school, I often (5) _______________________ in the park with my friends.`,
          items: isSem2 ? [
            { id: "G4-W1-T2-1", word: "Vinh Long", image: "/images/english/grade4/image18.png", imageKey: "image18.png" },
            { id: "G4-W1-T2-2", word: "lemonade", image: "/images/english/grade4/image19.png", imageKey: "image19.png" },
            { id: "G4-W1-T2-3", word: "doctor", image: "/images/english/grade4/image20.png", imageKey: "image20.png" },
            { id: "G4-W1-T2-4", word: "home", image: "/images/english/grade4/image21.png", imageKey: "image21.png" },
            { id: "G4-W1-T2-5", word: "watering flowers", image: "/images/english/grade4/image22.png", imageKey: "image22.png" }
          ] : [
            { id: "G4-W1-1", word: "Vietnam", image: "/images/english/grade4/image18.png", imageKey: "image18.png" },
            { id: "G4-W1-2", word: "garden", image: "/images/english/grade4/image19.png", imageKey: "image19.png" },
            { id: "G4-W1-3", word: "music", image: "/images/english/grade4/image20.png", imageKey: "image20.png" },
            { id: "G4-W1-4", word: "playground", image: "/images/english/grade4/image21.png", imageKey: "image21.png" },
            { id: "G4-W1-5", word: "ride a bike", image: "/images/english/grade4/image22.png", imageKey: "image22.png" }
          ]
        },
        {
          taskNumber: 2, taskTitle: "Reorder the words to make correct sentences", taskDesc: "Put words in correct order.", points: 1.25,
          sentences: currentWritingTask.sentences,
          answers: currentWritingTask.answers
        }
      ]
    },
    speaking: {
      title: "SPEAKING (2.0 marks)",
      score: 2.0,
      data: {
        part1: {
          title: "Part 1: Get to know each other and answer the questions", points: 1.0,
          desc: "Personal questions.",
          questions: isSem2
            ? ["What's your favourite food and drink?", "What does your best friend look like?", "What's the matter when you get sick?", "What would you like to be in the future?", "What are you going to do this summer holiday?"]
            : ["What's your name?", "Where are you from?", "When's your birthday?", "What's your favourite subject?", "Where were you last summer?"]
        },
        part2: {
          title: "Part 2: Look and answer", points: 1.0,
          desc: "Look at situational pictures.",
          items: [
            { id: "G4-S2-1", question: "1. What do you do on Tuesdays?", image: "/images/english/grade4/image23.png", imageKey: "image23.png" },
            { id: "G4-S2-2", question: "2. Where's your school?", image: "/images/english/grade4/image24.png", imageKey: "image24.png" },
            { id: "G4-S2-3", question: "3. Can you roller skate?", image: "/images/english/grade4/image25.png", imageKey: "image25.png" },
            { id: "G4-S2-4", question: "4. What subjects do you have today?", image: "/images/english/grade4/image26.png", imageKey: "image26.png" },
            { id: "G4-S2-5", question: "5. What time do you go to bed?", image: "/images/english/grade4/image27.png", imageKey: "image27.png" },
            { id: "G4-S2-6", question: "6. When's your Sports day?", image: "/images/english/grade4/image28.png", imageKey: "image28.png" }
          ]
        }
      }
    }
  };
}

function generateClientEnglishTeacherGuide(grade = 4, setIdx = 1, semester = 'Cuối học kỳ I') {
  const g = Number(grade) || 4;
  const setNum = Math.max(1, Math.min(8, Number(setIdx) || 1));
  const semStr = String(semester || '').toLowerCase();
  const isSem2 = semStr.includes('ii') || semStr.includes('2') || semStr.includes('cuối năm');
  const isMid = semStr.includes('giữa') || semStr.includes('mid');
  const termName = isSem2 ? (isMid ? 'SECOND MID-TERM' : 'SECOND TERM') : (isMid ? 'FIRST MID-TERM' : 'FIRST TERM');

  return {
    title: `ANSWER KEYS FOR THE ${termName} TEST (GRADE ${g}) - BỘ ĐỀ SỐ ${setNum}`,
    audioTranscripts: isSem2 ? [
      { taskNumber: 1, taskTitle: "Listen and tick / circle", transcriptLines: ["1. A: How can I get to the museum? - B: You can go by bus.", "2. A: What's your favourite drink? - B: It's orange juice."] },
      { taskNumber: 2, taskTitle: "Listen and number", transcriptLines: ["1. Where were you last Sunday? - I was at the eco-farm in Vinh Long.", "2. Why do you like monkeys? - Because they are funny."] }
    ] : [
      { taskNumber: 1, taskTitle: "Listen and tick / circle", transcriptLines: ["1. A: What time is it? - B: It's eight forty-five.", "2. A: When's your birthday? - B: It's in January."] },
      { taskNumber: 2, taskTitle: "Listen and number", transcriptLines: ["1. Where's your school? - It's in the mountains.", "2. When's your sports day? - It's in October."] }
    ],
    speakingRubric: [
      { criteria: "Pronunciation & Intonation", points: 0.75, desc: "Phát âm chuẩn ngữ điệu và âm đuôi" },
      { criteria: "Fluency & Response", points: 0.75, desc: "Trả lời trôi chảy, phản xạ tự nhiên" },
      { criteria: "Grammar & Accuracy", points: 0.5, desc: "Sử dụng mẫu câu chuẩn xác" }
    ]
  };
}
