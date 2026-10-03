import React, { useState } from 'react';
import {
  ShieldCheck,
  FileSearch,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  BarChart2,
  HelpCircle
} from 'lucide-react';
import { fetchJson } from '../../utils/api';

export default function ExamAnalyzerView() {
  const [rawText, setRawText] = useState('');
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState(null);

  const sampleExamText = `BÀI KIỂM TRA ĐỊNH KỲ CUỐI HỌC KỲ I - LỚP 4
Môn: Toán - Thời gian: 40 phút

PHẦN I. TRẮC NGHIỆM KHÁCH QUAN
Câu 1: Chữ số 5 trong số 354 128 có giá trị là:
A. 50 000        B. 5 000        C. 500        D. 50
Câu 2: 2 tấn 5 tạ = ......... tạ. Số thích hợp điền vào chỗ chấm là:
A. 25            B. 250          C. 205        D. 2005
Câu 3: Một hình chữ nhật có chiều dài 12 cm, chiều rộng 6 cm. Diện tích của hình chữ nhật đó là:
A. 72 cm²        B. 36 cm²       C. 18 cm²     D. 72 cm
Câu 4: Bạn Nam đi từ nhà đến trường hết 15 phút. Nam đến trường lúc 7 giờ. Hỏi Nam xuất phát lúc mấy giờ?
A. 6 giờ 45 phút B. 7 giờ 15 phút C. 6 giờ 30 phút D. 7 giờ

PHẦN II. TỰ LUẬN
Câu 5: Đặt tính rồi tính:
a) 245 128 + 132 450
b) 518 200 - 245 100
Câu 6: Một vườn cây ăn trái ở huyện Long Hồ thu hoạch được 1 200 kg cam sành. Đợt sau thu hoạch được số cam bằng 2/3 đợt đầu. Hỏi cả hai đợt vườn cây thu hoạch được bao nhiêu ki-lô-gam cam sành?`;

  const handleAnalyze = async () => {
    if (!rawText.trim()) return;
    setLoading(true);
    try {
      const res = await fetchJson('/analyzer/analyze-text', {
        method: 'POST',
        body: JSON.stringify({ rawText })
      });
      if (res.analysis) setReport(res.analysis);
    } catch (e) {
      alert("Lỗi phân tích: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFillSample = () => {
    setRawText(sampleExamText);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* Header */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="font-extrabold text-slate-800 text-lg">Kiểm định & Phản biện Đề thi có sẵn</h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Dán đề kiểm tra hiện tại của thầy cô vào để AI đóng vai "Giáo viên phản biện khó tính", rà soát độ phủ kiến thức và mức độ TT 27.
          </p>
        </div>

        <button
          onClick={handleFillSample}
          className="px-3 py-1.5 rounded-xl border border-purple-200 bg-purple-50 text-purple-700 text-xs font-bold hover:bg-purple-100 transition-all"
        >
          Dán đề thi mẫu thử nghiệm
        </button>
      </div>

      {/* Input Area */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
        <label className="block text-xs font-bold text-slate-700">
          Nội dung toàn bộ đề thi (Dán văn bản hoặc câu hỏi):
        </label>
        <textarea
          rows={10}
          value={rawText}
          onChange={(e) => setRawText(e.target.value)}
          placeholder="Dán đề thi vào đây (bao gồm phần Trắc nghiệm, Tự luận, các phương án A-B-C-D)..."
          className="w-full p-4 rounded-xl border border-slate-200 text-xs leading-relaxed focus:outline-none focus:ring-2 focus:ring-purple-500/20 font-mono"
        />

        <div className="flex justify-end">
          <button
            onClick={handleAnalyze}
            disabled={loading || !rawText.trim()}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-bold text-xs shadow-sm transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{loading ? 'AI đang soi đề thi...' : 'Tiến hành Kiểm định & Phản biện đề'}</span>
          </button>
        </div>
      </div>

      {/* Analysis Report */}
      {report && (
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-black text-xs">
                {report.qualityAuditScore}% ĐIỂM CHẤT LƯỢNG
              </span>
              <h4 className="font-bold text-slate-800 text-sm uppercase">
                Báo cáo Kết quả Kiểm định Đề thi
              </h4>
            </div>
            <span className="text-xs font-semibold text-slate-400">
              Phát hiện {report.detectedQuestionsCount} câu hỏi
            </span>
          </div>

          {/* Level Distribution */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs space-y-1">
              <span className="font-bold text-emerald-800">Mức 1 (Nhận biết):</span>
              <div className="text-lg font-black text-emerald-900">{report.estimatedLevels.M1} câu (~45%)</div>
              <p className="text-[11px] text-emerald-700">Tái hiện kiến thức trực tiếp 1 bước.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs space-y-1">
              <span className="font-bold text-amber-800">Mức 2 (Kết nối):</span>
              <div className="text-lg font-black text-amber-900">{report.estimatedLevels.M2} câu (~35%)</div>
              <p className="text-[11px] text-amber-700">Giải quyết tình huống tương tự, đa bước.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-200 text-xs space-y-1">
              <span className="font-bold text-purple-800">Mức 3 (Vận dụng):</span>
              <div className="text-lg font-black text-purple-900">{report.estimatedLevels.M3} câu (~20%)</div>
              <p className="text-[11px] text-purple-700">Vận dụng giải quyết vấn đề mới.</p>
            </div>
          </div>

          {/* Warnings & Suggestions */}
          <div className="space-y-2 pt-2">
            <div className="font-bold text-xs text-slate-800">Khuyến nghị từ Giáo viên Phản biện AI:</div>
            {report.potentialIssues.map((issue, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{issue}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
            <strong>Đánh giá tổng quan: </strong>
            {report.recommendations}
          </div>
        </div>
      )}
    </div>
  );
}
