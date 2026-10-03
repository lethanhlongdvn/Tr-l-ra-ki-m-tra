/**
 * SỐ HÓA SÁCH GIÁO KHOA TỰ NHIÊN VÀ XÃ HỘI LỚP 3
 * Bộ sách: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Nhà xuất bản: NXB Giáo dục Việt Nam
 * Chương trình Giáo dục phổ thông 2018
 */

(function(global) {
  'use strict';

  const TNXH_3_DATA = {
    metadata: {
      grade: 3,
      subjectId: 'tnxh',
      subjectName: 'Tự nhiên và Xã hội',
      bookName: 'Tự nhiên và Xã hội 3 - Kết nối tri thức với cuộc sống',
      publisher: 'Nhà xuất bản Giáo dục Việt Nam',
      totalWeeks: 35,
      totalPeriods: 70,
      volumes: [
        { volume: 1, name: 'Học kì I (Tuần 1 đến 18)', weeks: '1-18' },
        { volume: 2, name: 'Học kì II (Tuần 19 đến 35)', weeks: '19-35' }
      ]
    },
    topics: [
      { id: 'tnxh3_cd1', name: 'Chủ đề 1: Gia đình (Họ hàng, sự kiện gia đình, phòng cháy nổ)', semester: 1, weeks: '1-6' },
      { id: 'tnxh3_cd2', name: 'Chủ đề 2: Trường học (Hoạt động trường học, an toàn giao thông)', semester: 1, weeks: '7-11' },
      { id: 'tnxh3_cd3', name: 'Chủ đề 3: Cộng đồng địa phương (Di tích, danh lam thắng cảnh)', semester: 1, weeks: '12-16' },
      { id: 'tnxh3_cd_on1', name: 'Ôn tập học kì 1', semester: 1, weeks: '17-18' },
      { id: 'tnxh3_cd4', name: 'Chủ đề 4: Thực vật và động vật (Cơ quan thực vật, động vật sống ở đâu)', semester: 2, weeks: '19-24' },
      { id: 'tnxh3_cd5', name: 'Chủ đề 5: Con người và sức khỏe (Cơ quan tiêu hóa, tuần hoàn, bài tiết)', semester: 2, weeks: '25-29' },
      { id: 'tnxh3_cd6', name: 'Chủ đề 6: Trái Đất và bầu trời (Mặt trời, Trái đất, Mặt trăng)', semester: 2, weeks: '30-34' },
      { id: 'tnxh3_cd_on2', name: 'Ôn tập cuối năm', semester: 2, weeks: '35' }
    ],
    lessons: [
      {
        id: 'tnxh3_b1',
        lessonNumber: 1,
        title: 'Bài 1: Họ hàng và những ngày kỉ niệm của gia đình',
        topic: 'CHỦ ĐỀ 1: GIA ĐÌNH',
        semester: 1,
        week: 1,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 1: Họ hàng và những ngày kỉ niệm của gia đình". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 1: Họ hàng và những ngày kỉ niệm của gia đình" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 1: Họ hàng và những ngày kỉ niệm của gia đình".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b2',
        lessonNumber: 2,
        title: 'Bài 2: Phòng tránh hỏa hoạn khi ở nhà.',
        topic: 'CHỦ ĐỀ 1: GIA ĐÌNH',
        semester: 1,
        week: 2,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 2: Phòng tránh hỏa hoạn khi ở nhà.". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 2: Phòng tránh hỏa hoạn khi ở nhà." là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 2: Phòng tránh hỏa hoạn khi ở nhà.".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b3',
        lessonNumber: 3,
        title: 'Bài 3: Vệ sinh xung quanh nhà',
        topic: 'CHỦ ĐỀ 1: GIA ĐÌNH',
        semester: 1,
        week: 3,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 3: Vệ sinh xung quanh nhà". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 3: Vệ sinh xung quanh nhà" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 3: Vệ sinh xung quanh nhà".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b4',
        lessonNumber: 4,
        title: 'Bài 4: Ôn tập chủ đề gia đình',
        topic: 'CHỦ ĐỀ 1: GIA ĐÌNH',
        semester: 1,
        week: 4,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 4: Ôn tập chủ đề gia đình". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 4: Ôn tập chủ đề gia đình" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 4: Ôn tập chủ đề gia đình".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b5',
        lessonNumber: 5,
        title: 'Bài 5: Hoạt động kết nối với cộng đồng',
        topic: 'CHỦ ĐỀ 2: TRƯỜNG HỌC',
        semester: 1,
        week: 5,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 5: Hoạt động kết nối với cộng đồng". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 5: Hoạt động kết nối với cộng đồng" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 5: Hoạt động kết nối với cộng đồng".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b6',
        lessonNumber: 6,
        title: 'Bài 6: Truyền thống trường em',
        topic: 'CHỦ ĐỀ 2: TRƯỜNG HỌC',
        semester: 1,
        week: 6,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 6: Truyền thống trường em". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 6: Truyền thống trường em" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 6: Truyền thống trường em".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b7',
        lessonNumber: 7,
        title: 'Bài 7: Giữ an toàn và vệ sinh ở trường',
        topic: 'CHỦ ĐỀ 2: TRƯỜNG HỌC',
        semester: 1,
        week: 7,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 7: Giữ an toàn và vệ sinh ở trường". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 7: Giữ an toàn và vệ sinh ở trường" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 7: Giữ an toàn và vệ sinh ở trường".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b8',
        lessonNumber: 8,
        title: 'Bài 8: Ôn tập chủ đề trường học',
        topic: 'CHỦ ĐỀ 2: TRƯỜNG HỌC',
        semester: 1,
        week: 9,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 8: Ôn tập chủ đề trường học". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 8: Ôn tập chủ đề trường học" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 8: Ôn tập chủ đề trường học".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b9',
        lessonNumber: 9,
        title: 'Bài 9: Hoạt động sản xuất nông nghiệp',
        topic: 'CHỦ ĐỀ 3: CỘNG ĐỒNG ĐỊA PHƯƠNG',
        semester: 1,
        week: 10,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 9: Hoạt động sản xuất nông nghiệp". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 9: Hoạt động sản xuất nông nghiệp" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 9: Hoạt động sản xuất nông nghiệp".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b10',
        lessonNumber: 10,
        title: 'Bài 10: Hoạt động sản xuất thủ công và công nghiệp',
        topic: 'CHỦ ĐỀ 3: CỘNG ĐỒNG ĐỊA PHƯƠNG',
        semester: 1,
        week: 11,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 10: Hoạt động sản xuất thủ công và công nghiệp". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 10: Hoạt động sản xuất thủ công và công nghiệp" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 10: Hoạt động sản xuất thủ công và công nghiệp".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b11',
        lessonNumber: 11,
        title: 'Bài 11: Di tích lịch sử - văn hóa và cảnh quan thiên nhiên',
        topic: 'CHỦ ĐỀ 3: CỘNG ĐỒNG ĐỊA PHƯƠNG',
        semester: 1,
        week: 13,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 11: Di tích lịch sử - văn hóa và cảnh quan thiên nhiên". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 11: Di tích lịch sử - văn hóa và cảnh quan thiên nhiên" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 11: Di tích lịch sử - văn hóa và cảnh quan thiên nhiên".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b12',
        lessonNumber: 12,
        title: 'Bài 12: Ôn tập chủ đề Cộng đồng địa phương',
        topic: 'CHỦ ĐỀ 3: CỘNG ĐỒNG ĐỊA PHƯƠNG',
        semester: 1,
        week: 14,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 12: Ôn tập chủ đề Cộng đồng địa phương". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 12: Ôn tập chủ đề Cộng đồng địa phương" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 12: Ôn tập chủ đề Cộng đồng địa phương".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b13',
        lessonNumber: 13,
        title: 'Bài 13: Một số bộ phận của thực vật',
        topic: 'CHỦ ĐỀ 4: THỰC VẬT VÀ ĐỘNG VẬT',
        semester: 1,
        week: 15,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 13: Một số bộ phận của thực vật". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 13: Một số bộ phận của thực vật" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 13: Một số bộ phận của thực vật".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b14',
        lessonNumber: 14,
        title: 'Bài 14: Chức năng một số bộ phận của thực vật',
        topic: 'CHỦ ĐỀ 4: THỰC VẬT VÀ ĐỘNG VẬT',
        semester: 1,
        week: 16,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 14: Chức năng một số bộ phận của thực vật". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 14: Chức năng một số bộ phận của thực vật" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 14: Chức năng một số bộ phận của thực vật".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b15',
        lessonNumber: 15,
        title: 'Bài 15: Một số bộ phận của động vật và chức năng của chúng',
        topic: 'CHỦ ĐỀ 4: THỰC VẬT VÀ ĐỘNG VẬT',
        semester: 1,
        week: 18,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 15: Một số bộ phận của động vật và chức năng của chúng". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 15: Một số bộ phận của động vật và chức năng của chúng" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 15: Một số bộ phận của động vật và chức năng của chúng".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b16',
        lessonNumber: 16,
        title: 'Bài 16: Sử dụng hợp lí thực vật và động vật',
        topic: 'CHỦ ĐỀ 4: THỰC VẬT VÀ ĐỘNG VẬT',
        semester: 2,
        week: 20,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 16: Sử dụng hợp lí thực vật và động vật". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 16: Sử dụng hợp lí thực vật và động vật" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 16: Sử dụng hợp lí thực vật và động vật".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b17',
        lessonNumber: 17,
        title: 'Bài 17: Ôn tập chủ đề Thực vật và động vật',
        topic: 'CHỦ ĐỀ 4: THỰC VẬT VÀ ĐỘNG VẬT',
        semester: 2,
        week: 21,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 17: Ôn tập chủ đề Thực vật và động vật". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 17: Ôn tập chủ đề Thực vật và động vật" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 17: Ôn tập chủ đề Thực vật và động vật".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b18',
        lessonNumber: 18,
        title: 'Bài 18: Cơ quan tiêu hóa',
        topic: 'CHỦ ĐỀ 5: CON NGƯỜI VÀ SỨC KHỎE',
        semester: 2,
        week: 22,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 18: Cơ quan tiêu hóa". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 18: Cơ quan tiêu hóa" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 18: Cơ quan tiêu hóa".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b19',
        lessonNumber: 19,
        title: 'Bài 19: Chăm sóc và bảo vệ cơ quan tiêu hóa',
        topic: 'CHỦ ĐỀ 5: CON NGƯỜI VÀ SỨC KHỎE',
        semester: 2,
        week: 23,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 19: Chăm sóc và bảo vệ cơ quan tiêu hóa". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 19: Chăm sóc và bảo vệ cơ quan tiêu hóa" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 19: Chăm sóc và bảo vệ cơ quan tiêu hóa".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b20',
        lessonNumber: 20,
        title: 'Bài 20: Cơ quan tuần hoàn',
        topic: 'CHỦ ĐỀ 5: CON NGƯỜI VÀ SỨC KHỎE',
        semester: 2,
        week: 24,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 20: Cơ quan tuần hoàn". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 20: Cơ quan tuần hoàn" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 20: Cơ quan tuần hoàn".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b21',
        lessonNumber: 21,
        title: 'Bài 21: Chăm sóc và bảo vệ cơ quan tuần hoàn',
        topic: 'CHỦ ĐỀ 5: CON NGƯỜI VÀ SỨC KHỎE',
        semester: 2,
        week: 25,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 21: Chăm sóc và bảo vệ cơ quan tuần hoàn". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 21: Chăm sóc và bảo vệ cơ quan tuần hoàn" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 21: Chăm sóc và bảo vệ cơ quan tuần hoàn".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b22',
        lessonNumber: 22,
        title: 'Bài 22: Cơ quan thần kinh',
        topic: 'CHỦ ĐỀ 5: CON NGƯỜI VÀ SỨC KHỎE',
        semester: 2,
        week: 26,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 22: Cơ quan thần kinh". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 22: Cơ quan thần kinh" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 22: Cơ quan thần kinh".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b23',
        lessonNumber: 23,
        title: 'Bài 23: Chăm sóc và bảo vệ cơ quan thần kinh',
        topic: 'CHỦ ĐỀ 5: CON NGƯỜI VÀ SỨC KHỎE',
        semester: 2,
        week: 27,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 23: Chăm sóc và bảo vệ cơ quan thần kinh". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 23: Chăm sóc và bảo vệ cơ quan thần kinh" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 23: Chăm sóc và bảo vệ cơ quan thần kinh".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b24',
        lessonNumber: 24,
        title: 'Bài 24: Thu thập thông tin về các chất và hoạt động có hại cho sức khỏe',
        topic: 'CHỦ ĐỀ 5: CON NGƯỜI VÀ SỨC KHỎE',
        semester: 2,
        week: 28,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 24: Thu thập thông tin về các chất và hoạt động có hại cho sức khỏe". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 24: Thu thập thông tin về các chất và hoạt động có hại cho sức khỏe" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 24: Thu thập thông tin về các chất và hoạt động có hại cho sức khỏe".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b25',
        lessonNumber: 25,
        title: 'Bài 25: Ôn tập chủ đề: Con người và sức khỏe',
        topic: 'CHỦ ĐỀ 5: CON NGƯỜI VÀ SỨC KHỎE',
        semester: 2,
        week: 28,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 25: Ôn tập chủ đề: Con người và sức khỏe". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 25: Ôn tập chủ đề: Con người và sức khỏe" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 25: Ôn tập chủ đề: Con người và sức khỏe".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b26',
        lessonNumber: 26,
        title: 'Bài 26: Xác định các phương trong không gian',
        topic: 'CHỦ ĐỀ 6: TRÁI ĐẤT VÀ BẦU TRỜI',
        semester: 2,
        week: 29,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 26: Xác định các phương trong không gian". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 26: Xác định các phương trong không gian" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 26: Xác định các phương trong không gian".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b27',
        lessonNumber: 27,
        title: 'Bài 27: Trái Đất và các đới khí hậu.',
        topic: 'CHỦ ĐỀ 6: TRÁI ĐẤT VÀ BẦU TRỜI',
        semester: 2,
        week: 30,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 27: Trái Đất và các đới khí hậu.". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 27: Trái Đất và các đới khí hậu." là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 27: Trái Đất và các đới khí hậu.".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b28',
        lessonNumber: 28,
        title: 'Bài 28: Bề mặt Trái Đất',
        topic: 'CHỦ ĐỀ 6: TRÁI ĐẤT VÀ BẦU TRỜI',
        semester: 2,
        week: 31,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 28: Bề mặt Trái Đất". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 28: Bề mặt Trái Đất" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 28: Bề mặt Trái Đất".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b29',
        lessonNumber: 29,
        title: 'Bài 29: Mặt Trời, Trái Đất, Mặt Trăng',
        topic: 'CHỦ ĐỀ 6: TRÁI ĐẤT VÀ BẦU TRỜI',
        semester: 2,
        week: 32,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 29: Mặt Trời, Trái Đất, Mặt Trăng". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 29: Mặt Trời, Trái Đất, Mặt Trăng" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 29: Mặt Trời, Trái Đất, Mặt Trăng".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
      {
        id: 'tnxh3_b30',
        lessonNumber: 30,
        title: 'Bài 30: Ôn tập chủ đề Trái Đất và bầu trời',
        topic: 'CHỦ ĐỀ 6: TRÁI ĐẤT VÀ BẦU TRỜI',
        semester: 2,
        week: 33,
        duration: '1 tiết',
        coreKnowledge: 'Tìm hiểu kiến thức đời sống, gia đình, nhà trường, tự nhiên và chăm sóc sức khỏe trong bài "Bài 30: Ôn tập chủ đề Trái Đất và bầu trời". Bồi dưỡng kĩ năng ứng xử, an toàn và bảo vệ môi trường.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi hoặc kiến thức khoa học đúng trong bài "Bài 30: Ôn tập chủ đề Trái Đất và bầu trời" là:',
            options: ['Hành động đúng chuẩn mực, văn minh và an toàn', 'Hành vi gây nguy hiểm cho bản thân', 'Ý thức chưa giữ gìn vệ sinh chung', 'Hành động không tuân thủ nội quy'],
            answer: 0,
            explanation: 'Ghi nhớ kiến thức và quy tắc an toàn trong đời sống sinh hoạt.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy nêu 2 việc nên làm và 2 việc không nên làm liên quan đến nội dung bài "Bài 30: Ôn tập chủ đề Trái Đất và bầu trời".',
            guide: 'Nêu rõ ràng, cụ thể các hành vi đúng/sai trong gia đình, trường học hoặc chăm sóc sức khỏe.'
          }
        ]
      },
    ]
  };

  if (typeof window !== 'undefined') {
    window.SGK_TNXH_3 = TNXH_3_DATA;
    if (window.SGK_REGISTRY && typeof window.SGK_REGISTRY.registerBook === 'function') {
      window.SGK_REGISTRY.registerBook(3, 'tnxh', TNXH_3_DATA);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = TNXH_3_DATA;
  }
})(typeof window !== 'undefined' ? window : this);
