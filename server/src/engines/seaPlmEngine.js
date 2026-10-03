/**
 * SEA-PLM Context Engine: Định hướng thiết kế nhiệm vụ đánh giá theo năng lực và bối cảnh thực tế
 * Tích hợp sâu dữ liệu địa phương hóa 124 xã, phường tỉnh Vĩnh Long mới (từ 01/07/2025)
 * Tuyệt đối sử dụng địa danh mới theo Nghị quyết 202/2025/QH15, tránh gọi địa danh cũ
 */

const vinhLongData = require('../data/vinhLongData');
const seaPlmStandards = require('../data/seaPlmStandards');

class SeaPlmEngine {
  /**
   * Lấy danh mục khung bối cảnh SEA-PLM chuẩn (Cá nhân, Nhà trường, Xã hội/Địa phương)
   */
  getContextFramework() {
    return seaPlmStandards.contextFramework;
  }

  /**
   * Lấy danh sách 3 khu vực và các huyện, thị xã, thành phố tỉnh Vĩnh Long mới
   */
  getLocalRegions() {
    return vinhLongData.regions;
  }

  /**
   * Lấy toàn bộ 124 xã, phường chính thức mới tỉnh Vĩnh Long
   */
  getAll124Units() {
    return vinhLongData.all124Units || [];
  }

  /**
   * Lấy chi tiết đơn vị hành chính theo số thứ tự (1..124)
   */
  getUnitByStt(stt) {
    return (vinhLongData.all124Units || []).find(u => u.stt === Number(stt));
  }

  /**
   * Lấy ngẫu nhiên 1 đơn vị hành chính mới trong 124 xã, phường (có thể lọc theo khu vực)
   */
  getRandomUnit(regionFilter = null) {
    let pool = vinhLongData.all124Units || [];
    if (regionFilter) {
      pool = pool.filter(u => u.region.includes(regionFilter));
    }
    if (pool.length === 0) pool = vinhLongData.all124Units || [];
    return pool[Math.floor(Math.random() * pool.length)];
  }

  /**
   * Sinh một tình huống ngữ cảnh thực tế ngẫu nhiên hoặc theo chủ đề
   */
  generateContextStimulus(contextType = "wider_environment", subject = "Toán", grade = 4) {
    if (contextType === "personal") {
      return {
        contextType: "personal",
        contextTitle: "Kế hoạch chi tiêu và mua dụng cụ học tập",
        story: "Bạn Lan nuôi một chú heo đất để chuẩn bị cho năm học mới. Sau 3 tháng, Lan mở heo đất và lên kế hoạch mua sắm đồ dùng học tập cần thiết.",
        dataItems: [
          { item: "Bộ thước kẻ và ê-ke", price: 15000, unit: "đồng" },
          { item: "Hộp bút màu vẽ", price: 35000, unit: "đồng" },
          { item: "Vở ô ly (lốc 10 quyển)", price: 80000, unit: "đồng" }
        ],
        taskGoal: "Tính toán chi tiêu hợp lý và số tiền còn lại để gửi tiết kiệm."
      };
    }

    if (contextType === "internal_environment") {
      return {
        contextType: "internal_environment",
        contextTitle: "Phong trào 'Đổi vỏ lon lấy cây xanh' tại trường tiểu học",
        story: "Liên đội trường tiểu học phát động phong trào bảo vệ môi trường. Các bạn học sinh khối 4 và khối 5 cùng thu gom vỏ chai nhựa và lon nhôm tái chế.",
        dataItems: [
          { group: "Khối 4", collectedKg: 45, treesEarned: 9 },
          { group: "Khối 5", collectedKg: 65, treesEarned: 13 }
        ],
        taskGoal: "Phân tích số liệu thu gom và tính trung bình số vỏ tái chế mỗi lớp đóng góp."
      };
    }

    // wider_environment / Địa phương hóa 124 xã, phường Tỉnh Vĩnh Long mới sau sáp nhập (NQ 202/2025/QH15)
    // TUYỆT ĐỐI KHÔNG DÙNG ĐỊA DANH CŨ ĐƠN LẺ
    const localThemes = [
      // 1. Khu vực Vĩnh Long (cũ)
      {
        location: "Phường Bình Minh & Phường Cái Vồn (thị xã Bình Minh) - Vườn bưởi Năm Roi đặc sản",
        story: "Gia đình bác Ba ở phường Bình Minh (thị xã Bình Minh) thu hoạch vụ bưởi Năm Roi đầu mùa đạt tiêu chuẩn VietGAP. Bưởi được chọn lọc kỹ càng đóng vào các thùng xuất khẩu đi các nước.",
        details: "Mỗi thùng loại 1 đựng 12 quả bưởi (trung bình nặng 1,5 kg/quả). Giá bán 45 000 đồng/kg.",
        taskGoal: "Tính tổng khối lượng và doanh thu thu hoạch của nhà vườn."
      },
      {
        location: "Xã Nhơn Phú & Xã Cái Nhum (huyện Mang Thít) - Vương quốc lò gạch gốm đỏ sông Thầy Cai",
        story: "Hợp tác xã gốm đỏ truyền thống tại xã Nhơn Phú ven kênh Thầy Cai (huyện Mang Thít) chuẩn bị mẻ gạch thẻ và bình gốm mỹ nghệ nung trong lò tròn truyền thống.",
        details: "Lò gốm nung liên tục trong 5 ngày đêm với sản lượng 12 000 viên gạch và 250 bình gốm mỹ nghệ mỗi mẻ.",
        taskGoal: "Tính toán sản lượng và năng suất lao động của các nghệ nhân làng gốm."
      },
      {
        location: "Xã An Bình (huyện Long Hồ) - Du lịch sinh thái miệt vườn cù lao Cổ Chiên",
        story: "Đoàn khách tham quan khám phá miệt vườn cù lao xã An Bình đi cano qua dòng sông Cổ Chiên. Lịch trình cano xuất bến từ bến phà Vĩnh Long đưa khách đến nhà vườn chôm chôm.",
        details: "Quãng đường di chuyển đường thủy là 8 km, thời gian cano đi hết 20 phút. Vườn chôm chôm có 120 cây, mỗi cây cho thu hoạch 85 kg trái.",
        taskGoal: "Giải quyết bài toán về vận tốc đường thủy và năng suất thu hoạch vườn cây."
      },
      {
        location: "Xã Ngãi Tứ (huyện Tam Bình) - Vựa cam sành Cửu Long",
        story: "Nông dân xã Ngãi Tứ (huyện Tam Bình) chăm sóc vườn cam sành hữu cơ trĩu quả chuẩn bị cung ứng cho thị trường Tết Nguyên đán.",
        details: "Vườn cam thu hoạch được 3 tấn quả, phân thành 2 loại: Loại 1 chiếm 65% tổng sản lượng bán giá 22 000 đồng/kg, phần còn lại là loại 2 bán giá 15 000 đồng/kg.",
        taskGoal: "Tính sản lượng từng loại và tổng số tiền thu được sau vụ mùa."
      },
      {
        location: "Xã Tân Lược & Xã Tân Quới (huyện Bình Tân) - Thủ phủ khoai lang tím xuất khẩu",
        story: "Hợp tác xã nông nghiệp xã Tân Lược (huyện Bình Tân) tổ chức thu hoạch cánh đồng khoai lang tím giống Nhật Bản đạt chuẩn xuất khẩu.",
        details: "Cánh đồng có diện tích 5 héc-ta, năng suất bình quân đạt 28 tấn/héc-ta. Khoai được đóng vào các sọt 50 kg.",
        taskGoal: "Tính tổng sản lượng khoai thu hoạch và số lượng sọt cần chuẩn bị."
      },
      {
        location: "Phường Long Châu & Phường Thanh Đức (thành phố Vĩnh Long) - Tuyến đô thị sinh thái sông Cổ Chiên",
        story: "Các bạn học sinh trường tiểu học tại phường Long Châu (thành phố Vĩnh Long) tham gia trải nghiệm tìm hiểu hệ thống giao thông cầu Mỹ Thuận và tuyến du lịch đường sông kết nối các phường trung tâm.",
        details: "Mỗi chuyến tàu du lịch chở được tối đa 40 khách, phục vụ 6 chuyến chở khách tham quan cầu Mỹ Thuận và cù lao mỗi ngày.",
        taskGoal: "Tính tổng lượng khách du lịch được phục vụ và lập kế hoạch an toàn đường sông."
      },
      {
        location: "Xã Lục Sĩ Thành (huyện Trà Ôn) - Miệt vườn cù lao Mây và bánh tráng nem",
        story: "Hợp tác xã bánh tráng cù lao Mây tại xã Lục Sĩ Thành (huyện Trà Ôn) tráng bánh tráng nem và bánh tráng ngọt truyền thống phơi đón gió sông Hậu.",
        details: "Mỗi ngày cơ sở tráng được 3 200 chiếc bánh nem, xếp đều lên 80 chiếc trành tre phơi dưới nắng ấm phù sa.",
        taskGoal: "Tính số lượng bánh trên mỗi trành tre và sản lượng bánh hoàn thành trong một tuần."
      },

      // 2. Khu vực Bến Tre (cũ)
      {
        location: "Xã Vĩnh Thành & Xã Chợ Lách (huyện Chợ Lách) - Thủ phủ hoa kiểng & cây giống Cái Mơn",
        story: "Hợp tác xã hoa kiểng xã Vĩnh Thành (huyện Chợ Lách) xuất bán các chậu cúc mâm xôi và mai vàng ghép phục vụ lễ hội mùa xuân khắp Đồng bằng sông Cửu Long.",
        details: "Vườn kiểng chuẩn bị 2 400 chậu hoa cúc mâm xôi xếp đều lên 6 chuyến xe tải lớn chuyển về các thành phố.",
        taskGoal: "Tính số chậu hoa trên mỗi chuyến xe và chi phí vận chuyển hợp lý."
      },
      {
        location: "Xã Giao Long & Xã Phú Túc (huyện Châu Thành) - Vành đai chế biến xứ dừa",
        story: "Cơ sở kẹo dừa thủ công truyền thống xã Giao Long (huyện Châu Thành) sử dụng nước cốt dừa tươi nguyên chất để nấu kẹo dừa dẻo thơm.",
        details: "Cứ 100 quả dừa khô nạo được 40 kg cơm dừa, ép lấy 25 kg nước cốt dừa đặc nguyên chất để làm ra 30 kg kẹo dừa thành phẩm.",
        taskGoal: "Tính tỉ lệ hao hụt nguyên liệu và số lượng quả dừa cần thiết cho một đơn đặt hàng."
      },
      {
        location: "Xã Hưng Nhượng & Xã Giồng Trôm (huyện Giồng Trôm) - Làng nghề bánh phồng Sơn Đốc",
        story: "Bà con làng nghề truyền thống tại xã Hưng Nhượng (huyện Giồng Trôm) quết bánh phồng nếp thơm ngậy mè và đường thốt nốt trong những ngày giáp Tết.",
        details: "Mỗi mẻ quết được 500 chiếc bánh phồng, phơi trên 20 chiếc trành (vỉ tre dài) dưới nắng giòn.",
        taskGoal: "Tính số bánh trên mỗi vỉ phơi và lập kế hoạch sản xuất cho đơn hàng làng nghề."
      },
      {
        location: "Xã Mỹ Chánh Hòa & Xã Ba Tri (huyện Ba Tri) - Vùng chăn nuôi bò thịt & bò sữa ven biển",
        story: "Hộ chăn nuôi bò chất lượng cao tại xã Mỹ Chánh Hòa (huyện Ba Tri) áp dụng quy trình đệm lót sinh học và trồng cỏ voi nuôi 15 con bò thịt.",
        details: "Mỗi con bò trưởng thành tiêu thụ trung bình 35 kg cỏ xanh và 2 kg thức ăn tinh mỗi ngày.",
        taskGoal: "Tính tổng lượng cỏ voi và thức ăn cần dự trữ cho đàn bò trong một tuần."
      },
      {
        location: "Xã Đồng Khởi & Xã Mỏ Cày (huyện Mỏ Cày Nam) - Vùng di sản Đồng Khởi và chợ nổi dừa sông Thom",
        story: "Hợp tác xã nông nghiệp xã Đồng Khởi (huyện Mỏ Cày Nam) tổ chức thu mua dừa hữu cơ trên các ghe thuyền tụ hội trên tuyến kênh Thom.",
        details: "Mỗi thuyền lớn thu gom 1 500 chục dừa (1 chục = 12 quả). Giá mua tại thuyền là 75 000 đồng/chục.",
        taskGoal: "Tính tổng số quả dừa thu mua và tổng số tiền thanh toán cho nhà vườn."
      },
      {
        location: "Xã Đại Điền & Xã Thạnh Hải (huyện Thạnh Phú) - Vùng xoài tứ quý & tôm sinh thái biển",
        story: "Bà con nông dân xã Đại Điền (huyện Thạnh Phú) kết hợp mô hình nuôi tôm sinh thái ven biển và trồng xoài tứ quý cho năng suất cao quanh năm.",
        details: "Vụ thu hoạch đạt 2,4 tấn tôm sú loại 1 (giá 180 000 đồng/kg) và 6 tấn xoài tứ quý (giá 25 000 đồng/kg).",
        taskGoal: "Tính toán tổng doanh thu và tỷ trọng đóng góp của từng mặt hàng nông sản."
      },

      // 3. Khu vực Trà Vinh (cũ)
      {
        location: "Xã Phong Thạnh & Xã Cầu Kè (huyện Cầu Kè) - Xứ sở dừa sáp độc đáo",
        story: "Vườn dừa sáp của chú Sáu tại xã Phong Thạnh (huyện Cầu Kè) thu hoạch được 180 quả dừa. Do đặc tính tự nhiên, chỉ có 25% số quả trên buồng đạt chất lượng dừa sáp loại 1 đặc ruột.",
        details: "Giá mỗi quả dừa sáp loại 1 là 130 000 đồng, dừa thường là 18 000 đồng/quả.",
        taskGoal: "Tính số quả dừa sáp thu được và tổng giá trị cả vườn dừa sau thu hoạch."
      },
      {
        location: "Phường Nguyệt Hóa & Phường Trà Vinh (thành phố Trà Vinh) - Lễ hội Ok Om Bok bên thắng cảnh Ao Bà Om",
        story: "Hội chợ xúc tiến du lịch và văn hóa Khmer trong dịp lễ hội Ok Om Bok bên thắng cảnh Ao Bà Om (phường Nguyệt Hóa, thành phố Trà Vinh) thu hút đông đảo du khách mua đặc sản cốm dẹp và bánh tét Trà Cuôn.",
        details: "Ban tổ chức bố trí 45 gian hàng ẩm thực dân gian quanh bờ ao, trung bình mỗi gian hàng phục vụ 320 lượt khách trong đêm rằm.",
        taskGoal: "Phân tích số liệu du khách và doanh số bán hàng trong đêm lễ hội."
      },
      {
        location: "Phường Duyên Hải (thị xã Duyên Hải) & Xã Đông Hải (huyện Duyên Hải) - Năng lượng sạch điện gió ngoài khơi",
        story: "Nhà máy điện gió ven biển Duyên Hải vận hành 24 trụ tuabin gió ngoài khơi hòa vào lưới điện quốc gia, cung cấp năng lượng sạch cho toàn vùng.",
        details: "Mỗi tuabin gió sản xuất trung bình 4 200 kWh điện mỗi ngày trong điều kiện gió biển cấp 4.",
        taskGoal: "Tính tổng sản lượng điện xanh sản xuất được trong một tháng 30 ngày."
      },
      {
        location: "Xã An Trường & Xã Càng Long (huyện Càng Long) - Cánh đồng sen và nghề dệt chiếu lác",
        story: "Làng nghề dệt chiếu truyền thống tại xã An Trường (huyện Càng Long) chuẩn bị các kiện chiếu lác hoa xuất bán phục vụ Tết.",
        details: "Mỗi ngày tổ dệt dệt được 45 đôi chiếu lác loại 1, sử dụng hết 135 kg sợi lác nhuộm màu sinh học.",
        taskGoal: "Tính lượng nguyên liệu trung bình cho mỗi đôi chiếu và lập kế hoạch sản xuất trong 15 ngày."
      },
      {
        location: "Xã Đại An & Xã Hàm Giang (huyện Trà Cú) - Làng nghề đan đát mây tre truyền thống",
        story: "Hợp tác xã thủ công mỹ nghệ xã Đại An (huyện Trà Cú) hoàn thành đơn hàng 1 200 chiếc rổ tre và lẵng hoa đan thủ công để xuất khẩu.",
        details: "Sản phẩm được chia đều đóng vào 60 thùng hàng tiêu chuẩn để vận chuyển qua cảng biển.",
        taskGoal: "Tính số sản phẩm trong mỗi thùng hàng và tính toán tiền công cho nghệ nhân làng nghề."
      }
    ];

    const chosen = localThemes[Math.floor(Math.random() * localThemes.length)];
    return {
      contextType: "wider_environment",
      contextTitle: chosen.location,
      story: chosen.story,
      details: chosen.details,
      taskGoal: chosen.taskGoal,
      isLocalVinhLong: true
    };
  }

  /**
   * Thẩm định xem một câu hỏi có đáp ứng chuẩn bối cảnh hữu cơ của SEA-PLM không
   */
  validateContextAuthenticity(questionText, contextDescription) {
    if (!contextDescription || contextDescription.includes("quen thuộc")) {
      return { isAuthentic: false, note: "Câu hỏi dạng thuần túy số học/lý thuyết, chưa áp dụng bối cảnh SEA-PLM." };
    }

    const hasRealWorldData = /\b(đồng|kg|tấn|km|phút|giờ|mét|quả|thùng|cây|bạn|lớp|trường|xã|phường)\b/i.test(questionText);
    const hasProblemSolving = /\b(hỏi|tính|bao nhiêu|giúp|để|hãy|vì sao|phương án|kế hoạch)\b/i.test(questionText);

    if (hasRealWorldData && hasProblemSolving) {
      return {
        isAuthentic: true,
        score: 95,
        note: "Bối cảnh thực tế gắn kết hữu cơ với nhiệm vụ giải quyết vấn đề, không mang tính trang trí đơn thuần."
      };
    }

    return {
      isAuthentic: false,
      score: 60,
      note: "Bối cảnh có xuất hiện nhưng chưa gắn chặt với thao tác tư duy toán học/ngôn ngữ cần đánh giá."
    };
  }
}

module.exports = new SeaPlmEngine();
