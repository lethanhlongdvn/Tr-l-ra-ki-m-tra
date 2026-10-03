/**
 * SỐ HÓA SÁCH GIÁO KHOA CÔNG NGHỆ LỚP 3
 * Bộ sách: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Nhà xuất bản: NXB Giáo dục Việt Nam
 * Chương trình Giáo dục phổ thông 2018
 */

(function(global) {
  'use strict';

  const CONG_NGHE_3_DATA = {
    metadata: {
      grade: 3,
      subjectId: 'cong_nghe',
      subjectName: 'Công nghệ',
      bookName: 'Công nghệ 3 - Kết nối tri thức với cuộc sống',
      publisher: 'Nhà xuất bản Giáo dục Việt Nam',
      totalWeeks: 35,
      totalPeriods: 35,
      volumes: [
        { volume: 1, name: 'Học kì I: Công nghệ và đời sống (Tuần 1 đến 18)', weeks: '1-18' },
        { volume: 2, name: 'Học kì II: Thủ công kĩ thuật (Tuần 19 đến 35)', weeks: '19-35' }
      ]
    },
    topics: [
      { id: 'cn3_cd1', name: 'Phần 1: Công nghệ và đời sống (Sử dụng đèn học, quạt điện, máy thu thanh, tivi)', semester: 1, weeks: '1-18' },
      { id: 'cn3_cd2', name: 'Phần 2: Thủ công kĩ thuật (Làm đồ chơi, làm thước kẻ, biển báo giao thông)', semester: 2, weeks: '19-35' }
    ],
    lessons: [
      {
        id: 'cn3_b1',
        lessonNumber: 1,
        title: 'Bài 1. Tự nhiên và công nghệ',
        topic: 'Tự nhiên và công nghệ',
        semester: 1,
        week: 1,
        duration: '1',
        coreKnowledge: 'Nhận biết các sản phẩm công nghệ trong gia đình, an toàn sử dụng thiết bị điện và kĩ năng làm đồ thủ công đơn giản trong bài "Bài 1. Tự nhiên và công nghệ".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Để sử dụng thiết bị trong bài "Bài 1. Tự nhiên và công nghệ" an toàn và tiết kiệm điện, em cần làm gì?',
            options: ['Tắt thiết bị khi không sử dụng và dùng đúng hướng dẫn', 'Cắm phích điện khi tay đang ướt', 'Để thiết bị chạy liên tục suốt ngày đêm', 'Nghịch dây điện và ổ cắm'],
            answer: 0,
            explanation: 'Tuân thủ quy tắc an toàn điện và sử dụng năng lượng tiết kiệm, hiệu quả.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước sử dụng an toàn thiết bị hoặc các bước làm sản phẩm thủ công trong bài "Bài 1. Tự nhiên và công nghệ".',
            guide: 'Nêu đầy đủ các bước thực hiện rõ ràng, an toàn và đúng quy trình.'
          }
        ]
      },
      {
        id: 'cn3_b2',
        lessonNumber: 2,
        title: 'Bài 2. Sử dụng đèn học',
        topic: 'Sử dụng đèn học',
        semester: 1,
        week: 3,
        duration: '3',
        coreKnowledge: 'Nhận biết các sản phẩm công nghệ trong gia đình, an toàn sử dụng thiết bị điện và kĩ năng làm đồ thủ công đơn giản trong bài "Bài 2. Sử dụng đèn học".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Để sử dụng thiết bị trong bài "Bài 2. Sử dụng đèn học" an toàn và tiết kiệm điện, em cần làm gì?',
            options: ['Tắt thiết bị khi không sử dụng và dùng đúng hướng dẫn', 'Cắm phích điện khi tay đang ướt', 'Để thiết bị chạy liên tục suốt ngày đêm', 'Nghịch dây điện và ổ cắm'],
            answer: 0,
            explanation: 'Tuân thủ quy tắc an toàn điện và sử dụng năng lượng tiết kiệm, hiệu quả.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước sử dụng an toàn thiết bị hoặc các bước làm sản phẩm thủ công trong bài "Bài 2. Sử dụng đèn học".',
            guide: 'Nêu đầy đủ các bước thực hiện rõ ràng, an toàn và đúng quy trình.'
          }
        ]
      },
      {
        id: 'cn3_b3',
        lessonNumber: 3,
        title: 'Bài 3. Sử dụng quạt điện',
        topic: 'Sử dụng quạt điện',
        semester: 1,
        week: 5,
        duration: '5',
        coreKnowledge: 'Nhận biết các sản phẩm công nghệ trong gia đình, an toàn sử dụng thiết bị điện và kĩ năng làm đồ thủ công đơn giản trong bài "Bài 3. Sử dụng quạt điện".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Để sử dụng thiết bị trong bài "Bài 3. Sử dụng quạt điện" an toàn và tiết kiệm điện, em cần làm gì?',
            options: ['Tắt thiết bị khi không sử dụng và dùng đúng hướng dẫn', 'Cắm phích điện khi tay đang ướt', 'Để thiết bị chạy liên tục suốt ngày đêm', 'Nghịch dây điện và ổ cắm'],
            answer: 0,
            explanation: 'Tuân thủ quy tắc an toàn điện và sử dụng năng lượng tiết kiệm, hiệu quả.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước sử dụng an toàn thiết bị hoặc các bước làm sản phẩm thủ công trong bài "Bài 3. Sử dụng quạt điện".',
            guide: 'Nêu đầy đủ các bước thực hiện rõ ràng, an toàn và đúng quy trình.'
          }
        ]
      },
      {
        id: 'cn3_b4',
        lessonNumber: 4,
        title: 'Bài 4. Sử dụng máy thu thanh',
        topic: 'Sử dụng máy thu thanh',
        semester: 1,
        week: 7,
        duration: '7',
        coreKnowledge: 'Nhận biết các sản phẩm công nghệ trong gia đình, an toàn sử dụng thiết bị điện và kĩ năng làm đồ thủ công đơn giản trong bài "Bài 4. Sử dụng máy thu thanh".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Để sử dụng thiết bị trong bài "Bài 4. Sử dụng máy thu thanh" an toàn và tiết kiệm điện, em cần làm gì?',
            options: ['Tắt thiết bị khi không sử dụng và dùng đúng hướng dẫn', 'Cắm phích điện khi tay đang ướt', 'Để thiết bị chạy liên tục suốt ngày đêm', 'Nghịch dây điện và ổ cắm'],
            answer: 0,
            explanation: 'Tuân thủ quy tắc an toàn điện và sử dụng năng lượng tiết kiệm, hiệu quả.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước sử dụng an toàn thiết bị hoặc các bước làm sản phẩm thủ công trong bài "Bài 4. Sử dụng máy thu thanh".',
            guide: 'Nêu đầy đủ các bước thực hiện rõ ràng, an toàn và đúng quy trình.'
          }
        ]
      },
      {
        id: 'cn3_b5',
        lessonNumber: 5,
        title: 'Bài 5. Sử dụng máy thu hình',
        topic: 'Sử dụng máy thu hình',
        semester: 1,
        week: 11,
        duration: '11',
        coreKnowledge: 'Nhận biết các sản phẩm công nghệ trong gia đình, an toàn sử dụng thiết bị điện và kĩ năng làm đồ thủ công đơn giản trong bài "Bài 5. Sử dụng máy thu hình".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Để sử dụng thiết bị trong bài "Bài 5. Sử dụng máy thu hình" an toàn và tiết kiệm điện, em cần làm gì?',
            options: ['Tắt thiết bị khi không sử dụng và dùng đúng hướng dẫn', 'Cắm phích điện khi tay đang ướt', 'Để thiết bị chạy liên tục suốt ngày đêm', 'Nghịch dây điện và ổ cắm'],
            answer: 0,
            explanation: 'Tuân thủ quy tắc an toàn điện và sử dụng năng lượng tiết kiệm, hiệu quả.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước sử dụng an toàn thiết bị hoặc các bước làm sản phẩm thủ công trong bài "Bài 5. Sử dụng máy thu hình".',
            guide: 'Nêu đầy đủ các bước thực hiện rõ ràng, an toàn và đúng quy trình.'
          }
        ]
      },
      {
        id: 'cn3_b6',
        lessonNumber: 6,
        title: 'Bài 6. An toàn với môi trường công nghệ trong gia đình',
        topic: 'An toàn với môi trường công nghệ trong gia đình',
        semester: 1,
        week: 15,
        duration: '15',
        coreKnowledge: 'Nhận biết các sản phẩm công nghệ trong gia đình, an toàn sử dụng thiết bị điện và kĩ năng làm đồ thủ công đơn giản trong bài "Bài 6. An toàn với môi trường công nghệ trong gia đình".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Để sử dụng thiết bị trong bài "Bài 6. An toàn với môi trường công nghệ trong gia đình" an toàn và tiết kiệm điện, em cần làm gì?',
            options: ['Tắt thiết bị khi không sử dụng và dùng đúng hướng dẫn', 'Cắm phích điện khi tay đang ướt', 'Để thiết bị chạy liên tục suốt ngày đêm', 'Nghịch dây điện và ổ cắm'],
            answer: 0,
            explanation: 'Tuân thủ quy tắc an toàn điện và sử dụng năng lượng tiết kiệm, hiệu quả.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước sử dụng an toàn thiết bị hoặc các bước làm sản phẩm thủ công trong bài "Bài 6. An toàn với môi trường công nghệ trong gia đình".',
            guide: 'Nêu đầy đủ các bước thực hiện rõ ràng, an toàn và đúng quy trình.'
          }
        ]
      },
      {
        id: 'cn3_b7',
        lessonNumber: 7,
        title: 'Bài 7. Dụng cụ và vật liệu làm thủ công',
        topic: 'Làm đồ dùng học tập',
        semester: 2,
        week: 21,
        duration: '21',
        coreKnowledge: 'Nhận biết các sản phẩm công nghệ trong gia đình, an toàn sử dụng thiết bị điện và kĩ năng làm đồ thủ công đơn giản trong bài "Bài 7. Dụng cụ và vật liệu làm thủ công".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Để sử dụng thiết bị trong bài "Bài 7. Dụng cụ và vật liệu làm thủ công" an toàn và tiết kiệm điện, em cần làm gì?',
            options: ['Tắt thiết bị khi không sử dụng và dùng đúng hướng dẫn', 'Cắm phích điện khi tay đang ướt', 'Để thiết bị chạy liên tục suốt ngày đêm', 'Nghịch dây điện và ổ cắm'],
            answer: 0,
            explanation: 'Tuân thủ quy tắc an toàn điện và sử dụng năng lượng tiết kiệm, hiệu quả.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước sử dụng an toàn thiết bị hoặc các bước làm sản phẩm thủ công trong bài "Bài 7. Dụng cụ và vật liệu làm thủ công".',
            guide: 'Nêu đầy đủ các bước thực hiện rõ ràng, an toàn và đúng quy trình.'
          }
        ]
      },
      {
        id: 'cn3_b8',
        lessonNumber: 8,
        title: 'Bài 8. Làm đồ dùng học tập',
        topic: 'Làm đồ dùng học tập',
        semester: 2,
        week: 23,
        duration: '23',
        coreKnowledge: 'Nhận biết các sản phẩm công nghệ trong gia đình, an toàn sử dụng thiết bị điện và kĩ năng làm đồ thủ công đơn giản trong bài "Bài 8. Làm đồ dùng học tập".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Để sử dụng thiết bị trong bài "Bài 8. Làm đồ dùng học tập" an toàn và tiết kiệm điện, em cần làm gì?',
            options: ['Tắt thiết bị khi không sử dụng và dùng đúng hướng dẫn', 'Cắm phích điện khi tay đang ướt', 'Để thiết bị chạy liên tục suốt ngày đêm', 'Nghịch dây điện và ổ cắm'],
            answer: 0,
            explanation: 'Tuân thủ quy tắc an toàn điện và sử dụng năng lượng tiết kiệm, hiệu quả.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước sử dụng an toàn thiết bị hoặc các bước làm sản phẩm thủ công trong bài "Bài 8. Làm đồ dùng học tập".',
            guide: 'Nêu đầy đủ các bước thực hiện rõ ràng, an toàn và đúng quy trình.'
          }
        ]
      },
      {
        id: 'cn3_b9',
        lessonNumber: 9,
        title: 'Bài 9. Làm biển báo giao thông',
        topic: 'Làm biển báo giao thông',
        semester: 2,
        week: 26,
        duration: '26',
        coreKnowledge: 'Nhận biết các sản phẩm công nghệ trong gia đình, an toàn sử dụng thiết bị điện và kĩ năng làm đồ thủ công đơn giản trong bài "Bài 9. Làm biển báo giao thông".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Để sử dụng thiết bị trong bài "Bài 9. Làm biển báo giao thông" an toàn và tiết kiệm điện, em cần làm gì?',
            options: ['Tắt thiết bị khi không sử dụng và dùng đúng hướng dẫn', 'Cắm phích điện khi tay đang ướt', 'Để thiết bị chạy liên tục suốt ngày đêm', 'Nghịch dây điện và ổ cắm'],
            answer: 0,
            explanation: 'Tuân thủ quy tắc an toàn điện và sử dụng năng lượng tiết kiệm, hiệu quả.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước sử dụng an toàn thiết bị hoặc các bước làm sản phẩm thủ công trong bài "Bài 9. Làm biển báo giao thông".',
            guide: 'Nêu đầy đủ các bước thực hiện rõ ràng, an toàn và đúng quy trình.'
          }
        ]
      },
      {
        id: 'cn3_b10',
        lessonNumber: 10,
        title: 'Bài 10. Làm đồ chơi',
        topic: 'Làm đồ chơi',
        semester: 2,
        week: 30,
        duration: '30',
        coreKnowledge: 'Nhận biết các sản phẩm công nghệ trong gia đình, an toàn sử dụng thiết bị điện và kĩ năng làm đồ thủ công đơn giản trong bài "Bài 10. Làm đồ chơi".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Để sử dụng thiết bị trong bài "Bài 10. Làm đồ chơi" an toàn và tiết kiệm điện, em cần làm gì?',
            options: ['Tắt thiết bị khi không sử dụng và dùng đúng hướng dẫn', 'Cắm phích điện khi tay đang ướt', 'Để thiết bị chạy liên tục suốt ngày đêm', 'Nghịch dây điện và ổ cắm'],
            answer: 0,
            explanation: 'Tuân thủ quy tắc an toàn điện và sử dụng năng lượng tiết kiệm, hiệu quả.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước sử dụng an toàn thiết bị hoặc các bước làm sản phẩm thủ công trong bài "Bài 10. Làm đồ chơi".',
            guide: 'Nêu đầy đủ các bước thực hiện rõ ràng, an toàn và đúng quy trình.'
          }
        ]
      },
    ]
  };

  if (typeof window !== 'undefined') {
    window.SGK_CONG_NGHE_3 = CONG_NGHE_3_DATA;
    if (window.SGK_REGISTRY && typeof window.SGK_REGISTRY.registerBook === 'function') {
      window.SGK_REGISTRY.registerBook(3, 'cong_nghe', CONG_NGHE_3_DATA);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONG_NGHE_3_DATA;
  }
})(typeof window !== 'undefined' ? window : this);
