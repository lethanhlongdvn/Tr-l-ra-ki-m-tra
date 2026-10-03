/**
 * MAIN APPLICATION LOGIC & ROUTER (CHUẨN 100% 7 PHÂN HỆ MENU)
 * Hỗ trợ Khóa/Mở toàn bộ kho và Chế độ "Ẩn với khách" cho từng tài liệu
 * Thư viện Bài giảng & Kế hoạch bài dạy Tiểu học - Lê Thành Long
 */

var currentView = "home";
var selectedGrade = "all";
var selectedWeek = 1;
var selectedSubject = "all";
var currentExamData = null;

var integrationState = {
  exportMode: 'subject', // 'subject' | 'timetable'
  grade: 5,
  subjectKey: 'toan',
  durationWeeks: 1,
  startWeek: 1,
  endWeek: 1,
  schoolName: (typeof localStorage !== 'undefined' ? localStorage.getItem('tvth_school_name') : '') || 'TRƯỜNG TIỂU HỌC .................................',
  teacherName: (typeof localStorage !== 'undefined' ? localStorage.getItem('tvth_teacher_name') : '') || 'Lê Thành Long',
  schoolYear: (typeof localStorage !== 'undefined' ? localStorage.getItem('tvth_school_year') : '') || '2026 - 2027',
  className: (typeof localStorage !== 'undefined' ? localStorage.getItem('tvth_class_name') : '') || '',
  inputMethod: 'upload', // 'upload' | 'paste'
  uploadedFiles: [], // Danh sách các tệp tải lên: [{ id, name, type, text, wordCount, pageCount, uploadedAt }]
  uploadedDocName: '',
  uploadedDocType: '',
  uploadedDocText: '',
  uploadedWordCount: 0,
  userNotes: '',
  analyzedPlan: null,
  userFeedbackInput: '',
  planFeedbackHistory: [],
  selectedLessons: {},
  appliedLessons: null,
  activePreviewLessonIndex: 0,
  isAnalyzing: false,
  isApplying: false,
  overwriteLegacy: true,
  activeStep: 1, // 1: Setup & Upload, 2: Review & Feedback Plan, 3: Final Integrated View
  customTimetable: null,
  customTimetableName: '',
  timetableAppliedWeeks: [],
  activeTimetableWeekIndex: 0,
  activeTimetableLessonIndex: 0,
  timetableRole: (typeof localStorage !== 'undefined' ? localStorage.getItem('tvth_timetable_role') : '') || 'gvcn', // 'gvcn' | 'gvbm'
  disabilitySupport: {
    enabled: (typeof localStorage !== 'undefined' ? localStorage.getItem('tvth_disability_enabled') === 'true' : false),
    cognitiveRate: (typeof localStorage !== 'undefined' ? (parseInt(localStorage.getItem('tvth_disability_rate')) || 50) : 50),
    disabilityType: (typeof localStorage !== 'undefined' ? (localStorage.getItem('tvth_disability_type') || 'tri_tue') : 'tri_tue'),
    disabilityTypeName: (typeof localStorage !== 'undefined' ? (localStorage.getItem('tvth_disability_type_name') || 'Khuyết tật trí tuệ (Tiếp thu chậm, ghi nhớ ngắn hạn)') : 'Khuyết tật trí tuệ (Tiếp thu chậm, ghi nhớ ngắn hạn)'),
    notes: (typeof localStorage !== 'undefined' ? (localStorage.getItem('tvth_disability_notes') || '') : '')
  },
  approvalConfig: {
    enabled: (typeof localStorage !== 'undefined' ? localStorage.getItem('tvth_approval_enabled') === 'true' : false),
    leaderRole: (typeof localStorage !== 'undefined' ? (localStorage.getItem('tvth_approval_leader_role') || 'Tổ trưởng') : 'Tổ trưởng'),
    leaderName: (typeof localStorage !== 'undefined' ? (localStorage.getItem('tvth_approval_leader_name') || '') : ''),
    adminRole: (typeof localStorage !== 'undefined' ? (localStorage.getItem('tvth_approval_admin_role') || 'Hiệu trưởng') : 'Hiệu trưởng'),
    adminName: (typeof localStorage !== 'undefined' ? (localStorage.getItem('tvth_approval_admin_name') || '') : '')
  },
  gvbmAssignments: (function() {
    if (typeof localStorage !== 'undefined') {
      try {
        var saved = localStorage.getItem('tvth_gvbm_assignments');
        if (saved) return JSON.parse(saved);
      } catch(e) {}
    }
    return [
      { id: 1, grade: 4, subjectKey: 'am_nhac', classes: '4A, 4B, 4C, 4D', periodsPerWeek: 4 },
      { id: 2, grade: 5, subjectKey: 'am_nhac', classes: '5A, 5B, 5C', periodsPerWeek: 3 },
      { id: 3, grade: 3, subjectKey: 'cong_nghe', classes: '3A, 3B, 3C', periodsPerWeek: 3 },
      { id: 4, grade: 2, subjectKey: 'gdtc', classes: '2A, 2B', periodsPerWeek: 4 }
    ];
  })(),
  gvbmConfig: {
    teacherName: (typeof localStorage !== 'undefined' ? localStorage.getItem('tvth_gvbm_teacher_name') : '') || '',
    department: (typeof localStorage !== 'undefined' ? localStorage.getItem('tvth_gvbm_department') : '') || 'Tổ Chuyên biệt / Bộ môn',
    schoolName: (typeof localStorage !== 'undefined' ? localStorage.getItem('tvth_gvbm_school_name') : '') || '',
    schoolYear: (typeof localStorage !== 'undefined' ? localStorage.getItem('tvth_gvbm_school_year') : '') || '2026 - 2027',
    subjectKey: (typeof localStorage !== 'undefined' ? localStorage.getItem('tvth_gvbm_subject') : '') || 'am_nhac',
    isMultiSubject: (typeof localStorage !== 'undefined' ? localStorage.getItem('tvth_gvbm_multi_subj') === 'true' : false),
    assignedSubjects: (function() {
      if (typeof localStorage !== 'undefined') {
        try {
          var saved = localStorage.getItem('tvth_gvbm_assigned_subjects');
          if (saved) return JSON.parse(saved);
        } catch(e) {}
      }
      return ['am_nhac', 'cong_nghe', 'gdtc', 'dao_duc'];
    })(),
    schedule: (function() {
      if (typeof localStorage !== 'undefined') {
        try {
          var saved = localStorage.getItem('tvth_gvbm_schedule');
          if (saved) return JSON.parse(saved);
        } catch(e) {}
      }
      return null;
    })()
  }
};

function isGvbmRole(role) {
  return role === 'gvbm' || role === 'gvbm_multi' || role === 'gvbm_single';
}

function isGvbmMultiRole(role, cfg) {
  return role === 'gvbm_multi' || (role === 'gvbm' && cfg && cfg.isMultiSubject);
}

if (typeof window !== "undefined") {
  window.integrationState = integrationState;
  window.isGvbmRole = isGvbmRole;
  window.isGvbmMultiRole = isGvbmMultiRole;
}

// ==========================================
// DỮ LIỆU SIDEBAR: KHỐI & MÔN HỌC
// ==========================================
var GRADE_COLORS = {
  1: { bg: '#0ea5e9', gradient: 'linear-gradient(135deg, #0ea5e9, #0284c7)', light: 'rgba(14,165,233,0.15)', text: '#fff' },
  2: { bg: '#10b981', gradient: 'linear-gradient(135deg, #10b981, #059669)', light: 'rgba(16,185,129,0.15)', text: '#fff' },
  3: { bg: '#f59e0b', gradient: 'linear-gradient(135deg, #f59e0b, #d97706)', light: 'rgba(245,158,11,0.15)', text: '#fff' },
  4: { bg: '#a855f7', gradient: 'linear-gradient(135deg, #a855f7, #9333ea)', light: 'rgba(168,85,247,0.15)', text: '#fff' },
  5: { bg: '#ef4444', gradient: 'linear-gradient(135deg, #ef4444, #dc2626)', light: 'rgba(239,68,68,0.15)', text: '#fff' }
};

var SIDEBAR_SUBJECTS = {
  1: [
    { id: 'TOAN',       name: 'Toán',        icon: 'fa-calculator',      color: '#3b82f6' },
    { id: 'TIENG_VIET', name: 'T. Việt',     icon: 'fa-book-open',       color: '#f97316' },
    { id: 'TIENG_ANH',  name: 'T. Anh',      icon: 'fa-globe',           color: '#0284c7' },
    { id: 'TNXH',       name: 'TNXH',        icon: 'fa-seedling',        color: '#16a34a' },
    { id: 'DAO_DUC',    name: 'Đạo đức',     icon: 'fa-heart',           color: '#db2777' },
    { id: 'HAT_NHAC',   name: 'Âm nhạc',     icon: 'fa-music',           color: '#9333ea' },
    { id: 'MI_THUAT',   name: 'Mĩ thuật',    icon: 'fa-palette',         color: '#06b6d4' },
    { id: 'GDTC',       name: 'GDTC',        icon: 'fa-volleyball',      color: '#65a30d' },
    { id: 'HDTN',       name: 'HĐTN',        icon: 'fa-compass',         color: '#f59e0b' },
    { id: 'KHAC',       name: 'Khác',        icon: 'fa-folder-plus',     color: '#64748b' }
  ],
  2: [
    { id: 'TOAN',       name: 'Toán',        icon: 'fa-calculator',      color: '#3b82f6' },
    { id: 'TIENG_VIET', name: 'T. Việt',     icon: 'fa-book-open',       color: '#f97316' },
    { id: 'TIENG_ANH',  name: 'T. Anh',      icon: 'fa-globe',           color: '#0284c7' },
    { id: 'TNXH',       name: 'TNXH',        icon: 'fa-seedling',        color: '#16a34a' },
    { id: 'DAO_DUC',    name: 'Đạo đức',     icon: 'fa-heart',           color: '#db2777' },
    { id: 'HAT_NHAC',   name: 'Âm nhạc',     icon: 'fa-music',           color: '#9333ea' },
    { id: 'MI_THUAT',   name: 'Mĩ thuật',    icon: 'fa-palette',         color: '#06b6d4' },
    { id: 'GDTC',       name: 'GDTC',        icon: 'fa-volleyball',      color: '#65a30d' },
    { id: 'HDTN',       name: 'HĐTN',        icon: 'fa-compass',         color: '#f59e0b' },
    { id: 'KHAC',       name: 'Khác',        icon: 'fa-folder-plus',     color: '#64748b' }
  ],
  3: [
    { id: 'TOAN',       name: 'Toán',        icon: 'fa-calculator',      color: '#3b82f6' },
    { id: 'TIENG_VIET', name: 'T. Việt',     icon: 'fa-book-open',       color: '#f97316' },
    { id: 'TIENG_ANH',  name: 'T. Anh',      icon: 'fa-globe',           color: '#0284c7' },
    { id: 'TNXH',       name: 'TNXH',        icon: 'fa-seedling',        color: '#16a34a' },
    { id: 'TIN_HOC',    name: 'Tin học',     icon: 'fa-laptop-code',     color: '#0d9488' },
    { id: 'CONG_NGHE',  name: 'C. Nghệ',    icon: 'fa-gears',           color: '#475569' },
    { id: 'DAO_DUC',    name: 'Đạo đức',     icon: 'fa-heart',           color: '#db2777' },
    { id: 'HDTN',       name: 'HĐTN',        icon: 'fa-compass',         color: '#f59e0b' },
    { id: 'KHAC',       name: 'Khác',        icon: 'fa-folder-plus',     color: '#64748b' }
  ],
  4: [
    { id: 'TOAN',          name: 'Toán',      icon: 'fa-calculator',      color: '#3b82f6' },
    { id: 'TIENG_VIET',    name: 'T. Việt',   icon: 'fa-book-open',       color: '#f97316' },
    { id: 'TIENG_ANH',     name: 'T. Anh',    icon: 'fa-globe',           color: '#0284c7' },
    { id: 'KHOA_HOC',      name: 'Khoa học',  icon: 'fa-flask-vial',      color: '#7c3aed' },
    { id: 'LICH_SU_DIA_LY',name: 'LS & ĐL',  icon: 'fa-map-location-dot',color: '#b45309' },
    { id: 'TIN_HOC',       name: 'Tin học',   icon: 'fa-laptop-code',     color: '#0d9488' },
    { id: 'CONG_NGHE',     name: 'C. Nghệ',  icon: 'fa-gears',           color: '#475569' },
    { id: 'DAO_DUC',       name: 'Đạo đức',   icon: 'fa-heart',           color: '#db2777' },
    { id: 'HDTN',          name: 'HĐTN',      icon: 'fa-compass',         color: '#f59e0b' },
    { id: 'KHAC',          name: 'Khác',      icon: 'fa-folder-plus',     color: '#64748b' }
  ],
  5: [
    { id: 'TOAN',          name: 'Toán',      icon: 'fa-calculator',      color: '#3b82f6' },
    { id: 'TIENG_VIET',    name: 'T. Việt',   icon: 'fa-book-open',       color: '#f97316' },
    { id: 'TIENG_ANH',     name: 'T. Anh',    icon: 'fa-globe',           color: '#0284c7' },
    { id: 'KHOA_HOC',      name: 'Khoa học',  icon: 'fa-flask-vial',      color: '#7c3aed' },
    { id: 'LICH_SU_DIA_LY',name: 'LS & ĐL',  icon: 'fa-map-location-dot',color: '#b45309' },
    { id: 'TIN_HOC',       name: 'Tin học',   icon: 'fa-laptop-code',     color: '#0d9488' },
    { id: 'CONG_NGHE',     name: 'C. Nghệ',  icon: 'fa-gears',           color: '#475569' },
    { id: 'DAO_DUC',       name: 'Đạo đức',   icon: 'fa-heart',           color: '#db2777' },
    { id: 'HDTN',          name: 'HĐTN',      icon: 'fa-compass',         color: '#f59e0b' },
    { id: 'KHAC',          name: 'Khác',      icon: 'fa-folder-plus',     color: '#64748b' }
  ]
};

var sidebarActiveGrade = 1;

// Khởi chạy khi DOM sẵn sàng (Hỗ trợ cả Trang chính và Trang độc lập)
function initApplication() {
  var pathname = (typeof window !== "undefined" && window.location && window.location.pathname ? window.location.pathname : "").toLowerCase();
  var isStandaloneIntegration = pathname.indexOf("ai-integration") !== -1 || (typeof document !== "undefined" && document.body && document.body.classList && document.body.classList.contains("page-ai-integration"));
  var isStandaloneExam = pathname.indexOf("ai-exam") !== -1 || (typeof document !== "undefined" && document.body && document.body.classList && document.body.classList.contains("page-ai-exam"));

  var searchStr = (typeof window !== "undefined" && window.location && window.location.search ? window.location.search : "").toLowerCase();
  var hashStr = (typeof window !== "undefined" && window.location && window.location.hash ? window.location.hash : "").toLowerCase();
  if (searchStr.indexOf("mode=timetable") !== -1 || hashStr.indexOf("timetable") !== -1) {
    integrationState.exportMode = "timetable";
  }
  if (searchStr.indexOf("role=gvbm_multi") !== -1 || searchStr.indexOf("role=damon") !== -1 || hashStr.indexOf("gvbm_multi") !== -1 || hashStr.indexOf("damon") !== -1) {
    integrationState.timetableRole = "gvbm";
    if (integrationState.gvbmConfig) integrationState.gvbmConfig.isMultiSubject = true;
  } else if (searchStr.indexOf("role=gvbm_single") !== -1 || hashStr.indexOf("gvbm_single") !== -1) {
    integrationState.timetableRole = "gvbm";
    if (integrationState.gvbmConfig) integrationState.gvbmConfig.isMultiSubject = false;
  } else if (searchStr.indexOf("role=gvbm") !== -1 || hashStr.indexOf("gvbm") !== -1) {
    integrationState.timetableRole = "gvbm";
  } else if (searchStr.indexOf("role=gvcn") !== -1 || hashStr.indexOf("gvcn") !== -1) {
    integrationState.timetableRole = "gvcn";
  }

  if (isStandaloneIntegration) {
    currentView = "ai-integration";
    var container = typeof document !== "undefined" ? document.getElementById("content-container") : null;
    if (container && typeof renderAiIntegrationView === "function") {
      renderAiIntegrationView(container);
    }
    return;
  }

  if (isStandaloneExam) {
    currentView = "ai-exam";
    var container = typeof document !== "undefined" ? document.getElementById("content-container") : null;
    if (container && typeof renderAiExamView === "function") {
      renderAiExamView(container);
    }
    return;
  }

  if (typeof AuthService !== "undefined" && AuthService.updateAuthUI) AuthService.updateAuthUI();
  if (typeof setupNavigationEvents === "function") setupNavigationEvents();
  if (typeof setupSearchEvents === "function") setupSearchEvents();
  if (typeof renderSidebarDocsNav === "function") renderSidebarDocsNav();

  // Xác định view ban đầu
  var hash = (typeof window !== "undefined" && window.location && window.location.hash ? window.location.hash.replace("#", "") : "") || "home";
  if (typeof navigateTo === "function") navigateTo(hash);

  // Cập nhật số liệu footer động
  if (typeof updateFooterCount === "function") updateFooterCount();

  if (typeof window !== "undefined") {
    window.addEventListener("hashchange", function() {
      var newHash = (window.location && window.location.hash ? window.location.hash.replace("#", "") : "") || "home";
      if (newHash !== currentView && typeof navigateTo === "function") {
        navigateTo(newHash);
      }
    });
  }
}

var SDOC_SECTIONS = [
  {
    id: 'sdoc-khbd',
    view: 'khbd',
    icon: 'fa-file-word',
    iconColor: 'var(--color-word)',
    label: 'Kế Hoạch Bài Dạy',
    level3: 'subjects'
  },
  {
    id: 'sdoc-pptx',
    view: 'pptx',
    icon: 'fa-file-powerpoint',
    iconColor: 'var(--color-powerpoint)',
    label: 'Bài Giảng Điện Tử',
    level3: 'weeks'
  }
];

var GRADE_DOT_COLORS = ['#0ea5e9','#10b981','#f59e0b','#a855f7','#ef4444'];

function renderSidebarDocsNav() {
  var container = document.getElementById('sidebar-docs-nav');
  if (!container) return;

  var html = SDOC_SECTIONS.map(function(sec) {
    var gradesHtml = [1,2,3,4,5].map(function(g) {
      var color = GRADE_DOT_COLORS[g-1];
      var level3Html = '';

      if (sec.level3 === 'subjects') {
        // Cấp 3: Môn học (dành cho KHBD)
        var subjects = SIDEBAR_SUBJECTS[g] || [];
        level3Html = subjects.map(function(s) {
          return '<li class="sdoc-subject-item"' +
            ' onclick="selectSubjectAndNavigateTo(' + g + ',\'' + s.id + '\',\'' + sec.view + '\')">' +
            '<i class="fa-solid ' + s.icon + '" style="color:' + s.color + ';"></i>' +
            '<span>' + s.name + '</span>' +
          '</li>';
        }).join('');
      } else {
        // Cấp 3: Tuần (dành cho Bài giảng PPTX)
        var weekColors = ['#38bdf8','#34d399','#fbbf24','#a78bfa','#f87171',
                          '#fb923c','#4ade80','#60a5fa','#e879f9','#2dd4bf'];
        for (var w = 1; w <= 35; w++) {
          var wc = weekColors[(w-1) % weekColors.length];
          level3Html += '<li class="sdoc-subject-item"' +
            ' onclick="selectWeekAndNavigateTo(' + g + ',' + w + ',\'' + sec.view + '\')">' +
            '<i class="fa-solid fa-calendar-week" style="color:' + wc + ';"></i>' +
            '<span>Tuần ' + w + '</span>' +
          '</li>';
        }
      }

      return '<div class="sdoc-grade" id="' + sec.id + '-g' + g + '">' +
        '<div class="sdoc-grade-header" onclick="toggleSidebarGrade(\'' + sec.id + '-g' + g + '\')">' +
          '<div class="sdoc-grade-title">' +
            '<span class="sdoc-grade-dot" style="background:' + color + ';">' + g + '</span>' +
            '<span class="sdoc-grade-label">Khối Lớp ' + g + '</span>' +
          '</div>' +
          '<i class="fa-solid fa-chevron-right sdoc-chevron"></i>' +
        '</div>' +
        '<ul class="sdoc-subjects">' + level3Html + '</ul>' +
      '</div>';
    }).join('');

    return '<div class="sdoc-section" id="' + sec.id + '">' +
      '<div class="sdoc-section-header" onclick="toggleSidebarSection(\'' + sec.id + '\')">' +
        '<div class="sdoc-section-title">' +
          '<i class="fa-solid ' + sec.icon + '" style="color:' + sec.iconColor + ';font-size:1rem;"></i>' +
          '<span>' + sec.label + '</span>' +
        '</div>' +
        '<i class="fa-solid fa-chevron-right sdoc-section-chevron"></i>' +
      '</div>' +
      '<div class="sdoc-grades-wrap">' + gradesHtml + '</div>' +
    '</div>';
  }).join('');

  container.innerHTML = html;
}

function toggleSidebarSection(id) {
  var el = document.getElementById(id);
  if (!el) return;
  var isOpen = el.classList.contains('open');

  // Đóng tất cả section khác
  document.querySelectorAll('.sdoc-section.open').forEach(function(s) {
    if (s.id !== id) s.classList.remove('open');
  });

  el.classList.toggle('open', !isOpen);
}

function toggleSidebarGrade(id) {
  var el = document.getElementById(id);
  if (!el) return;
  var isOpen = el.classList.contains('open');

  // Đóng các khối anh em trong cùng section
  var wrap = el.closest('.sdoc-grades-wrap');
  if (wrap) {
    wrap.querySelectorAll('.sdoc-grade.open').forEach(function(g) {
      if (g.id !== id) g.classList.remove('open');
    });
  }

  el.classList.toggle('open', !isOpen);
}

function selectSubjectAndNavigateTo(grade, subjectId, view) {
  selectedGrade = String(grade);
  selectedSubject = subjectId;
  navigateTo(view);
}

function selectWeekAndNavigateTo(grade, week, view) {
  selectedGrade = String(grade);
  selectedWeek = week;
  selectedSubject = 'all';
  navigateTo(view);
}



// Toast notification helper
function showToast(message, type) {
  if (!type) type = "info";
  var container = document.getElementById("toast-container");
  if (!container) return;

  var toast = document.createElement("div");
  toast.className = "toast toast-" + type;
  
  var icon = "fa-circle-info";
  if (type === "success") icon = "fa-circle-check";
  if (type === "error") icon = "fa-triangle-exclamation";

  toast.innerHTML = '<i class="fa-solid ' + icon + '"></i> <span>' + message + '</span>';
  container.appendChild(toast);

  setTimeout(function() {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(function() { toast.remove(); }, 300);
  }, 3500);
}

// Router điều hướng chính xác 100%
function navigateTo(viewName) {
  if (!viewName) viewName = "home";

  // Bảo vệ view Quản trị khi chưa đăng nhập Admin
  var session = AuthService.getSession();
  if (viewName === "settings" && session.role !== "admin") {
    showToast("Khu vực Cấu hình & Quản trị chỉ dành cho Quản trị viên!", "warning");
    viewName = "home";
  }

  currentView = viewName;

  // Cập nhật hash trên URL
  if (window.location.hash !== "#" + viewName) {
    window.location.hash = "#" + viewName;
  }

  // Cập nhật highlight active trên Sidebar
  document.querySelectorAll(".tree-menu .tree-item").forEach(function(item) {
    if (item.getAttribute("data-view") === currentView) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Cập nhật Breadcrumbs
  updateBreadcrumb();

  // Render trang con tương ứng
  renderCurrentView();

  // Cuộn lên đầu
  var mainViewport = document.getElementById("content-container");
  if (mainViewport) mainViewport.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Đóng sidebar trên mobile
  var sidebar = document.getElementById("app-sidebar");
  if (sidebar) sidebar.classList.remove("show");
}

function refreshCurrentView() {
  renderCurrentView();
}

// Điều hướng nhanh khi chọn môn học từ Cây danh mục Sidebar
function toggleGradeTree(grade) {
  var item = document.getElementById("grade-tree-" + grade);
  if (!item) return;
  var isCurrentlyOpen = item.classList.contains("open");

  // Đóng tất cả các khối khác trước (accordion exclusive)
  for (var i = 1; i <= 5; i++) {
    var other = document.getElementById("grade-tree-" + i);
    if (other) other.classList.remove("open");
  }

  // Toggle khối hiện tại
  if (!isCurrentlyOpen) {
    item.classList.add("open");
  }
}

function navigateToSubject(grade, subjectKey) {
  selectedGrade = grade;
  selectedSubject = subjectKey;
  updateTopGradeFilterUI();

  // Mở accordion của khối đó nếu chưa mở
  var item = document.getElementById("grade-tree-" + grade);
  if (item && !item.classList.contains("open")) {
    item.classList.add("open");
  }

  // Điều hướng tới View KHBD
  navigateTo("khbd");
  showToast("Đang hiển thị môn " + (SUBJECTS_CONFIG[subjectKey] ? SUBJECTS_CONFIG[subjectKey].name : subjectKey) + " - Khối " + grade, "info");
}


function updateBreadcrumb() {
  var container = document.getElementById("breadcrumbs-container");
  if (!container) return;

  var viewTitles = {
    home: '<li><a href="javascript:void(0)" onclick="navigateTo(\'home\')"><i class="fa-solid fa-house"></i> Trang Chủ</a></li>',
    pptx: '<li><a href="javascript:void(0)" onclick="navigateTo(\'home\')"><i class="fa-solid fa-house"></i> Trang Chủ</a></li> <li><i class="fa-solid fa-chevron-right" style="font-size:0.7rem;"></i></li> <li class="active">Bài Giảng PPTX (35 Tuần)</li>',
    khbd: '<li><a href="javascript:void(0)" onclick="navigateTo(\'home\')"><i class="fa-solid fa-house"></i> Trang Chủ</a></li> <li><i class="fa-solid fa-chevron-right" style="font-size:0.7rem;"></i></li> <li class="active">Kế Hoạch Bài Dạy (KHBD)</li>',
    weekly: '<li><a href="javascript:void(0)" onclick="navigateTo(\'home\')"><i class="fa-solid fa-house"></i> Trang Chủ</a></li> <li><i class="fa-solid fa-chevron-right" style="font-size:0.7rem;"></i></li> <li class="active">Tổng Hợp Theo Tuần</li>',
    "ai-exam": '<li><a href="javascript:void(0)" onclick="navigateTo(\'home\')"><i class="fa-solid fa-house"></i> Trang Chủ</a></li> <li><i class="fa-solid fa-chevron-right" style="font-size:0.7rem;"></i></li> <li class="active">Trợ Lý AI Ra Đề</li>',
    "ai-integration": '<li><a href="javascript:void(0)" onclick="navigateTo(\'home\')"><i class="fa-solid fa-house"></i> Trang Chủ</a></li> <li><i class="fa-solid fa-chevron-right" style="font-size:0.7rem;"></i></li> <li class="active">Xuất KHBD Có Tích Hợp (CV 2345)</li>',
    toolkit: '<li><a href="javascript:void(0)" onclick="navigateTo(\'home\')"><i class="fa-solid fa-house"></i> Trang Chủ</a></li> <li><i class="fa-solid fa-chevron-right" style="font-size:0.7rem;"></i></li> <li class="active">Tiện Ích Giảng Dạy</li>',
    settings: '<li><a href="javascript:void(0)" onclick="navigateTo(\'home\')"><i class="fa-solid fa-house"></i> Trang Chủ</a></li> <li><i class="fa-solid fa-chevron-right" style="font-size:0.7rem;"></i></li> <li class="active">Cấu Hình & Quản Trị</li>',
    search: '<li><a href="javascript:void(0)" onclick="navigateTo(\'home\')"><i class="fa-solid fa-house"></i> Trang Chủ</a></li> <li><i class="fa-solid fa-chevron-right" style="font-size:0.7rem;"></i></li> <li class="active">Kết Quả Tìm Kiếm</li>'
  };

  container.innerHTML = viewTitles[currentView] || viewTitles.home;
}

// Render View tương ứng
function renderCurrentView() {
  var container = document.getElementById("content-container");
  if (!container) return;

  switch (currentView) {
    case "home":
      renderHomeView(container);
      break;
    case "pptx":
      renderPptxView(container);
      break;
    case "khbd":
      renderKhbdView(container);
      break;
    case "weekly":
      renderWeeklyView(container);
      break;
    case "ai-exam":
      renderAiExamView(container);
      break;
    case "ai-integration":
      renderAiIntegrationView(container);
      break;
    case "toolkit":
      renderToolkitView(container);
      break;
    case "settings":
      renderSettingsView(container);
      break;
    case "search":
      renderSearchView(container);
      break;
    default:
      renderHomeView(container);
  }
}

// Thanh công cụ thao tác nhanh hàng loạt dành riêng cho Admin
function renderAdminBulkToolbarHtml() {
  var session = AuthService.getSession();
  if (session.role !== "admin") return "";

  return `
    <div style="background: linear-gradient(135deg, #f0fdf4, #eff6ff); border: 1px solid #93c5fd; border-radius: var(--radius-sm); padding: 0.75rem 1rem; margin-bottom: 1.25rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.65rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.82rem; font-weight: 700; color: #1e3a8a;">
        <i class="fa-solid fa-crown" style="color: #f59e0b;"></i>
        <span>Công cụ Quản trị viên (Thầy Long):</span>
      </div>
      <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
        <button class="btn btn-sm btn-outline" style="font-size: 0.72rem; padding: 0.25rem 0.6rem; background: #ffffff;" onclick="AuthService.setBulkPermission('pin')" title="Khóa toàn bộ kho, sau đó bấm ⚙️ mở từng bài">
          <i class="fa-solid fa-lock" style="color: #d97706;"></i> Khóa toàn bộ (Cần PIN)
        </button>
        <button class="btn btn-sm btn-outline" style="font-size: 0.72rem; padding: 0.25rem 0.6rem; background: #ffffff;" onclick="AuthService.setBulkPermission('free')" title="Mở toàn bộ kho, sau đó bấm ⚙️ khóa từng bài">
          <i class="fa-solid fa-unlock" style="color: #16a34a;"></i> Mở toàn bộ (Miễn phí)
        </button>
        <button class="btn btn-sm btn-outline" style="font-size: 0.72rem; padding: 0.25rem 0.6rem; background: #ffffff;" onclick="AuthService.setBulkPermission('hidden')" title="Ẩn toàn bộ kho với khách, sau đó bấm ⚙️ hiện từng bài">
          <i class="fa-solid fa-eye-slash" style="color: #dc2626;"></i> Ẩn toàn bộ với khách
        </button>
      </div>
    </div>
  `;
}

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
   VIEW 5: TRỢ LÝ AI SOẠN ĐỀ KIỂM TRA (CHƯƠNG TRÌNH GDPT 2018 - SGK KẾT NỐI TRI THỨC)
   Chuẩn mẫu thực tế: Ma trận phân tầng 3 Mức • Đề kiểm tra 3 ô đánh giá • Barem chấm
   ========================================================================== */

var currentExamData = null;
var currentExamActiveTab = "exam"; // "exam" | "matrix" | "answers" | "reading" | "writing" | "rubric"

function getSubjectsForGrade(grade) {
  var g = parseInt(grade) || 5;
  var all = AIService.EXAM_SUBJECTS;
  var list = [];
  for (var key in all) {
    if (all[key].grades.indexOf(g) !== -1) {
      list.push(all[key]);
    }
  }
  return list;
}

function renderAiExamView(container) {
  var currentGradeNum = selectedGrade === "all" ? 5 : parseInt(selectedGrade);
  var apiKey = localStorage.getItem("tvth_gemini_api_key") || (window.CONFIG && window.CONFIG.DEFAULT_GEMINI_API_KEY) || "";
  var availableSubjects = getSubjectsForGrade(currentGradeNum);
  var defaultSubject = availableSubjects[0]?.id || "TOAN";

  container.innerHTML = `
    <div class="section-header">
      <div>
        <h2 class="section-title">
          <i class="fa-solid fa-wand-magic-sparkles" style="color: #a855f7;"></i> 
          Trợ Lý AI Soạn Đề Kiểm Tra & Ma Trận Chuẩn Sư Phạm
        </h2>
        <p class="section-subtitle">
          Bộ sách <strong>Kết nối tri thức với cuộc sống</strong> • Thông tư 27/2020/TT-BGDĐT • Ma trận 3 Mức độ • Phiếu kiểm tra & Barem chấm
        </p>
      </div>
      <div>
        <button class="btn btn-sm ${apiKey ? 'btn-outline' : 'btn-primary'}" style="${apiKey ? 'border-color: #16a34a; color: #16a34a;' : 'background: linear-gradient(135deg, #7c3aed, #a855f7);'}" onclick="openGeminiApiKeyModal()">
          <i class="fa-solid ${apiKey ? 'fa-key' : 'fa-wand-magic-sparkles'}"></i> 
          ${apiKey ? 'Gemini AI: Đã kết nối' : 'Cấu hình Gemini API Key'}
        </button>
      </div>
    </div>

    <div class="ai-layout-container">
      <!-- CỘT ĐIỀU KHIỂN BÊN TRÁI (FORM THU THẬP THÔNG SỐ) -->
      <div class="ai-ctrl-box" style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
        
        <div style="font-size: 0.76rem; font-weight: 800; color: #7c3aed; background: #f5f3ff; border: 1px solid #ddd6fe; padding: 0.3rem 0.75rem; border-radius: var(--radius-full); display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
          <span><i class="fa-solid fa-book-open"></i> SGK KẾT NỐI TRI THỨC 2026</span>
          <span style="color: #16a34a;"><i class="fa-solid fa-circle-check"></i> Chuẩn TT 27</span>
        </div>

        <!-- 1. KHỐI LỚP & MÔN THI -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.65rem;">
          <div class="form-group">
            <label for="aiGradeSelect" style="font-weight: 700; font-size: 0.82rem;">1. Khối Lớp:</label>
            <select id="aiGradeSelect" class="form-select" onchange="onExamGradeChange(this.value)">
              <option value="1" ${currentGradeNum === 1 ? 'selected' : ''}>Khối 1</option>
              <option value="2" ${currentGradeNum === 2 ? 'selected' : ''}>Khối 2</option>
              <option value="3" ${currentGradeNum === 3 ? 'selected' : ''}>Khối 3</option>
              <option value="4" ${currentGradeNum === 4 ? 'selected' : ''}>Khối 4</option>
              <option value="5" ${currentGradeNum === 5 ? 'selected' : ''}>Khối 5</option>
            </select>
          </div>

          <div class="form-group">
            <label for="aiSubjectSelect" style="font-weight: 700; font-size: 0.82rem;">2. Môn Thi:</label>
            <select id="aiSubjectSelect" class="form-select" onchange="onExamSubjectChange(this.value)">
              ${availableSubjects.map(function(s) {
                return `<option value="${s.id}">${s.name}</option>`;
              }).join('')}
            </select>
          </div>
        </div>

        <!-- 2. PHẠM VI RA ĐỀ -->
        <div class="form-group" style="margin-top: 0.35rem;">
          <label for="aiScopePreset" style="font-weight: 700; font-size: 0.82rem;">3. Phạm Vi Đề Kiểm Tra:</label>
          <select id="aiScopePreset" class="form-select" onchange="onExamScopePresetChange(this.value)">
            <option value="Kiểm tra Định kỳ Cuối Học Kỳ I (Tuần 1 - 18)" selected>Cuối Học Kỳ I (Tuần 1 - 18)</option>
            <option value="Kiểm tra Định kỳ Giữa Học Kỳ I (Tuần 1 - 9)">Giữa Học Kỳ I (Tuần 1 - 9)</option>
            <option value="Kiểm tra Định kỳ Giữa Học Kỳ II (Tuần 19 - 27)">Giữa Học Kỳ II (Tuần 19 - 27)</option>
            <option value="Kiểm tra Định kỳ Cuối Năm / Cả Năm (Tuần 1 - 35)">Cuối Năm / Cả Năm (Tuần 1 - 35)</option>
            <option value="Theo Tuần ${selectedWeek}">Theo Tuần ${selectedWeek}</option>
            <option value="custom">✏️ Tự gõ tên bài học SGK Kết nối tri thức...</option>
          </select>
          <input type="text" id="aiCustomScopeInput" class="form-control" placeholder="Ví dụ: Bài 15 Luyện tập chung - Phép nhân và phép chia..." style="margin-top: 0.4rem; display: none;">
        </div>

        <!-- ========================================================= -->
        <!-- FORM ĐẶC THÙ CHO MÔN TIẾNG VIỆT (CHUẨN 2 PHIẾU ĐỌC & VIẾT) -->
        <!-- ========================================================= -->
        <div id="tvConfigBox" style="display: none; background: #fdf4ff; border: 1px solid #e879f9; border-radius: var(--radius-sm); padding: 0.75rem; margin-top: 0.65rem;">
          
          <div style="font-weight: 800; font-size: 0.82rem; color: #86198f; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.35rem;">
            <i class="fa-solid fa-book-open-reader"></i> I. PHẦN KIỂM TRA ĐỌC (10,0 điểm)
          </div>

          <div style="display: grid; grid-template-columns: 1fr; gap: 0.45rem; margin-bottom: 0.6rem; background: #fff; padding: 0.5rem; border-radius: 4px; border: 1px solid #f0abfc;">
            <div class="form-group" style="margin-bottom: 0;">
              <label for="tvOralScoreSelect" style="font-weight: 700; font-size: 0.78rem; color: #581c87;">• Điểm Đọc thành tiếng:</label>
              <select id="tvOralScoreSelect" class="form-select" style="font-size: 0.8rem;" onchange="onTvOralScoreChange(this.value)">
                <option value="4" selected>4,0 điểm (Đọc hiểu & LTVC: 6,0 điểm - Chuẩn TT27)</option>
                <option value="3">3,0 điểm (Đọc hiểu & LTVC: 7,0 điểm)</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label for="tvOralModeSelect" style="font-weight: 700; font-size: 0.78rem; color: #581c87;">• Chế độ Đọc thành tiếng:</label>
              <select id="tvOralModeSelect" class="form-select" style="font-size: 0.8rem;">
                <option value="sgk" selected>📚 5 bài trong SGK KNTT (Bốc thăm, chỉ in Tên bài + Trang SGK)</option>
                <option value="custom">📄 1 bài đọc ngoài SGK tương tự (In toàn văn bài đọc vào đề)</option>
              </select>
              <p style="font-size: 0.71rem; color: #7e22ce; margin: 0.25rem 0 0 0; line-height: 1.3;">
                <i class="fa-solid fa-circle-info"></i> <i>Câu hỏi & Gợi ý trả lời sẽ được in trong <b>Hướng Dẫn Chấm</b> để giáo viên hỏi học sinh.</i>
              </p>
            </div>
          </div>

          <div style="font-weight: 800; font-size: 0.82rem; color: #86198f; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.35rem;">
            <i class="fa-solid fa-pen-nib"></i> II. PHẦN KIỂM TRA VIẾT (10,0 điểm)
          </div>

          <!-- Dành cho Lớp 1, 2, 3 -->
          <div id="tvWritingGrade123Box" style="background: #fff; padding: 0.5rem; border-radius: 4px; border: 1px solid #f0abfc;">
            <label for="tvWritingRatioSelect" style="font-weight: 700; font-size: 0.78rem; color: #581c87;">• Phân chia điểm Chính tả & Tập làm văn:</label>
            <select id="tvWritingRatioSelect" class="form-select" style="font-size: 0.8rem;">
              <option value="4-6" selected>Chính tả (Nghe-viết): 4,0đ — Viết đoạn văn: 6,0đ (Chuẩn TT27)</option>
              <option value="3-7">Chính tả (Nghe-viết): 3,0đ — Viết đoạn văn: 7,0đ</option>
              <option value="5-5">Chính tả (Nghe-viết): 5,0đ — Viết đoạn văn: 5,0đ</option>
            </select>
          </div>

          <!-- Dành cho Lớp 4, 5 -->
          <div id="tvWritingGrade45Box" style="display: none; background: #fff; padding: 0.5rem; border-radius: 4px; border: 1px solid #f0abfc;">
            <div style="font-size: 0.78rem; font-weight: 700; color: #1e40af; margin-bottom: 0.35rem;">
              <i class="fa-solid fa-circle-check"></i> Tập làm văn: 10,0 điểm (Bài văn hoàn chỉnh)
            </div>
            <label for="tvEssayGenreSelect" style="font-weight: 700; font-size: 0.78rem; color: #581c87;">• Thể loại Tập làm văn:</label>
            <select id="tvEssayGenreSelect" class="form-select" style="font-size: 0.8rem;">
              <option value="Văn miêu tả cây cối" selected>Văn miêu tả cây cối (cây bóng mát, cây hoa, cây ăn quả)</option>
              <option value="Văn miêu tả con vật">Văn miêu tả con vật nuôi yêu thích</option>
              <option value="Văn miêu tả cảnh vật">Văn miêu tả cảnh đẹp thiên nhiên / quê hương</option>
              <option value="Văn miêu tả người">Văn miêu tả người thân / thầy cô giáo</option>
              <option value="Văn kể chuyện">Văn kể lại câu chuyện đã học / đã nghe</option>
              <option value="Viết đoạn văn nêu tình cảm cảm xúc">Viết đoạn văn nêu tình cảm, cảm xúc</option>
            </select>
            <p style="font-size: 0.71rem; color: #1e40af; margin: 0.3rem 0 0 0;">
              <i class="fa-solid fa-award"></i> Tự động tạo Barem chấm 10 điểm chi tiết trong Hướng Dẫn Chấm.
            </p>
          </div>

        </div>

        <!-- ========================================================= -->
        <!-- FORM CHUẨN CHO CÁC MÔN TOÁN, KHOA HỌC, XÃ HỘI, TIN HỌC... -->
        <!-- ========================================================= -->
        <div id="standardConfigBox" style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.75rem; margin-top: 0.65rem;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.65rem; margin-bottom: 0.5rem;">
            <div class="form-group" style="margin-bottom: 0;">
              <label for="aiMcqCount" style="font-weight: 700; font-size: 0.8rem;">4. Số câu Trắc nghiệm:</label>
              <input type="number" id="aiMcqCount" min="0" max="30" value="8" class="form-control" style="font-weight: 700; text-align: center;">
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label for="aiEssayCount" style="font-weight: 700; font-size: 0.8rem;">5. Số câu Tự luận:</label>
              <input type="number" id="aiEssayCount" min="0" max="10" value="2" class="form-control" style="font-weight: 700; text-align: center;">
            </div>
          </div>

          <!-- ĐỊNH HƯỚNG NỘI DUNG TỰ LUẬN -->
          <div class="form-group" style="margin-bottom: 0.5rem;">
            <label for="aiEssayGuide" style="font-weight: 700; font-size: 0.8rem;">6. Định hướng nội dung Tự luận (Gợi ý cho AI):</label>
            <textarea id="aiEssayGuide" class="form-control" rows="2" placeholder="Ví dụ: Bài 1 đặt tính rồi tính (4 phép tính), Bài 2 giải toán có lời văn 2 bước tính, Bài 3 tính bằng cách thuận tiện..." style="font-size: 0.8rem;"></textarea>
          </div>

          <!-- TỈ LỆ % ĐIỂM TRẮC NGHIỆM / TỰ LUẬN -->
          <div class="form-group" style="margin-bottom: 0;">
            <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 0.8rem; margin-bottom: 0.25rem;">
              <span>Trắc nghiệm: <b id="aiMcqPctLabel" style="color: #7c3aed;">70%</b> (<span id="aiMcqScoreLabel">7,0</span>đ)</span>
              <span>Tự luận: <b id="aiEssayPctLabel" style="color: #2563eb;">30%</b> (<span id="aiEssayScoreLabel">3,0</span>đ)</span>
            </div>
            <input type="range" id="aiScoreRatioSlider" min="0" max="100" step="10" value="70" class="form-range" oninput="onExamScoreRatioChange(this.value)" style="width: 100%; cursor: pointer;">
            <div style="display: flex; justify-content: space-between; gap: 0.25rem; margin-top: 0.35rem;">
              <button type="button" class="btn btn-sm btn-outline" style="padding: 0.15rem 0.4rem; font-size: 0.72rem;" onclick="setExamScoreRatio(70)">70% - 30%</button>
              <button type="button" class="btn btn-sm btn-outline" style="padding: 0.15rem 0.4rem; font-size: 0.72rem;" onclick="setExamScoreRatio(80)">80% - 20%</button>
              <button type="button" class="btn btn-sm btn-outline" style="padding: 0.15rem 0.4rem; font-size: 0.72rem;" onclick="setExamScoreRatio(60)">60% - 40%</button>
              <button type="button" class="btn btn-sm btn-outline" style="padding: 0.15rem 0.4rem; font-size: 0.72rem;" onclick="setExamScoreRatio(50)">50% - 50%</button>
              <button type="button" class="btn btn-sm btn-outline" style="padding: 0.15rem 0.4rem; font-size: 0.72rem;" onclick="setExamScoreRatio(100)">100% TN</button>
            </div>
          </div>
        </div>

        <!-- 4. TỰ NHẬP TỈ LỆ 3 MỨC ĐỘ NHẬN THỨC (THÔNG TƯ 27) -->
        <div style="background: #fdf4ff; border: 1px solid #f0abfc; border-radius: var(--radius-sm); padding: 0.75rem; margin-top: 0.65rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem;">
            <label style="font-weight: 800; font-size: 0.8rem; color: #86198f; margin-bottom: 0;">
              Ma trận 3 Mức độ nhận thức (Tự nhập %):
            </label>
            <span id="aiCognitiveTotalBadge" style="font-size: 0.72rem; font-weight: 800; padding: 0.15rem 0.5rem; border-radius: 9999px; background: #dcfce7; color: #166534;">
              Tổng: 100% ✓
            </span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.4rem; text-align: center;">
            <div>
              <div style="font-size: 0.72rem; font-weight: 700; color: #6b21a8; margin-bottom: 0.15rem;">Mức 1 (Nhận biết)</div>
              <div style="display: flex; align-items: center; justify-content: center; gap: 0.2rem;">
                <input type="number" id="aiLevel1Pct" min="0" max="100" step="5" value="40" class="form-control" style="text-align: center; font-weight: 800; padding: 0.25rem;" oninput="updateCognitiveTotal()">
                <span style="font-size: 0.75rem; font-weight: 700;">%</span>
              </div>
            </div>

            <div>
              <div style="font-size: 0.72rem; font-weight: 700; color: #6b21a8; margin-bottom: 0.15rem;">Mức 2 (Kết nối)</div>
              <div style="display: flex; align-items: center; justify-content: center; gap: 0.2rem;">
                <input type="number" id="aiLevel2Pct" min="0" max="100" step="5" value="40" class="form-control" style="text-align: center; font-weight: 800; padding: 0.25rem;" oninput="updateCognitiveTotal()">
                <span style="font-size: 0.75rem; font-weight: 700;">%</span>
              </div>
            </div>

            <div>
              <div style="font-size: 0.72rem; font-weight: 700; color: #6b21a8; margin-bottom: 0.15rem;">Mức 3 (Vận dụng)</div>
              <div style="display: flex; align-items: center; justify-content: center; gap: 0.2rem;">
                <input type="number" id="aiLevel3Pct" min="0" max="100" step="5" value="20" class="form-control" style="text-align: center; font-weight: 800; padding: 0.25rem;" oninput="updateCognitiveTotal()">
                <span style="font-size: 0.75rem; font-weight: 700;">%</span>
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 0.35rem; margin-top: 0.45rem; justify-content: center;">
            <button type="button" class="btn btn-sm btn-outline" style="padding: 0.15rem 0.45rem; font-size: 0.7rem; background: #fff;" onclick="setCognitivePreset(40, 40, 20)">40 - 40 - 20 (Chuẩn TT27)</button>
            <button type="button" class="btn btn-sm btn-outline" style="padding: 0.15rem 0.45rem; font-size: 0.7rem; background: #fff;" onclick="setCognitivePreset(50, 30, 20)">50 - 30 - 20</button>
            <button type="button" class="btn btn-sm btn-outline" style="padding: 0.15rem 0.45rem; font-size: 0.7rem; background: #fff;" onclick="setCognitivePreset(30, 40, 30)">30 - 40 - 30</button>
          </div>
        </div>

        <!-- 5. CÁC THÔNG SỐ BỔ SUNG -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.65rem; margin-top: 0.65rem;">
          <div class="form-group" style="margin-bottom: 0;">
            <label for="aiDurationSelect" style="font-weight: 700; font-size: 0.8rem;">Thời gian làm bài:</label>
            <select id="aiDurationSelect" class="form-select">
              <option value="35 phút" ${currentGradeNum <= 2 ? 'selected' : ''}>35 phút (Tiết học chuẩn)</option>
              <option value="40 phút" ${currentGradeNum > 2 ? 'selected' : ''}>40 phút (Chuẩn định kỳ)</option>
              <option value="15 phút">15 phút (Kiểm tra nhanh)</option>
              <option value="Đọc: 35p | Viết: 35p">Đọc: 35p | Viết: 35p (Tiếng Việt)</option>
            </select>
          </div>

          <div class="form-group" style="margin-bottom: 0;">
            <label for="aiSchoolNameInput" style="font-weight: 700; font-size: 0.8rem;">Tên Trường Tiểu học:</label>
            <input type="text" id="aiSchoolNameInput" class="form-control" placeholder="Trường Tiểu học .................">
          </div>
        </div>

        <div class="form-group" style="margin-top: 0.5rem; margin-bottom: 0;">
          <label for="aiCustomPrompt" style="font-weight: 700; font-size: 0.8rem;">Ghi chú / Yêu cầu đặc biệt cho AI (Tùy chọn):</label>
          <input type="text" id="aiCustomPrompt" class="form-control" placeholder="Ví dụ: Đề vừa sức học sinh, câu hỏi trắc nghiệm có tình huống thực tế...">
        </div>

        <!-- NÚT BẮT ĐẦU SOẠN ĐỀ -->
        <button class="btn btn-primary" style="width: 100%; margin-top: 1.15rem; padding: 0.8rem; font-size: 0.95rem; font-weight: 800; background: linear-gradient(135deg, #7c3aed, #a855f7); box-shadow: 0 4px 12px rgba(124, 58, 237, 0.35);" onclick="triggerAiGenerate()">
          <i class="fa-solid fa-wand-magic-sparkles"></i> BẮT ĐẦU SOẠN ĐỀ TỰ ĐỘNG
        </button>

      </div>

      <!-- CỘT KẾT QUẢ BÊN PHẢI (TRÌNH XEM TRƯỚC ĐỀ THI ĐA TABS) -->
      <div class="paper-preview-card" id="aiOutputContainer" style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm); min-height: 600px;">
        <div style="text-align: center; padding: 6rem 1rem; color: var(--text-muted);">
          <div style="width: 70px; height: 70px; border-radius: 50%; background: #f3e8ff; color: #7c3aed; display: inline-flex; align-items: center; justify-content: center; font-size: 2.2rem; margin-bottom: 1.25rem;">
            <i class="fa-solid fa-file-signature"></i>
          </div>
          <h3 style="color: var(--text-color); font-weight: 800; font-size: 1.25rem; margin-bottom: 0.5rem;">Sẵn sàng tạo đề kiểm tra chuẩn Bộ GD&ĐT</h3>
          <p style="font-size: 0.88rem; max-width: 480px; margin: 0 auto; line-height: 1.5;">
            Chọn thông số bên trái và bấm <strong>"BẮT ĐẦU SOẠN ĐỀ TỰ ĐỘNG"</strong>. AI sẽ tạo trọn bộ Ma trận 3 Mức độ, Đề kiểm tra và Hướng dẫn chấm chi tiết theo SGK Kết nối tri thức.
          </p>
        </div>
      </div>
    </div>
  `;

  setTimeout(function() {
    updateExamSubjectFormState(defaultSubject, currentGradeNum);
    updateExamScopeOptions(currentGradeNum, defaultSubject);
  }, 20);
}

// Cập nhật giao diện form khi đổi môn học hoặc khối lớp
function updateExamSubjectFormState(subjectId, grade) {
  var isTv = (subjectId === "TIENG_VIET");
  var g = parseInt(grade) || 3;
  
  var tvBox = document.getElementById("tvConfigBox");
  var stdBox = document.getElementById("standardConfigBox");
  var tvG123Box = document.getElementById("tvWritingGrade123Box");
  var tvG45Box = document.getElementById("tvWritingGrade45Box");

  if (tvBox) tvBox.style.display = isTv ? "block" : "none";
  if (stdBox) stdBox.style.display = isTv ? "none" : "block";

  if (isTv) {
    if (tvG123Box) tvG123Box.style.display = (g <= 3) ? "block" : "none";
    if (tvG45Box) tvG45Box.style.display = (g >= 4) ? "block" : "none";
  }
}

function onTvOralScoreChange(val) {
  // Có thể cập nhật nhãn nếu cần
}

// Cập nhật danh sách môn khi đổi khối lớp
function onExamGradeChange(grade) {
  var select = document.getElementById("aiSubjectSelect");
  if (!select) return;
  var subjects = getSubjectsForGrade(grade);
  select.innerHTML = subjects.map(function(s) {
    return `<option value="${s.id}">${s.name}</option>`;
  }).join('');

  updateExamSubjectFormState(select.value, grade);
  updateExamScopeOptions(grade, select.value);
}

// Cập nhật phạm vi bài học khi đổi môn
function onExamSubjectChange(subjectId) {
  var grade = document.getElementById("aiGradeSelect")?.value || 5;
  updateExamSubjectFormState(subjectId, grade);
  updateExamScopeOptions(grade, subjectId);
}

// Nạp danh sách chủ đề & bài học từ Kho Sách Giáo Khoa Số Hóa KNTT
function updateExamScopeOptions(grade, subjectId) {
  var scopeSelect = document.getElementById("aiScopePreset");
  if (!scopeSelect) return;

  var currentSelectedVal = scopeSelect.value;
  var sgkKey = (subjectId || 'TOAN').toLowerCase().replace('lich_su_dia_ly', 'lich_su_dia_li');
  var book = (typeof window !== 'undefined' && window.SGK_DATA && typeof window.SGK_DATA.getBook === 'function') 
             ? window.SGK_DATA.getBook(grade, sgkKey) : null;

  var html = `
    <optgroup label="Phạm vi định kỳ chuẩn">
      <option value="Kiểm tra Định kỳ Cuối Học Kỳ I (Tuần 1 - 18)" selected>Cuối Học Kỳ I (Tuần 1 - 18)</option>
      <option value="Kiểm tra Định kỳ Giữa Học Kỳ I (Tuần 1 - 9)">Giữa Học Kỳ I (Tuần 1 - 9)</option>
      <option value="Kiểm tra Định kỳ Giữa Học Kỳ II (Tuần 19 - 27)">Giữa Học Kỳ II (Tuần 19 - 27)</option>
      <option value="Kiểm tra Định kỳ Cuối Năm / Cả Năm (Tuần 1 - 35)">Cuối Năm / Cả Năm (Tuần 1 - 35)</option>
      <option value="Theo Tuần ${selectedWeek}">Theo Tuần ${selectedWeek}</option>
    </optgroup>
  `;

  if (book && book.topics && book.topics.length > 0) {
    html += `
      <optgroup label="Chủ đề / Chủ điểm SGK KNTT (${book.metadata?.bookName || ''})">
        ${book.topics.map(function(t) {
          return `<option value="${t.name}">${t.name} (Tuần ${t.weeks || ''})</option>`;
        }).join('')}
      </optgroup>
    `;
  }

  if (book && book.lessons && book.lessons.length > 0) {
    html += `
      <optgroup label="Từng bài học SGK số hóa (Khối ${grade})">
        ${book.lessons.slice(0, 45).map(function(l) {
          return `<option value="${l.title}">Tuần ${l.week || 'N/A'}: ${l.title}</option>`;
        }).join('')}
      </optgroup>
    `;
  }

  html += `
    <optgroup label="Tùy chỉnh khác">
      <option value="custom">✏️ Tự gõ tên bài học / phạm vi khác...</option>
    </optgroup>
  `;

  scopeSelect.innerHTML = html;
  onExamScopePresetChange(scopeSelect.value);
}

// Xử lý chọn nhanh hoặc tự gõ bài học
function onExamScopePresetChange(val) {
  var customInput = document.getElementById("aiCustomScopeInput");
  if (!customInput) return;
  if (val === "custom") {
    customInput.style.display = "block";
    customInput.focus();
  } else {
    customInput.style.display = "none";
  }
}

// Đồng bộ thanh trượt tỉ lệ điểm % Trắc nghiệm / Tự luận
function onExamScoreRatioChange(mcqPct) {
  var p = parseInt(mcqPct);
  var essayPct = 100 - p;
  
  var mcqLbl = document.getElementById("aiMcqPctLabel");
  var essayLbl = document.getElementById("aiEssayPctLabel");
  var mcqScore = document.getElementById("aiMcqScoreLabel");
  var essayScore = document.getElementById("aiEssayScoreLabel");

  if (mcqLbl) mcqLbl.innerText = p + "%";
  if (essayLbl) essayLbl.innerText = essayPct + "%";
  if (mcqScore) mcqScore.innerText = (p / 10).toString().replace('.', ',');
  if (essayScore) essayScore.innerText = (essayPct / 10).toString().replace('.', ',');
}

function setExamScoreRatio(mcqPct) {
  var slider = document.getElementById("aiScoreRatioSlider");
  if (slider) {
    slider.value = mcqPct;
    onExamScoreRatioChange(mcqPct);
  }
}

// Cập nhật và kiểm tra tổng % 3 mức độ nhận thức
function updateCognitiveTotal() {
  var m1 = parseInt(document.getElementById("aiLevel1Pct")?.value) || 0;
  var m2 = parseInt(document.getElementById("aiLevel2Pct")?.value) || 0;
  var m3 = parseInt(document.getElementById("aiLevel3Pct")?.value) || 0;
  var total = m1 + m2 + m3;

  var badge = document.getElementById("aiCognitiveTotalBadge");
  if (badge) {
    if (total === 100) {
      badge.style.background = "#dcfce7";
      badge.style.color = "#166534";
      badge.innerHTML = "Tổng: 100% ✓";
    } else {
      badge.style.background = "#fee2e2";
      badge.style.color = "#991b1b";
      badge.innerHTML = `Tổng: ${total}% (Cần đủ 100%)`;
    }
  }
}

function setCognitivePreset(m1, m2, m3) {
  var in1 = document.getElementById("aiLevel1Pct");
  var in2 = document.getElementById("aiLevel2Pct");
  var in3 = document.getElementById("aiLevel3Pct");
  if (in1) in1.value = m1;
  if (in2) in2.value = m2;
  if (in3) in3.value = m3;
  updateCognitiveTotal();
}

// Bắt đầu gọi sinh đề
async function triggerAiGenerate() {
  var grade = document.getElementById("aiGradeSelect")?.value || 3;
  var subjectId = document.getElementById("aiSubjectSelect")?.value || "TOAN";
  var scopePreset = document.getElementById("aiScopePreset")?.value || "";
  var customScope = document.getElementById("aiCustomScopeInput")?.value || "";
  var scope = (scopePreset === "custom" && customScope.trim()) ? customScope.trim() : scopePreset;

  var duration = document.getElementById("aiDurationSelect")?.value || "40 phút";
  var schoolName = document.getElementById("aiSchoolNameInput")?.value || "";
  var customPrompt = document.getElementById("aiCustomPrompt")?.value || "";
  var apiKey = localStorage.getItem("tvth_gemini_api_key") || (window.CONFIG && window.CONFIG.DEFAULT_GEMINI_API_KEY) || "";

  var level1Percent = parseInt(document.getElementById("aiLevel1Pct")?.value) || 40;
  var level2Percent = parseInt(document.getElementById("aiLevel2Pct")?.value) || 40;
  var level3Percent = parseInt(document.getElementById("aiLevel3Pct")?.value) || 20;

  var isTv = (subjectId === "TIENG_VIET");
  var payload = {
    grade: grade,
    subjectId: subjectId,
    scope: scope,
    duration: duration,
    schoolName: schoolName,
    customPrompt: customPrompt,
    apiKey: apiKey,
    level1Percent: level1Percent,
    level2Percent: level2Percent,
    level3Percent: level3Percent
  };

  if (isTv) {
    var oralScoreVal = parseFloat(document.getElementById("tvOralScoreSelect")?.value) || 4.0;
    var oralModeVal = document.getElementById("tvOralModeSelect")?.value || "sgk";
    var ratioVal = document.getElementById("tvWritingRatioSelect")?.value || "4-6";
    var dictScoreVal = parseFloat(ratioVal.split('-')[0]) || 4.0;
    var genreVal = document.getElementById("tvEssayGenreSelect")?.value || "Văn miêu tả cây cối";

    payload.tvOralScore = oralScoreVal;
    payload.tvOralMode = oralModeVal;
    payload.tvDictationScore = dictScoreVal;
    payload.tvEssayGenre = genreVal;
  } else {
    var mcqCount = parseInt(document.getElementById("aiMcqCount")?.value) || 8;
    var essayCount = parseInt(document.getElementById("aiEssayCount")?.value);
    if (isNaN(essayCount)) essayCount = 2;
    var essayGuide = document.getElementById("aiEssayGuide")?.value || "";

    var sliderVal = parseInt(document.getElementById("aiScoreRatioSlider")?.value);
    var mcqPercent = !isNaN(sliderVal) ? sliderVal : 70;
    var essayPercent = 100 - mcqPercent;

    payload.mcqCount = mcqCount;
    payload.essayCount = essayCount;
    payload.essayGuide = essayGuide;
    payload.mcqPercent = mcqPercent;
    payload.essayPercent = essayPercent;
  }

  var outputEl = document.getElementById("aiOutputContainer");
  if (!outputEl) return;

  outputEl.innerHTML = `
    <div style="text-align: center; padding: 6rem 1rem;">
      <div class="spinner" style="border-top-color: #7c3aed; width: 44px; height: 44px; margin: 0 auto 1.5rem; border-width: 4px;"></div>
      <h3 style="color: #7c3aed; font-weight: 800; font-size: 1.2rem; margin-bottom: 0.5rem;">AI đang phân tích chương trình SGK Kết nối tri thức...</h3>
      <p style="color: var(--text-muted); font-size: 0.88rem; max-width: 450px; margin: 0 auto;">
        ${isTv ? 'Đang xây dựng Đề Đọc (Đọc tiếng + Đọc hiểu), Đề Viết (Chính tả + TLV), Ma trận Thông tư 27 và Barem chấm chi tiết...' : 'Đang xây dựng Ma trận 3 Mức độ, Đề kiểm tra và Barem chấm chuẩn Thông tư 27...'}
      </p>
    </div>
  `;

  setTimeout(async function() {
    try {
      var exam = await AIService.generateExam(payload);
      currentExamData = exam;
      currentExamActiveTab = (exam.isTiengViet || exam.subjectId === "TIENG_VIET" || exam.readingExam) ? "reading" : "exam";
      renderExamOutput(exam, outputEl);
      showToast("Đã soạn đề kiểm tra & ma trận thành công!", "success");
    } catch (err) {
      console.error(err);
      showToast("Có lỗi khi tạo đề, vui lòng thử lại!", "error");
    }
  }, 500);
}

// Hiển thị kết quả đề thi dạng Tabs
function renderExamOutput(exam, container) {
  if (!container || !exam) return;

  var isAi = exam.source === 'ai';
  var sourceBadgeHtml = isAi 
    ? `<div style="display: inline-flex; align-items: center; gap: 0.35rem; background: #f3e8ff; color: #7c3aed; padding: 0.35rem 0.75rem; border-radius: 9999px; font-size: 0.8rem; font-weight: 700; border: 1px solid #d8b4fe;" title="Đề thi được tạo trực tuyến bởi mô hình Google Gemini AI"><i class="fa-solid fa-brain"></i> ${exam.modelName ? `AI (${exam.modelName})` : `Google Gemini AI (Online)`}</div>`
    : `<div style="display: inline-flex; align-items: center; gap: 0.35rem; background: #fef3c7; color: #b45309; padding: 0.35rem 0.75rem; border-radius: 9999px; font-size: 0.8rem; font-weight: 700; border: 1px solid #fde68a;" title="Đề thi được tạo tự động từ Ngân hàng SGK Kết nối tri thức số hóa"><i class="fa-solid fa-database"></i> Ngân hàng SGK (Offline)</div>`;

  // =========================================================================
  // GIAO DIỆN HIỂN THỊ ĐẶC BIỆT CHO MÔN TIẾNG VIỆT (4 TABS: ĐỌC, VIẾT, MA TRẬN, ĐÁP ÁN)
  // =========================================================================
  if (exam.isTiengViet || exam.subjectId === "TIENG_VIET" || exam.readingExam) {
    var rd = exam.readingExam || {};
    var wr = exam.writingExam || {};
    var oralScoreStr = (rd.oralScore || 4.0).toFixed(1).replace('.', ',');
    var compScoreStr = (rd.comprehensionScore || 6.0).toFixed(1).replace('.', ',');
    var isSGK = (rd.oralMode !== "custom");
    var grade = exam.grade || 3;

    if (!["reading", "writing", "matrix", "rubric"].includes(currentExamActiveTab)) {
      currentExamActiveTab = "reading";
    }

    container.innerHTML = `
      <!-- THANH ĐIỀU HƯỚNG 4 TABS TIẾNG VIỆT -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.65rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.85rem;">
        <div style="display: flex; gap: 0.35rem; background: #f1f5f9; padding: 0.25rem; border-radius: var(--radius-sm); align-items: center; flex-wrap: wrap;">
          <button class="btn btn-sm ${currentExamActiveTab === 'reading' ? 'btn-primary' : 'btn-ghost'}" style="${currentExamActiveTab === 'reading' ? 'background: #7c3aed;' : ''}" onclick="switchExamTab('reading')">
            <i class="fa-solid fa-book-open"></i> 1. Phiếu Đề Đọc (10đ)
          </button>
          <button class="btn btn-sm ${currentExamActiveTab === 'writing' ? 'btn-primary' : 'btn-ghost'}" style="${currentExamActiveTab === 'writing' ? 'background: #7c3aed;' : ''}" onclick="switchExamTab('writing')">
            <i class="fa-solid fa-pen-nib"></i> 2. Phiếu Đề Viết (10đ)
          </button>
          <button class="btn btn-sm ${currentExamActiveTab === 'matrix' ? 'btn-primary' : 'btn-ghost'}" style="${currentExamActiveTab === 'matrix' ? 'background: #7c3aed;' : ''}" onclick="switchExamTab('matrix')">
            <i class="fa-solid fa-table-cells"></i> 3. Ma Trận Đề (TT 27)
          </button>
          <button class="btn btn-sm ${currentExamActiveTab === 'rubric' ? 'btn-primary' : 'btn-ghost'}" style="${currentExamActiveTab === 'rubric' ? 'background: #7c3aed;' : ''}" onclick="switchExamTab('rubric')">
            <i class="fa-solid fa-square-check"></i> 4. Hướng Dẫn Chấm
          </button>
        </div>

        <div style="display: flex; gap: 0.45rem; align-items: center;">
          ${sourceBadgeHtml}
          <button class="btn btn-sm btn-primary" style="background: #16a34a; border-color: #16a34a;" onclick="AIService.exportToWord(currentExamData)">
            <i class="fa-solid fa-file-word"></i> Xuất File Word (.doc)
          </button>
          <button class="btn btn-sm btn-outline" onclick="window.print()">
            <i class="fa-solid fa-print"></i> In Đề
          </button>
        </div>
      </div>

      <!-- TAB 1: PHIẾU ĐỀ ĐỌC (HỌC SINH) -->
      <div id="examTabContent_reading" class="exam-paper-sheet" style="display: ${currentExamActiveTab === 'reading' ? 'block' : 'none'}; background: #fff; padding: 1.5rem; border: 1px solid #cbd5e1; border-radius: 4px; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.4; color: #000;">
        
        <!-- HEADER 2 CỘT -->
        <table style="width: 100%; border: none; margin-bottom: 12px;">
          <tr>
            <td style="width: 48%; vertical-align: top;">
              <b>${exam.schoolName || "TRƯỜNG TIỂU HỌC ................................."}</b><br>
              Họ và tên: ...................................................<br>
              Lớp: ${exam.grade}.....
            </td>
            <td style="width: 52%; vertical-align: top; text-align: right;">
              <i>Thứ….. ngày … tháng … năm 2026</i><br>
              <b style="font-size: 13.5pt; text-transform: uppercase;">PHIẾU KIỂM TRA ĐỌC</b><br>
              <b>MÔN: TIẾNG VIỆT - LỚP ${exam.grade}</b><br>
              <i>Thời gian làm bài: 35 - 40 phút</i>
            </td>
          </tr>
        </table>

        <!-- KHUNG ĐÁNH GIÁ 3 Ô PHẦN ĐỌC -->
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
          <tr style="background: #fafafa; font-weight: bold; text-align: center;">
            <td style="border: 1px solid #000; width: 16%; padding: 4px;">Đọc tiếng</td>
            <td style="border: 1px solid #000; width: 16%; padding: 4px;">Đọc hiểu</td>
            <td style="border: 1px solid #000; width: 16%; padding: 4px;">Tổng điểm</td>
            <td style="border: 1px solid #000; width: 36.4%; padding: 4px;">Nhận xét của giáo viên</td>
            <td style="border: 1px solid #000; width: 15.6%; padding: 4px;">Ý kiến phụ huynh</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; height: 50px; text-align: center;">..... / ${oralScoreStr}đ</td>
            <td style="border: 1px solid #000; text-align: center;">..... / ${compScoreStr}đ</td>
            <td style="border: 1px solid #000; text-align: center; font-weight: bold; font-size: 13pt;">..... / 10đ</td>
            <td style="border: 1px solid #000;">&nbsp;</td>
            <td style="border: 1px solid #000;">&nbsp;</td>
          </tr>
        </table>

        <!-- A. ĐỌC THÀNH TIẾNG -->
        <div style="font-weight: bold; font-size: 13.5pt; margin: 10px 0 4px 0;">A. PHẦN ĐỌC THÀNH TIẾNG (${oralScoreStr} điểm)</div>
        <p style="margin: 0 0 6px 0; font-style: italic;">
          ${rd.oralGuideIntro || "Học sinh bốc thăm đọc thành tiếng một đoạn trong các bài sau (thời gian không quá 1 phút) và trả lời câu hỏi do giáo viên nêu:"}
        </p>

        ${isSGK ? `
          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 4px; padding: 8px 12px; margin-bottom: 14px;">
            <table style="width: 100%; border-collapse: collapse;">
              ${(rd.oralItems || []).map(function(item, idx) {
                return `
                  <tr style="border-bottom: 1px dashed #e2e8f0;">
                    <td style="padding: 4px 6px; font-weight: bold; width: 14%; color: #7c3aed;">Phiếu ${idx + 1}:</td>
                    <td style="padding: 4px 6px;">
                      <b>${item.title}</b> <span style="color: #64748b; font-style: italic;">(${item.bookVolume || 'Tập 1'} - ${item.page || 'SGK KNTT'})</span>
                    </td>
                  </tr>
                `;
              }).join('')}
            </table>
          </div>
        ` : `
          <div style="background: #fafafa; border: 1px solid #ccc; padding: 10px 14px; margin: 8px 0 14px 0; line-height: 1.45;">
            <div style="text-align: center; font-weight: bold; font-size: 13.5pt; text-transform: uppercase; margin-bottom: 4px;">
              ${rd.oralItems?.[0]?.title || "BÀI ĐỌC THÀNH TIẾNG"}
            </div>
            <div style="text-align: center; font-style: italic; font-size: 11pt; margin-bottom: 8px;">
              ${rd.oralItems?.[0]?.author ? `Tác giả: ${rd.oralItems[0].author}` : ''}
            </div>
            <div style="text-align: justify; text-indent: 1.5rem;">
              ${rd.oralItems?.[0]?.passage || ""}
            </div>
          </div>
        `}

        <!-- B. ĐỌC HIỂU VÀ KIẾN THỨC TIẾNG VIỆT -->
        <div style="font-weight: bold; font-size: 13.5pt; margin: 14px 0 4px 0;">B. PHẦN ĐỌC HIỂU VÀ KIẾN THỨC TIẾNG VIỆT (${compScoreStr} điểm)</div>
        <p style="margin: 0 0 6px 0; font-style: italic;">Đọc thầm bài văn sau và hoàn thành các câu hỏi bên dưới:</p>

        <div style="background: #fdfdfd; border: 1px solid #cbd5e1; border-radius: 4px; padding: 10px 14px; margin: 6px 0 12px 0;">
          <div style="text-align: center; font-weight: bold; font-size: 13.5pt; text-transform: uppercase; margin-bottom: 2px;">
            ${rd.comprehensionReading?.title || "BÀI ĐỌC THẦM"}
          </div>
          <div style="text-align: center; font-style: italic; font-size: 11pt; margin-bottom: 8px; color: #555;">
            ${rd.comprehensionReading?.author ? `Tác giả: ${rd.comprehensionReading.author}` : ''}
          </div>
          <div style="text-align: justify; text-indent: 1.5rem; line-height: 1.45;">
            ${rd.comprehensionReading?.passage || ""}
          </div>
        </div>

        <p style="margin: 6px 0 8px 0; font-style: italic; font-weight: bold;">Khoanh vào chữ cái trước câu trả lời đúng và hoàn thành các bài tập:</p>

        ${(rd.questions || []).map(function(q) {
          if (q.type === 'mcq') {
            return `
              <div style="margin-bottom: 10px;" contenteditable="true">
                <b>Câu ${q.num}</b> (${q.score ? q.score.toString().replace('.', ',') : '0,5'} điểm - ${q.level || 'Mức 1'}): ${q.text}
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.35rem; padding-left: 1.25rem; margin-top: 3px;">
                  ${(q.options || []).map(function(opt) { return `<div>${opt}</div>`; }).join('')}
                </div>
              </div>
            `;
          } else {
            return `
              <div style="margin-top: 10px; margin-bottom: 12px;" contenteditable="true">
                <b>Câu ${q.num}</b> (${q.score ? q.score.toString().replace('.', ',') : '1,0'} điểm - ${q.level || 'Mức 2'}): ${q.text}
                <div style="margin-top: 4px;">
                  <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
                  <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
                </div>
              </div>
            `;
          }
        }).join('')}
      </div>

      <!-- TAB 2: PHIẾU ĐỀ VIẾT (HỌC SINH) -->
      <div id="examTabContent_writing" class="exam-paper-sheet" style="display: ${currentExamActiveTab === 'writing' ? 'block' : 'none'}; background: #fff; padding: 1.5rem; border: 1px solid #cbd5e1; border-radius: 4px; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.4; color: #000;">
        
        <!-- HEADER 2 CỘT -->
        <table style="width: 100%; border: none; margin-bottom: 12px;">
          <tr>
            <td style="width: 48%; vertical-align: top;">
              <b>${exam.schoolName || "TRƯỜNG TIỂU HỌC ................................."}</b><br>
              Họ và tên: ...................................................<br>
              Lớp: ${exam.grade}.....
            </td>
            <td style="width: 52%; vertical-align: top; text-align: right;">
              <i>Thứ….. ngày … tháng … năm 2026</i><br>
              <b style="font-size: 13.5pt; text-transform: uppercase;">PHIẾU KIỂM TRA VIẾT</b><br>
              <b>MÔN: TIẾNG VIỆT - LỚP ${exam.grade}</b><br>
              <i>Thời gian làm bài: 35 - 40 phút</i>
            </td>
          </tr>
        </table>

        ${grade <= 3 ? `
          <!-- KHUNG ĐÁNH GIÁ 3 Ô PHẦN VIẾT LỚP 1-3 -->
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
            <tr style="background: #fafafa; font-weight: bold; text-align: center;">
              <td style="border: 1px solid #000; width: 18%; padding: 4px;">Chính tả</td>
              <td style="border: 1px solid #000; width: 18%; padding: 4px;">Tập làm văn</td>
              <td style="border: 1px solid #000; width: 18%; padding: 4px;">Tổng điểm Viết</td>
              <td style="border: 1px solid #000; width: 28%; padding: 4px;">Nhận xét của giáo viên</td>
              <td style="border: 1px solid #000; width: 18%; padding: 4px;">Chữ kí PHHS</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; height: 50px; text-align: center;">..... / ${(wr.dictation?.score || 4.0).toFixed(1).replace('.', ',')}đ</td>
              <td style="border: 1px solid #000; text-align: center;">..... / ${(wr.paragraphWriting?.score || 6.0).toFixed(1).replace('.', ',')}đ</td>
              <td style="border: 1px solid #000; text-align: center; font-weight: bold; font-size: 13pt;">..... / 10đ</td>
              <td style="border: 1px solid #000;">&nbsp;</td>
              <td style="border: 1px solid #000;">&nbsp;</td>
            </tr>
          </table>

          <!-- PHẦN 1: CHÍNH TẢ -->
          <div style="font-weight: bold; font-size: 13.5pt; margin: 12px 0 4px 0;">I. CHÍNH TẢ (Nghe - viết) (${(wr.dictation?.score || 4.0).toFixed(1).replace('.', ',')} điểm)</div>
          <p style="margin: 0 0 6px 0; font-style: italic;">
            <b>${wr.dictation?.title || "Bài viết chính tả"}</b> ${wr.dictation?.author ? `(Tác giả: ${wr.dictation.author})` : ''}
          </p>

          <div style="margin-top: 8px;">
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
          </div>

          <!-- PHẦN 2: TẬP LÀM VĂN -->
          <div style="font-weight: bold; font-size: 13.5pt; margin: 18px 0 4px 0;">II. TẬP LÀM VĂN (${(wr.paragraphWriting?.score || 6.0).toFixed(1).replace('.', ',')} điểm)</div>
          <p style="margin: 0 0 6px 0; font-weight: bold;">
            Đề bài: ${wr.paragraphWriting?.prompt || "Viết đoạn văn ngắn theo chủ điểm đã học."}
          </p>
          ${(wr.paragraphWriting?.suggestions && wr.paragraphWriting.suggestions.length > 0) ? `
            <div style="font-style: italic; margin-bottom: 8px; font-size: 11.5pt; color: #475569;">
              Gợi ý:
              ${wr.paragraphWriting.suggestions.map(function(s){ return `<div>• ${s}</div>`; }).join('')}
            </div>
          ` : ''}

          <div style="margin-top: 8px;">
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
          </div>
        ` : `
          <!-- KHUNG ĐÁNH GIÁ LỚP 4-5 -->
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
            <tr style="background: #fafafa; font-weight: bold; text-align: center;">
              <td style="border: 1px solid #000; width: 25%; padding: 6px;">Điểm Tập làm văn</td>
              <td style="border: 1px solid #000; width: 50%; padding: 6px;">Nhận xét của giáo viên</td>
              <td style="border: 1px solid #000; width: 25%; padding: 6px;">Chữ kí của PHHS</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; height: 60px; text-align: center; font-weight: bold; font-size: 14pt;">..... / 10đ</td>
              <td style="border: 1px solid #000;">&nbsp;</td>
              <td style="border: 1px solid #000;">&nbsp;</td>
            </tr>
          </table>

          <div style="font-weight: bold; font-size: 13.5pt; margin: 12px 0 4px 0;">TẬP LÀM VĂN (10,0 điểm)</div>
          <p style="margin: 0 0 8px 0; font-weight: bold; font-size: 13.5pt;">
            Đề bài: ${wr.essay?.prompt || "Em hãy viết một bài văn hoàn chỉnh đúng thể loại đã học."}
          </p>
          ${(wr.essay?.suggestions && wr.essay.suggestions.length > 0) ? `
            <div style="font-style: italic; margin-bottom: 10px; font-size: 12pt; background: #f8fafc; border: 1px dashed #94a3b8; padding: 8px 12px; border-radius: 4px;">
              <b>Gợi ý dàn ý:</b>
              ${wr.essay.suggestions.map(function(s){ return `<div>• ${s}</div>`; }).join('')}
            </div>
          ` : ''}

          <div style="margin-top: 8px;">
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
          </div>
        `}

      </div>

      <!-- TAB 3: MA TRẬN ĐỀ TIẾNG VIỆT (TT 27) -->
      <div id="examTabContent_matrix" style="display: ${currentExamActiveTab === 'matrix' ? 'block' : 'none'}; background: #fff; padding: 1.5rem; border: 1px solid #cbd5e1; border-radius: 4px; font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.35; color: #000;">
        <div style="text-align: center; font-weight: bold; font-size: 14pt; text-transform: uppercase; margin-bottom: 4px;">
          MA TRẬN ĐỀ KIỂM TRA ĐỊNH KỲ MÔN TIẾNG VIỆT LỚP ${exam.grade}
        </div>
        <div style="text-align: center; font-size: 12.5pt; margin-bottom: 14px;">
          Bộ sách: Kết nối tri thức với cuộc sống • Năm học ${exam.schoolYear}
        </div>

        <div style="font-weight: bold; font-size: 13pt; margin: 10px 0 6px 0; color: #1e3a8a;">I. MA TRẬN NỘI DUNG VÀ MỨC ĐỘ NHẬN THỨC PHẦN ĐỌC (10 ĐIỂM)</div>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px; text-align: center;">
          <thead>
            <tr style="background: #f1f5f9; font-weight: bold;">
              <th rowspan="2" style="border: 1px solid #000; width: 35%; padding: 6px; text-align: left;">Mạch kiến thức, kĩ năng</th>
              <th colspan="3" style="border: 1px solid #000; padding: 6px;">Mức độ nhận thức (TT 27)</th>
              <th rowspan="2" style="border: 1px solid #000; width: 15%; padding: 6px;">Tổng điểm</th>
            </tr>
            <tr style="background: #f8fafc; font-weight: bold;">
              <th style="border: 1px solid #000; padding: 4px;">Mức 1</th>
              <th style="border: 1px solid #000; padding: 4px;">Mức 2</th>
              <th style="border: 1px solid #000; padding: 4px;">Mức 3</th>
            </tr>
          </thead>
          <tbody>
            ${(exam.matrix?.readingMatrix || []).map(function(r) {
              return `
                <tr>
                  <td style="border: 1px solid #000; padding: 6px; text-align: left; font-weight: 500;">${r.component}</td>
                  <td style="border: 1px solid #000; padding: 6px;">${r.m1 || '-'}</td>
                  <td style="border: 1px solid #000; padding: 6px;">${r.m2 || '-'}</td>
                  <td style="border: 1px solid #000; padding: 6px;">${r.m3 || '-'}</td>
                  <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">${r.total || '-'}đ</td>
                </tr>
              `;
            }).join('')}
            <tr style="font-weight: bold; background: #fafafa;">
              <td style="border: 1px solid #000; padding: 6px; text-align: left;">Tổng cộng Phần Đọc</td>
              <td style="border: 1px solid #000; padding: 6px;">4,0đ</td>
              <td style="border: 1px solid #000; padding: 6px;">4,0đ</td>
              <td style="border: 1px solid #000; padding: 6px;">2,0đ</td>
              <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">10,0đ</td>
            </tr>
          </tbody>
        </table>

        <div style="font-weight: bold; font-size: 13pt; margin: 14px 0 6px 0; color: #1e3a8a;">II. MA TRẬN NỘI DUNG VÀ MỨC ĐỘ NHẬN THỨC PHẦN VIẾT (10 ĐIỂM)</div>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px; text-align: center;">
          <thead>
            <tr style="background: #f1f5f9; font-weight: bold;">
              <th style="border: 1px solid #000; width: 45%; padding: 6px; text-align: left;">Nội dung kiểm tra</th>
              <th style="border: 1px solid #000; width: 30%; padding: 6px;">Mức độ đáp ứng</th>
              <th style="border: 1px solid #000; width: 25%; padding: 6px;">Điểm số</th>
            </tr>
          </thead>
          <tbody>
            ${(exam.matrix?.writingMatrix || []).map(function(w) {
              return `
                <tr>
                  <td style="border: 1px solid #000; padding: 6px; text-align: left; font-weight: 500;">${w.component}</td>
                  <td style="border: 1px solid #000; padding: 6px;">${w.level}</td>
                  <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">${w.score} điểm</td>
                </tr>
              `;
            }).join('')}
            <tr style="font-weight: bold; background: #fafafa;">
              <td style="border: 1px solid #000; padding: 6px; text-align: left;">Tổng cộng Phần Viết</td>
              <td style="border: 1px solid #000; padding: 6px;">Chuẩn năng lực TT 27</td>
              <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">10,0 điểm</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- TAB 4: HƯỚNG DẪN CHẤM & ĐÁP ÁN TIẾNG VIỆT -->
      <div id="examTabContent_rubric" style="display: ${currentExamActiveTab === 'rubric' ? 'block' : 'none'}; background: #fff; padding: 1.5rem; border: 1px solid #cbd5e1; border-radius: 4px; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.4; color: #000;">
        <div style="text-align: center; font-weight: bold; font-size: 14pt; text-transform: uppercase; margin-bottom: 4px;">
          HƯỚNG DẪN CHẤM VÀ ĐÁP ÁN MÔN TIẾNG VIỆT LỚP ${exam.grade}
        </div>
        <div style="text-align: center; font-size: 12.5pt; margin-bottom: 14px;">
          Chuẩn đánh giá học sinh Tiểu học theo Thông tư 27/2020/TT-BGDĐT
        </div>

        <!-- 1. HƯỚNG DẪN CHẤM ĐỌC THÀNH TIẾNG -->
        <div style="font-weight: bold; font-size: 13.5pt; margin: 10px 0 4px 0; color: #1e3a8a;">A. HƯỚNG DẪN CHẤM ĐỌC THÀNH TIẾNG (${oralScoreStr} ĐIỂM)</div>
        <p style="margin: 0 0 6px 0; font-size: 11.5pt; white-space: pre-line;">
          ${exam.teacherGuide?.oralGuide?.criteria || "- Đọc đúng, rõ ràng, phát âm chuẩn.\n- Trả lời đúng câu hỏi đọc hiểu được 1,0 điểm."}
        </p>

        <div style="font-weight: bold; margin: 8px 0 4px 0; color: #6b21a8;">
          DANH SÁCH CÂU HỎI VÀ GỢI Ý TRẢ LỜI DÀNH CHO GIÁO VIÊN:
        </div>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 14px;">
          <thead>
            <tr style="background: #f1f5f9; font-weight: bold;">
              <th style="border: 1px solid #000; width: 25%; padding: 6px; text-align: center;">Bài đọc</th>
              <th style="border: 1px solid #000; width: 35%; padding: 6px; text-align: center;">Câu hỏi giáo viên hỏi</th>
              <th style="border: 1px solid #000; width: 40%; padding: 6px; text-align: center;">Gợi ý câu trả lời chuẩn của học sinh</th>
            </tr>
          </thead>
          <tbody>
            ${(exam.teacherGuide?.oralGuide?.qaList || []).map(function(item, idx) {
              return `
                <tr>
                  <td style="border: 1px solid #000; padding: 6px; font-weight: bold; vertical-align: top;">
                    ${idx + 1}. ${item.lessonTitle}<br>
                    <span style="font-size: 10pt; font-weight: normal; color: #555;">${item.bookVolume || ''} ${item.page ? `(${item.page})` : ''}</span>
                  </td>
                  <td style="border: 1px solid #000; padding: 6px; vertical-align: top;">${item.question}</td>
                  <td style="border: 1px solid #000; padding: 6px; vertical-align: top; color: #15803d;"><b>${item.answer}</b></td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>

        <!-- 2. HƯỚNG DẪN CHẤM ĐỌC HIỂU -->
        <div style="font-weight: bold; font-size: 13.5pt; margin: 14px 0 4px 0; color: #1e3a8a;">B. ĐÁP ÁN ĐỌC HIỂU VÀ KIẾN THỨC TIẾNG VIỆT (${compScoreStr} ĐIỂM)</div>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
          <thead>
            <tr style="background: #f1f5f9; font-weight: bold;">
              <th style="border: 1px solid #000; width: 12%; padding: 6px; text-align: center;">Câu</th>
              <th style="border: 1px solid #000; width: 25%; padding: 6px; text-align: center;">Đáp án / Lời giải</th>
              <th style="border: 1px solid #000; width: 63%; padding: 6px; text-align: center;">Hướng dẫn chấm chi tiết</th>
            </tr>
          </thead>
          <tbody>
            ${(exam.teacherGuide?.comprehensionAnswers || []).map(function(ans) {
              return `
                <tr>
                  <td style="border: 1px solid #000; padding: 6px; font-weight: bold; text-align: center;">Câu ${ans.num}</td>
                  <td style="border: 1px solid #000; padding: 6px; font-weight: bold; color: #b91c1c; text-align: center; font-size: 12pt;">${ans.ans}</td>
                  <td style="border: 1px solid #000; padding: 6px; text-align: left; vertical-align: top;">${ans.explain}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>

        <!-- 3. HƯỚNG DẪN CHẤM PHẦN VIẾT -->
        <div style="font-weight: bold; font-size: 13.5pt; margin: 14px 0 4px 0; color: #1e3a8a;">C. HƯỚNG DẪN CHẤM PHẦN VIẾT (10 ĐIỂM)</div>
        ${grade <= 3 ? `
          <div style="font-weight: bold; margin-bottom: 4px;">1. Chính tả (${(wr.dictation?.score || 4.0).toFixed(1).replace('.', ',')} điểm):</div>
          <p style="margin: 0 0 8px 0; font-size: 11.5pt; white-space: pre-line;">
            ${exam.teacherGuide?.writingGuide?.dictationCriteria || "- Viết đúng mẫu chữ, độ đều nét, trình bày sạch: 1,0đ\n- Mỗi lỗi chính tả (âm đầu, vần, thanh, hoa): trừ 0,5đ"}
          </p>

          <div style="font-weight: bold; margin: 8px 0 4px 0;">2. Tập làm văn - Viết đoạn văn (${(wr.paragraphWriting?.score || 6.0).toFixed(1).replace('.', ',')} điểm):</div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 14px;">
            <thead>
              <tr style="background: #f1f5f9; font-weight: bold;">
                <th style="border: 1px solid #000; width: 30%; padding: 6px; text-align: center;">Tiêu chí đánh giá</th>
                <th style="border: 1px solid #000; width: 18%; padding: 6px; text-align: center;">Điểm</th>
                <th style="border: 1px solid #000; width: 52%; padding: 6px; text-align: center;">Yêu cầu cần đạt</th>
              </tr>
            </thead>
            <tbody>
              ${(wr.paragraphWriting?.rubric || []).map(function(rub) {
                return `
                  <tr>
                    <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">${rub.criteria}</td>
                    <td style="border: 1px solid #000; padding: 6px; text-align: center; font-weight: bold;">${rub.score}</td>
                    <td style="border: 1px solid #000; padding: 6px;">${rub.detail}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        ` : `
          <div style="font-weight: bold; margin-bottom: 6px;">Barem chấm điểm Bài văn hoàn chỉnh (10,0 điểm):</div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 14px;">
            <thead>
              <tr style="background: #f1f5f9; font-weight: bold;">
                <th style="border: 1px solid #000; width: 25%; padding: 6px; text-align: center;">Tiêu chí chấm</th>
                <th style="border: 1px solid #000; width: 15%; padding: 6px; text-align: center;">Điểm</th>
                <th style="border: 1px solid #000; width: 60%; padding: 6px; text-align: center;">Yêu cầu chi tiết</th>
              </tr>
            </thead>
            <tbody>
              ${(wr.essay?.rubric || []).map(function(rub) {
                return `
                  <tr>
                    <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">${rub.criteria}</td>
                    <td style="border: 1px solid #000; padding: 6px; text-align: center; font-weight: bold;">${rub.score}</td>
                    <td style="border: 1px solid #000; padding: 6px;">${rub.detail}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        `}
      </div>
    `;
    return;
  }

  // =========================================================================
  // GIAO DIỆN HIỂN THỊ 3 TABS CHO CÁC MÔN CÒN LẠI (TOÁN, KHOA HỌC, XÃ HỘI...)
  // =========================================================================
  var mcqScoreStr = exam.mcqTotalScore ? exam.mcqTotalScore.toString().replace('.', ',') : "7,0";
  var essayScoreStr = exam.essayTotalScore ? exam.essayTotalScore.toString().replace('.', ',') : "3,0";
  var m = exam.matrix || {};
  var s = m.summary || {};

  if (!["exam", "matrix", "answers"].includes(currentExamActiveTab)) {
    currentExamActiveTab = "exam";
  }

  container.innerHTML = `
    <!-- THANH CÔNG CỤ ĐIỀU HƯỚNG VÀ XUẤT BẢN -->
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.65rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.85rem;">
      
      <!-- 3 TABS CHUYỂN ĐỔI -->
      <div style="display: flex; gap: 0.35rem; background: #f1f5f9; padding: 0.25rem; border-radius: var(--radius-sm); align-items: center;">
        <button class="btn btn-sm ${currentExamActiveTab === 'exam' ? 'btn-primary' : 'btn-ghost'}" style="${currentExamActiveTab === 'exam' ? 'background: #7c3aed;' : ''}" onclick="switchExamTab('exam')">
          <i class="fa-solid fa-file-lines"></i> 1. Phiếu Đề Thi
        </button>
        <button class="btn btn-sm ${currentExamActiveTab === 'matrix' ? 'btn-primary' : 'btn-ghost'}" style="${currentExamActiveTab === 'matrix' ? 'background: #7c3aed;' : ''}" onclick="switchExamTab('matrix')">
          <i class="fa-solid fa-table-cells"></i> 2. Ma Trận Đề (TT 27)
        </button>
        <button class="btn btn-sm ${currentExamActiveTab === 'answers' ? 'btn-primary' : 'btn-ghost'}" style="${currentExamActiveTab === 'answers' ? 'background: #7c3aed;' : ''}" onclick="switchExamTab('answers')">
          <i class="fa-solid fa-square-check"></i> 3. Hướng Dẫn Chấm
        </button>
      </div>

      <!-- BADGE NGUỒN GỐC & NÚT THAO TÁC XUẤT FILE & IN -->
      <div style="display: flex; gap: 0.45rem; align-items: center;">
        ${sourceBadgeHtml}
        <button class="btn btn-sm btn-primary" style="background: #16a34a; border-color: #16a34a;" onclick="AIService.exportToWord(currentExamData)">
          <i class="fa-solid fa-file-word"></i> Xuất File Word (.doc)
        </button>
        <button class="btn btn-sm btn-outline" onclick="window.print()">
          <i class="fa-solid fa-print"></i> In Đề
        </button>
      </div>
    </div>

    <!-- NỘI DUNG TAB 1: PHIẾU ĐỀ THI HỌC SINH -->
    <div id="examTabContent_exam" class="exam-paper-sheet" style="display: ${currentExamActiveTab === 'exam' ? 'block' : 'none'}; background: #fff; padding: 1.5rem; border: 1px solid #cbd5e1; border-radius: 4px; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.4; color: #000;">
      
      <!-- HEADER 2 CỘT -->
      <table style="width: 100%; border: none; margin-bottom: 12px;">
        <tr>
          <td style="width: 48%; vertical-align: top;">
            <b>${exam.schoolName || "TRƯỜNG TIỂU HỌC ................................."}</b><br>
            Tên học sinh: ...................................................<br>
            Lớp: ${exam.grade}.....
          </td>
          <td style="width: 52%; vertical-align: top; text-align: right;">
            <i>Thứ….. ngày … tháng … năm 2026</i><br>
            <b style="font-size: 13.5pt; text-transform: uppercase;">ĐỀ KIỂM TRA HỌC KÌ I</b><br>
            <b>MÔN: ${exam.subjectName.toUpperCase()} - LỚP ${exam.grade}</b><br>
            <i>Thời gian làm bài: ${exam.duration}</i>
          </td>
        </tr>
      </table>

      <!-- KHUNG ĐÁNH GIÁ 3 Ô -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
        <tr>
          <td style="border: 1px solid #000; width: 25%; text-align: center; height: 75px; vertical-align: top; padding: 6px;">
            <b>Điểm</b>
          </td>
          <td style="border: 1px solid #000; width: 50%; text-align: center; vertical-align: top; padding: 6px;">
            <b>Nhận xét của giáo viên</b>
          </td>
          <td style="border: 1px solid #000; width: 25%; text-align: center; vertical-align: top; padding: 6px;">
            <b>Chữ kí của PHHS</b>
          </td>
        </tr>
      </table>

      <!-- PHẦN I: TRẮC NGHIỆM -->
      <div style="font-weight: bold; font-size: 13.5pt; margin: 12px 0 4px 0;">I. PHẦN TRẮC NGHIỆM (${mcqScoreStr} điểm)</div>
      <p style="margin: 0 0 10px 0; font-style: italic;">Khoanh vào chữ cái đặt trước câu trả lời đúng:</p>

      ${(exam.multipleChoice || []).map(function(q) {
        return `
          <div style="margin-bottom: 10px;" contenteditable="true">
            <b>Câu ${q.num}</b> (${q.score ? q.score.toString().replace('.', ',') : '0,5'} điểm - ${q.level || 'Mức 1'}): ${q.text}
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.35rem; padding-left: 1.25rem; margin-top: 4px;">
              ${(q.options || []).map(function(opt) { return `<div>${opt}</div>`; }).join('')}
            </div>
          </div>
        `;
      }).join('')}

      <!-- PHẦN II: TỰ LUẬN -->
      ${(exam.essaySection && exam.essaySection.length > 0) ? `
        <div style="font-weight: bold; font-size: 13.5pt; margin: 18px 0 6px 0;">II. PHẦN TỰ LUẬN (${essayScoreStr} điểm)</div>
        ${exam.essaySection.map(function(e) {
          return `
            <div style="margin-top: 10px; margin-bottom: 14px;" contenteditable="true">
              <b>${e.title || `Câu ${e.num} (${e.score ? e.score.toString().replace('.', ',') : ''} điểm):`}</b> ${e.text}
              <div style="margin-top: 6px;">
                <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
                <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
                <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
                <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
                <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
              </div>
            </div>
          `;
        }).join('')}
      ` : ''}
    </div>

    <!-- NỘI DUNG TAB 2: MA TRẬN ĐỀ THI THÔNG TƯ 27 -->
    <div id="examTabContent_matrix" style="display: ${currentExamActiveTab === 'matrix' ? 'block' : 'none'}; background: #fff; padding: 1.5rem; border: 1px solid #cbd5e1; border-radius: 4px; font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.35; color: #000;">
      
      <div style="text-align: center; font-weight: bold; font-size: 14pt; text-transform: uppercase; margin-bottom: 4px;">
        MA TRẬN ĐỀ THI HỌC KÌ I MÔN ${exam.subjectName.toUpperCase()} LỚP ${exam.grade} - KẾT NỐI TRI THỨC
      </div>
      <div style="text-align: center; font-size: 12.5pt; margin-bottom: 14px;">
        NĂM HỌC ${exam.schoolYear}
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; text-align: center;">
        <thead>
          <tr style="background: #f1f5f9; font-weight: bold;">
            <th rowspan="3" style="border: 1px solid #000; width: 32%; padding: 6px; text-align: left;">Chủ đề / Bài học</th>
            <th colspan="6" style="border: 1px solid #000; padding: 6px;">Mức độ nhận thức</th>
            <th colspan="2" rowspan="2" style="border: 1px solid #000; padding: 6px;">Tổng số câu</th>
            <th rowspan="3" style="border: 1px solid #000; width: 10%; padding: 6px;">Điểm số</th>
          </tr>
          <tr style="background: #f8fafc; font-weight: bold;">
            <th colspan="2" style="border: 1px solid #000; padding: 4px;">Mức 1<br>(Nhận biết)</th>
            <th colspan="2" style="border: 1px solid #000; padding: 4px;">Mức 2<br>(Kết nối)</th>
            <th colspan="2" style="border: 1px solid #000; padding: 4px;">Mức 3<br>(Vận dụng)</th>
          </tr>
          <tr style="background: #f8fafc; font-weight: bold;">
            <th style="border: 1px solid #000; padding: 4px;">TN</th>
            <th style="border: 1px solid #000; padding: 4px;">TL</th>
            <th style="border: 1px solid #000; padding: 4px;">TN</th>
            <th style="border: 1px solid #000; padding: 4px;">TL</th>
            <th style="border: 1px solid #000; padding: 4px;">TN</th>
            <th style="border: 1px solid #000; padding: 4px;">TL</th>
            <th style="border: 1px solid #000; padding: 4px;">TN</th>
            <th style="border: 1px solid #000; padding: 4px;">TL</th>
          </tr>
        </thead>
        <tbody>
          ${(m.topics || []).map(function(t) {
            return `
              <tr>
                <td style="border: 1px solid #000; padding: 6px; text-align: left; font-weight: 500;">${t.topic}</td>
                <td style="border: 1px solid #000; padding: 6px;">${t.m1_mcq || '-'}</td>
                <td style="border: 1px solid #000; padding: 6px;">${t.m1_essay || '-'}</td>
                <td style="border: 1px solid #000; padding: 6px;">${t.m2_mcq || '-'}</td>
                <td style="border: 1px solid #000; padding: 6px;">${t.m2_essay || '-'}</td>
                <td style="border: 1px solid #000; padding: 6px;">${t.m3_mcq || '-'}</td>
                <td style="border: 1px solid #000; padding: 6px;">${t.m3_essay || '-'}</td>
                <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">${t.total_mcq || 0}</td>
                <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">${t.total_essay || 0}</td>
                <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">${t.score ? t.score.toString().replace('.', ',') : '-'}</td>
              </tr>
            `;
          }).join('')}
          <tr style="font-weight: bold; background: #fafafa;">
            <td style="border: 1px solid #000; padding: 6px; text-align: left;">Tổng số câu TN / TL</td>
            <td style="border: 1px solid #000; padding: 6px;">${s.m1_total_mcq || 0}</td>
            <td style="border: 1px solid #000; padding: 6px;">${s.m1_total_essay || 0}</td>
            <td style="border: 1px solid #000; padding: 6px;">${s.m2_total_mcq || 0}</td>
            <td style="border: 1px solid #000; padding: 6px;">${s.m2_total_essay || 0}</td>
            <td style="border: 1px solid #000; padding: 6px;">${s.m3_total_mcq || 0}</td>
            <td style="border: 1px solid #000; padding: 6px;">${s.m3_total_essay || 0}</td>
            <td style="border: 1px solid #000; padding: 6px;">${s.total_mcq_count || 0}</td>
            <td style="border: 1px solid #000; padding: 6px;">${s.total_essay_count || 0}</td>
            <td style="border: 1px solid #000; padding: 6px;">${(s.total_mcq_count || 0) + (s.total_essay_count || 0)}</td>
          </tr>
          <tr style="font-weight: bold; background: #fafafa;">
            <td style="border: 1px solid #000; padding: 6px; text-align: left;">Điểm số</td>
            <td colspan="2" style="border: 1px solid #000; padding: 6px;">${s.m1_score ? s.m1_score.toString().replace('.', ',') : '-'}</td>
            <td colspan="2" style="border: 1px solid #000; padding: 6px;">${s.m2_score ? s.m2_score.toString().replace('.', ',') : '-'}</td>
            <td colspan="2" style="border: 1px solid #000; padding: 6px;">${s.m3_score ? s.m3_score.toString().replace('.', ',') : '-'}</td>
            <td style="border: 1px solid #000; padding: 6px;">${mcqScoreStr}</td>
            <td style="border: 1px solid #000; padding: 6px;">${essayScoreStr}</td>
            <td style="border: 1px solid #000; padding: 6px;">10,0</td>
          </tr>
          <tr style="font-weight: bold; background: #f1f5f9;">
            <td style="border: 1px solid #000; padding: 6px; text-align: left;">Tỉ lệ %</td>
            <td colspan="2" style="border: 1px solid #000; padding: 6px;">${s.m1_pct || 40}%</td>
            <td colspan="2" style="border: 1px solid #000; padding: 6px;">${s.m2_pct || 40}%</td>
            <td colspan="2" style="border: 1px solid #000; padding: 6px;">${s.m3_pct || 20}%</td>
            <td colspan="2" style="border: 1px solid #000; padding: 6px;">100%</td>
            <td style="border: 1px solid #000; padding: 6px;">100%</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- NỘI DUNG TAB 3: HƯỚNG DẪN CHẤM & ĐÁP ÁN -->
    <div id="examTabContent_answers" style="display: ${currentExamActiveTab === 'answers' ? 'block' : 'none'}; background: #fff; padding: 1.5rem; border: 1px solid #cbd5e1; border-radius: 4px; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.4; color: #000;">
      
      <div style="text-align: center; font-weight: bold; font-size: 14pt; text-transform: uppercase; margin-bottom: 4px;">
        HƯỚNG DẪN CHẤM VÀ ĐÁP ÁN MÔN ${exam.subjectName.toUpperCase()} LỚP ${exam.grade}
      </div>
      <div style="text-align: center; font-size: 12.5pt; margin-bottom: 14px;">
        Bộ sách: Kết nối tri thức với cuộc sống • Năm học ${exam.schoolYear}
      </div>

      <div style="font-weight: bold; font-size: 13.5pt; margin: 12px 0 6px 0;">I. PHẦN TRẮC NGHIỆM (${mcqScoreStr} điểm)</div>
      <p style="margin: 0 0 8px 0; font-style: italic;">Mỗi câu trả lời đúng được ${exam.multipleChoice?.[0]?.score ? exam.multipleChoice[0].score.toString().replace('.', ',') : '0,5'} điểm.</p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 18px; text-align: center;">
        <tr style="background: #f1f5f9; font-weight: bold;">
          <td style="border: 1px solid #000; padding: 6px; width: 15%;">Câu hỏi</td>
          ${(exam.multipleChoice || []).map(function(q) {
            return `<td style="border: 1px solid #000; padding: 6px;"><b>Câu ${q.num}</b></td>`;
          }).join('')}
        </tr>
        <tr style="font-weight: bold; font-size: 13.5pt; color: #b91c1c;">
          <td style="border: 1px solid #000; padding: 6px;">Đáp án</td>
          ${(exam.multipleChoice || []).map(function(q) {
            return `<td style="border: 1px solid #000; padding: 6px;">${q.ans || '-'}</td>`;
          }).join('')}
        </tr>
      </table>

      ${(exam.essaySection && exam.essaySection.length > 0) ? `
        <div style="font-weight: bold; font-size: 13.5pt; margin: 18px 0 8px 0;">II. PHẦN TỰ LUẬN (${essayScoreStr} điểm)</div>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background: #f1f5f9; font-weight: bold;">
              <th style="border: 1px solid #000; width: 15%; padding: 6px; text-align: center;">Câu</th>
              <th style="border: 1px solid #000; width: 65%; padding: 6px; text-align: center;">Nội dung đáp án & Các bước giải</th>
              <th style="border: 1px solid #000; width: 20%; padding: 6px; text-align: center;">Biểu điểm</th>
            </tr>
          </thead>
          <tbody>
            ${exam.essaySection.map(function(e) {
              return `
                <tr>
                  <td style="border: 1px solid #000; padding: 8px; text-align: center; vertical-align: top; font-weight: bold;">
                    Câu ${e.num}<br>(${e.score ? e.score.toString().replace('.', ',') : ''} đ)
                  </td>
                  <td style="border: 1px solid #000; padding: 8px; vertical-align: top; white-space: pre-line;">
                    ${e.solution || e.text}
                  </td>
                  <td style="border: 1px solid #000; padding: 8px; text-align: center; vertical-align: top;">
                    ${(e.rubric || []).map(function(r) {
                      return `<div style="margin-bottom: 4px;"><b>${r.score}</b></div>`;
                    }).join('') || `<b>${e.score ? e.score.toString().replace('.', ',') : ''} đ</b>`}
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      ` : ''}

    </div>
  `;
}

// Chuyển đổi tabs xem trước
function switchExamTab(tabName) {
  currentExamActiveTab = tabName;
  var elExam = document.getElementById("examTabContent_exam");
  var elMatrix = document.getElementById("examTabContent_matrix");
  var elAnswers = document.getElementById("examTabContent_answers");
  var elReading = document.getElementById("examTabContent_reading");
  var elWriting = document.getElementById("examTabContent_writing");
  var elRubric = document.getElementById("examTabContent_rubric");

  if (elExam) elExam.style.display = (tabName === "exam" ? "block" : "none");
  if (elMatrix) elMatrix.style.display = (tabName === "matrix" ? "block" : "none");
  if (elAnswers) elAnswers.style.display = (tabName === "answers" ? "block" : "none");
  if (elReading) elReading.style.display = (tabName === "reading" ? "block" : "none");
  if (elWriting) elWriting.style.display = (tabName === "writing" ? "block" : "none");
  if (elRubric) elRubric.style.display = (tabName === "rubric" ? "block" : "none");

  var container = document.getElementById("aiOutputContainer");
  if (container && currentExamData) {
    renderExamOutput(currentExamData, container);
  }
}

// Modal Cấu hình nhanh Gemini API Key
function openGeminiApiKeyModal() {
  var key = localStorage.getItem("tvth_gemini_api_key") || "";
  var modalHtml = `
    <div class="modal-overlay" id="geminiKeyModal">
      <div class="modal-content" style="max-width: 480px;">
        <div class="modal-header">
          <h3 style="display: flex; align-items: center; gap: 0.5rem; font-size: 1.1rem; color: #7c3aed;">
            <i class="fa-solid fa-wand-magic-sparkles"></i> Cấu hình Google Gemini AI
          </h3>
          <button class="modal-close-btn" onclick="document.getElementById('geminiKeyModal').remove()">&times;</button>
        </div>
        <div class="modal-body" style="padding: 1.25rem 0;">
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
            Nhập <strong>API Key Gemini</strong> miễn phí từ <a href="https://aistudio.google.com/app/apikey" target="_blank" style="color: #7c3aed; font-weight: 700;">Google AI Studio</a> để AI soạn đề không giới hạn, bám sát từng bài học SGK Kết nối tri thức.
          </p>
          <div class="form-group">
            <label style="font-weight: 700; font-size: 0.85rem;">Gemini API Key:</label>
            <input type="password" id="quickGeminiApiKeyInput" class="form-control" value="${key}" placeholder="AIzaSy...">
          </div>
          <div style="background: #f5f3ff; border: 1px solid #ddd6fe; border-radius: var(--radius-sm); padding: 0.75rem; font-size: 0.78rem; color: #6b21a8;">
            <i class="fa-solid fa-shield-halved"></i> Key được lưu trữ an toàn trong trình duyệt của bạn (Local Storage).
          </div>
        </div>
        <div class="modal-footer" style="display: flex; justify-content: flex-end; gap: 0.5rem;">
          <button class="btn btn-outline" onclick="document.getElementById('geminiKeyModal').remove()">Đóng</button>
          <button class="btn btn-primary" style="background: linear-gradient(135deg, #7c3aed, #a855f7);" onclick="saveQuickGeminiApiKey()">
            <i class="fa-solid fa-save"></i> Lưu API Key
          </button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function saveQuickGeminiApiKey() {
  var input = document.getElementById("quickGeminiApiKeyInput");
  if (!input) return;
  var key = (input.value || "").trim();
  localStorage.setItem("tvth_gemini_api_key", key);
  showToast(key ? "Đã lưu Gemini API Key thành công!" : "Đã xóa API Key", "success");
  var modal = document.getElementById("geminiKeyModal");
  if (modal) modal.remove();
  if (currentActiveTab === "aiexam") {
    switchMainTab("aiexam");
  }
}

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

  container.innerHTML = `
    <div class="section-header">
      <div>
        <h2 class="section-title">
          <i class="fa-solid fa-magnifying-glass"></i> 
          Kết Quả Tìm Kiếm: "${query}"
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

// Global Nav & Filter event listeners
function setupNavigationEvents() {
  document.querySelectorAll(".tree-menu .tree-item").forEach(function(item) {
    item.addEventListener("click", function(e) {
      e.preventDefault();
      var view = item.getAttribute("data-view");
      if (view) {
        navigateTo(view);
      }
    });
  });

  var mobileBtn = document.getElementById("mobile-toggle-btn");
  var sidebar = document.getElementById("app-sidebar");
  if (mobileBtn && sidebar) {
    mobileBtn.addEventListener("click", function() {
      sidebar.classList.toggle("show");
    });
  }
}

function setupSearchEvents() {
  var searchInput = document.getElementById("search-input");
  var clearBtn = document.getElementById("searchClearBtn");

  if (searchInput) {
    // Đảm bảo không bị dính giá trị autofill từ trình duyệt khi tải trang
    searchInput.value = "";
    if (clearBtn) clearBtn.style.display = "none";

    searchInput.addEventListener("input", function(e) {
      var val = e.target.value.trim();
      if (clearBtn) clearBtn.style.display = val ? "block" : "none";
      if (val.length >= 2) {
        navigateTo("search");
      }
    });

    searchInput.addEventListener("keydown", function(e) {
      if (e.key === "Enter") {
        navigateTo("search");
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", function() {
      if (searchInput) searchInput.value = "";
      clearBtn.style.display = "none";
      navigateTo("home");
    });
  }
}

function filterByGrade(grade) {
  selectedGrade = grade;
  updateTopGradeFilterUI();
  renderCurrentView();
}

function updateTopGradeFilterUI() {
  document.querySelectorAll(".grade-btn").forEach(function(chip) {
    if (chip.getAttribute("data-grade") === String(selectedGrade)) {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }
  });
}

// Đồng bộ live từ Google Drive
async function syncDriveData(showToastMsg) {
  if (typeof showToastMsg === "undefined") showToastMsg = true;
  var btn = document.getElementById("btn-refresh-data");
  if (btn) btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Đang quét...</span>';

  try {
    var res = await fetch(CONFIG.API_URL + "?action=preload_all&folderId=" + CONFIG.KHBD_FOLDER_ID);
    var json = await res.json();
    if (json && json.success) {
      if (showToastMsg) showToast("Đã đồng bộ dữ liệu mới nhất từ Google Drive!", "success");
    }
  } catch (err) {
    console.warn("Sync error:", err);
    if (showToastMsg) showToast("Đang sử dụng dữ liệu đã lưu sẵn!", "info");
  } finally {
    if (btn) btn.innerHTML = '<i class="fa-solid fa-rotate-right"></i> <span>Đồng bộ Drive</span>';
  }
}

// Export functions to window
// Window bindings an toàn (chống ReferenceError)
if (typeof window !== "undefined") {
  window.navigateTo = typeof navigateTo !== "undefined" ? navigateTo : null;
  window.handleFileViewer = typeof handleFileViewer !== "undefined" ? handleFileViewer : null;
  window.handleFileDownload = typeof handleFileDownload !== "undefined" ? handleFileDownload : null;
  window.toggleFilePermissionPrompt = typeof toggleFilePermissionPrompt !== "undefined" ? toggleFilePermissionPrompt : null;
  window.filterByGrade = typeof filterByGrade !== "undefined" ? filterByGrade : null;
  window.selectWeekFilter = typeof selectWeekFilter !== "undefined" ? selectWeekFilter : null;
  window.selectSubjectFilter = typeof selectSubjectFilter !== "undefined" ? selectSubjectFilter : null;
  window.toggleSidebarMenu = typeof toggleSidebarMenu !== "undefined" ? toggleSidebarMenu : null;
  window.selectGradeAndNavigateTo = typeof selectGradeAndNavigateTo !== "undefined" ? selectGradeAndNavigateTo : null;
  window.toggleGradeTree = typeof toggleGradeTree !== "undefined" ? toggleGradeTree : null;
  window.navigateToSubject = typeof navigateToSubject !== "undefined" ? navigateToSubject : null;
  window.syncDriveData = typeof syncDriveData !== "undefined" ? syncDriveData : null;
  window.addNewPinCode = typeof addNewPinCode !== "undefined" ? addNewPinCode : null;
  window.copyPinShareMessage = typeof copyPinShareMessage !== "undefined" ? copyPinShareMessage : null;
  window.saveGeminiApiKey = typeof saveGeminiApiKey !== "undefined" ? saveGeminiApiKey : null;

  // AI Exam Generator Window Bindings
  window.renderAiExamView = typeof renderAiExamView !== "undefined" ? renderAiExamView : null;
  window.onExamGradeChange = typeof onExamGradeChange !== "undefined" ? onExamGradeChange : null;
  window.onExamScopePresetChange = typeof onExamScopePresetChange !== "undefined" ? onExamScopePresetChange : null;
  window.onExamScoreRatioChange = typeof onExamScoreRatioChange !== "undefined" ? onExamScoreRatioChange : null;
  window.setExamScoreRatio = typeof setExamScoreRatio !== "undefined" ? setExamScoreRatio : null;
  window.updateCognitiveTotal = typeof updateCognitiveTotal !== "undefined" ? updateCognitiveTotal : null;
  window.setCognitivePreset = typeof setCognitivePreset !== "undefined" ? setCognitivePreset : null;
  window.triggerAiGenerate = typeof triggerAiGenerate !== "undefined" ? triggerAiGenerate : null;
  window.switchExamTab = typeof switchExamTab !== "undefined" ? switchExamTab : null;
  window.openGeminiApiKeyModal = typeof openGeminiApiKeyModal !== "undefined" ? openGeminiApiKeyModal : null;
  window.saveQuickGeminiApiKey = typeof saveQuickGeminiApiKey !== "undefined" ? saveQuickGeminiApiKey : null;

  // AI Integration Window Bindings
  window.renderAiIntegrationView = typeof renderAiIntegrationView !== "undefined" ? renderAiIntegrationView : null;
  window.onIntegrationGradeChange = typeof onIntegrationGradeChange !== "undefined" ? onIntegrationGradeChange : null;
  window.onIntegrationSubjectChange = typeof onIntegrationSubjectChange !== "undefined" ? onIntegrationSubjectChange : null;
  window.onIntegrationDurationChange = typeof onIntegrationDurationChange !== "undefined" ? onIntegrationDurationChange : null;
  window.onIntegrationStartWeekChange = typeof onIntegrationStartWeekChange !== "undefined" ? onIntegrationStartWeekChange : null;
  window.onIntegrationEndWeekChange = typeof onIntegrationEndWeekChange !== "undefined" ? onIntegrationEndWeekChange : null;
  window.setIntegrationQuickRange = typeof setIntegrationQuickRange !== "undefined" ? setIntegrationQuickRange : null;
  window.setIntegrationQuickDuration = typeof setIntegrationQuickDuration !== "undefined" ? setIntegrationQuickDuration : null;
  window.setIntegrationInputMethod = typeof setIntegrationInputMethod !== "undefined" ? setIntegrationInputMethod : null;
  window.handleIntegrationFileInput = typeof handleIntegrationFileInput !== "undefined" ? handleIntegrationFileInput : null;
  window.removeUploadedIntegrationFile = typeof removeUploadedIntegrationFile !== "undefined" ? removeUploadedIntegrationFile : null;
  window.clearAllUploadedIntegrationDocs = typeof clearAllUploadedIntegrationDocs !== "undefined" ? clearAllUploadedIntegrationDocs : null;
  window.setIntegrationRoleAndMode = typeof setIntegrationRoleAndMode !== "undefined" ? setIntegrationRoleAndMode : null;
  window.toggleDisabilitySupport = typeof toggleDisabilitySupport !== "undefined" ? toggleDisabilitySupport : null;
  window.setDisabilityCognitiveRate = typeof setDisabilityCognitiveRate !== "undefined" ? setDisabilityCognitiveRate : null;
  window.setDisabilityType = typeof setDisabilityType !== "undefined" ? setDisabilityType : null;
  window.setDisabilityNotes = typeof setDisabilityNotes !== "undefined" ? setDisabilityNotes : null;
  window.getSampleDisabilityText = typeof getSampleDisabilityText !== "undefined" ? getSampleDisabilityText : null;
  window.getSampleLessonName = typeof getSampleLessonName !== "undefined" ? getSampleLessonName : null;
  window.setCustomDisabilityText = typeof setCustomDisabilityText !== "undefined" ? setCustomDisabilityText : null;
  window.resetDisabilityToAuto = typeof resetDisabilityToAuto !== "undefined" ? resetDisabilityToAuto : null;
  window.generateAiSampleDisabilityYccd = typeof generateAiSampleDisabilityYccd !== "undefined" ? generateAiSampleDisabilityYccd : null;
  window.applyQuickChatPrompt = typeof applyQuickChatPrompt !== "undefined" ? applyQuickChatPrompt : null;
  window.clearIntegrationPasteText = typeof clearIntegrationPasteText !== "undefined" ? clearIntegrationPasteText : null;
  window.onIntegrationPasteTextInput = typeof onIntegrationPasteTextInput !== "undefined" ? onIntegrationPasteTextInput : null;
  window.triggerAnalyzeIntegrationPlan = typeof triggerAnalyzeIntegrationPlan !== "undefined" ? triggerAnalyzeIntegrationPlan : null;
  window.onPlanCellEdit = typeof onPlanCellEdit !== "undefined" ? onPlanCellEdit : null;
  window.onPlanActivityEdit = typeof onPlanActivityEdit !== "undefined" ? onPlanActivityEdit : null;
  window.togglePlanLessonDetail = typeof togglePlanLessonDetail !== "undefined" ? togglePlanLessonDetail : null;
  window.toggleExpandAllPlanDetails = typeof toggleExpandAllPlanDetails !== "undefined" ? toggleExpandAllPlanDetails : null;
  window.triggerSendIntegrationFeedback = typeof triggerSendIntegrationFeedback !== "undefined" ? triggerSendIntegrationFeedback : null;
  window.toggleIntegrationLessonSelect = typeof toggleIntegrationLessonSelect !== "undefined" ? toggleIntegrationLessonSelect : null;
  window.toggleSelectAllIntegrationLessons = typeof toggleSelectAllIntegrationLessons !== "undefined" ? toggleSelectAllIntegrationLessons : null;
  window.triggerApplyAndPreviewIntegration = typeof triggerApplyAndPreviewIntegration !== "undefined" ? triggerApplyAndPreviewIntegration : null;
  window.switchIntegrationPreviewLesson = typeof switchIntegrationPreviewLesson !== "undefined" ? switchIntegrationPreviewLesson : null;
  window.triggerExportIntegrationWord = typeof triggerExportIntegrationWord !== "undefined" ? triggerExportIntegrationWord : null;
  window.resetIntegrationToPlanStep = typeof resetIntegrationToPlanStep !== "undefined" ? resetIntegrationToPlanStep : null;
  window.resetIntegrationToSetup = typeof resetIntegrationToSetup !== "undefined" ? resetIntegrationToSetup : null;
  window.triggerPreviewOriginalKhbd = typeof triggerPreviewOriginalKhbd !== "undefined" ? triggerPreviewOriginalKhbd : null;
  window.triggerDirectFastExport = typeof triggerDirectFastExport !== "undefined" ? triggerDirectFastExport : null;
  window.printIntegratedLessonSheet = typeof printIntegratedLessonSheet !== "undefined" ? printIntegratedLessonSheet : null;
  window.setStep2ViewMode = typeof setStep2ViewMode !== "undefined" ? setStep2ViewMode : null;
  window.switchStep2PreviewLesson = typeof switchStep2PreviewLesson !== "undefined" ? switchStep2PreviewLesson : null;
  window.switchStep2TimetablePreviewWeek = typeof switchStep2TimetablePreviewWeek !== "undefined" ? switchStep2TimetablePreviewWeek : null;
  window.switchStep2TimetablePreviewLesson = typeof switchStep2TimetablePreviewLesson !== "undefined" ? switchStep2TimetablePreviewLesson : null;
  window.toggleStep2InlineEditCurrentLesson = typeof toggleStep2InlineEditCurrentLesson !== "undefined" ? toggleStep2InlineEditCurrentLesson : null;
  window.saveAndRefreshStep2LessonEdit = typeof saveAndRefreshStep2LessonEdit !== "undefined" ? saveAndRefreshStep2LessonEdit : null;
  window.triggerExportPlanSummaryWord = typeof triggerExportPlanSummaryWord !== "undefined" ? triggerExportPlanSummaryWord : null;
  window.setIntegrationTimetableRole = typeof setIntegrationTimetableRole !== "undefined" ? setIntegrationTimetableRole : null;
  window.onGvbmSubjectChange = typeof onGvbmSubjectChange !== "undefined" ? onGvbmSubjectChange : null;
  window.toggleGvbmMultiSubject = typeof toggleGvbmMultiSubject !== "undefined" ? toggleGvbmMultiSubject : null;
  window.onGvbmFieldChange = typeof onGvbmFieldChange !== "undefined" ? onGvbmFieldChange : null;
  window.openGvbmScheduleModal = typeof openGvbmScheduleModal !== "undefined" ? openGvbmScheduleModal : null;
  window.closeGvbmScheduleModal = typeof closeGvbmScheduleModal !== "undefined" ? closeGvbmScheduleModal : null;
  window.saveGvbmScheduleFromModal = typeof saveGvbmScheduleFromModal !== "undefined" ? saveGvbmScheduleFromModal : null;
  window.resetGvbmScheduleToDefault = typeof resetGvbmScheduleToDefault !== "undefined" ? resetGvbmScheduleToDefault : null;
  window.loadSampleGvbmMultiSchedule = typeof loadSampleGvbmMultiSchedule !== "undefined" ? loadSampleGvbmMultiSchedule : null;
  window.toggleGvbmAssignedSubject = typeof toggleGvbmAssignedSubject !== "undefined" ? toggleGvbmAssignedSubject : null;
  window.fillModalWithMultiSample = typeof fillModalWithMultiSample !== "undefined" ? fillModalWithMultiSample : null;
  window.fillModalWithSingleSample = typeof fillModalWithSingleSample !== "undefined" ? fillModalWithSingleSample : null;
  window.clearGvbmScheduleInModal = typeof clearGvbmScheduleInModal !== "undefined" ? clearGvbmScheduleInModal : null;
  window.fillSampleGvbmScheduleInModal = typeof fillSampleGvbmScheduleInModal !== "undefined" ? fillSampleGvbmScheduleInModal : null;
  window.handleGvbmScheduleFileUpload = typeof handleGvbmScheduleFileUpload !== "undefined" ? handleGvbmScheduleFileUpload : null;
  window.onModalGvbmMultiToggle = typeof onModalGvbmMultiToggle !== "undefined" ? onModalGvbmMultiToggle : null;
  window.updateModalGvbmSlotCount = typeof updateModalGvbmSlotCount !== "undefined" ? updateModalGvbmSlotCount : null;
  window.renderIntegrationGvbmFinalPreviewHtml = typeof renderIntegrationGvbmFinalPreviewHtml !== "undefined" ? renderIntegrationGvbmFinalPreviewHtml : null;
  window.downloadTimetableTemplate = typeof downloadTimetableTemplate !== "undefined" ? downloadTimetableTemplate : null;
}

/* ==========================================================================
   TRỢ LÝ AI TÍCH HỢP GIÁO ÁN TỰ ĐỘNG (CHUẨN CÔNG VĂN 2345/BGDĐT-GDTH)
   Cơ chế: Tải tài liệu -> AI Nghiên cứu & Lập Kế hoạch -> Góp ý sửa chữa -> Chèn vào KHBD
   ========================================================================== */

function getIntegrationSubjectsForGrade(grade) {
  var g = parseInt(grade) || 5;
  var subjs = [
    { key: 'toan', name: 'Toán', icon: 'fa-calculator' },
    { key: 'tieng_viet', name: 'Tiếng Việt', icon: 'fa-book' },
  ];
  if (g <= 3) {
    subjs.push({ key: 'tnxh', name: 'Tự nhiên và Xã hội', icon: 'fa-tree' });
  } else {
    subjs.push({ key: 'khoa_hoc', name: 'Khoa học', icon: 'fa-flask' });
    subjs.push({ key: 'lich_su_dia_ly', name: 'Lịch sử và Địa lí', icon: 'fa-landmark' });
  }
  subjs.push({ key: 'dao_duc', name: 'Đạo đức', icon: 'fa-heart' });
  subjs.push({ key: 'hdtn', name: 'Hoạt động trải nghiệm', icon: 'fa-compass' });
  if (g >= 3) {
    subjs.push({ key: 'cong_nghe', name: 'Công nghệ', icon: 'fa-microchip' });
  }
  subjs.push({ key: 'gdtc', name: 'Giáo dục thể chất', icon: 'fa-person-running' });
  subjs.push({ key: 'am_nhac', name: 'Âm nhạc', icon: 'fa-music' });
  return subjs;
}

function renderAiIntegrationView(container) {
  if (!integrationState._storageInitialized) {
    integrationState._storageInitialized = true;
    setTimeout(initSavedIntegrationDocs, 10);
  }

  var curGrade = integrationState.grade || 5;
  var subjects = getIntegrationSubjectsForGrade(curGrade);
  var curSubj = integrationState.subjectKey || 'toan';
  if (!subjects.some(function(s) { return s.key === curSubj; })) {
    curSubj = subjects[0].key;
    integrationState.subjectKey = curSubj;
  }

  var isTimetableMode = (integrationState.exportMode === 'timetable');
  var isGvbm = isTimetableMode && (integrationState.timetableRole === 'gvbm' || integrationState.timetableRole === 'gvbm_multi' || integrationState.timetableRole === 'gvbm_single');
  var assignments = integrationState.gvbmAssignments || [];
  var totalAssignedPeriods = 0;
  assignments.forEach(function(a){ totalAssignedPeriods += (parseInt(a.periodsPerWeek) || 1); });

  var sWeek = integrationState.startWeek || 1;
  var eWeek = integrationState.endWeek || sWeek;
  var countWeeks = eWeek - sWeek + 1;
  var step = integrationState.activeStep || 1;
  var ds = integrationState.disabilitySupport || {
    enabled: false,
    cognitiveRate: 50,
    disabilityType: 'tri_tue',
    disabilityTypeName: 'Khuyết tật trí tuệ (Tiếp thu chậm, ghi nhớ ngắn hạn)',
    notes: ''
  };
  var ap = integrationState.approvalConfig || {
    enabled: false,
    leaderRole: 'Tổ trưởng',
    leaderName: '',
    adminRole: 'Hiệu trưởng',
    adminName: ''
  };

  var SHOW_EXTRA_INTEGRATION_DOCS = false; // Tạm ẩn chức năng nạp tài liệu tích hợp chuyên đề theo yêu cầu để hoàn thiện sau

  container.innerHTML = `
    ${SHOW_EXTRA_INTEGRATION_DOCS ? `
    <!-- STEPPER TIẾN TRÌNH 3 BƯỚC -->
    <div class="stepper-header">
      <div class="step-item ${step >= 1 ? (step === 1 ? 'active' : 'completed') : ''}">
        <div class="step-number">${step > 1 ? '<i class="fa-solid fa-check"></i>' : '1'}</div>
        <div>
          <div>Bước 1: Thiết lập & Tải tài liệu</div>
          <div style="font-size: 0.75rem; font-weight: normal; color: var(--text-muted);">
            ${isTimetableMode ? (isGvbm ? 'Phân công Giảng dạy Chuyên môn Đa Khối' : 'Chọn Khối, TKB & Tùy chọn Tích hợp') : 'Chọn Khối, Môn & Tùy chọn Tích hợp'}
          </div>
        </div>
      </div>
      <div class="step-line ${step >= 2 ? 'active' : ''}"></div>
      <div class="step-item ${step >= 2 ? (step === 2 ? 'active' : 'completed') : ''}">
        <div class="step-number">${step > 2 ? '<i class="fa-solid fa-check"></i>' : '2'}</div>
        <div>
          <div>Bước 2: AI Lập kế hoạch chi tiết</div>
          <div style="font-size: 0.75rem; font-weight: normal; color: var(--text-muted);">Duyệt & Góp ý AI sửa đổi</div>
        </div>
      </div>
      <div class="step-line ${step >= 3 ? 'active' : ''}"></div>
      <div class="step-item ${step >= 3 ? 'active completed' : ''}">
        <div class="step-number">3</div>
        <div>
          <div>Bước 3: Chèn vào KHBD & Xuất Word</div>
          <div style="font-size: 0.75rem; font-weight: normal; color: var(--text-muted);">
            ${isTimetableMode ? (isGvbm ? 'Tải file Word bộ môn từng tuần theo phân công' : 'Tải file Word từng tuần theo TKB') : 'Tải file Word chuẩn CV 2345'}
          </div>
        </div>
      </div>
    </div>
    ` : ''}

    <div class="ai-layout-container">
      
      <!-- CỘT ĐIỀU KHIỂN BÊN TRÁI -->
      <div class="ai-ctrl-box" style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
        
        <!-- LỰA CHỌN ĐỐI TƯỢNG VÀ HÌNH THỨC XUẤT KHBD -->
        <div style="margin-bottom: 1.15rem; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: var(--radius-sm); padding: 0.65rem;">
          <div style="font-size: 0.76rem; font-weight: 800; color: #1e293b; text-transform: uppercase; margin-bottom: 0.5rem; display: flex; align-items: center; justify-content: space-between;">
            <span><i class="fa-solid fa-users-gear" style="color: #db2777;"></i> ĐỐI TƯỢNG & HÌNH THỨC XUẤT KHBD:</span>
            <span style="color: #16a34a; font-size: 0.72rem;"><i class="fa-solid fa-circle-check"></i> CV 2345</span>
          </div>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.45rem; margin-bottom: 0.45rem;">
            <button type="button" class="btn btn-sm ${isTimetableMode && !isGvbm ? 'btn-primary' : 'btn-outline'}" 
                    style="${isTimetableMode && !isGvbm ? 'background: #1e40af; border-color: #1e40af; color: #fff; font-weight: 800; box-shadow: 0 2px 6px rgba(30,64,175,0.3); font-size: 0.76rem; padding: 0.45rem 0.3rem;' : 'background: #fff; color: #334155; font-weight: 600; border-color: #cbd5e1; font-size: 0.76rem; padding: 0.45rem 0.3rem;'}" 
                    onclick="setIntegrationRoleAndMode('timetable', 'gvcn')" title="Xuất KHBD theo Thời khóa biểu của lớp (GVCN dạy 1 lớp, ghép đa môn)">
              <i class="fa-solid fa-chalkboard-user"></i> GVCN (Dạy 1 Lớp)
              <div style="font-size: 0.63rem; font-weight: normal; opacity: 0.95; margin-top: 2px;">Theo Lớp • Ghép Đa Môn</div>
            </button>
            <button type="button" class="btn btn-sm ${isTimetableMode && isGvbm ? 'btn-primary' : 'btn-outline'}" 
                    style="${isTimetableMode && isGvbm ? 'background: #0284c7; border-color: #0284c7; color: #fff; font-weight: 800; box-shadow: 0 2px 6px rgba(2,132,199,0.3); font-size: 0.76rem; padding: 0.45rem 0.3rem;' : 'background: #fff; color: #334155; font-weight: 600; border-color: #cbd5e1; font-size: 0.76rem; padding: 0.45rem 0.3rem;'}" 
                    onclick="setIntegrationRoleAndMode('timetable', 'gvbm')" title="Xuất KHBD theo Lịch dạy GV Bộ Môn (1 môn nhiều khối HOẶC nhiều khối nhiều môn)">
              <i class="fa-solid fa-user-tie"></i> GV Bộ Môn (Đa Khối)
              <div style="font-size: 0.63rem; font-weight: normal; opacity: 0.95; margin-top: 2px;">1 Môn Nhiều Khối • Đa Môn</div>
            </button>
          </div>

          <button type="button" class="btn btn-sm ${!isTimetableMode ? 'btn-primary' : 'btn-outline'}" 
                  style="width: 100%; ${!isTimetableMode ? 'background: #db2777; border-color: #db2777; color: #fff; font-weight: 800; box-shadow: 0 2px 6px rgba(219,39,119,0.3); font-size: 0.76rem;' : 'background: #fff; color: #475569; font-weight: 600; border-color: #cbd5e1; font-size: 0.76rem;'}" 
                  onclick="setIntegrationRoleAndMode('subject')">
            <i class="fa-solid fa-book-open"></i> Soạn & Xuất Riêng Theo Từng Môn Học
          </button>
        </div>

        ${isGvbm ? `
          <!-- 1. BẢNG PHÂN CÔNG GIẢNG DẠY GV BỘ MÔN (ĐA KHỐI / ĐA MÔN) -->
          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: var(--radius-sm); padding: 0.75rem; margin-bottom: 0.85rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
              <span style="font-size: 0.8rem; font-weight: 800; color: #1e293b;">
                <i class="fa-solid fa-table-list" style="color: #0284c7;"></i> 1. Phân Công Chuyên Môn / Giảng Dạy:
              </span>
              <span id="gvbmTotalPeriodsBadge" style="font-size: 0.72rem; color: #16a34a; font-weight: 700; background: #f0fdf4; padding: 2px 6px; border-radius: 4px; border: 1px solid #bbf7d0;">
                ${totalAssignedPeriods} tiết/tuần (${assignments.length} môn)
              </span>
            </div>

            <div style="font-size: 0.72rem; color: #64748b; margin-bottom: 0.55rem; line-height: 1.35;">
              <i class="fa-solid fa-circle-check" style="color: #16a34a;"></i> Mỗi môn dạy nhiều lớp trong khối sẽ xuất <strong>1 KHBD chuẩn</strong> (kèm danh sách lớp), không bị trùng lặp.
            </div>

            <!-- BẢNG CÁC HÀNG PHÂN CÔNG -->
            <div style="overflow-x: auto; margin-bottom: 0.6rem;">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.75rem;">
                <thead>
                  <tr style="background: #e2e8f0; color: #334155; font-weight: 700;">
                    <th style="padding: 4px; border: 1px solid #cbd5e1; width: 28px; text-align: center;">STT</th>
                    <th style="padding: 4px; border: 1px solid #cbd5e1; width: 80px; text-align: center;">Khối</th>
                    <th style="padding: 4px; border: 1px solid #cbd5e1; text-align: left;">Môn học</th>
                    <th style="padding: 4px; border: 1px solid #cbd5e1; text-align: left;">Lớp phụ trách</th>
                    <th style="padding: 4px; border: 1px solid #cbd5e1; width: 45px; text-align: center;">Tiết/T</th>
                    <th style="padding: 4px; border: 1px solid #cbd5e1; width: 32px; text-align: center;">Xóa</th>
                  </tr>
                </thead>
                <tbody id="gvbmAssignmentsTableBody">
                  ${assignments.map(function(item, idx) {
                    var availSubjs = getAvailableSubjectsForGrade(item.grade);
                    return `
                      <tr>
                        <td style="padding: 3px; border: 1px solid #cbd5e1; text-align: center; font-weight: bold; background: #f1f5f9;">
                          ${idx + 1}
                        </td>
                        <td style="padding: 3px; border: 1px solid #cbd5e1;">
                          <select class="form-select" style="font-size: 0.73rem; padding: 2px 4px; font-weight: bold; height: auto;" onchange="updateGvbmAssignmentRow('${item.id}', 'grade', this.value)">
                            <option value="1" ${item.grade === 1 ? 'selected' : ''}>Khối 1</option>
                            <option value="2" ${item.grade === 2 ? 'selected' : ''}>Khối 2</option>
                            <option value="3" ${item.grade === 3 ? 'selected' : ''}>Khối 3</option>
                            <option value="4" ${item.grade === 4 ? 'selected' : ''}>Khối 4</option>
                            <option value="5" ${item.grade === 5 ? 'selected' : ''}>Khối 5</option>
                          </select>
                        </td>
                        <td style="padding: 3px; border: 1px solid #cbd5e1;">
                          <select class="form-select" style="font-size: 0.73rem; padding: 2px 4px; font-weight: bold; height: auto;" onchange="updateGvbmAssignmentRow('${item.id}', 'subjectKey', this.value)">
                            ${availSubjs.map(function(s) {
                              return `<option value="${s.key}" ${s.key === item.subjectKey ? 'selected' : ''}>${s.name}</option>`;
                            }).join('')}
                          </select>
                        </td>
                        <td style="padding: 3px; border: 1px solid #cbd5e1;">
                          <input type="text" class="form-control" style="font-size: 0.73rem; padding: 2px 6px; font-weight: 600;" value="${item.classes || ''}" placeholder="VD: 4A, 4B, 4C" onchange="updateGvbmAssignmentRow('${item.id}', 'classes', this.value)">
                        </td>
                        <td style="padding: 3px; border: 1px solid #cbd5e1; text-align: center;">
                          <input type="number" min="1" max="30" class="form-control" style="font-size: 0.73rem; padding: 2px 2px; text-align: center; font-weight: bold;" value="${item.periodsPerWeek || 1}" onchange="updateGvbmAssignmentRow('${item.id}', 'periodsPerWeek', this.value)">
                        </td>
                        <td style="padding: 3px; border: 1px solid #cbd5e1; text-align: center;">
                          <button type="button" style="background: none; border: none; color: #ef4444; cursor: pointer; padding: 2px 4px;" onclick="removeGvbmAssignmentRow('${item.id}')" title="Xóa hàng này">
                            <i class="fa-solid fa-trash-can"></i>
                          </button>
                        </td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>

            <!-- THANH THAO TÁC THÊM HÀNG & MẪU NHANH -->
            <div style="display: flex; gap: 0.35rem; align-items: center; flex-wrap: wrap; margin-top: 0.35rem; padding-top: 0.35rem; border-top: 1px dashed #cbd5e1;">
              <button type="button" class="btn btn-sm btn-primary" style="font-size: 0.74rem; background: #0284c7; border-color: #0284c7; padding: 3px 8px;" onclick="addGvbmAssignmentRow()">
                <i class="fa-solid fa-plus"></i> Thêm Hàng Mới
              </button>
              <div style="display: flex; gap: 0.25rem; margin-left: auto; flex-wrap: wrap; align-items: center;">
                <span style="font-size: 0.68rem; color: #64748b; font-weight: 600;">Mẫu nhanh:</span>
                <button type="button" class="btn btn-sm btn-outline" style="font-size: 0.68rem; padding: 2px 6px; font-weight: 700; color: #0284c7; border-color: #7dd3fc; background: #f0f9ff;" onclick="loadSampleGvbmAssignments('multi')" title="Mẫu dạy Nhiều khối & Nhiều môn (Âm nhạc + Mĩ thuật + Công nghệ + GDTC qua Khối 1-5)">
                  <i class="fa-solid fa-layer-group"></i> Nhiều Khối Nhiều Môn
                </button>
                <button type="button" class="btn btn-sm btn-outline" style="font-size: 0.68rem; padding: 2px 6px;" onclick="loadSampleGvbmAssignments('music')" title="Mẫu dạy 1 môn chuyên Âm nhạc xuyên suốt Khối 1 - 5">
                  1 Môn: Âm Nhạc (1-5)
                </button>
                <button type="button" class="btn btn-sm btn-outline" style="font-size: 0.68rem; padding: 2px 6px;" onclick="loadSampleGvbmAssignments('pe')" title="Mẫu dạy 1 môn chuyên GDTC xuyên suốt Khối 1 - 5">
                  1 Môn: GDTC (1-5)
                </button>
                <button type="button" class="btn btn-sm btn-outline" style="font-size: 0.68rem; padding: 2px 6px;" onclick="loadSampleGvbmAssignments('tech')" title="Mẫu dạy Tin - Công nghệ Khối 3 - 5">
                  Tin - CN (3-5)
                </button>
              </div>
            </div>
          </div>

          <!-- 2. THÔNG TIN GIÁO VIÊN BỘ MÔN (IN TRÊN BÌA KHBD) -->
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 0.75rem; margin-bottom: 0.85rem;">
            <div style="font-size: 0.78rem; font-weight: 800; color: #1e293b; margin-bottom: 0.45rem; display: flex; align-items: center; justify-content: space-between;">
              <span><i class="fa-solid fa-user-pen" style="color: #0284c7;"></i> Thông tin Giáo viên & Năm học:</span>
              <span style="font-size: 0.7rem; color: #64748b; font-weight: normal;">(In trên bìa KHBD)</span>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.45rem; margin-bottom: 0.45rem;">
              <div>
                <label style="font-size: 0.72rem; color: #475569; font-weight: 700; display: block; margin-bottom: 2px;">Giáo viên:</label>
                <input type="text" id="gvbmTeacherNameInput" class="form-control" style="font-size: 0.78rem; padding: 0.35rem 0.5rem;" value="${integrationState.gvbmConfig.teacherName || ''}" placeholder="Họ và tên GV bộ môn" oninput="onGvbmFieldChange('teacherName', this.value)">
              </div>
              <div>
                <label style="font-size: 0.72rem; color: #475569; font-weight: 700; display: block; margin-bottom: 2px;">Tổ chuyên môn:</label>
                <input type="text" id="gvbmDepartmentInput" class="form-control" style="font-size: 0.78rem; padding: 0.35rem 0.5rem;" value="${integrationState.gvbmConfig.department || 'Tổ Chuyên biệt / Bộ môn'}" placeholder="Tổ Bộ môn..." oninput="onGvbmFieldChange('department', this.value)">
              </div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.45rem;">
              <div>
                <label style="font-size: 0.72rem; color: #475569; font-weight: 700; display: block; margin-bottom: 2px;">Năm học:</label>
                <input type="text" id="gvbmSchoolYearInput" class="form-control" style="font-size: 0.78rem; padding: 0.35rem 0.5rem;" value="${integrationState.gvbmConfig.schoolYear || '2026 - 2027'}" placeholder="2026 - 2027" oninput="onGvbmFieldChange('schoolYear', this.value)">
              </div>
              <div>
                <label style="font-size: 0.72rem; color: #475569; font-weight: 700; display: block; margin-bottom: 2px;">Trường Tiểu học:</label>
                <input type="text" id="gvbmSchoolNameInput" class="form-control" style="font-size: 0.78rem; padding: 0.35rem 0.5rem;" value="${integrationState.gvbmConfig.schoolName || ''}" placeholder="Trường Tiểu học..." oninput="onGvbmFieldChange('schoolName', this.value)">
              </div>
            </div>
          </div>
        ` : `
          <!-- GIAO DIỆN THEO MÔN HOẶC THEO LỚP CHỦ NHIỆM (GVCN) -->
          <!-- 1. KHỐI LỚP & (MÔN HỌC HOẶC TKB) -->
          <div style="display: grid; grid-template-columns: ${isTimetableMode ? '1fr' : '1fr 1fr'}; gap: 0.65rem; margin-bottom: 0.75rem;">
            <div class="form-group" style="margin-bottom: 0;">
              <label for="integGradeSelect" style="font-weight: 700; font-size: 0.82rem; color: #334155;">1. Khối Lớp:</label>
              <select id="integGradeSelect" class="form-select" onchange="onIntegrationGradeChange(this.value)">
                <option value="1" ${curGrade === 1 ? 'selected' : ''}>Khối 1 (Lớp 1)</option>
                <option value="2" ${curGrade === 2 ? 'selected' : ''}>Khối 2 (Lớp 2)</option>
                <option value="3" ${curGrade === 3 ? 'selected' : ''}>Khối 3 (Lớp 3)</option>
                <option value="4" ${curGrade === 4 ? 'selected' : ''}>Khối 4 (Lớp 4)</option>
                <option value="5" ${curGrade === 5 ? 'selected' : ''}>Khối 5 (Lớp 5)</option>
              </select>
            </div>

            ${!isTimetableMode ? `
              <div class="form-group" style="margin-bottom: 0;">
                <label for="integSubjectSelect" style="font-weight: 700; font-size: 0.82rem; color: #334155;">2. Môn Học:</label>
                <select id="integSubjectSelect" class="form-select" onchange="onIntegrationSubjectChange(this.value)">
                  ${subjects.map(function(s) {
                    return `<option value="${s.key}" ${s.key === curSubj ? 'selected' : ''}>${s.name}</option>`;
                  }).join('')}
                </select>
              </div>
            ` : ''}
          </div>

          <!-- NẾU CHẾ ĐỘ THỜI KHÓA BIỂU: KHU VỰC TÙY CHỈNH & TẢI TKB -->
          ${isTimetableMode ? `
            <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: var(--radius-sm); padding: 0.75rem; margin-bottom: 0.85rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem; flex-wrap: wrap; gap: 0.4rem;">
                <span style="font-size: 0.8rem; font-weight: 800; color: #1e293b;">
                  <i class="fa-solid fa-table-cells" style="color: #db2777;"></i> 2. Thời Khóa Biểu Khối ${curGrade}:
                </span>
                <button type="button" class="btn btn-sm" style="font-size: 0.74rem; padding: 3px 9px; background: #f0fdf4; color: #16a34a; border: 1px solid #86efac; font-weight: 700; border-radius: 4px; display: inline-flex; align-items: center; gap: 5px; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.background='#dcfce7'; this.style.borderColor='#4ade80';" onmouseout="this.style.background='#f0fdf4'; this.style.borderColor='#86efac';" onclick="downloadTimetableTemplate(${curGrade})" title="Tải tệp Excel mẫu TKB (có nút xổ xuống chọn môn học) để nhập và tải lên">
                  <i class="fa-solid fa-file-arrow-down" style="color: #16a34a;"></i> Tải mẫu TKB (.xlsx)
                </button>
              </div>

              ${integrationState.customTimetableName ? `
                <div style="font-size: 0.73rem; color: #15803d; background: #dcfce7; border: 1px solid #bbf7d0; border-radius: 4px; padding: 3px 8px; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 5px;">
                  <i class="fa-solid fa-circle-check" style="color: #16a34a;"></i>
                  <span>Đang áp dụng: <strong>${integrationState.customTimetableName}</strong></span>
                </div>
              ` : ''}

              <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
                <button type="button" class="btn btn-sm btn-outline" style="font-size: 0.75rem; flex: 1; white-space: nowrap;" onclick="openTimetableEditorModal()">
                  <i class="fa-solid fa-pen-to-square"></i> Xem & Sửa TKB
                </button>
                <button type="button" class="btn btn-sm btn-outline" style="font-size: 0.75rem; flex: 1; white-space: nowrap;" onclick="document.getElementById('integTkbFileInput').click()">
                  <i class="fa-solid fa-file-arrow-up" style="color: #10b981;"></i> Tải lên TKB (.xlsx, .docx, .csv)
                </button>
                ${integrationState.customTimetable ? `
                  <button type="button" class="btn btn-sm btn-outline" style="font-size: 0.75rem; color: #dc2626; border-color: #fca5a5;" onclick="resetTimetableToDefault()" title="Trở về TKB chuẩn Bộ">
                    <i class="fa-solid fa-rotate-left"></i> Đặt lại
                  </button>
                ` : ''}
              </div>
              <input type="file" id="integTkbFileInput" accept=".xlsx,.xls,.docx,.doc,.csv,.txt,.pdf,.json" style="display: none;" onchange="handleTimetableFileUpload(this)">
            </div>
          ` : ''}

          <!-- THÔNG TIN GIÁO VIÊN & NĂM HỌC HIỂN THỊ TRÊN KHBD -->
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 0.75rem; margin-bottom: 0.85rem;">
            <div style="font-size: 0.78rem; font-weight: 800; color: #1e293b; margin-bottom: 0.45rem; display: flex; align-items: center; justify-content: space-between;">
              <span><i class="fa-solid fa-user-pen" style="color: #db2777;"></i> Thông tin Giáo viên & Năm học:</span>
              <span style="font-size: 0.7rem; color: #64748b; font-weight: normal;">(Tự động điền từ TKB)</span>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.45rem; margin-bottom: 0.45rem;">
              <div>
                <label style="font-size: 0.72rem; color: #475569; font-weight: 700; display: block; margin-bottom: 2px;">Giáo viên:</label>
                <input type="text" id="integTeacherNameInput" class="form-control" style="font-size: 0.78rem; padding: 0.35rem 0.5rem;" value="${integrationState.teacherName || ''}" placeholder="Họ và tên GV" oninput="onIntegrationTeacherNameChange(this.value)">
              </div>
              <div>
                <label style="font-size: 0.72rem; color: #475569; font-weight: 700; display: block; margin-bottom: 2px;">Năm học:</label>
                <input type="text" id="integSchoolYearInput" class="form-control" style="font-size: 0.78rem; padding: 0.35rem 0.5rem;" value="${integrationState.schoolYear || '2026 - 2027'}" placeholder="2026 - 2027" oninput="onIntegrationSchoolYearChange(this.value)">
              </div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.45rem;">
              <div>
                <label style="font-size: 0.72rem; color: #475569; font-weight: 700; display: block; margin-bottom: 2px;">Lớp / Khối:</label>
                <input type="text" id="integClassNameInput" class="form-control" style="font-size: 0.78rem; padding: 0.35rem 0.5rem;" value="${integrationState.className || ''}" placeholder="VD: Lớp 2^1 hoặc 5A" oninput="onIntegrationClassNameChange(this.value)">
              </div>
              <div>
                <label style="font-size: 0.72rem; color: #475569; font-weight: 700; display: block; margin-bottom: 2px;">Trường Tiểu học:</label>
                <input type="text" id="integSchoolNameInput" class="form-control" style="font-size: 0.78rem; padding: 0.35rem 0.5rem;" value="${integrationState.schoolName || ''}" placeholder="Trường Tiểu học..." oninput="onIntegrationSchoolNameChange(this.value)">
              </div>
            </div>
          </div>
        `}

        <!-- 3. PHẠM VI TUẦN HỌC (TỐI ĐA 4 TUẦN / LẦN ĐỂ XỬ LÝ NHANH) -->
        <div class="form-group" style="margin-bottom: 0.85rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
            <label style="font-weight: 700; font-size: 0.82rem; color: #334155; margin: 0;">
              ${isGvbm ? '3. Phạm vi Tuần giảng dạy:' : '3. Phạm vi Tuần học:'} <span style="color: #db2777; font-size: 0.72rem; font-weight: 600;">(Tối đa 4 tuần/lần)</span>
            </label>
            <span id="integWeekRangeBadge" style="font-size: 0.74rem; font-weight: 800; color: #db2777; background: #fdf2f8; padding: 0.15rem 0.5rem; border-radius: 9999px; border: 1px solid #fbcfe8;">
              Tuần ${sWeek} → Tuần ${eWeek} (${countWeeks} tuần)
            </span>
          </div>

          <!-- HAI Ô CHỌN TỪ TUẦN ... ĐẾN TUẦN ... -->
          <div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 0.45rem; align-items: center; margin-bottom: 0.5rem;">
            <div>
              <label for="integStartWeekSelect" style="font-size: 0.72rem; color: #64748b; font-weight: 700; margin-bottom: 2px; display: block;">Từ tuần:</label>
              <select id="integStartWeekSelect" class="form-select" style="font-size: 0.82rem; font-weight: 700;" onchange="onIntegrationStartWeekChange(this.value)">
                ${Array.from({length: 35}, function(_, i) { return i + 1; }).map(function(w) {
                  return `<option value="${w}" ${w === sWeek ? 'selected' : ''}>Tuần ${w}</option>`;
                }).join('')}
              </select>
            </div>

            <div style="text-align: center; color: #db2777; font-weight: 800; padding-top: 14px; font-size: 0.9rem;">
              <i class="fa-solid fa-arrow-right"></i>
            </div>

            <div>
              <label for="integEndWeekSelect" style="font-size: 0.72rem; color: #64748b; font-weight: 700; margin-bottom: 2px; display: block;">Đến tuần (Tối đa +4T):</label>
              <select id="integEndWeekSelect" class="form-select" style="font-size: 0.82rem; font-weight: 700;" onchange="onIntegrationEndWeekChange(this.value)">
                ${(function() {
                  var maxEnd = Math.min(35, sWeek + 3);
                  var curEnd = Math.min(maxEnd, Math.max(sWeek, eWeek));
                  var opts = [];
                  for (var w = sWeek; w <= maxEnd; w++) {
                    opts.push(`<option value="${w}" ${w === curEnd ? 'selected' : ''}>Tuần ${w} (+${w - sWeek + 1}T)</option>`);
                  }
                  return opts.join('');
                })()}
              </select>
            </div>
          </div>

          <!-- CÁC NÚT BẤM NHANH (1 TUẦN, 2 TUẦN, 3 TUẦN, 4 TUẦN) -->
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.35rem;">
            <button type="button" class="btn btn-sm btn-outline btn-quick-dur" data-dur="1" style="font-size: 0.72rem; padding: 0.25rem 0.2rem; ${(countWeeks === 1) ? 'background: #fdf2f8; border-color: #db2777; color: #db2777; font-weight: 800;' : ''}" onclick="setIntegrationQuickDuration(1)" title="1 Tuần">1 Tuần</button>
            <button type="button" class="btn btn-sm btn-outline btn-quick-dur" data-dur="2" style="font-size: 0.72rem; padding: 0.25rem 0.2rem; ${(countWeeks === 2) ? 'background: #fdf2f8; border-color: #db2777; color: #db2777; font-weight: 800;' : ''}" onclick="setIntegrationQuickDuration(2)" title="2 Tuần">2 Tuần</button>
            <button type="button" class="btn btn-sm btn-outline btn-quick-dur" data-dur="3" style="font-size: 0.72rem; padding: 0.25rem 0.2rem; ${(countWeeks === 3) ? 'background: #fdf2f8; border-color: #db2777; color: #db2777; font-weight: 800;' : ''}" onclick="setIntegrationQuickDuration(3)" title="3 Tuần">3 Tuần</button>
            <button type="button" class="btn btn-sm btn-outline btn-quick-dur" data-dur="4" style="font-size: 0.72rem; padding: 0.25rem 0.2rem; ${(countWeeks === 4) ? 'background: #fdf2f8; border-color: #db2777; color: #db2777; font-weight: 800;' : ''}" onclick="setIntegrationQuickDuration(4)" title="Tối đa 4 Tuần">4 Tuần (Max)</button>
          </div>
        </div>

        <!-- 4. GIÁO DỤC HÒA NHẬP (HỌC SINH KHUYẾT TẬT) - TÁCH BIỆT ĐỘC LẬP -->
        <div style="background: ${ds.enabled ? '#faf5ff' : '#f8fafc'}; border: 1.5px solid ${ds.enabled ? '#c084fc' : '#e2e8f0'}; border-radius: var(--radius-sm); padding: 0.75rem; margin-bottom: 0.85rem; transition: all 0.25s ease;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <label style="font-weight: 800; font-size: 0.82rem; color: ${ds.enabled ? '#6b21a8' : '#334155'}; margin: 0; display: flex; align-items: center; gap: 0.35rem; cursor: pointer;" onclick="toggleDisabilitySupport()">
              <span style="font-size: 1rem;">♿</span> 4. Giáo Dục Hòa Nhập (HS Khuyết Tật)
            </label>
            <!-- TOGGLE SWITCH BẬT / TẮT -->
            <div style="display: flex; align-items: center; gap: 0.4rem;">
              <span style="font-size: 0.7rem; font-weight: 800; color: ${ds.enabled ? '#7e22ce' : '#94a3b8'};">
                ${ds.enabled ? 'ĐANG BẬT' : 'TẮT'}
              </span>
              <label class="switch-toggle" style="position: relative; display: inline-block; width: 38px; height: 20px; margin: 0; cursor: pointer;">
                <input type="checkbox" id="disabilityToggleInput" ${ds.enabled ? 'checked' : ''} onchange="toggleDisabilitySupport(this.checked)" style="opacity: 0; width: 0; height: 0;">
                <span class="switch-slider" style="position: absolute; cursor: pointer; inset: 0; background-color: ${ds.enabled ? '#9333ea' : '#cbd5e1'}; transition: .3s; border-radius: 20px;">
                  <span style="position: absolute; content: ''; height: 14px; width: 14px; left: ${ds.enabled ? '20px' : '3px'}; bottom: 3px; background-color: white; transition: .3s; border-radius: 50%; display: block; box-shadow: 0 1px 3px rgba(0,0,0,0.3);"></span>
                </span>
              </label>
            </div>
          </div>

          ${!ds.enabled ? `
            <div style="font-size: 0.71rem; color: #94a3b8; margin-top: 0.35rem; line-height: 1.35;">
              Bật để tự động thêm mục tiêu dạy học phân hóa cho học sinh khuyết tật vào cuối phần <strong>I. Yêu cầu cần đạt</strong> (không bắt buộc có tài liệu tích hợp).
            </div>
          ` : `
            <div style="margin-top: 0.65rem; padding-top: 0.55rem; border-top: 1px dashed #d8b4fe;">
              
              <!-- CHỌN TỈ LỆ NHẬN THỨC -->
              <div style="margin-bottom: 0.55rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.3rem;">
                  <span style="font-size: 0.74rem; font-weight: 700; color: #581c87;">
                    Tỉ lệ nhận thức / tiếp thu:
                  </span>
                  <span id="disabilityRateBadge" style="font-size: 0.76rem; font-weight: 800; background: #7e22ce; color: #fff; padding: 1px 7px; border-radius: 999px;">
                    ${ds.cognitiveRate || 50}%
                  </span>
                </div>

                <!-- CÁC NÚT PRESET BẤM NHANH -->
                <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.25rem; margin-bottom: 0.4rem;">
                  ${[30, 40, 50, 60, 70].map(function(r) {
                    var isActive = (ds.cognitiveRate === r);
                    return `
                      <button type="button" class="btn btn-sm disability-preset-btn ${isActive ? 'btn-primary' : 'btn-outline'}" 
                              data-rate="${r}"
                              style="font-size: 0.72rem; padding: 0.25rem 0.15rem; font-weight: 800; ${isActive ? 'background: #7030a0; border-color: #7030a0; color: #fff;' : 'background: #fff; border-color: #cbd5e1; color: #475569;'}" 
                              onclick="setDisabilityCognitiveRate(${r})">
                        ${r}%
                      </button>
                    `;
                  }).join('')}
                </div>

                <!-- THANH TRƯỢT SLIDER -->
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <span style="font-size: 0.68rem; color: #6b21a8; font-weight: 600;">10%</span>
                  <input type="range" id="disabilityRateRange" min="10" max="90" step="5" value="${ds.cognitiveRate || 50}" 
                         style="flex: 1; accent-color: #7e22ce; cursor: pointer; height: 5px;" 
                         oninput="setDisabilityCognitiveRate(this.value)">
                  <span style="font-size: 0.68rem; color: #6b21a8; font-weight: 600;">90%</span>
                </div>
              </div>

              <!-- CHỌN DẠNG KHUYẾT TẬT -->
              <div style="margin-bottom: 0.55rem;">
                <label style="font-size: 0.73rem; font-weight: 700; color: #581c87; margin-bottom: 0.25rem; display: block;">
                  Dạng khuyết tật / Hỗ trợ:
                </label>
                <select id="disabilityTypeSelect" class="form-select" style="font-size: 0.76rem; padding: 0.35rem 0.5rem; font-weight: 600; border-color: #d8b4fe;" onchange="setDisabilityType(this.value, this.options[this.selectedIndex].text)">
                  <option value="tri_tue" ${ds.disabilityType === 'tri_tue' ? 'selected' : ''}>Khuyết tật trí tuệ (Tiếp thu chậm, ghi nhớ ngắn hạn)</option>
                  <option value="van_dong" ${ds.disabilityType === 'van_dong' ? 'selected' : ''}>Khuyết tật vận động (Hạn chế viết, thao tác)</option>
                  <option value="nghe_noi" ${ds.disabilityType === 'nghe_noi' ? 'selected' : ''}>Khuyết tật nghe - nói (Giao tiếp hạn chế)</option>
                  <option value="nhin" ${ds.disabilityType === 'nhin' ? 'selected' : ''}>Khuyết tật nhìn (Thị lực kém, cần cỡ chữ lớn)</option>
                  <option value="tu_ki" ${ds.disabilityType === 'tu_ki' ? 'selected' : ''}>Tự kỉ / Tăng động giảm chú ý (ADHD)</option>
                  <option value="khac" ${ds.disabilityType === 'khac' ? 'selected' : ''}>Khuyết tật khác / Học sinh hòa nhập chung</option>
                </select>
              </div>

              <!-- GHI CHÚ RIÊNG CỦA GIÁO VIÊN -->
              <div style="margin-bottom: 0.55rem;">
                <label style="font-size: 0.73rem; font-weight: 700; color: #581c87; margin-bottom: 0.25rem; display: block;">
                  Đặc điểm riêng của học sinh (Tùy chọn):
                </label>
                <input type="text" id="disabilityNotesInput" class="form-control" style="font-size: 0.76rem; padding: 0.35rem 0.5rem; border-color: #d8b4fe;" 
                       placeholder="VD: Em Nam cần bạn kèm cặp, hỗ trợ đồ dùng trực quan..." 
                       value="${ds.notes || ''}" 
                       oninput="setDisabilityNotes(this.value)">
              </div>

              <!-- LIVE PREVIEW CÂU YCCD SẼ XUẤT -->
              <div>
                <div style="font-size: 0.7rem; font-weight: 800; color: #6b21a8; margin-bottom: 0.25rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.3rem;">
                  <span><i class="fa-solid fa-wand-magic-sparkles" style="color: #7e22ce;"></i> AI soạn YCCĐ bám sát bài học & học sinh:</span>
                  <span id="disabilitySampleLessonName" style="font-size: 0.68rem; font-weight: 700; color: #6b21a8; background: #faf5ff; border: 1px solid #d8b4fe; padding: 0.1rem 0.4rem; border-radius: 4px; max-width: 260px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${getSampleLessonName()}">
                    ${getSampleLessonName()}
                  </span>
                </div>
                <div style="position: relative;">
                  <textarea id="disabilitySampleBox" 
                            class="form-control" 
                            rows="3" 
                            style="font-size: 0.76rem; line-height: 1.45; color: #7030a0; font-weight: 600; background: #ffffff; border: 1px solid #d8b4fe; border-radius: 6px; padding: 0.45rem 0.6rem; resize: vertical;"
                            oninput="setCustomDisabilityText(this.value)"
                            title="Thầy cô có thể trực tiếp chỉnh sửa câu này theo ý muốn">${getSampleDisabilityText()}</textarea>
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.35rem; flex-wrap: wrap; gap: 0.35rem;">
                    <span style="font-size: 0.68rem; color: #64748b; font-style: italic;">
                      💡 Thầy cô có thể chỉnh sửa trực tiếp hoặc yêu cầu Gemini AI phân tích YCCĐ gốc để soạn câu riêng biệt.
                    </span>
                    <div style="display: flex; align-items: center; gap: 0.35rem;">
                      <button type="button" id="btnAiSampleDisability" class="btn btn-sm" style="font-size: 0.68rem; padding: 0.18rem 0.55rem; color: #fff; background: linear-gradient(135deg, #7c3aed, #a855f7); border: none; font-weight: 700; border-radius: 4px; box-shadow: 0 1px 3px rgba(124,58,237,0.25);" onclick="generateAiSampleDisabilityYccd()" title="Gửi YCCĐ gốc của bài này cho Gemini AI để soạn riêng câu bám sát">
                        <i class="fa-solid fa-wand-magic-sparkles"></i> Gemini AI Soạn bám sát bài
                      </button>
                      <button type="button" class="btn btn-sm btn-outline" style="font-size: 0.68rem; padding: 0.18rem 0.45rem; color: #6b21a8; border-color: #d8b4fe; background: #fff;" onclick="resetDisabilityToAuto()" title="Khôi phục lại câu mẫu tự động">
                        <i class="fa-solid fa-rotate-left"></i> Khôi phục
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          `}
        </div>

        <!-- 5. KÈM KHUNG DUYỆT GIÁO ÁN (TỔ TRƯỞNG & BAN GIÁM HIỆU) -->
        <div style="background: ${ap.enabled ? '#f0fdfa' : '#f8fafc'}; border: 1.5px solid ${ap.enabled ? '#5eead4' : '#e2e8f0'}; border-radius: var(--radius-sm); padding: 0.75rem; margin-bottom: 0.85rem; transition: all 0.25s ease;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <label style="font-weight: 800; font-size: 0.82rem; color: ${ap.enabled ? '#0f766e' : '#334155'}; margin: 0; display: flex; align-items: center; gap: 0.35rem; cursor: pointer;" onclick="toggleApprovalSupport()">
              <i class="fa-solid fa-stamp" style="color: ${ap.enabled ? '#0d9488' : '#64748b'}; font-size: 0.95rem;"></i> 5. Kèm Khung Duyệt Giáo Án
            </label>
            <!-- TOGGLE SWITCH BẬT / TẮT -->
            <div style="display: flex; align-items: center; gap: 0.4rem;">
              <span style="font-size: 0.7rem; font-weight: 800; color: ${ap.enabled ? '#0f766e' : '#94a3b8'};">
                ${ap.enabled ? 'ĐANG BẬT' : 'TẮT'}
              </span>
              <label class="switch-toggle" style="position: relative; display: inline-block; width: 38px; height: 20px; margin: 0; cursor: pointer;">
                <input type="checkbox" id="approvalToggleInput" ${ap.enabled ? 'checked' : ''} onchange="toggleApprovalSupport(this.checked)" style="opacity: 0; width: 0; height: 0;">
                <span class="switch-slider" style="position: absolute; cursor: pointer; inset: 0; background-color: ${ap.enabled ? '#0d9488' : '#cbd5e1'}; transition: .3s; border-radius: 20px;">
                  <span style="position: absolute; content: ''; height: 14px; width: 14px; left: ${ap.enabled ? '20px' : '3px'}; bottom: 3px; background-color: white; transition: .3s; border-radius: 50%; display: block; box-shadow: 0 1px 3px rgba(0,0,0,0.3);"></span>
                </span>
              </label>
            </div>
          </div>

          ${!ap.enabled ? `
            <div style="font-size: 0.71rem; color: #94a3b8; margin-top: 0.35rem; line-height: 1.35;">
              Bật để chèn thêm trang ký duyệt (Tổ trưởng & Ban Giám hiệu duyệt) vào cuối file Word theo đúng biểu mẫu trường.
            </div>
          ` : `
            <div style="margin-top: 0.65rem; padding-top: 0.55rem; border-top: 1px dashed #99f6e4;">
              
              <!-- PHẦN 1: TỔ CHUYÊN MÔN -->
              <div style="margin-bottom: 0.55rem; background: #ffffff; border: 1px solid #ccfbf1; border-radius: 6px; padding: 0.5rem;">
                <div style="font-size: 0.73rem; font-weight: 800; color: #0f766e; margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.3rem;">
                  <i class="fa-solid fa-user-check"></i> TỔ CHUYÊN MÔN:
                </div>
                <div style="display: grid; grid-template-columns: 105px 1fr; gap: 0.4rem; align-items: center;">
                  <div>
                    <label style="font-size: 0.68rem; color: #64748b; font-weight: 700; display: block; margin-bottom: 2px;">Chức vụ:</label>
                    <select id="approvalLeaderRoleSelect" class="form-select" style="font-size: 0.76rem; padding: 0.35rem 0.45rem; font-weight: 700; border-color: #99f6e4;" onchange="setApprovalField('leaderRole', this.value)">
                      <option value="Tổ trưởng" ${ap.leaderRole === 'Tổ trưởng' ? 'selected' : ''}>Tổ trưởng</option>
                      <option value="P.Tổ trưởng" ${ap.leaderRole === 'P.Tổ trưởng' ? 'selected' : ''}>P.Tổ trưởng</option>
                    </select>
                  </div>
                  <div>
                    <label style="font-size: 0.68rem; color: #64748b; font-weight: 700; display: block; margin-bottom: 2px;">Tên Tổ trưởng / P.Tổ trưởng:</label>
                    <input type="text" id="approvalLeaderNameInput" class="form-control" style="font-size: 0.76rem; padding: 0.35rem 0.5rem; border-color: #99f6e4; font-weight: 600;" 
                           placeholder="VD: Nguyễn Văn A" 
                           value="${ap.leaderName || ''}" 
                           oninput="setApprovalField('leaderName', this.value)">
                  </div>
                </div>
              </div>

              <!-- PHẦN 2: BAN GIÁM HIỆU -->
              <div style="margin-bottom: 0.55rem; background: #ffffff; border: 1px solid #ccfbf1; border-radius: 6px; padding: 0.5rem;">
                <div style="font-size: 0.73rem; font-weight: 800; color: #0f766e; margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.3rem;">
                  <i class="fa-solid fa-award"></i> BAN GIÁM HIỆU:
                </div>
                <div style="display: grid; grid-template-columns: 105px 1fr; gap: 0.4rem; align-items: center;">
                  <div>
                    <label style="font-size: 0.68rem; color: #64748b; font-weight: 700; display: block; margin-bottom: 2px;">Chức vụ:</label>
                    <select id="approvalAdminRoleSelect" class="form-select" style="font-size: 0.76rem; padding: 0.35rem 0.45rem; font-weight: 700; border-color: #99f6e4;" onchange="setApprovalField('adminRole', this.value)">
                      <option value="Hiệu trưởng" ${ap.adminRole === 'Hiệu trưởng' ? 'selected' : ''}>Hiệu trưởng</option>
                      <option value="P.Hiệu trưởng" ${ap.adminRole === 'P.Hiệu trưởng' ? 'selected' : ''}>P.Hiệu trưởng</option>
                    </select>
                  </div>
                  <div>
                    <label style="font-size: 0.68rem; color: #64748b; font-weight: 700; display: block; margin-bottom: 2px;">Tên BGH (HT / P.Hiệu trưởng):</label>
                    <input type="text" id="approvalAdminNameInput" class="form-control" style="font-size: 0.76rem; padding: 0.35rem 0.5rem; border-color: #99f6e4; font-weight: 600;" 
                           placeholder="VD: Trần Thị B" 
                           value="${ap.adminName || ''}" 
                           oninput="setApprovalField('adminName', this.value)">
                  </div>
                </div>
              </div>

              <!-- GHI CHÚ TỰ ĐỘNG LƯU & PREVIEW -->
              <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.68rem; color: #0f766e; background: #ccfbf1; padding: 0.3rem 0.55rem; border-radius: 4px;">
                <span><i class="fa-solid fa-floppy-disk"></i> Tự động ghi nhớ cho các tuần sau</span>
                <span id="approvalPreviewBadge" style="font-weight: 700; max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                  ${(ap.leaderRole || 'Tổ trưởng')}: ${ap.leaderName || '...'} • ${(ap.adminRole || 'Hiệu trưởng')}: ${ap.adminName || '...'}
                </span>
              </div>

            </div>
          `}
        </div>

        <!-- 6. KHU VỰC TẢI LÊN TÀI LIỆU TÍCH HỢP (TẠM ẨN ĐỂ HOÀN THIỆN SAU) -->
        ${SHOW_EXTRA_INTEGRATION_DOCS ? `
        <div class="form-group" style="margin-bottom: 0.85rem; border-top: 1px dashed #cbd5e1; padding-top: 0.85rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
            <label style="font-weight: 700; font-size: 0.82rem; color: #334155; margin: 0;">
              ${isTimetableMode ? '5. Tích Hợp Thêm Chuyên Đề Mới Vào TKB' : '5. Tài Liệu Tích Hợp Chuyên Đề'} <span style="font-weight: normal; color: #64748b;">(Tùy chọn)</span>:
            </label>
            ${integrationState.uploadedDocText ? `
              <span style="font-size: 0.72rem; color: #16a34a; font-weight: 700;">
                <i class="fa-solid fa-check"></i> Đã nạp tài liệu
              </span>
            ` : `
              <span style="font-size: 0.72rem; color: #64748b; font-style: italic;">
                (Không có thì xuất KHBD gốc)
              </span>
            `}
          </div>

          <!-- TABS LỰA CHỌN PHƯƠNG THỨC -->
          <div style="display: flex; gap: 0.35rem; margin-bottom: 0.5rem;">
            <button type="button" class="upload-tab-btn ${integrationState.inputMethod === 'upload' ? 'active' : ''}" onclick="setIntegrationInputMethod('upload')">
              <i class="fa-solid fa-cloud-arrow-up"></i> Tải Tệp (.docx, .pdf, .txt)
            </button>
            <button type="button" class="upload-tab-btn ${integrationState.inputMethod === 'paste' ? 'active' : ''}" onclick="setIntegrationInputMethod('paste')">
              <i class="fa-solid fa-comments"></i> 💬 Chat Lệnh / Dán Văn Bản
            </button>
          </div>

          <!-- TAB 1: DANH SÁCH TỆP & NÚT TẢI LÊN -->
          <div id="integUploadTabContent" style="display: ${integrationState.inputMethod === 'upload' ? 'block' : 'none'};">
            ${integrationState.uploadedFiles && integrationState.uploadedFiles.length > 0 ? `
              <div style="margin-bottom: 0.65rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
                  <span style="font-size: 0.75rem; font-weight: 700; color: #475569;">
                    Đã tải lên ${integrationState.uploadedFiles.length} tệp (${integrationState.uploadedWordCount || 0} từ):
                  </span>
                  <button type="button" class="btn btn-sm btn-outline" style="font-size: 0.7rem; color: #dc2626; border-color: #fca5a5; padding: 2px 6px;" onclick="clearAllUploadedIntegrationDocs()">
                    <i class="fa-solid fa-trash-can"></i> Xóa hết
                  </button>
                </div>
                <div style="display: flex; flex-direction: column; gap: 0.35rem; max-height: 140px; overflow-y: auto;">
                  ${integrationState.uploadedFiles.map(function(f, idx) {
                    return `
                      <div style="display: flex; align-items: center; justify-content: space-between; background: #fdf2f8; border: 1px solid #fbcfe8; border-radius: 4px; padding: 0.35rem 0.55rem; font-size: 0.75rem;">
                        <div style="display: flex; align-items: center; gap: 0.4rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                          <i class="fa-solid ${f.type === 'pdf' ? 'fa-file-pdf' : 'fa-file-word'}" style="color: #db2777;"></i>
                          <span style="font-weight: 600; color: #1e293b;" title="${f.name}">${f.name}</span>
                          <span style="color: #64748b; font-size: 0.7rem;">(${f.wordCount || 0} từ)</span>
                        </div>
                        <button type="button" style="background: none; border: none; color: #ef4444; cursor: pointer; padding: 2px 4px;" onclick="removeUploadedIntegrationFile('${f.id || idx}')" title="Xóa tệp này">
                          <i class="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    `;
                  }).join('')}
                </div>
                <div style="margin-top: 0.5rem; text-align: center;">
                  <button type="button" class="btn btn-sm btn-outline" style="font-size: 0.75rem; width: 100%; border-style: dashed;" onclick="document.getElementById('integFileInput').click()">
                    <i class="fa-solid fa-plus"></i> Thêm tệp tài liệu khác (.docx, .pdf, .txt)
                  </button>
                </div>
              </div>
            ` : `
              <div class="upload-dropzone" onclick="document.getElementById('integFileInput').click()" ondragover="event.preventDefault(); this.classList.add('dragover')" ondragleave="this.classList.remove('dragover')" ondrop="event.preventDefault(); this.classList.remove('dragover'); handleIntegrationFileInput(event.dataTransfer)">
                <i class="fa-solid fa-file-arrow-up" style="font-size: 2rem; color: #db2777; margin-bottom: 0.4rem;"></i>
                <div style="font-size: 0.84rem; font-weight: 700; color: #1e293b;">Kéo thả tệp hoặc bấm để chọn (Chọn nhiều tệp cùng lúc)</div>
                <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.2rem;">Hỗ trợ .DOCX, .PDF, .TXT — Đọc 100% tất cả các trang & Tự động lưu lâu dài</div>
              </div>
            `}
            <input type="file" id="integFileInput" multiple accept=".docx,.pdf,.txt,.md" style="display: none;" onchange="handleIntegrationFileInput(this)">
          </div>

          <!-- TAB 2: CHAT LỆNH SƯ PHẠM & DÁN VĂN BẢN TRỰC TIẾP -->
          <div id="integPasteTabContent" style="display: ${integrationState.inputMethod === 'paste' ? 'block' : 'none'};">
            <div style="background: linear-gradient(135deg, #fdf2f8 0%, #eff6ff 100%); border: 1px solid #fbcfe8; border-radius: 8px; padding: 0.75rem; margin-bottom: 0.5rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
                <span style="font-size: 0.78rem; font-weight: 800; color: #9d174d; display: flex; align-items: center; gap: 0.35rem;">
                  <i class="fa-solid fa-robot" style="color: #db2777;"></i> Ô Chat & Lệnh Sư Phạm Cho AI:
                </span>
                <span id="pasteWordCountBadge" style="font-size: 0.7rem; color: #64748b; font-weight: 700; background: #ffffff; padding: 2px 6px; border-radius: 4px; border: 1px solid #e2e8f0;">
                  ${integrationState.uploadedWordCount || 0} từ
                </span>
              </div>
              
              <textarea id="integPasteTextArea" class="form-control" rows="4" 
                        placeholder="💬 Nhập yêu cầu sư phạm cho AI hoặc dán văn bản chỉ đạo...&#10;Ví dụ: Lồng ghép giáo dục bảo vệ môi trường, tiết kiệm tài nguyên nước và thích ứng biến đổi khí hậu vào bài học..." 
                        style="font-size: 0.8rem; line-height: 1.45; border-radius: 6px; border-color: #f472b6; background: #ffffff; box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);" 
                        oninput="onIntegrationPasteTextInput(this.value)" 
                        onkeydown="if(event.ctrlKey && event.key === 'Enter') { event.preventDefault(); triggerAnalyzeIntegrationPlan(); }">${integrationState.uploadedDocText || ''}</textarea>
              
              <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.45rem; flex-wrap: wrap; gap: 0.35rem;">
                <div style="font-size: 0.7rem; color: #64748b;">
                  <i class="fa-solid fa-keyboard" style="color: #db2777;"></i> Phím tắt <strong>Ctrl + Enter</strong> để gửi lệnh
                </div>
                <div style="display: flex; gap: 0.3rem;">
                  ${integrationState.uploadedDocText ? `
                    <button type="button" class="btn btn-sm btn-outline" style="font-size: 0.7rem; padding: 2px 7px; color: #dc2626; border-color: #fca5a5; background: #fff;" onclick="clearIntegrationPasteText()" title="Xóa nội dung ô chat">
                      <i class="fa-solid fa-eraser"></i> Xóa
                    </button>
                  ` : ''}
                  <button type="button" class="btn btn-sm btn-primary" style="font-size: 0.74rem; padding: 3px 10px; background: linear-gradient(135deg, #db2777, #ec4899); border: none; font-weight: 800; box-shadow: 0 2px 8px rgba(219,39,119,0.3);" onclick="triggerAnalyzeIntegrationPlan()" title="Gửi câu lệnh này cho AI phân tích ngay">
                    <i class="fa-solid fa-paper-plane"></i> Gửi Lệnh Cho AI
                  </button>
                </div>
              </div>
            </div>

            <!-- CÁC CHIP GỢI Ý LỆNH MẪU (CLICK LÀ CHỌN NGAY) -->
            <div style="margin-top: 0.55rem;">
              <div style="font-size: 0.73rem; font-weight: 800; color: #475569; margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.35rem;">
                <i class="fa-solid fa-wand-magic-sparkles" style="color: #db2777;"></i> Gợi ý câu lệnh mẫu (Bấm là chọn ngay):
              </div>
              <div style="display: flex; flex-direction: column; gap: 0.35rem;">
                <button type="button" class="quick-prompt-chip" onclick="applyQuickChatPrompt('disability_50')" style="text-align: left; background: #ffffff; border: 1px solid #d8b4fe; border-radius: 6px; padding: 0.4rem 0.55rem; font-size: 0.74rem; cursor: pointer; transition: all 0.2s; color: #1e293b; display: flex; align-items: flex-start; gap: 0.4rem;" onmouseover="this.style.borderColor='#7030a0'; this.style.background='#faf5ff';" onmouseout="this.style.borderColor='#d8b4fe'; this.style.background='#ffffff';">
                  <span style="font-size: 0.95rem; line-height: 1;">♿</span>
                  <div>
                    <strong style="color: #7030a0;">Bật nhanh HS khuyết tật (Nhận thức ~50%):</strong>
                    <div style="color: #64748b; font-size: 0.7rem; margin-top: 1px; line-height: 1.3;">Kích hoạt Mục 4 với tỉ lệ 50%, tự động thêm mục tiêu phân hóa cho em vào cuối phần YCCĐ.</div>
                  </div>
                </button>

                <button type="button" class="quick-prompt-chip" onclick="applyQuickChatPrompt('disability_30')" style="text-align: left; background: #ffffff; border: 1px solid #bae6fd; border-radius: 6px; padding: 0.4rem 0.55rem; font-size: 0.74rem; cursor: pointer; transition: all 0.2s; color: #1e293b; display: flex; align-items: flex-start; gap: 0.4rem;" onmouseover="this.style.borderColor='#0284c7'; this.style.background='#f0f9ff';" onmouseout="this.style.borderColor='#bae6fd'; this.style.background='#ffffff';">
                  <span style="font-size: 0.95rem; line-height: 1;">♿</span>
                  <div>
                    <strong style="color: #0284c7;">Bật nhanh HS hòa nhập (Nhận thức ~30%):</strong>
                    <div style="color: #64748b; font-size: 0.7rem; margin-top: 1px; line-height: 1.3;">Kích hoạt Mục 4 với tỉ lệ 30%, tinh giản mục tiêu bài học vừa sức nhất cho học sinh.</div>
                  </div>
                </button>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.3rem;">
                  <button type="button" class="btn btn-sm btn-outline" style="font-size: 0.7rem; padding: 0.35rem 0.4rem; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; background: #fff;" onclick="applyQuickChatPrompt('ai')" title="Tích hợp Giáo dục Trí tuệ nhân tạo (AI)">
                    🤖 GD Trí tuệ nhân tạo (AI)
                  </button>
                  <button type="button" class="btn btn-sm btn-outline" style="font-size: 0.7rem; padding: 0.35rem 0.4rem; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; background: #fff;" onclick="applyQuickChatPrompt('kns_water')" title="Tích hợp Kỹ năng sống & Phòng đuối nước">
                    🛡️ KNS & Phòng đuối nước
                  </button>
                  <button type="button" class="btn btn-sm btn-outline" style="font-size: 0.7rem; padding: 0.35rem 0.4rem; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; background: #fff;" onclick="applyQuickChatPrompt('environment')" title="Tích hợp Bảo vệ môi trường">
                    🌿 Bảo vệ môi trường
                  </button>
                  <button type="button" class="btn btn-sm btn-outline" style="font-size: 0.7rem; padding: 0.35rem 0.4rem; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; background: #fff;" onclick="applyQuickChatPrompt('local')" title="Tích hợp Giáo dục Địa phương">
                    🏛️ Giáo dục Địa phương
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 6. GHI CHÚ / YÊU CẦU ĐẶC BIỆT CHO AI (CHỈ KHI CÓ TÀI LIỆU) -->
        ${integrationState.uploadedDocText ? `
          <div class="form-group" style="margin-bottom: 0.85rem;">
            <label for="integUserNotes" style="font-weight: 700; font-size: 0.82rem; color: #334155;">6. Yêu cầu chi tiết cho AI (Tùy chọn):</label>
            <textarea id="integUserNotes" class="form-control" rows="2" placeholder="Ví dụ: Tích hợp sâu vào hoạt động Vận dụng, tạo câu hỏi thực tế địa phương..." oninput="integrationState.userNotes = this.value">${integrationState.userNotes || ''}</textarea>
          </div>

          <div style="background: #fdf2f8; border: 1px solid #fbcfe8; border-radius: var(--radius-sm); padding: 0.65rem 0.75rem; margin-bottom: 0.85rem;">
            <label style="display: flex; align-items: flex-start; gap: 0.5rem; cursor: pointer; font-size: 0.78rem; color: #9d174d; margin: 0; line-height: 1.35;">
              <input type="checkbox" id="integOverwriteLegacyCheck" ${integrationState.overwriteLegacy !== false ? 'checked' : ''} onchange="integrationState.overwriteLegacy = this.checked" style="margin-top: 2px; width: 15px; height: 15px; accent-color: #db2777; cursor: pointer;">
              <span><strong>Tự động làm sạch tích hợp cũ:</strong> AI tự nhận biết và xóa bỏ toàn bộ phần tích hợp cũ trước đó để thay thế hoàn toàn bằng công văn mới.</span>
            </label>
          </div>
        ` : ''}

        ${integrationState.uploadedDocText ? `
          <!-- NÚT AI KHI CÓ TÀI LIỆU TÍCH HỢP -->
          <button id="btnStartIntegAnalyze" class="btn btn-primary" style="width: 100%; padding: 0.8rem; font-size: 0.92rem; font-weight: 800; background: linear-gradient(135deg, #db2777, #ec4899); box-shadow: 0 4px 14px rgba(219, 39, 119, 0.35); border: none;" onclick="triggerAnalyzeIntegrationPlan()">
            <i class="fa-solid fa-wand-magic-sparkles"></i> BƯỚC 1: AI LẬP KẾ HOẠCH TÍCH HỢP ${isTimetableMode ? '& GHÉP TKB' : ''}
          </button>
        ` : ''}
        ` : ''}

        <!-- KHU VỰC CÁC NÚT HÀNH ĐỘNG CHÍNH -->
        <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 0.85rem;">

          <!-- CỤM NÚT: XEM TRƯỚC GỐC & XUẤT NHANH GỐC -->
          <div style="display: flex; flex-direction: column; gap: 0.45rem;">
            ${(function() {
              var disBadge = (ds && ds.enabled) ? (' • ♿ ' + (ds.cognitiveRate || 50) + '%') : '';
              var previewLabel = isTimetableMode ? 
                (isGvbm ? ('<i class="fa-solid fa-eye"></i> XEM TRƯỚC THEO TKB BỘ MÔN (' + countWeeks + ' TUẦN' + disBadge + ')') : ('<i class="fa-solid fa-eye"></i> XEM TRƯỚC THEO TKB LỚP (' + countWeeks + ' TUẦN' + disBadge + ')')) : 
                ('<i class="fa-solid fa-eye"></i> XEM TRƯỚC KHBD GỐC (' + countWeeks + ' TUẦN' + disBadge + ')');
              var exportLabel = isTimetableMode ? 
                (isGvbm ? ('<i class="fa-solid fa-file-arrow-down"></i> XUẤT NHANH THEO TKB BỘ MÔN (' + countWeeks + ' Tuần' + disBadge + ')') : ('<i class="fa-solid fa-file-arrow-down"></i> XUẤT NHANH THEO TKB LỚP (' + countWeeks + ' Tuần' + disBadge + ')')) : 
                ('<i class="fa-solid fa-file-arrow-down"></i> XUẤT NHANH KHBD GỐC (' + countWeeks + ' Tuần' + disBadge + ')');
              return `
                <button id="btnPreviewOriginalKhbd" type="button" class="btn btn-outline" style="width: 100%; padding: 0.75rem 1rem; font-size: 0.88rem; font-weight: 800; border: 2px solid ${isGvbm ? '#0284c7' : '#2563eb'}; color: ${isGvbm ? '#0369a1' : '#1e40af'}; background: #eff6ff; display: flex; align-items: center; justify-content: center; gap: 0.5rem; transition: all 0.2s;" onclick="triggerPreviewOriginalKhbd()">
                  ${previewLabel}
                </button>
                <button id="btnDirectFastExport" class="btn btn-primary" style="width: 100%; padding: 0.8rem 1rem; font-size: 0.88rem; font-weight: 800; background: ${isGvbm ? 'linear-gradient(135deg, #0284c7, #0369a1)' : 'linear-gradient(135deg, #1e40af, #3b82f6)'}; box-shadow: 0 4px 14px rgba(30, 64, 175, 0.35); border: none; display: flex; align-items: center; justify-content: center; gap: 0.5rem;" onclick="triggerDirectFastExport()">
                  ${exportLabel}
                </button>
              `;
            })()}
          </div>
          <div style="font-size: 0.74rem; color: #64748b; text-align: center; line-height: 1.35;">
            ${(ds && ds.enabled) ? `
              <span style="color: #7030a0; font-weight: 700;">
                <i class="fa-solid fa-circle-check" style="color: #7030a0;"></i> Đang bật mục tiêu phân hóa cho học sinh khuyết tật (${ds.cognitiveRate}%). Toàn bộ KHBD xuất ra sẽ có nội dung này ở cuối mục I.
              </span>
            ` : `
              <i class="fa-solid fa-circle-info" style="color: #2563eb;"></i> Bấm <b>Xem trước</b> để duyệt giáo án trên màn hình, hoặc bấm <b>Xuất nhanh</b> để tải file Word về máy.
            `}
          </div>
        </div>

      </div>

      <!-- CỘT HIỂN THỊ KẾT QUẢ BÊN PHẢI -->
      <div id="integOutputContainer" class="paper-preview-card" style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-sm); min-height: 620px;">
        ${renderIntegrationRightColumnContent()}
      </div>

    </div>

    <!-- MODAL CHỈNH SỬA THỜI KHÓA BIỂU CHO GVCN (THEO LỚP) -->
    <div id="integTkbModal" style="display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 9999; align-items: center; justify-content: center; padding: 1rem;">
      <div style="background: #ffffff; border-radius: var(--radius-md); max-width: 920px; width: 100%; max-height: 90vh; display: flex; flex-direction: column; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.3); overflow: hidden;">
        <div style="background: #1e293b; color: #ffffff; padding: 1rem 1.25rem; display: flex; align-items: center; justify-content: space-between;">
          <div style="font-weight: 800; font-size: 1rem; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fa-solid fa-calendar-days" style="color: #f472b6;"></i> Tùy Chỉnh Thời Khóa Biểu Khối ${curGrade}
          </div>
          <button type="button" style="background: transparent; border: none; color: #94a3b8; font-size: 1.25rem; cursor: pointer;" onclick="closeTimetableEditorModal()">&times;</button>
        </div>
        <div id="integTkbModalBody" style="padding: 1.25rem; overflow-y: auto; flex: 1;">
          <!-- Render form thời khóa biểu -->
        </div>
        <div style="background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 0.85rem 1.25rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
          <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
            <button type="button" class="btn btn-outline" style="font-size: 0.82rem;" onclick="resetTimetableToDefault()">
              <i class="fa-solid fa-rotate-left"></i> Khôi phục TKB chuẩn Bộ
            </button>
            <button type="button" class="btn btn-outline" style="font-size: 0.82rem; color: #16a34a; border-color: #86efac; background: #f0fdf4;" onclick="downloadTimetableTemplate()">
              <i class="fa-solid fa-file-arrow-down"></i> Tải mẫu Excel (.xlsx)
            </button>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <button type="button" class="btn btn-outline" style="font-size: 0.82rem;" onclick="closeTimetableEditorModal()">Hủy bỏ</button>
            <button type="button" class="btn btn-primary" style="font-size: 0.82rem; background: #db2777; border-color: #db2777;" onclick="saveCustomTimetableFromModal()">
              <i class="fa-solid fa-floppy-disk"></i> Lưu Thời Khóa Biểu
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL CHỈNH SỬA LỊCH DẠY / TKB BỘ MÔN (ĐA KHỐI) -->
    <div id="integGvbmScheduleModal" style="display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 9999; align-items: center; justify-content: center; padding: 1rem;">
      <div style="background: #ffffff; border-radius: var(--radius-md); max-width: 960px; width: 100%; max-height: 92vh; display: flex; flex-direction: column; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.3); overflow: hidden;">
        <div style="background: #1e3a8a; color: #ffffff; padding: 1rem 1.25rem; display: flex; align-items: center; justify-content: space-between;">
          <div style="font-weight: 800; font-size: 1rem; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fa-solid fa-calendar-week" style="color: #60a5fa;"></i> Tùy Chỉnh Lịch Dạy / Thời Khóa Biểu Giáo Viên Bộ Môn
          </div>
          <button type="button" style="background: transparent; border: none; color: #93c5fd; font-size: 1.25rem; cursor: pointer;" onclick="closeGvbmScheduleModal()">&times;</button>
        </div>
        <div id="integGvbmScheduleModalBody" style="padding: 1.25rem; overflow-y: auto; flex: 1;">
          <!-- Content rendered by openGvbmScheduleModal -->
        </div>
        <div style="background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 0.85rem 1.25rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
          <div style="display: flex; gap: 0.4rem;">
            <button type="button" class="btn btn-sm btn-outline" style="font-size: 0.78rem; color: #dc2626; border-color: #fca5a5;" onclick="clearGvbmScheduleInModal()">
              <i class="fa-solid fa-trash-can"></i> Xóa bảng trống
            </button>
            <button type="button" class="btn btn-sm btn-outline" style="font-size: 0.78rem; color: #0284c7; border-color: #bae6fd;" onclick="fillSampleGvbmScheduleInModal()">
              <i class="fa-solid fa-wand-magic-sparkles"></i> Lịch mẫu (18 tiết)
            </button>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <button type="button" class="btn btn-sm btn-outline" style="font-size: 0.82rem;" onclick="closeGvbmScheduleModal()">Hủy bỏ</button>
            <button type="button" class="btn btn-sm btn-primary" style="font-size: 0.82rem; background: #0284c7; border-color: #0284c7;" onclick="saveGvbmScheduleFromModal()">
              <i class="fa-solid fa-floppy-disk"></i> Lưu Lịch Lên Lớp
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderIntegrationRightColumnContent() {
  var step = integrationState.activeStep || 1;
  var isTimetableMode = (integrationState.exportMode === 'timetable');

  if (step === 2 && integrationState.analyzedPlan) {
    return renderIntegrationPlanReviewHtml(integrationState.analyzedPlan);
  }
  if (step === 3) {
    if (isTimetableMode && integrationState.timetableAppliedWeeks && integrationState.timetableAppliedWeeks.length > 0) {
      if (isGvbmRole(integrationState.timetableRole)) {
        return renderIntegrationGvbmFinalPreviewHtml();
      }
      return renderIntegrationTimetableFinalPreviewHtml();
    }
    if (integrationState.appliedLessons) {
      return renderIntegrationFinalPreviewHtml();
    }
  }
  return renderIntegrationIdleStateHtml();
}

function renderIntegrationIdleStateHtml() {
  return `
    <div style="text-align: center; padding: 4.5rem 1.5rem; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 480px; cursor: pointer;" onclick="triggerPreviewOriginalKhbd()" title="Bấm để xem trước Kế hoạch bài dạy">
      <div style="width: 84px; height: 84px; border-radius: 50%; background: #eff6ff; color: #2563eb; display: inline-flex; align-items: center; justify-content: center; font-size: 2.75rem; margin-bottom: 1.25rem; box-shadow: 0 4px 18px rgba(37, 99, 235, 0.2); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'">
        <i class="fa-solid fa-eye"></i>
      </div>
      <h2 style="color: #1e40af; font-weight: 900; font-size: 2rem; letter-spacing: 1.5px; margin: 0 0 1.25rem 0; text-transform: uppercase;">
        XEM TRƯỚC
      </h2>
      <button type="button" class="btn btn-primary" style="padding: 0.75rem 2.25rem; font-size: 0.95rem; font-weight: 800; background: linear-gradient(135deg, #1e40af, #3b82f6); border: none; border-radius: 8px; box-shadow: 0 4px 14px rgba(30, 64, 175, 0.35); display: inline-flex; align-items: center; gap: 0.55rem; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
        <i class="fa-solid fa-eye"></i> Bấm để Xem Trước Giáo Án
      </button>
    </div>
  `;
}

// Controller handlers
function setIntegrationExportMode(mode) {
  integrationState.exportMode = mode;
  integrationState.activeStep = 1;
  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
}

var QUICK_CHAT_PROMPTS = {
  disability_50: 'Lớp tôi có 1 học sinh khuyết tật học hòa nhập, tỉ lệ nhận thức khoảng 50%. Dựa vào YCCĐ của bài học, hãy biên soạn lại 01 câu YCCĐ phân hóa vừa sức cho em: diễn đạt tự nhiên, cụ thể theo bài học, đa dạng hóa biện pháp hỗ trợ (bạn cùng bàn, đồ dùng học tập, bảng con...), tuyệt đối không lặp từ "đơn giản", ghi xuống cuối YCCĐ theo mẫu: "- Đối với học sinh khuyết tật: ..."',
  disability_30: 'Lớp tôi có 1 học sinh khuyết tật học hòa nhập, tỉ lệ nhận thức khoảng 30%. Dựa vào YCCĐ của bài học, hãy tinh giản yêu cầu vừa sức cho em: tập trung tri giác trực quan, thao tác cụ thể cùng bạn, tránh rập khuôn và lặp từ ngữ, ghi xuống cuối YCCĐ theo mẫu: "- Đối với học sinh khuyết tật: ..."',
  ai: 'Tích hợp Khung nội dung Giáo dục Trí tuệ nhân tạo (AI) và Kỹ năng số tiểu học theo định hướng Công văn của Bộ GD&ĐT.',
  kns_water: 'Tích hợp Chuyên đề Giáo dục Kỹ năng sống, Kỹ năng tự phục vụ và Phòng chống tai nạn thương tích, đuối nước cho học sinh tiểu học.',
  environment: 'Tích hợp Giáo dục Bảo vệ môi trường, tiết kiệm tài nguyên nước, năng lượng và thích ứng biến đổi khí hậu.',
  local: 'Tích hợp Giáo dục Địa phương, bồi dưỡng tình yêu quê hương, nét đẹp truyền thống và các di sản văn hóa tại địa phương.'
};

function setIntegrationRoleAndMode(mode, role) {
  integrationState.exportMode = mode;
  if (role) {
    integrationState.timetableRole = role;
    try {
      localStorage.setItem('tvth_timetable_role', role);
    } catch (e) {}
  }
  integrationState.activeStep = 1;
  integrationState.timetableAppliedWeeks = null;
  integrationState.appliedLessons = null;
  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
}

function toggleDisabilitySupport(enabled) {
  if (typeof enabled === 'undefined') {
    integrationState.disabilitySupport.enabled = !integrationState.disabilitySupport.enabled;
  } else {
    integrationState.disabilitySupport.enabled = !!enabled;
  }
  try {
    localStorage.setItem('tvth_disability_enabled', integrationState.disabilitySupport.enabled ? 'true' : 'false');
  } catch (e) {}

  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
  if (integrationState.disabilitySupport.enabled) {
    showToast('Đã BẬT hỗ trợ YCCĐ học sinh khuyết tật (' + (integrationState.disabilitySupport.cognitiveRate || 50) + '%)', 'success');
  } else {
    showToast('Đã TẮT hỗ trợ học sinh khuyết tật', 'info');
  }
}

function setDisabilityCognitiveRate(rate) {
  rate = parseInt(rate, 10);
  if (isNaN(rate) || rate < 10) rate = 10;
  if (rate > 90) rate = 90;
  integrationState.disabilitySupport.cognitiveRate = rate;
  try {
    localStorage.setItem('tvth_disability_rate', rate);
  } catch (e) {}

  var slider = document.getElementById('disabilityRateRange');
  if (slider) slider.value = rate;
  var badge = document.getElementById('disabilityRateBadge');
  if (badge) badge.textContent = rate + '%';
  updateDisabilitySampleUi();

  var btns = document.querySelectorAll('.disability-preset-btn');
  btns.forEach(function(b) {
    var bRate = parseInt(b.getAttribute('data-rate'), 10);
    if (bRate === rate) {
      b.classList.remove('btn-outline');
      b.classList.add('btn-primary');
      b.style.background = '#7030a0';
      b.style.borderColor = '#7030a0';
      b.style.color = '#fff';
    } else {
      b.classList.remove('btn-primary');
      b.classList.add('btn-outline');
      b.style.background = '#fff';
      b.style.borderColor = '#cbd5e1';
      b.style.color = '#475569';
    }
  });
}

function setDisabilityType(typeKey, typeName) {
  integrationState.disabilitySupport.disabilityType = typeKey;
  if (typeName) {
    integrationState.disabilitySupport.disabilityTypeName = typeName;
  }
  try {
    localStorage.setItem('tvth_disability_type', typeKey);
    if (typeName) localStorage.setItem('tvth_disability_type_name', typeName);
  } catch (e) {}

  updateDisabilitySampleUi();
}

function setDisabilityNotes(notes) {
  integrationState.disabilitySupport.notes = notes || '';
  try {
    localStorage.setItem('tvth_disability_notes', integrationState.disabilitySupport.notes);
  } catch (e) {}

  updateDisabilitySampleUi();
}

function updateDisabilitySampleUi() {
  var sampleBox = document.getElementById('disabilitySampleBox');
  if (sampleBox) {
    var txt = getSampleDisabilityText();
    if (sampleBox.tagName === 'TEXTAREA' || sampleBox.tagName === 'INPUT') {
      sampleBox.value = txt;
    } else {
      sampleBox.textContent = txt;
    }
  }
  var sampleNameBadge = document.getElementById('disabilitySampleLessonName');
  if (sampleNameBadge) {
    sampleNameBadge.textContent = getSampleLessonName();
    sampleNameBadge.title = getSampleLessonName();
  }
}

function setCustomDisabilityText(val) {
  if (!integrationState.disabilitySupport) integrationState.disabilitySupport = {};
  integrationState.disabilitySupport.customText = val;
}

function resetDisabilityToAuto() {
  if (integrationState.disabilitySupport) {
    integrationState.disabilitySupport.customText = '';
  }
  updateDisabilitySampleUi();
  showToast('Đã khôi phục câu YCCĐ tự động theo bài dạy!', 'info');
}

async function generateAiSampleDisabilityYccd() {
  var ds = (typeof integrationState !== 'undefined' && integrationState.disabilitySupport) || {};
  var btn = document.getElementById('btnAiSampleDisability');
  var sampleBox = document.getElementById('disabilitySampleBox');

  var apiKey = (typeof IntegrationService !== 'undefined' && IntegrationService.getGeminiApiKey) ? IntegrationService.getGeminiApiKey() : '';
  if (!apiKey) {
    showToast('Vui lòng nhập Gemini API Key để kết nối AI phân tích bài dạy!', 'warning');
    if (typeof openGeminiApiKeyModal === 'function') {
      openGeminiApiKeyModal();
    }
    return;
  }

  var originalBtnHtml = btn ? btn.innerHTML : '';
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang gửi YCCĐ...';
  }

  try {
    var realLesson = getSampleRealLesson();
    var aiLine = '';

    if (typeof IntegrationService !== 'undefined' && typeof IntegrationService.adaptSingleLessonDisability === 'function') {
      aiLine = await IntegrationService.adaptSingleLessonDisability(realLesson, ds);
    } else {
      var aiServiceObj = (typeof AIService !== 'undefined' ? AIService : (typeof window !== 'undefined' ? window.AIService : null));
      if (aiServiceObj && typeof aiServiceObj.adaptSingleLessonDisability === 'function') {
        aiLine = await aiServiceObj.adaptSingleLessonDisability(realLesson, ds, apiKey);
      } else if (typeof IntegrationService !== 'undefined' && typeof IntegrationService.generateDisabilityYccd === 'function') {
        aiLine = IntegrationService.generateDisabilityYccd(realLesson, ds);
      }
    }

    if (aiLine) {
      setCustomDisabilityText(aiLine);
      if (sampleBox) {
        sampleBox.value = aiLine;
      }
      showToast('✨ Gemini AI đã phân tích YCCĐ bài và soạn mục tiêu riêng thành công!', 'success');
    } else {
      showToast('AI chưa trả về kết quả phù hợp, vui lòng thử lại.', 'warning');
    }
  } catch (err) {
    console.error('Lỗi gọi Gemini AI soạn mẫu YCCĐ khuyết tật:', err);
    showToast('Lỗi kết nối Gemini AI: ' + (err.message || 'Không thể kết nối máy chủ AI') + '. Vui lòng kiểm tra kết nối mạng hoặc API key.', 'danger');
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = originalBtnHtml;
    }
  }
}

function toggleApprovalSupport(enabled) {
  if (typeof enabled === 'undefined') {
    integrationState.approvalConfig.enabled = !integrationState.approvalConfig.enabled;
  } else {
    integrationState.approvalConfig.enabled = !!enabled;
  }
  try {
    localStorage.setItem('tvth_approval_enabled', integrationState.approvalConfig.enabled ? 'true' : 'false');
  } catch (e) {}

  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
  if (integrationState.approvalConfig.enabled) {
    showToast('Đã BẬT kèm khung ký duyệt giáo án', 'success');
  } else {
    showToast('Đã TẮT kèm khung ký duyệt', 'info');
  }
}

function setApprovalField(field, value) {
  if (!integrationState.approvalConfig) {
    integrationState.approvalConfig = {
      enabled: true,
      leaderRole: 'Tổ trưởng',
      leaderName: '',
      adminRole: 'Hiệu trưởng',
      adminName: ''
    };
  }
  integrationState.approvalConfig[field] = value || '';
  try {
    if (field === 'leaderRole') localStorage.setItem('tvth_approval_leader_role', value);
    else if (field === 'leaderName') localStorage.setItem('tvth_approval_leader_name', value);
    else if (field === 'adminRole') localStorage.setItem('tvth_approval_admin_role', value);
    else if (field === 'adminName') localStorage.setItem('tvth_approval_admin_name', value);
  } catch (e) {}

  var badge = document.getElementById('approvalPreviewBadge');
  if (badge) {
    var ap = integrationState.approvalConfig;
    var tLeader = (ap.leaderRole || 'Tổ trưởng') + ': ' + (ap.leaderName || '...');
    var tAdmin = (ap.adminRole || 'Hiệu trưởng') + ': ' + (ap.adminName || '...');
    badge.textContent = tLeader + ' • ' + tAdmin;
  }
}

function getSampleRealLesson() {
  var ds = (typeof integrationState !== 'undefined' && integrationState.disabilitySupport) || {};
  var curGrade = (typeof integrationState !== 'undefined' && integrationState.grade) || (document.getElementById('gradeSelect') ? parseInt(document.getElementById('gradeSelect').value, 10) : 5) || 5;
  var curSubj = (typeof integrationState !== 'undefined' && integrationState.subjectKey) || 'toan';
  var curWeek = (typeof integrationState !== 'undefined' && integrationState.startWeek) || 1;

  var realLesson = null;
  if (typeof window.KHBD_DATA !== 'undefined' && typeof window.KHBD_DATA.getWeekRangePlan === 'function') {
    try {
      var wp = window.KHBD_DATA.getWeekRangePlan(curGrade, curSubj, curWeek, curWeek);
      if (wp && wp[0] && wp[0].lessons && wp[0].lessons[0]) {
        realLesson = JSON.parse(JSON.stringify(wp[0].lessons[0]));
        realLesson.subjectKey = curSubj;
      }
    } catch(e) {}
  }

  if (!realLesson) {
    realLesson = {
      title: 'BÀI 1: ÔN TẬP SỐ TỰ NHIÊN',
      subjectKey: curSubj,
      lessonTitle: 'BÀI 1: ÔN TẬP SỐ TỰ NHIÊN (TIẾT 1)',
      yccd: [
        '1. Năng lực đặc thù',
        '- Đọc, viết được số tự nhiên; viết được số tự nhiên thành tổng các số hạng theo hàng.',
        '- Vận dụng được việc đọc, viết số tự nhiên để giải quyết một số tình huống thực tế.'
      ]
    };
  }
  realLesson.subjectKey = curSubj;
  return realLesson;
}

function getSampleLessonName() {
  var les = getSampleRealLesson();
  var subName = '';
  if (typeof IntegrationService !== 'undefined' && typeof IntegrationService.getSubjectDisplayName === 'function') {
    subName = IntegrationService.getSubjectDisplayName(les.subjectKey || 'toan');
  }
  var title = les.lessonTitle || les.title || 'Bài học mẫu';
  return (subName ? (subName + ' - ') : '') + title;
}

function getSampleDisabilityText() {
  var ds = (typeof integrationState !== 'undefined' && integrationState.disabilitySupport) || {};
  if (ds.customText) {
    return ds.customText;
  }
  var realLesson = getSampleRealLesson();
  if (realLesson && realLesson.disabilityYccdAI) {
    return realLesson.disabilityYccdAI;
  }
  return '(YCCĐ sẽ được Gemini AI tự động phân tích và biên soạn riêng cho từng bài khi Xem trước hoặc Xuất file. Bấm nút "Nhờ Gemini AI soạn lại" bên dưới để xem thử.)';
}

function applyQuickChatPrompt(promptKey) {
  if (promptKey === 'disability_50' || promptKey === 'disability_30') {
    var rate = promptKey === 'disability_30' ? 30 : 50;
    integrationState.disabilitySupport.enabled = true;
    integrationState.disabilitySupport.cognitiveRate = rate;
    try {
      localStorage.setItem('tvth_disability_enabled', 'true');
      localStorage.setItem('tvth_disability_rate', rate);
    } catch(e) {}
    var container = document.getElementById('content-container');
    if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
      renderAiIntegrationView(container);
    }
    showToast('Đã kích hoạt hỗ trợ Học sinh khuyết tật (' + rate + '%) ở Mục 4!', 'success');
    return;
  }
  var promptText = QUICK_CHAT_PROMPTS[promptKey] || promptKey;
  integrationState.inputMethod = 'paste';
  integrationState.uploadedDocText = promptText;
  integrationState.uploadedDocName = 'Lệnh sư phạm AI';
  var wordCount = promptText.trim() ? promptText.trim().split(/\s+/).length : 0;
  integrationState.uploadedWordCount = wordCount;

  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
  showToast('Đã nạp câu lệnh chat cho AI! Bấm "Gửi Lệnh Cho AI" hoặc "AI Lập Kế Hoạch" để bắt đầu.', 'success');
}

function clearIntegrationPasteText() {
  integrationState.uploadedDocText = '';
  integrationState.uploadedWordCount = 0;
  var textarea = document.getElementById('integPasteTextArea');
  if (textarea) textarea.value = '';
  var badge = document.getElementById('pasteWordCountBadge');
  if (badge) badge.textContent = '0 từ';
  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
}

function onIntegrationGradeChange(grade) {
  integrationState.grade = parseInt(grade) || 5;
  var subjs = getIntegrationSubjectsForGrade(integrationState.grade);
  var subjSelect = document.getElementById('integSubjectSelect');
  if (subjSelect) {
    subjSelect.innerHTML = subjs.map(function(s) {
      return `<option value="${s.key}">${s.name}</option>`;
    }).join('');
    integrationState.subjectKey = subjs[0].key;
  }
  // Reset trạng thái xem trước và kết quả cũ của khối trước đó
  integrationState.activeStep = 1;
  integrationState.timetableAppliedWeeks = null;
  integrationState.appliedLessons = null;
  integrationState.customTimetable = null;
  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
}

function onIntegrationSubjectChange(subjKey) {
  integrationState.subjectKey = subjKey;
}

function onIntegrationStartWeekChange(week) {
  var s = parseInt(week) || 1;
  integrationState.startWeek = s;
  var maxEnd = Math.min(35, s + 3); // Tối đa 4 tuần mỗi lần xử lý
  
  if (!integrationState.endWeek || integrationState.endWeek < s || integrationState.endWeek > maxEnd) {
    integrationState.endWeek = Math.min(maxEnd, s);
  }
  integrationState.durationWeeks = integrationState.endWeek - integrationState.startWeek + 1;
  
  var eSelect = document.getElementById('integEndWeekSelect');
  if (eSelect) {
    var opts = [];
    for (var w = s; w <= maxEnd; w++) {
      opts.push(`<option value="${w}" ${w === integrationState.endWeek ? 'selected' : ''}>Tuần ${w} (+${w - s + 1}T)</option>`);
    }
    eSelect.innerHTML = opts.join('');
  }
  updateWeekRangeBadgeAndSelects();
}

function onIntegrationEndWeekChange(week) {
  var e = parseInt(week) || 1;
  var s = integrationState.startWeek || 1;
  var maxEnd = Math.min(35, s + 3);
  
  if (e < s) e = s;
  if (e > maxEnd) {
    e = maxEnd;
    showToast('Tối đa 4 tuần mỗi lần để tối ưu tốc độ AI xử lý!', 'info');
  }
  integrationState.endWeek = e;
  integrationState.durationWeeks = integrationState.endWeek - integrationState.startWeek + 1;
  updateWeekRangeBadgeAndSelects();
}

function setIntegrationQuickDuration(durationWeeks) {
  var d = Math.max(1, Math.min(4, parseInt(durationWeeks) || 1));
  var s = integrationState.startWeek || 1;
  if (s + d - 1 > 35) {
    s = Math.max(1, 36 - d);
    integrationState.startWeek = s;
    var sSelect = document.getElementById('integStartWeekSelect');
    if (sSelect) sSelect.value = s;
  }
  var e = s + d - 1;
  integrationState.endWeek = e;
  integrationState.durationWeeks = d;
  
  var eSelect = document.getElementById('integEndWeekSelect');
  if (eSelect) {
    var maxEnd = Math.min(35, s + 3);
    var opts = [];
    for (var w = s; w <= maxEnd; w++) {
      opts.push(`<option value="${w}" ${w === e ? 'selected' : ''}>Tuần ${w} (+${w - s + 1}T)</option>`);
    }
    eSelect.innerHTML = opts.join('');
    eSelect.value = e;
  }
  updateWeekRangeBadgeAndSelects();
}

function setIntegrationQuickRange(start, end) {
  var s = Math.max(1, Math.min(35, parseInt(start) || 1));
  var maxEnd = Math.min(35, s + 3);
  var e = Math.max(s, Math.min(maxEnd, parseInt(end) || s));
  
  integrationState.startWeek = s;
  integrationState.endWeek = e;
  integrationState.durationWeeks = e - s + 1;
  
  var sSelect = document.getElementById('integStartWeekSelect');
  if (sSelect) sSelect.value = s;
  var eSelect = document.getElementById('integEndWeekSelect');
  if (eSelect) {
    var opts = [];
    for (var w = s; w <= maxEnd; w++) {
      opts.push(`<option value="${w}" ${w === e ? 'selected' : ''}>Tuần ${w} (+${w - s + 1}T)</option>`);
    }
    eSelect.innerHTML = opts.join('');
    eSelect.value = e;
  }
  updateWeekRangeBadgeAndSelects();
}

function updateWeekRangeBadgeAndSelects() {
  var sSelect = document.getElementById('integStartWeekSelect');
  var eSelect = document.getElementById('integEndWeekSelect');
  if (sSelect) sSelect.value = integrationState.startWeek;
  if (eSelect) eSelect.value = integrationState.endWeek;

  var s = integrationState.startWeek || 1;
  var e = integrationState.endWeek || s;
  var count = e - s + 1;
  var badge = document.getElementById('integWeekRangeBadge');
  if (badge) {
    badge.textContent = (s === e) ? ('Tuần ' + s + ' (1 tuần)') : ('Tuần ' + s + ' → Tuần ' + e + ' (' + count + ' tuần)');
  }

  // Cập nhật trạng thái active cho các nút nhanh 1, 2, 3, 4 tuần
  document.querySelectorAll('.btn-quick-dur').forEach(function(btn) {
    var dur = parseInt(btn.getAttribute('data-dur')) || 0;
    if (dur === count) {
      btn.style.background = '#fdf2f8';
      btn.style.borderColor = '#db2777';
      btn.style.color = '#db2777';
      btn.style.fontWeight = '800';
    } else {
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.style.color = '';
      btn.style.fontWeight = '';
    }
  });

  var isTimetableMode = (integrationState.exportMode === 'timetable');
  var btnPreview = document.getElementById('btnPreviewOriginalKhbd');
  if (btnPreview) {
    btnPreview.innerHTML = isTimetableMode ?
      ('<i class="fa-solid fa-eye"></i> XEM TRƯỚC THEO TKB (' + count + ' TUẦN)') :
      ('<i class="fa-solid fa-eye"></i> XEM TRƯỚC KHBD GỐC (' + count + ' TUẦN)');
  }
  var btnExport = document.getElementById('btnDirectFastExport');
  if (btnExport) {
    btnExport.innerHTML = isTimetableMode ? 
      ('<i class="fa-solid fa-file-arrow-down"></i> XUẤT NHANH THEO TKB (' + count + ' Tuần • 1 File/Tuần)') :
      ('<i class="fa-solid fa-file-arrow-down"></i> XUẤT NHANH KHBD GỐC (' + count + ' Tuần • Chuẩn CV 2345)');
  }
}

function setIntegrationInputMethod(method) {
  integrationState.inputMethod = method;
  var uploadTab = document.getElementById('integUploadTabContent');
  var pasteTab = document.getElementById('integPasteTabContent');
  if (uploadTab && pasteTab) {
    uploadTab.style.display = (method === 'upload') ? 'block' : 'none';
    pasteTab.style.display = (method === 'paste') ? 'block' : 'none';
  }
  document.querySelectorAll('.upload-tab-btn').forEach(function(btn, idx) {
    if ((idx === 0 && method === 'upload') || (idx === 1 && method === 'paste')) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function updateCombinedUploadedDocs(shouldPersist) {
  if (shouldPersist === undefined) shouldPersist = true;

  if (!integrationState.uploadedFiles || integrationState.uploadedFiles.length === 0) {
    integrationState.uploadedDocName = '';
    integrationState.uploadedDocType = '';
    integrationState.uploadedDocText = '';
    integrationState.uploadedWordCount = 0;
    if (shouldPersist && typeof IntegrationService !== 'undefined' && IntegrationService.storage) {
      IntegrationService.storage.clearAllDocs();
    }
    return;
  }

  var count = integrationState.uploadedFiles.length;
  if (count === 1) {
    var f = integrationState.uploadedFiles[0];
    integrationState.uploadedDocName = f.name;
    integrationState.uploadedDocType = f.type || 'Tài liệu';
    integrationState.uploadedDocText = f.text || '';
    integrationState.uploadedWordCount = f.wordCount || 0;
  } else {
    integrationState.uploadedDocName = count + ' tài liệu: ' + integrationState.uploadedFiles.map(function(f) { return f.name; }).join(', ');
    integrationState.uploadedDocType = 'Nhiều tài liệu (' + count + ' tệp)';

    var combinedText = integrationState.uploadedFiles.map(function(f, idx) {
      var header = '=== TÀI LIỆU ' + (idx + 1) + ': ' + f.name.toUpperCase() + (f.pageCount ? ' (' + f.pageCount + ' trang, ' : ' (') + f.wordCount + ' từ) ===';
      return header + '\n' + (f.text || '');
    }).join('\n\n' + '='.repeat(60) + '\n\n');

    integrationState.uploadedDocText = combinedText;
    integrationState.uploadedWordCount = integrationState.uploadedFiles.reduce(function(sum, f) { return sum + (f.wordCount || 0); }, 0);
  }

  if (shouldPersist && typeof IntegrationService !== 'undefined' && IntegrationService.storage) {
    IntegrationService.storage.saveDocs(integrationState.uploadedFiles);
  }
}

function removeUploadedIntegrationFile(fileId) {
  if (!integrationState.uploadedFiles) return;
  integrationState.uploadedFiles = integrationState.uploadedFiles.filter(function(f) {
    return f.id !== fileId;
  });
  updateCombinedUploadedDocs(true);
  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
  showToast('Đã xóa tệp khỏi danh sách tài liệu tích hợp.', 'info');
}

function clearAllUploadedIntegrationDocs() {
  integrationState.uploadedFiles = [];
  updateCombinedUploadedDocs(true);
  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
  showToast('Đã xóa toàn bộ tài liệu tích hợp.', 'info');
}

function clearUploadedIntegrationDoc() {
  clearAllUploadedIntegrationDocs();
}

async function initSavedIntegrationDocs() {
  if (typeof IntegrationService !== 'undefined' && IntegrationService.storage) {
    try {
      var saved = await IntegrationService.storage.getAllDocs();
      if (saved && saved.length > 0 && (!integrationState.uploadedFiles || integrationState.uploadedFiles.length === 0)) {
        integrationState.uploadedFiles = saved;
        updateCombinedUploadedDocs(false);
        var container = document.getElementById('content-container');
        if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
          renderAiIntegrationView(container);
        }
      }
    } catch(err) {
      console.warn('Lỗi nạp tài liệu đã lưu:', err);
    }
  }
}

async function handleIntegrationFileInput(inputOrDataTransfer) {
  var filesList = [];
  if (inputOrDataTransfer.files) {
    filesList = Array.from(inputOrDataTransfer.files);
  }
  if (!filesList || filesList.length === 0) return;

  var uploadTab = document.getElementById('integUploadTabContent');
  var totalFiles = filesList.length;

  for (var i = 0; i < totalFiles; i++) {
    var file = filesList[i];
    if (uploadTab) {
      uploadTab.innerHTML = `
        <div style="text-align: center; padding: 1.25rem; color: #db2777;">
          <i class="fa-solid fa-spinner fa-spin" style="font-size: 1.75rem; margin-bottom: 0.5rem;"></i>
          <div style="font-weight: 800; font-size: 0.88rem;">Đang đọc tệp (${i + 1}/${totalFiles}): ${file.name}...</div>
          <div id="fileReadPageProgress" style="font-size: 0.76rem; color: #64748b; margin-top: 0.25rem;">Đang đọc 100% nội dung...</div>
        </div>
      `;
    }

    try {
      var result = await IntegrationService.extractTextFromFile(file, function(curPage, totalPages) {
        var pEl = document.getElementById('fileReadPageProgress');
        if (pEl) pEl.textContent = 'Đang trích xuất trang ' + curPage + '/' + totalPages + ' (Đọc 100% toàn bộ nội dung)...';
      });

      if (!integrationState.uploadedFiles) integrationState.uploadedFiles = [];
      
      var newDoc = {
        id: 'doc_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
        name: result.fileName,
        type: result.fileType,
        text: result.text,
        wordCount: result.wordCount,
        pageCount: result.pageCount || 0,
        uploadedAt: new Date().toISOString()
      };

      var existingIdx = integrationState.uploadedFiles.findIndex(function(x) { return x.name === result.fileName; });
      if (existingIdx !== -1) {
        integrationState.uploadedFiles[existingIdx] = newDoc;
      } else {
        integrationState.uploadedFiles.push(newDoc);
      }
    } catch (err) {
      console.error('File read error for ' + file.name + ':', err);
      showToast('Lỗi khi đọc tệp ' + file.name + ': ' + (err.message || ''), 'danger');
    }
  }

  updateCombinedUploadedDocs(true);

  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
  showToast('Đã nạp thành công ' + totalFiles + ' tệp (Đã đọc 100% và lưu trữ lâu dài trên máy)!', 'success');
}

function onIntegrationPasteTextInput(text) {
  integrationState.uploadedDocText = text;
  var wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  integrationState.uploadedWordCount = wordCount;
  if (!integrationState.uploadedDocName) {
    integrationState.uploadedDocName = 'Văn bản dán trực tiếp';
  }
  var badge = document.getElementById('pasteWordCountBadge');
  if (badge) badge.textContent = wordCount + ' từ';
}

// ===========================================================================
// XỬ LÝ THỜI KHÓA BIỂU TÙY CHỈNH & TẢI TỆP
// ===========================================================================

function onIntegrationTeacherNameChange(val) {
  integrationState.teacherName = val;
  try { localStorage.setItem('tvth_teacher_name', val); } catch(e){}
}

function onIntegrationSchoolYearChange(val) {
  integrationState.schoolYear = val;
  try { localStorage.setItem('tvth_school_year', val); } catch(e){}
}

function onIntegrationSchoolNameChange(val) {
  integrationState.schoolName = val;
  try { localStorage.setItem('tvth_school_name', val); } catch(e){}
}

function onIntegrationClassNameChange(val) {
  integrationState.className = val;
  try { localStorage.setItem('tvth_class_name', val); } catch(e){}
}

function openTimetableEditorModal() {
  var modal = document.getElementById('integTkbModal');
  var body = document.getElementById('integTkbModalBody');
  if (!modal || !body) return;

  var curGrade = integrationState.grade || 5;
  var timetable = integrationState.customTimetable || IntegrationService.getDefaultTimetable(curGrade);

  var availableSubjects = [
    { key: 'toan', name: 'Toán' },
    { key: 'tieng_viet', name: 'Tiếng Việt' },
    { key: 'khoa_hoc', name: 'Khoa học' },
    { key: 'lich_su_dia_ly', name: 'Lịch sử & Địa lí' },
    { key: 'tnxh', name: 'Tự nhiên & Xã hội' },
    { key: 'dao_duc', name: 'Đạo đức' },
    { key: 'hdtn', name: 'Hoạt động trải nghiệm' },
    { key: 'cong_nghe', name: 'Công nghệ' },
    { key: 'tin_hoc', name: 'Tin học' },
    { key: 'tieng_anh', name: 'Tiếng Anh' },
    { key: 'am_nhac', name: 'Âm nhạc' },
    { key: 'mi_thuat', name: 'Mĩ thuật' },
    { key: 'gdtc', name: 'Giáo dục thể chất' },
    { key: 'shcn', name: 'Sinh hoạt / Chào cờ' }
  ];

  var html = `
    <!-- KHUNG THÔNG TIN GIÁO VIÊN & NĂM HỌC TRONG MODAL -->
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 0.75rem; margin-bottom: 0.85rem;">
      <div style="font-size: 0.8rem; font-weight: 800; color: #1e293b; margin-bottom: 0.4rem;">
        <i class="fa-solid fa-user-pen" style="color: #db2777;"></i> Thông tin Giáo viên & Năm học xuất trên KHBD:
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 0.45rem;">
        <div>
          <label style="font-size: 0.72rem; font-weight: 700; color: #475569; display: block; margin-bottom: 2px;">Giáo viên:</label>
          <input type="text" id="modalTeacherNameInput" class="form-control" style="font-size: 0.78rem; padding: 3px 6px;" value="${integrationState.teacherName || ''}" placeholder="Họ và tên GV">
        </div>
        <div>
          <label style="font-size: 0.72rem; font-weight: 700; color: #475569; display: block; margin-bottom: 2px;">Năm học:</label>
          <input type="text" id="modalSchoolYearInput" class="form-control" style="font-size: 0.78rem; padding: 3px 6px;" value="${integrationState.schoolYear || '2026 - 2027'}" placeholder="2026 - 2027">
        </div>
        <div>
          <label style="font-size: 0.72rem; font-weight: 700; color: #475569; display: block; margin-bottom: 2px;">Lớp / Khối:</label>
          <input type="text" id="modalClassNameInput" class="form-control" style="font-size: 0.78rem; padding: 3px 6px;" value="${integrationState.className || ''}" placeholder="VD: Lớp 2^1">
        </div>
        <div>
          <label style="font-size: 0.72rem; font-weight: 700; color: #475569; display: block; margin-bottom: 2px;">Trường Tiểu học:</label>
          <input type="text" id="modalSchoolNameInput" class="form-control" style="font-size: 0.78rem; padding: 3px 6px;" value="${integrationState.schoolName || ''}" placeholder="Trường Tiểu học...">
        </div>
      </div>
    </div>

    <p style="font-size: 0.82rem; color: #64748b; margin-top: 0; margin-bottom: 0.85rem;">
      Tùy chỉnh các môn học cho từng buổi Sáng và Chiều từ Thứ Hai đến Thứ Sáu. Hệ thống sẽ căn cứ vào đây để sắp xếp toàn bộ bài dạy trong tuần.
    </p>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem; text-align: center;">
        <thead>
          <tr style="background: #f1f5f9; color: #334155;">
            <th style="padding: 6px; border: 1px solid #cbd5e1; width: 80px;">Tiết</th>
            <th style="padding: 6px; border: 1px solid #cbd5e1;">Thứ Hai</th>
            <th style="padding: 6px; border: 1px solid #cbd5e1;">Thứ Ba</th>
            <th style="padding: 6px; border: 1px solid #cbd5e1;">Thứ Tư</th>
            <th style="padding: 6px; border: 1px solid #cbd5e1;">Thứ Năm</th>
            <th style="padding: 6px; border: 1px solid #cbd5e1;">Thứ Sáu</th>
          </tr>
        </thead>
        <tbody>
          <!-- BUỔI SÁNG: 4 TIẾT -->
          <tr style="background: #fdf2f8; font-weight: bold; color: #db2777;">
            <td colspan="6" style="padding: 4px 8px; text-align: left; border: 1px solid #cbd5e1;">BUỔI SÁNG (4 Tiết)</td>
          </tr>
          ${[0, 1, 2, 3].map(function(slotIdx) {
            return `
              <tr>
                <td style="padding: 4px; border: 1px solid #cbd5e1; font-weight: bold; background: #fafafa;">Tiết ${slotIdx + 1}</td>
                ${timetable.map(function(dayItem, dayIdx) {
                  var curSubj = (dayItem.morning && dayItem.morning[slotIdx]) || '';
                  return `
                    <td style="padding: 3px; border: 1px solid #cbd5e1;">
                      <select id="tkb_m_${dayIdx}_${slotIdx}" class="form-select" style="font-size: 0.75rem; padding: 3px;">
                        <option value="">— (Trống / GV chuyên) —</option>
                        ${availableSubjects.map(function(s) {
                          return `<option value="${s.key}" ${s.key === curSubj ? 'selected' : ''}>${s.name}</option>`;
                        }).join('')}
                      </select>
                    </td>
                  `;
                }).join('')}
              </tr>
            `;
          }).join('')}

          <!-- BUỔI CHIỀU: 3 TIẾT -->
          <tr style="background: #eff6ff; font-weight: bold; color: #1e40af;">
            <td colspan="6" style="padding: 4px 8px; text-align: left; border: 1px solid #cbd5e1;">BUỔI CHIỀU (3 Tiết)</td>
          </tr>
          ${[0, 1, 2].map(function(slotIdx) {
            return `
              <tr>
                <td style="padding: 4px; border: 1px solid #cbd5e1; font-weight: bold; background: #fafafa;">Tiết ${slotIdx + 1}</td>
                ${timetable.map(function(dayItem, dayIdx) {
                  var curSubj = (dayItem.afternoon && dayItem.afternoon[slotIdx]) || '';
                  return `
                    <td style="padding: 3px; border: 1px solid #cbd5e1;">
                      <select id="tkb_a_${dayIdx}_${slotIdx}" class="form-select" style="font-size: 0.75rem; padding: 3px;">
                        <option value="">— (Trống / GV chuyên) —</option>
                        ${availableSubjects.map(function(s) {
                          return `<option value="${s.key}" ${s.key === curSubj ? 'selected' : ''}>${s.name}</option>`;
                        }).join('')}
                      </select>
                    </td>
                  `;
                }).join('')}
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;

  body.innerHTML = html;
  modal.style.display = 'flex';
}

function closeTimetableEditorModal() {
  var modal = document.getElementById('integTkbModal');
  if (modal) modal.style.display = 'none';
}

function saveCustomTimetableFromModal() {
  var curGrade = integrationState.grade || 5;
  var days = [
    { day: 'Thứ Hai', dayNum: 2, morning: [], afternoon: [] },
    { day: 'Thứ Ba', dayNum: 3, morning: [], afternoon: [] },
    { day: 'Thứ Tư', dayNum: 4, morning: [], afternoon: [] },
    { day: 'Thứ Năm', dayNum: 5, morning: [], afternoon: [] },
    { day: 'Thứ Sáu', dayNum: 6, morning: [], afternoon: [] }
  ];

  for (var dayIdx = 0; dayIdx < 5; dayIdx++) {
    for (var m = 0; m < 4; m++) {
      var sel = document.getElementById('tkb_m_' + dayIdx + '_' + m);
      days[dayIdx].morning.push(sel ? sel.value : '');
    }
    for (var a = 0; a < 3; a++) {
      var selA = document.getElementById('tkb_a_' + dayIdx + '_' + a);
      days[dayIdx].afternoon.push(selA ? selA.value : '');
    }
  }

  // Lưu thông tin Giáo viên, Năm học từ modal
  var mTeacher = document.getElementById('modalTeacherNameInput');
  if (mTeacher) {
    integrationState.teacherName = mTeacher.value.trim();
    try { localStorage.setItem('tvth_teacher_name', integrationState.teacherName); } catch(e){}
  }
  var mYear = document.getElementById('modalSchoolYearInput');
  if (mYear) {
    integrationState.schoolYear = mYear.value.trim();
    try { localStorage.setItem('tvth_school_year', integrationState.schoolYear); } catch(e){}
  }
  var mClass = document.getElementById('modalClassNameInput');
  if (mClass) {
    integrationState.className = mClass.value.trim();
    try { localStorage.setItem('tvth_class_name', integrationState.className); } catch(e){}
  }
  var mSchool = document.getElementById('modalSchoolNameInput');
  if (mSchool) {
    integrationState.schoolName = mSchool.value.trim();
    try { localStorage.setItem('tvth_school_name', integrationState.schoolName); } catch(e){}
  }

  integrationState.customTimetable = days;
  integrationState.customTimetableName = 'TKB Tùy chỉnh của Giáo viên';
  closeTimetableEditorModal();

  if (integrationState.activeStep === 3 && integrationState.exportMode === 'timetable') {
    triggerPreviewOriginalKhbd();
  } else {
    var container = document.getElementById('content-container');
    if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
      renderAiIntegrationView(container);
    }
  }
  showToast('Đã lưu Thời khóa biểu và thông tin Giáo viên!', 'success');
}

function resetTimetableToDefault() {
  integrationState.customTimetable = null;
  integrationState.customTimetableName = '';
  closeTimetableEditorModal();

  if (integrationState.activeStep === 3 && integrationState.exportMode === 'timetable') {
    triggerPreviewOriginalKhbd();
  } else {
    var container = document.getElementById('content-container');
    if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
      renderAiIntegrationView(container);
    }
  }
  showToast('Đã khôi phục Thời khóa biểu chuẩn Bộ GD&ĐT!', 'info');
}

async function downloadTimetableTemplate(grade) {
  var curGrade = parseInt(grade) || integrationState.grade || 5;
  showToast('Đang tạo tệp mẫu Thời khóa biểu Khối ' + curGrade + '...', 'info');

  try {
    // 1. Tự động nạp XLSX nếu chưa có
    if (typeof XLSX === 'undefined') {
      await new Promise(function(resolve, reject) {
        var script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
        script.onload = resolve;
        script.onerror = function() { reject(new Error('Không thể tải thư viện xuất Excel.')); };
        document.head.appendChild(script);
      });
    }

    // 2. Tự động nạp JSZip để tạo nút xổ xuống (Data Validation Dropdown)
    if (typeof JSZip === 'undefined') {
      try {
        await new Promise(function(resolve) {
          var script = document.createElement('script');
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
          script.onload = resolve;
          script.onerror = function() { resolve(); };
          document.head.appendChild(script);
        });
      } catch (e) {
        console.warn('JSZip load error:', e);
      }
    }

    var meta = {
      grade: curGrade,
      schoolName: integrationState.schoolName || '',
      schoolYear: integrationState.schoolYear || '2026 - 2027',
      className: integrationState.className || ('Lớp ' + curGrade + 'A'),
      teacherName: integrationState.teacherName || '',
      timetable: integrationState.customTimetable || null
    };

    var blob = await IntegrationService.exportTimetableTemplate(curGrade, meta);
    var fileName = 'Mau_Thoi_Khoa_Bieu_Khoi_' + curGrade + '.xlsx';

    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
      if (a.parentNode) a.parentNode.removeChild(a);
      URL.revokeObjectURL(url);
    }, 300);

    showToast('Đã tải xuống thành công mẫu TKB Khối ' + curGrade + ' (có nút xổ xuống chọn môn)!', 'success');
  } catch (err) {
    console.error('Download timetable template error:', err);
    showToast(err.message || 'Lỗi khi tạo tệp mẫu Thời khóa biểu', 'danger');
  }
}

async function handleTimetableFileUpload(input) {
  var file = (input.files && input.files[0]) ? input.files[0] : null;
  if (!file) return;

  showToast('Đang nhận diện Thời khóa biểu từ tệp ' + file.name + '...', 'info');

  try {
    var curGrade = integrationState.grade || 5;
    var result = await IntegrationService.parseTimetableFile(file, curGrade);
    
    if (result && result.timetable) {
      integrationState.customTimetable = result.timetable;
      integrationState.customTimetableName = file.name;

      if (result.metadata) {
        if (result.metadata.teacherName) {
          integrationState.teacherName = result.metadata.teacherName;
          try { localStorage.setItem('tvth_teacher_name', result.metadata.teacherName); } catch(e){}
        }
        if (result.metadata.schoolYear) {
          integrationState.schoolYear = result.metadata.schoolYear;
          try { localStorage.setItem('tvth_school_year', result.metadata.schoolYear); } catch(e){}
        }
        if (result.metadata.schoolName) {
          integrationState.schoolName = result.metadata.schoolName;
          try { localStorage.setItem('tvth_school_name', result.metadata.schoolName); } catch(e){}
        }
        if (result.metadata.className) {
          integrationState.className = result.metadata.className;
          try { localStorage.setItem('tvth_class_name', result.metadata.className); } catch(e){}
        }
        if (result.metadata.grade && result.metadata.grade >= 1 && result.metadata.grade <= 5) {
          integrationState.grade = result.metadata.grade;
        }
      }

      var container = document.getElementById('content-container');
      if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
        renderAiIntegrationView(container);
      }

      var infoSummary = [];
      if (integrationState.teacherName) infoSummary.push('GV: ' + integrationState.teacherName);
      if (integrationState.schoolYear) infoSummary.push('NH: ' + integrationState.schoolYear);
      if (integrationState.className) infoSummary.push(integrationState.className);

      var summaryText = infoSummary.length > 0 ? (' (' + infoSummary.join(', ') + ')') : '';
      showToast('Đã nhận diện thành công Thời khóa biểu từ "' + file.name + '"' + summaryText + '! Hãy kiểm tra lại bảng TKB.', 'success');
      
      // Tự động mở bảng TKB để giáo viên xem lại và xác nhận
      setTimeout(function() {
        openTimetableEditorModal();
      }, 400);
    } else {
      throw new Error('Không nhận diện được cấu trúc bảng trong tệp.');
    }
  } catch (err) {
    console.error('Timetable upload error:', err);
    showToast(err.message || 'Lỗi khi đọc tệp Thời khóa biểu', 'danger');
  } finally {
    input.value = ''; // Reset input
  }
}

// ===========================================================================
// XỬ LÝ LỊCH DẠY / THỜI KHÓA BIỂU CHO GIÁO VIÊN BỘ MÔN (ĐA KHỐI)
// ===========================================================================

function setIntegrationTimetableRole(role) {
  integrationState.timetableRole = role;
  try {
    localStorage.setItem('tvth_timetable_role', role);
  } catch (e) {}
  integrationState.activeStep = 1;
  integrationState.timetableAppliedWeeks = null;
  integrationState.appliedLessons = null;
  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
}

function onGvbmSubjectChange(val) {
  if (!integrationState.gvbmConfig) integrationState.gvbmConfig = {};
  integrationState.gvbmConfig.subjectKey = val;
  try {
    localStorage.setItem('tvth_gvbm_subject', val);
  } catch (e) {}

  var isDefaultSchedule = !integrationState.gvbmConfig.hasCustomSchedule;
  if (isDefaultSchedule && typeof IntegrationService !== 'undefined' && IntegrationService.getDefaultTeacherSchedule) {
    integrationState.gvbmConfig.schedule = IntegrationService.getDefaultTeacherSchedule(val);
    try {
      localStorage.setItem('tvth_gvbm_schedule', JSON.stringify(integrationState.gvbmConfig.schedule));
    } catch (e) {}
  }

  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
}

function toggleGvbmMultiSubject(checked) {
  if (!integrationState.gvbmConfig) integrationState.gvbmConfig = {};
  integrationState.gvbmConfig.isMultiSubject = !!checked;
  try {
    localStorage.setItem('tvth_gvbm_multi_subj', checked ? '1' : '0');
  } catch (e) {}
  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
}

function onGvbmFieldChange(field, val) {
  if (!integrationState.gvbmConfig) integrationState.gvbmConfig = {};
  integrationState.gvbmConfig[field] = val;
  try {
    var keyMap = {
      teacherName: 'tvth_gvbm_teacher_name',
      department: 'tvth_gvbm_department',
      schoolYear: 'tvth_gvbm_school_year',
      schoolName: 'tvth_gvbm_school_name'
    };
    if (keyMap[field]) {
      localStorage.setItem(keyMap[field], val);
    }
  } catch (e) {}
}

function getAvailableSubjectsForGrade(grade) {
  var g = parseInt(grade) || 5;
  var list = [
    { key: 'am_nhac', name: 'Âm nhạc' },
    { key: 'my_thuat', name: 'Mĩ thuật' },
    { key: 'gdtc', name: 'Giáo dục thể chất' },
    { key: 'dao_duc', name: 'Đạo đức' },
    { key: 'tieng_anh', name: 'Tiếng Anh' },
    { key: 'tin_hoc', name: 'Tin học' }
  ];
  if (g >= 3) {
    list.push({ key: 'cong_nghe', name: 'Công nghệ' });
  }
  if (g <= 3) {
    list.push({ key: 'tnxh', name: 'Tự nhiên & Xã hội' });
  } else {
    list.push({ key: 'khoa_hoc', name: 'Khoa học' });
    list.push({ key: 'lich_su_dia_ly', name: 'Lịch sử & Địa lí' });
  }
  list.push({ key: 'hdtn', name: 'Hoạt động trải nghiệm' });
  list.push({ key: 'toan', name: 'Toán' });
  list.push({ key: 'tieng_viet', name: 'Tiếng Việt' });
  return list;
}

function addGvbmAssignmentRow() {
  if (!integrationState.gvbmAssignments) {
    integrationState.gvbmAssignments = [];
  }
  var newId = Date.now();
  var nextGrade = 4;
  var existingGrades = integrationState.gvbmAssignments.map(function(a){ return a.grade; });
  for (var g = 1; g <= 5; g++) {
    if (!existingGrades.includes(g)) { nextGrade = g; break; }
  }
  integrationState.gvbmAssignments.push({
    id: newId,
    grade: nextGrade,
    subjectKey: 'am_nhac',
    classes: nextGrade + 'A, ' + nextGrade + 'B',
    periodsPerWeek: 2
  });
  try {
    localStorage.setItem('tvth_gvbm_assignments', JSON.stringify(integrationState.gvbmAssignments));
  } catch(e){}
  
  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
  showToast('Đã thêm 1 hàng phân công chuyên môn mới!', 'info');
}

function removeGvbmAssignmentRow(id) {
  if (!integrationState.gvbmAssignments) return;
  if (integrationState.gvbmAssignments.length <= 1) {
    showToast('Cần giữ lại ít nhất 1 hàng phân công giảng dạy!', 'warning');
    return;
  }
  integrationState.gvbmAssignments = integrationState.gvbmAssignments.filter(function(item) {
    return String(item.id) !== String(id);
  });
  try {
    localStorage.setItem('tvth_gvbm_assignments', JSON.stringify(integrationState.gvbmAssignments));
  } catch(e){}

  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
  showToast('Đã xóa hàng phân công!', 'info');
}

function updateGvbmAssignmentRow(id, field, value) {
  if (!integrationState.gvbmAssignments) return;
  var item = integrationState.gvbmAssignments.find(function(it) {
    return String(it.id) === String(id);
  });
  if (!item) return;

  if (field === 'grade') {
    item.grade = parseInt(value) || 1;
    var subjs = getAvailableSubjectsForGrade(item.grade);
    if (!subjs.some(function(s){ return s.key === item.subjectKey; })) {
      item.subjectKey = subjs[0].key;
    }
  } else if (field === 'subjectKey') {
    item.subjectKey = value;
  } else if (field === 'classes') {
    item.classes = value;
  } else if (field === 'periodsPerWeek') {
    item.periodsPerWeek = parseInt(value) || 1;
  }

  try {
    localStorage.setItem('tvth_gvbm_assignments', JSON.stringify(integrationState.gvbmAssignments));
  } catch(e){}

  if (field === 'grade') {
    var container = document.getElementById('content-container');
    if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
      renderAiIntegrationView(container);
    }
  } else {
    var badge = document.getElementById('gvbmTotalPeriodsBadge');
    if (badge) {
      var totalP = 0;
      integrationState.gvbmAssignments.forEach(function(a){ totalP += (parseInt(a.periodsPerWeek) || 1); });
      badge.textContent = totalP + ' tiết/tuần (' + integrationState.gvbmAssignments.length + ' môn)';
    }
  }
}

function loadSampleGvbmAssignments(presetType) {
  var preset = [];
  if (presetType === 'music') {
    preset = [
      { id: 1, grade: 1, subjectKey: 'am_nhac', classes: '1A, 1B, 1C', periodsPerWeek: 3 },
      { id: 2, grade: 2, subjectKey: 'am_nhac', classes: '2A, 2B, 2C', periodsPerWeek: 3 },
      { id: 3, grade: 3, subjectKey: 'am_nhac', classes: '3A, 3B, 3C', periodsPerWeek: 3 },
      { id: 4, grade: 4, subjectKey: 'am_nhac', classes: '4A, 4B, 4C, 4D', periodsPerWeek: 4 },
      { id: 5, grade: 5, subjectKey: 'am_nhac', classes: '5A, 5B, 5C, 5D', periodsPerWeek: 4 }
    ];
  } else if (presetType === 'pe') {
    preset = [
      { id: 1, grade: 1, subjectKey: 'gdtc', classes: '1A, 1B', periodsPerWeek: 4 },
      { id: 2, grade: 2, subjectKey: 'gdtc', classes: '2A, 2B', periodsPerWeek: 4 },
      { id: 3, grade: 3, subjectKey: 'gdtc', classes: '3A, 3B', periodsPerWeek: 4 },
      { id: 4, grade: 4, subjectKey: 'gdtc', classes: '4A, 4B', periodsPerWeek: 4 },
      { id: 5, grade: 5, subjectKey: 'gdtc', classes: '5A, 5B', periodsPerWeek: 4 }
    ];
  } else if (presetType === 'tech') {
    preset = [
      { id: 1, grade: 3, subjectKey: 'cong_nghe', classes: '3A, 3B, 3C', periodsPerWeek: 3 },
      { id: 2, grade: 4, subjectKey: 'cong_nghe', classes: '4A, 4B, 4C', periodsPerWeek: 3 },
      { id: 3, grade: 5, subjectKey: 'cong_nghe', classes: '5A, 5B, 5C', periodsPerWeek: 3 },
      { id: 4, grade: 3, subjectKey: 'tin_hoc', classes: '3A, 3B, 3C', periodsPerWeek: 3 },
      { id: 5, grade: 4, subjectKey: 'tin_hoc', classes: '4A, 4B, 4C', periodsPerWeek: 3 },
      { id: 6, grade: 5, subjectKey: 'tin_hoc', classes: '5A, 5B, 5C', periodsPerWeek: 3 }
    ];
  } else {
    preset = [
      { id: 1, grade: 4, subjectKey: 'am_nhac', classes: '4A, 4B, 4C, 4D', periodsPerWeek: 4 },
      { id: 2, grade: 5, subjectKey: 'am_nhac', classes: '5A, 5B, 5C', periodsPerWeek: 3 },
      { id: 3, grade: 3, subjectKey: 'cong_nghe', classes: '3A, 3B, 3C', periodsPerWeek: 3 },
      { id: 4, grade: 2, subjectKey: 'gdtc', classes: '2A, 2B', periodsPerWeek: 4 },
      { id: 5, grade: 1, subjectKey: 'my_thuat', classes: '1A, 1B, 1C', periodsPerWeek: 3 }
    ];
  }

  integrationState.gvbmAssignments = preset;
  try {
    localStorage.setItem('tvth_gvbm_assignments', JSON.stringify(preset));
  } catch(e){}

  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
  showToast('Đã nạp mẫu phân công chuyên môn thành công!', 'success');
}

function getGvbmTotalSlots(schedule) {
  if (!Array.isArray(schedule)) return 0;
  var count = 0;
  schedule.forEach(function(dayItem) {
    ['morning', 'afternoon'].forEach(function(sess) {
      if (Array.isArray(dayItem[sess])) {
        dayItem[sess].forEach(function(slot) {
          if (!slot) return;
          var cls = typeof slot === 'string' ? slot.trim() : (slot.className || '').trim();
          if (cls) count++;
        });
      }
    });
  });
  return count;
}

function getGvbmGradesCovered(schedule) {
  if (!Array.isArray(schedule)) return [];
  var grades = {};
  schedule.forEach(function(dayItem) {
    ['morning', 'afternoon'].forEach(function(sess) {
      if (Array.isArray(dayItem[sess])) {
        dayItem[sess].forEach(function(slot) {
          if (!slot) return;
          var cls = typeof slot === 'string' ? slot.trim() : (slot.className || '').trim();
          if (cls && typeof IntegrationService !== 'undefined' && IntegrationService.parseClassGrade) {
            var g = IntegrationService.parseClassGrade(cls);
            if (g) grades[g] = true;
          }
        });
      }
    });
  });
  return Object.keys(grades).map(Number).sort();
}

function openGvbmScheduleModal() {
  var modal = document.getElementById('integGvbmScheduleModal');
  var body = document.getElementById('integGvbmScheduleModalBody');
  if (!modal || !body) return;

  var cfg = integrationState.gvbmConfig || {};
  var defSubj = cfg.subjectKey || 'am_nhac';
  var schedule = cfg.schedule || (typeof IntegrationService !== 'undefined' && IntegrationService.getDefaultTeacherSchedule ? IntegrationService.getDefaultTeacherSchedule(defSubj) : []);
  var isMulti = !!cfg.isMultiSubject;

  var availableSubjects = [
    { key: 'am_nhac', name: 'Âm nhạc' },
    { key: 'my_thuat', name: 'Mĩ thuật' },
    { key: 'tin_hoc', name: 'Tin học' },
    { key: 'tieng_anh', name: 'Tiếng Anh' },
    { key: 'gdtc', name: 'Giáo dục thể chất' },
    { key: 'cong_nghe', name: 'Công nghệ' },
    { key: 'dao_duc', name: 'Đạo đức' },
    { key: 'khoa_hoc', name: 'Khoa học' },
    { key: 'lich_su_dia_ly', name: 'Lịch sử & Địa lí' },
    { key: 'toan', name: 'Toán' },
    { key: 'tieng_viet', name: 'Tiếng Việt' },
    { key: 'hdtn', name: 'Hoạt động trải nghiệm' }
  ];

  var html = `
    <!-- KHUNG THÔNG TIN GIÁO VIÊN BỘ MÔN TRONG MODAL -->
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 0.75rem; margin-bottom: 0.85rem;">
      <div style="font-size: 0.8rem; font-weight: 800; color: #1e293b; margin-bottom: 0.4rem;">
        <i class="fa-solid fa-user-pen" style="color: #0284c7;"></i> Thông tin Giáo viên Bộ môn & Năm học (In trên bìa KHBD):
      </div>
      <div style="display: grid; grid-template-columns: 1.2fr 1fr 1fr 1.2fr; gap: 0.45rem; margin-bottom: 0.5rem;">
        <div>
          <label style="font-size: 0.72rem; font-weight: 700; color: #475569; display: block; margin-bottom: 2px;">Giáo viên:</label>
          <input type="text" id="modalGvbmTeacherName" class="form-control" style="font-size: 0.78rem; padding: 4px 6px;" value="${cfg.teacherName || ''}" placeholder="Họ và tên GV bộ môn">
        </div>
        <div>
          <label style="font-size: 0.72rem; font-weight: 700; color: #475569; display: block; margin-bottom: 2px;">Tổ chuyên môn:</label>
          <input type="text" id="modalGvbmDepartment" class="form-control" style="font-size: 0.78rem; padding: 4px 6px;" value="${cfg.department || 'Tổ Chuyên biệt / Bộ môn'}" placeholder="Tổ Bộ môn">
        </div>
        <div>
          <label style="font-size: 0.72rem; font-weight: 700; color: #475569; display: block; margin-bottom: 2px;">Năm học:</label>
          <input type="text" id="modalGvbmSchoolYear" class="form-control" style="font-size: 0.78rem; padding: 4px 6px;" value="${cfg.schoolYear || '2026 - 2027'}" placeholder="2026 - 2027">
        </div>
        <div>
          <label style="font-size: 0.72rem; font-weight: 700; color: #475569; display: block; margin-bottom: 2px;">Trường Tiểu học:</label>
          <input type="text" id="modalGvbmSchoolName" class="form-control" style="font-size: 0.78rem; padding: 4px 6px;" value="${cfg.schoolName || ''}" placeholder="Trường Tiểu học...">
        </div>
      </div>
      <div style="display: flex; gap: 1rem; align-items: center; border-top: 1px dashed #e2e8f0; padding-top: 0.4rem; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 0.4rem;">
          <label style="font-size: 0.72rem; font-weight: 700; color: #475569; margin: 0;">Môn chuyên trách:</label>
          <select id="modalGvbmSubject" class="form-select" style="font-size: 0.75rem; padding: 3px 6px; width: auto; font-weight: 700;">
            ${availableSubjects.map(function(s) {
              return `<option value="${s.key}" ${s.key === defSubj ? 'selected' : ''}>${s.name}</option>`;
            }).join('')}
          </select>
        </div>
        <div style="display: flex; align-items: center; gap: 0.35rem;">
          <input type="checkbox" id="modalGvbmMultiCheck" style="width: 15px; height: 15px; accent-color: #0284c7; cursor: pointer;" ${isMulti ? 'checked' : ''} onchange="onModalGvbmMultiToggle(this.checked)">
          <label for="modalGvbmMultiCheck" style="font-size: 0.74rem; font-weight: 600; color: #334155; margin: 0; cursor: pointer;">
            Dạy nhiều môn (Kiêm nhiệm)
          </label>
        </div>
      </div>
    </div>

    <!-- HƯỚNG DẪN NHẬP LỊCH -->
    <div style="background: #e0f2fe; border: 1px solid #bae6fd; border-radius: 6px; padding: 0.55rem 0.75rem; margin-bottom: 0.85rem; font-size: 0.76rem; color: #0369a1; line-height: 1.45; display: flex; align-items: center; justify-content: space-between;">
      <div>
        <i class="fa-solid fa-circle-info"></i> <strong>Hướng dẫn:</strong> Nhập tên lớp vào từng tiết dạy (VD: <code>1A</code>, <code>2B</code>, <code>3C</code>, <code>4A</code>, <code>5B</code>...). Ô để trống là tiết không có lịch dạy. Hệ thống tự động trích xuất đúng Khối lớp tương ứng.
      </div>
      <span style="font-weight: 800; white-space: nowrap; color: #0284c7; margin-left: 0.5rem;" id="modalGvbmSlotCounterBadge">
        Tổng: ${getGvbmTotalSlots(schedule)} tiết
      </span>
    </div>

    <!-- BẢNG LỊCH 5 NGÀY x 7 TIẾT -->
    <div style="overflow-x: auto;">
      <datalist id="gvbmClassSuggestions">
        <option value="1A"></option><option value="1B"></option><option value="1C"></option><option value="1D"></option>
        <option value="2A"></option><option value="2B"></option><option value="2C"></option><option value="2D"></option>
        <option value="3A"></option><option value="3B"></option><option value="3C"></option><option value="3D"></option>
        <option value="4A"></option><option value="4B"></option><option value="4C"></option><option value="4D"></option>
        <option value="5A"></option><option value="5B"></option><option value="5C"></option><option value="5D"></option>
      </datalist>

      <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem; text-align: center;">
        <thead>
          <tr style="background: #f1f5f9; color: #334155;">
            <th style="padding: 6px; border: 1px solid #cbd5e1; width: 90px;">Tiết</th>
            <th style="padding: 6px; border: 1px solid #cbd5e1;">Thứ Hai</th>
            <th style="padding: 6px; border: 1px solid #cbd5e1;">Thứ Ba</th>
            <th style="padding: 6px; border: 1px solid #cbd5e1;">Thứ Tư</th>
            <th style="padding: 6px; border: 1px solid #cbd5e1;">Thứ Năm</th>
            <th style="padding: 6px; border: 1px solid #cbd5e1;">Thứ Sáu</th>
          </tr>
        </thead>
        <tbody>
          <!-- BUỔI SÁNG: 4 TIẾT -->
          <tr style="background: #fdf2f8; font-weight: bold; color: #db2777;">
            <td colspan="6" style="padding: 4px 8px; text-align: left; border: 1px solid #cbd5e1;">
              <i class="fa-solid fa-sun" style="color: #f59e0b;"></i> BUỔI SÁNG (4 Tiết)
            </td>
          </tr>
          ${[0, 1, 2, 3].map(function(slotIdx) {
            return `
              <tr>
                <td style="padding: 4px; border: 1px solid #cbd5e1; font-weight: bold; background: #fafafa; font-size: 0.78rem;">
                  Tiết ${slotIdx + 1}
                </td>
                ${[0, 1, 2, 3, 4].map(function(dayIdx) {
                  var dayItem = schedule[dayIdx] || { morning: [] };
                  var slotRaw = (dayItem.morning && dayItem.morning[slotIdx]) || '';
                  var norm = IntegrationService.normalizeGvbmSlot(slotRaw, defSubj);
                  var clsVal = norm ? norm.className : '';
                  var sKey = norm ? norm.subjectKey : defSubj;

                  return `
                    <td style="padding: 3px; border: 1px solid #cbd5e1; vertical-align: middle;">
                      <input type="text" id="gvbm_cell_cls_m_${dayIdx}_${slotIdx}" list="gvbmClassSuggestions" 
                             class="form-control" style="font-size: 0.76rem; padding: 3px 6px; text-align: center; font-weight: 700; ${clsVal ? 'background: #f0fdf4; border-color: #86efac; color: #166534;' : ''}" 
                             placeholder="—" value="${clsVal}" onchange="updateModalGvbmSlotCount()">
                      <div class="gvbm-multi-subj-select-wrap" style="display: ${isMulti ? 'block' : 'none'}; margin-top: 2px;">
                        <select id="gvbm_cell_subj_m_${dayIdx}_${slotIdx}" class="form-select" style="font-size: 0.68rem; padding: 1px 3px; height: auto;">
                          ${availableSubjects.map(function(s) {
                            return `<option value="${s.key}" ${s.key === sKey ? 'selected' : ''}>${s.name}</option>`;
                          }).join('')}
                        </select>
                      </div>
                    </td>
                  `;
                }).join('')}
              </tr>
            `;
          }).join('')}

          <!-- BUỔI CHIỀU: 3 TIẾT -->
          <tr style="background: #eff6ff; font-weight: bold; color: #1e40af;">
            <td colspan="6" style="padding: 4px 8px; text-align: left; border: 1px solid #cbd5e1;">
              <i class="fa-solid fa-cloud-sun" style="color: #0284c7;"></i> BUỔI CHIỀU (3 Tiết)
            </td>
          </tr>
          ${[0, 1, 2].map(function(slotIdx) {
            return `
              <tr>
                <td style="padding: 4px; border: 1px solid #cbd5e1; font-weight: bold; background: #fafafa; font-size: 0.78rem;">
                  Tiết ${slotIdx + 1}
                </td>
                ${[0, 1, 2, 3, 4].map(function(dayIdx) {
                  var dayItem = schedule[dayIdx] || { afternoon: [] };
                  var slotRaw = (dayItem.afternoon && dayItem.afternoon[slotIdx]) || '';
                  var norm = IntegrationService.normalizeGvbmSlot(slotRaw, defSubj);
                  var clsVal = norm ? norm.className : '';
                  var sKey = norm ? norm.subjectKey : defSubj;

                  return `
                    <td style="padding: 3px; border: 1px solid #cbd5e1; vertical-align: middle;">
                      <input type="text" id="gvbm_cell_cls_a_${dayIdx}_${slotIdx}" list="gvbmClassSuggestions" 
                             class="form-control" style="font-size: 0.76rem; padding: 3px 6px; text-align: center; font-weight: 700; ${clsVal ? 'background: #f0fdf4; border-color: #86efac; color: #166534;' : ''}" 
                             placeholder="—" value="${clsVal}" onchange="updateModalGvbmSlotCount()">
                      <div class="gvbm-multi-subj-select-wrap" style="display: ${isMulti ? 'block' : 'none'}; margin-top: 2px;">
                        <select id="gvbm_cell_subj_a_${dayIdx}_${slotIdx}" class="form-select" style="font-size: 0.68rem; padding: 1px 3px; height: auto;">
                          ${availableSubjects.map(function(s) {
                            return `<option value="${s.key}" ${s.key === sKey ? 'selected' : ''}>${s.name}</option>`;
                          }).join('')}
                        </select>
                      </div>
                    </td>
                  `;
                }).join('')}
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;

  body.innerHTML = html;
  modal.style.display = 'flex';
}

function closeGvbmScheduleModal() {
  var modal = document.getElementById('integGvbmScheduleModal');
  if (modal) modal.style.display = 'none';
}

function onModalGvbmMultiToggle(checked) {
  var wraps = document.querySelectorAll('.gvbm-multi-subj-select-wrap');
  wraps.forEach(function(el) {
    el.style.display = checked ? 'block' : 'none';
  });
}

function updateModalGvbmSlotCount() {
  var count = 0;
  for (var dayIdx = 0; dayIdx < 5; dayIdx++) {
    for (var m = 0; m < 4; m++) {
      var el = document.getElementById('gvbm_cell_cls_m_' + dayIdx + '_' + m);
      if (el && el.value.trim()) count++;
    }
    for (var a = 0; a < 3; a++) {
      var elA = document.getElementById('gvbm_cell_cls_a_' + dayIdx + '_' + a);
      if (elA && elA.value.trim()) count++;
    }
  }
  var badge = document.getElementById('modalGvbmSlotCounterBadge');
  if (badge) badge.textContent = 'Tổng: ' + count + ' tiết';
}

function saveGvbmScheduleFromModal() {
  var mTeacher = document.getElementById('modalGvbmTeacherName');
  if (mTeacher) onGvbmFieldChange('teacherName', mTeacher.value.trim());
  var mDept = document.getElementById('modalGvbmDepartment');
  if (mDept) onGvbmFieldChange('department', mDept.value.trim());
  var mYear = document.getElementById('modalGvbmSchoolYear');
  if (mYear) onGvbmFieldChange('schoolYear', mYear.value.trim());
  var mSchool = document.getElementById('modalGvbmSchoolName');
  if (mSchool) onGvbmFieldChange('schoolName', mSchool.value.trim());
  var mSubj = document.getElementById('modalGvbmSubject');
  if (mSubj) {
    integrationState.gvbmConfig.subjectKey = mSubj.value;
    try { localStorage.setItem('tvth_gvbm_subject', mSubj.value); } catch(e){}
  }
  var mMulti = document.getElementById('modalGvbmMultiCheck');
  if (mMulti) {
    integrationState.gvbmConfig.isMultiSubject = mMulti.checked;
    try { localStorage.setItem('tvth_gvbm_multi_subj', mMulti.checked ? '1' : '0'); } catch(e){}
  }

  var isMulti = integrationState.gvbmConfig.isMultiSubject;
  var defSubj = integrationState.gvbmConfig.subjectKey || 'am_nhac';

  var days = [
    { day: 'Thứ Hai', dayNum: 2, morning: [], afternoon: [] },
    { day: 'Thứ Ba', dayNum: 3, morning: [], afternoon: [] },
    { day: 'Thứ Tư', dayNum: 4, morning: [], afternoon: [] },
    { day: 'Thứ Năm', dayNum: 5, morning: [], afternoon: [] },
    { day: 'Thứ Sáu', dayNum: 6, morning: [], afternoon: [] }
  ];

  for (var dayIdx = 0; dayIdx < 5; dayIdx++) {
    for (var m = 0; m < 4; m++) {
      var clsEl = document.getElementById('gvbm_cell_cls_m_' + dayIdx + '_' + m);
      var clsVal = clsEl ? clsEl.value.trim() : '';
      if (!clsVal) {
        days[dayIdx].morning.push('');
      } else if (!isMulti) {
        days[dayIdx].morning.push(clsVal);
      } else {
        var sEl = document.getElementById('gvbm_cell_subj_m_' + dayIdx + '_' + m);
        var sVal = (sEl && sEl.value) ? sEl.value : defSubj;
        days[dayIdx].morning.push({ className: clsVal, subjectKey: sVal });
      }
    }
    for (var a = 0; a < 3; a++) {
      var clsElA = document.getElementById('gvbm_cell_cls_a_' + dayIdx + '_' + a);
      var clsValA = clsElA ? clsElA.value.trim() : '';
      if (!clsValA) {
        days[dayIdx].afternoon.push('');
      } else if (!isMulti) {
        days[dayIdx].afternoon.push(clsValA);
      } else {
        var sElA = document.getElementById('gvbm_cell_subj_a_' + dayIdx + '_' + a);
        var sValA = (sElA && sElA.value) ? sElA.value : defSubj;
        days[dayIdx].afternoon.push({ className: clsValA, subjectKey: sValA });
      }
    }
  }

  integrationState.gvbmConfig.schedule = days;
  integrationState.gvbmConfig.hasCustomSchedule = true;
  try {
    localStorage.setItem('tvth_gvbm_schedule', JSON.stringify(days));
  } catch(e){}

  closeGvbmScheduleModal();

  if (integrationState.activeStep === 3 && integrationState.exportMode === 'timetable' && isGvbmRole(integrationState.timetableRole)) {
    triggerPreviewOriginalKhbd();
  } else {
    var container = document.getElementById('content-container');
    if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
      renderAiIntegrationView(container);
    }
  }
  showToast('Đã lưu Lịch lên lớp và thông tin Giáo viên Bộ môn!', 'success');
}

function clearGvbmScheduleInModal() {
  for (var dayIdx = 0; dayIdx < 5; dayIdx++) {
    for (var m = 0; m < 4; m++) {
      var el = document.getElementById('gvbm_cell_cls_m_' + dayIdx + '_' + m);
      if (el) { el.value = ''; el.style.background = ''; el.style.borderColor = ''; }
    }
    for (var a = 0; a < 3; a++) {
      var elA = document.getElementById('gvbm_cell_cls_a_' + dayIdx + '_' + a);
      if (elA) { elA.value = ''; elA.style.background = ''; elA.style.borderColor = ''; }
    }
  }
  updateModalGvbmSlotCount();
  showToast('Đã làm trống toàn bộ bảng lịch!', 'info');
}

function fillSampleGvbmScheduleInModal() {
  var defSubj = (integrationState.gvbmConfig && integrationState.gvbmConfig.subjectKey) || 'am_nhac';
  var sample = IntegrationService.getDefaultTeacherSchedule(defSubj);
  for (var dayIdx = 0; dayIdx < 5; dayIdx++) {
    var dayData = sample[dayIdx] || { morning: [], afternoon: [] };
    for (var m = 0; m < 4; m++) {
      var el = document.getElementById('gvbm_cell_cls_m_' + dayIdx + '_' + m);
      var val = (dayData.morning && dayData.morning[m]) || '';
      if (el) {
        el.value = typeof val === 'string' ? val : (val.className || '');
        if (el.value) {
          el.style.background = '#f0fdf4';
          el.style.borderColor = '#86efac';
        }
      }
    }
    for (var a = 0; a < 3; a++) {
      var elA = document.getElementById('gvbm_cell_cls_a_' + dayIdx + '_' + a);
      var valA = (dayData.afternoon && dayData.afternoon[a]) || '';
      if (elA) {
        elA.value = typeof valA === 'string' ? valA : (valA.className || '');
        if (elA.value) {
          elA.style.background = '#f0fdf4';
          elA.style.borderColor = '#86efac';
        }
      }
    }
  }
  updateModalGvbmSlotCount();
  showToast('Đã nạp lịch dạy mẫu 18 tiết (trải đều Khối 1 - 5)!', 'success');
}

function resetGvbmScheduleToDefault() {
  var defSubj = (integrationState.gvbmConfig && integrationState.gvbmConfig.subjectKey) || 'am_nhac';
  integrationState.gvbmConfig.schedule = IntegrationService.getDefaultTeacherSchedule(defSubj);
  integrationState.gvbmConfig.hasCustomSchedule = false;
  try {
    localStorage.setItem('tvth_gvbm_schedule', JSON.stringify(integrationState.gvbmConfig.schedule));
  } catch(e){}

  closeGvbmScheduleModal();

  if (integrationState.activeStep === 3 && integrationState.exportMode === 'timetable' && isGvbmRole(integrationState.timetableRole)) {
    triggerPreviewOriginalKhbd();
  } else {
    var container = document.getElementById('content-container');
    if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
      renderAiIntegrationView(container);
    }
  }
  showToast('Đã khôi phục Lịch lên lớp mẫu chuẩn 18 tiết!', 'info');
}

async function handleGvbmScheduleFileUpload(input) {
  var file = (input.files && input.files[0]) ? input.files[0] : null;
  if (!file) return;

  showToast('Đang nhận diện Lịch dạy từ tệp ' + file.name + '...', 'info');

  try {
    var result = await IntegrationService.parseTimetableFile(file, 5);
    
    if (result && result.timetable) {
      var newSchedule = [
        { day: 'Thứ Hai', dayNum: 2, morning: [], afternoon: [] },
        { day: 'Thứ Ba', dayNum: 3, morning: [], afternoon: [] },
        { day: 'Thứ Tư', dayNum: 4, morning: [], afternoon: [] },
        { day: 'Thứ Năm', dayNum: 5, morning: [], afternoon: [] },
        { day: 'Thứ Sáu', dayNum: 6, morning: [], afternoon: [] }
      ];

      result.timetable.forEach(function(dayItem, dayIdx) {
        if (dayIdx < 5) {
          (dayItem.morning || []).forEach(function(slot) {
            newSchedule[dayIdx].morning.push(slot || '');
          });
          (dayItem.afternoon || []).forEach(function(slot) {
            newSchedule[dayIdx].afternoon.push(slot || '');
          });
        }
      });

      integrationState.gvbmConfig.schedule = newSchedule;
      integrationState.gvbmConfig.hasCustomSchedule = true;
      try {
        localStorage.setItem('tvth_gvbm_schedule', JSON.stringify(newSchedule));
      } catch(e){}

      if (result.metadata) {
        if (result.metadata.teacherName) onGvbmFieldChange('teacherName', result.metadata.teacherName);
        if (result.metadata.schoolYear) onGvbmFieldChange('schoolYear', result.metadata.schoolYear);
        if (result.metadata.schoolName) onGvbmFieldChange('schoolName', result.metadata.schoolName);
      }

      var container = document.getElementById('content-container');
      if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
        renderAiIntegrationView(container);
      }

      showToast('Đã nạp lịch dạy từ "' + file.name + '"! Hãy kiểm tra lại bảng lịch.', 'success');
      setTimeout(function() {
        openGvbmScheduleModal();
      }, 400);
    } else {
      throw new Error('Không nhận diện được cấu trúc bảng trong tệp.');
    }
  } catch (err) {
    console.error('Schedule upload error:', err);
    showToast(err.message || 'Lỗi khi đọc tệp Lịch dạy', 'danger');
  } finally {
    input.value = '';
  }
}

// ===========================================================================
// XEM TRƯỚC KHBD GỐC (PREVIEW ORIGINAL KHBD - CHUẨN CV 2345)
// ===========================================================================

async function triggerPreviewOriginalKhbd() {
  var isTimetableMode = (integrationState.exportMode === 'timetable');
  var isGvbm = isTimetableMode && isGvbmRole(integrationState.timetableRole);
  var grade = integrationState.grade || 5;
  var sWeek = integrationState.startWeek || 1;
  var eWeek = integrationState.endWeek || sWeek;
  var count = eWeek - sWeek + 1;

  var btn = document.getElementById('btnPreviewOriginalKhbd');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang tải dữ liệu ' + count + ' tuần...';
  }

  try {
    if (isTimetableMode) {
      var weeksList = [];
      for (var w = sWeek; w <= eWeek; w++) {
        var weeklyPlan;
        if (isGvbm) {
          var cfg = integrationState.gvbmConfig || {};
          var gvbmMeta = {
            role: 'gvbm',
            isAssignmentMode: true,
            week: w,
            schoolName: cfg.schoolName || integrationState.schoolName,
            teacherName: cfg.teacherName || integrationState.teacherName,
            schoolYear: cfg.schoolYear || integrationState.schoolYear,
            department: cfg.department || 'Tổ Chuyên biệt / Bộ môn',
            disabilitySupport: integrationState.disabilitySupport
          };
          weeklyPlan = await IntegrationService.buildWeeklyPlanByAssignments(
            integrationState.gvbmAssignments,
            w,
            null,
            false,
            gvbmMeta
          );
        } else {
          weeklyPlan = await IntegrationService.buildWeeklyPlanByTimetable(
            grade, 
            w, 
            integrationState.customTimetable, 
            null, 
            false,
            { disabilitySupport: integrationState.disabilitySupport }
          );
        }
        weeksList.push(weeklyPlan);
      }
      integrationState.timetableAppliedWeeks = weeksList;
      integrationState.activeTimetableWeekIndex = 0;
      integrationState.activeTimetableLessonIndex = 0;
      integrationState.isOriginalPreview = true;
      integrationState.activeStep = 3;
    } else {
      var subj = integrationState.subjectKey || 'toan';
      await IntegrationService.ensureSubjectLoaded(grade, subj);

      var khbdDataObj = (typeof window !== 'undefined' && window.KHBD_DATA) ? window.KHBD_DATA : (typeof KHBD_DATA !== 'undefined' ? KHBD_DATA : null);
      var weeksPlan = khbdDataObj ? khbdDataObj.getWeekRangePlan(grade, subj, sWeek, eWeek) : [];

      if (!weeksPlan || weeksPlan.length === 0) {
        throw new Error('Chưa tìm thấy dữ liệu giáo án số hóa cho Khối ' + grade + ' - Môn ' + subj);
      }

      var flatLessons = [];
      var disSupport = integrationState.disabilitySupport;
      weeksPlan.forEach(function(wItem) {
        (wItem.lessons || []).forEach(function(l, lIdx) {
          var copy = JSON.parse(JSON.stringify(l));
          copy.week = wItem.week;
          copy.grade = grade;
          copy.subjectKey = subj;
          copy.subjectName = IntegrationService.getSubjectDisplayName(subj);
          if (!copy.period) {
            copy.period = 'Tiết ' + (lIdx + 1);
          }
          if (!copy.title && copy.lessonTitle) {
            copy.title = copy.lessonTitle;
          }
          if (!copy.lessonTitle && copy.title) {
            copy.lessonTitle = copy.title;
          }
          flatLessons.push(copy);
        });
      });

      if (disSupport && disSupport.enabled) {
        await IntegrationService.adaptLessonsDisabilityWithGemini(flatLessons, disSupport);
      }

      if (flatLessons.length === 0) {
        throw new Error('Chưa tìm thấy dữ liệu bài dạy chi tiết cho Khối ' + grade + ' - Môn ' + subj + ' (Tuần ' + sWeek + ' - ' + eWeek + ')');
      }

      integrationState.appliedLessons = flatLessons;
      integrationState.activePreviewLessonIndex = 0;
      integrationState.isOriginalPreview = true;
      integrationState.activeStep = 3;
    }

    var container = document.getElementById('content-container');
    if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
      renderAiIntegrationView(container);
    }
    var disNote = (integrationState.disabilitySupport && integrationState.disabilitySupport.enabled) ? (' • Kèm YCCĐ Khuyết Tật ' + (integrationState.disabilitySupport.cognitiveRate || 50) + '%') : '';
    showToast('Đang xem trước Kế hoạch bài dạy (' + count + ' tuần • Chuẩn CV 2345' + disNote + ')', 'info');

  } catch (err) {
    console.error('Preview original error:', err);
    showToast(err.message || 'Lỗi khi tải dữ liệu bài dạy', 'danger');
  } finally {
    if (btn) {
      btn.disabled = false;
      var countWeeks = (integrationState.endWeek || integrationState.startWeek) - integrationState.startWeek + 1;
      var disBadge = (integrationState.disabilitySupport && integrationState.disabilitySupport.enabled) ? (' • ♿ ' + (integrationState.disabilitySupport.cognitiveRate || 50) + '%') : '';
      btn.innerHTML = isTimetableMode ?
        (isGvbm ? ('<i class="fa-solid fa-eye"></i> XEM TRƯỚC THEO TKB BỘ MÔN (' + countWeeks + ' TUẦN' + disBadge + ')') : ('<i class="fa-solid fa-eye"></i> XEM TRƯỚC THEO TKB LỚP (' + countWeeks + ' TUẦN' + disBadge + ')')) :
        ('<i class="fa-solid fa-eye"></i> XEM TRƯỚC KHBD GỐC (' + countWeeks + ' TUẦN' + disBadge + ')');
    }
  }
}

// ===========================================================================
// XUẤT NHANH GỐC (DIRECT FAST EXPORT - 1 CLICK)
// ===========================================================================

async function triggerDirectFastExport() {
  var isTimetableMode = (integrationState.exportMode === 'timetable');
  var isGvbm = isTimetableMode && isGvbmRole(integrationState.timetableRole);
  var grade = integrationState.grade || 5;
  var sWeek = integrationState.startWeek || 1;
  var eWeek = integrationState.endWeek || sWeek;
  var count = eWeek - sWeek + 1;

  var btn = document.getElementById('btnDirectFastExport');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang xuất ' + count + ' tuần...';
  }

  try {
    if (isTimetableMode) {
      // Xuất theo Thời Khóa Biểu: Mỗi tuần 1 file Word riêng
      var anyAborted = false;
      for (var w = sWeek; w <= eWeek; w++) {
        var weeklyPlan, resW;
        if (isGvbm) {
          var cfg = integrationState.gvbmConfig || {};
          var gvbmTeacher = cfg.teacherName || integrationState.teacherName || '';
          var gvbmMeta = {
            role: 'gvbm',
            isAssignmentMode: true,
            week: w,
            schoolName: cfg.schoolName || integrationState.schoolName,
            teacherName: gvbmTeacher,
            schoolYear: cfg.schoolYear || integrationState.schoolYear,
            department: cfg.department || 'Tổ Chuyên biệt / Bộ môn',
            disabilitySupport: integrationState.disabilitySupport,
            approvalConfig: integrationState.approvalConfig,
            filename: IntegrationService.appendTeacherNameToFilename('KHBD_Tuan_' + w + '_GV_BoMon.doc', gvbmTeacher)
          };
          weeklyPlan = await IntegrationService.buildWeeklyPlanByAssignments(
            integrationState.gvbmAssignments,
            w,
            null,
            false,
            gvbmMeta
          );
          resW = await IntegrationService.exportWeekByTimetableWord(weeklyPlan, gvbmMeta);
        } else {
          weeklyPlan = await IntegrationService.buildWeeklyPlanByTimetable(
            grade, 
            w, 
            integrationState.customTimetable, 
            null, 
            false,
            { disabilitySupport: integrationState.disabilitySupport }
          );

          var gvcnTeacher = integrationState.teacherName || '';
          resW = await IntegrationService.exportWeekByTimetableWord(weeklyPlan, {
            grade: grade,
            week: w,
            schoolName: integrationState.schoolName,
            teacherName: gvcnTeacher,
            schoolYear: integrationState.schoolYear,
            className: integrationState.className,
            disabilitySupport: integrationState.disabilitySupport,
            approvalConfig: integrationState.approvalConfig,
            filename: IntegrationService.appendTeacherNameToFilename('KHBD_Tuan_' + w + '_Lop_' + grade + '_Theo_TKB.doc', gvcnTeacher)
          });
        }

        if (resW && resW.aborted) {
          anyAborted = true;
          showToast('Đã dừng xuất các tuần tiếp theo theo yêu cầu.', 'info');
          break;
        }

        if (w < eWeek) {
          await new Promise(function(res) { setTimeout(res, 600); });
        }
      }
      if (!anyAborted) {
        showToast('Đã xuất thành công ' + count + ' file Word Kế hoạch bài dạy theo Thời khóa biểu!', 'success');
      }

    } else {
      // Xuất theo Từng Môn
      var subj = integrationState.subjectKey || 'toan';
      await IntegrationService.ensureSubjectLoaded(grade, subj);

      var khbdDataObj = (typeof window !== 'undefined' && window.KHBD_DATA) ? window.KHBD_DATA : (typeof KHBD_DATA !== 'undefined' ? KHBD_DATA : null);
      var weeksPlan = khbdDataObj ? khbdDataObj.getWeekRangePlan(grade, subj, sWeek, eWeek) : [];

      if (!weeksPlan || weeksPlan.length === 0) {
        throw new Error('Chưa tìm thấy dữ liệu giáo án số hóa cho Khối ' + grade + ' - Môn ' + subj);
      }

      var disSupport = integrationState.disabilitySupport;
      if (disSupport && disSupport.enabled) {
        weeksPlan = JSON.parse(JSON.stringify(weeksPlan));
        var allPlanLessons = [];
        weeksPlan.forEach(function(wItem) {
          (wItem.lessons || []).forEach(function(l) {
            allPlanLessons.push(l);
          });
        });
        await IntegrationService.adaptLessonsDisabilityWithGemini(allPlanLessons, disSupport);
      }

      var saveResult = await IntegrationService.exportToWord(weeksPlan, {
        grade: grade,
        subjectName: IntegrationService.getSubjectDisplayName(subj),
        startWeek: sWeek,
        endWeek: eWeek,
        schoolName: integrationState.schoolName,
        teacherName: integrationState.teacherName,
        schoolYear: integrationState.schoolYear,
        className: integrationState.className,
        disabilitySupport: disSupport,
        approvalConfig: integrationState.approvalConfig,
        filename: IntegrationService.appendTeacherNameToFilename('KHBD_Lop' + grade + '_' + subj.toUpperCase() + '_Tuan' + sWeek + '-' + eWeek + '_CV2345.doc', integrationState.teacherName)
      });

      if (saveResult && saveResult.aborted) {
        showToast('Bạn đã hủy lưu file Word.', 'info');
      } else if (saveResult && saveResult.method === 'picker') {
        showToast('Đã lưu thành công file Word KHBD môn ' + IntegrationService.getSubjectDisplayName(subj) + ' (Tuần ' + sWeek + ' - ' + eWeek + ') vào máy tính!', 'success');
      } else {
        showToast('Đã xuất file Word KHBD môn ' + IntegrationService.getSubjectDisplayName(subj) + '! Tệp đã được lưu trong thư mục Downloads (Tải về).', 'success');
      }
    }

  } catch (err) {
    console.error('Direct export error:', err);
    showToast(err.message || 'Lỗi khi xuất file Word', 'danger');
  } finally {
    if (btn) {
      btn.disabled = false;
      var countWeeks = (integrationState.endWeek || integrationState.startWeek) - integrationState.startWeek + 1;
      var disBadge = (integrationState.disabilitySupport && integrationState.disabilitySupport.enabled) ? (' • ♿ ' + (integrationState.disabilitySupport.cognitiveRate || 50) + '%') : '';
      btn.innerHTML = isTimetableMode ? 
        (isGvbm ? ('<i class="fa-solid fa-file-arrow-down"></i> XUẤT NHANH THEO TKB BỘ MÔN (' + countWeeks + ' Tuần' + disBadge + ')') : ('<i class="fa-solid fa-file-arrow-down"></i> XUẤT NHANH THEO TKB LỚP (' + countWeeks + ' Tuần' + disBadge + ')')) :
        ('<i class="fa-solid fa-file-arrow-down"></i> XUẤT NHANH KHBD GỐC (' + countWeeks + ' Tuần' + disBadge + ')');
    }
  }
}

// ===========================================================================
// BƯỚC 1: AI LẬP KẾ HOẠCH TÍCH HỢP CHO MÔN HOẶC TKB
// ===========================================================================

async function triggerAnalyzeIntegrationPlan() {
  if (typeof IntegrationService === 'undefined') {
    showToast('Dịch vụ AI Tích hợp chưa sẵn sàng!', 'danger');
    return;
  }

  if (!integrationState.uploadedDocText || !integrationState.uploadedDocText.trim()) {
    showToast('Vui lòng tải lên tài liệu (.docx, .pdf, .txt) hoặc dán văn bản chỉ đạo tích hợp!', 'warning');
    return;
  }

  var btn = document.getElementById('btnStartIntegAnalyze');
  var output = document.getElementById('integOutputContainer');
  if (!output) return;

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> AI đang nghiên cứu tài liệu...';
  }

  var isTimetableMode = (integrationState.exportMode === 'timetable');

  output.innerHTML = `
    <div style="text-align: center; padding: 5rem 1rem;">
      <div class="spinner" style="width: 48px; height: 48px; border-width: 4px; border-color: #fbcfe8; border-top-color: #db2777; margin: 0 auto 1.25rem;"></div>
      <h4 style="color: #db2777; font-weight: 800; font-size: 1.15rem; margin-bottom: 0.5rem;">AI đang nghiên cứu tài liệu & Lập kế hoạch chi tiết...</h4>
      <p style="color: var(--text-muted); font-size: 0.85rem; max-width: 480px; margin: 0 auto; line-height: 1.5;">
        Đang quét văn bản <strong>"${integrationState.uploadedDocName || 'Tài liệu tích hợp'}"</strong> và đối chiếu với KHBD <strong>${isTimetableMode ? ('Các môn theo Thời khóa biểu Khối ' + integrationState.grade) : (integrationState.subjectKey.toUpperCase() + ' - Khối ' + integrationState.grade)} (Tuần ${integrationState.startWeek} đến ${integrationState.endWeek || integrationState.startWeek})</strong>.
      </p>
    </div>
  `;

  try {
    var plan = await IntegrationService.analyzeIntegrationPlanWithDocument({
      grade: integrationState.grade,
      subjectKey: integrationState.subjectKey,
      startWeek: integrationState.startWeek,
      endWeek: integrationState.endWeek || integrationState.startWeek,
      durationWeeks: (integrationState.endWeek || integrationState.startWeek) - integrationState.startWeek + 1,
      docTitle: integrationState.uploadedDocName,
      docText: integrationState.uploadedDocText,
      userNotes: integrationState.userNotes
    });

    integrationState.analyzedPlan = plan;
    integrationState.selectedLessons = {};
    plan.suggestions.forEach(function(s) {
      integrationState.selectedLessons[s.lessonId] = true;
    });

    await syncAppliedLessonsFromPlan();
    integrationState.step2ViewMode = 'word_lesson';
    integrationState.activePreviewLessonIndex = 0;
    integrationState.activeTimetableWeekIndex = 0;
    integrationState.activeTimetableLessonIndex = 0;
    integrationState.step2EditingLessonId = null;
    integrationState.activeStep = 2;

    var container = document.getElementById('content-container');
    if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
      renderAiIntegrationView(container);
    }
    showToast('Đã lập Kế hoạch Tích hợp chi tiết cho ' + plan.suggestions.length + ' bài dạy thành công!', 'success');

  } catch (err) {
    console.error('Integration analysis error:', err);
    output.innerHTML = `
      <div style="text-align: center; padding: 4rem 1rem; color: #dc2626;">
        <i class="fa-solid fa-circle-exclamation" style="font-size: 3rem; margin-bottom: 1rem;"></i>
        <h4>Có lỗi xảy ra khi phân tích tài liệu</h4>
        <p style="font-size: 0.85rem; max-width: 450px; margin: 0 auto 1.5rem;">${err.message || 'Lỗi không xác định khi đọc dữ liệu.'}</p>
        <button class="btn btn-primary" onclick="triggerAnalyzeIntegrationPlan()">Thử lại</button>
      </div>
    `;
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles"></i> BƯỚC 1: AI LẬP KẾ HOẠCH TÍCH HỢP';
    }
  }
}

// ===========================================================================
// BƯỚC 2: HỖ TRỢ HIỂN THỊ TRANG WORD & BẢNG DUYỆT KẾ HOẠCH
// ===========================================================================

async function syncAppliedLessonsFromPlan() {
  if (!integrationState.analyzedPlan) return;
  var isTimetableMode = (integrationState.exportMode === 'timetable');
  var grade = integrationState.grade || 5;
  var sWeek = integrationState.startWeek || 1;
  var eWeek = integrationState.endWeek || sWeek;

  try {
    if (isTimetableMode) {
      var integratedMap = {};
      (integrationState.analyzedPlan.suggestions || []).forEach(function(s) {
        if (!integrationState.selectedLessons || integrationState.selectedLessons[s.lessonId] !== false) {
          integratedMap[s.lessonId] = s;
          integratedMap[(s.subjectKey || integrationState.subjectKey) + '_' + s.week + '_' + (s.periodIndex || 0)] = s;
        }
      });

      var isGvbm = isGvbmRole(integrationState.timetableRole);
      var weeklyResults = [];
      for (var w = sWeek; w <= eWeek; w++) {
        var wPlan;
        if (isGvbm) {
          var cfg = integrationState.gvbmConfig || {};
          var gvbmMeta = {
            role: 'gvbm',
            isAssignmentMode: true,
            week: w,
            schoolName: cfg.schoolName || integrationState.schoolName,
            teacherName: cfg.teacherName || integrationState.teacherName,
            schoolYear: cfg.schoolYear || integrationState.schoolYear,
            department: cfg.department || 'Tổ Chuyên biệt / Bộ môn'
          };
          wPlan = await IntegrationService.buildWeeklyPlanByAssignments(
            integrationState.gvbmAssignments,
            w,
            integratedMap,
            integrationState.overwriteLegacy !== false,
            gvbmMeta
          );
        } else {
          wPlan = await IntegrationService.buildWeeklyPlanByTimetable(
            grade, 
            w, 
            integrationState.customTimetable, 
            integratedMap, 
            integrationState.overwriteLegacy !== false
          );
        }
        weeklyResults.push(wPlan);
      }
      integrationState.timetableAppliedWeeks = weeklyResults;
      if (typeof integrationState.activeTimetableWeekIndex === 'undefined') {
        integrationState.activeTimetableWeekIndex = 0;
      }
      if (typeof integrationState.activeTimetableLessonIndex === 'undefined') {
        integrationState.activeTimetableLessonIndex = 0;
      }
    } else {
      var applied = await IntegrationService.applyIntegrationToWeekRange(
        integrationState.analyzedPlan,
        integrationState.selectedLessons,
        integrationState.overwriteLegacy !== false
      );
      integrationState.appliedLessons = applied;
      if (typeof integrationState.activePreviewLessonIndex === 'undefined') {
        integrationState.activePreviewLessonIndex = 0;
      }
    }
  } catch (err) {
    console.error('Error syncing applied lessons:', err);
  }
}

async function setStep2ViewMode(mode) {
  integrationState.step2ViewMode = mode;
  integrationState.step2EditingLessonId = null;
  if (mode === 'word_lesson') {
    await syncAppliedLessonsFromPlan();
  }
  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
}

function switchStep2PreviewLesson(idx) {
  integrationState.activePreviewLessonIndex = parseInt(idx) || 0;
  integrationState.step2EditingLessonId = null;
  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
}

function switchStep2TimetablePreviewWeek(wIdx) {
  integrationState.activeTimetableWeekIndex = parseInt(wIdx) || 0;
  integrationState.activeTimetableLessonIndex = 0;
  integrationState.step2EditingLessonId = null;
  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
}

function switchStep2TimetablePreviewLesson(lIdx) {
  integrationState.activeTimetableLessonIndex = parseInt(lIdx) || 0;
  integrationState.step2EditingLessonId = null;
  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
}

function toggleStep2InlineEditCurrentLesson(lessonId) {
  integrationState.step2EditingLessonId = (integrationState.step2EditingLessonId === lessonId ? null : lessonId);
  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
}

async function saveAndRefreshStep2LessonEdit(lessonId) {
  if (!lessonId || !integrationState.analyzedPlan) return;
  var s = (integrationState.analyzedPlan.suggestions || []).find(function(item) { return item.lessonId === lessonId; });
  if (s) {
    var yccdEl = document.getElementById('edit_yccd_' + lessonId);
    var dodungEl = document.getElementById('edit_dodung_' + lessonId);
    var gvEl = document.getElementById('edit_gv_' + lessonId);
    var hsEl = document.getElementById('edit_hs_' + lessonId);
    if (yccdEl) s.yccdAddition = yccdEl.value;
    if (dodungEl) s.dodungAddition = dodungEl.value;
    if (gvEl || hsEl) {
      if (!s.activityAddition) s.activityAddition = {};
      if (gvEl) s.activityAddition.teacherAct = gvEl.value;
      if (hsEl) s.activityAddition.studentAct = hsEl.value;
    }
  }
  integrationState.step2EditingLessonId = null;
  await syncAppliedLessonsFromPlan();
  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
  showToast('Đã cập nhật lời văn bài dạy lên trang Word!', 'success');
}

async function triggerExportPlanSummaryWord() {
  var sheet = document.querySelector('.integrated-doc-sheet');
  if (!sheet) return;
  var plan = integrationState.analyzedPlan || {};
  var docTitleClean = (plan.docTitle || 'Tich_Hop').replace(/[^a-zA-Z0-9_\u00C0-\u1EF9]/g, '_');
  var basePlanFile = 'Ke_Hoach_Tich_Hop_' + (plan.grade || 5) + '_' + (plan.subjectKey || 'TKB') + '_Tuan' + (plan.startWeek || 1) + '-' + (plan.endWeek || 1) + '_' + docTitleClean + '.doc';
  var filename = (typeof IntegrationService !== 'undefined' && IntegrationService.appendTeacherNameToFilename)
    ? IntegrationService.appendTeacherNameToFilename(basePlanFile, integrationState.teacherName)
    : basePlanFile;
  
  var html = `<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
<head>
  <meta charset="utf-8">
  <title>Kế hoạch tích hợp</title>
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
    @page { size: 21.0cm 29.7cm; margin: 2.0cm 1.5cm 2.0cm 2.5cm; mso-page-orientation: portrait; }
    body { font-family: "Times New Roman", serif; font-size: 13pt; line-height: 1.35; color: #000; }
    table { width: 100%; border-collapse: collapse; margin: 6pt 0; }
    th, td { border: 1pt solid #000; padding: 6pt; vertical-align: top; }
    p { margin: 3pt 0; }
    h1, h2, h3, h4 { margin: 6pt 0; }
  </style>
</head>
<body>
  ${sheet.innerHTML}
</body>
</html>`;

  var blob = new Blob(['\ufeff' + html], { type: 'application/msword;charset=utf-8' });
  await IntegrationService.saveWordBlob(blob, filename);
}

// BƯỚC 2: RENDER BẢNG KẾ HOẠCH CHI TIẾT & TRANG WORD XEM TRƯỚC
function renderIntegrationPlanReviewHtml(plan) {
  var totalSelected = Object.values(integrationState.selectedLessons).filter(Boolean).length;
  var docSummary = plan.docSummary || {};
  var isTimetableMode = (integrationState.exportMode === 'timetable');
  var viewMode = integrationState.step2ViewMode || 'word_lesson';

  // Failsafe: nếu xem trang word mà chưa có appliedLessons thì tạm chuyển về table
  var checkLessons = isTimetableMode ? 
    ((integrationState.timetableAppliedWeeks && integrationState.timetableAppliedWeeks[integrationState.activeTimetableWeekIndex || 0]) ? integrationState.timetableAppliedWeeks[integrationState.activeTimetableWeekIndex || 0].lessons || [] : []) : 
    (integrationState.appliedLessons || []);
  if (viewMode === 'word_lesson' && checkLessons.length === 0) {
    viewMode = 'table';
  }

  // Header thanh công cụ Bước 2 với 3 nút chuyển chế độ
  var headerHtml = `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.85rem; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.75rem;">
      <div>
        <div style="font-size: 0.75rem; font-weight: 800; color: #db2777; text-transform: uppercase; display: flex; align-items: center; gap: 0.4rem;">
          <i class="fa-solid fa-file-signature"></i> BƯỚC 2/3: DUYỆT NỘI DUNG TÍCH HỢP (CHUẨN CV 2345)
        </div>
        <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--text-color); margin: 0.2rem 0;">
          Tài liệu: ${plan.docTitle || 'Tài liệu tích hợp'}
        </h3>
        <div style="font-size: 0.8rem; color: var(--text-muted);">
          ${isTimetableMode ? `Chế độ: <strong>Thời Khóa Biểu Tuần</strong> • ` : `Môn: <strong>${plan.subjectName}</strong> • `}
          <strong>Khối ${plan.grade}</strong> • <strong>${plan.startWeek === plan.endWeek ? `Tuần ${plan.startWeek}` : `Tuần ${plan.startWeek} → Tuần ${plan.endWeek}`}</strong> (${plan.suggestions.length} bài dạy) • Chủ đề: <span style="color: #db2777; font-weight: 700;">${docSummary.topicName || 'Chuyên đề'}</span>
        </div>
      </div>

      <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
        <!-- BỘ 3 NÚT CHUYỂN CHẾ ĐỘ XEM TRANG WORD / BẢNG -->
        <div style="display: inline-flex; border: 1px solid #cbd5e1; border-radius: var(--radius-sm); overflow: hidden; background: #f8fafc; padding: 2px; gap: 2px;">
          <button class="btn btn-sm" style="font-size: 0.78rem; font-weight: 700; border: none; padding: 0.35rem 0.75rem; border-radius: 4px; ${viewMode === 'word_lesson' ? 'background: #1e40af; color: #ffffff; box-shadow: 0 2px 6px rgba(30,64,175,0.25);' : 'background: transparent; color: #475569;'}" onclick="setStep2ViewMode('word_lesson')" title="Xem trực tiếp giáo án trên trang Word (A4) với chữ màu tím">
            <i class="fa-solid fa-file-word"></i> Trang Word Giáo Án
          </button>
          <button class="btn btn-sm" style="font-size: 0.78rem; font-weight: 700; border: none; padding: 0.35rem 0.75rem; border-radius: 4px; ${viewMode === 'word_plan' ? 'background: #1e40af; color: #ffffff; box-shadow: 0 2px 6px rgba(30,64,175,0.25);' : 'background: transparent; color: #475569;'}" onclick="setStep2ViewMode('word_plan')" title="Xem trang Word văn bản Kế hoạch tích hợp để trình ký">
            <i class="fa-solid fa-file-lines"></i> Trang Word Kế Hoạch
          </button>
          <button class="btn btn-sm" style="font-size: 0.78rem; font-weight: 700; border: none; padding: 0.35rem 0.75rem; border-radius: 4px; ${viewMode === 'table' ? 'background: #7c3aed; color: #ffffff; box-shadow: 0 2px 6px rgba(124,58,237,0.25);' : 'background: transparent; color: #475569;'}" onclick="setStep2ViewMode('table')" title="Bảng quản lý chi tiết từng tiết">
            <i class="fa-solid fa-table-list"></i> Bảng Duyệt & Góp Ý
          </button>
        </div>

        <!-- NÚT XÁC NHẬN CHÍNH -->
        <button class="btn btn-primary" style="background: linear-gradient(135deg, #16a34a, #22c55e); border: none; font-weight: 800; box-shadow: 0 4px 12px rgba(22, 163, 74, 0.35); padding: 0.55rem 1.15rem; font-size: 0.84rem;" onclick="triggerApplyAndPreviewIntegration()">
          <i class="fa-solid fa-circle-check"></i> XÁC NHẬN & XUẤT WORD (BƯỚC 3)
        </button>
      </div>
    </div>
  `;

  // Khung góp ý & nút xác nhận ở chân trang (dùng chung cho mọi chế độ)
  var feedbackBoxHtml = `
    <!-- KHUNG GÓP Ý & YÊU CẦU AI ĐIỀU CHỈNH KẾ HOẠCH -->
    <div class="ai-feedback-box" style="margin-top: 1.25rem;">
      <div style="font-weight: 800; font-size: 0.88rem; color: #7c3aed; margin-bottom: 0.4rem; display: flex; align-items: center; gap: 0.4rem;">
        <i class="fa-solid fa-comments"></i> Góp ý & Yêu cầu AI sửa chữa kế hoạch:
      </div>
      <p style="font-size: 0.78rem; color: #64748b; margin-bottom: 0.5rem;">
        Nếu chưa vừa ý với tiết nào, bạn hãy nhập yêu cầu vào đây (Ví dụ: <em>"Đổi tiết 2 sang tích hợp hoạt động Khởi động", "Thêm câu hỏi tình huống thực tế cho tiết 3", "Rút ngắn nội dung tiết 1"</em>), AI sẽ lập tức cập nhật lại và hiển thị ngay trên trang Word!
      </p>
      <div style="display: flex; gap: 0.6rem; align-items: stretch;">
        <textarea id="integFeedbackInput" class="form-control" rows="2" placeholder="Nhập ý kiến góp ý / yêu cầu sửa đổi cho AI tại đây..." style="font-size: 0.82rem; background: #ffffff;" oninput="integrationState.userFeedbackInput = this.value">${integrationState.userFeedbackInput || ''}</textarea>
        <button id="btnSendFeedbackToAi" class="btn btn-primary" style="background: linear-gradient(135deg, #7c3aed, #a855f7); border: none; font-weight: 800; padding: 0 1.25rem; font-size: 0.84rem; white-space: nowrap; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.2rem;" onclick="triggerSendIntegrationFeedback()">
          <i class="fa-solid fa-paper-plane"></i>
          <span>GỬI GÓP Ý</span>
        </button>
      </div>
    </div>

    <!-- NÚT XÁC NHẬN CHÍNH CUỐI BƯỚC 2 -->
    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
      <button class="btn btn-outline" style="font-size: 0.84rem;" onclick="resetIntegrationToSetup()">
        <i class="fa-solid fa-arrow-left"></i> Quay lại chọn tài liệu khác
      </button>
      <button class="btn btn-primary" style="background: linear-gradient(135deg, #16a34a, #22c55e); border: none; font-weight: 800; box-shadow: 0 4px 14px rgba(22, 163, 74, 0.35); padding: 0.75rem 1.75rem; font-size: 0.95rem;" onclick="triggerApplyAndPreviewIntegration()">
        <i class="fa-solid fa-circle-check"></i> XÁC NHẬN KẾ HOẠCH NÀY & BẮT ĐẦU CHÈN VÀO GIÁO ÁN (BƯỚC 3)
      </button>
    </div>
  `;

  // =========================================================================
  // CHẾ ĐỘ 1: XEM TRANG WORD GIÁO ÁN (WORD_LESSON)
  // =========================================================================
  if (viewMode === 'word_lesson') {
    var lessons = [];
    var activeIdx = 0;
    var curLesson = {};

    if (isTimetableMode) {
      var weeks = integrationState.timetableAppliedWeeks || [];
      var wIdx = integrationState.activeTimetableWeekIndex || 0;
      if (wIdx >= weeks.length) wIdx = 0;
      var curW = weeks[wIdx] || {};
      lessons = curW.lessons || [];
      activeIdx = integrationState.activeTimetableLessonIndex || 0;
      if (activeIdx >= lessons.length) activeIdx = 0;
      curLesson = lessons[activeIdx] || {};
    } else {
      lessons = integrationState.appliedLessons || [];
      activeIdx = integrationState.activePreviewLessonIndex || 0;
      if (activeIdx >= lessons.length) activeIdx = 0;
      curLesson = lessons[activeIdx] || {};
    }

    var activeLessonId = curLesson.lessonId || (isTimetableMode ? (curLesson.subjectKey + '_' + curLesson.week + '_' + curLesson.periodIndex) : '');
    var currentSuggestion = (plan.suggestions || []).find(function(s) {
      return s.lessonId === activeLessonId || (s.week === curLesson.week && s.title === (curLesson.lessonTitle || curLesson.title));
    }) || {};

    var isInlineEditing = (integrationState.step2EditingLessonId === activeLessonId);

    var tabsHtml = '';
    if (isTimetableMode) {
      var weeks = integrationState.timetableAppliedWeeks || [];
      var wIdx = integrationState.activeTimetableWeekIndex || 0;
      tabsHtml = `
        ${weeks.length > 1 ? `
          <div style="display: flex; gap: 0.4rem; margin-bottom: 0.6rem; align-items: center;">
            <span style="font-size: 0.8rem; font-weight: 700; color: #475569;">Tuần:</span>
            ${weeks.map(function(wItem, idx) {
              var isWAct = idx === wIdx;
              return `
                <button class="btn btn-sm ${isWAct ? 'btn-primary' : 'btn-outline'}" style="font-size: 0.76rem; ${isWAct ? 'background: #1e40af; border-color: #1e40af; color: white;' : ''}" onclick="switchStep2TimetablePreviewWeek(${idx})">
                  Tuần ${wItem.week}
                </button>
              `;
            }).join('')}
          </div>
        ` : ''}
        <div style="display: flex; gap: 0.35rem; overflow-x: auto; padding-bottom: 0.5rem; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--border-color);">
          ${lessons.map(function(les, idx) {
            var isAct = idx === activeIdx;
            return `
              <button class="btn btn-sm ${isAct ? 'btn-primary' : 'btn-outline'}" style="font-size: 0.74rem; white-space: nowrap; ${isAct ? 'background: #1e40af; border-color: #1e40af; color: white;' : ''}" onclick="switchStep2TimetablePreviewLesson(${idx})">
                ${les.dayName || ('T' + (les.week))} • ${les.subjectName || les.subjectKey} (${les.period || ('Tiết ' + (idx+1))})
              </button>
            `;
          }).join('')}
        </div>
      `;
    } else {
      tabsHtml = `
        <div style="display: flex; gap: 0.4rem; overflow-x: auto; padding-bottom: 0.5rem; margin-bottom: 0.85rem; border-bottom: 1px dashed var(--border-color);">
          ${lessons.map(function(les, idx) {
            var isAct = idx === activeIdx;
            return `
              <button class="btn btn-sm ${isAct ? 'btn-primary' : 'btn-outline'}" style="font-size: 0.78rem; white-space: nowrap; ${isAct ? 'background: #1e40af; border-color: #1e40af; color: white;' : ''}" onclick="switchStep2PreviewLesson(${idx})">
                T.${les.week || (idx+1)} • ${les.period || ('Tiết ' + (idx+1))}
              </button>
            `;
          }).join('')}
        </div>
      `;
    }

    var toolStripHtml = `
      <div style="display: flex; justify-content: space-between; align-items: center; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-sm); padding: 0.55rem 0.85rem; margin-bottom: 0.85rem; flex-wrap: wrap; gap: 0.5rem;">
        <div style="font-size: 0.8rem; color: #166534; display: flex; align-items: center; gap: 0.4rem;">
          <i class="fa-solid fa-file-circle-check" style="font-size: 1rem; color: #16a34a;"></i>
          <span>Trang Word: <strong>${curLesson.lessonTitle || curLesson.title || 'Bài dạy'}</strong> (Nội dung mới hiển thị <strong style="color: #7030a0;">chữ màu tím</strong>).</span>
        </div>
        <div style="display: flex; gap: 0.4rem; align-items: center;">
          <button class="btn btn-sm btn-outline" style="font-size: 0.76rem; background: #fff;" onclick="printIntegratedLessonSheet()" title="In bài dạy đang xem ra giấy">
            <i class="fa-solid fa-print"></i> In bài này
          </button>
          <button class="btn btn-sm btn-outline" style="font-size: 0.76rem; background: ${isInlineEditing ? '#fdf2f8' : '#fff'}; color: ${isInlineEditing ? '#db2777' : '#475569'}; border-color: ${isInlineEditing ? '#fbcfe8' : '#cbd5e1'};" onclick="toggleStep2InlineEditCurrentLesson('${activeLessonId}')" title="Sửa lời văn AI của bài này">
            <i class="fa-solid fa-pen-to-square"></i> ${isInlineEditing ? 'Đóng ô sửa' : 'Sửa nhanh bài này'}
          </button>
          <button class="btn btn-sm btn-primary" style="font-size: 0.76rem; background: #1e40af; border-color: #1e40af;" onclick="${isTimetableMode ? 'triggerExportAllTimetableWeeksWord()' : 'triggerExportIntegrationWord()'}" title="Tải file Word (.doc) về máy ngay">
            <i class="fa-solid fa-file-word"></i> Tải file Word (.doc)
          </button>
        </div>
      </div>
    `;

    var inlineEditHtml = '';
    if (isInlineEditing && currentSuggestion && currentSuggestion.lessonId) {
      var s = currentSuggestion;
      inlineEditHtml = `
        <div style="background: #faf5ff; border: 1px solid #c084fc; border-radius: var(--radius-sm); padding: 1rem; margin-bottom: 1rem; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.08);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; border-bottom: 1px dashed #d8b4fe; padding-bottom: 0.4rem;">
            <div style="font-weight: 800; color: #6b21a8; font-size: 0.85rem; display: flex; align-items: center; gap: 0.4rem;">
              <i class="fa-solid fa-pen-to-square"></i> CHỈNH SỬA LỜI VĂN AI CHO TIẾT NÀY (${curLesson.lessonTitle || curLesson.title})
            </div>
            <button class="btn btn-sm btn-outline" style="font-size: 0.72rem; padding: 2px 8px; border-color: #d8b4fe;" onclick="toggleStep2InlineEditCurrentLesson('')">
              <i class="fa-solid fa-xmark"></i> Đóng
            </button>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 0.65rem;">
            <div>
              <label style="font-size: 0.74rem; font-weight: 700; color: #334155; display: block; margin-bottom: 3px;">
                1. Mục I.4 (Yêu cầu cần đạt mới):
              </label>
              <textarea id="edit_yccd_${s.lessonId}" class="form-control" rows="2" style="font-size: 0.78rem; line-height: 1.4;">${s.yccdAddition || ''}</textarea>
            </div>
            <div>
              <label style="font-size: 0.74rem; font-weight: 700; color: #334155; display: block; margin-bottom: 3px;">
                2. Mục II (Đồ dùng dạy học bổ sung):
              </label>
              <textarea id="edit_dodung_${s.lessonId}" class="form-control" rows="2" style="font-size: 0.78rem; line-height: 1.4;">${s.dodungAddition || ''}</textarea>
            </div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 0.75rem;">
            <div>
              <label style="font-size: 0.74rem; font-weight: 700; color: #15803d; display: block; margin-bottom: 3px;">
                3. Lời thoại GV (${s.targetPart || 'HĐ Vận dụng'}):
              </label>
              <textarea id="edit_gv_${s.lessonId}" class="form-control" rows="3" style="font-size: 0.78rem; line-height: 1.4; background: #f0fdf4;">${(s.activityAddition && s.activityAddition.teacherAct) || ''}</textarea>
            </div>
            <div>
              <label style="font-size: 0.74rem; font-weight: 700; color: #0369a1; display: block; margin-bottom: 3px;">
                4. Hoạt động HS (${s.targetPart || 'HĐ Vận dụng'}):
              </label>
              <textarea id="edit_hs_${s.lessonId}" class="form-control" rows="3" style="font-size: 0.78rem; line-height: 1.4; background: #f0f9ff;">${(s.activityAddition && s.activityAddition.studentAct) || ''}</textarea>
            </div>
          </div>
          <div style="display: flex; justify-content: flex-end; gap: 0.5rem;">
            <button class="btn btn-sm btn-primary" style="background: #7c3aed; border: none; font-weight: 700; font-size: 0.78rem;" onclick="saveAndRefreshStep2LessonEdit('${s.lessonId}')">
              <i class="fa-solid fa-check"></i> Lưu & Cập nhật lên trang Word
            </button>
          </div>
        </div>
      `;
    }

    var sheetHtml = `
      <div class="integrated-doc-sheet" style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: var(--radius-md); padding: 2.5rem 3rem; box-shadow: 0 4px 25px rgba(0,0,0,0.06); max-height: 700px; overflow-y: auto; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.4; color: #0f172a;">
        ${renderIntegratedLessonSheetContent(curLesson)}
      </div>
    `;

    return headerHtml + tabsHtml + toolStripHtml + inlineEditHtml + sheetHtml + feedbackBoxHtml;
  }

  // =========================================================================
  // CHẾ ĐỘ 2: XEM TRANG WORD KẾ HOẠCH TÍCH HỢP (WORD_PLAN)
  // =========================================================================
  if (viewMode === 'word_plan') {
    var schoolName = integrationState.schoolName || 'TRƯỜNG TIỂU HỌC .................................';
    var teacherName = integrationState.teacherName || 'Lê Thành Long';
    var schoolYear = integrationState.schoolYear || '2026 - 2027';

    var toolStripHtml = `
      <div style="display: flex; justify-content: space-between; align-items: center; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: var(--radius-sm); padding: 0.55rem 0.85rem; margin-bottom: 0.85rem; flex-wrap: gap; gap: 0.5rem;">
        <div style="font-size: 0.8rem; color: #1e40af; display: flex; align-items: center; gap: 0.4rem;">
          <i class="fa-solid fa-file-contract" style="font-size: 1rem; color: #2563eb;"></i>
          <span>Văn bản Kế hoạch tích hợp chuyên đề chuẩn hành chính (dùng để lưu hồ sơ chuyên môn, trình ký BGH).</span>
        </div>
        <div style="display: flex; gap: 0.4rem; align-items: center;">
          <button class="btn btn-sm btn-outline" style="font-size: 0.76rem; background: #fff;" onclick="printIntegratedLessonSheet()" title="In văn bản kế hoạch này ra giấy">
            <i class="fa-solid fa-print"></i> In kế hoạch này
          </button>
          <button class="btn btn-sm btn-primary" style="font-size: 0.76rem; background: #1e40af; border-color: #1e40af;" onclick="triggerExportPlanSummaryWord()" title="Tải file Word bảng kế hoạch về máy">
            <i class="fa-solid fa-file-word"></i> Tải file Word Kế hoạch (.doc)
          </button>
        </div>
      </div>
    `;

    var sheetHtml = `
      <div class="integrated-doc-sheet" style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: var(--radius-md); padding: 2.5rem 3rem; box-shadow: 0 4px 25px rgba(0,0,0,0.06); max-height: 700px; overflow-y: auto; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.35; color: #0f172a;">
        <table style="width: 100%; border: none; border-collapse: collapse; margin-bottom: 1.5rem;">
          <tr style="border: none;">
            <td style="border: none; width: 45%; text-align: center; vertical-align: top;">
              <div style="font-size: 11pt; font-weight: bold; text-transform: uppercase;">${schoolName}</div>
              <div style="font-size: 11pt; font-weight: bold; text-transform: uppercase;">TỔ CHUYÊN MÔN KHỐI ${plan.grade}</div>
              <div style="border-bottom: 1px solid #000; width: 120px; margin: 4px auto;"></div>
            </td>
            <td style="border: none; width: 55%; text-align: center; vertical-align: top;">
              <div style="font-size: 11pt; font-weight: bold;">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</div>
              <div style="font-size: 11pt; font-weight: bold; font-style: italic;">Độc lập - Tự do - Hạnh phúc</div>
              <div style="border-bottom: 1px solid #000; width: 160px; margin: 4px auto;"></div>
            </td>
          </tr>
        </table>

        <div style="text-align: center; margin-bottom: 1.25rem;">
          <h2 style="font-size: 14pt; font-weight: bold; text-transform: uppercase; margin: 0 0 6px 0;">
            KẾ HOẠCH TÍCH HỢP NỘI DUNG GIÁO DỤC
          </h2>
          <div style="font-size: 13pt; font-weight: bold; color: #7030a0; text-transform: uppercase;">
            CHUYÊN ĐỀ: ${plan.docTitle || 'TÀI LIỆU TÍCH HỢP MỚI'}
          </div>
          <div style="font-size: 12pt; font-style: italic; margin-top: 4px;">
            (Áp dụng: ${isTimetableMode ? 'Các môn học theo Thời khóa biểu' : ('Môn ' + plan.subjectName)} - Khối ${plan.grade} - Năm học ${schoolYear})
          </div>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 12pt;">
          <thead>
            <tr style="background: #f1f5f9; text-align: center; font-weight: bold;">
              <th style="border: 1pt solid #000; padding: 6pt 4pt; width: 35px;">TT</th>
              <th style="border: 1pt solid #000; padding: 6pt 4pt; width: 55px;">Tuần</th>
              <th style="border: 1pt solid #000; padding: 6pt 4pt; width: 55px;">Tiết</th>
              <th style="border: 1pt solid #000; padding: 6pt 6pt; width: 170px;">Bài học (KHBD gốc)</th>
              <th style="border: 1pt solid #000; padding: 6pt 6pt; width: 140px;">Địa chỉ tích hợp</th>
              <th style="border: 1pt solid #000; padding: 6pt 4pt; width: 75px;">Mức độ</th>
              <th style="border: 1pt solid #000; padding: 6pt 6pt;">Nội dung tích hợp cụ thể</th>
            </tr>
          </thead>
          <tbody>
            ${plan.suggestions.map(function(s, idx) {
              return `
                <tr>
                  <td style="border: 1pt solid #000; padding: 6pt 4pt; text-align: center;">${idx + 1}</td>
                  <td style="border: 1pt solid #000; padding: 6pt 4pt; text-align: center;">Tuần ${s.week}</td>
                  <td style="border: 1pt solid #000; padding: 6pt 4pt; text-align: center;">${s.period || '—'}</td>
                  <td style="border: 1pt solid #000; padding: 6pt 6pt; font-weight: bold;">${s.title}</td>
                  <td style="border: 1pt solid #000; padding: 6pt 6pt;">${s.targetPart || 'Hoạt động Vận dụng'}</td>
                  <td style="border: 1pt solid #000; padding: 6pt 4pt; text-align: center;">${s.level || 'Liên hệ'}</td>
                  <td style="border: 1pt solid #000; padding: 6pt 6pt;">
                    ${s.integrationBrief || ''}
                    ${s.yccdAddition ? ('<br><span style="color: #7030a0; font-weight: bold;">* YCCĐ mới:</span> <span style="color: #7030a0;">' + s.yccdAddition + '</span>') : ''}
                    ${(s.activityAddition && s.activityAddition.teacherAct) ? ('<br><span style="color: #7030a0; font-weight: bold;">* Hoạt động:</span> <span style="color: #7030a0;">' + s.activityAddition.teacherAct + '</span>') : ''}
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>

        <table style="width: 100%; border: none; border-collapse: collapse; margin-top: 2rem;">
          <tr style="border: none;">
            <td style="border: none; width: 50%; text-align: center; vertical-align: top;">
              <div style="font-weight: bold; text-transform: uppercase;">DUYỆT CỦA BAN GIÁM HIỆU / TỔ TRƯỞNG</div>
              <div style="font-style: italic; font-size: 11pt; margin-top: 3px;">(Ký và ghi rõ họ tên)</div>
              <div style="height: 65px;"></div>
            </td>
            <td style="border: none; width: 50%; text-align: center; vertical-align: top;">
              <div style="font-style: italic; font-size: 11pt;">......., ngày ..... tháng ..... năm 202...</div>
              <div style="font-weight: bold; text-transform: uppercase; margin-top: 3px;">NGƯỜI LẬP KẾ HOẠCH</div>
              <div style="font-style: italic; font-size: 11pt; margin-top: 3px;">(Ký và ghi rõ họ tên)</div>
              <div style="height: 65px;"></div>
              <div style="font-weight: bold;">${teacherName}</div>
            </td>
          </tr>
        </table>
      </div>
    `;

    return headerHtml + toolStripHtml + sheetHtml + feedbackBoxHtml;
  }

  // =========================================================================
  // CHẾ ĐỘ 3: BẢNG DUYỆT & GÓP Ý (TABLE)
  // =========================================================================
  var tableGuideHtml = `
    <!-- HƯỚNG DẪN GIÁO VIÊN -->
    <div style="background: #fdf2f8; border: 1px solid #fbcfe8; border-radius: var(--radius-sm); padding: 0.75rem 1rem; margin-bottom: 1rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
      <div style="font-size: 0.82rem; color: #9d174d; display: flex; align-items: center; gap: 0.5rem;">
        <i class="fa-solid fa-lightbulb" style="font-size: 1.1rem; color: #db2777;"></i>
        <span>Giáo viên có thể <strong>bấm xem chi tiết từng lời văn AI</strong>, sửa trực tiếp từng ô trên bảng dưới đây hoặc <strong>nhập góp ý</strong> để AI tự động điều chỉnh!</span>
      </div>
      <div style="display: flex; gap: 0.4rem; align-items: center;">
        <button class="btn btn-sm btn-outline" style="font-size: 0.74rem; padding: 0.25rem 0.6rem; border-color: #7c3aed; color: #7c3aed; font-weight: 700; background: ${integrationState.expandAllPlanDetails ? '#f5f3ff' : '#ffffff'};" onclick="toggleExpandAllPlanDetails()">
          <i class="fa-solid ${integrationState.expandAllPlanDetails ? 'fa-compress' : 'fa-book-open'}"></i> ${integrationState.expandAllPlanDetails ? 'Thu gọn bảng' : 'Xem toàn văn lời văn tất cả bài'}
        </button>
        <button class="btn btn-sm btn-outline" style="font-size: 0.74rem; padding: 0.25rem 0.5rem; border-color: #fbcfe8;" onclick="toggleSelectAllIntegrationLessons(true)">Chọn tất cả</button>
        <button class="btn btn-sm btn-outline" style="font-size: 0.74rem; padding: 0.25rem 0.5rem; border-color: #fbcfe8;" onclick="toggleSelectAllIntegrationLessons(false)">Bỏ chọn tất cả</button>
      </div>
    </div>
  `;

  var tableHtml = `
    <div style="overflow-x: auto; border: 1px solid var(--border-color); border-radius: var(--radius-sm); margin-bottom: 1rem;">
      <table style="width: 100%; border-collapse: collapse; font-size: 0.82rem; text-align: left;">
        <thead>
          <tr style="background: #f8fafc; border-bottom: 2px solid var(--border-color); color: #334155; font-weight: 700;">
            <th style="padding: 0.65rem 0.4rem; text-align: center; width: 40px;">Chọn</th>
            <th style="padding: 0.65rem 0.4rem; text-align: center; width: 55px;">Tuần</th>
            <th style="padding: 0.65rem 0.4rem; text-align: center; width: 60px;">Tiết</th>
            <th style="padding: 0.65rem 0.6rem; width: 175px;">Tên bài dạy (KHBD gốc)</th>
            <th style="padding: 0.65rem 0.6rem; width: 185px;">Tích hợp vào phần nào?</th>
            <th style="padding: 0.65rem 0.5rem; text-align: center; width: 95px;">Mức độ</th>
            <th style="padding: 0.65rem 0.6rem;">Nội dung tích hợp & Lời văn chi tiết</th>
          </tr>
        </thead>
        <tbody>
          ${plan.suggestions.map(function(s, idx) {
            var isChecked = integrationState.selectedLessons[s.lessonId] !== false;
            var isEven = idx % 2 === 0;
            var isExpanded = integrationState.expandAllPlanDetails || (integrationState.expandedLessons && integrationState.expandedLessons[s.lessonId]);

            return `
              <tr style="border-bottom: 1px solid var(--border-color); background: ${isChecked ? (isEven ? '#ffffff' : '#fdfafc') : '#f8fafc'}; opacity: ${isChecked ? '1' : '0.6'};">
                <td style="padding: 0.65rem 0.4rem; text-align: center;">
                  <input type="checkbox" id="chk_integ_${s.lessonId}" ${isChecked ? 'checked' : ''} onchange="toggleIntegrationLessonSelect('${s.lessonId}')" style="cursor: pointer; width: 16px; height: 16px;">
                </td>
                <td style="padding: 0.65rem 0.4rem; text-align: center; font-weight: 700; color: #db2777;">
                  T.${s.week}
                </td>
                <td style="padding: 0.65rem 0.4rem; text-align: center; font-weight: 600; color: var(--text-muted);">
                  ${s.period || '—'}
                </td>
                <td style="padding: 0.65rem 0.6rem; font-weight: 700; color: #1e293b;">
                  ${s.title}
                </td>
                <td style="padding: 0.65rem 0.5rem;">
                  <select class="editable-plan-input" style="font-weight: 600; color: #7c3aed;" onchange="onPlanCellEdit('${s.lessonId}', 'targetPart', this.value)">
                    <option value="Hoạt động Vận dụng, trải nghiệm" ${s.targetPart === 'Hoạt động Vận dụng, trải nghiệm' ? 'selected' : ''}>HĐ Vận dụng, trải nghiệm</option>
                    <option value="Hoạt động Khởi động" ${s.targetPart === 'Hoạt động Khởi động' ? 'selected' : ''}>HĐ Khởi động</option>
                    <option value="Hoạt động Khám phá kiến thức mới" ${s.targetPart === 'Hoạt động Khám phá kiến thức mới' ? 'selected' : ''}>HĐ Khám phá</option>
                    <option value="Hoạt động Luyện tập, thực hành" ${s.targetPart === 'Hoạt động Luyện tập, thực hành' ? 'selected' : ''}>HĐ Luyện tập, thực hành</option>
                  </select>
                </td>
                <td style="padding: 0.65rem 0.4rem; text-align: center;">
                  <select class="editable-plan-input" style="font-size: 0.76rem; text-align: center;" onchange="onPlanCellEdit('${s.lessonId}', 'level', this.value)">
                    <option value="Liên hệ" ${s.level === 'Liên hệ' ? 'selected' : ''}>Liên hệ</option>
                    <option value="Bộ phận" ${s.level === 'Bộ phận' ? 'selected' : ''}>Bộ phận</option>
                    <option value="Toàn phần" ${s.level === 'Toàn phần' ? 'selected' : ''}>Toàn phần</option>
                  </select>
                </td>
                <td style="padding: 0.65rem 0.6rem;">
                  <div style="display: flex; flex-direction: column; gap: 0.35rem;">
                    <textarea class="editable-plan-input" rows="2" style="resize: vertical; line-height: 1.35;" placeholder="Nội dung tóm tắt..." onblur="onPlanCellEdit('${s.lessonId}', 'integrationBrief', this.value)">${s.integrationBrief || ''}</textarea>
                    <div style="display: flex; justify-content: flex-end;">
                      <button type="button" class="btn btn-sm btn-outline" style="font-size: 0.72rem; padding: 2px 7px; color: ${isExpanded ? '#db2777' : '#7c3aed'}; border-color: ${isExpanded ? '#fbcfe8' : '#ddd6fe'}; background: ${isExpanded ? '#fdf2f8' : '#ffffff'}; font-weight: 700;" onclick="togglePlanLessonDetail('${s.lessonId}')">
                        <i class="fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-eye'}"></i> ${isExpanded ? 'Đóng chi tiết' : 'Đọc & Sửa lời văn AI (YCCĐ, GV-HS)'}
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              ${isExpanded ? `
                <tr style="background: #faf5ff; border-bottom: 2px solid #c084fc;">
                  <td colspan="7" style="padding: 0.75rem 1rem;">
                    <div style="background: #ffffff; border: 1px solid #e9d5ff; border-radius: 6px; padding: 0.85rem; box-shadow: 0 2px 8px rgba(124, 58, 237, 0.08);">
                      <div style="font-size: 0.82rem; font-weight: 800; color: #6b21a8; margin-bottom: 0.65rem; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px dashed #e9d5ff; padding-bottom: 0.4rem;">
                        <span><i class="fa-solid fa-file-pen"></i> NỘI DUNG TOÀN VĂN AI SẼ CHÈN VÀO BÀI NÀY (BẠN CÓ THỂ ĐỌC VÀ SỬA TỪNG CHỮ):</span>
                        <span style="font-size: 0.72rem; font-weight: 700; color: #16a34a;"><i class="fa-solid fa-circle-check"></i> Chuẩn CV 2345/BGDĐT-GDTH</span>
                      </div>

                      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 0.65rem;">
                        <div>
                          <label style="font-size: 0.74rem; font-weight: 700; color: #334155; display: block; margin-bottom: 3px;">
                            <i class="fa-solid fa-bullseye" style="color: #db2777;"></i> 1. Mục I.4 - Yêu cầu cần đạt mới (Chèn vào KHBD):
                          </label>
                          <textarea class="form-control" rows="2" style="font-size: 0.78rem; line-height: 1.4; border-color: #fbcfe8;" placeholder="Mục tiêu cần đạt..." onblur="onPlanCellEdit('${s.lessonId}', 'yccdAddition', this.value)">${s.yccdAddition || ''}</textarea>
                        </div>
                        <div>
                          <label style="font-size: 0.74rem; font-weight: 700; color: #334155; display: block; margin-bottom: 3px;">
                            <i class="fa-solid fa-toolbox" style="color: #2563eb;"></i> 2. Mục II - Đồ dùng dạy học bổ sung:
                          </label>
                          <textarea class="form-control" rows="2" style="font-size: 0.78rem; line-height: 1.4; border-color: #bfdbfe;" placeholder="Đồ dùng dạy học..." onblur="onPlanCellEdit('${s.lessonId}', 'dodungAddition', this.value)">${s.dodungAddition || ''}</textarea>
                        </div>
                      </div>

                      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
                        <div>
                          <label style="font-size: 0.74rem; font-weight: 700; color: #15803d; display: block; margin-bottom: 3px;">
                            <i class="fa-solid fa-chalkboard-user"></i> 3. Mục III - Lời thoại của Giáo viên (${s.targetPart}):
                          </label>
                          <textarea class="form-control" rows="3" style="font-size: 0.78rem; line-height: 1.4; background: #f0fdf4; border-color: #bbf7d0;" placeholder="Lời thoại hướng dẫn của GV..." onblur="onPlanActivityEdit('${s.lessonId}', 'teacherAct', this.value)">${(s.activityAddition && s.activityAddition.teacherAct) || ''}</textarea>
                        </div>
                        <div>
                          <label style="font-size: 0.74rem; font-weight: 700; color: #0369a1; display: block; margin-bottom: 3px;">
                            <i class="fa-solid fa-user-graduate"></i> 4. Mục III - Hoạt động của Học sinh (${s.targetPart}):
                          </label>
                          <textarea class="form-control" rows="3" style="font-size: 0.78rem; line-height: 1.4; background: #f0f9ff; border-color: #bae6fd;" placeholder="Hành động, phát biểu của HS..." onblur="onPlanActivityEdit('${s.lessonId}', 'studentAct', this.value)">${(s.activityAddition && s.activityAddition.studentAct) || ''}</textarea>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ` : ''}
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;

  return headerHtml + tableGuideHtml + tableHtml + feedbackBoxHtml;
}

function onPlanCellEdit(lessonId, fieldName, value) {
  if (!integrationState.analyzedPlan) return;
  var item = (integrationState.analyzedPlan.suggestions || []).find(function(s) { return s.lessonId === lessonId; });
  if (item) {
    item[fieldName] = value;
    if (fieldName === 'targetPart' && item.activityAddition) {
      item.activityAddition.stepName = value + ' (3-5 phút)';
    }
  }
}

function onPlanActivityEdit(lessonId, actField, value) {
  if (!integrationState.analyzedPlan) return;
  var item = (integrationState.analyzedPlan.suggestions || []).find(function(s) { return s.lessonId === lessonId; });
  if (item) {
    if (!item.activityAddition) item.activityAddition = {};
    item.activityAddition[actField] = value;
  }
}

function togglePlanLessonDetail(lessonId) {
  if (!integrationState.expandedLessons) integrationState.expandedLessons = {};
  integrationState.expandedLessons[lessonId] = !integrationState.expandedLessons[lessonId];
  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
}

function toggleExpandAllPlanDetails() {
  integrationState.expandAllPlanDetails = !integrationState.expandAllPlanDetails;
  if (integrationState.analyzedPlan && integrationState.analyzedPlan.suggestions) {
    if (!integrationState.expandedLessons) integrationState.expandedLessons = {};
    integrationState.analyzedPlan.suggestions.forEach(function(s) {
      integrationState.expandedLessons[s.lessonId] = integrationState.expandAllPlanDetails;
    });
  }
  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
}

// XỬ LÝ GỬI GÓP Ý ĐỂ AI SỬA KẾ HOẠCH
async function triggerSendIntegrationFeedback() {
  var feedbackInput = document.getElementById('integFeedbackInput');
  var feedbackText = (feedbackInput ? feedbackInput.value : integrationState.userFeedbackInput) || '';
  if (!feedbackText.trim()) {
    showToast('Vui lòng nhập nội dung góp ý cho AI!', 'warning');
    return;
  }

  var btn = document.getElementById('btnSendFeedbackToAi');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Đang sửa...</span>';
  }

  try {
    var updatedPlan = await IntegrationService.refineIntegrationPlanWithFeedback(integrationState.analyzedPlan, feedbackText);
    integrationState.analyzedPlan = updatedPlan;
    integrationState.userFeedbackInput = '';
    await syncAppliedLessonsFromPlan();

    var container = document.getElementById('content-container');
    if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
      renderAiIntegrationView(container);
    }
    showToast('AI đã tiếp thu góp ý và cập nhật lại kế hoạch thành công!', 'success');

  } catch (err) {
    console.error('Feedback error:', err);
    showToast(err.message || 'Có lỗi khi cập nhật kế hoạch', 'danger');
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> <span>GỬI GÓP Ý</span>';
    }
  }
}

async function toggleIntegrationLessonSelect(lessonId) {
  integrationState.selectedLessons[lessonId] = !integrationState.selectedLessons[lessonId];
  var count = Object.values(integrationState.selectedLessons).filter(Boolean).length;
  var badge = document.getElementById('integSelectedCountBadge');
  if (badge) badge.textContent = count;
  if (integrationState.step2ViewMode === 'word_lesson') {
    await syncAppliedLessonsFromPlan();
    var container = document.getElementById('content-container');
    if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
      renderAiIntegrationView(container);
    }
  }
}

async function toggleSelectAllIntegrationLessons(checked) {
  if (!integrationState.analyzedPlan) return;
  integrationState.analyzedPlan.suggestions.forEach(function(s) {
    integrationState.selectedLessons[s.lessonId] = checked;
    var chk = document.getElementById('chk_integ_' + s.lessonId);
    if (chk) chk.checked = checked;
  });
  var count = Object.values(integrationState.selectedLessons).filter(Boolean).length;
  var badge = document.getElementById('integSelectedCountBadge');
  if (badge) badge.textContent = count;
  if (integrationState.step2ViewMode === 'word_lesson') {
    await syncAppliedLessonsFromPlan();
    var container = document.getElementById('content-container');
    if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
      renderAiIntegrationView(container);
    }
  }
}

// BƯỚC 3: XÁC NHẬN & CHÈN VÀO GIÁO ÁN
async function triggerApplyAndPreviewIntegration() {
  if (!integrationState.analyzedPlan) return;
  var output = document.getElementById('integOutputContainer');
  if (!output) return;

  var isTimetableMode = (integrationState.exportMode === 'timetable');

  output.innerHTML = `
    <div style="text-align: center; padding: 5rem 1rem;">
      <div class="spinner" style="width: 48px; height: 48px; border-width: 4px; border-color: #bbf7d0; border-top-color: #16a34a; margin: 0 auto 1.25rem;"></div>
      <h4 style="color: #16a34a; font-weight: 800; font-size: 1.15rem; margin-bottom: 0.5rem;">Đang chèn kế hoạch đã duyệt vào 100% Giáo án gốc (CV 2345)...</h4>
      <p style="color: var(--text-muted); font-size: 0.85rem; max-width: 450px; margin: 0 auto; line-height: 1.5;">
        Đang chèn chính xác vào <strong>Mục I (Yêu cầu cần đạt)</strong>, <strong>Mục II (Đồ dùng dạy học)</strong> và <strong>Mục III (Tiến trình hoạt động dạy học GV-HS)</strong>...
      </p>
    </div>
  `;

  try {
    if (isTimetableMode) {
      // Build timetable integrated weeks
      var grade = integrationState.grade || 5;
      var sWeek = integrationState.startWeek || 1;
      var eWeek = integrationState.endWeek || sWeek;
      
      // Build integratedMap from analyzedPlan
      var integratedMap = {};
      (integrationState.analyzedPlan.suggestions || []).forEach(function(s) {
        if (integrationState.selectedLessons[s.lessonId] !== false) {
          integratedMap[s.lessonId] = s;
          integratedMap[(s.subjectKey || integrationState.subjectKey) + '_' + s.week + '_' + (s.periodIndex || 0)] = s;
        }
      });

      var isGvbm = isGvbmRole(integrationState.timetableRole);
      var weeklyResults = [];
      for (var w = sWeek; w <= eWeek; w++) {
        var wPlan;
        if (isGvbm) {
          var cfg = integrationState.gvbmConfig || {};
          var gvbmMeta = {
            role: 'gvbm',
            isAssignmentMode: true,
            week: w,
            schoolName: cfg.schoolName || integrationState.schoolName,
            teacherName: cfg.teacherName || integrationState.teacherName,
            schoolYear: cfg.schoolYear || integrationState.schoolYear,
            department: cfg.department || 'Tổ Chuyên biệt / Bộ môn',
            disabilitySupport: integrationState.disabilitySupport
          };
          wPlan = await IntegrationService.buildWeeklyPlanByAssignments(
            integrationState.gvbmAssignments,
            w,
            integratedMap,
            integrationState.overwriteLegacy !== false,
            gvbmMeta
          );
        } else {
          wPlan = await IntegrationService.buildWeeklyPlanByTimetable(
            grade, 
            w, 
            integrationState.customTimetable, 
            integratedMap, 
            integrationState.overwriteLegacy !== false,
            { disabilitySupport: integrationState.disabilitySupport }
          );
        }
        weeklyResults.push(wPlan);
      }

      integrationState.timetableAppliedWeeks = weeklyResults;
      integrationState.activeTimetableWeekIndex = 0;
      integrationState.activeTimetableLessonIndex = 0;
      integrationState.activeStep = 3;

    } else {
      var applied = await IntegrationService.applyIntegrationToWeekRange(
        integrationState.analyzedPlan,
        integrationState.selectedLessons,
        integrationState.overwriteLegacy !== false
      );

      integrationState.appliedLessons = applied;
      integrationState.activePreviewLessonIndex = 0;
      integrationState.activeStep = 3;
    }

    var container = document.getElementById('content-container');
    if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
      renderAiIntegrationView(container);
    }
    showToast('Đã tích hợp thành công! Bạn có thể xem trước và tải file Word.', 'success');

  } catch (err) {
    console.error('Apply error:', err);
    output.innerHTML = `
      <div style="text-align: center; padding: 4rem 1rem; color: #dc2626;">
        <i class="fa-solid fa-circle-exclamation" style="font-size: 3rem; margin-bottom: 1rem;"></i>
        <h4>Lỗi khi chèn vào giáo án</h4>
        <p style="font-size: 0.85rem;">${err.message || 'Lỗi không xác định.'}</p>
        <button class="btn btn-primary" onclick="triggerApplyAndPreviewIntegration()">Thử lại</button>
      </div>
    `;
  }
}

// RENDER BƯỚC 3: XEM TRƯỚC THEO MÔN
function renderIntegrationFinalPreviewHtml() {
  var lessons = integrationState.appliedLessons || [];
  if (lessons.length === 0) {
    return renderIntegrationIdleStateHtml();
  }

  var activeIdx = integrationState.activePreviewLessonIndex || 0;
  if (activeIdx >= lessons.length) activeIdx = 0;
  var currentLesson = lessons[activeIdx] || {};
  var isOrig = !!integrationState.isOriginalPreview;

  return `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.85rem; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
      <div>
        <div style="font-size: 0.75rem; font-weight: 800; color: ${isOrig ? '#1e40af' : '#16a34a'}; text-transform: uppercase; display: flex; align-items: center; gap: 0.4rem;">
          <i class="fa-solid ${isOrig ? 'fa-book-open' : 'fa-circle-check'}"></i> 
          ${isOrig ? 'XEM TRƯỚC KẾ HOẠCH BÀI DẠY GỐC (CHUẨN CV 2345)' : 'GIÁO ÁN ĐÃ TÍCH HỢP HOÀN TẤT (BƯỚC 3/3)'}
        </div>
        <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--text-color); margin: 0.2rem 0;">
          Chuẩn Công văn 2345/BGDĐT-GDTH (${lessons.length} bài dạy)
        </h3>
        <div style="font-size: 0.8rem; color: var(--text-muted);">
          ${isOrig ? 
            `Môn: <strong style="color: #1e40af;">${IntegrationService.getSubjectDisplayName(integrationState.subjectKey || 'toan')}</strong> • Khối <strong>${integrationState.grade || 5}</strong> • Tuần <strong>${integrationState.startWeek || 1} - ${integrationState.endWeek || integrationState.startWeek || 1}</strong>` : 
            `Tài liệu tích hợp: <strong style="color: #db2777;">${integrationState.uploadedDocName || 'Chuyên đề mới'}</strong>`
          }
        </div>
      </div>

      <div style="display: flex; gap: 0.5rem; align-items: center;">
        ${isOrig ? `
          <button class="btn btn-outline" style="font-size: 0.82rem;" onclick="resetIntegrationToSetup()">
            <i class="fa-solid fa-arrow-left"></i> Quay lại chọn môn/tuần
          </button>
          <button class="btn btn-outline" style="font-size: 0.82rem;" onclick="printIntegratedLessonSheet()" title="In bài dạy đang xem ra giấy">
            <i class="fa-solid fa-print"></i> In bài này
          </button>
          <button class="btn btn-primary" style="background: linear-gradient(135deg, #1e40af, #3b82f6); border: none; font-weight: 800; box-shadow: 0 4px 12px rgba(30, 64, 175, 0.35); padding: 0.65rem 1.25rem;" onclick="triggerDirectFastExport()">
            <i class="fa-solid fa-file-word"></i> TẢI FILE WORD GỐC (.DOC)
          </button>
        ` : `
          <button class="btn btn-outline" style="font-size: 0.82rem;" onclick="resetIntegrationToPlanStep()">
            <i class="fa-solid fa-pen-to-square"></i> Sửa lại kế hoạch
          </button>
          <button class="btn btn-outline" style="font-size: 0.82rem;" onclick="printIntegratedLessonSheet()" title="In bài dạy đang xem ra giấy">
            <i class="fa-solid fa-print"></i> In bài này
          </button>
          <button class="btn btn-primary" style="background: linear-gradient(135deg, #1e40af, #3b82f6); border: none; font-weight: 800; box-shadow: 0 4px 12px rgba(30, 64, 175, 0.35); padding: 0.65rem 1.25rem;" onclick="triggerExportIntegrationWord()">
            <i class="fa-solid fa-file-word"></i> TẢI FILE WORD (.DOC)
          </button>
        `}
      </div>
    </div>

    <!-- THANH ĐIỀU HƯỚNG TỪNG BÀI DẠY -->
    <div style="display: flex; gap: 0.4rem; overflow-x: auto; padding-bottom: 0.5rem; margin-bottom: 1rem; border-bottom: 1px dashed var(--border-color);">
      ${lessons.map(function(les, idx) {
        var isAct = idx === activeIdx;
        var actBtnBg = isOrig ? 'background: #1e40af; border-color: #1e40af; color: white;' : 'background: #db2777; border-color: #db2777; color: white;';
        return `
          <button class="btn btn-sm ${isAct ? 'btn-primary' : 'btn-outline'}" style="font-size: 0.78rem; white-space: nowrap; ${isAct ? actBtnBg : ''}" onclick="switchIntegrationPreviewLesson(${idx})">
            T.${les.week || (idx+1)} • ${les.period || ('Tiết ' + (idx+1))}
          </button>
        `;
      }).join('')}
    </div>

    <!-- SHEET XEM TRƯỚC GIÁO ÁN CHUẨN IN -->
    <div class="integrated-doc-sheet" style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: var(--radius-md); padding: 2.5rem 3rem; box-shadow: 0 4px 25px rgba(0,0,0,0.06); max-height: 750px; overflow-y: auto; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.4; color: #0f172a;">
      ${renderIntegratedLessonSheetContent(currentLesson, activeIdx === lessons.length - 1)}
    </div>
  `;
}

// RENDER BƯỚC 3: XEM TRƯỚC THEO LỊCH DẠY CHO GIÁO VIÊN BỘ MÔN (ĐA KHỐI)
function renderIntegrationGvbmFinalPreviewHtml() {
  var weeks = integrationState.timetableAppliedWeeks || [];
  if (weeks.length === 0) return renderIntegrationIdleStateHtml();

  var wIdx = integrationState.activeTimetableWeekIndex || 0;
  if (wIdx >= weeks.length) wIdx = 0;
  var curWeekData = weeks[wIdx] || {};
  var lessons = curWeekData.lessons || [];

  var lIdx = integrationState.activeTimetableLessonIndex || 0;
  if (lIdx >= lessons.length) lIdx = 0;
  var currentLesson = lessons[lIdx] || {};
  var isOrig = !!integrationState.isOriginalPreview;
  var cfg = integrationState.gvbmConfig || {};
  var subjName = IntegrationService.getSubjectDisplayName(cfg.subjectKey || 'am_nhac');

  var gradeColors = {
    1: '#059669', // Emerald
    2: '#0284c7', // Sky blue
    3: '#7c3aed', // Purple
    4: '#d97706', // Amber
    5: '#db2777'  // Pink
  };

  return `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.85rem; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
      <div>
        <div style="font-size: 0.75rem; font-weight: 800; color: #0284c7; text-transform: uppercase; display: flex; align-items: center; gap: 0.4rem;">
          <i class="fa-solid fa-user-tie"></i> 
          GIÁO VIÊN BỘ MÔN (ĐA KHỐI • ĐA MÔN) • XEM TRƯỚC THEO PHÂN CÔNG GIẢNG DẠY
        </div>
        <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--text-color); margin: 0.2rem 0;">
          Kế hoạch bài dạy Tuần ${curWeekData.week} (${(curWeekData.assignments && curWeekData.assignments.length) || (cfg.assignments && cfg.assignments.length) || 1} môn phân công • ${lessons.length} KHBD theo tiết)
        </h3>
        <div style="font-size: 0.8rem; color: var(--text-muted);">
          Giáo viên: <strong style="color: #0284c7;">${cfg.teacherName || '.................................................'}</strong>
          ${cfg.department ? (' • Tổ: <strong>' + cfg.department + '</strong>') : ''}
          ${cfg.schoolName ? (' • ' + cfg.schoolName) : ''}
          • Năm học: <strong>${cfg.schoolYear || '2026 - 2027'}</strong>
        </div>
      </div>

      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <button class="btn btn-outline" style="font-size: 0.82rem;" onclick="resetIntegrationToSetup()">
          <i class="fa-solid fa-arrow-left"></i> Quay lại cấu hình
        </button>
        <button class="btn btn-outline" style="font-size: 0.82rem;" onclick="printIntegratedLessonSheet()" title="In bài dạy đang xem ra giấy">
          <i class="fa-solid fa-print"></i> In bài này
        </button>
        <button class="btn btn-primary" style="background: linear-gradient(135deg, #0284c7, #0ea5e9); border: none; font-weight: 800; box-shadow: 0 4px 12px rgba(2, 132, 199, 0.35); padding: 0.65rem 1.25rem;" onclick="${isOrig ? 'triggerDirectFastExport()' : 'triggerExportAllTimetableWeeksWord()'}">
          <i class="fa-solid fa-file-word"></i> TẢI ${weeks.length > 1 ? (weeks.length + ' FILE WORD BỘ MÔN (1 FILE/TUẦN)') : 'FILE WORD TUẦN NÀY'}
        </button>
      </div>
    </div>

    <!-- KHUNG TÓM TẮT PHÂN CÔNG TUẦN NÀY -->
    <div style="background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 6px; padding: 0.55rem 0.85rem; margin-bottom: 0.85rem; font-size: 0.78rem; color: #0369a1; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
      <div>
        <i class="fa-solid fa-circle-check" style="color: #0284c7;"></i>
        <strong>Nguyên tắc xuất chuẩn:</strong> 1 Môn dạy nhiều lớp cùng khối xuất đúng <strong>1 Kế hoạch bài dạy theo từng tiết học</strong> kèm danh sách tất cả các lớp phụ trách. File Word kèm Bảng phân công chuyên môn chính thức chuẩn CV 2345.
      </div>
      <span style="font-weight: 800; color: #0284c7; background: #fff; border: 1px solid #bae6fd; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem;">
        ${(curWeekData.assignments && curWeekData.assignments.length) || (cfg.assignments && cfg.assignments.length) || 1} môn phân công • ${lessons.length} KHBD theo tiết
      </span>
    </div>

    <!-- THANH CHỌN TUẦN -->
    ${weeks.length > 1 ? `
      <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem; align-items: center;">
        <span style="font-size: 0.8rem; font-weight: 700; color: #475569;">Chọn Tuần xem trước:</span>
        ${weeks.map(function(wItem, idx) {
          var isWAct = idx === wIdx;
          return `
            <button class="btn btn-sm ${isWAct ? 'btn-primary' : 'btn-outline'}" style="font-size: 0.78rem; ${isWAct ? 'background: #0284c7; border-color: #0284c7; color: white;' : ''}" onclick="switchTimetablePreviewWeek(${idx})">
              Tuần ${wItem.week}
            </button>
          `;
        }).join('')}
      </div>
    ` : ''}

    <!-- THANH ĐIỀU HƯỚNG TỪNG BÀI DẠY CỦA GIÁO VIÊN BỘ MÔN (CÓ BADGE KHỐI, TIẾT & LỚP) -->
    <div style="display: flex; gap: 0.35rem; overflow-x: auto; padding-bottom: 0.5rem; margin-bottom: 1rem; border-bottom: 1px dashed var(--border-color);">
      ${lessons.map(function(les, idx) {
        var isAct = idx === lIdx;
        var actBtnBg = 'background: #0284c7; border-color: #0284c7; color: white;';
        var gColor = gradeColors[les.grade] || '#64748b';
        var sName = les.subjectName || IntegrationService.getSubjectDisplayName(les.subjectKey || 'am_nhac');
        var clsLabel = les.classes ? ('Lớp ' + les.classes) : (les.className || ('Khối ' + les.grade));
        var rawT = les.lessonTitle || les.title || '';
        var cleanT = (typeof IntegrationService !== 'undefined' && IntegrationService.cleanLessonTitle) ? IntegrationService.cleanLessonTitle(rawT) : rawT;
        var periodBadge = les.period ? (String(les.period).indexOf('Tiết') !== -1 ? les.period.split('(')[0].trim() : ('Tiết ' + les.period)) : '';

        return `
          <button class="btn btn-sm ${isAct ? 'btn-primary' : 'btn-outline'}" 
                  style="font-size: 0.74rem; white-space: nowrap; display: inline-flex; align-items: center; gap: 6px; padding: 4px 9px; ${isAct ? actBtnBg : ''}" 
                  onclick="switchTimetablePreviewLesson(${idx})"
                  title="${sName} - Khối ${les.grade} (${clsLabel}) ${periodBadge ? ' • ' + periodBadge : ''}${cleanT ? ' - ' + cleanT : ''}">
            <span style="background: ${isAct ? 'rgba(255,255,255,0.25)' : gColor}; color: white; padding: 1px 5px; border-radius: 3px; font-size: 0.65rem; font-weight: 800;">
              K${les.grade}
            </span>
            <span><strong>${sName}</strong></span>
            ${periodBadge ? `<span style="background: ${isAct ? 'rgba(255,255,255,0.25)' : '#e0f2fe'}; color: ${isAct ? '#ffffff' : '#0369a1'}; padding: 1px 6px; border-radius: 10px; font-size: 0.68rem; font-weight: 800; border: 1px solid ${isAct ? 'rgba(255,255,255,0.4)' : '#bae6fd'};">${periodBadge}</span>` : ''}
            <span style="opacity: 0.85; font-size: 0.7rem;">(${clsLabel})</span>
          </button>
        `;
      }).join('')}
    </div>

    <!-- SHEET XEM TRƯỚC GIÁO ÁN CHUẨN IN CỦA GIÁO VIÊN BỘ MÔN -->
    <div class="integrated-doc-sheet" style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: var(--radius-md); padding: 2.5rem 3rem; box-shadow: 0 4px 25px rgba(0,0,0,0.06); max-height: 750px; overflow-y: auto; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.4; color: #0f172a;">
      ${renderIntegratedLessonSheetContent(currentLesson, lIdx === lessons.length - 1)}
    </div>
  `;
}

// RENDER BƯỚC 3: XEM TRƯỚC THEO THỜI KHÓA BIỂU
function renderIntegrationTimetableFinalPreviewHtml() {
  var weeks = integrationState.timetableAppliedWeeks || [];
  if (weeks.length === 0) return renderIntegrationIdleStateHtml();

  var wIdx = integrationState.activeTimetableWeekIndex || 0;
  if (wIdx >= weeks.length) wIdx = 0;
  var curWeekData = weeks[wIdx] || {};
  var lessons = curWeekData.lessons || [];

  var lIdx = integrationState.activeTimetableLessonIndex || 0;
  if (lIdx >= lessons.length) lIdx = 0;
  var currentLesson = lessons[lIdx] || {};
  var isOrig = !!integrationState.isOriginalPreview;

  return `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.85rem; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
      <div>
        <div style="font-size: 0.75rem; font-weight: 800; color: ${isOrig ? '#1e40af' : '#16a34a'}; text-transform: uppercase; display: flex; align-items: center; gap: 0.4rem;">
          <i class="fa-solid ${isOrig ? 'fa-calendar-days' : 'fa-calendar-check'}"></i> 
          ${isOrig ? 'XEM TRƯỚC KHBD GỐC THEO THỜI KHÓA BIỂU' : 'KHBD THEO THỜI KHÓA BIỂU (BƯỚC 3/3)'}
        </div>
        <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--text-color); margin: 0.2rem 0;">
          Khối ${curWeekData.grade || 5} • Tuần ${curWeekData.week} (${lessons.length} tiết học)
        </h3>
        <div style="font-size: 0.8rem; color: var(--text-muted);">
          ${isOrig ? 
            'Kế hoạch bài dạy gốc theo Thời khóa biểu (Chuẩn Công văn 2345)' : 
            `Tài liệu tích hợp: <strong style="color: #db2777;">${integrationState.uploadedDocName || 'Kế hoạch chuẩn'}</strong>`
          }
        </div>
      </div>

      <div style="display: flex; gap: 0.5rem; align-items: center;">
        ${isOrig ? `
          <button class="btn btn-outline" style="font-size: 0.82rem;" onclick="resetIntegrationToSetup()">
            <i class="fa-solid fa-arrow-left"></i> Quay lại chọn tuần
          </button>
          <button class="btn btn-outline" style="font-size: 0.82rem;" onclick="printIntegratedLessonSheet()" title="In bài dạy đang xem ra giấy">
            <i class="fa-solid fa-print"></i> In bài này
          </button>
          <button class="btn btn-primary" style="background: linear-gradient(135deg, #1e40af, #3b82f6); border: none; font-weight: 800; box-shadow: 0 4px 12px rgba(30, 64, 175, 0.35); padding: 0.65rem 1.25rem;" onclick="triggerDirectFastExport()">
            <i class="fa-solid fa-file-word"></i> TẢI ${weeks.length > 1 ? (weeks.length + ' FILE WORD (1 FILE/TUẦN)') : 'FILE WORD TUẦN NÀY'}
          </button>
        ` : `
          <button class="btn btn-outline" style="font-size: 0.82rem;" onclick="resetIntegrationToPlanStep()">
            <i class="fa-solid fa-pen-to-square"></i> Sửa lại kế hoạch
          </button>
          <button class="btn btn-outline" style="font-size: 0.82rem;" onclick="printIntegratedLessonSheet()" title="In bài dạy đang xem ra giấy">
            <i class="fa-solid fa-print"></i> In bài này
          </button>
          <button class="btn btn-primary" style="background: linear-gradient(135deg, #1e40af, #3b82f6); border: none; font-weight: 800; box-shadow: 0 4px 12px rgba(30, 64, 175, 0.35); padding: 0.65rem 1.25rem;" onclick="triggerExportAllTimetableWeeksWord()">
            <i class="fa-solid fa-file-word"></i> TẢI ${weeks.length > 1 ? (weeks.length + ' FILE WORD (1 FILE/TUẦN)') : 'FILE WORD TUẦN NÀY'}
          </button>
        `}
      </div>
    </div>

    <!-- THANH CHỌN TUẦN -->
    ${weeks.length > 1 ? `
      <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem; align-items: center;">
        <span style="font-size: 0.8rem; font-weight: 700; color: #475569;">Chọn Tuần xem trước:</span>
        ${weeks.map(function(wItem, idx) {
          var isWAct = idx === wIdx;
          return `
            <button class="btn btn-sm ${isWAct ? 'btn-primary' : 'btn-outline'}" style="font-size: 0.78rem; ${isWAct ? 'background: #1e40af; border-color: #1e40af;' : ''}" onclick="switchTimetablePreviewWeek(${idx})">
              Tuần ${wItem.week}
            </button>
          `;
        }).join('')}
      </div>
    ` : ''}

    <!-- THANH ĐIỀU HƯỚNG TỪNG TIẾT TRONG TUẦN -->
    <div style="display: flex; gap: 0.35rem; overflow-x: auto; padding-bottom: 0.5rem; margin-bottom: 1rem; border-bottom: 1px dashed var(--border-color);">
      ${lessons.map(function(les, idx) {
        var isAct = idx === lIdx;
        var actBtnBg = isOrig ? 'background: #1e40af; border-color: #1e40af; color: white;' : 'background: #db2777; border-color: #db2777; color: white;';
        return `
          <button class="btn btn-sm ${isAct ? 'btn-primary' : 'btn-outline'}" style="font-size: 0.74rem; white-space: nowrap; ${isAct ? actBtnBg : ''}" onclick="switchTimetablePreviewLesson(${idx})">
            ${les.dayName || ('T' + (les.week))} • ${les.subjectName || les.subjectKey} (${les.period || ('Tiết ' + (idx+1))})
          </button>
        `;
      }).join('')}
    </div>

    <!-- SHEET XEM TRƯỚC GIÁO ÁN CHUẨN IN -->
    <div class="integrated-doc-sheet" style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: var(--radius-md); padding: 2.5rem 3rem; box-shadow: 0 4px 25px rgba(0,0,0,0.06); max-height: 750px; overflow-y: auto; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.4; color: #0f172a;">
      ${renderIntegratedLessonSheetContent(currentLesson, lIdx === lessons.length - 1)}
    </div>
  `;
}

function switchTimetablePreviewWeek(idx) {
  integrationState.activeTimetableWeekIndex = parseInt(idx) || 0;
  integrationState.activeTimetableLessonIndex = 0;
  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
}

function switchTimetablePreviewLesson(idx) {
  integrationState.activeTimetableLessonIndex = parseInt(idx) || 0;
  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
}

async function triggerExportAllTimetableWeeksWord() {
  var weeks = integrationState.timetableAppliedWeeks || [];
  if (weeks.length === 0) {
    showToast('Chưa có dữ liệu giáo án theo TKB để xuất!', 'warning');
    return;
  }

  var isGvbm = isGvbmRole(integrationState.timetableRole);
  var cfg = integrationState.gvbmConfig || {};
  var anyAborted = false;

  for (var i = 0; i < weeks.length; i++) {
    var wData = weeks[i];
    var filename, resW;

    if (isGvbm) {
      var gvbmTeacher = cfg.teacherName || integrationState.teacherName || '';
      filename = IntegrationService.appendTeacherNameToFilename('KHBD_Tuan_' + wData.week + '_GV_BoMon_TichHop.doc', gvbmTeacher);
      resW = await IntegrationService.exportWeekByTimetableWord(wData, {
        role: 'gvbm',
        isAssignmentMode: true,
        week: wData.week,
        schoolName: cfg.schoolName || integrationState.schoolName,
        teacherName: gvbmTeacher,
        schoolYear: cfg.schoolYear || integrationState.schoolYear,
        department: cfg.department || 'Tổ Chuyên biệt / Bộ môn',
        disabilitySupport: integrationState.disabilitySupport,
        approvalConfig: integrationState.approvalConfig,
        filename: filename
      });
    } else {
      var gvcnTeacher = integrationState.teacherName || '';
      filename = IntegrationService.appendTeacherNameToFilename('KHBD_Tuan_' + wData.week + '_Lop_' + (wData.grade || 5) + '_TKB_TichHop.doc', gvcnTeacher);
      resW = await IntegrationService.exportWeekByTimetableWord(wData, {
        grade: wData.grade,
        week: wData.week,
        schoolName: integrationState.schoolName,
        teacherName: gvcnTeacher,
        schoolYear: integrationState.schoolYear,
        className: integrationState.className,
        disabilitySupport: integrationState.disabilitySupport,
        approvalConfig: integrationState.approvalConfig,
        filename: filename
      });
    }

    if (resW && resW.aborted) {
      anyAborted = true;
      showToast('Đã dừng xuất các tuần tiếp theo theo yêu cầu.', 'info');
      break;
    }
    if (i < weeks.length - 1) {
      await new Promise(function(res) { setTimeout(res, 600); });
    }
  }
  if (!anyAborted) {
    showToast('Đã tải xuống ' + weeks.length + ' file Word Kế hoạch bài dạy theo Thời khóa biểu!', 'success');
  }
}

function renderIntegratedLessonSheetContent(les, isLastLesson) {
  if (!les) {
    return '<div style="text-align: center; padding: 2rem;">Chưa có dữ liệu bài dạy.</div>';
  }
  // Nếu truyền nhầm một object tuần chứa mảng bài học
  if ((!les.title && !les.lessonTitle) && Array.isArray(les.lessons) && les.lessons.length > 0) {
    les = les.lessons[0];
  }
  if (!les || (!les.title && !les.lessonTitle)) {
    return '<div style="text-align: center; padding: 2rem;">Chưa có dữ liệu bài dạy.</div>';
  }
  if (typeof IntegrationService !== 'undefined' && IntegrationService.cleanLessonTitle) {
    if (les.title) les.title = IntegrationService.cleanLessonTitle(les.title);
    if (les.lessonTitle) les.lessonTitle = IntegrationService.cleanLessonTitle(les.lessonTitle);
  }
  if (!les.title && les.lessonTitle) {
    les.title = les.lessonTitle;
  }
  if (!les.lessonTitle && les.title) {
    les.lessonTitle = les.title;
  }

  var isDouble = (les.periodSlot && les.periodSlot.toString().includes('-')) || (les.period && (les.period.toLowerCase().includes('2 tiết') || les.period.toLowerCase().includes('tiết đôi')));
  var durationDefault = isDouble ? '70 phút' : '35 phút';

  var currentWeekNum = (les.week) || (integrationState.startWeek) || (integrationState.activeTimetableWeekIndex ? (integrationState.activeTimetableWeekIndex + 1) : 1);
  var lessonDateInfo = (window.AcademicCalendar && les.dayName) ? AcademicCalendar.getDayDate(currentWeekNum, les.dayName) : null;
  var dateStr = lessonDateInfo ? lessonDateInfo.formatted : '';
  var durationWithDate = dateStr ? (durationDefault + ' (ngày ' + dateStr + ')') : durationDefault;

  var yccdHtml = (les.yccd || []).map(function(line) {
    if (typeof line !== 'string') return '';
    var cleanLine = line;
    if (/^[\s\-–—*•]*thời\s*gian\s*thực\s*hiện\s*:\s*[.\s_]*(?:\(.*\))?$/i.test(line)) {
      cleanLine = 'Thời gian thực hiện: ' + durationWithDate;
    } else if (/^[\s\-–—*•]*thời\s*gian\s*thực\s*hiện\s*:\s*[.\s_]+/i.test(line)) {
      cleanLine = line.replace(/:\s*[.\s_]+/, ': ' + durationWithDate + ' ');
    } else if (/^[\s\-–—*•]*ngày\s*thực\s*hiện\s*:\s*[.\s_]+$/i.test(line)) {
      cleanLine = 'Ngày thực hiện: ' + (dateStr || '....................................');
    } else if (/ngày\s*thực\s*hiện\s*:\s*[.\s_]{3,}/i.test(line)) {
      cleanLine = line.replace(/ngày\s*thực\s*hiện\s*:\s*[.\s_]{3,}/i, 'Ngày thực hiện: ' + (dateStr || '....................................'));
    }

    var isKhuyetTat = /học sinh khuyết tật/i.test(cleanLine);
    var isDieuChinhHeader = /^5\.\s*điều\s*chỉnh\s*đối\s*với\s*học\s*sinh\s*hòa\s*nhập/i.test(cleanLine);
    if (isDieuChinhHeader && !isKhuyetTat) {
      return '';
    }
    var isTichHop = cleanLine.indexOf('[Tích hợp') !== -1 || cleanLine.indexOf('[Tích hợp mới]') !== -1 || cleanLine.indexOf('(Tích hợp)') !== -1 || cleanLine.indexOf('NỘI DUNG TÍCH HỢP') !== -1;
    if (isKhuyetTat) {
      var displayLine = cleanLine
        .replace(/<!--.*?-->/g, '')
        .replace(/\[?NỘI DUNG TÍCH HỢP MỚI\]?:?\s*/gi, '')
        .replace(/\[?NỘI DUNG TÍCH HỢP\]?:?\s*/gi, '')
        .replace(/\[?TÍCH HỢP MỚI\]?:?\s*/gi, '')
        .replace(/^\[Tích hợp\]\s*/i, '')
        .replace(/\(Tích hợp\)/gi, '')
        .replace(/^5\.\s*điều\s*chỉnh\s*đối\s*với\s*học\s*sinh\s*hòa\s*nhập\s*[:.-]?\s*/gi, '')
        .replace(/[ \t]{2,}/g, ' ')
        .trim();
      if (!displayLine.startsWith('-') && !displayLine.startsWith('+')) {
        displayLine = '- ' + displayLine;
      }
      return `<p style="margin: 0; margin-top: 6px; margin-bottom: 2px; font-weight: bold; color: #7030a0; line-height: 1.35;">5. Điều chỉnh đối với học sinh hòa nhập:</p><p style="margin: 0; margin-top: 2px; margin-bottom: 2px; color: #7030a0; font-weight: 700; line-height: 1.35;">${displayLine}</p>`;
    }
    if (isTichHop) {
      var displayLine = cleanLine
        .replace(/<!--.*?-->/g, '')
        .replace(/\[?NỘI DUNG TÍCH HỢP MỚI\]?:?\s*/gi, '')
        .replace(/\[?NỘI DUNG TÍCH HỢP\]?:?\s*/gi, '')
        .replace(/\[?TÍCH HỢP MỚI\]?:?\s*/gi, '')
        .replace(/^\[Tích hợp\]\s*/i, '')
        .replace(/\(Tích hợp\)/gi, '')
        .replace(/\s{2,}/g, ' ')
        .trim();
      if (!displayLine.startsWith('-') && !displayLine.startsWith('+')) {
        displayLine = '- ' + displayLine;
      }
      return `<p style="margin: 0; margin-top: 0; margin-bottom: 0; color: #7030a0; font-weight: 500; line-height: 1.25;">${displayLine}</p>`;
    }
    return `<p style="margin: 0; margin-top: 0; margin-bottom: 0; line-height: 1.25;">${cleanLine}</p>`;
  }).join('');

  var dodungList = les.dodung || les.teachingAids || [];
  var dodungHtml = dodungList.map(function(line) {
    if (typeof line !== 'string') return '';
    var isTichHop = line.indexOf('[Tích hợp') !== -1 || line.indexOf('[Tích hợp mới]') !== -1 || line.indexOf('(Tích hợp)') !== -1 || line.indexOf('NỘI DUNG TÍCH HỢP') !== -1;
    if (isTichHop) {
      var displayLine = line
        .replace(/<!--.*?-->/g, '')
        .replace(/\[?NỘI DUNG TÍCH HỢP MỚI\]?:?\s*/gi, '')
        .replace(/\[?NỘI DUNG TÍCH HỢP\]?:?\s*/gi, '')
        .replace(/\[?TÍCH HỢP MỚI\]?:?\s*/gi, '')
        .replace(/^\[Tích hợp\]\s*/i, '')
        .replace(/\(Tích hợp\)/gi, '')
        .replace(/\s{2,}/g, ' ')
        .trim();
      if (!displayLine.startsWith('-') && !displayLine.startsWith('+')) {
        displayLine = '- ' + displayLine;
      }
      return `<p style="margin: 0; margin-top: 0; margin-bottom: 0; color: #7030a0; font-weight: 500; line-height: 1.25;">${displayLine}</p>`;
    }
    return `<p style="margin: 0; margin-top: 0; margin-bottom: 0; line-height: 1.25;">${line}</p>`;
  }).join('');

  var isHeaderRow = function(r) {
    if (!Array.isArray(r) || r.length < 2) return false;
    var c0 = (r[0] || '').toLowerCase().trim();
    var c1 = (r[1] || '').toLowerCase().trim();
    var c2 = (r[2] || '').toLowerCase().trim();
    return ((c0.includes('giáo viên') || c0.includes('gv') || c0.includes('dạy học') || c0.includes('thầy')) &&
           (c1.includes('học sinh') || c1.includes('hs') || c1.includes('trò') || c1.includes('luyện tập'))) ||
           (c0.includes('nội dung') && (c1.includes('định lượng') || c2.includes('giáo viên')));
  };

  var tablesHtml = '';
  if (les.tables && les.tables.length > 0) {
    les.tables.forEach(function(tableRows) {
      if (!tableRows || tableRows.length === 0) return;
      var has4Cols = tableRows.some(function(row) { return Array.isArray(row) && row.length === 4; });
      var rowsHtml = '';
      for (var rIdx = 0; rIdx < tableRows.length; rIdx++) {
        var r = tableRows[rIdx];
        if (!Array.isArray(r)) continue;
        if (rIdx === 0 && isHeaderRow(r)) continue;

        if (has4Cols) {
          if (r.length >= 4) {
            var isTichHop = (r[0] || '').indexOf('[Tích hợp') !== -1 || (r[2] || '').indexOf('[Tích hợp') !== -1 || (r[3] || '').indexOf('[Tích hợp') !== -1 || (r[0] || '').indexOf('NỘI DUNG TÍCH HỢP') !== -1;
            var c0 = (r[0] || '').replace(/<!--.*?-->/g, '').replace(/\[?NỘI DUNG TÍCH HỢP MỚI\]?:?\s*/gi, '').replace(/\[?NỘI DUNG TÍCH HỢP\]?:?\s*/gi, '').replace(/\[?TÍCH HỢP MỚI\]?:?\s*/gi, '').replace(/^\[Tích hợp\]\s*/i, '').replace(/\(Tích hợp\)/gi, '').replace(/\s{2,}/g, ' ').trim().replace(/\n/g, '<br/>');
            var c1 = (r[1] || '').trim().replace(/\n/g, '<br/>');
            var c2 = (r[2] || '').replace(/<!--.*?-->/g, '').replace(/\[?NỘI DUNG TÍCH HỢP MỚI\]?:?\s*/gi, '').replace(/\[?NỘI DUNG TÍCH HỢP\]?:?\s*/gi, '').replace(/\[?TÍCH HỢP MỚI\]?:?\s*/gi, '').replace(/^\[Tích hợp\]\s*/i, '').replace(/\(Tích hợp\)/gi, '').replace(/\s{2,}/g, ' ').trim().replace(/\n/g, '<br/>');
            var c3 = (r[3] || '').replace(/<!--.*?-->/g, '').replace(/\[?NỘI DUNG TÍCH HỢP MỚI\]?:?\s*/gi, '').replace(/\[?NỘI DUNG TÍCH HỢP\]?:?\s*/gi, '').replace(/\[?TÍCH HỢP MỚI\]?:?\s*/gi, '').replace(/^\[Tích hợp\]\s*/i, '').replace(/\(Tích hợp\)/gi, '').replace(/\s{2,}/g, ' ').trim().replace(/\n/g, '<br/>');
            var cellStyle = isTichHop ? 'color: #7030a0; font-weight: 500;' : '';

            rowsHtml += `
              <tr>
                <td style="width: 30%; vertical-align: top; padding: 4pt 6pt; border: 1pt solid #cbd5e1; ${cellStyle}">
                  <div style="line-height: 1.25; margin: 0;">${c0}</div>
                </td>
                <td style="width: 15%; vertical-align: top; text-align: center; padding: 4pt 6pt; border: 1pt solid #cbd5e1; ${cellStyle}">
                  <div style="line-height: 1.25; margin: 0;">${c1}</div>
                </td>
                <td style="width: 30%; vertical-align: top; padding: 4pt 6pt; border: 1pt solid #cbd5e1; ${cellStyle}">
                  <div style="line-height: 1.25; margin: 0;">${c2}</div>
                </td>
                <td style="width: 25%; vertical-align: top; padding: 4pt 6pt; border: 1pt solid #cbd5e1; ${cellStyle}">
                  <div style="line-height: 1.25; margin: 0;">${c3}</div>
                </td>
              </tr>
            `;
          } else if (r.length === 1) {
            var rawHeader = r[0] || '';
            var cleanHeader = rawHeader.replace(/<!--.*?-->/g, '').replace(/\[?NỘI DUNG TÍCH HỢP MỚI\]?:?\s*/gi, '').replace(/^\[Tích hợp\]\s*/i, '').trim();
            rowsHtml += `<tr><td colspan="4" style="padding: 4pt 6pt; border: 1pt solid #cbd5e1; background: #f8fafc; font-weight: bold;"><div style="line-height: 1.25; margin: 0;">${cleanHeader.replace(/\n/g, '<br/>')}</div></td></tr>`;
          } else if (r.length === 2) {
            rowsHtml += `<tr><td colspan="2" style="padding: 4pt 6pt; border: 1pt solid #cbd5e1; background: #f8fafc; font-weight: bold;"><div style="line-height: 1.25; margin: 0;">${(r[0]||'').replace(/\n/g, '<br/>')}</div></td><td colspan="2" style="padding: 4pt 6pt; border: 1pt solid #cbd5e1; background: #f8fafc; font-weight: bold;"><div style="line-height: 1.25; margin: 0;">${(r[1]||'').replace(/\n/g, '<br/>')}</div></td></tr>`;
          }
        } else {
          if (r.length >= 2) {
            var isTichHop = (r[0] || '').indexOf('[Tích hợp') !== -1 || (r[1] || '').indexOf('[Tích hợp') !== -1 || (r[0] || '').indexOf('NỘI DUNG TÍCH HỢP') !== -1 || (r[1] || '').indexOf('NỘI DUNG TÍCH HỢP') !== -1;
            var gvText = (r[0] || '')
              .replace(/<!--.*?-->/g, '')
              .replace(/\[?NỘI DUNG TÍCH HỢP MỚI\]?:?\s*/gi, '')
              .replace(/\[?NỘI DUNG TÍCH HỢP\]?:?\s*/gi, '')
              .replace(/\[?TÍCH HỢP MỚI\]?:?\s*/gi, '')
              .replace(/^\[Tích hợp\]\s*/i, '')
              .replace(/\(Tích hợp\)/gi, '')
              .replace(/\s{2,}/g, ' ')
              .trim();
            var hsText = (r[1] || '')
              .replace(/<!--.*?-->/g, '')
              .replace(/\[?NỘI DUNG TÍCH HỢP MỚI\]?:?\s*/gi, '')
              .replace(/\[?NỘI DUNG TÍCH HỢP\]?:?\s*/gi, '')
              .replace(/\[?TÍCH HỢP MỚI\]?:?\s*/gi, '')
              .replace(/^\[Tích hợp\]\s*/i, '')
              .replace(/\(Tích hợp\)/gi, '')
              .replace(/\s{2,}/g, ' ')
              .trim();
            var gvCol = gvText.replace(/\n/g, '<br/>');
            var hsCol = hsText.replace(/\n/g, '<br/>');

            var cellStyle = isTichHop ? 'color: #7030a0; font-weight: 500;' : '';

            rowsHtml += `
              <tr>
                <td style="width: 50%; vertical-align: top; padding: 4pt 6pt; border: 1pt solid #cbd5e1; ${cellStyle}">
                  <div style="line-height: 1.25; margin: 0;">${gvCol}</div>
                </td>
                <td style="width: 50%; vertical-align: top; padding: 4pt 6pt; border: 1pt solid #cbd5e1; ${cellStyle}">
                  <div style="line-height: 1.25; margin: 0;">${hsCol}</div>
                </td>
              </tr>
            `;
          } else if (r.length === 1) {
            var rawHeader = r[0] || '';
            var nextRow = tableRows[rIdx + 1];
            var isNextRowTichHop = Array.isArray(nextRow) && nextRow.length >= 2 && ((nextRow[0] || '').indexOf('[Tích hợp') !== -1 || (nextRow[1] || '').indexOf('[Tích hợp') !== -1 || (nextRow[0] || '').indexOf('NỘI DUNG TÍCH HỢP') !== -1 || (nextRow[1] || '').indexOf('NỘI DUNG TÍCH HỢP') !== -1);
            var isTichHopHeader = isNextRowTichHop || rawHeader.indexOf('[NỘI DUNG TÍCH HỢP') !== -1 || rawHeader.indexOf('(Tích hợp)') !== -1 || rawHeader.indexOf('[Tích hợp') !== -1;
            var cleanHeader = rawHeader
              .replace(/<!--.*?-->/g, '')
              .replace(/\[?NỘI DUNG TÍCH HỢP MỚI\]?:?\s*/gi, '')
              .replace(/\[?NỘI DUNG TÍCH HỢP\]?:?\s*/gi, '')
              .replace(/\[?TÍCH HỢP MỚI\]?:?\s*/gi, '')
              .replace(/^\[Tích hợp\]\s*/i, '')
              .replace(/\(Tích hợp\)/gi, '')
              .replace(/\s{2,}/g, ' ')
              .trim();
            var headerColorStyle = isTichHopHeader ? 'color: #7030a0;' : '';
            rowsHtml += `<tr><td colspan="2" style="padding: 4pt 6pt; border: 1pt solid #cbd5e1; background: #f8fafc; font-weight: bold; ${headerColorStyle}"><div style="line-height: 1.25; margin: 0;">${cleanHeader.replace(/\n/g, '<br/>')}</div></td></tr>`;
          }
        }
      }

      if (rowsHtml) {
        if (has4Cols) {
          tablesHtml += `
            <table style="width: 100%; border-collapse: collapse; margin-top: 8pt; margin-bottom: 12pt;">
              <thead>
                <tr style="background: #f1f5f9;">
                  <th style="width: 30%; border: 1pt solid #cbd5e1; padding: 6pt; text-align: center; font-weight: bold;">Nội dung</th>
                  <th style="width: 15%; border: 1pt solid #cbd5e1; padding: 6pt; text-align: center; font-weight: bold;">Định lượng</th>
                  <th style="width: 30%; border: 1pt solid #cbd5e1; padding: 6pt; text-align: center; font-weight: bold;">Hoạt động của giáo viên</th>
                  <th style="width: 25%; border: 1pt solid #cbd5e1; padding: 6pt; text-align: center; font-weight: bold;">Hoạt động của học sinh</th>
                </tr>
              </thead>
              <tbody>
                ${rowsHtml}
              </tbody>
            </table>
          `;
        } else {
          tablesHtml += `
            <table style="width: 100%; border-collapse: collapse; margin-top: 8pt; margin-bottom: 12pt;">
              <thead>
                <tr style="background: #f1f5f9;">
                  <th style="width: 50%; border: 1pt solid #cbd5e1; padding: 6pt; text-align: center; font-weight: bold;">Hoạt động của giáo viên</th>
                  <th style="width: 50%; border: 1pt solid #cbd5e1; padding: 6pt; text-align: center; font-weight: bold;">Hoạt động của học sinh</th>
                </tr>
              </thead>
              <tbody>
                ${rowsHtml}
              </tbody>
            </table>
          `;
        }
      }
    });
  }

  var isGvbm = isGvbmRole(integrationState.timetableRole);
  var gvbmCfg = integrationState.gvbmConfig || {};

  var schoolDisp = (isGvbm ? gvbmCfg.schoolName : integrationState.schoolName) || 'TRƯỜNG TIỂU HỌC .................................';
  var teacherDisp = (isGvbm ? gvbmCfg.teacherName : integrationState.teacherName) || '';
  var yearDisp = (isGvbm ? gvbmCfg.schoolYear : integrationState.schoolYear) || '2026 - 2027';

  var approvalPreviewHtml = '';
  var ap = (typeof integrationState !== 'undefined' && integrationState.approvalConfig) || null;
  if (isLastLesson && ap && ap.enabled) {
    var leaderRoleTitle = (ap.leaderRole === 'P.Tổ trưởng' || (ap.leaderRole && ap.leaderRole.indexOf('Phó') !== -1)) 
      ? 'PHÓ TỔ TRƯỞNG CHUYÊN MÔN' 
      : 'TỔ TRƯỞNG CHUYÊN MÔN';
    var leaderSignName = (ap.leaderName && ap.leaderName.trim()) ? ap.leaderName.trim() : '……………………………….';

    var adminRoleTitle = (ap.adminRole === 'P.Hiệu trưởng' || (ap.adminRole && ap.adminRole.indexOf('Phó') !== -1))
      ? 'PHÓ HIỆU TRƯỞNG'
      : 'HIỆU TRƯỞNG';
    var adminSignName = (ap.adminName && ap.adminName.trim()) ? ap.adminName.trim() : '……………………………..';

    approvalPreviewHtml = `
      <div class="approval-preview-box" style="margin-top: 30pt; padding-top: 18pt; border-top: 2px dashed #0d9488;">
        <div style="font-size: 10pt; font-weight: 800; color: #0f766e; text-align: center; margin-bottom: 12pt; text-transform: uppercase; letter-spacing: 0.5px;">
          <i class="fa-solid fa-stamp"></i> KHUNG DUYỆT GIÁO ÁN (ĐÓNG KHUNG THEO MẪU • XUẤT THÀNH 1 TRANG RIÊNG TRONG FILE WORD)
        </div>
        <table style="width: 100%; border-collapse: collapse; border: 2px solid #000000; font-family: 'Times New Roman', serif;">
          <tr>
            <td style="border: 1px solid #000000; text-align: center; vertical-align: top; padding: 14px 10px;">
              <p style="font-size: 13pt; font-weight: bold; text-transform: uppercase; margin: 0;">GIÁO VIÊN SOẠN</p>
              <div style="height: 75px;"></div>
              <p style="font-size: 13pt; font-weight: bold; margin: 0;">${teacherDisp || '………………………'}</p>
            </td>
          </tr>
          <tr>
            <td style="border: 1px solid #000000; text-align: center; vertical-align: top; padding: 14px 10px;">
              <p style="font-size: 13pt; font-weight: bold; text-transform: uppercase; margin: 0;">${leaderRoleTitle}</p>
              <p style="font-size: 13pt; font-weight: bold; text-transform: uppercase; margin: 3px 0 0 0;">DUYỆT</p>
              <div style="height: 80px;"></div>
              <p style="font-size: 13pt; font-weight: bold; margin: 0;">${leaderSignName}</p>
            </td>
          </tr>
          <tr>
            <td style="border: 1px solid #000000; text-align: center; vertical-align: top; padding: 14px 10px;">
              <p style="font-size: 13pt; font-weight: bold; text-transform: uppercase; margin: 0;">BAN GIÁM HIỆU</p>
              <p style="font-size: 13pt; font-weight: bold; text-transform: uppercase; margin: 3px 0 0 0;">DUYỆT</p>
              <p style="font-size: 13pt; font-weight: bold; text-transform: uppercase; margin: 3px 0 0 0;">${adminRoleTitle}</p>
              <div style="height: 85px;"></div>
              <p style="font-size: 13pt; font-weight: bold; margin: 0;">${adminSignName}</p>
            </td>
          </tr>
        </table>
      </div>
    `;
  }

  var previewWeek = (les.week) || (integrationState.startWeek && integrationState.endWeek && String(integrationState.startWeek) !== String(integrationState.endWeek) ? (integrationState.startWeek + ' - ' + integrationState.endWeek) : integrationState.startWeek) || 1;
  var previewWeekNum = parseInt(previewWeek, 10) || 1;
  var previewDateInfo = (window.AcademicCalendar && les.dayName) ? AcademicCalendar.getDayDate(previewWeekNum, les.dayName) : null;
  var previewDateStr = previewDateInfo ? previewDateInfo.formatted : '';
  var dayHeaderTitle = les.dayName ? (les.dayName + (previewDateStr ? (', ngày ' + previewDateStr) : '')) : '';

  var daySessionInfo = dayHeaderTitle ? (`<p style="font-size: 11pt; font-weight: bold; color: #1e40af; margin-bottom: 4pt;">${dayHeaderTitle} • Buổi ${les.session || 'Sáng'} • ${les.periodSlot ? ('Tiết ' + les.periodSlot) : ''}${les.className ? (' • Lớp ' + les.className) : ''}</p>`) : '';

  var subjName = les.subjectName || (integrationState.subjectKey ? IntegrationService.getSubjectDisplayName(integrationState.subjectKey) : '') || (les.subjectKey ? IntegrationService.getSubjectDisplayName(les.subjectKey) : '') || 'Lịch sử và Địa lí';

  var rawTitle = les.lessonTitle || les.title || 'BÀI DẠY';
  var cleanLessonTitle = (typeof IntegrationService !== 'undefined' && IntegrationService.cleanLessonTitle)
    ? IntegrationService.cleanLessonTitle(rawTitle)
    : rawTitle
        .replace(/^TUẦN\s*:\s*\d+\s*[-–—:]\s*/i, '')
        .replace(/^TUẦN\s+\d+\s*[-–—:]\s*/i, '')
        .replace(/^Tuần\s*:\s*\d+\s*[-–—:]\s*/i, '')
        .replace(/^Tuần\s+\d+\s*[-–—:]\s*/i, '')
        .trim();

  if (previewDateStr && /ngày\s*thực\s*hiện\s*:\s*[.\s_]{3,}/i.test(cleanLessonTitle)) {
    cleanLessonTitle = cleanLessonTitle.replace(/ngày\s*thực\s*hiện\s*:\s*[.\s_]{3,}/i, 'Ngày thực hiện: ' + previewDateStr);
  }

  return `
    <div style="text-align: center; margin-bottom: 15pt;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 10pt;">
        <tr>
          <td style="width: 50%; vertical-align: top; text-align: left; font-size: 11pt;">
            <p style="margin:0;"><strong>${schoolDisp}</strong></p>
            ${isGvbm && gvbmCfg.department ? `<p style="margin:2pt 0 0 0;">Tổ: <strong>${gvbmCfg.department}</strong></p>` : ''}
            <p style="margin:2pt 0 0 0;">Giáo viên: <strong>${teacherDisp || '.................................................'}</strong></p>
          </td>
          <td style="width: 50%; vertical-align: top; text-align: right; font-size: 11pt;">
            <p style="margin:0;"><strong>NĂM HỌC: ${yearDisp}</strong></p>
            <p style="margin:2pt 0 0 0;">${les.classes ? ('<b>Khối ' + (les.grade || '') + '</b> (Các lớp: ' + les.classes + ') • ') : (les.className ? ('<b>Lớp: ' + les.className + '</b> (Khối ' + (les.grade || '') + ') • ') : (integrationState.className ? ('<b>' + integrationState.className + '</b> • ') : ('Khối ' + (les.grade || integrationState.grade) + ' • ')))}Tuần: <strong>${previewWeek}</strong></p>
          </td>
        </tr>
      </table>

      ${daySessionInfo}
      <h2 style="font-size: 14pt; font-weight: bold; margin: 0; text-transform: uppercase;">KẾ HOẠCH BÀI DẠY</h2>
      <p style="font-size: 13pt; font-weight: bold; margin: 3pt 0 0 0;">MÔN: ${subjName.toUpperCase()}${les.grade ? (' - KHỐI ' + les.grade) : ''}${les.classes ? (' (Dạy các lớp: ' + les.classes + ')') : (les.className ? (' - ' + (les.className.toLowerCase().includes('lớp') ? les.className : ('Lớp ' + les.className))) : '')}</p>
      <p style="font-size: 14pt; font-weight: bold; color: #1e3a8a; margin: 4pt 0 0 0;">${cleanLessonTitle}</p>
      ${les.period ? ('<p style="font-style: italic; margin: 2pt 0 0 0;">(' + les.period + ')</p>') : ''}
    </div>

    <div style="font-weight: bold; text-transform: uppercase; margin-top: 12pt; margin-bottom: 4pt;">I. YÊU CẦU CẦN ĐẠT:</div>
    <div style="margin-left: 10pt;">
      ${yccdHtml || '<p>Theo chuẩn chương trình môn học.</p>'}
    </div>

    <div style="font-weight: bold; text-transform: uppercase; margin-top: 12pt; margin-bottom: 4pt;">II. ĐỒ DÙNG DẠY HỌC:</div>
    <div style="margin-left: 10pt;">
      ${dodungHtml || '<p>1. Giáo viên: SGK, máy tính, bài giảng điện tử.<br>2. Học sinh: SGK, vở bài tập, đồ dùng học tập.</p>'}
    </div>

    <div style="font-weight: bold; text-transform: uppercase; margin-top: 12pt; margin-bottom: 4pt;">III. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU:</div>
    <div style="margin-left: 5pt;">
      ${tablesHtml || '<p>Tiến trình hoạt động chuẩn theo KHBD số hóa.</p>'}
    </div>

    <div style="font-weight: bold; text-transform: uppercase; margin-top: 12pt; margin-bottom: 4pt;">IV. ĐIỀU CHỈNH SAU BÀI DẠY (NẾU CÓ):</div>
    <div style="margin-left: 10pt;">
      <p>.................................................................................................................................................</p>
      <p>.................................................................................................................................................</p>
    </div>
    ${approvalPreviewHtml}
  `;
}

function switchIntegrationPreviewLesson(idx) {
  integrationState.activePreviewLessonIndex = parseInt(idx) || 0;
  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
}

async function triggerExportIntegrationWord() {
  if (!integrationState.appliedLessons || integrationState.appliedLessons.length === 0) {
    showToast('Chưa có dữ liệu giáo án để xuất!', 'warning');
    return;
  }

  var plan = integrationState.analyzedPlan || {};
  var baseDocFile = 'KHBD_Lop' + (plan.grade || 5) + '_' + (plan.subjectKey || 'mon') + '_Tuan' + (plan.startWeek || 1) + '-' + (plan.endWeek || 1) + '_' + docTitleClean + '.doc';
  var filename = (typeof IntegrationService !== 'undefined' && IntegrationService.appendTeacherNameToFilename)
    ? IntegrationService.appendTeacherNameToFilename(baseDocFile, integrationState.teacherName)
    : baseDocFile;

  var saveResult = await IntegrationService.exportToWord(integrationState.appliedLessons, {
    grade: plan.grade,
    subjectName: plan.subjectName,
    startWeek: plan.startWeek,
    endWeek: plan.endWeek,
    teacherName: integrationState.teacherName,
    schoolName: integrationState.schoolName,
    approvalConfig: integrationState.approvalConfig,
    filename: filename
  });

  if (saveResult && saveResult.aborted) {
    showToast('Bạn đã hủy lưu file Word.', 'info');
  } else if (saveResult && saveResult.method === 'picker') {
    showToast('Đã lưu file Word vào máy tính thành công: ' + filename, 'success');
  } else {
    showToast('Đã xuất file Word chuẩn CV 2345! Tệp đã lưu trong thư mục Downloads (Tải về).', 'success');
  }
}

function printIntegratedLessonSheet() {
  var sheet = document.querySelector('.integrated-doc-sheet');
  if (!sheet) {
    window.print();
    return;
  }
  var win = window.open('', '_blank', 'width=850,height=900');
  if (!win) {
    window.print();
    return;
  }
  win.document.open();
  win.document.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>In Kế hoạch bài dạy</title><style>@page{size:A4 portrait;margin:2.0cm 1.5cm 2.0cm 2.5cm;}body{font-family:"Times New Roman",serif;font-size:13pt;line-height:1.25;color:#000;padding:20px;background:#fff;}table{width:100%;border-collapse:collapse;margin:4pt 0;}th,td{border:1pt solid #000;padding:4pt 6pt;vertical-align:top;}p{margin:0;margin-top:0;margin-bottom:0;}h1,h2,h3,h4{margin:4pt 0;}</style></head><body>' + sheet.innerHTML + '</body></html>');
  win.document.close();
  setTimeout(function() {
    win.focus();
    win.print();
    win.close();
  }, 350);
}

function resetIntegrationToPlanStep() {
  integrationState.activeStep = 2;
  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
}

function resetIntegrationToSetup() {
  integrationState.activeStep = 1;
  integrationState.isOriginalPreview = false;
  integrationState.analyzedPlan = null;
  integrationState.appliedLessons = null;
  integrationState.timetableAppliedWeeks = [];
  integrationState.step2ViewMode = 'word_lesson';
  integrationState.step2EditingLessonId = null;
  var container = document.getElementById('content-container');
  if (container && (currentView === 'ai-integration' || window.location.pathname.indexOf('ai-integration') !== -1)) {
    renderAiIntegrationView(container);
  }
}


/* ==========================================================================
   HELPER FUNCTIONS: SKELETON LOADING, EMPTY STATE, DYNAMIC FOOTER
   ========================================================================== */

// Skeleton loading khi data chưa sẵn sàng
function renderLoadingSkeletonHtml() {
  var skeletonCards = '';
  for (var i = 0; i < 6; i++) {
    skeletonCards +=
      '<div style="background:#fff;border:1px solid var(--border-color);border-radius:var(--radius-md);padding:1.15rem;animation:pulse 1.5s ease-in-out infinite;">' +
        '<div style="height:14px;background:#e2e8f0;border-radius:4px;margin-bottom:0.75rem;width:60%"></div>' +
        '<div style="height:12px;background:#f1f5f9;border-radius:4px;margin-bottom:0.5rem;width:90%"></div>' +
        '<div style="height:12px;background:#f1f5f9;border-radius:4px;margin-bottom:1rem;width:75%"></div>' +
        '<div style="height:36px;background:#e2e8f0;border-radius:6px;width:100%"></div>' +
      '</div>';
  }
  return '<div class="file-cards-grid">' + skeletonCards + '</div>';
}

// Empty state component tái sử dụng
function renderEmptyStateHtml(icon, title, desc) {
  return '<div style="grid-column:1/-1;text-align:center;padding:3.5rem 2rem;background:#fff;border-radius:var(--radius-md);border:1px dashed var(--border-color);">' +
    '<div style="width:80px;height:80px;border-radius:50%;background:var(--primary-light);display:flex;align-items:center;justify-content:center;margin:0 auto 1.25rem;font-size:2rem;color:var(--primary);">' +
      '<i class="fa-solid ' + icon + '"></i>' +
    '</div>' +
    '<h3 style="color:var(--primary);font-size:1.1rem;margin-bottom:0.5rem;">' + title + '</h3>' +
    '<p style="color:var(--text-muted);font-size:0.85rem;max-width:400px;margin:0 auto;">' + desc + '</p>' +
  '</div>';
}

// Cập nhật số liệu footer động
function updateFooterCount() {
  var el = document.getElementById("footer-file-count");
  if (el && typeof DATABASE !== "undefined" && DATABASE.allFiles) {
    el.textContent = DATABASE.allFiles.length;
  }
}

// Khởi tạo ứng dụng sau khi toàn bộ script & biến số đã nạp đầy đủ
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApplication);
  } else {
    initApplication();
  }
}

