import React, { useState } from 'react';
import {
  FileText,
  FileSpreadsheet,
  Printer,
  Download,
  Shuffle,
  CheckCircle2,
  TableProperties,
  ListTree,
  Eye,
  Award,
  BookOpen,
  PenTool
} from 'lucide-react';
import { downloadFile, fetchJson } from '../../utils/api';
import { exportExamToWordDoc, exportExamToPdfFile, exportExamToPdfPrint } from '../../utils/wordHtmlExport';
import { generateClientSideExam } from '../../utils/clientExamGenerator';
import englishImagesBase64 from '../../utils/englishImagesBase64.json';

function getEnglishImageSrc(item) {
  if (!item) return '';
  if (typeof item === 'object') {
    return getEnglishImageSrc(item.image || item.imageKey || item.imageUrl || item.src);
  }
  if (typeof item !== 'string') return '';
  const s = item.trim();
  if (s.startsWith('data:image')) return s;
  if (englishImagesBase64[s]) return englishImagesBase64[s];

  const normalized = '/' + s.replace(/^(\.\/|\/|dist\/)+/, '');
  if (englishImagesBase64[normalized]) return englishImagesBase64[normalized];

  const filename = s.split('/').pop().split('\\').pop();
  if (englishImagesBase64[filename]) return englishImagesBase64[filename];

  const match = Object.keys(englishImagesBase64).find(k => k.endsWith('/' + filename));
  if (match) return englishImagesBase64[match];

  return s;
}

function computeMatrixSummary(matrixRows = [], ratios = {}, totalPoints = 10) {
  let m1Tn = 0, m1Tl = 0, m2Tn = 0, m2Tl = 0, m3Tn = 0, m3Tl = 0;
  let m1TnP = 0, m1TlP = 0, m2TnP = 0, m2TlP = 0, m3TnP = 0, m3TlP = 0;

  matrixRows.forEach(r => {
    m1Tn += (r.m1?.tnCount || 0);
    m1Tl += (r.m1?.tlCount || 0);
    m1TnP += (r.m1?.tnPoints ?? (r.m1?.points && !r.m1?.tlCount ? r.m1?.points : 0) ?? 0);
    m1TlP += (r.m1?.tlPoints || 0);

    m2Tn += (r.m2?.tnCount || 0);
    m2Tl += (r.m2?.tlCount || 0);
    m2TnP += (r.m2?.tnPoints ?? (r.m2?.points && !r.m2?.tlCount ? r.m2?.points : 0) ?? 0);
    m2TlP += (r.m2?.tlPoints || 0);

    m3Tn += (r.m3?.tnCount || 0);
    m3Tl += (r.m3?.tlCount || 0);
    m3TnP += (r.m3?.tnPoints || 0);
    m3TlP += (r.m3?.tlPoints ?? (r.m3?.points && !r.m3?.tnCount ? r.m3?.points : 0) ?? 0);
  });

  const totalTn = m1Tn + m2Tn + m3Tn;
  const totalTl = m1Tl + m2Tl + m3Tl;
  const totalTnP = Number((m1TnP + m2TnP + m3TnP).toFixed(2));
  const totalTlP = Number((m1TlP + m2TlP + m3TlP).toFixed(2));

  return {
    totalCountRow: {
      m1Tn, m1Tl, m2Tn, m2Tl, m3Tn, m3Tl, totalTn, totalTl, grandTotal: totalTn + totalTl
    },
    totalPointsRow: {
      m1Tn: Number(m1TnP.toFixed(2)),
      m1Tl: Number(m1TlP.toFixed(2)),
      m2Tn: Number(m2TnP.toFixed(2)),
      m2Tl: Number(m2TlP.toFixed(2)),
      m3Tn: Number(m3TnP.toFixed(2)),
      m3Tl: Number(m3TlP.toFixed(2)),
      totalTn: totalTnP,
      totalTl: totalTlP,
      grandTotal: totalPoints || 10
    },
    ratiosRow: {
      m1Pct: ratios?.M1 ?? ratios?.m1 ?? 65,
      m2Pct: ratios?.M2 ?? ratios?.m2 ?? 20,
      m3Pct: ratios?.M3 ?? ratios?.m3 ?? 15,
      totalPct: 100
    }
  };
}

function Standard10ColMatrixTable({ rows = [], summary = null, ratios = { M1: 65, M2: 20, M3: 15 }, totalPoints = 10 }) {
  const activeSummary = summary?.totalCountRow ? summary : computeMatrixSummary(rows, ratios, totalPoints);
  const tc = activeSummary.totalCountRow || {};
  const tp = activeSummary.totalPointsRow || {};
  const rr = activeSummary.ratiosRow || {};

  const fmtPt = (v) => (v !== undefined && v !== null && v !== '' && v !== 0 ? (typeof v === 'number' ? v.toFixed(1).replace('.', ',') : v) : '');
  const fmtCnt = (v) => (v !== undefined && v !== null && v !== '' && v !== 0 ? v : '');
  const fmtQ = (v) => (v ? v : '');

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-300 shadow-xs">
      <table className="w-full text-xs text-left border-collapse">
        <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-300 text-center">
          <tr>
            <th className="p-2 border border-slate-300 text-center font-bold" rowSpan={2} style={{ width: '28%' }}>
              Mạch kiến thức, kĩ năng
            </th>
            <th className="p-2 border border-slate-300 text-center font-bold" rowSpan={2} style={{ width: '12%' }}>
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
            <th className="p-1.5 border border-slate-300 bg-emerald-50/70 text-emerald-900 w-11">TNKQ</th>
            <th className="p-1.5 border border-slate-300 bg-emerald-50/70 text-emerald-900 w-11">TL</th>
            <th className="p-1.5 border border-slate-300 bg-amber-50/70 text-amber-900 w-11">TNKQ</th>
            <th className="p-1.5 border border-slate-300 bg-amber-50/70 text-amber-900 w-11">TL</th>
            <th className="p-1.5 border border-slate-300 bg-purple-50/70 text-purple-900 w-11">TNKQ</th>
            <th className="p-1.5 border border-slate-300 bg-purple-50/70 text-purple-900 w-11">TL</th>
            <th className="p-1.5 border border-slate-300 bg-slate-200/80 text-slate-900 w-12">TNKQ</th>
            <th className="p-1.5 border border-slate-300 bg-slate-200/80 text-slate-900 w-12">TL</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 font-medium">
          {rows.map((row, idx) => {
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
                {/* DÒNG CON 1: SỐ CÂU */}
                <tr className="hover:bg-slate-50/60">
                  <td className="p-2.5 font-semibold text-slate-800 border border-slate-300 align-middle" rowSpan={3}>
                    {row.topicName}
                  </td>
                  <td className="p-2 text-slate-700 font-medium border border-slate-300 text-center bg-slate-50/50">
                    Số câu
                  </td>
                  <td className="p-2 text-center text-emerald-800 font-bold border border-slate-300">{fmtCnt(m1TnC)}</td>
                  <td className="p-2 text-center text-emerald-800 font-bold border border-slate-300">{fmtCnt(m1TlC)}</td>
                  <td className="p-2 text-center text-amber-800 font-bold border border-slate-300">{fmtCnt(m2TnC)}</td>
                  <td className="p-2 text-center text-amber-800 font-bold border border-slate-300">{fmtCnt(m2TlC)}</td>
                  <td className="p-2 text-center text-purple-800 font-bold border border-slate-300">{fmtCnt(m3TnC)}</td>
                  <td className="p-2 text-center text-purple-800 font-bold border border-slate-300">{fmtCnt(m3TlC)}</td>
                  <td className="p-2 text-center font-bold text-slate-900 border border-slate-300 bg-slate-50">{fmtCnt(totalTnC)}</td>
                  <td className="p-2 text-center font-bold text-slate-900 border border-slate-300 bg-slate-50">{fmtCnt(totalTlC)}</td>
                </tr>

                {/* DÒNG CON 2: CÂU SỐ */}
                <tr className="hover:bg-slate-50/60">
                  <td className="p-2 text-slate-700 font-medium border border-slate-300 text-center bg-slate-50/50">
                    Câu số
                  </td>
                  <td className="p-2 text-center text-slate-600 border border-slate-300">{fmtQ(row.m1?.tnQuestions)}</td>
                  <td className="p-2 text-center text-slate-600 border border-slate-300">{fmtQ(row.m1?.tlQuestions)}</td>
                  <td className="p-2 text-center text-slate-600 border border-slate-300">{fmtQ(row.m2?.tnQuestions)}</td>
                  <td className="p-2 text-center text-slate-600 border border-slate-300">{fmtQ(row.m2?.tlQuestions)}</td>
                  <td className="p-2 text-center text-slate-600 border border-slate-300">{fmtQ(row.m3?.tnQuestions)}</td>
                  <td className="p-2 text-center text-slate-600 border border-slate-300">{fmtQ(row.m3?.tlQuestions)}</td>
                  <td className="p-2 text-center text-slate-700 font-medium border border-slate-300 bg-slate-50">{fmtQ(row.total?.tnQuestions)}</td>
                  <td className="p-2 text-center text-slate-700 font-medium border border-slate-300 bg-slate-50">{fmtQ(row.total?.tlQuestions)}</td>
                </tr>

                {/* DÒNG CON 3: SỐ ĐIỂM */}
                <tr className="hover:bg-slate-50/60 border-b-2 border-slate-300">
                  <td className="p-2 text-slate-700 font-medium border border-slate-300 text-center bg-slate-50/50">
                    Số điểm
                  </td>
                  <td className="p-2 text-center text-emerald-800 font-bold border border-slate-300">{fmtPt(m1TnP)}</td>
                  <td className="p-2 text-center text-emerald-800 font-bold border border-slate-300">{fmtPt(m1TlP)}</td>
                  <td className="p-2 text-center text-amber-800 font-bold border border-slate-300">{fmtPt(m2TnP)}</td>
                  <td className="p-2 text-center text-amber-800 font-bold border border-slate-300">{fmtPt(m2TlP)}</td>
                  <td className="p-2 text-center text-purple-800 font-bold border border-slate-300">{fmtPt(m3TnP)}</td>
                  <td className="p-2 text-center text-purple-800 font-bold border border-slate-300">{fmtPt(m3TlP)}</td>
                  <td className="p-2 text-center font-bold text-slate-900 border border-slate-300 bg-slate-50">{fmtPt(totalTnP)}</td>
                  <td className="p-2 text-center font-bold text-slate-900 border border-slate-300 bg-slate-50">{fmtPt(totalTlP)}</td>
                </tr>
              </React.Fragment>
            );
          })}

          {/* HÀNG TỔNG 1: TỔNG SỐ CÂU */}
          <tr className="bg-slate-100 font-bold text-slate-900">
            <td className="p-2 text-center border border-slate-300 font-bold" colSpan={2}>
              Tổng số câu
            </td>
            <td className="p-2 text-center border border-slate-300 text-emerald-800 font-bold">{fmtCnt(tc.m1Tn)}</td>
            <td className="p-2 text-center border border-slate-300 text-emerald-800 font-bold">{fmtCnt(tc.m1Tl)}</td>
            <td className="p-2 text-center border border-slate-300 text-amber-800 font-bold">{fmtCnt(tc.m2Tn)}</td>
            <td className="p-2 text-center border border-slate-300 text-amber-800 font-bold">{fmtCnt(tc.m2Tl)}</td>
            <td className="p-2 text-center border border-slate-300 text-purple-800 font-bold">{fmtCnt(tc.m3Tn)}</td>
            <td className="p-2 text-center border border-slate-300 text-purple-800 font-bold">{fmtCnt(tc.m3Tl)}</td>
            <td className="p-2 text-center border border-slate-300 bg-slate-200 text-slate-900 font-black">{fmtCnt(tc.totalTn)}</td>
            <td className="p-2 text-center border border-slate-300 bg-slate-200 text-slate-900 font-black">{fmtCnt(tc.totalTl)}</td>
          </tr>

          {/* HÀNG TỔNG 2: SỐ ĐIỂM */}
          <tr className="bg-slate-100 font-bold text-slate-900">
            <td className="p-2 text-center border border-slate-300 font-bold" colSpan={2}>
              Số điểm
            </td>
            <td className="p-2 text-center border border-slate-300 text-emerald-800 font-bold">{fmtPt(tp.m1Tn)}</td>
            <td className="p-2 text-center border border-slate-300 text-emerald-800 font-bold">{fmtPt(tp.m1Tl)}</td>
            <td className="p-2 text-center border border-slate-300 text-amber-800 font-bold">{fmtPt(tp.m2Tn)}</td>
            <td className="p-2 text-center border border-slate-300 text-amber-800 font-bold">{fmtPt(tp.m2Tl)}</td>
            <td className="p-2 text-center border border-slate-300 text-purple-800 font-bold">{fmtPt(tp.m3Tn)}</td>
            <td className="p-2 text-center border border-slate-300 text-purple-800 font-bold">{fmtPt(tp.m3Tl)}</td>
            <td className="p-2 text-center border border-slate-300 bg-slate-200 text-slate-900 font-black">{fmtPt(tp.totalTn)}</td>
            <td className="p-2 text-center border border-slate-300 bg-slate-200 text-slate-900 font-black">{fmtPt(tp.totalTl)}</td>
          </tr>

          {/* HÀNG TỔNG 3: TỈ LỆ % (Ô % GỘP CỘT TNKQ VÀ TL) */}
          <tr className="bg-slate-200/90 font-black text-slate-900">
            <td className="p-2 text-center border border-slate-300 font-black" colSpan={2}>
              Tỉ lệ %
            </td>
            <td className="p-2 text-center border border-slate-300 text-emerald-900" colSpan={2}>
              {rr.m1Pct ?? ratios?.M1 ?? ratios?.m1 ?? 65}%
            </td>
            <td className="p-2 text-center border border-slate-300 text-amber-900" colSpan={2}>
              {rr.m2Pct ?? ratios?.M2 ?? ratios?.m2 ?? 20}%
            </td>
            <td className="p-2 text-center border border-slate-300 text-purple-900" colSpan={2}>
              {rr.m3Pct ?? ratios?.M3 ?? ratios?.m3 ?? 15}%
            </td>
            <td className="p-2 text-center border border-slate-300 bg-slate-300 text-slate-950" colSpan={2}>
              100%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function ExamPreviewTabs({ exam, onBackToEdit }) {
  const isTiengViet = exam.subject === 'Tiếng Việt';
  const isEnglish = Boolean(exam.isEnglish || (exam.subject || '').toLowerCase().includes('tiếng anh') || (exam.subject || '').toLowerCase().includes('english'));
  const [activeTab, setActiveTab] = useState(isTiengViet ? 'reading_paper' : 'student_paper');
  const [currentExam, setCurrentExam] = useState(exam);
  const [variants, setVariants] = useState([]);
  const [selectedVariantCode, setSelectedVariantCode] = useState('Gốc');
  const [isExportingWord, setIsExportingWord] = useState(false);
  const [isExportingExcel, setIsExportingExcel] = useState(false);
  const [isExportingPdf, setIsExportingPdf] = useState(false);
  const [isSwitchingSet, setIsSwitchingSet] = useState(false);

  // Xử lý chuyển đổi nhanh giữa 8 bộ đề thi trực tiếp tại màn hình xem trước
  const handleSwitchExamSet = async (newSetIndex) => {
    if (newSetIndex === (currentExam.examSetIndex || 1)) return;
    setIsSwitchingSet(true);
    try {
      const res = await fetchJson('/exam/generate', {
        method: 'POST',
        body: JSON.stringify({
          grade: currentExam.grade,
          subject: currentExam.subject,
          semester: currentExam.semester,
          examPeriod: currentExam.examPeriod,
          examSetIndex: newSetIndex,
          customRatios: currentExam.customRatios || currentExam.matrix?.ratios || { M1: 65, M2: 20, M3: 15 },
          presetId: currentExam.matrixPreset || currentExam.presetId || 'tt27_standard',
          matrix: currentExam.matrix,
          schoolName: currentExam.schoolName,
          governingBody: currentExam.governingBody,
          tiengVietConfig: currentExam.tiengVietConfig || null
        })
      });
      if (res && res.exam) {
        res.exam.examSetIndex = newSetIndex;
        setCurrentExam(res.exam);
        setVariants([]);
        setSelectedVariantCode('Gốc');
        return;
      }
      throw new Error(res?.error || "Không nhận được dữ liệu từ máy chủ");
    } catch (e) {
      console.warn("Server API switch error, using Client Generator fallback for set:", newSetIndex, e);
      try {
        const fallbackExam = generateClientSideExam({
          grade: currentExam.grade,
          subject: currentExam.subject,
          governingBody: currentExam.governingBody || 'UBND XÃ AN TRƯỜNG',
          schoolName: currentExam.schoolName || 'Trường Tiểu học A An Trường',
          semester: currentExam.semester,
          durationMinutes: currentExam.durationMinutes || 40,
          totalPoints: currentExam.totalPoints || 10,
          matrix: currentExam.matrix,
          examSetIndex: newSetIndex,
          tiengVietConfig: currentExam.tiengVietConfig || null,
          englishConfig: currentExam.englishConfig || null
        });
        fallbackExam.examSetIndex = newSetIndex;
        setCurrentExam(fallbackExam);
        setVariants([]);
        setSelectedVariantCode('Gốc');
      } catch (fallbackErr) {
        console.error("Client fallback failed:", fallbackErr);
        alert("Lỗi khi chuyển sang bộ đề khác: " + (fallbackErr.message || fallbackErr));
      }
    } finally {
      setIsSwitchingSet(false);
    }
  };

  // Xử lý tải file PDF (.pdf) chuẩn Nghị định 30
  const handleDownloadPdf = async () => {
    setIsExportingPdf(true);
    try {
      await exportExamToPdfFile(currentExam);
    } catch (e) {
      console.warn("Lỗi tải PDF từ máy chủ, mở cửa sổ in ấn:", e);
      exportExamToPdfPrint(currentExam);
    } finally {
      setIsExportingPdf(false);
    }
  };

  // Xử lý in / lưu PDF chuẩn Nghị định 30 trực tiếp từ trình duyệt
  const handlePrintPdf = () => {
    exportExamToPdfPrint(currentExam);
  };

  // Xử lý tải file Word .docx chuẩn Nghị định 30
  const handleDownloadWord = async () => {
    setIsExportingWord(true);
    try {
      const setSuffix = currentExam.examSetIndex ? `_BoDe${currentExam.examSetIndex}` : '';
      await downloadFile(
        '/exam/export-word',
        { exam: currentExam },
        `De_Kiem_Tra_${currentExam.subject}_Lop${currentExam.grade}${setSuffix}.docx`
      );
    } catch (e) {
      console.warn("Lỗi tải từ máy chủ, chuyển sang tạo file Word trực tiếp:", e);
      // Tự động fallback tải trực tiếp file Word tương thích cao để không gián đoạn giáo viên
      exportExamToWordDoc(currentExam);
    } finally {
      setIsExportingWord(false);
    }
  };

  // Xử lý tải file Word (.doc) nhanh trực tiếp từ trình duyệt
  const handleDirectDownloadDoc = () => {
    exportExamToWordDoc(currentExam);
  };

  // Xử lý tải file Excel .xlsx
  const handleDownloadExcel = async () => {
    setIsExportingExcel(true);
    try {
      const setSuffix = currentExam.examSetIndex ? `_BoDe${currentExam.examSetIndex}` : '';
      await downloadFile(
        '/exam/export-excel',
        { exam: currentExam },
        `Ma_Tran_Dac_Ta_${currentExam.subject}_Lop${currentExam.grade}${setSuffix}.xlsx`
      );
    } catch (e) {
      alert("Lỗi khi xuất Excel: " + e.message);
    } finally {
      setIsExportingExcel(false);
    }
  };

  // Xử lý trộn mã đề (101, 102, 103, 104)
  const handleGenerateVariants = async () => {
    try {
      const res = await fetchJson('/exam/variants', {
        method: 'POST',
        body: JSON.stringify({
          baseExam: currentExam,
          variantCodes: [101, 102, 103, 104]
        })
      });
      if (res && res.variants) {
        setVariants(res.variants);
        setSelectedVariantCode('101');
        setCurrentExam(res.variants[0]);
        return;
      }
      throw new Error(res?.error || "Không thể trộn mã đề từ máy chủ");
    } catch (e) {
      console.warn("Server API variants error, generating client variants fallback:", e);
      const codes = ['101', '102', '103', '104'];
      const clientVariants = codes.map(code => {
        const clonedQs = (currentExam.questions || []).map(q => {
          if (q.options && q.options.length > 0) {
            const shuffledOpts = [...q.options].sort(() => Math.random() - 0.5);
            const correctOpt = q.options.find(o => o.key === q.correctAnswer || o.id === q.correctAnswer || o.isCorrect);
            const newKey = correctOpt ? (shuffledOpts.find(o => o.text === correctOpt.text)?.key || q.correctAnswer) : q.correctAnswer;
            return { ...q, options: shuffledOpts, correctAnswer: newKey };
          }
          return { ...q };
        });
        return {
          ...currentExam,
          variantCode: code,
          title: `${currentExam.title || 'ĐỀ KIỂM TRA'} - MÃ ĐỀ ${code}`,
          questions: clonedQs
        };
      });
      setVariants(clientVariants);
      setSelectedVariantCode('101');
      setCurrentExam(clientVariants[0]);
    }
  };

  // Đổi mã đề hiển thị
  const handleSelectVariant = (code) => {
    setSelectedVariantCode(code);
    if (code === 'Gốc') {
      setCurrentExam(exam);
    } else {
      const v = variants.find(item => item.variantCode === code);
      if (v) setCurrentExam(v);
    }
  };

  const mcQuestions = (currentExam.questions || []).filter(q => q.questionType !== 'constructed_response');
  const crQuestions = (currentExam.questions || []).filter(q => q.questionType === 'constructed_response');
  const mcPoints = Math.round(mcQuestions.reduce((a, b) => a + (b.points || 0), 0) * 10) / 10;
  const crPoints = Math.round(crQuestions.reduce((a, b) => a + (b.points || 0), 0) * 10) / 10;

  return (
    <div className="space-y-5 max-w-5xl mx-auto pb-16">
      {/* 8 Exam Sets Fast Switcher */}
      <div className="p-3 bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 border border-emerald-200/90 rounded-2xl flex flex-wrap items-center justify-between gap-3 shadow-xs no-print">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-extrabold text-xs text-emerald-950 uppercase tracking-wide">
            Kho 8+ Bộ đề phong phú:
          </span>
          <span className="text-[11px] text-emerald-800 font-medium">
            (Đang mở: <strong className="text-emerald-950 font-bold">Bộ đề số {currentExam.examSetIndex || 1}</strong>)
          </span>
          {isSwitchingSet && (
            <span className="text-[11px] font-bold text-amber-700 animate-pulse ml-2 bg-amber-100 px-2 py-0.5 rounded-md">
              Đang tải bộ đề mới...
            </span>
          )}
        </div>
        <div className="flex items-center gap-1.5 flex-wrap">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
            const isActive = (currentExam.examSetIndex || 1) === num;
            return (
              <button
                key={num}
                onClick={() => handleSwitchExamSet(num)}
                disabled={isSwitchingSet}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 shadow-2xs ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-xs scale-105 ring-2 ring-emerald-300'
                    : 'bg-white text-slate-700 border border-slate-300 hover:bg-emerald-100 hover:text-emerald-900 hover:border-emerald-300'
                }`}
                title={`Chuyển sang xem và tải trọn bộ Bộ đề số ${num}`}
              >
                <span>Bộ đề {num}</span>
                {isActive && <CheckCircle2 className="w-3.5 h-3.5" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Top Action Toolbar */}
      <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-wrap items-center justify-between gap-3 no-print">
        {/* Tab switcher */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold text-slate-600 flex-wrap">
          {isTiengViet ? (
            <>
              <button
                onClick={() => setActiveTab('reading_paper')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'reading_paper' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-purple-600" />
                <span>1. Phiếu Đọc (10đ)</span>
              </button>
              <button
                onClick={() => setActiveTab('writing_paper')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'writing_paper' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'hover:text-slate-900'
                }`}
              >
                <PenTool className="w-3.5 h-3.5 text-blue-600" />
                <span>2. Phiếu Viết (10đ)</span>
              </button>
            </>
          ) : isEnglish ? (
            <>
              <button
                onClick={() => setActiveTab('student_paper')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'student_paper' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'hover:text-slate-900'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-sky-600" />
                <span>1. Đề 4 Kỹ năng (10đ)</span>
              </button>
              <button
                onClick={() => setActiveTab('student_rw_paper')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'student_rw_paper' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'hover:text-slate-900'
                }`}
                title="Phiếu in bài thi Đọc & Viết (Reading & Writing 5.0đ) làm trên lớp giống mẫu KT lớp 5.1"
              >
                <PenTool className="w-3.5 h-3.5 text-emerald-600" />
                <span>2. Phiếu Đọc & Viết (5đ)</span>
              </button>
            </>
          ) : (
            <button
              onClick={() => setActiveTab('student_paper')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'student_paper' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-emerald-600" />
              <span>Đề Học sinh</span>
            </button>
          )}

          <button
            onClick={() => setActiveTab('answer_key')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'answer_key' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'hover:text-slate-900'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
            <span>{isEnglish ? 'Đáp án & Transcripts' : 'Đáp án & Rubric'}</span>
          </button>
          <button
            onClick={() => setActiveTab('matrix')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'matrix' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'hover:text-slate-900'
            }`}
          >
            <TableProperties className="w-3.5 h-3.5 text-amber-600" />
            <span>Ma trận TT27 (2 tầng)</span>
          </button>
          <button
            onClick={() => setActiveTab('specifications')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'specifications' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'hover:text-slate-900'
            }`}
          >
            <ListTree className="w-3.5 h-3.5 text-purple-600" />
            <span>Bản đặc tả</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Trộn mã đề */}
          <button
            onClick={handleGenerateVariants}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all"
            title="Tạo 4 mã đề tương đương (101, 102, 103, 104)"
          >
            <Shuffle className="w-3.5 h-3.5 text-indigo-600" />
            <span>Trộn 4 mã đề</span>
          </button>

          {/* In PDF */}
          <button
            onClick={handlePrintPdf}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all"
            title="Mở cửa sổ in ấn chuẩn Nghị định 30 (hỗ trợ in trực tiếp hoặc Lưu dưới dạng PDF sạch đẹp)"
          >
            <Printer className="w-3.5 h-3.5 text-slate-600" />
            <span>In (PDF)</span>
          </button>

          {/* Xuất Excel */}
          <button
            onClick={handleDownloadExcel}
            disabled={isExportingExcel}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition-all"
            title="Xuất bảng Ma trận và Bản đặc tả ra Excel (.xlsx)"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
            <span>{isExportingExcel ? 'Đang xuất...' : 'Xuất Excel'}</span>
          </button>

          {/* Xuất Word (.doc) nhanh trực tiếp từ Client */}
          <button
            onClick={handleDirectDownloadDoc}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 text-xs font-bold transition-all"
            title="Tải nhanh file Word (.doc) tương thích cao, mở đẹp ngay trên Word mà không cần kết nối máy chủ"
          >
            <Download className="w-3.5 h-3.5 text-blue-600" />
            <span>Tải Word (.doc) nhanh</span>
          </button>

          {/* Xuất Word (.docx) chuẩn NĐ 30 */}
          <button
            onClick={handleDownloadWord}
            disabled={isExportingWord}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-all"
            title="Tải file Word (.docx) chuẩn thể thức Nghị định 30/2020/NĐ-CP kèm Ma trận 2 tầng và Bản đặc tả"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isExportingWord ? 'Đang tạo...' : 'Tải Word (.docx) NĐ 30'}</span>
          </button>

          {/* Xuất PDF (.pdf) chuẩn NĐ 30 */}
          <button
            onClick={handleDownloadPdf}
            disabled={isExportingPdf}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-sm transition-all"
            title="Tải file PDF (.pdf) chuẩn thể thức Nghị định 30/2020/NĐ-CP kèm hình ảnh sắc nét, Ma trận 2 tầng và Bản đặc tả"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{isExportingPdf ? 'Đang tạo PDF...' : 'Tải PDF (.pdf) NĐ 30'}</span>
          </button>
        </div>
      </div>

      {/* Variant Selector Bar (if variants generated) */}
      {variants.length > 0 && (
        <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-xl flex items-center justify-between text-xs text-indigo-900 no-print">
          <div className="flex items-center gap-2 font-bold">
            <Shuffle className="w-4 h-4 text-indigo-600" />
            <span>Đã tạo 4 mã đề tương đương:</span>
          </div>
          <div className="flex items-center gap-1.5">
            {['Gốc', '101', '102', '103', '104'].map((code) => (
              <button
                key={code}
                onClick={() => handleSelectVariant(code)}
                className={`px-3 py-1 rounded-lg font-bold text-xs transition-all ${
                  selectedVariantCode === code
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white border border-indigo-200 text-indigo-700 hover:bg-indigo-100'
                }`}
              >
                Mã {code}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ================================= TAB: PHIẾU ĐỌC TIẾNG VIỆT (CHUẨN LÊ THÀNH LONG) ================================= */}
      {activeTab === 'reading_paper' && isTiengViet && (
        <div className="bg-white rounded-2xl border border-slate-200/90 p-8 shadow-sm space-y-6 print:p-0 print:border-none print:shadow-none">
          {/* Header Bài thi Tiếng Việt - Phần Đọc */}
          <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-300 text-xs">
            <div className="space-y-1">
              <div className="font-bold uppercase tracking-wide text-slate-800">
                {currentExam.governingBody || 'UBND XÃ AN TRƯỜNG'}
              </div>
              <div className="font-bold uppercase text-slate-900 text-sm">
                {currentExam.schoolName || 'TRƯỜNG TIỂU HỌC A AN TRƯỜNG'}
              </div>
              <div className="pt-2 text-slate-700">
                Họ và tên: ............................................................................
              </div>
              <div className="text-slate-700">
                Lớp: <strong>{currentExam.grade}</strong>......   Số báo danh: ....................................
              </div>
            </div>

            <div className="text-center space-y-1">
              <div className="font-black text-sm uppercase text-slate-900">
                {currentExam.title || 'BÀI KIỂM TRA ĐỊNH KỲ MÔN TIẾNG VIỆT'}
              </div>
              <div className="font-bold text-xs uppercase text-emerald-800">
                MÔN: TIẾNG VIỆT – LỚP {currentExam.grade}
              </div>
              <div className="font-bold text-xs uppercase text-purple-700">
                (A. PHẦN KIỂM TRA ĐỌC – 10 ĐIỂM)
              </div>
              <div className="text-slate-500 italic text-[11px]">
                Thời gian làm bài: {currentExam.grade <= 2 ? '35 phút' : '40 phút'} (không kể phát đề)
              </div>
            </div>
          </div>

          {/* Khung Điểm 3 Ô Chuẩn Tiếng Việt & Nhận xét GV (7 phần), Ý kiến PH (3 phần) */}
          <div className="flex border border-slate-400 rounded-lg overflow-hidden text-xs">
            <div className="w-[16%] border-r border-slate-400 p-2.5 text-center space-y-1">
              <div className="font-bold text-slate-700">1. Đọc tiếng</div>
              <div className="text-slate-500 font-bold">..... / 4,0 đ</div>
            </div>
            <div className="w-[16%] border-r border-slate-400 p-2.5 text-center space-y-1">
              <div className="font-bold text-slate-700">2. Đọc hiểu</div>
              <div className="text-slate-500 font-bold">..... / 6,0 đ</div>
            </div>
            <div className="w-[18%] border-r border-slate-400 p-2.5 text-center space-y-1 bg-purple-50/50">
              <div className="font-bold text-purple-800">Tổng điểm</div>
              <div className="text-purple-700 font-black text-sm">..... / 10 đ</div>
            </div>
            <div className="w-[35%] border-r border-slate-400 p-2.5 space-y-1">
              <div className="font-bold text-slate-700 text-center">NHẬN XÉT CỦA GIÁO VIÊN</div>
              <div className="text-slate-300 text-[10px] leading-relaxed">
                ......................................................................................<br/>
                ......................................................................................
              </div>
            </div>
            <div className="w-[15%] p-2.5 space-y-1">
              <div className="font-bold text-slate-700 text-center">Ý KIẾN PHỤ HUYNH</div>
              <div className="text-slate-300 text-[10px] leading-relaxed text-center">
                ....................................<br/>
                ....................................
              </div>
            </div>
          </div>

          {/* I. ĐỌC THÀNH TIẾNG (4,0 ĐIỂM) - QUY TẮC TINH TẾ: CHỈ IN TỰA BÀI + TRANG SGK */}
          <div className="space-y-3 pt-2">
            <div className="font-bold text-sm text-slate-900 border-b border-slate-200 pb-1 flex items-center justify-between">
              <span>I. ĐỌC THÀNH TIẾNG (4,0 điểm)</span>
              <span className="text-[11px] text-purple-700 font-bold italic">Bốc thăm 1 trong các bài sau • Thời gian đọc ~1 phút</span>
            </div>
            <div className="p-3.5 bg-purple-50/60 border border-purple-200 rounded-xl text-xs space-y-2 text-slate-700">
              <p className="font-medium text-purple-950 italic">
                * Học sinh bốc thăm đọc thành tiếng một đoạn văn/thơ từ bộ sách Tiếng Việt {currentExam.grade} (bộ sách Chân trời sáng tạo) và trả lời câu hỏi đọc hiểu của thầy cô:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-medium">
                {(currentExam.readingExam?.oralItems || [
                  { title: "Bài 1: Tuổi Ngựa", bookVolume: "Tập 1", page: "Trang 10" },
                  { title: "Bài 2: Trải nghiệm để lớn khôn", bookVolume: "Tập 1", page: "Trang 16" },
                  { title: "Bài 3: Vệt nắng chiều thu", bookVolume: "Tập 1", page: "Trang 24" },
                  { title: "Bài 4: Tiếng ru của mẹ", bookVolume: "Tập 1", page: "Trang 32" },
                  { title: "Bài 5: Kì quan đại ngàn", bookVolume: "Tập 1", page: "Trang 40" }
                ]).map((item, idx) => (
                  <div key={idx} className="p-2.5 bg-white rounded-lg border border-purple-200 shadow-2xs flex items-center justify-between">
                    <div>
                      <strong className="text-purple-900">{idx + 1}. {item.title}</strong>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-bold">
                      {item.bookVolume} • {item.page}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* II. ĐỌC HIỂU VÀ LUYỆN TỪ VÀ CÂU (6,0 ĐIỂM) */}
          <div className="space-y-4 pt-2">
            <div className="font-bold text-sm text-slate-900 border-b border-slate-200 pb-1 flex items-center justify-between">
              <span>II. ĐỌC THẦM VÀ LÀM BÀI TẬP (6,0 điểm)</span>
              <span className="text-[11px] text-slate-400 font-normal italic">Đọc kỹ văn bản sau và trả lời các câu hỏi</span>
            </div>

            {/* VĂN BẢN ĐỌC THẦM */}
            <div className="p-4 bg-amber-50/40 border border-amber-200 rounded-xl space-y-2 text-xs">
              <div className="text-center space-y-0.5">
                <div className="font-bold uppercase text-amber-950 text-sm">
                  {currentExam.readingExam?.comprehensionReading?.title || "Kì quan Rừng Cúc Phương"}
                </div>
                {currentExam.readingExam?.comprehensionReading?.author && (
                  <div className="italic text-slate-500 text-[11px]">
                    Tác giả: {currentExam.readingExam.comprehensionReading.author}
                  </div>
                )}
              </div>
              <p className="leading-relaxed text-slate-800 italic indent-4 text-justify">
                {currentExam.readingExam?.comprehensionReading?.passage || 
                  "Vườn quốc gia Cúc Phương là một bảo tàng thiên nhiên rộng lớn với thảm thực vật nhiệt đới vô cùng phong phú. Nơi đây có cây chò ngàn năm tuổi sừng sững giữa đại ngàn, thân cây to chừng hơn mười người ôm không xuể. Vào mùa bướm nở, hàng triệu cánh bướm trắng muốt rập rờn bay lượn ngợp lối đi tựa như lạc vào chốn bồng lai tiên cảnh. Cúc Phương không chỉ là niềm tự hào của thiên nhiên Việt Nam mà còn là lá phổi xanh kì diệu cần được muôn đời gìn giữ."}
              </p>
            </div>

            {/* HỆ THỐNG CÂU HỎI */}
            <div className="space-y-4 text-xs leading-relaxed">
              {(currentExam.readingExam?.questions || currentExam.questions || []).map((q, idx) => (
                <div key={q.questionId || idx} className="space-y-2">
                  <div>
                    <strong className="text-slate-900">Câu {idx + 1} ({q.points} đ – {q.level}):</strong> {q.questionText}
                  </div>

                  {/* Lựa chọn trắc nghiệm */}
                  {q.questionType === "multiple_choice" && q.options && q.options.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4">
                      {q.options.map((opt) => (
                        <div key={opt.id} className="text-slate-800">
                          <strong>{opt.id}.</strong> {opt.text}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Câu hỏi tự luận / điền khuyết */}
                  {q.questionType !== "multiple_choice" && (
                    <div className="pt-1.5 pl-2">
                      <div className="text-slate-400 italic text-[11px] mb-1">Trả lời:</div>
                      <div className="space-y-2.5 text-slate-200 select-none">
                        <div className="border-b border-dotted border-slate-300 h-4"></div>
                        <div className="border-b border-dotted border-slate-300 h-4"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================================= TAB: PHIẾU VIẾT TIẾNG VIỆT (PHÂN BIỆT LỚP 1-3 & LỚP 4-5) ================================= */}
      {activeTab === 'writing_paper' && isTiengViet && (
        <div className="bg-white rounded-2xl border border-slate-200/90 p-8 shadow-sm space-y-6 print:p-0 print:border-none print:shadow-none">
          {/* Header Bài thi Tiếng Việt - Phần Viết */}
          <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-300 text-xs">
            <div className="space-y-1">
              <div className="font-bold uppercase tracking-wide text-slate-800">
                {currentExam.governingBody || 'UBND XÃ AN TRƯỜNG'}
              </div>
              <div className="font-bold uppercase text-slate-900 text-sm">
                {currentExam.schoolName || 'TRƯỜNG TIỂU HỌC A AN TRƯỜNG'}
              </div>
              <div className="pt-2 text-slate-700">
                Họ và tên: ............................................................................
              </div>
              <div className="text-slate-700">
                Lớp: <strong>{currentExam.grade}</strong>......   Số báo danh: ....................................
              </div>
            </div>

            <div className="text-center space-y-1">
              <div className="font-black text-sm uppercase text-slate-900">
                {currentExam.title || 'BÀI KIỂM TRA ĐỊNH KỲ MÔN TIẾNG VIỆT'}
              </div>
              <div className="font-bold text-xs uppercase text-emerald-800">
                MÔN: TIẾNG VIỆT – LỚP {currentExam.grade}
              </div>
              <div className="font-bold text-xs uppercase text-blue-700">
                (B. PHẦN KIỂM TRA VIẾT – 10 ĐIỂM)
              </div>
              <div className="text-slate-500 italic text-[11px]">
                Thời gian làm bài: {currentExam.grade <= 2 ? '35 phút' : '40 phút'} (không kể phát đề)
              </div>
            </div>
          </div>

          {/* KHUNG ĐIỂM PHẦN VIẾT: KHỐI 1-3 (2 Ô CHÍNH TẢ + TLV) HOẶC KHỐI 4-5 (Ô 10Đ TẬP LÀM VĂN) */}
          {currentExam.grade <= 3 ? (
            <div className="flex border border-slate-400 rounded-lg overflow-hidden text-xs">
              <div className="w-[18%] border-r border-slate-400 p-2.5 text-center space-y-1">
                <div className="font-bold text-slate-700">1. Chính tả</div>
                <div className="text-slate-500 font-bold">..... / 4,0 đ</div>
              </div>
              <div className="w-[18%] border-r border-slate-400 p-2.5 text-center space-y-1">
                <div className="font-bold text-slate-700">2. Tập làm văn</div>
                <div className="text-slate-500 font-bold">..... / 6,0 đ</div>
              </div>
              <div className="w-[14%] border-r border-slate-400 p-2.5 text-center space-y-1 bg-blue-50/50">
                <div className="font-bold text-blue-800">Tổng điểm</div>
                <div className="text-blue-700 font-black text-sm">..... / 10 đ</div>
              </div>
              <div className="w-[35%] border-r border-slate-400 p-2.5 space-y-1">
                <div className="font-bold text-slate-700 text-center">NHẬN XÉT CỦA GIÁO VIÊN</div>
                <div className="text-slate-300 text-[10px] leading-relaxed">
                  ...........................................................................<br/>
                  ...........................................................................
                </div>
              </div>
              <div className="w-[15%] p-2.5 space-y-1">
                <div className="font-bold text-slate-700 text-center">Ý KIẾN PHỤ HUYNH</div>
                <div className="text-slate-300 text-[10px] leading-relaxed text-center">
                  ....................................<br/>
                  ....................................
                </div>
              </div>
            </div>
          ) : (
            <div className="flex border border-slate-400 rounded-lg overflow-hidden text-xs">
              <div className="w-[30%] border-r border-slate-400 p-3 text-center space-y-2">
                <div className="font-bold uppercase text-slate-700">ĐIỂM BÀI VIẾT (10,0 ĐIỂM)</div>
                <div className="text-slate-400 text-[11px] pt-1">
                  Bằng số: ....................................<br/>
                  Bằng chữ: ..................................
                </div>
              </div>
              <div className="w-[49%] border-r border-slate-400 p-3 space-y-1">
                <div className="font-bold uppercase text-slate-700 text-center">NHẬN XÉT CỦA GIÁO VIÊN</div>
                <div className="text-slate-300 text-[11px] leading-relaxed">
                  ........................................................................................................<br/>
                  ........................................................................................................
                </div>
              </div>
              <div className="w-[21%] p-3 space-y-1">
                <div className="font-bold uppercase text-slate-700 text-center">Ý KIẾN PHỤ HUYNH</div>
                <div className="text-slate-300 text-[11px] leading-relaxed text-center">
                  ................................................<br/>
                  ................................................
                </div>
              </div>
            </div>
          )}

          {/* KHỐI 1, 2, 3: CHÍNH TẢ (4Đ) + VIẾT ĐOẠN VĂN (6Đ) */}
          {currentExam.grade <= 3 ? (
            <div className="space-y-6">
              {/* 1. Chính tả */}
              <div className="space-y-3 pt-2">
                <div className="font-bold text-sm text-slate-900 border-b border-slate-200 pb-1 flex items-center justify-between">
                  <span>1. CHÍNH TẢ (Nghe - viết): 4,0 điểm</span>
                  <span className="text-[11px] text-slate-500 italic">Thời gian viết: khoảng 15 phút</span>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1.5 text-slate-700">
                  <div className="font-bold">
                    Bài viết: <em>{currentExam.writingExam?.dictation?.title || "Buổi sáng trên quê hương"}</em>
                  </div>
                  <p className="leading-relaxed italic indent-4">
                    "{currentExam.writingExam?.dictation?.content || "Khi ông mặt trời vừa nhô lên khỏi rặng tre, sương sớm long lanh còn đọng trên từng ngọn cỏ. Làn gió thu nhẹ nhàng thổi qua mang theo hương thơm ngát của đồng lúa chín. Đàn chim ríu rít chuyền cành cất tiếng hót đón chào ngày mới tươi vui."}"
                  </p>
                </div>
                <div className="pt-2">
                  <div className="text-slate-400 italic text-[11px] mb-1">Bài làm chính tả:</div>
                  <div className="space-y-3.5 text-slate-200 select-none">
                    <div className="border-b border-dotted border-slate-300 h-4"></div>
                    <div className="border-b border-dotted border-slate-300 h-4"></div>
                    <div className="border-b border-dotted border-slate-300 h-4"></div>
                    <div className="border-b border-dotted border-slate-300 h-4"></div>
                    <div className="border-b border-dotted border-slate-300 h-4"></div>
                  </div>
                </div>
              </div>

              {/* 2. Tập làm văn */}
              <div className="space-y-3 pt-4">
                <div className="font-bold text-sm text-slate-900 border-b border-slate-200 pb-1 flex items-center justify-between">
                  <span>2. TẬP LÀM VĂN (Viết đoạn văn): 6,0 điểm</span>
                  <span className="text-[11px] text-slate-500 italic">Dung lượng: {currentExam.grade <= 2 ? '3 đến 5 câu' : '5 đến 7 câu'}</span>
                </div>
                <div className="p-3 bg-blue-50/50 border border-blue-200 rounded-xl text-xs space-y-2 text-slate-800">
                  <div>
                    <strong>Đề bài:</strong> {currentExam.writingExam?.paragraphWriting?.prompt || "Viết đoạn văn (từ 5 đến 7 câu) thể hiện tình cảm, cảm xúc của em đối với một người thân yêu trong gia đình (ông, bà, bố, mẹ...)."}
                  </div>
                  {currentExam.writingExam?.paragraphWriting?.suggestions && (
                    <div className="text-[11px] text-slate-600 pl-2 border-l-2 border-blue-400 space-y-0.5">
                      <div className="font-bold text-blue-900">Gợi ý:</div>
                      {currentExam.writingExam.paragraphWriting.suggestions.map((s, sIdx) => (
                        <div key={sIdx}>• {s}</div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="pt-2">
                  <div className="text-slate-400 italic text-[11px] mb-1">Bài làm:</div>
                  <div className="space-y-3.5 text-slate-200 select-none">
                    {Array.from({ length: Number(currentExam.grade) <= 2 ? 5 : 10 }).map((_, i) => (
                      <div key={i} className="border-b border-dotted border-slate-300 h-4"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* KHỐI 4, 5: BÀI VĂN HOÀN CHỈNH (10,0 ĐIỂM) KÈM DÀN Ý & BAREM 5 TIÊU CHÍ */
            <div className="space-y-4 pt-2">
              <div className="font-bold text-sm text-slate-900 border-b border-slate-200 pb-1 flex items-center justify-between">
                <span>TẬP LÀM VĂN (10,0 điểm duy nhất)</span>
                <span className="text-[11px] text-blue-700 font-bold">Thể loại: {currentExam.writingExam?.essay?.genre || "Văn miêu tả"}</span>
              </div>

              <div className="p-4 bg-blue-50/50 border border-blue-200 rounded-xl text-xs space-y-2.5 text-slate-800">
                <div className="font-medium">
                  <strong>Đề bài:</strong> {currentExam.writingExam?.essay?.prompt || "Em hãy viết một bài văn miêu tả một cảnh đẹp thiên nhiên (cảnh bình minh trên biển, cảnh cánh đồng lúa chín quê em, hoặc cảnh công viên buổi sáng) mà em có dịp quan sát và yêu thích."}
                </div>

                {currentExam.writingExam?.essay?.suggestions && (
                  <div className="text-[11px] text-slate-700 pl-3 border-l-2 border-blue-500 space-y-1 bg-white p-2.5 rounded-lg">
                    <div className="font-bold text-blue-900">Gợi ý dàn ý:</div>
                    {currentExam.writingExam.essay.suggestions.map((s, sIdx) => (
                      <div key={sIdx}>• {s}</div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-2">
                <div className="text-slate-400 italic text-[11px] mb-1">Bài làm:</div>
                <div className="space-y-4 text-slate-200 select-none">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div key={i} className="border-b border-dotted border-slate-300 h-4"></div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================================= TAB 1: ĐỀ HỌC SINH MÔN TIẾNG ANH (CHUẨN GLOBAL SUCCESS 4 KỸ NĂNG) ================================= */}
      {activeTab === 'student_paper' && isEnglish && (
        <div className="bg-white rounded-2xl border border-slate-200/90 p-8 shadow-sm space-y-6 print:p-0 print:border-none print:shadow-none font-sans">
          {/* Header Tiếng Anh */}
          <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-300 text-xs">
            <div className="space-y-1">
              <div className="font-bold uppercase text-slate-900 text-sm">
                {currentExam.schoolName || 'A AN TRUONG PRIMARY SCHOOL'}
              </div>
              <div className="pt-2 text-slate-700">
                Full name: ............................................................................
              </div>
              <div className="text-slate-700">
                Class: <strong>{currentExam.grade}</strong>......   School year: 20... - 20...
              </div>
            </div>

            <div className="text-center space-y-1">
              <div className="font-black text-sm uppercase text-slate-900">
                {currentExam.title || `THE FIRST TERM TEST FOR GRADE ${currentExam.grade}`}
              </div>
              <div className="font-bold text-xs uppercase text-indigo-700">
                GRADE {currentExam.grade} – GLOBAL SUCCESS
              </div>
              <div className="text-slate-500 italic text-[11px]">
                Time allowed: {currentExam.durationMinutes || 40} minutes
              </div>
            </div>
          </div>

          {/* Bảng điểm 4 kỹ năng */}
          <div className="border border-slate-400 rounded-lg overflow-hidden text-xs">
            <div className="grid grid-cols-6 text-center font-bold bg-slate-100 border-b border-slate-400 py-1.5">
              <div className="border-r border-slate-400">Skills</div>
              <div className="border-r border-slate-400">Listening</div>
              <div className="border-r border-slate-400">Reading</div>
              <div className="border-r border-slate-400">Writing</div>
              <div className="border-r border-slate-400">Speaking</div>
              <div>Total</div>
            </div>
            <div className="grid grid-cols-6 text-center py-3 bg-white font-bold">
              <div className="border-r border-slate-400 text-slate-700">Marks</div>
              <div className="border-r border-slate-400 text-slate-400">....../{currentExam.skillsRatio?.listening || 3}</div>
              <div className="border-r border-slate-400 text-slate-400">....../{currentExam.skillsRatio?.reading || 2.5}</div>
              <div className="border-r border-slate-400 text-slate-400">....../{currentExam.skillsRatio?.writing || 2.5}</div>
              <div className="border-r border-slate-400 text-slate-400">....../{currentExam.skillsRatio?.speaking || 2}</div>
              <div className="text-indigo-700 font-black text-sm">....../10</div>
            </div>
            <div className="grid grid-cols-2 border-t border-slate-400 p-2.5 bg-slate-50/50 text-[11px]">
              <div>
                <strong>Comments:</strong> ................................................................................
              </div>
              <div className="text-right">
                <strong>Supervisor signature:</strong> ............................................
              </div>
            </div>
          </div>

          {/* 4 PHẦN KỸ NĂNG */}
          {/* I. LISTENING */}
          <div className="space-y-4 pt-2">
            <div className="font-extrabold text-sm text-sky-950 uppercase border-b-2 border-sky-500 pb-1 flex items-center justify-between">
              <span>{currentExam.parts?.listening?.title || 'LISTENING (3.0 marks)'}</span>
              <span className="text-[11px] text-sky-700 font-medium italic">Listen to the recording and answer the tasks</span>
            </div>
            {(currentExam.parts?.listening?.tasks || []).map((t, tIdx) => {
              const hasOptionsWithImages = (t.items || []).some(it => it.options && it.options.some(opt => opt.image || opt.imageKey));

              if (hasOptionsWithImages) {
                // TASK 1: Listen and tick (Cặp ảnh a & b kèm ô vuông tick)
                return (
                  <div key={tIdx} className="p-4 bg-sky-50/40 border border-sky-200 rounded-2xl space-y-3 text-xs">
                    <div className="font-bold text-sky-900 text-xs">
                      TASK {t.taskNumber || (tIdx + 1)}. {t.taskTitle} ({t.points || 1.0} mark)
                    </div>
                    <div className="italic text-slate-500 text-[11px]">{t.taskDesc}</div>
                    <div className="space-y-3 pt-1">
                      {(t.items || []).map((it, iIdx) => (
                        <div key={iIdx} className="p-3 bg-white rounded-xl border border-sky-200 shadow-2xs">
                          <div className="font-bold text-sky-950 mb-2 text-xs flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-[11px]">
                              {iIdx + 1}
                            </span>
                            <span>Question {iIdx + 1}</span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {(it.options || []).map(opt => {
                              const imgSrc = getEnglishImageSrc(opt);
                              return (
                                <div key={opt.id} className="p-2.5 border-2 border-slate-200 rounded-xl bg-slate-50/70 flex flex-col items-center hover:border-sky-300 transition-all">
                                  <div className="w-full flex items-center justify-between mb-1.5 px-1">
                                    <span className="w-6 h-6 rounded-full bg-sky-600 text-white font-black text-xs flex items-center justify-center uppercase shadow-2xs">
                                      {opt.id}
                                    </span>
                                    <div className="w-6 h-6 rounded-md border-2 border-slate-500 bg-white flex items-center justify-center font-bold text-sky-700"></div>
                                  </div>
                                  {imgSrc ? (
                                    <img
                                      src={imgSrc}
                                      alt={`Option ${opt.id}`}
                                      className="h-28 max-w-full object-contain rounded-lg border border-slate-200 bg-white p-1"
                                    />
                                  ) : (
                                    <div className="h-28 w-full flex items-center justify-center text-slate-400 italic bg-white rounded-lg border border-dashed border-slate-300">
                                      [Image {opt.id}]
                                    </div>
                                  )}
                                  <div className="mt-2 text-center font-bold text-slate-800 text-xs">
                                    {opt.text}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              const isNumberTask = (t.taskTitle || '').toLowerCase().includes('number');
              const isTickCrossTask = (t.taskTitle || '').toLowerCase().includes('tick or cross');
              const hasDirectImages = (t.items || []).some(it => it.image || it.imageKey);

              // TASK: Listen and number (với 4 tranh đánh số 1-4)
              if (isNumberTask && hasDirectImages) {
                const items = t.items || [];
                const labels = ['a', 'b', 'c', 'd'];
                return (
                  <div key={tIdx} className="p-4 bg-sky-50/40 border border-sky-200 rounded-2xl space-y-3 text-xs">
                    <div className="font-bold text-sky-900 text-xs">
                      TASK {t.taskNumber || (tIdx + 1)}. {t.taskTitle} ({t.points || 1.0} mark)
                    </div>
                    <div className="italic text-slate-500 text-[11px]">{t.taskDesc}</div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                      {items.map((it, idx) => {
                        const imgSrc = getEnglishImageSrc(it);
                        return (
                          <div key={idx} className="p-2.5 bg-white rounded-xl border-2 border-sky-200 shadow-2xs flex flex-col items-center">
                            <div className="w-full text-left font-bold text-sky-700 text-xs mb-1">
                              Picture {labels[idx] || (idx + 1)}
                            </div>
                            {imgSrc ? (
                              <img src={imgSrc} alt="" className="h-28 w-full object-contain rounded-lg border border-slate-100 p-1 bg-white" />
                            ) : (
                              <div className="h-28 flex items-center justify-center text-slate-400 italic">[Tranh {labels[idx]}]</div>
                            )}
                            <div className="mt-2 flex items-center justify-center">
                              <span className="w-8 h-8 rounded-lg border-2 border-slate-500 bg-white flex items-center justify-center font-black text-sky-800 text-sm"></span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              // TASK: Listen and tick or cross (với 4 tranh tick/cross)
              if (isTickCrossTask && hasDirectImages) {
                const items = t.items || [];
                return (
                  <div key={tIdx} className="p-4 bg-sky-50/40 border border-sky-200 rounded-2xl space-y-3 text-xs">
                    <div className="font-bold text-sky-900 text-xs">
                      TASK {t.taskNumber || (tIdx + 1)}. {t.taskTitle} ({t.points || 1.0} mark)
                    </div>
                    <div className="italic text-slate-500 text-[11px]">{t.taskDesc}</div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                      {items.map((it, idx) => {
                        const imgSrc = getEnglishImageSrc(it);
                        return (
                          <div key={idx} className="p-2.5 bg-white rounded-xl border-2 border-sky-200 shadow-2xs flex flex-col items-center">
                            <div className="w-full text-left font-bold text-sky-700 text-xs mb-1">
                              {idx + 1}.
                            </div>
                            {imgSrc ? (
                              <img src={imgSrc} alt="" className="h-28 w-full object-contain rounded-lg border border-slate-100 p-1 bg-white" />
                            ) : (
                              <div className="h-28 flex items-center justify-center text-slate-400 italic">[Tranh {idx + 1}]</div>
                            )}
                            <div className="mt-2 text-center text-slate-800 text-[11px] min-h-[28px] leading-tight">
                              {it.statement || it.topic || ''}
                            </div>
                            <div className="mt-1 flex items-center justify-center">
                              <span className="w-7 h-7 rounded-lg border-2 border-slate-500 bg-white flex items-center justify-center"></span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              if (t.taskNumber === 2 || (t.taskTitle || '').toLowerCase().includes('circle')) {
                // TASK 2: Listen and circle (bảng 2 cột x 2 hàng)
                const items = t.items || [];
                return (
                  <div key={tIdx} className="p-4 bg-sky-50/40 border border-sky-200 rounded-2xl space-y-3 text-xs">
                    <div className="font-bold text-sky-900 text-xs">
                      TASK {t.taskNumber || (tIdx + 1)}. {t.taskTitle} ({t.points || 1.0} mark)
                    </div>
                    <div className="italic text-slate-500 text-[11px]">{t.taskDesc}</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                      {items.map((it, iIdx) => (
                        <div key={iIdx} className="p-3 bg-white rounded-xl border border-sky-200 shadow-2xs space-y-1.5">
                          <div className="font-bold text-slate-900">
                            {it.questionText || it.question || ''}
                          </div>
                          {it.options && (
                            <div className="flex gap-4 pl-2 pt-1 font-medium">
                              {it.options.map(opt => (
                                <div key={opt.id} className="px-2.5 py-1 rounded-lg bg-sky-50 border border-sky-200 text-sky-900">
                                  <strong>{opt.id}.</strong> {opt.text}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              // TASK 3: Listen and tick True or False
              return (
                <div key={tIdx} className="p-4 bg-sky-50/40 border border-sky-200 rounded-2xl space-y-3 text-xs">
                  <div className="font-bold text-sky-900 text-xs">
                    TASK {t.taskNumber || (tIdx + 1)}. {t.taskTitle} ({t.points || 1.0} mark)
                  </div>
                  <div className="italic text-slate-500 text-[11px]">{t.taskDesc}</div>
                  <div className="overflow-hidden rounded-xl border border-sky-200 bg-white">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead className="bg-sky-100/70 text-sky-950 font-bold border-b border-sky-200">
                        <tr>
                          <th className="p-2 border-r border-sky-200 w-12 text-center">No.</th>
                          <th className="p-2 border-r border-sky-200">Statements</th>
                          <th className="p-2 border-r border-sky-200 w-20 text-center text-emerald-800">True (T)</th>
                          <th className="p-2 w-20 text-center text-rose-800">False (F)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-sky-100">
                        {(t.items || []).map((it, iIdx) => (
                          <tr key={iIdx} className="hover:bg-sky-50/50">
                            <td className="p-2 text-center font-bold text-slate-700 border-r border-sky-100">{iIdx + 1}</td>
                            <td className="p-2 text-slate-800 border-r border-sky-100">{it.statement || it.questionText || it.sentence || ''}</td>
                            <td className="p-2 text-center border-r border-sky-100">
                              <span className="inline-block w-5 h-5 border-2 border-slate-400 rounded bg-white"></span>
                            </td>
                            <td className="p-2 text-center">
                              <span className="inline-block w-5 h-5 border-2 border-slate-400 rounded bg-white"></span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>

          {/* II. READING */}
          <div className="space-y-4 pt-2">
            <div className="font-extrabold text-sm text-emerald-950 uppercase border-b-2 border-emerald-500 pb-1 flex items-center justify-between">
              <span>{currentExam.parts?.reading?.title || 'READING (2.5 marks)'}</span>
              <span className="text-[11px] text-emerald-700 font-medium italic">Read carefully and complete the tasks</span>
            </div>
            {(currentExam.parts?.reading?.tasks || []).map((t, tIdx) => {
              const hasTaskImages = (t.items || []).some(it => it.image || it.imageKey);

              if (hasTaskImages) {
                // TASK 1: Look and tick ☑ or cross 🗵 (5 tranh)
                const items = t.items || [];
                return (
                  <div key={tIdx} className="p-4 bg-emerald-50/40 border border-emerald-200 rounded-2xl space-y-3 text-xs">
                    <div className="font-bold text-emerald-900 text-xs">
                      TASK {t.taskNumber || (tIdx + 1)}. {t.taskTitle} ({t.points || 1.25} marks)
                    </div>
                    <div className="italic text-slate-500 text-[11px]">{t.taskDesc}</div>
                    
                    {/* Row 1: Items 1, 2, 3 */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {items.slice(0, 3).map((it, idx) => {
                        const imgSrc = getEnglishImageSrc(it);
                        return (
                          <div key={idx} className="p-2.5 bg-white rounded-xl border-2 border-emerald-200 shadow-2xs flex flex-col items-center">
                            <div className="w-full flex items-center justify-between mb-1">
                              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                                {idx + 1}
                              </span>
                            </div>
                            {imgSrc ? (
                              <img src={imgSrc} alt={it.caption || it.statement} className="h-28 w-full object-contain rounded-lg border border-slate-100 p-1 bg-white" />
                            ) : (
                              <div className="h-28 flex items-center justify-center text-slate-400 italic">[Tranh {idx + 1}]</div>
                            )}
                            <div className="mt-2 w-full flex items-center justify-between px-2 pt-1 border-t border-slate-100">
                              <span className="font-bold text-slate-800 text-xs">{it.caption || it.statement}</span>
                              <span className="w-6 h-6 border-2 border-slate-500 rounded-md bg-white flex items-center justify-center"></span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Row 2: Items 4, 5 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto">
                      {items.slice(3, 5).map((it, idx) => {
                        const imgSrc = getEnglishImageSrc(it);
                        return (
                          <div key={idx} className="p-2.5 bg-white rounded-xl border-2 border-emerald-200 shadow-2xs flex flex-col items-center">
                            <div className="w-full flex items-center justify-between mb-1">
                              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                                {idx + 4}
                              </span>
                            </div>
                            {imgSrc ? (
                              <img src={imgSrc} alt={it.caption || it.statement} className="h-28 w-full object-contain rounded-lg border border-slate-100 p-1 bg-white" />
                            ) : (
                              <div className="h-28 flex items-center justify-center text-slate-400 italic">[Tranh {idx + 4}]</div>
                            )}
                            <div className="mt-2 w-full flex items-center justify-between px-2 pt-1 border-t border-slate-100">
                              <span className="font-bold text-slate-800 text-xs">{it.caption || it.statement}</span>
                              <span className="w-6 h-6 border-2 border-slate-500 rounded-md bg-white flex items-center justify-center"></span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              // TASK 2: Read and complete
              return (
                <div key={tIdx} className="p-4 bg-emerald-50/40 border border-emerald-200 rounded-2xl space-y-3 text-xs">
                  <div className="font-bold text-emerald-900 text-xs">
                    TASK {t.taskNumber || (tIdx + 1)}. {t.taskTitle} ({t.points || 1.25} marks)
                  </div>
                  <div className="italic text-slate-500 text-[11px]">{t.taskDesc}</div>
                  {t.wordBank && (
                    <div className="p-3 bg-emerald-50/80 rounded-xl border-2 border-dashed border-emerald-400 text-center">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 mb-1">Word Bank</div>
                      <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-black text-emerald-950">
                        {t.wordBank.map((w, wIdx) => (
                          <span key={wIdx} className="px-3 py-1 bg-white rounded-lg border border-emerald-300 shadow-2xs">
                            {w}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {t.passage && (
                    <div className="p-4 bg-white rounded-xl border border-emerald-200 text-slate-800 text-xs leading-loose font-serif indent-4 text-justify">
                      {t.passage}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* III. WRITING */}
          <div className="space-y-4 pt-2">
            <div className="font-extrabold text-sm text-purple-950 uppercase border-b-2 border-purple-500 pb-1 flex items-center justify-between">
              <span>{currentExam.parts?.writing?.title || 'WRITING (2.5 marks)'}</span>
              <span className="text-[11px] text-purple-700 font-medium italic">Complete the writing tasks below</span>
            </div>
            {(currentExam.parts?.writing?.tasks || []).map((t, tIdx) => {
              const hasTaskImages = (t.items || []).some(it => it.image || it.imageKey);

              // TASK: Look and write có đoạn văn và tranh minh họa (như Khối 4)
              if (t.passage && hasTaskImages) {
                const items = t.items || [];
                return (
                  <div key={tIdx} className="p-4 bg-purple-50/40 border border-purple-200 rounded-2xl space-y-3 text-xs">
                    <div className="font-bold text-purple-900 text-xs">
                      TASK {t.taskNumber || (tIdx + 1)}. {t.taskTitle} ({t.points || 1.25} marks)
                    </div>
                    <div className="italic text-slate-500 text-[11px]">{t.taskDesc}</div>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-1">
                      {items.map((it, idx) => {
                        const imgSrc = getEnglishImageSrc(it);
                        return (
                          <div key={idx} className="p-2 bg-white rounded-xl border-2 border-purple-200 shadow-2xs flex flex-col items-center">
                            <span className="font-black text-xs text-purple-700 mb-1">({idx + 1})</span>
                            {imgSrc ? (
                              <img src={imgSrc} alt="" className="h-24 w-full object-contain rounded-lg border border-purple-100 p-1 bg-white" />
                            ) : (
                              <div className="h-24 flex items-center justify-center text-slate-400 italic">[Tranh {idx + 1}]</div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-purple-200 text-slate-800 text-xs leading-loose font-serif indent-4 text-justify">
                      {t.passage}
                    </div>
                  </div>
                );
              }

              if (hasTaskImages) {
                // TASK 1: Look and write (4 tranh màu kèm chữ xáo trộn)
                const items = t.items || [];
                const circleNums = ['①', '②', '③', '④', '⑤'];
                return (
                  <div key={tIdx} className="p-4 bg-purple-50/40 border border-purple-200 rounded-2xl space-y-3 text-xs">
                    <div className="font-bold text-purple-900 text-xs">
                      TASK {t.taskNumber || (tIdx + 1)}. {t.taskTitle} ({t.points || 1.0} mark)
                    </div>
                    <div className="italic text-slate-500 text-[11px]">{t.taskDesc}</div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                      {items.map((it, idx) => {
                        const imgSrc = getEnglishImageSrc(it);
                        return (
                          <div key={idx} className="p-2.5 bg-white rounded-xl border-2 border-purple-200 shadow-2xs flex flex-col items-center">
                            <div className="w-full flex items-center justify-between mb-1">
                              <span className="font-black text-sm text-purple-700">
                                {circleNums[idx] || (idx + 1)}
                              </span>
                            </div>
                            {imgSrc ? (
                              <img src={imgSrc} alt={`Writing clue ${idx + 1}`} className="h-28 w-full object-contain rounded-lg border border-purple-100 p-1 bg-white" />
                            ) : (
                              <div className="h-28 flex items-center justify-center text-slate-400 italic">[Tranh {idx + 1}]</div>
                            )}
                            <div className="mt-2 text-center font-mono font-bold text-purple-950 text-xs tracking-wider bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                              {it.clue || it.questionText}
                            </div>
                            <div className="mt-2 w-full pt-2 border-b-2 border-dotted border-purple-300"></div>
                            <div className="mt-1 w-full pt-1 border-b-2 border-dotted border-purple-300"></div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              // TASK 2: Make sentences (2 cột x 3 hàng)
              const items = t.items || [];
              return (
                <div key={tIdx} className="p-4 bg-purple-50/40 border border-purple-200 rounded-2xl space-y-3 text-xs">
                  <div className="font-bold text-purple-900 text-xs">
                    TASK {t.taskNumber || (tIdx + 1)}. {t.taskTitle} ({t.points || 1.5} marks)
                  </div>
                  <div className="italic text-slate-500 text-[11px]">{t.taskDesc}</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    <div className="space-y-3">
                      {items.slice(0, 3).map((it, idx) => (
                        <div key={idx} className="p-3 bg-white rounded-xl border border-purple-200 text-xs space-y-1.5 shadow-2xs">
                          <div className="font-semibold text-slate-900">
                            <strong>{idx + 1}.</strong> {it.jumbled || it.questionText}
                          </div>
                          <div className="space-y-1 pt-1">
                            <div className="border-b border-dotted border-slate-300 h-4"></div>
                            <div className="border-b border-dotted border-slate-300 h-4"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {items.slice(3, 6).map((it, idx) => (
                        <div key={idx} className="p-3 bg-white rounded-xl border border-purple-200 text-xs space-y-1.5 shadow-2xs">
                          <div className="font-semibold text-slate-900">
                            <strong>{idx + 4}.</strong> {it.jumbled || it.questionText}
                          </div>
                          <div className="space-y-1 pt-1">
                            <div className="border-b border-dotted border-slate-300 h-4"></div>
                            <div className="border-b border-dotted border-slate-300 h-4"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* IV. SPEAKING */}
          <div className="space-y-4 pt-2">
            <div className="font-extrabold text-sm text-amber-950 uppercase border-b-2 border-amber-500 pb-1 flex items-center justify-between">
              <span>{currentExam.parts?.speaking?.title || 'SPEAKING (2.0 marks)'}</span>
              <span className="text-[11px] text-amber-700 font-medium italic">Interview & Look and answer</span>
            </div>
            <div className="p-4 bg-amber-50/40 border border-amber-200 rounded-2xl space-y-4 text-xs">
              {currentExam.parts?.speaking?.data?.part1 && (
                <div className="space-y-1.5">
                  <strong className="text-amber-900 font-bold text-xs">
                    {currentExam.parts.speaking.data.part1.title} ({currentExam.parts.speaking.data.part1.points} mark)
                  </strong>
                  <div className="italic text-slate-500 text-[11px]">{currentExam.parts.speaking.data.part1.desc}</div>
                  <ul className="list-disc pl-5 text-slate-700 space-y-1 pt-1">
                    {currentExam.parts.speaking.data.part1.questions.map((q, idx) => (
                      <li key={idx} className="font-medium">{q}</li>
                    ))}
                  </ul>
                </div>
              )}

              {currentExam.parts?.speaking?.data?.part2 && (
                <div className="space-y-2 pt-3 border-t border-amber-200">
                  <strong className="text-amber-900 font-bold text-xs">
                    {currentExam.parts.speaking.data.part2.title} ({currentExam.parts.speaking.data.part2.points} mark)
                  </strong>
                  <div className="italic text-slate-500 text-[11px]">{currentExam.parts.speaking.data.part2.desc}</div>
                  {currentExam.parts.speaking.data.part2.items && currentExam.parts.speaking.data.part2.items.length > 0 ? (
                    <div className={`grid gap-3 pt-2 ${
                      currentExam.parts.speaking.data.part2.items.length === 2
                        ? 'grid-cols-1 sm:grid-cols-2 max-w-lg mx-auto'
                        : currentExam.parts.speaking.data.part2.items.length === 6
                        ? 'grid-cols-2 sm:grid-cols-3'
                        : 'grid-cols-2 sm:grid-cols-4'
                    }`}>
                      {currentExam.parts.speaking.data.part2.items.map((it, idx) => {
                        const imgSrc = getEnglishImageSrc(it);
                        return (
                          <div key={idx} className="p-2 bg-white rounded-xl border-2 border-amber-200 shadow-2xs flex flex-col items-center">
                            {imgSrc ? (
                              <img src={imgSrc} alt={`Speaking ${idx + 1}`} className="h-28 w-full object-contain rounded-lg border border-amber-100 p-1 bg-white" />
                            ) : (
                              <div className="h-28 flex items-center justify-center text-slate-400 italic">[Tranh {idx + 1}]</div>
                            )}
                            <div className="mt-2 text-slate-800 font-semibold text-[11px] text-center leading-snug">
                              {it.question}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <ul className="list-disc pl-5 text-slate-700 space-y-1 pt-1">
                      {(currentExam.parts.speaking.data.part2.questions || []).map((q, idx) => (
                        <li key={idx} className="font-medium">{q}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ================================= TAB: PHIẾU ĐỌC & VIẾT TIẾNG ANH (READING & WRITING - MẪU IN PHÁT HỌC SINH) ================================= */}
      {activeTab === 'student_rw_paper' && isEnglish && (
        <div className="bg-white rounded-2xl border border-slate-200/90 p-8 shadow-sm space-y-6 print:p-0 print:border-none print:shadow-none font-sans">
          {/* Header Phiếu thi làm bài trên lớp */}
          <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-300 text-xs">
            <div className="space-y-1">
              <div className="font-bold uppercase text-slate-900 text-sm">
                {currentExam.schoolName || 'A AN TRUONG PRIMARY SCHOOL'}
              </div>
              <div className="pt-2 text-slate-700">
                Full name: ............................................................................
              </div>
              <div className="text-slate-700">
                Class: <strong>{currentExam.grade}</strong>......   School year: 20... - 20...
              </div>
            </div>

            <div className="text-center space-y-1">
              <div className="font-black text-sm uppercase text-slate-900">
                THE FIRST TERM TEST FOR GRADE {currentExam.grade}
              </div>
              <div className="font-bold text-xs uppercase text-emerald-800">
                READING & WRITING TEST
              </div>
              <div className="text-slate-500 italic text-[11px]">
                Time allowed: 30 minutes
              </div>
            </div>
          </div>

          {/* Bảng điểm rút gọn 5.0 điểm */}
          <div className="border border-slate-400 rounded-lg overflow-hidden text-xs">
            <div className="grid grid-cols-4 text-center font-bold bg-slate-100 border-b border-slate-400 py-1.5">
              <div className="border-r border-slate-400">Reading (2.5 ms)</div>
              <div className="border-r border-slate-400">Writing (2.5 ms)</div>
              <div className="border-r border-slate-400">Total (5.0 ms)</div>
              <div>Teacher's Comments</div>
            </div>
            <div className="grid grid-cols-4 text-center py-3 bg-white font-bold">
              <div className="border-r border-slate-400 text-slate-400">....../2.5</div>
              <div className="border-r border-slate-400 text-slate-400">....../2.5</div>
              <div className="border-r border-slate-400 text-emerald-700 font-black text-sm">....../5.0</div>
              <div className="text-slate-300 text-[10px] text-left px-2 leading-relaxed">
                ..................................................
              </div>
            </div>
          </div>

          {/* PHẦN ĐỌC (READING 2.5 ĐIỂM) */}
          <div className="space-y-4 pt-2">
            <div className="font-extrabold text-sm text-emerald-950 uppercase border-b-2 border-emerald-500 pb-1">
              READING (2.5 MARKS)
            </div>
            {(currentExam.parts?.reading?.tasks || []).map((t, tIdx) => {
              const hasTaskImages = (t.items || []).some(it => it.image || it.imageKey);

              if (hasTaskImages) {
                const items = t.items || [];
                return (
                  <div key={tIdx} className="space-y-2 text-xs">
                    <div className="font-bold text-slate-900 text-xs">
                      TASK {t.taskNumber || (tIdx + 1)}. {t.taskTitle} ({t.points || 1.25} marks)
                    </div>
                    {/* Row 1: 3 tranh */}
                    <div className="grid grid-cols-3 gap-2">
                      {items.slice(0, 3).map((it, idx) => {
                        const imgSrc = getEnglishImageSrc(it);
                        return (
                          <div key={idx} className="p-2 border border-slate-300 rounded-lg flex flex-col items-center bg-white">
                            <div className="w-full text-left font-bold text-slate-700 text-xs">{idx + 1}</div>
                            {imgSrc && <img src={imgSrc} alt="" className="h-24 object-contain my-1" />}
                            <div className="mt-1 w-full flex items-center justify-between px-1">
                              <span className="font-bold text-slate-800 text-[11px]">{it.caption || it.statement}</span>
                              <span className="w-5 h-5 border-2 border-slate-500 rounded bg-white"></span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {/* Row 2: 2 tranh */}
                    <div className="grid grid-cols-2 gap-2 max-w-md mx-auto pt-1">
                      {items.slice(3, 5).map((it, idx) => {
                        const imgSrc = getEnglishImageSrc(it);
                        return (
                          <div key={idx} className="p-2 border border-slate-300 rounded-lg flex flex-col items-center bg-white">
                            <div className="w-full text-left font-bold text-slate-700 text-xs">{idx + 4}</div>
                            {imgSrc && <img src={imgSrc} alt="" className="h-24 object-contain my-1" />}
                            <div className="mt-1 w-full flex items-center justify-between px-1">
                              <span className="font-bold text-slate-800 text-[11px]">{it.caption || it.statement}</span>
                              <span className="w-5 h-5 border-2 border-slate-500 rounded bg-white"></span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <div key={tIdx} className="space-y-2 text-xs pt-1">
                  <div className="font-bold text-slate-900 text-xs">
                    TASK {t.taskNumber || (tIdx + 1)}. {t.taskTitle} ({t.points || 1.25} marks)
                  </div>
                  {t.wordBank && (
                    <div className="p-2 border border-dashed border-emerald-400 bg-emerald-50/50 rounded-lg text-center font-bold text-emerald-900 tracking-wide text-xs">
                      {t.wordBank.join('   |   ')}
                    </div>
                  )}
                  {t.passage && (
                    <div className="p-3 border border-slate-200 rounded-lg bg-slate-50/50 text-slate-800 leading-relaxed font-serif text-justify text-xs">
                      {t.passage}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* PHẦN VIẾT (WRITING 2.5 ĐIỂM) */}
          <div className="space-y-4 pt-2">
            <div className="font-extrabold text-sm text-purple-950 uppercase border-b-2 border-purple-500 pb-1">
              WRITING (2.5 MARKS)
            </div>
            {(currentExam.parts?.writing?.tasks || []).map((t, tIdx) => {
              const hasTaskImages = (t.items || []).some(it => it.image || it.imageKey);

              // TASK: Look and write có đoạn văn và tranh minh họa (như Khối 4)
              if (t.passage && hasTaskImages) {
                const items = t.items || [];
                return (
                  <div key={tIdx} className="space-y-2 text-xs">
                    <div className="font-bold text-slate-900 text-xs">
                      TASK {t.taskNumber || (tIdx + 1)}. {t.taskTitle} ({t.points || 1.25} marks)
                    </div>
                    <div className="italic text-slate-500 text-[11px]">{t.taskDesc}</div>
                    <div className="grid grid-cols-5 gap-2 pt-1">
                      {items.map((it, idx) => {
                        const imgSrc = getEnglishImageSrc(it);
                        return (
                          <div key={idx} className="p-2 border border-slate-300 rounded-lg flex flex-col items-center bg-white">
                            <span className="font-black text-xs text-purple-700 mb-1">({idx + 1})</span>
                            {imgSrc ? (
                              <img src={imgSrc} alt="" className="h-20 w-full object-contain" />
                            ) : (
                              <div className="h-20 flex items-center justify-center text-slate-400 italic">[Tranh {idx + 1}]</div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <div className="p-3 border border-purple-200 bg-purple-50/30 rounded-lg text-slate-800 text-xs leading-loose font-serif indent-4 text-justify">
                      {t.passage}
                    </div>
                  </div>
                );
              }

              if (hasTaskImages) {
                const items = t.items || [];
                const circleNums = ['①', '②', '③', '④', '⑤'];
                return (
                  <div key={tIdx} className="space-y-2 text-xs">
                    <div className="font-bold text-slate-900 text-xs">
                      TASK {t.taskNumber || (tIdx + 1)}. {t.taskTitle} ({t.points || 1.0} mark)
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {items.map((it, idx) => {
                        const imgSrc = getEnglishImageSrc(it);
                        return (
                          <div key={idx} className="p-2 border border-slate-300 rounded-lg flex flex-col items-center bg-white">
                            <div className="w-full text-left font-black text-purple-700 text-xs">{circleNums[idx]}</div>
                            {imgSrc && <img src={imgSrc} alt="" className="h-24 object-contain my-1" />}
                            <div className="mt-1 font-mono font-bold text-purple-900 text-[11px] bg-purple-50 px-1 rounded">
                              {it.clue || it.questionText}
                            </div>
                            <div className="w-full border-b border-dotted border-slate-400 mt-2 h-3"></div>
                            <div className="w-full border-b border-dotted border-slate-400 mt-1 h-3"></div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              const items = t.items || [];
              return (
                <div key={tIdx} className="space-y-2 text-xs pt-1">
                  <div className="font-bold text-slate-900 text-xs">
                    TASK {t.taskNumber || (tIdx + 1)}. {t.taskTitle} ({t.points || 1.5} marks)
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-3">
                      {items.slice(0, 3).map((it, idx) => (
                        <div key={idx} className="p-2.5 border border-slate-200 rounded-lg space-y-1">
                          <div className="font-semibold text-slate-900">{idx + 1}. {it.jumbled || it.questionText}</div>
                          <div className="border-b border-dotted border-slate-300 h-4"></div>
                          <div className="border-b border-dotted border-slate-300 h-4"></div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {items.slice(3, 6).map((it, idx) => (
                        <div key={idx} className="p-2.5 border border-slate-200 rounded-lg space-y-1">
                          <div className="font-semibold text-slate-900">{idx + 4}. {it.jumbled || it.questionText}</div>
                          <div className="border-b border-dotted border-slate-300 h-4"></div>
                          <div className="border-b border-dotted border-slate-300 h-4"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ================================= TAB 1: ĐỀ HỌC SINH (CHO TOÁN & CÁC MÔN KHÁC) ================================= */}
      {activeTab === 'student_paper' && !isTiengViet && !isEnglish && (
        <div className="bg-white rounded-2xl border border-slate-200/90 p-8 shadow-sm space-y-6 print:p-0 print:border-none print:shadow-none">
          {/* Header Bài thi chuẩn Bộ GD&ĐT */}
          <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-300 text-xs">
            <div className="space-y-1">
              <div className="font-bold uppercase tracking-wide text-slate-800">
                {currentExam.governingBody || 'UBND XÃ AN TRƯỜNG'}
              </div>
              <div className="font-bold uppercase text-slate-900 text-sm">
                {currentExam.schoolName || 'TRƯỜNG TIỂU HỌC A AN TRƯỜNG'}
              </div>
              <div className="pt-2 text-slate-700">
                Họ và tên: ............................................................................
              </div>
              <div className="text-slate-700">
                Lớp: <strong>{currentExam.grade}</strong>......   Số báo danh: ....................................
              </div>
            </div>

            <div className="text-center space-y-1">
              <div className="font-black text-sm uppercase text-slate-900">
                {currentExam.title || 'BÀI KIỂM TRA ĐỊNH KỲ'}
              </div>
              <div className="font-bold text-xs uppercase text-emerald-800">
                MÔN: {currentExam.subject} – LỚP {currentExam.grade}
              </div>
              <div className="text-slate-500 italic text-[11px]">
                Thời gian làm bài: {currentExam.durationMinutes} phút (không kể phát đề)
              </div>
              {selectedVariantCode !== 'Gốc' && (
                <div className="inline-block px-2 py-0.5 mt-1 border border-indigo-300 bg-indigo-50 text-indigo-800 font-bold text-xs rounded">
                  MÃ ĐỀ: {selectedVariantCode}
                </div>
              )}
            </div>
          </div>

          {/* Khung Điểm, Lời nhận xét của GV (7 phần) & Ý kiến phụ huynh (3 phần) */}
          <div className="flex border border-slate-400 rounded-lg overflow-hidden text-xs">
            <div className="w-[30%] border-r border-slate-400 p-3 text-center space-y-2">
              <div className="font-bold uppercase text-slate-700">ĐIỂM</div>
              <div className="text-slate-400 text-[11px] pt-1">
                Bằng số: ....................................<br/>
                Bằng chữ: ..................................
              </div>
            </div>
            <div className="w-[49%] border-r border-slate-400 p-3 space-y-1">
              <div className="font-bold uppercase text-slate-700 text-center">NHẬN XÉT CỦA GIÁO VIÊN</div>
              <div className="text-slate-300 text-[11px] leading-relaxed">
                ........................................................................................................<br/>
                ........................................................................................................
              </div>
            </div>
            <div className="w-[21%] p-3 space-y-1">
              <div className="font-bold uppercase text-slate-700 text-center">Ý KIẾN PHỤ HUYNH</div>
              <div className="text-slate-300 text-[11px] leading-relaxed text-center">
                ................................................<br/>
                ................................................
              </div>
            </div>
          </div>

          {/* PHẦN I: TRẮC NGHIỆM */}
          {mcQuestions.length > 0 && (
            <div className="space-y-4 pt-2">
              <div className="font-extrabold text-sm text-slate-900 uppercase tracking-wide border-b border-slate-200 pb-1 flex items-center justify-between">
                <span>PHẦN I. TRẮC NGHIỆM KHÁCH QUAN ({mcPoints} điểm)</span>
                <span className="text-xs text-slate-400 font-normal italic">Khoanh tròn vào chữ cái trước câu trả lời đúng</span>
              </div>

              <div className="space-y-4 text-xs leading-relaxed">
                {mcQuestions.map((q, idx) => (
                  <div key={q.questionId} className="space-y-2">
                    {q.stimulus && q.stimulus.text && (
                      <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 italic">
                        {q.stimulus.text}
                      </div>
                    )}

                    <div>
                      <strong className="text-slate-900">Câu {idx + 1} ({q.points} đ):</strong> {q.questionText}
                    </div>

                    {/* Options */}
                    {q.options && q.options.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pl-4">
                        {q.options.map((opt) => (
                          <div key={opt.id} className="text-slate-800">
                            <strong>{opt.id}.</strong> {opt.text}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* True False sub-questions */}
                    {q.subQuestions && q.subQuestions.length > 0 && (
                      <div className="space-y-1 pl-4">
                        {q.subQuestions.map(sq => (
                          <div key={sq.id} className="flex items-center justify-between text-slate-700">
                            <span><strong>{sq.id})</strong> {sq.statement}</span>
                            <span className="text-[11px] font-bold text-slate-400">[  Đúng  ]   [  Sai  ]</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PHẦN II: TỰ LUẬN */}
          {crQuestions.length > 0 && (
            <div className="space-y-4 pt-4">
              <div className="font-extrabold text-sm text-slate-900 uppercase tracking-wide border-b border-slate-200 pb-1">
                PHẦN II. TỰ LUẬN ({crPoints} điểm)
              </div>

              <div className="space-y-5 text-xs leading-relaxed">
                {crQuestions.map((q, idx) => {
                  const qNum = mcQuestions.length + idx + 1;
                  return (
                    <div key={q.questionId} className="space-y-2">
                      {q.stimulus && q.stimulus.text && (
                        <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 italic">
                          {q.stimulus.text}
                        </div>
                      )}

                      <div>
                        <strong className="text-slate-900">Câu {qNum} ({q.points} đ):</strong> {q.questionText}
                      </div>

                      {/* Blank writing area for student */}
                      <div className="pt-2">
                        <div className="text-slate-400 italic text-[11px] mb-1">Bài làm:</div>
                        <div className="space-y-3.5 text-slate-200 select-none">
                          <div className="border-b border-dotted border-slate-300 h-4"></div>
                          <div className="border-b border-dotted border-slate-300 h-4"></div>
                          <div className="border-b border-dotted border-slate-300 h-4"></div>
                          <div className="border-b border-dotted border-slate-300 h-4"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================================= TAB 2: ĐÁP ÁN & HƯỚNG DẪN CHẤM ================================= */}
      {activeTab === 'answer_key' && (
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm space-y-6">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <div>
              <h3 className="text-base font-black text-slate-800 uppercase tracking-tight">
                ĐÁP ÁN VÀ HƯỚNG DẪN CHẤM CHI TIẾT (THÔNG TƯ 27)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {isTiengViet 
                  ? 'Barem điểm chi tiết tách biệt 2 phần: Kiểm tra Đọc (10đ) & Kiểm tra Viết (10đ) chuẩn phương pháp Thầy Lê Thành Long' 
                  : 'Thang điểm 10 chuẩn Thông tư 27. Rubric chấm tự luận quy định rõ điểm từng bước tính và tiêu chí thành phần.'}
              </p>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-800 font-bold border border-blue-200">
              {isTiengViet ? 'Tổng: 20đ quy về thang 10' : 'Tổng: 10,0 đ'}
            </span>
          </div>

          {/* ==================== A. HƯỚNG DẪN CHẤM DÀNH CHO MÔN TIẾNG VIỆT ==================== */}
          {isTiengViet ? (
            <div className="space-y-6 text-xs leading-relaxed">
              {/* PHẦN A: BÀI KIỂM TRA ĐỌC (10,0 ĐIỂM) */}
              <div className="p-4 bg-purple-50/50 border border-purple-200 rounded-xl space-y-4">
                <div className="font-black text-sm text-purple-900 uppercase flex items-center justify-between border-b border-purple-200 pb-2">
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-purple-600" />
                    <span>A. HƯỚNG DẪN CHẤM BÀI KIỂM TRA ĐỌC (10,0 ĐIỂM)</span>
                  </span>
                  <span className="text-xs font-bold text-purple-800 bg-purple-100 px-2.5 py-0.5 rounded-full">
                    Đọc tiếng: 4,0đ • Đọc hiểu: 6,0đ
                  </span>
                </div>

                {/* I. ĐỌC THÀNH TIẾNG (4,0 ĐIỂM) */}
                <div className="bg-white p-4 rounded-lg border border-purple-200 space-y-3">
                  <div className="font-bold text-slate-900 text-xs uppercase flex items-center justify-between">
                    <span>I. HƯỚNG DẪN CHẤM ĐỌC THÀNH TIẾNG (4,0 ĐIỂM)</span>
                    <span className="text-purple-700 font-bold italic lowercase">(kỹ năng đọc: 3,0đ + trả lời câu hỏi: 1,0đ)</span>
                  </div>

                  {/* Tiêu chí chấm đọc */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-slate-700">
                    <div className="p-2.5 bg-purple-50/40 border border-purple-100 rounded-lg">
                      <div className="font-bold text-purple-950 mb-1">1. Kỹ năng đọc (1,0đ)</div>
                      <p className="text-[11px]">Đọc vừa đủ nghe, rõ ràng; tốc độ đọc đạt yêu cầu theo chuẩn quy định khối lớp (khoảng 1 phút).</p>
                    </div>
                    <div className="p-2.5 bg-purple-50/40 border border-purple-100 rounded-lg">
                      <div className="font-bold text-purple-950 mb-1">2. Phát âm & Ngắt nghỉ (1,0đ)</div>
                      <p className="text-[11px]">Đọc đúng tiếng, từ; ngắt nghỉ hơi đúng ở các dấu câu, các cụm từ rõ nghĩa; không đọc ê a, ngắc ngứ.</p>
                    </div>
                    <div className="p-2.5 bg-purple-50/40 border border-purple-100 rounded-lg">
                      <div className="font-bold text-purple-950 mb-1">3. Giọng đọc & Biểu cảm (1,0đ)</div>
                      <p className="text-[11px]">Bước đầu biết thể hiện giọng đọc, ngữ điệu phù hợp với tính chất của bài văn hoặc bài thơ.</p>
                    </div>
                  </div>

                  {/* BẢNG CÂU HỎI VÀ GỢI Ý TRẢ LỜI DÀNH CHO GIÁO VIÊN */}
                  <div className="space-y-2 pt-1">
                    <div className="font-bold text-purple-900 flex items-center justify-between">
                      <span>4. Câu hỏi kiểm tra đọc hiểu & Gợi ý câu trả lời dành cho Giáo viên (1,0đ):</span>
                      <span className="text-[10px] text-slate-500 font-normal italic">* Học sinh bốc thăm bài nào, giáo viên hỏi câu hỏi tương ứng bài đó</span>
                    </div>

                    <div className="overflow-x-auto rounded-lg border border-purple-200">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-purple-100/70 text-purple-950 font-bold">
                          <tr>
                            <th className="p-2 border-r border-purple-200 w-2/5">Bài đọc tham khảo (SGK Chân trời sáng tạo - Chuẩn TT27)</th>
                            <th className="p-2 border-r border-purple-200 w-3/10">Câu hỏi giáo viên nêu cho HS</th>
                            <th className="p-2 bg-purple-50 text-purple-900 w-3/10">Gợi ý câu trả lời & Chấm điểm</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-purple-100">
                          {(currentExam.teacherGuide?.oralGuide?.qaList || (currentExam.readingExam?.oralItems || []).map(item => ({
                            lessonTitle: item.title + (item.page ? ` (${item.bookVolume || ''} - ${item.page})` : ''),
                            passage: item.passage || '',
                            wordCount: item.wordCount || 0,
                            question: item.question || 'Nêu nội dung chính hoặc ý nghĩa của bài đọc vừa rồi?',
                            answer: item.answer || 'Học sinh trả lời đúng ý chính của đoạn đọc, diễn đạt trôi chảy, rõ ràng.'
                          }))).map((qa, qIdx) => (
                            <tr key={qIdx} className="hover:bg-purple-50/30">
                              <td className="p-2 font-bold text-purple-950 border-r border-purple-100">
                                <div>{qa.lessonTitle}</div>
                                {qa.passage && (
                                  <div className="text-[11px] font-normal italic text-slate-600 mt-1 pl-1.5 border-l-2 border-purple-300">
                                    <span className="font-semibold text-purple-900">Đoạn trích ({qa.wordCount ? `${qa.wordCount} chữ` : 'chuẩn tốc độ'}):</span> "{qa.passage}"
                                  </div>
                                )}
                              </td>
                              <td className="p-2 text-slate-800 border-r border-purple-100">
                                <span className="font-semibold text-purple-800">Hỏi:</span> "{qa.question}"
                              </td>
                              <td className="p-2 text-slate-700 bg-purple-50/20">
                                <span className="font-semibold text-emerald-800">Trả lời:</span> {qa.answer}
                                <div className="text-[10px] text-slate-500 italic mt-0.5">Trả lời đúng, trọn câu: 1,0đ; trả lời chưa trọn vẹn: 0,5đ.</div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* II. ĐỌC HIỂU & LUYỆN TỪ VÀ CÂU (6,0 ĐIỂM) */}
                <div className="bg-white p-4 rounded-lg border border-purple-200 space-y-3">
                  <div className="font-bold text-slate-900 text-xs uppercase flex items-center justify-between">
                    <span>II. ĐÁP ÁN ĐỌC THẦM VÀ LÀM BÀI TẬP (6,0 ĐIỂM)</span>
                    <span className="text-purple-700 font-bold italic">
                      Ngữ liệu: "{currentExam.readingExam?.comprehensionReading?.title || 'Đọc hiểu'}"
                    </span>
                  </div>

                  <div className="space-y-2">
                    {(currentExam.readingExam?.questions || currentExam.questions || []).map((q, idx) => (
                      <div key={q.questionId || idx} className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-900">
                            Câu {idx + 1} ({q.points} điểm – {q.level}):
                          </span>
                          {q.correctAnswer ? (
                            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-black text-xs">
                              Đáp án: {q.correctAnswer}
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-bold text-xs">
                              Tự luận
                            </span>
                          )}
                        </div>

                        {q.explain && (
                          <div className="text-slate-600 italic text-[11px] pl-2 border-l-2 border-slate-300">
                            <strong>Hướng dẫn:</strong> {q.explain}
                          </div>
                        )}

                        {q.scoringGuide?.rubric && (
                          <div className="pt-1 text-[11px] space-y-0.5 text-slate-700">
                            {q.scoringGuide.rubric.map((r, rIdx) => (
                              <div key={rIdx} className="flex justify-between items-center pl-2">
                                <span>• {r.criteria || r.step}: {r.description || ''}</span>
                                <strong className="text-emerald-700 ml-2">{r.points || r.score}</strong>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* PHẦN B: BÀI KIỂM TRA VIẾT (10,0 ĐIỂM) */}
              <div className="p-4 bg-blue-50/50 border border-blue-200 rounded-xl space-y-4">
                <div className="font-black text-sm text-blue-900 uppercase flex items-center justify-between border-b border-blue-200 pb-2">
                  <span className="flex items-center gap-2">
                    <PenTool className="w-4 h-4 text-blue-600" />
                    <span>B. HƯỚNG DẪN CHẤM BÀI KIỂM TRA VIẾT (10,0 ĐIỂM)</span>
                  </span>
                  <span className="text-xs font-bold text-blue-800 bg-blue-100 px-2.5 py-0.5 rounded-full">
                    {currentExam.grade <= 3 ? 'Chính tả: 4,0đ • Tập làm văn: 6,0đ' : 'Tập làm văn hoàn chỉnh: 10,0đ (Barem 5 tiêu chí)'}
                  </span>
                </div>

                {currentExam.grade <= 3 ? (
                  /* KHỐI 1, 2, 3: CHÍNH TẢ (4Đ) + VIẾT ĐOẠN VĂN (6Đ) */
                  <div className="space-y-4">
                    {/* 1. Tiêu chí chấm Chính tả */}
                    <div className="bg-white p-4 rounded-lg border border-blue-200 space-y-2">
                      <div className="font-bold text-slate-900 text-xs uppercase flex items-center justify-between">
                        <span>1. TIÊU CHÍ CHẤM CHÍNH TẢ (4,0 ĐIỂM)</span>
                        <span className="text-blue-700 italic">Bài viết: "{currentExam.writingExam?.dictation?.title || 'Chính tả'}"</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                        <div className="p-2 bg-blue-50/30 rounded border border-blue-100">
                          <span className="font-bold text-blue-950">• Tốc độ & Chữ viết (2,0đ):</span>
                          <p className="text-[11px] mt-0.5">Tốc độ viết đạt chuẩn quy định (1,0đ); Chữ viết rõ ràng, đúng độ cao, khoảng cách các con chữ (1,0đ).</p>
                        </div>
                        <div className="p-2 bg-blue-50/30 rounded border border-blue-100">
                          <span className="font-bold text-blue-950">• Lỗi chính tả & Trình bày (2,0đ):</span>
                          <p className="text-[11px] mt-0.5">Trình bày bài sạch đẹp, đúng thể thức (1,0đ); Không mắc quá 5 lỗi chính tả (1,0đ - sai mỗi lỗi âm đầu/vần/thanh trừ 0,25đ).</p>
                        </div>
                      </div>
                    </div>

                    {/* 2. Tiêu chí chấm Viết đoạn văn */}
                    <div className="bg-white p-4 rounded-lg border border-blue-200 space-y-2">
                      <div className="font-bold text-slate-900 text-xs uppercase">
                        2. BAREM CHẤM TẬP LÀM VĂN / VIẾT ĐOẠN VĂN (6,0 ĐIỂM)
                      </div>
                      <div className="space-y-1.5">
                        {(currentExam.writingExam?.paragraphWriting?.rubric || [
                          { criteria: "Bố cục & dung lượng đoạn văn", score: "1,5đ", detail: "Đoạn văn hoàn chỉnh, có câu mở đầu, thân đoạn và câu kết đoạn." },
                          { criteria: "Nội dung & cảm xúc chân thực", score: "3,0đ", detail: "Nêu bật tình cảm, chọn lọc chi tiết ấm áp, đúng chủ đề gợi ý." },
                          { criteria: "Kỹ năng dùng từ, đặt câu, chính tả", score: "1,5đ", detail: "Từ ngữ gợi cảm, câu văn đủ ngữ pháp, chữ viết sạch sẽ, đúng chính tả." }
                        ]).map((rub, rubIdx) => (
                          <div key={rubIdx} className="p-2 bg-slate-50 border border-slate-200 rounded flex items-start justify-between">
                            <div>
                              <strong className="text-blue-900">• {rub.criteria}:</strong> <span className="text-slate-700">{rub.detail}</span>
                            </div>
                            <strong className="text-emerald-700 shrink-0 ml-2">{rub.score}</strong>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* KHỐI 4, 5: BAREM 5 TIÊU CHÍ CHUẨN THẦY LÊ THÀNH LONG (10,0 ĐIỂM) */
                  <div className="bg-white p-4 rounded-lg border border-blue-200 space-y-3">
                    <div className="font-bold text-slate-900 text-xs uppercase flex items-center justify-between">
                      <span>BAREM CHẤM BÀI VĂN HOÀN CHỈNH (10,0 ĐIỂM) – 5 TIÊU CHÍ CHUẨN THẦY LÊ THÀNH LONG</span>
                      <span className="text-blue-700 italic">Thể loại: {currentExam.writingExam?.essay?.genre || 'Văn miêu tả'}</span>
                    </div>

                    <div className="overflow-x-auto rounded-lg border border-blue-200">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-blue-100/70 text-blue-950 font-bold">
                          <tr>
                            <th className="p-2 border-r border-blue-200 w-1/5">Tiêu chí đánh giá</th>
                            <th className="p-2 border-r border-blue-200 w-1/8 text-center">Điểm tối đa</th>
                            <th className="p-2">Yêu cầu cụ thể & Thang điểm chi tiết</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-blue-100">
                          {(currentExam.writingExam?.essay?.rubric || [
                            { criteria: "1. Mở bài", score: "1,0đ", detail: "Giới thiệu trực tiếp hoặc gián tiếp sinh động đối tượng miêu tả / kể chuyện (Mở bài gián tiếp sâu sắc: 1,0đ; Mở bài trực tiếp đơn giản: 0,5đ)." },
                            { criteria: "2. Thân bài", score: "4,0đ", detail: "Nội dung đầy đủ, có trình tự miêu tả hợp lý từ bao quát đến chi tiết (Tả bao quát: 1,0đ; Tả chi tiết từng nét nổi bật và hoạt động: 2,0đ; Kết hợp cảnh sắc với con người: 1,0đ)." },
                            { criteria: "3. Kết bài", score: "1,0đ", detail: "Nêu cảm nghĩ sâu sắc, tình cảm chân thành và sự gắn bó (Kết bài mở rộng có ý nghĩa giáo dục: 1,0đ; Kết bài không mở rộng ngắn gọn: 0,5đ)." },
                            { criteria: "4. Chính tả, dùng từ, đặt câu", score: "2,0đ", detail: "Viết đúng chính tả, không mắc quá 3 lỗi (1,0đ); Dùng từ ngữ gợi tả, gợi cảm, câu văn chuẩn ngữ pháp, ngắt dấu câu chính xác (1,0đ)." },
                            { criteria: "5. Sáng tạo & Cảm xúc", score: "2,0đ", detail: "Biết sử dụng linh hoạt các biện pháp tu từ so sánh, nhân hóa làm bài văn giàu hình ảnh (1,0đ); Giọng văn truyền cảm, có phát hiện riêng tinh tế (1,0đ)." }
                          ]).map((item, idx) => (
                            <tr key={idx} className="hover:bg-blue-50/30">
                              <td className="p-2 font-bold text-blue-950 border-r border-blue-100">
                                {item.criteria}
                              </td>
                              <td className="p-2 text-center font-black text-emerald-800 border-r border-blue-100 bg-blue-50/20">
                                {item.score}
                              </td>
                              <td className="p-2 text-slate-700">
                                {item.detail}
                              </td>
                            </tr>
                          ))}
                          <tr className="bg-blue-100 font-bold text-blue-950">
                            <td className="p-2 text-left">TỔNG ĐIỂM BÀI VIẾT</td>
                            <td className="p-2 text-center text-emerald-900 font-black">10,0 đ</td>
                            <td className="p-2">Điểm tổng toàn bài = Điểm tổng của 5 tiêu chí (làm tròn đến 0,5 điểm).</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : isEnglish ? (
            /* ==================== B. HƯỚNG DẪN CHẤM MÔN TIẾNG ANH (AUDIO TRANSCRIPTS & RUBRIC) ==================== */
            <div className="space-y-6 text-xs leading-relaxed">
              {/* AUDIO TRANSCRIPT CHO GIÁO VIÊN */}
              <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl space-y-3">
                <div className="font-extrabold text-sm text-sky-950 flex items-center justify-between border-b border-sky-200 pb-2">
                  <span className="flex items-center gap-2">
                    <span>🎙️</span>
                    <span>KỊCH BẢN BÀI NGHE (AUDIO TRANSCRIPTS) DÀNH CHO GIÁO VIÊN</span>
                  </span>
                  <span className="text-[11px] text-sky-700 bg-sky-100 px-2.5 py-0.5 rounded-full font-bold">
                    Giáo viên đọc hoặc phát audio
                  </span>
                </div>
                <div className="space-y-3 pt-1">
                  {(currentExam.teacherGuide?.audioTranscripts || []).map((t, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-lg border border-sky-200 shadow-2xs space-y-1">
                      <div className="font-bold text-sky-900 text-xs">
                        TASK {t.taskNumber}: {t.taskTitle}
                      </div>
                      <div className="text-slate-700 italic space-y-1 pl-2 text-xs">
                        {t.transcriptLines.map((line, lIdx) => (
                          <div key={lIdx}>{line}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* BẢNG ĐÁP ÁN TIẾNG ANH */}
              <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-3 shadow-xs">
                <div className="font-bold text-sm text-slate-800 flex items-center justify-between border-b border-slate-200 pb-2">
                  <span>📝 BẢNG ĐÁP ÁN VÀ THANG ĐIỂM (0,25 điểm / câu)</span>
                  <span className="text-xs text-slate-500 font-normal">Tổng: {currentExam.questions.length} câu</span>
                </div>
                <div className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-2 border-r border-slate-200 text-center w-12">Câu</th>
                        <th className="p-2 border-r border-slate-200 w-48">Kỹ năng / Dạng bài</th>
                        <th className="p-2 border-r border-slate-200">Đáp án chuẩn</th>
                        <th className="p-2 border-r border-slate-200 text-center w-20">Điểm</th>
                        <th className="p-2 text-center w-24">Mức độ TT27</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {currentExam.questions.map((q, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/80">
                          <td className="p-2 border-r border-slate-200 text-center font-bold text-slate-600">{idx + 1}</td>
                          <td className="p-2 border-r border-slate-200 font-medium text-slate-700">
                            {q.skill} ({q.taskTitle || ''})
                          </td>
                          <td className="p-2 border-r border-slate-200 font-bold text-emerald-700">
                            {q.correctAnswer}
                          </td>
                          <td className="p-2 border-r border-slate-200 text-center text-slate-800 font-semibold">{q.points}</td>
                          <td className="p-2 text-center">
                            <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                              q.level === 'M1' ? 'bg-emerald-100 text-emerald-800' :
                              q.level === 'M2' ? 'bg-amber-100 text-amber-800' :
                              'bg-purple-100 text-purple-800'
                            }`}>
                              {q.level}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SPEAKING RUBRIC */}
              {currentExam.teacherGuide?.speakingRubric && currentExam.teacherGuide.speakingRubric.length > 0 && (
                <div className="p-4 bg-amber-50/50 border border-amber-200 rounded-xl space-y-3">
                  <div className="font-bold text-sm text-amber-950 flex items-center justify-between border-b border-amber-200 pb-2">
                    <span>🗣️ TIÊU CHÍ CHẤM THI NÓI (SPEAKING ASSESSMENT RUBRIC)</span>
                    <span className="text-xs text-amber-800 font-bold bg-amber-100 px-2.5 py-0.5 rounded-full">
                      Tổng điểm nói: {currentExam.skillsRatio?.speaking || 2} điểm
                    </span>
                  </div>
                  <div className="overflow-x-auto rounded-lg border border-amber-200 bg-white">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-amber-100/70 text-amber-950 font-bold border-b border-amber-200">
                        <tr>
                          <th className="p-2 border-r border-amber-200 w-1/3">Tiêu chí đánh giá</th>
                          <th className="p-2 border-r border-amber-200 text-center w-24">Điểm tối đa</th>
                          <th className="p-2">Mô tả mức độ đạt được</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-amber-100">
                        {currentExam.teacherGuide.speakingRubric.map((r, idx) => (
                          <tr key={idx}>
                            <td className="p-2 border-r border-amber-200 font-bold text-amber-950">{r.criteria}</td>
                            <td className="p-2 border-r border-amber-200 text-center font-bold text-emerald-700">{r.points} đ</td>
                            <td className="p-2 text-slate-700">{r.desc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* ==================== C. HƯỚNG DẪN CHẤM CÁC MÔN KHÁC (TOÁN, KHOA HỌC, LỊCH SỬ...) ==================== */
            <div className="space-y-4 text-xs">
              {currentExam.questions.map((q, idx) => (
                <div key={q.questionId} className="p-4 rounded-xl border border-slate-200 space-y-2 bg-slate-50/50">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800 text-sm">
                      Câu {idx + 1} ({q.points} điểm – Mức {q.level})
                    </span>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-bold">
                      Đáp án: {q.correctAnswer}
                    </span>
                  </div>

                  {q.scoringGuide?.rubric && (
                    <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                      <div className="font-bold text-slate-700 mb-1">Thang điểm chi tiết (Rubric):</div>
                      {q.scoringGuide.rubric.map((r, rIdx) => (
                        <div key={rIdx} className="flex items-start justify-between text-slate-600">
                          <span>• {r.criteria} ({r.description})</span>
                          <strong className="text-emerald-700 ml-2">{r.points} đ</strong>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ================================= TAB 3: MA TRẬN ĐỀ (2 TẦNG CHUẨN BGD & TT27) ================================= */}
      {activeTab === 'matrix' && currentExam.matrix && (
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <h3 className="text-base font-black text-slate-800 uppercase tracking-tight">
                MA TRẬN ĐỀ KIỂM TRA ĐỊNH KỲ (THÔNG TƯ 27/2020 & GDPT 2018)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Bám sát 3 Mức độ nhận thức (Mức 1, Mức 2, Mức 3) • Phân bổ câu hỏi TNKQ & Tự luận • Tổng chuẩn 10,0 điểm.
              </p>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
              Tổng điểm: 10.0 đ
            </span>
          </div>

          {/* NẾU LÀ MÔN TIẾNG VIỆT: HIỂN THỊ 2 BẢNG MA TRẬN ĐẶC THÙ (ĐỌC & VIẾT) CHUẨN THÔNG TƯ 27 (ẢNH 1) */}
          {(isTiengViet || currentExam.matrix.tiengVietMatrix) ? (
            <div className="space-y-6">
              {/* 1. MA TRẬN PHIẾU ĐỌC: 10 CỘT VỚI 3 DÒNG CON (SỐ CÂU, CÂU SỐ, SỐ ĐIỂM) */}
              <div className="space-y-2">
                <div className="font-extrabold text-sm text-purple-900 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-purple-600" />
                    <span>I. MA TRẬN NỘI DUNG VÀ MỨC ĐỘ NHẬN THỨC BÀI KIỂM TRA ĐỌC (6,0 ĐIỂM)</span>
                  </div>
                  <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-md border border-purple-200">
                    Phần Đọc hiểu & Luyện từ và câu
                  </span>
                </div>
                <Standard10ColMatrixTable
                  rows={currentExam.matrix.tiengVietMatrix?.readingTable?.rows || currentExam.matrix.matrixRows || currentExam.matrix.rows}
                  summary={currentExam.matrix.tiengVietMatrix?.readingTable?.summary || currentExam.matrix.summary}
                  ratios={currentExam.matrix.ratios || currentExam.customRatios}
                  totalPoints={6}
                />
              </div>

              {/* 2. MA TRẬN PHIẾU VIẾT (CHUẨN ẢNH 1: NỘI DUNG KIỂM TRA, MỨC ĐỘ NHẬN THỨC, ĐIỂM SỐ) */}
              <div className="space-y-2 pt-2">
                <div className="font-extrabold text-sm text-blue-900 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PenTool className="w-4 h-4 text-blue-600" />
                    <span>II. MA TRẬN NỘI DUNG VÀ MỨC ĐỘ NHẬN THỨC BÀI KIỂM TRA VIẾT (10,0 ĐIỂM)</span>
                  </div>
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
                    Phần Viết chính tả & Tập làm văn
                  </span>
                </div>
                <div className="overflow-x-auto rounded-xl border border-slate-300 shadow-xs">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-300">
                      <tr>
                        <th className="p-2.5 border border-slate-300 text-left w-2/5">Nội dung kiểm tra</th>
                        <th className="p-2.5 border border-slate-300 text-center w-1/4">Mức độ nhận thức</th>
                        <th className="p-2.5 border border-slate-300 text-center w-1/5">Điểm số</th>
                        <th className="p-2.5 border border-slate-300 text-left">Ghi chú</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 font-medium">
                      {(currentExam.matrix.tiengVietMatrix?.writingTable?.rows || currentExam.matrix.tiengVietMatrix?.writingMatrix || (
                        currentExam.grade <= 3 ? [
                          { component: "1. Chính tả (Nghe - viết)", level: "Mức 1", score: "4,0 điểm", note: `Đoạn văn/thơ đúng chuẩn số chữ Lớp ${currentExam.grade} (~15 phút)` },
                          { component: "2. Tập làm văn (Viết đoạn)", level: "Mức 2, 3", score: "6,0 điểm", note: "Viết đoạn văn theo chủ điểm có gợi ý chi tiết" }
                        ] : [
                          { component: "1. Tập làm văn (Bài văn hoàn chỉnh)", level: "Mức 1, 2, 3", score: "10,0 điểm", note: "Bài văn hoàn chỉnh đúng bố cục 3 phần, giàu hình ảnh cảm xúc" }
                        ]
                      )).map((w, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/60">
                          <td className="p-2.5 font-semibold text-slate-800 border border-slate-300">{w.component}</td>
                          <td className="p-2.5 text-center font-bold text-blue-700 border border-slate-300">{w.level}</td>
                          <td className="p-2.5 text-center font-black text-emerald-800 border border-slate-300">{w.score}</td>
                          <td className="p-2.5 text-slate-600 text-[11px] border border-slate-300">{w.note}</td>
                        </tr>
                      ))}
                      <tr className="bg-slate-100 font-bold text-slate-900">
                        <td className="p-2.5 text-left font-bold border border-slate-300" colSpan={2}>TỔNG CỘNG ĐIỂM VIẾT</td>
                        <td className="p-2.5 text-center font-black text-emerald-800 border border-slate-300">10,0 điểm</td>
                        <td className="p-2.5 text-blue-900 font-bold border border-slate-300">100% Điểm bài thi viết</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            /* MA TRẬN 10 CỘT CHUẨN THÔNG TƯ 27 (ẢNH 2) CHO CÁC MÔN TOÁN, TIẾNG ANH, KHOA HỌC, LỊCH SỬ - ĐỊA LÍ, TIN HỌC, CÔNG NGHỆ */
            <div className="space-y-4">
              <Standard10ColMatrixTable
                rows={currentExam.matrix.matrixRows || currentExam.matrix.rows}
                summary={currentExam.matrix.summary}
                ratios={currentExam.matrix.ratios || currentExam.customRatios}
                totalPoints={currentExam.totalPoints || 10}
              />

              {/* BẢNG TỔNG HỢP TỈ LỆ MA TRẬN 3 MỨC ĐỘ CHUẨN TT27 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl border border-emerald-200 bg-emerald-50/50 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-emerald-800 uppercase">Mức 1 (Nhận biết)</div>
                    <div className="text-base font-black text-emerald-900">
                      {(currentExam.matrix.summary?.totalPointsRow?.m1Tn !== undefined && currentExam.matrix.summary?.totalPointsRow?.m1Tl !== undefined)
                        ? (currentExam.matrix.summary.totalPointsRow.m1Tn + currentExam.matrix.summary.totalPointsRow.m1Tl).toFixed(1).replace('.', ',')
                        : (currentExam.matrix.summary?.totalM1Points || 6.5).toFixed(1).replace('.', ',')} điểm
                    </div>
                  </div>
                  <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-emerald-200/80 text-emerald-900">
                    {currentExam.matrix.summary?.ratiosRow?.m1Pct ?? currentExam.matrix.summary?.m1Pct ?? currentExam.matrix.ratios?.M1 ?? currentExam.matrix.ratios?.m1 ?? currentExam.customRatios?.m1 ?? 65}%
                  </span>
                </div>

                <div className="p-3 rounded-xl border border-amber-200 bg-amber-50/50 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-amber-800 uppercase">Mức 2 (Kết nối)</div>
                    <div className="text-base font-black text-amber-900">
                      {(currentExam.matrix.summary?.totalPointsRow?.m2Tn !== undefined && currentExam.matrix.summary?.totalPointsRow?.m2Tl !== undefined)
                        ? (currentExam.matrix.summary.totalPointsRow.m2Tn + currentExam.matrix.summary.totalPointsRow.m2Tl).toFixed(1).replace('.', ',')
                        : (currentExam.matrix.summary?.totalM2Points || 2.0).toFixed(1).replace('.', ',')} điểm
                    </div>
                  </div>
                  <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-amber-200/80 text-amber-900">
                    {currentExam.matrix.summary?.ratiosRow?.m2Pct ?? currentExam.matrix.summary?.m2Pct ?? currentExam.matrix.ratios?.M2 ?? currentExam.matrix.ratios?.m2 ?? currentExam.customRatios?.m2 ?? 20}%
                  </span>
                </div>

                <div className="p-3 rounded-xl border border-purple-200 bg-purple-50/50 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-purple-800 uppercase">Mức 3 (Vận dụng)</div>
                    <div className="text-base font-black text-purple-900">
                      {(currentExam.matrix.summary?.totalPointsRow?.m3Tn !== undefined && currentExam.matrix.summary?.totalPointsRow?.m3Tl !== undefined)
                        ? (currentExam.matrix.summary.totalPointsRow.m3Tn + currentExam.matrix.summary.totalPointsRow.m3Tl).toFixed(1).replace('.', ',')
                        : (currentExam.matrix.summary?.totalM3Points || 1.5).toFixed(1).replace('.', ',')} điểm
                    </div>
                  </div>
                  <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-purple-200/80 text-purple-900">
                    {currentExam.matrix.summary?.ratiosRow?.m3Pct ?? currentExam.matrix.summary?.m3Pct ?? currentExam.matrix.ratios?.M3 ?? currentExam.matrix.ratios?.m3 ?? currentExam.customRatios?.m3 ?? 15}%
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================================= TAB 4: BẢN ĐẶC TẢ CHI TIẾT ================================= */}
      {activeTab === 'specifications' && currentExam.specifications && (
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm space-y-5">
          <div>
            <h3 className="text-base font-bold text-slate-800">BẢN ĐẶC TẢ ĐỀ KIỂM TRA ĐỊNH KỲ</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Định danh từng câu hỏi với mã ID duy nhất và ánh xạ trực tiếp đến Yêu cầu cần đạt (YCCĐ).
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3 text-center">Câu</th>
                  <th className="p-3">Mã câu hỏi</th>
                  <th className="p-3">Yêu cầu cần đạt</th>
                  <th className="p-3 text-center">Mức độ</th>
                  <th className="p-3">Dạng câu</th>
                  <th className="p-3 text-center">Điểm</th>
                  <th className="p-3">Bối cảnh SEA-PLM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {currentExam.specifications.map((s) => (
                  <tr key={s.questionId} className="hover:bg-slate-50">
                    <td className="p-3 text-center font-bold text-slate-700">{s.itemNumber}</td>
                    <td className="p-3 font-mono text-emerald-700 font-semibold">{s.questionId}</td>
                    <td className="p-3 text-slate-800">{s.learningOutcome}</td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                        s.level === 'M1' ? 'bg-emerald-100 text-emerald-800' : s.level === 'M2' ? 'bg-amber-100 text-amber-800' : 'bg-purple-100 text-purple-800'
                      }`}>
                        {s.level}
                      </span>
                    </td>
                    <td className="p-3 text-slate-600">{s.questionTypeName || s.questionType}</td>
                    <td className="p-3 text-center font-bold text-slate-800">{s.points} đ</td>
                    <td className="p-3 text-slate-500 text-[11px] italic">{s.seaPlmContext || 'Quen thuộc'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
