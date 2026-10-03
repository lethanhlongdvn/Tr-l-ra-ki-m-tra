/**
 * DOCUMENTS VIEW MODULE (KHBD, PPTX, HOME, WEEKLY, SEARCH & FILE CARDS)
 * Phân hệ duyệt và hiển thị kho tài liệu giáo án và bài giảng điện tử
 * Thư viện Bài giảng & Kế hoạch bài dạy Tiểu học - Lê Thành Long
 */

/* ==========================================================================
   VIEW 1: TRANG CHỦ (HOME DASHBOARD)
   ========================================================================== */
function renderHomeView(container) {
  var visibleFiles = (DATABASE.allFiles || []).filter(function(f) { return AuthService.isVisibleToFileList(f); });
  var totalKhbd = visibleFiles.filter(function(f) { return f.type === 'KHBD'; }).length;
  var totalPptx = visibleFiles.filter(function(f) { return f.type === 'PPTX'; }).length;
  var totalFiles = visibleFiles.length;

  container.innerHTML = `
    ${renderAdminBulkToolbarHtml()}

    <!-- Formal Hero Banner -->
    <div class="formal-hero-card">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.85rem;">
        <div class="formal-hero-pill">
          <i class="fa-solid fa-award" style="color: #facc15;"></i> Chuẩn GDPT 2018
        </div>
        <div class="formal-hero-pill" style="background: rgba(34, 197, 94, 0.25); border-color: rgba(74, 222, 128, 0.6); color: #86efac;">
          <i class="fa-solid fa-gift" style="color: #4ade80;"></i> MỞ KHÓA MIỄN PHÍ TUẦN 1 - 8 (Tải không cần PIN)
        </div>
      </div>
      <h1 class="formal-hero-title">Thư Viện Bài Giảng & Kế Hoạch Bài Dạy Tiểu Học</h1>
      <p class="formal-hero-desc">
        Hệ thống học liệu số giáo viên Tiểu học chuẩn chương trình GDPT 2018. Mở khóa tải <strong>Hoàn Toàn Miễn Phí Tuần 1 đến Tuần 8</strong> (cả Bài giảng PPTX & Kế hoạch bài dạy) cho tất cả giáo viên toàn quốc!
      </p>
      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
        <button class="btn btn-primary" onclick="navigateTo('pptx')" style="background: #ffffff; color: var(--primary); box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
          <i class="fa-solid fa-file-powerpoint" style="color: var(--color-powerpoint);"></i> Duyệt Bài Giảng PPTX
        </button>
        <button class="btn btn-outline" style="color: #ffffff; border-color: rgba(255,255,255,0.4);" onclick="navigateTo('khbd')">
          <i class="fa-solid fa-file-word" style="color: #38bdf8;"></i> Kế Hoạch Bài Dạy (${totalKhbd} tệp)
        </button>
        <button class="btn btn-outline" style="color: #ffffff; border-color: rgba(255,255,255,0.4);" onclick="navigateTo('weekly')">
          <i class="fa-solid fa-table-columns" style="color: #fb923c;"></i> Xem Theo Tuần Học
        </button>
        <button class="btn btn-ai-header" onclick="window.open('ai-integration.html', '_blank')" style="background: linear-gradient(135deg, #db2777, #ec4899); border: none; box-shadow: 0 4px 12px rgba(219, 39, 119, 0.35);" title="Mở Xuất KHBD Có Tích Hợp trong tab mới rộng rãi">
          <i class="fa-solid fa-layer-group"></i> Xuất KHBD Có Tích Hợp
          <span style="background: #ef4444; color: white; font-size: 0.62rem; padding: 2px 6px; border-radius: 9999px; margin-left: 4px; font-weight: 800;">MỚI</span>
          <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.65rem; margin-left: 4px; opacity: 0.85;"></i>
        </button>
        <button class="btn btn-ai-header" onclick="window.open('ai-exam.html', '_blank')" title="Mở Trợ Lý AI Ra Đề trong tab mới rộng rãi">
          <i class="fa-solid fa-wand-magic-sparkles"></i> Trợ Lý AI Ra Đề
          <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.65rem; margin-left: 4px; opacity: 0.85;"></i>
        </button>
      </div>
    </div>


    <!-- Quick Stats -->
    <div class="stats-row">
      <div class="stat-box" onclick="navigateTo('pptx')" style="cursor: pointer;">
        <div class="stat-icon-wrap" style="background-color: #eff6ff; color: #2563eb;">
          <i class="fa-solid fa-file-powerpoint"></i>
        </div>
        <div class="stat-data">
          <h4>${totalPptx} Bài Giảng</h4>
          <p>PowerPoint Tuần 1 - 35</p>
        </div>
      </div>
      <div class="stat-box" onclick="navigateTo('khbd')" style="cursor: pointer;">
        <div class="stat-icon-wrap" style="background-color: #ecfdf5; color: #059669;">
          <i class="fa-solid fa-file-word"></i>
        </div>
        <div class="stat-data">
          <h4>${totalKhbd} Kế Hoạch</h4>
          <p>Giáo Án Word 5 Khối Lớp</p>
        </div>
      </div>
      <div class="stat-box" onclick="navigateTo('weekly')" style="cursor: pointer;">
        <div class="stat-icon-wrap" style="background-color: #fff7ed; color: #ea580c;">
          <i class="fa-solid fa-table-columns"></i>
        </div>
        <div class="stat-data">
          <h4>Tổng Hợp 35 Tuần</h4>
          <p>Xem Song Song Word & PPTX</p>
        </div>
      </div>
      <div class="stat-box" style="cursor: pointer;" title="Số lượt giáo viên truy cập và tra cứu học liệu">
        <div class="stat-icon-wrap" style="background-color: #fdf2f8; color: #db2777;">
          <i class="fa-solid fa-chart-line"></i>
        </div>
        <div class="stat-data">
          <h4>${(typeof StatsService !== "undefined" ? StatsService.getVisitCount() : 15680).toLocaleString('vi-VN')} Lượt</h4>
          <p>Lượt Truy Cập Website</p>
        </div>
      </div>
    </div>

    <!-- 5 Grade Quick Selection Cards -->
    <div class="section-header">
      <div>
        <h2 class="section-title"><i class="fa-solid fa-shapes"></i> Danh Mục Theo Khối Lớp</h2>
        <p class="section-subtitle">Chọn khối lớp để xem ngay bài giảng PPTX và giáo án Word</p>
      </div>
    </div>

    <div class="grades-deck">
      ${GRADES_CONFIG.map(function(g) {
        return `
          <div class="grade-banner-card" onclick="selectGradeAndNavigate(${g.grade})">
            <div class="grade-badge-circle" style="background-color: ${g.color};">
              ${g.grade}
            </div>
            <h3>${g.name}</h3>
            <p>Trọn bộ KHBD Word tất cả các môn & Bài giảng PowerPoint</p>
            <div style="margin-top: 0.75rem;">
              <span class="btn btn-sm btn-outline">Truy cập Khối ${g.grade} <i class="fa-solid fa-arrow-right"></i></span>
            </div>
          </div>
        `;
      }).join('')}
    </div>

    <!-- Real Files Showcase -->
    <div class="section-header" style="margin-top: 2rem;">
      <div>
        <h2 class="section-title"><i class="fa-solid fa-clock-rotate-left" style="color: #38bdf8;"></i> Tài Liệu Trực Tiếp Từ Google Drive</h2>
        <p class="section-subtitle">Xem trước trực tuyến và tải về theo phân quyền</p>
      </div>
      ${renderViewToggleHtml()}
    </div>

    ${renderFilesHtml(visibleFiles.slice(0, 8))}
  `;
}

function selectGradeAndNavigate(grade) {
  selectedGrade = grade;
  updateTopGradeFilterUI();
  navigateTo("khbd");
}

/* ==========================================================================
   VIEW 2: KHO BÀI GIẢNG PPTX (35 TUẦN)
   ========================================================================== */
function renderPptxView(container) {
  var allWeekFiles = (DATABASE.pptxList || []).filter(function(item) {
    return AuthService.isVisibleToFileList(item);
  });

  if (selectedGrade !== "all") {
    allWeekFiles = allWeekFiles.filter(function(item) { return item.grade === parseInt(selectedGrade); });
  }

  allWeekFiles = allWeekFiles.filter(function(item) {
    return item.week === selectedWeek || (item.weeks && item.weeks.includes(selectedWeek));
  });

  var filtered = allWeekFiles;
  if (selectedSubject !== "all") {
    filtered = filtered.filter(function(item) { return item.subjectId === selectedSubject; });
  }

  // Lấy danh sách môn học phù hợp theo Khối lớp hiện tại
  var currentG = parseInt(selectedGrade) || 1;
  var availableSubjects = SIDEBAR_SUBJECTS[currentG] || SIDEBAR_SUBJECTS[1];

  var subjectChipsHtml = '<button class="subject-chip ' + (selectedSubject === 'all' ? 'active' : '') + '" onclick="selectSubjectFilter(\'all\')">' +
    'Tất cả môn (' + allWeekFiles.length + ')' +
    '</button>';

  availableSubjects.forEach(function(subj) {
    var count = allWeekFiles.filter(function(f) { return f.subjectId === subj.id; }).length;
    if (count > 0 || ['TOAN', 'TIENG_VIET', 'TNXH', 'KHOA_HOC', 'LICH_SU_DIA_LY', 'DAO_DUC', 'HDTN', 'CONG_NGHE'].includes(subj.id)) {
      subjectChipsHtml += '<button class="subject-chip ' + (selectedSubject === subj.id ? 'active' : '') + '" onclick="selectSubjectFilter(\'' + subj.id + '\')">' +
        '<i class="fa-solid ' + (subj.icon || 'fa-book') + '" style="color: ' + (subj.color || '#2563eb') + ';"></i> ' +
        subj.name + (count > 0 ? ' (' + count + ')' : '') +
        '</button>';
    }
  });

  container.innerHTML = `
    ${renderAdminBulkToolbarHtml()}

    <div class="section-header">
      <div>
        <h2 class="section-title">
          <i class="fa-solid fa-file-powerpoint" style="color: var(--color-powerpoint);"></i> 
          Kho Bài Giảng Điện Tử PowerPoint (PPTX)
        </h2>
        <p class="section-subtitle">
          ${selectedGrade === "all" ? "Tất cả các khối" : ("Khối " + selectedGrade)} • Tuần ${selectedWeek} • Chuẩn Chương trình GDPT 2018
        </p>
      </div>
      <div style="display:flex; align-items:center; gap:0.65rem;">
        ${renderViewToggleHtml()}
        <button class="btn btn-outline" onclick="navigateTo('weekly')">
          <i class="fa-solid fa-table-columns"></i> Chế độ xem theo tuần
        </button>
      </div>
    </div>

    <!-- 35 Weeks Strip -->
    <div class="week-strip-box">
      <div style="font-size: 0.78rem; font-weight: 700; color: var(--primary); margin-bottom: 0.45rem;">
        CHỌN TUẦN HỌC (TỪ TUẦN 1 ĐẾN TUẦN 35):
      </div>
      <div class="week-pills-flow">
        ${Array.from({ length: 35 }, function(_, i) { return i + 1; }).map(function(w) {
          return `
            <button class="week-pill-chip ${w === selectedWeek ? 'active' : ''}" onclick="selectWeekFilter(${w})">
              Tuần ${w} ${w === 1 ? '🟢' : ''}
            </button>
          `;
        }).join('')}
      </div>
    </div>

    <!-- Subject Chips -->
    <div class="subject-chips-wrap">
      ${subjectChipsHtml}
    </div>

    <!-- Cards / List -->
    ${filtered.length > 0 ? renderFilesHtml(filtered) : `
      <div style="text-align: center; padding: 3rem; background: #ffffff; border-radius: 10px; border: 1px solid var(--border-color);">
        <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; color: var(--text-light); margin-bottom: 0.75rem;"></i>
        <h3>Chưa có bài giảng PPTX hiển thị trong tuần ${selectedWeek}</h3>
        <p style="color: var(--text-muted);">Hãy chọn tuần khác hoặc đăng nhập quyền Admin nếu tài liệu đang ở chế độ Ẩn với khách.</p>
      </div>
    `}
  `;
}

function selectWeekFilter(w) {
  selectedWeek = w;
  renderCurrentView();
}

function selectSubjectFilter(sKey) {
  selectedSubject = sKey;
  renderCurrentView();
}

/* ==========================================================================
   VIEW 3: KHO KẾ HOẠCH BÀI DẠY (KHBD)
   ========================================================================== */
function renderKhbdView(container) {
  var filtered = (DATABASE.khbdList || []).filter(function(item) {
    return AuthService.isVisibleToFileList(item);
  });

  if (selectedGrade !== "all") {
    filtered = filtered.filter(function(item) { return item.grade === parseInt(selectedGrade); });
  }

  if (selectedSubject !== "all") {
    if (selectedSubject === "KHAC") {
      var knownSubjects = ['TOAN', 'TIENG_VIET', 'TIENG_ANH', 'TNXH', 'KHOA_HOC', 'LICH_SU_DIA_LY', 'TIN_HOC', 'CONG_NGHE', 'DAO_DUC', 'HAT_NHAC', 'MI_THUAT', 'GDTC', 'HDTN'];
      filtered = filtered.filter(function(item) {
        return item.subjectId === 'KHAC' || !item.subjectId || !knownSubjects.includes(item.subjectId);
      });
    } else {
      filtered = filtered.filter(function(item) { return item.subjectId === selectedSubject; });
    }
  }

  container.innerHTML = `
    ${renderAdminBulkToolbarHtml()}

    <div class="section-header">
      <div>
        <h2 class="section-title">
          <i class="fa-solid fa-file-word" style="color: var(--color-word);"></i>
          Kế Hoạch Bài Dạy (KHBD - Giáo Án Word)
        </h2>
        <p class="section-subtitle">
          ${selectedGrade === "all" ? "Tất cả các khối (" + filtered.length + " giáo án)" : ("Khối " + selectedGrade + " (" + filtered.length + " giáo án)")} • Soạn chuẩn Công văn 2345/BGDĐT
        </p>
      </div>
      <div style="display:flex; align-items:center; gap:0.65rem;">
        ${renderViewToggleHtml()}
        <button class="btn btn-outline" onclick="navigateTo('weekly')">
          <i class="fa-solid fa-table-columns"></i> Xem song song
        </button>
      </div>
    </div>


    <!-- Cards / List -->
    ${filtered.length > 0 ? renderFilesHtml(filtered) : `
      <div style="text-align:center; padding:3rem; background:#ffffff; border-radius:10px; border:1px solid var(--border-color);">
        <i class="fa-solid fa-folder-open" style="font-size:2.5rem; color:var(--text-light); margin-bottom:0.75rem;"></i>
        <h3>Không tìm thấy giáo án phù hợp</h3>
        <p style="color:var(--text-muted);">Thử chọn khối khác hoặc môn học khác.</p>
      </div>
    `}
  `;
}


/* ==========================================================================
   VIEW 4: BẢNG TỔNG HỢP THEO TUẦN (MATRIX TRA CỨU TRỌN GÓI)
   ========================================================================== */
function renderWeeklyView(container) {
  var currentGradeNum = selectedGrade === "all" ? 5 : parseInt(selectedGrade);
  
  var khbdList = (DATABASE.khbdList || []).filter(function(f) {
    var matchWeek = f.week === selectedWeek || (f.weeks && f.weeks.includes(selectedWeek));
    return f.grade === currentGradeNum && AuthService.isVisibleToFileList(f) && matchWeek;
  });

  var pptxList = (DATABASE.pptxList || []).filter(function(f) {
    var matchWeek = f.week === selectedWeek || (f.weeks && f.weeks.includes(selectedWeek));
    return f.grade === currentGradeNum && AuthService.isVisibleToFileList(f) && matchWeek;
  });

  container.innerHTML = `
    ${renderAdminBulkToolbarHtml()}

    <div class="section-header">
      <div>
        <h2 class="section-title">
          <i class="fa-solid fa-table-columns" style="color: #38bdf8;"></i> 
          Bảng Tra Cứu Trọn Gói Khối ${currentGradeNum} - Tuần ${selectedWeek}
        </h2>
        <p class="section-subtitle">
          Hiển thị song song Kế hoạch bài dạy (Word) & Bài giảng điện tử (PPTX) cho giáo viên
        </p>
      </div>
    </div>

    <!-- Week Strip -->
    <div class="week-strip-box">
      <div class="week-pills-flow">
        ${Array.from({ length: 35 }, function(_, i) { return i + 1; }).map(function(w) {
          return `
            <button class="week-pill-chip ${w === selectedWeek ? 'active' : ''}" onclick="selectWeekFilter(${w})">
              Tuần ${w}
            </button>
          `;
        }).join('')}
      </div>
    </div>

    <!-- Matrix Table -->
    <div class="matrix-card-wrap">
      <table class="formal-matrix-table">
        <thead>
          <tr>
            <th style="width: 22%;">Môn Học</th>
            <th style="width: 38%;">Kế Hoạch Bài Dạy (Word)</th>
            <th style="width: 40%;">Bài Giảng Điện Tử (PPTX)</th>
          </tr>
        </thead>
        <tbody>
          ${Object.keys(SUBJECTS_CONFIG).map(function(sKey) {
            var sub = SUBJECTS_CONFIG[sKey];
            var kFiles = khbdList.filter(function(f) { return f.subjectId === sKey; });
            var pFiles = pptxList.filter(function(f) { return f.subjectId === sKey; });

            if (kFiles.length === 0 && pFiles.length === 0) return "";

            return `
              <tr>
                <td>
                  <div style="display: flex; align-items: center; gap: 0.65rem;">
                    <div style="width: 34px; height: 34px; border-radius: var(--radius-sm); background-color: ${sub.bgColor}; color: ${sub.color}; display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0;">
                      <i class="fa-solid ${sub.icon}"></i>
                    </div>
                    <div>
                      <strong style="font-size: 0.9rem;">${sub.name}</strong>
                      <div style="font-size: 0.72rem; color: var(--text-muted);">Khối ${currentGradeNum} • Tuần ${selectedWeek}</div>
                    </div>
                  </div>
                </td>
                <td style="vertical-align: top;">
                  ${kFiles.length > 0 ? `
                    <div style="display: flex; flex-direction: column; gap: 0.45rem;">
                      ${kFiles.map(function(kFile) {
                        return `
                          <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 0.4rem 0.65rem;">
                            <span style="font-size: 0.8rem; font-weight: 500; color: #1e293b; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 220px;" title="${kFile.name}">
                              <i class="fa-solid fa-file-word" style="color: var(--color-word); margin-right: 4px;"></i> ${kFile.name}
                            </span>
                            <div style="display: flex; gap: 0.35rem; flex-shrink: 0;">
                              <button class="btn btn-sm btn-outline" style="padding: 0.2rem 0.45rem; font-size: 0.75rem;" onclick="handleFileViewer('${kFile.id}')" title="Xem trước tài liệu">
                                <i class="fa-solid fa-eye"></i>
                              </button>
                              <button class="btn btn-sm btn-primary" style="padding: 0.2rem 0.6rem; font-size: 0.75rem;" onclick="handleFileDownload('${kFile.id}')" title="Tải file Word">
                                <i class="fa-solid fa-download"></i> Tải
                              </button>
                            </div>
                          </div>
                        `;
                      }).join('')}
                    </div>
                  ` : `<span style="color: var(--text-light); font-style: italic;">Chưa có tệp</span>`}
                </td>
                <td style="vertical-align: top;">
                  ${pFiles.length > 0 ? `
                    <div style="display: flex; flex-direction: column; gap: 0.45rem;">
                      ${pFiles.map(function(pFile) {
                        return `
                          <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; background: #fff7ed; border: 1px solid #ffedd5; border-radius: 6px; padding: 0.4rem 0.65rem;">
                            <span style="font-size: 0.8rem; font-weight: 500; color: #9a3412; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 220px;" title="${pFile.name}">
                              <i class="fa-solid fa-file-powerpoint" style="color: var(--color-powerpoint); margin-right: 4px;"></i> ${pFile.name}
                            </span>
                            <div style="display: flex; gap: 0.35rem; flex-shrink: 0;">
                              <button class="btn btn-sm btn-outline" style="padding: 0.2rem 0.45rem; font-size: 0.75rem;" onclick="handleFileViewer('${pFile.id}')" title="Xem trước slide">
                                <i class="fa-solid fa-eye"></i>
                              </button>
                              <button class="btn btn-sm btn-primary" style="padding: 0.2rem 0.6rem; font-size: 0.75rem; background: #ea580c; border-color: #ea580c;" onclick="handleFileDownload('${pFile.id}')" title="Tải PowerPoint">
                                <i class="fa-solid fa-download"></i> Tải PPTX
                              </button>
                            </div>
                          </div>
                        `;
                      }).join('')}
                    </div>
                  ` : `<span style="color: var(--text-light); font-style: italic;">Chưa có slide</span>`}
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

/* ==========================================================================
   VIEW 8: TÌM KIẾM TOÀN DIỆN (SEARCH)
   ========================================================================== */
function renderSearchView(container) {
  var query = (document.getElementById("search-input")?.value || "").trim().toLowerCase();

  var pptxMatches = (DATABASE.pptxList || []).filter(function(item) {
    return AuthService.isVisibleToFileList(item) && (item.name.toLowerCase().includes(query) || (item.folderPath && item.folderPath.toLowerCase().includes(query)));
  });

  var khbdMatches = (DATABASE.khbdList || []).filter(function(item) {
    return AuthService.isVisibleToFileList(item) && (item.name.toLowerCase().includes(query) || (item.folderPath && item.folderPath.toLowerCase().includes(query)));
  });

  var safeQuery = typeof escapeHtml === "function" ? escapeHtml(query) : query.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  container.innerHTML = `
    <div class="section-header">
      <div>
        <h2 class="section-title">
          <i class="fa-solid fa-magnifying-glass"></i> 
          Kết Quả Tìm Kiếm: "${safeQuery}"
        </h2>
        <p class="section-subtitle">
          Tìm thấy ${pptxMatches.length} bài giảng PPTX và ${khbdMatches.length} kế hoạch bài dạy KHBD
        </p>
      </div>
    </div>

    <!-- PPTX Results -->
    <h3 style="font-size: 1.05rem; font-weight: 800; margin: 1.25rem 0 0.85rem; color: var(--color-powerpoint);">
      <i class="fa-solid fa-file-powerpoint"></i> Bài Giảng Điện Tử PowerPoint (${pptxMatches.length})
    </h3>
    <div class="file-cards-grid">
      ${pptxMatches.length > 0 ? pptxMatches.slice(0, 12).map(function(item) { return renderFileCardHtml(item); }).join('') : `
        <div style="grid-column: 1/-1; color: var(--text-muted);">Không có bài giảng PPTX nào khớp với từ khóa</div>
      `}
    </div>

    <!-- KHBD Results -->
    <h3 style="font-size: 1.05rem; font-weight: 800; margin: 1.75rem 0 0.85rem; color: var(--color-word);">
      <i class="fa-solid fa-file-word"></i> Kế Hoạch Bài Dạy KHBD Word (${khbdMatches.length})
    </h3>
    <div class="file-cards-grid">
      ${khbdMatches.length > 0 ? khbdMatches.slice(0, 12).map(function(item) { return renderFileCardHtml(item); }).join('') : `
        <div style="grid-column: 1/-1; color: var(--text-muted);">Không có giáo án nào khớp với từ khóa</div>
      `}
    </div>
  `;
}

/* ==========================================================================
   UI CARD RENDERER (HIỂN THỊ QUYỀN TỪNG TÀI LIỆU & NÚT ADMIN ĐỔI QUYỀN)
   ========================================================================== */
function renderFileCardHtml(file) {
  if (!AuthService.isVisibleToFileList(file)) return "";

  var fileIcon = "fa-file";
  var iconColor = "#64748b";
  var formatBadge = file.extension ? file.extension.toUpperCase() : "FILE";

  var lower = (file.name || "").toLowerCase();
  if (lower.endsWith(".docx") || lower.endsWith(".doc")) {
    fileIcon = "fa-file-word";
    iconColor = "var(--color-word)";
    formatBadge = "DOCX";
  } else if (lower.endsWith(".pptx") || lower.endsWith(".ppt")) {
    fileIcon = "fa-file-powerpoint";
    iconColor = "var(--color-powerpoint)";
    formatBadge = "PPTX";
  } else if (lower.endsWith(".pdf")) {
    fileIcon = "fa-file-pdf";
    iconColor = "var(--color-pdf)";
    formatBadge = "PDF";
  }

  var perm = AuthService.getFilePermission(file);
  var session = AuthService.getSession();
  var isAdmin = session.role === "admin";
  var canDl = AuthService.canDownload(file);

  var permBadgeHtml = '<span class="access-tag-free">🟢 Miễn phí</span>';
  if (perm === "pin") {
    if (canDl) {
      permBadgeHtml = '<span class="access-tag-unlocked"><i class="fa-solid fa-unlock-keyhole"></i> Đã mở khóa</span>';
    } else {
      permBadgeHtml = '<span class="access-tag-pin"><i class="fa-solid fa-lock"></i> Cần PIN</span>';
    }
  } else if (perm === "hidden") {
    permBadgeHtml = '<span class="access-tag-hidden"><i class="fa-solid fa-eye-slash"></i> Ẩn với khách</span>';
  }

  return `
    <div class="file-card" style="${perm === 'hidden' ? 'border: 1px dashed #f87171; background: #fffafb;' : ''}">
      <div class="file-card-header">
        <span class="subject-badge-pill" style="background-color: #f1f5f9; color: var(--text-dark);">
          <i class="fa-solid ${fileIcon}" style="color: ${iconColor};"></i> ${formatBadge}
        </span>
        <div style="display: flex; align-items: center; gap: 0.35rem;">
          ${permBadgeHtml}
          ${isAdmin ? `
            <button class="btn btn-sm btn-outline" style="padding: 0.15rem 0.45rem; font-size: 0.7rem; border-color: #94a3b8; background: #ffffff;" onclick="toggleFilePermissionPrompt('${file.id}')" title="Bấm để đổi: 🟢 Miễn phí ➜ 🔒 Cần PIN ➜ 👁️‍🗨️ Ẩn với khách">
              <i class="fa-solid fa-gear"></i>
            </button>
          ` : ''}
        </div>
      </div>

      <h4 class="file-card-title">${file.name}</h4>

      <div class="file-card-meta">
        <span><i class="fa-solid fa-database"></i> ${file.size}</span>
        <span><i class="fa-solid fa-cloud-arrow-down" style="color: #0284c7;"></i> <b data-dl-count-id="${file.id}">${(typeof StatsService !== "undefined" ? StatsService.getFileDownloads(file) : 120)}</b> lượt tải</span>
      </div>

      <div class="file-card-actions">
        <button class="btn btn-sm btn-outline" onclick="handleFileViewer('${file.id}')">
          <i class="fa-solid fa-eye"></i> Xem trước
        </button>
        <button class="btn btn-sm btn-primary" onclick="handleFileDownload('${file.id}')">
          <i class="fa-solid fa-download"></i> Tải về
        </button>
      </div>
    </div>
  `;
}

// ---- LIST VIEW RENDERER ----
function renderFileListRowHtml(file) {
  if (!AuthService.isVisibleToFileList(file)) return "";

  var fileIcon = "fa-file";
  var iconColor = "#64748b";
  var formatBadge = "FILE";

  var lower = (file.name || "").toLowerCase();
  if (lower.endsWith(".docx") || lower.endsWith(".doc")) {
    fileIcon = "fa-file-word"; iconColor = "var(--color-word)"; formatBadge = "DOCX";
  } else if (lower.endsWith(".pptx") || lower.endsWith(".ppt")) {
    fileIcon = "fa-file-powerpoint"; iconColor = "var(--color-powerpoint)"; formatBadge = "PPTX";
  } else if (lower.endsWith(".pdf")) {
    fileIcon = "fa-file-pdf"; iconColor = "var(--color-pdf)"; formatBadge = "PDF";
  }

  var perm = AuthService.getFilePermission(file);
  var session = AuthService.getSession();
  var isAdmin = session.role === "admin";
  var canDl = AuthService.canDownload(file);

  var permBadgeHtml = '<span class="access-tag-free" style="white-space:nowrap;">🟢 Miễn phí</span>';
  if (perm === "pin") {
    permBadgeHtml = canDl
      ? '<span class="access-tag-unlocked" style="white-space:nowrap;"><i class="fa-solid fa-unlock-keyhole"></i> Đã mở</span>'
      : '<span class="access-tag-pin" style="white-space:nowrap;"><i class="fa-solid fa-lock"></i> Cần PIN</span>';
  } else if (perm === "hidden") {
    permBadgeHtml = '<span class="access-tag-hidden" style="white-space:nowrap;"><i class="fa-solid fa-eye-slash"></i> Ẩn</span>';
  }

  return `
    <div class="file-list-row" style="${perm === 'hidden' ? 'border-left: 3px solid #f87171; background: #fffafb;' : ''}">
      <div class="file-list-icon">
        <i class="fa-solid ${fileIcon}" style="color: ${iconColor}; font-size: 1.5rem;"></i>
      </div>
      <div class="file-list-info">
        <div class="file-list-name">${file.name}</div>
        <div class="file-list-meta">
          <span><i class="fa-solid fa-database"></i> ${file.size}</span>
          <span><i class="fa-solid fa-cloud-arrow-down" style="color: #0284c7;"></i> <b data-dl-count-id="${file.id}">${(typeof StatsService !== "undefined" ? StatsService.getFileDownloads(file) : 120)}</b> lượt tải</span>
          <span><i class="fa-regular fa-clock"></i> ${file.updatedAt || 'Hôm nay'}</span>
        </div>
      </div>
      <div class="file-list-badges">
        <span class="subject-badge-pill" style="background:#f1f5f9; color:var(--text-dark); white-space:nowrap;">
          ${formatBadge}
        </span>
        ${permBadgeHtml}
        ${isAdmin ? `<button class="btn btn-sm btn-outline" style="padding:0.15rem 0.4rem;font-size:0.7rem;" onclick="toggleFilePermissionPrompt('${file.id}')" title="Đổi quyền"><i class="fa-solid fa-gear"></i></button>` : ''}
      </div>
      <div class="file-list-actions">
        <button class="btn btn-sm btn-outline" onclick="handleFileViewer('${file.id}')">
          <i class="fa-solid fa-eye"></i> Xem
        </button>
        <button class="btn btn-sm btn-primary" onclick="handleFileDownload('${file.id}')">
          <i class="fa-solid fa-download"></i> Tải
        </button>
      </div>
    </div>
  `;
}

// Render danh sách theo kiểu hiển thị hiện tại
var currentViewMode = localStorage.getItem("tvth_view_mode") || "grid";

function renderFilesHtml(fileList) {
  if (!fileList || fileList.length === 0) return "";
  if (currentViewMode === "list") {
    return '<div class="file-list-container">' +
      fileList.map(function(f) { return renderFileListRowHtml(f); }).join('') +
    '</div>';
  }
  return '<div class="file-cards-grid">' +
    fileList.map(function(f) { return renderFileCardHtml(f); }).join('') +
  '</div>';
}

function setViewMode(mode) {
  currentViewMode = mode;
  localStorage.setItem("tvth_view_mode", mode);
  renderCurrentView();
}

// HTML nút toggle view mode
function renderViewToggleHtml() {
  return `
    <div class="view-mode-toggle" role="group" aria-label="Kiểu hiển thị">
      <button class="view-toggle-btn ${currentViewMode === 'grid' ? 'active' : ''}"
              onclick="setViewMode('grid')" title="Dạng lưới" aria-label="Hiển thị dạng lưới">
        <i class="fa-solid fa-grip"></i>
      </button>
      <button class="view-toggle-btn ${currentViewMode === 'list' ? 'active' : ''}"
              onclick="setViewMode('list')" title="Dạng danh sách" aria-label="Hiển thị dạng danh sách">
        <i class="fa-solid fa-list"></i>
      </button>
    </div>
  `;
}


function toggleFilePermissionPrompt(fileId) {
  var file = DATABASE.allFiles.find(function(f) { return f.id === fileId; });
  if (!file) return;

  var current = AuthService.getFilePermission(file);
  var next = "pin";
  if (current === "free") next = "pin";
  else if (current === "pin") next = "hidden";
  else if (current === "hidden") next = "free";

  AuthService.setFilePermission(fileId, next);
}

function handleFileViewer(fileId) {
  var file = DATABASE.allFiles.find(function(f) { return f.id === fileId; });
  if (file) {
    DriveService.openViewer(file);
  }
}

function handleFileDownload(fileId) {
  var file = DATABASE.allFiles.find(function(f) { return f.id === fileId; });
  if (!file) return;

  if (!AuthService.canDownload(file)) {
    var perm = AuthService.getFilePermission(file);
    if (perm === "hidden") {
      showToast("Tài liệu này được đặt chế độ Ẩn với khách của Quản trị viên (Thầy Lê Thành Long)", "error");
      return;
    }
    openPinModal();
    showToast("Tài liệu được bảo vệ bản quyền. Vui lòng nhập mã PIN để tải về!", "error");
    return;
  }

  DriveService.downloadFile(file);
}

// ==========================================
// WINDOW BINDINGS CHO DOCUMENTS VIEW
// ==========================================
if (typeof window !== "undefined") {
  window.renderHomeView = typeof renderHomeView !== "undefined" ? renderHomeView : null;
  window.selectGradeAndNavigate = typeof selectGradeAndNavigate !== "undefined" ? selectGradeAndNavigate : null;
  window.renderPptxView = typeof renderPptxView !== "undefined" ? renderPptxView : null;
  window.selectWeekFilter = typeof selectWeekFilter !== "undefined" ? selectWeekFilter : null;
  window.selectSubjectFilter = typeof selectSubjectFilter !== "undefined" ? selectSubjectFilter : null;
  window.renderKhbdView = typeof renderKhbdView !== "undefined" ? renderKhbdView : null;
  window.renderWeeklyView = typeof renderWeeklyView !== "undefined" ? renderWeeklyView : null;
  window.renderSearchView = typeof renderSearchView !== "undefined" ? renderSearchView : null;
  window.renderFileCardHtml = typeof renderFileCardHtml !== "undefined" ? renderFileCardHtml : null;
  window.renderFileListRowHtml = typeof renderFileListRowHtml !== "undefined" ? renderFileListRowHtml : null;
  window.renderFilesHtml = typeof renderFilesHtml !== "undefined" ? renderFilesHtml : null;
  window.renderViewToggleHtml = typeof renderViewToggleHtml !== "undefined" ? renderViewToggleHtml : null;
  window.toggleFilePermissionPrompt = typeof toggleFilePermissionPrompt !== "undefined" ? toggleFilePermissionPrompt : null;
  window.handleFileViewer = typeof handleFileViewer !== "undefined" ? handleFileViewer : null;
  window.handleFileDownload = typeof handleFileDownload !== "undefined" ? handleFileDownload : null;
}
