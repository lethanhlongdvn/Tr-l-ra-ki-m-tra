/**
 * SỐ HÓA SÁCH GIÁO KHOA TIN HỌC LỚP 3
 * Bộ sách: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Nhà xuất bản: NXB Giáo dục Việt Nam
 * Chương trình Giáo dục phổ thông 2018
 */

(function(global) {
  'use strict';

  const TIN_HOC_3_DATA = {
    metadata: {
      grade: 3,
      subjectId: 'tin_hoc',
      subjectName: 'Tin học',
      bookName: 'Tin học 3 - Kết nối tri thức với cuộc sống',
      publisher: 'Nhà xuất bản Giáo dục Việt Nam',
      totalWeeks: 35,
      totalPeriods: 35,
      volumes: [
        { volume: 1, name: 'Học kì I (Tuần 1 đến 18)', weeks: '1-18' },
        { volume: 2, name: 'Học kì II (Tuần 19 đến 35)', weeks: '19-35' }
      ]
    },
    topics: [
      { id: 'tin3_cdA', name: 'Chủ đề A: Máy tính và em (Thông tin, bộ phận máy tính, bàn phím, chuột)', semester: 1, weeks: '1-12' },
      { id: 'tin3_cdC', name: 'Chủ đề C: Tổ chức lưu trữ và tìm kiếm thông tin (Cây thư mục)', semester: 1, weeks: '13-17' },
      { id: 'tin3_cd_on1', name: 'Ôn tập học kì 1', semester: 1, weeks: '18' },
      { id: 'tin3_cdD', name: 'Chủ đề D: Đạo đức, pháp luật và văn hoá trong môi trường số (Bảo vệ sức khoẻ)', semester: 2, weeks: '19-21' },
      { id: 'tin3_cdE', name: 'Chủ đề E: Ứng dụng tin học (Phần mềm vẽ Paint, luyện gõ)', semester: 2, weeks: '22-27' },
      { id: 'tin3_cdB', name: 'Chủ đề B: Mạng máy tính và Internet (Tìm kiếm thông tin web)', semester: 2, weeks: '28-30' },
      { id: 'tin3_cdF', name: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính (Các bước thực hiện công việc)', semester: 2, weeks: '31-34' },
      { id: 'tin3_cd_on2', name: 'Ôn tập cuối năm', semester: 2, weeks: '35' }
    ],
    lessons: [
      {
        id: 'tin3_b1',
        lessonNumber: 1,
        title: 'Bài 1. Thông tin và quyết định',
        topic: 'Chủ đề A: Máy tính và em',
        semester: 1,
        week: 1,
        duration: '1 tiết',
        coreKnowledge: 'Nhận biết được thông tin thu nhận được qua các giác quan và cách con người ra quyết định dựa trên thông tin.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn xác trong bài "Bài 1. Thông tin và quyết định" là:',
            options: ['Thực hiện đúng theo quy tắc hướng dẫn trong SGK Tin học 3', 'Thao tác sai tư thế hoặc sai cách', 'Ấn các phím tùy ý không mục đích', 'Để thức ăn nước uống gần máy tính'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và giữ gìn thiết bị máy tính an toàn.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 1. Thông tin và quyết định".',
            guide: 'Mô tả rõ ràng từng bước sử dụng chuột, bàn phím hoặc phần mềm học tập.'
          }
        ]
      },
      {
        id: 'tin3_b2',
        lessonNumber: 2,
        title: 'Bài 2. Xử lí thông tin',
        topic: 'Chủ đề A: Máy tính và em',
        semester: 1,
        week: 3,
        duration: '1 tiết',
        coreKnowledge: 'Nhận biết các bước xử lí thông tin: thu nhận thông tin, xử lí thông tin và xuất kết quả.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn xác trong bài "Bài 2. Xử lí thông tin" là:',
            options: ['Thực hiện đúng theo quy tắc hướng dẫn trong SGK Tin học 3', 'Thao tác sai tư thế hoặc sai cách', 'Ấn các phím tùy ý không mục đích', 'Để thức ăn nước uống gần máy tính'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và giữ gìn thiết bị máy tính an toàn.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 2. Xử lí thông tin".',
            guide: 'Mô tả rõ ràng từng bước sử dụng chuột, bàn phím hoặc phần mềm học tập.'
          }
        ]
      },
      {
        id: 'tin3_b3',
        lessonNumber: 3,
        title: 'Bài 3. Máy tính - những người bạn mới',
        topic: 'Chủ đề A: Máy tính và em',
        semester: 1,
        week: 5,
        duration: '1 tiết',
        coreKnowledge: 'Kể tên các loại máy tính thông dụng: máy tính để bàn, máy tính xách tay, máy tính bảng và các bộ phận cơ bản (màn hình, thân máy, bàn phím, chuột).',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn xác trong bài "Bài 3. Máy tính - những người bạn mới" là:',
            options: ['Thực hiện đúng theo quy tắc hướng dẫn trong SGK Tin học 3', 'Thao tác sai tư thế hoặc sai cách', 'Ấn các phím tùy ý không mục đích', 'Để thức ăn nước uống gần máy tính'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và giữ gìn thiết bị máy tính an toàn.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 3. Máy tính - những người bạn mới".',
            guide: 'Mô tả rõ ràng từng bước sử dụng chuột, bàn phím hoặc phần mềm học tập.'
          }
        ]
      },
      {
        id: 'tin3_b4',
        lessonNumber: 4,
        title: 'Bài 4. Làm việc với máy tính',
        topic: 'Chủ đề A: Máy tính và em',
        semester: 1,
        week: 7,
        duration: '1 tiết',
        coreKnowledge: 'Ngồi đúng tư thế khi dùng máy tính, bật/tắt máy tính đúng cách, giữ khoảng cách mắt an toàn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn xác trong bài "Bài 4. Làm việc với máy tính" là:',
            options: ['Thực hiện đúng theo quy tắc hướng dẫn trong SGK Tin học 3', 'Thao tác sai tư thế hoặc sai cách', 'Ấn các phím tùy ý không mục đích', 'Để thức ăn nước uống gần máy tính'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và giữ gìn thiết bị máy tính an toàn.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 4. Làm việc với máy tính".',
            guide: 'Mô tả rõ ràng từng bước sử dụng chuột, bàn phím hoặc phần mềm học tập.'
          }
        ]
      },
      {
        id: 'tin3_b5',
        lessonNumber: 5,
        title: 'Bài 5. Sử dụng bàn phím',
        topic: 'Chủ đề A: Máy tính và em',
        semester: 1,
        week: 9,
        duration: '1 tiết',
        coreKnowledge: 'Nhận biết các khu vực trên bàn phím: hàng phím cơ sở, hàng phím trên, hàng phím dưới, hai phím có gờ F và J.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn xác trong bài "Bài 5. Sử dụng bàn phím" là:',
            options: ['Thực hiện đúng theo quy tắc hướng dẫn trong SGK Tin học 3', 'Thao tác sai tư thế hoặc sai cách', 'Ấn các phím tùy ý không mục đích', 'Để thức ăn nước uống gần máy tính'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và giữ gìn thiết bị máy tính an toàn.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 5. Sử dụng bàn phím".',
            guide: 'Mô tả rõ ràng từng bước sử dụng chuột, bàn phím hoặc phần mềm học tập.'
          }
        ]
      },
      {
        id: 'tin3_b6',
        lessonNumber: 6,
        title: 'Bài 6. Sử dụng chuột máy tính',
        topic: 'Chủ đề A: Máy tính và em',
        semester: 1,
        week: 11,
        duration: '1 tiết',
        coreKnowledge: 'Cầm chuột đúng cách, thực hiện các thao tác: di chuyển chuột, nháy chuột, nháy đúp chuột, kéo thả chuột.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn xác trong bài "Bài 6. Sử dụng chuột máy tính" là:',
            options: ['Thực hiện đúng theo quy tắc hướng dẫn trong SGK Tin học 3', 'Thao tác sai tư thế hoặc sai cách', 'Ấn các phím tùy ý không mục đích', 'Để thức ăn nước uống gần máy tính'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và giữ gìn thiết bị máy tính an toàn.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 6. Sử dụng chuột máy tính".',
            guide: 'Mô tả rõ ràng từng bước sử dụng chuột, bàn phím hoặc phần mềm học tập.'
          }
        ]
      },
      {
        id: 'tin3_b7',
        lessonNumber: 7,
        title: 'Bài 7. Sắp xếp để dễ tìm',
        topic: 'Chủ đề C: Tổ chức lưu trữ và tìm kiếm thông tin',
        semester: 1,
        week: 13,
        duration: '1 tiết',
        coreKnowledge: 'Hiểu được lợi ích của việc sắp xếp đồ vật, dữ liệu hợp lí để tìm kiếm nhanh chóng.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn xác trong bài "Bài 7. Sắp xếp để dễ tìm" là:',
            options: ['Thực hiện đúng theo quy tắc hướng dẫn trong SGK Tin học 3', 'Thao tác sai tư thế hoặc sai cách', 'Ấn các phím tùy ý không mục đích', 'Để thức ăn nước uống gần máy tính'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và giữ gìn thiết bị máy tính an toàn.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 7. Sắp xếp để dễ tìm".',
            guide: 'Mô tả rõ ràng từng bước sử dụng chuột, bàn phím hoặc phần mềm học tập.'
          }
        ]
      },
      {
        id: 'tin3_b8',
        lessonNumber: 8,
        title: 'Bài 8. Sơ đồ hình cây. Cây thư mục',
        topic: 'Chủ đề C: Tổ chức lưu trữ và tìm kiếm thông tin',
        semester: 1,
        week: 15,
        duration: '1 tiết',
        coreKnowledge: 'Biết biểu diễn cách sắp xếp thông tin theo sơ đồ hình cây, làm quen với cây thư mục trên máy tính.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn xác trong bài "Bài 8. Sơ đồ hình cây. Cây thư mục" là:',
            options: ['Thực hiện đúng theo quy tắc hướng dẫn trong SGK Tin học 3', 'Thao tác sai tư thế hoặc sai cách', 'Ấn các phím tùy ý không mục đích', 'Để thức ăn nước uống gần máy tính'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và giữ gìn thiết bị máy tính an toàn.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 8. Sơ đồ hình cây. Cây thư mục".',
            guide: 'Mô tả rõ ràng từng bước sử dụng chuột, bàn phím hoặc phần mềm học tập.'
          }
        ]
      },
      {
        id: 'tin3_b9',
        lessonNumber: 9,
        title: 'Bài 9. Ôn tập học kì 1',
        topic: 'Ôn tập học kì 1',
        semester: 1,
        week: 18,
        duration: '1 tiết',
        coreKnowledge: 'Củng cố các kiến thức về máy tính, bàn phím, chuột và cây thư mục.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn xác trong bài "Bài 9. Ôn tập học kì 1" là:',
            options: ['Thực hiện đúng theo quy tắc hướng dẫn trong SGK Tin học 3', 'Thao tác sai tư thế hoặc sai cách', 'Ấn các phím tùy ý không mục đích', 'Để thức ăn nước uống gần máy tính'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và giữ gìn thiết bị máy tính an toàn.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 9. Ôn tập học kì 1".',
            guide: 'Mô tả rõ ràng từng bước sử dụng chuột, bàn phím hoặc phần mềm học tập.'
          }
        ]
      },
      {
        id: 'tin3_b10',
        lessonNumber: 10,
        title: 'Bài 10. Em bảo vệ sức khoẻ khi sử dụng máy tính',
        topic: 'Chủ đề D: Đạo đức, pháp luật và văn hoá trong môi trường số',
        semester: 2,
        week: 19,
        duration: '1 tiết',
        coreKnowledge: 'Thực hiện thói quen tốt giữ gìn sức khoẻ, không dùng máy tính quá lâu, phòng tránh bệnh về mắt và cột sống.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn xác trong bài "Bài 10. Em bảo vệ sức khoẻ khi sử dụng máy tính" là:',
            options: ['Thực hiện đúng theo quy tắc hướng dẫn trong SGK Tin học 3', 'Thao tác sai tư thế hoặc sai cách', 'Ấn các phím tùy ý không mục đích', 'Để thức ăn nước uống gần máy tính'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và giữ gìn thiết bị máy tính an toàn.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 10. Em bảo vệ sức khoẻ khi sử dụng máy tính".',
            guide: 'Mô tả rõ ràng từng bước sử dụng chuột, bàn phím hoặc phần mềm học tập.'
          }
        ]
      },
      {
        id: 'tin3_b11',
        lessonNumber: 11,
        title: 'Bài 11. Tin học giúp em học tập',
        topic: 'Chủ đề E: Ứng dụng tin học',
        semester: 2,
        week: 22,
        duration: '1 tiết',
        coreKnowledge: 'Khám phá các phần mềm trò chơi học tập, luyện gõ bàn phím và luyện chuột.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn xác trong bài "Bài 11. Tin học giúp em học tập" là:',
            options: ['Thực hiện đúng theo quy tắc hướng dẫn trong SGK Tin học 3', 'Thao tác sai tư thế hoặc sai cách', 'Ấn các phím tùy ý không mục đích', 'Để thức ăn nước uống gần máy tính'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và giữ gìn thiết bị máy tính an toàn.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 11. Tin học giúp em học tập".',
            guide: 'Mô tả rõ ràng từng bước sử dụng chuột, bàn phím hoặc phần mềm học tập.'
          }
        ]
      },
      {
        id: 'tin3_b12',
        lessonNumber: 12,
        title: 'Bài 12. Làm quen với phần mềm vẽ hình Paint',
        topic: 'Chủ đề E: Ứng dụng tin học',
        semester: 2,
        week: 25,
        duration: '1 tiết',
        coreKnowledge: 'Khởi động phần mềm Paint, chọn màu sắc, cọ vẽ, hình mẫu và lưu bức vẽ.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn xác trong bài "Bài 12. Làm quen với phần mềm vẽ hình Paint" là:',
            options: ['Thực hiện đúng theo quy tắc hướng dẫn trong SGK Tin học 3', 'Thao tác sai tư thế hoặc sai cách', 'Ấn các phím tùy ý không mục đích', 'Để thức ăn nước uống gần máy tính'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và giữ gìn thiết bị máy tính an toàn.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 12. Làm quen với phần mềm vẽ hình Paint".',
            guide: 'Mô tả rõ ràng từng bước sử dụng chuột, bàn phím hoặc phần mềm học tập.'
          }
        ]
      },
      {
        id: 'tin3_b13',
        lessonNumber: 13,
        title: 'Bài 13. Thu thập và tìm kiếm thông tin',
        topic: 'Chủ đề B: Mạng máy tính và Internet',
        semester: 2,
        week: 28,
        duration: '1 tiết',
        coreKnowledge: 'Làm quen với trình duyệt web, xem các trang web học tập bổ ích dưới sự hướng dẫn của thầy cô, cha mẹ.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn xác trong bài "Bài 13. Thu thập và tìm kiếm thông tin" là:',
            options: ['Thực hiện đúng theo quy tắc hướng dẫn trong SGK Tin học 3', 'Thao tác sai tư thế hoặc sai cách', 'Ấn các phím tùy ý không mục đích', 'Để thức ăn nước uống gần máy tính'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và giữ gìn thiết bị máy tính an toàn.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 13. Thu thập và tìm kiếm thông tin".',
            guide: 'Mô tả rõ ràng từng bước sử dụng chuột, bàn phím hoặc phần mềm học tập.'
          }
        ]
      },
      {
        id: 'tin3_b14',
        lessonNumber: 14,
        title: 'Bài 14. Em thực hiện công việc theo các bước',
        topic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính',
        semester: 2,
        week: 31,
        duration: '1 tiết',
        coreKnowledge: 'Biết chia một công việc thành các bước tuần tự và thực hiện đúng trình tự để đạt kết quả.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn xác trong bài "Bài 14. Em thực hiện công việc theo các bước" là:',
            options: ['Thực hiện đúng theo quy tắc hướng dẫn trong SGK Tin học 3', 'Thao tác sai tư thế hoặc sai cách', 'Ấn các phím tùy ý không mục đích', 'Để thức ăn nước uống gần máy tính'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và giữ gìn thiết bị máy tính an toàn.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 14. Em thực hiện công việc theo các bước".',
            guide: 'Mô tả rõ ràng từng bước sử dụng chuột, bàn phím hoặc phần mềm học tập.'
          }
        ]
      },
      {
        id: 'tin3_b15',
        lessonNumber: 15,
        title: 'Bài 15. Nhiệm vụ của em và sự trợ giúp của máy tính',
        topic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính',
        semester: 2,
        week: 34,
        duration: '1 tiết',
        coreKnowledge: 'Vận dụng kĩ năng máy tính để hoàn thành một nhiệm vụ học tập thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn xác trong bài "Bài 15. Nhiệm vụ của em và sự trợ giúp của máy tính" là:',
            options: ['Thực hiện đúng theo quy tắc hướng dẫn trong SGK Tin học 3', 'Thao tác sai tư thế hoặc sai cách', 'Ấn các phím tùy ý không mục đích', 'Để thức ăn nước uống gần máy tính'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và giữ gìn thiết bị máy tính an toàn.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 15. Nhiệm vụ của em và sự trợ giúp của máy tính".',
            guide: 'Mô tả rõ ràng từng bước sử dụng chuột, bàn phím hoặc phần mềm học tập.'
          }
        ]
      },
      {
        id: 'tin3_b16',
        lessonNumber: 16,
        title: 'Bài 16. Ôn tập cuối năm',
        topic: 'Ôn tập cuối năm',
        semester: 2,
        week: 35,
        duration: '1 tiết',
        coreKnowledge: 'Tổng kết kiến thức và kĩ năng thực hành Tin học lớp 3.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khái niệm hoặc thao tác chuẩn xác trong bài "Bài 16. Ôn tập cuối năm" là:',
            options: ['Thực hiện đúng theo quy tắc hướng dẫn trong SGK Tin học 3', 'Thao tác sai tư thế hoặc sai cách', 'Ấn các phím tùy ý không mục đích', 'Để thức ăn nước uống gần máy tính'],
            answer: 0,
            explanation: 'Nắm vững kiến thức cơ bản và giữ gìn thiết bị máy tính an toàn.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu các bước thực hiện thao tác máy tính trong bài "Bài 16. Ôn tập cuối năm".',
            guide: 'Mô tả rõ ràng từng bước sử dụng chuột, bàn phím hoặc phần mềm học tập.'
          }
        ]
      },
    ]
  };

  if (typeof window !== 'undefined') {
    window.SGK_TIN_HOC_3 = TIN_HOC_3_DATA;
    if (window.SGK_REGISTRY && typeof window.SGK_REGISTRY.registerBook === 'function') {
      window.SGK_REGISTRY.registerBook(3, 'tin_hoc', TIN_HOC_3_DATA);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = TIN_HOC_3_DATA;
  }
})(typeof window !== 'undefined' ? window : this);
