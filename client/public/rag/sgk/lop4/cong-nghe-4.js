/**
 * SỐ HÓA SÁCH GIÁO KHOA CÔNG NGHỆ LỚP 4
 * Bộ sách: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Nhà xuất bản: NXB Giáo dục Việt Nam
 * Chương trình Giáo dục phổ thông 2018
 */

(function(global) {
  'use strict';

  const CONG_NGHE_4_DATA = {
    metadata: {
      grade: 4,
      subjectId: 'cong_nghe',
      subjectName: 'Công nghệ',
      bookName: 'Công nghệ 4 - Kết nối tri thức với cuộc sống',
      publisher: 'Nhà xuất bản Giáo dục Việt Nam',
      totalWeeks: 35,
      totalPeriods: 35,
      volumes: [
        { volume: 1, name: 'Học kì I: Công nghệ và đời sống (Hoa và cây cảnh)', weeks: '1-18' },
        { volume: 2, name: 'Học kì II: Thủ công kĩ thuật (Lắp ghép mô hình kĩ thuật)', weeks: '19-35' }
      ]
    },
    topics: [
      { id: 'cn4_cd1', name: 'Phần 1: Công nghệ và đời sống (Hoa và cây cảnh trong đời sống)', semester: 1, weeks: '1-18' },
      { id: 'cn4_cd2', name: 'Phần 2: Thủ công kĩ thuật (Lắp ghép mô hình kĩ thuật, đồ chơi dân gian)', semester: 2, weeks: '19-35' }
    ],
    lessons: [
      {
        id: 'cn4_b1',
        lessonNumber: 1,
        title: 'Bài 1: Lợi ích của hoa, cây cảnh đối với đời sống',
        topic: 'HOA VÀ CÂY CẢNH TRONG ĐỜI SỐNG',
        semester: 1,
        week: 1,
        duration: 'Tiết 1: Trang trí cảnh quan',
        coreKnowledge: 'Hiểu biết lợi ích, cách trồng chăm sóc hoa cây cảnh và thực hành quy trình kĩ thuật trong bài "Bài 1: Lợi ích của hoa, cây cảnh đối với đời sống".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện quy trình kĩ thuật trong bài "Bài 1: Lợi ích của hoa, cây cảnh đối với đời sống", thao tác nào là đúng quy định?',
            options: ['Thực hiện đúng theo các bước quy trình và đảm bảo an toàn lao động', 'Tự ý bỏ bớt các bước quan trọng', 'Không đeo găng tay khi tiếp xúc chất bẩn', 'Để dụng cụ sắc nhọn lung tung'],
            answer: 0,
            explanation: 'Tuân thủ đúng quy trình thực hành và an toàn vệ sinh lao động.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác kĩ thuật hoặc chăm sóc trong bài "Bài 1: Lợi ích của hoa, cây cảnh đối với đời sống".',
            guide: 'Nêu đầy đủ các bước chuẩn bị, thực hiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn4_b2',
        lessonNumber: 2,
        title: 'Bài 2: Một số loại hoa, cây cảnh phổ biến',
        topic: 'HOA VÀ CÂY CẢNH TRONG ĐỜI SỐNG',
        semester: 1,
        week: 4,
        duration: 'Tiết 1: Hoa hồng; hoa đào',
        coreKnowledge: 'Hiểu biết lợi ích, cách trồng chăm sóc hoa cây cảnh và thực hành quy trình kĩ thuật trong bài "Bài 2: Một số loại hoa, cây cảnh phổ biến".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện quy trình kĩ thuật trong bài "Bài 2: Một số loại hoa, cây cảnh phổ biến", thao tác nào là đúng quy định?',
            options: ['Thực hiện đúng theo các bước quy trình và đảm bảo an toàn lao động', 'Tự ý bỏ bớt các bước quan trọng', 'Không đeo găng tay khi tiếp xúc chất bẩn', 'Để dụng cụ sắc nhọn lung tung'],
            answer: 0,
            explanation: 'Tuân thủ đúng quy trình thực hành và an toàn vệ sinh lao động.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác kĩ thuật hoặc chăm sóc trong bài "Bài 2: Một số loại hoa, cây cảnh phổ biến".',
            guide: 'Nêu đầy đủ các bước chuẩn bị, thực hiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn4_b3',
        lessonNumber: 3,
        title: 'Bài 3: Vật liệu và dụng cụ trồng hoa, cây cảnh trong chậu',
        topic: 'TRỒNG HOA VÀ CÂY CẢNH TRONG CHẬU',
        semester: 1,
        week: 7,
        duration: 'Tiết 1: Vật liệu trồng hoa, cây cảnh trong chậu',
        coreKnowledge: 'Hiểu biết lợi ích, cách trồng chăm sóc hoa cây cảnh và thực hành quy trình kĩ thuật trong bài "Bài 3: Vật liệu và dụng cụ trồng hoa, cây cảnh trong chậu".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện quy trình kĩ thuật trong bài "Bài 3: Vật liệu và dụng cụ trồng hoa, cây cảnh trong chậu", thao tác nào là đúng quy định?',
            options: ['Thực hiện đúng theo các bước quy trình và đảm bảo an toàn lao động', 'Tự ý bỏ bớt các bước quan trọng', 'Không đeo găng tay khi tiếp xúc chất bẩn', 'Để dụng cụ sắc nhọn lung tung'],
            answer: 0,
            explanation: 'Tuân thủ đúng quy trình thực hành và an toàn vệ sinh lao động.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác kĩ thuật hoặc chăm sóc trong bài "Bài 3: Vật liệu và dụng cụ trồng hoa, cây cảnh trong chậu".',
            guide: 'Nêu đầy đủ các bước chuẩn bị, thực hiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn4_b4',
        lessonNumber: 4,
        title: 'Bài 4: Gieo hạt hoa, cây cảnh trong chậu',
        topic: 'TRỒNG HOA VÀ CÂY CẢNH TRONG CHẬU',
        semester: 1,
        week: 10,
        duration: 'Tiết 1: Tìm hiểu hạt giống và quy trình gieo hạt',
        coreKnowledge: 'Hiểu biết lợi ích, cách trồng chăm sóc hoa cây cảnh và thực hành quy trình kĩ thuật trong bài "Bài 4: Gieo hạt hoa, cây cảnh trong chậu".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện quy trình kĩ thuật trong bài "Bài 4: Gieo hạt hoa, cây cảnh trong chậu", thao tác nào là đúng quy định?',
            options: ['Thực hiện đúng theo các bước quy trình và đảm bảo an toàn lao động', 'Tự ý bỏ bớt các bước quan trọng', 'Không đeo găng tay khi tiếp xúc chất bẩn', 'Để dụng cụ sắc nhọn lung tung'],
            answer: 0,
            explanation: 'Tuân thủ đúng quy trình thực hành và an toàn vệ sinh lao động.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác kĩ thuật hoặc chăm sóc trong bài "Bài 4: Gieo hạt hoa, cây cảnh trong chậu".',
            guide: 'Nêu đầy đủ các bước chuẩn bị, thực hiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn4_b5',
        lessonNumber: 5,
        title: 'Bài 5: Trồng hoa, cây cảnh trong chậu',
        topic: 'TRỒNG HOA VÀ CÂY CẢNH TRONG CHẬU',
        semester: 1,
        week: 13,
        duration: 'Tiết 1: Tìm hiểu quy trình trồng hoa, cây cảnh trong chậu',
        coreKnowledge: 'Hiểu biết lợi ích, cách trồng chăm sóc hoa cây cảnh và thực hành quy trình kĩ thuật trong bài "Bài 5: Trồng hoa, cây cảnh trong chậu".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện quy trình kĩ thuật trong bài "Bài 5: Trồng hoa, cây cảnh trong chậu", thao tác nào là đúng quy định?',
            options: ['Thực hiện đúng theo các bước quy trình và đảm bảo an toàn lao động', 'Tự ý bỏ bớt các bước quan trọng', 'Không đeo găng tay khi tiếp xúc chất bẩn', 'Để dụng cụ sắc nhọn lung tung'],
            answer: 0,
            explanation: 'Tuân thủ đúng quy trình thực hành và an toàn vệ sinh lao động.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác kĩ thuật hoặc chăm sóc trong bài "Bài 5: Trồng hoa, cây cảnh trong chậu".',
            guide: 'Nêu đầy đủ các bước chuẩn bị, thực hiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn4_b6',
        lessonNumber: 6,
        title: 'Bài 6: Chăm sóc hoa, cây cảnh trong chậu',
        topic: 'TRỒNG HOA VÀ CÂY CẢNH TRONG CHẬU',
        semester: 1,
        week: 16,
        duration: 'Tiết 1: Tìm hiểu nhu cầu chăm sóc hoa, cây cảnh',
        coreKnowledge: 'Hiểu biết lợi ích, cách trồng chăm sóc hoa cây cảnh và thực hành quy trình kĩ thuật trong bài "Bài 6: Chăm sóc hoa, cây cảnh trong chậu".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện quy trình kĩ thuật trong bài "Bài 6: Chăm sóc hoa, cây cảnh trong chậu", thao tác nào là đúng quy định?',
            options: ['Thực hiện đúng theo các bước quy trình và đảm bảo an toàn lao động', 'Tự ý bỏ bớt các bước quan trọng', 'Không đeo găng tay khi tiếp xúc chất bẩn', 'Để dụng cụ sắc nhọn lung tung'],
            answer: 0,
            explanation: 'Tuân thủ đúng quy trình thực hành và an toàn vệ sinh lao động.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác kĩ thuật hoặc chăm sóc trong bài "Bài 6: Chăm sóc hoa, cây cảnh trong chậu".',
            guide: 'Nêu đầy đủ các bước chuẩn bị, thực hiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn4_b7',
        lessonNumber: 7,
        title: 'Bài 7: Giới thiệu bộ lắp ghép mô hình kĩ thuật',
        topic: 'LẮP GHÉP MÔ HÌNH KĨ THUẬT',
        semester: 2,
        week: 21,
        duration: 'Tiết 1: Tìm hiểu bộ lắp ghép mô hình kĩ thuật',
        coreKnowledge: 'Hiểu biết lợi ích, cách trồng chăm sóc hoa cây cảnh và thực hành quy trình kĩ thuật trong bài "Bài 7: Giới thiệu bộ lắp ghép mô hình kĩ thuật".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện quy trình kĩ thuật trong bài "Bài 7: Giới thiệu bộ lắp ghép mô hình kĩ thuật", thao tác nào là đúng quy định?',
            options: ['Thực hiện đúng theo các bước quy trình và đảm bảo an toàn lao động', 'Tự ý bỏ bớt các bước quan trọng', 'Không đeo găng tay khi tiếp xúc chất bẩn', 'Để dụng cụ sắc nhọn lung tung'],
            answer: 0,
            explanation: 'Tuân thủ đúng quy trình thực hành và an toàn vệ sinh lao động.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác kĩ thuật hoặc chăm sóc trong bài "Bài 7: Giới thiệu bộ lắp ghép mô hình kĩ thuật".',
            guide: 'Nêu đầy đủ các bước chuẩn bị, thực hiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn4_b8',
        lessonNumber: 8,
        title: 'Bài 8: Lắp ghép mô hình bập bênh',
        topic: 'LẮP GHÉP MÔ HÌNH KĨ THUẬT',
        semester: 2,
        week: 23,
        duration: 'Tiết 1: Tìm hiểu mô hình bập bênh',
        coreKnowledge: 'Hiểu biết lợi ích, cách trồng chăm sóc hoa cây cảnh và thực hành quy trình kĩ thuật trong bài "Bài 8: Lắp ghép mô hình bập bênh".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện quy trình kĩ thuật trong bài "Bài 8: Lắp ghép mô hình bập bênh", thao tác nào là đúng quy định?',
            options: ['Thực hiện đúng theo các bước quy trình và đảm bảo an toàn lao động', 'Tự ý bỏ bớt các bước quan trọng', 'Không đeo găng tay khi tiếp xúc chất bẩn', 'Để dụng cụ sắc nhọn lung tung'],
            answer: 0,
            explanation: 'Tuân thủ đúng quy trình thực hành và an toàn vệ sinh lao động.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác kĩ thuật hoặc chăm sóc trong bài "Bài 8: Lắp ghép mô hình bập bênh".',
            guide: 'Nêu đầy đủ các bước chuẩn bị, thực hiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn4_b9',
        lessonNumber: 9,
        title: 'Bài 9: Lắp ghép mô hình rô-bốt',
        topic: 'LẮP GHÉP MÔ HÌNH KĨ THUẬT',
        semester: 2,
        week: 25,
        duration: 'Tiết 1: Tìm hiểu mô hình rô-bốt',
        coreKnowledge: 'Hiểu biết lợi ích, cách trồng chăm sóc hoa cây cảnh và thực hành quy trình kĩ thuật trong bài "Bài 9: Lắp ghép mô hình rô-bốt".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện quy trình kĩ thuật trong bài "Bài 9: Lắp ghép mô hình rô-bốt", thao tác nào là đúng quy định?',
            options: ['Thực hiện đúng theo các bước quy trình và đảm bảo an toàn lao động', 'Tự ý bỏ bớt các bước quan trọng', 'Không đeo găng tay khi tiếp xúc chất bẩn', 'Để dụng cụ sắc nhọn lung tung'],
            answer: 0,
            explanation: 'Tuân thủ đúng quy trình thực hành và an toàn vệ sinh lao động.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác kĩ thuật hoặc chăm sóc trong bài "Bài 9: Lắp ghép mô hình rô-bốt".',
            guide: 'Nêu đầy đủ các bước chuẩn bị, thực hiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn4_b10',
        lessonNumber: 10,
        title: 'Bài 10: Đồ chơi dân gian',
        topic: 'LÀM ĐỒ CHƠI DÂN GIAN',
        semester: 2,
        week: 28,
        duration: 'Tiết 1: Tìm hiểu đồ chơi dân gian',
        coreKnowledge: 'Hiểu biết lợi ích, cách trồng chăm sóc hoa cây cảnh và thực hành quy trình kĩ thuật trong bài "Bài 10: Đồ chơi dân gian".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện quy trình kĩ thuật trong bài "Bài 10: Đồ chơi dân gian", thao tác nào là đúng quy định?',
            options: ['Thực hiện đúng theo các bước quy trình và đảm bảo an toàn lao động', 'Tự ý bỏ bớt các bước quan trọng', 'Không đeo găng tay khi tiếp xúc chất bẩn', 'Để dụng cụ sắc nhọn lung tung'],
            answer: 0,
            explanation: 'Tuân thủ đúng quy trình thực hành và an toàn vệ sinh lao động.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác kĩ thuật hoặc chăm sóc trong bài "Bài 10: Đồ chơi dân gian".',
            guide: 'Nêu đầy đủ các bước chuẩn bị, thực hiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn4_b11',
        lessonNumber: 11,
        title: 'Bài 11: Làm đèn lồng',
        topic: 'LÀM ĐỒ CHƠI DÂN GIAN',
        semester: 2,
        week: 30,
        duration: 'Tiết 1: Tìm hiểu đèn lồng và chuẩn bị vật liệu',
        coreKnowledge: 'Hiểu biết lợi ích, cách trồng chăm sóc hoa cây cảnh và thực hành quy trình kĩ thuật trong bài "Bài 11: Làm đèn lồng".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện quy trình kĩ thuật trong bài "Bài 11: Làm đèn lồng", thao tác nào là đúng quy định?',
            options: ['Thực hiện đúng theo các bước quy trình và đảm bảo an toàn lao động', 'Tự ý bỏ bớt các bước quan trọng', 'Không đeo găng tay khi tiếp xúc chất bẩn', 'Để dụng cụ sắc nhọn lung tung'],
            answer: 0,
            explanation: 'Tuân thủ đúng quy trình thực hành và an toàn vệ sinh lao động.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác kĩ thuật hoặc chăm sóc trong bài "Bài 11: Làm đèn lồng".',
            guide: 'Nêu đầy đủ các bước chuẩn bị, thực hiện và đánh giá sản phẩm.'
          }
        ]
      },
      {
        id: 'cn4_b12',
        lessonNumber: 12,
        title: 'Bài 12: Làm chuồn chuồn thăng bằng',
        topic: 'LÀM ĐỒ CHƠI DÂN GIAN',
        semester: 2,
        week: 32,
        duration: 'Tiết 1: Tìm hiểu nguyên lí và chuẩn bị làm chuồn chuồn thăng bằng',
        coreKnowledge: 'Hiểu biết lợi ích, cách trồng chăm sóc hoa cây cảnh và thực hành quy trình kĩ thuật trong bài "Bài 12: Làm chuồn chuồn thăng bằng".',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện quy trình kĩ thuật trong bài "Bài 12: Làm chuồn chuồn thăng bằng", thao tác nào là đúng quy định?',
            options: ['Thực hiện đúng theo các bước quy trình và đảm bảo an toàn lao động', 'Tự ý bỏ bớt các bước quan trọng', 'Không đeo găng tay khi tiếp xúc chất bẩn', 'Để dụng cụ sắc nhọn lung tung'],
            answer: 0,
            explanation: 'Tuân thủ đúng quy trình thực hành và an toàn vệ sinh lao động.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác kĩ thuật hoặc chăm sóc trong bài "Bài 12: Làm chuồn chuồn thăng bằng".',
            guide: 'Nêu đầy đủ các bước chuẩn bị, thực hiện và đánh giá sản phẩm.'
          }
        ]
      },
    ]
  };

  if (typeof window !== 'undefined') {
    window.SGK_CONG_NGHE_4 = CONG_NGHE_4_DATA;
    if (window.SGK_REGISTRY && typeof window.SGK_REGISTRY.registerBook === 'function') {
      window.SGK_REGISTRY.registerBook(4, 'cong_nghe', CONG_NGHE_4_DATA);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONG_NGHE_4_DATA;
  }
})(typeof window !== 'undefined' ? window : this);
