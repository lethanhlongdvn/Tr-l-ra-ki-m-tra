/**
 * SỐ HÓA SÁCH GIÁO KHOA LỊCH SỬ VÀ ĐỊA LÍ LỚP 4
 * Bộ sách: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Nhà xuất bản: NXB Giáo dục Việt Nam
 * Chương trình Giáo dục phổ thông 2018
 */

(function(global) {
  'use strict';

  const LS_DL_4_DATA = {
    metadata: {
      grade: 4,
      subjectId: 'lich_su_dia_li',
      subjectName: 'Lịch sử và Địa lí',
      bookName: 'Lịch sử và Địa lí 4 - Kết nối tri thức với cuộc sống',
      publisher: 'Nhà xuất bản Giáo dục Việt Nam',
      totalWeeks: 35,
      totalPeriods: 70,
      volumes: [
        { volume: 1, name: 'Học kì I (Tuần 1 đến 18)', weeks: '1-18' },
        { volume: 2, name: 'Học kì II (Tuần 19 đến 35)', weeks: '19-35' }
      ]
    },
    topics: [
      { id: 'lsdl4_cd1', name: 'Mở đầu: Phương tiện học tập Lịch sử và Địa lí', semester: 1, weeks: '1-2' },
      { id: 'lsdl4_cd2', name: 'Chủ đề 1: Địa phương em (Tỉnh, Thành phố)', semester: 1, weeks: '3-6' },
      { id: 'lsdl4_cd3', name: 'Chủ đề 2: Trung du và miền núi Bắc Bộ', semester: 1, weeks: '7-12' },
      { id: 'lsdl4_cd4', name: 'Chủ đề 3: Đồng bằng Bắc Bộ', semester: 1, weeks: '13-17' },
      { id: 'lsdl4_cd_on1', name: 'Ôn tập học kì 1', semester: 1, weeks: '18' },
      { id: 'lsdl4_cd5', name: 'Chủ đề 4: Duyên hải miền Trung', semester: 2, weeks: '19-24' },
      { id: 'lsdl4_cd6', name: 'Chủ đề 5: Tây Nguyên', semester: 2, weeks: '25-29' },
      { id: 'lsdl4_cd7', name: 'Chủ đề 6: Nam Bộ', semester: 2, weeks: '30-34' },
      { id: 'lsdl4_cd_on2', name: 'Ôn tập cuối năm', semester: 2, weeks: '35' }
    ],
    lessons: [
      {
        id: 'lsdl4_b1',
        lessonNumber: 1,
        title: 'Bài 1. Làm quen với phương tiện học tập môn Lịch sử và Địa lí',
        topic: 'Mở đầu',
        semester: 1,
        week: 1,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 1. Làm quen với phương tiện học tập môn Lịch sử và Địa lí. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 1. Làm quen với phương tiện học tập môn Lịch sử và Địa lí" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 1. Làm quen với phương tiện học tập môn Lịch sử và Địa lí".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
      {
        id: 'lsdl4_b2',
        lessonNumber: 2,
        title: 'Bài 2. Thiên nhiên và con người ở địa phương em',
        topic: 'Địa phương em',
        semester: 1,
        week: 2,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 2. Thiên nhiên và con người ở địa phương em. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 2. Thiên nhiên và con người ở địa phương em" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 2. Thiên nhiên và con người ở địa phương em".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
      {
        id: 'lsdl4_b3',
        lessonNumber: 3,
        title: 'Bài 3. Lịch sử và văn hoá truyền thống địa phương em',
        topic: 'Địa phương em',
        semester: 1,
        week: 3,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 3. Lịch sử và văn hoá truyền thống địa phương em. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 3. Lịch sử và văn hoá truyền thống địa phương em" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 3. Lịch sử và văn hoá truyền thống địa phương em".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
      {
        id: 'lsdl4_b4',
        lessonNumber: 4,
        title: 'Bài 4. Thiên nhiên vùng Trung du và miền núi phía Bắc',
        topic: 'Trung du và miền núi phía Bắc',
        semester: 1,
        week: 4,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 4. Thiên nhiên vùng Trung du và miền núi phía Bắc. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 4. Thiên nhiên vùng Trung du và miền núi phía Bắc" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 4. Thiên nhiên vùng Trung du và miền núi phía Bắc".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
      {
        id: 'lsdl4_b5',
        lessonNumber: 5,
        title: 'Bài 5. Dân cư và hoạt động sản xuất ở vùng Trung du và miền núi phía Bắc',
        topic: 'Trung du và miền núi phía Bắc',
        semester: 1,
        week: 5,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 5. Dân cư và hoạt động sản xuất ở vùng Trung du và miền núi phía Bắc. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 5. Dân cư và hoạt động sản xuất ở vùng Trung du và miền núi phía Bắc" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 5. Dân cư và hoạt động sản xuất ở vùng Trung du và miền núi phía Bắc".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
      {
        id: 'lsdl4_b6',
        lessonNumber: 6,
        title: 'Bài 6. Một số nét văn hoá ở vùng Trung du và miền núi phía Bắc',
        topic: 'Trung du và miền núi phía Bắc',
        semester: 1,
        week: 7,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 6. Một số nét văn hoá ở vùng Trung du và miền núi phía Bắc. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 6. Một số nét văn hoá ở vùng Trung du và miền núi phía Bắc" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 6. Một số nét văn hoá ở vùng Trung du và miền núi phía Bắc".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
      {
        id: 'lsdl4_b7',
        lessonNumber: 7,
        title: 'Bài 7. Đền Hùng và lễ giỗ Tổ Hùng Vương',
        topic: 'Trung du và miền núi phía Bắc',
        semester: 1,
        week: 8,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 7. Đền Hùng và lễ giỗ Tổ Hùng Vương. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 7. Đền Hùng và lễ giỗ Tổ Hùng Vương" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 7. Đền Hùng và lễ giỗ Tổ Hùng Vương".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
      {
        id: 'lsdl4_b8',
        lessonNumber: 8,
        title: 'Bài 8. Thiên nhiên vùng Đồng bằng Bắc Bộ',
        topic: 'Đồng bằng Bắc Bộ',
        semester: 1,
        week: 9,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 8. Thiên nhiên vùng Đồng bằng Bắc Bộ. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 8. Thiên nhiên vùng Đồng bằng Bắc Bộ" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 8. Thiên nhiên vùng Đồng bằng Bắc Bộ".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
      {
        id: 'lsdl4_b9',
        lessonNumber: 9,
        title: 'Bài 9. Dân cư và hoạt động sản xuất ở vùng Đồng bằng Bắc Bộ',
        topic: 'Đồng bằng Bắc Bộ',
        semester: 1,
        week: 10,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 9. Dân cư và hoạt động sản xuất ở vùng Đồng bằng Bắc Bộ. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 9. Dân cư và hoạt động sản xuất ở vùng Đồng bằng Bắc Bộ" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 9. Dân cư và hoạt động sản xuất ở vùng Đồng bằng Bắc Bộ".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
      {
        id: 'lsdl4_b10',
        lessonNumber: 10,
        title: 'Bài 10. Một số nét văn hoá ở vùng Đồng bằng Bắc Bộ',
        topic: 'Đồng bằng Bắc Bộ',
        semester: 1,
        week: 12,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 10. Một số nét văn hoá ở vùng Đồng bằng Bắc Bộ. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 10. Một số nét văn hoá ở vùng Đồng bằng Bắc Bộ" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 10. Một số nét văn hoá ở vùng Đồng bằng Bắc Bộ".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
      {
        id: 'lsdl4_b11',
        lessonNumber: 11,
        title: 'Bài 11. Sông Hồng và văn minh sông Hồng',
        topic: 'Đồng bằng Bắc Bộ',
        semester: 1,
        week: 13,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 11. Sông Hồng và văn minh sông Hồng. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 11. Sông Hồng và văn minh sông Hồng" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 11. Sông Hồng và văn minh sông Hồng".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
      {
        id: 'lsdl4_b12',
        lessonNumber: 12,
        title: 'Bài 12. Thăng Long - Hà Nội',
        topic: 'Đồng bằng Bắc Bộ',
        semester: 1,
        week: 14,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 12. Thăng Long - Hà Nội. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 12. Thăng Long - Hà Nội" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 12. Thăng Long - Hà Nội".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
      {
        id: 'lsdl4_b13',
        lessonNumber: 13,
        title: 'Bài 13. Văn Miếu - Quốc Tử Giám',
        topic: 'Đồng bằng Bắc Bộ',
        semester: 1,
        week: 15,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 13. Văn Miếu - Quốc Tử Giám. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 13. Văn Miếu - Quốc Tử Giám" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 13. Văn Miếu - Quốc Tử Giám".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
      {
        id: 'lsdl4_b14',
        lessonNumber: 14,
        title: 'Bài 14. Ôn tập học kì I',
        topic: 'Đồng bằng Bắc Bộ',
        semester: 1,
        week: 16,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 14. Ôn tập học kì I. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 14. Ôn tập học kì I" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 14. Ôn tập học kì I".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
      {
        id: 'lsdl4_b15',
        lessonNumber: 15,
        title: 'Bài 15. Thiên nhiên vùng Bắc Trung Bộ và Nam Trung Bộ',
        topic: 'Bắc Trung Bộ và Nam Trung Bộ',
        semester: 1,
        week: 18,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 15. Thiên nhiên vùng Bắc Trung Bộ và Nam Trung Bộ. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 15. Thiên nhiên vùng Bắc Trung Bộ và Nam Trung Bộ" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 15. Thiên nhiên vùng Bắc Trung Bộ và Nam Trung Bộ".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
      {
        id: 'lsdl4_b16',
        lessonNumber: 16,
        title: 'Bài 16. Dân cư và hoạt động sản xuất ở vùng Bắc Trung Bộ và Nam Trung Bộ',
        topic: 'Bắc Trung Bộ và Nam Trung Bộ',
        semester: 2,
        week: 21,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 16. Dân cư và hoạt động sản xuất ở vùng Bắc Trung Bộ và Nam Trung Bộ. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 16. Dân cư và hoạt động sản xuất ở vùng Bắc Trung Bộ và Nam Trung Bộ" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 16. Dân cư và hoạt động sản xuất ở vùng Bắc Trung Bộ và Nam Trung Bộ".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
      {
        id: 'lsdl4_b17',
        lessonNumber: 17,
        title: 'Bài 17. Một số nét văn hoá ở vùng Bắc Trung Bộ và Nam Trung Bộ',
        topic: 'Bắc Trung Bộ và Nam Trung Bộ',
        semester: 2,
        week: 23,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 17. Một số nét văn hoá ở vùng Bắc Trung Bộ và Nam Trung Bộ. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 17. Một số nét văn hoá ở vùng Bắc Trung Bộ và Nam Trung Bộ" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 17. Một số nét văn hoá ở vùng Bắc Trung Bộ và Nam Trung Bộ".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
      {
        id: 'lsdl4_b18',
        lessonNumber: 18,
        title: 'Bài 18. Truyền thống yêu nước, cách mạng của đồng bào Bắc Trung Bộ và Nam Trung Bộ',
        topic: 'Bắc Trung Bộ và Nam Trung Bộ',
        semester: 2,
        week: 24,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 18. Truyền thống yêu nước, cách mạng của đồng bào Bắc Trung Bộ và Nam Trung Bộ. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 18. Truyền thống yêu nước, cách mạng của đồng bào Bắc Trung Bộ và Nam Trung Bộ" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 18. Truyền thống yêu nước, cách mạng của đồng bào Bắc Trung Bộ và Nam Trung Bộ".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
      {
        id: 'lsdl4_b19',
        lessonNumber: 19,
        title: 'Bài 19. Cố đô Huế',
        topic: 'Bắc Trung Bộ và Nam Trung Bộ',
        semester: 2,
        week: 25,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 19. Cố đô Huế. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 19. Cố đô Huế" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 19. Cố đô Huế".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
      {
        id: 'lsdl4_b20',
        lessonNumber: 20,
        title: 'Bài 20. Phố cổ Hội An',
        topic: 'Bắc Trung Bộ và Nam Trung Bộ',
        semester: 2,
        week: 26,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 20. Phố cổ Hội An. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 20. Phố cổ Hội An" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 20. Phố cổ Hội An".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
      {
        id: 'lsdl4_b21',
        lessonNumber: 21,
        title: 'Bài 21. Lễ hội Cồng chiêng Tây Nguyên',
        topic: 'Bắc Trung Bộ và Nam Trung Bộ',
        semester: 2,
        week: 27,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 21. Lễ hội Cồng chiêng Tây Nguyên. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 21. Lễ hội Cồng chiêng Tây Nguyên" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 21. Lễ hội Cồng chiêng Tây Nguyên".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
      {
        id: 'lsdl4_b22',
        lessonNumber: 22,
        title: 'Bài 22. Thiên nhiên vùng Nam Bộ',
        topic: 'Nam Bộ',
        semester: 2,
        week: 28,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 22. Thiên nhiên vùng Nam Bộ. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 22. Thiên nhiên vùng Nam Bộ" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 22. Thiên nhiên vùng Nam Bộ".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
      {
        id: 'lsdl4_b23',
        lessonNumber: 23,
        title: 'Bài 23. Dân cư và hoạt động sản xuất ở vùng Nam Bộ',
        topic: 'Nam Bộ',
        semester: 2,
        week: 30,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 23. Dân cư và hoạt động sản xuất ở vùng Nam Bộ. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 23. Dân cư và hoạt động sản xuất ở vùng Nam Bộ" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 23. Dân cư và hoạt động sản xuất ở vùng Nam Bộ".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
      {
        id: 'lsdl4_b24',
        lessonNumber: 24,
        title: 'Bài 24. Một số nét văn hoá và truyền thống yêu nước, cách mạng của đồng bào Nam Bộ',
        topic: 'Nam Bộ',
        semester: 2,
        week: 31,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 24. Một số nét văn hoá và truyền thống yêu nước, cách mạng của đồng bào Nam Bộ. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 24. Một số nét văn hoá và truyền thống yêu nước, cách mạng của đồng bào Nam Bộ" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 24. Một số nét văn hoá và truyền thống yêu nước, cách mạng của đồng bào Nam Bộ".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
      {
        id: 'lsdl4_b25',
        lessonNumber: 25,
        title: 'Bài 25. Thành phố Hồ Chí Minh',
        topic: 'Nam Bộ',
        semester: 2,
        week: 32,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 25. Thành phố Hồ Chí Minh. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 25. Thành phố Hồ Chí Minh" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 25. Thành phố Hồ Chí Minh".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
      {
        id: 'lsdl4_b26',
        lessonNumber: 26,
        title: 'Bài 26. Địa đạo Củ Chi',
        topic: 'Nam Bộ',
        semester: 2,
        week: 33,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 26. Địa đạo Củ Chi. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 26. Địa đạo Củ Chi" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 26. Địa đạo Củ Chi".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
      {
        id: 'lsdl4_b27',
        lessonNumber: 27,
        title: 'Bài 27. Ôn tập',
        topic: 'Ôn tập cuối năm',
        semester: 2,
        week: 34,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm tự nhiên, dân cư, lịch sử, văn hóa và lễ hội truyền thống của Bài 27. Ôn tập. Bồi dưỡng tình yêu quê hương, ý thức giữ gìn di sản văn hóa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Đặc điểm tự nhiên hoặc di tích lịch sử nổi bật trong bài "Bài 27. Ôn tập" là gì?',
            options: ['Thông tin chính xác theo chuẩn SGK Lịch sử và Địa lí 4', 'Thông tin nhầm lẫn với vùng miền khác', 'Thời gian lịch sử chưa đúng', 'Địa danh không thuộc bài học'],
            answer: 0,
            explanation: 'Ghi nhớ chính xác vị trí địa lí và giá trị lịch sử của vùng miền.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu cảm nghĩ hoặc những nét đặc sắc về tự nhiên, văn hóa của vùng đất trong bài "Bài 27. Ôn tập".',
            guide: 'Học sinh trình bày mạch lạc ít nhất 2 đặc điểm nổi bật và bài học giữ gìn truyền thống.'
          }
        ]
      },
    ]
  };

  if (typeof window !== 'undefined') {
    window.SGK_LS_DL_4 = LS_DL_4_DATA;
    if (window.SGK_REGISTRY && typeof window.SGK_REGISTRY.registerBook === 'function') {
      window.SGK_REGISTRY.registerBook(4, 'lich_su_dia_li', LS_DL_4_DATA);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = LS_DL_4_DATA;
  }
})(typeof window !== 'undefined' ? window : this);
