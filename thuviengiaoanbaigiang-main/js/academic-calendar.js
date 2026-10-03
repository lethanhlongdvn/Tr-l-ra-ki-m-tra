/**
 * js/academic-calendar.js
 * Quản lý cấu hình Năm học & Tự động tính toán tuần thực học (35 tuần)
 * Kế thừa kiến trúc chuẩn từ EduRobot, mở rộng cho hệ thống Kế hoạch bài dạy (KHBD).
 */

(function(window) {
  'use strict';

  var AcademicCalendar = {
    defaultConfig: {
      startDate: '2026-09-07', // Ngày Thứ Hai đầu tiên của năm học 2026 - 2027 (Tuần 1)
      tetBreakStartWeek: 21,   // Tuần bắt đầu nghỉ Tết (sau khi hoàn thành tuần 20)
      tetBreakWeeks: 2,        // Nghỉ 2 tuần
      totalStudyWeeks: 35      // Tổng số tuần thực học
    },

    config: null,

    init: function() {
      this.config = Object.assign({}, this.defaultConfig);
      try {
        if (typeof localStorage !== 'undefined') {
          var local = localStorage.getItem('tvth_academic_calendar');
          if (local) {
            var parsed = JSON.parse(local);
            this.config = Object.assign({}, this.config, parsed);
          }
        }
      } catch (e) {
        console.warn('[AcademicCalendar] Lỗi đọc localStorage:', e);
      }
      return this.config;
    },

    saveConfig: function(newConfig) {
      if (!this.config) this.init();
      this.config = Object.assign({}, this.config, newConfig);
      try {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('tvth_academic_calendar', JSON.stringify(this.config));
        }
      } catch (e) {
        console.error('[AcademicCalendar] Lỗi lưu localStorage:', e);
      }
      return this.config;
    },

    getConfig: function() {
      if (!this.config) this.init();
      return this.config;
    },

    /**
     * Định dạng Date sang chuỗi DD/MM/YYYY hoặc DD/MM
     */
    formatDate: function(date, format) {
      if (!date || isNaN(date.getTime())) return '';
      var d = String(date.getDate()).padStart(2, '0');
      var m = String(date.getMonth() + 1).padStart(2, '0');
      var y = date.getFullYear();
      if (format === 'DD/MM') return d + '/' + m;
      return d + '/' + m + '/' + y;
    },

    /**
     * Phân tích chuỗi ngày YYYY-MM-DD về Date object tại 00:00:00 local
     */
    parseDate: function(dateStr) {
      if (!dateStr) return new Date();
      var parts = dateStr.split('-');
      if (parts.length === 3) {
        return new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
      }
      return new Date(dateStr);
    },

    /**
     * Tính toán tuần thực học hiện tại
     */
    calculateCurrentWeek: function(targetDate) {
      var config = this.getConfig();
      var start = this.parseDate(config.startDate);
      start.setHours(0, 0, 0, 0);

      var current = targetDate ? new Date(targetDate) : new Date();
      current.setHours(0, 0, 0, 0);

      var diffTime = current.getTime() - start.getTime();
      var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays < 0) {
        return {
          currentWeek: 1,
          currentPeriod: 'GIỮA KỲ 1',
          isTetHoliday: false,
          calendarWeek: 1
        };
      }

      var calendarWeek = Math.floor(diffDays / 7) + 1;
      var tetStart = parseInt(config.tetBreakStartWeek, 10) || 21;
      var tetWeeks = parseInt(config.tetBreakWeeks, 10) || 2;
      var totalWeeks = parseInt(config.totalStudyWeeks, 10) || 35;

      var studyWeek = calendarWeek;
      var isTet = false;

      if (calendarWeek >= tetStart && calendarWeek < tetStart + tetWeeks) {
        isTet = true;
        studyWeek = Math.max(1, tetStart - 1);
      } else if (calendarWeek >= tetStart + tetWeeks) {
        studyWeek = calendarWeek - tetWeeks;
      }

      if (studyWeek < 1) studyWeek = 1;
      if (studyWeek > totalWeeks) studyWeek = totalWeeks;

      var period = 'GIỮA KỲ 1';
      if (studyWeek >= 1 && studyWeek <= 9) {
        period = 'GIỮA KỲ 1';
      } else if (studyWeek >= 10 && studyWeek <= 18) {
        period = 'CUỐI KỲ 1';
      } else if (studyWeek >= 19 && studyWeek <= 27) {
        period = 'GIỮA KỲ 2';
      } else if (studyWeek >= 28 && studyWeek <= 35) {
        period = 'CUỐI KỲ 2';
      }

      return {
        currentWeek: studyWeek,
        currentPeriod: period,
        isTetHoliday: isTet,
        calendarWeek: calendarWeek
      };
    },

    /**
     * Lấy khoảng ngày từ Thứ Hai đến Thứ Sáu của tuần thứ weekNum
     * @param {number} weekNum Số tuần (1 đến 35)
     * @returns {{ start: Date, end: Date, startFormatted: string, endFormatted: string, label: string }}
     */
    getWeekRange: function(weekNum) {
      var config = this.getConfig();
      var w = parseInt(weekNum, 10) || 1;
      if (w < 1) w = 1;

      var tetStart = parseInt(config.tetBreakStartWeek, 10) || 21;
      var tetWeeks = parseInt(config.tetBreakWeeks, 10) || 2;

      // Tính số tuần lịch thực tế (bù trừ tuần nghỉ Tết nếu tuần học >= tetStart)
      var offsetCalendarWeeks = (w - 1);
      if (w >= tetStart) {
        offsetCalendarWeeks += tetWeeks;
      }

      var startMonday = this.parseDate(config.startDate);
      startMonday.setDate(startMonday.getDate() + (offsetCalendarWeeks * 7));

      var endFriday = new Date(startMonday);
      endFriday.setDate(endFriday.getDate() + 4);

      var startStr = this.formatDate(startMonday, 'DD/MM/YYYY');
      var endStr = this.formatDate(endFriday, 'DD/MM/YYYY');

      return {
        start: startMonday,
        end: endFriday,
        startFormatted: startStr,
        endFormatted: endStr,
        label: 'Từ ngày ' + startStr + ' đến ngày ' + endStr
      };
    },

    /**
     * Lấy ngày cụ thể cho một Thứ trong tuần thứ weekNum
     * @param {number} weekNum Số tuần (1 đến 35)
     * @param {string|number} dayIdentifier 'Thứ Hai', 'Thứ Ba'..., hoặc 2, 3, 4, 5, 6
     * @returns {{ date: Date, formatted: string, short: string, dayName: string }}
     */
    getDayDate: function(weekNum, dayIdentifier) {
      var weekInfo = this.getWeekRange(weekNum);
      var dayOffset = 0; // Mặc định Thứ Hai (offset 0)
      var dayName = 'Thứ Hai';

      if (typeof dayIdentifier === 'number') {
        dayOffset = Math.max(0, Math.min(4, dayIdentifier - 2));
      } else if (typeof dayIdentifier === 'string') {
        var dStr = dayIdentifier.toLowerCase().trim();
        if (dStr.includes('hai') || dStr === '2') {
          dayOffset = 0; dayName = 'Thứ Hai';
        } else if (dStr.includes('ba') || dStr === '3') {
          dayOffset = 1; dayName = 'Thứ Ba';
        } else if (dStr.includes('tư') || dStr.includes('tu') || dStr === '4') {
          dayOffset = 2; dayName = 'Thứ Tư';
        } else if (dStr.includes('năm') || dStr.includes('nam') || dStr === '5') {
          dayOffset = 3; dayName = 'Thứ Năm';
        } else if (dStr.includes('sáu') || dStr.includes('sau') || dStr === '6') {
          dayOffset = 4; dayName = 'Thứ Sáu';
        }
      }

      var resDate = new Date(weekInfo.start);
      resDate.setDate(resDate.getDate() + dayOffset);

      return {
        date: resDate,
        formatted: this.formatDate(resDate, 'DD/MM/YYYY'),
        short: this.formatDate(resDate, 'DD/MM'),
        dayName: dayName
      };
    }
  };

  // Khởi tạo ngay khi nạp
  AcademicCalendar.init();

  window.AcademicCalendar = AcademicCalendar;
})(typeof window !== 'undefined' ? window : this);
