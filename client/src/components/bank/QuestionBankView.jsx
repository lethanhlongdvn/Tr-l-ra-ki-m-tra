import React, { useState, useEffect } from 'react';
import {
  Database,
  Search,
  Filter,
  Plus,
  CheckCircle2,
  FileSpreadsheet,
  Trash2,
  HelpCircle,
  Tag
} from 'lucide-react';
import { fetchJson } from '../../utils/api';

export default function QuestionBankView() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const loadQuestions = async () => {
    setLoading(true);
    try {
      let query = [];
      if (selectedGrade) query.push(`grade=${selectedGrade}`);
      if (selectedSubject) query.push(`subject=${encodeURIComponent(selectedSubject)}`);
      if (selectedLevel) query.push(`level=${selectedLevel}`);
      if (searchTerm) query.push(`search=${encodeURIComponent(searchTerm)}`);

      const queryString = query.length > 0 ? `?${query.join('&')}` : '';
      const res = await fetchJson(`/question-bank${queryString}`);
      if (res.questions) setQuestions(res.questions);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadQuestions();
  }, [selectedGrade, selectedSubject, selectedLevel]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    loadQuestions();
  };

  return (
    <div className="space-y-5 max-w-5xl mx-auto pb-16">
      {/* Header */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
              <Database className="w-4 h-4" />
            </div>
            <h3 className="font-extrabold text-slate-800 text-lg">Ngân hàng Câu hỏi Chuẩn hóa</h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Kho học liệu câu hỏi trắc nghiệm & tự luận được phân loại chi tiết theo Thông tư 27 và GDPT 2018.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl">
            Tổng số: {questions.length} câu
          </span>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-wrap items-center gap-3">
        <form onSubmit={handleSearchSubmit} className="flex-1 min-w-[200px] relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm theo nội dung câu hỏi, chủ đề, YCCĐ..."
            className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          />
        </form>

        <select
          value={selectedGrade}
          onChange={(e) => setSelectedGrade(e.target.value)}
          className="px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white font-medium"
        >
          <option value="">Tất cả các lớp</option>
          <option value="1">Lớp 1</option>
          <option value="2">Lớp 2</option>
          <option value="3">Lớp 3</option>
          <option value="4">Lớp 4</option>
          <option value="5">Lớp 5</option>
        </select>

        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white font-medium"
        >
          <option value="">Tất cả môn học</option>
          <option value="Toán">Toán</option>
          <option value="Tiếng Việt">Tiếng Việt</option>
          <option value="Tiếng Anh">Tiếng Anh</option>
          <option value="Khoa học">Khoa học</option>
          <option value="Lịch sử và Địa lí">Lịch sử và Địa lí</option>
          <option value="Tin học">Tin học</option>
          <option value="Công nghệ">Công nghệ</option>
        </select>

        <select
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
          className="px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white font-medium"
        >
          <option value="">Tất cả mức độ</option>
          <option value="M1">Mức 1 (Nhận biết)</option>
          <option value="M2">Mức 2 (Kết nối)</option>
          <option value="M3">Mức 3 (Vận dụng)</option>
        </select>
      </div>

      {/* Questions List */}
      <div className="space-y-3.5">
        {loading ? (
          <div className="text-center py-12 text-slate-400 text-xs">Đang tải câu hỏi...</div>
        ) : questions.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-400 text-xs">
            Không tìm thấy câu hỏi nào phù hợp với bộ lọc.
          </div>
        ) : (
          questions.map((q) => {
            const levelColor = q.level === 'M1' ? 'emerald' : q.level === 'M2' ? 'amber' : 'purple';
            return (
              <div
                key={q.questionId}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs space-y-3 transition-all"
              >
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      {q.questionId}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold bg-${levelColor}-100 text-${levelColor}-800`}>
                      {q.level === 'M1' ? 'Mức 1' : q.level === 'M2' ? 'Mức 2' : 'Mức 3'}
                    </span>
                    <span className="text-xs font-semibold text-slate-700">
                      Môn {q.subject} – Lớp {q.grade}
                    </span>
                    <span className="text-xs text-slate-400">• Chủ đề: {q.topic}</span>
                  </div>

                  <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded text-[10px] font-bold">
                    ĐÃ DUYỆT
                  </span>
                </div>

                {q.stimulus && q.stimulus.text && (
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs italic text-slate-600">
                    {q.stimulus.text}
                  </div>
                )}

                <div className="text-xs font-bold text-slate-800 leading-relaxed">
                  {q.questionText}
                </div>

                {q.options && q.options.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    {q.options.map((opt) => (
                      <div
                        key={opt.id}
                        className={`p-2 rounded-lg border text-[11px] ${
                          opt.isCorrect
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold'
                            : 'bg-white border-slate-200 text-slate-600'
                        }`}
                      >
                        <strong>{opt.id}.</strong> {opt.text}
                      </div>
                    ))}
                  </div>
                )}

                <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    Đáp án: <strong className="text-emerald-700">{q.correctAnswer}</strong> • Điểm: <strong>{q.points || 0.5} đ</strong>
                  </div>
                  <div className="text-slate-400">
                    YCCĐ: {q.learningOutcome}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
