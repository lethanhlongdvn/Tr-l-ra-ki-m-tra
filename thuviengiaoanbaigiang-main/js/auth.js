/**
 * AUTHENTICATION & ACCESS CONTROL MODULE (SERVER-SIDE SECURITY & PIN MANAGER)
 * Quản lý & Cấp mã PIN cho đồng nghiệp - Thầy Lê Thành Long
 */

var AuthService = {
  defaultPins: [],

  getValidPins: function() {
    try {
      var saved = localStorage.getItem("tvth_custom_pins");
      if (saved) return JSON.parse(saved);
    } catch(e) {}
    return this.defaultPins;
  },

  savePins: function(pins) {
    localStorage.setItem("tvth_custom_pins", JSON.stringify(pins));
  },

  addPin: function(code, grade, desc) {
    var cleanCode = (code || "").trim().toUpperCase();
    if (!cleanCode) return { success: false, msg: "Mã PIN không được để trống" };

    var pins = this.getValidPins();
    if (pins.some(function(p) { return p.code === cleanCode; })) {
      return { success: false, msg: "Mã PIN '" + cleanCode + "' đã tồn tại!" };
    }

    var newPinObj = {
      code: cleanCode,
      grade: grade || "all",
      desc: desc || ("Mã tạo bởi Thầy Long ngày " + new Date().toLocaleDateString('vi-VN'))
    };
    pins.push(newPinObj);
    this.savePins(pins);

    // Đồng bộ lên Google Server
    try {
      var token = this.getAdminToken();
      if (token && CONFIG.API_URL) {
        fetch(CONFIG.API_URL + "?action=save_pin&code=" + encodeURIComponent(cleanCode) + "&grade=" + encodeURIComponent(grade) + "&desc=" + encodeURIComponent(desc) + "&adminToken=" + encodeURIComponent(token));
      }
    } catch(e) {}

    return { success: true, pin: newPinObj };
  },

  deletePin: function(code) {
    var cleanCode = (code || "").trim().toUpperCase();
    var pins = this.getValidPins();
    var filtered = pins.filter(function(p) { return p.code !== cleanCode; });
    this.savePins(filtered);
    showToast("Đã xóa mã PIN " + cleanCode, "info");
    if (typeof refreshCurrentView === "function") refreshCurrentView();
  },

  getSession: function() {
    try {
      var session = sessionStorage.getItem("tvth_user_session") || localStorage.getItem("tvth_user_session");
      if (session) return JSON.parse(session);
    } catch (e) {}
    return { role: "guest", unlockedGrade: null, displayName: "Khách (Xem trước)" };
  },

  getAdminToken: function() {
    return sessionStorage.getItem("tvth_admin_token") || localStorage.getItem("tvth_admin_token") || "";
  },

  getFilePermissionMap: function() {
    try {
      var saved = localStorage.getItem("tvth_file_permissions");
      if (saved) return JSON.parse(saved);
    } catch(e) {}
    return {};
  },

  getFilePermission: function(file) {
    if (!file) return "pin";
    var map = this.getFilePermissionMap();
    if (map[file.id]) {
      if (map[file.id] === "admin_only") return "hidden";
      return map[file.id];
    }

    // 🟢 Mở khóa MIỄN PHÍ TỪ TUẦN 1 ĐẾN TUẦN 8 (Áp dụng cho cả KHBD và Bài giảng PPTX)
    var isFree = false;
    var textToCheck = ((file.name || '') + ' ' + (file.folderPath || '') + ' ' + (file.path || '')).toUpperCase();

    // 1. Phân tích số tuần từ tên file hoặc đường dẫn thư mục:
    // Hỗ trợ dạng khoảng: (7-8), (9-10), (11-12), Tuần 7-8, Tuần 9-10...
    var rangeMatch = textToCheck.match(/(?:TUẦN|TUAN|T)?\s*\(?\s*([0-9]+)\s*[-–—_]\s*([0-9]+)\s*\)?/);
    if (rangeMatch && rangeMatch[1] && rangeMatch[2]) {
      var startW = parseInt(rangeMatch[1], 10);
      var endW = parseInt(rangeMatch[2], 10);
      // Nếu có tuần nào nằm trong khoảng 1 đến 8 (ví dụ 7-8) -> Miễn phí; nếu từ 9 trở lên (ví dụ 9-10) -> Cần PIN
      if ((startW >= 1 && startW <= 8) || (endW >= 1 && endW <= 8)) {
        isFree = true;
      } else {
        isFree = false;
      }
      return isFree ? "free" : "pin";
    }

    // Khớp số tuần đơn: Tuần 8, Tuần 9, T8, T9, (8), (9)...
    var singleMatch = textToCheck.match(/TUẦN\s*([0-9]+)/) || 
                      textToCheck.match(/TUAN\s*([0-9]+)/) || 
                      textToCheck.match(/TUAN([0-9]+)/) || 
                      textToCheck.match(/\bT([0-9]+)\b/) ||
                      textToCheck.match(/\(([0-9]+)\)/);
    if (singleMatch && singleMatch[1]) {
      var wNum = parseInt(singleMatch[1], 10);
      if (wNum >= 1 && wNum <= 8) {
        return "free";
      } else {
        return "pin";
      }
    }

    // 2. Dự phòng: Kiểm tra thuộc tính file.week / file.weeks nếu tên file không chứa số tuần
    if (file.week && file.week >= 1 && file.week <= 8) {
      isFree = true;
    } else if (file.weeks && Array.isArray(file.weeks) && file.weeks.some(function(w) { return w >= 1 && w <= 8; })) {
      isFree = true;
    }

    return isFree ? "free" : "pin";
  },

  setFilePermission: async function(fileId, permission) {
    var map = this.getFilePermissionMap();
    map[fileId] = permission;
    localStorage.setItem("tvth_file_permissions", JSON.stringify(map));

    var label = "🟢 Miễn phí";
    if (permission === "pin") label = "🔒 Cần PIN";
    if (permission === "hidden") label = "👁️‍🗨️ Ẩn với khách";

    showToast("Đã cập nhật quyền thành: " + label, "success");

    try {
      var token = this.getAdminToken();
      if (token && CONFIG.API_URL) {
        fetch(CONFIG.API_URL + "?action=set_file_permission&fileId=" + fileId + "&permission=" + permission + "&adminToken=" + encodeURIComponent(token));
      }
    } catch(e) {}

    if (typeof refreshCurrentView === "function") refreshCurrentView();
  },

  setBulkPermission: async function(permission, grade) {
    var map = this.getFilePermissionMap();
    if (DATABASE && DATABASE.allFiles) {
      DATABASE.allFiles.forEach(function(f) {
        if (!grade || grade === "all" || f.grade === parseInt(grade)) {
          map[f.id] = permission;
        }
      });
      localStorage.setItem("tvth_file_permissions", JSON.stringify(map));

      var msg = "Đã khóa toàn bộ kho (Cần PIN)! Giờ bạn có thể mở từng cái theo ý muốn.";
      if (permission === "free") msg = "Đã mở toàn bộ kho (Miễn phí)! Giờ bạn có thể khóa từng cái theo ý muốn.";
      if (permission === "hidden") msg = "Đã chuyển toàn bộ kho sang chế độ Ẩn với khách!";

      showToast(msg, "success");

      try {
        var token = this.getAdminToken();
        if (token && CONFIG.API_URL) {
          fetch(CONFIG.API_URL + "?action=set_bulk_permission&permission=" + permission + "&adminToken=" + encodeURIComponent(token));
        }
      } catch(e) {}

      if (typeof refreshCurrentView === "function") refreshCurrentView();
    }
  },

  isVisibleToFileList: function(file) {
    var perm = this.getFilePermission(file);
    if (perm === "hidden") {
      var session = this.getSession();
      return session.role === "admin";
    }
    return true;
  },

  getDeviceId: function() {
    var dId = localStorage.getItem("tvth_device_id");
    if (!dId) {
      dId = "PC_" + Math.random().toString(36).substring(2, 10).toUpperCase() + "_" + Date.now().toString(36).toUpperCase();
      localStorage.setItem("tvth_device_id", dId);
    }
    return dId;
  },

  getDeviceName: function() {
    var ua = navigator.userAgent;
    var name = "Máy tính";
    if (ua.includes("Windows")) name = "Máy tính Windows";
    else if (ua.includes("Mac")) name = "Máy Mac";
    else if (ua.includes("Linux")) name = "Máy tính Linux";
    else if (ua.includes("Android")) name = "Điện thoại Android";
    else if (ua.includes("iPhone") || ua.includes("iPad")) name = "Thiết bị iOS";
    return name;
  },

  verifyPin: async function(pinCode) {
    if (!pinCode) return { success: false, msg: "Vui lòng nhập số điện thoại hoặc mã PIN" };
    var cleanPin = pinCode.trim().toUpperCase();
    var deviceId = this.getDeviceId();
    var deviceName = this.getDeviceName();

    // 1. Thử gửi xác thực lên Google Apps Script Backend kèm Device ID & Device Name
    try {
      var url = CONFIG.API_URL + "?action=verify_pin&pin=" + encodeURIComponent(cleanPin) + "&deviceId=" + encodeURIComponent(deviceId) + "&deviceName=" + encodeURIComponent(deviceName);
      var res = await fetch(url);
      var json = await res.json();
      if (json && json.success) {
        var serverSession = {
          role: "pin_user",
          unlockedGrade: json.grade || "all",
          pinCode: cleanPin,
          phone: json.phone || cleanPin,
          expiresAt: json.expiresAt,
          remainingDays: json.remainingDays,
          deviceCount: json.deviceCount || 1,
          displayName: json.grade === "all" ? "Giáo viên (Toàn bộ 5 khối)" : ("Giáo viên (Khối " + json.grade + ")")
        };
        sessionStorage.setItem("tvth_user_session", JSON.stringify(serverSession));
        localStorage.setItem("tvth_user_session", JSON.stringify(serverSession));
        this.updateAuthUI();
        return { success: true, session: serverSession };
      } else {
        return { success: false, msg: json.error || "Mã PIN không đúng hoặc đã hết hạn!" };
      }
    } catch(err) {
      console.warn("Backend offline or unreachable:", err);
      return { success: false, msg: "Không thể kết nối máy chủ xác thực. Vui lòng kiểm tra kết nối mạng và thử lại!" };
    }

    return { success: false, msg: "Mã PIN không đúng hoặc đã hết hạn!" };
  },

  loginAdmin: async function(password) {
    if (!password) return { success: false, msg: "Vui lòng nhập mật khẩu Quản trị" };

    try {
      var res = await fetch(CONFIG.API_URL + "?action=verify_admin&password=" + encodeURIComponent(password));
      var json = await res.json();
      if (json && json.success) {
        var adminSession = {
          role: "admin",
          unlockedGrade: "all",
          displayName: "Thầy Lê Thành Long (Quản trị viên)"
        };
        sessionStorage.setItem("tvth_user_session", JSON.stringify(adminSession));
        sessionStorage.setItem("tvth_admin_token", json.token || "admin_auth_success");
        this.updateAuthUI();
        return { success: true };
      }
    } catch(err) {
      console.warn("Backend verification error:", err);
      return { success: false, msg: "Không thể kết nối máy chủ xác thực. Vui lòng kiểm tra kết nối mạng và thử lại!" };
    }

    return { success: false, msg: "Mật khẩu Quản trị không chính xác!" };
  },

  changeAdminPassword: async function(oldPassword, newPassword) {
    if (!oldPassword || !newPassword) {
      return { success: false, msg: "Vui lòng nhập đầy đủ mật khẩu cũ và mật khẩu mới!" };
    }
    if (newPassword.length < 4) {
      return { success: false, msg: "Mật khẩu mới phải có ít nhất 4 ký tự!" };
    }

    try {
      var token = this.getAdminToken();
      var url = CONFIG.API_URL + "?action=change_password&oldPassword=" + encodeURIComponent(oldPassword) + "&newPassword=" + encodeURIComponent(newPassword) + "&adminToken=" + encodeURIComponent(token);
      var res = await fetch(url);
      var json = await res.json();
      if (json && json.success) {
        // Cập nhật token và lưu trạng thái
        if (json.token) {
          sessionStorage.setItem("tvth_admin_token", json.token);
        }
        return { success: true, msg: json.message || "Đã đổi mật khẩu Admin thành công!" };
      } else {
        return { success: false, msg: json.error || "Mật khẩu cũ không chính xác!" };
      }
    } catch(err) {
      console.warn("Change password error:", err);
      return { success: false, msg: "Không thể kết nối máy chủ Google. Vui lòng kiểm tra lại mạng!" };
    }
  },

  logout: function() {
    sessionStorage.removeItem("tvth_user_session");
    sessionStorage.removeItem("tvth_admin_token");
    localStorage.removeItem("tvth_user_session");
    this.updateAuthUI();
    showToast("Đã đăng xuất tài khoản", "info");
    if (typeof refreshCurrentView === "function") refreshCurrentView();
  },

  canDownload: function(item) {
    if (!item) return false;
    var session = this.getSession();
    if (session.role === "admin") return true;

    var perm = this.getFilePermission(item);
    if (perm === "free") return true;
    if (perm === "hidden") return false;

    if (perm === "pin") {
      if (session.role === "pin_user") {
        if (session.unlockedGrade === "all") return true;
        if (item.grade && parseInt(item.grade) === parseInt(session.unlockedGrade)) return true;
      }
      return false;
    }

    return false;
  },

  updateAuthUI: function() {
    var session = this.getSession();
    var roleBox = document.getElementById("user-role-box");
    if (!roleBox) return;

    if (session.role === "admin") {
      roleBox.innerHTML = `
        <div class="user-role-badge role-admin">
          <i class="fa-solid fa-crown" style="color: #fbbf24;"></i>
          <span>Thầy Lê Thành Long (Admin)</span>
        </div>
        <div style="font-size: 0.72rem; color: #86efac; margin-top: 0.3rem;">
          <i class="fa-solid fa-shield-check"></i> Đang kết nối bảo mật máy chủ
        </div>
        <button class="btn btn-sm btn-outline" style="width: 100%; margin-top: 0.4rem; color: #ffffff; border-color: rgba(255,255,255,0.4);" onclick="AuthService.logout()">
          <i class="fa-solid fa-right-from-bracket"></i> Đăng xuất Admin
        </button>
      `;
    } else if (session.role === "pin_user") {
      var expiryInfo = "";
      if (session.remainingDays !== undefined) {
        expiryInfo = `<div style="font-size: 0.72rem; color: #fde047; margin-top: 0.25rem;">
          <i class="fa-regular fa-clock"></i> Còn ${session.remainingDays} ngày • Thiết bị: ${session.deviceCount || 1}/2
        </div>`;
      }
      roleBox.innerHTML = `
        <div class="user-role-badge role-pin">
          <i class="fa-solid fa-key" style="color: #facc15;"></i>
          <span>${session.displayName}</span>
        </div>
        ${expiryInfo}
        <button class="btn btn-sm btn-outline" style="width: 100%; margin-top: 0.4rem;" onclick="AuthService.logout()">
          <i class="fa-solid fa-right-from-bracket"></i> Đổi mã / Đăng xuất
        </button>
      `;
    } else {
      roleBox.innerHTML = `
        <div class="user-role-badge role-guest">
          <i class="fa-solid fa-user"></i>
          <span>Khách • Xem trước miễn phí</span>
        </div>
        <div style="display: flex; gap: 0.35rem; margin-top: 0.45rem;">
          <button class="btn btn-sm btn-primary" style="flex: 1; padding: 0.35rem 0.2rem; font-size: 0.75rem; background: #ea580c; border-color: #ea580c;" onclick="openPaymentModal()">
            <i class="fa-solid fa-qrcode"></i> Nạp / Mở Khóa
          </button>
          <button class="btn btn-sm btn-outline" style="flex: 1; padding: 0.35rem 0.2rem; font-size: 0.75rem;" onclick="openPinModal()">
            <i class="fa-solid fa-key"></i> Nhập PIN
          </button>
        </div>
        <div style="margin-top: 0.35rem;">
          <button class="btn btn-sm btn-outline" style="width: 100%; padding: 0.25rem 0.2rem; font-size: 0.72rem; color: #94a3b8; border-color: rgba(255,255,255,0.15);" onclick="openAdminLoginModal()">
            <i class="fa-solid fa-lock"></i> Đăng nhập Admin
          </button>
        </div>
      `;
    }

    // Chỉ hiện "Cấu Hình & Quản Trị" khi là Admin; Trợ Lý AI Ra Đề mở cho tất cả người dùng
    var isAdmin = session.role === 'admin';
    var navSettings = document.getElementById('nav-settings');
    if (navSettings) {
      navSettings.style.display = isAdmin ? '' : 'none';
    }

    var navAiExam = document.getElementById('nav-ai-exam');
    if (navAiExam) {
      navAiExam.style.display = '';
    }

    var headerAiBtn = document.getElementById('btn-header-ai');
    if (headerAiBtn) {
      headerAiBtn.style.display = '';
    }
  }

};

window.AuthService = AuthService;

function openPinModal() {
  var modal = document.getElementById("pin-modal");
  if (modal) {
    modal.classList.add("active", "show");
    var input = document.getElementById("input-pin-code");
    if (input) { input.value = ""; input.focus(); }
  }
}

function closePinModal() {
  var modal = document.getElementById("pin-modal");
  if (modal) modal.classList.remove("active", "show");
}

async function submitPinCode() {
  var input = document.getElementById("input-pin-code");
  var val = input ? input.value : "";
  var res = await AuthService.verifyPin(val);
  if (res.success) {
    closePinModal();
    showToast("Mở khóa quyền tải thành công!", "success");
    if (typeof refreshCurrentView === "function") refreshCurrentView();

    // TỰ ĐỘNG BẬT TẢI TỆP NGAY LẬP TỨC
    if (DriveService && DriveService.pendingFile) {
      var target = DriveService.pendingFile;
      DriveService.pendingFile = null;
      setTimeout(function() {
        DriveService.downloadFile(target);
      }, 350);
    }
  } else {
    var err = document.getElementById("pin-error-msg");
    if (err) { err.textContent = res.msg; err.style.display = "block"; }
  }
}

function openAdminLoginModal() {
  var modal = document.getElementById("admin-modal");
  if (modal) {
    modal.classList.add("active", "show");
    var input = document.getElementById("admin-password-input");
    if (input) { input.value = ""; input.focus(); }
  }
}

function closeAdminLoginModal() {
  var modal = document.getElementById("admin-modal");
  if (modal) modal.classList.remove("active", "show");
}

async function submitAdminLogin() {
  var input = document.getElementById("admin-password-input");
  var val = input ? input.value : "";
  var res = await AuthService.loginAdmin(val);
  if (res.success) {
    closeAdminLoginModal();
    showToast("Đăng nhập Quản trị thành công! Chào Thầy Lê Thành Long", "success");
    if (typeof refreshCurrentView === "function") refreshCurrentView();
  } else {
    var err = document.getElementById("admin-error-msg");
    if (err) { err.textContent = res.msg; err.style.display = "block"; }
  }
}

var paymentPollInterval = null;

function openPaymentModal() {
  var modal = document.getElementById("payment-modal");
  if (modal) {
    modal.classList.add("active", "show");
    backToPaymentStep1();
    var input = document.getElementById("pay-phone-input");
    if (input) { input.focus(); }
  }
}

function closePaymentModal() {
  var modal = document.getElementById("payment-modal");
  if (modal) modal.classList.remove("active", "show");
  if (paymentPollInterval) {
    clearInterval(paymentPollInterval);
    paymentPollInterval = null;
  }
}

function backToPaymentStep1() {
  var step1 = document.getElementById("payment-step-1");
  var step2 = document.getElementById("payment-step-2");
  if (step1) step1.style.display = "block";
  if (step2) step2.style.display = "none";
  if (paymentPollInterval) {
    clearInterval(paymentPollInterval);
    paymentPollInterval = null;
  }
}

function updatePaymentPackageUI() {
  var pkg = document.querySelector('input[name="pay-package"]:checked')?.value || "SINGLE";
  var picker = document.getElementById("single-grade-picker");
  if (picker) {
    picker.style.display = pkg === "SINGLE" ? "block" : "none";
  }
}

function generateQrCodeStep() {
  var phone = (document.getElementById("pay-phone-input")?.value || "").trim().replace(/\D/g, "");
  if (!phone || phone.length < 9) {
    showToast("Vui lòng nhập đúng Số Điện Thoại / Zalo để làm Mã PIN!", "error");
    return;
  }

  var pkg = document.querySelector('input[name="pay-package"]:checked')?.value || "SINGLE";
  var grade = document.getElementById("pay-grade-select")?.value || "5";
  var amount = pkg === "SINGLE" ? (CONFIG.PAYMENT?.PRICING?.SINGLE_GRADE || 100000) : (CONFIG.PAYMENT?.PRICING?.ALL_GRADES || 350000);
  var targetGrade = pkg === "SINGLE" ? grade : "all";

  // Cú pháp chuyển khoản ngắn gọn chuẩn VietQR: TV [SĐT] K[Lớp]
  var memo = "TV " + phone + (pkg === "SINGLE" ? (" K" + grade) : " ALL");

  var bankId = CONFIG.PAYMENT?.BANK_ID || "970405";
  var accountNo = CONFIG.PAYMENT?.ACCOUNT_NO || "7411215029816";
  var accountName = encodeURIComponent(CONFIG.PAYMENT?.ACCOUNT_NAME || "LE THANH LONG");

  // Link ảnh VietQR chuẩn Ngân hàng Việt Nam (tự động render QR kèm số tiền và nội dung)
  var qrUrl = `https://img.vietqr.io/image/${bankId}-${accountNo}-compact2.png?amount=${amount}&addInfo=${encodeURIComponent(memo)}&accountName=${accountName}`;

  var img = document.getElementById("vietqr-image");
  if (img) img.src = qrUrl;

  var amtText = document.getElementById("qr-amount-text");
  if (amtText) amtText.textContent = amount.toLocaleString("vi-VN") + "đ";

  var memoText = document.getElementById("qr-memo-text");
  if (memoText) memoText.textContent = memo;

  var zaloLink = document.getElementById("btn-zalo-confirm");
  if (zaloLink) {
    var zaloPhone = CONFIG.ZALO_PHONE || "0931049998";
    var zaloMsg = `Chào Thầy Long, em vừa chuyển khoản ${amount.toLocaleString('vi-VN')}đ gói ${pkg === 'SINGLE' ? ('Khối ' + grade) : '5 Khối'} qua SĐT ${phone}. Nội dung: ${memo}`;
    zaloLink.href = `https://zalo.me/${zaloPhone}?text=${encodeURIComponent(zaloMsg)}`;
  }

  // Chuyển sang Bước 2
  document.getElementById("payment-step-1").style.display = "none";
  document.getElementById("payment-step-2").style.display = "block";

  // Bắt đầu lắng nghe thanh toán tự động (Polling mỗi 3.5 giây)
  startPaymentPolling(phone, targetGrade, memo);
}

function startPaymentPolling(phone, grade, memo) {
  if (paymentPollInterval) clearInterval(paymentPollInterval);

  var attempts = 0;
  paymentPollInterval = setInterval(async function() {
    attempts++;
    if (attempts > 100) { // Quá 5 phút
      clearInterval(paymentPollInterval);
      return;
    }

    try {
      var url = CONFIG.API_URL + "?action=check_payment_status&phone=" + encodeURIComponent(phone) + "&code=" + encodeURIComponent(phone);
      var res = await fetch(url);
      var json = await res.json();
      if (json && json.paid) {
        clearInterval(paymentPollInterval);
        paymentPollInterval = null;

        // Tự động xác thực mở khóa luôn trên máy
        await AuthService.verifyPin(phone);

        closePaymentModal();
        showToast("🎉 Chúc mừng bạn! Đã nhận thanh toán thành công. Đã mở khóa tải tài liệu trong 7 ngày!", "success");

        if (typeof refreshCurrentView === "function") refreshCurrentView();

        if (DriveService && DriveService.pendingFile) {
          var target = DriveService.pendingFile;
          DriveService.pendingFile = null;
          setTimeout(function() { DriveService.downloadFile(target); }, 400);
        }
      }
    } catch(e) {}
  }, 3500);
}

window.openPaymentModal = openPaymentModal;
window.closePaymentModal = closePaymentModal;
window.backToPaymentStep1 = backToPaymentStep1;
window.updatePaymentPackageUI = updatePaymentPackageUI;
window.generateQrCodeStep = generateQrCodeStep;

window.openPinModal = openPinModal;
window.closePinModal = closePinModal;
window.submitPinCode = submitPinCode;
window.openAdminLoginModal = openAdminLoginModal;
window.closeAdminLoginModal = closeAdminLoginModal;
window.submitAdminLogin = submitAdminLogin;
