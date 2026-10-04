/**
 * English DOCX Engine: Xuất file Word (.docx) chuẩn Office Open XML cho môn Tiếng Anh tiểu học
 * Tuân thủ thể thức Nghị định 30/2020/NĐ-CP và chuẩn chuyên môn Thông tư 27/2020/TT-BGDĐT
 * Nhúng 100% hình ảnh SGK Global Success dạng nhị phân ImageRun trực tiếp vào container .docx
 * Mở hiển thị hoàn hảo trên mọi phiên bản Microsoft Word (2007 - 365), không bị lỗi Protected View,
 * không bị lỗi ảnh chết (icon X đỏ).
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

const englishImagesBase64 = require('../data/englishImagesBase64.json');

// Kích thước chuẩn trang in A4 (210mm) với lề trái 30mm (1701 dxa) và lề phải 15mm (850 dxa)
const PAGE_CONTENT_WIDTH = 9355;

class EnglishDocxEngine {
  constructor() {
    this.noBorder = { style: BorderStyle.NONE, size: 0, color: "auto" };
    this.invisibleBorders = {
      top: this.noBorder, bottom: this.noBorder, left: this.noBorder, right: this.noBorder,
      insideHorizontal: this.noBorder, insideVertical: this.noBorder
    };

    this.solidBorder = { style: BorderStyle.SINGLE, size: 4, color: "000000" };
    this.tableBorders = {
      top: this.solidBorder, bottom: this.solidBorder, left: this.solidBorder, right: this.solidBorder,
      insideHorizontal: this.solidBorder, insideVertical: this.solidBorder
    };

    this.thinBorder = { style: BorderStyle.SINGLE, size: 2, color: "94A3B8" };
    this.taskBoxBorders = {
      top: this.thinBorder, bottom: this.thinBorder, left: this.thinBorder, right: this.thinBorder,
      insideHorizontal: this.thinBorder, insideVertical: this.thinBorder
    };
  }

  /**
   * Giải quyết ảnh và trả về Buffer + format để tạo ImageRun
   */
  resolveImageBuffer(item, grade = null) {
    if (!item) return null;
    let targetGrade = grade || this.currentGrade;
    let raw = item;
    if (typeof item === 'object') {
      raw = item.image || item.imageKey || item.imageUrl || item.src;
      if (!targetGrade) targetGrade = item.grade || this.currentGrade;
    }
    if (!raw || typeof raw !== 'string') return null;
    raw = raw.trim();

    let b64 = '';
    if (raw.startsWith('data:image')) {
      b64 = raw;
    } else {
      const filename = raw.split('/').pop().split('\\').pop();
      if (targetGrade) {
        const gradeKey = `/images/english/grade${targetGrade}/${filename}`;
        if (englishImagesBase64[gradeKey]) b64 = englishImagesBase64[gradeKey];
      }
      if (!b64 && englishImagesBase64[raw]) {
        b64 = englishImagesBase64[raw];
      }
      if (!b64) {
        const normalized = '/' + raw.replace(/^(\.\/|\/|dist\/)+/, '');
        if (englishImagesBase64[normalized]) {
          b64 = englishImagesBase64[normalized];
        } else if (englishImagesBase64[filename]) {
          b64 = englishImagesBase64[filename];
        } else {
          const match = Object.keys(englishImagesBase64).find(k => k.endsWith('/' + filename));
          if (match) b64 = englishImagesBase64[match];
        }
      }
    }

    if (!b64 || !b64.startsWith('data:image')) return null;

    const isJpg = b64.includes('image/jpeg') || b64.includes('image/jpg');
    const type = isJpg ? 'jpg' : 'png';
    const cleanB64 = b64.replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/, '').trim();
    try {
      const buffer = Buffer.from(cleanB64, 'base64');
      return { buffer, type };
    } catch (e) {
      return null;
    }
  }

  /**
   * Tạo ImageRun nhúng an toàn
   */
  createImageRun(item, maxWidth = 120, maxHeight = 85, grade = null) {
    const resolved = this.resolveImageBuffer(item, grade);
    if (!resolved) return null;
    try {
      return new ImageRun({
        data: resolved.buffer,
        transformation: {
          width: maxWidth,
          height: maxHeight
        },
        type: resolved.type
      });
    } catch (err) {
      console.warn("Lỗi khi tạo ImageRun docx:", err.message);
      return null;
    }
  }

  /**
   * Tạo đoạn văn dòng chấm làm bài
   */
  createDottedLine() {
    return new Paragraph({
      border: {
        bottom: { style: BorderStyle.DOTTED, size: 4, space: 1, color: "666666" }
      },
      spacing: { before: 80, after: 60 },
      children: [new TextRun({ text: " ", size: 20 })]
    });
  }

  /**
   * Tạo bảng Ma trận 10 cột chuẩn Thông tư 27 trong Word (.docx)
   */
  createDocx10ColMatrixTable({ rows = [], summary = {}, ratios = { M1: 65, M2: 20, M3: 15 }, totalPoints = 10 }) {
    const colWidths = [2755, 1200, 650, 650, 650, 650, 700, 700, 700, 700];

    const fmtCnt = (v) => (v !== undefined && v !== null && v !== 0 && v !== '' ? String(v) : '');
    const fmtPt = (v) => (v !== undefined && v !== null && v !== 0 && v !== '' ? (typeof v === 'number' ? v.toFixed(1).replace('.', ',') : String(v)) : '');
    const fmtQ = (v) => (v ? String(v) : '');

    let tc = summary?.totalCountRow;
    let tp = summary?.totalPointsRow;
    let rr = summary?.ratiosRow;

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
      rr = { m1Pct: ratios?.M1 || 65, m2Pct: ratios?.M2 || 20, m3Pct: ratios?.M3 || 15 };
    }

    const tableRows = [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 2755, type: WidthType.DXA },
            rowSpan: 2,
            verticalAlign: VerticalAlign.CENTER,
            shading: { fill: "F1F5F9" },
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Kỹ năng / Mạch kiến thức", bold: true, size: 22, font: "Times New Roman" })] })]
          }),
          new TableCell({
            width: { size: 1200, type: WidthType.DXA },
            rowSpan: 2,
            verticalAlign: VerticalAlign.CENTER,
            shading: { fill: "F1F5F9" },
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Số câu & điểm", bold: true, size: 22, font: "Times New Roman" })] })]
          }),
          new TableCell({
            width: { size: 1300, type: WidthType.DXA },
            columnSpan: 2,
            verticalAlign: VerticalAlign.CENTER,
            shading: { fill: "F1F5F9" },
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Mức 1", bold: true, size: 22, font: "Times New Roman" })] })]
          }),
          new TableCell({
            width: { size: 1300, type: WidthType.DXA },
            columnSpan: 2,
            verticalAlign: VerticalAlign.CENTER,
            shading: { fill: "F1F5F9" },
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Mức 2", bold: true, size: 22, font: "Times New Roman" })] })]
          }),
          new TableCell({
            width: { size: 1400, type: WidthType.DXA },
            columnSpan: 2,
            verticalAlign: VerticalAlign.CENTER,
            shading: { fill: "F1F5F9" },
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Mức 3", bold: true, size: 22, font: "Times New Roman" })] })]
          }),
          new TableCell({
            width: { size: 1400, type: WidthType.DXA },
            columnSpan: 2,
            verticalAlign: VerticalAlign.CENTER,
            shading: { fill: "F1F5F9" },
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Tổng cộng", bold: true, size: 22, font: "Times New Roman" })] })]
          })
        ]
      }),
      new TableRow({
        children: [
          new TableCell({ width: { size: 650, type: WidthType.DXA }, shading: { fill: "F8FAFC" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "TNKQ", bold: true, size: 20, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 650, type: WidthType.DXA }, shading: { fill: "F8FAFC" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "TL", bold: true, size: 20, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 650, type: WidthType.DXA }, shading: { fill: "F8FAFC" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "TNKQ", bold: true, size: 20, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 650, type: WidthType.DXA }, shading: { fill: "F8FAFC" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "TL", bold: true, size: 20, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 700, type: WidthType.DXA }, shading: { fill: "F8FAFC" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "TNKQ", bold: true, size: 20, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 700, type: WidthType.DXA }, shading: { fill: "F8FAFC" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "TL", bold: true, size: 20, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 700, type: WidthType.DXA }, shading: { fill: "F8FAFC" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "TNKQ", bold: true, size: 20, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 700, type: WidthType.DXA }, shading: { fill: "F8FAFC" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "TL", bold: true, size: 20, font: "Times New Roman" })] })] })
        ]
      })
    ];

    (rows || []).forEach(row => {
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

      // Dòng 1: Số câu
      tableRows.push(
        new TableRow({
          children: [
            new TableCell({
              width: { size: 2755, type: WidthType.DXA },
              rowSpan: 3,
              verticalAlign: VerticalAlign.CENTER,
              children: [new Paragraph({ children: [new TextRun({ text: row.topicName || '', bold: true, size: 22, font: "Times New Roman" })] })]
            }),
            new TableCell({ width: { size: 1200, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "Số câu", size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(m1TnC), size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(m1TlC), size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(m2TnC), size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(m2TlC), size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(m3TnC), size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(m3TlC), size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(totalTnC), bold: true, size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(totalTlC), bold: true, size: 20, font: "Times New Roman" })] })] })
          ]
        })
      );

      // Dòng 2: Câu số
      tableRows.push(
        new TableRow({
          children: [
            new TableCell({ width: { size: 1200, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "Câu số", size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtQ(row.m1?.tnQuestions), size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtQ(row.m1?.tlQuestions), size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtQ(row.m2?.tnQuestions), size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtQ(row.m2?.tlQuestions), size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtQ(row.m3?.tnQuestions), size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtQ(row.m3?.tlQuestions), size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtQ(row.total?.tnQuestions), size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtQ(row.total?.tlQuestions), size: 20, font: "Times New Roman" })] })] })
          ]
        })
      );

      // Dòng 3: Số điểm
      tableRows.push(
        new TableRow({
          children: [
            new TableCell({ width: { size: 1200, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "Số điểm", size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(m1TnP), size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(m1TlP), size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(m2TnP), size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 650, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(m2TlP), size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(m3TnP), size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(m3TlP), size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(totalTnP), bold: true, size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(totalTlP), bold: true, size: 20, font: "Times New Roman" })] })] })
          ]
        })
      );
    });

    // Dòng tổng số câu
    tableRows.push(
      new TableRow({
        children: [
          new TableCell({ width: { size: 3955, type: WidthType.DXA }, columnSpan: 2, shading: { fill: "F1F5F9" }, children: [new Paragraph({ children: [new TextRun({ text: "Tổng số câu", bold: true, size: 20, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 650, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(tc.m1Tn), bold: true, size: 20, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 650, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(tc.m1Tl), bold: true, size: 20, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 650, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(tc.m2Tn), bold: true, size: 20, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 650, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(tc.m2Tl), bold: true, size: 20, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 700, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(tc.m3Tn), bold: true, size: 20, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 700, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(tc.m3Tl), bold: true, size: 20, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 700, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(tc.totalTn), bold: true, size: 20, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 700, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtCnt(tc.totalTl), bold: true, size: 20, font: "Times New Roman" })] })] })
        ]
      })
    );

    // Dòng tổng số điểm
    tableRows.push(
      new TableRow({
        children: [
          new TableCell({ width: { size: 3955, type: WidthType.DXA }, columnSpan: 2, shading: { fill: "F1F5F9" }, children: [new Paragraph({ children: [new TextRun({ text: "Số điểm", bold: true, size: 20, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 650, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(tp.m1Tn), bold: true, size: 20, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 650, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(tp.m1Tl), bold: true, size: 20, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 650, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(tp.m2Tn), bold: true, size: 20, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 650, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(tp.m2Tl), bold: true, size: 20, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 700, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(tp.m3Tn), bold: true, size: 20, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 700, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(tp.m3Tl), bold: true, size: 20, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 700, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(tp.totalTn), bold: true, size: 20, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 700, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: fmtPt(tp.totalTl), bold: true, size: 20, font: "Times New Roman" })] })] })
        ]
      })
    );

    return new Table({
      width: { size: PAGE_CONTENT_WIDTH, type: WidthType.DXA },
      borders: this.tableBorders,
      rows: tableRows
    });
  }

  /**
   * Tạo bảng Bản đặc tả đề kiểm tra
   */
  createDocxSpecificationsTable(specifications = []) {
    const colWidths = [600, 1600, 3655, 800, 1700, 1000];
    const specRows = [
      new TableRow({
        children: [
          new TableCell({ width: { size: 600, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "STT", bold: true, size: 22, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 1600, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Kỹ năng / Mạch KT", bold: true, size: 22, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 3655, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Yêu cầu cần đạt", bold: true, size: 22, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 800, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Mức độ", bold: true, size: 22, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 1700, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Dạng câu hỏi", bold: true, size: 22, font: "Times New Roman" })] })] }),
          new TableCell({ width: { size: 1000, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Câu số", bold: true, size: 22, font: "Times New Roman" })] })] })
        ]
      })
    ];

    (specifications || []).forEach((s, idx) => {
      specRows.push(
        new TableRow({
          children: [
            new TableCell({ width: { size: 600, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: String(idx + 1), size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 1600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: s.topicName || '', bold: true, size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 3655, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: s.learningOutcome || '', size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: s.level || 'M1', size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 1700, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: s.questionType || '', size: 20, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 1000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: s.questionNumbers || '', bold: true, size: 20, font: "Times New Roman" })] })] })
          ]
        })
      );
    });

    return new Table({
      width: { size: PAGE_CONTENT_WIDTH, type: WidthType.DXA },
      borders: this.tableBorders,
      rows: specRows
    });
  }

  /**
   * Bộ chuyển đổi dữ liệu thông minh: Chuyển mảng questions phẳng từ AI Gemini sang cấu trúc 4 kỹ năng parts
   */
  adaptExamForDocx(rawExam) {
    if (!rawExam) return rawExam;
    const exam = { ...rawExam };
    if (exam.parts && (exam.parts.listening || exam.parts.reading || exam.parts.writing || exam.parts.speaking)) {
      return exam;
    }
    const questions = exam.questions || [];
    const parts = { listening: null, reading: null, writing: null, speaking: null };

    const lisQs = questions.filter(q => (q.skill || '').toLowerCase().includes('listen') || (q.taskTitle || '').toLowerCase().includes('listen') || (q.section || '').toLowerCase().includes('listen'));
    const readQs = questions.filter(q => (q.skill || '').toLowerCase().includes('read') || (q.taskTitle || '').toLowerCase().includes('read') || (q.section || '').toLowerCase().includes('read'));
    const wriQs = questions.filter(q => (q.skill || '').toLowerCase().includes('write') || (q.taskTitle || '').toLowerCase().includes('write') || (q.section || '').toLowerCase().includes('write'));
    const spkQs = questions.filter(q => (q.skill || '').toLowerCase().includes('speak') || (q.taskTitle || '').toLowerCase().includes('speak') || (q.section || '').toLowerCase().includes('speak'));

    if (lisQs.length > 0) {
      parts.listening = { title: "PART I. LISTENING", tasks: [{ taskNumber: 1, taskTitle: "Listen and complete", items: lisQs }] };
    }
    if (readQs.length > 0) {
      parts.reading = { title: "PART II. READING", tasks: [{ taskNumber: 2, taskTitle: "Read and complete", items: readQs }] };
    }
    if (wriQs.length > 0) {
      parts.writing = { title: "PART III. WRITING", tasks: [{ taskNumber: 3, taskTitle: "Write your answers", items: wriQs }] };
    }
    if (spkQs.length > 0) {
      parts.speaking = { title: "PART IV. SPEAKING", tasks: [{ taskNumber: 4, taskTitle: "Speaking test", items: spkQs }] };
    }

    if (!parts.listening && !parts.reading && !parts.writing && !parts.speaking && questions.length > 0) {
      const half = Math.ceil(questions.length / 2);
      parts.reading = { title: "PART I. READING & WRITING", tasks: [{ taskNumber: 1, taskTitle: "Read and choose", items: questions.slice(0, half) }] };
      parts.writing = { title: "PART II. WRITING & SPEAKING", tasks: [{ taskNumber: 2, taskTitle: "Write and answer", items: questions.slice(half) }] };
    }

    exam.parts = parts;
    return exam;
  }

  /**
   * Tạo tệp Word (.docx) hoàn chỉnh cho môn Tiếng Anh
   */
  async generateDocx(rawExam) {
    const exam = this.adaptExamForDocx(rawExam);
    this.currentGrade = exam.grade || 4;
    const schoolName = (exam.schoolName || 'A AN TRUONG PRIMARY SCHOOL').toUpperCase();
    const grade = exam.grade || 4;
    const title = (exam.title || `THE FIRST TERM TEST FOR GRADE ${grade}`).toUpperCase();
    const duration = exam.durationMinutes || 40;

    const parts = exam.parts || {};
    const lis = parts.listening || {};
    const read = parts.reading || {};
    const wri = parts.writing || {};
    const spk = parts.speaking || {};

    const children = [];

    // ==================== 1. HEADER CHUẨN GLOBAL SUCCESS ====================
    const headerTable = new Table({
      width: { size: PAGE_CONTENT_WIDTH, type: WidthType.DXA },
      columnWidths: [5155, 4200],
      borders: this.invisibleBorders,
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: { size: 5155, type: WidthType.DXA },
              children: [
                new Paragraph({ children: [new TextRun({ text: schoolName, bold: true, size: 26, font: 'Times New Roman' })] }),
                new Paragraph({ spacing: { before: 80 }, children: [new TextRun({ text: 'Full name: ..............................................................', size: 24, font: 'Times New Roman' })] }),
                new Paragraph({ spacing: { before: 40 }, children: [new TextRun({ text: `Class: ${grade}......       School year: ..................`, size: 24, font: 'Times New Roman' })] })
              ]
            }),
            new TableCell({
              width: { size: 4200, type: WidthType.DXA },
              children: [
                new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: title, bold: true, size: 28, font: 'Times New Roman' })] }),
                new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 60 }, children: [new TextRun({ text: `Time allowed: ${duration} minutes`, italics: true, size: 22, font: 'Times New Roman' })] })
              ]
            })
          ]
        })
      ]
    });
    children.push(headerTable);

    // ==================== 2. BẢNG ĐIỂM 4 KỸ NĂNG CHUẨN ====================
    const colW = Math.round(PAGE_CONTENT_WIDTH / 6);
    const marksTable = new Table({
      width: { size: PAGE_CONTENT_WIDTH, type: WidthType.DXA },
      borders: this.tableBorders,
      rows: [
        new TableRow({
          children: ['Skills', 'Listening', 'Reading', 'Writing', 'Speaking', 'Total'].map(h =>
            new TableCell({
              width: { size: colW, type: WidthType.DXA },
              shading: { fill: "F1F5F9" },
              verticalAlign: VerticalAlign.CENTER,
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: h, bold: true, size: 22, font: 'Times New Roman' })] })]
            })
          )
        }),
        new TableRow({
          children: [
            new TableCell({
              width: { size: colW, type: WidthType.DXA },
              verticalAlign: VerticalAlign.CENTER,
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Marks', bold: true, size: 22, font: 'Times New Roman' })] })]
            }),
            ...Array(5).fill(0).map(() =>
              new TableCell({
                width: { size: colW, type: WidthType.DXA },
                children: [new Paragraph({ spacing: { before: 200, after: 200 }, children: [new TextRun({ text: ' ', size: 20 })] })]
              })
            )
          ]
        })
      ]
    });
    children.push(new Paragraph({ spacing: { before: 120 } }));
    children.push(marksTable);

    // Khung nhận xét & chữ ký
    const commentTable = new Table({
      width: { size: PAGE_CONTENT_WIDTH, type: WidthType.DXA },
      borders: this.invisibleBorders,
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: { size: 5600, type: WidthType.DXA },
              children: [
                new Paragraph({
                  spacing: { before: 80 },
                  children: [
                    new TextRun({ text: 'Comments: ..........................................................................................................\n', bold: true, size: 22, font: 'Times New Roman' }),
                    new TextRun({ text: '.....................................................................................................................................', size: 22, font: 'Times New Roman' })
                  ]
                })
              ]
            }),
            new TableCell({
              width: { size: 3755, type: WidthType.DXA },
              children: [
                new Paragraph({
                  spacing: { before: 80 },
                  children: [
                    new TextRun({ text: 'Supervisor signature: .................................................', bold: true, size: 22, font: 'Times New Roman' })
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
    children.push(commentTable);
    children.push(new Paragraph({
      border: { bottom: { style: BorderStyle.SINGLE, size: 12, space: 1, color: "000000" } },
      spacing: { before: 80, after: 140 },
      children: [new TextRun({ text: " ", size: 10 })]
    }));

    // ==================== 3. I. LISTENING ====================
    children.push(new Paragraph({
      shading: { fill: "F0F9FF" },
      spacing: { before: 140, after: 80 },
      children: [
        new TextRun({ text: (lis.title || 'PART I. LISTENING (3.0 marks)').toUpperCase(), bold: true, size: 26, font: 'Times New Roman', color: "0369A1" })
      ]
    }));

    (lis.tasks || []).forEach((t, tIdx) => {
      children.push(new Paragraph({
        spacing: { before: 100, after: 40 },
        children: [
          new TextRun({ text: `TASK ${t.taskNumber || (tIdx + 1)}. ${t.taskTitle} (${t.points || 1.0} mark)`, bold: true, size: 24, font: 'Times New Roman' })
        ]
      }));
      if (t.taskDesc) {
        children.push(new Paragraph({
          spacing: { after: 60 },
          children: [new TextRun({ text: t.taskDesc, italics: true, size: 22, font: 'Times New Roman', color: "475569" })]
        }));
      }

      const hasOptionsWithImages = (t.items || []).some(it => it.options && it.options.some(opt => opt.image || opt.imageKey));
      const isNumberTask = (t.taskTitle || '').toLowerCase().includes('number');
      const isTickCrossTask = (t.taskTitle || '').toLowerCase().includes('tick or cross');
      const hasDirectImages = (t.items || []).some(it => it.image || it.imageKey);

      // Cặp ảnh a & b (Listen and tick)
      if (hasOptionsWithImages) {
        (t.items || []).forEach((it, iIdx) => {
          const cells = [
            new TableCell({
              width: { size: 600, type: WidthType.DXA },
              verticalAlign: VerticalAlign.CENTER,
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${iIdx + 1}.`, bold: true, size: 24, font: 'Times New Roman' })] })]
            })
          ];

          (it.options || []).forEach(opt => {
            const imgRun = this.createImageRun(opt, 140, 85);
            const optChildren = [
              new Paragraph({
                children: [
                  new TextRun({ text: `[ ${opt.id} ]  `, bold: true, size: 22, font: 'Times New Roman', color: "0284C7" }),
                  new TextRun({ text: opt.text || '', bold: true, size: 22, font: 'Times New Roman' }),
                  new TextRun({ text: '    [   ]', bold: true, size: 22, font: 'Times New Roman' })
                ]
              })
            ];
            if (imgRun) {
              optChildren.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 40, after: 40 }, children: [imgRun] }));
            }
            cells.push(
              new TableCell({
                width: { size: 4377, type: WidthType.DXA },
                shading: { fill: "FAFAFA" },
                children: optChildren
              })
            );
          });

          children.push(
            new Table({
              width: { size: PAGE_CONTENT_WIDTH, type: WidthType.DXA },
              borders: this.taskBoxBorders,
              rows: [new TableRow({ children: cells })]
            })
          );
          children.push(new Paragraph({ spacing: { after: 60 } }));
        });
      }
      // Listen and number (4 tranh)
      else if (isNumberTask && hasDirectImages) {
        const items = t.items || [];
        const labels = ['a', 'b', 'c', 'd'];
        const numCells = items.map((it, idx) => {
          const imgRun = this.createImageRun(it, 120, 80);
          const cellP = [
            new Paragraph({ children: [new TextRun({ text: `Picture ${labels[idx] || (idx + 1)}`, bold: true, size: 20, font: 'Times New Roman', color: "0284C7" })] })
          ];
          if (imgRun) {
            cellP.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 40, after: 40 }, children: [imgRun] }));
          }
          cellP.push(new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '[   ]', bold: true, size: 26, font: 'Times New Roman' })] }));
          return new TableCell({
            width: { size: Math.round(PAGE_CONTENT_WIDTH / Math.max(1, items.length)), type: WidthType.DXA },
            shading: { fill: "FAFAFA" },
            children: cellP
          });
        });

        children.push(
          new Table({
            width: { size: PAGE_CONTENT_WIDTH, type: WidthType.DXA },
            borders: this.taskBoxBorders,
            rows: [new TableRow({ children: numCells })]
          })
        );
        children.push(new Paragraph({ spacing: { after: 80 } }));
      }
      // Listen and tick or cross (4 tranh)
      else if (isTickCrossTask && hasDirectImages) {
        const items = t.items || [];
        const tcCells = items.map((it, idx) => {
          const imgRun = this.createImageRun(it, 120, 80);
          const cellP = [
            new Paragraph({ children: [new TextRun({ text: `${idx + 1}.`, bold: true, size: 22, font: 'Times New Roman' })] })
          ];
          if (imgRun) {
            cellP.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 40, after: 40 }, children: [imgRun] }));
          }
          cellP.push(new Paragraph({ children: [new TextRun({ text: it.statement || it.topic || '', size: 20, font: 'Times New Roman' })] }));
          cellP.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 40 }, children: [new TextRun({ text: '[   ]', bold: true, size: 24, font: 'Times New Roman' })] }));
          return new TableCell({
            width: { size: Math.round(PAGE_CONTENT_WIDTH / Math.max(1, items.length)), type: WidthType.DXA },
            shading: { fill: "FAFAFA" },
            children: cellP
          });
        });

        children.push(
          new Table({
            width: { size: PAGE_CONTENT_WIDTH, type: WidthType.DXA },
            borders: this.taskBoxBorders,
            rows: [new TableRow({ children: tcCells })]
          })
        );
        children.push(new Paragraph({ spacing: { after: 80 } }));
      }
      // True / False statements
      else {
        const tfRows = [
          new TableRow({
            children: [
              new TableCell({ width: { size: 800, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "No.", bold: true, size: 22, font: "Times New Roman" })] })] }),
              new TableCell({ width: { size: 6955, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ children: [new TextRun({ text: "Statements", bold: true, size: 22, font: "Times New Roman" })] })] }),
              new TableCell({ width: { size: 800, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "True", bold: true, size: 22, font: "Times New Roman" })] })] }),
              new TableCell({ width: { size: 800, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "False", bold: true, size: 22, font: "Times New Roman" })] })] })
            ]
          })
        ];

        (t.items || []).forEach((it, iIdx) => {
          tfRows.push(
            new TableRow({
              children: [
                new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: String(iIdx + 1), bold: true, size: 22, font: "Times New Roman" })] })] }),
                new TableCell({ width: { size: 6955, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: it.statement || it.questionText || it.sentence || '', size: 22, font: "Times New Roman" })] })] }),
                new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "[   ]", size: 22, font: "Times New Roman" })] })] }),
                new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "[   ]", size: 22, font: "Times New Roman" })] })] })
              ]
            })
          );
        });

        children.push(
          new Table({
            width: { size: PAGE_CONTENT_WIDTH, type: WidthType.DXA },
            borders: this.tableBorders,
            rows: tfRows
          })
        );
        children.push(new Paragraph({ spacing: { after: 80 } }));
      }
    });

    // ==================== 4. II. READING ====================
    children.push(new Paragraph({
      shading: { fill: "F0FDF4" },
      spacing: { before: 160, after: 80 },
      children: [
        new TextRun({ text: (read.title || 'PART II. READING (2.5 marks)').toUpperCase(), bold: true, size: 26, font: 'Times New Roman', color: "16A34A" })
      ]
    }));

    (read.tasks || []).forEach((t, tIdx) => {
      children.push(new Paragraph({
        spacing: { before: 100, after: 40 },
        children: [
          new TextRun({ text: `TASK ${t.taskNumber || (tIdx + 1)}. ${t.taskTitle} (${t.points || 1.25} marks)`, bold: true, size: 24, font: 'Times New Roman' })
        ]
      }));
      if (t.taskDesc) {
        children.push(new Paragraph({
          spacing: { after: 60 },
          children: [new TextRun({ text: t.taskDesc, italics: true, size: 22, font: 'Times New Roman', color: "475569" })]
        }));
      }

      const hasTaskImages = (t.items || []).some(it => it.image || it.imageKey);

      // Look and tick/cross (3-5 tranh)
      if (hasTaskImages) {
        const items = t.items || [];
        const rCells = items.slice(0, 3).map((it, idx) => {
          const imgRun = this.createImageRun(it, 130, 85);
          const cellP = [
            new Paragraph({ children: [new TextRun({ text: `${idx + 1}.`, bold: true, size: 22, font: 'Times New Roman' })] })
          ];
          if (imgRun) {
            cellP.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 40, after: 40 }, children: [imgRun] }));
          }
          cellP.push(new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({ text: `${it.caption || it.statement || ''}   `, bold: true, size: 22, font: 'Times New Roman' }),
              new TextRun({ text: '[   ]', bold: true, size: 22, font: 'Times New Roman' })
            ]
          }));
          return new TableCell({
            width: { size: Math.round(PAGE_CONTENT_WIDTH / 3), type: WidthType.DXA },
            children: cellP
          });
        });

        children.push(
          new Table({
            width: { size: PAGE_CONTENT_WIDTH, type: WidthType.DXA },
            borders: this.tableBorders,
            rows: [new TableRow({ children: rCells })]
          })
        );
        children.push(new Paragraph({ spacing: { after: 80 } }));
      }
      // Word Bank + Passage
      else if (t.wordBank) {
        children.push(new Paragraph({
          shading: { fill: "F0FDF4" },
          border: {
            top: { style: BorderStyle.DASHED, size: 4, color: "059669" },
            bottom: { style: BorderStyle.DASHED, size: 4, color: "059669" },
            left: { style: BorderStyle.DASHED, size: 4, color: "059669" },
            right: { style: BorderStyle.DASHED, size: 4, color: "059669" }
          },
          alignment: AlignmentType.CENTER,
          spacing: { before: 60, after: 80 },
          children: [
            new TextRun({ text: t.wordBank.join('     |     '), bold: true, size: 24, font: 'Times New Roman', color: "065F46" })
          ]
        }));
        if (t.passage) {
          children.push(new Paragraph({
            shading: { fill: "FEFCE8" },
            spacing: { before: 60, after: 80 },
            children: [new TextRun({ text: t.passage, italics: true, size: 24, font: 'Times New Roman' })]
          }));
        }
      }
      // Passage + questions
      else if (t.passage && t.items) {
        children.push(new Paragraph({
          shading: { fill: "FEFCE8" },
          spacing: { before: 60, after: 80 },
          children: [new TextRun({ text: t.passage, italics: true, size: 24, font: 'Times New Roman' })]
        }));
        (t.items || []).forEach((it, idx) => {
          const optTexts = (it.options || []).map(opt => `${opt.id}. ${opt.text}`).join('       ');
          children.push(new Paragraph({
            spacing: { before: 40, after: 40 },
            children: [
              new TextRun({ text: `${idx + 1}. `, bold: true, size: 22, font: 'Times New Roman' }),
              new TextRun({ text: it.questionText || it.sentence || '', size: 22, font: 'Times New Roman' }),
              new TextRun({ text: `\n      ${optTexts}`, size: 22, font: 'Times New Roman' })
            ]
          }));
        });
      }
    });

    // ==================== 5. III. WRITING ====================
    children.push(new Paragraph({
      shading: { fill: "FDF4FF" },
      spacing: { before: 160, after: 80 },
      children: [
        new TextRun({ text: (wri.title || 'PART III. WRITING (2.5 marks)').toUpperCase(), bold: true, size: 26, font: 'Times New Roman', color: "9333EA" })
      ]
    }));

    (wri.tasks || []).forEach((t, tIdx) => {
      children.push(new Paragraph({
        spacing: { before: 100, after: 40 },
        children: [
          new TextRun({ text: `TASK ${t.taskNumber || (tIdx + 1)}. ${t.taskTitle} (${t.points || 1.25} marks)`, bold: true, size: 24, font: 'Times New Roman' })
        ]
      }));
      if (t.taskDesc) {
        children.push(new Paragraph({
          spacing: { after: 60 },
          children: [new TextRun({ text: t.taskDesc, italics: true, size: 22, font: 'Times New Roman', color: "475569" })]
        }));
      }

      const hasTaskImages = (t.items || []).some(it => it.image || it.imageKey);

      // Scrambled letters với 4 tranh (Look and write)
      if (hasTaskImages) {
        const items = t.items || [];
        const circleNums = ['(1)', '(2)', '(3)', '(4)', '(5)'];
        const wCells = items.map((it, idx) => {
          const imgRun = this.createImageRun(it, 120, 80);
          const cellP = [
            new Paragraph({ children: [new TextRun({ text: circleNums[idx], bold: true, size: 22, font: 'Times New Roman', color: "7E22CE" })] })
          ];
          if (imgRun) {
            cellP.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 40, after: 40 }, children: [imgRun] }));
          }
          cellP.push(new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: it.clue || it.questionText || '', bold: true, size: 22, font: 'Times New Roman', color: "581C87" })] }));
          cellP.push(this.createDottedLine());
          return new TableCell({
            width: { size: Math.round(PAGE_CONTENT_WIDTH / Math.max(1, items.length)), type: WidthType.DXA },
            children: cellP
          });
        });

        children.push(
          new Table({
            width: { size: PAGE_CONTENT_WIDTH, type: WidthType.DXA },
            borders: this.tableBorders,
            rows: [new TableRow({ children: wCells })]
          })
        );
        children.push(new Paragraph({ spacing: { after: 80 } }));
      }
      // Reorder words / Make sentences
      else {
        (t.items || []).forEach((it, idx) => {
          children.push(new Paragraph({
            spacing: { before: 60, after: 20 },
            children: [
              new TextRun({ text: `${idx + 1}. `, bold: true, size: 22, font: 'Times New Roman' }),
              new TextRun({ text: it.jumbled || it.questionText || '', size: 22, font: 'Times New Roman' })
            ]
          }));
          children.push(this.createDottedLine());
          children.push(this.createDottedLine());
        });
      }
    });

    // ==================== 6. IV. SPEAKING ====================
    children.push(new Paragraph({
      shading: { fill: "FFF7ED" },
      spacing: { before: 160, after: 80 },
      children: [
        new TextRun({ text: (spk.title || 'PART IV. SPEAKING (2.0 marks)').toUpperCase(), bold: true, size: 26, font: 'Times New Roman', color: "EA580C" })
      ]
    }));

    if (spk.data?.part1) {
      children.push(new Paragraph({
        spacing: { before: 80, after: 40 },
        children: [new TextRun({ text: `${spk.data.part1.title} (${spk.data.part1.points} mark)`, bold: true, size: 24, font: 'Times New Roman' })]
      }));
      (spk.data.part1.questions || []).forEach(q => {
        children.push(new Paragraph({
          spacing: { before: 20, after: 20 },
          children: [new TextRun({ text: `• ${q}`, size: 22, font: 'Times New Roman' })]
        }));
      });
    }

    if (spk.data?.part2) {
      children.push(new Paragraph({
        spacing: { before: 100, after: 40 },
        children: [new TextRun({ text: `${spk.data.part2.title} (${spk.data.part2.points} mark)`, bold: true, size: 24, font: 'Times New Roman' })]
      }));
      if (spk.data.part2.items && spk.data.part2.items.length > 0) {
        const spkCells = spk.data.part2.items.map(it => {
          const imgRun = this.createImageRun(it, 120, 80);
          const cellP = [];
          if (imgRun) {
            cellP.push(new Paragraph({ alignment: AlignmentType.CENTER, children: [imgRun] }));
          }
          cellP.push(new Paragraph({ children: [new TextRun({ text: it.question || '', bold: true, size: 20, font: 'Times New Roman' })] }));
          return new TableCell({
            width: { size: Math.round(PAGE_CONTENT_WIDTH / Math.max(1, spk.data.part2.items.length)), type: WidthType.DXA },
            children: cellP
          });
        });

        children.push(
          new Table({
            width: { size: PAGE_CONTENT_WIDTH, type: WidthType.DXA },
            borders: this.tableBorders,
            rows: [new TableRow({ children: spkCells })]
          })
        );
      }
    }

    // ==================== 7. TRANG ĐÁP ÁN & AUDIO TRANSCRIPTS ====================
    children.push(new Paragraph({
      pageBreakBefore: true,
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({ text: schoolName, bold: true, size: 26, font: 'Times New Roman' })
      ]
    }));
    children.push(new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 40, after: 40 },
      children: [
        new TextRun({ text: (exam.teacherGuide?.title || 'ANSWER KEYS & AUDIO TRANSCRIPTS').toUpperCase(), bold: true, size: 28, font: 'Times New Roman' })
      ]
    }));
    children.push(new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 120 },
      children: [
        new TextRun({ text: `School year: ..................  •  Grade: ${grade}`, italics: true, size: 22, font: 'Times New Roman' })
      ]
    }));

    // Audio Transcripts
    if (exam.teacherGuide?.audioTranscripts && exam.teacherGuide.audioTranscripts.length > 0) {
      children.push(new Paragraph({
        shading: { fill: "F0F9FF" },
        spacing: { before: 80, after: 60 },
        children: [
          new TextRun({ text: '🎙️ AUDIO TRANSCRIPTS FOR LISTENING TASKS (Kịch bản bài nghe)', bold: true, size: 24, font: 'Times New Roman', color: "0369A1" })
        ]
      }));
      exam.teacherGuide.audioTranscripts.forEach(t => {
        children.push(new Paragraph({
          spacing: { before: 40, after: 20 },
          children: [new TextRun({ text: `TASK ${t.taskNumber}: ${t.taskTitle}`, bold: true, size: 22, font: 'Times New Roman' })]
        }));
        (t.transcriptLines || []).forEach(l => {
          children.push(new Paragraph({
            spacing: { before: 10, after: 10 },
            children: [new TextRun({ text: `    ${l}`, italics: true, size: 22, font: 'Times New Roman', color: "334155" })]
          }));
        });
      });
    }

    // Answer Key Table
    const questions = exam.questions || [];
    if (questions.length > 0) {
      children.push(new Paragraph({
        spacing: { before: 140, after: 60 },
        children: [
          new TextRun({ text: '📝 BẢNG ĐÁP ÁN CHI TIẾT (ANSWER KEYS)', bold: true, size: 24, font: 'Times New Roman' })
        ]
      }));

      const ansRows = [
        new TableRow({
          children: [
            new TableCell({ width: { size: 800, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Câu", bold: true, size: 22, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 2800, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ children: [new TextRun({ text: "Kỹ năng / Dạng bài", bold: true, size: 22, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 3955, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ children: [new TextRun({ text: "Đáp án chuẩn", bold: true, size: 22, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 900, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Điểm", bold: true, size: 22, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 900, type: WidthType.DXA }, shading: { fill: "F1F5F9" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Mức", bold: true, size: 22, font: "Times New Roman" })] })] })
          ]
        })
      ];

      questions.forEach((q, idx) => {
        ansRows.push(
          new TableRow({
            children: [
              new TableCell({ width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: String(idx + 1), size: 22, font: "Times New Roman" })] })] }),
              new TableCell({ width: { size: 2800, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: `${q.skill || ''} (${q.taskTitle || ''})`, size: 20, font: "Times New Roman" })] })] }),
              new TableCell({ width: { size: 3955, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: q.correctAnswer || '', bold: true, size: 22, font: "Times New Roman", color: "047857" })] })] }),
              new TableCell({ width: { size: 900, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: String(q.points || 0.25), size: 22, font: "Times New Roman" })] })] }),
              new TableCell({ width: { size: 900, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: q.level || 'M1', size: 22, font: "Times New Roman" })] })] })
            ]
          })
        );
      });

      children.push(
        new Table({
          width: { size: PAGE_CONTENT_WIDTH, type: WidthType.DXA },
          borders: this.tableBorders,
          rows: ansRows
        })
      );
    }

    // Speaking Rubric
    if (exam.teacherGuide?.speakingRubric && exam.teacherGuide.speakingRubric.length > 0) {
      children.push(new Paragraph({
        spacing: { before: 140, after: 60 },
        children: [
          new TextRun({ text: '🗣️ TIÊU CHÍ CHẤM THI NÓI (SPEAKING ASSESSMENT RUBRIC)', bold: true, size: 24, font: 'Times New Roman', color: "EA580C" })
        ]
      }));

      const rubRows = [
        new TableRow({
          children: [
            new TableCell({ width: { size: 2500, type: WidthType.DXA }, shading: { fill: "FFEDD5" }, children: [new Paragraph({ children: [new TextRun({ text: "Tiêu chí", bold: true, size: 22, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 1200, type: WidthType.DXA }, shading: { fill: "FFEDD5" }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Điểm tối đa", bold: true, size: 22, font: "Times New Roman" })] })] }),
            new TableCell({ width: { size: 5655, type: WidthType.DXA }, shading: { fill: "FFEDD5" }, children: [new Paragraph({ children: [new TextRun({ text: "Mô tả mức đạt", bold: true, size: 22, font: "Times New Roman" })] })] })
          ]
        })
      ];

      exam.teacherGuide.speakingRubric.forEach(r => {
        rubRows.push(
          new TableRow({
            children: [
              new TableCell({ width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: r.criteria || '', bold: true, size: 20, font: "Times New Roman" })] })] }),
              new TableCell({ width: { size: 1200, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${r.points} đ`, size: 20, font: "Times New Roman" })] })] }),
              new TableCell({ width: { size: 5655, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: r.desc || '', size: 20, font: "Times New Roman" })] })] })
            ]
          })
        );
      });

      children.push(
        new Table({
          width: { size: PAGE_CONTENT_WIDTH, type: WidthType.DXA },
          borders: this.tableBorders,
          rows: rubRows
        })
      );
    }

    // ==================== 8. MA TRẬN ĐỀ KIỂM TRA 2 TẦNG (TT27) ====================
    const mRows = exam.matrix?.matrixRows || exam.matrix?.rows;
    if (mRows && mRows.length > 0) {
      children.push(new Paragraph({
        pageBreakBefore: true,
        alignment: AlignmentType.CENTER,
        spacing: { before: 80, after: 40 },
        children: [
          new TextRun({ text: "MA TRẬN ĐỀ KIỂM TRA ĐỊNH KỲ\n", bold: true, size: 28, font: "Times New Roman" }),
          new TextRun({ text: `MÔN: TIẾNG ANH – LỚP ${grade}\n`, bold: true, size: 26, font: "Times New Roman" }),
          new TextRun({ text: "(Kèm theo đề kiểm tra theo quy định Thông tư 27/2020/TT-BGDĐT)", italics: true, size: 22, font: "Times New Roman" })
        ]
      }));

      const matrixTable = this.createDocx10ColMatrixTable({
        rows: mRows,
        summary: exam.matrix.summary,
        ratios: exam.skillsRatio,
        totalPoints: 10
      });
      children.push(matrixTable);
    }

    // ==================== 9. BẢN ĐẶC TẢ MA TRẬN ĐỀ KIỂM TRA ====================
    if (exam.specifications && exam.specifications.length > 0) {
      children.push(new Paragraph({
        pageBreakBefore: true,
        alignment: AlignmentType.CENTER,
        spacing: { before: 80, after: 40 },
        children: [
          new TextRun({ text: "BẢN ĐẶC TẢ MA TRẬN ĐỀ KIỂM TRA ĐỊNH KỲ\n", bold: true, size: 28, font: "Times New Roman" }),
          new TextRun({ text: `MÔN: TIẾNG ANH – LỚP ${grade}\n`, bold: true, size: 26, font: "Times New Roman" }),
          new TextRun({ text: "(Kèm theo đề kiểm tra theo quy định Thông tư 27/2020/TT-BGDĐT)", italics: true, size: 22, font: "Times New Roman" })
        ]
      }));

      const specTable = this.createDocxSpecificationsTable(exam.specifications);
      children.push(specTable);
    }

    // Khởi tạo đối tượng Document
    const doc = new Document({
      styles: {
        default: {
          document: {
            run: {
              font: "Times New Roman",
              size: 26 // 13pt
            }
          }
        }
      },
      sections: [{
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
        children
      }]
    });

    return await Packer.toBuffer(doc);
  }
}

module.exports = new EnglishDocxEngine();
