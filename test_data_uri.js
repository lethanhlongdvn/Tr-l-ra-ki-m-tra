const fs = require('fs');
const path = require('path');

const b64Data = "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mNk+M9QzwAEjDAGYzAEABvQAQcK1v+6AAAAAElEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

const oldHtml = `<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset="utf-8">
<title>Data URI Test</title>
</head>
<body>
<h1>Data URI Test</h1>
<img src="data:image/png;base64,${b64Data}" width="80" height="80" />
</body>
</html>`;

fs.writeFileSync(path.resolve('test_data_uri.doc'), '\ufeff' + oldHtml, 'utf8');
console.log('Saved test_data_uri.doc');
