/**
 * SỐ HÓA SÁCH GIÁO KHOA TIẾNG VIỆT LỚP 1
 * Bộ sách: CHÂN TRỜI SÁNG TẠO (CTST)
 * Nhà xuất bản: Nhà xuất bản Giáo dục Việt Nam
 * Chuẩn Chương trình GDPT 2018 & Thông tư 27/2020/TT-BGDĐT & Chuẩn SEA-PLM
 * Số hóa 100% nội dung: Đọc hiểu, Luyện từ và câu, Viết, Nói và nghe
 */

(function(global) {
  'use strict';

  const TIENG_VIET_1_CTST_DATA = {
  "metadata": {
    "grade": 1,
    "subjectId": "tieng_viet",
    "subjectName": "Tiếng Việt",
    "bookSeries": "ctst",
    "bookName": "Tiếng Việt 1 - Chân trời sáng tạo",
    "publisher": "Nhà xuất bản Giáo dục Việt Nam",
    "totalWeeks": 35,
    "totalLessons": 161,
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
      "id": "tv1_ctst_cd1",
      "name": "Chủ đề 1: Những bài học đầu tiên",
      "semester": 1,
      "volume": 1,
      "weeks": "1"
    },
    {
      "id": "tv1_ctst_cd2",
      "name": "Chủ đề 2: Bé và bà",
      "semester": 1,
      "volume": 1,
      "weeks": "2"
    },
    {
      "id": "tv1_ctst_cd3",
      "name": "Chủ đề 3: Đi chợ",
      "semester": 1,
      "volume": 1,
      "weeks": "3"
    },
    {
      "id": "tv1_ctst_cd4",
      "name": "Chủ đề 4: Kì nghỉ",
      "semester": 1,
      "volume": 1,
      "weeks": "4"
    },
    {
      "id": "tv1_ctst_cd5",
      "name": "Chủ đề 5: Ở nhà",
      "semester": 1,
      "volume": 1,
      "weeks": "5"
    },
    {
      "id": "tv1_ctst_cd6",
      "name": "Chủ đề 6: Đi sở thú",
      "semester": 1,
      "volume": 1,
      "weeks": "6"
    },
    {
      "id": "tv1_ctst_cd7",
      "name": "Chủ đề 7: Thể thao",
      "semester": 1,
      "volume": 1,
      "weeks": "7"
    },
    {
      "id": "tv1_ctst_cd8",
      "name": "Chủ đề 8: Đồ chơi – trò chơi",
      "semester": 1,
      "volume": 1,
      "weeks": "8"
    },
    {
      "id": "tv1_ctst_cd9",
      "name": "Chủ đề 9: Vui học",
      "semester": 1,
      "volume": 1,
      "weeks": "9"
    },
    {
      "id": "tv1_ctst_cd10",
      "name": "Chủ đề 10: Ngày chủ nhật",
      "semester": 1,
      "volume": 1,
      "weeks": "10"
    },
    {
      "id": "tv1_ctst_cd11",
      "name": "Chủ đề 11: Bạn bè",
      "semester": 1,
      "volume": 1,
      "weeks": "1"
    },
    {
      "id": "tv1_ctst_cd12",
      "name": "Chủ đề 12: Trung thu",
      "semester": 1,
      "volume": 1,
      "weeks": "1"
    },
    {
      "id": "tv1_ctst_cd13",
      "name": "Chủ đề 13: Thăm quê",
      "semester": 1,
      "volume": 1,
      "weeks": "1"
    },
    {
      "id": "tv1_ctst_cd14",
      "name": "Chủ đề 14: Lớp em",
      "semester": 1,
      "volume": 1,
      "weeks": "1"
    },
    {
      "id": "tv1_ctst_cd15",
      "name": "Chủ đề 15: Sinh nhật",
      "semester": 1,
      "volume": 1,
      "weeks": "1"
    },
    {
      "id": "tv1_ctst_cd16",
      "name": "Chủ đề 16: Ước mơ",
      "semester": 1,
      "volume": 1,
      "weeks": "1"
    },
    {
      "id": "tv1_ctst_cd17",
      "name": "Chủ đề 17: Vườn ươm",
      "semester": 1,
      "volume": 1,
      "weeks": "1"
    },
    {
      "id": "tv1_ctst_cd18",
      "name": "Chủ đề 18: Những điều em đã học",
      "semester": 1,
      "volume": 1,
      "weeks": "1"
    },
    {
      "id": "tv1_ctst_cd19",
      "name": "NHỮNG BÀI HỌC ĐẦU TIÊN",
      "semester": 1,
      "volume": 1,
      "weeks": "1"
    },
    {
      "id": "tv1_ctst_cd20",
      "name": "Chủ đề 19: Ngàn hoa khoe sắc",
      "semester": 2,
      "volume": 2,
      "weeks": "1"
    },
    {
      "id": "tv1_ctst_cd21",
      "name": "Chủ đề 20: Ngày tuyệt vời",
      "semester": 2,
      "volume": 2,
      "weeks": "1"
    },
    {
      "id": "tv1_ctst_cd22",
      "name": "Chủ đề 21: Những bông hoa nhỏ",
      "semester": 2,
      "volume": 2,
      "weeks": "1"
    },
    {
      "id": "tv1_ctst_cd23",
      "name": "Chủ đề 22: Mưa và nắng",
      "semester": 2,
      "volume": 2,
      "weeks": "1"
    },
    {
      "id": "tv1_ctst_cd24",
      "name": "Chủ đề 23: Tết quê em",
      "semester": 2,
      "volume": 2,
      "weeks": "1"
    },
    {
      "id": "tv1_ctst_cd25",
      "name": "Chủ đề 24: Những người bạn đầu tiên",
      "semester": 2,
      "volume": 2,
      "weeks": "1"
    },
    {
      "id": "tv1_ctst_cd26",
      "name": "Chủ đề 25: Mẹ và cô",
      "semester": 2,
      "volume": 2,
      "weeks": "1"
    },
    {
      "id": "tv1_ctst_cd27",
      "name": "Chủ đề 26: Những người bạn im lặng",
      "semester": 2,
      "volume": 2,
      "weeks": "1"
    },
    {
      "id": "tv1_ctst_cd28",
      "name": "Chủ đề 27: Bạn cùng học cùng chơi",
      "semester": 2,
      "volume": 2,
      "weeks": "1"
    },
    {
      "id": "tv1_ctst_cd29",
      "name": "Chủ đề 28: Trong chiếc cặp của em",
      "semester": 2,
      "volume": 2,
      "weeks": "1"
    },
    {
      "id": "tv1_ctst_cd30",
      "name": "Đường đến trường",
      "semester": 2,
      "volume": 2,
      "weeks": "19"
    },
    {
      "id": "tv1_ctst_cd31",
      "name": "Làng quê yên bình",
      "semester": 2,
      "volume": 2,
      "weeks": "19"
    },
    {
      "id": "tv1_ctst_cd32",
      "name": "Phố xá nhộn nhịp",
      "semester": 2,
      "volume": 2,
      "weeks": "19"
    },
    {
      "id": "tv1_ctst_cd33",
      "name": "Biển đảo yêu thương",
      "semester": 2,
      "volume": 2,
      "weeks": "19"
    },
    {
      "id": "tv1_ctst_cd34",
      "name": "Chúng mình thật đặc biệt",
      "semester": 2,
      "volume": 2,
      "weeks": "19"
    },
    {
      "id": "tv1_ctst_cd35",
      "name": "Gửi lời chào lớp Một",
      "semester": 2,
      "volume": 2,
      "weeks": "19"
    },
    {
      "id": "tv1_ctst_cd36",
      "name": "Những điều em đã học",
      "semester": 2,
      "volume": 2,
      "weeks": "19"
    },
    {
      "id": "tv1_ctst_cd37",
      "name": "NGÀN HOA KHOE SẮC",
      "semester": 2,
      "volume": 2,
      "weeks": "19"
    },
    {
      "id": "tv1_ctst_cd38",
      "name": "uê uy",
      "semester": 2,
      "volume": 2,
      "weeks": "1"
    }
  ],
  "lessons": [
    {
      "id": "tv1_ctst_b1",
      "lessonNumber": 1,
      "title": "Bài 1: A a",
      "topic": "Chủ đề 1: Những bài học đầu tiên",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "10",
      "reading": {
        "title": "A a",
        "pages": "10",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'A a' (SGK Tiếng Việt 1 Chân trời sáng tạo, 10). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'A a' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'A a' trong chủ điểm 'Chủ đề 1: Những bài học đầu tiên' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: A a' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: A a' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b2",
      "lessonNumber": 2,
      "title": "Bài 2: B b",
      "topic": "Chủ đề 1: Những bài học đầu tiên",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "12",
      "reading": {
        "title": "B b",
        "pages": "12",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'B b' (SGK Tiếng Việt 1 Chân trời sáng tạo, 12). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'B b' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'B b' trong chủ điểm 'Chủ đề 1: Những bài học đầu tiên' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: B b' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: B b' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b3",
      "lessonNumber": 3,
      "title": "Bài 3: C c",
      "topic": "Chủ đề 1: Những bài học đầu tiên",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "14",
      "reading": {
        "title": "C c",
        "pages": "14",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'C c' (SGK Tiếng Việt 1 Chân trời sáng tạo, 14). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'C c' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'C c' trong chủ điểm 'Chủ đề 1: Những bài học đầu tiên' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: C c' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: C c' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b4",
      "lessonNumber": 4,
      "title": "Bài 4: O o",
      "topic": "Chủ đề 1: Những bài học đầu tiên",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "16",
      "reading": {
        "title": "O o",
        "pages": "16",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'O o' (SGK Tiếng Việt 1 Chân trời sáng tạo, 16). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'O o' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'O o' trong chủ điểm 'Chủ đề 1: Những bài học đầu tiên' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: O o' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: O o' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b5",
      "lessonNumber": 5,
      "title": "Bài 5: Ôn tập và kể chuyện",
      "topic": "Chủ đề 1: Những bài học đầu tiên",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "18",
      "reading": {
        "title": "Ôn tập và kể chuyện",
        "pages": "18",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ôn tập và kể chuyện' (SGK Tiếng Việt 1 Chân trời sáng tạo, 18). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ôn tập và kể chuyện' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ôn tập và kể chuyện' trong chủ điểm 'Chủ đề 1: Những bài học đầu tiên' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Ôn tập và kể chuyện' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 5: Ôn tập và kể chuyện' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b6",
      "lessonNumber": 1,
      "title": "Bài 1: Ơ ơ",
      "topic": "Chủ đề 2: Bé và bà",
      "volume": 1,
      "semester": 1,
      "week": 2,
      "pages": "20",
      "reading": {
        "title": "Ơ ơ",
        "pages": "20",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ơ ơ' (SGK Tiếng Việt 1 Chân trời sáng tạo, 20). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ơ ơ' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ơ ơ' trong chủ điểm 'Chủ đề 2: Bé và bà' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Ơ ơ' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: Ơ ơ' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b7",
      "lessonNumber": 2,
      "title": "Bài 2: Ô ô",
      "topic": "Chủ đề 2: Bé và bà",
      "volume": 1,
      "semester": 1,
      "week": 2,
      "pages": "22",
      "reading": {
        "title": "Ô ô",
        "pages": "22",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ô ô' (SGK Tiếng Việt 1 Chân trời sáng tạo, 22). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ô ô' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ô ô' trong chủ điểm 'Chủ đề 2: Bé và bà' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Ô ô' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: Ô ô' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b8",
      "lessonNumber": 3,
      "title": "Bài 3: V v",
      "topic": "Chủ đề 2: Bé và bà",
      "volume": 1,
      "semester": 1,
      "week": 2,
      "pages": "24",
      "reading": {
        "title": "V v",
        "pages": "24",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'V v' (SGK Tiếng Việt 1 Chân trời sáng tạo, 24). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'V v' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'V v' trong chủ điểm 'Chủ đề 2: Bé và bà' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: V v' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: V v' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b9",
      "lessonNumber": 4,
      "title": "Bài 4: E e Ê ê",
      "topic": "Chủ đề 2: Bé và bà",
      "volume": 1,
      "semester": 1,
      "week": 2,
      "pages": "26",
      "reading": {
        "title": "E e Ê ê",
        "pages": "26",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'E e Ê ê' (SGK Tiếng Việt 1 Chân trời sáng tạo, 26). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'E e Ê ê' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'E e Ê ê' trong chủ điểm 'Chủ đề 2: Bé và bà' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: E e Ê ê' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: E e Ê ê' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b10",
      "lessonNumber": 5,
      "title": "Bài 5: Ôn tập và kể chuyện",
      "topic": "Chủ đề 2: Bé và bà",
      "volume": 1,
      "semester": 1,
      "week": 2,
      "pages": "28",
      "reading": {
        "title": "Ôn tập và kể chuyện",
        "pages": "28",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ôn tập và kể chuyện' (SGK Tiếng Việt 1 Chân trời sáng tạo, 28). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ôn tập và kể chuyện' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ôn tập và kể chuyện' trong chủ điểm 'Chủ đề 2: Bé và bà' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Ôn tập và kể chuyện' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 5: Ôn tập và kể chuyện' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b11",
      "lessonNumber": 1,
      "title": "Bài 1: D d Đ đ",
      "topic": "Chủ đề 3: Đi chợ",
      "volume": 1,
      "semester": 1,
      "week": 3,
      "pages": "30",
      "reading": {
        "title": "D d Đ đ",
        "pages": "30",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'D d Đ đ' (SGK Tiếng Việt 1 Chân trời sáng tạo, 30). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'D d Đ đ' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'D d Đ đ' trong chủ điểm 'Chủ đề 3: Đi chợ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: D d Đ đ' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: D d Đ đ' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b12",
      "lessonNumber": 2,
      "title": "Bài 2: I i K k",
      "topic": "Chủ đề 3: Đi chợ",
      "volume": 1,
      "semester": 1,
      "week": 3,
      "pages": "32",
      "reading": {
        "title": "I i K k",
        "pages": "32",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'I i K k' (SGK Tiếng Việt 1 Chân trời sáng tạo, 32). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'I i K k' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'I i K k' trong chủ điểm 'Chủ đề 3: Đi chợ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: I i K k' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: I i K k' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b13",
      "lessonNumber": 3,
      "title": "Bài 3: L l H h",
      "topic": "Chủ đề 3: Đi chợ",
      "volume": 1,
      "semester": 1,
      "week": 3,
      "pages": "34",
      "reading": {
        "title": "L l H h",
        "pages": "34",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'L l H h' (SGK Tiếng Việt 1 Chân trời sáng tạo, 34). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'L l H h' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'L l H h' trong chủ điểm 'Chủ đề 3: Đi chợ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: L l H h' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: L l H h' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b14",
      "lessonNumber": 4,
      "title": "Bài 4: ch kh",
      "topic": "Chủ đề 3: Đi chợ",
      "volume": 1,
      "semester": 1,
      "week": 3,
      "pages": "36",
      "reading": {
        "title": "ch kh",
        "pages": "36",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'ch kh' (SGK Tiếng Việt 1 Chân trời sáng tạo, 36). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'ch kh' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'ch kh' trong chủ điểm 'Chủ đề 3: Đi chợ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: ch kh' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: ch kh' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b15",
      "lessonNumber": 5,
      "title": "Bài 5: Ôn tập và kể chuyện",
      "topic": "Chủ đề 3: Đi chợ",
      "volume": 1,
      "semester": 1,
      "week": 3,
      "pages": "38",
      "reading": {
        "title": "Ôn tập và kể chuyện",
        "pages": "38",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ôn tập và kể chuyện' (SGK Tiếng Việt 1 Chân trời sáng tạo, 38). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ôn tập và kể chuyện' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ôn tập và kể chuyện' trong chủ điểm 'Chủ đề 3: Đi chợ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Ôn tập và kể chuyện' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 5: Ôn tập và kể chuyện' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b16",
      "lessonNumber": 1,
      "title": "Bài 1: N n M m",
      "topic": "Chủ đề 4: Kì nghỉ",
      "volume": 1,
      "semester": 1,
      "week": 4,
      "pages": "40",
      "reading": {
        "title": "N n M m",
        "pages": "40",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'N n M m' (SGK Tiếng Việt 1 Chân trời sáng tạo, 40). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'N n M m' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'N n M m' trong chủ điểm 'Chủ đề 4: Kì nghỉ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: N n M m' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: N n M m' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b17",
      "lessonNumber": 2,
      "title": "Bài 2: U u Ư ư",
      "topic": "Chủ đề 4: Kì nghỉ",
      "volume": 1,
      "semester": 1,
      "week": 4,
      "pages": "42",
      "reading": {
        "title": "U u Ư ư",
        "pages": "42",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'U u Ư ư' (SGK Tiếng Việt 1 Chân trời sáng tạo, 42). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'U u Ư ư' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'U u Ư ư' trong chủ điểm 'Chủ đề 4: Kì nghỉ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: U u Ư ư' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: U u Ư ư' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b18",
      "lessonNumber": 3,
      "title": "Bài 3: G g gh",
      "topic": "Chủ đề 4: Kì nghỉ",
      "volume": 1,
      "semester": 1,
      "week": 4,
      "pages": "44",
      "reading": {
        "title": "G g gh",
        "pages": "44",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'G g gh' (SGK Tiếng Việt 1 Chân trời sáng tạo, 44). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'G g gh' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'G g gh' trong chủ điểm 'Chủ đề 4: Kì nghỉ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: G g gh' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: G g gh' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b19",
      "lessonNumber": 4,
      "title": "Bài 4: ng ngh",
      "topic": "Chủ đề 4: Kì nghỉ",
      "volume": 1,
      "semester": 1,
      "week": 4,
      "pages": "46",
      "reading": {
        "title": "ng ngh",
        "pages": "46",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'ng ngh' (SGK Tiếng Việt 1 Chân trời sáng tạo, 46). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'ng ngh' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'ng ngh' trong chủ điểm 'Chủ đề 4: Kì nghỉ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: ng ngh' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: ng ngh' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b20",
      "lessonNumber": 5,
      "title": "Bài 5: Ôn tập và kể chuyện",
      "topic": "Chủ đề 4: Kì nghỉ",
      "volume": 1,
      "semester": 1,
      "week": 4,
      "pages": "48",
      "reading": {
        "title": "Ôn tập và kể chuyện",
        "pages": "48",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ôn tập và kể chuyện' (SGK Tiếng Việt 1 Chân trời sáng tạo, 48). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ôn tập và kể chuyện' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ôn tập và kể chuyện' trong chủ điểm 'Chủ đề 4: Kì nghỉ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Ôn tập và kể chuyện' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 5: Ôn tập và kể chuyện' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b21",
      "lessonNumber": 1,
      "title": "Bài 1: T t th nh",
      "topic": "Chủ đề 5: Ở nhà",
      "volume": 1,
      "semester": 1,
      "week": 5,
      "pages": "50",
      "reading": {
        "title": "T t th nh",
        "pages": "50",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'T t th nh' (SGK Tiếng Việt 1 Chân trời sáng tạo, 50). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'T t th nh' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'T t th nh' trong chủ điểm 'Chủ đề 5: Ở nhà' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: T t th nh' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: T t th nh' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b22",
      "lessonNumber": 2,
      "title": "Bài 2: R r tr",
      "topic": "Chủ đề 5: Ở nhà",
      "volume": 1,
      "semester": 1,
      "week": 5,
      "pages": "52",
      "reading": {
        "title": "R r tr",
        "pages": "52",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'R r tr' (SGK Tiếng Việt 1 Chân trời sáng tạo, 52). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'R r tr' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'R r tr' trong chủ điểm 'Chủ đề 5: Ở nhà' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: R r tr' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: R r tr' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b23",
      "lessonNumber": 3,
      "title": "Bài 3: ia",
      "topic": "Chủ đề 5: Ở nhà",
      "volume": 1,
      "semester": 1,
      "week": 5,
      "pages": "54",
      "reading": {
        "title": "ia",
        "pages": "54",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'ia' (SGK Tiếng Việt 1 Chân trời sáng tạo, 54). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'ia' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'ia' trong chủ điểm 'Chủ đề 5: Ở nhà' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: ia' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: ia' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b24",
      "lessonNumber": 4,
      "title": "Bài 4: ua ưa",
      "topic": "Chủ đề 5: Ở nhà",
      "volume": 1,
      "semester": 1,
      "week": 5,
      "pages": "56",
      "reading": {
        "title": "ua ưa",
        "pages": "56",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'ua ưa' (SGK Tiếng Việt 1 Chân trời sáng tạo, 56). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'ua ưa' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'ua ưa' trong chủ điểm 'Chủ đề 5: Ở nhà' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: ua ưa' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: ua ưa' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b25",
      "lessonNumber": 5,
      "title": "Bài 5: Ôn tập và kể chuyện",
      "topic": "Chủ đề 5: Ở nhà",
      "volume": 1,
      "semester": 1,
      "week": 5,
      "pages": "58",
      "reading": {
        "title": "Ôn tập và kể chuyện",
        "pages": "58",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ôn tập và kể chuyện' (SGK Tiếng Việt 1 Chân trời sáng tạo, 58). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ôn tập và kể chuyện' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ôn tập và kể chuyện' trong chủ điểm 'Chủ đề 5: Ở nhà' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Ôn tập và kể chuyện' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 5: Ôn tập và kể chuyện' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b26",
      "lessonNumber": 1,
      "title": "Bài 1: P p ph",
      "topic": "Chủ đề 6: Đi sở thú",
      "volume": 1,
      "semester": 1,
      "week": 6,
      "pages": "60",
      "reading": {
        "title": "P p ph",
        "pages": "60",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'P p ph' (SGK Tiếng Việt 1 Chân trời sáng tạo, 60). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'P p ph' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'P p ph' trong chủ điểm 'Chủ đề 6: Đi sở thú' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: P p ph' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: P p ph' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b27",
      "lessonNumber": 2,
      "title": "Bài 2: S s X x",
      "topic": "Chủ đề 6: Đi sở thú",
      "volume": 1,
      "semester": 1,
      "week": 6,
      "pages": "62",
      "reading": {
        "title": "S s X x",
        "pages": "62",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'S s X x' (SGK Tiếng Việt 1 Chân trời sáng tạo, 62). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'S s X x' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'S s X x' trong chủ điểm 'Chủ đề 6: Đi sở thú' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: S s X x' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: S s X x' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b28",
      "lessonNumber": 3,
      "title": "Bài 3: Q q qu Y y",
      "topic": "Chủ đề 6: Đi sở thú",
      "volume": 1,
      "semester": 1,
      "week": 6,
      "pages": "64",
      "reading": {
        "title": "Q q qu Y y",
        "pages": "64",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Q q qu Y y' (SGK Tiếng Việt 1 Chân trời sáng tạo, 64). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Q q qu Y y' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Q q qu Y y' trong chủ điểm 'Chủ đề 6: Đi sở thú' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Q q qu Y y' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: Q q qu Y y' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b29",
      "lessonNumber": 4,
      "title": "Bài 4: gi",
      "topic": "Chủ đề 6: Đi sở thú",
      "volume": 1,
      "semester": 1,
      "week": 6,
      "pages": "66",
      "reading": {
        "title": "gi",
        "pages": "66",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'gi' (SGK Tiếng Việt 1 Chân trời sáng tạo, 66). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'gi' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'gi' trong chủ điểm 'Chủ đề 6: Đi sở thú' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: gi' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: gi' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b30",
      "lessonNumber": 5,
      "title": "Bài 5: Ôn tập và kể chuyện",
      "topic": "Chủ đề 6: Đi sở thú",
      "volume": 1,
      "semester": 1,
      "week": 6,
      "pages": "68",
      "reading": {
        "title": "Ôn tập và kể chuyện",
        "pages": "68",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ôn tập và kể chuyện' (SGK Tiếng Việt 1 Chân trời sáng tạo, 68). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ôn tập và kể chuyện' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ôn tập và kể chuyện' trong chủ điểm 'Chủ đề 6: Đi sở thú' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Ôn tập và kể chuyện' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 5: Ôn tập và kể chuyện' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b31",
      "lessonNumber": 1,
      "title": "Bài 1: ao eo",
      "topic": "Chủ đề 7: Thể thao",
      "volume": 1,
      "semester": 1,
      "week": 7,
      "pages": "70",
      "reading": {
        "title": "ao eo",
        "pages": "70",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'ao eo' (SGK Tiếng Việt 1 Chân trời sáng tạo, 70). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'ao eo' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'ao eo' trong chủ điểm 'Chủ đề 7: Thể thao' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: ao eo' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: ao eo' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b32",
      "lessonNumber": 2,
      "title": "Bài 2: au êu",
      "topic": "Chủ đề 7: Thể thao",
      "volume": 1,
      "semester": 1,
      "week": 7,
      "pages": "72",
      "reading": {
        "title": "au êu",
        "pages": "72",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'au êu' (SGK Tiếng Việt 1 Chân trời sáng tạo, 72). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'au êu' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'au êu' trong chủ điểm 'Chủ đề 7: Thể thao' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: au êu' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: au êu' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b33",
      "lessonNumber": 3,
      "title": "Bài 3: â âu",
      "topic": "Chủ đề 7: Thể thao",
      "volume": 1,
      "semester": 1,
      "week": 7,
      "pages": "74",
      "reading": {
        "title": "â âu",
        "pages": "74",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'â âu' (SGK Tiếng Việt 1 Chân trời sáng tạo, 74). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'â âu' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'â âu' trong chủ điểm 'Chủ đề 7: Thể thao' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: â âu' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: â âu' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b34",
      "lessonNumber": 4,
      "title": "Bài 4: iu ưu",
      "topic": "Chủ đề 7: Thể thao",
      "volume": 1,
      "semester": 1,
      "week": 7,
      "pages": "76",
      "reading": {
        "title": "iu ưu",
        "pages": "76",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'iu ưu' (SGK Tiếng Việt 1 Chân trời sáng tạo, 76). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'iu ưu' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'iu ưu' trong chủ điểm 'Chủ đề 7: Thể thao' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: iu ưu' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: iu ưu' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b35",
      "lessonNumber": 5,
      "title": "Bài 5: Ôn tập và kể chuyện",
      "topic": "Chủ đề 7: Thể thao",
      "volume": 1,
      "semester": 1,
      "week": 7,
      "pages": "78",
      "reading": {
        "title": "Ôn tập và kể chuyện",
        "pages": "78",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ôn tập và kể chuyện' (SGK Tiếng Việt 1 Chân trời sáng tạo, 78). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ôn tập và kể chuyện' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ôn tập và kể chuyện' trong chủ điểm 'Chủ đề 7: Thể thao' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Ôn tập và kể chuyện' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 5: Ôn tập và kể chuyện' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b36",
      "lessonNumber": 1,
      "title": "Bài 1: ai oi",
      "topic": "Chủ đề 8: Đồ chơi – trò chơi",
      "volume": 1,
      "semester": 1,
      "week": 8,
      "pages": "80",
      "reading": {
        "title": "ai oi",
        "pages": "80",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'ai oi' (SGK Tiếng Việt 1 Chân trời sáng tạo, 80). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'ai oi' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'ai oi' trong chủ điểm 'Chủ đề 8: Đồ chơi – trò chơi' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: ai oi' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: ai oi' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b37",
      "lessonNumber": 2,
      "title": "Bài 2: ôi ơi",
      "topic": "Chủ đề 8: Đồ chơi – trò chơi",
      "volume": 1,
      "semester": 1,
      "week": 8,
      "pages": "82",
      "reading": {
        "title": "ôi ơi",
        "pages": "82",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'ôi ơi' (SGK Tiếng Việt 1 Chân trời sáng tạo, 82). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'ôi ơi' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'ôi ơi' trong chủ điểm 'Chủ đề 8: Đồ chơi – trò chơi' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: ôi ơi' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: ôi ơi' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b38",
      "lessonNumber": 3,
      "title": "Bài 3: ui ưi",
      "topic": "Chủ đề 8: Đồ chơi – trò chơi",
      "volume": 1,
      "semester": 1,
      "week": 8,
      "pages": "84",
      "reading": {
        "title": "ui ưi",
        "pages": "84",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'ui ưi' (SGK Tiếng Việt 1 Chân trời sáng tạo, 84). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'ui ưi' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'ui ưi' trong chủ điểm 'Chủ đề 8: Đồ chơi – trò chơi' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: ui ưi' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: ui ưi' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b39",
      "lessonNumber": 4,
      "title": "Bài 4: ay ây",
      "topic": "Chủ đề 8: Đồ chơi – trò chơi",
      "volume": 1,
      "semester": 1,
      "week": 8,
      "pages": "86",
      "reading": {
        "title": "ay ây",
        "pages": "86",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'ay ây' (SGK Tiếng Việt 1 Chân trời sáng tạo, 86). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'ay ây' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'ay ây' trong chủ điểm 'Chủ đề 8: Đồ chơi – trò chơi' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: ay ây' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: ay ây' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b40",
      "lessonNumber": 5,
      "title": "Bài 5: Ôn tập và kể chuyện",
      "topic": "Chủ đề 8: Đồ chơi – trò chơi",
      "volume": 1,
      "semester": 1,
      "week": 8,
      "pages": "88",
      "reading": {
        "title": "Ôn tập và kể chuyện",
        "pages": "88",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ôn tập và kể chuyện' (SGK Tiếng Việt 1 Chân trời sáng tạo, 88). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ôn tập và kể chuyện' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ôn tập và kể chuyện' trong chủ điểm 'Chủ đề 8: Đồ chơi – trò chơi' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Ôn tập và kể chuyện' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 5: Ôn tập và kể chuyện' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b41",
      "lessonNumber": 1,
      "title": "Bài 1: ac âc",
      "topic": "Chủ đề 9: Vui học",
      "volume": 1,
      "semester": 1,
      "week": 9,
      "pages": "90",
      "reading": {
        "title": "ac âc",
        "pages": "90",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'ac âc' (SGK Tiếng Việt 1 Chân trời sáng tạo, 90). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'ac âc' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'ac âc' trong chủ điểm 'Chủ đề 9: Vui học' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: ac âc' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: ac âc' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b42",
      "lessonNumber": 2,
      "title": "Bài 2: ă ăc",
      "topic": "Chủ đề 9: Vui học",
      "volume": 1,
      "semester": 1,
      "week": 9,
      "pages": "92",
      "reading": {
        "title": "ă ăc",
        "pages": "92",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'ă ăc' (SGK Tiếng Việt 1 Chân trời sáng tạo, 92). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'ă ăc' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'ă ăc' trong chủ điểm 'Chủ đề 9: Vui học' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: ă ăc' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: ă ăc' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b43",
      "lessonNumber": 3,
      "title": "Bài 3: oc ôc",
      "topic": "Chủ đề 9: Vui học",
      "volume": 1,
      "semester": 1,
      "week": 9,
      "pages": "94",
      "reading": {
        "title": "oc ôc",
        "pages": "94",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'oc ôc' (SGK Tiếng Việt 1 Chân trời sáng tạo, 94). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'oc ôc' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'oc ôc' trong chủ điểm 'Chủ đề 9: Vui học' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: oc ôc' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: oc ôc' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b44",
      "lessonNumber": 4,
      "title": "Bài 4: uc ức",
      "topic": "Chủ đề 9: Vui học",
      "volume": 1,
      "semester": 1,
      "week": 9,
      "pages": "96",
      "reading": {
        "title": "uc ức",
        "pages": "96",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'uc ức' (SGK Tiếng Việt 1 Chân trời sáng tạo, 96). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'uc ức' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'uc ức' trong chủ điểm 'Chủ đề 9: Vui học' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: uc ức' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: uc ức' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b45",
      "lessonNumber": 5,
      "title": "Bài 5: Ôn tập và kể chuyện",
      "topic": "Chủ đề 9: Vui học",
      "volume": 1,
      "semester": 1,
      "week": 9,
      "pages": "98",
      "reading": {
        "title": "Ôn tập và kể chuyện",
        "pages": "98",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ôn tập và kể chuyện' (SGK Tiếng Việt 1 Chân trời sáng tạo, 98). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ôn tập và kể chuyện' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ôn tập và kể chuyện' trong chủ điểm 'Chủ đề 9: Vui học' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Ôn tập và kể chuyện' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 5: Ôn tập và kể chuyện' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b46",
      "lessonNumber": 1,
      "title": "Bài 1: at ăat ât",
      "topic": "Chủ đề 10: Ngày chủ nhật",
      "volume": 1,
      "semester": 1,
      "week": 10,
      "pages": "100",
      "reading": {
        "title": "at ăat ât",
        "pages": "100",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'at ăat ât' (SGK Tiếng Việt 1 Chân trời sáng tạo, 100). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'at ăat ât' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'at ăat ât' trong chủ điểm 'Chủ đề 10: Ngày chủ nhật' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: at ăat ât' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: at ăat ât' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b47",
      "lessonNumber": 2,
      "title": "Bài 2: et êt it",
      "topic": "Chủ đề 10: Ngày chủ nhật",
      "volume": 1,
      "semester": 1,
      "week": 10,
      "pages": "102",
      "reading": {
        "title": "et êt it",
        "pages": "102",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'et êt it' (SGK Tiếng Việt 1 Chân trời sáng tạo, 102). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'et êt it' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'et êt it' trong chủ điểm 'Chủ đề 10: Ngày chủ nhật' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: et êt it' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: et êt it' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b48",
      "lessonNumber": 3,
      "title": "Bài 3: ot ôt ơt",
      "topic": "Chủ đề 10: Ngày chủ nhật",
      "volume": 1,
      "semester": 1,
      "week": 10,
      "pages": "104",
      "reading": {
        "title": "ot ôt ơt",
        "pages": "104",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'ot ôt ơt' (SGK Tiếng Việt 1 Chân trời sáng tạo, 104). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'ot ôt ơt' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'ot ôt ơt' trong chủ điểm 'Chủ đề 10: Ngày chủ nhật' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: ot ôt ơt' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: ot ôt ơt' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b49",
      "lessonNumber": 4,
      "title": "Bài 4: ut ưt",
      "topic": "Chủ đề 10: Ngày chủ nhật",
      "volume": 1,
      "semester": 1,
      "week": 10,
      "pages": "106",
      "reading": {
        "title": "ut ưt",
        "pages": "106",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'ut ưt' (SGK Tiếng Việt 1 Chân trời sáng tạo, 106). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'ut ưt' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'ut ưt' trong chủ điểm 'Chủ đề 10: Ngày chủ nhật' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: ut ưt' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: ut ưt' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b50",
      "lessonNumber": 5,
      "title": "Bài 5: Ôn tập và kể chuyện",
      "topic": "Chủ đề 10: Ngày chủ nhật",
      "volume": 1,
      "semester": 1,
      "week": 10,
      "pages": "108",
      "reading": {
        "title": "Ôn tập và kể chuyện",
        "pages": "108",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ôn tập và kể chuyện' (SGK Tiếng Việt 1 Chân trời sáng tạo, 108). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ôn tập và kể chuyện' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ôn tập và kể chuyện' trong chủ điểm 'Chủ đề 10: Ngày chủ nhật' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Ôn tập và kể chuyện' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 5: Ôn tập và kể chuyện' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b51",
      "lessonNumber": 1,
      "title": "Bài 1: an ăn ân",
      "topic": "Chủ đề 11: Bạn bè",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "110",
      "reading": {
        "title": "an ăn ân",
        "pages": "110",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'an ăn ân' (SGK Tiếng Việt 1 Chân trời sáng tạo, 110). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'an ăn ân' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'an ăn ân' trong chủ điểm 'Chủ đề 11: Bạn bè' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: an ăn ân' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: an ăn ân' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b52",
      "lessonNumber": 2,
      "title": "Bài 2: en ên in",
      "topic": "Chủ đề 11: Bạn bè",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "112",
      "reading": {
        "title": "en ên in",
        "pages": "112",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'en ên in' (SGK Tiếng Việt 1 Chân trời sáng tạo, 112). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'en ên in' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'en ên in' trong chủ điểm 'Chủ đề 11: Bạn bè' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: en ên in' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: en ên in' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b53",
      "lessonNumber": 3,
      "title": "Bài 3: on ôn",
      "topic": "Chủ đề 11: Bạn bè",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "114",
      "reading": {
        "title": "on ôn",
        "pages": "114",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'on ôn' (SGK Tiếng Việt 1 Chân trời sáng tạo, 114). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'on ôn' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'on ôn' trong chủ điểm 'Chủ đề 11: Bạn bè' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: on ôn' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: on ôn' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b54",
      "lessonNumber": 4,
      "title": "Bài 4: ơn un",
      "topic": "Chủ đề 11: Bạn bè",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "116",
      "reading": {
        "title": "ơn un",
        "pages": "116",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'ơn un' (SGK Tiếng Việt 1 Chân trời sáng tạo, 116). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'ơn un' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'ơn un' trong chủ điểm 'Chủ đề 11: Bạn bè' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: ơn un' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: ơn un' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b55",
      "lessonNumber": 5,
      "title": "Bài 5: Ôn tập và kể chuyện",
      "topic": "Chủ đề 11: Bạn bè",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "118",
      "reading": {
        "title": "Ôn tập và kể chuyện",
        "pages": "118",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ôn tập và kể chuyện' (SGK Tiếng Việt 1 Chân trời sáng tạo, 118). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ôn tập và kể chuyện' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ôn tập và kể chuyện' trong chủ điểm 'Chủ đề 11: Bạn bè' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Ôn tập và kể chuyện' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 5: Ôn tập và kể chuyện' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b56",
      "lessonNumber": 1,
      "title": "Bài 1: ang ăang âng",
      "topic": "Chủ đề 12: Trung thu",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "120",
      "reading": {
        "title": "ang ăang âng",
        "pages": "120",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'ang ăang âng' (SGK Tiếng Việt 1 Chân trời sáng tạo, 120). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'ang ăang âng' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'ang ăang âng' trong chủ điểm 'Chủ đề 12: Trung thu' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: ang ăang âng' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: ang ăang âng' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b57",
      "lessonNumber": 2,
      "title": "Bài 2: ong ông",
      "topic": "Chủ đề 12: Trung thu",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "122",
      "reading": {
        "title": "ong ông",
        "pages": "122",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'ong ông' (SGK Tiếng Việt 1 Chân trời sáng tạo, 122). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'ong ông' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'ong ông' trong chủ điểm 'Chủ đề 12: Trung thu' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: ong ông' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: ong ông' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b58",
      "lessonNumber": 3,
      "title": "Bài 3: ung ưng",
      "topic": "Chủ đề 12: Trung thu",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "124",
      "reading": {
        "title": "ung ưng",
        "pages": "124",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'ung ưng' (SGK Tiếng Việt 1 Chân trời sáng tạo, 124). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'ung ưng' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'ung ưng' trong chủ điểm 'Chủ đề 12: Trung thu' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: ung ưng' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: ung ưng' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b59",
      "lessonNumber": 4,
      "title": "Bài 4: ach êch ich",
      "topic": "Chủ đề 12: Trung thu",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "126",
      "reading": {
        "title": "ach êch ich",
        "pages": "126",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'ach êch ich' (SGK Tiếng Việt 1 Chân trời sáng tạo, 126). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'ach êch ich' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'ach êch ich' trong chủ điểm 'Chủ đề 12: Trung thu' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: ach êch ich' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: ach êch ich' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b60",
      "lessonNumber": 5,
      "title": "Bài 5: Ôn tập và kể chuyện",
      "topic": "Chủ đề 12: Trung thu",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "128",
      "reading": {
        "title": "Ôn tập và kể chuyện",
        "pages": "128",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ôn tập và kể chuyện' (SGK Tiếng Việt 1 Chân trời sáng tạo, 128). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ôn tập và kể chuyện' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ôn tập và kể chuyện' trong chủ điểm 'Chủ đề 12: Trung thu' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Ôn tập và kể chuyện' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 5: Ôn tập và kể chuyện' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b61",
      "lessonNumber": 1,
      "title": "Bài 1: am ăam âm",
      "topic": "Chủ đề 13: Thăm quê",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "130",
      "reading": {
        "title": "am ăam âm",
        "pages": "130",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'am ăam âm' (SGK Tiếng Việt 1 Chân trời sáng tạo, 130). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'am ăam âm' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'am ăam âm' trong chủ điểm 'Chủ đề 13: Thăm quê' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: am ăam âm' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: am ăam âm' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b62",
      "lessonNumber": 2,
      "title": "Bài 2: em êm",
      "topic": "Chủ đề 13: Thăm quê",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "132",
      "reading": {
        "title": "em êm",
        "pages": "132",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'em êm' (SGK Tiếng Việt 1 Chân trời sáng tạo, 132). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'em êm' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'em êm' trong chủ điểm 'Chủ đề 13: Thăm quê' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: em êm' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: em êm' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b63",
      "lessonNumber": 3,
      "title": "Bài 3: om ôm ơm",
      "topic": "Chủ đề 13: Thăm quê",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "134",
      "reading": {
        "title": "om ôm ơm",
        "pages": "134",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'om ôm ơm' (SGK Tiếng Việt 1 Chân trời sáng tạo, 134). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'om ôm ơm' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'om ôm ơm' trong chủ điểm 'Chủ đề 13: Thăm quê' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: om ôm ơm' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: om ôm ơm' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b64",
      "lessonNumber": 4,
      "title": "Bài 4: im um",
      "topic": "Chủ đề 13: Thăm quê",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "136",
      "reading": {
        "title": "im um",
        "pages": "136",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'im um' (SGK Tiếng Việt 1 Chân trời sáng tạo, 136). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'im um' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'im um' trong chủ điểm 'Chủ đề 13: Thăm quê' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: im um' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: im um' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b65",
      "lessonNumber": 5,
      "title": "Bài 5: Ôn tập và kể chuyện",
      "topic": "Chủ đề 13: Thăm quê",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "138",
      "reading": {
        "title": "Ôn tập và kể chuyện",
        "pages": "138",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ôn tập và kể chuyện' (SGK Tiếng Việt 1 Chân trời sáng tạo, 138). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ôn tập và kể chuyện' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ôn tập và kể chuyện' trong chủ điểm 'Chủ đề 13: Thăm quê' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Ôn tập và kể chuyện' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 5: Ôn tập và kể chuyện' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b66",
      "lessonNumber": 1,
      "title": "Bài 1: ap ăap âp",
      "topic": "Chủ đề 14: Lớp em",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "140",
      "reading": {
        "title": "ap ăap âp",
        "pages": "140",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'ap ăap âp' (SGK Tiếng Việt 1 Chân trời sáng tạo, 140). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'ap ăap âp' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'ap ăap âp' trong chủ điểm 'Chủ đề 14: Lớp em' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: ap ăap âp' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: ap ăap âp' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b67",
      "lessonNumber": 2,
      "title": "Bài 2: ep êp",
      "topic": "Chủ đề 14: Lớp em",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "142",
      "reading": {
        "title": "ep êp",
        "pages": "142",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'ep êp' (SGK Tiếng Việt 1 Chân trời sáng tạo, 142). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'ep êp' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'ep êp' trong chủ điểm 'Chủ đề 14: Lớp em' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: ep êp' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: ep êp' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b68",
      "lessonNumber": 3,
      "title": "Bài 3: op ôp ơp",
      "topic": "Chủ đề 14: Lớp em",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "144",
      "reading": {
        "title": "op ôp ơp",
        "pages": "144",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'op ôp ơp' (SGK Tiếng Việt 1 Chân trời sáng tạo, 144). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'op ôp ơp' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'op ôp ơp' trong chủ điểm 'Chủ đề 14: Lớp em' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: op ôp ơp' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: op ôp ơp' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b69",
      "lessonNumber": 4,
      "title": "Bài 4: ip up",
      "topic": "Chủ đề 14: Lớp em",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "146",
      "reading": {
        "title": "ip up",
        "pages": "146",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'ip up' (SGK Tiếng Việt 1 Chân trời sáng tạo, 146). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'ip up' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'ip up' trong chủ điểm 'Chủ đề 14: Lớp em' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: ip up' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: ip up' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b70",
      "lessonNumber": 5,
      "title": "Bài 5: Ôn tập và kể chuyện",
      "topic": "Chủ đề 14: Lớp em",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "148",
      "reading": {
        "title": "Ôn tập và kể chuyện",
        "pages": "148",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ôn tập và kể chuyện' (SGK Tiếng Việt 1 Chân trời sáng tạo, 148). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ôn tập và kể chuyện' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ôn tập và kể chuyện' trong chủ điểm 'Chủ đề 14: Lớp em' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Ôn tập và kể chuyện' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 5: Ôn tập và kể chuyện' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b71",
      "lessonNumber": 1,
      "title": "Bài 1: anh ênh inh",
      "topic": "Chủ đề 15: Sinh nhật",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "150",
      "reading": {
        "title": "anh ênh inh",
        "pages": "150",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'anh ênh inh' (SGK Tiếng Việt 1 Chân trời sáng tạo, 150). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'anh ênh inh' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'anh ênh inh' trong chủ điểm 'Chủ đề 15: Sinh nhật' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: anh ênh inh' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: anh ênh inh' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b72",
      "lessonNumber": 2,
      "title": "Bài 2: ươu",
      "topic": "Chủ đề 15: Sinh nhật",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "152",
      "reading": {
        "title": "ươu",
        "pages": "152",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'ươu' (SGK Tiếng Việt 1 Chân trời sáng tạo, 152). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'ươu' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'ươu' trong chủ điểm 'Chủ đề 15: Sinh nhật' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: ươu' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: ươu' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b73",
      "lessonNumber": 3,
      "title": "Bài 3: iêu yêu",
      "topic": "Chủ đề 15: Sinh nhật",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "154",
      "reading": {
        "title": "iêu yêu",
        "pages": "154",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'iêu yêu' (SGK Tiếng Việt 1 Chân trời sáng tạo, 154). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'iêu yêu' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'iêu yêu' trong chủ điểm 'Chủ đề 15: Sinh nhật' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: iêu yêu' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: iêu yêu' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b74",
      "lessonNumber": 4,
      "title": "Bài 4: uôi ươi",
      "topic": "Chủ đề 15: Sinh nhật",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "156",
      "reading": {
        "title": "uôi ươi",
        "pages": "156",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'uôi ươi' (SGK Tiếng Việt 1 Chân trời sáng tạo, 156). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'uôi ươi' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'uôi ươi' trong chủ điểm 'Chủ đề 15: Sinh nhật' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: uôi ươi' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: uôi ươi' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b75",
      "lessonNumber": 5,
      "title": "Bài 5: Ôn tập và kể chuyện",
      "topic": "Chủ đề 15: Sinh nhật",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "158",
      "reading": {
        "title": "Ôn tập và kể chuyện",
        "pages": "158",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ôn tập và kể chuyện' (SGK Tiếng Việt 1 Chân trời sáng tạo, 158). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ôn tập và kể chuyện' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ôn tập và kể chuyện' trong chủ điểm 'Chủ đề 15: Sinh nhật' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Ôn tập và kể chuyện' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 5: Ôn tập và kể chuyện' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b76",
      "lessonNumber": 1,
      "title": "Bài 1: iêc uôc ước",
      "topic": "Chủ đề 16: Ước mơ",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "160",
      "reading": {
        "title": "iêc uôc ước",
        "pages": "160",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'iêc uôc ước' (SGK Tiếng Việt 1 Chân trời sáng tạo, 160). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'iêc uôc ước' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'iêc uôc ước' trong chủ điểm 'Chủ đề 16: Ước mơ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: iêc uôc ước' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: iêc uôc ước' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b77",
      "lessonNumber": 2,
      "title": "Bài 2: iêt yêt uôt ươt",
      "topic": "Chủ đề 16: Ước mơ",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "162",
      "reading": {
        "title": "iêt yêt uôt ươt",
        "pages": "162",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'iêt yêt uôt ươt' (SGK Tiếng Việt 1 Chân trời sáng tạo, 162). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'iêt yêt uôt ươt' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'iêt yêt uôt ươt' trong chủ điểm 'Chủ đề 16: Ước mơ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: iêt yêt uôt ươt' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: iêt yêt uôt ươt' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b78",
      "lessonNumber": 3,
      "title": "Bài 3: iên yên",
      "topic": "Chủ đề 16: Ước mơ",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "164",
      "reading": {
        "title": "iên yên",
        "pages": "164",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'iên yên' (SGK Tiếng Việt 1 Chân trời sáng tạo, 164). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'iên yên' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'iên yên' trong chủ điểm 'Chủ đề 16: Ước mơ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: iên yên' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: iên yên' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b79",
      "lessonNumber": 4,
      "title": "Bài 4: uôn ươn",
      "topic": "Chủ đề 16: Ước mơ",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "166",
      "reading": {
        "title": "uôn ươn",
        "pages": "166",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'uôn ươn' (SGK Tiếng Việt 1 Chân trời sáng tạo, 166). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'uôn ươn' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'uôn ươn' trong chủ điểm 'Chủ đề 16: Ước mơ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: uôn ươn' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: uôn ươn' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b80",
      "lessonNumber": 5,
      "title": "Bài 5: Ôn tập và kể chuyện",
      "topic": "Chủ đề 16: Ước mơ",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "168",
      "reading": {
        "title": "Ôn tập và kể chuyện",
        "pages": "168",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ôn tập và kể chuyện' (SGK Tiếng Việt 1 Chân trời sáng tạo, 168). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ôn tập và kể chuyện' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ôn tập và kể chuyện' trong chủ điểm 'Chủ đề 16: Ước mơ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Ôn tập và kể chuyện' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 5: Ôn tập và kể chuyện' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b81",
      "lessonNumber": 1,
      "title": "Bài 1: iêng yêng",
      "topic": "Chủ đề 17: Vườn ươm",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "170",
      "reading": {
        "title": "iêng yêng",
        "pages": "170",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'iêng yêng' (SGK Tiếng Việt 1 Chân trời sáng tạo, 170). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'iêng yêng' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'iêng yêng' trong chủ điểm 'Chủ đề 17: Vườn ươm' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: iêng yêng' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: iêng yêng' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b82",
      "lessonNumber": 2,
      "title": "Bài 2: uông ương",
      "topic": "Chủ đề 17: Vườn ươm",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "172",
      "reading": {
        "title": "uông ương",
        "pages": "172",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'uông ương' (SGK Tiếng Việt 1 Chân trời sáng tạo, 172). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'uông ương' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'uông ương' trong chủ điểm 'Chủ đề 17: Vườn ươm' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: uông ương' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: uông ương' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b83",
      "lessonNumber": 3,
      "title": "Bài 3: iêm yêm uôm ươm",
      "topic": "Chủ đề 17: Vườn ươm",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "174",
      "reading": {
        "title": "iêm yêm uôm ươm",
        "pages": "174",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'iêm yêm uôm ươm' (SGK Tiếng Việt 1 Chân trời sáng tạo, 174). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'iêm yêm uôm ươm' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'iêm yêm uôm ươm' trong chủ điểm 'Chủ đề 17: Vườn ươm' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: iêm yêm uôm ươm' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: iêm yêm uôm ươm' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b84",
      "lessonNumber": 4,
      "title": "Bài 4: iêp ươp",
      "topic": "Chủ đề 17: Vườn ươm",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "176",
      "reading": {
        "title": "iêp ươp",
        "pages": "176",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'iêp ươp' (SGK Tiếng Việt 1 Chân trời sáng tạo, 176). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'iêp ươp' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'iêp ươp' trong chủ điểm 'Chủ đề 17: Vườn ươm' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: iêp ươp' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: iêp ươp' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b85",
      "lessonNumber": 5,
      "title": "Bài 5: Ôn tập và kể chuyện",
      "topic": "Chủ đề 17: Vườn ươm",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "178",
      "reading": {
        "title": "Ôn tập và kể chuyện",
        "pages": "178",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ôn tập và kể chuyện' (SGK Tiếng Việt 1 Chân trời sáng tạo, 178). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ôn tập và kể chuyện' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ôn tập và kể chuyện' trong chủ điểm 'Chủ đề 17: Vườn ươm' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Ôn tập và kể chuyện' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 5: Ôn tập và kể chuyện' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b86",
      "lessonNumber": 1,
      "title": "Bài 1: Ôn tập 1",
      "topic": "Chủ đề 18: Những điều em đã học",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "180",
      "reading": {
        "title": "Ôn tập 1",
        "pages": "180",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ôn tập 1' (SGK Tiếng Việt 1 Chân trời sáng tạo, 180). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ôn tập 1' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ôn tập 1' trong chủ điểm 'Chủ đề 18: Những điều em đã học' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Ôn tập 1' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: Ôn tập 1' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b87",
      "lessonNumber": 2,
      "title": "Bài 2: Ôn tập 2",
      "topic": "Chủ đề 18: Những điều em đã học",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "182",
      "reading": {
        "title": "Ôn tập 2",
        "pages": "182",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ôn tập 2' (SGK Tiếng Việt 1 Chân trời sáng tạo, 182). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ôn tập 2' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ôn tập 2' trong chủ điểm 'Chủ đề 18: Những điều em đã học' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Ôn tập 2' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: Ôn tập 2' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b88",
      "lessonNumber": 3,
      "title": "Bài 3: Đánh giá cuối học kì I (Đề tham khảo)",
      "topic": "Chủ đề 18: Những điều em đã học",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "184",
      "reading": {
        "title": "Đánh giá cuối học kì I (Đề tham khảo)",
        "pages": "184",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Đánh giá cuối học kì I (Đề tham khảo)' (SGK Tiếng Việt 1 Chân trời sáng tạo, 184). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Đánh giá cuối học kì I (Đề tham khảo)' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Đánh giá cuối học kì I (Đề tham khảo)' trong chủ điểm 'Chủ đề 18: Những điều em đã học' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Đánh giá cuối học kì I (Đề tham khảo)' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: Đánh giá cuối học kì I (Đề tham khảo)' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b89",
      "lessonNumber": 1,
      "title": "Bài 1: A a",
      "topic": "NHỮNG BÀI HỌC ĐẦU TIÊN",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "pages": "10",
      "reading": {
        "title": "A a",
        "pages": "10",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'A a' (SGK Tiếng Việt 1 Chân trời sáng tạo, 10). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
        "comprehensionFocus": "Xác định thông tin (Mức 1 - Locate), giải thích suy luận ý nghĩa hình ảnh/từ ngữ (Mức 2 - Interpret), liên hệ bài học cuộc sống (Mức 3 - Reflect)."
      },
      "languagePractice": {
        "topic": "Ôn tập và mở rộng vốn từ",
        "skills": "Rèn kỹ năng nhận biết và vận dụng từ ngữ, dấu câu trong thực hành giao tiếp."
      },
      "writing": {
        "topic": "Viết chữ a và số 1",
        "skills": "Rèn kỹ năng tìm ý, lập dàn ý và diễn đạt Viết chữ a và số 1."
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'A a' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'A a' trong chủ điểm 'NHỮNG BÀI HỌC ĐẦU TIÊN' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: A a' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: A a' và nội dung Tập làm văn (Viết chữ a và số 1), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b90",
      "lessonNumber": 1,
      "title": "Bài 1: oa oe",
      "topic": "Chủ đề 19: Ngàn hoa khoe sắc",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "6",
      "reading": {
        "title": "oa oe",
        "pages": "6",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'oa oe' (SGK Tiếng Việt 1 Chân trời sáng tạo, 6). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'oa oe' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'oa oe' trong chủ điểm 'Chủ đề 19: Ngàn hoa khoe sắc' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: oa oe' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: oa oe' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b91",
      "lessonNumber": 2,
      "title": "Bài 2: uê uy",
      "topic": "Chủ đề 19: Ngàn hoa khoe sắc",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "8",
      "reading": {
        "title": "uê uy",
        "pages": "8",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'uê uy' (SGK Tiếng Việt 1 Chân trời sáng tạo, 8). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'uê uy' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'uê uy' trong chủ điểm 'Chủ đề 19: Ngàn hoa khoe sắc' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: uê uy' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: uê uy' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b92",
      "lessonNumber": 3,
      "title": "Bài 3: oai oay oac",
      "topic": "Chủ đề 19: Ngàn hoa khoe sắc",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "10",
      "reading": {
        "title": "oai oay oac",
        "pages": "10",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'oai oay oac' (SGK Tiếng Việt 1 Chân trời sáng tạo, 10). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'oai oay oac' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'oai oay oac' trong chủ điểm 'Chủ đề 19: Ngàn hoa khoe sắc' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: oai oay oac' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: oai oay oac' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b93",
      "lessonNumber": 4,
      "title": "Bài 4: oat oan oang",
      "topic": "Chủ đề 19: Ngàn hoa khoe sắc",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "12",
      "reading": {
        "title": "oat oan oang",
        "pages": "12",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'oat oan oang' (SGK Tiếng Việt 1 Chân trời sáng tạo, 12). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'oat oan oang' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'oat oan oang' trong chủ điểm 'Chủ đề 19: Ngàn hoa khoe sắc' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: oat oan oang' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: oat oan oang' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b94",
      "lessonNumber": 5,
      "title": "Bài 5: Ôn tập và kể chuyện",
      "topic": "Chủ đề 19: Ngàn hoa khoe sắc",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "14",
      "reading": {
        "title": "Ôn tập và kể chuyện",
        "pages": "14",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ôn tập và kể chuyện' (SGK Tiếng Việt 1 Chân trời sáng tạo, 14). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ôn tập và kể chuyện' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ôn tập và kể chuyện' trong chủ điểm 'Chủ đề 19: Ngàn hoa khoe sắc' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Ôn tập và kể chuyện' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 5: Ôn tập và kể chuyện' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b95",
      "lessonNumber": 1,
      "title": "Bài 1: uân uyên uyt",
      "topic": "Chủ đề 20: Ngày tuyệt vời",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "16",
      "reading": {
        "title": "uân uyên uyt",
        "pages": "16",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'uân uyên uyt' (SGK Tiếng Việt 1 Chân trời sáng tạo, 16). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'uân uyên uyt' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'uân uyên uyt' trong chủ điểm 'Chủ đề 20: Ngày tuyệt vời' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: uân uyên uyt' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: uân uyên uyt' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b96",
      "lessonNumber": 2,
      "title": "Bài 2: oăt uât uyêt",
      "topic": "Chủ đề 20: Ngày tuyệt vời",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "18",
      "reading": {
        "title": "oăt uât uyêt",
        "pages": "18",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'oăt uât uyêt' (SGK Tiếng Việt 1 Chân trời sáng tạo, 18). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'oăt uât uyêt' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'oăt uât uyêt' trong chủ điểm 'Chủ đề 20: Ngày tuyệt vời' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: oăt uât uyêt' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: oăt uât uyêt' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b97",
      "lessonNumber": 3,
      "title": "Bài 3: oanh uynh uych",
      "topic": "Chủ đề 20: Ngày tuyệt vời",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "20",
      "reading": {
        "title": "oanh uynh uych",
        "pages": "20",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'oanh uynh uych' (SGK Tiếng Việt 1 Chân trời sáng tạo, 20). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'oanh uynh uych' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'oanh uynh uych' trong chủ điểm 'Chủ đề 20: Ngày tuyệt vời' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: oanh uynh uych' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: oanh uynh uych' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b98",
      "lessonNumber": 4,
      "title": "Bài 4: oăng oam oap",
      "topic": "Chủ đề 20: Ngày tuyệt vời",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "22",
      "reading": {
        "title": "oăng oam oap",
        "pages": "22",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'oăng oam oap' (SGK Tiếng Việt 1 Chân trời sáng tạo, 22). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'oăng oam oap' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'oăng oam oap' trong chủ điểm 'Chủ đề 20: Ngày tuyệt vời' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: oăng oam oap' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: oăng oam oap' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b99",
      "lessonNumber": 5,
      "title": "Bài 5: Ôn tập và kể chuyện",
      "topic": "Chủ đề 20: Ngày tuyệt vời",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "24",
      "reading": {
        "title": "Ôn tập và kể chuyện",
        "pages": "24",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ôn tập và kể chuyện' (SGK Tiếng Việt 1 Chân trời sáng tạo, 24). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ôn tập và kể chuyện' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ôn tập và kể chuyện' trong chủ điểm 'Chủ đề 20: Ngày tuyệt vời' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 5: Ôn tập và kể chuyện' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 5: Ôn tập và kể chuyện' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b100",
      "lessonNumber": 1,
      "title": "Bài 1: Bông hoa niềm vui",
      "topic": "Chủ đề 21: Những bông hoa nhỏ",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "26",
      "reading": {
        "title": "Bông hoa niềm vui",
        "pages": "26",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Bông hoa niềm vui' (SGK Tiếng Việt 1 Chân trời sáng tạo, 26). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Bông hoa niềm vui' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Bông hoa niềm vui' trong chủ điểm 'Chủ đề 21: Những bông hoa nhỏ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Bông hoa niềm vui' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: Bông hoa niềm vui' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b101",
      "lessonNumber": 2,
      "title": "Bài 2: Những bông hoa nhỏ trên sân",
      "topic": "Chủ đề 21: Những bông hoa nhỏ",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "29",
      "reading": {
        "title": "Những bông hoa nhỏ trên sân",
        "pages": "29",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Những bông hoa nhỏ trên sân' (SGK Tiếng Việt 1 Chân trời sáng tạo, 29). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Những bông hoa nhỏ trên sân' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Những bông hoa nhỏ trên sân' trong chủ điểm 'Chủ đề 21: Những bông hoa nhỏ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Những bông hoa nhỏ trên sân' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: Những bông hoa nhỏ trên sân' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b102",
      "lessonNumber": 3,
      "title": "Bài 3: Như bông hoa nhỏ",
      "topic": "Chủ đề 21: Những bông hoa nhỏ",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "32",
      "reading": {
        "title": "Như bông hoa nhỏ",
        "pages": "32",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Như bông hoa nhỏ' (SGK Tiếng Việt 1 Chân trời sáng tạo, 32). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Như bông hoa nhỏ' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Như bông hoa nhỏ' trong chủ điểm 'Chủ đề 21: Những bông hoa nhỏ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Như bông hoa nhỏ' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: Như bông hoa nhỏ' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b103",
      "lessonNumber": 4,
      "title": "Bài 4: Câu chuyện về chú trống choai",
      "topic": "Chủ đề 21: Những bông hoa nhỏ",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "34",
      "reading": {
        "title": "Câu chuyện về chú trống choai",
        "pages": "34",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Câu chuyện về chú trống choai' (SGK Tiếng Việt 1 Chân trời sáng tạo, 34). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Câu chuyện về chú trống choai' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Câu chuyện về chú trống choai' trong chủ điểm 'Chủ đề 21: Những bông hoa nhỏ' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: Câu chuyện về chú trống choai' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: Câu chuyện về chú trống choai' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b104",
      "lessonNumber": 1,
      "title": "Bài 1: Mưa",
      "topic": "Chủ đề 22: Mưa và nắng",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "35",
      "reading": {
        "title": "Mưa",
        "pages": "35",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Mưa' (SGK Tiếng Việt 1 Chân trời sáng tạo, 35). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Mưa' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Mưa' trong chủ điểm 'Chủ đề 22: Mưa và nắng' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Mưa' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: Mưa' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b105",
      "lessonNumber": 2,
      "title": "Bài 2: Mặt trời và hạt đậu",
      "topic": "Chủ đề 22: Mưa và nắng",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "37",
      "reading": {
        "title": "Mặt trời và hạt đậu",
        "pages": "37",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Mặt trời và hạt đậu' (SGK Tiếng Việt 1 Chân trời sáng tạo, 37). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Mặt trời và hạt đậu' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Mặt trời và hạt đậu' trong chủ điểm 'Chủ đề 22: Mưa và nắng' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Mặt trời và hạt đậu' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: Mặt trời và hạt đậu' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b106",
      "lessonNumber": 3,
      "title": "Bài 3: Cầu vồng",
      "topic": "Chủ đề 22: Mưa và nắng",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "40",
      "reading": {
        "title": "Cầu vồng",
        "pages": "40",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Cầu vồng' (SGK Tiếng Việt 1 Chân trời sáng tạo, 40). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Cầu vồng' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Cầu vồng' trong chủ điểm 'Chủ đề 22: Mưa và nắng' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Cầu vồng' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: Cầu vồng' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b107",
      "lessonNumber": 4,
      "title": "Bài 4: Thần mưa và thần nắng",
      "topic": "Chủ đề 22: Mưa và nắng",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "43",
      "reading": {
        "title": "Thần mưa và thần nắng",
        "pages": "43",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Thần mưa và thần nắng' (SGK Tiếng Việt 1 Chân trời sáng tạo, 43). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Thần mưa và thần nắng' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Thần mưa và thần nắng' trong chủ điểm 'Chủ đề 22: Mưa và nắng' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: Thần mưa và thần nắng' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: Thần mưa và thần nắng' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b108",
      "lessonNumber": 1,
      "title": "Bài 1: Chào xuân",
      "topic": "Chủ đề 23: Tết quê em",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "44",
      "reading": {
        "title": "Chào xuân",
        "pages": "44",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Chào xuân' (SGK Tiếng Việt 1 Chân trời sáng tạo, 44). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Chào xuân' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Chào xuân' trong chủ điểm 'Chủ đề 23: Tết quê em' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Chào xuân' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: Chào xuân' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b109",
      "lessonNumber": 2,
      "title": "Bài 2: Chợ hoa ngày Tết ở Hà Nội",
      "topic": "Chủ đề 23: Tết quê em",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "46",
      "reading": {
        "title": "Chợ hoa ngày Tết ở Hà Nội",
        "pages": "46",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Chợ hoa ngày Tết ở Hà Nội' (SGK Tiếng Việt 1 Chân trời sáng tạo, 46). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Chợ hoa ngày Tết ở Hà Nội' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Chợ hoa ngày Tết ở Hà Nội' trong chủ điểm 'Chủ đề 23: Tết quê em' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Chợ hoa ngày Tết ở Hà Nội' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: Chợ hoa ngày Tết ở Hà Nội' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b110",
      "lessonNumber": 3,
      "title": "Bài 3: Mâm cơm ngày Tết ở Huế",
      "topic": "Chủ đề 23: Tết quê em",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "49",
      "reading": {
        "title": "Mâm cơm ngày Tết ở Huế",
        "pages": "49",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Mâm cơm ngày Tết ở Huế' (SGK Tiếng Việt 1 Chân trời sáng tạo, 49). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Mâm cơm ngày Tết ở Huế' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Mâm cơm ngày Tết ở Huế' trong chủ điểm 'Chủ đề 23: Tết quê em' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Mâm cơm ngày Tết ở Huế' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: Mâm cơm ngày Tết ở Huế' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b111",
      "lessonNumber": 4,
      "title": "Bài 4: Đêm giao thừa ý nghĩa",
      "topic": "Chủ đề 23: Tết quê em",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "52",
      "reading": {
        "title": "Đêm giao thừa ý nghĩa",
        "pages": "52",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Đêm giao thừa ý nghĩa' (SGK Tiếng Việt 1 Chân trời sáng tạo, 52). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Đêm giao thừa ý nghĩa' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Đêm giao thừa ý nghĩa' trong chủ điểm 'Chủ đề 23: Tết quê em' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: Đêm giao thừa ý nghĩa' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: Đêm giao thừa ý nghĩa' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b112",
      "lessonNumber": 1,
      "title": "Bài 1: Gia đình thân thương",
      "topic": "Chủ đề 24: Những người bạn đầu tiên",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "53",
      "reading": {
        "title": "Gia đình thân thương",
        "pages": "53",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Gia đình thân thương' (SGK Tiếng Việt 1 Chân trời sáng tạo, 53). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Gia đình thân thương' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Gia đình thân thương' trong chủ điểm 'Chủ đề 24: Những người bạn đầu tiên' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Gia đình thân thương' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: Gia đình thân thương' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b113",
      "lessonNumber": 2,
      "title": "Bài 2: Làm bạn với bố",
      "topic": "Chủ đề 24: Những người bạn đầu tiên",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "55",
      "reading": {
        "title": "Làm bạn với bố",
        "pages": "55",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Làm bạn với bố' (SGK Tiếng Việt 1 Chân trời sáng tạo, 55). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Làm bạn với bố' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Làm bạn với bố' trong chủ điểm 'Chủ đề 24: Những người bạn đầu tiên' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Làm bạn với bố' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: Làm bạn với bố' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b114",
      "lessonNumber": 3,
      "title": "Bài 3: Những trò chơi cùng ông bà",
      "topic": "Chủ đề 24: Những người bạn đầu tiên",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "58",
      "reading": {
        "title": "Những trò chơi cùng ông bà",
        "pages": "58",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Những trò chơi cùng ông bà' (SGK Tiếng Việt 1 Chân trời sáng tạo, 58). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Những trò chơi cùng ông bà' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Những trò chơi cùng ông bà' trong chủ điểm 'Chủ đề 24: Những người bạn đầu tiên' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Những trò chơi cùng ông bà' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: Những trò chơi cùng ông bà' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b115",
      "lessonNumber": 4,
      "title": "Bài 4: Vinh và chiếc gối mèo",
      "topic": "Chủ đề 24: Những người bạn đầu tiên",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "61",
      "reading": {
        "title": "Vinh và chiếc gối mèo",
        "pages": "61",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Vinh và chiếc gối mèo' (SGK Tiếng Việt 1 Chân trời sáng tạo, 61). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Vinh và chiếc gối mèo' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Vinh và chiếc gối mèo' trong chủ điểm 'Chủ đề 24: Những người bạn đầu tiên' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: Vinh và chiếc gối mèo' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: Vinh và chiếc gối mèo' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b116",
      "lessonNumber": 1,
      "title": "Bài 1: Mẹ của thỏ bông",
      "topic": "Chủ đề 25: Mẹ và cô",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "62",
      "reading": {
        "title": "Mẹ của thỏ bông",
        "pages": "62",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Mẹ của thỏ bông' (SGK Tiếng Việt 1 Chân trời sáng tạo, 62). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Mẹ của thỏ bông' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Mẹ của thỏ bông' trong chủ điểm 'Chủ đề 25: Mẹ và cô' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Mẹ của thỏ bông' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: Mẹ của thỏ bông' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b117",
      "lessonNumber": 2,
      "title": "Bài 2: Nói với em",
      "topic": "Chủ đề 25: Mẹ và cô",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "65",
      "reading": {
        "title": "Nói với em",
        "pages": "65",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Nói với em' (SGK Tiếng Việt 1 Chân trời sáng tạo, 65). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Nói với em' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Nói với em' trong chủ điểm 'Chủ đề 25: Mẹ và cô' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Nói với em' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: Nói với em' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b118",
      "lessonNumber": 3,
      "title": "Bài 3: Mẹ và cô",
      "topic": "Chủ đề 25: Mẹ và cô",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "68",
      "reading": {
        "title": "Mẹ và cô",
        "pages": "68",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Mẹ và cô' (SGK Tiếng Việt 1 Chân trời sáng tạo, 68). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Mẹ và cô' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Mẹ và cô' trong chủ điểm 'Chủ đề 25: Mẹ và cô' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Mẹ và cô' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: Mẹ và cô' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b119",
      "lessonNumber": 4,
      "title": "Bài 4: Cô giáo như mẹ hiền",
      "topic": "Chủ đề 25: Mẹ và cô",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "70",
      "reading": {
        "title": "Cô giáo như mẹ hiền",
        "pages": "70",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Cô giáo như mẹ hiền' (SGK Tiếng Việt 1 Chân trời sáng tạo, 70). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Cô giáo như mẹ hiền' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Cô giáo như mẹ hiền' trong chủ điểm 'Chủ đề 25: Mẹ và cô' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: Cô giáo như mẹ hiền' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: Cô giáo như mẹ hiền' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b120",
      "lessonNumber": 1,
      "title": "Bài 1: Cô chổi rơm",
      "topic": "Chủ đề 26: Những người bạn im lặng",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "71",
      "reading": {
        "title": "Cô chổi rơm",
        "pages": "71",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Cô chổi rơm' (SGK Tiếng Việt 1 Chân trời sáng tạo, 71). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Cô chổi rơm' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Cô chổi rơm' trong chủ điểm 'Chủ đề 26: Những người bạn im lặng' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Cô chổi rơm' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: Cô chổi rơm' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b121",
      "lessonNumber": 2,
      "title": "Bài 2: Ngưỡng cửa",
      "topic": "Chủ đề 26: Những người bạn im lặng",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "74",
      "reading": {
        "title": "Ngưỡng cửa",
        "pages": "74",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ngưỡng cửa' (SGK Tiếng Việt 1 Chân trời sáng tạo, 74). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ngưỡng cửa' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ngưỡng cửa' trong chủ điểm 'Chủ đề 26: Những người bạn im lặng' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Ngưỡng cửa' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: Ngưỡng cửa' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b122",
      "lessonNumber": 3,
      "title": "Bài 3: Mũ bảo hiểm",
      "topic": "Chủ đề 26: Những người bạn im lặng",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "76",
      "reading": {
        "title": "Mũ bảo hiểm",
        "pages": "76",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Mũ bảo hiểm' (SGK Tiếng Việt 1 Chân trời sáng tạo, 76). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Mũ bảo hiểm' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Mũ bảo hiểm' trong chủ điểm 'Chủ đề 26: Những người bạn im lặng' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Mũ bảo hiểm' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: Mũ bảo hiểm' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b123",
      "lessonNumber": 4,
      "title": "Bài 4: Chuyện ghế và bàn",
      "topic": "Chủ đề 26: Những người bạn im lặng",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "79",
      "reading": {
        "title": "Chuyện ghế và bàn",
        "pages": "79",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Chuyện ghế và bàn' (SGK Tiếng Việt 1 Chân trời sáng tạo, 79). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Chuyện ghế và bàn' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Chuyện ghế và bàn' trong chủ điểm 'Chủ đề 26: Những người bạn im lặng' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: Chuyện ghế và bàn' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: Chuyện ghế và bàn' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b124",
      "lessonNumber": 1,
      "title": "Bài 1: Mít học vẽ tranh",
      "topic": "Chủ đề 27: Bạn cùng học cùng chơi",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "80",
      "reading": {
        "title": "Mít học vẽ tranh",
        "pages": "80",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Mít học vẽ tranh' (SGK Tiếng Việt 1 Chân trời sáng tạo, 80). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Mít học vẽ tranh' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Mít học vẽ tranh' trong chủ điểm 'Chủ đề 27: Bạn cùng học cùng chơi' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Mít học vẽ tranh' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: Mít học vẽ tranh' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b125",
      "lessonNumber": 2,
      "title": "Bài 2: Vui học ở Thảo cầm viên",
      "topic": "Chủ đề 27: Bạn cùng học cùng chơi",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "83",
      "reading": {
        "title": "Vui học ở Thảo cầm viên",
        "pages": "83",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Vui học ở Thảo cầm viên' (SGK Tiếng Việt 1 Chân trời sáng tạo, 83). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Vui học ở Thảo cầm viên' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Vui học ở Thảo cầm viên' trong chủ điểm 'Chủ đề 27: Bạn cùng học cùng chơi' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Vui học ở Thảo cầm viên' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: Vui học ở Thảo cầm viên' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b126",
      "lessonNumber": 3,
      "title": "Bài 3: Cùng vui chơi",
      "topic": "Chủ đề 27: Bạn cùng học cùng chơi",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "86",
      "reading": {
        "title": "Cùng vui chơi",
        "pages": "86",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Cùng vui chơi' (SGK Tiếng Việt 1 Chân trời sáng tạo, 86). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Cùng vui chơi' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Cùng vui chơi' trong chủ điểm 'Chủ đề 27: Bạn cùng học cùng chơi' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Cùng vui chơi' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: Cùng vui chơi' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b127",
      "lessonNumber": 4,
      "title": "Bài 4: Đôi bạn và hai chú chim non",
      "topic": "Chủ đề 27: Bạn cùng học cùng chơi",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "88",
      "reading": {
        "title": "Đôi bạn và hai chú chim non",
        "pages": "88",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Đôi bạn và hai chú chim non' (SGK Tiếng Việt 1 Chân trời sáng tạo, 88). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Đôi bạn và hai chú chim non' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Đôi bạn và hai chú chim non' trong chủ điểm 'Chủ đề 27: Bạn cùng học cùng chơi' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: Đôi bạn và hai chú chim non' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: Đôi bạn và hai chú chim non' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b128",
      "lessonNumber": 1,
      "title": "Bài 1: Câu chuyện về giấy kẻ",
      "topic": "Chủ đề 28: Trong chiếc cặp của em",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "89",
      "reading": {
        "title": "Câu chuyện về giấy kẻ",
        "pages": "89",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Câu chuyện về giấy kẻ' (SGK Tiếng Việt 1 Chân trời sáng tạo, 89). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Câu chuyện về giấy kẻ' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Câu chuyện về giấy kẻ' trong chủ điểm 'Chủ đề 28: Trong chiếc cặp của em' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Câu chuyện về giấy kẻ' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: Câu chuyện về giấy kẻ' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b129",
      "lessonNumber": 2,
      "title": "Bài 2: Trong chiếc cặp của em",
      "topic": "Chủ đề 28: Trong chiếc cặp của em",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "92",
      "reading": {
        "title": "Trong chiếc cặp của em",
        "pages": "92",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Trong chiếc cặp của em' (SGK Tiếng Việt 1 Chân trời sáng tạo, 92). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Trong chiếc cặp của em' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Trong chiếc cặp của em' trong chủ điểm 'Chủ đề 28: Trong chiếc cặp của em' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Trong chiếc cặp của em' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: Trong chiếc cặp của em' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b130",
      "lessonNumber": 3,
      "title": "Bài 3: Những điều cần biết về bút chì",
      "topic": "Chủ đề 28: Trong chiếc cặp của em",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "94",
      "reading": {
        "title": "Những điều cần biết về bút chì",
        "pages": "94",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Những điều cần biết về bút chì' (SGK Tiếng Việt 1 Chân trời sáng tạo, 94). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Những điều cần biết về bút chì' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Những điều cần biết về bút chì' trong chủ điểm 'Chủ đề 28: Trong chiếc cặp của em' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Những điều cần biết về bút chì' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: Những điều cần biết về bút chì' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b131",
      "lessonNumber": 4,
      "title": "Bài 4: Ai quan trọng nhất?",
      "topic": "Chủ đề 28: Trong chiếc cặp của em",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "97",
      "reading": {
        "title": "Ai quan trọng nhất?",
        "pages": "97",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ai quan trọng nhất?' (SGK Tiếng Việt 1 Chân trời sáng tạo, 97). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ai quan trọng nhất?' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ai quan trọng nhất?' trong chủ điểm 'Chủ đề 28: Trong chiếc cặp của em' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: Ai quan trọng nhất?' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: Ai quan trọng nhất?' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b132",
      "lessonNumber": 1,
      "title": "Bài 1: Chuyện xảy ra trên đường",
      "topic": "Đường đến trường",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "98 - 100",
      "reading": {
        "title": "Chuyện xảy ra trên đường",
        "pages": "98 - 100",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Chuyện xảy ra trên đường' (SGK Tiếng Việt 1 Chân trời sáng tạo, 98 - 100). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Chuyện xảy ra trên đường' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Chuyện xảy ra trên đường' trong chủ điểm 'Đường đến trường' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Chuyện xảy ra trên đường' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: Chuyện xảy ra trên đường' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b133",
      "lessonNumber": 2,
      "title": "Bài 2: Đi học",
      "topic": "Đường đến trường",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "101 - 102",
      "reading": {
        "title": "Đi học",
        "pages": "101 - 102",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Đi học' (SGK Tiếng Việt 1 Chân trời sáng tạo, 101 - 102). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Đi học' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Đi học' trong chủ điểm 'Đường đến trường' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Đi học' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: Đi học' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b134",
      "lessonNumber": 3,
      "title": "Bài 3: Biển báo",
      "topic": "Đường đến trường",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "103 - 105",
      "reading": {
        "title": "Biển báo",
        "pages": "103 - 105",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Biển báo' (SGK Tiếng Việt 1 Chân trời sáng tạo, 103 - 105). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Biển báo' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Biển báo' trong chủ điểm 'Đường đến trường' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Biển báo' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: Biển báo' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b135",
      "lessonNumber": 4,
      "title": "Bài 4: Chuyện hai chú thỏ",
      "topic": "Đường đến trường",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "106",
      "reading": {
        "title": "Chuyện hai chú thỏ",
        "pages": "106",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Chuyện hai chú thỏ' (SGK Tiếng Việt 1 Chân trời sáng tạo, 106). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Chuyện hai chú thỏ' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Chuyện hai chú thỏ' trong chủ điểm 'Đường đến trường' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: Chuyện hai chú thỏ' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: Chuyện hai chú thỏ' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b136",
      "lessonNumber": 1,
      "title": "Bài 1: Làng em buổi sáng",
      "topic": "Làng quê yên bình",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "107 - 108",
      "reading": {
        "title": "Làng em buổi sáng",
        "pages": "107 - 108",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Làng em buổi sáng' (SGK Tiếng Việt 1 Chân trời sáng tạo, 107 - 108). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Làng em buổi sáng' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Làng em buổi sáng' trong chủ điểm 'Làng quê yên bình' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Làng em buổi sáng' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: Làng em buổi sáng' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b137",
      "lessonNumber": 2,
      "title": "Bài 2: Ban mai trên bản",
      "topic": "Làng quê yên bình",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "109 - 111",
      "reading": {
        "title": "Ban mai trên bản",
        "pages": "109 - 111",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ban mai trên bản' (SGK Tiếng Việt 1 Chân trời sáng tạo, 109 - 111). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ban mai trên bản' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ban mai trên bản' trong chủ điểm 'Làng quê yên bình' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Ban mai trên bản' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: Ban mai trên bản' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b138",
      "lessonNumber": 3,
      "title": "Bài 3: Làng gốm Bát Tràng",
      "topic": "Làng quê yên bình",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "112 - 114",
      "reading": {
        "title": "Làng gốm Bát Tràng",
        "pages": "112 - 114",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Làng gốm Bát Tràng' (SGK Tiếng Việt 1 Chân trời sáng tạo, 112 - 114). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Làng gốm Bát Tràng' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Làng gốm Bát Tràng' trong chủ điểm 'Làng quê yên bình' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Làng gốm Bát Tràng' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: Làng gốm Bát Tràng' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b139",
      "lessonNumber": 4,
      "title": "Bài 4: Mong ước của ngựa con",
      "topic": "Làng quê yên bình",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "115",
      "reading": {
        "title": "Mong ước của ngựa con",
        "pages": "115",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Mong ước của ngựa con' (SGK Tiếng Việt 1 Chân trời sáng tạo, 115). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Mong ước của ngựa con' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Mong ước của ngựa con' trong chủ điểm 'Làng quê yên bình' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: Mong ước của ngựa con' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: Mong ước của ngựa con' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b140",
      "lessonNumber": 1,
      "title": "Bài 1: Dạo phố",
      "topic": "Phố xá nhộn nhịp",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "116 - 117",
      "reading": {
        "title": "Dạo phố",
        "pages": "116 - 117",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Dạo phố' (SGK Tiếng Việt 1 Chân trời sáng tạo, 116 - 117). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Dạo phố' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Dạo phố' trong chủ điểm 'Phố xá nhộn nhịp' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Dạo phố' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: Dạo phố' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b141",
      "lessonNumber": 2,
      "title": "Bài 2: Bưu điện Thành phố Hồ Chí Minh",
      "topic": "Phố xá nhộn nhịp",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "118 - 120",
      "reading": {
        "title": "Bưu điện Thành phố Hồ Chí Minh",
        "pages": "118 - 120",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Bưu điện Thành phố Hồ Chí Minh' (SGK Tiếng Việt 1 Chân trời sáng tạo, 118 - 120). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Bưu điện Thành phố Hồ Chí Minh' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Bưu điện Thành phố Hồ Chí Minh' trong chủ điểm 'Phố xá nhộn nhịp' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Bưu điện Thành phố Hồ Chí Minh' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: Bưu điện Thành phố Hồ Chí Minh' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b142",
      "lessonNumber": 3,
      "title": "Bài 3: Hồ Gươm",
      "topic": "Phố xá nhộn nhịp",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "121 - 123",
      "reading": {
        "title": "Hồ Gươm",
        "pages": "121 - 123",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Hồ Gươm' (SGK Tiếng Việt 1 Chân trời sáng tạo, 121 - 123). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Hồ Gươm' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Hồ Gươm' trong chủ điểm 'Phố xá nhộn nhịp' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Hồ Gươm' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: Hồ Gươm' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b143",
      "lessonNumber": 4,
      "title": "Bài 4: Xe lu và xe ca",
      "topic": "Phố xá nhộn nhịp",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "124",
      "reading": {
        "title": "Xe lu và xe ca",
        "pages": "124",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Xe lu và xe ca' (SGK Tiếng Việt 1 Chân trời sáng tạo, 124). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Xe lu và xe ca' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Xe lu và xe ca' trong chủ điểm 'Phố xá nhộn nhịp' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: Xe lu và xe ca' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: Xe lu và xe ca' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b144",
      "lessonNumber": 1,
      "title": "Bài 1: Khu rừng kì lạ dưới đáy biển",
      "topic": "Biển đảo yêu thương",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "125 - 127",
      "reading": {
        "title": "Khu rừng kì lạ dưới đáy biển",
        "pages": "125 - 127",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Khu rừng kì lạ dưới đáy biển' (SGK Tiếng Việt 1 Chân trời sáng tạo, 125 - 127). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Khu rừng kì lạ dưới đáy biển' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Khu rừng kì lạ dưới đáy biển' trong chủ điểm 'Biển đảo yêu thương' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Khu rừng kì lạ dưới đáy biển' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: Khu rừng kì lạ dưới đáy biển' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b145",
      "lessonNumber": 2,
      "title": "Bài 2: Thư gửi bố ngoài đảo",
      "topic": "Biển đảo yêu thương",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "128 - 129",
      "reading": {
        "title": "Thư gửi bố ngoài đảo",
        "pages": "128 - 129",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Thư gửi bố ngoài đảo' (SGK Tiếng Việt 1 Chân trời sáng tạo, 128 - 129). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Thư gửi bố ngoài đảo' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Thư gửi bố ngoài đảo' trong chủ điểm 'Biển đảo yêu thương' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Thư gửi bố ngoài đảo' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: Thư gửi bố ngoài đảo' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b146",
      "lessonNumber": 3,
      "title": "Bài 3: Nữ hoàng của đảo",
      "topic": "Biển đảo yêu thương",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "130 - 132",
      "reading": {
        "title": "Nữ hoàng của đảo",
        "pages": "130 - 132",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Nữ hoàng của đảo' (SGK Tiếng Việt 1 Chân trời sáng tạo, 130 - 132). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Nữ hoàng của đảo' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Nữ hoàng của đảo' trong chủ điểm 'Biển đảo yêu thương' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Nữ hoàng của đảo' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: Nữ hoàng của đảo' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b147",
      "lessonNumber": 4,
      "title": "Bài 4: Tôm càng và cá con",
      "topic": "Biển đảo yêu thương",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "133",
      "reading": {
        "title": "Tôm càng và cá con",
        "pages": "133",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Tôm càng và cá con' (SGK Tiếng Việt 1 Chân trời sáng tạo, 133). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Tôm càng và cá con' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Tôm càng và cá con' trong chủ điểm 'Biển đảo yêu thương' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: Tôm càng và cá con' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: Tôm càng và cá con' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b148",
      "lessonNumber": 1,
      "title": "Bài 1: Chuyện của Nam",
      "topic": "Chúng mình thật đặc biệt",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "134 - 136",
      "reading": {
        "title": "Chuyện của Nam",
        "pages": "134 - 136",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Chuyện của Nam' (SGK Tiếng Việt 1 Chân trời sáng tạo, 134 - 136). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Chuyện của Nam' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Chuyện của Nam' trong chủ điểm 'Chúng mình thật đặc biệt' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Chuyện của Nam' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: Chuyện của Nam' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b149",
      "lessonNumber": 2,
      "title": "Bài 2: Mọi người đều khác biệt",
      "topic": "Chúng mình thật đặc biệt",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "137 - 139",
      "reading": {
        "title": "Mọi người đều khác biệt",
        "pages": "137 - 139",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Mọi người đều khác biệt' (SGK Tiếng Việt 1 Chân trời sáng tạo, 137 - 139). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Mọi người đều khác biệt' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Mọi người đều khác biệt' trong chủ điểm 'Chúng mình thật đặc biệt' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Mọi người đều khác biệt' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: Mọi người đều khác biệt' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b150",
      "lessonNumber": 3,
      "title": "Bài 3: Ước mơ nào cũng quý",
      "topic": "Chúng mình thật đặc biệt",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "140 - 141",
      "reading": {
        "title": "Ước mơ nào cũng quý",
        "pages": "140 - 141",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ước mơ nào cũng quý' (SGK Tiếng Việt 1 Chân trời sáng tạo, 140 - 141). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ước mơ nào cũng quý' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ước mơ nào cũng quý' trong chủ điểm 'Chúng mình thật đặc biệt' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Ước mơ nào cũng quý' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: Ước mơ nào cũng quý' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b151",
      "lessonNumber": 4,
      "title": "Bài 4: Xe cứu hoả Tí Hon",
      "topic": "Chúng mình thật đặc biệt",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "142",
      "reading": {
        "title": "Xe cứu hoả Tí Hon",
        "pages": "142",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Xe cứu hoả Tí Hon' (SGK Tiếng Việt 1 Chân trời sáng tạo, 142). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Xe cứu hoả Tí Hon' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Xe cứu hoả Tí Hon' trong chủ điểm 'Chúng mình thật đặc biệt' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: Xe cứu hoả Tí Hon' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: Xe cứu hoả Tí Hon' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b152",
      "lessonNumber": 1,
      "title": "Bài 1: Buổi học cuối năm",
      "topic": "Gửi lời chào lớp Một",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "143 - 145",
      "reading": {
        "title": "Buổi học cuối năm",
        "pages": "143 - 145",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Buổi học cuối năm' (SGK Tiếng Việt 1 Chân trời sáng tạo, 143 - 145). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Buổi học cuối năm' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Buổi học cuối năm' trong chủ điểm 'Gửi lời chào lớp Một' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Buổi học cuối năm' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: Buổi học cuối năm' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b153",
      "lessonNumber": 2,
      "title": "Bài 2: Gửi lời chào lớp Một",
      "topic": "Gửi lời chào lớp Một",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "146 - 147",
      "reading": {
        "title": "Gửi lời chào lớp Một",
        "pages": "146 - 147",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Gửi lời chào lớp Một' (SGK Tiếng Việt 1 Chân trời sáng tạo, 146 - 147). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Gửi lời chào lớp Một' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Gửi lời chào lớp Một' trong chủ điểm 'Gửi lời chào lớp Một' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Gửi lời chào lớp Một' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: Gửi lời chào lớp Một' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b154",
      "lessonNumber": 3,
      "title": "Bài 3: Kì nghỉ hè của em",
      "topic": "Gửi lời chào lớp Một",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "148 - 150",
      "reading": {
        "title": "Kì nghỉ hè của em",
        "pages": "148 - 150",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Kì nghỉ hè của em' (SGK Tiếng Việt 1 Chân trời sáng tạo, 148 - 150). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Kì nghỉ hè của em' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Kì nghỉ hè của em' trong chủ điểm 'Gửi lời chào lớp Một' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Kì nghỉ hè của em' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: Kì nghỉ hè của em' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b155",
      "lessonNumber": 4,
      "title": "Bài 4: Những phần thưởng đặc biệt",
      "topic": "Gửi lời chào lớp Một",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "151",
      "reading": {
        "title": "Những phần thưởng đặc biệt",
        "pages": "151",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Những phần thưởng đặc biệt' (SGK Tiếng Việt 1 Chân trời sáng tạo, 151). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Những phần thưởng đặc biệt' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Những phần thưởng đặc biệt' trong chủ điểm 'Gửi lời chào lớp Một' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: Những phần thưởng đặc biệt' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: Những phần thưởng đặc biệt' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b156",
      "lessonNumber": 1,
      "title": "Bài 1: Ôn tập 1",
      "topic": "Những điều em đã học",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "152 - 153",
      "reading": {
        "title": "Ôn tập 1",
        "pages": "152 - 153",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ôn tập 1' (SGK Tiếng Việt 1 Chân trời sáng tạo, 152 - 153). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ôn tập 1' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ôn tập 1' trong chủ điểm 'Những điều em đã học' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: Ôn tập 1' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: Ôn tập 1' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b157",
      "lessonNumber": 2,
      "title": "Bài 2: Ôn tập 2",
      "topic": "Những điều em đã học",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "154 - 155",
      "reading": {
        "title": "Ôn tập 2",
        "pages": "154 - 155",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ôn tập 2' (SGK Tiếng Việt 1 Chân trời sáng tạo, 154 - 155). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ôn tập 2' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ôn tập 2' trong chủ điểm 'Những điều em đã học' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: Ôn tập 2' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: Ôn tập 2' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b158",
      "lessonNumber": 3,
      "title": "Bài 3: Ôn tập 3",
      "topic": "Những điều em đã học",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "156 - 157",
      "reading": {
        "title": "Ôn tập 3",
        "pages": "156 - 157",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Ôn tập 3' (SGK Tiếng Việt 1 Chân trời sáng tạo, 156 - 157). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Ôn tập 3' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Ôn tập 3' trong chủ điểm 'Những điều em đã học' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 3: Ôn tập 3' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 3: Ôn tập 3' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b159",
      "lessonNumber": 4,
      "title": "Bài 4: Đánh giá cuối học kì II (Để tham khảo)",
      "topic": "Những điều em đã học",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "158 - 161",
      "reading": {
        "title": "Đánh giá cuối học kì II",
        "pages": "158 - 161",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'Đánh giá cuối học kì II' (SGK Tiếng Việt 1 Chân trời sáng tạo, 158 - 161). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'Đánh giá cuối học kì II' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'Đánh giá cuối học kì II' trong chủ điểm 'Những điều em đã học' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 4: Đánh giá cuối học kì II (Để tham khảo)' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 4: Đánh giá cuối học kì II (Để tham khảo)' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b160",
      "lessonNumber": 1,
      "title": "Bài 1: oa oe",
      "topic": "NGÀN HOA KHOE SẮC",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "pages": "6",
      "reading": {
        "title": "oa oe",
        "pages": "6",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'oa oe' (SGK Tiếng Việt 1 Chân trời sáng tạo, 6). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'oa oe' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'oa oe' trong chủ điểm 'NGÀN HOA KHOE SẮC' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 1: oa oe' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 1: oa oe' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
      "id": "tv1_ctst_b161",
      "lessonNumber": 2,
      "title": "Bài 2: uê uy",
      "topic": "uê uy",
      "volume": 2,
      "semester": 2,
      "week": 1,
      "pages": "8",
      "reading": {
        "title": "uê uy",
        "pages": "8",
        "genre": "Văn bản nghệ thuật (Truyện kể / Thơ)",
        "textType": "continuous",
        "coreContent": "Đọc hiểu văn bản 'uê uy' (SGK Tiếng Việt 1 Chân trời sáng tạo, 8). Nắm bắt mạch cảm xúc, hình ảnh đặc sắc và thông điệp giáo dục.",
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
          "question": "Nội dung chính hoặc thông điệp nổi bật của bài đọc 'uê uy' là gì?",
          "options": [
            "Ca ngợi tình cảm gắn bó, vẻ đẹp thiên nhiên và những trải nghiệm tuổi thơ ý nghĩa",
            "Miêu tả bức tranh thiên nhiên tĩnh lặng không có sự sống",
            "Kể về một cuộc thi thố tài năng đơn thuần",
            "Giải thích một quy luật toán học tự nhiên"
          ],
          "answer": 0,
          "explanation": "Bài đọc 'uê uy' trong chủ điểm 'uê uy' bồi dưỡng cho học sinh tình yêu quê hương, gia đình và cuộc sống."
        },
        {
          "type": "TN",
          "level": 2,
          "section": "ltvc",
          "cognitive": "interpret",
          "question": "Nội dung Luyện từ và câu trọng tâm của bài 'Bài 2: uê uy' (Quy tắc chính tả và từ ngữ) có tác dụng gì trong giao tiếp?",
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
          "question": "Dựa vào bài học 'Bài 2: uê uy' và nội dung Tập làm văn (Viết đoạn văn sáng tạo), em hãy viết đoạn văn ngắn (từ 4 đến 6 câu) thể hiện suy nghĩ hoặc cảm xúc của em.",
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
    window.SGK_TIENG_VIET_1_CTST = TIENG_VIET_1_CTST_DATA;
    if (window.SGK_REGISTRY && typeof window.SGK_REGISTRY.registerBook === 'function') {
      window.SGK_REGISTRY.registerBook(1, 'tieng_viet', TIENG_VIET_1_CTST_DATA, 'ctst');
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = TIENG_VIET_1_CTST_DATA;
  }
})(typeof window !== 'undefined' ? window : this);
