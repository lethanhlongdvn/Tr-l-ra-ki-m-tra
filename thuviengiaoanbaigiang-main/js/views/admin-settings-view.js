/**
 * ADMIN & SETTINGS VIEW MODULE (TOOLKIT, SETTINGS, PIN MANAGEMENT, DRIVE SYNC)
 * Phân hệ quản trị viên, tiện ích lớp học và cấu hình hệ thống
 * Thư viện Bài giảng & Kế hoạch bài dạy Tiểu học - Lê Thành Long
 */

/* ==========================================================================
   VIEW 6: TIỆN ÍCH LỚP HỌC (TOOLKIT)
   ========================================================================== */
function renderToolkitView(container) {
  container.innerHTML = `
    <div class="section-header">
      <div>
        <h2 class="section-title">
          <i class="fa-solid fa-shapes" style="color: #34d399;"></i> 
          Tiện Ích Trợ Giảng Trên Lớp Học
        </h2>
        <p class="section-subtitle">
          Công cụ hỗ trợ tương tác trực tiếp trên màn hình cảm ứng, máy chiếu hoặc tivi lớp học
        </p>
      </div>
    </div>

    <div class="toolkit-deck">
      <div class="tool-panel">
        <h3 style="font-size: 1.1rem; font-weight: 800; margin-bottom: 0.25rem; color: var(--primary);">
          🎯 Vòng Quay Gọi Học Sinh Ngẫu Nhiên
        </h3>
        <p style="font-size: 0.78rem; color: var(--text-muted);">Tạo hứng thú khi kiểm tra bài cũ hoặc thảo luận</p>

        <div class="wheel-frame">
          <div class="wheel-needle"></div>
          <canvas id="wheelCanvas" width="260" height="260"></canvas>
        </div>

        <div id="wheelResult" style="min-height: 35px; margin-bottom: 0.75rem;">
          <span style="color: var(--text-muted); font-size: 0.85rem;">Bấm nút để bắt đầu quay</span>
        </div>

        <button class="btn btn-primary" style="width: 100%;" onclick="ToolkitService.spinWheel()">
          <i class="fa-solid fa-rotate-right"></i> QUAY NGAY
        </button>

        <details style="margin-top: 1rem; width: 100%; text-align: left; font-size: 0.8rem;">
          <summary style="cursor: pointer; color: var(--accent); font-weight: 600;">Chỉnh sửa danh sách học sinh</summary>
          <div style="margin-top: 0.45rem;">
            <textarea id="studentListInput" class="form-control" rows="4">${ToolkitService.students.join('\n')}</textarea>
            <button class="btn btn-sm btn-outline" style="margin-top: 0.4rem; width: 100%;" onclick="ToolkitService.updateStudentList(document.getElementById('studentListInput').value)">
              Cập nhật danh sách
            </button>
          </div>
        </details>
      </div>

      <div class="tool-panel">
        <h3 style="font-size: 1.1rem; font-weight: 800; margin-bottom: 0.25rem; color: var(--primary);">
          ⏰ Đồng Hồ Bấm Giờ Thảo Luận Nhóm
        </h3>
        <p style="font-size: 0.78rem; color: var(--text-muted);">Tính giờ làm bài tập, thảo luận nhóm theo mốc chuẩn</p>

        <div class="clock-timer-text" id="timerDisplay">03:00</div>

        <div style="display: flex; gap: 0.4rem; margin-bottom: 1.15rem; flex-wrap: wrap; justify-content: center;">
          <button class="btn btn-sm btn-outline" onclick="ToolkitService.setTimerPreset(60)">1 Phút</button>
          <button class="btn btn-sm btn-outline" onclick="ToolkitService.setTimerPreset(120)">2 Phút</button>
          <button class="btn btn-sm btn-outline" onclick="ToolkitService.setTimerPreset(180)">3 Phút</button>
          <button class="btn btn-sm btn-outline" onclick="ToolkitService.setTimerPreset(300)">5 Phút</button>
        </div>

        <div style="display: flex; gap: 0.45rem; width: 100%;">
          <button class="btn btn-primary" style="flex: 1;" onclick="ToolkitService.startTimer()">
            <i class="fa-solid fa-play"></i> Bắt Đầu
          </button>
          <button class="btn btn-outline" onclick="ToolkitService.pauseTimer()">
            <i class="fa-solid fa-pause"></i> Tạm Dừng
          </button>
          <button class="btn btn-outline" onclick="ToolkitService.resetTimer()">
            <i class="fa-solid fa-rotate-left"></i> Đặt Lại
          </button>
        </div>
      </div>
    </div>
  `;

  setTimeout(function() {
    ToolkitService.initWheel();
    ToolkitService.updateTimerDisplay();
  }, 100);
}

/* ==========================================================================
   VIEW 7: CẤU HÌNH & QUẢN TRỊ (SETTINGS)
   ========================================================================== */
function renderSettingsView(container) {
  var session = AuthService.getSession();
  var isAdmin = session.role === "admin";
  var pins = AuthService.getValidPins();
  var apiKey = localStorage.getItem("tvth_gemini_api_key") || "";
  var calConfig = (window.AcademicCalendar && AcademicCalendar.getConfig()) || { startDate: '2026-09-07', tetBreakStartWeek: 21, tetBreakWeeks: 2, totalStudyWeeks: 35 };

  container.innerHTML = `
    <div class="section-header">
      <div>
        <h2 class="section-title">
          <i class="fa-solid fa-sliders"></i> 
          Trung Tâm Quản Trị & Cấu Hình Google Drive
        </h2>
        <p class="section-subtitle">
          Quản lý đường dẫn kho lưu trữ, danh sách Mã PIN mở khóa và phân quyền từng tài liệu
        </p>
      </div>
      <div>
        ${isAdmin ? `
          <span class="access-tag-free" style="font-size: 0.85rem; padding: 0.4rem 0.8rem;">
            <i class="fa-solid fa-crown" style="color: #d97706;"></i> Quyền Quản trị: Thầy Lê Thành Long
          </span>
        ` : `
          <button class="btn btn-primary" onclick="openAdminLoginModal()">
            <i class="fa-solid fa-lock"></i> Đăng Nhập Quản Trị
          </button>
        `}
      </div>
    </div>

    <!-- Phân Quyền Hàng Loạt (Dành cho Admin) -->
    ${isAdmin ? `
      <div class="ai-ctrl-box" style="margin-bottom: 1.25rem; background: linear-gradient(135deg, #f0fdf4, #eff6ff); border: 1px solid #93c5fd;">
        <h3 style="font-size: 1.05rem; font-weight: 800; margin-bottom: 0.45rem; color: #1e3a8a;">
          <i class="fa-solid fa-wand-magic-sparkles"></i> Phân Quyền Hàng Loạt Toàn Bộ Kho
        </h3>
        <p style="font-size: 0.8rem; color: #334155; margin-bottom: 0.85rem;">
          Bạn có thể <strong>khóa toàn bộ rồi mở từng cái</strong>, hoặc <strong>mở toàn bộ rồi khóa từng cái</strong>, hoặc <strong>ẩn toàn bộ với khách</strong>:
        </p>
        <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
          <button class="btn btn-sm btn-primary" style="background: #d97706;" onclick="AuthService.setBulkPermission('pin')">
            <i class="fa-solid fa-lock"></i> 1. Khóa toàn bộ kho (Cần PIN)
          </button>
          <button class="btn btn-sm btn-primary" style="background: #16a34a;" onclick="AuthService.setBulkPermission('free')">
            <i class="fa-solid fa-unlock"></i> 2. Mở toàn bộ kho (Miễn phí)
          </button>
          <button class="btn btn-sm btn-primary" style="background: #dc2626;" onclick="AuthService.setBulkPermission('hidden')">
            <i class="fa-solid fa-eye-slash"></i> 3. Ẩn toàn bộ kho với khách
          </button>
        </div>
      </div>
    ` : ''}

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem;">
      <div class="ai-ctrl-box">
        <h3 style="font-size: 1.05rem; font-weight: 800; margin-bottom: 0.65rem; color: var(--primary);">
          <i class="fa-brands fa-google-drive" style="color: #16a34a;"></i> 2 Kho Google Drive Thực Tế
        </h3>
        <p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 1rem;">
          Đã kết nối trực tiếp với 2 kho Google Drive của Thầy Lê Thành Long
        </p>

        <div class="form-group">
          <label>1. Folder ID Kho KHBD (535 tệp):</label>
          <input type="text" id="driveKhbdInput" class="form-control" value="${CONFIG.KHBD_FOLDER_ID}" ${!isAdmin ? 'disabled' : ''}>
        </div>

        <div class="form-group">
          <label>2. Folder ID Kho Bài Giảng (81 slide):</label>
          <input type="text" id="drivePptxInput" class="form-control" value="${CONFIG.BAI_GIANG_FOLDER_ID}" ${!isAdmin ? 'disabled' : ''}>
        </div>

        <button class="btn btn-outline" style="width: 100%; margin-top: 0.5rem;" onclick="syncDriveData(true)">
          <i class="fa-solid fa-rotate-right"></i> Đồng bộ lại từ Google Drive
        </button>
      </div>

      <!-- Cài Đặt Thời Gian Năm Học (Kế thừa chuẩn EduRobot) -->
      <div class="ai-ctrl-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.65rem;">
          <h3 style="font-size: 1.05rem; font-weight: 800; color: #1e40af; margin: 0; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fa-solid fa-calendar-days" style="color: #2563eb;"></i> Cài Đặt Thời Gian Năm Học
          </h3>
          <span style="font-size: 0.72rem; font-weight: 700; background: #dbeafe; color: #1e40af; padding: 2px 8px; border-radius: 999px;">
            35 Tuần Thực Học
          </span>
        </div>
        <p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0.85rem;">
          Tự động phân bổ lịch 35 tuần, tính chính xác ngày cho từng bài dạy và bảng Thời khóa biểu khi xuất Word.
        </p>

        <div class="form-group">
          <label style="font-size: 0.78rem; font-weight: 700; color: #334155;">
            🚩 Ngày bắt đầu Tuần 1 (Thứ Hai):
          </label>
          <input type="date" id="adminCalendarStartDate" class="form-control" value="${calConfig.startDate}" onchange="updateAdminCalendarPreview()" ${!isAdmin ? 'disabled' : ''}>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.65rem; margin-bottom: 0.75rem;">
          <div class="form-group" style="margin-bottom: 0;">
            <label style="font-size: 0.78rem; font-weight: 700; color: #334155;">
              🧧 Tuần nghỉ Tết:
            </label>
            <input type="number" id="adminCalendarTetStart" class="form-control" min="1" max="35" value="${calConfig.tetBreakStartWeek}" onchange="updateAdminCalendarPreview()" ${!isAdmin ? 'disabled' : ''}>
            <small style="font-size: 0.68rem; color: var(--text-muted);">Sau tuần này sẽ nghỉ Tết</small>
          </div>
          <div class="form-group" style="margin-bottom: 0;">
            <label style="font-size: 0.78rem; font-weight: 700; color: #334155;">
              🌴 Số tuần nghỉ:
            </label>
            <input type="number" id="adminCalendarTetWeeks" class="form-control" min="1" max="4" value="${calConfig.tetBreakWeeks}" onchange="updateAdminCalendarPreview()" ${!isAdmin ? 'disabled' : ''}>
            <small style="font-size: 0.68rem; color: var(--text-muted);">Mặc định 2 tuần</small>
          </div>
        </div>

        <!-- Khung Xem Trước Thời Gian Thực (Live Preview) -->
        <div id="adminCalendarPreviewBox" style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: var(--radius-sm); padding: 0.65rem 0.85rem; margin-bottom: 0.85rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
            <span style="font-size: 0.75rem; font-weight: 700; color: #1e40af;">Hôm nay hệ thống tính là:</span>
            <span id="adminCalendarCurrentBadge" style="background: #2563eb; color: #fff; font-weight: 800; font-size: 0.72rem; padding: 2px 8px; border-radius: 999px;">
              Đang tính...
            </span>
          </div>
          <div id="adminCalendarWeek1Preview" style="font-size: 0.72rem; color: #1e3a8a; line-height: 1.45;">
            Đang tải dữ liệu tuần...
          </div>
        </div>

        ${isAdmin ? `
          <button class="btn btn-primary" style="width: 100%;" onclick="saveAdminCalendarConfig()">
            <i class="fa-solid fa-floppy-disk"></i> Lưu Cài Đặt Thời Gian Năm Học
          </button>
        ` : ''}
      </div>

      <div class="ai-ctrl-box" style="grid-column: 1 / -1;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--primary); display: flex; align-items: center; gap: 0.45rem;">
              <i class="fa-solid fa-key" style="color: #d97706;"></i> Quản Lý & Cấp Mã PIN Cho Giáo Viên / Đồng Nghiệp
            </h3>
            <p style="font-size: 0.8rem; color: var(--text-muted);">
              Tạo mã PIN cấp cho từng giáo viên hoặc từng khối lớp. Đồng nghiệp nhập mã này để mở khóa quyền tải về.
            </p>
          </div>
        </div>

        <!-- Form Tạo Mã PIN Mới -->
        ${isAdmin ? `
          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: var(--radius-sm); padding: 1rem; margin-bottom: 1.25rem;">
            <div style="font-weight: 700; font-size: 0.85rem; color: var(--primary); margin-bottom: 0.65rem;">
              <i class="fa-solid fa-plus-circle" style="color: #16a34a;"></i> Tạo Mã PIN Mới:
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.65rem; align-items: flex-end;">
              <div class="form-group" style="margin-bottom: 0;">
                <label style="font-size: 0.78rem;">Mã PIN (viết liền, không dấu):</label>
                <input type="text" id="newPinInput" class="form-control text-uppercase" placeholder="VD: COLAN_2026, THAYNAM...">
              </div>
              <div class="form-group" style="margin-bottom: 0;">
                <label style="font-size: 0.78rem;">Phạm vi mở khóa:</label>
                <select id="newPinGradeSelect" class="form-select">
                  <option value="all">Mở khóa toàn bộ 5 Khối</option>
                  <option value="1">Chỉ mở Khối 1</option>
                  <option value="2">Chỉ mở Khối 2</option>
                  <option value="3">Chỉ mở Khối 3</option>
                  <option value="4">Chỉ mở Khối 4</option>
                  <option value="5">Chỉ mở Khối 5</option>
                </select>
              </div>
              <div class="form-group" style="margin-bottom: 0;">
                <label style="font-size: 0.78rem;">Ghi chú người nhận:</label>
                <input type="text" id="newPinDescInput" class="form-control" placeholder="VD: Cấp cho cô Lan - Khối 5">
              </div>
              <div>
                <button class="btn btn-primary" style="width: 100%; height: 38px;" onclick="addNewPinCode()">
                  <i class="fa-solid fa-check"></i> Tạo & Cấp Mã
                </button>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- Danh Sách Mã PIN & Thành Viên Đang Kích Hoạt -->
        <div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-sm); overflow-x: auto;">
          <table class="formal-matrix-table" style="margin: 0;">
            <thead>
              <tr style="background: #f1f5f9;">
                <th style="width: 20%;">Mã PIN / SĐT</th>
                <th style="width: 15%;">Phạm Vi</th>
                <th style="width: 15%;">Thiết Bị</th>
                <th style="width: 20%;">Thời Hạn</th>
                <th style="width: 30%; text-align: center;">Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              ${pins.map(function(p) {
                var gradeLabel = p.grade === 'all' ? 'Tất cả 5 khối' : ('Khối ' + p.grade);
                var devCount = (p.devices && Array.isArray(p.devices)) ? p.devices.length : 0;
                var devBadge = devCount >= 2 ? '<span style="color:#dc2626; font-weight:700;">2/2 (Đầy)</span>' : (`<span style="color:#16a34a; font-weight:700;">${devCount}/2</span>`);
                
                var now = Date.now();
                var isExpired = p.expiresAt && now > p.expiresAt;
                var daysLeft = p.expiresAt ? Math.max(0, Math.ceil((p.expiresAt - now)/(1000*60*60*24))) : 7;
                var expBadge = isExpired ? '<span style="color:#dc2626; font-size:0.75rem; font-weight:700;">Đã hết hạn</span>' : (`<span style="color:#0284c7; font-size:0.75rem;">Còn ${daysLeft} ngày</span>`);

                return `
                  <tr>
                    <td>
                      <strong style="color: #1e3a8a; font-family: monospace; font-size: 0.95rem; background: #e0f2fe; padding: 0.2rem 0.5rem; border-radius: 4px;">
                        ${p.code}
                      </strong>
                      <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 2px;">${p.desc || ''}</div>
                    </td>
                    <td>
                      <span class="access-tag-free">${gradeLabel}</span>
                    </td>
                    <td>
                      ${devBadge}
                    </td>
                    <td>
                      ${expBadge}
                    </td>
                    <td style="text-align: center;">
                      <div style="display: flex; gap: 0.35rem; justify-content: center; flex-wrap: wrap;">
                        <button class="btn btn-sm btn-outline" style="font-size: 0.72rem; padding: 0.2rem 0.4rem;" onclick="copyPinShareMessage('${p.code}', '${p.grade}', '${p.desc || ''}')" title="Sao chép tin nhắn gửi qua Zalo / Facebook">
                          <i class="fa-solid fa-share-nodes" style="color: #0284c7;"></i> Zalo
                        </button>
                        ${isAdmin ? `
                          <button class="btn btn-sm btn-outline" style="font-size: 0.72rem; padding: 0.2rem 0.4rem; color: #d97706; border-color: #fde68a;" onclick="resetPinDevicesPrompt('${p.code}')" title="Reset để cho phép đổi sang 2 máy tính mới">
                            <i class="fa-solid fa-rotate-left"></i> Reset Máy
                          </button>
                          <button class="btn btn-sm btn-outline" style="font-size: 0.72rem; padding: 0.2rem 0.4rem; color: #16a34a; border-color: #bbf7d0;" onclick="extendPinDaysPrompt('${p.code}')" title="Gia hạn thêm 7 ngày">
                            <i class="fa-solid fa-calendar-plus"></i> +7 Ngày
                          </button>
                          <button class="btn btn-sm btn-outline" style="font-size: 0.72rem; padding: 0.2rem 0.4rem; color: #dc2626; border-color: #fca5a5;" onclick="AuthService.deletePin('${p.code}')" title="Thu hồi mã PIN này">
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        ` : ''}
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Khung Đổi Mật Khẩu Admin -->
      <div class="ai-ctrl-box">
        <h3 style="font-size: 1.05rem; font-weight: 800; margin-bottom: 0.65rem; color: var(--primary);">
          <i class="fa-solid fa-shield-halved" style="color: #dc2626;"></i> Đổi Mật Khẩu Quản Trị Viên (Admin)
        </h3>
        <p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 1rem;">
          Đổi mật khẩu tài khoản Thầy Lê Thành Long (đồng bộ lưu trữ an toàn trên máy chủ Google)
        </p>

        <div class="form-group">
          <label>Mật khẩu hiện tại:</label>
          <input type="password" id="adminOldPassInput" class="form-control" placeholder="Nhập mật khẩu hiện tại...">
        </div>

        <div class="form-group">
          <label>Mật khẩu mới:</label>
          <input type="password" id="adminNewPassInput" class="form-control" placeholder="Nhập mật khẩu mới (ít nhất 4 ký tự)...">
        </div>

        <div class="form-group">
          <label>Xác nhận mật khẩu mới:</label>
          <input type="password" id="adminConfirmPassInput" class="form-control" placeholder="Nhập lại mật khẩu mới...">
        </div>

        <button class="btn btn-primary" id="btn-submit-change-pass" style="background: #dc2626; border-color: #dc2626;" onclick="handleAdminChangePassword()">
          <i class="fa-solid fa-key"></i> Đổi Mật Khẩu
        </button>
      </div>

      <div class="ai-ctrl-box">
        <h3 style="font-size: 1.05rem; font-weight: 800; margin-bottom: 0.65rem; color: var(--primary);">
          <i class="fa-solid fa-wand-magic-sparkles" style="color: #8b5cf6;"></i> Google Gemini AI API Key
        </h3>
        <p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 1rem;">
          Nhập API key để kích hoạt tính năng sinh đề nâng cao qua AI trực tuyến
        </p>

        <div class="form-group">
          <label>Gemini API Key (Google AI Studio):</label>
          <input type="password" id="geminiApiKeyInput" class="form-control" value="${apiKey}" placeholder="AIzaSy...">
        </div>

        <button class="btn btn-primary" style="background: linear-gradient(135deg, #7c3aed, #c084fc);" onclick="saveGeminiApiKey()">
          <i class="fa-solid fa-check"></i> Lưu API Key
        </button>
      </div>
    </div>
  `;

  setTimeout(updateAdminCalendarPreview, 50);
}

function updateAdminCalendarPreview() {
  var startInput = document.getElementById('adminCalendarStartDate');
  var tetStartInput = document.getElementById('adminCalendarTetStart');
  var tetWeeksInput = document.getElementById('adminCalendarTetWeeks');
  if (!startInput || !window.AcademicCalendar) return;

  var tempConfig = {
    startDate: startInput.value || '2026-09-07',
    tetBreakStartWeek: parseInt(tetStartInput?.value, 10) || 21,
    tetBreakWeeks: parseInt(tetWeeksInput?.value, 10) || 2,
    totalStudyWeeks: 35
  };

  var tempCal = Object.assign(Object.create(AcademicCalendar), {
    config: tempConfig
  });

  var cur = tempCal.calculateCurrentWeek();
  var w1 = tempCal.getWeekRange(1);
  var w20 = tempCal.getWeekRange(20);
  var w21 = tempCal.getWeekRange(21);
  var w35 = tempCal.getWeekRange(35);

  var badge = document.getElementById('adminCalendarCurrentBadge');
  if (badge) {
    if (cur.isTetHoliday) {
      badge.textContent = 'Nghỉ Tết (Tuần ' + cur.currentWeek + ')';
      badge.style.background = '#d97706';
    } else {
      badge.textContent = cur.currentPeriod + ' • Tuần ' + cur.currentWeek;
      badge.style.background = '#2563eb';
    }
  }

  var w1Prev = document.getElementById('adminCalendarWeek1Preview');
  if (w1Prev) {
    w1Prev.innerHTML = `
      <div>• <b>Tuần 1 (Bắt đầu):</b> ${w1.label}</div>
      <div>• <b>Học kỳ 1 (Tuần 1 - 20):</b> Kết thúc ${w20.endFormatted}</div>
      <div>• <b>Học kỳ 2 (Tuần 21 - 35):</b> Bắt đầu ${w21.startFormatted} • Kết thúc ${w35.endFormatted}</div>
    `;
  }
}

function saveAdminCalendarConfig() {
  var startInput = document.getElementById('adminCalendarStartDate');
  var tetStartInput = document.getElementById('adminCalendarTetStart');
  var tetWeeksInput = document.getElementById('adminCalendarTetWeeks');
  if (!startInput || !window.AcademicCalendar) return;

  var startDate = startInput.value.trim();
  if (!startDate) {
    showToast('Vui lòng chọn ngày bắt đầu năm học (Thứ Hai Tuần 1)!', 'error');
    return;
  }

  var newCfg = {
    startDate: startDate,
    tetBreakStartWeek: parseInt(tetStartInput.value, 10) || 21,
    tetBreakWeeks: parseInt(tetWeeksInput.value, 10) || 2,
    totalStudyWeeks: 35
  };

  AcademicCalendar.saveConfig(newCfg);
  showToast('Đã lưu cấu hình thời gian năm học thành công!', 'success');
  updateAdminCalendarPreview();
}

async function handleAdminChangePassword() {
  var oldPass = (document.getElementById("adminOldPassInput")?.value || "").trim();
  var newPass = (document.getElementById("adminNewPassInput")?.value || "").trim();
  var confirmPass = (document.getElementById("adminConfirmPassInput")?.value || "").trim();
  var btn = document.getElementById("btn-submit-change-pass");

  if (!oldPass) {
    showToast("Vui lòng nhập mật khẩu hiện tại!", "error");
    return;
  }
  if (!newPass || newPass.length < 4) {
    showToast("Mật khẩu mới phải có ít nhất 4 ký tự!", "error");
    return;
  }
  if (newPass !== confirmPass) {
    showToast("Mật khẩu xác nhận không khớp!", "error");
    return;
  }

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang đổi mật khẩu...';
  }

  var res = await AuthService.changeAdminPassword(oldPass, newPass);

  if (btn) {
    btn.disabled = false;
    btn.innerHTML = '<i class="fa-solid fa-key"></i> Đổi Mật Khẩu';
  }

  if (res.success) {
    showToast(res.msg, "success");
    document.getElementById("adminOldPassInput").value = "";
    document.getElementById("adminNewPassInput").value = "";
    document.getElementById("adminConfirmPassInput").value = "";
  } else {
    showToast(res.msg || "Không thể đổi mật khẩu!", "error");
  }
}

function addNewPinCode() {
  var input = document.getElementById("newPinInput");
  var gradeSelect = document.getElementById("newPinGradeSelect");
  var descInput = document.getElementById("newPinDescInput");

  var code = input ? input.value.trim().toUpperCase() : "";
  var grade = gradeSelect ? gradeSelect.value : "all";
  var desc = descInput ? descInput.value.trim() : "";

  if (!code) {
    showToast("Vui lòng nhập mã PIN cần cấp!", "error");
    return;
  }

  var res = AuthService.addPin(code, grade, desc);
  if (res.success) {
    if (input) input.value = "";
    if (descInput) descInput.value = "";
    renderCurrentView();
    showToast("Đã tạo và cấp mã PIN " + code + " thành công!", "success");
  } else {
    showToast(res.msg || "Không thể tạo mã PIN", "error");
  }
}

async function resetPinDevicesPrompt(code) {
  if (!confirm(`Bạn có chắc chắn muốn RESET thiết bị cho mã ${code}?\nKhách sẽ có thể đăng nhập trên 2 máy tính mới.`)) return;

  var token = AuthService.getAdminToken();
  try {
    var url = CONFIG.API_URL + "?action=reset_pin_devices&code=" + encodeURIComponent(code) + "&adminToken=" + encodeURIComponent(token);
    var res = await fetch(url);
    var json = await res.json();
    if (json && json.success) {
      showToast(json.message || "Đã reset thiết bị thành công!", "success");
      // Cập nhật local
      var pins = AuthService.getValidPins();
      var item = pins.find(p => p.code === code);
      if (item) { item.devices = []; item.deviceDetails = []; AuthService.savePins(pins); }
      renderCurrentView();
    } else {
      showToast(json.error || "Không thể reset thiết bị", "error");
    }
  } catch(e) {
    showToast("Lỗi kết nối máy chủ Google!", "error");
  }
}

async function extendPinDaysPrompt(code) {
  var daysStr = prompt(`Nhập số ngày muốn gia hạn thêm cho mã ${code}:`, "7");
  if (!daysStr) return;
  var days = parseInt(daysStr, 10);
  if (isNaN(days) || days <= 0) return;

  var token = AuthService.getAdminToken();
  try {
    var url = CONFIG.API_URL + "?action=extend_pin_days&code=" + encodeURIComponent(code) + "&days=" + days + "&adminToken=" + encodeURIComponent(token);
    var res = await fetch(url);
    var json = await res.json();
    if (json && json.success) {
      showToast(json.message || `Đã gia hạn thêm ${days} ngày thành công!`, "success");
      var pins = AuthService.getValidPins();
      var item = pins.find(p => p.code === code);
      if (item && json.expiresAt) { item.expiresAt = json.expiresAt; AuthService.savePins(pins); }
      renderCurrentView();
    } else {
      showToast(json.error || "Không thể gia hạn", "error");
    }
  } catch(e) {
    showToast("Lỗi kết nối máy chủ Google!", "error");
  }
}

function copyPinShareMessage(code, grade, desc) {
  var gradeText = grade === "all" ? "Toàn bộ 5 Khối (Khối 1 đến Khối 5)" : ("Khối " + grade);
  var msg = "Thầy Lê Thành Long gửi bạn mã PIN mở khóa tải tài liệu thư viện:\n" +
            "🔑 Mã PIN: " + code + "\n" +
            "📚 Phạm vi tải: " + gradeText + (desc ? (" (" + desc + ")") : "") + "\n" +
            "👉 Bạn truy cập vào web, bấm nút 'Nhập PIN' ở góc dưới menu để tải giáo án Word & bài giảng PowerPoint nhé!";

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(msg).then(function() {
      showToast("Đã sao chép tin nhắn gửi đồng nghiệp vào bộ nhớ tạm! Bạn có thể dán vào Zalo/Facebook.", "success");
    }).catch(function() {
      prompt("Sao chép tin nhắn gửi đồng nghiệp:", msg);
    });
  } else {
    prompt("Sao chép tin nhắn gửi đồng nghiệp:", msg);
  }
}

function saveGeminiApiKey() {
  var input = document.getElementById("geminiApiKeyInput");
  var key = input ? input.value.trim() : "";
  localStorage.setItem("tvth_gemini_api_key", key);
  showToast("Đã lưu Gemini API Key thành công!", "success");
}

// ==========================================
// WINDOW BINDINGS CHO ADMIN & SETTINGS VIEW
// ==========================================
if (typeof window !== "undefined") {
  window.renderToolkitView = typeof renderToolkitView !== "undefined" ? renderToolkitView : null;
  window.renderSettingsView = typeof renderSettingsView !== "undefined" ? renderSettingsView : null;
  window.updateAdminCalendarPreview = typeof updateAdminCalendarPreview !== "undefined" ? updateAdminCalendarPreview : null;
  window.saveAdminCalendarConfig = typeof saveAdminCalendarConfig !== "undefined" ? saveAdminCalendarConfig : null;
  window.addNewPinCode = typeof addNewPinCode !== "undefined" ? addNewPinCode : null;
  window.copyPinShareMessage = typeof copyPinShareMessage !== "undefined" ? copyPinShareMessage : null;
  window.saveGeminiApiKey = typeof saveGeminiApiKey !== "undefined" ? saveGeminiApiKey : null;
}
