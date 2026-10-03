/**
 * AI Prompt Engine: Xây dựng Prompt sư phạm chuẩn mực cho các mô hình AI/LLM
 * Hỗ trợ chế độ kết hợp Offline Smart Engine & Live LLM (Google Gemini / OpenAI)
 */

class AiPromptEngine {
  /**
   * Xây dựng System Prompt chuyên gia đánh giá giáo dục tiểu học
   */
  buildSystemPrompt(mode = "TT27_SEA_PLM") {
    return `Bạn là Senior AI Education Architect kiêm Chuyên gia đo lường đánh giá giáo dục tiểu học Việt Nam, nắm vững:
1. Chương trình GDPT 2018 (bộ sách Kết nối tri thức với cuộc sống).
2. Thông tư 27/2020/TT-BGDĐT về đánh giá học sinh tiểu học:
   - Mức 1: Nhận biết, nhắc lại, mô tả trực tiếp, giải quyết tình huống quen thuộc 1 thao tác.
   - Mức 2: Kết nối, sắp xếp, phối hợp kiến thức giải quyết vấn đề tương tự (đa bước).
   - Mức 3: Vận dụng kiến thức vào tình huống mới, phân tích dữ liệu thực tế, giải thích/phản hồi hợp lý.
3. Chuẩn đo lường quốc tế SEA-PLM: Đặt câu hỏi vào bối cảnh thực tế (cá nhân, nhà trường, địa phương), sử dụng văn bản liên tục và phi liên tục, phương án nhiễu phản ánh sai sót tư duy phổ biến.
4. Tuyệt đối không bịa đặt nội dung ngoài phạm vi đã dạy, không gán sai mức độ, ngôn ngữ trong sáng phù hợp tâm sinh lý lứa tuổi tiểu học.`;
  }

  /**
   * Xây dựng Prompt sinh câu hỏi theo yêu cầu chi tiết
   */
  buildQuestionPrompt({
    grade,
    subject,
    topic,
    lesson,
    learningOutcome,
    level,
    questionType,
    points,
    seaPlmMode,
    localContextVinhLong
  }) {
    return `Hãy biên soạn 01 câu hỏi kiểm tra tiểu học theo thông số sau:
- Khối lớp: Lớp ${grade}
- Môn học: ${subject}
- Chủ đề: ${topic}
- Bài học: ${lesson || topic}
- Yêu cầu cần đạt: ${learningOutcome}
- Mức độ nhận thức: ${level} (theo chuẩn TT 27)
- Dạng câu hỏi: ${questionType}
- Điểm số: ${points} điểm
- Chế độ SEA-PLM: ${seaPlmMode ? 'BẬT (sử dụng bối cảnh thực tế)' : 'TẮT'}
- Ngữ cảnh địa phương: ${localContextVinhLong ? 'Tỉnh Vĩnh Long mới (124 xã phường, nông sản bưởi Năm Roi, dừa sáp, gốm Mang Thít, sông Cổ Chiên)' : 'Tổng quát'}

Yêu cầu xuất ra định dạng JSON:
{
  "questionText": "...",
  "stimulus": { "text": "..." },
  "options": [
    { "id": "A", "text": "...", "isCorrect": false, "distractorRationale": "..." },
    ...
  ],
  "correctAnswer": "...",
  "scoringGuide": {
    "maxPoints": ${points},
    "rubric": [{ "criteria": "...", "points": ..., "description": "..." }],
    "commonMistakes": ["..."]
  },
  "levelRationale": {
    "cognitiveTask": "...",
    "whyNotLower": "...",
    "whyNotHigher": "..."
  }
}`;
  }

  /**
   * Prompt AI Phản biện "Giáo viên khó tính"
   */
  buildCriticPrompt(question) {
    return `Bạn là một Giáo viên tiểu học khó tính chuyên phản biện đề thi. Hãy soi thật kỹ câu hỏi sau:
Nội dung câu hỏi: ${question.questionText}
Dữ kiện/Tình huống: ${question.stimulus?.text || 'Không có'}
Mức độ gán: ${question.level}
Đáp án: ${question.correctAnswer}

Hãy tìm:
1. Có đáp án thứ hai không?
2. Có lỗi tính toán hay logic không?
3. Câu hỏi có mơ hồ, hiểu theo 2 nghĩa không?
4. Mức độ gán có bị lệch (dễ hơn hoặc khó hơn thực tế) không?
5. Phương án nhiễu có quá dễ đoán hoặc ngớ ngẩn không?

Trả về JSON:
{
  "hasIssue": true/false,
  "criticComment": "...",
  "suggestedImprovement": "..."
}`;
  }
}

module.exports = new AiPromptEngine();
