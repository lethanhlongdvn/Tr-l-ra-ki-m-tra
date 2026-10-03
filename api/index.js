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
