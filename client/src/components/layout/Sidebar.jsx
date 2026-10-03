import React from 'react';
import {
  LayoutDashboard,
  FileSpreadsheet,
  TableProperties,
  ListTree,
  Database,
  Globe2,
  ShieldCheck,
  FolderArchive,
  Settings,
  Sparkles,
  HelpCircle,
  Layers
} from 'lucide-react';

export default function Sidebar({ currentView, setCurrentView }) {
  const menuItems = [
    { id: 'dashboard', label: 'Tổng quan', icon: LayoutDashboard, badge: 'V1.0' },
    { id: 'wizard', label: 'Tạo đề kiểm tra', icon: Sparkles, highlight: true },
    { id: 'integration', label: 'Xuất KHBD tích hợp', icon: Layers, badge: 'CV 2345', highlight: true },
    { id: 'matrix', label: 'Ma trận đề', icon: TableProperties },
    { id: 'specs', label: 'Bản đặc tả', icon: ListTree },
    { id: 'bank', label: 'Ngân hàng câu hỏi', icon: Database },
    { id: 'seaplm', label: 'SEA-PLM & Vĩnh Long', icon: Globe2, tag: 'Bối cảnh' },
    { id: 'analyzer', label: 'Kiểm định AI', icon: ShieldCheck },
    { id: 'quick', label: 'Tạo câu hỏi lẻ', icon: HelpCircle },
    { id: 'saved', label: 'Đề đã tạo & Xuất bản', icon: FolderArchive },
    { id: 'settings', label: 'Cài đặt hệ thống', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-screen fixed left-0 top-0 z-30 select-none shadow-sm">
      {/* Brand Header */}
      <div className="p-4 border-b border-slate-100 flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-teal-50">
        <img
          src="/logo-thay-toan.jpg"
          alt="Thầy Toàn"
          className="w-11 h-11 rounded-full object-cover object-[center_20%] border-2 border-emerald-500 shadow-md shadow-emerald-200 shrink-0"
        />
        <div className="overflow-hidden">
          <h1 className="font-extrabold text-slate-800 text-sm sm:text-base tracking-tight leading-tight uppercase">
            APP THẦY TOÀN
          </h1>
          <p className="text-xs text-emerald-700 font-medium truncate">
            Tiểu học • TT27 • KHBD 2345
          </p>
        </div>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
          Phân hệ chuyên môn
        </div>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-150 ${
                isActive
                  ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-200 font-semibold'
                  : item.highlight
                  ? 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200/60'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : item.highlight ? 'text-emerald-600' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-semibold ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {item.badge}
                </span>
              )}
              {item.tag && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-medium ${isActive ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-700'}`}>
                  {item.tag}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer Info */}
      <div className="p-4 border-t border-slate-100 bg-slate-50/70 text-xs text-slate-500">
        <div className="flex items-center justify-between font-medium text-slate-700 mb-1">
          <span>Chuẩn đánh giá</span>
          <span className="text-emerald-700 bg-emerald-100/70 px-1.5 py-0.5 rounded text-[10px]">GDPT 2018</span>
        </div>
        <p className="text-[11px] leading-relaxed text-slate-400">
          Tuân thủ Điều 7 Thông tư 27/2020 & Chuẩn năng lực SEA-PLM.
        </p>
      </div>
    </aside>
  );
}
