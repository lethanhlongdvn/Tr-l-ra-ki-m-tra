/**
 * Tiện ích xuất file Word & PDF tương thích cao (.doc / .pdf)
 * Theo phong cách tối ưu của Thầy Lê Thành Long & tuân thủ thể thức Nghị định 30/2020/NĐ-CP
 * và chuẩn chuyên môn Thông tư 27/2020/TT-BGDĐT
 * Hoạt động trực tiếp 100% tại Client (không lo lỗi mạng/server, mở trên mọi phiên bản MS Word & PDF)
 */

import { downloadWordHtml } from './api';
import englishImagesBase64 from './englishImagesBase64.json';

/**
 * Trình giải quyết ảnh đa năng: Chuyển đổi mọi định dạng ảnh sang Base64 Data URI
 * Đảm bảo 100% không bị lỗi ảnh chết, lỗi CORS hay lỗi mạng
 */
export function resolveImageToDataUri(item) {
  if (!item) return '';
  if (typeof item === 'object') {
    return resolveImageToDataUri(item.image || item.imageKey || item.imageUrl || item.src);
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

class WordImageCollector {
  constructor() {
    this.images = new Map();
    this.counter = 0;
  }

  registerImage(item) {
    if (!item) return '';
    const b64 = resolveImageToDataUri(item);
    if (!b64 || !b64.startsWith('data:image')) return '';

    this.counter++;
    const safeExt = b64.includes('image/jpeg') ? '.jpg' : '.png';
    const rawName = (typeof item === 'object' ? (item.image || item.imageKey || '') : item) || '';
    const preferredName = rawName.split('/').pop().split('\\').pop();
    const baseName = (preferredName ? preferredName.replace(/\.[^/.]+$/, '') : `img_${this.counter}`)
      .replace(/[^a-zA-Z0-9_-]/g, '_');
    const location = `word_${this.counter}_${baseName}${safeExt}`;

    const cleanB64 = b64.replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/, '').trim();
    const mimeType = b64.includes('image/jpeg') ? 'image/jpeg' : 'image/png';

    this.images.set(location, { location, mimeType, data: cleanB64 });
    return location;
  }

  hasImages() {
    return this.images.size > 0;
  }

  buildMhtml(htmlContent) {
    const boundary = "----=_NextPart_MSWORD_DOC_BOUNDARY";
    const parts = [
      'MIME-Version: 1.0',
      `Content-Type: multipart/related; boundary="${boundary}"`,
      '',
      `--${boundary}`,
      'Content-Type: text/html; charset="utf-8"',
      'Content-Transfer-Encoding: 8bit',
      'Content-Location: file:///C:/exam_document.htm',
      '',
      htmlContent,
      ''
    ];

    for (const [location, img] of this.images.entries()) {
      parts.push(`--${boundary}`);
      parts.push(`Content-Type: ${img.mimeType}`);
      parts.push('Content-Transfer-Encoding: base64');
      parts.push(`Content-Location: ${location}`);
      parts.push('');
      parts.push(img.data);
      parts.push('');
    }

    parts.push(`--${boundary}--`);
    return parts.join('\r\n');
  }
}

export function buildStandardExamHtml(exam, { forPdf = false, isPrint = false } = {}) {
  if (!exam) return '';

  const isTiengViet = (exam.subject === 'Tiếng Việt');
  const isEnglish = Boolean(exam.isEnglish || (exam.subject || '').toLowerCase().includes('tiếng anh') || (exam.subject || '').toLowerCase().includes('english'));
  const schoolName = (exam.schoolName || 'TRƯỜNG TIỂU HỌC A AN TRƯỜNG').toUpperCase();
  const governingBody = (exam.governingBody || 'UBND XÃ AN TRƯỜNG').toUpperCase();
  const subjectName = (exam.subject || 'TOÁN').toUpperCase();
  const grade = exam.grade || 4;
  const semester = (exam.semester || 'CUỐI HỌC KỲ I').toUpperCase();
  const duration = exam.durationMinutes || 40;

  const questions = exam.questions || [];
  const mcQuestions = questions.filter(q => q.questionType !== 'constructed_response');
  const crQuestions = questions.filter(q => q.questionType === 'constructed_response');

  const mcPoints = Math.round(mcQuestions.reduce((a, b) => a + (b.points || 0), 0) * 10) / 10;
  const crPoints = Math.round(crQuestions.reduce((a, b) => a + (b.points || 0), 0) * 10) / 10;

  const m = exam.matrix || {};
  const matrixRows = m.matrixRows || m.rows || [];

  const imgCollector = new WordImageCollector();
  const getWordImgSrc = (item) => {
    if (forPdf) {
      return resolveImageToDataUri(item);
    }
    return imgCollector.registerImage(item);
  };

  let docHtml = forPdf ? `
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <title>Đề kiểm tra ${subjectName} Lớp ${grade} - Chuẩn Nghị định 30</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 20mm 15mm 20mm 30mm; /* Chuẩn Nghị định 30/2020/NĐ-CP: Top 20mm, Right 15mm, Bottom 20mm, Left 30mm */
    }
    @media print {
      html, body {
        width: 100%;
        margin: 0 !important;
        padding: 0 !important;
        background: #fff !important;
        color: #000 !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      .no-print { display: none !important; }
    }
    * {
      box-sizing: border-box;
    }
    body {
      font-family: 'Times New Roman', Times, serif;
      font-size: 13pt;
      line-height: 1.35;
      color: #000;
      background-color: #fff;
      margin: 0;
      padding: 0;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      page-break-inside: auto;
    }
    thead {
      display: table-header-group;
    }
    tr {
      page-break-inside: avoid;
      break-inside: avoid;
    }
    img {
      max-width: 100%;
      height: auto;
      page-break-inside: avoid;
      break-inside: avoid;
      display: inline-block;
      vertical-align: middle;
    }
    .text-center { text-align: center; }
    .text-right { text-align: right; }
    .text-left { text-align: left; }
    .font-bold { font-weight: bold; }
    .uppercase { text-transform: uppercase; }
    
    .border-table td, .border-table th {
      border: 1px solid #000;
      padding: 6px 8px;
      font-size: 12pt;
    }
    .header-table td {
      border: none;
      padding: 2px 4px;
      vertical-align: top;
      font-size: 13pt;
    }
    .eval-box {
      border-collapse: collapse;
      width: 100%;
      margin-top: 10px;
      margin-bottom: 14px;
      page-break-inside: avoid;
      break-inside: avoid;
    }
    .eval-box td {
      border: 1px solid #000;
      padding: 6px 8px;
      font-size: 13pt;
    }
    .dotted-line {
      border-bottom: 1px dotted #666;
      height: 22px;
      margin-bottom: 3px;
    }
    .page-break {
      page-break-before: always;
      break-before: page;
    }
    .prevent-split {
      page-break-inside: avoid;
      break-inside: avoid;
    }
  </style>
</head>
<body>
` : `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset='utf-8'>
  <title>Đề kiểm tra ${subjectName} Lớp ${grade}</title>
  <!--[if gte mso 9]>
  <xml>
    <w:WordDocument>
      <w:View>Print</w:View>
      <w:Zoom>100</w:Zoom>
      <w:DoNotOptimizeForBrowser/>
    </w:WordDocument>
  </xml>
  <![endif]-->
  <style>
    @page {
      size: A4;
      margin: 20mm 15mm 20mm 30mm; /* Chuẩn Nghị định 30/2020/NĐ-CP: Top 20mm, Right 15mm, Bottom 20mm, Left 30mm */
      mso-header-margin: 36pt;
      mso-footer-margin: 36pt;
    }
    body {
      font-family: 'Times New Roman', serif;
      font-size: 13pt;
      line-height: 1.35;
      color: #000;
    }
    table {
      border-collapse: collapse;
      width: 100%;
    }
    .text-center { text-align: center; }
    .text-right { text-align: right; }
    .text-left { text-align: left; }
    .font-bold { font-weight: bold; }
    .uppercase { text-transform: uppercase; }
    
    .border-table td, .border-table th {
      border: 1px solid #000;
      padding: 6px 8px;
      font-size: 13pt;
    }
    .header-table td {
      border: none;
      padding: 2px 4px;
      vertical-align: top;
      font-size: 13pt;
    }
    .eval-box {
      border-collapse: collapse;
      width: 100%;
      margin-top: 10px;
      margin-bottom: 14px;
    }
    .eval-box td {
      border: 1px solid #000;
      padding: 6px 8px;
      font-size: 13pt;
    }
    .dotted-line {
      border-bottom: 1px dotted #666;
      height: 22px;
      margin-bottom: 3px;
    }
    .page-break {
      page-break-before: always;
      mso-break-type: section-break;
    }
  </style>
</head>
<body>
`;

  // ==================== A. TRƯỜNG HỢP MÔN TIẾNG ANH (CHUẨN 4 KỸ NĂNG GLOBAL SUCCESS) ====================
  if (isEnglish) {
    const parts = exam.parts || {};
    const lis = parts.listening || {};
    const read = parts.reading || {};
    const wri = parts.writing || {};
    const spk = parts.speaking || {};

    docHtml += `
    <!-- HEADER ĐỀ THI TIẾNG ANH CHUẨN GLOBAL SUCCESS -->
    <table class="header-table" style="width: 100%;">
      <tr>
        <td style="width: 55%; vertical-align: top;">
          <div style="font-size: 13pt; font-weight: bold; text-transform: uppercase;">${exam.schoolName || 'A AN TRUONG PRIMARY SCHOOL'}</div>
          <div style="margin-top: 8px; font-size: 13pt;">Full name: ..............................................................</div>
          <div style="margin-top: 4px; font-size: 13pt;">Class: <b>${grade}</b>...... &nbsp;&nbsp;&nbsp;&nbsp; School year: 2025-2026</div>
        </td>
        <td style="width: 45%; text-align: center; vertical-align: top;">
          <div style="font-weight: bold; font-size: 14pt; text-transform: uppercase;">${exam.title || ('THE FIRST TERM TEST FOR GRADE ' + grade)}</div>
          <div style="font-size: 12pt; font-style: italic; margin-top: 4px;">Time allowed: ${exam.durationMinutes || 40} minutes</div>
        </td>
      </tr>
    </table>

    <!-- BẢNG ĐIỂM 4 KỸ NĂNG CHUẨN -->
    <table style="width: 100%; border-collapse: collapse; margin-top: 14px; text-align: center; font-size: 12pt;">
      <tr style="background-color: #f1f5f9; font-weight: bold;">
        <td style="border: 1px solid #000; padding: 6px; width: 16%;">Skills</td>
        <td style="border: 1px solid #000; padding: 6px; width: 17%;">Listening</td>
        <td style="border: 1px solid #000; padding: 6px; width: 17%;">Reading</td>
        <td style="border: 1px solid #000; padding: 6px; width: 17%;">Writing</td>
        <td style="border: 1px solid #000; padding: 6px; width: 17%;">Speaking</td>
        <td style="border: 1px solid #000; padding: 6px; width: 16%;">Total</td>
      </tr>
      <tr>
        <td style="border: 1px solid #000; padding: 12px; font-weight: bold;">Marks</td>
        <td style="border: 1px solid #000; padding: 12px;"></td>
        <td style="border: 1px solid #000; padding: 12px;"></td>
        <td style="border: 1px solid #000; padding: 12px;"></td>
        <td style="border: 1px solid #000; padding: 12px;"></td>
        <td style="border: 1px solid #000; padding: 12px;"></td>
      </tr>
    </table>

    <table style="width: 100%; margin-top: 8px; font-size: 12pt;">
      <tr>
        <td style="width: 60%; vertical-align: top;">
          <b>Comments:</b> ..........................................................................................................<br/>
          .....................................................................................................................................
        </td>
        <td style="width: 40%; vertical-align: top;">
          <b>Supervisor signature:</b> ....................................................
        </td>
      </tr>
    </table>

    <div style="border-bottom: 2px solid #000; margin: 12px 0;"></div>

    <!-- I. LISTENING -->
    <div style="margin-top: 10px;">
      <div style="font-weight: bold; font-size: 13pt; text-transform: uppercase; background-color: #f8fafc; padding: 4px 8px; border-left: 4px solid #0284c7; margin-bottom: 8px;">
        ${lis.title || 'LISTENING (3.0 marks)'}
      </div>
      ${(lis.tasks || []).map((t, tIdx) => {
        const hasOptionsWithImages = (t.items || []).some(it => it.options && it.options.some(opt => opt.image || opt.imageKey));
        const isNumberTask = (t.taskTitle || '').toLowerCase().includes('number');
        const isTickCrossTask = (t.taskTitle || '').toLowerCase().includes('tick or cross');
        const hasDirectImages = (t.items || []).some(it => it.image || it.imageKey);

        // TASK: Listen and tick / circle (cặp ảnh a & b)
        if (hasOptionsWithImages) {
          return `
            <div style="margin-bottom: 12px; margin-left: 8px;">
              <div style="font-weight: bold; font-size: 12pt;">
                TASK ${t.taskNumber || (tIdx + 1)}. ${t.taskTitle} (${t.points || 1.0} mark)
              </div>
              <div style="font-style: italic; font-size: 11pt; color: #475569; margin-bottom: 6px;">
                ${t.taskDesc || ''}
              </div>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px;">
                ${(t.items || []).map((it, iIdx) => `
                  <tr>
                    <td style="width: 6%; font-weight: bold; font-size: 12pt; vertical-align: middle; text-align: center;">
                      ${iIdx + 1}.
                    </td>
                    ${(it.options || []).map(opt => {
                      const imgSrc = getWordImgSrc(opt);
                      return `
                        <td style="width: 47%; border: 1px solid #94a3b8; padding: 6px; text-align: center; vertical-align: top; background-color: #fafafa;">
                          <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                              <td style="text-align: left; vertical-align: middle;">
                                <span style="display: inline-block; width: 22px; height: 22px; border-radius: 50%; border: 1.5px solid #0284c7; background-color: #e0f2fe; color: #0369a1; font-weight: bold; text-align: center; line-height: 20px; font-size: 11pt;">${opt.id}</span>
                              </td>
                              <td style="text-align: right; vertical-align: middle;">
                                <span style="display: inline-block; width: 20px; height: 20px; border: 1.5px solid #000; background: #fff;"></span>
                              </td>
                            </tr>
                          </table>
                          ${imgSrc ? `<div style="text-align: center; margin: 4px 0;"><img src="${imgSrc}" style="max-height: 95px; max-width: 180px; height: auto;" /></div>` : ''}
                          <div style="font-weight: bold; font-size: 11pt; color: #1e293b;">${opt.text}</div>
                        </td>
                      `;
                    }).join('')}
                  </tr>
                  <tr><td colspan="3" style="height: 6px;"></td></tr>
                `).join('')}
              </table>
            </div>
          `;
        }

        // TASK: Listen and number (với 4 tranh đánh số 1-4)
        if (isNumberTask && hasDirectImages) {
          const items = t.items || [];
          const labels = ['a', 'b', 'c', 'd'];
          return `
            <div style="margin-bottom: 12px; margin-left: 8px;">
              <div style="font-weight: bold; font-size: 12pt;">
                TASK ${t.taskNumber || (tIdx + 1)}. ${t.taskTitle} (${t.points || 1.0} mark)
              </div>
              <div style="font-style: italic; font-size: 11pt; color: #475569; margin-bottom: 6px;">
                ${t.taskDesc || ''}
              </div>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px; text-align: center;">
                <tr>
                  ${items.map((it, idx) => {
                    const imgSrc = getWordImgSrc(it);
                    return `
                      <td style="width: 25%; border: 1px solid #94a3b8; padding: 6px; vertical-align: top; background-color: #fafafa;">
                        <div style="text-align: left; font-weight: bold; font-size: 11pt; color: #0284c7;">
                          Picture ${labels[idx] || (idx + 1)}
                        </div>
                        ${imgSrc ? `<div style="text-align: center; margin: 4px 0;"><img src="${imgSrc}" style="max-height: 90px; max-width: 130px; height: auto;" /></div>` : ''}
                        <div style="margin-top: 6px;">
                          <span style="display: inline-block; width: 26px; height: 26px; border: 1.5px solid #000; background: #fff; font-size: 12pt; line-height: 24px;"></span>
                        </div>
                      </td>
                    `;
                  }).join('')}
                </tr>
              </table>
            </div>
          `;
        }

        // TASK: Listen and tick or cross (với 4 tranh có ô tick/cross)
        if (isTickCrossTask && hasDirectImages) {
          const items = t.items || [];
          return `
            <div style="margin-bottom: 12px; margin-left: 8px;">
              <div style="font-weight: bold; font-size: 12pt;">
                TASK ${t.taskNumber || (tIdx + 1)}. ${t.taskTitle} (${t.points || 1.0} mark)
              </div>
              <div style="font-style: italic; font-size: 11pt; color: #475569; margin-bottom: 6px;">
                ${t.taskDesc || ''}
              </div>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px; text-align: center;">
                <tr>
                  ${items.map((it, idx) => {
                    const imgSrc = getWordImgSrc(it);
                    return `
                      <td style="width: 25%; border: 1px solid #94a3b8; padding: 6px; vertical-align: top; background-color: #fafafa;">
                        <div style="text-align: left; font-weight: bold; font-size: 11pt;">${idx + 1}.</div>
                        ${imgSrc ? `<div style="text-align: center; margin: 4px 0;"><img src="${imgSrc}" style="max-height: 85px; max-width: 130px; height: auto;" /></div>` : ''}
                        <div style="margin-top: 4px; font-size: 10pt; min-height: 28px;">${it.statement || it.topic || ''}</div>
                        <div style="margin-top: 6px;">
                          <span style="display: inline-block; width: 22px; height: 22px; border: 1.5px solid #000; background: #fff;"></span>
                        </div>
                      </td>
                    `;
                  }).join('')}
                </tr>
              </table>
            </div>
          `;
        }

        // TASK: Listen and circle (bảng 2 cột x 2 hàng)
        if (t.taskNumber === 2 || (t.taskTitle || '').toLowerCase().includes('circle')) {
          const items = t.items || [];
          return `
            <div style="margin-bottom: 12px; margin-left: 8px;">
              <div style="font-weight: bold; font-size: 12pt;">
                TASK ${t.taskNumber || (tIdx + 1)}. ${t.taskTitle} (${t.points || 1.0} mark)
              </div>
              <div style="font-style: italic; font-size: 11pt; color: #475569; margin-bottom: 6px;">
                ${t.taskDesc || ''}
              </div>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px;">
                <tr>
                  <td style="width: 50%; border: 1px solid #000; padding: 8px; vertical-align: top; font-size: 11pt;">
                    <b>1.</b> ${items[0]?.questionText || items[0]?.question || ''}<br/>
                    <div style="margin-top: 4px;">
                      ${(items[0]?.options || []).map(opt => `<span style="margin-right: 20px;"><b>${opt.id}.</b> ${opt.text}</span>`).join('')}
                    </div>
                  </td>
                  <td style="width: 50%; border: 1px solid #000; padding: 8px; vertical-align: top; font-size: 11pt;">
                    <b>2.</b> ${items[1]?.questionText || items[1]?.question || ''}<br/>
                    <div style="margin-top: 4px;">
                      ${(items[1]?.options || []).map(opt => `<span style="margin-right: 20px;"><b>${opt.id}.</b> ${opt.text}</span>`).join('')}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="width: 50%; border: 1px solid #000; padding: 8px; vertical-align: top; font-size: 11pt;">
                    <b>3.</b> ${items[2]?.questionText || items[2]?.question || ''}<br/>
                    <div style="margin-top: 4px;">
                      ${(items[2]?.options || []).map(opt => `<span style="margin-right: 20px;"><b>${opt.id}.</b> ${opt.text}</span>`).join('')}
                    </div>
                  </td>
                  <td style="width: 50%; border: 1px solid #000; padding: 8px; vertical-align: top; font-size: 11pt;">
                    <b>4.</b> ${items[3]?.questionText || items[3]?.question || ''}<br/>
                    <div style="margin-top: 4px;">
                      ${(items[3]?.options || []).map(opt => `<span style="margin-right: 20px;"><b>${opt.id}.</b> ${opt.text}</span>`).join('')}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          `;
        }

        // TASK: Listen and tick True or False
        return `
          <div style="margin-bottom: 12px; margin-left: 8px;">
            <div style="font-weight: bold; font-size: 12pt;">
              TASK ${t.taskNumber || (tIdx + 1)}. ${t.taskTitle} (${t.points || 1.0} mark)
            </div>
            <div style="font-style: italic; font-size: 11pt; color: #475569; margin-bottom: 6px;">
              ${t.taskDesc || ''}
            </div>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px; font-size: 11pt;">
              <tr style="background-color: #f1f5f9; font-weight: bold; text-align: center;">
                <td style="border: 1px solid #000; padding: 4px; width: 8%;">No.</td>
                <td style="border: 1px solid #000; padding: 4px; width: 72%; text-align: left;">Statements</td>
                <td style="border: 1px solid #000; padding: 4px; width: 10%;">True (T)</td>
                <td style="border: 1px solid #000; padding: 4px; width: 10%;">False (F)</td>
              </tr>
              ${(t.items || []).map((it, iIdx) => `
                <tr>
                  <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold;">${iIdx + 1}</td>
                  <td style="border: 1px solid #000; padding: 4px 6px;">${it.statement || it.questionText || it.sentence || ''}</td>
                  <td style="border: 1px solid #000; padding: 4px; text-align: center;"><span style="display: inline-block; width: 16px; height: 16px; border: 1px solid #000;"></span></td>
                  <td style="border: 1px solid #000; padding: 4px; text-align: center;"><span style="display: inline-block; width: 16px; height: 16px; border: 1px solid #000;"></span></td>
                </tr>
              `).join('')}
            </table>
          </div>
        `;
      }).join('')}
    </div>

    <!-- II. READING -->
    <div style="margin-top: 14px;">
      <div style="font-weight: bold; font-size: 13pt; text-transform: uppercase; background-color: #f8fafc; padding: 4px 8px; border-left: 4px solid #16a34a; margin-bottom: 8px;">
        ${read.title || 'READING (2.5 marks)'}
      </div>
      ${(read.tasks || []).map((t, tIdx) => {
        const hasTaskImages = (t.items || []).some(it => it.image || it.imageKey);

        if (hasTaskImages) {
          // TASK: Look and tick ☑ or cross 🗵 (5 tranh SGK)
          const items = t.items || [];
          return `
            <div style="margin-bottom: 14px; margin-left: 8px;">
              <div style="font-weight: bold; font-size: 12pt;">
                TASK ${t.taskNumber || (tIdx + 1)}. ${t.taskTitle} (${t.points || 1.25} marks)
              </div>
              <div style="font-style: italic; font-size: 11pt; color: #475569; margin-bottom: 6px;">
                ${t.taskDesc || ''}
              </div>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 6px; text-align: center;">
                <tr>
                  ${items.slice(0, 3).map((it, idx) => {
                    const imgSrc = getWordImgSrc(it);
                    return `
                      <td style="width: 33.33%; border: 1px solid #000; padding: 6px; vertical-align: top;">
                        <div style="text-align: left; font-weight: bold; font-size: 11pt;">${idx + 1}</div>
                        ${imgSrc ? `<div style="text-align: center; margin: 2px 0;"><img src="${imgSrc}" style="max-height: 90px; max-width: 150px; height: auto;" /></div>` : ''}
                        <div style="margin-top: 4px; font-size: 11pt; font-weight: bold;">
                          ${it.caption || it.statement} &nbsp;
                          <span style="display: inline-block; width: 18px; height: 18px; border: 1.5px solid #000; vertical-align: middle;"></span>
                        </div>
                      </td>
                    `;
                  }).join('')}
                </tr>
              </table>
              ${items.length > 3 ? `
                <table style="width: 66.66%; margin: 0 auto 10px auto; border-collapse: collapse; text-align: center;">
                  <tr>
                    ${items.slice(3, 5).map((it, idx) => {
                      const imgSrc = getWordImgSrc(it);
                      return `
                        <td style="width: 50%; border: 1px solid #000; padding: 6px; vertical-align: top;">
                          <div style="text-align: left; font-weight: bold; font-size: 11pt;">${idx + 4}</div>
                          ${imgSrc ? `<div style="text-align: center; margin: 2px 0;"><img src="${imgSrc}" style="max-height: 90px; max-width: 150px; height: auto;" /></div>` : ''}
                          <div style="margin-top: 4px; font-size: 11pt; font-weight: bold;">
                            ${it.caption || it.statement} &nbsp;
                            <span style="display: inline-block; width: 18px; height: 18px; border: 1.5px solid #000; vertical-align: middle;"></span>
                          </div>
                        </td>
                      `;
                    }).join('')}
                  </tr>
                </table>
              ` : ''}
            </div>
          `;
        }

        // TASK: Read and complete (có Word Bank)
        if (t.wordBank) {
          return `
            <div style="margin-bottom: 14px; margin-left: 8px;">
              <div style="font-weight: bold; font-size: 12pt;">
                TASK ${t.taskNumber || (tIdx + 1)}. ${t.taskTitle} (${t.points || 1.25} marks)
              </div>
              <div style="font-style: italic; font-size: 11pt; color: #475569; margin-bottom: 6px;">
                ${t.taskDesc || ''}
              </div>
              <div style="border: 1px dashed #059669; background-color: #f0fdf4; padding: 6px 12px; text-align: center; font-weight: bold; font-size: 12pt; margin: 6px 0 10px 0; border-radius: 4px; color: #065f46;">
                ${t.wordBank.join(' &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; ')}
              </div>
              ${t.passage ? `
                <div style="background-color: #fffbeb; border: 1px solid #fde68a; padding: 10px; font-size: 12pt; line-height: 1.7; font-style: italic; text-align: justify; margin-bottom: 10px;">
                  ${t.passage}
                </div>
              ` : ''}
            </div>
          `;
        }

        // TASK: Read and circle (đoạn văn kèm câu hỏi trắc nghiệm a, b, c)
        if (t.passage && t.items) {
          return `
            <div style="margin-bottom: 14px; margin-left: 8px;">
              <div style="font-weight: bold; font-size: 12pt;">
                TASK ${t.taskNumber || (tIdx + 1)}. ${t.taskTitle} (${t.points || 1.25} marks)
              </div>
              <div style="font-style: italic; font-size: 11pt; color: #475569; margin-bottom: 6px;">
                ${t.taskDesc || ''}
              </div>
              <div style="background-color: #fffbeb; border: 1px solid #fde68a; padding: 10px; font-size: 12pt; line-height: 1.7; font-style: italic; text-align: justify; margin-bottom: 10px;">
                ${t.passage}
              </div>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px; font-size: 11pt;">
                ${(t.items || []).map((it, idx) => `
                  <tr>
                    <td style="padding: 4px 0; vertical-align: top;">
                      <b>${idx + 1}.</b> &nbsp;
                      ${(it.options || []).map(opt => `<span style="margin-right: 25px;"><b>${opt.id}.</b> ${opt.text}</span>`).join('')}
                    </td>
                  </tr>
                `).join('')}
              </table>
            </div>
          `;
        }

        // Read and circle dạng danh sách câu đơn
        return `
          <div style="margin-bottom: 14px; margin-left: 8px;">
            <div style="font-weight: bold; font-size: 12pt;">
              TASK ${t.taskNumber || (tIdx + 1)}. ${t.taskTitle} (${t.points || 1.25} marks)
            </div>
            <div style="font-style: italic; font-size: 11pt; color: #475569; margin-bottom: 6px;">
              ${t.taskDesc || ''}
            </div>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px; font-size: 11pt;">
              ${(t.items || []).map((it, idx) => `
                <tr>
                  <td style="padding: 4px 0; vertical-align: top;">
                    <b>${idx + 1}.</b> ${it.sentence || it.questionText || ''}<br/>
                    <div style="margin-top: 2px;">
                      ${(it.options || []).map(opt => `<span style="margin-right: 25px;"><b>${opt.id}.</b> ${opt.text}</span>`).join('')}
                    </div>
                  </td>
                </tr>
              `).join('')}
            </table>
          </div>
        `;
      }).join('')}
    </div>

    <!-- III. WRITING -->
    <div style="margin-top: 14px;">
      <div style="font-weight: bold; font-size: 13pt; text-transform: uppercase; background-color: #f8fafc; padding: 4px 8px; border-left: 4px solid #9333ea; margin-bottom: 8px;">
        ${wri.title || 'WRITING (2.5 marks)'}
      </div>
      ${(wri.tasks || []).map((t, tIdx) => {
        const hasTaskImages = (t.items || []).some(it => it.image || it.imageKey);

        // TASK: Look and write có đoạn văn và tranh minh họa (như Khối 4)
        if (t.passage && hasTaskImages) {
          const items = t.items || [];
          return `
            <div style="margin-bottom: 14px; margin-left: 8px;">
              <div style="font-weight: bold; font-size: 12pt;">
                TASK ${t.taskNumber || (tIdx + 1)}. ${t.taskTitle} (${t.points || 1.25} marks)
              </div>
              <div style="font-style: italic; font-size: 11pt; color: #475569; margin-bottom: 6px;">
                ${t.taskDesc || ''}
              </div>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 8px; text-align: center;">
                <tr>
                  ${items.map((it, idx) => {
                    const imgSrc = getWordImgSrc(it);
                    return `
                      <td style="width: 20%; border: 1px solid #000; padding: 4px; vertical-align: top; background-color: #fafafa;">
                        <div style="text-align: left; font-weight: bold; font-size: 10.5pt; color: #7e22ce;">(${idx + 1})</div>
                        ${imgSrc ? `<div style="text-align: center; margin: 2px 0;"><img src="${imgSrc}" style="max-height: 75px; max-width: 110px; height: auto;" /></div>` : ''}
                      </td>
                    `;
                  }).join('')}
                </tr>
              </table>
              <div style="background-color: #fdf4ff; border: 1px solid #f0abfc; padding: 10px; font-size: 12pt; line-height: 1.8; font-style: italic; text-align: justify; margin-bottom: 10px;">
                ${t.passage}
              </div>
            </div>
          `;
        }

        // TASK: Look and write 4 tranh kèm chữ xáo trộn (Khối 3, 5)
        if (hasTaskImages) {
          const items = t.items || [];
          const circleNums = ['(1)', '(2)', '(3)', '(4)', '(5)'];
          return `
            <div style="margin-bottom: 14px; margin-left: 8px;">
              <div style="font-weight: bold; font-size: 12pt;">
                TASK ${t.taskNumber || (tIdx + 1)}. ${t.taskTitle} (${t.points || 1.0} mark)
              </div>
              <div style="font-style: italic; font-size: 11pt; color: #475569; margin-bottom: 6px;">
                ${t.taskDesc || ''}
              </div>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px; text-align: center;">
                <tr>
                  ${items.map((it, idx) => {
                    const imgSrc = getWordImgSrc(it);
                    return `
                      <td style="width: 25%; border: 1px solid #000; padding: 6px; vertical-align: top; background-color: #fafafa;">
                        <div style="text-align: left; font-weight: bold; font-size: 11pt; color: #7e22ce;">${circleNums[idx]}</div>
                        ${imgSrc ? `<div style="text-align: center; margin: 2px 0;"><img src="${imgSrc}" style="max-height: 85px; max-width: 125px; height: auto;" /></div>` : ''}
                        <div style="margin-top: 4px; font-family: monospace; font-weight: bold; font-size: 11.5pt; color: #581c87;">${it.clue || it.questionText || ''}</div>
                        <div style="margin-top: 8px; border-bottom: 1px dotted #000; height: 16px;"></div>
                        <div style="margin-top: 4px; border-bottom: 1px dotted #000; height: 16px;"></div>
                      </td>
                    `;
                  }).join('')}
                </tr>
              </table>
            </div>
          `;
        }

        // TASK: Make sentences / Reorder words (2 cột)
        const items = t.items || [];
        const half = Math.ceil(items.length / 2);
        return `
          <div style="margin-bottom: 14px; margin-left: 8px;">
            <div style="font-weight: bold; font-size: 12pt;">
              TASK ${t.taskNumber || (tIdx + 1)}. ${t.taskTitle} (${t.points || 1.5} marks)
            </div>
            <div style="font-style: italic; font-size: 11pt; color: #475569; margin-bottom: 6px;">
              ${t.taskDesc || ''}
            </div>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px;">
              <tr>
                <td style="width: 50%; border: 1px solid #000; padding: 8px; vertical-align: top;">
                  ${items.slice(0, half).map((it, idx) => `
                    <div style="margin-bottom: 12px; font-size: 11pt;">
                      <b>${idx + 1}.</b> ${it.jumbled || it.questionText}<br/>
                      <div style="border-bottom: 1px dotted #666; height: 20px; margin-top: 3px;"></div>
                      <div style="border-bottom: 1px dotted #666; height: 20px; margin-top: 3px;"></div>
                    </div>
                  `).join('')}
                </td>
                <td style="width: 50%; border: 1px solid #000; padding: 8px; vertical-align: top;">
                  ${items.slice(half).map((it, idx) => `
                    <div style="margin-bottom: 12px; font-size: 11pt;">
                      <b>${idx + half + 1}.</b> ${it.jumbled || it.questionText}<br/>
                      <div style="border-bottom: 1px dotted #666; height: 20px; margin-top: 3px;"></div>
                      <div style="border-bottom: 1px dotted #666; height: 20px; margin-top: 3px;"></div>
                    </div>
                  `).join('')}
                </td>
              </tr>
            </table>
          </div>
        `;
      }).join('')}
    </div>

    <!-- IV. SPEAKING -->
    <div style="margin-top: 14px;">
      <div style="font-weight: bold; font-size: 13pt; text-transform: uppercase; background-color: #f8fafc; padding: 4px 8px; border-left: 4px solid #ea580c; margin-bottom: 8px;">
        ${spk.title || 'SPEAKING (2.0 marks)'}
      </div>
      ${spk.data?.part1 ? `
        <div style="margin-bottom: 10px; margin-left: 8px;">
          <div style="font-weight: bold; font-size: 12pt;">${spk.data.part1.title} (${spk.data.part1.points} mark)</div>
          <div style="font-style: italic; font-size: 11pt; color: #475569; margin-bottom: 4px;">${spk.data.part1.desc}</div>
          <ul style="margin-left: 20px; font-size: 11.5pt; margin-top: 2px;">
            ${(spk.data.part1.questions || []).map(q => `<li>${q}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      ${spk.data?.part2 ? `
        <div style="margin-bottom: 10px; margin-left: 8px;">
          <div style="font-weight: bold; font-size: 12pt;">${spk.data.part2.title} (${spk.data.part2.points} mark)</div>
          <div style="font-style: italic; font-size: 11pt; color: #475569; margin-bottom: 6px;">${spk.data.part2.desc}</div>
          ${spk.data.part2.items && spk.data.part2.items.length > 0 ? `
            ${spk.data.part2.items.length <= 4 ? `
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px; text-align: center;">
                <tr>
                  ${(spk.data.part2.items || []).map((it) => {
                    const imgSrc = getWordImgSrc(it);
                    const widthPct = Math.round(100 / spk.data.part2.items.length);
                    return `
                      <td style="width: ${widthPct}%; border: 1px solid #000; padding: 6px; vertical-align: top; background-color: #fafafa;">
                        ${imgSrc ? `<div style="text-align: center; margin: 2px 0;"><img src="${imgSrc}" style="max-height: 85px; max-width: 130px; height: auto;" /></div>` : ''}
                        <div style="margin-top: 4px; font-size: 10pt; font-weight: bold; text-align: left; color: #1e293b;">${it.question}</div>
                      </td>
                    `;
                  }).join('')}
                </tr>
              </table>
            ` : `
              <!-- Dạng lưới 2 hàng cho Khối 4 (6 tranh) -->
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 6px; text-align: center;">
                <tr>
                  ${spk.data.part2.items.slice(0, 3).map((it) => {
                    const imgSrc = getWordImgSrc(it);
                    return `
                      <td style="width: 33.33%; border: 1px solid #000; padding: 6px; vertical-align: top; background-color: #fafafa;">
                        ${imgSrc ? `<div style="text-align: center; margin: 2px 0;"><img src="${imgSrc}" style="max-height: 85px; max-width: 130px; height: auto;" /></div>` : ''}
                        <div style="margin-top: 4px; font-size: 10pt; font-weight: bold; text-align: left; color: #1e293b;">${it.question}</div>
                      </td>
                    `;
                  }).join('')}
                </tr>
              </table>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px; text-align: center;">
                <tr>
                  ${spk.data.part2.items.slice(3, 6).map((it) => {
                    const imgSrc = getWordImgSrc(it);
                    return `
                      <td style="width: 33.33%; border: 1px solid #000; padding: 6px; vertical-align: top; background-color: #fafafa;">
                        ${imgSrc ? `<div style="text-align: center; margin: 2px 0;"><img src="${imgSrc}" style="max-height: 85px; max-width: 130px; height: auto;" /></div>` : ''}
                        <div style="margin-top: 4px; font-size: 10pt; font-weight: bold; text-align: left; color: #1e293b;">${it.question}</div>
                      </td>
                    `;
                  }).join('')}
                </tr>
              </table>
            `}
          ` : `
            <ul style="margin-left: 20px; font-size: 11.5pt; margin-top: 2px;">
              ${(spk.data.part2.questions || []).map(q => `<li>${q}</li>`).join('')}
            </ul>
          `}
        </div>
      ` : ''}
    </div>

    <!-- PHIẾU BÀI KIỂM TRA ĐỌC & VIẾT CHO HỌC SINH (READING & WRITING - DÀNH CHO IN LÀM TRÊN LỚP) -->
    <div class="page-break"></div>

    <table class="header-table" style="width: 100%;">
      <tr>
        <td style="width: 55%; vertical-align: top;">
          <div style="font-size: 13pt; font-weight: bold; text-transform: uppercase;">${exam.schoolName || 'A AN TRUONG PRIMARY SCHOOL'}</div>
          <div style="margin-top: 8px; font-size: 13pt;">Full name: ..............................................................</div>
          <div style="margin-top: 4px; font-size: 13pt;">Class: <b>${grade}</b>...... &nbsp;&nbsp;&nbsp;&nbsp; School year: 2025-2026</div>
        </td>
        <td style="width: 45%; text-align: center; vertical-align: top;">
          <div style="font-weight: bold; font-size: 13pt; text-transform: uppercase;">THE FIRST TERM TEST FOR GRADE ${grade}</div>
          <div style="font-weight: bold; font-size: 11pt; color: #16a34a; text-transform: uppercase; margin-top: 2px;">READING & WRITING TEST</div>
          <div style="font-size: 11pt; font-style: italic; margin-top: 4px;">Time allowed: 30 minutes</div>
        </td>
      </tr>
    </table>

    <!-- BẢNG ĐIỂM RÚT GỌN (5.0 ĐIỂM) -->
    <table style="width: 100%; border-collapse: collapse; margin-top: 10px; text-align: center; font-size: 12pt;">
      <tr style="background-color: #f1f5f9; font-weight: bold;">
        <td style="border: 1px solid #000; padding: 6px; width: 25%;">Reading (2.5 ms)</td>
        <td style="border: 1px solid #000; padding: 6px; width: 25%;">Writing (2.5 ms)</td>
        <td style="border: 1px solid #000; padding: 6px; width: 20%;">Total (5.0 ms)</td>
        <td style="border: 1px solid #000; padding: 6px; width: 30%;">Teacher's Comments</td>
      </tr>
      <tr>
        <td style="border: 1px solid #000; padding: 12px;"></td>
        <td style="border: 1px solid #000; padding: 12px;"></td>
        <td style="border: 1px solid #000; padding: 12px;"></td>
        <td style="border: 1px solid #000; padding: 12px; font-size: 10pt; text-align: left; vertical-align: top;">
          ..................................................
        </td>
      </tr>
    </table>

    <div style="border-bottom: 2px solid #000; margin: 10px 0;"></div>

    <!-- PHẦN ĐỌC TRÊN PHIẾU HỌC SINH -->
    <div style="font-weight: bold; font-size: 12.5pt; text-transform: uppercase; margin-bottom: 6px; color: #16a34a;">
      READING (2.5 MARKS)
    </div>
    ${(read.tasks || []).map((t, tIdx) => {
      const hasTaskImages = (t.items || []).some(it => it.image || it.imageKey);
      if (hasTaskImages) {
        const items = t.items || [];
        return `
          <div style="margin-bottom: 10px;">
            <div style="font-weight: bold; font-size: 11.5pt;">
              TASK ${t.taskNumber || (tIdx + 1)}. ${t.taskTitle} (${t.points || 1.25} marks)
            </div>
            <table style="width: 100%; border-collapse: collapse; margin: 6px 0; text-align: center;">
              <tr>
                ${items.slice(0, 3).map((it, idx) => {
                  const imgSrc = getWordImgSrc(it);
                  return `
                    <td style="width: 33.33%; border: 1px solid #000; padding: 5px; vertical-align: top;">
                      <div style="text-align: left; font-weight: bold; font-size: 10.5pt;">${idx + 1}</div>
                      ${imgSrc ? `<div style="text-align: center; margin: 2px 0;"><img src="${imgSrc}" style="max-height: 85px; max-width: 140px; height: auto;" /></div>` : ''}
                      <div style="margin-top: 4px; font-size: 10.5pt; font-weight: bold;">
                        ${it.caption || it.statement} &nbsp;
                        <span style="display: inline-block; width: 18px; height: 18px; border: 1.5px solid #000; vertical-align: middle;"></span>
                      </div>
                    </td>
                  `;
                }).join('')}
              </tr>
            </table>
            ${items.length > 3 ? `
              <table style="width: 66.66%; margin: 0 auto 8px auto; border-collapse: collapse; text-align: center;">
                <tr>
                  ${items.slice(3, 5).map((it, idx) => {
                    const imgSrc = getWordImgSrc(it);
                    return `
                      <td style="width: 50%; border: 1px solid #000; padding: 5px; vertical-align: top;">
                        <div style="text-align: left; font-weight: bold; font-size: 10.5pt;">${idx + 4}</div>
                        ${imgSrc ? `<div style="text-align: center; margin: 2px 0;"><img src="${imgSrc}" style="max-height: 85px; max-width: 140px; height: auto;" /></div>` : ''}
                        <div style="margin-top: 4px; font-size: 10.5pt; font-weight: bold;">
                          ${it.caption || it.statement} &nbsp;
                          <span style="display: inline-block; width: 18px; height: 18px; border: 1.5px solid #000; vertical-align: middle;"></span>
                        </div>
                      </td>
                    `;
                  }).join('')}
                </tr>
              </table>
            ` : ''}
          </div>
        `;
      }

      if (t.passage && t.items) {
        return `
          <div style="margin-bottom: 12px;">
            <div style="font-weight: bold; font-size: 11.5pt;">
              TASK ${t.taskNumber || (tIdx + 1)}. ${t.taskTitle} (${t.points || 1.25} marks)
            </div>
            <div style="background-color: #fffbeb; border: 1px solid #fde68a; padding: 8px; font-size: 11.5pt; line-height: 1.6; font-style: italic; text-align: justify; margin-bottom: 8px;">
              ${t.passage}
            </div>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 8px; font-size: 10.5pt;">
              ${(t.items || []).map((it, idx) => `
                <tr>
                  <td style="padding: 3px 0;">
                    <b>${idx + 1}.</b> &nbsp;
                    ${(it.options || []).map(opt => `<span style="margin-right: 20px;"><b>${opt.id}.</b> ${opt.text}</span>`).join('')}
                  </td>
                </tr>
              `).join('')}
            </table>
          </div>
        `;
      }

      return `
        <div style="margin-bottom: 12px;">
          <div style="font-weight: bold; font-size: 11.5pt;">
            TASK ${t.taskNumber || (tIdx + 1)}. ${t.taskTitle} (${t.points || 1.25} marks)
          </div>
          ${t.wordBank ? `
            <div style="border: 1px dashed #059669; background-color: #f0fdf4; padding: 5px 10px; text-align: center; font-weight: bold; font-size: 11.5pt; margin: 4px 0 8px 0; border-radius: 4px; color: #065f46;">
              ${t.wordBank.join(' &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; ')}
            </div>
          ` : ''}
          ${t.passage ? `
            <div style="background-color: #fffbeb; border: 1px solid #fde68a; padding: 8px; font-size: 11.5pt; line-height: 1.6; font-style: italic; text-align: justify; margin-bottom: 8px;">
              ${t.passage}
            </div>
          ` : ''}
        </div>
      `;
    }).join('')}

    <!-- PHẦN VIẾT TRÊN PHIẾU HỌC SINH -->
    <div style="font-weight: bold; font-size: 12.5pt; text-transform: uppercase; margin-top: 10px; margin-bottom: 6px; color: #9333ea;">
      WRITING (2.5 MARKS)
    </div>
    ${(wri.tasks || []).map((t, tIdx) => {
      const hasTaskImages = (t.items || []).some(it => it.image || it.imageKey);

      if (t.passage && hasTaskImages) {
        const items = t.items || [];
        return `
          <div style="margin-bottom: 10px;">
            <div style="font-weight: bold; font-size: 11.5pt;">
              TASK ${t.taskNumber || (tIdx + 1)}. ${t.taskTitle} (${t.points || 1.25} marks)
            </div>
            <table style="width: 100%; border-collapse: collapse; margin: 6px 0; text-align: center;">
              <tr>
                ${items.map((it, idx) => {
                  const imgSrc = getWordImgSrc(it);
                  return `
                    <td style="width: 20%; border: 1px solid #000; padding: 4px; vertical-align: top; background-color: #fafafa;">
                      <div style="text-align: left; font-weight: bold; font-size: 10pt; color: #7e22ce;">(${idx + 1})</div>
                      ${imgSrc ? `<div style="text-align: center; margin: 2px 0;"><img src="${imgSrc}" style="max-height: 70px; max-width: 100px; height: auto;" /></div>` : ''}
                    </td>
                  `;
                }).join('')}
              </tr>
            </table>
            <div style="background-color: #fdf4ff; border: 1px solid #f0abfc; padding: 8px; font-size: 11.5pt; line-height: 1.8; font-style: italic; text-align: justify; margin-bottom: 8px;">
              ${t.passage}
            </div>
          </div>
        `;
      }

      if (hasTaskImages) {
        const items = t.items || [];
        const circleNums = ['(1)', '(2)', '(3)', '(4)', '(5)'];
        return `
          <div style="margin-bottom: 10px;">
            <div style="font-weight: bold; font-size: 11.5pt;">
              TASK ${t.taskNumber || (tIdx + 1)}. ${t.taskTitle} (${t.points || 1.0} mark)
            </div>
            <table style="width: 100%; border-collapse: collapse; margin: 6px 0; text-align: center;">
              <tr>
                ${items.map((it, idx) => {
                  const imgSrc = getWordImgSrc(it);
                  return `
                    <td style="width: 25%; border: 1px solid #000; padding: 5px; vertical-align: top; background-color: #fafafa;">
                      <div style="text-align: left; font-weight: bold; font-size: 10.5pt; color: #7e22ce;">${circleNums[idx]}</div>
                      ${imgSrc ? `<div style="text-align: center; margin: 2px 0;"><img src="${imgSrc}" style="max-height: 80px; max-width: 120px; height: auto;" /></div>` : ''}
                      <div style="margin-top: 4px; font-family: monospace; font-weight: bold; font-size: 11pt; color: #581c87;">${it.clue || it.questionText || ''}</div>
                      <div style="margin-top: 6px; border-bottom: 1px dotted #000; height: 16px;"></div>
                      <div style="margin-top: 4px; border-bottom: 1px dotted #000; height: 16px;"></div>
                    </td>
                  `;
                }).join('')}
              </tr>
            </table>
          </div>
        `;
      }

      const items = t.items || [];
      const half = Math.ceil(items.length / 2);
      return `
        <div style="margin-bottom: 10px;">
          <div style="font-weight: bold; font-size: 11.5pt;">
            TASK ${t.taskNumber || (tIdx + 1)}. ${t.taskTitle} (${t.points || 1.5} marks)
          </div>
          <table style="width: 100%; border-collapse: collapse; margin-top: 6px;">
            <tr>
              <td style="width: 50%; border: 1px solid #000; padding: 6px 8px; vertical-align: top;">
                ${items.slice(0, half).map((it, idx) => `
                  <div style="margin-bottom: 10px; font-size: 10.5pt;">
                    <b>${idx + 1}.</b> ${it.jumbled || it.questionText}<br/>
                    <div style="border-bottom: 1px dotted #666; height: 18px; margin-top: 2px;"></div>
                    <div style="border-bottom: 1px dotted #666; height: 18px; margin-top: 2px;"></div>
                  </div>
                `).join('')}
              </td>
              <td style="width: 50%; border: 1px solid #000; padding: 6px 8px; vertical-align: top;">
                ${items.slice(half).map((it, idx) => `
                  <div style="margin-bottom: 10px; font-size: 10.5pt;">
                    <b>${idx + half + 1}.</b> ${it.jumbled || it.questionText}<br/>
                    <div style="border-bottom: 1px dotted #666; height: 18px; margin-top: 2px;"></div>
                    <div style="border-bottom: 1px dotted #666; height: 18px; margin-top: 2px;"></div>
                  </div>
                `).join('')}
              </td>
            </tr>
          </table>
        </div>
      `;
    }).join('')}

    <!-- TRANG 2: ĐÁP ÁN & AUDIO TRANSCRIPTS -->
    <div class="page-break"></div>

    <div style="text-align: center; margin-bottom: 16px;">
      <div style="font-size: 13pt; font-weight: bold; text-transform: uppercase;">${exam.schoolName || 'A AN TRUONG PRIMARY SCHOOL'}</div>
      <div style="font-size: 14pt; font-weight: bold; margin-top: 4px;">${exam.teacherGuide?.title || 'ANSWER KEYS & AUDIO TRANSCRIPTS'}</div>
      <div style="font-style: italic; font-size: 12pt;">School year: 2025 - 2026 - Grade: ${grade}</div>
    </div>

    <!-- AUDIO TRANSCRIPT CHO GIÁO VIÊN -->
    <div style="margin-bottom: 16px; border: 1px solid #0284c7; background-color: #f0f9ff; padding: 12px; border-radius: 6px;">
      <div style="font-weight: bold; font-size: 13pt; color: #0369a1; border-bottom: 1px solid #bae6fd; padding-bottom: 4px; margin-bottom: 8px;">
        🎙️ TRANSCRIPTS FOR LISTENING TASKS (Kịch bản bài nghe cho giáo viên)
      </div>
      ${(exam.teacherGuide?.audioTranscripts || []).map(t => `
        <div style="margin-bottom: 8px; font-size: 11.5pt;">
          <b>TASK ${t.taskNumber}: ${t.taskTitle}</b>
          <div style="margin-left: 12px; font-style: italic; color: #1e293b; margin-top: 2px;">
            ${(t.transcriptLines || []).map(line => `<div>${line}</div>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>

    <!-- BẢNG ĐÁP ÁN CHI TIẾT -->
    <div style="margin-bottom: 16px;">
      <div style="font-weight: bold; font-size: 13pt; margin-bottom: 8px;">
        📝 ANSWER KEYS (Mỗi câu trả lời đúng được 0,25 điểm)
      </div>
      <table style="width: 100%; border-collapse: collapse; font-size: 11pt;">
        <tr style="background-color: #f1f5f9; font-weight: bold;">
          <td style="border: 1px solid #000; padding: 6px; width: 10%; text-align: center;">Câu</td>
          <td style="border: 1px solid #000; padding: 6px; width: 25%;">Kỹ năng / Dạng bài</td>
          <td style="border: 1px solid #000; padding: 6px; width: 45%;">Đáp án chuẩn</td>
          <td style="border: 1px solid #000; padding: 6px; width: 10%; text-align: center;">Điểm</td>
          <td style="border: 1px solid #000; padding: 6px; width: 10%; text-align: center;">Mức độ</td>
        </tr>
        ${questions.map((q, idx) => `
          <tr>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">${idx + 1}</td>
            <td style="border: 1px solid #000; padding: 4px;">${q.skill} (${q.taskTitle || ''})</td>
            <td style="border: 1px solid #000; padding: 4px; font-weight: bold; color: #047857;">${q.correctAnswer}</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">${q.points}</td>
            <td style="border: 1px solid #000; padding: 4px; text-align: center;">${q.level}</td>
          </tr>
        `).join('')}
      </table>
    </div>

    <!-- SPEAKING RUBRIC -->
    ${exam.teacherGuide?.speakingRubric && exam.teacherGuide.speakingRubric.length > 0 ? `
      <div style="margin-top: 14px; border: 1px solid #ea580c; background-color: #fff7ed; padding: 10px; border-radius: 6px;">
        <div style="font-weight: bold; font-size: 12pt; color: #c2410c; margin-bottom: 6px;">
          🗣️ SPEAKING ASSESSMENT RUBRIC (Tiêu chí chấm thi nói)
        </div>
        <table style="width: 100%; border-collapse: collapse; font-size: 11pt;">
          <tr style="background-color: #ffedd5; font-weight: bold;">
            <td style="border: 1px solid #fdba74; padding: 4px; width: 30%;">Tiêu chí</td>
            <td style="border: 1px solid #fdba74; padding: 4px; width: 15%; text-align: center;">Điểm tối đa</td>
            <td style="border: 1px solid #fdba74; padding: 4px; width: 55%;">Mô tả mức đạt</td>
          </tr>
          ${exam.teacherGuide.speakingRubric.map(r => `
            <tr>
              <td style="border: 1px solid #fdba74; padding: 4px; font-weight: bold;">${r.criteria}</td>
              <td style="border: 1px solid #fdba74; padding: 4px; text-align: center;">${r.points} đ</td>
              <td style="border: 1px solid #fdba74; padding: 4px;">${r.desc}</td>
            </tr>
          `).join('')}
        </table>
      </div>
    ` : ''}
    `;

    docHtml += `
    </body>
    </html>
    `;

    if (forPdf) {
      return docHtml;
    }

    return imgCollector.hasImages()
      ? imgCollector.buildMhtml(docHtml)
      : docHtml;
  }

  // ==================== B. TRƯỜNG HỢP MÔN TIẾNG VIỆT (CHUẨN 2 PHIẾU ĐỌC & VIẾT) ====================
  if (isTiengViet) {
    const oralScore = exam.readingExam?.oralScore || exam.tiengVietConfig?.oralScore || 4.0;
    const compScore = exam.readingExam?.comprehensionScore || (10.0 - oralScore);
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
    const tvQuestions = exam.readingExam?.questions || questions;

    docHtml += `
  <!-- ==================== PHẦN 1: PHIẾU KIỂM TRA ĐỌC ==================== -->
  <table class="header-table" style="width: 100%;">
    <tr>
      <td style="width: 48%;">
        <div style="font-size: 13pt;">${governingBody}</div>
        <div class="font-bold" style="font-size: 13pt;">${schoolName}</div>
        <div style="font-size: 10pt;">—————————</div>
        <div style="margin-top: 6px; font-size: 13pt;">Họ và tên: ...........................................................</div>
        <div style="font-size: 13pt;">Lớp: <b>${grade}</b>.....   Số báo danh: .......................</div>
      </td>
      <td style="width: 52%;" class="text-center">
        <div class="font-bold uppercase" style="font-size: 14pt;">BÀI KIỂM TRA ĐỊNH KỲ ${semester}</div>
        <div class="font-bold uppercase" style="color: #047857; font-size: 14pt; margin-top: 4px;">MÔN: TIẾNG VIỆT – LỚP ${grade}</div>
        <div class="font-bold uppercase" style="font-size: 13pt; color: #581c87; margin-top: 2px;">(A. PHẦN KIỂM TRA ĐỌC - 10 ĐIỂM)</div>
        <div style="font-size: 13pt; font-style: italic; margin-top: 4px;">Thời gian: 35 – 40 phút</div>
      </td>
    </tr>
  </table>

  <!-- KHUNG ĐIỂM & NHẬN XÉT PHẦN ĐỌC -->
  <table class="eval-box" style="width: 100%;">
    <tr class="text-center font-bold" style="background-color: #f8fafc; font-size: 13pt;">
      <td style="width: 16%;">1. Đọc tiếng</td>
      <td style="width: 16%;">2. Đọc hiểu</td>
      <td style="width: 18%;">Tổng điểm</td>
      <td style="width: 35%;">Nhận xét của giáo viên</td>
      <td style="width: 15%;">Ý kiến phụ huynh</td>
    </tr>
    <tr style="font-size: 13pt;">
      <td class="text-center" style="height: 55px;">..... / ${oralScore.toFixed(1).replace('.', ',')} đ</td>
      <td class="text-center">..... / ${compScore.toFixed(1).replace('.', ',')} đ</td>
      <td class="text-center font-bold" style="font-size: 14pt;">..... / 10 đ</td>
      <td>...........................................................<br>...........................................................</td>
      <td>...................................<br>...................................</td>
    </tr>
  </table>

  <!-- I. ĐỌC THÀNH TIẾNG (QUY TẮC SƯ PHẠM: CHỈ IN TỰA BÀI + TRANG ĐỌC) -->
  <div class="font-bold" style="font-size: 14pt; margin-top: 8px;">I. ĐỌC THÀNH TIẾNG (${oralScore.toFixed(1).replace('.', ',')} điểm)</div>
  <p style="font-style: italic; margin: 4px 0 8px 0; font-size: 13pt;">
    * Học sinh bốc thăm đọc thành tiếng một đoạn văn/thơ từ bộ sách Tiếng Việt ${grade} (bộ sách Kết nối tri thức với cuộc sống) và trả lời câu hỏi đọc hiểu của thầy cô:
  </p>
  <table class="border-table" style="width: 100%; margin-bottom: 14px;">
    <tr style="background-color: #f1f5f9; font-size: 13pt;" class="font-bold text-center">
      <td style="width: 10%;">STT</td>
      <td style="width: 55%;">Tên bài đọc tham khảo (SGK Kết nối tri thức với cuộc sống)</td>
      <td style="width: 35%;">Trang & Tập sách</td>
    </tr>
    ${oralItems.map((item, idx) => `
      <tr style="font-size: 13pt;">
        <td class="text-center font-bold">${idx + 1}</td>
        <td><b>${item.title}</b></td>
        <td class="text-center">${item.bookVolume ? `${item.bookVolume} • ` : ''}${item.page || ''}</td>
      </tr>
    `).join('')}
  </table>

  <!-- II. ĐỌC THẦM VÀ LÀM BÀI TẬP -->
  <div class="font-bold" style="font-size: 14pt; margin-top: 10px;">II. ĐỌC HIỂU VÀ LUYỆN TỪ VÀ CÂU (${compScore.toFixed(1).replace('.', ',')} điểm)</div>
  <p style="font-style: italic; margin: 2px 0 6px 0; font-size: 13pt;">Đọc kỹ văn bản sau và trả lời các câu hỏi:</p>

  <!-- VĂN BẢN ĐỌC THẦM -->
  <div style="background-color: #fefce8; border: 1px solid #fde047; padding: 10px 14px; margin-bottom: 12px;">
    <div class="font-bold uppercase text-center" style="font-size: 14pt; color: #713f12;">
      ${readingPassage.title}
    </div>
    ${readingPassage.author ? `<div class="text-center" style="font-style: italic; font-size: 12pt; color: #555; margin-bottom: 4px;">Tác giả: ${readingPassage.author}</div>` : ''}
    <p style="text-align: justify; text-indent: 20px; font-size: 13pt; line-height: 1.4; margin: 6px 0 0 0; font-style: italic;">
      ${readingPassage.passage}
    </p>
  </div>

  <!-- DANH SÁCH CÂU HỎI ĐỌC HIỂU & LTVC -->
  ${tvQuestions.map((q, idx) => `
    <div style="margin-bottom: 9px; font-size: 13pt;">
      <b>Câu ${idx + 1} (${q.points} đ - Mức ${q.level}):</b> ${q.questionText}
      ${q.questionType === 'multiple_choice' && q.options && q.options.length > 0 ? `
        <table style="width: 100%; border: none; margin-left: 15px; margin-top: 3px;">
          <tr>
            ${q.options.map(opt => `<td style="border: none; padding: 2px 6px; font-size: 13pt;"><b>${opt.id}.</b> ${opt.text}</td>`).join('')}
          </tr>
        </table>
      ` : `
        <div style="font-style: italic; font-size: 13pt; margin-top: 3px; margin-left: 10px;">Trả lời:</div>
        <div class="dotted-line" style="margin-left: 10px;"></div>
        <div class="dotted-line" style="margin-left: 10px;"></div>
      `}
    </div>
  `).join('')}

  <!-- ==================== PHẦN 2: PHIẾU KIỂM TRA VIẾT ==================== -->
  <div class="page-break"></div>

  <table class="header-table" style="width: 100%;">
    <tr>
      <td style="width: 48%;">
        <div style="font-size: 13pt;">${governingBody}</div>
        <div class="font-bold" style="font-size: 13pt;">${schoolName}</div>
        <div style="font-size: 10pt;">—————————</div>
        <div style="margin-top: 6px; font-size: 13pt;">Họ và tên: ...........................................................</div>
        <div style="font-size: 13pt;">Lớp: <b>${grade}</b>.....   Số báo danh: .......................</div>
      </td>
      <td style="width: 52%;" class="text-center">
        <div class="font-bold uppercase" style="font-size: 14pt;">BÀI KIỂM TRA ĐỊNH KỲ ${semester}</div>
        <div class="font-bold uppercase" style="color: #1d4ed8; font-size: 14pt; margin-top: 4px;">MÔN: TIẾNG VIỆT – LỚP ${grade}</div>
        <div class="font-bold uppercase" style="font-size: 13pt; color: #1e40af; margin-top: 2px;">(B. PHẦN KIỂM TRA VIẾT - 10 ĐIỂM)</div>
        <div style="font-size: 13pt; font-style: italic; margin-top: 4px;">Thời gian: 35 – 40 phút</div>
      </td>
    </tr>
  </table>

  <!-- KHUNG ĐIỂM PHẦN VIẾT: PHÂN BIỆT LỚP 1-3 & LỚP 4-5 -->
  ${grade <= 3 ? `
  <table class="eval-box" style="width: 100%;">
    <tr class="text-center font-bold" style="background-color: #f8fafc; font-size: 13pt;">
      <td style="width: 18%;">1. Chính tả</td>
      <td style="width: 18%;">2. Tập làm văn</td>
      <td style="width: 14%;">Tổng điểm</td>
      <td style="width: 35%;">Nhận xét của giáo viên</td>
      <td style="width: 15%;">Ý kiến phụ huynh</td>
    </tr>
    <tr style="font-size: 13pt;">
      <td class="text-center" style="height: 55px;">..... / 4,0 đ</td>
      <td class="text-center">..... / 6,0 đ</td>
      <td class="text-center font-bold" style="font-size: 14pt;">..... / 10 đ</td>
      <td>...........................................................<br>...........................................................</td>
      <td>...................................<br>...................................</td>
    </tr>
  </table>

  <!-- 1. CHÍNH TẢ (LỚP 1-3) -->
  <div class="font-bold" style="font-size: 14pt;">1. CHÍNH TẢ (Nghe - viết): 4,0 điểm</div>
  <p style="margin: 4px 0 6px 0; font-size: 13pt;"><b>Bài viết:</b> <i>${exam.writingExam?.dictation?.title || "Buổi sáng trên quê hương"}</i></p>
  <p style="text-align: justify; text-indent: 20px; margin: 0 0 10px 0; font-size: 13pt; font-style: italic;">
    "${exam.writingExam?.dictation?.content || "Khi ông mặt trời vừa nhô lên khỏi rặng tre, sương sớm long lanh còn đọng trên từng ngọn cỏ. Làn gió thu nhẹ nhàng thổi qua mang theo hương thơm ngát của đồng lúa chín. Đàn chim ríu rít chuyền cành cất tiếng hót đón chào ngày mới tươi vui."}"
  </p>
  <div class="font-bold" style="font-size: 13pt; margin-bottom: 4px;">Bài làm chính tả:</div>
  <div class="dotted-line"></div>
  <div class="dotted-line"></div>
  <div class="dotted-line"></div>
  <div class="dotted-line"></div>
  <div class="dotted-line"></div>
  <div class="dotted-line"></div>

  <!-- 2. TẬP LÀM VĂN (LỚP 1-3) -->
  <div class="font-bold" style="font-size: 14pt; margin-top: 14px;">2. TẬP LÀM VĂN (Viết đoạn văn): 6,0 điểm</div>
  <p style="margin: 4px 0 6px 0; font-size: 13pt;">
    <b>Đề bài:</b> ${exam.writingExam?.paragraphWriting?.prompt || "Viết đoạn văn (từ 5 đến 7 câu) thể hiện tình cảm, cảm xúc của em đối với một người thân yêu trong gia đình (ông, bà, bố, mẹ...)."}
  </p>
  ${exam.writingExam?.paragraphWriting?.suggestions ? `
    <div style="font-size: 13pt; color: #444; margin-bottom: 8px; padding-left: 10px;">
      <b>Gợi ý:</b>
      ${exam.writingExam.paragraphWriting.suggestions.map(s => `<div>• ${s}</div>`).join('')}
    </div>
  ` : ''}
  <div class="font-bold" style="font-size: 13pt; margin-bottom: 4px;">Bài làm:</div>
  ${Array(Number(grade) <= 2 ? 5 : 10).fill('<div class="dotted-line"></div>').join('\n  ')}
  ` : `
  <!-- KHUNG ĐIỂM LỚP 4-5 (BÀI VĂN HOÀN CHỈNH 10 ĐIỂM) -->
  <table class="eval-box" style="width: 100%;">
    <tr>
      <td style="width: 30%; text-align: center;">
        <div class="font-bold uppercase" style="font-size: 13pt;">ĐIỂM BÀI VIẾT (10,0 ĐIỂM)</div>
        <div style="margin-top: 6px; font-size: 13pt;">
          Bằng số: ........................................<br>
          Bằng chữ: ......................................
        </div>
      </td>
      <td style="width: 49%;">
        <div class="font-bold text-center uppercase" style="font-size: 13pt;">NHẬN XÉT CỦA GIÁO VIÊN</div>
        <div style="margin-top: 6px; font-size: 13pt; color: #444;">
          ...........................................................................................<br>
          ...........................................................................................
        </div>
      </td>
      <td style="width: 21%;">
        <div class="font-bold text-center uppercase" style="font-size: 13pt;">Ý KIẾN PHỤ HUYNH</div>
        <div style="margin-top: 6px; font-size: 13pt; color: #444;">
          ................................................<br>
          ................................................
        </div>
      </td>
    </tr>
  </table>

  <!-- TẬP LÀM VĂN HOÀN CHỈNH (LỚP 4-5) -->
  <div class="font-bold uppercase" style="font-size: 14pt; margin-top: 8px;">
    TẬP LÀM VĂN (10,0 điểm duy nhất - Thể loại: ${exam.writingExam?.essay?.genre || "Văn miêu tả"})
  </div>
  <p style="margin: 6px 0 6px 0; font-size: 13pt;">
    <b>Đề bài:</b> ${exam.writingExam?.essay?.prompt || "Em hãy viết một bài văn miêu tả một cảnh đẹp thiên nhiên (cảnh bình minh trên biển, cảnh cánh đồng lúa chín quê em, hoặc cảnh công viên buổi sáng) mà em có dịp quan sát và yêu thích."}
  </p>
  ${exam.writingExam?.essay?.suggestions ? `
    <div style="font-size: 13pt; color: #333; margin-bottom: 8px; padding-left: 10px; background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 6px 10px;">
      <b>Gợi ý dàn ý:</b>
      ${exam.writingExam.essay.suggestions.map(s => `<div>• ${s}</div>`).join('')}
    </div>
  ` : ''}
  <div class="font-bold" style="font-size: 13pt; margin-bottom: 4px;">Bài làm:</div>
  ${Array(30).fill('<div class="dotted-line"></div>').join('\n  ')}
  `}
`;
  } else {
    // ==================== B. TRƯỜNG HỢP MÔN TOÁN & CÁC MÔN HỌC KHÁC ====================
    docHtml += `
  <!-- HEADER ĐỀ THI CHUẨN NGHỊ ĐỊNH 30 -->
  <table class="header-table">
    <tr>
      <td style="width: 48%;">
        <div style="font-size: 11pt;">${governingBody}</div>
        <div class="font-bold">${schoolName}</div>
        <div style="font-size: 9pt;">—————————</div>
        <div style="margin-top: 8px;">Họ và tên: ...........................................................</div>
        <div>Lớp: <b>${grade}</b>.....   Số báo danh: .......................</div>
      </td>
      <td style="width: 52%;" class="text-center">
        <div class="font-bold uppercase" style="font-size: 13.5pt;">BÀI KIỂM TRA ĐỊNH KỲ ${semester}</div>
        <div class="font-bold uppercase" style="color: #047857; margin-top: 4px;">MÔN: ${subjectName} – LỚP ${grade}</div>
        <div style="font-size: 11pt; font-style: italic; margin-top: 4px;">Thời gian làm bài: ${duration} phút (không kể phát đề)</div>
      </td>
    </tr>
  </table>

  <!-- KHUNG ĐIỂM & NHẬN XÉT -->
  <table class="eval-box">
    <tr>
      <td style="width: 30%; text-align: center;">
        <div class="font-bold">ĐIỂM</div>
        <div style="margin-top: 6px; font-size: 11pt;">
          Bằng số: ........................................<br>
          Bằng chữ: ......................................
        </div>
      </td>
      <td style="width: 49%;">
        <div class="font-bold text-center">NHẬN XÉT CỦA GIÁO VIÊN</div>
        <div style="margin-top: 6px; font-size: 11pt; color: #444;">
          ...........................................................................................<br>
          ...........................................................................................
        </div>
      </td>
      <td style="width: 21%;">
        <div class="font-bold text-center">Ý KIẾN PHỤ HUYNH</div>
        <div style="margin-top: 6px; font-size: 11pt; color: #444;">
          ................................................<br>
          ................................................
        </div>
      </td>
    </tr>
  </table>

  <!-- PHẦN I: TRẮC NGHIỆM -->
  ${mcQuestions.length > 0 ? `
    <div class="font-bold uppercase" style="font-size: 12.5pt; border-bottom: 1px solid #000; padding-bottom: 2px; margin-top: 10px;">
      PHẦN I. TRẮC NGHIỆM KHÁCH QUAN (${mcPoints} điểm)
    </div>
    <div style="font-size: 11pt; font-style: italic; margin: 3px 0 8px 0;">Khoanh tròn vào chữ cái trước câu trả lời đúng:</div>

    ${mcQuestions.map((q, idx) => `
      <div style="margin-bottom: 8px;">
        ${q.stimulus && q.stimulus.text ? `<div style="font-style: italic; background-color: #f8fafc; padding: 4px; border: 1px solid #e2e8f0; margin-bottom: 4px;">${q.stimulus.text}</div>` : ''}
        <b>Câu ${idx + 1} (${q.points} đ - Mức ${q.level}):</b> ${q.questionText}
        ${(q.image || q.imageUrl || q.imageKey) ? `
          <div style="text-align: center; margin: 4px 0;">
            <img src="${getWordImgSrc(q)}" style="max-height: 120px; max-width: 260px; height: auto;" />
          </div>
        ` : ''}
        ${q.options && q.options.length > 0 ? `
          <table style="width: 100%; border: none; margin-left: 15px; margin-top: 3px;">
            <tr>
              ${q.options.map(opt => `
                <td style="border: none; padding: 2px 6px; vertical-align: top;">
                  <b>${opt.id}.</b> ${opt.text || ''}
                  ${(opt.image || opt.imageKey) ? `<div style="margin-top: 3px;"><img src="${getWordImgSrc(opt)}" style="max-height: 80px; max-width: 120px; height: auto;" /></div>` : ''}
                </td>
              `).join('')}
            </tr>
          </table>
        ` : ''}
        ${q.subQuestions && q.subQuestions.length > 0 ? `
          <div style="margin-left: 15px; margin-top: 3px;">
            ${q.subQuestions.map(sq => `<div><b>${sq.id})</b> ${sq.statement} <span style="float: right;">[  Đúng  ]   [  Sai  ]</span></div>`).join('')}
          </div>
        ` : ''}
      </div>
    `).join('')}
  ` : ''}

  <!-- PHẦN II: TỰ LUẬN -->
  ${crQuestions.length > 0 ? `
    <div class="font-bold uppercase" style="font-size: 12.5pt; border-bottom: 1px solid #000; padding-bottom: 2px; margin-top: 14px;">
      PHẦN II. TỰ LUẬN (${crPoints} điểm)
    </div>

    ${crQuestions.map((q, idx) => `
      <div style="margin-top: 10px;">
        <b>Câu ${mcQuestions.length + idx + 1} (${q.points} đ - Mức ${q.level}):</b> ${q.questionText}
        ${(q.image || q.imageUrl || q.imageKey) ? `
          <div style="text-align: center; margin: 6px 0;">
            <img src="${getWordImgSrc(q)}" style="max-height: 140px; max-width: 300px; height: auto;" />
          </div>
        ` : ''}
        <div style="font-style: italic; font-size: 11pt; margin-top: 4px;">Bài làm:</div>
        <div class="dotted-line"></div>
        <div class="dotted-line"></div>
        <div class="dotted-line"></div>
        <div class="dotted-line"></div>
        <div class="dotted-line"></div>
      </div>
    `).join('')}
  ` : ''}
`;
  }

  // ==================== PHẦN MA TRẬN ĐỀ KIỂM TRA ĐÍNH KÈM ====================
  docHtml += `
  <div class="page-break"></div>

  <div class="text-center">
    <div class="font-bold uppercase" style="font-size: 14pt;">MA TRẬN ĐỀ KIỂM TRA ĐỊNH KỲ</div>
    <div class="font-bold uppercase" style="font-size: 12pt;">MÔN: ${subjectName.toUpperCase()} – LỚP ${grade} (${semester.toUpperCase()})</div>
    <div style="font-style: italic; font-size: 11pt;">(Kèm theo đề kiểm tra theo quy định Thông tư 27/2020/TT-BGDĐT)</div>
  </div>
  `;

  const fmtPt = (v) => (v !== undefined && v !== null && v !== '' && v !== 0 ? (typeof v === 'number' ? v.toFixed(1).replace('.', ',') : v) : '');
  const fmtCnt = (v) => (v !== undefined && v !== null && v !== '' && v !== 0 ? v : '');
  const fmtQ = (v) => (v ? v : '');

  function computeSummaryLocal(rows, ratios, tpVal) {
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
        grandTotal: tpVal || 10
      },
      ratiosRow: {
        m1Pct: ratios?.M1 ?? ratios?.m1 ?? exam?.customRatios?.M1 ?? exam?.customRatios?.m1 ?? 65,
        m2Pct: ratios?.M2 ?? ratios?.m2 ?? exam?.customRatios?.M2 ?? exam?.customRatios?.m2 ?? 20,
        m3Pct: ratios?.M3 ?? ratios?.m3 ?? exam?.customRatios?.M3 ?? exam?.customRatios?.m3 ?? 15,
        totalPct: 100
      }
    };
  }

  function renderWordHtml10ColMatrixTable(rows, summary, ratios, totalPoints) {
    const activeSummary = summary?.totalCountRow ? summary : computeSummaryLocal(rows, ratios, totalPoints);
    const tc = activeSummary.totalCountRow || {};
    const tp = activeSummary.totalPointsRow || {};
    const rr = activeSummary.ratiosRow || {};

    const m1Ratio = rr?.m1Pct ?? rr?.M1 ?? ratios?.M1 ?? ratios?.m1 ?? exam?.customRatios?.M1 ?? exam?.customRatios?.m1 ?? 65;
    const m2Ratio = rr?.m2Pct ?? rr?.M2 ?? ratios?.M2 ?? ratios?.m2 ?? exam?.customRatios?.M2 ?? exam?.customRatios?.m2 ?? 20;
    const m3Ratio = rr?.m3Pct ?? rr?.M3 ?? ratios?.M3 ?? ratios?.m3 ?? exam?.customRatios?.M3 ?? exam?.customRatios?.m3 ?? 15;

    let html = `
    <table class="border-table text-center" style="margin-top: 10px; font-size: 11pt;">
      <thead>
        <tr style="background-color: #f1f5f9;" class="font-bold">
          <td rowspan="2" style="width: 28%; text-align: center; vertical-align: middle;">Mạch kiến thức, kĩ năng</td>
          <td rowspan="2" style="width: 12%; text-align: center; vertical-align: middle;">Số câu và số điểm</td>
          <td colspan="2" style="text-align: center;">Mức 1</td>
          <td colspan="2" style="text-align: center;">Mức 2</td>
          <td colspan="2" style="text-align: center;">Mức 3</td>
          <td colspan="2" style="text-align: center;">Tổng</td>
        </tr>
        <tr style="background-color: #f8fafc;" class="font-bold">
          <td style="width: 7%; text-align: center;">TNKQ</td>
          <td style="width: 7%; text-align: center;">TL</td>
          <td style="width: 7%; text-align: center;">TNKQ</td>
          <td style="width: 7%; text-align: center;">TL</td>
          <td style="width: 7%; text-align: center;">TNKQ</td>
          <td style="width: 7%; text-align: center;">TL</td>
          <td style="width: 9%; text-align: center;">TNKQ</td>
          <td style="width: 9%; text-align: center;">TL</td>
        </tr>
      </thead>
      <tbody>
    `;

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

      html += `
        <tr>
          <td rowspan="3" class="text-left font-bold" style="vertical-align: middle;">${row.topicName}</td>
          <td>Số câu</td>
          <td>${fmtCnt(m1TnC)}</td>
          <td>${fmtCnt(m1TlC)}</td>
          <td>${fmtCnt(m2TnC)}</td>
          <td>${fmtCnt(m2TlC)}</td>
          <td>${fmtCnt(m3TnC)}</td>
          <td>${fmtCnt(m3TlC)}</td>
          <td class="font-bold">${fmtCnt(totalTnC)}</td>
          <td class="font-bold">${fmtCnt(totalTlC)}</td>
        </tr>
        <tr>
          <td>Câu số</td>
          <td>${fmtQ(row.m1?.tnQuestions)}</td>
          <td>${fmtQ(row.m1?.tlQuestions)}</td>
          <td>${fmtQ(row.m2?.tnQuestions)}</td>
          <td>${fmtQ(row.m2?.tlQuestions)}</td>
          <td>${fmtQ(row.m3?.tnQuestions)}</td>
          <td>${fmtQ(row.m3?.tlQuestions)}</td>
          <td>${fmtQ(row.total?.tnQuestions)}</td>
          <td>${fmtQ(row.total?.tlQuestions)}</td>
        </tr>
        <tr>
          <td>Số điểm</td>
          <td>${fmtPt(m1TnP)}</td>
          <td>${fmtPt(m1TlP)}</td>
          <td>${fmtPt(m2TnP)}</td>
          <td>${fmtPt(m2TlP)}</td>
          <td>${fmtPt(m3TnP)}</td>
          <td>${fmtPt(m3TlP)}</td>
          <td class="font-bold">${fmtPt(totalTnP)}</td>
          <td class="font-bold">${fmtPt(totalTlP)}</td>
        </tr>
      `;
    });

    html += `
      <tr class="font-bold" style="background-color: #f1f5f9;">
        <td colspan="2">Tổng số câu</td>
        <td>${fmtCnt(tc.m1Tn)}</td>
        <td>${fmtCnt(tc.m1Tl)}</td>
        <td>${fmtCnt(tc.m2Tn)}</td>
        <td>${fmtCnt(tc.m2Tl)}</td>
        <td>${fmtCnt(tc.m3Tn)}</td>
        <td>${fmtCnt(tc.m3Tl)}</td>
        <td class="font-bold">${fmtCnt(tc.totalTn)}</td>
        <td class="font-bold">${fmtCnt(tc.totalTl)}</td>
      </tr>
      <tr class="font-bold" style="background-color: #f1f5f9;">
        <td colspan="2">Số điểm</td>
        <td>${fmtPt(tp.m1Tn)}</td>
        <td>${fmtPt(tp.m1Tl)}</td>
        <td>${fmtPt(tp.m2Tn)}</td>
        <td>${fmtPt(tp.m2Tl)}</td>
        <td>${fmtPt(tp.m3Tn)}</td>
        <td>${fmtPt(tp.m3Tl)}</td>
        <td class="font-bold">${fmtPt(tp.totalTn)}</td>
        <td class="font-bold">${fmtPt(tp.totalTl)}</td>
      </tr>
      <tr class="font-bold" style="background-color: #e2e8f0;">
        <td colspan="2">Tỉ lệ %</td>
        <td colspan="2">${m1Ratio}%</td>
        <td colspan="2">${m2Ratio}%</td>
        <td colspan="2">${m3Ratio}%</td>
        <td colspan="2">100%</td>
      </tr>
    </tbody>
    </table>
    `;

    return html;
  }

  if (isTiengViet || m.tiengVietMatrix) {
    const tvMat = m.tiengVietMatrix || {};
    const rdRows = tvMat.readingTable?.rows || tvMat.readingMatrix || m.matrixRows || [];
    const rdSummary = tvMat.readingTable?.summary || m.summary;
    const wrRows = tvMat.writingTable?.rows || tvMat.writingMatrix || (
      grade <= 3 ? [
        { component: "1. Chính tả (Nghe - viết)", level: "Mức 1", score: "4,0 điểm", note: `Đoạn văn/thơ đúng chuẩn số chữ Lớp ${grade} (~15 phút)` },
        { component: "2. Tập làm văn (Viết đoạn)", level: "Mức 2, 3", score: "6,0 điểm", note: "Viết đoạn văn theo chủ điểm có gợi ý chi tiết" }
      ] : [
        { component: "1. Tập làm văn (Bài văn hoàn chỉnh)", level: "Mức 1, 2, 3", score: "10,0 điểm", note: "Bài văn hoàn chỉnh đúng bố cục 3 phần, giàu hình ảnh cảm xúc" }
      ]
    );

    docHtml += `
    <div class="font-bold uppercase" style="font-size: 12pt; margin-top: 14px;">
      I. MA TRẬN ĐỀ KIỂM TRA MÔN TIẾNG VIỆT ĐỌC THẦM VÀ LÀM BÀI TẬP (6,0 ĐIỂM)
    </div>
    <div style="font-style: italic; font-size: 11pt; margin-bottom: 6px;">(Phần Đọc hiểu văn bản và Luyện từ và câu)</div>
    ${renderWordHtml10ColMatrixTable(rdRows, rdSummary, m.ratios || exam.customRatios, 6)}

    <div class="font-bold uppercase" style="font-size: 12pt; margin-top: 18px;">
      II. MA TRẬN NỘI DUNG VÀ MỨC ĐỘ NHẬN THỨC BÀI KIỂM TRA VIẾT (10,0 ĐIỂM)
    </div>
    <div style="font-style: italic; font-size: 11pt; margin-bottom: 6px;">(Phần Viết chính tả và Tập làm văn)</div>
    <table class="border-table text-center" style="margin-top: 6px; font-size: 11pt;">
      <thead>
        <tr style="background-color: #f1f5f9;" class="font-bold">
          <td style="width: 35%; text-align: left;">Nội dung kiểm tra</td>
          <td style="width: 25%;">Mức độ nhận thức</td>
          <td style="width: 15%;">Điểm số</td>
          <td style="width: 25%; text-align: left;">Ghi chú</td>
        </tr>
      </thead>
      <tbody>
        ${wrRows.map(w => `
          <tr>
            <td class="text-left font-bold">${w.component}</td>
            <td>${w.level}</td>
            <td class="font-bold">${w.score}</td>
            <td class="text-left" style="font-size: 10.5pt;">${w.note}</td>
          </tr>
        `).join('')}
        <tr class="font-bold" style="background-color: #f1f5f9;">
          <td class="text-left" colspan="2">TỔNG CỘNG ĐIỂM VIẾT</td>
          <td class="font-bold">10,0 điểm</td>
          <td class="text-left">100% Điểm bài thi viết</td>
        </tr>
      </tbody>
    </table>
    `;
  } else {
    docHtml += renderWordHtml10ColMatrixTable(matrixRows, m.summary, m.ratios || exam.customRatios, exam.totalPoints || 10);
  }

  // ==================== PHẦN BẢN ĐẶC TẢ ĐỀ KIỂM TRA ====================
  docHtml += `
  <div class="text-center" style="margin-top: 20px;">
    <div class="font-bold uppercase" style="font-size: 13.5pt;">BẢN ĐẶC TẢ ĐỀ KIỂM TRA ĐỊNH KỲ</div>
    <div class="font-bold uppercase" style="font-size: 11.5pt;">MÔN: ${subjectName} – LỚP ${grade}</div>
  </div>

  <table class="border-table" style="margin-top: 10px;">
    <thead>
      <tr class="font-bold text-center" style="background-color: #f1f5f9;">
        <td style="width: 6%;">Câu</td>
        <td style="width: 18%;">Mã định danh</td>
        <td style="width: 40%; text-align: left;">Yêu cầu cần đạt (YCCĐ)</td>
        <td style="width: 10%;">Mức độ</td>
        <td style="width: 16%;">Dạng câu</td>
        <td style="width: 10%;">Điểm</td>
      </tr>
    </thead>
    <tbody>
      ${(exam.specifications || []).map(s => `
        <tr>
          <td class="text-center font-bold">${s.itemNumber}</td>
          <td class="text-center font-bold" style="font-family: monospace;">${s.questionId}</td>
          <td>${s.learningOutcome}</td>
          <td class="text-center font-bold">${s.level}</td>
          <td>${s.questionTypeName || s.questionType}</td>
          <td class="text-center font-bold">${s.points} đ</td>
        </tr>
      `).join('')}
    </tbody>
  </table>

  <!-- ==================== HƯỚNG DẪN CHẤM VÀ ĐÁP ÁN ==================== -->
  <div class="page-break"></div>

  <div class="text-center">
    <div class="font-bold uppercase" style="font-size: 14pt;">HƯỚNG DẪN CHẤM VÀ THANG ĐIỂM CHI TIẾT</div>
    <div class="font-bold uppercase" style="font-size: 12pt;">MÔN: ${subjectName} – LỚP ${grade} (${semester})</div>
  </div>

  <div style="margin-top: 14px;">
    ${isTiengViet ? `
      <!-- A. HƯỚNG DẪN CHẤM BÀI KIỂM TRA ĐỌC -->
      <div class="font-bold uppercase" style="font-size: 12.5pt; color: #581c87; margin-bottom: 8px;">
        A. HƯỚNG DẪN CHẤM BÀI KIỂM TRA ĐỌC (10,0 ĐIỂM)
      </div>

      <!-- I. ĐỌC THÀNH TIẾNG (4,0 ĐIỂM) -->
      <div style="margin-left: 10px; margin-bottom: 12px;">
        <div class="font-bold" style="font-size: 11.5pt;">I. ĐỌC THÀNH TIẾNG (4,0 ĐIỂM): Kỹ năng đọc (3,0đ) + Trả lời câu hỏi (1,0đ)</div>
        <table class="border-table" style="margin-top: 5px; margin-bottom: 8px;">
          <tr style="background-color: #f1f5f9;" class="font-bold text-center">
            <td style="width: 30%;">Tiêu chí đánh giá</td>
            <td style="width: 15%;">Điểm</td>
            <td>Yêu cầu cần đạt</td>
          </tr>
          <tr>
            <td>1. Tốc độ & Âm lượng</td>
            <td class="text-center font-bold">1,0 đ</td>
            <td>Đọc vừa đủ nghe, rõ ràng; tốc độ đọc đạt yêu cầu chuẩn khối lớp (khoảng 1 phút).</td>
          </tr>
          <tr>
            <td>2. Phát âm & Ngắt nghỉ</td>
            <td class="text-center font-bold">1,0 đ</td>
            <td>Đọc đúng tiếng, từ; ngắt nghỉ hơi đúng ở các dấu câu, các cụm từ rõ nghĩa; không đọc ngắc ngứ.</td>
          </tr>
          <tr>
            <td>3. Giọng đọc & Biểu cảm</td>
            <td class="text-center font-bold">1,0 đ</td>
            <td>Bước đầu thể hiện giọng đọc, ngữ điệu phù hợp với tính chất của bài văn hoặc bài thơ.</td>
          </tr>
        </table>

        <!-- BẢNG CÂU HỎI & GỢI Ý TRẢ LỜI DÀNH CHO GIÁO VIÊN -->
        <div class="font-bold" style="font-size: 11pt; color: #1e3a8a; margin-top: 6px;">
          * BẢNG CÂU HỎI VÀ GỢI Ý TRẢ LỜI DÀNH CHO GIÁO VIÊN (1,0 ĐIỂM):
        </div>
        <table class="border-table" style="margin-top: 4px;">
          <tr style="background-color: #f1f5f9;" class="font-bold text-center">
            <td style="width: 38%;">Bài đọc tham khảo (SGK Kết nối tri thức - Chuẩn TT27)</td>
            <td style="width: 31%;">Câu hỏi giáo viên nêu cho học sinh</td>
            <td style="width: 31%;">Gợi ý câu trả lời & Chấm điểm</td>
          </tr>
          ${(exam.teacherGuide?.oralGuide?.qaList || (exam.readingExam?.oralItems || []).map(item => ({
            lessonTitle: item.title + (item.page ? ` (${item.bookVolume || ''} - ${item.page})` : ''),
            passage: item.passage || "",
            wordCount: item.wordCount || 0,
            question: item.question || "Nêu nội dung chính hoặc ý nghĩa của bài đọc vừa rồi?",
            answer: item.answer || "Học sinh trả lời đúng ý chính của đoạn đọc, diễn đạt trôi chảy, rõ ràng."
          }))).map(qa => `
            <tr>
              <td class="font-bold">
                <div>${qa.lessonTitle}</div>
                ${qa.passage ? `<div style="font-size: 10pt; font-weight: normal; font-style: italic; color: #475569; margin-top: 4px; border-left: 2px solid #9333ea; padding-left: 6px;"><b>Đoạn trích (${qa.wordCount ? qa.wordCount + ' chữ' : 'chuẩn tốc độ'}):</b> "${qa.passage}"</div>` : ''}
              </td>
              <td><b>Hỏi:</b> "${qa.question}"</td>
              <td><b>Trả lời:</b> ${qa.answer} <i>(Đúng trọn vẹn: 1,0đ; chưa trọn vẹn: 0,5đ)</i></td>
            </tr>
          `).join('')}
        </table>
      </div>

      <!-- II. ĐỌC HIỂU & LUYỆN TỪ VÀ CÂU (6,0 ĐIỂM) -->
      <div style="margin-left: 10px; margin-bottom: 14px;">
        <div class="font-bold" style="font-size: 11.5pt;">II. ĐÁP ÁN ĐỌC THẦM VÀ LÀM BÀI TẬP (6,0 ĐIỂM)</div>
        <div style="margin-top: 5px;">
          ${(exam.readingExam?.questions || questions).map((q, idx) => `
            <div style="margin-bottom: 8px; padding: 5px 8px; background-color: #fafafa; border: 1px solid #e2e8f0;">
              <div style="display: flex; justify-content: space-between;">
                <b>Câu ${idx + 1} (${q.points} đ - Mức ${q.level}):</b>
                <span style="color: #b91c1c; font-weight: bold;">Đáp án: ${q.correctAnswer || 'Tự luận'}</span>
              </div>
              ${q.explain ? `<div style="font-style: italic; font-size: 10.5pt; color: #555;">Hướng dẫn: ${q.explain}</div>` : ''}
              ${q.scoringGuide?.rubric ? `
                <div style="margin-top: 3px; font-size: 10.5pt; color: #333;">
                  ${q.scoringGuide.rubric.map(r => `<div>• ${r.criteria || r.step}: <b>${r.points || r.score}</b> (${r.description || ''})</div>`).join('')}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- B. HƯỚNG DẪN CHẤM BÀI KIỂM TRA VIẾT -->
      <div class="font-bold uppercase" style="font-size: 12.5pt; color: #1e40af; margin-top: 16px; margin-bottom: 8px;">
        B. HƯỚNG DẪN CHẤM BÀI KIỂM TRA VIẾT (10,0 ĐIỂM)
      </div>

      ${grade <= 3 ? `
        <!-- LỚP 1-3: CHÍNH TẢ (4Đ) + ĐOẠN VĂN (6Đ) -->
        <div style="margin-left: 10px;">
          <div class="font-bold" style="font-size: 11.5pt;">1. CHÍNH TẢ (4,0 ĐIỂM)</div>
          <table class="border-table" style="margin-top: 4px; margin-bottom: 8px;">
            <tr><td>• Tốc độ viết đạt chuẩn quy định</td><td class="text-center font-bold" style="width: 15%;">1,0 đ</td></tr>
            <tr><td>• Chữ viết rõ ràng, đúng độ cao, khoảng cách con chữ</td><td class="text-center font-bold">1,0 đ</td></tr>
            <tr><td>• Viết đúng chính tả (không mắc quá 5 lỗi thông thường; sai mỗi lỗi trừ 0,25đ)</td><td class="text-center font-bold">1,0 đ</td></tr>
            <tr><td>• Trình bày bài sạch sẽ, đúng quy tắc</td><td class="text-center font-bold">1,0 đ</td></tr>
          </table>

          <div class="font-bold" style="font-size: 11.5pt; margin-top: 8px;">2. BAREM CHẤM TẬP LÀM VĂN / VIẾT ĐOẠN VĂN (6,0 ĐIỂM)</div>
          <table class="border-table" style="margin-top: 4px;">
            <tr style="background-color: #f1f5f9;" class="font-bold text-center">
              <td style="width: 30%;">Tiêu chí</td>
              <td style="width: 15%;">Điểm</td>
              <td>Mô tả chi tiết</td>
            </tr>
            ${(exam.writingExam?.paragraphWriting?.rubric || [
              { criteria: "Bố cục đoạn văn", score: "1,5đ", detail: "Đoạn văn hoàn chỉnh, có câu mở đầu, thân đoạn và câu kết." },
              { criteria: "Nội dung & Cảm xúc", score: "3,0đ", detail: "Nội dung chân thực, ấm áp, bám sát chủ đề gợi ý." },
              { criteria: "Chính tả & Dùng từ", score: "1,5đ", detail: "Từ ngữ phong phú, câu văn đủ ngữ pháp, không sai chính tả." }
            ]).map(r => `
              <tr>
                <td class="font-bold">${r.criteria}</td>
                <td class="text-center font-bold">${r.score}</td>
                <td>${r.detail}</td>
              </tr>
            `).join('')}
          </table>
        </div>
      ` : `
        <!-- LỚP 4-5: BAREM 5 TIÊU CHÍ BÀI VĂN HOÀN CHỈNH (10,0 ĐIỂM) -->
        <div style="margin-left: 10px;">
          <div class="font-bold" style="font-size: 11.5pt; margin-bottom: 4px;">
            BAREM CHẤM BÀI VĂN HOÀN CHỈNH (10,0 ĐIỂM) – 5 TIÊU CHÍ CHUẨN THẦY LÊ THÀNH LONG
          </div>
          <table class="border-table">
            <tr style="background-color: #f1f5f9;" class="font-bold text-center">
              <td style="width: 25%;">Tiêu chí</td>
              <td style="width: 12%;">Điểm</td>
              <td>Yêu cầu cụ thể & Mức điểm chi tiết</td>
            </tr>
            ${(exam.writingExam?.essay?.rubric || [
              { criteria: "1. Mở bài", score: "1,0đ", detail: "Giới thiệu trực tiếp hoặc gián tiếp sinh động đối tượng miêu tả/kể (Mở bài gián tiếp sâu sắc: 1,0đ; Mở bài trực tiếp: 0,5đ)." },
              { criteria: "2. Thân bài", score: "4,0đ", detail: "Nội dung đầy đủ, có trình tự miêu tả hợp lý (Tả bao quát: 1,0đ; Tả chi tiết từng nét nổi bật: 2,0đ; Kết hợp cảnh sắc với con người: 1,0đ)." },
              { criteria: "3. Kết bài", score: "1,0đ", detail: "Nêu cảm nghĩ sâu sắc, tình cảm chân thành (Kết bài mở rộng: 1,0đ; Kết bài không mở rộng: 0,5đ)." },
              { criteria: "4. Chính tả, dùng từ, đặt câu", score: "2,0đ", detail: "Viết đúng chính tả, không mắc quá 3 lỗi (1,0đ); Dùng từ gợi tả, câu văn chuẩn ngữ pháp (1,0đ)." },
              { criteria: "5. Sáng tạo & Cảm xúc", score: "2,0đ", detail: "Sử dụng linh hoạt các biện pháp tu từ so sánh, nhân hóa (1,0đ); Giọng văn truyền cảm, có phát hiện riêng (1,0đ)." }
            ]).map(r => `
              <tr>
                <td class="font-bold">${r.criteria}</td>
                <td class="text-center font-bold" style="color: #047857;">${r.score}</td>
                <td>${r.detail}</td>
              </tr>
            `).join('')}
            <tr class="font-bold" style="background-color: #f1f5f9;">
              <td>TỔNG ĐIỂM BÀI VIẾT</td>
              <td class="text-center" style="color: #1e40af;">10,0 đ</td>
              <td>Tổng điểm của 5 tiêu chí thành phần (làm tròn đến 0,5 điểm).</td>
            </tr>
          </table>
        </div>
      `}
    ` : `
      <!-- HƯỚNG DẪN CHẤM CÁC MÔN KHÁC (TOÁN, KHOA HỌC...) -->
      ${questions.map((q, idx) => `
        <div style="margin-bottom: 12px; padding: 6px; background-color: #fafafa; border: 1px solid #e2e8f0;">
          <div style="display: flex; justify-content: space-between;">
            <b>Câu ${idx + 1} (${q.points} điểm – Mức ${q.level}):</b>
            <span style="color: #b91c1c; font-weight: bold;">Đáp án: ${q.correctAnswer}</span>
          </div>
          ${q.scoringGuide?.rubric ? `
            <div style="margin-top: 4px; padding-left: 10px; font-size: 11pt;">
              ${q.scoringGuide.rubric.map(r => `<div>• <b>${r.criteria}:</b> ${r.points} điểm (${r.description})</div>`).join('')}
            </div>
          ` : ''}
        </div>
      `).join('')}
    `}
  </div>

</body>
</html>
`;

  if (forPdf) {
    return docHtml;
  }

  return imgCollector.hasImages()
    ? imgCollector.buildMhtml(docHtml)
    : docHtml;
}

export async function exportExamToWordDoc(exam) {
  if (!exam) return;
  const isEnglish = Boolean(exam.isEnglish || (exam.subject || '').toLowerCase().includes('tiếng anh') || (exam.subject || '').toLowerCase().includes('english'));
  const grade = exam.grade || 4;
  const setSuffix = exam.examSetIndex ? `_BoDe${exam.examSetIndex}` : '';
  const filename = isEnglish
    ? `De_Kiem_Tra_Tieng_Anh_Lop${grade}_Chuan_Global_Success${setSuffix}.docx`
    : `De_Kiem_Tra_${exam.subject || 'Mon'}_Lop${grade}_Chuan_ND30${setSuffix}.docx`;

  const finalDoc = buildStandardExamHtml(exam, { forPdf: false });

  if (typeof window !== 'undefined' && window.IntegrationService && typeof window.IntegrationService.downloadWordBlob === 'function') {
    try {
      await window.IntegrationService.downloadWordBlob(finalDoc, filename);
      return;
    } catch (e) {
      console.warn("downloadWordBlob error, falling back to downloadWordHtml:", e);
    }
  }

  downloadWordHtml(finalDoc, filename);
}

export function exportExamToPdfPrint(exam) {
  if (!exam) return;
  const html = buildStandardExamHtml(exam, { forPdf: true, isPrint: true });
  let printWindow = null;
  try {
    printWindow = window.open('', '_blank', 'width=950,height=800');
  } catch (_) {}

  if (printWindow) {
    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();

    const doPrint = () => {
      try {
        printWindow.focus();
        setTimeout(() => {
          printWindow.print();
        }, 500);
      } catch (e) {
        console.error("Lỗi khi mở hộp thoại in:", e);
      }
    };

    if (printWindow.document.readyState === 'complete') {
      doPrint();
    } else {
      printWindow.onload = doPrint;
    }
  } else {
    // Fallback using invisible print iframe inside current document to bypass popup blockers
    let iframe = document.getElementById('exam-print-iframe');
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.id = 'exam-print-iframe';
      iframe.style.position = 'fixed';
      iframe.style.right = '0';
      iframe.style.bottom = '0';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.border = '0';
      document.body.appendChild(iframe);
    }
    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(html);
    doc.close();
    setTimeout(() => {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    }, 600);
  }
}

/**
 * Tải trực tiếp file PDF (.pdf) chuẩn Nghị định 30 từ máy chủ
 * Tự động chuyển tiếp sang cửa sổ In/Lưu PDF nếu máy chủ gặp sự cố
 */
export async function exportExamToPdfFile(exam) {
  if (!exam) return;
  const html = buildStandardExamHtml(exam, { forPdf: true });
  const subject = exam.subject || 'MonHoc';
  const grade = exam.grade || 1;
  const setSuffix = exam.examSetIndex ? `_BoDe${exam.examSetIndex}` : '';
  const filename = `De_Kiem_Tra_${subject}_Lop${grade}_Chuan_ND30${setSuffix}.pdf`;

  try {
    const res = await fetch('/api/exam/export-pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ exam, html })
    });

    if (res.ok) {
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      return;
    }
  } catch (err) {
    console.warn("Server PDF export unavailable, generating direct client PDF download...", err);
  }

  // Direct Client-Side PDF Download using html2pdf.js (Tải trực tiếp file .pdf vào máy, KHÔNG mở cửa sổ in)
  if (typeof window !== 'undefined' && window.html2pdf) {
    const container = document.createElement('div');
    container.innerHTML = html;
    container.style.position = 'fixed';
    container.style.left = '-9999px';
    container.style.top = '0';
    container.style.width = '210mm';
    container.style.padding = '15px';
    container.style.background = '#ffffff';
    document.body.appendChild(container);

    const opt = {
      margin:       [8, 8, 8, 8],
      filename:     filename,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, logging: false },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    try {
      await window.html2pdf().set(opt).from(container).save();
      return;
    } catch (hErr) {
      console.warn("html2pdf direct save failed:", hErr);
    } finally {
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
    }
  }

  // Phụ trợ cuối cùng nếu html2pdf chưa nạp xong
  exportExamToPdfPrint(exam);
}

