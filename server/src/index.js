const express = require('express');
const cors = require('cors');
const path = require('path');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Gắn routes API
app.use('/api', apiRoutes);

// Phục vụ tài nguyên tĩnh RAG trước tiên (từ client/public/rag và client/dist/rag)
const clientDistPath = path.join(__dirname, '../../client/dist');
const clientPublicPath = path.join(__dirname, '../../client/public');

// Ưu tiên phục vụ /images từ client/public/images và client/dist/images
app.use('/images', express.static(path.join(clientPublicPath, 'images')));
app.use('/images', express.static(path.join(clientDistPath, 'images')));

// Ưu tiên phục vụ /rag từ client/public/rag
app.use('/rag', express.static(path.join(clientPublicPath, 'rag')));
// Fallback /rag từ client/dist/rag nếu có
app.use('/rag', express.static(path.join(clientDistPath, 'rag')));

// Hỗ trợ alias đường dẫn legacy (js/khbd_sohoa, js/sgk, js/services, js/lib) từ thư viện KHBD
app.use('/js/khbd_sohoa', express.static(path.join(clientPublicPath, 'rag/khbd_sohoa')));
app.use('/js/khbd_sohoa', express.static(path.join(clientDistPath, 'rag/khbd_sohoa')));
app.use('/js/sgk', express.static(path.join(clientPublicPath, 'rag/sgk')));
app.use('/js/sgk', express.static(path.join(clientDistPath, 'rag/sgk')));
app.use('/js/services', express.static(path.join(clientPublicPath, 'rag/services')));
app.use('/js/services', express.static(path.join(clientDistPath, 'rag/services')));
app.use('/js/lib', express.static(path.join(clientPublicPath, 'rag/lib')));
app.use('/js/lib', express.static(path.join(clientDistPath, 'rag/lib')));

// Đảm bảo mọi tệp /rag/* hoặc /js/* nếu không tìm thấy sẽ trả về 404 thay vì HTML SPA fallback
app.use(['/rag/*', '/js/*'], (req, res) => {
  res.status(404).type('text/plain').send('Static resource not found');
});

// Phục vụ frontend static build từ client/dist
app.use(express.static(clientDistPath));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', serverTime: new Date().toISOString(), message: 'AI Exam Builder Backend is running smoothly.' });
});

// Đảm bảo /api/* không khớp route nào sẽ trả về JSON 404 thay vì HTML SPA fallback
app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'API route not found' });
});

// SPA fallback (chỉ dành cho các đường dẫn web thông thường)
app.get('*', (req, res) => {
  res.sendFile(path.join(clientDistPath, 'index.html'));
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`=======================================================`);
    console.log(`🚀 AI EXAM BUILDER APPLICATION is running at:`);
    console.log(`   👉 http://localhost:${PORT}`);
    console.log(`   TT27 • GDPT 2018 • MA TRẬN • BẢN ĐẶC TẢ • SEA-PLM`);
    console.log(`=======================================================`);
  });
}

module.exports = app;
