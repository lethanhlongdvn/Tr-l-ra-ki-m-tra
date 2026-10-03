/**
 * SỐ HÓA SÁCH GIÁO KHOA KHOA HỌC LỚP 5
 * Bộ sách: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Nhà xuất bản: NXB Giáo dục Việt Nam
 * Chương trình Giáo dục phổ thông 2018
 */

(function(global) {
  'use strict';

  const KHOA_HOC_5_DATA = {
    metadata: {
      grade: 5,
      subjectId: 'khoa_hoc',
      subjectName: 'Khoa học',
      bookName: 'Khoa học 5 - Kết nối tri thức với cuộc sống',
      publisher: 'Nhà xuất bản Giáo dục Việt Nam',
      totalWeeks: 35,
      totalPeriods: 70,
      volumes: [
        { volume: 1, name: 'Học kì I (Tuần 1 đến 18)', weeks: '1-18' },
        { volume: 2, name: 'Học kì II (Tuần 19 đến 35)', weeks: '19-35' }
      ]
    },
    topics: [
      { id: 'kh5_cd1', name: 'Chủ đề 1: Chất', semester: 1, weeks: '1-7' },
      { id: 'kh5_cd2', name: 'Chủ đề 2: Năng lượng', semester: 1, weeks: '8-16' },
      { id: 'kh5_cd_on1', name: 'Ôn tập học kì 1', semester: 1, weeks: '17-18' },
      { id: 'kh5_cd3', name: 'Chủ đề 3: Thực vật và động vật', semester: 2, weeks: '19-25' },
      { id: 'kh5_cd4', name: 'Chủ đề 4: Vi khuẩn', semester: 2, weeks: '26-27' },
      { id: 'kh5_cd5', name: 'Chủ đề 5: Con người và sức khỏe', semester: 2, weeks: '28-30' },
      { id: 'kh5_cd6', name: 'Chủ đề 6: Sinh vật và môi trường', semester: 2, weeks: '31-33' },
      { id: 'kh5_cd_on2', name: 'Ôn tập cuối năm', semester: 2, weeks: '34-35' }
    ],
    lessons: [
      {
        id: 'kh5_b1',
        lessonNumber: 1,
        title: 'Tên bài học',
        topic: 'Chủ đề/Mạch nội dung',
        semester: 1,
        week: 1,
        duration: 'Thời lượng',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Tên bài học. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Tên bài học"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Tên bài học" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b2',
        lessonNumber: 2,
        title: 'Bài 1: THÀNH PHẦN VÀ VAI TRÒ CỦA ĐẤT ĐỐI VỚI CÂY TRỒNG',
        topic: 'Chủ đề 1: CHẤT',
        semester: 1,
        week: 1,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 1: THÀNH PHẦN VÀ VAI TRÒ CỦA ĐẤT ĐỐI VỚI CÂY TRỒNG. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 1: THÀNH PHẦN VÀ VAI TRÒ CỦA ĐẤT ĐỐI VỚI CÂY TRỒNG"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 1: THÀNH PHẦN VÀ VAI TRÒ CỦA ĐẤT ĐỐI VỚI CÂY TRỒNG" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b3',
        lessonNumber: 3,
        title: 'Bài 2: Ô NHIỄM, XÓI MÒN ĐẤT VÀ BẢO VỆ MÔI TRƯỜNG ĐẤT',
        topic: 'Chủ đề 1: CHẤT',
        semester: 1,
        week: 2,
        duration: '3 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 2: Ô NHIỄM, XÓI MÒN ĐẤT VÀ BẢO VỆ MÔI TRƯỜNG ĐẤT. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 2: Ô NHIỄM, XÓI MÒN ĐẤT VÀ BẢO VỆ MÔI TRƯỜNG ĐẤT"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 2: Ô NHIỄM, XÓI MÒN ĐẤT VÀ BẢO VỆ MÔI TRƯỜNG ĐẤT" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b4',
        lessonNumber: 4,
        title: 'Bài 3: HỖN HỢP VÀ DUNG DỊCH',
        topic: 'Chủ đề 1: CHẤT',
        semester: 1,
        week: 3,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 3: HỖN HỢP VÀ DUNG DỊCH. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 3: HỖN HỢP VÀ DUNG DỊCH"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 3: HỖN HỢP VÀ DUNG DỊCH" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b5',
        lessonNumber: 5,
        title: 'Bài 4: ĐẶC ĐIỂM CỦA CHẤT Ở TRẠNG THÁI RẮN, LỎNG, KHÍ. SỰ BIẾN ĐỔI TRẠNG THÁI CỦA CHẤT',
        topic: 'Chủ đề 1: CHẤT',
        semester: 1,
        week: 4,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 4: ĐẶC ĐIỂM CỦA CHẤT Ở TRẠNG THÁI RẮN, LỎNG, KHÍ. SỰ BIẾN ĐỔI TRẠNG THÁI CỦA CHẤT. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 4: ĐẶC ĐIỂM CỦA CHẤT Ở TRẠNG THÁI RẮN, LỎNG, KHÍ. SỰ BIẾN ĐỔI TRẠNG THÁI CỦA CHẤT"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 4: ĐẶC ĐIỂM CỦA CHẤT Ở TRẠNG THÁI RẮN, LỎNG, KHÍ. SỰ BIẾN ĐỔI TRẠNG THÁI CỦA CHẤT" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b6',
        lessonNumber: 6,
        title: 'Bài 5: SỰ BIẾN ĐỔI HOÁ HỌC CỦA CHẤT',
        topic: 'Chủ đề 1: CHẤT',
        semester: 1,
        week: 5,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 5: SỰ BIẾN ĐỔI HOÁ HỌC CỦA CHẤT. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 5: SỰ BIẾN ĐỔI HOÁ HỌC CỦA CHẤT"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 5: SỰ BIẾN ĐỔI HOÁ HỌC CỦA CHẤT" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b7',
        lessonNumber: 7,
        title: 'Bài 6: ÔN TẬP CHỦ ĐỀ CHẤT',
        topic: 'Chủ đề 1: CHẤT',
        semester: 1,
        week: 6,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 6: ÔN TẬP CHỦ ĐỀ CHẤT. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 6: ÔN TẬP CHỦ ĐỀ CHẤT"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 6: ÔN TẬP CHỦ ĐỀ CHẤT" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b8',
        lessonNumber: 8,
        title: 'Bài 7: VAI TRÒ CỦA NĂNG LƯỢNG',
        topic: 'Chủ đề 2: NĂNG LƯỢNG',
        semester: 1,
        week: 7,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 7: VAI TRÒ CỦA NĂNG LƯỢNG. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 7: VAI TRÒ CỦA NĂNG LƯỢNG"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 7: VAI TRÒ CỦA NĂNG LƯỢNG" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b9',
        lessonNumber: 9,
        title: 'Bài 8: SỬ DỤNG NĂNG LƯỢNG ĐIỆN',
        topic: 'Chủ đề 2: NĂNG LƯỢNG',
        semester: 1,
        week: 8,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 8: SỬ DỤNG NĂNG LƯỢNG ĐIỆN. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 8: SỬ DỤNG NĂNG LƯỢNG ĐIỆN"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 8: SỬ DỤNG NĂNG LƯỢNG ĐIỆN" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b10',
        lessonNumber: 10,
        title: 'Bài 9: MẠCH ĐIỆN ĐƠN GIẢN. VẬT DẪN ĐIỆN VÀ VẬT CÁCH ĐIỆN',
        topic: 'Chủ đề 2: NĂNG LƯỢNG',
        semester: 1,
        week: 9,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 9: MẠCH ĐIỆN ĐƠN GIẢN. VẬT DẪN ĐIỆN VÀ VẬT CÁCH ĐIỆN. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 9: MẠCH ĐIỆN ĐƠN GIẢN. VẬT DẪN ĐIỆN VÀ VẬT CÁCH ĐIỆN"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 9: MẠCH ĐIỆN ĐƠN GIẢN. VẬT DẪN ĐIỆN VÀ VẬT CÁCH ĐIỆN" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b11',
        lessonNumber: 11,
        title: 'Ôn tập giữa HKI',
        topic: 'Chủ đề 2: NĂNG LƯỢNG',
        semester: 1,
        week: 10,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Ôn tập giữa HKI. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Ôn tập giữa HKI"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Ôn tập giữa HKI" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b12',
        lessonNumber: 12,
        title: 'Bài 10: NĂNG LƯỢNG CHẤT ĐỐT',
        topic: 'Chủ đề 2: NĂNG LƯỢNG',
        semester: 1,
        week: 10,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 10: NĂNG LƯỢNG CHẤT ĐỐT. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 10: NĂNG LƯỢNG CHẤT ĐỐT"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 10: NĂNG LƯỢNG CHẤT ĐỐT" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b13',
        lessonNumber: 13,
        title: 'Bài 11: SỬ DỤNG NĂNG LƯỢNG MẶT TRỜI, NĂNG LƯỢNG GIÓ, NĂNG LƯỢNG NƯỚC CHẢY',
        topic: 'Chủ đề 2: NĂNG LƯỢNG',
        semester: 1,
        week: 11,
        duration: '3 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 11: SỬ DỤNG NĂNG LƯỢNG MẶT TRỜI, NĂNG LƯỢNG GIÓ, NĂNG LƯỢNG NƯỚC CHẢY. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 11: SỬ DỤNG NĂNG LƯỢNG MẶT TRỜI, NĂNG LƯỢNG GIÓ, NĂNG LƯỢNG NƯỚC CHẢY"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 11: SỬ DỤNG NĂNG LƯỢNG MẶT TRỜI, NĂNG LƯỢNG GIÓ, NĂNG LƯỢNG NƯỚC CHẢY" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b14',
        lessonNumber: 14,
        title: 'Bài 12: ÔN TẬP CHỦ ĐỀ NĂNG LƯỢNG',
        topic: 'Chủ đề 2: NĂNG LƯỢNG',
        semester: 1,
        week: 13,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 12: ÔN TẬP CHỦ ĐỀ NĂNG LƯỢNG. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 12: ÔN TẬP CHỦ ĐỀ NĂNG LƯỢNG"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 12: ÔN TẬP CHỦ ĐỀ NĂNG LƯỢNG" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b15',
        lessonNumber: 15,
        title: 'Bài 13: SINH SẢN CỦA THỰC VẬT CÓ HOA',
        topic: 'Chủ đề 3: THỰC VẬT VÀ ĐỘNG VẬT',
        semester: 1,
        week: 13,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 13: SINH SẢN CỦA THỰC VẬT CÓ HOA. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 13: SINH SẢN CỦA THỰC VẬT CÓ HOA"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 13: SINH SẢN CỦA THỰC VẬT CÓ HOA" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b16',
        lessonNumber: 16,
        title: 'Bài 14: SỰ PHÁT TRIỂN CỦA CÂY CON',
        topic: 'Chủ đề 3: THỰC VẬT VÀ ĐỘNG VẬT',
        semester: 1,
        week: 14,
        duration: '3 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 14: SỰ PHÁT TRIỂN CỦA CÂY CON. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 14: SỰ PHÁT TRIỂN CỦA CÂY CON"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 14: SỰ PHÁT TRIỂN CỦA CÂY CON" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b17',
        lessonNumber: 17,
        title: 'Bài 15: SINH SẢN CỦA ĐỘNG VẬT',
        topic: 'Chủ đề 3: THỰC VẬT VÀ ĐỘNG VẬT',
        semester: 1,
        week: 16,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 15: SINH SẢN CỦA ĐỘNG VẬT. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 15: SINH SẢN CỦA ĐỘNG VẬT"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 15: SINH SẢN CỦA ĐỘNG VẬT" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b18',
        lessonNumber: 18,
        title: 'Bài 16: VÒNG ĐỜI VÀ SỰ PHÁT TRIỂN CỦA ĐỘNG VẬT',
        topic: 'Chủ đề 3: THỰC VẬT VÀ ĐỘNG VẬT',
        semester: 1,
        week: 17,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 16: VÒNG ĐỜI VÀ SỰ PHÁT TRIỂN CỦA ĐỘNG VẬT. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 16: VÒNG ĐỜI VÀ SỰ PHÁT TRIỂN CỦA ĐỘNG VẬT"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 16: VÒNG ĐỜI VÀ SỰ PHÁT TRIỂN CỦA ĐỘNG VẬT" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b19',
        lessonNumber: 19,
        title: 'ÔN TẬP CUỐI HKI',
        topic: 'Chủ đề 3: THỰC VẬT VÀ ĐỘNG VẬT',
        semester: 1,
        week: 18,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của ÔN TẬP CUỐI HKI. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "ÔN TẬP CUỐI HKI"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "ÔN TẬP CUỐI HKI" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b20',
        lessonNumber: 20,
        title: 'KIỂM TRA CUỐI HKI',
        topic: 'Chủ đề 3: THỰC VẬT VÀ ĐỘNG VẬT',
        semester: 1,
        week: 18,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của KIỂM TRA CUỐI HKI. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "KIỂM TRA CUỐI HKI"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "KIỂM TRA CUỐI HKI" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b21',
        lessonNumber: 21,
        title: 'Bài 17: ÔN TẬP CHỦ ĐỀ THỰC VẬT VÀ ĐỘNG VẬT',
        topic: 'Chủ đề 3: THỰC VẬT VÀ ĐỘNG VẬT',
        semester: 2,
        week: 19,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 17: ÔN TẬP CHỦ ĐỀ THỰC VẬT VÀ ĐỘNG VẬT. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 17: ÔN TẬP CHỦ ĐỀ THỰC VẬT VÀ ĐỘNG VẬT"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 17: ÔN TẬP CHỦ ĐỀ THỰC VẬT VÀ ĐỘNG VẬT" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b22',
        lessonNumber: 22,
        title: 'Bài 18: VI KHUẨN XUNG QUANH CHÚNG TA',
        topic: 'Chủ đề 4: VI KHUẨN',
        semester: 2,
        week: 19,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 18: VI KHUẨN XUNG QUANH CHÚNG TA. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 18: VI KHUẨN XUNG QUANH CHÚNG TA"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 18: VI KHUẨN XUNG QUANH CHÚNG TA" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b23',
        lessonNumber: 23,
        title: 'Bài 19: VI KHUẨN CÓ ÍCH TRONG CHẾ BIẾN THỰC PHẨM',
        topic: 'Chủ đề 4: VI KHUẨN',
        semester: 2,
        week: 20,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 19: VI KHUẨN CÓ ÍCH TRONG CHẾ BIẾN THỰC PHẨM. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 19: VI KHUẨN CÓ ÍCH TRONG CHẾ BIẾN THỰC PHẨM"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 19: VI KHUẨN CÓ ÍCH TRONG CHẾ BIẾN THỰC PHẨM" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b24',
        lessonNumber: 24,
        title: 'Bài 20: VI KHUẨN GÂY BỆNH Ở NGƯỜI VÀ CÁCH PHÒNG TRÁNH',
        topic: 'Chủ đề 4: VI KHUẨN',
        semester: 2,
        week: 21,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 20: VI KHUẨN GÂY BỆNH Ở NGƯỜI VÀ CÁCH PHÒNG TRÁNH. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 20: VI KHUẨN GÂY BỆNH Ở NGƯỜI VÀ CÁCH PHÒNG TRÁNH"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 20: VI KHUẨN GÂY BỆNH Ở NGƯỜI VÀ CÁCH PHÒNG TRÁNH" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b25',
        lessonNumber: 25,
        title: 'Bài 21: ÔN TẬP CHỦ ĐỀ VI KHUẨN',
        topic: 'Chủ đề 4: VI KHUẨN',
        semester: 2,
        week: 22,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 21: ÔN TẬP CHỦ ĐỀ VI KHUẨN. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 21: ÔN TẬP CHỦ ĐỀ VI KHUẨN"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 21: ÔN TẬP CHỦ ĐỀ VI KHUẨN" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b26',
        lessonNumber: 26,
        title: 'Bài 22: SỰ HÌNH THÀNH CƠ THỂ NGƯỜI',
        topic: 'Chủ đề 5: CON NGƯỜI VÀ SỨC KHỎE',
        semester: 2,
        week: 23,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 22: SỰ HÌNH THÀNH CƠ THỂ NGƯỜI. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 22: SỰ HÌNH THÀNH CƠ THỂ NGƯỜI"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 22: SỰ HÌNH THÀNH CƠ THỂ NGƯỜI" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b27',
        lessonNumber: 27,
        title: 'Bài 23: CÁC GIAI ĐOẠN PHÁT TRIỂN CHÍNH CỦA CON NGƯỜI',
        topic: 'Chủ đề 5: CON NGƯỜI VÀ SỨC KHỎE',
        semester: 2,
        week: 24,
        duration: '3 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 23: CÁC GIAI ĐOẠN PHÁT TRIỂN CHÍNH CỦA CON NGƯỜI. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 23: CÁC GIAI ĐOẠN PHÁT TRIỂN CHÍNH CỦA CON NGƯỜI"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 23: CÁC GIAI ĐOẠN PHÁT TRIỂN CHÍNH CỦA CON NGƯỜI" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b28',
        lessonNumber: 28,
        title: 'Bài 24: NAM VÀ NỮ',
        topic: 'Chủ đề 5: CON NGƯỜI VÀ SỨC KHỎE',
        semester: 2,
        week: 25,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 24: NAM VÀ NỮ. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 24: NAM VÀ NỮ"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 24: NAM VÀ NỮ" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b29',
        lessonNumber: 29,
        title: 'Bài 25: CHĂM SÓC SỨC KHOẺ TUỔI DẬY THÌ',
        topic: 'Chủ đề 5: CON NGƯỜI VÀ SỨC KHỎE',
        semester: 2,
        week: 26,
        duration: '3 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 25: CHĂM SÓC SỨC KHOẺ TUỔI DẬY THÌ. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 25: CHĂM SÓC SỨC KHOẺ TUỔI DẬY THÌ"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 25: CHĂM SÓC SỨC KHOẺ TUỔI DẬY THÌ" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b30',
        lessonNumber: 30,
        title: 'Ôn tập giữa HKII',
        topic: 'Chủ đề 5: CON NGƯỜI VÀ SỨC KHỎE',
        semester: 2,
        week: 28,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Ôn tập giữa HKII. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Ôn tập giữa HKII"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Ôn tập giữa HKII" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b31',
        lessonNumber: 31,
        title: 'Kiểm tra giữa HKII',
        topic: 'Chủ đề 5: CON NGƯỜI VÀ SỨC KHỎE',
        semester: 2,
        week: 28,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Kiểm tra giữa HKII. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Kiểm tra giữa HKII"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Kiểm tra giữa HKII" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b32',
        lessonNumber: 32,
        title: 'Bài 26: PHÒNG TRÁNH BỊ XÂM HẠI',
        topic: 'Chủ đề 5: CON NGƯỜI VÀ SỨC KHỎE',
        semester: 2,
        week: 29,
        duration: '4 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 26: PHÒNG TRÁNH BỊ XÂM HẠI. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 26: PHÒNG TRÁNH BỊ XÂM HẠI"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 26: PHÒNG TRÁNH BỊ XÂM HẠI" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b33',
        lessonNumber: 33,
        title: 'Bài 27: ÔN TẬP CHỦ ĐỀ CON NGƯỜI VÀ SỨC KHOẺ',
        topic: 'Chủ đề 5: CON NGƯỜI VÀ SỨC KHỎE',
        semester: 2,
        week: 31,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 27: ÔN TẬP CHỦ ĐỀ CON NGƯỜI VÀ SỨC KHOẺ. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 27: ÔN TẬP CHỦ ĐỀ CON NGƯỜI VÀ SỨC KHOẺ"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 27: ÔN TẬP CHỦ ĐỀ CON NGƯỜI VÀ SỨC KHOẺ" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b34',
        lessonNumber: 34,
        title: 'Bài 28: CHỨC NĂNG CỦA MÔI TRƯỜNG ĐỐI VỚI SINH VẬT',
        topic: 'Chủ đề 6: SINH VẬT VÀ MÔI TRƯỜNG',
        semester: 2,
        week: 31,
        duration: '3 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 28: CHỨC NĂNG CỦA MÔI TRƯỜNG ĐỐI VỚI SINH VẬT. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 28: CHỨC NĂNG CỦA MÔI TRƯỜNG ĐỐI VỚI SINH VẬT"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 28: CHỨC NĂNG CỦA MÔI TRƯỜNG ĐỐI VỚI SINH VẬT" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b35',
        lessonNumber: 35,
        title: 'Bài 29: TÁC ĐỘNG CỦA CON NGƯỜI VÀ MỘT SỐ BIỆN PHÁP BẢO VỆ MÔI TRƯỜNG',
        topic: 'Chủ đề 6: SINH VẬT VÀ MÔI TRƯỜNG',
        semester: 2,
        week: 33,
        duration: '3 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 29: TÁC ĐỘNG CỦA CON NGƯỜI VÀ MỘT SỐ BIỆN PHÁP BẢO VỆ MÔI TRƯỜNG. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 29: TÁC ĐỘNG CỦA CON NGƯỜI VÀ MỘT SỐ BIỆN PHÁP BẢO VỆ MÔI TRƯỜNG"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 29: TÁC ĐỘNG CỦA CON NGƯỜI VÀ MỘT SỐ BIỆN PHÁP BẢO VỆ MÔI TRƯỜNG" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b36',
        lessonNumber: 36,
        title: 'Bài 30: ÔN TẬP CHỦ ĐỀ SINH VẬT VÀ MÔI TRƯỜNG',
        topic: 'Chủ đề 6: SINH VẬT VÀ MÔI TRƯỜNG',
        semester: 2,
        week: 34,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Bài 30: ÔN TẬP CHỦ ĐỀ SINH VẬT VÀ MÔI TRƯỜNG. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 30: ÔN TẬP CHỦ ĐỀ SINH VẬT VÀ MÔI TRƯỜNG"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Bài 30: ÔN TẬP CHỦ ĐỀ SINH VẬT VÀ MÔI TRƯỜNG" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b37',
        lessonNumber: 37,
        title: 'Ôn tập cuối năm',
        topic: 'Chủ đề 6: SINH VẬT VÀ MÔI TRƯỜNG',
        semester: 2,
        week: 35,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Ôn tập cuối năm. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Ôn tập cuối năm"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Ôn tập cuối năm" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
      {
        id: 'kh5_b38',
        lessonNumber: 38,
        title: 'Kiểm tra cuối năm',
        topic: 'Chủ đề 6: SINH VẬT VÀ MÔI TRƯỜNG',
        semester: 2,
        week: 35,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, vai trò và ứng dụng thực tiễn của Kiểm tra cuối năm. Rèn luyện phương pháp quan sát, thí nghiệm và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Kiểm tra cuối năm"?',
            options: ['Hiện tượng/tính chất khoa học diễn ra đúng theo quy luật tự nhiên', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Năng lượng không thể chuyển hóa', 'Môi trường không bị ảnh hưởng bởi tác động con người'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học tự nhiên và thí nghiệm trong bài học.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu vai trò hoặc cách ứng dụng thực tiễn của kiến thức trong bài "Kiểm tra cuối năm" vào đời sống hằng ngày.',
            guide: 'Nêu rõ ít nhất 2 ví dụ cụ thể về ứng dụng hoặc biện pháp bảo vệ sức khỏe/môi trường.'
          }
        ]
      },
    ]
  };

  if (typeof window !== 'undefined') {
    window.SGK_KHOA_HOC_5 = KHOA_HOC_5_DATA;
    if (window.SGK_REGISTRY && typeof window.SGK_REGISTRY.registerBook === 'function') {
      window.SGK_REGISTRY.registerBook(5, 'khoa_hoc', KHOA_HOC_5_DATA);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = KHOA_HOC_5_DATA;
  }
})(typeof window !== 'undefined' ? window : this);
