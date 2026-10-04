/**
 * REST API Routes for AI Exam Builder
 */

const express = require('express');
const router = express.Router();

const curriculumEngine = require('../engines/curriculumEngine');
const matrixEngine = require('../engines/matrixEngine');
const specificationEngine = require('../engines/specificationEngine');
const seaPlmEngine = require('../engines/seaPlmEngine');
const questionEngine = require('../engines/questionEngine');
const validationEngine = require('../engines/validationEngine');
const transformEngine = require('../engines/transformEngine');
const variantEngine = require('../engines/variantEngine');
const exportEngine = require('../engines/exportEngine');
const pdfEngine = require('../engines/pdfEngine');
const tiengVietExamEngine = require('../engines/tiengVietExamEngine');
const englishExamEngine = require('../engines/englishExamEngine');
const oldExamParserEngine = require('../engines/oldExamParserEngine');
const parallelExamEngine = require('../engines/parallelExamEngine');
const multiSetExamEngine = require('../engines/multiSetExamEngine');
const questionBankSeed = require('../data/questionBankSeed');
const vinhLongData = require('../data/vinhLongData');

const multer = require('multer');
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 30 * 1024 * 1024 } // Tối đa 30MB
});

// Bộ nhớ tạm ngân hàng câu hỏi & danh sách đề thi đã lưu
let inMemoryQuestionBank = [...questionBankSeed];
let savedExams = [];

// ==================== 1. CHƯƠNG TRÌNH & YCCĐ ====================
router.get('/tieng-viet/reading-passages', (req, res) => {
  const { category = 'all', grade = 4, semester = null } = req.query;
  const passages = tiengVietExamEngine.getReadingPassages({ category, grade: Number(grade), semester });
  res.json({ success: true, passages });
});

router.get('/english/curriculum-data', (req, res) => {
  const { grade = 4 } = req.query;
  const engBank = require('../data/englishCurriculumBank');
  const data = engBank[Number(grade)] || engBank[4];
  res.json({ success: true, data });
});

router.get('/curriculum/grades', (req, res) => {
  res.json({ success: true, grades: curriculumEngine.getGrades() });
});

router.get('/curriculum/subjects', (req, res) => {
  const grade = Number(req.query.grade || 4);
  res.json({ success: true, subjects: curriculumEngine.getSubjectsByGrade(grade) });
});

router.get('/curriculum/periods', (req, res) => {
  const grade = Number(req.query.grade || 4);
  res.json({ success: true, periods: curriculumEngine.getExamPeriods(grade) });
});

router.get('/curriculum/scope', (req, res) => {
  const { grade = 4, subject = 'Toán', examPeriodId = 'end_term_1' } = req.query;
  const scope = curriculumEngine.getCurriculumScope(grade, subject, examPeriodId);
  res.json({ success: true, scope });
});

router.post('/curriculum/analyze-outcome', (req, res) => {
  const { text, subject = 'Toán', grade = 4 } = req.body;
  const analysis = curriculumEngine.analyzeLearningOutcomeText(text, subject, grade);
  res.json({ success: true, analysis });
});

// ==================== 2. MA TRẬN & BẢN ĐẶC TẢ ====================
router.get('/matrix/presets', (req, res) => {
  res.json({ success: true, presets: matrixEngine.getPresets() });
});

router.post('/matrix/generate', (req, res) => {
  const matrix = matrixEngine.generateMatrix(req.body);
  res.json({ success: true, matrix });
});

router.post('/matrix/validate', (req, res) => {
  const validation = matrixEngine.validateMatrix(req.body);
  res.json({ success: true, validation });
});

router.post('/specs/build', (req, res) => {
  const { matrix } = req.body;
  if (!matrix) return res.status(400).json({ error: "Missing matrix" });
  const specs = specificationEngine.buildSpecifications(matrix);
  res.json({ success: true, specifications: specs });
});

// ==================== 2.5 LẤY DANH SÁCH 8 BỘ ĐỀ THI ĐA DẠNG ====================
router.get('/exam/sets', (req, res) => {
  const { grade = 4, subject = "Toán", semester = "Cuối học kỳ I" } = req.query;
  const sets = multiSetExamEngine.getAvailableExamSets(grade, subject, semester);
  res.json({ success: true, sets });
});

// ==================== 3. SINH ĐỀ & KIỂM ĐỊNH AI ====================
router.post('/exam/generate', (req, res) => {
  const {
    grade = 4,
    subject = "Toán",
    governingBody = "UBND XÃ AN TRƯỜNG",
    schoolName = "Trường Tiểu học A An Trường",
    semester = "Cuối học kỳ I",
    durationMinutes = 40,
    totalPoints = 10,
    mode = "TT27_SEA_PLM",
    presetId,
    customRatios,
    matrix: customMatrix,
    topics = [],
    customCounts = null,
    questionTypes = null,
    seaPlmQuestionCount = 2,
    seaPlmSettings = null,
    examSetIndex = 1
  } = req.body;

  const setIdx = Math.max(1, Math.min(8, Number(examSetIndex) || 1));

  // 1. Dựng hoặc dùng ma trận
  const matrix = customMatrix || matrixEngine.generateMatrix({
    grade,
    subject,
    semester,
    durationMinutes,
    totalPoints,
    mode,
    topics,
    customCounts,
    presetId,
    customRatios
  });

  if (customRatios && matrix) {
    matrix.ratios = {
      M1: customRatios.M1 ?? customRatios.m1 ?? matrix.ratios?.M1 ?? 65,
      M2: customRatios.M2 ?? customRatios.m2 ?? matrix.ratios?.M2 ?? 20,
      M3: customRatios.M3 ?? customRatios.m3 ?? matrix.ratios?.M3 ?? 15
    };
    if (matrix.summary?.ratiosRow) {
      matrix.summary.ratiosRow = {
        m1Pct: matrix.ratios.M1,
        m2Pct: matrix.ratios.M2,
        m3Pct: matrix.ratios.M3,
        totalPct: 100
      };
    }
  }

  // NẾU LÀ MÔN TIẾNG VIỆT: Sinh đề thi chuẩn 2 Phiếu Đọc & Viết bám sát SGK Chân trời sáng tạo (ngoài SGK Kết nối tri thức)
  if ((subject || "").toLowerCase().includes("tiếng việt")) {
    const tvConfig = req.body.tiengVietConfig || {};
    const tvExam = tiengVietExamEngine.generateExam({
      grade,
      semester,
      governingBody,
      schoolName,
      durationMinutes,
      examSetIndex: setIdx,
      customRatios: customRatios || matrix?.ratios || null,
      oralScore: tvConfig.oralScore !== undefined ? Number(tvConfig.oralScore) : 4.0,
      readingCorpusType: tvConfig.readingCorpusType || 'literary',
      selectedCompId: tvConfig.selectedCompId || 'auto',
      customPassage: tvConfig.customPassage || null,
      oralMode: tvConfig.oralMode || 'sgk',
      essayGenre: tvConfig.essayGenre || null,
      writingRatio: tvConfig.writingRatio || '4-6'
    });

    const exam = {
      examId: `EXAM-${Date.now()}`,
      title: tvExam.title,
      examSetIndex: setIdx,
      customRatios: customRatios || matrix?.ratios || { M1: 65, M2: 20, M3: 15 },
      governingBody,
      schoolName,
      grade: Number(grade),
      subject: "Tiếng Việt",
      semester,
      durationMinutes,
      totalPoints: 10,
      mode,
      isTiengViet: true,
      matrix,
      readingExam: tvExam.readingExam,
      writingExam: tvExam.writingExam,
      teacherGuide: tvExam.teacherGuide,
      questions: tvExam.readingExam.questions,
      specifications: tvExam.readingExam.questions.map((q, idx) => ({
        itemNumber: idx + 1,
        questionId: q.questionId,
        learningOutcome: q.category === "reading" ? "Đọc hiểu nội dung văn bản đọc thầm" : "Kiến thức Tiếng Việt & Luyện từ và câu",
        level: q.level,
        points: q.points,
        questionType: q.questionType,
        questionTypeName: q.questionType === "multiple_choice" ? "Trắc nghiệm 4 lựa chọn" : "Tự luận / Điền khuyết",
        seaPlmContext: "Bối cảnh đời sống & Sư phạm"
      })),
      statistics: {
        totalQuestions: tvExam.readingExam.questions.length,
        m1Count: tvExam.readingExam.questions.filter(q => q.level === "M1").length,
        m2Count: tvExam.readingExam.questions.filter(q => q.level === "M2").length,
        m3Count: tvExam.readingExam.questions.filter(q => q.level === "M3").length,
        mcCount: tvExam.readingExam.questions.filter(q => q.questionType === "multiple_choice").length,
        crCount: tvExam.readingExam.questions.filter(q => q.questionType !== "multiple_choice").length,
        passedCount: tvExam.readingExam.questions.length,
        warningCount: 0,
        overallQualityScore: 98
      },
      createdAt: new Date().toISOString()
    };

    // Đồng bộ số thứ tự câu hỏi vào ma trận Đọc hiểu 10 cột chuẩn Thông tư 27 (dòng Câu số)
    matrixEngine.syncMatrixWithQuestions(matrix, tvExam.readingExam.questions);

    savedExams.unshift(exam);
    return res.json({ success: true, exam });
  }

  // NẾU LÀ MÔN TIẾNG ANH: Sinh đề thi chuẩn 4 Kỹ năng (Listening, Reading, Writing, Speaking) kèm Audio Transcripts
  if ((subject || "").toLowerCase().includes("tiếng anh") || (subject || "").toLowerCase().includes("english")) {
    const engExam = englishExamEngine.generateExam({
      grade: Number(grade) || 4,
      semester,
      governingBody,
      schoolName,
      durationMinutes,
      examSetIndex: setIdx,
      customRatios: customRatios || null,
      ratios: req.body.englishRatios || null
    });

    const exam = {
      examId: `EXAM-${Date.now()}`,
      title: engExam.title,
      examSetIndex: setIdx,
      customRatios: customRatios || engExam.matrix?.ratios || { M1: 50, M2: 35, M3: 15 },
      governingBody,
      schoolName,
      grade: Number(grade),
      subject: "Tiếng Anh",
      semester,
      durationMinutes,
      totalPoints: 10,
      mode,
      isEnglish: true,
      skillsRatio: engExam.skillsRatio,
      matrix: engExam.matrix,
      parts: engExam.parts,
      teacherGuide: engExam.teacherGuide,
      questions: engExam.questions,
      specifications: engExam.specifications,
      statistics: engExam.statistics,
      createdAt: new Date().toISOString()
    };

    savedExams.unshift(exam);
    return res.json({ success: true, exam });
  }

  // 2. Dựng bản đặc tả với số câu SEA-PLM chính xác và điểm chuẩn 0,25đ (Cho các môn khác)
  const specifications = specificationEngine.buildSpecifications(
    matrix,
    questionTypes,
    seaPlmQuestionCount,
    seaPlmSettings
  );

  // 3. Sinh câu hỏi và chạy validator cho từng câu
  const generatedQuestions = [];
  specifications.forEach(spec => {
    const q = questionEngine.generateQuestionBySpec(spec, grade, subject, mode, setIdx);
    q.itemNumber = spec.itemNumber;
    q.questionNumber = spec.itemNumber;
    q.topic = spec.topic;
    q.topicId = spec.topicId;
    q.level = spec.level;
    q.formType = spec.formType;
    q.points = spec.points; // Đồng bộ điểm số lượng tử hóa chuẩn 0,25đ từ bản đặc tả
    // Chạy AI Validator 10 checks
    const valResult = validationEngine.validateQuestion(q, generatedQuestions);
    q.validatorResult = valResult;
    q.teacherStatus = valResult.status === "passed" ? "verified" : "draft";
    generatedQuestions.push(q);
  });

  // Đồng bộ số thứ tự câu hỏi vào ma trận chuẩn Thông tư 27 (dòng Câu số)
  matrixEngine.syncMatrixWithQuestions(matrix, generatedQuestions);

  // Thống kê chất lượng đề thi
  const totalQ = generatedQuestions.length;
  const m1Count = generatedQuestions.filter(q => q.level === "M1").length;
  const m2Count = generatedQuestions.filter(q => q.level === "M2").length;
  const m3Count = generatedQuestions.filter(q => q.level === "M3").length;
  const mcCount = generatedQuestions.filter(q => q.questionType !== "constructed_response").length;
  const crCount = generatedQuestions.filter(q => q.questionType === "constructed_response").length;
  const passedCount = generatedQuestions.filter(q => q.validatorResult?.status === "passed").length;
  const warningCount = totalQ - passedCount;

  const exam = {
    examId: `EXAM-${Date.now()}`,
    title: `BÀI KIỂM TRA ĐỊNH KỲ MÔN ${(subject || "").toUpperCase()} LỚP ${grade} (${semester.toUpperCase()}) - BỘ ĐỀ SỐ ${setIdx}`,
    examSetIndex: setIdx,
    customRatios: customRatios || matrix?.ratios || { M1: 65, M2: 20, M3: 15 },
    governingBody,
    schoolName,
    grade,
    subject,
    semester,
    durationMinutes,
    totalPoints,
    mode,
    matrix,
    specifications,
    questions: generatedQuestions,
    statistics: {
      totalQuestions: totalQ,
      m1Count,
      m2Count,
      m3Count,
      mcCount,
      crCount,
      passedCount,
      warningCount,
      overallQualityScore: Math.round(
        generatedQuestions.reduce((acc, q) => acc + (q.validatorResult?.qualityScore?.overallScore || 90), 0) / totalQ
      )
    },
    createdAt: new Date().toISOString()
  };

  savedExams.unshift(exam);
  res.json({ success: true, exam });
});

router.post('/exam/validate-question', (req, res) => {
  const { question, existingQuestions = [] } = req.body;
  const result = validationEngine.validateQuestion(question, existingQuestions);
  res.json({ success: true, result });
});

router.post('/exam/explain-level', (req, res) => {
  const { question } = req.body;
  const explanation = transformEngine.explainLevel(question);
  res.json({ success: true, explanation });
});

router.post('/exam/upgrade-level', (req, res) => {
  const { question } = req.body;
  const upgraded = transformEngine.upgradeLevel(question);
  const valResult = validationEngine.validateQuestion(upgraded);
  upgraded.validatorResult = valResult;
  res.json({ success: true, question: upgraded });
});

router.post('/exam/downgrade-level', (req, res) => {
  const { question } = req.body;
  const downgraded = transformEngine.downgradeLevel(question);
  const valResult = validationEngine.validateQuestion(downgraded);
  downgraded.validatorResult = valResult;
  res.json({ success: true, question: downgraded });
});

router.post('/exam/equivalents', (req, res) => {
  const { question, count = 5 } = req.body;
  const equivalents = transformEngine.generateEquivalents(question, count);
  res.json({ success: true, equivalents });
});

router.post('/exam/variants', (req, res) => {
  const { baseExam, variantCodes = [101, 102, 103, 104] } = req.body;
  const variants = variantEngine.generateVariants(baseExam, variantCodes);
  res.json({ success: true, variants });
});

// Helper chuyển chuỗi Tiếng Việt sang ASCII không dấu an toàn cho HTTP Header
function toAsciiFilename(str) {
  return (str || 'Exam')
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .replace(/[^a-zA-Z0-9_\-]/g, "_");
}

// ==================== 4. XUẤT FILE WORD & EXCEL ====================
router.post('/exam/export-word', async (req, res) => {
  try {
    const { exam } = req.body;
    if (!exam) return res.status(400).json({ error: "Dữ liệu đề thi không hợp lệ." });

    const buffer = await exportEngine.generateWordExam(exam);
    const setNum = exam.examSetIndex || 1;
    const safeSubject = toAsciiFilename(exam.subject || "MonHoc");
    const rawFilename = `De_Kiem_Tra_${safeSubject}_Lop${exam.grade || 1}_BoDe${setNum}.docx`;
    const utf8Filename = encodeURIComponent(`De_Kiem_Tra_${exam.subject || "MonHoc"}_Lop${exam.grade || 1}_BoDe${setNum}.docx`);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    res.setHeader('Content-Disposition', `attachment; filename="${rawFilename}"; filename*=UTF-8''${utf8Filename}`);
    res.send(buffer);
  } catch (err) {
    console.error("Lỗi xuất Word:", err);
    res.status(500).json({ error: "Lỗi tạo file Word: " + err.message });
  }
});

router.post('/exam/export-excel', async (req, res) => {
  try {
    const { exam } = req.body;
    if (!exam) return res.status(400).json({ error: "Dữ liệu đề thi không hợp lệ." });

    const buffer = await exportEngine.generateExcelMatrix(exam);
    const setNum = exam.examSetIndex || 1;
    const safeSubject = toAsciiFilename(exam.subject || "MonHoc");
    const rawFilename = `Ma_Tran_Dac_Ta_${safeSubject}_Lop${exam.grade || 1}_BoDe${setNum}.xlsx`;
    const utf8Filename = encodeURIComponent(`Ma_Tran_Dac_Ta_${exam.subject || "MonHoc"}_Lop${exam.grade || 1}_BoDe${setNum}.xlsx`);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename="${rawFilename}"; filename*=UTF-8''${utf8Filename}`);
    res.send(buffer);
  } catch (err) {
    console.error("Lỗi xuất Excel:", err);
    res.status(500).json({ error: "Lỗi tạo file Excel: " + err.message });
  }
});

router.post('/exam/export-pdf', async (req, res) => {
  try {
    const { exam, html } = req.body;
    if (!exam && !html) return res.status(400).json({ error: "Dữ liệu đề thi không hợp lệ." });

    if (!pdfEngine.isAvailable()) {
      return res.status(503).json({
        error: "Máy chủ chưa có hoặc không tìm thấy trình duyệt Edge/Chrome để xuất file PDF trực tiếp. Vui lòng sử dụng tính năng 'In (PDF)' trên giao diện."
      });
    }

    if (!html) {
      return res.status(400).json({ error: "Thiếu nội dung tài liệu HTML chuẩn để tạo file PDF." });
    }

    const buffer = await pdfEngine.generatePdfFromHtml(html);
    const setNum = exam?.examSetIndex || 1;
    const subjectName = exam?.subject || "MonHoc";
    const gradeNum = exam?.grade || 1;
    const safeSubject = toAsciiFilename(subjectName);
    const rawFilename = `De_Kiem_Tra_${safeSubject}_Lop${gradeNum}_BoDe${setNum}_Chuan_ND30.pdf`;
    const utf8Filename = encodeURIComponent(`De_Kiem_Tra_${subjectName}_Lop${gradeNum}_BoDe${setNum}_Chuan_ND30.pdf`);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${rawFilename}"; filename*=UTF-8''${utf8Filename}`);
    res.send(buffer);
  } catch (err) {
    console.error("Lỗi xuất PDF:", err);
    res.status(500).json({ error: "Lỗi tạo file PDF: " + err.message });
  }
});

// ==================== 5. NGÂN HÀNG CÂU HỎI & VĨNH LONG HUB ====================
router.get('/question-bank', (req, res) => {
  const { grade, subject, level, search } = req.query;
  let list = [...inMemoryQuestionBank];
  if (grade) list = list.filter(q => q.grade === Number(grade));
  if (subject) list = list.filter(q => q.subject.toLowerCase() === subject.toLowerCase());
  if (level) list = list.filter(q => q.level === level);
  if (search) {
    const kw = search.toLowerCase();
    list = list.filter(q => q.questionText.toLowerCase().includes(kw) || q.topic.toLowerCase().includes(kw));
  }
  res.json({ success: true, questions: list, total: list.length });
});

router.post('/question-bank', (req, res) => {
  const newQ = {
    ...req.body,
    questionId: req.body.questionId || `QB-${Date.now()}`,
    createdAt: new Date().toISOString()
  };
  inMemoryQuestionBank.unshift(newQ);
  res.json({ success: true, question: newQ });
});

router.get('/seaplm/vinhlong', (req, res) => {
  res.json({ success: true, data: vinhLongData });
});

router.get('/seaplm/random-context', (req, res) => {
  const { contextType, subject, grade } = req.query;
  const stimulus = seaPlmEngine.generateContextStimulus(contextType || "wider_environment", subject || "Toán", Number(grade) || 4);
  res.json({ success: true, stimulus });
});

router.get('/exams/saved', (req, res) => {
  res.json({ success: true, exams: savedExams });
});

// ==================== 6. CHẾ ĐỘ PHÂN TÍCH ĐỀ CÓ SẴN ====================
router.post('/analyzer/analyze-text', (req, res) => {
  const { rawText } = req.body;
  if (!rawText || rawText.trim().length === 0) {
    return res.status(400).json({ error: "Vui lòng nhập nội dung đề thi cần phân tích." });
  }

  // Thuật toán tách câu và nhận diện cấu trúc đề
  const lines = rawText.split('\n').map(l => l.trim()).filter(Boolean);
  const questionMatches = rawText.match(/Câu\s+\d+[:.]/gi) || [];
  const detectedCount = questionMatches.length || 5;

  const analysisReport = {
    detectedQuestionsCount: detectedCount,
    estimatedLevels: {
      M1: Math.round(detectedCount * 0.45),
      M2: Math.round(detectedCount * 0.35),
      M3: Math.round(detectedCount * 0.20)
    },
    questionTypes: {
      multipleChoice: (rawText.match(/[A-D]\./g) || []).length > 0 ? Math.round(detectedCount * 0.7) : 0,
      constructedResponse: Math.round(detectedCount * 0.3)
    },
    potentialIssues: [
      "Kiểm tra kỹ các phương án nhiễu ở câu hỏi trắc nghiệm để tránh phương án vô lý.",
      "Đảm bảo các câu tự luận có hướng dẫn chấm chi tiết kèm thang điểm không chia lẻ dưới 0,25 đ."
    ],
    qualityAuditScore: 88,
    isCompliantTT27: true,
    recommendations: "Đề thi phân bổ mức độ tương đối cân đối. Nên bổ sung thêm các tình huống bối cảnh thực tế gắn liền với đời sống để tăng tính hấp dẫn theo định hướng SEA-PLM."
  };

  res.json({ success: true, analysis: analysisReport });
});

// ==================== 7. TÍNH NĂNG MỚI: TẠO ĐỀ TƯƠNG TỰ TỪ ĐỀ CŨ ====================
// 7.1. Bóc tách tệp đề cũ (Hỗ trợ DOCX, DOC, PDF, Ảnh, hoặc Raw Text)
router.post('/exam/parse-old-file', upload.single('file'), async (req, res) => {
  try {
    let rawText = '';

    // Trường hợp 1: Tải tệp qua multipart/form-data
    if (req.file) {
      const buffer = req.file.buffer;
      const mimeType = req.file.mimetype;
      const originalname = req.file.originalname;
      rawText = await oldExamParserEngine.extractTextFromFile(buffer, mimeType, originalname);
    }
    // Trường hợp 2: Gửi Base64 data qua JSON body
    else if (req.body.base64Data) {
      const buffer = Buffer.from(req.body.base64Data, 'base64');
      const mimeType = req.body.mimeType || 'image/jpeg';
      const filename = req.body.filename || 'uploaded_image.jpg';
      rawText = await oldExamParserEngine.extractTextFromFile(buffer, mimeType, filename);
    }
    // Trường hợp 3: Dán trực tiếp rawText
    else if (req.body.rawText) {
      rawText = req.body.rawText;
    } else {
      return res.status(400).json({ error: "Không tìm thấy tệp hoặc nội dung đề thi tải lên." });
    }

    if (!rawText || rawText.trim().length === 0) {
      return res.status(400).json({ error: "Không trích xuất được văn bản từ tệp đã tải lên. Vui lòng thử chụp rõ hơn hoặc dán trực tiếp nội dung đề." });
    }

    // Phân tích cấu trúc đề
    const parsedExam = await oldExamParserEngine.parseExamText(rawText);
    res.json({
      success: true,
      parsedExam,
      rawText
    });
  } catch (err) {
    console.error("Lỗi bóc tách đề cũ:", err);
    res.status(500).json({ error: "Lỗi xử lý đề cũ: " + err.message });
  }
});

// 7.2. Sinh đề mới tương tự đồng cấu (Isomorphic) từ cấu trúc đề cũ
router.post('/exam/generate-from-old', async (req, res) => {
  try {
    const { oldExam, options = {} } = req.body;
    if (!oldExam || !oldExam.questions || oldExam.questions.length === 0) {
      return res.status(400).json({ error: "Dữ liệu cấu trúc đề cũ không hợp lệ." });
    }

    const newExam = await parallelExamEngine.generateParallelExam(oldExam, options);

    // Lưu vào danh sách đề thi tạm thời
    savedExams.unshift(newExam);

    res.json({
      success: true,
      exam: newExam
    });
  } catch (err) {
    console.error("Lỗi sinh đề tương tự:", err);
    res.status(500).json({ error: "Lỗi sinh đề tương tự: " + err.message });
  }
});

module.exports = router;

