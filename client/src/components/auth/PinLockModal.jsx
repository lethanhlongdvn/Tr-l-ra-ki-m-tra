import React, { useState } from 'react';
import { Lock, KeyRound, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PinLockModal({ onUnlock }) {
  const [pinInput, setPinInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const CORRECT_PIN = 'thaytoan2026';

  const handleVerify = (e) => {
    e.preventDefault();
    const cleanPin = (pinInput || '').trim().toLowerCase();
    if (cleanPin === CORRECT_PIN) {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('app_pin_unlocked', 'true');
      }
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      onUnlock();
    } else {
      setErrorMsg('Mã PIN không chính xác. Vui lòng thử lại!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4 animate-fade-in select-none">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
        {/* Header Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 p-7 text-white text-center space-y-3 relative">
          <div className="flex justify-center">
            <img
              src="/logo-thay-toan.jpg"
              alt="Thầy Toàn"
              className="w-20 h-20 rounded-2xl object-cover object-[center_20%] border-4 border-white/90 shadow-xl shadow-black/20"
            />
          </div>
          <div>
            <h2 className="text-2xl font-black tracking-tight">APP THẦY TOÀN</h2>
            <p className="text-emerald-100 text-xs mt-1 font-medium">
              Trợ lý Sư phạm AI Ra đề kiểm tra & KHBD CV 2345
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold border border-white/20 text-emerald-50">
            <ShieldCheck className="w-3.5 h-3.5 text-yellow-300" />
            <span>Hệ thống bảo vệ nội bộ trường học</span>
          </div>
        </div>

        {/* Form Nhập PIN */}
        <form onSubmit={handleVerify} className="p-7 space-y-5">
          <div className="space-y-2 text-center">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Nhập Mã PIN bảo mật để truy cập
            </label>
            <div className="relative">
              <input
                type="password"
                autoFocus
                value={pinInput}
                onChange={(e) => {
                  setPinInput(e.target.value);
                  setErrorMsg('');
                }}
                placeholder="Nhập mã PIN..."
                className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 text-center font-black text-lg tracking-widest text-slate-800 outline-none transition-all placeholder:font-normal placeholder:text-sm placeholder:tracking-normal"
              />
              <KeyRound className="w-5 h-5 text-slate-400 absolute right-4 top-3.5 pointer-events-none" />
            </div>
            {errorMsg && (
              <p className="text-xs font-bold text-rose-600 bg-rose-50 p-2.5 rounded-xl border border-rose-200 animate-shake">
                {errorMsg}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm shadow-lg shadow-emerald-200 transition-all flex items-center justify-center gap-2"
          >
            <Lock className="w-4 h-4 text-emerald-200" />
            <span>Mở khóa ứng dụng</span>
          </button>

          <div className="text-center pt-2 border-t border-slate-100">
            <p className="text-[11px] text-slate-400">
              Mã PIN bảo mật cấp riêng cho Giáo viên trường • Mọi thắc mắc liên hệ <span className="font-semibold text-slate-600">Thầy Toàn</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
