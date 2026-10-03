/**
 * SỐ HÓA SÁCH GIÁO KHOA TOÁN LỚP 4
 * Bộ sách: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Nhà xuất bản: NXB Giáo dục Việt Nam
 * Chương trình Giáo dục phổ thông 2018
 */

(function(global) {
  'use strict';

  const TOAN_4_DATA = {
    metadata: {
      grade: 4,
      subjectId: 'toan',
      subjectName: 'Toán',
      bookName: 'Toán 4 - Kết nối tri thức với cuộc sống',
      publisher: 'Nhà xuất bản Giáo dục Việt Nam',
      totalWeeks: 35,
      totalPeriods: 175,
      volumes: [
        { volume: 1, name: 'Tập 1 (Học kì I - Tuần 1 đến 18)', weeks: '1-18' },
        { volume: 2, name: 'Tập 2 (Học kì II - Tuần 19 đến 35)', weeks: '19-35' }
      ]
    },
    topics: [
      { id: 'toan4_cd1', name: 'Chủ đề 1: Ôn tập và bổ sung', semester: 1, weeks: '1-4', volume: 1 },
      { id: 'toan4_cd2', name: 'Chủ đề 2: Góc và đơn vị đo góc', semester: 1, weeks: '5-6', volume: 1 },
      { id: 'toan4_cd3', name: 'Chủ đề 3: Số có nhiều chữ số', semester: 1, weeks: '7-10', volume: 1 },
      { id: 'toan4_cd4', name: 'Chủ đề 4: Một số đơn vị đo đại lượng', semester: 1, weeks: '11-13', volume: 1 },
      { id: 'toan4_cd5', name: 'Chủ đề 5: Phép cộng và phép trừ', semester: 1, weeks: '14-17', volume: 1 },
      { id: 'toan4_cd6', name: 'Chủ đề 6: Ôn tập học kì 1', semester: 1, weeks: '18', volume: 1 },
      { id: 'toan4_cd7', name: 'Chủ đề 7: Phép nhân và phép chia', semester: 2, weeks: '19-24', volume: 2 },
      { id: 'toan4_cd8', name: 'Chủ đề 8: Phân số', semester: 2, weeks: '25-27', volume: 2 },
      { id: 'toan4_cd9', name: 'Chủ đề 9: Các phép tính với phân số', semester: 2, weeks: '28-31', volume: 2 },
      { id: 'toan4_cd10', name: 'Chủ đề 10: Hình học và đo lường (Hình bình hành, hình thoi)', semester: 2, weeks: '32-33', volume: 2 },
      { id: 'toan4_cd11', name: 'Chủ đề 11: Ôn tập cuối năm', semester: 2, weeks: '34-35', volume: 2 }
    ],
    lessons: [
      {
        id: 'toan4_b1',
        lessonNumber: 1,
        title: 'Bài 1: Ôn tập các số đến 100 000',
        topic: 'Chủ đề 1: Ôn tập và bổ sung',
        volume: 1,
        semester: 1,
        week: 1,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 1: Ôn tập các số đến 100 000. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 1: Ôn tập các số đến 100 000:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 1: Ôn tập các số đến 100 000.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b2',
        lessonNumber: 2,
        title: 'Bài 2: Ôn tập các phép tính trong phạm vi 100 000',
        topic: 'Chủ đề 1: Ôn tập và bổ sung',
        volume: 1,
        semester: 1,
        week: 1,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 2: Ôn tập các phép tính trong phạm vi 100 000. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 2: Ôn tập các phép tính trong phạm vi 100 000:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 2: Ôn tập các phép tính trong phạm vi 100 000.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b3',
        lessonNumber: 3,
        title: 'Bài 3: Số chẵn, số lẻ',
        topic: 'Chủ đề 1: Ôn tập và bổ sung',
        volume: 1,
        semester: 1,
        week: 2,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 3: Số chẵn, số lẻ. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 3: Số chẵn, số lẻ:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 3: Số chẵn, số lẻ.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b4',
        lessonNumber: 4,
        title: 'Bài 4: Biểu thức chứa chữ',
        topic: 'Chủ đề 1: Ôn tập và bổ sung',
        volume: 1,
        semester: 1,
        week: 2,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 4: Biểu thức chứa chữ. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 4: Biểu thức chứa chữ:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 4: Biểu thức chứa chữ.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b5',
        lessonNumber: 5,
        title: 'Bài 5: Giải bài toán có ba bước tính',
        topic: 'Chủ đề 1: Ôn tập và bổ sung',
        volume: 1,
        semester: 1,
        week: 3,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 5: Giải bài toán có ba bước tính. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 5: Giải bài toán có ba bước tính:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 5: Giải bài toán có ba bước tính.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b6',
        lessonNumber: 6,
        title: 'Bài 6: Luyện tập chung',
        topic: 'Chủ đề 1: Ôn tập và bổ sung',
        volume: 1,
        semester: 1,
        week: 3,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 6: Luyện tập chung. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 6: Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 6: Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b7',
        lessonNumber: 7,
        title: 'Bài 7: Đo góc, đơn vị đo góc',
        topic: 'Chủ đề 2: Góc và đơn vị đo góc',
        volume: 1,
        semester: 1,
        week: 3,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 7: Đo góc, đơn vị đo góc. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 7: Đo góc, đơn vị đo góc:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 7: Đo góc, đơn vị đo góc.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b8',
        lessonNumber: 8,
        title: 'Bài 8: Góc nhọn, góc tù, góc bẹt',
        topic: 'Chủ đề 2: Góc và đơn vị đo góc',
        volume: 1,
        semester: 1,
        week: 4,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 8: Góc nhọn, góc tù, góc bẹt. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 8: Góc nhọn, góc tù, góc bẹt:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 8: Góc nhọn, góc tù, góc bẹt.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b9',
        lessonNumber: 9,
        title: 'Bài 9: Luyện tập chung',
        topic: 'Chủ đề 2: Góc và đơn vị đo góc',
        volume: 1,
        semester: 1,
        week: 4,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 9: Luyện tập chung. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 9: Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 9: Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b10',
        lessonNumber: 10,
        title: 'Bài 10: Số có sáu chữ số. Số 1 000 000.',
        topic: 'Chủ đề 3: Số có nhiều chữ số',
        volume: 1,
        semester: 1,
        week: 5,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 10: Số có sáu chữ số. Số 1 000 000.. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 10: Số có sáu chữ số. Số 1 000 000.:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 10: Số có sáu chữ số. Số 1 000 000..',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b11',
        lessonNumber: 11,
        title: 'Bài 11: Hàng và lớp',
        topic: 'Chủ đề 3: Số có nhiều chữ số',
        volume: 1,
        semester: 1,
        week: 5,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 11: Hàng và lớp. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 11: Hàng và lớp:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 11: Hàng và lớp.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b12',
        lessonNumber: 12,
        title: 'Bài 12: Các số trong phạm vi lớp triệu',
        topic: 'Chủ đề 3: Số có nhiều chữ số',
        volume: 1,
        semester: 1,
        week: 6,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 12: Các số trong phạm vi lớp triệu. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 12: Các số trong phạm vi lớp triệu:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 12: Các số trong phạm vi lớp triệu.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b13',
        lessonNumber: 13,
        title: 'Bài 13: Làm tròn số đến hàng trăm nghìn',
        topic: 'Chủ đề 3: Số có nhiều chữ số',
        volume: 1,
        semester: 1,
        week: 6,
        duration: '1 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 13: Làm tròn số đến hàng trăm nghìn. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 13: Làm tròn số đến hàng trăm nghìn:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 13: Làm tròn số đến hàng trăm nghìn.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b14',
        lessonNumber: 14,
        title: 'Bài 14: So sánh các số có nhiều chữ số',
        topic: 'Chủ đề 3: Số có nhiều chữ số',
        volume: 1,
        semester: 1,
        week: 7,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 14: So sánh các số có nhiều chữ số. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 14: So sánh các số có nhiều chữ số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 14: So sánh các số có nhiều chữ số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b15',
        lessonNumber: 15,
        title: 'Bài 15: Làm quen với dãy số tự nhiên',
        topic: 'Chủ đề 3: Số có nhiều chữ số',
        volume: 1,
        semester: 1,
        week: 7,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 15: Làm quen với dãy số tự nhiên. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 15: Làm quen với dãy số tự nhiên:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 15: Làm quen với dãy số tự nhiên.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b16',
        lessonNumber: 16,
        title: 'Bài 16: Luyện tập chung',
        topic: 'Chủ đề 3: Số có nhiều chữ số',
        volume: 1,
        semester: 1,
        week: 7,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 16: Luyện tập chung. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 16: Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 16: Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b17',
        lessonNumber: 17,
        title: 'Bài 17: Yến, tạ, tấn',
        topic: 'Chủ đề 4: Một số đơn vị đo đại lượng',
        volume: 1,
        semester: 1,
        week: 8,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 17: Yến, tạ, tấn. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 17: Yến, tạ, tấn:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 17: Yến, tạ, tấn.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b18',
        lessonNumber: 18,
        title: 'Bài 18: Đề-xi-mét vuông, mét vuông, mi-li-mét vuông',
        topic: 'Chủ đề 4: Một số đơn vị đo đại lượng',
        volume: 1,
        semester: 1,
        week: 9,
        duration: '4 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 18: Đề-xi-mét vuông, mét vuông, mi-li-mét vuông. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 18: Đề-xi-mét vuông, mét vuông, mi-li-mét vuông:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 18: Đề-xi-mét vuông, mét vuông, mi-li-mét vuông.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b19',
        lessonNumber: 19,
        title: 'Bài 19: Giây, thế kỉ',
        topic: 'Chủ đề 4: Một số đơn vị đo đại lượng',
        volume: 1,
        semester: 1,
        week: 9,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 19: Giây, thế kỉ. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 19: Giây, thế kỉ:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 19: Giây, thế kỉ.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b20',
        lessonNumber: 20,
        title: 'Bài 20: Thực hành và trải nghiệm sử dụng một số đơn vị đo đại lượng',
        topic: 'Chủ đề 4: Một số đơn vị đo đại lượng',
        volume: 1,
        semester: 1,
        week: 10,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 20: Thực hành và trải nghiệm sử dụng một số đơn vị đo đại lượng. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 20: Thực hành và trải nghiệm sử dụng một số đơn vị đo đại lượng:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 20: Thực hành và trải nghiệm sử dụng một số đơn vị đo đại lượng.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b21',
        lessonNumber: 21,
        title: 'Bài 21: Luyện tập chung',
        topic: 'Chủ đề 4: Một số đơn vị đo đại lượng',
        volume: 1,
        semester: 1,
        week: 10,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 21: Luyện tập chung. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 21: Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 21: Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b22',
        lessonNumber: 22,
        title: 'Bài 22: Phép cộng các số có nhiều chữ số',
        topic: 'Chủ đề 5: Phép cộng và phép trừ',
        volume: 1,
        semester: 1,
        week: 11,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 22: Phép cộng các số có nhiều chữ số. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 22: Phép cộng các số có nhiều chữ số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 22: Phép cộng các số có nhiều chữ số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b23',
        lessonNumber: 23,
        title: 'Bài 23: Phép trừ các số có nhiều chữ số',
        topic: 'Chủ đề 5: Phép cộng và phép trừ',
        volume: 1,
        semester: 1,
        week: 11,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 23: Phép trừ các số có nhiều chữ số. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 23: Phép trừ các số có nhiều chữ số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 23: Phép trừ các số có nhiều chữ số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b24',
        lessonNumber: 24,
        title: 'Bài 24: Tính chất giao hoán và kết hợp của phép cộng',
        topic: 'Chủ đề 5: Phép cộng và phép trừ',
        volume: 1,
        semester: 1,
        week: 12,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 24: Tính chất giao hoán và kết hợp của phép cộng. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 24: Tính chất giao hoán và kết hợp của phép cộng:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 24: Tính chất giao hoán và kết hợp của phép cộng.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b25',
        lessonNumber: 25,
        title: 'Bài 25: Tìm hai số biết tổng và hiệu của hai số đó',
        topic: 'Chủ đề 5: Phép cộng và phép trừ',
        volume: 1,
        semester: 1,
        week: 12,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 25: Tìm hai số biết tổng và hiệu của hai số đó. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 25: Tìm hai số biết tổng và hiệu của hai số đó:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 25: Tìm hai số biết tổng và hiệu của hai số đó.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b26',
        lessonNumber: 26,
        title: 'Bài 26: Luyện tập chung',
        topic: 'Chủ đề 5: Phép cộng và phép trừ',
        volume: 1,
        semester: 1,
        week: 13,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 26: Luyện tập chung. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 26: Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 26: Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b27',
        lessonNumber: 27,
        title: 'Bài 27: Hai đường thẳng vuông góc',
        topic: 'Chủ đề 6: Đường thẳng vuông góc, đường thẳng song song',
        volume: 1,
        semester: 1,
        week: 13,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 27: Hai đường thẳng vuông góc. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 27: Hai đường thẳng vuông góc:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 27: Hai đường thẳng vuông góc.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b28',
        lessonNumber: 28,
        title: 'Bài 28: Thực hành và trải nghiệm vẽ hai đường thẳng vuông góc',
        topic: 'Chủ đề 6: Đường thẳng vuông góc, đường thẳng song song',
        volume: 1,
        semester: 1,
        week: 14,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 28: Thực hành và trải nghiệm vẽ hai đường thẳng vuông góc. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 28: Thực hành và trải nghiệm vẽ hai đường thẳng vuông góc:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 28: Thực hành và trải nghiệm vẽ hai đường thẳng vuông góc.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b29',
        lessonNumber: 29,
        title: 'Bài 29: Hai đường thẳng song song',
        topic: 'Chủ đề 6: Đường thẳng vuông góc, đường thẳng song song',
        volume: 1,
        semester: 1,
        week: 14,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 29: Hai đường thẳng song song. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 29: Hai đường thẳng song song:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 29: Hai đường thẳng song song.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b30',
        lessonNumber: 30,
        title: 'Bài 30: Thực hành và trải nghiệm vẽ hai đường thẳng song song',
        topic: 'Chủ đề 6: Đường thẳng vuông góc, đường thẳng song song',
        volume: 1,
        semester: 1,
        week: 15,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 30: Thực hành và trải nghiệm vẽ hai đường thẳng song song. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 30: Thực hành và trải nghiệm vẽ hai đường thẳng song song:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 30: Thực hành và trải nghiệm vẽ hai đường thẳng song song.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b31',
        lessonNumber: 31,
        title: 'Bài 31: Hình bình hành, hình thoi',
        topic: 'Chủ đề 6: Đường thẳng vuông góc, đường thẳng song song',
        volume: 1,
        semester: 1,
        week: 15,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 31: Hình bình hành, hình thoi. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 31: Hình bình hành, hình thoi:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 31: Hình bình hành, hình thoi.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b32',
        lessonNumber: 32,
        title: 'Bài 32: Luyện tập chung',
        topic: 'Chủ đề 6: Đường thẳng vuông góc, đường thẳng song song',
        volume: 1,
        semester: 1,
        week: 15,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 32: Luyện tập chung. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 32: Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 32: Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b33',
        lessonNumber: 33,
        title: 'Bài 33: Ôn tập các số đến lớp triệu',
        topic: 'Chủ đề 7: Ôn tập học kỳ 1',
        volume: 1,
        semester: 1,
        week: 16,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 33: Ôn tập các số đến lớp triệu. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 33: Ôn tập các số đến lớp triệu:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 33: Ôn tập các số đến lớp triệu.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b34',
        lessonNumber: 34,
        title: 'Bài 34: Ôn tập phép cộng, phép trừ',
        topic: 'Chủ đề 7: Ôn tập học kỳ 1',
        volume: 1,
        semester: 1,
        week: 16,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 34: Ôn tập phép cộng, phép trừ. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 34: Ôn tập phép cộng, phép trừ:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 34: Ôn tập phép cộng, phép trừ.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b35',
        lessonNumber: 35,
        title: 'Bài 35: Ôn tập hình học',
        topic: 'Chủ đề 7: Ôn tập học kỳ 1',
        volume: 1,
        semester: 1,
        week: 17,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 35: Ôn tập hình học. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 35: Ôn tập hình học:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 35: Ôn tập hình học.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b36',
        lessonNumber: 36,
        title: 'Bài 36: Ôn tập đo lường',
        topic: 'Chủ đề 7: Ôn tập học kỳ 1',
        volume: 1,
        semester: 1,
        week: 18,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 36: Ôn tập đo lường. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 36: Ôn tập đo lường:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 36: Ôn tập đo lường.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b37',
        lessonNumber: 37,
        title: 'Bài 37: Ôn tập chung',
        topic: 'Chủ đề 7: Ôn tập học kỳ 1',
        volume: 1,
        semester: 1,
        week: 18,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 37: Ôn tập chung. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 37: Ôn tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 37: Ôn tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b38',
        lessonNumber: 38,
        title: 'Bài 38: Nhân với số có một chữ số',
        topic: 'Chủ đề 8 Phép nhân, phép chia',
        volume: 2,
        semester: 2,
        week: 19,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 38: Nhân với số có một chữ số. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 38: Nhân với số có một chữ số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 38: Nhân với số có một chữ số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b39',
        lessonNumber: 39,
        title: 'Bài 39: Chia cho số có một chữ số',
        topic: 'Chủ đề 8 Phép nhân, phép chia',
        volume: 2,
        semester: 2,
        week: 19,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 39: Chia cho số có một chữ số. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 39: Chia cho số có một chữ số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 39: Chia cho số có một chữ số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b40',
        lessonNumber: 40,
        title: 'Bài 40: Tính chất giao hoán và kết hợp của phép nhân',
        topic: 'Chủ đề 8 Phép nhân, phép chia',
        volume: 2,
        semester: 2,
        week: 19,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 40: Tính chất giao hoán và kết hợp của phép nhân. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 40: Tính chất giao hoán và kết hợp của phép nhân:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 40: Tính chất giao hoán và kết hợp của phép nhân.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b41',
        lessonNumber: 41,
        title: 'Bài 41: Nhân, chia với 10, 100, 1 000,...',
        topic: 'Chủ đề 8 Phép nhân, phép chia',
        volume: 2,
        semester: 2,
        week: 20,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 41: Nhân, chia với 10, 100, 1 000,.... Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 41: Nhân, chia với 10, 100, 1 000,...:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 41: Nhân, chia với 10, 100, 1 000,....',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b42',
        lessonNumber: 42,
        title: 'Bài 42: Tính chất phân phối của phép nhân đối với phép cộng',
        topic: 'Chủ đề 8 Phép nhân, phép chia',
        volume: 2,
        semester: 2,
        week: 20,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 42: Tính chất phân phối của phép nhân đối với phép cộng. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 42: Tính chất phân phối của phép nhân đối với phép cộng:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 42: Tính chất phân phối của phép nhân đối với phép cộng.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b43',
        lessonNumber: 43,
        title: 'Bài 43: Nhân với số có hai chữ số',
        topic: 'Chủ đề 8 Phép nhân, phép chia',
        volume: 2,
        semester: 2,
        week: 21,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 43: Nhân với số có hai chữ số. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 43: Nhân với số có hai chữ số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 43: Nhân với số có hai chữ số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b44',
        lessonNumber: 44,
        title: 'Bài 44: Chia cho số có hai chữ số',
        topic: 'Chủ đề 8 Phép nhân, phép chia',
        volume: 2,
        semester: 2,
        week: 22,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 44: Chia cho số có hai chữ số. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 44: Chia cho số có hai chữ số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 44: Chia cho số có hai chữ số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b45',
        lessonNumber: 45,
        title: 'Bài 45: Thực hành và trải nghiệm ước lượng trong tính toán',
        topic: 'Chủ đề 8 Phép nhân, phép chia',
        volume: 2,
        semester: 2,
        week: 22,
        duration: '1 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 45: Thực hành và trải nghiệm ước lượng trong tính toán. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 45: Thực hành và trải nghiệm ước lượng trong tính toán:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 45: Thực hành và trải nghiệm ước lượng trong tính toán.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b46',
        lessonNumber: 46,
        title: 'Bài 46: Tìm số trung bình cộng',
        topic: 'Chủ đề 8 Phép nhân, phép chia',
        volume: 2,
        semester: 2,
        week: 22,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 46: Tìm số trung bình cộng. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 46: Tìm số trung bình cộng:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 46: Tìm số trung bình cộng.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b47',
        lessonNumber: 47,
        title: 'Bài 47: Bài toán liên quan đến rút về đơn vị',
        topic: 'Chủ đề 8 Phép nhân, phép chia',
        volume: 2,
        semester: 2,
        week: 23,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 47: Bài toán liên quan đến rút về đơn vị. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 47: Bài toán liên quan đến rút về đơn vị:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 47: Bài toán liên quan đến rút về đơn vị.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b48',
        lessonNumber: 48,
        title: 'Bài 48: Luyện tập chung',
        topic: 'Chủ đề 8 Phép nhân, phép chia',
        volume: 2,
        semester: 2,
        week: 23,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 48: Luyện tập chung. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 48: Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 48: Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b49',
        lessonNumber: 49,
        title: 'Bài 49: Dãy số liệu thống kê',
        topic: 'Chủ đề 9 Làm quen với yếu tố thống kê, xác suất',
        volume: 2,
        semester: 2,
        week: 24,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 49: Dãy số liệu thống kê. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 49: Dãy số liệu thống kê:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 49: Dãy số liệu thống kê.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b50',
        lessonNumber: 50,
        title: 'Bài 50: Biểu đồ cột',
        topic: 'Chủ đề 9 Làm quen với yếu tố thống kê, xác suất',
        volume: 2,
        semester: 2,
        week: 24,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 50: Biểu đồ cột. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 50: Biểu đồ cột:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 50: Biểu đồ cột.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b51',
        lessonNumber: 51,
        title: 'Bài 51: Số lần xuất hiện của một sự kiện',
        topic: 'Chủ đề 9 Làm quen với yếu tố thống kê, xác suất',
        volume: 2,
        semester: 2,
        week: 25,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 51: Số lần xuất hiện của một sự kiện. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 51: Số lần xuất hiện của một sự kiện:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 51: Số lần xuất hiện của một sự kiện.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b52',
        lessonNumber: 52,
        title: 'Bài 52: Luyện tập chung',
        topic: 'Chủ đề 9 Làm quen với yếu tố thống kê, xác suất',
        volume: 2,
        semester: 2,
        week: 25,
        duration: '1 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 52: Luyện tập chung. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 52: Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 52: Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b53',
        lessonNumber: 53,
        title: 'Bài 53: Khái niệm phân số',
        topic: 'Chủ đề 10 Phân số',
        volume: 2,
        semester: 2,
        week: 25,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 53: Khái niệm phân số. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 53: Khái niệm phân số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 53: Khái niệm phân số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b54',
        lessonNumber: 54,
        title: 'Bài 54: Phân số và phép chia số tự nhiên',
        topic: 'Chủ đề 10 Phân số',
        volume: 2,
        semester: 2,
        week: 26,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 54: Phân số và phép chia số tự nhiên. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 54: Phân số và phép chia số tự nhiên:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 54: Phân số và phép chia số tự nhiên.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b55',
        lessonNumber: 55,
        title: 'Bài 55: Tính chất cơ bản của phân số',
        topic: 'Chủ đề 10 Phân số',
        volume: 2,
        semester: 2,
        week: 26,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 55: Tính chất cơ bản của phân số. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 55: Tính chất cơ bản của phân số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 55: Tính chất cơ bản của phân số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b56',
        lessonNumber: 56,
        title: 'Bài 56: Rút gọn phân số',
        topic: 'Chủ đề 10 Phân số',
        volume: 2,
        semester: 2,
        week: 26,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 56: Rút gọn phân số. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 56: Rút gọn phân số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 56: Rút gọn phân số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b57',
        lessonNumber: 57,
        title: 'Bài 57: Quy đồng mẫu số các phân số',
        topic: 'Chủ đề 10 Phân số',
        volume: 2,
        semester: 2,
        week: 27,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 57: Quy đồng mẫu số các phân số. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 57: Quy đồng mẫu số các phân số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 57: Quy đồng mẫu số các phân số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b58',
        lessonNumber: 58,
        title: 'Bài 58: So sánh phân số',
        topic: 'Chủ đề 10 Phân số',
        volume: 2,
        semester: 2,
        week: 27,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 58: So sánh phân số. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 58: So sánh phân số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 58: So sánh phân số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b59',
        lessonNumber: 59,
        title: 'Bài 59: Luyện tập chung',
        topic: 'Chủ đề 10 Phân số',
        volume: 2,
        semester: 2,
        week: 28,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 59: Luyện tập chung. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 59: Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 59: Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b60',
        lessonNumber: 60,
        title: 'Bài 60: Phép cộng phân số',
        topic: 'Chủ đề 11 Phép cộng, phép trừ phân số',
        volume: 2,
        semester: 2,
        week: 28,
        duration: '4 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 60: Phép cộng phân số. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 60: Phép cộng phân số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 60: Phép cộng phân số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b61',
        lessonNumber: 61,
        title: 'Bài 61: Phép trừ phân số',
        topic: 'Chủ đề 11 Phép cộng, phép trừ phân số',
        volume: 2,
        semester: 2,
        week: 29,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 61: Phép trừ phân số. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 61: Phép trừ phân số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 61: Phép trừ phân số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b62',
        lessonNumber: 62,
        title: 'Bài 62: Luyện tập chung',
        topic: 'Chủ đề 11 Phép cộng, phép trừ phân số',
        volume: 2,
        semester: 2,
        week: 30,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 62: Luyện tập chung. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 62: Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 62: Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b63',
        lessonNumber: 63,
        title: 'Bài 63: Phép nhân phân số',
        topic: 'Chủ đề 12 Phép nhân, phép chia phân số',
        volume: 2,
        semester: 2,
        week: 30,
        duration: '4 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 63: Phép nhân phân số. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 63: Phép nhân phân số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 63: Phép nhân phân số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b64',
        lessonNumber: 64,
        title: 'Bài 64: Phép chia phân số',
        topic: 'Chủ đề 12 Phép nhân, phép chia phân số',
        volume: 2,
        semester: 2,
        week: 31,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 64: Phép chia phân số. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 64: Phép chia phân số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 64: Phép chia phân số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b65',
        lessonNumber: 65,
        title: 'Bài 65: Tìm phân số của một số',
        topic: 'Chủ đề 12 Phép nhân, phép chia phân số',
        volume: 2,
        semester: 2,
        week: 32,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 65: Tìm phân số của một số. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 65: Tìm phân số của một số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 65: Tìm phân số của một số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b66',
        lessonNumber: 66,
        title: 'Bài 66: Luyện tập chung',
        topic: 'Chủ đề 12 Phép nhân, phép chia phân số',
        volume: 2,
        semester: 2,
        week: 32,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 66: Luyện tập chung. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 66: Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 66: Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b67',
        lessonNumber: 67,
        title: 'Bài 67: Ôn tập số tự nhiên',
        topic: 'Chủ đề 13 Ôn tập cuối năm',
        volume: 2,
        semester: 2,
        week: 33,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 67: Ôn tập số tự nhiên. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 67: Ôn tập số tự nhiên:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 67: Ôn tập số tự nhiên.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b68',
        lessonNumber: 68,
        title: 'Bài 68: Ôn tập phép tính với số tự nhiên',
        topic: 'Chủ đề 13 Ôn tập cuối năm',
        volume: 2,
        semester: 2,
        week: 33,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 68: Ôn tập phép tính với số tự nhiên. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 68: Ôn tập phép tính với số tự nhiên:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 68: Ôn tập phép tính với số tự nhiên.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b69',
        lessonNumber: 69,
        title: 'Bài 69: Ôn tập phân số',
        topic: 'Chủ đề 13 Ôn tập cuối năm',
        volume: 2,
        semester: 2,
        week: 34,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 69: Ôn tập phân số. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 69: Ôn tập phân số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 69: Ôn tập phân số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b70',
        lessonNumber: 70,
        title: 'Bài 70: Ôn tập phép tính với phân số',
        topic: 'Chủ đề 13 Ôn tập cuối năm',
        volume: 2,
        semester: 2,
        week: 34,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 70: Ôn tập phép tính với phân số. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 70: Ôn tập phép tính với phân số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 70: Ôn tập phép tính với phân số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b71',
        lessonNumber: 71,
        title: 'Bài 71: Ôn tập hình học và đo lường',
        topic: 'Chủ đề 13 Ôn tập cuối năm',
        volume: 2,
        semester: 2,
        week: 34,
        duration: '2 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 71: Ôn tập hình học và đo lường. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 71: Ôn tập hình học và đo lường:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 71: Ôn tập hình học và đo lường.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b72',
        lessonNumber: 72,
        title: 'Bài 72: Ôn tập một số yếu tố thống kê và xác suất',
        topic: 'Chủ đề 13 Ôn tập cuối năm',
        volume: 2,
        semester: 2,
        week: 35,
        duration: '1 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 72: Ôn tập một số yếu tố thống kê và xác suất. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 72: Ôn tập một số yếu tố thống kê và xác suất:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 72: Ôn tập một số yếu tố thống kê và xác suất.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan4_b73',
        lessonNumber: 73,
        title: 'Bài 73: Ôn tập chung',
        topic: 'Chủ đề 13 Ôn tập cuối năm',
        volume: 2,
        semester: 2,
        week: 35,
        duration: '3 tiết',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 73: Ôn tập chung. Thực hành tính toán, nhận biết hình học và giải bài toán thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 73: Ôn tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 73: Ôn tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
    ]
  };

  if (typeof window !== 'undefined') {
    window.SGK_TOAN_4 = TOAN_4_DATA;
    if (window.SGK_REGISTRY && typeof window.SGK_REGISTRY.registerBook === 'function') {
      window.SGK_REGISTRY.registerBook(4, 'toan', TOAN_4_DATA);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = TOAN_4_DATA;
  }
})(typeof window !== 'undefined' ? window : this);
