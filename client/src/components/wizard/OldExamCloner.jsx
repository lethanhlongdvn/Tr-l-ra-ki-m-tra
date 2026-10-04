import React, { useState, useRef } from 'react';
import {
  UploadCloud,
  FileText,
  Image as ImageIcon,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  Eye,
  Sliders,
  Check,
  Edit3,
  BookOpen,
  Layers,
  HelpCircle,
  FileCheck2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { fetchJson } from '../../utils/api';

export default function OldExamCloner({ onExamReady, onBackToNormal }) {
  // Các trạng thái của quy trình:
  // 1 = Tải lên & Xem nội dung bóc tách
  // 2 = Xem cấu trúc đề cũ & Tinh chỉnh
  // 3 = Xem đề mới tương tự & Đối so sánh
  const [stage, setStage] = useState(1);
  const [activeTab, setActiveTab] = useState('file'); // 'file' hoặc 'text'

  const [uploadedFile, setUploadedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [rawText, setRawText] = useState('');
  const [parsing, setParsing] = useState(false);
  const [generating, setGenerating] = useState(false);

  // Đề cũ đã bóc tách
  const [parsedOldExam, setParsedOldExam] = useState(null);

  // Đề mới tương tự được sinh ra
  const [clonedExam, setClonedExam] = useState(null);
  const [activeTabSide, setActiveTabSide] = useState('compare'); // 'compare' | 'new_only'
  const [regeneratingIndex, setRegeneratingIndex] = useState(null);

  const fileInputRef = useRef(null);

  // Đề mẫu thử nghiệm nhanh để Thầy/Cô trải nghiệm ngay
  const sampleMathExamText = `UBND XÃ AN TRƯỜNG
TRƯỜNG TIỂU HỌC A AN TRƯỜNG

BÀI KIỂM TRA ĐỊNH KỲ CUỐI HỌC KỲ I - NĂM HỌC 20... - 20...
MÔN: TOÁN - LỚP 4
Thời gian làm bài: 40 phút (Không kể thời gian phát đề)

PHẦN I. TRẮC NGHIỆM KHÁCH QUAN (4,0 điểm)
Khoanh tròn vào chữ cái đặt trước câu trả lời đúng:

Câu 1 (0,5 điểm): Chữ số 5 trong số 354 128 thuộc hàng nào và có giá trị là bao nhiêu?
A. Hàng chục, giá trị là 50
B. Hàng trăm, giá trị là 500
C. Hàng nghìn, giá trị là 5 000
D. Hàng chục nghìn, giá trị là 50 000

Câu 2 (0,5 điểm): Kết quả của phép đổi 3 tấn 25 kg = ......... kg là:
A. 325 kg
B. 3 025 kg
C. 3 250 kg
D. 30 025 kg

Câu 3 (1,0 điểm): Một hình chữ nhật có chiều dài 15 cm, chiều rộng 8 cm. Diện tích của hình chữ nhật đó là:
A. 120 cm²
B. 46 cm²
C. 60 cm²
D. 120 cm

Câu 4 (1,0 điểm): Bác Ba ở huyện Tam Bình thu hoạch được 120 kg bưởi Năm Roi. Bác đã bán được 2/3 số bưởi đó. Hỏi bác Ba còn lại bao nhiêu ki-lô-gam bưởi?
A. 40 kg
B. 80 kg
C. 60 kg
D. 90 kg

Câu 5 (1,0 điểm): Số trung bình cộng của 3 số: 45; 55 và 80 là:
A. 50
B. 60
C. 70
D. 180

PHẦN II. TỰ LUẬN (6,0 điểm)

Câu 6 (2,0 điểm): Đặt tính rồi tính:
a) 245 138 + 132 450
b) 518 200 - 245 100
c) 1 245 × 6
d) 4 872 : 4

Câu 7 (2,5 điểm): Một thửa ruộng hình chữ nhật có nửa chu vi là 140 m. Chiều dài hơn chiều rộng 20 m.
a) Tính chiều dài và chiều rộng của thửa ruộng đó.
b) Người ta trồng lúa trên thửa ruộng, cứ 100 m² thu hoạch được 60 kg thóc. Hỏi cả thửa ruộng thu hoạch được bao nhiêu tạ thóc?

Câu 8 (1,5 điểm): Tính bằng cách thuận tiện nhất:
25 × 7 × 4`;

  // Xử lý chọn tệp từ máy tính
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadedFile(file);

    // Nếu là file ảnh thì tạo preview
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        setFilePreview(evt.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFilePreview(null);
    }
  };

  // Nạp đề thi mẫu
  const handleUseSample = () => {
    setActiveTab('text');
    setRawText(sampleMathExamText);
  };

  // Helper đọc file thành chuỗi Base64
  const fileToBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const res = reader.result;
      const base64 = typeof res === 'string' ? (res.split(',')[1] || res) : '';
      resolve(base64);
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });

  // 1. Phân tích tệp hoặc văn bản đề cũ
  const handleParseOldExam = async () => {
    setParsing(true);
    try {
      let res;
      if (activeTab === 'file' && uploadedFile) {
        // Đọc tệp thành Base64 để truyền qua JSON body an toàn trên cả Local lẫn Vercel Serverless
        const base64Data = await fileToBase64(uploadedFile);
        res = await fetchJson('/exam/parse-old-file', {
          method: 'POST',
          body: JSON.stringify({
            base64Data,
            mimeType: uploadedFile.type || 'application/octet-stream',
            filename: uploadedFile.name
          })
        });
      } else {
        // Gửi nội dung text trực tiếp
        if (!rawText.trim()) {
          alert("Vui lòng dán nội dung đề thi hoặc tải lên một tệp tin!");
          setParsing(false);
          return;
        }
        res = await fetchJson('/exam/parse-old-file', {
          method: 'POST',
          body: JSON.stringify({ rawText })
        });
      }

      if (res.success && res.parsedExam) {
        setParsedOldExam(res.parsedExam);
        if (res.rawText) setRawText(res.rawText);
        setStage(2);
      } else {
        alert(res.error || "Không thể bóc tách đề thi này.");
      }
    } catch (err) {
      console.error(err);
      alert("Lỗi phân tích đề: " + err.message);
    } finally {
      setParsing(false);
    }
  };

  // 2. Sinh đề mới tương tự đồng cấu từ đề cũ
  const handleGenerateParallelExam = async () => {
    if (!parsedOldExam) return;
    setGenerating(true);
    try {
      const res = await fetchJson('/exam/generate-from-old', {
        method: 'POST',
        body: JSON.stringify({
          oldExam: parsedOldExam
        })
      });

      if (res.success && res.exam) {
        setClonedExam(res.exam);
        setStage(3);
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      } else {
        alert(res.error || "Không thể sinh đề tương tự.");
      }
    } catch (err) {
      console.error(err);
      alert("Lỗi khi sinh đề tương tự: " + err.message);
    } finally {
      setGenerating(false);
    }
  };

  // Đổi một câu hỏi trong đề mới tương tự
  const handleRegenerateSingleQuestion = async (idx) => {
    if (!clonedExam || !parsedOldExam) return;
    setRegeneratingIndex(idx);
    try {
      const oldQ = parsedOldExam.questions[idx];
      const res = await fetchJson('/exam/equivalents', {
        method: 'POST',
        body: JSON.stringify({
          question: clonedExam.questions[idx] || oldQ,
          count: 2
        })
      });

      if (res.equivalents && res.equivalents.length > 0) {
        const replacement = res.equivalents[0];
        replacement.itemNumber = idx + 1;
        replacement.points = oldQ.points;
        replacement.level = oldQ.level;
        replacement.questionType = oldQ.questionType;

        const updatedQuestions = [...clonedExam.questions];
        updatedQuestions[idx] = replacement;
        setClonedExam({ ...clonedExam, questions: updatedQuestions });
      }
    } catch (e) {
      console.error("Lỗi đổi câu hỏi:", e);
    } finally {
      setRegeneratingIndex(null);
    }
  };

  // Cập nhật thông tin nhận diện đề cũ
  const updateParsedField = (field, value) => {
    setParsedOldExam(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* Header điều hướng & Trạng thái quy trình */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold shadow-xs">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-800 tracking-tight flex items-center gap-2">
                Tạo Đề Mới Tương Tự Từ Đề Thi Cũ
                <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[11px] font-extrabold uppercase">
                  Đồng cấu 1-1
                </span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Load đề kiểm tra các năm trước (Word, PDF, Ảnh, Text) để AI tạo ra đề thi mới chuẩn Thông tư 27 cùng dạng và thang điểm.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {stage > 1 && (
            <button
              onClick={() => setStage(stage - 1)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Quay lại bước {stage - 1}
            </button>
          )}

          <button
            onClick={onBackToNormal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-all"
          >
            ← Soạn đề theo Ma trận 6 bước
          </button>
        </div>
      </div>

      {/* Thanh tiến trình 3 bước */}
      <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
        <div className="flex items-center justify-around text-xs font-bold">
          <div className={`flex items-center gap-2 ${stage >= 1 ? 'text-purple-700' : 'text-slate-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${stage >= 1 ? 'bg-purple-600 text-white' : 'bg-slate-100'}`}>
              1
            </span>
            <span>Nạp Đề Cũ (Word, PDF, Ảnh)</span>
          </div>

          <div className={`h-0.5 w-12 ${stage >= 2 ? 'bg-purple-500' : 'bg-slate-100'}`} />

          <div className={`flex items-center gap-2 ${stage >= 2 ? 'text-purple-700' : 'text-slate-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${stage >= 2 ? 'bg-purple-600 text-white' : 'bg-slate-100'}`}>
              2
            </span>
            <span>Cấu Trúc Đề & Thang Điểm</span>
          </div>

          <div className={`h-0.5 w-12 ${stage >= 3 ? 'bg-purple-500' : 'bg-slate-100'}`} />

          <div className={`flex items-center gap-2 ${stage >= 3 ? 'text-purple-700' : 'text-slate-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${stage >= 3 ? 'bg-purple-600 text-white' : 'bg-slate-100'}`}>
              3
            </span>
            <span>Đối So Sánh & Xuất Đề Mới</span>
          </div>
        </div>
      </div>

      {/* ================================= STAGE 1: NẠP ĐỀ CŨ ================================= */}
      {stage === 1 && (
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-bold text-slate-800 text-sm">Bước 1: Tải lên đề thi các năm trước</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Hệ thống hỗ trợ tự động bóc tách từ file Word (.docx, .doc), PDF, Ảnh chụp đề thi hoặc dán nội dung trực tiếp.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="inline-flex rounded-xl bg-slate-100 p-1">
                <button
                  onClick={() => setActiveTab('file')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === 'file' ? 'bg-white text-purple-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <UploadCloud className="w-3.5 h-3.5" />
                  Tải tệp tin (DOC, PDF, Ảnh)
                </button>
                <button
                  onClick={() => setActiveTab('text')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === 'text' ? 'bg-white text-purple-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  Dán văn bản đề thi
                </button>
              </div>

              <button
                onClick={handleUseSample}
                className="px-3 py-1.5 rounded-xl border border-purple-200 bg-purple-50 text-purple-700 text-xs font-bold hover:bg-purple-100 transition-all whitespace-nowrap"
              >
                ⚡ Thử với đề Toán mẫu
              </button>
            </div>
          </div>

          {/* Tab 1: Kéo thả tệp tin */}
          {activeTab === 'file' && (
            <div className="space-y-4">
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-purple-200 hover:border-purple-400 bg-purple-50/40 hover:bg-purple-50/70 transition-all rounded-2xl p-8 text-center cursor-pointer space-y-3"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".docx,.doc,.pdf,image/png,image/jpeg,image/jpg,image/webp"
                  onChange={handleFileChange}
                  className="hidden"
                />

                <div className="w-14 h-14 mx-auto rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">
                  <UploadCloud className="w-7 h-7" />
                </div>

                <div>
                  <p className="font-bold text-slate-800 text-sm">
                    {uploadedFile ? uploadedFile.name : "Kéo thả hoặc bấm để chọn tệp đề thi cũ từ máy tính"}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Hỗ trợ Word (<span className="font-semibold text-purple-700">.docx, .doc</span>), PDF (<span className="font-semibold text-purple-700">.pdf</span>) hoặc Ảnh chụp đề (<span className="font-semibold text-purple-700">.png, .jpg, .jpeg</span>)
                  </p>
                </div>

                {uploadedFile && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-purple-200 text-xs font-semibold text-purple-800">
                    <FileCheck2 className="w-4 h-4 text-emerald-600" />
                    <span>Đã chọn: {uploadedFile.name} ({(uploadedFile.size / 1024).toFixed(1)} KB)</span>
                  </div>
                )}
              </div>

              {/* Nếu là ảnh thì hiển thị ảnh xem trước */}
              {filePreview && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                    <span className="flex items-center gap-1.5">
                      <ImageIcon className="w-4 h-4 text-purple-600" />
                      Xem trước ảnh chụp đề thi (AI Vision sẽ đọc chữ từ ảnh):
                    </span>
                    <button
                      onClick={() => { setUploadedFile(null); setFilePreview(null); }}
                      className="text-red-600 hover:underline"
                    >
                      Bỏ chọn ảnh
                    </button>
                  </div>
                  <div className="max-h-60 overflow-hidden rounded-lg border border-slate-200 bg-white flex items-center justify-center">
                    <img src={filePreview} alt="Exam Preview" className="max-h-60 object-contain" />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Dán văn bản */}
          {activeTab === 'text' && (
            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-700">
                Nội dung toàn bộ đề thi cũ (Dán văn bản gồm tiêu đề, các câu trắc nghiệm & tự luận):
              </label>
              <textarea
                rows={12}
                value={rawText}
                onChange={(e) => setRawText(e.target.value)}
                placeholder="Dán đề thi của các năm trước vào đây..."
                className="w-full p-4 rounded-xl border border-slate-200 text-xs leading-relaxed focus:outline-none focus:ring-2 focus:ring-purple-500/20 font-mono"
              />
            </div>
          )}

          {/* Nút thực hiện phân tích */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-400">
              * Hệ thống cam kết giữ nguyên bố cục câu hỏi và mức thang điểm của đề cũ.
            </span>

            <button
              onClick={handleParseOldExam}
              disabled={parsing || (!uploadedFile && !rawText.trim())}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-bold text-xs shadow-md shadow-purple-600/20 transition-all"
            >
              {parsing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Đang đọc & bóc tách cấu trúc đề...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Bóc Tách & Nhận Diện Cấu Trúc Đề →</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* ================================= STAGE 2: XEM CẤU TRÚC ĐỀ CŨ ================================= */}
      {stage === 2 && parsedOldExam && (
        <div className="space-y-5">
          {/* Hộp thông tin nhận diện tự động */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Kết Quả Nhận Diện Đề Cũ
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Kiểm tra lại thông tin môn học, khối lớp và thang điểm trước khi tạo đề mới tương tự.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-xl bg-purple-100 text-purple-800 text-xs font-bold">
                  Tổng: {parsedOldExam.questions?.length || 0} câu ({parsedOldExam.totalPoints || 10} điểm)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Môn học</label>
                <select
                  value={parsedOldExam.subject}
                  onChange={(e) => updateParsedField('subject', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold bg-white"
                >
                  <option value="Toán">Toán</option>
                  <option value="Tiếng Việt">Tiếng Việt</option>
                  <option value="Tiếng Anh">Tiếng Anh</option>
                  <option value="Khoa học">Khoa học</option>
                  <option value="Lịch sử và Địa lí">Lịch sử và Địa lí</option>
                  <option value="Tin học">Tin học</option>
                  <option value="Công nghệ">Công nghệ</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Khối Lớp</label>
                <select
                  value={parsedOldExam.grade}
                  onChange={(e) => updateParsedField('grade', Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold bg-white"
                >
                  <option value={1}>Lớp 1</option>
                  <option value={2}>Lớp 2</option>
                  <option value={3}>Lớp 3</option>
                  <option value={4}>Lớp 4</option>
                  <option value={5}>Lớp 5</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Kỳ kiểm tra</label>
                <select
                  value={parsedOldExam.semester}
                  onChange={(e) => updateParsedField('semester', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold bg-white"
                >
                  <option value="Giữa học kỳ I">Giữa học kỳ I</option>
                  <option value="Cuối học kỳ I">Cuối học kỳ I</option>
                  <option value="Giữa học kỳ II">Giữa học kỳ II</option>
                  <option value="Cuối năm">Cuối năm</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Thời gian làm bài</label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    value={parsedOldExam.durationMinutes}
                    onChange={(e) => updateParsedField('durationMinutes', Number(e.target.value))}
                    className="w-20 px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-center"
                  />
                  <span className="text-xs text-slate-500">phút</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Cơ quan quản lý <span className="text-[10px] text-emerald-700 font-semibold">(Không còn PGD)</span>
                </label>
                <input
                  type="text"
                  value={parsedOldExam.governingBody || 'UBND XÃ AN TRƯỜNG'}
                  onChange={(e) => updateParsedField('governingBody', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Tên trường Tiểu học</label>
                <input
                  type="text"
                  value={parsedOldExam.schoolName || 'Trường Tiểu học A An Trường'}
                  onChange={(e) => updateParsedField('schoolName', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
                />
              </div>
            </div>
          </div>

          {/* Danh sách các câu hỏi đã bóc tách từ đề cũ */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-800 text-sm">
                Danh Sách Câu Hỏi Bóc Tách Từ Đề Cũ ({parsedOldExam.questions?.length} câu)
              </h3>
              <span className="text-xs text-slate-500">
                Đề mới sẽ được sinh tương ứng 1-1 theo từng câu bên dưới.
              </span>
            </div>

            <div className="space-y-3">
              {parsedOldExam.questions?.map((q, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 hover:border-purple-300 bg-slate-50/50 space-y-2 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-purple-600 text-white font-bold text-xs flex items-center justify-center">
                        {q.itemNumber || (idx + 1)}
                      </span>
                      <span className="font-bold text-slate-800 text-xs">
                        Câu {q.itemNumber || (idx + 1)}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-200/80 text-slate-700 text-[11px] font-semibold">
                        {q.questionType === 'multiple_choice' ? 'Trắc nghiệm' : 'Tự luận'}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 text-[11px] font-bold">
                        {q.level || 'M1'}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {q.points} điểm
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 line-clamp-2">
                    {q.questionText}
                  </p>

                  {q.options && q.options.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-1">
                      {q.options.map(opt => (
                        <div key={opt.id} className="text-[11px] text-slate-600 bg-white px-2 py-1 rounded border border-slate-200 truncate">
                          <strong className="text-purple-700">{opt.id}.</strong> {opt.text}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Nút hành động */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={() => setStage(1)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50"
              >
                ← Tải đề khác
              </button>

              <button
                onClick={handleGenerateParallelExam}
                disabled={generating}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-bold text-xs shadow-md shadow-purple-600/20 transition-all"
              >
                {generating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Đang sinh đề thi mới tương tự...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Sinh Đề Thi Mới Tương Tự (Đồng Cấu 1-1) →</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================================= STAGE 3: ĐỐI SO SÁNH & XUẤT ĐỀ MỚI ================================= */}
      {stage === 3 && clonedExam && parsedOldExam && (
        <div className="space-y-6">
          {/* Header kết quả */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-900 to-indigo-900 text-white shadow-lg space-y-3">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-purple-500/40 text-purple-200 text-[11px] font-bold uppercase border border-purple-400/30">
                  Đã tạo đề mới thành công
                </span>
                <h3 className="text-lg font-black mt-1">
                  {clonedExam.title || `BÀI KIỂM TRA ĐỊNH KỲ ${clonedExam.subject} LỚP ${clonedExam.grade}`}
                </h3>
                <p className="text-xs text-purple-200/80">
                  Đề thi mới kế thừa chính xác 100% cấu trúc, dạng bài và thang điểm của đề cũ, với nội dung câu hỏi mới hoàn toàn.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onExamReady(clonedExam)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-md shadow-emerald-500/30 transition-all"
                >
                  <Check className="w-4 h-4" />
                  <span>Sử Dụng Đề Này & Xuất Word (.doc / .docx) →</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bộ chuyển đổi chế độ xem so sánh */}
          <div className="flex items-center justify-between">
            <div className="inline-flex rounded-xl bg-white border border-slate-200 p-1 shadow-xs">
              <button
                onClick={() => setActiveTabSide('compare')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTabSide === 'compare' ? 'bg-purple-600 text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Đối So Sánh Song Song (Đề Cũ ↔ Đề Mới)
              </button>
              <button
                onClick={() => setActiveTabSide('new_only')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTabSide === 'new_only' ? 'bg-purple-600 text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Chỉ Xem Đề Mới
              </button>
            </div>

            <div className="text-xs text-slate-500">
              Tổng số câu: <strong className="text-purple-700">{clonedExam.questions?.length} câu</strong> • Tổng điểm: <strong className="text-emerald-700">10,0 điểm</strong>
            </div>
          </div>

          {/* Bảng đối chiếu từng câu */}
          <div className="space-y-4">
            {clonedExam.questions?.map((newQ, idx) => {
              const oldQ = parsedOldExam.questions?.[idx] || {};
              const isRegenerating = regeneratingIndex === idx;

              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3"
                >
                  {/* Tiêu đề câu */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-xl bg-purple-600 text-white font-extrabold text-xs flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <h4 className="font-bold text-slate-800 text-sm">
                        Câu {idx + 1}
                      </h4>
                      <span className="px-2 py-0.5 rounded bg-purple-50 border border-purple-200 text-purple-700 text-[11px] font-bold">
                        {newQ.level || oldQ.level || 'M1'}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-semibold">
                        {newQ.questionType === 'multiple_choice' ? 'Trắc nghiệm 4 lựa chọn' : 'Tự luận'}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-0.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs">
                        {newQ.points || oldQ.points} điểm
                      </span>

                      <button
                        onClick={() => handleRegenerateSingleQuestion(idx)}
                        disabled={isRegenerating}
                        title="Sinh lại câu hỏi này"
                        className="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-slate-200 text-slate-600 hover:text-purple-700 hover:border-purple-300 text-xs font-semibold transition-all"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${isRegenerating ? 'animate-spin text-purple-600' : ''}`} />
                        <span>Đổi câu khác</span>
                      </button>
                    </div>
                  </div>

                  {/* Nội dung so sánh song song */}
                  {activeTabSide === 'compare' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                      {/* Cột trái: Đề cũ */}
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase">
                          <span>Đề cũ của năm trước:</span>
                          <span>{oldQ.points}đ</span>
                        </div>
                        <p className="text-xs text-slate-700 font-medium leading-relaxed">
                          {oldQ.questionText || "Nội dung câu hỏi cũ"}
                        </p>
                        {oldQ.options && oldQ.options.length > 0 && (
                          <div className="grid grid-cols-2 gap-1.5 pt-1 text-[11px] text-slate-600">
                            {oldQ.options.map(opt => (
                              <div key={opt.id} className="bg-white px-2 py-1 rounded border border-slate-200 truncate">
                                <strong>{opt.id}.</strong> {opt.text}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Cột phải: Đề mới tương ứng */}
                      <div className="p-3.5 rounded-xl bg-purple-50/50 border border-purple-200 space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-bold text-purple-900 uppercase">
                          <span className="flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                            Đề mới tương đương (Đồng cấu):
                          </span>
                          <span className="text-emerald-700 font-bold">{newQ.points}đ</span>
                        </div>
                        <p className="text-xs text-slate-900 font-semibold leading-relaxed">
                          {newQ.questionText}
                        </p>

                        {/* Phương án trắc nghiệm đề mới */}
                        {newQ.options && newQ.options.length > 0 && (
                          <div className="grid grid-cols-2 gap-1.5 pt-1 text-[11px]">
                            {newQ.options.map(opt => (
                              <div
                                key={opt.id}
                                className={`px-2 py-1 rounded border font-medium truncate ${
                                  opt.id === newQ.correctAnswer
                                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold'
                                    : 'bg-white border-slate-200 text-slate-700'
                                }`}
                              >
                                <strong className="text-purple-700">{opt.id}.</strong> {opt.text}
                                {opt.id === newQ.correctAnswer && " ✓"}
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Lời giải đề mới */}
                        {newQ.solution && (
                          <div className="text-[11px] text-slate-600 bg-white/80 p-2 rounded border border-slate-200 mt-1">
                            <strong className="text-purple-800">Đáp án / Lời giải:</strong> {newQ.solution}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* Chỉ xem đề mới */
                    <div className="space-y-2">
                      <p className="text-xs text-slate-900 font-semibold leading-relaxed">
                        {newQ.questionText}
                      </p>
                      {newQ.options && newQ.options.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-1 text-xs">
                          {newQ.options.map(opt => (
                            <div
                              key={opt.id}
                              className={`p-2 rounded-xl border ${
                                opt.id === newQ.correctAnswer
                                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold'
                                  : 'bg-slate-50 border-slate-200 text-slate-700'
                              }`}
                            >
                              <strong className="text-purple-700 mr-1">{opt.id}.</strong>
                              {opt.text}
                            </div>
                          ))}
                        </div>
                      )}
                      {newQ.solution && (
                        <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                          <strong className="text-purple-800">Hướng dẫn chấm:</strong> {newQ.solution}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Nút hoàn tất chuyển sang Xem trước & Xuất đề */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-slate-800 text-sm">
                Đề kiểm tra tương tự đã hoàn tất kiểm định!
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Bấm nút bên cạnh để đưa đề vào hệ thống xem trước, trộn 4 mã đề và xuất file Word (.docx, .doc) cỡ chữ 13-14pt.
              </p>
            </div>

            <button
              onClick={() => onExamReady(clonedExam)}
              className="flex items-center gap-2 px-7 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-md shadow-emerald-600/20 transition-all uppercase tracking-wide"
            >
              <Check className="w-4 h-4" />
              <span>Chấp Nhận Đề Này & Xem Trước / Xuất Word</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
