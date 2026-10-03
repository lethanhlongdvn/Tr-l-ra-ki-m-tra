/**
 * KHBD REGISTRY & LOADER (KHO KẾ HOẠCH BÀI DẠY SỐ HÓA TOÀN DIỆN - KHỐI 1 ĐẾN 5)
 * Bộ sách chuẩn: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Quy chuẩn: Công văn 2345/BGDĐT-GDTH (Mục I. YCCĐ, Mục II. Đồ dùng, Mục III. Hoạt động GV-HS)
 * Thư viện Bài giảng & Kế hoạch bài dạy Tiểu học - Thầy Lê Thành Long
 */

var KHBD_DATA = {
  db: {},

  isLoaded: function(grade, subjectId) {
    var key = grade + '_' + (subjectId || '').toLowerCase();
    return !!(this.db && this.db[key] && this.db[key].weeks);
  },

  registerSubject: function(grade, subjectId, subjectName, weeksData) {
    var key = grade + '_' + (subjectId || '').toLowerCase();
    this.db[key] = {
      grade: parseInt(grade),
      subjectId: (subjectId || '').toLowerCase(),
      subjectName: subjectName,
      weeks: weeksData || {}
    };
  },

  getWeekPlan: function(grade, subjectId, week) {
    var key = grade + '_' + (subjectId || '').toLowerCase();
    var subject = this.db[key];
    if (!subject || !subject.weeks) return null;
    return subject.weeks[parseInt(week)] || null;
  },

  getWeekRangePlan: function(grade, subjectId, startWeek, endWeek) {
    var key = grade + '_' + (subjectId || '').toLowerCase();
    var subject = this.db[key];
    if (!subject || !subject.weeks) return [];

    var list = [];
    var start = parseInt(startWeek) || 1;
    var end = parseInt(endWeek) || start;

    for (var w = start; w <= end; w++) {
      var wData = subject.weeks[w];
      if (wData && wData.lessons) {
        list.push({
          week: w,
          sourceFile: wData.sourceFile,
          lessons: wData.lessons
        });
      }
    }
    return list;
  },

  renderLessonPreviewHtml: function(lesson, weekNum, highlightIntegration, subjectName) {
    if (!lesson) return '<p>Không tìm thấy nội dung giáo án bài học.</p>';

    var yccdHtml = (lesson.yccd || []).map(function(line) {
      var isTichHop = line.indexOf('[Tích hợp') !== -1 || line.indexOf('[GDĐP') !== -1 || line.indexOf('[GDQCN') !== -1 || line.indexOf('[AI') !== -1;
      if (isTichHop && highlightIntegration) {
        return '<p style="background: #f3e8ff; color: #6b21a8; font-weight: 700; padding: 0.2rem 0.4rem; border-radius: 4px; border-left: 3px solid #9333ea; margin-bottom: 0.25rem;"><i class="fa-solid fa-puzzle-piece"></i> ' + line + '</p>';
      }
      return '<p style="margin-bottom: 0.25rem;">' + line + '</p>';
    }).join('');

    var dodungHtml = (lesson.dodung || []).map(function(line) {
      var isTichHop = line.indexOf('[Tích hợp') !== -1 || line.indexOf('[GDĐP') !== -1 || line.indexOf('[GDQCN') !== -1 || line.indexOf('[AI') !== -1;
      if (isTichHop && highlightIntegration) {
        return '<p style="background: #eff6ff; color: #1e40af; font-weight: 700; padding: 0.2rem 0.4rem; border-radius: 4px; border-left: 3px solid #3b82f6; margin-bottom: 0.25rem;"><i class="fa-solid fa-laptop-code"></i> ' + line + '</p>';
      }
      return '<p style="margin-bottom: 0.25rem;">' + line + '</p>';
    }).join('');

    var tableHtml = '';
    if (lesson.tables && lesson.tables.length > 0) {
      lesson.tables.forEach(function(rows) {
        if (!rows || rows.length === 0) return;
        var has4Cols = rows.some(function(r) { return Array.isArray(r) && r.length === 4; });
        if (has4Cols) {
          tableHtml += '<table style="width: 100%; border-collapse: collapse; margin-top: 0.5rem; margin-bottom: 0.8rem; font-size: 11pt;" border="1" bordercolor="#94a3b8"><thead><tr style="background: #f1f5f9; font-weight: 800; text-align: center;"><th style="padding: 0.45rem; width: 30%;">Nội dung</th><th style="padding: 0.45rem; width: 15%;">Định lượng</th><th style="padding: 0.45rem; width: 30%;">Hoạt động của giáo viên</th><th style="padding: 0.45rem; width: 25%;">Hoạt động của học sinh</th></tr></thead><tbody>';
          rows.forEach(function(r) {
            if (r.length >= 4) {
              var isHeaderRow = r[0].indexOf('Khởi động') !== -1 || r[0].indexOf('Khám phá') !== -1 || r[0].indexOf('Luyện tập') !== -1 || r[0].indexOf('Vận dụng') !== -1;
              var c0 = r[0].replace(/\n/g, '<br/>');
              var c1 = r[1].replace(/\n/g, '<br/>');
              var c2 = r[2].replace(/\n/g, '<br/>');
              var c3 = r[3].replace(/\n/g, '<br/>');
              var isTichHopRow = c0.indexOf('[Tích hợp') !== -1 || c2.indexOf('[Tích hợp') !== -1 || c3.indexOf('[Tích hợp') !== -1;
              var bgStyle = isTichHopRow && highlightIntegration ? 'background: #faf5ff; border-left: 3px solid #a855f7;' : (isHeaderRow ? 'background: #f8fafc; font-weight: 700;' : '');
              tableHtml += '<tr style="' + bgStyle + '"><td style="padding: 0.4rem; vertical-align: top;">' + c0 + '</td><td style="padding: 0.4rem; vertical-align: top; text-align: center;">' + c1 + '</td><td style="padding: 0.4rem; vertical-align: top;">' + c2 + '</td><td style="padding: 0.4rem; vertical-align: top;">' + c3 + '</td></tr>';
            } else if (r.length === 1) {
              tableHtml += '<tr style="background: #f8fafc; font-weight: 700;"><td colspan="4" style="padding: 0.4rem;">' + r[0].replace(/\n/g, '<br/>') + '</td></tr>';
            } else if (r.length === 2) {
              tableHtml += '<tr style="background: #f8fafc; font-weight: 700;"><td colspan="2" style="padding: 0.4rem;">' + r[0].replace(/\n/g, '<br/>') + '</td><td colspan="2" style="padding: 0.4rem;">' + r[1].replace(/\n/g, '<br/>') + '</td></tr>';
            }
          });
          tableHtml += '</tbody></table>';
        } else {
          tableHtml += '<table style="width: 100%; border-collapse: collapse; margin-top: 0.5rem; margin-bottom: 0.8rem; font-size: 11pt;" border="1" bordercolor="#94a3b8"><thead><tr style="background: #f1f5f9; font-weight: 800; text-align: center;"><th style="padding: 0.45rem; width: 50%;">Hoạt động của giáo viên</th><th style="padding: 0.45rem; width: 50%;">Hoạt động của học sinh</th></tr></thead><tbody>';
          rows.forEach(function(r) {
            if (r.length >= 2) {
              var isHeaderRow = r[0].indexOf('Khởi động') !== -1 || r[0].indexOf('Khám phá') !== -1 || r[0].indexOf('Luyện tập') !== -1 || r[0].indexOf('Vận dụng') !== -1;
              var gvText = r[0].replace(/\n/g, '<br/>');
              var hsText = r[1].replace(/\n/g, '<br/>');
              var isTichHopRow = gvText.indexOf('[Tích hợp') !== -1 || gvText.indexOf('[GDĐP') !== -1 || hsText.indexOf('[Tích hợp') !== -1;
              var bgStyle = isTichHopRow && highlightIntegration ? 'background: #faf5ff; border-left: 3px solid #a855f7;' : (isHeaderRow ? 'background: #f8fafc; font-weight: 700;' : '');
              tableHtml += '<tr style="' + bgStyle + '"><td style="padding: 0.4rem; vertical-align: top;">' + gvText + '</td><td style="padding: 0.4rem; vertical-align: top;">' + hsText + '</td></tr>';
            } else if (r.length === 1) {
              tableHtml += '<tr style="background: #f8fafc; font-weight: 700;"><td colspan="2" style="padding: 0.4rem;">' + r[0].replace(/\n/g, '<br/>') + '</td></tr>';
            }
          });
          tableHtml += '</tbody></table>';
        }
      });
    }

    var actHtml = '';
    if (lesson.activities && lesson.activities.length > 0) {
      actHtml = lesson.activities.map(function(act) {
        return '<p style="margin-bottom: 0.35rem; font-weight: 600; color: #1e3a8a;">' + act + '</p>';
      }).join('');
    }

    var dieuchinhHtml = '';
    if (lesson.dieuchinh && lesson.dieuchinh.length > 0) {
      dieuchinhHtml = lesson.dieuchinh.map(function(dc) {
        return '<p style="margin: 0.15rem 0; color: #475569;">' + dc + '</p>';
      }).join('');
    } else {
      dieuchinhHtml = '<p style="font-style: italic; color: #64748b; margin: 0;">....................................................................................................................................................</p>';
    }

    var rawTitle = lesson.lessonTitle || 'KẾ HOẠCH BÀI DẠY';
    var cleanLessonTitle = (typeof IntegrationService !== 'undefined' && IntegrationService.cleanLessonTitle)
      ? IntegrationService.cleanLessonTitle(rawTitle, lesson, subjectName)
      : rawTitle
        .replace(/^TUẦN\s*:\s*\d+\s*[-–—:]\s*/i, '')
        .replace(/^TUẦN\s+\d+\s*[-–—:]\s*/i, '')
        .replace(/^Tuần\s*:\s*\d+\s*[-–—:]\s*/i, '')
        .replace(/^Tuần\s+\d+\s*[-–—:]\s*/i, '')
        .replace(/^(?:[.…\s_–—-]{3,}\s*[-–—:]*\s*)+/g, '')
        .replace(/^\s*\(\d+\s*tiết\)\s*[-–—\s]*/gi, '')
        .replace(/^MÔN:\s*[^–—-]+[-–—]\s*(?:LỚP\s*\d+\s*[-–—]\s*)?(?:BỘ SÁCH:[^–—-]+[-–—]\s*)?/i, '')
        .replace(/[\s\-–—•·]*[-–—]?\s*SỐ\s*TIẾT\s*:\s*\d+\s*(?:TIẾT)?/gi, ' ')
        .replace(/[\s\-–—•·]*[-–—]?\s*(?:Thời\s*gian|Ngày)\s*thực\s*hiện\s*:[^\-–—\(\)\n]*(?:đến[^\-–—\(\)\n]*)?/gi, ' ')
        .replace(/\s*\((?:Thời\s*gian|Ngày)\s*thực\s*hiện\s*:[^\)]*\)/gi, ' ')
        .replace(/[\s\-–—•·]*(?:Thời\s*gian|Ngày)\s*thực\s*hiện\s*:\s*[.\s_…/–\-]*(?:\(.*\))?/gi, ' ')
        .replace(/[-–—]?\s*[.…]{3,}\s*[-–—]?/g, ' ')
        .replace(/\s*[\-–—]+\s*[\-–—]+\s*/g, ' - ')
        .replace(/\s*[\-–—]+\s*$/g, '')
        .replace(/^\s*[\-–—]+\s*/g, '')
        .trim();

    if (!cleanLessonTitle || /^(?:TUẦN\s*\d+|TIẾT\s*\d+|BÀI\s*DẠY)$/i.test(cleanLessonTitle)) {
      if (lesson.topic) cleanLessonTitle = lesson.topic;
      else if (lesson.period) cleanLessonTitle = 'BÀI DẠY (' + lesson.period + ')';
    }

    return '<div class="lesson-plan-preview" style="font-family: Times New Roman, serif; font-size: 12pt; line-height: 1.45; color: #000; background: #fff; padding: 1.25rem; border: 1px solid #cbd5e1; border-radius: 4px;">' +
      '<div style="text-align: center; margin-bottom: 1rem;"><h3 style="font-size: 14pt; font-weight: 800; margin: 0; text-transform: uppercase;">' + (cleanLessonTitle || 'KẾ HOẠCH BÀI DẠY') + '</h3>' +
      (lesson.topic ? '<p style="font-weight: 700; font-size: 12pt; margin: 0.25rem 0 0 0; color: #1e3a8a;">' + lesson.topic + '</p>' : '') +
      (weekNum ? '<p style="font-style: italic; margin: 0.15rem 0 0 0; color: #475569;">(Tuần ' + weekNum + ')</p>' : '') +
      '</div>' +
      '<div style="margin-bottom: 0.85rem;"><h4 style="font-size: 12.5pt; font-weight: 800; margin: 0 0 0.35rem 0; color: #991b1b;">I. YÊU CẦU CẦN ĐẠT</h4>' + (yccdHtml || '<p style="font-style: italic; color: #64748b;">(Đang cập nhật mục tiêu YCCĐ)</p>') + '</div>' +
      '<div style="margin-bottom: 0.85rem;"><h4 style="font-size: 12.5pt; font-weight: 800; margin: 0 0 0.35rem 0; color: #991b1b;">II. ĐỒ DÙNG DẠY HỌC</h4>' + (dodungHtml || '<p style="font-style: italic; color: #64748b;">(Đang cập nhật đồ dùng dạy học)</p>') + '</div>' +
      '<div style="margin-bottom: 0.85rem;"><h4 style="font-size: 12.5pt; font-weight: 800; margin: 0 0 0.35rem 0; color: #991b1b;">III. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU</h4>' + actHtml + (tableHtml || '<p style="font-style: italic; color: #64748b;">(Đang cập nhật tiến trình hoạt động dạy học)</p>') + '</div>' +
      '<div style="margin-bottom: 0.5rem;"><h4 style="font-size: 12.5pt; font-weight: 800; margin: 0 0 0.35rem 0; color: #991b1b;">IV. ĐIỀU CHỈNH SAU BÀI DẠY (NẾU CÓ)</h4>' + dieuchinhHtml + '</div>' +
      '</div>';
  }
};

if (typeof window !== 'undefined') {
  window.KHBD_DATA = KHBD_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = KHBD_DATA;
}
