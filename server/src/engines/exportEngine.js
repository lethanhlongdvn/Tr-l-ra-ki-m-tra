/**
 * Export Engine: Xuất file Word (.docx) đúng quy định thể thức văn bản hành chính theo Nghị định 30/2020/NĐ-CP
 * và đính kèm đầy đủ Ma trận đề kiểm tra 2 tầng (nêu rõ Số câu, Số điểm, Dạng câu hỏi, Chủ đề) cùng Bản đặc tả & Đáp án
 * 
 * Chuẩn cỡ chữ văn bản hành chính theo Nghị định 30/2020/NĐ-CP:
 * - Nội dung văn bản: Times New Roman, cỡ chữ 13pt - 14pt (size: 26 - 28)
 * - Tiêu đề lớn: 14pt in hoa đậm (size: 28)
 * - Chiều rộng bảng biểu phủ kín 100% trang in A4 (lề trái 30mm, lề phải 15mm => printable: 9355 DXA)
 */

const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  BorderStyle,
  VerticalAlign,
  ImageRun
} = require('docx');
const ExcelJS = require('exceljs');
const englishDocxEngine = require('./englishDocxEngine');

// Kích thước chuẩn trang A4 (210mm) với lề trái 30mm (1701 dxa) và lề phải 15mm (850 dxa)
const PAGE_CONTENT_WIDTH = 9355;

class ExportEngine {
  /**
   * Tạo ImageRun từ Data URI hoặc image source cho các môn Toán, Tiếng Việt, Khoa học...
   */
  createImageRunFromSource(item, maxWidth = 220, maxHeight = 140) {
    if (!item) return null;
    let raw = item;
    if (typeof item === 'object') {
      raw = item.image || item.imageKey || item.imageUrl || item.src;
    }
    if (!raw || typeof raw !== 'string') return null;
    raw = raw.trim();

    let b64 = '';
    if (raw.startsWith('data:image')) {
      b64 = raw;
    } else {
      try {
        const englishImagesBase64 = require('../data/englishImagesBase64.json');
        if (englishImagesBase64[raw]) {
          b64 = englishImagesBase64[raw];
        } else {
          const normalized = '/' + raw.replace(/^(\.\/|\/|dist\/)+/, '');
          if (englishImagesBase64[normalized]) {
            b64 = englishImagesBase64[normalized];
          } else {
            const filename = raw.split('/').pop().split('\\').pop();
            if (englishImagesBase64[filename]) {
              b64 = englishImagesBase64[filename];
            } else {
              const match = Object.keys(englishImagesBase64).find(k => k.endsWith('/' + filename));
              if (match) b64 = englishImagesBase64[match];
            }
          }
        }
      } catch (_) {}
    }

    if (!b64 || !b64.startsWith('data:image')) return null;

    const isJpg = b64.includes('image/jpeg') || b64.includes('image/jpg');
    const type = isJpg ? 'jpg' : 'png';
    const cleanB64 = b64.replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/, '').trim();
    try {
      const buffer = Buffer.from(cleanB64, 'base64');
      return new ImageRun({
        data: buffer,
        transformation: { width: maxWidth, height: maxHeight },
        type
      });
    } catch (e) {
      return null;
    }
  }
  /**
   * Tạo bảng Ma trận 10 cột chuẩn Thông tư 27 trong Word (docx) với 3 dòng con (Số câu, Câu số, Số điểm)
   */
  createDocx10ColMatrixTable({ rows = [], summary = {}, ratios = { M1: 65, M2: 20, M3: 15 }, totalPoints = 10, tableBorders }) {
    const colWidths = [2755, 1200, 650, 650, 650, 650, 700, 700, 700, 700];

    let tc = summary?.totalCountRow;
    let tp = summary?.totalPointsRow;
    let rr = summary?.ratiosRow;

    const m1Ratio = rr?.m1Pct ?? rr?.M1 ?? ratios?.M1 ?? ratios?.m1 ?? 65;
    const m2Ratio = rr?.m2Pct ?? rr?.M2 ?? ratios?.M2 ?? ratios?.m2 ?? 20;
    const m3Ratio = rr?.m3Pct ?? rr?.M3 ?? ratios?.M3 ?? ratios?.m3 ?? 15;

    if (!rr) {
      rr = { m1Pct: m1Ratio, m2Pct: m2Ratio, m3Pct: m3Ratio };
    } else {
      rr.m1Pct = m1Ratio;
      rr.m2Pct = m2Ratio;
      rr.m3Pct = m3Ratio;
    }

    if (!tc) {
      let m1Tn = 0, m1Tl = 0, m2Tn = 0, m2Tl = 0, m3Tn = 0, m3Tl = 0;
      let m1TnP = 0, m1TlP = 0, m2TnP = 0, m2TlP = 0, m3TnP = 0, m3TlP = 0;
      (rows || []).forEach(r => {
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
      tc = { m1Tn, m1Tl, m2Tn, m2Tl, m3Tn, m3Tl, totalTn: m1Tn + m2Tn + m3Tn, totalTl: m1Tl + m2Tl + m3Tl };
      tp = {
        m1Tn: Number(m1TnP.toFixed(2)), m1Tl: Number(m1TlP.toFixed(2)),
        m2Tn: Number(m2TnP.toFixed(2)), m2Tl: Number(m2TlP.toFixed(2)),
        m3Tn: Number(m3TnP.toFixed(2)), m3Tl: Number(m3TlP.toFixed(2)),
        totalTn: Number((m1TnP + m2TnP + m3TnP).toFixed(2)),
        totalTl: Number((m1TlP + m2TlP + m3TlP).toFixed(2))
      };
      rr = { m1Pct: m1Ratio, m2Pct: m2Ratio, m3Pct: m3Ratio };
    }

    const tableRows = [
      // Dòng tiêu đề 1
      new TableRow({
        children: [
          new TableCell({
            width: { size: 2755, type: WidthType.DXA },
            rowSpan: 2,
            verticalAlign: VerticalAlign.CENTER,
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Mạch kiến thức, kĩ năng", font: "Times New Roman", bold: true, size: 24 })] })]
          }),
          new TableCell({
            width: { size: 1200, type: WidthType.DXA },
            rowSpan: 2,
            verticalAlign: VerticalAlign.CENTER,
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Số câu và số điểm", font: "Times New Roman", bold: true, size: 24 })] })]
          }),
          new TableCell({
            width: { size: 1300, type: WidthType.DXA },
            columnSpan: 2,
            verticalAlign: VerticalAlign.CENTER,
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Mức 1", font: "Times New Roman", bold: true, size: 24 })] })]
          }),
          new TableCell({
            width: { size: 1300, type: WidthType.DXA },
            columnSpan: 2,
            verticalAlign: VerticalAlign.CENTER,
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Mức 2", font: "Times New Roman", bold: true, size: 24 })] })]
          }),
          new TableCell({
            width: { size: 1400, type: WidthType.DXA },
            columnSpan: 2,
            verticalAlign: VerticalAlign.CENTER,
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Mức 3", font: "Times New Roman", bold: true, size: 24 })] })]
          }),
          new TableCell({
            width: { size: 1400, type: WidthType.DXA },
            columnSpan: 2,
            verticalAlign: VerticalAlign.CENTER,
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Tổng", font: "Times New Roman", bold: true, size: 24 })] })]
          })
        ]
      }),
      // Dòng tiêu đề 2
      new TableRow({
        children: [
          new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "TNKQ", font: "Times New Roman", bold: true, size: 22 })] })] }),
          new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "TL", font: "Times New Roman", bold: true, size: 22 })] })] }),
          new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "TNKQ", font: "Times New Roman", bold: true, size: 22 })] })] }),
          new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "TL", font: "Times New Roman", bold: true, size: 22 })] })] }),
          new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "TNKQ", font: "Times New Roman", bold: true, size: 22 })] })] }),
          new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "TL", font: "Times New Roman", bold: true, size: 22 })] })] }),
          new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "TNKQ", font: "Times New Roman", bold: true, size: 22 })] })] }),
          new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "TL", font: "Times New Roman", bold: true, size: 22 })] })] })
        ]
      })
    ];

    const fmtPt = (v) => (v !== undefined && v !== null && v !== "" && v !== 0 ? (typeof v === "number" ? v.toFixed(1).replace(".", ",") : String(v)) : "");
    const fmtCnt = (v) => (v !== undefined && v !== null && v !== "" && v !== 0 ? String(v) : "");
    const fmtQ = (v) => (v ? String(v) : "");

    // 3 dòng con cho mỗi mạch kiến thức
    (rows || []).forEach(r => {
      const m1TnC = r.m1?.tnCount ?? 0;
      const m1TlC = r.m1?.tlCount ?? 0;
      const m2TnC = r.m2?.tnCount ?? 0;
      const m2TlC = r.m2?.tlCount ?? 0;
      const m3TnC = r.m3?.tnCount ?? 0;
      const m3TlC = r.m3?.tlCount ?? 0;
      const totalTnC = r.total?.tnCount ?? (m1TnC + m2TnC + m3TnC);
      const totalTlC = r.total?.tlCount ?? (m1TlC + m2TlC + m3TlC);

      const m1TnP = r.m1?.tnPoints ?? (m1TnC > 0 && !m1TlC ? r.m1?.points : 0);
      const m1TlP = r.m1?.tlPoints ?? 0;
      const m2TnP = r.m2?.tnPoints ?? (m2TnC > 0 && !m2TlC ? r.m2?.points : 0);
      const m2TlP = r.m2?.tlPoints ?? 0;
      const m3TnP = r.m3?.tnPoints ?? 0;
      const m3TlP = r.m3?.tlPoints ?? (m3TlC > 0 && !m3TnC ? r.m3?.points : 0);
      const totalTnP = r.total?.tnPoints ?? (m1TnP + m2TnP + m3TnP);
      const totalTlP = r.total?.tlPoints ?? (m1TlP + m2TlP + m3TlP);

      // Dòng 1: Số câu
      tableRows.push(
        new TableRow({
          children: [
            new TableCell({
              width: { size: 2755, type: WidthType.DXA },
              rowSpan: 3,
              verticalAlign: VerticalAlign.CENTER,
              children: [new Paragraph({ children: [new TextRun({ text: r.topicName, font: "Times New Roman", bold: true, size: 24 })] })]
            }),
            new TableCell({
              width: { size: 1200, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Số câu", font: "Times New Roman", size: 22 })] })]
            }),
            new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(m1TnC), font: "Times New Roman", bold: true, size: 24 })] })] }),
            new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(m1TlC), font: "Times New Roman", bold: true, size: 24 })] })] }),
            new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(m2TnC), font: "Times New Roman", bold: true, size: 24 })] })] }),
            new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(m2TlC), font: "Times New Roman", bold: true, size: 24 })] })] }),
            new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(m3TnC), font: "Times New Roman", bold: true, size: 24 })] })] }),
            new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(m3TlC), font: "Times New Roman", bold: true, size: 24 })] })] }),
            new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(totalTnC), font: "Times New Roman", bold: true, size: 24 })] })] }),
            new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(totalTlC), font: "Times New Roman", bold: true, size: 24 })] })] })
          ]
        })
      );

      // Dòng 2: Câu số
      tableRows.push(
        new TableRow({
          children: [
            new TableCell({
              width: { size: 1200, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Câu số", font: "Times New Roman", size: 22 })] })]
            }),
            new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtQ(r.m1?.tnQuestions), font: "Times New Roman", size: 22 })] })] }),
            new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtQ(r.m1?.tlQuestions), font: "Times New Roman", size: 22 })] })] }),
            new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtQ(r.m2?.tnQuestions), font: "Times New Roman", size: 22 })] })] }),
            new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtQ(r.m2?.tlQuestions), font: "Times New Roman", size: 22 })] })] }),
            new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtQ(r.m3?.tnQuestions), font: "Times New Roman", size: 22 })] })] }),
            new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtQ(r.m3?.tlQuestions), font: "Times New Roman", size: 22 })] })] }),
            new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtQ(r.total?.tnQuestions), font: "Times New Roman", size: 22 })] })] }),
            new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtQ(r.total?.tlQuestions), font: "Times New Roman", size: 22 })] })] })
          ]
        })
      );

      // Dòng 3: Số điểm
      tableRows.push(
        new TableRow({
          children: [
            new TableCell({
              width: { size: 1200, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Số điểm", font: "Times New Roman", size: 22 })] })]
            }),
            new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(m1TnP), font: "Times New Roman", bold: true, size: 24 })] })] }),
            new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(m1TlP), font: "Times New Roman", bold: true, size: 24 })] })] }),
            new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(m2TnP), font: "Times New Roman", bold: true, size: 24 })] })] }),
            new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(m2TlP), font: "Times New Roman", bold: true, size: 24 })] })] }),
            new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(m3TnP), font: "Times New Roman", bold: true, size: 24 })] })] }),
            new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(m3TlP), font: "Times New Roman", bold: true, size: 24 })] })] }),
            new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(totalTnP), font: "Times New Roman", bold: true, size: 24 })] })] }),
            new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(totalTlP), font: "Times New Roman", bold: true, size: 24 })] })] })
          ]
        })
      );
    });

    // 3 hàng tổng kết: Tổng số câu, Số điểm, Tỉ lệ %
    tableRows.push(
      new TableRow({
        children: [
          new TableCell({
            width: { size: 3955, type: WidthType.DXA },
            columnSpan: 2,
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Tổng số câu", font: "Times New Roman", bold: true, size: 24 })] })]
          }),
          new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(tc.m1Tn), font: "Times New Roman", bold: true, size: 24 })] })] }),
          new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(tc.m1Tl), font: "Times New Roman", bold: true, size: 24 })] })] }),
          new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(tc.m2Tn), font: "Times New Roman", bold: true, size: 24 })] })] }),
          new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(tc.m2Tl), font: "Times New Roman", bold: true, size: 24 })] })] }),
          new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(tc.m3Tn), font: "Times New Roman", bold: true, size: 24 })] })] }),
          new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(tc.m3Tl), font: "Times New Roman", bold: true, size: 24 })] })] }),
          new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(tc.totalTn), font: "Times New Roman", bold: true, size: 24 })] })] }),
          new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(tc.totalTl), font: "Times New Roman", bold: true, size: 24 })] })] })
        ]
      })
    );

    tableRows.push(
      new TableRow({
        children: [
          new TableCell({
            width: { size: 3955, type: WidthType.DXA },
            columnSpan: 2,
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Số điểm", font: "Times New Roman", bold: true, size: 24 })] })]
          }),
          new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(tp.m1Tn), font: "Times New Roman", bold: true, size: 24 })] })] }),
          new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(tp.m1Tl), font: "Times New Roman", bold: true, size: 24 })] })] }),
          new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(tp.m2Tn), font: "Times New Roman", bold: true, size: 24 })] })] }),
          new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(tp.m2Tl), font: "Times New Roman", bold: true, size: 24 })] })] }),
          new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(tp.m3Tn), font: "Times New Roman", bold: true, size: 24 })] })] }),
          new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(tp.m3Tl), font: "Times New Roman", bold: true, size: 24 })] })] }),
          new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(tp.totalTn), font: "Times New Roman", bold: true, size: 24 })] })] }),
          new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(tp.totalTl), font: "Times New Roman", bold: true, size: 24 })] })] })
        ]
      })
    );

    tableRows.push(
      new TableRow({
        children: [
          new TableCell({
            width: { size: 3955, type: WidthType.DXA },
            columnSpan: 2,
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Tỉ lệ %", font: "Times New Roman", bold: true, size: 24 })] })]
          }),
          new TableCell({
            width: { size: 1300, type: WidthType.DXA },
            columnSpan: 2,
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${m1Ratio}%`, font: "Times New Roman", bold: true, size: 24 })] })]
          }),
          new TableCell({
            width: { size: 1300, type: WidthType.DXA },
            columnSpan: 2,
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${m2Ratio}%`, font: "Times New Roman", bold: true, size: 24 })] })]
          }),
          new TableCell({
            width: { size: 1400, type: WidthType.DXA },
            columnSpan: 2,
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${m3Ratio}%`, font: "Times New Roman", bold: true, size: 24 })] })]
          }),
          new TableCell({
            width: { size: 1400, type: WidthType.DXA },
            columnSpan: 2,
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "100%", font: "Times New Roman", bold: true, size: 24 })] })]
          })
        ]
      })
    );

    return new Table({
      width: { size: PAGE_CONTENT_WIDTH, type: WidthType.DXA },
      columnWidths: colWidths,
      borders: tableBorders,
      rows: tableRows
    });
  }

  /**
   * Sinh file Word (.docx) chuẩn Nghị định 30/2020/NĐ-CP (Toán, Khoa học, LS&ĐL, Tin học, Công nghệ, Tiếng Anh)
   */
  async generateWordExam(exam) {
    const isTiengViet = exam.isTiengViet || (exam.subject || "").toLowerCase().includes("tiếng việt");
    if (isTiengViet) {
      return await this.generateWordTiengVietExam(exam);
    }

    const isEnglish = exam.isEnglish || (exam.subject || "").toLowerCase().includes("tiếng anh") || (exam.subject || "").toLowerCase().includes("english");
    if (isEnglish) {
      return await englishDocxEngine.generateDocx(exam);
    }

    const questions = exam.questions || [];
    const mcQuestions = questions.filter(q => q.formType === "TNKQ" || q.questionType !== "constructed_response");
    const crQuestions = questions.filter(q => q.formType === "TL" || q.questionType === "constructed_response");

    const schoolName = (exam.schoolName || "TRƯỜNG TIỂU HỌC A AN TRƯỜNG").toUpperCase();
    const governingBody = (exam.governingBody || "UBND XÃ AN TRƯỜNG").toUpperCase();
    const subjectName = (exam.subject || "TOÁN").toUpperCase();
    const grade = exam.grade || 4;
    const semester = String(exam.semester || "CUỐI HỌC KỲ I").toUpperCase();
    const duration = exam.durationMinutes || 40;

    // Border ẩn cho bảng căn lề tiêu ngữ
    const noBorder = { style: BorderStyle.NONE, size: 0, color: "auto" };
    const invisibleBorders = {
      top: noBorder, bottom: noBorder, left: noBorder, right: noBorder,
      insideHorizontal: noBorder, insideVertical: noBorder
    };

    // Border viền đen cho bảng ma trận & khung điểm
    const solidBorder = { style: BorderStyle.SINGLE, size: 4, color: "000000" };
    const tableBorders = {
      top: solidBorder, bottom: solidBorder, left: solidBorder, right: solidBorder,
      insideHorizontal: solidBorder, insideVertical: solidBorder
    };

    // ==================== 1. HEADER ĐỀ THI ====================
    const headerTable = new Table({
      width: { size: PAGE_CONTENT_WIDTH, type: WidthType.DXA },
      columnWidths: [4200, 5155],
      borders: invisibleBorders,
      rows: [
        new TableRow({
          children: [
            // Cột bên trái: Cơ quan chủ quản, tên trường và thông tin học sinh
            new TableCell({
              width: { size: 4200, type: WidthType.DXA },
              verticalAlign: VerticalAlign.TOP,
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({ text: governingBody + "\n", font: "Times New Roman", size: 26 }),
                    new TextRun({ text: schoolName + "\n", font: "Times New Roman", bold: true, size: 26 }),
                    new TextRun({ text: "—————————", font: "Times New Roman", size: 20 })
                  ]
                }),
                new Paragraph({
                  spacing: { before: 80 },
                  children: [
                    new TextRun({ text: "Họ và tên: .....................................................\n", font: "Times New Roman", size: 26 }),
                    new TextRun({ text: `Lớp: ${grade}...   Số báo danh: .....................`, font: "Times New Roman", bold: true, size: 26 })
                  ]
                })
              ]
            }),
            // Cột bên phải: Tiêu đề đề thi, môn và thời gian làm bài
            new TableCell({
              width: { size: 5155, type: WidthType.DXA },
              verticalAlign: VerticalAlign.TOP,
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({ text: `BÀI KIỂM TRA ĐỊNH KỲ ${semester}\n`, font: "Times New Roman", bold: true, size: 28 }),
                    new TextRun({ text: `MÔN: ${subjectName} – LỚP ${grade}\n`, font: "Times New Roman", bold: true, color: "047857", size: 28 }),
                    new TextRun({ text: `Thời gian làm bài: ${duration} phút (không kể phát đề)`, font: "Times New Roman", italics: true, size: 26 })
                  ]
                })
              ]
            })
          ]
        })
      ]
    });

    // ==================== 2. KHOẢNG CÁCH TRƯỚC BẢNG ĐIỂM ====================
    const titleParagraphs = [
      new Paragraph({ spacing: { before: 80, after: 60 } })
    ];

    // ==================== 3. KHUNG ĐIỂM & NHẬN XÉT CỦA GIÁO VIÊN ====================
    const scoreTable = new Table({
      width: { size: PAGE_CONTENT_WIDTH, type: WidthType.DXA },
      columnWidths: [3000, 4448, 1907],
      borders: tableBorders,
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: { size: 3000, type: WidthType.DXA },
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [new TextRun({ text: "ĐIỂM", font: "Times New Roman", bold: true, size: 28 })]
                }),
                new Paragraph({
                  spacing: { before: 60 },
                  children: [
                    new TextRun({ text: "Bằng số: ........................................\n", font: "Times New Roman", size: 26 }),
                    new TextRun({ text: "Bằng chữ: ......................................", font: "Times New Roman", size: 26 })
                  ]
                })
              ]
            }),
            new TableCell({
              width: { size: 4448, type: WidthType.DXA },
              verticalAlign: VerticalAlign.TOP,
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [new TextRun({ text: "NHẬN XÉT CỦA GIÁO VIÊN", font: "Times New Roman", bold: true, size: 24 })]
                }),
                new Paragraph({
                  spacing: { before: 60 },
                  children: [
                    new TextRun({ text: "..........................................................................................\n", font: "Times New Roman", size: 24 }),
                    new TextRun({ text: "..........................................................................................", font: "Times New Roman", size: 24 })
                  ]
                })
              ]
            }),
            new TableCell({
              width: { size: 1907, type: WidthType.DXA },
              verticalAlign: VerticalAlign.TOP,
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [new TextRun({ text: "Ý KIẾN PHỤ HUYNH", font: "Times New Roman", bold: true, size: 24 })]
                }),
                new Paragraph({
                  spacing: { before: 60 },
                  children: [
                    new TextRun({ text: "..................................................\n", font: "Times New Roman", size: 24 }),
                    new TextRun({ text: "..................................................", font: "Times New Roman", size: 24 })
                  ]
                })
              ]
            })
          ]
        })
      ]
    });

    // ==================== 4. NỘI DUNG ĐỀ THI ====================
    const examBodyParagraphs = [];

    // PHẦN I: TRẮC NGHIỆM KHÁCH QUAN
    if (mcQuestions.length > 0) {
      const mcPoints = Number(mcQuestions.reduce((a, b) => a + (b.points || 0), 0).toFixed(1));
      examBodyParagraphs.push(
        new Paragraph({
          spacing: { before: 200, after: 100 },
          children: [
            new TextRun({
              text: `PHẦN I. TRẮC NGHIỆM KHÁCH QUAN (${mcPoints} điểm)`,
              font: "Times New Roman",
              bold: true,
              size: 28 // 14pt
            }),
            new TextRun({
              text: "\n(Khoanh tròn vào chữ cái đặt trước câu trả lời đúng hoặc thực hiện theo yêu cầu)",
              font: "Times New Roman",
              italics: true,
              size: 26 // 13pt
            })
          ]
        })
      );

      mcQuestions.forEach((q, idx) => {
        if (q.stimulus && q.stimulus.text) {
          examBodyParagraphs.push(
            new Paragraph({
              spacing: { before: 80, after: 40 },
              children: [
                new TextRun({ text: `[Tình huống]: ${q.stimulus.text}`, font: "Times New Roman", italics: true, size: 26 })
              ]
            })
          );
        }

        examBodyParagraphs.push(
          new Paragraph({
            spacing: { before: 80, after: 50 },
            children: [
              new TextRun({ text: `Câu ${idx + 1} (${q.points} điểm): `, font: "Times New Roman", bold: true, size: 26 }),
              new TextRun({ text: q.questionText, font: "Times New Roman", size: 26 })
            ]
          })
        );

        // Các phương án A, B, C, D
        if (q.options && q.options.length > 0) {
          const optStr = q.options.map(o => `${o.id}. ${o.text}`).join("             ");
          examBodyParagraphs.push(
            new Paragraph({
              spacing: { before: 30, after: 70 },
              children: [new TextRun({ text: `     ${optStr}`, font: "Times New Roman", size: 26 })]
            })
          );
        } else if (q.subQuestions && q.subQuestions.length > 0) {
          q.subQuestions.forEach(sq => {
            examBodyParagraphs.push(
              new Paragraph({
                spacing: { before: 30, after: 30 },
                children: [
                  new TextRun({ text: `     ${sq.id}) ${sq.statement} `, font: "Times New Roman", size: 26 }),
                  new TextRun({ text: "[  Đúng  ]    [  Sai  ]", font: "Times New Roman", bold: true, size: 26 })
                ]
              })
            );
          });
        }
      });
    }

    // PHẦN II: TỰ LUẬN
    if (crQuestions.length > 0) {
      const crPoints = Number(crQuestions.reduce((a, b) => a + (b.points || 0), 0).toFixed(1));
      examBodyParagraphs.push(
        new Paragraph({
          spacing: { before: 200, after: 100 },
          children: [
            new TextRun({
              text: `PHẦN II. TỰ LUẬN (${crPoints} điểm)`,
              font: "Times New Roman",
              bold: true,
              size: 28 // 14pt
            })
          ]
        })
      );

      crQuestions.forEach((q, idx) => {
        const qNum = mcQuestions.length + idx + 1;
        if (q.stimulus && q.stimulus.text) {
          examBodyParagraphs.push(
            new Paragraph({
              spacing: { before: 80, after: 40 },
              children: [
                new TextRun({ text: `[Tình huống]: ${q.stimulus.text}`, font: "Times New Roman", italics: true, size: 26 })
              ]
            })
          );
        }

        examBodyParagraphs.push(
          new Paragraph({
            spacing: { before: 80, after: 40 },
            children: [
              new TextRun({ text: `Câu ${qNum} (${q.points} điểm): `, font: "Times New Roman", bold: true, size: 26 }),
              new TextRun({ text: q.questionText, font: "Times New Roman", size: 26 })
            ]
          })
        );

        // Chừa dòng kẻ bài làm cho học sinh
        examBodyParagraphs.push(
          new Paragraph({
            spacing: { before: 40, after: 70 },
            children: [
              new TextRun({ text: "Bài làm:\n", font: "Times New Roman", italics: true, size: 26 }),
              new TextRun({ text: "....................................................................................................................................................................................\n", font: "Times New Roman", size: 26 }),
              new TextRun({ text: "....................................................................................................................................................................................\n", font: "Times New Roman", size: 26 }),
              new TextRun({ text: "....................................................................................................................................................................................\n", font: "Times New Roman", size: 26 }),
              new TextRun({ text: "....................................................................................................................................................................................\n", font: "Times New Roman", size: 26 }),
              new TextRun({ text: "....................................................................................................................................................................................\n", font: "Times New Roman", size: 26 })
            ]
          })
        );
      });
    }

    // ==================== 5. MA TRẬN ĐỀ KIỂM TRA ĐÍNH KÈM (MẪU CHUẨN BGD&ĐT) ====================
    const matrixTitle = new Paragraph({
      pageBreakBefore: true,
      alignment: AlignmentType.CENTER,
      spacing: { before: 100, after: 100 },
      children: [
        new TextRun({ text: "MA TRẬN ĐỀ KIỂM TRA ĐỊNH KỲ\n", font: "Times New Roman", bold: true, size: 28 }),
        new TextRun({ text: `MÔN: ${subjectName} – LỚP ${grade} (${semester})\n`, font: "Times New Roman", bold: true, size: 26 }),
        new TextRun({ text: "(Kèm theo đề kiểm tra theo quy định Thông tư 27/2020/TT-BGDĐT)", font: "Times New Roman", italics: true, size: 26 })
      ]
    });

    const matrixTable = this.createDocx10ColMatrixTable({
      rows: exam.matrix?.matrixRows || exam.matrix?.rows || [],
      summary: exam.matrix?.summary || {},
      ratios: exam.matrix?.ratios || exam.customRatios || { M1: 65, M2: 20, M3: 15 },
      totalPoints: exam.totalPoints || 10,
      tableBorders
    });

    // ==================== 6. BẢN ĐẶC TẢ ĐỀ KIỂM TRA ====================
    const specTitle = new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 200, after: 100 },
      children: [
        new TextRun({ text: "BẢN ĐẶC TẢ ĐỀ KIỂM TRA ĐỊNH KỲ\n", font: "Times New Roman", bold: true, size: 28 }),
        new TextRun({ text: `MÔN: ${subjectName} – LỚP ${grade}\n`, font: "Times New Roman", bold: true, size: 26 })
      ]
    });

    // spec table widths = [600, 1500, 3655, 800, 1800, 1000] => sum = 9355
    const specRows = [
      new TableRow({
        children: [
          new TableCell({ width: { size: 600, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Câu", font: "Times New Roman", bold: true, size: 26 })] })] }),
          new TableCell({ width: { size: 1500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Mã câu hỏi", font: "Times New Roman", bold: true, size: 26 })] })] }),
          new TableCell({ width: { size: 3655, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Yêu cầu cần đạt", font: "Times New Roman", bold: true, size: 26 })] })] }),
          new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Mức", font: "Times New Roman", bold: true, size: 26 })] })] }),
          new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Dạng câu", font: "Times New Roman", bold: true, size: 26 })] })] }),
          new TableCell({ width: { size: 1000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Điểm", font: "Times New Roman", bold: true, size: 26 })] })] })
        ]
      })
    ];

    (exam.specifications || []).forEach(s => {
      specRows.push(
        new TableRow({
          children: [
            new TableCell({ width: { size: 600, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: String(s.itemNumber), font: "Times New Roman", size: 26 })] })] }),
            new TableCell({ width: { size: 1500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: s.questionId, font: "Times New Roman", size: 24 })] })] }),
            new TableCell({ width: { size: 3655, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: s.learningOutcome, font: "Times New Roman", size: 26 })] })] }),
            new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: s.level, font: "Times New Roman", bold: true, size: 26 })] })] }),
            new TableCell({ width: { size: 1800, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: s.questionTypeName || s.questionType, font: "Times New Roman", size: 24 })] })] }),
            new TableCell({ width: { size: 1000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${s.points}đ`, font: "Times New Roman", bold: true, size: 26 })] })] })
          ]
        })
      );
    });

    const specTable = new Table({
      width: { size: PAGE_CONTENT_WIDTH, type: WidthType.DXA },
      columnWidths: [600, 1500, 3655, 800, 1800, 1000],
      borders: tableBorders,
      rows: specRows
    });

    // ==================== 7. ĐÁP ÁN & HƯỚNG DẪN CHẤM (RUBRIC) ====================
    const answerTitle = new Paragraph({
      pageBreakBefore: true,
      alignment: AlignmentType.CENTER,
      spacing: { before: 100, after: 100 },
      children: [
        new TextRun({ text: "HƯỚNG DẪN CHẤM VÀ BIỂU ĐIỂM CHI TIẾT\n", font: "Times New Roman", bold: true, size: 28 }),
        new TextRun({ text: `MÔN: ${subjectName} – LỚP ${grade} (${semester})\n`, font: "Times New Roman", bold: true, size: 26 })
      ]
    });

    const answerParagraphs = [answerTitle];
    questions.forEach((q, idx) => {
      const qNum = idx + 1;
      const runs = [
        new TextRun({ text: `Câu ${qNum} (${q.points} điểm): `, font: "Times New Roman", bold: true, size: 26 }),
        new TextRun({ text: `Đáp án: ${q.correctAnswer || "Xem bài làm chi tiết"}\n`, font: "Times New Roman", bold: true, color: "B91C1C", size: 26 })
      ];

      if (q.explain) {
        runs.push(new TextRun({ text: `  Giải thích / Phương pháp: ${q.explain}\n`, font: "Times New Roman", italics: true, size: 26 }));
      }

      if (q.scoringGuide && q.scoringGuide.rubric) {
        q.scoringGuide.rubric.forEach(r => {
          runs.push(new TextRun({ text: `  • ${r.criteria || r.step}: ${r.points || r.score} điểm (${r.description || ""})\n`, font: "Times New Roman", size: 26 }));
        });
      }

      answerParagraphs.push(
        new Paragraph({
          spacing: { before: 50, after: 50 },
          children: runs
        })
      );
    });

    // Khởi tạo tài liệu Document
    const doc = new Document({
      styles: {
        default: {
          document: {
            run: {
              font: "Times New Roman",
              size: 26 // 13pt mặc định
            }
          }
        }
      },
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: 1134, // 20mm
                bottom: 1134, // 20mm
                left: 1701, // 30mm
                right: 850 // 15mm
              }
            }
          },
          children: [
            headerTable,
            ...titleParagraphs,
            scoreTable,
            ...examBodyParagraphs,
            matrixTitle,
            matrixTable,
            specTitle,
            specTable,
            ...answerParagraphs
          ]
        }
      ]
    });

    const buffer = await Packer.toBuffer(doc);
    return buffer;
  }

  /**
   * Sinh file Word (.docx) chuyên biệt cho môn Tiếng Việt chuẩn Thông tư 27 & Nghị định 30/2020/NĐ-CP
   * Tách biệt 2 phiếu riêng: Phiếu Đọc (10đ) & Phiếu Viết (10đ) theo phương pháp Thầy Lê Thành Long
   */
  async generateWordTiengVietExam(exam) {
    const schoolName = (exam.schoolName || "TRƯỜNG TIỂU HỌC A AN TRƯỜNG").toUpperCase();
    const governingBody = (exam.governingBody || "UBND XÃ AN TRƯỜNG").toUpperCase();
    const grade = exam.grade || 4;
    const semester = String(exam.semester || "CUỐI HỌC KỲ I").toUpperCase();
    const duration = exam.durationMinutes || 40;

    const oralScore = exam.readingExam?.oralScore || 4.0;
    const compScore = exam.readingExam?.comprehensionScore || 6.0;
    const oralItems = exam.readingExam?.oralItems || [
      { title: "Bài 1: Điều kì diệu", bookVolume: "Tập 1", page: "Trang 10" },
      { title: "Bài 5: Vệt phấn trên mặt bàn", bookVolume: "Tập 1", page: "Trang 28" },
      { title: "Bài 11: Tiếng nói của cỏ cây", bookVolume: "Tập 1", page: "Trang 52" },
      { title: "Bài 18: Bầu trời mùa thu", bookVolume: "Tập 1", page: "Trang 84" },
      { title: "Bài 24: Người tìm đường lên các vì sao", bookVolume: "Tập 1", page: "Trang 112" }
    ];
    const readingPassage = exam.readingExam?.comprehensionReading || {
      title: "Kì quan Rừng Cúc Phương",
      author: "Nguyễn Hoàng",
      passage: "Vườn quốc gia Cúc Phương là một bảo tàng thiên nhiên rộng lớn với thảm thực vật nhiệt đới vô cùng phong phú. Nơi đây có cây chò ngàn năm tuổi sừng sững giữa đại ngàn, thân cây to chừng hơn mười người ôm không xuể. Vào mùa bướm nở, hàng triệu cánh bướm trắng muốt rập rờn bay lượn ngợp lối đi tựa như lạc vào chốn bồng lai tiên cảnh. Cúc Phương không chỉ là niềm tự hào của thiên nhiên Việt Nam mà còn là lá phổi xanh kì diệu cần được muôn đời gìn giữ."
    };
    const tvQuestions = exam.readingExam?.questions || exam.questions || [];

    const noBorder = { style: BorderStyle.NONE, size: 0, color: "auto" };
    const invisibleBorders = {
      top: noBorder, bottom: noBorder, left: noBorder, right: noBorder,
      insideHorizontal: noBorder, insideVertical: noBorder
    };
    const solidBorder = { style: BorderStyle.SINGLE, size: 4, color: "000000" };
    const tableBorders = {
      top: solidBorder, bottom: solidBorder, left: solidBorder, right: solidBorder,
      insideHorizontal: solidBorder, insideVertical: solidBorder
    };

    // Hàm tạo Header tiêu ngữ NĐ 30 chuẩn với chiều rộng 9355 DXA
    const createHeaderTable = (sectionTitle) => {
      return new Table({
        width: { size: PAGE_CONTENT_WIDTH, type: WidthType.DXA },
        columnWidths: [4200, 5155],
        borders: invisibleBorders,
        rows: [
          new TableRow({
            children: [
              new TableCell({
                width: { size: 4200, type: WidthType.DXA },
                verticalAlign: VerticalAlign.TOP,
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({ text: governingBody + "\n", font: "Times New Roman", size: 26 }),
                      new TextRun({ text: schoolName + "\n", font: "Times New Roman", bold: true, size: 26 }),
                      new TextRun({ text: "—————————", font: "Times New Roman", size: 20 })
                    ]
                  }),
                  new Paragraph({
                    spacing: { before: 80 },
                    children: [
                      new TextRun({ text: "Họ và tên: .....................................................\n", font: "Times New Roman", size: 26 }),
                      new TextRun({ text: `Lớp: ${grade}...   Số báo danh: .....................`, font: "Times New Roman", bold: true, size: 26 })
                    ]
                  })
                ]
              }),
              new TableCell({
                width: { size: 5155, type: WidthType.DXA },
                verticalAlign: VerticalAlign.TOP,
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({ text: `BÀI KIỂM TRA ĐỊNH KỲ ${semester}\n`, font: "Times New Roman", bold: true, size: 28 }),
                      new TextRun({ text: `MÔN: TIẾNG VIỆT – LỚP ${grade}\n`, font: "Times New Roman", bold: true, color: "047857", size: 28 }),
                      new TextRun({ text: sectionTitle + "\n", font: "Times New Roman", bold: true, size: 26 }),
                      new TextRun({ text: `Thời gian làm bài: ${duration} phút`, font: "Times New Roman", italics: true, size: 26 })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      });
    };

    // ==================== 1. PHIẾU KIỂM TRA ĐỌC (10,0 ĐIỂM) ====================
    const readingHeader = createHeaderTable("(A. PHẦN KIỂM TRA ĐỌC - 10 ĐIỂM)");

    // Khung điểm phần đọc 4 ô: widths = [1700, 1700, 1600, 4355] => sum = 9355
    const readingScoreTable = new Table({
      width: { size: PAGE_CONTENT_WIDTH, type: WidthType.DXA },
      columnWidths: [1700, 1700, 1600, 3048, 1307],
      borders: tableBorders,
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: { size: 1700, type: WidthType.DXA },
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "1. Đọc tiếng", font: "Times New Roman", bold: true, size: 26 })] }),
                new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 60 }, children: [new TextRun({ text: `..... / ${oralScore}đ`, font: "Times New Roman", size: 26 })] })
              ]
            }),
            new TableCell({
              width: { size: 1700, type: WidthType.DXA },
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2. Đọc hiểu", font: "Times New Roman", bold: true, size: 26 })] }),
                new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 60 }, children: [new TextRun({ text: `..... / ${compScore}đ`, font: "Times New Roman", size: 26 })] })
              ]
            }),
            new TableCell({
              width: { size: 1600, type: WidthType.DXA },
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Tổng điểm", font: "Times New Roman", bold: true, size: 26 })] }),
                new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 60 }, children: [new TextRun({ text: "..... / 10đ", font: "Times New Roman", bold: true, size: 28 })] })
              ]
            }),
            new TableCell({
              width: { size: 3048, type: WidthType.DXA },
              verticalAlign: VerticalAlign.TOP,
              children: [
                new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "NHẬN XÉT CỦA GIÁO VIÊN", font: "Times New Roman", bold: true, size: 24 })] }),
                new Paragraph({
                  spacing: { before: 40 },
                  children: [
                    new TextRun({ text: "...................................................................\n", font: "Times New Roman", size: 24 }),
                    new TextRun({ text: "...................................................................", font: "Times New Roman", size: 24 })
                  ]
                })
              ]
            }),
            new TableCell({
              width: { size: 1307, type: WidthType.DXA },
              verticalAlign: VerticalAlign.TOP,
              children: [
                new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Ý KIẾN PHỤ HUYNH", font: "Times New Roman", bold: true, size: 24 })] }),
                new Paragraph({
                  spacing: { before: 40 },
                  children: [
                    new TextRun({ text: "..................................\n", font: "Times New Roman", size: 24 }),
                    new TextRun({ text: "..................................", font: "Times New Roman", size: 24 })
                  ]
                })
              ]
            })
          ]
        })
      ]
    });

    // Nội dung đọc thành tiếng & đọc thầm
    const readingBodyParagraphs = [];

    // I. ĐỌC THÀNH TIẾNG
    readingBodyParagraphs.push(
      new Paragraph({
        spacing: { before: 180, after: 60 },
        children: [
          new TextRun({ text: `I. ĐỌC THÀNH TIẾNG (${oralScore} điểm)`, font: "Times New Roman", bold: true, size: 28 }),
          new TextRun({ text: `\n* Học sinh bốc thăm 1 trong 5 bài đọc Tiếng Việt ${grade} (Bộ sách Chân trời sáng tạo theo chuẩn TT27) và trả lời 1 câu hỏi do giáo viên nêu:`, font: "Times New Roman", italics: true, size: 26 })
        ]
      })
    );

    // Bảng 5 bài đọc CTST: widths = [855, 5500, 3000] => sum = 9355
    const oralTableRows = [
      new TableRow({
        children: [
          new TableCell({ width: { size: 855, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "STT", font: "Times New Roman", bold: true, size: 26 })] })] }),
          new TableCell({ width: { size: 5500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Tên bài đọc tham khảo (Bộ sách Chân trời sáng tạo)", font: "Times New Roman", bold: true, size: 26 })] })] }),
          new TableCell({ width: { size: 3000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Trang & Tập sách", font: "Times New Roman", bold: true, size: 26 })] })] })
        ]
      })
    ];

    oralItems.forEach((item, idx) => {
      oralTableRows.push(
        new TableRow({
          children: [
            new TableCell({ width: { size: 855, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: String(idx + 1), font: "Times New Roman", size: 26 })] })] }),
            new TableCell({ width: { size: 5500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: item.title, font: "Times New Roman", bold: true, size: 26 })] })] }),
            new TableCell({ width: { size: 3000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${item.bookVolume ? `${item.bookVolume} • ` : ""}${item.page || ""}`, font: "Times New Roman", size: 26 })] })] })
          ]
        })
      );
    });

    const oralTable = new Table({
      width: { size: PAGE_CONTENT_WIDTH, type: WidthType.DXA },
      columnWidths: [855, 5500, 3000],
      borders: tableBorders,
      rows: oralTableRows
    });

    // II. ĐỌC HIỂU VÀ LUYỆN TỪ VÀ CÂU
    readingBodyParagraphs.push(
      new Paragraph({
        spacing: { before: 200, after: 60 },
        children: [
          new TextRun({ text: `II. ĐỌC HIỂU VÀ LUYỆN TỪ VÀ CÂU (${compScore} điểm)`, font: "Times New Roman", bold: true, size: 28 }),
          new TextRun({ text: "\nĐọc kỹ văn bản sau và trả lời các câu hỏi:", font: "Times New Roman", italics: true, size: 26 })
        ]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 60, after: 40 },
        children: [
          new TextRun({ text: `${readingPassage.title.toUpperCase()}\n`, font: "Times New Roman", bold: true, size: 28 }),
          readingPassage.author ? new TextRun({ text: `Tác giả: ${readingPassage.author}\n`, font: "Times New Roman", italics: true, size: 26 }) : new TextRun({ text: "" })
        ]
      }),
      new Paragraph({
        alignment: AlignmentType.JUSTIFY,
        spacing: { before: 40, after: 120 },
        children: [
          new TextRun({ text: `    ${readingPassage.passage}`, font: "Times New Roman", italics: true, size: 26 })
        ]
      })
    );

    // Hệ thống câu hỏi đọc hiểu
    tvQuestions.forEach((q, idx) => {
      readingBodyParagraphs.push(
        new Paragraph({
          spacing: { before: 80, after: 40 },
          children: [
            new TextRun({ text: `Câu ${idx + 1} (${q.points} điểm – Mức ${q.level}): `, font: "Times New Roman", bold: true, size: 26 }),
            new TextRun({ text: q.questionText, font: "Times New Roman", size: 26 })
          ]
        })
      );

      if (q.questionType === "multiple_choice" && q.options && q.options.length > 0) {
        const optStr = q.options.map(o => `${o.id}. ${o.text}`).join("             ");
        readingBodyParagraphs.push(
          new Paragraph({
            spacing: { before: 30, after: 60 },
            children: [new TextRun({ text: `     ${optStr}`, font: "Times New Roman", size: 26 })]
          })
        );
      } else {
        readingBodyParagraphs.push(
          new Paragraph({
            spacing: { before: 30, after: 60 },
            children: [
              new TextRun({ text: "Trả lời:\n", font: "Times New Roman", italics: true, size: 26 }),
              new TextRun({ text: "....................................................................................................................................................................................\n", font: "Times New Roman", size: 26 }),
              new TextRun({ text: "....................................................................................................................................................................................\n", font: "Times New Roman", size: 26 })
            ]
          })
        );
      }
    });

    // ==================== 2. PHIẾU KIỂM TRA VIẾT (10,0 ĐIỂM) ====================
    const writingHeader = new Paragraph({
      pageBreakBefore: true,
      children: []
    });

    const writingHeaderTable = createHeaderTable("(B. PHẦN KIỂM TRA VIẾT - 10 ĐIỂM)");

    // Khung điểm phần viết: widths chuẩn DXA
    let writingScoreTable;
    if (grade <= 3) {
      // 5 cột: widths = [1700, 1700, 1600, 3048, 1307] => sum = 9355 (tỉ lệ nhận xét 7:3)
      writingScoreTable = new Table({
        width: { size: PAGE_CONTENT_WIDTH, type: WidthType.DXA },
        columnWidths: [1700, 1700, 1600, 3048, 1307],
        borders: tableBorders,
        rows: [
          new TableRow({
            children: [
              new TableCell({
                width: { size: 1700, type: WidthType.DXA },
                verticalAlign: VerticalAlign.CENTER,
                children: [
                  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "1. Chính tả", font: "Times New Roman", bold: true, size: 26 })] }),
                  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 60 }, children: [new TextRun({ text: "..... / 4,0đ", font: "Times New Roman", size: 26 })] })
                ]
              }),
              new TableCell({
                width: { size: 1700, type: WidthType.DXA },
                verticalAlign: VerticalAlign.CENTER,
                children: [
                  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2. Đoạn văn", font: "Times New Roman", bold: true, size: 26 })] }),
                  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 60 }, children: [new TextRun({ text: "..... / 6,0đ", font: "Times New Roman", size: 26 })] })
                ]
              }),
              new TableCell({
                width: { size: 1600, type: WidthType.DXA },
                verticalAlign: VerticalAlign.CENTER,
                children: [
                  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Tổng điểm", font: "Times New Roman", bold: true, size: 26 })] }),
                  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 60 }, children: [new TextRun({ text: "..... / 10đ", font: "Times New Roman", bold: true, size: 28 })] })
                ]
              }),
              new TableCell({
                width: { size: 3048, type: WidthType.DXA },
                verticalAlign: VerticalAlign.TOP,
                children: [
                  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "NHẬN XÉT CỦA GIÁO VIÊN", font: "Times New Roman", bold: true, size: 24 })] }),
                  new Paragraph({
                    spacing: { before: 40 },
                    children: [
                      new TextRun({ text: "...................................................................\n", font: "Times New Roman", size: 24 }),
                      new TextRun({ text: "...................................................................", font: "Times New Roman", size: 24 })
                    ]
                  })
                ]
              }),
              new TableCell({
                width: { size: 1307, type: WidthType.DXA },
                verticalAlign: VerticalAlign.TOP,
                children: [
                  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Ý KIẾN PHỤ HUYNH", font: "Times New Roman", bold: true, size: 24 })] }),
                  new Paragraph({
                    spacing: { before: 40 },
                    children: [
                      new TextRun({ text: "..................................\n", font: "Times New Roman", size: 24 }),
                      new TextRun({ text: "..................................", font: "Times New Roman", size: 24 })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      });
    } else {
      // 3 cột: widths = [2600, 4728, 2027] => sum = 9355 (tỉ lệ nhận xét 7:3)
      writingScoreTable = new Table({
        width: { size: PAGE_CONTENT_WIDTH, type: WidthType.DXA },
        columnWidths: [2600, 4728, 2027],
        borders: tableBorders,
        rows: [
          new TableRow({
            children: [
              new TableCell({
                width: { size: 2600, type: WidthType.DXA },
                verticalAlign: VerticalAlign.CENTER,
                children: [
                  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "ĐIỂM BÀI VIẾT", font: "Times New Roman", bold: true, size: 26 })] }),
                  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 60 }, children: [new TextRun({ text: "..... / 10,0đ", font: "Times New Roman", bold: true, size: 28 })] })
                ]
              }),
              new TableCell({
                width: { size: 4728, type: WidthType.DXA },
                verticalAlign: VerticalAlign.TOP,
                children: [
                  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "NHẬN XÉT CỦA GIÁO VIÊN", font: "Times New Roman", bold: true, size: 24 })] }),
                  new Paragraph({
                    spacing: { before: 40 },
                    children: [
                      new TextRun({ text: "..........................................................................................\n", font: "Times New Roman", size: 24 }),
                      new TextRun({ text: "..........................................................................................", font: "Times New Roman", size: 24 })
                    ]
                  })
                ]
              }),
              new TableCell({
                width: { size: 2027, type: WidthType.DXA },
                verticalAlign: VerticalAlign.TOP,
                children: [
                  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Ý KIẾN PHỤ HUYNH", font: "Times New Roman", bold: true, size: 24 })] }),
                  new Paragraph({
                    spacing: { before: 40 },
                    children: [
                      new TextRun({ text: "..................................................\n", font: "Times New Roman", size: 24 }),
                      new TextRun({ text: "..................................................", font: "Times New Roman", size: 24 })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      });
    }

    // Nội dung bài viết
    const writingBodyParagraphs = [];
    if (grade <= 3) {
      const wData = exam.writingExam || {};
      const dictation = wData.dictation || {
        title: "Hoa mai vàng",
        text: "Hoa mai cũng có năm cánh như hoa đào, nhưng cánh hoa mai to hơn cánh hoa đào một chút. Nụ mai không phô màu hồng mà ngời màu xanh ngọc bích. Sắp nở, nụ mai mới phô vàng. Khi nở, cánh mai vàng mịn màng như lụa, xòe đều như một chiếc đĩa nhỏ xinh xắn."
      };
      const composition = wData.composition || {
        prompt: "Viết đoạn văn (từ 4 đến 5 câu) kể về một hoạt động vui chơi của em cùng các bạn ở trường.",
        suggestions: ["Hoạt động đó là gì?", "Em tham gia cùng những ai?", "Các bạn và em làm gì trong lúc chơi?", "Cảm xúc của em sau khi chơi xong."]
      };

      // 1. Chính tả
      writingBodyParagraphs.push(
        new Paragraph({
          spacing: { before: 180, after: 60 },
          children: [new TextRun({ text: "1. CHÍNH TẢ (Nghe - viết: 4,0 điểm) - Thời gian 15 phút", font: "Times New Roman", bold: true, size: 28 })]
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 40, after: 40 },
          children: [new TextRun({ text: `${dictation.title.toUpperCase()}\n`, font: "Times New Roman", bold: true, size: 28 })]
        }),
        new Paragraph({
          alignment: AlignmentType.JUSTIFY,
          spacing: { before: 40, after: 80 },
          children: [new TextRun({ text: `    ${dictation.text}`, font: "Times New Roman", italics: true, size: 26 })]
        }),
        new Paragraph({
          spacing: { before: 40, after: 80 },
          children: [
            new TextRun({ text: "Bài viết:\n", font: "Times New Roman", italics: true, size: 26 }),
            new TextRun({ text: "....................................................................................................................................................................................\n", font: "Times New Roman", size: 26 }),
            new TextRun({ text: "....................................................................................................................................................................................\n", font: "Times New Roman", size: 26 }),
            new TextRun({ text: "....................................................................................................................................................................................\n", font: "Times New Roman", size: 26 }),
            new TextRun({ text: "....................................................................................................................................................................................\n", font: "Times New Roman", size: 26 })
          ]
        })
      );

      // 2. Tập làm văn
      writingBodyParagraphs.push(
        new Paragraph({
          spacing: { before: 180, after: 60 },
          children: [new TextRun({ text: "2. TẬP LÀM VĂN (Viết đoạn văn: 6,0 điểm) - Thời gian 20-25 phút", font: "Times New Roman", bold: true, size: 28 })]
        }),
        new Paragraph({
          spacing: { before: 40, after: 40 },
          children: [
            new TextRun({ text: `Đề bài: ${composition.prompt}\n`, font: "Times New Roman", bold: true, size: 26 }),
            new TextRun({ text: "Gợi ý làm bài:\n", font: "Times New Roman", italics: true, size: 26 }),
            ...composition.suggestions.map(s => new TextRun({ text: `  • ${s}\n`, font: "Times New Roman", size: 26 }))
          ]
        }),
        new Paragraph({
          spacing: { before: 40, after: 80 },
          children: [
            new TextRun({ text: "Bài làm:\n", font: "Times New Roman", italics: true, size: 26 }),
            ...Array(Number(grade) <= 2 ? 5 : 10).fill(0).map(() => new TextRun({ text: "....................................................................................................................................................................................\n", font: "Times New Roman", size: 26 }))
          ]
        })
      );
    } else {
      // Lớp 4-5: Bài văn hoàn chỉnh 10 điểm
      const essay = exam.writingExam?.essay || {
        genre: "Văn miêu tả cây cối",
        prompt: "Em hãy viết bài văn miêu tả một cây bóng mát hoặc một cây ăn quả gắn liền với kỉ niệm tuổi thơ của em.",
        outlineGuide: {
          intro: "Giới thiệu trực tiếp hoặc gián tiếp về loài cây em định tả (trồng ở đâu, do ai trồng, bao nhiêu năm tuổi).",
          body: "Tả bao quát dáng hình của cây nhìn từ xa. Tả chi tiết từng bộ phận nổi bật (gốc, rễ, thân vỏ, cành lá, hoa, quả) theo thời gian hoặc mùa trong năm. Gắn liền cảnh cây với kỉ niệm của em hoặc bạn bè.",
          conclusion: "Nêu cảm nghĩ, tình cảm gắn bó của em với cây và việc chăm sóc giữ gìn cây bóng mát đó."
        }
      };

      writingBodyParagraphs.push(
        new Paragraph({
          spacing: { before: 180, after: 60 },
          children: [
            new TextRun({ text: `TẬP LÀM VĂN (${essay.genre.toUpperCase()}: 10,0 ĐIỂM) - Thời gian 35-40 phút`, font: "Times New Roman", bold: true, size: 28 })
          ]
        }),
        new Paragraph({
          spacing: { before: 40, after: 60 },
          children: [
            new TextRun({ text: `Đề bài: ${essay.prompt}\n`, font: "Times New Roman", bold: true, size: 26 }),
            new TextRun({ text: "Gợi ý làm bài:\n", font: "Times New Roman", italics: true, bold: true, size: 26 }),
            ...(essay.outlineGuide ? [
              new TextRun({ text: `  1. Mở bài: ${essay.outlineGuide.intro || ""}\n`, font: "Times New Roman", size: 26 }),
              new TextRun({ text: `  2. Thân bài: ${essay.outlineGuide.body || ""}\n`, font: "Times New Roman", size: 26 }),
              new TextRun({ text: `  3. Kết bài: ${essay.outlineGuide.conclusion || ""}\n`, font: "Times New Roman", size: 26 })
            ] : (essay.suggestions || []).map(s => new TextRun({ text: `  • ${s}\n`, font: "Times New Roman", size: 26 })))
          ]
        }),
        new Paragraph({
          spacing: { before: 40, after: 80 },
          children: [
            new TextRun({ text: "Bài làm:\n", font: "Times New Roman", italics: true, size: 26 }),
            ...Array(30).fill(0).map(() => new TextRun({ text: "....................................................................................................................................................................................\n", font: "Times New Roman", size: 26 }))
          ]
        })
      );
    }

    // ==================== 3. MA TRẬN ĐỀ KIỂM TRA MÔN TIẾNG VIỆT (2 BẢNG) ====================
    const matrixTitle = new Paragraph({
      pageBreakBefore: true,
      alignment: AlignmentType.CENTER,
      spacing: { before: 100, after: 100 },
      children: [
        new TextRun({ text: "MA TRẬN ĐỀ KIỂM TRA ĐỊNH KỲ MÔN TIẾNG VIỆT\n", font: "Times New Roman", bold: true, size: 28 }),
        new TextRun({ text: `LỚP ${grade} (${semester}) – CHUẨN THÔNG TƯ 27/2020/TT-BGDĐT\n`, font: "Times New Roman", bold: true, size: 26 })
      ]
    });

    const rdTableData = exam.matrix?.tiengVietMatrix?.readingTable;
    const matrixReadTable = this.createDocx10ColMatrixTable({
      rows: rdTableData?.rows || exam.matrix?.matrixRows || exam.matrix?.rows || [],
      summary: rdTableData?.summary || exam.matrix?.summary || {},
      ratios: exam.matrix?.ratios || exam.customRatios || { M1: 65, M2: 20, M3: 15 },
      totalPoints: 6,
      tableBorders
    });

    // Ma trận Viết: 3 cột chuẩn Ảnh 1: widths = [4000, 2500, 2855] => sum = 9355
    const wrRows = exam.matrix?.tiengVietMatrix?.writingTable?.rows || exam.matrix?.tiengVietMatrix?.writingMatrix || (
      grade <= 3 ? [
        { component: "1. Chính tả (Nghe - viết)", level: "Mức 1", score: "4,0 điểm", note: `Viết đúng đoạn văn chuẩn số chữ Lớp ${grade}` },
        { component: "2. Tập làm văn (Viết đoạn văn)", level: "Mức 2, 3", score: "6,0 điểm", note: "Viết đoạn văn theo chủ điểm có gợi ý chi tiết" }
      ] : [
        { component: "1. Tập làm văn (Bài văn hoàn chỉnh)", level: "Mức 1, 2, 3", score: "10,0 điểm", note: "Bài văn hoàn chỉnh đúng bố cục 3 phần, giàu cảm xúc" }
      ]
    );

    const matrixWriteTableRows = [
      new TableRow({
        children: [
          new TableCell({ width: { size: 4000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Nội dung kiểm tra", font: "Times New Roman", bold: true, size: 26 })] })] }),
          new TableCell({ width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Mức độ nhận thức", font: "Times New Roman", bold: true, size: 26 })] })] }),
          new TableCell({ width: { size: 2855, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Điểm số", font: "Times New Roman", bold: true, size: 26 })] })] })
        ]
      })
    ];

    wrRows.forEach(w => {
      matrixWriteTableRows.push(
        new TableRow({
          children: [
            new TableCell({ width: { size: 4000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: w.component, font: "Times New Roman", bold: true, size: 26 })] })] }),
            new TableCell({ width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: w.level, font: "Times New Roman", size: 26 })] })] }),
            new TableCell({ width: { size: 2855, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: w.score, font: "Times New Roman", bold: true, size: 26 })] })] })
          ]
        })
      );
    });

    matrixWriteTableRows.push(
      new TableRow({
        children: [
          new TableCell({ width: { size: 6500, type: WidthType.DXA }, columnSpan: 2, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "TỔNG CỘNG ĐIỂM VIẾT", font: "Times New Roman", bold: true, size: 26 })] })] }),
          new TableCell({ width: { size: 2855, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "10,0 điểm", font: "Times New Roman", bold: true, size: 26 })] })] })
        ]
      })
    );

    const matrixWriteTable = new Table({
      width: { size: PAGE_CONTENT_WIDTH, type: WidthType.DXA },
      columnWidths: [4000, 2500, 2855],
      borders: tableBorders,
      rows: matrixWriteTableRows
    });

    // ==================== 4. ĐÁP ÁN VÀ HƯỚNG DẪN CHẤM TIẾNG VIỆT ====================
    const answerTitle = new Paragraph({
      pageBreakBefore: true,
      alignment: AlignmentType.CENTER,
      spacing: { before: 100, after: 100 },
      children: [
        new TextRun({ text: "HƯỚNG DẪN CHẤM VÀ BIỂU ĐIỂM CHI TIẾT MÔN TIẾNG VIỆT\n", font: "Times New Roman", bold: true, size: 28 }),
        new TextRun({ text: `LỚP ${grade} (${semester}) – TỔ CHUYÊN MÔN TIỂU HỌC\n`, font: "Times New Roman", bold: true, size: 26 })
      ]
    });

    const answerParagraphs = [answerTitle];

    // A. Hướng dẫn chấm Đọc
    answerParagraphs.push(
      new Paragraph({
        spacing: { before: 120, after: 40 },
        children: [new TextRun({ text: "A. HƯỚNG DẪN CHẤM BÀI KIỂM TRA ĐỌC (10,0 ĐIỂM)\n", font: "Times New Roman", bold: true, color: "047857", size: 28 })]
      }),
      new Paragraph({
        spacing: { before: 40, after: 40 },
        children: [
          new TextRun({ text: "I. ĐỌC THÀNH TIẾNG (4,0 ĐIỂM):\n", font: "Times New Roman", bold: true, size: 26 }),
          new TextRun({ text: "• Đọc vừa đủ nghe, rõ ràng; tốc độ đọc đạt yêu cầu (khoảng 70-80 tiếng/phút ở Lớp 4; 60-70 tiếng ở Lớp 2-3): 1,0đ\n", font: "Times New Roman", size: 26 }),
          new TextRun({ text: "• Đọc đúng tiếng, từ (không đọc sai quá 5 tiếng): 1,0đ\n", font: "Times New Roman", size: 26 }),
          new TextRun({ text: "• Ngắt nghỉ hơi đúng ở các dấu câu, các cụm từ rõ nghĩa: 1,0đ\n", font: "Times New Roman", size: 26 }),
          new TextRun({ text: "• Trả lời đúng câu hỏi về nội dung đoạn đọc do giáo viên nêu: 1,0đ\n", font: "Times New Roman", size: 26 })
        ]
      })
    );

    // Bảng câu hỏi cho GV hỏi HS: widths = [3500, 2877, 2978] => sum = 9355
    const teacherOralTableRows = [
      new TableRow({
        children: [
          new TableCell({ width: { size: 3500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Bài đọc tham khảo (SGK Chân trời sáng tạo - Chuẩn TT27)", font: "Times New Roman", bold: true, size: 26 })] })] }),
          new TableCell({ width: { size: 2877, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Câu hỏi giáo viên hỏi học sinh", font: "Times New Roman", bold: true, size: 26 })] })] }),
          new TableCell({ width: { size: 2978, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Gợi ý câu trả lời đạt điểm tối đa (1,0đ)", font: "Times New Roman", bold: true, size: 26 })] })] })
        ]
      })
    ];

    const qaList = exam.teacherGuide?.oralGuide?.qaList || exam.teacherGuide?.oralQuestions || oralItems.map(item => ({
      lessonTitle: item.title + (item.page ? ` (${item.bookVolume || ''} - ${item.page})` : ''),
      passage: item.passage || "",
      wordCount: item.wordCount || 0,
      question: item.question || "Nêu nội dung chính hoặc ý nghĩa của bài đọc vừa rồi?",
      answer: item.answer || "Học sinh trả lời đúng ý chính của đoạn đọc, diễn đạt trôi chảy, rõ ràng."
    }));

    qaList.forEach(qa => {
      const titleChildren = [
        new TextRun({ text: qa.lessonTitle + "\n", font: "Times New Roman", bold: true, size: 26 })
      ];
      if (qa.passage) {
        titleChildren.push(
          new TextRun({ text: `Đoạn đọc trích dẫn (${qa.wordCount ? qa.wordCount + ' chữ' : 'chuẩn tốc độ'}):\n`, font: "Times New Roman", italics: true, bold: true, size: 22, color: "334155" }),
          new TextRun({ text: `"${qa.passage}"`, font: "Times New Roman", italics: true, size: 22, color: "475569" })
        );
      }

      teacherOralTableRows.push(
        new TableRow({
          children: [
            new TableCell({ width: { size: 3500, type: WidthType.DXA }, children: [new Paragraph({ children: titleChildren })] }),
            new TableCell({ width: { size: 2877, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: `Hỏi: "${qa.question}"`, font: "Times New Roman", size: 26 })] })] }),
            new TableCell({ width: { size: 2978, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: `Trả lời: ${qa.answer}`, font: "Times New Roman", size: 26 })] })] })
          ]
        })
      );
    });

    const teacherOralTable = new Table({
      width: { size: PAGE_CONTENT_WIDTH, type: WidthType.DXA },
      columnWidths: [2800, 3277, 3278],
      borders: tableBorders,
      rows: teacherOralTableRows
    });

    // II. Đáp án Đọc hiểu
    answerParagraphs.push(
      new Paragraph({
        spacing: { before: 140, after: 60 },
        children: [new TextRun({ text: "II. ĐÁP ÁN ĐỌC THẦM VÀ LÀM BÀI TẬP (6,0 ĐIỂM):\n", font: "Times New Roman", bold: true, size: 28 })]
      })
    );

    tvQuestions.forEach((q, idx) => {
      const runs = [
        new TextRun({ text: `Câu ${idx + 1} (${q.points} điểm – Mức ${q.level}): `, font: "Times New Roman", bold: true, size: 26 }),
        new TextRun({ text: `Đáp án: ${q.correctAnswer || "Tự luận"}\n`, font: "Times New Roman", bold: true, color: "B91C1C", size: 26 })
      ];
      if (q.explain) {
        runs.push(new TextRun({ text: `  Hướng dẫn: ${q.explain}\n`, font: "Times New Roman", italics: true, size: 26 }));
      }
      if (q.scoringGuide?.rubric) {
        q.scoringGuide.rubric.forEach(r => {
          runs.push(new TextRun({ text: `  • ${r.criteria || r.step}: ${r.points || r.score} (${r.description || ""})\n`, font: "Times New Roman", size: 26 }));
        });
      }
      answerParagraphs.push(new Paragraph({ spacing: { before: 40, after: 40 }, children: runs }));
    });

    // B. Hướng dẫn chấm Viết
    answerParagraphs.push(
      new Paragraph({
        spacing: { before: 140, after: 60 },
        children: [new TextRun({ text: "B. HƯỚNG DẪN CHẤM BÀI KIỂM TRA VIẾT (10,0 ĐIỂM)\n", font: "Times New Roman", bold: true, color: "1D4ED8", size: 28 })]
      })
    );

    if (grade <= 3) {
      answerParagraphs.push(
        new Paragraph({
          spacing: { before: 40, after: 40 },
          children: [
            new TextRun({ text: "1. Tiêu chí chấm Chính tả (4,0 điểm):\n", font: "Times New Roman", bold: true, size: 26 }),
            new TextRun({ text: "  • Tốc độ viết đạt chuẩn: 1,0đ\n  • Chữ viết rõ ràng, đúng độ cao khoảng cách: 1,0đ\n  • Không mắc quá 5 lỗi chính tả (mỗi lỗi trừ 0,25đ): 1,0đ\n  • Trình bày bài sạch sẽ, đúng quy cách: 1,0đ\n", font: "Times New Roman", size: 26 }),
            new TextRun({ text: "2. Barem chấm Tập làm văn / Viết đoạn văn (6,0 điểm):\n", font: "Times New Roman", bold: true, size: 26 }),
            new TextRun({ text: "  • Bố cục đoạn văn hoàn chỉnh (1,5đ)\n  • Nội dung chân thực, bám sát chủ đề (3,0đ)\n  • Chính tả, dùng từ đặt câu đúng ngữ pháp (1,5đ)\n", font: "Times New Roman", size: 26 })
          ]
        })
      );
    } else {
      answerParagraphs.push(
        new Paragraph({
          spacing: { before: 40, after: 40 },
          children: [
            new TextRun({ text: "BAREM CHẤM BÀI VĂN HOÀN CHỈNH (10,0 ĐIỂM) – 5 TIÊU CHÍ CHUẨN THẦY LÊ THÀNH LONG:\n", font: "Times New Roman", bold: true, size: 26 }),
            new TextRun({ text: "1. Mở bài (1,0 điểm): Giới thiệu trực tiếp hoặc gián tiếp sinh động đối tượng miêu tả / kể chuyện (Mở bài gián tiếp sâu sắc: 1,0đ; trực tiếp: 0,5đ).\n", font: "Times New Roman", size: 26 }),
            new TextRun({ text: "2. Thân bài (4,0 điểm): Tả bao quát cảnh sắc (1,0đ) + Tả chi tiết từng nét nổi bật và hoạt động (2,0đ) + Kết hợp cảnh sắc với con người (1,0đ).\n", font: "Times New Roman", size: 26 }),
            new TextRun({ text: "3. Kết bài (1,0 điểm): Nêu cảm nghĩ sâu sắc, tình cảm chân thành và sự gắn bó (Kết bài mở rộng: 1,0đ; không mở rộng: 0,5đ).\n", font: "Times New Roman", size: 26 }),
            new TextRun({ text: "4. Chính tả, dùng từ, đặt câu (2,0 điểm): Viết đúng chính tả, không mắc quá 3 lỗi (1,0đ); Dùng từ ngữ gợi tả, câu văn chuẩn ngữ pháp (1,0đ).\n", font: "Times New Roman", size: 26 }),
            new TextRun({ text: "5. Sáng tạo & Cảm xúc (2,0 điểm): Sử dụng linh hoạt các biện pháp tu từ so sánh, nhân hóa (1,0đ); Giọng văn truyền cảm, có phát hiện riêng (1,0đ).\n", font: "Times New Roman", size: 26 }),
            new TextRun({ text: "=> TỔNG ĐIỂM TOÀN BÀI = 10,0 ĐIỂM (Làm tròn đến 0,5 điểm theo quy định TT27).", font: "Times New Roman", bold: true, color: "047857", size: 26 })
          ]
        })
      );
    }

    // Khởi tạo tài liệu Document
    const doc = new Document({
      styles: {
        default: {
          document: {
            run: {
              font: "Times New Roman",
              size: 26 // 13pt mặc định toàn bài
            }
          }
        }
      },
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: 1134,
                bottom: 1134,
                left: 1701,
                right: 850
              }
            }
          },
          children: [
            // PHIẾU ĐỌC
            readingHeader,
            readingScoreTable,
            ...readingBodyParagraphs,
            oralTable,
            // PHIẾU VIẾT
            writingHeader,
            writingHeaderTable,
            writingScoreTable,
            ...writingBodyParagraphs,
            // MA TRẬN
            matrixTitle,
            new Paragraph({ spacing: { before: 80, after: 40 }, children: [new TextRun({ text: "I. MA TRẬN PHIẾU KIỂM TRA ĐỌC (10,0 ĐIỂM)", font: "Times New Roman", bold: true, size: 26 })] }),
            matrixReadTable,
            new Paragraph({ spacing: { before: 120, after: 40 }, children: [new TextRun({ text: "II. MA TRẬN PHIẾU KIỂM TRA VIẾT (10,0 ĐIỂM)", font: "Times New Roman", bold: true, size: 26 })] }),
            matrixWriteTable,
            // ĐÁP ÁN & HƯỚNG DẪN CHẤM
            ...answerParagraphs,
            new Paragraph({ spacing: { before: 40, after: 40 }, children: [new TextRun({ text: "Bảng câu hỏi kiểm tra đọc thành tiếng cho giáo viên:", font: "Times New Roman", bold: true, size: 26 })] }),
            teacherOralTable
          ]
        }
      ]
    });

    const buffer = await Packer.toBuffer(doc);
    return buffer;
  }

  /**
   * Xuất Excel Ma trận chuẩn Thông tư 27 (10 cột, 3 dòng con)
   */
  async generateExcelMatrix(exam) {
    const workbook = new ExcelJS.Workbook();
    workbook.creator = "AI Exam Builder Tiểu học (TT27)";
    workbook.created = new Date();

    const isTiengViet = (exam.subject || "").toLowerCase().includes("tiếng việt");
    const matrixSheet = workbook.addWorksheet(isTiengViet ? "Ma trận Đọc TT27" : "Ma trận TT27");

    const subjectName = (exam.subject || "TOÁN").toUpperCase();
    const grade = exam.grade || 4;
    const semester = String(exam.semester || "Cuối học kỳ I").toUpperCase();

    // Thiết lập độ rộng cột
    matrixSheet.columns = [
      { key: "topic", width: 36 },
      { key: "itemType", width: 18 },
      { key: "m1_tn", width: 14 },
      { key: "m1_tl", width: 14 },
      { key: "m2_tn", width: 14 },
      { key: "m2_tl", width: 14 },
      { key: "m3_tn", width: 14 },
      { key: "m3_tl", width: 14 },
      { key: "total_tn", width: 16 },
      { key: "total_tl", width: 16 }
    ];

    // Dòng 1: Tiêu đề
    const titleRow = matrixSheet.addRow([`MA TRẬN ĐỀ KIỂM TRA ĐỊNH KỲ ${semester} - MÔN: ${subjectName} LỚP ${grade}`]);
    titleRow.font = { name: "Times New Roman", size: 14, bold: true };
    titleRow.alignment = { horizontal: "center", vertical: "middle" };
    matrixSheet.mergeCells("A1:J1");
    titleRow.height = 28;

    // Dòng 2 & 3: Header tầng 1 & 2
    const h1 = matrixSheet.addRow([
      "Mạch kiến thức, kĩ năng",
      "Số câu và số điểm",
      "Mức 1", "",
      "Mức 2", "",
      "Mức 3", "",
      "Tổng", ""
    ]);
    h1.height = 24;
    h1.font = { name: "Times New Roman", size: 12, bold: true };
    h1.alignment = { horizontal: "center", vertical: "middle", wrapText: true };

    const h2 = matrixSheet.addRow([
      "", "",
      "TNKQ", "TL",
      "TNKQ", "TL",
      "TNKQ", "TL",
      "TNKQ", "TL"
    ]);
    h2.height = 20;
    h2.font = { name: "Times New Roman", size: 11, bold: true };
    h2.alignment = { horizontal: "center", vertical: "middle" };

    matrixSheet.mergeCells("A2:A3");
    matrixSheet.mergeCells("B2:B3");
    matrixSheet.mergeCells("C2:D2");
    matrixSheet.mergeCells("E2:F2");
    matrixSheet.mergeCells("G2:H2");
    matrixSheet.mergeCells("I2:J2");

    // Tô màu header
    for (let r = 2; r <= 3; r++) {
      const row = matrixSheet.getRow(r);
      for (let c = 1; c <= 10; c++) {
        const cell = row.getCell(c);
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "F1F5F9" }
        };
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" }
        };
      }
    }

    const rows = (isTiengViet && exam.matrix?.tiengVietMatrix?.readingTable?.rows)
      ? exam.matrix.tiengVietMatrix.readingTable.rows
      : (exam.matrix?.matrixRows || exam.matrix?.rows || []);

    let curRowIdx = 4;
    rows.forEach(r => {
      const m1TnC = r.m1?.tnCount ?? 0;
      const m1TlC = r.m1?.tlCount ?? 0;
      const m2TnC = r.m2?.tnCount ?? 0;
      const m2TlC = r.m2?.tlCount ?? 0;
      const m3TnC = r.m3?.tnCount ?? 0;
      const m3TlC = r.m3?.tlCount ?? 0;
      const totalTnC = r.total?.tnCount ?? (m1TnC + m2TnC + m3TnC);
      const totalTlC = r.total?.tlCount ?? (m1TlC + m2TlC + m3TlC);

      const m1TnP = r.m1?.tnPoints ?? (m1TnC > 0 && !m1TlC ? r.m1?.points : 0);
      const m1TlP = r.m1?.tlPoints ?? 0;
      const m2TnP = r.m2?.tnPoints ?? (m2TnC > 0 && !m2TlC ? r.m2?.points : 0);
      const m2TlP = r.m2?.tlPoints ?? 0;
      const m3TnP = r.m3?.tnPoints ?? 0;
      const m3TlP = r.m3?.tlPoints ?? (m3TlC > 0 && !m3TnC ? r.m3?.points : 0);
      const totalTnP = r.total?.tnPoints ?? (m1TnP + m2TnP + m3TnP);
      const totalTlP = r.total?.tlPoints ?? (m1TlP + m2TlP + m3TlP);

      // Subrow 1: Số câu
      const rCount = matrixSheet.addRow([
        r.topicName,
        "Số câu",
        m1TnC || "", m1TlC || "",
        m2TnC || "", m2TlC || "",
        m3TnC || "", m3TlC || "",
        totalTnC || "", totalTlC || ""
      ]);
      rCount.font = { name: "Times New Roman", size: 11 };
      rCount.alignment = { horizontal: "center", vertical: "middle" };
      rCount.getCell(1).alignment = { horizontal: "left", vertical: "middle", wrapText: true };
      rCount.getCell(1).font = { name: "Times New Roman", size: 11, bold: true };

      // Subrow 2: Câu số
      const rNum = matrixSheet.addRow([
        "",
        "Câu số",
        r.m1?.tnQuestions || "", r.m1?.tlQuestions || "",
        r.m2?.tnQuestions || "", r.m2?.tlQuestions || "",
        r.m3?.tnQuestions || "", r.m3?.tlQuestions || "",
        r.total?.tnQuestions || "", r.total?.tlQuestions || ""
      ]);
      rNum.font = { name: "Times New Roman", size: 11, italic: true };
      rNum.alignment = { horizontal: "center", vertical: "middle" };

      // Subrow 3: Số điểm
      const rPts = matrixSheet.addRow([
        "",
        "Số điểm",
        m1TnP || "", m1TlP || "",
        m2TnP || "", m2TlP || "",
        m3TnP || "", m3TlP || "",
        totalTnP || "", totalTlP || ""
      ]);
      rPts.font = { name: "Times New Roman", size: 11, bold: true };
      rPts.alignment = { horizontal: "center", vertical: "middle" };

      // Merge Cột A qua 3 hàng
      matrixSheet.mergeCells(`A${curRowIdx}:A${curRowIdx + 2}`);

      // Kẻ viền cho 3 hàng này
      for (let i = curRowIdx; i <= curRowIdx + 2; i++) {
        const row = matrixSheet.getRow(i);
        for (let c = 1; c <= 10; c++) {
          row.getCell(c).border = {
            top: { style: "thin" },
            left: { style: "thin" },
            bottom: { style: "thin" },
            right: { style: "thin" }
          };
        }
      }
      curRowIdx += 3;
    });

    // Summary Rows
    const summary = (isTiengViet && exam.matrix?.tiengVietMatrix?.readingTable?.summary)
      ? exam.matrix.tiengVietMatrix.readingTable.summary
      : (exam.matrix?.summary || {});
    const tc = summary.totalCountRow || {};
    const tp = summary.totalPointsRow || {};
    const rr = summary.ratiosRow || {};

    // Footer 1: Tổng số câu
    const rowTc = matrixSheet.addRow([
      "Tổng số câu", "",
      tc.m1Tn || "", tc.m1Tl || "",
      tc.m2Tn || "", tc.m2Tl || "",
      tc.m3Tn || "", tc.m3Tl || "",
      tc.totalTn || "", tc.totalTl || ""
    ]);
    matrixSheet.mergeCells(`A${curRowIdx}:B${curRowIdx}`);
    rowTc.font = { name: "Times New Roman", size: 11, bold: true };
    rowTc.alignment = { horizontal: "center", vertical: "middle" };
    for (let c = 1; c <= 10; c++) {
      rowTc.getCell(c).border = { top: { style: "thin" }, left: { style: "thin" }, bottom: { style: "thin" }, right: { style: "thin" } };
      rowTc.getCell(c).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "F1F5F9" } };
    }
    curRowIdx++;

    // Footer 2: Số điểm
    const rowTp = matrixSheet.addRow([
      "Số điểm", "",
      tp.m1Tn || "", tp.m1Tl || "",
      tp.m2Tn || "", tp.m2Tl || "",
      tp.m3Tn || "", tp.m3Tl || "",
      tp.totalTn || "", tp.totalTl || ""
    ]);
    matrixSheet.mergeCells(`A${curRowIdx}:B${curRowIdx}`);
    rowTp.font = { name: "Times New Roman", size: 11, bold: true };
    rowTp.alignment = { horizontal: "center", vertical: "middle" };
    for (let c = 1; c <= 10; c++) {
      rowTp.getCell(c).border = { top: { style: "thin" }, left: { style: "thin" }, bottom: { style: "thin" }, right: { style: "thin" } };
      rowTp.getCell(c).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "F1F5F9" } };
    }
    curRowIdx++;

    // Footer 3: Tỉ lệ %
    const m1Pct = rr?.m1Pct ?? rr?.M1 ?? exam.matrix?.ratios?.M1 ?? exam.matrix?.ratios?.m1 ?? exam.customRatios?.M1 ?? exam.customRatios?.m1 ?? 65;
    const m2Pct = rr?.m2Pct ?? rr?.M2 ?? exam.matrix?.ratios?.M2 ?? exam.matrix?.ratios?.m2 ?? exam.customRatios?.M2 ?? exam.customRatios?.m2 ?? 20;
    const m3Pct = rr?.m3Pct ?? rr?.M3 ?? exam.matrix?.ratios?.M3 ?? exam.matrix?.ratios?.m3 ?? exam.customRatios?.M3 ?? exam.customRatios?.m3 ?? 15;

    const rowRr = matrixSheet.addRow([
      "Tỉ lệ %", "",
      `${m1Pct}%`, "",
      `${m2Pct}%`, "",
      `${m3Pct}%`, "",
      "100%", ""
    ]);
    matrixSheet.mergeCells(`A${curRowIdx}:B${curRowIdx}`);
    matrixSheet.mergeCells(`C${curRowIdx}:D${curRowIdx}`);
    matrixSheet.mergeCells(`E${curRowIdx}:F${curRowIdx}`);
    matrixSheet.mergeCells(`G${curRowIdx}:H${curRowIdx}`);
    matrixSheet.mergeCells(`I${curRowIdx}:J${curRowIdx}`);
    rowRr.font = { name: "Times New Roman", size: 11, bold: true };
    rowRr.alignment = { horizontal: "center", vertical: "middle" };
    for (let c = 1; c <= 10; c++) {
      rowRr.getCell(c).border = { top: { style: "thin" }, left: { style: "thin" }, bottom: { style: "thin" }, right: { style: "thin" } };
      rowRr.getCell(c).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "E2E8F0" } };
    }

    // Nếu là môn Tiếng Việt, thêm Sheet 2: Ma trận Viết
    if (isTiengViet) {
      const writeSheet = workbook.addWorksheet("Ma trận Viết TT27");
      writeSheet.columns = [
        { header: "Nội dung kiểm tra", key: "content", width: 40 },
        { header: "Mức độ nhận thức / đáp ứng", key: "level", width: 25 },
        { header: "Điểm số", key: "score", width: 20 }
      ];
      const wRows = exam.matrix?.tiengVietMatrix?.writingTable?.rows || (
        grade <= 3 ? [
          { component: "1. Chính tả (Nghe - viết)", level: "Mức 1", score: "4,0 điểm" },
          { component: "2. Tập làm văn (Viết đoạn văn)", level: "Mức 2, 3", score: "6,0 điểm" }
        ] : [
          { component: "1. Tập làm văn (Bài văn hoàn chỉnh)", level: "Mức 1, 2, 3", score: "10,0 điểm" }
        ]
      );
      wRows.forEach(w => {
        writeSheet.addRow({
          content: w.component,
          level: w.level,
          score: w.score
        });
      });
      writeSheet.addRow({
        content: "TỔNG CỘNG ĐIỂM VIẾT",
        level: "",
        score: "10,0 điểm"
      });
    }

    const buffer = await workbook.xlsx.writeBuffer();
    return buffer;
  }
}

module.exports = new ExportEngine();
