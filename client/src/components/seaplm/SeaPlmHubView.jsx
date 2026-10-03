import React, { useState, useEffect } from 'react';
import {
  Globe2,
  MapPin,
  Sparkles,
  Building2,
  Trees,
  ShoppingBag,
  Ship,
  Info,
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Compass,
  RefreshCw,
  FileText
} from 'lucide-react';
import { fetchJson } from '../../utils/api';

export default function SeaPlmHubView() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('lookup'); // 'lookup' | 'overview' | 'themes'
  const [selectedRegionIdx, setSelectedRegionIdx] = useState(0);

  // Search & Filter state for 124 units
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('ALL'); // 'ALL' | 'Vĩnh Long' | 'Bến Tre' | 'Trà Vinh'
  const [typeFilter, setTypeFilter] = useState('ALL'); // 'ALL' | 'Phường' | 'Xã'

  // Live Stimulus state
  const [stimulus, setStimulus] = useState(null);
  const [generatingStimulus, setGeneratingStimulus] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const res = await fetchJson('/seaplm/vinhlong');
        if (res.data) setData(res.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  async function handleGenerateStimulus() {
    try {
      setGeneratingStimulus(true);
      const res = await fetchJson('/seaplm/random-context?contextType=wider_environment&subject=Toán&grade=4');
      if (res.stimulus) {
        setStimulus(res.stimulus);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setGeneratingStimulus(false);
    }
  }

  // Filter 124 units
  const allUnits = data?.all124Units || [];
  const filteredUnits = allUnits.filter((u) => {
    const matchesSearch =
      !searchTerm.trim() ||
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.oldMergedUnits.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRegion =
      regionFilter === 'ALL' || u.region.includes(regionFilter);

    const matchesType =
      typeFilter === 'ALL' || u.type === typeFilter;

    return matchesSearch && matchesRegion && matchesType;
  });

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-16">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 text-white shadow-lg">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-semibold border border-white/20">
            <Globe2 className="w-3.5 h-3.5 text-cyan-300" />
            <span>Southeast Asia Primary Learning Metrics (SEA-PLM)</span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-200 text-xs font-medium border border-emerald-400/30">
            Hiệu lực từ 01/07/2025 • NQ 202/2025/QH15
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-2">
          ĐỊNH HƯỚNG BỐI CẢNH NĂNG LỰC & ĐỊA PHƯƠNG HÓA VĨNH LONG
        </h2>
        <p className="text-blue-100 text-xs sm:text-sm leading-relaxed max-w-4xl">
          Tích hợp chính thức toàn bộ danh mục <strong>124 xã, phường mới</strong> của tỉnh Vĩnh Long sau sáp nhập (gồm 3 khu vực: Vĩnh Long cũ 35 ĐVHC, Bến Tre cũ 48 ĐVHC, Trà Vinh cũ 41 ĐVHC). Chuẩn hóa câu hỏi thi thực tế theo chuẩn năng lực giải quyết vấn đề của SEA-PLM, <strong>tuyệt đối sử dụng địa danh mới theo Nghị quyết 202/2025/QH15, tránh gọi địa danh cũ</strong>.
        </p>

        {/* Quick stat cards */}
        {data && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-white/15">
            <div className="bg-white/10 rounded-xl p-3 backdrop-blur-xs">
              <div className="text-xs text-blue-200">Tổng ĐVHC cấp xã</div>
              <div className="text-lg font-black text-white">{data.totalUnits} đơn vị</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 backdrop-blur-xs">
              <div className="text-xs text-blue-200">Cơ cấu loại hình</div>
              <div className="text-lg font-black text-cyan-300">{data.totalWards} Phường / {data.totalCommunes} Xã</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 backdrop-blur-xs">
              <div className="text-xs text-blue-200">Diện tích tự nhiên</div>
              <div className="text-lg font-black text-white">{data.totalAreaKm2} km²</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 backdrop-blur-xs">
              <div className="text-xs text-blue-200">Quy mô dân số</div>
              <div className="text-lg font-black text-emerald-300">{Number(data.population).toLocaleString()} người</div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('lookup')}
          className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'lookup'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Search className="w-3.5 h-3.5" />
          <span>Tra cứu 124 Xã, Phường mới (Chuẩn NQ 202)</span>
          <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] bg-white/20">
            {allUnits.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('overview')}
          className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'overview'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Tổng quan 3 Khu vực & Huyện/Thị xã</span>
        </button>

        <button
          onClick={() => setActiveTab('themes')}
          className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'themes'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Kho Bối cảnh Thực tế & Trình tạo SEA-PLM</span>
        </button>
      </div>

      {/* 3 Pillars of SEA-PLM Contexts - Quick Reference */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-slate-800 text-xs">1. Bối cảnh Cá nhân</h4>
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Tiền tiêu vặt, kế hoạch mua sắm đồ dùng học tập, dinh dưỡng, thời gian biểu cá nhân.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Building2 className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-slate-800 text-xs">2. Bối cảnh Nhà trường</h4>
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Phân loại rác thải trường học, phong trào kế hoạch nhỏ, thư viện xanh, hội chợ đồ dùng học tập.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <MapPin className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-slate-800 text-xs">3. Xã hội & Địa phương Vĩnh Long mới</h4>
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            124 xã/phường: bưởi Năm Roi, dừa sáp Cầu Kè, gốm đỏ Mang Thít, kẹo dừa Mỏ Cày, hoa kiểng Chợ Lách.
          </p>
        </div>
      </div>

      {/* ==================== TAB 1: TRA CỨU 124 XÃ PHƯỜNG MỚI ==================== */}
      {activeTab === 'lookup' && (
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5">
          {/* Important Pedagogy Alert */}
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-900 leading-relaxed">
              <strong>Nguyên tắc sư phạm Thông tư 27 & Địa phương hóa Vĩnh Long:</strong> Khi thiết kế đề kiểm tra và câu hỏi ứng dụng, giáo viên <strong>chỉ sử dụng tên đơn vị hành chính mới chính thức</strong> (cột &ldquo;Tên đơn vị mới&rdquo; bên dưới); cột &ldquo;Đơn vị cũ sáp nhập&rdquo; phục vụ việc tra cứu gốc gác đơn vị trường học của mình, <strong>tuyệt đối không đưa địa danh cũ đơn lẻ vào đề thi</strong>.
            </div>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Tra cứu tên mới (ví dụ: Long Châu, Cái Nhum, An Trường...) hoặc tên xã cũ sáp nhập (ví dụ: Trường An, Loan Mỹ, Tiệm Tôm)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="px-3 py-2 text-xs font-semibold text-slate-500 hover:text-slate-700 bg-slate-100 rounded-xl"
                >
                  Xóa tìm kiếm
                </button>
              )}
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
              {/* Region Filter */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-slate-500 font-semibold text-[11px] flex items-center gap-1 mr-1">
                  <Filter className="w-3 h-3 text-slate-400" />
                  Khu vực:
                </span>
                {[
                  { id: 'ALL', label: 'Tất cả (124)' },
                  { id: 'Vĩnh Long', label: 'Vĩnh Long (35)' },
                  { id: 'Bến Tre', label: 'Bến Tre (48)' },
                  { id: 'Trà Vinh', label: 'Trà Vinh (41)' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRegionFilter(item.id)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      regionFilter === item.id
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Type Filter */}
              <div className="flex items-center gap-1.5">
                <span className="text-slate-500 font-semibold text-[11px] mr-1">Loại hình:</span>
                {[
                  { id: 'ALL', label: 'Tất cả' },
                  { id: 'Phường', label: 'Phường (19)' },
                  { id: 'Xã', label: 'Xã (105)' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTypeFilter(item.id)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      typeFilter === item.id
                        ? 'bg-slate-800 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-2">
            <span>
              Kết quả tra cứu: <strong className="text-indigo-600">{filteredUnits.length}</strong> / {allUnits.length} đơn vị hành chính
            </span>
            {filteredUnits.length !== allUnits.length && (
              <span className="text-[11px] text-amber-700 italic">
                (Đang áp dụng bộ lọc)
              </span>
            )}
          </div>

          {/* Table of 124 Communes/Wards */}
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <th className="p-3 w-12 text-center">STT</th>
                  <th className="p-3 min-w-[180px]">Tên đơn vị mới (Từ 01/07/2025)</th>
                  <th className="p-3 min-w-[130px]">Huyện / Thị xã / TP</th>
                  <th className="p-3 min-w-[130px]">Khu vực trước sáp nhập</th>
                  <th className="p-3 min-w-[280px]">Đơn vị hành chính cũ sắp xếp / sáp nhập</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 bg-white">
                {filteredUnits.map((u) => (
                  <tr key={u.stt} className="hover:bg-indigo-50/40 transition-colors">
                    <td className="p-3 font-mono font-bold text-slate-500 text-center">
                      {u.stt}
                    </td>
                    <td className="p-3 font-bold text-slate-800">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded font-extrabold ${
                            u.type === 'Phường'
                              ? 'bg-blue-100 text-blue-800 border border-blue-200'
                              : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          }`}
                        >
                          {u.type}
                        </span>
                        <span className="text-indigo-900">{u.name}</span>
                      </div>
                    </td>
                    <td className="p-3 font-semibold text-slate-700">
                      {u.district}
                    </td>
                    <td className="p-3 text-slate-600 text-[11px]">
                      {u.region.replace(' (cũ)', '')}
                    </td>
                    <td className="p-3 text-slate-600 text-[11px] leading-relaxed">
                      {u.oldMergedUnits}
                    </td>
                  </tr>
                ))}
                {filteredUnits.length === 0 && (
                  <tr>
                    <td colSpan="5" className="p-8 text-center text-slate-400 italic text-xs">
                      Không tìm thấy đơn vị hành chính nào khớp với từ khóa &ldquo;{searchTerm}&rdquo;. Vui lòng thử tìm từ khóa khác.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ==================== TAB 2: TỔNG QUAN 3 KHU VỰC & HUYỆN THỊ ==================== */}
      {activeTab === 'overview' && data && (
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-indigo-100 text-indigo-800 font-bold text-xs">
                  {data.resolution}
                </span>
                <h3 className="font-bold text-slate-800 text-base">
                  Cơ cấu tổ chức 3 Khu vực tỉnh Vĩnh Long mới
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Phân bổ theo 3 khu vực địa lý: Vĩnh Long (35 ĐVHC), Bến Tre (48 ĐVHC), Trà Vinh (41 ĐVHC)
              </p>
            </div>
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
            {data.regions.map((reg, idx) => (
              <button
                key={reg.regionName}
                onClick={() => setSelectedRegionIdx(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedRegionIdx === idx
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {reg.regionName} ({reg.totalUnits} xã/phường)
              </button>
            ))}
          </div>

          {/* Districts and Communes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.regions[selectedRegionIdx].districts.map((dist) => (
              <div
                key={dist.name}
                className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/50 space-y-2 hover:border-indigo-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-800">{dist.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600 font-semibold">
                    {dist.type}
                  </span>
                </div>
                <p className="text-xs text-indigo-700 italic">
                  <strong>Đặc trưng kinh tế - văn hóa: </strong>
                  {dist.features}
                </p>
                <div className="text-xs text-slate-600 leading-relaxed">
                  <strong>Các xã, phường mới: </strong>
                  {(dist.wards || []).map(w => `Phường ${w}`).concat((dist.communes || []).map(c => `Xã ${c}`)).join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ==================== TAB 3: KHO BỐI CẢNH & LIVE GENERATOR ==================== */}
      {activeTab === 'themes' && (
        <div className="space-y-6">
          {/* Live Context Stimulus Generator Tool */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200/70 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <h3 className="font-bold text-indigo-950 text-sm sm:text-base">
                    Trình Thử Nghiệm Ngữ Cảnh SEA-PLM Tự Động (Live Stimulus Generator)
                  </h3>
                </div>
                <p className="text-xs text-indigo-800 mt-1">
                  Nhấn nút bên dưới để sinh ngẫu nhiên ngữ cảnh thực tế ứng dụng chuẩn 124 xã, phường mới tỉnh Vĩnh Long
                </p>
              </div>

              <button
                onClick={handleGenerateStimulus}
                disabled={generatingStimulus}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs transition-all disabled:opacity-50 shrink-0"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${generatingStimulus ? 'animate-spin' : ''}`} />
                <span>Sinh Ngẫu Nhiên Ngữ Cảnh</span>
              </button>
            </div>

            {/* Stimulus Display Box */}
            {stimulus ? (
              <div className="p-4 rounded-xl bg-white border border-indigo-200 space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-indigo-700 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                    {stimulus.contextTitle}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-200">
                    Bối cảnh địa phương Vĩnh Long mới
                  </span>
                </div>
                <p className="text-xs text-slate-800 leading-relaxed">
                  <strong>Tình huống: </strong>{stimulus.story}
                </p>
                {stimulus.details && (
                  <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <strong>Dữ liệu thực tế: </strong>{stimulus.details}
                  </p>
                )}
                <div className="text-xs text-indigo-900 bg-indigo-50/70 p-2.5 rounded-lg font-semibold border border-indigo-100">
                  🎯 <strong>Mục tiêu nhiệm vụ: </strong>{stimulus.taskGoal}
                </div>
              </div>
            ) : (
              <div className="p-5 rounded-xl bg-white/70 border border-dashed border-indigo-200 text-center text-xs text-indigo-600">
                Nhấn <strong>&ldquo;Sinh Ngẫu Nhiên Ngữ Cảnh&rdquo;</strong> để xem thử ví dụ tình huống thực tế gắn liền với 124 xã, phường mới của Vĩnh Long.
              </div>
            )}
          </div>

          {/* 4 Context Pillars */}
          {data?.contextThemes && (
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <h3 className="font-bold text-slate-800 text-base flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                <span>4 Trục Chủ Đề Ngữ Cảnh Thực Tế Tỉnh Vĩnh Long Mới</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.contextThemes.map((th, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                    <h4 className="font-bold text-xs text-indigo-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[10px] font-bold">
                        {idx + 1}
                      </span>
                      {th.theme}
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {th.items.map((it, itIdx) => (
                        <li key={itIdx} className="flex items-start gap-1.5">
                          <span className="text-indigo-500 font-bold shrink-0">•</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
