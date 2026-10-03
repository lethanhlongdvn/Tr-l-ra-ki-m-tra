/**
 * Tiêu chuẩn đánh giá năng lực theo chương trình SEA-PLM
 * (Southeast Asia Primary Learning Metrics)
 */

module.exports = {
  programName: "Chương trình đánh giá kết quả học tập của học sinh tiểu học khu vực Đông Nam Á (SEA-PLM)",
  corePhilosophy: "Đánh giá năng lực giải quyết vấn đề trong bối cảnh cuộc sống thực tế thế kỷ 21",
  
  // 3 Loại bối cảnh chủ đạo
  contextFramework: {
    personal: {
      type: "personal",
      name: "Bối cảnh Cá nhân",
      description: "Gắn liền với cuộc sống riêng, gia đình, sở thích, sinh hoạt hàng ngày của học sinh",
      examples: [
        "Quản lý tiền tiêu vặt, tiền mừng tuổi hoặc tiền nuôi heo đất",
        "Lựa chọn mua đồ dùng học tập, đồ chơi an toàn, quần áo",
        "Thời gian biểu một ngày nghỉ hoặc kế hoạch học tập cá nhân",
        "Sức khỏe cá nhân: thói quen ăn uống dinh dưỡng, đánh răng, tập thể dục",
        "Đọc hướng dẫn sử dụng đồ chơi, cách lắp ráp mô hình thủ công"
      ]
    },
    internal_environment: {
      type: "internal_environment",
      name: "Bối cảnh Môi trường gần gũi (Trường học & Gia đình)",
      description: "Tập trung vào sự tương tác giữa học sinh với bạn bè, thầy cô, người thân và trường lớp",
      examples: [
        "Hoạt động trực nhật lớp, phân loại rác thải tại sân trường",
        "Tổ chức hội chợ trường học, bán sách cũ gây quỹ giúp bạn nghèo",
        "Thời khóa biểu, lịch mượn sách thư viện, bảng phân công tổ",
        "Quy tắc an toàn giao thông trước cổng trường, đi bộ sang đường",
        "Lá thư gửi người thân, thông báo sinh hoạt câu lạc bộ trường"
      ]
    },
    wider_environment: {
      type: "wider_environment",
      name: "Bối cảnh Xã hội & Thiên nhiên (Địa phương & Toàn cầu)",
      description: "Tập trung vào môi trường xung quanh rộng lớn, cộng đồng địa phương, bảo tồn thiên nhiên",
      examples: [
        "Địa danh, làng nghề truyền thống và danh lam thắng cảnh quê hương (gốm Mang Thít, cù lao An Bình, vườn dừa Bến Tre...)",
        "Giao thông sông nước: cano, đò phà, qua cầu vượt sông Tiền, sông Cổ Chiên",
        "Nông sản địa phương: mùa vụ thu hoạch bưởi Năm Roi, sầu riêng, dừa sáp Cầu Kè",
        "Bảo vệ môi trường nước sông ngòi, tiết kiệm điện năng, biến đổi khí hậu ĐBSCL",
        "Lễ hội truyền thống, văn hóa dân gian miền Tây sông nước"
      ]
    }
  },

  // Khung năng lực Toán học SEA-PLM
  mathDomains: {
    contentDomains: [
      { id: "number_algebra", name: "Số và Đại số", subTopics: ["Số tự nhiên", "Phân số", "Số thập phân", "Tỉ số phần trăm", "Bốn phép tính", "Tìm thành phần chưa biết"] },
      { id: "measurement_geometry", name: "Đo lường và Hình học", subTopics: ["Hình phẳng và hình khối", "Đơn vị đo độ dài, khối lượng, diện tích, thể tích, thời gian", "Chu vi và diện tích", "Góc và đường thẳng"] },
      { id: "data_chance", name: "Thống kê và Xác suất", subTopics: ["Thu thập và phân loại dữ liệu", "Bảng thống kê", "Biểu đồ tranh, biểu đồ cột", "Khả năng xảy ra của một sự kiện"] }
    ],
    cognitiveDomains: [
      { id: "knowing", name: "Biết (Knowing)", description: "Nhận biết, nhớ lại quy tắc, tính toán số học trực tiếp, đọc thông tin từ bảng" },
      { id: "applying", name: "Áp dụng (Applying)", description: "Lựa chọn phép toán thích hợp, biểu diễn bài toán, giải bài toán có bối cảnh quen thuộc hoặc 2 bước tính" },
      { id: "reasoning", name: "Lập luận & Giải quyết vấn đề (Reasoning)", description: "Phân tích tình huống phức hợp, kết hợp nhiều nguồn dữ liệu, đánh giá giải pháp, rút ra kết luận logic" }
    ]
  },

  // Khung năng lực Đọc hiểu SEA-PLM
  readingDomains: {
    textFormats: [
      { id: "continuous", name: "Văn bản liên tục", types: ["Truyện kể", "Văn bản miêu tả", "Bài báo thông tin", "Văn bản giải thích quy trình", "Thư từ"] },
      { id: "non_continuous", name: "Văn bản không liên tục (Phi liên tục)", types: ["Bảng biểu số liệu", "Sơ đồ chỉ dẫn", "Tờ rơi quảng bá / tuyên truyền", "Biểu đồ thông tin (Infographic)", "Thời gian biểu / Vé tàu xe", "Bản đồ đơn giản"] }
    ],
    readingProcesses: [
      { id: "locate", name: "Định vị và truy xuất thông tin (Locate information)", description: "Tìm kiếm các chi tiết, sự kiện, con số được nêu trực tiếp, hiển hiện trong văn bản" },
      { id: "interpret", name: "Kết nối và diễn giải (Interpret & integrate)", description: "Suy luận ý nghĩa tiềm ẩn, tìm nguyên nhân - kết quả, so sánh hai nhân vật/sự việc, nắm bắt chủ đề chính" },
      { id: "reflect_evaluate", name: "Đánh giá và phản hồi (Reflect & evaluate)", description: "Đánh giá thái độ của nhân vật, nhận xét bài học rút ra, liên hệ với trải nghiệm bản thân và cuộc sống thực tế" }
    ]
  },

  // Khung đánh giá Viết SEA-PLM
  writingDomains: {
    tasks: ["Viết đoạn văn nêu cảm nghĩ / ý kiến", "Viết bài văn miêu tả", "Viết thông báo ngắn", "Viết lời đáp xử lý tình huống giao tiếp"],
    rubricCriteria: [
      { code: "CONTENT", name: "Ý tưởng & Nội dung", weight: 35, description: "Nội dung phù hợp yêu cầu đề bài, ý tưởng rõ ràng, có dẫn chứng cụ thể" },
      { code: "ORGANIZATION", name: "Bố cục & Liên kết", weight: 25, description: "Có mở đoạn/thân đoạn/kết đoạn, các câu liên kết mạch lạc, dùng từ nối phù hợp" },
      { code: "VOCABULARY", name: "Dùng từ & Đặt câu", weight: 20, description: "Từ ngữ gợi cảm, dùng từ đúng nghĩa, câu văn đầy đủ chủ vị, đa dạng cấu trúc" },
      { code: "CONVENTIONS", name: "Chính tả & Trình bày", weight: 20, description: "Viết hoa đúng quy định, không sai lỗi chính tả, chấm câu đúng chỗ, sạch đẹp" }
    ]
  }
};
