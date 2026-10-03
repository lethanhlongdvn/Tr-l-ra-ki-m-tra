/**
 * Transform Engine: Chuyển đổi mức độ (M1 ↔ M2 ↔ M3), biến đổi dạng câu hỏi
 * và giải thích lý do xếp mức độ nhận thức
 */

const questionEngine = require('./questionEngine');
const seaPlmEngine = require('./seaPlmEngine');

class TransformEngine {
  /**
   * Giải thích chi tiết "Vì sao câu này là Mức X?"
   */
  explainLevel(question) {
    const level = question.level;
    if (question.levelRationale) {
      return {
        level,
        cognitiveTask: question.levelRationale.cognitiveTask,
        whyNotLower: question.levelRationale.whyNotLower,
        whyNotHigher: question.levelRationale.whyNotHigher
      };
    }

    if (level === "M1") {
      return {
        level: "M1",
        cognitiveTask: "Học sinh nhớ lại hoặc nhận biết trực tiếp một khái niệm/công thức đã học và thực hiện thao tác đơn giản 1 bước.",
        whyNotLower: "Đây là mức nhận biết nền tảng, thấp nhất trong thang đánh giá của Thông tư 27.",
        whyNotHigher: "Chưa yêu cầu phối hợp nhiều kiến thức hay giải quyết tình huống có từ 2 bước tính trở lên."
      };
    } else if (level === "M2") {
      return {
        level: "M2",
        cognitiveTask: "Học sinh cần kết nối từ hai dữ kiện trở lên, sắp xếp hoặc thực hiện bài toán có 2 bước tính trong tình huống tương tự bài đã học.",
        whyNotLower: "Không thể giải quyết chỉ bằng một thao tác nhận biết đơn lẻ 1 bước.",
        whyNotHigher: "Vẫn bám sát các dạng bài tập mẫu quen thuộc trong SGK, chưa đặt vào bối cảnh thực tế mới lạ."
      };
    } else {
      return {
        level: "M3",
        cognitiveTask: "Học sinh phải vận dụng linh hoạt kiến thức vào tình huống thực tiễn mới, phân tích dữ liệu và đề xuất phương án hợp lý.",
        whyNotLower: "Yêu cầu năng lực tư duy giải quyết vấn đề vượt trội so với các bài toán mẫu 2 phép tính thông thường.",
        whyNotHigher: "Đã ở mức phân hóa cao nhất dành cho học sinh tiểu học theo Thông tư 27."
      };
    }
  }

  /**
   * Nâng mức độ câu hỏi (M1 -> M2, hoặc M2 -> M3)
   */
  upgradeLevel(question) {
    const curLevel = question.level;
    if (curLevel === "M1") {
      // M1 -> M2
      return {
        ...question,
        level: "M2",
        questionText: question.questionText + " Sau đó, so sánh kết quả tìm được với giá trị trung bình cộng của bài toán.",
        levelRationale: {
          cognitiveTask: "Đã nâng cấp thành 2 thao tác tư duy liên hoàn: tính giá trị rồi tiến hành so sánh đối chiếu.",
          whyNotLower: "Không còn là thao tác 1 bước đơn giản.",
          whyNotHigher: "Tình huống so sánh quen thuộc."
        }
      };
    } else if (curLevel === "M2") {
      // M2 -> M3
      const ctx = seaPlmEngine.generateContextStimulus("wider_environment", question.subject, question.grade);
      return {
        ...question,
        level: "M3",
        seaPlmMode: true,
        stimulus: {
          text: `Trong hoạt động trải nghiệm thực tế tại ${ctx.contextTitle}: ${ctx.story} ${ctx.details}`
        },
        questionText: `Dựa vào số liệu thực tế trên, em hãy giải bài toán và đề xuất phương án giải quyết tối ưu nhất cho gia đình/nhà trường. Giải thích ngắn gọn lý do vì sao lựa chọn phương án đó.`,
        levelRationale: {
          cognitiveTask: "Vận dụng vào tình huống mới và đề xuất phương án giải quyết vấn đề thực tiễn.",
          whyNotLower: "Đòi hỏi tư duy tối ưu hóa và đánh giá phản hồi.",
          whyNotHigher: "Đạt mức tối đa theo Thông tư 27."
        }
      };
    }
    return question;
  }

  /**
   * Hạ mức độ câu hỏi (M3 -> M2, hoặc M2 -> M1)
   */
  downgradeLevel(question) {
    const curLevel = question.level;
    if (curLevel === "M3") {
      // M3 -> M2: Bỏ bớt yếu tố tối ưu/phản hồi, giữ lại bài toán 2 bước tính
      return {
        ...question,
        level: "M2",
        questionText: "Một nông trại thu hoạch được số lượng nông sản theo kế hoạch. Em hãy tính tổng sản lượng sau 2 đợt thu hoạch.",
        levelRationale: {
          cognitiveTask: "Thực hiện bài toán 2 phép tính tương tự dạng đã học.",
          whyNotLower: "Cần 2 bước tính liên hoàn.",
          whyNotHigher: "Không còn câu hỏi phản hồi/tối ưu thực tiễn mới lạ."
        }
      };
    } else if (curLevel === "M2") {
      // M2 -> M1: Rút gọn về 1 thao tác tính trực tiếp
      return {
        ...question,
        level: "M1",
        questionText: "Tính giá trị của biểu thức hoặc nhận biết trực tiếp giá trị của số.",
        levelRationale: {
          cognitiveTask: "Áp dụng trực tiếp 1 công thức/quy tắc quen thuộc.",
          whyNotLower: "Mức tối thiểu.",
          whyNotHigher: "Chỉ gồm 1 thao tác tính toán duy nhất."
        }
      };
    }
    return question;
  }

  /**
   * Tạo 5 câu hỏi tương đương (giữ nguyên kiến thức và mức độ, chỉ đổi số liệu/tên gọi)
   */
  generateEquivalents(question, count = 5) {
    const equivalents = [];
    for (let i = 1; i <= count; i++) {
      equivalents.push({
        ...question,
        questionId: `${question.questionId}-EQ${i}`,
        questionText: question.questionText.replace(/(\d+)/g, (match) => {
          return String(Number(match) + (i * 2));
        }),
        createdAt: new Date().toISOString()
      });
    }
    return equivalents;
  }
}

module.exports = new TransformEngine();
