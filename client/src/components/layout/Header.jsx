import React from 'react';
import { Sparkles, CheckCircle2, SlidersHorizontal, School } from 'lucide-react';

export default function Header({ currentView, globalMode, setGlobalMode, onQuickCreate }) {
  const titles = {
    dashboard: 'Tổng quan & Thống kê hệ thống',
    wizard: 'Trợ lý AI thiết kế Đề kiểm tra tiểu học',
    matrix: 'Bảng Ma trận đề kiểm tra định kỳ (TT27)',
    specs: 'Bản đặc tả chi tiết câu hỏi & năng lực',
    bank: 'Ngân hàng câu hỏi chuẩn hóa',
    seaplm: 'SEA-PLM Context Engine & Dữ liệu Vĩnh Long mới',
    analyzer: 'Kiểm định & Phản biện đề thi có sẵn',
    quick: 'Tạo câu hỏi nhanh & Biến đổi tương đương',
    saved: 'Kho đề thi đã hoàn thiện & Xuất bản',
    settings: 'Cài đặt hệ thống & Kết nối AI',
  };

  return (
    <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 fixed top-0 left-64 right-0 z-20 px-6 flex items-center justify-between">
      {/* Title & Path */}
      <div className="flex items-center gap-3">
        <div>
          <h2 className="text-base font-bold text-slate-800 leading-tight">
            {titles[currentView] || 'APP THẦY TOÀN'}
          </h2>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="font-semibold text-emerald-700">APP THẦY TOÀN</span>
            <span>•</span>
            <span>Giáo dục Tiểu học</span>
            <span>•</span>
            <span className="text-emerald-600 font-medium">Bộ sách Kết nối tri thức</span>
          </div>
        </div>
      </div>

      {/* Action Controls & Mode Selector */}
      <div className="flex items-center gap-4">
        {/* Mode Selector */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-medium text-slate-600 border border-slate-200/80">
          <span className="px-2 text-slate-400 font-semibold flex items-center gap-1">
            <SlidersHorizontal className="w-3.5 h-3.5" /> Chế độ:
          </span>
          <button
            onClick={() => setGlobalMode('TT27')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              globalMode === 'TT27'
                ? 'bg-white text-emerald-800 shadow-sm font-bold'
                : 'hover:text-slate-900'
            }`}
          >
            Chuẩn TT27
          </button>
          <button
            onClick={() => setGlobalMode('SEA_PLM')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              globalMode === 'SEA_PLM'
                ? 'bg-white text-emerald-800 shadow-sm font-bold'
                : 'hover:text-slate-900'
            }`}
          >
            Định hướng SEA-PLM
          </button>
          <button
            onClick={() => setGlobalMode('TT27_SEA_PLM')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              globalMode === 'TT27_SEA_PLM'
                ? 'bg-emerald-600 text-white shadow-sm font-bold'
                : 'hover:text-slate-900'
            }`}
          >
            TT27 + SEA-PLM (Khuyên dùng)
          </button>
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>AI Sẵn sàng</span>
        </div>

        {/* Quick create button */}
        <button
          onClick={onQuickCreate}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-bold shadow-sm shadow-emerald-200 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Tạo đề mới</span>
        </button>

        {/* User / Teacher Badge */}
        <div className="flex items-center gap-2.5 pl-3 border-l border-slate-200">
          <img
            src="/logo-thay-toan.jpg"
            alt="Thầy Toàn"
            className="w-8 h-8 rounded-full object-cover object-[center_20%] border-2 border-emerald-500 shadow-sm"
          />
          <div className="text-left hidden sm:block">
            <div className="text-xs font-bold text-slate-800 leading-none">Thầy Toàn</div>
            <div className="text-[10px] text-emerald-600 font-semibold leading-tight mt-0.5">Giáo viên Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
}
