/**
 * SỐ HÓA SÁCH GIÁO KHOA TIẾNG VIỆT LỚP 4
 * Bộ sách: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Nhà xuất bản: NXB Giáo dục Việt Nam
 * Chương trình Giáo dục phổ thông 2018
 */

(function(global) {
  'use strict';

  const TIENG_VIET_4_DATA = {
    metadata: {
      grade: 4,
      subjectId: 'tieng_viet',
      subjectName: 'Tiếng Việt',
      bookName: 'Tiếng Việt 4 - Kết nối tri thức với cuộc sống',
      publisher: 'Nhà xuất bản Giáo dục Việt Nam',
      totalWeeks: 35,
      totalPeriods: 245,
      volumes: [
        { volume: 1, name: 'Tập 1 (Học kì I - Tuần 1 đến 18)', weeks: '1-18' },
        { volume: 2, name: 'Tập 2 (Học kì II - Tuần 19 đến 35)', weeks: '19-35' }
      ]
    },
    topics: [
      { id: 'tv4_cd1', name: 'Chủ điểm 1: Mỗi người một vẻ', semester: 1, weeks: '1-4', volume: 1 },
      { id: 'tv4_cd2', name: 'Chủ điểm 2: Trải nghiệm và khám phá', semester: 1, weeks: '5-8', volume: 1 },
      { id: 'tv4_cd3', name: 'Ôn tập & Đánh giá giữa Học kì 1', semester: 1, weeks: '9-10', volume: 1 },
      { id: 'tv4_cd4', name: 'Chủ điểm 3: Niềm vui sáng tạo', semester: 1, weeks: '11-14', volume: 1 },
      { id: 'tv4_cd5', name: 'Chủ điểm 4: Chắp cánh ước mơ', semester: 1, weeks: '15-17', volume: 1 },
      { id: 'tv4_cd6', name: 'Ôn tập & Đánh giá cuối Học kì 1', semester: 1, weeks: '18', volume: 1 },
      { id: 'tv4_cd7', name: 'Chủ điểm 5: Sống để yêu thương', semester: 2, weeks: '19-22', volume: 2 },
      { id: 'tv4_cd8', name: 'Chủ điểm 6: Uống nước nhớ nguồn', semester: 2, weeks: '23-26', volume: 2 },
      { id: 'tv4_cd9', name: 'Ôn tập & Đánh giá giữa Học kì 2', semester: 2, weeks: '27-28', volume: 2 },
      { id: 'tv4_cd10', name: 'Chủ điểm 7: Quê hương trong tôi', semester: 2, weeks: '29-31', volume: 2 },
      { id: 'tv4_cd11', name: 'Chủ điểm 8: Vì một thế giới bình yên', semester: 2, weeks: '32-34', volume: 2 },
      { id: 'tv4_cd12', name: 'Ôn tập & Đánh giá cuối năm học', semester: 2, weeks: '35', volume: 2 }
    ],
    lessons: [
      {
        id: 'tv4_b1',
        lessonNumber: 1,
        title: 'Bài 1  Điều kì diệu',
        topic: 'Chủ điểm 1: Mỗi người một vẻ',
        volume: 1,
        semester: 1,
        week: 1,
        reading: {
          title: 'Điều kì diệu',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 1  Điều kì diệu.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Danh từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Tìm hiểu đoạn văn và câu chủ đề',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Điều kì diệu" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 1  Điều kì diệu", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b2',
        lessonNumber: 2,
        title: 'Bài 2 Thi nhạc',
        topic: 'Chủ điểm 1: Mỗi người một vẻ',
        volume: 1,
        semester: 1,
        week: 1,
        reading: {
          title: 'Thi nhạc',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 2 Thi nhạc.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết đoạn văn nêu ý kiến',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Thi nhạc" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 2 Thi nhạc", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b3',
        lessonNumber: 3,
        title: 'Bài 3 Anh em sinh đôi',
        topic: 'Chủ điểm 1: Mỗi người một vẻ',
        volume: 1,
        semester: 1,
        week: 2,
        reading: {
          title: 'Anh em sinh đôi',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 3 Anh em sinh đôi.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Danh từ chung, danh từ riêng',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Tìm ý cho đoạn văn nêu ý kiến',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Anh em sinh đôi" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 3 Anh em sinh đôi", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b4',
        lessonNumber: 4,
        title: 'Bài 4 Công chúa và người dẫn chuyện',
        topic: 'Chủ điểm 1: Mỗi người một vẻ',
        volume: 1,
        semester: 1,
        week: 2,
        reading: {
          title: 'Công chúa và người dẫn chuyện',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 4 Công chúa và người dẫn chuyện.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Viết đoạn văn nêu ý kiến',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Công chúa và người dẫn chuyện" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 4 Công chúa và người dẫn chuyện", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b5',
        lessonNumber: 5,
        title: 'Bài 5 Thằn lằn xanh và tắc kè',
        topic: 'Chủ điểm 1: Mỗi người một vẻ',
        volume: 1,
        semester: 1,
        week: 3,
        reading: {
          title: 'Thằn lằn xanh và tắc kè',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 5 Thằn lằn xanh và tắc kè.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập về danh từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Trả bài viết đoạn văn nêu ý kiến',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Thằn lằn xanh và tắc kè" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 5 Thằn lằn xanh và tắc kè", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b6',
        lessonNumber: 6,
        title: 'Bài 6 Nghệ sĩ trống',
        topic: 'Chủ điểm 1: Mỗi người một vẻ',
        volume: 1,
        semester: 1,
        week: 3,
        reading: {
          title: 'Nghệ sĩ trống',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 6 Nghệ sĩ trống.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết báo cáo thảo luận nhóm',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Nghệ sĩ trống" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 6 Nghệ sĩ trống", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b7',
        lessonNumber: 7,
        title: 'Bài 7 Những bức chân dung',
        topic: 'Chủ điểm 1: Mỗi người một vẻ',
        volume: 1,
        semester: 1,
        week: 4,
        reading: {
          title: 'Những bức chân dung',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 7 Những bức chân dung.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Quy tắc viết tên cơ quan, tổ chức',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Lập dàn ý cho báo cáo thảo luận nhóm',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Những bức chân dung" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 7 Những bức chân dung", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b8',
        lessonNumber: 8,
        title: 'Bài 8 Đò ngang',
        topic: 'Chủ điểm 1: Mỗi người một vẻ',
        volume: 1,
        semester: 1,
        week: 4,
        reading: {
          title: 'Đò ngang',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 8 Đò ngang.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Viết báo cáo thảo luận nhóm',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Đò ngang" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 8 Đò ngang", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b9',
        lessonNumber: 9,
        title: 'Bài 9 Bầu trời trong quả trứng',
        topic: 'Chủ điểm 2: Trải nghiệm và khám phá',
        volume: 1,
        semester: 1,
        week: 5,
        reading: {
          title: 'Bầu trời trong quả trứng',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 9 Bầu trời trong quả trứng.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Động từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết bài văn thuật lại một sự việc',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Bầu trời trong quả trứng" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 9 Bầu trời trong quả trứng", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b10',
        lessonNumber: 10,
        title: 'Bài 10 Tiếng nói của cỏ cây',
        topic: 'Chủ điểm 2: Trải nghiệm và khám phá',
        volume: 1,
        semester: 1,
        week: 5,
        reading: {
          title: 'Tiếng nói của cỏ cây',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 10 Tiếng nói của cỏ cây.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Lập dàn ý cho bài văn thuật lại một sự việc',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Tiếng nói của cỏ cây" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 10 Tiếng nói của cỏ cây", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b11',
        lessonNumber: 11,
        title: 'Bài 11 Tập làm văn',
        topic: 'Chủ điểm 2: Trải nghiệm và khám phá',
        volume: 1,
        semester: 1,
        week: 6,
        reading: {
          title: 'Tập làm văn',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 11 Tập làm văn.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập về động từ.',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Viết bài văn thuật lại một sự việc',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Tập làm văn" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 11 Tập làm văn", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b12',
        lessonNumber: 12,
        title: 'Bài 12 Nhà phát minh 6 tuổi',
        topic: 'Chủ điểm 2: Trải nghiệm và khám phá',
        volume: 1,
        semester: 1,
        week: 6,
        reading: {
          title: 'Nhà phát minh 6 tuổi',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 12 Nhà phát minh 6 tuổi.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết bài văn kể lại một câu chuyện',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Nhà phát minh 6 tuổi" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 12 Nhà phát minh 6 tuổi", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b13',
        lessonNumber: 13,
        title: 'Bài 13 Con vẹt xanh',
        topic: 'Chủ điểm 2: Trải nghiệm và khám phá',
        volume: 1,
        semester: 1,
        week: 7,
        reading: {
          title: 'Con vẹt xanh',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 13 Con vẹt xanh.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập về động từ.',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Luyện viết mở bài, kết bài cho BV kể lại một câu chuyện',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Con vẹt xanh" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 13 Con vẹt xanh", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b14',
        lessonNumber: 14,
        title: 'Bài 14 Chân trời cuối phố',
        topic: 'Chủ điểm 2: Trải nghiệm và khám phá',
        volume: 1,
        semester: 1,
        week: 7,
        reading: {
          title: 'Chân trời cuối phố',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 14 Chân trời cuối phố.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Lập dàn ý cho bài văn kể lại một câu chuyện',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Chân trời cuối phố" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 14 Chân trời cuối phố", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b15',
        lessonNumber: 15,
        title: 'Bài 15 Gặt chữ trên non',
        topic: 'Chủ điểm 2: Trải nghiệm và khám phá',
        volume: 1,
        semester: 1,
        week: 8,
        reading: {
          title: 'Gặt chữ trên non',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 15 Gặt chữ trên non.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Cách dùng và công dụng của từ điển',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Viết bài văn kể lại một câu chuyện',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Gặt chữ trên non" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 15 Gặt chữ trên non", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b16',
        lessonNumber: 16,
        title: 'Bài 16 Trước ngày xa quê',
        topic: 'Chủ điểm 2: Trải nghiệm và khám phá',
        volume: 1,
        semester: 1,
        week: 8,
        reading: {
          title: 'Trước ngày xa quê',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 16 Trước ngày xa quê.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Trả bài văn kể lại một câu chuyện',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Trước ngày xa quê" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 16 Trước ngày xa quê", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b17',
        lessonNumber: 17,
        title: 'Bài 17 Vẽ màu',
        topic: 'Chủ điểm 3: Niềm vui sáng tạo',
        volume: 1,
        semester: 1,
        week: 10,
        reading: {
          title: 'Vẽ màu',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 17 Vẽ màu.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Biện pháp nhân hoá',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết đoạn văn tưởng tượng',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Vẽ màu" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 17 Vẽ màu", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b18',
        lessonNumber: 18,
        title: 'Bài 18 Đồng cỏ nở hoa',
        topic: 'Chủ điểm 3: Niềm vui sáng tạo',
        volume: 1,
        semester: 1,
        week: 10,
        reading: {
          title: 'Đồng cỏ nở hoa',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 18 Đồng cỏ nở hoa.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Tìm ý cho đoạn văn tưởng tượng',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Đồng cỏ nở hoa" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 18 Đồng cỏ nở hoa", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b19',
        lessonNumber: 19,
        title: 'Bài 19 Thanh âm của núi',
        topic: 'Chủ điểm 3: Niềm vui sáng tạo',
        volume: 1,
        semester: 1,
        week: 11,
        reading: {
          title: 'Thanh âm của núi',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 19 Thanh âm của núi.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập vê biện pháp nhân hoá',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Viết đoạn văn tưởng tượng',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Thanh âm của núi" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 19 Thanh âm của núi", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b20',
        lessonNumber: 20,
        title: 'Bài 20 Bầu trời mùa thu',
        topic: 'Chủ điểm 3: Niềm vui sáng tạo',
        volume: 1,
        semester: 1,
        week: 11,
        reading: {
          title: 'Bầu trời mùa thu',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 20 Bầu trời mùa thu.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Trả bài viết đoạn văn tưởng tượng',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Bầu trời mùa thu" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 20 Bầu trời mùa thu", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b21',
        lessonNumber: 21,
        title: 'Bài 21 Làm thỏ con bằng giấy',
        topic: 'Chủ điểm 3: Niềm vui sáng tạo',
        volume: 1,
        semester: 1,
        week: 12,
        reading: {
          title: 'Làm thỏ con bằng giấy',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 21 Làm thỏ con bằng giấy.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết hướng dẫn thực hiện một công việc',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Làm thỏ con bằng giấy" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 21 Làm thỏ con bằng giấy", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b22',
        lessonNumber: 22,
        title: 'Bài 22 Bức tường có nhiều phép lạ',
        topic: 'Chủ điểm 3: Niềm vui sáng tạo',
        volume: 1,
        semester: 1,
        week: 12,
        reading: {
          title: 'Bức tường có nhiều phép lạ',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 22 Bức tường có nhiều phép lạ.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Viết hướng dẫn thực hiện một công việc',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Bức tường có nhiều phép lạ" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 22 Bức tường có nhiều phép lạ", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b23',
        lessonNumber: 23,
        title: 'Bài 23 Bét-tô-ven và bản xô-nát Ánh trăng',
        topic: 'Chủ điểm 3: Niềm vui sáng tạo',
        volume: 1,
        semester: 1,
        week: 13,
        reading: {
          title: 'Bét-tô-ven và bản xô-nát Ánh trăng',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 23 Bét-tô-ven và bản xô-nát Ánh trăng.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập về tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết đơn',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Bét-tô-ven và bản xô-nát Ánh trăng" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 23 Bét-tô-ven và bản xô-nát Ánh trăng", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b24',
        lessonNumber: 24,
        title: 'Bài 24: Người tìm đường lên các vì sao',
        topic: 'Chủ điểm 3: Niềm vui sáng tạo',
        volume: 1,
        semester: 1,
        week: 13,
        reading: {
          title: 'Người tìm đường lên các vì sao',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 24: Người tìm đường lên các vì sao.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Viết đơn.',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Người tìm đường lên các vì sao" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 24: Người tìm đường lên các vì sao", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b25',
        lessonNumber: 25,
        title: 'Bài 25: Bay cùng ước mơ',
        topic: 'Chủ điểm 4: Chắp cánh ước mơ',
        volume: 1,
        semester: 1,
        week: 14,
        reading: {
          title: 'Bay cùng ước mơ',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 25: Bay cùng ước mơ.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập về tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết bài văn miêu tả con vật.',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Bay cùng ước mơ" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 25: Bay cùng ước mơ", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b26',
        lessonNumber: 26,
        title: 'Bài 26: Con trai người làm vườn',
        topic: 'Chủ điểm 4: Chắp cánh ước mơ',
        volume: 1,
        semester: 1,
        week: 14,
        reading: {
          title: 'Con trai người làm vườn',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 26: Con trai người làm vườn.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Quan sát con vật',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Con trai người làm vườn" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 26: Con trai người làm vườn", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b27',
        lessonNumber: 27,
        title: 'Bài 27: Nếu em có một khu vườn.',
        topic: 'Chủ điểm 4: Chắp cánh ước mơ',
        volume: 1,
        semester: 1,
        week: 15,
        reading: {
          title: 'Nếu em có một khu vườn.',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 27: Nếu em có một khu vườn..',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Dấu gạch ngang',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Luyện viết đoạn văn miêu tả con vật.',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Nếu em có một khu vườn." là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 27: Nếu em có một khu vườn.", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b28',
        lessonNumber: 28,
        title: 'Bài 28 Bốn mùa mơ ước',
        topic: 'Chủ điểm 4: Chắp cánh ước mơ',
        volume: 1,
        semester: 1,
        week: 15,
        reading: {
          title: 'Bốn mùa mơ ước',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 28 Bốn mùa mơ ước.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Lập dàn ý cho bài văn miêu tả con vật.',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Bốn mùa mơ ước" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 28 Bốn mùa mơ ước", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b29',
        lessonNumber: 29,
        title: 'Bài 29: Ở vương quốc tương lai',
        topic: 'Chủ điểm 4: Chắp cánh ước mơ',
        volume: 1,
        semester: 1,
        week: 16,
        reading: {
          title: 'Ở vương quốc tương lai',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 29: Ở vương quốc tương lai.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập về dấu gạch ngang',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Viết bài văn miêu tả con vật.',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Ở vương quốc tương lai" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 29: Ở vương quốc tương lai", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b30',
        lessonNumber: 30,
        title: 'Bài 30  Cánh chim nhỏ',
        topic: 'Chủ điểm 4: Chắp cánh ước mơ',
        volume: 1,
        semester: 1,
        week: 16,
        reading: {
          title: 'Cánh chim nhỏ',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 30  Cánh chim nhỏ.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Trả bài văn miêu tả con vật.',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Cánh chim nhỏ" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 30  Cánh chim nhỏ", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b31',
        lessonNumber: 31,
        title: 'Bài 31 Nếu chúng mình có phép lạ',
        topic: 'Chủ điểm 4: Chắp cánh ước mơ',
        volume: 1,
        semester: 1,
        week: 17,
        reading: {
          title: 'Nếu chúng mình có phép lạ',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 31 Nếu chúng mình có phép lạ.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập về danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết thư',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Nếu chúng mình có phép lạ" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 31 Nếu chúng mình có phép lạ", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b32',
        lessonNumber: 32,
        title: 'Bài 32: Anh Ba',
        topic: 'Chủ điểm 4: Chắp cánh ước mơ',
        volume: 1,
        semester: 1,
        week: 17,
        reading: {
          title: 'Anh Ba',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 32: Anh Ba.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Viết thư',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Anh Ba" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 32: Anh Ba", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b33',
        lessonNumber: 33,
        title: 'Bài 1 Hải thượng Lãn Ông',
        topic: 'Chủ điểm 5: Sống để yêu thương',
        volume: 2,
        semester: 2,
        week: 19,
        reading: {
          title: 'Hải thượng Lãn Ông',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 1 Hải thượng Lãn Ông.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Câu',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết đoạn văn nêu tình cảm, cảm xúc.',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Hải thượng Lãn Ông" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 1 Hải thượng Lãn Ông", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b34',
        lessonNumber: 34,
        title: 'Bài 2 Vệt phấn trên mặt bàn',
        topic: 'Chủ điểm 5: Sống để yêu thương',
        volume: 2,
        semester: 2,
        week: 19,
        reading: {
          title: 'Vệt phấn trên mặt bàn',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 2 Vệt phấn trên mặt bàn.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Tìm ý cho đoạn văn nêu tình cảm, cảm xúc về một người gần gũi, thân thiết',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Vệt phấn trên mặt bàn" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 2 Vệt phấn trên mặt bàn", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b35',
        lessonNumber: 35,
        title: 'Bài 3 Ông bụt đã đến',
        topic: 'Chủ điểm 5: Sống để yêu thương',
        volume: 2,
        semester: 2,
        week: 20,
        reading: {
          title: 'Ông bụt đã đến',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 3 Ông bụt đã đến.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Hai thành phần chính của câu.',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Viết đoạn văn nêu tình cảm, cảm xúc về một người gần gũi, thân thiết .',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Ông bụt đã đến" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 3 Ông bụt đã đến", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b36',
        lessonNumber: 36,
        title: 'Bài 4 Quả ngọt cuối mùa.',
        topic: 'Chủ điểm 5: Sống để yêu thương',
        volume: 2,
        semester: 2,
        week: 20,
        reading: {
          title: 'Quả ngọt cuối mùa.',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 4 Quả ngọt cuối mùa..',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Tìm ý cho đoạn văn nêu tình cảm, cảm xúc về một nhân vật trong văn học.',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Quả ngọt cuối mùa." là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 4 Quả ngọt cuối mùa.", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b37',
        lessonNumber: 37,
        title: 'Bài 5 Tờ báo tường của tôi',
        topic: 'Chủ điểm 5: Sống để yêu thương',
        volume: 2,
        semester: 2,
        week: 21,
        reading: {
          title: 'Tờ báo tường của tôi',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 5 Tờ báo tường của tôi.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập về chủ ngữ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Viết đoạn văn nêu tình cảm, cảm xúc về một nhân vật trong văn học.',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Tờ báo tường của tôi" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 5 Tờ báo tường của tôi", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b38',
        lessonNumber: 38,
        title: 'Bài 6 Tiếng ru',
        topic: 'Chủ điểm 5: Sống để yêu thương',
        volume: 2,
        semester: 2,
        week: 21,
        reading: {
          title: 'Tiếng ru',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 6 Tiếng ru.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Trả bài viết đoạn văn nêu tình cảm, cảm xúc về một nhân vật trong văn học.',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Tiếng ru" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 6 Tiếng ru", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b39',
        lessonNumber: 39,
        title: 'Bài 7 Con muốn làm một cái cây',
        topic: 'Chủ điểm 5: Sống để yêu thương',
        volume: 2,
        semester: 2,
        week: 22,
        reading: {
          title: 'Con muốn làm một cái cây',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 7 Con muốn làm một cái cây.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập về vị ngữ.',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết hướng dẫn sử dụng một sản phẩm.',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Con muốn làm một cái cây" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 7 Con muốn làm một cái cây", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b40',
        lessonNumber: 40,
        title: 'Bài 8 Trên khóm tre đầu ngõ',
        topic: 'Chủ điểm 5: Sống để yêu thương',
        volume: 2,
        semester: 2,
        week: 22,
        reading: {
          title: 'Trên khóm tre đầu ngõ',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 8 Trên khóm tre đầu ngõ.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Viết hướng dẫn sử dụng một sản phẩm.',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Trên khóm tre đầu ngõ" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 8 Trên khóm tre đầu ngõ", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b41',
        lessonNumber: 41,
        title: 'Bài 9 Sự tích con Rồng, cháu Tiên.',
        topic: 'Chủ điểm 6: Uống nước nhớ nguồn',
        volume: 2,
        semester: 2,
        week: 23,
        reading: {
          title: 'Sự tích con Rồng, cháu Tiên.',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 9 Sự tích con Rồng, cháu Tiên..',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập về hai thành phần chính của câu.',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Lập dàn ý cho bài văn kể lại một câu chuyện.',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Sự tích con Rồng, cháu Tiên." là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 9 Sự tích con Rồng, cháu Tiên.", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b42',
        lessonNumber: 42,
        title: 'Bài 10 Cảm xúc Trường Sa',
        topic: 'Chủ điểm 6: Uống nước nhớ nguồn',
        volume: 2,
        semester: 2,
        week: 23,
        reading: {
          title: 'Cảm xúc Trường Sa',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 10 Cảm xúc Trường Sa.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Viết bài văn kể lại một câu chuyện.',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Cảm xúc Trường Sa" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 10 Cảm xúc Trường Sa", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b43',
        lessonNumber: 43,
        title: 'Bài 11 Sáng tháng Năm',
        topic: 'Chủ điểm 6: Uống nước nhớ nguồn',
        volume: 2,
        semester: 2,
        week: 24,
        reading: {
          title: 'Sáng tháng Năm',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 11 Sáng tháng Năm.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Trạng ngữ.',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Trả bài văn kể lại một câu chuyện.',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Sáng tháng Năm" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 11 Sáng tháng Năm", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b44',
        lessonNumber: 44,
        title: 'Bài 12 Chàng trai Làng Phù Ủng',
        topic: 'Chủ điểm 6: Uống nước nhớ nguồn',
        volume: 2,
        semester: 2,
        week: 24,
        reading: {
          title: 'Chàng trai Làng Phù Ủng',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 12 Chàng trai Làng Phù Ủng.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Viết đoạn văn nêu ý kiến',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Chàng trai Làng Phù Ủng" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 12 Chàng trai Làng Phù Ủng", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b45',
        lessonNumber: 45,
        title: 'Bài 13 Vườn của ông tôi.',
        topic: 'Chủ điểm 6: Uống nước nhớ nguồn',
        volume: 2,
        semester: 2,
        week: 25,
        reading: {
          title: 'Vườn của ông tôi.',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 13 Vườn của ông tôi..',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Trạng ngữ chỉ thời gian, nơi chốn .',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Trả bài viết đoạn văn nêu ý kiến',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Vườn của ông tôi." là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 13 Vườn của ông tôi.", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b46',
        lessonNumber: 46,
        title: 'Bài 14 Trong lời mẹ hát.',
        topic: 'Chủ điểm 6: Uống nước nhớ nguồn',
        volume: 2,
        semester: 2,
        week: 25,
        reading: {
          title: 'Trong lời mẹ hát.',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 14 Trong lời mẹ hát..',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Lập dàn ý cho một bài văn thuật lại một sự việc',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Trong lời mẹ hát." là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 14 Trong lời mẹ hát.", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b47',
        lessonNumber: 47,
        title: 'Bài 15 Người thầy đầu tiên của bố tôi',
        topic: 'Chủ điểm 6: Uống nước nhớ nguồn',
        volume: 2,
        semester: 2,
        week: 26,
        reading: {
          title: 'Người thầy đầu tiên của bố tôi',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 15 Người thầy đầu tiên của bố tôi.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Trạng ngữ chỉ nguyên nhân, mục đích',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Viết bài văn thuật lại một sự việc',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Người thầy đầu tiên của bố tôi" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 15 Người thầy đầu tiên của bố tôi", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b48',
        lessonNumber: 48,
        title: 'Bài 16 Ngựa biên phòng',
        topic: 'Chủ điểm 6: Uống nước nhớ nguồn',
        volume: 2,
        semester: 2,
        week: 26,
        reading: {
          title: 'Ngựa biên phòng',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 16 Ngựa biên phòng.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Trả bài văn thuật lại một sự việc',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Ngựa biên phòng" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 16 Ngựa biên phòng", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b49',
        lessonNumber: 49,
        title: 'Bài 17 Cây đa quê hương',
        topic: 'Chủ điểm 7: Quê hương trong tôi',
        volume: 2,
        semester: 2,
        week: 28,
        reading: {
          title: 'Cây đa quê hương',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 17 Cây đa quê hương.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Trạng ngữ chỉ phương tiện',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết bài văn miêu tả cây cối.',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Cây đa quê hương" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 17 Cây đa quê hương", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b50',
        lessonNumber: 50,
        title: 'Bài 18 Bước mùa xuân',
        topic: 'Chủ điểm 7: Quê hương trong tôi',
        volume: 2,
        semester: 2,
        week: 28,
        reading: {
          title: 'Bước mùa xuân',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 18 Bước mùa xuân.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Tìm hiểu cách viết bài văn miêu tả cây cối (Tiếp theo)',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Bước mùa xuân" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 18 Bước mùa xuân", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b51',
        lessonNumber: 51,
        title: 'Bài 19 Đi hội Chùa Hương',
        topic: 'Chủ điểm 7: Quê hương trong tôi',
        volume: 2,
        semester: 2,
        week: 29,
        reading: {
          title: 'Đi hội Chùa Hương',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 19 Đi hội Chùa Hương.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Dấu ngoặc kép',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Quan sát cây cối',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Đi hội Chùa Hương" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 19 Đi hội Chùa Hương", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b52',
        lessonNumber: 52,
        title: 'Bài 20 Chiều ngoại ô',
        topic: 'Chủ điểm 7: Quê hương trong tôi',
        volume: 2,
        semester: 2,
        week: 29,
        reading: {
          title: 'Chiều ngoại ô',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 20 Chiều ngoại ô.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Luyện viết văn miêu tả cây cối.',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Chiều ngoại ô" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 20 Chiều ngoại ô", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b53',
        lessonNumber: 53,
        title: 'Bài 21 Những cánh buồm',
        topic: 'Chủ điểm 7: Quê hương trong tôi',
        volume: 2,
        semester: 2,
        week: 30,
        reading: {
          title: 'Những cánh buồm',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 21 Những cánh buồm.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Dấu ngoặc đơn',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Luyện viết mở bài, kết bài cho bài văn miêu tả cây cối',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Những cánh buồm" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 21 Những cánh buồm", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b54',
        lessonNumber: 54,
        title: 'Bài 22 Cái cầu',
        topic: 'Chủ điểm 7: Quê hương trong tôi',
        volume: 2,
        semester: 2,
        week: 30,
        reading: {
          title: 'Cái cầu',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 22 Cái cầu.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Lập dàn ý cho bài văn miêu tả cây cối.',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Cái cầu" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 22 Cái cầu", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b55',
        lessonNumber: 55,
        title: 'Bài 23 Đường đi Sa Pa',
        topic: 'Chủ điểm 7: Quê hương trong tôi',
        volume: 2,
        semester: 2,
        week: 31,
        reading: {
          title: 'Đường đi Sa Pa',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 23 Đường đi Sa Pa.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập viết tên cơ quan, tổ chức.',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Viết bài văn miêu tả cây cối.',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Đường đi Sa Pa" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 23 Đường đi Sa Pa", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b56',
        lessonNumber: 56,
        title: 'Bài 24 Quê ngoại',
        topic: 'Chủ điểm 7: Quê hương trong tôi',
        volume: 2,
        semester: 2,
        week: 31,
        reading: {
          title: 'Quê ngoại',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 24 Quê ngoại.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Trả bài văn miêu tả cây cối.',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Quê ngoại" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 24 Quê ngoại", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b57',
        lessonNumber: 57,
        title: 'Bài 25 Khu bảo tồn động vật hoang dã Ngô-rông-gô-rô',
        topic: 'Chủ điểm 8: Vì một thế giới bình yên',
        volume: 2,
        semester: 2,
        week: 32,
        reading: {
          title: 'Khu bảo tồn động vật hoang dã Ngô-rông-gô-rô',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 25 Khu bảo tồn động vật hoang dã Ngô-rông-gô-rô.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Lựa chọn từ ngữ.',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Viết đoạn văn tưởng tượng.',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Khu bảo tồn động vật hoang dã Ngô-rông-gô-rô" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 25 Khu bảo tồn động vật hoang dã Ngô-rông-gô-rô", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b58',
        lessonNumber: 58,
        title: 'Bài 26 Ngôi nhà của yêu thương',
        topic: 'Chủ điểm 8: Vì một thế giới bình yên',
        volume: 2,
        semester: 2,
        week: 32,
        reading: {
          title: 'Ngôi nhà của yêu thương',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 26 Ngôi nhà của yêu thương.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Trả bài viết đoạn văn tưởng tượng.',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Ngôi nhà của yêu thương" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 26 Ngôi nhà của yêu thương", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b59',
        lessonNumber: 59,
        title: 'Bài 27 Băng tan',
        topic: 'Chủ điểm 8: Vì một thế giới bình yên',
        volume: 2,
        semester: 2,
        week: 33,
        reading: {
          title: 'Băng tan',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 27 Băng tan.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập lựa chọn từ ngữ.',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Viết đoạn văn tưởng tượng.',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Băng tan" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 27 Băng tan", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b60',
        lessonNumber: 60,
        title: 'Bài 28 Chuyến du lịch thú vị',
        topic: 'Chủ điểm 8: Vì một thế giới bình yên',
        volume: 2,
        semester: 2,
        week: 33,
        reading: {
          title: 'Chuyến du lịch thú vị',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 28 Chuyến du lịch thú vị.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Hướng dẫn cách viết thư',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Chuyến du lịch thú vị" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 28 Chuyến du lịch thú vị", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b61',
        lessonNumber: 61,
        title: 'Bài 29 Lễ hội ở Nhật Bản',
        topic: 'Chủ điểm 8: Vì một thế giới bình yên',
        volume: 2,
        semester: 2,
        week: 34,
        reading: {
          title: 'Lễ hội ở Nhật Bản',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 29 Lễ hội ở Nhật Bản.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập về dấu câu',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Viết thư',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Lễ hội ở Nhật Bản" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 29 Lễ hội ở Nhật Bản", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
      {
        id: 'tv4_b62',
        lessonNumber: 62,
        title: 'Bài 30 Ngày hội',
        topic: 'Chủ điểm 8: Vì một thế giới bình yên',
        volume: 2,
        semester: 2,
        week: 34,
        reading: {
          title: 'Ngày hội',
          coreContent: 'Đọc hiểu văn bản nghệ thuật/thông tin, cảm nhận nội dung tư tưởng, tình cảm, vẻ đẹp trong bài đọc Bài 30 Ngày hội.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh, vận dụng liên hệ bản thân.'
        },
        languagePractice: {
          topic: 'Luyện tập danh từ, động từ, tính từ',
          skills: 'Nhận biết và vận dụng các kiến thức từ loại (Danh từ, Động từ, Tính từ), các biện pháp tu từ và dấu câu.'
        },
        writing: {
          topic: 'Viết giấy mời',
          skills: 'Luyện tập quan sát, tìm ý, lập dàn ý, viết đoạn văn hoặc bài văn hoàn chỉnh theo chủ đề.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Nội dung chính của bài đọc "Ngày hội" là gì?',
            options: ['Ca ngợi vẻ đẹp con người, tình yêu thương và bài học cuộc sống', 'Miêu tả một địa danh du lịch xa xôi', 'Kể chuyện hài hước đơn thuần', 'Giải thích kiến thức tự nhiên trừu tượng'],
            answer: 0,
            explanation: 'Văn bản hướng tới bồi dưỡng nhân cách, tình cảm tốt đẹp và tôn trọng sự khác biệt.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ nào thuộc từ loại đang học trong bài?',
            options: ['Từ loại chuẩn xác theo nội dung bài học', 'Từ loại chưa chính xác', 'Từ ghép sai nghĩa', 'Từ mượn không phù hợp'],
            answer: 0,
            explanation: 'Xác định đúng danh từ, động từ hoặc tính từ theo ngữ cảnh.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào chủ điểm và bài học "Bài 30 Ngày hội", em hãy viết đoạn văn ngắn (4 - 5 câu) thể hiện tình cảm, cảm xúc hoặc kể lại trải nghiệm của em.',
            guide: 'Đoạn văn có câu mở đoạn, các câu thân đoạn diễn đạt mạch lạc, câu kết đoạn đọng lại cảm xúc chân thành.'
          }
        ]
      },
    ]
  };

  if (typeof window !== 'undefined') {
    window.SGK_TIENG_VIET_4 = TIENG_VIET_4_DATA;
    if (window.SGK_REGISTRY && typeof window.SGK_REGISTRY.registerBook === 'function') {
      window.SGK_REGISTRY.registerBook(4, 'tieng_viet', TIENG_VIET_4_DATA);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = TIENG_VIET_4_DATA;
  }
})(typeof window !== 'undefined' ? window : this);
