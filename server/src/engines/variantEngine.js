/**
 * Variant & Shuffle Engine: Tạo các mã đề thi tương đương (Mã đề 101, 102, 103, 104)
 * Đảm bảo 100% tính tương đương về mức độ nhận thức và yêu cầu cần đạt
 */

class VariantEngine {
  /**
   * Tạo danh sách các mã đề từ một đề gốc
   */
  generateVariants(baseExam, variantCodes = [101, 102, 103, 104]) {
    const variants = [];

    variantCodes.forEach(code => {
      const clonedQuestions = JSON.parse(JSON.stringify(baseExam.questions));

      // 1. Tách nhóm câu hỏi theo dạng hoặc mức độ để đảo trật tự hợp lý (tránh xáo trộn làm rối học sinh tiểu học)
      // Thường học sinh tiểu học làm: Phần I Trắc nghiệm (M1 -> M2), Phần II Tự luận (M1 -> M2 -> M3)
      const mcQuestions = clonedQuestions.filter(q => q.questionType !== "constructed_response");
      const crQuestions = clonedQuestions.filter(q => q.questionType === "constructed_response");

      // Đảo thứ tự câu trắc nghiệm bằng thuật toán xáo trộn giả ngẫu nhiên có hạt giống theo mã đề
      const shuffledMc = this.seededShuffle(mcQuestions, code);

      // Đảo phương án A, B, C, D của các câu trắc nghiệm và cập nhật đáp án đúng
      shuffledMc.forEach(q => {
        if (q.options && q.options.length > 0) {
          const shuffledOptions = this.seededShuffle(q.options, code + 7);
          const optionLetters = ["A", "B", "C", "D", "E"];
          shuffledOptions.forEach((opt, idx) => {
            opt.id = optionLetters[idx];
          });
          const newCorrect = shuffledOptions.find(opt => opt.isCorrect);
          if (newCorrect) {
            q.correctAnswer = newCorrect.id;
          }
          q.options = shuffledOptions;
        }
      });

      // Ghép lại danh sách câu hỏi hoàn chỉnh cho mã đề
      const finalQuestions = [...shuffledMc, ...crQuestions];
      finalQuestions.forEach((q, idx) => {
        q.itemNumber = idx + 1;
      });

      variants.push({
        variantCode: String(code),
        examTitle: `${baseExam.title || 'ĐỀ KIỂM TRA ĐỊNH KỲ'} - MÃ ĐỀ ${code}`,
        schoolName: baseExam.schoolName,
        grade: baseExam.grade,
        subject: baseExam.subject,
        semester: baseExam.semester,
        durationMinutes: baseExam.durationMinutes,
        totalPoints: baseExam.totalPoints,
        questions: finalQuestions,
        matrix: baseExam.matrix,
        specifications: baseExam.specifications,
        createdAt: new Date().toISOString()
      });
    });

    return variants;
  }

  seededShuffle(array, seed) {
    const arr = [...array];
    let m = arr.length, t, i;
    let s = seed;
    while (m) {
      s = (s * 9301 + 49297) % 233280;
      i = Math.floor((s / 233280) * m--);
      t = arr[m];
      arr[m] = arr[i];
      arr[i] = t;
    }
    return arr;
  }
}

module.exports = new VariantEngine();
