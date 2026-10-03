/**
 * KHBD REGISTRY & LOADER (KHO KẾ HOẠCH BÀI DẠY SỐ HÓA TOÀN DIỆN - KHỐI 1 ĐẾN 5)
 * Bộ sách chuẩn: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Quy chuẩn: Công văn 2345/BGDĐT-GDTH (Mục I. YCCĐ, Mục II. Đồ dùng, Mục III. Hoạt động GV-HS)
 * Thư viện Bài giảng & Kế hoạch bài dạy Tiểu học - Thầy Lê Thành Long
 */

var KHBD_DATA = (typeof window !== 'undefined' && window.KHBD_DATA) ? window.KHBD_DATA : {
  db: {},

  isLoaded: function(grade, subjectId) {
    var key = grade + '_' + (subjectId || '').toLowerCase();
    this.syncRawData();
    return !!(this.db && this.db[key] && this.db[key].weeks);
  },

  syncRawData: function() {
    if (typeof window !== 'undefined' && window.KHBD_RAW_DATA) {
      for (var rKey in window.KHBD_RAW_DATA) {
        if (window.KHBD_RAW_DATA.hasOwnProperty(rKey) && !this.db[rKey]) {
          var item = window.KHBD_RAW_DATA[rKey];
          this.db[rKey] = item;
        }
      }
    }
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
    this.syncRawData();
    var subject = this.db[key];
    if (!subject || !subject.weeks) return null;
    return subject.weeks[parseInt(week)] || null;
  },

  getWeekRangePlan: function(grade, subjectId, startWeek, endWeek) {
    var key = grade + '_' + (subjectId || '').toLowerCase();
    this.syncRawData();
    var subject = this.db[key];
    var list = [];
    var start = parseInt(startWeek) || 1;
    var end = parseInt(endWeek) || start;

    if (subject && subject.weeks) {
      for (var w = start; w <= end; w++) {
        var wData = subject.weeks[w];
        if (wData && wData.lessons) {
          list.push({
            week: w,
            sourceFile: wData.sourceFile || ('Tuần ' + w),
            lessons: wData.lessons
          });
        }
      }
    }

    // Nếu dữ liệu môn chưa có trong CSDL số hóa, tự động tạo khung KHBD mẫu chuẩn CV 2345
    if (list.length === 0) {
      var subNameMap = {
        toan: 'Toán', tieng_viet: 'Tiếng Việt', khoa_hoc: 'Khoa học',
        lich_su_dia_ly: 'Lịch sử và Địa lí', dao_duc: 'Đạo đức',
        cong_nghe: 'Công nghệ', tin_hoc: 'Tin học', tnxh: 'Tự nhiên và Xã hội',
        am_nhac: 'Âm nhạc', gdtc: 'Giáo dục thể chất', hdtn: 'Hoạt động trải nghiệm',
        tieng_anh: 'Tiếng Anh', mi_thuat: 'Mĩ thuật',
        on_luyen_toan: 'Ôn luyện Toán',
        on_luyen_tv: 'Ôn luyện TV',
        tdtv_ol: 'TĐTV-ÔL',
        on_luyen_atgt: 'Ôn luyện-ATGT',
        shdc: 'SHDC',
        shtt: 'SHTT'
      };
      var sKey = (subjectId || '').toLowerCase();
      var subDisplay = subNameMap[sKey] || subjectId || 'Môn học';

      for (var fallbackW = start; fallbackW <= end; fallbackW++) {
        var yccdList = [
          '1. Năng lực đặc thù: Nắm vững kiến thức trọng tâm và kĩ năng thực hành môn ' + subDisplay + ' tuần ' + fallbackW + '.',
          '2. Năng lực chung: Tự chủ, tự học; giao tiếp, hợp tác và giải quyết vấn đề sáng tạo.',
          '3. Phẩm chất: Chăm chỉ, trung thực, trách nhiệm và kỉ luật.',
          '4. Tích hợp: [Tích hợp GDĐP Vĩnh Long & Năng lực số AI] Ứng dụng thực tế địa phương và kĩ năng số.'
        ];
        var actList = [
          '1. Khởi động (5 phút): Trò chơi khởi động tạo tâm thế hào hứng.',
          '2. Ôn tập / Tiếp cận nội dung (12-15 phút): Hướng dẫn học sinh quan sát, tiếp thu kiến thức trọng tâm.',
          '3. Luyện tập - Thực hành (12-15 phút): Thực hành làm bài tập phân hóa theo nhóm và cá nhân.',
          '4. Vận dụng (3-5 phút): Củng cố, đánh giá và dặn dò.'
        ];

        if (sKey === 'on_luyen_toan') {
          yccdList = [
            '1. Năng lực đặc thù: Củng cố, khắc sâu kiến thức trọng tâm môn Toán tuần ' + fallbackW + '; rèn kĩ năng tính toán và giải toán có lời văn.',
            '2. Năng lực chung: Tự chủ, hợp tác nhóm giải quyết vấn đề toán học linh hoạt.',
            '3. Phẩm chất: Cẩn thận, chính xác, tự giác và yêu thích môn Toán.',
            '4. Tích hợp: [Tích hợp GDĐP Vĩnh Long] Ứng dụng giải toán thực tế liên quan đến đời sống, nông sản quê hương.'
          ];
          actList = [
            '1. Khởi động (5 phút): Trò chơi tính nhẩm nhanh hoặc đố vui toán học.',
            '2. Ôn tập kiến thức trọng tâm (8-10 phút): Hệ thống lại các dạng bài tập toán của tuần ' + fallbackW + '.',
            '3. Thực hành luyện tập phân hóa (15-18 phút): Học sinh làm bài tập rèn luyện theo mức độ (M1, M2, M3), GV hỗ trợ học sinh còn lúng túng.',
            '4. Vận dụng & Củng cố (3-5 phút): Liên hệ thực tiễn, tuyên dương học sinh tích cực.'
          ];
        } else if (sKey === 'on_luyen_tv') {
          yccdList = [
            '1. Năng lực đặc thù: Rèn kĩ năng đọc trôi chảy, mở rộng vốn từ, viết câu và đoạn văn đúng ngữ pháp môn Tiếng Việt tuần ' + fallbackW + '.',
            '2. Năng lực chung: Giao tiếp tự tin, hợp tác nhóm và diễn đạt ý tưởng mạch lạc.',
            '3. Phẩm chất: Bồi dưỡng tình yêu tiếng Việt, giữ gìn sự trong sáng của tiếng mẹ đẻ.',
            '4. Tích hợp: [Tích hợp GDĐP] Luyện viết câu, đoạn văn về cảnh đẹp thiên nhiên, con người Vĩnh Long - Trà Vinh - Bến Tre.'
          ];
          actList = [
            '1. Khởi động (5 phút): Trò chơi đố chữ hoặc tiếp sức tìm từ.',
            '2. Luyện đọc & Mở rộng từ ngữ (10-12 phút): Đọc bài đọc mở rộng, giải nghĩa từ ngữ, luyện đặt câu.',
            '3. Thực hành viết câu / đoạn văn (15-18 phút): Viết câu hoàn chỉnh theo chủ điểm, trao đổi nhận xét trong nhóm.',
            '4. Vận dụng & Dặn dò (3-5 phút): Chia sẻ câu văn hay, dặn dò rèn chữ giữ vở.'
          ];
        } else if (sKey === 'tdtv_ol') {
          yccdList = [
            '1. Năng lực đặc thù: Tăng cường tiếng Việt, rèn luyện phát âm chuẩn, đọc hiểu từ ngữ, nói và viết câu đúng cấu trúc.',
            '2. Năng lực chung: Tự tin trong giao tiếp thường ngày với thầy cô và bạn bè.',
            '3. Phẩm chất: Chăm chỉ, kiên trì, có ý thức vươn lên trong học tập.',
            '4. Tích hợp: [Gắn kết văn hóa bản địa] Sử dụng tranh ảnh trực quan gắn liền với sinh hoạt địa phương.'
          ];
          actList = [
            '1. Khởi động (5 phút): Hát múa hoặc trò chơi nhận diện đồ vật, hình ảnh trực quan.',
            '2. Luyện phát âm & Nhận diện từ mới (12-15 phút): Rèn phát âm chuẩn âm/vần/từ ngữ, làm rõ nghĩa từ qua tranh ảnh.',
            '3. Luyện nói và viết câu (12-15 phút): Luyện nói câu ngắn, viết từ ngữ/câu vào bảng con hoặc vở thực hành.',
            '4. Vận dụng (3-5 phút): Giao lưu nhóm đôi, GV nhận xét động viên.'
          ];
        } else if (sKey === 'on_luyen_atgt') {
          yccdList = [
            '1. Năng lực đặc thù: Nắm vững quy tắc an toàn khi đi bộ, đi xe đạp, ngồi sau xe máy hoặc đi đò/phà; nhận biết các biển báo hiệu giao thông cơ bản.',
            '2. Năng lực chung: Tự bảo vệ an toàn cho bản thân; kĩ năng quan sát và xử lí tình huống nguy hiểm khi tham gia giao thông.',
            '3. Phẩm chất: Ý thức chấp hành luật pháp, hình thành nếp sống văn hóa giao thông.',
            '4. Tích hợp: [Tích hợp An toàn giao thông đường bộ & đường thủy Vĩnh Long] Chú ý an toàn qua cầu khỉ, bến đò ngang và đường nông thôn.'
          ];
          actList = [
            '1. Khởi động (5 phút): Hát bài hát về ATGT hoặc quan sát clip tình huống.',
            '2. Tìm hiểu hành vi an toàn & không an toàn (12-15 phút): Thảo luận nhóm tranh ảnh các tình huống giao thông.',
            '3. Thực hành kĩ năng ATGT (12-15 phút): Đội mũ bảo hiểm đúng cách, nhận diện biển báo, đóng vai xử lí tình huống.',
            '4. Vận dụng & Cam kết (3-5 phút): Chia sẻ với người thân cùng chấp hành tốt ATGT.'
          ];
        } else if (sKey === 'shdc') {
          yccdList = [
            '1. Năng lực đặc thù: Thực hiện đúng nghi thức Chào cờ; lắng nghe nhận xét thi đua tuần; tiếp thu nội dung sinh hoạt chủ điểm tuần ' + fallbackW + '.',
            '2. Năng lực chung: Thích ứng với môi trường tập thể, kĩ năng lắng nghe và tự quản.',
            '3. Phẩm chất: Yêu Tổ quốc, tự hào về truyền thống Đội TNTP Hồ Chí Minh, có ý thức kỉ luật.',
            '4. Tích hợp: [Tích hợp truyền thống quê hương] Tuyên truyền lịch sử vẻ vang của quê hương Vĩnh Long hiếu học.'
          ];
          actList = [
            '1. Nghi lễ Chào cờ (10 phút): Chào cờ, hát Quốc ca, Đội ca, hô khẩu hiệu trang nghiêm.',
            '2. Nhận xét thi đua & Triển khai tuần mới (10 phút): Đánh giá nền nếp tuần qua, phát động phong trào thi đua tuần mới.',
            '3. Sinh hoạt theo chủ điểm (12-15 phút): Biểu diễn văn nghệ, tiểu phẩm hoặc diễn đàn theo chủ điểm tuần ' + fallbackW + '.',
            '4. Dặn dò của Tổng phụ trách & BGH (3 phút): Ổn định lớp về phòng học bắt đầu tuần học mới.'
          ];
        } else if (sKey === 'shtt') {
          yccdList = [
            '1. Năng lực đặc thù: Đánh giá kết quả học tập và rèn luyện của bản thân và tổ/lớp trong tuần ' + fallbackW + '; xây dựng phương hướng tuần tới; sinh hoạt chuyên đề lớp.',
            '2. Năng lực chung: Tự đánh giá, tự giác điều chỉnh hành vi; kĩ năng hợp tác và xây dựng tập thể vững mạnh.',
            '3. Phẩm chất: Trung thực, trách nhiệm, đoàn kết, thương yêu giúp đỡ bạn bè.',
            '4. Tích hợp: [Kĩ năng sống & Lớp học hạnh phúc] Xây dựng tình bạn đẹp, phòng chống bạo lực học đường.'
          ];
          actList = [
            '1. Khởi động (3-5 phút): Bài hát tập thể hoặc trò chơi gắn kết.',
            '2. Sơ kết hoạt động tuần của lớp (12-15 phút): Ban cán sự báo cáo, GVCN nhận xét biểu dương cá nhân/tổ tích cực và nhắc nhở khắc phục tồn tại.',
            '3. Phương hướng tuần tới (5-7 phút): Đề ra chỉ tiêu thi đua học tập và rèn luyện nền nếp.',
            '4. Sinh hoạt chuyên đề tập thể (10-12 phút): Sinh hoạt theo chủ đề tuần, giao lưu văn nghệ, trò chơi tập thể.'
          ];
        }

        var lesTitle = 'KẾ HOẠCH BÀI DẠY: ' + subDisplay.toUpperCase() + ' - TUẦN ' + fallbackW;
        if (sKey === 'shdc') lesTitle = 'KẾ HOẠCH HOẠT ĐỘNG: SINH HOẠT DƯỚI CỜ (SHDC) - TUẦN ' + fallbackW;
        else if (sKey === 'shtt') lesTitle = 'KẾ HOẠCH HOẠT ĐỘNG: SINH HOẠT TẬP THỂ (SHTT) - TUẦN ' + fallbackW;
        else if (sKey === 'tdtv_ol') lesTitle = 'KẾ HOẠCH BÀI DẠY: TĂNG CƯỜNG TIẾNG VIỆT (TĐTV-ÔL) - TUẦN ' + fallbackW;
        else if (sKey === 'on_luyen_atgt') lesTitle = 'KẾ HOẠCH BÀI DẠY: ÔN LUYỆN - AN TOÀN GIAO THÔNG (ATGT) - TUẦN ' + fallbackW;
        else if (sKey === 'on_luyen_tv') lesTitle = 'KẾ HOẠCH BÀI DẠY: ÔN LUYỆN TIẾNG VIỆT - TUẦN ' + fallbackW;
        else if (sKey === 'on_luyen_toan') lesTitle = 'KẾ HOẠCH BÀI DẠY: ÔN LUYỆN TOÁN - TUẦN ' + fallbackW;

        list.push({
          week: fallbackW,
          sourceFile: 'KHBD_' + (subDisplay.replace(/[\s/]/g, '_')) + '_Tuan_' + fallbackW + '.docx',
          lessons: [
            {
              lessonTitle: lesTitle,
              topic: 'Thực hiện theo kế hoạch giáo dục nhà trường - Chuẩn CV 2345/BGDĐT',
              yccd: yccdList,
              dodung: [
                '• Giáo viên: Kế hoạch bài dạy, bài giảng trình chiếu, tài liệu/phiếu học tập, đồ dùng dạy học chuẩn.',
                '• Học sinh: Sách vở, vở bài tập/vở thực hành, bút thước, đồ dùng học tập môn ' + subDisplay + '.'
              ],
              activities: actList,
              dieuchinh: [
                'Căn cứ tình hình thực tế lớp học để điều chỉnh thời lượng và phương pháp hỗ trợ học sinh phù hợp.'
              ]
            }
          ]
        });
      }
    }

    return list;
  },

  renderLessonPreviewHtml: function(lesson, weekNum, highlightIntegration) {
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
      ? IntegrationService.cleanLessonTitle(rawTitle)
      : rawTitle
        .replace(/^TUẦN\s*:\s*\d+\s*[-–—:]\s*/i, '')
        .replace(/^TUẦN\s+\d+\s*[-–—:]\s*/i, '')
        .replace(/^Tuần\s*:\s*\d+\s*[-–—:]\s*/i, '')
        .replace(/^Tuần\s+\d+\s*[-–—:]\s*/i, '')
        .replace(/[\s\-–—•·]*[\-–—]\s*(?:Thời\s*gian|Ngày)\s*thực\s*hiện\s*:[^\-–—\(\)]*(?:đến[^\-–—\(\)]*)?/gi, ' ')
        .replace(/\s*\((?:Thời\s*gian|Ngày)\s*thực\s*hiện\s*:[^\)]*\)/gi, ' ')
        .replace(/[\s\-–—•·]*(?:Thời\s*gian|Ngày)\s*thực\s*hiện\s*:\s*[.\s_…/–\-]*(?:\(.*\))?/gi, ' ')
        .trim();

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
