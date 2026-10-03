/**
 * SGK MASTER REGISTRY & RETRIEVAL SERVICE (HỖ TRỢ ĐA BỘ SÁCH: KNTT & CTST)
 * Quản lý và cung cấp dữ liệu sách giáo khoa số hóa cho hệ thống Ra đề thi AI
 * Chuẩn Chương trình GDPT 2018 & Thông tư 27/2020/TT-BGDĐT & Chuẩn SEA-PLM
 */

(function(global) {
  'use strict';

  // Kho lưu trữ theo bộ sách: _seriesBooks[series][grade][subjectKey]
  const _seriesBooks = {
    kntt: {},
    ctst: {}
  };

  // Kho legacy để tương thích ngược hoàn toàn với code cũ
  const _legacyBooks = {};

  let _activeSeries = 'kntt';

  const SGKRegistry = {
    /**
     * Chuẩn hóa mã bộ sách ('kntt' | 'ctst')
     */
    _normalizeSeries: function(series) {
      if (!series) return _activeSeries || 'kntt';
      const s = String(series).toLowerCase().trim().replace(/[-_]/g, '');
      if (s.includes('ctst') || s.includes('chantroi') || s.includes('chantroisangtao')) {
        return 'ctst';
      }
      return 'kntt';
    },

    /**
     * Chuẩn hóa mã môn học
     */
    _normalizeKey: function(key) {
      if (!key) return '';
      return String(key).toLowerCase().trim()
        .replace(/-/g, '_')
        .replace('lich_su_dia_ly', 'lich_su_dia_li');
    },

    /**
     * Thiết lập bộ sách mặc định đang chọn trên giao diện
     */
    setActiveSeries: function(series) {
      _activeSeries = this._normalizeSeries(series);
      console.log(`[SGKRegistry] Đã chuyển bộ sách mặc định sang: ${_activeSeries.toUpperCase()}`);
    },

    /**
     * Lấy bộ sách mặc định hiện tại
     */
    getActiveSeries: function() {
      return _activeSeries;
    },

    /**
     * Đăng ký một cuốn sách giáo khoa vào kho
     * @param {number|string} grade Khối lớp (VD: 5)
     * @param {string} subjectId Mã môn (toan, tieng_viet, khoa_hoc, lich_su_dia_li, cong_nghe, tin_hoc, tieng_anh, tnxh)
     * @param {object} bookData Toàn bộ dữ liệu số hóa của sách
     * @param {string} [bookSeries] Bộ sách ('kntt' hoặc 'ctst', mặc định tự phát hiện từ metadata)
     */
    registerBook: function(grade, subjectId, bookData, bookSeries) {
      const g = String(grade);
      const key = this._normalizeKey(subjectId);
      const series = this._normalizeSeries(bookSeries || bookData.metadata?.bookSeries || (bookData.metadata?.bookName?.toLowerCase().includes('chân trời') ? 'ctst' : 'kntt'));

      if (!_seriesBooks[series]) {
        _seriesBooks[series] = {};
      }
      if (!_seriesBooks[series][g]) {
        _seriesBooks[series][g] = {};
      }
      _seriesBooks[series][g][key] = bookData;
      if (subjectId !== key) {
        _seriesBooks[series][g][subjectId] = bookData;
      }

      // Giữ bản sao vào legacy books nếu là kntt hoặc chưa có môn này
      if (!_legacyBooks[g]) _legacyBooks[g] = {};
      if (series === 'kntt' || !_legacyBooks[g][key]) {
        _legacyBooks[g][key] = bookData;
        if (subjectId !== key) _legacyBooks[g][subjectId] = bookData;
      }

      console.log(`[SGKRegistry] Đã nạp dữ liệu SGK: [${series.toUpperCase()}] Khối ${g} - Môn ${key} (${bookData.metadata?.bookName || ''})`);
    },

    /**
     * Lấy dữ liệu cuốn sách đã đăng ký
     * @param {number|string} grade Khối lớp
     * @param {string} subjectId Mã môn
     * @param {string} [bookSeries] Bộ sách ('kntt' hoặc 'ctst')
     */
    getBook: function(grade, subjectId, bookSeries) {
      const g = String(grade);
      const key = this._normalizeKey(subjectId);
      const series = this._normalizeSeries(bookSeries);

      // Thử lấy đúng theo bộ sách yêu cầu
      if (_seriesBooks[series] && _seriesBooks[series][g]) {
        const book = _seriesBooks[series][g][key] || _seriesBooks[series][g][subjectId];
        if (book) return book;
      }

      // Fallback sang legacy books nếu chưa có
      if (_legacyBooks[g]) {
        return _legacyBooks[g][key] || _legacyBooks[g][subjectId] || null;
      }

      return null;
    },

    /**
     * Kiểm tra xem cuốn sách đã được nạp vào bộ nhớ chưa
     */
    hasBook: function(grade, subjectId, bookSeries) {
      const g = String(grade);
      const key = this._normalizeKey(subjectId);
      const series = this._normalizeSeries(bookSeries);
      if (_seriesBooks[series] && _seriesBooks[series][g] && (_seriesBooks[series][g][key] || _seriesBooks[series][g][subjectId])) {
        return true;
      }
      if (_legacyBooks[g] && (_legacyBooks[g][key] || _legacyBooks[g][subjectId])) {
        return true;
      }
      return false;
    },

    _loadingPromises: {},

    /**
     * Tự động nạp động (lazy load) tệp sách giáo khoa tương ứng vào bộ nhớ
     * @param {number|string} grade Khối lớp (1-5)
     * @param {string} subjectId Mã môn (toan, tieng_viet, khoa_hoc, ...)
     * @param {string} [bookSeries] Bộ sách ('kntt' hoặc 'ctst')
     */
    ensureBookLoaded: function(grade, subjectId, bookSeries) {
      const g = parseInt(grade) || 5;
      const key = this._normalizeKey(subjectId);
      const series = this._normalizeSeries(bookSeries);

      // 1. Nếu sách đã có trong RAM thì trả về ngay
      if (this.hasBook(g, key, series)) {
        return Promise.resolve(true);
      }

      if (typeof document === 'undefined') return Promise.resolve(true);

      // 2. Xác định đường dẫn file tương ứng
      let filePath = '';
      if (series === 'ctst') {
        filePath = 'js/sgk/ctst/tieng-viet-' + g + '-ctst.js';
      } else {
        const fileMap = {
          'toan': 'toan-' + g + '.js',
          'tieng_viet': 'tieng-viet-' + g + '.js',
          'khoa_hoc': 'khoa-hoc-' + g + '.js',
          'lich_su_dia_li': 'lich-su-dia-li-' + g + '.js',
          'cong_nghe': 'cong-nghe-' + g + '.js',
          'tin_hoc': 'tin-hoc-' + g + '.js',
          'tieng_anh': 'tieng-anh-' + g + '.js',
          'tnxh': 'tnxh-' + g + '.js',
          'dao_duc': 'dao-duc-' + g + '.js',
          'hoat_dong_trai_nghiem': 'hoat-dong-trai-nghiem-' + g + '.js',
          'hdtn': 'hoat-dong-trai-nghiem-' + g + '.js'
        };
        const fname = fileMap[key];
        if (!fname) return Promise.resolve(false);
        filePath = 'js/sgk/lop' + g + '/' + fname;
      }

      if (!this._loadingPromises) this._loadingPromises = {};
      if (this._loadingPromises[filePath]) {
        return this._loadingPromises[filePath];
      }

      const self = this;
      this._loadingPromises[filePath] = new Promise(function(resolve) {
        if (self.hasBook(g, key, series)) {
          delete self._loadingPromises[filePath];
          resolve(true);
          return;
        }

        const existing = document.querySelector('script[src="' + filePath + '"]');
        if (existing) {
          if (self.hasBook(g, key, series)) {
            delete self._loadingPromises[filePath];
            resolve(true);
            return;
          }
          existing.addEventListener('load', function() {
            delete self._loadingPromises[filePath];
            resolve(true);
          });
          existing.addEventListener('error', function() {
            delete self._loadingPromises[filePath];
            resolve(false);
          });
          return;
        }

        const s = document.createElement('script');
        s.src = filePath;
        s.onload = function() {
          delete self._loadingPromises[filePath];
          console.log('[SGKRegistry] Đã nạp động thành công: ' + filePath);
          resolve(true);
        };
        s.onerror = function(err) {
          delete self._loadingPromises[filePath];
          console.warn('[SGKRegistry] Không tìm thấy file SGK: ' + filePath);
          resolve(false);
        };
        document.head.appendChild(s);
      });

      return this._loadingPromises[filePath];
    },

    /**
     * Lấy danh sách các môn đã số hóa của một khối theo bộ sách
     */
    getRegisteredSubjects: function(grade, bookSeries) {
      const g = String(grade);
      const series = this._normalizeSeries(bookSeries);
      const targetStore = (_seriesBooks[series] && _seriesBooks[series][g]) ? _seriesBooks[series][g] : (_legacyBooks[g] || {});
      
      const seen = new Set();
      const result = [];
      for (const subjKey of Object.keys(targetStore)) {
        const normKey = this._normalizeKey(subjKey);
        if (!seen.has(normKey)) {
          seen.add(normKey);
          result.push({
            subjectId: normKey,
            metadata: targetStore[subjKey].metadata
          });
        }
      }
      return result;
    },

    /**
     * Lấy danh sách bài học / chủ đề theo điều kiện lọc
     */
    getLessons: function(grade, subjectId, options = {}) {
      const series = options.bookSeries || options.series || _activeSeries;
      const book = this.getBook(grade, subjectId, series);
      if (!book || !book.lessons) return [];

      let list = [...book.lessons];

      if (options.semester) {
        list = list.filter(l => l.semester === Number(options.semester));
      }
      if (options.volume) {
        list = list.filter(l => l.volume === Number(options.volume));
      }
      if (options.fromWeek && options.toWeek) {
        list = list.filter(l => l.week >= Number(options.fromWeek) && l.week <= Number(options.toWeek));
      }
      if (options.topic) {
        list = list.filter(l => l.topic && l.topic.toLowerCase().includes(options.topic.toLowerCase()));
      }
      if (options.search) {
        const q = options.search.toLowerCase();
        list = list.filter(l => (l.title && l.title.toLowerCase().includes(q)) || (l.topic && l.topic.toLowerCase().includes(q)));
      }

      return list;
    },

    /**
     * Phân tích và truy xuất kiến thức trọng tâm cho phạm vi ra đề (Scope)
     * Dùng để truyền vào Prompt của AI hoặc offline fallback matrix
     */
    getScopeContent: function(grade, subjectId, scopeQuery, bookSeries) {
      const series = this._normalizeSeries(bookSeries);
      const book = this.getBook(grade, subjectId, series);
      if (!book) {
        return {
          found: false,
          summary: `Chưa có dữ liệu SGK số hóa cho Khối ${grade} môn ${subjectId} (${series.toUpperCase()}).`
        };
      }

      const q = (scopeQuery || '').trim().toLowerCase();
      let matchedLessons = [];
      const validLessons = (book.lessons || []).filter(l => 
        l && l.title && l.title !== 'Tên bài học' && l.topic !== 'Chủ đề/Mạch nội dung'
      );

      // 1. Kiểm tra dải tuần bằng Regex (Ví dụ: "Tuần 1 - 18", "Tuần 10 - 18", "Tuần 1 - 9", "Tuần 19 - 27", "Tuần 28 - 35", "Tuần 19 - 35")
      const weekRangeMatch = q.match(/tuần\s*(\d+)\s*(?:-|–|đến)\s*(\d+)/i);
      if (weekRangeMatch) {
        const startW = parseInt(weekRangeMatch[1], 10);
        const endW = parseInt(weekRangeMatch[2], 10);
        matchedLessons = validLessons.filter(l => l.week >= startW && l.week <= endW);
      } else if (q.includes('giữa kì 1') || q.includes('giữa kỳ 1') || q.includes('giữa hk1') || q.includes('giữa hki')) {
        matchedLessons = validLessons.filter(l => l.week >= 1 && l.week <= 9);
      } else if (q.includes('cuối kì 1') || q.includes('cuối kỳ 1') || q.includes('cuối hk1') || q.includes('cuối hki') || q.includes('học kì 1') || q.includes('học kỳ 1') || q.includes('hk1') || q.includes('hki')) {
        matchedLessons = validLessons.filter(l => l.semester === 1 || (l.week >= 1 && l.week <= 18));
      } else if (q.includes('giữa kì 2') || q.includes('giữa kỳ 2') || q.includes('giữa hk2') || q.includes('giữa hkii')) {
        matchedLessons = validLessons.filter(l => l.week >= 19 && l.week <= 27);
      } else if (q.includes('cuối năm') || q.includes('cuối kì 2') || q.includes('cuối kỳ 2') || q.includes('cuối hk2') || q.includes('cuối hkii') || q.includes('học kì 2') || q.includes('học kỳ 2') || q.includes('hk2') || q.includes('hkii')) {
        matchedLessons = validLessons.filter(l => l.semester === 2 || (l.week >= 19 && l.week <= 35));
      } else if (!q || q.includes('cả năm') || q.includes('toàn bộ')) {
        if (subjectId && subjectId !== 'toan') {
          matchedLessons = validLessons.filter(l => l.semester === 2 || (l.week >= 19 && l.week <= 35));
        } else {
          matchedLessons = validLessons;
        }
      } else {
        const singleWeekMatch = q.match(/tuần\s*(\d+)/i);
        if (singleWeekMatch) {
          const w = parseInt(singleWeekMatch[1], 10);
          matchedLessons = validLessons.filter(l => l.week === w);
        } else {
          matchedLessons = validLessons.filter(l => 
            (l.title && l.title.toLowerCase().includes(q)) || 
            (l.topic && l.topic.toLowerCase().includes(q)) ||
            (l.coreKnowledge && l.coreKnowledge.toLowerCase().includes(q))
          );
        }
      }

      if (matchedLessons.length === 0) {
        matchedLessons = validLessons.slice(0, 15);
      }

      // Format knowledge digest for AI generator (Bảo đảm 100% đầy đủ chi tiết, không cắt xén để AI ra đề chuẩn xác)
      let lessonSummaries = matchedLessons.map((l, idx) => {
        let lines = [];
        let weekTag = l.week ? `Tuần ${l.week}` : '';
        let topicTag = l.topic ? `Chủ đề: ${l.topic}` : '';
        let meta = [weekTag, topicTag].filter(Boolean).join(' | ');
        lines.push(`• [Bài ${idx + 1}] ${l.title}${meta ? ` (${meta})` : ''}`);
        
        if (l.coreKnowledge) {
          lines.push(`  + Kiến thức trọng tâm: ${l.coreKnowledge}`);
        }
        if (l.reading) {
          const rdTitle = typeof l.reading === 'string' ? l.reading : (l.reading.title || '');
          const rdContent = typeof l.reading === 'object' ? (l.reading.coreContent || '') : '';
          const rdFocus = typeof l.reading === 'object' ? (l.reading.comprehensionFocus || l.reading.summary || '') : '';
          let rdStr = `  + Đọc hiểu: "${rdTitle}"`;
          if (rdContent) rdStr += ` - Nội dung: ${rdContent}`;
          if (rdFocus) rdStr += ` - Trọng tâm: ${rdFocus}`;
          lines.push(rdStr);
        }
        if (l.languagePractice) {
          const lpTopic = typeof l.languagePractice === 'string' ? l.languagePractice : (l.languagePractice.topic || '');
          const lpSkills = typeof l.languagePractice === 'object' ? (l.languagePractice.skills || '') : '';
          let lpStr = `  + Luyện từ và câu: ${lpTopic}`;
          if (lpSkills) lpStr += ` (${lpSkills})`;
          lines.push(lpStr);
        }
        if (l.writing) {
          const wrTopic = typeof l.writing === 'string' ? l.writing : (l.writing.topic || '');
          const wrSkills = typeof l.writing === 'object' ? (l.writing.skills || '') : '';
          let wrStr = `  + Tập làm văn / Viết: ${wrTopic}`;
          if (wrSkills) wrStr += ` (${wrSkills})`;
          lines.push(wrStr);
        }
        if (l.vocabulary) lines.push(`  + Từ vựng: ${l.vocabulary}`);
        if (l.sentencePatterns) lines.push(`  + Mẫu câu: ${l.sentencePatterns}`);
        return lines.join('\n');
      }).join('\n\n');

      if (subjectId === 'toan') {
        lessonSummaries = `[KHUNG 3 MẠCH KIẾN THỨC MÔN TOÁN CHUẨN GDPT 2018]\n1. Số và phép tính (Số tự nhiên, phân số, số thập phân, tỉ số, tỉ số phần trăm; 4 phép tính, tính nhẩm, giải toán có lời văn)\n2. Hình học và Đo lường (Hình phẳng: tam giác, hình thang, hình tròn; Hình khối: hình hộp chữ nhật, hình lập phương; Chu vi, diện tích, thể tích; Đơn vị đo diện tích km²/ha, thể tích m³/dm³/cm³, thời gian; Toán chuyển động đều)\n3. Một số yếu tố Thống kê và Xác suất (Thu thập, kiểm đếm số liệu, đọc biểu đồ hình quạt tròn/cột; khả năng xảy ra của một sự kiện)\n\n[CHI TIẾT TOÀN BỘ CÁC BÀI HỌC VÀ YÊU CẦU CẦN ĐẠT TRONG PHẠM VI RA ĐỀ (${matchedLessons.length} BÀI HỌC)]:\n` + lessonSummaries;
      }

      return {
        found: true,
        series: series,
        bookName: book.metadata?.bookName,
        totalMatchedLessons: matchedLessons.length,
        lessons: matchedLessons,
        knowledgeDigest: lessonSummaries
      };
    },

    /**
     * Lấy các câu hỏi mẫu đã số hóa
     */
    getSampleQuestions: function(grade, subjectId, scopeQuery, level = null, type = null, bookSeries = null) {
      const scopeData = this.getScopeContent(grade, subjectId, scopeQuery, bookSeries);
      if (!scopeData.found) return [];

      let questions = [];
      scopeData.lessons.forEach(les => {
        if (les.sampleQuestions && Array.isArray(les.sampleQuestions)) {
          les.sampleQuestions.forEach(q => {
            questions.push({
              ...q,
              lessonTitle: les.title,
              topic: les.topic,
              week: les.week,
              series: scopeData.series
            });
          });
        }
      });

      if (level) {
        questions = questions.filter(q => q.level === Number(level));
      }
      if (type) {
        questions = questions.filter(q => q.type.toUpperCase() === type.toUpperCase());
      }

      return questions;
    }
  };

  global.SGK_REGISTRY = SGKRegistry;
  global.SGK_DATA = SGKRegistry; // Alias tiện dụng

})(typeof window !== 'undefined' ? window : this);
