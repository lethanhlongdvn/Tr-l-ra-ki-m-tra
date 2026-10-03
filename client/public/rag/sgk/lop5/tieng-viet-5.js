/**
 * SỐ HÓA SÁCH GIÁO KHOA TIẾNG VIỆT LỚP 5
 * Bộ sách: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Nhà xuất bản: NXB Giáo dục Việt Nam
 * Chương trình Giáo dục phổ thông 2018
 */

(function(global) {
  'use strict';

  const TIENG_VIET_5_DATA = {
    metadata: {
      grade: 5,
      subjectId: 'tieng_viet',
      subjectName: 'Tiếng Việt',
      bookName: 'Tiếng Việt 5 - Kết nối tri thức với cuộc sống',
      publisher: 'Nhà xuất bản Giáo dục Việt Nam',
      totalWeeks: 35,
      totalPeriods: 245,
      volumes: [
        { volume: 1, name: 'Tập 1 (Học kì I - Tuần 1 đến 18)', weeks: '1-18' },
        { volume: 2, name: 'Tập 2 (Học kì II - Tuần 19 đến 35)', weeks: '19-35' }
      ]
    },
    topics: [
      { id: 'tv5_cd1', name: 'Chủ điểm 1: Thế giới tuổi thơ', semester: 1, weeks: '1-4', volume: 1 },
      { id: 'tv5_cd2', name: 'Chủ điểm 2: Chủ nhân tương lai', semester: 1, weeks: '5-8', volume: 1 },
      { id: 'tv5_cd3', name: 'Ôn tập & Đánh giá giữa Học kì 1', semester: 1, weeks: '9-10', volume: 1 },
      { id: 'tv5_cd4', name: 'Chủ điểm 3: Khúc ca hoà bình', semester: 1, weeks: '11-14', volume: 1 },
      { id: 'tv5_cd5', name: 'Chủ điểm 4: Đất nước ngàn năm', semester: 1, weeks: '15-17', volume: 1 },
      { id: 'tv5_cd6', name: 'Ôn tập & Đánh giá cuối Học kì 1', semester: 1, weeks: '18', volume: 1 },
      { id: 'tv5_cd7', name: 'Chủ điểm 5: Giai điệu mùa xuân', semester: 2, weeks: '19-22', volume: 2 },
      { id: 'tv5_cd8', name: 'Chủ điểm 6: Con người và tự nhiên', semester: 2, weeks: '23-26', volume: 2 },
      { id: 'tv5_cd9', name: 'Ôn tập & Đánh giá giữa Học kì 2', semester: 2, weeks: '27-28', volume: 2 },
      { id: 'tv5_cd10', name: 'Chủ điểm 7: Tiếp bước cha anh', semester: 2, weeks: '29-31', volume: 2 },
      { id: 'tv5_cd11', name: 'Chủ điểm 8: Thế giới của chúng ta', semester: 2, weeks: '32-34', volume: 2 },
      { id: 'tv5_cd12', name: 'Ôn tập & Đánh giá cuối năm học', semester: 2, weeks: '35', volume: 2 }
    ],
    lessons: [
      {
        id: 'tv5_b1',
        lessonNumber: 1,
        title: 'Bài 1: Thanh âm của gió',
        topic: 'THẾ GIỚI TUỔI THƠ',
        volume: 1,
        semester: 1,
        week: 1,
        reading: {
          title: 'Thanh âm của gió',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 1: Thanh âm của gió.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập về danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết bài văn kể chuyện sáng tạo',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Thanh âm của gió" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 1: Thanh âm của gió", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b2',
        lessonNumber: 2,
        title: 'Bài 2: Cánh đồng hoa',
        topic: 'THẾ GIỚI TUỔI THƠ',
        volume: 1,
        semester: 1,
        week: 1,
        reading: {
          title: 'Cánh đồng hoa',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 2: Cánh đồng hoa.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết bài văn kể chuyện sáng tạo (tiếp theo)',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Cánh đồng hoa" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 2: Cánh đồng hoa", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b3',
        lessonNumber: 3,
        title: 'Bài 3: Tuổi Ngựa',
        topic: 'THẾ GIỚI TUỔI THƠ',
        volume: 1,
        semester: 1,
        week: 2,
        reading: {
          title: 'Tuổi Ngựa',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 3: Tuổi Ngựa.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Đại từ',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Lập dàn ý cho bài văn kể chuyện sáng tạo',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Tuổi Ngựa" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 3: Tuổi Ngựa", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b4',
        lessonNumber: 4,
        title: 'Bài 4: Bến sông tuổi thơ',
        topic: 'THẾ GIỚI TUỔI THƠ',
        volume: 1,
        semester: 1,
        week: 2,
        reading: {
          title: 'Bến sông tuổi thơ',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 4: Bến sông tuổi thơ.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Viết bài văn kể chuyện sáng tạo',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Bến sông tuổi thơ" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 4: Bến sông tuổi thơ", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b5',
        lessonNumber: 5,
        title: 'Bài 5: Tiếng hạt nảy mầm',
        topic: 'THẾ GIỚI TUỔI THƠ',
        volume: 1,
        semester: 1,
        week: 3,
        reading: {
          title: 'Tiếng hạt nảy mầm',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 5: Tiếng hạt nảy mầm.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập về đại từ',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Đánh giá, chỉnh sửa bài văn kể chuyện sáng tạo',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Tiếng hạt nảy mầm" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 5: Tiếng hạt nảy mầm", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b6',
        lessonNumber: 6,
        title: 'Bài 6: Ngôi sao sân cỏ',
        topic: 'THẾ GIỚI TUỔI THƠ',
        volume: 1,
        semester: 1,
        week: 3,
        reading: {
          title: 'Ngôi sao sân cỏ',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 6: Ngôi sao sân cỏ.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết báo cáo công việc',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Ngôi sao sân cỏ" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 6: Ngôi sao sân cỏ", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b7',
        lessonNumber: 7,
        title: 'Bài 7: Bộ sưu tập độc đáo',
        topic: 'THẾ GIỚI TUỔI THƠ',
        volume: 1,
        semester: 1,
        week: 4,
        reading: {
          title: 'Bộ sưu tập độc đáo',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 7: Bộ sưu tập độc đáo.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập về đại từ (tiếp theo)',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Viết báo cáo công việc',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Bộ sưu tập độc đáo" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 7: Bộ sưu tập độc đáo", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b8',
        lessonNumber: 8,
        title: 'Bài 8: Hành tinh kì lạ',
        topic: 'THẾ GIỚI TUỔI THƠ',
        volume: 1,
        semester: 1,
        week: 4,
        reading: {
          title: 'Hành tinh kì lạ',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 8: Hành tinh kì lạ.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Đánh giá, chỉnh sửa báo cáo công việc',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Hành tinh kì lạ" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 8: Hành tinh kì lạ", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b9',
        lessonNumber: 9,
        title: 'Bài 9: Trước cổng trời',
        topic: 'THIÊN NHIÊN KÌ THÚ',
        volume: 1,
        semester: 1,
        week: 5,
        reading: {
          title: 'Trước cổng trời',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 9: Trước cổng trời.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Từ đồng nghĩa',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết bài văn tả phong cảnh',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Trước cổng trời" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 9: Trước cổng trời", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b10',
        lessonNumber: 10,
        title: 'Bài 10: Kì diệu rừng xanh',
        topic: 'THIÊN NHIÊN KÌ THÚ',
        volume: 1,
        semester: 1,
        week: 5,
        reading: {
          title: 'Kì diệu rừng xanh',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 10: Kì diệu rừng xanh.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết bài văn tả phong cảnh (tiếp theo)',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Kì diệu rừng xanh" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 10: Kì diệu rừng xanh", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b11',
        lessonNumber: 11,
        title: 'Bài 11: Hang Sơn Đoòng – những điều kì thú',
        topic: 'THIÊN NHIÊN KÌ THÚ',
        volume: 1,
        semester: 1,
        week: 6,
        reading: {
          title: 'Hang Sơn Đoòng – những điều kì thú',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 11: Hang Sơn Đoòng – những điều kì thú.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập về từ đồng nghĩa',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Viết mở bài và kết bài cho bài văn tả phong cảnh',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Hang Sơn Đoòng – những điều kì thú" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 11: Hang Sơn Đoòng – những điều kì thú", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b12',
        lessonNumber: 12,
        title: 'Bài 12: Những hòn đảo trên vịnh Hạ Long',
        topic: 'THIÊN NHIÊN KÌ THÚ',
        volume: 1,
        semester: 1,
        week: 6,
        reading: {
          title: 'Những hòn đảo trên vịnh Hạ Long',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 12: Những hòn đảo trên vịnh Hạ Long.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Quan sát phong cảnh',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Những hòn đảo trên vịnh Hạ Long" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 12: Những hòn đảo trên vịnh Hạ Long", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b13',
        lessonNumber: 13,
        title: 'Bài 13: Mầm non',
        topic: 'THIÊN NHIÊN KÌ THÚ',
        volume: 1,
        semester: 1,
        week: 7,
        reading: {
          title: 'Mầm non',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 13: Mầm non.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Từ đa nghĩa',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Lập dàn ý cho bài văn tả phong cảnh',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Mầm non" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 13: Mầm non", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b14',
        lessonNumber: 14,
        title: 'Bài 14: Những ngọn núi nóng rẫy',
        topic: 'THIÊN NHIÊN KÌ THÚ',
        volume: 1,
        semester: 1,
        week: 7,
        reading: {
          title: 'Những ngọn núi nóng rẫy',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 14: Những ngọn núi nóng rẫy.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Viết đoạn văn tả phong cảnh',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Những ngọn núi nóng rẫy" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 14: Những ngọn núi nóng rẫy", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b15',
        lessonNumber: 15,
        title: 'Bài 15: Bài ca về mặt trời',
        topic: 'THIÊN NHIÊN KÌ THÚ',
        volume: 1,
        semester: 1,
        week: 8,
        reading: {
          title: 'Bài ca về mặt trời',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 15: Bài ca về mặt trời.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập về từ đa nghĩa',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Viết bài văn tả phong cảnh',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Bài ca về mặt trời" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 15: Bài ca về mặt trời", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b16',
        lessonNumber: 16,
        title: 'Bài 16: Xin chào, Xa-ha-ra',
        topic: 'THIÊN NHIÊN KÌ THÚ',
        volume: 1,
        semester: 1,
        week: 8,
        reading: {
          title: 'Xin chào, Xa-ha-ra',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 16: Xin chào, Xa-ha-ra.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Đánh giá, chỉnh sửa bài văn tả phong cảnh',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Xin chào, Xa-ha-ra" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 16: Xin chào, Xa-ha-ra", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b17',
        lessonNumber: 17,
        title: 'Ôn tập và Đánh giá giữa học kì I',
        topic: 'ÔN TẬP VÀ ĐÁNH GIÁ GIỮA HỌC KÌ I',
        volume: 1,
        semester: 1,
        week: 9,
        reading: {
          title: 'Ôn tập và Đánh giá giữa học kì I',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Ôn tập và Đánh giá giữa học kì I.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Luyện viết đoạn văn / bài văn',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Ôn tập và Đánh giá giữa học kì I" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Ôn tập và Đánh giá giữa học kì I", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b18',
        lessonNumber: 18,
        title: 'Bài 17: Thư gửi các học sinh',
        topic: 'TRÊN CON ĐƯỜNG HỌC TẬP',
        volume: 1,
        semester: 1,
        week: 10,
        reading: {
          title: 'Thư gửi các học sinh',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 17: Thư gửi các học sinh.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Sử dụng từ điển',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết đoạn văn giới thiệu nhân vật trong một cuốn sách',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Thư gửi các học sinh" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 17: Thư gửi các học sinh", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b19',
        lessonNumber: 19,
        title: 'Bài 18: Tấm gương tự học',
        topic: 'TRÊN CON ĐƯỜNG HỌC TẬP',
        volume: 1,
        semester: 1,
        week: 10,
        reading: {
          title: 'Tấm gương tự học',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 18: Tấm gương tự học.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Tìm ý cho đoạn văn giới thiệu nhân vật trong một cuốn sách',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Tấm gương tự học" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 18: Tấm gương tự học", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b20',
        lessonNumber: 20,
        title: 'Bài 19: Trải nghiệm để sáng tạo',
        topic: 'TRÊN CON ĐƯỜNG HỌC TẬP',
        volume: 1,
        semester: 1,
        week: 11,
        reading: {
          title: 'Trải nghiệm để sáng tạo',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 19: Trải nghiệm để sáng tạo.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập sử dụng từ điển',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Viết đoạn văn giới thiệu nhân vật trong một cuốn sách',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Trải nghiệm để sáng tạo" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 19: Trải nghiệm để sáng tạo", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b21',
        lessonNumber: 21,
        title: 'Bài 20: Khổ luyện thành tài',
        topic: 'TRÊN CON ĐƯỜNG HỌC TẬP',
        volume: 1,
        semester: 1,
        week: 11,
        reading: {
          title: 'Khổ luyện thành tài',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 20: Khổ luyện thành tài.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Đánh giá, chỉnh sửa đoạn văn giới thiệu nhân vật trong một cuốn sách',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Khổ luyện thành tài" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 20: Khổ luyện thành tài", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b22',
        lessonNumber: 22,
        title: 'Bài 21: Thế giới trong trang sách',
        topic: 'TRÊN CON ĐƯỜNG HỌC TẬP',
        volume: 1,
        semester: 1,
        week: 12,
        reading: {
          title: 'Thế giới trong trang sách',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 21: Thế giới trong trang sách.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Dấu gạch ngang',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Thế giới trong trang sách" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 21: Thế giới trong trang sách", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b23',
        lessonNumber: 23,
        title: 'Bài 22: Từ những câu chuyện ấu thơ',
        topic: 'TRÊN CON ĐƯỜNG HỌC TẬP',
        volume: 1,
        semester: 1,
        week: 12,
        reading: {
          title: 'Từ những câu chuyện ấu thơ',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 22: Từ những câu chuyện ấu thơ.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Tìm ý cho đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Từ những câu chuyện ấu thơ" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 22: Từ những câu chuyện ấu thơ", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b24',
        lessonNumber: 24,
        title: 'Bài 23: Giới thiệu sách Dế Mèn phiêu lưu kí',
        topic: 'TRÊN CON ĐƯỜNG HỌC TẬP',
        volume: 1,
        semester: 1,
        week: 13,
        reading: {
          title: 'Giới thiệu sách Dế Mèn phiêu lưu kí',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 23: Giới thiệu sách Dế Mèn phiêu lưu kí.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập về dấu gạch ngang',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Viết đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Giới thiệu sách Dế Mèn phiêu lưu kí" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 23: Giới thiệu sách Dế Mèn phiêu lưu kí", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b25',
        lessonNumber: 25,
        title: 'Bài 24: Tinh thần học tập của nhà Phi-lít',
        topic: 'TRÊN CON ĐƯỜNG HỌC TẬP',
        volume: 1,
        semester: 1,
        week: 13,
        reading: {
          title: 'Tinh thần học tập của nhà Phi-lít',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 24: Tinh thần học tập của nhà Phi-lít.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Đánh giá, chỉnh sửa đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Tinh thần học tập của nhà Phi-lít" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 24: Tinh thần học tập của nhà Phi-lít", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b26',
        lessonNumber: 26,
        title: 'Bài 25: Tiếng đàn ba-la-lai-ca trên sông Đà',
        topic: 'NGHỆ THUẬT MUÔN MÀU',
        volume: 1,
        semester: 1,
        week: 14,
        reading: {
          title: 'Tiếng đàn ba-la-lai-ca trên sông Đà',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 25: Tiếng đàn ba-la-lai-ca trên sông Đà.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Biện pháp điệp từ, điệp ngữ',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Tiếng đàn ba-la-lai-ca trên sông Đà" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 25: Tiếng đàn ba-la-lai-ca trên sông Đà", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b27',
        lessonNumber: 27,
        title: 'Bài 26: Trí tưởng tượng phong phú',
        topic: 'NGHỆ THUẬT MUÔN MÀU',
        volume: 1,
        semester: 1,
        week: 14,
        reading: {
          title: 'Trí tưởng tượng phong phú',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 26: Trí tưởng tượng phong phú.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Tìm ý cho đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Trí tưởng tượng phong phú" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 26: Trí tưởng tượng phong phú", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b28',
        lessonNumber: 28,
        title: 'Bài 27: Tranh làng Hồ',
        topic: 'NGHỆ THUẬT MUÔN MÀU',
        volume: 1,
        semester: 1,
        week: 15,
        reading: {
          title: 'Tranh làng Hồ',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 27: Tranh làng Hồ.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập về điệp từ, điệp ngữ',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Viết đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Tranh làng Hồ" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 27: Tranh làng Hồ", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b29',
        lessonNumber: 29,
        title: 'Bài 28: Tập hát quan họ',
        topic: 'NGHỆ THUẬT MUÔN MÀU',
        volume: 1,
        semester: 1,
        week: 15,
        reading: {
          title: 'Tập hát quan họ',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 28: Tập hát quan họ.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Đánh giá, chỉnh sửa đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Tập hát quan họ" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 28: Tập hát quan họ", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b30',
        lessonNumber: 30,
        title: 'Bài 29: Phim hoạt hình Chú ốc sên bay',
        topic: 'NGHỆ THUẬT MUÔN MÀU',
        volume: 1,
        semester: 1,
        week: 16,
        reading: {
          title: 'Phim hoạt hình Chú ốc sên bay',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 29: Phim hoạt hình Chú ốc sên bay.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Kết từ',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết đoạn văn giới thiệu nhân vật trong một bộ phim hoạt hình',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Phim hoạt hình Chú ốc sên bay" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 29: Phim hoạt hình Chú ốc sên bay", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b31',
        lessonNumber: 31,
        title: 'Bài 30: Nghệ thuật múa ba lê',
        topic: 'NGHỆ THUẬT MUÔN MÀU',
        volume: 1,
        semester: 1,
        week: 16,
        reading: {
          title: 'Nghệ thuật múa ba lê',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 30: Nghệ thuật múa ba lê.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Tìm ý cho đoạn văn giới thiệu nhân vật trong một bộ phim hoạt hình',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Nghệ thuật múa ba lê" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 30: Nghệ thuật múa ba lê", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b32',
        lessonNumber: 32,
        title: 'Bài 31: Một ngôi chùa độc đáo',
        topic: 'NGHỆ THUẬT MUÔN MÀU',
        volume: 1,
        semester: 1,
        week: 17,
        reading: {
          title: 'Một ngôi chùa độc đáo',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 31: Một ngôi chùa độc đáo.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập về kết từ',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Viết đoạn văn giới thiệu nhân vật trong một bộ phim hoạt hình',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Một ngôi chùa độc đáo" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 31: Một ngôi chùa độc đáo", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b33',
        lessonNumber: 33,
        title: 'Bài 32: Sự tích chú Tễu',
        topic: 'NGHỆ THUẬT MUÔN MÀU',
        volume: 1,
        semester: 1,
        week: 17,
        reading: {
          title: 'Sự tích chú Tễu',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 32: Sự tích chú Tễu.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Đánh giá, chỉnh sửa đoạn văn giới thiệu nhân vật trong một bộ phim hoạt hình',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Sự tích chú Tễu" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 32: Sự tích chú Tễu", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b34',
        lessonNumber: 34,
        title: 'Ôn tập và Đánh giá cuối học kì I',
        topic: 'ÔN TẬP VÀ ĐÁNH GIÁ CUỐI HỌC KÌ I',
        volume: 1,
        semester: 1,
        week: 18,
        reading: {
          title: 'Ôn tập và Đánh giá cuối học kì I',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Ôn tập và Đánh giá cuối học kì I.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Luyện viết đoạn văn / bài văn',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Ôn tập và Đánh giá cuối học kì I" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Ôn tập và Đánh giá cuối học kì I", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b35',
        lessonNumber: 35,
        title: 'Bài 1: Tiếng hát của người đá',
        topic: 'VẺ ĐẸP CUỘC SỐNG',
        volume: 2,
        semester: 2,
        week: 19,
        reading: {
          title: 'Tiếng hát của người đá',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 1: Tiếng hát của người đá.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Câu đơn và câu ghép',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết bài văn tả người',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Tiếng hát của người đá" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 1: Tiếng hát của người đá", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b36',
        lessonNumber: 36,
        title: 'Bài 2: Khúc hát ru những em bé lớn trên lưng mẹ',
        topic: 'VẺ ĐẸP CUỘC SỐNG',
        volume: 2,
        semester: 2,
        week: 19,
        reading: {
          title: 'Khúc hát ru những em bé lớn trên lưng mẹ',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 2: Khúc hát ru những em bé lớn trên lưng mẹ.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Viết mở bài và kết bài cho bài văn tả người',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Khúc hát ru những em bé lớn trên lưng mẹ" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 2: Khúc hát ru những em bé lớn trên lưng mẹ", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b37',
        lessonNumber: 37,
        title: 'Bài 3: Hạt gạo làng ta',
        topic: 'VẺ ĐẸP CUỘC SỐNG',
        volume: 2,
        semester: 2,
        week: 20,
        reading: {
          title: 'Hạt gạo làng ta',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 3: Hạt gạo làng ta.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Cách nối các vế câu ghép',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Quan sát để viết bài văn tả người',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Hạt gạo làng ta" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 3: Hạt gạo làng ta", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b38',
        lessonNumber: 38,
        title: 'Bài 4: Hộp quà màu thiên thanh',
        topic: 'VẺ ĐẸP CUỘC SỐNG',
        volume: 2,
        semester: 2,
        week: 20,
        reading: {
          title: 'Hộp quà màu thiên thanh',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 4: Hộp quà màu thiên thanh.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Lập dàn ý cho bài văn tả người',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Hộp quà màu thiên thanh" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 4: Hộp quà màu thiên thanh", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b39',
        lessonNumber: 39,
        title: 'Bài 5: Giỏ hoa tháng Năm',
        topic: 'VẺ ĐẸP CUỘC SỐNG',
        volume: 2,
        semester: 2,
        week: 21,
        reading: {
          title: 'Giỏ hoa tháng Năm',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 5: Giỏ hoa tháng Năm.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Cách nối các vế câu ghép (Tiếp theo)',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Viết đoạn văn tả người',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Giỏ hoa tháng Năm" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 5: Giỏ hoa tháng Năm", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b40',
        lessonNumber: 40,
        title: 'Bài 6: Thư của bố',
        topic: 'VẺ ĐẸP CUỘC SỐNG',
        volume: 2,
        semester: 2,
        week: 21,
        reading: {
          title: 'Thư của bố',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 6: Thư của bố.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Viết bài văn tả người (Bài viết số 1)',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Thư của bố" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 6: Thư của bố", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b41',
        lessonNumber: 41,
        title: 'Bài 7: Đoàn thuyền đánh cá',
        topic: 'VẺ ĐẸP CUỘC SỐNG',
        volume: 2,
        semester: 2,
        week: 22,
        reading: {
          title: 'Đoàn thuyền đánh cá',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 7: Đoàn thuyền đánh cá.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập về câu ghép',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Đánh giá, chỉnh sửa bài văn tả người',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Đoàn thuyền đánh cá" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 7: Đoàn thuyền đánh cá", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b42',
        lessonNumber: 42,
        title: 'Bài 8: Khu rừng của Mát',
        topic: 'VẺ ĐẸP CUỘC SỐNG',
        volume: 2,
        semester: 2,
        week: 22,
        reading: {
          title: 'Khu rừng của Mát',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 8: Khu rừng của Mát.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Viết bài văn tả người (Bài viết số 2)',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Khu rừng của Mát" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 8: Khu rừng của Mát", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b43',
        lessonNumber: 43,
        title: 'Bài 9: Hội thổi cơm thi ở Đồng Vân',
        topic: 'HƯƠNG SẮC TRĂM MIỀN',
        volume: 2,
        semester: 2,
        week: 23,
        reading: {
          title: 'Hội thổi cơm thi ở Đồng Vân',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 9: Hội thổi cơm thi ở Đồng Vân.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Liên kết câu bằng cách lặp từ ngữ',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết đoạn văn thể hiện tình cảm, cảm xúc về một sự việc',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Hội thổi cơm thi ở Đồng Vân" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 9: Hội thổi cơm thi ở Đồng Vân", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b44',
        lessonNumber: 44,
        title: 'Bài 10: Những búp chè trên cây cổ thụ',
        topic: 'HƯƠNG SẮC TRĂM MIỀN',
        volume: 2,
        semester: 2,
        week: 23,
        reading: {
          title: 'Những búp chè trên cây cổ thụ',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 10: Những búp chè trên cây cổ thụ.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Tìm ý cho đoạn văn thể hiện tình cảm, cảm xúc về một sự việc',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Những búp chè trên cây cổ thụ" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 10: Những búp chè trên cây cổ thụ", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b45',
        lessonNumber: 45,
        title: 'Bài 11: Hương cốm mùa thu',
        topic: 'HƯƠNG SẮC TRĂM MIỀN',
        volume: 2,
        semester: 2,
        week: 24,
        reading: {
          title: 'Hương cốm mùa thu',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 11: Hương cốm mùa thu.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Liên kết câu bằng từ ngữ nối',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Viết đoạn văn thể hiện tình cảm, cảm xúc về một sự việc',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Hương cốm mùa thu" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 11: Hương cốm mùa thu", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b46',
        lessonNumber: 46,
        title: 'Bài 12: Vũ điệu trên nền thổ cẩm',
        topic: 'HƯƠNG SẮC TRĂM MIỀN',
        volume: 2,
        semester: 2,
        week: 24,
        reading: {
          title: 'Vũ điệu trên nền thổ cẩm',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 12: Vũ điệu trên nền thổ cẩm.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Đánh giá, chỉnh sửa đoạn văn thể hiện tình cảm, cảm xúc về một sự việc',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Vũ điệu trên nền thổ cẩm" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 12: Vũ điệu trên nền thổ cẩm", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b47',
        lessonNumber: 47,
        title: 'Bài 13: Đàn t\'rưng – tiếng ca đại ngàn',
        topic: 'HƯƠNG SẮC TRĂM MIỀN',
        volume: 2,
        semester: 2,
        week: 25,
        reading: {
          title: 'Đàn t\'rưng – tiếng ca đại ngàn',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 13: Đàn t\'rưng – tiếng ca đại ngàn.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Liên kết câu bằng từ ngữ thay thế',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết chương trình hoạt động',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Đàn t\'rưng – tiếng ca đại ngàn" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 13: Đàn t\'rưng – tiếng ca đại ngàn", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b48',
        lessonNumber: 48,
        title: 'Bài 14: Đường quê Đồng Tháp Mười',
        topic: 'HƯƠNG SẮC TRĂM MIỀN',
        volume: 2,
        semester: 2,
        week: 25,
        reading: {
          title: 'Đường quê Đồng Tháp Mười',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 14: Đường quê Đồng Tháp Mười.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Viết chương trình hoạt động (Bài viết số 1)',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Đường quê Đồng Tháp Mười" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 14: Đường quê Đồng Tháp Mười", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b49',
        lessonNumber: 49,
        title: 'Bài 15: Xuồng ba lá quê tôi',
        topic: 'HƯƠNG SẮC TRĂM MIỀN',
        volume: 2,
        semester: 2,
        week: 26,
        reading: {
          title: 'Xuồng ba lá quê tôi',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 15: Xuồng ba lá quê tôi.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập về liên kết câu trong đoạn văn',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Đánh giá, chỉnh sửa chương trình hoạt động',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Xuồng ba lá quê tôi" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 15: Xuồng ba lá quê tôi", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b50',
        lessonNumber: 50,
        title: 'Bài 16: Về thăm Đất Mũi',
        topic: 'HƯƠNG SẮC TRĂM MIỀN',
        volume: 2,
        semester: 2,
        week: 26,
        reading: {
          title: 'Về thăm Đất Mũi',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 16: Về thăm Đất Mũi.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Viết chương trình hoạt động (Bài viết số 2)',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Về thăm Đất Mũi" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 16: Về thăm Đất Mũi", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b51',
        lessonNumber: 51,
        title: 'Ôn tập và Đánh giá giữa học kì II',
        topic: 'ÔN TẬP VÀ ĐÁNH GIÁ GIỮA HỌC KÌ II',
        volume: 2,
        semester: 2,
        week: 27,
        reading: {
          title: 'Ôn tập và Đánh giá giữa học kì II',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Ôn tập và Đánh giá giữa học kì II.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Luyện viết đoạn văn / bài văn',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Ôn tập và Đánh giá giữa học kì II" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Ôn tập và Đánh giá giữa học kì II", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b52',
        lessonNumber: 52,
        title: 'Bài 17: Nghìn năm văn hiến',
        topic: 'TIẾP BƯỚC CHA ÔNG',
        volume: 2,
        semester: 2,
        week: 28,
        reading: {
          title: 'Nghìn năm văn hiến',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 17: Nghìn năm văn hiến.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập về đại từ và kết từ',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết đoạn văn nêu ý kiến tán thành một sự việc, hiện tượng',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Nghìn năm văn hiến" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 17: Nghìn năm văn hiến", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b53',
        lessonNumber: 53,
        title: 'Bài 18: Người thầy của muôn đời',
        topic: 'TIẾP BƯỚC CHA ÔNG',
        volume: 2,
        semester: 2,
        week: 28,
        reading: {
          title: 'Người thầy của muôn đời',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 18: Người thầy của muôn đời.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Tìm ý cho đoạn văn nêu ý kiến tán thành một sự việc, hiện tượng',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Người thầy của muôn đời" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 18: Người thầy của muôn đời", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b54',
        lessonNumber: 54,
        title: 'Bài 19: Danh y Tuệ Tĩnh',
        topic: 'TIẾP BƯỚC CHA ÔNG',
        volume: 2,
        semester: 2,
        week: 29,
        reading: {
          title: 'Danh y Tuệ Tĩnh',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 19: Danh y Tuệ Tĩnh.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập về từ đồng nghĩa và từ đa nghĩa',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Viết đoạn văn nêu ý kiến tán thành một sự việc, hiện tượng (Bài viết số 1)',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Danh y Tuệ Tĩnh" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 19: Danh y Tuệ Tĩnh", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b55',
        lessonNumber: 55,
        title: 'Bài 20: Cụ Đồ Chiểu',
        topic: 'TIẾP BƯỚC CHA ÔNG',
        volume: 2,
        semester: 2,
        week: 29,
        reading: {
          title: 'Cụ Đồ Chiểu',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 20: Cụ Đồ Chiểu.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Đánh giá, chỉnh sửa đoạn văn nêu ý kiến tán thành một sự việc, hiện tượng',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Cụ Đồ Chiểu" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 20: Cụ Đồ Chiểu", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b56',
        lessonNumber: 56,
        title: 'Bài 21: Anh hùng Lao động Trần Đại Nghĩa',
        topic: 'TIẾP BƯỚC CHA ÔNG',
        volume: 2,
        semester: 2,
        week: 30,
        reading: {
          title: 'Anh hùng Lao động Trần Đại Nghĩa',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 21: Anh hùng Lao động Trần Đại Nghĩa.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập về câu ghép',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Viết đoạn văn nêu ý kiến tán thành một sự việc, hiện tượng (Bài viết số 2)',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Anh hùng Lao động Trần Đại Nghĩa" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 21: Anh hùng Lao động Trần Đại Nghĩa", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b57',
        lessonNumber: 57,
        title: 'Bài 22: Bộ đội về làng',
        topic: 'TIẾP BƯỚC CHA ÔNG',
        volume: 2,
        semester: 2,
        week: 30,
        reading: {
          title: 'Bộ đội về làng',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 22: Bộ đội về làng.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Luyện viết đoạn văn thể hiện tình cảm, cảm xúc về một sự việc',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Bộ đội về làng" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 22: Bộ đội về làng", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b58',
        lessonNumber: 58,
        title: 'Bài 23: Về ngôi nhà đang xây',
        topic: 'TIẾP BƯỚC CHA ÔNG',
        volume: 2,
        semester: 2,
        week: 31,
        reading: {
          title: 'Về ngôi nhà đang xây',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 23: Về ngôi nhà đang xây.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Viết hoa danh từ chung để thể hiện sự tôn trọng đặc biệt',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Luyện từ và câu: Viết hoa danh từ chung để thể hiện sự tôn trọng đặc biệt',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Về ngôi nhà đang xây" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 23: Về ngôi nhà đang xây", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b59',
        lessonNumber: 59,
        title: 'Bài 24: Việt Nam quê hương ta',
        topic: 'TIẾP BƯỚC CHA ÔNG',
        volume: 2,
        semester: 2,
        week: 31,
        reading: {
          title: 'Việt Nam quê hương ta',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 24: Việt Nam quê hương ta.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Luyện viết bài văn tả phong cảnh',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Việt Nam quê hương ta" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 24: Việt Nam quê hương ta", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b60',
        lessonNumber: 60,
        title: 'Bài 25: Bài ca trái đất',
        topic: 'THẾ GIỚI CỦA CHÚNG TA',
        volume: 2,
        semester: 2,
        week: 32,
        reading: {
          title: 'Bài ca trái đất',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 25: Bài ca trái đất.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Cách viết tên người và tên địa lí nước ngoài',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Luyện tập lập dàn ý cho bài văn tả người',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Bài ca trái đất" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 25: Bài ca trái đất", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b61',
        lessonNumber: 61,
        title: 'Bài 26: Những con hạc giấy',
        topic: 'THẾ GIỚI CỦA CHÚNG TA',
        volume: 2,
        semester: 2,
        week: 32,
        reading: {
          title: 'Những con hạc giấy',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 26: Những con hạc giấy.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Luyện viết bài văn tả người',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Những con hạc giấy" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 26: Những con hạc giấy", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b62',
        lessonNumber: 62,
        title: 'Bài 27: Một người hùng thầm lặng',
        topic: 'THẾ GIỚI CỦA CHÚNG TA',
        volume: 2,
        semester: 2,
        week: 33,
        reading: {
          title: 'Một người hùng thầm lặng',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 27: Một người hùng thầm lặng.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập về dấu gạch ngang',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết đoạn văn nêu ý kiến phản đối một sự việc, hiện tượng',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Một người hùng thầm lặng" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 27: Một người hùng thầm lặng", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b63',
        lessonNumber: 63,
        title: 'Bài 28: Giờ Trái Đất',
        topic: 'THẾ GIỚI CỦA CHÚNG TA',
        volume: 2,
        semester: 2,
        week: 33,
        reading: {
          title: 'Giờ Trái Đất',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 28: Giờ Trái Đất.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Tìm ý cho đoạn văn nêu ý kiến phản đối một sự việc, hiện tượng',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Giờ Trái Đất" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 28: Giờ Trái Đất", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b64',
        lessonNumber: 64,
        title: 'Bài 29: Điện thoại di động',
        topic: 'THẾ GIỚI CỦA CHÚNG TA',
        volume: 2,
        semester: 2,
        week: 34,
        reading: {
          title: 'Điện thoại di động',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 29: Điện thoại di động.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập về liên kết câu trong đoạn văn',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Viết đoạn văn nêu ý kiến phản đối một sự việc, hiện tượng',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Điện thoại di động" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 29: Điện thoại di động", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b65',
        lessonNumber: 65,
        title: 'Bài 30: Thành phố thông minh Mát-xđa',
        topic: 'THẾ GIỚI CỦA CHÚNG TA',
        volume: 2,
        semester: 2,
        week: 34,
        reading: {
          title: 'Thành phố thông minh Mát-xđa',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Bài 30: Thành phố thông minh Mát-xđa.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Đánh giá, chỉnh sửa đoạn văn nêu ý kiến phản đối một sự việc, hiện tượng',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Thành phố thông minh Mát-xđa" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Bài 30: Thành phố thông minh Mát-xđa", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
      {
        id: 'tv5_b66',
        lessonNumber: 66,
        title: 'Ôn tập và Đánh giá cuối năm học',
        topic: 'ÔN TẬP VÀ ĐÁNH GIÁ CUỐI NĂM HỌC',
        volume: 2,
        semester: 2,
        week: 35,
        reading: {
          title: 'Ôn tập và Đánh giá cuối năm học',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, hình ảnh đẹp trong bài đọc Ôn tập và Đánh giá cuối năm học.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa hình ảnh/từ ngữ, vận dụng liên hệ bài học cuộc sống.'
        },
        languagePractice: {
          topic: 'Luyện tập từ ngữ và ngữ pháp',
          skills: 'Nhận biết và vận dụng kiến thức từ vựng, ngữ pháp, các biện pháp tu từ và dấu câu trong giao tiếp.'
        },
        writing: {
          topic: 'Luyện viết đoạn văn / bài văn',
          skills: 'Luyện tập quan sát, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Ôn tập và Đánh giá cuối năm học" là gì?',
            options: ['Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và con người', 'Miêu tả cuộc sống nơi thành thị nhộn nhịp', 'Kể về một chuyến du lịch xa xôi', 'Giải thích hiện tượng tự nhiên đơn thuần'],
            answer: 0,
            explanation: 'Văn bản hướng tới giáo dục cảm xúc, bồi dưỡng tình yêu quê hương, đất nước và con người.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện rõ biện pháp nghệ thuật được sử dụng?',
            options: ['Từ ngữ gợi hình, gợi cảm hoặc từ láy', 'Từ ngữ chuyên ngành kĩ thuật', 'Từ ngữ mang tính trừu tượng', 'Từ vay mượn thông thường'],
            answer: 0,
            explanation: 'Biện pháp so sánh/nhân hóa/điệp từ giúp câu văn sinh động, giàu hình ảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và kiến thức đã học trong bài "Ôn tập và Đánh giá cuối năm học", em hãy viết đoạn văn ngắn (4 - 6 câu) nêu cảm xúc hoặc bài học em rút ra được.',
            guide: 'Đoạn văn có câu mở đoạn, các câu phát triển ý liên kết mạch lạc, câu kết đoạn đọng lại suy nghĩ sâu sắc.'
          }
        ]
      },
    ]
  };

  if (typeof window !== 'undefined') {
    window.SGK_TIENG_VIET_5 = TIENG_VIET_5_DATA;
    if (window.SGK_REGISTRY && typeof window.SGK_REGISTRY.registerBook === 'function') {
      window.SGK_REGISTRY.registerBook(5, 'tieng_viet', TIENG_VIET_5_DATA);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = TIENG_VIET_5_DATA;
  }
})(typeof window !== 'undefined' ? window : this);
