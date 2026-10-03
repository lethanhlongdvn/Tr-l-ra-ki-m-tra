/**
 * TIẾNG VIỆT EXAM ENGINE (CHUẨN THÔNG TƯ 27/2020 & GDPT 2018)
 * Nguồn ngữ liệu: BỘ SÁCH TIẾNG VIỆT CHÂN TRỜI SÁNG TẠO (CTST)
 * (Theo quy định TT27: Không lấy ngữ liệu trong SGK Kết nối tri thức là bộ sách chính khóa của trường)
 * Tách biệt 2 Phiếu riêng:
 *   1. Phiếu Đề Đọc (10đ): Đọc thành tiếng (4đ hoặc 3đ) + Đọc hiểu & Luyện từ và câu (6đ hoặc 7đ)
 *   2. Phiếu Đề Viết (10đ): 
 *      - Lớp 1, 2, 3: Chính tả + Viết đoạn văn (tỷ lệ linh hoạt: 4-6, 3-7, 5-5)
 *      - Lớp 4, 5: Bài văn hoàn chỉnh (10đ) kèm Barem 5 tiêu chí
 * Hỗ trợ 4 định hướng ngữ liệu Đọc hiểu chuẩn đánh giá quốc tế SEA-PLM:
 *   - literary: Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK Chân trời sáng tạo) (22 bài phong phú)
 *   - informational_vinhlong: Văn bản thông tin thực tế / Địa phương Vĩnh Long (124 xã/phường) (5 bài)
 *   - non_continuous_seaplm: Văn bản không liên tục / Hỗn hợp (Bảng biểu, sơ đồ chuẩn SEA-PLM) (2 bài)
 *   - custom: Tự nhập ngữ liệu đọc hiểu tùy chỉnh của giáo viên
 */

const TV_CTST_BANK = require('../data/tiengVietCtstBank');
const passageBank = require('../data/tiengVietPassageBank');

/**
 * Hàm xáo trộn mảng ngẫu nhiên (Fisher-Yates shuffle)
 */
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

class TiengVietExamEngine {
  /**
   * Sinh đề thi môn Tiếng Việt chuẩn Thông tư 27
   */
  generateExam({
    grade = 4,
    semester = "Cuối học kỳ I",
    governingBody = "UBND XÃ AN TRƯỜNG",
    schoolName = "Trường Tiểu học A An Trường",
    oralScore = 4.0,
    durationMinutes = 40,
    readingCorpusType = 'literary',
    selectedCompId = 'auto',
    customPassage = null,
    oralMode = 'sgk',
    essayGenre = null,
    writingRatio = '4-6',
    examSetIndex = 1,
    customRatios = null
  }) {
    const g = Number(grade) || 4;
    const setIdx = Math.max(1, Math.min(8, Number(examSetIndex) || 1));
    const setOffset = setIdx - 1;
    const gradeData = TV_CTST_BANK[g] || TV_CTST_BANK[4];
    const compScore = Math.round((10.0 - oralScore) * 10) / 10;
    const isPrimaryLow = g <= 3;

    // Phân tích học kỳ: 1 (HK1 / Tập 1) hoặc 2 (HK2 / Cuối năm / Tập 2)
    const semStr = String(semester || '').toLowerCase();
    const isSem2 = semStr.includes('ii') || semStr.includes('2') || semStr.includes('cuối năm');
    const targetVolume = isSem2 ? 'Tập 2' : 'Tập 1';
    const targetSemNum = isSem2 ? 2 : 1;

    // 1. XỬ LÝ PHẦN ĐỌC THÀNH TIẾNG (BỐC THĂM 5 BÀI NGẪU NHIÊN THEO ĐÚNG HỌC KỲ)
    let selectedOralItems = [];
    const poolForSemester = (gradeData.oralPool || []).filter(item => 
      item.bookVolume === targetVolume || (isSem2 ? item.semester === 2 : item.semester === 1)
    );
    const effectiveOralPool = poolForSemester.length >= 5 ? poolForSemester : (gradeData.oralPool || []);
    const shuffledOralPool = shuffleArray(effectiveOralPool);

    if (oralMode === 'custom') {
      // 1 bài đọc tương tự ngoài SGK
      const singleItem = shuffledOralPool[0] || {
        id: `TV${g}-ORAL-CUSTOM`,
        title: "Bài đọc luyện đọc thành tiếng ngoài SGK",
        bookVolume: targetVolume,
        page: "Ngữ liệu mở rộng",
        passage: "Mùa xuân về trên khắp các nẻo đường quê hương...",
        wordCount: 80,
        question: "Đoạn văn miêu tả cảnh đẹp của mùa nào trong năm?",
        answer: "Đoạn văn miêu tả cảnh đẹp mùa xuân."
      };
      selectedOralItems = [singleItem];
    } else {
      // Mặc định bốc thăm 5 bài ngẫu nhiên đúng giai đoạn học kỳ (Tập 1 hoặc Tập 2)
      selectedOralItems = shuffledOralPool.slice(0, 5);
      if (selectedOralItems.length === 0 && gradeData.oralPool) {
        selectedOralItems = gradeData.oralPool.slice(0, 5);
      }
    }

    // 2. XỬ LÝ PHẦN ĐỌC HIỂU & LUYỆN TỪ VÀ CÂU (THEO 4 ĐỊNH HƯỚNG NGỮ LIỆU SEA-PLM)
    let selectedComp = null;

    // TH 1: Người dùng tự nhập ngữ liệu tùy chỉnh
    if (readingCorpusType === 'custom' && customPassage && customPassage.passage && customPassage.passage.trim()) {
      const custTitle = (customPassage.title || "Văn bản đọc hiểu tùy chọn").trim();
      const custAuthor = (customPassage.author || "Tác giả sưu tầm").trim();
      const custText = customPassage.passage.trim();

      selectedComp = {
        id: `CUSTOM-${Date.now()}`,
        category: 'custom',
        categoryName: 'Văn bản tùy chỉnh do giáo viên cung cấp',
        title: custTitle,
        author: custAuthor,
        passage: custText,
        theme: "Ngữ liệu tự chọn",
        questions: [
          {
            num: 1,
            type: "mcq",
            category: "reading",
            level: "M1",
            score: 0.5,
            text: `Nội dung chính được thể hiện xuyên suốt trong văn bản "${custTitle}" là gì?`,
            options: [
              { id: "A", text: "Ca ngợi vẻ đẹp thiên nhiên, con người và bồi đắp những tình cảm tốt đẹp" },
              { id: "B", text: "Miêu tả cuộc sống nhộn nhịp nơi phố thị sầm uất" },
              { id: "C", text: "Kể về chuyến thám hiểm các vùng đất xa xôi" },
              { id: "D", text: "Giải thích các hiện tượng thời tiết bất thường" }
            ],
            ans: "A",
            explain: "Chi tiết thể hiện rõ qua nội dung và tư tưởng chủ đạo của bài đọc."
          },
          {
            num: 2,
            type: "mcq",
            category: "reading",
            level: "M1",
            score: 0.5,
            text: "Hình ảnh hoặc chi tiết nổi bật nào ở phần đầu bài đọc gợi mở cảm xúc cho câu chuyện?",
            options: [
              { id: "A", text: "Hình ảnh mộc mạc, gần gũi gắn liền với cảnh vật và hoạt động của nhân vật" },
              { id: "B", text: "Một sự kiện kì lạ không có thật" },
              { id: "C", text: "Cơn bão lớn làm thay đổi cảnh vật" },
              { id: "D", text: "Tiếng chuông đồng hồ báo thức" }
            ],
            ans: "A",
            explain: "Hình ảnh mở đầu giúp khắc họa chân thực bối cảnh và cảm xúc nhân vật."
          },
          {
            num: 3,
            type: "mcq",
            category: "reading",
            level: "M2",
            score: 1.0,
            text: "Qua diễn biến của bài đọc, em nhận thấy nhân vật hoặc thông điệp văn bản mang ý nghĩa gì?",
            options: [
              { id: "A", text: "Khuyên con người nên sống vị tha, chăm chỉ và biết ơn những điều tốt đẹp" },
              { id: "B", text: "Nên làm việc độc lập mà không cần sự giúp đỡ của ai" },
              { id: "C", text: "Chỉ nên tin tưởng vào những điều kỳ lạ" },
              { id: "D", text: "Ưu tiên việc vui chơi giải trí hơn việc học tập" }
            ],
            ans: "A",
            explain: "Thông điệp tích cực hướng học sinh đến lối sống nhân ái, có trách nhiệm."
          },
          {
            num: 4,
            type: "mcq",
            category: "language",
            level: "M1",
            score: 0.5,
            text: "Các từ chỉ tính chất, phẩm chất được tác giả sử dụng trong văn bản thuộc từ loại nào?",
            options: [
              { id: "A", text: "Danh từ" },
              { id: "B", text: "Động từ" },
              { id: "C", text: "Tính từ" },
              { id: "D", text: "Đại từ" }
            ],
            ans: "C",
            explain: "Tính từ là những từ chỉ đặc điểm, tính chất của sự vật, hoạt động, trạng thái."
          },
          {
            num: 5,
            type: "mcq",
            category: "language",
            level: "M2",
            score: 1.0,
            text: "Tác dụng của các biện pháp nghệ thuật (so sánh, nhân hóa...) được dùng trong bài đọc là gì?",
            options: [
              { id: "A", text: "Làm cho câu văn thêm phần sinh động, gợi hình và truyền cảm sâu sắc" },
              { id: "B", text: "Làm cho câu văn trở nên phức tạp khó hiểu" },
              { id: "C", text: "Thay thế cho việc diễn đạt ý nghĩa chính" },
              { id: "D", text: "Giúp bài viết đạt đủ số lượng từ quy định" }
            ],
            ans: "A",
            explain: "Biện pháp tu từ giúp tăng sức gợi hình, gợi cảm cho sự diễn đạt."
          },
          {
            num: 6,
            type: "essay",
            category: "language",
            level: "M2",
            score: 1.0,
            text: `Tìm trong văn bản "${custTitle}" 2 từ chỉ hoạt động hoặc đặc điểm nổi bật và đặt 1 câu với một trong các từ vừa tìm được.`,
            solution: "- Tìm đúng 2 từ chỉ hoạt động hoặc đặc điểm trong bài (0,5đ).\n- Đặt câu hoàn chỉnh ngữ pháp, có nghĩa rõ ràng, đúng chính tả (0,5đ).",
            rubric: [{ criteria: "Đúng từ và đặt câu chuẩn", points: 1.0, description: "Tìm đúng từ và viết câu hoàn chỉnh." }]
          },
          {
            num: 7,
            type: "essay",
            category: "language",
            level: "M3",
            score: 1.5,
            text: `Từ bài học trong văn bản "${custTitle}", em hãy viết đoạn văn ngắn (2 đến 3 câu) nêu bài học ý nghĩa em rút ra được cho bản thân trong học tập hoặc cuộc sống.`,
            solution: "Học sinh tự liên hệ thực tế: Nêu bài học sâu sắc (lòng kiên trì, tình yêu thiên nhiên, lòng hiếu thảo, tinh thần trách nhiệm...), diễn đạt mạch lạc, không sai lỗi chính tả.",
            rubric: [
              { criteria: "Nội dung bài học sâu sắc", points: 1.0, description: "Nêu được bài học đạo đức, liên hệ bản thân phù hợp." },
              { criteria: "Hình thức đoạn văn", points: 0.5, description: "Viết đúng 2-3 câu, chữ viết rõ ràng, không lỗi chính tả." }
            ]
          }
        ]
      };
    }

    // TH 2: Chọn đích danh 1 bài theo ID
    if (!selectedComp && selectedCompId && selectedCompId !== 'auto') {
      selectedComp = passageBank.getPassageById(selectedCompId);
      if (!selectedComp && gradeData.compPool) {
        selectedComp = gradeData.compPool.find(p => p.id === selectedCompId);
      }
    }

    // TH 3: Tự động chọn ngẫu nhiên theo định hướng ngữ liệu (readingCorpusType)
    if (!selectedComp) {
      let pool = [];
      if (readingCorpusType === 'informational_vinhlong') {
        pool = passageBank.VINHLONG_INFO_PASSAGES;
      } else if (readingCorpusType === 'non_continuous_seaplm') {
        pool = passageBank.NON_CONTINUOUS_SEAPLM_PASSAGES;
      } else {
        // Mặc định là literary (Văn bản nghệ thuật CTST) - Ưu tiên chọn đúng theo giai đoạn học kỳ
        const gradeMatches = passageBank.LITERARY_PASSAGES.filter(p => {
          const matchGrade = !p.suitableGrades || p.suitableGrades.includes(g) || p.grade === g;
          const matchSem = !p.semester || p.semester === targetSemNum;
          return matchGrade && matchSem;
        });
        pool = gradeMatches.length > 0 ? gradeMatches : passageBank.LITERARY_PASSAGES.filter(p => !p.suitableGrades || p.suitableGrades.includes(g));
      }

      if (pool.length > 0) {
        selectedComp = pool[setOffset % pool.length];
      } else if (gradeData.compPool && gradeData.compPool.length > 0) {
        selectedComp = gradeData.compPool[setOffset % gradeData.compPool.length];
      } else {
        selectedComp = passageBank.LITERARY_PASSAGES[0];
      }
    }

    // 3. CHỌN NGẪU NHIÊN HOẶC THEO CẤU HÌNH ĐỀ BÀI VIẾT
    let selectedDictation = null;
    let selectedParagraph = null;
    let selectedEssay = null;

    // Xác định điểm thành phần bài Viết lớp 1-3 theo writingRatio
    let dictationScore = 4.0;
    let paragraphScore = 6.0;
    if (writingRatio === '3-7') {
      dictationScore = 3.0;
      paragraphScore = 7.0;
    } else if (writingRatio === '5-5') {
      dictationScore = 5.0;
      paragraphScore = 5.0;
    }

    if (isPrimaryLow) {
      const dPool = gradeData.dictationPool || [];
      selectedDictation = dPool.length > 0 ? dPool[setOffset % dPool.length] : null;
      const pPool = gradeData.paragraphPool || [];
      selectedParagraph = pPool.length > 0 ? pPool[setOffset % pPool.length] : null;
    } else {
      const ePool = gradeData.essayPool || [];
      if (essayGenre) {
        const found = ePool.find(e => e.genre && e.genre.toLowerCase().includes(essayGenre.toLowerCase()));
        if (found) {
          selectedEssay = found;
        }
      }
      if (!selectedEssay) {
        selectedEssay = ePool.length > 0 ? ePool[setOffset % ePool.length] : null;
      }
      // Nếu có essayGenre cụ thể từ giáo viên nhưng trong bank chưa có đúng tên
      if (selectedEssay && essayGenre && !selectedEssay.genre.includes(essayGenre)) {
        selectedEssay = {
          ...selectedEssay,
          genre: essayGenre
        };
      }
    }

    // 4. CHUẨN HÓA DANH SÁCH CÂU HỎI CHO PHẦN ĐỌC HIỂU & LUYỆN TỪ VÀ CÂU
    const rawQuestions = selectedComp.questions || [];
    const quantizePoint = (val) => Math.max(0.25, Math.round(val * 4) / 4);

    // Tính điểm từng câu hỏi theo chuẩn compScore (6.0đ hoặc 7.0đ) và customRatios nếu có
    let questionPoints = [];
    if (customRatios) {
      const rM1 = customRatios.M1 ?? customRatios.m1 ?? 65;
      const rM2 = customRatios.M2 ?? customRatios.m2 ?? 20;
      const rM3 = customRatios.M3 ?? customRatios.m3 ?? 15;

      let targetM1 = quantizePoint((rM1 * compScore) / 100);
      let targetM2 = quantizePoint((rM2 * compScore) / 100);
      let targetM3 = Number((compScore - targetM1 - targetM2).toFixed(2));
      if (targetM3 <= 0) {
        targetM3 = 0.5;
        if (targetM1 > targetM2) targetM1 = Number((targetM1 - 0.5).toFixed(2));
        else targetM2 = Number((targetM2 - 0.5).toFixed(2));
      }

      const m1Indices = [];
      const m2Indices = [];
      const m3Indices = [];
      rawQuestions.forEach((q, idx) => {
        const lvl = q.level || 'M1';
        if (lvl === 'M1') m1Indices.push(idx);
        else if (lvl === 'M2') m2Indices.push(idx);
        else m3Indices.push(idx);
      });

      const dist = (indices, totalPts) => {
        if (indices.length === 0) return;
        const count = indices.length;
        let steps = Math.round(totalPts * 4);
        const baseSteps = Math.floor(steps / count);
        let rem = steps % count;
        indices.forEach((qIdx, i) => {
          const s = Math.max(1, baseSteps + (i < rem ? 1 : 0));
          questionPoints[qIdx] = Number((s * 0.25).toFixed(2));
        });
      };

      dist(m1Indices, targetM1);
      dist(m2Indices, targetM2);
      dist(m3Indices, targetM3);

      // Điều chỉnh sai số làm tròn để tổng điểm câu hỏi bằng chính xác compScore
      const actualSum = Number(questionPoints.reduce((sum, p) => sum + (p || 0), 0).toFixed(2));
      const diff = Number((compScore - actualSum).toFixed(2));
      if (Math.abs(diff) > 0.01 && questionPoints.length > 0) {
        const lastIdx = questionPoints.length - 1;
        questionPoints[lastIdx] = Math.max(0.25, Number((questionPoints[lastIdx] + diff).toFixed(2)));
      }
    } else {
      // Mặc định chuẩn sư phạm
      const isComp7Points = compScore === 7.0;
      questionPoints = rawQuestions.map((q, idx) => {
        let pts = q.score !== undefined ? q.score : 1.0;
        if (isComp7Points) {
          if (idx === rawQuestions.length - 2) pts = 1.5;
          if (idx === rawQuestions.length - 1) pts = 2.0;
        }
        return pts;
      });

      // Nếu Lớp 1 (ngân hàng có 6 câu x 1.0đ hoặc raw score 10đ), chuẩn hóa lại bằng compScore (6.0đ)
      const curSum = Number(questionPoints.reduce((sum, p) => sum + p, 0).toFixed(2));
      if (Math.abs(curSum - compScore) > 0.05) {
        if (rawQuestions.length === 6 && compScore === 6.0) {
          questionPoints = [1.0, 1.0, 1.0, 1.0, 1.0, 1.0];
        } else {
          const scale = compScore / curSum;
          questionPoints = questionPoints.map(p => quantizePoint(p * scale));
          const adjustedSum = Number(questionPoints.reduce((sum, p) => sum + p, 0).toFixed(2));
          const diff = Number((compScore - adjustedSum).toFixed(2));
          if (Math.abs(diff) > 0.01 && questionPoints.length > 0) {
            questionPoints[questionPoints.length - 1] = Math.max(0.25, Number((questionPoints[questionPoints.length - 1] + diff).toFixed(2)));
          }
        }
      }
    }

    const formattedQuestions = rawQuestions.map((q, idx) => {
      const pts = questionPoints[idx] !== undefined ? questionPoints[idx] : 1.0;
      const rubric = (q.rubric || []).map(r => ({
        criteria: r.step || r.criteria || "Tiêu chí chấm",
        points: typeof r.score === 'string' ? parseFloat(r.score.replace(',', '.')) || pts : (r.points || pts),
        description: r.description || r.detail || q.explain || ""
      }));

      const isMcq = (q.type === "mcq" || q.type === "multiple_choice");

      return {
        questionId: `TV-${g}-RD-00${idx + 1}`,
        questionNumber: idx + 1,
        itemNumber: idx + 1,
        questionText: q.text,
        prompt: q.text,
        questionType: isMcq ? "multiple_choice" : "constructed_response",
        formType: isMcq ? "TNKQ" : "TL",
        level: q.level || "M1",
        points: pts,
        options: q.options || [],
        correctAnswer: q.ans || "",
        scoringGuide: {
          maxPoints: pts,
          rubric: rubric.length > 0 ? rubric : [{ criteria: "Đúng đáp án / Yêu cầu", points: pts, description: q.explain || "" }]
        },
        explain: q.explain || (q.solution ? q.solution : ""),
        category: q.category || (idx < 3 ? 'reading' : 'language')
      };
    });

    return {
      isTiengViet: true,
      grade: g,
      examSetIndex: setIdx,
      subject: "Tiếng Việt",
      governingBody: governingBody || "UBND XÃ AN TRƯỜNG",
      schoolName: schoolName || "Trường Tiểu học A An Trường",
      title: `BÀI KIỂM TRA ĐỊNH KỲ MÔN TIẾNG VIỆT LỚP ${g} (${String(semester || 'Học kỳ 1').toUpperCase()}) - BỘ ĐỀ SỐ ${setIdx}`,
      semester: semester,
      durationMinutes: durationMinutes,
      sourceNote: "Ngữ liệu tham khảo ngoài SGK Kết nối tri thức - Trích từ bộ sách Tiếng Việt Chân trời sáng tạo (chuẩn Thông tư 27/2020/TT-BGDĐT)",
      
      // ==================== PHẦN KIỂM TRA ĐỌC (10,0 ĐIỂM) ====================
      readingExam: {
        totalScore: 10.0,
        oralScore: oralScore,
        oralMode: oralMode,
        // Danh sách bài đọc thành tiếng
        oralItems: selectedOralItems.map(item => ({
          id: item.id,
          title: item.title,
          bookVolume: item.bookVolume,
          page: item.page,
          passage: item.passage,
          wordCount: item.wordCount,
          question: item.question,
          answer: item.answer
        })),
        comprehensionScore: compScore,
        readingCorpusType: readingCorpusType,
        // Bài đọc hiểu được chọn
        comprehensionReading: {
          id: selectedComp.id,
          title: selectedComp.title,
          author: selectedComp.author,
          passage: selectedComp.passage,
          theme: selectedComp.theme,
          genre: selectedComp.genre,
          semester: selectedComp.semester || targetSemNum,
          bookVolume: selectedComp.bookVolume || targetVolume,
          wordCount: selectedComp.wordCount || (selectedComp.passage ? selectedComp.passage.trim().split(/\s+/).length : 0),
          categoryName: selectedComp.categoryName
        },
        questions: formattedQuestions
      },

      // ==================== PHẦN KIỂM TRA VIẾT (10,0 ĐIỂM) ====================
      writingExam: {
        totalScore: 10.0,
        grade: g,
        dictation: isPrimaryLow && selectedDictation ? {
          title: selectedDictation.title,
          author: selectedDictation.author,
          content: selectedDictation.content,
          score: dictationScore,
          instruction: selectedDictation.instruction || "Giáo viên đọc thong thả từng cụm từ cho học sinh viết (khoảng 15 phút)."
        } : null,
        paragraphWriting: isPrimaryLow && selectedParagraph ? {
          score: paragraphScore,
          prompt: selectedParagraph.prompt,
          suggestions: selectedParagraph.suggestions,
          rubric: selectedParagraph.rubric
        } : null,
        essay: !isPrimaryLow && selectedEssay ? {
          score: 10.0,
          genre: selectedEssay.genre,
          prompt: selectedEssay.prompt,
          suggestions: selectedEssay.suggestions,
          rubric: selectedEssay.rubric
        } : null
      },

      // ==================== HƯỚNG DẪN CHẤM VÀ ĐÁP ÁN CHI TIẾT ====================
      teacherGuide: {
        oralGuide: {
          criteria: `- Đọc vừa đủ nghe, rõ ràng, tốc độ đạt yêu cầu khối lớp ${g}: 1,0đ\n- Đọc đúng tiếng, từ: 1,0đ\n- Ngắt nghỉ hơi đúng dấu câu, cụm từ: 1,0đ\n- Trả lời đúng câu hỏi đọc hiểu của giáo viên: ${oralScore === 3.0 ? '0,0đ (hoặc chia đều 1,0đ)' : '1,0đ'} (Tổng: ${oralScore.toFixed(1).replace('.', ',')}đ)`,
          qaList: selectedOralItems.map(item => ({
            lessonTitle: `${item.title} (${item.bookVolume || 'Tập 1'} - ${item.page || ''})`,
            passage: item.passage,
            wordCount: item.wordCount,
            question: item.question,
            answer: item.answer
          }))
        },
        comprehensionAnswers: formattedQuestions.map(q => ({
          num: q.questionNumber,
          ans: q.correctAnswer || "Tự luận",
          explain: q.explain || ""
        })),
        writingGuide: {
          dictationCriteria: isPrimaryLow
            ? `- Bài viết không mắc lỗi chính tả, chữ viết rõ ràng, sạch đẹp: ${dictationScore.toFixed(1).replace('.', ',')}đ\n- Mỗi lỗi chính tả trong bài (sai âm đầu, vần, thanh, không viết hoa đúng quy định): trừ 0,5đ.`
            : null,
          essayRubric: !isPrimaryLow
            ? (selectedEssay ? selectedEssay.rubric : [])
            : (selectedParagraph ? selectedParagraph.rubric : [])
        }
      }
    };
  }

  /**
   * Lấy danh sách các bài đọc trong kho theo phân loại, khối lớp và học kỳ
   */
  getReadingPassages({ category = 'all', grade = 4, semester = null }) {
    return passageBank.getReadingPassages({ category, grade, semester });
  }

  /**
   * Lấy danh mục tất cả các bài đọc có sẵn trong ngân hàng CTST của một khối lớp
   */
  getAvailableBank(grade = 4) {
    const g = Number(grade) || 4;
    return TV_CTST_BANK[g] || TV_CTST_BANK[4];
  }
}

module.exports = new TiengVietExamEngine();
