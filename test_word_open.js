const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const b64Data = "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mNk+M9QzwAEjDAGYzAEABvQAQcK1v+6AAAAAElEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

const boundary = "----=_NextPart_01D9_TEST_BOUNDARY";

const htmlBody = `<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset="utf-8">
<title>Kiểm tra tiếng Việt có dấu</title>
<style>
body { font-family: 'Times New Roman'; font-size: 13pt; }
</style>
</head>
<body>
<h1>ĐỀ KIỂM TRA HỌC KỲ I - LỚP 5</h1>
<p>Họ và tên: Nguyễn Văn An</p>
<p>Hình ảnh bên dưới:</p>
<div>
  <img src="test_img_1.png" width="80" height="80" />
</div>
</body>
</html>`;

const mhtmlContent = [
  'MIME-Version: 1.0',
  `Content-Type: multipart/related; boundary="${boundary}"`,
  '',
  `--${boundary}`,
  'Content-Type: text/html; charset="utf-8"',
  'Content-Transfer-Encoding: 8bit',
  'Content-Location: file:///C:/exam_doc.html',
  '',
  htmlBody,
  '',
  `--${boundary}`,
  'Content-Type: image/png',
  'Content-Transfer-Encoding: base64',
  'Content-Location: test_img_1.png',
  '',
  b64Data,
  '',
  `--${boundary}--`
].join('\r\n');

const testFilePath = path.resolve('test_mhtml.doc');
fs.writeFileSync(testFilePath, '\ufeff' + mhtmlContent, 'utf8');
console.log('Saved test_mhtml.doc');

// Test with PowerShell Word COM
try {
  const psScript = `
    $word = New-Object -ComObject Word.Application
    $word.Visible = $false
    try {
      $doc = $word.Documents.Open("${testFilePath.replace(/\\/g, '\\\\')}")
      $text = $doc.Content.Text
      $shapeCount = $doc.InlineShapes.Count
      $shapeType = if ($shapeCount -gt 0) { $doc.InlineShapes.Item(1).Type } else { -1 }
      Write-Output "TITLE_FOUND: $($text.Contains('LỚP 5'))"
      Write-Output "SHAPES_COUNT: $shapeCount"
      Write-Output "SHAPE_TYPE: $shapeType"
      $doc.Close([ref]$false)
    } finally {
      $word.Quit()
      [System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
    }
  `;
  const result = execSync(`powershell -Command "${psScript.replace(/\r?\n/g, ' ')}"`, { encoding: 'utf8' });
  console.log('PowerShell COM Test Result:\n', result);
} catch (err) {
  console.error('COM test error:', err.message);
}
