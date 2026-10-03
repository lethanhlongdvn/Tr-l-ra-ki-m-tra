import React, { useState, useEffect, useRef } from 'react';
import {
  Layers,
  FileText,
  Eye,
  Download,
  Printer,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Calendar,
  Clock,
  School,
  Award,
  TableProperties,
  UploadCloud,
  Plus,
  Trash2,
  Edit3,
  X,
  RotateCcw,
  Users,
  Briefcase,
  Send,
  MessageSquare,
  Cpu,
  Atom,
  MapPin,
  TreePine,
  Car,
  Coins,
  HeartHandshake,
  ArrowRight,
  ArrowLeft,
  CheckSquare,
  Square,
  RefreshCw,
  Undo2,
  FileCheck2,
  AlertCircle
} from 'lucide-react';
import { loadKhbdSubject, getAvailableSubjectsForGrade } from '../../utils/ragLoader';

// =========================================================================
// 1. DANH SÁCH MÔN HỌC & HOẠT ĐỘNG TIỂU HỌC CHUẨN GDPT 2018 & ĐẶC THÙ ĐƠN VỊ
// =========================================================================
const ALL_SUBJECTS = [
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
  // Các môn & hoạt động đặc thù tại đơn vị:
  { key: 'on_luyen_toan', name: 'Ôn luyện Toán' },
  { key: 'on_luyen_tv', name: 'Ôn luyện TV' },
  { key: 'tdtv_ol', name: 'TĐTV-ÔL' },
  { key: 'on_luyen_atgt', name: 'Ôn luyện-ATGT' },
  { key: 'shdc', name: 'SHDC (Sinh hoạt dưới cờ)' },
  { key: 'shtt', name: 'SHTT (Sinh hoạt tập thể)' }
];

// Thời khóa biểu chuẩn Bộ GD&ĐT cho 5 khối lớp
const DEFAULT_TIMETABLES = {
  5: [
    { day: 'Thứ Hai', dayNum: 2, morning: ['hdtn', 'toan', 'tieng_viet', 'tieng_viet'], afternoon: ['khoa_hoc', 'lich_su_dia_ly', 'dao_duc'] },
    { day: 'Thứ Ba', dayNum: 3, morning: ['toan', 'tieng_viet', 'tieng_viet', 'khoa_hoc'], afternoon: ['cong_nghe', 'tieng_anh', 'gdtc'] },
    { day: 'Thứ Tư', dayNum: 4, morning: ['toan', 'tieng_viet', 'tieng_viet', 'lich_su_dia_ly'], afternoon: ['tin_hoc', 'am_nhac', 'mi_thuat'] },
    { day: 'Thứ Năm', dayNum: 5, morning: ['toan', 'tieng_viet', 'tieng_viet', 'tieng_anh'], afternoon: ['dao_duc', 'toan', 'gdtc'] },
    { day: 'Thứ Sáu', dayNum: 6, morning: ['toan', 'tieng_viet', 'tieng_anh', 'cong_nghe'], afternoon: ['hdtn', 'tin_hoc', 'hdtn'] }
  ],
  4: [
    { day: 'Thứ Hai', dayNum: 2, morning: ['hdtn', 'toan', 'tieng_viet', 'tieng_viet'], afternoon: ['khoa_hoc', 'lich_su_dia_ly', 'dao_duc'] },
    { day: 'Thứ Ba', dayNum: 3, morning: ['toan', 'tieng_viet', 'tieng_viet', 'khoa_hoc'], afternoon: ['cong_nghe', 'tieng_anh', 'gdtc'] },
    { day: 'Thứ Tư', dayNum: 4, morning: ['toan', 'tieng_viet', 'tieng_viet', 'lich_su_dia_ly'], afternoon: ['tin_hoc', 'am_nhac', 'mi_thuat'] },
    { day: 'Thứ Năm', dayNum: 5, morning: ['toan', 'tieng_viet', 'tieng_viet', 'tieng_anh'], afternoon: ['dao_duc', 'toan', 'gdtc'] },
    { day: 'Thứ Sáu', dayNum: 6, morning: ['toan', 'tieng_viet', 'tieng_anh', 'cong_nghe'], afternoon: ['hdtn', 'tin_hoc', 'hdtn'] }
  ],
  3: [
    { day: 'Thứ Hai', dayNum: 2, morning: ['hdtn', 'toan', 'tieng_viet', 'tieng_viet'], afternoon: ['tnxh', 'dao_duc', 'am_nhac'] },
    { day: 'Thứ Ba', dayNum: 3, morning: ['toan', 'tieng_viet', 'tieng_viet', 'tnxh'], afternoon: ['cong_nghe', 'tieng_anh', 'gdtc'] },
    { day: 'Thứ Tư', dayNum: 4, morning: ['toan', 'tieng_viet', 'tieng_viet', 'tin_hoc'], afternoon: ['mi_thuat', 'dao_duc', 'gdtc'] },
    { day: 'Thứ Năm', dayNum: 5, morning: ['toan', 'tieng_viet', 'tieng_viet', 'tieng_anh'], afternoon: ['tnxh', 'toan', 'cong_nghe'] },
    { day: 'Thứ Sáu', dayNum: 6, morning: ['toan', 'tieng_viet', 'tieng_anh', 'tin_hoc'], afternoon: ['hdtn', 'hdtn', 'hdtn'] }
  ],
  2: [
    { day: 'Thứ Hai', dayNum: 2, morning: ['hdtn', 'tieng_viet', 'tieng_viet', 'toan'], afternoon: ['tnxh', 'dao_duc', 'gdtc'] },
    { day: 'Thứ Ba', dayNum: 3, morning: ['tieng_viet', 'tieng_viet', 'toan', 'tnxh'], afternoon: ['am_nhac', 'tieng_anh', 'hdtn'] },
    { day: 'Thứ Tư', dayNum: 4, morning: ['tieng_viet', 'tieng_viet', 'toan', 'dao_duc'], afternoon: ['mi_thuat', 'gdtc', 'tnxh'] },
    { day: 'Thứ Năm', dayNum: 5, morning: ['tieng_viet', 'tieng_viet', 'toan', 'tieng_anh'], afternoon: ['toan', 'hdtn', 'gdtc'] },
    { day: 'Thứ Sáu', dayNum: 6, morning: ['tieng_viet', 'tieng_viet', 'toan', 'tieng_anh'], afternoon: ['hdtn', 'hdtn', 'hdtn'] }
  ],
  1: [
    { day: 'Thứ Hai', dayNum: 2, morning: ['hdtn', 'tieng_viet', 'tieng_viet', 'toan'], afternoon: ['tnxh', 'dao_duc', 'gdtc'] },
    { day: 'Thứ Ba', dayNum: 3, morning: ['tieng_viet', 'tieng_viet', 'toan', 'tnxh'], afternoon: ['am_nhac', 'tieng_anh', 'hdtn'] },
    { day: 'Thứ Tư', dayNum: 4, morning: ['tieng_viet', 'tieng_viet', 'toan', 'dao_duc'], afternoon: ['mi_thuat', 'gdtc', 'tnxh'] },
    { day: 'Thứ Năm', dayNum: 5, morning: ['tieng_viet', 'tieng_viet', 'toan', 'tieng_anh'], afternoon: ['toan', 'hdtn', 'gdtc'] },
    { day: 'Thứ Sáu', dayNum: 6, morning: ['tieng_viet', 'tieng_viet', 'toan', 'tieng_anh'], afternoon: ['hdtn', 'hdtn', 'hdtn'] }
  ]
};

// Mẫu nhanh phân công GV Bộ Môn
const SAMPLE_GVBM_ASSIGNMENTS = {
  multi: [
    { id: 1, grade: 4, subjectKey: 'am_nhac', classes: '4A, 4B, 4C, 4D', periodsPerWeek: 4 },
    { id: 2, grade: 5, subjectKey: 'am_nhac', classes: '5A, 5B, 5C', periodsPerWeek: 3 },
    { id: 3, grade: 3, subjectKey: 'cong_nghe', classes: '3A, 3B, 3C', periodsPerWeek: 3 },
    { id: 4, grade: 2, subjectKey: 'gdtc', classes: '2A, 2B', periodsPerWeek: 4 }
  ],
  music: [
    { id: 1, grade: 1, subjectKey: 'am_nhac', classes: '1A, 1B, 1C', periodsPerWeek: 3 },
    { id: 2, grade: 2, subjectKey: 'am_nhac', classes: '2A, 2B, 2C', periodsPerWeek: 3 },
    { id: 3, grade: 3, subjectKey: 'am_nhac', classes: '3A, 3B, 3C', periodsPerWeek: 3 },
    { id: 4, grade: 4, subjectKey: 'am_nhac', classes: '4A, 4B, 4C, 4D', periodsPerWeek: 4 },
    { id: 5, grade: 5, subjectKey: 'am_nhac', classes: '5A, 5B, 5C, 5D', periodsPerWeek: 4 }
  ],
  pe: [
    { id: 1, grade: 1, subjectKey: 'gdtc', classes: '1A, 1B', periodsPerWeek: 4 },
    { id: 2, grade: 2, subjectKey: 'gdtc', classes: '2A, 2B', periodsPerWeek: 4 },
    { id: 3, grade: 3, subjectKey: 'gdtc', classes: '3A, 3B', periodsPerWeek: 4 },
    { id: 4, grade: 4, subjectKey: 'gdtc', classes: '4A, 4B', periodsPerWeek: 4 },
    { id: 5, grade: 5, subjectKey: 'gdtc', classes: '5A, 5B', periodsPerWeek: 4 }
  ],
  tech: [
    { id: 1, grade: 3, subjectKey: 'cong_nghe', classes: '3A, 3B, 3C', periodsPerWeek: 3 },
    { id: 2, grade: 4, subjectKey: 'cong_nghe', classes: '4A, 4B, 4C', periodsPerWeek: 3 },
    { id: 3, grade: 5, subjectKey: 'cong_nghe', classes: '5A, 5B, 5C', periodsPerWeek: 3 },
    { id: 4, grade: 3, subjectKey: 'tin_hoc', classes: '3A, 3B, 3C', periodsPerWeek: 3 },
    { id: 5, grade: 4, subjectKey: 'tin_hoc', classes: '4A, 4B, 4C', periodsPerWeek: 3 },
    { id: 6, grade: 5, subjectKey: 'tin_hoc', classes: '5A, 5B, 5C', periodsPerWeek: 3 }
  ]
};

// =========================================================================
// 2. DANH MỤC CÁC CHUYÊN ĐỀ TÍCH HỢP 1 CHẠM (QUICK INTEGRATION TOPICS)
// =========================================================================
const INTEGRATION_TOPICS = [
  {
    id: 'ai',
    name: 'Trí tuệ nhân tạo (AI) & Kỹ năng số',
    icon: Cpu,
    badge: 'Đột phá AI',
    color: 'border-purple-300 bg-purple-50 text-purple-900 hover:bg-purple-100',
    activeColor: 'bg-purple-600 text-white border-purple-600 shadow-md',
    promptText: 'Tích hợp Khung nội dung Giáo dục Trí tuệ nhân tạo (AI) và Kỹ năng số tiểu học theo định hướng Bộ GD&ĐT. Lồng ghép tư duy dữ liệu số, nhận diện ứng dụng AI an toàn, kiểm chứng thông tin và hình thành đạo đức số.'
  },
  {
    id: 'stem',
    name: 'Giáo dục STEM / STEAM',
    icon: Atom,
    badge: 'STEM',
    color: 'border-emerald-300 bg-emerald-50 text-emerald-900 hover:bg-emerald-100',
    activeColor: 'bg-emerald-600 text-white border-emerald-600 shadow-md',
    promptText: 'Tích hợp Giáo dục STEM: Hoạt động trải nghiệm thực hành, chế tạo mô hình học tập, giải quyết tình huống thực tế và rèn luyện tư duy thiết kế kỹ thuật theo định hướng GDPT 2018.'
  },
  {
    id: 'local',
    name: 'Giáo dục Địa phương (Vĩnh Long)',
    icon: MapPin,
    badge: 'Vĩnh Long',
    color: 'border-amber-300 bg-amber-50 text-amber-900 hover:bg-amber-100',
    activeColor: 'bg-amber-600 text-white border-amber-600 shadow-md',
    promptText: 'Tích hợp Giáo dục Địa phương tỉnh Vĩnh Long: Tìm hiểu các danh lam thắng cảnh, di tích lịch sử, nhân vật kiệt xuất, làng nghề truyền thống, cây trái đặc sản và nét đẹp văn hóa sông nước quê hương Vĩnh Long.'
  },
  {
    id: 'rights',
    name: 'Quyền con người & Quyền trẻ em',
    icon: HeartHandshake,
    badge: 'Quyền trẻ em',
    color: 'border-rose-300 bg-rose-50 text-rose-900 hover:bg-rose-100',
    activeColor: 'bg-rose-600 text-white border-rose-600 shadow-md',
    promptText: 'Tích hợp Đề án Giáo dục Quyền con người và Quyền trẻ em trong cơ sở giáo dục: Quyền được học tập bình đẳng, quyền bày tỏ ý kiến, tôn trọng sự khác biệt và phòng chống bạo lực học đường.'
  },
  {
    id: 'environment',
    name: 'Bảo vệ môi trường & BĐKH',
    icon: TreePine,
    badge: 'Môi trường',
    color: 'border-teal-300 bg-teal-50 text-teal-900 hover:bg-teal-100',
    activeColor: 'bg-teal-600 text-white border-teal-600 shadow-md',
    promptText: 'Tích hợp Giáo dục Bảo vệ môi trường và Thích ứng biến đổi khí hậu: Phân loại rác thải tại nguồn, hạn chế rác thải nhựa, tiết kiệm điện nước, trồng cây xanh và giữ gìn cảnh quan lớp học xanh - sạch - đẹp.'
  },
  {
    id: 'traffic',
    name: 'An toàn giao thông (ATGT)',
    icon: Car,
    badge: 'ATGT',
    color: 'border-blue-300 bg-blue-50 text-blue-900 hover:bg-blue-100',
    activeColor: 'bg-blue-600 text-white border-blue-600 shadow-md',
    promptText: 'Tích hợp Giáo dục An toàn giao thông đường bộ và đường thủy: Đội mũ bảo hiểm đạt chuẩn khi ngồi xe máy, chấp hành đèn tín hiệu giao thông, an toàn khi qua phà/bến đò ngang sông nước.'
  },
  {
    id: 'finance',
    name: 'Giáo dục Tài chính & Tiết kiệm',
    icon: Coins,
    badge: 'Tài chính',
    color: 'border-yellow-300 bg-yellow-50 text-yellow-900 hover:bg-yellow-100',
    activeColor: 'bg-yellow-600 text-white border-yellow-600 shadow-md',
    promptText: 'Tích hợp Giáo dục Tài chính tiểu học: Nhận biết giá trị sức lao động, nuôi heo đất tiết kiệm, bảo quản sách vở đồ dùng học tập và lập kế hoạch chi tiêu hợp lý.'
  }
];

export default function IntegrationView() {
  // ==================== QUY TRÌNH 3 BƯỚC ====================
  // activeStep: 1 (Thiết lập) | 2 (Duyệt kế hoạch) | 3 (Xem trước 100% giáo án & Xuất Word)
  const [activeStep, setActiveStep] = useState(1);

  // exportMode: 'timetable' (Theo TKB / GVBM) | 'subject' (Soạn riêng từng môn)
  const [exportMode, setExportMode] = useState('timetable');
  // teacherType: 'gvcn' (Dạy 1 Lớp) | 'gvbm' (Đa Khối)
  const [teacherType, setTeacherType] = useState('gvcn');

  const isTimetableMode = exportMode === 'timetable';
  const isGvbm = isTimetableMode && teacherType === 'gvbm';

  // Thông tin trường lớp & Giáo viên (Mặc định gắn kết với đơn vị người dùng)
  const [grade, setGrade] = useState(5);
  const [subjectKey, setSubjectKey] = useState('toan');
  const [teacherName, setTeacherName] = useState('Thầy Toàn');
  const [schoolYear, setSchoolYear] = useState('2026 - 2027');
  const [className, setClassName] = useState('Lớp 5A');
  const [schoolName, setSchoolName] = useState('Trường Tiểu học A An Trường');
  const [department, setDepartment] = useState('Tổ Khối 4 & 5');

  // Thời khóa biểu GVCN
  const [customTimetable, setCustomTimetable] = useState(null);
  const [customTimetableName, setCustomTimetableName] = useState('');
  const [isTkbModalOpen, setIsTkbModalOpen] = useState(false);
  const [tempTimetable, setTempTimetable] = useState(null);
  const tkbFileInputRef = useRef(null);

  // Phân công GV Bộ Môn
  const [gvbmAssignments, setGvbmAssignments] = useState(SAMPLE_GVBM_ASSIGNMENTS.multi);
  const [gvbmTeacherName, setGvbmTeacherName] = useState('Họ và tên GV bộ môn');
  const [gvbmDepartment, setGvbmDepartment] = useState('Tổ Chuyên biệt / Bộ môn');
  const [gvbmSchoolYear, setGvbmSchoolYear] = useState('2026 - 2027');
  const [gvbmSchoolName, setGvbmSchoolName] = useState('Trường Tiểu học A An Trường');

  // Phạm vi Tuần học
  const [startWeek, setStartWeek] = useState(1);
  const [endWeek, setEndWeek] = useState(1);

  // ==================== CHUYÊN ĐỀ TÍCH HỢP & TÀI LIỆU ====================
  const [selectedTopicId, setSelectedTopicId] = useState('ai');
  const [uploadedDocName, setUploadedDocName] = useState('');
  const [uploadedDocText, setUploadedDocText] = useState('');
  const [userNotes, setUserNotes] = useState('');
  const docFileInputRef = useRef(null);

  // ==================== GIÁO DỤC HÒA NHẬP (HS KHUYẾT TẬT) ====================
  const [disabilityEnabled, setDisabilityEnabled] = useState(false);
  const [disabilityType, setDisabilityType] = useState('tri_tue');
  const [disabilityRate, setDisabilityRate] = useState(50);
  const [disabilityNotes, setDisabilityNotes] = useState('');

  // Khung duyệt ký tên
  const [includeApproval, setIncludeApproval] = useState(true);

  // ==================== BƯỚC 2: STATE DUYỆT KẾ HOẠCH ====================
  const [analyzedPlan, setAnalyzedPlan] = useState(null);
  const [selectedLessons, setSelectedLessons] = useState({});
  const [step2ViewMode, setStep2ViewMode] = useState('table'); // 'table' | 'word_lesson'
  const [step2Feedback, setStep2Feedback] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [editingLessonId, setEditingLessonId] = useState(null);
  const [step2ActiveWeekIdx, setStep2ActiveWeekIdx] = useState(0);
  const [step2ActiveLessonIdx, setStep2ActiveLessonIdx] = useState(0);

  // ==================== BƯỚC 3: STATE XEM TRƯỚC TOÀN VĂN & XUẤT WORD ====================
  const [previewWeeks, setPreviewWeeks] = useState(null);
  const [activePreviewTab, setActivePreviewTab] = useState(0);
  const [isExporting, setIsExporting] = useState(false);

  // Toast & UI alerts
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // Môn học có sẵn theo khối
  const availableSubjects = getAvailableSubjectsForGrade(grade);

  // Tổng số tiết của GVBM
  const totalGvbmPeriods = gvbmAssignments.reduce(
    (acc, it) => acc + (parseInt(it.periodsPerWeek) || 1),
    0
  );

  // Đổi khối -> kiểm tra môn
  useEffect(() => {
    const exists = availableSubjects.some((s) => s.id === subjectKey);
    if (!exists && availableSubjects.length > 0) {
      setSubjectKey(availableSubjects[0].id);
    }
  }, [grade]);

  // Phím tắt chọn nhanh số tuần
  const handleQuickWeek = (count) => {
    const newEnd = Math.min(35, parseInt(startWeek) + count - 1);
    setEndWeek(newEnd);
  };

  // Chọn chuyên đề 1 chạm
  const handleSelectTopic = (topicId) => {
    setSelectedTopicId(topicId);
    const top = INTEGRATION_TOPICS.find((t) => t.id === topicId);
    if (top) {
      setUploadedDocName(`Chuyên đề: ${top.name}`);
      setUploadedDocText(top.promptText);
    }
  };

  // Khởi tạo topic mặc định ban đầu
  useEffect(() => {
    const top = INTEGRATION_TOPICS.find((t) => t.id === selectedTopicId);
    if (top && !uploadedDocText) {
      setUploadedDocName(`Chuyên đề: ${top.name}`);
      setUploadedDocText(top.promptText);
    }
  }, []);

  // ==================== XỬ LÝ PHÂN CÔNG GVBM ====================
  const handleAddAssignment = () => {
    const newId = Date.now();
    const existingGrades = gvbmAssignments.map((a) => a.grade);
    let nextGrade = 4;
    for (let g = 1; g <= 5; g++) {
      if (!existingGrades.includes(g)) {
        nextGrade = g;
        break;
      }
    }
    setGvbmAssignments([
      ...gvbmAssignments,
      {
        id: newId,
        grade: nextGrade,
        subjectKey: 'am_nhac',
        classes: `${nextGrade}A, ${nextGrade}B`,
        periodsPerWeek: 2
      }
    ]);
  };

  const handleRemoveAssignment = (id) => {
    if (gvbmAssignments.length <= 1) {
      showToast('Cần giữ lại ít nhất 1 hàng phân công giảng dạy!', 'warning');
      return;
    }
    setGvbmAssignments(gvbmAssignments.filter((it) => it.id !== id));
  };

  const handleUpdateAssignment = (id, field, value) => {
    setGvbmAssignments(
      gvbmAssignments.map((it) => {
        if (it.id !== id) return it;
        if (field === 'grade') {
          const g = parseInt(value) || 1;
          const subjs = getAvailableSubjectsForGrade(g);
          const hasKey = subjs.some((s) => s.id === it.subjectKey);
          return {
            ...it,
            grade: g,
            subjectKey: hasKey ? it.subjectKey : subjs[0]?.id || 'am_nhac'
          };
        }
        return { ...it, [field]: value };
      })
    );
  };

  const handleLoadSamplePreset = (presetType) => {
    if (SAMPLE_GVBM_ASSIGNMENTS[presetType]) {
      setGvbmAssignments(SAMPLE_GVBM_ASSIGNMENTS[presetType]);
      showToast('Đã nạp mẫu phân công nhanh thành công!', 'success');
    }
  };

  // ==================== XỬ LÝ THỜI KHÓA BIỂU ====================
  const handleOpenTkbModal = () => {
    const curTkb = customTimetable || DEFAULT_TIMETABLES[grade] || DEFAULT_TIMETABLES[5];
    setTempTimetable(JSON.parse(JSON.stringify(curTkb)));
    setIsTkbModalOpen(true);
  };

  const handleSaveTkbFromModal = () => {
    if (tempTimetable) {
      setCustomTimetable(tempTimetable);
      setCustomTimetableName(customTimetableName || 'TKB tùy chỉnh (đã sửa)');
      showToast('Đã lưu Thời khóa biểu thành công!', 'success');
    }
    setIsTkbModalOpen(false);
  };

  const handleResetTkb = () => {
    setCustomTimetable(null);
    setCustomTimetableName('');
    setIsTkbModalOpen(false);
    showToast('Đã khôi phục Thời khóa biểu chuẩn Bộ GD&ĐT!', 'info');
  };

  const handleDownloadTkbTemplate = async () => {
    if (window.IntegrationService && window.IntegrationService.exportTimetableTemplate) {
      try {
        const meta = {
          grade,
          schoolName,
          schoolYear,
          className,
          teacherName,
          timetable: customTimetable || DEFAULT_TIMETABLES[grade]
        };
        const blob = await window.IntegrationService.exportTimetableTemplate(grade, meta);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Mau_Thoi_Khoa_Bieu_Khoi_${grade}.xlsx`;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }, 300);
        showToast('Đã tải tệp mẫu Excel Thời khóa biểu!', 'success');
        return;
      } catch (e) {
        console.warn('Lỗi khi gọi exportTimetableTemplate:', e);
      }
    }
    showToast('Đang tải mẫu Thời khóa biểu...', 'info');
  };

  const handleTkbFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      if (window.IntegrationService && window.IntegrationService.parseTimetableFile) {
        const res = await window.IntegrationService.parseTimetableFile(file, grade);
        if (res && res.timetable) {
          setCustomTimetable(res.timetable);
          setCustomTimetableName(file.name);
          if (res.metadata) {
            if (res.metadata.teacherName) setTeacherName(res.metadata.teacherName);
            if (res.metadata.schoolYear) setSchoolYear(res.metadata.schoolYear);
            if (res.metadata.schoolName) setSchoolName(res.metadata.schoolName);
            if (res.metadata.className) setClassName(res.metadata.className);
          }
          showToast(`Đã nhận diện Thời khóa biểu từ "${file.name}"!`, 'success');
          return;
        }
      }
      setCustomTimetableName(file.name);
      showToast(`Đã ghi nhận tệp Thời khóa biểu: ${file.name}`, 'info');
    } catch (err) {
      console.error(err);
      showToast('Lỗi đọc tệp TKB: ' + err.message, 'warning');
    } finally {
      e.target.value = '';
    }
  };

  // ==================== TẢI TÀI LIỆU CHUYÊN ĐỀ TÍCH HỢP ====================
  const handleDocFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadedDocName(file.name);
    try {
      const fileNameLower = file.name.toLowerCase();
      if (fileNameLower.endsWith('.docx') && window.mammoth) {
        const arrayBuffer = await file.arrayBuffer();
        const result = await window.mammoth.extractRawText({ arrayBuffer });
        setUploadedDocText(result.value);
        showToast(`Đã đọc nội dung tệp Word "${file.name}" (${result.value.length} ký tự)!`, 'success');
      } else {
        const reader = new FileReader();
        reader.onload = (event) => {
          const text = event.target?.result || '';
          setUploadedDocText(text);
          showToast(`Đã đọc văn bản tệp "${file.name}" thành công!`, 'success');
        };
        reader.readAsText(file);
      }
    } catch (err) {
      console.error(err);
      showToast('Lỗi đọc tệp chuyên đề: ' + err.message, 'warning');
    } finally {
      e.target.value = '';
    }
  };

  // ==================== HÀM BƯỚC 1: XUẤT NHANH KHBD GỐC ====================
  const handleFastExportOriginal = async () => {
    setIsExporting(true);
    showToast('Đang tạo file Word Kế hoạch bài dạy chuẩn CV 2345...', 'info');

    try {
      if (!window.IntegrationService) {
        showToast('Dịch vụ xuất Word chưa sẵn sàng, vui lòng thử lại sau vài giây!', 'warning');
        return;
      }

      if (isGvbm) {
        // GV Bộ Môn: Xuất theo phân công
        for (const it of gvbmAssignments) {
          await loadKhbdSubject(it.grade, it.subjectKey);
        }
        const weeklyResult = await window.IntegrationService.buildWeeklyPlanByAssignments(
          gvbmAssignments,
          startWeek,
          null,
          true,
          {
            schoolName: gvbmSchoolName,
            teacherName: gvbmTeacherName,
            schoolYear: gvbmSchoolYear,
            department: gvbmDepartment,
            role: 'gvbm'
          }
        );
        await window.IntegrationService.exportWeekByTimetableWord(weeklyResult, {
          role: 'gvbm',
          schoolName: gvbmSchoolName,
          teacherName: gvbmTeacherName,
          schoolYear: gvbmSchoolYear,
          department: gvbmDepartment,
          includeApprovalFrame: includeApproval
        });
        showToast('Đã xuất nhanh file Word KHBD theo Phân công bộ môn!', 'success');
      } else if (isTimetableMode) {
        // GVCN: Xuất theo Thời khóa biểu
        await window.IntegrationService.ensureAllSubjectsLoadedForGrade(grade);
        const weeklyResult = await window.IntegrationService.buildWeeklyPlanByTimetable(
          grade,
          startWeek,
          customTimetable || DEFAULT_TIMETABLES[grade],
          null,
          true
        );
        await window.IntegrationService.exportWeekByTimetableWord(weeklyResult, {
          grade,
          week: startWeek,
          schoolName,
          teacherName,
          schoolYear,
          className,
          includeApprovalFrame: includeApproval
        });
        showToast(`Đã xuất nhanh file Word KHBD Tuần ${startWeek} theo Thời khóa biểu!`, 'success');
      } else {
        // Soạn riêng từng môn
        await loadKhbdSubject(grade, subjectKey);
        const khbdDb = window.KHBD_DATA;
        const weeksData = khbdDb?.getWeekRangePlan(grade, subjectKey, startWeek, endWeek) || [];
        const currentSub = availableSubjects.find((s) => s.id === subjectKey);
        await window.IntegrationService.exportToWord(weeksData, {
          grade,
          subjectName: currentSub ? currentSub.name : 'Môn học',
          startWeek,
          endWeek,
          schoolName,
          teacherName,
          schoolYear,
          className,
          includeApprovalFrame: includeApproval
        });
        showToast(`Đã xuất nhanh file Word KHBD môn ${currentSub?.name || ''}!`, 'success');
      }
    } catch (err) {
      console.error(err);
      showToast('Lỗi khi xuất nhanh KHBD: ' + err.message, 'warning');
    } finally {
      setIsExporting(false);
    }
  };

  // ==================== HÀM BƯỚC 1 -> BƯỚC 2: PHÂN TÍCH TÍCH HỢP ====================
  const handleAnalyzeIntegration = async () => {
    setIsAnalyzing(true);
    showToast('AI đang nghiên cứu bài học và lập kế hoạch ma trận tích hợp...', 'info');

    try {
      if (!window.IntegrationService) {
        throw new Error('Dịch vụ AI Tích hợp chưa nạp xong, vui lòng thử lại sau vài giây!');
      }

      // Xác định nội dung chỉ đạo chuyên đề
      let docText = (uploadedDocText || '').trim();
      let docTitle = (uploadedDocName || 'Chuyên đề tích hợp').trim();

      if (!docText) {
        const top = INTEGRATION_TOPICS.find((t) => t.id === selectedTopicId);
        docText = top?.promptText || 'Tích hợp chuyên đề theo chuẩn GDPT 2018 và CV 2345';
        docTitle = top ? `Chuyên đề: ${top.name}` : 'Chuyên đề tích hợp';
      }

      // Nạp trước dữ liệu RAG cho các môn cần thiết
      if (isGvbm) {
        for (const it of gvbmAssignments) {
          await loadKhbdSubject(it.grade, it.subjectKey);
        }
      } else if (isTimetableMode) {
        await window.IntegrationService.ensureAllSubjectsLoadedForGrade(grade);
      } else {
        await loadKhbdSubject(grade, subjectKey);
      }

      const planParams = {
        grade,
        subjectKey,
        startWeek,
        endWeek,
        durationWeeks: endWeek - startWeek + 1,
        docTitle,
        docText,
        userNotes,
        isTimetableMode,
        role: isGvbm ? 'gvbm' : 'gvcn',
        timetable: customTimetable || DEFAULT_TIMETABLES[grade],
        assignments: isGvbm ? gvbmAssignments : null,
        disabilitySupport: disabilityEnabled
          ? {
              enabled: true,
              type: disabilityType,
              cognitiveRate: disabilityRate,
              rate: disabilityRate,
              notes: disabilityNotes
            }
          : { enabled: false }
      };

      const plan = await window.IntegrationService.analyzeIntegrationPlanWithDocument(planParams);

      if (!plan || !plan.suggestions || plan.suggestions.length === 0) {
        throw new Error('Không thể lập kế hoạch tích hợp cho các bài dạy trong phạm vi đã chọn.');
      }

      setAnalyzedPlan(plan);

      // Mặc định chọn tất cả bài dạy
      const selMap = {};
      plan.suggestions.forEach((s) => {
        selMap[s.lessonId] = true;
      });
      setSelectedLessons(selMap);

      // Chuyển sang Bước 2
      setActiveStep(2);
      showToast(`Đã lập thành công Kế hoạch tích hợp cho ${plan.suggestions.length} bài dạy!`, 'success');
    } catch (err) {
      console.error('Lỗi phân tích:', err);
      showToast('Lỗi phân tích tích hợp: ' + err.message, 'warning');
    } finally {
      setIsAnalyzing(false);
    }
  };

  // ==================== BƯỚC 2: GỬI PHẢN HỒI ĐIỀU CHỈNH KẾ HOẠCH CHO AI ====================
  const handleSendFeedbackToAi = async () => {
    if (!step2Feedback.trim()) {
      showToast('Vui lòng nhập nội dung góp ý cho AI!', 'warning');
      return;
    }

    setIsSendingFeedback(true);
    showToast('AI đang tiếp thu ý kiến và cập nhật lại kế hoạch...', 'info');

    try {
      if (!window.IntegrationService || !window.IntegrationService.refineIntegrationPlanWithFeedback) {
        throw new Error('Chức năng phản hồi AI chưa sẵn sàng!');
      }

      const updatedPlan = await window.IntegrationService.refineIntegrationPlanWithFeedback(
        analyzedPlan,
        step2Feedback
      );

      setAnalyzedPlan(updatedPlan);
      setStep2Feedback('');
      showToast('AI đã cập nhật thành công kế hoạch theo yêu cầu của bạn!', 'success');
    } catch (err) {
      console.error(err);
      showToast('Lỗi khi cập nhật góp ý: ' + err.message, 'warning');
    } finally {
      setIsSendingFeedback(false);
    }
  };

  // ==================== BƯỚC 2: XUẤT FILE WORD BẢNG KẾ HOẠCH TÍCH HỢP ====================
  const handleExportPlanSummaryWord = async () => {
    const sheet = document.getElementById('step2ReviewTableContainer');
    if (!sheet) {
      showToast('Chưa có bảng kế hoạch để xuất!', 'warning');
      return;
    }

    const docTitleClean = (analyzedPlan?.docTitle || 'Ke_Hoach_Tich_Hop').replace(/[^a-zA-Z0-9_\u00C0-\u1EF9]/g, '_');
    const filename = `Ke_Hoach_Duyet_Tich_Hop_Khoi_${grade}_Tuan_${startWeek}-${endWeek}_${docTitleClean}.docx`;

    const html = `<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
<head>
  <meta charset="utf-8">
  <title>Kế hoạch duyệt tích hợp</title>
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
    @page Section1 { size: 21.0cm 29.7cm; margin: 2.0cm 1.5cm 2.0cm 2.5cm; mso-page-orientation: portrait; }
    div.Section1 { page: Section1; }
    body { font-family: "Times New Roman", serif; font-size: 12pt; line-height: 1.15; color: #000; text-align: justify; }
    table { width: 100%; border-collapse: collapse; margin: 6pt 0; font-family: "Times New Roman", serif; }
    th, td { border: 1pt solid #000; padding: 4pt 6pt; vertical-align: top; font-size: 11pt; }
    th { background-color: #f1f5f9; font-weight: bold; text-align: center; }
  </style>
</head>
<body>
  <div class="Section1">
    <div style="text-align: center; margin-bottom: 12pt;">
      <h3 style="margin: 0; font-size: 14pt; text-transform: uppercase;">${schoolName.toUpperCase()}</h3>
      <h2 style="margin: 4pt 0; font-size: 15pt; text-transform: uppercase;">KẾ HOẠCH BÀI DẠY TÍCH HỢP CHUYÊN ĐỀ</h2>
      <p style="margin: 0; font-size: 12pt; font-style: italic;">
        Khối lớp: ${grade} • Năm học: ${schoolYear} • Giáo viên: ${teacherName}
      </p>
    </div>
    ${sheet.innerHTML}
  </div>
</body>
</html>`;

    if (window.IntegrationService && window.IntegrationService.downloadWordBlob) {
      await window.IntegrationService.downloadWordBlob(html, filename);
      showToast('Đã xuất Bảng Kế hoạch duyệt tích hợp (.docx) thành công!', 'success');
    }
  };

  // ==================== BƯỚC 2 -> BƯỚC 3: ÁP DỤNG & XEM TRƯỚC TOÀN VĂN ====================
  const handleApplyAndProceedToStep3 = async () => {
    setIsAnalyzing(true);
    showToast('Đang chèn kế hoạch đã duyệt vào toàn bộ bài dạy chuẩn CV 2345...', 'info');

    try {
      if (!analyzedPlan || !analyzedPlan.suggestions) {
        throw new Error('Chưa có kế hoạch bài dạy đã duyệt.');
      }

      // Xây dựng map các bài đã tích hợp
      const integratedMap = {};
      analyzedPlan.suggestions.forEach((s) => {
        if (selectedLessons[s.lessonId] !== false) {
          integratedMap[s.lessonId] = s;
          integratedMap[`${s.subjectKey || subjectKey}_${s.week}_${s.periodIndex || 0}`] = s;
        }
      });

      if (isGvbm) {
        // GV Bộ Môn
        const weeklyResults = [];
        for (let w = startWeek; w <= endWeek; w++) {
          const wPlan = await window.IntegrationService.buildWeeklyPlanByAssignments(
            gvbmAssignments,
            w,
            integratedMap,
            true,
            {
              role: 'gvbm',
              isAssignmentMode: true,
              week: w,
              schoolName: gvbmSchoolName,
              teacherName: gvbmTeacherName,
              schoolYear: gvbmSchoolYear,
              department: gvbmDepartment
            }
          );
          weeklyResults.push(wPlan);
        }
        setPreviewWeeks(weeklyResults);
      } else if (isTimetableMode) {
        // GVCN: Ghép theo Thời khóa biểu
        const weeklyResults = [];
        for (let w = startWeek; w <= endWeek; w++) {
          const wPlan = await window.IntegrationService.buildWeeklyPlanByTimetable(
            grade,
            w,
            customTimetable || DEFAULT_TIMETABLES[grade],
            integratedMap,
            true
          );
          weeklyResults.push(wPlan);
        }
        setPreviewWeeks(weeklyResults);
      } else {
        // Soạn riêng từng môn
        const appliedLessons = await window.IntegrationService.applyIntegrationToWeekRange(
          analyzedPlan,
          selectedLessons,
          true
        );
        // Gom lại theo tuần
        const weekMap = {};
        appliedLessons.forEach((l) => {
          const w = l.week || startWeek;
          if (!weekMap[w]) weekMap[w] = { week: w, lessons: [] };
          weekMap[w].lessons.push(l);
        });
        setPreviewWeeks(Object.values(weekMap));
      }

      setActivePreviewTab(0);
      setActiveStep(3);
      showToast('Đã hoàn thiện toàn văn Giáo án có tích hợp chuẩn CV 2345!', 'success');
    } catch (err) {
      console.error('Lỗi khi chèn tích hợp:', err);
      showToast('Lỗi khi áp dụng tích hợp: ' + err.message, 'warning');
    } finally {
      setIsAnalyzing(false);
    }
  };

  // ==================== BƯỚC 3: XUẤT FILE WORD HOÀN THIỆN ====================
  const handleExportFinalWord = async () => {
    setIsExporting(true);
    showToast('Đang xuất tệp Word hoàn chỉnh chuẩn 100% CV 2345...', 'info');

    try {
      if (!window.IntegrationService) {
        throw new Error('Dịch vụ xuất Word chưa sẵn sàng!');
      }

      const currentSub = availableSubjects.find((s) => s.id === subjectKey);
      const subjectName = currentSub ? currentSub.name : 'Môn học';

      if (isGvbm || isTimetableMode) {
        // Xuất theo tuần TKB hoặc phân công GVBM
        for (let i = 0; i < previewWeeks.length; i++) {
          const wItem = previewWeeks[i];
          await window.IntegrationService.exportWeekByTimetableWord(wItem, {
            role: isGvbm ? 'gvbm' : 'gvcn',
            grade,
            week: wItem.week || startWeek + i,
            schoolName: isGvbm ? gvbmSchoolName : schoolName,
            teacherName: isGvbm ? gvbmTeacherName : teacherName,
            schoolYear: isGvbm ? gvbmSchoolYear : schoolYear,
            className: isGvbm ? gvbmDepartment : className,
            includeApprovalFrame: includeApproval,
            disabilitySupport: disabilityEnabled
              ? {
                  enabled: true,
                  type: disabilityType,
                  rate: disabilityRate,
                  notes: disabilityNotes
                }
              : { enabled: false }
          });
        }
      } else {
        // Soạn theo từng môn
        await window.IntegrationService.exportToWord(previewWeeks, {
          grade,
          subjectName,
          startWeek,
          endWeek,
          schoolName,
          teacherName,
          schoolYear,
          className,
          includeApprovalFrame: includeApproval,
          disabilitySupport: disabilityEnabled
            ? {
                enabled: true,
                type: disabilityType,
                rate: disabilityRate,
                notes: disabilityNotes
              }
            : { enabled: false }
        });
      }

      showToast('Đã xuất thành công tệp Word chuẩn 100% CV 2345!', 'success');
    } catch (err) {
      console.error(err);
      showToast('Lỗi khi xuất Word: ' + err.message, 'warning');
    } finally {
      setIsExporting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const selectedWeekSpan = endWeek - startWeek + 1;
  const currentSubjectObj = availableSubjects.find((s) => s.id === subjectKey);

  // =========================================================================
  // GIAO DIỆN CHÍNH
  // =========================================================================
  return (
    <div className="space-y-6 pb-20 animate-fade-in text-slate-800">
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed top-5 right-5 z-50 px-4 py-3 rounded-xl shadow-lg border text-xs font-bold flex items-center gap-2 animate-bounce-short transition-all ${
            toast.type === 'success'
              ? 'bg-emerald-600 text-white border-emerald-700 shadow-emerald-200'
              : toast.type === 'warning'
              ? 'bg-amber-500 text-white border-amber-600 shadow-amber-200'
              : 'bg-blue-600 text-white border-blue-700 shadow-blue-200'
          }`}
        >
          <Sparkles className="w-4 h-4 shrink-0" />
          <span>{toast.message}</span>
        </div>
      )}

      {/* Banner Header Phân Hệ Xuất KHBD */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-pink-600 via-rose-600 to-purple-700 p-6 md:p-8 text-white shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-white/20 backdrop-blur-md shadow-inner border border-white/20">
            <Layers className="w-8 h-8 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-xl md:text-2xl font-black tracking-tight uppercase">
                XUẤT KẾ HOẠCH BÀI DẠY (KHBD) CÓ TÍCH HỢP
              </h2>
              <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-400 text-emerald-950 shadow-xs">
                CHUẨN CV 2345
              </span>
            </div>
            <p className="text-xs text-pink-100 mt-1 font-medium">
              Tích hợp chuyên đề đa môn • Phân hóa HS khuyết tật (TT 03/2018) • Hỗ trợ TKB GVCN & GV Bộ Môn • Xuất Word chuẩn 100% Bộ GD&ĐT
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold">
          <span className="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20">
            📚 RAG KHBD 5 Khối Lớp
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20">
            ⚡ AI Hybrid & Offline
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* STEPPER HEADER: QUY TRÌNH 3 BƯỚC THÔNG MINH */}
      {/* ========================================================================= */}
      <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-xs">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          {/* Bước 1 */}
          <button
            type="button"
            onClick={() => setActiveStep(1)}
            className={`flex items-center gap-2 text-xs font-bold transition-all ${
              activeStep === 1
                ? 'text-pink-600 scale-105'
                : activeStep > 1
                ? 'text-emerald-600 hover:text-emerald-700'
                : 'text-slate-400'
            }`}
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-xs ${
                activeStep === 1
                  ? 'bg-pink-600 text-white shadow-md shadow-pink-200'
                  : activeStep > 1
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 text-slate-400'
              }`}
            >
              1
            </div>
            <div className="text-left hidden sm:block">
              <div>BƯỚC 1: THIẾT LẬP</div>
              <div className="text-[10px] font-normal text-slate-500">Chọn môn, TKB & Chuyên đề</div>
            </div>
          </button>

          <div className={`flex-1 h-0.5 mx-3 sm:mx-6 ${activeStep >= 2 ? 'bg-emerald-500' : 'bg-slate-200'}`}></div>

          {/* Bước 2 */}
          <button
            type="button"
            onClick={() => {
              if (analyzedPlan) setActiveStep(2);
              else showToast('Vui lòng hoàn thành Bước 1 trước!', 'info');
            }}
            className={`flex items-center gap-2 text-xs font-bold transition-all ${
              activeStep === 2
                ? 'text-pink-600 scale-105'
                : activeStep > 2
                ? 'text-emerald-600 hover:text-emerald-700'
                : 'text-slate-400'
            }`}
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-xs ${
                activeStep === 2
                  ? 'bg-pink-600 text-white shadow-md shadow-pink-200'
                  : activeStep > 2
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 text-slate-400'
              }`}
            >
              2
            </div>
            <div className="text-left hidden sm:block">
              <div>BƯỚC 2: DUYỆT & GÓP Ý AI</div>
              <div className="text-[10px] font-normal text-slate-500">Ma trận tích hợp & Feedback</div>
            </div>
          </button>

          <div className={`flex-1 h-0.5 mx-3 sm:mx-6 ${activeStep === 3 ? 'bg-emerald-500' : 'bg-slate-200'}`}></div>

          {/* Bước 3 */}
          <button
            type="button"
            onClick={() => {
              if (previewWeeks) setActiveStep(3);
              else showToast('Vui lòng duyệt kế hoạch ở Bước 2 trước!', 'info');
            }}
            className={`flex items-center gap-2 text-xs font-bold transition-all ${
              activeStep === 3 ? 'text-emerald-600 scale-105' : 'text-slate-400'
            }`}
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-xs ${
                activeStep === 3
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200'
                  : 'bg-slate-100 text-slate-400'
              }`}
            >
              3
            </div>
            <div className="text-left hidden sm:block">
              <div>BƯỚC 3: XUẤT BẢN WORD</div>
              <div className="text-[10px] font-normal text-slate-500">Xem 100% giáo án & In ấn</div>
            </div>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* NỘI DUNG CHÍNH THEO TỪNG BƯỚC */}
      {/* ========================================================================= */}

      {/* -------------------- BƯỚC 1: THIẾT LẬP & CHỌN CHUYÊN ĐỀ -------------------- */}
      {activeStep === 1 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start animate-fade-in">
          {/* CỘT TRÁI (5 PHẦN): THIẾT LẬP THÔNG SỐ */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm space-y-5">
            {/* 1. LỰA CHỌN ĐỐI TƯỢNG VÀ HÌNH THỨC XUẤT KHBD */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                <span className="flex items-center gap-1.5 text-pink-600 uppercase">
                  <Users className="w-4 h-4 text-pink-600" /> ĐỐI TƯỢNG & HÌNH THỨC XUẤT KHBD:
                </span>
                <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> CV 2345
                </span>
              </div>

              {/* 2 Nút chính: GVCN & GV Bộ Môn */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setExportMode('timetable');
                    setTeacherType('gvcn');
                  }}
                  className={`p-3 rounded-xl text-left transition-all border ${
                    isTimetableMode && teacherType === 'gvcn'
                      ? 'bg-blue-800 border-blue-800 text-white shadow-md font-bold'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 font-semibold'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs">
                    <School className="w-4 h-4 shrink-0" />
                    <span>GVCN (Dạy 1 Lớp)</span>
                  </div>
                  <div
                    className={`text-[11px] mt-0.5 ${
                      isTimetableMode && teacherType === 'gvcn' ? 'text-blue-100' : 'text-slate-500'
                    }`}
                  >
                    Theo Lớp • Ghép Đa Môn
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setExportMode('timetable');
                    setTeacherType('gvbm');
                  }}
                  className={`p-3 rounded-xl text-left transition-all border ${
                    isTimetableMode && teacherType === 'gvbm'
                      ? 'bg-sky-600 border-sky-600 text-white shadow-md font-bold'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 font-semibold'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs">
                    <Briefcase className="w-4 h-4 shrink-0" />
                    <span>GV Bộ Môn (Đa Khối)</span>
                  </div>
                  <div
                    className={`text-[11px] mt-0.5 ${
                      isTimetableMode && teacherType === 'gvbm' ? 'text-sky-100' : 'text-slate-500'
                    }`}
                  >
                    1 Môn Nhiều Khối • Đa Môn
                  </div>
                </button>
              </div>

              {/* Nút Phụ: Soạn Riêng Theo Từng Môn Học */}
              <button
                type="button"
                onClick={() => setExportMode('subject')}
                className={`w-full py-2 px-3 rounded-lg text-xs font-bold transition-all border flex items-center justify-center gap-1.5 ${
                  exportMode === 'subject'
                    ? 'bg-pink-600 border-pink-600 text-white shadow-sm'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Soạn & Xuất Riêng Theo Từng Môn Học</span>
              </button>
            </div>

            {/* TRƯỜNG HỢP: GV BỘ MÔN (ĐA KHỐI) */}
            {isGvbm && (
              <div className="space-y-4 animate-fade-in">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                      <TableProperties className="w-4 h-4 text-sky-600" />
                      <span>1. Phân Công Chuyên Môn / Giảng Dạy:</span>
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {totalGvbmPeriods} tiết/tuần ({gvbmAssignments.length} môn)
                    </span>
                  </div>

                  <div className="text-[11px] text-slate-600 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Mỗi môn dạy nhiều lớp trong khối sẽ xuất 1 KHBD chuẩn kèm danh sách lớp.</span>
                  </div>

                  {/* Bảng phân công */}
                  <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 text-center">
                        <tr>
                          <th className="p-1.5 border-r border-slate-200 w-8">STT</th>
                          <th className="p-1.5 border-r border-slate-200 w-24">Khối</th>
                          <th className="p-1.5 border-r border-slate-200">Môn học</th>
                          <th className="p-1.5 border-r border-slate-200">Lớp phụ trách</th>
                          <th className="p-1.5 border-r border-slate-200 w-14">Tiết/T</th>
                          <th className="p-1.5 w-8">Xóa</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {gvbmAssignments.map((item, idx) => {
                          const availSubjs = getAvailableSubjectsForGrade(item.grade);
                          return (
                            <tr key={item.id} className="hover:bg-slate-50/60">
                              <td className="p-1.5 text-center font-bold text-slate-500 bg-slate-50 border-r border-slate-200">
                                {idx + 1}
                              </td>
                              <td className="p-1 border-r border-slate-200">
                                <select
                                  value={item.grade}
                                  onChange={(e) => handleUpdateAssignment(item.id, 'grade', e.target.value)}
                                  className="w-full p-1 rounded border border-slate-200 font-bold text-xs bg-white"
                                >
                                  {[1, 2, 3, 4, 5].map((g) => (
                                    <option key={g} value={g}>
                                      Khối {g}
                                    </option>
                                  ))}
                                </select>
                              </td>
                              <td className="p-1 border-r border-slate-200">
                                <select
                                  value={item.subjectKey}
                                  onChange={(e) => handleUpdateAssignment(item.id, 'subjectKey', e.target.value)}
                                  className="w-full p-1 rounded border border-slate-200 font-bold text-xs bg-white"
                                >
                                  {availSubjs.map((s) => (
                                    <option key={s.id} value={s.id}>
                                      {s.name}
                                    </option>
                                  ))}
                                </select>
                              </td>
                              <td className="p-1 border-r border-slate-200">
                                <input
                                  type="text"
                                  value={item.classes || ''}
                                  onChange={(e) => handleUpdateAssignment(item.id, 'classes', e.target.value)}
                                  placeholder="VD: 4A, 4B, 4C"
                                  className="w-full p-1 rounded border border-slate-200 text-xs font-semibold"
                                />
                              </td>
                              <td className="p-1 border-r border-slate-200 text-center">
                                <input
                                  type="number"
                                  min={1}
                                  max={30}
                                  value={item.periodsPerWeek || 1}
                                  onChange={(e) => handleUpdateAssignment(item.id, 'periodsPerWeek', e.target.value)}
                                  className="w-full p-1 text-center font-bold text-xs rounded border border-slate-200"
                                />
                              </td>
                              <td className="p-1 text-center">
                                <button
                                  type="button"
                                  onClick={() => handleRemoveAssignment(item.id)}
                                  className="text-red-500 hover:text-red-700 p-1"
                                  title="Xóa hàng này"
                                >
                                  <Trash2 className="w-3.5 h-3.5 mx-auto" />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Nút thêm hàng & Mẫu nhanh */}
                  <div className="flex items-center justify-between gap-2 flex-wrap pt-1 border-t border-dashed border-slate-200">
                    <button
                      type="button"
                      onClick={handleAddAssignment}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow-xs transition-all"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Thêm Hàng Mới</span>
                    </button>

                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[11px] text-slate-500 font-semibold">Mẫu nhanh:</span>
                      <button
                        type="button"
                        onClick={() => handleLoadSamplePreset('multi')}
                        className="px-2 py-1 rounded border border-sky-300 bg-sky-50 text-sky-800 text-[11px] font-bold hover:bg-sky-100"
                      >
                        Nhiều Khối Nhiều Môn
                      </button>
                      <button
                        type="button"
                        onClick={() => handleLoadSamplePreset('music')}
                        className="px-2 py-1 rounded border border-slate-200 bg-white text-slate-700 text-[11px] hover:bg-slate-100"
                      >
                        Âm Nhạc (1-5)
                      </button>
                      <button
                        type="button"
                        onClick={() => handleLoadSamplePreset('pe')}
                        className="px-2 py-1 rounded border border-slate-200 bg-white text-slate-700 text-[11px] hover:bg-slate-100"
                      >
                        GDTC (1-5)
                      </button>
                      <button
                        type="button"
                        onClick={() => handleLoadSamplePreset('tech')}
                        className="px-2 py-1 rounded border border-slate-200 bg-white text-slate-700 text-[11px] hover:bg-slate-100"
                      >
                        Tin - CN (3-5)
                      </button>
                    </div>
                  </div>
                </div>

                {/* Thông tin GVBM */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                  <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5 text-sky-700">
                    <School className="w-4 h-4" /> Thông tin Giáo viên & Năm học GVBM:
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <label className="text-slate-600 font-bold text-[11px]">Giáo viên:</label>
                      <input
                        type="text"
                        value={gvbmTeacherName}
                        onChange={(e) => setGvbmTeacherName(e.target.value)}
                        className="w-full mt-0.5 p-2 rounded-lg border border-slate-200 bg-white font-medium"
                      />
                    </div>
                    <div>
                      <label className="text-slate-600 font-bold text-[11px]">Tổ chuyên môn:</label>
                      <input
                        type="text"
                        value={gvbmDepartment}
                        onChange={(e) => setGvbmDepartment(e.target.value)}
                        className="w-full mt-0.5 p-2 rounded-lg border border-slate-200 bg-white font-medium"
                      />
                    </div>
                    <div>
                      <label className="text-slate-600 font-bold text-[11px]">Năm học:</label>
                      <input
                        type="text"
                        value={gvbmSchoolYear}
                        onChange={(e) => setGvbmSchoolYear(e.target.value)}
                        className="w-full mt-0.5 p-2 rounded-lg border border-slate-200 bg-white font-medium"
                      />
                    </div>
                    <div>
                      <label className="text-slate-600 font-bold text-[11px]">Trường Tiểu học:</label>
                      <input
                        type="text"
                        value={gvbmSchoolName}
                        onChange={(e) => setGvbmSchoolName(e.target.value)}
                        className="w-full mt-0.5 p-2 rounded-lg border border-slate-200 bg-white font-medium"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TRƯỜNG HỢP: GVCN (DẠY 1 LỚP THEO TKB) */}
            {isTimetableMode && !isGvbm && (
              <div className="space-y-4 animate-fade-in">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">1. Khối Lớp:</label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(parseInt(e.target.value))}
                    className="w-full text-xs font-bold p-2.5 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-blue-800 outline-none shadow-xs"
                  >
                    {[1, 2, 3, 4, 5].map((g) => (
                      <option key={g} value={g}>
                        Khối {g} (Lớp {g})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                      <TableProperties className="w-4 h-4 text-pink-600" />
                      <span>2. Thời Khóa Biểu Khối {grade}:</span>
                    </span>
                    <button
                      type="button"
                      onClick={handleDownloadTkbTemplate}
                      className="flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-bold hover:bg-emerald-100 transition-all"
                    >
                      <Download className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Tải mẫu TKB (.xlsx)</span>
                    </button>
                  </div>

                  {customTimetableName && (
                    <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-semibold">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Đang áp dụng: <strong>{customTimetableName}</strong></span>
                      </span>
                      <button
                        type="button"
                        onClick={handleResetTkb}
                        className="text-xs text-red-600 hover:text-red-800 font-bold"
                      >
                        Đặt lại
                      </button>
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleOpenTkbModal}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-slate-300 bg-white text-slate-700 text-xs font-bold hover:bg-slate-50 transition-all shadow-xs"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-slate-600" />
                      <span>Xem & Sửa TKB</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => tkbFileInputRef.current?.click()}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-emerald-300 bg-white text-emerald-800 text-xs font-bold hover:bg-emerald-50 transition-all shadow-xs"
                    >
                      <UploadCloud className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Tải lên TKB (.xlsx, .csv)</span>
                    </button>
                    <input
                      ref={tkbFileInputRef}
                      type="file"
                      accept=".xlsx,.xls,.docx,.doc,.csv,.txt"
                      className="hidden"
                      onChange={handleTkbFileUpload}
                    />
                  </div>
                </div>

                {/* Thông tin GVCN */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                  <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5 text-blue-800">
                    <School className="w-4 h-4" /> Thông tin Giáo viên & Lớp chủ nhiệm:
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <label className="text-slate-600 font-bold text-[11px]">Giáo viên:</label>
                      <input
                        type="text"
                        value={teacherName}
                        onChange={(e) => setTeacherName(e.target.value)}
                        className="w-full mt-0.5 p-2 rounded-lg border border-slate-200 bg-white font-medium"
                      />
                    </div>
                    <div>
                      <label className="text-slate-600 font-bold text-[11px]">Năm học:</label>
                      <input
                        type="text"
                        value={schoolYear}
                        onChange={(e) => setSchoolYear(e.target.value)}
                        className="w-full mt-0.5 p-2 rounded-lg border border-slate-200 bg-white font-medium"
                      />
                    </div>
                    <div>
                      <label className="text-slate-600 font-bold text-[11px]">Lớp:</label>
                      <input
                        type="text"
                        value={className}
                        onChange={(e) => setClassName(e.target.value)}
                        className="w-full mt-0.5 p-2 rounded-lg border border-slate-200 bg-white font-medium"
                      />
                    </div>
                    <div>
                      <label className="text-slate-600 font-bold text-[11px]">Trường Tiểu học:</label>
                      <input
                        type="text"
                        value={schoolName}
                        onChange={(e) => setSchoolName(e.target.value)}
                        className="w-full mt-0.5 p-2 rounded-lg border border-slate-200 bg-white font-medium"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TRƯỜNG HỢP: SOẠN RIÊNG TỪNG MÔN */}
            {exportMode === 'subject' && (
              <div className="space-y-4 animate-fade-in">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-800">1. Khối Lớp:</label>
                    <select
                      value={grade}
                      onChange={(e) => setGrade(parseInt(e.target.value))}
                      className="w-full text-xs font-bold p-2.5 rounded-xl border border-slate-200 bg-white outline-none"
                    >
                      {[1, 2, 3, 4, 5].map((g) => (
                        <option key={g} value={g}>
                          Khối {g}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-800">2. Môn Học:</label>
                    <select
                      value={subjectKey}
                      onChange={(e) => setSubjectKey(e.target.value)}
                      className="w-full text-xs font-bold p-2.5 rounded-xl border border-slate-200 bg-white outline-none"
                    >
                      {availableSubjects.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                  <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5 text-pink-600">
                    <School className="w-4 h-4" /> Thông tin Giáo viên:
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <label className="text-slate-600 font-bold text-[11px]">Giáo viên:</label>
                      <input
                        type="text"
                        value={teacherName}
                        onChange={(e) => setTeacherName(e.target.value)}
                        className="w-full mt-0.5 p-2 rounded-lg border border-slate-200 bg-white font-medium"
                      />
                    </div>
                    <div>
                      <label className="text-slate-600 font-bold text-[11px]">Năm học:</label>
                      <input
                        type="text"
                        value={schoolYear}
                        onChange={(e) => setSchoolYear(e.target.value)}
                        className="w-full mt-0.5 p-2 rounded-lg border border-slate-200 bg-white font-medium"
                      />
                    </div>
                    <div>
                      <label className="text-slate-600 font-bold text-[11px]">Lớp:</label>
                      <input
                        type="text"
                        value={className}
                        onChange={(e) => setClassName(e.target.value)}
                        className="w-full mt-0.5 p-2 rounded-lg border border-slate-200 bg-white font-medium"
                      />
                    </div>
                    <div>
                      <label className="text-slate-600 font-bold text-[11px]">Trường Tiểu học:</label>
                      <input
                        type="text"
                        value={schoolName}
                        onChange={(e) => setSchoolName(e.target.value)}
                        className="w-full mt-0.5 p-2 rounded-lg border border-slate-200 bg-white font-medium"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. PHẠM VI TUẦN HỌC */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-800">
                  {isGvbm ? '3. Phạm vi Tuần giảng dạy:' : '3. Phạm vi Tuần học:'}{' '}
                  <span className="text-pink-600 font-bold text-[11px]">(Tối đa 4 tuần/lần)</span>
                </label>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200">
                  Tuần {startWeek} → Tuần {endWeek} ({selectedWeekSpan} tuần)
                </span>
              </div>

              <div className="grid grid-cols-5 gap-2 items-center text-xs">
                <div className="col-span-2 space-y-0.5">
                  <span className="text-[11px] text-slate-500 font-semibold">Từ tuần:</span>
                  <select
                    value={startWeek}
                    onChange={(e) => {
                      const s = parseInt(e.target.value);
                      setStartWeek(s);
                      if (endWeek < s || endWeek > s + 3) {
                        setEndWeek(s);
                      }
                    }}
                    className="w-full p-2 rounded-lg border border-slate-200 bg-white font-bold text-xs"
                  >
                    {Array.from({ length: 35 }, (_, i) => i + 1).map((w) => (
                      <option key={w} value={w}>
                        Tuần {w}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="text-center font-black text-pink-600 pt-3">→</div>

                <div className="col-span-2 space-y-0.5">
                  <span className="text-[11px] text-slate-500 font-semibold">Đến tuần (+4T):</span>
                  <select
                    value={endWeek}
                    onChange={(e) => setEndWeek(parseInt(e.target.value))}
                    className="w-full p-2 rounded-lg border border-slate-200 bg-white font-bold text-xs"
                  >
                    {Array.from({ length: 4 }, (_, i) => startWeek + i)
                      .filter((w) => w <= 35)
                      .map((w) => (
                        <option key={w} value={w}>
                          Tuần {w}
                        </option>
                      ))}
                  </select>
                </div>
              </div>

              {/* Phím tắt chọn nhanh tuần */}
              <div className="flex items-center gap-1.5 pt-1">
                <span className="text-[11px] text-slate-500 font-semibold">Chọn nhanh:</span>
                {[1, 2, 3, 4].map((cnt) => (
                  <button
                    key={cnt}
                    type="button"
                    onClick={() => handleQuickWeek(cnt)}
                    className={`px-2 py-0.5 rounded text-[11px] font-bold border transition-all ${
                      selectedWeekSpan === cnt
                        ? 'bg-pink-600 text-white border-pink-600'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {cnt} Tuần{cnt === 4 ? ' (Max)' : ''}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. GIÁO DỤC HÒA NHẬP (HS KHUYẾT TẬT) & KHUNG DUYỆT */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-200 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <span className="text-xs font-bold text-purple-950">
                      Giáo Dục Hòa Nhập (HS Khuyết Tật)
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={disabilityEnabled}
                      onChange={(e) => setDisabilityEnabled(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                {disabilityEnabled && (
                  <div className="space-y-2 pt-2 border-t border-purple-200/80 text-xs animate-fade-in">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-slate-600 text-[11px] font-semibold">Dạng khuyết tật:</span>
                        <select
                          value={disabilityType}
                          onChange={(e) => setDisabilityType(e.target.value)}
                          className="w-full mt-0.5 p-1.5 rounded border border-purple-200 bg-white font-medium text-xs"
                        >
                          <option value="tri_tue">Khuyết tật trí tuệ</option>
                          <option value="khiem_thinh">Khiếm thính (Nghe - nói)</option>
                          <option value="khiem_thi">Khiếm thị (Nhìn)</option>
                          <option value="van_dong">Khuyết tật vận động</option>
                          <option value="tu_ki">Rối loạn phổ tự kỉ</option>
                          <option value="kho_khan_hoc">Khó khăn về học tập</option>
                        </select>
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] text-slate-600 font-semibold">
                          <span>Mức nhận thức:</span>
                          <strong className="text-purple-700">{disabilityRate}%</strong>
                        </div>
                        <input
                          type="range"
                          min="20"
                          max="80"
                          step="5"
                          value={disabilityRate}
                          onChange={(e) => setDisabilityRate(parseInt(e.target.value))}
                          className="w-full mt-1 accent-purple-600"
                        />
                      </div>
                    </div>

                    <div>
                      <span className="text-slate-600 text-[11px] font-semibold">Ghi chú sư phạm riêng:</span>
                      <input
                        type="text"
                        value={disabilityNotes}
                        onChange={(e) => setDisabilityNotes(e.target.value)}
                        placeholder="VD: Cần hỗ trợ gọi đọc câu ngắn, viết chữ to..."
                        className="w-full mt-0.5 p-1.5 rounded border border-purple-200 bg-white text-xs"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Công tắc Khung Duyệt Giáo Án */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <span className="font-bold text-slate-700">Kèm Khung Duyệt Giáo Án (Ký tên BGH & Tổ trưởng)</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeApproval}
                    onChange={(e) => setIncludeApproval(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"></div>
                </label>
              </div>
            </div>

            {/* 2 NÚT HÀNH ĐỘNG CHÍNH */}
            <div className="pt-2 space-y-2">
              <button
                type="button"
                onClick={handleAnalyzeIntegration}
                disabled={isAnalyzing}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-extrabold text-sm shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>AI đang phân tích & lập kế hoạch tích hợp...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>BƯỚC 1: AI LẬP KẾ HOẠCH TÍCH HỢP</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleFastExportOriginal}
                disabled={isExporting}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-all border border-slate-300"
                title="Tải ngay Kế hoạch bài dạy gốc của Bộ GD&ĐT mà không cần qua phân tích AI"
              >
                {isExporting ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-slate-500" />
                    <span>Đang xuất file Word gốc...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5 text-slate-600" />
                    <span>Xuất Nhanh KHBD Gốc ({selectedWeekSpan} Tuần - Chuẩn CV 2345)</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* CỘT PHẢI (7 PHẦN): CHỌN CHUYÊN ĐỀ 1 CHẠM & TẢI TÀI LIỆU CHUYÊN ĐỀ */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm space-y-5">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-extrabold text-slate-900 uppercase flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-pink-600" />
                  <span>Chọn Chuyên Đề Tích Hợp Tự Động</span>
                </h3>
                <span className="text-[11px] font-bold text-pink-700 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-200">
                  Chuẩn GDPT 2018
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Bấm chọn chuyên đề tích hợp có sẵn hoặc tải lên tệp văn bản chỉ đạo của Sở / Phòng / Trường (.docx, .pdf, .txt).
              </p>
            </div>

            {/* DANH SÁCH THẺ CHUYÊN ĐỀ 1 CHẠM */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {INTEGRATION_TOPICS.map((top) => {
                const Icon = top.icon;
                const isSelected = selectedTopicId === top.id;
                return (
                  <button
                    key={top.id}
                    type="button"
                    onClick={() => handleSelectTopic(top.id)}
                    className={`p-3 rounded-xl border text-left transition-all flex items-start gap-2.5 ${
                      isSelected
                        ? top.activeColor
                        : top.color
                    }`}
                  >
                    <div className="p-2 rounded-lg bg-white/80 shrink-0 shadow-xs">
                      <Icon className="w-4 h-4 text-slate-800" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-bold text-xs tracking-tight">{top.name}</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded font-extrabold bg-white/70 text-slate-800">
                          {top.badge}
                        </span>
                      </div>
                      <p className={`text-[10px] mt-1 line-clamp-2 ${isSelected ? 'text-white/90' : 'text-slate-600'}`}>
                        {top.promptText}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* KHU VỰC KÉO THẢ / TẢI TÀI LIỆU CHUYÊN ĐỀ */}
            <div className="p-4 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/70 hover:bg-pink-50/40 hover:border-pink-300 transition-all text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-slate-700">
                <UploadCloud className="w-6 h-6 text-pink-600" />
                <span className="text-xs font-bold">
                  {uploadedDocName ? `Tài liệu đang nạp: ${uploadedDocName}` : 'Tải lên tài liệu chuyên đề (.docx, .pdf, .txt)'}
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                Hỗ trợ công văn hướng dẫn STEM, giáo án mẫu, kế hoạch giáo dục địa phương Vĩnh Long, chỉ đạo đổi mới dạy học...
              </p>
              <div className="pt-1 flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => docFileInputRef.current?.click()}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 shadow-xs"
                >
                  Chọn tệp từ máy tính
                </button>
                {uploadedDocText && (
                  <button
                    type="button"
                    onClick={() => {
                      setUploadedDocName('');
                      setUploadedDocText('');
                      showToast('Đã xóa tài liệu tải lên!', 'info');
                    }}
                    className="text-xs text-red-600 hover:text-red-700 font-semibold"
                  >
                    Xóa tệp
                  </button>
                )}
                <input
                  ref={docFileInputRef}
                  type="file"
                  accept=".docx,.doc,.pdf,.txt"
                  className="hidden"
                  onChange={handleDocFileUpload}
                />
              </div>
            </div>

            {/* GHI CHÚ BỔ SUNG & YÊU CẦU SƯ PHẠM RIÊNG */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Edit3 className="w-3.5 h-3.5 text-pink-600" />
                <span>Yêu cầu sư phạm bổ sung của Giáo viên (Tùy chọn):</span>
              </label>
              <textarea
                value={userNotes}
                onChange={(e) => setUserNotes(e.target.value)}
                rows={3}
                placeholder="VD: Lồng ghép trò chơi đố vui về di tích lịch sử Vĩnh Long; Tích hợp công cụ AI Quizizz ở phần khởi động; Chú ý học sinh tiếp thu chậm..."
                className="w-full p-2.5 rounded-xl border border-slate-300 bg-white text-xs outline-none focus:border-pink-600 leading-relaxed"
              />
            </div>

            {/* Xem nhanh đoạn văn bản trích dẫn */}
            {uploadedDocText && (
              <div className="p-3 rounded-xl bg-slate-100 text-slate-700 text-xs space-y-1 border border-slate-200">
                <div className="font-bold text-[11px] text-slate-500 uppercase">Trích xuất nội dung văn bản:</div>
                <p className="line-clamp-3 text-[11px] leading-relaxed italic text-slate-600">
                  "{uploadedDocText.substring(0, 400)}..."
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* -------------------- BƯỚC 2: DUYỆT & TINH CHỈNH KẾ HOẠCH TÍCH HỢP -------------------- */}
      {activeStep === 2 && analyzedPlan && (
        <div className="space-y-5 animate-fade-in">
          {/* Thanh công cụ Bước 2 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase text-pink-600 flex items-center gap-1">
                  <FileCheck2 className="w-4 h-4" /> BƯỚC 2/3: DUYỆT & TINH CHỈNH NỘI DUNG TÍCH HỢP
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  {analyzedPlan.suggestions?.length || 0} bài dạy
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mt-0.5">
                Chuyên đề: <span className="text-pink-700">{analyzedPlan.docSummary?.topicName || 'Chuyên đề tích hợp'}</span>
              </h3>
              <p className="text-xs text-slate-500">
                {isGvbm
                  ? 'Phân công GV Bộ Môn'
                  : isTimetableMode
                  ? `Thời khóa biểu Khối ${grade} (Tuần ${startWeek} - ${endWeek})`
                  : `Môn ${currentSubjectObj?.name || ''} - Khối ${grade}`}
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={handleExportPlanSummaryWord}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs shadow-xs transition-all"
                title="Tải về file Word bảng kế hoạch duyệt tích hợp để trình ký Ban Giám Hiệu"
              >
                <Download className="w-4 h-4 text-pink-600" />
                <span>Xuất Bảng Kế Hoạch (.docx)</span>
              </button>

              <button
                type="button"
                onClick={handleApplyAndProceedToStep3}
                disabled={isAnalyzing}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs shadow-md transition-all active:scale-[0.98]"
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Đang chèn vào giáo án...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>XÁC NHẬN & XEM TRƯỚC GIÁO ÁN (BƯỚC 3)</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* BẢNG MA TRẬN DUYỆT TÍCH HỢP (INLINE EDITABLE) */}
          <div
            id="step2ReviewTableContainer"
            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3 overflow-x-auto"
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="font-extrabold text-xs uppercase text-slate-800 flex items-center gap-1.5">
                <TableProperties className="w-4 h-4 text-pink-600" />
                <span>Ma Trận Kế Hoạch Tích Hợp Các Bài Dạy</span>
              </span>
              <span className="text-[11px] text-slate-500 italic">
                * Có thể click vào từng ô để chỉnh sửa trực tiếp nội dung trước khi xuất
              </span>
            </div>

            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-300">
                  <th className="p-2.5 border border-slate-300 text-center w-12">STT</th>
                  <th className="p-2.5 border border-slate-300 text-center w-16">Tuần/Tiết</th>
                  <th className="p-2.5 border border-slate-300 w-52">Tên Bài Dạy & Cốt Lõi</th>
                  <th className="p-2.5 border border-slate-300 w-36">Chuyên Đề & Mức Độ</th>
                  <th className="p-2.5 border border-slate-300 w-36">Địa Chỉ Tích Hợp</th>
                  <th className="p-2.5 border border-slate-300">Mục Tiêu YCCĐ Tích Hợp & Phân Hóa</th>
                  <th className="p-2.5 border border-slate-300 w-64">Hoạt Động Dạy Học (GV - HS)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {(analyzedPlan.suggestions || []).map((sug, idx) => {
                  return (
                    <tr key={sug.lessonId || idx} className="hover:bg-slate-50/70">
                      <td className="p-2 border border-slate-300 text-center font-bold text-slate-500 bg-slate-50/50">
                        {idx + 1}
                      </td>
                      <td className="p-2 border border-slate-300 text-center font-bold text-slate-700">
                        Tuần {sug.week}
                        <div className="text-[10px] text-slate-400 font-normal">{sug.period || `Tiết ${idx + 1}`}</div>
                      </td>
                      <td className="p-2 border border-slate-300">
                        <div className="font-bold text-slate-900">{sug.title}</div>
                        {sug.classes && (
                          <div className="text-[10px] text-sky-700 font-semibold">Lớp: {sug.classes}</div>
                        )}
                        {sug.subjectName && (
                          <div className="text-[10px] text-pink-700 font-semibold">{sug.subjectName}</div>
                        )}
                      </td>
                      <td className="p-2 border border-slate-300">
                        <span className="font-bold text-pink-700">{sug.integrationTopic || 'Chuyên đề'}</span>
                        <div className="mt-1">
                          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
                            {sug.integrationLevel || 'Liên hệ'}
                          </span>
                        </div>
                      </td>
                      <td className="p-2 border border-slate-300">
                        <span className="text-[11px] font-semibold text-slate-700">
                          {sug.targetPart || 'Hoạt động Vận dụng'}
                        </span>
                      </td>
                      <td className="p-2 border border-slate-300 space-y-1">
                        <textarea
                          value={sug.yccdAddition || ''}
                          onChange={(e) => {
                            const val = e.target.value;
                            setAnalyzedPlan({
                              ...analyzedPlan,
                              suggestions: analyzedPlan.suggestions.map((item, i) =>
                                i === idx ? { ...item, yccdAddition: val } : item
                              )
                            });
                          }}
                          rows={3}
                          className="w-full p-1.5 rounded border border-slate-200 text-[11px] bg-white text-slate-800 outline-none focus:border-pink-500 leading-relaxed"
                        />
                      </td>
                      <td className="p-2 border border-slate-300 space-y-1">
                        <div>
                          <span className="text-[10px] font-bold text-slate-500 uppercase">GV:</span>
                          <textarea
                            value={sug.teacherActivity || ''}
                            onChange={(e) => {
                              const val = e.target.value;
                              setAnalyzedPlan({
                                ...analyzedPlan,
                                suggestions: analyzedPlan.suggestions.map((item, i) =>
                                  i === idx ? { ...item, teacherActivity: val } : item
                                )
                              });
                            }}
                            rows={2}
                            className="w-full mt-0.5 p-1 rounded border border-slate-200 text-[11px] bg-white text-slate-800 outline-none focus:border-pink-500 leading-relaxed"
                          />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-slate-500 uppercase">HS:</span>
                          <textarea
                            value={sug.studentActivity || ''}
                            onChange={(e) => {
                              const val = e.target.value;
                              setAnalyzedPlan({
                                ...analyzedPlan,
                                suggestions: analyzedPlan.suggestions.map((item, i) =>
                                  i === idx ? { ...item, studentActivity: val } : item
                                )
                              });
                            }}
                            rows={2}
                            className="w-full mt-0.5 p-1 rounded border border-slate-200 text-[11px] bg-white text-slate-800 outline-none focus:border-pink-500 leading-relaxed"
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* HỘP GÓP Ý & YÊU CẦU AI ĐIỀU CHỈNH (FEEDBACK LOOP) */}
          <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 rounded-2xl border border-purple-200 p-5 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-purple-900 font-extrabold text-sm">
              <MessageSquare className="w-5 h-5 text-purple-600" />
              <span>Góp ý & Yêu cầu AI điều chỉnh kế hoạch tích hợp:</span>
            </div>
            <p className="text-xs text-slate-600">
              Nhập ý kiến muốn AI bổ sung hoặc tinh chỉnh (VD: <em>"Tăng cường trò chơi khởi động Quizizz", "Lồng ghép thêm di tích lịch sử Vĩnh Long", "Đơn giản hóa hoạt động cho học sinh khuyết tật"</em>). AI sẽ cập nhật ngay ma trận!
            </p>

            {/* Nút gợi ý góp ý nhanh */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[11px] font-semibold text-slate-500">Gợi ý nhanh:</span>
              {[
                '+ Thêm trò chơi Quizizz',
                '+ Lồng ghép di tích Vĩnh Long',
                '+ Giảm tải cho HS khuyết tật',
                '+ Tăng thực hành nhóm đôi',
                '+ Thêm bài học STEM thực tế'
              ].map((hint, hIdx) => (
                <button
                  key={hIdx}
                  type="button"
                  onClick={() => setStep2Feedback((prev) => (prev ? `${prev}; ${hint}` : hint))}
                  className="px-2.5 py-1 rounded-full bg-white border border-purple-200 text-[11px] font-bold text-purple-800 hover:bg-purple-100 shadow-2xs"
                >
                  {hint}
                </button>
              ))}
            </div>

            <div className="flex items-start gap-2">
              <textarea
                value={step2Feedback}
                onChange={(e) => setStep2Feedback(e.target.value)}
                rows={2}
                placeholder="Nhập yêu cầu sửa đổi cho AI tại đây..."
                className="flex-1 p-2.5 rounded-xl border border-purple-300 bg-white text-xs outline-none focus:border-purple-600"
              />
              <button
                type="button"
                onClick={handleSendFeedbackToAi}
                disabled={isSendingFeedback}
                className="py-3 px-5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs shadow-md flex items-center gap-1.5 shrink-0 transition-all"
              >
                {isSendingFeedback ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Đang cập nhật...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>GỬI GÓP Ý CHO AI</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* NÚT ĐIỀU HƯỚNG CUỐI BƯỚC 2 */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={() => setActiveStep(1)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại Bước 1 (Chọn chuyên đề khác)</span>
            </button>

            <button
              type="button"
              onClick={handleApplyAndProceedToStep3}
              disabled={isAnalyzing}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-sm shadow-md transition-all active:scale-[0.98]"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>XÁC NHẬN KẾ HOẠCH NÀY & CHUYỂN SANG BƯỚC 3 (XUẤT WORD)</span>
            </button>
          </div>
        </div>
      )}

      {/* -------------------- BƯỚC 3: XEM TRƯỚC 100% GIÁO ÁN & XUẤT WORD -------------------- */}
      {activeStep === 3 && previewWeeks && (
        <div className="space-y-5 animate-fade-in">
          {/* Thanh công cụ Bước 3 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> BƯỚC 3/3: GIÁO ÁN ĐÃ TÍCH HỢP HOÀN TẤT
                </span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Chuẩn 100% CV 2345/BGDĐT-GDTH
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mt-0.5">
                Kế hoạch bài dạy {isGvbm ? 'Phân công GV Bộ Môn' : (isTimetableMode ? `Thời Khóa Biểu Khối ${grade}` : `Môn ${currentSubjectObj?.name || ''}`)}
              </h3>
              <p className="text-xs text-slate-500">
                Tuần {startWeek} → Tuần {endWeek} • Trường: {isGvbm ? gvbmSchoolName : schoolName} • GV: {isGvbm ? gvbmTeacherName : teacherName}
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => setActiveStep(2)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs"
              >
                <Undo2 className="w-4 h-4 text-slate-500" />
                <span>Sửa Kế Hoạch (Bước 2)</span>
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs"
              >
                <Printer className="w-4 h-4 text-slate-600" />
                <span>In Giáo Án</span>
              </button>

              <button
                type="button"
                onClick={handleExportFinalWord}
                disabled={isExporting}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-xs shadow-md transition-all active:scale-[0.98]"
              >
                {isExporting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Đang xuất Word...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>XUẤT FILE WORD (.DOCX) CHUẨN CV 2345</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* VÙNG XEM TRƯỚC TOÀN VĂN GIÁO ÁN */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            {/* Tabs chọn tuần */}
            <div className="flex items-center gap-1.5 border-b border-slate-200 pb-2 overflow-x-auto">
              {previewWeeks.map((w, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActivePreviewTab(idx)}
                  className={`px-3.5 py-1.5 rounded-lg font-bold text-xs transition-all shrink-0 ${
                    activePreviewTab === idx
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Tuần {w.week || idx + startWeek}
                </button>
              ))}
            </div>

            {/* Chi tiết nội dung các bài dạy trong tuần đang xem */}
            {(() => {
              const curWeekObj = previewWeeks[activePreviewTab] || previewWeeks[0];
              const lessonsList = curWeekObj?.lessons || [];

              return (
                <div className="space-y-6">
                  {/* Bìa tuần hoặc TKB tuần nếu có */}
                  <div className="text-center p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <div className="text-xs uppercase font-extrabold text-slate-500">
                      {isGvbm ? gvbmSchoolName : schoolName} • NĂM HỌC {isGvbm ? gvbmSchoolYear : schoolYear}
                    </div>
                    <h3 className="text-base font-black text-slate-900 uppercase">
                      KẾ HOẠCH BÀI DẠY TUẦN {curWeekObj.week || activePreviewTab + startWeek}
                    </h3>
                    <div className="text-xs font-bold text-emerald-700">
                      Giáo viên: {isGvbm ? gvbmTeacherName : teacherName} • {isGvbm ? gvbmDepartment : className}
                    </div>
                  </div>

                  {/* Danh sách từng bài dạy theo cấu trúc chuẩn CV 2345 */}
                  {lessonsList.map((les, lIdx) => {
                    return (
                      <div
                        key={lIdx}
                        className="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4 print:border-none print:shadow-none"
                      >
                        {/* Tiêu đề bài dạy */}
                        <div className="border-b border-slate-200 pb-3 text-center space-y-1">
                          <div className="font-black text-sm uppercase text-slate-900">
                            {les.lessonTitle || les.title || `BÀI DẠY TIẾT ${lIdx + 1}`}
                          </div>
                          <div className="text-xs font-bold text-pink-700">
                            {les.subjectName || les.subjectKey || 'Môn học'} • {les.period || `Tiết ${lIdx + 1}`}
                            {les.dayName ? ` (${les.dayName} - ${les.session || 'Sáng'})` : ''}
                          </div>
                          {les.topic && (
                            <div className="text-[11px] text-slate-500 italic">Chủ đề: {les.topic}</div>
                          )}
                        </div>

                        {/* I. YÊU CẦU CẦN ĐẠT */}
                        <div className="space-y-2">
                          <div className="font-extrabold text-xs text-pink-800 uppercase flex items-center gap-1.5">
                            <Award className="w-4 h-4 text-pink-600" />
                            <span>I. YÊU CẦU CẦN ĐẠT:</span>
                          </div>
                          <div className="pl-4 space-y-1.5 text-xs text-slate-700">
                            {(les.yccd || [
                              '1. Năng lực đặc thù: Nắm vững kiến thức trọng tâm bài học, rèn luyện kỹ năng giải quyết vấn đề.',
                              '2. Năng lực chung: Tự chủ, tự học; giao tiếp và hợp tác nhóm; giải quyết vấn đề sáng tạo.',
                              '3. Phẩm chất: Chăm chỉ, trung thực, trách nhiệm.'
                            ]).map((yc, yIdx) => {
                              const isIntegrated = yc.includes('[Tích hợp]');
                              const isDisability = yc.toLowerCase().includes('khuyết tật') || yc.toLowerCase().includes('hòa nhập');
                              return (
                                <div
                                  key={yIdx}
                                  className={`p-1.5 rounded ${
                                    isDisability
                                      ? 'bg-purple-50 text-purple-950 border border-purple-200 font-medium'
                                      : isIntegrated
                                      ? 'bg-emerald-50 text-emerald-950 border border-emerald-200 font-medium'
                                      : ''
                                  }`}
                                >
                                  {yc}
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* II. ĐỒ DÙNG DẠY HỌC */}
                        <div className="space-y-1.5">
                          <div className="font-extrabold text-xs text-pink-800 uppercase flex items-center gap-1.5">
                            <BookOpen className="w-4 h-4 text-pink-600" />
                            <span>II. ĐỒ DÙNG DẠY HỌC:</span>
                          </div>
                          <div className="pl-4 space-y-1 text-xs text-slate-700">
                            {(les.dodung || [
                              '• Giáo viên: Kế hoạch bài dạy, bài giảng trình chiếu, tài liệu/phiếu học tập, tranh ảnh minh họa.',
                              '• Học sinh: SGK, vở bài tập, bảng con, đồ dùng học tập.'
                            ]).map((dd, dIdx) => (
                              <div key={dIdx}>{dd}</div>
                            ))}
                          </div>
                        </div>

                        {/* III. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU (BẢNG 2 CỘT GV / HS) */}
                        <div className="space-y-2">
                          <div className="font-extrabold text-xs text-pink-800 uppercase flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-pink-600" />
                            <span>III. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU:</span>
                          </div>

                          <div className="overflow-x-auto rounded-lg border border-slate-300">
                            <table className="w-full text-xs text-left border-collapse">
                              <thead>
                                <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-300">
                                  <th className="p-2 border-r border-slate-300 w-1/2 text-center">
                                    Hoạt động của Giáo viên
                                  </th>
                                  <th className="p-2 text-center">Hoạt động của Học sinh</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-200">
                                {(les.activitiesTable || [
                                  {
                                    phase: '1. Khởi động (5 phút)',
                                    gv: 'GV tổ chức trò chơi hoặc bài hát vui nhộn tạo tâm thế hào hứng cho học sinh; kết nối vào bài mới.',
                                    hs: 'HS tham gia trò chơi nhiệt tình, phát biểu câu trả lời và chuẩn bị vào bài học.'
                                  },
                                  {
                                    phase: '2. Khám phá kiến thức mới (12-15 phút)',
                                    gv: 'GV hướng dẫn HS quan sát tranh ảnh/vật thật trong SGK; đặt câu hỏi gợi mở để học sinh thảo luận nhóm hình thành kiến thức cốt lõi.',
                                    hs: 'HS trao đổi nhóm đôi, quan sát và trình bày kết quả khám phá trước lớp.'
                                  },
                                  {
                                    phase: '3. Luyện tập, thực hành (12-15 phút)',
                                    gv: 'GV giao nhiệm vụ làm bài tập phân hóa theo mức độ; quan sát, động viên và trợ giúp học sinh còn lúng túng.',
                                    hs: 'HS làm việc cá nhân vào vở, sau đó đổi chéo bài kiểm tra kết quả cho nhau.'
                                  },
                                  {
                                    phase: '4. Vận dụng, trải nghiệm (3-5 phút)',
                                    gv: 'GV liên hệ nội dung bài học vào thực tế đời sống; dặn dò chuẩn bị bài sau.',
                                    hs: 'HS nêu những việc làm cụ thể liên hệ thực tiễn và lắng nghe dặn dò.'
                                  }
                                ]).map((actRow, aIdx) => (
                                  <tr key={aIdx} className="hover:bg-slate-50/50">
                                    <td className="p-2.5 border-r border-slate-300 align-top space-y-1">
                                      <strong className="text-slate-900 block">{actRow.phase || `Hoạt động ${aIdx + 1}`}</strong>
                                      <p className="text-slate-700 leading-relaxed">{actRow.gv || actRow.teacher || actRow.desc || ''}</p>
                                    </td>
                                    <td className="p-2.5 align-top">
                                      <p className="text-slate-700 leading-relaxed pt-4 sm:pt-5">{actRow.hs || actRow.student || ''}</p>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* IV. ĐIỀU CHỈNH SAU BÀI DẠY */}
                        <div className="space-y-1 pt-1">
                          <div className="font-extrabold text-xs text-pink-800 uppercase">
                            IV. ĐIỀU CHỈNH SAU BÀI DẠY:
                          </div>
                          <div className="p-2 rounded bg-slate-50 border border-dashed border-slate-300 text-slate-400 italic text-[11px]">
                            {les.dieuchinh?.[0] || 'Linh hoạt điều chỉnh phương pháp và thời lượng phù hợp với đối tượng học sinh của lớp.'}
                          </div>
                        </div>

                        {/* KHUNG DUYỆT GIÁO ÁN */}
                        {includeApproval && (
                          <div className="pt-4 mt-2 border-t border-slate-200">
                            <div className="grid grid-cols-2 text-center text-xs text-slate-800 font-bold">
                              <div>
                                <div>TỔ TRƯỞNG CHUYÊN MÔN</div>
                                <div className="text-[10px] text-slate-400 font-normal italic">(Ký và ghi rõ họ tên)</div>
                                <div className="h-14"></div>
                              </div>
                              <div>
                                <div>HIỆU TRƯỞNG / PHÓ HIỆU TRƯỞNG</div>
                                <div className="text-[10px] text-slate-400 font-normal italic">(Ký, đóng dấu)</div>
                                <div className="h-14"></div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL TÙY CHỈNH THỜI KHÓA BIỂU */}
      {/* ========================================================================= */}
      {isTkbModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-4xl w-full p-6 shadow-2xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <TableProperties className="w-5 h-5 text-pink-600" />
                <h3 className="font-black text-base text-slate-900 uppercase">
                  TÙY CHỈNH THỜI KHÓA BIỂU KHỐI {grade}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsTkbModalOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-500">
              Tùy chỉnh các môn học cho từng buổi Sáng và Chiều từ Thứ Hai đến Thứ Sáu. Hệ thống sẽ căn cứ vào đây để sắp xếp toàn bộ bài dạy trong tuần.
            </p>

            {/* Bảng TKB */}
            <div className="overflow-x-auto rounded-xl border border-slate-300">
              <table className="w-full text-xs text-center border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-300">
                    <th className="p-2 border-r border-slate-300 w-20">Tiết</th>
                    <th className="p-2 border-r border-slate-300">Thứ Hai</th>
                    <th className="p-2 border-r border-slate-300">Thứ Ba</th>
                    <th className="p-2 border-r border-slate-300">Thứ Tư</th>
                    <th className="p-2 border-r border-slate-300">Thứ Năm</th>
                    <th className="p-2">Thứ Sáu</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-pink-50 font-bold text-pink-950 text-left">
                    <td colSpan={6} className="p-1.5 px-3 border-b border-slate-300">
                      BUỔI SÁNG (4 Tiết)
                    </td>
                  </tr>
                  {[0, 1, 2, 3].map((slotIdx) => (
                    <tr key={`m_${slotIdx}`} className="border-b border-slate-200 hover:bg-slate-50/50">
                      <td className="p-1.5 font-bold bg-slate-50 border-r border-slate-300">
                        Tiết {slotIdx + 1}
                      </td>
                      {[0, 1, 2, 3, 4].map((dayIdx) => {
                        const curSubj = tempTimetable?.[dayIdx]?.morning?.[slotIdx] || '';
                        return (
                          <td key={dayIdx} className="p-1 border-r border-slate-300">
                            <select
                              value={curSubj}
                              onChange={(e) => {
                                const newTkb = JSON.parse(JSON.stringify(tempTimetable));
                                if (!newTkb[dayIdx]) newTkb[dayIdx] = { morning: [], afternoon: [] };
                                if (!newTkb[dayIdx].morning) newTkb[dayIdx].morning = [];
                                newTkb[dayIdx].morning[slotIdx] = e.target.value;
                                setTempTimetable(newTkb);
                              }}
                              className="w-full p-1 rounded border border-slate-200 text-xs font-semibold bg-white"
                            >
                              <option value="">— (Trống / GV chuyên) —</option>
                              {ALL_SUBJECTS.map((s) => (
                                <option key={s.key} value={s.key}>
                                  {s.name}
                                </option>
                              ))}
                            </select>
                          </td>
                        );
                      })}
                    </tr>
                  ))}

                  <tr className="bg-blue-50 font-bold text-blue-950 text-left">
                    <td colSpan={6} className="p-1.5 px-3 border-b border-slate-300 border-t border-slate-300">
                      BUỔI CHIỀU (3 Tiết)
                    </td>
                  </tr>
                  {[0, 1, 2].map((slotIdx) => (
                    <tr key={`a_${slotIdx}`} className="border-b border-slate-200 hover:bg-slate-50/50">
                      <td className="p-1.5 font-bold bg-slate-50 border-r border-slate-300">
                        Tiết {slotIdx + 1}
                      </td>
                      {[0, 1, 2, 3, 4].map((dayIdx) => {
                        const curSubj = tempTimetable?.[dayIdx]?.afternoon?.[slotIdx] || '';
                        return (
                          <td key={dayIdx} className="p-1 border-r border-slate-300">
                            <select
                              value={curSubj}
                              onChange={(e) => {
                                const newTkb = JSON.parse(JSON.stringify(tempTimetable));
                                if (!newTkb[dayIdx]) newTkb[dayIdx] = { morning: [], afternoon: [] };
                                if (!newTkb[dayIdx].afternoon) newTkb[dayIdx].afternoon = [];
                                newTkb[dayIdx].afternoon[slotIdx] = e.target.value;
                                setTempTimetable(newTkb);
                              }}
                              className="w-full p-1 rounded border border-slate-200 text-xs font-semibold bg-white"
                            >
                              <option value="">— (Trống / GV chuyên) —</option>
                              {ALL_SUBJECTS.map((s) => (
                                <option key={s.key} value={s.key}>
                                  {s.name}
                                </option>
                              ))}
                            </select>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-200">
              <button
                type="button"
                onClick={handleResetTkb}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-red-600 hover:bg-red-50 text-xs font-bold transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Khôi phục TKB chuẩn Bộ GD&ĐT</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsTkbModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-100 transition-all"
                >
                  Hủy bỏ
                </button>
                <button
                  type="button"
                  onClick={handleSaveTkbFromModal}
                  className="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-xs font-bold shadow-sm transition-all"
                >
                  Lưu Thời Khóa Biểu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
