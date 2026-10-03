/**
 * SỐ HÓA SÁCH GIÁO KHOA TIN HỌC LỚP 4
 * Bộ sách: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Nhà xuất bản: NXB Giáo dục Việt Nam
 * Chương trình Giáo dục phổ thông 2018
 */

(function(global) {
  'use strict';

  const TIN_HOC_4_DATA = {
    metadata: {
      grade: 4,
      subjectId: 'tin_hoc',
      subjectName: 'Tin học',
      bookName: 'Tin học 4 - Kết nối tri thức với cuộc sống',
      publisher: 'Nhà xuất bản Giáo dục Việt Nam',
      totalWeeks: 35,
      totalPeriods: 35,
      volumes: [
        { volume: 1, name: 'Học kì I (Tuần 1 đến 18)', weeks: '1-18' },
        { volume: 2, name: 'Học kì II (Tuần 19 đến 35)', weeks: '19-35' }
      ]
    },
    topics: [
      { id: 'tin4_cdA', name: 'Chủ đề A: Máy tính và em (Phần cứng và phần mềm)', semester: 1, weeks: '1-6' },
      { id: 'tin4_cdB', name: 'Chủ đề B: Mạng máy tính và Internet', semester: 1, weeks: '7-10' },
      { id: 'tin4_cdC', name: 'Chủ đề C: Tổ chức lưu trữ và tìm kiếm thông tin (Thư mục tệp)', semester: 1, weeks: '11-16' },
      { id: 'tin4_cd_on1', name: 'Ôn tập và kiểm tra học kì 1', semester: 1, weeks: '17-18' },
      { id: 'tin4_cdD', name: 'Chủ đề D: Đạo đức, pháp luật và văn hoá trong môi trường số', semester: 2, weeks: '19-21' },
      { id: 'tin4_cdE', name: 'Chủ đề E: Ứng dụng tin học (Chèn ảnh, bảng biểu trong soạn thảo & Trình chiếu)', semester: 2, weeks: '22-28' },
      { id: 'tin4_cdF', name: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính (Lập trình Scratch cơ bản)', semester: 2, weeks: '29-34' },
      { id: 'tin4_cd_on2', name: 'Ôn tập và kiểm tra cuối năm', semester: 2, weeks: '35' }
    ],
    lessons: [
      {
        id: 'tin4_b1',
        lessonNumber: 1,
        title: 'Bài 1. Phần cứng và phần mềm máy tính',
        topic: '1: Máy tính và em',
        semester: 1,
        week: 2,
        duration: '- Nhận biết và phân biệt được thiết bị phần cứng và phần mềm máy tính thông qua hình dạng, đặc điểm. - Kể được tên một số thiết bị phần cứng và phần mềm đã biết.',
        coreKnowledge: '- 4.1.CB2.a: Nhận biết và phân biệt được phần cứng và phần mềm máy tính. - 4.2.CB2.b: Kể được tên và vai trò cơ bản của một số thiết bị phần cứng và phần mềm thông dụng.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn trong bài "Bài 1. Phần cứng và phần mềm máy tính" là gì?',
            options: ['Thực hiện đúng định nghĩa và quy tắc thao tác trong SGK Tin học 4', 'Thao tác sai cách gây lỗi phần mềm', 'Tắt máy tính đột ngột bằng nút nguồn khi đang chạy', 'Chia sẻ dữ liệu bí mật trên mạng công cộng'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và an toàn khi sử dụng máy tính.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 1. Phần cứng và phần mềm máy tính".',
            guide: 'Mô tả rõ ràng từng bước thao tác phần mềm hoặc quy tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin4_b2',
        lessonNumber: 2,
        title: 'Bài 2: Gõ bàn phím đúng cách',
        topic: '1: Máy tính và em',
        semester: 1,
        week: 4,
        duration: '1',
        coreKnowledge: '- Giải thích được lợi ích của việc gõ bàn phím đúng cách. - Biết vị trí đặt các ngón tay trên hàng phím cơ sở và hàng phím số. - Thực hiện được thao tác gõ các phím số đúng cách.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn trong bài "Bài 2: Gõ bàn phím đúng cách" là gì?',
            options: ['Thực hiện đúng định nghĩa và quy tắc thao tác trong SGK Tin học 4', 'Thao tác sai cách gây lỗi phần mềm', 'Tắt máy tính đột ngột bằng nút nguồn khi đang chạy', 'Chia sẻ dữ liệu bí mật trên mạng công cộng'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và an toàn khi sử dụng máy tính.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 2: Gõ bàn phím đúng cách".',
            guide: 'Mô tả rõ ràng từng bước thao tác phần mềm hoặc quy tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin4_b3',
        lessonNumber: 3,
        title: 'Bài 3: Thông tin trên trang web',
        topic: '2.  Mạng máy tính và Internet',
        semester: 1,
        week: 6,
        duration: '1',
        coreKnowledge: '- Nhận biết và phân biệt được các loại thông tin chính trên trang web: văn bản, hình ảnh, âm thanh, video. - Nhận biết được siêu liên kết (đường dẫn) thông qua sự thay đổi của hình dạng con trỏ chuột.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn trong bài "Bài 3: Thông tin trên trang web" là gì?',
            options: ['Thực hiện đúng định nghĩa và quy tắc thao tác trong SGK Tin học 4', 'Thao tác sai cách gây lỗi phần mềm', 'Tắt máy tính đột ngột bằng nút nguồn khi đang chạy', 'Chia sẻ dữ liệu bí mật trên mạng công cộng'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và an toàn khi sử dụng máy tính.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 3: Thông tin trên trang web".',
            guide: 'Mô tả rõ ràng từng bước thao tác phần mềm hoặc quy tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin4_b4',
        lessonNumber: 4,
        title: 'Bài 4: Tìm kiếm thông tin trên Internet',
        topic: '3. Tổ chức lưu trữ, tìm kiếmvà trao đổi thông',
        semester: 1,
        week: 8,
        duration: '1',
        coreKnowledge: '- Xác định được từ khoá phù hợp với yêu cầu tìm kiếm thông tin. - Biết được các bước cơ bản để tìm kiếm thông tin trên Internet bằng máy tìm kiếm. - Nhận biết được địa chỉ của một số máy tìm kiếm phổ biến.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn trong bài "Bài 4: Tìm kiếm thông tin trên Internet" là gì?',
            options: ['Thực hiện đúng định nghĩa và quy tắc thao tác trong SGK Tin học 4', 'Thao tác sai cách gây lỗi phần mềm', 'Tắt máy tính đột ngột bằng nút nguồn khi đang chạy', 'Chia sẻ dữ liệu bí mật trên mạng công cộng'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và an toàn khi sử dụng máy tính.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 4: Tìm kiếm thông tin trên Internet".',
            guide: 'Mô tả rõ ràng từng bước thao tác phần mềm hoặc quy tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin4_b5',
        lessonNumber: 5,
        title: 'Bài 5: Thao tác với tệp và thư mục',
        topic: '3. Tổ chức lưu trữ, tìm kiếmvà trao đổi thông',
        semester: 1,
        week: 10,
        duration: '1',
        coreKnowledge: '- Nhận biết được hai thao tác di chuyển và sao chép thư mục/tệp. - Phân biệt được sự khác nhau giữa sao chép và di chuyển. - Nêu được các tác hại khi thao tác nhầm với tệp và thư mục.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn trong bài "Bài 5: Thao tác với tệp và thư mục" là gì?',
            options: ['Thực hiện đúng định nghĩa và quy tắc thao tác trong SGK Tin học 4', 'Thao tác sai cách gây lỗi phần mềm', 'Tắt máy tính đột ngột bằng nút nguồn khi đang chạy', 'Chia sẻ dữ liệu bí mật trên mạng công cộng'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và an toàn khi sử dụng máy tính.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 5: Thao tác với tệp và thư mục".',
            guide: 'Mô tả rõ ràng từng bước thao tác phần mềm hoặc quy tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin4_b6',
        lessonNumber: 6,
        title: 'Bài 6: Sử dụng phần mềm khi được phép',
        topic: '4. Đạo đức, pháp luật, và văn hóa trong môi trường số',
        semester: 1,
        week: 12,
        duration: '1',
        coreKnowledge: '- Nêu được ví dụ cụ thể về việc cần phải được phép khi sử dụng phần mềm, tài nguyên trên Internet. - Biết được một số phần mềm có bản quyền, phần mềm miễn phí, phần mềm nguồn mở.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn trong bài "Bài 6: Sử dụng phần mềm khi được phép" là gì?',
            options: ['Thực hiện đúng định nghĩa và quy tắc thao tác trong SGK Tin học 4', 'Thao tác sai cách gây lỗi phần mềm', 'Tắt máy tính đột ngột bằng nút nguồn khi đang chạy', 'Chia sẻ dữ liệu bí mật trên mạng công cộng'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và an toàn khi sử dụng máy tính.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 6: Sử dụng phần mềm khi được phép".',
            guide: 'Mô tả rõ ràng từng bước thao tác phần mềm hoặc quy tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin4_b7',
        lessonNumber: 7,
        title: 'Bài 7: Tạo bài trình chiếu',
        topic: '5. Ứng dụng tin học',
        semester: 1,
        week: 13,
        duration: '1',
        coreKnowledge: '- Nhận biết được biểu tượng và khởi động được phần mềm trình chiếu. - Nhận biết được các thành phần chính của màn hình làm việc. - Tạo được ít nhất 2 trang chiếu và nhập được văn bản (có dấu) vào trang chiếu.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn trong bài "Bài 7: Tạo bài trình chiếu" là gì?',
            options: ['Thực hiện đúng định nghĩa và quy tắc thao tác trong SGK Tin học 4', 'Thao tác sai cách gây lỗi phần mềm', 'Tắt máy tính đột ngột bằng nút nguồn khi đang chạy', 'Chia sẻ dữ liệu bí mật trên mạng công cộng'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và an toàn khi sử dụng máy tính.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 7: Tạo bài trình chiếu".',
            guide: 'Mô tả rõ ràng từng bước thao tác phần mềm hoặc quy tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin4_b8',
        lessonNumber: 8,
        title: 'Bài 8: Định dạng văn bản trên trang chiếu',
        topic: '5. Ứng dụng tin học',
        semester: 1,
        week: 15,
        duration: '1',
        coreKnowledge: '- Nhận biết được các nút lệnh định dạng văn bản cơ bản (phông chữ, cỡ chữ, kiểu chữ, màu chữ) trên thanh công cụ. - Hiểu được tác dụng của việc định dạng văn bản.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn trong bài "Bài 8: Định dạng văn bản trên trang chiếu" là gì?',
            options: ['Thực hiện đúng định nghĩa và quy tắc thao tác trong SGK Tin học 4', 'Thao tác sai cách gây lỗi phần mềm', 'Tắt máy tính đột ngột bằng nút nguồn khi đang chạy', 'Chia sẻ dữ liệu bí mật trên mạng công cộng'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và an toàn khi sử dụng máy tính.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 8: Định dạng văn bản trên trang chiếu".',
            guide: 'Mô tả rõ ràng từng bước thao tác phần mềm hoặc quy tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin4_b9',
        lessonNumber: 9,
        title: 'Bài 9: Hiệu ứng chuyển trang.',
        topic: '5. Ứng dụng tin học',
        semester: 1,
        week: 17,
        duration: '1',
        coreKnowledge: '- Nhận biết được hiệu ứng chuyển trang và vai trò của nó trong bài trình chiếu. - Nắm được các bước cơ bản để tạo hiệu ứng chuyển trang. - Nhận biết được các nút lệnh hiệu ứng chuyển trang trên dải lệnh Transitions.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn trong bài "Bài 9: Hiệu ứng chuyển trang." là gì?',
            options: ['Thực hiện đúng định nghĩa và quy tắc thao tác trong SGK Tin học 4', 'Thao tác sai cách gây lỗi phần mềm', 'Tắt máy tính đột ngột bằng nút nguồn khi đang chạy', 'Chia sẻ dữ liệu bí mật trên mạng công cộng'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và an toàn khi sử dụng máy tính.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 9: Hiệu ứng chuyển trang.".',
            guide: 'Mô tả rõ ràng từng bước thao tác phần mềm hoặc quy tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin4_b10',
        lessonNumber: 10,
        title: 'Bài 10: Phần mềm soạn thảo văn bản',
        topic: '5. Ứng dụng tin học',
        semester: 2,
        week: 21,
        duration: '1',
        coreKnowledge: '- Nhận biết được biểu tượng của phần mềm soạn thảo văn bản. - Khởi động được phần mềm soạn thảo văn bản. - Nhận biết các thành phần chính của màn hình làm việc. - Soạn thảo được một đoạn văn bản ngắn tiếng Việt có dấu và chữ hoa.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn trong bài "Bài 10: Phần mềm soạn thảo văn bản" là gì?',
            options: ['Thực hiện đúng định nghĩa và quy tắc thao tác trong SGK Tin học 4', 'Thao tác sai cách gây lỗi phần mềm', 'Tắt máy tính đột ngột bằng nút nguồn khi đang chạy', 'Chia sẻ dữ liệu bí mật trên mạng công cộng'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và an toàn khi sử dụng máy tính.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 10: Phần mềm soạn thảo văn bản".',
            guide: 'Mô tả rõ ràng từng bước thao tác phần mềm hoặc quy tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin4_b11',
        lessonNumber: 11,
        title: 'Bài 11: Chỉnh sửa văn bản',
        topic: '5. Ứng dụng tin học',
        semester: 2,
        week: 23,
        duration: '1',
        coreKnowledge: '- Hiểu được lợi ích của thao tác sao chép và di chuyển văn bản. - Biết cách mở tệp văn bản đã lưu. - Thực hiện được thao tác sao chép một phần văn bản.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn trong bài "Bài 11: Chỉnh sửa văn bản" là gì?',
            options: ['Thực hiện đúng định nghĩa và quy tắc thao tác trong SGK Tin học 4', 'Thao tác sai cách gây lỗi phần mềm', 'Tắt máy tính đột ngột bằng nút nguồn khi đang chạy', 'Chia sẻ dữ liệu bí mật trên mạng công cộng'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và an toàn khi sử dụng máy tính.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 11: Chỉnh sửa văn bản".',
            guide: 'Mô tả rõ ràng từng bước thao tác phần mềm hoặc quy tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin4_b12',
        lessonNumber: 12,
        title: 'Bài 11: Chỉnh sửa văn bản.',
        topic: '5. Ứng dụng tin học',
        semester: 2,
        week: 24,
        duration: '1',
        coreKnowledge: '- Thực hiện được thao tác di chuyển một phần văn bản. - Biết cách chèn hình ảnh vào văn bản để minh họa. - Thực hiện được thao tác lưu tệp văn bản với một tên mới (Save As).',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn trong bài "Bài 11: Chỉnh sửa văn bản." là gì?',
            options: ['Thực hiện đúng định nghĩa và quy tắc thao tác trong SGK Tin học 4', 'Thao tác sai cách gây lỗi phần mềm', 'Tắt máy tính đột ngột bằng nút nguồn khi đang chạy', 'Chia sẻ dữ liệu bí mật trên mạng công cộng'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và an toàn khi sử dụng máy tính.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 11: Chỉnh sửa văn bản.".',
            guide: 'Mô tả rõ ràng từng bước thao tác phần mềm hoặc quy tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin4_b13',
        lessonNumber: 13,
        title: 'Bài 12B: Phần mềm luyện gõ bàn phím',
        topic: '5. Ứng dụng tin học',
        semester: 2,
        week: 25,
        duration: '1',
        coreKnowledge: '- Nhận biết được phần mềm Kiran\'s Typing Tutor và các nút lệnh cơ bản. - Biết cách mở phần mềm, chọn bài học Kids Typing, Capitals. - Thực hiện được thao tác gõ chữ hoa bằng phím Shift.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn trong bài "Bài 12B: Phần mềm luyện gõ bàn phím" là gì?',
            options: ['Thực hiện đúng định nghĩa và quy tắc thao tác trong SGK Tin học 4', 'Thao tác sai cách gây lỗi phần mềm', 'Tắt máy tính đột ngột bằng nút nguồn khi đang chạy', 'Chia sẻ dữ liệu bí mật trên mạng công cộng'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và an toàn khi sử dụng máy tính.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 12B: Phần mềm luyện gõ bàn phím".',
            guide: 'Mô tả rõ ràng từng bước thao tác phần mềm hoặc quy tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin4_b14',
        lessonNumber: 14,
        title: 'Bài 12B: Phần mềm luyện gõ bàn phím.',
        topic: '5: Ứng dụng tin học',
        semester: 2,
        week: 26,
        duration: '1',
        coreKnowledge: '- Biết cách gõ từ đơn giản với bài Words. - Biết gõ kí tự trên hàng phím số (ví dụ: !, @, #) bằng Shift. - Thực hiện được bài luyện tập số (NumericKeys-Qwerty).',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn trong bài "Bài 12B: Phần mềm luyện gõ bàn phím." là gì?',
            options: ['Thực hiện đúng định nghĩa và quy tắc thao tác trong SGK Tin học 4', 'Thao tác sai cách gây lỗi phần mềm', 'Tắt máy tính đột ngột bằng nút nguồn khi đang chạy', 'Chia sẻ dữ liệu bí mật trên mạng công cộng'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và an toàn khi sử dụng máy tính.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 12B: Phần mềm luyện gõ bàn phím.".',
            guide: 'Mô tả rõ ràng từng bước thao tác phần mềm hoặc quy tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin4_b15',
        lessonNumber: 15,
        title: 'Bài 13: Chơi với máy tính',
        topic: '6: Giải quyết vấn đề với sự trợ giúp của máy tính',
        semester: 2,
        week: 27,
        duration: '1',
        coreKnowledge: '- Nhận ra được chương trình máy tính qua các trò chơi và các câu lệnh trong Scratch. - Nhận biết được sự tương ứng giữa chỉ dẫn hoạt động của con người và câu lệnh trong Scratch. - Nhận biết được các vùng cơ bản trong cửa sổ Scratch.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn trong bài "Bài 13: Chơi với máy tính" là gì?',
            options: ['Thực hiện đúng định nghĩa và quy tắc thao tác trong SGK Tin học 4', 'Thao tác sai cách gây lỗi phần mềm', 'Tắt máy tính đột ngột bằng nút nguồn khi đang chạy', 'Chia sẻ dữ liệu bí mật trên mạng công cộng'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và an toàn khi sử dụng máy tính.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 13: Chơi với máy tính".',
            guide: 'Mô tả rõ ràng từng bước thao tác phần mềm hoặc quy tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin4_b16',
        lessonNumber: 16,
        title: 'Bài 14: Khám phá môi trường lập trình trực quan.',
        topic: '6: Giải quyết vấn đề với sự trợ giúp của máy tính',
        semester: 2,
        week: 29,
        duration: '1',
        coreKnowledge: '- Nhận biết được giao diện của Scratch: khu vực nhân vật, sân khấu, khu vực nhóm lệnh và vùng tạo chương trình. - Nhận biết được các nhóm lệnh cơ bản dựa vào màu sắc. - Biết cách chọn nhân vật, kéo thả một lệnh đơn giản vào vùng tạo chương trình.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn trong bài "Bài 14: Khám phá môi trường lập trình trực quan." là gì?',
            options: ['Thực hiện đúng định nghĩa và quy tắc thao tác trong SGK Tin học 4', 'Thao tác sai cách gây lỗi phần mềm', 'Tắt máy tính đột ngột bằng nút nguồn khi đang chạy', 'Chia sẻ dữ liệu bí mật trên mạng công cộng'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và an toàn khi sử dụng máy tính.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 14: Khám phá môi trường lập trình trực quan.".',
            guide: 'Mô tả rõ ràng từng bước thao tác phần mềm hoặc quy tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin4_b17',
        lessonNumber: 17,
        title: 'Bài 14: Khám phá môi trường lập trình trực quan',
        topic: '6: Giải quyết vấn đề với sự trợ giúp của máy tính',
        semester: 2,
        week: 30,
        duration: '1',
        coreKnowledge: '- Thực hiện được các thao tác cơ bản: kéo thả lệnh, xoá lệnh, ghép các lệnh thành khối lệnh. - Tạo được chương trình "Điều khiển rô-bốt" đơn giản theo hướng dẫn. - Biết cách lưu bài vào máy tính và thoát khỏi phần mềm đúng cách.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn trong bài "Bài 14: Khám phá môi trường lập trình trực quan" là gì?',
            options: ['Thực hiện đúng định nghĩa và quy tắc thao tác trong SGK Tin học 4', 'Thao tác sai cách gây lỗi phần mềm', 'Tắt máy tính đột ngột bằng nút nguồn khi đang chạy', 'Chia sẻ dữ liệu bí mật trên mạng công cộng'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và an toàn khi sử dụng máy tính.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 14: Khám phá môi trường lập trình trực quan".',
            guide: 'Mô tả rõ ràng từng bước thao tác phần mềm hoặc quy tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin4_b18',
        lessonNumber: 18,
        title: 'Bài 15: Tạo chương trình máy tính để diễn tả ý tưởng',
        topic: '6: Giải quyết vấn đề với sự trợ giúp của máy tính',
        semester: 2,
        week: 31,
        duration: '1',
        coreKnowledge: '- Nêu được ví dụ cụ thể về sử dụng chương trình máy tính để diễn tả ý tưởng, câu chuyện theo từng bước. - Nhận biết được các công việc cần thực hiện để xây dựng chương trình từ ý tưởng: thay đổi nhân vật, phông nền, sắp xếp lệnh. - Thực hiện được các thao tác thêm nhân vật, thay đổi phông nền sân khấu trong Scratch.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn trong bài "Bài 15: Tạo chương trình máy tính để diễn tả ý tưởng" là gì?',
            options: ['Thực hiện đúng định nghĩa và quy tắc thao tác trong SGK Tin học 4', 'Thao tác sai cách gây lỗi phần mềm', 'Tắt máy tính đột ngột bằng nút nguồn khi đang chạy', 'Chia sẻ dữ liệu bí mật trên mạng công cộng'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và an toàn khi sử dụng máy tính.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 15: Tạo chương trình máy tính để diễn tả ý tưởng".',
            guide: 'Mô tả rõ ràng từng bước thao tác phần mềm hoặc quy tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin4_b19',
        lessonNumber: 19,
        title: 'Bài 16: Chương trình của em',
        topic: '6: Giải quyết vấn đề với sự trợ giúp của máy tính',
        semester: 2,
        week: 33,
        duration: '1',
        coreKnowledge: '- Mở được tệp chương trình có sẵn trên máy tính. - Thực hiện được các thao tác thêm nhân vật mới vào chương trình. - Tạo được các câu lệnh đơn giản cho nhân vật mới.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn trong bài "Bài 16: Chương trình của em" là gì?',
            options: ['Thực hiện đúng định nghĩa và quy tắc thao tác trong SGK Tin học 4', 'Thao tác sai cách gây lỗi phần mềm', 'Tắt máy tính đột ngột bằng nút nguồn khi đang chạy', 'Chia sẻ dữ liệu bí mật trên mạng công cộng'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và an toàn khi sử dụng máy tính.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 16: Chương trình của em".',
            guide: 'Mô tả rõ ràng từng bước thao tác phần mềm hoặc quy tắc an toàn số tương ứng.'
          }
        ]
      },
    ]
  };

  if (typeof window !== 'undefined') {
    window.SGK_TIN_HOC_4 = TIN_HOC_4_DATA;
    if (window.SGK_REGISTRY && typeof window.SGK_REGISTRY.registerBook === 'function') {
      window.SGK_REGISTRY.registerBook(4, 'tin_hoc', TIN_HOC_4_DATA);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = TIN_HOC_4_DATA;
  }
})(typeof window !== 'undefined' ? window : this);
