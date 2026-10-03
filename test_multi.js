const fs = require('fs');
const images = require('./client/src/utils/englishImagesBase64.json');

const keys = Object.keys(images).slice(0, 10);
const boundary = "----=_NextPart_MULTI_IMG_TEST";

let htmlImgs = keys.map((k, idx) => `
  <div style="margin: 10px; display: inline-block;">
    <p>Tranh ${idx + 1}</p>
    <img src="img_${idx}.png" width="120" />
  </div>
`).join('\n');

let body = `<!DOCTYPE html>
<html>
<body>
<h1>ĐỀ THI TIẾNG ANH - KIỂM TRA 10 ẢNH</h1>
<div>${htmlImgs}</div>
</body>
</html>`;

let parts = [
  'MIME-Version: 1.0',
  `Content-Type: multipart/related; boundary="${boundary}"`,
  '',
  `--${boundary}`,
  'Content-Type: text/html; charset="utf-8"',
  'Content-Transfer-Encoding: 8bit',
  'Content-Location: file:///C:/exam_multi.htm',
  '',
  body,
  ''
];

keys.forEach((k, idx) => {
  const cleanB64 = images[k].replace(/^data:image\/[a-z]+;base64,/, '');
  parts.push(`--${boundary}`);
  parts.push('Content-Type: image/png');
  parts.push('Content-Transfer-Encoding: base64');
  parts.push(`Content-Location: img_${idx}.png`);
  parts.push('');
  parts.push(cleanB64);
  parts.push('');
});

parts.push(`--${boundary}--`);

fs.writeFileSync('test_multi_imgs.doc', '\ufeff' + parts.join('\r\n'), 'utf8');
console.log('Saved test_multi_imgs.doc');
