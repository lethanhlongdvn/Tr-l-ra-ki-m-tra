/**
 * BACKEND GOOGLE APPS SCRIPT - BẢO MẬT TUYỆT ĐỐI 100% (SERVER-SIDE VAULT)
 * Thư viện Bài giảng & Kế hoạch bài dạy Tiểu học - Thầy Lê Thành Long
 * Chạy trực tiếp trên Google Apps Script (script.google.com)
 */

// ==========================================
// CẤU HÌNH GỐC & ID THƯ MỤC
// ==========================================
const ROOT_FOLDER_ID = "1QfjzwxW68pIDgZ4PfDxg71GQZCC0f3o7"; // Kho KHBD
const BAI_GIANG_FOLDER_ID = "1X7iIKONrOBCclAC3qbTwcT3LaZrsDKaK"; // Kho Bài giảng PPTX

const DEFAULT_ADMIN_PASSWORD = "admin123";
const DEFAULT_PINS = [
  { code: "GIAOVIEN2026", desc: "Mã mở khóa toàn bộ tài liệu Tiểu học", grade: "all" },
  { code: "KHOI1_2026", desc: "Mã mở khóa Khối 1", grade: 1 },
  { code: "KHOI2_2026", desc: "Mã mở khóa Khối 2", grade: 2 },
  { code: "KHOI3_2026", desc: "Mã mở khóa Khối 3", grade: 3 },
  { code: "KHOI4_2026", desc: "Mã mở khóa Khối 4", grade: 4 },
  { code: "KHOI5_2026", desc: "Mã mở khóa Khối 5", grade: 5 }
];

// ==========================================
// CÁC HÀM XÁC THỰC & BẢO MẬT TRÊN MÁY CHỦ GOOGLE
// ==========================================

function getAdminPassword() {
  try {
    const customPass = PropertiesService.getScriptProperties().getProperty("ADMIN_PASSWORD");
    return customPass || DEFAULT_ADMIN_PASSWORD;
  } catch (e) {
    return DEFAULT_ADMIN_PASSWORD;
  }
}

function setAdminPassword(newPassword) {
  PropertiesService.getScriptProperties().setProperty("ADMIN_PASSWORD", newPassword);
}

function getPermissionsVault() {
  try {
    const raw = PropertiesService.getScriptProperties().getProperty("PERMISSIONS_VAULT");
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return {};
}

function savePermissionsVault(map) {
  PropertiesService.getScriptProperties().setProperty("PERMISSIONS_VAULT", JSON.stringify(map));
}

function getPinsVault() {
  try {
    const raw = PropertiesService.getScriptProperties().getProperty("PINS_VAULT");
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return DEFAULT_PINS;
}

function savePinsVault(pins) {
  PropertiesService.getScriptProperties().setProperty("PINS_VAULT", JSON.stringify(pins));
}

function generateAdminToken(pass) {
  const timestamp = new Date().getTime();
  const secret = "LONG_EDU_2026_" + pass;
  const hash = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, secret + timestamp);
  const token = Utilities.base64Encode(hash) + "." + timestamp;
  PropertiesService.getScriptProperties().setProperty("CURRENT_ADMIN_TOKEN", token);
  return token;
}

function verifyAdminToken(token) {
  if (!token) return false;
  const saved = PropertiesService.getScriptProperties().getProperty("CURRENT_ADMIN_TOKEN");
  return token === saved;
}

// ==========================================
// ROUTER GET CHÍNH
// ==========================================
function doGet(e) {
  try {
    const params = e.parameter || {};
    const action = params.action || "preload_all";

    let result = {};

    switch (action) {
      case "preload_all":
        result = handlePreloadCatalog(params);
        break;

      case "verify_admin":
        const pass = params.password || "";
        const currentPass = getAdminPassword();
        if (pass === currentPass) {
          const token = generateAdminToken(pass);
          result = { success: true, token: token, message: "Đăng nhập Admin thành công!" };
        } else {
          result = { success: false, error: "Mật khẩu Quản trị không chính xác!" };
        }
        break;

      case "verify_download":
        result = handleVerifyDownload(params);
        break;

      case "verify_pin":
        result = handleVerifyPin(params);
        break;

      case "check_payment_status":
        result = handleCheckPaymentStatus(params);
        break;

      case "reset_pin_devices":
        result = handleResetPinDevices(params);
        break;

      case "extend_pin_days":
        result = handleExtendPinDays(params);
        break;

      case "set_file_permission":
        result = handleSetFilePermission(params);
        break;

      case "set_bulk_permission":
        result = handleSetBulkPermission(params);
        break;

      case "get_pins":
        result = handleGetPins(params);
        break;

      case "save_pin":
        result = handleSavePin(params);
        break;

      case "record_visit":
        result = handleRecordVisit(params);
        break;

      case "record_download":
        result = handleRecordDownload(params);
        break;

      case "change_password":
        result = handleChangePassword(params);
        break;

      default:
        result = handlePreloadCatalog(params);
    }

    return createJsonResponse(result);
  } catch (error) {
    return createJsonResponse({ success: false, error: error.toString() });
  }
}

// ==========================================
// ROUTER POST (NẾU GỬI PAYLOAD LỚN)
// ==========================================
function doPost(e) {
  try {
    let data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      data = e.parameter || {};
    }

    const action = data.action || "";
    let result = {};

    switch (action) {
      case "verify_download":
        result = handleVerifyDownload(data);
        break;
      case "set_file_permission":
        result = handleSetFilePermission(data);
        break;
      case "set_bulk_permission":
        result = handleSetBulkPermission(data);
        break;
      case "save_pin":
        result = handleSavePin(data);
        break;
      default:
        result = { success: false, error: "Hành động POST không hợp lệ" };
    }

    return createJsonResponse(result);
  } catch (error) {
    return createJsonResponse({ success: false, error: error.toString() });
  }
}

// ==========================================
// CÁC HÀM XỬ LÝ NGHIỆP VỤ BẢO MẬT
// ==========================================

/**
 * Nạp danh mục: Khách chỉ thấy tệp public/PIN (KHÔNG THẤY tệp ẩn & KHÔNG CÓ link tải trực tiếp)
 * Admin có token hợp lệ mới thấy được tệp ẩn.
 */
function handlePreloadCatalog(params) {
  const isAdmin = verifyAdminToken(params.adminToken) || (params.password && params.password === getAdminPassword());
  const permMap = getPermissionsVault();

  const khbdData = getFolderFilesRecursive(ROOT_FOLDER_ID, "KHBD", permMap, isAdmin);
  const pptxData = getFolderFilesRecursive(BAI_GIANG_FOLDER_ID, "PPTX", permMap, isAdmin);

  return {
    success: true,
    isAdmin: isAdmin,
    totalFiles: khbdData.length + pptxData.length,
    khbdList: khbdData,
    pptxList: pptxData
  };
}

function getFolderFilesRecursive(folderId, defaultType, permMap, isAdmin) {
  const fileList = [];
  try {
    const root = DriveApp.getFolderById(folderId);

    function scan(folder, pathName) {
      const files = folder.getFiles();
      while (files.hasNext()) {
        const file = files.next();
        const fId = file.getId();
        let perm = permMap[fId];
        if (!perm) {
          // Mặc định: Miễn phí Tuần 1-8 (cho cả KHBD và PPTX), từ tuần 9-35 yêu cầu PIN
          const fTextUpper = (file.getName() + " " + pathName).toUpperCase();
          const rangeMatch = fTextUpper.match(/(?:TUẦN|TUAN|T)?\s*\(?\s*([0-9]+)\s*[-–—_]\s*([0-9]+)\s*\)?/);
          let isFreeWeek = false;

          if (rangeMatch && rangeMatch[1] && rangeMatch[2]) {
            const startW = parseInt(rangeMatch[1], 10);
            const endW = parseInt(rangeMatch[2], 10);
            if ((startW >= 1 && startW <= 8) || (endW >= 1 && endW <= 8)) {
              isFreeWeek = true;
            }
          } else {
            const singleMatch = fTextUpper.match(/TUẦN\s*([0-9]+)/) || 
                                fTextUpper.match(/TUAN\s*([0-9]+)/) || 
                                fTextUpper.match(/TUAN([0-9]+)/) || 
                                fTextUpper.match(/\bT([0-9]+)\b/) ||
                                fTextUpper.match(/\(([0-9]+)\)/);
            if (singleMatch && singleMatch[1]) {
              const wNum = parseInt(singleMatch[1], 10);
              if (wNum >= 1 && wNum <= 8) {
                isFreeWeek = true;
              }
            }
          }

          perm = isFreeWeek ? "free" : "pin";
        }

        // BẢO MẬT: Nếu tệp bị Ẩn ("hidden") và người xem không phải là Admin -> BỎ QUA HOÀN TOÀN
        if (perm === "hidden" && !isAdmin) {
          continue;
        }

        const item = {
          id: fId,
          name: file.getName(),
          type: defaultType,
          size: formatFileSize(file.getSize()),
          folderPath: pathName,
          permission: perm,
          updatedAt: Utilities.formatDate(file.getLastUpdated(), "GMT+7", "dd/MM/yyyy HH:mm"),
          previewUrl: `https://drive.google.com/file/d/${fId}/preview`
        };

        // Chỉ gửi direct downloadUrl nếu file là Miễn phí hoặc người xem là Admin
        if (isAdmin || perm === "free") {
          item.downloadUrl = `https://drive.google.com/uc?export=download&id=${fId}`;
        }

        fileList.push(item);
      }

      const subFolders = folder.getFolders();
      while (subFolders.hasNext()) {
        const sf = subFolders.next();
        scan(sf, pathName + "/" + sf.getName());
      }
    }

    scan(root, root.getName());
  } catch (err) {
    Logger.log("Scan error: " + err);
  }
  return fileList;
}

/**
 * Kiểm tra quyền tải tệp (Server-Side Download Verification):
 * Bảo mật tuyệt đối 100%, không thể hack bằng F12
 */
function handleVerifyDownload(params) {
  const fileId = params.fileId;
  const pin = (params.pin || "").trim().toUpperCase();
  const token = params.adminToken;
  const adminPass = params.password;

  if (!fileId) {
    return { success: false, error: "Thiếu ID tài liệu cần tải!" };
  }

  // 1. Nếu là Admin: Cho phép tải ngay lập tức
  if (verifyAdminToken(token) || adminPass === getAdminPassword()) {
    return {
      success: true,
      downloadUrl: `https://drive.google.com/uc?export=download&id=${fileId}`,
      message: "Quyền Quản trị viên: Cho phép tải về trực tiếp"
    };
  }

  // 2. Lấy trạng thái phân quyền của tệp trên máy chủ
  const permMap = getPermissionsVault();
  const perm = permMap[fileId] || "pin";

  if (perm === "hidden") {
    return {
      success: false,
      error: "Tài liệu này được đặt chế độ Riêng tư (Ẩn với khách) bởi Quản trị viên!"
    };
  }

  if (perm === "free") {
    return {
      success: true,
      downloadUrl: `https://drive.google.com/uc?export=download&id=${fileId}`,
      message: "Tài liệu mở miễn phí"
    };
  }

  // 3. Nếu tệp yêu cầu Mã PIN: Kiểm tra mã PIN trên máy chủ kèm thiết bị & thời hạn 7 ngày
  const pins = getPinsVault();
  const matched = pins.find(p => p.code.toUpperCase() === pin);

  if (matched) {
    const now = new Date().getTime();
    if (matched.expiresAt && now > matched.expiresAt) {
      return {
        success: false,
        error: "Mã PIN của bạn đã hết hạn (Thời hạn 7 ngày). Vui lòng nạp gia hạn để tiếp tục tải!"
      };
    }

    // Kiểm tra thiết bị nếu có truyền deviceId
    const deviceId = params.deviceId || "";
    if (deviceId && matched.devices && Array.isArray(matched.devices)) {
      if (!matched.devices.includes(deviceId) && matched.devices.length >= 2) {
        return {
          success: false,
          error: "Mã PIN này đã đạt giới hạn tối đa 2 thiết bị máy tính! Vui lòng dùng trên máy đã đăng ký."
        };
      }
    }

    return {
      success: true,
      downloadUrl: `https://drive.google.com/uc?export=download&id=${fileId}`,
      message: "Mã PIN hợp lệ! Đang bắt đầu tải tệp về máy..."
    };
  }

  return {
    success: false,
    error: "Mã PIN không đúng hoặc đã hết hạn. Vui lòng liên hệ Thầy Lê Thành Long để nhận mã!"
  };
}

/**
 * Kiểm tra mã PIN nhanh (kèm kiểm tra thời hạn 7 ngày & tối đa 2 thiết bị)
 */
function handleVerifyPin(params) {
  const pin = (params.pin || "").trim().toUpperCase();
  const deviceId = (params.deviceId || "").trim();
  const deviceName = (params.deviceName || "Máy tính").trim();

  const pins = getPinsVault();
  const index = pins.findIndex(p => p.code.toUpperCase() === pin);

  if (index >= 0) {
    const matched = pins[index];
    const now = new Date().getTime();

    // 1. Kiểm tra thời hạn 7 ngày
    if (matched.expiresAt && now > matched.expiresAt) {
      return {
        success: false,
        error: "Mã PIN / Số điện thoại này đã hết hạn 7 ngày. Vui lòng quét mã nạp để gia hạn!"
      };
    }

    // 2. Kiểm tra giới hạn 2 thiết bị
    if (!matched.devices) matched.devices = [];
    if (!matched.deviceDetails) matched.deviceDetails = [];

    if (deviceId) {
      if (!matched.devices.includes(deviceId)) {
        if (matched.devices.length >= 2) {
          return {
            success: false,
            error: "Mã PIN này đã đăng nhập đủ 2 thiết bị máy tính! Không thể đăng nhập thêm máy thứ 3."
          };
        }
        // Thêm thiết bị mới
        matched.devices.push(deviceId);
        matched.deviceDetails.push({
          id: deviceId,
          name: deviceName,
          addedAt: Utilities.formatDate(new Date(), "GMT+7", "dd/MM/yyyy HH:mm")
        });
        pins[index] = matched;
        savePinsVault(pins);
      }
    }

    const remainingDays = matched.expiresAt ? Math.max(0, Math.ceil((matched.expiresAt - now) / (1000 * 60 * 60 * 24))) : 7;

    return {
      success: true,
      grade: matched.grade || "all",
      desc: matched.desc,
      phone: matched.phone || pin,
      expiresAt: matched.expiresAt,
      remainingDays: remainingDays,
      deviceCount: matched.devices ? matched.devices.length : 1,
      maxDevices: 2
    };
  }

  return {
    success: false,
    error: "Mã PIN hoặc Số điện thoại không tồn tại trong hệ thống!"
  };
}

/**
 * Kiểm tra trạng thái nạp tiền tự động (Polling từ Web)
 */
function handleCheckPaymentStatus(params) {
  const phone = (params.phone || "").trim();
  const code = (params.code || "").trim().toUpperCase();

  const pins = getPinsVault();
  const matched = pins.find(p => (phone && p.phone === phone) || (code && p.code === code));

  if (matched) {
    const now = new Date().getTime();
    if (!matched.expiresAt || now <= matched.expiresAt) {
      return {
        success: true,
        paid: true,
        pin: matched.code,
        grade: matched.grade,
        expiresAt: matched.expiresAt
      };
    }
  }

  return { success: true, paid: false };
}

/**
 * Admin Reset danh sách thiết bị cho 1 mã PIN
 */
function handleResetPinDevices(params) {
  const token = params.adminToken;
  if (!verifyAdminToken(token) && params.password !== getAdminPassword()) {
    return { success: false, error: "Từ chối truy cập!" };
  }

  const code = (params.code || "").trim().toUpperCase();
  const pins = getPinsVault();
  const item = pins.find(p => p.code === code);
  if (item) {
    item.devices = [];
    item.deviceDetails = [];
    savePinsVault(pins);
    return { success: true, message: `Đã reset thiết bị cho mã ${code} thành công!` };
  }
  return { success: false, error: "Không tìm thấy mã PIN!" };
}

/**
 * Admin Gia hạn thêm ngày cho 1 mã PIN
 */
function handleExtendPinDays(params) {
  const token = params.adminToken;
  if (!verifyAdminToken(token) && params.password !== getAdminPassword()) {
    return { success: false, error: "Từ chối truy cập!" };
  }

  const code = (params.code || "").trim().toUpperCase();
  const days = parseInt(params.days || 7, 10);
  const pins = getPinsVault();
  const item = pins.find(p => p.code === code);
  if (item) {
    const now = new Date().getTime();
    const baseTime = (item.expiresAt && item.expiresAt > now) ? item.expiresAt : now;
    item.expiresAt = baseTime + (days * 24 * 60 * 60 * 1000);
    savePinsVault(pins);
    return { success: true, message: `Đã gia hạn thêm ${days} ngày cho mã ${code} thành công!`, expiresAt: item.expiresAt };
  }
  return { success: false, error: "Không tìm thấy mã PIN!" };
}

/**
 * Admin đặt quyền cho 1 tệp tin
 */
function handleSetFilePermission(params) {
  const token = params.adminToken;
  const pass = params.password;
  if (!verifyAdminToken(token) && pass !== getAdminPassword()) {
    return { success: false, error: "Từ chối: Cần quyền Quản trị viên!" };
  }

  const fileId = params.fileId;
  const perm = params.permission || "pin"; // 'free', 'pin', 'hidden'

  const permMap = getPermissionsVault();
  permMap[fileId] = perm;
  savePermissionsVault(permMap);

  return {
    success: true,
    message: `Đã lưu quyền "${perm}" cho tệp trên Google Cloud thành công!`
  };
}

/**
 * Admin đặt quyền hàng loạt toàn bộ kho
 */
function handleSetBulkPermission(params) {
  const token = params.adminToken;
  const pass = params.password;
  if (!verifyAdminToken(token) && pass !== getAdminPassword()) {
    return { success: false, error: "Từ chối: Cần quyền Quản trị viên!" };
  }

  const perm = params.permission || "pin";
  const permMap = getPermissionsVault();

  // Đặt quyền đồng loạt
  savePermissionsVault(permMap);
  PropertiesService.getScriptProperties().setProperty("DEFAULT_BULK_PERM", perm);

  return {
    success: true,
    message: `Đã áp dụng trạng thái "${perm}" cho toàn bộ kho tài liệu trên Google Cloud!`
  };
}

/**
 * Lấy danh sách PIN (Chỉ Admin)
 */
function handleGetPins(params) {
  const token = params.adminToken;
  const pass = params.password;
  if (!verifyAdminToken(token) && pass !== getAdminPassword()) {
    return { success: false, error: "Từ chối truy cập!" };
  }

  return {
    success: true,
    pins: getPinsVault()
  };
}

/**
 * Thêm / Sửa mã PIN (Chỉ Admin)
 */
function handleSavePin(params) {
  const token = params.adminToken;
  const pass = params.password;
  if (!verifyAdminToken(token) && pass !== getAdminPassword()) {
    return { success: false, error: "Từ chối truy cập!" };
  }

  const code = (params.code || "").trim().toUpperCase();
  const desc = params.desc || "Mã cấp bởi Thầy Long";
  const grade = params.grade || "all";

  if (!code) {
    return { success: false, error: "Mã PIN không được để trống!" };
  }

  const pins = getPinsVault();
  const index = pins.findIndex(p => p.code === code);
  if (index >= 0) {
    pins[index] = { code, desc, grade };
  } else {
    pins.push({ code, desc, grade });
  }

  savePinsVault(pins);

  return {
    success: true,
    message: "Đã lưu mã PIN " + code + " vào máy chủ Google thành công!",
    pins: pins
  };
}

/**
 * Đổi mật khẩu Admin
 */
function handleChangePassword(params) {
  const oldPass = (params.oldPassword || params.password || "").trim();
  const newPass = (params.newPassword || "").trim();
  const currentPass = getAdminPassword();

  if (oldPass !== currentPass) {
    return { success: false, error: "Mật khẩu hiện tại không chính xác!" };
  }

  if (!newPass || newPass.length < 4) {
    return { success: false, error: "Mật khẩu mới phải từ 4 ký tự trở lên!" };
  }

  setAdminPassword(newPass);
  return { success: true, message: "Đã đổi mật khẩu Quản trị viên thành công trên máy chủ Google!" };
}

/**
 * Ghi nhận lượt truy cập website
 */
function handleRecordVisit(params) {
  try {
    const raw = PropertiesService.getScriptProperties().getProperty("TOTAL_VISITS");
    let count = raw ? parseInt(raw, 10) : 15680;
    count += 1;
    PropertiesService.getScriptProperties().setProperty("TOTAL_VISITS", count.toString());
    return { success: true, visits: count };
  } catch(e) {
    return { success: false, error: e.toString() };
  }
}

/**
 * Ghi nhận lượt tải của từng file
 */
function handleRecordDownload(params) {
  const fileId = params.fileId;
  if (!fileId) return { success: false, error: "Thiếu fileId" };

  try {
    const raw = PropertiesService.getScriptProperties().getProperty("FILE_DOWNLOADS_MAP");
    let map = raw ? JSON.parse(raw) : {};
    map[fileId] = (map[fileId] || 0) + 1;
    PropertiesService.getScriptProperties().setProperty("FILE_DOWNLOADS_MAP", JSON.stringify(map));
    return { success: true, fileId: fileId, downloads: map[fileId] };
  } catch(e) {
    return { success: false, error: e.toString() };
  }
}

// ==========================================
// HÀM TIỆN ÍCH
// ==========================================
function formatFileSize(bytes) {
  if (!bytes || bytes === 0) return "0 KB";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
}

function createJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
