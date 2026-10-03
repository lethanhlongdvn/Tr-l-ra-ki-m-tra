/**
 * Curriculum Engine: Xử lý tra cứu, phân tích chương trình KHDH và YCCĐ
 */

const curriculumData = require('../data/curriculumData');
const tt27Rules = require('../data/tt27Rules');

class CurriculumEngine {
  /**
   * Lấy danh sách khối lớp được hỗ trợ
   */
  getGrades() {
    return curriculumData.grades;
  }

  /**
   * Lấy danh sách môn học theo khối lớp
   */
  getSubjectsByGrade(grade) {
    return curriculumData.subjectsByGrade[grade] || [];
  }

  /**
   * Chuẩn hóa tên môn học để so sánh chính xác không phụ thuộc dấu câu hay viết hoa
   */
  normalizeSubject(str) {
    return (str || "").toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d").replace(/Đ/g, "d")
      .replace(/y/g, "i")
      .replace(/\s+va\s+/g, "")
      .replace(/&/g, "")
      .replace(/[^a-z0-9]/g, "");
  }

  /**
   * Lấy các kỳ kiểm tra theo khối lớp và môn học (chuẩn TT 27)
   */
  getExamPeriods(grade, subject = '') {
    const g = Number(grade) || 4;
    const isMathOrTV = (subject || "").toLowerCase().includes("toán") || (subject || "").toLowerCase().includes("tiếng việt");

    if (g === 1 || g === 2) {
      return tt27Rules.examPeriods.grade1_2;
    }
    if (g === 3) {
      return tt27Rules.examPeriods.grade3;
    }
    // Lớp 4 và 5
    if (isMathOrTV) {
      return tt27Rules.examPeriods.grade4_5_math_tv;
    }
    return tt27Rules.examPeriods.grade4_5_others;
  }

  /**
   * Lọc bài học và YCCĐ đã học theo khối lớp, môn học và kỳ kiểm tra
   */
  getCurriculumScope(grade, subject, examPeriodId) {
    const allPeriods = this.getExamPeriods(grade, subject);
    let periodObj = allPeriods.find(p => p.id === examPeriodId);
    if (!periodObj) {
      periodObj = allPeriods.find(p => p.name === examPeriodId) || allPeriods[0];
    }

    const minWeek = periodObj.weeksRange ? periodObj.weeksRange[0] : 1;
    const maxWeek = periodObj.weeksRange ? periodObj.weeksRange[1] : 18;
    const isSem2 = periodObj.id === 'mid_term_2' || periodObj.id === 'end_year' || (periodObj.semester && periodObj.semester.includes('2'));
    const volume = isSem2 ? 2 : 1;
    const volumeName = `Sách Tập ${volume} (Tuần ${minWeek} – ${maxWeek})`;

    const normSubj = this.normalizeSubject(subject);
    const matchedCurriculum = curriculumData.curriculum.filter(
      c => c.grade === Number(grade) && this.normalizeSubject(c.subject) === normSubj
    );

    const availableTopics = [];

    matchedCurriculum.forEach(curr => {
      curr.topics.forEach(topic => {
        // Lấy bài học nằm đúng trong khoảng tuần quy định của kỳ kiểm tra
        const lessonsTaught = topic.lessons.filter(l => {
          const w = l.week || (l.semester === 2 ? 20 : 5);
          return w >= minWeek && w <= maxWeek;
        });

        if (lessonsTaught.length > 0) {
          availableTopics.push({
            topicId: topic.id,
            topicName: topic.name,
            semester: isSem2 ? "Học kỳ 2" : "Học kỳ 1",
            volume,
            volumeName,
            examPeriod: periodObj.name,
            lessons: lessonsTaught
          });
        }
      });
    });

    // Nếu không tìm thấy trong dữ liệu thô, tạo các chủ đề chuẩn GDPT 2018 tự động
    if (availableTopics.length === 0) {
      const g = Number(grade) || 4;
      const sub = subject || 'Toán';
      const semPrefix = isSem2 ? 'Tập 2' : 'Tập 1';
      const wStart = minWeek;
      const wEnd = maxWeek;

      availableTopics.push(
        {
          topicId: `fallback_${g}_1`,
          topicName: `Chủ đề 1: Trọng tâm Môn ${sub} Lớp ${g} (${semPrefix})`,
          semester: isSem2 ? "Học kỳ 2" : "Học kỳ 1",
          volume,
          volumeName,
          examPeriod: periodObj.name,
          lessons: [
            { lessonNumber: 1, title: `Bài 1: Kiến thức & kĩ năng cơ bản ${sub} ${g}`, periods: 2, week: wStart, outcomes: [`Vận dụng linh hoạt kiến thức trọng tâm ${sub} Lớp ${g}`] },
            { lessonNumber: 2, title: `Bài 2: Thực hành & luyện tập tổng hợp`, periods: 2, week: wStart + 1, outcomes: [`Giải quyết các dạng bài tập thực tế ${sub} Lớp ${g}`] }
          ]
        },
        {
          topicId: `fallback_${g}_2`,
          topicName: `Chủ đề 2: Luyện tập & Vận dụng nâng cao`,
          semester: isSem2 ? "Học kỳ 2" : "Học kỳ 1",
          volume,
          volumeName,
          examPeriod: periodObj.name,
          lessons: [
            { lessonNumber: 3, title: `Bài 3: Bài tập phát triển năng lực ${sub}`, periods: 2, week: Math.min(wEnd, wStart + 4), outcomes: [`Phát triển tư duy và giải quyết vấn đề sáng tạo`] },
            { lessonNumber: 4, title: `Bài 4: Ôn tập đánh giá chuẩn Thông tư 27`, periods: 2, week: wEnd, outcomes: [`Củng cố và hoàn thiện năng lực môn ${sub}`] }
          ]
        }
      );
    }

    const totalLessons = availableTopics.reduce((acc, t) => acc + t.lessons.length, 0);

    return {
      grade: Number(grade),
      subject,
      examPeriod: periodObj.name,
      periodId: periodObj.id,
      semester: isSem2 ? "Học kỳ 2" : "Học kỳ 1",
      volume,
      volumeName,
      weeksRange: [minWeek, maxWeek],
      totalLessons,
      topics: availableTopics
    };
  }

  /**
   * Phân tích văn bản Yêu cầu cần đạt (YCCĐ) tự do do giáo viên nhập
   */
  analyzeLearningOutcomeText(text, subject = "Toán", grade = 4) {
    if (!text || text.trim().length === 0) {
      return {
        error: "Chưa đủ thông tin để tạo câu hỏi chính xác. Vui lòng bổ sung yêu cầu cần đạt hoặc nội dung đã dạy."
      };
    }

    const lower = text.toLowerCase();
    
    // 1. Nhận diện mức độ nhận thức tiềm năng
    const potentialLevels = [];
    if (lower.includes("nhận biết") || lower.includes("nhớ") || lower.includes("nhắc lại") || lower.includes("đọc") || lower.includes("viết") || lower.includes("chỉ ra")) {
      potentialLevels.push("M1");
    }
    if (lower.includes("kết nối") || lower.includes("sắp xếp") || lower.includes("so sánh") || lower.includes("phân loại") || lower.includes("tính") || lower.includes("thực hiện")) {
      potentialLevels.push("M2");
    }
    if (lower.includes("vận dụng") || lower.includes("giải quyết") || lower.includes("thực tế") || lower.includes("đề xuất") || lower.includes("giải thích") || lower.includes("phản hồi")) {
      potentialLevels.push("M3");
    }
    if (potentialLevels.length === 0) {
      potentialLevels.push("M1", "M2");
    }

    // 2. Nhận diện năng lực tương ứng
    const competencies = [];
    if (subject.toLowerCase() === "toán") {
      if (lower.includes("tính") || lower.includes("cộng") || lower.includes("trừ") || lower.includes("nhân") || lower.includes("chia")) {
        competencies.push("Năng lực tư duy và tính toán");
      }
      if (lower.includes("giải quyết") || lower.includes("bài toán") || lower.includes("thực tế")) {
        competencies.push("Năng lực giải quyết vấn đề toán học");
      }
      if (lower.includes("hình") || lower.includes("góc") || lower.includes("đo") || lower.includes("diện tích") || lower.includes("chu vi")) {
        competencies.push("Năng lực mô hình hóa và hình học");
      }
      if (competencies.length === 0) {
        competencies.push("Năng lực tư duy và lập luận toán học");
      }
    } else {
      if (lower.includes("đọc") || lower.includes("hiểu") || lower.includes("nội dung")) {
        competencies.push("Năng lực ngôn ngữ (Đọc hiểu)");
      }
      if (lower.includes("viết") || lower.includes("đoạn văn") || lower.includes("bài văn")) {
        competencies.push("Năng lực tạo lập văn bản");
      }
      if (competencies.length === 0) {
        competencies.push("Năng lực giao tiếp ngôn ngữ");
      }
    }

    // 3. Đề xuất dạng câu hỏi phù hợp
    const recommendedTypes = [];
    if (potentialLevels.includes("M1")) {
      recommendedTypes.push("multiple_choice", "fill_in_the_blank");
    }
    if (potentialLevels.includes("M2")) {
      recommendedTypes.push("multiple_choice", "true_false", "matching");
    }
    if (potentialLevels.includes("M3")) {
      recommendedTypes.push("constructed_response", "multiple_choice");
    }

    return {
      rawText: text,
      analyzedAt: new Date().toISOString(),
      knowledgeCore: this.extractKnowledgeCore(text),
      actionSkills: this.extractActionSkills(text),
      potentialLevels: [...new Set(potentialLevels)],
      competencies,
      recommendedTypes: [...new Set(recommendedTypes)],
      seaPlmSuitable: lower.includes("thực tế") || lower.includes("vận dụng") || lower.includes("đời sống")
    };
  }

  extractKnowledgeCore(text) {
    // Trích xuất cụm danh từ trọng tâm
    const cleaned = text.replace(/học sinh (nhận biết|thực hiện được|vận dụng|biết cách)/gi, '').trim();
    return cleaned.length > 50 ? cleaned.substring(0, 50) + "..." : cleaned;
  }

  extractActionSkills(text) {
    const verbs = ["nhận biết", "đọc", "viết", "so sánh", "sắp xếp", "tính toán", "rút gọn", "quy đồng", "vận dụng", "giải quyết"];
    return verbs.filter(v => text.toLowerCase().includes(v));
  }
}

module.exports = new CurriculumEngine();
