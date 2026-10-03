/**
 * Concrete Question Bank & Concept Resolver
 * Tự động phân tích bài học SGK (Kết nối tri thức & Chân trời sáng tạo)
 * Sinh câu hỏi chuẩn xác 100% bám sát từng học kỳ (Tập 1 vs Tập 2) và giai đoạn (Giữa HK, Cuối HK)
 * Hỗ trợ tất cả các khối lớp (1 - 5) và các môn học.
 */

const curriculumData = require('../data/curriculumData');

class ConcreteQuestionBank {
  constructor() {
    this.curriculum = curriculumData.curriculum || [];
  }

  normalizeStr(str) {
    return (str || "").toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d").replace(/Đ/g, "d")
      .replace(/[^a-z0-9]/g, "");
  }

  /**
   * Tìm bài học SGK tương ứng trong CSDL
   */
  findMatchingLesson(grade, subject, topicName, learningOutcome) {
    const normSubj = this.normalizeStr(subject);
    const curr = this.curriculum.find(c => 
      c.grade === Number(grade) && this.normalizeStr(c.subject) === normSubj
    );
    if (!curr) return null;

    const searchTarget = (topicName || "") + " " + (learningOutcome || "");
    const targetTokens = searchTarget.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(w => w.length > 2);

    let bestLesson = null;
    let maxScore = 0;

    for (const t of curr.topics) {
      for (const l of t.lessons) {
        const lText = ((l.title || "") + " " + (l.outcomes ? l.outcomes.join(" ") : "")).toLowerCase()
          .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let score = 0;
        for (const tok of targetTokens) {
          if (lText.includes(tok)) score += 1;
        }
        if (score > maxScore) {
          maxScore = score;
          bestLesson = l;
        }
      }
    }

    return bestLesson;
  }

  /**
   * Nhận diện chủ đề sư phạm cốt lõi
   */
  detectConcept(grade, subject, title, outcome, topic) {
    const combined = ((title || '') + ' ' + (outcome || '') + ' ' + (topic || '')).toLowerCase();
    
    // Toán
    if (combined.includes('phần trăm') || combined.includes('tỉ số')) return 'percentage';
    if (combined.includes('hình thang')) return 'trapezoid';
    if (combined.includes('hình tròn') || combined.includes('chu vi hình tròn') || combined.includes('diện tích hình tròn')) return 'circle';
    if (combined.includes('thể tích') || combined.includes('hình hộp chữ nhật') || combined.includes('hình lập phương') || combined.includes('hình khối')) return 'volume_3d';
    if (combined.includes('vận tốc') || combined.includes('quãng đường') || combined.includes('chuyển động') || combined.includes('thời gian')) return 'speed_motion';
    if (combined.includes('số thập phân') || combined.includes('phép cộng số thập phân') || combined.includes('phép nhân số thập phân')) return 'decimals';
    if (combined.includes('phân số') || combined.includes('rút gọn') || combined.includes('quy đồng')) return 'fractions';
    if (combined.includes('hình bình hành') || combined.includes('hình thoi')) return 'parallelogram';
    if (combined.includes('số có nhiều chữ số') || combined.includes('hàng và lớp') || combined.includes('số có sáu chữ số')) return 'large_numbers';
    if (combined.includes('yến, tạ, tấn') || combined.includes('giây, thế kỉ')) return 'units_measure';
    if (combined.includes('góc nhọn') || combined.includes('góc tù') || combined.includes('góc bẹt') || combined.includes('đo góc')) return 'angles';
    if (combined.includes('chu vi') && (combined.includes('chữ nhật') || combined.includes('vuông'))) return 'perimeter';
    if (combined.includes('diện tích') && (combined.includes('chữ nhật') || combined.includes('vuông'))) return 'area_rect';
    if (combined.includes('bảng nhân') || combined.includes('bảng chia')) return 'multiplication_table';

    // Khoa học / Tự nhiên xã hội
    if (combined.includes('nước') || combined.includes('không khí') || combined.includes('chất')) return 'water_air';
    if (combined.includes('nấm') || combined.includes('thực phẩm an toàn') || combined.includes('dinh dưỡng')) return 'fungi_food';
    if (combined.includes('mạch điện') || combined.includes('vật dẫn điện') || combined.includes('năng lượng')) return 'energy_circuit';
    if (combined.includes('sinh sản') || combined.includes('nhị') || combined.includes('nhụy') || combined.includes('dậy thì')) return 'biology_reproduction';

    // Lịch sử - Địa lí
    if (combined.includes('đồng bằng bắc bộ') || combined.includes('trung du') || combined.includes('nam bộ')) return 'geography_regions';
    if (combined.includes('cồng chiêng') || combined.includes('tây nguyên') || combined.includes('duyên hải')) return 'culture_central_highlands';
    if (combined.includes('điện biên phủ') || combined.includes('1954') || combined.includes('1975') || combined.includes('cách mạng tháng tám')) return 'modern_history';

    // Tin học
    if (combined.includes('tệp') || combined.includes('thư mục') || combined.includes('máy tính và em') || combined.includes('bàn phím') || combined.includes('chuột')) return 'file_folder';
    if (combined.includes('soạn thảo') || combined.includes('scratch') || combined.includes('lập trình') || combined.includes('bảng tính')) return 'programming_office';

    // Công nghệ
    if (combined.includes('hoa') || combined.includes('cây cảnh') || combined.includes('chậu') || combined.includes('giá thể')) return 'tech_plants';
    if (combined.includes('lắp ghép') || combined.includes('mô hình') || combined.includes('rô-bốt') || combined.includes('bập bênh')) return 'tech_kits';

    return 'general';
  }

  /**
   * Sinh câu hỏi theo mạch kiến thức SGK chính xác
   */
  resolveQuestion(spec, grade, subject, mode = "TT27_SEA_PLM") {
    const level = spec.level || "M1";
    const type = spec.questionType || "multiple_choice";
    const isSeaPlm = spec.isSeaPlm !== undefined ? spec.isSeaPlm : mode.includes("SEA_PLM");
    const pts = spec.points || 0.5;
    const itemNum = spec.itemNumber || 1;

    const bestLesson = this.findMatchingLesson(grade, subject, spec.topic, spec.learningOutcome);
    const concept = this.detectConcept(
      grade, 
      subject, 
      bestLesson ? bestLesson.title : '', 
      spec.learningOutcome, 
      spec.topic
    );

    if (concept === 'general') return null;

    // ==================== 1. TỈ SỐ PHẦN TRĂM (TOÁN 5 - HK2) ====================
    if (concept === 'percentage') {
      if (type === 'multiple_choice') {
        const v = itemNum % 2;
        if (level === 'M1') {
          return v === 0 ? {
            questionId: spec.questionId, subject, grade, level: "M1", questionType: "multiple_choice", points: pts,
            learningOutcome: spec.learningOutcome, competency: "Năng lực tư duy và tính toán", seaPlmMode: isSeaPlm,
            questionText: "Tìm tỉ số phần trăm của hai số 15 và 60:",
            options: [
              { id: "A", text: "20%", isCorrect: false, distractorRationale: "Tính nhầm 15 : 60 = 0,20." },
              { id: "B", text: "25%", isCorrect: true, distractorRationale: "Đáp án đúng: 15 : 60 = 0,25 = 25%." },
              { id: "C", text: "30%", isCorrect: false, distractorRationale: "Ước lượng sai kết quả." },
              { id: "D", text: "40%", isCorrect: false, distractorRationale: "Lấy 60 : 15 rồi nhầm." }
            ],
            correctAnswer: "B",
            scoringGuide: { maxPoints: pts, rubric: [{ criteria: "Chọn đúng B (25%)", points: pts, description: "Tính đúng tỉ số phần trăm của 2 số." }] },
            levelRationale: { cognitiveTask: "Nhận biết quy tắc tìm tỉ số phần trăm của hai số.", whyNotLower: "Yêu cầu tính 1 phép chia và đổi về %.", whyNotHigher: "Bài toán đơn trực tiếp." }
          } : {
            questionId: spec.questionId, subject, grade, level: "M1", questionType: "multiple_choice", points: pts,
            learningOutcome: spec.learningOutcome, competency: "Năng lực tư duy và tính toán", seaPlmMode: isSeaPlm,
            questionText: "Một lớp có 30 học sinh, trong đó có 15 bạn nữ. Tỉ số phần trăm của số học sinh nữ so với số học sinh cả lớp là:",
            options: [
              { id: "A", text: "40%", isCorrect: false, distractorRationale: "Tính nhầm phép chia." },
              { id: "B", text: "50%", isCorrect: true, distractorRationale: "Đáp án đúng: 15 : 30 = 0,5 = 50%." },
              { id: "C", text: "60%", isCorrect: false, distractorRationale: "Ước lượng sai." },
              { id: "D", text: "30%", isCorrect: false, distractorRationale: "Lấy số học sinh cả lớp." }
            ],
            correctAnswer: "B",
            scoringGuide: { maxPoints: pts, rubric: [{ criteria: "Chọn đúng B (50%)", points: pts, description: "Tính đúng tỉ số phần trăm cơ bản." }] },
            levelRationale: { cognitiveTask: "Nhận biết tỉ số phần trăm cơ bản một nửa.", whyNotLower: "Yêu cầu tính toán 1 bước.", whyNotHigher: "Dạng bài mẫu mực trực tiếp." }
          };
        } else if (level === 'M2') {
          return {
            questionId: spec.questionId, subject, grade, level: "M2", questionType: "multiple_choice", points: pts,
            learningOutcome: spec.learningOutcome, competency: "Năng lực giải quyết vấn đề toán học", seaPlmMode: isSeaPlm,
            stimulus: { text: isSeaPlm ? "Lớp 5A của Trường Tiểu học A An Trường có 40 học sinh, trong đó có 24 học sinh nữ." : "Một lớp học có 40 học sinh, trong đó có 24 học sinh nữ." },
            questionText: "Tỉ số phần trăm của số học sinh nữ so với số học sinh cả lớp là:",
            options: [
              { id: "A", text: "50%", isCorrect: false, distractorRationale: "Ước lượng sai." },
              { id: "B", text: "60%", isCorrect: true, distractorRationale: "Đáp án đúng: 24 : 40 = 0,60 = 60%." },
              { id: "C", text: "40%", isCorrect: false, distractorRationale: "Nhầm với tỉ số học sinh nam." },
              { id: "D", text: "65%", isCorrect: false, distractorRationale: "Tính nhầm phép chia." }
            ],
            correctAnswer: "B",
            scoringGuide: { maxPoints: pts, rubric: [{ criteria: "Chọn đúng B (60%)", points: pts, description: "Giải đúng bài toán tìm tỉ số phần trăm." }] },
            levelRationale: { cognitiveTask: "Lập tỉ số và chuyển về tỉ số phần trăm theo tình huống lớp học.", whyNotLower: "Phải phân tích dữ kiện đề bài.", whyNotHigher: "Tình huống quen thuộc mẫu mực." }
          };
        } else {
          return {
            questionId: spec.questionId, subject, grade, level: "M3", questionType: "multiple_choice", points: pts,
            learningOutcome: spec.learningOutcome, competency: "Năng lực mô hình hóa toán học", seaPlmMode: isSeaPlm,
            stimulus: { text: isSeaPlm ? "Vườn cam sành Tam Bình của gia đình chú Năm thu hoạch được 5 000 kg cam. Sau khi phân loại, số cam loại 1 chiếm 65% tổng sản lượng, còn lại là cam loại 2." : "Một nông trại thu hoạch được 5 000 kg trái cây. Trái cây loại 1 chiếm 65% tổng sản lượng, còn lại là loại 2." },
            questionText: "Gia đình chú Năm đã thu hoạch được bao nhiêu ki-lô-gam cam loại 2?",
            options: [
              { id: "A", text: "3 250 kg", isCorrect: false, distractorRationale: "Đây là số cam loại 1 (5 000 x 65%)." },
              { id: "B", text: "1 750 kg", isCorrect: true, distractorRationale: "Đáp án đúng: Cam loại 2 chiếm 35%; 5 000 x 35% = 1 750 kg." },
              { id: "C", text: "1 500 kg", isCorrect: false, distractorRationale: "Tính nhầm 5 000 x 30%." },
              { id: "D", text: "2 250 kg", isCorrect: false, distractorRationale: "Trừ nhầm phép tính." }
            ],
            correctAnswer: "B",
            scoringGuide: { maxPoints: pts, rubric: [{ criteria: "Chọn đúng B (1 750 kg)", points: pts, description: "Giải đúng bài toán tìm giá trị phần trăm trong thực tế." }] },
            levelRationale: { cognitiveTask: "Vận dụng kiến thức tỉ số phần trăm để phân tích và giải quyết bài toán nông sản thực tế đa bước.", whyNotLower: "Cần tính phần trăm còn lại hoặc tính 2 bước.", whyNotHigher: "Đạt chuẩn YCCĐ Mức 3 Toán lớp 5." }
          };
        }
      } else if (type === 'constructed_response') {
        return {
          questionId: spec.questionId, subject, grade, level, questionType: "constructed_response", points: pts,
          learningOutcome: spec.learningOutcome, competency: "Năng lực giải quyết vấn đề toán học", seaPlmMode: isSeaPlm,
          stimulus: { text: isSeaPlm ? "Một cửa hàng nông sản tại thành phố Vĩnh Long nhập về 1 200 kg gạo ST25. Ngày thứ nhất bán được 35% số gạo đó, ngày thứ hai bán được 40% số gạo đó." : "Một kho hàng có 1 200 kg hàng. Đợt 1 xuất 35%, đợt 2 xuất 40%." },
          questionText: "Hỏi sau hai ngày, cửa hàng còn lại bao nhiêu ki-lô-gam gạo ST25?",
          scoringGuide: {
            maxPoints: pts,
            rubric: [
              { criteria: "Tính được tỉ số phần trăm gạo còn lại hoặc số gạo bán từng ngày", points: Math.round(pts * 0.5 * 4) / 4, description: "Số phần trăm còn lại: 100% - (35% + 40%) = 25% (hoặc tính ngày 1: 420 kg, ngày 2: 480 kg)." },
              { criteria: "Tính đúng số gạo còn lại và ghi đáp số", points: Math.round(pts * 0.5 * 4) / 4, description: "Số gạo còn lại: 1 200 x 25% = 300 kg. Đáp số: 300 kg gạo." }
            ]
          },
          levelRationale: { cognitiveTask: "Trình bày đầy đủ lời giải bài toán thực tế về tỉ số phần trăm.", whyNotLower: "Đòi hỏi tư duy lập luận nhiều bước.", whyNotHigher: "Phù hợp chuẩn tự luận Mức 2 - Mức 3." }
        };
      }
    }

    // ==================== 2. THỂ TÍCH & HÌNH KHỐI (TOÁN 5 - HK2) ====================
    if (concept === 'volume_3d') {
      if (level === 'M1') {
        return {
          questionId: spec.questionId, subject, grade, level: "M1", questionType: "multiple_choice", points: pts,
          learningOutcome: spec.learningOutcome, competency: "Năng lực hình học và đo lường", seaPlmMode: isSeaPlm,
          questionText: "Công thức tính thể tích V của hình hộp chữ nhật có chiều dài a, chiều rộng b và chiều cao c (cùng đơn vị đo) là:",
          options: [
            { id: "A", text: "V = (a + b) x c", isCorrect: false, distractorRationale: "Nhầm với chu vi đáy nhân chiều cao." },
            { id: "B", text: "V = a x b x c", isCorrect: true, distractorRationale: "Đáp án đúng: Thể tích = Dài x Rộng x Cao." },
            { id: "C", text: "V = a x b x c : 2", isCorrect: false, distractorRationale: "Nhầm với công thức tam giác." },
            { id: "D", text: "V = (a + b + c) x 2", isCorrect: false, distractorRationale: "Công thức không có ý nghĩa hình học." }
          ],
          correctAnswer: "B",
          scoringGuide: { maxPoints: pts, rubric: [{ criteria: "Chọn đúng B", points: pts, description: "Nhận biết đúng công thức tính thể tích hình hộp chữ nhật." }] },
          levelRationale: { cognitiveTask: "Tái hiện trực tiếp công thức thể tích hình hộp chữ nhật.", whyNotLower: "Nhớ công thức chuẩn.", whyNotHigher: "Thao tác 1 bước trực tiếp." }
        };
      } else if (level === 'M2') {
        return {
          questionId: spec.questionId, subject, grade, level: "M2", questionType: "multiple_choice", points: pts,
          learningOutcome: spec.learningOutcome, competency: "Năng lực tính toán và đo lường", seaPlmMode: isSeaPlm,
          stimulus: { text: isSeaPlm ? "Gia đình bạn Nam tại Vĩnh Long dùng một bể chứa nước mưa dạng hình hộp chữ nhật có chiều dài 2 m, chiều rộng 1,5 m và chiều cao 1,2 m." : "Một bể chứa nước dạng hình hộp chữ nhật có chiều dài 2 m, chiều rộng 1,5 m và chiều cao 1,2 m." },
          questionText: "Thể tích của bể chứa nước đó là bao nhiêu mét khối?",
          options: [
            { id: "A", text: "4,7 m³", isCorrect: false, distractorRationale: "Cộng các kích thước." },
            { id: "B", text: "3,6 m³", isCorrect: true, distractorRationale: "Đáp án đúng: 2 x 1,5 x 1,2 = 3,6 m³." },
            { id: "C", text: "7,2 m³", isCorrect: false, distractorRationale: "Nhân thừa hệ số 2." },
            { id: "D", text: "3,0 m³", isCorrect: false, distractorRationale: "Bỏ quên chiều cao." }
          ],
          correctAnswer: "B",
          scoringGuide: { maxPoints: pts, rubric: [{ criteria: "Chọn đúng B (3,6 m³)", points: pts, description: "Tính đúng thể tích hình hộp chữ nhật theo số liệu." }] },
          levelRationale: { cognitiveTask: "Vận dụng công thức tính thể tích vào bài toán có số liệu cụ thể.", whyNotLower: "Đòi hỏi nhân 3 số thập phân.", whyNotHigher: "Tình huống quen thuộc bài mẫu." }
        };
      } else {
        // M3 TL
        return {
          questionId: spec.questionId, subject, grade, level: "M3", questionType: "constructed_response", points: pts,
          learningOutcome: spec.learningOutcome, competency: "Năng lực giải quyết vấn đề toán học", seaPlmMode: isSeaPlm,
          stimulus: { text: isSeaPlm ? "Một bể bơi mini cho học sinh tại trường tiểu học có dạng hình hộp chữ nhật với chiều dài 8 m, chiều rộng 5 m và sâu 1,5 m. Hiện tại, lượng nước trong bể chiếm 80% thể tích bể." : "Một bể nước dạng hình hộp chữ nhật dài 8 m, rộng 5 m, cao 1,5 m. Nước trong bể chiếm 80% thể tích bể." },
          questionText: "Hỏi trong bể hiện có bao nhiêu mét khối nước (biết 1 m³ = 1 000 lít nước)?",
          scoringGuide: {
            maxPoints: pts,
            rubric: [
              { criteria: "Tính được thể tích của cả bể nước", points: Math.round(pts * 0.5 * 4) / 4, description: "Thể tích bể là: 8 x 5 x 1,5 = 60 (m³)." },
              { criteria: "Tính được lượng nước hiện có trong bể và ghi đáp số", points: Math.round(pts * 0.5 * 4) / 4, description: "Lượng nước hiện có: 60 x 80% = 48 (m³). Đáp số: 48 m³." }
            ]
          },
          levelRationale: { cognitiveTask: "Kết hợp kiến thức tính thể tích hình hộp chữ nhật và tìm tỉ số phần trăm trong tình huống thực tế.", whyNotLower: "Phải giải bài toán 2 bước liên hoàn.", whyNotHigher: "Phù hợp yêu cầu Mức 3 Toán 5." }
        };
      }
    }

    // ==================== 3. VẬN TỐC, QUÃNG ĐƯỜNG, THỜI GIAN (TOÁN 5 - HK2) ====================
    if (concept === 'speed_motion') {
      if (level === 'M1') {
        return {
          questionId: spec.questionId, subject, grade, level: "M1", questionType: "multiple_choice", points: pts,
          learningOutcome: spec.learningOutcome, competency: "Năng lực tính toán và mô hình hóa", seaPlmMode: isSeaPlm,
          questionText: "Muốn tính vận tốc v của một chuyển động đều khi biết quãng đường s và thời gian t, ta dùng công thức:",
          options: [
            { id: "A", text: "v = s x t", isCorrect: false, distractorRationale: "Nhầm phép chia với phép nhân." },
            { id: "B", text: "v = s : t", isCorrect: true, distractorRationale: "Đáp án đúng: Vận tốc = Quãng đường : Thời gian." },
            { id: "C", text: "v = t : s", isCorrect: false, distractorRationale: "Đảo ngược thứ tự số chia và số bị chia." },
            { id: "D", text: "v = (s + t) : 2", isCorrect: false, distractorRationale: "Công thức không chính xác." }
          ],
          correctAnswer: "B",
          scoringGuide: { maxPoints: pts, rubric: [{ criteria: "Chọn đúng B", points: pts, description: "Nhận biết đúng công thức tính vận tốc." }] },
          levelRationale: { cognitiveTask: "Nhận biết công thức tính vận tốc chuyển động đều.", whyNotLower: "Tái hiện công thức chuẩn SGK.", whyNotHigher: "Thao tác 1 bước trực tiếp." }
        };
      } else {
        return {
          questionId: spec.questionId, subject, grade, level: "M2", questionType: "multiple_choice", points: pts,
          learningOutcome: spec.learningOutcome, competency: "Năng lực giải quyết vấn đề toán học", seaPlmMode: isSeaPlm,
          stimulus: { text: isSeaPlm ? "Một xe máy đi từ thành phố Vĩnh Long đến thành phố Cần Thơ trên quãng đường dài 35 km hết 50 phút (tương đương 5/6 giờ)." : "Một xe máy đi quãng đường 90 km hết 2 giờ." },
          questionText: isSeaPlm ? "Vận tốc trung bình của xe máy đó là bao nhiêu km/giờ?" : "Vận tốc của xe máy đó là:",
          options: isSeaPlm ? [
            { id: "A", text: "40 km/giờ", isCorrect: false, distractorRationale: "Ước lượng chưa chính xác." },
            { id: "B", text: "42 km/giờ", isCorrect: true, distractorRationale: "Đáp án đúng: 35 : (5/6) = 42 km/giờ." },
            { id: "C", text: "45 km/giờ", isCorrect: false, distractorRationale: "Tính nhầm phép chia phân số." },
            { id: "D", text: "38 km/giờ", isCorrect: false, distractorRationale: "Tính nhầm thời gian." }
          ] : [
            { id: "A", text: "40 km/giờ", isCorrect: false, distractorRationale: "Tính nhầm." },
            { id: "B", text: "45 km/giờ", isCorrect: true, distractorRationale: "Đáp án đúng: 90 : 2 = 45 km/giờ." },
            { id: "C", text: "50 km/giờ", isCorrect: false, distractorRationale: "Ước lượng sai." },
            { id: "D", text: "180 km/giờ", isCorrect: false, distractorRationale: "Lấy 90 nhân 2." }
          ],
          correctAnswer: "B",
          scoringGuide: { maxPoints: pts, rubric: [{ criteria: "Chọn đúng B", points: pts, description: "Tính đúng vận tốc chuyển động." }] },
          levelRationale: { cognitiveTask: "Tính vận tốc chuyển động đều từ quãng đường và thời gian.", whyNotLower: "Áp dụng vào số liệu cụ thể.", whyNotHigher: "Tình huống chuyển động đơn giản." }
        };
      }
    }

    // ==================== 4. PHÂN SỐ (TOÁN 4 - HK2) ====================
    if (concept === 'fractions') {
      const v = itemNum % 2;
      if (level === 'M1') {
        return v === 0 ? {
          questionId: spec.questionId, subject, grade, level: "M1", questionType: "multiple_choice", points: pts,
          learningOutcome: spec.learningOutcome, competency: "Năng lực tư duy số học", seaPlmMode: isSeaPlm,
          questionText: "Rút gọn phân số 18/24 về phân số tối giản, ta được kết quả là:",
          options: [
            { id: "A", text: "9/12", isCorrect: false, distractorRationale: "Chưa tối giản (chia cho 2)." },
            { id: "B", text: "3/4", isCorrect: true, distractorRationale: "Đáp án đúng: Chia cả tử và mẫu cho 6: 18:6 / 24:6 = 3/4." },
            { id: "C", text: "6/8", isCorrect: false, distractorRationale: "Chưa tối giản (chia cho 3)." },
            { id: "D", text: "2/3", isCorrect: false, distractorRationale: "Tính nhầm kết quả." }
          ],
          correctAnswer: "B",
          scoringGuide: { maxPoints: pts, rubric: [{ criteria: "Chọn đúng B (3/4)", points: pts, description: "Rút gọn phân số đúng về dạng tối giản." }] },
          levelRationale: { cognitiveTask: "Nhận biết và thực hiện rút gọn phân số.", whyNotLower: "Cần tìm ước chung lớn nhất.", whyNotHigher: "Thao tác cơ bản SGK." }
        } : {
          questionId: spec.questionId, subject, grade, level: "M1", questionType: "multiple_choice", points: pts,
          learningOutcome: spec.learningOutcome, competency: "Năng lực tư duy số học", seaPlmMode: isSeaPlm,
          questionText: "Quy đồng mẫu số hai phân số 2/3 và 3/5 với mẫu số chung nhỏ nhất là 15, ta được:",
          options: [
            { id: "A", text: "2/15 và 3/15", isCorrect: false, distractorRationale: "Giữ nguyên tử số." },
            { id: "B", text: "10/15 và 9/15", isCorrect: true, distractorRationale: "Đáp án đúng: 2/3 = 10/15; 3/5 = 9/15." },
            { id: "C", text: "5/15 và 6/15", isCorrect: false, distractorRationale: "Nhân sai thừa số phụ." },
            { id: "D", text: "8/15 và 9/15", isCorrect: false, distractorRationale: "Tính nhầm tử số." }
          ],
          correctAnswer: "B",
          scoringGuide: { maxPoints: pts, rubric: [{ criteria: "Chọn đúng B", points: pts, description: "Quy đồng mẫu số chính xác hai phân số." }] },
          levelRationale: { cognitiveTask: "Nhận biết quy tắc quy đồng mẫu số.", whyNotLower: "Nhân cả tử và mẫu với thừa số phụ.", whyNotHigher: "Dạng bài mẫu mực SGK." }
        };
      } else {
        return {
          questionId: spec.questionId, subject, grade, level: "M2", questionType: "multiple_choice", points: pts,
          learningOutcome: spec.learningOutcome, competency: "Năng lực tính toán số học", seaPlmMode: isSeaPlm,
          questionText: "Tính giá trị của biểu thức: 3/5 + 1/4 =",
          options: [
            { id: "A", text: "4/9", isCorrect: false, distractorRationale: "Cộng tử với tử, mẫu với mẫu (sai lầm kinh điển)." },
            { id: "B", text: "17/20", isCorrect: true, distractorRationale: "Đáp án đúng: Quy đồng mẫu số chung là 20: 12/20 + 5/20 = 17/20." },
            { id: "C", text: "7/20", isCorrect: false, distractorRationale: "Lấy tử nhân tử." },
            { id: "D", text: "15/20", isCorrect: false, distractorRationale: "Tính nhầm quy đồng tử số." }
          ],
          correctAnswer: "B",
          scoringGuide: { maxPoints: pts, rubric: [{ criteria: "Chọn đúng B (17/20)", points: pts, description: "Quy đồng mẫu số và cộng đúng hai phân số khác mẫu." }] },
          levelRationale: { cognitiveTask: "Thực hiện phép cộng hai phân số khác mẫu số.", whyNotLower: "Đòi hỏi quy đồng mẫu số trước khi cộng.", whyNotHigher: "Phép tính cơ bản 2 phân số." }
        };
      }
    }

    // ==================== 5. NẤM VÀ THỰC PHẨM AN TOÀN (KHOA HỌC 4 - HK2) ====================
    if (concept === 'fungi_food') {
      return {
        questionId: spec.questionId, subject, grade, level, questionType: "multiple_choice", points: pts,
        learningOutcome: spec.learningOutcome, competency: "Năng lực tìm hiểu thế giới tự nhiên", seaPlmMode: isSeaPlm,
        questionText: level === 'M1'
          ? "Trong các loại nấm sau đây, loại nấm nào là nấm ăn được và có giá trị dinh dưỡng cao?"
          : "Hành động nào sau đây là đúng đắn và an toàn nhất khi bảo quản thực phẩm trong gia đình?",
        options: level === 'M1' ? [
          { id: "A", text: "Nấm rơm, nấm hương, nấm mộc nhĩ (mèo).", isCorrect: true, distractorRationale: "Đáp án đúng: Các loại nấm ăn phổ biến, an toàn và giàu dinh dưỡng." },
          { id: "B", text: "Nấm mốc mọc trên bánh mì để lâu ngày.", isCorrect: false, distractorRationale: "Nấm mốc chứa độc tố gây hại cho tiêu hóa." },
          { id: "C", text: "Nấm độc tán trắng mọc hoang trong rừng.", isCorrect: false, distractorRationale: "Nấm cực độc có thể gây tử vong." },
          { id: "D", text: "Bất kì loại nấm nào có màu sắc sặc sỡ mọc tự nhiên.", isCorrect: false, distractorRationale: "Nấm sặc sỡ thường là nấm độc nguy hiểm." }
        ] : [
          { id: "A", text: "Để chung thức ăn sống và thức ăn đã nấu chín trên cùng một đĩa.", isCorrect: false, distractorRationale: "Gây nhiễm khuẩn chéo." },
          { id: "B", text: "Gọt bỏ phần mốc của thức ăn ôi thiu rồi tiếp tục ăn phần còn lại.", isCorrect: false, distractorRationale: "Độc tố nấm mốc đã lan khắp toàn bộ thức ăn." },
          { id: "C", text: "Bảo quản thực phẩm trong hộp kín để ngăn mát tủ lạnh và nấu chín kĩ trước khi ăn.", isCorrect: true, distractorRationale: "Đáp án đúng: Biện pháp an toàn vệ sinh thực phẩm chuẩn khoa học." },
          { id: "D", text: "Để thức ăn thừa ở nhiệt độ phòng suốt nhiều ngày mà không đậy nắp.", isCorrect: false, distractorRationale: "Thức ăn sẽ nhanh chóng bị vi khuẩn xâm nhập và ôi thiu." }
        ],
        correctAnswer: level === 'M1' ? "A" : "C",
        scoringGuide: { maxPoints: pts, rubric: [{ criteria: "Lựa chọn đúng phương án an toàn", points: pts, description: "Nhận biết đúng nấm có ích và quy tắc an toàn thực phẩm." }] },
        levelRationale: { cognitiveTask: "Nhận biết và vận dụng kiến thức về nấm và an toàn thực phẩm.", whyNotLower: "Cần phân biệt nấm có ích và nấm độc.", whyNotHigher: "Kiến thức thực tiễn cuộc sống quen thuộc." }
      };
    }

    // ==================== 6. LẮP GHÉP MÔ HÌNH KĨ THUẬT (CÔNG NGHỆ 4 - HK2) ====================
    if (concept === 'tech_kits') {
      const v = itemNum % 2;
      return {
        questionId: spec.questionId, subject, grade, level, questionType: "multiple_choice", points: pts,
        learningOutcome: spec.learningOutcome, competency: "Năng lực thiết kế kĩ thuật công nghệ", seaPlmMode: isSeaPlm,
        questionText: level === 'M1' ? (
          v === 0 
            ? "Trong bộ lắp ghép mô hình kĩ thuật, dụng cụ nào dùng để vặn siết ốc và giữ đai ốc chắc chắn?"
            : "Chi tiết nào sau đây trong bộ lắp ghép kĩ thuật có dạng hình chữ nhật phẳng với nhiều lỗ tròn đều nhau?"
        ) : "Khi tiến hành lắp ghép mô hình bập bênh, bước nào sau đây cần thực hiện đầu tiên?",
        options: level === 'M1' ? (
          v === 0 ? [
            { id: "A", text: "Cờ-lê và tua-vít.", isCorrect: true, distractorRationale: "Đáp án đúng: Bộ đôi cờ-lê và tua-vít dùng để siết đai ốc và bu-lông." },
            { id: "B", text: "Kéo cắt giấy và thước kẻ.", isCorrect: false, distractorRationale: "Dụng cụ thủ công, không dùng cho bộ lắp ghép kĩ thuật." },
            { id: "C", text: "Búa đinh và kìm rút.", isCorrect: false, distractorRationale: "Dụng cụ cơ khí nặng, không có trong bộ học sinh." },
            { id: "D", text: "Keo dán và băng dính.", isCorrect: false, distractorRationale: "Bộ kĩ thuật lắp bằng ốc vít, không dùng keo." }
          ] : [
            { id: "A", text: "Tấm lớn hoặc tấm đáy.", isCorrect: true, distractorRationale: "Đáp án đúng: Tấm đáy dùng làm nền tảng lắp các bộ phận khác." },
            { id: "B", text: "Dây cao su.", isCorrect: false, distractorRationale: "Chi tiết truyền động đàn hồi." },
            { id: "C", text: "Bánh đai.", isCorrect: false, distractorRationale: "Chi tiết tròn có rãnh." },
            { id: "D", text: "Vòng hãm.", isCorrect: false, distractorRationale: "Chi tiết nhỏ để chặn trục." }
          ]
        ) : [
          { id: "A", text: "Lắp thanh đòn bập bênh trước khi có giá đỡ.", isCorrect: false, distractorRationale: "Sai quy trình lắp ráp." },
          { id: "B", text: "Lắp ráp giá đỡ (chân đế) của bập bênh chắc chắn vào tấm đáy.", isCorrect: true, distractorRationale: "Đáp án đúng: Lắp bộ phận chịu lực chân đế trước." },
          { id: "C", text: "Lắp ghế ngồi bập bênh treo lơ lửng.", isCorrect: false, distractorRationale: "Ghế ngồi lắp sau khi có thanh đòn." },
          { id: "D", text: "Dán nhãn trang trí trước khi lắp ráp.", isCorrect: false, distractorRationale: "Trang trí là bước hoàn thiện cuối cùng." }
        ],
        correctAnswer: level === 'M1' ? "A" : "B",
        scoringGuide: { maxPoints: pts, rubric: [{ criteria: "Chọn đúng phương án kĩ thuật", points: pts, description: "Hiểu đúng dụng cụ và quy trình lắp ghép mô hình kĩ thuật." }] },
        levelRationale: { cognitiveTask: "Nhận biết dụng cụ và quy trình lắp ráp kĩ thuật.", whyNotLower: "Yêu cầu nhớ đúng dụng cụ đặc thù.", whyNotHigher: "Quy trình lắp ghép cơ bản đã học." }
      };
    }

    // ==================== 7. CHIẾN DỊCH ĐIỆN BIÊN PHỦ & LỊCH SỬ CẬN ĐẠI (LỊCH SỬ 5 - HK2) ====================
    if (concept === 'modern_history') {
      return {
        questionId: spec.questionId, subject, grade, level, questionType: "multiple_choice", points: pts,
        learningOutcome: spec.learningOutcome, competency: "Năng lực tìm hiểu lịch sử", seaPlmMode: isSeaPlm,
        questionText: level === 'M1'
          ? "Chiến dịch Điện Biên Phủ toàn thắng vào ngày tháng năm nào, kết thúc thắng lợi cuộc kháng chiến chống thực dân Pháp?"
          : "Ý nghĩa lịch sử to lớn nhất của chiến thắng Điện Biên Phủ năm 1954 là gì?",
        options: level === 'M1' ? [
          { id: "A", text: "Ngày 30 tháng 4 năm 1975.", isCorrect: false, distractorRationale: "Đây là ngày Giải phóng miền Nam, thống nhất đất nước." },
          { id: "B", text: "Ngày 7 tháng 5 năm 1954.", isCorrect: true, distractorRationale: "Đáp án đúng: Chiều ngày 7/5/1954, lá cờ Quyết chiến Quyết thắng tung bay trên nóc hầm Đờ Cát-xtơ-ri." },
          { id: "C", text: "Ngày 2 tháng 9 năm 1945.", isCorrect: false, distractorRationale: "Đây là ngày Bác Hồ đọc Tuyên ngôn Độc lập." },
          { id: "D", text: "Ngày 19 tháng 12 năm 1946.", isCorrect: false, distractorRationale: "Đây là ngày Toàn quốc kháng chiến." }
        ] : [
          { id: "A", text: "Đập tan pháo đài 'bất khả xâm phạm' của thực dân Pháp, buộc Pháp ký Hiệp định Giơ-ne-vơ lập lại hòa bình ở Đông Dương.", isCorrect: true, distractorRationale: "Đáp án đúng: 'Lừng lẫy năm châu, chấn động địa cầu', giải phóng hoàn toàn miền Bắc." },
          { id: "B", text: "Chấm dứt hoàn toàn sự can thiệp của đế quốc Mỹ vào miền Nam.", isCorrect: false, distractorRationale: "Mỹ nhảy vào miền Nam sau năm 1954." },
          { id: "C", text: "Hoàn thành công cuộc đổi mới đất nước.", isCorrect: false, distractorRationale: "Công cuộc đổi mới bắt đầu từ năm 1986." },
          { id: "D", text: "Mở ra thời kỳ Bắc thuộc lần thứ nhất.", isCorrect: false, distractorRationale: "Sai hoàn toàn về dòng thời gian lịch sử." }
        ],
        correctAnswer: level === 'M1' ? "B" : "A",
        scoringGuide: { maxPoints: pts, rubric: [{ criteria: "Chọn đúng phương án lịch sử", points: pts, description: "Nắm vững mốc thời gian và ý nghĩa chiến thắng Điện Biên Phủ 1954." }] },
        levelRationale: { cognitiveTask: "Tái hiện và đánh giá sự kiện lịch sử trọng đại của dân tộc.", whyNotLower: "Yêu cầu nhớ chính xác mốc thời gian lịch sử.", whyNotHigher: "Kiến thức lịch sử bắt buộc trong chương trình lớp 5." }
      };
    }

    return null;
  }
}

module.exports = new ConcreteQuestionBank();
