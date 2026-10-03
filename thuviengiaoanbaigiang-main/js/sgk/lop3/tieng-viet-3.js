/**
 * SỐ HÓA SÁCH GIÁO KHOA TIẾNG VIỆT LỚP 3
 * Bộ sách: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Nhà xuất bản: NXB Giáo dục Việt Nam
 * Chương trình Giáo dục phổ thông 2018
 */

(function(global) {
  'use strict';

  const TIENG_VIET_3_DATA = {
    metadata: {
      grade: 3,
      subjectId: 'tieng_viet',
      subjectName: 'Tiếng Việt',
      bookName: 'Tiếng Việt 3 - Kết nối tri thức với cuộc sống',
      publisher: 'Nhà xuất bản Giáo dục Việt Nam',
      totalWeeks: 35,
      totalPeriods: 245,
      volumes: [
        { volume: 1, name: 'Tập 1 (Học kì I - Tuần 1 đến 18)', weeks: '1-18' },
        { volume: 2, name: 'Tập 2 (Học kì II - Tuần 19 đến 35)', weeks: '19-35' }
      ]
    },
    topics: [
      { id: 'tv3_cd1', name: 'Chủ điểm 1: Những trải nghiệm thú vị', semester: 1, weeks: '1-4', volume: 1 },
      { id: 'tv3_cd2', name: 'Chủ điểm 2: Cổng trường rộng mở', semester: 1, weeks: '5-8', volume: 1 },
      { id: 'tv3_cd3', name: 'Ôn tập & Đánh giá giữa Học kì 1', semester: 1, weeks: '9-10', volume: 1 },
      { id: 'tv3_cd4', name: 'Chủ điểm 3: Mái ấm gia đình', semester: 1, weeks: '11-14', volume: 1 },
      { id: 'tv3_cd5', name: 'Chủ điểm 4: Cộng đồng gắn bó', semester: 1, weeks: '15-17', volume: 1 },
      { id: 'tv3_cd6', name: 'Ôn tập & Đánh giá cuối Học kì 1', semester: 1, weeks: '18', volume: 1 },
      { id: 'tv3_cd7', name: 'Chủ điểm 5: Sắc màu quê hương', semester: 2, weeks: '19-22', volume: 2 },
      { id: 'tv3_cd8', name: 'Chủ điểm 6: Nghệ thuật diệu kì', semester: 2, weeks: '23-26', volume: 2 },
      { id: 'tv3_cd9', name: 'Ôn tập & Đánh giá giữa Học kì 2', semester: 2, weeks: '27-28', volume: 2 },
      { id: 'tv3_cd10', name: 'Chủ điểm 7: Ngôi nhà chung', semester: 2, weeks: '29-31', volume: 2 },
      { id: 'tv3_cd11', name: 'Chủ điểm 8: Bầu trời và mặt đất', semester: 2, weeks: '32-34', volume: 2 },
      { id: 'tv3_cd12', name: 'Ôn tập & Đánh giá cuối năm học', semester: 2, weeks: '35', volume: 2 }
    ],
    lessons: [
      {
        id: 'tv3_b1',
        lessonNumber: 1,
        title: 'BÀI 1: NGÀY GẶP LẠI',
        topic: 'CHỦ ĐỀ 1: NHỮNG TRẢI NGHIỆM THÚ VỊ',
        volume: 1,
        semester: 1,
        week: 1,
        reading: {
          title: 'BÀI 1: NGÀY GẶP LẠI',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 1: NGÀY GẶP LẠI.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 1: NGÀY GẶP LẠI" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 1: NGÀY GẶP LẠI", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b2',
        lessonNumber: 2,
        title: 'BÀI 2: VỀ THĂM QUÊ',
        topic: 'CHỦ ĐỀ 1: NHỮNG TRẢI NGHIỆM THÚ VỊ',
        volume: 1,
        semester: 1,
        week: 1,
        reading: {
          title: 'BÀI 2: VỀ THĂM QUÊ',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 2: VỀ THĂM QUÊ.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 2: VỀ THĂM QUÊ" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 2: VỀ THĂM QUÊ", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b3',
        lessonNumber: 3,
        title: 'BÀI 3: CÁNH RỪNG TRONG NẮNG',
        topic: 'CHỦ ĐỀ 1: NHỮNG TRẢI NGHIỆM THÚ VỊ',
        volume: 1,
        semester: 1,
        week: 2,
        reading: {
          title: 'BÀI 3: CÁNH RỪNG TRONG NẮNG',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 3: CÁNH RỪNG TRONG NẮNG.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 3: CÁNH RỪNG TRONG NẮNG" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 3: CÁNH RỪNG TRONG NẮNG", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b4',
        lessonNumber: 4,
        title: 'BÀI 4: LẦN ĐẦU RA BIỂN',
        topic: 'CHỦ ĐỀ 1: NHỮNG TRẢI NGHIỆM THÚ VỊ',
        volume: 1,
        semester: 1,
        week: 2,
        reading: {
          title: 'BÀI 4: LẦN ĐẦU RA BIỂN',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 4: LẦN ĐẦU RA BIỂN.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 4: LẦN ĐẦU RA BIỂN" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 4: LẦN ĐẦU RA BIỂN", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b5',
        lessonNumber: 5,
        title: 'BÀI 5: NHẬT KÍ TẬP BƠI',
        topic: 'CHỦ ĐỀ 1: NHỮNG TRẢI NGHIỆM THÚ VỊ',
        volume: 1,
        semester: 1,
        week: 3,
        reading: {
          title: 'BÀI 5: NHẬT KÍ TẬP BƠI',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 5: NHẬT KÍ TẬP BƠI.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 5: NHẬT KÍ TẬP BƠI" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 5: NHẬT KÍ TẬP BƠI", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b6',
        lessonNumber: 6,
        title: 'BÀI 6: TẬP NẤU ĂN',
        topic: 'CHỦ ĐỀ 1: NHỮNG TRẢI NGHIỆM THÚ VỊ',
        volume: 1,
        semester: 1,
        week: 3,
        reading: {
          title: 'BÀI 6: TẬP NẤU ĂN',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 6: TẬP NẤU ĂN.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 6: TẬP NẤU ĂN" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 6: TẬP NẤU ĂN", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b7',
        lessonNumber: 7,
        title: 'BÀI 7: MÙA HÈ LẤP LÁNH',
        topic: 'CHỦ ĐỀ 1: NHỮNG TRẢI NGHIỆM THÚ VỊ',
        volume: 1,
        semester: 1,
        week: 4,
        reading: {
          title: 'BÀI 7: MÙA HÈ LẤP LÁNH',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 7: MÙA HÈ LẤP LÁNH.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 7: MÙA HÈ LẤP LÁNH" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 7: MÙA HÈ LẤP LÁNH", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b8',
        lessonNumber: 8,
        title: 'BÀI 8: TẠM BIỆT MÙA HÈ',
        topic: 'CHỦ ĐỀ 1: NHỮNG TRẢI NGHIỆM THÚ VỊ',
        volume: 1,
        semester: 1,
        week: 4,
        reading: {
          title: 'BÀI 8: TẠM BIỆT MÙA HÈ',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 8: TẠM BIỆT MÙA HÈ.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 8: TẠM BIỆT MÙA HÈ" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 8: TẠM BIỆT MÙA HÈ", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b9',
        lessonNumber: 9,
        title: 'BÀI 9: ĐI HỌC VUI SAO',
        topic: 'CHỦ ĐỀ 2: CỔNG TRƯỜNG RỘNG MỞ',
        volume: 1,
        semester: 1,
        week: 5,
        reading: {
          title: 'BÀI 9: ĐI HỌC VUI SAO',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 9: ĐI HỌC VUI SAO.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 9: ĐI HỌC VUI SAO" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 9: ĐI HỌC VUI SAO", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b10',
        lessonNumber: 10,
        title: 'BÀI 10: CON ĐƯỜNG ĐẾN TRƯỜNG',
        topic: 'CHỦ ĐỀ 2: CỔNG TRƯỜNG RỘNG MỞ',
        volume: 1,
        semester: 1,
        week: 5,
        reading: {
          title: 'BÀI 10: CON ĐƯỜNG ĐẾN TRƯỜNG',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 10: CON ĐƯỜNG ĐẾN TRƯỜNG.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 10: CON ĐƯỜNG ĐẾN TRƯỜNG" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 10: CON ĐƯỜNG ĐẾN TRƯỜNG", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b11',
        lessonNumber: 11,
        title: 'BÀI 11: LỜI GIẢI TOÁN ĐẶC BIỆT',
        topic: 'CHỦ ĐỀ 2: CỔNG TRƯỜNG RỘNG MỞ',
        volume: 1,
        semester: 1,
        week: 6,
        reading: {
          title: 'BÀI 11: LỜI GIẢI TOÁN ĐẶC BIỆT',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 11: LỜI GIẢI TOÁN ĐẶC BIỆT.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 11: LỜI GIẢI TOÁN ĐẶC BIỆT" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 11: LỜI GIẢI TOÁN ĐẶC BIỆT", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b12',
        lessonNumber: 12,
        title: 'BÀI 12: BÀI TẬP LÀM VĂN',
        topic: 'CHỦ ĐỀ 2: CỔNG TRƯỜNG RỘNG MỞ',
        volume: 1,
        semester: 1,
        week: 6,
        reading: {
          title: 'BÀI 12: BÀI TẬP LÀM VĂN',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 12: BÀI TẬP LÀM VĂN.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 12: BÀI TẬP LÀM VĂN" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 12: BÀI TẬP LÀM VĂN", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b13',
        lessonNumber: 13,
        title: '- Đọc: Bài tập làm văn - Đọc mở rộng',
        topic: 'CHỦ ĐỀ 2: CỔNG TRƯỜNG RỘNG MỞ',
        volume: 1,
        semester: 1,
        week: 6,
        reading: {
          title: '- Đọc: Bài tập làm văn - Đọc mở rộng',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài - Đọc: Bài tập làm văn - Đọc mở rộng.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "- Đọc: Bài tập làm văn - Đọc mở rộng" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "- Đọc: Bài tập làm văn - Đọc mở rộng", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b14',
        lessonNumber: 14,
        title: 'BÀI 13: BÀN TAY CÔ GIÁO',
        topic: 'CHỦ ĐỀ 2: CỔNG TRƯỜNG RỘNG MỞ',
        volume: 1,
        semester: 1,
        week: 7,
        reading: {
          title: 'BÀI 13: BÀN TAY CÔ GIÁO',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 13: BÀN TAY CÔ GIÁO.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 13: BÀN TAY CÔ GIÁO" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 13: BÀN TAY CÔ GIÁO", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b15',
        lessonNumber: 15,
        title: 'BÀI 14: CUỘC HỌP CỦA CHỮ VIẾT',
        topic: 'CHỦ ĐỀ 2: CỔNG TRƯỜNG RỘNG MỞ',
        volume: 1,
        semester: 1,
        week: 7,
        reading: {
          title: 'BÀI 14: CUỘC HỌP CỦA CHỮ VIẾT',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 14: CUỘC HỌP CỦA CHỮ VIẾT.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 14: CUỘC HỌP CỦA CHỮ VIẾT" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 14: CUỘC HỌP CỦA CHỮ VIẾT", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b16',
        lessonNumber: 16,
        title: 'BÀI 15: THƯ VIỆN',
        topic: 'CHỦ ĐỀ 2: CỔNG TRƯỜNG RỘNG MỞ',
        volume: 1,
        semester: 1,
        week: 8,
        reading: {
          title: 'BÀI 15: THƯ VIỆN',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 15: THƯ VIỆN.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 15: THƯ VIỆN" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 15: THƯ VIỆN", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b17',
        lessonNumber: 17,
        title: 'BÀI 16: NGÀY EM VÀO ĐỘI',
        topic: 'CHỦ ĐỀ 2: CỔNG TRƯỜNG RỘNG MỞ',
        volume: 1,
        semester: 1,
        week: 8,
        reading: {
          title: 'BÀI 16: NGÀY EM VÀO ĐỘI',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 16: NGÀY EM VÀO ĐỘI.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 16: NGÀY EM VÀO ĐỘI" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 16: NGÀY EM VÀO ĐỘI", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b18',
        lessonNumber: 18,
        title: 'BÀI 17: NGƯỠNG CỬA',
        topic: 'CHỦ ĐỀ 3: MÁI NHÀ YÊU THƯƠNG',
        volume: 1,
        semester: 1,
        week: 10,
        reading: {
          title: 'BÀI 17: NGƯỠNG CỬA',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 17: NGƯỠNG CỬA.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 17: NGƯỠNG CỬA" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 17: NGƯỠNG CỬA", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b19',
        lessonNumber: 19,
        title: 'BÀI 18: MÓN QUÀ ĐẶC BIỆT',
        topic: 'CHỦ ĐỀ 3: MÁI NHÀ YÊU THƯƠNG',
        volume: 1,
        semester: 1,
        week: 10,
        reading: {
          title: 'BÀI 18: MÓN QUÀ ĐẶC BIỆT',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 18: MÓN QUÀ ĐẶC BIỆT.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 18: MÓN QUÀ ĐẶC BIỆT" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 18: MÓN QUÀ ĐẶC BIỆT", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b20',
        lessonNumber: 20,
        title: 'BÀI 19: KHI CẢ NHÀ BÉ TÍ',
        topic: 'CHỦ ĐỀ 3: MÁI NHÀ YÊU THƯƠNG',
        volume: 1,
        semester: 1,
        week: 11,
        reading: {
          title: 'BÀI 19: KHI CẢ NHÀ BÉ TÍ',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 19: KHI CẢ NHÀ BÉ TÍ.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 19: KHI CẢ NHÀ BÉ TÍ" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 19: KHI CẢ NHÀ BÉ TÍ", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b21',
        lessonNumber: 21,
        title: 'BÀI 20: TRÒ CHUYỆN CÙNG MẸ',
        topic: 'CHỦ ĐỀ 3: MÁI NHÀ YÊU THƯƠNG',
        volume: 1,
        semester: 1,
        week: 11,
        reading: {
          title: 'BÀI 20: TRÒ CHUYỆN CÙNG MẸ',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 20: TRÒ CHUYỆN CÙNG MẸ.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 20: TRÒ CHUYỆN CÙNG MẸ" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 20: TRÒ CHUYỆN CÙNG MẸ", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b22',
        lessonNumber: 22,
        title: 'BÀI 21: TIA NẮNG BÉ NHỎ',
        topic: 'CHỦ ĐỀ 3: MÁI NHÀ YÊU THƯƠNG',
        volume: 1,
        semester: 1,
        week: 12,
        reading: {
          title: 'BÀI 21: TIA NẮNG BÉ NHỎ',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 21: TIA NẮNG BÉ NHỎ.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 21: TIA NẮNG BÉ NHỎ" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 21: TIA NẮNG BÉ NHỎ", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b23',
        lessonNumber: 23,
        title: 'BÀI 22: ĐỂ CHÁU NẮM TAY ÔNG',
        topic: 'CHỦ ĐỀ 3: MÁI NHÀ YÊU THƯƠNG',
        volume: 1,
        semester: 1,
        week: 12,
        reading: {
          title: 'BÀI 22: ĐỂ CHÁU NẮM TAY ÔNG',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 22: ĐỂ CHÁU NẮM TAY ÔNG.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 22: ĐỂ CHÁU NẮM TAY ÔNG" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 22: ĐỂ CHÁU NẮM TAY ÔNG", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b24',
        lessonNumber: 24,
        title: 'BÀI 23: TÔI YÊU EM TÔI',
        topic: 'CHỦ ĐỀ 3: MÁI NHÀ YÊU THƯƠNG',
        volume: 1,
        semester: 1,
        week: 13,
        reading: {
          title: 'BÀI 23: TÔI YÊU EM TÔI',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 23: TÔI YÊU EM TÔI.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 23: TÔI YÊU EM TÔI" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 23: TÔI YÊU EM TÔI", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b25',
        lessonNumber: 25,
        title: 'BÀI 24: BẠN NHỎ TRONG NHÀ',
        topic: 'CHỦ ĐỀ 3: MÁI NHÀ YÊU THƯƠNG',
        volume: 1,
        semester: 1,
        week: 13,
        reading: {
          title: 'BÀI 24: BẠN NHỎ TRONG NHÀ',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 24: BẠN NHỎ TRONG NHÀ.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 24: BẠN NHỎ TRONG NHÀ" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 24: BẠN NHỎ TRONG NHÀ", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b26',
        lessonNumber: 26,
        title: 'BÀI 25: NHỮNG BẬC ĐÁ CHẠM MÂY',
        topic: 'CHỦ ĐỀ 4: CỘNG ĐỒNG GẮN BÓ',
        volume: 1,
        semester: 1,
        week: 14,
        reading: {
          title: 'BÀI 25: NHỮNG BẬC ĐÁ CHẠM MÂY',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 25: NHỮNG BẬC ĐÁ CHẠM MÂY.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 25: NHỮNG BẬC ĐÁ CHẠM MÂY" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 25: NHỮNG BẬC ĐÁ CHẠM MÂY", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b27',
        lessonNumber: 27,
        title: 'BÀI 26: ĐI TÌM MẶT TRỜI',
        topic: 'CHỦ ĐỀ 4: CỘNG ĐỒNG GẮN BÓ',
        volume: 1,
        semester: 1,
        week: 14,
        reading: {
          title: 'BÀI 26: ĐI TÌM MẶT TRỜI',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 26: ĐI TÌM MẶT TRỜI.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 26: ĐI TÌM MẶT TRỜI" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 26: ĐI TÌM MẶT TRỜI", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b28',
        lessonNumber: 28,
        title: 'BÀI 27: NHỮNG CHIẾC ÁO ẤM',
        topic: 'CHỦ ĐỀ 4: CỘNG ĐỒNG GẮN BÓ',
        volume: 1,
        semester: 1,
        week: 15,
        reading: {
          title: 'BÀI 27: NHỮNG CHIẾC ÁO ẤM',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 27: NHỮNG CHIẾC ÁO ẤM.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 27: NHỮNG CHIẾC ÁO ẤM" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 27: NHỮNG CHIẾC ÁO ẤM", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b29',
        lessonNumber: 29,
        title: 'BÀI 28: CON ĐƯỜNG CỦA BÉ',
        topic: 'CHỦ ĐỀ 4: CỘNG ĐỒNG GẮN BÓ',
        volume: 1,
        semester: 1,
        week: 15,
        reading: {
          title: 'BÀI 28: CON ĐƯỜNG CỦA BÉ',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 28: CON ĐƯỜNG CỦA BÉ.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 28: CON ĐƯỜNG CỦA BÉ" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 28: CON ĐƯỜNG CỦA BÉ", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b30',
        lessonNumber: 30,
        title: 'BÀI 29: NGÔI NHÀ TRONG CỎ',
        topic: 'CHỦ ĐỀ 4: CỘNG ĐỒNG GẮN BÓ',
        volume: 1,
        semester: 1,
        week: 16,
        reading: {
          title: 'BÀI 29: NGÔI NHÀ TRONG CỎ',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 29: NGÔI NHÀ TRONG CỎ.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 29: NGÔI NHÀ TRONG CỎ" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 29: NGÔI NHÀ TRONG CỎ", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b31',
        lessonNumber: 31,
        title: 'BÀI 30: NHỮNG NGỌN HẢI ĐĂNG',
        topic: 'CHỦ ĐỀ 4: CỘNG ĐỒNG GẮN BÓ',
        volume: 1,
        semester: 1,
        week: 16,
        reading: {
          title: 'BÀI 30: NHỮNG NGỌN HẢI ĐĂNG',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 30: NHỮNG NGỌN HẢI ĐĂNG.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 30: NHỮNG NGỌN HẢI ĐĂNG" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 30: NHỮNG NGỌN HẢI ĐĂNG", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b32',
        lessonNumber: 32,
        title: 'BÀI 31: NGƯỜI LÀM ĐỒ CHƠI',
        topic: 'CHỦ ĐỀ 4: CỘNG ĐỒNG GẮN BÓ',
        volume: 1,
        semester: 1,
        week: 17,
        reading: {
          title: 'BÀI 31: NGƯỜI LÀM ĐỒ CHƠI',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 31: NGƯỜI LÀM ĐỒ CHƠI.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 31: NGƯỜI LÀM ĐỒ CHƠI" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 31: NGƯỜI LÀM ĐỒ CHƠI", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b33',
        lessonNumber: 33,
        title: 'BÀI 32: CÂY BÚT THẦN',
        topic: 'CHỦ ĐỀ 4: CỘNG ĐỒNG GẮN BÓ',
        volume: 1,
        semester: 1,
        week: 17,
        reading: {
          title: 'BÀI 32: CÂY BÚT THẦN',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 32: CÂY BÚT THẦN.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 32: CÂY BÚT THẦN" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 32: CÂY BÚT THẦN", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b34',
        lessonNumber: 34,
        title: 'BÀI 1: BẦU TRỜI',
        topic: 'CHỦ ĐỀ 1: NHỮNG SẮC MÀU THIÊN NHIÊN',
        volume: 2,
        semester: 2,
        week: 19,
        reading: {
          title: 'BÀI 1: BẦU TRỜI',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 1: BẦU TRỜI.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 1: BẦU TRỜI" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 1: BẦU TRỜI", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b35',
        lessonNumber: 35,
        title: 'BÀI 2: MƯA',
        topic: 'CHỦ ĐỀ 1: NHỮNG SẮC MÀU THIÊN NHIÊN',
        volume: 2,
        semester: 2,
        week: 19,
        reading: {
          title: 'BÀI 2: MƯA',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 2: MƯA.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 2: MƯA" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 2: MƯA", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b36',
        lessonNumber: 36,
        title: 'BÀI 3: CÓC KIỆN TRỜI',
        topic: 'CHỦ ĐỀ 1: NHỮNG SẮC MÀU THIÊN NHIÊN',
        volume: 2,
        semester: 2,
        week: 20,
        reading: {
          title: 'BÀI 3: CÓC KIỆN TRỜI',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 3: CÓC KIỆN TRỜI.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 3: CÓC KIỆN TRỜI" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 3: CÓC KIỆN TRỜI", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b37',
        lessonNumber: 37,
        title: 'BÀI 4: NHỮNG CÁI TÊN ĐÁNG YÊU',
        topic: 'CHỦ ĐỀ 1: NHỮNG SẮC MÀU THIÊN NHIÊN',
        volume: 2,
        semester: 2,
        week: 20,
        reading: {
          title: 'BÀI 4: NHỮNG CÁI TÊN ĐÁNG YÊU',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 4: NHỮNG CÁI TÊN ĐÁNG YÊU.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 4: NHỮNG CÁI TÊN ĐÁNG YÊU" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 4: NHỮNG CÁI TÊN ĐÁNG YÊU", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b38',
        lessonNumber: 38,
        title: 'BÀI 5: NGÀY HỘI RỪNG XANH',
        topic: 'CHỦ ĐỀ 1: NHỮNG SẮC MÀU THIÊN NHIÊN',
        volume: 2,
        semester: 2,
        week: 21,
        reading: {
          title: 'BÀI 5: NGÀY HỘI RỪNG XANH',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 5: NGÀY HỘI RỪNG XANH.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 5: NGÀY HỘI RỪNG XANH" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 5: NGÀY HỘI RỪNG XANH", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b39',
        lessonNumber: 39,
        title: 'BÀI 6: CÂY GẠO',
        topic: 'CHỦ ĐỀ 1: NHỮNG SẮC MÀU THIÊN NHIÊN',
        volume: 2,
        semester: 2,
        week: 21,
        reading: {
          title: 'BÀI 6: CÂY GẠO',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 6: CÂY GẠO.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 6: CÂY GẠO" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 6: CÂY GẠO", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b40',
        lessonNumber: 40,
        title: 'BÀI 7: MẶT TRỜI XANH CỦA TÔI',
        topic: 'CHỦ ĐỀ 1: NHỮNG SẮC MÀU THIÊN NHIÊN',
        volume: 2,
        semester: 2,
        week: 22,
        reading: {
          title: 'BÀI 7: MẶT TRỜI XANH CỦA TÔI',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 7: MẶT TRỜI XANH CỦA TÔI.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 7: MẶT TRỜI XANH CỦA TÔI" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 7: MẶT TRỜI XANH CỦA TÔI", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b41',
        lessonNumber: 41,
        title: 'BÀI 8: BẦY VOI RỪNG TRƯỜNG SƠN',
        topic: 'CHỦ ĐỀ 1: NHỮNG SẮC MÀU THIÊN NHIÊN',
        volume: 2,
        semester: 2,
        week: 22,
        reading: {
          title: 'BÀI 8: BẦY VOI RỪNG TRƯỜNG SƠN',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 8: BẦY VOI RỪNG TRƯỜNG SƠN.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 8: BẦY VOI RỪNG TRƯỜNG SƠN" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 8: BẦY VOI RỪNG TRƯỜNG SƠN", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b42',
        lessonNumber: 42,
        title: 'BÀI 9: LỜI KÊU GỌI TOÀN DÂN TẬP THỂ DỤC',
        topic: 'CHỦ ĐỀ 2: BÀI HỌC TỪ CUỘC SỐNG',
        volume: 2,
        semester: 2,
        week: 23,
        reading: {
          title: 'BÀI 9: LỜI KÊU GỌI TOÀN DÂN TẬP THỂ DỤC',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 9: LỜI KÊU GỌI TOÀN DÂN TẬP THỂ DỤC.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 9: LỜI KÊU GỌI TOÀN DÂN TẬP THỂ DỤC" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 9: LỜI KÊU GỌI TOÀN DÂN TẬP THỂ DỤC", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b43',
        lessonNumber: 43,
        title: 'BÀI 10: QUẢ HỒNG CỦA THỎ CON',
        topic: 'CHỦ ĐỀ 2: BÀI HỌC TỪ CUỘC SỐNG',
        volume: 2,
        semester: 2,
        week: 23,
        reading: {
          title: 'BÀI 10: QUẢ HỒNG CỦA THỎ CON',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 10: QUẢ HỒNG CỦA THỎ CON.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 10: QUẢ HỒNG CỦA THỎ CON" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 10: QUẢ HỒNG CỦA THỎ CON", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b44',
        lessonNumber: 44,
        title: 'BÀI 11: CHUYỆN BÊN CỬA SỔ',
        topic: 'CHỦ ĐỀ 2: BÀI HỌC TỪ CUỘC SỐNG',
        volume: 2,
        semester: 2,
        week: 24,
        reading: {
          title: 'BÀI 11: CHUYỆN BÊN CỬA SỔ',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 11: CHUYỆN BÊN CỬA SỔ.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 11: CHUYỆN BÊN CỬA SỔ" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 11: CHUYỆN BÊN CỬA SỔ", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b45',
        lessonNumber: 45,
        title: 'BÀI 12: TAY TRÁI VÀ TAY PHẢI',
        topic: 'CHỦ ĐỀ 2: BÀI HỌC TỪ CUỘC SỐNG',
        volume: 2,
        semester: 2,
        week: 24,
        reading: {
          title: 'BÀI 12: TAY TRÁI VÀ TAY PHẢI',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 12: TAY TRÁI VÀ TAY PHẢI.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 12: TAY TRÁI VÀ TAY PHẢI" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 12: TAY TRÁI VÀ TAY PHẢI", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b46',
        lessonNumber: 46,
        title: 'BÀI 13: MÈO ĐI CÂU CÁ',
        topic: 'CHỦ ĐỀ 2: BÀI HỌC TỪ CUỘC SỐNG',
        volume: 2,
        semester: 2,
        week: 25,
        reading: {
          title: 'BÀI 13: MÈO ĐI CÂU CÁ',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 13: MÈO ĐI CÂU CÁ.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 13: MÈO ĐI CÂU CÁ" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 13: MÈO ĐI CÂU CÁ", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b47',
        lessonNumber: 47,
        title: 'Viết: Nghe – viết: Bài học của gấu',
        topic: 'CHỦ ĐỀ 2: BÀI HỌC TỪ CUỘC SỐNG',
        volume: 2,
        semester: 2,
        week: 25,
        reading: {
          title: 'Viết: Nghe – viết: Bài học của gấu',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài Viết: Nghe – viết: Bài học của gấu.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "Viết: Nghe – viết: Bài học của gấu" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "Viết: Nghe – viết: Bài học của gấu", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b48',
        lessonNumber: 48,
        title: 'BÀI 14: HỌC NGHỀ',
        topic: 'CHỦ ĐỀ 2: BÀI HỌC TỪ CUỘC SỐNG',
        volume: 2,
        semester: 2,
        week: 25,
        reading: {
          title: 'BÀI 14: HỌC NGHỀ',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 14: HỌC NGHỀ.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 14: HỌC NGHỀ" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 14: HỌC NGHỀ", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b49',
        lessonNumber: 49,
        title: 'BÀI 15: NGÀY NHƯ THẾ NÀO LÀ ĐẸP?',
        topic: 'CHỦ ĐỀ 2: BÀI HỌC TỪ CUỘC SỐNG',
        volume: 2,
        semester: 2,
        week: 26,
        reading: {
          title: 'BÀI 15: NGÀY NHƯ THẾ NÀO LÀ ĐẸP?',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 15: NGÀY NHƯ THẾ NÀO LÀ ĐẸP?.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 15: NGÀY NHƯ THẾ NÀO LÀ ĐẸP?" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 15: NGÀY NHƯ THẾ NÀO LÀ ĐẸP?", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b50',
        lessonNumber: 50,
        title: 'BÀI 16: A LÔ, TỚ ĐÂY.',
        topic: 'CHỦ ĐỀ 2: BÀI HỌC TỪ CUỘC SỐNG',
        volume: 2,
        semester: 2,
        week: 26,
        reading: {
          title: 'BÀI 16: A LÔ, TỚ ĐÂY.',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 16: A LÔ, TỚ ĐÂY..',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 16: A LÔ, TỚ ĐÂY." là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 16: A LÔ, TỚ ĐÂY.", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b51',
        lessonNumber: 51,
        title: 'BÀI 17: ĐẤT NƯỚC LÀ GÌ?',
        topic: 'CHỦ ĐỀ 3: ĐẤT NƯỚC NGÀN NĂM',
        volume: 2,
        semester: 2,
        week: 28,
        reading: {
          title: 'BÀI 17: ĐẤT NƯỚC LÀ GÌ?',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 17: ĐẤT NƯỚC LÀ GÌ?.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 17: ĐẤT NƯỚC LÀ GÌ?" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 17: ĐẤT NƯỚC LÀ GÌ?", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b52',
        lessonNumber: 52,
        title: 'BÀI 18: NÚI QUÊ TÔI',
        topic: 'CHỦ ĐỀ 3: ĐẤT NƯỚC NGÀN NĂM',
        volume: 2,
        semester: 2,
        week: 28,
        reading: {
          title: 'BÀI 18: NÚI QUÊ TÔI',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 18: NÚI QUÊ TÔI.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 18: NÚI QUÊ TÔI" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 18: NÚI QUÊ TÔI", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b53',
        lessonNumber: 53,
        title: 'BÀI 19: SÔNG HƯƠNG',
        topic: 'CHỦ ĐỀ 3: ĐẤT NƯỚC NGÀN NĂM',
        volume: 2,
        semester: 2,
        week: 29,
        reading: {
          title: 'BÀI 19: SÔNG HƯƠNG',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 19: SÔNG HƯƠNG.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 19: SÔNG HƯƠNG" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 19: SÔNG HƯƠNG", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b54',
        lessonNumber: 54,
        title: 'BÀI 20: TIẾNG NƯỚC MÌNH',
        topic: 'CHỦ ĐỀ 3: ĐẤT NƯỚC NGÀN NĂM',
        volume: 2,
        semester: 2,
        week: 29,
        reading: {
          title: 'BÀI 20: TIẾNG NƯỚC MÌNH',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 20: TIẾNG NƯỚC MÌNH.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 20: TIẾNG NƯỚC MÌNH" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 20: TIẾNG NƯỚC MÌNH", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b55',
        lessonNumber: 55,
        title: 'BÀI 21: NHÀ RÔNG',
        topic: 'CHỦ ĐỀ 3: ĐẤT NƯỚC NGÀN NĂM',
        volume: 2,
        semester: 2,
        week: 30,
        reading: {
          title: 'BÀI 21: NHÀ RÔNG',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 21: NHÀ RÔNG.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 21: NHÀ RÔNG" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 21: NHÀ RÔNG", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b56',
        lessonNumber: 56,
        title: 'BÀI 22: SỰ TÍCH ÔNG ĐÙNG, BÀ ĐÙNG',
        topic: 'CHỦ ĐỀ 3: ĐẤT NƯỚC NGÀN NĂM',
        volume: 2,
        semester: 2,
        week: 30,
        reading: {
          title: 'BÀI 22: SỰ TÍCH ÔNG ĐÙNG, BÀ ĐÙNG',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 22: SỰ TÍCH ÔNG ĐÙNG, BÀ ĐÙNG.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 22: SỰ TÍCH ÔNG ĐÙNG, BÀ ĐÙNG" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 22: SỰ TÍCH ÔNG ĐÙNG, BÀ ĐÙNG", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b57',
        lessonNumber: 57,
        title: 'BÀI 23: HAI BÀ TRƯNG',
        topic: 'CHỦ ĐỀ 3: ĐẤT NƯỚC NGÀN NĂM',
        volume: 2,
        semester: 2,
        week: 31,
        reading: {
          title: 'BÀI 23: HAI BÀ TRƯNG',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 23: HAI BÀ TRƯNG.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 23: HAI BÀ TRƯNG" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 23: HAI BÀ TRƯNG", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b58',
        lessonNumber: 58,
        title: 'BÀI 24: CÙNG BÁC QUA SUỐI.',
        topic: 'CHỦ ĐỀ 3: ĐẤT NƯỚC NGÀN NĂM',
        volume: 2,
        semester: 2,
        week: 31,
        reading: {
          title: 'BÀI 24: CÙNG BÁC QUA SUỐI.',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 24: CÙNG BÁC QUA SUỐI..',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 24: CÙNG BÁC QUA SUỐI." là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 24: CÙNG BÁC QUA SUỐI.", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b59',
        lessonNumber: 59,
        title: 'BÀI 25: NGỌN LỬA Ô-LIM-PÍCH',
        topic: 'CHỦ ĐỀ 4: TRÁI ĐẤT CỦA CHÚNG MÌNH',
        volume: 2,
        semester: 2,
        week: 32,
        reading: {
          title: 'BÀI 25: NGỌN LỬA Ô-LIM-PÍCH',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 25: NGỌN LỬA Ô-LIM-PÍCH.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 25: NGỌN LỬA Ô-LIM-PÍCH" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 25: NGỌN LỬA Ô-LIM-PÍCH", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b60',
        lessonNumber: 60,
        title: 'BÀI 26: RÔ-BỐT Ở QUANH TA.',
        topic: 'CHỦ ĐỀ 4: TRÁI ĐẤT CỦA CHÚNG MÌNH',
        volume: 2,
        semester: 2,
        week: 32,
        reading: {
          title: 'BÀI 26: RÔ-BỐT Ở QUANH TA.',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 26: RÔ-BỐT Ở QUANH TA..',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 26: RÔ-BỐT Ở QUANH TA." là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 26: RÔ-BỐT Ở QUANH TA.", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b61',
        lessonNumber: 61,
        title: 'BÀI 27: THƯ CỦA ÔNG TRÁI ĐẤT GỬI CÁC BẠN NHỎ',
        topic: 'CHỦ ĐỀ 4: TRÁI ĐẤT CỦA CHÚNG MÌNH',
        volume: 2,
        semester: 2,
        week: 33,
        reading: {
          title: 'BÀI 27: THƯ CỦA ÔNG TRÁI ĐẤT GỬI CÁC BẠN NHỎ',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 27: THƯ CỦA ÔNG TRÁI ĐẤT GỬI CÁC BẠN NHỎ.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 27: THƯ CỦA ÔNG TRÁI ĐẤT GỬI CÁC BẠN NHỎ" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 27: THƯ CỦA ÔNG TRÁI ĐẤT GỬI CÁC BẠN NHỎ", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b62',
        lessonNumber: 62,
        title: 'BÀI 28: NHỮNG ĐIỀU NHỎ TỚ LÀM CHO TRÁI ĐẤT.',
        topic: 'CHỦ ĐỀ 4: TRÁI ĐẤT CỦA CHÚNG MÌNH',
        volume: 2,
        semester: 2,
        week: 33,
        reading: {
          title: 'BÀI 28: NHỮNG ĐIỀU NHỎ TỚ LÀM CHO TRÁI ĐẤT.',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 28: NHỮNG ĐIỀU NHỎ TỚ LÀM CHO TRÁI ĐẤT..',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 28: NHỮNG ĐIỀU NHỎ TỚ LÀM CHO TRÁI ĐẤT." là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 28: NHỮNG ĐIỀU NHỎ TỚ LÀM CHO TRÁI ĐẤT.", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b63',
        lessonNumber: 63,
        title: 'BÀI 29: BÁC SĨ Y-ÉC-XANH',
        topic: 'CHỦ ĐỀ 4: TRÁI ĐẤT CỦA CHÚNG MÌNH',
        volume: 2,
        semester: 2,
        week: 34,
        reading: {
          title: 'BÀI 29: BÁC SĨ Y-ÉC-XANH',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 29: BÁC SĨ Y-ÉC-XANH.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 29: BÁC SĨ Y-ÉC-XANH" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 29: BÁC SĨ Y-ÉC-XANH", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
      {
        id: 'tv3_b64',
        lessonNumber: 64,
        title: 'BÀI 30: MỘT MÁI NHÀ CHUNG',
        topic: 'CHỦ ĐỀ 4: TRÁI ĐẤT CỦA CHÚNG MÌNH',
        volume: 2,
        semester: 2,
        week: 34,
        reading: {
          title: 'BÀI 30: MỘT MÁI NHÀ CHUNG',
          coreContent: 'Đọc đúng, trôi chảy và diễn cảm văn bản nghệ thuật/thông tin; cảm nhận tình cảm yêu thương, vẻ đẹp quê hương gia đình trong bài BÀI 30: MỘT MÁI NHÀ CHUNG.',
          comprehensionFocus: 'Nhận biết chi tiết, thông hiểu ý nghĩa từ ngữ/hình ảnh và nêu cảm nhận bản thân.'
        },
        languagePractice: {
          topic: 'Từ ngữ theo chủ điểm, biện pháp so sánh, nhân hóa và các dấu câu',
          skills: 'Mở rộng vốn từ, đặt câu có hình ảnh so sánh, nhận biết dấu hai chấm, dấu gạch ngang, dấu ngoặc kép.'
        },
        writing: {
          topic: 'Viết đoạn văn ngắn kể lại hoạt động, nêu tình cảm cảm xúc hoặc giới thiệu đồ vật/cảnh vật',
          skills: 'Luyện tập viết đoạn văn 4-5 câu có câu mở đoạn và kết đoạn rõ ràng.'
        },
        sampleQuestions: [
          {
            type: 'TN',
            level: 1,
            section: 'doc_hieu',
            question: 'Chi tiết hoặc hình ảnh nổi bật trong bài đọc "BÀI 30: MỘT MÁI NHÀ CHUNG" là gì?',
            options: ['Chi tiết chính xác theo nội dung bài đọc SGK', 'Chi tiết sai lệch', 'Hình ảnh không xuất hiện trong bài', 'Nhân vật thuộc bài đọc khác'],
            answer: 0,
            explanation: 'Ghi nhớ chi tiết và nội dung chính của bài đọc.'
          },
          {
            type: 'TN',
            level: 2,
            section: 'ltvc',
            question: 'Trong câu văn trích từ bài học, từ ngữ nào thể hiện hình ảnh so sánh hoặc từ chỉ đặc điểm?',
            options: ['Từ ngữ gợi tả hình ảnh/đặc điểm đúng theo bài', 'Từ ngữ chưa chính xác', 'Từ ghép sai cấu tạo', 'Từ dùng sai ngữ cảnh'],
            answer: 0,
            explanation: 'Nhận biết biện pháp tu từ so sánh hoặc từ chỉ đặc điểm.'
          },
          {
            type: 'TL',
            level: 3,
            section: 'viet',
            question: 'Dựa vào bài học "BÀI 30: MỘT MÁI NHÀ CHUNG", em hãy viết đoạn văn ngắn (từ 3 đến 5 câu) thể hiện tình cảm của em đối với người thân/bạn bè hoặc cảnh vật quê hương.',
            guide: 'Viết đủ số câu quy định, câu văn tròn ý, dùng từ ngữ trong sáng, đúng chính tả.'
          }
        ]
      },
    ]
  };

  if (typeof window !== 'undefined') {
    window.SGK_TIENG_VIET_3 = TIENG_VIET_3_DATA;
    if (window.SGK_REGISTRY && typeof window.SGK_REGISTRY.registerBook === 'function') {
      window.SGK_REGISTRY.registerBook(3, 'tieng_viet', TIENG_VIET_3_DATA);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = TIENG_VIET_3_DATA;
  }
})(typeof window !== 'undefined' ? window : this);
