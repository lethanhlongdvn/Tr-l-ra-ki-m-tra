/**
 * AI EXAM & QUIZ GENERATOR MODULE (CHƯƠNG TRÌNH GDPT 2018 & THÔNG TƯ 27/2020/TT-BGDĐT)
 * Bộ sách chuẩn: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (KNTT)
 * Chuẩn định dạng: Ma trận 3 mức độ • Đề thi 3 ô đánh giá • Hướng dẫn chấm chi tiết
 * Thư viện Bài giảng & Kế hoạch bài dạy Tiểu học - Thầy Lê Thành Long
 */

var AIService = {
  // 7 Môn thi chính thức định kỳ Tiểu học
  // 7 Môn thi chính thức định kỳ Tiểu học theo Thông tư 27/2020/TT-BGDĐT
  // Quy định: Lớp 1, 2, 3 chỉ kiểm tra Toán & Tiếng Việt. Lớp 4, 5 kiểm tra Toán, Tiếng Việt, Tiếng Anh, Tin học, Công nghệ, Khoa học, Lịch sử và Địa lý.
  EXAM_SUBJECTS: {
    TOAN: { id: "TOAN", name: "Toán", grades: [1, 2, 3, 4, 5], icon: "fa-calculator" },
    TIENG_VIET: { id: "TIENG_VIET", name: "Tiếng Việt", grades: [1, 2, 3, 4, 5], icon: "fa-book-open" },
    TIENG_ANH: { id: "TIENG_ANH", name: "Tiếng Anh", grades: [4, 5], icon: "fa-language" },
    KHOA_HOC: { id: "KHOA_HOC", name: "Khoa học", grades: [4, 5], icon: "fa-flask" },
    LICH_SU_DIA_LY: { id: "LICH_SU_DIA_LY", name: "Lịch sử và Địa lý", grades: [4, 5], icon: "fa-earth-americas" },
    TIN_HOC: { id: "TIN_HOC", name: "Tin học", grades: [4, 5], icon: "fa-laptop-code" },
    CONG_NGHE: { id: "CONG_NGHE", name: "Công nghệ", grades: [4, 5], icon: "fa-gears" }
  },

  // LƯU Ý: Toàn bộ ngân hàng câu hỏi tĩnh/đề mẫu dự phòng đã được gỡ bỏ hoàn toàn theo yêu cầu.
  // Hệ thống bắt buộc 100% đề kiểm tra phải do Google Gemini AI trực tiếp biên soạn trực tuyến.

  /**
   * Tạo văn bản hướng dẫn chấm trắc nghiệm linh hoạt, chuẩn xác theo điểm từng câu
   */
  getMcqScoringGuide: function(mcqs) {
    if (!mcqs || !mcqs.length) return "Mỗi câu trả lời đúng được 0,5 điểm.";
    function fmtScoreVal(v) {
      var r = Math.round((parseFloat(v) || 0.5) * 4) / 4;
      return r.toString().replace('.', ',');
    }
    var firstScore = Math.round((parseFloat(mcqs[0].score) || 0.5) * 4) / 4;
    var allSame = mcqs.every(function(q) {
      var sc = Math.round((parseFloat(q.score) || 0.5) * 4) / 4;
      return Math.abs(sc - firstScore) < 0.001;
    });
    if (allSame) {
      return `Mỗi câu trả lời đúng được ${fmtScoreVal(firstScore)} điểm.`;
    }
    var groups = {};
    mcqs.forEach(function(q) {
      var sc = fmtScoreVal(q.score);
      if (!groups[sc]) groups[sc] = [];
      groups[sc].push(q.num);
    });
    var parts = [];
    Object.keys(groups).sort(function(a, b) {
      return parseFloat(a.replace(',', '.')) - parseFloat(b.replace(',', '.'));
    }).forEach(function(sc) {
      var qList = groups[sc];
      if (qList.length === 1) {
        parts.push(`Câu ${qList[0]} đúng được ${sc} điểm`);
      } else {
        parts.push(`Các câu ${qList.join(', ')} mỗi câu đúng được ${sc} điểm`);
      }
    });
    return parts.join('; ') + '.';
  },

  /**
   * Phân tích chính xác học kỳ và tiêu đề đề kiểm tra từ phạm vi ra đề (scope)
   * Đảm bảo khi chọn Cuối năm / Cả năm / Tuần 1-35 / Học kỳ 2 thì luôn trả về HỌC KÌ II và ĐỀ KIỂM TRA HỌC KÌ II
   */
  resolveExamTermInfo: function(scope) {
    var s = (scope || "").toLowerCase().trim();
    
    // Kiểm tra có phải học kỳ 2 / cả năm / cuối năm không
    var isTerm2 = s.includes("kỳ 2") || s.includes("kì 2") || 
                  s.includes("kỳ ii") || s.includes("kì ii") || 
                  s.includes("hk2") || s.includes("hkii") || 
                  s.includes("cả năm") || s.includes("cuối năm") || 
                  s.includes("tập 2") || s.includes("tap 2") ||
                  s.includes("tuần 1 - 35") || s.includes("tuần 1-35") || 
                  s.includes("tuần 19 - 35") || s.includes("tuần 19-35") ||
                  s.includes("tuần 28 - 35") || s.includes("tuần 28-35") ||
                  s.includes("tuần 19 - 27") || s.includes("tuần 19-27");
                  
    var isMid = s.includes("giữa") || s.includes("giua");
    
    // Kiểm tra tuần đơn lẻ (ví dụ: "Theo Tuần 25", "Tuần 20")
    var singleWeekMatch = s.match(/^(?:theo\s+)?tuần\s*(\d+)$/i) || s.match(/\btuần\s*(\d+)\b(?!\s*[-–]\s*\d+)/i);
    var weekNum = singleWeekMatch ? parseInt(singleWeekMatch[1] || singleWeekMatch[2], 10) : null;
    if (weekNum !== null && !s.includes("cả năm") && !s.includes("cuối năm") && !s.includes("tuần 1 - 35")) {
      if (weekNum > 18) {
        isTerm2 = true;
      }
    } else {
      weekNum = null;
    }

    if (isTerm2) {
      if (isMid) {
        return {
          term: "HỌC KÌ II",
          period: "GIỮA HỌC KÌ II",
          headerTitle: "ĐỀ KIỂM TRA GIỮA HỌC KÌ II",
          matrixTitle: "GIỮA HỌC KÌ II"
        };
      }
      if (weekNum !== null) {
        return {
          term: "HỌC KÌ II",
          period: `HỌC KÌ II (TUẦN ${weekNum})`,
          headerTitle: `ĐỀ KIỂM TRA HỌC KÌ II (TUẦN ${weekNum})`,
          matrixTitle: `HỌC KÌ II (TUẦN ${weekNum})`
        };
      }
      return {
        term: "HỌC KÌ II",
        period: "CUỐI HỌC KÌ II",
        headerTitle: "ĐỀ KIỂM TRA CUỐI HỌC KÌ II",
        matrixTitle: "CUỐI HỌC KÌ II"
      };
    } else {
      if (isMid) {
        return {
          term: "HỌC KÌ I",
          period: "GIỮA HỌC KÌ I",
          headerTitle: "ĐỀ KIỂM TRA GIỮA HỌC KÌ I",
          matrixTitle: "GIỮA HỌC KÌ I"
        };
      }
      if (weekNum !== null) {
        return {
          term: "HỌC KÌ I",
          period: `HỌC KÌ I (TUẦN ${weekNum})`,
          headerTitle: `ĐỀ KIỂM TRA HỌC KÌ I (TUẦN ${weekNum})`,
          matrixTitle: `HỌC KÌ I (TUẦN ${weekNum})`
        };
      }
      return {
        term: "HỌC KÌ I",
        period: "CUỐI HỌC KÌ I",
        headerTitle: "ĐỀ KIỂM TRA CUỐI HỌC KÌ I",
        matrixTitle: "CUỐI HỌC KÌ I"
      };
    }
  },

  /**
   * CẤU HÌNH CỨNG MA TRẬN & MẠCH KIẾN THỨC CHUẨN 100% THEO CHƯƠNG TRÌNH SGK KNTT
   * Phân chia chuẩn xác từng môn học, từng khối lớp và từng giai đoạn kiểm tra định kỳ (Thông tư 27)
   */
  getMasterExamMatrixConfig: function(grade, subjectId, scope) {
    var g = parseInt(grade) || 5;
    var sub = (subjectId || "TOAN").toUpperCase().replace("LICH_SU_DIA_LY", "LS_DL");
    var termInfo = this.resolveExamTermInfo(scope);
    var isTerm2 = termInfo.term === "HỌC KÌ II";
    var isMid = termInfo.period.includes("GIỮA");

    // 1. MÔN TOÁN (LỚP 1 - 5): Chuẩn 3 mạch kiến thức của CT GDPT 2018
    if (sub === "TOAN") {
      var numDesc = "Số tự nhiên, phân số, số thập phân; tỉ số phần trăm; 4 phép tính; tính giá trị biểu thức và giải toán có lời văn.";
      var geomDesc = "Hình phẳng (tam giác, thang, tròn), hình khối (hộp chữ nhật, lập phương); chu vi, diện tích, thể tích; đơn vị đo, toán chuyển động đều.";
      var statDesc = "Thu thập, phân loại số liệu; đọc và phân tích biểu đồ hình quạt tròn, bảng số liệu; khả năng xảy ra của một sự kiện.";

      if (g <= 2) {
        numDesc = isTerm2 ? "Các số trong phạm vi 100 (lớp 1) hoặc phạm vi 1000 (lớp 2); phép cộng, phép trừ có nhớ; phép nhân, chia (bảng 2, 5); giải toán 1 bước tính." : "Các số trong phạm vi 10, 20 (lớp 1) hoặc phạm vi 100 (lớp 2); phép cộng, phép trừ; so sánh số.";
        geomDesc = isTerm2 ? "Hình vuông, tròn, tam giác, chữ nhật; điểm, đoạn thẳng, đường thẳng; đơn vị đo cm, dm, m, km; xem đồng hồ, lịch." : "Hình phẳng cơ bản; nhận biết vị trí, định hướng không gian; độ dài đoạn thẳng cm.";
        statDesc = "Thu thập, phân loại, kiểm đếm số liệu đơn giản; khả năng xảy ra của sự kiện (chắc chắn, có thể, không thể).";
      } else if (g === 3 || g === 4) {
        numDesc = isTerm2 ? (g === 3 ? "Các số đến 100 000; 4 phép tính; tính nhẩm, giá trị biểu thức, giải toán." : "Phân số, các phép tính với phân số; dấu hiệu chia hết; tìm hai số khi biết tổng/hiệu và tỉ số.") : (g === 3 ? "Các số đến 10 000; bảng nhân, bảng chia 6, 7, 8, 9; làm quen biểu thức." : "Số có nhiều chữ số; 4 phép tính với số tự nhiên; tính chất giao hoán, kết hợp, phân phối; giải toán tìm số trung bình cộng, tìm hai số khi biết tổng và hiệu.");
        geomDesc = isTerm2 ? (g === 3 ? "Hình tròn, tâm, bán kính, đường kính; chu vi, diện tích hình chữ nhật, hình vuông; đơn vị đo ml, g, kg, nhiệt độ." : "Hình bình hành, hình thoi; diện tích hình bình hành, hình thoi; đơn vị đo diện tích dm², m², mm²; đơn vị đo thời gian thế kỉ.") : (g === 3 ? "Góc vuông, không vuông; đỉnh, cạnh; hình chữ nhật, hình vuông; đơn vị đo mm, cm, dm, m, km." : "Góc nhọn, tù, bẹt; hai đường thẳng vuông góc, song song; đơn vị đo yến, tạ, tấn, giây, thế kỉ.");
        statDesc = "Thu thập, phân loại, sắp xếp số liệu; đọc bảng số liệu, biểu đồ tranh, biểu đồ cột; khả năng xảy ra của một sự kiện.";
      } else if (g === 5) {
        numDesc = isTerm2 ? "Số thập phân, 4 phép tính với số thập phân; tỉ số phần trăm và các bài toán về tỉ số phần trăm; tính giá trị biểu thức và giải toán có lời văn." : "Ôn tập phân số; số thập phân, hàng của số thập phân; cộng, trừ, nhân, chia số thập phân; tính giá trị biểu thức và giải toán có lời văn.";
        geomDesc = isTerm2 ? "Hình tròn, chu vi và diện tích hình tròn; hình hộp chữ nhật, hình lập phương: diện tích xung quanh, toàn phần, thể tích (cm³, dm³, m³); toán chuyển động đều (vận tốc, quãng đường, thời gian)." : "Hình tam giác, hình thang: nhận biết các yếu tố và tính diện tích; đơn vị đo diện tích ha, km²; giải toán liên quan đến diện tích.";
        statDesc = isTerm2 ? "Thu thập, phân loại số liệu; đọc và phân tích bảng số liệu, biểu đồ hình quạt tròn; khả năng xảy ra của một sự kiện trong thực tế." : "Thu thập, phân loại số liệu; đọc và hoàn thiện bảng số liệu thống kê; biểu đồ cột, số liệu trung bình.";
      }

      return [
        {
          key: "so_phep_tinh",
          topic: "1. Số và phép tính",
          desc: numDesc,
          domainKeywords: ["số", "phép tính", "phân số", "thập phân", "tỉ số", "phần trăm", "cộng", "trừ", "nhân", "chia", "giá trị biểu thức", "đặt tính", "tính nhẩm", "tìm x", "giải toán"],
          targetRatio: 0.50
        },
        {
          key: "hinh_hoc_do_luong",
          topic: "2. Hình học và Đo lường",
          desc: geomDesc,
          domainKeywords: ["hình", "chu vi", "diện tích", "thể tích", "tam giác", "thang", "tròn", "hộp chữ nhật", "lập phương", "bán kính", "đường kính", "chiều cao", "vận tốc", "quãng đường", "thời gian", "chuyển động", "đơn vị đo", "ha", "m²", "cm²", "m³", "dm³", "lít"],
          targetRatio: 0.35
        },
        {
          key: "thong_ke_xac_suat",
          topic: "3. Một số yếu tố Thống kê và Xác suất",
          desc: statDesc,
          domainKeywords: ["thống kê", "xác suất", "biểu đồ", "quạt tròn", "bảng số liệu", "kiểm đếm", "khả năng", "sự kiện", "chắc chắn", "có thể", "không thể", "xúc xắc", "đồng xu"],
          targetRatio: 0.15
        }
      ];
    }

    // 2. MÔN KHOA HỌC (LỚP 4, LỚP 5)
    if (sub === "KHOA_HOC") {
      if (g === 5) {
        if (!isTerm2) {
          // HK1 Lớp 5
          return [
            {
              key: "kh5_chat",
              topic: "Chủ đề 1. Chất",
              desc: "Thành phần và vai trò của đất đối với cây trồng; ô nhiễm, xói mòn và bảo vệ môi trường đất; hỗn hợp và dung dịch; đặc điểm chất rắn, lỏng, khí và biến đổi trạng thái; sự biến đổi hoá học của chất (Bài 1 - 6).",
              domainKeywords: ["chất", "đất", "thành phần của đất", "vai trò của đất", "ô nhiễm đất", "xói mòn", "bảo vệ đất", "hỗn hợp", "dung dịch", "trạng thái", "rắn", "lỏng", "khí", "biến đổi trạng thái", "biến đổi hoá học", "biến đổi hóa học"],
              targetRatio: 0.35
            },
            {
              key: "kh5_nang_luong",
              topic: "Chủ đề 2. Năng lượng",
              desc: "Vai trò của năng lượng; sử dụng năng lượng điện; mạch điện đơn giản, vật dẫn điện và vật cách điện; năng lượng chất đốt; sử dụng năng lượng mặt trời, gió, nước chảy (Bài 7 - 12).",
              domainKeywords: ["năng lượng", "vai trò năng lượng", "điện", "sử dụng điện", "mạch điện", "pin", "dây dẫn", "bóng đèn", "vật dẫn điện", "vật cách điện", "chất đốt", "than đá", "dầu mỏ", "khí đốt", "năng lượng mặt trời", "năng lượng gió", "nước chảy"],
              targetRatio: 0.35
            },
            {
              key: "kh5_thuc_vat_dong_vat",
              topic: "Chủ đề 3. Thực vật và động vật",
              desc: "Sinh sản của thực vật có hoa; sự phát triển của cây con; sinh sản của động vật; vòng đời và sự phát triển của động vật (Bài 13 - 16).",
              domainKeywords: ["thực vật có hoa", "hoa", "nhị", "nhụy", "thụ phấn", "thụ tinh", "quả", "hạt", "cây con", "nảy mầm", "phát triển của cây", "sinh sản của động vật", "thụ tinh động vật", "đẻ trứng", "đẻ con", "vòng đời", "sâu", "bướm", "ấu trùng", "nòng nọc", "ếch"],
              targetRatio: 0.30
            }
          ];
        } else if (isMid) {
          // Giữa HK2 Lớp 5
          return [
            {
              key: "kh5_thuc_vat_dong_vat_on",
              topic: "Chủ đề 3. Thực vật và động vật (Ôn tập)",
              desc: "Củng cố kiến thức sinh sản của thực vật có hoa, hạt nảy mầm và vòng đời phát triển của động vật (Bài 17).",
              domainKeywords: ["thực vật", "động vật", "hoa", "hạt", "thụ phấn", "vòng đời", "đẻ trứng", "đẻ con", "biến thái"],
              targetRatio: 0.30
            },
            {
              key: "kh5_vi_khuan",
              topic: "Chủ đề 4. Vi khuẩn",
              desc: "Vi khuẩn xung quanh chúng ta; vi khuẩn có ích trong chế biến thực phẩm; vi khuẩn gây bệnh ở người và cách phòng tránh (Bài 18 - 21).",
              domainKeywords: ["vi khuẩn", "kính hiển vi", "vi sinh vật", "lên men", "chế biến thực phẩm", "sữa chua", "muối dưa", "vi khuẩn có ích", "vi khuẩn gây bệnh", "tiêu chảy", "rửa tay", "xà phòng", "thức ăn ôi thiu", "bảo quản thực phẩm"],
              targetRatio: 0.35
            },
            {
              key: "kh5_con_nguoi_suc_khoe",
              topic: "Chủ đề 5. Con người và sức khỏe",
              desc: "Sự hình thành cơ thể người; các giai đoạn phát triển chính của con người; nam và nữ; chăm sóc sức khỏe tuổi dậy thì (Bài 22 - 25).",
              domainKeywords: ["con người", "cơ thể người", "thụ tinh", "trứng", "tinh trùng", "thai nhi", "giai đoạn phát triển", "tuổi dậy thì", "dậy thì", "nam và nữ", "mụn trứng cá", "tuyến mồ hôi", "chiều cao", "vệ sinh tuổi dậy thì"],
              targetRatio: 0.35
            }
          ];
        } else {
          // Cuối HK2 / Cuối năm Lớp 5 (Chuẩn 4 chủ đề SGK KNTT bao quát 100%)
          return [
            {
              key: "kh5_thuc_vat_dong_vat",
              topic: "Chủ đề 3. Thực vật và động vật",
              desc: "Sinh sản của thực vật có hoa, sự phát triển của hạt mọc thành cây; sinh sản và vòng đời phát triển của động vật (Bài 13 - 17).",
              domainKeywords: ["thực vật có hoa", "nhị", "nhụy", "thụ phấn", "thụ tinh hoa", "hạt mọc thành cây", "bộ phận của hạt", "nảy mầm", "sinh sản động vật", "đẻ trứng", "đẻ con", "vòng đời của bướm", "vòng đời của ếch", "vòng đời động vật", "ấu trùng"],
              targetRatio: 0.20
            },
            {
              key: "kh5_vi_khuan",
              topic: "Chủ đề 4. Vi khuẩn",
              desc: "Đặc điểm, kích thước vi khuẩn; vi khuẩn có ích trong chế biến thực phẩm (muối dưa, làm sữa chua); vi khuẩn gây bệnh ở người và biện pháp phòng tránh, bảo quản thực phẩm (Bài 18 - 21).",
              domainKeywords: ["vi khuẩn", "kính hiển vi", "vi sinh vật", "lên men", "chế biến thực phẩm", "sữa chua", "muối dưa", "vi khuẩn có ích", "vi khuẩn gây bệnh", "phòng bệnh do vi khuẩn", "rửa tay", "xà phòng", "thức ăn ôi thiu", "bảo quản thực phẩm", "tủ lạnh", "đun sôi"],
              targetRatio: 0.25
            },
            {
              key: "kh5_con_nguoi_suc_khoe",
              topic: "Chủ đề 5. Con người và sức khỏe",
              desc: "Sự hình thành cơ thể người; các giai đoạn phát triển chính của con người; nam và nữ; chăm sóc sức khỏe tuổi dậy thì; phòng tránh bị xâm hại (Bài 22 - 27).",
              domainKeywords: ["cơ thể người", "thụ tinh", "trứng và tinh trùng", "thai nhi", "giai đoạn phát triển", "tuổi dậy thì", "dậy thì", "nam và nữ", "mụn trứng cá", "tuyến mồ hôi", "vệ sinh cá nhân", "phòng tránh bị xâm hại", "xâm hại", "quy tắc đồ lót", "vùng riêng tư", "an toàn cơ thể"],
              targetRatio: 0.25
            },
            {
              key: "kh5_sinh_vat_moi_truong",
              topic: "Chủ đề 6. Sinh vật và môi trường",
              desc: "Chức năng của môi trường đối với sinh vật; tác động của con người đến môi trường và một số biện pháp bảo vệ môi trường, bảo vệ nguồn nước sạch và ứng phó hạn mặn (Bài 28 - 30).",
              domainKeywords: ["sinh vật và môi trường", "chức năng của môi trường", "cung cấp tài nguyên", "nơi chứa rác thải", "tác động của con người", "bảo vệ môi trường", "ô nhiễm môi trường", "rác thải", "nguồn nước", "nước sạch", "nước mặn", "xâm nhập mặn", "hạn mặn", "trữ nước ngọt", "trồng cây", "dòng sông quê hương"],
              targetRatio: 0.30
            }
          ];
        }
      } else if (g === 4) {
        if (!isTerm2) {
          // HK1 Lớp 4
          return [
            {
              key: "kh4_chat",
              topic: "Chủ đề 1. Chất",
              desc: "Tính chất của nước, sự chuyển thể và vòng tuần hoàn của nước; sự ô nhiễm và bảo vệ nguồn nước; tính chất và thành phần không khí; vai trò của không khí và gió bão (Bài 1 - 7).",
              domainKeywords: ["chất", "nước", "tính chất của nước", "chuyển thể của nước", "vòng tuần hoàn của nước", "bảo vệ nguồn nước", "làm sạch nước", "không khí", "tính chất không khí", "thành phần không khí", "ôxi", "vai trò không khí", "gió", "bão", "phòng chống bão"],
              targetRatio: 0.40
            },
            {
              key: "kh4_nang_luong",
              topic: "Chủ đề 2. Năng lượng",
              desc: "Ánh sáng và sự truyền ánh sáng, vai trò của ánh sáng; âm thanh và sự truyền âm thanh; nhiệt độ, sự truyền nhiệt và vật dẫn nhiệt (Bài 8 - 14).",
              domainKeywords: ["năng lượng", "ánh sáng", "truyền ánh sáng", "bóng tối", "vai trò ánh sáng", "âm thanh", "truyền âm thanh", "rung động", "nhiệt độ", "nhiệt kế", "sự truyền nhiệt", "vật dẫn nhiệt tốt", "vật dẫn nhiệt kém"],
              targetRatio: 0.35
            },
            {
              key: "kh4_thuc_vat_dong_vat",
              topic: "Chủ đề 3. Thực vật và động vật",
              desc: "Nhu cầu sống của thực vật; nhu cầu sống của động vật; chăm sóc cây trồng và vật nuôi (Bài 15 - 18).",
              domainKeywords: ["thực vật", "động vật", "nhu cầu sống của thực vật", "nước", "chất khoáng", "quang hợp", "nhu cầu sống của động vật", "thức ăn", "chăm sóc cây trồng", "chăm sóc vật nuôi"],
              targetRatio: 0.25
            }
          ];
        } else {
          // Cuối HK2 Lớp 4
          return [
            {
              key: "kh4_nam",
              topic: "Chủ đề 4. Nấm",
              desc: "Đặc điểm chung của nấm; nấm ăn và nấm trong chế biến thực phẩm; nấm gây hỏng thực phẩm và nấm độc (Bài 19 - 22).",
              domainKeywords: ["nấm", "đặc điểm của nấm", "mũ nấm", "thân nấm", "chân nấm", "nấm rơm", "nấm mộc nhĩ", "nấm hương", "nấm men", "nấm mốc", "hỏng thực phẩm", "nấm độc", "ngộ độc nấm"],
              targetRatio: 0.30
            },
            {
              key: "kh4_con_nguoi_suc_khoe",
              topic: "Chủ đề 5. Con người và sức khỏe",
              desc: "Vai trò của chất dinh dưỡng đối với cơ thể; chế độ ăn uống cân bằng; một số bệnh liên quan đến dinh dưỡng; thực phẩm an toàn; phòng tránh đuối nước (Bài 23 - 28).",
              domainKeywords: ["chất dinh dưỡng", "chất bột đường", "chất đạm", "chất béo", "vitamin", "chất khoáng", "ăn uống cân bằng", "tháp dinh dưỡng", "béo phì", "suy dinh dưỡng", "thiếu máu", "thực phẩm an toàn", "phòng tránh đuối nước", "đuối nước"],
              targetRatio: 0.40
            },
            {
              key: "kh4_sinh_vat_moi_truong",
              topic: "Chủ đề 6. Sinh vật và môi trường",
              desc: "Chuỗi thức ăn trong tự nhiên; vai trò của thực vật trong chuỗi thức ăn; mối quan hệ dinh dưỡng giữa các loài sinh vật (Bài 29 - 31).",
              domainKeywords: ["sinh vật và môi trường", "chuỗi thức ăn", "mắt xích", "sinh vật sản xuất", "sinh vật tiêu thụ", "vai trò của thực vật", "cỏ", "thỏ", "cáo", "mối quan hệ dinh dưỡng"],
              targetRatio: 0.30
            }
          ];
        }
      }
    }

    // 3. MÔN LỊCH SỬ VÀ ĐỊA LÍ (LỚP 4, LỚP 5)
    if (sub === "LICH_SU_DIA_LY" || sub === "LS_DL") {
      if (g === 5) {
        if (!isTerm2) {
          // HK1 Lớp 5
          return [
            {
              key: "lsdl5_dat_nuoc_con_nguoi",
              topic: "Chủ đề 1. Đất nước và con người Việt Nam",
              desc: "Vị trí địa lí, lãnh thổ, đơn vị hành chính, Quốc kì, Quốc huy, Quốc ca; thiên nhiên, biển đảo, dân cư và các dân tộc Việt Nam (Bài 1 - 4).",
              domainKeywords: ["vị trí địa lí", "lãnh thổ", "quốc kì", "quốc huy", "quốc ca", "thiên nhiên việt nam", "địa hình", "khí hậu", "sông ngòi", "biển đảo", "hoàng sa", "trường sa", "dân cư", "dân tộc", "kinh", "bản đồ"],
              targetRatio: 0.35
            },
            {
              key: "lsdl5_quoc_gia_dau_tien",
              topic: "Chủ đề 2. Những quốc gia đầu tiên trên lãnh thổ Việt Nam",
              desc: "Nhà nước Văn Lang, Nhà nước Âu Lạc; Vương quốc Phù Nam; Vương quốc Chăm-pa (Bài 5 - 7).",
              domainKeywords: ["văn lang", "âu lạc", "hùng vương", "an dương vương", "thành cổ loa", "trống đồng đông sơn", "phù nam", "chăm-pa", "óc eo", "tháp chàm", "quốc gia đầu tiên"],
              targetRatio: 0.30
            },
            {
              key: "lsdl5_xay_dung_bao_ve",
              topic: "Chủ đề 3. Xây dựng và bảo vệ đất nước (Thế kỉ X - 1945)",
              desc: "Đấu tranh thời Bắc thuộc; Triều Lý và định đô Thăng Long; Triều Trần và kháng chiến chống Mông - Nguyên; Khởi nghĩa Lam Sơn và Triều Hậu Lê; Triều Nguyễn; Cách mạng tháng Tám năm 1945 (Bài 8 - 14).",
              domainKeywords: ["bắc thuộc", "khởi nghĩa hai bà trưng", "ngô quyền", "bạch đằng", "triều lý", "lý thái tổ", "dời đô", "thăng long", "lý thường kiệt", "triều trần", "trần hưng đạo", "mông - nguyên", "hội nghị diên hồng", "lam sơn", "lê lợi", "nguyễn trãi", "hậu lê", "triều nguyễn", "cách mạng tháng tám", "bác hồ", "tuyên ngôn độc lập"],
              targetRatio: 0.35
            }
          ];
        } else {
          // Cuối HK2 Lớp 5
          return [
            {
              key: "lsdl5_bao_ve_doi_moi",
              topic: "Chủ đề 3. Bảo vệ đất nước và Đất nước Đổi mới (1945 đến nay)",
              desc: "Chiến dịch Điện Biên Phủ năm 1954; Chiến dịch Hồ Chí Minh lịch sử năm 1975 giải phóng miền Nam, thống nhất đất nước; Công cuộc Đổi mới đất nước từ 1986 đến nay (Bài 15 - 17).",
              domainKeywords: ["điện biên phủ", "1954", "chiến thắng điện biên phủ", "đại tướng võ nguyên giáp", "chiến dịch hồ chí minh", "1975", "giải phóng miền nam", "thống nhất đất nước", "đổi mới", "đất nước đổi mới", "công nghiệp hóa", "hiện đại hóa"],
              targetRatio: 0.35
            },
            {
              key: "lsdl5_cac_nuoc_lang_gieng",
              topic: "Chủ đề 4. Các nước láng giềng",
              desc: "Nước Cộng hòa Nhân dân Trung Hoa; Nước CHDCND Lào; Vương quốc Cam-pu-chia; Hiệp hội các quốc gia Đông Nam Á (ASEAN) (Bài 18 - 21).",
              domainKeywords: ["trung quốc", "bắc kinh", "vạn lí trường thành", "lào", "viêng chăn", "luông-pha-bang", "cam-pu-chia", "phnôm phênh", "ăng-co vát", "asean", "hiệp hội các quốc gia đông nam á", "đông nam á", "láng giềng"],
              targetRatio: 0.35
            },
            {
              key: "lsdl5_the_gioi_chung_tay",
              topic: "Chủ đề 5 & 6. Tìm hiểu thế giới và Chung tay xây dựng thế giới",
              desc: "Các châu lục và đại dương trên thế giới; dân số và các chủng tộc; nền văn minh Ai Cập và Hy Lạp cổ đại; xây dựng thế giới xanh - sạch - đẹp và thế giới hòa bình (Bài 22 - 28).",
              domainKeywords: ["châu lục", "đại dương", "châu á", "châu âu", "châu phi", "châu mĩ", "châu đại dương", "châu nam cực", "thái bình dương", "ấn độ dương", "đại tây dương", "bắc băng dương", "dân số thế giới", "chủng tộc", "ai cập", "kim tự tháp", "hy lạp", "thế giới xanh", "hòa bình"],
              targetRatio: 0.30
            }
          ];
        }
      } else if (g === 4) {
        if (!isTerm2) {
          // HK1 Lớp 4
          return [
            {
              key: "lsdl4_dia_phuong",
              topic: "Chủ đề 1. Địa phương em",
              desc: "Vị trí địa lí, tự nhiên, dân cư, lịch sử và văn hóa truyền thống của địa phương em (Bài 1 - 3).",
              domainKeywords: ["địa phương em", "tỉnh", "thành phố", "vị trí địa lí", "thiên nhiên địa phương", "lịch sử địa phương", "truyền thống văn hóa"],
              targetRatio: 0.30
            },
            {
              key: "lsdl4_trung_du_mien_nui_bac_bo",
              topic: "Chủ đề 2. Trung du và miền núi Bắc Bộ",
              desc: "Thiên nhiên, dân cư và hoạt động sản xuất; Đền Hùng và Lễ giỗ Tổ Hùng Vương; Chiến dịch Điện Biên Phủ (Bài 4 - 7).",
              domainKeywords: ["trung du và miền núi bắc bộ", "hoàng liên sơn", "fansipan", "ruộng bậc thang", "thủy điện hòa bình", "đền hùng", "giỗ tổ hùng vương", "phú thọ"],
              targetRatio: 0.35
            },
            {
              key: "lsdl4_dong_bang_bac_bo",
              topic: "Chủ đề 3. Đồng bằng Bắc Bộ",
              desc: "Thiên nhiên và con người; làng quê truyền thống; Thăng Long - Hà Nội; Văn Miếu - Quốc Tử Giám (Bài 8 - 11).",
              domainKeywords: ["đồng bằng bắc bộ", "sông hồng", "đê sông hồng", "hà nội", "thăng long", "văn miếu", "quốc tử giám", "làng quê bắc bộ"],
              targetRatio: 0.35
            }
          ];
        } else {
          // Cuối HK2 Lớp 4
          return [
            {
              key: "lsdl4_duyen_hai_mientrung",
              topic: "Chủ đề 4. Vùng Duyên hải miền Trung",
              desc: "Thiên nhiên và dân cư vùng Duyên hải miền Trung; Cố đô Huế; Phố cổ Hội An (Bài 12 - 16).",
              domainKeywords: ["duyên hải miền trung", "bờ biển miền trung", "cố đô huế", "sông hương", "kinh thành huế", "phố cổ hội an", "quảng nam", "di sản"],
              targetRatio: 0.35
            },
            {
              key: "lsdl4_tay_nguyen",
              topic: "Chủ đề 5. Vùng Tây Nguyên",
              desc: "Thiên nhiên, cao nguyên xếp tầng; Không gian văn hóa Cồng chiêng Tây Nguyên; Lễ hội cồng chiêng (Bài 17 - 20).",
              domainKeywords: ["tây nguyên", "cao nguyên", "đất đỏ badan", "cà phê", "cồng chiêng tây nguyên", "nhà rông", "lễ hội đâm trâu", "lễ hội cồng chiêng"],
              targetRatio: 0.30
            },
            {
              key: "lsdl4_nam_bo",
              topic: "Chủ đề 6. Vùng Nam Bộ",
              desc: "Thiên nhiên vùng đất Nam Bộ; Thành phố Hồ Chí Minh; Địa đạo Củ Chi (Bài 21 - 25).",
              domainKeywords: ["nam bộ", "đồng bằng sông cửu long", "sông đồng nai", "thành phố hồ chí minh", "sài gòn", "địa đạo củ chi", "chợ nổi", "miền tây"],
              targetRatio: 0.35
            }
          ];
        }
      }
    }

    // 4. MÔN CÔNG NGHỆ (LỚP 4, LỚP 5)
    if (sub === "CONG_NGHE") {
      if (g === 5) {
        if (!isTerm2) {
          return [
            {
              key: "cn5_doi_song_sang_che",
              topic: "Chủ đề 1. Công nghệ và đời sống & Nhà sáng chế",
              desc: "Vai trò của công nghệ đối với đời sống con người; các nhà sáng chế tiêu biểu và phát minh của họ (Bài 1, 2).",
              domainKeywords: ["công nghệ", "vai trò công nghệ", "nhà sáng chế", "sáng chế", "ê-đi-xơn", "phát minh", "bóng đèn", "sản phẩm công nghệ"],
              targetRatio: 0.35
            },
            {
              key: "cn5_thiet_ke",
              topic: "Chủ đề 2. Thiết kế và đánh giá sản phẩm công nghệ",
              desc: "Tìm hiểu quy trình thiết kế; thực hành thiết kế sản phẩm công nghệ đơn giản (Bài 3, 4).",
              domainKeywords: ["thiết kế", "tìm hiểu thiết kế", "thiết kế sản phẩm", "quy trình thiết kế", "bản vẽ", "vật liệu thiết kế", "đánh giá sản phẩm"],
              targetRatio: 0.35
            },
            {
              key: "cn5_su_dung_dien_thoai",
              topic: "Chủ đề 3. Sử dụng công nghệ an toàn (Điện thoại)",
              desc: "Tác dụng của điện thoại; cách sử dụng điện thoại thông minh an toàn, tiết kiệm và có văn hóa (Bài 5).",
              domainKeywords: ["điện thoại", "sử dụng điện thoại", "điện thoại thông minh", "an toàn điện thoại", "tiết kiệm pin", "văn hóa sử dụng điện thoại"],
              targetRatio: 0.30
            }
          ];
        } else {
          return [
            {
              key: "cn5_su_dung_tu_lanh",
              topic: "Chủ đề 1. Công nghệ trong gia đình (Sử dụng tủ lạnh)",
              desc: "Cấu tạo và công dụng của tủ lạnh; cách sử dụng, bảo quản thực phẩm trong tủ lạnh an toàn và tiết kiệm điện (Bài 6).",
              domainKeywords: ["tủ lạnh", "sử dụng tủ lạnh", "ngăn đá", "ngăn mát", "bảo quản thực phẩm", "tiết kiệm điện tủ lạnh", "vệ sinh tủ lạnh"],
              targetRatio: 0.35
            },
            {
              key: "cn5_lap_rap_xe_dien",
              topic: "Chủ đề 2. Lắp ráp mô hình kĩ thuật (Mô hình xe điện)",
              desc: "Các bộ phận, chi tiết và quy trình lắp ráp mô hình xe điện chạy bằng pin (Bài 7).",
              domainKeywords: ["mô hình xe điện", "xe điện chạy bằng pin", "pin", "động cơ", "bánh xe", "trục xe", "lắp ráp mô hình", "quy trình lắp ráp"],
              targetRatio: 0.35
            },
            {
              key: "cn5_nang_luong_tai_tao",
              topic: "Chủ đề 3. Mô hình năng lượng tái tạo (Điện gió & Điện mặt trời)",
              desc: "Cấu tạo và quy trình lắp ráp mô hình máy phát điện gió; mô hình điện mặt trời (Bài 8, 9).",
              domainKeywords: ["máy phát điện gió", "điện gió", "mô hình điện mặt trời", "tấm pin mặt trời", "năng lượng tái tạo", "cánh quạt", "tiết kiệm năng lượng"],
              targetRatio: 0.30
            }
          ];
        }
      } else if (g === 4) {
        if (!isTerm2) {
          return [
            {
              key: "cn4_hoa_cay_canh",
              topic: "Chủ đề 1. Hoa và cây cảnh trong đời sống",
              desc: "Lợi ích của hoa và cây cảnh; nhận biết một số loại hoa, cây cảnh phổ biến (Bài 1, 2).",
              domainKeywords: ["hoa", "cây cảnh", "lợi ích của hoa", "làm đẹp không gian", "thanh lọc không khí", "hoa hồng", "hoa đào", "hoa mai"],
              targetRatio: 0.50
            },
            {
              key: "cn4_trong_cham_soc_chau",
              topic: "Chủ đề 2. Trồng và chăm sóc hoa, cây cảnh trong chậu",
              desc: "Dụng cụ, vật liệu trồng hoa; quy trình gieo hạt, trồng cây con và chăm sóc hoa, cây cảnh trong chậu (Bài 3 - 5).",
              domainKeywords: ["trồng hoa trong chậu", "chậu cây", "giá thể", "gieo hạt", "tưới nước", "bón phân", "chăm sóc cây cảnh"],
              targetRatio: 0.50
            }
          ];
        } else {
          return [
            {
              key: "cn4_lap_ghep_mo_hinh",
              topic: "Chủ đề 3. Lắp ghép mô hình kĩ thuật",
              desc: "Bộ chi tiết và dụng cụ lắp ghép; quy trình lắp ghép các mô hình kĩ thuật đơn giản (Bài 6, 7).",
              domainKeywords: ["lắp ghép mô hình", "chi tiết kĩ thuật", "bảng mẫu", "ốc vít", "cờ lê", "tua vít", "bập bênh", "xe tải"],
              targetRatio: 0.50
            },
            {
              key: "cn4_do_choi_dan_gian",
              topic: "Chủ đề 4. Làm đồ chơi dân gian",
              desc: "Dụng cụ, vật liệu và quy trình làm đồ chơi dân gian: chong chóng, đèn lồng, diều giấy (Bài 8 - 10).",
              domainKeywords: ["đồ chơi dân gian", "chong chóng", "đèn lồng", "diều giấy", "gấp giấy", "tre", "keo dán", "thủ công"],
              targetRatio: 0.50
            }
          ];
        }
      }
    }

    // 5. MÔN TIN HỌC (LỚP 3, LỚP 4, LỚP 5)
    if (sub === "TIN_HOC") {
      if (g === 5) {
        if (!isTerm2) {
          return [
            {
              key: "tin5_may_tinh_internet",
              topic: "Chủ đề A & B. Máy tính và em & Mạng Internet",
              desc: "Khả năng của máy tính; tìm kiếm thông tin trên website và độ tin cậy của thông tin (Bài 1, 2).",
              domainKeywords: ["máy tính và em", "mạng internet", "website", "tìm kiếm thông tin", "từ khóa", "độ tin cậy của thông tin", "trình duyệt web"],
              targetRatio: 0.35
            },
            {
              key: "tin5_cay_thu_muc_ban_quyen",
              topic: "Chủ đề C & D. Cây thư mục & Bản quyền nội dung thông tin",
              desc: "Cây thư mục, tổ chức và quản lí tệp tin; tôn trọng bản quyền nội dung thông tin trên môi trường số (Bài 3 - 5).",
              domainKeywords: ["cây thư mục", "thư mục", "tệp tin", "quản lí tệp", "bản quyền", "bản quyền thông tin", "sở hữu trí tuệ", "đạo đức số"],
              targetRatio: 0.35
            },
            {
              key: "tin5_ung_dung_tin_hoc",
              topic: "Chủ đề E. Ứng dụng tin học (Soạn thảo & Đồ họa)",
              desc: "Định dạng kí tự và bố trí hình ảnh trong văn bản; làm quen với phần mềm đồ họa (Bài 6 - 8A).",
              domainKeywords: ["ứng dụng tin học", "soạn thảo văn bản", "định dạng kí tự", "chèn hình ảnh", "bố trí văn bản", "phần mềm đồ họa", "vẽ", "tạo hình"],
              targetRatio: 0.30
            }
          ];
        } else {
          return [
            {
              key: "tin5_do_hoa_san_pham_so",
              topic: "Chủ đề E. Ứng dụng tin học (Sử dụng phần mềm đồ họa)",
              desc: "Sử dụng phần mềm đồ họa tạo sản phẩm số, thiết kế thiệp, áp phích đơn giản (Bài 9A).",
              domainKeywords: ["phần mềm đồ họa", "sản phẩm số", "thiết kế thiệp", "áp phích", "vẽ tranh", "chỉnh sửa hình ảnh", "xuất tệp ảnh"],
              targetRatio: 0.30
            },
            {
              key: "tin5_tuan_tu_lap",
              topic: "Chủ đề F. Giải quyết vấn đề với máy tính (Cấu trúc tuần tự & Lặp)",
              desc: "Cấu trúc tuần tự trong thuật toán; cấu trúc lặp và thực hành lệnh lặp trong môi trường lập trình trực quan (Bài 10 - 12).",
              domainKeywords: ["cấu trúc tuần tự", "thuật toán", "cấu trúc lặp", "lệnh lặp", "vòng lặp", "lặp lại", "scratch", "khối lệnh", "nhân vật"],
              targetRatio: 0.35
            },
            {
              key: "tin5_re_nhanh_bien_kich_ban",
              topic: "Chủ đề F. Lập trình trực quan (Rẽ nhánh, Biến & Kịch bản)",
              desc: "Cấu trúc rẽ nhánh; sử dụng biến và biểu thức trong chương trình; xây dựng chương trình theo kịch bản (Bài 13 - 16).",
              domainKeywords: ["cấu trúc rẽ nhánh", "nếu... thì", "điều kiện", "biến", "biến nhớ", "biểu thức", "phép toán", "kịch bản", "chương trình", "lập trình trực quan"],
              targetRatio: 0.35
            }
          ];
        }
      }
    }

    // Default fallback
    return [
      {
        key: "strand_1",
        topic: "Chủ đề 1. Kiến thức và kĩ năng trọng tâm phần 1",
        desc: "Các mạch kiến thức cốt lõi theo phân phối chương trình SGK.",
        domainKeywords: ["phần 1", "kiến thức 1"],
        targetRatio: 0.50
      },
      {
        key: "strand_2",
        topic: "Chủ đề 2. Kiến thức và kĩ năng trọng tâm phần 2",
        desc: "Các mạch kiến thức vận dụng và liên hệ thực tế theo phân phối chương trình SGK.",
        domainKeywords: ["phần 2", "kiến thức 2"],
        targetRatio: 0.50
      }
    ];
  },

  /**
   * Tự động xây dựng và chuẩn hóa Ma trận 3 tầng dòng (Số câu - Câu số - Số điểm)
   * chuẩn 100% Thông tư 27/2020/TT-BGDĐT từ danh sách câu hỏi thực tế.
   */
  buildThreeTierMatrix: function(exam) {
    if (!exam) return null;
    var isTv = exam.isTiengViet || exam.subjectId === "TIENG_VIET" || !!exam.readingExam;

    function fmtScore(num) {
      if (typeof num !== 'number' || isNaN(num) || num === 0) return 0;
      return Math.round(num * 4) / 4;
    }

    if (isTv) {
      // =========================================================================
      // MA TRẬN 3 TẦNG DÒNG MÔN TIẾNG VIỆT (PHẦN ĐỌC HIỂU 7 ĐIỂM HOẶC 6 ĐIỂM)
      // Bám sát mẫu thực tế: a) Đọc hiểu văn bản | b) Kiến thức Tiếng Việt
      // =========================================================================
      var questions = (exam.readingExam && exam.readingExam.questions) ? exam.readingExam.questions : [];
      if (!questions.length) return null;

      var strands = [
        { key: "reading", name: "a) Đọc hiểu văn bản", desc: "Xác định chi tiết, giải thích ý nghĩa, liên hệ thực tế, rút ra bài học", questions: [] },
        { key: "language", name: "b) Kiến thức Tiếng Việt", desc: "Luyện từ và câu, từ loại, nghĩa của từ, kết từ, biện pháp tu từ, chính tả", questions: [] }
      ];

      questions.forEach(function(q) {
        var cat = (q.category || "").toLowerCase();
        var domain = (q.metadata?.contentDomain || "").toLowerCase();
        var text = (q.text || "").toLowerCase();

        var isLang = cat.includes("từ và câu") || cat.includes("tiếng việt") || cat.includes("language") ||
                     domain.includes("tiếng việt") || domain.includes("luyện từ") ||
                     text.includes("đồng nghĩa") || text.includes("trái nghĩa") || text.includes("nghĩa gốc") ||
                     text.includes("nghĩa chuyển") || text.includes("kết từ") || text.includes("từ loại") ||
                     text.includes("đại từ") || text.includes("danh từ") || text.includes("động từ") ||
                     text.includes("tính từ") || text.includes("dấu câu") || text.includes("đặt câu");
        if (isLang) {
          strands[1].questions.push(q);
        } else {
          strands[0].questions.push(q);
        }
      });

      var processedStrands = strands.map(function(st) {
        var res = {
          name: st.name,
          desc: st.desc,
          m1_mcq: { count: 0, qNums: [], score: 0 },
          m1_essay: { count: 0, qNums: [], score: 0 },
          m2_mcq: { count: 0, qNums: [], score: 0 },
          m2_essay: { count: 0, qNums: [], score: 0 },
          m3_mcq: { count: 0, qNums: [], score: 0 },
          m3_essay: { count: 0, qNums: [], score: 0 },
          total_mcq: { count: 0, qNums: [], score: 0 },
          total_essay: { count: 0, qNums: [], score: 0 },
          total_score: 0
        };

        st.questions.forEach(function(q) {
          var lvl = String(q.level || "").toLowerCase();
          var lvlNum = lvl.includes("1") ? 1 : lvl.includes("3") ? 3 : 2;
          var isEssay = q.type === "essay" || q.type === "constructed" || (q.type !== "mcq" && q.type !== "true_false" && q.type !== "matching" && q.type !== "fill_blank" && (!q.options || !q.options.length));
          var sc = parseFloat(q.score) || (isEssay ? 1.0 : 0.5);
          var qNumStr = String(q.num);

          var target = isEssay ? res[`m${lvlNum}_essay`] : res[`m${lvlNum}_mcq`];
          target.count++;
          target.qNums.push(qNumStr);
          target.score = fmtScore(target.score + sc);

          var totalTarget = isEssay ? res.total_essay : res.total_mcq;
          totalTarget.count++;
          totalTarget.qNums.push(qNumStr);
          totalTarget.score = fmtScore(totalTarget.score + sc);

          res.total_score = fmtScore(res.total_score + sc);
        });

        return res;
      });

      // Lọc bỏ mạch kiến thức không có câu hỏi nào (chưa học / không ra đề)
      var activeTvStrands = processedStrands.filter(function(st) {
        return (st.total_score > 0) || (st.total_mcq.count > 0) || (st.total_essay.count > 0);
      });
      if (activeTvStrands.length > 0) {
        processedStrands = activeTvStrands;
      }

      var summary = {
        m1_mcq: { count: 0, score: 0 },
        m1_essay: { count: 0, score: 0 },
        m2_mcq: { count: 0, score: 0 },
        m2_essay: { count: 0, score: 0 },
        m3_mcq: { count: 0, score: 0 },
        m3_essay: { count: 0, score: 0 },
        total_mcq: { count: 0, score: 0 },
        total_essay: { count: 0, score: 0 },
        grand_total: 0
      };

      processedStrands.forEach(function(st) {
        ['m1_mcq', 'm1_essay', 'm2_mcq', 'm2_essay', 'm3_mcq', 'm3_essay', 'total_mcq', 'total_essay'].forEach(function(k) {
          summary[k].count += st[k].count;
          summary[k].score = fmtScore(summary[k].score + st[k].score);
        });
        summary.grand_total = fmtScore(summary.grand_total + st.total_score);
      });

      var m1TotalScore = fmtScore(summary.m1_mcq.score + summary.m1_essay.score);
      var m2TotalScore = fmtScore(summary.m2_mcq.score + summary.m2_essay.score);
      var m3TotalScore = fmtScore(summary.m3_mcq.score + summary.m3_essay.score);

      var m1Pct = summary.grand_total > 0 ? Math.round((m1TotalScore / summary.grand_total) * 100) : 40;
      var m2Pct = summary.grand_total > 0 ? Math.round((m2TotalScore / summary.grand_total) * 100) : 40;
      var m3Pct = Math.max(0, 100 - m1Pct - m2Pct);

      if (exam.level1Percent !== undefined && exam.level2Percent !== undefined && exam.level3Percent !== undefined) {
        var t1 = parseInt(exam.level1Percent) || 40;
        var t2 = parseInt(exam.level2Percent) || 40;
        var t3 = parseInt(exam.level3Percent) || 20;
        if (t1 + t2 + t3 === 100) {
          m1Pct = t1;
          m2Pct = t2;
          m3Pct = t3;
        }
      }

      var mcqPct = summary.grand_total > 0 ? Math.round((summary.total_mcq.score / summary.grand_total) * 100) : 50;
      var essayPct = Math.max(0, 100 - mcqPct);

      var currentScope = exam.scopeDesc || exam.scope || (typeof document !== 'undefined' ? (document.getElementById("aiCustomScopeInput")?.value || document.getElementById("aiScopePreset")?.value) : "") || "";
      var termInfo = this.resolveExamTermInfo(currentScope);

      return {
        isTiengVietReading: true,
        title: `MA TRẬN ĐỀ KIỂM TRA ${termInfo.matrixTitle} MÔN TIẾNG VIỆT (ĐỌC HIỂU) LỚP ${exam.grade || 5}`,
        schoolYear: exam.schoolYear || "2025 - 2026",
        strands: processedStrands,
        summary: summary,
        percentages: {
          m1_pct: m1Pct,
          m2_pct: m2Pct,
          m3_pct: m3Pct,
          mcq_pct: mcqPct,
          essay_pct: essayPct
        }
      };
    } else {
      // =========================================================================
      // MA TRẬN 3 TẦNG DÒNG CHO CÁC MÔN TOÁN, KHOA HỌC, LỊCH SỬ - ĐỊA LÍ...
      // Phân theo các mạch kiến thức lớn chuẩn sư phạm GDPT 2018 & Thông tư 27
      // =========================================================================
      var mcqs = exam.multipleChoice || [];
      var essays = exam.essaySection || [];
      var subjectId = (exam.subjectId || "").toUpperCase();
      var grade = exam.grade || 5;
      var scope = exam.scopeDesc || exam.scope || (typeof document !== 'undefined' ? (document.getElementById("aiCustomScopeInput")?.value || document.getElementById("aiScopePreset")?.value) : "") || "";

      // 1. CẤU HÌNH CỨNG MẠCH KIẾN THỨC & CHỦ ĐỀ CHUẨN 100% THEO CHƯƠNG TRÌNH SGK KNTT
      var masterConfig = this.getMasterExamMatrixConfig(grade, subjectId, scope);
      var strandDefs = masterConfig.map(function(c) {
        return {
          key: c.key,
          name: c.topic,
          desc: c.desc,
          domainKeywords: c.domainKeywords || [],
          targetRatio: c.targetRatio || (1.0 / masterConfig.length)
        };
      });

      var strands = strandDefs.map(function(d) {
        return {
          name: d.name,
          desc: d.desc,
          key: d.key,
          domainKeywords: d.domainKeywords || [],
          m1_mcq: { count: 0, qNums: [], score: 0 },
          m1_essay: { count: 0, qNums: [], score: 0 },
          m2_mcq: { count: 0, qNums: [], score: 0 },
          m2_essay: { count: 0, qNums: [], score: 0 },
          m3_mcq: { count: 0, qNums: [], score: 0 },
          m3_essay: { count: 0, qNums: [], score: 0 },
          total_mcq: { count: 0, qNums: [], score: 0 },
          total_essay: { count: 0, qNums: [], score: 0 },
          total_score: 0
        };
      });

      function assignQuestionToStrand(q, isEssay) {
        var text = (q.text || "").toLowerCase();
        var domain = (q.metadata?.contentDomain || q.contentDomain || "").toLowerCase();
        var topic = (q.topic || "").toLowerCase();
        var qFull = text + " " + (q.options ? q.options.join(" ") : "") + " " + (q.explain || "") + " " + (q.guide || "") + " " + domain + " " + topic;
        qFull = qFull.toLowerCase();

        var chosenIdx = -1;

        // 1. Đối chiếu trực tiếp theo tên chủ đề / domain
        for (var i = 0; i < strands.length; i++) {
          var sName = strands[i].name.toLowerCase();
          var cleanName = sName.replace(/^(miền|chủ đề|\d+[\s:.]*)\s*/i, '').trim();
          if (cleanName && cleanName.length >= 3) {
            if (domain && (domain.includes(cleanName) || cleanName.includes(domain))) {
              chosenIdx = i;
              break;
            }
            if (topic && (topic.includes(cleanName) || cleanName.includes(topic))) {
              chosenIdx = i;
              break;
            }
          }
        }

        // 2. Chấm điểm tương đồng ngữ nghĩa bằng từ khóa nhận diện chuyên sâu (domainKeywords)
        if (chosenIdx === -1) {
          var bestScore = 0;
          var bestIdx = -1;
          for (var i = 0; i < strands.length; i++) {
            var kws = strands[i].domainKeywords || [];
            var matchCount = 0;
            for (var k = 0; k < kws.length; k++) {
              var kw = kws[k].toLowerCase();
              if (kw && qFull.includes(kw)) {
                matchCount += (domain.includes(kw) ? 5 : (text.includes(kw) ? 2 : 1));
              }
            }
            if (matchCount > bestScore) {
              bestScore = matchCount;
              bestIdx = i;
            }
          }
          if (bestIdx !== -1 && bestScore > 0) {
            chosenIdx = bestIdx;
          }
        }

        // 3. Fallback sư phạm nếu câu hỏi chưa khớp
        if (chosenIdx === -1) {
          if (subjectId === "TOAN") {
            var qn = parseInt(q.num) || 1;
            if (isEssay) {
              chosenIdx = strands.length > 1 ? 1 : 0;
            } else {
              chosenIdx = qn <= Math.round(mcqs.length * 0.5) ? 0 : (strands.length > 2 && qn === mcqs.length ? 2 : 1);
            }
          } else {
            chosenIdx = q.num ? ((parseInt(q.num) - 1) % strands.length) : 0;
          }
        }

        if (chosenIdx < 0 || chosenIdx >= strands.length) chosenIdx = 0;

        var st = strands[chosenIdx] || strands[0];
        var lvl = String(q.level || "").toLowerCase();
        var lvlNum = lvl.includes("1") ? 1 : lvl.includes("3") ? 3 : 2;
        var sc = parseFloat(q.score) || (isEssay ? 1.5 : 0.5);
        var qNumStr = String(q.num);

        var target = isEssay ? st[`m${lvlNum}_essay`] : st[`m${lvlNum}_mcq`];
        target.count++;
        target.qNums.push(qNumStr);
        target.score = fmtScore(target.score + sc);

        var totalTarget = isEssay ? st.total_essay : st.total_mcq;
        totalTarget.count++;
        totalTarget.qNums.push(qNumStr);
        totalTarget.score = fmtScore(totalTarget.score + sc);

        st.total_score = fmtScore(st.total_score + sc);

        // ĐỒNG BỘ 100% CONTENT DOMAIN CỦA CÂU HỎI THEO ĐÚNG CHỦ ĐỀ ĐƯỢC PHÂN BỔ
        q.metadata = q.metadata || {};
        var cleanStrandName = st.name.replace(/^(chủ đề|\d+[\s:.]*)\s*/i, '').trim();
        q.metadata.contentDomain = cleanStrandName || st.name;
        q.contentDomain = q.metadata.contentDomain;
      }

      mcqs.forEach(function(q) { assignQuestionToStrand(q, false); });
      essays.forEach(function(e) { assignQuestionToStrand(e, true); });

      // Lọc bỏ những mạch kiến thức / chủ đề không có câu hỏi nào (chưa học hoặc không kiểm tra trong đề này)
      // Riêng đề Toán định kỳ (Cuối năm, Cả năm, Học kỳ): Bắt buộc giữ đủ 3 mạch kiến thức chuẩn GDPT 2018
      var examScopeStr = (exam.scopeDesc || exam.scope || "").toLowerCase();
      var isPeriodicMath = subjectId === "TOAN" && (
        examScopeStr.includes("cuối") ||
        examScopeStr.includes("cả năm") ||
        examScopeStr.includes("học kì") ||
        examScopeStr.includes("học kỳ") ||
        examScopeStr.includes("định kỳ") ||
        examScopeStr.includes("định kì")
      );

      var activeStrands = strands.filter(function(st) {
        return (st.total_score > 0) || (st.total_mcq.count > 0) || (st.total_essay.count > 0);
      });
      if (activeStrands.length > 0 && !isPeriodicMath) {
        strands = activeStrands;
      }

      var summary = {
        m1_mcq: { count: 0, score: 0 },
        m1_essay: { count: 0, score: 0 },
        m2_mcq: { count: 0, score: 0 },
        m2_essay: { count: 0, score: 0 },
        m3_mcq: { count: 0, score: 0 },
        m3_essay: { count: 0, score: 0 },
        total_mcq: { count: 0, score: 0 },
        total_essay: { count: 0, score: 0 },
        grand_total: 0
      };

      strands.forEach(function(st) {
        ['m1_mcq', 'm1_essay', 'm2_mcq', 'm2_essay', 'm3_mcq', 'm3_essay', 'total_mcq', 'total_essay'].forEach(function(k) {
          summary[k].count += st[k].count;
          summary[k].score = fmtScore(summary[k].score + st[k].score);
        });
        summary.grand_total = fmtScore(summary.grand_total + st.total_score);
      });

      var m1TotalScore = fmtScore(summary.m1_mcq.score + summary.m1_essay.score);
      var m2TotalScore = fmtScore(summary.m2_mcq.score + summary.m2_essay.score);
      var m3TotalScore = fmtScore(summary.m3_mcq.score + summary.m3_essay.score);

      var m1Pct = summary.grand_total > 0 ? Math.round((m1TotalScore / summary.grand_total) * 100) : 40;
      var m2Pct = summary.grand_total > 0 ? Math.round((m2TotalScore / summary.grand_total) * 100) : 40;
      var m3Pct = Math.max(0, 100 - m1Pct - m2Pct);

      if (exam.level1Percent !== undefined && exam.level2Percent !== undefined && exam.level3Percent !== undefined) {
        var t1 = parseInt(exam.level1Percent) || 40;
        var t2 = parseInt(exam.level2Percent) || 40;
        var t3 = parseInt(exam.level3Percent) || 20;
        if (t1 + t2 + t3 === 100) {
          m1Pct = t1;
          m2Pct = t2;
          m3Pct = t3;
        }
      }

      var mcqPct = summary.grand_total > 0 ? Math.round((summary.total_mcq.score / summary.grand_total) * 100) : 70;
      var essayPct = Math.max(0, 100 - mcqPct);
      if (exam.mcqPercent !== undefined) {
        mcqPct = parseInt(exam.mcqPercent) || 70;
        essayPct = 100 - mcqPct;
      }

      var currentScope = exam.scopeDesc || exam.scope || (typeof document !== 'undefined' ? (document.getElementById("aiCustomScopeInput")?.value || document.getElementById("aiScopePreset")?.value) : "") || "";
      var termInfo = this.resolveExamTermInfo(currentScope);

      var subName = (exam.subjectName || (this.EXAM_SUBJECTS[subjectId] ? this.EXAM_SUBJECTS[subjectId].name : "") || "TOÁN").toUpperCase();

      return {
        isTiengVietReading: false,
        title: `MA TRẬN ĐỀ KIỂM TRA ${termInfo.matrixTitle} MÔN ${subName} LỚP ${grade}`,
        schoolYear: exam.schoolYear || "2025 - 2026",
        strands: strands,
        summary: summary,
        percentages: {
          m1_pct: m1Pct,
          m2_pct: m2Pct,
          m3_pct: m3Pct,
          mcq_pct: mcqPct,
          essay_pct: essayPct
        }
      };
    }
  },

  /**
   * Render bảng HTML Ma trận 3 tầng dòng chuẩn Thông tư 27
   * Dùng chung cho cả hiển thị Web và xuất tệp Word
   */
  renderThreeTierMatrixTable: function(m3, options) {
    if (!m3 || !m3.strands || !m3.strands.length) return "";
    var isWord = options && options.isWord;

    function fmt(val) {
      if (val === undefined || val === null || val === "" || val === 0) return "";
      return typeof val === 'number' ? val.toString().replace('.', ',') : String(val);
    }
    function fmtArr(arr) {
      if (!arr || !arr.length) return "";
      return arr.join(', ');
    }

    var borderStyle = 'border: 1px solid #000;';
    var thBg = isWord ? 'background-color: #f2f2f2;' : 'background: #f1f5f9;';
    var subThBg = isWord ? 'background-color: #f9f9f9;' : 'background: #f8fafc;';
    var rowBg = isWord ? 'background-color: #fafafa;' : 'background: #fdfdfd;';
    var totalBg = isWord ? 'background-color: #f2f2f2;' : 'background: #f8fafc;';

    return `
      <table class="matrix-table" style="width: 100%; border-collapse: collapse; text-align: center; font-family: 'Times New Roman', serif; font-size: ${isWord ? '11pt' : '11.5pt'}; margin-bottom: 16px;">
        <thead>
          <tr style="${thBg} font-weight: bold;">
            <th rowspan="2" style="${borderStyle} width: 28%; padding: 6px; text-align: center;">Mạch kiến thức, kĩ năng</th>
            <th rowspan="2" style="${borderStyle} width: 14%; padding: 6px; text-align: center;">Số câu và số điểm</th>
            <th colspan="2" style="${borderStyle} padding: 6px;">Mức 1</th>
            <th colspan="2" style="${borderStyle} padding: 6px;">Mức 2</th>
            <th colspan="2" style="${borderStyle} padding: 6px;">Mức 3</th>
            <th colspan="2" style="${borderStyle} padding: 6px;">Tổng</th>
          </tr>
          <tr style="${subThBg} font-weight: bold;">
            <th style="${borderStyle} padding: 4px; width: 7%;">TNKQ</th>
            <th style="${borderStyle} padding: 4px; width: 7%;">TL</th>
            <th style="${borderStyle} padding: 4px; width: 7%;">TNKQ</th>
            <th style="${borderStyle} padding: 4px; width: 7%;">TL</th>
            <th style="${borderStyle} padding: 4px; width: 7%;">TNKQ</th>
            <th style="${borderStyle} padding: 4px; width: 7%;">TL</th>
            <th style="${borderStyle} padding: 4px; width: 7%;">TNKQ</th>
            <th style="${borderStyle} padding: 4px; width: 7%;">TL</th>
          </tr>
        </thead>
        <tbody>
          ${(m3.strands || []).filter(function(st){ return (st.total_score > 0) || (st.total_mcq && st.total_mcq.count > 0) || (st.total_essay && st.total_essay.count > 0); }).map(function(st) {
            return `
              <tr>
                <td rowspan="3" style="${borderStyle} padding: 6px; text-align: left; vertical-align: middle; font-weight: 500;">
                  <b>${st.name}</b>
                  ${st.desc ? `<div style="font-size: 9.5pt; color: #4b5563; font-weight: normal; margin-top: 3px; line-height: 1.3;">${st.desc}</div>` : ''}
                </td>
                <td style="${borderStyle} padding: 5px; font-weight: bold; ${rowBg}">Số câu</td>
                <td style="${borderStyle} padding: 5px;">${fmt(st.m1_mcq.count)}</td>
                <td style="${borderStyle} padding: 5px;">${fmt(st.m1_essay.count)}</td>
                <td style="${borderStyle} padding: 5px;">${fmt(st.m2_mcq.count)}</td>
                <td style="${borderStyle} padding: 5px;">${fmt(st.m2_essay.count)}</td>
                <td style="${borderStyle} padding: 5px;">${fmt(st.m3_mcq.count)}</td>
                <td style="${borderStyle} padding: 5px;">${fmt(st.m3_essay.count)}</td>
                <td style="${borderStyle} padding: 5px; font-weight: bold;">${fmt(st.total_mcq.count)}</td>
                <td style="${borderStyle} padding: 5px; font-weight: bold;">${fmt(st.total_essay.count)}</td>
              </tr>
              <tr>
                <td style="${borderStyle} padding: 5px; font-weight: bold; ${rowBg}">Câu số</td>
                <td style="${borderStyle} padding: 5px;">${fmtArr(st.m1_mcq.qNums)}</td>
                <td style="${borderStyle} padding: 5px;">${fmtArr(st.m1_essay.qNums)}</td>
                <td style="${borderStyle} padding: 5px;">${fmtArr(st.m2_mcq.qNums)}</td>
                <td style="${borderStyle} padding: 5px;">${fmtArr(st.m2_essay.qNums)}</td>
                <td style="${borderStyle} padding: 5px;">${fmtArr(st.m3_mcq.qNums)}</td>
                <td style="${borderStyle} padding: 5px;">${fmtArr(st.m3_essay.qNums)}</td>
                <td style="${borderStyle} padding: 5px; font-weight: bold;">${fmtArr(st.total_mcq.qNums)}</td>
                <td style="${borderStyle} padding: 5px; font-weight: bold;">${fmtArr(st.total_essay.qNums)}</td>
              </tr>
              <tr>
                <td style="${borderStyle} padding: 5px; font-weight: bold; ${rowBg}">Số điểm</td>
                <td style="${borderStyle} padding: 5px;">${fmt(st.m1_mcq.score)}</td>
                <td style="${borderStyle} padding: 5px;">${fmt(st.m1_essay.score)}</td>
                <td style="${borderStyle} padding: 5px;">${fmt(st.m2_mcq.score)}</td>
                <td style="${borderStyle} padding: 5px;">${fmt(st.m2_essay.score)}</td>
                <td style="${borderStyle} padding: 5px;">${fmt(st.m3_mcq.score)}</td>
                <td style="${borderStyle} padding: 5px;">${fmt(st.m3_essay.score)}</td>
                <td style="${borderStyle} padding: 5px; font-weight: bold;">${fmt(st.total_mcq.score)}</td>
                <td style="${borderStyle} padding: 5px; font-weight: bold;">${fmt(st.total_essay.score)}</td>
              </tr>
            `;
          }).join('')}

          <!-- HÀNG TỔNG SỐ CÂU -->
          <tr style="font-weight: bold; ${totalBg}">
            <td rowspan="3" style="${borderStyle} padding: 6px; text-align: center; vertical-align: middle;">Tổng</td>
            <td style="${borderStyle} padding: 5px;">Tổng số câu</td>
            <td style="${borderStyle} padding: 5px;">${fmt(m3.summary.m1_mcq.count)}</td>
            <td style="${borderStyle} padding: 5px;">${fmt(m3.summary.m1_essay.count)}</td>
            <td style="${borderStyle} padding: 5px;">${fmt(m3.summary.m2_mcq.count)}</td>
            <td style="${borderStyle} padding: 5px;">${fmt(m3.summary.m2_essay.count)}</td>
            <td style="${borderStyle} padding: 5px;">${fmt(m3.summary.m3_mcq.count)}</td>
            <td style="${borderStyle} padding: 5px;">${fmt(m3.summary.m3_essay.count)}</td>
            <td style="${borderStyle} padding: 5px; color: #1e40af;">${fmt(m3.summary.total_mcq.count)}</td>
            <td style="${borderStyle} padding: 5px; color: #1e40af;">${fmt(m3.summary.total_essay.count)}</td>
          </tr>

          <!-- HÀNG TỔNG SỐ ĐIỂM -->
          <tr style="font-weight: bold; ${totalBg}">
            <td style="${borderStyle} padding: 5px;">Số điểm</td>
            <td style="${borderStyle} padding: 5px;">${fmt(m3.summary.m1_mcq.score)}</td>
            <td style="${borderStyle} padding: 5px;">${fmt(m3.summary.m1_essay.score)}</td>
            <td style="${borderStyle} padding: 5px;">${fmt(m3.summary.m2_mcq.score)}</td>
            <td style="${borderStyle} padding: 5px;">${fmt(m3.summary.m2_essay.score)}</td>
            <td style="${borderStyle} padding: 5px;">${fmt(m3.summary.m3_mcq.score)}</td>
            <td style="${borderStyle} padding: 5px;">${fmt(m3.summary.m3_essay.score)}</td>
            <td style="${borderStyle} padding: 5px; color: #1e40af;">${fmt(m3.summary.total_mcq.score)}</td>
            <td style="${borderStyle} padding: 5px; color: #1e40af;">${fmt(m3.summary.total_essay.score)}</td>
          </tr>

          <!-- HÀNG TỈ LỆ % -->
          <tr style="font-weight: bold; ${thBg}">
            <td style="${borderStyle} padding: 5px;">Tỉ lệ %</td>
            <td colspan="2" style="${borderStyle} padding: 5px;">${m3.percentages.m1_pct}%</td>
            <td colspan="2" style="${borderStyle} padding: 5px;">${m3.percentages.m2_pct}%</td>
            <td colspan="2" style="${borderStyle} padding: 5px;">${m3.percentages.m3_pct}%</td>
            <td style="${borderStyle} padding: 5px;">${m3.percentages.mcq_pct}%</td>
            <td style="${borderStyle} padding: 5px;">${m3.percentages.essay_pct}%</td>
          </tr>
        </tbody>
      </table>
    `;
  },

  /**
   * Render một câu hỏi trắc nghiệm đa dạng (MCQ, Đúng/Sai, Ghép nối, Điền từ)
   */
  renderQuestionItem: function(q, isWord) {
    if (!q) return "";
    var scoreStr = q.score ? q.score.toString().replace('.', ',') : '0,5';
    var levelStr = q.level || 'Mức 1';
    var qType = q.type || 'mcq';
    var qTitle = `<b>Câu ${q.num}</b> (${scoreStr} điểm - ${levelStr}): ${q.text || ""}`;

    // 1. DẠNG ĐÚNG / SAI (True / False - Đ/S)
    if (qType === "true_false" || q.isTrueFalse || (q.items && q.items.length > 0)) {
      var items = q.items || [];
      if (items.length > 0) {
        var itemsHtml = items.map(function(item) {
          var itemText = typeof item === 'string' ? item : (item.text || "");
          if (isWord) {
            return `<div style="margin: 0pt; margin-left: 20pt; line-height: 1.0; font-family: 'Times New Roman', serif; font-size: 13pt; margin-top: 0pt; margin-bottom: 2pt;">☐ ${itemText}</div>`;
          } else {
            return `
              <div style="display: flex; align-items: flex-start; gap: 0.5rem; margin-bottom: 4px;">
                <span style="display: inline-block; width: 17px; height: 17px; min-width: 17px; border: 1.5px solid #333; border-radius: 2px; text-align: center; line-height: 15px; margin-top: 2px;"></span>
                <span>${itemText}</span>
              </div>
            `;
          }
        }).join('');
        return `
          <div class="q-block" style="margin: 0pt; margin-top: 0pt; margin-bottom: 8pt; line-height: 1.0; font-family: 'Times New Roman', serif; font-size: 13pt;" ${isWord ? '' : 'contenteditable="true"'}>
            <div style="line-height: 1.0; margin: 0pt; margin-bottom: 2pt;">${qTitle}</div>
            <div style="padding-left: ${isWord ? '15pt' : '1.25rem'}; margin-top: 2pt; line-height: 1.0;">
              ${itemsHtml}
            </div>
          </div>
        `;
      }
    }

    // 2. DẠNG GHÉP ĐÔI / NỐI CỘT (Matching)
    if (qType === "matching" || q.isMatching || (q.columnA && q.columnB)) {
      var colA = q.columnA || [];
      var colB = q.columnB || [];
      var maxRows = Math.max(colA.length, colB.length);
      var rowsHtml = [];
      for (var i = 0; i < maxRows; i++) {
        var textA = colA[i] ? (typeof colA[i] === 'string' ? colA[i] : `${colA[i].id || (i + 1)}. ${colA[i].text}`) : "";
        var textB = colB[i] ? (typeof colB[i] === 'string' ? colB[i] : `${colB[i].id || String.fromCharCode(65 + i)}. ${colB[i].text}`) : "";
        rowsHtml.push(`
          <tr>
            <td style="border: 1px solid #000; padding: 4px 6px; width: 50%; text-align: left; line-height: 1.0; font-family: 'Times New Roman', serif;">${textA}</td>
            <td style="border: 1px solid #000; padding: 4px 6px; width: 50%; text-align: left; line-height: 1.0; font-family: 'Times New Roman', serif;">${textB}</td>
          </tr>
        `);
      }
      return `
        <div class="q-block" style="margin: 0pt; margin-top: 0pt; margin-bottom: 8pt; line-height: 1.0; font-family: 'Times New Roman', serif; font-size: 13pt;" ${isWord ? '' : 'contenteditable="true"'}>
          <div style="line-height: 1.0; margin: 0pt; margin-bottom: 2pt;">${qTitle}</div>
          <table style="width: 92%; border-collapse: collapse; margin: 4pt auto; font-family: 'Times New Roman', serif; font-size: ${isWord ? '11pt' : '11.5pt'}; line-height: 1.0;">
            <thead>
              <tr style="${isWord ? 'background-color: #f2f2f2;' : 'background: #f1f5f9;'} font-weight: bold; text-align: center;">
                <th style="border: 1px solid #000; padding: 4px 6px; line-height: 1.0;">Cột A</th>
                <th style="border: 1px solid #000; padding: 4px 6px; line-height: 1.0;">Cột B</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml.join('')}
            </tbody>
          </table>
        </div>
      `;
    }

    // 3. DẠNG ĐIỀN TỪ / ĐIỀN KHUYẾT (Fill in blank)
    if (qType === "fill_blank" || q.isFillBlank || q.wordBank || (q.passage && q.passage.includes('…'))) {
      var wordBankText = "";
      if (q.wordBank) {
        var words = Array.isArray(q.wordBank) ? q.wordBank.join(', ') : q.wordBank;
        wordBankText = `<div style="font-style: italic; color: #475569; margin-top: 2pt; line-height: 1.0; font-family: 'Times New Roman', serif; font-size: 12pt;">(Từ cho sẵn: ${words})</div>`;
      }
      return `
        <div class="q-block" style="margin: 0pt; margin-top: 0pt; margin-bottom: 8pt; line-height: 1.0; font-family: 'Times New Roman', serif; font-size: 13pt;" ${isWord ? '' : 'contenteditable="true"'}>
          <div style="line-height: 1.0; margin: 0pt; margin-bottom: 2pt;">${qTitle}</div>
          <div style="padding-left: ${isWord ? '15pt' : '1.25rem'}; margin-top: 2pt; line-height: 1.0;">
            ${q.passage ? `<div style="line-height: 1.0; margin-bottom: 2pt;">${q.passage}</div>` : ''}
            ${wordBankText}
          </div>
        </div>
      `;
    }

    // 4. DẠNG TRẮC NGHIỆM 4 LỰA CHỌN (MCQ) THÔNG THƯỜNG
    var options = q.options || [];
    if (isWord) {
      var optionsWordHtml = options.map(function(opt) {
        return `<div style="margin: 0pt; margin-top: 0pt; margin-bottom: 2pt; line-height: 1.0; font-family: 'Times New Roman', serif; font-size: 13pt;">${opt}</div>`;
      }).join('');
      return `
        <div class="q-block" style="margin: 0pt; margin-top: 0pt; margin-bottom: 8pt; line-height: 1.0; font-family: 'Times New Roman', serif; font-size: 13pt;">
          <div style="line-height: 1.0; margin: 0pt; margin-bottom: 2pt;">${qTitle}</div>
          <div class="q-options" style="margin-left: 15pt; margin-top: 2pt; line-height: 1.0;">
            ${optionsWordHtml}
          </div>
        </div>
      `;
    } else {
      var optionsWebHtml = options.map(function(opt) {
        return `<div>${opt}</div>`;
      }).join('');
      return `
        <div class="q-block" style="margin-bottom: 10px;" contenteditable="true">
          <div>${qTitle}</div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.35rem; padding-left: 1.25rem; margin-top: 4px;">
            ${optionsWebHtml}
          </div>
        </div>
      `;
    }
  },

  /**
   * Render phần Đáp án & Hướng dẫn chấm linh hoạt cho mọi dạng câu hỏi trắc nghiệm
   */
  renderAnswersSection: function(exam, isWord) {
    var mcqs = exam.multipleChoice || [];
    var standardMcqs = mcqs.filter(function(q) {
      return !q.type || q.type === "mcq";
    });
    var otherQuestions = mcqs.filter(function(q) {
      return q.type && q.type !== "mcq";
    });

    var html = [];

    if (standardMcqs.length > 0) {
      html.push(`
        <div style="font-weight: bold; margin-bottom: 4px;">1. Bảng đáp án trắc nghiệm nhiều lựa chọn:</div>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 14px; text-align: center; font-size: ${isWord ? '11pt' : '11.5pt'};">
          <thead>
            <tr style="${isWord ? 'background-color: #f2f2f2;' : 'background: #f1f5f9;'} font-weight: bold;">
              <th style="border: 1px solid #000; padding: 4px;">Câu</th>
              ${standardMcqs.map(function(q) { return `<th style="border: 1px solid #000; padding: 4px;">${q.num}</th>`; }).join('')}
            </tr>
          </thead>
          <tbody>
            <tr style="font-weight: bold; color: #166534;">
              <td style="border: 1px solid #000; padding: 4px; background: ${isWord ? '#fafafa' : '#f8fafc'}; color: #000;">Đáp án</td>
              ${standardMcqs.map(function(q) { return `<td style="border: 1px solid #000; padding: 4px;">${q.ans || '-'}</td>`; }).join('')}
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 4px; background: ${isWord ? '#fafafa' : '#f8fafc'}; font-weight: bold;">Điểm</td>
              ${standardMcqs.map(function(q) { return `<td style="border: 1px solid #000; padding: 4px;">${q.score ? q.score.toString().replace('.', ',') : '0,5'}</td>`; }).join('')}
            </tr>
          </tbody>
        </table>
      `);
    }

    if (otherQuestions.length > 0) {
      html.push(`<div style="font-weight: bold; margin-bottom: 6px;">2. Hướng dẫn chấm các câu hỏi trắc nghiệm đặc thù:</div>`);
      otherQuestions.forEach(function(q) {
        var ansDetail = "";
        if (q.type === "true_false") {
          ansDetail = (q.items || []).map(function(item, idx) {
            return `<div>• Ý ${idx + 1} (${item.text || ''}): <b>${item.ans === 'Đ' ? 'Đúng (Đ)' : 'Sai (S)'}</b></div>`;
          }).join('') || `<div>Đáp án: <b>${q.ans || ''}</b></div>`;
        } else if (q.type === "matching") {
          if (q.pairs) {
            ansDetail = `<div>Ghép nối đúng: <b>${typeof q.pairs === 'string' ? q.pairs : q.pairs.map(p => `${p.a} - ${p.b}`).join(', ')}</b></div>`;
          } else {
            ansDetail = `<div>${q.explain || q.ans || ''}</div>`;
          }
        } else if (q.type === "fill_blank") {
          if (q.blanks) {
            ansDetail = `<div>Lần lượt điền: <b>${Array.isArray(q.blanks) ? q.blanks.join('; ') : q.blanks}</b></div>`;
          } else {
            ansDetail = `<div>Đáp án: <b>${q.ans || q.explain || ''}</b></div>`;
          }
        } else {
          ansDetail = `<div>Đáp án: <b>${q.ans || ''}</b>. ${q.explain || ''}</div>`;
        }

        html.push(`
          <div style="margin-bottom: 8px; padding-left: 10px; border-left: 3px solid #7c3aed;">
            <b>Câu ${q.num} (${q.score ? q.score.toString().replace('.', ',') : '1,0'} điểm):</b>
            <div style="margin-top: 2px;">${ansDetail}</div>
            ${q.explain ? `<div style="font-size: 10pt; color: #555; margin-top: 2px;"><i>Gợi ý chấm: ${q.explain}</i></div>` : ''}
          </div>
        `);
      });
    }

    return html.join('');
  },

  /**
   * Tự động thẩm định, cân bằng toán học và chuẩn hóa 100% Mức độ nhận thức (Mức 1, Mức 2, Mức 3)
   * và điểm số Trắc nghiệm / Tự luận chuẩn Thông tư 27/2020/TT-BGDĐT & SEA-PLM.
   * Bảo đảm tỉ lệ % và số điểm từng mức độ giữa cấu hình nhập vào và ma trận luôn trùng khớp tuyệt đối.
   */
  balanceCognitiveLevels: function(exam, params) {
    if (!exam) return exam;

    var targetM1Pct = (params && parseInt(params.level1Percent)) ||
                      parseInt(exam.level1Percent) ||
                      (typeof document !== 'undefined' && parseInt(document.getElementById("aiLevel1Pct")?.value)) ||
                      40;
    var targetM2Pct = (params && parseInt(params.level2Percent)) ||
                      parseInt(exam.level2Percent) ||
                      (typeof document !== 'undefined' && parseInt(document.getElementById("aiLevel2Pct")?.value)) ||
                      40;
    var targetM3Pct = (params && parseInt(params.level3Percent)) ||
                      parseInt(exam.level3Percent) ||
                      (typeof document !== 'undefined' && parseInt(document.getElementById("aiLevel3Pct")?.value)) ||
                      20;

    var totalPct = targetM1Pct + targetM2Pct + targetM3Pct;
    if (totalPct !== 100) {
      targetM3Pct = Math.max(0, 100 - targetM1Pct - targetM2Pct);
    }

    exam.level1Percent = targetM1Pct;
    exam.level2Percent = targetM2Pct;
    exam.level3Percent = targetM3Pct;

    // Helper phân bổ điểm toán học bảo đảm 100% từng câu là bội số của 0,25 (thang điểm 0,25; 0,5; 0,75; 1,0; 1,5; 2,0; 2,5...)
    function assignScoresToCount(count, targetTotal, isMcq) {
      if (count <= 0) return [];
      var target = Math.round(targetTotal * 4) / 4;
      if (count === 1) return [target];

      // Nếu là trắc nghiệm và targetTotal có thể phân rã thành các câu 0.5đ và 1.0đ:
      if (isMcq) {
        var y = Math.round(2 * target - count); // số câu 1.0đ
        var x = count - y; // số câu 0.5đ
        if (x >= 0 && y >= 0 && Math.abs((x * 0.5 + y * 1.0) - target) < 0.001) {
          var res = [];
          for (var i = 0; i < x; i++) res.push(0.5);
          for (var j = 0; j < y; j++) res.push(1.0);
          return res;
        }
      }

      // Phân bổ phần dư chẵn 0,25đ (Quarter-points partition):
      var totalQuarters = Math.round(target * 4);
      if (totalQuarters < count) {
        var resSmall = [];
        for (var s = 0; s < count; s++) resSmall.push(s < totalQuarters ? 0.25 : 0);
        return resSmall;
      }

      var baseQuarters = Math.floor(totalQuarters / count);
      var rem = totalQuarters % count;
      var res = [];
      for (var k = 0; k < count; k++) {
        var qCount = baseQuarters + (k < rem ? 1 : 0);
        res.push(qCount * 0.25);
      }
      return res;
    }

    // 1. Nếu là Đề Tiếng Việt Đọc hiểu (Điểm đọc hiểu thường là 6,0đ hoặc 7,0đ)
    if (exam.readingExam && Array.isArray(exam.readingExam.questions)) {
      var compScore = Math.round((parseFloat(exam.readingExam.comprehensionScore) || 6.0) * 4) / 4;
      var tvTargetM1 = Math.round((compScore * targetM1Pct / 100) * 4) / 4;
      var tvTargetM2 = Math.round((compScore * targetM2Pct / 100) * 4) / 4;
      var tvTargetM3 = Math.round((compScore - tvTargetM1 - tvTargetM2) * 4) / 4;

      var tvQuestions = exam.readingExam.questions;
      var tvMcqs = [];
      var tvEssays = [];
      tvQuestions.forEach(function(q) {
        var isEs = q.type === "essay" || q.type === "constructed" || (q.type !== "mcq" && q.type !== "true_false" && q.type !== "matching" && q.type !== "fill_blank" && (!q.options || !q.options.length));
        if (isEs) tvEssays.push(q);
        else tvMcqs.push(q);
      });

      var tvEssayTarget = tvEssays.length > 0 ? (tvEssays.length * 1.0) : 0;
      if (tvEssayTarget > compScore - 2.0) tvEssayTarget = Math.max(1.0, compScore - tvMcqs.length * 0.5);
      tvEssayTarget = Math.round(tvEssayTarget * 4) / 4;
      var tvMcqTarget = Math.round((compScore - tvEssayTarget) * 4) / 4;

      var tv_m1_mcq = Math.min(tvTargetM1, tvMcqTarget);
      var tv_m1_essay = Math.round((tvTargetM1 - tv_m1_mcq) * 4) / 4;

      var tv_m3_essay = Math.min(tvTargetM3, Math.max(0, Math.round((tvEssayTarget - tv_m1_essay) * 4) / 4));
      var tv_m3_mcq = Math.round((tvTargetM3 - tv_m3_essay) * 4) / 4;

      var tv_m2_mcq = Math.round((tvMcqTarget - tv_m1_mcq - tv_m3_mcq) * 4) / 4;
      var tv_m2_essay = Math.round((tvEssayTarget - tv_m1_essay - tv_m3_essay) * 4) / 4;

      function assignTv(list, buckets, isMcq) {
        if (!list.length || !buckets.length) return;
        var totalAssigned = 0;
        var totalScore = buckets.reduce(function(a, b) { return a + b.target; }, 0);
        buckets.forEach(function(b, idx) {
          if (idx === buckets.length - 1) {
            b.count = list.length - totalAssigned;
          } else {
            b.count = Math.max(1, Math.round(list.length * (b.target / totalScore)));
            totalAssigned += b.count;
          }
        });
        var curSum = buckets.reduce(function(a, b) { return a + b.count; }, 0);
        if (curSum !== list.length) {
          buckets[buckets.length - 1].count += (list.length - curSum);
        }

        var idx = 0;
        buckets.forEach(function(b) {
          var scores = assignScoresToCount(b.count, b.target, isMcq);
          scores.forEach(function(sc) {
            if (idx < list.length) {
              list[idx].score = sc;
              list[idx].level = b.level;
              if (!list[idx].metadata) list[idx].metadata = {};
              list[idx].metadata.difficulty = b.diff;
              list[idx].metadata.cognitiveProcess = b.cog;
              idx++;
            }
          });
        });
      }

      var tvMcqBuckets = [];
      if (tv_m1_mcq > 0) tvMcqBuckets.push({ level: "Mức 1", target: tv_m1_mcq, diff: "Dễ", cog: "Biết (Knowing)" });
      if (tv_m2_mcq > 0) tvMcqBuckets.push({ level: "Mức 2", target: tv_m2_mcq, diff: "Trung bình", cog: "Áp dụng (Applying)" });
      if (tv_m3_mcq > 0) tvMcqBuckets.push({ level: "Mức 3", target: tv_m3_mcq, diff: "Khó", cog: "Vận dụng (Reasoning)" });
      assignTv(tvMcqs, tvMcqBuckets, true);

      var tvEssayBuckets = [];
      if (tv_m1_essay > 0) tvEssayBuckets.push({ level: "Mức 1", target: tv_m1_essay, diff: "Dễ", cog: "Biết (Knowing)" });
      if (tv_m2_essay > 0) tvEssayBuckets.push({ level: "Mức 2", target: tv_m2_essay, diff: "Trung bình", cog: "Áp dụng (Applying)" });
      if (tv_m3_essay > 0) tvEssayBuckets.push({ level: "Mức 3", target: tv_m3_essay, diff: "Khó", cog: "Vận dụng (Reasoning)" });
      assignTv(tvEssays, tvEssayBuckets, false);

      return exam;
    }

    // 2. Cho các môn chung (Toán, Khoa học, Lịch sử - Địa lí, Tin học, Công nghệ...)
    var targetM1Score = Math.round((10.0 * targetM1Pct / 100) * 4) / 4;
    var targetM2Score = Math.round((10.0 * targetM2Pct / 100) * 4) / 4;
    var targetM3Score = Math.round((10.0 - targetM1Score - targetM2Score) * 4) / 4;

    exam.targetLevel1Score = targetM1Score;
    exam.targetLevel2Score = targetM2Score;
    exam.targetLevel3Score = targetM3Score;

    var mcqs = exam.multipleChoice || [];
    var essays = exam.essaySection || [];

    var mcqPct = (params && parseInt(params.mcqPercent)) ||
                 parseInt(exam.mcqPercent) ||
                 (typeof document !== 'undefined' && parseInt(document.getElementById("aiScoreRatioSlider")?.value)) ||
                 70;
    var essayPct = 100 - mcqPct;
    exam.mcqPercent = mcqPct;
    exam.essayPercent = essayPct;

    var targetMcqScore = 0;
    var targetEssayScore = 0;
    if (mcqs.length === 0) {
      targetEssayScore = 10.0;
    } else if (essays.length === 0) {
      targetMcqScore = 10.0;
    } else {
      targetMcqScore = Math.round((10.0 * mcqPct / 100) * 4) / 4;
      targetEssayScore = Math.round((10.0 - targetMcqScore) * 4) / 4;
    }

    // Phân bổ điểm cho từng mức độ giữa MCQ và Tự luận
    var m1_mcq = Math.min(targetM1Score, targetMcqScore);
    var m1_essay = Math.round((targetM1Score - m1_mcq) * 4) / 4;

    var m3_essay = Math.min(targetM3Score, Math.max(0, Math.round((targetEssayScore - m1_essay) * 4) / 4));
    var m3_mcq = Math.round((targetM3Score - m3_essay) * 4) / 4;

    var m2_mcq = Math.round((targetMcqScore - m1_mcq - m3_mcq) * 4) / 4;
    var m2_essay = Math.round((targetEssayScore - m1_essay - m3_essay) * 4) / 4;

    // 1. Phân bổ cho MCQ
    if (mcqs.length > 0) {
      var mcqBuckets = [];
      if (m1_mcq > 0) mcqBuckets.push({ level: "Mức 1", target: m1_mcq, diff: "Dễ", cog: "Biết (Knowing)" });
      if (m2_mcq > 0) mcqBuckets.push({ level: "Mức 2", target: m2_mcq, diff: "Trung bình", cog: "Áp dụng (Applying)" });
      if (m3_mcq > 0) mcqBuckets.push({ level: "Mức 3", target: m3_mcq, diff: "Khó", cog: "Vận dụng (Reasoning)" });

      if (mcqBuckets.length === 1) {
        mcqBuckets[0].count = mcqs.length;
      } else {
        var totalAssigned = 0;
        mcqBuckets.forEach(function(b, idx) {
          if (idx === mcqBuckets.length - 1) {
            b.count = mcqs.length - totalAssigned;
          } else {
            b.count = Math.max(1, Math.round(mcqs.length * (b.target / targetMcqScore)));
            totalAssigned += b.count;
          }
        });
        var curSum = mcqBuckets.reduce(function(a, b) { return a + b.count; }, 0);
        if (curSum !== mcqs.length) {
          mcqBuckets[mcqBuckets.length - 1].count += (mcqs.length - curSum);
        }
      }

      var qIdx = 0;
      mcqBuckets.forEach(function(b) {
        var scores = assignScoresToCount(b.count, b.target, true);
        scores.forEach(function(sc) {
          if (qIdx < mcqs.length) {
            var q = mcqs[qIdx];
            q.level = b.level;
            q.score = sc;
            if (!q.metadata) q.metadata = {};
            q.metadata.difficulty = b.diff;
            q.metadata.cognitiveProcess = b.cog;
            qIdx++;
          }
        });
      });
    }

    // 2. Phân bổ cho Essay
    if (essays.length > 0) {
      var essayBuckets = [];
      if (m1_essay > 0) essayBuckets.push({ level: "Mức 1", target: m1_essay, diff: "Dễ", cog: "Biết (Knowing)" });
      if (m2_essay > 0) essayBuckets.push({ level: "Mức 2", target: m2_essay, diff: "Trung bình", cog: "Áp dụng (Applying)" });
      if (m3_essay > 0) essayBuckets.push({ level: "Mức 3", target: m3_essay, diff: "Khó", cog: "Vận dụng (Reasoning)" });

      if (essayBuckets.length === 1) {
        essayBuckets[0].count = essays.length;
      } else {
        var totalAssignedEs = 0;
        essayBuckets.forEach(function(b, idx) {
          if (idx === essayBuckets.length - 1) {
            b.count = essays.length - totalAssignedEs;
          } else {
            b.count = Math.max(1, Math.round(essays.length * (b.target / targetEssayScore)));
            totalAssignedEs += b.count;
          }
        });
        var curSumEs = essayBuckets.reduce(function(a, b) { return a + b.count; }, 0);
        if (curSumEs !== essays.length) {
          essayBuckets[essayBuckets.length - 1].count += (essays.length - curSumEs);
        }
      }

      var esIdx = 0;
      essayBuckets.forEach(function(b) {
        var scores = assignScoresToCount(b.count, b.target, false);
        scores.forEach(function(sc) {
          if (esIdx < essays.length) {
            var es = essays[esIdx];
            es.level = b.level;
            es.score = sc;
            if (!es.metadata) es.metadata = {};
            es.metadata.difficulty = b.diff;
            es.metadata.cognitiveProcess = b.cog;
            var scoreStr = sc.toString().replace('.', ',');
            if (es.title) {
              es.title = es.title.replace(/\([0-9.,]+\s*điểm[^)]*\)/i, `(${scoreStr} điểm - ${b.level})`);
            } else {
              es.title = `Câu ${es.num || (esIdx + 1)} (${scoreStr} điểm - ${b.level}):`;
            }
            esIdx++;
          }
        });
      });
    }

    exam.mcqTotalScore = targetMcqScore;
    exam.essayTotalScore = targetEssayScore;

    return exam;
  },

  /**
   * Tự động thẩm định, rà soát và cân bằng 100% Ma trận & Điểm số đề thi do AI sinh ra (Chuẩn TT27 & SEA-PLM)
   */
  sanitizeAndBalanceExam: function(exam, params) {
    if (!exam) return exam;

    if (params) {
      if (params.level1Percent !== undefined) exam.level1Percent = parseInt(params.level1Percent);
      if (params.level2Percent !== undefined) exam.level2Percent = parseInt(params.level2Percent);
      if (params.level3Percent !== undefined) exam.level3Percent = parseInt(params.level3Percent);
      if (params.mcqPercent !== undefined) exam.mcqPercent = parseInt(params.mcqPercent);
      if (params.essayPercent !== undefined) exam.essayPercent = parseInt(params.essayPercent);
      if (params.subjectId) exam.subjectId = params.subjectId;
      if (params.grade) exam.grade = parseInt(params.grade);
      if (params.scope) {
        exam.scope = params.scope;
        if (!exam.scopeDesc) exam.scopeDesc = params.scope;
      }
    }

    var currentScope = exam.scopeDesc || exam.scope || (params && params.scope) || (typeof document !== 'undefined' ? (document.getElementById("aiCustomScopeInput")?.value || document.getElementById("aiScopePreset")?.value) : "") || "";
    var termInfo = this.resolveExamTermInfo(currentScope);
    
    // Tự động gán và sửa lỗi nếu AI trả về sai học kỳ
    if (!exam.examTerm || (termInfo.term === "HỌC KÌ II" && String(exam.examTerm).includes("I") && !String(exam.examTerm).includes("II"))) {
      exam.examTerm = termInfo.term;
    }
    exam.examHeaderTitle = termInfo.headerTitle;
    if (!exam.scope) exam.scope = currentScope;
    if (!exam.scopeDesc) exam.scopeDesc = currentScope;

    // Helper khử lỗi escape tab LaTeX và tự động chuyển đổi mã LaTeX thô (\frac, m^2, \times...) sang chuẩn ký hiệu Tiểu học (3/4, m², ×...)
    function cleanLatexForElementary(str) {
      if (typeof str !== 'string') return str;
      return str
        // Khử tab escape vô tình do JSON string gây ra (\times -> \t + imes, v.v.)
        .replace(/\t(imes)/g, '\\times')
        .replace(/\t(ext)/g, '\\text')
        .replace(/\t(frac)/g, '\\frac')
        .replace(/\t(dfrac)/g, '\\dfrac')
        // Khử \left, \right
        .replace(/\\left\s*([(\[{|])/g, '$1')
        .replace(/\\right\s*([)\]}|])/g, '$1')
        .replace(/\\left\./g, '')
        .replace(/\\right\./g, '')
        // Khử các lệnh văn bản LaTeX (\text{}, \mathrm{}, \textbf{}...)
        .replace(/\\text\{([^}]+)\}/g, '$1')
        .replace(/\\mathrm\{([^}]+)\}/g, '$1')
        .replace(/\\textbf\{([^}]+)\}/g, '$1')
        .replace(/\\mathbf\{([^}]+)\}/g, '$1')
        .replace(/\\mathit\{([^}]+)\}/g, '$1')
        // Chuyển phân số \frac{a}{b} hoặc \dfrac{a}{b} -> a/b
        .replace(/\\d?frac\s*\{([^}]+)\}\s*\{([^}]+)\}/g, '$1/$2')
        // Chuyển đơn vị đo diện tích, thể tích có số mũ (^2 -> ², ^3 -> ³)
        .replace(/(\b(?:km|hm|dam|m|dm|cm|mm))\^2/gi, '$1²')
        .replace(/(\b(?:km|hm|dam|m|dm|cm|mm))\^3/gi, '$1³')
        .replace(/\^2/g, '²')
        .replace(/\^3/g, '³')
        // Dấu nhân, chia, so sánh, quan hệ tập hợp
        .replace(/\\times/g, '×')
        .replace(/\\cdot/g, '·')
        .replace(/\\div/g, ':')
        .replace(/\\le[q]?\b/g, '≤')
        .replace(/\\ge[q]?\b/g, '≥')
        .replace(/\\in\b/g, '∈')
        .replace(/\\notin\b/g, '∉')
        .replace(/\\neq\b/g, '≠')
        .replace(/\\approx\b/g, '≈')
        .replace(/\\dots/g, '...')
        .replace(/\\ldots/g, '...')
        // Khử dấu ngoặc nhọn LaTeX \{ và \}
        .replace(/\\\{/g, '{')
        .replace(/\\\}/g, '}')
        // Khử khoảng trắng escape LaTeX (\ )
        .replace(/\\\s+/g, ' ')
        // Khử dấu gạch chéo escape thừa trước dấu câu
        .replace(/\\([,;%_])/g, '$1')
        // Khử cặp dấu $ hoặc $$
        .replace(/\$\$([^$]+)\$\$/g, '$1')
        .replace(/\$([^$]+)\$/g, '$1')
        // Khử dấu gạch chéo đơn độc còn sót lại trước chữ cái
        .replace(/\\([a-zA-Z]+)/g, function(match, word) {
          if (word === 'times') return '×';
          if (word === 'div') return ':';
          if (word === 'le' || word === 'leq') return '≤';
          if (word === 'ge' || word === 'geq') return '≥';
          if (word === 'in') return '∈';
          if (word === 'approx') return '≈';
          return word;
        })
        // Chuẩn hóa mô hình chính quyền 2 cấp TOÀN QUỐC từ 01/7/2025 (BÃI BỎ HOÀN TOÀN CẤP HUYỆN: không còn quận, huyện, thị xã)
        .replace(/huyện\s+([A-ZÀ-Ỹ][a-zà-ỹ\s]+?)\s+thuộc\s+(tỉnh|thành phố)\s+([A-ZÀ-Ỹ][a-zà-ỹ\s]+?)(?:\s+mới)?(?=[,\.\s]|$)/gi, 'xã $1, $2 $3')
        .replace(/(\b(?:tại|ở|thuộc|về|đến|qua|từ)\s+)huyện\s+([A-ZÀ-Ỹ][a-zà-ỹ\s]+?)(?=[,\.\s]|$)/gi, '$1xã $2')
        .replace(/\bhuyện\s+([A-ZÀ-Ỹ][a-zà-ỹ]+)/g, 'xã $1')
        .replace(/\bthị xã\s+([A-ZÀ-Ỹ][a-zà-ỹ]+)/g, 'phường $1')
        .replace(/\bquận\s+([0-9]+)\b/gi, 'phường $1')
        .replace(/\bquận\s+([A-ZÀ-Ỹ][a-zà-ỹ]+)/g, 'phường $1')
        .replace(/(tỉnh|thành phố)\s+([A-ZÀ-Ỹ][a-zà-ỹ\s]+?)\s+mới(?=[,\.\s]|$)/gi, '$1 $2')
        .replace(/Vĩnh\s+Long\s+mới/gi, 'Vĩnh Long')
        .replace(/\s{2,}/g, ' ')
        .trim();
    }
    var cleanLatexText = cleanLatexForElementary;

    function cleanDeep(obj) {
      if (!obj) return;
      if (typeof obj === 'string') return;
      for (var k in obj) {
        if (typeof obj[k] === 'string') {
          obj[k] = cleanLatexText(obj[k]);
        } else if (typeof obj[k] === 'object') {
          cleanDeep(obj[k]);
        }
      }
    }

    cleanDeep(exam);

    // Đối với môn Tiếng Việt có cấu trúc 2 phiếu riêng biệt
    if (exam.readingExam || exam.isTiengViet) {
      this.balanceCognitiveLevels(exam, params);
      exam.threeTierMatrix = AIService.buildThreeTierMatrix(exam);
      if (!exam.matrix) exam.matrix = {};
      exam.matrix.threeTier = exam.threeTierMatrix;
      return exam;
    }

    var mcqs = exam.multipleChoice || [];
    var essays = exam.essaySection || [];

    // 1. Kiểm tra chéo đáp án MCQ & làm sạch các dạng câu hỏi trắc nghiệm đa dạng
    mcqs.forEach(function(q) {
      if (q.text) q.text = cleanLatexText(q.text);
      if (q.explain) q.explain = cleanLatexText(q.explain);
      if (Array.isArray(q.options)) {
        q.options = q.options.map(cleanLatexText);
      }
      if (Array.isArray(q.items)) {
        q.items.forEach(function(it) {
          if (it.text) it.text = cleanLatexText(it.text);
        });
      }
      if (Array.isArray(q.columnA)) {
        q.columnA.forEach(function(it) {
          if (it.text) it.text = cleanLatexText(it.text);
        });
      }
      if (Array.isArray(q.columnB)) {
        q.columnB.forEach(function(it) {
          if (it.text) it.text = cleanLatexText(it.text);
        });
      }
      if (q.passage) q.passage = cleanLatexText(q.passage);

      // Chỉ kiểm tra chéo đáp án cho trắc nghiệm 4 lựa chọn (MCQ)
      if (!q.type || q.type === "mcq") {
        var dr = q.distractorRationale || {};
        var correctText = dr.correct || "";
        var mMatch = correctText.match(/phương án (?:đúng )?([A-D])/i) ||
                     correctText.match(/đáp án (?:đúng )?([A-D])/i) ||
                     correctText.match(/chọn (?:phương án )?([A-D])/i) ||
                     correctText.match(/lựa chọn ([A-D])(?: là| chính)/i);
        if (mMatch && mMatch[1]) {
          var detectedAns = mMatch[1].toUpperCase();
          if (q.ans && q.ans.toUpperCase() !== detectedAns) {
            console.warn(`[Tự động sửa lỗi AI] Câu ${q.num}: Phát hiện mâu thuẫn ans='${q.ans}' nhưng distractorRationale chỉ định '${detectedAns}'. Tự động đồng bộ ans thành '${detectedAns}'.`);
            q.ans = detectedAns;
          }
        }
      }
    });

    // 2. Tự động cân bằng toán học chuẩn 100% các Mức độ nhận thức (M1, M2, M3) & điểm số Trắc nghiệm / Tự luận
    this.balanceCognitiveLevels(exam, params);

    var totalMcqScore = exam.mcqTotalScore || 7.0;
    var totalEssayScore = exam.essayTotalScore || 3.0;

    // 3. Tự động tính toán và ĐỒNG BỘ 100% Ma trận tổng hợp (matrix.summary) từ danh sách câu hỏi thực tế
    if (!exam.matrix) exam.matrix = {};
    if (!exam.matrix.summary) exam.matrix.summary = {};
    var s = exam.matrix.summary;

    var m1Mcq = 0, m1Essay = 0;
    var m2Mcq = 0, m2Essay = 0;
    var m3Mcq = 0, m3Essay = 0;

    mcqs.forEach(function(q) {
      var lvl = String(q.level || "").toLowerCase();
      if (lvl.includes("1")) m1Mcq++;
      else if (lvl.includes("3")) m3Mcq++;
      else m2Mcq++;
    });

    essays.forEach(function(es) {
      var lvl = String(es.level || "").toLowerCase();
      if (lvl.includes("1")) m1Essay++;
      else if (lvl.includes("3")) m3Essay++;
      else m2Essay++;
    });

    function fmtScoreStr(num) {
      var r = Math.round((parseFloat(num) || 0) * 4) / 4;
      return r.toString().replace('.', ',');
    }

    s.m1_total_mcq = m1Mcq;
    s.m1_total_essay = m1Essay;
    s.m1_score = fmtScoreStr(exam.targetLevel1Score !== undefined ? exam.targetLevel1Score : 4.0);
    s.m1_pct = exam.level1Percent || 40;

    s.m2_total_mcq = m2Mcq;
    s.m2_total_essay = m2Essay;
    s.m2_score = fmtScoreStr(exam.targetLevel2Score !== undefined ? exam.targetLevel2Score : 4.0);
    s.m2_pct = exam.level2Percent || 40;

    s.m3_total_mcq = m3Mcq;
    s.m3_total_essay = m3Essay;
    s.m3_score = fmtScoreStr(exam.targetLevel3Score !== undefined ? exam.targetLevel3Score : 2.0);
    s.m3_pct = exam.level3Percent || 20;

    s.total_mcq_count = mcqs.length;
    s.total_essay_count = essays.length;
    s.total_score = "10";

    // Đồng bộ từng dòng chủ đề trong matrix.topics nếu có
    if (exam.matrix.topics && Array.isArray(exam.matrix.topics)) {
      var mcqScoreMap = {};
      mcqs.forEach(function(q) { mcqScoreMap[q.num] = parseFloat(q.score) || 0.5; });
      var essayScoreMap = {};
      essays.forEach(function(e) { essayScoreMap[e.num] = parseFloat(e.score) || 1.5; });

      exam.matrix.topics.forEach(function(top) {
        var rowMcqCount = 0;
        var rowEssayCount = 0;
        var rowScore = 0;

        function extractNums(str) {
          if (!str) return [];
          var matches = String(str).match(/\d+/g);
          return matches ? matches.map(Number) : [];
        }

        ['m1_mcq', 'm2_mcq', 'm3_mcq'].forEach(function(f) {
          var nums = extractNums(top[f]);
          rowMcqCount += nums.length;
          nums.forEach(function(n) { rowScore += mcqScoreMap[n] || 0.5; });
        });

        ['m1_essay', 'm2_essay', 'm3_essay'].forEach(function(f) {
          var nums = extractNums(top[f]);
          rowEssayCount += nums.length;
          nums.forEach(function(n) { rowScore += essayScoreMap[n] || 1.5; });
        });

        if (rowMcqCount > 0 || rowEssayCount > 0) {
          top.total_mcq = rowMcqCount;
          top.total_essay = rowEssayCount;
          top.score = (Math.round(rowScore * 4) / 4).toString().replace('.', ',');
        }
      });
    }

    // 6. Đồng bộ bảng siêu dữ liệu SEA-PLM (seaplmMetadataTable)
    if (exam.seaplmMetadataTable && Array.isArray(exam.seaplmMetadataTable)) {
      var mcqMap = {};
      mcqs.forEach(function(q) { mcqMap[q.num] = q; });
      var essayMap = {};
      essays.forEach(function(e) { essayMap[e.num] = e; });

      exam.seaplmMetadataTable.forEach(function(item) {
        var isMcqItem = item.itemType && item.itemType.toLowerCase().includes("trắc nghiệm");
        var qObj = isMcqItem ? mcqMap[item.order] : (essayMap[item.order] || essayMap[item.order - mcqs.length]);
        if (qObj) {
          item.score = qObj.score;
          if (qObj.metadata) {
            if (qObj.metadata.difficulty) item.difficulty = qObj.metadata.difficulty;
            if (qObj.metadata.cognitiveProcess) item.cognitiveProcess = qObj.metadata.cognitiveProcess;
          }
        }
      });
    }

    // 7. Tự động tính toán và đồng bộ 100% Ma trận 3 tầng dòng (threeTierMatrix) chuẩn Thông tư 27
    exam.threeTierMatrix = AIService.buildThreeTierMatrix(exam);
    if (!exam.matrix) exam.matrix = {};
    exam.matrix.threeTier = exam.threeTierMatrix;

    // Đồng bộ lại exam.matrix.topics từ threeTierMatrix.strands để đảm bảo cả 2 cấu trúc hoàn toàn nhất quán
    if (exam.threeTierMatrix && Array.isArray(exam.threeTierMatrix.strands) && exam.threeTierMatrix.strands.length > 0) {
      exam.matrix.topics = exam.threeTierMatrix.strands.map(function(st) {
        return {
          topic: st.name,
          desc: st.desc || "",
          m1_mcq: st.m1_mcq.qNums.length ? ('Câu ' + st.m1_mcq.qNums.join(', ')) : '',
          m1_essay: st.m1_essay.qNums.length ? ('Câu ' + st.m1_essay.qNums.join(', ') + ' (TL)') : '',
          m2_mcq: st.m2_mcq.qNums.length ? ('Câu ' + st.m2_mcq.qNums.join(', ')) : '',
          m2_essay: st.m2_essay.qNums.length ? ('Câu ' + st.m2_essay.qNums.join(', ') + ' (TL)') : '',
          m3_mcq: st.m3_mcq.qNums.length ? ('Câu ' + st.m3_mcq.qNums.join(', ')) : '',
          m3_essay: st.m3_essay.qNums.length ? ('Câu ' + st.m3_essay.qNums.join(', ') + ' (TL)') : '',
          total_mcq: st.total_mcq.count,
          total_essay: st.total_essay.count,
          score: (st.total_score || 0).toString().replace('.', ',')
        };
      });
    }

    return exam;
  },

  /**
   * Gọi hàm sinh đề AI trực tuyến qua Google Gemini API
   * (Đã bỏ hoàn toàn chế độ ngoại tuyến Fallback theo yêu cầu: Bắt buộc kết nối trực tuyến)
   */
  generateExam: async function(params) {
    var self = this;
    var apiKey = params.apiKey || localStorage.getItem("tvth_gemini_api_key") || (typeof window !== 'undefined' && window.CONFIG && window.CONFIG.DEFAULT_GEMINI_API_KEY) || "";
    
    if (!apiKey || apiKey.trim().length < 15) {
      throw new Error("Chưa cấu hình Google Gemini API Key hoặc Key không hợp lệ. Vui lòng bấm nút 'Cấu hình Gemini API Key' ở góc trên để nhập Key trước khi tạo đề!");
    }

    try {
      var aiResult = await self.callGeminiAPI(apiKey.trim(), params);
      if (aiResult) {
        aiResult = self.sanitizeAndBalanceExam(aiResult, params);
        if (params.subjectId === 'TIENG_VIET' && (aiResult.readingExam || aiResult.isTiengViet)) {
          return aiResult;
        }
        if (aiResult.multipleChoice && aiResult.multipleChoice.length > 0) {
          return aiResult;
        }
        return aiResult;
      }
      throw new Error("Mô hình AI không phản hồi nội dung đề kiểm tra hợp lệ. Vui lòng thử lại!");
    } catch (err) {
      console.error("Lỗi khi kết nối Google Gemini API:", err);
      var msg = err.message || String(err);
      if (msg.includes("API key not valid") || msg.includes("API_KEY_INVALID")) {
        throw new Error("Gemini API Key không hợp lệ hoặc đã hết hạn. Vui lòng kiểm tra và cập nhật lại API Key mới trong phần Cài đặt!");
      }
      if (msg.includes("RESOURCE_EXHAUSTED") || msg.includes("Quota exceeded") || msg.includes("429")) {
        throw new Error("Đã vượt quá giới hạn lượt gọi (Quota) của Google Gemini API trong phút này. Vui lòng đợi khoảng 30 giây rồi thử lại!");
      }
      if (msg.includes("Failed to fetch") || msg.includes("NetworkError") || msg.includes("The user aborted a request")) {
        throw new Error("Lỗi kết nối mạng: Không thể kết nối tới máy chủ Google Gemini. Vui lòng kiểm tra đường truyền Internet của bạn!");
      }
      throw new Error("Không thể tạo đề qua Google Gemini API: " + msg);
    }
  },

  /**
   * Gọi trực tiếp Google Gemini API (Structured JSON Prompting)
   */
  callGeminiAPI: async function(apiKey, params) {
    var grade = parseInt(params.grade) || 5;
    var subjectId = params.subjectId || "TOAN";
    var subInfo = this.EXAM_SUBJECTS[subjectId] || this.EXAM_SUBJECTS.TOAN;
    var subjectName = subInfo.name;
    var scope = params.scope || "Kiểm tra Định kỳ Cuối Học kỳ I";
    var termInfo = this.resolveExamTermInfo(scope);
    var duration = params.duration || (grade <= 2 ? "Đọc: 35 phút | Viết: 35 phút" : "Đọc: 40 phút | Viết: 40 phút");
    var schoolName = params.schoolName || "TRƯỜNG TIỂU HỌC .................................";
    var customPrompt = params.customPrompt || "";
    var isVinhLong = !!(params.isVinhLongLocal || params.isVinhLong);

    // Xác định bộ sách: Cả nước áp dụng thống nhất bộ sách Kết nối tri thức với cuộc sống (KNTT) từ năm học 2026 - 2027
    var bookSeries = 'kntt';
    var seriesName = 'Kết nối tri thức với cuộc sống (KNTT)';

    // Tra cứu dữ liệu SGK số hóa theo bộ sách KNTT
    var sgkKey = (subjectId || '').toLowerCase().replace('lich_su_dia_ly', 'lich_su_dia_li');
    var sgkRegObj = (typeof window !== 'undefined' && window.SGK_REGISTRY) ? window.SGK_REGISTRY : (typeof SGKRegistry !== 'undefined' ? SGKRegistry : null);
    if (sgkRegObj && typeof sgkRegObj.ensureBookLoaded === 'function') {
      await sgkRegObj.ensureBookLoaded(grade, sgkKey, bookSeries);
      if (subjectId === "TIENG_VIET") {
        await sgkRegObj.ensureBookLoaded(grade, 'tieng_viet', 'ctst');
      }
    }

    var sgkContext = "";
    if (typeof window !== 'undefined' && window.SGK_DATA && typeof window.SGK_DATA.getScopeContent === 'function') {
      var scopeInfo = window.SGK_DATA.getScopeContent(grade, sgkKey, scope, bookSeries);
      if (scopeInfo && scopeInfo.found && scopeInfo.knowledgeDigest) {
        var digest = scopeInfo.knowledgeDigest;
        // KHÔNG CẮT XÉN DỮ LIỆU: Truyền trọn vẹn 100% nội dung chương trình SGK số hóa để AI ra đề chính xác, không suy luận bừa
        if (subjectId === "TIENG_VIET") {
          sgkContext = `\n- NỘI DUNG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (KNTT) TRONG PHẠM VI KIỂM TRA (DÙNG CHO LUYỆN TỪ VÀ CÂU, CHÍNH TẢ & VIẾT):\n${digest}\n- NGUYÊN TẮC BẮT BUỘC 100%:\n  + Toàn bộ kiến thức Luyện từ và câu, Chính tả và Viết đoạn/Bài văn BẮT BUỘC PHẢI BÁM SÁT 100% các bài học và tuần nằm trong khoảng thời gian kiểm tra ở trên. TUYỆT ĐỐI KHÔNG SUY LUẬN BỪA ngoài các tuần đã quy định.\n  + ĐỐI VỚI PHẦN ĐỌC: Tuân thủ quy định kiểm tra định kỳ lấy ngữ liệu ngoài SGK KNTT, BẮT BUỘC lấy ngữ liệu từ bộ sách Chân trời sáng tạo (CTST) được cung cấp ở mục dưới!`;
        } else {
          sgkContext = `\n- MẠCH KIẾN THỨC VÀ NỘI DUNG CHƯƠNG TRÌNH SGK SỐ HÓA [KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (KNTT)] NẰM TRONG KHOẢNG THỜI GIAN KIỂM TRA:\n${digest}\n- NGUYÊN TẮC BẢO ĐẢM NỘI DUNG CHUẨN XÁC 100% (CHỐNG SUY LUẬN BỪA):\n  + Toàn bộ ma trận, các câu hỏi trắc nghiệm và bài tập tự luận BẮT BUỘC PHẢI BÁM SÁT 100% mạch kiến thức và các bài học trong khoảng thời gian kiểm tra được cung cấp ở trên.\n  + TUYỆT ĐỐI KHÔNG tự suy luận bừa, KHÔNG lấy kiến thức của các tuần nằm ngoài phạm vi kiểm tra đã quy định (ví dụ: đề Giữa học kỳ 1 Tuần 1-9 tuyệt đối không lấy kiến thức Tuần 10 trở đi; đề Cuối học kỳ 1 Tuần 10-18 tuyệt đối không lấy kiến thức Học kỳ 2; v.v.).`;
        }
      }
    }

    // Tra cứu danh mục bài đọc số hóa 100% chuẩn SGK Chân trời sáng tạo (CTST) cho môn Tiếng Việt
    var ctstReadingContext = "";
    if (subjectId === "TIENG_VIET") {
      var sgkReg = (typeof window !== 'undefined' && window.SGK_DATA && typeof window.SGK_DATA.getScopeContent === 'function') ? window.SGK_DATA : (typeof window !== 'undefined' && window.SGK_REGISTRY && typeof window.SGK_REGISTRY.getScopeContent === 'function') ? window.SGK_REGISTRY : null;
      if (sgkReg) {
        var ctstScope = sgkReg.getScopeContent(grade, 'tieng_viet', scope, 'ctst');
        if (ctstScope && ctstScope.found && ctstScope.lessons && ctstScope.lessons.length > 0) {
          var seenTitles = {};
          var listItems = [];
          ctstScope.lessons.forEach(function(les) {
            var r = les.reading;
            var rTitle = (r && r.title) ? r.title.trim() : "";
            if (rTitle && !seenTitles[rTitle.toLowerCase()]) {
              seenTitles[rTitle.toLowerCase()] = true;
              var pg = (r && r.pages) ? r.pages : (les.pages || "");
              var wk = les.week ? `Tuần ${les.week}` : "";
              var topic = les.topic ? `Chủ điểm: ${les.topic}` : "";
              var details = [];
              if (pg) details.push(`Trang ${pg}`);
              if (wk) details.push(wk);
              if (topic) details.push(topic);
              var sampleQ = "";
              if (les.sampleQuestions && les.sampleQuestions.length > 0) {
                var docQ = les.sampleQuestions.find(function(sq){ return sq.section === 'doc_hieu' || sq.cognitive === 'locate'; });
                if (docQ) {
                  sampleQ = ` | Câu hỏi mẫu SGK: "${docQ.question}"`;
                }
              }
              listItems.push(`     * "${rTitle}" (${details.join(', ')})${sampleQ}`);
            }
          });
          if (listItems.length > 0) {
            ctstReadingContext = `\n  5. DANH MỤC BÀI ĐỌC CHUẨN 100% TRONG SGK TIẾNG VIỆT LỚP ${grade} - BỘ CHÂN TRỜI SÁNG TẠO (CTST) ĐÃ SỐ HÓA:\n${listItems.join('\n')}\n     -> NGUYÊN TẮC BẮT BUỘC 100%:\n        - BẮT BUỘC CHỌN CẢ 5 BÀI ĐỌC THÀNH TIẾNG VÀ 1 BÀI ĐỌC HIỂU TỪ DANH MỤC SGK CHÂN TRỜI SÁNG TẠO Ở TRÊN!\n        - TUYỆT ĐỐI CẤM SỬ DỤNG TỰA BÀI ĐỌC CỦA SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (như "Cánh đồng hoa", "Tuổi Ngựa", "Bến sông tuổi thơ", "Tiếng hạt nảy mầm", "Trước cổng trời", "Kỳ diệu rừng xanh",...).\n        - Ghi rõ đúng tên bài đọc, tác giả và số trang SGK Chân trời sáng tạo tương ứng.`;
          }
        }
      }
    }

    var readingGenreContext = "";

    var prompt = "";

    // =========================================================================
    // PROMPT CHUYÊN BIỆT CHO MÔN TIẾNG VIỆT (CHUẨN TT27: 2 PHIẾU ĐỌC & VIẾT)
    // BỘ SÁCH CHÍNH KHÓA: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (KNTT) - ÁP DỤNG THỐNG NHẤT TOÀN QUỐC
    // NGỮ LIỆU PHẦN ĐỌC: LẤY NGỮ LIỆU NGOÀI SGK KNTT (LẤY TƯƠNG TỰ TỪ BỘ CHÂN TRỜI SÁNG TẠO)
    // =========================================================================
    if (subjectId === "TIENG_VIET") {
      var oralScore = parseFloat(params.tvOralScore) || 4.0;
      var oralMode = "sgk";
      var compScore = Math.round((10.0 - oralScore) * 10) / 10;
      var dictScore = (grade <= 3) ? (parseFloat(params.tvDictationScore) || 4.0) : 0;
      var tlvScore = (grade <= 3) ? Math.round((10.0 - dictScore) * 10) / 10 : 10.0;
      var essayGenre = params.tvEssayGenre || (grade >= 4 ? "Văn miêu tả cây cối / cảnh vật / người" : "Viết đoạn văn theo chủ điểm");

      prompt = `
Bạn là Chuyên gia Đánh giá Giáo dục Tiểu học hàng đầu Việt Nam, am hiểu sâu sắc Chương trình GDPT 2018, Thông tư 27/2020/TT-BGDĐT, Khung đánh giá năng lực của Chương trình SEA-PLM (Bộ GD&ĐT) và Bộ SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (KNTT) - bộ sách giáo khoa chuẩn áp dụng thống nhất trên toàn quốc từ năm học 2026 - 2027.
Hãy soạn trọn bộ ĐỀ KIỂM TRA MÔN TIẾNG VIỆT LỚP ${grade} gồm 2 PHIẾU RIÊNG BIỆT (ĐỀ ĐỌC 10đ & ĐỀ VIẾT 10đ), MA TRẬN 3 MỨC ĐỘ VÀ HƯỚNG DẪN MÃ HÓA (CODING GUIDE) THEO CHUẨN SEA-PLM với các thông số sau:

- MÔN HỌC: Tiếng Việt - Lớp ${grade}
- BỘ SÁCH CHÍNH KHÓA THỐNG NHẤT TOÀN QUỐC: Kết nối tri thức với cuộc sống (KNTT)
- KỲ KIỂM TRA: ${termInfo.term} (${termInfo.headerTitle})
- PHẠM VI RA ĐỀ: ${scope}

- QUY TẮC CỐT LÕI VỀ BỘ SÁCH VÀ NGỮ LIỆU ĐỌC (BẮT BUỘC TUÂN THỦ 100%):
  1. CĂN CỨ CHƯƠNG TRÌNH & CHUẨN KIẾN THỨC KĨ NĂNG:
     * Toàn bộ khung ma trận, phân phối chương trình, chủ điểm học tập, kiến thức Luyện từ và câu và thể loại Tập làm văn BẮT BUỘC BÁM SÁT THEO BỘ SÁCH KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (KNTT) Lớp ${grade}.
  2. NGUYÊN TẮC BẮT BUỘC VỀ NGỮ LIỆU PHẦN ĐỌC (LẤY NGỮ LIỆU NGOÀI SÁCH KNTT - LẤY TƯƠNG TỰ TỪ BỘ CHÂN TRỜI SÁNG TẠO):
     * Theo đúng quy định chỉ đạo chuyên môn của Bộ GD&ĐT: Đề kiểm tra định kỳ phần ĐỌC BẮT BUỘC PHẢI LẤY NGỮ LIỆU BÊN NGOÀI SÁCH GIÁO KHOA CHÍNH KHÓA (NGOÀI SGK KNTT MÀ HỌC SINH ĐANG HỌC) nhằm đánh giá đúng năng lực đọc hiểu thực chất của học sinh, tuyệt đối tránh tình trạng dạy tủ, học vẹt, học sinh chỉ học thuộc lòng bài đọc trong sách giáo khoa chính khóa.
     * Để ngữ liệu ngoài sách bảo đảm 100% chất lượng văn học, tính sư phạm mẫu mực, đúng tâm sinh lý lứa tuổi tiểu học, tương đương về chủ điểm, độ khó và dung lượng từ ngữ theo từng tuần/học kỳ của chương trình, HỆ THỐNG YÊU CẦU LẤY NGỮ LIỆU TƯƠNG TỰ TỪ BỘ SÁCH CHÂN TRỜI SÁNG TẠO (CTST) (vì đối với học sinh học bộ sách KNTT, các bài đọc trong sách CTST chính là ngữ liệu ngoài SGK chuẩn mực nhất!).
  3. Phần Đọc thành tiếng (${oralScore.toFixed(1).replace('.', ',')} điểm):
     * BẮT BUỘC cung cấp ĐÚNG 5 BÀI ĐỌC THÀNH TIẾNG (tương ứng 5 Phiếu đọc bốc thăm từ Phiếu 1 đến Phiếu 5 để in trên 5 trang A4 riêng biệt) lấy từ các bài đọc tương đương trong SGK Tiếng Việt Chân trời sáng tạo (CTST) Lớp ${grade} thuộc phạm vi học kỳ.
     * YÊU CẦU ĐẶC BIỆT ĐỂ IN ĐỀ CHO HỌC SINH (5 BÀI TRÊN 5 TRANG A4):
       - TUYỆT ĐỐI KHÔNG TRÍCH ĐOẠN NGẮN 30-50 từ. BẮT BUỘC cung cấp TOÀN VĂN CẢ BÀI ĐỌC HOÀN CHỈNH (văn xuôi từ 180 đến 300 từ; thơ trích trọn vẹn toàn bộ các khổ thơ) trong trường "passage" để học sinh lớp ${grade} đọc đủ dung lượng.
       - BẮT BUỘC cung cấp TOÀN BỘ HỆ THỐNG CÂU HỎI ĐỌC HIỂU CỦA BÀI ĐÓ TRONG SGK CTST (từ 3 đến 5 câu hỏi) vào mảng "questions" (và chuỗi "question") để in đầy đủ vào phiếu đọc của học sinh.
       - BẮT BUỘC cung cấp GỢI Ý CÂU TRẢ LỜI TƯƠNG ỨNG vào mảng "answers" (và chuỗi "answer") trong Hướng dẫn chấm.
       - Ghi rõ: "title" (Tên bài đọc), "bookVolume", "page", "author".
  4. Phần Đọc hiểu & Luyện từ và câu (${compScore.toFixed(1).replace('.', ',')} điểm):
     * Cung cấp 1 bài đọc hoàn chỉnh trích từ SGK Tiếng Việt Lớp ${grade} - Chân trời sáng tạo (CTST) (khoảng ${grade === 1 ? '40-60' : grade === 2 ? '80-110' : grade === 3 ? '150-180' : grade === 4 ? '200-250' : '250-300'} từ) có chủ điểm tương đồng với bài học KNTT. TUYỆT ĐỐI KHÔNG lấy bài đọc đã có trong SGK KNTT.
     * Ghi rõ: Tên bài đọc, Tác giả.
     * Hệ thống 8 câu hỏi (6 trắc nghiệm + 2 tự luận):
       - Mạch Đọc hiểu văn bản: Đọc hiểu và phân tích văn bản đọc mới trích từ CTST.
       - Mạch Luyện từ và câu: Bám sát chuẩn kiến thức Tiếng Việt của chương trình SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (KNTT) Lớp ${grade}.
       - Thang điểm: BẮT BUỘC chẵn bội số của 0,25.
${ctstReadingContext}

- ĐỀ VIẾT (10,0 điểm):
  + Bám sát chủ điểm, thể loại và phân phối chương trình của SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (KNTT) Lớp ${grade}.
${grade <= 3 ? `  + Phần Chính tả Nghe - viết (${dictScore.toFixed(1).replace('.', ',')} điểm): Đoạn văn/thơ đúng chuẩn dung lượng (${grade === 1 ? '30-35 chữ' : grade === 2 ? '45-50 chữ' : '65-70 chữ'}) bám sát SGK KNTT Lớp ${grade}.
  + Phần Tập làm văn - Viết đoạn văn (${tlvScore.toFixed(1).replace('.', ',')} điểm): Đề bài yêu cầu viết đoạn văn (${grade <= 2 ? '3 đến 5 câu' : '5 đến 7 câu'}) theo đúng chủ điểm bài học SGK KNTT kèm gợi ý dàn ý.` : `  + Phần Tập làm văn (10,0 điểm duy nhất): Viết một bài văn hoàn chỉnh đúng thể loại (${essayGenre}) bám sát chương trình SGK KNTT kèm gợi ý dàn ý (Mở bài, Thân bài, Kết bài). Bắt buộc có Barem chấm chi tiết 10 điểm trong Hướng dẫn chấm.`}
${sgkContext}
${customPrompt ? "- YÊU CẦU BỔ SUNG: " + customPrompt : ""}

### QUY ĐỊNH PHÁP LÝ HÀNH CHÍNH QUỐC GIA (ÁP DỤNG TRÊN TOÀN QUỐC TỪ 01/7/2025 - BẮT BUỘC):
- Từ ngày 01/7/2025, TOÀN BỘ CÁC TỈNH/THÀNH PHỐ TRÊN CẢ NƯỚC CHÍNH THỨC BÃI BỎ CẤP HUYỆN (không còn quận, huyện, thị xã, thành phố thuộc tỉnh). Hệ thống chính quyền địa phương vận hành tinh gọn theo mô hình 2 cấp: Cấp Tỉnh / TP trực thuộc Trung ương -> Cấp Xã / Phường / Thị trấn.
- Trong toàn bộ câu hỏi, bài văn, bài đọc thầm, ví dụ thực tế liên hệ địa phương:
  + TUYỆT ĐỐI CẤM dùng các từ: "huyện", "quận", "thị xã", "cấp huyện" (Ví dụ: CẤM viết "huyện...", "quận...", "thị xã...").
  + BẮT BUỘC chỉ dùng cấp xã/phường/thị trấn hoặc gọi theo tên địa danh, vùng đất tự nhiên (Ví dụ: "tại xã Tam Bình, tỉnh Vĩnh Long", "tại phường Bến Nghé, TP. Hồ Chí Minh", "vùng đất Tam Bình", "xứ dừa", "miệt vườn sông nước"...).
  + TUYỆT ĐỐI CẤM thêm chữ "mới" sau tên tỉnh/thành phố (ví dụ cấm viết "tỉnh Vĩnh Long mới", "Hà Nội mới"...).

### CÁC NGUYÊN TẮC BIÊN SOẠN BẮT BUỘC THEO CHUẨN SEA-PLM (BỘ GIÁO DỤC VÀ ĐÀO TẠO):
1. ĐẶT TRONG BỐI CẢNH CHÂN THỰC (AUTHENTIC CONTEXTS):
   - Mỗi câu hỏi BẮT BUỘC gắn liền với 1 bối cảnh có ý nghĩa: "Cá nhân (Personal)", "Môi trường xung quanh (Local community)", "Môi trường rộng hơn (Wider world)" hoặc "Bối cảnh môn học (Academic)".
   - Ngôn ngữ phần dẫn và câu hỏi phải đơn giản, ngắn gọn, trong sáng, sư phạm.
2. TRỌNG TÂM ĐO LƯỜNG ĐƠN NHẤT: Mỗi câu hỏi chỉ tập trung đo lường chính xác 1 kỹ năng hoặc 1 khái niệm cốt lõi.
3. KỸ THUẬT CÂU HỎI TRẮC NGHIỆM (MCQ):
   - Đúng 4 phương án A, B, C, D và chỉ có 1 đáp án đúng duy nhất.
   - Các phương án nhiễu BẮT BUỘC dựa trên các lỗi nhầm lẫn / lỗi tư duy phổ biến thực tế của học sinh tiểu học (misconceptions); không đưa ra đáp án vô lý hoặc quá dễ bị loại trừ.
   - BẮT BUỘC có trường "distractorRationale" giải thích rõ lý do phương án đúng và phân tích nguyên nhân học sinh chọn nhầm các phương án nhiễu A, B, C, D.
4. KỸ THUẬT CÂU HỎI TỰ LUẬN (CONSTRUCTED RESPONSE): Lệnh hỏi rõ ràng, tường minh.
5. HƯỚNG DẪN MÃ HÓA (CODING GUIDE) THEO CHUẨN SEA-PLM:
   - "Mã 2": Mức tối đa (câu 2 điểm) - Đầy đủ, chính xác, lập luận chặt chẽ.
   - "Mã 1": Mức tối đa (câu 1 điểm) HOẶC Mức chưa tối đa (câu 2 điểm) - Đúng một phần.
   - "Mã 0": Mức không đạt - Sai hoặc không đúng yêu cầu.
   - "Mã 9": Bỏ trống không làm bài.
   - Cung cấp câu trả lời mẫu thực tế của học sinh ("sampleResponse") cho từng mã.
6. SIÊU DỮ LIỆU CÂU HỎI (ITEM METADATA): Mỗi câu hỏi có object "metadata": { itemCode, context, contentDomain, cognitiveProcess, difficulty ("Dễ" | "Tương đối dễ" | "Tương đối khó" | "Khó"), itemType }.
7. NGUYÊN TẮC BẮT BUỘC VỀ MA TRẬN (KHÔNG THỐNG KÊ NỘI DUNG CHƯA HỌC):
   - CHỈ THỐNG KÊ CÁC MẠCH KIẾN THỨC / CHỦ ĐỀ CÓ CÂU HỎI TRONG ĐỀ KIỂM TRA NÀY VÀO BẢNG MA TRẬN.
   - TUYỆT ĐỐI KHÔNG THỐNG KÊ CÁC CHỦ ĐỀ CHƯA HỌC HOẶC KHÔNG CÓ CÂU HỎI TRONG ĐỀ VÀO MA TRẬN (không tạo dòng trống 0 câu 0 điểm).

HÃY TRẢ VỀ DUY NHẤT MỘT ĐỐI TƯỢNG JSON HỢP LỆ (Không có markdown block hoặc text bên ngoài JSON) có cấu trúc chuẩn như sau:
{
  "isTiengViet": true,
  "schoolName": "${schoolName}",
  "examTitle": "${termInfo.headerTitle} MÔN TIẾNG VIỆT LỚP ${grade}",
  "examTerm": "${termInfo.term}",
  "subjectName": "Tiếng Việt",
  "grade": ${grade},
  "duration": "${duration}",
  "schoolYear": "2026 - 2027",
  "bookSeries": "Kết nối tri thức với cuộc sống (KNTT)",
  "scopeDesc": "${scope}",
  "readingExam": {
    "totalScore": 10.0,
    "oralScore": ${oralScore},
    "oralMode": "sgk",
    "oralGuideIntro": "Học sinh bốc thăm 1 trong 5 phiếu sau, đọc thành tiếng bài văn/thơ (thời gian khoảng 1 - 1,5 phút) và trả lời câu hỏi đọc hiểu của giáo viên:",
    "oralItems": [
      {
        "sheetNum": 1,
        "title": "Tên bài đọc 1 trong SGK CTST Lớp ${grade}",
        "bookVolume": "Tập 1",
        "page": "Trang ...",
        "author": "Tên tác giả",
        "passage": "TOÀN VĂN CẢ BÀI ĐỌC HOÀN CHỈNH (HOẶC TRÍCH ĐOẠN LỚN 180-300 TỪ) TRONG SGK TIẾNG VIỆT CHÂN TRỜI SÁNG TẠO ĐỂ IN RA 1 TRANG A4 CHO HỌC SINH ĐỌC...",
        "questions": [
          "Câu hỏi 1 trong SGK tìm hiểu bài đọc...",
          "Câu hỏi 2 trong SGK tìm hiểu bài đọc...",
          "Câu hỏi 3 trong SGK tìm hiểu bài đọc...",
          "Câu hỏi 4 trong SGK tìm hiểu bài đọc..."
        ],
        "question": "1. Câu hỏi 1...\n2. Câu hỏi 2...\n3. Câu hỏi 3...\n4. Câu hỏi 4...",
        "answers": [
          "Gợi ý câu trả lời 1...",
          "Gợi ý câu trả lời 2...",
          "Gợi ý câu trả lời 3...",
          "Gợi ý câu trả lời 4..."
        ],
        "answer": "1. Trả lời 1...\n2. Trả lời 2...\n3. Trả lời 3...\n4. Trả lời 4..."
      }
    ],
    "comprehensionScore": ${compScore},
    "comprehensionReading": {
      "title": "Tên bài đọc trong SGK CTST Lớp ${grade}",
      "author": "Tên tác giả",
      "passage": "Nội dung toàn văn bài đọc trích từ SGK Tiếng Việt Chân trời sáng tạo..."
    },
    "questions": [
      {
        "num": 1,
        "itemCode": "TV${grade}_RD_01",
        "type": "mcq",
        "category": "reading",
        "level": "Mức 1",
        "score": 0.5,
        "metadata": {
          "context": "Môi trường xung quanh (Local community)",
          "contentDomain": "Văn bản đọc hiểu",
          "cognitiveProcess": "Xác định thông tin (Locate & Retrieve)",
          "difficulty": "Dễ",
          "itemType": "Trắc nghiệm 4 lựa chọn (MCQ)"
        },
        "text": "Nội dung câu hỏi trắc nghiệm đọc hiểu...",
        "options": ["A. Lựa chọn A", "B. Lựa chọn B", "C. Lựa chọn C", "D. Lựa chọn D"],
        "ans": "A",
        "explain": "Giải thích chi tiết vì sao chọn A...",
        "distractorRationale": {
          "correctReason": "Phương án A đúng vì trong văn bản...",
          "distractorB": "Học sinh chọn B do đọc sót từ khóa...",
          "distractorC": "Học sinh chọn C do nhầm lẫn giữa...",
          "distractorD": "Học sinh chọn D do suy đoán cảm tính..."
        },
        "codingGuide": {
          "maxCode": "Mã 1",
          "codes": [
            { "code": "Mã 1", "description": "Chọn đúng phương án A.", "sampleResponse": "Khoanh chọn A" },
            { "code": "Mã 0", "description": "Chọn các phương án B, C, D hoặc chọn từ 2 phương án trở lên.", "sampleResponse": "Khoanh B hoặc C" },
            { "code": "Mã 9", "description": "Bỏ trống không làm bài.", "sampleResponse": "[Để trống]" }
          ]
        }
      }
    ]
  },
  "writingExam": {
    "totalScore": 10.0,
    "grade": ${grade},
    "dictation": {
      "title": "Tên đoạn chính tả",
      "author": "Tên tác giả",
      "content": "Toàn văn đoạn văn / thơ chính tả...",
      "score": ${dictScore},
      "instruction": "Giáo viên đọc cho học sinh viết (khoảng 15 phút)."
    },
    "paragraphWriting": {
      "score": ${tlvScore},
      "prompt": "Đề bài viết đoạn văn...",
      "suggestions": ["Gợi ý 1", "Gợi ý 2", "Gợi ý 3"],
      "rubric": [
        { "criteria": "Hình thức đoạn văn", "score": "1,0đ", "detail": "Đúng số lượng câu, có câu mở đoạn kết đoạn." },
        { "criteria": "Nội dung và cảm xúc", "score": "3,0đ", "detail": "Nêu được tình cảm chân thật, chi tiết sinh động." },
        { "criteria": "Kỹ năng dùng từ, đặt câu, chính tả", "score": "2,0đ", "detail": "Không sai quá 3 lỗi chính tả, dùng từ gợi cảm." }
      ],
      "codingGuide": {
        "maxCode": "Mã 2",
        "codes": [
          { "code": "Mã 2", "description": "Viết đoạn văn hoàn chỉnh, cảm xúc chân thực, câu văn mạch lạc, đúng chính tả.", "sampleResponse": "..." },
          { "code": "Mã 1", "description": "Viết được đoạn văn nhưng còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý.", "sampleResponse": "..." },
          { "code": "Mã 0", "description": "Viết lạc đề hoặc không viết được đoạn văn.", "sampleResponse": "..." },
          { "code": "Mã 9", "description": "Bỏ trống không làm bài.", "sampleResponse": "[Để trống]" }
        ]
      }
    },
    "essay": {
      "score": 10.0,
      "genre": "${essayGenre}",
      "prompt": "Đề bài Tập làm văn hoàn chỉnh...",
      "suggestions": ["Mở bài: Giới thiệu...", "Thân bài: Tả chi tiết...", "Kết bài: Nêu cảm nghĩ..."],
      "rubric": [
        { "criteria": "1. Mở bài", "score": "1,0đ", "detail": "Giới thiệu hấp dẫn đối tượng miêu tả/kể chuyện." },
        { "criteria": "2. Thân bài", "score": "4,0đ", "detail": "Miêu tả chi tiết, sinh động, sắp xếp ý hợp lý." },
        { "criteria": "3. Kết bài", "score": "1,0đ", "detail": "Bày tỏ cảm xúc chân thành, liên hệ bản thân." },
        { "criteria": "4. Chính tả, ngữ pháp, dùng từ", "score": "2,0đ", "detail": "Câu văn đúng ngữ pháp, không sai lỗi chính tả." },
        { "criteria": "5. Sáng tạo, cảm xúc", "score": "2,0đ", "detail": "Có hình ảnh so sánh, nhân hóa, liên tưởng độc đáo." }
      ],
      "codingGuide": {
        "maxCode": "Mã 2",
        "codes": [
          { "code": "Mã 2", "description": "Mức tối đa: Bài văn đủ 3 phần Mở - Thân - Kết, miêu tả sinh động, giàu cảm xúc, đúng ngữ pháp.", "sampleResponse": "..." },
          { "code": "Mã 1", "description": "Mức chưa tối đa: Bài văn đủ bố cục nhưng miêu tả sơ sài hoặc mắc một số lỗi chính tả, diễn đạt.", "sampleResponse": "..." },
          { "code": "Mã 0", "description": "Mức không đạt: Lạc đề hoàn toàn hoặc chỉ viết được vài câu rời rạc.", "sampleResponse": "..." },
          { "code": "Mã 9", "description": "Bỏ trống không làm bài.", "sampleResponse": "[Để trống]" }
        ]
      }
    }
  },
  "seaplmMetadataTable": [
    {
      "itemCode": "TV${grade}_RD_01",
      "order": 1,
      "context": "Môi trường xung quanh (Local community)",
      "contentDomain": "Đọc hiểu văn bản",
      "cognitiveProcess": "Xác định thông tin (Locate)",
      "difficulty": "Dễ",
      "itemType": "Trắc nghiệm (MCQ)",
      "score": 0.5,
      "maxCode": "Mã 1"
    }
  ],
  "matrix": {
    "readingMatrix": [
      { "component": "1. Đọc thành tiếng", "m1": "${oralScore.toFixed(1)}", "m2": "-", "m3": "-", "total": "${oralScore.toFixed(1)}" },
      { "component": "2. Đọc hiểu văn bản", "m1": "2.0 (Câu 1, 2)", "m2": "1.5 (Câu 3, 4)", "m3": "0.5 (Câu 5)", "total": "4.0" },
      { "component": "3. Luyện từ và câu", "m1": "0.5 (Câu 6)", "m2": "1.0 (Câu 7)", "m3": "0.5 (Câu 8)", "total": "2.0" }
    ],
    "writingMatrix": [
      ${grade <= 3 ? `{"component": "1. Chính tả (Nghe - viết)", "level": "Mức 1", "score": "${dictScore.toFixed(1)}"},
      {"component": "2. Tập làm văn (Viết đoạn)", "level": "Mức 2, 3", "score": "${tlvScore.toFixed(1)}"}` : `{"component": "Tập làm văn (Bài văn hoàn chỉnh)", "level": "Mức 1, 2, 3", "score": "10.0"}`}
    ]
  },
  "teacherGuide": {
    "oralGuide": {
      "criteria": "- Đọc đúng tiếng, từ, trôi chảy, lưu loát (${(oralScore - 1).toFixed(1)}đ)\n- Trả lời đúng câu hỏi đọc hiểu (1,0đ)",
      "qaList": [
        { "lessonTitle": "Bài 1...", "question": "Câu hỏi...", "answer": "Gợi ý trả lời..." }
      ]
    },
    "comprehensionAnswers": [
      { "num": 1, "ans": "A", "explain": "..." }
    ],
    "writingGuide": {
      "dictationCriteria": "- Đánh giá chữ viết, độ đều nét, trình bày sạch đẹp (1,0đ)\n- Lỗi chính tả trong bài (mỗi lỗi trừ 0,5đ): sai phụ âm đầu, vần, thanh, hoa...",
      "essayRubricTitle": "Barem chấm điểm Tập làm văn"
    }
  }
}
`;
    } else {
      // PROMPT CHO CÁC MÔN TOÁN, KHOA HỌC, XÃ HỘI... CHUẨN SEA-PLM & THÔNG TƯ 27
      var mcqCount = parseInt(params.mcqCount) || 8;
      var essayCount = parseInt(params.essayCount) || 2;
      var essayGuide = params.essayGuide || "";
      var mcqPct = parseInt(params.mcqPercent) || 70;
      var essayPct = parseInt(params.essayPercent) || 30;
      var m1Pct = parseInt(params.level1Percent) || 40;
      var m2Pct = parseInt(params.level2Percent) || 40;
      var m3Pct = parseInt(params.level3Percent) || 20;

      // Phân bổ câu hỏi theo 3 mạch kiến thức chuẩn GDPT 2018 cho môn Toán
      var mathMcqNum = 0, mathMcqGeom = 0, mathMcqStat = 0;
      var mathEssayNum = 0, mathEssayGeom = 0;
      if (subjectId === "TOAN") {
        mathMcqNum = Math.max(1, Math.round(mcqCount * 0.45));
        mathMcqGeom = Math.max(1, Math.round(mcqCount * 0.40));
        mathMcqStat = Math.max(1, mcqCount - mathMcqNum - mathMcqGeom);
        while (mathMcqNum + mathMcqGeom + mathMcqStat > mcqCount && mathMcqNum > 1) mathMcqNum--;
        while (mathMcqNum + mathMcqGeom + mathMcqStat < mcqCount) mathMcqNum++;

        mathEssayNum = essayCount > 1 ? Math.max(1, Math.floor(essayCount * 0.5)) : 1;
        mathEssayGeom = essayCount > 1 ? (essayCount - mathEssayNum) : 0;
      }

      // =========================================================================
      // ĐỊNH VỊ ĐỊA PHƯƠNG TOÀN DIỆN CHO TẤT CẢ CÁC MÔN (NQ 202/2025/QH15 & VĨNH LONG)
      // =========================================================================
      var subjectLocalContext = "";
      if (isVinhLong) {
        if (subjectId === "TOAN") {
          subjectLocalContext = `\n- YÊU CẦU ĐẶC BIỆT VỀ ĐỊNH VỊ ĐỊA PHƯƠNG VĨNH LONG (NQ 202/2025/QH15 & 124 XÃ/PHƯỜNG) MÔN TOÁN:
  + Căn cứ Nghị quyết 202/2025/QH15: Tỉnh Vĩnh Long vận hành mô hình chính quyền địa phương 2 cấp, HOÀN TOÀN KHÔNG CÒN CẤP HUYỆN, gồm 124 đơn vị hành chính cấp xã (19 phường đô thị và 105 xã nông thôn). Diện tích tự nhiên 6.296,20 km², dân số 4.257.581 người.
  + QUY TẮC DÙNG TỪ ĐỊA PHƯƠNG (BẮT BUỘC):
    * TUYỆT ĐỐI CẤM dùng từ "huyện" (như huyện Tam Bình, huyện Trà Ôn, huyện Mang Thít, huyện Chợ Lách...). BẮT BUỘC chỉ gọi theo tên địa danh tự nhiên, tên vùng hoặc tên xã/phường (ví dụ: "tại xã Tam Bình", "vùng đất Tam Bình", "xã An Bình", "xã Bình Tân", "phường...", "cù lao An Bình", "xứ dừa", "vùng Duyên Hải"...).
    * TUYỆT ĐỐI CẤM thêm chữ "mới" vào tên tỉnh trong đề bài (ví dụ cấm viết "tỉnh Vĩnh Long mới", "thuộc tỉnh Vĩnh Long mới"). Trong câu hỏi chỉ viết tự nhiên, gần gũi: "tại Vĩnh Long", "ở Vĩnh Long" hoặc chỉ nêu tên địa danh.
  + Ưu tiên lồng ghép các bài toán/tình huống thực tế gắn liền với địa danh, nông sản và đời sống người dân Vĩnh Long:
    * Bài toán tính diện tích/chu vi: Vườn cây ăn trái cù lao An Bình, cù lao Lục Sỹ Thành, làng hoa Chợ Lách, vườn dừa, rừng ngập mặn Duyên Hải...
    * Bài toán về số & phép tính / giải toán có lời văn: Thu hoạch và sản lượng nông sản đặc sản (bưởi Năm Roi Bình Minh, cam sành Tam Bình, khoai lang tím Bình Tân, sầu riêng Chợ Lách, dừa xiêm, lúa gạo...).
    * Bài toán chuyển động / đo lường: Thuyền bè, phà lưu thông trên sông Tiền, sông Hậu, qua cầu Mỹ Thuận, phà Đình Khao...
    * Bảng thống kê / xử lý số liệu: Số liệu diện tích, sản lượng cây ăn trái hoặc số liệu 124 xã/phường của tỉnh Vĩnh Long.`;
        } else if (subjectId === "LICH_SU_DIA_LY" || subjectId === "LS_DL") {
          subjectLocalContext = `\n- YÊU CẦU ĐẶC BIỆT VỀ ĐỊNH VỊ ĐỊA PHƯƠNG VĨNH LONG (NQ 202/2025/QH15 & 124 XÃ/PHƯỜNG) MÔN LỊCH SỬ VÀ ĐỊA LÍ:
  + Căn cứ Nghị quyết 202/2025/QH15: Tỉnh Vĩnh Long vận hành mô hình 2 cấp, HOÀN TOÀN KHÔNG CÒN CẤP HUYỆN, gồm 124 đơn vị hành chính cấp xã (19 phường đô thị và 105 xã nông thôn). Diện tích 6.296,20 km², dân số 4.257.581 người.
  + QUY TẮC DÙNG TỪ (BẮT BUỘC): TUYỆT ĐỐI CẤM dùng từ "huyện", tuyệt đối không viết "tỉnh Vĩnh Long mới". Gọi tên theo xã, phường hoặc tên vùng đất, tên cù lao, tên địa danh.
  + Lồng ghép tự nhiên các kiến thức và câu hỏi gắn liền với Vĩnh Long:
    * Địa lí: Vị trí địa lí nằm giữa hai nhánh sông Tiền và sông Hậu, đất phù sa bồi đắp màu mỡ; mạng lưới sông ngòi, kênh rạch chằng chịt; các cù lao trù phú (cù lao An Bình, cù lao Lục Sỹ Thành, cồn Quới Thiện...); cấu trúc hành chính 124 xã/phường.
    * Lịch sử & Văn hóa: Vùng đất Long Hồ dinh xưa - trung tâm khai hoang và văn hóa Nam Bộ; di tích lịch sử - văn hóa (Văn Thánh Miếu Vĩnh Long, chùa Tiên Châu, di tích Cây Da Cửa Hữu); di sản văn hóa truyền thống (làng gốm đỏ Mang Thít - "vương quốc gốm đỏ").
    * Nhân vật lịch sử & danh nhân văn hóa kiệt xuất quê hương Vĩnh Long: Cố Thủ tướng Võ Văn Kiệt, Cố Chủ tịch Hội đồng Bộ trưởng Phạm Hùng, Giáo sư - Viện sĩ Trần Đại Nghĩa (nhà khoa học quân sự kiệt xuất), nhà bác học Phan Thanh Giản.`;
        } else if (subjectId === "KHOA_HOC") {
          subjectLocalContext = `\n- YÊU CẦU ĐẶC BIỆT VỀ ĐỊNH VỊ ĐỊA PHƯƠNG VĨNH LONG (NQ 202/2025/QH15) MÔN KHOA HỌC:
  + Căn cứ NQ 202/2025/QH15: Tỉnh Vĩnh Long vận hành 2 cấp (124 xã/phường, không còn cấp huyện). Cấm dùng từ "huyện", cấm viết "tỉnh Vĩnh Long mới".
  + Lồng ghép các tình huống khoa học thực tế gắn liền với tự nhiên và đời sống Vĩnh Long:
    * Thổ nhưỡng và cây trồng: Đặc điểm và vai trò của đất phù sa ngọt ven sông Tiền - sông Hậu đối với vườn cây ăn trái (cam sành Tam Bình, bưởi Năm Roi Bình Minh, sầu riêng Chợ Lách, dừa xiêm...).
    * Nguồn nước và môi trường: Tầm quan trọng của nguồn nước ngọt sông Tiền, sông Hậu; hiện tượng nước mặn xâm nhập vào mùa khô và các biện pháp tích trữ, bảo vệ nguồn nước ngọt sinh hoạt; hành động bảo vệ dòng sông quê hương khỏi rác thải và ô nhiễm.
    * Năng lượng và đời sống: Ứng dụng năng lượng mặt trời, năng lượng gió phục vụ tưới tiêu và đời sống gia đình ở vùng nông thôn Nam Bộ.`;
        } else if (subjectId === "CONG_NGHE") {
          subjectLocalContext = `\n- YÊU CẦU ĐẶC BIỆT VỀ ĐỊNH VỊ ĐỊA PHƯƠNG VĨNH LONG (NQ 202/2025/QH15) MÔN CÔNG NGHỆ:
  + Căn cứ NQ 202/2025/QH15: Tỉnh Vĩnh Long gồm 124 xã/phường, không còn cấp huyện. Cấm dùng từ "huyện", cấm viết "tỉnh Vĩnh Long mới".
  + Lồng ghép các tình huống thực tế công nghệ tại Vĩnh Long:
    * Công nghệ trồng trọt: Mô hình tưới nước nhỏ giọt tiết kiệm, nhà màng, nhà lưới tại các vườn hoa kiểng Chợ Lách, vườn ươm giống cây ăn trái; quy trình chăm sóc hoa kiểng, cây cảnh.
    * Làng nghề công nghệ truyền thống: Nghề sản xuất gạch gốm nung truyền thống Mang Thít; nghề đan đát thủ công mỹ nghệ từ cây lục bình; nghề tráng bánh tráng cù lao Mây.
    * An toàn công nghệ: Sử dụng thiết bị điện gia dụng (máy bơm nước, tủ lạnh, quạt điện) an toàn, tiết kiệm trong gia đình miền sông nước.`;
        } else if (subjectId === "TIN_HOC") {
          subjectLocalContext = `\n- YÊU CẦU ĐẶC BIỆT VỀ ĐỊNH VỊ ĐỊA PHƯƠNG VĨNH LONG MÔN TIN HỌC:
  + Căn cứ NQ 202/2025/QH15: 124 xã/phường, không còn cấp huyện. Cấm dùng từ "huyện".
  + Lồng ghép tình huống: Tra cứu và tìm kiếm thông tin trên Internet về 124 xã/phường, các di tích lịch sử và danh nhân quê hương Vĩnh Long; xử lý bảng tính thống kê diện tích, sản lượng cây ăn quả; quy tắc an toàn và văn hóa trên không gian mạng.`;
        } else {
          subjectLocalContext = `\n- YÊU CẦU BỐI CẢNH ĐỊA PHƯƠNG VĨNH LONG (NQ 202/2025/QH15):
  + Tỉnh Vĩnh Long gồm 124 xã/phường, không còn cấp huyện. Cấm dùng từ "huyện", cấm viết "tỉnh Vĩnh Long mới".
  + Lồng ghép tình huống yêu quê hương, kính trọng tiền nhân (bác Võ Văn Kiệt, bác Phạm Hùng, bác Trần Đại Nghĩa), bảo vệ môi trường dòng sông và xóm làng xanh - sạch - đẹp.`;
        }
      }

      // =========================================================================
      // MIỀN NỘI DUNG VÀ QUÁ TRÌNH NHẬN THỨC CHUẨN SEA-PLM TỪNG MÔN HỌC
      // =========================================================================
      // LẤY CẤU HÌNH CỨNG MA TRẬN CHUẨN 100% SGK KNTT THEO MÔN, KHỐI LỚP VÀ GIAI ĐOẠN KIỂM TRA
      var masterStrands = this.getMasterExamMatrixConfig(grade, subjectId, scope);

      var strandListText = masterStrands.map(function(s, idx) {
        return `   ${idx + 1}. "${s.topic}" (${s.desc})`;
      }).join('\n');

      var subjectContentDomainsGuideline = "";
      if (subjectId === "TOAN") {
        subjectContentDomainsGuideline = `
1. PHÂN BỔ 3 MẠCH KIẾN THỨC MÔN TOÁN TIỂU HỌC CHUẨN GDPT 2018 & THÔNG TƯ 27 (BẮT BUỘC 100%):
   Đề thi gồm ${mcqCount} câu trắc nghiệm và ${essayCount} câu tự luận BẮT BUỘC PHÂN BỔ ĐẦY ĐỦ CẢ 3 MẠCH KIẾN THỨC CỐT LÕI:
   - Mạch 1: "Số và phép tính" (chiếm ~50% tổng điểm: gồm ${mathMcqNum} câu TNKQ [từ Câu 1 đến Câu ${mathMcqNum}] và ${mathEssayNum} câu Tự luận).
     Kiến thức: ${masterStrands[0] ? masterStrands[0].desc : "Số tự nhiên, phân số, số thập phân; tỉ số phần trăm; 4 phép tính; tính giá trị biểu thức và giải toán có lời văn."}
   - Mạch 2: "Hình học và Đo lường" (chiếm ~35% - 40% tổng điểm: gồm ${mathMcqGeom} câu TNKQ [từ Câu ${mathMcqNum + 1} đến Câu ${mathMcqNum + mathMcqGeom}] và ${mathEssayGeom} câu Tự luận).
     Kiến thức: ${masterStrands[1] ? masterStrands[1].desc : "Hình phẳng, hình khối; chu vi, diện tích, thể tích; đơn vị đo, toán chuyển động đều."}
   - Mạch 3: "Một số yếu tố Thống kê và Xác suất" (chiếm ~10% - 15% tổng điểm: gồm ${mathMcqStat} câu TNKQ [từ Câu ${mathMcqNum + mathMcqGeom + 1} đến Câu ${mcqCount}]).
     Kiến thức: ${masterStrands[2] ? masterStrands[2].desc : "Thu thập, phân loại số liệu; đọc và phân tích biểu đồ hình quạt tròn, bảng số liệu; khả năng xảy ra của một sự kiện."}
   => NGUYÊN TẮC BẮT BUỘC CHO ĐỀ KIỂM TRA ĐỊNH KỲ:
      * Đề thi BẮT BUỘC PHẢI CÓ ĐỦ CẢ 3 MẠCH KIẾN THỨC TRÊN. TUYỆT ĐỐI KHÔNG ĐƯỢC CHỈ RA 1 MẠCH "Số và phép tính"!
      * Toàn bộ ${mcqCount} câu trắc nghiệm và ${essayCount} câu tự luận PHẢI ĐƯỢC PHÂN BỔ ĐÚNG THEO SỐ LƯỢNG TỪNG MẠCH KIẾN THỨC Ở TRÊN.
      * Trong mảng "multipleChoice" và "essaySection", mỗi câu hỏi PHẢI ghi rõ trường "metadata.contentDomain" đúng tên 1 trong 3 mạch: "Số và phép tính", "Hình học và Đo lường", hoặc "Một số yếu tố Thống kê và Xác suất".
      * Trong "matrix.topics", BẮT BUỘC KHAI BÁO ĐỦ CẢ 3 DÒNG TƯƠNG ỨNG VỚI 3 MẠCH KIẾN THỨC NÀY.

2. QUY TẮC BẮT BUỘC ĐA DẠNG HÓA CÂU HỎI MỞ ĐẦU & MỨC 1 (CHỐNG RẬP KHUÔN 100%):
   - TUYỆT ĐỐI CẤM lặp lại cùng một khuôn mẫu quen thuộc như "Số thập phân gồm... được viết là:" cho Câu 1.
   - BẮT BUỘC luân phiên đổi các dạng toán Mức 1 phong phú khác nhau cho Câu 1 và các câu nhận biết:
     + Dạng A (Giá trị của chữ số theo hàng): Ví dụ "Chữ số 7 trong số thập phân 24,578 có giá trị là bao nhiêu?", "Giá trị của chữ số 5 trong số thập phân 12,35 là:..."
     + Dạng B (Chuyển phân số thập phân thành số thập phân): Ví dụ "Phân số thập phân 8/100 (hoặc 345/10) được viết dưới dạng số thập phân là:..."
     + Dạng C (Số thập phân bằng nhau): Ví dụ "Số thập phân nào dưới đây bằng với số 3,5?", "Bỏ các chữ số 0 ở tận cùng bên phải phần thập phân của số 12,400 ta được số nào?"
     + Dạng D (Phần nguyên và phần thập phân / Hàng của chữ số): Ví dụ "Trong số thập phân 85,24; chữ số 2 thuộc hàng nào?", "Phần thập phân của số 34,567 là:..."
     + Dạng E (Chuyển đổi hỗn số sang phân số hoặc số thập phân): Với các số liệu phong phú, sáng tạo (không lặp lại hỗn số 3 và 2/5).
     + Dạng F (Đọc - viết số thập phân): Nếu dùng dạng đọc - viết, phải đổi cách đặt câu tự nhiên và số liệu sáng tạo.
   - Mỗi câu hỏi trong đề phải có số liệu mới mẻ, tự nhiên, bài toán thực tế sinh động, tuyệt đối không sao chép đề bài cũ.`;
      } else {
        subjectContentDomainsGuideline = `
1. CẤU HÌNH CỨNG CÁC CHỦ ĐỀ & MẠCH KIẾN THỨC CHUẨN 100% SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (BẮT BUỘC TUÂN THỦ TUYỆT ĐỐI):
   Đề kiểm tra ${termInfo.headerTitle} Lớp ${grade} môn ${subjectName} BẮT BUỘC PHẢI BAO QUÁT ĐẦY ĐỦ VÀ PHÂN BỔ CÂU HỎI VÀO CÁC CHỦ ĐỀ CỐT LÕI SAU:
${strandListText}
   => NGUYÊN TẮC BẮT BUỘC 100% (CHỐNG SUY LUẬN BỪA & CHỐNG BỎ SÓT CHỦ ĐỀ):
      * Đề thi BẮT BUỘC PHẢI CÓ CÂU HỎI CHO TẤT CẢ CÁC CHỦ ĐỀ TRÊN. TUYỆT ĐỐI CẤM BỎ SÓT BẤT KỲ CHỦ ĐỀ NÀO!
      * TUYỆT ĐỐI CẤM tự ý gom gộp tùy tiện (như gom nhiều chủ đề thành 1 chủ đề) hoặc đặt tên chủ đề sai lệch so với danh sách chuẩn ở trên.
      * Trong mảng "multipleChoice" và "essaySection", mỗi câu hỏi BẮT BUỘC PHẢI ghi rõ trường "metadata.contentDomain" CHÍNH XÁC là tên của 1 trong các chủ đề trên (ví dụ: "${masterStrands[0] ? masterStrands[0].topic.replace(/^(chủ đề|\d+[\s:.]*)\s*/i, '').trim() : 'Kiến thức cốt lõi'}").
      * Bảng ma trận "matrix.topics" BẮT BUỘC KHAI BÁO ĐỦ ${masterStrands.length} DÒNG tương ứng với ${masterStrands.length} chủ đề trên.

2. QUÁ TRÌNH NHẬN THỨC SEA-PLM:
   - "Biết (Knowing)": Nhận biết khái niệm, kiến thức cơ bản theo SGK.
   - "Áp dụng (Applying)": Vận dụng kiến thức giải thích hiện tượng, tình huống thực tế đời sống.
   - "Vận dụng / Lập luận (Reasoning/Evaluating)": Phân tích, đánh giá, đề xuất giải pháp thực tiễn thiết thực.`;
      }

      var mathFormattingRule = "";
      if (subjectId === "TOAN" || subjectId === "TIN_HOC") {
        mathFormattingRule = `
4. QUY ĐỊNH ĐỊNH DẠNG KÝ HIỆU TOÁN TIỂU HỌC (BẮT BUỘC - TUYỆT ĐỐI KHÔNG DÙNG MÃ LỆNH LATEX):
   - Phân số: BẮT BUỘC viết dạng dấu gạch chéo "a/b" (ví dụ: 3/4, 2/5, 17/20, 1/2). TUYỆT ĐỐI KHÔNG dùng mã LaTeX \\frac{a}{b} hoặc \\dfrac{a}{b}.
   - Đơn vị đo diện tích & thể tích: BẮT BUỘC dùng ký tự số mũ Unicode: m², cm², dm², mm², km², m³, cm³. TUYỆT ĐỐI KHÔNG viết m^2, cm^2, m^3.
   - Dấu phép tính: Dùng ký tự dấu nhân '×' (hoặc x) và dấu chia ':'. TUYỆT ĐỐI KHÔNG viết \\times hay \\div.
   - Ký hiệu so sánh & tập hợp: Dùng ký tự trực tiếp '≤', '≥', '∈', '≠'. TUYỆT ĐỐI KHÔNG viết mã lệnh \\le, \\ge, \\in, \\neq.
   - TUYỆT ĐỐI KHÔNG bọc công thức trong dấu $...$ hay $$...$$, không dùng \\text{}, \\mathrm{}, \\dots hay bất kỳ cú pháp mã LaTeX nào trong toàn bộ đề kiểm tra.`;
      }

      var qFormat = params.questionFormat || "auto";
      var formatInstruction = "";
      if (qFormat === "mcq_only") {
        formatInstruction = `- HÌNH THỨC CÂU HỎI TRẮC NGHIỆM: 100% câu trắc nghiệm 4 lựa chọn (MCQ A, B, C, D).`;
      } else if (qFormat === "diverse" || (qFormat === "auto" && (subjectId === "KHOA_HOC" || subjectId === "LICH_SU_DIA_LY" || subjectId === "LS_DL" || subjectId === "CONG_NGHE" || subjectId === "TIN_HOC"))) {
        formatInstruction = `- HÌNH THỨC CÂU HỎI TRẮC NGHIỆM (ĐA DẠNG HÓA CHUẨN THỰC TẾ TIỂU HỌC - BẮT BUỘC):
  + Đối với môn ${subjectName}: BẮT BUỘC phối hợp đa dạng 4 hình thức trắc nghiệm sau trong số ${mcqCount} câu trắc nghiệm:
    1. Trắc nghiệm 4 lựa chọn (type: "mcq", options: ["A. ...", "B. ...", "C. ...", "D. ..."], ans: "A"): Các câu hỏi kiểm tra kiến thức cốt lõi.
    2. Trắc nghiệm Đúng/Sai (type: "true_false", text: "Đúng ghi Đ, sai ghi S vào ô trống ☐:", items: [{ "text": "nhận định 1...", "ans": "Đ" }, { "text": "nhận định 2...", "ans": "S" }]).
    3. Trắc nghiệm Ghép đôi / Nối cột (type: "matching", text: "Ghép ý ở Cột A với Cột B cho phù hợp:", columnA: [{ "id": "1", "text": "..." }, { "id": "2", "text": "..." }, { "id": "3", "text": "..." }, { "id": "4", "text": "..." }], columnB: [{ "id": "A", "text": "..." }, { "id": "B", "text": "..." }, { "id": "C", "text": "..." }, { "id": "D", "text": "..." }], pairs: "1 - B; 2 - A; 3 - D; 4 - C"): Số lượng ý hai cột A và B BẮT BUỘC PHẢI BẰNG NHAU (4 nối 4).
    4. Trắc nghiệm Điền khuyết (type: "fill_blank", text: "Điền từ trong ngoặc đơn thích hợp vào chỗ chấm:", passage: "Đoạn văn có các chỗ chấm ……", wordBank: ["từ 1", "từ 2"], blanks: ["từ 1", "từ 2"]).`;
      } else {
        formatInstruction = `- HÌNH THỨC CÂU HỎI TRẮC NGHIỆM: Môn ${subjectName} chủ yếu dùng trắc nghiệm 4 lựa chọn (MCQ A, B, C, D), có thể kết hợp 1 câu Đúng/Sai hoặc trắc nghiệm điền số nếu phù hợp.`;
      }

      // Xây dựng matrixTopicsSchemaSample động 100% theo masterStrands
      var matrixTopicsSchemaSample = "";
      if (subjectId === "TOAN") {
        matrixTopicsSchemaSample = `[
      {
        "topic": "1. Số và phép tính",
        "desc": "${masterStrands[0] ? masterStrands[0].desc : 'Số tự nhiên, phân số, số thập phân; tỉ số phần trăm; 4 phép tính; tính giá trị biểu thức và giải toán có lời văn.'}",
        "m1_mcq": "Câu 1, 2",
        "m1_essay": "",
        "m2_mcq": "Câu 3",
        "m2_essay": "",
        "m3_mcq": "",
        "m3_essay": "${mathEssayNum > 0 ? 'Câu ' + essayCount + ' (TL)' : ''}",
        "total_mcq": ${mathMcqNum},
        "total_essay": ${mathEssayNum},
        "score": 5.0
      },
      {
        "topic": "2. Hình học và Đo lường",
        "desc": "${masterStrands[1] ? masterStrands[1].desc : 'Hình phẳng, hình khối; chu vi, diện tích, thể tích; đơn vị đo, toán chuyển động đều.'}",
        "m1_mcq": "Câu ${mathMcqNum + 1}",
        "m1_essay": "",
        "m2_mcq": "Câu ${mathMcqNum + 2}",
        "m2_essay": "Câu 1 (TL)",
        "m3_mcq": "",
        "m3_essay": "",
        "total_mcq": ${mathMcqGeom},
        "total_essay": ${mathEssayGeom},
        "score": 4.0
      },
      {
        "topic": "3. Một số yếu tố Thống kê và Xác suất",
        "desc": "${masterStrands[2] ? masterStrands[2].desc : 'Thu thập, phân loại số liệu; đọc và phân tích biểu đồ hình quạt tròn, bảng số liệu; khả năng xảy ra của một sự kiện.'}",
        "m1_mcq": "",
        "m1_essay": "",
        "m2_mcq": "Câu ${mcqCount}",
        "m2_essay": "",
        "m3_mcq": "",
        "m3_essay": "",
        "total_mcq": ${mathMcqStat},
        "total_essay": 0,
        "score": 1.0
      }
    ]`;
      } else {
        var defaultStrandCount = masterStrands.length || 3;
        var avgMcq = Math.max(1, Math.floor(mcqCount / defaultStrandCount));
        matrixTopicsSchemaSample = JSON.stringify(masterStrands.map(function(s, idx) {
          var isLast = idx === masterStrands.length - 1;
          var mcqsForStrand = isLast ? (mcqCount - avgMcq * (masterStrands.length - 1)) : avgMcq;
          var essaysForStrand = isLast ? essayCount : 0;
          var targetScore = parseFloat(((mcqsForStrand * (mcqPct / 10 / mcqCount)) + (essaysForStrand * (essayPct / 10 / (essayCount || 1)))).toFixed(1));
          return {
            topic: s.topic,
            desc: s.desc,
            m1_mcq: idx === 0 ? "Câu 1, 2" : "Câu ...",
            m1_essay: "",
            m2_mcq: idx === 0 ? "Câu 3" : "Câu ...",
            m2_essay: isLast ? "Câu 1 (TL)" : "",
            m3_mcq: "",
            m3_essay: isLast && essayCount > 1 ? "Câu 2 (TL)" : "",
            total_mcq: mcqsForStrand,
            total_essay: essaysForStrand,
            score: targetScore
          };
        }), null, 4);
      }

      prompt = `
Bạn là Chuyên gia Đánh giá Giáo dục Tiểu học và Sư phạm hàng đầu Việt Nam, nắm vững Khung đánh giá và Quy trình biên soạn câu hỏi của Chương trình Đánh giá kết quả học tập của học sinh Tiểu học khu vực Đông Nam Á (SEA-PLM), Chương trình GDPT 2018, Thông tư 27/2020/TT-BGDĐT và Bộ sách giáo khoa ${seriesName}.
Hãy soạn trọn bộ ĐỀ KIỂM TRA ĐỊNH KỲ TIỂU HỌC gồm MA TRẬN 3 MỨC ĐỘ, ĐỀ THI, HƯỚNG DẪN CHẤM CHI TIẾT VÀ BẢNG ĐẶC TẢ SIÊU DỮ LIỆU - MÃ HÓA CHUẨN SEA-PLM với các thông số sau:

- MÔN HỌC: ${subjectName}
- KHỐI LỚP: Lớp ${grade}
- BỘ SÁCH GIÁO KHOA: ${seriesName}
- KỲ KIỂM TRA: ${termInfo.term} (${termInfo.headerTitle})
- PHẠM VI RA ĐỀ: ${scope}
- THỜI GIAN LÀM BÀI: ${duration}
- CẤU TRÚC ĐỀ:
  + Số câu trắc nghiệm khách quan: ${mcqCount} câu (Tổng điểm phần Trắc nghiệm: ${(mcqPct / 10).toFixed(1)} điểm, chiếm ${mcqPct}%)
  + Số câu tự luận: ${essayCount} câu (Tổng điểm phần Tự luận: ${(essayPct / 10).toFixed(1)} điểm, chiếm ${essayPct}%)
  + Định hướng nội dung phần tự luận: ${essayGuide ? essayGuide : "Bám sát các mạch kiến thức và kỹ năng trọng tâm SGK " + seriesName}
- TỈ LỆ VÀ QUY ĐỊNH BẮT BUỘC MA TRẬN 3 MỨC ĐỘ NHẬN THỨC (THÔNG TƯ 27/2020/TT-BGDĐT):
  + Mức 1 (Nhận biết / Biết): ${m1Pct}% (BẮT BUỘC TỔNG ĐIỂM = ${(m1Pct / 10).toFixed(1)} ĐIỂM). Toàn bộ các câu hỏi Mức 1 phải ghi rõ 'level': 'Mức 1' và tổng điểm các câu Mức 1 PHẢI BẰNG ĐÚNG ${(m1Pct / 10).toFixed(1)} điểm.
  + Mức 2 (Thông hiểu / Áp dụng): ${m2Pct}% (BẮT BUỘC TỔNG ĐIỂM = ${(m2Pct / 10).toFixed(1)} ĐIỂM). Toàn bộ các câu hỏi Mức 2 phải ghi rõ 'level': 'Mức 2' và tổng điểm các câu Mức 2 PHẢI BẰNG ĐÚNG ${(m2Pct / 10).toFixed(1)} điểm.
  + Mức 3 (Vận dụng / Suy luận): ${m3Pct}% (BẮT BUỘC TỔNG ĐIỂM = ${(m3Pct / 10).toFixed(1)} ĐIỂM). Toàn bộ các câu hỏi Mức 3 phải ghi rõ 'level': 'Mức 3' và tổng điểm các câu Mức 3 PHẢI BẰNG ĐÚNG ${(m3Pct / 10).toFixed(1)} điểm.
  + BẮT BUỘC: Tổng điểm Mức 1 (${(m1Pct / 10).toFixed(1)}đ) + Mức 2 (${(m2Pct / 10).toFixed(1)}đ) + Mức 3 (${(m3Pct / 10).toFixed(1)}đ) = ĐÚNG 10,0 ĐIỂM. TUYỆT ĐỐI KHÔNG ĐƯỢC LỆCH DÙ CHỈ 0,5 ĐIỂM!
${formatInstruction}
${sgkContext}
${subjectLocalContext}
${customPrompt ? "- YÊU CẦU BỔ SUNG: " + customPrompt : ""}

### QUY TẮC RÀNG BUỘC PHÂN BỔ ĐIỂM SỐ & MIỀN NỘI DUNG CHUẨN SEA-PLM (BẮT BUỘC):
${subjectContentDomainsGuideline}

2. QUY ĐỊNH BẮT BUỘC VỀ THANG ĐIỂM TIỂU HỌC (CHẴN BỘI SỐ CỦA 0,25 - THANG ĐIỂM 0,25; 0,5; 0,75; 1,0; 1,5; 2,0; 2,5...):
   - ĐIỂM CỦA MỌI CÂU HỎI (TRẮC NGHIỆM VÀ TỰ LUẬN) BẮT BUỘC PHẢI LÀ BỘI SỐ CỦA 0,25:
     Chỉ được dùng các mức điểm sau: 0,25 điểm; 0,5 điểm; 0,75 điểm; 1,0 điểm; 1,25 điểm; 1,5 điểm; 1,75 điểm; 2,0 điểm; 2,25 điểm; 2,5 điểm; 2,75 điểm; 3,0 điểm...
   - TUYỆT ĐỐI CẤM các điểm số lẻ khác như 0,1; 0,2; 0,3; 0,4; 0,6; 0,7; 0,8; 0,9; 1,2; 1,4; 1,6; 1,8; 2,4...
   - Điểm mỗi câu trắc nghiệm thường là: 0,25đ; 0,5đ; 0,75đ hoặc 1,0đ.
   - Điểm mỗi câu tự luận (hoặc từng ý trong câu tự luận): 0,5đ; 0,75đ; 1,0đ; 1,25đ; 1,5đ; 2,0đ; 2,5đ; 3,0đ...
   - Tổng điểm toàn bộ ${mcqCount} câu trắc nghiệm PHẢI CHÍNH XÁC bằng ${(mcqPct / 10).toFixed(1).replace('.', ',')} điểm.
   - Tổng điểm toàn bộ ${essayCount} câu tự luận PHẢI CHÍNH XÁC bằng ${(essayPct / 10).toFixed(1).replace('.', ',')} điểm.
   - TỔNG ĐIỂM TOÀN BỘ ĐỀ THI BẮT BUỘC BẰNG ĐÚNG 10,0 ĐIỂM.

3. QUY TẮC TỰ GIẢI LẠI & ĐỐI CHIẾU CHÉO ĐÁP ÁN (SELF-VERIFICATION & CONSISTENCY - BẮT BUỘC):
   - Đối với MỖI câu hỏi trắc nghiệm: Bạn PHẢI tự giải chi tiết từng bước, tìm ra kết quả chính xác.
   - Sau khi có kết quả, đối chiếu với các phương án lựa chọn trong mảng "options". Xác định chính xác chữ cái tương ứng và gán vào trường "ans".
   - Trường "distractorRationale.correct" BẮT BUỘC mở đầu bằng: "Cơ sở phương án đúng [chữ cái]: ...", trong đó [chữ cái] PHẢI TRÙNG KHỚP 100% với giá trị của trường "ans".
   - TUYỆT ĐỐI CẤM trường hợp "ans" là một chữ cái (ví dụ C) nhưng trong "distractorRationale" lại viết phân tích cho chữ cái khác (ví dụ A).
${mathFormattingRule}

5. QUY ĐỊNH PHÁP LÝ HÀNH CHÍNH QUỐC GIA (ÁP DỤNG TRÊN TOÀN QUỐC TỪ 01/7/2025 - BẮT BUỘC):
   - Từ ngày 01/7/2025, TOÀN BỘ CÁC TỈNH/THÀNH PHỐ TRÊN CẢ NƯỚC CHÍNH THỨC BÃI BỎ CẤP HUYỆN (không còn quận, huyện, thị xã, thành phố thuộc tỉnh). Hệ thống chính quyền địa phương vận hành tinh gọn theo mô hình 2 cấp: Cấp Tỉnh / TP trực thuộc Trung ương -> Cấp Xã / Phường / Thị trấn.
   - Khi đặt các tình huống thực tế, bảng số liệu thống kê hoặc tình huống đời sống:
     + TUYỆT ĐỐI CẤM dùng các từ: "huyện", "quận", "thị xã", "cấp huyện" (Ví dụ: CẤM viết "huyện...", "quận...", "thị xã...").
     + BẮT BUỘC chỉ dùng cấp xã/phường/thị trấn hoặc gọi theo tên địa danh, vùng miền tự nhiên (Ví dụ: "tại xã Tam Bình, tỉnh Vĩnh Long", "tại phường Bến Nghé, TP. Hồ Chí Minh", "tại xã Hòa Lạc, TP. Hà Nội", "vùng đất Tam Bình", "xứ dừa", "miệt vườn sông nước"...).
     + TUYỆT ĐỐI CẤM thêm chữ "mới" sau tên tỉnh/thành phố (ví dụ cấm viết "tỉnh Vĩnh Long mới", "Hà Nội mới"...).

6. YÊU CẦU ĐỘC LẬP VÀ ĐA DẠNG HÓA GIỮA CÁC MÃ ĐỀ THI (CHỐNG TRÙNG LẶP & RẬP KHUÔN - BẮT BUỘC):
   - Đề thi này là một MÃ ĐỀ ĐỘC LẬP (Mã phiên ngẫu nhiên: VARIANT_${Date.now().toString(36).toUpperCase()}_${Math.floor(Math.random() * 9000 + 1000)}).
   - TUYỆT ĐỐI CẤM lặp lại các bài toán mẫu, các con số quen thuộc (như hỗn số 3 và 2/5, số thập phân gồm... được viết là...) hoặc sao chép nguyên xi cấu trúc câu chữ từ các đề thi khác.
   - BẮT BUỘC sáng tạo số liệu mới mẻ, tự nhiên, bài toán thực tế sinh động, phù hợp lứa tuổi học sinh tiểu học.

### CÁC NGUYÊN TẮC BIÊN SOẠN THEO CHUẨN SEA-PLM (BỘ GIÁO DỤC VÀ ĐÀO TẠO):
1. ĐẶT TRONG BỐI CẢNH CHÂN THỰC (AUTHENTIC CONTEXTS):
   - Mỗi câu hỏi BẮT BUỘC đặt trong 1 bối cảnh có ý nghĩa với học sinh: "Cá nhân (Personal)", "Môi trường xung quanh (Local community)", "Môi trường rộng hơn (Wider world)" hoặc "Bối cảnh môn học (Academic)".
   - Ngôn ngữ dùng trong phần dẫn và câu hỏi phải đơn giản, ngắn gọn, trong sáng, gắn liền với đời sống học sinh tiểu học.
2. TRỌNG TÂM ĐO LƯỜNG ĐƠN NHẤT (UNIDIMENSIONAL FOCUS): Mỗi câu hỏi chỉ tập trung đo lường một kỹ năng hoặc mục tiêu học tập cốt lõi cụ thể.
3. KỸ THUẬT CÂU HỎI TRẮC NGHIỆM (MCQ):
   - Đúng 4 phương án (A, B, C, D) và chỉ có 1 đáp án đúng duy nhất (hoặc đúng định dạng Đúng/Sai, Ghép đôi, Điền từ).
   - Các phương án nhiễu BẮT BUỘC dựa trên các lỗi tư duy hoặc nhầm lẫn thực tế của học sinh tiểu học (misconceptions).
   - BẮT BUỘC có trường "distractorRationale" phân tích cơ sở phương án đúng và nguyên nhân học sinh chọn nhầm từng phương án A, B, C, D.
4. KỸ THUẬT CÂU HỎI TỰ LUẬN (CONSTRUCTED RESPONSE): Lệnh hỏi rõ ràng, tường minh về nhiệm vụ học sinh cần thực hiện.
5. HƯỚNG DẪN MÃ HÓA (CODING GUIDE) THEO CHUẨN SEA-PLM:
   - "Mã 2": Mức tối đa (đối với câu 2 điểm) - Đầy đủ các bước giải/ý chính, lập luận chính xác và đáp số/kết luận đúng.
   - "Mã 1": Đạt một phần (đối với câu 2 điểm - làm đúng bước đầu nhưng thiếu bước sau) HOẶC Mức tối đa (đối với câu 1 điểm).
   - "Mã 0": Mức không đạt - Sai toàn bộ hoặc làm lạc đề.
   - "Mã 9": Bỏ trống không làm bài.
   - Bắt buộc cung cấp câu trả lời mẫu thực tế của học sinh ("sampleResponse") cho từng mã.
6. BẢNG MÔ TẢ SIÊU DỮ LIỆU CÂU HỎI (seaplmMetadataTable): Bảng tổng hợp toàn bộ câu hỏi trong đề kiểm tra: itemCode, context, contentDomain, cognitiveProcess, difficulty ("Dễ" | "Trung bình" | "Khó"), itemType, score, maxCode.
7. NGUYÊN TẮC BẮT BUỘC VỀ MA TRẬN & ĐỘ BAO QUÁT NỘI DUNG ĐỀ THI:
   - ĐỐI VỚI MÔN TOÁN: Đề kiểm tra định kỳ (đặc biệt là Giữa kì, Cuối kì, Cuối năm / Cả năm) BẮT BUỘC phải bao quát đầy đủ 3 mạch kiến thức của GDPT 2018: (1) Số và phép tính, (2) Hình học và Đo lường, (3) Một số yếu tố Thống kê và Xác suất.
     * BẮT BUỘC có câu hỏi thực tế trong đề cho cả 3 mạch này theo đúng tỉ lệ số câu đã hướng dẫn ở trên.
     * Bảng ma trận "matrix.topics" PHẢI KHAI BÁO ĐỦ CẢ 3 DÒNG tương ứng với 3 mạch này.
     * TUYỆT ĐỐI CẤM ra đề kiểm tra cuối năm / cả năm mà chỉ có duy nhất mạch "Số và phép tính" hoặc bỏ quên mạch "Hình học và Đo lường", "Thống kê và Xác suất".
   - Đối với các môn Khoa học, Lịch sử và Địa lí: Bắt buộc có đủ các chủ đề/phân môn chính tương ứng.

HÃY TRẢ VỀ DUY NHẤT MỘT ĐỐI TƯỢNG JSON HỢP LỆ (Không kèm markdown code block hoặc text ngoài JSON) có cấu trúc chuẩn như sau:
{
  "schoolName": "${schoolName}",
  "examTitle": "${termInfo.headerTitle} MÔN ${subjectName.toUpperCase()} LỚP ${grade}",
  "examTerm": "${termInfo.term}",
  "subjectName": "${subjectName}",
  "grade": ${grade},
  "duration": "${duration}",
  "schoolYear": "2026 - 2027",
  "bookSeries": "${seriesName}",
  "scopeDesc": "${scope}",
  "mcqTotalScore": ${(mcqPct / 10).toFixed(1)},
  "essayTotalScore": ${(essayPct / 10).toFixed(1)},
  "matrix": {
    "topics": ${matrixTopicsSchemaSample},
    "summary": {
      "m1_total_mcq": 3,
      "m1_total_essay": 0,
      "m1_score": ${(m1Pct / 10).toFixed(1)},
      "m2_total_mcq": 3,
      "m2_total_essay": 1,
      "m2_score": ${(m2Pct / 10).toFixed(1)},
      "m3_total_mcq": 0,
      "m3_total_essay": 1,
      "m3_score": ${(m3Pct / 10).toFixed(1)},
      "total_mcq_count": ${mcqCount},
      "total_essay_count": ${essayCount},
      "total_score": 10.0,
      "m1_pct": ${m1Pct},
      "m2_pct": ${m2Pct},
      "m3_pct": ${m3Pct}
    }
  },
  "multipleChoice": [
    {
      "num": 1,
      "itemCode": "${subjectId.substring(0, 4)}_${grade}_MCQ_01",
      "level": "Mức 1",
      "score": 0.5,
      "metadata": {
        "context": "Cá nhân (Personal)",
        "contentDomain": "${masterStrands[0] ? masterStrands[0].topic.replace(/^(chủ đề|\d+[\s:.]*)\s*/i, '').trim() : (subjectId === 'TOAN' ? 'Số và phép tính' : 'Kiến thức trọng tâm')}",
        "cognitiveProcess": "Biết (Knowing)",
        "difficulty": "Dễ",
        "itemType": "Trắc nghiệm 4 lựa chọn (MCQ)"
      },
      "text": "Nội dung câu hỏi trắc nghiệm số 1 gắn với bối cảnh thực tế...",
      "options": ["A. Lựa chọn A", "B. Lựa chọn B", "C. Lựa chọn C", "D. Lựa chọn D"],
      "ans": "A",
      "explain": "Giải thích chi tiết vì sao chọn A...",
      "distractorRationale": {
        "correct": "Cơ sở phương án đúng A: Lập luận và cách tính chuẩn xác.",
        "distractorA": "Nếu A đúng: Phương án chính xác.",
        "distractorB": "Lý do học sinh chọn B: Nhầm lẫn kiến thức hoặc tính nhầm.",
        "distractorC": "Lý do học sinh chọn C: Nhầm lẫn khái niệm tương tự.",
        "distractorD": "Lý do học sinh chọn D: Đọc lướt hoặc nhầm chi tiết."
      }
    }${subjectId === 'TOAN' ? `,
    {
      "num": ${mathMcqNum + 1},
      "itemCode": "TOAN_${grade}_MCQ_${String(mathMcqNum + 1).padStart(2, '0')}",
      "level": "Mức 2",
      "score": 0.5,
      "metadata": {
        "context": "Môi trường xung quanh (Local community)",
        "contentDomain": "Hình học và Đo lường",
        "cognitiveProcess": "Áp dụng (Applying)",
        "difficulty": "Trung bình",
        "itemType": "Trắc nghiệm 4 lựa chọn (MCQ)"
      },
      "text": "Câu hỏi trắc nghiệm về hình học (tam giác, thang, tròn, hình khối...) hoặc đo lường, chuyển động...",
      "options": ["A. Lựa chọn A", "B. Lựa chọn B", "C. Lựa chọn C", "D. Lựa chọn D"],
      "ans": "B",
      "explain": "Giải thích cách tính hình học/đo lường...",
      "distractorRationale": { "correct": "Cơ sở phương án đúng B: ...", "distractorA": "...", "distractorB": "...", "distractorC": "...", "distractorD": "..." }
    },
    {
      "num": ${mcqCount},
      "itemCode": "TOAN_${grade}_MCQ_${String(mcqCount).padStart(2, '0')}",
      "level": "Mức 2",
      "score": 0.5,
      "metadata": {
        "context": "Môi trường rộng hơn (Wider world)",
        "contentDomain": "Một số yếu tố Thống kê và Xác suất",
        "cognitiveProcess": "Áp dụng (Applying)",
        "difficulty": "Trung bình",
        "itemType": "Trắc nghiệm 4 lựa chọn (MCQ)"
      },
      "text": "Câu hỏi trắc nghiệm về đọc biểu đồ hình quạt tròn, bảng số liệu hoặc xác suất sự kiện...",
      "options": ["A. Lựa chọn A", "B. Lựa chọn B", "C. Lựa chọn C", "D. Lựa chọn D"],
      "ans": "C",
      "explain": "Giải thích cách đọc bảng/biểu đồ...",
      "distractorRationale": { "correct": "Cơ sở phương án đúng C: ...", "distractorA": "...", "distractorB": "...", "distractorC": "...", "distractorD": "..." }
    }` : ''}
  ],
  "essaySection": [
    {
      "num": 1,
      "itemCode": "${subjectId.substring(0, 4)}_${grade}_CR_01",
      "level": "Mức 2",
      "score": ${(essayCount > 1 ? 1.5 : (essayPct / 10)).toFixed(1)},
      "metadata": {
        "context": "Môi trường xung quanh (Local community)",
        "contentDomain": "${masterStrands.length > 1 ? masterStrands[masterStrands.length - 1].topic.replace(/^(chủ đề|\d+[\s:.]*)\s*/i, '').trim() : (subjectId === 'TOAN' ? 'Hình học và Đo lường' : 'Vận dụng kiến thức môn ' + subjectName)}",
        "cognitiveProcess": "Áp dụng (Applying)",
        "difficulty": "Trung bình",
        "itemType": "Tự luận / Trả lời ngắn"
      },
      "title": "Câu 1 (${(essayCount > 1 ? 1.5 : (essayPct / 10)).toFixed(1).replace('.', ',')} điểm - Mức 2):",
      "text": "${subjectId === 'TOAN' ? 'Bài toán tự luận về Hình học (chu vi, diện tích hình phẳng hoặc thể tích hình khối) hoặc Đo lường / chuyển động đều...' : 'Nội dung bài toán / câu hỏi tự luận gắn với bối cảnh chân thực...'}",
      "solution": "Lời giải chi tiết và đáp số...",
      "rubric": [
        { "step": "Ý 1 / Phép tính 1 và câu lời giải thứ nhất...", "score": "${(essayCount > 1 ? 0.75 : 0.5).toString().replace('.', ',')}đ" },
        { "step": "Ý 2 / Phép tính 2 và đáp số đúng...", "score": "${(essayCount > 1 ? 0.75 : 0.5).toString().replace('.', ',')}đ" }
      ],
      "codingGuide": {
        "maxCode": "Mã 2",
        "codes": [
          { "code": "Mã 2", "description": "Mức tối đa: Trình bày đầy đủ lời giải, phép tính và đáp số chính xác.", "sampleResponse": "Bài giải hoàn chỉnh..." },
          { "code": "Mã 1", "description": "Mức chưa tối đa: Tính đúng phép tính thứ nhất nhưng tính sai phép tính thứ hai hoặc sai đơn vị.", "sampleResponse": "Bài giải làm được 1 phần..." },
          { "code": "Mã 0", "description": "Mức không đạt: Tính sai toàn bộ hoặc giải lạc đề.", "sampleResponse": "Chỉ ghi một phép tính vô nghĩa hoặc tính sai hoàn toàn..." },
          { "code": "Mã 9", "description": "Bỏ trống không làm bài.", "sampleResponse": "[Để trống]" }
        ]
      }
    }${subjectId === 'TOAN' && essayCount > 1 ? `,
    {
      "num": 2,
      "itemCode": "TOAN_${grade}_CR_02",
      "level": "Mức 3",
      "score": ${(essayPct / 10 - 1.5).toFixed(1)},
      "metadata": {
        "context": "Cá nhân (Personal)",
        "contentDomain": "Số và phép tính",
        "cognitiveProcess": "Suy luận (Reasoning)",
        "difficulty": "Khó",
        "itemType": "Tự luận / Trả lời ngắn"
      },
      "title": "Câu 2 (${(essayPct / 10 - 1.5).toFixed(1).replace('.', ',')} điểm - Mức 3):",
      "text": "Bài toán vận dụng giải toán có lời văn về tỉ số phần trăm, các phép tính hoặc bài toán suy luận thực tế...",
      "solution": "Lời giải chi tiết và đáp số...",
      "rubric": [
        { "step": "Bước giải 1...", "score": "0,75đ" },
        { "step": "Bước giải 2 và đáp số...", "score": "0,75đ" }
      ],
      "codingGuide": {
        "maxCode": "Mã 2",
        "codes": [
          { "code": "Mã 2", "description": "Mức tối đa...", "sampleResponse": "..." },
          { "code": "Mã 1", "description": "Mức chưa tối đa...", "sampleResponse": "..." },
          { "code": "Mã 0", "description": "Mức không đạt...", "sampleResponse": "..." },
          { "code": "Mã 9", "description": "Bỏ trống...", "sampleResponse": "[Để trống]" }
        ]
      }
    }` : ''}
  ],
  "seaplmMetadataTable": [
    {
      "itemCode": "${subjectId.substring(0, 4)}_${grade}_MCQ_01",
      "order": 1,
      "context": "Cá nhân (Personal)",
      "contentDomain": "${masterStrands[0] ? masterStrands[0].topic.replace(/^(chủ đề|\d+[\s:.]*)\s*/i, '').trim() : (subjectId === 'TOAN' ? 'Số và phép tính' : 'Kiến thức cốt lõi')}",
      "cognitiveProcess": "Biết (Knowing)",
      "difficulty": "Dễ",
      "itemType": "Trắc nghiệm 4 lựa chọn (MCQ)",
      "score": 0.5,
      "maxCode": "Mã 1"
    }${subjectId === 'TOAN' ? `,
    {
      "itemCode": "TOAN_${grade}_MCQ_${String(mathMcqNum + 1).padStart(2, '0')}",
      "order": ${mathMcqNum + 1},
      "context": "Môi trường xung quanh (Local community)",
      "contentDomain": "Hình học và Đo lường",
      "cognitiveProcess": "Áp dụng (Applying)",
      "difficulty": "Trung bình",
      "itemType": "Trắc nghiệm 4 lựa chọn (MCQ)",
      "score": 0.5,
      "maxCode": "Mã 1"
    },
    {
      "itemCode": "TOAN_${grade}_MCQ_${String(mcqCount).padStart(2, '0')}",
      "order": ${mcqCount},
      "context": "Môi trường rộng hơn (Wider world)",
      "contentDomain": "Một số yếu tố Thống kê và Xác suất",
      "cognitiveProcess": "Áp dụng (Applying)",
      "difficulty": "Trung bình",
      "itemType": "Trắc nghiệm 4 lựa chọn (MCQ)",
      "score": 0.5,
      "maxCode": "Mã 1"
    }` : ''}
  ]
}
`;
    }

    // Gọi Gemini API model mới nhất (Tự động chuyển đổi thông minh, ưu tiên thế hệ mới hạn mức cao)
    var models = ["gemini-flash-lite-latest", "gemini-3.5-flash-lite", "gemini-3.1-flash-lite", "gemini-3.6-flash", "gemini-2.5-flash", "gemini-flash-latest"];
    var lastError = null;

    for (var m = 0; m < models.length; m++) {
      var modelName = models[m];
      try {
        var genConfig = {
          responseMimeType: "application/json",
          temperature: 0.55
        };
        // Tắt thinking budget ở gemini-2.5-flash để tốc độ sinh JSON siêu tốc (1-2 giây)
        if (modelName.indexOf("2.5") !== -1) {
          genConfig.thinkingConfig = { thinkingBudget: 0 };
        }

        var controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
        var timeoutId = controller ? setTimeout(function() { controller.abort(); }, 45000) : null;
        var fetchOpts = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: genConfig
          })
        };
        if (controller) fetchOpts.signal = controller.signal;

        var response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`, fetchOpts);
        if (timeoutId) clearTimeout(timeoutId);

        if (response.ok) {
          var data = await response.json();
          var rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
          if (rawText) {
            var parsed = this.parseJsonSafely(rawText);
            if (parsed) {
              parsed.source = "ai";
              parsed.sourceName = "Google Gemini AI (Online)";
              parsed.modelName = modelName;
              parsed.subjectId = params.subjectId || "TOAN";
              parsed.grade = parseInt(params.grade) || parsed.grade || 5;
              parsed.level1Percent = parseInt(params.level1Percent) || 40;
              parsed.level2Percent = parseInt(params.level2Percent) || 40;
              parsed.level3Percent = parseInt(params.level3Percent) || 20;
              parsed.mcqPercent = parseInt(params.mcqPercent) || 70;
              parsed.essayPercent = parseInt(params.essayPercent) || 30;
              parsed.mcqCount = parseInt(params.mcqCount) || 8;
              parsed.essayCount = parseInt(params.essayCount) || 2;
              parsed.bookSeries = params.bookSeries || parsed.bookSeries || 'ctst';
              parsed.modelName = modelName;
              return parsed;
            }
          }
        } else {
          var errJson = await response.json().catch(function(){ return {}; });
          lastError = errJson.error?.message || response.statusText;
          // Nếu API key sai, ngắt luôn không thử model khác
          if (response.status === 400 && lastError && (lastError.includes("API key not valid") || lastError.includes("API_KEY_INVALID"))) {
            throw new Error(lastError);
          }
        }
      } catch (e) {
        lastError = e.message;
        if (lastError && (lastError.includes("API key not valid") || lastError.includes("API_KEY_INVALID"))) {
          throw e;
        }
      }
    }

    throw new Error(lastError || "Không thể kết nối với máy chủ Google Gemini API.");
  },

  /**
   * Gọi Gemini API trực tiếp với bất kỳ prompt nào (Hỗ trợ AI Tích hợp Giáo án, phân tích văn bản...)
   */
  callGeminiApi: async function(apiKey, prompt, options) {
    var opt = options || {};
    var models = ["gemini-flash-lite-latest", "gemini-3.5-flash-lite", "gemini-3.6-flash", "gemini-2.5-flash"];
    var lastError = null;

    for (var m = 0; m < models.length; m++) {
      var modelName = models[m];
      try {
        var genConfig = {
          temperature: typeof opt.temperature === 'number' ? opt.temperature : 0.3
        };
        if (opt.maxTokens) genConfig.maxOutputTokens = opt.maxTokens;
        if (opt.responseMimeType) genConfig.responseMimeType = opt.responseMimeType;
        if (modelName.indexOf("2.5") !== -1) {
          genConfig.thinkingConfig = { thinkingBudget: 0 };
        }

        var controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
        var timeoutId = controller ? setTimeout(function() { controller.abort(); }, 8000) : null;
        var fetchOpts = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: genConfig
          })
        };
        if (controller) fetchOpts.signal = controller.signal;

        var response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`, fetchOpts);
        if (timeoutId) clearTimeout(timeoutId);

        if (response.ok) {
          var data = await response.json();
          var rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
          if (rawText) return rawText;
        } else {
          var errJson = await response.json().catch(function(){ return {}; });
          lastError = errJson.error?.message || response.statusText;
        }
      } catch (e) {
        if (timeoutId) clearTimeout(timeoutId);
        lastError = (e.name === 'AbortError') ? 'Quá thời gian kết nối AI (30s)' : e.message;
      }
    }

    throw new Error(lastError || "Không thể kết nối Gemini API");
  },

  /**
   * Bóc tách và phân tích JSON linh hoạt, chống lỗi định dạng chuỗi từ AI
   */
  parseJsonSafely: function(text) {
    if (!text) return null;
    var t = text.trim();
    try {
      return JSON.parse(t);
    } catch (e) {}

    // Bóc tách khối markdown ```json ... ```
    var match = t.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
    if (match && match[1]) {
      try {
        return JSON.parse(match[1].trim());
      } catch (e) {}
    }

    // Tìm dấu ngoặc nhọn đầu và cuối (Object)
    var startObj = t.indexOf("{");
    var endObj = t.lastIndexOf("}");
    if (startObj !== -1 && endObj > startObj) {
      try {
        return JSON.parse(t.substring(startObj, endObj + 1));
      } catch (e) {}
    }

    // Tìm dấu ngoặc vuông đầu và cuối (Array)
    var startArr = t.indexOf("[");
    var endArr = t.lastIndexOf("]");
    if (startArr !== -1 && endArr > startArr) {
      try {
        return JSON.parse(t.substring(startArr, endArr + 1));
      } catch (e) {}
    }

    return null;
  },

  /**
   * Lấy tên hiển thị tiếng Việt của dạng tật
   */
  getDisabilityTypeName: function(typeKey) {
    var map = {
      'tri_tue': 'Khuyết tật trí tuệ (Tiếp thu chậm, ghi nhớ ngắn hạn)',
      'van_dong': 'Khuyết tật vận động (Hạn chế viết, thao tác)',
      'nghe_noi': 'Khuyết tật nghe - nói (Giao tiếp hạn chế)',
      'khiem_thinh': 'Khuyết tật nghe - nói (Khiếm thính)',
      'nhin': 'Khuyết tật nhìn (Thị lực kém, cần cỡ chữ lớn)',
      'khiem_thi': 'Khuyết tật nhìn (Khiếm thị)',
      'tu_ky': 'Rối loạn phổ tự kỉ (Tương tác hạn chế)',
      'hoc_tap': 'Khó khăn học tập đặc thù',
      'khac': 'Khuyết tật khác / Học sinh hòa nhập chung'
    };
    return map[typeKey] || 'Khuyết tật học tập';
  },

  /**
   * Hướng dẫn sư phạm phân hóa riêng cho từng dạng tật theo Thông tư 03/2018/TT-BGDĐT và CV 2345
   */
  getDisabilityGuidance: function(disabilityType, rate, notes) {
    var type = disabilityType || 'tri_tue';
    var r = parseInt(rate, 10) || 50;
    var guide = '';

    // Phân mức nhận thức / đáp ứng theo tỉ lệ % (từ 30% đến 70%+)
    var levelDescription = '';
    if (r <= 40) {
      levelDescription = `MỨC ĐỘ ĐÁP ỨNG: Khoảng ${r}% (Hạn chế nhiều / Mức độ nặng)
  + Nguyên tắc giảm tải: Tinh giản tối đa; tập trung vào tri giác trực quan trực tiếp, nhận biết tối thiểu (chỉ tranh, gọi tên, đếm các số nhỏ) và làm quen với sự trợ giúp trực tiếp (cầm tay chỉ việc) của giáo viên hoặc đồ dùng trực quan cỡ lớn.
  + Định lượng bài tập: Chỉ yêu cầu hoàn thành 1 câu hoặc 1 ý nhận biết cơ bản nhất của Bài 1; miễn hoàn toàn các bài giải toán, tính toán phức tạp hay đọc viết dài.`;
    } else if (r >= 65) {
      levelDescription = `MỨC ĐỘ ĐÁP ỨNG: Khoảng ${r}% (Mức độ nhẹ / Tiếp thu khá)
  + Nguyên tắc phân hóa: Học sinh nắm được kiến thức cốt lõi (chuẩn Bloom mức 1 và một phần mức 2); tự thực hiện bài tập nhận biết và bước đầu thông hiểu cơ bản với sự gợi ý của bạn học.
  + Định lượng bài tập: Hoàn thành khoảng ${r}% khối lượng bài tập cơ bản trong SGK (làm trọn vẹn Bài 1, Bài 2 dạng cơ bản và 1 câu đơn giản của bài toán 1 bước tính); rèn luyện tính tự giác, tự chủ.`;
    } else {
      levelDescription = `MỨC ĐỘ ĐÁP ỨNG: Khoảng ${r}% (Mức độ trung bình - Phổ biến nhất trong giáo dục hòa nhập)
  + Nguyên tắc giảm tải: Hạ bậc chuẩn nhận thức từ thông hiểu, vận dụng xuống mức NHẬN BIẾT CƠ BẢN và LÀM THEO MẪU (Bloom mức 1) với đồ dùng trực quan và bạn kèm cặp.
  + Định lượng bài tập: Hoàn thành khoảng ${r}% khối lượng bài tập nhận biết cơ bản trong SGK (Bài 1 hoặc Bài 2 dạng cơ bản theo mẫu); miễn các bài toán giải có lời văn 2-3 bước, tính thuận tiện hay nâng cao.`;
    }

    if (type === 'van_dong') {
      guide = `DẠNG TẬT: Khuyết tật vận động (Hạn chế vận động tay chân, khó cầm bút viết/vẽ hoặc thao tác thực hành)
- ${levelDescription}
- NGUYÊN TẮC SƯ PHẠM ĐẶC BIỆT: Khả năng nhận thức, tư duy và trí tuệ của học sinh HOÀN TOÀN BÌNH THƯỜNG. TUYỆT ĐỐI KHÔNG hạ thấp yêu cầu tư duy của bài học.
- ĐIỀU CHỈNH PHƯƠNG THỨC THỰC HIỆN & THỜI GIAN:
  + Cho phép học sinh trả lời miệng, chỉ bảng phụ, chọn thẻ chữ/thẻ số thay vì phải viết đoạn văn dài hay vẽ hình, kẻ bảng phức tạp.
  + Giảm bớt khối lượng viết vẽ tương ứng mức độ vận động ${r}%; gia hạn thêm thời gian làm bài; phần viết chỉ yêu cầu hoàn thành câu ngắn hoặc từ khóa.
  + Trong các hoạt động thực hành, thí nghiệm (Toán, Khoa học, Mỹ thuật, Thủ công): Học sinh tham gia cùng nhóm bạn; bạn cùng nhóm hỗ trợ các thao tác cầm nắm, vận động; học sinh thực hiện phần việc tư duy, quan sát, trả lời hoặc thao tác vừa sức.
- YÊU CẦU 2 Ý BẮT BUỘC:
  - Năng lực đặc thù: Đạt chuẩn kiến thức của bài học; điều chỉnh phương thức làm bài (trả lời miệng, chọn thẻ, giảm khối lượng viết/thao tác phù hợp mức vận động ${r}%).
  - Phẩm chất, năng lực chung: Rèn luyện nghị lực vượt khó, tự tin thể hiện suy nghĩ và tích cực phối hợp cùng bạn bè trong nhóm.`;
    } else if (type === 'nghe_noi' || type === 'khiem_thinh') {
      guide = `DẠNG TẬT: Khuyết tật nghe - nói (Khiếm thính, khó phát âm, hạn chế giao tiếp bằng lời)
- ${levelDescription}
- NGUYÊN TẮC SƯ PHẠM: Tối ưu hóa kênh thị giác trực quan (hình ảnh, sơ đồ, thẻ chữ/số in sẵn, khẩu hình, cử chỉ).
- ĐIỀU CHỈNH PHƯƠNG THỨC:
  + Cho phép học sinh thể hiện sự hiểu bài bằng hành động: chỉ vào tranh, ghép/nối thẻ từ, viết hoặc vẽ câu trả lời ra bảng con/phiếu học tập, chọn đáp án trực quan thay vì bắt buộc phát biểu hoặc đọc to trước lớp.
  + Với môn Tiếng Việt: Tập trung vào đọc hiểu qua tranh, nhìn chép từ ngữ trên phiếu; với môn Toán: thao tác trực quan trên thẻ số, bảng gài.
- YÊU CẦU 2 Ý BẮT BUỘC:
  - Năng lực đặc thù: Tiếp thu kiến thức qua kênh thị giác trực quan; thể hiện kết quả học tập bằng hành động chỉ tranh, viết bảng con hoặc chọn thẻ đáp án theo mức độ tiếp nhận ${r}%.
  - Phẩm chất, năng lực chung: Tự tin giao tiếp qua cử chỉ/bảng con, cởi mở hòa nhập và kiên nhẫn hợp tác cùng bạn học.`;
    } else if (type === 'nhin' || type === 'khiem_thi') {
      guide = `DẠNG TẬT: Khuyết tật nhìn (Thị lực kém, nhìn mờ, cần cỡ chữ lớn hoặc khiếm thị)
- ${levelDescription}
- NGUYÊN TẮC SƯ PHẠM: Tối ưu hóa kênh thính giác (lắng nghe cô giáo và bạn đọc mẫu) và xúc giác (sờ chạm vật thật, mô hình nổi, que tính).
- ĐIỀU CHỈNH PHƯƠNG THỨC:
  + Sử dụng phiếu học tập in chữ to, hình ảnh phóng to có độ tương phản cao; ngồi ở vị trí đủ ánh sáng và gần bảng.
  + Cho phép học sinh tiếp thu và trả lời qua lời nói, mô tả bằng lời thay vì yêu cầu quan sát chi tiết nhỏ trên tranh; không chấm lỗi trình bày chữ viết/hình vẽ.
- YÊU CẦU 2 Ý BẮT BUỘC:
  - Năng lực đặc thù: Tiếp thu bài học qua lời giảng và mô tả của GV/bạn kèm; thao tác trên vật thật, đồ dùng học tập kích thước lớn; trả lời miệng hoặc ghi bảng với chữ số cỡ to theo mức thị lực ${r}%.
  - Phẩm chất, năng lực chung: Chăm chú lắng nghe, chủ động giao tiếp bằng lời nói và mạnh dạn hợp tác cùng bạn học.`;
    } else if (type === 'tu_ki' || type === 'tu_ky') {
      guide = `DẠNG TẬT: Rối loạn phổ tự kỉ / Tăng động giảm chú ý (ADHD) (Hạn chế tương tác xã hội, nhạy cảm môi trường, dễ mất tập trung)
- ${levelDescription}
- NGUYÊN TẮC SƯ PHẠM: Tạo không gian học tập ổn định, chia nhỏ nhiệm vụ thành từng bước rõ ràng kèm hình ảnh trực quan (Visual schedule).
- ĐIỀU CHỈNH PHƯƠNG THỨC:
  + Cho phép học sinh hoàn thành nhiệm vụ cá nhân vừa sức, khích lệ từng tiến bộ nhỏ, tránh tạo áp lực biểu đạt trước đám đông.
  + Khi học sinh mất tập trung hoặc quá tải, cho phép nghỉ ngắn hoặc đổi sang thao tác với đồ dùng học tập trực quan.
- YÊU CẦU 2 Ý BẮT BUỘC:
  - Năng lực đặc thù: Tiếp nhận nhiệm vụ học tập qua hướng dẫn từng bước kèm hình ảnh trực quan; hoàn thành nhiệm vụ cá nhân vừa sức theo mức đáp ứng ${r}% (nhận biết và làm 1-2 bài tập cơ bản), không gây áp lực biểu đạt trước lớp.
  - Phẩm chất, năng lực chung: Giữ tâm lý vui vẻ, ổn định cảm xúc, từng bước làm quen và hòa nhập cùng bạn cùng bàn.`;
    } else if (type === 'khac' || type === 'hoc_tap') {
      guide = `DẠNG TẬT: Khó khăn học tập đặc thù / Khuyết tật khác / Học sinh hòa nhập chung
- ${levelDescription}
- NGUYÊN TẮC SƯ PHẠM: Tạo điều kiện hòa nhập tích cực, phân công nhiệm vụ vừa sức theo sở trường của học sinh; có bạn cùng bàn hỗ trợ (mô hình đôi bạn cùng tiến).
- ĐIỀU CHỈNH PHƯƠNG THỨC: Giao bài tập ở mức độ nhận biết và thực hành cơ bản; tinh giản các bài tập suy luận trừu tượng hoặc yêu cầu tốc độ nhanh.
- YÊU CẦU 2 Ý BẮT BUỘC:
  - Năng lực đặc thù: Nắm được kiến thức cốt lõi của bài học; hoàn thành khoảng ${r}% khối lượng bài tập nhận biết cơ bản với sự hỗ trợ của đồ dùng trực quan hoặc bạn học; giảm tải các bài suy luận phức tạp.
  - Phẩm chất, năng lực chung: Tự tin, không nản lòng, có ý thức hoàn thành bài tập vừa sức và hòa nhập cùng tập thể lớp.`;
    } else {
      // tri_tue
      guide = `DẠNG TẬT: Khuyết tật trí tuệ (Tiếp thu chậm, ghi nhớ ngắn hạn)
- ${levelDescription}
- NGUYÊN TẮC ĐỊNH LƯỢNG & GIẢM TẢI ${r}% THEO CHUẨN CV 2345:
  + Hạ bậc chuẩn nhận thức: Chuyển đổi từ mức độ thông hiểu, vận dụng, suy luận trừu tượng sang mức độ NHẬN BIẾT CƠ BẢN, THAO TÁC TRỰC QUAN và LÀM THEO MẪU với sự trợ giúp của giáo viên, bạn học hoặc đồ dùng học tập trực quan.
  + Giới hạn phạm vi kiến thức & bài tập cụ thể: Chỉ yêu cầu học sinh làm quen với các số nhỏ, phép tính đơn giản; hoàn thành khoảng ${r}% khối lượng bài tập nhận biết cơ bản trong SGK (chỉ định rõ Bài 1 hoặc Bài 2 dạng cơ bản theo mẫu).
  + Nêu rõ phần giảm tải: Tuyên bố rõ ràng KHÔNG bắt buộc học sinh phải làm các bài toán giải có lời văn nhiều bước tính, bài tính thuận tiện/tính nhanh hay các bài tập nâng cao.
- BÁM SÁT ĐẶC THÙ BỘ MÔN:
  + Môn Toán: Giới hạn rõ phạm vi số (số có 3-4 chữ số / số tròn trăm, tròn nghìn); phép tính đơn giản (không nhớ hoặc nhớ 1 lần trong phạm vi nhỏ); phân số cơ bản (phân số cùng mẫu số / phân số thập phân có mẫu 10, 100); chỉ định rõ hoàn thành khoảng ${r}% bài tập nhận biết ở Bài 1 hoặc Bài 2; không yêu cầu giải toán có lời văn 2-3 bước hay tính thuận tiện.
  + Môn Tiếng Việt: Đọc trơn tên bài và 1-2 câu ngắn nhất; trả lời câu hỏi nhận biết trực quan trực tiếp; nhìn chép từ ngữ hoặc câu ngắn trên phiếu; không yêu cầu viết đoạn văn dài hay phân tích.
  + Môn Khoa học, Lịch sử - Địa lý, TNXH, Đạo đức, Công nghệ: Nhận diện, chỉ đúng hình ảnh trực quan và nhắc lại 1-2 từ khóa cốt lõi của bài.
- YÊU CẦU 2 Ý BẮT BUỘC:
  - Năng lực đặc thù: [Kiến thức cốt lõi bám sát bài, giới hạn phạm vi, hoàn thành khoảng ${r}% bài tập cơ bản Bài 1/Bài 2 theo mẫu, nêu rõ nội dung giảm tải không bắt buộc].
  - Phẩm chất, năng lực chung: [Rèn luyện tính tự tin phát âm/làm bài trước bạn, tích cực hòa nhập, hợp tác cùng bạn học (mô hình bạn kèm bạn / đôi bạn cùng tiến) và nỗ lực hoàn thành nhiệm vụ vừa sức].`;
    }

    if (notes && notes.trim()) {
      guide += `\n- LƯU Ý ĐẶC THÙ TỪ GIÁO VIÊN ĐỨNG LỚP: ${notes.trim()}`;
    }
    return guide;
  },

  /**
   * Xử lý một nhóm (chunk) bài dạy gửi cho Gemini để biên soạn lại YCCĐ cho học sinh khuyết tật
   */
  _processDisabilityChunkWithGemini: async function(chunkLessons, disabilityConfig, apiKey) {
    if (!chunkLessons || !chunkLessons.length) return chunkLessons;

    var rate = parseInt(disabilityConfig.cognitiveRate, 10) || 50;
    var typeName = disabilityConfig.disabilityTypeName || this.getDisabilityTypeName(disabilityConfig.disabilityType) || 'Khuyết tật học tập';
    var notes = (disabilityConfig.notes || '').trim();
    var guidance = this.getDisabilityGuidance(disabilityConfig.disabilityType, rate, notes);

    var itemsToSend = chunkLessons.map(function(les, index) {
      var title = (les.lessonTitle || les.title || ('Bài học ' + (index + 1))).trim();
      var subj = les.subjectName || les.subject || (typeof IntegrationService !== 'undefined' && IntegrationService.getSubjectDisplayName ? IntegrationService.getSubjectDisplayName(les.subjectKey) : '') || '';
      
      // Lọc YCCĐ đặc thù / cốt lõi từ bài dạy
      var rawYccd = les.yccd || [];
      if (typeof rawYccd === 'string') rawYccd = rawYccd.split('\n');
      var specificYccd = [];
      var inDacThu = false;
      for (var i = 0; i < rawYccd.length; i++) {
        var line = (rawYccd[i] || '').trim();
        if (/học sinh khuyết tật/i.test(line)) continue;
        if (/1\.\s*(năng\s*lực\s*đặc\s*thù|kiến\s*thức)/i.test(line)) { inDacThu = true; continue; }
        if (/2\.\s*(năng\s*lực\s*chung|phẩm\s*chất)|3\.\s*phẩm\s*chất|4\.\s*tích\s*hợp/i.test(line)) { inDacThu = false; break; }
        if (inDacThu && line) specificYccd.push(line);
      }
      if (specificYccd.length === 0) {
        specificYccd = rawYccd.filter(function(l) {
          return l && !/học sinh khuyết tật|tự chủ|giao tiếp|giải quyết|chăm chỉ|yêu nước|nhân ái|trách nhiệm|trung thực/i.test(l);
        }).slice(0, 4);
      }

      return {
        id: index,
        title: title,
        subject: subj,
        originalYccd: specificYccd.length ? specificYccd : [(les.topic || title)]
      };
    });

    var prompt = `Bạn là Chuyên gia Phương pháp Dạy học Tiểu học và Giáo dục Hòa nhập (Chương trình GDPT 2018, Thông tư 03/2018/TT-BGDĐT, chuẩn Công văn 2345/BGDĐT-GDTH).

NHIỆM VỤ:
Dưới đây là danh sách các bài dạy kèm YÊU CẦU CẦN ĐẠT (YCCĐ) GỐC của từng bài.
Dựa vào YCCĐ GỐC của TỪNG BÀI DẠY, hãy biên soạn lại nội dung YCCĐ phân hóa chi tiết, định lượng cụ thể theo mức nhận thức ${rate}% (chuẩn Thông tư 03 và CV 2345) dành riêng cho học sinh khuyết tật học hòa nhập trong lớp.

THÔNG TIN HỌC SINH KHUYẾT TẬT:
- Dạng tật: ${typeName}
- Mức độ nhận thức / đáp ứng: khoảng ${rate}% so với chuẩn chung của lớp
${notes ? ('- Ghi chú đặc thù từ giáo viên: ' + notes) : ''}

HƯỚNG DẪN ĐIỀU CHỈNH SƯ PHẠM DÀNH RIÊNG CHO DẠNG TẬT NÀY:
${guidance}

DANH SÁCH BÀI DẠY VÀ YCCĐ GỐC:
${JSON.stringify(itemsToSend, null, 2)}

QUY TẮC BẮT BUỘC ĐẢM BẢO CHUẨN MỰC SƯ PHẠM ĐỊNH LƯỢNG (CHI TIẾT & ĐO LƯỜNG ĐƯỢC - CÁCH 2):
1. VĂN PHONG SƯ PHẠM: Chuẩn mực, ấm áp, khích lệ sự hòa nhập và tiến bộ của học sinh.
2. CẤU TRÚC BẮT BUỘC CHO MỖI BÀI DẠY PHẢI CÓ ĐỦ 2 GẠCH ĐẦU DÒNG (PHÂN TÁCH BẰNG DẤU XUỐNG DÒNG \\n):
   - Năng lực đặc thù: [Chỉ rõ kiến thức cốt lõi bám sát bài, giới hạn phạm vi số/kiến thức cụ thể (ví dụ môn Toán: số có bao nhiêu chữ số, phép tính cụ thể nào...), định lượng rõ hoàn thành khoảng ${rate}% khối lượng bài tập nhận biết cơ bản trong SGK (chỉ định rõ Bài 1 hoặc Bài 2 theo mẫu), và loại trừ rõ phần giảm tải không bắt buộc làm (không yêu cầu giải toán có lời văn 2-3 bước tính hay bài tính thuận tiện, bài nâng cao)].
   - Phẩm chất, năng lực chung: [Rèn luyện tính tự tin phát âm/làm bài trước bạn, tích cực hòa nhập, hợp tác cùng bạn học (mô hình bạn kèm bạn / đôi bạn cùng tiến) và có ý thức nỗ lực hoàn thành nhiệm vụ vừa sức].
3. ĐỊNH DẠNG XUẤT RA CHÍNH XÁC:
   "- Năng lực đặc thù: [Nội dung chi tiết định lượng bám sát bài]...\\n- Phẩm chất, năng lực chung: [Nội dung hòa nhập, tự tin, hợp tác]..."

HÃY TRẢ VỀ KẾT QUẢ DƯỚI DẠNG MẢNG JSON THUẦN TÚY (không kèm mã markdown \`\`\`json):
[
  {
    "id": 0,
    "disabilityYccd": "- Năng lực đặc thù: ...\\n- Phẩm chất, năng lực chung: ..."
  }
]`;

    var rawResponse = await this.callGeminiApi(apiKey, prompt, { temperature: 0.4, maxTokens: 4000 });
    var parsed = this.parseJsonSafely(rawResponse);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      throw new Error('AI không trả về kết quả mảng JSON hợp lệ cho danh sách bài dạy.');
    }

    parsed.forEach(function(item) {
      var idx = item.id;
      if (typeof idx === 'number' && chunkLessons[idx] && item.disabilityYccd) {
        var cleaned = item.disabilityYccd.trim()
          .replace(/[;\s]+$/, '')
          .trim();
        chunkLessons[idx].disabilityYccdAI = cleaned;
      }
    });

    var missingCount = 0;
    chunkLessons.forEach(function(les) {
      if (!les.disabilityYccdAI) missingCount++;
    });
    if (missingCount > 0) {
      throw new Error('Gemini AI chưa hoàn thành đủ bài dạy trong nhóm (thiếu ' + missingCount + ' bài). Chế độ ngoại tuyến đã bị tắt hoàn toàn, vui lòng thử lại!');
    }

    return chunkLessons;
  },

  /**
   * Gửi danh sách bài dạy cho Gemini AI để biên soạn YCCĐ phân hóa cho học sinh khuyết tật
   * Tự động chia nhóm (batching) tối ưu tốc độ và quota API
   */
  adaptDisabilityYccdBatch: async function(lessons, disabilityConfig, apiKey) {
    if (!lessons || !lessons.length || !disabilityConfig || !disabilityConfig.enabled) {
      return lessons;
    }

    var key = apiKey;
    if (!key && typeof IntegrationService !== 'undefined' && IntegrationService.getGeminiApiKey) {
      key = IntegrationService.getGeminiApiKey();
    }
    if (!key && typeof window !== 'undefined' && window.CONFIG && window.CONFIG.DEFAULT_GEMINI_API_KEY) {
      key = window.CONFIG.DEFAULT_GEMINI_API_KEY;
    }
    if (!key) {
      throw new Error('Chưa có Gemini API Key để kết nối AI');
    }

    var self = this;
    var CHUNK_SIZE = 10;
    var chunks = [];
    for (var i = 0; i < lessons.length; i += CHUNK_SIZE) {
      chunks.push(lessons.slice(i, i + CHUNK_SIZE));
    }

    for (var c = 0; c < chunks.length; c++) {
      // Khi có lỗi, ném lỗi ra ngoài để hệ thống báo lỗi kết nối rõ ràng thay vì nuốt lỗi
      await self._processDisabilityChunkWithGemini(chunks[c], disabilityConfig, key);
    }

    return lessons;
  },

  /**
   * Biên soạn YCCĐ cho một bài dạy đơn lẻ bằng Gemini AI
   */
  adaptSingleLessonDisability: async function(lesson, disabilityConfig, apiKey) {
    if (!lesson) return '';
    var list = [lesson];
    await this.adaptDisabilityYccdBatch(list, disabilityConfig, apiKey);
    return lesson.disabilityYccdAI || '';
  },

  /**
   * ĐÃ GỠ BỎ HOÀN TOÀN: Hệ thống không tự sinh đề mẫu / ngoại tuyến.
   * Bắt buộc kết nối trực tuyến 100% với Google Gemini AI. Nếu có lỗi, hệ thống sẽ thông báo trực tiếp cho người dùng.
   */
  generateSmartLocalExam: function(params) {
    throw new Error("Chế độ đề mẫu ngoại tuyến đã được gỡ bỏ hoàn toàn. Hệ thống bắt buộc kết nối trực tiếp với Google Gemini AI để biên soạn đề mới 100%!");
  },

  generateSmartLocalTiengViet: function(grade, scope, params) {
    throw new Error("Chế độ đề mẫu ngoại tuyến đã được gỡ bỏ hoàn toàn. Hệ thống bắt buộc kết nối trực tiếp với Google Gemini AI để biên soạn đề mới 100%!");
  },

  /**
   * Xuất file Word (.docx) chuẩn mẫu thực tế theo Thông tư 27 & SEA-PLM
   */
  exportToWord: async function(examData) {
    if (!examData) {
      showToast("Không có dữ liệu đề thi để xuất!", "warning");
      return;
    }
    if (this.sanitizeAndBalanceExam) {
      examData = this.sanitizeAndBalanceExam(examData);
    }

    // Nếu là đề Tiếng Việt chuyên biệt
    if (examData.isTiengViet || examData.subjectId === "TIENG_VIET" || examData.readingExam) {
      await this.exportTiengVietToWord(examData);
      return;
    }

    var m = examData.matrix || {};
    var s = m.summary || {};
    var currentScope = examData.scopeDesc || examData.scope || (typeof document !== 'undefined' ? (document.getElementById("aiCustomScopeInput")?.value || document.getElementById("aiScopePreset")?.value) : "") || "";
    var termInfo = this.resolveExamTermInfo(currentScope);
    var examHeaderTitle = examData.examHeaderTitle || termInfo.headerTitle;
    if (termInfo.term === "HỌC KÌ II" && String(examHeaderTitle).includes("HỌC KÌ I") && !String(examHeaderTitle).includes("HỌC KÌ II")) {
      examHeaderTitle = "ĐỀ KIỂM TRA HỌC KÌ II";
    }
    var bookSeriesName = examData.bookSeries || (examData.seriesName || "Kết nối tri thức với cuộc sống (KNTT)");
    var mcqScoreStr = examData.mcqTotalScore ? examData.mcqTotalScore.toString().replace('.', ',') : "7,0";
    var essayScoreStr = examData.essayTotalScore ? examData.essayTotalScore.toString().replace('.', ',') : "3,0";
    var WORD_PAGE_BREAK = '<br clear="all" style="page-break-before: always; mso-break-type: section-break;" /><p class="MsoNormal" style="page-break-before: always; margin: 0pt; mso-para-margin: 0pt; font-size: 1pt; line-height: 1pt; height: 1pt; mso-margin-top-alt: 0pt; mso-margin-bottom-alt: 0pt;">&nbsp;</p><div class="page-break" style="page-break-before: always; mso-break-type: section-break; clear: both;"></div>';

    var docHtml = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>${examData.examTitle}</title>
        <!--[if gte mso 9]>
        <xml>
          <w:WordDocument>
            <w:View>Print</w:View>
            <w:Zoom>100</w:Zoom>
            <w:DoNotOptimizeForBrowser/>
          </w:WordDocument>
        </xml>
        <![endif]-->
        <style>
          @page Section1 {
            size: 21.0cm 29.7cm;
            margin: 2.0cm 1.5cm 2.0cm 3.0cm;
            mso-page-orientation: portrait;
            mso-header-margin: 36.0pt;
            mso-footer-margin: 36.0pt;
          }
          div.Section1 { page: Section1; }
          body {
            font-family: 'Times New Roman', serif;
            font-size: 13pt;
            line-height: 1.0;
            mso-line-height-rule: exactly;
            color: #000;
            text-align: justify;
            margin: 0pt;
            padding: 0pt;
          }
          p, p.MsoNormal, li {
            font-family: 'Times New Roman', serif;
            font-size: 13pt;
            line-height: 1.0;
            mso-line-height-rule: exactly;
            margin: 0pt;
            margin-top: 0pt;
            margin-bottom: 0pt;
            mso-para-margin: 0pt;
            mso-para-margin-top: 0pt;
            mso-para-margin-bottom: 0pt;
            text-align: justify;
          }
          .title-bold-center {
            text-align: center;
            font-weight: bold;
            font-family: 'Times New Roman', serif;
            font-size: 14pt;
            text-transform: uppercase;
            line-height: 1.0;
            margin-top: 6pt;
            margin-bottom: 4pt;
          }
          .subtitle-center {
            text-align: center;
            font-family: 'Times New Roman', serif;
            font-size: 13pt;
            line-height: 1.0;
            margin-top: 0pt;
            margin-bottom: 10pt;
          }
          table {
            font-family: 'Times New Roman', serif;
          }
          table.matrix-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 12pt;
            font-family: 'Times New Roman', serif;
          }
          table.matrix-table th, table.matrix-table td {
            border: 1px solid #000;
            padding: 4px 5px;
            text-align: center;
            font-size: 11pt;
            line-height: 1.0;
            font-family: 'Times New Roman', serif;
          }
          table.matrix-table th {
            font-weight: bold;
            background-color: #f2f2f2;
          }
          table.header-table {
            width: 100%;
            border: none;
            margin-bottom: 10pt;
            font-family: 'Times New Roman', serif;
          }
          table.header-table td {
            vertical-align: top;
            padding: 2px 4px;
            font-size: 13pt;
            line-height: 1.0;
            font-family: 'Times New Roman', serif;
            text-align: left;
          }
          table.eval-box {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 12pt;
            font-family: 'Times New Roman', serif;
          }
          table.eval-box td {
            border: 1px solid #000;
            padding: 6px 8px;
            font-size: 13pt;
            line-height: 1.0;
            font-family: 'Times New Roman', serif;
          }
          .section-heading {
            font-family: 'Times New Roman', serif;
            font-weight: bold;
            font-size: 13pt;
            line-height: 1.0;
            margin-top: 10pt;
            margin-bottom: 4pt;
            text-align: left;
          }
          .q-block {
            margin-top: 0pt;
            margin-bottom: 8pt;
            line-height: 1.0;
            font-family: 'Times New Roman', serif;
            font-size: 13pt;
            text-align: justify;
          }
          .q-options {
            margin-left: 20px;
            margin-top: 2pt;
            line-height: 1.0;
            text-align: left;
            font-family: 'Times New Roman', serif;
            font-size: 13pt;
          }
          .dotted-line {
            border-bottom: 1px dotted #555;
            height: 22px;
            margin-bottom: 2px;
          }
          .page-break {
            page-break-before: always !important;
            mso-break-type: section-break !important;
            clear: both !important;
          }
        </style>
      </head>
      <body>
        <div class="Section1">

        <!-- PHẦN I: MA TRẬN ĐỀ KIỂM TRA (3 TẦNG DÒNG CHUẨN THÔNG TƯ 27) -->
        <div class="title-bold-center">${(examData.threeTierMatrix && examData.threeTierMatrix.title) ? examData.threeTierMatrix.title : `MA TRẬN ${examHeaderTitle} MÔN ${examData.subjectName.toUpperCase()} LỚP ${examData.grade} - ${bookSeriesName.toUpperCase()}`}</div>
        <div class="subtitle-center">NĂM HỌC ${examData.schoolYear}</div>

        ${examData.threeTierMatrix ? AIService.renderThreeTierMatrixTable(examData.threeTierMatrix, { isWord: true }) : `
        <table class="matrix-table">
          <thead>
            <tr>
              <th rowspan="3" style="width: 32%;">Chủ đề / Bài học</th>
              <th colspan="6">Mức độ nhận thức</th>
              <th colspan="2" rowspan="2">Tổng số câu</th>
              <th rowspan="3" style="width: 10%;">Điểm số</th>
            </tr>
            <tr>
              <th colspan="2">Mức 1<br>(Nhận biết)</th>
              <th colspan="2">Mức 2<br>(Kết nối)</th>
              <th colspan="2">Mức 3<br>(Vận dụng)</th>
            </tr>
            <tr>
              <th>TN</th>
              <th>TL</th>
              <th>TN</th>
              <th>TL</th>
              <th>TN</th>
              <th>TL</th>
              <th>TN</th>
              <th>TL</th>
            </tr>
          </thead>
          <tbody>
            ${(m.topics || []).filter(function(t) {
              return (t.total_mcq > 0) || (t.total_essay > 0) || (t.score > 0) || t.m1_mcq || t.m1_essay || t.m2_mcq || t.m2_essay || t.m3_mcq || t.m3_essay;
            }).map(function(t) {
              return `
                <tr>
                  <td style="text-align: left; font-weight: 500;">${t.topic}</td>
                  <td>${t.m1_mcq || '-'}</td>
                  <td>${t.m1_essay || '-'}</td>
                  <td>${t.m2_mcq || '-'}</td>
                  <td>${t.m2_essay || '-'}</td>
                  <td>${t.m3_mcq || '-'}</td>
                  <td>${t.m3_essay || '-'}</td>
                  <td><b>${t.total_mcq || 0}</b></td>
                  <td><b>${t.total_essay || 0}</b></td>
                  <td><b>${t.score ? t.score.toString().replace('.', ',') : '-'}</b></td>
                </tr>
              `;
            }).join('')}
            <tr style="font-weight: bold; background-color: #fafafa;">
              <td style="text-align: left;">Tổng số câu TN / TL</td>
              <td>${s.m1_total_mcq || 0}</td>
              <td>${s.m1_total_essay || 0}</td>
              <td>${s.m2_total_mcq || 0}</td>
              <td>${s.m2_total_essay || 0}</td>
              <td>${s.m3_total_mcq || 0}</td>
              <td>${s.m3_total_essay || 0}</td>
              <td>${s.total_mcq_count || 0}</td>
              <td>${s.total_essay_count || 0}</td>
              <td>${(s.total_mcq_count || 0) + (s.total_essay_count || 0)}</td>
            </tr>
            <tr style="font-weight: bold; background-color: #fafafa;">
              <td style="text-align: left;">Điểm số</td>
              <td colspan="2">${s.m1_score ? s.m1_score.toString().replace('.', ',') : '-'}</td>
              <td colspan="2">${s.m2_score ? s.m2_score.toString().replace('.', ',') : '-'}</td>
              <td colspan="2">${s.m3_score ? s.m3_score.toString().replace('.', ',') : '-'}</td>
              <td>${mcqScoreStr}</td>
              <td>${essayScoreStr}</td>
              <td>10,0</td>
            </tr>
            <tr style="font-weight: bold; background-color: #f0f0f0;">
              <td style="text-align: left;">Tỉ lệ %</td>
              <td colspan="2">${s.m1_pct || 40}%</td>
              <td colspan="2">${s.m2_pct || 40}%</td>
              <td colspan="2">${s.m3_pct || 20}%</td>
              <td colspan="2">100%</td>
              <td>100%</td>
            </tr>
          </tbody>
        </table>
        `}

        <!-- PHẦN II: PHIẾU KIỂM TRA (ĐỀ HỌC SINH) -->
        ${WORD_PAGE_BREAK}

        <table class="header-table">
          <tr>
            <td style="width: 48%; text-align: left;">
              <b>${examData.schoolName || "TRƯỜNG TIỂU HỌC ................................."}</b><br>
              Họ và tên: ...................................................<br>
              Lớp: ${examData.grade}.....
            </td>
            <td style="width: 52%; text-align: left;">
              <i>Thứ….. ngày … tháng … năm 2026</i><br>
              <b style="font-size: 13.5pt; text-transform: uppercase;">${examHeaderTitle}</b><br>
              <b>MÔN: ${examData.subjectName.toUpperCase()} - LỚP ${examData.grade}</b><br>
              <i>Thời gian làm bài: ${examData.duration || "40 phút"}</i>
            </td>
          </tr>
        </table>

        <!-- KHUNG ĐÁNH GIÁ 3 Ô CHUẨN THỰC TẾ -->
        <table class="eval-box">
          <tr>
            <td style="width: 25%; text-align: center; height: 75px;">
              <b>Điểm</b>
            </td>
            <td style="width: 50%; text-align: center;">
              <b>Nhận xét của giáo viên</b>
            </td>
            <td style="width: 25%; text-align: center;">
              <b>Chữ kí của PHHS</b>
            </td>
          </tr>
        </table>

        <div class="section-heading">I. PHẦN TRẮC NGHIỆM (${mcqScoreStr} điểm)</div>
        <p style="margin: 0 0 10px 0; font-style: italic;">Khoanh vào chữ cái đặt trước câu trả lời đúng hoặc thực hiện theo yêu cầu các câu bên dưới:</p>

        ${(examData.multipleChoice || []).map(function(q) {
          return AIService.renderQuestionItem(q, true);
        }).join('')}

        ${(examData.essaySection && examData.essaySection.length > 0) ? `
          <div class="section-heading">II. PHẦN TỰ LUẬN (${essayScoreStr} điểm)</div>
          ${examData.essaySection.map(function(e) {
            return `
              <div class="q-block" style="margin-top: 10px;">
                <b>${e.title || `Câu ${e.num} (${e.score.toString().replace('.', ',')} điểm):`}</b> ${e.text}
                <div style="margin-top: 6px;">
                  <div class="dotted-line"></div>
                  <div class="dotted-line"></div>
                  <div class="dotted-line"></div>
                  <div class="dotted-line"></div>
                  <div class="dotted-line"></div>
                </div>
              </div>
            `;
          }).join('')}
        ` : ''}

        <!-- PHẦN III: HƯỚNG DẪN CHẤM VÀ ĐÁP ÁN -->
        ${WORD_PAGE_BREAK}

        <div class="title-bold-center">HƯỚNG DẪN CHẤM VÀ ĐÁP ÁN MÔN ${examData.subjectName.toUpperCase()} LỚP ${examData.grade}</div>
        <div class="subtitle-center">Bộ sách: ${bookSeriesName} • Năm học ${examData.schoolYear}</div>

        <div class="section-heading">I. PHẦN TRẮC NGHIỆM (${mcqScoreStr} điểm)</div>
        ${AIService.renderAnswersSection(examData, true)}

        ${(examData.essaySection && examData.essaySection.length > 0) ? `
          <div class="section-heading">II. PHẦN TỰ LUẬN (${essayScoreStr} điểm)</div>
          <table class="matrix-table" style="text-align: left;">
            <thead>
              <tr>
                <th style="width: 15%; text-align: center;">Câu</th>
                <th style="width: 65%; text-align: center;">Nội dung đáp án & Các bước giải</th>
                <th style="width: 20%; text-align: center;">Biểu điểm</th>
              </tr>
            </thead>
            <tbody>
              ${examData.essaySection.map(function(e) {
                return `
                  <tr>
                    <td style="text-align: center; vertical-align: top; font-weight: bold;">
                      Câu ${e.num}<br>(${e.score ? e.score.toString().replace('.', ',') : ''} đ)
                    </td>
                    <td style="vertical-align: top; white-space: pre-line;">
                      ${e.solution || e.text}
                    </td>
                    <td style="text-align: center; vertical-align: top;">
                      ${(e.rubric || []).map(function(r) {
                        return `<div><b>${r.score}</b></div>`;
                      }).join('') || `<b>${e.score ? e.score.toString().replace('.', ',') : ''} đ</b>`}
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        ` : ''}

        <!-- ========================================================================= -->
        <!-- PHẦN IV: BẢNG ĐẶC TẢ SIÊU DỮ LIỆU CÂU HỎI THEO CHUẨN ĐÁNH GIÁ ĐÔNG NAM Á (SEA-PLM) -->
        <!-- ========================================================================= -->
        ${WORD_PAGE_BREAK}

        <div class="title-bold-center">ĐẶC TẢ SIÊU DỮ LIỆU & HƯỚNG DẪN MÃ HÓA THEO CHUẨN SEA-PLM</div>
        <div class="subtitle-center">Chương trình Đánh giá kết quả học tập học sinh Tiểu học khu vực Đông Nam Á (Bộ GD&ĐT)</div>

        <div class="section-heading">1. BẢNG MÔ TẢ SIÊU DỮ LIỆU CÂU HỎI (ITEM METADATA)</div>
        <table class="matrix-table" style="text-align: left; margin-bottom: 20px;">
          <thead>
            <tr style="background-color: #f2f2f2; font-weight: bold; text-align: center;">
              <th style="width: 14%; text-align: center;">Mã câu</th>
              <th style="width: 8%; text-align: center;">Thứ tự</th>
              <th style="width: 18%; text-align: center;">Bối cảnh (Context)</th>
              <th style="width: 18%; text-align: center;">Miền nội dung</th>
              <th style="width: 16%; text-align: center;">Quá trình nhận thức</th>
              <th style="width: 10%; text-align: center;">Độ khó</th>
              <th style="width: 10%; text-align: center;">Dạng câu</th>
              <th style="width: 6%; text-align: center;">Điểm</th>
            </tr>
          </thead>
          <tbody>
            ${(function() {
              var metaList = examData.seaplmMetadataTable ? JSON.parse(JSON.stringify(examData.seaplmMetadataTable)) : [];
              if (!metaList || metaList.length === 0) {
                var order = 1;
                (examData.multipleChoice || []).forEach(function(q) {
                  var ctx = q.metadata?.context || "Bối cảnh môn học (Academic)";
                  var dom = q.metadata?.contentDomain || "Kiến thức trọng tâm";
                  var cog = q.metadata?.cognitiveProcess || (q.level === 'Mức 1' ? 'Biết (Knowing)' : q.level === 'Mức 2' ? 'Áp dụng (Applying)' : 'Suy luận (Reasoning)');
                  metaList.push({
                    itemCode: q.itemCode || `${(examData.subjectName || 'MON').substring(0,3).toUpperCase()}${examData.grade}_MCQ_${String(q.num).padStart(2, '0')}`,
                    order: order++,
                    context: ctx,
                    contentDomain: dom,
                    cognitiveProcess: cog,
                    difficulty: q.metadata?.difficulty || (q.level === 'Mức 1' ? 'Dễ' : q.level === 'Mức 2' ? 'Trung bình' : 'Khó'),
                    itemType: "Trắc nghiệm 4 lựa chọn (MCQ)",
                    score: q.score || 0.5
                  });
                });
                (examData.essaySection || []).forEach(function(e) {
                  metaList.push({
                    itemCode: e.itemCode || `${(examData.subjectName || 'MON').substring(0,3).toUpperCase()}${examData.grade}_CR_${String(e.num).padStart(2, '0')}`,
                    order: order++,
                    context: e.metadata?.context || "Môi trường xung quanh (Local community)",
                    contentDomain: e.metadata?.contentDomain || "Vận dụng thực hành",
                    cognitiveProcess: e.metadata?.cognitiveProcess || "Áp dụng / Suy luận",
                    difficulty: e.metadata?.difficulty || "Trung bình - Khó",
                    itemType: "Tự luận (Constructed Response)",
                    score: e.score || 1.0
                  });
                });
              }
              return metaList.map(function(item) {
                return `
                  <tr>
                    <td style="font-weight: bold; text-align: center;">${item.itemCode || '-'}</td>
                    <td style="text-align: center;">Câu ${item.order || '-'}</td>
                    <td>${item.context || '-'}</td>
                    <td>${item.contentDomain || '-'}</td>
                    <td>${item.cognitiveProcess || '-'}</td>
                    <td style="text-align: center;">${item.difficulty || '-'}</td>
                    <td style="text-align: center;">${item.itemType || '-'}</td>
                    <td style="text-align: center; font-weight: bold;">${item.score ? item.score.toString().replace('.', ',') : '-'}</td>
                  </tr>
                `;
              }).join('');
            })()}
          </tbody>
        </table>

        <!-- 2. PHÂN TÍCH CƠ SỞ PHƯƠNG ÁN ĐÚNG VÀ PHƯƠNG ÁN NHIỄU -->
        <div class="section-heading" style="margin-top: 16px;">2. PHÂN TÍCH CƠ SỞ PHƯƠNG ÁN ĐÚNG VÀ PHƯƠNG ÁN NHIỄU (DISTRACTOR RATIONALE)</div>
        <table class="matrix-table" style="text-align: left; margin-bottom: 20px;">
          <thead>
            <tr style="background-color: #f2f2f2; font-weight: bold;">
              <th style="width: 10%; text-align: center;">Câu</th>
              <th style="width: 8%; text-align: center;">Đáp án</th>
              <th style="width: 40%; text-align: center;">Cơ sở phương án đúng</th>
              <th style="width: 42%; text-align: center;">Phân tích các phương án nhiễu & Lỗi sai thường gặp</th>
            </tr>
          </thead>
          <tbody>
            ${(examData.multipleChoice || []).map(function(q) {
              var dr = q.distractorRationale || {};
              var correctText = dr.correct || q.explain || `Phương án ${q.ans} là chính xác.`;
              var distText = [];
              ['A', 'B', 'C', 'D'].forEach(function(opt) {
                if (opt !== q.ans) {
                  var reason = dr['distractor' + opt] || dr[opt];
                  if (reason) {
                    distText.push(`<b>Lựa chọn ${opt}:</b> ${reason}`);
                  }
                }
              });
              if (distText.length === 0) {
                distText.push(`<b>Các lựa chọn còn lại:</b> Học sinh chọn nhầm do tính toán sai hoặc hiểu nhầm bản chất câu hỏi.`);
              }
              return `
                <tr>
                  <td style="text-align: center; font-weight: bold; vertical-align: top;">Câu ${q.num}</td>
                  <td style="text-align: center; font-weight: bold; color: #b91c1c; vertical-align: top; font-size: 12pt;">${q.ans}</td>
                  <td style="vertical-align: top; color: #15803d;">${correctText}</td>
                  <td style="vertical-align: top; color: #475569;">${distText.join('<br>')}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>

        <!-- 3. HƯỚNG DẪN MÃ HÓA CHI TIẾT (CODING GUIDE) THEO CHUẨN SEA-PLM -->
        ${(examData.essaySection && examData.essaySection.length > 0) ? `
          <div class="section-heading" style="margin-top: 16px;">3. HƯỚNG DẪN MÃ HÓA CHI TIẾT (CODING GUIDE) CHO CÂU TỰ LUẬN</div>
          ${examData.essaySection.map(function(e) {
            var cg = e.codingGuide || {
              maxCode: "Mã 2",
              codes: [
                { code: "Mã 2", description: "Mức tối đa: Thực hiện đầy đủ các bước, lập luận đúng và cho kết quả chính xác.", sampleResponse: e.solution || "Học sinh hoàn thành đúng toàn bộ bài giải." },
                { code: "Mã 1", description: "Mức chưa tối đa: Thực hiện đúng bước đầu hoặc tính toán đúng nhưng sai đơn vị / đáp số.", sampleResponse: "Học sinh làm đúng 1 phần bài làm." },
                { code: "Mã 0", description: "Mức không đạt: Tính toán sai toàn bộ hoặc giải lạc đề.", sampleResponse: "Không đưa ra được kết quả hoặc câu trả lời vô nghĩa." },
                { code: "Mã 9", description: "Bỏ trống không làm bài.", sampleResponse: "[Học sinh để giấy trắng]" }
              ]
            };
            return `
              <div style="margin-bottom: 15px;">
                <div style="font-weight: bold; color: #1e3a8a; margin-bottom: 4px;">
                  ${e.title || `Câu ${e.num}`}: ${e.text}
                </div>
                <table class="matrix-table" style="text-align: left;">
                  <thead>
                    <tr style="background-color: #f2f2f2; font-weight: bold;">
                      <th style="width: 12%; text-align: center;">Mã hóa</th>
                      <th style="width: 48%; text-align: center;">Tiêu chí đánh giá</th>
                      <th style="width: 40%; text-align: center;">Ví dụ bài làm mẫu của học sinh (Sample Response)</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${(cg.codes || []).map(function(c) {
                      var badgeColor = c.code === 'Mã 2' ? '#15803d' : c.code === 'Mã 1' ? '#0369a1' : c.code === 'Mã 0' ? '#b91c1c' : '#64748b';
                      return `
                        <tr>
                          <td style="text-align: center; vertical-align: top; font-weight: bold; color: ${badgeColor};">
                            ${c.code}
                          </td>
                          <td style="vertical-align: top;">${c.description}</td>
                          <td style="vertical-align: top; font-style: italic; color: #334155;">${c.sampleResponse || '-'}</td>
                        </tr>
                      `;
                    }).join('')}
                  </tbody>
                </table>
              </div>
            `;
          }).join('')}
        ` : ''}

        </div>
      </body>
      </html>
    `;

    var sLower = (examData.bookSeries || 'kntt').toLowerCase();
    var seriesSlug = (sLower.includes("chân trời") || sLower === 'ctst') ? "CTST" : "KNTT";
    var termSlug = (examData.examTerm || termInfo.term || 'HK1').replace(/\s+/g, '_');
    return await this.downloadWordBlob(docHtml, `De_Kiem_Tra_${termSlug}_${examData.subjectName}_Lop_${examData.grade}_${seriesSlug}_2026_2027.docx`);
  },

  /**
   * Xuất file Word chuyên biệt cho môn Tiếng Việt (4 Trang: Phiếu Đọc, Phiếu Viết, Ma Trận, Hướng Dẫn Chấm)
   */
  exportTiengVietToWord: async function(exam) {
    if (!exam) return;
    if (this.sanitizeAndBalanceExam) {
      exam = this.sanitizeAndBalanceExam(exam);
    }
    var currentScope = exam.scopeDesc || exam.scope || (typeof document !== 'undefined' ? (document.getElementById("aiCustomScopeInput")?.value || document.getElementById("aiScopePreset")?.value) : "") || "";
    var termInfo = this.resolveExamTermInfo(currentScope);
    var examTerm = exam.examTerm || termInfo.term;
    if (termInfo.term === "HỌC KÌ II" && String(examTerm).includes("I") && !String(examTerm).includes("II")) {
      examTerm = "HỌC KÌ II";
    }
    var rd = exam.readingExam || {};
    var wr = exam.writingExam || {};
    var oralScoreStr = (rd.oralScore || 4.0).toFixed(1).replace('.', ',');
    var compScoreStr = (rd.comprehensionScore || 6.0).toFixed(1).replace('.', ',');
    var grade = exam.grade || 3;
    var WORD_PAGE_BREAK = '<br clear="all" style="page-break-before: always; mso-break-type: section-break;" /><p class="MsoNormal" style="page-break-before: always; margin: 0pt; mso-para-margin: 0pt; font-size: 1pt; line-height: 1pt; height: 1pt; mso-margin-top-alt: 0pt; mso-margin-bottom-alt: 0pt;">&nbsp;</p><div class="page-break" style="page-break-before: always; mso-break-type: section-break; clear: both;"></div>';

    var docHtml = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>${exam.examTitle}</title>
        <!--[if gte mso 9]>
        <xml>
          <w:WordDocument>
            <w:View>Print</w:View>
            <w:Zoom>100</w:Zoom>
            <w:DoNotOptimizeForBrowser/>
          </w:WordDocument>
        </xml>
        <![endif]-->
        <style>
          @page Section1 {
            size: 21.0cm 29.7cm;
            margin: 2.0cm 1.5cm 2.0cm 3.0cm;
            mso-page-orientation: portrait;
            mso-header-margin: 36.0pt;
            mso-footer-margin: 36.0pt;
          }
          div.Section1 { page: Section1; }
          body {
            font-family: 'Times New Roman', serif;
            font-size: 13pt;
            line-height: 1.0;
            mso-line-height-rule: exactly;
            color: #000;
            text-align: justify;
            margin: 0pt;
            padding: 0pt;
          }
          p, p.MsoNormal, li {
            font-family: 'Times New Roman', serif;
            font-size: 13pt;
            line-height: 1.0;
            mso-line-height-rule: exactly;
            margin: 0pt;
            margin-top: 0pt;
            margin-bottom: 0pt;
            mso-para-margin: 0pt;
            mso-para-margin-top: 0pt;
            mso-para-margin-bottom: 0pt;
            text-align: justify;
          }
          .title-bold-center {
            text-align: center;
            font-family: 'Times New Roman', serif;
            font-weight: bold;
            font-size: 14pt;
            text-transform: uppercase;
            line-height: 1.0;
            margin-top: 6pt;
            margin-bottom: 4pt;
          }
          .subtitle-center {
            text-align: center;
            font-family: 'Times New Roman', serif;
            font-size: 13pt;
            line-height: 1.0;
            margin-top: 0pt;
            margin-bottom: 10pt;
          }
          table {
            font-family: 'Times New Roman', serif;
          }
          table.matrix-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 12pt;
            font-family: 'Times New Roman', serif;
          }
          table.matrix-table th, table.matrix-table td {
            border: 1px solid #000;
            padding: 4px 5px;
            text-align: center;
            font-size: 11pt;
            line-height: 1.0;
            font-family: 'Times New Roman', serif;
          }
          table.matrix-table th {
            font-weight: bold;
            background-color: #f2f2f2;
          }
          table.header-table {
            width: 100%;
            border: none;
            margin-bottom: 10pt;
            font-family: 'Times New Roman', serif;
          }
          table.header-table td {
            vertical-align: top;
            padding: 2px 4px;
            font-size: 13pt;
            line-height: 1.0;
            font-family: 'Times New Roman', serif;
            text-align: left;
          }
          table.eval-box {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 12pt;
            font-family: 'Times New Roman', serif;
          }
          table.eval-box td {
            border: 1px solid #000;
            padding: 6px 8px;
            font-size: 13pt;
            line-height: 1.0;
            font-family: 'Times New Roman', serif;
          }
          .section-heading {
            font-family: 'Times New Roman', serif;
            font-weight: bold;
            font-size: 13pt;
            line-height: 1.0;
            margin-top: 10pt;
            margin-bottom: 4pt;
            text-align: left;
          }
          .reading-box {
            background: #fafafa;
            border: 1px solid #ccc;
            padding: 8px 12px;
            margin: 6pt 0 10pt 0;
            line-height: 1.0;
            font-family: 'Times New Roman', serif;
            font-size: 13pt;
            text-align: justify;
          }
          .q-block {
            margin-top: 0pt;
            margin-bottom: 8pt;
            line-height: 1.0;
            font-family: 'Times New Roman', serif;
            font-size: 13pt;
            text-align: justify;
          }
          .q-options {
            margin-left: 20px;
            margin-top: 2pt;
            line-height: 1.0;
            text-align: left;
            font-family: 'Times New Roman', serif;
            font-size: 13pt;
          }
          .dotted-line {
            border-bottom: 1px dotted #555;
            height: 22px;
            margin-bottom: 2px;
          }
          .page-break {
            page-break-before: always !important;
            mso-break-type: section-break !important;
            clear: both !important;
          }
        </style>
      </head>
      <body>
        <div class="Section1">

        <!-- ========================================== -->
        <!-- TRANG 1: PHIẾU KIỂM TRA ĐỌC (10 ĐIỂM)     -->
        <!-- ========================================== -->
        <!-- ========================================================================= -->
        <!-- PHẦN 1: 5 PHIẾU ĐỌC THÀNH TIẾNG (MỖI PHIẾU IN TRÊN 1 TRANG A4 RIÊNG BIỆT) -->
        <!-- ========================================================================= -->
        ${(rd.oralItems && rd.oralItems.length > 0) ? rd.oralItems.map(function(item, idx) {
          var qList = [];
          if (Array.isArray(item.questions) && item.questions.length > 0) {
            qList = item.questions;
          } else if (item.question) {
            qList = item.question.split(/\n+/).map(s => s.trim()).filter(Boolean);
          }

          return `
            ${idx > 0 ? WORD_PAGE_BREAK : ''}
            <!-- PHIẾU ĐỌC THÀNH TIẾNG SỐ ${idx + 1} (TRANG A4 RIÊNG BIỆT) -->
            <table class="header-table">
              <tr>
                <td style="width: 50%; vertical-align: top; text-align: left;">
                  <b>${exam.schoolName || "TRƯỜNG TIỂU HỌC ................................."}</b><br>
                  Họ và tên HS: ...................................................<br>
                  Lớp: ${grade}..... • Số báo danh: .........
                </td>
                <td style="width: 50%; text-align: left; vertical-align: top;">
                  <i>Thứ….. ngày … tháng … năm 2026</i><br>
                  <b>KIỂM TRA ĐỊNH KỲ ${examTerm}</b><br>
                  <b>MÔN: TIẾNG VIỆT - LỚP ${grade}</b><br>
                  <b style="font-size: 13pt; color: #b91c1c; text-transform: uppercase;">PHIẾU ĐỌC THÀNH TIẾNG SỐ ${idx + 1}</b>
                </td>
              </tr>
            </table>

            <div style="font-style: italic; font-size: 10.5pt; margin-bottom: 6px; color: #333;">
              * Hướng dẫn: Học sinh đọc thành tiếng bài văn/thơ dưới đây (thời gian khoảng 1 - 1,5 phút) và trả lời câu hỏi đọc hiểu do giáo viên chỉ định:
            </div>

            <!-- KHUNG TOÀN VĂN CẢ BÀI ĐỌC HOÀN CHỈNH -->
            <div style="border: 1.5px solid #000; padding: 8pt 12pt; margin-bottom: 8pt; background-color: #ffffff;">
              <div style="text-align: center; font-weight: bold; font-size: 13.5pt; text-transform: uppercase; margin-bottom: 2pt; line-height: 1.0; font-family: 'Times New Roman', serif;">
                ${item.title}
              </div>
              ${item.author ? `<div style="text-align: center; font-style: italic; font-size: 11pt; margin-bottom: 6pt; line-height: 1.0; font-family: 'Times New Roman', serif;">Tác giả: ${item.author}</div>` : ''}
              <div style="text-align: justify; text-indent: 1.5rem; line-height: 1.0; font-family: 'Times New Roman', serif; font-size: 13pt; white-space: pre-line;">
                ${item.passage || item.content || `(Học sinh đọc cả bài "${item.title}")`}
              </div>
            </div>

            <!-- HỆ THỐNG TOÀN BỘ CÂU HỎI ĐỌC HIỂU CỦA BÀI ĐÓ TRONG SGK -->
            <div style="border: 1px dashed #444; padding: 6pt 10pt; margin-bottom: 8pt; background-color: #fafafa;">
              <div style="font-weight: bold; font-size: 12pt; margin-bottom: 3pt; color: #1e3a8a; line-height: 1.0; font-family: 'Times New Roman', serif;">
                CÂU HỎI TÌM HIỂU BÀI (Học sinh trả lời câu hỏi do giáo viên chỉ định):
              </div>
              ${qList.length > 0 ? qList.map(function(qText, qIdx) {
                var prefix = qText.trim().match(/^(Câu\s*\d+|\d+[\.\:])/i) ? '' : `Câu ${qIdx + 1}: `;
                return `<div style="margin: 0pt; margin-bottom: 2pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0;"><b>${prefix}</b>${qText}</div>`;
              }).join('') : `<div style="margin: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0;"><b>Câu hỏi:</b> ${item.question || "Nêu nội dung chính hoặc bài học rút ra từ bài đọc trên."}</div>`}
            </div>

            <!-- KHUNG CHẤM ĐIỂM CỦA GIÁO VIÊN Ở CHÂN TRANG A4 -->
            <table style="width: 100%; border-collapse: collapse; margin-top: 6px; font-size: 10.5pt;">
              <tr>
                <td style="border: 1px solid #000; padding: 4px 6px; width: 25%; text-align: center;">
                  <b>1. Đọc đúng, lưu loát</b><br>(....../2,0 điểm)
                </td>
                <td style="border: 1px solid #000; padding: 4px 6px; width: 25%; text-align: center;">
                  <b>2. Diễn cảm, ngắt nghỉ</b><br>(....../1,0 điểm)
                </td>
                <td style="border: 1px solid #000; padding: 4px 6px; width: 25%; text-align: center;">
                  <b>3. Trả lời câu hỏi</b><br>(....../1,0 điểm)
                </td>
                <td style="border: 1px solid #000; padding: 4px 6px; width: 25%; text-align: center; font-weight: bold;">
                  <b>TỔNG ĐIỂM ĐỌC TIẾNG</b><br>(....../${oralScoreStr} điểm)
                </td>
              </tr>
              <tr>
                <td colspan="3" style="border: 1px solid #000; padding: 6px 8px; height: 35px; vertical-align: top;">
                  <b>Nhận xét:</b> .....................................................................................................................................................
                </td>
                <td style="border: 1px solid #000; padding: 6px 8px; text-align: center; vertical-align: top;">
                  <b>Giáo viên chấm</b><br><i>(Ký, ghi họ tên)</i>
                </td>
              </tr>
            </table>
          `;
        }).join('') : `
          <div style="border: 1px solid #ccc; padding: 8px 12px; margin-bottom: 12px;">
            <i>Chưa có dữ liệu bài đọc thành tiếng.</i>
          </div>
        `}

        <!-- ========================================================================= -->
        <!-- PHẦN 2: PHIẾU KIỂM TRA ĐỌC HIỂU (BẮT ĐẦU TRANG MỚI SAU 5 TRANG ĐỌC TIẾNG) -->
        <!-- ========================================================================= -->
        ${WORD_PAGE_BREAK}

        <table class="header-table">
          <tr>
            <td style="width: 48%; text-align: left;">
              <b>${exam.schoolName || "TRƯỜNG TIỂU HỌC ................................."}</b><br>
              Họ và tên: ...................................................<br>
              Lớp: ${exam.grade}.....
            </td>
            <td style="width: 52%; text-align: left;">
              <i>Thứ….. ngày … tháng … năm 2026</i><br>
              <b style="font-size: 13.5pt; text-transform: uppercase;">PHIẾU KIỂM TRA ĐỌC HIỂU</b><br>
              <b>MÔN: TIẾNG VIỆT - LỚP ${exam.grade}</b><br>
              <i>Thời gian làm bài: 35 - 40 phút</i>
            </td>
          </tr>
        </table>

        <!-- KHUNG ĐÁNH GIÁ PHẦN ĐỌC HIỂU -->
        <table class="eval-box">
          <tr>
            <td style="width: 25%; text-align: center;"><b>Điểm Đọc hiểu & LTVC</b></td>
            <td style="width: 50%; text-align: center;"><b>Nhận xét của giáo viên</b></td>
            <td style="width: 25%; text-align: center;"><b>Chữ kí PHHS</b></td>
          </tr>
          <tr>
            <td style="height: 50px; text-align: center; font-weight: bold; font-size: 13pt;">......... / ${compScoreStr}đ</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </table>

        <div class="section-heading">PHẦN ĐỌC HIỂU VÀ KIẾN THỨC TIẾNG VIỆT (${compScoreStr} điểm)</div>
        <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 4pt; font-style: italic; line-height: 1.0;">Đọc thầm bài văn sau và hoàn thành các bài tập bên dưới:</p>

        <div class="reading-box">
          <div style="text-align: center; font-weight: bold; font-size: 13.5pt; text-transform: uppercase; margin-bottom: 2pt; line-height: 1.0; font-family: 'Times New Roman', serif;">
            ${rd.comprehensionReading?.title || "BÀI ĐỌC THẦM"}
          </div>
          ${rd.comprehensionReading?.author ? `<div style="text-align: center; font-style: italic; font-size: 11pt; margin-bottom: 6pt; line-height: 1.0; font-family: 'Times New Roman', serif;">Tác giả: ${rd.comprehensionReading.author}</div>` : ''}
          <div style="text-align: justify; text-indent: 1.5rem; line-height: 1.0; font-family: 'Times New Roman', serif; font-size: 13pt;">
            ${rd.comprehensionReading?.passage || ""}
          </div>
        </div>

        <p style="margin: 0pt; margin-top: 4pt; margin-bottom: 6pt; font-style: italic; font-weight: bold; line-height: 1.0;">Khoanh vào chữ cái trước câu trả lời đúng và thực hiện các yêu cầu:</p>

        ${(rd.questions || []).map(function(q) {
          if (q.type === 'mcq' || q.type === 'true_false' || q.type === 'matching' || q.type === 'fill_blank') {
            return AIService.renderQuestionItem(q, true);
          } else {
            return `
              <div class="q-block" style="margin: 0pt; margin-top: 6pt; margin-bottom: 8pt; line-height: 1.0; font-family: 'Times New Roman', serif; font-size: 13pt;">
                <div style="line-height: 1.0; margin: 0pt; margin-bottom: 2pt;"><b>Câu ${q.num}</b> (${q.score ? q.score.toString().replace('.', ',') : '1,0'} điểm - ${q.level || 'Mức 2'}): ${q.text}</div>
                <div style="margin-top: 4px;">
                  <div class="dotted-line"></div>
                  <div class="dotted-line"></div>
                </div>
              </div>
            `;
          }
        }).join('')}

        <!-- ========================================== -->
        <!-- TRANG 2: PHIẾU KIỂM TRA VIẾT (10 ĐIỂM)    -->
        <!-- ========================================== -->
        ${WORD_PAGE_BREAK}

        <table class="header-table">
          <tr>
            <td style="width: 48%; text-align: left;">
              <b>${exam.schoolName || "TRƯỜNG TIỂU HỌC ................................."}</b><br>
              Họ và tên: ...................................................<br>
              Lớp: ${exam.grade}.....
            </td>
            <td style="width: 52%; text-align: left;">
              <i>Thứ….. ngày … tháng … năm 2026</i><br>
              <b style="font-size: 13.5pt; text-transform: uppercase;">PHIẾU KIỂM TRA VIẾT</b><br>
              <b>MÔN: TIẾNG VIỆT - LỚP ${exam.grade}</b><br>
              <i>Thời gian làm bài: 35 - 40 phút</i>
            </td>
          </tr>
        </table>

        ${grade <= 3 ? `
          <!-- KHUNG ĐÁNH GIÁ 3 Ô PHẦN VIẾT LỚP 1-3 -->
          <table class="eval-box">
            <tr>
              <td style="width: 18%; text-align: center;"><b>Chính tả</b></td>
              <td style="width: 18%; text-align: center;"><b>Tập làm văn</b></td>
              <td style="width: 18%; text-align: center;"><b>Tổng điểm Viết</b></td>
              <td style="width: 28%; text-align: center;"><b>Nhận xét của giáo viên</b></td>
              <td style="width: 18%; text-align: center;"><b>Chữ kí PHHS</b></td>
            </tr>
            <tr>
              <td style="height: 55px; text-align: center;">......... / ${(wr.dictation?.score || 4.0).toFixed(1).replace('.', ',')}đ</td>
              <td style="text-align: center;">......... / ${(wr.paragraphWriting?.score || 6.0).toFixed(1).replace('.', ',')}đ</td>
              <td style="text-align: center; font-weight: bold; font-size: 13pt;">......... / 10đ</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </table>

          <!-- PHẦN 1: CHÍNH TẢ (LỚP 1-3) -->
          <div class="section-heading">I. CHÍNH TẢ (Nghe - viết) (${(wr.dictation?.score || 4.0).toFixed(1).replace('.', ',')} điểm)</div>
          <p style="margin: 0 0 6px 0; font-style: italic;">
            <b>${wr.dictation?.title || "Bài viết chính tả"}</b> ${wr.dictation?.author ? `(Tác giả: ${wr.dictation.author})` : ''}
          </p>

          <div style="margin-top: 10px;">
            <div class="dotted-line"></div>
            <div class="dotted-line"></div>
            <div class="dotted-line"></div>
            <div class="dotted-line"></div>
            <div class="dotted-line"></div>
            <div class="dotted-line"></div>
          </div>

          <!-- PHẦN 2: TẬP LÀM VĂN (LỚP 1-3) -->
          <div class="section-heading" style="margin-top: 18px;">II. TẬP LÀM VĂN (${(wr.paragraphWriting?.score || 6.0).toFixed(1).replace('.', ',')} điểm)</div>
          <p style="margin: 0 0 6px 0; font-weight: bold;">
            Đề bài: ${wr.paragraphWriting?.prompt || "Viết đoạn văn ngắn theo chủ điểm đã học."}
          </p>
          ${(wr.paragraphWriting?.suggestions && wr.paragraphWriting.suggestions.length > 0) ? `
            <div style="font-style: italic; margin-bottom: 6pt; font-size: 13pt; line-height: 1.0; font-family: 'Times New Roman', serif;">
              Gợi ý:
              ${wr.paragraphWriting.suggestions.map(function(s){ return `<div style="margin: 0pt; line-height: 1.0;">- ${s}</div>`; }).join('')}
            </div>
          ` : ''}

          <div style="margin-top: 8px;">
            <div class="dotted-line"></div>
            <div class="dotted-line"></div>
            <div class="dotted-line"></div>
            <div class="dotted-line"></div>
            <div class="dotted-line"></div>
            <div class="dotted-line"></div>
            <div class="dotted-line"></div>
            <div class="dotted-line"></div>
          </div>
        ` : `
          <!-- KHUNG ĐÁNH GIÁ TẬP LÀM VĂN LỚP 4-5 -->
          <table class="eval-box">
            <tr>
              <td style="width: 25%; text-align: center;"><b>Điểm Tập làm văn</b></td>
              <td style="width: 50%; text-align: center;"><b>Nhận xét của giáo viên</b></td>
              <td style="width: 25%; text-align: center;"><b>Chữ kí của PHHS</b></td>
            </tr>
            <tr>
              <td style="height: 55px; text-align: center; font-weight: bold; font-size: 13pt;">......... / 10đ</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </table>

          <div class="section-heading">TẬP LÀM VĂN (10,0 điểm)</div>
          <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 6pt; font-weight: bold; font-size: 13pt; line-height: 1.0; font-family: 'Times New Roman', serif;">
            Đề bài: ${wr.essay?.prompt || "Em hãy viết một bài văn hoàn chỉnh đúng thể loại đã học."}
          </p>
          ${(wr.essay?.suggestions && wr.essay.suggestions.length > 0) ? `
            <div style="font-style: italic; margin-bottom: 8pt; font-size: 13pt; line-height: 1.0; font-family: 'Times New Roman', serif; background: #fdfdfd; border: 1px dashed #aaa; padding: 6pt 10pt;">
              <b>Gợi ý dàn ý:</b>
              ${wr.essay.suggestions.map(function(s){ return `<div style="margin: 0pt; line-height: 1.0;">- ${s}</div>`; }).join('')}
            </div>
          ` : ''}

          <div style="margin-top: 10px;">
            <div class="dotted-line"></div>
            <div class="dotted-line"></div>
            <div class="dotted-line"></div>
            <div class="dotted-line"></div>
            <div class="dotted-line"></div>
            <div class="dotted-line"></div>
            <div class="dotted-line"></div>
            <div class="dotted-line"></div>
            <div class="dotted-line"></div>
            <div class="dotted-line"></div>
            <div class="dotted-line"></div>
            <div class="dotted-line"></div>
          </div>
        `}

        <!-- ========================================== -->
        <!-- TRANG 3: MA TRẬN ĐỀ KIỂM TRA TIẾNG VIỆT   -->
        <!-- ========================================== -->
        ${WORD_PAGE_BREAK}

        <div class="title-bold-center">MA TRẬN ĐỀ KIỂM TRA ĐỊNH KỲ ${termInfo.matrixTitle} MÔN TIẾNG VIỆT LỚP ${exam.grade}</div>
        <div class="subtitle-center" style="margin-bottom: 14px;">Bộ sách: ${exam.bookSeries || 'Kết nối tri thức với cuộc sống (KNTT)'} • Năm học ${exam.schoolYear || '2026 - 2027'}</div>

        <div class="section-heading">I. MA TRẬN NỘI DUNG VÀ MỨC ĐỘ NHẬN THỨC PHẦN ĐỌC HIỂU (${compScoreStr} ĐIỂM)</div>
        ${exam.threeTierMatrix ? AIService.renderThreeTierMatrixTable(exam.threeTierMatrix, { isWord: true }) : `
        <table class="matrix-table">
          <thead>
            <tr>
              <th rowspan="2" style="width: 35%;">Mạch kiến thức, kĩ năng</th>
              <th colspan="3">Mức độ nhận thức (TT 27)</th>
              <th rowspan="2" style="width: 15%;">Tổng điểm</th>
            </tr>
            <tr>
              <th>Mức 1</th>
              <th>Mức 2</th>
              <th>Mức 3</th>
            </tr>
          </thead>
          <tbody>
            ${(exam.matrix?.readingMatrix || []).map(function(r) {
              return `
                <tr>
                  <td style="text-align: left; font-weight: 500;">${r.component}</td>
                  <td>${r.m1 || '-'}</td>
                  <td>${r.m2 || '-'}</td>
                  <td>${r.m3 || '-'}</td>
                  <td><b>${r.total || '-'}đ</b></td>
                </tr>
              `;
            }).join('')}
            <tr style="font-weight: bold; background-color: #f2f2f2;">
              <td style="text-align: left;">Tổng cộng Phần Đọc</td>
              <td>4,0đ</td>
              <td>4,0đ</td>
              <td>2,0đ</td>
              <td>10,0đ</td>
            </tr>
          </tbody>
        </table>
        `}

        <div class="section-heading">II. MA TRẬN NỘI DUNG VÀ MỨC ĐỘ NHẬN THỨC PHẦN VIẾT (10 ĐIỂM)</div>
        <table class="matrix-table">
          <thead>
            <tr>
              <th style="width: 45%;">Nội dung kiểm tra</th>
              <th style="width: 30%;">Mức độ đáp ứng</th>
              <th style="width: 25%;">Điểm số</th>
            </tr>
          </thead>
          <tbody>
            ${(exam.matrix?.writingMatrix || []).map(function(w) {
              return `
                <tr>
                  <td style="text-align: left; font-weight: 500;">${w.component}</td>
                  <td>${w.level}</td>
                  <td><b>${w.score} điểm</b></td>
                </tr>
              `;
            }).join('')}
            <tr style="font-weight: bold; background-color: #f2f2f2;">
              <td style="text-align: left;">Tổng cộng Phần Viết</td>
              <td>Chuẩn năng lực TT 27</td>
              <td>10,0 điểm</td>
            </tr>
          </tbody>
        </table>

        <!-- ========================================== -->
        <!-- TRANG 4: HƯỚNG DẪN CHẤM VÀ BAREM ĐIỂM     -->
        <!-- ========================================== -->
        ${WORD_PAGE_BREAK}

        <div class="title-bold-center">HƯỚNG DẪN CHẤM VÀ ĐÁP ÁN MÔN TIẾNG VIỆT LỚP ${exam.grade}</div>
        <div class="subtitle-center">Chuẩn đánh giá học sinh Tiểu học theo Thông tư 27/2020/TT-BGDĐT</div>

        <!-- 1. HƯỚNG DẪN CHẤM ĐỌC THÀNH TIẾNG -->
        <div class="section-heading">A. HƯỚNG DẪN CHẤM ĐỌC THÀNH TIẾNG (${oralScoreStr} ĐIỂM)</div>
        <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 4pt; font-size: 13pt; line-height: 1.0; font-family: 'Times New Roman', serif; white-space: pre-line;">
          ${exam.teacherGuide?.oralGuide?.criteria || "- Đọc đúng, rõ ràng, phát âm chuẩn.\n- Trả lời đúng câu hỏi đọc hiểu được 1,0 điểm."}
        </p>

        <div style="font-weight: bold; margin: 8px 0 4px 0; color: #1e3a8a;">
          DANH SÁCH TOÀN BỘ CÂU HỎI VÀ GỢI Ý TRẢ LỜI 5 PHIẾU ĐỌC THÀNH TIẾNG:
        </div>
        <table class="matrix-table" style="text-align: left;">
          <thead>
            <tr>
              <th style="width: 25%; text-align: center;">Phiếu / Bài đọc</th>
              <th style="width: 35%; text-align: center;">Hệ thống câu hỏi trong SGK</th>
              <th style="width: 40%; text-align: center;">Gợi ý câu trả lời chuẩn xác</th>
            </tr>
          </thead>
          <tbody>
            ${(function() {
              var list = (rd.oralItems && rd.oralItems.length > 0) ? rd.oralItems : (exam.teacherGuide?.oralGuide?.qaList || []);
              return list.map(function(item, idx) {
                var title = item.title || item.lessonTitle || `Bài đọc ${idx + 1}`;
                var volPage = [];
                if (item.bookVolume) volPage.push(item.bookVolume);
                if (item.page) volPage.push(item.page.includes('Trang') ? item.page : `Trang ${item.page}`);
                var src = volPage.length > 0 ? `(${volPage.join(' - ')})` : '';

                var qList = [];
                if (Array.isArray(item.questions) && item.questions.length > 0) {
                  qList = item.questions;
                } else if (item.question) {
                  qList = item.question.split(/\n+/).map(s => s.trim()).filter(Boolean);
                }

                var aList = [];
                if (Array.isArray(item.answers) && item.answers.length > 0) {
                  aList = item.answers;
                } else if (item.answer) {
                  aList = item.answer.split(/\n+/).map(s => s.trim()).filter(Boolean);
                }

                var qHtml = qList.map(function(qText, qIdx) {
                  var prefix = qText.trim().match(/^(Câu\s*\d+|\d+[\.\:])/i) ? '' : `Câu ${qIdx + 1}: `;
                  return `<div style="margin-bottom: 4px; line-height: 1.35;"><b>${prefix}</b>${qText}</div>`;
                }).join('') || (item.question || '-');

                var aHtml = aList.map(function(aText, aIdx) {
                  var prefix = aText.trim().match(/^(Câu\s*\d+|\d+[\.\:]|Ý\s*\d+)/i) ? '' : `Gợi ý ${aIdx + 1}: `;
                  return `<div style="margin-bottom: 4px; line-height: 1.35; color: #15803d;"><b>${prefix}</b>${aText}</div>`;
                }).join('') || `<b>${item.answer || '-'}</b>`;

                return `
                  <tr>
                    <td style="font-weight: bold; vertical-align: top;">
                      Phiếu ${idx + 1}: ${title}<br>
                      <span style="font-size: 9.5pt; font-weight: normal; color: #555;">${src}</span>
                    </td>
                    <td style="vertical-align: top; font-size: 10.5pt;">${qHtml}</td>
                    <td style="vertical-align: top; font-size: 10.5pt;">${aHtml}</td>
                  </tr>
                `;
              }).join('');
            })()}
          </tbody>
        </table>

        <!-- 2. HƯỚNG DẪN CHẤM ĐỌC HIỂU -->
        <div class="section-heading" style="margin-top: 14px;">B. ĐÁP ÁN ĐỌC HIỂU VÀ KIẾN THỨC TIẾNG VIỆT (${compScoreStr} ĐIỂM)</div>
        <table class="matrix-table">
          <thead>
            <tr>
              <th style="width: 15%;">Câu</th>
              <th style="width: 25%;">Đáp án / Nội dung</th>
              <th style="width: 60%;">Hướng dẫn chấm chi tiết</th>
            </tr>
          </thead>
          <tbody>
            ${(exam.teacherGuide?.comprehensionAnswers || []).map(function(ans) {
              return `
                <tr>
                  <td style="font-weight: bold; text-align: center;">Câu ${ans.num}</td>
                  <td style="font-weight: bold; color: #b91c1c; text-align: center; font-size: 12pt;">${ans.ans}</td>
                  <td style="text-align: left; vertical-align: top;">${ans.explain}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>

        <!-- 3. HƯỚNG DẪN CHẤM PHẦN VIẾT -->
        <div class="section-heading" style="margin-top: 14px;">C. HƯỚNG DẪN CHẤM PHẦN VIẾT (10 ĐIỂM)</div>
        ${grade <= 3 ? `
          <div style="font-weight: bold; margin-bottom: 3pt; font-size: 13pt; line-height: 1.0; font-family: 'Times New Roman', serif;">1. Chính tả (${(wr.dictation?.score || 4.0).toFixed(1).replace('.', ',')} điểm):</div>
          <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 4pt; font-size: 13pt; line-height: 1.0; font-family: 'Times New Roman', serif; white-space: pre-line;">
            ${exam.teacherGuide?.writingGuide?.dictationCriteria || "- Viết đúng mẫu chữ, độ đều nét, trình bày sạch: 1,0đ\n- Mỗi lỗi chính tả (âm đầu, vần, thanh, hoa): trừ 0,5đ"}
          </p>

          <div style="font-weight: bold; margin: 8px 0 4px 0;">2. Tập làm văn - Viết đoạn văn (${(wr.paragraphWriting?.score || 6.0).toFixed(1).replace('.', ',')} điểm):</div>
          <table class="matrix-table" style="text-align: left;">
            <thead>
              <tr>
                <th style="width: 30%; text-align: center;">Tiêu chí đánh giá</th>
                <th style="width: 20%; text-align: center;">Điểm</th>
                <th style="width: 50%; text-align: center;">Yêu cầu cần đạt</th>
              </tr>
            </thead>
            <tbody>
              ${(wr.paragraphWriting?.rubric || []).map(function(rub) {
                return `
                  <tr>
                    <td style="font-weight: bold;">${rub.criteria}</td>
                    <td style="text-align: center; font-weight: bold;">${rub.score}</td>
                    <td>${rub.detail}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        ` : `
          <div style="font-weight: bold; margin-bottom: 6px;">Barem chấm điểm Bài văn hoàn chỉnh (10,0 điểm):</div>
          <table class="matrix-table" style="text-align: left;">
            <thead>
              <tr>
                <th style="width: 25%; text-align: center;">Tiêu chí chấm</th>
                <th style="width: 15%; text-align: center;">Điểm</th>
                <th style="width: 60%; text-align: center;">Yêu cầu chi tiết</th>
              </tr>
            </thead>
            <tbody>
              ${(wr.essay?.rubric || []).map(function(rub) {
                return `
                  <tr>
                    <td style="font-weight: bold;">${rub.criteria}</td>
                    <td style="text-align: center; font-weight: bold;">${rub.score}</td>
                    <td>${rub.detail}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        `}

        <!-- ========================================================================= -->
        <!-- TRANG 5: ĐẶC TẢ SIÊU DỮ LIỆU & HƯỚNG DẪN MÃ HÓA THEO CHUẨN SEA-PLM        -->
        <!-- ========================================================================= -->
        ${WORD_PAGE_BREAK}

        <div class="title-bold-center">ĐẶC TẢ SIÊU DỮ LIỆU & HƯỚNG DẪN MÃ HÓA THEO CHUẨN SEA-PLM</div>
        <div class="subtitle-center">Chương trình Đánh giá kết quả học tập học sinh Tiểu học khu vực Đông Nam Á (Bộ GD&ĐT)</div>

        <!-- 1. BẢNG MÔ TẢ SIÊU DỮ LIỆU CÂU HỎI -->
        <div class="section-heading">1. BẢNG MÔ TẢ SIÊU DỮ LIỆU CÂU HỎI (ITEM METADATA TABLE)</div>
        <table class="matrix-table" style="text-align: left; margin-bottom: 20px;">
          <thead>
            <tr style="background-color: #f2f2f2; font-weight: bold; text-align: center;">
              <th style="width: 14%; text-align: center;">Mã câu</th>
              <th style="width: 8%; text-align: center;">Thứ tự</th>
              <th style="width: 18%; text-align: center;">Bối cảnh (Context)</th>
              <th style="width: 18%; text-align: center;">Miền nội dung</th>
              <th style="width: 16%; text-align: center;">Quá trình nhận thức</th>
              <th style="width: 10%; text-align: center;">Độ khó</th>
              <th style="width: 10%; text-align: center;">Dạng câu</th>
              <th style="width: 6%; text-align: center;">Điểm</th>
            </tr>
          </thead>
          <tbody>
            ${(function() {
              var metaList = exam.seaplmMetadataTable ? JSON.parse(JSON.stringify(exam.seaplmMetadataTable)) : [];
              if (!metaList || metaList.length === 0) {
                var order = 1;
                (exam.readingExam?.questions || []).forEach(function(q) {
                  metaList.push({
                    itemCode: q.itemCode || `TV${exam.grade}_RD_${String(q.num).padStart(2, '0')}`,
                    order: order++,
                    context: q.metadata?.context || "Môi trường xung quanh (Local community)",
                    contentDomain: q.metadata?.contentDomain || (q.category === 'lang' ? 'Luyện từ và câu' : 'Đọc hiểu văn bản'),
                    cognitiveProcess: q.metadata?.cognitiveProcess || (q.level === 'Mức 1' ? 'Xác định thông tin (Locate)' : q.level === 'Mức 2' ? 'Kết nối & Suy luận (Interpret)' : 'Phản hồi & Đánh giá (Reflect)'),
                    difficulty: q.metadata?.difficulty || (q.level === 'Mức 1' ? 'Dễ' : q.level === 'Mức 2' ? 'Trung bình' : 'Khó'),
                    itemType: q.type === 'mcq' ? "Trắc nghiệm 4 lựa chọn (MCQ)" : "Tự luận ngắn (Constructed Response)",
                    score: q.score || 0.5
                  });
                });
                if (exam.writingExam?.paragraphWriting) {
                  metaList.push({
                    itemCode: `TV${exam.grade}_WR_01`,
                    order: order++,
                    context: "Cá nhân (Personal)",
                    contentDomain: "Kỹ năng Viết (Tập làm văn)",
                    cognitiveProcess: "Vận dụng thực hành (Writing)",
                    difficulty: "Trung bình",
                    itemType: "Tự luận viết đoạn",
                    score: exam.writingExam.paragraphWriting.score || 6.0
                  });
                } else if (exam.writingExam?.essay) {
                  metaList.push({
                    itemCode: `TV${exam.grade}_WR_01`,
                    order: order++,
                    context: "Môi trường xung quanh (Local community)",
                    contentDomain: "Kỹ năng Viết (Tập làm văn)",
                    cognitiveProcess: "Vận dụng thực hành (Writing)",
                    difficulty: "Khó",
                    itemType: "Tự luận bài văn hoàn chỉnh",
                    score: 10.0
                  });
                }
              }
              return metaList.map(function(item) {
                return `
                  <tr>
                    <td style="font-weight: bold; text-align: center;">${item.itemCode || '-'}</td>
                    <td style="text-align: center;">Câu ${item.order || '-'}</td>
                    <td>${item.context || '-'}</td>
                    <td>${item.contentDomain || '-'}</td>
                    <td>${item.cognitiveProcess || '-'}</td>
                    <td style="text-align: center;">${item.difficulty || '-'}</td>
                    <td style="text-align: center;">${item.itemType || '-'}</td>
                    <td style="text-align: center; font-weight: bold;">${item.score ? item.score.toString().replace('.', ',') : '-'}</td>
                  </tr>
                `;
              }).join('');
            })()}
          </tbody>
        </table>

        <!-- 2. PHÂN TÍCH CƠ SỞ PHƯƠNG ÁN ĐÚNG VÀ PHƯƠNG ÁN NHIỄU -->
        <div class="section-heading" style="margin-top: 16px;">2. PHÂN TÍCH CƠ SỞ PHƯƠNG ÁN ĐÚNG VÀ PHƯƠNG ÁN NHIỄU (DISTRACTOR RATIONALE)</div>
        <table class="matrix-table" style="text-align: left; margin-bottom: 20px;">
          <thead>
            <tr style="background-color: #f2f2f2; font-weight: bold;">
              <th style="width: 10%; text-align: center;">Câu</th>
              <th style="width: 8%; text-align: center;">Đáp án</th>
              <th style="width: 40%; text-align: center;">Cơ sở phương án đúng</th>
              <th style="width: 42%; text-align: center;">Phân tích các phương án nhiễu & Lỗi suy luận của học sinh</th>
            </tr>
          </thead>
          <tbody>
            ${(exam.readingExam?.questions || []).filter(function(q) { return q.type === 'mcq' || (q.options && q.options.length > 0); }).map(function(q) {
              var dr = q.distractorRationale || {};
              var correctText = dr.correct || q.explain || `Phương án ${q.ans} là chính xác.`;
              var distText = [];
              ['A', 'B', 'C', 'D'].forEach(function(opt) {
                if (opt !== q.ans) {
                  var reason = dr['distractor' + opt] || dr[opt];
                  if (reason) {
                    distText.push(`<b>Lựa chọn ${opt}:</b> ${reason}`);
                  }
                }
              });
              if (distText.length === 0) {
                distText.push(`<b>Các lựa chọn còn lại:</b> Học sinh chọn nhầm do đọc lướt, hiểu sai chi tiết trong bài hoặc nhầm khái niệm từ ngữ.`);
              }
              return `
                <tr>
                  <td style="text-align: center; font-weight: bold; vertical-align: top;">Câu ${q.num}</td>
                  <td style="text-align: center; font-weight: bold; color: #b91c1c; vertical-align: top; font-size: 12pt;">${q.ans}</td>
                  <td style="vertical-align: top; color: #15803d;">${correctText}</td>
                  <td style="vertical-align: top; color: #475569;">${distText.join('<br>')}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>

        <!-- 3. HƯỚNG DẪN MÃ HÓA CHI TIẾT (CODING GUIDE) THEO CHUẨN SEA-PLM -->
        <div class="section-heading" style="margin-top: 16px;">3. HƯỚNG DẪN MÃ HÓA CHI TIẾT (CODING GUIDE) THEO CHUẨN SEA-PLM</div>
        
        <!-- Câu tự luận đọc hiểu (nếu có) -->
        ${(exam.readingExam?.questions || []).filter(function(q) { return q.type === 'constructed' || q.codingGuide; }).map(function(q) {
          var cg = q.codingGuide || {
            maxCode: "Mã 2",
            codes: [
              { code: "Mã 2", description: "Mức tối đa: Trả lời chính xác, trọn vẹn ý và câu văn gãy gọn.", sampleResponse: q.explain || "Học sinh trả lời đầy đủ ý." },
              { code: "Mã 1", description: "Mức chưa tối đa: Trả lời đúng ý chính nhưng diễn đạt chưa trọn vẹn hoặc sai chính tả.", sampleResponse: "Học sinh trả lời được một phần ý." },
              { code: "Mã 0", description: "Mức không đạt: Trả lời sai hoàn toàn hoặc không liên quan.", sampleResponse: "Trả lời lạc đề hoặc vô nghĩa." },
              { code: "Mã 9", description: "Bỏ trống không làm bài.", sampleResponse: "[Học sinh để giấy trắng]" }
            ]
          };
          return `
            <div style="margin-bottom: 14px;">
              <div style="font-weight: bold; color: #1e3a8a; margin-bottom: 4px;">
                Câu ${q.num} (Tự luận Đọc hiểu): ${q.text}
              </div>
              <table class="matrix-table" style="text-align: left;">
                <thead>
                  <tr style="background-color: #f2f2f2; font-weight: bold;">
                    <th style="width: 12%; text-align: center;">Mã hóa</th>
                    <th style="width: 48%; text-align: center;">Tiêu chí đánh giá</th>
                    <th style="width: 40%; text-align: center;">Ví dụ bài làm mẫu của học sinh (Sample Response)</th>
                  </tr>
                </thead>
                <tbody>
                  ${(cg.codes || []).map(function(c) {
                    var badgeColor = c.code === 'Mã 2' ? '#15803d' : c.code === 'Mã 1' ? '#0369a1' : c.code === 'Mã 0' ? '#b91c1c' : '#64748b';
                    return `
                      <tr>
                        <td style="text-align: center; vertical-align: top; font-weight: bold; color: ${badgeColor};">
                          ${c.code}
                        </td>
                        <td style="vertical-align: top;">${c.description}</td>
                        <td style="vertical-align: top; font-style: italic; color: #334155;">${c.sampleResponse || '-'}</td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          `;
        }).join('')}

        <!-- Phần Tập làm văn -->
        ${(function() {
          var wrItem = exam.writingExam?.paragraphWriting || exam.writingExam?.essay;
          if (!wrItem) return '';
          var cg = wrItem.codingGuide || {
            maxCode: "Mã 2",
            codes: [
              { code: "Mã 2", description: "Mức tối đa: Bài viết đúng thể loại, đủ bố cục, diễn đạt sinh động, giàu cảm xúc, đúng chính tả ngữ pháp.", sampleResponse: "Học sinh viết thành văn mạch lạc, đúng yêu cầu đề bài." },
              { code: "Mã 1", description: "Mức chưa tối đa: Bài viết đúng thể loại nhưng miêu tả/kể sơ sài hoặc mắc một số lỗi ngữ pháp, chính tả.", sampleResponse: "Học sinh viết được bài nhưng ý còn đơn giản, câu chưa mượt mà." },
              { code: "Mã 0", description: "Mức không đạt: Lạc đề hoàn toàn hoặc chỉ viết được vài câu rời rạc.", sampleResponse: "Chỉ viết 1-2 câu không liên quan hoặc lạc sang chủ đề khác." },
              { code: "Mã 9", description: "Bỏ trống không làm bài.", sampleResponse: "[Học sinh để giấy trắng]" }
            ]
          };
          return `
            <div style="margin-bottom: 14px;">
              <div style="font-weight: bold; color: #1e3a8a; margin-bottom: 4px;">
                Phần Tập làm văn (${exam.grade <= 3 ? 'Viết đoạn văn' : 'Bài văn hoàn chỉnh'}): ${wrItem.prompt || 'Yêu cầu đề bài'}
              </div>
              <table class="matrix-table" style="text-align: left;">
                <thead>
                  <tr style="background-color: #f2f2f2; font-weight: bold;">
                    <th style="width: 12%; text-align: center;">Mã hóa</th>
                    <th style="width: 48%; text-align: center;">Tiêu chí đánh giá</th>
                    <th style="width: 40%; text-align: center;">Ví dụ bài làm mẫu của học sinh (Sample Response)</th>
                  </tr>
                </thead>
                <tbody>
                  ${(cg.codes || []).map(function(c) {
                    var badgeColor = c.code === 'Mã 2' ? '#15803d' : c.code === 'Mã 1' ? '#0369a1' : c.code === 'Mã 0' ? '#b91c1c' : '#64748b';
                    return `
                      <tr>
                        <td style="text-align: center; vertical-align: top; font-weight: bold; color: ${badgeColor};">
                          ${c.code}
                        </td>
                        <td style="vertical-align: top;">${c.description}</td>
                        <td style="vertical-align: top; font-style: italic; color: #334155;">${c.sampleResponse || '-'}</td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          `;
        })()}

        </div>
      </body>
      </html>
    `;

    var sLower = (exam.bookSeries || 'kntt').toLowerCase();
    var seriesSlug = (sLower.includes("chân trời") || sLower === 'ctst') ? "CTST" : "KNTT";
    var termSlug = (examTerm || 'HK1').replace(/\s+/g, '_');
    var fn = `De_Kiem_Tra_${termSlug}_Tieng_Viet_Lop_${exam.grade}_${seriesSlug}_2026_2027.docx`;
    await this.downloadWordBlob(docHtml, fn);
    return docHtml;
  },

  downloadWordBlob: async function(docHtml, filename) {
    if (typeof IntegrationService !== 'undefined' && IntegrationService.downloadWordBlob) {
      return await IntegrationService.downloadWordBlob(docHtml, filename);
    }
    if (typeof document === "undefined" || typeof Blob === "undefined") {
      return { success: false };
    }
    var finalFilename = filename || 'De_Kiem_Tra.docx';
    var jszipObj = (typeof JSZip !== 'undefined') ? JSZip : ((typeof window !== 'undefined' && window.JSZip) ? window.JSZip : null);
    var blob = null;
    var isDocx = false;

    if (jszipObj) {
      try {
        var zip = new jszipObj();
        zip.file('_rels/.rels', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
          '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n' +
          '  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>\n' +
          '</Relationships>');
        zip.file('[Content_Types].xml', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
          '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">\n' +
          '  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>\n' +
          '  <Default Extension="xml" ContentType="application/xml"/>\n' +
          '  <Default Extension="html" ContentType="text/html"/>\n' +
          '  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>\n' +
          '  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>\n' +
          '  <Override PartName="/word/fontTable.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.fontTable+xml"/>\n' +
          '</Types>');
        zip.file('word/_rels/document.xml.rels', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
          '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n' +
          '  <Relationship Id="htmlChunk" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/aFChunk" Target="content.html"/>\n' +
          '  <Relationship Id="rIdStyles" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>\n' +
          '  <Relationship Id="rIdFontTable" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable" Target="fontTable.xml"/>\n' +
          '</Relationships>');
        var stylesXml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
          '<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n' +
          '  <w:docDefaults>\n' +
          '    <w:rPrDefault>\n' +
          '      <w:rPr>\n' +
          '        <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:eastAsia="Times New Roman" w:cs="Times New Roman"/>\n' +
          '        <w:sz w:val="26"/>\n' +
          '        <w:szCs w:val="26"/>\n' +
          '        <w:lang w:val="vi-VN"/>\n' +
          '      </w:rPr>\n' +
          '    </w:rPrDefault>\n' +
          '    <w:pPrDefault>\n' +
          '      <w:pPr>\n' +
          '        <w:spacing w:after="0" w:line="240" w:lineRule="auto"/>\n' +
          '      </w:pPr>\n' +
          '    </w:pPrDefault>\n' +
          '  </w:docDefaults>\n' +
          '  <w:style w:type="paragraph" w:default="1" w:styleId="Normal">\n' +
          '    <w:name w:val="Normal"/>\n' +
          '    <w:qFormat/>\n' +
          '    <w:rPr>\n' +
          '      <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:eastAsia="Times New Roman" w:cs="Times New Roman"/>\n' +
          '      <w:sz w:val="26"/>\n' +
          '      <w:szCs w:val="26"/>\n' +
          '    </w:rPr>\n' +
          '  </w:style>\n' +
          '  <w:style w:type="table" w:default="1" w:styleId="TableNormal">\n' +
          '    <w:name w:val="Normal Table"/>\n' +
          '    <w:uiPriority w:val="99"/>\n' +
          '    <w:semiHidden/>\n' +
          '    <w:unhideWhenUsed/>\n' +
          '    <w:rPr>\n' +
          '      <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:eastAsia="Times New Roman" w:cs="Times New Roman"/>\n' +
          '      <w:sz w:val="26"/>\n' +
          '      <w:szCs w:val="26"/>\n' +
          '    </w:rPr>\n' +
          '    <w:tblPr/>\n' +
          '  </w:style>\n' +
          '  <w:style w:type="table" w:styleId="TableGrid">\n' +
          '    <w:name w:val="Table Grid"/>\n' +
          '    <w:basedOn w:val="TableNormal"/>\n' +
          '    <w:uiPriority w:val="39"/>\n' +
          '    <w:rPr>\n' +
          '      <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:eastAsia="Times New Roman" w:cs="Times New Roman"/>\n' +
          '      <w:sz w:val="26"/>\n' +
          '      <w:szCs w:val="26"/>\n' +
          '    </w:rPr>\n' +
          '  </w:style>\n' +
          '</w:styles>';
        zip.file('word/styles.xml', stylesXml);
        var fontTableXml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
          '<w:fonts xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">\n' +
          '  <w:font w:name="Times New Roman">\n' +
          '    <w:panose1 w:val="02020603050405020304"/>\n' +
          '    <w:charset w:val="00"/>\n' +
          '    <w:family w:val="roman"/>\n' +
          '    <w:pitch w:val="variable"/>\n' +
          '    <w:sig w:usb0="E0002EFF" w:usb1="C000785B" w:usb2="00000009" w:usb3="00000000" w:csb0="000001FF" w:csb1="00000000"/>\n' +
          '  </w:font>\n' +
          '</w:fonts>';
        zip.file('word/fontTable.xml', fontTableXml);
        zip.file('word/document.xml', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
          '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n' +
          '  <w:body>\n' +
          '    <w:altChunk r:id="htmlChunk"/>\n' +
          '    <w:sectPr>\n' +
          '      <w:pgSz w:w="11906" w:h="16838"/>\n' +
          '      <w:pgMar w:top="1134" w:right="851" w:bottom="1134" w:left="1701" w:header="720" w:footer="720" w:gutter="0"/>\n' +
          '    </w:sectPr>\n' +
          '  </w:body>\n' +
          '</w:document>');
        var cleanDocHtml = (docHtml || '').replace(/text-justify\s*:\s*inter-ideograph\s*;?/gi, '');
        if (cleanDocHtml.indexOf('<img') !== -1) {
          cleanDocHtml = cleanDocHtml.replace(/<img\b([^>]*)>/gi, function(fullTag, attrs) {
            var newAttrs = attrs;
            if (!/\bwidth\s*=/i.test(newAttrs)) {
              newAttrs = ' width="306"' + newAttrs;
            } else {
              newAttrs = newAttrs.replace(/\bwidth\s*=\s*["']?(\d+)["']?/i, function(m, w) {
                return (parseInt(w) > 350) ? 'width="306"' : m;
              });
            }
            if (/\bstyle\s*=\s*["']([^"']*)["']/i.test(newAttrs)) {
              newAttrs = newAttrs.replace(/\bstyle\s*=\s*["']([^"']*)["']/i, function(m, s) {
                var cleanStyle = s.replace(/(?:^|;)\s*(?:max-|min-)?width\s*:\s*[^;]+/gi, '').replace(/^;\s*/, '').trim();
                return 'style="width: 229.5pt; max-width: 100%; height: auto; display: block; margin: 4pt auto; ' + cleanStyle + '"';
              });
            } else {
              newAttrs += ' style="width: 229.5pt; max-width: 100%; height: auto; display: block; margin: 4pt auto;"';
            }
            return '<img' + newAttrs + '>';
          });
        }
        var fullHtml = cleanDocHtml.includes('<meta charset=') ? cleanDocHtml : ('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>' + cleanDocHtml + '</body></html>');
        zip.file('word/content.html', '\ufeff' + fullHtml);

        blob = await zip.generateAsync({
          type: 'blob',
          mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          compression: 'DEFLATE',
          compressionOptions: { level: 6 }
        });
        isDocx = true;
      } catch (e) {
        console.warn('Lỗi tạo .docx qua JSZip trong AIService:', e);
      }
    }

    if (isDocx) {
      if (finalFilename.toLowerCase().endsWith('.doc')) {
        finalFilename = finalFilename.slice(0, -4) + '.docx';
      } else if (!finalFilename.toLowerCase().endsWith('.docx')) {
        finalFilename += '.docx';
      }
    } else {
      // Fallback khi không có JSZip: lưu file .doc (Word 97-2003 HTML) mở êm đềm không bao giờ báo lỗi
      if (finalFilename.toLowerCase().endsWith('.docx')) {
        finalFilename = finalFilename.slice(0, -5) + '.doc';
      } else if (!finalFilename.toLowerCase().endsWith('.doc')) {
        finalFilename += '.doc';
      }
      blob = new Blob(['\ufeff' + docHtml], { type: "application/msword;charset=utf-8" });
    }

    // 1. Mở Hộp thoại Lưu File (Save As) của hệ điều hành
    if (typeof window !== "undefined" && typeof window.showSaveFilePicker === "function") {
      try {
        var pickerOpts = isDocx ? {
          suggestedName: finalFilename,
          types: [{
            description: "Tài liệu Microsoft Word (.docx)",
            accept: { "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"] }
          }]
        } : {
          suggestedName: finalFilename,
          types: [{
            description: "Tài liệu Microsoft Word (.doc)",
            accept: { "application/msword": [".doc"] }
          }]
        };
        var handle = await window.showSaveFilePicker(pickerOpts);
        var writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();
        if (typeof showToast === "function") {
          showToast("Đã lưu tệp Word vào máy tính thành công!", "success");
        }
        return { success: true, method: "picker" };
      } catch (err) {
        if (err && (err.name === "AbortError" || err.code === 20)) {
          if (typeof showToast === "function") {
            showToast("Bạn đã hủy lưu tệp Word.", "info");
          }
          return { success: false, aborted: true };
        }
        console.warn("showSaveFilePicker fallback:", err);
      }
    }

    // 2. Trình duyệt cũ IE / Edge Legacy
    if (typeof window !== "undefined" && window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, finalFilename);
      if (typeof showToast === "function") {
        showToast("Đã lưu tệp Word thành công!", "success");
      }
      return { success: true, method: "msSave" };
    }

    // 3. Chuẩn HTML5 download qua thẻ <a>
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = finalFilename;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
      if (a.parentNode) a.parentNode.removeChild(a);
      URL.revokeObjectURL(url);
    }, 1500);

    if (typeof showToast === "function") {
      showToast("Đã xuất file Word! Tệp đã lưu trong máy tính.", "success");
    }
    return { success: true, method: "direct" };
  }
};

if (typeof window !== 'undefined') {
  window.AIService = AIService;
}
if (typeof global !== 'undefined') {
  global.AIService = AIService;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AIService;
}
