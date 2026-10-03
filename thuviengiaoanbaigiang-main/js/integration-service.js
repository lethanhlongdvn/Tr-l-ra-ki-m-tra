/**
 * TRỢ LÝ AI TÍCH HỢP GIÁO ÁN TỰ ĐỘNG (CHUẨN CÔNG VĂN 2345/BGDĐT-GDTH)
 * Hệ thống số hóa Kế hoạch bài dạy 5 Khối lớp (Bộ sách Kết nối tri thức với cuộc sống)
 * Hỗ trợ 2 Chế độ:
 * 1. Xuất theo Từng Môn (Có hoặc Không tích hợp)
 * 2. Xuất theo Thời Khóa Biểu Tuần (Ghép tuần tự tất cả các môn, Có hoặc Không tích hợp)
 * Quản trị: Thầy Lê Thành Long
 */

var IntegrationService = {

  // =========================================================================
  // 1. MẪU THỜI KHÓA BIỂU CHUẨN CỦA BỘ GD&ĐT (CHO 5 KHỐI LỚP)
  // =========================================================================

  DEFAULT_TIMETABLES: {
    5: [
      { day: 'Thứ Hai', dayNum: 2, morning: ['hdtn', 'toan', 'tieng_viet', 'tieng_viet'], afternoon: ['khoa_hoc', 'lich_su_dia_ly', 'dao_duc'] },
      { day: 'Thứ Ba', dayNum: 3, morning: ['toan', 'tieng_viet', 'tieng_viet', 'khoa_hoc'], afternoon: ['cong_nghe', 'tieng_anh', 'gdtc'] },
      { day: 'Thứ Tư', dayNum: 4, morning: ['toan', 'tieng_viet', 'tieng_viet', 'lich_su_dia_ly'], afternoon: ['tin_hoc', 'am_nhac', 'mi_thuat'] },
      { day: 'Thứ Năm', dayNum: 5, morning: ['toan', 'tieng_viet', 'tieng_viet', 'tieng_anh'], afternoon: ['dao_duc', 'toan', 'gdtc'] },
      { day: 'Thứ Sáu', dayNum: 6, morning: ['toan', 'tieng_viet', 'tieng_anh', 'cong_nghe'], afternoon: ['hdtn', 'tin_hoc', 'hdtn'] }
    ],
    4: [
      { day: 'Thứ Hai', dayNum: 2, morning: ['hdtn', 'toan', 'tieng_viet', 'tieng_viet'], afternoon: ['khoa_hoc', 'lich_su_dia_ly', 'dao_duc'] },
      { day: 'Thứ Ba', dayNum: 3, morning: ['toan', 'tieng_viet', 'tieng_viet', 'khoa_hoc'], afternoon: ['cong_nghe', 'tieng_anh', 'gdtc'] },
      { day: 'Thứ Tư', dayNum: 4, morning: ['toan', 'tieng_viet', 'tieng_viet', 'lich_su_dia_ly'], afternoon: ['tin_hoc', 'am_nhac', 'mi_thuat'] },
      { day: 'Thứ Năm', dayNum: 5, morning: ['toan', 'tieng_viet', 'tieng_viet', 'tieng_anh'], afternoon: ['dao_duc', 'toan', 'gdtc'] },
      { day: 'Thứ Sáu', dayNum: 6, morning: ['toan', 'tieng_viet', 'tieng_anh', 'cong_nghe'], afternoon: ['hdtn', 'tin_hoc', 'hdtn'] }
    ],
    3: [
      { day: 'Thứ Hai', dayNum: 2, morning: ['hdtn', 'toan', 'tieng_viet', 'tieng_viet'], afternoon: ['tnxh', 'dao_duc', 'am_nhac'] },
      { day: 'Thứ Ba', dayNum: 3, morning: ['toan', 'tieng_viet', 'tieng_viet', 'tnxh'], afternoon: ['cong_nghe', 'tieng_anh', 'gdtc'] },
      { day: 'Thứ Tư', dayNum: 4, morning: ['toan', 'tieng_viet', 'tieng_viet', 'tin_hoc'], afternoon: ['mi_thuat', 'dao_duc', 'gdtc'] },
      { day: 'Thứ Năm', dayNum: 5, morning: ['toan', 'tieng_viet', 'tieng_viet', 'tieng_anh'], afternoon: ['tnxh', 'toan', 'cong_nghe'] },
      { day: 'Thứ Sáu', dayNum: 6, morning: ['toan', 'tieng_viet', 'tieng_anh', 'tin_hoc'], afternoon: ['hdtn', 'hdtn', 'hdtn'] }
    ],
    2: [
      { day: 'Thứ Hai', dayNum: 2, morning: ['hdtn', 'tieng_viet', 'tieng_viet', 'toan'], afternoon: ['tnxh', 'dao_duc', 'gdtc'] },
      { day: 'Thứ Ba', dayNum: 3, morning: ['tieng_viet', 'tieng_viet', 'toan', 'tnxh'], afternoon: ['am_nhac', 'tieng_anh', 'hdtn'] },
      { day: 'Thứ Tư', dayNum: 4, morning: ['tieng_viet', 'tieng_viet', 'toan', 'dao_duc'], afternoon: ['mi_thuat', 'gdtc', 'tnxh'] },
      { day: 'Thứ Năm', dayNum: 5, morning: ['tieng_viet', 'tieng_viet', 'toan', 'tieng_anh'], afternoon: ['toan', 'hdtn', 'gdtc'] },
      { day: 'Thứ Sáu', dayNum: 6, morning: ['tieng_viet', 'tieng_viet', 'toan', 'tieng_anh'], afternoon: ['hdtn', 'hdtn', 'hdtn'] }
    ],
    1: [
      { day: 'Thứ Hai', dayNum: 2, morning: ['hdtn', 'tieng_viet', 'tieng_viet', 'toan'], afternoon: ['tnxh', 'dao_duc', 'gdtc'] },
      { day: 'Thứ Ba', dayNum: 3, morning: ['tieng_viet', 'tieng_viet', 'toan', 'tnxh'], afternoon: ['am_nhac', 'tieng_anh', 'hdtn'] },
      { day: 'Thứ Tư', dayNum: 4, morning: ['tieng_viet', 'tieng_viet', 'toan', 'dao_duc'], afternoon: ['mi_thuat', 'gdtc', 'tnxh'] },
      { day: 'Thứ Năm', dayNum: 5, morning: ['tieng_viet', 'tieng_viet', 'toan', 'tieng_anh'], afternoon: ['toan', 'hdtn', 'gdtc'] },
      { day: 'Thứ Sáu', dayNum: 6, morning: ['tieng_viet', 'tieng_viet', 'toan', 'tieng_anh'], afternoon: ['hdtn', 'hdtn', 'hdtn'] }
    ]
  },

  getDefaultTimetable: function(grade) {
    var g = parseInt(grade) || 5;
    var list = this.DEFAULT_TIMETABLES[g] || this.DEFAULT_TIMETABLES[5];
    return JSON.parse(JSON.stringify(list));
  },

  getSubjectDisplayName: function(subjectKey) {
    if (!subjectKey || subjectKey === '—' || subjectKey === '-') return '—';
    var map = {
      'toan': 'Toán',
      'tieng_viet': 'Tiếng Việt',
      'khoa_hoc': 'Khoa học',
      'lich_su_dia_ly': 'Lịch sử và Địa lí',
      'tnxh': 'Tự nhiên và Xã hội',
      'dao_duc': 'Đạo đức',
      'hdtn': 'Hoạt động trải nghiệm',
      'cong_nghe': 'Công nghệ',
      'tin_hoc': 'Tin học',
      'tieng_anh': 'Tiếng Anh',
      'am_nhac': 'Âm nhạc',
      'mi_thuat': 'Mĩ thuật',
      'gdtc': 'Giáo dục thể chất',
      'shcn': 'Sinh hoạt lớp'
    };
    return map[subjectKey] || subjectKey;
  },

  getSubjectListForGrade: function(grade) {
    var g = parseInt(grade) || 5;
    if (g <= 3) {
      return ['Toán', 'Tiếng Việt', 'Tự nhiên và Xã hội', 'Đạo đức', 'Hoạt động trải nghiệm', 'Công nghệ', 'Tin học', 'Tiếng Anh', 'Âm nhạc', 'Mĩ thuật', 'Giáo dục thể chất', 'Sinh hoạt lớp'];
    } else {
      return ['Toán', 'Tiếng Việt', 'Khoa học', 'Lịch sử và Địa lí', 'Đạo đức', 'Hoạt động trải nghiệm', 'Công nghệ', 'Tin học', 'Tiếng Anh', 'Âm nhạc', 'Mĩ thuật', 'Giáo dục thể chất', 'Sinh hoạt lớp'];
    }
  },

  /**
   * Tạo tệp mẫu Thời khóa biểu Excel (.xlsx) có danh sách xổ xuống (Data Validation Dropdown)
   */
  exportTimetableTemplate: async function(grade, meta) {
    if (typeof XLSX === 'undefined') {
      throw new Error('Thư viện XLSX chưa sẵn sàng');
    }
    var g = parseInt(grade) || 5;
    var metadata = meta || {};
    var schoolName = metadata.schoolName || 'TRƯỜNG TIỂU HỌC KIM ĐỒNG';
    var schoolYear = metadata.schoolYear || '2026 - 2027';
    var className = metadata.className || ('Lớp ' + g + 'A');
    var teacherName = metadata.teacherName || 'Nguyễn Văn A';

    var timetable = metadata.timetable || this.getDefaultTimetable(g);

    var rows = [
      [schoolName.toUpperCase()],
      ['THỜI KHÓA BIỂU - ' + className.toUpperCase() + ' - NĂM HỌC ' + schoolYear],
      ['GIÁO VIÊN CHỦ NHIỆM: ' + teacherName],
      [''],
      ['Buổi', 'Tiết', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu']
    ];

    // Buổi Sáng (4 tiết)
    for (var slot = 0; slot < 4; slot++) {
      var row = ['Sáng', 'Tiết ' + (slot + 1)];
      for (var d = 0; d < 5; d++) {
        var dayItem = timetable[d] || {};
        var subjKey = (dayItem.morning && dayItem.morning[slot]) || '';
        row.push(this.getSubjectDisplayName(subjKey));
      }
      rows.push(row);
    }

    // Buổi Chiều (3 tiết)
    for (var slotA = 0; slotA < 3; slotA++) {
      var rowA = ['Chiều', 'Tiết ' + (slotA + 1)];
      for (var d = 0; d < 5; d++) {
        var dayItem = timetable[d] || {};
        var subjKey = (dayItem.afternoon && dayItem.afternoon[slotA]) || '';
        rowA.push(this.getSubjectDisplayName(subjKey));
      }
      rows.push(rowA);
    }

    rows.push(['']);
    rows.push(['* HƯỚNG DẪN SỬ DỤNG MẪU THỜI KHÓA BIỂU:']);
    rows.push(['1. Quý Thầy/Cô có thể chỉnh sửa thông tin Trường, Lớp, Năm học, Họ tên GV ở phần đầu bảng.']);
    rows.push(['2. Tại mỗi ô môn học (từ Thứ Hai đến Thứ Sáu), bấm vào ô để xuất hiện NÚT XỔ XUỐNG [▼] chọn nhanh môn học.']);
    rows.push(['3. Thầy/Cô cũng có thể gõ trực tiếp tên môn học theo thực tế nhà trường nếu muốn.']);
    rows.push(['4. Sau khi hoàn thiện, lưu tệp (.xlsx) và bấm "Tải lên TKB" trên website để tạo Kế hoạch bài dạy chuẩn 100% CV 2345.']);

    var ws = XLSX.utils.aoa_to_sheet(rows);
    ws['!merges'] = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: 6 } },
      { s: { r: 1, c: 0 }, e: { r: 1, c: 6 } },
      { s: { r: 2, c: 0 }, e: { r: 2, c: 6 } }
    ];
    ws['!cols'] = [
      { wch: 10 },
      { wch: 10 },
      { wch: 24 },
      { wch: 24 },
      { wch: 24 },
      { wch: 24 },
      { wch: 24 }
    ];

    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'TKB_Khoi_' + g);

    var rawBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

    // Chèn Data Validation Dropdown bằng JSZip nếu có JSZip
    if (typeof JSZip !== 'undefined') {
      try {
        var zip = await JSZip.loadAsync(rawBuffer);
        var sheetXml = await zip.file('xl/worksheets/sheet1.xml').async('string');
        var subjectsList = this.getSubjectListForGrade(g).join(',');
        var dataValXml = '<dataValidations count="1"><dataValidation type="list" allowBlank="1" showInputMessage="1" showErrorMessage="0" sqref="C6:G12"><formula1>&quot;' + subjectsList + '&quot;</formula1></dataValidation></dataValidations>';

        var insertPos = sheetXml.indexOf('<pageMargins');
        if (insertPos === -1) insertPos = sheetXml.indexOf('<ignoredErrors');
        if (insertPos === -1) insertPos = sheetXml.indexOf('</worksheet>');

        if (insertPos !== -1) {
          sheetXml = sheetXml.slice(0, insertPos) + dataValXml + sheetXml.slice(insertPos);
          zip.file('xl/worksheets/sheet1.xml', sheetXml);
          return await zip.generateAsync({ type: 'blob', mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        }
      } catch (zipErr) {
        console.warn('Không thể chèn dataValidation via JSZip, dùng file mặc định:', zipErr);
      }
    }

    return new Blob([rawBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  },

  normalizeSubjectKey: function(rawText) {
    if (!rawText || typeof rawText !== 'string') return '';
    var text = rawText.trim().toLowerCase();
    if (!text || text === '-' || text === '--' || text === '—' || text === 'nghỉ' || text === 'trống' || text === 'x') return '';

    var noAcc = text.replace(/đ/g, 'd').replace(/Đ/g, 'D').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    var compact = noAcc.replace(/[^a-z0-9]/g, '');

    if (compact.includes('toan') || compact === 't' || /^t\d+$/.test(compact) || compact.startsWith('ttiet') || compact.startsWith('tiettoan')) return 'toan';
    if (compact.includes('tiengviet') || compact.includes('tviet') || compact === 'tv' || compact.startsWith('tv') || compact.includes('tapdoc') || compact.includes('chinhta') || compact.includes('luyentu') || compact.includes('taplamvan') || compact.startsWith('tvtiet')) return 'tieng_viet';
    if (compact.includes('khoahoc') || compact.includes('khoc') || compact === 'kh' || compact.startsWith('khtiet')) return 'khoa_hoc';
    if (compact.includes('lichsudialy') || compact.includes('lichsudiali') || compact.includes('lsdl') || compact.includes('lsd') || compact.includes('lichsu') || compact.includes('diali') || compact.includes('dialy')) return 'lich_su_dia_ly';
    if (compact.includes('tunhienxahoi') || compact.includes('tnxh') || compact.startsWith('tnxhtiet')) return 'tnxh';
    if (compact.includes('daoduc') || compact === 'dd' || compact.startsWith('ddtiet')) return 'dao_duc';
    if (compact.includes('trainghiem') || compact.includes('hdtn') || compact.includes('hdtnh') || compact.includes('hdtnvhn') || compact.startsWith('hdtntiet') || compact.includes('chaoco') || compact.includes('sinhhoat') || compact.includes('shl') || compact.includes('shdc') || compact.includes('shcn') || compact.includes('tongket')) return 'hdtn';
    if (compact.includes('congnghe') || compact === 'cn' || compact.startsWith('cntiet')) return 'cong_nghe';
    if (compact.includes('tinhoc') || compact === 'tin' || compact === 'th' || compact.startsWith('thtiet') || compact.startsWith('tintiet')) return 'tin_hoc';
    if (compact.includes('tienganh') || compact.includes('anhvan') || compact.includes('anh') || compact.includes('english') || compact === 'ta' || compact.startsWith('tatiet')) return 'tieng_anh';
    if (compact.includes('amnhac') || compact.includes('hatnhac') || compact === 'an' || compact === 'nhac' || compact.startsWith('antiet')) return 'am_nhac';
    if (compact.includes('mithuat') || compact.includes('mythuat') || compact === 'mt' || compact.startsWith('mttiet')) return 'mi_thuat';
    if (compact.includes('thechat') || compact.includes('theduc') || compact.includes('gdtc') || compact === 'td' || compact.startsWith('gdtctiet')) return 'gdtc';

    return text;
  },

  /**
   * Trích xuất thông tin Giáo viên, Năm học, Khối lớp, Trường từ văn bản tiêu đề TKB
   */
  extractMetadataFromText: function(text) {
    var meta = {};
    if (!text || typeof text !== 'string') return meta;

    // 1. Năm học (vd: NĂM HỌC 2026 – 2027, Năm học: 2026-2027)
    var yMatch = text.match(/(?:NĂM\s*HỌC|NH)\s*[:：\-–]?\s*([0-9]{4}\s*[-–/]\s*[0-9]{4})/i);
    if (yMatch) {
      meta.schoolYear = yMatch[1].replace(/[–/]/g, '-').replace(/\s*-\s*/g, ' - ').trim();
    }

    // 2. Giáo viên / GVCN (vd: GVCN: NGUYỄN VĂN TRUNG, Giáo viên: Lê Thành Long)
    var tMatch = text.match(/(?:GVCN|GIÁO\s*VIÊN\s*(?:CHỦ\s*NHIỆM)?|GIÁO\s*VIÊN|GV)\s*[:：\-–]\s*([^\(\[\{\n\r,]+)/i);
    if (tMatch) {
      var rawName = tMatch[1].trim().replace(/^[:：\-–\s]+/, '').replace(/^(Thầy|Cô)\s+/i, '').trim();
      rawName = rawName.split(/\s+(?:dạy|áp\s+dụng|từ\s+ngày|sđt|đt)\b/i)[0].trim();
      if (rawName.length >= 2 && rawName.length <= 50) {
        meta.teacherName = rawName;
      }
    }

    // 3. Khối & Lớp (vd: LỚP 2^1, LỚP 2/1, LỚP 5A, Khối 2)
    var cMatch = text.match(/(?:THỜI\s*KHÓA\s*BIỂU\s+)?(?:LỚP|KHỐI)\s*[:：\-–]?\s*([1-5])(?:\s*([\^/_\-\.]?\s*[0-9A-Za-z]{1,4}))?(?=\s*[\n\r,;\-–]|\s+năm\b|\s+nh\b|\s+học\b|$)/i);
    if (cMatch) {
      meta.grade = parseInt(cMatch[1]);
      if (cMatch[2]) {
        var suffix = cMatch[2].trim();
        meta.className = 'Lớp ' + cMatch[1] + (suffix.startsWith('^') || suffix.startsWith('/') ? '' : (suffix.match(/^[A-Za-z0-9]/) ? (suffix.length === 1 && suffix.match(/[0-9]/) ? '^' : ' ') : '')) + suffix;
      } else {
        meta.className = 'Khối ' + cMatch[1];
      }
    }

    // 4. Trường học (vd: TRƯỜNG TIỂU HỌC KIM ĐỒNG)
    var sMatch = text.match(/(?:TRƯỜNG\s*TIỂU\s*HỌC|TRƯỜNG\s*TH)\s*[:：\-–]?\s*([A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚÝĐa-zàáâãèéêìíòóôõùúýđ0-9\s\.\-–]+?)(?=\s*[\n\r,;]|$)/i);
    if (sMatch) {
      var rawSchool = sMatch[1].trim().replace(/^[:：\-–\s]+/, '');
      if (rawSchool.length >= 2 && rawSchool.length <= 60) {
        meta.schoolName = ('TRƯỜNG TIỂU HỌC ' + rawSchool.replace(/^tiểu\s*học\s+/i, '')).toUpperCase();
      }
    }

    return meta;
  },

  // =========================================================================
  // 2. BỘ PHÂN TÍCH THỜI KHÓA BIỂU ĐA ĐỊNH DẠNG (EXCEL, WORD, CSV, TXT)
  // =========================================================================

  /**
   * Phân tích tệp Thời Khóa Biểu (Excel .xlsx/.xls, Word .docx, PDF, CSV, TXT)
   */
  parseTimetableFile: async function(file, grade) {
    if (!file) throw new Error('Vui lòng chọn tệp Thời khóa biểu.');
    var fileName = file.name || 'Thoi_Khoa_Bieu';
    var ext = (fileName.split('.').pop() || '').toLowerCase();
    var curGrade = parseInt(grade) || 5;

    // 1. TỆP EXCEL (.XLSX, .XLS)
    if (ext === 'xlsx' || ext === 'xls') {
      return new Promise(function(resolve, reject) {
        if (typeof XLSX === 'undefined') {
          reject(new Error('Thư viện đọc Excel đang tải, vui lòng thử lại sau 2 giây.'));
          return;
        }
        var reader = new FileReader();
        reader.onload = function(e) {
          try {
            var data = new Uint8Array(e.target.result);
            var workbook = XLSX.read(data, { type: 'array' });
            var firstSheetName = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[firstSheetName];
            var rows = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });

            var topText = rows.slice(0, 10).map(function(r) { return Array.isArray(r) ? r.join(' ') : String(r || ''); }).join('\n');
            var fileMeta = IntegrationService.extractMetadataFromText(topText);
            var targetGrade = fileMeta.grade || curGrade;
            var parsed = IntegrationService.parseTimetableFromGrid(rows, targetGrade);
            resolve({
              success: true,
              fileName: fileName,
              fileType: 'Excel (' + ext.toUpperCase() + ')',
              timetable: parsed.timetable,
              slotsCount: parsed.slotsCount,
              metadata: fileMeta
            });
          } catch (err) {
            reject(new Error('Lỗi khi đọc bảng tính Excel: ' + err.message));
          }
        };
        reader.onerror = function() { reject(new Error('Không thể đọc tệp Excel.')); };
        reader.readAsArrayBuffer(file);
      });
    }

    // 2. TỆP WORD (.DOCX)
    if (ext === 'docx') {
      return new Promise(function(resolve, reject) {
        if (typeof mammoth === 'undefined') {
          reject(new Error('Thư viện đọc Word đang tải, vui lòng thử lại sau 2 giây.'));
          return;
        }
        var reader = new FileReader();
        reader.onload = function(e) {
          var htmlPromise = mammoth.convertToHtml({ arrayBuffer: e.target.result });
          var rawTextPromise = mammoth.extractRawText({ arrayBuffer: e.target.result });

          Promise.all([htmlPromise, rawTextPromise])
            .then(function(results) {
              var htmlResult = results[0];
              var textResult = results[1];
              var html = htmlResult.value || '';
              var rawText = textResult.value || '';
              var fileMeta = IntegrationService.extractMetadataFromText(rawText || html);
              var targetGrade = fileMeta.grade || curGrade;

              var grid = IntegrationService.extractGridFromHtmlTable(html);
              if (grid.length > 0) {
                var parsed = IntegrationService.parseTimetableFromGrid(grid, targetGrade);
                resolve({
                  success: true,
                  fileName: fileName,
                  fileType: 'Word (DOCX)',
                  timetable: parsed.timetable,
                  slotsCount: parsed.slotsCount,
                  metadata: fileMeta
                });
              } else {
                var parsed = IntegrationService.parseTimetableFromText(rawText, targetGrade);
                resolve({
                  success: true,
                  fileName: fileName,
                  fileType: 'Word (DOCX Text)',
                  timetable: parsed.timetable,
                  slotsCount: parsed.slotsCount,
                  metadata: fileMeta
                });
              }
            })
            .catch(function(err) {
              reject(new Error('Lỗi khi phân tích tệp Word: ' + err.message));
            });
        };
        reader.onerror = function() { reject(new Error('Không thể đọc tệp Word.')); };
        reader.readAsArrayBuffer(file);
      });
    }

    // 3. TỆP CSV, TXT, JSON
    if (ext === 'csv' || ext === 'txt' || ext === 'json' || ext === 'md') {
      var textObj = await this.extractTextFromFile(file);
      var text = textObj.text || '';
      var fileMeta = this.extractMetadataFromText(text);
      var targetGrade = fileMeta.grade || curGrade;
      
      if (ext === 'json') {
        try {
          var jsonData = JSON.parse(text);
          if (Array.isArray(jsonData) && jsonData.length === 5) {
            return {
              success: true,
              fileName: fileName,
              fileType: 'JSON',
              timetable: jsonData,
              slotsCount: 35,
              metadata: fileMeta
            };
          }
        } catch (jErr) {}
      }

      var parsed = this.parseTimetableFromText(text, targetGrade);
      return {
        success: true,
        fileName: fileName,
        fileType: ext.toUpperCase(),
        timetable: parsed.timetable,
        slotsCount: parsed.slotsCount,
        metadata: fileMeta
      };
    }

    // 4. TỆP PDF
    if (ext === 'pdf') {
      var pdfObj = await this.extractTextFromFile(file);
      var fileMeta = this.extractMetadataFromText(pdfObj.text || '');
      var targetGrade = fileMeta.grade || curGrade;
      var parsed = this.parseTimetableFromText(pdfObj.text || '', targetGrade);
      return {
        success: true,
        fileName: fileName,
        fileType: 'PDF Document',
        timetable: parsed.timetable,
        slotsCount: parsed.slotsCount,
        metadata: fileMeta
      };
    }

    throw new Error('Định dạng tệp .' + ext + ' chưa được hỗ trợ. Vui lòng chọn .xlsx, .xls, .docx, .csv hoặc .txt.');
  },

  /**
   * Trích xuất ma trận ô (2D Array) từ bảng HTML trong tệp Word (xử lý chuẩn rowspan & colspan)
   */
  extractGridFromHtmlTable: function(html) {
    var trMatches = (html || '').match(/<tr[^>]*>[\s\S]*?<\/tr>/gi) || [];
    var grid = [];

    trMatches.forEach(function(trHtml, rIdx) {
      if (!grid[rIdx]) grid[rIdx] = [];
      var cellMatches = trHtml.match(/<(td|th)[^>]*>[\s\S]*?<\/(td|th)>/gi) || [];
      var colIdx = 0;

      cellMatches.forEach(function(cellHtml) {
        while (grid[rIdx][colIdx] !== undefined) {
          colIdx++;
        }

        var rMatch = cellHtml.match(/rowspan=["']?(\d+)["']?/i);
        var rowspan = rMatch ? parseInt(rMatch[1]) : 1;

        var cMatch = cellHtml.match(/colspan=["']?(\d+)["']?/i);
        var colspan = cMatch ? parseInt(cMatch[1]) : 1;

        var text = cellHtml.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').trim();

        for (var r = 0; r < rowspan; r++) {
          var targetRow = rIdx + r;
          if (!grid[targetRow]) grid[targetRow] = [];
          for (var c = 0; c < colspan; c++) {
            grid[targetRow][colIdx + c] = text;
          }
        }
        colIdx += colspan;
      });
    });

    return grid;
  },

  /**
   * Phân tích Ma trận lưới 2D (từ Excel hoặc Word Table) thành Thời Khóa Biểu chuẩn 5 ngày
   */
  parseTimetableFromGrid: function(rows, grade) {
    var g = parseInt(grade) || 5;
    var days = [
      { day: 'Thứ Hai', dayNum: 2, morning: ['', '', '', ''], afternoon: ['', '', ''] },
      { day: 'Thứ Ba', dayNum: 3, morning: ['', '', '', ''], afternoon: ['', '', ''] },
      { day: 'Thứ Tư', dayNum: 4, morning: ['', '', '', ''], afternoon: ['', '', ''] },
      { day: 'Thứ Năm', dayNum: 5, morning: ['', '', '', ''], afternoon: ['', '', ''] },
      { day: 'Thứ Sáu', dayNum: 6, morning: ['', '', '', ''], afternoon: ['', '', ''] }
    ];

    if (!Array.isArray(rows) || rows.length === 0) {
      return { timetable: days, slotsCount: 0 };
    }

    // 1. Tìm dòng Header chứa các Thứ (Thứ 2, Thứ 3, Thứ 4, Thứ 5, Thứ 6)
    var dayColMap = {};
    var headerRowIdx = -1;

    for (var r = 0; r < Math.min(rows.length, 10); r++) {
      var row = rows[r] || [];
      for (var c = 0; c < row.length; c++) {
        var cellStr = String(row[c] || '').toLowerCase().trim();

        if (cellStr.includes('thứ 2') || cellStr.includes('thứ hai') || cellStr === 'thứ 2' || cellStr === 'hai' || cellStr === 't2') {
          dayColMap[2] = c;
          headerRowIdx = r;
        } else if (cellStr.includes('thứ 3') || cellStr.includes('thứ ba') || cellStr === 'thứ 3' || cellStr === 'ba' || cellStr === 't3') {
          dayColMap[3] = c;
          headerRowIdx = r;
        } else if (cellStr.includes('thứ 4') || cellStr.includes('thứ tư') || cellStr === 'thứ 4' || cellStr === 'tư' || cellStr === 't4') {
          dayColMap[4] = c;
          headerRowIdx = r;
        } else if (cellStr.includes('thứ 5') || cellStr.includes('thứ năm') || cellStr === 'thứ 5' || cellStr === 'năm' || cellStr === 't5') {
          dayColMap[5] = c;
          headerRowIdx = r;
        } else if (cellStr.includes('thứ 6') || cellStr.includes('thứ sáu') || cellStr === 'thứ 6' || cellStr === 'sáu' || cellStr === 't6') {
          dayColMap[6] = c;
          headerRowIdx = r;
        }
      }
      if (Object.keys(dayColMap).length >= 3) break;
    }

    if (Object.keys(dayColMap).length < 3) {
      var startCol = (rows[0] && rows[0].length >= 6) ? (rows[0].length - 5) : 2;
      dayColMap = { 2: startCol, 3: startCol + 1, 4: startCol + 2, 5: startCol + 3, 6: startCol + 4 };
      headerRowIdx = 0;
    }

    var firstDayCol = Math.min(...Object.values(dayColMap));
    var isAfternoon = false;
    var morningCounters = { 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    var afternoonCounters = { 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    var filledCount = 0;

    for (var r = headerRowIdx + 1; r < rows.length; r++) {
      var row = rows[r] || [];
      var nonDayCells = row.slice(0, firstDayCol);
      var nonDayText = nonDayCells.join(' ').toLowerCase();

      // Check session
      if (nonDayText.includes('chiều') || nonDayText.includes('chieu')) {
        isAfternoon = true;
      } else if (nonDayText.includes('sáng') || nonDayText.includes('sang')) {
        isAfternoon = false;
      }

      // Check period number (1..5)
      var slotIdx = -1;
      for (var c = 0; c < nonDayCells.length; c++) {
        var cellVal = String(nonDayCells[c] || '').trim();
        var numMatch = cellVal.match(/(?:tiết\s*)?([1-5])/i);
        if (numMatch && !cellVal.toLowerCase().includes('thứ') && !cellVal.toLowerCase().includes('buổi')) {
          if (/^\d+$/.test(cellVal) || /^tiết\s*\d+$/i.test(cellVal)) {
            slotIdx = parseInt(numMatch[1]) - 1;
          }
        }
      }

      if (slotIdx < 0) {
        slotIdx = isAfternoon ? afternoonCounters[2] : morningCounters[2];
      }

      // Check if row has any day data
      var hasAnyDayVal = false;
      for (var dayNum = 2; dayNum <= 6; dayNum++) {
        var col = dayColMap[dayNum];
        if (col !== undefined && row[col] && String(row[col]).trim()) {
          hasAnyDayVal = true;
          break;
        }
      }
      if (!hasAnyDayVal) continue;

      // Fill in days
      for (var dayNum = 2; dayNum <= 6; dayNum++) {
        var col = dayColMap[dayNum];
        var cellVal = (col !== undefined && row[col] !== undefined) ? String(row[col]).trim() : '';
        var subjKey = IntegrationService.normalizeSubjectKey(cellVal);

        var targetDay = days.find(function(d) { return d.dayNum === dayNum; });
        if (targetDay) {
          if (!isAfternoon && slotIdx < 4) {
            targetDay.morning[slotIdx] = subjKey;
            morningCounters[dayNum] = Math.max(morningCounters[dayNum], slotIdx + 1);
            if (subjKey) filledCount++;
          } else if (isAfternoon && slotIdx < 3) {
            targetDay.afternoon[slotIdx] = subjKey;
            afternoonCounters[dayNum] = Math.max(afternoonCounters[dayNum], slotIdx + 1);
            if (subjKey) filledCount++;
          }
        }
      }
    }

    return { timetable: days, slotsCount: filledCount };
  },

  /**
   * Phân tích Thời Khóa Biểu từ văn bản thuần (TXT/CSV/PDF Text)
   */
  parseTimetableFromText: function(text, grade) {
    var lines = (text || '').split(/\r?\n/).map(function(l) { return l.trim(); }).filter(Boolean);
    var grid = [];

    lines.forEach(function(line) {
      var parts = line.split(/[,;\t|]+/).map(function(p) { return p.trim(); });
      if (parts.length > 1) {
        grid.push(parts);
      } else {
        var spaceParts = line.split(/\s{2,}/).map(function(p) { return p.trim(); });
        if (spaceParts.length > 1) grid.push(spaceParts);
        else grid.push([line]);
      }
    });

    return this.parseTimetableFromGrid(grid, grade);
  },


  // =========================================================================
  // =========================================================================
  // BỘ NHỚ LƯU TRỮ TÀI LIỆU LÂU DÀI TRÊN MÁY (INDEXEDDB & LOCALSTORAGE)
  // =========================================================================
  storage: {
    DB_NAME: 'TVTH_Integration_DB',
    STORE_NAME: 'uploaded_docs',
    DB_VERSION: 1,

    openDB: function() {
      var self = this;
      return new Promise(function(resolve) {
        if (typeof indexedDB === 'undefined') {
          resolve(null);
          return;
        }
        try {
          var request = indexedDB.open(self.DB_NAME, self.DB_VERSION);
          request.onupgradeneeded = function(e) {
            var db = e.target.result;
            if (!db.objectStoreNames.contains(self.STORE_NAME)) {
              db.createObjectStore(self.STORE_NAME, { keyPath: 'id' });
            }
          };
          request.onsuccess = function(e) {
            resolve(e.target.result);
          };
          request.onerror = function(e) {
            console.warn('IndexedDB open error:', e);
            resolve(null);
          };
        } catch(err) {
          resolve(null);
        }
      });
    },

    getAllDocs: async function() {
      var db = await this.openDB();
      if (!db) {
        try {
          var raw = localStorage.getItem('tvth_saved_docs');
          return raw ? JSON.parse(raw) : [];
        } catch(e) { return []; }
      }
      var self = this;
      return new Promise(function(resolve) {
        try {
          var tx = db.transaction(self.STORE_NAME, 'readonly');
          var store = tx.objectStore(self.STORE_NAME);
          var req = store.getAll();
          req.onsuccess = function() {
            resolve(req.result || []);
          };
          req.onerror = function() {
            resolve([]);
          };
        } catch(e) {
          resolve([]);
        }
      });
    },

    saveDocs: async function(docsList) {
      var db = await this.openDB();
      if (!db) {
        try {
          localStorage.setItem('tvth_saved_docs', JSON.stringify(docsList));
        } catch(e) {}
        return true;
      }
      var self = this;
      return new Promise(function(resolve) {
        try {
          var tx = db.transaction(self.STORE_NAME, 'readwrite');
          var store = tx.objectStore(self.STORE_NAME);
          store.clear();
          docsList.forEach(function(doc) {
            store.put(doc);
          });
          tx.oncomplete = function() { resolve(true); };
          tx.onerror = function() { resolve(false); };
        } catch(e) {
          resolve(false);
        }
      });
    },

    clearAllDocs: async function() {
      try { localStorage.removeItem('tvth_saved_docs'); } catch(e) {}
      var db = await this.openDB();
      if (!db) return true;
      var self = this;
      return new Promise(function(resolve) {
        try {
          var tx = db.transaction(self.STORE_NAME, 'readwrite');
          var store = tx.objectStore(self.STORE_NAME);
          store.clear();
          tx.oncomplete = function() { resolve(true); };
          tx.onerror = function() { resolve(false); };
        } catch(e) {
          resolve(false);
        }
      });
    }
  },

  // =========================================================================
  // 3. TRÍCH XUẤT NỘI DUNG TÀI LIỆU TẢI LÊN (.DOCX, .PDF, .TXT)
  // =========================================================================

  extractTextFromFile: async function(file, onProgress) {
    if (!file) throw new Error('Vui lòng chọn tệp tài liệu.');
    var fileName = file.name || 'Tai_lieu_tich_hop';
    var ext = (fileName.split('.').pop() || '').toLowerCase();

    if (ext === 'txt' || ext === 'md' || ext === 'json' || ext === 'csv') {
      return new Promise(function(resolve, reject) {
        var reader = new FileReader();
        reader.onload = function(e) {
          var text = (e.target.result || '').trim();
          resolve({
            success: true,
            text: text,
            fileName: fileName,
            fileType: ext.toUpperCase(),
            wordCount: text ? text.split(/\s+/).length : 0
          });
        };
        reader.onerror = function() { reject(new Error('Không thể đọc tệp văn bản: ' + fileName)); };
        reader.readAsText(file, 'utf-8');
      });
    }

    if (ext === 'docx') {
      return new Promise(function(resolve, reject) {
        var reader = new FileReader();
        reader.onload = function(e) {
          if (typeof mammoth !== 'undefined') {
            mammoth.extractRawText({ arrayBuffer: e.target.result })
              .then(function(result) {
                var text = (result.value || '').trim();
                resolve({
                  success: true,
                  text: text,
                  fileName: fileName,
                  fileType: 'Word (DOCX)',
                  wordCount: text ? text.split(/\s+/).length : 0
                });
              })
              .catch(function(err) { reject(new Error('Lỗi phân tích tệp .docx: ' + err.message)); });
          } else {
            reject(new Error('Thư viện đọc Word (.docx) đang tải, vui lòng dán nội dung vào ô văn bản.'));
          }
        };
        reader.onerror = function() { reject(new Error('Lỗi khi nạp tệp Word.')); };
        reader.readAsArrayBuffer(file);
      });
    }

    if (ext === 'pdf') {
      return new Promise(function(resolve, reject) {
        if (typeof pdfjsLib === 'undefined') {
          reject(new Error('Thư viện đọc PDF đang nạp, vui lòng thử lại hoặc dán văn bản trực tiếp.'));
          return;
        }
        var reader = new FileReader();
        reader.onload = async function(e) {
          try {
            var typedarray = new Uint8Array(e.target.result);
            if (pdfjsLib.GlobalWorkerOptions) {
              pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
            }
            var loadingTask = pdfjsLib.getDocument({ data: typedarray });
            var pdf = await loadingTask.promise;
            var fullText = '';
            var maxPages = pdf.numPages; // ĐỌC TOÀN BỘ 100% TẤT CẢ CÁC TRANG (KHÔNG GIỚI HẠN)

            for (var pageNum = 1; pageNum <= maxPages; pageNum++) {
              if (typeof onProgress === 'function') {
                try { onProgress(pageNum, maxPages); } catch(pErr){}
              }
              var page = await pdf.getPage(pageNum);
              var textContent = await page.getTextContent();
              var pageText = textContent.items.map(function(item) { return item.str; }).join(' ');
              fullText += pageText + '\n';
            }

            var text = fullText.trim();
            resolve({
              success: true,
              text: text,
              fileName: fileName,
              fileType: 'PDF Document',
              pageCount: pdf.numPages,
              wordCount: text ? text.split(/\s+/).length : 0
            });
          } catch (err) {
            reject(new Error('Lỗi trích xuất PDF: ' + err.message));
          }
        };
        reader.readAsArrayBuffer(file);
      });
    }

    throw new Error('Định dạng tệp .' + ext + ' chưa được hỗ trợ. Vui lòng chọn .docx, .pdf, .txt hoặc dán văn bản trực tiếp.');
  },


  // =========================================================================
  // 4. NẠP DỮ LIỆU KHBD SỐ HÓA & ĐẢM BẢO TOÀN BỘ MÔN TRONG TUẦN
  // =========================================================================

  _loadingPromises: {},

  ensureSubjectLoaded: async function(grade, subjectId) {
    var g = parseInt(grade) || 5;
    var sId = (subjectId || 'toan').toLowerCase();
    
    var khbdDataObj = (typeof window !== 'undefined' && window.KHBD_DATA) ? window.KHBD_DATA : (typeof KHBD_DATA !== 'undefined' ? KHBD_DATA : null);
    if (khbdDataObj && khbdDataObj.isLoaded && khbdDataObj.isLoaded(g, sId)) {
      return true;
    }
    
    if (typeof document === 'undefined') return true;

    var filePath = 'js/khbd_sohoa/lop' + g + '/lop' + g + '_' + sId + '.js';
    if (!this._loadingPromises) this._loadingPromises = {};
    if (this._loadingPromises[filePath]) {
      return this._loadingPromises[filePath];
    }

    var self = this;
    this._loadingPromises[filePath] = new Promise(function(resolve) {
      var done = false;
      function finish(val) {
        if (done) return;
        done = true;
        clearTimeout(timer);
        delete self._loadingPromises[filePath];
        resolve(val !== false);
      }

      var timer = setTimeout(function() {
        finish(true);
      }, 3000);

      var existing = document.querySelector('script[src="' + filePath + '"]');
      if (existing) {
        finish(true);
        return;
      }

      var s = document.createElement('script');
      s.src = filePath;
      s.onload = function() { finish(true); };
      s.onerror = function(err) {
        console.warn('Không thể nạp tệp KHBD: ' + filePath, err);
        finish(false);
      };
      document.head.appendChild(s);
    });

    return this._loadingPromises[filePath];
  },

  ensureAllSubjectsLoadedForGrade: async function(grade) {
    var g = parseInt(grade) || 5;
    var subjs = ['toan', 'tieng_viet', 'dao_duc', 'hdtn', 'gdtc', 'am_nhac'];
    if (g <= 3) {
      subjs.push('tnxh');
      if (g === 3) subjs.push('cong_nghe');
    } else {
      subjs.push('khoa_hoc', 'lich_su_dia_ly', 'cong_nghe');
    }

    var self = this;
    var promises = subjs.map(function(s) {
      return self.ensureSubjectLoaded(g, s);
    });
    await Promise.all(promises);
    return true;
  },

  /**
   * Làm sạch tiêu đề bài dạy: loại bỏ tiền tố Tuần, chuỗi rác điều chỉnh sau bài dạy, dấu chấm lửng...
   */
  cleanLessonTitle: function(rawTitle, lessonObj, subjectName) {
    if ((!rawTitle || typeof rawTitle !== 'string') && lessonObj) {
      rawTitle = lessonObj.lessonTitle || lessonObj.title || '';
    }
    var t = (rawTitle && typeof rawTitle === 'string') ? rawTitle : '';
    t = t
      .replace(/^TUẦN\s*:\s*\d+\s*[-–—:]\s*/i, '')
      .replace(/^TUẦN\s+\d+\s*[-–—:]\s*/i, '')
      .replace(/^Tuần\s*:\s*\d+\s*[-–—:]\s*/i, '')
      .replace(/^Tuần\s+\d+\s*[-–—:]\s*/i, '')
      .trim();

    // Loại bỏ các đoạn chấm lửng/gạch ngang thừa ở đầu (placeholder từ file mẫu)
    t = t.replace(/^(?:[.…\s_–—-]{3,}\s*[-–—:]*\s*)+/g, '');

    // Loại bỏ tiền tố (X tiết) ở đầu
    t = t.replace(/^\s*\(\d+\s*tiết\)\s*[-–—\s]*/gi, '');

    // Loại bỏ tiền tố rác kiểu "MÔN: ... LỚP ... BỘ SÁCH: ... - " nếu có
    t = t.replace(/^MÔN:\s*[^–—-]+[-–—]\s*(?:LỚP\s*\d+\s*[-–—]\s*)?(?:BỘ SÁCH:[^–—-]+[-–—]\s*)?/i, '').trim();

    // Loại bỏ các đoạn văn bản rác footer hoặc điều chỉnh sau bài dạy bị dính vào đầu tiêu đề
    if (t.includes('Nội dung điều chỉnh') || t.includes('Hình thức tổ chức') || t.includes('Đồ dùng, học liệu')) {
      var matchAfter = t.match(/(?:BÀI|CHỦ ĐỀ|TIẾT|ÔN TẬP|KIỂM TRA)[\s\S]*/i);
      if (matchAfter) {
        t = matchAfter[0].trim();
      } else {
        t = t.replace(/^[-–—\s]*Nội dung điều chỉnh[\s\S]*?[-–—]\s*/i, '').trim();
      }
    }

    // Loại bỏ "SỐ TIẾT: X [TIẾT]"
    t = t.replace(/[\s\-–—•·]*[-–—]?\s*SỐ\s*TIẾT\s*:\s*\d+\s*(?:TIẾT)?/gi, ' ');

    // Loại bỏ các cụm rác dạng "- Thời gian thực hiện: ...", "(Thời gian thực hiện: ...)", "- Ngày thực hiện: ..."
    t = t.replace(/[\s\-–—•·]*[-–—]?\s*(?:Thời\s*gian|Ngày)\s*thực\s*hiện\s*:[^\-–—\(\)\n]*(?:đến[^\-–—\(\)\n]*)?/gi, ' ');
    t = t.replace(/\s*\((?:Thời\s*gian|Ngày)\s*thực\s*hiện\s*:[^\)]*\)/gi, ' ');
    t = t.replace(/[\s\-–—•·]*(?:Thời\s*gian|Ngày)\s*thực\s*hiện\s*:\s*[.\s_…/–\-]*(?:\(.*\))?/gi, ' ');

    // Loại bỏ chuỗi chấm lửng thừa ở bất kỳ vị trí nào
    t = t.replace(/[-–—]?\s*[.…]{3,}\s*[-–—]?/g, ' ');

    // Loại bỏ tiền tố/hậu tố toàn dấu chấm hoặc gạch ngang thừa
    t = t.replace(/\s*[\-–—]+\s*[\-–—]+\s*/g, ' - ');
    t = t.replace(/\s*[\-–—]+\s*$/g, '');
    t = t.replace(/^\s*[\-–—]+\s*/g, '');
    t = t.replace(/^[.\s_–—-]{3,}\s*/, '');
    t = t.replace(/\s{2,}/g, ' ').trim();

    // KIỂM TRA TIÊU ĐỀ RỖNG / GENERIC / TRÙNG TÊN MÔN VÀ TỰ ĐỘNG BÙ ĐẮP THÔNG MINH
    var normT = t.replace(/[\s\-_–—:]+/g, ' ').toUpperCase().trim();
    var normSubj = (subjectName || '').replace(/[\s\-_–—:]+/g, ' ').toUpperCase().trim();

    var isGeneric = !normT ||
      normT === 'BÀI DẠY' ||
      normT === 'KẾ HOẠCH BÀI DẠY' ||
      normT === 'GIÁO ÁN' ||
      /^(?:TUẦN\s*\d+|TIẾT\s*\d+)$/i.test(t) ||
      (normSubj && normT === normSubj) ||
      /^(?:TIẾNG VIỆT|TOÁN|ĐẠO ĐỨC|KHOA HỌC|LỊCH SỬ VÀ ĐỊA LÍ|ÂM NHẠC|CÔNG NGHỆ|HĐTN|HOẠT ĐỘNG TRẢI NGHIỆM|GDTC|GIÁO DỤC THỂ CHẤT|TỰ NHIÊN VÀ XÃ HỘI|TNXH)\s*$/i.test(t);

    if (isGeneric && lessonObj) {
      var fallbackTopic = (lessonObj.topic || '').trim();
      var fallbackPeriod = (lessonObj.period || '').trim();
      var tPeriodMatch = t.match(/tiết\s*\d+/i);
      var effectivePeriod = fallbackPeriod || (tPeriodMatch ? tPeriodMatch[0] : '');

      if (fallbackTopic) {
        if (effectivePeriod && !fallbackTopic.toLowerCase().includes(effectivePeriod.toLowerCase())) {
          return fallbackTopic + ' (' + effectivePeriod + ')';
        }
        return fallbackTopic;
      }
      if (effectivePeriod) {
        return (subjectName || 'BÀI DẠY') + ' (' + effectivePeriod + ')';
      }
    }

    return t || 'BÀI DẠY';
  },


  // =========================================================================
  // 4B. GIÁO DỤC HÒA NHẬP - DẠY HỌC PHÂN HÓA CHO HỌC SINH KHUYẾT TẬT
  // =========================================================================

  /**
   * Trích xuất năng lực cốt lõi / mục tiêu chính từ mảng YCCĐ gốc của bài dạy
   */
  extractCoreCompetenceFromLesson: function(lesson) {
    var title = lesson.lessonTitle || lesson.title || '';
    var cleanTitle = title
      .replace(/^(bài\s*\d+[\s:.-]*|tiết\s*\d+[\s:.-]*|chủ đề\s*\d+[\s:.-]*)+/i, '')
      .replace(/\(tiết\s*\d+.*?\)/i, '')
      .replace(/tiết\s*\d+[:\s-]+/i, '')
      .trim();

    var yccdArr = lesson.yccd || [];
    if (typeof yccdArr === 'string') {
      yccdArr = yccdArr.split('\n');
    }
    if (!Array.isArray(yccdArr) || yccdArr.length === 0) {
      return { raw: cleanTitle || 'kiến thức bài học', cleanTitle: cleanTitle };
    }

    // 1. Tìm các dòng mục tiêu trong "1. Năng lực đặc thù" (hoặc "1. Kiến thức, kỹ năng")
    var bullets = [];
    var inDacThu = false;
    for (var i = 0; i < yccdArr.length; i++) {
      var line = (yccdArr[i] || '').trim();
      if (/1\.\s*(năng\s*lực\s*đặc\s*thù|kiến\s*thức)/i.test(line)) {
        inDacThu = true;
        continue;
      }
      if (/2\.\s*(năng\s*lực\s*chung|phẩm\s*chất)|3\.\s*phẩm\s*chất/i.test(line)) {
        break;
      }
      if (inDacThu && /^[-+*•]/.test(line)) {
        bullets.push(line.replace(/^[-+*•]\s*/, ''));
      }
    }

    // Nếu không thấy phần Năng lực đặc thù, lấy các dòng bullet đầu tiên không phải phẩm chất/năng lực chung
    if (bullets.length === 0) {
      for (var j = 0; j < yccdArr.length; j++) {
        var l = (yccdArr[j] || '').trim();
        if (/^[-+*•]/.test(l) && !/tự chủ|giao tiếp|giải quyết|chăm chỉ|yêu nước|nhân ái|trách nhiệm|trung thực/i.test(l)) {
          bullets.push(l.replace(/^[-+*•]\s*/, ''));
        }
      }
    }

    var firstBullet = bullets[0] || '';
    if (!firstBullet) {
      return { raw: cleanTitle || 'kiến thức bài học', cleanTitle: cleanTitle };
    }

    // Làm sạch tiền tố hành chính sư phạm
    var cleaned = firstBullet
      .replace(/^(nhận thức công nghệ|năng lực đặc thù|kiến thức|kỹ năng|về kiến thức|về kỹ năng|hs|học sinh)\s*[:.-]?\s*/i, '')
      .replace(/^[-+*•]\s*/, '')
      .replace(/^(đọc thành tiếng|đọc hiểu)\s*[:.-]\s*/i, '')
      .replace(/\s*và một số (thành phần|yếu tố) khác/i, '')
      .trim();

    var mainClause = cleaned.split(/[;.]/)[0].trim();
    return {
      raw: mainClause || cleanTitle || 'kiến thức bài học',
      cleanTitle: cleanTitle
    };
  },

  /**
   * ĐÃ GỠ BỎ HOÀN TOÀN CHẾ ĐỘ NGOẠI TUYẾN / FALLBACK.
   * Hệ thống bắt buộc kết nối trực tiếp 100% với Google Gemini AI để biên soạn YCCĐ phân hóa cho học sinh khuyết tật.
   */
  generateSmartDisabilityYccd: function(lesson, disabilityConfig) {
    throw new Error('Chế độ ngoại tuyến đã được tắt hoàn toàn. Hệ thống bắt buộc kết nối trực tiếp 100% với Google Gemini AI để biên soạn YCCĐ phân hóa cho học sinh khuyết tật!');
  },

  /**
   * YCCĐ cho học sinh khuyết tật:
   * Bắt buộc sử dụng kết quả do Gemini AI trực tuyến biên soạn.
   */
  generateDisabilityYccd: function(lesson, disabilityConfig) {
    if (lesson && lesson.disabilityYccdAI) {
      return lesson.disabilityYccdAI;
    }
    throw new Error('Chưa có kết quả YCCĐ từ Gemini AI trực tuyến. Vui lòng kết nối mạng và kiểm tra API Key để AI biên soạn trực tuyến!');
  },

    _disabilityYccdCache: {},

  clearDisabilityCache: function() {
    this._disabilityYccdCache = {};
  },

  getDisabilityCacheKey: function(lesson, disabilityConfig) {
    if (!lesson) return '';
    var rate = (disabilityConfig && disabilityConfig.cognitiveRate) || 50;
    var type = (disabilityConfig && disabilityConfig.disabilityType) || 'tri_tue';
    var notes = (disabilityConfig && disabilityConfig.notes) || '';
    var seed = (disabilityConfig && disabilityConfig.variantSeed) || 0;
    var title = (lesson.lessonTitle || lesson.title || '').trim();
    var subj = lesson.subjectKey || lesson.subjectName || '';
    return subj + '::' + title + '::' + type + '::' + rate + '::' + notes + '::' + seed;
  },

  getDisabilityTypeName: function(typeKey) {
    if (typeof AIService !== 'undefined' && typeof AIService.getDisabilityTypeName === 'function') {
      return AIService.getDisabilityTypeName(typeKey);
    }
    var map = {
      'tri_tue': 'Khuyết tật trí tuệ (Tiếp thu chậm, ghi nhớ ngắn hạn)',
      'van_dong': 'Khuyết tật vận động (Hạn chế viết, thao tác)',
      'nghe_noi': 'Khuyết tật nghe - nói (Giao tiếp hạn chế)',
      'khiem_thinh': 'Khuyết tật nghe - nói (Khiếm thính)',
      'nhin': 'Khuyết tật nhìn (Thị lực kém, cần cỡ chữ lớn)',
      'khiem_thi': 'Khuyết tật nhìn (Khiếm thị)',
      'tu_ki': 'Tự kỉ / Tăng động giảm chú ý (ADHD)',
      'tu_ky': 'Rối loạn phổ tự kỉ (Tương tác hạn chế)',
      'hoc_tap': 'Khó khăn học tập đặc thù',
      'khac': 'Khuyết tật khác / Học sinh hòa nhập chung'
    };
    return map[typeKey] || 'Khuyết tật học tập';
  },

  getDisabilityGuidance: function(disabilityType, rate, notes) {
    if (typeof AIService !== 'undefined' && typeof AIService.getDisabilityGuidance === 'function') {
      return AIService.getDisabilityGuidance(disabilityType, rate, notes);
    }
    var type = disabilityType || 'tri_tue';
    var r = parseInt(rate, 10) || 50;
    var guide = '';

    var levelDescription = '';
    if (r <= 40) {
      levelDescription = `MỨC ĐỘ ĐÁP ỨNG: Khoảng ${r}% (Hạn chế nhiều / Mức độ nặng)
  + Nguyên tắc giảm tải: Tinh giản tối đa; tập trung vào tri giác trực quan trực tiếp, nhận biết tối thiểu (chỉ tranh, gọi tên, đếm các số nhỏ) và làm quen với sự trợ giúp trực tiếp (cầm tay chỉ việc) của giáo viên hoặc đồ dùng trực quan cỡ lớn.
  + Định lượng bài tập: Chỉ yêu cầu hoàn thành 1 câu hoặc 1 ý nhận biết cơ bản nhất của Bài 1; miễn hoàn toàn các bài giải toán, tính toán phức tạp hay đọc viết dài.`;
    } else if (r >= 65) {
      levelDescription = `MỨC ĐỘ ĐÁP ỨNG: Khoảng ${r}% (Mức độ nhẹ / Tiếp thu khá)
  + Nguyên tắc phân hóa: Học sinh nắm được kiến thức cốt lõi (chuẩn Bloom mức 1 và một phần mức 2); tự thực hiện bài tập nhận biết và bước đầu thông hiểu cơ bản với sự gợi ý của bạn học.
  + Định lượng bài tập: Hoàn thành khoảng ${r}% khối lượng bài tập cơ bản trong SGK (làm trọn vẹn Bài 1, Bài 2 dạng cơ bản và 1 câu đơn giản của bài toán 1 bước tính); rèn luyện tính tự giác, tự chủ.`;
    } else {
      levelDescription = `MỨC ĐỘ ĐÁP ỨNG: Khoảng ${r}% (Mức độ trung bình - Phổ biến nhất trong giáo dục hòa nhập)
  + Nguyên tắc giảm tải: Hạ bậc chuẩn nhận thức từ thông hiểu, vận dụng xuống mức NHẬN BIẾT CƠ BẢN và LÀM THEO MẪU (Bloom mức 1) với đồ dùng trực quan và bạn kèm cặp.
  + Định lượng bài tập: Hoàn thành khoảng ${r}% khối lượng bài tập nhận biết cơ bản trong SGK (Bài 1 hoặc Bài 2 dạng cơ bản theo mẫu); miễn các bài toán giải có lời văn 2-3 bước, tính thuận tiện hay nâng cao.`;
    }

    if (type === 'van_dong') {
      guide = `DẠNG TẬT: Khuyết tật vận động (Hạn chế vận động tay chân, khó cầm bút viết/vẽ hoặc thao tác thực hành)
- ${levelDescription}
- NGUYÊN TẮC SƯ PHẠM ĐẶC BIỆT: Khả năng nhận thức, tư duy và trí tuệ của học sinh HOÀN TOÀN BÌNH THƯỜNG. TUYỆT ĐỐI KHÔNG hạ thấp yêu cầu tư duy của bài học.
- ĐIỀU CHỈNH PHƯƠNG THỨC THỰC HIỆN & THỜI GIAN:
  + Cho phép học sinh trả lời miệng, chỉ bảng phụ, chọn thẻ chữ/thẻ số thay vì phải viết đoạn văn dài hay vẽ hình, kẻ bảng phức tạp.
  + Giảm bớt khối lượng viết vẽ tương ứng mức độ vận động ${r}%; gia hạn thêm thời gian làm bài; phần viết chỉ yêu cầu hoàn thành câu ngắn hoặc từ khóa.
  + Trong các hoạt động thực hành, thí nghiệm (Toán, Khoa học, Mỹ thuật, Thủ công): Học sinh tham gia cùng nhóm bạn; bạn cùng nhóm hỗ trợ các thao tác cầm nắm, vận động; học sinh thực hiện phần việc tư duy, quan sát, trả lời hoặc thao tác vừa sức.
- YÊU CẦU 2 Ý BẮT BUỘC:
  - Năng lực đặc thù: Đạt chuẩn kiến thức của bài học; điều chỉnh phương thức làm bài (trả lời miệng, chọn thẻ, giảm khối lượng viết/thao tác phù hợp mức vận động ${r}%).
  - Phẩm chất, năng lực chung: Rèn luyện nghị lực vượt khó, tự tin thể hiện suy nghĩ và tích cực phối hợp cùng bạn bè trong nhóm.`;
    } else if (type === 'nghe_noi' || type === 'khiem_thinh') {
      guide = `DẠNG TẬT: Khuyết tật nghe - nói (Khiếm thính, khó phát âm, hạn chế giao tiếp bằng lời)
- ${levelDescription}
- NGUYÊN TẮC SƯ PHẠM: Tối ưu hóa kênh thị giác trực quan (hình ảnh, sơ đồ, thẻ chữ/số in sẵn, khẩu hình, cử chỉ).
- ĐIỀU CHỈNH PHƯƠNG THỨC:
  + Cho phép học sinh thể hiện sự hiểu bài bằng hành động: chỉ vào tranh, ghép/nối thẻ từ, viết hoặc vẽ câu trả lời ra bảng con/phiếu học tập, chọn đáp án trực quan thay vì bắt buộc phát biểu hoặc đọc to trước lớp.
  + Với môn Tiếng Việt: Tập trung vào đọc hiểu qua tranh, nhìn chép từ ngữ trên phiếu; với môn Toán: thao tác trực quan trên thẻ số, bảng gài.
- YÊU CẦU 2 Ý BẮT BUỘC:
  - Năng lực đặc thù: Tiếp thu kiến thức qua kênh thị giác trực quan; thể hiện kết quả học tập bằng hành động chỉ tranh, viết bảng con hoặc chọn thẻ đáp án theo mức độ tiếp nhận ${r}%.
  - Phẩm chất, năng lực chung: Tự tin giao tiếp qua cử chỉ/bảng con, cởi mở hòa nhập và kiên nhẫn hợp tác cùng bạn học.`;
    } else if (type === 'nhin' || type === 'khiem_thi') {
      guide = `DẠNG TẬT: Khuyết tật nhìn (Thị lực kém, nhìn mờ, cần cỡ chữ lớn hoặc khiếm thị)
- ${levelDescription}
- NGUYÊN TẮC SƯ PHẠM: Tối ưu hóa kênh thính giác (lắng nghe cô giáo và bạn đọc mẫu) và xúc giác (sờ chạm vật thật, mô hình nổi, que tính).
- ĐIỀU CHỈNH PHƯƠNG THỨC:
  + Sử dụng phiếu học tập in chữ to, hình ảnh phóng to có độ tương phản cao; ngồi ở vị trí đủ ánh sáng và gần bảng.
  + Cho phép học sinh tiếp thu và trả lời qua lời nói, mô tả bằng lời thay vì yêu cầu quan sát chi tiết nhỏ trên tranh; không chấm lỗi trình bày chữ viết/hình vẽ.
- YÊU CẦU 2 Ý BẮT BUỘC:
  - Năng lực đặc thù: Tiếp thu bài học qua lời giảng và mô tả của GV/bạn kèm; thao tác trên vật thật, đồ dùng học tập kích thước lớn; trả lời miệng hoặc ghi bảng với chữ số cỡ to theo mức thị lực ${r}%.
  - Phẩm chất, năng lực chung: Chăm chú lắng nghe, chủ động giao tiếp bằng lời nói và mạnh dạn hợp tác cùng bạn học.`;
    } else if (type === 'tu_ki' || type === 'tu_ky') {
      guide = `DẠNG TẬT: Rối loạn phổ tự kỉ / Tăng động giảm chú ý (ADHD) (Hạn chế tương tác xã hội, nhạy cảm môi trường, dễ mất tập trung)
- ${levelDescription}
- NGUYÊN TẮC SƯ PHẠM: Tạo không gian học tập ổn định, chia nhỏ nhiệm vụ thành từng bước rõ ràng kèm hình ảnh trực quan (Visual schedule).
- ĐIỀU CHỈNH PHƯƠNG THỨC:
  + Cho phép học sinh hoàn thành nhiệm vụ cá nhân vừa sức, khích lệ từng tiến bộ nhỏ, tránh tạo áp lực biểu đạt trước đám đông.
  + Khi học sinh mất tập trung hoặc quá tải, cho phép nghỉ ngắn hoặc đổi sang thao tác với đồ dùng học tập trực quan.
- YÊU CẦU 2 Ý BẮT BUỘC:
  - Năng lực đặc thù: Tiếp nhận nhiệm vụ học tập qua hướng dẫn từng bước kèm hình ảnh trực quan; hoàn thành nhiệm vụ cá nhân vừa sức theo mức đáp ứng ${r}% (nhận biết và làm 1-2 bài tập cơ bản), không gây áp lực biểu đạt trước lớp.
  - Phẩm chất, năng lực chung: Giữ tâm lý vui vẻ, ổn định cảm xúc, từng bước làm quen và hòa nhập cùng bạn cùng bàn.`;
    } else if (type === 'khac' || type === 'hoc_tap') {
      guide = `DẠNG TẬT: Khó khăn học tập đặc thù / Khuyết tật khác / Học sinh hòa nhập chung
- ${levelDescription}
- NGUYÊN TẮC SƯ PHẠM: Tạo điều kiện hòa nhập tích cực, phân công nhiệm vụ vừa sức theo sở trường của học sinh; có bạn cùng bàn hỗ trợ (mô hình đôi bạn cùng tiến).
- ĐIỀU CHỈNH PHƯƠNG THỨC: Giao bài tập ở mức độ nhận biết và thực hành cơ bản; tinh giản các bài tập suy luận trừu tượng hoặc yêu cầu tốc độ nhanh.
- YÊU CẦU 2 Ý BẮT BUỘC:
  - Năng lực đặc thù: Nắm được kiến thức cốt lõi của bài học; hoàn thành khoảng ${r}% khối lượng bài tập nhận biết cơ bản với sự hỗ trợ của đồ dùng trực quan hoặc bạn học; giảm tải các bài suy luận phức tạp.
  - Phẩm chất, năng lực chung: Tự tin, không nản lòng, có ý thức hoàn thành bài tập vừa sức và hòa nhập cùng tập thể lớp.`;
    } else {
      // tri_tue
      guide = `DẠNG TẬT: Khuyết tật trí tuệ (Tiếp thu chậm, ghi nhớ ngắn hạn)
- ${levelDescription}
- NGUYÊN TẮC ĐỊNH LƯỢNG & GIẢM TẢI ${r}% THEO CHUẨN CV 2345:
  + Hạ bậc chuẩn nhận thức: Chuyển đổi từ mức độ thông hiểu, vận dụng, suy luận trừu tượng sang mức độ NHẬN BIẾT CƠ BẢN, THAO TÁC TRỰC QUAN và LÀM THEO MẪU với sự trợ giúp của giáo viên, bạn học hoặc đồ dùng học tập trực quan.
  + Giới hạn phạm vi kiến thức & bài tập cụ thể: Chỉ yêu cầu học sinh làm quen với các số nhỏ, phép tính đơn giản; hoàn thành khoảng ${r}% khối lượng bài tập nhận biết cơ bản trong SGK (chỉ định rõ Bài 1 hoặc Bài 2 dạng cơ bản theo mẫu).
  + Nêu rõ phần giảm tải: Tuyên bố rõ ràng KHÔNG bắt buộc học sinh phải làm các bài toán giải có lời văn nhiều bước tính, bài tính thuận tiện/tính nhanh hay các bài tập nâng cao.
- BÁM SÁT ĐẶC THÙ BỘ MÔN:
  + Môn Toán: Giới hạn rõ phạm vi số (số có 3-4 chữ số / số tròn trăm, tròn nghìn); phép tính đơn giản (không nhớ hoặc nhớ 1 lần trong phạm vi nhỏ); phân số cơ bản (phân số cùng mẫu số / phân số thập phân có mẫu 10, 100); chỉ định rõ hoàn thành khoảng ${r}% bài tập nhận biết ở Bài 1 hoặc Bài 2; không yêu cầu giải toán có lời văn 2-3 bước hay tính thuận tiện.
  + Môn Tiếng Việt: Đọc trơn tên bài và 1-2 câu ngắn nhất; trả lời câu hỏi nhận biết trực quan trực tiếp; nhìn chép từ ngữ hoặc câu ngắn trên phiếu; không yêu cầu viết đoạn văn dài hay phân tích.
  + Môn Khoa học, Lịch sử - Địa lý, TNXH, Đạo đức, Công nghệ: Nhận diện, chỉ đúng hình ảnh trực quan và nhắc lại 1-2 từ khóa cốt lõi của bài.
- YÊU CẦU 2 Ý BẮT BUỘC:
  - Năng lực đặc thù: [Kiến thức cốt lõi bám sát bài, giới hạn phạm vi, hoàn thành khoảng ${r}% bài tập cơ bản Bài 1/Bài 2 theo mẫu, nêu rõ nội dung giảm tải không bắt buộc].
  - Phẩm chất, năng lực chung: [Rèn luyện tính tự tin phát âm/làm bài trước bạn, tích cực hòa nhập, hợp tác cùng bạn học (mô hình bạn kèm bạn / đôi bạn cùng tiến) và nỗ lực hoàn thành nhiệm vụ vừa sức].`;
    }

    if (notes && notes.trim()) {
      guide += `\n- LƯU Ý ĐẶC THÙ TỪ GIÁO VIÊN ĐỨNG LỚP: ${notes.trim()}`;
    }
    return guide;
  },

  /**
   * Sử dụng Gemini AI để phân tích YCCĐ gốc và biên soạn lại YCCĐ phân hóa cho học sinh khuyết tật bám sát bài học
   */
  adaptLessonsDisabilityWithGemini: async function(lessons, disabilityConfig) {
    if (!lessons || !lessons.length || !disabilityConfig || !disabilityConfig.enabled) {
      return lessons;
    }

    var self = this;
    var apiKey = this.getGeminiApiKey();
    if (!apiKey) {
      throw new Error('Chưa có Gemini API Key để kết nối AI. Chế độ ngoại tuyến đã bị tắt hoàn toàn, bắt buộc kết nối trực tiếp với Google Gemini AI để biên soạn YCCĐ học sinh khuyết tật. Vui lòng cấu hình API Key!');
    }

    if (disabilityConfig.forceRefresh) {
      this._disabilityYccdCache = {};
      lessons.forEach(function(les) {
        if (les) delete les.disabilityYccdAI;
      });
    }

    // 1. Phân loại bài: nếu đã có trong cache hoặc đã có disabilityYccdAI thì dùng lại ngay
    var neededLessons = [];
    lessons.forEach(function(les) {
      if (!les) return;
      var cKey = self.getDisabilityCacheKey(les, disabilityConfig);
      if (self._disabilityYccdCache && self._disabilityYccdCache[cKey]) {
        var cached = self._disabilityYccdCache[cKey];
        if (typeof cached === 'string') {
          cached = cached.replace(/[;\s]+$/, '').trim();
          if (!cached.endsWith('.')) cached += '.';
        }
        les.disabilityYccdAI = cached;
      } else if (!les.disabilityYccdAI) {
        neededLessons.push(les);
      }
    });

    // 2. Nếu có bài cần gọi AI: bắt buộc gọi trực tuyến 100%, ném lỗi nếu không kết nối được
    if (neededLessons.length > 0) {
      var aiServiceObj = (typeof AIService !== 'undefined' ? AIService : (typeof window !== 'undefined' ? window.AIService : null));
      try {
        if (aiServiceObj && typeof aiServiceObj.adaptDisabilityYccdBatch === 'function') {
          await aiServiceObj.adaptDisabilityYccdBatch(neededLessons, disabilityConfig, apiKey);
        } else {
          await self._adaptDisabilityBatchInternal(neededLessons, disabilityConfig, apiKey);
        }
      } catch (aiErr) {
        console.error('Lỗi kết nối Gemini AI khi biên soạn YCCĐ khuyết tật:', aiErr);
        throw new Error('Không thể kết nối với Google Gemini AI để biên soạn YCCĐ học sinh khuyết tật: ' + (aiErr.message || 'Lỗi mạng hoặc API key') + '. Chế độ ngoại tuyến đã bị tắt hoàn toàn!');
      }

      // Đảm bảo 100% bài dạy đều đã được AI sinh kết quả trực tuyến thành công
      var failedLessons = [];
      neededLessons.forEach(function(les) {
        if (!les.disabilityYccdAI) {
          failedLessons.push(les.lessonTitle || les.title || 'Bài học');
        } else {
          var cKey = self.getDisabilityCacheKey(les, disabilityConfig);
          if (!self._disabilityYccdCache) self._disabilityYccdCache = {};
          self._disabilityYccdCache[cKey] = les.disabilityYccdAI;
        }
      });

      if (failedLessons.length > 0) {
        throw new Error('Gemini AI chưa thể biên soạn YCCĐ cho ' + failedLessons.length + ' bài dạy (' + failedLessons.slice(0, 3).join(', ') + '...). Chế độ ngoại tuyến đã tắt, vui lòng thử lại!');
      }
    }

    // 3. Chèn vào mục I. YCCĐ của từng bài
    lessons.forEach(function(les) {
      self.injectDisabilityIntoLesson(les, disabilityConfig);
    });

    return lessons;
  },

  /**
   * Bộ xử lý nội bộ gửi batch bài dạy trực tiếp cho Gemini AI để biên soạn YCCĐ khuyết tật
   */
  _adaptDisabilityBatchInternal: async function(lessons, disabilityConfig, apiKey) {
    if (!lessons || !lessons.length) return lessons;
    var rate = parseInt(disabilityConfig.cognitiveRate, 10) || 50;
    var typeName = disabilityConfig.disabilityTypeName || (typeof AIService !== 'undefined' && AIService.getDisabilityTypeName ? AIService.getDisabilityTypeName(disabilityConfig.disabilityType) : '') || 'Khuyết tật học tập';
    var notes = (disabilityConfig.notes || '').trim();
    var guidance = (typeof AIService !== 'undefined' && AIService.getDisabilityGuidance)
      ? AIService.getDisabilityGuidance(disabilityConfig.disabilityType, rate, notes)
      : ('Dạng tật: ' + typeName + ', tỉ lệ nhận thức: ' + rate + '%. Hãy biên soạn YCCĐ chuẩn mực sư phạm, vừa sức theo CV 2345.');

    var itemsToSend = lessons.map(function(les, index) {
      var title = (les.lessonTitle || les.title || ('Bài học ' + (index + 1))).trim();
      var subj = les.subjectName || les.subject || (IntegrationService.getSubjectDisplayName ? IntegrationService.getSubjectDisplayName(les.subjectKey) : '') || '';
      var rawYccd = les.yccd || [];
      if (typeof rawYccd === 'string') rawYccd = rawYccd.split('\n');
      var specificYccd = [];
      var inDacThu = false;
      for (var i = 0; i < rawYccd.length; i++) {
        var line = (rawYccd[i] || '').trim();
        if (/học sinh khuyết tật/i.test(line)) continue;
        if (/1\.\s*(năng\s*lực\s*đặc\s*thù|kiến\s*thức)/i.test(line)) { inDacThu = true; continue; }
        if (/2\.\s*(năng\s*lực\s*chung|phẩm\s*chất)|3\.\s*phẩm\s*chất|4\.\s*tích\s*hợp/i.test(line)) { inDacThu = false; break; }
        if (inDacThu && line) specificYccd.push(line);
      }
      if (specificYccd.length === 0) {
        specificYccd = rawYccd.filter(function(l) {
          return l && !/học sinh khuyết tật|tự chủ|giao tiếp|giải quyết|chăm chỉ|yêu nước|nhân ái|trách nhiệm|trung thực/i.test(l);
        }).slice(0, 4);
      }
      return {
        id: index,
        title: title,
        subject: subj,
        originalYccd: specificYccd.length ? specificYccd : [(les.topic || title)]
      };
    });

    var prompt = `Bạn là Chuyên gia Phương pháp Dạy học Tiểu học và Giáo dục Hòa nhập (Chương trình GDPT 2018, Thông tư 03/2018/TT-BGDĐT, chuẩn Công văn 2345/BGDĐT-GDTH).

NHIỆM VỤ:
Dưới đây là danh sách các bài dạy kèm YÊU CẦU CẦN ĐẠT (YCCĐ) GỐC của từng bài.
Dựa vào YCCĐ GỐC của TỪNG BÀI DẠY, hãy biên soạn lại nội dung YCCĐ phân hóa chi tiết, định lượng cụ thể theo mức nhận thức ${rate}% (chuẩn Thông tư 03 và CV 2345) dành riêng cho học sinh khuyết tật học hòa nhập trong lớp.

THÔNG TIN HỌC SINH KHUYẾT TẬT:
- Dạng tật: ${typeName}
- Mức độ nhận thức / đáp ứng: khoảng ${rate}% so với chuẩn chung của lớp
${notes ? ('- Ghi chú đặc thù từ giáo viên: ' + notes) : ''}

HƯỚNG DẪN ĐIỀU CHỈNH SƯ PHẠM DÀNH RIÊNG CHO DẠNG TẬT NÀY:
${guidance}

DANH SÁCH BÀI DẠY VÀ YCCĐ GỐC:
${JSON.stringify(itemsToSend, null, 2)}

QUY TẮC BẮT BUỘC ĐẢM BẢO CHUẨN MỰC SƯ PHẠM ĐỊNH LƯỢNG (CHI TIẾT & ĐO LƯỜNG ĐƯỢC - CÁCH 2):
1. VĂN PHONG SƯ PHẠM: Chuẩn mực, ấm áp, khích lệ sự hòa nhập và tiến bộ của học sinh.
2. CẤU TRÚC BẮT BUỘC CHO MỖI BÀI DẠY PHẢI CÓ ĐỦ 2 GẠCH ĐẦU DÒNG (PHÂN TÁCH BẰNG DẤU XUỐNG DÒNG \\n):
   - Năng lực đặc thù: [Chỉ rõ kiến thức cốt lõi bám sát bài, giới hạn phạm vi số/kiến thức cụ thể (ví dụ môn Toán: số có bao nhiêu chữ số, phép tính cụ thể nào...), định lượng rõ hoàn thành khoảng ${rate}% khối lượng bài tập nhận biết cơ bản trong SGK (chỉ định rõ Bài 1 hoặc Bài 2 theo mẫu), và loại trừ rõ phần giảm tải không bắt buộc làm (không yêu cầu giải toán có lời văn 2-3 bước tính hay bài tính thuận tiện, bài nâng cao)].
   - Phẩm chất, năng lực chung: [Rèn luyện tính tự tin phát âm/làm bài trước bạn, tích cực hòa nhập, hợp tác cùng bạn học (mô hình bạn kèm bạn / đôi bạn cùng tiến) và có ý thức nỗ lực hoàn thành nhiệm vụ vừa sức].
3. ĐỊNH DẠNG XUẤT RA CHÍNH XÁC:
   "- Năng lực đặc thù: [Nội dung chi tiết định lượng bám sát bài]...\\n- Phẩm chất, năng lực chung: [Nội dung hòa nhập, tự tin, hợp tác]..."

HÃY TRẢ VỀ KẾT QUẢ DƯỚI DẠNG MẢNG JSON THUẦN TÚY (không kèm mã markdown \`\`\`json):
[
  {
    "id": 0,
    "disabilityYccd": "- Năng lực đặc thù: ...\\n- Phẩm chất, năng lực chung: ..."
  }
]`;

    var rawResponse = '';
    if (typeof AIService !== 'undefined' && typeof AIService.callGeminiApi === 'function') {
      rawResponse = await AIService.callGeminiApi(apiKey, prompt, { temperature: 0.4, maxTokens: 4000 });
    } else {
      rawResponse = await this.callGeminiApiDirect(apiKey, prompt, { temperature: 0.4, maxTokens: 4000 });
    }

    var parsed = (typeof AIService !== 'undefined' && typeof AIService.parseJsonSafely === 'function') ? AIService.parseJsonSafely(rawResponse) : null;
    if (!parsed) {
      try {
        var clean = rawResponse.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/, '').trim();
        parsed = JSON.parse(clean);
      } catch (e) {
        var s = rawResponse.indexOf("[");
        var end = rawResponse.lastIndexOf("]");
        if (s !== -1 && end > s) {
          try { parsed = JSON.parse(rawResponse.substring(s, end + 1)); } catch (e2) {}
        }
      }
    }
    if (!Array.isArray(parsed) || parsed.length === 0) {
      throw new Error('AI không trả về kết quả mảng JSON hợp lệ cho danh sách bài dạy.');
    }

    parsed.forEach(function(item) {
      var idx = item.id;
      if (typeof idx === 'number' && lessons[idx] && item.disabilityYccd) {
        var cleaned = item.disabilityYccd
          .replace(/[;\s]+$/, '')
          .trim();
        lessons[idx].disabilityYccdAI = cleaned;
      }
    });

    var missingCount = 0;
    lessons.forEach(function(les) {
      if (!les.disabilityYccdAI) missingCount++;
    });
    if (missingCount > 0) {
      throw new Error('Gemini AI chưa hoàn thành đủ bài dạy trong nhóm (thiếu ' + missingCount + ' bài). Chế độ ngoại tuyến đã bị tắt hoàn toàn, vui lòng thử lại!');
    }

    return lessons;
  },

  /**
   * Gọi Gemini API trực tiếp nếu AIService chưa nạp xong
   */
  callGeminiApiDirect: async function(apiKey, prompt, options) {
    var opt = options || {};
    var models = ["gemini-flash-lite-latest", "gemini-3.5-flash-lite", "gemini-3.1-flash-lite", "gemini-3.6-flash", "gemini-2.5-flash", "gemini-flash-latest"];
    var lastError = null;

    for (var m = 0; m < models.length; m++) {
      var modelName = models[m];
      try {
        var genConfig = { temperature: typeof opt.temperature === 'number' ? opt.temperature : 0.3 };
        if (opt.maxTokens) genConfig.maxOutputTokens = opt.maxTokens;
        if (modelName.indexOf("2.5") !== -1) genConfig.thinkingConfig = { thinkingBudget: 0 };

        var controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
        var timeoutId = controller ? setTimeout(function() { controller.abort(); }, 30000) : null;
        var fetchOpts = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: genConfig
          })
        };
        if (controller) fetchOpts.signal = controller.signal;

        var response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/" + modelName + ":generateContent?key=" + apiKey, fetchOpts);
        if (timeoutId) clearTimeout(timeoutId);

        if (response.ok) {
          var data = await response.json();
          var rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
          if (rawText) return rawText;
        } else {
          var errJson = await response.json().catch(function(){ return {}; });
          lastError = errJson.error?.message || response.statusText;
        }
      } catch (e) {
        if (timeoutId) clearTimeout(timeoutId);
        lastError = (e.name === 'AbortError') ? 'Quá thời gian kết nối AI (30s)' : e.message;
      }
    }
    throw new Error(lastError || "Không thể kết nối Gemini API");
  },

  /**
   * Biên soạn YCCĐ cho một bài dạy đơn lẻ
   */
  adaptSingleLessonDisability: async function(lesson, disabilityConfig) {
    if (!lesson) return '';
    var list = [lesson];
    await this.adaptLessonsDisabilityWithGemini(list, disabilityConfig);
    return lesson.disabilityYccdAI || '';
  },

  /**
   * Kiểm tra một dòng văn bản có thuộc nội dung giáo dục hòa nhập / học sinh khuyết tật (Mục 5) hay không
   */
  isDisabilityLine: function(line) {
    if (!line || typeof line !== 'string') return false;
    var l = line.trim();
    if (!l) return false;

    // Không bao giờ nhận diện nhầm các mục chuẩn của giáo án
    if (/^\s*1\.\s*(?:năng\s*lực\s*đặc\s*thù|kiến\s*thức)/i.test(l)) return false;
    if (/^\s*2\.\s*(?:năng\s*lực\s*chung|phẩm\s*chất)/i.test(l)) return false;
    if (/^\s*3\.\s*phẩm\s*chất/i.test(l)) return false;
    if (/^\s*4\.\s*tích\s*hợp/i.test(l)) return false;

    // Tiêu đề Mục 5
    if (/^5\.\s*điều\s*chỉnh\s*đối\s*với\s*học\s*sinh\s*(?:khuyết\s*tật|hòa\s*nhập)/i.test(l)) return true;

    // Từ khóa khuyết tật / hòa nhập
    if (/học\s*sinh\s*khuyết\s*tật|học\s*sinh\s*hòa\s*nhập|đối\s*với\s*học\s*sinh\s*(?:khuyết\s*tật|hòa\s*nhập)|giáo\s*dục\s*hòa\s*nhập/i.test(l)) return true;

    // Định dạng 2 gạch đầu dòng do AI phân hóa sinh ra
    if (/^[-*•+–—]?\s*năng\s*lực\s*đặc\s*thù\s*:/i.test(l)) return true;
    if (/^[-*•+–—]?\s*phẩm\s*chất[,\s]+năng\s*lực\s*chung\s*:/i.test(l)) return true;

    return false;
  },

  /**
   * Làm sạch triệt để mọi dòng Mục 5 / YCCĐ khuyết tật khỏi bài dạy (Bảo đảm tính lũy đẳng)
   */
  cleanDisabilityFromLesson: function(lesson) {
    if (!lesson) return lesson;
    var self = this;
    if (Array.isArray(lesson.yccd)) {
      lesson.yccd = lesson.yccd.filter(function(line) {
        if (typeof line !== 'string') return true;
        var subLines = line.split(/\r?\n/);
        for (var i = 0; i < subLines.length; i++) {
          if (self.isDisabilityLine(subLines[i])) return false;
        }
        return true;
      });
    }
    return lesson;
  },

  /**
   * Chèn yêu cầu cần đạt phân hóa cho học sinh khuyết tật vào cuối mục I. YCCĐ của bài dạy
   * Bảo đảm tính lũy đẳng (Idempotent): gọi nhiều lần không bao giờ bị nhân bản Mục 5
   */
  injectDisabilityIntoLesson: function(lesson, disabilityConfig) {
    if (!lesson) return lesson;
    if (!Array.isArray(lesson.yccd)) {
      lesson.yccd = lesson.yccd ? [lesson.yccd] : [];
    }

    // 1. Luôn làm sạch dòng khuyết tật cũ nếu có trước đó
    this.cleanDisabilityFromLesson(lesson);

    // 2. Nếu không bật cấu hình khuyết tật, dừng lại ngay sau khi đã làm sạch
    if (!disabilityConfig || !disabilityConfig.enabled) {
      return lesson;
    }

    // 3. Chỉ chèn khi có kết quả sinh từ Gemini AI
    var disabilityLine = lesson.disabilityYccdAI;
    if (disabilityLine && typeof disabilityLine === 'string' && disabilityLine.trim()) {
      var cleanLine = disabilityLine.replace(/[;\s]+$/, '').trim();
      if (!cleanLine.endsWith('.')) cleanLine += '.';
      lesson.yccd.push(cleanLine);
    }

    return lesson;
  },

  // =========================================================================
  // 5. GHÉP TUẦN TỰ TOÀN BỘ KHBD TRONG TUẦN THEO THỜI KHÓA BIỂU
  // =========================================================================

  isDoublePeriodLesson: function(title, period) {
    var rawTitle = (title || '').trim();
    var t = (rawTitle + ' ' + (period || '')).toLowerCase();

    // 1. Tiết đôi thực thụ (ưu tiên phát hiện dải tiết): "Tiết 1 - 2", "Tiết 1, 2", "Tiết 1-2", "2 tiết", "Thời lượng: 2 tiết", "Tiết đôi"
    if (/ti[eế]t\s*\d+\s*[-–,]\s*\d+/i.test(t)) return true;
    if (/(?:th[oờ]i\s*l[uư][oợ]ng\s*:\s*2\s*ti[eế]t|2\s*ti[eế]t|ti[eế]t\s*đ[oô]i)/i.test(t)) return true;

    // 2. Nếu đã có hậu tố tiết con cụ thể (- Tiết 1:, - Tiết 2:, (Tiết 1), (Tiết 2), (T1), (T2)) mà không phải dải tiết -> Tiết đơn!
    if (/(?:-\s*ti[eế]t\s*\d+|\(ti[eế]t\s*\d+\)|\(t\d+\))/i.test(rawTitle)) {
      return false;
    }

    // 3. Nếu chỉ ghi "Số tiết: 2" (thường là tổng số tiết chủ đề dạy trong nhiều tuần, VD Đạo đức) -> không phải tiết đôi cùng tuần
    if (/s[oố]\s*ti[eế]t\s*:\s*\d+/i.test(t) && !/th[oờ]i\s*l[uư][oợ]ng\s*:\s*2/i.test(t)) {
      return false;
    }

    return false;
  },

  unpackWeeklyLessons: function(rawLessons, sKey, weekNum, grade) {
    var units = [];
    var currentTopic = '';
    var validLessons = [];
    var self = this;

    (rawLessons || []).forEach(function(les, r_idx) {
      var rawTables = les.tables || [];
      var tables = rawTables.filter(function(tbl) {
        if (!tbl || !Array.isArray(tbl) || tbl.length === 0) return false;
        if (tbl.length === 1) {
          var r0 = tbl[0];
          if (!Array.isArray(r0) || r0.length <= 1) return false;
          var text = r0.join(' ').trim().toLowerCase();
          if (text.length < 100 && (text.includes('kế hoạch bài dạy') || text.includes('môn') || text.includes('tuần') || text.includes('chủ đề'))) {
            return false;
          }
        }
        if (tbl.length === 2) {
          var allText = tbl.map(function(r) { return Array.isArray(r) ? r.join(' ') : ''; }).join(' ').trim().toLowerCase();
          if (allText.length < 120 && (allText.includes('kế hoạch bài dạy') || allText.includes('giáo viên') || allText.includes('trường tiểu học'))) {
            return false;
          }
        }
        return true;
      });
      if (tables.length === 0 && rawTables.length > 0) tables = rawTables;

      var hasRealContent = false;
      for (var i = 0; i < tables.length; i++) {
        if (tables[i] && tables[i].length > 0) {
          hasRealContent = true;
          break;
        }
      }
      var title = les.lessonTitle || les.title || '';
      if (!hasRealContent && (!les.activities || les.activities.length === 0)) {
        currentTopic = title;
        return;
      }
      var lesCopy = JSON.parse(JSON.stringify(les));
      lesCopy.tables = tables;
      if (currentTopic && !lesCopy.topic) lesCopy.topic = currentTopic;
      validLessons.push({ origIdx: r_idx, lesson: lesCopy });
    });

    validLessons.forEach(function(item) {
      var orig_r_idx = item.origIdx;
      var les = item.lesson;
      var tables = les.tables || [];
      var title = les.lessonTitle || les.title || '';
      var period = les.period || '';
      var isDouble = self.isDoublePeriodLesson(title, period);

      if (tables.length > 1 && !isDouble) {
        // Multi-table lesson (e.g. HĐTN in Lớp 1, 2, 4 có 3 bảng: SHDC, HĐGD theo chủ đề, Sinh hoạt lớp)
        tables.forEach(function(tbl, t_idx) {
          var subLes = JSON.parse(JSON.stringify(les));
          subLes.tables = [tbl];
          subLes.subUnitIndex = t_idx + 1;

          if (sKey === 'hdtn' || sKey === 'shcn') {
            if (t_idx === 0) {
              subLes.lessonTitle = 'SINH HOẠT DƯỚI CỜ: ' + (title.toLowerCase().includes('khai giảng') ? 'THAM GIA LỄ KHAI GIẢNG NĂM HỌC MỚI' : (title.toLowerCase().includes('chào cờ') ? title : 'CHỦ ĐỀ ĐẦU TUẦN'));
              subLes.period = 'Tiết 1';
            } else if (t_idx === 1) {
              subLes.lessonTitle = 'HOẠT ĐỘNG GIÁO DỤC THEO CHỦ ĐỀ' + (title ? (': ' + title.replace(/^KẾ HOẠCH BÀI DẠY MÔN HOẠT ĐỘNG TRẢI NGHIỆM\s*(?:LỚP\s*\d+)?/i, '').trim()) : '');
              subLes.period = 'Tiết 2';
            } else if (t_idx === 2) {
              subLes.lessonTitle = 'SINH HOẠT LỚP: SƠ KẾT TUẦN & PHƯƠNG HƯỚNG TUẦN TIẾP THEO';
              subLes.period = 'Tiết 3';
            } else {
              subLes.lessonTitle = (title || 'BÀI DẠY') + ' (Tiết ' + (t_idx + 1) + ')';
              subLes.period = 'Tiết ' + (t_idx + 1);
            }
          } else {
            subLes.lessonTitle = (title || 'BÀI DẠY') + ' (Tiết ' + (t_idx + 1) + ')';
            subLes.period = 'Tiết ' + (t_idx + 1);
          }

          units.push({
            lesson: subLes,
            rawIndex: orig_r_idx,
            isDouble: false,
            part: 1,
            tableIndex: t_idx
          });
        });
      } else if (isDouble) {
        units.push({
          lesson: les,
          rawIndex: orig_r_idx,
          isDouble: true,
          part: 1
        });
        units.push({
          lesson: les,
          rawIndex: orig_r_idx,
          isDouble: true,
          part: 2
        });
      } else {
        units.push({
          lesson: les,
          rawIndex: orig_r_idx,
          isDouble: false,
          part: 1
        });
      }
    });

    return units;
  },

  /**
   * Xếp toàn bộ bài dạy các môn trong tuần theo đúng thứ tự Tiết & Thứ của TKB
   * Hỗ trợ chuẩn xác: Tiết đôi liên tục -> in 1 lần tính 2 tiết; Tiết đôi không liên tục -> in 2 lần (Tiết 1, Tiết 2)
   */
  buildWeeklyPlanByTimetable: async function(grade, weekNumber, customTimetable, integratedMap, overwriteLegacy, options) {
    var g = parseInt(grade) || 5;
    var wNum = parseInt(weekNumber) || 1;
    var timetable = customTimetable || this.getDefaultTimetable(g);
    var shouldClean = (overwriteLegacy !== false);
    var opt = options || {};

    await this.ensureAllSubjectsLoadedForGrade(g);

    var khbdDataObj = (typeof window !== 'undefined' && window.KHBD_DATA) ? window.KHBD_DATA : (typeof KHBD_DATA !== 'undefined' ? KHBD_DATA : null);

    // 1. Thu thập toàn bộ các ô có tiết học theo thứ tự thời gian trong tuần
    var allSlots = [];
    timetable.forEach(function(dayItem) {
      var dayName = dayItem.day || ('Thứ ' + dayItem.dayNum);
      (dayItem.morning || []).forEach(function(sKey, mIdx) {
        var cleanKey = IntegrationService.normalizeSubjectKey(sKey || '');
        if (cleanKey && cleanKey !== '-' && cleanKey !== '—') {
          allSlots.push({
            dayName: dayName,
            dayNum: dayItem.dayNum,
            session: 'Sáng',
            periodSlot: mIdx + 1,
            subjectKey: cleanKey
          });
        }
      });
      (dayItem.afternoon || []).forEach(function(sKey, aIdx) {
        var cleanKey = IntegrationService.normalizeSubjectKey(sKey || '');
        if (cleanKey && cleanKey !== '-' && cleanKey !== '—') {
          allSlots.push({
            dayName: dayName,
            dayNum: dayItem.dayNum,
            session: 'Chiều',
            periodSlot: aIdx + 1,
            subjectKey: cleanKey
          });
        }
      });
    });

    // 2. Gom nhóm các ô theo từng môn học để nắm vị trí trên TKB
    var subjectSlotMap = {};
    allSlots.forEach(function(slot, slotIndex) {
      if (!subjectSlotMap[slot.subjectKey]) subjectSlotMap[slot.subjectKey] = [];
      subjectSlotMap[slot.subjectKey].push({ slotIndex: slotIndex, slot: slot });
    });

    var slotToLessonMap = {};
    var skippedSlotIndices = {};

    // 3. Xử lý từng môn học theo tiến trình chuẩn và quy tắc Tiết đôi
    for (var sKey in subjectSlotMap) {
      var sSlots = subjectSlotMap[sKey];

      var weekData = khbdDataObj ? khbdDataObj.getWeekPlan(g, sKey, wNum) : null;
      var rawLessons = (weekData && weekData.lessons) ? weekData.lessons : [];

      // Mở rộng bài học theo từng đơn vị tiết chuẩn
      var expandedLessonUnits = this.unpackWeeklyLessons(rawLessons, sKey, wNum, g);

      var unitIdx = 0;
      for (var i = 0; i < sSlots.length; i++) {
        if (skippedSlotIndices[sSlots[i].slotIndex]) continue;

        var curSlotEntry = sSlots[i];
        var nextSlotEntry = (i + 1 < sSlots.length) ? sSlots[i + 1] : null;

        var curUnit = expandedLessonUnits[unitIdx];
        var nextUnit = (unitIdx + 1 < expandedLessonUnits.length) ? expandedLessonUnits[unitIdx + 1] : null;

        // KIỂM TRA BÀI TIẾT ĐÔI
        if (curUnit && curUnit.isDouble && curUnit.part === 1 && nextUnit && nextUnit.isDouble && nextUnit.part === 2 && curUnit.rawIndex === nextUnit.rawIndex) {
          // Kiểm tra xem 2 slot TKB có LIÊN TỤC (cùng ngày, cùng buổi, liền kề số tiết) không
          var isConsecutive = nextSlotEntry &&
                              (nextSlotEntry.slot.dayNum === curSlotEntry.slot.dayNum) &&
                              (nextSlotEntry.slot.session === curSlotEntry.slot.session) &&
                              (nextSlotEntry.slot.periodSlot === curSlotEntry.slot.periodSlot + 1);

          if (isConsecutive) {
            // QUY TẮC: 2 TIẾT LIÊN TỤC -> IN 1 LẦN TÍNH 2 TIẾT
            var baseLesson = curUnit.lesson;
            var matchInteg = integratedMap ? integratedMap[sKey + '_' + wNum + '_' + curUnit.rawIndex] : null;
            var lessonItem = matchInteg ? IntegrationService.injectIntegrationIntoLesson(baseLesson, matchInteg, shouldClean) : (shouldClean ? IntegrationService.cleanLegacyIntegrationFromLesson(baseLesson) : JSON.parse(JSON.stringify(baseLesson)));

            lessonItem.dayName = curSlotEntry.slot.dayName;
            lessonItem.session = curSlotEntry.slot.session;
            lessonItem.periodSlot = curSlotEntry.slot.periodSlot + ' - ' + nextSlotEntry.slot.periodSlot;
            lessonItem.period = 'Tiết ' + curSlotEntry.slot.periodSlot + ' - ' + nextSlotEntry.slot.periodSlot + ' (Thời lượng 2 tiết)';
            lessonItem.subjectKey = sKey;
            lessonItem.subjectName = IntegrationService.getSubjectDisplayName(sKey);
            lessonItem.week = wNum;
            lessonItem.grade = g;
            if (!lessonItem.title && lessonItem.lessonTitle) lessonItem.title = lessonItem.lessonTitle;
            if (!lessonItem.lessonTitle && lessonItem.title) lessonItem.lessonTitle = lessonItem.title;

            slotToLessonMap[curSlotEntry.slotIndex] = lessonItem;
            skippedSlotIndices[nextSlotEntry.slotIndex] = true;
            unitIdx += 2;
            continue;
          } else {
            // QUY TẮC: 2 TIẾT KHÔNG LIÊN TỤC -> IN LẦN 1 (TIẾT 1)
            var baseLesson1 = curUnit.lesson;
            var matchInteg1 = integratedMap ? integratedMap[sKey + '_' + wNum + '_' + curUnit.rawIndex] : null;
            var lessonItem1 = matchInteg1 ? IntegrationService.injectIntegrationIntoLesson(baseLesson1, matchInteg1, shouldClean) : (shouldClean ? IntegrationService.cleanLegacyIntegrationFromLesson(baseLesson1) : JSON.parse(JSON.stringify(baseLesson1)));

            lessonItem1.dayName = curSlotEntry.slot.dayName;
            lessonItem1.session = curSlotEntry.slot.session;
            lessonItem1.periodSlot = curSlotEntry.slot.periodSlot;
            lessonItem1.period = 'Tiết ' + curSlotEntry.slot.periodSlot + ' (Tiết 1)';
            var rawTitle1 = (baseLesson1.lessonTitle || baseLesson1.title || '');
            if (/ti[eế]t\s*1\s*[-–,]\s*2/i.test(rawTitle1)) {
              lessonItem1.lessonTitle = rawTitle1.replace(/ti[eế]t\s*1\s*[-–,]\s*2/i, 'TIẾT 1');
            } else {
              lessonItem1.lessonTitle = rawTitle1 + ' (Tiết 1)';
            }
            lessonItem1.title = lessonItem1.lessonTitle;
            lessonItem1.subjectKey = sKey;
            lessonItem1.subjectName = IntegrationService.getSubjectDisplayName(sKey);
            lessonItem1.week = wNum;
            lessonItem1.grade = g;

            slotToLessonMap[curSlotEntry.slotIndex] = lessonItem1;
            unitIdx += 1;
            continue;
          }
        } else if (curUnit && curUnit.isDouble && curUnit.part === 2) {
          // QUY TẮC: 2 TIẾT KHÔNG LIÊN TỤC -> IN LẦN 2 (TIẾT 2)
          var baseLesson2 = curUnit.lesson;
          var matchInteg2 = integratedMap ? integratedMap[sKey + '_' + wNum + '_' + curUnit.rawIndex] : null;
          var lessonItem2 = matchInteg2 ? IntegrationService.injectIntegrationIntoLesson(baseLesson2, matchInteg2, shouldClean) : (shouldClean ? IntegrationService.cleanLegacyIntegrationFromLesson(baseLesson2) : JSON.parse(JSON.stringify(baseLesson2)));

          lessonItem2.dayName = curSlotEntry.slot.dayName;
          lessonItem2.session = curSlotEntry.slot.session;
          lessonItem2.periodSlot = curSlotEntry.slot.periodSlot;
          lessonItem2.period = 'Tiết ' + curSlotEntry.slot.periodSlot + ' (Tiết 2)';
          var rawTitle2 = (baseLesson2.lessonTitle || baseLesson2.title || '');
          if (/ti[eế]t\s*1\s*[-–,]\s*2/i.test(rawTitle2)) {
            lessonItem2.lessonTitle = rawTitle2.replace(/ti[eế]t\s*1\s*[-–,]\s*2/i, 'TIẾT 2');
          } else {
            lessonItem2.lessonTitle = rawTitle2 + ' (Tiết 2)';
          }
          lessonItem2.title = lessonItem2.lessonTitle;
          lessonItem2.subjectKey = sKey;
          lessonItem2.subjectName = IntegrationService.getSubjectDisplayName(sKey);
          lessonItem2.week = wNum;
          lessonItem2.grade = g;

          slotToLessonMap[curSlotEntry.slotIndex] = lessonItem2;
          unitIdx += 1;
          continue;
        }

        // Bài học thông thường (1 tiết)
        var singleLesson = null;
        if (curUnit && curUnit.lesson) {
          var baseLessonS = curUnit.lesson;
          var matchIntegS = integratedMap ? integratedMap[sKey + '_' + wNum + '_' + curUnit.rawIndex] : null;
          singleLesson = matchIntegS ? IntegrationService.injectIntegrationIntoLesson(baseLessonS, matchIntegS, shouldClean) : (shouldClean ? IntegrationService.cleanLegacyIntegrationFromLesson(baseLessonS) : JSON.parse(JSON.stringify(baseLessonS)));
        } else {
          var dispName = IntegrationService.getSubjectDisplayName(sKey);
          singleLesson = {
            title: dispName + ' - Luyện tập / Vận dụng (Tiết ' + (unitIdx + 1) + ')',
            lessonTitle: dispName + ' - Luyện tập / Vận dụng (Tiết ' + (unitIdx + 1) + ')',
            period: 'Tiết ' + curSlotEntry.slot.periodSlot,
            yccd: [
              '1. Năng lực đặc thù: Ôn tập, củng cố và phát triển năng lực môn ' + dispName + ' theo yêu cầu cần đạt của chương trình.',
              '2. Năng lực chung: Tự chủ và tự học; Giao tiếp và hợp tác trong các hoạt động học tập.',
              '3. Phẩm chất: Chăm chỉ, trách nhiệm, tích cực hoàn thành nhiệm vụ.'
            ],
            dodung: [
              '1. Giáo viên: SGK, máy tính, ti vi / bài giảng điện tử, phiếu học tập rèn luyện.',
              '2. Học sinh: SGK, vở bài tập, bảng con, đồ dùng học tập cá nhân.'
            ],
            tables: [[
              ['* Khởi động (3 - 5 phút): Tạo tâm thế hào hứng và kết nối kiến thức bài học.'],
              ['GV tổ chức trò chơi kết nối, khơi gợi nội dung bài học.', 'HS tham gia trò chơi sôi nổi, hào hứng vào bài.'],
              ['* Luyện tập, thực hành (20 - 25 phút): Củng cố kiến thức và rèn luyện kĩ năng.'],
              ['GV giao nhiệm vụ bài tập phù hợp đối tượng HS, hướng dẫn và hỗ trợ kịp thời.', 'HS làm bài cá nhân/nhóm đôi, tự tin trình bày và đổi vở kiểm tra chéo.'],
              ['* Vận dụng (3 - 5 phút): Ghi nhớ và vận dụng vào thực tế.'],
              ['GV nhận xét, tuyên dương và dặn dò HS thực hành vận dụng sau tiết học.', 'HS lắng nghe, ghi nhớ và thực hiện theo hướng dẫn.']
            ]]
          };
        }

        singleLesson.dayName = curSlotEntry.slot.dayName;
        singleLesson.session = curSlotEntry.slot.session;
        singleLesson.periodSlot = curSlotEntry.slot.periodSlot;
        singleLesson.subjectKey = sKey;
        singleLesson.subjectName = IntegrationService.getSubjectDisplayName(sKey);
        singleLesson.week = wNum;
        singleLesson.grade = g;
        if (!singleLesson.title && singleLesson.lessonTitle) singleLesson.title = singleLesson.lessonTitle;
        if (!singleLesson.lessonTitle && singleLesson.title) singleLesson.lessonTitle = singleLesson.title;

        slotToLessonMap[curSlotEntry.slotIndex] = singleLesson;
        unitIdx += 1;
      }
    }

    // 4. Lắp ráp lại toàn bộ bài dạy theo đúng thứ tự thời gian trên TKB
    var weeklyOrderedLessons = [];
    var globalPeriodCounter = 1;

    var disSupport = (opt && opt.disabilitySupport) || (typeof integrationState !== 'undefined' && integrationState.disabilitySupport);

    allSlots.forEach(function(slot, slotIndex) {
      if (skippedSlotIndices[slotIndex]) return;
      var lessonItem = slotToLessonMap[slotIndex];
      if (lessonItem) {
        lessonItem.globalPeriod = globalPeriodCounter++;
        weeklyOrderedLessons.push(lessonItem);
      }
    });

    if (disSupport && disSupport.enabled) {
      await IntegrationService.adaptLessonsDisabilityWithGemini(weeklyOrderedLessons, disSupport);
    }

    return {
      week: wNum,
      grade: g,
      timetable: timetable,
      lessons: weeklyOrderedLessons,
      totalSlots: weeklyOrderedLessons.length
    };
  },

  /**
   * Trích xuất Khối lớp (1..5) từ tên lớp học linh hoạt
   * VD: "3A" -> 3, "Lớp 4B" -> 4, "5/2" -> 5, "Khối 2" -> 2, "1A2" -> 1
   */
  parseClassGrade: function(className) {
    if (!className || typeof className !== 'string') return 1;
    var str = className.trim();
    var m = str.match(/(?:kh[ốo]i|l[ớo]p|k)?\s*([1-5])/i);
    if (m && m[1]) {
      var g = parseInt(m[1], 10);
      if (g >= 1 && g <= 5) return g;
    }
    return 1;
  },

  /**
   * Chuẩn hóa dữ liệu 1 ô thời khóa biểu GVBM
   * Hỗ trợ dạng chuỗi ("4A", "4A:am_nhac") hoặc object ({ className: "4A", subjectKey: "am_nhac" })
   */
  normalizeGvbmSlot: function(slotRaw, defaultSubjectKey) {
    if (!slotRaw) return null;
    if (typeof slotRaw === 'string') {
      var str = slotRaw.trim();
      if (!str || str === '-' || str === '—') return null;
      if (str.includes(':')) {
        var parts = str.split(':');
        return { className: parts[0].trim(), subjectKey: this.normalizeSubjectKey(parts[1].trim()) };
      }
      return { className: str, subjectKey: this.normalizeSubjectKey(defaultSubjectKey || 'am_nhac') };
    }
    if (typeof slotRaw === 'object' && slotRaw.className) {
      var cStr = slotRaw.className.trim();
      if (!cStr || cStr === '-' || cStr === '—') return null;
      return {
        className: cStr,
        subjectKey: this.normalizeSubjectKey(slotRaw.subjectKey || defaultSubjectKey || 'am_nhac')
      };
    }
    return null;
  },

  /**
   * Thời khóa biểu mẫu mặc định dành cho Giáo viên Bộ môn (18 tiết/tuần, trải đều Khối 1 - 5)
   */
  getDefaultTeacherSchedule: function(primarySubjectKey) {
    var sKey = primarySubjectKey || 'am_nhac';
    return [
      { dayNum: 2, day: 'Thứ Hai', morning: ['4A', '4B', '3A', '3B'], afternoon: ['1A', '1B', ''] },
      { dayNum: 3, day: 'Thứ Ba',  morning: ['5A', '5B', '2A', '2B'], afternoon: ['1C', '2C', ''] },
      { dayNum: 4, day: 'Thứ Tư',  morning: ['3C', '4C', '5C', ''],   afternoon: ['', '', ''] },
      { dayNum: 5, day: 'Thứ Năm', morning: ['1A', '2A', '3A', '4A'], afternoon: ['5A', '', ''] },
      { dayNum: 6, day: 'Thứ Sáu', morning: ['1B', '2B', '3B', '4B'], afternoon: ['5B', '', ''] }
    ];
  },

  /**
   * Thời khóa biểu mẫu đa môn đa khối dành cho Giáo viên Dạy Nhiều Môn, Nhiều Lớp (22 tiết/tuần, trải đều Khối 1 - 5)
   * Phân bổ thực tế các môn chuyên biệt: Âm nhạc, Công nghệ, GDTC, Mĩ thuật...
   */
  getDefaultMultiTeacherSchedule: function() {
    return [
      {
        dayNum: 2, day: 'Thứ Hai',
        morning: [
          { className: '4A', subjectKey: 'am_nhac' },
          { className: '4B', subjectKey: 'am_nhac' },
          { className: '3A', subjectKey: 'cong_nghe' },
          { className: '3B', subjectKey: 'cong_nghe' }
        ],
        afternoon: [
          { className: '1A', subjectKey: 'gdtc' },
          { className: '1B', subjectKey: 'gdtc' },
          ''
        ]
      },
      {
        dayNum: 3, day: 'Thứ Ba',
        morning: [
          { className: '5A', subjectKey: 'cong_nghe' },
          { className: '5B', subjectKey: 'cong_nghe' },
          { className: '2A', subjectKey: 'am_nhac' },
          { className: '2B', subjectKey: 'am_nhac' }
        ],
        afternoon: [
          { className: '4A', subjectKey: 'gdtc' },
          { className: '4B', subjectKey: 'gdtc' },
          ''
        ]
      },
      {
        dayNum: 4, day: 'Thứ Tư',
        morning: [
          { className: '3A', subjectKey: 'am_nhac' },
          { className: '4A', subjectKey: 'cong_nghe' },
          { className: '5A', subjectKey: 'am_nhac' },
          ''
        ],
        afternoon: [
          { className: '2A', subjectKey: 'gdtc' },
          { className: '2B', subjectKey: 'gdtc' },
          ''
        ]
      },
      {
        dayNum: 5, day: 'Thứ Năm',
        morning: [
          { className: '1A', subjectKey: 'am_nhac' },
          { className: '2A', subjectKey: 'dao_duc' },
          { className: '3B', subjectKey: 'am_nhac' },
          { className: '5B', subjectKey: 'am_nhac' }
        ],
        afternoon: [
          { className: '5A', subjectKey: 'gdtc' },
          '',
          ''
        ]
      },
      {
        dayNum: 6, day: 'Thứ Sáu',
        morning: [
          { className: '1B', subjectKey: 'am_nhac' },
          { className: '2B', subjectKey: 'dao_duc' },
          { className: '4B', subjectKey: 'am_nhac' },
          { className: '5B', subjectKey: 'dao_duc' }
        ],
        afternoon: [
          { className: '3A', subjectKey: 'gdtc' },
          '',
          ''
        ]
      }
    ];
  },

  /**
   * Xây dựng Kế hoạch bài dạy tuần cho GIÁO VIÊN BỘ MÔN theo Bảng Phân công Giảng dạy
   * Nguyên tắc nghiệp vụ chuẩn: 1 Môn dạy nhiều lớp cùng khối -> Chỉ xuất 1 KHBD chuẩn (kèm danh sách các lớp phụ trách)
   */
  buildWeeklyPlanByAssignments: async function(assignments, weekNumber, integratedMap, overwriteLegacy, meta) {
    var rawList = Array.isArray(assignments) && assignments.length > 0 ? assignments : [
      { id: 1, grade: 4, subjectKey: 'am_nhac', classes: '4A, 4B, 4C, 4D', periodsPerWeek: 4 },
      { id: 2, grade: 5, subjectKey: 'am_nhac', classes: '5A, 5B, 5C', periodsPerWeek: 3 },
      { id: 3, grade: 3, subjectKey: 'cong_nghe', classes: '3A, 3B, 3C', periodsPerWeek: 3 },
      { id: 4, grade: 2, subjectKey: 'gdtc', classes: '2A, 2B', periodsPerWeek: 4 }
    ];
    var wNum = parseInt(weekNumber) || 1;
    var shouldClean = (overwriteLegacy !== false);
    var metadata = meta || {};

    var khbdDataObj = (typeof window !== 'undefined' && window.KHBD_DATA) ? window.KHBD_DATA : (typeof KHBD_DATA !== 'undefined' ? KHBD_DATA : null);

    // 1. Tải toàn bộ dữ liệu KHBD của các cặp (grade, subjectKey)
    for (var i = 0; i < rawList.length; i++) {
      var it = rawList[i];
      if (it && it.grade && it.subjectKey) {
        await this.ensureSubjectLoaded(it.grade, it.subjectKey);
      }
    }

    // 2. Với mỗi phân công, lấy đúng bài dạy trong tuần (không trùng lặp)
    var weeklyOrderedLessons = [];
    var totalAssignedPeriods = 0;

    for (var i = 0; i < rawList.length; i++) {
      var item = rawList[i];
      if (!item || !item.grade || !item.subjectKey) continue;

      var grade = parseInt(item.grade) || 5;
      var subjectKey = this.normalizeSubjectKey(item.subjectKey);
      var classesStr = Array.isArray(item.classes) ? item.classes.join(', ') : (item.classes ? String(item.classes).trim() : '');
      var periods = parseInt(item.periodsPerWeek || item.periods) || 1;
      totalAssignedPeriods += periods;

      var dispSubj = IntegrationService.getSubjectDisplayName(subjectKey);
      var weekData = khbdDataObj ? khbdDataObj.getWeekPlan(grade, subjectKey, wNum) : null;
      var rawLessons = (weekData && weekData.lessons) ? weekData.lessons : [];
      var units = this.unpackWeeklyLessons(rawLessons, subjectKey, wNum, grade);

      if (units && units.length > 0) {
        // Đối với môn có 1 bài hoặc nhiều tiết trong tuần (VD GDTC có 2 tiết/tuần)
        for (var uIdx = 0; uIdx < units.length; uIdx++) {
          var unit = units[uIdx];
          var baseLesson = unit.lesson;

          var matchInteg = null;
          if (integratedMap) {
            matchInteg = integratedMap[grade + '_' + subjectKey + '_' + wNum + '_' + (unit.rawIndex || 0)] ||
                         integratedMap[subjectKey + '_' + wNum + '_' + (unit.rawIndex || 0)];
          }

          var lessonItem = matchInteg ? 
            IntegrationService.injectIntegrationIntoLesson(baseLesson, matchInteg, shouldClean) : 
            (shouldClean ? IntegrationService.cleanLegacyIntegrationFromLesson(baseLesson) : JSON.parse(JSON.stringify(baseLesson)));

          lessonItem.grade = grade;
          lessonItem.subjectKey = subjectKey;
          lessonItem.subjectName = dispSubj;
          lessonItem.classes = classesStr;
          lessonItem.className = classesStr ? ('Lớp ' + classesStr) : ('Khối ' + grade);
          lessonItem.week = wNum;
          lessonItem.periodsPerWeek = periods;
          var rawT = baseLesson.lessonTitle || baseLesson.title || dispSubj;
          lessonItem.lessonTitle = IntegrationService.cleanLessonTitle(rawT, baseLesson, dispSubj);

          if (units.length > 1) {
            lessonItem.period = 'Tiết ' + (uIdx + 1) + (unit.isDouble ? (' (Phần ' + unit.part + ')') : '');
          } else {
            lessonItem.period = 'Tiết theo TKB (' + periods + ' tiết/tuần)';
          }

          weeklyOrderedLessons.push(lessonItem);
        }
      } else {
        // Fallback tạo bài dạy chuẩn CV 2345
        var fallbackTitle = dispSubj + ' - Khối ' + grade + (classesStr ? (' (Lớp ' + classesStr + ')') : '') + ' (Tuần ' + wNum + ')';
        var fallbackLesson = {
          grade: grade,
          subjectKey: subjectKey,
          subjectName: dispSubj,
          classes: classesStr,
          className: classesStr ? ('Lớp ' + classesStr) : ('Khối ' + grade),
          week: wNum,
          periodsPerWeek: periods,
          period: 'Tiết theo TKB (' + periods + ' tiết/tuần)',
          title: fallbackTitle,
          lessonTitle: fallbackTitle,
          yccd: [
            '1. Năng lực đặc thù: Hình thành, rèn luyện và phát triển các kĩ năng, phẩm chất môn ' + dispSubj + ' Khối ' + grade + ' cho học sinh ' + (classesStr ? ('các lớp ' + classesStr) : '') + ' theo yêu cầu cần đạt Chương trình GDPT 2018.',
            '2. Năng lực chung: Tự chủ và tự học; Tự tin trao đổi, hợp tác nhóm; Giải quyết vấn đề và sáng tạo.',
            '3. Phẩm chất: Chăm chỉ, trung thực, trách nhiệm và có ý thức rèn luyện môn học.'
          ],
          dodung: [
            '1. Giáo viên: Kế hoạch bài dạy, SGK ' + dispSubj + ' Khối ' + grade + ', bài giảng điện tử, thiết bị/đồ dùng dạy học phù hợp.',
            '2. Học sinh: SGK, vở bài tập, đồ dùng học tập môn ' + dispSubj + '.'
          ],
          tables: [[
            ['* Khởi động (3 - 5 phút): Tạo hứng thú học tập, liên hệ thực tế hoặc kết nối kiến thức bài học.'],
            ['GV tổ chức hoạt động/trò chơi tạo tâm thế hào hứng cho học sinh.', 'HS chủ động tham gia nhiệt tình, tạo tâm thế sẵn sàng vào bài mới.'],
            ['* Khám phá / Luyện tập (22 - 25 phút): Thực hiện các hoạt động hình thành kiến thức và rèn luyện kĩ năng.'],
            ['GV hướng dẫn mẫu, tổ chức các hoạt động nhóm/cá nhân, quan sát và hỗ trợ HS thực hành.', 'HS tích cực thực hành, trao đổi thảo luận, chia sẻ kết quả và hỗ trợ bạn cùng tiến bộ.'],
            ['* Vận dụng (3 - 5 phút): Củng cố, liên hệ thực tiễn và định hướng rèn luyện.'],
            ['GV nhận xét tiết học, biểu dương các cá nhân/nhóm tích cực, hướng dẫn nội dung cần rèn luyện thêm.', 'HS lắng nghe, ghi nhớ và vận dụng kiến thức, kĩ năng đã học vào thực tế cuộc sống.']
          ]]
        };
        weeklyOrderedLessons.push(fallbackLesson);
      }
    }

    var disSupport = (metadata && metadata.disabilitySupport) || (typeof integrationState !== 'undefined' && integrationState.disabilitySupport);
    if (disSupport && disSupport.enabled) {
      await IntegrationService.adaptLessonsDisabilityWithGemini(weeklyOrderedLessons, disSupport);
    }

    return {
      role: 'gvbm',
      isAssignmentMode: true,
      week: wNum,
      assignments: rawList,
      totalPeriods: totalAssignedPeriods,
      lessonsCount: weeklyOrderedLessons.length,
      lessons: weeklyOrderedLessons,
      metadata: metadata
    };
  },

  /**
   * Xếp toàn bộ bài dạy trong tuần cho GIÁO VIÊN BỘ MÔN (Đa khối / Đa môn) theo Lịch lên lớp
   */
  buildWeeklyPlanByTeacherSchedule: async function(gvbmConfig, weekNumber, integratedMap, overwriteLegacy) {
    var cfg = gvbmConfig || {};
    var wNum = parseInt(weekNumber) || 1;
    var schedule = (cfg.schedule && Array.isArray(cfg.schedule) && cfg.schedule.length > 0) ? 
                   cfg.schedule : 
                   (cfg.isMultiSubject ? this.getDefaultMultiTeacherSchedule() : this.getDefaultTeacherSchedule(cfg.subjectKey));
    var primarySubject = cfg.subjectKey || 'am_nhac';
    var shouldClean = (overwriteLegacy !== false);

    var khbdDataObj = (typeof window !== 'undefined' && window.KHBD_DATA) ? window.KHBD_DATA : (typeof KHBD_DATA !== 'undefined' ? KHBD_DATA : null);

    // 1. Quét toàn bộ các tiết dạy trong tuần
    var allSlots = [];
    schedule.forEach(function(dayItem) {
      var dayName = dayItem.day || ('Thứ ' + dayItem.dayNum);
      (dayItem.morning || []).forEach(function(sRaw, mIdx) {
        var norm = IntegrationService.normalizeGvbmSlot(sRaw, primarySubject);
        if (norm && norm.className) {
          var grade = IntegrationService.parseClassGrade(norm.className);
          allSlots.push({
            dayName: dayName,
            dayNum: dayItem.dayNum,
            session: 'Sáng',
            periodSlot: mIdx + 1,
            className: norm.className,
            subjectKey: norm.subjectKey,
            grade: grade
          });
        }
      });
      (dayItem.afternoon || []).forEach(function(sRaw, aIdx) {
        var norm = IntegrationService.normalizeGvbmSlot(sRaw, primarySubject);
        if (norm && norm.className) {
          var grade = IntegrationService.parseClassGrade(norm.className);
          allSlots.push({
            dayName: dayName,
            dayNum: dayItem.dayNum,
            session: 'Chiều',
            periodSlot: aIdx + 1,
            className: norm.className,
            subjectKey: norm.subjectKey,
            grade: grade
          });
        }
      });
    });

    // 2. Tìm tất cả các cặp (grade, subjectKey) duy nhất và tải dữ liệu KHBD tương ứng
    var uniquePairs = {};
    allSlots.forEach(function(slot) {
      var key = slot.grade + '_' + slot.subjectKey;
      uniquePairs[key] = { grade: slot.grade, subjectKey: slot.subjectKey };
    });

    var unitsCache = {};
    for (var pKey in uniquePairs) {
      var pair = uniquePairs[pKey];
      await this.ensureSubjectLoaded(pair.grade, pair.subjectKey);
      var weekData = khbdDataObj ? khbdDataObj.getWeekPlan(pair.grade, pair.subjectKey, wNum) : null;
      var rawLessons = (weekData && weekData.lessons) ? weekData.lessons : [];
      unitsCache[pKey] = this.unpackWeeklyLessons(rawLessons, pair.subjectKey, wNum, pair.grade);
    }

    // 3. Phân bổ bài học cho từng tiết theo tiến độ của từng lớp trong tuần
    var classPeriodCounter = {};
    var weeklyOrderedLessons = [];
    var globalPeriodCounter = 1;

    for (var i = 0; i < allSlots.length; i++) {
      var slot = allSlots[i];
      var cacheKey = slot.grade + '_' + slot.subjectKey;
      var availableUnits = unitsCache[cacheKey] || [];

      var classKey = slot.grade + '_' + slot.className.toUpperCase().replace(/\s+/g, '') + '_' + slot.subjectKey;
      var curClassUnitIdx = classPeriodCounter[classKey] || 0;
      classPeriodCounter[classKey] = curClassUnitIdx + 1;

      var unit = (availableUnits.length > 0) ? 
                 (availableUnits[curClassUnitIdx] || availableUnits[curClassUnitIdx % availableUnits.length]) : null;

      var lessonItem = null;
      var dispSubj = IntegrationService.getSubjectDisplayName(slot.subjectKey);

      if (unit && unit.lesson) {
        var baseLesson = unit.lesson;
        // Kiểm tra tích hợp nếu có
        var matchInteg = null;
        if (integratedMap) {
          matchInteg = integratedMap[slot.grade + '_' + slot.subjectKey + '_' + wNum + '_' + (unit.rawIndex || 0)] ||
                       integratedMap[slot.subjectKey + '_' + wNum + '_' + (unit.rawIndex || 0)];
        }
        lessonItem = matchInteg ? 
          IntegrationService.injectIntegrationIntoLesson(baseLesson, matchInteg, shouldClean) : 
          (shouldClean ? IntegrationService.cleanLegacyIntegrationFromLesson(baseLesson) : JSON.parse(JSON.stringify(baseLesson)));

        lessonItem.lessonTitle = baseLesson.lessonTitle || baseLesson.title || dispSubj;
        if (unit.isDouble) {
          lessonItem.period = 'Tiết ' + slot.periodSlot + ' (Tiết ' + unit.part + ')';
        } else {
          lessonItem.period = 'Tiết ' + slot.periodSlot;
        }
      } else {
        // Fallback bài dạy chuẩn mực CV 2345
        var clsNameClean = slot.className.toLowerCase().includes('lớp') ? slot.className : ('Lớp ' + slot.className);
        lessonItem = {
          title: dispSubj + ' - ' + clsNameClean + ' (Tuần ' + wNum + ')',
          lessonTitle: dispSubj + ' - ' + clsNameClean + ' (Tuần ' + wNum + ')',
          period: 'Tiết ' + slot.periodSlot,
          yccd: [
            '1. Năng lực đặc thù: Hình thành, rèn luyện và phát triển các năng lực môn ' + dispSubj + ' cho học sinh ' + clsNameClean + ' theo yêu cầu cần đạt của Chương trình GDPT 2018.',
            '2. Năng lực chung: Tự chủ và tự học; Tự tin trao đổi, hợp tác nhóm; Giải quyết vấn đề sáng tạo.',
            '3. Phẩm chất: Chăm chỉ rèn luyện, trung thực, có tinh thần trách nhiệm và yêu thích môn học.'
          ],
          dodung: [
            '1. Giáo viên: SGK ' + dispSubj + ' Khối ' + slot.grade + ', thiết bị dạy học số, bài giảng điện tử, đồ dùng trực quan phù hợp bài dạy.',
            '2. Học sinh: SGK, vở bài tập, đồ dùng học tập môn ' + dispSubj + '.'
          ],
          tables: [[
            ['* Khởi động (3 - 5 phút): Tạo hứng thú, liên hệ thực tế hoặc kết nối kiến thức bài học.'],
            ['GV tổ chức trò chơi/hoạt động khởi động, khơi gợi nội dung bài học.', 'HS nhiệt tình tham gia, tạo tâm thế hào hứng bước vào tiết học.'],
            ['* Khám phá / Luyện tập (22 - 25 phút): Thực hiện các hoạt động hình thành kiến thức và rèn luyện kĩ năng.'],
            ['GV hướng dẫn mẫu, tổ chức các hoạt động nhóm/cá nhân, quan sát và hỗ trợ HS thực hành.', 'HS theo dõi, tích cực thực hành, chia sẻ kết quả và trao đổi cùng bạn.'],
            ['* Vận dụng (3 - 5 phút): Củng cố, đánh giá và định hướng rèn luyện.'],
            ['GV nhận xét tiết dạy, tuyên dương các cá nhân/nhóm tích cực, dặn dò HS ôn luyện.', 'HS lắng nghe, ghi nhớ và vận dụng kiến thức, kĩ năng vào đời sống.']
          ]]
        };
      }

      lessonItem.globalPeriod = globalPeriodCounter++;
      lessonItem.dayName = slot.dayName;
      lessonItem.dayNum = slot.dayNum;
      lessonItem.session = slot.session;
      lessonItem.periodSlot = slot.periodSlot;
      lessonItem.className = slot.className;
      lessonItem.grade = slot.grade;
      lessonItem.subjectKey = slot.subjectKey;
      lessonItem.subjectName = dispSubj;
      lessonItem.week = wNum;
      lessonItem.teacherName = cfg.teacherName || '';

      weeklyOrderedLessons.push(lessonItem);
    }

    return {
      role: 'gvbm',
      week: wNum,
      gvbmConfig: cfg,
      schedule: schedule,
      lessons: weeklyOrderedLessons,
      totalSlots: weeklyOrderedLessons.length
    };
  },

  /**
   * Tạo trang bìa Bảng Thời khóa biểu cá nhân của Giáo viên Bộ môn
   */
  buildTeacherTkbCoverHtml: function(weeklyPlanResult, metadata) {
    var meta = metadata || {};
    var gvbmConfig = weeklyPlanResult.gvbmConfig || meta.gvbmConfig || {};
    var schedule = weeklyPlanResult.schedule || gvbmConfig.schedule || this.getDefaultTeacherSchedule(gvbmConfig.subjectKey);
    var weekNum = weeklyPlanResult.week || meta.week || 1;
    var schoolName = meta.schoolName || gvbmConfig.schoolName || 'TRƯỜNG TIỂU HỌC .................................';
    var teacherName = meta.teacherName || gvbmConfig.teacherName || 'Giáo viên Bộ môn';
    var schoolYear = meta.schoolYear || gvbmConfig.schoolYear || '2026 - 2027';
    var department = meta.department || gvbmConfig.department || 'Tổ Chuyên biệt / Bộ môn';
    var subjectDisplayName = '';
    if (gvbmConfig.isMultiSubject) {
      var foundSubjects = {};
      schedule.forEach(function(day) {
        ['morning', 'afternoon'].forEach(function(sess) {
          (day[sess] || []).forEach(function(sRaw) {
            var norm = IntegrationService.normalizeGvbmSlot(sRaw, gvbmConfig.subjectKey);
            if (norm && norm.className && norm.subjectKey) {
              foundSubjects[norm.subjectKey] = true;
            }
          });
        });
      });
      var subKeys = Object.keys(foundSubjects);
      if (subKeys.length > 0) {
        subjectDisplayName = 'Đa môn (' + subKeys.map(function(k) { return IntegrationService.getSubjectDisplayName(k); }).join(', ') + ')';
      } else {
        subjectDisplayName = 'Đa môn (Theo phân công)';
      }
    } else {
      subjectDisplayName = IntegrationService.getSubjectDisplayName(gvbmConfig.subjectKey || 'am_nhac');
    }

    var tkbTableRows = '';
    // Buổi Sáng (4 tiết)
    for (var slot = 0; slot < 4; slot++) {
      tkbTableRows += '<tr>';
      tkbTableRows += '<td style="border: 1pt solid #000; padding: 3.5pt 2pt; text-align: center; vertical-align: middle; background-color: #ffffff; width: 20%;">';
      tkbTableRows += '<p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.15; font-size: 11pt; font-weight: bold; text-align: center; white-space: nowrap;">Tiết ' + (slot + 1) + ' (Sáng)</p>';
      tkbTableRows += '</td>';
      schedule.forEach(function(day) {
        var sRaw = (day.morning && day.morning[slot]) || '';
        var norm = IntegrationService.normalizeGvbmSlot(sRaw, gvbmConfig.subjectKey);
        var cellContent = '';
        if (norm && norm.className) {
          var clsDisp = norm.className.toLowerCase().includes('lớp') ? norm.className : ('Lớp ' + norm.className);
          cellContent = '<span style="font-weight: bold;">' + clsDisp + '</span>';
          if (gvbmConfig.isMultiSubject && norm.subjectKey) {
            cellContent += '<br/><span style="font-size: 9.5pt; color: #475569;">(' + IntegrationService.getSubjectDisplayName(norm.subjectKey) + ')</span>';
          }
        }
        tkbTableRows += '<td style="border: 1pt solid #000; padding: 3.5pt 2pt; text-align: center; vertical-align: middle; background-color: #ffffff; width: 16%;">';
        tkbTableRows += '<p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.15; font-size: 11pt; text-align: center;">' + cellContent + '</p>';
        tkbTableRows += '</td>';
      });
      tkbTableRows += '</tr>';
    }

    // Buổi Chiều (3 tiết)
    for (var slot = 0; slot < 3; slot++) {
      tkbTableRows += '<tr>';
      tkbTableRows += '<td style="border: 1pt solid #000; padding: 3.5pt 2pt; text-align: center; vertical-align: middle; background-color: #ffffff; width: 20%;">';
      tkbTableRows += '<p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.15; font-size: 11pt; font-weight: bold; text-align: center; white-space: nowrap;">Tiết ' + (slot + 1) + ' (Chiều)</p>';
      tkbTableRows += '</td>';
      schedule.forEach(function(day) {
        var sRaw = (day.afternoon && day.afternoon[slot]) || '';
        var norm = IntegrationService.normalizeGvbmSlot(sRaw, gvbmConfig.subjectKey);
        var cellContent = '';
        if (norm && norm.className) {
          var clsDisp = norm.className.toLowerCase().includes('lớp') ? norm.className : ('Lớp ' + norm.className);
          cellContent = '<span style="font-weight: bold;">' + clsDisp + '</span>';
          if (gvbmConfig.isMultiSubject && norm.subjectKey) {
            cellContent += '<br/><span style="font-size: 9.5pt; color: #475569;">(' + IntegrationService.getSubjectDisplayName(norm.subjectKey) + ')</span>';
          }
        }
        tkbTableRows += '<td style="border: 1pt solid #000; padding: 3.5pt 2pt; text-align: center; vertical-align: middle; background-color: #ffffff; width: 16%;">';
        tkbTableRows += '<p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.15; font-size: 11pt; text-align: center;">' + cellContent + '</p>';
        tkbTableRows += '</td>';
      });
      tkbTableRows += '</tr>';
    }

    var weekRangeInfo = (window.AcademicCalendar && AcademicCalendar.getWeekRange(weekNum)) || null;
    var weekRangeText = weekRangeInfo ? ('<div style="font-size: 11pt; font-weight: normal; margin-top: 3pt; text-transform: none; color: #334155;">(' + weekRangeInfo.label + ')</div>') : '';
    var dMon = (window.AcademicCalendar && AcademicCalendar.getDayDate(weekNum, 2).short) || '';
    var dTue = (window.AcademicCalendar && AcademicCalendar.getDayDate(weekNum, 3).short) || '';
    var dWed = (window.AcademicCalendar && AcademicCalendar.getDayDate(weekNum, 4).short) || '';
    var dThu = (window.AcademicCalendar && AcademicCalendar.getDayDate(weekNum, 5).short) || '';
    var dFri = (window.AcademicCalendar && AcademicCalendar.getDayDate(weekNum, 6).short) || '';

    return `
      <div style="text-align: center; margin-bottom: 16pt; font-family: 'Times New Roman', serif;">
        <table style="width: 100%; border-collapse: collapse; border: none; margin-bottom: 10pt; font-family: 'Times New Roman', serif;">
          <tr>
            <td style="width: 50%; vertical-align: top; text-align: left; font-size: 13pt;">
              <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; line-height: 1.0; font-family: 'Times New Roman', serif; font-size: 13pt;"><b>${schoolName}</b></p>
              ${department ? `<p style="margin: 2pt 0 0 0; margin-top: 2pt; margin-bottom: 0pt; mso-para-margin: 0pt; line-height: 1.0; font-family: 'Times New Roman', serif; font-size: 13pt;">Tổ chuyên môn: <b>${department}</b></p>` : ''}
              <p style="margin: 2pt 0 0 0; margin-top: 2pt; margin-bottom: 0pt; mso-para-margin: 0pt; line-height: 1.0; font-family: 'Times New Roman', serif; font-size: 13pt;">Giáo viên: <b>${teacherName}</b></p>
            </td>
            <td style="width: 50%; vertical-align: top; text-align: right; font-size: 13pt;">
              <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; line-height: 1.0; font-family: 'Times New Roman', serif; font-size: 13pt;"><b>NĂM HỌC: ${schoolYear}</b></p>
              <p style="margin: 2pt 0 0 0; margin-top: 2pt; margin-bottom: 0pt; mso-para-margin: 0pt; line-height: 1.0; font-family: 'Times New Roman', serif; font-size: 13pt;">Môn dạy: <b>${subjectDisplayName}</b></p>
              <p style="margin: 2pt 0 0 0; margin-top: 2pt; margin-bottom: 0pt; mso-para-margin: 0pt; line-height: 1.0; font-family: 'Times New Roman', serif; font-size: 13pt;"><b>TUẦN ${weekNum}</b></p>
            </td>
          </tr>
        </table>

        <h2 style="font-family: 'Times New Roman', serif; font-size: 14pt; font-weight: bold; text-transform: uppercase; margin: 8pt 0 2pt 0; line-height: 1.0;">
          KẾ HOẠCH BÀI DẠY TUẦN ${weekNum}
          ${weekRangeText}
        </h2>
        <p style="font-family: 'Times New Roman', serif; font-size: 13pt; font-weight: bold; color: #1e40af; margin: 0 0 2pt 0; line-height: 1.0;">
          (GIÁO VIÊN BỘ MÔN CHUYÊN TRÁCH - GIẢNG DẠY ĐA KHỐI LỚP)
        </p>
        <p style="font-family: 'Times New Roman', serif; font-size: 12pt; font-style: italic; margin: 0 0 10pt 0; line-height: 1.0;">(Sắp xếp theo Lịch báo giảng và Thời khóa biểu lên lớp)</p>

        <h3 style="font-family: 'Times New Roman', serif; font-size: 13pt; font-weight: bold; text-align: left; text-transform: uppercase; margin: 8pt 0 2pt 0; line-height: 1.0;">
          LỊCH LÊN LỚP TUẦN ${weekNum}:
        </h3>
        <table class="tkb-table" style="width: 100%; border-collapse: collapse; margin-bottom: 15pt; font-family: 'Times New Roman', serif; font-size: 11pt; border: 1pt solid #000;">
          <thead>
            <tr style="background-color: #e8edf3; font-weight: bold; text-align: center;">
              <th style="border: 1pt solid #000; padding: 3.5pt 2pt; width: 20%; background-color: #e8edf3; text-align: center; vertical-align: middle;">
                <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.15; font-size: 11pt; font-weight: bold; text-align: center;">Tiết</p>
              </th>
              <th style="border: 1pt solid #000; padding: 3.5pt 2pt; width: 16%; background-color: #e8edf3; text-align: center; vertical-align: middle;">
                <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.15; font-size: 11pt; font-weight: bold; text-align: center;">Thứ Hai</p>
                ${dMon ? '<p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.15; font-size: 11pt; font-weight: bold; text-align: center;">(' + dMon + ')</p>' : ''}
              </th>
              <th style="border: 1pt solid #000; padding: 3.5pt 2pt; width: 16%; background-color: #e8edf3; text-align: center; vertical-align: middle;">
                <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.15; font-size: 11pt; font-weight: bold; text-align: center;">Thứ Ba</p>
                ${dTue ? '<p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.15; font-size: 11pt; font-weight: bold; text-align: center;">(' + dTue + ')</p>' : ''}
              </th>
              <th style="border: 1pt solid #000; padding: 3.5pt 2pt; width: 16%; background-color: #e8edf3; text-align: center; vertical-align: middle;">
                <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.15; font-size: 11pt; font-weight: bold; text-align: center;">Thứ Tư</p>
                ${dWed ? '<p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.15; font-size: 11pt; font-weight: bold; text-align: center;">(' + dWed + ')</p>' : ''}
              </th>
              <th style="border: 1pt solid #000; padding: 3.5pt 2pt; width: 16%; background-color: #e8edf3; text-align: center; vertical-align: middle;">
                <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.15; font-size: 11pt; font-weight: bold; text-align: center;">Thứ Năm</p>
                ${dThu ? '<p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.15; font-size: 11pt; font-weight: bold; text-align: center;">(' + dThu + ')</p>' : ''}
              </th>
              <th style="border: 1pt solid #000; padding: 3.5pt 2pt; width: 16%; background-color: #e8edf3; text-align: center; vertical-align: middle;">
                <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.15; font-size: 11pt; font-weight: bold; text-align: center;">Thứ Sáu</p>
                ${dFri ? '<p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.15; font-size: 11pt; font-weight: bold; text-align: center;">(' + dFri + ')</p>' : ''}
              </th>
            </tr>
          </thead>
          <tbody>
            ${tkbTableRows}
          </tbody>
        </table>
      </div>
    `;
  },

  /**
   * Tạo trang bìa Bảng Phân công Giảng dạy Chuyên môn của Giáo viên Bộ môn (Chuẩn mẫu hồ sơ chuyên môn)
   */
  buildTeacherAssignmentCoverHtml: function(weeklyPlanResult, metadata) {
    var meta = metadata || {};
    var assignments = weeklyPlanResult.assignments || meta.assignments || [];
    var weekNum = weeklyPlanResult.week || meta.week || 1;
    var schoolName = meta.schoolName || 'TRƯỜNG TIỂU HỌC .................................';
    var teacherName = meta.teacherName || 'Giáo viên Bộ môn';
    var schoolYear = meta.schoolYear || '2026 - 2027';
    var department = meta.department || 'Tổ Chuyên biệt / Bộ môn';

    var totalPeriods = 0;
    var rowsHtml = '';
    assignments.forEach(function(item, idx) {
      var g = item.grade || 1;
      var sKey = item.subjectKey || 'am_nhac';
      var sName = IntegrationService.getSubjectDisplayName(sKey);
      var cls = Array.isArray(item.classes) ? item.classes.join(', ') : (item.classes || ('Khối ' + g));
      var p = parseInt(item.periodsPerWeek || item.periods) || 1;
      totalPeriods += p;

      var noteText = '1 bài/tuần';
      if (p > 1 && item.classes) {
        var clsParts = Array.isArray(item.classes) ? item.classes : String(item.classes).split(/[,;+]/).filter(function(c){ return c.trim().length > 0; });
        var pPerClass = p;
        if (clsParts.length > 1 && p >= clsParts.length) {
          pPerClass = Math.round(p / clsParts.length);
        }
        if (pPerClass > 1) {
          noteText = '1 bài (' + pPerClass + ' tiết)/tuần';
        }
      }

      rowsHtml += `
        <tr>
          <td style="border: 1pt solid #000; padding: 3.5pt 3pt; text-align: center; vertical-align: middle; background-color: #ffffff;"><p style="margin: 0pt; mso-para-margin: 0pt; line-height: 1.15; font-size: 11pt; text-align: center;">${idx + 1}</p></td>
          <td style="border: 1pt solid #000; padding: 3.5pt 3pt; text-align: left; vertical-align: middle; font-weight: bold; background-color: #ffffff;"><p style="margin: 0pt; mso-para-margin: 0pt; line-height: 1.15; font-size: 11pt; font-weight: bold; text-align: left;">${sName}</p></td>
          <td style="border: 1pt solid #000; padding: 3.5pt 3pt; text-align: center; vertical-align: middle; background-color: #ffffff;"><p style="margin: 0pt; mso-para-margin: 0pt; line-height: 1.15; font-size: 11pt; text-align: center;">Khối ${g}</p></td>
          <td style="border: 1pt solid #000; padding: 3.5pt 3pt; text-align: left; vertical-align: middle; background-color: #ffffff;"><p style="margin: 0pt; mso-para-margin: 0pt; line-height: 1.15; font-size: 11pt; text-align: left;">${cls}</p></td>
          <td style="border: 1pt solid #000; padding: 3.5pt 3pt; text-align: center; vertical-align: middle; font-weight: bold; background-color: #ffffff;"><p style="margin: 0pt; mso-para-margin: 0pt; line-height: 1.15; font-size: 11pt; font-weight: bold; text-align: center;">${p}</p></td>
          <td style="border: 1pt solid #000; padding: 3.5pt 3pt; text-align: center; vertical-align: middle; background-color: #ffffff;"><p style="margin: 0pt; mso-para-margin: 0pt; line-height: 1.15; font-size: 11pt; text-align: center;">${noteText}</p></td>
        </tr>
      `;
    });

    var weekRangeInfo = (window.AcademicCalendar && AcademicCalendar.getWeekRange(weekNum)) || null;
    var weekRangeText = weekRangeInfo ? ('<div style="font-size: 11pt; font-weight: normal; margin-top: 3pt; text-transform: none; color: #334155;">(' + weekRangeInfo.label + ')</div>') : '';

    var subjectNames = [];
    assignments.forEach(function(item) {
      var sKey = item.subjectKey || 'am_nhac';
      var sName = IntegrationService.getSubjectDisplayName(sKey);
      if (sName && !subjectNames.includes(sName)) subjectNames.push(sName);
    });
    var subjectDisplayName = subjectNames.length > 1 
      ? ('Đa môn (' + subjectNames.join(', ') + ')') 
      : (subjectNames[0] || '');

    return `
      <div style="text-align: center; margin-bottom: 16pt; font-family: 'Times New Roman', serif;">
        <table style="width: 100%; border-collapse: collapse; border: none; margin-bottom: 12pt; font-family: 'Times New Roman', serif;">
          <tr>
            <td style="width: 50%; vertical-align: top; text-align: left; font-size: 13pt;">
              <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; line-height: 1.0; font-family: 'Times New Roman', serif; font-size: 13pt;"><b>${schoolName}</b></p>
              ${department ? `<p style="margin: 2pt 0 0 0; margin-top: 2pt; margin-bottom: 0pt; mso-para-margin: 0pt; line-height: 1.0; font-family: 'Times New Roman', serif; font-size: 13pt;">Tổ chuyên môn: <b>${department}</b></p>` : ''}
              <p style="margin: 2pt 0 0 0; margin-top: 2pt; margin-bottom: 0pt; mso-para-margin: 0pt; line-height: 1.0; font-family: 'Times New Roman', serif; font-size: 13pt;">Giáo viên: <b>${teacherName}</b></p>
            </td>
            <td style="width: 50%; vertical-align: top; text-align: right; font-size: 13pt;">
              <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; line-height: 1.0; font-family: 'Times New Roman', serif; font-size: 13pt;"><b>NĂM HỌC: ${schoolYear}</b></p>
              ${subjectDisplayName ? `<p style="margin: 2pt 0 0 0; margin-top: 2pt; margin-bottom: 0pt; mso-para-margin: 0pt; line-height: 1.0; font-family: 'Times New Roman', serif; font-size: 13pt;">Môn dạy: <b>${subjectDisplayName}</b></p>` : ''}
              <p style="margin: 2pt 0 0 0; margin-top: 2pt; margin-bottom: 0pt; mso-para-margin: 0pt; line-height: 1.0; font-family: 'Times New Roman', serif; font-size: 13pt;"><b>TUẦN ${weekNum}</b></p>
            </td>
          </tr>
        </table>

        <div style="margin: 10pt 0 8pt 0;">
          <h2 style="font-family: 'Times New Roman', serif; font-size: 14pt; font-weight: bold; text-transform: uppercase; margin: 0; line-height: 1.0; color: #000;">
            KẾ HOẠCH BÀI DẠY TUẦN ${weekNum}
            ${weekRangeText}
          </h2>
          <p style="font-family: 'Times New Roman', serif; font-size: 12pt; font-style: italic; margin: 3pt 0 0 0; line-height: 1.0;">
            (Theo Bảng phân công chuyên môn giảng dạy - Chuẩn Công văn 2345/BGDĐT-GDTH)
          </p>
        </div>

        <div style="margin-top: 10pt; margin-bottom: 12pt;">
          <p style="font-family: 'Times New Roman', serif; font-size: 13pt; font-weight: bold; text-align: left; margin-bottom: 4pt; line-height: 1.0;">
            BẢNG TỔNG HỢP PHÂN CÔNG GIẢNG DẠY TRONG TUẦN:
          </p>
          <table class="tkb-table" style="width: 100%; border-collapse: collapse; font-family: 'Times New Roman', serif; font-size: 11pt; border: 1pt solid #000;">
            <thead>
              <tr style="background-color: #e8edf3; font-weight: bold; text-align: center;">
                <th style="border: 1pt solid #000; padding: 3.5pt 3pt; width: 40px; text-align: center; vertical-align: middle;"><p style="margin: 0pt; mso-para-margin: 0pt; line-height: 1.0; font-size: 11pt; font-weight: bold; text-align: center;">STT</p></th>
                <th style="border: 1pt solid #000; padding: 3.5pt 3pt; text-align: left; vertical-align: middle;"><p style="margin: 0pt; mso-para-margin: 0pt; line-height: 1.0; font-size: 11pt; font-weight: bold; text-align: left;">Môn học</p></th>
                <th style="border: 1pt solid #000; padding: 3.5pt 3pt; width: 80px; text-align: center; vertical-align: middle;"><p style="margin: 0pt; mso-para-margin: 0pt; line-height: 1.0; font-size: 11pt; font-weight: bold; text-align: center;">Khối lớp</p></th>
                <th style="border: 1pt solid #000; padding: 3.5pt 3pt; text-align: left; vertical-align: middle;"><p style="margin: 0pt; mso-para-margin: 0pt; line-height: 1.0; font-size: 11pt; font-weight: bold; text-align: left;">Các lớp phụ trách</p></th>
                <th style="border: 1pt solid #000; padding: 3.5pt 3pt; width: 85px; text-align: center; vertical-align: middle;"><p style="margin: 0pt; mso-para-margin: 0pt; line-height: 1.0; font-size: 11pt; font-weight: bold; text-align: center;">Số tiết/tuần</p></th>
                <th style="border: 1pt solid #000; padding: 3.5pt 3pt; width: 100px; text-align: center; vertical-align: middle;"><p style="margin: 0pt; mso-para-margin: 0pt; line-height: 1.0; font-size: 11pt; font-weight: bold; text-align: center;">Ghi chú</p></th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
              <tr style="font-weight: bold; background-color: #fafafa;">
                <td colspan="4" style="border: 1pt solid #000; padding: 3.5pt 3pt; text-align: right; vertical-align: middle;"><p style="margin: 0pt; mso-para-margin: 0pt; line-height: 1.0; font-size: 11pt; font-weight: bold; text-align: right;">TỔNG CỘNG:</p></td>
                <td style="border: 1pt solid #000; padding: 3.5pt 3pt; text-align: center; vertical-align: middle; color: #b91c1c;"><p style="margin: 0pt; mso-para-margin: 0pt; line-height: 1.0; font-size: 11pt; font-weight: bold; text-align: center; color: #b91c1c;">${totalPeriods} tiết</p></td>
                <td style="border: 1pt solid #000; padding: 3.5pt 3pt; text-align: center; vertical-align: middle;"><p style="margin: 0pt; mso-para-margin: 0pt; line-height: 1.0; font-size: 11pt; text-align: center;">${assignments.length} môn (${weeklyPlanResult.lessonsCount || (weeklyPlanResult.lessons ? weeklyPlanResult.lessons.length : assignments.length)} bài theo tiết)</p></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  },


  // =========================================================================
  // 6. AI PHÂN TÍCH TÍCH HỢP TÀI LIỆU
  // =========================================================================

  analyzeIntegrationPlanWithDocument: async function(params) {
    var grade = parseInt(params.grade) || 5;
    var subj = (params.subjectKey || params.subjectId || 'toan').toLowerCase();
    var sWeek = parseInt(params.startWeek) || 1;
    var maxAllowedEnd = Math.min(35, sWeek + 3);
    var eWeek = params.endWeek ? Math.min(maxAllowedEnd, parseInt(params.endWeek)) : Math.min(maxAllowedEnd, sWeek + (parseInt(params.durationWeeks || params.duration) || 1) - 1);
    if (eWeek < sWeek) eWeek = sWeek;
    var dur = eWeek - sWeek + 1;

    var docText = (params.docText || '').trim();
    var docTitle = (params.docTitle || 'Tài liệu tích hợp chuyên đề mới').trim();
    var userNotes = (params.userNotes || '').trim();

    if (!docText) {
      throw new Error('Vui lòng tải lên tài liệu (.docx, .pdf, .txt) hoặc dán nội dung văn bản chỉ đạo/chuyên đề tích hợp.');
    }

    var docSummary = this.extractDocumentKeywordsAndSummary(docText, docTitle);
    var apiKey = this.getGeminiApiKey();

    // Hỗ trợ chế độ Giáo viên Bộ môn (Đa khối / Đa môn theo phân công chuyên môn)
    var assignments = (params.assignments && Array.isArray(params.assignments) && params.assignments.length > 0) ? params.assignments : null;
    if (assignments) {
      for (var aIdx = 0; aIdx < assignments.length; aIdx++) {
        var aItem = assignments[aIdx];
        if (aItem && aItem.grade && aItem.subjectKey) {
          await this.ensureSubjectLoaded(aItem.grade, aItem.subjectKey);
        }
      }

      var khbdDataObj = (typeof window !== 'undefined' && window.KHBD_DATA) ? window.KHBD_DATA : (typeof KHBD_DATA !== 'undefined' ? KHBD_DATA : null);
      var allSuggestions = [];

      for (var aIdx = 0; aIdx < assignments.length; aIdx++) {
        var aItem = assignments[aIdx];
        if (!aItem || !aItem.grade || !aItem.subjectKey) continue;
        var aGrade = parseInt(aItem.grade) || 5;
        var aSubj = this.normalizeSubjectKey(aItem.subjectKey);
        var weeksPlan = khbdDataObj ? khbdDataObj.getWeekRangePlan(aGrade, aSubj, sWeek, eWeek) : [];
        var subSuggestions = this.generatePlanViaSmartRuleEngine(aGrade, aSubj, weeksPlan, docSummary, userNotes);
        subSuggestions.forEach(function(s) {
          s.grade = aGrade;
          s.subjectKey = aSubj;
          s.subjectName = IntegrationService.getSubjectDisplayName(aSubj);
          s.classes = aItem.classes;
          s.lessonId = aGrade + '_' + aSubj + '_' + s.week + '_' + s.periodIndex;
          allSuggestions.push(s);
        });
      }

      return {
        success: true,
        isAssignmentMode: true,
        role: 'gvbm',
        grade: assignments[0].grade,
        subjectKey: assignments[0].subjectKey,
        subjectName: this.getSubjectDisplayName(assignments[0].subjectKey),
        startWeek: sWeek,
        endWeek: eWeek,
        durationWeeks: dur,
        docTitle: docTitle,
        docSummary: docSummary,
        docTextSnippet: docText.substring(0, 300) + (docText.length > 300 ? '...' : ''),
        userNotes: userNotes,
        suggestions: allSuggestions,
        matrixLessons: allSuggestions,
        assignments: assignments
      };
    }

    await this.ensureSubjectLoaded(grade, subj);

    var khbdDataObj = (typeof window !== 'undefined' && window.KHBD_DATA) ? window.KHBD_DATA : (typeof KHBD_DATA !== 'undefined' ? KHBD_DATA : null);
    var weeksPlan = khbdDataObj ? khbdDataObj.getWeekRangePlan(grade, subj, sWeek, eWeek) : [];

    if (!weeksPlan || weeksPlan.length === 0) {
      throw new Error('Chưa tìm thấy dữ liệu giáo án số hóa cho Khối ' + grade + ' - Môn ' + subj + ' (Tuần ' + sWeek + ' - ' + eWeek + ')');
    }

    var matrixLessons = [];

    if (apiKey && typeof AIService !== 'undefined' && AIService.callGeminiApi) {
      try {
        matrixLessons = await this.generatePlanViaGeminiAI(apiKey, grade, subj, sWeek, eWeek, weeksPlan, docTitle, docText, userNotes);
      } catch (aiErr) {
        console.warn('Lỗi gọi Gemini AI Online, chuyển sang AI Engine Phân tích Chuyên sâu:', aiErr);
        matrixLessons = this.generatePlanViaSmartRuleEngine(grade, subj, weeksPlan, docSummary, userNotes);
      }
    } else {
      matrixLessons = this.generatePlanViaSmartRuleEngine(grade, subj, weeksPlan, docSummary, userNotes);
    }

    return {
      success: true,
      grade: grade,
      subjectKey: subj,
      subjectName: this.getSubjectDisplayName(subj),
      startWeek: sWeek,
      endWeek: eWeek,
      durationWeeks: dur,
      docTitle: docTitle,
      docSummary: docSummary,
      docTextSnippet: docText.substring(0, 300) + (docText.length > 300 ? '...' : ''),
      userNotes: userNotes,
      suggestions: matrixLessons,
      matrixLessons: matrixLessons,
      weeksPlan: weeksPlan
    };
  },

  getGeminiApiKey: function() {
    if (typeof localStorage !== 'undefined') {
      var custom = localStorage.getItem('tvth_gemini_api_key');
      if (custom && custom.trim()) return custom.trim();
    }
    if (typeof window !== 'undefined' && window.CONFIG && window.CONFIG.DEFAULT_GEMINI_API_KEY) {
      return window.CONFIG.DEFAULT_GEMINI_API_KEY;
    }
    if (typeof CONFIG !== 'undefined' && CONFIG.DEFAULT_GEMINI_API_KEY) {
      return CONFIG.DEFAULT_GEMINI_API_KEY;
    }
    return '';
  },

  extractDocumentKeywordsAndSummary: function(text, title) {
    var clean = (text || '').replace(/\s+/g, ' ');
    var textLower = clean.toLowerCase();
    var titleLower = (title || '').toLowerCase();
    var headerSnippet = textLower.substring(0, 1000);

    // Bảng định nghĩa chuyên đề tích hợp chuẩn GDPT 2018 & CV 2345
    var topicDefinitions = [
      {
        tag: 'Giáo dục Trí tuệ nhân tạo (AI)',
        shortTag: 'GD Trí tuệ nhân tạo (AI)',
        primaryKeys: ['trí tuệ nhân tạo', 'trí tuệ nhân tạo (ai)', 'khung nội dung giáo dục trí tuệ nhân tạo', 'artificial intelligence', 'mô hình ai', 'máy học', 'machine learning'],
        secondaryKeys: ['ai', 'robot', 'rô-bốt', 'thuật toán', 'công nghệ thông minh', 'khoa học dữ liệu']
      },
      {
        tag: 'Giáo dục STEM',
        shortTag: 'Giáo dục STEM',
        primaryKeys: ['giáo dục stem', 'bài học stem', 'hoạt động stem', 'steam'],
        secondaryKeys: ['stem', 'thực hành stem', 'chế tạo', 'thiết kế kĩ thuật']
      },
      {
        tag: 'Giáo dục Quyền con người',
        shortTag: 'Quyền con người',
        primaryKeys: ['quyền con người', 'nhân quyền', 'đề án giáo dục quyền con người'],
        secondaryKeys: ['bình đẳng', 'tôn trọng sự khác biệt', 'phẩm giá con người']
      },
      {
        tag: 'Giáo dục Quyền trẻ em',
        shortTag: 'Quyền trẻ em',
        primaryKeys: ['quyền trẻ em', 'luật trẻ em', 'công ước quyền trẻ em', 'bảo vệ trẻ em'],
        secondaryKeys: ['trẻ em được vui chơi', 'trẻ em được học tập', 'bổn phận của trẻ em']
      },
      {
        tag: 'Giáo dục Bảo vệ môi trường',
        shortTag: 'Bảo vệ môi trường',
        primaryKeys: ['bảo vệ môi trường', 'biến đổi khí hậu', 'rác thải nhựa', 'phát triển bền vững', 'ô nhiễm môi trường'],
        secondaryKeys: ['môi trường xanh', 'tiết kiệm năng lượng', 'trồng cây', 'phân loại rác']
      },
      {
        tag: 'Giáo dục An toàn giao thông',
        shortTag: 'An toàn giao thông',
        primaryKeys: ['an toàn giao thông', 'luật giao thông', 'văn hóa giao thông', 'atgt'],
        secondaryKeys: ['mũ bảo hiểm', 'đội mũ bảo hiểm', 'đi bộ an toàn', 'giao thông đường bộ']
      },
      {
        tag: 'Phòng chống đuối nước',
        shortTag: 'Phòng chống đuối nước',
        primaryKeys: ['phòng chống đuối nước', 'phòng, chống tai nạn đuối nước', 'tai nạn thương tích', 'kỹ năng an toàn trong môi trường nước'],
        secondaryKeys: ['đuối nước', 'áo phao', 'tắm sông', 'cứu đuối']
      },
      {
        tag: 'Giáo dục Địa phương',
        shortTag: 'GD Địa phương',
        primaryKeys: ['giáo dục địa phương', 'tài liệu giáo dục địa phương', 'lịch sử địa phương', 'địa lí địa phương'],
        secondaryKeys: ['địa phương em', 'truyền thống quê hương', 'danh lam thắng cảnh quê hương']
      },
      {
        tag: 'Giáo dục Tài chính',
        shortTag: 'Giáo dục tài chính',
        primaryKeys: ['giáo dục tài chính', 'quản lý tài chính', 'tiết kiệm tiền', 'tiền tệ'],
        secondaryKeys: ['chi tiêu hợp lý', 'kế hoạch chi tiêu', 'giá trị đồng tiền']
      },
      {
        tag: 'Chuyển đổi số & Kỹ năng số',
        shortTag: 'Kỹ năng số',
        primaryKeys: ['chuyển đổi số', 'kỹ năng số', 'năng lực số', 'an toàn trên không gian mạng', 'công nghệ số'],
        secondaryKeys: ['internet an toàn', 'thiết bị số', 'thông tin số']
      },
      {
        tag: 'Giáo dục Quốc phòng và An ninh',
        shortTag: 'Quốc phòng - An ninh',
        primaryKeys: ['quốc phòng và an ninh', 'quốc phòng - an ninh', 'chủ quyền biển đảo', 'biên giới hải đảo'],
        secondaryKeys: ['biển đảo việt nam', 'quân đội nhân dân', 'bảo vệ tổ quốc']
      },
      {
        tag: 'Giáo dục Kỹ năng sống',
        shortTag: 'Kỹ năng sống',
        primaryKeys: ['kỹ năng sống', 'kĩ năng sống', 'kỹ năng tự phục vụ', 'phòng chống xâm hại'],
        secondaryKeys: ['tự lập', 'giao tiếp ứng xử', 'hợp tác nhóm']
      },
      {
        tag: 'Giáo dục Hòa nhập (Học sinh khuyết tật)',
        shortTag: 'Học sinh khuyết tật',
        primaryKeys: ['học sinh khuyết tật', 'khuyết tật', 'hòa nhập', 'giáo dục hòa nhập', 'nhận thức 50%', 'nhận thức 30%'],
        secondaryKeys: ['tỉ lệ nhận thức', 'phân hóa đối tượng', 'tinh giản', 'hạ mức độ']
      }
    ];

    // Chấm điểm xác định chủ đề chuẩn xác:
    var scoredTopics = [];
    topicDefinitions.forEach(function(def) {
      var score = 0;
      def.primaryKeys.forEach(function(pk) {
        if (titleLower.indexOf(pk) !== -1) score += 120;
        if (headerSnippet.indexOf(pk) !== -1) score += 60;
        var count = 0;
        var pos = 0;
        while ((pos = textLower.indexOf(pk, pos)) !== -1) {
          count++;
          pos += pk.length;
        }
        score += count * 10;
      });
      def.secondaryKeys.forEach(function(sk) {
        if (titleLower.indexOf(sk) !== -1) score += 30;
        if (headerSnippet.indexOf(sk) !== -1) score += 15;
        var count = 0;
        var pos = 0;
        while ((pos = textLower.indexOf(sk, pos)) !== -1) {
          count++;
          pos += sk.length;
        }
        score += count * 2;
      });
      if (score > 0) {
        scoredTopics.push({ def: def, score: score });
      }
    });

    scoredTopics.sort(function(a, b) { return b.score - a.score; });

    var coreTopics = [];
    if (scoredTopics.length > 0) {
      coreTopics.push(scoredTopics[0].def.tag);
      // Chỉ ghép thêm chủ đề thứ 2 nếu điểm số của chủ đề 2 thực sự tương đương (>= 65% chủ đề 1)
      if (scoredTopics.length > 1 && scoredTopics[1].score >= scoredTopics[0].score * 0.65) {
        coreTopics.push(scoredTopics[1].def.tag);
      }
    } else {
      var fallbackTitle = (title || 'Chuyên đề tích hợp mới').replace(/\.[a-zA-Z0-9]+$/, '').trim();
      coreTopics.push(fallbackTitle);
    }

    return {
      topicName: coreTopics.join(' • '),
      topicsList: coreTopics,
      primaryTag: scoredTopics.length > 0 ? scoredTopics[0].def.shortTag : coreTopics[0],
      fullSnippet: clean.substring(0, 1500),
      rawDocText: text
    };
  },

  getIntegrationContentByTopic: function(topicName, grade, subj, level, lessonTitle, periodIdx) {
    var s = (subj || 'toan').toLowerCase();
    var tLower = (topicName || '').toLowerCase();
    var g = parseInt(grade) || 5;

    // 1. CHUYÊN ĐỀ TRÍ TUỆ NHÂN TẠO (AI) & KỸ NĂNG SỐ
    if (tLower.indexOf('trí tuệ nhân tạo') !== -1 || tLower.indexOf('ai') !== -1 || tLower.indexOf('kỹ năng số') !== -1 || tLower.indexOf('công nghệ') !== -1) {
      if (s === 'toan') {
        var toanVariants = [
          {
            yccd: 'Học sinh bước đầu làm quen với ứng dụng của trí tuệ nhân tạo (AI) trong tính toán số liệu; rèn luyện tư duy logic và kiểm tra kết quả.',
            gv: 'GV đặt câu hỏi gợi mở: "Để tính toán nhanh và xử lý khối lượng lớn các con số như trong bài toán hôm nay, máy tính hay công nghệ AI làm như thế nào?"; hướng dẫn HS nhận biết vai trò của dữ liệu chính xác và con người luôn là người quyết định.',
            hs: 'HS trao đổi nhóm đôi, nhận biết AI giúp con người tính toán nhanh nhưng bản thân cần tự giác tính cẩn thận, biết kiểm tra lại kết quả.'
          },
          {
            yccd: 'Nhận biết máy tính và AI cần dữ liệu số chính xác để phân tích; rèn tính cẩn thận, trung thực khi thu thập và giải quyết các bài toán.',
            gv: 'GV liên hệ: "AI học hỏi từ dữ liệu do con người cung cấp. Nếu dữ liệu nhập vào sai thì AI cũng cho kết quả sai. Vì vậy khi làm toán, các em cần cẩn thận từng con số."; hướng dẫn HS cách đối chiếu đáp án.',
            hs: 'HS lắng nghe, đối chiếu các bước giải với bạn trong nhóm, rèn luyện tính chính xác và trung thực khi làm bài tập.'
          },
          {
            yccd: 'Bước đầu nhận biết AI được ứng dụng trong nhận diện hình ảnh, quy luật số và đo lường thông minh trong cuộc sống.',
            gv: 'GV trình chiếu hình ảnh ví dụ máy quét mã hoặc nhận diện biển số xe/hình ảnh thực tế; hướng dẫn HS liên hệ quy luật toán học được ứng dụng trong công nghệ AI.',
            hs: 'HS hào hứng phát biểu các ví dụ về công nghệ thông minh quanh mình; củng cố niềm yêu thích học toán.'
          }
        ];
        var item = toanVariants[periodIdx % toanVariants.length];
        return {
          brief: 'Ứng dụng AI và tư duy dữ liệu số vào bài toán',
          yccdText: 'Tích hợp Giáo dục Trí tuệ nhân tạo (AI) (' + level + '): ' + item.yccd,
          dodungText: 'Hình ảnh, video hoặc slide minh họa ứng dụng công nghệ/AI trong xử lý số liệu.',
          teacherAct: item.gv,
          studentAct: item.hs
        };
      } else if (s === 'tieng_viet') {
        var tvVariants = [
          {
            yccd: 'Bước đầu nhận biết ứng dụng của AI trong xử lý từ ngữ, dịch thuật và đọc văn bản; bồi dưỡng tư duy phản biện và giữ gìn sự trong sáng của tiếng Việt.',
            gv: 'GV nêu câu hỏi: "Khi các em nghe trợ lý ảo đọc sách hoặc dịch từ ngữ, các em thấy AI có thay thế được giọng đọc truyền cảm của con người không?"; nhắc nhở HS dùng công nghệ hỗ trợ nhưng luôn giữ gìn cảm xúc và sự trong sáng của tiếng Việt.',
            hs: 'HS chia sẻ cảm nhận, tích cực luyện đọc diễn cảm và thể hiện cảm xúc chân thành khi nói và viết.'
          },
          {
            yccd: 'Hình thành ý thức chọn lọc thông tin khi tra cứu tài liệu từ internet và công cụ AI; không phụ thuộc máy móc.',
            gv: 'GV hướng dẫn: "Khi tìm kiếm tài liệu trên mạng hoặc qua AI, thông tin có thể chưa chuẩn xác. Các em cần đối chiếu với sách giáo khoa và hỏi ý kiến thầy cô."; rèn thói quen đọc hiểu sâu.',
            hs: 'HS ghi nhớ nguyên tắc đối chiếu nguồn tin, tự giác đọc hiểu và tự viết bài theo suy nghĩ của bản thân.'
          }
        ];
        var item = tvVariants[periodIdx % tvVariants.length];
        return {
          brief: 'Ứng dụng AI trong ngôn ngữ & tư duy phản biện',
          yccdText: 'Tích hợp Giáo dục Trí tuệ nhân tạo (AI) (' + level + '): ' + item.yccd,
          dodungText: 'Tư liệu, ví dụ trực quan về công nghệ xử lý ngôn ngữ/trợ lý ảo.',
          teacherAct: item.gv,
          studentAct: item.hs
        };
      } else {
        return {
          brief: 'Tìm hiểu ứng dụng của công nghệ và AI an toàn',
          yccdText: 'Tích hợp Giáo dục Trí tuệ nhân tạo (AI) (' + level + '): Nhận biết ứng dụng của công nghệ thông minh trong đời sống; có ý thức sử dụng thiết bị số an toàn, lành mạnh.',
          dodungText: 'Hình ảnh hoặc video minh họa ứng dụng khoa học công nghệ, rô-bốt, AI.',
          teacherAct: 'GV giới thiệu ứng dụng công nghệ AI liên quan đến chủ đề bài học; nhắc nhở học sinh văn hóa sử dụng công nghệ an toàn, không lạm dụng thiết bị số.',
          studentAct: 'HS quan sát, thảo luận về những lợi ích và lưu ý an toàn khi tiếp xúc với thiết bị thông minh.'
        };
      }
    }

    // 2. CHUYÊN ĐỀ QUYỀN CON NGƯỜI & QUYỀN TRẺ EM
    if (tLower.indexOf('quyền con người') !== -1 || tLower.indexOf('quyền trẻ em') !== -1) {
      return {
        brief: 'Giáo dục quyền được học tập, bày tỏ ý kiến và tôn trọng sự khác biệt',
        yccdText: 'Tích hợp Quyền con người & Quyền trẻ em (' + level + '): Học sinh hiểu quyền được bày tỏ ý kiến và học tập bình đẳng; biết lắng nghe, tôn trọng và yêu thương bạn bè.',
        dodungText: 'Tình huống, tranh ảnh về quyền trẻ em được học tập, vui chơi an toàn.',
        teacherAct: 'GV tạo cơ hội cho mọi học sinh trong lớp đều được phát biểu, bày tỏ suy nghĩ; nhắc nhở các em tôn trọng sự khác biệt, không trêu chọc hay phân biệt đối xử.',
        studentAct: 'HS mạnh dạn chia sẻ ý kiến, tích cực hợp tác nhóm, lắng nghe và động viên bạn bè cùng tiến bộ.'
      };
    }

    // 3. CHUYÊN ĐỀ BẢO VỆ MÔI TRƯỜNG & BIẾN ĐỔI KHÍ HẬU
    if (tLower.indexOf('môi trường') !== -1 || tLower.indexOf('khí hậu') !== -1 || tLower.indexOf('rác thải') !== -1) {
      return {
        brief: 'Ý thức giữ gìn môi trường xanh, sạch, đẹp và tiết kiệm tài nguyên',
        yccdText: 'Tích hợp Bảo vệ môi trường (' + level + '): Nhận thức được tầm quan trọng của việc giữ gìn môi trường sống; có hành động thiết thực tiết kiệm tài nguyên và bảo vệ thiên nhiên.',
        dodungText: 'Tranh ảnh, tư liệu thực tế về bảo vệ môi trường, cây xanh, phân loại rác.',
        teacherAct: 'GV liên hệ nội dung bài học với việc bảo vệ môi trường xung quanh trường lớp; nhắc nhở học sinh tiết kiệm điện nước, giữ vệ sinh chung.',
        studentAct: 'HS liên hệ những việc làm cụ thể ở lớp và ở nhà: vứt rác đúng nơi quy định, tắt điện khi ra khỏi phòng, chăm sóc cây xanh.'
      };
    }

    // 4. CHUYÊN ĐỀ AN TOÀN GIAO THÔNG
    if (tLower.indexOf('giao thông') !== -1 || tLower.indexOf('atgt') !== -1) {
      return {
        brief: 'Chấp hành quy tắc an toàn giao thông đường bộ',
        yccdText: 'Tích hợp An toàn giao thông (' + level + '): Nhận biết và tự giác chấp hành các quy định an toàn khi tham gia giao thông; bảo vệ bản thân và mọi người.',
        dodungText: 'Hình ảnh biển báo, tình huống an toàn giao thông phù hợp lứa tuổi tiểu học.',
        teacherAct: 'GV nhắc nhở học sinh quy tắc an toàn khi đi bộ, đội mũ bảo hiểm khi ngồi trên xe máy/xe đạp điện; phê phán hành vi nguy hiểm.',
        studentAct: 'HS nhắc lại các quy tắc an toàn khi đi học; cam kết thực hiện đúng văn hóa giao thông.'
      };
    }

    // 5. CHUYÊN ĐỀ PHÒNG CHỐNG ĐUỐI NƯỚC
    if (tLower.indexOf('đuối nước') !== -1) {
      return {
        brief: 'Kỹ năng phòng, chống đuối nước và tai nạn thương tích',
        yccdText: 'Tích hợp Phòng chống đuối nước (' + level + '): Nhận biết các nguy cơ tai nạn đuối nước; rèn kỹ năng phòng tránh và không tự ý đến gần ao, hồ nguy hiểm.',
        dodungText: 'Tranh ảnh cảnh báo khu vực nước sâu nguy hiểm, biển báo cấm tắm.',
        teacherAct: 'GV cảnh báo các khu vực tiềm ẩn nguy cơ đuối nước (ao, hồ, sông, suối, hố công trình); hướng dẫn HS cách tìm kiếm sự trợ giúp của người lớn khi gặp sự cố.',
        studentAct: 'HS ghi nhớ quy tắc: tuyệt đối không tự ý tắm sông/ao hồ khi không có người lớn; biết hô hoán người lớn khi thấy người đuối nước.'
      };
    }

    // 6. CHUYÊN ĐỀ GIÁO DỤC TÀI CHÍNH
    if (tLower.indexOf('tài chính') !== -1 || tLower.indexOf('tiết kiệm') !== -1) {
      return {
        brief: 'Hình thành kỹ năng quản lý và tiết kiệm tiền bạc, tài sản',
        yccdText: 'Tích hợp Giáo dục tài chính (' + level + '): Hiểu được giá trị của đồng tiền và sức lao động; bước đầu hình thành thói quen chi tiêu hợp lý và tiết kiệm.',
        dodungText: 'Tình huống chi tiêu, hình ảnh ví dụ về tiết kiệm sách vở, đồ dùng học tập.',
        teacherAct: 'GV lồng ghép giáo dục ý thức giữ gìn đồ dùng học tập, sách vở; hướng dẫn HS hiểu tiết kiệm tài nguyên chính là tiết kiệm tài chính cho gia đình.',
        studentAct: 'HS chia sẻ cách giữ gìn đồ dùng, nuôi heo đất tiết kiệm và mua sắm những thứ thực sự cần thiết.'
      };
    }

    // 7. CHUYÊN ĐỀ GIÁO DỤC ĐỊA PHƯƠNG
    if (tLower.indexOf('địa phương') !== -1 || tLower.indexOf('gdđp') !== -1) {
      return {
        brief: 'Tìm hiểu và tự hào về truyền thống, nét đẹp quê hương',
        yccdText: 'Tích hợp Giáo dục địa phương (' + level + '): Bồi dưỡng tình yêu quê hương, đất nước thông qua những danh lam, sản vật và truyền thống văn hóa địa phương.',
        dodungText: 'Tranh ảnh, video giới thiệu di tích lịch sử, cảnh đẹp hoặc sản vật quê hương.',
        teacherAct: 'GV gợi mở để HS liên hệ bài học với cảnh quan, làng nghề hoặc đặc sản của địa phương; khơi gợi lòng tự hào quê hương.',
        studentAct: 'HS hào hứng giới thiệu những địa danh, món ăn hoặc nét đẹp quê hương mình với bạn bè.'
      };
    }

    // CHUYÊN ĐỀ MẶC ĐỊNH CHUNG
    return {
      brief: 'Tích hợp chuyên đề ' + topicName + ' vào bài học',
      yccdText: 'Tích hợp ' + topicName + ' (' + level + '): Vận dụng kiến thức bài học để nhận biết và xử lý tình huống thực tế liên quan đến ' + topicName + '; hình thành phẩm chất chăm chỉ, trách nhiệm.',
      dodungText: 'Tư liệu, hình ảnh minh họa liên quan đến chuyên đề ' + topicName + '.',
      teacherAct: 'GV hướng dẫn học sinh liên hệ kiến thức bài học vào thực tế chủ đề ' + topicName + '; nhấn mạnh ý nghĩa giáo dục thực tiễn.',
      studentAct: 'HS tích cực trao đổi, bày tỏ suy nghĩ và liên hệ vận dụng vào đời sống hằng ngày.'
    };
  },

  generatePlanViaSmartRuleEngine: function(grade, subj, weeksPlan, docSummary, userNotes) {
    var self = this;
    var results = [];
    var topic = (docSummary && docSummary.topicName) || 'Chuyên đề mới';

    var targetParts = [
      'Hoạt động Vận dụng, trải nghiệm',
      'Hoạt động Khám phá kiến thức mới',
      'Hoạt động Luyện tập, thực hành',
      'Hoạt động Khởi động'
    ];

    var levels = ['Liên hệ', 'Bộ phận', 'Toàn phần'];

    // Nhận diện yêu cầu dạy học phân hóa cho học sinh khuyết tật / hòa nhập
    var disSupport = (typeof integrationState !== 'undefined' && integrationState.disabilitySupport) || null;
    var promptSource = ((docSummary && (docSummary.rawDocText || docSummary.fullSnippet || docSummary.topicName)) || '') + ' ' + (userNotes || '');
    var isDisabilityRequested = (disSupport && disSupport.enabled) || /khuyết\s*tật|hòa\s*nhập|khuyet\s*tat|hoa\s*nhap/i.test(promptSource);
    var cognitivePct = (disSupport && disSupport.enabled) ? (disSupport.cognitiveRate + '%') : '50%';
    var pctMatch = promptSource.match(/(\d{1,3})\s*%/);
    if (pctMatch && (!disSupport || !disSupport.enabled)) {
      cognitivePct = pctMatch[1] + '%';
    }

    // Kiểm tra xem chuyên đề này là chuyên đề thuần khuyết tật hay kết hợp với chuyên đề khác
    var hasOtherTopic = topic.includes('Trí tuệ') || topic.includes('STEM') || topic.includes('giao thông') || topic.includes('môi trường') || topic.includes('đuối nước') || topic.includes('Kỹ năng sống') || topic.includes('Quyền') || topic.includes('Tài chính') || topic.includes('Địa phương');
    var isOnlyDisability = isDisabilityRequested && !hasOtherTopic;

    weeksPlan.forEach(function(weekItem) {
      (weekItem.lessons || []).forEach(function(les, lIdx) {
        var pIdx = lIdx % targetParts.length;
        var chosenPart = targetParts[pIdx];
        var chosenLevel = levels[lIdx % levels.length];
        var lessonTitle = les.title || les.lessonTitle || ('Bài ' + (lIdx + 1));

        var content = self.getIntegrationContentByTopic(topic, grade, subj, chosenLevel, lessonTitle, lIdx);
        var lessonId = (subj || 'toan') + '_' + weekItem.week + '_' + lIdx;

        var yccdLines = [];
        if (!isOnlyDisability) {
          yccdLines.push('- ' + content.yccdText);
        }
        if (isDisabilityRequested) {
          if (les.disabilityYccdAI) {
            yccdLines.push(les.disabilityYccdAI);
          }
        }

        var teacherAct = content.teacherAct;
        var studentAct = content.studentAct;
        if (isDisabilityRequested) {
          teacherAct += ' (GV đặc biệt lưu ý hướng dẫn trực quan từng bước, giao nhiệm vụ vừa sức và động viên em học sinh khuyết tật trong lớp).';
          studentAct += ' (Học sinh khuyết tật tích cực lắng nghe, tham gia nhận biết và hoàn thành nhiệm vụ theo khả năng với sự trợ giúp của bạn).';
        }

        var brief = content.brief;
        if (isDisabilityRequested) {
          brief = isOnlyDisability ? ('Điều chỉnh YCCĐ cho HS khuyết tật (' + cognitivePct + ')') : (brief + ' & Phân hóa HS khuyết tật (' + cognitivePct + ')');
        }

        results.push({
          lessonId: lessonId,
          week: weekItem.week,
          periodIndex: lIdx,
          period: les.period || ('Tiết ' + (lIdx + 1)),
          title: lessonTitle,
          targetPart: chosenPart,
          level: chosenLevel,
          integrationBrief: brief,
          yccdAddition: yccdLines.join('\n'),
          dodungAddition: '- ' + content.dodungText + (isDisabilityRequested ? '\n- Phiếu học tập hình ảnh trực quan hỗ trợ học sinh khuyết tật.' : ''),
          activityAddition: {
            stepName: chosenPart + ' (3-5 phút)',
            teacherAct: teacherAct,
            studentAct: studentAct
          }
        });
      });
    });

    return results;
  },

  generatePlanViaGeminiAI: async function(apiKey, grade, subj, sWeek, eWeek, weeksPlan, docTitle, docText, userNotes) {
    var lessonsListDesc = [];
    weeksPlan.forEach(function(w) {
      (w.lessons || []).forEach(function(l, idx) {
        // Trích xuất YCCĐ mục Năng lực đặc thù để AI đọc trực tiếp
        var rawYccd = (l.yccd || []).filter(function(line) {
          return !/3\.\s*phẩm\s*chất|4\.\s*tích\s*hợp/i.test(line);
        }).slice(0, 5);

        lessonsListDesc.push({
          lessonId: subj + '_' + w.week + '_' + idx,
          week: w.week,
          periodIndex: idx,
          period: l.period || ('Tiết ' + (idx + 1)),
          title: l.title || l.lessonTitle || '',
          originalYccd: rawYccd
        });
      });
    });

    var prompt = `Bạn là Chuyên gia Phương pháp Dạy học Tiểu học và Soạn Kế hoạch bài dạy (KHBD) chuẩn Công văn 2345/BGDĐT-GDTH.
Nhiệm vụ của bạn: Nghiên cứu kỹ tài liệu chỉ đạo tích hợp dưới đây, đối chiếu với danh sách các bài dạy môn ${subj.toUpperCase()} - Khối ${grade} (Từ tuần ${sWeek} đến tuần ${eWeek}), và lập KẾ HOẠCH TÍCH HỢP CHI TIẾT cho từng bài dạy.

TÀI LIỆU TÍCH HỢP HOẶC YÊU CẦU SƯ PHẠM (${docTitle}):
"""
${docText.substring(0, 350000)}
"""

YÊU CẦU ĐẶC BIỆT CỦA GIÁO VIÊN: "${userNotes || 'Tích hợp sâu sát, sinh động, chuẩn CV 2345'}"

DANH SÁCH BÀI DẠY CẦN TÍCH HỢP (KÈM YCCĐ GỐC ĐỂ AI ĐỌC TRỰC TIẾP):
${JSON.stringify(lessonsListDesc, null, 2)}

QUY TẮC SƯ PHẠM BẮT BUỘC (CHUẨN CV 2345):
1. XÁC ĐỊNH ĐÚNG CHỦ ĐỀ CHÍNH: Xác định đúng chủ đề cốt lõi của tài liệu (ví dụ: Trí tuệ nhân tạo (AI), Quyền con người, STEM, An toàn giao thông, Môi trường, Giáo dục hòa nhập học sinh khuyết tật...). Tuyệt đối không ghép nối lan man các từ ngẫu nhiên.
2. MỤC TIÊU YÊU CẦU CẦN ĐẠT (yccdAddition):
   - Phải viết theo ngôn ngữ sư phạm tiểu học, bắt đầu bằng động từ hành động ("Bước đầu nhận biết...", "Làm quen với...", "Hình thành ý thức...").
   - TUYỆT ĐỐI KHÔNG sao chép nguyên văn tiêu đề tài liệu, tên chương mục, tên đề án, khẩu hiệu hành chính vào mục tiêu bài dạy.
   - Định dạng chuẩn: "- Tích hợp [Tên chuyên đề] ([Liên hệ/Bộ phận/Toàn phần]): Học sinh [mục tiêu cụ thể gắn với bài học]..."
3. ĐỒ DÙNG DẠY HỌC (dodungAddition): Ngắn gọn, thiết thực (hình ảnh, video, phiếu học tập...).
4. TIẾN TRÌNH HOẠT ĐỘNG (activityAddition):
   - stepName: Tên hoạt động được chọn (Khởi động, Khám phá, Luyện tập, Vận dụng) kèm "(3-5 phút)".
   - teacherAct: Lời thoại dẫn dắt sinh động của GV (2-3 câu gắn liền nội dung bài học).
   - studentAct: Hành động cụ thể của HS (quan sát, thảo luận nhóm, phát biểu, liên hệ thực tế).
5. HỖ TRỢ DẠY HỌC PHÂN HÓA / HỌC SINH KHUYẾT TẬT HÒA NHẬP (QUAN TRỌNG ĐẶC BIỆT):
   - Nếu trong văn bản, câu lệnh chat hoặc yêu cầu của giáo viên có đề cập đến học sinh khuyết tật, học sinh hòa nhập, hoặc tỉ lệ nhận thức (ví dụ nhận thức 50%, 30%...):
   - BẮT BUỘC AI PHẢI ĐỌC KỸ trường "originalYccd" (mục Năng lực đặc thù) của từng bài dạy tương ứng ở trên để soạn lại yêu cầu cần đạt riêng biệt, vừa sức bám sát kiến thức cụ thể của bài học đó (hạ mức độ từ vận dụng/phân tích xuống nhận biết/làm quen/nhắc lại trực quan vừa sức theo mức nhận thức của em).
   - Ghi xuống cuối cùng của "yccdAddition" đúng định dạng:
     \n- Đối với học sinh khuyết tật: Biết [mục tiêu cụ thể đã được tinh giản bám sát kiến thức/bài đọc/phép tính/khái niệm của bài này].
   - TUYỆT ĐỐI KHÔNG dùng câu văn chung chung rập khuôn và KHÔNG thêm cụm từ mở ngoặc rập khuôn ở cuối câu như "(dưới sự gợi ý, hướng dẫn...)". Viết câu tự nhiên, bám sát nội dung bài học!
   - Trong "activityAddition", giáo viên có lời hướng dẫn trực quan, động viên và giao việc vừa sức để học sinh khuyết tật cùng tham gia học tập hòa nhập với các bạn.

Hãy trả về kết quả dạng JSON thuần túy (không kèm markdown code block \`\`\`json) với cấu trúc mảng suggestions như sau:
[
  {
    "lessonId": "toan_1_0",
    "week": 1,
    "periodIndex": 0,
    "period": "Tiết 1",
    "title": "Tên bài",
    "targetPart": "Hoạt động Vận dụng, trải nghiệm",
    "level": "Liên hệ",
    "integrationBrief": "Tóm tắt ngắn gọn nội dung tích hợp vào tiết này",
    "yccdAddition": "- Tích hợp [Tên chuyên đề] (Liên hệ): Học sinh nhận biết/thực hành ...\\n- Đối với học sinh khuyết tật: ...",
    "dodungAddition": "- Hình ảnh/tư liệu ...",
    "activityAddition": {
      "stepName": "Hoạt động Vận dụng, trải nghiệm (3-5 phút)",
      "teacherAct": "Lời thoại và nhiệm vụ cụ thể GV giao cho HS",
      "studentAct": "Hoạt động cụ thể của HS: thảo luận, trả lời, thực hành"
    }
  }
]`;

    var response = await AIService.callGeminiApi(apiKey, prompt, { temperature: 0.3, maxTokens: 4000 });
    var cleanJson = response.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/, '').trim();
    var parsed = JSON.parse(cleanJson);
    if (Array.isArray(parsed)) return parsed;
    if (parsed && Array.isArray(parsed.suggestions)) return parsed.suggestions;
    throw new Error('Dữ liệu AI trả về không đúng định dạng mảng JSON');
  },

  refineIntegrationPlanWithFeedback: async function(currentPlan, userFeedback) {
    if (!currentPlan || !currentPlan.suggestions) throw new Error('Kế hoạch tích hợp không hợp lệ.');
    var apiKey = this.getGeminiApiKey();

    if (apiKey && typeof AIService !== 'undefined' && AIService.callGeminiApi) {
      try {
        var prompt = `Bạn là Trợ lý AI Soạn Giáo Án Tiểu Học. Dưới đây là Bảng Kế hoạch Tích hợp hiện tại:
${JSON.stringify(currentPlan.suggestions, null, 2)}

Ý KIẾN GÓP Ý / YÊU CẦU ĐIỀU CHỈNH CỦA GIÁO VIÊN:
"${userFeedback}"

Hãy điều chỉnh và hoàn thiện lại toàn bộ bảng Kế hoạch tích hợp theo đúng góp ý của giáo viên.
Trả về JSON thuần túy (mảng các bài dạy đã cập nhật):`;

        var response = await AIService.callGeminiApi(apiKey, prompt, { temperature: 0.3 });
        var cleanJson = response.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/, '').trim();
        var updatedSuggestions = JSON.parse(cleanJson);
        if (Array.isArray(updatedSuggestions)) {
          currentPlan.suggestions = updatedSuggestions;
          return currentPlan;
        }
      } catch (err) {
        console.warn('Lỗi AI tinh chỉnh, chuyển sang bộ xử lý trực tiếp:', err);
      }
    }

    currentPlan.suggestions.forEach(function(s) {
      s.integrationBrief += ' (Đã cập nhật theo yêu cầu: ' + userFeedback.substring(0, 60) + ')';
      s.yccdAddition += ' [Cập nhật: ' + userFeedback.substring(0, 40) + ']';
      if (s.activityAddition) {
        s.activityAddition.teacherAct += ' (GV lưu ý: ' + userFeedback + ')';
      }
    });

    return currentPlan;
  },


  // =========================================================================
  // 7. LÀM SẠCH TÍCH HỢP CŨ & CHÈN TÍCH HỢP MỚI VÀO BÀI DẠY (CV 2345)
  // =========================================================================

  cleanLegacyIntegrationFromLesson: function(origLesson) {
    if (!origLesson) return origLesson;
    var les = JSON.parse(JSON.stringify(origLesson));

    var integKeywords = [
      '[Tích hợp', '[Tích hợp mới]', '(Tích hợp)', '[NỘI DUNG TÍCH HỢP', '[GDĐP]', '[QCN]', '[ATGT]', '[BVMT]', '[KNS]', '[GDTC]', '[AI',
      'Tích hợp GDĐP', 'Tích hợp Quyền con người', 'Tích hợp Quyền trẻ em', 'Tích hợp Phòng chống đuối nước',
      'Tích hợp Giáo dục tài chính', 'Tích hợp An toàn giao thông', 'Tích hợp Bảo vệ môi trường',
      'Tích hợp Chuyển đổi số', 'Tích hợp Kỹ năng số', 'Tích hợp Quốc phòng', 'Tích hợp Giáo dục Trí tuệ nhân tạo',
      'Tích hợp Trí tuệ nhân tạo', 'Tích hợp AI', 'Tích hợp STEM', 'Tích hợp Kỹ năng sống', 'Năng lực số', 'Kỹ năng số',
      'AI 5.', 'AI 4.', 'AI 3.', 'AI 2.', 'AI 1.',
      'Đối với học sinh khuyết tật', 'học sinh khuyết tật'
    ];

    function isIntegratedText(text) {
      if (!text || typeof text !== 'string') return false;
      return integKeywords.some(function(kw) { return text.indexOf(kw) !== -1; });
    }

    if (Array.isArray(les.yccd)) {
      les.yccd = les.yccd.filter(function(line) { return !isIntegratedText(line); });
      this.cleanDisabilityFromLesson(les);
    }

    var dodungProp = Array.isArray(les.dodung) ? 'dodung' : (Array.isArray(les.teachingAids) ? 'teachingAids' : null);
    if (dodungProp && Array.isArray(les[dodungProp])) {
      les[dodungProp] = les[dodungProp].filter(function(line) { return !isIntegratedText(line); });
    }

    if (Array.isArray(les.tables)) {
      les.tables = les.tables.map(function(tableRows) {
        if (!Array.isArray(tableRows)) return tableRows;
        var filtered = [];
        for (var i = 0; i < tableRows.length; i++) {
          var row = tableRows[i];
          if (!Array.isArray(row)) continue;
          var nextRow = tableRows[i + 1];
          var isNextInteg = Array.isArray(nextRow) && nextRow.some(function(c) { return isIntegratedText(c); });
          if (row.length === 1 && isNextInteg) {
            continue;
          }
          var rowStr = row.join(' ');
          if (isIntegratedText(rowStr)) {
            continue;
          }
          filtered.push(row);
        }
        return filtered;
      });
    }

    return les;
  },

  injectIntegrationIntoLesson: function(origLesson, suggestion, overwriteLegacy) {
    var shouldClean = (overwriteLegacy !== false);
    var lesson = shouldClean ? this.cleanLegacyIntegrationFromLesson(origLesson) : JSON.parse(JSON.stringify(origLesson));
    this.healLeakedYccd(lesson);

    if (!lesson.yccd) lesson.yccd = [];
    if (suggestion.yccdAddition) {
      var lines = suggestion.yccdAddition.split(/\r?\n/);
      lines.forEach(function(l) {
        var cleanLine = l.replace(/^-\s*/, '').trim();
        cleanLine = cleanLine
          .replace(/\[?NỘI DUNG TÍCH HỢP MỚI\]?:?\s*/gi, '')
          .replace(/\[?NỘI DUNG TÍCH HỢP\]?:?\s*/gi, '')
          .replace(/\[?TÍCH HỢP MỚI\]?:?\s*/gi, '')
          .replace(/^\[Tích hợp\]\s*/i, '')
          .replace(/\(Tích hợp\)/gi, '')
          .replace(/[ \t]{2,}/g, ' ')
          .trim();
        if (cleanLine) {
          if (/^đối với học sinh khuyết tật/i.test(cleanLine)) {
            cleanLine = cleanLine
              .replace(/\s*\((?:dưới sự gợi ý|dưới sự hướng dẫn|dưới sự trợ giúp|có sự hỗ trợ của bạn cùng nhóm|sự hỗ trợ của bạn).*?\)/gi, '')
              .replace(/[;\s]+$/, '')
              .trim();
            if (!cleanLine.endsWith('.')) cleanLine += '.';
            lesson.yccd.push('- ' + cleanLine);
          } else {
            lesson.yccd.push('[Tích hợp] - ' + cleanLine);
          }
        }
      });
    }

    var dodungList = lesson.dodung || lesson.teachingAids || [];
    if (suggestion.dodungAddition) {
      var dLines = suggestion.dodungAddition.split(/\r?\n/);
      dLines.forEach(function(dl) {
        var rawDodung = dl.replace(/^-\s*/, '').trim();
        var cleanDodung = rawDodung
          .replace(/\[?NỘI DUNG TÍCH HỢP MỚI\]?:?\s*/gi, '')
          .replace(/\[?NỘI DUNG TÍCH HỢP\]?:?\s*/gi, '')
          .replace(/\[?TÍCH HỢP MỚI\]?:?\s*/gi, '')
          .replace(/^\[Tích hợp\]\s*/i, '')
          .replace(/\(Tích hợp\)/gi, '')
          .replace(/[ \t]{2,}/g, ' ')
          .trim();
        if (cleanDodung) {
          dodungList.push('[Tích hợp] - ' + cleanDodung);
        }
      });
    }
    lesson.dodung = dodungList;
    lesson.teachingAids = dodungList;

    if (!lesson.tables || lesson.tables.length === 0) {
      lesson.tables = [[]];
    }

    if (suggestion.activityAddition) {
      var act = suggestion.activityAddition;
      var cleanStepName = (act.stepName || 'Hoạt động Vận dụng')
        .replace(/\[?NỘI DUNG TÍCH HỢP MỚI\]?:?\s*/gi, '')
        .replace(/\[?NỘI DUNG TÍCH HỢP\]?:?\s*/gi, '')
        .replace(/\[?TÍCH HỢP MỚI\]?:?\s*/gi, '')
        .replace(/\(Tích hợp\)/gi, '')
        .replace(/\[.*?\]/g, '')
        .replace(/\s{2,}/g, ' ')
        .trim();
      var newHeaderRow = ['* ' + cleanStepName];
      var teacherActText = (act.teacherAct || '')
        .replace(/\[?NỘI DUNG TÍCH HỢP MỚI\]?:?\s*/gi, '')
        .replace(/\[?NỘI DUNG TÍCH HỢP\]?:?\s*/gi, '')
        .replace(/\[?TÍCH HỢP MỚI\]?:?\s*/gi, '')
        .replace(/^\[Tích hợp\]\s*/i, '')
        .replace(/\(Tích hợp\)/gi, '')
        .replace(/\s{2,}/g, ' ')
        .trim();
      if (!teacherActText.startsWith('-') && !teacherActText.startsWith('+')) {
        teacherActText = '- ' + teacherActText;
      }
      var studentActText = (act.studentAct || '')
        .replace(/\[?NỘI DUNG TÍCH HỢP MỚI\]?:?\s*/gi, '')
        .replace(/\[?NỘI DUNG TÍCH HỢP\]?:?\s*/gi, '')
        .replace(/\[?TÍCH HỢP MỚI\]?:?\s*/gi, '')
        .replace(/^\[Tích hợp\]\s*/i, '')
        .replace(/\(Tích hợp\)/gi, '')
        .replace(/\s{2,}/g, ' ')
        .trim();
      if (studentActText && !studentActText.startsWith('-') && !studentActText.startsWith('+')) {
        studentActText = '- ' + studentActText;
      }
      var newActRow = [
        '[Tích hợp] ' + teacherActText,
        '[Tích hợp] ' + (studentActText || '')
      ];

      var lastTable = lesson.tables[lesson.tables.length - 1];
      if (Array.isArray(lastTable)) {
        lastTable.push(newHeaderRow);
        lastTable.push(newActRow);
      }
    }

    return lesson;
  },

  applyIntegrationToWeekRange: async function(plan, selectedLessonsMap, overwriteLegacy) {
    var grade = plan.grade;
    var subj = plan.subjectKey;
    var sWeek = plan.startWeek;
    var eWeek = plan.endWeek;
    var shouldClean = (overwriteLegacy !== false);

    await this.ensureSubjectLoaded(grade, subj);

    var khbdDataObj = (typeof window !== 'undefined' && window.KHBD_DATA) ? window.KHBD_DATA : (typeof KHBD_DATA !== 'undefined' ? KHBD_DATA : null);
    var weeksPlan = khbdDataObj ? khbdDataObj.getWeekRangePlan(grade, subj, sWeek, eWeek) : [];

    var lookupSuggestions = {};
    var hasMap = selectedLessonsMap && typeof selectedLessonsMap === 'object';
    (plan.suggestions || []).forEach(function(s) {
      if (!hasMap || selectedLessonsMap[s.lessonId] !== false) {
        lookupSuggestions[s.lessonId] = s;
      }
    });

    var finalLessons = [];

    weeksPlan.forEach(function(weekItem) {
      (weekItem.lessons || []).forEach(function(origLes, lIdx) {
        var lessonId = subj + '_' + weekItem.week + '_' + lIdx;
        var suggestion = lookupSuggestions[lessonId];

        var integratedLesson = null;
        if (suggestion) {
          integratedLesson = IntegrationService.injectIntegrationIntoLesson(origLes, suggestion, shouldClean);
        } else {
          integratedLesson = shouldClean ? IntegrationService.cleanLegacyIntegrationFromLesson(origLes) : JSON.parse(JSON.stringify(origLes));
        }

        integratedLesson.week = weekItem.week;
        integratedLesson.grade = grade;
        integratedLesson.subjectName = plan.subjectName;
        integratedLesson.subjectKey = subj;

        finalLessons.push(integratedLesson);
      });
    });

    var disSupport = (plan && plan.disabilitySupport) || (typeof integrationState !== 'undefined' && integrationState.disabilitySupport);
    if (disSupport && disSupport.enabled) {
      await IntegrationService.adaptLessonsDisabilityWithGemini(finalLessons, disSupport);
    }

    return finalLessons;
  },


  // =========================================================================
  // 8. XUẤT FILE WORD (.DOC) CHUẨN CÔNG VĂN 2345 (TỪNG MÔN & THEO TKB)
  // =========================================================================

  /**
   * Chuẩn hóa tên giáo viên để gắn vào đuôi tên file (loại bỏ ký tự cấm, chuyển khoảng trắng thành gạch dưới)
   */
  formatTeacherNameForFilename: function(teacherName) {
    if (!teacherName || typeof teacherName !== 'string') return '';
    var raw = teacherName.trim();
    if (raw.replace(/[._\-\s]/g, '').length === 0) return '';
    var clean = raw.replace(/[\\/:*?"<>|]/g, '').trim();
    clean = clean.replace(/\s+/g, '_').replace(/_+/g, '_');
    return clean ? ('_' + clean) : '';
  },

  /**
   * Lấy tên giáo viên hiệu lực từ metadata, kết quả tuần hoặc cài đặt hệ thống
   */
  getEffectiveTeacherName: function(meta, planResult) {
    if (meta && meta.teacherName && typeof meta.teacherName === 'string' && meta.teacherName.replace(/[._\-\s]/g, '').length > 0) {
      return meta.teacherName;
    }
    if (planResult && planResult.teacherName && typeof planResult.teacherName === 'string' && planResult.teacherName.replace(/[._\-\s]/g, '').length > 0) {
      return planResult.teacherName;
    }
    if (planResult && planResult.metadata && planResult.metadata.teacherName && planResult.metadata.teacherName.replace(/[._\-\s]/g, '').length > 0) {
      return planResult.metadata.teacherName;
    }
    if (planResult && planResult.gvbmConfig && planResult.gvbmConfig.teacherName && planResult.gvbmConfig.teacherName.replace(/[._\-\s]/g, '').length > 0) {
      return planResult.gvbmConfig.teacherName;
    }
    if (typeof integrationState !== 'undefined' && integrationState.teacherName && integrationState.teacherName.replace(/[._\-\s]/g, '').length > 0) {
      return integrationState.teacherName;
    }
    if (typeof localStorage !== 'undefined') {
      try {
        var localName = localStorage.getItem('tvth_teacher_name');
        if (localName && localName.replace(/[._\-\s]/g, '').length > 0) return localName;
      } catch (e) {}
    }
    return '';
  },

  /**
   * Gắn tên giáo viên vào cuối tên file (trước phần mở rộng .doc/.docx) nếu chưa có
   */
  appendTeacherNameToFilename: function(filename, teacherName) {
    if (!filename) filename = 'KHBD.docx';
    var ext = '.docx';
    var baseName = filename;
    if (baseName.toLowerCase().endsWith('.docx')) {
      ext = '.docx';
      baseName = baseName.slice(0, -5);
    } else if (baseName.toLowerCase().endsWith('.doc')) {
      ext = '.docx';
      baseName = baseName.slice(0, -4);
    }

    var teacherSuffix = this.formatTeacherNameForFilename(teacherName);
    if (!teacherSuffix) return baseName + ext;

    var teacherClean = teacherSuffix.replace(/^_/, '');
    var baseNorm = baseName.toLowerCase().replace(/[\s_-]/g, '');
    var teacherNorm = teacherClean.toLowerCase().replace(/[\s_-]/g, '');

    if (!baseNorm.includes(teacherNorm)) {
      baseName += teacherSuffix;
    }

    return baseName + ext;
  },

  /**
   * Xuất file Word trọn gói cho Kế hoạch bài dạy theo Môn
   */
  exportToWord: async function(lessonsOrWeeks, metadata) {
    var meta = metadata || {};
    var grade = meta.grade || 5;
    var subjectName = meta.subjectName || 'Môn học';
    var startWeek = meta.startWeek || 1;
    var endWeek = meta.endWeek || startWeek;
    var schoolName = meta.schoolName || 'TRƯỜNG TIỂU HỌC .................................';
    var teacherName = this.getEffectiveTeacherName(meta, null);
    var schoolYear = meta.schoolYear || '2026 - 2027';
    var className = meta.className || '';

    var lessons = [];
    if (Array.isArray(lessonsOrWeeks)) {
      if (lessonsOrWeeks.length > 0 && lessonsOrWeeks[0].lessons) {
        lessonsOrWeeks.forEach(function(w) {
          (w.lessons || []).forEach(function(l) {
            if (!l.week) l.week = w.week;
            if (!l.subjectName && meta.subjectName) l.subjectName = meta.subjectName;
            lessons.push(l);
          });
        });
      } else {
        lessons = lessonsOrWeeks;
      }
    }

    var disSupport = meta.disabilitySupport || (typeof integrationState !== 'undefined' && integrationState.disabilitySupport);
    if (disSupport && disSupport.enabled) {
      await this.adaptLessonsDisabilityWithGemini(lessons, disSupport);
    }

    var docHtml = this.generateWordHtmlStructure(lessons, {
      title: 'Kế hoạch bài dạy ' + (className || ('Khối ' + grade)) + ' - Môn ' + subjectName + ' (Tuần ' + startWeek + ' - ' + endWeek + ')',
      schoolName: schoolName,
      teacherName: teacherName,
      schoolYear: schoolYear,
      className: className,
      grade: grade,
      subjectName: subjectName,
      startWeek: startWeek,
      endWeek: endWeek,
      disabilitySupport: meta.disabilitySupport,
      approvalConfig: meta.approvalConfig || (typeof integrationState !== 'undefined' && integrationState.approvalConfig)
    });

    var filename = meta.filename || ('KHBD_Lop' + grade + '_' + subjectName + '_Tuan' + startWeek + '-' + endWeek + '.docx');
    filename = this.appendTeacherNameToFilename(filename, teacherName);
    return await this.downloadWordBlob(docHtml, filename);
  },

  /**
   * Xuất file Word trọn gói 1 Tuần theo Thời Khóa Biểu (.doc)
   */
  exportWeekByTimetableWord: async function(weeklyPlanResult, metadata) {
    var meta = metadata || {};
    var isGvbm = (weeklyPlanResult.role === 'gvbm' || meta.role === 'gvbm');
    var grade = weeklyPlanResult.grade || meta.grade || 5;
    var weekNum = weeklyPlanResult.week || meta.week || 1;
    var lessons = weeklyPlanResult.lessons || [];
    var disSupport = meta.disabilitySupport || (weeklyPlanResult && weeklyPlanResult.metadata && weeklyPlanResult.metadata.disabilitySupport) || (typeof integrationState !== 'undefined' && integrationState.disabilitySupport);
    if (disSupport && disSupport.enabled) {
      await this.adaptLessonsDisabilityWithGemini(lessons, disSupport);
    }
    var schoolName = meta.schoolName || (weeklyPlanResult.gvbmConfig && weeklyPlanResult.gvbmConfig.schoolName) || 'TRƯỜNG TIỂU HỌC .................................';
    var teacherName = meta.teacherName || (weeklyPlanResult.gvbmConfig && weeklyPlanResult.gvbmConfig.teacherName) || '';
    var schoolYear = meta.schoolYear || (weeklyPlanResult.gvbmConfig && weeklyPlanResult.gvbmConfig.schoolYear) || '2026 - 2027';
    var className = meta.className || '';

    var isAssignmentMode = !!(weeklyPlanResult.isAssignmentMode || meta.isAssignmentMode);
    var tkbCoverHtml = '';
    if (isGvbm) {
      if (isAssignmentMode) {
        tkbCoverHtml = this.buildTeacherAssignmentCoverHtml(weeklyPlanResult, meta);
      } else {
        tkbCoverHtml = this.buildTeacherTkbCoverHtml(weeklyPlanResult, meta);
      }
    } else {
      var timetable = weeklyPlanResult.timetable || meta.timetable || this.getDefaultTimetable(grade);
      // Xây dựng Bảng Thời Khóa Biểu Tuần định dạng Word cho GVCN
      var tkbTableRows = '';
      
      // Buổi Sáng
      for (var slot = 0; slot < 4; slot++) {
        tkbTableRows += '<tr>';
        tkbTableRows += '<td style="border: 1pt solid #000; padding: 3.5pt 2pt; text-align: center; vertical-align: middle; background-color: #ffffff; width: 20%;">';
        tkbTableRows += '<p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.0; font-size: 11pt; font-weight: bold; text-align: center; white-space: nowrap;">Tiết ' + (slot + 1) + ' (Sáng)</p>';
        tkbTableRows += '</td>';
        timetable.forEach(function(day) {
          var sKey = (day.morning && day.morning[slot]) || '';
          var sDisp = sKey ? IntegrationService.getSubjectDisplayName(sKey) : '';
          tkbTableRows += '<td style="border: 1pt solid #000; padding: 3.5pt 2pt; text-align: center; vertical-align: middle; background-color: #ffffff; width: 16%;">';
          tkbTableRows += '<p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.0; font-size: 11pt; text-align: center;">' + sDisp + '</p>';
          tkbTableRows += '</td>';
        });
        tkbTableRows += '</tr>';
      }

      // Buổi Chiều
      for (var slot = 0; slot < 3; slot++) {
        tkbTableRows += '<tr>';
        tkbTableRows += '<td style="border: 1pt solid #000; padding: 3.5pt 2pt; text-align: center; vertical-align: middle; background-color: #ffffff; width: 20%;">';
        tkbTableRows += '<p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.0; font-size: 11pt; font-weight: bold; text-align: center; white-space: nowrap;">Tiết ' + (slot + 1) + ' (Chiều)</p>';
        tkbTableRows += '</td>';
        timetable.forEach(function(day) {
          var sKey = (day.afternoon && day.afternoon[slot]) || '';
          var sDisp = sKey ? IntegrationService.getSubjectDisplayName(sKey) : '';
          tkbTableRows += '<td style="border: 1pt solid #000; padding: 3.5pt 2pt; text-align: center; vertical-align: middle; background-color: #ffffff; width: 16%;">';
          tkbTableRows += '<p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.0; font-size: 11pt; text-align: center;">' + sDisp + '</p>';
          tkbTableRows += '</td>';
        });
        tkbTableRows += '</tr>';
      }

      var weekRangeInfo = (window.AcademicCalendar && AcademicCalendar.getWeekRange(weekNum)) || null;
      var weekRangeText = weekRangeInfo ? ('<div style="font-size: 11pt; font-weight: normal; margin-top: 2pt; text-transform: none; color: #334155;">(' + weekRangeInfo.label + ')</div>') : '';
      var dMon = (window.AcademicCalendar && AcademicCalendar.getDayDate(weekNum, 2).short) || '';
      var dTue = (window.AcademicCalendar && AcademicCalendar.getDayDate(weekNum, 3).short) || '';
      var dWed = (window.AcademicCalendar && AcademicCalendar.getDayDate(weekNum, 4).short) || '';
      var dThu = (window.AcademicCalendar && AcademicCalendar.getDayDate(weekNum, 5).short) || '';
      var dFri = (window.AcademicCalendar && AcademicCalendar.getDayDate(weekNum, 6).short) || '';

      tkbCoverHtml = `
        <div style="text-align: center; margin-bottom: 15pt;">
          <table style="width: 100%; border-collapse: collapse; border: none; margin-bottom: 10pt;">
            <tr>
              <td style="width: 50%; vertical-align: top; text-align: left; font-size: 13pt;">
                <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.0; font-family: 'Times New Roman', serif; font-size: 13pt;"><b>${schoolName}</b></p>
                <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.0; font-family: 'Times New Roman', serif; font-size: 13pt;">Giáo viên: <b>${teacherName}</b></p>
              </td>
              <td style="width: 50%; vertical-align: top; text-align: right; font-size: 13pt;">
                <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.0; font-family: 'Times New Roman', serif; font-size: 13pt;"><b>NĂM HỌC: ${schoolYear}</b></p>
                <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.0; font-family: 'Times New Roman', serif; font-size: 13pt;">${className ? ('<b>' + className + '</b> • ') : ('Khối <b>' + grade + '</b> • ')}<b>TUẦN ${weekNum}</b></p>
              </td>
            </tr>
          </table>

          <h2 style="font-family: 'Times New Roman', serif; font-size: 14pt; font-weight: bold; text-transform: uppercase; margin: 6pt 0 0 0; line-height: 1.0; text-align: center;">
            KẾ HOẠCH BÀI DẠY TUẦN ${weekNum}
            ${weekRangeText}
          </h2>
          <p style="font-family: 'Times New Roman', serif; font-size: 13pt; font-style: italic; margin: 0pt 0 10pt 0; line-height: 1.0; text-align: center;">(Sắp xếp tuần tự theo Thời khóa biểu giảng dạy)</p>

          <h3 style="font-family: 'Times New Roman', serif; font-size: 13pt; font-weight: bold; text-align: left; text-transform: uppercase; margin: 6pt 0 4pt 0; line-height: 1.0;">
            THỜI KHÓA BIỂU TUẦN ${weekNum}:
          </h3>
          <table class="tkb-table" style="width: 100%; border-collapse: collapse; margin-bottom: 12pt; font-family: 'Times New Roman', serif; font-size: 11pt; border: 1pt solid #000;">
            <thead>
              <tr style="background-color: #e8edf3; font-weight: bold; text-align: center;">
                <th style="border: 1pt solid #000; padding: 3.5pt 2pt; width: 20%; background-color: #e8edf3; text-align: center; vertical-align: middle;">
                  <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.0; font-size: 11pt; font-weight: bold; text-align: center;">Tiết</p>
                </th>
                <th style="border: 1pt solid #000; padding: 3.5pt 2pt; width: 16%; background-color: #e8edf3; text-align: center; vertical-align: middle;">
                  <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.0; font-size: 11pt; font-weight: bold; text-align: center;">Thứ Hai</p>
                  ${dMon ? '<p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.0; font-size: 11pt; font-weight: bold; text-align: center;">(' + dMon + ')</p>' : ''}
                </th>
                <th style="border: 1pt solid #000; padding: 3.5pt 2pt; width: 16%; background-color: #e8edf3; text-align: center; vertical-align: middle;">
                  <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.0; font-size: 11pt; font-weight: bold; text-align: center;">Thứ Ba</p>
                  ${dTue ? '<p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.0; font-size: 11pt; font-weight: bold; text-align: center;">(' + dTue + ')</p>' : ''}
                </th>
                <th style="border: 1pt solid #000; padding: 3.5pt 2pt; width: 16%; background-color: #e8edf3; text-align: center; vertical-align: middle;">
                  <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.0; font-size: 11pt; font-weight: bold; text-align: center;">Thứ Tư</p>
                  ${dWed ? '<p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.0; font-size: 11pt; font-weight: bold; text-align: center;">(' + dWed + ')</p>' : ''}
                </th>
                <th style="border: 1pt solid #000; padding: 3.5pt 2pt; width: 16%; background-color: #e8edf3; text-align: center; vertical-align: middle;">
                  <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.0; font-size: 11pt; font-weight: bold; text-align: center;">Thứ Năm</p>
                  ${dThu ? '<p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.0; font-size: 11pt; font-weight: bold; text-align: center;">(' + dThu + ')</p>' : ''}
                </th>
                <th style="border: 1pt solid #000; padding: 3.5pt 2pt; width: 16%; background-color: #e8edf3; text-align: center; vertical-align: middle;">
                  <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.0; font-size: 11pt; font-weight: bold; text-align: center;">Thứ Sáu</p>
                  ${dFri ? '<p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; line-height: 1.0; font-size: 11pt; font-weight: bold; text-align: center;">(' + dFri + ')</p>' : ''}
                </th>
              </tr>
            </thead>
            <tbody>
              ${tkbTableRows}
            </tbody>
          </table>
        </div>
      `;
    }

    var docTitle = isGvbm ? 
      (isAssignmentMode ? ('Kế hoạch bài dạy Tuần ' + weekNum + ' - Giáo viên Bộ môn (Theo Phân công Giảng dạy)') : ('Kế hoạch bài dạy Tuần ' + weekNum + ' - Giáo viên Bộ môn (Theo Thời khóa biểu)')) :
      ('Kế hoạch bài dạy Tuần ' + weekNum + ' - ' + (className || ('Khối ' + grade)) + ' (Theo Thời khóa biểu)');

    var docHtml = this.generateWordHtmlStructure(lessons, {
      title: docTitle,
      schoolName: schoolName,
      teacherName: teacherName,
      schoolYear: schoolYear,
      className: className,
      grade: grade,
      weekNum: weekNum,
      isTimetableDoc: true,
      role: isGvbm ? 'gvbm' : 'gvcn',
      department: meta.department || (weeklyPlanResult.gvbmConfig && weeklyPlanResult.gvbmConfig.department) || (typeof integrationState !== 'undefined' && integrationState.gvbmConfig && integrationState.gvbmConfig.department) || '',
      tkbCoverHtml: tkbCoverHtml,
      disabilitySupport: meta.disabilitySupport || (weeklyPlanResult && weeklyPlanResult.metadata && weeklyPlanResult.metadata.disabilitySupport),
      approvalConfig: meta.approvalConfig || (weeklyPlanResult && weeklyPlanResult.metadata && weeklyPlanResult.metadata.approvalConfig) || (typeof integrationState !== 'undefined' && integrationState.approvalConfig)
    });

    var isMulti = isGvbm && (weeklyPlanResult.gvbmConfig && weeklyPlanResult.gvbmConfig.isMultiSubject);
    var defaultFilename = isGvbm ? 
      (isAssignmentMode ? ('KHBD_Tuan_' + weekNum + '_GV_BoMon.docx') :
       (isMulti ? ('KHBD_Tuan_' + weekNum + '_GV_DaMon_Theo_TKB.docx') : ('KHBD_Tuan_' + weekNum + '_GVBM_Theo_TKB.docx'))) : 
      ('KHBD_Tuan_' + weekNum + '_Lop_' + grade + '_Theo_TKB.docx');
    var filename = meta.filename || defaultFilename;
    var effectiveTeacherName = this.getEffectiveTeacherName(meta, weeklyPlanResult);
    filename = this.appendTeacherNameToFilename(filename, effectiveTeacherName);
    return await this.downloadWordBlob(docHtml, filename);
  },

  formatHeaderContentWithIntegration: function(headerText, isPureIntegration) {
    if (!headerText) return '';
    var formattedText = headerText.replace(/\n/g, '<br/>');
    if (isPureIntegration) {
      return '<span style="color: #C00000;">' + formattedText + '</span>';
    }
    if (/mục\s*tiêu\s*tích\s*hợp|tích\s*hợp\s*quyền|tích\s*hợp\s*năng\s*lực|tích\s*hợp\s*kns|tích\s*hợp\s*stem|tích\s*hợp\s*ai|nội\s*dung\s*tích\s*hợp/i.test(formattedText)) {
      var lines = formattedText.split(/(<br\s*\/?>)/i);
      var result = lines.map(function(part) {
        if (/^<br\s*\/?>$/i.test(part)) return part;
        if (/mục\s*tiêu\s*tích\s*hợp|tích\s*hợp\s*quyền|tích\s*hợp\s*năng\s*lực|tích\s*hợp\s*kns|tích\s*hợp\s*stem|tích\s*hợp\s*ai|nội\s*dung\s*tích\s*hợp/i.test(part)) {
          if (/^\s*(?:\*\s*)?(?:mục\s*tiêu\s*tích\s*hợp|tích\s*hợp|hoạt\s*động\s*tích\s*hợp)/i.test(part)) {
            return '<span style="color: #C00000;">' + part + '</span>';
          }
          var subparts = part.split(/((?:mục\s*tiêu\s*tích\s*hợp|tích\s*hợp\s*quyền|tích\s*hợp\s*năng\s*lực|tích\s*hợp\s*kns|tích\s*hợp\s*stem|tích\s*hợp\s*ai).*$)/i);
          return subparts.map(function(sp) {
            if (/mục\s*tiêu\s*tích\s*hợp|tích\s*hợp\s*quyền|tích\s*hợp\s*năng\s*lực|tích\s*hợp\s*kns|tích\s*hợp\s*stem|tích\s*hợp\s*ai/i.test(sp)) {
              return '<span style="color: #C00000;">' + sp + '</span>';
            }
            return '<span>' + sp + '</span>';
          }).join('');
        }
        return '<span>' + part + '</span>';
      }).join('');
      return result;
    }
    return '<span>' + formattedText + '</span>';
  },

  /**
   * Định dạng nội dung ô bảng thành các đoạn <p> chuẩn Times New Roman 13pt
   * Thay thế triệt để các ngắt dòng <br/> (vốn bị Word nhập thành Soft Break Shift+Enter gây lỗi giãn dòng hai biên)
   */
  formatCellParagraphs: function(rawText, isTichHop, align) {
    if (!rawText) return '<p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; font-family: \'Times New Roman\', serif; font-size: 13pt; line-height: 1.0; text-align: ' + (align || 'justify') + ';">&nbsp;</p>';
    var textAlign = align || 'justify';
    var cellStyle = isTichHop ? 'color: #C00000;' : '';
    var str = String(rawText).trim();
    var rawLines = str.split(/(?:\r?\n|<br\s*\/?>)/i);
    var lines = [];
    for (var r = 0; r < rawLines.length; r++) {
      var item = rawLines[r].trim();
      if (!item) continue;
      if (/<img[^>]*>/i.test(item) && !/^<img[^>]*>$/i.test(item)) {
        var subParts = item.split(/(<img[^>]*>)/i);
        for (var sp = 0; sp < subParts.length; sp++) {
          var trimmedSp = subParts[sp].trim();
          if (trimmedSp) lines.push(trimmedSp);
        }
      } else {
        lines.push(item);
      }
    }
    var pList = [];
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim();
      if (!line) continue;
      if (/<img[^>]*>/i.test(line)) {
        var normImg = line;
        if (!/width\s*=/i.test(normImg)) {
          normImg = normImg.replace(/<img\s+/i, '<img width="306" ');
        }
        if (!/width:\s*229/i.test(normImg)) {
          if (/style=["'][^"']*["']/i.test(normImg)) {
            normImg = normImg.replace(/style=["']([^"']*)["']/i, function(m, s) {
              var cleanStyle = s.replace(/(?:^|;)\s*(?:max-|min-)?width\s*:\s*[^;]+/gi, '').replace(/^;\s*/, '').trim();
              return 'style="width: 229.5pt; max-width: 100%; height: auto; display: block; margin: 4pt auto; ' + cleanStyle + '"';
            });
          } else {
            normImg = normImg.replace(/<img\s+/i, '<img style="width: 229.5pt; max-width: 100%; height: auto; display: block; margin: 4pt auto;" ');
          }
        }
        pList.push('<p align="center" style="margin: 4pt 0pt; text-align: center; line-height: 1.0; mso-para-margin: 4pt 0pt;">' + normImg + '</p>');
        continue;
      }
      var inner = cellStyle ? ('<span style="' + cellStyle + '">' + line + '</span>') : line;
      pList.push('<p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; font-family: \'Times New Roman\', serif; font-size: 13pt; line-height: 1.0; text-align: ' + textAlign + '; ' + cellStyle + '">' + inner + '</p>');
    }
    return pList.length > 0 ? pList.join('') : '<p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; font-family: \'Times New Roman\', serif; font-size: 13pt; line-height: 1.0; text-align: ' + textAlign + ';">&nbsp;</p>';
  },

  healLeakedYccd: function(les) {
    if (!les) return les;

    // 1. Flatten multi-line strings in yccd
    if (Array.isArray(les.yccd)) {
      var flatYccd = [];
      for (var k = 0; k < les.yccd.length; k++) {
        var itm = les.yccd[k];
        if (typeof itm === 'string') {
          var subLines = itm.split(/\r?\n/);
          for (var s = 0; s < subLines.length; s++) {
            var subTrim = subLines[s].trim();
            if (subTrim) flatYccd.push(subTrim);
          }
        } else if (itm) {
          flatYccd.push(itm);
        }
      }
      les.yccd = flatYccd;
    }

    // 2. Check and extract leaked YCCD from dieuchinh
    if (!Array.isArray(les.dieuchinh) || les.dieuchinh.length === 0) return les;
    var dc = les.dieuchinh;
    var hasLeak = dc.some(function(line) {
      return typeof line === 'string' && /(?:1\.\s*Năng\s*lực|2\.\s*Năng\s*lực|3\.\s*Phẩm\s*chất|4\.\s*Tích\s*hợp|Phẩm chất|Năng lực|Tích hợp|Giao tiếp|Tự chủ|Chăm chỉ|Trách nhiệm|Giải quyết vấn đề|Nhân ái|Trung thực|Yêu nước)/i.test(line);
    });
    if (!hasLeak) return les;

    var yccd = Array.isArray(les.yccd) ? [...les.yccd] : [];
    var extractedYccd = [];
    var remainingDc = [];

    for (var i = 0; i < dc.length; i++) {
      var raw = dc[i];
      if (typeof raw !== 'string') continue;
      var line = raw.trim();
      if (!line) continue;

      var isYccdLine = /(?:1\.\s*Năng\s*lực|2\.\s*Năng\s*lực|3\.\s*Phẩm\s*chất|4\.\s*Tích\s*hợp|Phẩm chất|Năng lực chung|Giao tiếp|Tự chủ|Chăm chỉ|Trách nhiệm|Giải quyết vấn đề|Nhân ái|Trung thực|Yêu nước|Tích hợp\s*:)/i.test(line);
      var isMetaHeader = /^KẾ HOẠCH BÀI DẠY/i.test(line) || /^CHỦ ĐỀ \d+/i.test(line) || /^PHỤ LỤC/i.test(line) || /^MÔN\s+/i.test(line) || /^ÔN TẬP VÀ KIỂM TRA/i.test(line);

      if (isYccdLine && !isMetaHeader) {
        extractedYccd.push(raw);
      } else if (/^\.{5,}/.test(line) || /^[-–—*•]?\s*\.{5,}/.test(line)) {
        remainingDc.push(raw);
      }
    }

    if (extractedYccd.length > 0) {
      for (var j = 0; j < extractedYccd.length; j++) {
        var itm2 = extractedYccd[j];
        if (yccd.length > 0 && yccd[yccd.length - 1].trim() === itm2.trim()) {
          continue;
        }
        yccd.push(itm2);
      }
      les.yccd = yccd;
      les.dieuchinh = remainingDc.length > 0 ? remainingDc : [
        "....................................................................................................................................................",
        "...................................................................................................................................................."
      ];
    }
    return les;
  },

  generateWordHtmlStructure: function(lessons, meta) {
    var schoolName = meta.schoolName || 'TRƯỜNG TIỂU HỌC .................................';
    var teacherName = meta.teacherName || '';
    var schoolYear = meta.schoolYear || '2026 - 2027';
    var className = meta.className || '';
    var grade = meta.grade || 5;
    var department = meta.department || '';
    var isTimetableDoc = !!meta.isTimetableDoc;

    var docHtml = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office" 
            xmlns:w="urn:schemas-microsoft-com:office:word" 
            xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta charset="utf-8">
        <title>${meta.title || 'Kế hoạch bài dạy'}</title>
        <!--[if gte mso 9]>
        <xml>
          <w:WordDocument>
            <w:View>Print</w:View>
            <w:Zoom>100</w:Zoom>
            <w:DoNotOptimizeForBrowser/>
          </w:WordDocument>
        </xml>
        <![endif]-->
        <style>
          @page {
            size: 21.0cm 29.7cm;
            margin: 2.0cm 1.5cm 2.0cm 3.0cm;
            mso-page-orientation: portrait;
            mso-header-margin: 1.0cm;
            mso-footer-margin: 1.0cm;
            mso-gutter-margin: 0cm;
          }
          @page WordSection1 {
            size: 21.0cm 29.7cm;
            margin: 2.0cm 1.5cm 2.0cm 3.0cm;
            mso-page-orientation: portrait;
            mso-header-margin: 1.0cm;
            mso-footer-margin: 1.0cm;
            mso-gutter-margin: 0cm;
            mso-paper-source: 0;
          }
          @page WordSection2 {
            size: 21.0cm 29.7cm;
            margin: 2.0cm 1.5cm 2.0cm 3.0cm;
            mso-page-orientation: portrait;
            mso-header-margin: 1.0cm;
            mso-footer-margin: 1.0cm;
            mso-gutter-margin: 0cm;
            mso-paper-source: 0;
          }
          div.WordSection1 {
            page: WordSection1;
          }
          div.WordSection2 {
            page: WordSection2;
          }
          body {
            font-family: 'Times New Roman', serif;
            font-size: 13pt;
            line-height: 1.0;
            mso-line-height-rule: exactly;
            color: #000000;
            margin: 0;
            padding: 0;
            text-align: justify;
          }
          p, p.MsoNormal, li {
            font-family: 'Times New Roman', serif;
            font-size: 13pt;
            margin: 0pt;
            margin-top: 0pt;
            margin-bottom: 0pt;
            mso-para-margin: 0pt;
            mso-para-margin-top: 0pt;
            mso-para-margin-bottom: 0pt;
            mso-margin-top-alt: 0pt;
            mso-margin-bottom-alt: 0pt;
            line-height: 1.0;
            mso-line-height-rule: exactly;
            text-align: justify;
          }
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Times New Roman', serif;
            margin: 0pt;
            margin-top: 0pt;
            margin-bottom: 0pt;
            mso-para-margin: 0pt;
            mso-para-margin-top: 0pt;
            mso-para-margin-bottom: 0pt;
            padding: 0;
            line-height: 1.0;
          }
          .header-table {
            width: 100%;
            border-collapse: collapse;
            border: none;
            margin-bottom: 6pt;
            font-family: 'Times New Roman', serif;
            font-size: 13pt;
          }
          .header-table td {
            border: none;
            vertical-align: top;
            padding: 1pt;
            margin: 0pt;
            font-family: 'Times New Roman', serif;
            font-size: 13pt;
            line-height: 1.0;
            mso-para-margin: 0pt;
            mso-para-margin-top: 0pt;
            mso-para-margin-bottom: 0pt;
          }
          .title-box {
            text-align: center;
            margin-bottom: 6pt;
            font-family: 'Times New Roman', serif;
          }
          .title-box p {
            text-align: center;
            font-family: 'Times New Roman', serif;
            line-height: 1.0;
            margin: 0pt;
            mso-para-margin: 0pt;
          }
          .title-box h2 {
            font-family: 'Times New Roman', serif;
            font-size: 14pt;
            font-weight: bold;
            text-transform: uppercase;
            text-align: center;
            margin: 0pt;
            mso-para-margin: 0pt;
            mso-para-margin-top: 0pt;
            mso-para-margin-bottom: 0pt;
            line-height: 1.0;
          }
          .section-title {
            font-family: 'Times New Roman', serif;
            font-size: 13pt;
            font-weight: bold;
            text-transform: uppercase;
            margin: 0pt;
            margin-top: 0pt;
            margin-bottom: 0pt;
            mso-para-margin: 0pt;
            mso-para-margin-top: 0pt;
            mso-para-margin-bottom: 0pt;
            line-height: 1.0;
            text-align: left;
          }
          .table-activity {
            width: 100%;
            border-collapse: collapse;
            margin-top: 4pt;
            margin-bottom: 6pt;
            font-family: 'Times New Roman', serif;
            font-size: 13pt;
          }
          .table-activity th {
            border: 1pt solid #000000;
            padding: 4pt 6pt;
            background-color: #1F4E79;
            color: #ffffff;
            font-weight: bold;
            font-family: 'Times New Roman', serif;
            font-size: 13pt;
            text-align: center;
            vertical-align: middle;
            margin: 0pt;
            mso-para-margin: 0pt;
            mso-para-margin-top: 0pt;
            mso-para-margin-bottom: 0pt;
            line-height: 1.0;
          }
          .table-activity td {
            border: 1pt solid #000000;
            padding: 4pt 6pt;
            vertical-align: top;
            font-family: 'Times New Roman', serif;
            font-size: 13pt;
            margin: 0pt;
            mso-para-margin: 0pt;
            mso-para-margin-top: 0pt;
            mso-para-margin-bottom: 0pt;
            mso-margin-top-alt: 0pt;
            mso-margin-bottom-alt: 0pt;
            line-height: 1.0;
            text-align: justify;
          }
          .table-activity td div, .table-activity td p {
            font-family: 'Times New Roman', serif;
            font-size: 13pt;
            margin: 0pt;
            margin-top: 0pt;
            margin-bottom: 0pt;
            mso-para-margin: 0pt;
            mso-para-margin-top: 0pt;
            mso-para-margin-bottom: 0pt;
            mso-margin-top-alt: 0pt;
            mso-margin-bottom-alt: 0pt;
            line-height: 1.0;
            text-align: justify;
          }
          .tkb-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 4pt;
            margin-bottom: 10pt;
            font-family: 'Times New Roman', serif;
            font-size: 11pt;
            border: 1pt solid #000000;
          }
          .tkb-table th {
            border: 1pt solid #000000;
            padding: 3.5pt 2pt;
            background-color: #e8edf3;
            font-weight: bold;
            font-family: 'Times New Roman', serif;
            text-align: center;
            vertical-align: middle;
            font-size: 11pt;
            margin: 0pt;
            mso-para-margin: 0pt;
            mso-para-margin-top: 0pt;
            mso-para-margin-bottom: 0pt;
            line-height: 1.0;
          }
          .tkb-table td {
            border: 1pt solid #000000;
            padding: 3.5pt 2pt;
            text-align: center;
            vertical-align: middle;
            background-color: #ffffff;
            font-family: 'Times New Roman', serif;
            font-size: 11pt;
            margin: 0pt;
            mso-para-margin: 0pt;
            mso-para-margin-top: 0pt;
            mso-para-margin-bottom: 0pt;
            line-height: 1.0;
          }
          .tkb-table p, .tkb-table p.MsoNormal {
            margin: 0pt !important;
            margin-top: 0pt !important;
            margin-bottom: 0pt !important;
            mso-para-margin: 0pt !important;
            mso-para-margin-top: 0pt !important;
            mso-para-margin-bottom: 0pt !important;
            mso-margin-top-alt: 0pt !important;
            mso-margin-bottom-alt: 0pt !important;
            line-height: 1.0;
            font-size: 11pt;
            font-family: 'Times New Roman', serif;
            text-align: center;
          }
          .page-break {
            page-break-before: always;
            mso-break-type: section-break;
            clear: both;
          }
          .approval-table {
            width: 100%;
            border-collapse: collapse;
            border: 1.5pt solid #000000;
            mso-border-alt: solid black 1.5pt;
            page-break-inside: avoid;
            margin-top: 0pt;
            margin-bottom: 0pt;
            font-family: 'Times New Roman', serif;
            font-size: 13pt;
          }
          .approval-table tr {
            page-break-inside: avoid;
            mso-element: table-row;
          }
          .approval-table td {
            border: 1.0pt solid #000000;
            mso-border-alt: solid black 1.0pt;
            text-align: center;
            vertical-align: top;
            padding: 8pt 6pt;
            page-break-inside: avoid;
            font-family: 'Times New Roman', serif;
            font-size: 13pt;
            line-height: 1.0;
          }
          .approval-page {
            page-break-before: always;
            page-break-inside: avoid;
            clear: both;
          }
        </style>
      </head>
      <body>
        <div class="WordSection1">
    `;

    if (meta.tkbCoverHtml) {
      docHtml += meta.tkbCoverHtml;
    }

    var isHeaderRow = function(r) {
      if (!Array.isArray(r) || r.length < 2) return false;
      var c0 = (r[0] || '').toLowerCase().trim();
      var c1 = (r[1] || '').toLowerCase().trim();
      var c2 = (r[2] || '').toLowerCase().trim();
      return ((c0.includes('giáo viên') || c0.includes('gv') || c0.includes('dạy học') || c0.includes('thầy')) &&
             (c1.includes('học sinh') || c1.includes('hs') || c1.includes('trò') || c1.includes('luyện tập'))) ||
             (c0.includes('nội dung') && (c1.includes('định lượng') || c2.includes('giáo viên')));
    };

    var disSupport = (meta && meta.disabilitySupport) || (typeof integrationState !== 'undefined' && integrationState.disabilitySupport);

    var isContinuousMode = !isTimetableDoc;
    lessons.forEach(function(les, lIdx) {
      if (lIdx > 0 || meta.tkbCoverHtml) {
        if (isContinuousMode) {
          docHtml += '<div style="margin-top: 16pt; margin-bottom: 8pt; border-top: 1pt dashed #b0b0b0; padding-top: 8pt;"></div>';
        } else {
          docHtml += '<br clear="all" style="page-break-before: always; mso-break-type: section-break;" /><p class="MsoNormal" style="page-break-before: always; margin: 0pt; mso-para-margin: 0pt; font-size: 1pt; line-height: 1pt; height: 1pt; mso-margin-top-alt: 0pt; mso-margin-bottom-alt: 0pt;">&nbsp;</p><div class="page-break" style="page-break-before: always; mso-break-type: section-break;"></div>';
        }
      }

      IntegrationService.healLeakedYccd(les);

      if (disSupport && disSupport.enabled) {
        IntegrationService.injectDisabilityIntoLesson(les, disSupport);
      }

      var clsInfo = les.className ? (' • ' + (les.className.toLowerCase().includes('lớp') ? les.className : ('Lớp ' + les.className))) : '';

      // Tự động tính ngày giảng dạy thực tế theo Thời khóa biểu và Lịch năm học
      var currentWeekNum = meta.week || meta.startWeek || les.week || 1;
      var calObj = (typeof window !== 'undefined' && window.AcademicCalendar) ? window.AcademicCalendar : (typeof AcademicCalendar !== 'undefined' ? AcademicCalendar : null);
      var lessonDateInfo = (calObj && les.dayName) ? calObj.getDayDate(currentWeekNum, les.dayName) : null;
      var dateStr = lessonDateInfo ? lessonDateInfo.formatted : '';
      var dayHeaderTitle = les.dayName ? (les.dayName + (dateStr ? (', ngày ' + dateStr) : '')) : '';

      var daySessionInfo = dayHeaderTitle ? ('<p align="center" style="font-family: \'Times New Roman\', serif; font-weight: bold; color: #1e40af; font-size: 12pt; margin-bottom: 4pt; text-align: center; line-height: 1.0; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 4pt;">' + dayHeaderTitle + ' • Buổi ' + (les.session || 'Sáng') + ' • ' + (les.periodSlot ? ('Tiết ' + les.periodSlot) : '') + clsInfo + '</p>') : '';

      var isDouble = (les.periodSlot && les.periodSlot.toString().includes('-')) || (les.period && (String(les.period).toLowerCase().includes('2 tiết') || String(les.period).toLowerCase().includes('tiết đôi')));
      var durationDefault = isDouble ? '70 phút' : '35 phút';
      var durationWithDate = dateStr ? (durationDefault + ' (ngày ' + dateStr + ')') : durationDefault;

      var inTichHopSection = false;
      var hasRenderedDisabilityHeader = false;
      var yccdContent = (les.yccd || []).map(function(line) {
        if (typeof line !== 'string') return '';
        var cleanLine = line.trim();
        // Bỏ dòng Số tiết thực hiện / Thời gian thực hiện / Ngày thực hiện / Tiêu đề giáo án khỏi YCCD
        if (/^[\s\-–—*•]*(?:số\s*tiết|thời\s*gian|ngày)\s*thực\s*hiện/i.test(cleanLine)) {
          return '';
        }
        if (/^[\s\-–—*•]*(?:kế\s*hoạch\s*bài\s*dạy|bài\s*học\s*tiết\s*\d+)/i.test(cleanLine)) {
          return '';
        }

        var isKhuyetTat = IntegrationService.isDisabilityLine(cleanLine);
        var isDieuChinhHeader = /^5\.\s*điều\s*chỉnh\s*đối\s*với\s*học\s*sinh\s*(?:khuyết\s*tật|hòa\s*nhập)/i.test(cleanLine);
        if (isDieuChinhHeader) {
          if (!hasRenderedDisabilityHeader) {
            hasRenderedDisabilityHeader = true;
            return '<p style="margin: 0pt; margin-top: 4pt; margin-bottom: 2pt; mso-para-margin: 0pt; mso-para-margin-top: 4pt; mso-para-margin-bottom: 2pt; font-family: \'Times New Roman\', serif; font-size: 13pt; line-height: 1.15; font-weight: bold; color: #C00000; text-align: justify;"><span style="color: #C00000;">5. Điều chỉnh đối với học sinh hòa nhập:</span></p>';
          }
          return '';
        }

        // Nhận diện Tiêu đề nhóm Tích hợp (ví dụ: "4. Tích hợp", "4. Tích hợp giáo dục...")
        var isTichHopHeaderGroup = /^\d+\.\s*(?:tích\s*hợp|nội\s*dung\s*tích\s*hợp|năng\s*lực\s*số)/i.test(cleanLine) || /^[\s*•\-–—]*tích\s*hợp\s*[:.-]?$/i.test(cleanLine);
        if (isTichHopHeaderGroup) {
          inTichHopSection = true;
          return '<p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; font-family: \'Times New Roman\', serif; font-size: 13pt; line-height: 1.0; font-weight: bold; color: #C00000; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt;"><span style="color: #C00000;">' + cleanLine + '</span></p>';
        }

        // Nếu gặp tiêu đề nhóm khác (như 1., 2., 3., 5.) thì thoát khỏi section tích hợp
        if (/^\d+\.\s*(?!tích\s*hợp|nội\s*dung\s*tích\s*hợp|năng\s*lực\s*số)/i.test(cleanLine)) {
          inTichHopSection = false;
        }

        var isTichHop = inTichHopSection || /tích\s*hợp|năng\s*lực\s*số|quyền\s*con\s*người/i.test(cleanLine) || cleanLine.indexOf('NỘI DUNG TÍCH HỢP') !== -1 || cleanLine.indexOf('[Tích hợp') !== -1 || cleanLine.indexOf('(Tích hợp)') !== -1;
        if (isKhuyetTat) {
          inTichHopSection = false;
          var displayLine = cleanLine
            .replace(/<!--.*?-->/g, '')
            .replace(/\[?NỘI DUNG TÍCH HỢP MỚI\]?:?\s*/gi, '')
            .replace(/\[?NỘI DUNG TÍCH HỢP\]?:?\s*/gi, '')
            .replace(/\[?TÍCH HỢP MỚI\]?:?\s*/gi, '')
            .replace(/^\[Tích hợp\]\s*/i, '')
            .replace(/\(Tích hợp\)/gi, '')
            .replace(/^5\.\s*điều\s*chỉnh\s*đối\s*với\s*học\s*sinh\s*(?:khuyết\s*tật|hòa\s*nhập)\s*[:.-]?\s*/gi, '')
            .trim();

          var parts = displayLine.split(/\r?\n|<br\s*\/?>/i).map(function(p) { return p.trim(); }).filter(Boolean);
          var htmlLines = parts.map(function(pLine) {
            if (/^5\.\s*điều\s*chỉnh\s*đối\s*với\s*học\s*sinh/i.test(pLine)) return '';
            if (!pLine.startsWith('-') && !pLine.startsWith('+') && !pLine.startsWith('*')) {
              pLine = '- ' + pLine;
            }
            return '<p style="margin: 0pt; margin-top: 2pt; margin-bottom: 2pt; mso-para-margin: 0pt; mso-para-margin-top: 2pt; mso-para-margin-bottom: 2pt; font-family: \'Times New Roman\', serif; font-size: 13pt; line-height: 1.15; color: #C00000; text-align: justify;"><span style="color: #C00000;">' + pLine + '</span></p>';
          }).filter(Boolean).join('');

          var headerHtml = '';
          if (!hasRenderedDisabilityHeader) {
            headerHtml = '<p style="margin: 0pt; margin-top: 4pt; margin-bottom: 2pt; mso-para-margin: 0pt; mso-para-margin-top: 4pt; mso-para-margin-bottom: 2pt; font-family: \'Times New Roman\', serif; font-size: 13pt; line-height: 1.15; font-weight: bold; color: #C00000; text-align: justify;"><span style="color: #C00000;">5. Điều chỉnh đối với học sinh hòa nhập:</span></p>';
            hasRenderedDisabilityHeader = true;
          }

          return headerHtml + htmlLines;
        }
        if (isTichHop) {
          var displayLine = cleanLine
            .replace(/<!--.*?-->/g, '')
            .replace(/\[?NỘI DUNG TÍCH HỢP MỚI\]?:?\s*/gi, '')
            .replace(/\[?NỘI DUNG TÍCH HỢP\]?:?\s*/gi, '')
            .replace(/\[?TÍCH HỢP MỚI\]?:?\s*/gi, '')
            .replace(/^\[Tích hợp\]\s*/i, '')
            .replace(/\(Tích hợp\)/gi, '')
            .replace(/\s{2,}/g, ' ')
            .trim();
          if (!displayLine.startsWith('-') && !displayLine.startsWith('+') && !displayLine.startsWith('*')) {
            displayLine = '- ' + displayLine;
          }
          return '<p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; font-family: \'Times New Roman\', serif; font-size: 13pt; line-height: 1.0; color: #C00000; text-align: justify;"><span style="color: #C00000;">' + displayLine + '</span></p>';
        }
        return '<p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; font-family: \'Times New Roman\', serif; font-size: 13pt; line-height: 1.0; text-align: justify;">' + cleanLine + '</p>';
      }).join('');

      var dodungList = les.dodung || les.teachingAids || [];
      var dodungContent = dodungList.map(function(line) {
        if (typeof line !== 'string') return '';
        var isTichHop = /tích\s*hợp|năng\s*lực\s*số|quyền\s*con\s*người/i.test(line) || line.indexOf('[Tích hợp') !== -1 || line.indexOf('[Tích hợp mới]') !== -1 || line.indexOf('(Tích hợp)') !== -1 || line.indexOf('NỘI DUNG TÍCH HỢP') !== -1;
        if (isTichHop) {
          var displayLine = line
            .replace(/<!--.*?-->/g, '')
            .replace(/\[?NỘI DUNG TÍCH HỢP MỚI\]?:?\s*/gi, '')
            .replace(/\[?NỘI DUNG TÍCH HỢP\]?:?\s*/gi, '')
            .replace(/\[?TÍCH HỢP MỚI\]?:?\s*/gi, '')
            .replace(/^\[Tích hợp\]\s*/i, '')
            .replace(/\(Tích hợp\)/gi, '')
            .replace(/\s{2,}/g, ' ')
            .trim();
          if (!displayLine.startsWith('-') && !displayLine.startsWith('+') && !displayLine.startsWith('*')) {
            displayLine = '- ' + displayLine;
          }
          return '<p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; font-family: \'Times New Roman\', serif; font-size: 13pt; line-height: 1.0; color: #C00000; text-align: justify;"><span style="color: #C00000;">' + displayLine + '</span></p>';
        }
        return '<p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; font-family: \'Times New Roman\', serif; font-size: 13pt; line-height: 1.0; text-align: justify;">' + line + '</p>';
      }).join('');

      var actTablesHtml = '';
      if (les.tables && les.tables.length > 0) {
        les.tables.forEach(function(tableRows) {
          if (!tableRows || tableRows.length === 0) return;
          var has4Cols = tableRows.some(function(row) { return Array.isArray(row) && row.length === 4; });
          var rowsHtml = '';
          for (var rIdx = 0; rIdx < tableRows.length; rIdx++) {
            var r = tableRows[rIdx];
            if (!Array.isArray(r)) continue;
            if (rIdx === 0 && isHeaderRow(r)) continue;

            if (has4Cols) {
              if (r.length >= 4) {
                var isTichHop = /tích\s*hợp|năng\s*lực\s*số|quyền\s*con\s*người/i.test(r[0] || '') || /tích\s*hợp|năng\s*lực\s*số|quyền\s*con\s*người/i.test(r[2] || '') || /tích\s*hợp|năng\s*lực\s*số|quyền\s*con\s*người/i.test(r[3] || '') || (r[0] || '').indexOf('NỘI DUNG TÍCH HỢP') !== -1 || (r[2] || '').indexOf('NỘI DUNG TÍCH HỢP') !== -1 || (r[3] || '').indexOf('NỘI DUNG TÍCH HỢP') !== -1 || (r[0] || '').indexOf('[Tích hợp') !== -1 || (r[2] || '').indexOf('[Tích hợp') !== -1 || (r[3] || '').indexOf('[Tích hợp') !== -1;
                var c0 = (r[0] || '').replace(/<!--.*?-->/g, '').replace(/\[?NỘI DUNG TÍCH HỢP MỚI\]?:?\s*/gi, '').replace(/\[?NỘI DUNG TÍCH HỢP\]?:?\s*/gi, '').replace(/\[?TÍCH HỢP MỚI\]?:?\s*/gi, '').replace(/^\[Tích hợp\]\s*/i, '').replace(/\(Tích hợp\)/gi, '').replace(/\s{2,}/g, ' ').trim();
                var c1 = (r[1] || '').trim();
                var c2 = (r[2] || '').replace(/<!--.*?-->/g, '').replace(/\[?NỘI DUNG TÍCH HỢP MỚI\]?:?\s*/gi, '').replace(/\[?NỘI DUNG TÍCH HỢP\]?:?\s*/gi, '').replace(/\[?TÍCH HỢP MỚI\]?:?\s*/gi, '').replace(/^\[Tích hợp\]\s*/i, '').replace(/\(Tích hợp\)/gi, '').replace(/\s{2,}/g, ' ').trim();
                var c3 = (r[3] || '').replace(/<!--.*?-->/g, '').replace(/\[?NỘI DUNG TÍCH HỢP MỚI\]?:?\s*/gi, '').replace(/\[?NỘI DUNG TÍCH HỢP\]?:?\s*/gi, '').replace(/\[?TÍCH HỢP MỚI\]?:?\s*/gi, '').replace(/^\[Tích hợp\]\s*/i, '').replace(/\(Tích hợp\)/gi, '').replace(/\s{2,}/g, ' ').trim();
                var cellStyle = isTichHop ? 'color: #C00000;' : '';

                var c0Html = IntegrationService.formatCellParagraphs(c0, isTichHop, 'justify');
                var c1Html = IntegrationService.formatCellParagraphs(c1, isTichHop, 'center');
                var c2Html = IntegrationService.formatCellParagraphs(c2, isTichHop, 'justify');
                var c3Html = IntegrationService.formatCellParagraphs(c3, isTichHop, 'justify');

                rowsHtml += `
                  <tr>
                    <td style="width: 30%; vertical-align: top; padding: 3.5pt 5pt; border: 1pt solid #000; margin: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; text-align: justify; ${cellStyle}">
                      ${c0Html}
                    </td>
                    <td style="width: 15%; vertical-align: top; text-align: center; padding: 3.5pt 5pt; border: 1pt solid #000; margin: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; ${cellStyle}">
                      ${c1Html}
                    </td>
                    <td style="width: 30%; vertical-align: top; padding: 3.5pt 5pt; border: 1pt solid #000; margin: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; text-align: justify; ${cellStyle}">
                      ${c2Html}
                    </td>
                    <td style="width: 25%; vertical-align: top; padding: 3.5pt 5pt; border: 1pt solid #000; margin: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; text-align: justify; ${cellStyle}">
                      ${c3Html}
                    </td>
                  </tr>
                `;
              } else if (r.length === 1) {
                var rawHeader = r[0] || '';
                var cleanHeader = rawHeader.replace(/<!--.*?-->/g, '').replace(/\[?NỘI DUNG TÍCH HỢP MỚI\]?:?\s*/gi, '').replace(/^\[Tích hợp\]\s*/i, '').trim();
                var isTietRow = /^tiết\s+\d+/i.test(cleanHeader);
                var isActivityRow = /^\d+\.\s*(?:khởi động|khám phá|luyện tập|hoạt động|vận dụng|trò chơi|củng cố)/i.test(cleanHeader);
                var isPureIntegration = !isTietRow && !isActivityRow && (/^\s*\*\s*(?:hoạt\s*động\s*vận\s*dụng\s*:?\s*)?tích\s*hợp/i.test(cleanHeader) || rawHeader.indexOf('[NỘI DUNG TÍCH HỢP') !== -1 || rawHeader.indexOf('[Tích hợp') !== -1);
                var rowBgColor = isTietRow ? '#FFF2CC' : (isActivityRow ? '#D9EAF7' : '#f8fafc');
                var cellHeaderColorStyle = isPureIntegration ? 'color: #C00000;' : '';
                var formattedHeader = IntegrationService.formatHeaderContentWithIntegration(cleanHeader, isPureIntegration);
                rowsHtml += `<tr><td colspan="4" style="padding: 3.5pt 5pt; border: 1pt solid #000; background-color: ${rowBgColor}; font-weight: bold; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; margin: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; text-align: left; ${cellHeaderColorStyle}"><div style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; text-align: left; ${cellHeaderColorStyle}">${formattedHeader}</div></td></tr>`;
              } else if (r.length === 2) {
                var c0Html = IntegrationService.formatCellParagraphs(r[0] || '', false, 'left');
                var c1Html = IntegrationService.formatCellParagraphs(r[1] || '', false, 'left');
                rowsHtml += `<tr><td colspan="2" style="padding: 3.5pt 5pt; border: 1pt solid #000; background-color: #f8fafc; font-weight: bold; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; margin: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt;">${c0Html}</td><td colspan="2" style="padding: 3.5pt 5pt; border: 1pt solid #000; background-color: #f8fafc; font-weight: bold; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; margin: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt;">${c1Html}</td></tr>`;
              }
            } else {
              if (r.length >= 2) {
                var isTichHop = /tích\s*hợp|năng\s*lực\s*số|quyền\s*con\s*người/i.test(r[0] || '') || /tích\s*hợp|năng\s*lực\s*số|quyền\s*con\s*người/i.test(r[1] || '') || (r[0] || '').indexOf('NỘI DUNG TÍCH HỢP') !== -1 || (r[1] || '').indexOf('NỘI DUNG TÍCH HỢP') !== -1 || (r[0] || '').indexOf('[Tích hợp') !== -1 || (r[1] || '').indexOf('[Tích hợp') !== -1;
                var gvText = (r[0] || '')
                  .replace(/<!--.*?-->/g, '')
                  .replace(/\[?NỘI DUNG TÍCH HỢP MỚI\]?:?\s*/gi, '')
                  .replace(/\[?NỘI DUNG TÍCH HỢP\]?:?\s*/gi, '')
                  .replace(/\[?TÍCH HỢP MỚI\]?:?\s*/gi, '')
                  .replace(/^\[Tích hợp\]\s*/i, '')
                  .replace(/\(Tích hợp\)/gi, '')
                  .replace(/\s{2,}/g, ' ')
                  .trim();
                var hsText = (r[1] || '')
                  .replace(/<!--.*?-->/g, '')
                  .replace(/\[?NỘI DUNG TÍCH HỢP MỚI\]?:?\s*/gi, '')
                  .replace(/\[?NỘI DUNG TÍCH HỢP\]?:?\s*/gi, '')
                  .replace(/\[?TÍCH HỢP MỚI\]?:?\s*/gi, '')
                  .replace(/^\[Tích hợp\]\s*/i, '')
                  .replace(/\(Tích hợp\)/gi, '')
                  .replace(/\s{2,}/g, ' ')
                  .trim();

                var cellStyle = isTichHop ? 'color: #C00000;' : '';
                var gvHtml = IntegrationService.formatCellParagraphs(gvText, isTichHop, 'justify');
                var hsHtml = IntegrationService.formatCellParagraphs(hsText, isTichHop, 'justify');

                rowsHtml += `
                  <tr>
                    <td style="width: 50%; vertical-align: top; padding: 3.5pt 5pt; border: 1pt solid #000; margin: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; text-align: justify; ${cellStyle}">
                      ${gvHtml}
                    </td>
                    <td style="width: 50%; vertical-align: top; padding: 3.5pt 5pt; border: 1pt solid #000; margin: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; text-align: justify; ${cellStyle}">
                      ${hsHtml}
                    </td>
                  </tr>
                `;
              } else if (r.length === 1) {
                var rawHeader = r[0] || '';
                var cleanHeader = rawHeader
                  .replace(/<!--.*?-->/g, '')
                  .replace(/\[?NỘI DUNG TÍCH HỢP MỚI\]?:?\s*/gi, '')
                  .replace(/\[?NỘI DUNG TÍCH HỢP\]?:?\s*/gi, '')
                  .replace(/\[?TÍCH HỢP MỚI\]?:?\s*/gi, '')
                  .replace(/^\[Tích hợp\]\s*/i, '')
                  .replace(/\(Tích hợp\)/gi, '')
                  .replace(/\s{2,}/g, ' ')
                  .trim();
                var isTietRow = /^tiết\s+\d+/i.test(cleanHeader);
                var isActivityRow = /^\d+\.\s*(?:khởi động|khám phá|luyện tập|hoạt động|vận dụng|trò chơi|củng cố)/i.test(cleanHeader);
                var isPureIntegration = !isTietRow && !isActivityRow && (/^\s*\*\s*(?:hoạt\s*động\s*vận\s*dụng\s*:?\s*)?tích\s*hợp/i.test(cleanHeader) || rawHeader.indexOf('[NỘI DUNG TÍCH HỢP') !== -1 || rawHeader.indexOf('[Tích hợp') !== -1);
                var rowBgColor = isTietRow ? '#FFF2CC' : (isActivityRow ? '#D9EAF7' : '#f8fafc');
                var cellHeaderColorStyle = isPureIntegration ? 'color: #C00000;' : '';
                var formattedHeader = IntegrationService.formatHeaderContentWithIntegration(cleanHeader, isPureIntegration);
                rowsHtml += `<tr><td colspan="2" style="padding: 3.5pt 5pt; border: 1pt solid #000; background-color: ${rowBgColor}; font-weight: bold; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; margin: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; text-align: left; ${cellHeaderColorStyle}"><div style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; text-align: left; ${cellHeaderColorStyle}">${formattedHeader}</div></td></tr>`;
              }
            }
          }

          if (rowsHtml) {
            if (has4Cols) {
              actTablesHtml += `
                <table class="table-activity">
                  <thead>
                    <tr>
                      <th style="width: 30%; background-color: #1F4E79; color: #ffffff; font-weight: bold; text-align: center; border: 1pt solid #000; padding: 4pt 6pt;">NỘI DUNG</th>
                      <th style="width: 15%; background-color: #1F4E79; color: #ffffff; font-weight: bold; text-align: center; border: 1pt solid #000; padding: 4pt 6pt;">ĐỊNH LƯỢNG</th>
                      <th style="width: 30%; background-color: #1F4E79; color: #ffffff; font-weight: bold; text-align: center; border: 1pt solid #000; padding: 4pt 6pt;">HOẠT ĐỘNG CỦA GIÁO VIÊN</th>
                      <th style="width: 25%; background-color: #1F4E79; color: #ffffff; font-weight: bold; text-align: center; border: 1pt solid #000; padding: 4pt 6pt;">HOẠT ĐỘNG CỦA HỌC SINH</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${rowsHtml}
                  </tbody>
                </table>
              `;
            } else {
              actTablesHtml += `
                <table class="table-activity">
                  <thead>
                    <tr>
                      <th style="width: 50%; background-color: #1F4E79; color: #ffffff; font-weight: bold; text-align: center; border: 1pt solid #000; padding: 4pt 6pt;">HOẠT ĐỘNG CỦA GIÁO VIÊN</th>
                      <th style="width: 50%; background-color: #1F4E79; color: #ffffff; font-weight: bold; text-align: center; border: 1pt solid #000; padding: 4pt 6pt;">HOẠT ĐỘNG CỦA HỌC SINH</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${rowsHtml}
                  </tbody>
                </table>
              `;
            }
          }
        });
      }

      var weekText = '';
      if (meta.startWeek && meta.endWeek && String(meta.startWeek) !== String(meta.endWeek)) {
        weekText = meta.startWeek + ' - ' + meta.endWeek;
      } else if (meta.startWeek) {
        weekText = meta.startWeek;
      } else if (les.week) {
        weekText = les.week;
      } else if (meta.weekNum) {
        weekText = meta.weekNum;
      } else if (meta.filename) {
        var mWeek = meta.filename.match(/Tuan[_\s]*(\d+)(?:[-_](\d+))?/i);
        if (mWeek) {
          weekText = mWeek[2] ? (mWeek[1] + ' - ' + mWeek[2]) : mWeek[1];
        }
      }
      if (!weekText) weekText = '1';

      var headerBlock = '';
      if (lIdx === 0) {
        var depText = department ? `<p style="text-align: left; margin: 2pt 0 0 0; margin-top: 2pt; margin-bottom: 0pt; mso-para-margin: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt;" align="left">Tổ chuyên môn: <b>${department}</b></p>` : '';
        headerBlock = `
          <table class="header-table">
            <tr>
              <td style="width: 50%; text-align: left;" align="left">
                <p style="text-align: left; margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt;" align="left"><b>${schoolName}</b></p>
                ${depText}
                <p style="text-align: left; margin: 2pt 0 0 0; margin-top: 2pt; margin-bottom: 0pt; mso-para-margin: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt;" align="left">Giáo viên: <b>${teacherName}</b></p>
              </td>
              <td style="width: 50%; text-align: right;" align="right">
                <p style="text-align: right; margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt;" align="right"><b>NĂM HỌC: ${schoolYear}</b></p>
                <p style="text-align: right; margin: 2pt 0 0 0; margin-top: 2pt; margin-bottom: 0pt; mso-para-margin: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt;" align="right">${(meta.role === 'gvbm' && les.classes) ? ('<b>' + (les.subjectName || IntegrationService.getSubjectDisplayName(les.subjectKey) || subjName) + '</b> • ') : (className ? ('<b>' + className + '</b> • ') : ('Khối: <b>' + (les.grade || grade) + '</b> • '))}Tuần: <b>${weekText}</b></p>
              </td>
            </tr>
          </table>
        `;
      }

      var subjName = les.subjectName || meta.subjectName || (les.subjectKey ? IntegrationService.getSubjectDisplayName(les.subjectKey) : '') || (meta.subjectKey ? IntegrationService.getSubjectDisplayName(meta.subjectKey) : '') || '';
      if (!subjName) {
        var checkStr = (meta.filename || '') + ' ' + (les.sourceFile || '') + ' ' + (meta.title || '');
        if (/lich_su_dia_ly|LSĐL|Lịch sử/i.test(checkStr)) subjName = 'Lịch sử và Địa lí';
        else if (/toan/i.test(checkStr)) subjName = 'Toán';
        else if (/tieng_viet|TV/i.test(checkStr)) subjName = 'Tiếng Việt';
        else if (/khoa_hoc/i.test(checkStr)) subjName = 'Khoa học';
        else if (/dao_duc/i.test(checkStr)) subjName = 'Đạo đức';
        else if (/tin_hoc/i.test(checkStr)) subjName = 'Tin học';
        else if (/cong_nghe/i.test(checkStr)) subjName = 'Công nghệ';
        else if (/hdtn/i.test(checkStr)) subjName = 'Hoạt động trải nghiệm';
        else if (/am_nhac|âm nhạc/i.test(checkStr)) subjName = 'Âm nhạc';
        else if (/my_thuat/i.test(checkStr)) subjName = 'Mĩ thuật';
        else if (/gdtc|gd_the_chat|thể chất/i.test(checkStr)) subjName = 'Giáo dục thể chất';
        else subjName = 'Lịch sử và Địa lí';
      }

      var rawTitle = les.lessonTitle || les.title || 'BÀI DẠY';
      var cleanLessonTitle = IntegrationService.cleanLessonTitle(rawTitle, les, subjName);

      // Phòng hộ đa tầng: tuyệt đối không để tiêu đề bài trùng trơ trọi tên môn học
      if (cleanLessonTitle && cleanLessonTitle.trim().toUpperCase() === subjName.trim().toUpperCase()) {
        if (les.topic) cleanLessonTitle = les.topic;
        else if (les.period) cleanLessonTitle = subjName + ' (' + les.period + ')';
      }

      if (dateStr && /ngày\s*thực\s*hiện\s*:\s*[.\s_]{3,}/i.test(cleanLessonTitle)) {
        cleanLessonTitle = cleanLessonTitle.replace(/ngày\s*thực\s*hiện\s*:\s*[.\s_]{3,}/i, 'Ngày thực hiện: ' + dateStr);
      }

      if (lIdx === 0 || !isContinuousMode) {
        docHtml += `
          <div class="title-box" style="text-align: center; font-family: 'Times New Roman', serif;">
            ${headerBlock}
            ${daySessionInfo}
            <h2 align="center" style="font-family: 'Times New Roman', serif; font-size: 14pt; font-weight: bold; text-transform: uppercase; text-align: center; margin: 0pt; line-height: 1.0;">KẾ HOẠCH BÀI DẠY</h2>
            <p align="center" style="font-family: 'Times New Roman', serif; font-size: 13pt; font-weight: bold; margin: 2pt 0 0 0; text-align: center; line-height: 1.0;">MÔN: ${subjName.toUpperCase()}${(meta.role === 'gvbm' || les.grade) ? (' - KHỐI ' + (les.grade || grade)) : ''}${les.classes ? (' (Dạy các lớp: ' + les.classes + ')') : (les.className ? (' (' + (les.className.toLowerCase().includes('lớp') ? les.className : ('Lớp ' + les.className)) + ')') : '')}</p>
            <p align="center" style="font-family: 'Times New Roman', serif; font-size: 14pt; font-weight: bold; margin-top: 4pt; margin-bottom: 0pt; text-align: center; line-height: 1.0; color: #1e3a8a;">${cleanLessonTitle}</p>
            ${les.period ? ('<p align="center" style="font-family: \'Times New Roman\', serif; font-size: 13pt; font-style: italic; margin-top: 2pt; margin-bottom: 0pt; text-align: center; line-height: 1.0;">(' + les.period + ')</p>') : ''}
          </div>
        `;
      } else {
        docHtml += `
          <div class="title-box" style="margin-top: 10pt; margin-bottom: 4pt; text-align: center; font-family: 'Times New Roman', serif;">
            ${daySessionInfo}
            <p align="center" style="font-family: 'Times New Roman', serif; font-size: 14pt; font-weight: bold; margin-top: 4pt; margin-bottom: 0pt; text-align: center; line-height: 1.0; color: #1e3a8a;">${cleanLessonTitle}</p>
            ${les.period ? ('<p align="center" style="font-family: \'Times New Roman\', serif; font-size: 13pt; font-style: italic; margin-top: 2pt; margin-bottom: 0pt; text-align: center; line-height: 1.0;">(' + les.period + ')</p>') : ''}
          </div>
        `;
      }

      docHtml += `
        <div class="section-title">I. YÊU CẦU CẦN ĐẠT:</div>
        <div style="margin-left: 10pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0;">
          ${yccdContent || '<p style="margin: 0pt; font-family: \'Times New Roman\', serif; font-size: 13pt; line-height: 1.0;">Theo quy định của chương trình môn học.</p>'}
        </div>

        <div class="section-title">II. ĐỒ DÙNG DẠY HỌC:</div>
        <div style="margin-left: 10pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0;">
          ${dodungContent || '<p style="margin: 0pt; font-family: \'Times New Roman\', serif; font-size: 13pt; line-height: 1.0;">1. Giáo viên: SGK, máy tính, bài giảng điện tử.<br>2. Học sinh: SGK, vở bài tập, đồ dùng học tập.</p>'}
        </div>

        <div class="section-title">III. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU:</div>
        <div style="margin-left: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0;">
          ${actTablesHtml || '<p style="margin: 0pt; font-family: \'Times New Roman\', serif; font-size: 13pt; line-height: 1.0;">Thực hiện theo tiến trình chuẩn của bài dạy.</p>'}
        </div>

        <div class="section-title">IV. ĐIỀU CHỈNH SAU BÀI DẠY (NẾU CÓ):</div>
        <div style="margin-left: 10pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0;">
          <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; white-space: nowrap; overflow: hidden;">${'.'.repeat(130)}</p>
          <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; white-space: nowrap; overflow: hidden;">${'.'.repeat(130)}</p>
          <p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; mso-para-margin-top: 0pt; mso-para-margin-bottom: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; white-space: nowrap; overflow: hidden;">${'.'.repeat(130)}</p>
        </div>
      `;
    });

    // KHUNG DUYỆT GIÁO ÁN CHUẨN THEO FILE DUYỆT.DOCX CỦA TRƯỜNG
    var ap = (meta && meta.approvalConfig) || (typeof integrationState !== 'undefined' && integrationState.approvalConfig) || null;
    var showApproval = ap ? (ap.enabled === true) : false;

    if (showApproval) {
      var leaderRoleTitle = (ap.leaderRole === 'P.Tổ trưởng' || (ap.leaderRole && ap.leaderRole.indexOf('Phó') !== -1)) 
        ? 'PHÓ TỔ TRƯỞNG CHUYÊN MÔN' 
        : 'TỔ TRƯỞNG CHUYÊN MÔN';
      var leaderSignName = (ap.leaderName && ap.leaderName.trim()) ? ap.leaderName.trim() : '……………………………….';

      var adminRoleTitle = (ap.adminRole === 'P.Hiệu trưởng' || (ap.adminRole && ap.adminRole.indexOf('Phó') !== -1))
        ? 'PHÓ HIỆU TRƯỞNG'
        : 'HIỆU TRƯỞNG';
      var adminSignName = (ap.adminName && ap.adminName.trim()) ? ap.adminName.trim() : '……………………………..';

      docHtml += `
        <!-- ========================================================================= -->
        <!-- TRANG RIÊNG DUYỆT GIÁO ÁN - ĐÓNG KHUNG THEO CHUẨN DUYỆT.DOCX CỦA TRƯỜNG -->
        <!-- ========================================================================= -->
        <br clear="all" style="page-break-before: always; mso-break-type: section-break;" />
        <p class="MsoNormal" style="page-break-before: always; margin: 0pt; mso-para-margin: 0pt; font-size: 1pt; line-height: 1pt; height: 1pt; mso-margin-top-alt: 0pt; mso-margin-bottom-alt: 0pt;">&nbsp;</p>

        <div class="approval-page" style="page-break-inside: avoid; margin-top: 0pt; font-family: 'Times New Roman', serif;">
          <table class="approval-table" style="width: 100%; border-collapse: collapse; border: 1.5pt solid #000000; mso-border-alt: solid black 1.5pt; page-break-inside: avoid; mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt;">
            <tr style="page-break-inside: avoid; mso-element: table-row;">
              <td align="center" style="border: 1.0pt solid #000000; mso-border-alt: solid black 1.0pt; text-align: center; vertical-align: top; padding: 10pt 8pt; page-break-inside: avoid; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0;">
                <p align="center" style="font-family: 'Times New Roman', serif; font-size: 13pt; font-weight: bold; text-transform: uppercase; margin: 0pt; mso-para-margin: 0pt; line-height: 1.0; text-align: center;">GIÁO VIÊN SOẠN</p>
                <p align="center" style="margin: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; mso-para-margin: 0pt; text-align: center;">&nbsp;</p>
                <p align="center" style="margin: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; mso-para-margin: 0pt; text-align: center;">&nbsp;</p>
                <p align="center" style="margin: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; mso-para-margin: 0pt; text-align: center;">&nbsp;</p>
                <p align="center" style="margin: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; mso-para-margin: 0pt; text-align: center;">&nbsp;</p>
                <p align="center" style="margin: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; mso-para-margin: 0pt; text-align: center;">&nbsp;</p>
                <p align="center" style="font-family: 'Times New Roman', serif; font-size: 13pt; font-weight: bold; margin: 0pt; mso-para-margin: 0pt; line-height: 1.0; text-align: center;">${teacherName || '………………………'}</p>
                <p align="center" style="margin: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; mso-para-margin: 0pt; text-align: center;">&nbsp;</p>
              </td>
            </tr>
            <tr style="page-break-inside: avoid; mso-element: table-row;">
              <td align="center" style="border: 1.0pt solid #000000; mso-border-alt: solid black 1.0pt; text-align: center; vertical-align: top; padding: 10pt 8pt; page-break-inside: avoid; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0;">
                <p align="center" style="font-family: 'Times New Roman', serif; font-size: 13pt; font-weight: bold; text-transform: uppercase; margin: 0pt; mso-para-margin: 0pt; line-height: 1.0; text-align: center;">${leaderRoleTitle}</p>
                <p align="center" style="font-family: 'Times New Roman', serif; font-size: 13pt; font-weight: bold; text-transform: uppercase; margin: 2pt 0 0 0; mso-para-margin-top: 2pt; line-height: 1.0; text-align: center;">DUYỆT</p>
                <p align="center" style="margin: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; mso-para-margin: 0pt; text-align: center;">&nbsp;</p>
                <p align="center" style="margin: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; mso-para-margin: 0pt; text-align: center;">&nbsp;</p>
                <p align="center" style="margin: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; mso-para-margin: 0pt; text-align: center;">&nbsp;</p>
                <p align="center" style="margin: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; mso-para-margin: 0pt; text-align: center;">&nbsp;</p>
                <p align="center" style="margin: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; mso-para-margin: 0pt; text-align: center;">&nbsp;</p>
                <p align="center" style="font-family: 'Times New Roman', serif; font-size: 13pt; font-weight: bold; margin: 0pt; mso-para-margin: 0pt; line-height: 1.0; text-align: center;">${leaderSignName}</p>
                <p align="center" style="margin: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; mso-para-margin: 0pt; text-align: center;">&nbsp;</p>
              </td>
            </tr>
            <tr style="page-break-inside: avoid; mso-element: table-row;">
              <td align="center" style="border: 1.0pt solid #000000; mso-border-alt: solid black 1.0pt; text-align: center; vertical-align: top; padding: 10pt 8pt; page-break-inside: avoid; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0;">
                <p align="center" style="font-family: 'Times New Roman', serif; font-size: 13pt; font-weight: bold; text-transform: uppercase; margin: 0pt; mso-para-margin: 0pt; line-height: 1.0; text-align: center;">BAN GIÁM HIỆU</p>
                <p align="center" style="font-family: 'Times New Roman', serif; font-size: 13pt; font-weight: bold; text-transform: uppercase; margin: 2pt 0 0 0; mso-para-margin-top: 2pt; line-height: 1.0; text-align: center;">DUYỆT</p>
                <p align="center" style="font-family: 'Times New Roman', serif; font-size: 13pt; font-weight: bold; text-transform: uppercase; margin: 2pt 0 0 0; mso-para-margin-top: 2pt; line-height: 1.0; text-align: center;">${adminRoleTitle}</p>
                <p align="center" style="margin: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; mso-para-margin: 0pt; text-align: center;">&nbsp;</p>
                <p align="center" style="margin: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; mso-para-margin: 0pt; text-align: center;">&nbsp;</p>
                <p align="center" style="margin: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; mso-para-margin: 0pt; text-align: center;">&nbsp;</p>
                <p align="center" style="margin: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; mso-para-margin: 0pt; text-align: center;">&nbsp;</p>
                <p align="center" style="margin: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; mso-para-margin: 0pt; text-align: center;">&nbsp;</p>
                <p align="center" style="font-family: 'Times New Roman', serif; font-size: 13pt; font-weight: bold; margin: 0pt; mso-para-margin: 0pt; line-height: 1.0; text-align: center;">${adminSignName}</p>
                <p align="center" style="margin: 0pt; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.0; mso-para-margin: 0pt; text-align: center;">&nbsp;</p>
              </td>
            </tr>
          </table>
        </div>
      `;
    }

    docHtml += '</div></body></html>';
    return docHtml;
  },

  /**
   * Chuẩn hóa và làm sạch mã HTML trước khi đóng gói Word .docx
   */
  sanitizeHtmlForWordDocx: function(html) {
    if (!html) return '';
    // 1. Loại bỏ triệt để text-justify: inter-ideograph (ngăn Word giãn khoảng cách ký tự bất thường)
    var cleaned = html.replace(/text-justify\s*:\s*inter-ideograph\s*;?/gi, '');

    // 2. Chuyển đổi các ngắt dòng mềm <br/> trong ô bảng (td, th) thành đoạn <p> chuẩn
    // Ngăn chặn 100% lỗi Word giãn cách từ ngữ dàn trải hai biên (lỗi căn chữ/giãn chữ khi có Shift+Enter)
    cleaned = cleaned.replace(/(<(?:td|th)\b[^>]*>)([\s\S]*?)(<\/(?:td|th)>)/gi, function(match, openTag, body, closeTag) {
      var cellOpen = openTag.replace(/text-justify\s*:\s*inter-ideograph\s*;?/gi, '');
      var cellBody = body.replace(/text-justify\s*:\s*inter-ideograph\s*;?/gi, '');

      if (/<br\s*\/?>/i.test(cellBody)) {
        if (/<div\b/i.test(cellBody)) {
          cellBody = cellBody.replace(/<div\b([^>]*)>/gi, '<p$1>').replace(/<\/div>/gi, '</p>');
        }
        cellBody = cellBody.replace(/<br\s*\/?>/gi, '</p><p style="margin: 0pt; margin-top: 0pt; margin-bottom: 0pt; mso-para-margin: 0pt; font-family: \'Times New Roman\', serif; font-size: 13pt; line-height: 1.0; text-align: justify;">');
      }
      return cellOpen + cellBody + closeTag;
    });

    return cleaned;
  },

  /**
   * Tạo tệp .docx chuẩn OpenXML (dùng JSZip & altChunk có đầy đủ styles.xml và fontTable.xml chuẩn Times New Roman 13pt)
   */
  createDocxBlobFromHtml: async function(docHtml) {
    var jszipObj = (typeof JSZip !== 'undefined') ? JSZip : ((typeof window !== 'undefined' && window.JSZip) ? window.JSZip : null);
    if (jszipObj) {
      try {
        // Tự động chuyển đổi toàn bộ đường dẫn ảnh (assets/... hoặc url) thành Base64 Data URI để nhúng trực tiếp vào file Word
        if (typeof docHtml === 'string' && docHtml.indexOf('<img') !== -1) {
          try {
            var imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
            var match;
            var urlsToFetch = [];
            while ((match = imgRegex.exec(docHtml)) !== null) {
              var url = match[1];
              if (url && !url.startsWith('data:') && urlsToFetch.indexOf(url) === -1) {
                urlsToFetch.push(url);
              }
            }
            for (var u = 0; u < urlsToFetch.length; u++) {
              var targetUrl = urlsToFetch[u];
              try {
                var b64Data = null;
                if (typeof window !== 'undefined' && typeof window.fetch === 'function') {
                  try {
                    var response = await fetch(targetUrl);
                    if (response.ok) {
                      var blob = await response.blob();
                      b64Data = await new Promise(function(resolve) {
                        var reader = new FileReader();
                        reader.onloadend = function() { resolve(reader.result); };
                        reader.readAsDataURL(blob);
                      });
                    }
                  } catch(fetchCatch) {}
                  if (!b64Data && typeof document !== 'undefined') {
                    try {
                      b64Data = await new Promise(function(resolve) {
                        var img = new Image();
                        img.crossOrigin = 'Anonymous';
                        img.onload = function() {
                          try {
                            var cvs = document.createElement('canvas');
                            cvs.width = img.naturalWidth || img.width;
                            cvs.height = img.naturalHeight || img.height;
                            var ctx = cvs.getContext('2d');
                            ctx.drawImage(img, 0, 0);
                            resolve(cvs.toDataURL());
                          } catch(err) {
                            resolve(null);
                          }
                        };
                        img.onerror = function() { resolve(null); };
                        img.src = targetUrl;
                      });
                    } catch(cvsCatch) {}
                  }
                } else if (typeof require !== 'undefined') {
                  var fs = require('fs');
                  var path = require('path');
                  var localPath = path.resolve(targetUrl);
                  if (fs.existsSync(localPath)) {
                    var ext = targetUrl.split('.').pop() || 'png';
                    var buf = fs.readFileSync(localPath);
                    b64Data = 'data:image/' + ext + ';base64,' + buf.toString('base64');
                  }
                }
                if (b64Data) {
                  docHtml = docHtml.split(targetUrl).join(b64Data);
                }
              } catch(fetchErr) {
                console.warn('Could not embed image for Word export:', targetUrl, fetchErr);
              }
            }
          } catch(imgErr) {
            console.warn('Image embedding error:', imgErr);
          }
        }

        // Chuẩn hóa kích thước toàn bộ ảnh trong file Word xuất ra cho toàn bộ hệ thống
        // Đảm bảo mọi ảnh đều có width="306" và style="width: 229.5pt; max-width: 100%; height: auto; display: block; margin: 4pt auto;"
        // Ngăn chặn 100% lỗi ảnh bị phóng to làm vỡ bảng và làm file phình to quá số trang chuẩn
        if (typeof docHtml === 'string' && docHtml.indexOf('<img') !== -1) {
          docHtml = docHtml.replace(/<img\b([^>]*)>/gi, function(fullTag, attrs) {
            var newAttrs = attrs;
            if (!/\bwidth\s*=/i.test(newAttrs)) {
              newAttrs = ' width="306"' + newAttrs;
            } else {
              newAttrs = newAttrs.replace(/\bwidth\s*=\s*["']?(\d+)["']?/i, function(m, w) {
                return (parseInt(w) > 350) ? 'width="306"' : m;
              });
            }
            if (/\bstyle\s*=\s*["']([^"']*)["']/i.test(newAttrs)) {
              newAttrs = newAttrs.replace(/\bstyle\s*=\s*["']([^"']*)["']/i, function(m, s) {
                var cleanStyle = s.replace(/(?:^|;)\s*(?:max-|min-)?width\s*:\s*[^;]+/gi, '').replace(/^;\s*/, '').trim();
                return 'style="width: 229.5pt; max-width: 100%; height: auto; display: block; margin: 4pt auto; ' + cleanStyle + '"';
              });
            } else {
              newAttrs += ' style="width: 229.5pt; max-width: 100%; height: auto; display: block; margin: 4pt auto;"';
            }
            return '<img' + newAttrs + '>';
          });
        }

        var zip = new jszipObj();

        // 1. _rels/.rels
        zip.file('_rels/.rels', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
          '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n' +
          '  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>\n' +
          '</Relationships>');

        // 2. [Content_Types].xml
        zip.file('[Content_Types].xml', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
          '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">\n' +
          '  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>\n' +
          '  <Default Extension="xml" ContentType="application/xml"/>\n' +
          '  <Default Extension="html" ContentType="text/html"/>\n' +
          '  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>\n' +
          '  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>\n' +
          '  <Override PartName="/word/fontTable.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.fontTable+xml"/>\n' +
          '</Types>');

        // 3. word/_rels/document.xml.rels
        zip.file('word/_rels/document.xml.rels', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
          '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n' +
          '  <Relationship Id="htmlChunk" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/aFChunk" Target="content.html"/>\n' +
          '  <Relationship Id="rIdStyles" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>\n' +
          '  <Relationship Id="rIdFontTable" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable" Target="fontTable.xml"/>\n' +
          '</Relationships>');

        // 4. word/styles.xml (Đảm bảo Word 100% nhận diện font Times New Roman 13pt cho toàn bộ bảng và văn bản)
        var stylesXml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
          '<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n' +
          '  <w:docDefaults>\n' +
          '    <w:rPrDefault>\n' +
          '      <w:rPr>\n' +
          '        <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:eastAsia="Times New Roman" w:cs="Times New Roman"/>\n' +
          '        <w:sz w:val="26"/>\n' +
          '        <w:szCs w:val="26"/>\n' +
          '        <w:lang w:val="vi-VN"/>\n' +
          '      </w:rPr>\n' +
          '    </w:rPrDefault>\n' +
          '    <w:pPrDefault>\n' +
          '      <w:pPr>\n' +
          '        <w:spacing w:after="0" w:line="240" w:lineRule="auto"/>\n' +
          '      </w:pPr>\n' +
          '    </w:pPrDefault>\n' +
          '  </w:docDefaults>\n' +
          '  <w:style w:type="paragraph" w:default="1" w:styleId="Normal">\n' +
          '    <w:name w:val="Normal"/>\n' +
          '    <w:qFormat/>\n' +
          '    <w:rPr>\n' +
          '      <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:eastAsia="Times New Roman" w:cs="Times New Roman"/>\n' +
          '      <w:sz w:val="26"/>\n' +
          '      <w:szCs w:val="26"/>\n' +
          '    </w:rPr>\n' +
          '  </w:style>\n' +
          '  <w:style w:type="table" w:default="1" w:styleId="TableNormal">\n' +
          '    <w:name w:val="Normal Table"/>\n' +
          '    <w:uiPriority w:val="99"/>\n' +
          '    <w:semiHidden/>\n' +
          '    <w:unhideWhenUsed/>\n' +
          '    <w:rPr>\n' +
          '      <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:eastAsia="Times New Roman" w:cs="Times New Roman"/>\n' +
          '      <w:sz w:val="26"/>\n' +
          '      <w:szCs w:val="26"/>\n' +
          '    </w:rPr>\n' +
          '    <w:tblPr/>\n' +
          '  </w:style>\n' +
          '  <w:style w:type="table" w:styleId="TableGrid">\n' +
          '    <w:name w:val="Table Grid"/>\n' +
          '    <w:basedOn w:val="TableNormal"/>\n' +
          '    <w:uiPriority w:val="39"/>\n' +
          '    <w:rPr>\n' +
          '      <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:eastAsia="Times New Roman" w:cs="Times New Roman"/>\n' +
          '      <w:sz w:val="26"/>\n' +
          '      <w:szCs w:val="26"/>\n' +
          '    </w:rPr>\n' +
          '  </w:style>\n' +
          '</w:styles>';
        zip.file('word/styles.xml', stylesXml);

        // 5. word/fontTable.xml
        var fontTableXml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
          '<w:fonts xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">\n' +
          '  <w:font w:name="Times New Roman">\n' +
          '    <w:panose1 w:val="02020603050405020304"/>\n' +
          '    <w:charset w:val="00"/>\n' +
          '    <w:family w:val="roman"/>\n' +
          '    <w:pitch w:val="variable"/>\n' +
          '    <w:sig w:usb0="E0002EFF" w:usb1="C000785B" w:usb2="00000009" w:usb3="00000000" w:csb0="000001FF" w:csb1="00000000"/>\n' +
          '  </w:font>\n' +
          '</w:fonts>';
        zip.file('word/fontTable.xml', fontTableXml);

        // 6. word/document.xml
        // Trang A4 (11906 x 16838 dxa), Căn lề chuẩn NĐ 30: Trên 2.0cm (1134 dxa), Phải 1.5cm (851 dxa), Dưới 2.0cm (1134 dxa), Trái 3.0cm (1701 dxa)
        zip.file('word/document.xml', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
          '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n' +
          '  <w:body>\n' +
          '    <w:altChunk r:id="htmlChunk"/>\n' +
          '    <w:sectPr>\n' +
          '      <w:pgSz w:w="11906" w:h="16838"/>\n' +
          '      <w:pgMar w:top="1134" w:right="851" w:bottom="1134" w:left="1701" w:header="720" w:footer="720" w:gutter="0"/>\n' +
          '    </w:sectPr>\n' +
          '  </w:body>\n' +
          '</w:document>');

        // 7. word/content.html (đã làm sạch và chuẩn hóa font & paragraph)
        var sanitizedHtml = this.sanitizeHtmlForWordDocx(docHtml);
        var fullHtml = sanitizedHtml.includes('<meta charset=') ? sanitizedHtml : ('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>' + sanitizedHtml + '</body></html>');
        zip.file('word/content.html', '\ufeff' + fullHtml);

        var genType = (typeof JSZip !== 'undefined' && JSZip.support && JSZip.support.blob) ? 'blob' : 'uint8array';
        var docxBlob = await zip.generateAsync({
          type: genType,
          mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          compression: 'DEFLATE',
          compressionOptions: { level: 6 }
        });

        if (genType === 'uint8array' && typeof Blob !== 'undefined' && typeof window !== 'undefined' && window.showSaveFilePicker) {
          docxBlob = new Blob([docxBlob], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
        }

        return { blob: docxBlob, isDocx: true };
      } catch (err) {
        console.warn('Lỗi tạo .docx qua JSZip, chuyển sang fallback blob:', err);
      }
    }
    // Fallback: Mime application/msword (Word mở file HTML .doc chuẩn 100% không bao giờ cảnh báo)
    var fallbackBlob = new Blob(['\ufeff' + docHtml], { type: 'application/msword;charset=utf-8' });
    return { blob: fallbackBlob, isDocx: false };
  },

  downloadWordBlob: async function(docHtml, filename) {
    if (typeof Blob === 'undefined') return { success: false, error: 'Blob not supported' };

    var finalFilename = filename || 'KHBD.docx';
    var result = await this.createDocxBlobFromHtml(docHtml);
    var blob = result.blob;

    if (!result.isDocx) {
      if (finalFilename.toLowerCase().endsWith('.docx')) {
        finalFilename = finalFilename.slice(0, -5) + '.doc';
      } else if (!finalFilename.toLowerCase().endsWith('.doc')) {
        finalFilename += '.doc';
      }
    } else {
      if (finalFilename.toLowerCase().endsWith('.doc')) {
        finalFilename = finalFilename.slice(0, -4) + '.docx';
      } else if (!finalFilename.toLowerCase().endsWith('.docx')) {
        finalFilename += '.docx';
      }
    }

    // 1. Mở Hộp thoại Lưu File (Save As dialog) chuẩn Windows / Hệ điều hành thông qua File System Access API
    if (typeof window !== 'undefined' && typeof window.showSaveFilePicker === 'function') {
      try {
        var pickerOpts = result.isDocx ? {
          suggestedName: finalFilename,
          types: [{
            description: 'Tài liệu Microsoft Word (.docx)',
            accept: { 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'] }
          }]
        } : {
          suggestedName: finalFilename,
          types: [{
            description: 'Tài liệu Microsoft Word (.doc)',
            accept: { 'application/msword': ['.doc'] }
          }]
        };
        var handle = await window.showSaveFilePicker(pickerOpts);
        var writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();
        return { success: true, method: 'picker', filename: finalFilename };
      } catch (err) {
        // Nếu người dùng bấm "Hủy / Cancel" trên hộp thoại Lưu của Windows
        if (err && (err.name === 'AbortError' || err.code === 20)) {
          return { success: false, aborted: true };
        }
        // Trường hợp trình duyệt chặn quyền hoặc hết hạn user gesture -> fallback sang thẻ <a>
        console.warn('showSaveFilePicker fallback to anchor download:', err);
      }
    }

    // 2. Hỗ trợ trình duyệt cũ IE / Edge Legacy
    if (typeof window !== 'undefined' && window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, finalFilename);
      return { success: true, method: 'msSave', filename: finalFilename };
    }

    // 3. Chuẩn HTML5 download qua thẻ <a> (tải thẳng vào thư mục Downloads của máy tính)
    if (typeof document !== 'undefined') {
      var url = URL.createObjectURL(blob);
      var downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = finalFilename;
      downloadLink.style.display = 'none';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      setTimeout(function() {
        if (downloadLink.parentNode) {
          downloadLink.parentNode.removeChild(downloadLink);
        }
        URL.revokeObjectURL(url);
      }, 1500);
      return { success: true, method: 'direct', filename: finalFilename };
    }

    return { success: false, error: 'No download mechanism available' };
  },

  saveWordBlob: async function(docHtmlOrBlob, filename) {
    if (typeof docHtmlOrBlob === 'string') {
      return await this.downloadWordBlob(docHtmlOrBlob, filename);
    }
    var finalFilename = filename || 'KHBD.docx';
    if (finalFilename.toLowerCase().endsWith('.doc')) {
      finalFilename = finalFilename.slice(0, -4) + '.docx';
    } else if (!finalFilename.toLowerCase().endsWith('.docx')) {
      finalFilename += '.docx';
    }
    if (typeof window !== 'undefined' && typeof window.showSaveFilePicker === 'function') {
      try {
        var pickerOpts = {
          suggestedName: finalFilename,
          types: [{
            description: 'Tài liệu Microsoft Word (.docx)',
            accept: { 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'] }
          }]
        };
        var handle = await window.showSaveFilePicker(pickerOpts);
        var writable = await handle.createWritable();
        await writable.write(docHtmlOrBlob);
        await writable.close();
        return { success: true, method: 'picker', filename: finalFilename };
      } catch (err) {
        if (err && (err.name === 'AbortError' || err.code === 20)) {
          return { success: false, aborted: true };
        }
      }
    }
    if (typeof window !== 'undefined' && window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(docHtmlOrBlob, finalFilename);
      return { success: true, method: 'msSave', filename: finalFilename };
    }
    if (typeof document !== 'undefined') {
      var url = URL.createObjectURL(docHtmlOrBlob);
      var downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = finalFilename;
      downloadLink.style.display = 'none';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      setTimeout(function() {
        if (downloadLink.parentNode) {
          downloadLink.parentNode.removeChild(downloadLink);
        }
        URL.revokeObjectURL(url);
      }, 1500);
      return { success: true, method: 'direct', filename: finalFilename };
    }
    return { success: false, error: 'No download mechanism available' };
  }
};

if (typeof window !== 'undefined') {
  window.IntegrationService = IntegrationService;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = IntegrationService;
}
