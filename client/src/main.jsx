import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import englishImagesBase64 from './utils/englishImagesBase64.json';

if (typeof window !== 'undefined') {
  window.englishImagesBase64 = englishImagesBase64;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
