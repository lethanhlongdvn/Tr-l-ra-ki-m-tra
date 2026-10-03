/**
 * Question Engine: Sinh các dạng câu hỏi chuẩn Thông tư 27 và SEA-PLM
 * Hỗ trợ 5 nhóm dạng câu hỏi với Distractor chất lượng cao và Rubric chuẩn Thông tư 27 (bội số 0,25đ)
 * Hỗ trợ 100% độc lập, không lẫn lộn môn học:
 * - Công nghệ
 * - Tin học
 * - Khoa học / Tự nhiên và Xã hội
 * - Lịch sử và Địa lí
 * - Toán
 * - Tiếng Việt
 */

const seaPlmEngine = require('./seaPlmEngine');
const concreteQuestionBank = require('./concreteQuestionBank');
const multiSetExamEngine = require('./multiSetExamEngine');

class QuestionEngine {
  /**
   * Sinh câu hỏi đơn lẻ theo đặc tả
   */
  generateQuestionBySpec(spec, grade = 4, subject = "Công nghệ", mode = "TT27_SEA_PLM", examSetIndex = 1) {
    const level = spec.level || "M1";
    const type = spec.questionType || "multiple_choice";
    const isSeaPlm = spec.isSeaPlm !== undefined ? spec.isSeaPlm : mode.includes("SEA_PLM");
    const setIdx = spec.examSetIndex || examSetIndex || 1;

    // 0. Ưu tiên giải quyết qua MultiSetExamEngine để đảm bảo 8 bộ đề khác nhau phong phú
    if ((subject || "").toLowerCase().includes("toán")) {
      const multiSetQ = multiSetExamEngine.resolveMathQuestion(spec, grade, setIdx, isSeaPlm);
      if (multiSetQ) {
        return multiSetQ;
      }
    }

    // 1. Thử giải quyết câu hỏi chính xác theo bài học SGK và chuyên đề học kỳ (Tập 1 vs Tập 2)
    const concreteQ = concreteQuestionBank.resolveQuestion(spec, grade, subject, mode, setIdx);
    if (concreteQ) {
      return concreteQ;
    }

    switch (type) {
      case "multiple_choice":
        return this.createMultipleChoiceQuestion(spec, grade, subject, level, isSeaPlm);
      case "true_false":
        return this.createTrueFalseQuestion(spec, grade, subject, level, isSeaPlm);
      case "fill_in_the_blank":
        return this.createFillInBlankQuestion(spec, grade, subject, level, isSeaPlm);
      case "matching":
        return this.createMatchingQuestion(spec, grade, subject, level, isSeaPlm);
      case "constructed_response":
      default:
        return this.createConstructedResponseQuestion(spec, grade, subject, level, isSeaPlm);
    }
  }

  // ==================== 1. TRẮC NGHIỆM KHÁCH QUAN (MCQ) ====================
  createMultipleChoiceQuestion(spec, grade, subject, level, isSeaPlm) {
    const s = (subject || "").toLowerCase();
    const pts = spec.points || 0.5;

    // --- CÔNG NGHỆ ---
    if (s.includes("công nghệ")) {
      if (level === "M1") {
        return {
          questionId: spec.questionId,
          subject,
          grade,
          level: "M1",
          questionType: "multiple_choice",
          points: pts,
          learningOutcome: spec.learningOutcome,
          competency: "Năng lực nhận thức công nghệ",
          seaPlmMode: isSeaPlm,
          questionText: "Khi trồng hoa hoặc cây cảnh trong chậu, dưới đáy chậu luôn cần có lỗ thoát nước nhằm mục đích gì?",
          options: [
            { id: "A", text: "Giúp cây hấp thụ nhiều ánh sáng mặt trời hơn.", isCorrect: false, distractorRationale: "Nhầm lẫn giữa điều kiện ánh sáng với nhu cầu nước của rễ." },
            { id: "B", text: "Thoát nước thừa, giúp rễ cây không bị ngập úng và thối rễ.", isCorrect: true, distractorRationale: "Đáp án đúng: Nước thừa thoát ra ngoài giúp đất thông thoáng, tránh ngập úng." },
            { id: "C", text: "Giúp giữ lại toàn bộ lượng phân bón trong chậu.", isCorrect: false, distractorRationale: "Lỗ thoát nước không có tác dụng giữ phân bón." },
            { id: "D", text: "Làm cho chậu cây nhẹ hơn khi di chuyển.", isCorrect: false, distractorRationale: "Không phải mục đích sinh học kĩ thuật của lỗ đáy chậu." }
          ],
          correctAnswer: "B",
          scoringGuide: {
            maxPoints: pts,
            rubric: [{ criteria: "Chọn đúng phương án B", points: pts, description: "Hiểu được vai trò kĩ thuật của lỗ thoát nước đáy chậu trồng cây." }],
            commonMistakes: ["Nghĩ rằng bịt kín đáy chậu để giữ được nhiều nước tưới hơn."]
          },
          levelRationale: {
            cognitiveTask: "Học sinh nhận biết vai trò kĩ thuật của lỗ thoát nước đáy chậu cây.",
            whyNotLower: "Yêu cầu nhớ kiến thức về dụng cụ trồng hoa cây cảnh.",
            whyNotHigher: "Câu hỏi nhận biết trực tiếp, chưa yêu cầu giải quyết tình huống kỹ thuật phức tạp."
          }
        };
      } else if (level === "M2") {
        return {
          questionId: spec.questionId,
          subject,
          grade,
          level: "M2",
          questionType: "multiple_choice",
          points: pts,
          learningOutcome: spec.learningOutcome,
          competency: "Năng lực sử dụng công nghệ",
          seaPlmMode: isSeaPlm,
          stimulus: {
            text: isSeaPlm ? "Gia đình bạn Nam ở phường Tân Hạnh (thành phố Vĩnh Long) chuẩn bị trồng hoa vạn thọ trong chậu để đón Tết. Nam được bố giao chuẩn bị giá thể trồng cây." : "Để chuẩn bị trồng một chậu hoa cúc, bạn Nam tiến hành chuẩn bị các thành phần của giá thể trồng cây."
          },
          questionText: "Hỗn hợp giá thể phù hợp nhất để trồng hoa trong chậu cần đảm bảo những yêu cầu nào sau đây?",
          options: [
            { id: "A", text: "Chỉ dùng 100% cát mịn để chậu cây dễ thoát nước nhanh.", isCorrect: false, distractorRationale: "Cát mịn nghèo dinh dưỡng và giữ nước kém." },
            { id: "B", text: "Dùng đất sét đặc để giữ thật chặt rễ cây không bị đổ.", isCorrect: false, distractorRationale: "Đất sét đặc gây nghẹt rễ, không thông thoáng." },
            { id: "C", text: "Phối trộn đất tơi xốp, xơ dừa hoặc trấu hun và phân hữu cơ hoai mục.", isCorrect: true, distractorRationale: "Đáp án đúng: Giá thể đủ dinh dưỡng, giữ ẩm tốt và tơi xốp." },
            { id: "D", text: "Dùng xỉ than chưa qua ngâm rửa trộn với đá vụn.", isCorrect: false, distractorRationale: "Xỉ than chưa xử lý có thể chứa chất độc hại cho rễ cây con." }
          ],
          correctAnswer: "C",
          scoringGuide: {
            maxPoints: pts,
            rubric: [{ criteria: "Chọn đúng phương án C", points: pts, description: "Phân tích và lựa chọn đúng thành phần giá thể trồng cây phù hợp." }]
          },
          levelRationale: {
            cognitiveTask: "Học sinh liên hệ phối trộn các nguyên liệu giá thể để đảm bảo cây phát triển khỏe mạnh.",
            whyNotLower: "Cần so sánh tính chất các loại đất và vật liệu trồng cây.",
            whyNotHigher: "Kiến thức phối trộn giá thể đã được học trong bài dụng cụ và vật liệu trồng cây."
          }
        };
      } else {
        // M3 Công nghệ
        return {
          questionId: spec.questionId,
          subject,
          grade,
          level: "M3",
          questionType: "multiple_choice",
          points: pts,
          learningOutcome: spec.learningOutcome,
          competency: "Năng lực giải quyết vấn đề kĩ thuật công nghệ",
          seaPlmMode: isSeaPlm,
          stimulus: {
            text: isSeaPlm ? "Tại vườn hoa thanh niên của Trường Tiểu học A An Trường, một chậu cây hoa hồng môn đặt ngoài hành lang có biểu hiện: lá vàng úa hàng loạt, đất trong chậu lúc nào cũng nhão ướt và có mùi ủng dù các bạn vẫn tưới nước đều đặn mỗi ngày." : "Một chậu cây cảnh đặt trong phòng có biểu hiện: lá bị vàng úa, đất nhão ướt liên tục dù vẫn tưới nước hàng ngày."
          },
          questionText: "Nguyên nhân chính dẫn đến hiện tượng trên và biện pháp khắc phục kĩ thuật hợp lý nhất là gì?",
          options: [
            { id: "A", text: "Do thiếu nước; cần tăng lượng nước tưới gấp đôi mỗi ngày.", isCorrect: false, distractorRationale: "Chẩn đoán sai: Đất đã quá nhão úng, tưới thêm sẽ làm rễ thối chết nhanh hơn." },
            { id: "B", text: "Do cây bị úng nước vì tưới quá nhiều và lỗ thoát nước bị tắc; cần ngưng tưới, khơi thông lỗ thoát nước và đưa cây ra nơi thoáng gió.", isCorrect: true, distractorRationale: "Đáp án đúng: Xác định đúng bệnh úng rễ và đề xuất giải pháp kỹ thuật chính xác." },
            { id: "C", text: "Do thiếu phân bón; cần bón thêm ngay một lượng lớn phân đạm hóa học vào gốc cây.", isCorrect: false, distractorRationale: "Cây đang yếu rễ, bón phân hóa học đậm đặc sẽ làm xót rễ và chết cây." },
            { id: "D", text: "Do chậu quá to; cần lập tức cắt bỏ toàn bộ thân lá cây.", isCorrect: false, distractorRationale: "Cắt bỏ thân lá không giải quyết nguyên nhân ngập úng đất." }
          ],
          correctAnswer: "B",
          scoringGuide: {
            maxPoints: pts,
            rubric: [{ criteria: "Chọn đúng phương án B", points: pts, description: "Phát hiện đúng nguyên nhân úng rễ và đưa ra giải pháp chăm sóc kĩ thuật phù hợp." }]
          },
          levelRationale: {
            cognitiveTask: "Vận dụng kiến thức chăm sóc cây vào tình huống thực tế để phân tích nguyên nhân và đề xuất phương án xử lý kĩ thuật tối ưu.",
            whyNotLower: "Đòi hỏi tư duy phản biện, chẩn đoán nguyên nhân và ra quyết định.",
            whyNotHigher: "Phù hợp chuẩn đầu ra Mức 3 môn Công nghệ lớp 4."
          }
        };
      }
    }

    // --- TIN HỌC ---
    if (s.includes("tin học")) {
      if (level === "M1") {
        return {
          questionId: spec.questionId,
          subject,
          grade,
          level: "M1",
          questionType: "multiple_choice",
          points: pts,
          learningOutcome: spec.learningOutcome,
          competency: "Năng lực nhận diện công nghệ thông tin",
          seaPlmMode: isSeaPlm,
          questionText: "Trong hệ điều hành máy tính, thao tác nào sau đây dùng để đổi tên một thư mục đã có?",
          options: [
            { id: "A", text: "Nhấp chuột phải vào thư mục rồi chọn Rename.", isCorrect: true, distractorRationale: "Đáp án đúng: Lệnh Rename dùng để đổi tên tệp hoặc thư mục." },
            { id: "B", text: "Nhấp chuột phải vào thư mục rồi chọn Delete.", isCorrect: false, distractorRationale: "Delete là lệnh xóa thư mục." },
            { id: "C", text: "Nhấp chuột phải vào thư mục rồi chọn Copy.", isCorrect: false, distractorRationale: "Copy là lệnh sao chép thư mục." },
            { id: "D", text: "Nhấp đúp chuột thật nhanh vào giữa biểu tượng thư mục.", isCorrect: false, distractorRationale: "Nhấp đúp chuột là thao tác mở thư mục." }
          ],
          correctAnswer: "A",
          scoringGuide: {
            maxPoints: pts,
            rubric: [{ criteria: "Chọn đúng A", points: pts, description: "Nhận biết đúng thao tác đổi tên thư mục trong máy tính." }]
          },
          levelRationale: {
            cognitiveTask: "Nhận biết lệnh đổi tên thư mục trong hệ thống tệp.",
            whyNotLower: "Yêu cầu nhớ đúng từ khóa chức năng hệ điều hành.",
            whyNotHigher: "Thao tác đơn lẻ trực tiếp."
          }
        };
      } else {
        return {
          questionId: spec.questionId,
          subject,
          grade,
          level: "M2",
          questionType: "multiple_choice",
          points: pts,
          learningOutcome: spec.learningOutcome,
          competency: "Năng lực an toàn số",
          seaPlmMode: isSeaPlm,
          stimulus: {
            text: "Khi đang sử dụng máy tính tìm tài liệu học tập, một trang web lạ xuất hiện thông báo: 'Bạn đã trúng thưởng 1 chiếc điện thoại iPhone, hãy nhập họ tên, địa chỉ nhà và mật khẩu email để nhận quà'."
          },
          questionText: "Hành động nào sau đây là an toàn và đúng đắn nhất?",
          options: [
            { id: "A", text: "Lập tức nhập thông tin cá nhân và mật khẩu để nhận thưởng.", isCorrect: false, distractorRationale: "Rất nguy hiểm: Sẽ bị đánh cắp tài khoản và thông tin cá nhân." },
            { id: "B", text: "Gửi liên kết đó cho các bạn trong lớp cùng nhập thông tin.", isCorrect: false, distractorRationale: "Tiếp tay lan truyền trang web độc hại lừa đảo." },
            { id: "C", text: "Tuyệt đối không nhập thông tin, đóng ngay trang web đó và báo cho thầy cô hoặc cha mẹ.", isCorrect: true, distractorRationale: "Đáp án đúng: Tuân thủ quy tắc an toàn bảo mật thông tin trên mạng Internet." },
            { id: "D", text: "Chỉ nhập mật khẩu mà không nhập họ tên.", isCorrect: false, distractorRationale: "Vẫn làm lộ thông tin bảo mật tài khoản." }
          ],
          correctAnswer: "C",
          scoringGuide: {
            maxPoints: pts,
            rubric: [{ criteria: "Chọn đúng C", points: pts, description: "Xác định đúng hành vi an toàn khi gặp trang web lừa đảo trên Internet." }]
          },
          levelRationale: {
            cognitiveTask: "Đánh giá tình huống an toàn mạng và chọn hành động tự bảo vệ bản thân.",
            whyNotLower: "Đòi hỏi phân tích rủi ro an toàn số.",
            whyNotHigher: "Tình huống cơ bản quen thuộc trong bài học an toàn mạng."
          }
        };
      }
    }

    // --- KHOA HỌC ---
    if (s.includes("khoa học") || s.includes("tự nhiên và xã hội")) {
      return {
        questionId: spec.questionId,
        subject,
        grade,
        level: level,
        questionType: "multiple_choice",
        points: pts,
        learningOutcome: spec.learningOutcome,
        competency: "Năng lực nhận thức thế giới tự nhiên",
        seaPlmMode: isSeaPlm,
        questionText: "Nước trong tự nhiên có thể tồn tại ở những thể nào sau đây?",
        options: [
          { id: "A", text: "Chỉ ở thể lỏng (nước mưa, nước sông suối).", isCorrect: false, distractorRationale: "Thiếu thể rắn (băng tuyết) và thể khí (hơi nước)." },
          { id: "B", text: "Ba thể: thể rắn (nước đá, băng), thể lỏng (nước sinh hoạt) và thể khí (hơi nước).", isCorrect: true, distractorRationale: "Đáp án đúng: Ba thể vật lý của nước trong tự nhiên." },
          { id: "C", text: "Chỉ ở thể lỏng và thể rắn.", isCorrect: false, distractorRationale: "Bỏ quên hơi nước trong không khí (thể khí)." },
          { id: "D", text: "Chỉ ở thể rắn khi nhiệt độ môi trường thật lạnh.", isCorrect: false, distractorRationale: "Sai hoàn toàn về trạng thái của nước." }
        ],
        correctAnswer: "B",
        scoringGuide: {
          maxPoints: pts,
          rubric: [{ criteria: "Chọn đúng B", points: pts, description: "Nhận biết đầy đủ 3 thể của nước trong tự nhiên." }]
        },
        levelRationale: {
          cognitiveTask: "Tái hiện kiến thức về ba thể của nước.",
          whyNotLower: "Cần nhớ đầy đủ 3 trạng thái vật lý.",
          whyNotHigher: "Chưa yêu cầu giải thích hiện tượng biến đổi trạng thái."
        }
      };
    }

    // --- LỊCH SỬ VÀ ĐỊA LÍ ---
    if (s.includes("lịch sử") || s.includes("địa lí")) {
      return {
        questionId: spec.questionId,
        subject,
        grade,
        level: level,
        questionType: "multiple_choice",
        points: pts,
        learningOutcome: spec.learningOutcome,
        competency: "Năng lực tìm hiểu địa lí và lịch sử",
        seaPlmMode: isSeaPlm,
        stimulus: {
          text: isSeaPlm ? "Tỉnh Vĩnh Long nằm ở trung tâm của vùng Đồng bằng sông Cửu Long, được bao bọc bởi hai nhánh sông lớn mang lại nguồn phù sa trù phú và nước ngọt quanh năm." : "Vùng Đồng bằng sông Cửu Long có mạng lưới sông ngòi kênh rạch chằng chịt."
        },
        questionText: "Hai nhánh sông lớn bồi đắp nên vùng đất phù sa màu mỡ của tỉnh Vĩnh Long và Nam Bộ là hai dòng sông nào?",
        options: [
          { id: "A", text: "Sông Hồng và sông Đà.", isCorrect: false, distractorRationale: "Hai con sông lớn ở vùng Đồng bằng Bắc Bộ." },
          { id: "B", text: "Sông Tiền và sông Hậu.", isCorrect: true, distractorRationale: "Đáp án đúng: Hai phân lưu chính của dòng sông Mê Kông khi chảy vào đất Việt Nam." },
          { id: "C", text: "Sông Đồng Nai và sông Sài Gòn.", isCorrect: false, distractorRationale: "Hệ thống sông ở vùng Đông Nam Bộ." },
          { id: "D", text: "Sông Mã và sông Chu.", isCorrect: false, distractorRationale: "Hai con sông ở vùng Bắc Trung Bộ (Thanh Hóa)." }
        ],
        correctAnswer: "B",
        scoringGuide: {
          maxPoints: pts,
          rubric: [{ criteria: "Chọn đúng B", points: pts, description: "Xác định đúng sông Tiền và sông Hậu bồi đắp phù sa cho vùng đất Vĩnh Long và ĐBSCL." }]
        },
        levelRationale: {
          cognitiveTask: "Nhận diện hai nhánh sông huyết mạch của địa phương và vùng Nam Bộ.",
          whyNotLower: "Yêu cầu nắm vững địa lí tự nhiên địa phương.",
          whyNotHigher: "Nhận biết kiến thức trực tiếp."
        }
      };
    }

    // --- TIẾNG VIỆT ---
    if (s.includes("tiếng việt")) {
      return {
        questionId: spec.questionId,
        subject,
        grade,
        level,
        questionType: "multiple_choice",
        points: pts,
        learningOutcome: spec.learningOutcome,
        competency: "Năng lực ngôn ngữ (Luyện từ và câu)",
        seaPlmMode: isSeaPlm,
        questionText: "Trong câu: 'Những đóa hoa sen trên hồ Cổ Chiên tỏa ngát hương thơm dịu nhẹ.', từ nào là danh từ riêng?",
        options: [
          { id: "A", text: "hoa sen", isCorrect: false, distractorRationale: "Học sinh nhầm danh từ chung chỉ loài hoa với danh từ riêng." },
          { id: "B", text: "Cổ Chiên", isCorrect: true, distractorRationale: "Đáp án đúng: Tên riêng của dòng sông/hồ, được viết hoa đúng quy tắc." },
          { id: "C", text: "hương thơm", isCorrect: false, distractorRationale: "Danh từ chung chỉ hiện tượng/mùi vị." },
          { id: "D", text: "dịu nhẹ", isCorrect: false, distractorRationale: "Tính từ mô tả đặc điểm." }
        ],
        correctAnswer: "B",
        scoringGuide: {
          maxPoints: pts,
          rubric: [{ criteria: "Chọn đúng B (Cổ Chiên)", points: pts, description: "Nhận diện đúng danh từ riêng chỉ địa danh." }]
        },
        levelRationale: {
          cognitiveTask: "Nhận biết danh từ riêng chỉ địa danh viết hoa.",
          whyNotLower: "Cần phân biệt các loại từ trong câu.",
          whyNotHigher: "Nhận diện trực tiếp theo quy tắc chính tả."
        }
      };
    }

    // --- TIẾNG ANH ---
    if (s.includes("tiếng anh") || s.includes("english")) {
      if (level === "M1") {
        return {
          questionId: spec.questionId,
          subject,
          grade,
          level: "M1",
          questionType: "multiple_choice",
          points: pts,
          learningOutcome: spec.learningOutcome,
          competency: "Năng lực nhận biết từ vựng và ngữ âm cơ bản",
          seaPlmMode: isSeaPlm,
          questionText: "Choose the correct word to complete the sentence: 'Where are you from?' - 'I am from __________.'",
          options: [
            { id: "A", text: "Vietnam", isCorrect: true, distractorRationale: "Đáp án đúng: Vietnam là danh từ chỉ quốc gia, phù hợp sau giới từ 'from'." },
            { id: "B", text: "Vietnamese", isCorrect: false, distractorRationale: "Vietnamese là từ chỉ quốc tịch hoặc ngôn ngữ, không đứng trực tiếp sau 'from' để chỉ nơi chốn." },
            { id: "C", text: "English", isCorrect: false, distractorRationale: "English là quốc tịch/ngôn ngữ, không phù hợp ngữ cảnh." },
            { id: "D", text: "American", isCorrect: false, distractorRationale: "American là quốc tịch, phải dùng 'America' nếu chỉ quốc gia." }
          ],
          correctAnswer: "A",
          scoringGuide: {
            maxPoints: pts,
            rubric: [{ criteria: "Chọn đúng phương án A (Vietnam)", points: pts, description: "Nhận biết chính xác tên quốc gia sau cấu trúc 'from + Country'." }],
            commonMistakes: ["Nhầm lẫn giữa từ chỉ tên nước (Country) và từ chỉ quốc tịch (Nationality)."]
          },
          levelRationale: {
            cognitiveTask: "Nhận biết danh từ chỉ quốc gia để điền vào mẫu câu quen thuộc.",
            whyNotLower: "Yêu cầu nhớ từ vựng và phân biệt country / nationality.",
            whyNotHigher: "Thao tác nhận biết trực tiếp 1 bước."
          }
        };
      } else if (level === "M2") {
        return {
          questionId: spec.questionId,
          subject,
          grade,
          level: "M2",
          questionType: "multiple_choice",
          points: pts,
          learningOutcome: spec.learningOutcome,
          competency: "Năng lực kết nối từ vựng và ngữ pháp trong ngữ cảnh",
          seaPlmMode: isSeaPlm,
          stimulus: {
            text: isSeaPlm ? "Mai lives in Vinh Long. On Sundays, she often visits her grandparents in Mang Thit and helps them water the orange trees in the morning." : "Nam has a busy week. On Sundays, he usually visits his grandparents and plays football with his friends."
          },
          questionText: "Read and choose the best answer: 'Why does Mai like Sundays?' - 'Because she can __________.'",
          options: [
            { id: "A", text: "go to school all day", isCorrect: false, distractorRationale: "Chủ nhật học sinh không phải đến trường cả ngày." },
            { id: "B", text: "visit her grandparents and water the trees", isCorrect: true, distractorRationale: "Đáp án đúng: Khớp chính xác thông tin hoạt động trong đoạn văn." },
            { id: "C", text: "stay up late to do homework", isCorrect: false, distractorRationale: "Không có thông tin trong bài đọc." },
            { id: "D", text: "have English tests", isCorrect: false, distractorRationale: "Thông tin không phù hợp ngữ cảnh ngày nghỉ." }
          ],
          correctAnswer: "B",
          scoringGuide: {
            maxPoints: pts,
            rubric: [{ criteria: "Chọn đúng phương án B", points: pts, description: "Kết nối thông tin trong bài đọc để trả lời câu hỏi 'Why'." }]
          },
          levelRationale: {
            cognitiveTask: "Đọc hiểu kết nối thông tin để chọn lý do phù hợp.",
            whyNotLower: "Cần đọc hiểu câu hỏi 'Why' và tìm thông tin tương ứng trong văn bản.",
            whyNotHigher: "Thông tin có sẵn trực tiếp trong bài đọc ngắn."
          }
        };
      } else {
        // M3 Tiếng Anh
        return {
          questionId: spec.questionId,
          subject,
          grade,
          level: "M3",
          questionType: "multiple_choice",
          points: pts,
          learningOutcome: spec.learningOutcome,
          competency: "Năng lực vận dụng ngôn ngữ giải quyết tình huống giao tiếp",
          seaPlmMode: isSeaPlm,
          stimulus: {
            text: "Your foreign friend Tom wants to improve his health and asks you for advice because he often has a toothache after eating lots of sweets."
          },
          questionText: "What is the most suitable advice you should give to Tom in this situation?",
          options: [
            { id: "A", text: "You should eat more candies and chocolates.", isCorrect: false, distractorRationale: "Lời khuyên sai: Ăn nhiều đồ ngọt làm đau răng nặng hơn." },
            { id: "B", text: "You should go to the dentist and brush your teeth twice a day.", isCorrect: true, distractorRationale: "Đáp án đúng: Lời khuyên y tế chuẩn xác và hợp lý cho người đau răng." },
            { id: "C", text: "You should stay up late to play computer games.", isCorrect: false, distractorRationale: "Không liên quan đến vấn đề đau răng và có hại cho sức khỏe." },
            { id: "D", text: "You shouldn't drink any water.", isCorrect: false, distractorRationale: "Lời khuyên sai và nguy hiểm cho cơ thể." }
          ],
          correctAnswer: "B",
          scoringGuide: {
            maxPoints: pts,
            rubric: [{ criteria: "Chọn đúng B", points: pts, description: "Vận dụng mẫu câu đưa ra lời khuyên sức khỏe 'You should...' vào tình huống thực tế." }]
          },
          levelRationale: {
            cognitiveTask: "Phân tích tình huống thực tế về sức khỏe và lựa chọn lời khuyên tiếng Anh đúng đắn, văn minh.",
            whyNotLower: "Đòi hỏi tư duy phản biện và đánh giá tình huống đời sống.",
            whyNotHigher: "Đạt chuẩn yêu cầu cần đạt Mức 3 môn Tiếng Anh tiểu học."
          }
        };
      }
    }

    // --- TOÁN (MẶC ĐỊNH) ---
    if (level === "M1") {
      return {
        questionId: spec.questionId,
        subject,
        grade,
        level: "M1",
        questionType: "multiple_choice",
        points: pts,
        learningOutcome: spec.learningOutcome,
        competency: "Năng lực tính toán & nhận biết",
        seaPlmMode: isSeaPlm,
        questionText: "Chữ số 7 trong số 375 284 có giá trị là bao nhiêu?",
        options: [
          { id: "A", text: "700", isCorrect: false, distractorRationale: "Học sinh nhầm hàng trăm với hàng chục nghìn." },
          { id: "B", text: "7 000", isCorrect: false, distractorRationale: "Học sinh đếm nhầm vị trí hàng nghìn." },
          { id: "C", text: "70 000", isCorrect: true, distractorRationale: "Đáp án đúng (chữ số 7 thuộc hàng chục nghìn, lớp nghìn)." },
          { id: "D", text: "700 000", isCorrect: false, distractorRationale: "Học sinh nhầm với hàng trăm nghìn." }
        ],
        correctAnswer: "C",
        scoringGuide: {
          maxPoints: pts,
          rubric: [{ criteria: "Chọn đúng phương án C (70 000)", points: pts, description: "Xác định đúng giá trị theo hàng và lớp." }],
          commonMistakes: ["Đếm ngược thứ tự các hàng từ trái qua phải."]
        },
        levelRationale: {
          cognitiveTask: "Nhận biết vị trí hàng chục nghìn và nêu giá trị trực tiếp.",
          whyNotLower: "Cần nhớ cấu tạo thập phân của số nhiều chữ số.",
          whyNotHigher: "Thao tác trực tiếp một bước."
        }
      };
    } else {
      return {
        questionId: spec.questionId,
        subject,
        grade,
        level: "M2",
        questionType: "multiple_choice",
        points: pts,
        learningOutcome: spec.learningOutcome,
        competency: "Năng lực giải quyết vấn đề toán học",
        seaPlmMode: isSeaPlm,
        stimulus: {
          text: isSeaPlm ? "Vườn bưởi Năm Roi của gia đình bạn An tại thị xã Bình Minh thu hoạch đợt 1 được 3 450 kg, đợt 2 thu hoạch nhiều hơn đợt 1 là 800 kg." : "Một nông trường thu hoạch đợt 1 được 3 450 kg nông sản, đợt 2 thu hoạch nhiều hơn đợt 1 là 800 kg."
        },
        questionText: "Cả hai đợt gia đình đã thu hoạch được tất cả bao nhiêu ki-lô-gam nông sản?",
        options: [
          { id: "A", text: "4 250 kg", isCorrect: false, distractorRationale: "Chỉ tính đợt 2 mà quên cộng với đợt 1." },
          { id: "B", text: "7 700 kg", isCorrect: true, distractorRationale: "Đáp án đúng: Đợt 2: 4 250 kg; cả hai đợt: 3 450 + 4 250 = 7 700 kg." },
          { id: "C", text: "6 900 kg", isCorrect: false, distractorRationale: "Lấy đợt 1 nhân 2." },
          { id: "D", text: "8 500 kg", isCorrect: false, distractorRationale: "Cộng nhầm hàng nghìn." }
        ],
        correctAnswer: "B",
        scoringGuide: {
          maxPoints: pts,
          rubric: [{ criteria: "Chọn đúng B (7 700 kg)", points: pts, description: "Giải đúng bài toán 2 phép tính có lời văn." }]
        },
        levelRationale: {
          cognitiveTask: "Thực hiện 2 bước tính toán liên hoàn.",
          whyNotLower: "Đòi hỏi tính toán 2 bước.",
          whyNotHigher: "Tình huống quen thuộc bài toán nhiều hơn."
        }
      };
    }
  }

  // ==================== 2. ĐÚNG - SAI THEO CHÙM (TF CLUSTER) ====================
  createTrueFalseQuestion(spec, grade, subject, level, isSeaPlm) {
    const s = (subject || "").toLowerCase();
    const pts = spec.points || 1.0;

    if (s.includes("công nghệ")) {
      return {
        questionId: spec.questionId,
        subject,
        grade,
        level: level,
        questionType: "true_false",
        points: pts,
        learningOutcome: spec.learningOutcome,
        competency: "Năng lực sử dụng công nghệ an toàn",
        seaPlmMode: isSeaPlm,
        stimulus: {
          text: isSeaPlm ? "Để hưởng ứng phong trào 'Trường học xanh' tại trường Tiểu học Vĩnh Long, chi đội lớp 4A cùng nhau chăm sóc các chậu hoa mười giờ và hoa cúc đặt trước ban công lớp học." : "Bạn Minh được phân công chăm sóc các chậu hoa và cây cảnh trong khuôn viên trường học."
        },
        questionText: "Đọc kĩ dữ kiện trên và cho biết mỗi nhận định về kĩ thuật chăm sóc cây sau đây là Đúng hay Sai:",
        subQuestions: [
          { id: "a", statement: "Nên tưới nước cho cây vào buổi trưa nắng gắt để cây nhanh hạ nhiệt.", isTrue: false, explanation: "Sai: Tưới trưa nắng làm nước bốc hơi nhanh và rễ cây bị sốc nhiệt luộc chín." },
          { id: "b", statement: "Tưới nước vừa đủ ẩm cho đất vào sáng sớm hoặc chiều mát.", isTrue: true, explanation: "Đúng: Đây là thời điểm thích hợp nhất để cây hấp thụ nước." },
          { id: "c", statement: "Thường xuyên nhổ sạch cỏ dại xung quanh gốc cây để cỏ không tranh chấp chất dinh dưỡng.", isTrue: true, explanation: "Đúng: Nhổ cỏ dại giúp cây cảnh hấp thụ tối đa dinh dưỡng từ giá thể." },
          { id: "d", statement: "Bón càng nhiều phân bón hóa học cùng một lúc thì cây càng phát triển nhanh mà không sợ xót rễ.", isTrue: false, explanation: "Sai: Bón phân quá liều sẽ làm rễ cây bị xót, héo úa và chết." }
        ],
        correctAnswer: "a - Sai, b - Đúng, c - Đúng, d - Sai",
        scoringGuide: {
          maxPoints: pts,
          rubric: [
            { criteria: "Đúng cả 4 ý", points: pts, description: "Trả lời chính xác cả 4 nhận định a, b, c, d." },
            { criteria: "Đúng 3 ý", points: 0.75, description: "Trả lời đúng 3 nhận định." },
            { criteria: "Đúng 2 ý", points: 0.5, description: "Trả lời đúng 2 nhận định." },
            { criteria: "Đúng 1 ý", points: 0.25, description: "Trả lời đúng 1 nhận định." }
          ]
        },
        levelRationale: {
          cognitiveTask: "Kiểm chứng từng mệnh đề về kĩ thuật tưới nước, làm cỏ, bón phân chăm sóc cây trồng trong chậu.",
          whyNotLower: "Gồm nhiều nhận định độc lập yêu cầu suy luận.",
          whyNotHigher: "Kiến thức nằm trong bài học Chăm sóc hoa cây cảnh trong chậu."
        }
      };
    }

    if (s.includes("tin học")) {
      return {
        questionId: spec.questionId,
        subject,
        grade,
        level: level,
        questionType: "true_false",
        points: pts,
        learningOutcome: spec.learningOutcome,
        competency: "Năng lực quản lý dữ liệu số",
        seaPlmMode: isSeaPlm,
        stimulus: {
          text: "Bạn An tạo cấu trúc thư mục trên ổ đĩa D của máy tính để lưu trữ các bài vẽ Paint và bài văn Word."
        },
        questionText: "Em hãy cho biết mỗi nhận định về quản lý tệp và thư mục sau đây là Đúng hay Sai:",
        subQuestions: [
          { id: "a", statement: "Một thư mục có thể chứa nhiều thư mục con và nhiều tệp tin bên trong.", isTrue: true, explanation: "Đúng: Cấu trúc thư mục dạng cây cho phép lồng ghép nhiều thư mục con." },
          { id: "b", statement: "Trong cùng một thư mục, có thể đặt hai tệp có tên và phần mở rộng giống hệt nhau.", isTrue: false, explanation: "Sai: Hệ điều hành không cho phép 2 tệp cùng tên cùng định dạng trong cùng 1 thư mục." },
          { id: "c", statement: "Đặt tên thư mục nên ngắn gọn, gợi nhớ nội dung chứa bên trong.", isTrue: true, explanation: "Đúng: Giúp tìm kiếm và quản lý tệp khoa học." },
          { id: "d", statement: "Xóa một thư mục mẹ thì các thư mục con bên trong vẫn được giữ lại nguyên vẹn.", isTrue: false, explanation: "Sai: Khi xóa thư mục mẹ, toàn bộ nội dung con bên trong sẽ bị xóa theo." }
        ],
        correctAnswer: "a - Đúng, b - Sai, c - Đúng, d - Sai",
        scoringGuide: {
          maxPoints: pts,
          rubric: [
            { criteria: "Đúng cả 4 ý", points: pts, description: "Trả lời chính xác 4 nhận định." },
            { criteria: "Đúng 3 ý", points: 0.75, description: "Trả lời đúng 3 nhận định." },
            { criteria: "Đúng 2 ý", points: 0.5, description: "Trả lời đúng 2 nhận định." },
            { criteria: "Đúng 1 ý", points: 0.25, description: "Trả lời đúng 1 nhận định." }
          ]
        },
        levelRationale: {
          cognitiveTask: "Kiểm tra quy tắc quản lý tệp và thư mục trên máy tính.",
          whyNotLower: "Đòi hỏi phân tích tính chất hệ thống tệp.",
          whyNotHigher: "Kiến thức căn bản về hệ điều hành."
        }
      };
    }

    if (s.includes("khoa học") || s.includes("tự nhiên và xã hội")) {
      return {
        questionId: spec.questionId,
        subject,
        grade,
        level: level,
        questionType: "true_false",
        points: pts,
        learningOutcome: spec.learningOutcome,
        competency: "Năng lực nhận thức tự nhiên",
        seaPlmMode: isSeaPlm,
        stimulus: {
          text: "Các bạn học sinh làm thí nghiệm tìm hiểu về tính chất của nước và không khí."
        },
        questionText: "Cho biết mỗi nhận định khoa học sau đây là Đúng hay Sai:",
        subQuestions: [
          { id: "a", statement: "Nước nguyên chất là chất lỏng không màu, không mùi, không vị và có hình dạng cố định.", isTrue: false, explanation: "Sai: Nước không có hình dạng cố định, hình dạng phụ thuộc vật chứa." },
          { id: "b", statement: "Nước có thể hòa tan được muối ăn, đường nhưng không hòa tan được dầu ăn, cát.", isTrue: true, explanation: "Đúng: Tính chất hòa tan có chọn lọc của nước." },
          { id: "c", statement: "Không khí có thể bị nén lại hoặc giãn ra khi thay đổi áp suất.", isTrue: true, explanation: "Đúng: Thí nghiệm dùng ống tiêm chứng minh không khí có thể nén và giãn." },
          { id: "d", statement: "Khí ni-tơ là khí duy nhất duy trì sự cháy của ngọn nến.", isTrue: false, explanation: "Sai: Khí ô-xi mới là khí duy trì sự cháy, khí ni-tơ không duy trì sự cháy." }
        ],
        correctAnswer: "a - Sai, b - Đúng, c - Đúng, d - Sai",
        scoringGuide: {
          maxPoints: pts,
          rubric: [
            { criteria: "Đúng cả 4 ý", points: pts, description: "Trả lời chính xác 4 nhận định." },
            { criteria: "Đúng 3 ý", points: 0.75, description: "Trả lời đúng 3 nhận định." },
            { criteria: "Đúng 2 ý", points: 0.5, description: "Trả lời đúng 2 nhận định." },
            { criteria: "Đúng 1 ý", points: 0.25, description: "Trả lời đúng 1 nhận định." }
          ]
        },
        levelRationale: {
          cognitiveTask: "Xác thực tính chất vật lý hóa học của nước và không khí.",
          whyNotLower: "Tổng hợp từ nhiều bài học thí nghiệm.",
          whyNotHigher: "Các tính chất khoa học cơ bản."
        }
      };
    }

    if (s.includes("lịch sử") || s.includes("địa lí")) {
      return {
        questionId: spec.questionId,
        subject,
        grade,
        level: level,
        questionType: "true_false",
        points: pts,
        learningOutcome: spec.learningOutcome,
        competency: "Năng lực nhận thức địa lí",
        seaPlmMode: isSeaPlm,
        stimulus: {
          text: "Tìm hiểu về thiên nhiên và đời sống con người vùng Đồng bằng sông Cửu Long và tỉnh Vĩnh Long."
        },
        questionText: "Mỗi nhận định sau đây về vùng đất Nam Bộ là Đúng hay Sai:",
        subQuestions: [
          { id: "a", statement: "Vùng Đồng bằng sông Cửu Long là vựa lúa và vựa trái cây lớn nhất của nước ta.", isTrue: true, explanation: "Đúng: Đất phù sa màu mỡ và khí hậu thuận lợi cho nông nghiệp." },
          { id: "b", statement: "Khí hậu vùng Nam Bộ có bốn mùa xuân, hạ, thu, đông rõ rệt như miền Bắc.", isTrue: false, explanation: "Sai: Khí hậu Nam Bộ chỉ có hai mùa rõ rệt là mùa mưa và mùa khô." },
          { id: "c", statement: "Chợ nổi là nét sinh hoạt văn hóa độc đáo trên sông gắn liền với hệ thống kênh rạch.", isTrue: true, explanation: "Đúng: Hoạt động giao thương sông nước đặc trưng miền Tây." },
          { id: "d", statement: "Huyện Mang Thít tỉnh Vĩnh Long nổi tiếng với làng nghề gốm đỏ truyền thống.", isTrue: true, explanation: "Đúng: Vương quốc gốm đỏ Mang Thít bên dòng sông Cổ Chiên." }
        ],
        correctAnswer: "a - Đúng, b - Sai, c - Đúng, d - Đúng",
        scoringGuide: {
          maxPoints: pts,
          rubric: [
            { criteria: "Đúng cả 4 ý", points: pts, description: "Trả lời chính xác 4 nhận định." },
            { criteria: "Đúng 3 ý", points: 0.75, description: "Trả lời đúng 3 nhận định." },
            { criteria: "Đúng 2 ý", points: 0.5, description: "Trả lời đúng 2 nhận định." },
            { criteria: "Đúng 1 ý", points: 0.25, description: "Trả lời đúng 1 nhận định." }
          ]
        },
        levelRationale: {
          cognitiveTask: "Phân biệt các đặc điểm tự nhiên và kinh tế xã hội vùng đất Nam Bộ.",
          whyNotLower: "Bao quát cả khí hậu, kinh tế và làng nghề truyền thống.",
          whyNotHigher: "Kiến thức trọng tâm bài học địa lí vùng Nam Bộ."
        }
      };
    }

    if (s.includes("tiếng anh") || s.includes("english")) {
      return {
        questionId: spec.questionId,
        subject,
        grade,
        level: level,
        questionType: "true_false",
        points: pts,
        learningOutcome: spec.learningOutcome,
        competency: "Năng lực đọc hiểu và xác định tính đúng sai của thông tin",
        seaPlmMode: isSeaPlm,
        stimulus: {
          text: isSeaPlm ? "Hello, my name is Linh. I am ten years old and I live in Vinh Long. My school is small and friendly. I have English on Tuesdays and Fridays. My favourite subject is English because I want to talk to foreign visitors at Cai Be and Cho Lach floating markets. At break time, I usually read English storybooks with my best friend, Tony." : "Hello, my name is Linh. I am ten years old. I have English on Tuesdays and Fridays. My favourite subject is English because I like singing English songs. At break time, I usually play badminton with my best friend, Tony."
        },
        questionText: "Read the passage carefully and decide whether each statement is True (T) or False (F):",
        subQuestions: [
          { id: "a", statement: "Linh is ten years old.", isTrue: true, explanation: "Đúng: Thông tin trực tiếp trong câu thứ hai của bài đọc." },
          { id: "b", statement: "She has English on Mondays and Thursdays.", isTrue: false, explanation: "Sai: Trong bài Linh học tiếng Anh vào thứ Ba và thứ Sáu (Tuesdays and Fridays)." },
          { id: "c", statement: "Her favourite subject is English.", isTrue: true, explanation: "Đúng: Trong bài 'My favourite subject is English'." },
          { id: "d", statement: "At break time, she never reads books with Tony.", isTrue: false, explanation: "Sai: Trong bài Linh thường đọc sách truyện tiếng Anh cùng bạn thân Tony (usually read English storybooks)." }
        ],
        correctAnswer: "a - True, b - False, c - True, d - False",
        scoringGuide: {
          maxPoints: pts,
          rubric: [
            { criteria: "Đúng cả 4 ý", points: pts, description: "Xác định đúng cả 4 câu a, b, c, d." },
            { criteria: "Đúng 3 ý", points: 0.75, description: "Xác định đúng 3 câu." },
            { criteria: "Đúng 2 ý", points: 0.5, description: "Xác định đúng 2 câu." },
            { criteria: "Đúng 1 ý", points: 0.25, description: "Xác định đúng 1 câu." }
          ]
        },
        levelRationale: {
          cognitiveTask: "Đọc hiểu đoạn văn tiếng Anh ngắn và kiểm chứng 4 thông tin chi tiết.",
          whyNotLower: "Cần quét thông tin (scanning) và đối chiếu chi tiết giữa câu hỏi và đoạn văn.",
          whyNotHigher: "Văn bản quen thuộc với các chủ đề trường lớp, bạn bè."
        }
      };
    }

    // Mặc định Toán
    return {
      questionId: spec.questionId,
      subject,
      grade,
      level: level,
      questionType: "true_false",
      points: pts,
      learningOutcome: spec.learningOutcome,
      competency: "Năng lực phân tích và tư duy logic",
      seaPlmMode: isSeaPlm,
      stimulus: {
        text: "Cho hình chữ nhật có chiều dài 24 cm, chiều rộng bằng 1/3 chiều dài."
      },
      questionText: "Đọc kỹ dữ kiện trên và cho biết mỗi nhận định sau đây là Đúng hay Sai:",
      subQuestions: [
        { id: "a", statement: "Chiều rộng của hình chữ nhật là 8 cm.", isTrue: true, explanation: "Đúng vì 24 x 1/3 = 8 cm." },
        { id: "b", statement: "Chu vi của hình chữ nhật là 32 cm.", isTrue: false, explanation: "Sai vì chu vi là (24 + 8) x 2 = 64 cm." },
        { id: "c", statement: "Diện tích của hình chữ nhật là 192 cm².", isTrue: true, explanation: "Đúng vì diện tích là 24 x 8 = 192 cm²." },
        { id: "d", statement: "Nếu tăng chiều rộng thêm 4 cm thì diện tích tăng thêm 4 cm².", isTrue: false, explanation: "Sai vì diện tích tăng thêm là 24 x 4 = 96 cm²." }
      ],
      correctAnswer: "a - Đúng, b - Sai, c - Đúng, d - Sai",
      scoringGuide: {
        maxPoints: pts,
        rubric: [
          { criteria: "Đúng 4 ý", points: pts, description: "Trả lời chính xác cả 4 nhận định a, b, c, d." },
          { criteria: "Đúng 3 ý", points: 0.75, description: "Trả lời đúng 3 nhận định." },
          { criteria: "Đúng 2 ý", points: 0.5, description: "Trả lời đúng 2 nhận định." },
          { criteria: "Đúng 1 ý", points: 0.25, description: "Trả lời đúng 1 nhận định." }
        ]
      },
      levelRationale: {
        cognitiveTask: "Kiểm chứng từng mệnh đề hình học bằng tính toán độc lập.",
        whyNotLower: "Phối hợp tính chu vi, diện tích và phân số.",
        whyNotHigher: "Các công thức hình học quen thuộc."
      }
    };
  }

  // ==================== 3. ĐIỀN KHUYẾT (FILL-IN-THE-BLANK) ====================
  createFillInBlankQuestion(spec, grade, subject, level, isSeaPlm) {
    const s = (subject || "").toLowerCase();
    const pts = spec.points || 0.5;

    if (s.includes("công nghệ")) {
      return {
        questionId: spec.questionId,
        subject,
        grade,
        level: level,
        questionType: "fill_in_the_blank",
        points: pts,
        learningOutcome: spec.learningOutcome,
        competency: "Năng lực nhận thức công nghệ",
        seaPlmMode: isSeaPlm,
        questionText: "Điền từ thích hợp vào chỗ chấm: Trong bộ lắp ghép mô hình kĩ thuật, để giữ cố định đai ốc khi vặn bu-lông, em cần sử dụng dụng cụ ....................",
        correctAnswer: "cờ lê",
        acceptableAnswers: ["cờ lê", "cờ-lê", "cái cờ lê", "khóa cờ lê"],
        scoringGuide: {
          maxPoints: pts,
          rubric: [{ criteria: "Điền đúng từ 'cờ lê' hoặc 'cờ-lê'", points: pts, description: "Nhận biết chính xác dụng cụ tháo vặn bu-lông, đai ốc." }]
        },
        levelRationale: {
          cognitiveTask: "Nhớ và điền đúng tên dụng cụ kĩ thuật cơ bản.",
          whyNotLower: "Yêu cầu nhớ chính xác thuật ngữ dụng cụ.",
          whyNotHigher: "Tái hiện trực tiếp."
        }
      };
    }

    if (s.includes("tin học")) {
      return {
        questionId: spec.questionId,
        subject,
        grade,
        level: level,
        questionType: "fill_in_the_blank",
        points: pts,
        learningOutcome: spec.learningOutcome,
        competency: "Năng lực sử dụng thiết bị tin học",
        seaPlmMode: isSeaPlm,
        questionText: "Điền từ thích hợp vào chỗ chấm: Trên bàn phím máy tính, để bật hoặc tắt chế độ gõ chữ hoa liên tục, em nhấn phím ....................",
        correctAnswer: "Caps Lock",
        acceptableAnswers: ["Caps Lock", "Capslock", "caps lock", "phím Caps Lock"],
        scoringGuide: {
          maxPoints: pts,
          rubric: [{ criteria: "Điền đúng phím Caps Lock", points: pts, description: "Nhận biết đúng phím chức năng viết hoa trên bàn phím." }]
        },
        levelRationale: {
          cognitiveTask: "Nhận biết phím chức năng trên bàn phím.",
          whyNotLower: "Nhớ đúng tên phím.",
          whyNotHigher: "Thao tác đơn giản."
        }
      };
    }

    if (s.includes("khoa học") || s.includes("tự nhiên và xã hội")) {
      return {
        questionId: spec.questionId,
        subject,
        grade,
        level: level,
        questionType: "fill_in_the_blank",
        points: pts,
        learningOutcome: spec.learningOutcome,
        competency: "Năng lực nhận thức tự nhiên",
        seaPlmMode: isSeaPlm,
        questionText: "Điền từ thích hợp vào chỗ chấm: Trong không khí, chất khí cần thiết cho sự hô hấp của người, động vật và duy trì sự cháy là khí ....................",
        correctAnswer: "ô-xi",
        acceptableAnswers: ["ô-xi", "oxi", "oxy", "oxygen", "ôxi"],
        scoringGuide: {
          maxPoints: pts,
          rubric: [{ criteria: "Điền đúng khí ô-xi hoặc oxi", points: pts, description: "Nhận biết thành phần khí ô-xi trong không khí." }]
        },
        levelRationale: {
          cognitiveTask: "Tái hiện tên chất khí duy trì sự sống và sự cháy.",
          whyNotLower: "Nhớ đúng thuật ngữ khoa học.",
          whyNotHigher: "Nhận biết trực tiếp."
        }
      };
    }

    if (s.includes("lịch sử") || s.includes("địa lí")) {
      return {
        questionId: spec.questionId,
        subject,
        grade,
        level: level,
        questionType: "fill_in_the_blank",
        points: pts,
        learningOutcome: spec.learningOutcome,
        competency: "Năng lực nhận thức địa lí địa phương",
        seaPlmMode: isSeaPlm,
        questionText: "Điền từ thích hợp vào chỗ chấm: Tỉnh Vĩnh Long được bao bọc bởi hai nhánh sông lớn của dòng sông Mê Kông là sông Tiền và sông ....................",
        correctAnswer: "Hậu",
        acceptableAnswers: ["Hậu", "sông Hậu", "Sông Hậu"],
        scoringGuide: {
          maxPoints: pts,
          rubric: [{ criteria: "Điền đúng từ 'Hậu' hoặc 'sông Hậu'", points: pts, description: "Xác định đúng con sông lớn thứ hai chảy qua địa phương." }]
        },
        levelRationale: {
          cognitiveTask: "Nhớ tên con sông lớn gắn liền địa phương.",
          whyNotLower: "Yêu cầu nhớ địa danh cụ thể.",
          whyNotHigher: "Câu hỏi nhận biết trực tiếp."
        }
      };
    }

    if (s.includes("tiếng việt")) {
      return {
        questionId: spec.questionId,
        subject,
        grade,
        level: level,
        questionType: "fill_in_the_blank",
        points: pts,
        learningOutcome: spec.learningOutcome,
        competency: "Năng lực ngôn ngữ",
        seaPlmMode: isSeaPlm,
        questionText: "Điền từ loại thích hợp vào chỗ chấm: Từ dùng để chỉ hoạt động, trạng thái của con người, sự vật gọi là ....................",
        correctAnswer: "động từ",
        acceptableAnswers: ["động từ", "Động từ"],
        scoringGuide: {
          maxPoints: pts,
          rubric: [{ criteria: "Điền đúng 'động từ'", points: pts, description: "Nhớ chính xác khái niệm động từ." }]
        },
        levelRationale: {
          cognitiveTask: "Nhận biết khái niệm từ loại tiếng Việt.",
          whyNotLower: "Nhớ đúng khái niệm ngữ pháp.",
          whyNotHigher: "Tái hiện định nghĩa trực tiếp."
        }
      };
    }

    if (s.includes("tiếng anh") || s.includes("english")) {
      return {
        questionId: spec.questionId,
        subject,
        grade,
        level: level,
        questionType: "fill_in_the_blank",
        points: pts,
        learningOutcome: spec.learningOutcome,
        competency: "Năng lực nhận diện và hoàn thành từ vựng tiếng Anh",
        seaPlmMode: isSeaPlm,
        questionText: "Fill in the blank with one suitable word to complete the sentence:\n'What is your favourite ....................? - I like English.'",
        correctAnswer: "subject",
        acceptableAnswers: ["subject", "Subject", "school subject"],
        scoringGuide: {
          maxPoints: pts,
          rubric: [{ criteria: "Điền đúng từ 'subject'", points: pts, description: "Điền đúng từ vựng chỉ môn học để hoàn thành mẫu câu hỏi sở thích." }]
        },
        levelRationale: {
          cognitiveTask: "Nhận biết từ vựng 'subject' trong cấu trúc hỏi môn học yêu thích.",
          whyNotLower: "Nhớ đúng chính tả từ vựng tiếng Anh.",
          whyNotHigher: "Mẫu câu trực tiếp quen thuộc trong chương trình."
        }
      };
    }

    // Mặc định Toán
    return {
      questionId: spec.questionId,
      subject,
      grade,
      level: level,
      questionType: "fill_in_the_blank",
      points: pts,
      learningOutcome: spec.learningOutcome,
      competency: "Năng lực tính toán trực tiếp",
      seaPlmMode: isSeaPlm,
      questionText: "Điền số thích hợp vào chỗ chấm: 3 tấn 50 kg = ............. kg.",
      correctAnswer: "3050",
      acceptableAnswers: ["3050", "3 050", "3050 kg", "3 050 kg"],
      scoringGuide: {
        maxPoints: pts,
        rubric: [{ criteria: "Điền đúng số 3050", points: pts, description: "Đổi 3 tấn = 3000 kg, cộng 50 kg = 3050 kg." }]
      },
      levelRationale: {
        cognitiveTask: "Áp dụng bảng đơn vị đo khối lượng để đổi một bước.",
        whyNotLower: "Cần nhớ mối quan hệ giữa tấn và kg.",
        whyNotHigher: "Tính toán trực tiếp quen thuộc."
      }
    };
  }

  // ==================== 4. GHÉP ĐÔI (MATCHING) ====================
  createMatchingQuestion(spec, grade, subject, level, isSeaPlm) {
    const s = (subject || "").toLowerCase();
    const pts = spec.points || 1.0;

    if (s.includes("công nghệ")) {
      return {
        questionId: spec.questionId,
        subject,
        grade,
        level: level,
        questionType: "matching",
        points: pts,
        learningOutcome: spec.learningOutcome,
        competency: "Năng lực nhận thức và sử dụng công nghệ",
        seaPlmMode: isSeaPlm,
        questionText: "Nối mỗi dụng cụ, vật liệu ở Cột A với công dụng tương ứng ở Cột B khi trồng và chăm sóc cây trong chậu:",
        matchingPairs: {
          columnA: [
            { id: "A1", text: "Giá thể (đất tơi xốp, xơ dừa, trấu hun)" },
            { id: "A2", text: "Bình xịt tưới có vòi phun sương nhẹ" },
            { id: "A3", text: "Cờ-lê trong bộ lắp ghép kĩ thuật" }
          ],
          columnB: [
            { id: "B1", text: "Tưới ẩm nhẹ nhàng, tránh làm xói gốc cây con" },
            { id: "B2", text: "Cung cấp dinh dưỡng và giữ ẩm cho bộ rễ cây" },
            { id: "B3", text: "Dùng để giữ chặt và vặn đai ốc kĩ thuật" },
            { id: "B4", text: "Dùng để bón phân hóa học đậm đặc (phương án nhiễu)" }
          ],
          correctMatches: {
            "A1": "B2",
            "A2": "B1",
            "A3": "B3"
          }
        },
        correctAnswer: "A1 nối với B2; A2 nối với B1; A3 nối với B3",
        scoringGuide: {
          maxPoints: pts,
          rubric: [
            { criteria: "Nối đúng cả 3 cặp", points: pts, description: "Ghép nối chính xác cả 3 dụng cụ/vật liệu với công dụng." },
            { criteria: "Nối đúng 2 cặp", points: 0.5, description: "Đúng 2 cặp ghép." },
            { criteria: "Nối đúng 1 cặp", points: 0.25, description: "Đúng 1 cặp ghép." }
          ]
        },
        levelRationale: {
          cognitiveTask: "Kết nối vật liệu/dụng cụ với công dụng kĩ thuật tương ứng.",
          whyNotLower: "Đòi hỏi phân biệt công dụng của nhiều đối tượng kĩ thuật.",
          whyNotHigher: "Kiến thức bài học thực hành công nghệ."
        }
      };
    }

    if (s.includes("tin học")) {
      return {
        questionId: spec.questionId,
        subject,
        grade,
        level: level,
        questionType: "matching",
        points: pts,
        learningOutcome: spec.learningOutcome,
        competency: "Năng lực thao tác tin học",
        seaPlmMode: isSeaPlm,
        questionText: "Nối mỗi phím tắt / công cụ ở Cột A với chức năng tương ứng ở Cột B khi soạn thảo văn bản:",
        matchingPairs: {
          columnA: [
            { id: "A1", text: "Phím Enter" },
            { id: "A2", text: "Tổ hợp phím Ctrl + C" },
            { id: "A3", text: "Phím Delete" }
          ],
          columnB: [
            { id: "B1", text: "Sao chép đoạn văn bản hoặc đối tượng đang chọn" },
            { id: "B2", text: "Xuống dòng và tạo một đoạn văn bản mới" },
            { id: "B3", text: "Xóa kí tự nằm ngay phía sau con trỏ soạn thảo" },
            { id: "B4", text: "Lưu văn bản vào máy tính (phương án nhiễu)" }
          ],
          correctMatches: {
            "A1": "B2",
            "A2": "B1",
            "A3": "B3"
          }
        },
        correctAnswer: "A1 nối với B2; A2 nối với B1; A3 nối với B3",
        scoringGuide: {
          maxPoints: pts,
          rubric: [
            { criteria: "Nối đúng cả 3 cặp", points: pts, description: "Ghép đúng 3 phím chức năng soạn thảo." },
            { criteria: "Nối đúng 2 cặp", points: 0.5, description: "Đúng 2 cặp." },
            { criteria: "Nối đúng 1 cặp", points: 0.25, description: "Đúng 1 cặp." }
          ]
        },
        levelRationale: {
          cognitiveTask: "Ghép nối phím tắt với thao tác trên máy tính.",
          whyNotLower: "Yêu cầu nhớ chức năng của nhiều phím khác nhau.",
          whyNotHigher: "Các phím chức năng thông dụng."
        }
      };
    }

    if (s.includes("khoa học") || s.includes("tự nhiên và xã hội")) {
      return {
        questionId: spec.questionId,
        subject,
        grade,
        level: level,
        questionType: "matching",
        points: pts,
        learningOutcome: spec.learningOutcome,
        competency: "Năng lực nhận thức tự nhiên và sức khỏe",
        seaPlmMode: isSeaPlm,
        questionText: "Nối mỗi nhóm chất dinh dưỡng ở Cột A với loại thực phẩm cung cấp tiêu biểu ở Cột B:",
        matchingPairs: {
          columnA: [
            { id: "A1", text: "Chất bột đường" },
            { id: "A2", text: "Chất đạm (protein)" },
            { id: "A3", text: "Vitamin và chất khoáng" }
          ],
          columnB: [
            { id: "B1", text: "Gạo, ngô, khoai lang, bánh mì" },
            { id: "B2", text: "Thịt, cá, trứng, tôm, đậu phụ" },
            { id: "B3", text: "Rau xanh, cam, cà rốt, chuối chín" },
            { id: "B4", text: "Mỡ động vật, dầu mè (phương án nhiễu)" }
          ],
          correctMatches: {
            "A1": "B1",
            "A2": "B2",
            "A3": "B3"
          }
        },
        correctAnswer: "A1 nối với B1; A2 nối với B2; A3 nối với B3",
        scoringGuide: {
          maxPoints: pts,
          rubric: [
            { criteria: "Nối đúng cả 3 cặp", points: pts, description: "Phân loại chính xác 3 nhóm chất dinh dưỡng với nguồn thực phẩm." },
            { criteria: "Nối đúng 2 cặp", points: 0.5, description: "Đúng 2 cặp." },
            { criteria: "Nối đúng 1 cặp", points: 0.25, description: "Đúng 1 cặp." }
          ]
        },
        levelRationale: {
          cognitiveTask: "Phân loại thực phẩm theo các nhóm chất dinh dưỡng.",
          whyNotLower: "Yêu cầu kết nối nhóm chất với thực phẩm thực tế.",
          whyNotHigher: "Kiến thức về các nhóm chất dinh dưỡng quen thuộc."
        }
      };
    }

    if (s.includes("tiếng anh") || s.includes("english")) {
      return {
        questionId: spec.questionId,
        subject,
        grade,
        level: level,
        questionType: "matching",
        points: pts,
        learningOutcome: spec.learningOutcome,
        competency: "Năng lực ghép nối câu hỏi và câu trả lời trong giao tiếp",
        seaPlmMode: isSeaPlm,
        questionText: "Match each question in Column A with its correct answer in Column B:",
        matchingPairs: {
          columnA: [
            { id: "A1", text: "What time do you get up in the morning?" },
            { id: "A2", text: "What did you do yesterday?" },
            { id: "A3", text: "Can you speak English?" }
          ],
          columnB: [
            { id: "B1", text: "I visited my grandparents in the countryside." },
            { id: "B2", text: "I usually get up at 6 o'clock." },
            { id: "B3", text: "Yes, I can. I speak a little English." },
            { id: "B4", text: "It is sunny and windy today. (Distractor)" }
          ],
          correctMatches: {
            "A1": "B2",
            "A2": "B1",
            "A3": "B3"
          }
        },
        correctAnswer: "A1 nối với B2; A2 nối với B1; A3 nối với B3",
        scoringGuide: {
          maxPoints: pts,
          rubric: [
            { criteria: "Nối đúng cả 3 cặp", points: pts, description: "Ghép chính xác 3 cặp câu hỏi - câu trả lời giao tiếp." },
            { criteria: "Nối đúng 2 cặp", points: 0.5, description: "Đúng 2 cặp." },
            { criteria: "Nối đúng 1 cặp", points: 0.25, description: "Đúng 1 cặp." }
          ]
        },
        levelRationale: {
          cognitiveTask: "Kết nối mẫu câu hỏi thời gian, quá khứ đơn và khả năng với lời đáp thích hợp.",
          whyNotLower: "Cần phân tích thì của động từ và ý nghĩa câu giao tiếp.",
          whyNotHigher: "Các mẫu câu giao tiếp cơ bản đã được rèn luyện."
        }
      };
    }

    // Mặc định Toán
    return {
      questionId: spec.questionId,
      subject,
      grade,
      level: level,
      questionType: "matching",
      points: pts,
      learningOutcome: spec.learningOutcome,
      competency: "Năng lực phân loại và kết nối kiến thức",
      seaPlmMode: isSeaPlm,
      questionText: "Nối mỗi biểu thức ở Cột A với giá trị thích hợp ở Cột B:",
      matchingPairs: {
        columnA: [
          { id: "A1", text: "25 x 4 x 7" },
          { id: "A2", text: "125 x 8 x 3" },
          { id: "A3", text: "(40 + 60) x 15" }
        ],
        columnB: [
          { id: "B1", text: "3 000" },
          { id: "B2", text: "700" },
          { id: "B3", text: "1 500" },
          { id: "B4", text: "1 000 (phương án nhiễu)" }
        ],
        correctMatches: {
          "A1": "B2",
          "A2": "B1",
          "A3": "B3"
        }
      },
      correctAnswer: "A1 nối với B2 (700); A2 nối với B1 (3 000); A3 nối với B3 (1 500)",
      scoringGuide: {
        maxPoints: pts,
        rubric: [
          { criteria: "Nối đúng cả 3 cặp", points: pts, description: "Vận dụng tính chất kết hợp tính thuận tiện." },
          { criteria: "Nối đúng 2 cặp", points: 0.5, description: "Đúng 2 cặp." },
          { criteria: "Nối đúng 1 cặp", points: 0.25, description: "Đúng 1 cặp." }
        ]
      },
      levelRationale: {
        cognitiveTask: "Ghép nối biểu thức với kết quả thuận tiện.",
        whyNotLower: "Thực hiện tính nhẩm nhiều biểu thức.",
        whyNotHigher: "Dạng bài tính chất kết hợp đã học kỹ."
      }
    };
  }

  // ==================== 5. TỰ LUẬN (CONSTRUCTED RESPONSE) ====================
  createConstructedResponseQuestion(spec, grade, subject, level, isSeaPlm) {
    const s = (subject || "").toLowerCase();
    const pts = spec.points || (level === "M3" ? 2.0 : 1.5);

    // --- CÔNG NGHỆ ---
    if (s.includes("công nghệ")) {
      if (level === "M3") {
        return {
          questionId: spec.questionId,
          subject,
          grade,
          level: "M3",
          questionType: "constructed_response",
          points: pts,
          learningOutcome: spec.learningOutcome,
          competency: "Năng lực giải quyết vấn đề kĩ thuật & sáng tạo",
          seaPlmMode: isSeaPlm,
          stimulus: {
            text: isSeaPlm ? "Để chuẩn bị đón Tết Nguyên đán, gia đình bạn Nam tại thị xã Bình Minh (Vĩnh Long) dự định trồng 4 chậu hoa vạn thọ trước sân nhà. Bố giao cho Nam lên kế hoạch chuẩn bị vật liệu và các bước thực hiện." : "Bạn Nam dự định trồng một chậu hoa cúc để trang trí góc học tập của mình."
          },
          questionText: "a) Em hãy giúp bạn Nam kể tên 3 vật liệu hoặc dụng cụ cần thiết nhất để trồng hoa vào chậu.\nb) Trình bày tóm tắt các bước cơ bản để trồng một cây hoa con vào chậu đúng kĩ thuật.\nc) Vì sao không nên tưới quá nhiều nước làm đọng úng trong chậu cây cảnh?",
          correctAnswer: "a) 3 vật liệu: Chậu có lỗ thoát nước, giá thể tơi xốp, cây hoa con (hoặc bình tưới, xẻng nhỏ).\nb) Các bước: Chuẩn bị chậu và giá thể -> Cho giá thể vào chậu (khoảng 2/3 chậu) -> Đặt cây con vào giữa -> Bổ sung giá thể xung quanh gốc và ấn nhẹ -> Tưới nước giữ ẩm.\nc) Tưới quá nhiều nước làm đất ngập úng, rễ cây bị nghẹt thiếu không khí dẫn đến thối rễ và chết cây.",
          scoringGuide: {
            maxPoints: pts,
            rubric: [
              { criteria: "Kể tên đủ 3 vật liệu/dụng cụ", points: 0.5, description: "Nêu đúng chậu cây, giá thể/đất và dụng cụ/cây con." },
              { criteria: "Nêu đúng quy trình các bước trồng cây", points: 1.0, description: "Trình bày đủ các bước: cho giá thể, đặt cây con, lấp đất ấn nhẹ, tưới ẩm." },
              { criteria: "Giải thích hiện tượng ngập úng", points: Number((pts - 1.5).toFixed(2)) > 0 ? Number((pts - 1.5).toFixed(2)) : 0.5, description: "Giải thích được nguyên nhân thối rễ do đất thừa nước thiếu không khí." }
            ]
          },
          levelRationale: {
            cognitiveTask: "Lập kế hoạch thực hành trồng cây và giải thích nguyên lý kĩ thuật chăm sóc.",
            whyNotLower: "Đòi hỏi tổng hợp kiến thức từ quy trình đến giải thích nguyên lý sinh học.",
            whyNotHigher: "Đạt chuẩn yêu cầu cần đạt môn Công nghệ lớp 4."
          }
        };
      } else {
        // M2 Công nghệ
        return {
          questionId: spec.questionId,
          subject,
          grade,
          level: "M2",
          questionType: "constructed_response",
          points: pts,
          learningOutcome: spec.learningOutcome,
          competency: "Năng lực sử dụng công nghệ an toàn",
          seaPlmMode: isSeaPlm,
          stimulus: {
            text: "Trong gia đình có rất nhiều đồ dùng sử dụng điện như quạt điện, đèn học, nồi cơm điện, tủ lạnh..."
          },
          questionText: "Em hãy nêu 3 việc nên làm và 2 việc không được làm để đảm bảo an toàn khi sử dụng các thiết bị điện trong gia đình.",
          correctAnswer: "3 việc nên làm: Tắt thiết bị khi không sử dụng; Đặt thiết bị nơi khô ráo, bằng phẳng; Báo người lớn khi phát hiện dây điện bị hở.\n2 việc không được làm: Không chạm tay ướt vào phích cắm hoặc ổ điện; Không tự ý dùng vật kim loại chọc vào ổ điện.",
          scoringGuide: {
            maxPoints: pts,
            rubric: [
              { criteria: "Nêu đủ 3 việc nên làm", points: 0.75, description: "Nêu được các hành vi sử dụng điện đúng cách, tiết kiệm." },
              { criteria: "Nêu đủ 2 việc không được làm", points: Number((pts - 0.75).toFixed(2)), description: "Nêu được các cảnh báo an toàn điện phòng tránh tai nạn." }
            ]
          },
          levelRationale: {
            cognitiveTask: "Phân loại hành vi an toàn và không an toàn khi dùng đồ điện.",
            whyNotLower: "Yêu cầu kết nối kiến thức an toàn điện vào đời sống gia đình.",
            whyNotHigher: "Các quy tắc an toàn đã được học kỹ trong chương trình."
          }
        };
      }
    }

    // --- TIN HỌC ---
    if (s.includes("tin học")) {
      return {
        questionId: spec.questionId,
        subject,
        grade,
        level: level,
        questionType: "constructed_response",
        points: pts,
        learningOutcome: spec.learningOutcome,
        competency: "Năng lực an toàn số & tư duy giải quyết vấn đề",
        seaPlmMode: isSeaPlm,
        questionText: "Khi tham gia môi trường mạng Internet, em hãy nêu 3 điều cần làm để bảo vệ thông tin cá nhân và tài khoản của mình không bị kẻ xấu lợi dụng.",
        correctAnswer: "1. Đặt mật khẩu mạnh (gồm chữ và số), không chia sẻ mật khẩu cho người khác.\n2. Không cung cấp thông tin cá nhân (họ tên, địa chỉ nhà, số điện thoại cha mẹ) cho người lạ trên mạng.\n3. Khi gặp nội dung độc hại hoặc bị đe dọa, lập tức thông báo cho thầy cô giáo hoặc cha mẹ giúp đỡ.",
        scoringGuide: {
          maxPoints: pts,
          rubric: [
            { criteria: "Nêu đúng quy tắc mật khẩu", points: 0.5, description: "Giữ kín mật khẩu và đặt mật khẩu an toàn." },
            { criteria: "Nêu đúng quy tắc bảo mật thông tin cá nhân", points: 0.5, description: "Không chia sẻ thông tin nhạy cảm cho người lạ." },
            { criteria: "Nêu đúng phản ứng khi gặp sự cố mạng", points: Number((pts - 1.0).toFixed(2)) > 0 ? Number((pts - 1.0).toFixed(2)) : 0.5, description: "Biết tìm kiếm sự trợ giúp từ người lớn đáng tin cậy." }
          ]
        },
        levelRationale: {
          cognitiveTask: "Đề xuất các giải pháp an toàn tự bảo vệ bản thân trên không gian mạng.",
          whyNotLower: "Yêu cầu tổng hợp các quy tắc an toàn số.",
          whyNotHigher: "Chuẩn kiến thức kĩ năng an toàn thông tin lớp 4."
        }
      };
    }

    // --- KHOA HỌC ---
    if (s.includes("khoa học") || s.includes("tự nhiên và xã hội")) {
      return {
        questionId: spec.questionId,
        subject,
        grade,
        level: level,
        questionType: "constructed_response",
        points: pts,
        learningOutcome: spec.learningOutcome,
        competency: "Năng lực vận dụng kiến thức khoa học vào đời sống",
        seaPlmMode: isSeaPlm,
        stimulus: {
          text: isSeaPlm ? "Nguồn nước ngọt từ các dòng sông Tiền, sông Hậu và kênh rạch có vai trò vô cùng quan trọng đối với đời sống sinh hoạt và sản xuất nông nghiệp của bà con quê em. Tuy nhiên, hiện nay nguồn nước ở một số nơi đang đứng trước nguy cơ ô nhiễm." : "Nước là tài nguyên vô cùng quý giá đối với sự sống của con người, động vật và thực vật."
        },
        questionText: "a) Em hãy nêu 2 nguyên nhân chính dẫn đến ô nhiễm nguồn nước ngọt trong tự nhiên.\nb) Đề xuất 3 việc làm cụ thể của học sinh tiểu học để góp phần bảo vệ và tiết kiệm nguồn nước sạch.",
        correctAnswer: "a) 2 nguyên nhân: Rác thải sinh hoạt xả bừa bãi xuống sông hồ; Nước thải công nghiệp chưa qua xử lý hoặc dư lượng thuốc trừ sâu trong nông nghiệp.\nb) 3 việc làm: Khóa chặt vòi nước sau khi rửa tay; Không vứt rác, xác động vật xuống sông ngòi, kênh rạch; Nhắc nhở người thân cùng tiết kiệm nước và tham gia dọn dẹp vệ sinh môi trường.",
        scoringGuide: {
          maxPoints: pts,
          rubric: [
            { criteria: "Nêu đúng 2 nguyên nhân gây ô nhiễm", points: 0.75, description: "Chỉ ra đúng rác thải sinh hoạt và chất thải sản xuất." },
            { criteria: "Đề xuất đúng 3 hành động thiết thực", points: Number((pts - 0.75).toFixed(2)), description: "Các hành động phù hợp lứa tuổi học sinh nhằm tiết kiệm và bảo vệ nguồn nước." }
          ]
        },
        levelRationale: {
          cognitiveTask: "Phân tích nguyên nhân môi trường và đề xuất giải pháp hành động cụ thể.",
          whyNotLower: "Đòi hỏi liên hệ thực tế môi trường sống.",
          whyNotHigher: "Kiến thức bài học Bảo vệ nguồn nước sạch."
        }
      };
    }

    // --- LỊCH SỬ VÀ ĐỊA LÍ ---
    if (s.includes("lịch sử") || s.includes("địa lí")) {
      return {
        questionId: spec.questionId,
        subject,
        grade,
        level: level,
        questionType: "constructed_response",
        points: pts,
        learningOutcome: spec.learningOutcome,
        competency: "Năng lực vận dụng kiến thức lịch sử địa lí",
        seaPlmMode: isSeaPlm,
        questionText: "a) Em hãy nêu 2 điều kiện tự nhiên thuận lợi giúp vùng Nam Bộ trở thành vựa trái cây và vựa lúa lớn nhất của cả nước.\nb) Em hãy viết 2 đến 3 câu bày tỏ tình cảm và niềm tự hào của em đối với quê hương Vĩnh Long hoặc vùng đất Nam Bộ thân yêu.",
        correctAnswer: "a) 2 điều kiện: Đất phù sa màu mỡ do sông Tiền và sông Hậu bồi đắp quanh năm; Khí hậu nhiệt đới gió mùa nắng ấm quanh năm và nguồn nước dồi dào.\nb) Đoạn văn: Em rất tự hào về quê hương Vĩnh Long với những vườn cây trái xum xuê và làng nghề gốm đỏ độc đáo. Em hứa sẽ chăm ngoan học giỏi để mai sau góp phần xây dựng quê hương ngày càng giàu đẹp.",
        scoringGuide: {
          maxPoints: pts,
          rubric: [
            { criteria: "Nêu đúng 2 điều kiện tự nhiên", points: 1.0, description: "Nêu đất phù sa và khí hậu/nguồn nước dồi dào." },
            { criteria: "Viết đoạn văn cảm nghĩ chân thực", points: Number((pts - 1.0).toFixed(2)) > 0 ? Number((pts - 1.0).toFixed(2)) : 0.5, description: "Bày tỏ tình yêu quê hương, câu văn mạch lạc, giàu cảm xúc." }
          ]
        },
        levelRationale: {
          cognitiveTask: "Giải thích đặc điểm kinh tế tự nhiên và biểu đạt tình cảm với quê hương.",
          whyNotLower: "Đòi hỏi tổng hợp kiến thức địa lí và cảm xúc bản thân.",
          whyNotHigher: "Đạt chuẩn năng lực môn học cấp tiểu học."
        }
      };
    }

    // --- TIẾNG VIỆT ---
    if (s.includes("tiếng việt")) {
      return {
        questionId: spec.questionId,
        subject,
        grade,
        level: level,
        questionType: "constructed_response",
        points: pts,
        learningOutcome: spec.learningOutcome,
        competency: "Năng lực tạo lập văn bản & cảm thụ thẩm mỹ",
        seaPlmMode: isSeaPlm,
        questionText: "Em hãy viết một đoạn văn ngắn (từ 4 đến 5 câu) nói về một việc làm cụ thể của em hoặc của bạn em nhằm giữ gìn cảnh quan môi trường trường học xanh, sạch, đẹp. Trong đoạn văn có sử dụng ít nhất một câu có hình ảnh so sánh.",
        correctAnswer: "Đoạn văn tham khảo: Hàng tuần, lớp em đều cùng nhau tham gia buổi lao động vệ sinh vườn hoa trường. Em được phân công nhặt lá rụng và tưới nước cho các bồn hoa mười giờ. Những giọt nước mát lành đọng trên cánh hoa long lanh như những hạt ngọc nhỏ. Em rất vui vì đã góp phần nhỏ bé giúp trường em luôn rực rỡ và tươi đẹp.",
        scoringGuide: {
          maxPoints: pts,
          rubric: [
            { criteria: "Nội dung & Số lượng câu", points: 1.0, description: "Viết đúng chủ đề giữ gìn môi trường trường học, đủ từ 4 đến 5 câu." },
            { criteria: "Sử dụng biện pháp so sánh", points: 0.5, description: "Có ít nhất 1 câu có hình ảnh so sánh phù hợp, giàu cảm xúc." },
            { criteria: "Chính tả & Diễn đạt", points: Number((pts - 1.5).toFixed(2)) > 0 ? Number((pts - 1.5).toFixed(2)) : 0.5, description: "Câu văn mạch lạc, không sai lỗi chính tả, dùng từ ngữ trong sáng." }
          ]
        },
        levelRationale: {
          cognitiveTask: "Tạo lập văn bản mới, vận dụng kỹ năng viết so sánh.",
          whyNotLower: "Đòi hỏi sáng tạo và tổng hợp ngữ pháp.",
          whyNotHigher: "Đạt chuẩn tạo lập đoạn văn tiểu học."
        }
      };
    }

    // --- TIẾNG ANH ---
    if (s.includes("tiếng anh") || s.includes("english")) {
      if (level === "M3") {
        return {
          questionId: spec.questionId,
          subject,
          grade,
          level: "M3",
          questionType: "constructed_response",
          points: pts,
          learningOutcome: spec.learningOutcome,
          competency: "Năng lực tạo lập câu và đoạn văn ngắn tiếng Anh",
          seaPlmMode: isSeaPlm,
          stimulus: {
            text: "Imagine you are writing an email to a new pen pal from Singapore to introduce yourself."
          },
          questionText: "Write a short paragraph (3 to 4 sentences) to introduce yourself to your pen pal. You should include:\n1. Your name and age\n2. Where you live\n3. Your favourite subject and why you like it\n4. What you can do in your free time",
          correctAnswer: "Gợi ý bài viết chuẩn: 'Hello! My name is Nam and I am ten years old. I live in Vinh Long, Vietnam. My favourite subject is English because I want to travel around the world and make friends with people everywhere. In my free time, I can play badminton and read comic books.'",
          scoringGuide: {
            maxPoints: pts,
            rubric: [
              { criteria: "Nội dung đầy đủ các ý gợi ý", points: Number((pts * 0.4).toFixed(2)), description: "Nêu đủ tên, tuổi, nơi ở, môn học yêu thích và sở thích." },
              { criteria: "Ngữ pháp và cấu trúc câu chính xác", points: Number((pts * 0.35).toFixed(2)), description: "Viết câu hoàn chỉnh có chủ ngữ - vị ngữ, dùng đúng thì hiện tại đơn." },
              { criteria: "Từ vựng phong phú & đúng chính tả", points: Number((pts * 0.25).toFixed(2)), description: "Từ vựng phù hợp, không sai chính tả nghiêm trọng, viết hoa đầu câu đúng quy tắc." }
            ]
          },
          levelRationale: {
            cognitiveTask: "Tạo lập đoạn văn ngắn tự giới thiệu bản thân bằng tiếng Anh có liên kết ý nghĩa.",
            whyNotLower: "Yêu cầu kỹ năng viết câu độc lập và kết nối đoạn văn.",
            whyNotHigher: "Đoạn văn ngắn phù hợp yêu cầu cần đạt Mức 3 tiểu học."
          }
        };
      } else {
        // M2 Tiếng Anh (Tự luận sắp xếp từ thành câu)
        return {
          questionId: spec.questionId,
          subject,
          grade,
          level: "M2",
          questionType: "constructed_response",
          points: pts,
          learningOutcome: spec.learningOutcome,
          competency: "Năng lực sắp xếp từ tạo thành câu hoàn chỉnh đúng ngữ pháp",
          seaPlmMode: isSeaPlm,
          questionText: "Reorder the words to make meaningful sentences:\na) you / Where / born / were / ?\nb) have / on / We / Mondays / Science / and / Fridays / .\nc) usually / What / time / do / you / up / get / in / the / morning / ?",
          correctAnswer: "a) Where were you born?\nb) We have Science on Mondays and Fridays. (hoặc: On Mondays and Fridays, we have Science.)\nc) What time do you usually get up in the morning?",
          scoringGuide: {
            maxPoints: pts,
            rubric: [
              { criteria: "Viết đúng câu a", points: Number((pts / 3).toFixed(2)), description: "Viết đúng trật tự từ và dấu hỏi chấm cuối câu." },
              { criteria: "Viết đúng câu b", points: Number((pts / 3).toFixed(2)), description: "Viết đúng trật tự câu khẳng định và dấu chấm." },
              { criteria: "Viết đúng câu c", points: Number((pts - 2 * Number((pts / 3).toFixed(2))).toFixed(2)), description: "Viết đúng câu hỏi 'What time do you usually get up...'." }
            ]
          },
          levelRationale: {
            cognitiveTask: "Phân tích trật tự từ loại (nghi vấn từ, trợ động từ, chủ ngữ, động từ) để tái cấu trúc câu đúng ngữ pháp.",
            whyNotLower: "Cần hiểu chức năng cú pháp của các từ trong câu.",
            whyNotHigher: "Các cấu trúc câu đã học trong chương trình."
          }
        };
      }
    }

    // --- TOÁN (MẶC ĐỊNH) ---
    return {
      questionId: spec.questionId,
      subject,
      grade,
      level: level,
      questionType: "constructed_response",
      points: pts,
      learningOutcome: spec.learningOutcome,
      competency: "Năng lực giải quyết vấn đề thực tế & trình bày lời giải",
      seaPlmMode: isSeaPlm,
      stimulus: {
        text: isSeaPlm ? "Để hỗ trợ bà con nông dân trồng dừa sáp tại huyện Cầu Kè tiêu thụ sản phẩm, một nhóm bạn học sinh tổ chức gian hàng giới thiệu tại hội chợ trường học. Ngày thứ nhất gian hàng bán được 45 quả dừa sáp. Ngày thứ hai bán được số dừa bằng 2/3 số dừa của ngày thứ nhất. Giá mỗi quả dừa sáp là 90 000 đồng." : "Một cửa hàng ngày thứ nhất bán được 45 sản phẩm. Ngày thứ hai bán được số sản phẩm bằng 2/3 ngày thứ nhất. Giá mỗi sản phẩm là 90 000 đồng."
      },
      questionText: "a) Hỏi cả hai ngày gian hàng bán được tất cả bao nhiêu quả dừa sáp?\nb) Tính tổng số tiền gian hàng thu được sau hai ngày bán dừa sáp. Nêu ngắn gọn ý nghĩa việc ủng hộ nông sản quê hương.",
      correctAnswer: "a) 75 quả dừa sáp. b) 6 750 000 đồng.",
      scoringGuide: {
        maxPoints: pts,
        rubric: [
          { criteria: "Tính số dừa ngày thứ hai", points: 0.5, description: "45 x 2/3 = 30 (quả). Ghi đúng lời giải và đơn vị." },
          { criteria: "Tính tổng số dừa cả 2 ngày", points: 0.5, description: "45 + 30 = 75 (quả). Ghi đúng lời giải và đơn vị." },
          { criteria: "Tính tổng số tiền thu được", points: 0.75, description: "75 x 90 000 = 6 750 000 (đồng). Ghi đúng phép tính và đáp số." },
          { criteria: "Nêu ý nghĩa ủng hộ nông sản", points: Number((pts - 1.75).toFixed(2)) > 0 ? Number((pts - 1.75).toFixed(2)) : 0.25, description: "Nêu được ý nghĩa giúp nông dân tiêu thụ sản phẩm quê hương." }
        ]
      },
      levelRationale: {
        cognitiveTask: "Giải bài toán 3 bước liên hoàn kết hợp phân số, phép nhân số tiền và nêu ý nghĩa xã hội.",
        whyNotLower: "Vượt qua bài toán tính toán cơ bản.",
        whyNotHigher: "Chuẩn Mức 3 theo Thông tư 27."
      }
    };
  }
}

module.exports = new QuestionEngine();
