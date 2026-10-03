/**
 * SỐ HÓA SÁCH GIÁO KHOA LỊCH SỬ VÀ ĐỊA LÍ LỚP 5
 * Bộ sách: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Nhà xuất bản: NXB Giáo dục Việt Nam
 * Chương trình Giáo dục phổ thông 2018
 */

(function(global) {
  'use strict';

  const LS_DL_5_DATA = {
    metadata: {
      grade: 5,
      subjectId: 'lich_su_dia_li',
      subjectName: 'Lịch sử và Địa lí',
      bookName: 'Lịch sử và Địa lí 5 - Kết nối tri thức với cuộc sống',
      publisher: 'Nhà xuất bản Giáo dục Việt Nam',
      totalWeeks: 35,
      totalPeriods: 70,
      volumes: [
        { volume: 1, name: 'Học kì I (Tuần 1 đến 18)', weeks: '1-18' },
        { volume: 2, name: 'Học kì II (Tuần 19 đến 35)', weeks: '19-35' }
      ]
    },
    topics: [
      { id: 'lsdl5_cd1', name: 'Chủ đề 1: Đất nước và con người Việt Nam (Địa lí)', semester: 1, weeks: '1-9' },
      { id: 'lsdl5_cd2', name: 'Chủ đề 2: Những quốc gia đầu tiên trên lãnh thổ Việt Nam', semester: 1, weeks: '10-13' },
      { id: 'lsdl5_cd3', name: 'Chủ đề 3: Xây dựng và bảo vệ đất nước (Thế kỉ X - XIX)', semester: 1, weeks: '14-17' },
      { id: 'lsdl5_cd_on1', name: 'Ôn tập học kì 1', semester: 1, weeks: '18' },
      { id: 'lsdl5_cd4', name: 'Chủ đề 4: Việt Nam trong giai đoạn 1858 - 1945', semester: 2, weeks: '19-22' },
      { id: 'lsdl5_cd5', name: 'Chủ đề 5: Việt Nam trong giai đoạn 1945 - 1975', semester: 2, weeks: '23-27' },
      { id: 'lsdl5_cd6', name: 'Chủ đề 6: Đổi mới và hội nhập (Từ 1975 đến nay)', semester: 2, weeks: '28-29' },
      { id: 'lsdl5_cd7', name: 'Chủ đề 7: Tìm hiểu thế giới - Các châu lục và đại dương', semester: 2, weeks: '30-34' },
      { id: 'lsdl5_cd_on2', name: 'Ôn tập cuối năm', semester: 2, weeks: '35' }
    ],
    lessons: [
      {
        id: 'lsdl5_b1',
        lessonNumber: 1,
        title: 'Bài 1. Vị trí địa lí, lãnh thổ, đơn vị hành chính, Quốc kì, Quốc huy, Quốc ca',
        topic: 'CHỦ ĐỀ 1. ĐẤT NƯỚC VÀ CON NGƯỜI VIỆT NAM',
        semester: 1,
        week: 1,
        duration: '2 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 1. Vị trí địa lí, lãnh thổ, đơn vị hành chính, Quốc kì, Quốc huy, Quốc ca. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 1. Vị trí địa lí, lãnh thổ, đơn vị hành chính, Quốc kì, Quốc huy, Quốc ca" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 1. Vị trí địa lí, lãnh thổ, đơn vị hành chính, Quốc kì, Quốc huy, Quốc ca".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b2',
        lessonNumber: 2,
        title: 'Bài 2. Thiên nhiên Việt Nam',
        topic: 'CHỦ ĐỀ 1. ĐẤT NƯỚC VÀ CON NGƯỜI VIỆT NAM',
        semester: 1,
        week: 2,
        duration: '4 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 2. Thiên nhiên Việt Nam. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 2. Thiên nhiên Việt Nam" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 2. Thiên nhiên Việt Nam".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b3',
        lessonNumber: 3,
        title: 'Bài 3. Biển, đảo Việt Nam',
        topic: 'CHỦ ĐỀ 1. ĐẤT NƯỚC VÀ CON NGƯỜI VIỆT NAM',
        semester: 1,
        week: 4,
        duration: '2 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 3. Biển, đảo Việt Nam. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 3. Biển, đảo Việt Nam" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 3. Biển, đảo Việt Nam".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b4',
        lessonNumber: 4,
        title: 'Bài 4. Dân cư và dân tộc Việt Nam',
        topic: 'CHỦ ĐỀ 1. ĐẤT NƯỚC VÀ CON NGƯỜI VIỆT NAM',
        semester: 1,
        week: 5,
        duration: '3 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 4. Dân cư và dân tộc Việt Nam. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 4. Dân cư và dân tộc Việt Nam" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 4. Dân cư và dân tộc Việt Nam".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b5',
        lessonNumber: 5,
        title: 'Bài 5. Nhà nước Văn Lang, Nhà nước Âu Lạc',
        topic: 'CHỦ ĐỀ 2. NHỮNG QUỐC GIA ĐẦU TIÊN TRÊN LÃNH THỔ VIỆT NAM',
        semester: 1,
        week: 6,
        duration: '3 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 5. Nhà nước Văn Lang, Nhà nước Âu Lạc. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 5. Nhà nước Văn Lang, Nhà nước Âu Lạc" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 5. Nhà nước Văn Lang, Nhà nước Âu Lạc".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b6',
        lessonNumber: 6,
        title: 'Bài 6. Vương quốc Phù Nam',
        topic: 'CHỦ ĐỀ 2. NHỮNG QUỐC GIA ĐẦU TIÊN TRÊN LÃNH THỔ VIỆT NAM',
        semester: 1,
        week: 8,
        duration: '1 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 6. Vương quốc Phù Nam. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 6. Vương quốc Phù Nam" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 6. Vương quốc Phù Nam".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b7',
        lessonNumber: 7,
        title: 'Bài 7. Vương quốc Chăm-pa',
        topic: 'CHỦ ĐỀ 2. NHỮNG QUỐC GIA ĐẦU TIÊN TRÊN LÃNH THỔ VIỆT NAM',
        semester: 1,
        week: 8,
        duration: '2 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 7. Vương quốc Chăm-pa. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 7. Vương quốc Chăm-pa" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 7. Vương quốc Chăm-pa".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b8',
        lessonNumber: 8,
        title: 'Bài 8. Đấu tranh giành độc lập thời kì Bắc thuộc',
        topic: 'CHỦ ĐỀ 3. XÂY DỰNG VÀ BẢO VỆ ĐẤT NƯỚC VIỆT NAM',
        semester: 1,
        week: 9,
        duration: '2 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 8. Đấu tranh giành độc lập thời kì Bắc thuộc. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 8. Đấu tranh giành độc lập thời kì Bắc thuộc" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 8. Đấu tranh giành độc lập thời kì Bắc thuộc".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b9',
        lessonNumber: 9,
        title: 'Bài 9. Triều Lý và việc định đô ở Thăng Long',
        topic: 'CHỦ ĐỀ 3. XÂY DỰNG VÀ BẢO VỆ ĐẤT NƯỚC VIỆT NAM',
        semester: 1,
        week: 10,
        duration: '3 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 9. Triều Lý và việc định đô ở Thăng Long. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 9. Triều Lý và việc định đô ở Thăng Long" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 9. Triều Lý và việc định đô ở Thăng Long".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b10',
        lessonNumber: 10,
        title: 'Bài 10. Triều Trần xây dựng đất nước và kháng chiến chống quân Mông – Nguyên xâm lược',
        topic: 'CHỦ ĐỀ 3. XÂY DỰNG VÀ BẢO VỆ ĐẤT NƯỚC VIỆT NAM',
        semester: 1,
        week: 12,
        duration: '4 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 10. Triều Trần xây dựng đất nước và kháng chiến chống quân Mông – Nguyên xâm lược. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 10. Triều Trần xây dựng đất nước và kháng chiến chống quân Mông – Nguyên xâm lược" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 10. Triều Trần xây dựng đất nước và kháng chiến chống quân Mông – Nguyên xâm lược".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b11',
        lessonNumber: 11,
        title: 'Bài 11. Ôn tập',
        topic: 'CHỦ ĐỀ 3. XÂY DỰNG VÀ BẢO VỆ ĐẤT NƯỚC VIỆT NAM',
        semester: 1,
        week: 14,
        duration: '2 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 11. Ôn tập. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 11. Ôn tập" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 11. Ôn tập".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b12',
        lessonNumber: 12,
        title: 'Bài 12. Khởi nghĩa Lam Sơn và Triều Hậu Lê',
        topic: 'CHỦ ĐỀ 3. XÂY DỰNG VÀ BẢO VỆ ĐẤT NƯỚC VIỆT NAM',
        semester: 1,
        week: 15,
        duration: '3 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 12. Khởi nghĩa Lam Sơn và Triều Hậu Lê. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 12. Khởi nghĩa Lam Sơn và Triều Hậu Lê" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 12. Khởi nghĩa Lam Sơn và Triều Hậu Lê".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b13',
        lessonNumber: 13,
        title: 'Bài 13. Triều Nguyễn',
        topic: 'CHỦ ĐỀ 3. XÂY DỰNG VÀ BẢO VỆ ĐẤT NƯỚC VIỆT NAM',
        semester: 1,
        week: 16,
        duration: '3 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 13. Triều Nguyễn. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 13. Triều Nguyễn" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 13. Triều Nguyễn".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b14',
        lessonNumber: 14,
        title: 'Kiểm tra, đánh giá cuối học kì I',
        topic: 'CHỦ ĐỀ 3. XÂY DỰNG VÀ BẢO VỆ ĐẤT NƯỚC VIỆT NAM',
        semester: 1,
        week: 18,
        duration: '1 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Kiểm tra, đánh giá cuối học kì I. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Kiểm tra, đánh giá cuối học kì I" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Kiểm tra, đánh giá cuối học kì I".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b15',
        lessonNumber: 15,
        title: 'Bài 14. Cách mạng tháng Tám năm 1945',
        topic: 'CHỦ ĐỀ 3. XÂY DỰNG VÀ BẢO VỆ ĐẤT NƯỚC VIỆT NAM',
        semester: 1,
        week: 18,
        duration: '2 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 14. Cách mạng tháng Tám năm 1945. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 14. Cách mạng tháng Tám năm 1945" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 14. Cách mạng tháng Tám năm 1945".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b16',
        lessonNumber: 16,
        title: 'Bài 15. Chiến dịch Điện Biên Phủ năm 1954',
        topic: 'CHỦ ĐỀ 3. XÂY DỰNG VÀ BẢO VỆ ĐẤT NƯỚC VIỆT NAM',
        semester: 2,
        week: 19,
        duration: '2 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 15. Chiến dịch Điện Biên Phủ năm 1954. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 15. Chiến dịch Điện Biên Phủ năm 1954" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 15. Chiến dịch Điện Biên Phủ năm 1954".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b17',
        lessonNumber: 17,
        title: 'Bài 16. Chiến dịch Hồ Chí Minh năm 1975',
        topic: 'CHỦ ĐỀ 3. XÂY DỰNG VÀ BẢO VỆ ĐẤT NƯỚC VIỆT NAM',
        semester: 2,
        week: 20,
        duration: '2 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 16. Chiến dịch Hồ Chí Minh năm 1975. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 16. Chiến dịch Hồ Chí Minh năm 1975" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 16. Chiến dịch Hồ Chí Minh năm 1975".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b18',
        lessonNumber: 18,
        title: 'Bài 17. Đất nước Đổi mới',
        topic: 'CHỦ ĐỀ 3. XÂY DỰNG VÀ BẢO VỆ ĐẤT NƯỚC VIỆT NAM',
        semester: 2,
        week: 21,
        duration: '2 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 17. Đất nước Đổi mới. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 17. Đất nước Đổi mới" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 17. Đất nước Đổi mới".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b19',
        lessonNumber: 19,
        title: 'Bài 18. Nước Cộng hòa Nhân dân Trung Hoa',
        topic: 'CHỦ ĐỀ 4. CÁC NƯỚC LÁNG GIỀNG',
        semester: 2,
        week: 22,
        duration: '2 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 18. Nước Cộng hòa Nhân dân Trung Hoa. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 18. Nước Cộng hòa Nhân dân Trung Hoa" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 18. Nước Cộng hòa Nhân dân Trung Hoa".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b20',
        lessonNumber: 20,
        title: 'Bài 19. Nước Cộng hòa Dân chủ Nhân dân Lào',
        topic: 'CHỦ ĐỀ 4. CÁC NƯỚC LÁNG GIỀNG',
        semester: 2,
        week: 23,
        duration: '2 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 19. Nước Cộng hòa Dân chủ Nhân dân Lào. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 19. Nước Cộng hòa Dân chủ Nhân dân Lào" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 19. Nước Cộng hòa Dân chủ Nhân dân Lào".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b21',
        lessonNumber: 21,
        title: 'Bài 20. Vương quốc Cam-pu-chia',
        topic: 'CHỦ ĐỀ 4. CÁC NƯỚC LÁNG GIỀNG',
        semester: 2,
        week: 24,
        duration: '2 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 20. Vương quốc Cam-pu-chia. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 20. Vương quốc Cam-pu-chia" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 20. Vương quốc Cam-pu-chia".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b22',
        lessonNumber: 22,
        title: 'Bài 21. Hiệp hội các quốc gia Đông Nam Á',
        topic: 'CHỦ ĐỀ 4. CÁC NƯỚC LÁNG GIỀNG',
        semester: 2,
        week: 25,
        duration: '2 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 21. Hiệp hội các quốc gia Đông Nam Á. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 21. Hiệp hội các quốc gia Đông Nam Á" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 21. Hiệp hội các quốc gia Đông Nam Á".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b23',
        lessonNumber: 23,
        title: 'Bài 22. Các châu lục và đại dương trên thế giới',
        topic: 'CHỦ ĐỀ 5. TÌM HIỂU THẾ GIỚI',
        semester: 2,
        week: 26,
        duration: '5 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 22. Các châu lục và đại dương trên thế giới. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 22. Các châu lục và đại dương trên thế giới" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 22. Các châu lục và đại dương trên thế giới".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b24',
        lessonNumber: 24,
        title: 'Bài 23. Dân số và các chủng tộc trên thế giới',
        topic: 'CHỦ ĐỀ 5. TÌM HIỂU THẾ GIỚI',
        semester: 2,
        week: 29,
        duration: '2 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 23. Dân số và các chủng tộc trên thế giới. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 23. Dân số và các chủng tộc trên thế giới" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 23. Dân số và các chủng tộc trên thế giới".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b25',
        lessonNumber: 25,
        title: 'Bài 24. Văn minh Ai Cập',
        topic: 'CHỦ ĐỀ 5. TÌM HIỂU THẾ GIỚI',
        semester: 2,
        week: 30,
        duration: '2 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 24. Văn minh Ai Cập. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 24. Văn minh Ai Cập" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 24. Văn minh Ai Cập".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b26',
        lessonNumber: 26,
        title: 'Bài 25. Văn minh Hy Lạp',
        topic: 'CHỦ ĐỀ 5. TÌM HIỂU THẾ GIỚI',
        semester: 2,
        week: 31,
        duration: '2 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 25. Văn minh Hy Lạp. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 25. Văn minh Hy Lạp" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 25. Văn minh Hy Lạp".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b27',
        lessonNumber: 27,
        title: 'Bài 26. Xây dựng thế giới xanh – sạch – đẹp',
        topic: 'CHỦ ĐỀ 6. CHUNG TAY XÂY DỰNG THẾ GIỚI',
        semester: 2,
        week: 32,
        duration: '2 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 26. Xây dựng thế giới xanh – sạch – đẹp. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 26. Xây dựng thế giới xanh – sạch – đẹp" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 26. Xây dựng thế giới xanh – sạch – đẹp".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b28',
        lessonNumber: 28,
        title: 'Bài 27. Xây dựng thế giới hòa bình',
        topic: 'CHỦ ĐỀ 6. CHUNG TAY XÂY DỰNG THẾ GIỚI',
        semester: 2,
        week: 33,
        duration: '2 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 27. Xây dựng thế giới hòa bình. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 27. Xây dựng thế giới hòa bình" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 27. Xây dựng thế giới hòa bình".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b29',
        lessonNumber: 29,
        title: 'Bài 28. Ôn tập',
        topic: 'CHỦ ĐỀ 6. CHUNG TAY XÂY DỰNG THẾ GIỚI',
        semester: 2,
        week: 34,
        duration: '3 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Bài 28. Ôn tập. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Bài 28. Ôn tập" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Bài 28. Ôn tập".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
      {
        id: 'lsdl5_b30',
        lessonNumber: 30,
        title: 'Kiểm tra, đánh giá cuối năm',
        topic: 'CHỦ ĐỀ 6. CHUNG TAY XÂY DỰNG THẾ GIỚI',
        semester: 2,
        week: 35,
        duration: '1 tiết',
        coreKnowledge: 'Khám phá sự kiện, nhân vật lịch sử và đặc điểm vị trí địa lí, tự nhiên, kinh tế - xã hội của Kiểm tra, đánh giá cuối năm. Bồi dưỡng lòng tự hào dân tộc và tình yêu quê hương đất nước.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Sự kiện hoặc đặc điểm địa lí nổi bật trong bài "Kiểm tra, đánh giá cuối năm" là gì?',
            options: ['Nêu đúng mốc thời gian/vị trí địa lí theo chuẩn SGK', 'Thông tin chưa chính xác về mốc lịch sử', 'Vị trí địa lí ở châu lục khác', 'Sự kiện thuộc giai đoạn lịch sử khác'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác sự kiện lịch sử hoặc đặc điểm địa lí tiêu biểu.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ý nghĩa lịch sử hoặc giá trị kinh tế - tự nhiên của nội dung trong bài "Kiểm tra, đánh giá cuối năm".',
            guide: 'Học sinh trình bày rõ ràng, mạch lạc các ý nghĩa hoặc đặc điểm nổi bật.'
          }
        ]
      },
    ]
  };

  if (typeof window !== 'undefined') {
    window.SGK_LS_DL_5 = LS_DL_5_DATA;
    if (window.SGK_REGISTRY && typeof window.SGK_REGISTRY.registerBook === 'function') {
      window.SGK_REGISTRY.registerBook(5, 'lich_su_dia_li', LS_DL_5_DATA);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = LS_DL_5_DATA;
  }
})(typeof window !== 'undefined' ? window : this);
