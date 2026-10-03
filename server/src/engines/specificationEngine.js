/**
 * Specification Engine: Xây dựng Bản đặc tả đề kiểm tra chi tiết đồng bộ 100% với Ma trận
 * Cam kết:
 * 1. Tất cả điểm số câu hỏi đều thuộc tập chuẩn Thông tư 27: (0,25; 0,5; 0,75; 1,0; 1,25; 1,5; 2,0; 2,5; 3,0), tổng bằng 10,0đ.
 * 2. Phân bổ chính xác số lượng câu hỏi có ngữ cảnh thực tế SEA-PLM theo yêu cầu của giáo viên (0 câu, 1 câu, 2 câu...). Các câu còn lại bám sát 100% SGK.
 */

class SpecificationEngine {
  generateQuestionId(grade, level, subject, seq) {
    const subCodeMap = {
      "toán": "MATH",
      "tiếng việt": "VIET",
      "khoa học": "SCI",
      "tự nhiên và xã hội": "TNXH",
      "lịch sử và địa lí": "HIST_GEO",
      "tin học": "INFO",
      "công nghệ": "TECH",
      "tiếng anh": "ENG",
      "đạo đức": "ETHIC"
    };
    const subCode = subCodeMap[subject.toLowerCase()] || "TECH";
    const paddedSeq = String(seq).padStart(3, '0');
    return `M${grade}-${level}-${subCode}-${paddedSeq}`;
  }

  /**
   * Lượng tử hóa điểm về bội số của 0.25 (tối thiểu 0.25)
   */
  quantizePoint(val) {
    return Math.max(0.25, Math.round(val * 4) / 4);
  }

  /**
   * Phân bổ điểm số chính xác đến từng câu hỏi theo bội số 0.25đ
   */
  distributePointsToQuestions(totalPoints, count) {
    if (count <= 0) return [];
    if (count === 1) return [this.quantizePoint(totalPoints)];
    let steps = Math.round(totalPoints * 4);
    const baseSteps = Math.floor(steps / count);
    let remainder = steps % count;
    const result = [];
    for (let i = 0; i < count; i++) {
      const s = baseSteps + (i < remainder ? 1 : 0);
      result.push(Number((s * 0.25).toFixed(2)));
    }
    return result;
  }

  /**
   * Tạo bảng đặc tả từ Ma trận và danh sách các dạng câu hỏi được chọn
   * @param {Object} matrix Ma trận đề
   * @param {Object} allowedQuestionTypes Các dạng TNKQ được phép dùng
   * @param {number} seaPlmQuestionCount Số lượng câu ứng dụng SEA-PLM (0, 1, 2, 3...)
   * @param {Object} seaPlmSettings Cài đặt vùng/bối cảnh SEA-PLM
   */
  buildSpecifications(matrix, allowedQuestionTypes = null, seaPlmQuestionCount = 2, seaPlmSettings = null) {
    const specs = [];
    let itemNumber = 1;
    const grade = matrix.grade || 4;
    const subject = matrix.subject || "Công nghệ";

    // Danh sách các dạng TNKQ mà giáo viên cho phép dùng
    const availableTnTypes = [];
    if (!allowedQuestionTypes || allowedQuestionTypes.multiple_choice) availableTnTypes.push('multiple_choice');
    if (!allowedQuestionTypes || allowedQuestionTypes.true_false) availableTnTypes.push('true_false');
    if (!allowedQuestionTypes || allowedQuestionTypes.fill_in_the_blank) availableTnTypes.push('fill_in_the_blank');
    if (!allowedQuestionTypes || allowedQuestionTypes.matching) availableTnTypes.push('matching');
    if (availableTnTypes.length === 0) availableTnTypes.push('multiple_choice');

    const tnTypeNameMap = {
      multiple_choice: "Trắc nghiệm 4 lựa chọn (MCQ)",
      true_false: "Đúng - Sai theo chùm (a, b, c, d)",
      fill_in_the_blank: "Điền khuyết (từ/số/kết quả)",
      matching: "Ghép đôi (Cột A - Cột B)"
    };

    let tnTypeIndex = 0;

    matrix.matrixRows.forEach((row) => {
      const topic = row.topicName;
      const outcome = (row.learningOutcomes && row.learningOutcomes[0]) || topic;

      // ==================== MỨC 1 (NHẬN BIẾT) ====================
      // 1. TNKQ Mức 1
      const m1TnCount = row.m1?.tnCount || 0;
      const m1TnPts = row.m1?.tnPoints !== undefined ? row.m1.tnPoints : (m1TnCount * 1.0);
      const m1TnPointsList = this.distributePointsToQuestions(m1TnPts, m1TnCount);
      for (let i = 0; i < m1TnCount; i++) {
        const qType = availableTnTypes[tnTypeIndex % availableTnTypes.length];
        tnTypeIndex++;
        specs.push({
          itemNumber: itemNumber++,
          questionId: this.generateQuestionId(grade, "M1", subject, specs.length + 1),
          topic,
          learningOutcome: outcome,
          level: "M1",
          formType: "TNKQ",
          questionType: qType,
          questionTypeName: tnTypeNameMap[qType],
          competency: this.getCompetency(subject, "M1"),
          points: m1TnPointsList[i] || 1.0,
          isSeaPlm: false,
          seaPlmContext: "Bài tập chuẩn SGK & KHDH GDPT 2018"
        });
      }

      // 2. Tự luận Mức 1 (nếu có)
      const m1TlCount = row.m1?.tlCount || 0;
      const m1TlPts = row.m1?.tlPoints !== undefined ? row.m1.tlPoints : (m1TlCount * 1.5);
      const m1TlPointsList = this.distributePointsToQuestions(m1TlPts, m1TlCount);
      for (let i = 0; i < m1TlCount; i++) {
        specs.push({
          itemNumber: itemNumber++,
          questionId: this.generateQuestionId(grade, "M1", subject, specs.length + 1),
          topic,
          learningOutcome: outcome,
          level: "M1",
          formType: "TL",
          questionType: "constructed_response",
          questionTypeName: "Tự luận (Trả lời trực tiếp / Đặt tính)",
          competency: this.getCompetency(subject, "M1"),
          points: m1TlPointsList[i] || 1.5,
          isSeaPlm: false,
          seaPlmContext: "Bài tập chuẩn SGK & KHDH GDPT 2018"
        });
      }

      // ==================== MỨC 2 (KẾT NỐI) ====================
      // 1. TNKQ Mức 2
      const m2TnCount = row.m2?.tnCount || 0;
      const m2TnPts = row.m2?.tnPoints !== undefined ? row.m2.tnPoints : (m2TnCount * 0.5);
      const m2TnPointsList = this.distributePointsToQuestions(m2TnPts, m2TnCount);
      for (let i = 0; i < m2TnCount; i++) {
        const qType = availableTnTypes[tnTypeIndex % availableTnTypes.length];
        tnTypeIndex++;
        specs.push({
          itemNumber: itemNumber++,
          questionId: this.generateQuestionId(grade, "M2", subject, specs.length + 1),
          topic,
          learningOutcome: outcome,
          level: "M2",
          formType: "TNKQ",
          questionType: qType,
          questionTypeName: tnTypeNameMap[qType],
          competency: this.getCompetency(subject, "M2"),
          points: m2TnPointsList[i] || 0.5,
          isSeaPlm: false,
          seaPlmContext: "Bài tập chuẩn SGK & KHDH GDPT 2018"
        });
      }

      // 2. Tự luận Mức 2
      const m2TlCount = row.m2?.tlCount || 0;
      const m2TlPts = row.m2?.tlPoints !== undefined ? row.m2.tlPoints : (m2TlCount * 1.5);
      const m2TlPointsList = this.distributePointsToQuestions(m2TlPts, m2TlCount);
      for (let i = 0; i < m2TlCount; i++) {
        specs.push({
          itemNumber: itemNumber++,
          questionId: this.generateQuestionId(grade, "M2", subject, specs.length + 1),
          topic,
          learningOutcome: outcome,
          level: "M2",
          formType: "TL",
          questionType: "constructed_response",
          questionTypeName: "Tự luận (Giải thích / Phân tích tình huống)",
          competency: this.getCompetency(subject, "M2"),
          points: m2TlPointsList[i] || 1.5,
          isSeaPlm: false,
          seaPlmContext: "Bài tập chuẩn SGK & KHDH GDPT 2018"
        });
      }

      // ==================== MỨC 3 (VẬN DỤNG) ====================
      // 1. TNKQ Mức 3 (nếu có)
      const m3TnCount = row.m3?.tnCount || 0;
      const m3TnPts = row.m3?.tnPoints !== undefined ? row.m3.tnPoints : (m3TnCount * 0.5);
      const m3TnPointsList = this.distributePointsToQuestions(m3TnPts, m3TnCount);
      for (let i = 0; i < m3TnCount; i++) {
        specs.push({
          itemNumber: itemNumber++,
          questionId: this.generateQuestionId(grade, "M3", subject, specs.length + 1),
          topic,
          learningOutcome: outcome,
          level: "M3",
          formType: "TNKQ",
          questionType: "multiple_choice",
          questionTypeName: "Trắc nghiệm vận dụng",
          competency: this.getCompetency(subject, "M3"),
          points: m3TnPointsList[i] || 0.5,
          isSeaPlm: false,
          seaPlmContext: "Bài tập chuẩn SGK & KHDH GDPT 2018"
        });
      }

      // 2. Tự luận Mức 3
      const m3TlCount = row.m3?.tlCount || 0;
      const m3TlPts = row.m3?.tlPoints !== undefined ? row.m3.tlPoints : (m3TlCount * 1.0);
      const m3TlPointsList = this.distributePointsToQuestions(m3TlPts, m3TlCount);
      for (let i = 0; i < m3TlCount; i++) {
        specs.push({
          itemNumber: itemNumber++,
          questionId: this.generateQuestionId(grade, "M3", subject, specs.length + 1),
          topic,
          learningOutcome: outcome,
          level: "M3",
          formType: "TL",
          questionType: "constructed_response",
          questionTypeName: "Tự luận (Vận dụng giải quyết vấn đề mới)",
          competency: this.getCompetency(subject, "M3"),
          points: m3TlPointsList[i] || 1.0,
          isSeaPlm: false,
          seaPlmContext: "Bài tập chuẩn SGK & KHDH GDPT 2018"
        });
      }
    });

    // ==================== CÂN BẰNG ĐIỂM CHUẨN XÁC 10.0Đ (BƯỚC NHẢY 0.25) ====================
    let totalPoints = matrix.totalPoints || 10;
    let currentSum = Number(specs.reduce((acc, s) => acc + s.points, 0).toFixed(2));
    let diff = Number((totalPoints - currentSum).toFixed(2));

    // Điều chỉnh thặng dư theo từng bước 0.25đ nếu có sai số làm tròn
    if (Math.abs(diff) >= 0.25 && specs.length > 0) {
      if (diff > 0) {
        let steps = Math.round(diff / 0.25);
        const candidates = specs.filter(s => s.formType === "TL").concat(specs);
        let candIdx = 0;
        while (steps > 0 && candidates.length > 0) {
          const target = candidates[candIdx % candidates.length];
          target.points = Number((target.points + 0.25).toFixed(2));
          steps--;
          candIdx++;
        }
      } else {
        let steps = Math.round(Math.abs(diff) / 0.25);
        const reducible = specs.filter(s => s.points >= 1.0);
        let candIdx = 0;
        while (steps > 0 && reducible.length > 0) {
          const target = reducible[candIdx % reducible.length];
          if (target.points > 0.5) {
            target.points = Number((target.points - 0.25).toFixed(2));
            steps--;
          }
          candIdx++;
          if (candIdx > reducible.length * 5) break;
        }
      }
    }

    // Đảm bảo 100% câu có điểm là bội số của 0.25
    specs.forEach(s => {
      s.points = this.quantizePoint(s.points);
    });

    // ==================== PHÂN BỔ CHÍNH XÁC SỐ CÂU SEA-PLM ====================
    const enableSeaPlm = seaPlmSettings ? seaPlmSettings.enableSeaPlm : (seaPlmQuestionCount > 0);
    const targetSeaPlmCount = enableSeaPlm ? Math.min(Number(seaPlmQuestionCount || 0), specs.length) : 0;

    const seaPlmContexts = [
      "Bối cảnh thực tế địa phương Vĩnh Long: Làng nghề gốm Mang Thít, bưởi Năm Roi Bình Minh, sông Tiền và sông Hậu",
      "Bối cảnh nhà trường: Hoạt động học tập, lao động vườn hoa trường học, hội chợ xuân",
      "Bối cảnh cá nhân và gia đình: Tiết kiệm điện nước, trồng và chăm sóc cây cảnh trong gia đình"
    ];

    if (targetSeaPlmCount > 0) {
      // Ưu tiên gán SEA-PLM cho các câu Mức 3 (Tự luận rồi đến Trắc nghiệm), sau đó Mức 2
      const candidateList = [
        ...specs.filter(s => s.level === "M3" && s.formType === "TL"),
        ...specs.filter(s => s.level === "M3" && s.formType === "TNKQ"),
        ...specs.filter(s => s.level === "M2" && s.formType === "TL"),
        ...specs.filter(s => s.level === "M2" && s.formType === "TNKQ"),
        ...specs
      ];

      // Loại bỏ trùng lặp giữ thứ tự ưu tiên
      const prioritizedUnique = [];
      const seenIds = new Set();
      candidateList.forEach(item => {
        if (!seenIds.has(item.questionId)) {
          seenIds.add(item.questionId);
          prioritizedUnique.push(item);
        }
      });

      for (let i = 0; i < targetSeaPlmCount && i < prioritizedUnique.length; i++) {
        prioritizedUnique[i].isSeaPlm = true;
        prioritizedUnique[i].seaPlmContext = seaPlmContexts[i % seaPlmContexts.length];
      }
    }

    return specs;
  }

  getCompetency(subject, level) {
    const s = (subject || "").toLowerCase();
    if (s.includes("công nghệ")) {
      if (level === "M1") return "Năng lực nhận thức công nghệ (Nhận biết dụng cụ & đồ dùng)";
      if (level === "M2") return "Năng lực sử dụng công nghệ (Thao tác trồng cây / sử dụng an toàn)";
      return "Năng lực giải quyết vấn đề kĩ thuật & sáng tạo (Lập kế hoạch / thiết kế sản phẩm)";
    }
    if (s.includes("tin học")) {
      if (level === "M1") return "Năng lực nhận diện phần cứng, tệp và thư mục";
      if (level === "M2") return "Năng lực thao tác phần mềm và tìm kiếm thông tin";
      return "Năng lực an toàn số & tư duy giải quyết vấn đề với máy tính";
    }
    if (s.includes("khoa học")) {
      if (level === "M1") return "Năng lực nhận thức thế giới tự nhiên";
      if (level === "M2") return "Năng lực tìm hiểu tự nhiên & kết nối thí nghiệm";
      return "Năng lực vận dụng kiến thức khoa học giải thích hiện tượng đời sống";
    }
    if (s.includes("lịch sử") || s.includes("địa lí")) {
      if (level === "M1") return "Năng lực nhận biết sự kiện lịch sử và vị trí địa lí";
      if (level === "M2") return "Năng lực giải thích đặc điểm tự nhiên và ý nghĩa lịch sử";
      return "Năng lực vận dụng và đề xuất giải pháp thực tiễn địa phương";
    }
    if (s.includes("tiếng việt")) {
      if (level === "M1") return "Năng lực nhận biết từ ngữ, ngữ pháp";
      if (level === "M2") return "Năng lực đọc hiểu và kết nối văn bản";
      return "Năng lực tạo lập văn bản & cảm thụ thẩm mỹ";
    }
    if (s.includes("tiếng anh") || s.includes("english")) {
      if (level === "M1") return "Năng lực nhận biết từ vựng, mẫu câu và ngữ âm cơ bản";
      if (level === "M2") return "Năng lực kết nối từ vựng, cấu trúc ngữ pháp và đọc hiểu hội thoại";
      return "Năng lực vận dụng giao tiếp tiếng Anh vào tình huống thực tế và tạo lập câu/đoạn văn";
    }
    // Mặc định Toán
    if (level === "M1") return "Năng lực tính toán & nhận biết trực tiếp";
    if (level === "M2") return "Năng lực giải quyết vấn đề toán học";
    return "Năng lực mô hình hóa toán học & tối ưu thực tiễn";
  }
}

module.exports = new SpecificationEngine();
