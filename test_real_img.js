const fs = require('fs');
const path = require('path');
const images = require('./client/src/utils/englishImagesBase64.json');

const keys = Object.keys(images);
console.log('Total images:', keys.length);
console.log('Sample keys:', keys.slice(0, 5));

const sampleKey = keys[0];
const sampleBase64 = images[sampleKey];
console.log('Sample image:', sampleKey, 'length:', sampleBase64.length);

// 1. Tạo file Data URI với ảnh thật
const htmlDataUri = `<!DOCTYPE html>
<html>
<body>
<h2>Test Real Image Data URI</h2>
<p>Image below:</p>
<img src="${sampleBase64}" width="200" />
</body>
</html>`;
fs.writeFileSync('test_real_data_uri.doc', '\ufeff' + htmlDataUri, 'utf8');

// 2. Tạo file MHTML với ảnh thật
const boundary = "----=_NextPart_REAL_IMAGE_TEST";
const cleanB64 = sampleBase64.replace(/^data:image\/[a-z]+;base64,/, '');

const mhtml = [
  'MIME-Version: 1.0',
  `Content-Type: multipart/related; boundary="${boundary}"`,
  '',
  `--${boundary}`,
  'Content-Type: text/html; charset="utf-8"',
  'Content-Transfer-Encoding: 8bit',
  'Content-Location: file:///C:/exam_doc.html',
  '',
  `<!DOCTYPE html>
<html>
<body>
<h2>Test Real Image MHTML</h2>
<p>Image below:</p>
<img src="${sampleKey}" width="200" />
</body>
</html>`,
  '',
  `--${boundary}`,
  'Content-Type: image/png',
  'Content-Transfer-Encoding: base64',
  `Content-Location: ${sampleKey}`,
  '',
  cleanB64,
  '',
  `--${boundary}--`
].join('\r\n');

fs.writeFileSync('test_real_mhtml.doc', '\ufeff' + mhtml, 'utf8');
console.log('Created test_real_data_uri.doc and test_real_mhtml.doc');
