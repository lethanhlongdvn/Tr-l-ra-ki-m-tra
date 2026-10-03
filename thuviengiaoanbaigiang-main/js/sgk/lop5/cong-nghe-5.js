/**
 * SỐ HÓA SÁCH GIÁO KHOA CÔNG NGHỆ LỚP 5
 * Bộ sách: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Nhà xuất bản: NXB Giáo dục Việt Nam
 * Chương trình Giáo dục phổ thông 2018
 */

(function(global) {
  'use strict';

  const CONG_NGHE_5_DATA = {
    metadata: {
      grade: 5,
      subjectId: 'cong_nghe',
      subjectName: 'Công nghệ',
      bookName: 'Công nghệ 5 - Kết nối tri thức với cuộc sống',
      publisher: 'Nhà xuất bản Giáo dục Việt Nam',
      totalWeeks: 35,
      totalPeriods: 35,
      volumes: [
        { volume: 1, name: 'Học kì I: Công nghệ và đời sống (Tuần 1 đến 18)', weeks: '1-18' },
        { volume: 2, name: 'Học kì II: Thủ công kĩ thuật (Tuần 19 đến 35)', weeks: '19-35' }
      ]
    },
    topics: [
      { id: 'cn5_cd1', name: 'Phần 1: Công nghệ và đời sống', semester: 1, weeks: '1-18' },
      { id: 'cn5_cd2', name: 'Phần 2: Thủ công kĩ thuật - Trồng hoa, cây cảnh trong chậu', semester: 2, weeks: '19-27' },
      { id: 'cn5_cd3', name: 'Phần 3: Lắp ráp mô hình kĩ thuật', semester: 2, weeks: '28-35' }
    ],
    lessons: [
      {
        id: 'cn5_b1',
        lessonNumber: 1,
        title: 'Bài 1. Vai trò của công nghệ, tiết 1',
        topic: 'Công nghệ và đời sống',
        semester: 1,
        week: 1,
        duration: '2 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 1. Vai trò của công nghệ, tiết 1".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 1. Vai trò của công nghệ, tiết 1", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 1. Vai trò của công nghệ, tiết 1".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b2',
        lessonNumber: 2,
        title: 'Bài 1. Vai trò của công nghệ, tiết 2',
        topic: 'Công nghệ và đời sống',
        semester: 1,
        week: 2,
        duration: '2 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 1. Vai trò của công nghệ, tiết 2".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 1. Vai trò của công nghệ, tiết 2", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 1. Vai trò của công nghệ, tiết 2".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b3',
        lessonNumber: 3,
        title: 'Bài 2. Nhà sáng chế, tiết 1',
        topic: 'Công nghệ và đời sống',
        semester: 1,
        week: 3,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 2. Nhà sáng chế, tiết 1".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 2. Nhà sáng chế, tiết 1", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 2. Nhà sáng chế, tiết 1".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b4',
        lessonNumber: 4,
        title: 'Bài 2. Nhà sáng chế, tiết 2',
        topic: 'Công nghệ và đời sống',
        semester: 1,
        week: 4,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 2. Nhà sáng chế, tiết 2".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 2. Nhà sáng chế, tiết 2", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 2. Nhà sáng chế, tiết 2".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b5',
        lessonNumber: 5,
        title: 'Bài 2. Nhà sáng chế, tiết 3',
        topic: 'Công nghệ và đời sống',
        semester: 1,
        week: 5,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 2. Nhà sáng chế, tiết 3".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 2. Nhà sáng chế, tiết 3", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 2. Nhà sáng chế, tiết 3".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b6',
        lessonNumber: 6,
        title: 'Bài 2. Nhà sáng chế, tiết 4',
        topic: 'Công nghệ và đời sống',
        semester: 1,
        week: 6,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 2. Nhà sáng chế, tiết 4".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 2. Nhà sáng chế, tiết 4", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 2. Nhà sáng chế, tiết 4".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b7',
        lessonNumber: 7,
        title: 'Bài 3. Tìm hiểu thiết kế, tiết 1',
        topic: 'Công nghệ và đời sống',
        semester: 1,
        week: 7,
        duration: '2 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 3. Tìm hiểu thiết kế, tiết 1".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 3. Tìm hiểu thiết kế, tiết 1", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 3. Tìm hiểu thiết kế, tiết 1".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b8',
        lessonNumber: 8,
        title: 'Bài 3. Tìm hiểu thiết kế, tiết 2',
        topic: 'Công nghệ và đời sống',
        semester: 1,
        week: 8,
        duration: '2 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 3. Tìm hiểu thiết kế, tiết 2".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 3. Tìm hiểu thiết kế, tiết 2", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 3. Tìm hiểu thiết kế, tiết 2".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b9',
        lessonNumber: 9,
        title: 'Bài 4. Thiết kế sản phẩm, tiết 1',
        topic: 'Công nghệ và đời sống',
        semester: 1,
        week: 9,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 4. Thiết kế sản phẩm, tiết 1".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 4. Thiết kế sản phẩm, tiết 1", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 4. Thiết kế sản phẩm, tiết 1".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b10',
        lessonNumber: 10,
        title: 'Bài 4. Thiết kế sản phẩm, tiết 2',
        topic: 'Công nghệ và đời sống',
        semester: 1,
        week: 10,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 4. Thiết kế sản phẩm, tiết 2".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 4. Thiết kế sản phẩm, tiết 2", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 4. Thiết kế sản phẩm, tiết 2".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b11',
        lessonNumber: 11,
        title: 'Bài 4. Thiết kế sản phẩm, tiết 3',
        topic: 'Công nghệ và đời sống',
        semester: 1,
        week: 11,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 4. Thiết kế sản phẩm, tiết 3".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 4. Thiết kế sản phẩm, tiết 3", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 4. Thiết kế sản phẩm, tiết 3".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b12',
        lessonNumber: 12,
        title: 'Bài 4. Thiết kế sản phẩm, tiết 4',
        topic: 'Công nghệ và đời sống',
        semester: 1,
        week: 12,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 4. Thiết kế sản phẩm, tiết 4".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 4. Thiết kế sản phẩm, tiết 4", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 4. Thiết kế sản phẩm, tiết 4".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b13',
        lessonNumber: 13,
        title: 'Bài 5. Sử dụng điện thoại, tiết 1',
        topic: 'Công nghệ và đời sống',
        semester: 1,
        week: 13,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 5. Sử dụng điện thoại, tiết 1".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 5. Sử dụng điện thoại, tiết 1", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 5. Sử dụng điện thoại, tiết 1".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b14',
        lessonNumber: 14,
        title: 'Bài 5. Sử dụng điện thoại, tiết 2',
        topic: 'Công nghệ và đời sống',
        semester: 1,
        week: 14,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 5. Sử dụng điện thoại, tiết 2".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 5. Sử dụng điện thoại, tiết 2", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 5. Sử dụng điện thoại, tiết 2".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b15',
        lessonNumber: 15,
        title: 'Bài 5. Sử dụng điện thoại, tiết 3',
        topic: 'Công nghệ và đời sống',
        semester: 1,
        week: 15,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 5. Sử dụng điện thoại, tiết 3".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 5. Sử dụng điện thoại, tiết 3", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 5. Sử dụng điện thoại, tiết 3".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b16',
        lessonNumber: 16,
        title: 'Bài 5. Sử dụng điện thoại, tiết 4',
        topic: 'Công nghệ và đời sống',
        semester: 1,
        week: 16,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 5. Sử dụng điện thoại, tiết 4".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 5. Sử dụng điện thoại, tiết 4", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 5. Sử dụng điện thoại, tiết 4".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b17',
        lessonNumber: 17,
        title: 'Ôn tập cuối học kì I',
        topic: 'Ôn tập và kiểm tra học kì I',
        semester: 1,
        week: 17,
        duration: '2 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Ôn tập cuối học kì I".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Ôn tập cuối học kì I", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Ôn tập cuối học kì I".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b18',
        lessonNumber: 18,
        title: 'Kiểm tra định kì cuối học kì I',
        topic: 'Ôn tập và kiểm tra học kì I',
        semester: 1,
        week: 18,
        duration: '2 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Kiểm tra định kì cuối học kì I".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Kiểm tra định kì cuối học kì I", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Kiểm tra định kì cuối học kì I".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b19',
        lessonNumber: 19,
        title: 'Bài 6. Sử dụng tủ lạnh, tiết 1',
        topic: 'Công nghệ và đời sống',
        semester: 2,
        week: 19,
        duration: '3 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 6. Sử dụng tủ lạnh, tiết 1".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 6. Sử dụng tủ lạnh, tiết 1", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 6. Sử dụng tủ lạnh, tiết 1".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b20',
        lessonNumber: 20,
        title: 'Bài 6. Sử dụng tủ lạnh, tiết 2',
        topic: 'Công nghệ và đời sống',
        semester: 2,
        week: 20,
        duration: '3 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 6. Sử dụng tủ lạnh, tiết 2".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 6. Sử dụng tủ lạnh, tiết 2", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 6. Sử dụng tủ lạnh, tiết 2".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b21',
        lessonNumber: 21,
        title: 'Bài 6. Sử dụng tủ lạnh, tiết 3',
        topic: 'Công nghệ và đời sống',
        semester: 2,
        week: 21,
        duration: '3 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 6. Sử dụng tủ lạnh, tiết 3".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 6. Sử dụng tủ lạnh, tiết 3", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 6. Sử dụng tủ lạnh, tiết 3".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b22',
        lessonNumber: 22,
        title: 'Bài 7. Lắp ráp mô hình xe điện chạy bằng pin, tiết 1',
        topic: 'Thủ công kĩ thuật',
        semester: 2,
        week: 22,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 7. Lắp ráp mô hình xe điện chạy bằng pin, tiết 1".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 7. Lắp ráp mô hình xe điện chạy bằng pin, tiết 1", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 7. Lắp ráp mô hình xe điện chạy bằng pin, tiết 1".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b23',
        lessonNumber: 23,
        title: 'Bài 7. Lắp ráp mô hình xe điện chạy bằng pin, tiết 2',
        topic: 'Thủ công kĩ thuật',
        semester: 2,
        week: 23,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 7. Lắp ráp mô hình xe điện chạy bằng pin, tiết 2".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 7. Lắp ráp mô hình xe điện chạy bằng pin, tiết 2", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 7. Lắp ráp mô hình xe điện chạy bằng pin, tiết 2".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b24',
        lessonNumber: 24,
        title: 'Bài 7. Lắp ráp mô hình xe điện chạy bằng pin, tiết 3',
        topic: 'Thủ công kĩ thuật',
        semester: 2,
        week: 24,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 7. Lắp ráp mô hình xe điện chạy bằng pin, tiết 3".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 7. Lắp ráp mô hình xe điện chạy bằng pin, tiết 3", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 7. Lắp ráp mô hình xe điện chạy bằng pin, tiết 3".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b25',
        lessonNumber: 25,
        title: 'Bài 7. Lắp ráp mô hình xe điện chạy bằng pin, tiết 4',
        topic: 'Thủ công kĩ thuật',
        semester: 2,
        week: 25,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 7. Lắp ráp mô hình xe điện chạy bằng pin, tiết 4".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 7. Lắp ráp mô hình xe điện chạy bằng pin, tiết 4", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 7. Lắp ráp mô hình xe điện chạy bằng pin, tiết 4".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b26',
        lessonNumber: 26,
        title: 'Bài 8. Mô hình máy phát điện gió, tiết 1',
        topic: 'Thủ công kĩ thuật',
        semester: 2,
        week: 26,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 8. Mô hình máy phát điện gió, tiết 1".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 8. Mô hình máy phát điện gió, tiết 1", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 8. Mô hình máy phát điện gió, tiết 1".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b27',
        lessonNumber: 27,
        title: 'Bài 8. Mô hình máy phát điện gió, tiết 2',
        topic: 'Thủ công kĩ thuật',
        semester: 2,
        week: 27,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 8. Mô hình máy phát điện gió, tiết 2".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 8. Mô hình máy phát điện gió, tiết 2", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 8. Mô hình máy phát điện gió, tiết 2".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b28',
        lessonNumber: 28,
        title: 'Bài 8. Mô hình máy phát điện gió, tiết 3',
        topic: 'Thủ công kĩ thuật',
        semester: 2,
        week: 28,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 8. Mô hình máy phát điện gió, tiết 3".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 8. Mô hình máy phát điện gió, tiết 3", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 8. Mô hình máy phát điện gió, tiết 3".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b29',
        lessonNumber: 29,
        title: 'Bài 8. Mô hình máy phát điện gió, tiết 4',
        topic: 'Thủ công kĩ thuật',
        semester: 2,
        week: 29,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 8. Mô hình máy phát điện gió, tiết 4".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 8. Mô hình máy phát điện gió, tiết 4", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 8. Mô hình máy phát điện gió, tiết 4".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b30',
        lessonNumber: 30,
        title: 'Bài 9. Mô hình điện mặt trời, tiết 1',
        topic: 'Thủ công kĩ thuật',
        semester: 2,
        week: 30,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 9. Mô hình điện mặt trời, tiết 1".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 9. Mô hình điện mặt trời, tiết 1", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 9. Mô hình điện mặt trời, tiết 1".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b31',
        lessonNumber: 31,
        title: 'Bài 9. Mô hình điện mặt trời, tiết 2',
        topic: 'Thủ công kĩ thuật',
        semester: 2,
        week: 31,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 9. Mô hình điện mặt trời, tiết 2".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 9. Mô hình điện mặt trời, tiết 2", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 9. Mô hình điện mặt trời, tiết 2".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b32',
        lessonNumber: 32,
        title: 'Bài 9. Mô hình điện mặt trời, tiết 3',
        topic: 'Thủ công kĩ thuật',
        semester: 2,
        week: 32,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 9. Mô hình điện mặt trời, tiết 3".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 9. Mô hình điện mặt trời, tiết 3", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 9. Mô hình điện mặt trời, tiết 3".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b33',
        lessonNumber: 33,
        title: 'Bài 9. Mô hình điện mặt trời, tiết 4',
        topic: 'Thủ công kĩ thuật',
        semester: 2,
        week: 33,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Bài 9. Mô hình điện mặt trời, tiết 4".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Bài 9. Mô hình điện mặt trời, tiết 4", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Bài 9. Mô hình điện mặt trời, tiết 4".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b34',
        lessonNumber: 34,
        title: 'Ôn tập cuối năm',
        topic: 'Ôn tập và kiểm tra cuối năm',
        semester: 2,
        week: 34,
        duration: '2 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Ôn tập cuối năm".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Ôn tập cuối năm", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Ôn tập cuối năm".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn5_b35',
        lessonNumber: 35,
        title: 'Kiểm tra định kì cuối năm học',
        topic: 'Ôn tập và kiểm tra cuối năm',
        semester: 2,
        week: 35,
        duration: '2 tiết',
        coreKnowledge: 'Hiểu biết và thực hành các thao tác kĩ thuật, an toàn sử dụng thiết bị công nghệ và kĩ năng thực hành trong bài "Kiểm tra định kì cuối năm học".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi sử dụng hoặc thực hành theo bài "Kiểm tra định kì cuối năm học", nguyên tắc an toàn quan trọng nhất là gì?',
            options: ['Tuân thủ đúng hướng dẫn sử dụng và an toàn điện/kĩ thuật', 'Tự ý tháo lắp thiết bị khi đang cắm điện', 'Dùng các vật sắc nhọn tùy ý', 'Không cần đọc quy trình kĩ thuật'],
            answer: 0,
            explanation: 'Đảm bảo tuyệt đối an toàn lao động và hiệu quả sử dụng.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện quy trình kĩ thuật trong bài "Kiểm tra định kì cuối năm học".',
            guide: 'Nêu đầy đủ các bước từ chuẩn bị, thao tác thực hiện đến hoàn thiện và đánh giá sản phẩm.'
          }
        ]
      },
    ]
  };

  if (typeof window !== 'undefined') {
    window.SGK_CONG_NGHE_5 = CONG_NGHE_5_DATA;
    if (window.SGK_REGISTRY && typeof window.SGK_REGISTRY.registerBook === 'function') {
      window.SGK_REGISTRY.registerBook(5, 'cong_nghe', CONG_NGHE_5_DATA);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONG_NGHE_5_DATA;
  }
})(typeof window !== 'undefined' ? window : this);
