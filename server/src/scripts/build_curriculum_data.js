const path = require('path');
const fs = require('fs');

const baseDir = path.resolve(__dirname, '../../../client/public/rag/sgk');
const targetFile = path.resolve(__dirname, '../data/curriculumData.js');
const grades = [1, 2, 3, 4, 5];

function loadBook(p) {
  const code = fs.readFileSync(p, 'utf8');
  const sandbox = { module: { exports: {} }, exports: {}, window: {}, global: {} };
  const fn = new Function('module', 'exports', 'window', 'global', code);
  fn(sandbox.module, sandbox.exports, sandbox.window, sandbox.global);
  return sandbox.module.exports;
}

const fileMap = {
  1: {
    'Toán': 'lop1/toan-1.js',
    'Tiếng Việt': 'lop1/tieng-viet-1.js',
    'Tự nhiên và Xã hội': 'lop1/tnxh-1.js',
    'Tiếng Anh': 'lop1/tieng-anh-1.js'
  },
  2: {
    'Toán': 'lop2/toan-2.js',
    'Tiếng Việt': 'lop2/tieng-viet-2.js',
    'Tự nhiên và Xã hội': 'lop2/tnxh-2.js',
    'Tiếng Anh': 'lop2/tieng-anh-2.js',
    'Đạo đức': 'lop2/dao-duc-2.js',
    'Hoạt động trải nghiệm': 'lop2/hoat-dong-trai-nghiem-2.js'
  },
  3: {
    'Toán': 'lop3/toan-3.js',
    'Tiếng Việt': 'lop3/tieng-viet-3.js',
    'Tự nhiên và Xã hội': 'lop3/tnxh-3.js',
    'Tin học': 'lop3/tin-hoc-3.js',
    'Công nghệ': 'lop3/cong-nghe-3.js',
    'Tiếng Anh': 'lop3/tieng-anh-3.js'
  },
  4: {
    'Toán': 'lop4/toan-4.js',
    'Tiếng Việt': 'lop4/tieng-viet-4.js',
    'Khoa học': 'lop4/khoa-hoc-4.js',
    'Lịch sử và Địa lí': 'lop4/lich-su-dia-li-4.js',
    'Tin học': 'lop4/tin-hoc-4.js',
    'Công nghệ': 'lop4/cong-nghe-4.js',
    'Tiếng Anh': 'lop4/tieng-anh-4.js',
    'Đạo đức': 'lop4/dao-duc-4.js',
    'Hoạt động trải nghiệm': 'lop4/hoat-dong-trai-nghiem-4.js'
  },
  5: {
    'Toán': 'lop5/toan-5.js',
    'Tiếng Việt': 'lop5/tieng-viet-5.js',
    'Khoa học': 'lop5/khoa-hoc-5.js',
    'Lịch sử và Địa lí': 'lop5/lich-su-dia-li-5.js',
    'Tin học': 'lop5/tin-hoc-5.js',
    'Công nghệ': 'lop5/cong-nghe-5.js',
    'Tiếng Anh': 'lop5/tieng-anh-5.js'
  }
};

const fullCurriculum = [];

for (const g of grades) {
  const subjMap = fileMap[g] || {};
  for (const [subject, relPath] of Object.entries(subjMap)) {
    const fullP = path.join(baseDir, relPath);
    if (!fs.existsSync(fullP)) continue;
    const b = loadBook(fullP);
    if (!b || !b.lessons) continue;

    // Filter placeholder lessons
    const validLessons = b.lessons.filter(l => l.title !== 'Tên bài học' && !l.title.includes('Tên bài học'));

    // Map topics
    const topicMap = {};
    (b.topics || []).forEach(t => {
      const isSem2 = t.semester === 2 || (typeof t.weeks === 'string' && parseInt(t.weeks) >= 19);
      const volume = t.volume || (isSem2 ? 2 : 1);
      const semester = isSem2 ? 'Học kỳ 2' : 'Học kỳ 1';
      topicMap[t.name] = {
        id: t.id || `topic_${g}_${subject}_${Object.keys(topicMap).length + 1}`,
        name: t.name,
        semester,
        volume,
        weeks: t.weeks,
        lessons: []
      };
    });

    validLessons.forEach((l, idx) => {
      const week = l.week || (l.semester === 2 ? 20 : 5);
      const isSem2 = l.semester === 2 || week > 18;
      const volume = l.volume || (isSem2 ? 2 : 1);
      const semester = isSem2 ? 'Học kỳ 2' : 'Học kỳ 1';

      let examPeriod = 'Giữa học kỳ I';
      if (week > 9 && week <= 18) examPeriod = 'Cuối học kỳ I';
      else if (week > 18 && week <= 27) examPeriod = 'Giữa học kỳ II';
      else if (week > 27) examPeriod = 'Cuối năm học';

      const topicKey = l.topic || 'Chủ đề bài học';
      if (!topicMap[topicKey]) {
        topicMap[topicKey] = {
          id: `topic_${g}_${subject}_${Object.keys(topicMap).length + 1}`,
          name: topicKey,
          semester,
          volume,
          weeks: `${week}`,
          examPeriod,
          lessons: []
        };
      }

      // Ensure topic examPeriod reflects its lessons
      topicMap[topicKey].examPeriod = examPeriod;
      topicMap[topicKey].semester = semester;
      topicMap[topicKey].volume = volume;

      const outcomes = [];
      if (l.coreKnowledge) outcomes.push(l.coreKnowledge);
      else outcomes.push(l.title);

      topicMap[topicKey].lessons.push({
        lessonNumber: l.lessonNumber || (idx + 1),
        title: l.title,
        periods: typeof l.duration === 'string' ? (parseInt(l.duration) || 2) : 2,
        week,
        volume,
        semester,
        examPeriod,
        outcomes,
        competencies: l.competencies || ["Năng lực đặc thù", "Năng lực giải quyết vấn đề"],
        sampleQuestions: (l.sampleQuestions || []).slice(0, 3)
      });
    });

    const topicsArr = Object.values(topicMap).filter(t => t.lessons.length > 0);

    fullCurriculum.push({
      grade: g,
      subject,
      bookName: b.metadata.bookName,
      totalLessons: validLessons.length,
      topics: topicsArr
    });
  }
}

// Generate JS content
const fileHeader = `/**
 * Cơ sở dữ liệu Khung Kế hoạch dạy học (KHDH) từ Lớp 1 đến Lớp 5
 * Bộ sách: Kết nối tri thức với cuộc sống (KNTT) & Global Success - GDPT 2018
 * Được số hóa tự động và đồng bộ từ toàn bộ 36 sách giáo khoa (Tập 1 & Tập 2)
 * Phục vụ ra đề kiểm tra 4 giai đoạn chuẩn Thông tư 27:
 * - Giữa học kỳ I (Tuần 1 - 9 / Tập 1)
 * - Cuối học kỳ I (Tuần 1 - 18 / Tập 1)
 * - Giữa học kỳ II (Tuần 19 - 27 / Tập 2)
 * - Cuối năm học (Tuần 19 - 35 / Tập 2 & Toàn năm)
 */

module.exports = {
  grades: [1, 2, 3, 4, 5],
  bookSeries: "Kết nối tri thức với cuộc sống",
  
  // Danh mục môn học theo khối lớp
  subjectsByGrade: {
    1: ["Toán", "Tiếng Việt", "Tự nhiên và Xã hội", "Đạo đức", "Hoạt động trải nghiệm", "Tiếng Anh"],
    2: ["Toán", "Tiếng Việt", "Tự nhiên và Xã hội", "Đạo đức", "Hoạt động trải nghiệm", "Tiếng Anh"],
    3: ["Toán", "Tiếng Việt", "Tự nhiên và Xã hội", "Tin học", "Công nghệ", "Đạo đức", "Hoạt động trải nghiệm", "Tiếng Anh"],
    4: ["Toán", "Tiếng Việt", "Khoa học", "Lịch sử và Địa lí", "Tin học", "Công nghệ", "Đạo đức", "Hoạt động trải nghiệm", "Tiếng Anh"],
    5: ["Toán", "Tiếng Việt", "Khoa học", "Lịch sử và Địa lí", "Tin học", "Công nghệ", "Đạo đức", "Hoạt động trải nghiệm", "Tiếng Anh"]
  },

  // Dữ liệu chương trình trọng tâm môn học theo tuần, chủ đề và tập sách
  curriculum: ${JSON.stringify(fullCurriculum, null, 2)}
};
`;

fs.writeFileSync(targetFile, fileHeader, 'utf8');
console.log(`Successfully generated ${targetFile}! Total subjects: ${fullCurriculum.length}`);
