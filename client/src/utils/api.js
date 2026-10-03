/**
 * API Client Utility
 */

const BASE_URL = '/api';

export async function fetchJson(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  });

  if (!response.ok) {
    let errMsg = `HTTP error! status: ${response.status}`;
    try {
      const errorData = await response.json();
      if (errorData && errorData.error) errMsg = errorData.error;
    } catch (_) {
      try {
        const text = await response.text();
        if (text) errMsg = text.slice(0, 150);
      } catch (__) {}
    }
    throw new Error(errMsg);
  }

  return response.json();
}

export async function downloadFile(endpoint, body, filename) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    let errMsg = `Lỗi máy chủ (${response.status})`;
    try {
      const errorJson = await response.json();
      if (errorJson.error) errMsg = errorJson.error;
    } catch (_) {
      try {
        const text = await response.text();
        if (text) errMsg = text.slice(0, 100);
      } catch (__) {}
    }
    throw new Error(errMsg);
  }

  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}

/**
 * Tải file Word (.doc / .docx) trực tiếp từ client (MSO Word HTML)
 * Đảm bảo 100% tương thích và không bao giờ phụ thuộc đường truyền máy chủ
 */
export function downloadWordHtml(htmlContent, filename) {
  const isMhtml = typeof htmlContent === 'string' && htmlContent.startsWith('MIME-Version:');
  const isDocx = (filename || '').toLowerCase().endsWith('.docx');
  const mimeType = isMhtml 
    ? 'message/rfc822;charset=utf-8' 
    : (isDocx ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' : 'application/msword;charset=utf-8');
  const blob = new Blob(['\ufeff' + htmlContent], {
    type: mimeType
  });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = isDocx ? filename : (filename.endsWith('.doc') ? filename : `${filename}.docx`);
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}

