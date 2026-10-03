const fs = require('fs');

const khbdTree = fs.existsSync('khbd_exact_tree.json') ? JSON.parse(fs.readFileSync('khbd_exact_tree.json', 'utf8')) : { tree: {} };
const bgTree = fs.existsSync('bg_exact_tree.json') ? JSON.parse(fs.readFileSync('bg_exact_tree.json', 'utf8')) : { tree: {} };

const allFiles = [];
const khbdList = [];
const pptxList = [];

function getGradeFromPath(path, name = '') {
  const combined = (path + ' ' + name).toUpperCase();
  const parts = path.replace(/\\/g, '/').split('/');
  
  for (const part of parts) {
    const p = part.toUpperCase();
    if (p === 'KHOI_1' || p === 'KHOI 1' || p === 'KHỐI 1' || p === 'LOP 1' || p === 'LỚP 1') return 1;
    if (p === 'KHOI_2' || p === 'KHOI 2' || p === 'KHỐI 2' || p === 'LOP 2' || p === 'LỚP 2') return 2;
    if (p === 'KHOI_3' || p === 'KHOI 3' || p === 'KHỐI 3' || p === 'LOP 3' || p === 'LỚP 3') return 3;
    if (p === 'KHOI_4' || p === 'KHOI 4' || p === 'KHỐI 4' || p === 'LOP 4' || p === 'LỚP 4') return 4;
    if (p === 'KHOI_5' || p === 'KHOI 5' || p === 'KHỐI 5' || p === 'LOP 5' || p === 'LỚP 5') return 5;
  }

  if (combined.includes('KHOI_1') || combined.includes('KHỐI 1') || combined.includes('KHOI 1') || combined.includes('LỚP 1') || combined.includes('LOP 1')) return 1;
  if (combined.includes('KHOI_2') || combined.includes('KHỐI 2') || combined.includes('KHOI 2') || combined.includes('LỚP 2') || combined.includes('LOP 2')) return 2;
  if (combined.includes('KHOI_3') || combined.includes('KHỐI 3') || combined.includes('KHOI 3') || combined.includes('LỚP 3') || combined.includes('LOP 3')) return 3;
  if (combined.includes('KHOI_4') || combined.includes('KHỐI 4') || combined.includes('KHOI 4') || combined.includes('LỚP 4') || combined.includes('LOP 4')) return 4;
  if (combined.includes('KHOI_5') || combined.includes('KHỐI 5') || combined.includes('KHOI 5') || combined.includes('LỚP 5') || combined.includes('LOP 5')) return 5;
  
  return 1;
}

function cleanName(n) {
  return n.replace(/\.(docx?|pptx?|pptm|pdf|zip|png|jpe?g)$/i, '');
}

function getSubjectFromPath(path, name) {
  const p = path.toUpperCase();
  const n = cleanName(name).toUpperCase();

  // 1. Folder path matching
  if (p.includes('/TOAN') || p.includes('_TOAN') || p.includes('TOÁN') || p.includes('TOAN4') || p.includes('TOAN5')) return 'TOAN';
  if (p.includes('/TIENG_VIET') || p.includes('_TIENG_VIET') || p.includes('TIẾNG VIỆT') || p.includes('/TIENG VIET') || p.includes('TV-') || p.includes('_TV') || p.includes('TIENGVIET') || /\/TV\s*\d+/i.test(path) || /\/TV$/i.test(path) || /\/TV\b/i.test(path)) return 'TIENG_VIET';
  if (p.includes('/TIENG_ANH') || p.includes('TIẾNG ANH') || p.includes('/TIENG ANH') || p.includes('ENGLISH')) return 'TIENG_ANH';
  if (p.includes('TNXH') || p.includes('TỰ NHIÊN') || p.includes('TN-XH') || p.includes('TU NHIEN')) return 'TNXH';
  if (p.includes('/KHOA_HOC') || p.includes('KHOA HỌC') || /\/KH[-_ ]/i.test(p) || p.includes('KH- TUẦN') || p.includes('KHOAHOC') || p.includes('KHOA HOC')) return 'KHOA_HOC';
  if (p.includes('/LICH_SU') || p.includes('/LSDL') || p.includes('LSĐL') || p.includes('LS-ĐL') || p.includes('LS-DL') || p.includes('LỊCH SỬ') || p.includes('ĐỊA LÝ') || p.includes('ĐỊA LÍ')) return 'LICH_SU_DIA_LY';
  if (p.includes('/CONG_NGHE') || p.includes('CÔNG NGHỆ') || /\/CN[-_ ]/i.test(p) || p.includes('CN-') || p.includes('CONGNGHE') || p.includes('CONG NGHE')) return 'CONG_NGHE';
  if (p.includes('/DAO_DUC') || p.includes('ĐẠO ĐỨC') || /\/ĐĐ[-_ ]/i.test(p) || p.includes('ĐẠO ĐỨC') || p.includes('DAO DUC') || p.includes('DAODUC')) return 'DAO_DUC';
  if (p.includes('/HDTN') || p.includes('TRẢI NGHIỆM') || p.includes('HDTN') || p.includes('HĐTN') || p.includes('SINH HOẠT LỚP') || p.includes('SHL')) return 'HDTN';
  if (p.includes('/HAT_NHAC') || p.includes('ÂM NHẠC') || p.includes('HÁT NHẠC') || p.includes('AMNHAC') || p.includes('AM_NHAC') || p.includes('AM NHAC')) return 'HAT_NHAC';
  if (p.includes('/MI_THUAT') || p.includes('MĨ THUẬT') || p.includes('MỸ THUẬT') || p.includes('MITHUAT') || p.includes('MI_THUAT') || p.includes('MI THUAT')) return 'MI_THUAT';
  if (p.includes('/TIN_HOC') || p.includes('TIN HỌC') || p.includes('TINHOC') || p.includes('TIN HOC')) return 'TIN_HOC';
  if (p.includes('/GDTC') || p.includes('THỂ CHẤT') || p.includes('THỂ DỤC') || p.includes('THE_CHAT')) return 'GDTC';

  // 2. Check filename keywords
  if (
    n.includes('TOÁN') || n.includes('TOAN') ||
    n.includes('SỐ TỰ NHIÊN') || n.includes('SOTUNHIEN') ||
    n.includes('PHÂN SỐ') || n.includes('PHANSO') ||
    n.includes('HỖN SỐ') || n.includes('HONSO') ||
    n.includes('SỐ THẬP PHÂN') || n.includes('SOTHAPPHAN') ||
    n.includes('LUYỆN TẬP CHUNG') || n.includes('LUYENTAPCHUNG') ||
    n.includes('HÌNH HỌC') || n.includes('HINHHOC') || n.includes('ĐO LƯỜNG') || n.includes('DOLUONG') ||
    n.includes('PHÉP TÍNH') || n.includes('CONGTRU') || n.includes('CỘNG TRỪ') ||
    n.includes('CAC SO TU 0 DEN 10') || n.includes('CÁC SỐ TỪ 0 ĐẾN 10')
  ) {
    return 'TOAN';
  }

  if (
    n.includes('KHOA HỌC') || n.includes('KHOA_HOC') || n.includes('KHOAHOC') || /\bKH\b|KH-|KH_/.test(n) ||
    n.includes('HONHOPVADUNGDICH') || n.includes('HỖN HỢP') || n.includes('DUNG DỊCH') ||
    n.includes('SUBIENDOIHOAHOC') || n.includes('SỰ BIẾN ĐỔI HÓA HỌC') || n.includes('BIENDOICUACHAT') ||
    n.includes('TÍNH CHẤT CỦA NƯỚC') || n.includes('TINHCHATCUANUOC') || n.includes('KHÔNG KHÍ')
  ) {
    return 'KHOA_HOC';
  }

  if (
    n.includes('LSĐL') || n.includes('LỊCH SỬ') || n.includes('LICH_SU') || n.includes('LSDL') ||
    n.includes('ĐỊA LÝ') || n.includes('DIA LY') || n.includes('ĐỊA LÍ') || n.includes('DIA LI') ||
    n.includes('VITRIDIALY') || n.includes('VỊ TRÍ ĐỊA LÍ') || n.includes('LANHTHO') || n.includes('LÃNH THỔ') ||
    n.includes('THIENNHIENVIETNAM') || n.includes('THIÊN NHIÊN VIỆT NAM') ||
    n.includes('BIENDAOVIETNAM') || n.includes('BIỂN ĐẢO VIỆT NAM')
  ) {
    return 'LICH_SU_DIA_LY';
  }

  if (
    n.includes('ĐẠO ĐỨC') || n.includes('DAO_DUC') || n.includes('ĐAODUC') || n.includes('DAO DUC') ||
    /\bĐĐ\b|\bDD\b|ĐĐ-|DD-/.test(n) ||
    n.includes('BIẾT ƠN') || n.includes('BIETON') || n.includes('NGƯỜI CÓ CÔNG') ||
    n.includes('TONTRONG') || n.includes('TÔN TRỌNG') || n.includes('KHACBIET') || n.includes('KHÁC BIỆT') ||
    n.includes('GIỮ SẠCH ĐÔI TAY') || n.includes('GIỮ GÌN VỆ SINH')
  ) {
    return 'DAO_DUC';
  }

  if (
    n.includes('CÔNG NGHỆ') || n.includes('CONG_NGHE') || n.includes('CN-') || n.includes('CN_') || /\bCN\b/.test(n) ||
    n.includes('NHASANGCHE') || n.includes('NHÀ SÁNG CHẾ') || n.includes('SÁNG CHẾ') ||
    n.includes('HOATINH') || n.includes('HOA VÀ CÂY CẢNH')
  ) {
    return 'CONG_NGHE';
  }

  if (
    n.includes('HDTN') || n.includes('HĐTN') || n.includes('TRẢI NGHIỆM') || n.includes('TRAI NGHIEM') ||
    n.includes('HOAT DONG TRAI NGHIEM') || n.includes('SHL') || n.includes('SINH HOẠT LỚP') || n.includes('CHÀO CỜ')
  ) {
    return 'HDTN';
  }

  if (
    n.includes('TIẾNG VIỆT') || n.includes('TIENG VIET') || n.includes('TIENG_VIET') ||
    /\bTV\b|TV-|TV_|\bVĂN\b|\bVAN\b/.test(n) ||
    n.includes('LTVC') || /\bĐỌC\b|\bDOC\b/i.test(n) ||
    n.includes('KỂ CHUYỆN') || n.includes('KE CHUYEN') || n.includes('KCSANGTAO') ||
    n.includes('TẬP LÀM VĂN') || n.includes('VIẾT BÀI VĂN') || n.includes('VIETBAIVAN') ||
    n.includes('NÓI VÀ NGHE') || n.includes('NOIVANGHE') || n.includes('NOI VA NGHE') ||
    n.includes('ĐỌC MỞ RỘNG') || n.includes('DOCMORONG') || n.includes('BẢNG CHỮ CÁI') ||
    n.includes('LÀM QUEN') || n.includes('LAM QUEN')
  ) {
    return 'TIENG_VIET';
  }

  if (n.includes('TNXH') || n.includes('TỰ NHIÊN') || n.includes('TU NHIEN') || n.includes('GIA ĐÌNH') || n.includes('GIA DINH')) return 'TNXH';
  if (n.includes('TIẾNG ANH') || n.includes('TIENG_ANH') || n.includes('ENGLISH')) return 'TIENG_ANH';
  if (n.includes('TIN HỌC') || n.includes('TIN_HOC') || n.includes('TINHOC')) return 'TIN_HOC';
  if (n.includes('HÁT NHẠC') || n.includes('HAT_NHAC') || n.includes('ÂM NHẠC') || n.includes('AM NHAC')) return 'HAT_NHAC';
  if (n.includes('MĨ THUẬT') || n.includes('MI_THUAT') || n.includes('MỸ THUẬT')) return 'MI_THUAT';

  return 'KHAC';
}

function getWeeksFromPath(path, name) {
  const pathClean = path.replace(/\\/g, '/');
  const parts = pathClean.split('/');
  
  // 1. Check folder segments like: '01', '02', '14', '35'
  for (const part of parts) {
    const pTrim = part.trim();
    if (/^\d+$/.test(pTrim)) {
      const w = parseInt(pTrim, 10);
      if (w >= 1 && w <= 35) return [w];
    }
  }

  // 2. Check folder segments for TUAN X or TUẦN X
  for (const part of parts) {
    const pUp = part.toUpperCase();
    const rangeMatch = pUp.match(/\((\d+)\s*[-–—]\s*(\d+)\)/) || 
                       pUp.match(/TUẦN\s*(\d+)\s*[-–—]\s*(\d+)/) ||
                       pUp.match(/TUAN\s*(\d+)\s*[-–—]\s*(\d+)/);
    if (rangeMatch) {
      const start = parseInt(rangeMatch[1], 10);
      const end = parseInt(rangeMatch[2], 10);
      const weeks = [];
      for (let w = start; w <= end && w <= 35; w++) {
        weeks.push(w);
      }
      if (weeks.length > 0) return weeks;
    }

    const singleMatch = pUp.match(/TUẦN\s*([0-9]+)/) || pUp.match(/TUAN\s*([0-9]+)/) || pUp.match(/TUAN([0-9]+)/);
    if (singleMatch && singleMatch[1]) {
      const w = parseInt(singleMatch[1], 10);
      if (w >= 1 && w <= 35) return [w];
    }
  }

  // 3. Check filename for TUAN X (do NOT match \bT1\b which means Tiết 1!)
  const nUp = name.toUpperCase();
  const fileWeekMatch = nUp.match(/TUẦN\s*([0-9]+)/) || nUp.match(/TUAN\s*([0-9]+)/);
  if (fileWeekMatch && fileWeekMatch[1]) {
    const w = parseInt(fileWeekMatch[1], 10);
    if (w >= 1 && w <= 35) return [w];
  }

  return [1];
}

// Parse KHBD
for (const [folderId, node] of Object.entries(khbdTree.tree)) {
  if (node.files && node.files.length > 0) {
    node.files.forEach(f => {
      if (f.name.endsWith('.gs') || f.mimeType === 'application/vnd.google-apps.script' || f.name === 'Thu_vien') return;

      const grade = getGradeFromPath(node.path || node.folder.name, f.name);
      const subjectId = getSubjectFromPath(node.path || node.folder.name, f.name);
      const weeks = getWeeksFromPath(node.path || node.folder.name, f.name);

      const item = {
        id: f.id,
        name: f.name,
        type: 'KHBD',
        grade: grade,
        week: weeks[0],
        weeks: weeks,
        subjectId: subjectId,
        size: f.size || '1.2 MB',
        folderPath: node.path || node.folder.name,
        updatedAt: f.updatedAt || '23/08/2026',
        previewUrl: f.previewUrl || `https://drive.google.com/file/d/${f.id}/preview`,
        downloadUrl: f.downloadUrl || `https://drive.google.com/uc?export=download&id=${f.id}`
      };

      allFiles.push(item);
      khbdList.push(item);
    });
  }
}

// Parse PPTX
for (const [folderId, node] of Object.entries(bgTree.tree)) {
  if (node.files && node.files.length > 0) {
    node.files.forEach(f => {
      if (f.name.endsWith('.gs') || f.mimeType === 'application/vnd.google-apps.script' || f.name === 'Bai_giang_pptx') return;

      const grade = getGradeFromPath(node.path || node.folder.name, f.name);
      const subjectId = getSubjectFromPath(node.path || node.folder.name, f.name);
      const weeks = getWeeksFromPath(node.path || node.folder.name, f.name);

      const item = {
        id: f.id,
        name: f.name,
        type: 'PPTX',
        grade: grade,
        week: weeks[0],
        weeks: weeks,
        subjectId: subjectId,
        size: f.size || '5.5 MB',
        folderPath: node.path || node.folder.name,
        updatedAt: f.updatedAt || '23/08/2026',
        previewUrl: f.previewUrl || `https://drive.google.com/file/d/${f.id}/preview`,
        downloadUrl: f.downloadUrl || `https://drive.google.com/uc?export=download&id=${f.id}`
      };

      allFiles.push(item);
      pptxList.push(item);
    });
  }
}

const subjectsMap = {
  TOAN: { id: "TOAN", name: "Toán", icon: "fa-calculator", color: "#2563eb", bgColor: "#eff6ff" },
  TIENG_VIET: { id: "TIENG_VIET", name: "Tiếng Việt", icon: "fa-book-open", color: "#ea580c", bgColor: "#fff7ed" },
  TIENG_ANH: { id: "TIENG_ANH", name: "Tiếng Anh", icon: "fa-globe", color: "#0284c7", bgColor: "#f0f9ff" },
  TNXH: { id: "TNXH", name: "Tự nhiên & Xã hội", icon: "fa-seedling", color: "#16a34a", bgColor: "#f0fdf4" },
  KHOA_HOC: { id: "KHOA_HOC", name: "Khoa học", icon: "fa-flask-vial", color: "#7c3aed", bgColor: "#f5f3ff" },
  LICH_SU_DIA_LY: { id: "LICH_SU_DIA_LY", name: "Lịch sử & Địa lý", icon: "fa-map-location-dot", color: "#b45309", bgColor: "#fffbeb" },
  TIN_HOC: { id: "TIN_HOC", name: "Tin học", icon: "fa-laptop-code", color: "#0d9488", bgColor: "#f0fdfa" },
  CONG_NGHE: { id: "CONG_NGHE", name: "Công nghệ", icon: "fa-gears", color: "#475569", bgColor: "#f1f5f9" },
  DAO_DUC: { id: "DAO_DUC", name: "Đạo đức", icon: "fa-heart", color: "#db2777", bgColor: "#fdf2f8" },
  HDTN: { id: "HDTN", name: "Hoạt động trải nghiệm", icon: "fa-compass", color: "#f59e0b", bgColor: "#fffbeb" },
  HAT_NHAC: { id: "HAT_NHAC", name: "Âm nhạc", icon: "fa-music", color: "#9333ea", bgColor: "#faf5ff" },
  MI_THUAT: { id: "MI_THUAT", name: "Mĩ thuật", icon: "fa-palette", color: "#06b6d4", bgColor: "#ecfeff" },
  GDTC: { id: "GDTC", name: "Giáo dục thể chất", icon: "fa-volleyball", color: "#65a30d", bgColor: "#f7fee7" },
  KHAC: { id: "KHAC", name: "Tài liệu Khác", icon: "fa-folder-open", color: "#64748b", bgColor: "#f8fafc" }
};

const GRADES_CONFIG = [
  { grade: 1, name: "Khối 1", color: "#ef4444", bg: "#fef2f2", totalWeeks: 35 },
  { grade: 2, name: "Khối 2", color: "#f97316", bg: "#fff7ed", totalWeeks: 35 },
  { grade: 3, name: "Khối 3", color: "#10b981", bg: "#ecfdf5", totalWeeks: 35 },
  { grade: 4, name: "Khối 4", color: "#3b82f6", bg: "#eff6ff", totalWeeks: 35 },
  { grade: 5, name: "Khối 5", color: "#8b5cf6", bg: "#f5f3ff", totalWeeks: 35 }
];

const output = `/**
 * DATA STORE & LIVE CACHE TỪ 2 KHO GOOGLE DRIVE THỰC TẾ
 * Thầy Lê Thành Long - ${khbdList.length} KHBD + ${pptxList.length} Bài giảng điện tử (Tổng cộng ${allFiles.length} tệp tin)
 */

var SUBJECTS_CONFIG = ${JSON.stringify(subjectsMap, null, 2)};

var GRADES_CONFIG = ${JSON.stringify(GRADES_CONFIG, null, 2)};

var DATABASE = {
  khbdRootId: "1QfjzwxW68pIDgZ4PfDxg71GQZCC0f3o7",
  bgRootId: "1X7iIKONrOBCclAC3qbTwcT3LaZrsDKaK",
  khbdTree: ${JSON.stringify(khbdTree.tree, null, 2)},
  bgTree: ${JSON.stringify(bgTree.tree, null, 2)},
  tree: ${JSON.stringify({ ...khbdTree.tree, ...bgTree.tree }, null, 2)},
  allFiles: ${JSON.stringify(allFiles, null, 2)},
  khbdList: ${JSON.stringify(khbdList, null, 2)},
  pptxList: ${JSON.stringify(pptxList, null, 2)}
};

if (typeof window !== 'undefined') {
  window.SUBJECTS_CONFIG = SUBJECTS_CONFIG;
  window.GRADES_CONFIG = GRADES_CONFIG;
  window.DATABASE = DATABASE;
}
if (typeof global !== 'undefined') {
  global.SUBJECTS_CONFIG = SUBJECTS_CONFIG;
  global.GRADES_CONFIG = GRADES_CONFIG;
  global.DATABASE = DATABASE;
}
`;

fs.writeFileSync('js/data.js', output, 'utf8');
console.log(`Clean js/data.js generated successfully! KHBD: ${khbdList.length}, PPTX: ${pptxList.length}, Total: ${allFiles.length}`);
