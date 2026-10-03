const path = require('path');
const fs = require('fs');

const baseDir = path.resolve(__dirname, '../../../client/public/rag/sgk');
const grades = ['lop1', 'lop2', 'lop3', 'lop4', 'lop5'];
const allBooks = [];

function loadSgkFile(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const sandbox = { module: { exports: {} }, exports: {}, window: {}, global: {} };
  const fn = new Function('module', 'exports', 'window', 'global', code);
  fn(sandbox.module, sandbox.exports, sandbox.window, sandbox.global);
  return sandbox.module.exports && sandbox.module.exports.metadata ? sandbox.module.exports : null;
}

grades.forEach(gradeDir => {
  const p = path.join(baseDir, gradeDir);
  if (!fs.existsSync(p)) return;
  const files = fs.readdirSync(p);
  files.forEach(file => {
    if (!file.endsWith('.js')) return;
    const fullPath = path.join(p, file);
    try {
      const book = loadSgkFile(fullPath);
      if (book) {
        const topics = book.topics || [];
        const lessons = book.lessons || [];
        // calculate periods
        const h1Lessons = lessons.filter(l => l.semester === 1 || (l.week && l.week <= 18));
        const h2Lessons = lessons.filter(l => l.semester === 2 || (l.week && l.week > 18));
        const mid1 = lessons.filter(l => l.week && l.week <= 9);
        const mid2 = lessons.filter(l => l.week && l.week >= 19 && l.week <= 27);
        allBooks.push({
          file: `${gradeDir}/${file}`,
          grade: book.metadata.grade,
          subjectId: book.metadata.subjectId,
          subjectName: book.metadata.subjectName,
          bookName: book.metadata.bookName,
          totalTopics: topics.length,
          totalLessons: lessons.length,
          mid1Count: mid1.length,
          end1Count: h1Lessons.length,
          mid2Count: mid2.length,
          end2Count: h2Lessons.length
        });
      } else {
        console.log("Could not load book from:", file);
      }
    } catch (e) {
      console.error(`Error loading ${file}:`, e.message);
    }
  });
});

console.log(`Found ${allBooks.length} SGK books:`);
console.table(allBooks);
