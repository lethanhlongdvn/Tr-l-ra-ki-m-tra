/**
 * SỐ HÓA SÁCH GIÁO KHOA KHOA HỌC LỚP 4
 * Bộ sách: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Nhà xuất bản: NXB Giáo dục Việt Nam
 * Chương trình Giáo dục phổ thông 2018
 */

(function(global) {
  'use strict';

  const KHOA_HOC_4_DATA = {
    metadata: {
      grade: 4,
      subjectId: 'khoa_hoc',
      subjectName: 'Khoa học',
      bookName: 'Khoa học 4 - Kết nối tri thức với cuộc sống',
      publisher: 'Nhà xuất bản Giáo dục Việt Nam',
      totalWeeks: 35,
      totalPeriods: 70,
      volumes: [
        { volume: 1, name: 'Học kì I (Tuần 1 đến 18)', weeks: '1-18' },
        { volume: 2, name: 'Học kì II (Tuần 19 đến 35)', weeks: '19-35' }
      ]
    },
    topics: [
      { id: 'kh4_cd1', name: 'Chủ đề 1: Chất (Nước và Không khí)', semester: 1, weeks: '1-8' },
      { id: 'kh4_cd2', name: 'Chủ đề 2: Năng lượng (Ánh sáng, Âm thanh, Nhiệt)', semester: 1, weeks: '9-16' },
      { id: 'kh4_cd_on1', name: 'Ôn tập học kì 1', semester: 1, weeks: '17-18' },
      { id: 'kh4_cd3', name: 'Chủ đề 3: Thực vật và động vật', semester: 2, weeks: '19-25' },
      { id: 'kh4_cd4', name: 'Chủ đề 4: Nấm', semester: 2, weeks: '26-27' },
      { id: 'kh4_cd5', name: 'Chủ đề 5: Con người và sức khỏe (Dinh dưỡng và phòng bệnh)', semester: 2, weeks: '28-32' },
      { id: 'kh4_cd6', name: 'Chủ đề 6: Sinh vật và môi trường (Chuỗi thức ăn)', semester: 2, weeks: '33-34' },
      { id: 'kh4_cd_on2', name: 'Ôn tập cuối năm', semester: 2, weeks: '35' }
    ],
    lessons: [
      {
        id: 'kh4_b1',
        lessonNumber: 1,
        title: 'Bài 1: Tính chất của nước và nước với cuộc sống',
        topic: 'Chủ đề 1: Chất',
        semester: 1,
        week: 1,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 1: Tính chất của nước và nước với cuộc sống. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 1: Tính chất của nước và nước với cuộc sống"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 1: Tính chất của nước và nước với cuộc sống".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b2',
        lessonNumber: 2,
        title: 'Bài 2: Sự chuyển thể của nước và vòng tuần hoàn của nước trong tự nhiên',
        topic: 'Chủ đề 1: Chất',
        semester: 1,
        week: 2,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 2: Sự chuyển thể của nước và vòng tuần hoàn của nước trong tự nhiên. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 2: Sự chuyển thể của nước và vòng tuần hoàn của nước trong tự nhiên"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 2: Sự chuyển thể của nước và vòng tuần hoàn của nước trong tự nhiên".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b3',
        lessonNumber: 3,
        title: 'Bài 3: Sự ô nhiễm và bảo vệ nguồn nước. Một số cách làm sạch nước',
        topic: 'Chủ đề 1: Chất',
        semester: 1,
        week: 3,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 3: Sự ô nhiễm và bảo vệ nguồn nước. Một số cách làm sạch nước. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 3: Sự ô nhiễm và bảo vệ nguồn nước. Một số cách làm sạch nước"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 3: Sự ô nhiễm và bảo vệ nguồn nước. Một số cách làm sạch nước".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b4',
        lessonNumber: 4,
        title: 'Bài 4: Không khí có ở đâu? Tính chất và thành phần của không khí',
        topic: 'Chủ đề 1: Chất',
        semester: 1,
        week: 4,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 4: Không khí có ở đâu? Tính chất và thành phần của không khí. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 4: Không khí có ở đâu? Tính chất và thành phần của không khí"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 4: Không khí có ở đâu? Tính chất và thành phần của không khí".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b5',
        lessonNumber: 5,
        title: 'Bài 5: Vai trò của không khí và bảo vệ bầu không khí trong lành',
        topic: 'Chủ đề 1: Chất',
        semester: 1,
        week: 5,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 5: Vai trò của không khí và bảo vệ bầu không khí trong lành. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 5: Vai trò của không khí và bảo vệ bầu không khí trong lành"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 5: Vai trò của không khí và bảo vệ bầu không khí trong lành".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b6',
        lessonNumber: 6,
        title: 'Bài 6: Gió, bão và phòng chống bão',
        topic: 'Chủ đề 1: Chất',
        semester: 1,
        week: 6,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 6: Gió, bão và phòng chống bão. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 6: Gió, bão và phòng chống bão"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 6: Gió, bão và phòng chống bão".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b7',
        lessonNumber: 7,
        title: 'Bài 7: Ôn tập chủ đề: Chất',
        topic: 'Chủ đề 1: Chất',
        semester: 1,
        week: 7,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 7: Ôn tập chủ đề: Chất. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 7: Ôn tập chủ đề: Chất"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 7: Ôn tập chủ đề: Chất".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b8',
        lessonNumber: 8,
        title: 'Bài 8: Ánh sáng và sự truyền ánh sáng',
        topic: 'Chủ đề 2: Năng lượng',
        semester: 1,
        week: 7,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 8: Ánh sáng và sự truyền ánh sáng. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 8: Ánh sáng và sự truyền ánh sáng"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 8: Ánh sáng và sự truyền ánh sáng".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b9',
        lessonNumber: 9,
        title: 'Bài 9: Vai trò của ánh sáng',
        topic: 'Chủ đề 2: Năng lượng',
        semester: 1,
        week: 8,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 9: Vai trò của ánh sáng. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 9: Vai trò của ánh sáng"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 9: Vai trò của ánh sáng".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b10',
        lessonNumber: 10,
        title: 'Bài 10: Âm thanh và sự truyền âm thanh',
        topic: 'Chủ đề 2: Năng lượng',
        semester: 1,
        week: 9,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 10: Âm thanh và sự truyền âm thanh. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 10: Âm thanh và sự truyền âm thanh"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 10: Âm thanh và sự truyền âm thanh".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b11',
        lessonNumber: 11,
        title: 'Bài 11: Âm thanh trong cuộc sống',
        topic: 'Chủ đề 2: Năng lượng',
        semester: 1,
        week: 10,
        duration: '3 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 11: Âm thanh trong cuộc sống. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 11: Âm thanh trong cuộc sống"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 11: Âm thanh trong cuộc sống".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b12',
        lessonNumber: 12,
        title: 'Bài 12: Nhiệt độ và sự truyền nhiệt',
        topic: 'Chủ đề 2: Năng lượng',
        semester: 1,
        week: 12,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 12: Nhiệt độ và sự truyền nhiệt. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 12: Nhiệt độ và sự truyền nhiệt"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 12: Nhiệt độ và sự truyền nhiệt".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b13',
        lessonNumber: 13,
        title: 'Bài 13: Vật dẫn nhiệt tốt, vật dẫn nhiệt kém',
        topic: 'Chủ đề 2: Năng lượng',
        semester: 1,
        week: 13,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 13: Vật dẫn nhiệt tốt, vật dẫn nhiệt kém. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 13: Vật dẫn nhiệt tốt, vật dẫn nhiệt kém"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 13: Vật dẫn nhiệt tốt, vật dẫn nhiệt kém".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b14',
        lessonNumber: 14,
        title: 'Bài 14: Ôn tập chủ đề Năng lượng',
        topic: 'Chủ đề 2: Năng lượng',
        semester: 1,
        week: 14,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 14: Ôn tập chủ đề Năng lượng. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 14: Ôn tập chủ đề Năng lượng"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 14: Ôn tập chủ đề Năng lượng".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b15',
        lessonNumber: 15,
        title: 'Bài 15: Thực vật cần gì để sống?',
        topic: 'Chủ đề 3: Thực vật và động vật',
        semester: 1,
        week: 14,
        duration: '3 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 15: Thực vật cần gì để sống?. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 15: Thực vật cần gì để sống?"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 15: Thực vật cần gì để sống?".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b16',
        lessonNumber: 16,
        title: 'Bài 16: Động vật cần gì để sống?',
        topic: 'Chủ đề 3: Thực vật và động vật',
        semester: 1,
        week: 16,
        duration: '3 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 16: Động vật cần gì để sống?. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 16: Động vật cần gì để sống?"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 16: Động vật cần gì để sống?".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b17',
        lessonNumber: 17,
        title: 'Bài 17: Chăm sóc cây trồng, vật nuôi',
        topic: 'Chủ đề 3: Thực vật và động vật',
        semester: 1,
        week: 17,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 17: Chăm sóc cây trồng, vật nuôi. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 17: Chăm sóc cây trồng, vật nuôi"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 17: Chăm sóc cây trồng, vật nuôi".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b18',
        lessonNumber: 18,
        title: 'Bài 18: Ôn tập chủ đề Thực vật và động vật',
        topic: 'Chủ đề 3: Thực vật và động vật',
        semester: 2,
        week: 19,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 18: Ôn tập chủ đề Thực vật và động vật. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 18: Ôn tập chủ đề Thực vật và động vật"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 18: Ôn tập chủ đề Thực vật và động vật".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b19',
        lessonNumber: 19,
        title: 'Bài 19: Đặc điểm chung của nấm',
        topic: 'Chủ đề 4: Nấm',
        semester: 2,
        week: 19,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 19: Đặc điểm chung của nấm. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 19: Đặc điểm chung của nấm"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 19: Đặc điểm chung của nấm".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b20',
        lessonNumber: 20,
        title: 'Bài 20: Nấm ăn và nấm trong chế biến thực phẩm',
        topic: 'Chủ đề 4: Nấm',
        semester: 2,
        week: 20,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 20: Nấm ăn và nấm trong chế biến thực phẩm. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 20: Nấm ăn và nấm trong chế biến thực phẩm"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 20: Nấm ăn và nấm trong chế biến thực phẩm".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b21',
        lessonNumber: 21,
        title: 'Bài 21: Nấm gây hỏng thực phẩm và nấm độc',
        topic: 'Chủ đề 4: Nấm',
        semester: 2,
        week: 21,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 21: Nấm gây hỏng thực phẩm và nấm độc. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 21: Nấm gây hỏng thực phẩm và nấm độc"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 21: Nấm gây hỏng thực phẩm và nấm độc".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b22',
        lessonNumber: 22,
        title: 'Bài 22: Ôn tập chủ đề Nấm',
        topic: 'Chủ đề 4: Nấm',
        semester: 2,
        week: 22,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 22: Ôn tập chủ đề Nấm. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 22: Ôn tập chủ đề Nấm"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 22: Ôn tập chủ đề Nấm".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b23',
        lessonNumber: 23,
        title: 'Bài 23: Vai trò của chất dinh dưỡng đối với cơ thể',
        topic: 'Chủ đề 5: Con người và sức khỏe',
        semester: 2,
        week: 23,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 23: Vai trò của chất dinh dưỡng đối với cơ thể. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 23: Vai trò của chất dinh dưỡng đối với cơ thể"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 23: Vai trò của chất dinh dưỡng đối với cơ thể".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b24',
        lessonNumber: 24,
        title: 'Bài 24: Chế độ ăn uống cân bằng',
        topic: 'Chủ đề 5: Con người và sức khỏe',
        semester: 2,
        week: 24,
        duration: '3 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 24: Chế độ ăn uống cân bằng. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 24: Chế độ ăn uống cân bằng"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 24: Chế độ ăn uống cân bằng".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b25',
        lessonNumber: 25,
        title: 'Bài 25: Một số bệnh liên quan đến dinh dưỡng',
        topic: 'Chủ đề 5: Con người và sức khỏe',
        semester: 2,
        week: 25,
        duration: '3 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 25: Một số bệnh liên quan đến dinh dưỡng. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 25: Một số bệnh liên quan đến dinh dưỡng"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 25: Một số bệnh liên quan đến dinh dưỡng".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b26',
        lessonNumber: 26,
        title: 'Bài 26: Thực phẩm an toàn',
        topic: 'Chủ đề 5: Con người và sức khỏe',
        semester: 2,
        week: 27,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 26: Thực phẩm an toàn. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 26: Thực phẩm an toàn"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 26: Thực phẩm an toàn".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b27',
        lessonNumber: 27,
        title: 'Bài 27: Phòng tránh đuối nước',
        topic: 'Chủ đề 5: Con người và sức khỏe',
        semester: 2,
        week: 28,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 27: Phòng tránh đuối nước. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 27: Phòng tránh đuối nước"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 27: Phòng tránh đuối nước".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b28',
        lessonNumber: 28,
        title: 'Bài 28: Ôn tập chủ đề Con người và sức khỏe',
        topic: 'Chủ đề 5: Con người và sức khỏe',
        semester: 2,
        week: 29,
        duration: '2 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 28: Ôn tập chủ đề Con người và sức khỏe. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 28: Ôn tập chủ đề Con người và sức khỏe"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 28: Ôn tập chủ đề Con người và sức khỏe".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b29',
        lessonNumber: 29,
        title: 'Bài 29: Chuỗi thức ăn trong tự nhiên',
        topic: 'Chủ đề 6: Sinh vật và môi trường',
        semester: 2,
        week: 30,
        duration: '3 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 29: Chuỗi thức ăn trong tự nhiên. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 29: Chuỗi thức ăn trong tự nhiên"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 29: Chuỗi thức ăn trong tự nhiên".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b30',
        lessonNumber: 30,
        title: 'Bài 30: Vai trò của thực vật trong chuỗi thức ăn',
        topic: 'Chủ đề 6: Sinh vật và môi trường',
        semester: 2,
        week: 31,
        duration: '3 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 30: Vai trò của thực vật trong chuỗi thức ăn. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 30: Vai trò của thực vật trong chuỗi thức ăn"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 30: Vai trò của thực vật trong chuỗi thức ăn".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
      {
        id: 'kh4_b31',
        lessonNumber: 31,
        title: 'Bài 31: Ôn tập chủ đề Sinh vật và môi trường',
        topic: 'Chủ đề 6: Sinh vật và môi trường',
        semester: 2,
        week: 33,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu đặc điểm khoa học, tính chất, thí nghiệm và ứng dụng của Bài 31: Ôn tập chủ đề Sinh vật và môi trường. Rèn luyện ý thức bảo vệ nguồn nước, môi trường và giữ gìn sức khỏe.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khẳng định nào sau đây là đúng khi nói về nội dung bài "Bài 31: Ôn tập chủ đề Sinh vật và môi trường"?',
            options: ['Tính chất khoa học diễn ra theo đúng quy luật tự nhiên được mô tả trong SGK', 'Mọi chất đều có tính chất hoàn toàn giống nhau', 'Không khí không có thể tích và khối lượng', 'Nước chỉ tồn tại ở một thể duy nhất'],
            answer: 0,
            explanation: 'Dựa trên kiến thức khoa học và thí nghiệm thực hành trong bài.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu ví dụ thực tế hoặc biện pháp bảo vệ môi trường, sức khỏe liên quan đến bài "Bài 31: Ôn tập chủ đề Sinh vật và môi trường".',
            guide: 'Nêu rõ ràng 2 ví dụ thực tế hoặc việc làm cụ thể của học sinh.'
          }
        ]
      },
    ]
  };

  if (typeof window !== 'undefined') {
    window.SGK_KHOA_HOC_4 = KHOA_HOC_4_DATA;
    if (window.SGK_REGISTRY && typeof window.SGK_REGISTRY.registerBook === 'function') {
      window.SGK_REGISTRY.registerBook(4, 'khoa_hoc', KHOA_HOC_4_DATA);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = KHOA_HOC_4_DATA;
  }
})(typeof window !== 'undefined' ? window : this);
