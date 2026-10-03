/**
 * Quy định chuyên môn về Đánh giá định kỳ theo Thông tư 27/2020/TT-BGDĐT
 */

module.exports = {
  circularNumber: "27/2020/TT-BGDĐT",
  issuedDate: "04/09/2020",
  targetEducation: "Tiểu học (Lớp 1 đến Lớp 5)",
  maxScore: 10,
  allowDecimalPoints: false, // Điểm số nguyên từ 0 đến 10, không cho điểm thập phân
  
  cognitiveLevels: {
    M1: {
      code: "M1",
      name: "Mức 1",
      shortTitle: "Nhận biết & Tái hiện trực tiếp",
      definition: "Nhận biết, nhắc lại hoặc mô tả được nội dung đã học và áp dụng trực tiếp để giải quyết một số tình huống, vấn đề quen thuộc trong học tập.",
      cognitiveProcesses: [
        "Nhận biết hình ảnh, số lượng, chữ cái, từ ngữ, khái niệm cơ bản",
        "Nhắc lại quy tắc, công thức, định nghĩa đã học",
        "Mô tả lại đặc điểm, sự vật, hiện tượng quen thuộc",
        "Áp dụng trực tiếp 1 công thức/thao tác đơn giản giải bài toán mẫu",
        "Định vị thông tin hiển hiện trực tiếp trên văn bản (Locate information)"
      ],
      actionVerbs: [
        "Nêu", "Chỉ ra", "Kể tên", "Nhận biết", "Điền số/chữ trực tiếp",
        "Khoanh tròn", "Nhắc lại", "Đọc", "Viết đúng", "Tính giá trị trực tiếp 1 bước"
      ],
      cognitiveNature: "Thao tác tư duy 1 bước (Single-step cognition) trong bối cảnh hoàn toàn quen thuộc."
    },
    M2: {
      code: "M2",
      name: "Mức 2",
      shortTitle: "Kết nối & Sắp xếp giải quyết tình huống tương tự",
      definition: "Kết nối, sắp xếp được một số nội dung đã học để giải quyết vấn đề có nội dung tương tự.",
      cognitiveProcesses: [
        "Kết nối từ 2 dữ kiện hoặc 2 bước tính trở lên",
        "So sánh, phân loại, sắp xếp theo thứ tự hoặc nhóm thuộc tính",
        "Giải quyết bài toán có lời văn gồm 2 phép tính",
        "Suy luận ý nghĩa tiềm ẩn từ ngữ cảnh văn bản (Infer / Interpret)",
        "Ghép nối đúng giữa nguyên nhân và kết quả, khái niệm và ví dụ"
      ],
      actionVerbs: [
        "So sánh", "Phân loại", "Sắp xếp", "Giải thích vì sao (ở mức độ quen thuộc)",
        "Tính giá trị biểu thức nhiều bước", "Tìm thành phần chưa biết", "Tóm tắt", "Nối cột", "Liên hệ"
      ],
      cognitiveNature: "Thao tác tư duy đa bước (Multi-step cognition) trong bối cảnh bài tập có nội dung tương tự bài mẫu."
    },
    M3: {
      code: "M3",
      name: "Mức 3",
      shortTitle: "Vận dụng vào tình huống mới & Phản hồi thực tế",
      definition: "Vận dụng các nội dung đã học để giải quyết một số vấn đề mới hoặc đưa ra những phản hồi hợp lý trong học tập và cuộc sống.",
      cognitiveProcesses: [
        "Vận dụng kiến thức vào tình huống đời sống thực tế chưa từng có bài giải mẫu trước đó",
        "Phân tích dữ liệu thực tế (bảng biểu, thời gian biểu, giá cả thị trường, lịch trình)",
        "Lựa chọn phương án tối ưu, đưa ra lời khuyên hoặc biện pháp xử lý tình huống",
        "Tạo lập văn bản / lập luận phản hồi đánh giá (Reflect & Evaluate)",
        "Giải bài toán nâng cao có yếu tố tư duy logic hoặc bối cảnh địa phương"
      ],
      actionVerbs: [
        "Vận dụng", "Đề xuất", "Lựa chọn phương án", "Giải thích và chứng minh",
        "Nhận xét, đánh giá", "Thiết kế kế hoạch", "Xử lý tình huống", "Rút ra bài học"
      ],
      cognitiveNature: "Vận dụng linh hoạt, chuyển giao tri thức vào bối cảnh mới hoặc đánh giá phản hồi thực tế."
    }
  },

  // Quy định các đợt kiểm tra theo khối lớp
  examPeriods: {
    // Lớp 1, 2: Chỉ kiểm tra cuối học kỳ I (tuần 1 - 18) và cuối học kỳ II (tuần 19 - 35) đối với Toán, Tiếng Việt
    grade1_2: [
      { id: "end_term_1", name: "Cuối học kỳ I", weeksRange: [1, 18], semester: "Học kỳ 1", volume: 1, requiredSubjects: ["Toán", "Tiếng Việt"] },
      { id: "end_year", name: "Cuối học kỳ II", weeksRange: [19, 35], semester: "Học kỳ 2", volume: 2, requiredSubjects: ["Toán", "Tiếng Việt"] }
    ],
    // Lớp 3: Kiểm tra cuối học kỳ I (tuần 1 - 18) và cuối học kỳ II (tuần 19 - 35) cho Toán, Tiếng Việt, Tiếng Anh, Tin học, Công nghệ
    grade3: [
      { id: "end_term_1", name: "Cuối học kỳ I", weeksRange: [1, 18], semester: "Học kỳ 1", volume: 1, requiredSubjects: ["Toán", "Tiếng Việt", "Tiếng Anh", "Tin học", "Công nghệ"] },
      { id: "end_year", name: "Cuối học kỳ II", weeksRange: [19, 35], semester: "Học kỳ 2", volume: 2, requiredSubjects: ["Toán", "Tiếng Việt", "Tiếng Anh", "Tin học", "Công nghệ"] }
    ],
    // Lớp 4, 5 môn Toán & Tiếng Việt: 4 kỳ (Giữa HK1: 1-9, Cuối HK1: 10-18, Giữa HK2: 19-27, Cuối HK2: 28-35)
    grade4_5_math_tv: [
      { id: "mid_term_1", name: "Giữa học kỳ I", weeksRange: [1, 9], semester: "Học kỳ 1", volume: 1, requiredSubjects: ["Toán", "Tiếng Việt"] },
      { id: "end_term_1", name: "Cuối học kỳ I", weeksRange: [10, 18], semester: "Học kỳ 1", volume: 1, requiredSubjects: ["Toán", "Tiếng Việt"] },
      { id: "mid_term_2", name: "Giữa học kỳ II", weeksRange: [19, 27], semester: "Học kỳ 2", volume: 2, requiredSubjects: ["Toán", "Tiếng Việt"] },
      { id: "end_year", name: "Cuối học kỳ II", weeksRange: [28, 35], semester: "Học kỳ 2", volume: 2, requiredSubjects: ["Toán", "Tiếng Việt"] }
    ],
    // Lớp 4, 5 các môn Tiếng Anh, Tin học, Công nghệ, Khoa học, Lịch sử và Địa lí: 2 kỳ (Cuối HK1: 1-18, Cuối HK2: 19-35)
    grade4_5_others: [
      { id: "end_term_1", name: "Cuối học kỳ I", weeksRange: [1, 18], semester: "Học kỳ 1", volume: 1, requiredSubjects: ["Tiếng Anh", "Tin học", "Công nghệ", "Khoa học", "Lịch sử và Địa lí"] },
      { id: "end_year", name: "Cuối học kỳ II", weeksRange: [19, 35], semester: "Học kỳ 2", volume: 2, requiredSubjects: ["Tiếng Anh", "Tin học", "Công nghệ", "Khoa học", "Lịch sử và Địa lí"] }
    ]
  },

  // Hướng dẫn khung phân bổ điểm số chuẩn Thông tư 27
  scoreDistributionGuide: {
    m1Range: { min: 5.5, max: 7.0, minPct: 55, maxPct: 70, label: "Mức 1 (Nhận biết): 5,5 - 7,0 điểm" },
    m2Range: { min: 1.5, max: 2.0, minPct: 15, maxPct: 20, label: "Mức 2 (Kết nối): 1,5 - 2,0 điểm" },
    m3Range: { min: 0.5, max: 1.5, minPct: 5, maxPct: 15, label: "Mức 3 (Vận dụng): 0,5 - 1,5 điểm" },
    description: "Khung chuẩn TT27: Mức 1 từ 5,5 - 7,0 điểm (55% - 70%), Mức 2 từ 1,5 - 2,0 điểm (15% - 20%), Mức 3 từ 0,5 - 1,5 điểm (5% - 15%)."
  },

  // Tỷ lệ phân bổ điểm số khuyến nghị chuẩn Bộ GD&ĐT (Ưu tiên Mức 1 từ 5,5 - 7 điểm, Mức 2 từ 1,5 - 2 điểm, Mức 3 từ 0,5 - 1,5 điểm)
  standardMatrixPresets: [
    {
      id: "standard_tt27_65_20_15",
      name: "Mô hình Chuẩn TT27 (6,5 - 2,0 - 1,5)",
      description: "Khuyến nghị chuẩn nhất: 65% Mức 1 (6,5 điểm), 20% Mức 2 (2,0 điểm), 15% Mức 3 (1,5 điểm)",
      ratios: { M1: 65, M2: 20, M3: 15 },
      points: { M1: 6.5, M2: 2.0, M3: 1.5 },
      isDefault: true
    },
    {
      id: "fundamental_70_20_10",
      name: "Mô hình Nhận biết (7,0 - 2,0 - 1,0)",
      description: "Tăng cường củng cố: 70% Mức 1 (7,0 điểm), 20% Mức 2 (2,0 điểm), 10% Mức 3 (1,0 điểm)",
      ratios: { M1: 70, M2: 20, M3: 10 },
      points: { M1: 7.0, M2: 2.0, M3: 1.0 }
    },
    {
      id: "balanced_60_25_15",
      name: "Mô hình Cân đối (6,0 - 2,5 - 1,5)",
      description: "60% Mức 1 (6,0 điểm), 25% Mức 2 (2,5 điểm), 15% Mức 3 (1,5 điểm)",
      ratios: { M1: 60, M2: 25, M3: 15 },
      points: { M1: 6.0, M2: 2.5, M3: 1.5 }
    },
    {
      id: "balanced_55_25_20",
      name: "Mô hình Nền tảng (5,5 - 2,5 - 2,0)",
      description: "55% Mức 1 (5,5 điểm), 25% Mức 2 (2,5 điểm), 20% Mức 3 (2,0 điểm)",
      ratios: { M1: 55, M2: 25, M3: 20 },
      points: { M1: 5.5, M2: 2.5, M3: 2.0 }
    },
    {
      id: "balanced_442",
      name: "Mô hình Cân bằng cũ (4 - 4 - 2)",
      description: "Mô hình tham khảo: 40% Mức 1 (4,0 điểm), 40% Mức 2 (4,0 điểm), 20% Mức 3 (2,0 điểm)",
      ratios: { M1: 40, M2: 40, M3: 20 },
      points: { M1: 4.0, M2: 4.0, M3: 2.0 }
    }
  ]
};
