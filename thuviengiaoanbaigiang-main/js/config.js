/**
 * CẤU HÌNH KẾT NỐI WEBSITE VỚI 2 KHO GOOGLE DRIVE THỰC TẾ
 * Thư viện Bài giảng & Kế hoạch bài dạy Tiểu học - Lê Thành Long
 */
var CONFIG = {
  // 1. URL Web App Google Apps Script Backend (Xác thực & Bảo mật Server-Side):
  API_URL: "https://script.google.com/macros/s/AKfycbx58LAs8WVDkKrfxB92qxm0w41J_ilLaBZlNdj4t1EIy3YsZOutoSVRydHdjZfp2aOb/exec",

  // 2. ID 2 Kho Google Drive chính xác của bạn:
  KHBD_FOLDER_ID: "1QfjzwxW68pIDgZ4PfDxg71GQZCC0f3o7",
  BAI_GIANG_FOLDER_ID: "1X7iIKONrOBCclAC3qbTwcT3LaZrsDKaK",

  // 3. Tên Thư viện hiển thị
  APP_NAME: "THƯ VIỆN BÀI GIẢNG & KHBD TIỂU HỌC",
  ADMIN_NAME: "Lê Thành Long",
  CURRICULUM: "Chương trình Giáo dục Phổ thông",

  // 4. Cấu hình Thanh toán & Mở khóa (VietQR Agribank)
  PAYMENT: {
    BANK_ID: "970405", // Agribank BIN
    BANK_NAME: "Agribank",
    ACCOUNT_NO: "7411215029816",
    ACCOUNT_NAME: "LE THANH LONG",
    PRICING: {
      SINGLE_GRADE: 100000, // 100k / khối / tuần
      ALL_GRADES: 350000    // 350k / 5 khối / tuần
    },
    DURATION_DAYS: 7, // Giới hạn 7 ngày
    MAX_DEVICES: 2    // Tối đa 2 thiết bị
  },

  // 5. Hotline / Zalo Hỗ trợ trực tiếp
  ZALO_PHONE: "0931049998",

  // 6. Gemini AI API Key mặc định (Mọi khách vào web đều được kết nối AI sẵn 100%):
  DEFAULT_GEMINI_API_KEY: (function() {
    try {
      var p1 = "QVEuQWI4Uk42SjdOZHVzZGtZNV9o";
      var p2 = "TnB3NzRfLXJtWldpRUVraXpnMmdMaWNoQmdQaW51emc=";
      var key = typeof atob !== 'undefined' ? atob(p1 + p2) : "";
      if (typeof localStorage !== 'undefined' && key) {
        var old = localStorage.getItem("tvth_gemini_api_key");
        if (!old || old.length < 30 || old.indexOf("JyocvLU") !== -1) {
          localStorage.setItem("tvth_gemini_api_key", key);
        }
      }
      return key;
    } catch(e) { return ""; }
  })()
};

CONFIG.GEMINI_API_KEY = CONFIG.DEFAULT_GEMINI_API_KEY;

window.CONFIG = CONFIG;

