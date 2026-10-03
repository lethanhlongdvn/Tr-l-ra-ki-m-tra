/**
 * SỐ HÓA SÁCH GIÁO KHOA TOÁN LỚP 5
 * Bộ sách: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Nhà xuất bản: NXB Giáo dục Việt Nam
 * Chương trình Giáo dục phổ thông 2018
 */

(function(global) {
  'use strict';

  const TOAN_5_DATA = {
    metadata: {
      grade: 5,
      subjectId: 'toan',
      subjectName: 'Toán',
      bookName: 'Toán 5 - Kết nối tri thức với cuộc sống',
      publisher: 'Nhà xuất bản Giáo dục Việt Nam',
      totalWeeks: 35,
      totalPeriods: 175,
      volumes: [
        { volume: 1, name: 'Tập 1 (Học kì I - Tuần 1 đến 18)', weeks: '1-18' },
        { volume: 2, name: 'Tập 2 (Học kì II - Tuần 19 đến 35)', weeks: '19-35' }
      ]
    },
    topics: [
      { id: 'toan5_cd1', name: 'Chủ đề 1: Ôn tập và bổ sung', semester: 1, weeks: '1-4', volume: 1 },
      { id: 'toan5_cd2', name: 'Chủ đề 2: Số thập phân', semester: 1, weeks: '4-8', volume: 1 },
      { id: 'toan5_cd3', name: 'Chủ đề 3: Các phép tính với số thập phân', semester: 1, weeks: '9-16', volume: 1 },
      { id: 'toan5_cd4', name: 'Chủ đề 4: Hình phẳng và diện tích', semester: 1, weeks: '16-17', volume: 1 },
      { id: 'toan5_cd5', name: 'Chủ đề 5: Ôn tập học kì 1', semester: 1, weeks: '18', volume: 1 },
      { id: 'toan5_cd6', name: 'Chủ đề 6: Tỉ số phần trăm và tính toán với tỉ số phần trăm', semester: 2, weeks: '19-21', volume: 2 },
      { id: 'toan5_cd7', name: 'Chủ đề 7: Hình học không gian và thể tích', semester: 2, weeks: '22-26', volume: 2 },
      { id: 'toan5_cd8', name: 'Chủ đề 8: Số đo thời gian. Vận tốc, Quãng đường, Thời gian', semester: 2, weeks: '27-30', volume: 2 },
      { id: 'toan5_cd9', name: 'Chủ đề 9: Một số yếu tố xác suất và thống kê', semester: 2, weeks: '31-32', volume: 2 },
      { id: 'toan5_cd10', name: 'Chủ đề 10: Ôn tập cuối năm', semester: 2, weeks: '33-35', volume: 2 }
    ],
    lessons: [
      {
        id: 'toan5_b1',
        lessonNumber: 1,
        title: 'Tên bài học',
        topic: 'Chủ đề/Mạch nội dung',
        volume: 1,
        semester: 1,
        week: 1,
        duration: 'Thời lượng',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Tên bài học. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Tên bài học:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Tên bài học.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b2',
        lessonNumber: 2,
        title: 'Bài 1. Ôn tập số tự nhiên',
        topic: 'Chủ đề 1: Ôn tập và bổ sung (19 TIẾT)',
        volume: 1,
        semester: 1,
        week: 1,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 1. Ôn tập số tự nhiên. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 1. Ôn tập số tự nhiên:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 1. Ôn tập số tự nhiên.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b3',
        lessonNumber: 3,
        title: 'Bài 2. Ôn tập các phép tính với số tự nhiên',
        topic: 'Chủ đề 1: Ôn tập và bổ sung (19 TIẾT)',
        volume: 1,
        semester: 1,
        week: 1,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 2. Ôn tập các phép tính với số tự nhiên. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 2. Ôn tập các phép tính với số tự nhiên:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 2. Ôn tập các phép tính với số tự nhiên.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b4',
        lessonNumber: 4,
        title: 'Bài 3. Ôn tập phân số',
        topic: 'Chủ đề 1: Ôn tập và bổ sung (19 TIẾT)',
        volume: 1,
        semester: 1,
        week: 1,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 3. Ôn tập phân số. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 3. Ôn tập phân số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 3. Ôn tập phân số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b5',
        lessonNumber: 5,
        title: 'Bài 4. Phân số thập phân',
        topic: 'Chủ đề 1: Ôn tập và bổ sung (19 TIẾT)',
        volume: 1,
        semester: 1,
        week: 2,
        duration: '1 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 4. Phân số thập phân. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 4. Phân số thập phân:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 4. Phân số thập phân.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b6',
        lessonNumber: 6,
        title: 'Bài 5. Ôn tập các phép tính với phân số',
        topic: 'Chủ đề 1: Ôn tập và bổ sung (19 TIẾT)',
        volume: 1,
        semester: 1,
        week: 2,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 5. Ôn tập các phép tính với phân số. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 5. Ôn tập các phép tính với phân số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 5. Ôn tập các phép tính với phân số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b7',
        lessonNumber: 7,
        title: 'Bài 6. Cộng, trừ hai phân số khác mẫu số',
        topic: 'Chủ đề 1: Ôn tập và bổ sung (19 TIẾT)',
        volume: 1,
        semester: 1,
        week: 3,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 6. Cộng, trừ hai phân số khác mẫu số. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 6. Cộng, trừ hai phân số khác mẫu số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 6. Cộng, trừ hai phân số khác mẫu số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b8',
        lessonNumber: 8,
        title: 'Bài 7. Hỗn số',
        topic: 'Chủ đề 1: Ôn tập và bổ sung (19 TIẾT)',
        volume: 1,
        semester: 1,
        week: 3,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 7. Hỗn số. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 7. Hỗn số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 7. Hỗn số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b9',
        lessonNumber: 9,
        title: 'Bài 8. Ôn tập hình học và đo lường',
        topic: 'Chủ đề 1: Ôn tập và bổ sung (19 TIẾT)',
        volume: 1,
        semester: 1,
        week: 3,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 8. Ôn tập hình học và đo lường. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 8. Ôn tập hình học và đo lường:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 8. Ôn tập hình học và đo lường.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b10',
        lessonNumber: 10,
        title: 'Bài 9. Luyện tập chung',
        topic: 'Chủ đề 1: Ôn tập và bổ sung (19 TIẾT)',
        volume: 1,
        semester: 1,
        week: 4,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 9. Luyện tập chung. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 9. Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 9. Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b11',
        lessonNumber: 11,
        title: 'Bài 10. Khái niệm số thập phân',
        topic: 'Chủ đề 2: Số thập phân (12 TIẾT)',
        volume: 1,
        semester: 1,
        week: 4,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 10. Khái niệm số thập phân. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 10. Khái niệm số thập phân:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 10. Khái niệm số thập phân.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b12',
        lessonNumber: 12,
        title: 'Bài 11. So sánh các số thập phân',
        topic: 'Chủ đề 2: Số thập phân (12 TIẾT)',
        volume: 1,
        semester: 1,
        week: 5,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 11. So sánh các số thập phân. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 11. So sánh các số thập phân:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 11. So sánh các số thập phân.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b13',
        lessonNumber: 13,
        title: 'Bài 12. Viết số đo đại lượng dưới dạng số thập phân',
        topic: 'Chủ đề 2: Số thập phân (12 TIẾT)',
        volume: 1,
        semester: 1,
        week: 5,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 12. Viết số đo đại lượng dưới dạng số thập phân. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 12. Viết số đo đại lượng dưới dạng số thập phân:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 12. Viết số đo đại lượng dưới dạng số thập phân.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b14',
        lessonNumber: 14,
        title: 'Bài 13. Làm tròn số thập phân',
        topic: 'Chủ đề 2: Số thập phân (12 TIẾT)',
        volume: 1,
        semester: 1,
        week: 6,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 13. Làm tròn số thập phân. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 13. Làm tròn số thập phân:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 13. Làm tròn số thập phân.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b15',
        lessonNumber: 15,
        title: 'Bài 14. Luyện tập chung',
        topic: 'Chủ đề 2: Số thập phân (12 TIẾT)',
        volume: 1,
        semester: 1,
        week: 6,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 14. Luyện tập chung. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 14. Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 14. Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b16',
        lessonNumber: 16,
        title: 'Bài 15. Ki-lô-mét vuông. Héc-ta',
        topic: 'Chủ đề 3: Một số đơn vị đo diện tích (8 TIẾT)',
        volume: 1,
        semester: 1,
        week: 7,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 15. Ki-lô-mét vuông. Héc-ta. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 15. Ki-lô-mét vuông. Héc-ta:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 15. Ki-lô-mét vuông. Héc-ta.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b17',
        lessonNumber: 17,
        title: 'Bài 16. Các đơn vị đo diện tích',
        topic: 'Chủ đề 3: Một số đơn vị đo diện tích (8 TIẾT)',
        volume: 1,
        semester: 1,
        week: 7,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 16. Các đơn vị đo diện tích. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 16. Các đơn vị đo diện tích:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 16. Các đơn vị đo diện tích.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b18',
        lessonNumber: 18,
        title: 'Bài 17. Thực hành và trải nghiệm với một số đơn vị đo đại lượng',
        topic: 'Chủ đề 3: Một số đơn vị đo diện tích (8 TIẾT)',
        volume: 1,
        semester: 1,
        week: 8,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 17. Thực hành và trải nghiệm với một số đơn vị đo đại lượng. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 17. Thực hành và trải nghiệm với một số đơn vị đo đại lượng:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 17. Thực hành và trải nghiệm với một số đơn vị đo đại lượng.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b19',
        lessonNumber: 19,
        title: 'Bài 18. Luyện tập chung',
        topic: 'Chủ đề 3: Một số đơn vị đo diện tích (8 TIẾT)',
        volume: 1,
        semester: 1,
        week: 8,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 18. Luyện tập chung. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 18. Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 18. Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b20',
        lessonNumber: 20,
        title: 'Bài 19. Phép cộng số thập phân',
        topic: 'Chủ đề 4: Các phép tính với số thập phân (16 TIẾT)',
        volume: 1,
        semester: 1,
        week: 8,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 19. Phép cộng số thập phân. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 19. Phép cộng số thập phân:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 19. Phép cộng số thập phân.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b21',
        lessonNumber: 21,
        title: 'Bài 20. Phép trừ số thập phân',
        topic: 'Chủ đề 4: Các phép tính với số thập phân (16 TIẾT)',
        volume: 1,
        semester: 1,
        week: 9,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 20. Phép trừ số thập phân. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 20. Phép trừ số thập phân:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 20. Phép trừ số thập phân.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b22',
        lessonNumber: 22,
        title: 'Bài 21. Phép nhân số thập phân',
        topic: 'Chủ đề 4: Các phép tính với số thập phân (16 TIẾT)',
        volume: 1,
        semester: 1,
        week: 9,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 21. Phép nhân số thập phân. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 21. Phép nhân số thập phân:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 21. Phép nhân số thập phân.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b23',
        lessonNumber: 23,
        title: 'Bài 22. Phép chia số thập phân',
        topic: 'Chủ đề 4: Các phép tính với số thập phân (16 TIẾT)',
        volume: 1,
        semester: 1,
        week: 10,
        duration: '4 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 22. Phép chia số thập phân. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 22. Phép chia số thập phân:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 22. Phép chia số thập phân.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b24',
        lessonNumber: 24,
        title: 'Bài 23. Nhân, chia số thập phân với 10; 100; 1000; … hoặc với 0,1; 0,01; 0,001; …',
        topic: 'Chủ đề 4: Các phép tính với số thập phân (16 TIẾT)',
        volume: 1,
        semester: 1,
        week: 11,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 23. Nhân, chia số thập phân với 10; 100; 1000; … hoặc với 0,1; 0,01; 0,001; …. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 23. Nhân, chia số thập phân với 10; 100; 1000; … hoặc với 0,1; 0,01; 0,001; …:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 23. Nhân, chia số thập phân với 10; 100; 1000; … hoặc với 0,1; 0,01; 0,001; ….',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b25',
        lessonNumber: 25,
        title: 'Bài 24. Luyện tập chung',
        topic: 'Chủ đề 4: Các phép tính với số thập phân (16 TIẾT)',
        volume: 1,
        semester: 1,
        week: 11,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 24. Luyện tập chung. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 24. Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 24. Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b26',
        lessonNumber: 26,
        title: 'Bài 25. Hình tam giác. Diện tích hình tam giác',
        topic: 'Chủ đề 5: Một số hình phẳng. Chu vi và diện tích (18 TIẾT)',
        volume: 1,
        semester: 1,
        week: 12,
        duration: '4 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 25. Hình tam giác. Diện tích hình tam giác. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 25. Hình tam giác. Diện tích hình tam giác:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 25. Hình tam giác. Diện tích hình tam giác.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b27',
        lessonNumber: 27,
        title: 'Bài 26. Hình thang. Diện tích hình thang',
        topic: 'Chủ đề 5: Một số hình phẳng. Chu vi và diện tích (18 TIẾT)',
        volume: 1,
        semester: 1,
        week: 12,
        duration: '4 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 26. Hình thang. Diện tích hình thang. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 26. Hình thang. Diện tích hình thang:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 26. Hình thang. Diện tích hình thang.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b28',
        lessonNumber: 28,
        title: 'Bài 27. Đường tròn. Chu vi và diện tích hình tròn',
        topic: 'Chủ đề 5: Một số hình phẳng. Chu vi và diện tích (18 TIẾT)',
        volume: 1,
        semester: 1,
        week: 13,
        duration: '5 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 27. Đường tròn. Chu vi và diện tích hình tròn. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 27. Đường tròn. Chu vi và diện tích hình tròn:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 27. Đường tròn. Chu vi và diện tích hình tròn.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b29',
        lessonNumber: 29,
        title: 'Bài 28. Thực hành đo, vẽ, lắp ghép, tạo hình',
        topic: 'Chủ đề 5: Một số hình phẳng. Chu vi và diện tích (18 TIẾT)',
        volume: 1,
        semester: 1,
        week: 14,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 28. Thực hành đo, vẽ, lắp ghép, tạo hình. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 28. Thực hành đo, vẽ, lắp ghép, tạo hình:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 28. Thực hành đo, vẽ, lắp ghép, tạo hình.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b30',
        lessonNumber: 30,
        title: 'Bài 29. Luyện tập chung',
        topic: 'Chủ đề 5: Một số hình phẳng. Chu vi và diện tích (18 TIẾT)',
        volume: 1,
        semester: 1,
        week: 15,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 29. Luyện tập chung. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 29. Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 29. Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b31',
        lessonNumber: 31,
        title: 'Bài 30. Ôn tập số thập phân',
        topic: 'Chủ đề 6: Ôn tập học kì I (17 TIẾT)',
        volume: 1,
        semester: 1,
        week: 15,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 30. Ôn tập số thập phân. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 30. Ôn tập số thập phân:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 30. Ôn tập số thập phân.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b32',
        lessonNumber: 32,
        title: 'Bài 31. Ôn tập các phép tính với số thập phân',
        topic: 'Chủ đề 6: Ôn tập học kì I (17 TIẾT)',
        volume: 1,
        semester: 1,
        week: 16,
        duration: '4 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 31. Ôn tập các phép tính với số thập phân. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 31. Ôn tập các phép tính với số thập phân:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 31. Ôn tập các phép tính với số thập phân.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b33',
        lessonNumber: 33,
        title: 'Bài 32. Ôn tập một số hình phẳng',
        topic: 'Chủ đề 6: Ôn tập học kì I (17 TIẾT)',
        volume: 1,
        semester: 1,
        week: 17,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 32. Ôn tập một số hình phẳng. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 32. Ôn tập một số hình phẳng:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 32. Ôn tập một số hình phẳng.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b34',
        lessonNumber: 34,
        title: 'Bài 33. Ôn tập diện tích, chu vi một số hình phẳng',
        topic: 'Chủ đề 6: Ôn tập học kì I (17 TIẾT)',
        volume: 1,
        semester: 1,
        week: 17,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 33. Ôn tập diện tích, chu vi một số hình phẳng. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 33. Ôn tập diện tích, chu vi một số hình phẳng:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 33. Ôn tập diện tích, chu vi một số hình phẳng.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b35',
        lessonNumber: 35,
        title: 'Bài 34. Ôn tập đo lường',
        topic: 'Chủ đề 6: Ôn tập học kì I (17 TIẾT)',
        volume: 1,
        semester: 1,
        week: 18,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 34. Ôn tập đo lường. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 34. Ôn tập đo lường:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 34. Ôn tập đo lường.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b36',
        lessonNumber: 36,
        title: 'Bài 35. Ôn tập chung',
        topic: 'Chủ đề 6: Ôn tập học kì I (17 TIẾT)',
        volume: 1,
        semester: 1,
        week: 18,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 35. Ôn tập chung. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 35. Ôn tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 35. Ôn tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b37',
        lessonNumber: 37,
        title: 'Bài 36. Tỉ số. Tỉ số phần trăm',
        topic: 'Chủ đề 7: Tỉ số và các bài toán liên quan (16 TIẾT)',
        volume: 2,
        semester: 2,
        week: 19,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 36. Tỉ số. Tỉ số phần trăm. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 36. Tỉ số. Tỉ số phần trăm:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 36. Tỉ số. Tỉ số phần trăm.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b38',
        lessonNumber: 38,
        title: 'Bài 37. Tỉ lệ bản đồ và ứng dụng',
        topic: 'Chủ đề 7: Tỉ số và các bài toán liên quan (16 TIẾT)',
        volume: 2,
        semester: 2,
        week: 19,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 37. Tỉ lệ bản đồ và ứng dụng. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 37. Tỉ lệ bản đồ và ứng dụng:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 37. Tỉ lệ bản đồ và ứng dụng.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b39',
        lessonNumber: 39,
        title: 'Bài 38. Tìm hai số khi biết tổng và tỉ số của hai số đó',
        topic: 'Chủ đề 7: Tỉ số và các bài toán liên quan (16 TIẾT)',
        volume: 2,
        semester: 2,
        week: 19,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 38. Tìm hai số khi biết tổng và tỉ số của hai số đó. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 38. Tìm hai số khi biết tổng và tỉ số của hai số đó:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 38. Tìm hai số khi biết tổng và tỉ số của hai số đó.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b40',
        lessonNumber: 40,
        title: 'Bài 39. Tìm hai số khi biết hiệu và tỉ số của hai số đó',
        topic: 'Chủ đề 7: Tỉ số và các bài toán liên quan (16 TIẾT)',
        volume: 2,
        semester: 2,
        week: 20,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 39. Tìm hai số khi biết hiệu và tỉ số của hai số đó. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 39. Tìm hai số khi biết hiệu và tỉ số của hai số đó:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 39. Tìm hai số khi biết hiệu và tỉ số của hai số đó.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b41',
        lessonNumber: 41,
        title: 'Bài 40. Tìm tỉ số phần trăm của hai số',
        topic: 'Chủ đề 7: Tỉ số và các bài toán liên quan (16 TIẾT)',
        volume: 2,
        semester: 2,
        week: 20,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 40. Tìm tỉ số phần trăm của hai số. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 40. Tìm tỉ số phần trăm của hai số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 40. Tìm tỉ số phần trăm của hai số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b42',
        lessonNumber: 42,
        title: 'Bài 41. Tìm giá trị phần trăm của một số',
        topic: 'Chủ đề 7: Tỉ số và các bài toán liên quan (16 TIẾT)',
        volume: 2,
        semester: 2,
        week: 21,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 41. Tìm giá trị phần trăm của một số. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 41. Tìm giá trị phần trăm của một số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 41. Tìm giá trị phần trăm của một số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b43',
        lessonNumber: 43,
        title: 'Bài 42. Máy tính cầm tay',
        topic: 'Chủ đề 7: Tỉ số và các bài toán liên quan (16 TIẾT)',
        volume: 2,
        semester: 2,
        week: 21,
        duration: '1 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 42. Máy tính cầm tay. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 42. Máy tính cầm tay:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 42. Máy tính cầm tay.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b44',
        lessonNumber: 44,
        title: 'Bài 43. Thực hành và trải nghiệm sử dụng máy tính cầm tay',
        topic: 'Chủ đề 7: Tỉ số và các bài toán liên quan (16 TIẾT)',
        volume: 2,
        semester: 2,
        week: 21,
        duration: '1 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 43. Thực hành và trải nghiệm sử dụng máy tính cầm tay. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 43. Thực hành và trải nghiệm sử dụng máy tính cầm tay:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 43. Thực hành và trải nghiệm sử dụng máy tính cầm tay.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b45',
        lessonNumber: 45,
        title: 'Bài 44. Luyện tập chung',
        topic: 'Chủ đề 7: Tỉ số và các bài toán liên quan (16 TIẾT)',
        volume: 2,
        semester: 2,
        week: 21,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 44. Luyện tập chung. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 44. Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 44. Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b46',
        lessonNumber: 46,
        title: 'Bài 45. Thể tích của một hình',
        topic: 'Chủ đề 8: Thể tích. Đơn vị đo thể tích (7 TIẾT)',
        volume: 2,
        semester: 2,
        week: 22,
        duration: '1 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 45. Thể tích của một hình. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 45. Thể tích của một hình:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 45. Thể tích của một hình.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b47',
        lessonNumber: 47,
        title: 'Bài 46. Xăng-ti-mét khối. Đề-xi-mét khối',
        topic: 'Chủ đề 8: Thể tích. Đơn vị đo thể tích (7 TIẾT)',
        volume: 2,
        semester: 2,
        week: 22,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 46. Xăng-ti-mét khối. Đề-xi-mét khối. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 46. Xăng-ti-mét khối. Đề-xi-mét khối:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 46. Xăng-ti-mét khối. Đề-xi-mét khối.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b48',
        lessonNumber: 48,
        title: 'Bài 47. Mét khối',
        topic: 'Chủ đề 8: Thể tích. Đơn vị đo thể tích (7 TIẾT)',
        volume: 2,
        semester: 2,
        week: 22,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 47. Mét khối. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 47. Mét khối:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 47. Mét khối.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b49',
        lessonNumber: 49,
        title: 'Bài 48. Luyện tập chung',
        topic: 'Chủ đề 8: Thể tích. Đơn vị đo thể tích (7 TIẾT)',
        volume: 2,
        semester: 2,
        week: 23,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 48. Luyện tập chung. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 48. Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 48. Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b50',
        lessonNumber: 50,
        title: 'Bài 49. Hình khai triển của hình lập phương, hình hộp chữ nhật và hình trụ',
        topic: 'Chủ đề 9: Diện tích và thể tích của một số hình khối (15 TIẾT)',
        volume: 2,
        semester: 2,
        week: 23,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 49. Hình khai triển của hình lập phương, hình hộp chữ nhật và hình trụ. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 49. Hình khai triển của hình lập phương, hình hộp chữ nhật và hình trụ:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 49. Hình khai triển của hình lập phương, hình hộp chữ nhật và hình trụ.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b51',
        lessonNumber: 51,
        title: 'Bài 50. Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật',
        topic: 'Chủ đề 9: Diện tích và thể tích của một số hình khối (15 TIẾT)',
        volume: 2,
        semester: 2,
        week: 24,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 50. Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 50. Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 50. Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b52',
        lessonNumber: 52,
        title: 'Bài 51. Diện tích xung quanh và diện tích toàn phần của hình lập phương',
        topic: 'Chủ đề 9: Diện tích và thể tích của một số hình khối (15 TIẾT)',
        volume: 2,
        semester: 2,
        week: 24,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 51. Diện tích xung quanh và diện tích toàn phần của hình lập phương. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 51. Diện tích xung quanh và diện tích toàn phần của hình lập phương:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 51. Diện tích xung quanh và diện tích toàn phần của hình lập phương.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b53',
        lessonNumber: 53,
        title: 'Bài 52. Thể tích hình hộp chữ nhật',
        topic: 'Chủ đề 9: Diện tích và thể tích của một số hình khối (15 TIẾT)',
        volume: 2,
        semester: 2,
        week: 25,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 52. Thể tích hình hộp chữ nhật. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 52. Thể tích hình hộp chữ nhật:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 52. Thể tích hình hộp chữ nhật.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b54',
        lessonNumber: 54,
        title: 'Bài 53. Thể tích hình lập phương',
        topic: 'Chủ đề 9: Diện tích và thể tích của một số hình khối (15 TIẾT)',
        volume: 2,
        semester: 2,
        week: 25,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 53. Thể tích hình lập phương. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 53. Thể tích hình lập phương:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 53. Thể tích hình lập phương.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b55',
        lessonNumber: 55,
        title: 'Bài 54. Thực hành tính toán và ước lượng thể tích một số hình khối',
        topic: 'Chủ đề 9: Diện tích và thể tích của một số hình khối (15 TIẾT)',
        volume: 2,
        semester: 2,
        week: 25,
        duration: '1 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 54. Thực hành tính toán và ước lượng thể tích một số hình khối. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 54. Thực hành tính toán và ước lượng thể tích một số hình khối:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 54. Thực hành tính toán và ước lượng thể tích một số hình khối.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b56',
        lessonNumber: 56,
        title: 'Bài 55. Luyện tập chung',
        topic: 'Chủ đề 9: Diện tích và thể tích của một số hình khối (15 TIẾT)',
        volume: 2,
        semester: 2,
        week: 26,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 55. Luyện tập chung. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 55. Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 55. Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b57',
        lessonNumber: 57,
        title: 'Bài 56. Các đơn vị đo thời gian',
        topic: 'Chủ đề 10: Số đo thời gian. Vận tốc. Các bài toán liên quan đến chuyển động đều (17 TIẾT)',
        volume: 2,
        semester: 2,
        week: 26,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 56. Các đơn vị đo thời gian. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 56. Các đơn vị đo thời gian:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 56. Các đơn vị đo thời gian.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b58',
        lessonNumber: 58,
        title: 'Bài 57. Cộng, trừ số đo thời gian',
        topic: 'Chủ đề 10: Số đo thời gian. Vận tốc. Các bài toán liên quan đến chuyển động đều (17 TIẾT)',
        volume: 2,
        semester: 2,
        week: 27,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 57. Cộng, trừ số đo thời gian. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 57. Cộng, trừ số đo thời gian:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 57. Cộng, trừ số đo thời gian.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b59',
        lessonNumber: 59,
        title: 'Bài 58. Nhân, chia số đo thời gian với một số',
        topic: 'Chủ đề 10: Số đo thời gian. Vận tốc. Các bài toán liên quan đến chuyển động đều (17 TIẾT)',
        volume: 2,
        semester: 2,
        week: 27,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 58. Nhân, chia số đo thời gian với một số. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 58. Nhân, chia số đo thời gian với một số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 58. Nhân, chia số đo thời gian với một số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b60',
        lessonNumber: 60,
        title: 'Bài 59. Vận tốc của một chuyển động đều',
        topic: 'Chủ đề 10: Số đo thời gian. Vận tốc. Các bài toán liên quan đến chuyển động đều (17 TIẾT)',
        volume: 2,
        semester: 2,
        week: 28,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 59. Vận tốc của một chuyển động đều. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 59. Vận tốc của một chuyển động đều:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 59. Vận tốc của một chuyển động đều.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b61',
        lessonNumber: 61,
        title: 'Bài 60. Quãng đường, thời gian của một chuyển động đều',
        topic: 'Chủ đề 10: Số đo thời gian. Vận tốc. Các bài toán liên quan đến chuyển động đều (17 TIẾT)',
        volume: 2,
        semester: 2,
        week: 28,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 60. Quãng đường, thời gian của một chuyển động đều. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 60. Quãng đường, thời gian của một chuyển động đều:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 60. Quãng đường, thời gian của một chuyển động đều.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b62',
        lessonNumber: 62,
        title: 'Bài 61. Thực hành tính toán và ước lượng về vận tốc, quãng đường, thời gian trong chuyển động đều',
        topic: 'Chủ đề 10: Số đo thời gian. Vận tốc. Các bài toán liên quan đến chuyển động đều (17 TIẾT)',
        volume: 2,
        semester: 2,
        week: 29,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 61. Thực hành tính toán và ước lượng về vận tốc, quãng đường, thời gian trong chuyển động đều. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 61. Thực hành tính toán và ước lượng về vận tốc, quãng đường, thời gian trong chuyển động đều:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 61. Thực hành tính toán và ước lượng về vận tốc, quãng đường, thời gian trong chuyển động đều.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b63',
        lessonNumber: 63,
        title: 'Bài 62. Luyện tập chung',
        topic: 'Chủ đề 10: Số đo thời gian. Vận tốc. Các bài toán liên quan đến chuyển động đều (17 TIẾT)',
        volume: 2,
        semester: 2,
        week: 29,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 62. Luyện tập chung. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 62. Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 62. Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b64',
        lessonNumber: 64,
        title: 'Bài 63. Thu thập, phân loại, sắp xếp các số liệu',
        topic: 'Chủ đề 11: Một số yếu tố thống kê và xác suất (7 TIẾT)',
        volume: 2,
        semester: 2,
        week: 30,
        duration: '1 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 63. Thu thập, phân loại, sắp xếp các số liệu. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 63. Thu thập, phân loại, sắp xếp các số liệu:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 63. Thu thập, phân loại, sắp xếp các số liệu.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b65',
        lessonNumber: 65,
        title: 'Bài 64. Biểu đồ hình quạt tròn',
        topic: 'Chủ đề 11: Một số yếu tố thống kê và xác suất (7 TIẾT)',
        volume: 2,
        semester: 2,
        week: 30,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 64. Biểu đồ hình quạt tròn. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 64. Biểu đồ hình quạt tròn:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 64. Biểu đồ hình quạt tròn.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b66',
        lessonNumber: 66,
        title: 'Bài 65. Tỉ số của số lần lặp một sự kiện so với tổng số lần thực hiện',
        topic: 'Chủ đề 11: Một số yếu tố thống kê và xác suất (7 TIẾT)',
        volume: 2,
        semester: 2,
        week: 30,
        duration: '1 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 65. Tỉ số của số lần lặp một sự kiện so với tổng số lần thực hiện. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 65. Tỉ số của số lần lặp một sự kiện so với tổng số lần thực hiện:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 65. Tỉ số của số lần lặp một sự kiện so với tổng số lần thực hiện.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b67',
        lessonNumber: 67,
        title: 'Bài 66. Thực hành và trải nghiệm thu thập, phân tích, biểu diễn các số liệu thống kê',
        topic: 'Chủ đề 11: Một số yếu tố thống kê và xác suất (7 TIẾT)',
        volume: 2,
        semester: 2,
        week: 30,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 66. Thực hành và trải nghiệm thu thập, phân tích, biểu diễn các số liệu thống kê. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 66. Thực hành và trải nghiệm thu thập, phân tích, biểu diễn các số liệu thống kê:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 66. Thực hành và trải nghiệm thu thập, phân tích, biểu diễn các số liệu thống kê.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b68',
        lessonNumber: 68,
        title: 'Bài 67. Luyện tập chung',
        topic: 'Chủ đề 11: Một số yếu tố thống kê và xác suất (7 TIẾT)',
        volume: 2,
        semester: 2,
        week: 31,
        duration: '1 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 67. Luyện tập chung. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 67. Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 67. Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b69',
        lessonNumber: 69,
        title: 'Bài 68. Ôn tập số tự nhiên, phân số, số thập phân',
        topic: 'Chủ đề 12: Ôn tập cuối năm (23 TIẾT)',
        volume: 2,
        semester: 2,
        week: 31,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 68. Ôn tập số tự nhiên, phân số, số thập phân. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 68. Ôn tập số tự nhiên, phân số, số thập phân:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 68. Ôn tập số tự nhiên, phân số, số thập phân.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b70',
        lessonNumber: 70,
        title: 'Bài 69. Ôn tập các phép tính với số tự nhiên, phân số, số thập phân',
        topic: 'Chủ đề 12: Ôn tập cuối năm (23 TIẾT)',
        volume: 2,
        semester: 2,
        week: 32,
        duration: '4 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 69. Ôn tập các phép tính với số tự nhiên, phân số, số thập phân. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 69. Ôn tập các phép tính với số tự nhiên, phân số, số thập phân:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 69. Ôn tập các phép tính với số tự nhiên, phân số, số thập phân.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b71',
        lessonNumber: 71,
        title: 'Bài 70. Ôn tập tỉ số, tỉ số phần trăm',
        topic: 'Chủ đề 12: Ôn tập cuối năm (23 TIẾT)',
        volume: 2,
        semester: 2,
        week: 32,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 70. Ôn tập tỉ số, tỉ số phần trăm. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 70. Ôn tập tỉ số, tỉ số phần trăm:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 70. Ôn tập tỉ số, tỉ số phần trăm.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b72',
        lessonNumber: 72,
        title: 'Bài 71. Ôn tập hình học',
        topic: 'Chủ đề 12: Ôn tập cuối năm (23 TIẾT)',
        volume: 2,
        semester: 2,
        week: 33,
        duration: '4 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 71. Ôn tập hình học. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 71. Ôn tập hình học:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 71. Ôn tập hình học.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b73',
        lessonNumber: 73,
        title: 'Bài 72. Ôn tập đo lường',
        topic: 'Chủ đề 12: Ôn tập cuối năm (23 TIẾT)',
        volume: 2,
        semester: 2,
        week: 34,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 72. Ôn tập đo lường. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 72. Ôn tập đo lường:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 72. Ôn tập đo lường.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b74',
        lessonNumber: 74,
        title: 'Bài 73. Ôn tập toán chuyển động đều',
        topic: 'Chủ đề 12: Ôn tập cuối năm (23 TIẾT)',
        volume: 2,
        semester: 2,
        week: 34,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 73. Ôn tập toán chuyển động đều. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 73. Ôn tập toán chuyển động đều:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 73. Ôn tập toán chuyển động đều.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b75',
        lessonNumber: 75,
        title: 'Bài 74. Ôn tập một số yếu tố thống kê và xác suất',
        topic: 'Chủ đề 12: Ôn tập cuối năm (23 TIẾT)',
        volume: 2,
        semester: 2,
        week: 34,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 74. Ôn tập một số yếu tố thống kê và xác suất. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 74. Ôn tập một số yếu tố thống kê và xác suất:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 74. Ôn tập một số yếu tố thống kê và xác suất.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan5_b76',
        lessonNumber: 76,
        title: 'Bài 75. Ôn tập chung',
        topic: 'Chủ đề 12: Ôn tập cuối năm (23 TIẾT)',
        volume: 2,
        semester: 2,
        week: 35,
        duration: '4 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 75. Ôn tập chung. Nhận biết, thực hành tính toán và vận dụng giải quyết bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 75. Ôn tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả làm tròn chưa chuẩn'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 75. Ôn tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
    ]
  };

  if (typeof window !== 'undefined') {
    window.SGK_TOAN_5 = TOAN_5_DATA;
    if (window.SGK_REGISTRY && typeof window.SGK_REGISTRY.registerBook === 'function') {
      window.SGK_REGISTRY.registerBook(5, 'toan', TOAN_5_DATA);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = TOAN_5_DATA;
  }
})(typeof window !== 'undefined' ? window : this);
