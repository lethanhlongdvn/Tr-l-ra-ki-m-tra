import React, { useState } from 'react';
import {
  Sparkles,
  HelpCircle,
  Copy,
  RefreshCw,
  TrendingUp,
  CheckCircle2,
  Globe2,
  FileText
} from 'lucide-react';
import { fetchJson } from '../../utils/api';

export default function QuickQuestionView() {
  const [activeMode, setActiveMode] = useState('single'); // 'single' or 'from_original'
  
  // Mode 1: Tôi chỉ muốn tạo câu hỏi
  const [singleConfig, setSingleConfig] = useState({
    grade: 4,
    subject: 'Toán',
    topic: 'Phân số và các phép tính với phân số',
    level: 'M2',
    questionType: 'multiple_choice',
    seaPlmMode: true,
  });
  const [generatedSingleQ, setGeneratedSingleQ] = useState(null);
  const [loadingSingle, setLoadingSingle] = useState(false);

  // Mode 2: Tạo từ câu hỏi gốc
  const [originalQuestionText, setOriginalQuestionText] = useState('Tìm hai số khi biết tổng là 45 và hiệu là 9.');
  const [variants, setVariants] = useState([]);
  const [loadingVariants, setLoadingVariants] = useState(false);

  const handleGenerateSingle = async () => {
    setLoadingSingle(true);
    try {
      const res = await fetchJson('/exam/generate', {
        method: 'POST',
        body: JSON.stringify({
          grade: singleConfig.grade,
          subject: singleConfig.subject,
          semester: 'Cuối học kỳ I',
          durationMinutes: 40,
          totalPoints: 10,
          mode: singleConfig.seaPlmMode ? 'TT27_SEA_PLM' : 'TT27'
        })
      });
      if (res.exam && res.exam.questions.length > 0) {
        // Tìm câu hỏi khớp với level yêu cầu
        const match = res.exam.questions.find(q => q.level === singleConfig.level) || res.exam.questions[0];
        setGeneratedSingleQ(match);
      }
    } catch (e) {
      alert("Lỗi: " + e.message);
    } finally {
      setLoadingSingle(false);
    }
  };

  const handleGenerateEquivalents = async () => {
    if (!originalQuestionText.trim()) return;
    setLoadingVariants(true);
    try {
      const baseQ = {
        questionId: 'ORIG-001',
        subject: 'Toán',
        grade: 4,
        level: 'M2',
        questionText: originalQuestionText
      };
      const res = await fetchJson('/exam/equivalents', {
        method: 'POST',
        body: JSON.stringify({ question: baseQ, count: 4 })
      });
      if (res.equivalents) setVariants(res.equivalents);
    } catch (e) {
      alert("Lỗi: " + e.message);
    } finally {
      setLoadingVariants(false);
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* Mode Header */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-extrabold text-slate-800 text-lg">Tạo câu hỏi nhanh & Biến đổi tương đương</h3>
          <p className="text-xs text-slate-500 mt-1">
            Dành cho giáo viên muốn tạo nhanh câu hỏi lẻ bổ sung vào bài dạy hoặc biến đổi câu hỏi gốc có sẵn.
          </p>
        </div>

        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold text-slate-600">
          <button
            onClick={() => setActiveMode('single')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeMode === 'single' ? 'bg-white text-emerald-800 shadow-xs' : 'hover:text-slate-900'
            }`}
          >
            Tạo câu hỏi theo YCCĐ
          </button>
          <button
            onClick={() => setActiveMode('from_original')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeMode === 'from_original' ? 'bg-white text-emerald-800 shadow-xs' : 'hover:text-slate-900'
            }`}
          >
            Biến đổi từ Câu gốc
          </button>
        </div>
      </div>

      {/* MODE 1: SINGLE QUESTION */}
      {activeMode === 'single' && (
        <div className="space-y-5">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Khối Lớp</label>
                <select
                  value={singleConfig.grade}
                  onChange={(e) => setSingleConfig({ ...singleConfig, grade: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white"
                >
                  <option value={1}>Lớp 1</option>
                  <option value={2}>Lớp 2</option>
                  <option value={3}>Lớp 3</option>
                  <option value={4}>Lớp 4</option>
                  <option value={5}>Lớp 5</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Môn học</label>
                <select
                  value={singleConfig.subject}
                  onChange={(e) => setSingleConfig({ ...singleConfig, subject: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white"
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
                <label className="block text-xs font-bold text-slate-700 mb-1">Mức độ (TT 27)</label>
                <select
                  value={singleConfig.level}
                  onChange={(e) => setSingleConfig({ ...singleConfig, level: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white font-bold text-emerald-800"
                >
                  <option value="M1">Mức 1 (Nhận biết 1 thao tác)</option>
                  <option value="M2">Mức 2 (Kết nối đa bước tương tự)</option>
                  <option value="M3">Mức 3 (Vận dụng bối cảnh mới)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Nội dung / Yêu cầu cần đạt</label>
              <input
                type="text"
                value={singleConfig.topic}
                onChange={(e) => setSingleConfig({ ...singleConfig, topic: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={singleConfig.seaPlmMode}
                  onChange={(e) => setSingleConfig({ ...singleConfig, seaPlmMode: e.target.checked })}
                  className="w-4 h-4 text-emerald-600 rounded"
                />
                <span>Áp dụng bối cảnh thực tế SEA-PLM & Địa phương hóa</span>
              </label>

              <button
                onClick={handleGenerateSingle}
                disabled={loadingSingle}
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs shadow-sm transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{loadingSingle ? 'AI đang sinh...' : 'Sinh câu hỏi này'}</span>
              </button>
            </div>
          </div>

          {/* Result Card */}
          {generatedSingleQ && (
            <div className="p-5 rounded-2xl bg-white border border-emerald-300 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold text-xs">
                  {generatedSingleQ.level} • {generatedSingleQ.questionType}
                </span>
                <span className="text-xs text-slate-400 font-mono">{generatedSingleQ.questionId}</span>
              </div>

              {generatedSingleQ.stimulus && (
                <div className="p-3 bg-blue-50/50 rounded-xl text-xs italic text-slate-700">
                  {generatedSingleQ.stimulus.text}
                </div>
              )}

              <div className="font-bold text-sm text-slate-800">
                {generatedSingleQ.questionText}
              </div>

              {generatedSingleQ.options && (
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {generatedSingleQ.options.map(opt => (
                    <div key={opt.id} className={`p-2 rounded-lg border text-xs ${opt.isCorrect ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold' : 'bg-slate-50'}`}>
                      <strong>{opt.id}.</strong> {opt.text}
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-2 border-t border-slate-100 text-xs text-slate-600">
                Đáp án: <strong className="text-emerald-700">{generatedSingleQ.correctAnswer}</strong>
              </div>
            </div>
          )}
        </div>
      )}

      {/* MODE 2: BIẾN ĐỔI TỪ CÂU GỐC */}
      {activeMode === 'from_original' && (
        <div className="space-y-5">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <label className="block text-xs font-bold text-slate-700">
              Dán câu hỏi gốc của thầy cô:
            </label>
            <textarea
              rows={3}
              value={originalQuestionText}
              onChange={(e) => setOriginalQuestionText(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500/20"
            />

            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <button
                onClick={handleGenerateEquivalents}
                disabled={loadingVariants}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Tạo 4 câu tương đương</span>
              </button>
            </div>
          </div>

          {/* Equivalents List */}
          {variants.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-bold text-xs text-slate-700 uppercase tracking-wide">
                Các câu hỏi tương đương (Bảo toàn kiến thức và độ khó):
              </h4>
              {variants.map((v, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">Phương án tương đương {idx + 1}:</span>
                    <span className="text-[10px] text-slate-400 font-mono">{v.questionId}</span>
                  </div>
                  <div className="text-slate-700 leading-relaxed font-medium">
                    {v.questionText}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
