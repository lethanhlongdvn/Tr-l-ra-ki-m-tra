/**
 * RAG KNOWLEDGE LOADER
 * Quản lý và nạp động dữ liệu SGK số hóa & Kế hoạch bài dạy (KHBD) số hóa 5 khối lớp
 * Tự động cache và đồng bộ với biến toàn cục window.KHBD_DATA, window.SGK_DATA, window.IntegrationService
 */

const loadedScripts = new Set();

function loadScript(src) {
  return new Promise((resolve) => {
    if (loadedScripts.has(src)) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = false; // Bảo đảm thứ tự thực thi tuần tự
    script.onload = () => {
      loadedScripts.add(src);
      resolve(true);
    };
    script.onerror = (err) => {
      console.warn(`[RAGLoader] Không thể nạp script: ${src}`, err);
      // Vẫn resolve để không chặn luồng xử lý
      resolve(false);
    };
    document.head.appendChild(script);
  });
}

/**
 * Đảm bảo window.KHBD_DATA luôn tồn tại với đầy đủ API cần thiết
 */
function ensureKhbdDataExists() {
  if (typeof window === 'undefined') return;
  if (!window.KHBD_DATA) {
    window.KHBD_DATA = {
      db: {},
      isLoaded: function(grade, subjectId) {
        var key = grade + '_' + (subjectId || '').toLowerCase();
        if (typeof this.syncRawData === 'function') this.syncRawData();
        return !!(this.db && this.db[key] && this.db[key].weeks);
      },
      syncRawData: function() {
        if (typeof window !== 'undefined' && window.KHBD_RAW_DATA) {
          for (var rKey in window.KHBD_RAW_DATA) {
            if (window.KHBD_RAW_DATA.hasOwnProperty(rKey) && !this.db[rKey]) {
              this.db[rKey] = window.KHBD_RAW_DATA[rKey];
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
        if (typeof this.syncRawData === 'function') this.syncRawData();
        var subject = this.db && this.db[key];
        if (!subject || !subject.weeks) return null;
        return subject.weeks[parseInt(week)] || null;
      },
      getWeekRangePlan: function(grade, subjectId, startWeek, endWeek) {
        var key = grade + '_' + (subjectId || '').toLowerCase();
        if (typeof this.syncRawData === 'function') this.syncRawData();
        var subject = this.db && this.db[key];
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
        if (list.length > 0) return list;
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

        for (var w = start; w <= end; w++) {
          var yccdList = [
            '1. Năng lực đặc thù: Nắm vững kiến thức trọng tâm và kĩ năng thực hành tuần ' + w + '.',
            '2. Năng lực chung: Tự chủ, tự học; giao tiếp, hợp tác và giải quyết vấn đề sáng tạo.',
            '3. Phẩm chất: Chăm chỉ, trung thực, trách nhiệm và kỉ luật.',
            '4. Tích hợp: [Tích hợp GDĐP & Năng lực số AI] Vận dụng thực tế địa phương Vĩnh Long và ứng dụng kĩ năng số.'
          ];
          var actList = [
            '1. Khởi động (5 phút): Trò chơi khởi động tạo tâm thế hào hứng.',
            '2. Khám phá / Ôn tập (12-15 phút): Hướng dẫn quan sát, ôn lại kiến thức cốt lõi và phương pháp.',
            '3. Luyện tập - Thực hành (12-15 phút): Thực hành làm bài tập phân hóa theo nhóm và cá nhân.',
            '4. Vận dụng (3-5 phút): Củng cố, đánh giá và dặn dò.'
          ];

          if (sKey === 'on_luyen_toan') {
            yccdList = [
              '1. Năng lực đặc thù: Củng cố, khắc sâu kiến thức trọng tâm môn Toán tuần ' + w + '; rèn kĩ năng tính toán và giải toán có lời văn.',
              '2. Năng lực chung: Tự chủ, hợp tác nhóm giải quyết vấn đề toán học linh hoạt.',
              '3. Phẩm chất: Cẩn thận, chính xác, tự giác và yêu thích môn Toán.',
              '4. Tích hợp: [Tích hợp GDĐP Vĩnh Long] Ứng dụng giải toán thực tế liên quan đến đời sống, nông sản quê hương.'
            ];
            actList = [
              '1. Khởi động (5 phút): Trò chơi tính nhẩm nhanh hoặc đố vui toán học.',
              '2. Ôn tập kiến thức trọng tâm (8-10 phút): Hệ thống lại các dạng bài tập toán của tuần ' + w + '.',
              '3. Thực hành luyện tập phân hóa (15-18 phút): Học sinh làm bài tập rèn luyện theo mức độ (M1, M2, M3), GV hỗ trợ học sinh còn lúng túng.',
              '4. Vận dụng & Củng cố (3-5 phút): Liên hệ thực tiễn, tuyên dương học sinh tích cực.'
            ];
          } else if (sKey === 'on_luyen_tv') {
            yccdList = [
              '1. Năng lực đặc thù: Rèn kĩ năng đọc trôi chảy, mở rộng vốn từ, viết câu và đoạn văn đúng ngữ pháp môn Tiếng Việt tuần ' + w + '.',
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
              '1. Năng lực đặc thù: Thực hiện đúng nghi thức Chào cờ; lắng nghe nhận xét thi đua tuần; tiếp thu nội dung sinh hoạt chủ điểm tuần ' + w + '.',
              '2. Năng lực chung: Thích ứng với môi trường tập thể, kĩ năng lắng nghe và tự quản.',
              '3. Phẩm chất: Yêu Tổ quốc, tự hào về truyền thống Đội TNTP Hồ Chí Minh, có ý thức kỉ luật.',
              '4. Tích hợp: [Tích hợp truyền thống quê hương] Tuyên truyền lịch sử vẻ vang của quê hương Vĩnh Long hiếu học.'
            ];
            actList = [
              '1. Nghi lễ Chào cờ (10 phút): Chào cờ, hát Quốc ca, Đội ca, hô khẩu hiệu trang nghiêm.',
              '2. Nhận xét thi đua & Triển khai tuần mới (10 phút): Đánh giá nền nếp tuần qua, phát động phong tràu thi đua tuần mới.',
              '3. Sinh hoạt theo chủ điểm (12-15 phút): Biểu diễn văn nghệ, tiểu phẩm hoặc diễn đàn theo chủ điểm tuần ' + w + '.',
              '4. Dặn dò của Tổng phụ trách & BGH (3 phút): Ổn định lớp về phòng học bắt đầu tuần học mới.'
            ];
          } else if (sKey === 'shtt') {
            yccdList = [
              '1. Năng lực đặc thù: Đánh giá kết quả học tập và rèn luyện của bản thân và tổ/lớp trong tuần ' + w + '; xây dựng phương hướng tuần tới; sinh hoạt chuyên đề lớp.',
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

          list.push({
            week: w,
            sourceFile: 'KHBD_' + (subDisplay.replace(/[\s/]/g, '_')) + '_Tuan_' + w + '.docx',
            lessons: [
              {
                lessonTitle: 'KẾ HOẠCH BÀI DẠY: ' + subDisplay.toUpperCase() + ' - TUẦN ' + w,
                topic: 'Thực hiện theo kế hoạch giáo dục nhà trường - Chuẩn CV 2345/BGDĐT',
                yccd: yccdList,
                dodung: [
                  '• Giáo viên: Kế hoạch bài dạy, bài giảng trình chiếu, tài liệu/phiếu học tập, tranh ảnh minh họa.',
                  '• Học sinh: SGK, vở bài tập/vở thực hành, bảng con, đồ dùng học tập.'
                ],
                activities: actList,
                dieuchinh: ['Linh hoạt điều chỉnh phương pháp và thời lượng phù hợp với đối tượng học sinh của lớp.']
              }
            ]
          });
        }
        return list;
      }
    };
  }
}

/**
 * Khởi tạo các registry và services nền tảng
 */
export async function initRagCore() {
  await loadScript('/rag/lib/jszip.min.js');
  await loadScript('/rag/sgk/sgk-registry.js');
  await loadScript('/rag/khbd_sohoa/khbd-registry.js');
  await loadScript('/rag/services/academic-calendar.js');
  await loadScript('/rag/services/toolkit.js');
  await loadScript('/rag/services/integration-service.js');
  ensureKhbdDataExists();
}

/**
 * Ánh xạ mã môn sang tên file KHBD
 */
const KHBD_FILE_MAP = {
  toan: 'toan',
  tieng_viet: 'tieng_viet',
  khoa_hoc: 'khoa_hoc',
  lich_su_dia_ly: 'lich_su_dia_ly',
  cong_nghe: 'cong_nghe',
  tin_hoc: 'tin_hoc',
  dao_duc: 'dao_duc',
  tnxh: 'tnxh',
  am_nhac: 'am_nhac',
  gdtc: 'gdtc',
  hdtn: 'hdtn',
  on_luyen_toan: 'on_luyen_toan',
  on_luyen_tv: 'on_luyen_tv',
  tdtv_ol: 'tdtv_ol',
  on_luyen_atgt: 'on_luyen_atgt',
  shdc: 'shdc',
  shtt: 'shtt'
};

/**
 * Nạp kế hoạch bài dạy số hóa của một môn thuộc khối lớp
 */
export async function loadKhbdSubject(grade, subjectKey) {
  await initRagCore();
  ensureKhbdDataExists();

  const g = parseInt(grade) || 5;
  const key = (subjectKey || 'toan').toLowerCase().replace(/-/g, '_');
  const fileSubName = KHBD_FILE_MAP[key] || key;

  // Kiểm tra nếu đã có trong window.KHBD_DATA
  if (window.KHBD_DATA && window.KHBD_DATA.isLoaded(g, key)) {
    return true;
  }

  const scriptPath = `/rag/khbd_sohoa/lop${g}/lop${g}_${fileSubName}.js`;
  await loadScript(scriptPath);

  // Đảm bảo sau khi nạp vẫn có đối tượng KHBD_DATA
  ensureKhbdDataExists();
  return true;
}

/**
 * Nạp sách giáo khoa số hóa của một môn thuộc khối lớp
 */
export async function loadSgkSubject(grade, subjectKey) {
  await initRagCore();
  const g = parseInt(grade) || 5;
  let key = (subjectKey || 'toan').toLowerCase().replace(/_/g, '-');
  if (key === 'lich-su-dia-ly') key = 'lich-su-dia-li';

  const scriptPath = `/rag/sgk/lop${g}/${key}-${g}.js`;
  await loadScript(scriptPath);

  return true;
}

/**
 * Danh sách môn học có sẵn theo từng khối lớp (bao gồm môn văn hóa & môn đặc thù của đơn vị)
 */
export function getAvailableSubjectsForGrade(grade) {
  const g = parseInt(grade) || 5;
  const base = [
    { id: 'toan', name: 'Toán', icon: 'fa-calculator' },
    { id: 'tieng_viet', name: 'Tiếng Việt', icon: 'fa-book-open' },
    { id: 'dao_duc', name: 'Đạo đức', icon: 'fa-heart' },
    { id: 'am_nhac', name: 'Âm nhạc', icon: 'fa-music' },
    { id: 'gdtc', name: 'Giáo dục thể chất', icon: 'fa-person-running' },
    { id: 'hdtn', name: 'Hoạt động trải nghiệm', icon: 'fa-compass' }
  ];

  if (g <= 3) {
    base.splice(2, 0, { id: 'tnxh', name: 'Tự nhiên và Xã hội', icon: 'fa-leaf' });
    if (g === 3) {
      base.splice(3, 0, { id: 'cong_nghe', name: 'Công nghệ', icon: 'fa-gear' });
    }
  } else {
    base.splice(2, 0,
      { id: 'khoa_hoc', name: 'Khoa học', icon: 'fa-flask' },
      { id: 'lich_su_dia_ly', name: 'Lịch sử và Địa lí', icon: 'fa-earth-americas' },
      { id: 'cong_nghe', name: 'Công nghệ', icon: 'fa-gear' }
    );
  }

  // Bổ sung các môn ôn luyện & hoạt động tập thể theo đặc thù đơn vị
  base.push(
    { id: 'on_luyen_toan', name: 'Ôn luyện Toán', icon: 'fa-square-root-variable' },
    { id: 'on_luyen_tv', name: 'Ôn luyện TV', icon: 'fa-book-bookmark' },
    { id: 'tdtv_ol', name: 'TĐTV-ÔL', icon: 'fa-spell-check' },
    { id: 'on_luyen_atgt', name: 'Ôn luyện-ATGT', icon: 'fa-traffic-light' },
    { id: 'shdc', name: 'SHDC (Sinh hoạt dưới cờ)', icon: 'fa-flag' },
    { id: 'shtt', name: 'SHTT (Sinh hoạt tập thể)', icon: 'fa-users' }
  );

  return base;
}
