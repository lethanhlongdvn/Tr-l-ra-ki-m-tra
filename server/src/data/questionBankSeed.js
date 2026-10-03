/**
 * Question Bank Seed: Kho câu hỏi mẫu phong phú, chuẩn hóa theo TT27 và SEA-PLM
 */

module.exports = [
  {
    questionId: "M4-M1-MATH-001",
    subject: "Toán",
    grade: 4,
    bookSeries: "Kết nối tri thức với cuộc sống",
    topic: "Số có nhiều chữ số",
    lesson: "Hàng và lớp",
    week: 2,
    learningOutcome: "Đọc, viết, xác định giá trị chữ số theo vị trí hàng và lớp",
    competency: "Năng lực tính toán & nhận biết",
    level: "M1",
    questionType: "multiple_choice",
    seaPlmMode: false,
    questionText: "Trong số 425 819, chữ số 5 thuộc hàng nào, lớp nào?",
    options: [
      { id: "A", text: "Hàng trăm, lớp đơn vị", isCorrect: false, distractorRationale: "Nhầm chữ số 8 với chữ số 5." },
      { id: "B", text: "Hàng nghìn, lớp nghìn", isCorrect: true, distractorRationale: "Đáp án đúng (chữ số 5 ở hàng nghìn thuộc lớp nghìn)." },
      { id: "C", text: "Hàng chục nghìn, lớp nghìn", isCorrect: false, distractorRationale: "Nhầm vị trí hàng chục nghìn (chữ số 2)." },
      { id: "D", text: "Hàng trăm nghìn, lớp nghìn", isCorrect: false, distractorRationale: "Nhầm vị trí hàng trăm nghìn (chữ số 4)." }
    ],
    correctAnswer: "B",
    points: 0.5,
    scoringGuide: {
      maxPoints: 0.5,
      rubric: [{ criteria: "Chọn đúng B", points: 0.5, description: "Xác định đúng hàng và lớp của chữ số 5." }]
    },
    teacherStatus: "approved",
    createdAt: "2026-09-01T08:00:00Z"
  },
  {
    questionId: "M4-M2-MATH-002",
    subject: "Toán",
    grade: 4,
    bookSeries: "Kết nối tri thức với cuộc sống",
    topic: "Đơn vị đo khối lượng",
    lesson: "Yến, tạ, tấn",
    week: 5,
    learningOutcome: "Nhận biết và đổi các đơn vị đo khối lượng yến, tạ, tấn giải bài toán thực tế",
    competency: "Năng lực giải quyết vấn đề toán học",
    level: "M2",
    questionType: "multiple_choice",
    seaPlmMode: true,
    stimulus: {
      text: "Một xe tải chở khoai lang Bình Tân xuất phát từ xã Tân Quới (huyện Bình Tân) chở 2 tấn 5 tạ khoai lang. Dọc đường, xe dỡ bớt 8 tạ khoai xuống một đại lý phân phối."
    },
    questionText: "Hỏi trên xe tải lúc này còn lại bao nhiêu tạ khoai lang?",
    options: [
      { id: "A", text: "17 tạ", isCorrect: true, distractorRationale: "Đáp án đúng: 2 tấn 5 tạ = 25 tạ; 25 - 8 = 17 tạ." },
      { id: "B", text: "15 tạ", isCorrect: false, distractorRationale: "Học sinh tính nhầm 23 - 8 = 15 tạ." },
      { id: "C", text: "33 tạ", isCorrect: false, distractorRationale: "Học sinh làm phép cộng 25 + 8 thay vì dỡ bớt là phép trừ." },
      { id: "D", text: "18 tạ", isCorrect: false, distractorRationale: "Học sinh trừ nhầm phép nhớ." }
    ],
    correctAnswer: "A",
    points: 1.0,
    scoringGuide: {
      maxPoints: 1.0,
      rubric: [{ criteria: "Chọn đúng A (17 tạ)", points: 1.0, description: "Đổi đơn vị ra tạ và tính đúng phép trừ." }]
    },
    teacherStatus: "approved",
    createdAt: "2026-09-05T09:30:00Z"
  },
  {
    questionId: "M4-M3-MATH-003",
    subject: "Toán",
    grade: 4,
    bookSeries: "Kết nối tri thức với cuộc sống",
    topic: "Tìm số trung bình cộng",
    lesson: "Số trung bình cộng",
    week: 8,
    learningOutcome: "Vận dụng số trung bình cộng vào phân tích dữ liệu thực tế và đưa ra nhận xét",
    competency: "Năng lực mô hình hóa và phân tích số liệu",
    level: "M3",
    questionType: "constructed_response",
    seaPlmMode: true,
    stimulus: {
      text: "Đội tình nguyện viên của trường tiểu học tham gia dọn dẹp vệ sinh bờ kè sông Cổ Chiên trong 3 ngày. Ngày thứ nhất đội thu gom được 140 kg rác thải nhựa, ngày thứ hai thu gom được nhiều hơn ngày thứ nhất 20 kg, ngày thứ ba thu gom được số rác bằng trung bình cộng của hai ngày đầu."
    },
    questionText: "a) Hỏi trung bình mỗi ngày đội thu gom được bao nhiêu ki-lô-gam rác thải nhựa?\nb) Em hãy viết 1 câu nêu thông điệp kêu gọi người dân bảo vệ dòng sông quê hương.",
    correctAnswer: "a) 150 kg rác. b) Thông điệp ý nghĩa.",
    points: 2.0,
    scoringGuide: {
      maxPoints: 2.0,
      rubric: [
        { criteria: "Tính số rác ngày thứ hai", points: 0.5, description: "140 + 20 = 160 (kg)." },
        { criteria: "Tính số rác ngày thứ ba & Trung bình", points: 1.0, description: "(140 + 160) : 2 = 150 (kg). Trung bình 3 ngày = 150 (kg)." },
        { criteria: "Thông điệp bảo vệ môi trường", points: 0.5, description: "Học sinh nêu thông điệp nhân văn, thiết thực: Hãy chung tay giữ gìn dòng sông Cổ Chiên luôn trong xanh, không xả rác bừa bãi." }
      ]
    },
    teacherStatus: "approved",
    createdAt: "2026-09-10T14:15:00Z"
  },
  {
    questionId: "M5-M1-VIET-001",
    subject: "Tiếng Việt",
    grade: 5,
    bookSeries: "Kết nối tri thức với cuộc sống",
    topic: "Từ loại",
    lesson: "Đại từ",
    week: 2,
    learningOutcome: "Nhận biết đại từ xưng hô và đại từ thay thế trong câu",
    competency: "Năng lực ngôn ngữ",
    level: "M1",
    questionType: "multiple_choice",
    seaPlmMode: false,
    questionText: "Trong câu: 'Nam rất thích đọc sách khoa học. Cậu ấy thường đến thư viện mỗi chiều thứ Bảy.', từ 'Cậu ấy' dùng để thay thế cho từ nào?",
    options: [
      { id: "A", text: "thư viện", isCorrect: false, distractorRationale: "Nhầm với danh từ nơi chốn." },
      { id: "B", text: "Nam", isCorrect: true, distractorRationale: "Đáp án đúng (đại từ thay thế tránh lặp từ Nam)." },
      { id: "C", text: "khoa học", isCorrect: false, distractorRationale: "Nhầm danh từ chỉ môn học/lĩnh vực." },
      { id: "D", text: "thứ Bảy", isCorrect: false, distractorRationale: "Nhầm danh từ chỉ thời gian." }
    ],
    correctAnswer: "B",
    points: 0.5,
    scoringGuide: {
      maxPoints: 0.5,
      rubric: [{ criteria: "Chọn đúng B", points: 0.5, description: "Nhận biết đúng đại từ thay thế." }]
    },
    teacherStatus: "approved",
    createdAt: "2026-09-12T10:00:00Z"
  },
  {
    questionId: "M4-M1-TECH-001",
    subject: "Công nghệ",
    grade: 4,
    bookSeries: "Kết nối tri thức với cuộc sống",
    topic: "Chăm sóc hoa và cây cảnh trong chậu",
    lesson: "Dụng cụ và kĩ thuật trồng hoa",
    week: 6,
    learningOutcome: "Nhận biết vai trò kĩ thuật của lỗ thoát nước dưới đáy chậu trồng hoa",
    competency: "Năng lực nhận thức công nghệ",
    level: "M1",
    questionType: "multiple_choice",
    seaPlmMode: false,
    questionText: "Khi trồng hoa hoặc cây cảnh trong chậu, lỗ thoát nước ở đáy chậu có tác dụng quan trọng nhất là gì?",
    options: [
      { id: "A", text: "Giúp cây hấp thụ nhiều ánh sáng hơn.", isCorrect: false, distractorRationale: "Nhầm lẫn với vai trò của ánh sáng mặt trời." },
      { id: "B", text: "Thoát nước thừa để rễ cây không bị ngập úng.", isCorrect: true, distractorRationale: "Đáp án đúng: Giúp đất thông thoáng, tránh úng ngập rễ." },
      { id: "C", text: "Giữ lại toàn bộ phân bón trong chậu.", isCorrect: false, distractorRationale: "Lỗ thoát nước không giữ phân bón." },
      { id: "D", text: "Làm chậu cây nhẹ hơn.", isCorrect: false, distractorRationale: "Không phải mục đích kĩ thuật." }
    ],
    correctAnswer: "B",
    points: 0.5,
    scoringGuide: {
      maxPoints: 0.5,
      rubric: [{ criteria: "Chọn đúng B", points: 0.5, description: "Hiểu đúng vai trò của lỗ thoát nước đáy chậu cây." }]
    },
    teacherStatus: "approved",
    createdAt: "2026-09-14T08:00:00Z"
  },
  {
    questionId: "M4-M3-TECH-002",
    subject: "Công nghệ",
    grade: 4,
    bookSeries: "Kết nối tri thức với cuộc sống",
    topic: "Chăm sóc hoa và cây cảnh trong chậu",
    lesson: "Kế hoạch chăm sóc hoa đón Tết",
    week: 8,
    learningOutcome: "Lập kế hoạch chăm sóc hoa chậu và giải thích kĩ thuật tưới nước",
    competency: "Năng lực giải quyết vấn đề kĩ thuật",
    level: "M3",
    questionType: "constructed_response",
    seaPlmMode: true,
    stimulus: {
      text: "Để chuẩn bị đón Tết, chi đội lớp 4A trường Tiểu học A An Trường được giao chăm sóc 2 chậu hoa cúc vàng đặt tại sảnh thư viện."
    },
    questionText: "a) Nêu 3 công việc chăm sóc định kì cần làm để chậu hoa cúc phát triển tốt và nở hoa đúng dịp Tết.\nb) Giải thích vì sao không nên tưới nước cho cây vào buổi trưa nắng gắt.",
    correctAnswer: "a) 3 việc: Tưới nước vừa đủ ẩm vào sáng sớm hoặc chiều mát; Nhổ cỏ dại và bắt sâu; Tỉa bỏ lá vàng úa.\nb) Tưới trưa nắng làm nước bốc hơi nhanh và rễ cây bị sốc nhiệt luộc chín.",
    points: 2.0,
    scoringGuide: {
      maxPoints: 2.0,
      rubric: [
        { criteria: "Nêu đủ 3 công việc chăm sóc", points: 1.0, description: "Nêu tưới nước, làm cỏ bắt sâu và tỉa lá vàng." },
        { criteria: "Giải thích hiện tượng sốc nhiệt", points: 1.0, description: "Nêu được tác hại sốc nhiệt và nước bốc hơi nhanh khi tưới trưa nắng." }
      ]
    },
    teacherStatus: "approved",
    createdAt: "2026-09-15T09:00:00Z"
  },
  {
    questionId: "M4-M1-INFO-001",
    subject: "Tin học",
    grade: 4,
    bookSeries: "Kết nối tri thức với cuộc sống",
    topic: "Thao tác với tệp và thư mục",
    lesson: "Quản lý tệp và thư mục",
    week: 5,
    learningOutcome: "Nhận biết thao tác đổi tên thư mục trong hệ điều hành",
    competency: "Năng lực nhận diện công nghệ thông tin",
    level: "M1",
    questionType: "multiple_choice",
    seaPlmMode: false,
    questionText: "Để đổi tên một thư mục trong máy tính, em nhấp chuột phải vào thư mục đó rồi chọn lệnh nào?",
    options: [
      { id: "A", text: "Rename", isCorrect: true, distractorRationale: "Đáp án đúng: Lệnh Rename dùng để đổi tên." },
      { id: "B", text: "Delete", isCorrect: false, distractorRationale: "Delete là lệnh xóa thư mục." },
      { id: "C", text: "Copy", isCorrect: false, distractorRationale: "Copy là lệnh sao chép." },
      { id: "D", text: "Cut", isCorrect: false, distractorRationale: "Cut là lệnh di chuyển." }
    ],
    correctAnswer: "A",
    points: 0.5,
    scoringGuide: {
      maxPoints: 0.5,
      rubric: [{ criteria: "Chọn đúng A (Rename)", points: 0.5, description: "Nhận biết đúng lệnh đổi tên thư mục." }]
    },
    teacherStatus: "approved",
    createdAt: "2026-09-16T10:00:00Z"
  },
  {
    questionId: "M4-M2-SCI-001",
    subject: "Khoa học",
    grade: 4,
    bookSeries: "Kết nối tri thức với cuộc sống",
    topic: "Chất",
    lesson: "Tính chất và ba thể của nước",
    week: 3,
    learningOutcome: "Nhận biết các tính chất vật lý của nước",
    competency: "Năng lực nhận thức tự nhiên",
    level: "M2",
    questionType: "multiple_choice",
    seaPlmMode: false,
    questionText: "Nước nguyên chất có những tính chất nào sau đây?",
    options: [
      { id: "A", text: "Có màu trắng đục, vị ngọt nhẹ và có mùi thơm.", isCorrect: false, distractorRationale: "Nhầm lẫn với nước đường hoặc sữa." },
      { id: "B", text: "Không màu, không mùi, không vị, không có hình dạng cố định và chảy từ cao xuống thấp.", isCorrect: true, distractorRationale: "Đáp án đúng: Các tính chất vật lý chuẩn của nước." },
      { id: "C", text: "Luôn có hình dạng cố định và không bao giờ bốc hơi.", isCorrect: false, distractorRationale: "Nước lỏng không có hình dạng cố định." },
      { id: "D", text: "Hòa tan được tất cả mọi chất rắn trong tự nhiên.", isCorrect: false, distractorRationale: "Nước không hòa tan được cát, dầu ăn..." }
    ],
    correctAnswer: "B",
    points: 0.5,
    scoringGuide: {
      maxPoints: 0.5,
      rubric: [{ criteria: "Chọn đúng B", points: 0.5, description: "Nêu chính xác các tính chất vật lý của nước." }]
    },
    teacherStatus: "approved",
    createdAt: "2026-09-17T11:00:00Z"
  },
  {
    questionId: "M4-M1-ENG-001",
    subject: "Tiếng Anh",
    grade: 4,
    bookSeries: "Global Success",
    topic: "Me and My Friends",
    lesson: "Unit 1: My friends",
    week: 2,
    learningOutcome: "Hỏi và đáp về quê hương, quốc tịch của bạn bè",
    competency: "Năng lực nhận biết từ vựng và ngữ âm cơ bản",
    level: "M1",
    questionType: "multiple_choice",
    seaPlmMode: false,
    questionText: "Choose the correct word: 'Where are you from?' - 'I am from __________.'",
    options: [
      { id: "A", text: "Vietnam", isCorrect: true, distractorRationale: "Đáp án đúng: Vietnam là tên quốc gia." },
      { id: "B", text: "Vietnamese", isCorrect: false, distractorRationale: "Vietnamese là từ chỉ quốc tịch, không phù hợp sau giới từ 'from'." },
      { id: "C", text: "English", isCorrect: false, distractorRationale: "English là quốc tịch/ngôn ngữ." },
      { id: "D", text: "American", isCorrect: false, distractorRationale: "American là quốc tịch." }
    ],
    correctAnswer: "A",
    points: 0.5,
    scoringGuide: {
      maxPoints: 0.5,
      rubric: [{ criteria: "Chọn đúng phương án A (Vietnam)", points: 0.5, description: "Nhận biết đúng tên quốc gia." }]
    },
    teacherStatus: "approved",
    createdAt: "2026-09-18T08:00:00Z"
  },
  {
    questionId: "M4-M2-ENG-002",
    subject: "Tiếng Anh",
    grade: 4,
    bookSeries: "Global Success",
    topic: "Our School & Free Time Activities",
    lesson: "Unit 7: Our timetables",
    week: 12,
    learningOutcome: "Hỏi và trả lời về các môn học trong thời khóa biểu và lý do yêu thích",
    competency: "Năng lực kết nối từ vựng và cấu trúc ngữ pháp",
    level: "M2",
    questionType: "multiple_choice",
    seaPlmMode: true,
    stimulus: {
      text: "Nam and Linda are talking about their school timetable. Nam loves English because he wants to chat with foreign tourists at Vinh Long museum."
    },
    questionText: "Why does Nam like English?",
    options: [
      { id: "A", text: "Because he wants to chat with foreign tourists.", isCorrect: true, distractorRationale: "Đáp án đúng: Khớp thông tin trong bài đọc." },
      { id: "B", text: "Because he wants to be a doctor.", isCorrect: false, distractorRationale: "Không có thông tin này trong ngữ cảnh." },
      { id: "C", text: "Because he has Maths today.", isCorrect: false, distractorRationale: "Không giải thích cho lý do yêu thích tiếng Anh." },
      { id: "D", text: "Because it is difficult.", isCorrect: false, distractorRationale: "Trái ngược với sở thích." }
    ],
    correctAnswer: "A",
    points: 0.5,
    scoringGuide: {
      maxPoints: 0.5,
      rubric: [{ criteria: "Chọn đúng A", points: 0.5, description: "Đọc hiểu và trích xuất đúng lý do Nam thích học tiếng Anh." }]
    },
    teacherStatus: "approved",
    createdAt: "2026-09-19T09:00:00Z"
  },
  {
    questionId: "M4-M3-ENG-003",
    subject: "Tiếng Anh",
    grade: 4,
    bookSeries: "Global Success",
    topic: "All About Us",
    lesson: "Unit 5: Things we can do",
    week: 8,
    learningOutcome: "Tạo lập câu và đoạn văn ngắn mô tả khả năng và sở thích bản thân",
    competency: "Năng lực tạo lập văn bản tiếng Anh",
    level: "M3",
    questionType: "constructed_response",
    seaPlmMode: true,
    stimulus: {
      text: "Write 3 sentences to introduce yourself and what you can do."
    },
    questionText: "Write 3 sentences in English about yourself:\n1. Your name and age.\n2. Where you live.\n3. What you can do (e.g. swim, play football, ride a bike).",
    correctAnswer: "Gợi ý: My name is Nam. I am ten years old. I live in Vinh Long. I can swim and play football.",
    points: 1.5,
    scoringGuide: {
      maxPoints: 1.5,
      rubric: [
        { criteria: "Viết đúng câu 1 (tên, tuổi)", points: 0.5, description: "Đúng ngữ pháp 'My name is...' / 'I am... years old'." },
        { criteria: "Viết đúng câu 2 (nơi ở)", points: 0.5, description: "Đúng cấu trúc 'I live in...'." },
        { criteria: "Viết đúng câu 3 (khả năng 'can')", points: 0.5, description: "Đúng cấu trúc 'I can + V-infinitive'." }
      ]
    },
    teacherStatus: "approved",
    createdAt: "2026-09-20T10:00:00Z"
  }
];
