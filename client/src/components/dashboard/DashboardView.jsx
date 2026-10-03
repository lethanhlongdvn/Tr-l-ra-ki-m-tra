import React from 'react';
import {
  Sparkles,
  BookOpen,
  FileCheck2,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  TrendingUp,
  MapPin,
  Flame,
  Layers
} from 'lucide-react';

export default function DashboardView({ onNavigate, stats, savedExamsCount }) {
  return (
    <div className="space-y-6">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white p-7 shadow-lg shadow-emerald-900/10">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold mb-3 border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>Phiên bản chuyên gia ra đề Tiểu học 1.0</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/logo-thay-toan.jpg"
              alt="Thầy Toàn"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover object-[center_20%] border-2 border-white/80 shadow-lg shadow-black/20 shrink-0"
            />
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                APP THẦY TOÀN
              </h1>
              <p className="text-emerald-100 text-xs sm:text-sm font-medium">
                Hệ thống Trợ lý Ra đề kiểm tra & Kế hoạch bài dạy Tiểu học
              </p>
            </div>
          </div>
          <p className="text-emerald-100 text-sm leading-relaxed mb-6 font-normal">
            Trợ lý AI phân tích Yêu cầu cần đạt, tự động dựng Ma trận, Bản đặc tả chuẩn <strong>Thông tư 27</strong> kết hợp nhiệm vụ giải quyết vấn đề thực tiễn theo chuẩn <strong>SEA-PLM</strong> và dữ liệu địa phương hóa tỉnh Vĩnh Long.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('wizard')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-emerald-800 font-bold text-sm shadow-md hover:bg-emerald-50 active:scale-95 transition-all"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Bắt đầu Tạo đề kiểm tra</span>
            </button>
            <button
              onClick={() => onNavigate('analyzer')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700/60 hover:bg-emerald-700/80 border border-white/20 text-white font-medium text-sm transition-all"
            >
              <FileCheck2 className="w-4 h-4" />
              <span>Kiểm định đề có sẵn</span>
            </button>
          </div>
        </div>

        {/* Decorative badge background */}
        <div className="absolute right-6 -bottom-6 opacity-15 pointer-events-none">
          <BookOpen className="w-64 h-64 text-white" />
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Đề thi đã tạo</span>
            <div className="text-2xl font-black text-slate-800 mt-1">{savedExamsCount || 1}</div>
            <span className="text-[11px] text-emerald-600 font-medium">Đạt chuẩn Thông tư 27</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <FileCheck2 className="w-6 h-6" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Ngân hàng câu hỏi</span>
            <div className="text-2xl font-black text-slate-800 mt-1">45+</div>
            <span className="text-[11px] text-teal-600 font-medium">Toán, Tiếng Việt L1-5</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
            <Layers className="w-6 h-6" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Chất lượng câu hỏi</span>
            <div className="text-2xl font-black text-emerald-600 mt-1">94%</div>
            <span className="text-[11px] text-slate-400 font-medium">Điểm kiểm định AI</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Bối cảnh Vĩnh Long</span>
            <div className="text-2xl font-black text-indigo-600 mt-1">124</div>
            <span className="text-[11px] text-indigo-500 font-medium">Xã, phường tích hợp</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <MapPin className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* 3 Cognitive Levels Framework banner */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-slate-800 text-base">
              Quy chuẩn 3 Mức độ nhận thức theo Thông tư 27/2020/TT-BGDĐT
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Phân loại nghiêm ngặt theo bản chất nhiệm vụ học sinh, tuyệt đối không đánh đồng mức độ với độ khó đơn thuần.
            </p>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Điều 7 • TT 27
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded-md bg-emerald-600 text-white font-bold text-xs">MỨC 1</span>
              <span className="text-xs font-medium text-emerald-700">Tỷ lệ: 40 - 50%</span>
            </div>
            <h4 className="font-bold text-sm text-slate-800">Nhận biết & Tái hiện trực tiếp</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nhận biết, nhớ, nhắc lại hoặc mô tả được nội dung đã học; áp dụng trực tiếp 1 thao tác giải quyết vấn đề quen thuộc.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded-md bg-amber-500 text-white font-bold text-xs">MỨC 2</span>
              <span className="text-xs font-medium text-amber-700">Tỷ lệ: 30 - 40%</span>
            </div>
            <h4 className="font-bold text-sm text-slate-800">Kết nối & Giải quyết tình huống tương tự</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Kết nối, sắp xếp, phối hợp nhiều kiến thức đã học; giải bài toán có từ 2 bước tính trở lên trong ngữ cảnh tương tự.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded-md bg-purple-600 text-white font-bold text-xs">MỨC 3</span>
              <span className="text-xs font-medium text-purple-700">Tỷ lệ: 10 - 20%</span>
            </div>
            <h4 className="font-bold text-sm text-slate-800">Vận dụng mới & Phản hồi thực tế</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Vận dụng vào tình huống mới, phân tích dữ liệu thực tế (bảng biểu, thời gian biểu), đưa ra phương án tối ưu hoặc phản hồi hợp lý.
            </p>
          </div>
        </div>
      </div>

      {/* Feature Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          onClick={() => onNavigate('seaplm')}
          className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-emerald-300 hover:shadow-md cursor-pointer transition-all group"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
          </div>
          <h4 className="font-bold text-slate-800 text-base mb-1">
            SEA-PLM & Bối cảnh 124 xã phường Vĩnh Long
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Khám phá kho dữ liệu hành chính mới nhất (sau sáp nhập Bến Tre, Trà Vinh, Vĩnh Long) và cách AI đưa địa danh, nông sản bưởi Năm Roi, dừa sáp Cầu Kè vào bài toán thực tế.
          </p>
        </div>

        <div
          onClick={() => onNavigate('quick')}
          className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-emerald-300 hover:shadow-md cursor-pointer transition-all group"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
          </div>
          <h4 className="font-bold text-slate-800 text-base mb-1">
            Chế độ "Tôi chỉ muốn tạo câu hỏi"
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Sinh nhanh các câu hỏi đơn lẻ theo từng Yêu cầu cần đạt, giải thích "Vì sao câu này là Mức X?" và tính năng tạo 5 câu tương đương chỉ bằng 1 cú nhấp chuột.
          </p>
        </div>
      </div>
    </div>
  );
}
