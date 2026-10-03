/**
 * SỐ HÓA SÁCH GIÁO KHOA TIN HỌC LỚP 5
 * Bộ sách: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Nhà xuất bản: NXB Giáo dục Việt Nam
 * Chương trình Giáo dục phổ thông 2018
 */

(function(global) {
  'use strict';

  const TIN_HOC_5_DATA = {
    metadata: {
      grade: 5,
      subjectId: 'tin_hoc',
      subjectName: 'Tin học',
      bookName: 'Tin học 5 - Kết nối tri thức với cuộc sống',
      publisher: 'Nhà xuất bản Giáo dục Việt Nam',
      totalWeeks: 35,
      totalPeriods: 35,
      volumes: [
        { volume: 1, name: 'Học kì I (Tuần 1 đến 18)', weeks: '1-18' },
        { volume: 2, name: 'Học kì II (Tuần 19 đến 35)', weeks: '19-35' }
      ]
    },
    topics: [
      { id: 'tin5_cdA', name: 'Chủ đề A: Máy tính và em', semester: 1, weeks: '1-6' },
      { id: 'tin5_cdB', name: 'Chủ đề B: Mạng máy tính và Internet', semester: 1, weeks: '7-11' },
      { id: 'tin5_cdC', name: 'Chủ đề C: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin', semester: 1, weeks: '12-16' },
      { id: 'tin5_cd_on1', name: 'Ôn tập và kiểm tra học kì 1', semester: 1, weeks: '17-18' },
      { id: 'tin5_cdD', name: 'Chủ đề D: Đạo đức, pháp luật và văn hoá trong môi trường số', semester: 2, weeks: '19-21' },
      { id: 'tin5_cdE', name: 'Chủ đề E: Ứng dụng tin học', semester: 2, weeks: '22-28' },
      { id: 'tin5_cdF', name: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính (Lập trình Scratch)', semester: 2, weeks: '29-34' },
      { id: 'tin5_cd_on2', name: 'Ôn tập và kiểm tra cuối năm', semester: 2, weeks: '35' }
    ],
    lessons: [
      {
        id: 'tin5_b1',
        lessonNumber: 1,
        title: 'Tên  bài học',
        topic: 'Chủ đề/ Mạch nội dung',
        semester: 1,
        week: 1,
        duration: 'Thời lượng',
        coreKnowledge: 'Yêu cầu  cần đạt',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "Tên  bài học", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "Tên  bài học".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b2',
        lessonNumber: 2,
        title: 'Bài 1: Em có thể làm gì với máy tính?',
        topic: '1: Máy tính và em',
        semester: 1,
        week: 2,
        duration: '- Nêu được ví dụ về các hoạt động máy tính giúp em trong học tập, giải trí, tìm kiếm thông tin. - Kể tên được một số phần mềm đã sử dụng và chức năng cơ bản của chúng. - Nhận biết được vai trò của máy tính trong việc tạo ra sản phẩm số.',
        coreKnowledge: '4.1.CB2.a: Nhận biết các hoạt động cơ bản với máy tính (học tập, giải trí, tìm kiếm). 4.2.CB2.b: Liệt kê được một số phần mềm và công dụng của chúng.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "Bài 1: Em có thể làm gì với máy tính?", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "Bài 1: Em có thể làm gì với máy tính?".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b3',
        lessonNumber: 3,
        title: 'Bài 2. Tìm kiếm thông tin trên website',
        topic: '2: Mạng máy tính và Internet',
        semester: 1,
        week: 4,
        duration: '1',
        coreKnowledge: '- Nhận biết được cấu trúc cơ bản của website (trang chủ, chủ đề, thanh tìm kiếm). - Thực hiện được việc truy cập website theo địa chỉ cho trước. - Biết cách tìm kiếm thông tin trên website thông qua các chủ đề và công cụ tìm kiếm.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "Bài 2. Tìm kiếm thông tin trên website", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "Bài 2. Tìm kiếm thông tin trên website".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b4',
        lessonNumber: 4,
        title: 'Bài 3. Tìm kiếm thông tin trong giải quyết vấn đề.',
        topic: '3: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
        semester: 1,
        week: 6,
        duration: '1',
        coreKnowledge: '- Giải thích được sự cần thiết và tầm quan trọng của việc thu thập, tìm kiếm thông tin trong giải quyết vấn đề. - Phân tích được ví dụ cụ thể về hậu quả của việc thiếu thông tin. - Nhận biết được các bước cơ bản trong quá trình tìm kiếm thông tin để giải quyết vấn đề.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "Bài 3. Tìm kiếm thông tin trong giải quyết vấn đề.", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "Bài 3. Tìm kiếm thông tin trong giải quyết vấn đề.".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b5',
        lessonNumber: 5,
        title: 'Bài 4. Cây thư mục',
        topic: '3. Tổ chức lưu trữ, tìm kiếm và trao đổi thông',
        semester: 1,
        week: 8,
        duration: '1',
        coreKnowledge: '- Nhận biết được cấu trúc cây thư mục hợp lí và không hợp lí. - Giải thích được tầm quan trọng của việc đặt tên thư mục, tệp rõ ràng, gợi nhớ. - Biết cách phân loại tệp theo các tiêu chí: loại tệp, thời gian, đối tượng, nội dung.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "Bài 4. Cây thư mục", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "Bài 4. Cây thư mục".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b6',
        lessonNumber: 6,
        title: 'Bài 4. Cây thư mục.',
        topic: '3. Tổ chức lưu trữ, tìm kiếm và trao đổi thông',
        semester: 1,
        week: 9,
        duration: '1',
        coreKnowledge: '- Thực hành tạo được cây thư mục có cấu trúc như mẫu trên máy tính. - Sử dụng thành thạo công cụ tìm kiếm tích hợp trong File Explorer để tìm tệp, thư mục.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "Bài 4. Cây thư mục.", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "Bài 4. Cây thư mục.".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b7',
        lessonNumber: 7,
        title: 'Bài 5. Bản quyền nội dung thông tin.',
        topic: '4. Đạo đức, pháp luật và văn hoá trong môi trường số',
        semester: 1,
        week: 10,
        duration: '1',
        coreKnowledge: '- Hiểu được khái niệm về bản quyền nội dung thông tin. - Nhận biết được các dạng nội dung thông tin (văn bản, hình ảnh, âm thanh, video). - Biết cách ghi nguồn thông tin khi sử dụng bài viết, hình ảnh, bài thơ của người khác. - Nhận diện và thể hiện thái độ đúng đắn trước các hành vi vi phạm quyền riêng tư và bản quyền.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "Bài 5. Bản quyền nội dung thông tin.", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "Bài 5. Bản quyền nội dung thông tin.".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b8',
        lessonNumber: 8,
        title: 'Bài 5. Bản quyền nội dung thông tin',
        topic: '4. Đạo đức, pháp luật và văn hoá trong môi trường số',
        semester: 1,
        week: 11,
        duration: '1',
        coreKnowledge: '- Nhận biết được các hành vi vi phạm tính riêng tư và bản quyền thông tin. - Biết cách ứng xử phù hợp khi chứng kiến hành vi vi phạm. - Phân biệt được thái độ đồng tình/không đồng tình trong các tình huống. - Vận dụng được các nguyên tắc sử dụng thông tin có đạo đức vào bài tập và thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "Bài 5. Bản quyền nội dung thông tin", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "Bài 5. Bản quyền nội dung thông tin".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b9',
        lessonNumber: 9,
        title: 'Bài 6. Định dạng kí tự và bố trí hình ảnh trong văn bản',
        topic: '5. Ứng dụng tin học',
        semester: 1,
        week: 12,
        duration: '1',
        coreKnowledge: '- Nhận biết và thực hiện được các thao tác định dạng kí tự cơ bản: chọn phông chữ, kiểu chữ, kích thước và màu sắc. - Biết cách chọn và thay đổi vị trí bố trí hình ảnh trong văn bản (bố trí văn bản bao quanh hình ảnh).',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "Bài 6. Định dạng kí tự và bố trí hình ảnh trong văn bản", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "Bài 6. Định dạng kí tự và bố trí hình ảnh trong văn bản".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b10',
        lessonNumber: 10,
        title: 'Bài 7. Thực hành soạn thảo văn bản',
        topic: '5. Ứng dụng tin học',
        semester: 1,
        week: 14,
        duration: '1',
        coreKnowledge: '- Nhận biết được các phần văn bản giống nhau để áp dụng thao tác sao chép. - Thực hiện được các thao tác: chọn, xóa, sao chép, di chuyển đoạn văn bản. - Chèn và điều chỉnh kích thước, vị trí hình ảnh vào văn bản. - Định dạng văn bản: phông chữ, cỡ chữ, màu chữ, kiểu chữ.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "Bài 7. Thực hành soạn thảo văn bản", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "Bài 7. Thực hành soạn thảo văn bản".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b11',
        lessonNumber: 11,
        title: 'Bài 8A. Làm quen với phần mềm đồ hoạ',
        topic: '5. Ứng dụng tin học',
        semester: 1,
        week: 16,
        duration: '1',
        coreKnowledge: '- Nhận biết được chức năng chính của phần mềm đồ họa. - Phân biệt được các công cụ chính trong phần mềm đồ họa Paint. - Khởi động được phần mềm Paint và nhận diện các vùng làm việc cơ bản.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "Bài 8A. Làm quen với phần mềm đồ hoạ", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "Bài 8A. Làm quen với phần mềm đồ hoạ".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b12',
        lessonNumber: 12,
        title: 'Bài 8A. Làm quen với phần mềm đồ hoạ.',
        topic: '5. Ứng dụng tin học',
        semester: 1,
        week: 17,
        duration: '1 tiết',
        coreKnowledge: '- Sử dụng được các công cụ vẽ hình cơ bản (Oval, Line) và công cụ tô màu (Fill) để vẽ một hình đơn giản. - Biết cách sử dụng nhóm công cụ chọn (Select), sao chép (Copy/Paste), thay đổi kích thước (Resize), quay (Rotate) để tạo ra nhiều đối tượng từ một hình vẽ.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "Bài 8A. Làm quen với phần mềm đồ hoạ.", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "Bài 8A. Làm quen với phần mềm đồ hoạ.".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b13',
        lessonNumber: 13,
        title: '17',
        topic: 'Ôn tập CKI',
        semester: 1,
        week: 2,
        duration: '- Hệ thống hóa kiến thức đã học.',
        coreKnowledge: '5.4.CB2.a: Vận dụng các kỹ năng số cơ bản đã học.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "17", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "17".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b14',
        lessonNumber: 14,
        title: '18',
        topic: 'KIỂM TRA CHKI',
        semester: 1,
        week: 2,
        duration: '- Kiểm tra kiến thức, kĩ năng đã học.',
        coreKnowledge: 'Thực hành sử dụng phần mềm, khai thác thông tin số an toàn và tư duy giải quyết vấn đề.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "18", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "18".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b15',
        lessonNumber: 15,
        title: 'Bài 9A. Sử dụng phần mềm đồ hoạ tạo sản phẩm số',
        topic: '5. Ứng dụng tin học',
        semester: 2,
        week: 20,
        duration: '1',
        coreKnowledge: '- Nêu được các dịp đặc biệt thường sử dụng thiệp chúc mừng và các thành phần chính (hình ảnh, văn bản) có trong một tấm thiệp. - Xác định được các bước cơ bản để tạo một sản phẩm số (thiệp chúc mừng) bằng phần mềm đồ họa (Paint). - Thực hiện được một số thao tác cụ thể trong phần mềm Paint để tạo khung thiệp cơ bản.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "Bài 9A. Sử dụng phần mềm đồ hoạ tạo sản phẩm số", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "Bài 9A. Sử dụng phần mềm đồ hoạ tạo sản phẩm số".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b16',
        lessonNumber: 16,
        title: 'Bài 10. Cấu trúc tuần tự',
        topic: '6.  Giải quyết vấn đề với sự trợ giúp của máy tính',
        semester: 2,
        week: 21,
        duration: '1',
        coreKnowledge: '- Nêu được khái niệm cấu trúc tuần tự. - Nhận biết được các hoạt động tuần tự trong đời sống và trong chương trình máy tính. - Sắp xếp đúng thứ tự các lệnh để tạo thành chương trình tuần tự đơn giản theo yêu cầu.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "Bài 10. Cấu trúc tuần tự", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "Bài 10. Cấu trúc tuần tự".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b17',
        lessonNumber: 17,
        title: 'Bài 11. Cấu trúc lặp',
        topic: '6.  Giải quyết vấn đề với sự trợ giúp của máy tính.',
        semester: 2,
        week: 23,
        duration: '1',
        coreKnowledge: '- Nêu được khái niệm cấu trúc lặp và nhận biết được các công việc lặp lại trong đời sống. - Nhận biết được chương trình có cấu trúc lặp và chỉ ra được khối lệnh được lặp. - Phân biệt được ba dạng lệnh lặp cơ bản trong Scratch.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "Bài 11. Cấu trúc lặp", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "Bài 11. Cấu trúc lặp".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b18',
        lessonNumber: 18,
        title: 'Bài 12. Thực hành sử dụng lệnh lặp',
        topic: '6.  Giải quyết vấn đề với sự trợ giúp của máy tính.',
        semester: 2,
        week: 25,
        duration: '1',
        coreKnowledge: '- Tạo được khối lệnh tuần tự cơ bản điều khiển nhân vật (di chuyển, vỗ cánh, đợi, kiểm tra chạm cạnh). - Sử dụng thành thạo lệnh lặp với số lần biết trước để tạo chương trình "Vẹt bay 10 lần". - Thực hiện đầy đủ các thao tác: mở/tạo tệp, chỉnh sửa chương trình, chạy thử, lưu tệp với tên mới.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "Bài 12. Thực hành sử dụng lệnh lặp", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "Bài 12. Thực hành sử dụng lệnh lặp".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b19',
        lessonNumber: 19,
        title: 'Bài 12. Thực hành sử dụng lệnh lặp .',
        topic: '6.  Giải quyết vấn đề với sự trợ giúp của máy tính.',
        semester: 2,
        week: 26,
        duration: '1',
        coreKnowledge: '- Sử dụng thành thạo lệnh lặp liên tục và lặp lại cho đến khi để tạo chương trình "Vẹt bay liên tục" và "Vẹt bay cho đến khi nháy chuột". - Vận dụng kiến thức để tạo các chương trình lặp tương tự với nhân vật khác. - Bước đầu vận dụng lệnh lặp để vẽ hình.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "Bài 12. Thực hành sử dụng lệnh lặp .", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "Bài 12. Thực hành sử dụng lệnh lặp .".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b20',
        lessonNumber: 20,
        title: 'Bài 13. Cấu trúc rẽ nhánh.',
        topic: '6.  Giải quyết vấn đề với sự trợ giúp của máy tính.',
        semester: 2,
        week: 27,
        duration: '1',
        coreKnowledge: '- Nêu được khái niệm cấu trúc rẽ nhánh và nhận biết được các công việc rẽ nhánh trong đời sống. - Nhận biết được hai dạng cấu trúc rẽ nhánh: dạng thiếu và dạng đủ. - Mô tả được hành động của nhân vật/sự việc bằng câu lệnh rẽ nhánh.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "Bài 13. Cấu trúc rẽ nhánh.", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "Bài 13. Cấu trúc rẽ nhánh.".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b21',
        lessonNumber: 21,
        title: 'Bài 13. Cấu trúc rẽ nhánh .',
        topic: '6.  Giải quyết vấn đề với sự trợ giúp của máy tính.',
        semester: 2,
        week: 28,
        duration: '1',
        coreKnowledge: '- Sử dụng thành thạo lệnh nếu... thì (dạng thiếu) kết hợp với lệnh lặp để tạo chương trình "Mèo đổi màu". - Sử dụng thành thạo lệnh nếu... thì... không thì (dạng đủ) để tạo chương trình "Mèo trở về màu vàng". - Chạy thử, kiểm tra và lưu được chương trình đúng yêu cầu.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "Bài 13. Cấu trúc rẽ nhánh .", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "Bài 13. Cấu trúc rẽ nhánh .".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b22',
        lessonNumber: 22,
        title: 'Bài 14. Sử dụng biến trong chương trình.',
        topic: '6.  Giải quyết vấn đề với sự trợ giúp của máy tính.',
        semester: 2,
        week: 29,
        duration: '1',
        coreKnowledge: '- Nêu được khái niệm biến và vai trò của biến trong lập trình. - Nhận biết và sử dụng được biến có sẵn trả lời để nhận dữ liệu từ bàn phím. - Hiểu và thực hiện được các thao tác: nhập giá trị cho biến, hiển thị giá trị của biến ra màn hình.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "Bài 14. Sử dụng biến trong chương trình.", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "Bài 14. Sử dụng biến trong chương trình.".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b23',
        lessonNumber: 23,
        title: 'Bài 15. Sử dụng biểu thức trong chương trình.',
        topic: '6.  Giải quyết vấn đề với sự trợ giúp của máy tính.',
        semester: 2,
        week: 31,
        duration: '1',
        coreKnowledge: '- Nhận biết được các phép toán số học và phép toán so sánh trong nhóm lệnh Các phép toán của Scratch. - Hiểu được khái niệm biểu thức trong Scratch (gồm số, biến và phép toán). - Phân biệt được biểu thức số học và biểu thức điều kiện (cho kết quả đúng/sai). - Nhận biết được một số phép toán đặc biệt: lấy số ngẫu nhiên, chia lấy dư.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "Bài 15. Sử dụng biểu thức trong chương trình.", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "Bài 15. Sử dụng biểu thức trong chương trình.".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b24',
        lessonNumber: 24,
        title: 'Bài 15. Sử dụng biểu thức trong chương trình',
        topic: '6.  Giải quyết vấn đề với sự trợ giúp của máy tính.',
        semester: 2,
        week: 32,
        duration: '1',
        coreKnowledge: '- Vận dụng các phép toán số học để tạo biểu thức tính chu vi hình chữ nhật. - Tạo được chương trình hoàn chỉnh: nhập giá trị cho hai biến từ bàn phím, tính toán bằng biểu thức lồng nhau và thông báo kết quả ra màn hình. - Phân tích và dự đoán được kết quả của chương trình có sử dụng biểu thức.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "Bài 15. Sử dụng biểu thức trong chương trình", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "Bài 15. Sử dụng biểu thức trong chương trình".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b25',
        lessonNumber: 25,
        title: 'Bài 16. Từ kịch bản đến chương trình.',
        topic: '6.  Giải quyết vấn đề với sự trợ giúp của máy tính.',
        semester: 2,
        week: 33,
        duration: '1',
        coreKnowledge: '- Hiểu được khái niệm và ý nghĩa của việc viết kịch bản chương trình. - Đọc và phân tích được một kịch bản chương trình hoàn chỉnh, trả lời được các câu hỏi: nhân vật, sân khấu, hành động. - Xác định được các cấu trúc lập trình (tuần tự, lặp, rẽ nhánh) và lệnh tương ứng từ các hành động được mô tả trong kịch bản.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "Bài 16. Từ kịch bản đến chương trình.", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "Bài 16. Từ kịch bản đến chương trình.".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b26',
        lessonNumber: 26,
        title: 'Bài 16. Từ kịch bản đến chương trình',
        topic: '6.  Giải quyết vấn đề với sự trợ giúp của máy tính.',
        semester: 2,
        week: 34,
        duration: '1',
        coreKnowledge: '- Tạo được chương trình Scratch hoàn chỉnh thể hiện đúng kịch bản "Mèo bắt bóng" theo hướng dẫn. - Chạy thử, quan sát kết quả, so sánh với kịch bản và phát hiện được những điểm cần cải tiến. - Biết cách lưu và quản lý các phiên bản chương trình khác nhau.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "Bài 16. Từ kịch bản đến chương trình", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "Bài 16. Từ kịch bản đến chương trình".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b27',
        lessonNumber: 27,
        title: '34',
        topic: 'Ôn tập CKII',
        semester: 1,
        week: 2,
        duration: '- Hệ thống hóa kiến thức đã học.',
        coreKnowledge: '2.2.CB2: Tạo sản phẩm đa phương tiện. 3.4.CB2: Lập trình trực quan (Scratch). 5.2.CB2: Giải quyết vấn đề bằng lập trình.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "34", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "34".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
      {
        id: 'tin5_b28',
        lessonNumber: 28,
        title: '35',
        topic: 'KIỂM TRA CHKII',
        semester: 1,
        week: 2,
        duration: '- Kiểm tra kiến thức, kĩ năng đã học.',
        coreKnowledge: 'Thực hành sử dụng phần mềm, khai thác thông tin số an toàn và tư duy giải quyết vấn đề.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi thực hiện thao tác trong bài "35", cách làm nào là đúng chuẩn?',
            options: ['Thực hiện đúng quy trình thao tác và phím tắt/công cụ tương ứng', 'Thực hiện thao tác ngẫu nhiên không theo hướng dẫn', 'Xóa các tệp hệ thống không rõ nguồn gốc', 'Chia sẻ mật khẩu tài khoản cho người lạ'],
            answer: 0,
            explanation: 'Nắm vững thao tác kĩ năng số và quy tắc an toàn thông tin.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác thực hành trong bài "35".',
            guide: 'Mô tả rõ ràng từng bước thực hành trên phần mềm hoặc nguyên tắc an toàn số tương ứng.'
          }
        ]
      },
    ]
  };

  if (typeof window !== 'undefined') {
    window.SGK_TIN_HOC_5 = TIN_HOC_5_DATA;
    if (window.SGK_REGISTRY && typeof window.SGK_REGISTRY.registerBook === 'function') {
      window.SGK_REGISTRY.registerBook(5, 'tin_hoc', TIN_HOC_5_DATA);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = TIN_HOC_5_DATA;
  }
})(typeof window !== 'undefined' ? window : this);
