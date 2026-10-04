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
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function downloadFile(endpoint, body, filename) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  const contentType = response.headers.get('content-type') || '';

  if (!response.ok || contentType.includes('text/html')) {
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
  if (blob.size < 500 && filename.toLowerCase().endsWith('.docx')) {
    throw new Error("Tệp nhận được không hợp lệ, chuyển sang tạo trực tiếp.");
  }

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
export async function downloadWordHtml(htmlContent, filename) {
  const isMhtml = typeof htmlContent === 'string' && (htmlContent.startsWith('MIME-Version:') || htmlContent.includes('Content-Type: multipart/related'));
  let finalFilename = filename || 'De_Kiem_Tra.doc';
  if (isMhtml && finalFilename.toLowerCase().endsWith('.docx')) {
    finalFilename = finalFilename.replace(/\.docx$/i, '.doc');
  }
  const isDocx = finalFilename.toLowerCase().endsWith('.docx');
  const mimeType = isMhtml 
    ? 'message/rfc822;charset=utf-8' 
    : (isDocx ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' : 'application/msword;charset=utf-8');
  const blob = new Blob(['\ufeff' + htmlContent], {
    type: mimeType
  });

  if (typeof window !== 'undefined' && typeof window.showSaveFilePicker === 'function') {
    try {
      const pickerOpts = {
        suggestedName: finalFilename,
        types: [{
          description: isDocx ? 'Tài liệu Microsoft Word (.docx)' : 'Tài liệu Microsoft Word (.doc)',
          accept: { [mimeType.split(';')[0]]: [isDocx ? '.docx' : '.doc'] }
        }]
      };
      const handle = await window.showSaveFilePicker(pickerOpts);
      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();
      return;
    } catch (err) {
      if (err && (err.name === 'AbortError' || err.code === 20)) {
        return;
      }
    }
  }

  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = finalFilename;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}

