/**
 * PDF Engine: Tạo file PDF chuẩn thể thức văn bản hành chính theo Nghị định 30/2020/NĐ-CP
 * và chuẩn chuyên môn Thông tư 27/2020/TT-BGDĐT sử dụng Headless Chromium (Edge / Chrome)
 */

const { execFile } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { v4: uuidv4 } = require('uuid');

class PdfEngine {
  constructor() {
    this.browserPath = this.detectBrowser();
  }

  /**
   * Phát hiện đường dẫn trình duyệt Chromium/Edge có sẵn trên hệ thống
   */
  detectBrowser() {
    // 1. Kiểm tra biến môi trường
    if (process.env.CHROME_BIN && fs.existsSync(process.env.CHROME_BIN)) return process.env.CHROME_BIN;
    if (process.env.EDGE_BIN && fs.existsSync(process.env.EDGE_BIN)) return process.env.EDGE_BIN;

    const isWin = process.platform === 'win32';
    const isMac = process.platform === 'darwin';

    if (isWin) {
      const candidates = [
        'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
        'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
        path.join(os.homedir(), 'AppData\\Local\\Microsoft\\Edge\\Application\\msedge.exe'),
        path.join(os.homedir(), 'AppData\\Local\\Google\\Chrome\\Application\\chrome.exe')
      ];
      for (const p of candidates) {
        if (fs.existsSync(p)) return p;
      }
    } else if (isMac) {
      const candidates = [
        '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
      ];
      for (const p of candidates) {
        if (fs.existsSync(p)) return p;
      }
    } else {
      // Linux
      const candidates = [
        '/usr/bin/microsoft-edge',
        '/usr/bin/google-chrome',
        '/usr/bin/google-chrome-stable',
        '/usr/bin/chromium',
        '/usr/bin/chromium-browser'
      ];
      for (const p of candidates) {
        if (fs.existsSync(p)) return p;
      }
    }

    return null;
  }

  isAvailable() {
    return Boolean(this.browserPath && fs.existsSync(this.browserPath));
  }

  /**
   * Chuyển đổi mã HTML thành Buffer file PDF chuẩn A4 Nghị định 30
   */
  async generatePdfFromHtml(htmlContent) {
    const browser = this.detectBrowser();
    if (!browser) {
      throw new Error('Không tìm thấy trình duyệt Microsoft Edge hoặc Google Chrome trên máy chủ để chuyển đổi PDF.');
    }

    const fileId = `${Date.now()}_${uuidv4().substring(0, 8)}`;
    const tmpHtml = path.join(os.tmpdir(), `exam_${fileId}.html`);
    const tmpPdf = path.join(os.tmpdir(), `exam_${fileId}.pdf`);

    // Làm sạch các thẻ ngắt trang dư thừa ở cuối file để tránh bị trang trắng
    let cleanedHtml = htmlContent || '';
    cleanedHtml = cleanedHtml.replace(/(<div[^>]*class="[^"]*page-break[^"]*"[^>]*>\s*<\/div>\s*){2,}/gi, '<div class="page-break"></div>');
    cleanedHtml = cleanedHtml.replace(/(<div[^>]*class="[^"]*page-break[^"]*"[^>]*>\s*<\/div>\s*)+(?=\s*<\/body>|\s*<\/html>|\s*$)/gi, '');

    if (!cleanedHtml.includes('@page')) {
      cleanedHtml = cleanedHtml.replace('</head>', '<style>@page { size: A4 portrait; margin: 10mm 10mm 10mm 15mm; } .page-break:last-child { display: none !important; page-break-before: avoid !important; }</style></head>');
    }

    // Tiền xử lý HTML: Chuyển đổi 100% đường dẫn ảnh tương đối thành Base64 Data URI
    try {
      const englishImagesBase64 = require('../data/englishImagesBase64.json');
      cleanedHtml = cleanedHtml.replace(/<img[^>]+src=["']([^"']+)["']/gi, (match, src) => {
        if (!src || src.startsWith('data:image')) return match;
        let b64 = '';
        if (englishImagesBase64[src]) {
          b64 = englishImagesBase64[src];
        } else {
          const filename = src.split('/').pop().split('\\').pop();
          const normalized = '/' + src.replace(/^(\.\/|\/|dist\/)+/, '');
          if (englishImagesBase64[normalized]) {
            b64 = englishImagesBase64[normalized];
          } else if (englishImagesBase64[filename]) {
            b64 = englishImagesBase64[filename];
          } else {
            const matchKey = Object.keys(englishImagesBase64).find(k => k.endsWith('/' + filename));
            if (matchKey) b64 = englishImagesBase64[matchKey];
          }
        }

        if (!b64) {
          // Thử đọc từ ổ đĩa máy chủ nếu có
          const localPaths = [
            path.join(__dirname, '../../client/public', src.replace(/^\/+/, '')),
            path.join(__dirname, '../../client/dist', src.replace(/^\/+/, ''))
          ];
          for (const lp of localPaths) {
            if (fs.existsSync(lp)) {
              try {
                const ext = path.extname(lp).toLowerCase();
                const mime = ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : 'image/png';
                const fileBuf = fs.readFileSync(lp);
                b64 = `data:${mime};base64,${fileBuf.toString('base64')}`;
                break;
              } catch (_) {}
            }
          }
        }

        return b64 ? match.replace(src, b64) : match;
      });
    } catch (_) {}

    // Ghi mã HTML ra file tạm với mã hóa UTF-8
    await fs.promises.writeFile(tmpHtml, cleanedHtml, 'utf8');

    const fileUrl = `file:///${tmpHtml.replace(/\\/g, '/')}`;

    const args = [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--allow-file-access-from-files',
      '--no-pdf-header-footer',
      '--run-all-compositor-stages-before-draw',
      '--virtual-time-budget=8000',
      `--print-to-pdf=${tmpPdf}`,
      fileUrl
    ];

    try {
      await new Promise((resolve, reject) => {
        execFile(browser, args, { timeout: 45000 }, (error, stdout, stderr) => {
          if (error) {
            return reject(new Error(`Lỗi chuyển đổi PDF từ Chromium: ${error.message} (stderr: ${stderr})`));
          }
          resolve(stdout);
        });
      });

      if (!fs.existsSync(tmpPdf)) {
        throw new Error('Tệp PDF không được tạo sau khi thực thi tiến trình in ấn.');
      }

      const buffer = await fs.promises.readFile(tmpPdf);
      return buffer;
    } finally {
      // Dọn dẹp tệp tin tạm an toàn
      try {
        if (fs.existsSync(tmpHtml)) await fs.promises.unlink(tmpHtml);
      } catch (e) {
        console.warn('Không thể xóa tệp tạm HTML:', e.message);
      }
      try {
        if (fs.existsSync(tmpPdf)) await fs.promises.unlink(tmpPdf);
      } catch (e) {
        console.warn('Không thể xóa tệp tạm PDF:', e.message);
      }
    }
  }
}

module.exports = new PdfEngine();
