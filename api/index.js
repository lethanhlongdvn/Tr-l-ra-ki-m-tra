// Polyfill DOMMatrix for Node.js serverless environments (required by pdf-parse v2+)
if (typeof globalThis.DOMMatrix === 'undefined') {
  globalThis.DOMMatrix = class DOMMatrix {
    constructor() {
      this.a = 1; this.b = 0; this.c = 0; this.d = 1; this.e = 0; this.f = 0;
      this.m11 = 1; this.m12 = 0; this.m13 = 0; this.m14 = 0;
      this.m21 = 0; this.m22 = 1; this.m23 = 0; this.m24 = 0;
      this.m31 = 0; this.m32 = 0; this.m33 = 1; this.m34 = 0;
      this.m41 = 0; this.m42 = 0; this.m43 = 0; this.m44 = 1;
      this.is2D = true; this.isIdentity = true;
    }
    inverse() { return this; }
    multiply() { return this; }
    translate() { return this; }
    scale() { return this; }
    rotate() { return this; }
  };
}

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', serverTime: new Date().toISOString(), message: 'API is running' });
});

try {
  const apiRoutes = require('../server/src/routes/api');
  app.use('/api', apiRoutes);
  app.use('/', apiRoutes);
} catch (err) {
  console.error('Lỗi khi nạp apiRoutes:', err);
  app.use('/api/*', (req, res) => {
    res.status(500).json({ error: 'Lỗi khởi tạo API server: ' + err.message, stack: err.stack });
  });
  app.use('*', (req, res) => {
    res.status(500).json({ error: 'Lỗi khởi tạo API server: ' + err.message, stack: err.stack });
  });
}

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({ error: err.message || 'Lỗi máy chủ nội bộ' });
});

module.exports = app;
