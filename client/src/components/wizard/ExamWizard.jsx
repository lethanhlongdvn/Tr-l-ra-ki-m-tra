import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  RefreshCw,
  Plus,
  Trash2,
  MapPin,
  FileSpreadsheet,
  Sliders,
  Check,
  Edit3,
  TrendingUp,
  TrendingDown,
  Info,
  BookOpen,
  PenTool
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { fetchJson } from '../../utils/api';
import OldExamCloner from './OldExamCloner';

// Danh sách môn học theo từng khối lớp (Chuẩn TT 27)
export function getAvailableSubjects(grade) {
  const g = Number(grade) || 4;
  if (g === 1 || g === 2) {
    return [
      { value: 'Toán', label: 'Toán' },
      { value: 'Tiếng Việt', label: 'Tiếng Việt' }
    ];
  }
  if (g === 3) {
    return [
      { value: 'Toán', label: 'Toán' },
      { value: 'Tiếng Việt', label: 'Tiếng Việt' },
      { value: 'Tiếng Anh', label: 'Tiếng Anh' },
      { value: 'Tin học', label: 'Tin học' },
      { value: 'Công nghệ', label: 'Công nghệ' }
    ];
  }
  // Lớp 4 & 5
  return [
    { value: 'Toán', label: 'Toán' },
    { value: 'Tiếng Việt', label: 'Tiếng Việt' },
    { value: 'Tiếng Anh', label: 'Tiếng Anh' },
    { value: 'Tin học', label: 'Tin học' },
    { value: 'Công nghệ', label: 'Công nghệ' },
    { value: 'Khoa học', label: 'Khoa học' },
    { value: 'Lịch sử và Địa lí', label: 'Lịch sử và Địa lí' }
  ];
}

// Danh sách kỳ kiểm tra theo từng khối lớp và môn học (Chuẩn TT 27)
export function getAvailableSemesters(grade, subject) {
  const g = Number(grade) || 4;
  const isMathOrTV = (subject || '').toLowerCase().includes('toán') || (subject || '').toLowerCase().includes('tiếng việt');

  // Lớp 4 và 5 đối với Toán và Tiếng Việt: đủ 4 kỳ
  if ((g === 4 || g === 5) && isMathOrTV) {
    return [
      { value: 'Giữa học kỳ I', label: 'Giữa học kỳ I (Tuần 1 – 9)' },
      { value: 'Cuối học kỳ I', label: 'Cuối học kỳ I (Tuần 10 – 18)' },
      { value: 'Giữa học kỳ II', label: 'Giữa học kỳ II (Tuần 19 – 27)' },
      { value: 'Cuối học kỳ II', label: 'Cuối học kỳ II (Tuần 28 – 35)' }
    ];
  }

  // Lớp 1, 2 (Toán, Tiếng Việt); Lớp 3 (Toán, Tiếng Việt, Tiếng Anh, Tin học, Công nghệ);
  // Lớp 4, 5 (Tiếng Anh, Tin học, Công nghệ, Khoa học, Lịch sử và Địa lí):
  return [
    { value: 'Cuối học kỳ I', label: 'Cuối học kỳ I (Tuần 1 – 18)' },
    { value: 'Cuối học kỳ II', label: 'Cuối học kỳ II (Tuần 19 – 35)' }
  ];
}

export default function ExamWizard({ onExamReady, initialMode = 'TT27_SEA_PLM' }) {
  const [wizardMode, setWizardMode] = useState('matrix'); // 'matrix' | 'clone_old'
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  // STEP 1: Thông tin đề
  const [examInfo, setExamInfo] = useState({
    governingBody: 'UBND XÃ AN TRƯỜNG',
    schoolName: 'Trường Tiểu học A An Trường',
    grade: 4,
    subject: 'Toán',
    bookSeries: 'CTST', // 'CTST' | 'KNTT' | 'CD' | 'SEAPLM'
    semester: 'Cuối học kỳ I',
    durationMinutes: 40,
    totalPoints: 10,
    mode: initialMode,
    examSetIndex: 1,
  });

  const handleGradeChange = (newGrade) => {
    const g = Number(newGrade);
    const validSubjects = getAvailableSubjects(g);
    let newSubject = examInfo.subject;
    if (!validSubjects.some(s => s.value === newSubject)) {
      newSubject = validSubjects[0].value;
    }
    const validSemesters = getAvailableSemesters(g, newSubject);
    let newSemester = examInfo.semester;
    if (!validSemesters.some(s => s.value === newSemester)) {
      newSemester = validSemesters[0].value;
    }
    setExamInfo(prev => ({
      ...prev,
      grade: g,
      subject: newSubject,
      semester: newSemester
    }));
  };

  const handleSubjectChange = (newSubject) => {
    const validSemesters = getAvailableSemesters(examInfo.grade, newSubject);
    let newSemester = examInfo.semester;
    if (!validSemesters.some(s => s.value === newSemester)) {
      newSemester = validSemesters[0].value;
    }
    setExamInfo(prev => ({
      ...prev,
      subject: newSubject,
      semester: newSemester
    }));
  };

  // Cấu hình đặc thù môn Tiếng Việt (Chuẩn 2 phiếu: Đọc & Viết)
  const [tiengVietConfig, setTiengVietConfig] = useState({
    oralScore: 4, // 4.0đ hoặc 3.0đ
    oralMode: 'sgk', // 'sgk' | 'ctst' | 'custom'
    readingCorpusType: 'literary', // 'literary' | 'informational_vinhlong' | 'non_continuous_seaplm' | 'custom'
    selectedCompId: 'auto',
    customPassage: {
      title: '',
      author: '',
      passage: ''
    },
    writingRatio: '4-6', // '4-6', '3-7', '5-5'
    essayGenre: 'Văn miêu tả cây cối'
  });
  const [allReadingPassages, setAllReadingPassages] = useState([]);

  // Cấu hình đặc thù môn Tiếng Anh (Chuẩn 4 kỹ năng: Listening, Reading, Writing, Speaking)
  const [englishConfig, setEnglishConfig] = useState({
    preset: 'standard',
    ratios: examInfo.grade === 3 
      ? { listening: 4.0, reading: 2.0, writing: 2.0, speaking: 2.0 }
      : { listening: 3.0, reading: 2.5, writing: 2.5, speaking: 2.0 }
  });

  // STEP 2: Nội dung & YCCĐ
  const [availableTopics, setAvailableTopics] = useState([]);
  const [selectedTopicIds, setSelectedTopicIds] = useState([]);
  const [scopeMetadata, setScopeMetadata] = useState(null);
  const [customOutcome, setCustomOutcome] = useState('');
  const [outcomeAnalysis, setOutcomeAnalysis] = useState(null);
  const [isAnalyzingOutcome, setIsAnalyzingOutcome] = useState(false);

  // STEP 3: Ma trận & Tỷ lệ 3 Mức độ nhận thức (Tự do nhập %)
  const [matrixPreset, setMatrixPreset] = useState('standard_tt27_65_20_15');
  const [cognitivePcts, setCognitivePcts] = useState({ m1: 65, m2: 20, m3: 15 });
  const [matrixData, setMatrixData] = useState(null);

  // STEP 4: Dạng câu hỏi
  const [questionTypes, setQuestionTypes] = useState({
    multiple_choice: true,
    true_false: true,
    fill_in_the_blank: true,
    matching: true,
    constructed_response: true
  });
  const [selectedEssayCount, setSelectedEssayCount] = useState(3);

  // STEP 5: Bối cảnh SEA-PLM
  const [seaPlmQuestionCount, setSeaPlmQuestionCount] = useState(2);
  const [seaPlmSettings, setSeaPlmSettings] = useState({
    enableSeaPlm: true,
    contextPersonal: true,
    contextSchool: true,
    contextVinhLong: true,
    vinhLongRegion: 'all'
  });

  // STEP 6: Kết quả sinh đề & Kiểm định
  const [generatedExam, setGeneratedExam] = useState(null);
  const [activeExplainModal, setActiveExplainModal] = useState(null);

  // Helper sinh danh mục bài học dự phòng khi không thể kết nối API máy chủ
  const generateClientScopeFallback = (grade, subject, semester) => {
    const isSem2 = (semester || '').includes('II') || (semester || '').includes('2') || (semester || '').includes('năm');
    const volName = isSem2 ? 'Sách Tập 2' : 'Sách Tập 1';
    const sub = subject || 'Toán';
    const g = grade || 4;

    let topics = [];
    if ((sub || '').toLowerCase().includes('toán')) {
      topics = [
        {
          topicId: `top_math_${g}_1`,
          topicName: `Chủ đề 1: Số & Các phép tính Lớp ${g} (${volName})`,
          lessons: [
            { lessonNumber: 1, title: `Bài 1: Ôn tập và bổ sung về số tự nhiên, số thập phân`, periods: 2, week: isSem2 ? 19 : 1 },
            { lessonNumber: 2, title: `Bài 2: Các phép tính cộng, trừ, nhân, chia cơ bản`, periods: 3, week: isSem2 ? 20 : 2 },
            { lessonNumber: 3, title: `Bài 3: Tính giá trị của biểu thức & Tính bằng cách thuận tiện`, periods: 2, week: isSem2 ? 22 : 4 }
          ]
        },
        {
          topicId: `top_math_${g}_2`,
          topicName: `Chủ đề 2: Hình học & Đo lường Lớp ${g}`,
          lessons: [
            { lessonNumber: 4, title: `Bài 4: Đơn vị đo khối lượng, diện tích và thời gian`, periods: 2, week: isSem2 ? 24 : 6 },
            { lessonNumber: 5, title: `Bài 5: Hình phẳng, chu vi và diện tích các hình`, periods: 3, week: isSem2 ? 26 : 8 }
          ]
        },
        {
          topicId: `top_math_${g}_3`,
          topicName: `Chủ đề 3: Giải bài toán có lời văn & Tích hợp thực tế Vĩnh Long`,
          lessons: [
            { lessonNumber: 6, title: `Bài 6: Giải bài toán tỉ lệ và ứng dụng nông sản địa phương`, periods: 2, week: isSem2 ? 28 : 10 },
            { lessonNumber: 7, title: `Bài 7: Ôn tập tổng hợp chuẩn Thông tư 27`, periods: 3, week: isSem2 ? 35 : 18 }
          ]
        }
      ];
    } else if ((sub || '').toLowerCase().includes('tiếng việt')) {
      const series = examInfo.bookSeries || 'CTST';
      if (series === 'CTST') {
        // DANH MỤC BÀI HỌC / CHỦ ĐIỂM CHÂN TRỜI SÁNG TẠO (TRÍCH TỪ TÀI LIỆU RA ĐỀ ĐỌC HIỂU & ĐỌC THÀNH TIẾNG)
        if (g === 1) {
          topics = [
            {
              topicId: `top_tv_ctst_1_1`,
              topicName: `Chủ điểm 1: Em và nhà trường (Chân Trời Sáng Tạo - Lớp 1)`,
              lessons: [
                { lessonNumber: 1, title: `Bài 1: Đi học (Đọc thành tiếng & Trả lời câu hỏi)`, periods: 2, week: isSem2 ? 19 : 1 },
                { lessonNumber: 2, title: `Bài 2: Ngôi nhà của bé (Đọc thành tiếng & Tìm chi tiết)`, periods: 2, week: isSem2 ? 20 : 2 },
                { lessonNumber: 3, title: `Bài 3: Bàn tay mẹ (Đọc hiểu & Luyện chữ)`, periods: 2, week: isSem2 ? 22 : 4 }
              ]
            },
            {
              topicId: `top_tv_ctst_1_2`,
              topicName: `Chủ điểm 2: Gia đình & Thiên nhiên tươi đẹp (CTST)`,
              lessons: [
                { lessonNumber: 4, title: `Bài 4: Đầm sen quê em (Đọc thành tiếng & Cảm xúc)`, periods: 2, week: isSem2 ? 24 : 6 },
                { lessonNumber: 5, title: `Bài 5: Suối nhỏ dòng sông (Đọc hiểu & Từ ngữ)`, periods: 2, week: isSem2 ? 26 : 8 },
                { lessonNumber: 6, title: `Bài 6: Cầu vồng sau mưa & Chợ hoa ngày Tết`, periods: 2, week: isSem2 ? 28 : 10 }
              ]
            }
          ];
        } else if (g === 2) {
          topics = [
            {
              topicId: `top_tv_ctst_2_1`,
              topicName: `Chủ điểm 1: Em đã lớn hơn & Thời gian biểu (Chân Trời Sáng Tạo - Lớp 2)`,
              lessons: [
                { lessonNumber: 1, title: `Bài 1: Bé Mai đã lớn (Đọc thành tiếng & Tìm ý chính)`, periods: 2, week: isSem2 ? 19 : 1 },
                { lessonNumber: 2, title: `Bài 2: Thời gian biểu (Lập kế hoạch & Luyện từ)`, periods: 2, week: isSem2 ? 20 : 2 },
                { lessonNumber: 3, title: `Bài 3: Ngày hôm qua đâu rồi? (Đọc hiểu thơ Biểu cảm)`, periods: 2, week: isSem2 ? 22 : 4 }
              ]
            },
            {
              topicId: `top_tv_ctst_2_2`,
              topicName: `Chủ điểm 2: Bạn bè & Mái trường mến yêu (CTST)`,
              lessons: [
                { lessonNumber: 4, title: `Bài 4: Út Tin (Tả đặc điểm nét mặt đáng yêu)`, periods: 2, week: isSem2 ? 24 : 6 },
                { lessonNumber: 5, title: `Bài 5: Tóc ngắn và tóc dài (Kể chuyện & Viết đoạn văn 5 dòng)`, periods: 2, week: isSem2 ? 26 : 8 },
                { lessonNumber: 6, title: `Bài 6: Chú heo đất tiết kiệm (Đọc hiểu & Viết đoạn văn ngắn 5 dòng)`, periods: 2, week: isSem2 ? 28 : 10 }
              ]
            }
          ];
        } else if (g === 3) {
          topics = [
            {
              topicId: `top_tv_ctst_3_1`,
              topicName: `Chủ điểm 1: Mùa thu khai trường & Khởi đầu mới (Chân Trời Sáng Tạo - Lớp 3)`,
              lessons: [
                { lessonNumber: 1, title: `Bài 1: Chiếc nhãn vở đặc biệt (Đọc thành tiếng & Câu hỏi ý nghĩa)`, periods: 2, week: isSem2 ? 19 : 1 },
                { lessonNumber: 2, title: `Bài 2: Lắng nghe những điều kì diệu (Cảm thụ âm thanh cuộc sống)`, periods: 2, week: isSem2 ? 20 : 2 },
                { lessonNumber: 3, title: `Bài 3: Mùa thu của em & Bông hoa cúc áo`, periods: 2, week: isSem2 ? 22 : 4 }
              ]
            },
            {
              topicId: `top_tv_ctst_3_2`,
              topicName: `Chủ điểm 2: Hương sắc quê hương (CTST Lớp 3 - Viết đoạn văn 10 dòng)`,
              lessons: [
                { lessonNumber: 4, title: `Bài 4: Gió sông Hương (Đọc hiểu văn bản nghệ thuật)`, periods: 2, week: isSem2 ? 24 : 6 },
                { lessonNumber: 5, title: `Bài 5: Hương chanh quê nhà (Luyện từ và câu & Viết đoạn văn 10 dòng)`, periods: 2, week: isSem2 ? 26 : 8 }
              ]
            }
          ];
        } else if (g === 4) {
          topics = [
            {
              topicId: `top_tv_ctst_4_1`,
              topicName: `Chủ điểm 1: Tuổi nhỏ chí lớn & Ước mơ vươn xa (Chân Trời Sáng Tạo - Lớp 4)`,
              lessons: [
                { lessonNumber: 1, title: `Bài 1: Tuổi Ngựa (Đọc thành tiếng & Trả lời câu hỏi thấu hiểu)`, periods: 2, week: isSem2 ? 19 : 1 },
                { lessonNumber: 2, title: `Bài 2: Trải nghiệm để lớn khôn (Kĩ năng học tập trải nghiệm)`, periods: 2, week: isSem2 ? 20 : 2 },
                { lessonNumber: 3, title: `Bài 3: Cây trái trong vườn Bác (Tình cảm biết ơn sâu sắc)`, periods: 2, week: isSem2 ? 22 : 4 }
              ]
            },
            {
              topicId: `top_tv_ctst_4_2`,
              topicName: `Chủ điểm 2: Vẻ đẹp đại ngàn & Bài văn miêu tả 30 dòng (CTST Lớp 4)`,
              lessons: [
                { lessonNumber: 4, title: `Bài 4: Vệt nắng chiều thu (Đọc hiểu văn bản & LTVC Biện pháp tu từ)`, periods: 2, week: isSem2 ? 24 : 6 },
                { lessonNumber: 5, title: `Bài 5: Tiếng ru của mẹ & Kì quan đại ngàn`, periods: 2, week: isSem2 ? 26 : 8 },
                { lessonNumber: 6, title: `Bài 6: Cánh đồng mùa thu hoạch (Bài văn miêu tả hoàn chỉnh 30 dòng)`, periods: 2, week: isSem2 ? 28 : 10 }
              ]
            }
          ];
        } else {
          topics = [
            {
              topicId: `top_tv_ctst_5_1`,
              topicName: `Chủ điểm 1: Khúc ca mùa thu & Đất nước tự hào (Chân Trời Sáng Tạo - Lớp 5)`,
              lessons: [
                { lessonNumber: 1, title: `Bài 1: Khúc ca mùa thu (Đọc thành tiếng & Trả lời câu hỏi cảm thụ)`, periods: 2, week: isSem2 ? 19 : 1 },
                { lessonNumber: 2, title: `Bài 2: Đất nước - Nguyễn Đình Thi (Đọc hiểu văn bản nghệ thuật)`, periods: 2, week: isSem2 ? 20 : 2 },
                { lessonNumber: 3, title: `Bài 3: Mầm xanh kiên cường (Đọc hiểu hình ảnh tượng trưng)`, periods: 2, week: isSem2 ? 22 : 4 }
              ]
            },
            {
              topicId: `top_tv_ctst_5_2`,
              topicName: `Chủ điểm 2: Bản sắc làng nghề & Bài văn hoàn chỉnh 30 dòng (CTST Lớp 5)`,
              lessons: [
                { lessonNumber: 4, title: `Bài 4: Hương sắc làng nghề truyền thống (Đọc hiểu & LTVC Câu ghép)`, periods: 2, week: isSem2 ? 24 : 6 },
                { lessonNumber: 5, title: `Bài 5: Khát vọng vươn xa & Bình minh trên biển đảo`, periods: 2, week: isSem2 ? 26 : 8 },
                { lessonNumber: 6, title: `Bài 6: Viết bài văn miêu tả / cảm nhận 3 phần hoàn chỉnh (30 dòng)`, periods: 2, week: isSem2 ? 28 : 10 }
              ]
            }
          ];
        }
      } else if (series === 'SEAPLM') {
        // KHUNG NGỮ LIỆU ĐỌC HIỂU SEA-PLM & GDPT 2018
        topics = [
          {
            topicId: `top_tv_seaplm_1`,
            topicName: `Bối cảnh 1: Đọc hiểu văn bản không liên tục SEA-PLM (Bảng biểu, sơ đồ, tờ hướng dẫn)`,
            lessons: [
              { lessonNumber: 1, title: `Đọc hiểu sơ đồ chỉ dẫn & Bảng thông tin thực tế chuẩn SEA-PLM`, periods: 2, week: isSem2 ? 19 : 2 },
              { lessonNumber: 2, title: `Phân tích dữ liệu cột, hàng & Trả lời câu hỏi trắc nghiệm khách quan`, periods: 2, week: isSem2 ? 21 : 4 }
            ]
          },
          {
            topicId: `top_tv_seaplm_2`,
            topicName: `Bối cảnh 2: Văn bản thông tin địa phương Vĩnh Long & Môi trường Xanh - Sạch - Khỏe`,
            lessons: [
              { lessonNumber: 3, title: `Đọc hiểu văn bản thông tin danh thắng & Làng nghề gốm Vĩnh Long`, periods: 2, week: isSem2 ? 25 : 8 },
              { lessonNumber: 4, title: `Tích hợp Giáo dục bảo vệ môi trường & Năng lực số địa phương`, periods: 2, week: isSem2 ? 30 : 12 }
            ]
          }
        ];
      } else {
        // KẾT NỐI TRI THỨC VÀ CÁC BỘ SÁCH KHÁC
        topics = [
          {
            topicId: `top_tv_${g}_1`,
            topicName: `Chủ điểm 1: Mỗi người một vẻ & Thương yêu người thân Lớp ${g}`,
            lessons: [
              { lessonNumber: 1, title: `Bài 1: Điều kì diệu (Đọc hiểu văn bản nghệ thuật)`, periods: 2, week: isSem2 ? 19 : 1 },
              { lessonNumber: 2, title: `Bài 2: Thi nhạc & Anh em sinh đôi (Luyện từ và câu)`, periods: 2, week: isSem2 ? 21 : 3 }
            ]
          },
          {
            topicId: `top_tv_${g}_2`,
            topicName: `Chủ điểm 2: Trải nghiệm và khám phá Lớp ${g}`,
            lessons: [
              { lessonNumber: 3, title: `Bài 3: Bầu trời trong quả trứng (Kĩ năng đọc hiểu thơ)`, periods: 3, week: isSem2 ? 24 : 6 },
              { lessonNumber: 4, title: `Bài 4: Tập làm văn bài viết theo quy định khối lớp`, periods: 3, week: isSem2 ? 27 : 9 }
            ]
          }
        ];
      }
    } else {
      topics = [
        {
          topicId: `top_sub_${g}_1`,
          topicName: `Chủ đề 1: Trọng tâm môn ${sub} Lớp ${g} (${volName})`,
          lessons: [
            { lessonNumber: 1, title: `Bài 1: Khám phá kiến thức cốt lõi môn ${sub}`, periods: 2, week: isSem2 ? 19 : 2 },
            { lessonNumber: 2, title: `Bài 2: Thực hành & Luyện tập trải nghiệm`, periods: 2, week: isSem2 ? 22 : 5 }
          ]
        },
        {
          topicId: `top_sub_${g}_2`,
          topicName: `Chủ đề 2: Vận dụng thực tế & Đánh giá năng lực chuẩn TT27`,
          lessons: [
            { lessonNumber: 3, title: `Bài 3: Giải quyết tình huống thực tiễn địa phương`, periods: 2, week: isSem2 ? 26 : 10 },
            { lessonNumber: 4, title: `Bài 4: Ôn tập tổng hợp & Kiểm tra đánh giá`, periods: 2, week: isSem2 ? 35 : 18 }
          ]
        }
      ];
    }

    const totalLessons = topics.reduce((acc, t) => acc + t.lessons.length, 0);
    return {
      volumeName: `${volName} (Tuần ${isSem2 ? '19 - 35' : '1 - 18'})`,
      semester: isSem2 ? 'Học kỳ 2' : 'Học kỳ 1',
      volume: isSem2 ? 2 : 1,
      totalLessons,
      weeksRange: isSem2 ? [19, 35] : [1, 18],
      topics
    };
  };

  // Fetch scope khi grade, subject, semester thay đổi
  useEffect(() => {
    async function loadScope() {
      let scopeResult = null;
      try {
        let periodId = 'end_term_1';
        const sem = examInfo.semester || '';
        if (sem.includes('Giữa') && (sem.includes('II') || sem.includes('2'))) {
          periodId = 'mid_term_2';
        } else if (sem.includes('Giữa')) {
          periodId = 'mid_term_1';
        } else if (sem.includes('Cuối năm') || sem.includes('năm') || sem.includes('II') || sem.includes('2')) {
          periodId = 'end_year';
        } else {
          periodId = 'end_term_1';
        }

        const res = await fetchJson(`/curriculum/scope?grade=${examInfo.grade}&subject=${encodeURIComponent(examInfo.subject)}&examPeriodId=${periodId}`);
        if (res && res.scope && res.scope.topics && res.scope.topics.length > 0) {
          scopeResult = res.scope;
        }
      } catch (err) {
        console.warn("API scope fetch failed, falling back to client generator:", err);
      }

      if (!scopeResult || !scopeResult.topics || scopeResult.topics.length === 0) {
        scopeResult = generateClientScopeFallback(examInfo.grade, examInfo.subject, examInfo.semester);
      }

      setAvailableTopics(scopeResult.topics);
      setSelectedTopicIds(scopeResult.topics.map(t => t.topicId));
      setScopeMetadata({
        volumeName: scopeResult.volumeName,
        semester: scopeResult.semester,
        volume: scopeResult.volume,
        totalLessons: scopeResult.totalLessons,
        weeksRange: scopeResult.weeksRange
      });
    }
    loadScope();
  }, [examInfo.grade, examInfo.subject, examInfo.semester, examInfo.bookSeries]);

  // Nạp danh sách bài đọc Tiếng Việt theo khối lớp và học kỳ
  useEffect(() => {
    async function loadPassages() {
      if (examInfo.subject !== 'Tiếng Việt') return;
      try {
        const res = await fetchJson(`/tieng-viet/reading-passages?grade=${examInfo.grade}&semester=${encodeURIComponent(examInfo.semester)}`);
        if (res && res.passages) {
          setAllReadingPassages(res.passages);
        }
      } catch (err) {
        console.error("Failed to load reading passages", err);
      }
    }
    loadPassages();
  }, [examInfo.grade, examInfo.subject, examInfo.semester]);

  // Load Matrix Preset
  useEffect(() => {
    async function initMatrix() {
      const activeTopics = availableTopics
        .filter(t => selectedTopicIds.includes(t.topicId))
        .map(t => ({ topicName: t.topicName, learningOutcomes: t.lessons.map(l => l.title) }));

      try {
        const res = await fetchJson('/matrix/generate', {
          method: 'POST',
          body: JSON.stringify({
            grade: examInfo.grade,
            subject: examInfo.subject,
            semester: examInfo.semester,
            durationMinutes: examInfo.durationMinutes,
            totalPoints: examInfo.totalPoints,
            presetId: matrixPreset,
            customRatios: {
              M1: cognitivePcts.m1,
              M2: cognitivePcts.m2,
              M3: cognitivePcts.m3
            },
            mode: examInfo.mode,
            topics: activeTopics
          })
        });
        if (res.matrix) setMatrixData(res.matrix);
      } catch (e) {
        console.error("Error generating matrix", e);
      }
    }
    initMatrix();
  }, [matrixPreset, examInfo, selectedTopicIds, availableTopics]);

  // Cập nhật ma trận khi người dùng tự gõ % mức độ nhận thức
  const updateMatrixWithPcts = async (pcts) => {
    const activeTopics = availableTopics
      .filter(t => selectedTopicIds.includes(t.topicId))
      .map(t => ({ topicName: t.topicName, learningOutcomes: t.lessons.map(l => l.title) }));

    try {
      const res = await fetchJson('/matrix/generate', {
        method: 'POST',
        body: JSON.stringify({
          grade: examInfo.grade,
          subject: examInfo.subject,
          semester: examInfo.semester,
          durationMinutes: examInfo.durationMinutes,
          totalPoints: examInfo.totalPoints,
          presetId: matrixPreset,
          customRatios: {
            M1: pcts.m1,
            M2: pcts.m2,
            M3: pcts.m3
          },
          mode: examInfo.mode,
          topics: activeTopics
        })
      });
      if (res.matrix) setMatrixData(res.matrix);
    } catch (e) {
      console.error("Error generating matrix with custom percentages", e);
    }
  };

  // Xử lý phân tích YCCĐ tự do
  const handleAnalyzeOutcome = async () => {
    if (!customOutcome.trim()) return;
    setIsAnalyzingOutcome(true);
    try {
      const res = await fetchJson('/curriculum/analyze-outcome', {
        method: 'POST',
        body: JSON.stringify({
          text: customOutcome,
          subject: examInfo.subject,
          grade: examInfo.grade
        })
      });
      setOutcomeAnalysis(res.analysis);
    } catch (e) {
      console.error(e);
    } finally {
      setIsAnalyzingOutcome(false);
    }
  };

  // Sinh đề hoàn chỉnh
  const handleGenerateExam = async () => {
    setLoading(true);
    setApiError(null);
    try {
      const activeTopics = availableTopics
        .filter(t => selectedTopicIds.includes(t.topicId))
        .map(t => ({ topicName: t.topicName, learningOutcomes: t.lessons.map(l => l.title) }));

      const storedApiKey = (typeof localStorage !== 'undefined' ? localStorage.getItem('tvth_gemini_api_key') : '') || '';

      const res = await fetchJson('/exam/generate', {
        method: 'POST',
        body: JSON.stringify({
          grade: examInfo.grade,
          subject: examInfo.subject,
          governingBody: examInfo.governingBody || 'UBND XÃ AN TRƯỜNG',
          schoolName: examInfo.schoolName || 'Trường Tiểu học A An Trường',
          semester: examInfo.semester,
          durationMinutes: examInfo.durationMinutes,
          totalPoints: examInfo.totalPoints,
          mode: examInfo.mode,
          presetId: matrixPreset,
          customRatios: {
            M1: cognitivePcts.m1,
            M2: cognitivePcts.m2,
            M3: cognitivePcts.m3
          },
          matrix: matrixData,
          topics: activeTopics,
          questionTypes,
          seaPlmQuestionCount: seaPlmSettings.enableSeaPlm ? Number(seaPlmQuestionCount) : 0,
          seaPlmSettings,
          examSetIndex: examInfo.examSetIndex || 1,
          tiengVietConfig: examInfo.subject === 'Tiếng Việt' ? tiengVietConfig : null,
          englishRatios: examInfo.subject === 'Tiếng Anh' ? englishConfig.ratios : null,
          apiKey: storedApiKey
        })
      });

      if (res.success && res.exam) {
        res.exam.governingBody = examInfo.governingBody || 'UBND XÃ AN TRƯỜNG';
        res.exam.schoolName = examInfo.schoolName || 'Trường Tiểu học A An Trường';
        res.exam.examSetIndex = examInfo.examSetIndex || 1;
        res.exam.customRatios = {
          M1: cognitivePcts.m1,
          M2: cognitivePcts.m2,
          M3: cognitivePcts.m3
        };
        if (examInfo.subject === 'Tiếng Việt') {
          res.exam.tiengVietConfig = tiengVietConfig;
        }
        setGeneratedExam(res.exam);
        setCurrentStep(6);
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
      } else {
        throw new Error(res.error || "Không nhận được dữ liệu đề thi từ máy chủ AI");
      }
    } catch (err) {
      console.error("Lỗi sinh đề trực tuyến AI:", err);
      // TUYỆT ĐỐI KHÔNG SINH ĐỀ OFFLINE THEO YÊU CẦU: BÁO LỖI TRỰC TIẾP
      setApiError(err.message || "Không thể kết nối đến Google Gemini API hoặc API gặp lỗi. Vui lòng kiểm tra lại đường truyền mạng và cấu hình khóa API trong mục Cài đặt!");
    } finally {
      setLoading(false);
    }
  };

  // Nâng mức độ câu hỏi
  const handleUpgradeLevel = async (questionIndex) => {
    const q = generatedExam.questions[questionIndex];
    try {
      const res = await fetchJson('/exam/upgrade-level', {
        method: 'POST',
        body: JSON.stringify({ question: q })
      });
      if (res.question) {
        const updated = [...generatedExam.questions];
        updated[questionIndex] = res.question;
        setGeneratedExam({ ...generatedExam, questions: updated });
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Hạ mức độ câu hỏi
  const handleDowngradeLevel = async (questionIndex) => {
    const q = generatedExam.questions[questionIndex];
    try {
      const res = await fetchJson('/exam/downgrade-level', {
        method: 'POST',
        body: JSON.stringify({ question: q })
      });
      if (res.question) {
        const updated = [...generatedExam.questions];
        updated[questionIndex] = res.question;
        setGeneratedExam({ ...generatedExam, questions: updated });
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Xem giải thích vì sao là mức X
  const handleExplainLevel = async (question) => {
    try {
      const res = await fetchJson('/exam/explain-level', {
        method: 'POST',
        body: JSON.stringify({ question })
      });
      setActiveExplainModal({ question, explanation: res.explanation });
    } catch (e) {
      console.error(e);
    }
  };

  const steps = [
    { num: 1, label: 'Thông tin chung' },
    { num: 2, label: 'Yêu cầu cần đạt' },
    { num: 3, label: 'Ma trận TT27' },
    { num: 4, label: 'Dạng câu hỏi' },
    { num: 5, label: 'Bối cảnh SEA-PLM' },
    { num: 6, label: 'Duyệt & Kiểm định' },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* Bộ chuyển chế độ Tạo đề */}
      <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="inline-flex rounded-xl bg-slate-100 p-1 w-full sm:w-auto">
          <button
            onClick={() => setWizardMode('matrix')}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              wizardMode === 'matrix' ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            Thiết kế theo Ma trận chuẩn TT27 (6 Bước)
          </button>
          <button
            onClick={() => setWizardMode('clone_old')}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              wizardMode === 'clone_old' ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-600 hover:text-purple-700'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Tạo đề mới tương tự từ Đề cũ (Word, PDF, Ảnh)
            <span className="px-1.5 py-0.5 rounded bg-purple-200 text-purple-900 text-[10px] font-extrabold uppercase ml-1">
              Mới
            </span>
          </button>
        </div>

        <span className="text-xs text-slate-400 hidden md:inline">
          {wizardMode === 'matrix' ? 'Chuẩn Thông tư 27 & GDPT 2018' : 'Bóc tách đề cũ & Đồng cấu 1-1'}
        </span>
      </div>

      {wizardMode === 'clone_old' ? (
        <OldExamCloner
          onExamReady={onExamReady}
          onBackToNormal={() => setWizardMode('matrix')}
        />
      ) : (
        <>
          {/* Step Progress Bar */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
            <div className="flex items-center justify-between">
              {steps.map((s, idx) => (
                <React.Fragment key={s.num}>
                  <button
                    onClick={() => setCurrentStep(s.num)}
                    className={`flex items-center gap-2 group transition-all`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                        currentStep === s.num
                          ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200 ring-2 ring-emerald-600/30'
                          : currentStep > s.num
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
                      }`}
                    >
                      {currentStep > s.num ? <Check className="w-4 h-4 text-emerald-700" /> : s.num}
                    </div>
                    <span
                      className={`text-xs font-semibold hidden md:inline ${
                        currentStep === s.num
                          ? 'text-slate-800'
                          : currentStep > s.num
                          ? 'text-emerald-800'
                          : 'text-slate-400'
                      }`}
                    >
                      {s.label}
                    </span>
                  </button>
                  {idx < steps.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 mx-2 rounded ${
                        currentStep > s.num ? 'bg-emerald-500' : 'bg-slate-100'
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* ================================= STEP 1 ================================= */}
          {currentStep === 1 && (
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-slate-800">Bước 1: Thiết lập Thông tin Đề kiểm tra</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Xác định cơ quan quản lý (UBND Xã .... không còn PGD), trường học, khối lớp, môn học và thời gian theo chuẩn GDPT 2018.
                  </p>
                </div>
              </div>

              {/* Banner phím tắt nạp đề cũ nhanh */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 text-xs text-purple-900">
                  <div className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold shrink-0 shadow-xs">
                    <RefreshCw className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-extrabold">Thầy/Cô đã có sẵn đề thi cũ (Word, PDF hoặc Ảnh chụp) của những năm trước?</span>
                    <p className="text-[11px] text-purple-700/90 mt-0.5">
                      Bấm để tải tệp đề cũ lên, hệ thống sẽ tự động bóc tách và sinh đề thi mới tương tự về dạng và điểm số!
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setWizardMode('clone_old')}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-xs whitespace-nowrap transition-all self-end sm:self-auto"
                >
                  <span>Nạp đề cũ sinh đề mới ngay</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                UBND Xã / Phường <span className="text-emerald-700 font-semibold text-[11px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Không còn PGD</span>
              </label>
              <input
                type="text"
                value={examInfo.governingBody}
                onChange={(e) => setExamInfo({ ...examInfo, governingBody: e.target.value })}
                placeholder="VD: UBND XÃ AN TRƯỜNG hoặc UBND XÃ ...."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Tên trường Tiểu học</label>
              <input
                type="text"
                value={examInfo.schoolName}
                onChange={(e) => setExamInfo({ ...examInfo, schoolName: e.target.value })}
                placeholder="VD: Trường Tiểu học A An Trường"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Khối Lớp</label>
              <select
                value={examInfo.grade}
                onChange={(e) => handleGradeChange(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 font-semibold"
              >
                <option value={1}>Lớp 1</option>
                <option value={2}>Lớp 2</option>
                <option value={3}>Lớp 3</option>
                <option value={4}>Lớp 4</option>
                <option value={5}>Lớp 5</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Môn học</label>
              <select
                value={examInfo.subject}
                onChange={(e) => handleSubjectChange(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 font-semibold"
              >
                {getAvailableSubjects(examInfo.grade).map(s => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                <span>Bộ Sách Giáo Khoa & Nguồn Ngữ liệu</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-extrabold px-2 py-0.5 rounded-full">
                  Chuẩn CTST & SEA-PLM
                </span>
              </label>
              <select
                value={examInfo.bookSeries || 'CTST'}
                onChange={(e) => setExamInfo({ ...examInfo, bookSeries: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-300 text-sm bg-emerald-50/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 font-bold text-emerald-950 shadow-xs"
              >
                <option value="CTST">📖 Bộ Sách Chân Trời Sáng Tạo (Tài liệu đọc hiểu & đọc thành tiếng)</option>
                <option value="SEAPLM">📊 Khung Ngữ liệu Đọc hiểu SEA-PLM & Địa phương Vĩnh Long</option>
                <option value="KNTT">📚 Bộ Sách Kết Nối Tri Thức Với Cuộc Sống</option>
                <option value="CD">🦅 Bộ Sách Cánh Diều</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Kỳ kiểm tra định kỳ <span className="text-emerald-700 font-semibold text-[11px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Chuẩn TT 27</span>
              </label>
              <select
                value={examInfo.semester}
                onChange={(e) => setExamInfo({ ...examInfo, semester: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 font-bold text-slate-800"
              >
                {getAvailableSemesters(examInfo.grade, examInfo.subject).map(sem => (
                  <option key={sem.value} value={sem.value}>{sem.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                <span>Bộ đề thi (Lựa chọn từ 8+ bộ đề phong phú)</span>
                <span className="text-[10px] bg-purple-100 text-purple-800 font-extrabold px-2 py-0.5 rounded-full">
                  8 Bộ đề chuẩn
                </span>
              </label>
              <select
                value={examInfo.examSetIndex || 1}
                onChange={(e) => setExamInfo({ ...examInfo, examSetIndex: Number(e.target.value) })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 text-sm bg-purple-50/40 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 font-bold text-purple-900"
              >
                <option value={1}>Bộ đề 1 - Chuẩn kiến thức trọng tâm</option>
                <option value={2}>Bộ đề 2 - Liên hệ thực tiễn địa phương</option>
                <option value={3}>Bộ đề 3 - Phát triển tư duy logic</option>
                <option value={4}>Bộ đề 4 - Mô hình hóa & Đời sống</option>
                <option value={5}>Bộ đề 5 - Tích hợp liên môn SEA-PLM</option>
                <option value={6}>Bộ đề 6 - Giải quyết vấn đề sáng tạo</option>
                <option value={7}>Bộ đề 7 - Rèn luyện kĩ năng toàn diện</option>
                <option value={8}>Bộ đề 8 - Đánh giá năng lực tổng hợp</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Thời gian làm bài</label>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value={examInfo.durationMinutes}
                  onChange={(e) => setExamInfo({ ...examInfo, durationMinutes: Number(e.target.value) })}
                  className="w-24 px-3 py-2 rounded-xl border border-slate-200 text-sm text-center font-bold"
                />
                <span className="text-xs text-slate-500">phút (Tiểu học: 35 – 45 phút)</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Thang điểm chuẩn</label>
              <div className="flex items-center gap-2">
                <span className="px-3 py-2 rounded-xl bg-emerald-50 border border-emerald-200 font-bold text-sm text-emerald-800">
                  10 điểm
                </span>
                <span className="text-xs text-slate-400">(Không cho điểm thập phân theo TT 27)</span>
              </div>
            </div>
          </div>

          {/* Hộp cấu hình đặc thù dành riêng cho Môn Tiếng Anh (Chuẩn 4 kỹ năng Global Success) */}
          {examInfo.subject === 'Tiếng Anh' && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-200 space-y-3 pt-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-xs text-sky-950 uppercase">
                  <span className="w-5 h-5 rounded-md bg-sky-600 text-white flex items-center justify-center font-bold text-[10px]">EN</span>
                  <span>Cấu hình chuẩn 4 Kỹ năng Môn Tiếng Anh (Global Success - Thông tư 27)</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-sky-200/80 text-sky-900 font-bold text-xs">
                  Tổng 10,0 điểm
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Đề thi được tạo theo đúng cấu trúc chuẩn của trường tiểu học: <strong>Listening</strong> (có kịch bản Audio Transcript), <strong>Reading</strong> (Look & tick/cross, Read & complete với Word bank), <strong>Writing</strong> (Sắp xếp chữ cái Anagram, xếp từ thành câu), và <strong>Speaking</strong> (Vấn đáp 1-1 & Look and answer).
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 text-center font-bold text-xs">
                <div className="p-2.5 bg-white rounded-xl border border-sky-100 shadow-2xs">
                  <div className="text-slate-500 text-[11px]">1. Listening</div>
                  <div className="text-sky-700 text-sm font-black">{examInfo.grade === 3 ? '4,0 điểm (40%)' : '3,0 điểm (30%)'}</div>
                  <div className="text-[10px] text-slate-400 font-normal mt-0.5">Kèm Audio Transcript</div>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-sky-100 shadow-2xs">
                  <div className="text-slate-500 text-[11px]">2. Reading</div>
                  <div className="text-emerald-700 text-sm font-black">{examInfo.grade === 3 ? '2,0 điểm (20%)' : '2,5 điểm (25%)'}</div>
                  <div className="text-[10px] text-slate-400 font-normal mt-0.5">Word Bank & Đọc hiểu</div>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-sky-100 shadow-2xs">
                  <div className="text-slate-500 text-[11px]">3. Writing</div>
                  <div className="text-purple-700 text-sm font-black">{examInfo.grade === 3 ? '2,0 điểm (20%)' : '2,5 điểm (25%)'}</div>
                  <div className="text-[10px] text-slate-400 font-normal mt-0.5">Scramble & Xếp câu</div>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-sky-100 shadow-2xs">
                  <div className="text-slate-500 text-[11px]">4. Speaking</div>
                  <div className="text-amber-700 text-sm font-black">2,0 điểm (20%)</div>
                  <div className="text-[10px] text-slate-400 font-normal mt-0.5">Interview & Rubric</div>
                </div>
              </div>
            </div>
          )}

          {/* Hộp cấu hình đặc thù dành riêng cho Môn Tiếng Việt (Chuẩn 2 phiếu Đọc & Viết) */}
          {examInfo.subject === 'Tiếng Việt' && (
            <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 space-y-3 pt-3">
              <div className="flex items-center gap-2 font-bold text-xs text-purple-900">
                <BookOpen className="w-4 h-4 text-purple-700" />
                <span className="uppercase">Cấu hình đặc thù môn Tiếng Việt (Chuẩn 2 phần Đọc & Viết)</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* ==================== PHẦN I: KIỂM TRA ĐỌC ==================== */}
                <div className="p-3.5 bg-white rounded-xl border border-purple-200 shadow-xs space-y-3">
                  <div className="font-bold text-purple-900 flex items-center gap-2 text-[13px]">
                    <span className="text-base">📖</span>
                    <span>I. PHẦN KIỂM TRA ĐỌC (10,0 điểm)</span>
                  </div>

                  {/* 1. Điểm Đọc thành tiếng */}
                  <div>
                    <label className="block text-[11px] text-slate-700 font-semibold mb-1">• Điểm Đọc thành tiếng:</label>
                    <select
                      value={tiengVietConfig.oralScore}
                      onChange={(e) => setTiengVietConfig({ ...tiengVietConfig, oralScore: Number(e.target.value) })}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-800 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                    >
                      <option value={4}>4,0 điểm (Đọc hiểu & LTVC: 6,0 điểm - Chuẩn TT27)</option>
                      <option value={3}>3,0 điểm (Đọc hiểu & LTVC: 7,0 điểm)</option>
                    </select>
                  </div>

                  {/* 2. Chế độ Đọc thành tiếng */}
                  <div>
                    <label className="block text-[11px] text-slate-700 font-semibold mb-1">• Chế độ Đọc thành tiếng:</label>
                    <select
                      value={tiengVietConfig.oralMode}
                      onChange={(e) => setTiengVietConfig({ ...tiengVietConfig, oralMode: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-800 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                    >
                      <option value="sgk">🧾 5 bài trong SGK đã chọn ({examInfo.semester})</option>
                      <option value="ctst">📖 Tự động chọn 5 bài bốc thăm Kết nối tri thức ({examInfo.semester})</option>
                      <option value="custom">📝 1 bài đọc tương tự ngoài SGK</option>
                    </select>
                  </div>

                  {/* Ghi chú giáo viên */}
                  <div className="flex items-start gap-1.5 text-[11px] text-purple-700 italic bg-purple-50/60 p-2 rounded-lg border border-purple-100">
                    <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-purple-600" />
                    <span>Hệ thống tự động chọn 5 bài đọc thành tiếng phù hợp chuẩn giai đoạn <strong>{examInfo.semester}</strong>. Câu hỏi & gợi ý trả lời in trong Hướng Dẫn Chấm.</span>
                  </div>

                  {/* 3. Định hướng Ngữ liệu Đọc hiểu (Chuẩn SEA-PLM) */}
                  <div>
                    <label className="block text-[11px] text-slate-700 font-semibold mb-1">• Định hướng Ngữ liệu Đọc hiểu (Chuẩn SEA-PLM):</label>
                    <select
                      value={tiengVietConfig.readingCorpusType}
                      onChange={(e) => setTiengVietConfig({ ...tiengVietConfig, readingCorpusType: e.target.value, selectedCompId: 'auto' })}
                      className="w-full px-2.5 py-2 rounded-lg border-2 border-sky-400 bg-white text-xs font-medium text-slate-800 focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 shadow-xs"
                    >
                      <option value="literary">📖 Văn bản nghệ thuật (Truyện, thơ theo chủ điểm SGK CTST)</option>
                      <option value="informational_vinhlong">🏛️ Văn bản thông tin thực tế / Địa phương Vĩnh Long (124 xã/phường)</option>
                      <option value="non_continuous_seaplm">📊 Văn bản không liên tục / Hỗn hợp (Bảng biểu, sơ đồ chuẩn SEA-PLM)</option>
                      <option value="custom">✍️ Tự nhập ngữ liệu đọc hiểu tùy chỉnh...</option>
                    </select>
                  </div>

                  {/* Tùy chọn kho bài đọc cho Văn bản nghệ thuật SGK */}
                  {tiengVietConfig.readingCorpusType === 'literary' && (
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/90 space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="block text-[11px] font-semibold text-slate-700">
                          • Bài đọc hiểu chuẩn {examInfo.semester}:
                        </label>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 font-bold">
                          {allReadingPassages.filter(p => p.category === 'literary').length || 8} bài sẵn có ({examInfo.semester})
                        </span>
                      </div>
                      <select
                        value={tiengVietConfig.selectedCompId}
                        onChange={(e) => setTiengVietConfig({ ...tiengVietConfig, selectedCompId: e.target.value })}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs text-slate-800 font-medium"
                      >
                        <option value="auto">🎲 Tự động chọn ngẫu nhiên bài đọc {examInfo.semester} (Khuyến nghị)</option>
                        {allReadingPassages.filter(p => p.category === 'literary').map((p, idx) => (
                          <option key={p.id} value={p.id}>
                            [{p.bookVolume || (p.semester === 1 ? 'Tập 1' : 'Tập 2')}] Bài {String(idx + 1).padStart(2, '0')}: {p.title} (~{p.wordCount || p.passage?.trim().split(/\s+/).length || 50} chữ) - {p.theme}
                          </option>
                        ))}
                      </select>

                      {/* Preview tóm tắt bài đã chọn */}
                      {tiengVietConfig.selectedCompId !== 'auto' && (() => {
                        const sel = allReadingPassages.find(p => p.id === tiengVietConfig.selectedCompId);
                        if (!sel) return null;
                        const words = sel.wordCount || sel.passage?.trim().split(/\s+/).length || 40;
                        return (
                          <div className="p-2.5 rounded-lg bg-white border border-purple-200 text-[11px] text-slate-600 space-y-1.5 shadow-xs">
                            <div className="flex items-center justify-between">
                              <div className="font-bold text-slate-800 text-xs">
                                {sel.title} <span className="font-normal italic text-slate-500">- {sel.author}</span>
                              </div>
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-purple-100 text-purple-800">
                                {sel.bookVolume || (sel.semester === 1 ? 'Tập 1' : 'Tập 2')}
                              </span>
                            </div>
                            <div className="text-[10px] text-purple-700 flex flex-wrap items-center gap-2">
                              <span>Chủ điểm: <strong>{sel.theme}</strong></span>
                              <span>•</span>
                              <span>Thể loại: <strong>{sel.genre || 'Văn xuôi'}</strong></span>
                              <span>•</span>
                              <span className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 font-bold">
                                Kênh chữ: ~{words} chữ (Chuẩn {sel.grade ? `Lớp ${sel.grade}` : ''})
                              </span>
                            </div>
                            <p className="line-clamp-3 italic text-slate-600 text-[11px] bg-slate-50 p-2 rounded border border-slate-100 leading-relaxed">
                              "{sel.passage}"
                            </p>
                          </div>
                        );
                      })()}
                    </div>
                  )}

                  {/* Tùy chọn kho bài đọc Địa phương Vĩnh Long */}
                  {tiengVietConfig.readingCorpusType === 'informational_vinhlong' && (
                    <div className="p-2.5 rounded-lg bg-amber-50/60 border border-amber-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="block text-[11px] font-semibold text-amber-900">
                          • Chọn bài đọc thông tin địa phương Vĩnh Long:
                        </label>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 font-bold">
                          {allReadingPassages.filter(p => p.category === 'informational_vinhlong').length || 5} bài Vĩnh Long
                        </span>
                      </div>
                      <select
                        value={tiengVietConfig.selectedCompId}
                        onChange={(e) => setTiengVietConfig({ ...tiengVietConfig, selectedCompId: e.target.value })}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-amber-200 bg-white text-xs text-slate-800 font-medium"
                      >
                        <option value="auto">🎲 Tự động chọn ngẫu nhiên bài đọc Vĩnh Long (Khuyến nghị)</option>
                        {allReadingPassages.filter(p => p.category === 'informational_vinhlong').map((p, idx) => (
                          <option key={p.id} value={p.id}>
                            Địa phương {idx + 1}: {p.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Tùy chọn kho bài đọc Bảng biểu / Sơ đồ SEA-PLM */}
                  {tiengVietConfig.readingCorpusType === 'non_continuous_seaplm' && (
                    <div className="p-2.5 rounded-lg bg-sky-50/60 border border-sky-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="block text-[11px] font-semibold text-sky-900">
                          • Chọn văn bản không liên tục / Bảng biểu SEA-PLM:
                        </label>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-200 text-sky-900 font-bold">
                          Chuẩn SEA-PLM
                        </span>
                      </div>
                      <select
                        value={tiengVietConfig.selectedCompId}
                        onChange={(e) => setTiengVietConfig({ ...tiengVietConfig, selectedCompId: e.target.value })}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-sky-200 bg-white text-xs text-slate-800 font-medium"
                      >
                        <option value="auto">🎲 Tự động chọn ngẫu nhiên văn bản không liên tục SEA-PLM</option>
                        {allReadingPassages.filter(p => p.category === 'non_continuous_seaplm').map((p, idx) => (
                          <option key={p.id} value={p.id}>
                            Bảng biểu/Sơ đồ {idx + 1}: {p.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Form tự nhập ngữ liệu tùy chỉnh */}
                  {tiengVietConfig.readingCorpusType === 'custom' && (
                    <div className="p-3 rounded-lg bg-purple-50/80 border border-purple-200 space-y-2.5">
                      <div className="text-[11px] font-bold text-purple-900 flex items-center gap-1.5">
                        <Edit3 className="w-3.5 h-3.5" />
                        Nhập ngữ liệu đọc hiểu của thầy/cô:
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-600 mb-0.5">Tiêu đề bài đọc:</label>
                        <input
                          type="text"
                          value={tiengVietConfig.customPassage.title}
                          onChange={(e) => setTiengVietConfig({
                            ...tiengVietConfig,
                            customPassage: { ...tiengVietConfig.customPassage, title: e.target.value }
                          })}
                          placeholder="VD: Cây bàng trường em"
                          className="w-full px-2.5 py-1 rounded-md border border-purple-200 bg-white text-xs focus:ring-1 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-600 mb-0.5">Tác giả / Nguồn:</label>
                        <input
                          type="text"
                          value={tiengVietConfig.customPassage.author}
                          onChange={(e) => setTiengVietConfig({
                            ...tiengVietConfig,
                            customPassage: { ...tiengVietConfig.customPassage, author: e.target.value }
                          })}
                          placeholder="VD: Nguyễn Nhật Ánh (hoặc Sưu tầm)"
                          className="w-full px-2.5 py-1 rounded-md border border-purple-200 bg-white text-xs focus:ring-1 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-600 mb-0.5">Đoạn trích đọc hiểu (150 - 250 từ):</label>
                        <textarea
                          rows={4}
                          value={tiengVietConfig.customPassage.passage}
                          onChange={(e) => setTiengVietConfig({
                            ...tiengVietConfig,
                            customPassage: { ...tiengVietConfig.customPassage, passage: e.target.value }
                          })}
                          placeholder="Dán nội dung đoạn văn đọc hiểu tại đây..."
                          className="w-full px-2.5 py-1.5 rounded-md border border-purple-200 bg-white text-xs focus:ring-1 focus:ring-purple-500 leading-relaxed"
                        />
                      </div>
                      <div className="text-[10px] text-purple-700 italic">
                        * Hệ thống AI sẽ tự động phân tích ngữ liệu và sinh bộ 7 câu hỏi đọc hiểu & LTVC chuẩn 3 mức độ Thông tư 27.
                      </div>
                    </div>
                  )}
                </div>

                {/* ==================== PHẦN II: KIỂM TRA VIẾT ==================== */}
                <div className="p-3.5 bg-white rounded-xl border border-purple-200 shadow-xs space-y-3">
                  <div className="font-bold text-slate-800 flex items-center gap-2 text-[13px]">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                    <span>II. PHẦN KIỂM TRA VIẾT (10,0 điểm)</span>
                  </div>
                  {examInfo.grade <= 3 ? (
                    <div>
                      <label className="block text-[11px] text-slate-600 font-semibold mb-1">• Tỷ lệ Chính tả & Viết đoạn:</label>
                      <select
                        value={tiengVietConfig.writingRatio}
                        onChange={(e) => setTiengVietConfig({ ...tiengVietConfig, writingRatio: e.target.value })}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-800"
                      >
                        <option value="4-6">Chính tả (Nghe-viết): 4,0đ — Viết đoạn văn: 6,0đ (Chuẩn TT27)</option>
                        <option value="3-7">Chính tả (Nghe-viết): 3,0đ — Viết đoạn văn: 7,0đ</option>
                        <option value="5-5">Chính tả (Nghe-viết): 5,0đ — Viết đoạn văn: 5,0đ</option>
                      </select>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-[11px] text-slate-600 font-semibold mb-1">• Thể loại Tập làm văn (10,0 điểm):</label>
                      <select
                        value={tiengVietConfig.essayGenre}
                        onChange={(e) => setTiengVietConfig({ ...tiengVietConfig, essayGenre: e.target.value })}
                        className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-800"
                      >
                        <option value="Văn miêu tả cây cối">Văn miêu tả cây cối</option>
                        <option value="Văn miêu tả con vật">Văn miêu tả con vật nuôi yêu thích</option>
                        <option value="Văn miêu tả cảnh vật">Văn miêu tả cảnh đẹp quê hương</option>
                        <option value="Văn miêu tả người">Văn miêu tả người thân / thầy cô</option>
                        <option value="Văn kể chuyện">Văn kể lại câu chuyện đã học / đã nghe</option>
                        <option value="Viết đoạn văn nêu tình cảm cảm xúc">Viết đoạn văn nêu tình cảm, cảm xúc</option>
                      </select>
                    </div>
                  )}
                  <div className="text-[10px] text-purple-700 italic pt-1">
                    * Tự động tạo Barem chấm 10 điểm chi tiết trong Hướng dẫn chấm
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end pt-4 border-t border-slate-100">
            <button
              onClick={() => setCurrentStep(2)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all"
            >
              <span>Tiếp tục: Yêu cầu cần đạt</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ================================= STEP 2 ================================= */}
      {currentStep === 2 && (
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-800">Bước 2: Xác nhận Nội dung bài học & Yêu cầu cần đạt (YCCĐ)</h3>
              <p className="text-xs text-slate-500 mt-1">
                AI chỉ đề xuất các bài học đã dạy tương ứng với kỳ <strong>{examInfo.semester}</strong>. Giáo viên chọn bài kiểm tra.
              </p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-300 shadow-xs">
                {scopeMetadata?.volumeName || (examInfo.semester.includes('II') || examInfo.semester.includes('2') || examInfo.semester.includes('năm') ? 'Sách Tập 2' : 'Sách Tập 1')}
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-200">
                KHDH Lớp {examInfo.grade} - {examInfo.bookSeries === 'CTST' ? 'Chân Trời Sáng Tạo' : (examInfo.bookSeries === 'SEAPLM' ? 'Năng lực SEA-PLM' : examInfo.bookSeries)} ({scopeMetadata?.totalLessons || availableTopics.reduce((a, t) => a + (t.lessons?.length || 0), 0)} bài)
              </span>
            </div>
          </div>

          {/* Available Topics from KHDH */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold text-slate-700">
                Danh sách Chủ đề / Bài học SGK trong phạm vi kiểm tra:
              </label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedTopicIds(availableTopics.map(t => t.topicId))}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline cursor-pointer"
                >
                  Chọn tất cả ({availableTopics.length})
                </button>
                <span className="text-slate-300">|</span>
                <button
                  type="button"
                  onClick={() => setSelectedTopicIds([])}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-700 hover:underline cursor-pointer"
                >
                  Bỏ chọn tất cả
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 max-h-72 overflow-y-auto p-2 bg-slate-50 rounded-xl border border-slate-200/60">
              {availableTopics.length === 0 ? (
                <div className="p-6 text-center text-slate-400 text-xs">
                  Không tìm thấy bài học phù hợp cho kỳ kiểm tra đã chọn. Vui lòng kiểm tra lại thiết lập môn học hoặc học kỳ.
                </div>
              ) : (
                availableTopics.map((topic) => {
                  const isSelected = selectedTopicIds.includes(topic.topicId);
                  return (
                    <div
                      key={topic.topicId}
                      onClick={() => {
                        if (isSelected) {
                          setSelectedTopicIds(selectedTopicIds.filter(id => id !== topic.topicId));
                        } else {
                          setSelectedTopicIds([...selectedTopicIds, topic.topicId]);
                        }
                      }}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start justify-between ${
                        isSelected
                          ? 'bg-emerald-50/80 border-emerald-300 shadow-xs'
                          : 'bg-white border-slate-200 hover:border-slate-300 opacity-70'
                      }`}
                    >
                      <div className="space-y-1.5 w-full">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => {}}
                              className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                            />
                            <span className="font-bold text-sm text-slate-800">{topic.topicName}</span>
                          </div>
                          <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                            {topic.lessons.length} bài
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 pl-6 space-y-0.5">
                          {topic.lessons.map(l => (
                            <div key={l.lessonNumber || l.title} className="text-slate-600 flex items-center justify-between">
                              <span>• Tuần {l.week}: {l.title}</span>
                              <span className="text-[10px] text-slate-400 font-mono">({l.periods} tiết)</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Custom YCCĐ Analyzer */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Hoặc nhập thêm Yêu cầu cần đạt tự do (AI phân tích):
              </label>
              <button
                onClick={handleAnalyzeOutcome}
                disabled={isAnalyzingOutcome || !customOutcome.trim()}
                className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white rounded-lg text-xs font-bold transition-all"
              >
                {isAnalyzingOutcome ? 'Đang phân tích...' : 'Phân tích YCCĐ'}
              </button>
            </div>
            <textarea
              rows={2}
              value={customOutcome}
              onChange={(e) => setCustomOutcome(e.target.value)}
              placeholder="Ví dụ: Học sinh nhận biết được phân số bằng nhau và vận dụng để giải quyết bài toán thực tế..."
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-white"
            />
            {outcomeAnalysis && (
              <div className="p-3 bg-white rounded-xl border border-emerald-200 text-xs space-y-1.5">
                <div className="font-bold text-emerald-800">Kết quả phân tích sư phạm của AI:</div>
                <div className="text-slate-600">• Kiến thức cốt lõi: <strong>{outcomeAnalysis.knowledgeCore}</strong></div>
                <div className="text-slate-600">• Mức độ nhận thức phù hợp: {outcomeAnalysis.potentialLevels.map(l => <span key={l} className="px-1.5 py-0.5 ml-1 bg-emerald-100 text-emerald-800 rounded font-bold">{l}</span>)}</div>
                <div className="text-slate-600">• Năng lực cần đánh giá: <em>{outcomeAnalysis.competencies.join(', ')}</em></div>
              </div>
            )}
          </div>

          <div className="flex justify-between pt-4 border-t border-slate-100">
            <button
              onClick={() => setCurrentStep(1)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs hover:bg-slate-50"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại</span>
            </button>
            <button
              onClick={() => setCurrentStep(3)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all"
            >
              <span>Tiếp tục: Thiết lập Ma trận</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ================================= STEP 3 ================================= */}
      {currentStep === 3 && (
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-bold text-slate-800">Bước 3: Thiết lập Ma trận đề kiểm tra (TT 27 & Bộ GD&ĐT)</h3>
              <p className="text-xs text-slate-500 mt-1">
                Ma trận thể hiện rõ: <strong>Chủ đề, Mức 1 - Mức 2 - Mức 3, Số câu, Số điểm, Dạng câu hỏi (TNKQ / TL)</strong>.
              </p>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
              Tổng điểm: 10.0 đ
            </span>
          </div>

          {/* Preset Buttons & Quick Configuration */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-slate-700">1. Ma trận 3 Mức độ nhận thức (Tự do nhập % theo ý muốn):</div>
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                cognitivePcts.m1 + cognitivePcts.m2 + cognitivePcts.m3 === 100
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-red-100 text-red-700'
              }`}>
                Tổng: {cognitivePcts.m1 + cognitivePcts.m2 + cognitivePcts.m3}% {cognitivePcts.m1 + cognitivePcts.m2 + cognitivePcts.m3 === 100 ? '✓' : '(Chưa bằng 100%)'}
              </span>
            </div>

            {/* 3 Input fields for % M1, M2, M3 */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-emerald-50/60 border border-emerald-200 rounded-xl text-center">
                <span className="text-[11px] font-bold text-emerald-900 block mb-1">Mức 1 (Nhận biết)</span>
                <div className="flex items-center justify-center gap-1">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="5"
                    value={cognitivePcts.m1}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      const next = { ...cognitivePcts, m1: val };
                      setCognitivePcts(next);
                      updateMatrixWithPcts(next);
                    }}
                    className="w-16 px-2 py-1 bg-white rounded-lg border border-emerald-300 font-black text-center text-sm text-emerald-800"
                  />
                  <span className="text-xs font-bold text-emerald-900">%</span>
                </div>
                <div className="mt-1 text-xs font-black text-emerald-700">
                  {(cognitivePcts.m1 * 0.1).toFixed(1).replace('.', ',')} đ
                </div>
                <div className={`mt-0.5 text-[10px] font-semibold ${cognitivePcts.m1 >= 55 && cognitivePcts.m1 <= 70 ? 'text-emerald-700' : 'text-amber-700'}`}>
                  {cognitivePcts.m1 >= 55 && cognitivePcts.m1 <= 70 ? '✓ Chuẩn TT27 (5,5-7,0đ)' : 'Dải chuẩn: 5,5-7,0đ'}
                </div>
              </div>

              <div className="p-3 bg-amber-50/60 border border-amber-200 rounded-xl text-center">
                <span className="text-[11px] font-bold text-amber-900 block mb-1">Mức 2 (Kết nối)</span>
                <div className="flex items-center justify-center gap-1">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="5"
                    value={cognitivePcts.m2}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      const next = { ...cognitivePcts, m2: val };
                      setCognitivePcts(next);
                      updateMatrixWithPcts(next);
                    }}
                    className="w-16 px-2 py-1 bg-white rounded-lg border border-amber-300 font-black text-center text-sm text-amber-800"
                  />
                  <span className="text-xs font-bold text-amber-900">%</span>
                </div>
                <div className="mt-1 text-xs font-black text-amber-700">
                  {(cognitivePcts.m2 * 0.1).toFixed(1).replace('.', ',')} đ
                </div>
                <div className={`mt-0.5 text-[10px] font-semibold ${cognitivePcts.m2 >= 15 && cognitivePcts.m2 <= 20 ? 'text-emerald-700' : 'text-amber-700'}`}>
                  {cognitivePcts.m2 >= 15 && cognitivePcts.m2 <= 20 ? '✓ Chuẩn TT27 (1,5-2,0đ)' : 'Dải chuẩn: 1,5-2,0đ'}
                </div>
              </div>

              <div className="p-3 bg-purple-50/60 border border-purple-200 rounded-xl text-center">
                <span className="text-[11px] font-bold text-purple-900 block mb-1">Mức 3 (Vận dụng)</span>
                <div className="flex items-center justify-center gap-1">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="5"
                    value={cognitivePcts.m3}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      const next = { ...cognitivePcts, m3: val };
                      setCognitivePcts(next);
                      updateMatrixWithPcts(next);
                    }}
                    className="w-16 px-2 py-1 bg-white rounded-lg border border-purple-300 font-black text-center text-sm text-purple-800"
                  />
                  <span className="text-xs font-bold text-purple-900">%</span>
                </div>
                <div className="mt-1 text-xs font-black text-purple-700">
                  {(cognitivePcts.m3 * 0.1).toFixed(1).replace('.', ',')} đ
                </div>
                <div className={`mt-0.5 text-[10px] font-semibold ${cognitivePcts.m3 >= 5 && cognitivePcts.m3 <= 15 ? 'text-emerald-700' : 'text-amber-700'}`}>
                  {cognitivePcts.m3 >= 5 && cognitivePcts.m3 <= 15 ? '✓ Chuẩn TT27 (0,5-1,5đ)' : 'Dải chuẩn: 0,5-1,5đ'}
                </div>
              </div>
            </div>

            {/* Presets buttons */}
            <div className="flex items-center gap-2 justify-center pt-1 flex-wrap">
              <span className="text-[11px] text-slate-500 font-medium">Chọn nhanh mẫu chuẩn:</span>
              <button
                type="button"
                onClick={() => {
                  const next = { m1: 65, m2: 20, m3: 15 };
                  setCognitivePcts(next);
                  setMatrixPreset('standard_tt27_65_20_15');
                  updateMatrixWithPcts(next);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  cognitivePcts.m1 === 65 && cognitivePcts.m2 === 20 && cognitivePcts.m3 === 15
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                65 - 20 - 15 (Khuyến nghị TT27: 6.5đ - 2đ - 1.5đ)
              </button>
              <button
                type="button"
                onClick={() => {
                  const next = { m1: 70, m2: 20, m3: 10 };
                  setCognitivePcts(next);
                  setMatrixPreset('fundamental_70_20_10');
                  updateMatrixWithPcts(next);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  cognitivePcts.m1 === 70 && cognitivePcts.m2 === 20 && cognitivePcts.m3 === 10
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                70 - 20 - 10 (Cơ bản: 7đ - 2đ - 1đ)
              </button>
              <button
                type="button"
                onClick={() => {
                  const next = { m1: 60, m2: 25, m3: 15 };
                  setCognitivePcts(next);
                  setMatrixPreset('balanced_60_25_15');
                  updateMatrixWithPcts(next);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  cognitivePcts.m1 === 60 && cognitivePcts.m2 === 25 && cognitivePcts.m3 === 15
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                60 - 25 - 15 (Cân đối: 6đ - 2.5đ - 1.5đ)
              </button>
              <button
                type="button"
                onClick={() => {
                  const next = { m1: 55, m2: 25, m3: 20 };
                  setCognitivePcts(next);
                  setMatrixPreset('balanced_55_25_20');
                  updateMatrixWithPcts(next);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  cognitivePcts.m1 === 55 && cognitivePcts.m2 === 25 && cognitivePcts.m3 === 20
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                55 - 25 - 20 (Nâng cao: 5.5đ - 2.5đ - 2đ)
              </button>
              <button
                type="button"
                onClick={() => {
                  const next = { m1: 40, m2: 40, m3: 20 };
                  setCognitivePcts(next);
                  setMatrixPreset('balanced_442');
                  updateMatrixWithPcts(next);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  cognitivePcts.m1 === 40 && cognitivePcts.m2 === 40 && cognitivePcts.m3 === 20
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                40 - 40 - 20 (Mẫu cũ)
              </button>
            </div>
          </div>

          {/* Flexible Question Counts Selector */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">2. Tùy chọn nhanh cơ cấu Trắc nghiệm & Tự luận:</span>
              <span className="text-[11px] text-slate-500 italic">Thầy cô có thể tùy chỉnh linh hoạt số câu</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-center">
                <span className="text-slate-500 text-[11px] block">Tổng số câu TNKQ</span>
                <span className="text-lg font-black text-emerald-700 mt-0.5 block">{matrixData?.summary?.totalTnCount || 7} câu</span>
                <span className="text-[10px] text-slate-400">({matrixData?.summary?.totalTnPoints || 6} điểm)</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-center">
                <span className="text-slate-500 text-[11px] block">Tổng số câu Tự luận (TL)</span>
                <span className="text-lg font-black text-blue-700 mt-0.5 block">{matrixData?.summary?.totalTlCount || 3} câu</span>
                <span className="text-[10px] text-slate-400">({matrixData?.summary?.totalTlPoints || 4} điểm)</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-center">
                <span className="text-slate-500 text-[11px] block">Tổng toàn đề</span>
                <span className="text-lg font-black text-purple-700 mt-0.5 block">{matrixData?.summary?.totalQuestions || 10} câu</span>
                <span className="text-[10px] text-slate-400">({matrixData?.summary?.totalPoints || 10} điểm)</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-center">
                <span className="text-slate-500 text-[11px] block">Thời gian chuẩn</span>
                <span className="text-lg font-black text-amber-700 mt-0.5 block">{examInfo.durationMinutes} phút</span>
                <span className="text-[10px] text-slate-400">Trung bình ~4 phút/câu</span>
              </div>
            </div>
          </div>

          {/* 10-Column TT27 Matrix Table Preview */}
          {matrixData && (
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-700">3. Bảng Ma trận đề kiểm tra chuẩn Thông tư 27 (10 cột, 3 dòng con):</div>
              <div className="overflow-x-auto rounded-xl border border-slate-300 shadow-xs">
                <table className="w-full text-xs text-left border-collapse">
                  <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-300 text-center">
                    <tr>
                      <th className="p-2 border border-slate-300 w-1/4 text-center font-bold" rowSpan={2}>
                        Mạch kiến thức, kĩ năng
                      </th>
                      <th className="p-2 border border-slate-300 w-24 text-center font-bold" rowSpan={2}>
                        Số câu và số điểm
                      </th>
                      <th className="p-2 border border-slate-300 bg-emerald-50 text-emerald-900 font-bold" colSpan={2}>
                        Mức 1
                      </th>
                      <th className="p-2 border border-slate-300 bg-amber-50 text-amber-900 font-bold" colSpan={2}>
                        Mức 2
                      </th>
                      <th className="p-2 border border-slate-300 bg-purple-50 text-purple-900 font-bold" colSpan={2}>
                        Mức 3
                      </th>
                      <th className="p-2 border border-slate-300 bg-slate-200 text-slate-900 font-bold" colSpan={2}>
                        Tổng
                      </th>
                    </tr>
                    <tr className="text-[11px] font-bold">
                      <th className="p-1 border border-slate-300 bg-emerald-50/70 text-emerald-900">TNKQ</th>
                      <th className="p-1 border border-slate-300 bg-emerald-50/70 text-emerald-900">TL</th>
                      <th className="p-1 border border-slate-300 bg-amber-50/70 text-amber-900">TNKQ</th>
                      <th className="p-1 border border-slate-300 bg-amber-50/70 text-amber-900">TL</th>
                      <th className="p-1 border border-slate-300 bg-purple-50/70 text-purple-900">TNKQ</th>
                      <th className="p-1 border border-slate-300 bg-purple-50/70 text-purple-900">TL</th>
                      <th className="p-1 border border-slate-300 bg-slate-200/80 text-slate-900">TNKQ</th>
                      <th className="p-1 border border-slate-300 bg-slate-200/80 text-slate-900">TL</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-medium">
                    {matrixData.matrixRows.map((row, idx) => {
                      const m1TnC = row.m1?.tnCount ?? 0;
                      const m1TlC = row.m1?.tlCount ?? 0;
                      const m2TnC = row.m2?.tnCount ?? 0;
                      const m2TlC = row.m2?.tlCount ?? 0;
                      const m3TnC = row.m3?.tnCount ?? 0;
                      const m3TlC = row.m3?.tlCount ?? 0;
                      const totalTnC = row.total?.tnCount ?? (m1TnC + m2TnC + m3TnC);
                      const totalTlC = row.total?.tlCount ?? (m1TlC + m2TlC + m3TlC);

                      const m1TnP = row.m1?.tnPoints ?? (m1TnC > 0 && !m1TlC ? row.m1?.points : 0);
                      const m1TlP = row.m1?.tlPoints ?? 0;
                      const m2TnP = row.m2?.tnPoints ?? (m2TnC > 0 && !m2TlC ? row.m2?.points : 0);
                      const m2TlP = row.m2?.tlPoints ?? 0;
                      const m3TnP = row.m3?.tnPoints ?? 0;
                      const m3TlP = row.m3?.tlPoints ?? (m3TlC > 0 && !m3TnC ? row.m3?.points : 0);
                      const totalTnP = row.total?.tnPoints ?? (m1TnP + m2TnP + m3TnP);
                      const totalTlP = row.total?.tlPoints ?? (m1TlP + m2TlP + m3TlP);

                      return (
                        <React.Fragment key={row.topicId || idx}>
                          <tr className="hover:bg-slate-50/60">
                            <td className="p-2 font-semibold text-slate-800 border border-slate-300 align-middle" rowSpan={3}>
                              {row.topicName}
                            </td>
                            <td className="p-1.5 text-slate-700 font-medium border border-slate-300 text-center bg-slate-50/50">
                              Số câu
                            </td>
                            <td className="p-1.5 text-center text-emerald-800 font-bold border border-slate-300">{m1TnC || ''}</td>
                            <td className="p-1.5 text-center text-emerald-800 font-bold border border-slate-300">{m1TlC || ''}</td>
                            <td className="p-1.5 text-center text-amber-800 font-bold border border-slate-300">{m2TnC || ''}</td>
                            <td className="p-1.5 text-center text-amber-800 font-bold border border-slate-300">{m2TlC || ''}</td>
                            <td className="p-1.5 text-center text-purple-800 font-bold border border-slate-300">{m3TnC || ''}</td>
                            <td className="p-1.5 text-center text-purple-800 font-bold border border-slate-300">{m3TlC || ''}</td>
                            <td className="p-1.5 text-center font-bold text-slate-900 border border-slate-300 bg-slate-50">{totalTnC || ''}</td>
                            <td className="p-1.5 text-center font-bold text-slate-900 border border-slate-300 bg-slate-50">{totalTlC || ''}</td>
                          </tr>
                          <tr className="hover:bg-slate-50/60">
                            <td className="p-1.5 text-slate-700 font-medium border border-slate-300 text-center bg-slate-50/50">
                              Câu số
                            </td>
                            <td className="p-1.5 text-center text-slate-600 border border-slate-300">{row.m1?.tnQuestions || ''}</td>
                            <td className="p-1.5 text-center text-slate-600 border border-slate-300">{row.m1?.tlQuestions || ''}</td>
                            <td className="p-1.5 text-center text-slate-600 border border-slate-300">{row.m2?.tnQuestions || ''}</td>
                            <td className="p-1.5 text-center text-slate-600 border border-slate-300">{row.m2?.tlQuestions || ''}</td>
                            <td className="p-1.5 text-center text-slate-600 border border-slate-300">{row.m3?.tnQuestions || ''}</td>
                            <td className="p-1.5 text-center text-slate-600 border border-slate-300">{row.m3?.tlQuestions || ''}</td>
                            <td className="p-1.5 text-center text-slate-700 font-medium border border-slate-300 bg-slate-50">{row.total?.tnQuestions || ''}</td>
                            <td className="p-1.5 text-center text-slate-700 font-medium border border-slate-300 bg-slate-50">{row.total?.tlQuestions || ''}</td>
                          </tr>
                          <tr className="hover:bg-slate-50/60 border-b border-slate-300">
                            <td className="p-1.5 text-slate-700 font-medium border border-slate-300 text-center bg-slate-50/50">
                              Số điểm
                            </td>
                            <td className="p-1.5 text-center text-emerald-800 font-bold border border-slate-300">{m1TnP ? m1TnP.toFixed(1).replace('.', ',') : ''}</td>
                            <td className="p-1.5 text-center text-emerald-800 font-bold border border-slate-300">{m1TlP ? m1TlP.toFixed(1).replace('.', ',') : ''}</td>
                            <td className="p-1.5 text-center text-amber-800 font-bold border border-slate-300">{m2TnP ? m2TnP.toFixed(1).replace('.', ',') : ''}</td>
                            <td className="p-1.5 text-center text-amber-800 font-bold border border-slate-300">{m2TlP ? m2TlP.toFixed(1).replace('.', ',') : ''}</td>
                            <td className="p-1.5 text-center text-purple-800 font-bold border border-slate-300">{m3TnP ? m3TnP.toFixed(1).replace('.', ',') : ''}</td>
                            <td className="p-1.5 text-center text-purple-800 font-bold border border-slate-300">{m3TlP ? m3TlP.toFixed(1).replace('.', ',') : ''}</td>
                            <td className="p-1.5 text-center font-bold text-slate-900 border border-slate-300 bg-slate-50">{totalTnP ? totalTnP.toFixed(1).replace('.', ',') : ''}</td>
                            <td className="p-1.5 text-center font-bold text-slate-900 border border-slate-300 bg-slate-50">{totalTlP ? totalTlP.toFixed(1).replace('.', ',') : ''}</td>
                          </tr>
                        </React.Fragment>
                      );
                    })}
                    <tr className="bg-slate-100 font-bold text-slate-900">
                      <td className="p-2 text-center border border-slate-300" colSpan={2}>Tổng số câu</td>
                      <td className="p-1.5 text-center border border-slate-300 text-emerald-800">{matrixData.summary?.totalCountRow?.m1Tn ?? '-'}</td>
                      <td className="p-1.5 text-center border border-slate-300 text-emerald-800">{matrixData.summary?.totalCountRow?.m1Tl ?? '-'}</td>
                      <td className="p-1.5 text-center border border-slate-300 text-amber-800">{matrixData.summary?.totalCountRow?.m2Tn ?? '-'}</td>
                      <td className="p-1.5 text-center border border-slate-300 text-amber-800">{matrixData.summary?.totalCountRow?.m2Tl ?? '-'}</td>
                      <td className="p-1.5 text-center border border-slate-300 text-purple-800">{matrixData.summary?.totalCountRow?.m3Tn ?? '-'}</td>
                      <td className="p-1.5 text-center border border-slate-300 text-purple-800">{matrixData.summary?.totalCountRow?.m3Tl ?? '-'}</td>
                      <td className="p-1.5 text-center border border-slate-300 bg-slate-200 text-slate-900 font-black">{matrixData.summary?.totalCountRow?.totalTn ?? '-'}</td>
                      <td className="p-1.5 text-center border border-slate-300 bg-slate-200 text-slate-900 font-black">{matrixData.summary?.totalCountRow?.totalTl ?? '-'}</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold text-slate-900">
                      <td className="p-2 text-center border border-slate-300" colSpan={2}>Số điểm</td>
                      <td className="p-1.5 text-center border border-slate-300 text-emerald-800">{matrixData.summary?.totalPointsRow?.m1Tn ?? '-'}</td>
                      <td className="p-1.5 text-center border border-slate-300 text-emerald-800">{matrixData.summary?.totalPointsRow?.m1Tl ?? '-'}</td>
                      <td className="p-1.5 text-center border border-slate-300 text-amber-800">{matrixData.summary?.totalPointsRow?.m2Tn ?? '-'}</td>
                      <td className="p-1.5 text-center border border-slate-300 text-amber-800">{matrixData.summary?.totalPointsRow?.m2Tl ?? '-'}</td>
                      <td className="p-1.5 text-center border border-slate-300 text-purple-800">{matrixData.summary?.totalPointsRow?.m3Tn ?? '-'}</td>
                      <td className="p-1.5 text-center border border-slate-300 text-purple-800">{matrixData.summary?.totalPointsRow?.m3Tl ?? '-'}</td>
                      <td className="p-1.5 text-center border border-slate-300 bg-slate-200 text-slate-900 font-black">{matrixData.summary?.totalPointsRow?.totalTn ?? '-'}</td>
                      <td className="p-1.5 text-center border border-slate-300 bg-slate-200 text-slate-900 font-black">{matrixData.summary?.totalPointsRow?.totalTl ?? '-'}</td>
                    </tr>
                    <tr className="bg-slate-200/90 font-black text-slate-900">
                      <td className="p-2 text-center border border-slate-300" colSpan={2}>Tỉ lệ %</td>
                      <td className="p-1.5 text-center border border-slate-300 text-emerald-900" colSpan={2}>{matrixData.ratios?.M1 ?? cognitivePcts.m1 ?? 65}%</td>
                      <td className="p-1.5 text-center border border-slate-300 text-amber-900" colSpan={2}>{matrixData.ratios?.M2 ?? cognitivePcts.m2 ?? 20}%</td>
                      <td className="p-1.5 text-center border border-slate-300 text-purple-900" colSpan={2}>{matrixData.ratios?.M3 ?? cognitivePcts.m3 ?? 15}%</td>
                      <td className="p-1.5 text-center border border-slate-300 bg-slate-300 text-slate-950 font-black" colSpan={2}>100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="flex justify-between pt-4 border-t border-slate-100">
            <button
              onClick={() => setCurrentStep(2)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs hover:bg-slate-50"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại</span>
            </button>
            <button
              onClick={() => setCurrentStep(4)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all"
            >
              <span>Tiếp tục: Dạng câu hỏi & Số câu TL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ================================= STEP 4 ================================= */}
      {currentStep === 4 && (
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-6">
          <div>
            <h3 className="text-base font-bold text-slate-800">Bước 4: Linh hoạt Lựa chọn Dạng Trắc nghiệm & Số câu Tự luận</h3>
            <p className="text-xs text-slate-500 mt-1">
              Thầy cô có thể chọn cụ thể các dạng trắc nghiệm mong muốn và ấn định số câu tự luận theo yêu cầu của tổ chuyên môn.
            </p>
          </div>

          {/* NHÓM 1: CÁC DẠNG TRẮC NGHIỆM KHÁCH QUAN (TNKQ) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider text-emerald-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Nhóm 1: Các dạng Trắc nghiệm khách quan (TNKQ)
              </span>
              <span className="text-[11px] text-slate-400">Chọn ít nhất 1 dạng</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'multiple_choice', title: '1. Trắc nghiệm 4 lựa chọn (MCQ)', desc: 'Mặc định A-B-C-D với Distractor phản ánh lỗi tư duy tính toán và nhầm lẫn khái niệm.' },
                { id: 'true_false', title: '2. Đúng - Sai theo chùm (a, b, c, d)', desc: 'Một ngữ liệu chung kèm 4 mệnh đề độc lập, rèn luyện tư duy kiểm chứng và phản biện.' },
                { id: 'fill_in_the_blank', title: '3. Điền khuyết (từ, số, đơn vị, kết quả)', desc: 'Điền kết quả tính toán hoặc thuật ngữ; hệ thống hỗ trợ chấm linh hoạt theo danh sách tương đương.' },
                { id: 'matching', title: '4. Ghép đôi (Cột A → Cột B)', desc: 'Nối phép tính với kết quả, khái niệm với ví dụ; có phương án nhiễu chống đoán mò.' },
              ].map((t) => (
                <div
                  key={t.id}
                  onClick={() => setQuestionTypes({ ...questionTypes, [t.id]: !questionTypes[t.id] })}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                    questionTypes[t.id]
                      ? 'border-emerald-300 bg-emerald-50/50 shadow-xs ring-1 ring-emerald-500/20'
                      : 'border-slate-200 bg-white opacity-60'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={questionTypes[t.id]}
                    onChange={() => {}}
                    className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 mt-0.5"
                  />
                  <div>
                    <div className="font-bold text-xs text-slate-800">{t.title}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NHÓM 2: DẠNG TỰ LUẬN (TL) VÀ LỰA CHỌN SỐ CÂU */}
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider text-blue-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Nhóm 2: Dạng Tự luận (TL) & Lựa chọn số câu
              </span>
              <span className="text-[11px] text-slate-400">Kèm Rubric chấm điểm chi tiết</span>
            </div>

            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/40 space-y-3">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={questionTypes.constructed_response}
                  onChange={(e) => setQuestionTypes({ ...questionTypes, constructed_response: e.target.checked })}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 mt-0.5"
                />
                <div>
                  <div className="font-bold text-xs text-slate-800">Bật phần Tự luận trong đề kiểm tra</div>
                  <div className="text-[11px] text-slate-600 mt-0.5">
                    Giải toán có lời văn, đặt tính rồi tính, giải thích phương án, hoặc viết đoạn văn theo yêu cầu.
                  </div>
                </div>
              </div>

              {questionTypes.constructed_response && (
                <div className="pt-2 border-t border-blue-200/60 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="font-semibold text-slate-700">Lựa chọn chính xác số câu tự luận trong đề:</span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {[0, 1, 2, 3, 4, 5].map((cnt) => (
                      <button
                        key={cnt}
                        type="button"
                        onClick={() => {
                          setSelectedEssayCount(cnt);
                          const newTl = cnt;
                          const newTn = 10 - newTl;
                          // Cập nhật ma trận chính xác
                          fetchJson('/matrix/generate', {
                            method: 'POST',
                            body: JSON.stringify({
                              grade: examInfo.grade,
                              subject: examInfo.subject,
                              semester: examInfo.semester,
                              durationMinutes: examInfo.durationMinutes,
                              totalPoints: examInfo.totalPoints,
                              presetId: matrixPreset,
                              customRatios: {
                                M1: cognitivePcts.m1,
                                M2: cognitivePcts.m2,
                                M3: cognitivePcts.m3
                              },
                              mode: examInfo.mode,
                              topics: availableTopics.filter(t => selectedTopicIds.includes(t.topicId)).map(t => ({ topicName: t.topicName, learningOutcomes: t.lessons.map(l => l.title) })),
                              customCounts: {
                                tlTotal: newTl,
                                tnTotal: newTn
                              }
                            })
                          }).then(res => {
                            if (res.matrix) setMatrixData(res.matrix);
                          });
                        }}
                        className={`px-2.5 py-1.5 rounded-lg font-bold text-xs transition-all ${
                          (selectedEssayCount === cnt || matrixData?.summary?.totalTlCount === cnt)
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-white border border-blue-200 text-blue-700 hover:bg-blue-100'
                        }`}
                      >
                        {cnt === 0 ? '0 câu (100% TN)' : `${cnt} câu TL`}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between pt-4 border-t border-slate-100">
            <button
              onClick={() => setCurrentStep(3)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs hover:bg-slate-50"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại</span>
            </button>
            <button
              onClick={() => setCurrentStep(5)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all"
            >
              <span>Tiếp tục: Bối cảnh SEA-PLM</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ================================= STEP 5 ================================= */}
      {currentStep === 5 && (
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-800">Bước 5: Định hướng Bối cảnh thực tế SEA-PLM & Địa phương hóa</h3>
              <p className="text-xs text-slate-500 mt-1">
                Tạo tình huống có nghĩa (Contextual tasks) thay vì bài toán chay, giúp học sinh vận dụng vào đời sống.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-600">Bật SEA-PLM:</span>
              <input
                type="checkbox"
                checked={seaPlmSettings.enableSeaPlm}
                onChange={(e) => setSeaPlmSettings({ ...seaPlmSettings, enableSeaPlm: e.target.checked })}
                className="w-5 h-5 rounded text-emerald-600 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Cấu hình số lượng câu hỏi SEA-PLM */}
          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  Số lượng câu hỏi sử dụng bối cảnh thực tế SEA-PLM trong đề:
                </span>
                <p className="text-[11px] text-emerald-800 mt-0.5">
                  Các câu còn lại sẽ <strong>100% bám sát bài học SGK & KHDH chuẩn GDPT 2018 và Thông tư 27</strong> (không mang ngữ cảnh địa phương/mở rộng).
                </p>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-emerald-300 shadow-xs">
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={seaPlmQuestionCount}
                  onChange={(e) => setSeaPlmQuestionCount(Math.max(0, Math.min(10, Number(e.target.value))))}
                  className="w-12 text-center font-black text-sm text-emerald-800 outline-none"
                />
                <span className="text-xs font-bold text-slate-600">câu</span>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap pt-1">
              <span className="text-[11px] text-slate-500 font-medium">Chọn nhanh:</span>
              {[
                { count: 0, label: "0 câu (100% chuẩn SGK & TT 27)" },
                { count: 1, label: "1 câu" },
                { count: 2, label: "2 câu (Khuyến nghị)" },
                { count: 3, label: "3 câu" },
                { count: 4, label: "4 câu" }
              ].map(opt => (
                <button
                  key={opt.count}
                  type="button"
                  onClick={() => setSeaPlmQuestionCount(opt.count)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    Number(seaPlmQuestionCount) === opt.count
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-white border border-emerald-200 text-emerald-800 hover:bg-emerald-100'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-slate-800">Bối cảnh Cá nhân</span>
                <input
                  type="checkbox"
                  checked={seaPlmSettings.contextPersonal}
                  onChange={(e) => setSeaPlmSettings({ ...seaPlmSettings, contextPersonal: e.target.checked })}
                  className="w-4 h-4 rounded text-emerald-600"
                />
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Tiền mừng tuổi, mua dụng cụ học tập, lập thời gian biểu rèn luyện sức khỏe cá nhân.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-slate-800">Bối cảnh Nhà trường</span>
                <input
                  type="checkbox"
                  checked={seaPlmSettings.contextSchool}
                  onChange={(e) => setSeaPlmSettings({ ...seaPlmSettings, contextSchool: e.target.checked })}
                  className="w-4 h-4 rounded text-emerald-600"
                />
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Kế hoạch gom rác tái chế đổi cây xanh, mượn sách thư viện, tổ chức hội chợ trường học.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-indigo-200 bg-indigo-50/50 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-indigo-900 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                  Địa phương Vĩnh Long
                </span>
                <input
                  type="checkbox"
                  checked={seaPlmSettings.contextVinhLong}
                  onChange={(e) => setSeaPlmSettings({ ...seaPlmSettings, contextVinhLong: e.target.checked })}
                  className="w-4 h-4 rounded text-indigo-600"
                />
              </div>
              <p className="text-[11px] text-indigo-700 leading-relaxed">
                Bưởi Năm Roi Bình Minh, gốm đỏ Mang Thít, dừa sáp Cầu Kè, phà cù lao An Bình vượt sông Cổ Chiên.
              </p>
            </div>
          </div>

          {apiError && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="font-bold text-sm">Lỗi kết nối / sinh đề Google Gemini AI</div>
                <div className="text-xs leading-relaxed">{apiError}</div>
                <div className="text-[11px] text-red-500 font-medium">Hệ thống tuân thủ cấu hình sinh đề trực tuyến 100% (chế độ sinh đề offline có sẵn đã được vô hiệu hóa). Vui lòng kiểm tra lại kết nối mạng hoặc cập nhật khóa API trong mục Cài đặt!</div>
              </div>
            </div>
          )}

          <div className="flex justify-between pt-4 border-t border-slate-100">
            <button
              onClick={() => setCurrentStep(4)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs hover:bg-slate-50"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại</span>
            </button>
            <button
              onClick={handleGenerateExam}
              disabled={loading}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-sm shadow-md shadow-emerald-200 transition-all"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span>{loading ? 'AI đang sinh & kiểm định đề...' : 'Tiến hành Sinh đề & Thẩm định AI'}</span>
            </button>
          </div>
        </div>
      )}

      {/* ================================= STEP 6 ================================= */}
      {currentStep === 6 && generatedExam && (
        <div className="space-y-6">
          {/* Quality Summary Header */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-black text-xs">
                  {generatedExam.statistics.overallQualityScore}% ĐẠT CHUẨN
                </span>
                <h3 className="font-extrabold text-slate-800 text-base">
                  BÁO CÁO THẨM ĐỊNH CHẤT LƯỢNG ĐỀ THI
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Đã kiểm định tự động 10 tiêu chí Thông tư 27 & SEA-PLM: {generatedExam.questions.length} câu hỏi • {generatedExam.statistics.passedCount} câu đạt chuẩn tuyệt đối • {generatedExam.statistics.warningCount} câu cần giáo viên xem lại
              </p>
            </div>

            <button
              onClick={() => onExamReady(generatedExam)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Duyệt & Chuyển sang Xuất bản Word / PDF</span>
            </button>
          </div>

          {/* TIẾNG ANH: TỔNG QUAN 4 KỸ NĂNG VÀ AUDIO TRANSCRIPTS */}
          {generatedExam.isEnglish && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-700 to-indigo-700 text-white flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center font-bold text-lg">
                    🇬🇧
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base tracking-tight">ĐỀ THI TIẾNG ANH CHUẨN 4 KỸ NĂNG (10,0 ĐIỂM)</h4>
                    <p className="text-xs text-sky-100">
                      Listening ({generatedExam.skillsRatio?.listening || 3}đ) • Reading ({generatedExam.skillsRatio?.reading || 2.5}đ) • Writing ({generatedExam.skillsRatio?.writing || 2.5}đ) • Speaking ({generatedExam.skillsRatio?.speaking || 2}đ)
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold text-yellow-300 border border-white/20">
                  Global Success & TT 27
                </span>
              </div>

              {/* Thông báo kịch bản bài nghe */}
              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🎙️</span>
                  <div>
                    <strong className="text-sky-950 text-xs block">Đã tạo kịch bản Audio Transcript đầy đủ cho toàn bộ các Task nghe</strong>
                    <span className="text-[11px] text-slate-500">Giáo viên có thể đọc hoặc dùng file ghi âm phát thanh cho học sinh làm bài.</span>
                  </div>
                </div>
                <button
                  onClick={() => onExamReady && onExamReady(generatedExam)}
                  className="px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-all shadow-xs"
                >
                  Xem Đề & Audio Transcripts
                </button>
              </div>
            </div>
          )}

          {/* TIẾNG VIỆT: PHẦN I - KIỂM TRA ĐỌC (HIỂN THỊ RÕ RÀNG BÀI ĐỌC HIỂU CTST) */}
          {generatedExam.isTiengViet && (
            <div className="space-y-4">
              {/* Tiêu đề Phần Đọc */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-700 to-indigo-700 text-white flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center font-bold text-lg">
                    📖
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base tracking-tight">A. PHẦN KIỂM TRA ĐỌC (10,0 ĐIỂM)</h4>
                    <p className="text-xs text-purple-100">
                      Bao gồm: Đọc thành tiếng ({generatedExam.readingExam?.oralPart?.score?.toFixed(1)?.replace('.', ',') || '4,0'}đ) & Đọc hiểu ({generatedExam.readingExam?.comprehensionPart?.score?.toFixed(1)?.replace('.', ',') || '6,0'}đ)
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold text-yellow-300 border border-white/20">
                  Chuẩn Thông tư 27
                </span>
              </div>

              {/* I. Đọc thành tiếng */}
              <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-3">
                <div className="flex items-center justify-between border-b border-purple-200/80 pb-2">
                  <div className="font-bold text-sm text-purple-950 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-purple-700 text-white text-xs font-bold flex items-center justify-center">I</span>
                    <span>ĐỌC THÀNH TIẾNG ({generatedExam.readingExam?.oralPart?.score?.toFixed(1)?.replace('.', ',') || '4,0'} điểm)</span>
                  </div>
                  <span className="text-[11px] text-purple-700 font-semibold italic">
                    Học sinh bốc thăm 1 bài • Thời gian đọc ~1 phút
                  </span>
                </div>
                <p className="text-xs text-slate-600 italic">
                  * Học sinh bốc thăm đọc một đoạn văn/thơ trong bộ sách Tiếng Việt {generatedExam.grade} (SGK Kết nối tri thức với cuộc sống) và trả lời câu hỏi đọc hiểu của thầy/cô:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(generatedExam.readingExam?.oralItems || []).map((item, idx) => (
                    <div key={idx} className="p-2.5 bg-white rounded-xl border border-purple-100 shadow-2xs flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-purple-950">{idx + 1}. {item.title}</strong>
                      </div>
                      <span className="text-[11px] px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 font-bold">
                        {item.bookVolume || 'Tập 1'} • {item.page || ''}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* II. Đọc thầm và làm bài tập: KHUNG VĂN BẢN ĐỌC HIỂU */}
              <div className="p-5 rounded-2xl bg-amber-50/80 border-2 border-amber-300 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-amber-200 pb-2">
                  <div className="font-bold text-sm text-amber-950 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-amber-600 text-white text-xs font-bold flex items-center justify-center">II</span>
                    <span>ĐỌC THẦM VÀ LÀM BÀI TẬP ({generatedExam.readingExam?.comprehensionPart?.score?.toFixed(1)?.replace('.', ',') || '6,0'} điểm)</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-200/80 text-amber-900 text-[11px] font-bold">
                    {generatedExam.readingExam?.comprehensionReading?.categoryName || 'Văn bản đọc hiểu chuẩn GDPT 2018'}
                  </span>
                </div>

                {/* Tiêu đề và tác giả bài đọc */}
                <div className="text-center pt-1">
                  <h4 className="font-black text-lg text-amber-950 uppercase tracking-wide">
                    {generatedExam.readingExam?.comprehensionReading?.title || 'Bài đọc hiểu'}
                  </h4>
                  {generatedExam.readingExam?.comprehensionReading?.author && (
                    <p className="text-xs text-amber-800 italic mt-0.5">
                      Tác giả: {generatedExam.readingExam?.comprehensionReading?.author}
                    </p>
                  )}
                  {generatedExam.readingExam?.comprehensionReading?.theme && (
                    <div className="text-[11px] text-amber-700 mt-1">
                      Chủ điểm: <strong>{generatedExam.readingExam?.comprehensionReading?.theme}</strong>
                      {generatedExam.readingExam?.comprehensionReading?.genre ? ` • Thể loại: ${generatedExam.readingExam?.comprehensionReading?.genre}` : ''}
                      {generatedExam.readingExam?.comprehensionReading?.wordCount ? ` • ~${generatedExam.readingExam?.comprehensionReading?.wordCount} từ` : ''}
                    </div>
                  )}
                </div>

                {/* Toàn văn bài đọc */}
                <div className="bg-white/90 p-4 rounded-xl border border-amber-200 text-slate-800 text-sm leading-relaxed text-justify italic whitespace-pre-line shadow-2xs">
                  {generatedExam.readingExam?.comprehensionReading?.passage}
                </div>

                <div className="text-[11px] text-amber-900 font-semibold italic flex items-center gap-1.5 pt-1">
                  <span>👇 Thầy cô duyệt 7 câu hỏi đọc hiểu & Luyện từ và câu bám sát văn bản trên theo 3 mức độ TT27:</span>
                </div>
              </div>
            </div>
          )}

          {/* List of Generated Questions with AI Critic & Rationale */}
          <div className="space-y-4">
            {generatedExam.questions.map((q, idx) => {
              const levelColor = q.level === 'M1' ? 'emerald' : q.level === 'M2' ? 'amber' : 'purple';
              return (
                <div
                  key={q.questionId}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3.5 hover:border-emerald-300 transition-all"
                >
                  {/* Top line: Number, ID, Level badge, Action controls */}
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-slate-800 text-white font-bold text-xs flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span className="font-mono text-xs font-semibold text-slate-500">{q.questionId}</span>
                      <span className={`px-2 py-0.5 rounded-md font-bold text-xs bg-${levelColor}-100 text-${levelColor}-800`}>
                        {q.level === 'M1' ? 'Mức 1 (Nhận biết)' : q.level === 'M2' ? 'Mức 2 (Kết nối)' : 'Mức 3 (Vận dụng)'}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">({q.points} điểm)</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {/* Nút: Vì sao là Mức X? */}
                      <button
                        onClick={() => handleExplainLevel(q)}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-[11px] font-bold text-slate-600 transition-all"
                      >
                        <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                        <span>Vì sao là {q.level}?</span>
                      </button>

                      {/* Nâng mức */}
                      {q.level !== 'M3' && (
                        <button
                          onClick={() => handleUpgradeLevel(idx)}
                          title="Nâng lên mức độ cao hơn"
                          className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-50 hover:bg-purple-100 text-[11px] font-bold text-purple-700 transition-all"
                        >
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>{q.level === 'M1' ? 'M1 → M2' : 'M2 → M3'}</span>
                        </button>
                      )}

                      {/* Hạ mức */}
                      {q.level !== 'M1' && (
                        <button
                          onClick={() => handleDowngradeLevel(idx)}
                          title="Hạ xuống mức độ thấp hơn"
                          className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-[11px] font-bold text-amber-700 transition-all"
                        >
                          <TrendingDown className="w-3.5 h-3.5" />
                          <span>{q.level === 'M3' ? 'M3 → M2' : 'M2 → M1'}</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Stimulus / Context */}
                  {q.stimulus && q.stimulus.text && (
                    <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100 text-xs text-slate-700 italic">
                      <strong>[Bối cảnh / Tình huống]:</strong> {q.stimulus.text}
                    </div>
                  )}

                  {/* Question Text */}
                  <div className="text-sm font-semibold text-slate-800 leading-relaxed whitespace-pre-line">
                    {q.questionText}
                  </div>

                  {/* Options (if multiple choice) */}
                  {q.options && q.options.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {q.options.map((opt) => (
                        <div
                          key={opt.id}
                          className={`p-2.5 rounded-xl border text-xs flex items-start gap-2 ${
                            opt.isCorrect
                              ? 'bg-emerald-50/70 border-emerald-300 text-emerald-900 font-bold'
                              : 'bg-white border-slate-200 text-slate-700'
                          }`}
                        >
                          <span className={`w-5 h-5 rounded-md flex items-center justify-center font-bold shrink-0 ${
                            opt.isCorrect ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'
                          }`}>
                            {opt.id}
                          </span>
                          <div className="flex-1">
                            <div>{opt.text}</div>
                            {opt.distractorRationale && !opt.isCorrect && (
                              <div className="text-[10px] text-slate-400 font-normal mt-0.5">
                                Căn cứ nhiễu: {opt.distractorRationale}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Answer & Rubric */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-700">Đáp án chuẩn:</span>
                      <span className="font-bold text-emerald-700">{q.correctAnswer}</span>
                    </div>
                    {q.scoringGuide?.rubric && (
                      <div className="space-y-0.5 pt-1 text-[11px] text-slate-600">
                        {q.scoringGuide.rubric.map((r, rIdx) => (
                          <div key={rIdx}>• {r.criteria}: <strong>{r.points} đ</strong> ({r.description})</div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* AI Critic Comment */}
                  {q.validatorResult?.criticRemarks && (
                    <div className="p-2.5 rounded-xl bg-amber-50/60 border border-amber-200/80 text-[11px] text-amber-900 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>Nhận xét của Giáo viên phản biện (AI Critic):</strong> {q.validatorResult.criticRemarks}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* TIẾNG VIỆT: PHẦN II - KIỂM TRA VIẾT (10,0 ĐIỂM) */}
          {generatedExam.isTiengViet && generatedExam.writingExam && (
            <div className="space-y-4 pt-2">
              {/* Tiêu đề Phần Viết */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-700 to-teal-700 text-white flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center font-bold text-lg">
                    ✍️
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base tracking-tight">B. PHẦN KIỂM TRA VIẾT (10,0 ĐIỂM)</h4>
                    <p className="text-xs text-emerald-100">
                      {generatedExam.grade <= 3
                        ? `Chính tả nghe - viết (${generatedExam.writingExam.dictation?.score || 4}đ) & Viết đoạn văn (${generatedExam.writingExam.paragraphWriting?.score || 6}đ)`
                        : 'Bài văn hoàn chỉnh (10,0đ) kèm Barem chấm 5 tiêu chí theo Thông tư 27'}
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold text-yellow-300 border border-white/20">
                  Phiếu Đề Viết riêng biệt
                </span>
              </div>

              {/* Chi tiết đề viết Lớp 1-3 */}
              {generatedExam.grade <= 3 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Chính tả */}
                  {generatedExam.writingExam.dictation && (
                    <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-xs space-y-2.5">
                      <div className="flex items-center justify-between border-b border-emerald-100 pb-2">
                        <span className="font-bold text-xs text-emerald-900 uppercase">1. Chính tả (Nghe - viết)</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                          {generatedExam.writingExam.dictation.score} điểm
                        </span>
                      </div>
                      <div className="font-bold text-slate-800 text-sm text-center">
                        {generatedExam.writingExam.dictation.title}
                        {generatedExam.writingExam.dictation.author && (
                          <span className="block font-normal italic text-xs text-slate-500">
                            - {generatedExam.writingExam.dictation.author}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100 italic leading-relaxed text-justify">
                        "{generatedExam.writingExam.dictation.content}"
                      </p>
                    </div>
                  )}

                  {/* Viết đoạn văn */}
                  {generatedExam.writingExam.paragraphWriting && (
                    <div className="p-4 rounded-2xl bg-white border border-teal-200 shadow-xs space-y-2.5">
                      <div className="flex items-center justify-between border-b border-teal-100 pb-2">
                        <span className="font-bold text-xs text-teal-900 uppercase">2. Viết đoạn văn</span>
                        <span className="px-2 py-0.5 rounded bg-teal-100 text-teal-800 text-[11px] font-bold">
                          {generatedExam.writingExam.paragraphWriting.score} điểm
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-slate-800 leading-relaxed">
                        <strong>Đề bài:</strong> {generatedExam.writingExam.paragraphWriting.prompt}
                      </div>
                      {generatedExam.writingExam.paragraphWriting.suggestions && (
                        <div className="p-2.5 rounded-xl bg-teal-50/50 border border-teal-100 text-[11px] text-teal-900 space-y-1">
                          <strong>Gợi ý dàn ý:</strong>
                          <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                            {generatedExam.writingExam.paragraphWriting.suggestions}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Chi tiết đề viết Lớp 4-5 (Tập làm văn 10đ) */}
              {generatedExam.grade >= 4 && generatedExam.writingExam.essay && (
                <div className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-xs space-y-3.5">
                  <div className="flex items-center justify-between border-b border-emerald-100 pb-2">
                    <span className="font-bold text-xs text-emerald-900 uppercase">
                      Đề bài Tập làm văn (10,0 điểm) • Thể loại: {generatedExam.writingExam.essay.genre || 'Văn miêu tả / Kể chuyện'}
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-bold">
                      10,0 điểm
                    </span>
                  </div>
                  <div className="text-sm font-bold text-slate-800 p-3 bg-emerald-50/50 rounded-xl border border-emerald-100">
                    {generatedExam.writingExam.essay.prompt}
                  </div>
                  {generatedExam.writingExam.essay.suggestions && (
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 space-y-1">
                      <strong className="text-slate-900">Gợi ý làm bài:</strong>
                      <div className="text-[11px] leading-relaxed whitespace-pre-line text-slate-600">
                        {generatedExam.writingExam.essay.suggestions}
                      </div>
                    </div>
                  )}
                  {generatedExam.writingExam.essay.rubric && (
                    <div className="space-y-1 text-xs">
                      <strong className="text-slate-800">Barem chấm điểm 5 tiêu chí (Thông tư 27):</strong>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {generatedExam.writingExam.essay.rubric.map((r, rIdx) => (
                          <div key={rIdx} className="p-2 rounded-lg bg-slate-50 border border-slate-200/80 text-[11px]">
                            <span className="font-bold text-emerald-800">{r.criteria} ({r.points}đ): </span>
                            <span className="text-slate-600">{r.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* MODAL: Giải thích vì sao là Mức X */}
      {activeExplainModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-xs">
                  {activeExplainModal.explanation.level}
                </span>
                <h4 className="font-bold text-slate-800 text-sm">
                  Căn cứ phân loại Mức độ theo Thông tư 27
                </h4>
              </div>
              <button
                onClick={() => setActiveExplainModal(null)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="font-bold text-slate-700 block mb-0.5">Bản chất thao tác tư duy:</span>
                <p className="text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100 leading-relaxed">
                  {activeExplainModal.explanation.cognitiveTask}
                </p>
              </div>
              <div>
                <span className="font-bold text-slate-700 block mb-0.5">Vì sao không phải mức thấp hơn?</span>
                <p className="text-slate-600 bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-100 leading-relaxed">
                  {activeExplainModal.explanation.whyNotLower}
                </p>
              </div>
              <div>
                <span className="font-bold text-slate-700 block mb-0.5">Vì sao chưa đến mức cao hơn?</span>
                <p className="text-slate-600 bg-amber-50/50 p-2.5 rounded-xl border border-amber-100 leading-relaxed">
                  {activeExplainModal.explanation.whyNotHigher}
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveExplainModal(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold"
              >
                Đã hiểu
              </button>
            </div>
          </div>
        </div>
      )}
        </>
      )}
    </div>
  );
}

