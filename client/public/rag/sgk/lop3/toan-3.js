/**
 * SỐ HÓA SÁCH GIÁO KHOA TOÁN LỚP 3
 * Bộ sách: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Nhà xuất bản: NXB Giáo dục Việt Nam
 * Chương trình Giáo dục phổ thông 2018
 */

(function(global) {
  'use strict';

  const TOAN_3_DATA = {
    metadata: {
      grade: 3,
      subjectId: 'toan',
      subjectName: 'Toán',
      bookName: 'Toán 3 - Kết nối tri thức với cuộc sống',
      publisher: 'Nhà xuất bản Giáo dục Việt Nam',
      totalWeeks: 35,
      totalPeriods: 175,
      volumes: [
        { volume: 1, name: 'Tập 1 (Học kì I - Tuần 1 đến 18)', weeks: '1-18' },
        { volume: 2, name: 'Tập 2 (Học kì II - Tuần 19 đến 35)', weeks: '19-35' }
      ]
    },
    topics: [
      { id: 'toan3_cd1', name: 'Chủ đề 1: Ôn tập và bổ sung', semester: 1, weeks: '1-4', volume: 1 },
      { id: 'toan3_cd2', name: 'Chủ đề 2: Bảng nhân, bảng chia', semester: 1, weeks: '5-9', volume: 1 },
      { id: 'toan3_cd3', name: 'Chủ đề 3: Làm quen với hình phẳng, hình khối', semester: 1, weeks: '10-12', volume: 1 },
      { id: 'toan3_cd4', name: 'Chủ đề 4: Phép nhân, phép chia trong phạm vi 100', semester: 1, weeks: '13-15', volume: 1 },
      { id: 'toan3_cd5', name: 'Chủ đề 5: Một số đơn vị đo độ dài, khối lượng, dung tích, nhiệt độ', semester: 1, weeks: '16-17', volume: 1 },
      { id: 'toan3_cd6', name: 'Chủ đề 6: Ôn tập học kì 1', semester: 1, weeks: '18', volume: 1 },
      { id: 'toan3_cd7', name: 'Chủ đề 7: Các số trong phạm vi 10 000', semester: 2, weeks: '19-22', volume: 2 },
      { id: 'toan3_cd8', name: 'Chủ đề 8: Các số trong phạm vi 100 000', semester: 2, weeks: '23-26', volume: 2 },
      { id: 'toan3_cd9', name: 'Chủ đề 9: Chu vi, diện tích một số hình phẳng', semester: 2, weeks: '27-29', volume: 2 },
      { id: 'toan3_cd10', name: 'Chủ đề 10: Phép nhân, phép chia trong phạm vi 100 000', semester: 2, weeks: '30-33', volume: 2 },
      { id: 'toan3_cd11', name: 'Chủ đề 11: Ôn tập cuối năm', semester: 2, weeks: '34-35', volume: 2 }
    ],
    lessons: [
      {
        id: 'toan3_b1',
        lessonNumber: 1,
        title: 'Bài 1: Ôn tập các số đến 1 000',
        topic: 'CHỦ ĐỀ 1: ÔN TẬP VÀ BỔ SUNG',
        volume: 1,
        semester: 1,
        week: 1,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 1: Ôn tập các số đến 1 000. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 1: Ôn tập các số đến 1 000:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 1: Ôn tập các số đến 1 000.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b2',
        lessonNumber: 2,
        title: 'Bài 2: Ôn tập phép cộng, phép trừ trong phạm vi 1 000',
        topic: 'CHỦ ĐỀ 1: ÔN TẬP VÀ BỔ SUNG',
        volume: 1,
        semester: 1,
        week: 1,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 2: Ôn tập phép cộng, phép trừ trong phạm vi 1 000. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 2: Ôn tập phép cộng, phép trừ trong phạm vi 1 000:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 2: Ôn tập phép cộng, phép trừ trong phạm vi 1 000.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b3',
        lessonNumber: 3,
        title: 'Bài 3: Tìm thành phần trong phép cộng, phép trừ',
        topic: 'CHỦ ĐỀ 1: ÔN TẬP VÀ BỔ SUNG',
        volume: 1,
        semester: 1,
        week: 1,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 3: Tìm thành phần trong phép cộng, phép trừ. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 3: Tìm thành phần trong phép cộng, phép trừ:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 3: Tìm thành phần trong phép cộng, phép trừ.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b4',
        lessonNumber: 4,
        title: 'Bài 3. Tìm thành phần trong phép cộng, phép trừ',
        topic: 'CHỦ ĐỀ 1: ÔN TẬP VÀ BỔ SUNG',
        volume: 1,
        semester: 1,
        week: 2,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 3. Tìm thành phần trong phép cộng, phép trừ. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 3. Tìm thành phần trong phép cộng, phép trừ:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 3. Tìm thành phần trong phép cộng, phép trừ.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b5',
        lessonNumber: 5,
        title: 'Bài 4. Ôn tập bảng nhân 2, 5; bảng chia 2,5',
        topic: 'CHỦ ĐỀ 1: ÔN TẬP VÀ BỔ SUNG',
        volume: 1,
        semester: 1,
        week: 2,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 4. Ôn tập bảng nhân 2, 5; bảng chia 2,5. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 4. Ôn tập bảng nhân 2, 5; bảng chia 2,5:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 4. Ôn tập bảng nhân 2, 5; bảng chia 2,5.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b6',
        lessonNumber: 6,
        title: 'Bài 5. Bảng nhân 3, bảng chia 3',
        topic: 'CHỦ ĐỀ 1: ÔN TẬP VÀ BỔ SUNG',
        volume: 1,
        semester: 1,
        week: 2,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 5. Bảng nhân 3, bảng chia 3. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 5. Bảng nhân 3, bảng chia 3:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 5. Bảng nhân 3, bảng chia 3.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b7',
        lessonNumber: 7,
        title: 'Bài 6. Bảng nhân 4, bảng chia 4',
        topic: 'CHỦ ĐỀ 1: ÔN TẬP VÀ BỔ SUNG',
        volume: 1,
        semester: 1,
        week: 3,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 6. Bảng nhân 4, bảng chia 4. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 6. Bảng nhân 4, bảng chia 4:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 6. Bảng nhân 4, bảng chia 4.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b8',
        lessonNumber: 8,
        title: 'Bài 7. Ôn tập hình học và đo lường',
        topic: 'CHỦ ĐỀ 1: ÔN TẬP VÀ BỔ SUNG',
        volume: 1,
        semester: 1,
        week: 3,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 7. Ôn tập hình học và đo lường. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 7. Ôn tập hình học và đo lường:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 7. Ôn tập hình học và đo lường.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b9',
        lessonNumber: 9,
        title: 'Bài 8. Luyện tập chung',
        topic: 'CHỦ ĐỀ 1: ÔN TẬP VÀ BỔ SUNG',
        volume: 1,
        semester: 1,
        week: 3,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 8. Luyện tập chung. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 8. Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 8. Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b10',
        lessonNumber: 10,
        title: 'Bài 9. Bảng nhân 6, bảng chia 6',
        topic: 'CHỦ ĐỀ 2: BẢNG NHÂN, BẢNG CHIA',
        volume: 1,
        semester: 1,
        week: 4,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 9. Bảng nhân 6, bảng chia 6. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 9. Bảng nhân 6, bảng chia 6:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 9. Bảng nhân 6, bảng chia 6.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b11',
        lessonNumber: 11,
        title: 'Bài 10. Bảng nhân 7, bảng chia 7',
        topic: 'CHỦ ĐỀ 2: BẢNG NHÂN, BẢNG CHIA',
        volume: 1,
        semester: 1,
        week: 4,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 10. Bảng nhân 7, bảng chia 7. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 10. Bảng nhân 7, bảng chia 7:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 10. Bảng nhân 7, bảng chia 7.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b12',
        lessonNumber: 12,
        title: 'Bài 11. Bảng nhân 8, bảng chia 8',
        topic: 'CHỦ ĐỀ 2: BẢNG NHÂN, BẢNG CHIA',
        volume: 1,
        semester: 1,
        week: 5,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 11. Bảng nhân 8, bảng chia 8. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 11. Bảng nhân 8, bảng chia 8:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 11. Bảng nhân 8, bảng chia 8.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b13',
        lessonNumber: 13,
        title: 'Bài 12. Bảng nhân 9, bảng chia 9',
        topic: 'CHỦ ĐỀ 2: BẢNG NHÂN, BẢNG CHIA',
        volume: 1,
        semester: 1,
        week: 5,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 12. Bảng nhân 9, bảng chia 9. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 12. Bảng nhân 9, bảng chia 9:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 12. Bảng nhân 9, bảng chia 9.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b14',
        lessonNumber: 14,
        title: 'Bài 13. Tìm thành phần trong phép nhân, phép chia',
        topic: 'CHỦ ĐỀ 2: BẢNG NHÂN, BẢNG CHIA',
        volume: 1,
        semester: 1,
        week: 6,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 13. Tìm thành phần trong phép nhân, phép chia. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 13. Tìm thành phần trong phép nhân, phép chia:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 13. Tìm thành phần trong phép nhân, phép chia.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b15',
        lessonNumber: 15,
        title: 'Bài 14. Một phần mấy',
        topic: 'CHỦ ĐỀ 2: BẢNG NHÂN, BẢNG CHIA',
        volume: 1,
        semester: 1,
        week: 6,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 14. Một phần mấy. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 14. Một phần mấy:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 14. Một phần mấy.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b16',
        lessonNumber: 16,
        title: 'Bài 15. Luyện tập chung',
        topic: 'CHỦ ĐỀ 2: BẢNG NHÂN, BẢNG CHIA',
        volume: 1,
        semester: 1,
        week: 7,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 15. Luyện tập chung. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 15. Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 15. Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b17',
        lessonNumber: 17,
        title: 'Bài 16. Điểm ở giữa, trung điểm của đoạn thẳng',
        topic: 'CHỦ ĐỀ 3: LÀM QUEN VỚI HÌNH PHẲNG, HÌNH KHỐI',
        volume: 1,
        semester: 1,
        week: 7,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 16. Điểm ở giữa, trung điểm của đoạn thẳng. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 16. Điểm ở giữa, trung điểm của đoạn thẳng:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 16. Điểm ở giữa, trung điểm của đoạn thẳng.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b18',
        lessonNumber: 18,
        title: 'Bài 17. Hình tròn. Tâm, bán kính, đường kính của hình tròn',
        topic: 'CHỦ ĐỀ 3: LÀM QUEN VỚI HÌNH PHẲNG, HÌNH KHỐI',
        volume: 1,
        semester: 1,
        week: 7,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 17. Hình tròn. Tâm, bán kính, đường kính của hình tròn. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 17. Hình tròn. Tâm, bán kính, đường kính của hình tròn:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 17. Hình tròn. Tâm, bán kính, đường kính của hình tròn.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b19',
        lessonNumber: 19,
        title: 'Bài 18. Góc, góc vuông, góc không vuông',
        topic: 'CHỦ ĐỀ 3: LÀM QUEN VỚI HÌNH PHẲNG, HÌNH KHỐI',
        volume: 1,
        semester: 1,
        week: 8,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 18. Góc, góc vuông, góc không vuông. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 18. Góc, góc vuông, góc không vuông:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 18. Góc, góc vuông, góc không vuông.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b20',
        lessonNumber: 20,
        title: 'Bài 19. Hình tam giác, hình tứ giác. Hình vuông, hình chữ nhật',
        topic: 'CHỦ ĐỀ 3: LÀM QUEN VỚI HÌNH PHẲNG, HÌNH KHỐI',
        volume: 1,
        semester: 1,
        week: 8,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 19. Hình tam giác, hình tứ giác. Hình vuông, hình chữ nhật. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 19. Hình tam giác, hình tứ giác. Hình vuông, hình chữ nhật:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 19. Hình tam giác, hình tứ giác. Hình vuông, hình chữ nhật.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b21',
        lessonNumber: 21,
        title: 'Bài 20. Thực hành vẽ góc vuông, vẽ đường tròn, hình vuông, hình chữ nhật và vẽ trang trí',
        topic: 'CHỦ ĐỀ 3: LÀM QUEN VỚI HÌNH PHẲNG, HÌNH KHỐI',
        volume: 1,
        semester: 1,
        week: 8,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 20. Thực hành vẽ góc vuông, vẽ đường tròn, hình vuông, hình chữ nhật và vẽ trang trí. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 20. Thực hành vẽ góc vuông, vẽ đường tròn, hình vuông, hình chữ nhật và vẽ trang trí:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 20. Thực hành vẽ góc vuông, vẽ đường tròn, hình vuông, hình chữ nhật và vẽ trang trí.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b22',
        lessonNumber: 22,
        title: 'Bài 21. Khối lập phương, khối hộp chữ nhật',
        topic: 'CHỦ ĐỀ 3: LÀM QUEN VỚI HÌNH PHẲNG, HÌNH KHỐI',
        volume: 1,
        semester: 1,
        week: 9,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 21. Khối lập phương, khối hộp chữ nhật. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 21. Khối lập phương, khối hộp chữ nhật:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 21. Khối lập phương, khối hộp chữ nhật.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b23',
        lessonNumber: 23,
        title: 'Bài 22. Luyện tập chung',
        topic: 'CHỦ ĐỀ 3: LÀM QUEN VỚI HÌNH PHẲNG, HÌNH KHỐI',
        volume: 1,
        semester: 1,
        week: 9,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 22. Luyện tập chung. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 22. Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 22. Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b24',
        lessonNumber: 24,
        title: 'Bài 23. Nhân số có 2 chữ số với số có một chữ số',
        topic: 'CHỦ ĐỀ 4: PHÉP NHÂN, PHÉP CHIA TRONG PHẠM VI 100',
        volume: 1,
        semester: 1,
        week: 9,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 23. Nhân số có 2 chữ số với số có một chữ số. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 23. Nhân số có 2 chữ số với số có một chữ số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 23. Nhân số có 2 chữ số với số có một chữ số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b25',
        lessonNumber: 25,
        title: 'Bài 24. Gấp một số lên một số lần',
        topic: 'CHỦ ĐỀ 4: PHÉP NHÂN, PHÉP CHIA TRONG PHẠM VI 100',
        volume: 1,
        semester: 1,
        week: 10,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 24. Gấp một số lên một số lần. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 24. Gấp một số lên một số lần:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 24. Gấp một số lên một số lần.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b26',
        lessonNumber: 26,
        title: 'Bài 25. Phép chia hết, phép chia có dư',
        topic: 'CHỦ ĐỀ 4: PHÉP NHÂN, PHÉP CHIA TRONG PHẠM VI 100',
        volume: 1,
        semester: 1,
        week: 10,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 25. Phép chia hết, phép chia có dư. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 25. Phép chia hết, phép chia có dư:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 25. Phép chia hết, phép chia có dư.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b27',
        lessonNumber: 27,
        title: 'Bài 26. Chia số có hai chữ số cho số có một chữ số',
        topic: 'CHỦ ĐỀ 4: PHÉP NHÂN, PHÉP CHIA TRONG PHẠM VI 100',
        volume: 1,
        semester: 1,
        week: 11,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 26. Chia số có hai chữ số cho số có một chữ số. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 26. Chia số có hai chữ số cho số có một chữ số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 26. Chia số có hai chữ số cho số có một chữ số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b28',
        lessonNumber: 28,
        title: 'Bài 27. Giảm một số đi một số lần',
        topic: 'CHỦ ĐỀ 4: PHÉP NHÂN, PHÉP CHIA TRONG PHẠM VI 100',
        volume: 1,
        semester: 1,
        week: 11,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 27. Giảm một số đi một số lần. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 27. Giảm một số đi một số lần:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 27. Giảm một số đi một số lần.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b29',
        lessonNumber: 29,
        title: 'Bài 28. Bài toán giải bằng hai phép tính',
        topic: 'CHỦ ĐỀ 4: PHÉP NHÂN, PHÉP CHIA TRONG PHẠM VI 100',
        volume: 1,
        semester: 1,
        week: 12,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 28. Bài toán giải bằng hai phép tính. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 28. Bài toán giải bằng hai phép tính:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 28. Bài toán giải bằng hai phép tính.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b30',
        lessonNumber: 30,
        title: 'Bài 29. Luyện tập chung',
        topic: 'CHỦ ĐỀ 4: PHÉP NHÂN, PHÉP CHIA TRONG PHẠM VI 100',
        volume: 1,
        semester: 1,
        week: 12,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 29. Luyện tập chung. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 29. Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
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
        id: 'toan3_b31',
        lessonNumber: 31,
        title: 'Bài 30. Mi-li-mét',
        topic: 'CHỦ ĐỀ 5: MỘT SỐ ĐƠN VỊ ĐO ĐỘ DÀI, KHỐI LƯỢNG, DUNG TÍCH, NHIỆT ĐỘ',
        volume: 1,
        semester: 1,
        week: 12,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 30. Mi-li-mét. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 30. Mi-li-mét:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 30. Mi-li-mét.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b32',
        lessonNumber: 32,
        title: 'Bài 31. Gam',
        topic: 'CHỦ ĐỀ 5: MỘT SỐ ĐƠN VỊ ĐO ĐỘ DÀI, KHỐI LƯỢNG, DUNG TÍCH, NHIỆT ĐỘ',
        volume: 1,
        semester: 1,
        week: 13,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 31. Gam. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 31. Gam:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 31. Gam.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b33',
        lessonNumber: 33,
        title: 'Bài 32. Mi-li-lít',
        topic: 'CHỦ ĐỀ 5: MỘT SỐ ĐƠN VỊ ĐO ĐỘ DÀI, KHỐI LƯỢNG, DUNG TÍCH, NHIỆT ĐỘ',
        volume: 1,
        semester: 1,
        week: 13,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 32. Mi-li-lít. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 32. Mi-li-lít:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 32. Mi-li-lít.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b34',
        lessonNumber: 34,
        title: 'Bài 33. Nhiệt độ. Đơn vị đo nhiệt độ',
        topic: 'CHỦ ĐỀ 5: MỘT SỐ ĐƠN VỊ ĐO ĐỘ DÀI, KHỐI LƯỢNG, DUNG TÍCH, NHIỆT ĐỘ',
        volume: 1,
        semester: 1,
        week: 13,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 33. Nhiệt độ. Đơn vị đo nhiệt độ. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 33. Nhiệt độ. Đơn vị đo nhiệt độ:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 33. Nhiệt độ. Đơn vị đo nhiệt độ.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b35',
        lessonNumber: 35,
        title: 'Bài 34. Thực hành và trải nghiệm với các đơn vị mi-li-mét, gam, mi-li-lít, độ C',
        topic: 'CHỦ ĐỀ 5: MỘT SỐ ĐƠN VỊ ĐO ĐỘ DÀI, KHỐI LƯỢNG, DUNG TÍCH, NHIỆT ĐỘ',
        volume: 1,
        semester: 1,
        week: 13,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 34. Thực hành và trải nghiệm với các đơn vị mi-li-mét, gam, mi-li-lít, độ C. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 34. Thực hành và trải nghiệm với các đơn vị mi-li-mét, gam, mi-li-lít, độ C:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 34. Thực hành và trải nghiệm với các đơn vị mi-li-mét, gam, mi-li-lít, độ C.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b36',
        lessonNumber: 36,
        title: 'Bài 35. Luyện tập chung',
        topic: 'CHỦ ĐỀ 5: MỘT SỐ ĐƠN VỊ ĐO ĐỘ DÀI, KHỐI LƯỢNG, DUNG TÍCH, NHIỆT ĐỘ',
        volume: 1,
        semester: 1,
        week: 14,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 35. Luyện tập chung. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 35. Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 35. Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b37',
        lessonNumber: 37,
        title: 'Bài 36. Nhân số có ba chữ số với số có một chữ số.',
        topic: 'CHỦ ĐỀ 6: PHÉP NHÂN, PHÉP CHIA TRONG PHẠM VI 1 000',
        volume: 1,
        semester: 1,
        week: 14,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 36. Nhân số có ba chữ số với số có một chữ số.. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 36. Nhân số có ba chữ số với số có một chữ số.:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 36. Nhân số có ba chữ số với số có một chữ số..',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b38',
        lessonNumber: 38,
        title: 'Bài 37. Chia số có ba chữ số cho số có một chữ số.',
        topic: 'CHỦ ĐỀ 6: PHÉP NHÂN, PHÉP CHIA TRONG PHẠM VI 1 000',
        volume: 1,
        semester: 1,
        week: 15,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 37. Chia số có ba chữ số cho số có một chữ số.. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 37. Chia số có ba chữ số cho số có một chữ số.:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 37. Chia số có ba chữ số cho số có một chữ số..',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b39',
        lessonNumber: 39,
        title: 'Bài 37. Chia số có ba chữ số cho số có một chữ số',
        topic: 'CHỦ ĐỀ 6: PHÉP NHÂN, PHÉP CHIA TRONG PHẠM VI 1 000',
        volume: 1,
        semester: 1,
        week: 15,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 37. Chia số có ba chữ số cho số có một chữ số. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 37. Chia số có ba chữ số cho số có một chữ số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 37. Chia số có ba chữ số cho số có một chữ số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b40',
        lessonNumber: 40,
        title: 'Bài 38. Biểu thức số. Tính giá trị của biểu thức số',
        topic: 'CHỦ ĐỀ 6: PHÉP NHÂN, PHÉP CHIA TRONG PHẠM VI 1 000',
        volume: 1,
        semester: 1,
        week: 15,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 38. Biểu thức số. Tính giá trị của biểu thức số. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 38. Biểu thức số. Tính giá trị của biểu thức số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 38. Biểu thức số. Tính giá trị của biểu thức số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b41',
        lessonNumber: 41,
        title: 'Bài 39. So sánh số lớn gấp mấy lần số bé',
        topic: 'CHỦ ĐỀ 6: PHÉP NHÂN, PHÉP CHIA TRONG PHẠM VI 1 000',
        volume: 1,
        semester: 1,
        week: 16,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 39. So sánh số lớn gấp mấy lần số bé. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 39. So sánh số lớn gấp mấy lần số bé:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 39. So sánh số lớn gấp mấy lần số bé.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b42',
        lessonNumber: 42,
        title: 'Bài 40. Luyện tập chung',
        topic: 'CHỦ ĐỀ 6: PHÉP NHÂN, PHÉP CHIA TRONG PHẠM VI 1 000',
        volume: 1,
        semester: 1,
        week: 16,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 40. Luyện tập chung. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 40. Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 40. Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b43',
        lessonNumber: 43,
        title: 'Bài 41. Ôn tập phép nhân, phép chia trong phạm vi 100, 1 000',
        topic: 'CHỦ ĐỀ 7: ÔN TẬP HỌC KÌ I',
        volume: 1,
        semester: 1,
        week: 17,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 41. Ôn tập phép nhân, phép chia trong phạm vi 100, 1 000. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 41. Ôn tập phép nhân, phép chia trong phạm vi 100, 1 000:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 41. Ôn tập phép nhân, phép chia trong phạm vi 100, 1 000.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b44',
        lessonNumber: 44,
        title: 'Bài 42. Ôn tập biểu thức số',
        topic: 'CHỦ ĐỀ 7: ÔN TẬP HỌC KÌ I',
        volume: 1,
        semester: 1,
        week: 17,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 42. Ôn tập biểu thức số. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 42. Ôn tập biểu thức số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 42. Ôn tập biểu thức số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b45',
        lessonNumber: 45,
        title: 'Bài 43. Ôn tập hình học và đo lường',
        topic: 'CHỦ ĐỀ 7: ÔN TẬP HỌC KÌ I',
        volume: 1,
        semester: 1,
        week: 18,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 43. Ôn tập hình học và đo lường. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 43. Ôn tập hình học và đo lường:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 43. Ôn tập hình học và đo lường.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b46',
        lessonNumber: 46,
        title: 'Bài 44. Ôn tập chung',
        topic: 'CHỦ ĐỀ 7: ÔN TẬP HỌC KÌ I',
        volume: 1,
        semester: 1,
        week: 18,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 44. Ôn tập chung. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 44. Ôn tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 44. Ôn tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b47',
        lessonNumber: 47,
        title: 'Bài 45. Các số có bốn chữ số. Số 10 000',
        topic: 'CHỦ ĐỀ 8: CÁC SỐ ĐẾN 10 000',
        volume: 2,
        semester: 2,
        week: 19,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 45. Các số có bốn chữ số. Số 10 000. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 45. Các số có bốn chữ số. Số 10 000:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 45. Các số có bốn chữ số. Số 10 000.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b48',
        lessonNumber: 48,
        title: 'Bài 46. So sánh các số trong phạm vi 10 000',
        topic: 'CHỦ ĐỀ 8: CÁC SỐ ĐẾN 10 000',
        volume: 2,
        semester: 2,
        week: 19,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 46. So sánh các số trong phạm vi 10 000. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 46. So sánh các số trong phạm vi 10 000:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 46. So sánh các số trong phạm vi 10 000.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b49',
        lessonNumber: 49,
        title: 'Bài 47. Làm quen với chữ số La Mã',
        topic: 'CHỦ ĐỀ 8: CÁC SỐ ĐẾN 10 000',
        volume: 2,
        semester: 2,
        week: 20,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 47. Làm quen với chữ số La Mã. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 47. Làm quen với chữ số La Mã:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 47. Làm quen với chữ số La Mã.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b50',
        lessonNumber: 50,
        title: 'Bài 48. Làm tròn số đến hàng chục, hàng trăm',
        topic: 'CHỦ ĐỀ 8: CÁC SỐ ĐẾN 10 000',
        volume: 2,
        semester: 2,
        week: 20,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 48. Làm tròn số đến hàng chục, hàng trăm. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 48. Làm tròn số đến hàng chục, hàng trăm:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 48. Làm tròn số đến hàng chục, hàng trăm.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b51',
        lessonNumber: 51,
        title: 'Bài 49. Luyện tập chung',
        topic: 'CHỦ ĐỀ 8: CÁC SỐ ĐẾN 10 000',
        volume: 2,
        semester: 2,
        week: 20,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 49. Luyện tập chung. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 49. Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 49. Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b52',
        lessonNumber: 52,
        title: 'Bài 50. Chu vi hình tam giác, hình tứ giác, hình chữ nhật, hình vuông',
        topic: 'CHỦ ĐỀ 9: CHU VI, DIỆN TÍCH MỘT SỐ HÌNH PHẲNG',
        volume: 2,
        semester: 2,
        week: 21,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 50. Chu vi hình tam giác, hình tứ giác, hình chữ nhật, hình vuông. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 50. Chu vi hình tam giác, hình tứ giác, hình chữ nhật, hình vuông:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 50. Chu vi hình tam giác, hình tứ giác, hình chữ nhật, hình vuông.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b53',
        lessonNumber: 53,
        title: 'Bài 51. Diện tích của một hình. Xăng-ti-mét vuông',
        topic: 'CHỦ ĐỀ 9: CHU VI, DIỆN TÍCH MỘT SỐ HÌNH PHẲNG',
        volume: 2,
        semester: 2,
        week: 21,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 51. Diện tích của một hình. Xăng-ti-mét vuông. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 51. Diện tích của một hình. Xăng-ti-mét vuông:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 51. Diện tích của một hình. Xăng-ti-mét vuông.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b54',
        lessonNumber: 54,
        title: 'Bài 52. Diện tích hình chữ nhật, diện tích hình vuông',
        topic: 'CHỦ ĐỀ 9: CHU VI, DIỆN TÍCH MỘT SỐ HÌNH PHẲNG',
        volume: 2,
        semester: 2,
        week: 22,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 52. Diện tích hình chữ nhật, diện tích hình vuông. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 52. Diện tích hình chữ nhật, diện tích hình vuông:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 52. Diện tích hình chữ nhật, diện tích hình vuông.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b55',
        lessonNumber: 55,
        title: 'Bài 53. Luyện tập chung',
        topic: 'CHỦ ĐỀ 9: CHU VI, DIỆN TÍCH MỘT SỐ HÌNH PHẲNG',
        volume: 2,
        semester: 2,
        week: 22,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 53. Luyện tập chung. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 53. Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 53. Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b56',
        lessonNumber: 56,
        title: 'Bài 54. Phép cộng trong phạm vi 10 000',
        topic: 'CHỦ ĐỀ 10: CỘNG, TRỪ, NHÂN, CHIA TRONG PHẠM VI 10 000',
        volume: 2,
        semester: 2,
        week: 23,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 54. Phép cộng trong phạm vi 10 000. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 54. Phép cộng trong phạm vi 10 000:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 54. Phép cộng trong phạm vi 10 000.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b57',
        lessonNumber: 57,
        title: 'Bài 55. Phép trừ trong phạm vi 10 000',
        topic: 'CHỦ ĐỀ 10: CỘNG, TRỪ, NHÂN, CHIA TRONG PHẠM VI 10 000',
        volume: 2,
        semester: 2,
        week: 23,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 55. Phép trừ trong phạm vi 10 000. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 55. Phép trừ trong phạm vi 10 000:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 55. Phép trừ trong phạm vi 10 000.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b58',
        lessonNumber: 58,
        title: 'Bài 56. Nhân số có bốn chữ số với số có một chữ số',
        topic: 'CHỦ ĐỀ 10: CỘNG, TRỪ, NHÂN, CHIA TRONG PHẠM VI 10 000',
        volume: 2,
        semester: 2,
        week: 24,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 56. Nhân số có bốn chữ số với số có một chữ số. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 56. Nhân số có bốn chữ số với số có một chữ số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 56. Nhân số có bốn chữ số với số có một chữ số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b59',
        lessonNumber: 59,
        title: 'Bài 57. Chia số có bốn chữ số cho số có một chữ số',
        topic: 'CHỦ ĐỀ 10: CỘNG, TRỪ, NHÂN, CHIA TRONG PHẠM VI 10 000',
        volume: 2,
        semester: 2,
        week: 24,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 57. Chia số có bốn chữ số cho số có một chữ số. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 57. Chia số có bốn chữ số cho số có một chữ số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 57. Chia số có bốn chữ số cho số có một chữ số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b60',
        lessonNumber: 60,
        title: 'Bài 58. Luyện tập chung',
        topic: 'CHỦ ĐỀ 10: CỘNG, TRỪ, NHÂN, CHIA TRONG PHẠM VI 10 000',
        volume: 2,
        semester: 2,
        week: 25,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 58. Luyện tập chung. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 58. Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 58. Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b61',
        lessonNumber: 61,
        title: 'Bài 59. Các số có năm chữ số. Số 100 000',
        topic: 'CHỦ ĐỀ 11: CÁC SỐ ĐẾN 100 000',
        volume: 2,
        semester: 2,
        week: 26,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 59. Các số có năm chữ số. Số 100 000. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 59. Các số có năm chữ số. Số 100 000:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 59. Các số có năm chữ số. Số 100 000.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b62',
        lessonNumber: 62,
        title: 'Bài 60. So sánh các số trong phạm vi 100 000',
        topic: 'CHỦ ĐỀ 11: CÁC SỐ ĐẾN 100 000',
        volume: 2,
        semester: 2,
        week: 26,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 60. So sánh các số trong phạm vi 100 000. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 60. So sánh các số trong phạm vi 100 000:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 60. So sánh các số trong phạm vi 100 000.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b63',
        lessonNumber: 63,
        title: 'Bài 61. Làm tròn các số đến hàng nghìn, hàng chục nghìn',
        topic: 'CHỦ ĐỀ 11: CÁC SỐ ĐẾN 100 000',
        volume: 2,
        semester: 2,
        week: 27,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 61. Làm tròn các số đến hàng nghìn, hàng chục nghìn. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 61. Làm tròn các số đến hàng nghìn, hàng chục nghìn:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 61. Làm tròn các số đến hàng nghìn, hàng chục nghìn.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b64',
        lessonNumber: 64,
        title: 'Bài 62. Luyện tập chung',
        topic: 'CHỦ ĐỀ 11: CÁC SỐ ĐẾN 100 000',
        volume: 2,
        semester: 2,
        week: 27,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 62. Luyện tập chung. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 62. Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
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
        id: 'toan3_b65',
        lessonNumber: 65,
        title: 'Bài 63. Phép cộng trong phạm vi 100 000',
        topic: 'CHỦ ĐỀ 12: CỘNG, TRỪ TRONG PHẠM VI 100 000',
        volume: 2,
        semester: 2,
        week: 28,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 63. Phép cộng trong phạm vi 100 000. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 63. Phép cộng trong phạm vi 100 000:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 63. Phép cộng trong phạm vi 100 000.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b66',
        lessonNumber: 66,
        title: 'Bài 64. Phép trừ trong phạm vi 100 000',
        topic: 'CHỦ ĐỀ 12: CỘNG, TRỪ TRONG PHẠM VI 100 000',
        volume: 2,
        semester: 2,
        week: 28,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 64. Phép trừ trong phạm vi 100 000. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 64. Phép trừ trong phạm vi 100 000:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 64. Phép trừ trong phạm vi 100 000.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b67',
        lessonNumber: 67,
        title: 'Bài 65. Luyện tập chung',
        topic: 'CHỦ ĐỀ 12: CỘNG, TRỪ TRONG PHẠM VI 100 000',
        volume: 2,
        semester: 2,
        week: 28,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 65. Luyện tập chung. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 65. Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 65. Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b68',
        lessonNumber: 68,
        title: 'Bài 66. Xem đồng hồ. Tháng – năm',
        topic: 'CHỦ ĐỀ 13: XEM ĐỒNG HỒ, THÁNG - NĂM, TIỀN VIỆT NAM',
        volume: 2,
        semester: 2,
        week: 29,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 66. Xem đồng hồ. Tháng – năm. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 66. Xem đồng hồ. Tháng – năm:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 66. Xem đồng hồ. Tháng – năm.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b69',
        lessonNumber: 69,
        title: 'Bài 67. Thực hành xem đồng hồ, xem lịch',
        topic: 'CHỦ ĐỀ 13: XEM ĐỒNG HỒ, THÁNG - NĂM, TIỀN VIỆT NAM',
        volume: 2,
        semester: 2,
        week: 29,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 67. Thực hành xem đồng hồ, xem lịch. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 67. Thực hành xem đồng hồ, xem lịch:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 67. Thực hành xem đồng hồ, xem lịch.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b70',
        lessonNumber: 70,
        title: 'Bài 68. Tiền Việt Nam',
        topic: 'CHỦ ĐỀ 13: XEM ĐỒNG HỒ, THÁNG - NĂM, TIỀN VIỆT NAM',
        volume: 2,
        semester: 2,
        week: 29,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 68. Tiền Việt Nam. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 68. Tiền Việt Nam:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 68. Tiền Việt Nam.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b71',
        lessonNumber: 71,
        title: 'Bài 69. Luyện tập chung',
        topic: 'CHỦ ĐỀ 13: XEM ĐỒNG HỒ, THÁNG - NĂM, TIỀN VIỆT NAM',
        volume: 2,
        semester: 2,
        week: 30,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 69. Luyện tập chung. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 69. Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 69. Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b72',
        lessonNumber: 72,
        title: 'Bài 70. Nhân số có năm chữ số với số có một chữ số',
        topic: 'CHỦ ĐỀ 14: NHÂN, CHIA TRONG PHẠM VI 100 000',
        volume: 2,
        semester: 2,
        week: 30,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 70. Nhân số có năm chữ số với số có một chữ số. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 70. Nhân số có năm chữ số với số có một chữ số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 70. Nhân số có năm chữ số với số có một chữ số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b73',
        lessonNumber: 73,
        title: 'Bài 71. Chia số có năm chữ số cho số có một chữ số',
        topic: 'CHỦ ĐỀ 14: NHÂN, CHIA TRONG PHẠM VI 100 000',
        volume: 2,
        semester: 2,
        week: 31,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 71. Chia số có năm chữ số cho số có một chữ số. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 71. Chia số có năm chữ số cho số có một chữ số:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 71. Chia số có năm chữ số cho số có một chữ số.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b74',
        lessonNumber: 74,
        title: 'Bài 72. Luyện tập chung',
        topic: 'CHỦ ĐỀ 14: NHÂN, CHIA TRONG PHẠM VI 100 000',
        volume: 2,
        semester: 2,
        week: 32,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 72. Luyện tập chung. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 72. Luyện tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 72. Luyện tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b75',
        lessonNumber: 75,
        title: 'Bài 73. Thu thập, phân loại, ghi chép số liệu. Bảng số liệu',
        topic: 'CHỦ ĐỀ 15: LÀM QUEN VỚI YẾU TỐ THỐNG KÊ, XÁC SUẤT',
        volume: 2,
        semester: 2,
        week: 32,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 73. Thu thập, phân loại, ghi chép số liệu. Bảng số liệu. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 73. Thu thập, phân loại, ghi chép số liệu. Bảng số liệu:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 73. Thu thập, phân loại, ghi chép số liệu. Bảng số liệu.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b76',
        lessonNumber: 76,
        title: 'Bài 74. Khả năng xảy ra của một sự kiện',
        topic: 'CHỦ ĐỀ 15: LÀM QUEN VỚI YẾU TỐ THỐNG KÊ, XÁC SUẤT',
        volume: 2,
        semester: 2,
        week: 33,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 74. Khả năng xảy ra của một sự kiện. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 74. Khả năng xảy ra của một sự kiện:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 74. Khả năng xảy ra của một sự kiện.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b77',
        lessonNumber: 77,
        title: 'Bài 75. Thực hành và trải nghiệm thu thập, phân loại, ghi chép số liệu, đọc bảng số liệu.',
        topic: 'CHỦ ĐỀ 15: LÀM QUEN VỚI YẾU TỐ THỐNG KÊ, XÁC SUẤT',
        volume: 2,
        semester: 2,
        week: 33,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 75. Thực hành và trải nghiệm thu thập, phân loại, ghi chép số liệu, đọc bảng số liệu.. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 75. Thực hành và trải nghiệm thu thập, phân loại, ghi chép số liệu, đọc bảng số liệu.:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 75. Thực hành và trải nghiệm thu thập, phân loại, ghi chép số liệu, đọc bảng số liệu..',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b78',
        lessonNumber: 78,
        title: 'Bài 76. Ôn tập các số trong phạm vi 10 000, 100 000',
        topic: 'CHỦ ĐỀ 16: ÔN TẬP CUỐI NĂM',
        volume: 2,
        semester: 2,
        week: 33,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 76. Ôn tập các số trong phạm vi 10 000, 100 000. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 76. Ôn tập các số trong phạm vi 10 000, 100 000:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 76. Ôn tập các số trong phạm vi 10 000, 100 000.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b79',
        lessonNumber: 79,
        title: 'Bài 77. Ôn tập phép cộng, phép trừ trong phạm vi  100 000',
        topic: 'CHỦ ĐỀ 16: ÔN TẬP CUỐI NĂM',
        volume: 2,
        semester: 2,
        week: 34,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 77. Ôn tập phép cộng, phép trừ trong phạm vi  100 000. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 77. Ôn tập phép cộng, phép trừ trong phạm vi  100 000:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 77. Ôn tập phép cộng, phép trừ trong phạm vi  100 000.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b80',
        lessonNumber: 80,
        title: 'Bài 78. Ôn tập phép nhân, phép chia trong phạm vi 100 000',
        topic: 'CHỦ ĐỀ 16: ÔN TẬP CUỐI NĂM',
        volume: 2,
        semester: 2,
        week: 34,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 78. Ôn tập phép nhân, phép chia trong phạm vi 100 000. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 78. Ôn tập phép nhân, phép chia trong phạm vi 100 000:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 78. Ôn tập phép nhân, phép chia trong phạm vi 100 000.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b81',
        lessonNumber: 81,
        title: 'Bài 79. Ôn tập hình học và đo lường',
        topic: 'CHỦ ĐỀ 16: ÔN TẬP CUỐI NĂM',
        volume: 2,
        semester: 2,
        week: 35,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 79. Ôn tập hình học và đo lường. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 79. Ôn tập hình học và đo lường:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 79. Ôn tập hình học và đo lường.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b82',
        lessonNumber: 82,
        title: 'Bài 80. Ôn tập bảng số liệu, khả năng xảy ra của một sự kiện',
        topic: 'CHỦ ĐỀ 16: ÔN TẬP CUỐI NĂM',
        volume: 2,
        semester: 2,
        week: 35,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 80. Ôn tập bảng số liệu, khả năng xảy ra của một sự kiện. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 80. Ôn tập bảng số liệu, khả năng xảy ra của một sự kiện:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 80. Ôn tập bảng số liệu, khả năng xảy ra của một sự kiện.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
      {
        id: 'toan3_b83',
        lessonNumber: 83,
        title: 'Bài 81. Ôn tập chung',
        topic: 'CHỦ ĐỀ 16: ÔN TẬP CUỐI NĂM',
        volume: 2,
        semester: 2,
        week: 35,
        duration: '1',
        coreKnowledge: 'Củng cố và rèn luyện kiến thức kỹ năng trọng tâm của Bài 81. Ôn tập chung. Thực hành tính nhẩm, đặt tính rồi tính và giải toán có lời văn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Dạng bài nhận biết trọng tâm của Bài 81. Ôn tập chung:',
            options: ['Lựa chọn đáp án đúng theo quy tắc đã học trong SGK Toán 3', 'Lựa chọn phương án sai', 'Giá trị chưa chính xác', 'Kết quả tính nhầm'],
            answer: 0,
            explanation: 'Vận dụng định nghĩa và quy tắc cơ bản trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Thực hiện phép tính và giải bài toán có lời văn liên quan đến Bài 81. Ôn tập chung.',
            guide: 'Học sinh trình bày đầy đủ lời giải, phép tính và đáp số rõ ràng.'
          }
        ]
      },
    ]
  };

  if (typeof window !== 'undefined') {
    window.SGK_TOAN_3 = TOAN_3_DATA;
    if (window.SGK_REGISTRY && typeof window.SGK_REGISTRY.registerBook === 'function') {
      window.SGK_REGISTRY.registerBook(3, 'toan', TOAN_3_DATA);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = TOAN_3_DATA;
  }
})(typeof window !== 'undefined' ? window : this);
