/**
 * SỐ HÓA SÁCH GIÁO KHOA ĐẠO ĐỨC LỚP 4
 * Bộ sách: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Nhà xuất bản: NXB Giáo dục Việt Nam
 * Chuẩn Chương trình GDPT 2018 & Thông tư 27/2020/TT-BGDĐT
 */

(function(global) {
  'use strict';

  const DAO_DUC_4_DATA = {
    metadata: {
      grade: 4,
      subjectId: 'dao_duc',
      subjectName: 'Đạo đức',
      bookName: 'Đạo đức 4 - Kết nối tri thức với cuộc sống',
      publisher: 'Nhà xuất bản Giáo dục Việt Nam',
      totalWeeks: 35,
      totalPeriods: 35,
      volumes: [
        { volume: 1, name: 'Học kì I (Tuần 1 đến 17)', weeks: '1-17' },
        { volume: 2, name: 'Học kì II (Tuần 18 đến 35)', weeks: '18-35' }
      ]
    },
    topics: [
      { id: 'dd4_cd1', name: 'Chủ đề 1: Biết ơn người lao động', semester: 1, weeks: '1-4' },
      { id: 'dd4_cd2', name: 'Chủ đề 2: Cảm thông, giúp đỡ người gặp khó khăn', semester: 1, weeks: '5-9' },
      { id: 'dd4_cd3', name: 'Chủ đề 3: Yêu lao động', semester: 1, weeks: '10-13' },
      { id: 'dd4_cd4', name: 'Chủ đề 4: Tôn trọng tài sản của người khác', semester: 1, weeks: '14-17' },
      { id: 'dd4_cd5', name: 'Chủ đề 5: Bảo vệ của công', semester: 2, weeks: '18-20' },
      { id: 'dd4_cd6', name: 'Chủ đề 6: Thiết lập và duy trì quan hệ bạn bè', semester: 2, weeks: '21-26' },
      { id: 'dd4_cd7', name: 'Chủ đề 7: Quý trọng đồng tiền', semester: 2, weeks: '27-30' },
      { id: 'dd4_cd8', name: 'Chủ đề 8: Quyền và bổn phận của trẻ em', semester: 2, weeks: '31-35' }
    ],
    lessons: [
      {
        id: 'dd4_b1',
        lessonNumber: 1,
        title: 'Bài 1: Biết ơn người lao động',
        topic: 'Chủ đề 1: Biết ơn người lao động',
        semester: 1,
        week: 1,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu được ý nghĩa, sự đóng góp của người lao động trong xã hội; có thái độ trân trọng và thể hiện lời nói, việc làm biết ơn người lao động bằng hành động thiết thực.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi nào sau đây thể hiện thái độ biết ơn người lao động?',
            options: [
              'Chào hỏi lễ phép và cảm ơn cô lao công quét dọn trường lớp',
              'Vứt rác bừa bãi sau khi ăn xong',
              'Chê bai nghề nghiệp của người khác',
              'Không trân trọng thức ăn bác nông dân làm ra'
            ],
            answer: 0,
            explanation: 'Biết ơn người lao động thể hiện qua lời chào hỏi lễ phép, cảm ơn và trân trọng thành quả lao động.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Em hãy kể 2 việc làm cụ thể của bản thân để thể hiện lòng biết ơn đối với người lao động xung quanh em.',
            guide: 'Học sinh nêu 2 hành động cụ thể, thiết thực gắn với đời sống hằng ngày (chào hỏi lễ phép, giữ vệ sinh chung, trân trọng sản phẩm...).'
          }
        ]
      },
      {
        id: 'dd4_b2',
        lessonNumber: 2,
        title: 'Bài 2: Cảm thông, giúp đỡ người gặp khó khăn',
        topic: 'Chủ đề 2: Cảm thông, giúp đỡ người gặp khó khăn',
        semester: 1,
        week: 5,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu được vì sao cần cảm thông, sẵn sàng sẻ chia, giúp đỡ người gặp khó khăn phù hợp với lứa tuổi và khả năng của bản thân.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Việc làm nào sau đây thể hiện sự cảm thông, giúp đỡ người gặp khó khăn?',
            options: [
              'Quyên góp sách vở, quần áo ủng hộ đồng bào bị bão lũ',
              'Thờ ơ, chế giễu bạn có hoàn cảnh khó khăn',
              'Tránh xa người khuyết tật khi họ cần giúp đỡ',
              'Không tham gia phong trào nuôi heo đất giúp bạn vượt khó'
            ],
            answer: 0,
            explanation: 'Quyên góp, sẻ chia là hành động nhân ái giúp đỡ người hoạn nạn.'
          },
          {
            type: 'TL',
            level: 2,
            question: 'Khi thấy một bạn trong lớp bị ốm hoặc gặp chuyện buồn, em sẽ làm gì để an ủi và giúp đỡ bạn?',
            guide: 'Học sinh thể hiện sự quan tâm, hỏi thăm, chép bài giúp bạn hoặc động viên tinh thần.'
          }
        ]
      },
      {
        id: 'dd4_b_th1',
        lessonNumber: 3,
        title: 'Thực hành kĩ năng giữa học kỳ I',
        topic: 'Chủ đề 2: Cảm thông, giúp đỡ người gặp khó khăn',
        semester: 1,
        week: 9,
        duration: '1 tiết',
        coreKnowledge: 'Thực hành vận dụng các kĩ năng biết ơn người lao động và sẻ chia với người khó khăn qua xử lý tình huống thực tế.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Trong giờ ra chơi, em thấy bạn cùng lớp bị ngã trầy xước chân, hành động đúng nhất là:',
            options: [
              'Chạy lại đỡ bạn dậy, hỏi thăm và đưa bạn vào phòng y tế',
              'Đứng cười to trêu bạn',
              'Bỏ đi chơi chỗ khác coi như không thấy',
              'Trách móc bạn không cẩn thận'
            ],
            answer: 0,
            explanation: 'Kịp thời giúp đỡ bạn khi gặp nạn là hành vi chuẩn mực.'
          }
        ]
      },
      {
        id: 'dd4_b3',
        lessonNumber: 4,
        title: 'Bài 3: Yêu lao động',
        topic: 'Chủ đề 3: Yêu lao động',
        semester: 1,
        week: 10,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu được giá trị của lao động; tích cực tham gia các công việc tự phục vụ bản thân, việc nhà, việc trường lớp vừa sức.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Biểu hiện nào sau đây thể hiện tinh thần yêu lao động?',
            options: [
              'Tự giác gấp chăn màn, dọn dẹp bàn học gọn gàng',
              'Đùn đẩy việc trực nhật lớp cho bạn khác',
              'Chỉ làm việc nhà khi bố mẹ cho tiền',
              'Lười biếng, ỷ lại vào người lớn'
            ],
            answer: 0,
            explanation: 'Tự giác làm công việc vừa sức thể hiện đức tính yêu lao động.'
          }
        ]
      },
      {
        id: 'dd4_b4',
        lessonNumber: 5,
        title: 'Bài 4: Tôn trọng tài sản của người khác',
        topic: 'Chủ đề 4: Tôn trọng tài sản của người khác',
        semester: 1,
        week: 14,
        duration: '3 tiết',
        coreKnowledge: 'Nhận biết tài sản riêng của người khác; biết hỏi mượn khi cần và giữ gìn cẩn thận, hoàn trả nguyên vẹn sau khi sử dụng.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi muốn sử dụng hộp bút màu của bạn, em nên làm gì?',
            options: [
              'Hỏi mượn lịch sự và chỉ dùng khi bạn đồng ý',
              'Tự ý lấy dùng không cần hỏi',
              'Lấy trộm giấu vào cặp của mình',
              'Làm gãy bút rồi trả lại không xin lỗi'
            ],
            answer: 0,
            explanation: 'Cần xin phép chủ sở hữu trước khi mượn tài sản.'
          }
        ]
      },
      {
        id: 'dd4_b_th2',
        lessonNumber: 6,
        title: 'Thực hành kĩ năng cuối học kỳ I',
        topic: 'Chủ đề 4: Tôn trọng tài sản của người khác',
        semester: 1,
        week: 17,
        duration: '1 tiết',
        coreKnowledge: 'Tổng kết và thực hành đánh giá các chuẩn mực đạo đức đã học trong Học kì I.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Nhặt được chiếc ví của ai đó đánh rơi ở sân trường, em nên làm gì?',
            options: [
              'Mang nộp ngay cho thầy cô Tổng phụ trách hoặc Ban giám hiệu để trả lại người mất',
              'Lấy tiền bên trong rồi vứt ví đi',
              'Giấu kín mang về nhà',
              'Cho bạn khác để lấy lòng'
            ],
            answer: 0,
            explanation: 'Nhặt được của rơi trả người đánh mất là hành vi trung thực và tôn trọng tài sản người khác.'
          }
        ]
      },
      {
        id: 'dd4_b5',
        lessonNumber: 7,
        title: 'Bài 5: Bảo vệ của công',
        topic: 'Chủ đề 5: Bảo vệ của công',
        semester: 2,
        week: 18,
        duration: '3 tiết',
        coreKnowledge: 'Ý thức giữ gìn, bảo vệ tài sản chung ở trường học và nơi công cộng; không vẽ bậy, làm hư hại của công.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành động nào sau đây là bảo vệ của công?',
            options: [
              'Tắt quạt và điện phòng học khi ra về',
              'Dùng bút xóa vẽ bậy lên bàn ghế lớp học',
              'Bẻ cành cây, giẫm lên bồn hoa công viên',
              'Làm hỏng xích đu ở sân chơi tập thể'
            ],
            answer: 0,
            explanation: 'Tiết kiệm điện và giữ gìn thiết bị trường học là bảo vệ tài sản chung.'
          }
        ]
      },
      {
        id: 'dd4_b6',
        lessonNumber: 8,
        title: 'Bài 6: Thiết lập quan hệ bạn bè',
        topic: 'Chủ đề 6: Thiết lập và duy trì quan hệ bạn bè',
        semester: 2,
        week: 21,
        duration: '2 tiết',
        coreKnowledge: 'Biết cách làm quen, cởi mở, thân thiện để kết bạn mới và hòa nhập với tập thể.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Để làm quen với một bạn mới chuyển đến lớp, em nên cư xử như thế nào?',
            options: [
              'Chủ động mỉm cười chào hỏi và rủ bạn cùng chơi',
              'Xa lánh, không nói chuyện với bạn mới',
              'Lập nhóm cô lập bạn',
              'Nói xấu bạn với các bạn khác'
            ],
            answer: 0,
            explanation: 'Cởi mở, thân thiện giúp nhanh chóng thiết lập tình bạn tốt đẹp.'
          }
        ]
      },
      {
        id: 'dd4_b7',
        lessonNumber: 9,
        title: 'Bài 7: Duy trì quan hệ bạn bè',
        topic: 'Chủ đề 6: Thiết lập và duy trì quan hệ bạn bè',
        semester: 2,
        week: 23,
        duration: '3 tiết',
        coreKnowledge: 'Biết lắng nghe, tôn trọng sự khác biệt, chân thành và cùng nhau tiến bộ để giữ gìn tình bạn lâu bền.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi bạn thân đạt thành tích cao trong học tập, em nên thể hiện thái độ gì?',
            options: [
              'Chúc mừng và chia vui thật lòng cùng bạn',
              'Ghen tị và nói xấu bạn',
              'Tỏ vẻ khó chịu và giận bạn',
              'Không thèm nhìn mặt bạn'
            ],
            answer: 0,
            explanation: 'Chân thành chúc mừng bạn là cách duy trì và vun đắp tình bạn.'
          }
        ]
      },
      {
        id: 'dd4_b_th3',
        lessonNumber: 10,
        title: 'Thực hành kĩ năng giữa học kỳ II',
        topic: 'Chủ đề 6: Thiết lập và duy trì quan hệ bạn bè',
        semester: 2,
        week: 26,
        duration: '1 tiết',
        coreKnowledge: 'Rèn luyện kĩ năng giao tiếp, ứng xử văn minh và giải quyết bất hòa trong tình bạn.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Khi em và bạn có hiểu lầm dẫn đến cãi cọ, cách giải quyết tốt nhất là:',
            options: [
              'Bình tĩnh ngồi lại nói chuyện rõ ràng để thấu hiểu nhau',
              'Đánh nhau để phân thắng bại',
              'Lên mạng xã hội bêu xấu bạn',
              'Nghỉ chơi mãi mãi'
            ],
            answer: 0,
            explanation: 'Đối thoại bình tĩnh, hòa giải là cách ứng xử văn minh.'
          }
        ]
      },
      {
        id: 'dd4_b8',
        lessonNumber: 11,
        title: 'Bài 8: Quý trọng đồng tiền',
        topic: 'Chủ đề 7: Quý trọng đồng tiền',
        semester: 2,
        week: 27,
        duration: '4 tiết',
        coreKnowledge: 'Hiểu được công sức bố mẹ làm ra đồng tiền; biết tiết kiệm, chi tiêu hợp lý và không lãng phí.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Hành vi nào thể hiện việc biết quý trọng đồng tiền?',
            options: [
              'Giữ gìn đồ dùng học tập cẩn thận để dùng được lâu bền',
              'Đòi bố mẹ mua đồ chơi đắt tiền liên tục',
              'Làm rơi tiền xu lung tung không nhặt',
              'Mua đồ ăn vặt bỏ dở gây lãng phí'
            ],
            answer: 0,
            explanation: 'Bảo quản đồ dùng học tập giúp tiết kiệm chi phí cho gia đình.'
          }
        ]
      },
      {
        id: 'dd4_b9',
        lessonNumber: 12,
        title: 'Bài 9: Quyền và bổn phận của trẻ em',
        topic: 'Chủ đề 8: Quyền và bổn phận của trẻ em',
        semester: 2,
        week: 31,
        duration: '4 tiết',
        coreKnowledge: 'Nắm được các quyền cơ bản của trẻ em (được học tập, vui chơi, chăm sóc sức khỏe...) đồng thời thực hiện tốt bổn phận đối với gia đình, nhà trường và xã hội.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Bổn phận quan trọng nhất của học sinh lớp 4 đối với cha mẹ là:',
            options: [
              'Kính trọng, lễ phép, vâng lời và phụ giúp cha mẹ việc nhà',
              'Chỉ chơi điện tử, không cần quan tâm đến bố mẹ',
              'Bắt cha mẹ phục vụ mọi nhu cầu cá nhân',
              'Cãi lời cha mẹ khi không vừa ý'
            ],
            answer: 0,
            explanation: 'Hiếu thảo, lễ phép và biết giúp đỡ gia đình là bổn phận hàng đầu của con cái.'
          }
        ]
      },
      {
        id: 'dd4_b_th4',
        lessonNumber: 13,
        title: 'Thực hành kĩ năng cuối học kỳ II',
        topic: 'Chủ đề 8: Quyền và bổn phận của trẻ em',
        semester: 2,
        week: 35,
        duration: '1 tiết',
        coreKnowledge: 'Tổng kết đánh giá rèn luyện đạo đức cả năm học và lập kế hoạch rèn luyện trong dịp hè.',
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            question: 'Trong dịp nghỉ hè, em nên làm gì để rèn luyện bản thân?',
            options: [
              'Lên kế hoạch đọc sách, tập thể dục và giúp đỡ gia đình',
              'Thức khuya chơi game suốt ngày đêm',
              'Đi bơi ở sông suối sâu một mình không có người lớn',
              'Không làm bất cứ việc gì'
            ],
            answer: 0,
            explanation: 'Nghỉ hè an toàn, bổ ích và lành mạnh.'
          }
        ]
      }
    ]
  };

  if (typeof window !== 'undefined') {
    window.DAO_DUC_4_DATA = DAO_DUC_4_DATA;
    if (window.SGK_REGISTRY && typeof window.SGK_REGISTRY.registerBook === 'function') {
      window.SGK_REGISTRY.registerBook(4, 'dao_duc', DAO_DUC_4_DATA);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DAO_DUC_4_DATA;
  }
})(typeof window !== 'undefined' ? window : this);
