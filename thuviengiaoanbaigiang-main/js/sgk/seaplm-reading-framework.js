/**
 * KHUNG KỸ THUẬT ĐỌC HIỂU & VIẾT THEO CHUẨN SEA-PLM KẾT HỢP THÔNG TƯ 27/2020/TT-BGDĐT
 * CÙNG KHO NGỮ LIỆU ĐỊA PHƯƠNG TỈNH VĨNH LONG MỚI (NGHỊ QUYẾT 202/2025/QH15)
 * Phục vụ hệ thống Trợ lý AI Soạn Đề Kiểm Tra Sư Phạm Tiểu Học
 */

(function(global) {
  'use strict';

  const SEAPLM_FRAMEWORK = {
    metadata: {
      name: "Khung Đánh Giá Đọc Hiểu & Viết Chuẩn SEA-PLM & Thông tư 27",
      source: "Tài liệu tập huấn xây dựng câu hỏi đánh giá kết quả học tập tiểu học theo hướng tiếp cận SEA-PLM (Bộ GD&ĐT)",
      grades: [1, 2, 3, 4, 5],
      standard: "Thông tư 27/2020/TT-BGDĐT & Chuẩn Đông Nam Á SEA-PLM"
    },

    // 1. BA ĐỊNH DẠNG VĂN BẢN ĐỌC HIỂU (TEXT FORMATS)
    textFormats: {
      CONTINUOUS: {
        id: "continuous",
        name: "Văn bản liên tục",
        description: "Các câu văn được sắp xếp thành các đoạn văn mạch lạc, liên tục theo trật tự thời gian, logic hoặc quan hệ ngữ nghĩa.",
        subtypes: [
          { id: "narrative", name: "Tự sự / Truyện kể", desc: "Kể lại một chuỗi sự việc có mở đầu, diễn biến, cao trào và kết thúc; khắc họa nhân vật và bài học." },
          { id: "descriptive", name: "Miêu tả", desc: "Tái hiện đặc điểm, hình dáng, màu sắc, âm thanh của sự vật, con người, phong cảnh thiên nhiên." },
          { id: "expository", name: "Thuyết minh / Thông tin", desc: "Cung cấp tri thức khách quan về tự nhiên, xã hội, khoa học, danh lam thắng cảnh hoặc địa phương." },
          { id: "instructive", name: "Chỉ dẫn / Hướng dẫn", desc: "Các bước thực hiện một công việc, luật chơi trò chơi dân gian hoặc quy tắc an toàn." },
          { id: "poetic", name: "Thơ ca / Kịch", desc: "Văn bản giàu hình ảnh, nhịp điệu, cảm xúc và các biện pháp tu từ nghệ thuật." }
        ]
      },

      NON_CONTINUOUS: {
        id: "non_continuous",
        name: "Văn bản không liên tục",
        description: "Thông tin được trình bày dưới dạng phi tuyến tính như biểu đồ, bảng biểu, danh sách, thời khóa biểu, sơ đồ hoặc bản đồ.",
        subtypes: [
          { id: "table", name: "Bảng biểu số liệu", desc: "Cột và hàng biểu thị các mối quan hệ định lượng hoặc phân loại thông tin." },
          { id: "map", name: "Bản đồ / Sơ đồ chỉ dẫn", desc: "Biểu diễn không gian địa lý, tuyến đường di chuyển, địa danh hành chính." },
          { id: "timetable", name: "Thời gian biểu / Lịch trình", desc: "Bảng sắp xếp sự kiện, tiết học, chuyến xe theo dòng thời gian." },
          { id: "form", name: "Biểu mẫu / Đơn từ", desc: "Phiếu đăng ký, đơn xin phép, phiếu khảo sát có cấu trúc điền thông tin." },
          { id: "diagram", name: "Sơ đồ quy trình / Cây phả hệ", desc: "Mũi tên và khối hình minh họa chu trình tự nhiên hoặc phân cấp tổ chức." }
        ]
      },

      MIXED: {
        id: "mixed",
        name: "Văn bản hỗn hợp",
        description: "Kết hợp hài hòa giữa đoạn văn bản liên tục và biểu bảng, hình ảnh chú thích, infographic trực quan.",
        subtypes: [
          { id: "infographic", name: "Đồ họa thông tin (Infographic)", desc: "Bài viết ngắn kết hợp các biểu tượng, số liệu nổi bật và hình ảnh minh họa." },
          { id: "illustrated_article", name: "Bài báo / Phóng sự có ảnh và bảng chú thích", desc: "Bài văn miêu tả kèm sơ đồ vị trí hoặc bảng tổng hợp số liệu thực tế." }
        ]
      }
    },

    // 2. BA QUÁ TRÌNH NHẬN THỨC (COGNITIVE PROCESSES) & 3 MỨC ĐỘ THÔNG TƯ 27
    cognitiveProcesses: {
      LOCATE: {
        id: "locate",
        name: "Xác định vị trí và thu thập thông tin (Locate)",
        tt27Level: 1, // Mức 1 - Nhận biết
        description: "Tìm kiếm, định vị và trích xuất một hoặc nhiều chi tiết thông tin tường minh nằm trực tiếp trong văn bản.",
        questionStems: [
          "Theo bài đọc, ai/cái gì/ở đâu/khi nào...?",
          "Chi tiết nào trong bài cho thấy...?",
          "Tìm từ ngữ/hình ảnh miêu tả... trong đoạn...?",
          "Dựa vào bảng số liệu, cho biết số lượng... là bao nhiêu?"
        ]
      },

      INTERPRET: {
        id: "interpret",
        name: "Kết nối, giải thích và suy luận (Interpret)",
        tt27Level: 2, // Mức 2 - Kết nối
        description: "Tích hợp các chi tiết khác nhau trong bài; suy luận nguyên nhân - kết quả; giải thích ý nghĩa từ ngữ, hình ảnh so sánh, thông điệp chính.",
        questionStems: [
          "Vì sao nhân vật lại hành động như vậy?",
          "Hình ảnh ... trong câu thơ gợi cho em liên tưởng đến điều gì?",
          "Ý chính của đoạn văn thứ hai là gì?",
          "Qua câu chuyện, tác giả muốn gửi gắm bài học gì?",
          "So sánh điểm giống và khác nhau giữa ... và ...?"
        ]
      },

      REFLECT: {
        id: "reflect",
        name: "Phản hồi và đánh giá (Reflect)",
        tt27Level: 3, // Mức 3 - Vận dụng
        description: "Liên hệ văn bản với kinh nghiệm sống cá nhân, đánh giá quan điểm hoặc thái độ của nhân vật/tác giả, bày tỏ ý kiến bản thân một cách thuyết phục.",
        questionStems: [
          "Em có đồng tình với suy nghĩ/việc làm của nhân vật không? Vì sao?",
          "Nếu là nhân vật trong câu chuyện, em sẽ làm gì khi gặp tình huống đó?",
          "Từ bài đọc trên, em rút ra được bài học gì cho bản thân trong cuộc sống?",
          "Em hãy viết 1 - 2 câu nêu cảm xúc của mình về cảnh đẹp quê hương được nói đến trong bài."
        ]
      }
    },

    // 3. BỐN BỐI CẢNH CHÂN THỰC THEO CHUẨN SEA-PLM (AUTHENTIC CONTEXTS)
    contexts: {
      PERSONAL: {
        id: "personal",
        name: "Bối cảnh Cá nhân (Personal)",
        description: "Gắn liền với thế giới tuổi thơ: gia đình, bạn bè, sinh hoạt cá nhân, sở thích, trò chơi, ước mơ, trải nghiệm của bản thân học sinh."
      },
      LOCAL: {
        id: "local",
        name: "Môi trường xung quanh (Local community)",
        description: "Gắn với không gian sống thực tế: lớp học, sân trường, khu phố, làng xóm, địa phương quê hương (như tỉnh Vĩnh Long mới, miệt vườn sông nước, làng nghề truyền thống)."
      },
      WIDER_WORLD: {
        id: "wider_world",
        name: "Môi trường rộng hơn (Wider world)",
        description: "Mở rộng ra cộng đồng xã hội, thiên nhiên đất nước, bảo vệ môi trường, đa dạng sinh học, văn hóa dân tộc và các vấn đề khoa học đời sống."
      },
      ACADEMIC: {
        id: "academic",
        name: "Bối cảnh môn học (Intra-disciplinary / Academic)",
        description: "Khám phá các quy luật thuần túy, vẻ đẹp toán học, cấu trúc ngôn ngữ và các mối quan hệ logic nội môn."
      }
    },

    // 4. KHUNG ĐÁNH GIÁ NĂNG LỰC TOÁN HỌC SEA-PLM (MATHEMATICAL LITERACY)
    mathematicsFramework: {
      contentDomains: {
        NUMBER_ALGEBRA: {
          id: "number_algebra",
          name: "Số và Phép tính (Number & Algebra)",
          description: "Số tự nhiên, phân số, số thập phân, tỉ số phần trăm, quy luật dãy số và giải toán có lời văn."
        },
        MEASUREMENT_GEOMETRY: {
          id: "measurement_geometry",
          name: "Đo lường và Hình học (Measurement & Geometry)",
          description: "Đại lượng và đơn vị đo (độ dài, diện tích, thể tích, khối lượng, thời gian, tiền tệ); hình học phẳng và hình học không gian trực quan."
        },
        CHANCE_DATA: {
          id: "chance_data",
          name: "Dữ liệu và Xác suất (Chance & Data)",
          description: "Thu thập, phân loại, đọc và xử lý bảng số liệu, biểu đồ tranh, biểu đồ cột; khả năng xảy ra của một sự kiện thực tế."
        }
      },
      cognitiveProcesses: {
        KNOWING: {
          id: "knowing",
          name: "Nhận biết (Knowing)",
          tt27Level: 1,
          description: "Nhớ lại định nghĩa, nhận diện hình khối, thực hiện các phép tính cơ bản hoặc đọc số liệu hiển ngôn."
        },
        APPLYING: {
          id: "applying",
          name: "Áp dụng (Applying)",
          tt27Level: 2,
          description: "Lựa chọn và vận dụng các công thức, thuật toán để giải quyết các tình huống toán học hoặc thực tế quen thuộc."
        },
        REASONING: {
          id: "reasoning",
          name: "Lập luận / Giải quyết vấn đề (Reasoning)",
          tt27Level: 3,
          description: "Phân tích, kết nối các dữ kiện phức hợp, suy luận logic, giải thích quy luật và giải quyết các bài toán phi chuẩn."
        }
      }
    },

    // 5. QUY CHUẨN HƯỚNG DẪN MÃ HÓA (CODING GUIDE) CHUẨN ĐÔNG NAM Á
    codingGuideSpecification: {
      levels: [
        {
          code: "Mã 2",
          label: "Mức tối đa (Full credit - 2 điểm)",
          criteria: "Học sinh trả lời đầy đủ, hoàn toàn chính xác, có lập luận thuyết phục hoặc thể hiện toàn bộ các bước giải chuẩn xác."
        },
        {
          code: "Mã 1",
          label: "Mức tối đa (cho câu 1 điểm) HOẶC Mức chưa tối đa (Partial credit - cho câu 2 điểm)",
          criteria: "Học sinh chọn đúng đáp án trắc nghiệm; HOẶC trả lời đúng ý chính của câu tự luận nhưng thiếu dẫn chứng, mắc 1 lỗi tính toán nhỏ hoặc diễn đạt chưa trọn vẹn."
        },
        {
          code: "Mã 0",
          label: "Mức không đạt (No credit)",
          criteria: "Học sinh chọn phương án nhiễu, làm sai hoàn toàn hoặc câu trả lời không có căn cứ từ ngữ liệu/kiến thức bài học."
        },
        {
          code: "Mã 9",
          label: "Bỏ trống không làm bài (Missing / No response)",
          criteria: "Học sinh để trống bài làm, không khoanh chọn hoặc không viết câu trả lời."
        }
      ],
      distractorRules: {
        requirePlausible: true,
        description: "Phương án nhiễu (A, B, C, D) BẮT BUỘC dựa trên các lỗi tư duy/lỗi nhầm lẫn thực tế phổ biến của học sinh tiểu học (ví dụ: quên đổi đơn vị đo, nhầm chu vi với diện tích, đọc lướt sót từ khóa)."
      }
    },

    // 6. QUY CHUẨN BAREM ĐIỂM THÔNG TƯ 27 (0 - 10 ĐIỂM)
    scoringGuides: {
      rubricRules: [
        {
          score: 0,
          label: "0 điểm (Không đạt)",
          criteria: "Học sinh không trả lời, trả lời hoàn toàn sai hoặc nội dung trả lời không có căn cứ từ văn bản."
        },
        {
          score: 1,
          label: "1 điểm (Đạt một phần)",
          criteria: "Học sinh nêu được một phần thông tin đúng hoặc ý tưởng phù hợp nhưng chưa đầy đủ, thiếu dẫn chứng hoặc diễn đạt chưa trọn vẹn."
        },
        {
          score: 2,
          label: "2 điểm (Đạt toàn diện)",
          criteria: "Học sinh trả lời chính xác, đầy đủ mọi khía cạnh của câu hỏi, có dẫn chứng xác thực từ ngữ liệu, diễn đạt rõ ràng, mạch lạc."
        }
      ]
    }
  };

  // =========================================================================
  // KHO NGỮ LIỆU ĐỊA PHƯƠNG VĨNH LONG MỚI (NGHỊ QUYẾT 202/2025/QH15)
  // Hiệu lực thi hành từ 01/7/2025: Hợp nhất Bến Tre, Trà Vinh và Vĩnh Long
  // Tổng: 124 Đơn vị hành chính cấp xã (19 phường, 105 xã)
  // Diện tích: 6.296,20 km2 - Dân số: 4.257.581 người
  // =========================================================================
  const VINH_LONG_DATA_2025 = {
    metadata: {
      resolution: "Nghị quyết số 202/2025/QH15 của Quốc hội",
      effectiveDate: "01/07/2025",
      provinceName: "Tỉnh Vĩnh Long",
      totalAreaKm2: 6296.20,
      totalPopulation: 4257581,
      totalCommunes: 124,
      totalWards: 19,
      totalRuralCommunes: 105,
      regions: [
        {
          id: "vinh_long_core",
          name: "Khu vực Vĩnh Long (trước sắp xếp)",
          communesCount: 35,
          wardsCount: 8,
          ruralCount: 27,
          districts: [
            { name: "Thành phố Vĩnh Long", wards: ["Thanh Đức", "Trường An", "Tân Ngãi", "Tân Hạnh", "Phước Hậu"] },
            { name: "Thị xã Bình Minh", wards: ["Bình Minh", "Cái Vồn", "Đông Thành"] },
            { name: "Huyện Long Hồ", communes: ["An Bình", "Long Hồ", "Phú Quới"] },
            { name: "Huyện Mang Thít", communes: ["Cái Nhum", "Tân Long Hội", "Nhơn Phú", "Bình Phước"] },
            { name: "Huyện Vũng Liêm", communes: ["Quới Thiện", "Trung Thành", "Trung Ngãi", "Quới An", "Trung Hiệp", "Hiếu Phụng", "Hiếu Thành"] },
            { name: "Huyện Trà Ôn", communes: ["Lục Sỹ Thành", "Trà Ôn", "Trà Côn", "Hòa Bình", "Vĩnh Xuân"] },
            { name: "Huyện Tam Bình", communes: ["Hòa Hiệp", "Tam Bình", "Ngãi Tứ", "Song Phú", "Cái Ngang"] },
            { name: "Huyện Bình Tân", communes: ["Tân Quới", "Tân Lược", "Mỹ Thuận"] }
          ]
        },
        {
          id: "ben_tre_region",
          name: "Khu vực Bến Tre (trước sắp xếp)",
          communesCount: 48,
          wardsCount: 5,
          ruralCount: 43,
          districts: [
            { name: "Thành phố Bến Tre", wards: ["An Hội", "Bến Tre", "Sơn Đông", "Phú Tân", "Phú Khương"] },
            { name: "Huyện Châu Thành", communes: ["Phú Túc", "Giao Long", "Tiên Thủy", "Tân Phú"] },
            { name: "Huyện Giồng Trôm", communes: ["Hưng Nhượng", "Giồng Trôm", "Tân Hào", "Phước Long", "Lương Phú", "Châu Hòa", "Lương Hòa"] },
            { name: "Huyện Ba Tri", communes: ["Tân Thủy", "Bảo Thạnh", "Ba Tri", "Tân Xuân", "Mỹ Chánh Hòa", "An Ngãi Trung", "An Hiệp"] },
            { name: "Huyện Bình Đại", communes: ["Thới Thuận", "Thạnh Phước", "Bình Đại", "Thạnh Trị", "Lộc Thuận", "Châu Hưng", "Phú Thuận"] },
            { name: "Huyện Chợ Lách", communes: ["Phú Phụng", "Chợ Lách", "Vĩnh Thành", "Hưng Khánh Trung"] },
            { name: "Huyện Mỏ Cày Bắc", communes: ["Phước Mỹ Trung", "Tân Thành Bình", "Nhuận Phú Tân"] },
            { name: "Huyện Mỏ Cày Nam", communes: ["Đồng Khởi", "Mỏ Cày", "Thành Thới", "An Định", "Hương Mỹ"] },
            { name: "Huyện Thạnh Phú", communes: ["Đại Điền", "Quới Điền", "Thạnh Phú", "An Qui", "Thạnh Hải", "Thạnh Phong"] }
          ]
        },
        {
          id: "tra_vinh_region",
          name: "Khu vực Trà Vinh (trước sắp xếp)",
          communesCount: 41,
          wardsCount: 6,
          ruralCount: 35,
          districts: [
            { name: "Thành phố Trà Vinh", wards: ["Trà Vinh", "Long Đức", "Nguyệt Hóa", "Hòa Thuận"] },
            { name: "Thị xã Duyên Hải", wards: ["Duyên Hải", "Trường Long Hòa"], communes: ["Long Hữu"] },
            { name: "Huyện Càng Long", communes: ["Càng Long", "An Trường", "Tân An", "Nhị Long", "Bình Phú"] },
            { name: "Huyện Châu Thành", communes: ["Châu Thành", "Song Lộc", "Hưng Mỹ", "Hòa Minh", "Long Hòa"] },
            { name: "Huyện Cầu Kè", communes: ["Cầu Kè", "Phong Thạnh", "An Phú Tân", "Tam Ngãi"] },
            { name: "Huyện Tiểu Cần", communes: ["Tiểu Cần", "Tân Hòa", "Hùng Hòa", "Tập Ngãi"] },
            { name: "Huyện Cầu Ngang", communes: ["Cầu Ngang", "Mỹ Long", "Vinh Kim", "Nhị Trường", "Hiệp Mỹ"] },
            { name: "Huyện Trà Cú", communes: ["Trà Cú", "Đại An", "Lưu Nghiệp Anh", "Hàm Giang", "Long Hiệp", "Tập Sơn"] },
            { name: "Huyện Duyên Hải", communes: ["Long Thành", "Đông Hải", "Long Vĩnh", "Đôn Châu", "Ngũ Lạc"] }
          ]
        }
      ]
    },

    // BÀI ĐỌC MẪU VĂN BẢN THÔNG TIN ĐỊA PHƯƠNG (DÙNG CHO ĐỀ ĐỌC HIỂU TIẾNG VIỆT)
    sampleTexts: [
      {
        id: "tv_vl_info_1",
        title: "Vùng đất Chín Rồng và diện mạo mới của tỉnh Vĩnh Long",
        type: "continuous",
        category: "expository",
        targetGrades: [4, 5],
        author: "Tài liệu Giáo dục Địa phương Vĩnh Long",
        passage: `Theo Nghị quyết số 202/2025/QH15 của Quốc hội và Nghị quyết số 1687/NQ-UBTVQH15 của Ủy ban Thường vụ Quốc hội, tỉnh Vĩnh Long thực hiện sắp xếp tinh gọn theo mô hình chính quyền 2 cấp (không còn cấp huyện), trực tiếp quản lý 124 đơn vị hành chính cấp xã. Vùng đất Vĩnh Long trải dài giữa hai nhánh sông Tiền và sông Hậu hiền hòa, có diện tích tự nhiên 6.296,20 km² với hơn 4,2 triệu người dân cần cù, mến khách.\n\nToàn tỉnh gồm 124 xã, phường với 19 phường đô thị văn minh và 105 xã nông thôn trù phú. Nơi đây hội tụ những cù lao xanh mướt quanh năm trĩu quả ngọt như cù lao An Bình, cù lao Lục Sỹ Thành, những cánh rừng ngập mặn Duyên Hải kiên cường chắn sóng và những vườn dừa bạt ngàn của xứ dừa huyền thoại. Không gian phát triển rộng lớn này mở ra tiềm năng kinh tế to lớn cho vùng đồng bằng sông Cửu Long, đồng thời khơi dậy niềm tự hào sâu sắc trong lòng mỗi học sinh về quê hương Vĩnh Long giàu đẹp, văn minh.`,
        comprehensionQuestions: [
          {
            num: 1,
            level: 1,
            cognitive: "locate",
            type: "mcq",
            question: "Theo văn bản, tỉnh Vĩnh Long hiện nay vận hành theo mô hình chính quyền mấy cấp?",
            options: [
              "A. Mô hình chính quyền 3 cấp (tỉnh, huyện, xã)",
              "B. Mô hình chính quyền 2 cấp (không còn cấp huyện, gồm 124 xã/phường)",
              "C. Mô hình chính quyền 1 cấp duy nhất",
              "D. Mô hình chính quyền 4 cấp"
            ],
            answer: "B",
            explanation: "Trong bài nêu rõ: 'tỉnh Vĩnh Long thực hiện sắp xếp tinh gọn theo mô hình chính quyền 2 cấp (không còn cấp huyện), trực tiếp quản lý 124 đơn vị hành chính cấp xã'."
          },
          {
            num: 2,
            level: 1,
            cognitive: "locate",
            type: "mcq",
            question: "Sau khi sắp xếp, tỉnh Vĩnh Long có tổng cộng bao nhiêu đơn vị hành chính cấp xã (gồm xã và phường)?",
            options: [
              "A. 35 đơn vị",
              "B. 48 đơn vị",
              "C. 124 đơn vị",
              "D. 105 đơn vị"
            ],
            answer: "C",
            explanation: "Số liệu trong bài: 'Toàn tỉnh gồm 124 xã, phường với 19 phường đô thị văn minh và 105 xã nông thôn trù phú'."
          },
          {
            num: 3,
            level: 2,
            cognitive: "interpret",
            type: "mcq",
            question: "Hình ảnh các 'cù lao quanh năm trĩu quả', 'rừng ngập mặn chắn sóng' và 'vườn dừa bạt ngàn' thể hiện điều gì về quê hương Vĩnh Long?",
            options: [
              "A. Vùng đất có điều kiện sống rất khắc nghiệt",
              "B. Thiên nhiên trù phú, đa dạng và giàu tiềm năng phát triển",
              "C. Nơi chỉ tập trung phát triển công nghiệp nặng",
              "D. Khu vực thường xuyên bị ngập lụt quanh năm"
            ],
            answer: "B",
            explanation: "Các chi tiết trên khắc họa sự giàu có, phì nhiêu và vẻ đẹp đặc trưng của thiên nhiên sông nước Cửu Long."
          },
          {
            num: 4,
            level: 3,
            cognitive: "reflect",
            type: "essay",
            question: "Là một học sinh đang sinh sống và học tập trên quê hương Vĩnh Long, em cảm thấy tự hào về điều gì nhất và em sẽ làm gì để góp phần làm đẹp cho quê hương mình?",
            guide: "Học sinh nêu được cảm xúc tự hào chân thành (tự hào về truyền thống, về thiên nhiên tươi đẹp hoặc con người cần cù) và hành động thiết thực (chăm ngoan học giỏi, giữ gìn vệ sinh môi trường, yêu quý bạn bè).",
            scoreRubric: [
              { score: "0 điểm", desc: "Không làm hoặc lạc đề." },
              { score: "1,0 điểm", desc: "Nêu được cảm xúc hoặc hành động nhưng còn sơ sài." },
              { score: "2,0 điểm", desc: "Nêu rõ cảm xúc tự hào và ít nhất 2 việc làm cụ thể, diễn đạt mạch lạc." }
            ]
          }
        ]
      }
    ]
  };

  global.SEAPLM_FRAMEWORK = SEAPLM_FRAMEWORK;
  global.VINH_LONG_DATA_2025 = VINH_LONG_DATA_2025;

})(typeof window !== 'undefined' ? window : this);
