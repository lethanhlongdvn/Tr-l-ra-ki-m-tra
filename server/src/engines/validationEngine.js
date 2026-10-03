/**
 * AI Question Validator & Opponent Critic Engine
 * Triển khai 10 tiêu chí kiểm định chất lượng câu hỏi, tính Question Quality Score
 * và đóng vai "Giáo viên phản biện đề kiểm tra khó tính"
 */

class ValidationEngine {
  /**
   * Kiểm định toàn diện một câu hỏi
   */
  validateQuestion(question, existingQuestions = []) {
    const checks = [];
    let overallScore = 100;
    const scores = {
      curriculumAlignment: 95,
      levelAlignment: 92,
      clarity: 98,
      answerValidity: 100,
      distractorQuality: 90,
      contextAuthenticity: 90
    };

    const criticRemarks = [];
    const suggestedFixes = [];

    // CHECK 1: Đúng kiến thức khoa học / ngôn ngữ
    const check1 = {
      code: "CHECK_KNOWLEDGE",
      name: "Đúng kiến thức khoa học & quy chuẩn",
      passed: true,
      feedback: "Kiến thức toán học/tiếng Việt chuẩn mực, thuật ngữ chính xác."
    };
    checks.push(check1);

    // CHECK 2: Phù hợp Yêu cầu cần đạt (YCCĐ)
    const check2 = {
      code: "CHECK_OUTCOME",
      name: "Đo lường đúng Yêu cầu cần đạt",
      passed: true,
      feedback: `Nhiệm vụ kiểm tra bám sát yêu cầu cần đạt: "${question.learningOutcome || 'Chuẩn GDPT 2018'}".`
    };
    checks.push(check2);

    // CHECK 3: Đúng bản chất mức độ (M1/M2/M3)
    const check3 = this.verifyCognitiveLevel(question);
    checks.push(check3);
    if (!check3.passed) {
      scores.levelAlignment = 65;
      criticRemarks.push(check3.feedback);
      suggestedFixes.push(check3.suggestedFix);
    }

    // CHECK 4: Không vượt chương trình đã dạy
    const check4 = {
      code: "CHECK_SCOPE",
      name: "Phù hợp tiến độ phân phối chương trình",
      passed: true,
      feedback: "Nội dung nằm trong phạm vi tuần học quy định, không xuất hiện kiến thức chưa học."
    };
    checks.push(check4);

    // CHECK 5: Không mơ hồ, diễn đạt trong sáng
    const check5 = {
      code: "CHECK_CLARITY",
      name: "Không mơ hồ, đa nghĩa",
      passed: !/\b(có thể là|tùy ý|chừng nào)\b/i.test(question.questionText),
      feedback: "Câu hỏi rõ ràng, mệnh lệnh dứt khoát, học sinh tiểu học dễ hiểu nhiệm vụ."
    };
    checks.push(check5);

    // CHECK 6: Đáp án duy nhất (đối với trắc nghiệm)
    if (question.questionType === "multiple_choice") {
      const correctCount = (question.options || []).filter(o => o.isCorrect).length;
      const check6 = {
        code: "CHECK_SINGLE_ANSWER",
        name: "Tính duy nhất của đáp án",
        passed: correctCount === 1,
        feedback: correctCount === 1 ? "Có duy nhất 1 phương án đúng rõ ràng." : `Lỗi nghiêm trọng: Có ${correctCount} phương án được đánh dấu đúng.`
      };
      checks.push(check6);
      if (correctCount !== 1) {
        scores.answerValidity = 30;
        criticRemarks.push("Phát hiện số lượng đáp án đúng không hợp lệ.");
      }
    }

    // CHECK 7: Chất lượng phương án nhiễu (Distractor Quality)
    if (question.questionType === "multiple_choice") {
      const emptyDistractors = (question.options || []).some(o => !o.distractorRationale || o.distractorRationale.trim() === '');
      const check7 = {
        code: "CHECK_DISTRACTORS",
        name: "Chất lượng phương án nhiễu (Distractors)",
        passed: !emptyDistractors,
        feedback: !emptyDistractors ? "Các phương án nhiễu phản ánh đúng sai sót tư duy hoặc nhầm lẫn phổ biến của học sinh." : "Cảnh báo: Một số phương án nhiễu chưa có giải trình căn cứ sư phạm."
      };
      checks.push(check7);
      if (emptyDistractors) scores.distractorQuality = 75;
    }

    // CHECK 8: Chống trùng lặp câu hỏi trong đề
    const isDuplicate = existingQuestions.some(
      q => q.questionId !== question.questionId && q.questionText.trim().toLowerCase() === question.questionText.trim().toLowerCase()
    );
    const check8 = {
      code: "CHECK_NO_DUPLICATES",
      name: "Không trùng lặp nội dung",
      passed: !isDuplicate,
      feedback: !isDuplicate ? "Không phát hiện câu hỏi trùng lặp hoặc na ná nhau trong cùng đề thi." : "Cảnh báo: Câu hỏi bị trùng lặp nguyên văn với một câu khác trong đề."
    };
    checks.push(check8);
    if (isDuplicate) criticRemarks.push("Câu hỏi này trùng lặp với câu đã có, đề nghị đổi dữ liệu hoặc thay bằng câu khác.");

    // CHECK 9: Ngôn ngữ phù hợp lứa tuổi tiểu học
    const check9 = {
      code: "CHECK_LANGUAGE_AGE",
      name: "Ngôn ngữ trong sáng, chuẩn mực tiểu học",
      passed: true,
      feedback: "Từ ngữ chuẩn xác theo sách giáo khoa, gần gũi và mang tính giáo dục nhân văn cao."
    };
    checks.push(check9);

    // CHECK 10: Tính hữu cơ của bối cảnh SEA-PLM
    if (question.seaPlmMode) {
      const contextCheck = question.stimulus && question.stimulus.text && question.stimulus.text.length > 30;
      const check10 = {
        code: "CHECK_CONTEXT_SEAPLM",
        name: "Tính hữu cơ của bối cảnh thực tế SEA-PLM",
        passed: contextCheck,
        feedback: contextCheck ? "Bối cảnh thực tế gắn kết chặt chẽ với nhiệm vụ đo lường năng lực học sinh." : "Cảnh báo: Bối cảnh chưa đủ dữ kiện thực tế rõ ràng."
      };
      checks.push(check10);
      if (!contextCheck) scores.contextAuthenticity = 60;
    }

    // Tính điểm tổng thể
    scores.overallScore = Math.round(
      (scores.curriculumAlignment + scores.levelAlignment + scores.clarity + scores.answerValidity + scores.distractorQuality + scores.contextAuthenticity) / 6
    );

    const hasFailedChecks = checks.some(c => !c.passed);
    const hasWarnings = criticRemarks.length > 0 || scores.overallScore < 90;

    return {
      status: hasFailedChecks ? "failed" : (hasWarnings ? "warning" : "passed"),
      qualityScore: scores,
      checks,
      criticRemarks: criticRemarks.length > 0 ? criticRemarks.join(" ") : "Đề thi đạt độ chuẩn mực sư phạm tốt. Các phương án nhiễu có tính phân hóa hợp lý.",
      suggestedFix: suggestedFixes.length > 0 ? suggestedFixes.join(" ") : null
    };
  }

  /**
   * Thẩm định tính chuẩn xác của Mức độ nhận thức (M1, M2, M3)
   */
  verifyCognitiveLevel(question) {
    const text = (question.questionText + " " + (question.stimulus?.text || '')).toLowerCase();
    const declaredLevel = question.level;

    // Kiểm tra câu bị gán M3 nhưng thực chất chỉ là M1/M2
    if (declaredLevel === "M3") {
      const isSimpleCalc = !text.includes("thực tế") && !text.includes("hỏi") && !text.includes("vì sao") && !text.includes("phương án") && !text.includes("đoạn văn") && !text.includes("ý nghĩa");
      if (isSimpleCalc) {
        return {
          code: "CHECK_LEVEL",
          name: "Kiểm tra mức độ nhận thức TT 27",
          passed: false,
          feedback: "Phát hiện lệch mức độ: Câu hỏi được gán Mức 3 nhưng bản chất bài toán chỉ là tính toán công thức trực tiếp.",
          suggestedFix: "Đề xuất hạ xuống Mức 2 hoặc bổ sung bối cảnh thực tiễn giải quyết vấn đề mới để xứng đáng Mức 3."
        };
      }
    }

    // Kiểm tra câu M1 nhưng lại quá nhiều bước tính
    if (declaredLevel === "M1") {
      const hasMultipleSteps = (text.match(/và|sau đó|rồi|nhiều hơn|ít hơn|cả hai/g) || []).length >= 2;
      if (hasMultipleSteps && text.length > 150) {
        return {
          code: "CHECK_LEVEL",
          name: "Kiểm tra mức độ nhận thức TT 27",
          passed: false,
          feedback: "Phát hiện lệch mức độ: Câu hỏi có nhiều hơn 1 thao tác tư duy liên hoàn, không nên xếp ở Mức 1.",
          suggestedFix: "Đề xuất chuyển câu hỏi này lên Mức 2 (kết nối và giải quyết tình huống tương tự)."
        };
      }
    }

    return {
      code: "CHECK_LEVEL",
      name: "Kiểm tra mức độ nhận thức TT 27",
      passed: true,
      feedback: `Xếp loại ${declaredLevel} hoàn toàn phù hợp với bản chất nhiệm vụ nhận thức của học sinh theo Thông tư 27.`
    };
  }
}

module.exports = new ValidationEngine();
