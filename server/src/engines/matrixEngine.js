/**
 * Matrix Engine: Quản lý, sinh và kiểm định Ma trận đề kiểm tra chuẩn Thông tư 27 & Bộ GD&ĐT
 * Cung cấp ma trận chuẩn xác theo mẫu Thông tư 27 (10 cột, mỗi mạch kiến thức có 3 dòng con:
 * - Dòng 1: Số câu
 * - Dòng 2: Câu số (Liệt kê số thứ tự câu hỏi trong đề)
 * - Dòng 3: Số điểm
 * Hàng Tổng kết: Tổng số câu, Số điểm, Tỉ lệ %)
 * Hỗ trợ đầy đủ các môn: Toán, Tiếng Việt, Tiếng Anh, Khoa học, Lịch sử và Địa lí, Tin học, Công nghệ.
 */

const tt27Rules = require('../data/tt27Rules');

class MatrixEngine {
  getPresets() {
    return tt27Rules.standardMatrixPresets;
  }

  /**
   * Lấy chủ đề mặc định theo môn học khi người dùng chưa chọn chủ đề
   */
  getDefaultTopicsBySubject(subject) {
    const s = (subject || "").toLowerCase();
    if (s.includes("tiếng anh") || s.includes("english")) {
      return [
        { topicName: "1. Kĩ năng Nghe (Listening)", learningOutcomes: ["Nghe nhận biết từ vựng, thông tin chi tiết và hội thoại quen thuộc"] },
        { topicName: "2. Đọc hiểu & Kiến thức ngôn ngữ (Reading & Language Focus)", learningOutcomes: ["Đọc hiểu đoạn văn ngắn, nhận diện từ vựng, ngữ âm và mẫu câu"] },
        { topicName: "3. Kĩ năng Viết (Writing)", learningOutcomes: ["Sắp xếp từ thành câu, viết câu hoàn chỉnh và đoạn văn ngắn"] }
      ];
    }
    if (s.includes("công nghệ")) {
      return [
        { topicName: "Chủ đề 1: Công nghệ và đời sống (Hoa và cây cảnh trong chậu)", learningOutcomes: ["Vật liệu, dụng cụ trồng và chăm sóc hoa, cây cảnh"] },
        { topicName: "Chủ đề 2: Thủ công kĩ thuật (Mô hình kĩ thuật & Đồ chơi)", learningOutcomes: ["Chi tiết lắp ghép mô hình kĩ thuật, an toàn sử dụng dụng cụ"] }
      ];
    }
    if (s.includes("tin học")) {
      return [
        { topicName: "Chủ đề 1: Máy tính và em (Tệp và thư mục)", learningOutcomes: ["Thao tác quản lý tệp và thư mục khoa học"] },
        { topicName: "Chủ đề 2: Mạng Internet và Ứng dụng tin học", learningOutcomes: ["Tìm kiếm thông tin, an toàn mạng và lập trình trực quan"] }
      ];
    }
    if (s.includes("khoa học") || s.includes("tự nhiên và xã hội")) {
      return [
        { topicName: "Chủ đề 1: Chất (Nước và Không khí)", learningOutcomes: ["Tính chất và ba thể của nước, thành phần không khí"] },
        { topicName: "Chủ đề 2: Năng lượng và Con người", learningOutcomes: ["Ánh sáng, nhiệt độ và các nhóm chất dinh dưỡng"] }
      ];
    }
    if (s.includes("lịch sử") || s.includes("địa lí")) {
      return [
        { topicName: "Chủ đề 1: Địa phương em & Vùng Nam Bộ", learningOutcomes: ["Thiên nhiên, sông ngòi và đời sống người dân Nam Bộ"] },
        { topicName: "Chủ đề 2: Các vùng miền & Lịch sử dựng nước", learningOutcomes: ["Truyền thống lịch sử và các vùng miền đất nước"] }
      ];
    }
    if (s.includes("tiếng việt")) {
      return [
        { topicName: "1. Đọc hiểu văn bản", learningOutcomes: ["Đọc hiểu nội dung văn bản, chi tiết và thông điệp bài đọc"] },
        { topicName: "2. Kiến thức tiếng Việt (Luyện từ và câu)", learningOutcomes: ["Nhận biết từ loại, mẫu câu và biện pháp nghệ thuật"] }
      ];
    }
    // Mặc định Toán
    return [
      { topicName: "1. Số và các phép tính", learningOutcomes: ["Nhận biết, tính toán và giải toán có lời văn"] },
      { topicName: "2. Hình học và Đo lường", learningOutcomes: ["Nhận biết hình, đơn vị đo và giải toán thực tế"] }
    ];
  }

  /**
   * Hàm lượng tử hóa điểm về bội số của 0.25
   */
  quantizePoint(val) {
    return Math.round(val * 4) / 4;
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
   * Phân bổ điểm cho các câu hỏi trong một mức độ nhận thức
   */
  allocateLevelQuestionPoints(totalLevelPts, tnCount, tlCount) {
    if (tnCount === 0 && tlCount === 0) {
      return { tnPointsList: [], tlPointsList: [] };
    }
    if (tlCount === 0) {
      return {
        tnPointsList: this.distributePointsToQuestions(totalLevelPts, tnCount),
        tlPointsList: []
      };
    }
    if (tnCount === 0) {
      return {
        tnPointsList: [],
        tlPointsList: this.distributePointsToQuestions(totalLevelPts, tlCount)
      };
    }

    let bestTlTotal = tlCount * 1.0;
    const minTlTotal = tlCount * 0.5;
    const maxTlTotal = Math.min(totalLevelPts - tnCount * 0.25, tlCount * 2.5);

    let found = false;
    const candidateTlPerQ = [1.5, 1.0, 1.25, 1.75, 0.75, 2.0, 0.5];
    for (const tlCandidate of candidateTlPerQ) {
      const candidateTlTotal = Number((tlCandidate * tlCount).toFixed(2));
      if (candidateTlTotal >= minTlTotal && candidateTlTotal <= maxTlTotal) {
        const candidateTnTotal = Number((totalLevelPts - candidateTlTotal).toFixed(2));
        const remainder = Math.round(candidateTnTotal * 4) % tnCount;
        if (remainder === 0 && candidateTnTotal / tnCount >= 0.25) {
          bestTlTotal = candidateTlTotal;
          found = true;
          break;
        }
      }
    }

    if (!found) {
      bestTlTotal = Math.min(maxTlTotal, Math.max(minTlTotal, tlCount * 1.0));
      bestTlTotal = this.quantizePoint(bestTlTotal);
    }

    const bestTnTotal = Number((totalLevelPts - bestTlTotal).toFixed(2));
    const tnPointsList = this.distributePointsToQuestions(bestTnTotal, tnCount);
    const tlPointsList = this.distributePointsToQuestions(bestTlTotal, tlCount);

    return { tnPointsList, tlPointsList };
  }

  /**
   * Tạo ma trận đề chi tiết chuẩn TT 27 (10 cột, 3 dòng con: Số câu, Câu số, Số điểm)
   */
  generateMatrix({
    grade = 4,
    subject = "Toán",
    semester = "Cuối học kỳ I",
    totalPoints = 10,
    durationMinutes = 40,
    presetId = "standard_tt27_65_20_15",
    topics = [],
    mode = "TT27_SEA_PLM",
    customCounts = null,
    customRatios = null,
    questions = null
  }) {
    const preset = this.getPresets().find(p => p.id === presetId) || this.getPresets()[0];
    const ratios = customRatios || preset.ratios || { M1: 65, M2: 20, M3: 15 };

    const activeTopics = (topics && topics.length > 0)
      ? topics
      : this.getDefaultTopicsBySubject(subject);

    const topicCount = activeTopics.length;

    // Điểm các mức (bội số 0.25)
    const m1TotalPts = this.quantizePoint((ratios.M1 * totalPoints) / 100);
    const m2TotalPts = this.quantizePoint((ratios.M2 * totalPoints) / 100);
    const m3TotalPts = Number((totalPoints - m1TotalPts - m2TotalPts).toFixed(2));

    // Phân bổ cơ cấu câu hỏi chuẩn Thông tư 27 thích ứng theo tỷ lệ thực tế
    let tlTotal = 3;
    let tnTotal = 7;

    if (customCounts && customCounts.tlTotal !== undefined) {
      tlTotal = Math.max(0, Math.min(6, Number(customCounts.tlTotal)));
      tnTotal = Math.max(0, 10 - tlTotal);
    }

    // Xác định số câu TL cho từng mức nhận thức dựa theo điểm số của mức và tổng số câu TL
    let m1Tl = 0;
    let m2Tl = 0;
    let m3Tl = 0;

    if (tlTotal === 0) {
      m1Tl = 0; m2Tl = 0; m3Tl = 0;
    } else if (tlTotal === 1) {
      // 1 câu TL ưu tiên cho M3 (hoặc M2 nếu M3=0)
      if (m3TotalPts >= 1.0) { m3Tl = 1; } else { m2Tl = 1; }
    } else if (tlTotal === 2) {
      if (m3TotalPts >= 1.0 && m2TotalPts >= 1.0) {
        m3Tl = 1; m2Tl = 1;
      } else if (m3TotalPts >= 2.0) {
        m3Tl = 2;
      } else {
        m2Tl = 1; m1Tl = 1;
      }
    } else if (tlTotal === 3) {
      if (m1TotalPts >= 6.0 && m3TotalPts <= 1.0) {
        m1Tl = 1; m2Tl = 1; m3Tl = 1;
      } else if (m3TotalPts >= 2.0) {
        m1Tl = 0; m2Tl = 1; m3Tl = 2;
      } else {
        m1Tl = 1; m2Tl = 1; m3Tl = 1;
      }
    } else if (tlTotal === 4) {
      m1Tl = 1; m2Tl = 2; m3Tl = 1;
    } else {
      m1Tl = 1; m2Tl = 2; m3Tl = 2;
    }

    // Đảm bảo tổng TL đúng bằng tlTotal
    let curTlSum = m1Tl + m2Tl + m3Tl;
    if (curTlSum < tlTotal) {
      m3Tl += (tlTotal - curTlSum);
    } else if (curTlSum > tlTotal) {
      let over = curTlSum - tlTotal;
      if (m1Tl >= over) { m1Tl -= over; }
      else { over -= m1Tl; m1Tl = 0; if (m2Tl >= over) { m2Tl -= over; } else { m3Tl -= over; } }
    }

    // Xác định số câu TN cho từng mức để tổng điểm và số câu cân đối nhất
    let m1Tn = 5;
    let m2Tn = 1;
    let m3Tn = 1;

    if (tnTotal === 0) {
      m1Tn = 0; m2Tn = 0; m3Tn = 0;
    } else {
      // Ước tính số câu TN theo điểm còn lại của từng mức
      if (ratios.M1 >= 70) {
        m1Tn = tlTotal === 3 ? 6 : (tnTotal >= 6 ? tnTotal - 1 : tnTotal);
        m2Tn = Math.max(0, tnTotal - m1Tn - (m3Tl > 0 ? 0 : 1));
        m3Tn = Math.max(0, tnTotal - m1Tn - m2Tn);
      } else if (ratios.M1 >= 60) {
        m1Tn = Math.min(tnTotal, Math.max(3, Math.round(tnTotal * 0.65)));
        m2Tn = Math.min(tnTotal - m1Tn, Math.max(1, Math.round(tnTotal * 0.22)));
        m3Tn = Math.max(0, tnTotal - m1Tn - m2Tn);
      } else if (ratios.M1 <= 45) {
        m1Tn = Math.min(tnTotal, Math.max(2, Math.round(tnTotal * 0.40)));
        m2Tn = Math.min(tnTotal - m1Tn, Math.max(2, Math.round(tnTotal * 0.40)));
        m3Tn = Math.max(0, tnTotal - m1Tn - m2Tn);
      } else {
        m1Tn = Math.min(tnTotal, Math.max(3, Math.round(tnTotal * 0.55)));
        m2Tn = Math.min(tnTotal - m1Tn, Math.max(1, Math.round(tnTotal * 0.25)));
        m3Tn = Math.max(0, tnTotal - m1Tn - m2Tn);
      }
    }

    if (customCounts) {
      m1Tn = customCounts.m1Tn !== undefined ? Number(customCounts.m1Tn) : m1Tn;
      m1Tl = customCounts.m1Tl !== undefined ? Number(customCounts.m1Tl) : m1Tl;
      m2Tn = customCounts.m2Tn !== undefined ? Number(customCounts.m2Tn) : m2Tn;
      m2Tl = customCounts.m2Tl !== undefined ? Number(customCounts.m2Tl) : m2Tl;
      m3Tn = customCounts.m3Tn !== undefined ? Number(customCounts.m3Tn) : m3Tn;
      m3Tl = customCounts.m3Tl !== undefined ? Number(customCounts.m3Tl) : m3Tl;
    }

    // Hàm phân bổ chính xác số lượng nguyên trên các chủ đề
    const distributeExact = (count, buckets, offset = 0) => {
      const arr = new Array(buckets).fill(0);
      let rem = count;
      let cur = offset;
      while (rem > 0) {
        arr[cur % buckets]++;
        rem--;
        cur++;
      }
      return arr;
    };

    // Phân bổ câu TN và TL vào từng chủ đề
    const m1TnDist = distributeExact(m1Tn, topicCount, 0);
    const m1TlDist = distributeExact(m1Tl, topicCount, 0);
    const m2TnDist = distributeExact(m2Tn, topicCount, 1);
    const m2TlDist = distributeExact(m2Tl, topicCount, 0);
    const m3TnDist = distributeExact(m3Tn, topicCount, 0);
    const m3TlDist = distributeExact(m3Tl, topicCount, 1);

    const m1Alloc = this.allocateLevelQuestionPoints(m1TotalPts, m1Tn, m1Tl);
    const m2Alloc = this.allocateLevelQuestionPoints(m2TotalPts, m2Tn, m2Tl);
    const m3Alloc = this.allocateLevelQuestionPoints(m3TotalPts, m3Tn, m3Tl);

    let m1TnIdx = 0, m1TlIdx = 0;
    let m2TnIdx = 0, m2TlIdx = 0;
    let m3TnIdx = 0, m3TlIdx = 0;

    const rows = [];

    // Bộ đếm số câu hỏi tuần tự để điền vào dòng 'Câu số'
    let currentTnNum = 1;
    let currentTlNum = (m1Tn + m2Tn + m3Tn) + 1;

    activeTopics.forEach((t, idx) => {
      const m1TnC = m1TnDist[idx];
      const m1TlC = m1TlDist[idx];
      const m2TnC = m2TnDist[idx];
      const m2TlC = m2TlDist[idx];
      const m3TnC = m3TnDist[idx];
      const m3TlC = m3TlDist[idx];

      // Gán số thứ tự câu hỏi cho từng ô
      const genQStr = (count, isTn) => {
        if (count <= 0) return "";
        const nums = [];
        for (let k = 0; k < count; k++) {
          if (isTn) {
            nums.push(currentTnNum++);
          } else {
            nums.push(currentTlNum++);
          }
        }
        return nums.join(", ");
      };

      const m1TnQ = genQStr(m1TnC, true);
      const m1TlQ = genQStr(m1TlC, false);
      const m2TnQ = genQStr(m2TnC, true);
      const m2TlQ = genQStr(m2TlC, false);
      const m3TnQ = genQStr(m3TnC, true);
      const m3TlQ = genQStr(m3TlC, false);

      // Lấy chính xác điểm cho các câu TN / TL của M1 trong chủ đề này
      let m1TnPts = 0;
      for (let k = 0; k < m1TnC; k++) {
        m1TnPts += m1Alloc.tnPointsList[m1TnIdx++];
      }
      m1TnPts = Number(m1TnPts.toFixed(2));

      let m1TlPts = 0;
      for (let k = 0; k < m1TlC; k++) {
        m1TlPts += m1Alloc.tlPointsList[m1TlIdx++];
      }
      m1TlPts = Number(m1TlPts.toFixed(2));
      const m1Pts = Number((m1TnPts + m1TlPts).toFixed(2));

      // Lấy chính xác điểm cho các câu TN / TL của M2 trong chủ đề này
      let m2TnPts = 0;
      for (let k = 0; k < m2TnC; k++) {
        m2TnPts += m2Alloc.tnPointsList[m2TnIdx++];
      }
      m2TnPts = Number(m2TnPts.toFixed(2));

      let m2TlPts = 0;
      for (let k = 0; k < m2TlC; k++) {
        m2TlPts += m2Alloc.tlPointsList[m2TlIdx++];
      }
      m2TlPts = Number(m2TlPts.toFixed(2));
      const m2Pts = Number((m2TnPts + m2TlPts).toFixed(2));

      // Lấy chính xác điểm cho các câu TN / TL của M3 trong chủ đề này
      let m3TnPts = 0;
      for (let k = 0; k < m3TnC; k++) {
        m3TnPts += m3Alloc.tnPointsList[m3TnIdx++];
      }
      m3TnPts = Number(m3TnPts.toFixed(2));

      let m3TlPts = 0;
      for (let k = 0; k < m3TlC; k++) {
        m3TlPts += m3Alloc.tlPointsList[m3TlIdx++];
      }
      m3TlPts = Number(m3TlPts.toFixed(2));
      const m3Pts = Number((m3TnPts + m3TlPts).toFixed(2));

      const totalRowTnCount = m1TnC + m2TnC + m3TnC;
      const totalRowTlCount = m1TlC + m2TlC + m3TlC;
      const totalRowTnPts = Number((m1TnPts + m2TnPts + m3TnPts).toFixed(2));
      const totalRowTlPts = Number((m1TlPts + m2TlPts + m3TlPts).toFixed(2));
      const totalRowTnQ = [m1TnQ, m2TnQ, m3TnQ].filter(Boolean).join(", ");
      const totalRowTlQ = [m1TlQ, m2TlQ, m3TlQ].filter(Boolean).join(", ");

      const totalRowPts = Number((m1Pts + m2Pts + m3Pts).toFixed(2));

      rows.push({
        topicId: `topic_${idx + 1}`,
        topicName: t.topicName,
        learningOutcomes: t.learningOutcomes || [t.topicName],
        m1: {
          tnCount: m1TnC,
          tnQuestions: m1TnQ,
          tnPoints: m1TnPts,
          tlCount: m1TlC,
          tlQuestions: m1TlQ,
          tlPoints: m1TlPts,
          points: m1Pts
        },
        m2: {
          tnCount: m2TnC,
          tnQuestions: m2TnQ,
          tnPoints: m2TnPts,
          tlCount: m2TlC,
          tlQuestions: m2TlQ,
          tlPoints: m2TlPts,
          points: m2Pts
        },
        m3: {
          tnCount: m3TnC,
          tnQuestions: m3TnQ,
          tnPoints: m3TnPts,
          tlCount: m3TlC,
          tlQuestions: m3TlQ,
          tlPoints: m3TlPts,
          points: m3Pts
        },
        total: {
          tnCount: totalRowTnCount,
          tnQuestions: totalRowTnQ,
          tnPoints: totalRowTnPts,
          tlCount: totalRowTlCount,
          tlQuestions: totalRowTlQ,
          tlPoints: totalRowTlPts,
          totalQuestions: totalRowTnCount + totalRowTlCount,
          points: totalRowPts
        },
        totalPoints: totalRowPts
      });
    });

    // Tính tổng kết ma trận
    let totalTnCount = 0;
    let totalTnPoints = 0;
    let totalTlCount = 0;
    let totalTlPoints = 0;
    let totalM1Points = 0;
    let totalM2Points = 0;
    let totalM3Points = 0;

    let totalM1TnCount = 0;
    let totalM1TlCount = 0;
    let totalM1TnPoints = 0;
    let totalM1TlPoints = 0;

    let totalM2TnCount = 0;
    let totalM2TlCount = 0;
    let totalM2TnPoints = 0;
    let totalM2TlPoints = 0;

    let totalM3TnCount = 0;
    let totalM3TlCount = 0;
    let totalM3TnPoints = 0;
    let totalM3TlPoints = 0;

    rows.forEach(r => {
      totalM1TnCount += r.m1.tnCount;
      totalM1TlCount += r.m1.tlCount;
      totalM1TnPoints += r.m1.tnPoints;
      totalM1TlPoints += r.m1.tlPoints;

      totalM2TnCount += r.m2.tnCount;
      totalM2TlCount += r.m2.tlCount;
      totalM2TnPoints += r.m2.tnPoints;
      totalM2TlPoints += r.m2.tlPoints;

      totalM3TnCount += r.m3.tnCount;
      totalM3TlCount += r.m3.tlCount;
      totalM3TnPoints += r.m3.tnPoints;
      totalM3TlPoints += r.m3.tlPoints;

      totalTnCount += (r.m1.tnCount + r.m2.tnCount + r.m3.tnCount);
      totalTnPoints += (r.m1.tnPoints + r.m2.tnPoints + r.m3.tnPoints);
      totalTlCount += (r.m1.tlCount + r.m2.tlCount + r.m3.tlCount);
      totalTlPoints += (r.m1.tlPoints + r.m2.tlPoints + r.m3.tlPoints);
      totalM1Points += r.m1.points;
      totalM2Points += r.m2.points;
      totalM3Points += r.m3.points;
    });

    const isTiengViet = (subject || "").toLowerCase().includes("tiếng việt");

    const matrix = {
      matrixId: `MAT-${Date.now()}`,
      grade: Number(grade),
      subject,
      semester,
      totalPoints,
      durationMinutes,
      presetName: preset.name,
      mode,
      ratios: {
        M1: ratios.M1,
        M2: ratios.M2,
        M3: ratios.M3
      },
      matrixRows: rows,
      // Cấu trúc 3 hàng tổng kết chuẩn Thông tư 27 (Tổng số câu, Số điểm, Tỉ lệ %)
      summary: {
        totalCountRow: {
          m1Tn: totalM1TnCount,
          m1Tl: totalM1TlCount,
          m2Tn: totalM2TnCount,
          m2Tl: totalM2TlCount,
          m3Tn: totalM3TnCount,
          m3Tl: totalM3TlCount,
          totalTn: totalTnCount,
          totalTl: totalTlCount,
          grandTotal: totalTnCount + totalTlCount
        },
        totalPointsRow: {
          m1Tn: Number(totalM1TnPoints.toFixed(2)),
          m1Tl: Number(totalM1TlPoints.toFixed(2)),
          m2Tn: Number(totalM2TnPoints.toFixed(2)),
          m2Tl: Number(totalM2TlPoints.toFixed(2)),
          m3Tn: Number(totalM3TnPoints.toFixed(2)),
          m3Tl: Number(totalM3TlPoints.toFixed(2)),
          totalTn: Number(totalTnPoints.toFixed(2)),
          totalTl: Number(totalTlPoints.toFixed(2)),
          grandTotal: totalPoints
        },
        ratiosRow: {
          m1Pct: ratios.M1,
          m2Pct: ratios.M2,
          m3Pct: ratios.M3,
          totalPct: 100
        },
        // Trường tương thích ngược
        totalTnCount,
        totalTnPoints: Number(totalTnPoints.toFixed(2)),
        totalTlCount,
        totalTlPoints: Number(totalTlPoints.toFixed(2)),
        totalQuestions: totalTnCount + totalTlCount,
        totalM1Points: Number(totalM1Points.toFixed(2)),
        totalM2Points: Number(totalM2Points.toFixed(2)),
        totalM3Points: Number(totalM3Points.toFixed(2)),
        m1Pct: ratios.M1,
        m2Pct: ratios.M2,
        m3Pct: ratios.M3,
        totalPoints: totalPoints
      },
      // Cấu trúc Ma trận Tiếng Việt chuẩn Thông tư 27 (Ảnh 1)
      tiengVietMatrix: isTiengViet ? this.generateTiengVietMatrixStructure(Number(grade), questions, ratios, 6) : null,
      validation: this.validateMatrix({
        totalPoints,
        ratios,
        matrixRows: rows
      })
    };

    // Nếu đã có danh sách câu hỏi thực tế, đồng bộ câu số chính xác
    if (questions && questions.length > 0) {
      this.syncMatrixWithQuestions(matrix, questions);
    }

    return matrix;
  }

  /**
   * Sinh cấu trúc Ma trận chuẩn cho môn Tiếng Việt (Ảnh 1)
   * Phần I: Ma trận Đọc hiểu (10 cột, 3 dòng con) bám sát tỷ lệ % do giáo viên điều chỉnh
   * Phần II: Ma trận Viết (3 cột: Nội dung kiểm tra, Mức độ đáp ứng, Điểm số)
   */
  generateTiengVietMatrixStructure(grade = 4, questions = null, customRatios = null, totalReadingPoints = 6) {
    const ratios = customRatios || { M1: 65, M2: 20, M3: 15 };
    const rdTotal = Number(totalReadingPoints) || 6.0;

    // Tính điểm các mức nhận thức theo đúng % người dùng thiết lập
    const m1Total = this.quantizePoint((ratios.M1 * rdTotal) / 100);
    const m2Total = this.quantizePoint((ratios.M2 * rdTotal) / 100);
    const m3Total = Number((rdTotal - m1Total - m2Total).toFixed(2));

    // Phân bổ điểm vào 2 phần: 1. Đọc hiểu văn bản (~65%) và 2. Kiến thức tiếng Việt (~35%)
    let row1M1 = this.quantizePoint(m1Total * 0.65);
    if (row1M1 === 0 && m1Total > 0) row1M1 = Math.min(m1Total, 0.5);
    let row2M1 = Number((m1Total - row1M1).toFixed(2));

    let row1M2 = this.quantizePoint(m2Total * 0.60);
    let row2M2 = Number((m2Total - row1M2).toFixed(2));

    let row1M3 = this.quantizePoint(m3Total * 0.50);
    let row2M3 = Number((m3Total - row1M3).toFixed(2));

    // Số câu TN và TL ước lượng
    const cTn = (pts) => pts > 0 ? Math.max(1, Math.round(pts / 0.5)) : 0;
    const r1M1Tn = cTn(row1M1);
    const r2M1Tn = cTn(row2M1);
    const r1M2Tn = cTn(row1M2);
    const r2M2Tn = cTn(row2M2);
    const r1M3Tl = m3Total > 0 ? (row1M3 > 0 ? 1 : 0) : 0;
    const r2M3Tl = m3Total > 0 ? (row2M3 > 0 || r1M3Tl === 0 ? 1 : 0) : 0;

    const row1TotalPts = Number((row1M1 + row1M2 + row1M3).toFixed(2));
    const row2TotalPts = Number((row2M1 + row2M2 + row2M3).toFixed(2));

    const readingRows = [
      {
        topicId: "tv_reading_1",
        topicName: "1. Đọc hiểu văn bản",
        m1: { tnCount: r1M1Tn, tnQuestions: "1, 2", tnPoints: row1M1, tlCount: 0, tlQuestions: "", tlPoints: 0, points: row1M1 },
        m2: { tnCount: r1M2Tn, tnQuestions: "3", tnPoints: row1M2, tlCount: 0, tlQuestions: "", tlPoints: 0, points: row1M2 },
        m3: { tnCount: 0, tnQuestions: "", tnPoints: 0, tlCount: r1M3Tl, tlQuestions: r1M3Tl ? "4" : "", tlPoints: row1M3, points: row1M3 },
        total: {
          tnCount: r1M1Tn + r1M2Tn,
          tnQuestions: ["1, 2", "3"].filter(Boolean).join(", "),
          tnPoints: Number((row1M1 + row1M2).toFixed(2)),
          tlCount: r1M3Tl,
          tlQuestions: r1M3Tl ? "4" : "",
          tlPoints: row1M3,
          totalQuestions: r1M1Tn + r1M2Tn + r1M3Tl,
          points: row1TotalPts
        }
      },
      {
        topicId: "tv_reading_2",
        topicName: "2. Kiến thức tiếng Việt (Luyện từ và câu)",
        m1: { tnCount: r2M1Tn, tnQuestions: "5", tnPoints: row2M1, tlCount: 0, tlQuestions: "", tlPoints: 0, points: row2M1 },
        m2: { tnCount: r2M2Tn, tnQuestions: "6", tnPoints: row2M2, tlCount: 0, tlQuestions: "", tlPoints: 0, points: row2M2 },
        m3: { tnCount: 0, tnQuestions: "", tnPoints: 0, tlCount: r2M3Tl, tlQuestions: r2M3Tl ? "7" : "", tlPoints: row2M3, points: row2M3 },
        total: {
          tnCount: r2M1Tn + r2M2Tn,
          tnQuestions: ["5", "6"].filter(Boolean).join(", "),
          tnPoints: Number((row2M1 + row2M2).toFixed(2)),
          tlCount: r2M3Tl,
          tlQuestions: r2M3Tl ? "7" : "",
          tlPoints: row2M3,
          totalQuestions: r2M1Tn + r2M2Tn + r2M3Tl,
          points: row2TotalPts
        }
      }
    ];

    const totalTnCount = r1M1Tn + r1M2Tn + r2M1Tn + r2M2Tn;
    const totalTlCount = r1M3Tl + r2M3Tl;
    const totalTnPts = Number((row1M1 + row1M2 + row2M1 + row2M2).toFixed(2));
    const totalTlPts = Number((row1M3 + row2M3).toFixed(2));

    const readingSummary = {
      totalCountRow: {
        m1Tn: r1M1Tn + r2M1Tn,
        m1Tl: 0,
        m2Tn: r1M2Tn + r2M2Tn,
        m2Tl: 0,
        m3Tn: 0,
        m3Tl: r1M3Tl + r2M3Tl,
        totalTn: totalTnCount,
        totalTl: totalTlCount,
        grandTotal: totalTnCount + totalTlCount
      },
      totalPointsRow: {
        m1Tn: m1Total,
        m1Tl: 0,
        m2Tn: m2Total,
        m2Tl: 0,
        m3Tn: 0,
        m3Tl: m3Total,
        totalTn: totalTnPts,
        totalTl: totalTlPts,
        grandTotal: rdTotal
      },
      ratiosRow: {
        m1Pct: ratios.M1,
        m2Pct: ratios.M2,
        m3Pct: ratios.M3,
        totalPct: 100
      }
    };

    // Phần II: Ma trận Viết
    const writingRows = grade <= 3 ? [
      { component: "1. Chính tả (Nghe - viết)", level: "Mức 1", score: "4,0 điểm", note: `Đoạn văn/thơ đúng chuẩn số chữ Lớp ${grade} (~15 phút)` },
      { component: "2. Tập làm văn (Viết đoạn)", level: "Mức 2, 3", score: "6,0 điểm", note: `Viết đoạn văn theo chủ điểm có gợi ý chi tiết` }
    ] : [
      { component: "1. Tập làm văn (Bài văn hoàn chỉnh)", level: "Mức 1, 2, 3", score: "10,0 điểm", note: "Bài văn hoàn chỉnh đúng bố cục 3 phần, giàu hình ảnh cảm xúc kèm Barem 5 tiêu chí" }
    ];

    return {
      grade,
      readingTable: {
        title: "I. MA TRẬN NỘI DUNG VÀ MỨC ĐỘ NHẬN THỨC PHẦN ĐỌC HIỂU (6,0 ĐIỂM)",
        rows: readingRows,
        summary: readingSummary
      },
      writingTable: {
        title: "II. MA TRẬN NỘI DUNG VÀ MỨC ĐỘ NHẬN THỨC PHẦN VIẾT (10,0 ĐIỂM)",
        rows: writingRows,
        totalScore: "10,0 điểm"
      },
      // Trường tương thích cũ
      readingMatrix: [
        { component: "1. Đọc thành tiếng", m1: "4,0đ", m2: "-", m3: "-", total: "4,0đ" },
        { component: "2. Đọc hiểu văn bản", m1: "2,0đ (Câu 1, 2)", m2: "1,5đ (Câu 3, 4)", m3: "0,5đ (Câu 5)", total: "4,0đ" },
        { component: "3. Luyện từ và câu", m1: "0,5đ (Câu 6)", m2: "1,0đ (Câu 7)", m3: "0,5đ (Câu 8)", total: "2,0đ" }
      ],
      writingMatrix: writingRows
    };
  }

  /**
   * Đồng bộ câu hỏi thực tế vào ma trận (điền chính xác Câu số, Số câu, Số điểm vào từng ô)
   */
  syncMatrixWithQuestions(matrix, questions) {
    if (!matrix || !questions || questions.length === 0) return;

    const isTiengViet = (matrix.subject || "").toLowerCase().includes("tiếng việt");

    // Chọn danh sách hàng ma trận cần đồng bộ
    let rows = matrix.matrixRows;
    if (isTiengViet && matrix.tiengVietMatrix?.readingTable?.rows) {
      rows = matrix.tiengVietMatrix.readingTable.rows;
    }
    if (!rows || rows.length === 0) {
      rows = matrix.rows || [];
    }
    if (!rows || rows.length === 0) return;

    // 1. Phân bổ các câu hỏi vào từng hàng ma trận (theo topicId / topicName hoặc category)
    const rowQuestionBuckets = rows.map((r, rIdx) => {
      return questions.filter(q => {
        if (isTiengViet) {
          if (rIdx === 0) {
            return q.category === 'reading' || (!q.category && (q.questionNumber || q.itemNumber) <= 3);
          }
          if (rIdx === 1) {
            return q.category === 'language' || (!q.category && (q.questionNumber || q.itemNumber) > 3);
          }
        }
        if (q.topicId && r.topicId && q.topicId === r.topicId) return true;
        if (q.topic && r.topicName && q.topic.trim().toLowerCase() === r.topicName.trim().toLowerCase()) return true;
        return false;
      });
    });

    // Gom các câu hỏi chưa được gán vào hàng tương ứng
    questions.forEach(q => {
      const isAssigned = rowQuestionBuckets.some(bucket => bucket.includes(q));
      if (!isAssigned) {
        if (isTiengViet) {
          const qNum = q.questionNumber || q.itemNumber || 1;
          if (qNum <= 3) rowQuestionBuckets[0].push(q);
          else (rowQuestionBuckets[1] || rowQuestionBuckets[0]).push(q);
        } else {
          rowQuestionBuckets[0].push(q);
        }
      }
    });

    // 2. Điền chính xác Số câu, Câu số và Số điểm vào từng ô của từng hàng
    rows.forEach((row, rIdx) => {
      const qList = rowQuestionBuckets[rIdx] || [];

      const isTn = (q) => {
        const t = (q.questionType || q.type || '').toLowerCase();
        const f = (q.formType || '').toUpperCase();
        return (f === 'TNKQ' || t === 'multiple_choice' || t === 'true_false' || t === 'fill_in_the_blank' || t === 'matching' || t === 'mcq')
          && t !== 'constructed_response' && t !== 'essay';
      };

      const getCellData = (level, tn) => {
        const matched = qList.filter(q => (q.level || 'M1') === level && isTn(q) === tn);
        const qNums = matched.map(q => q.itemNumber || q.questionNumber).filter(Boolean);
        const pts = Number(matched.reduce((sum, q) => sum + (Number(q.points) || 0), 0).toFixed(2));
        return {
          count: matched.length,
          questions: qNums.join(', '),
          points: pts
        };
      };

      const m1Tn = getCellData('M1', true);
      const m1Tl = getCellData('M1', false);
      const m2Tn = getCellData('M2', true);
      const m2Tl = getCellData('M2', false);
      const m3Tn = getCellData('M3', true);
      const m3Tl = getCellData('M3', false);

      row.m1 = {
        tnCount: m1Tn.count,
        tnQuestions: m1Tn.questions,
        tnPoints: m1Tn.points,
        tlCount: m1Tl.count,
        tlQuestions: m1Tl.questions,
        tlPoints: m1Tl.points,
        points: Number((m1Tn.points + m1Tl.points).toFixed(2))
      };

      row.m2 = {
        tnCount: m2Tn.count,
        tnQuestions: m2Tn.questions,
        tnPoints: m2Tn.points,
        tlCount: m2Tl.count,
        tlQuestions: m2Tl.questions,
        tlPoints: m2Tl.points,
        points: Number((m2Tn.points + m2Tl.points).toFixed(2))
      };

      row.m3 = {
        tnCount: m3Tn.count,
        tnQuestions: m3Tn.questions,
        tnPoints: m3Tn.points,
        tlCount: m3Tl.count,
        tlQuestions: m3Tl.questions,
        tlPoints: m3Tl.points,
        points: Number((m3Tn.points + m3Tl.points).toFixed(2))
      };

      const rowTnCount = m1Tn.count + m2Tn.count + m3Tn.count;
      const rowTlCount = m1Tl.count + m2Tl.count + m3Tl.count;
      const rowTnPts = Number((m1Tn.points + m2Tn.points + m3Tn.points).toFixed(2));
      const rowTlPts = Number((m1Tl.points + m2Tl.points + m3Tl.points).toFixed(2));

      row.total = {
        tnCount: rowTnCount,
        tlCount: rowTlCount,
        tnPoints: rowTnPts,
        tlPoints: rowTlPts,
        totalQuestions: rowTnCount + rowTlCount,
        points: Number((rowTnPts + rowTlPts).toFixed(2)),
        tnQuestions: [m1Tn.questions, m2Tn.questions, m3Tn.questions].filter(Boolean).join(', '),
        tlQuestions: [m1Tl.questions, m2Tl.questions, m3Tl.questions].filter(Boolean).join(', ')
      };
    });

    // 3. Tính toán Hàng tổng kết (Summary) chuẩn xác 100%
    let sM1Tn = 0, sM1Tl = 0, sM2Tn = 0, sM2Tl = 0, sM3Tn = 0, sM3Tl = 0;
    let sM1TnP = 0, sM1TlP = 0, sM2TnP = 0, sM2TlP = 0, sM3TnP = 0, sM3TlP = 0;

    rows.forEach(r => {
      sM1Tn += r.m1.tnCount; sM1Tl += r.m1.tlCount;
      sM2Tn += r.m2.tnCount; sM2Tl += r.m2.tlCount;
      sM3Tn += r.m3.tnCount; sM3Tl += r.m3.tlCount;

      sM1TnP += r.m1.tnPoints; sM1TlP += r.m1.tlPoints;
      sM2TnP += r.m2.tnPoints; sM2TlP += r.m2.tlPoints;
      sM3TnP += r.m3.tnPoints; sM3TlP += r.m3.tlPoints;
    });

    const grandTnCount = sM1Tn + sM2Tn + sM3Tn;
    const grandTlCount = sM1Tl + sM2Tl + sM3Tl;
    const grandTotalQuestions = grandTnCount + grandTlCount;

    const grandTnPts = Number((sM1TnP + sM2TnP + sM3TnP).toFixed(2));
    const grandTlPts = Number((sM1TlP + sM2TlP + sM3TlP).toFixed(2));
    const grandTotalPts = Number((grandTnPts + grandTlPts).toFixed(2));

    const m1TotalPts = Number((sM1TnP + sM1TlP).toFixed(2));
    const m2TotalPts = Number((sM2TnP + sM2TlP).toFixed(2));
    const m3TotalPts = Number((sM3TnP + sM3TlP).toFixed(2));

    const m1Pct = grandTotalPts > 0 ? Math.round((m1TotalPts / grandTotalPts) * 100) : 65;
    const m2Pct = grandTotalPts > 0 ? Math.round((m2TotalPts / grandTotalPts) * 100) : 20;
    const m3Pct = Math.max(0, 100 - m1Pct - m2Pct);

    const summary = {
      totalCountRow: {
        m1Tn: sM1Tn, m1Tl: sM1Tl,
        m2Tn: sM2Tn, m2Tl: sM2Tl,
        m3Tn: sM3Tn, m3Tl: sM3Tl,
        totalTn: grandTnCount,
        totalTl: grandTlCount,
        grandTotal: grandTotalQuestions
      },
      totalPointsRow: {
        m1Tn: Number(sM1TnP.toFixed(2)), m1Tl: Number(sM1TlP.toFixed(2)),
        m2Tn: Number(sM2TnP.toFixed(2)), m2Tl: Number(sM2TlP.toFixed(2)),
        m3Tn: Number(sM3TnP.toFixed(2)), m3Tl: Number(sM3TlP.toFixed(2)),
        totalTn: grandTnPts,
        totalTl: grandTlPts,
        grandTotal: grandTotalPts
      },
      ratiosRow: {
        m1Pct, m2Pct, m3Pct, totalPct: 100
      },
      totalM1Points: m1TotalPts,
      totalM2Points: m2TotalPts,
      totalM3Points: m3TotalPts,
      totalPoints: grandTotalPts
    };

    if (isTiengViet) {
      if (!matrix.tiengVietMatrix) matrix.tiengVietMatrix = {};
      if (!matrix.tiengVietMatrix.readingTable) matrix.tiengVietMatrix.readingTable = {};
      matrix.tiengVietMatrix.readingTable.rows = rows;
      matrix.tiengVietMatrix.readingTable.summary = summary;
    }
    matrix.matrixRows = rows;
    matrix.rows = rows;
    matrix.summary = summary;
    matrix.totalPoints = grandTotalPts;
  }

  validateMatrix({ totalPoints = 10, ratios = { M1: 65, M2: 20, M3: 15 }, matrixRows }) {
    const issues = [];
    const warnings = [];
    const sumRatio = ratios.M1 + ratios.M2 + ratios.M3;
    if (Math.abs(sumRatio - 100) > 0.01) {
      issues.push(`Tổng tỷ lệ phần trăm các mức phải bằng 100% (Hiện tại: ${sumRatio}%).`);
    }

    if (totalPoints !== 10) {
      issues.push(`Thông tư 27 quy định thang điểm chuẩn là 10 điểm (Hiện tại: ${totalPoints} điểm).`);
    }

    const m1Pts = Number(((ratios.M1 * totalPoints) / 100).toFixed(2));
    const m2Pts = Number(((ratios.M2 * totalPoints) / 100).toFixed(2));
    const m3Pts = Number(((ratios.M3 * totalPoints) / 100).toFixed(2));

    if (m1Pts < 5.5 || m1Pts > 7.0) {
      warnings.push(`Điểm Mức 1 hiện tại là ${m1Pts}đ. Khung chuẩn khuyến nghị Thông tư 27 cho Mức 1 là từ 5,5 đến 7,0 điểm.`);
    }
    if (m2Pts < 1.5 || m2Pts > 2.0) {
      warnings.push(`Điểm Mức 2 hiện tại là ${m2Pts}đ. Khung chuẩn khuyến nghị Thông tư 27 cho Mức 2 là từ 1,5 đến 2,0 điểm.`);
    }
    if (m3Pts < 0.5 || m3Pts > 1.5) {
      warnings.push(`Điểm Mức 3 hiện tại là ${m3Pts}đ. Khung chuẩn khuyến nghị Thông tư 27 cho Mức 3 là từ 0,5 đến 1,5 điểm.`);
    }

    return {
      isValid: issues.length === 0,
      issues,
      warnings,
      scoreBalanced: issues.length === 0,
      isTt27StandardRange: warnings.length === 0
    };
  }
}

module.exports = new MatrixEngine();
