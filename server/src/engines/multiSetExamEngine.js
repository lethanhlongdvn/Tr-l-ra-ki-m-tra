/**
 * MULTI-SET EXAM ENGINE (HỆ THỐNG SINH 8 BỘ ĐỀ THI ĐỘC LẬP & PHONG PHÚ)
 * Đáp ứng yêu cầu chuẩn sư phạm: Mỗi môn học, mỗi học kỳ, mỗi kỳ thi ở từng khối lớp
 * phải đảm bảo từ 8 bộ đề thi trở lên với nội dung câu hỏi, dữ liệu, số liệu, bài đọc
 * và tình huống thực tế hoàn toàn khác nhau.
 */

class MultiSetExamEngine {
  constructor() {
    this.setDescriptions = [
      { id: 1, name: "Bộ đề 1", code: "DE-01", badge: "Chuẩn kiến thức trọng tâm", desc: "Bám sát các yêu cầu cần đạt trọng tâm cốt lõi của chương trình GDPT 2018." },
      { id: 2, name: "Bộ đề 2", code: "DE-02", badge: "Liên hệ thực tiễn địa phương", desc: "Tăng cường các bối cảnh đời sống, nông sản và làng nghề truyền thống quê hương." },
      { id: 3, name: "Bộ đề 3", code: "DE-03", badge: "Phát triển tư duy logic", desc: "Định hướng rèn luyện kĩ năng phân tích, so sánh và kết nối dữ liệu đa chiều." },
      { id: 4, name: "Bộ đề 4", code: "DE-04", badge: "Mô hình hóa & Đời sống", desc: "Ứng dụng các tình huống tính toán chi tiêu, sản xuất, tiêu thụ nông nghiệp thực tế." },
      { id: 5, name: "Bộ đề 5", code: "DE-05", badge: "Tích hợp liên môn SEA-PLM", desc: "Bối cảnh khoa học môi trường, lối sống xanh và bảo vệ tài nguyên thiên nhiên." },
      { id: 6, name: "Bộ đề 6", code: "DE-06", badge: "Giải quyết vấn đề sáng tạo", desc: "Đề bài mở khuyến khích diễn đạt tự lập, đưa ra quyết định và biện pháp thực hành." },
      { id: 7, name: "Bộ đề 7", code: "DE-07", badge: "Rèn luyện kĩ năng toàn diện", desc: "Phối hợp hài hòa các dạng thức câu hỏi trắc nghiệm khách quan và tự luận có lời văn." },
      { id: 8, name: "Bộ đề 8", code: "DE-08", badge: "Đánh giá năng lực tổng hợp", desc: "Bộ đề chuẩn phân hóa cao, kiểm tra mức độ vận dụng kiến thức linh hoạt trong thực tiễn." }
    ];
    this.getAvailableExamSets = this.getAvailableExamSets.bind(this);
    this.resolveMathQuestion = this.resolveMathQuestion.bind(this);
  }

  /**
   * Lấy danh sách 8 bộ đề thi cho môn học, khối lớp, học kỳ
   */
  getAvailableExamSets(grade = 4, subject = "Toán", semester = "Cuối học kỳ I") {
    return this.setDescriptions.map(s => ({
      ...s,
      description: s.desc,
      grade: Number(grade),
      subject,
      semester,
      displayName: `${s.name} - ${s.badge}`
    }));
  }

  /**
   * Lấy câu hỏi đa bộ đề cho môn Toán
   */
  resolveMathQuestion(spec, grade, examSetIndex = 1, isSeaPlm = true) {
    const level = spec.level || "M1";
    const type = spec.questionType || "multiple_choice";
    const pts = spec.points || 0.5;
    const setIdx = Math.max(1, Math.min(8, Number(examSetIndex) || 1));

    // Bộ đề số 1 đến số 8 cho TOÁN
    const mathBankBySet = {
      1: {
        m1_mcq: {
          text: "Chữ số 7 trong số 375 284 có giá trị là bao nhiêu?",
          options: [
            { id: "A", text: "700", isCorrect: false },
            { id: "B", text: "7 000", isCorrect: false },
            { id: "C", text: "70 000", isCorrect: true },
            { id: "D", text: "700 000", isCorrect: false }
          ],
          correct: "C",
          desc: "Chữ số 7 ở hàng chục nghìn, có giá trị là 70 000."
        },
        m2_mcq: {
          stimulus: "Vườn bưởi Năm Roi của gia đình bạn An tại thị xã Bình Minh đợt 1 thu hoạch được 3 450 kg, đợt 2 thu hoạch được nhiều hơn đợt 1 là 800 kg.",
          text: "Hỏi cả hai đợt gia đình bạn An đã thu hoạch được tất cả bao nhiêu ki-lô-gam bưởi?",
          options: [
            { id: "A", text: "4 250 kg", isCorrect: false },
            { id: "B", text: "7 700 kg", isCorrect: true },
            { id: "C", text: "6 900 kg", isCorrect: false },
            { id: "D", text: "8 500 kg", isCorrect: false }
          ],
          correct: "B",
          desc: "Đợt 2: 3 450 + 800 = 4 250 kg. Cả hai đợt: 3 450 + 4 250 = 7 700 kg."
        },
        m3_cr: {
          stimulus: "Để hỗ trợ bà con nông dân trồng dừa sáp Cầu Kè tiêu thụ sản phẩm, một nhóm học sinh tổ chức gian hàng nông sản. Ngày thứ nhất gian hàng bán được 45 quả dừa sáp. Ngày thứ hai bán được số dừa bằng 2/3 số dừa ngày thứ nhất. Giá mỗi quả dừa là 90 000 đồng.",
          text: "a) Hỏi cả hai ngày gian hàng bán được tất cả bao nhiêu quả dừa sáp?\nb) Tính tổng số tiền gian hàng thu được sau hai ngày bán dừa sáp.",
          solution: "a) Ngày thứ hai bán: 45 x 2/3 = 30 (quả). Cả hai ngày bán: 45 + 30 = 75 (quả).\nb) Tổng số tiền thu được: 75 x 90 000 = 6 750 000 (đồng)."
        }
      },
      2: {
        m1_mcq: {
          text: "Chữ số 8 trong số 682 459 có giá trị là bao nhiêu?",
          options: [
            { id: "A", text: "800", isCorrect: false },
            { id: "B", text: "8 000", isCorrect: false },
            { id: "C", text: "80 000", isCorrect: true },
            { id: "D", text: "800 000", isCorrect: false }
          ],
          correct: "C",
          desc: "Chữ số 8 ở hàng chục nghìn, có giá trị là 80 000."
        },
        m2_mcq: {
          stimulus: "Trang trại của gia đình bạn Bình tại huyện Long Hồ đợt 1 thu hoạch được 4 200 quả trứng vịt, đợt 2 thu hoạch được nhiều hơn đợt 1 là 650 quả.",
          text: "Hỏi cả hai đợt trang trại đã thu hoạch được bao nhiêu quả trứng vịt?",
          options: [
            { id: "A", text: "4 850 quả", isCorrect: false },
            { id: "B", text: "9 050 quả", isCorrect: true },
            { id: "C", text: "8 400 quả", isCorrect: false },
            { id: "D", text: "9 700 quả", isCorrect: false }
          ],
          correct: "B",
          desc: "Đợt 2: 4 200 + 650 = 4 850 quả. Cả hai đợt: 4 200 + 4 850 = 9 050 quả."
        },
        m3_cr: {
          stimulus: "Hợp tác xã cam sành Tam Bình nhập về một lô cam giống gồm 240 cây. Đợt 1 các hộ dân đăng ký trồng 3/8 số cây giống. Đợt 2 trồng được 2/5 số cây giống còn lại. Mỗi cây giống có giá 35 000 đồng.",
          text: "a) Hỏi sau hai đợt, hợp tác xã còn lại bao nhiêu cây giống chưa trồng?\nb) Tính số tiền người dân đã mua cây giống trong đợt 1.",
          solution: "a) Đợt 1 trồng: 240 x 3/8 = 90 (cây). Còn lại: 240 - 90 = 150 (cây). Đợt 2 trồng: 150 x 2/5 = 60 (cây). Còn lại: 150 - 60 = 90 (cây).\nb) Tiền cây giống đợt 1: 90 x 35 000 = 3 150 000 (đồng)."
        }
      },
      3: {
        m1_mcq: {
          text: "Số lớn nhất trong các số: 549 321; 549 820; 548 999; 549 802 là:",
          options: [
            { id: "A", text: "549 321", isCorrect: false },
            { id: "B", text: "549 820", isCorrect: true },
            { id: "C", text: "548 999", isCorrect: false },
            { id: "D", text: "549 802", isCorrect: false }
          ],
          correct: "B",
          desc: "So sánh chữ số hàng trăm: 8 > 3 và ở hàng chục 2 > 0 nên 549 820 là số lớn nhất."
        },
        m2_mcq: {
          stimulus: "Một xe tải chở hàng nông sản từ Vĩnh Long lên TP. Hồ Chí Minh. Chuyến thứ nhất chở 2 tấn 450 kg thanh long, chuyến thứ hai chở ít hơn chuyến thứ nhất 500 kg.",
          text: "Hỏi cả hai chuyến xe tải đó đã chở được bao nhiêu ki-lô-gam thanh long?",
          options: [
            { id: "A", text: "1 950 kg", isCorrect: false },
            { id: "B", text: "4 400 kg", isCorrect: true },
            { id: "C", text: "3 900 kg", isCorrect: false },
            { id: "D", text: "4 900 kg", isCorrect: false }
          ],
          correct: "B",
          desc: "Chuyến 1: 2 450 kg. Chuyến 2: 2 450 - 500 = 1 950 kg. Cả hai chuyến: 2 450 + 1 950 = 4 400 kg."
        },
        m3_cr: {
          stimulus: "Một mảnh đất hình chữ nhật trồng rau sạch tại xã Tân Hạnh có chiều dài 36 m, chiều rộng bằng 2/3 chiều dài. Người ta dùng 1/4 diện tích đất để trồng xà lách, phần đất còn lại trồng cải ngọt.",
          text: "a) Tính chu vi và diện tích của mảnh đất trồng rau đó.\nb) Tính diện tích đất dùng để trồng cải ngọt.",
          solution: "a) Chiều rộng: 36 x 2/3 = 24 (m). Chu vi: (36 + 24) x 2 = 120 (m). Diện tích: 36 x 24 = 864 (m²).\nb) Diện tích trồng cải ngọt: 864 x (1 - 1/4) = 648 (m²)."
        }
      },
      4: {
        m1_mcq: {
          text: "Kết quả của phép tính nhân nhẩm 25 x 100 là:",
          options: [
            { id: "A", text: "250", isCorrect: false },
            { id: "B", text: "2 500", isCorrect: true },
            { id: "C", text: "25 000", isCorrect: false },
            { id: "D", text: "250 000", isCorrect: false }
          ],
          correct: "B",
          desc: "Nhân một số với 100 ta viết thêm hai chữ số 0 vào bên phải số đó: 25 x 100 = 2 500."
        },
        m2_mcq: {
          stimulus: "Một phân xưởng may áo ấm ủng hộ học sinh vùng cao đợt đầu may được 1 540 chiếc áo, đợt sau may được nhiều hơn đợt đầu 360 chiếc áo.",
          text: "Hỏi trung bình mỗi đợt phân xưởng đó may được bao nhiêu chiếc áo ấm?",
          options: [
            { id: "A", text: "1 900 chiếc", isCorrect: false },
            { id: "B", text: "1 720 chiếc", isCorrect: true },
            { id: "C", text: "3 440 chiếc", isCorrect: false },
            { id: "D", text: "1 650 chiếc", isCorrect: false }
          ],
          correct: "B",
          desc: "Đợt sau: 1 540 + 360 = 1 900 chiếc. Cả hai đợt: 3 440 chiếc. Trung bình: 3 440 : 2 = 1 720 chiếc."
        },
        m3_cr: {
          stimulus: "Trường Tiểu học An Trường phát động phong trào gom giấy vụn bảo vệ môi trường. Khối lớp 4 gom được 420 kg giấy vụn. Khối lớp 5 gom được số giấy bằng 5/4 số giấy của khối 4. Cứ 10 kg giấy vụn tái chế được 8 cuốn vở học sinh.",
          text: "a) Hỏi cả hai khối lớp gom được bao nhiêu ki-lô-gam giấy vụn?\nb) Với toàn bộ số giấy vụn đó, trường tái chế được bao nhiêu cuốn vở mới?",
          solution: "a) Khối 5 gom: 420 x 5/4 = 525 (kg). Cả 2 khối: 420 + 525 = 945 (kg).\nb) Số vở tái chế: 945 : 10 x 8 = 756 (cuốn vở)."
        }
      },
      5: {
        m1_mcq: {
          text: "Giá trị của biểu thức 120 + 80 x 2 là:",
          options: [
            { id: "A", text: "400", isCorrect: false },
            { id: "B", text: "280", isCorrect: true },
            { id: "C", text: "320", isCorrect: false },
            { id: "D", text: "240", isCorrect: false }
          ],
          correct: "B",
          desc: "Thực hiện phép nhân trước: 80 x 2 = 160. Sau đó cộng: 120 + 160 = 280."
        },
        m2_mcq: {
          stimulus: "Gia đình bác Hai ở huyện Trà Ôn thu hoạch lúa vụ Đông Xuân. Thửa ruộng thứ nhất thu được 4 tấn 200 kg thóc, thửa ruộng thứ hai thu được ít hơn thửa thứ nhất 600 kg.",
          text: "Hỏi cả hai thửa ruộng gia đình bác Hai thu được tất cả bao nhiêu ki-lô-gam thóc?",
          options: [
            { id: "A", text: "3 600 kg", isCorrect: false },
            { id: "B", text: "7 800 kg", isCorrect: true },
            { id: "C", text: "8 400 kg", isCorrect: false },
            { id: "D", text: "7 200 kg", isCorrect: false }
          ],
          correct: "B",
          desc: "Thửa 2: 4 200 - 600 = 3 600 kg. Cả hai thửa: 4 200 + 3 600 = 7 800 kg."
        },
        m3_cr: {
          stimulus: "Bác Ba lát nền một phòng học hình chữ nhật có chiều dài 9 m, chiều rộng 6 m bằng những viên gạch men hình vuông cạnh 30 cm. Mỗi viên gạch men có giá 22 000 đồng.",
          text: "a) Tính số viên gạch men cần thiết để lát kín căn phòng học đó (coi mạch vữa không đáng kể).\nb) Tính số tiền bác Ba cần bỏ ra để mua đủ số gạch lát phòng.",
          solution: "a) Diện tích phòng: 9 x 6 = 54 (m²) = 540 000 cm². Diện tích 1 viên gạch: 30 x 30 = 900 (cm²). Số viên gạch: 540 000 : 900 = 600 (viên).\nb) Tiền mua gạch: 600 x 22 000 = 13 200 000 (đồng)."
        }
      },
      6: {
        m1_mcq: {
          text: "Điền số thích hợp vào chỗ chấm: 5 tấn 30 kg = ............. kg.",
          options: [
            { id: "A", text: "5 300", isCorrect: false },
            { id: "B", text: "5 030", isCorrect: true },
            { id: "C", text: "5 003", isCorrect: false },
            { id: "D", text: "53 000", isCorrect: false }
          ],
          correct: "B",
          desc: "5 tấn = 5 000 kg, cộng 30 kg = 5 030 kg."
        },
        m2_mcq: {
          stimulus: "Một thư viện trường tiểu học đợt 1 nhận về 1 850 quyển sách, đợt 2 nhận về nhiều hơn đợt 1 là 420 quyển sách.",
          text: "Hỏi cả hai đợt thư viện đã nhận về tất cả bao nhiêu quyển sách?",
          options: [
            { id: "A", text: "2 270 quyển", isCorrect: false },
            { id: "B", text: "4 120 quyển", isCorrect: true },
            { id: "C", text: "3 700 quyển", isCorrect: false },
            { id: "D", text: "4 540 quyển", isCorrect: false }
          ],
          correct: "B",
          desc: "Đợt 2: 1 850 + 420 = 2 270 quyển. Cả hai đợt: 1 850 + 2 270 = 4 120 quyển."
        },
        m3_cr: {
          stimulus: "Để xây dựng sân bóng mini cho thiếu nhi, một tổ công nhân cần trải thảm cỏ nhân tạo cho sân hình chữ nhật dài 25 m, rộng 16 m. Tiền thảm cỏ là 160 000 đồng/m² và tiền công trải cỏ là 20 000 đồng/m².",
          text: "a) Tính diện tích mặt sân cần trải thảm cỏ nhân tạo.\nb) Tính tổng chi phí để trải xong toàn bộ thảm cỏ cho sân bóng mini.",
          solution: "a) Diện tích sân: 25 x 16 = 400 (m²).\nb) Tổng chi phí 1m²: 160 000 + 20 000 = 180 000 (đồng/m²). Tổng chi phí: 400 x 180 000 = 72 000 000 (đồng)."
        }
      },
      7: {
        m1_mcq: {
          text: "Một hình vuông có chu vi là 36 cm. Diện tích của hình vuông đó là:",
          options: [
            { id: "A", text: "9 cm²", isCorrect: false },
            { id: "B", text: "81 cm²", isCorrect: true },
            { id: "C", text: "72 cm²", isCorrect: false },
            { id: "D", text: "144 cm²", isCorrect: false }
          ],
          correct: "B",
          desc: "Độ dài cạnh hình vuông: 36 : 4 = 9 cm. Diện tích: 9 x 9 = 81 cm²."
        },
        m2_mcq: {
          stimulus: "Một đoàn xe chở hàng viện trợ lũ lụt gồm 3 xe lớn chở được tất cả 7 500 kg gạo và 2 xe nhỏ chở được tất cả 3 500 kg gạo.",
          text: "Hỏi trung bình mỗi xe trong đoàn chở được bao nhiêu ki-lô-gam gạo?",
          options: [
            { id: "A", text: "2 500 kg", isCorrect: false },
            { id: "B", text: "2 200 kg", isCorrect: true },
            { id: "C", text: "2 000 kg", isCorrect: false },
            { id: "D", text: "1 750 kg", isCorrect: false }
          ],
          correct: "B",
          desc: "Tổng số gạo: 7 500 + 3 500 = 11 000 kg. Tổng số xe: 3 + 2 = 5 xe. Trung bình: 11 000 : 5 = 2 200 kg."
        },
        m3_cr: {
          stimulus: "Một cửa hàng bách hóa nhập về 15 thùng bánh, mỗi thùng có 24 hộp bánh. Cửa hàng đã bán được 2/3 tổng số hộp bánh với giá 45 000 đồng một hộp.",
          text: "a) Hỏi cửa hàng đã bán được tất cả bao nhiêu hộp bánh?\nb) Tính số tiền cửa hàng đã thu về từ số hộp bánh đã bán.",
          solution: "a) Tổng số hộp bánh nhập: 15 x 24 = 360 (hộp). Số hộp đã bán: 360 x 2/3 = 240 (hộp).\nb) Tiền thu được: 240 x 45 000 = 10 800 000 (đồng)."
        }
      },
      8: {
        m1_mcq: {
          text: "Trong các góc sau: Góc vuông, góc nhọn, góc tù, góc bẹt; góc có số đo lớn nhất là:",
          options: [
            { id: "A", text: "Góc tù", isCorrect: false },
            { id: "B", text: "Góc bẹt", isCorrect: true },
            { id: "C", text: "Góc vuông", isCorrect: false },
            { id: "D", text: "Góc nhọn", isCorrect: false }
          ],
          correct: "B",
          desc: "Góc bẹt có số đo bằng 180 độ, là góc có số đo lớn nhất."
        },
        m2_mcq: {
          stimulus: "Vườn chôm chôm của gia đình bạn Mai tại huyện Chợ Lách đợt 1 thu hoạch được 2 800 kg, đợt 2 thu hoạch được số chôm chôm gấp 2 lần đợt 1.",
          text: "Hỏi cả hai đợt gia đình bạn Mai thu hoạch được bao nhiêu ki-lô-gam chôm chôm?",
          options: [
            { id: "A", text: "5 600 kg", isCorrect: false },
            { id: "B", text: "8 400 kg", isCorrect: true },
            { id: "C", text: "7 200 kg", isCorrect: false },
            { id: "D", text: "6 400 kg", isCorrect: false }
          ],
          correct: "B",
          desc: "Đợt 2: 2 800 x 2 = 5 600 kg. Cả hai đợt: 2 800 + 5 600 = 8 400 kg."
        },
        m3_cr: {
          stimulus: "Một hồ chứa nước sạch phục vụ bà con có dạng hình hộp chữ nhật với chiều dài 12 m, chiều rộng 8 m và chiều cao 2,5 m. Hiện tại lượng nước trong hồ bằng 3/4 thể tích của cả hồ.",
          text: "a) Tính thể tích nước tối đa mà hồ có thể chứa được (theo đơn vị mét khối).\nb) Hỏi trong hồ hiện tại đang có bao nhiêu lít nước (biết 1 m³ = 1 000 lít)?",
          solution: "a) Thể tích hồ: 12 x 8 x 2,5 = 240 (m³).\nb) Lượng nước hiện tại: 240 x 3/4 = 180 (m³) = 180 000 (lít nước)."
        }
      }
    };

    const setData = mathBankBySet[setIdx] || mathBankBySet[1];

    if (type === "multiple_choice") {
      const qTemplate = level === "M1" ? setData.m1_mcq : setData.m2_mcq;
      return {
        questionId: spec.questionId,
        subject: "Toán",
        grade,
        level,
        questionType: "multiple_choice",
        points: pts,
        learningOutcome: spec.learningOutcome,
        competency: level === "M1" ? "Năng lực nhận biết số học & tính toán" : "Năng lực giải quyết vấn đề toán học",
        seaPlmMode: isSeaPlm,
        stimulus: qTemplate.stimulus ? { text: qTemplate.stimulus } : null,
        questionText: qTemplate.text,
        options: qTemplate.options.map(o => ({
          ...o,
          distractorRationale: o.isCorrect ? "Đáp án chính xác." : "Phương án nhiễu phổ biến."
        })),
        correctAnswer: qTemplate.correct,
        scoringGuide: {
          maxPoints: pts,
          rubric: [{ criteria: `Chọn đúng phương án ${qTemplate.correct}`, points: pts, description: qTemplate.desc }]
        },
        levelRationale: {
          cognitiveTask: `Vận dụng kiến thức Mức ${level} giải quyết câu hỏi trong Bộ đề số ${setIdx}.`,
          whyNotLower: "Yêu cầu tính toán chính xác theo chuẩn kỹ năng.",
          whyNotHigher: "Đạt chuẩn yêu cầu cần đạt Bộ đề GDPT 2018."
        }
      };
    } else if (type === "constructed_response") {
      const cr = setData.m3_cr;
      return {
        questionId: spec.questionId,
        subject: "Toán",
        grade,
        level,
        questionType: "constructed_response",
        points: pts,
        learningOutcome: spec.learningOutcome,
        competency: "Năng lực mô hình hóa & giải quyết vấn đề thực tế",
        seaPlmMode: isSeaPlm,
        stimulus: { text: cr.stimulus },
        questionText: cr.text,
        correctAnswer: cr.solution,
        scoringGuide: {
          maxPoints: pts,
          rubric: [
            { criteria: "Lời giải và phép tính phần a", points: Number((pts * 0.5).toFixed(2)), description: "Tính đúng câu a kèm đơn vị." },
            { criteria: "Lời giải và phép tính phần b", points: Number((pts - Number((pts * 0.5).toFixed(2))).toFixed(2)), description: "Tính đúng câu b và ghi đáp số đầy đủ." }
          ]
        },
        levelRationale: {
          cognitiveTask: `Giải bài toán thực tế có lời văn nhiều bước trong Bộ đề số ${setIdx}.`,
          whyNotLower: "Yêu cầu lập luận nhiều bước liên hoàn.",
          whyNotHigher: "Đạt chuẩn yêu cầu cần đạt Thông tư 27."
        }
      };
    }

    return null;
  }
}

module.exports = new MultiSetExamEngine();
