/**
 * SỐ HÓA SÁCH GIÁO KHOA TIẾNG VIỆT LỚP 5
 * Bộ sách: CHÂN TRỜI SÁNG TẠO (CTST)
 * Nhà xuất bản: Nhà xuất bản Giáo dục Việt Nam
 * Chuẩn Chương trình GDPT 2018 & Thông tư 27/2020/TT-BGDĐT & Chuẩn SEA-PLM
 * Số hóa 100% nội dung: Đọc hiểu, Luyện từ và câu, Viết, Nói và nghe
 */

(function(global) {
  'use strict';

  const TIENG_VIET_5_CTST_DATA = {
  "metadata": {
    "grade": 5,
    "subjectId": "tieng_viet",
    "subjectName": "Tiếng Việt",
    "bookSeries": "ctst",
    "bookName": "Tiếng Việt 5 - Chân trời sáng tạo",
    "publisher": "Nhà xuất bản Giáo dục Việt Nam",
    "totalWeeks": 35,
    "totalLessons": 105,
    "volumes": [
      {
        "volume": 1,
        "name": "Tập 1 (Học kì I - Tuần 1 đến 18)",
        "weeks": "1-18"
      },
      {
        "volume": 2,
        "name": "Tập 2 (Học kì II - Tuần 19 đến 35)",
        "weeks": "19-35"
      }
    ]
  },
  "topics": [
    {
      "id": "tv5_ctst_cd1",
      "name": "KHUNG TRỜI TUỔI THƠ",
      "semester": 1,
      "volume": 1,
      "weeks": "1"
    },
    {
      "id": "tv5_ctst_cd2",
      "name": "Chủ điểm học tập Khối 5",
      "semester": 1,
      "volume": 1,
      "weeks": "4"
    },
    {
      "id": "tv5_ctst_cd3",
      "name": "CHỦ NHÂN TƯƠNG LAI",
      "semester": 1,
      "volume": 1,
      "weeks": "5"
    },
    {
      "id": "tv5_ctst_cd4",
      "name": "ÔN TẬP GIỮA HỌC KÌ I",
      "semester": 1,
      "volume": 1,
      "weeks": "9"
    },
    {
      "id": "tv5_ctst_cd5",
      "name": "CHUNG SỐNG YÊU THƯƠNG",
      "semester": 1,
      "volume": 1,
      "weeks": "10"
    },
    {
      "id": "tv5_ctst_cd6",
      "name": "CỘNG ĐỒNG GẮN BÓ",
      "semester": 1,
      "volume": 1,
      "weeks": "14"
    },
    {
      "id": "tv5_ctst_cd7",
      "name": "Ngày xuân Phố Cáo",
      "semester": 1,
      "volume": 1,
      "weeks": "16"
    },
    {
      "id": "tv5_ctst_cd8",
      "name": "Những lá thư",
      "semester": 1,
      "volume": 1,
      "weeks": "16"
    },
    {
      "id": "tv5_ctst_cd9",
      "name": "Ngôi nhà chung của buôn làng",
      "semester": 1,
      "volume": 1,
      "weeks": "16"
    },
    {
      "id": "tv5_ctst_cd10",
      "name": "Dáng hình ngọn gió",
      "semester": 1,
      "volume": 1,
      "weeks": "17"
    },
    {
      "id": "tv5_ctst_cd11",
      "name": "Từ những cánh đồng xanh",
      "semester": 1,
      "volume": 1,
      "weeks": "17"
    },
    {
      "id": "tv5_ctst_cd12",
      "name": "ÔN TẬP CUỐI HỌC KÌ I",
      "semester": 1,
      "volume": 1,
      "weeks": "18"
    },
    {
      "id": "tv5_ctst_cd13",
      "name": "Một số thuật ngữ dùng trong sách",
      "semester": 1,
      "volume": 1,
      "weeks": "1"
    },
    {
      "id": "tv5_ctst_cd14",
      "name": "Bảng tra cứu tên riêng nước ngoài",
      "semester": 1,
      "volume": 1,
      "weeks": "1"
    },
    {
      "id": "tv5_ctst_cd15",
      "name": "GIỮ MÃI MÀU XANH",
      "semester": 2,
      "volume": 2,
      "weeks": "19"
    },
    {
      "id": "tv5_ctst_cd16",
      "name": "ĐẤT NƯỚC NGÀN NĂM",
      "semester": 2,
      "volume": 2,
      "weeks": "23"
    },
    {
      "id": "tv5_ctst_cd17",
      "name": "KHÚC CA HOÀ BÌNH",
      "semester": 2,
      "volume": 2,
      "weeks": "28"
    },
    {
      "id": "tv5_ctst_cd18",
      "name": "CHÂN TRỜI RỘNG MỞ",
      "semester": 2,
      "volume": 2,
      "weeks": "32"
    },
    {
      "id": "tv5_ctst_cd19",
      "name": "Thơ viết cho ngày mai",
      "semester": 2,
      "volume": 2,
      "weeks": "33"
    },
    {
      "id": "tv5_ctst_cd20",
      "name": "Bài ca về mặt trời",
      "semester": 2,
      "volume": 2,
      "weeks": "33"
    },
    {
      "id": "tv5_ctst_cd21",
      "name": "Bên ngoài Trái Đất",
      "semester": 2,
      "volume": 2,
      "weeks": "33"
    },
    {
      "id": "tv5_ctst_cd22",
      "name": "Vào hạ",
      "semester": 2,
      "volume": 2,
      "weeks": "34"
    },
    {
      "id": "tv5_ctst_cd23",
      "name": "ÔN TẬP CUỐI NĂM HỌC",
      "semester": 2,
      "volume": 2,
      "weeks": "35"
    }
  ],
  "lessons": [
    {
      "id": "tv5_ctst_b1",
      "lessonNumber": 1,
      "title": "Bài 1: Chiều dưới chân núi",
      "topic": "KHUNG TRỜI TUỔI THƠ",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "10",
      "reading": {
        "title": "Chiều dưới chân núi",
        "pages": "10",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Chiều dưới chân núi' (SGK Tiếng Việt 5 Chân trời sáng tạo, 10). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Từ đồng nghĩa",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Từ đồng nghĩa trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Bài văn tả phong cảnh",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Bài văn tả phong cảnh."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Chiều dưới chân núi' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Chiều dưới chân núi' trong chủ điểm 'KHUNG TRỜI TUỔI THƠ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Chiều dưới chân núi' (Từ đồng nghĩa) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Từ đồng nghĩa giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 1: Chiều dưới chân núi' và nội dung Tập làm văn (Bài văn tả phong cảnh), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b2",
      "lessonNumber": 2,
      "title": "Bài 2: Quà tặng mùa hè",
      "topic": "KHUNG TRỜI TUỔI THƠ",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "15",
      "reading": {
        "title": "Quà tặng mùa hè",
        "pages": "15",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Quà tặng mùa hè' (SGK Tiếng Việt 5 Chân trời sáng tạo, 15). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Quan sát, tìm ý cho bài văn tả phong cảnh",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Quan sát, tìm ý cho bài văn tả phong cảnh."
      },
      "speakingAndListening": {
        "topic": "Kể về một kỉ niệm đáng nhớ"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Quà tặng mùa hè' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Quà tặng mùa hè' trong chủ điểm 'KHUNG TRỜI TUỔI THƠ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Quà tặng mùa hè' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 2: Quà tặng mùa hè' và nội dung Tập làm văn (Quan sát, tìm ý cho bài văn tả phong cảnh), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b3",
      "lessonNumber": 3,
      "title": "Bài 3: Tiếng gà trưa",
      "topic": "KHUNG TRỜI TUỔI THƠ",
      "volume": 1,
      "semester": 1,
      "week": 2,
      "pages": "19",
      "reading": {
        "title": "Tiếng gà trưa",
        "pages": "19",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Tiếng gà trưa' (SGK Tiếng Việt 5 Chân trời sáng tạo, 19). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Luyện tập về từ đồng nghĩa",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Luyện tập về từ đồng nghĩa trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Lập dàn ý cho bài văn tả phong cảnh",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Lập dàn ý cho bài văn tả phong cảnh."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Tiếng gà trưa' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Tiếng gà trưa' trong chủ điểm 'KHUNG TRỜI TUỔI THƠ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Tiếng gà trưa' (Luyện tập về từ đồng nghĩa) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Luyện tập về từ đồng nghĩa giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 3: Tiếng gà trưa' và nội dung Tập làm văn (Lập dàn ý cho bài văn tả phong cảnh), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b4",
      "lessonNumber": 4,
      "title": "Bài 4: Rét ngọt",
      "topic": "KHUNG TRỜI TUỔI THƠ",
      "volume": 1,
      "semester": 1,
      "week": 2,
      "pages": "25",
      "reading": {
        "title": "Rét ngọt",
        "pages": "25",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Rét ngọt' (SGK Tiếng Việt 5 Chân trời sáng tạo, 25). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Luyện tập về từ đồng nghĩa",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Luyện tập về từ đồng nghĩa trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn mở bài cho bài văn tả phong cảnh",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Viết đoạn mở bài cho bài văn tả phong cảnh."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Rét ngọt' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Rét ngọt' trong chủ điểm 'KHUNG TRỜI TUỔI THƠ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: Rét ngọt' (Luyện tập về từ đồng nghĩa) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Luyện tập về từ đồng nghĩa giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 4: Rét ngọt' và nội dung Tập làm văn (Viết đoạn mở bài cho bài văn tả phong cảnh), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b5",
      "lessonNumber": 5,
      "title": "Bài 5: Quà sinh nhật",
      "topic": "KHUNG TRỜI TUỔI THƠ",
      "volume": 1,
      "semester": 1,
      "week": 3,
      "pages": "29",
      "reading": {
        "title": "Quà sinh nhật",
        "pages": "29",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Quà sinh nhật' (SGK Tiếng Việt 5 Chân trời sáng tạo, 29). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Từ đa nghĩa",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Từ đa nghĩa trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn cho bài văn tả phong cảnh",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Viết đoạn văn cho bài văn tả phong cảnh."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Quà sinh nhật' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Quà sinh nhật' trong chủ điểm 'KHUNG TRỜI TUỔI THƠ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Quà sinh nhật' (Từ đa nghĩa) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Từ đa nghĩa giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 5: Quà sinh nhật' và nội dung Tập làm văn (Viết đoạn văn cho bài văn tả phong cảnh), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b6",
      "lessonNumber": 6,
      "title": "Bài 6: Tiếng vườn",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 4,
      "pages": "33",
      "reading": {
        "title": "Tiếng vườn",
        "pages": "33",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Tiếng vườn' (SGK Tiếng Việt 5 Chân trời sáng tạo, 33). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn kết bài cho bài văn tả phong cảnh",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Viết đoạn kết bài cho bài văn tả phong cảnh."
      },
      "speakingAndListening": {
        "topic": "Giới thiệu một chương trình truyền hình hoặc một hoạt động dành cho thiếu nhi"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Tiếng vườn' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Tiếng vườn' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 6: Tiếng vườn' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 6: Tiếng vườn' và nội dung Tập làm văn (Viết đoạn kết bài cho bài văn tả phong cảnh), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b7",
      "lessonNumber": 7,
      "title": "Bài 7: Chớm thu",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 4,
      "pages": "37",
      "reading": {
        "title": "Chớm thu",
        "pages": "37",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Chớm thu' (SGK Tiếng Việt 5 Chân trời sáng tạo, 37). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Sử dụng từ điển",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Sử dụng từ điển trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết bài văn tả phong cảnh (Bài viết số 1)",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Viết bài văn tả phong cảnh (Bài viết số 1)."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Chớm thu' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Chớm thu' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 7: Chớm thu' (Sử dụng từ điển) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Sử dụng từ điển giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 7: Chớm thu' và nội dung Tập làm văn (Viết bài văn tả phong cảnh (Bài viết số 1)), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b8",
      "lessonNumber": 8,
      "title": "Bài 8: Ban mai",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 4,
      "pages": "42",
      "reading": {
        "title": "Ban mai",
        "pages": "42",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ban mai' (SGK Tiếng Việt 5 Chân trời sáng tạo, 42). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Mở rộng vốn từ Tuổi thơ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Mở rộng vốn từ Tuổi thơ trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Luyện tập quan sát, tìm ý cho bài văn tả phong cảnh",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Luyện tập quan sát, tìm ý cho bài văn tả phong cảnh."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ban mai' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ban mai' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 8: Ban mai' (Mở rộng vốn từ Tuổi thơ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Mở rộng vốn từ Tuổi thơ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 8: Ban mai' và nội dung Tập làm văn (Luyện tập quan sát, tìm ý cho bài văn tả phong cảnh), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b9",
      "lessonNumber": 1,
      "title": "Bài 1: Trạng nguyên nhỏ tuổi",
      "topic": "CHỦ NHÂN TƯƠNG LAI",
      "volume": 1,
      "semester": 1,
      "week": 5,
      "pages": "46",
      "reading": {
        "title": "Trạng nguyên nhỏ tuổi",
        "pages": "46",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Trạng nguyên nhỏ tuổi' (SGK Tiếng Việt 5 Chân trời sáng tạo, 46). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Luyện tập về từ đa nghĩa",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Luyện tập về từ đa nghĩa trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Luyện tập lập dàn ý cho bài văn tả phong cảnh",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Luyện tập lập dàn ý cho bài văn tả phong cảnh."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Trạng nguyên nhỏ tuổi' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Trạng nguyên nhỏ tuổi' trong chủ điểm 'CHỦ NHÂN TƯƠNG LAI' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Trạng nguyên nhỏ tuổi' (Luyện tập về từ đa nghĩa) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Luyện tập về từ đa nghĩa giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 1: Trạng nguyên nhỏ tuổi' và nội dung Tập làm văn (Luyện tập lập dàn ý cho bài văn tả phong cảnh), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b10",
      "lessonNumber": 2,
      "title": "Bài 2: Thư gửi các học sinh",
      "topic": "CHỦ NHÂN TƯƠNG LAI",
      "volume": 1,
      "semester": 1,
      "week": 5,
      "pages": "50",
      "reading": {
        "title": "Thư gửi các học sinh",
        "pages": "50",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Thư gửi các học sinh' (SGK Tiếng Việt 5 Chân trời sáng tạo, 50). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Trả bài văn tả phong cảnh (Bài viết số 1)",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Trả bài văn tả phong cảnh (Bài viết số 1)."
      },
      "speakingAndListening": {
        "topic": "Thảo luận về ích lợi của việc đọc sách"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Thư gửi các học sinh' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Thư gửi các học sinh' trong chủ điểm 'CHỦ NHÂN TƯƠNG LAI' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Thư gửi các học sinh' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 2: Thư gửi các học sinh' và nội dung Tập làm văn (Trả bài văn tả phong cảnh (Bài viết số 1)), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b11",
      "lessonNumber": 3,
      "title": "Bài 3: Nay em mười tuổi",
      "topic": "CHỦ NHÂN TƯƠNG LAI",
      "volume": 1,
      "semester": 1,
      "week": 6,
      "pages": "53",
      "reading": {
        "title": "Nay em mười tuổi",
        "pages": "53",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Nay em mười tuổi' (SGK Tiếng Việt 5 Chân trời sáng tạo, 53). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Nay em mười tuổi' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Nay em mười tuổi' trong chủ điểm 'CHỦ NHÂN TƯƠNG LAI' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Nay em mười tuổi' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 3: Nay em mười tuổi' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b12",
      "lessonNumber": 12,
      "title": "Luyện tập về từ đa nghĩa",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "55",
      "reading": {
        "title": "Luyện tập về từ đa nghĩa",
        "pages": "55",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Luyện tập về từ đa nghĩa' (SGK Tiếng Việt 5 Chân trời sáng tạo, 55). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Luyện tập về từ đa nghĩa",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Luyện tập về từ đa nghĩa trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Luyện tập về từ đa nghĩa' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Luyện tập về từ đa nghĩa' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Luyện tập về từ đa nghĩa' (Luyện tập về từ đa nghĩa) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Luyện tập về từ đa nghĩa giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Luyện tập về từ đa nghĩa' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b13",
      "lessonNumber": 13,
      "title": "Luyện tập viết đoạn văn cho bài văn tả phong cảnh",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "56",
      "reading": {
        "title": "Luyện tập viết đoạn văn cho bài văn tả phong cảnh",
        "pages": "56",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Luyện tập viết đoạn văn cho bài văn tả phong cảnh' (SGK Tiếng Việt 5 Chân trời sáng tạo, 56). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Luyện tập viết đoạn văn cho bài văn tả phong cảnh",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Luyện tập viết đoạn văn cho bài văn tả phong cảnh."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Luyện tập viết đoạn văn cho bài văn tả phong cảnh' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Luyện tập viết đoạn văn cho bài văn tả phong cảnh' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Luyện tập viết đoạn văn cho bài văn tả phong cảnh' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Luyện tập viết đoạn văn cho bài văn tả phong cảnh' và nội dung Tập làm văn (Luyện tập viết đoạn văn cho bài văn tả phong cảnh), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b14",
      "lessonNumber": 4,
      "title": "Bài 4: Cậu bé say mê toán học",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "57",
      "reading": {
        "title": "Cậu bé say mê toán học",
        "pages": "57",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Cậu bé say mê toán học' (SGK Tiếng Việt 5 Chân trời sáng tạo, 57). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Cậu bé say mê toán học' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Cậu bé say mê toán học' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: Cậu bé say mê toán học' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 4: Cậu bé say mê toán học' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b15",
      "lessonNumber": 4,
      "title": "Bài 4: Cậu bé say mê toán học",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "57",
      "reading": {
        "title": "Cậu bé say mê toán học",
        "pages": "57",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Cậu bé say mê toán học' (SGK Tiếng Việt 5 Chân trời sáng tạo, 57). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Cậu bé say mê toán học' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Cậu bé say mê toán học' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: Cậu bé say mê toán học' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 4: Cậu bé say mê toán học' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b16",
      "lessonNumber": 4,
      "title": "Bài 4: Cậu bé say mê toán học",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "58",
      "reading": {
        "title": "Luyện tập về từ đồng nghĩa và từ đa nghĩa",
        "pages": "58",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Luyện tập về từ đồng nghĩa và từ đa nghĩa' (SGK Tiếng Việt 5 Chân trời sáng tạo, 58). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Luyện tập về từ đồng nghĩa và từ đa nghĩa",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Luyện tập về từ đồng nghĩa và từ đa nghĩa trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Luyện tập về từ đồng nghĩa và từ đa nghĩa' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Luyện tập về từ đồng nghĩa và từ đa nghĩa' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: Cậu bé say mê toán học' (Luyện tập về từ đồng nghĩa và từ đa nghĩa) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Luyện tập về từ đồng nghĩa và từ đa nghĩa giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 4: Cậu bé say mê toán học' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b17",
      "lessonNumber": 4,
      "title": "Bài 4: Cậu bé say mê toán học",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "59",
      "reading": {
        "title": "Viết bài văn tả phong cảnh (Bài viết số 2)",
        "pages": "59",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Viết bài văn tả phong cảnh (Bài viết số 2)' (SGK Tiếng Việt 5 Chân trời sáng tạo, 59). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết bài văn tả phong cảnh (Bài viết số 2)",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Viết bài văn tả phong cảnh (Bài viết số 2)."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Viết bài văn tả phong cảnh (Bài viết số 2)' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Viết bài văn tả phong cảnh (Bài viết số 2)' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: Cậu bé say mê toán học' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 4: Cậu bé say mê toán học' và nội dung Tập làm văn (Viết bài văn tả phong cảnh (Bài viết số 2)), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b18",
      "lessonNumber": 5,
      "title": "Bài 5: Lớp học trên đường",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "60",
      "reading": {
        "title": "Lớp học trên đường",
        "pages": "60",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Lớp học trên đường' (SGK Tiếng Việt 5 Chân trời sáng tạo, 60). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Lớp học trên đường' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Lớp học trên đường' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Lớp học trên đường' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 5: Lớp học trên đường' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b19",
      "lessonNumber": 5,
      "title": "Bài 5: Lớp học trên đường",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "60",
      "reading": {
        "title": "Lớp học trên đường",
        "pages": "60",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Lớp học trên đường' (SGK Tiếng Việt 5 Chân trời sáng tạo, 60). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Lớp học trên đường' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Lớp học trên đường' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Lớp học trên đường' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 5: Lớp học trên đường' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b20",
      "lessonNumber": 5,
      "title": "Bài 5: Lớp học trên đường",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "62",
      "reading": {
        "title": "Viết hoa thể hiện sự tôn trọng đặc biệt",
        "pages": "62",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Viết hoa thể hiện sự tôn trọng đặc biệt' (SGK Tiếng Việt 5 Chân trời sáng tạo, 62). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Viết hoa thể hiện sự tôn trọng đặc biệt",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Viết hoa thể hiện sự tôn trọng đặc biệt trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Viết hoa thể hiện sự tôn trọng đặc biệt' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Viết hoa thể hiện sự tôn trọng đặc biệt' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Lớp học trên đường' (Viết hoa thể hiện sự tôn trọng đặc biệt) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Viết hoa thể hiện sự tôn trọng đặc biệt giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 5: Lớp học trên đường' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b21",
      "lessonNumber": 5,
      "title": "Bài 5: Lớp học trên đường",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "63",
      "reading": {
        "title": "Viết chương trình hoạt động",
        "pages": "63",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Viết chương trình hoạt động' (SGK Tiếng Việt 5 Chân trời sáng tạo, 63). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết chương trình hoạt động",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Viết chương trình hoạt động."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Viết chương trình hoạt động' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Viết chương trình hoạt động' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Lớp học trên đường' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 5: Lớp học trên đường' và nội dung Tập làm văn (Viết chương trình hoạt động), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b22",
      "lessonNumber": 6,
      "title": "Bài 6: Luật Trẻ em",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 7,
      "pages": "65",
      "reading": {
        "title": "Luật Trẻ em",
        "pages": "65",
        "genre": "Văn bản thông tin phi hư cấu",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Luật Trẻ em' (SGK Tiếng Việt 5 Chân trời sáng tạo, 65). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Luật Trẻ em' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Luật Trẻ em' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 6: Luật Trẻ em' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 6: Luật Trẻ em' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b23",
      "lessonNumber": 6,
      "title": "Bài 6: Luật Trẻ em",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 7,
      "pages": "65",
      "reading": {
        "title": "Luật Trẻ em",
        "pages": "65",
        "genre": "Văn bản thông tin phi hư cấu",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Luật Trẻ em' (SGK Tiếng Việt 5 Chân trời sáng tạo, 65). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Luật Trẻ em' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Luật Trẻ em' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 6: Luật Trẻ em' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 6: Luật Trẻ em' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b24",
      "lessonNumber": 6,
      "title": "Bài 6: Luật Trẻ em",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 7,
      "pages": "66",
      "reading": {
        "title": "Tranh luận theo chủ đề Bốn phận của trẻ em",
        "pages": "66",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Tranh luận theo chủ đề Bốn phận của trẻ em' (SGK Tiếng Việt 5 Chân trời sáng tạo, 66). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Tranh luận theo chủ đề Bốn phận của trẻ em"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Tranh luận theo chủ đề Bốn phận của trẻ em' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Tranh luận theo chủ đề Bốn phận của trẻ em' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 6: Luật Trẻ em' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 6: Luật Trẻ em' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b25",
      "lessonNumber": 6,
      "title": "Bài 6: Luật Trẻ em",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 7,
      "pages": "67",
      "reading": {
        "title": "Luyện tập viết chương trình hoạt động",
        "pages": "67",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Luyện tập viết chương trình hoạt động' (SGK Tiếng Việt 5 Chân trời sáng tạo, 67). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Luyện tập viết chương trình hoạt động",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Luyện tập viết chương trình hoạt động."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Luyện tập viết chương trình hoạt động' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Luyện tập viết chương trình hoạt động' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 6: Luật Trẻ em' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 6: Luật Trẻ em' và nội dung Tập làm văn (Luyện tập viết chương trình hoạt động), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b26",
      "lessonNumber": 7,
      "title": "Bài 7: Bức tranh đồng quê",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 7,
      "pages": "68",
      "reading": {
        "title": "Bức tranh đồng quê",
        "pages": "68",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Bức tranh đồng quê' (SGK Tiếng Việt 5 Chân trời sáng tạo, 68). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Bức tranh đồng quê' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Bức tranh đồng quê' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 7: Bức tranh đồng quê' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 7: Bức tranh đồng quê' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b27",
      "lessonNumber": 7,
      "title": "Bài 7: Bức tranh đồng quê",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 7,
      "pages": "68",
      "reading": {
        "title": "Bức tranh đồng quê",
        "pages": "68",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Bức tranh đồng quê' (SGK Tiếng Việt 5 Chân trời sáng tạo, 68). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Bức tranh đồng quê' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Bức tranh đồng quê' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 7: Bức tranh đồng quê' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 7: Bức tranh đồng quê' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b28",
      "lessonNumber": 7,
      "title": "Bài 7: Bức tranh đồng quê",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 7,
      "pages": "70",
      "reading": {
        "title": "Luyện tập sử dụng từ điển",
        "pages": "70",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Luyện tập sử dụng từ điển' (SGK Tiếng Việt 5 Chân trời sáng tạo, 70). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Luyện tập sử dụng từ điển",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Luyện tập sử dụng từ điển trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Luyện tập sử dụng từ điển' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Luyện tập sử dụng từ điển' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 7: Bức tranh đồng quê' (Luyện tập sử dụng từ điển) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Luyện tập sử dụng từ điển giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 7: Bức tranh đồng quê' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b29",
      "lessonNumber": 7,
      "title": "Bài 7: Bức tranh đồng quê",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 7,
      "pages": "71",
      "reading": {
        "title": "Trả bài văn tả phong cảnh (Bài viết số 2)",
        "pages": "71",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Trả bài văn tả phong cảnh (Bài viết số 2)' (SGK Tiếng Việt 5 Chân trời sáng tạo, 71). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Trả bài văn tả phong cảnh (Bài viết số 2)",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Trả bài văn tả phong cảnh (Bài viết số 2)."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Trả bài văn tả phong cảnh (Bài viết số 2)' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Trả bài văn tả phong cảnh (Bài viết số 2)' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 7: Bức tranh đồng quê' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 7: Bức tranh đồng quê' và nội dung Tập làm văn (Trả bài văn tả phong cảnh (Bài viết số 2)), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b30",
      "lessonNumber": 8,
      "title": "Bài 8: Lễ ra mắt Hội Nhi đồng Cứu quốc",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 8,
      "pages": "72",
      "reading": {
        "title": "Lễ ra mắt Hội Nhi đồng Cứu quốc",
        "pages": "72",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Lễ ra mắt Hội Nhi đồng Cứu quốc' (SGK Tiếng Việt 5 Chân trời sáng tạo, 72). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Lễ ra mắt Hội Nhi đồng Cứu quốc' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Lễ ra mắt Hội Nhi đồng Cứu quốc' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 8: Lễ ra mắt Hội Nhi đồng Cứu quốc' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 8: Lễ ra mắt Hội Nhi đồng Cứu quốc' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b31",
      "lessonNumber": 8,
      "title": "Bài 8: Lễ ra mắt Hội Nhi đồng Cứu quốc",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 8,
      "pages": "72",
      "reading": {
        "title": "Lễ ra mắt Hội Nhi đồng Cứu quốc",
        "pages": "72",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Lễ ra mắt Hội Nhi đồng Cứu quốc' (SGK Tiếng Việt 5 Chân trời sáng tạo, 72). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Lễ ra mắt Hội Nhi đồng Cứu quốc' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Lễ ra mắt Hội Nhi đồng Cứu quốc' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 8: Lễ ra mắt Hội Nhi đồng Cứu quốc' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 8: Lễ ra mắt Hội Nhi đồng Cứu quốc' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b32",
      "lessonNumber": 8,
      "title": "Bài 8: Lễ ra mắt Hội Nhi đồng Cứu quốc",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 8,
      "pages": "73",
      "reading": {
        "title": "Mở rộng vốn từ Công dân",
        "pages": "73",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Mở rộng vốn từ Công dân' (SGK Tiếng Việt 5 Chân trời sáng tạo, 73). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Mở rộng vốn từ Công dân",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Mở rộng vốn từ Công dân trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Mở rộng vốn từ Công dân' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Mở rộng vốn từ Công dân' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 8: Lễ ra mắt Hội Nhi đồng Cứu quốc' (Mở rộng vốn từ Công dân) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Mở rộng vốn từ Công dân giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 8: Lễ ra mắt Hội Nhi đồng Cứu quốc' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b33",
      "lessonNumber": 8,
      "title": "Bài 8: Lễ ra mắt Hội Nhi đồng Cứu quốc",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 8,
      "pages": "74",
      "reading": {
        "title": "Viết báo cáo công việc",
        "pages": "74",
        "genre": "Văn bản thông tin phi hư cấu",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Viết báo cáo công việc' (SGK Tiếng Việt 5 Chân trời sáng tạo, 74). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết báo cáo công việc",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Viết báo cáo công việc."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Viết báo cáo công việc' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Viết báo cáo công việc' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 8: Lễ ra mắt Hội Nhi đồng Cứu quốc' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 8: Lễ ra mắt Hội Nhi đồng Cứu quốc' và nội dung Tập làm văn (Viết báo cáo công việc), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b34",
      "lessonNumber": 34,
      "title": "ÔN TẬP GIỮA HỌC KÌ I",
      "topic": "ÔN TẬP GIỮA HỌC KÌ I",
      "volume": 1,
      "semester": 1,
      "week": 9,
      "pages": "77",
      "reading": {
        "title": "ÔN TẬP GIỮA HỌC KÌ I",
        "pages": "77",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'ÔN TẬP GIỮA HỌC KÌ I' (SGK Tiếng Việt 5 Chân trời sáng tạo, 77). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'ÔN TẬP GIỮA HỌC KÌ I' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'ÔN TẬP GIỮA HỌC KÌ I' trong chủ điểm 'ÔN TẬP GIỮA HỌC KÌ I' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'ÔN TẬP GIỮA HỌC KÌ I' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'ÔN TẬP GIỮA HỌC KÌ I' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b35",
      "lessonNumber": 1,
      "title": "Bài 1: Tết nhớ thương",
      "topic": "CHUNG SỐNG YÊU THƯƠNG",
      "volume": 1,
      "semester": 1,
      "week": 10,
      "pages": "84 - 84",
      "reading": {
        "title": "Tết nhớ thương",
        "pages": "84 - 84",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Tết nhớ thương' (SGK Tiếng Việt 5 Chân trời sáng tạo, 84 - 84). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Đại từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Đại từ trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Luyện tập viết báo cáo công việc",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Luyện tập viết báo cáo công việc."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Tết nhớ thương' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Tết nhớ thương' trong chủ điểm 'CHUNG SỐNG YÊU THƯƠNG' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Tết nhớ thương' (Đại từ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Đại từ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 1: Tết nhớ thương' và nội dung Tập làm văn (Luyện tập viết báo cáo công việc), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b36",
      "lessonNumber": 2,
      "title": "Bài 2: Mặn mòi vị muối Bạc Liêu",
      "topic": "CHUNG SỐNG YÊU THƯƠNG",
      "volume": 1,
      "semester": 1,
      "week": 10,
      "pages": "88 - 88",
      "reading": {
        "title": "Mặn mòi vị muối Bạc Liêu",
        "pages": "88 - 88",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Mặn mòi vị muối Bạc Liêu' (SGK Tiếng Việt 5 Chân trời sáng tạo, 88 - 88). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Bài văn kể chuyện sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Bài văn kể chuyện sáng tạo."
      },
      "speakingAndListening": {
        "topic": "Giới thiệu về một làng nghề"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Mặn mòi vị muối Bạc Liêu' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Mặn mòi vị muối Bạc Liêu' trong chủ điểm 'CHUNG SỐNG YÊU THƯƠNG' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Mặn mòi vị muối Bạc Liêu' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 2: Mặn mòi vị muối Bạc Liêu' và nội dung Tập làm văn (Bài văn kể chuyện sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b37",
      "lessonNumber": 3,
      "title": "Bài 3: Nụ cười mang tên mùa xuân",
      "topic": "CHUNG SỐNG YÊU THƯƠNG",
      "volume": 1,
      "semester": 1,
      "week": 10,
      "pages": "92 - 92",
      "reading": {
        "title": "Nụ cười mang tên mùa xuân",
        "pages": "92 - 92",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Nụ cười mang tên mùa xuân' (SGK Tiếng Việt 5 Chân trời sáng tạo, 92 - 92). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Đại từ xưng hô",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Đại từ xưng hô trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Tìm ý, lập dàn ý cho bài văn kể chuyện sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Tìm ý, lập dàn ý cho bài văn kể chuyện sáng tạo."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Nụ cười mang tên mùa xuân' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Nụ cười mang tên mùa xuân' trong chủ điểm 'CHUNG SỐNG YÊU THƯƠNG' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Nụ cười mang tên mùa xuân' (Đại từ xưng hô) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Đại từ xưng hô giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 3: Nụ cười mang tên mùa xuân' và nội dung Tập làm văn (Tìm ý, lập dàn ý cho bài văn kể chuyện sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b38",
      "lessonNumber": 4,
      "title": "Bài 4: Mùa vừng",
      "topic": "CHUNG SỐNG YÊU THƯƠNG",
      "volume": 1,
      "semester": 1,
      "week": 11,
      "pages": "98 - 98",
      "reading": {
        "title": "Mùa vừng",
        "pages": "98 - 98",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Mùa vừng' (SGK Tiếng Việt 5 Chân trời sáng tạo, 98 - 98). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Luyện tập về đại từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Luyện tập về đại từ trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn cho bài văn kể chuyện sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Viết đoạn văn cho bài văn kể chuyện sáng tạo."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Mùa vừng' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Mùa vừng' trong chủ điểm 'CHUNG SỐNG YÊU THƯƠNG' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: Mùa vừng' (Luyện tập về đại từ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Luyện tập về đại từ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 4: Mùa vừng' và nội dung Tập làm văn (Viết đoạn văn cho bài văn kể chuyện sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b39",
      "lessonNumber": 5,
      "title": "Bài 5: Trước ngày Giáng sinh",
      "topic": "CHUNG SỐNG YÊU THƯƠNG",
      "volume": 1,
      "semester": 1,
      "week": 11,
      "pages": "102 - 102",
      "reading": {
        "title": "Trước ngày Giáng sinh",
        "pages": "102 - 102",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Trước ngày Giáng sinh' (SGK Tiếng Việt 5 Chân trời sáng tạo, 102 - 102). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Luyện tập về đại từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Luyện tập về đại từ trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết bài văn kể chuyện sáng tạo (Bài viết số 1)",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Viết bài văn kể chuyện sáng tạo (Bài viết số 1)."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Trước ngày Giáng sinh' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Trước ngày Giáng sinh' trong chủ điểm 'CHUNG SỐNG YÊU THƯƠNG' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Trước ngày Giáng sinh' (Luyện tập về đại từ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Luyện tập về đại từ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 5: Trước ngày Giáng sinh' và nội dung Tập làm văn (Viết bài văn kể chuyện sáng tạo (Bài viết số 1)), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b40",
      "lessonNumber": 6,
      "title": "Bài 6: Buổi sáng ở Thành phố Hồ Chí Minh",
      "topic": "CHUNG SỐNG YÊU THƯƠNG",
      "volume": 1,
      "semester": 1,
      "week": 12,
      "pages": "106 - 106",
      "reading": {
        "title": "Buổi sáng ở Thành phố Hồ Chí Minh",
        "pages": "106 - 106",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Buổi sáng ở Thành phố Hồ Chí Minh' (SGK Tiếng Việt 5 Chân trời sáng tạo, 106 - 106). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Buổi sáng ở Thành phố Hồ Chí Minh' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Buổi sáng ở Thành phố Hồ Chí Minh' trong chủ điểm 'CHUNG SỐNG YÊU THƯƠNG' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 6: Buổi sáng ở Thành phố Hồ Chí Minh' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 6: Buổi sáng ở Thành phố Hồ Chí Minh' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b41",
      "lessonNumber": 41,
      "title": "Bài 41: Thảo luận theo chủ đề Ý nghĩa của sự chia sẻ",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 13,
      "pages": "107",
      "reading": {
        "title": "Thảo luận theo chủ đề Ý nghĩa của sự chia sẻ",
        "pages": "107",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Thảo luận theo chủ đề Ý nghĩa của sự chia sẻ' (SGK Tiếng Việt 5 Chân trời sáng tạo, 107). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Thảo luận theo chủ đề Ý nghĩa của sự chia sẻ' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Thảo luận theo chủ đề Ý nghĩa của sự chia sẻ' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 41: Thảo luận theo chủ đề Ý nghĩa của sự chia sẻ' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 41: Thảo luận theo chủ đề Ý nghĩa của sự chia sẻ' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b42",
      "lessonNumber": 42,
      "title": "Bài 42: Luyện tập tìm ý, lập dàn ý cho bài văn kể chuyện sáng tạo",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 13,
      "pages": "108",
      "reading": {
        "title": "Luyện tập tìm ý, lập dàn ý cho bài văn kể chuyện sáng tạo",
        "pages": "108",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Luyện tập tìm ý, lập dàn ý cho bài văn kể chuyện sáng tạo' (SGK Tiếng Việt 5 Chân trời sáng tạo, 108). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Luyện tập tìm ý, lập dàn ý cho bài văn kể chuyện sáng tạo' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Luyện tập tìm ý, lập dàn ý cho bài văn kể chuyện sáng tạo' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 42: Luyện tập tìm ý, lập dàn ý cho bài văn kể chuyện sáng tạo' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 42: Luyện tập tìm ý, lập dàn ý cho bài văn kể chuyện sáng tạo' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b43",
      "lessonNumber": 7,
      "title": "Bài 7: Về ngôi nhà đang xây",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 13,
      "pages": "109",
      "reading": {
        "title": "Về ngôi nhà đang xây",
        "pages": "109",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Về ngôi nhà đang xây' (SGK Tiếng Việt 5 Chân trời sáng tạo, 109). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Về ngôi nhà đang xây' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Về ngôi nhà đang xây' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 7: Về ngôi nhà đang xây' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 7: Về ngôi nhà đang xây' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b44",
      "lessonNumber": 7,
      "title": "Bài 7: Về ngôi nhà đang xây",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 13,
      "pages": "109",
      "reading": {
        "title": "Về ngôi nhà đang xây",
        "pages": "109",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Về ngôi nhà đang xây' (SGK Tiếng Việt 5 Chân trời sáng tạo, 109). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Về ngôi nhà đang xây' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Về ngôi nhà đang xây' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 7: Về ngôi nhà đang xây' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 7: Về ngôi nhà đang xây' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b45",
      "lessonNumber": 7,
      "title": "Bài 7: Về ngôi nhà đang xây",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 13,
      "pages": "111",
      "reading": {
        "title": "Kết từ",
        "pages": "111",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Kết từ' (SGK Tiếng Việt 5 Chân trời sáng tạo, 111). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Kết từ' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Kết từ' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 7: Về ngôi nhà đang xây' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 7: Về ngôi nhà đang xây' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b46",
      "lessonNumber": 7,
      "title": "Bài 7: Về ngôi nhà đang xây",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 13,
      "pages": "112",
      "reading": {
        "title": "Trả bài văn kể chuyện sáng tạo (Bài viết số 1)",
        "pages": "112",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Trả bài văn kể chuyện sáng tạo (Bài viết số 1)' (SGK Tiếng Việt 5 Chân trời sáng tạo, 112). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Trả bài văn kể chuyện sáng tạo (Bài viết số 1)' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Trả bài văn kể chuyện sáng tạo (Bài viết số 1)' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 7: Về ngôi nhà đang xây' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 7: Về ngôi nhà đang xây' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b47",
      "lessonNumber": 8,
      "title": "Bài 8: Hãy lắng nghe",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 13,
      "pages": "113",
      "reading": {
        "title": "Hãy lắng nghe",
        "pages": "113",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Hãy lắng nghe' (SGK Tiếng Việt 5 Chân trời sáng tạo, 113). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Hãy lắng nghe' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Hãy lắng nghe' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 8: Hãy lắng nghe' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 8: Hãy lắng nghe' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b48",
      "lessonNumber": 8,
      "title": "Bài 8: Hãy lắng nghe",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 13,
      "pages": "113",
      "reading": {
        "title": "Hãy lắng nghe",
        "pages": "113",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Hãy lắng nghe' (SGK Tiếng Việt 5 Chân trời sáng tạo, 113). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Hãy lắng nghe' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Hãy lắng nghe' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 8: Hãy lắng nghe' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 8: Hãy lắng nghe' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b49",
      "lessonNumber": 8,
      "title": "Bài 8: Hãy lắng nghe",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 13,
      "pages": "114",
      "reading": {
        "title": "Mở rộng vốn từ Hạnh phúc",
        "pages": "114",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Mở rộng vốn từ Hạnh phúc' (SGK Tiếng Việt 5 Chân trời sáng tạo, 114). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Mở rộng vốn từ Hạnh phúc' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Mở rộng vốn từ Hạnh phúc' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 8: Hãy lắng nghe' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 8: Hãy lắng nghe' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b50",
      "lessonNumber": 8,
      "title": "Bài 8: Hãy lắng nghe",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 1,
      "semester": 1,
      "week": 13,
      "pages": "115",
      "reading": {
        "title": "Viết bài văn kể chuyện sáng tạo (Bài viết số 2)",
        "pages": "115",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Viết bài văn kể chuyện sáng tạo (Bài viết số 2)' (SGK Tiếng Việt 5 Chân trời sáng tạo, 115). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Viết bài văn kể chuyện sáng tạo (Bài viết số 2)' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Viết bài văn kể chuyện sáng tạo (Bài viết số 2)' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 8: Hãy lắng nghe' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 8: Hãy lắng nghe' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b51",
      "lessonNumber": 1,
      "title": "Bài 1: Tiếng rao đêm",
      "topic": "CỘNG ĐỒNG GẮN BÓ",
      "volume": 1,
      "semester": 1,
      "week": 14,
      "pages": "116",
      "reading": {
        "title": "Tiếng rao đêm",
        "pages": "116",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Tiếng rao đêm' (SGK Tiếng Việt 5 Chân trời sáng tạo, 116). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Tiếng rao đêm' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Tiếng rao đêm' trong chủ điểm 'CỘNG ĐỒNG GẮN BÓ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Tiếng rao đêm' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 1: Tiếng rao đêm' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b52",
      "lessonNumber": 1,
      "title": "Bài 1: Tiếng rao đêm",
      "topic": "CỘNG ĐỒNG GẮN BÓ",
      "volume": 1,
      "semester": 1,
      "week": 14,
      "pages": "116",
      "reading": {
        "title": "Tiếng rao đêm",
        "pages": "116",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Tiếng rao đêm' (SGK Tiếng Việt 5 Chân trời sáng tạo, 116). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Tiếng rao đêm' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Tiếng rao đêm' trong chủ điểm 'CỘNG ĐỒNG GẮN BÓ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Tiếng rao đêm' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 1: Tiếng rao đêm' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b53",
      "lessonNumber": 1,
      "title": "Bài 1: Tiếng rao đêm",
      "topic": "CỘNG ĐỒNG GẮN BÓ",
      "volume": 1,
      "semester": 1,
      "week": 14,
      "pages": "117",
      "reading": {
        "title": "Luyện tập về kết từ",
        "pages": "117",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Luyện tập về kết từ' (SGK Tiếng Việt 5 Chân trời sáng tạo, 117). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Luyện tập về kết từ' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Luyện tập về kết từ' trong chủ điểm 'CỘNG ĐỒNG GẮN BÓ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Tiếng rao đêm' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 1: Tiếng rao đêm' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b54",
      "lessonNumber": 1,
      "title": "Bài 1: Tiếng rao đêm",
      "topic": "CỘNG ĐỒNG GẮN BÓ",
      "volume": 1,
      "semester": 1,
      "week": 14,
      "pages": "118",
      "reading": {
        "title": "Bài văn kể chuyện sáng tạo (tiếp theo)",
        "pages": "118",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Bài văn kể chuyện sáng tạo (tiếp theo)' (SGK Tiếng Việt 5 Chân trời sáng tạo, 118). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Bài văn kể chuyện sáng tạo (tiếp theo)' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Bài văn kể chuyện sáng tạo (tiếp theo)' trong chủ điểm 'CỘNG ĐỒNG GẮN BÓ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Tiếng rao đêm' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 1: Tiếng rao đêm' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b55",
      "lessonNumber": 2,
      "title": "Bài 2: Một ngày ở Đê Ba",
      "topic": "CỘNG ĐỒNG GẮN BÓ",
      "volume": 1,
      "semester": 1,
      "week": 14,
      "pages": "121",
      "reading": {
        "title": "Một ngày ở Đê Ba",
        "pages": "121",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Một ngày ở Đê Ba' (SGK Tiếng Việt 5 Chân trời sáng tạo, 121). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Một ngày ở Đê Ba' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Một ngày ở Đê Ba' trong chủ điểm 'CỘNG ĐỒNG GẮN BÓ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Một ngày ở Đê Ba' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 2: Một ngày ở Đê Ba' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b56",
      "lessonNumber": 2,
      "title": "Bài 2: Một ngày ở Đê Ba",
      "topic": "CỘNG ĐỒNG GẮN BÓ",
      "volume": 1,
      "semester": 1,
      "week": 14,
      "pages": "121",
      "reading": {
        "title": "Một ngày ở Đê Ba",
        "pages": "121",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Một ngày ở Đê Ba' (SGK Tiếng Việt 5 Chân trời sáng tạo, 121). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Một ngày ở Đê Ba' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Một ngày ở Đê Ba' trong chủ điểm 'CỘNG ĐỒNG GẮN BÓ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Một ngày ở Đê Ba' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 2: Một ngày ở Đê Ba' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b57",
      "lessonNumber": 2,
      "title": "Bài 2: Một ngày ở Đê Ba",
      "topic": "CỘNG ĐỒNG GẮN BÓ",
      "volume": 1,
      "semester": 1,
      "week": 14,
      "pages": "122",
      "reading": {
        "title": "Trao đổi ý kiến với người thân Chung tay vì cộng đồng",
        "pages": "122",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Trao đổi ý kiến với người thân Chung tay vì cộng đồng' (SGK Tiếng Việt 5 Chân trời sáng tạo, 122). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Trao đổi ý kiến với người thân Chung tay vì cộng đồng' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Trao đổi ý kiến với người thân Chung tay vì cộng đồng' trong chủ điểm 'CỘNG ĐỒNG GẮN BÓ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Một ngày ở Đê Ba' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 2: Một ngày ở Đê Ba' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b58",
      "lessonNumber": 2,
      "title": "Bài 2: Một ngày ở Đê Ba",
      "topic": "CỘNG ĐỒNG GẮN BÓ",
      "volume": 1,
      "semester": 1,
      "week": 14,
      "pages": "123",
      "reading": {
        "title": "Luyện tập tìm ý, lập dàn ý cho bài văn kể chuyện sáng tạo (tiếp theo)",
        "pages": "123",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Luyện tập tìm ý, lập dàn ý cho bài văn kể chuyện sáng tạo (tiếp theo)' (SGK Tiếng Việt 5 Chân trời sáng tạo, 123). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Luyện tập tìm ý, lập dàn ý cho bài văn kể chuyện sáng tạo (tiếp theo)' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Luyện tập tìm ý, lập dàn ý cho bài văn kể chuyện sáng tạo (tiếp theo)' trong chủ điểm 'CỘNG ĐỒNG GẮN BÓ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Một ngày ở Đê Ba' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 2: Một ngày ở Đê Ba' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b59",
      "lessonNumber": 3,
      "title": "Bài 3: Ca dao về lễ hội",
      "topic": "CỘNG ĐỒNG GẮN BÓ",
      "volume": 1,
      "semester": 1,
      "week": 15,
      "pages": "125",
      "reading": {
        "title": "Ca dao về lễ hội",
        "pages": "125",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ca dao về lễ hội' (SGK Tiếng Việt 5 Chân trời sáng tạo, 125). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ca dao về lễ hội' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ca dao về lễ hội' trong chủ điểm 'CỘNG ĐỒNG GẮN BÓ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Ca dao về lễ hội' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 3: Ca dao về lễ hội' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b60",
      "lessonNumber": 3,
      "title": "Bài 3: Ca dao về lễ hội",
      "topic": "CỘNG ĐỒNG GẮN BÓ",
      "volume": 1,
      "semester": 1,
      "week": 15,
      "pages": "125",
      "reading": {
        "title": "Ca dao về lễ hội",
        "pages": "125",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ca dao về lễ hội' (SGK Tiếng Việt 5 Chân trời sáng tạo, 125). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ca dao về lễ hội' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ca dao về lễ hội' trong chủ điểm 'CỘNG ĐỒNG GẮN BÓ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Ca dao về lễ hội' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 3: Ca dao về lễ hội' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b61",
      "lessonNumber": 3,
      "title": "Bài 3: Ca dao về lễ hội",
      "topic": "CỘNG ĐỒNG GẮN BÓ",
      "volume": 1,
      "semester": 1,
      "week": 15,
      "pages": "128",
      "reading": {
        "title": "Luyện tập về kết từ",
        "pages": "128",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Luyện tập về kết từ' (SGK Tiếng Việt 5 Chân trời sáng tạo, 128). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Luyện tập về kết từ' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Luyện tập về kết từ' trong chủ điểm 'CỘNG ĐỒNG GẮN BÓ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Ca dao về lễ hội' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 3: Ca dao về lễ hội' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b62",
      "lessonNumber": 3,
      "title": "Bài 3: Ca dao về lễ hội",
      "topic": "CỘNG ĐỒNG GẮN BÓ",
      "volume": 1,
      "semester": 1,
      "week": 15,
      "pages": "129",
      "reading": {
        "title": "Trả bài văn kể chuyện sáng tạo (Bài viết số 2)",
        "pages": "129",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Trả bài văn kể chuyện sáng tạo (Bài viết số 2)' (SGK Tiếng Việt 5 Chân trời sáng tạo, 129). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Trả bài văn kể chuyện sáng tạo (Bài viết số 2)' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Trả bài văn kể chuyện sáng tạo (Bài viết số 2)' trong chủ điểm 'CỘNG ĐỒNG GẮN BÓ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Ca dao về lễ hội' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 3: Ca dao về lễ hội' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b63",
      "lessonNumber": 4,
      "title": "Bài 4: Ngày xuân Phố Cáo",
      "topic": "Ngày xuân Phố Cáo",
      "volume": 1,
      "semester": 1,
      "week": 16,
      "pages": "130",
      "reading": {
        "title": "Ngày xuân Phố Cáo",
        "pages": "130",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ngày xuân Phố Cáo' (SGK Tiếng Việt 5 Chân trời sáng tạo, 130). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Luyện tập về kết từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Luyện tập về kết từ trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết bài văn kể chuyện sáng tạo (Bài viết số 3)",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Viết bài văn kể chuyện sáng tạo (Bài viết số 3)."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ngày xuân Phố Cáo' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ngày xuân Phố Cáo' trong chủ điểm 'Ngày xuân Phố Cáo' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: Ngày xuân Phố Cáo' (Luyện tập về kết từ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Luyện tập về kết từ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 4: Ngày xuân Phố Cáo' và nội dung Tập làm văn (Viết bài văn kể chuyện sáng tạo (Bài viết số 3)), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b64",
      "lessonNumber": 5,
      "title": "Bài 5: Những lá thư",
      "topic": "Những lá thư",
      "volume": 1,
      "semester": 1,
      "week": 16,
      "pages": "133",
      "reading": {
        "title": "Những lá thư",
        "pages": "133",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Những lá thư' (SGK Tiếng Việt 5 Chân trời sáng tạo, 133). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Luyện tập về đại từ và kết từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Luyện tập về đại từ và kết từ trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Đoạn văn giới thiệu nhân vật trong phim hoạt hình",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Đoạn văn giới thiệu nhân vật trong phim hoạt hình."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Những lá thư' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Những lá thư' trong chủ điểm 'Những lá thư' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Những lá thư' (Luyện tập về đại từ và kết từ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Luyện tập về đại từ và kết từ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 5: Những lá thư' và nội dung Tập làm văn (Đoạn văn giới thiệu nhân vật trong phim hoạt hình), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b65",
      "lessonNumber": 6,
      "title": "Bài 6: Ngôi nhà chung của buôn làng",
      "topic": "Ngôi nhà chung của buôn làng",
      "volume": 1,
      "semester": 1,
      "week": 16,
      "pages": "137",
      "reading": {
        "title": "Ngôi nhà chung của buôn làng",
        "pages": "137",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ngôi nhà chung của buôn làng' (SGK Tiếng Việt 5 Chân trời sáng tạo, 137). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Tìm ý cho đoạn văn giới thiệu nhân vật trong phim hoạt hình",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Tìm ý cho đoạn văn giới thiệu nhân vật trong phim hoạt hình."
      },
      "speakingAndListening": {
        "topic": "Giới thiệu về một hoạt động cộng đồng"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ngôi nhà chung của buôn làng' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ngôi nhà chung của buôn làng' trong chủ điểm 'Ngôi nhà chung của buôn làng' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 6: Ngôi nhà chung của buôn làng' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 6: Ngôi nhà chung của buôn làng' và nội dung Tập làm văn (Tìm ý cho đoạn văn giới thiệu nhân vật trong phim hoạt hình), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b66",
      "lessonNumber": 7,
      "title": "Bài 7: Dáng hình ngọn gió",
      "topic": "Dáng hình ngọn gió",
      "volume": 1,
      "semester": 1,
      "week": 17,
      "pages": "140",
      "reading": {
        "title": "Dáng hình ngọn gió",
        "pages": "140",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Dáng hình ngọn gió' (SGK Tiếng Việt 5 Chân trời sáng tạo, 140). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Luyện tập sử dụng từ ngữ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Luyện tập sử dụng từ ngữ trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Trả bài văn kể chuyện sáng tạo (Bài viết số 3)",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Trả bài văn kể chuyện sáng tạo (Bài viết số 3)."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Dáng hình ngọn gió' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Dáng hình ngọn gió' trong chủ điểm 'Dáng hình ngọn gió' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 7: Dáng hình ngọn gió' (Luyện tập sử dụng từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Luyện tập sử dụng từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 7: Dáng hình ngọn gió' và nội dung Tập làm văn (Trả bài văn kể chuyện sáng tạo (Bài viết số 3)), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b67",
      "lessonNumber": 8,
      "title": "Bài 8: Từ những cánh đồng xanh",
      "topic": "Từ những cánh đồng xanh",
      "volume": 1,
      "semester": 1,
      "week": 17,
      "pages": "144",
      "reading": {
        "title": "Từ những cánh đồng xanh",
        "pages": "144",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Từ những cánh đồng xanh' (SGK Tiếng Việt 5 Chân trời sáng tạo, 144). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Mở rộng vốn từ Cộng đồng",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Mở rộng vốn từ Cộng đồng trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn giới thiệu nhân vật trong phim hoạt hình",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Viết đoạn văn giới thiệu nhân vật trong phim hoạt hình."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Từ những cánh đồng xanh' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Từ những cánh đồng xanh' trong chủ điểm 'Từ những cánh đồng xanh' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 8: Từ những cánh đồng xanh' (Mở rộng vốn từ Cộng đồng) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Mở rộng vốn từ Cộng đồng giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 8: Từ những cánh đồng xanh' và nội dung Tập làm văn (Viết đoạn văn giới thiệu nhân vật trong phim hoạt hình), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b68",
      "lessonNumber": 68,
      "title": "ÔN TẬP CUỐI HỌC KÌ I",
      "topic": "ÔN TẬP CUỐI HỌC KÌ I",
      "volume": 1,
      "semester": 1,
      "week": 18,
      "pages": "148",
      "reading": {
        "title": "ÔN TẬP CUỐI HỌC KÌ I",
        "pages": "148",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'ÔN TẬP CUỐI HỌC KÌ I' (SGK Tiếng Việt 5 Chân trời sáng tạo, 148). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'ÔN TẬP CUỐI HỌC KÌ I' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'ÔN TẬP CUỐI HỌC KÌ I' trong chủ điểm 'ÔN TẬP CUỐI HỌC KÌ I' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'ÔN TẬP CUỐI HỌC KÌ I' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'ÔN TẬP CUỐI HỌC KÌ I' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b69",
      "lessonNumber": 69,
      "title": "Một số thuật ngữ dùng trong sách",
      "topic": "Một số thuật ngữ dùng trong sách",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "155",
      "reading": {
        "title": "Một số thuật ngữ dùng trong sách",
        "pages": "155",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Một số thuật ngữ dùng trong sách' (SGK Tiếng Việt 5 Chân trời sáng tạo, 155). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Một số thuật ngữ dùng trong sách' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Một số thuật ngữ dùng trong sách' trong chủ điểm 'Một số thuật ngữ dùng trong sách' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Một số thuật ngữ dùng trong sách' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Một số thuật ngữ dùng trong sách' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b70",
      "lessonNumber": 70,
      "title": "Bảng tra cứu tên riêng nước ngoài",
      "topic": "Bảng tra cứu tên riêng nước ngoài",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "156",
      "reading": {
        "title": "Bảng tra cứu tên riêng nước ngoài",
        "pages": "156",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Bảng tra cứu tên riêng nước ngoài' (SGK Tiếng Việt 5 Chân trời sáng tạo, 156). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Bảng tra cứu tên riêng nước ngoài' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Bảng tra cứu tên riêng nước ngoài' trong chủ điểm 'Bảng tra cứu tên riêng nước ngoài' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bảng tra cứu tên riêng nước ngoài' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bảng tra cứu tên riêng nước ngoài' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b71",
      "lessonNumber": 1,
      "title": "Bài 1: Điều kì diệu dưới những gốc anh đào",
      "topic": "GIỮ MÃI MÀU XANH",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "8",
      "reading": {
        "title": "Điều kì diệu dưới những gốc anh đào",
        "pages": "8",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Điều kì diệu dưới những gốc anh đào' (SGK Tiếng Việt 5 Chân trời sáng tạo, 8). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Câu đơn và câu ghép",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Câu đơn và câu ghép trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Bài văn tả người",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Bài văn tả người."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Điều kì diệu dưới những gốc anh đào' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Điều kì diệu dưới những gốc anh đào' trong chủ điểm 'GIỮ MÃI MÀU XANH' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Điều kì diệu dưới những gốc anh đào' (Câu đơn và câu ghép) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Câu đơn và câu ghép giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 1: Điều kì diệu dưới những gốc anh đào' và nội dung Tập làm văn (Bài văn tả người), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b72",
      "lessonNumber": 2,
      "title": "Bài 2: Giờ Trái Đất",
      "topic": "GIỮ MÃI MÀU XANH",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "13",
      "reading": {
        "title": "Giờ Trái Đất",
        "pages": "13",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Giờ Trái Đất' (SGK Tiếng Việt 5 Chân trời sáng tạo, 13). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Quan sát, tìm ý cho bài văn tả người",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Quan sát, tìm ý cho bài văn tả người."
      },
      "speakingAndListening": {
        "topic": "Thảo luận theo chủ đề Vì môi trường xanh"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Giờ Trái Đất' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Giờ Trái Đất' trong chủ điểm 'GIỮ MÃI MÀU XANH' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Giờ Trái Đất' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 2: Giờ Trái Đất' và nội dung Tập làm văn (Quan sát, tìm ý cho bài văn tả người), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b73",
      "lessonNumber": 3,
      "title": "Bài 3: Mùa xuân em đi trồng cây",
      "topic": "GIỮ MÃI MÀU XANH",
      "volume": 2,
      "semester": 2,
      "week": 20,
      "pages": "17",
      "reading": {
        "title": "Mùa xuân em đi trồng cây",
        "pages": "17",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Mùa xuân em đi trồng cây' (SGK Tiếng Việt 5 Chân trời sáng tạo, 17). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Cách nối các vế trong câu ghép",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Cách nối các vế trong câu ghép trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Lập dàn ý cho bài văn tả người",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Lập dàn ý cho bài văn tả người."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Mùa xuân em đi trồng cây' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Mùa xuân em đi trồng cây' trong chủ điểm 'GIỮ MÃI MÀU XANH' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Mùa xuân em đi trồng cây' (Cách nối các vế trong câu ghép) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Cách nối các vế trong câu ghép giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 3: Mùa xuân em đi trồng cây' và nội dung Tập làm văn (Lập dàn ý cho bài văn tả người), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b74",
      "lessonNumber": 4,
      "title": "Bài 4: Rừng xuân",
      "topic": "GIỮ MÃI MÀU XANH",
      "volume": 2,
      "semester": 2,
      "week": 20,
      "pages": "22",
      "reading": {
        "title": "Rừng xuân",
        "pages": "22",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Rừng xuân' (SGK Tiếng Việt 5 Chân trời sáng tạo, 22). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Luyện tập về cách nối các vế trong câu ghép",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Luyện tập về cách nối các vế trong câu ghép trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn mở bài cho bài văn tả người",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Viết đoạn mở bài cho bài văn tả người."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Rừng xuân' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Rừng xuân' trong chủ điểm 'GIỮ MÃI MÀU XANH' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: Rừng xuân' (Luyện tập về cách nối các vế trong câu ghép) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Luyện tập về cách nối các vế trong câu ghép giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 4: Rừng xuân' và nội dung Tập làm văn (Viết đoạn mở bài cho bài văn tả người), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b75",
      "lessonNumber": 5,
      "title": "Bài 5: Bầy chim mùa xuân",
      "topic": "GIỮ MÃI MÀU XANH",
      "volume": 2,
      "semester": 2,
      "week": 20,
      "pages": "26",
      "reading": {
        "title": "Bầy chim mùa xuân",
        "pages": "26",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Bầy chim mùa xuân' (SGK Tiếng Việt 5 Chân trời sáng tạo, 26). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Luyện tập về cách nối các vế trong câu ghép",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Luyện tập về cách nối các vế trong câu ghép trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn cho bài văn tả người",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Viết đoạn văn cho bài văn tả người."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Bầy chim mùa xuân' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Bầy chim mùa xuân' trong chủ điểm 'GIỮ MÃI MÀU XANH' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Bầy chim mùa xuân' (Luyện tập về cách nối các vế trong câu ghép) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Luyện tập về cách nối các vế trong câu ghép giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 5: Bầy chim mùa xuân' và nội dung Tập làm văn (Viết đoạn văn cho bài văn tả người), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b76",
      "lessonNumber": 6,
      "title": "Bài 6: Thiên đường của các loài động vật hoang dã",
      "topic": "GIỮ MÃI MÀU XANH",
      "volume": 2,
      "semester": 2,
      "week": 21,
      "pages": "30",
      "reading": {
        "title": "Thiên đường của các loài động vật hoang dã",
        "pages": "30",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Thiên đường của các loài động vật hoang dã' (SGK Tiếng Việt 5 Chân trời sáng tạo, 30). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn kết bài cho bài văn tả người",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Viết đoạn kết bài cho bài văn tả người."
      },
      "speakingAndListening": {
        "topic": "Trao đổi ý kiến với người thân Trồng và chăm sóc cây cối, vật nuôi"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Thiên đường của các loài động vật hoang dã' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Thiên đường của các loài động vật hoang dã' trong chủ điểm 'GIỮ MÃI MÀU XANH' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 6: Thiên đường của các loài động vật hoang dã' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 6: Thiên đường của các loài động vật hoang dã' và nội dung Tập làm văn (Viết đoạn kết bài cho bài văn tả người), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b77",
      "lessonNumber": 7,
      "title": "Bài 7: Lộc vừng mùa xuân",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 2,
      "semester": 2,
      "week": 22,
      "pages": "33",
      "reading": {
        "title": "Lộc vừng mùa xuân",
        "pages": "33",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Lộc vừng mùa xuân' (SGK Tiếng Việt 5 Chân trời sáng tạo, 33). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Luyện tập về cách nối các vế trong câu ghép",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Luyện tập về cách nối các vế trong câu ghép trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết bài văn tả người (Bài viết số 1)",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Viết bài văn tả người (Bài viết số 1)."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Lộc vừng mùa xuân' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Lộc vừng mùa xuân' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 7: Lộc vừng mùa xuân' (Luyện tập về cách nối các vế trong câu ghép) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Luyện tập về cách nối các vế trong câu ghép giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 7: Lộc vừng mùa xuân' và nội dung Tập làm văn (Viết bài văn tả người (Bài viết số 1)), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b78",
      "lessonNumber": 8,
      "title": "Bài 8: Dưới những tán xanh",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 2,
      "semester": 2,
      "week": 22,
      "pages": "37",
      "reading": {
        "title": "Dưới những tán xanh",
        "pages": "37",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Dưới những tán xanh' (SGK Tiếng Việt 5 Chân trời sáng tạo, 37). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Mở rộng vốn từ Môi trường",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Mở rộng vốn từ Môi trường trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Luyện tập quan sát, tìm ý cho bài văn tả người",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Luyện tập quan sát, tìm ý cho bài văn tả người."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Dưới những tán xanh' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Dưới những tán xanh' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 8: Dưới những tán xanh' (Mở rộng vốn từ Môi trường) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Mở rộng vốn từ Môi trường giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 8: Dưới những tán xanh' và nội dung Tập làm văn (Luyện tập quan sát, tìm ý cho bài văn tả người), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b79",
      "lessonNumber": 1,
      "title": "Bài 1: Sự tích con Rồng cháu Tiên",
      "topic": "ĐẤT NƯỚC NGÀN NĂM",
      "volume": 2,
      "semester": 2,
      "week": 23,
      "pages": "42",
      "reading": {
        "title": "Sự tích con Rồng cháu Tiên",
        "pages": "42",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Sự tích con Rồng cháu Tiên' (SGK Tiếng Việt 5 Chân trời sáng tạo, 42). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Luyện tập về câu ghép",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Luyện tập về câu ghép trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Luyện tập lập dàn ý cho bài văn tả người",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Luyện tập lập dàn ý cho bài văn tả người."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Sự tích con Rồng cháu Tiên' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Sự tích con Rồng cháu Tiên' trong chủ điểm 'ĐẤT NƯỚC NGÀN NĂM' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Sự tích con Rồng cháu Tiên' (Luyện tập về câu ghép) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Luyện tập về câu ghép giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 1: Sự tích con Rồng cháu Tiên' và nội dung Tập làm văn (Luyện tập lập dàn ý cho bài văn tả người), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b80",
      "lessonNumber": 2,
      "title": "Bài 2: Những con mắt của biển",
      "topic": "ĐẤT NƯỚC NGÀN NĂM",
      "volume": 2,
      "semester": 2,
      "week": 23,
      "pages": "47",
      "reading": {
        "title": "Những con mắt của biển",
        "pages": "47",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Những con mắt của biển' (SGK Tiếng Việt 5 Chân trời sáng tạo, 47). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Trả bài văn tả người (Bài viết số 1)",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Trả bài văn tả người (Bài viết số 1)."
      },
      "speakingAndListening": {
        "topic": "Giới thiệu về một nét đẹp truyền thống"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Những con mắt của biển' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Những con mắt của biển' trong chủ điểm 'ĐẤT NƯỚC NGÀN NĂM' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Những con mắt của biển' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 2: Những con mắt của biển' và nội dung Tập làm văn (Trả bài văn tả người (Bài viết số 1)), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b81",
      "lessonNumber": 3,
      "title": "Bài 3: Ngàn lời sử xanh",
      "topic": "ĐẤT NƯỚC NGÀN NĂM",
      "volume": 2,
      "semester": 2,
      "week": 24,
      "pages": "51",
      "reading": {
        "title": "Ngàn lời sử xanh",
        "pages": "51",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ngàn lời sử xanh' (SGK Tiếng Việt 5 Chân trời sáng tạo, 51). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Luyện tập về câu đơn và câu ghép",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Luyện tập về câu đơn và câu ghép trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Luyện tập viết đoạn văn cho bài văn tả người",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Luyện tập viết đoạn văn cho bài văn tả người."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ngàn lời sử xanh' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ngàn lời sử xanh' trong chủ điểm 'ĐẤT NƯỚC NGÀN NĂM' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Ngàn lời sử xanh' (Luyện tập về câu đơn và câu ghép) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Luyện tập về câu đơn và câu ghép giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 3: Ngàn lời sử xanh' và nội dung Tập làm văn (Luyện tập viết đoạn văn cho bài văn tả người), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b82",
      "lessonNumber": 4,
      "title": "Bài 4: Vịnh Hạ Long",
      "topic": "ĐẤT NƯỚC NGÀN NĂM",
      "volume": 2,
      "semester": 2,
      "week": 24,
      "pages": "56",
      "reading": {
        "title": "Vịnh Hạ Long",
        "pages": "56",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Vịnh Hạ Long' (SGK Tiếng Việt 5 Chân trời sáng tạo, 56). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Biện pháp điệp từ, điệp ngữ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Biện pháp điệp từ, điệp ngữ trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết bài văn tả người (Bài viết số 2)",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Viết bài văn tả người (Bài viết số 2)."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Vịnh Hạ Long' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Vịnh Hạ Long' trong chủ điểm 'ĐẤT NƯỚC NGÀN NĂM' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: Vịnh Hạ Long' (Biện pháp điệp từ, điệp ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Biện pháp điệp từ, điệp ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 4: Vịnh Hạ Long' và nội dung Tập làm văn (Viết bài văn tả người (Bài viết số 2)), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b83",
      "lessonNumber": 5,
      "title": "Bài 5: Ông Trạng Nồi",
      "topic": "ĐẤT NƯỚC NGÀN NĂM",
      "volume": 2,
      "semester": 2,
      "week": 25,
      "pages": "60",
      "reading": {
        "title": "Ông Trạng Nồi",
        "pages": "60",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ông Trạng Nồi' (SGK Tiếng Việt 5 Chân trời sáng tạo, 60). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Luyện tập về biện pháp điệp từ, điệp ngữ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Luyện tập về biện pháp điệp từ, điệp ngữ trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Đoạn văn thể hiện tình cảm, cảm xúc trước một sự việc",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Đoạn văn thể hiện tình cảm, cảm xúc trước một sự việc."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ông Trạng Nồi' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ông Trạng Nồi' trong chủ điểm 'ĐẤT NƯỚC NGÀN NĂM' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Ông Trạng Nồi' (Luyện tập về biện pháp điệp từ, điệp ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Luyện tập về biện pháp điệp từ, điệp ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 5: Ông Trạng Nồi' và nội dung Tập làm văn (Đoạn văn thể hiện tình cảm, cảm xúc trước một sự việc), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b84",
      "lessonNumber": 6,
      "title": "Bài 6: Một bản hùng ca",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 2,
      "semester": 2,
      "week": 26,
      "pages": "65",
      "reading": {
        "title": "Một bản hùng ca",
        "pages": "65",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Một bản hùng ca' (SGK Tiếng Việt 5 Chân trời sáng tạo, 65). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Tìm ý cho đoạn văn thể hiện tình cảm, cảm xúc trước một sự việc",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Tìm ý cho đoạn văn thể hiện tình cảm, cảm xúc trước một sự việc."
      },
      "speakingAndListening": {
        "topic": "Giới thiệu về một di tích hoặc danh lam thắng cảnh"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Một bản hùng ca' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Một bản hùng ca' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 6: Một bản hùng ca' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 6: Một bản hùng ca' và nội dung Tập làm văn (Tìm ý cho đoạn văn thể hiện tình cảm, cảm xúc trước một sự việc), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b85",
      "lessonNumber": 7,
      "title": "Bài 7: Việt Nam",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 2,
      "semester": 2,
      "week": 26,
      "pages": "69",
      "reading": {
        "title": "Việt Nam",
        "pages": "69",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Việt Nam' (SGK Tiếng Việt 5 Chân trời sáng tạo, 69). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Dấu gạch ngang",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Dấu gạch ngang trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Trả bài văn tả người (Bài viết số 2)",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Trả bài văn tả người (Bài viết số 2)."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Việt Nam' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Việt Nam' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 7: Việt Nam' (Dấu gạch ngang) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Dấu gạch ngang giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 7: Việt Nam' và nội dung Tập làm văn (Trả bài văn tả người (Bài viết số 2)), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b86",
      "lessonNumber": 8,
      "title": "Bài 8: Tranh làng Hồ",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 2,
      "semester": 2,
      "week": 26,
      "pages": "74",
      "reading": {
        "title": "Tranh làng Hồ",
        "pages": "74",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Tranh làng Hồ' (SGK Tiếng Việt 5 Chân trời sáng tạo, 74). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Mở rộng vốn từ Đất nước",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Mở rộng vốn từ Đất nước trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn thể hiện tình cảm, cảm xúc trước một sự việc",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Viết đoạn văn thể hiện tình cảm, cảm xúc trước một sự việc."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Tranh làng Hồ' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Tranh làng Hồ' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 8: Tranh làng Hồ' (Mở rộng vốn từ Đất nước) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Mở rộng vốn từ Đất nước giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 8: Tranh làng Hồ' và nội dung Tập làm văn (Viết đoạn văn thể hiện tình cảm, cảm xúc trước một sự việc), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b87",
      "lessonNumber": 87,
      "title": "ÔN TẬP GIỮA HỌC KÌ II",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 2,
      "semester": 2,
      "week": 27,
      "pages": "78",
      "reading": {
        "title": "ÔN TẬP GIỮA HỌC KÌ II",
        "pages": "78",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'ÔN TẬP GIỮA HỌC KÌ II' (SGK Tiếng Việt 5 Chân trời sáng tạo, 78). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'ÔN TẬP GIỮA HỌC KÌ II' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'ÔN TẬP GIỮA HỌC KÌ II' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'ÔN TẬP GIỮA HỌC KÌ II' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'ÔN TẬP GIỮA HỌC KÌ II' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b88",
      "lessonNumber": 1,
      "title": "Bài 1: Vì đại dương trong xanh",
      "topic": "KHÚC CA HOÀ BÌNH",
      "volume": 2,
      "semester": 2,
      "week": 28,
      "pages": "85",
      "reading": {
        "title": "Vì đại dương trong xanh",
        "pages": "85",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Vì đại dương trong xanh' (SGK Tiếng Việt 5 Chân trời sáng tạo, 85). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Luyện tập về dấu gạch ngang",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Luyện tập về dấu gạch ngang trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Vì đại dương trong xanh' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Vì đại dương trong xanh' trong chủ điểm 'KHÚC CA HOÀ BÌNH' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Vì đại dương trong xanh' (Luyện tập về dấu gạch ngang) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Luyện tập về dấu gạch ngang giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 1: Vì đại dương trong xanh' và nội dung Tập làm văn (Đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b89",
      "lessonNumber": 2,
      "title": "Bài 2: Thành phố Vì hoà bình",
      "topic": "KHÚC CA HOÀ BÌNH",
      "volume": 2,
      "semester": 2,
      "week": 28,
      "pages": "90",
      "reading": {
        "title": "Thành phố Vì hoà bình",
        "pages": "90",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Thành phố Vì hoà bình' (SGK Tiếng Việt 5 Chân trời sáng tạo, 90). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Tìm ý cho đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Tìm ý cho đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện."
      },
      "speakingAndListening": {
        "topic": "Nói về cuộc sống thanh bình"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Thành phố Vì hoà bình' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Thành phố Vì hoà bình' trong chủ điểm 'KHÚC CA HOÀ BÌNH' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Thành phố Vì hoà bình' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 2: Thành phố Vì hoà bình' và nội dung Tập làm văn (Tìm ý cho đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b90",
      "lessonNumber": 3,
      "title": "Bài 3: Bài ca Trái Đất",
      "topic": "KHÚC CA HOÀ BÌNH",
      "volume": 2,
      "semester": 2,
      "week": 29,
      "pages": "93",
      "reading": {
        "title": "Bài ca Trái Đất",
        "pages": "93",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Bài ca Trái Đất' (SGK Tiếng Việt 5 Chân trời sáng tạo, 93). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Liên kết các câu trong đoạn văn bằng cách lặp từ ngữ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Liên kết các câu trong đoạn văn bằng cách lặp từ ngữ trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Viết đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Bài ca Trái Đất' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Bài ca Trái Đất' trong chủ điểm 'KHÚC CA HOÀ BÌNH' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Bài ca Trái Đất' (Liên kết các câu trong đoạn văn bằng cách lặp từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Liên kết các câu trong đoạn văn bằng cách lặp từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 3: Bài ca Trái Đất' và nội dung Tập làm văn (Viết đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b91",
      "lessonNumber": 4,
      "title": "Bài 4: Miền đất xanh",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 2,
      "semester": 2,
      "week": 30,
      "pages": "98",
      "reading": {
        "title": "Miền đất xanh",
        "pages": "98",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Miền đất xanh' (SGK Tiếng Việt 5 Chân trời sáng tạo, 98). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Liên kết các câu trong đoạn văn bằng cách thay thế từ ngữ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Liên kết các câu trong đoạn văn bằng cách thay thế từ ngữ trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Miền đất xanh' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Miền đất xanh' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: Miền đất xanh' (Liên kết các câu trong đoạn văn bằng cách thay thế từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Liên kết các câu trong đoạn văn bằng cách thay thế từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 4: Miền đất xanh' và nội dung Tập làm văn (Đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b92",
      "lessonNumber": 5,
      "title": "Bài 5: Những con hạc giấy",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 2,
      "semester": 2,
      "week": 30,
      "pages": "102",
      "reading": {
        "title": "Những con hạc giấy",
        "pages": "102",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Những con hạc giấy' (SGK Tiếng Việt 5 Chân trời sáng tạo, 102). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Liên kết các câu trong đoạn văn bằng cách dùng từ ngữ nối",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Liên kết các câu trong đoạn văn bằng cách dùng từ ngữ nối trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Tìm ý cho đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Tìm ý cho đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Những con hạc giấy' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Những con hạc giấy' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Những con hạc giấy' (Liên kết các câu trong đoạn văn bằng cách dùng từ ngữ nối) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Liên kết các câu trong đoạn văn bằng cách dùng từ ngữ nối giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 5: Những con hạc giấy' và nội dung Tập làm văn (Tìm ý cho đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b93",
      "lessonNumber": 6,
      "title": "Bài 6: Lễ hội đèn lồng nổi",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 2,
      "semester": 2,
      "week": 30,
      "pages": "106",
      "reading": {
        "title": "Lễ hội đèn lồng nổi",
        "pages": "106",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Lễ hội đèn lồng nổi' (SGK Tiếng Việt 5 Chân trời sáng tạo, 106). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Viết đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ."
      },
      "speakingAndListening": {
        "topic": "Thảo luận theo chủ đề Bạn bè mến thương"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Lễ hội đèn lồng nổi' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Lễ hội đèn lồng nổi' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 6: Lễ hội đèn lồng nổi' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 6: Lễ hội đèn lồng nổi' và nội dung Tập làm văn (Viết đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b94",
      "lessonNumber": 7,
      "title": "Bài 7: Theo chân Bác",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 2,
      "semester": 2,
      "week": 31,
      "pages": "109",
      "reading": {
        "title": "Theo chân Bác",
        "pages": "109",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Theo chân Bác' (SGK Tiếng Việt 5 Chân trời sáng tạo, 109). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Luyện tập về liên kết câu trong đoạn văn",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Luyện tập về liên kết câu trong đoạn văn trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Đoạn văn giới thiệu về nhân vật trong một cuốn sách đã đọc",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Đoạn văn giới thiệu về nhân vật trong một cuốn sách đã đọc."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Theo chân Bác' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Theo chân Bác' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 7: Theo chân Bác' (Luyện tập về liên kết câu trong đoạn văn) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Luyện tập về liên kết câu trong đoạn văn giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 7: Theo chân Bác' và nội dung Tập làm văn (Đoạn văn giới thiệu về nhân vật trong một cuốn sách đã đọc), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b95",
      "lessonNumber": 8,
      "title": "Bài 8: Sự sụp đổ của chế độ a-pác-thai",
      "topic": "Chủ điểm học tập Khối 5",
      "volume": 2,
      "semester": 2,
      "week": 31,
      "pages": "114",
      "reading": {
        "title": "Sự sụp đổ của chế độ a-pác-thai",
        "pages": "114",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Sự sụp đổ của chế độ a-pác-thai' (SGK Tiếng Việt 5 Chân trời sáng tạo, 114). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Mở rộng vốn từ Hoà bình",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Mở rộng vốn từ Hoà bình trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Tìm ý cho đoạn văn giới thiệu về nhân vật trong một cuốn sách đã đọc",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Tìm ý cho đoạn văn giới thiệu về nhân vật trong một cuốn sách đã đọc."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Sự sụp đổ của chế độ a-pác-thai' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Sự sụp đổ của chế độ a-pác-thai' trong chủ điểm 'Chủ điểm học tập Khối 5' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 8: Sự sụp đổ của chế độ a-pác-thai' (Mở rộng vốn từ Hoà bình) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Mở rộng vốn từ Hoà bình giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 8: Sự sụp đổ của chế độ a-pác-thai' và nội dung Tập làm văn (Tìm ý cho đoạn văn giới thiệu về nhân vật trong một cuốn sách đã đọc), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b96",
      "lessonNumber": 1,
      "title": "Bài 1: Lời hứa",
      "topic": "CHÂN TRỜI RỘNG MỞ",
      "volume": 2,
      "semester": 2,
      "week": 32,
      "pages": "117",
      "reading": {
        "title": "Lời hứa",
        "pages": "117",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Lời hứa' (SGK Tiếng Việt 5 Chân trời sáng tạo, 117). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Viết tên người, tên địa lí nước ngoài",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Viết tên người, tên địa lí nước ngoài trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn giới thiệu về nhân vật trong một cuốn sách đã đọc",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Viết đoạn văn giới thiệu về nhân vật trong một cuốn sách đã đọc."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Lời hứa' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Lời hứa' trong chủ điểm 'CHÂN TRỜI RỘNG MỞ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Lời hứa' (Viết tên người, tên địa lí nước ngoài) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Viết tên người, tên địa lí nước ngoài giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 1: Lời hứa' và nội dung Tập làm văn (Viết đoạn văn giới thiệu về nhân vật trong một cuốn sách đã đọc), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b97",
      "lessonNumber": 2,
      "title": "Bài 2: Chiền chiện bay lên",
      "topic": "CHÂN TRỜI RỘNG MỞ",
      "volume": 2,
      "semester": 2,
      "week": 32,
      "pages": "121",
      "reading": {
        "title": "Chiền chiện bay lên",
        "pages": "121",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Chiền chiện bay lên' (SGK Tiếng Việt 5 Chân trời sáng tạo, 121). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Đoạn văn nêu lí do tán thành hoặc phản đối một hiện tượng, sự việc",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Đoạn văn nêu lí do tán thành hoặc phản đối một hiện tượng, sự việc."
      },
      "speakingAndListening": {
        "topic": "Giới thiệu một địa điểm vui chơi"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Chiền chiện bay lên' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Chiền chiện bay lên' trong chủ điểm 'CHÂN TRỜI RỘNG MỞ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Chiền chiện bay lên' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 2: Chiền chiện bay lên' và nội dung Tập làm văn (Đoạn văn nêu lí do tán thành hoặc phản đối một hiện tượng, sự việc), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b98",
      "lessonNumber": 3,
      "title": "Bài 3: Thơ viết cho ngày mai",
      "topic": "Thơ viết cho ngày mai",
      "volume": 2,
      "semester": 2,
      "week": 33,
      "pages": "125",
      "reading": {
        "title": "Thơ viết cho ngày mai",
        "pages": "125",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Thơ viết cho ngày mai' (SGK Tiếng Việt 5 Chân trời sáng tạo, 125). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Luyện tập viết tên người, tên địa lí nước ngoài",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Luyện tập viết tên người, tên địa lí nước ngoài trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Tìm ý cho đoạn văn nêu lí do tán thành hoặc phản đối một hiện tượng, sự việc",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Tìm ý cho đoạn văn nêu lí do tán thành hoặc phản đối một hiện tượng, sự việc."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Thơ viết cho ngày mai' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Thơ viết cho ngày mai' trong chủ điểm 'Thơ viết cho ngày mai' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Thơ viết cho ngày mai' (Luyện tập viết tên người, tên địa lí nước ngoài) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Luyện tập viết tên người, tên địa lí nước ngoài giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 3: Thơ viết cho ngày mai' và nội dung Tập làm văn (Tìm ý cho đoạn văn nêu lí do tán thành hoặc phản đối một hiện tượng, sự việc), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b99",
      "lessonNumber": 4,
      "title": "Bài 4: Bài ca về mặt trời",
      "topic": "Bài ca về mặt trời",
      "volume": 2,
      "semester": 2,
      "week": 33,
      "pages": "129",
      "reading": {
        "title": "Bài ca về mặt trời",
        "pages": "129",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Bài ca về mặt trời' (SGK Tiếng Việt 5 Chân trời sáng tạo, 129). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Luyện tập sử dụng từ ngữ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Luyện tập sử dụng từ ngữ trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn nêu lí do tán thành hoặc phản đối một hiện tượng, sự việc (Bài viết số 1)",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Viết đoạn văn nêu lí do tán thành hoặc phản đối một hiện tượng, sự việc (Bài viết số 1)."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Bài ca về mặt trời' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Bài ca về mặt trời' trong chủ điểm 'Bài ca về mặt trời' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: Bài ca về mặt trời' (Luyện tập sử dụng từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Luyện tập sử dụng từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 4: Bài ca về mặt trời' và nội dung Tập làm văn (Viết đoạn văn nêu lí do tán thành hoặc phản đối một hiện tượng, sự việc (Bài viết số 1)), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b100",
      "lessonNumber": 5,
      "title": "Bài 5: Bên ngoài Trái Đất",
      "topic": "Bên ngoài Trái Đất",
      "volume": 2,
      "semester": 2,
      "week": 33,
      "pages": "133",
      "reading": {
        "title": "Bên ngoài Trái Đất",
        "pages": "133",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Bên ngoài Trái Đất' (SGK Tiếng Việt 5 Chân trời sáng tạo, 133). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Mở rộng vốn từ Khám phá",
        "skills": "Rèn kỹ năng nhận biết và vận dụng Mở rộng vốn từ Khám phá trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Luyện tập tìm ý cho đoạn văn nêu lí do tán thành hoặc phản đối một hiện tượng, sự việc",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Luyện tập tìm ý cho đoạn văn nêu lí do tán thành hoặc phản đối một hiện tượng, sự việc."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Bên ngoài Trái Đất' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Bên ngoài Trái Đất' trong chủ điểm 'Bên ngoài Trái Đất' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Bên ngoài Trái Đất' (Mở rộng vốn từ Khám phá) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức Mở rộng vốn từ Khám phá giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 5: Bên ngoài Trái Đất' và nội dung Tập làm văn (Luyện tập tìm ý cho đoạn văn nêu lí do tán thành hoặc phản đối một hiện tượng, sự việc), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b101",
      "lessonNumber": 6,
      "title": "Bài 6: Vào hạ",
      "topic": "Vào hạ",
      "volume": 2,
      "semester": 2,
      "week": 34,
      "pages": "137",
      "reading": {
        "title": "Vào hạ",
        "pages": "137",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Vào hạ' (SGK Tiếng Việt 5 Chân trời sáng tạo, 137). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn nêu lí do tán thành hoặc phản đối một hiện tượng, sự việc (Bài viết số 2)",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Viết đoạn văn nêu lí do tán thành hoặc phản đối một hiện tượng, sự việc (Bài viết số 2)."
      },
      "speakingAndListening": {
        "topic": "Chia sẻ theo chủ đề Điều em muốn nói"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Vào hạ' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Vào hạ' trong chủ điểm 'Vào hạ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 6: Vào hạ' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 6: Vào hạ' và nội dung Tập làm văn (Viết đoạn văn nêu lí do tán thành hoặc phản đối một hiện tượng, sự việc (Bài viết số 2)), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b102",
      "lessonNumber": 102,
      "title": "ÔN TẬP CUỐI NĂM HỌC",
      "topic": "ÔN TẬP CUỐI NĂM HỌC",
      "volume": 2,
      "semester": 2,
      "week": 35,
      "pages": "140",
      "reading": {
        "title": "ÔN TẬP CUỐI NĂM HỌC",
        "pages": "140",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'ÔN TẬP CUỐI NĂM HỌC' (SGK Tiếng Việt 5 Chân trời sáng tạo, 140). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'ÔN TẬP CUỐI NĂM HỌC' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'ÔN TẬP CUỐI NĂM HỌC' trong chủ điểm 'ÔN TẬP CUỐI NĂM HỌC' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'ÔN TẬP CUỐI NĂM HỌC' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'ÔN TẬP CUỐI NĂM HỌC' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b103",
      "lessonNumber": 103,
      "title": "Một số thuật ngữ dùng trong sách",
      "topic": "Một số thuật ngữ dùng trong sách",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "147",
      "reading": {
        "title": "Một số thuật ngữ dùng trong sách",
        "pages": "147",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Một số thuật ngữ dùng trong sách' (SGK Tiếng Việt 5 Chân trời sáng tạo, 147). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Một số thuật ngữ dùng trong sách' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Một số thuật ngữ dùng trong sách' trong chủ điểm 'Một số thuật ngữ dùng trong sách' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Một số thuật ngữ dùng trong sách' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Một số thuật ngữ dùng trong sách' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b104",
      "lessonNumber": 104,
      "title": "Bảng tra cứu tên riêng nước ngoài",
      "topic": "Bảng tra cứu tên riêng nước ngoài",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "148",
      "reading": {
        "title": "Bảng tra cứu tên riêng nước ngoài",
        "pages": "148",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Bảng tra cứu tên riêng nước ngoài' (SGK Tiếng Việt 5 Chân trời sáng tạo, 148). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Bảng tra cứu tên riêng nước ngoài' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Bảng tra cứu tên riêng nước ngoài' trong chủ điểm 'Bảng tra cứu tên riêng nước ngoài' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bảng tra cứu tên riêng nước ngoài' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bảng tra cứu tên riêng nước ngoài' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tv5_ctst_b105",
      "lessonNumber": 1,
      "title": "Bài 1: Điều kì diệu dưới những gốc anh đào",
      "topic": "GIỮ MÃI MÀU XANH",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "8",
      "reading": {
        "title": "Điều kì diệu dưới những gốc anh đào",
        "pages": "8",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Điều kì diệu dưới những gốc anh đào' (SGK Tiếng Việt 5 Chân trời sáng tạo, 8). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết đoạn văn / bài văn sáng tạo",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt theo chủ điểm bài học."
      },
      "speakingAndListening": {
        "topic": "Trao đổi, thảo luận nhóm về chủ điểm"
      },
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "section": "doc_hieu",
          "cognitive": "locate",
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Điều kì diệu dưới những gốc anh đào' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Điều kì diệu dưới những gốc anh đào' trong chủ điểm 'GIỮ MÃI MÀU XANH' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Điều kì diệu dưới những gốc anh đào' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
          "options": [
            "Giúp câu văn sinh động, gợi hình gợi cảm và diễn đạt chính xác ý nghĩ",
            "Làm cho câu văn trở nên phức tạp và khó hiểu hơn",
            "Chỉ dùng khi viết các văn bản hành chính công cộng",
            "Không có vai trò gì đáng kể trong ngữ pháp Tiếng Việt"
          ],
          "answer": 0,
          "explanation": "Kiến thức từ ngữ giúp học sinh làm giàu vốn từ và nâng cao năng lực biểu đạt nghệ thuật."
        },
        {
          "type": "TL",
          "level": 3,
          "section": "viet",
          "cognitive": "reflect",
          "question": "Dựa vào bài học 'Bài 1: Điều kì diệu dưới những gốc anh đào' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
          "guide": "Đoạn văn có kết cấu mở đoạn - thân đoạn - kết đoạn mạch lạc; liên kết câu chặt chẽ; chữ viết đúng chính tả, giàu cảm xúc.",
          "scoreRubric": {
            "maxScore": 2.0,
            "levels": [
              {
                "score": 0,
                "criteria": "Chưa viết được hoặc viết lạc đề hoàn toàn."
              },
              {
                "score": 1.0,
                "criteria": "Viết được 2 - 3 câu, còn mắc lỗi chính tả hoặc diễn đạt chưa trọn ý."
              },
              {
                "score": 2.0,
                "criteria": "Viết đủ 4 - 6 câu đúng chủ đề, dùng từ gợi cảm, câu văn mạch lạc, đúng chuẩn ngữ pháp."
              }
            ]
          }
        }
      ]
    }
  ]
};

  if (typeof window !== 'undefined') {
    window.SGK_TIENG_VIET_5_CTST = TIENG_VIET_5_CTST_DATA;
    if (window.SGK_REGISTRY && typeof window.SGK_REGISTRY.registerBook === 'function') {
      window.SGK_REGISTRY.registerBook(5, 'tieng_viet', TIENG_VIET_5_CTST_DATA, 'ctst');
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = TIENG_VIET_5_CTST_DATA;
  }
})(typeof window !== 'undefined' ? window : this);
