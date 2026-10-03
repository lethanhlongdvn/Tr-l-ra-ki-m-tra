/**
 * SỐ HÓA SÁCH GIÁO KHOA TOÁN LỚP 1
 * Bộ sách: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Nhà xuất bản: Nhà xuất bản Giáo dục Việt Nam
 * Chương trình Giáo dục phổ thông 2018 - Chuẩn Thông tư 27/2020/TT-BGDĐT
 */

(function(global) {
  'use strict';

  const SGK_TOAN_1 = {
  "metadata": {
    "grade": 1,
    "subjectId": "toan",
    "subjectName": "Toán",
    "bookName": "Toán 1 - Kết nối tri thức với cuộc sống",
    "publisher": "Nhà xuất bản Giáo dục Việt Nam",
    "totalWeeks": 35,
    "totalPeriods": 105,
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
      "id": "toan1_cd1",
      "name": "Chủ đề 1: Các số từ 0 đến 10",
      "semester": 1,
      "weeks": "1-5",
      "volume": 1
    },
    {
      "id": "toan1_cd2",
      "name": "Chủ đề 2: Làm quen với một số hình phẳng",
      "semester": 1,
      "weeks": "6-7",
      "volume": 1
    },
    {
      "id": "toan1_cd3",
      "name": "Chủ đề 3: Phép cộng, phép trừ trong phạm vi 10",
      "semester": 1,
      "weeks": "8-13",
      "volume": 1
    },
    {
      "id": "toan1_cd4",
      "name": "Chủ đề 4: Làm quen với hình khối và định hướng trong không gian",
      "semester": 1,
      "weeks": "14-16",
      "volume": 1
    },
    {
      "id": "toan1_cd5",
      "name": "Chủ đề 5: Ôn tập học kì 1",
      "semester": 1,
      "weeks": "17-18",
      "volume": 1
    },
    {
      "id": "toan1_cd6",
      "name": "Chủ đề 6: Các số đến 20",
      "semester": 2,
      "weeks": "19-21",
      "volume": 2
    },
    {
      "id": "toan1_cd7",
      "name": "Chủ đề 7: Phép cộng, phép trừ trong phạm vi 20",
      "semester": 2,
      "weeks": "22-25",
      "volume": 2
    },
    {
      "id": "toan1_cd8",
      "name": "Chủ đề 8: Độ dài và đo độ dài",
      "semester": 2,
      "weeks": "26-27",
      "volume": 2
    },
    {
      "id": "toan1_cd9",
      "name": "Chủ đề 9: Các số đến 100",
      "semester": 2,
      "weeks": "28-30",
      "volume": 2
    },
    {
      "id": "toan1_cd10",
      "name": "Chủ đề 10: Phép cộng, phép trừ trong phạm vi 100",
      "semester": 2,
      "weeks": "31-33",
      "volume": 2
    },
    {
      "id": "toan1_cd11",
      "name": "Chủ đề 11: Thời gian, giờ và lịch",
      "semester": 2,
      "weeks": "34",
      "volume": 2
    },
    {
      "id": "toan1_cd12",
      "name": "Chủ đề 12: Ôn tập cuối năm",
      "semester": 2,
      "weeks": "35",
      "volume": 2
    }
  ],
  "lessons": [
    {
      "id": "toan1_b1",
      "lessonNumber": 1,
      "title": "Bài 1: Các số 0, 1, 2, 3, 4, 5",
      "topic": "Chủ đề 1: Các số từ 0 đến 10",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "duration": "2",
      "coreKnowledge": "Nhận biết số lượng các nhóm đồ vật từ 0 đến 5. Đọc, viết và đếm thành thạo các số 0, 1, 2, 3, 4, 5.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Số nào dưới đây biểu thị số lượng không có đồ vật nào?",
          "options": [
            "Số 0",
            "Số 1",
            "Số 2",
            "Số 3"
          ],
          "answer": 0,
          "explanation": "Số 0 biểu thị không có gì."
        },
        {
          "type": "TL",
          "level": 1,
          "question": "Đếm và viết số lượng các bông hoa: ✿ ✿ ✿ ✿",
          "guide": "Có 4 bông hoa. Viết số 4."
        }
      ]
    },
    {
      "id": "toan1_b2",
      "lessonNumber": 2,
      "title": "Bài 2: Các số 6, 7, 8, 9, 10",
      "topic": "Chủ đề 1: Các số từ 0 đến 10",
      "volume": 1,
      "semester": 1,
      "week": 2,
      "duration": "2",
      "coreKnowledge": "Đọc, viết, đếm các số từ 6 đến 10. Thứ tự dãy số từ 0 đến 10.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Số đứng liền sau số 8 là số nào?",
          "options": [
            "Số 9",
            "Số 7",
            "Số 10",
            "Số 6"
          ],
          "answer": 0,
          "explanation": "Sau số 8 là số 9."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Viết dãy số từ 0 đến 10 theo thứ tự tăng dần.",
          "guide": "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10."
        }
      ]
    },
    {
      "id": "toan1_b4",
      "lessonNumber": 4,
      "title": "Bài 4: So sánh số (dấu >, <, =)",
      "topic": "Chủ đề 1: Các số từ 0 đến 10",
      "volume": 1,
      "semester": 1,
      "week": 3,
      "duration": "2",
      "coreKnowledge": "Sử dụng các dấu lớn hơn (>), bé hơn (<), bằng nhau (=) để so sánh các số trong phạm vi 10.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Điền dấu thích hợp vào chỗ chấm: 7 ... 9",
          "options": [
            "<",
            ">",
            "=",
            "+"
          ],
          "answer": 0,
          "explanation": "7 bé hơn 9 nên điền dấu <."
        }
      ]
    },
    {
      "id": "toan1_b7",
      "lessonNumber": 7,
      "title": "Bài 7: Hình vuông, hình tròn, hình tam giác, hình chữ nhật",
      "topic": "Chủ đề 2: Làm quen với một số hình phẳng",
      "volume": 1,
      "semester": 1,
      "week": 6,
      "duration": "2",
      "coreKnowledge": "Nhận biết và gọi đúng tên các hình phẳng cơ bản: hình vuông, hình tròn, hình tam giác, hình chữ nhật qua đồ vật thật (khăn tay, biển báo, bánh xe...).",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Bánh xe đạp hoặc chiếc đĩa ăn thường có dạng hình gì?",
          "options": [
            "Hình tròn",
            "Hình vuông",
            "Hình tam giác",
            "Hình chữ nhật"
          ],
          "answer": 0,
          "explanation": "Bánh xe đạp có dạng hình tròn."
        }
      ]
    },
    {
      "id": "toan1_b10",
      "lessonNumber": 10,
      "title": "Bài 10: Phép cộng trong phạm vi 10",
      "topic": "Chủ đề 3: Phép cộng, phép trừ trong phạm vi 10",
      "volume": 1,
      "semester": 1,
      "week": 8,
      "duration": "3",
      "coreKnowledge": "Ý nghĩa của phép cộng là 'gộp lại', 'thêm vào'. Dấu cộng (+), dấu bằng (=). Bảng cộng trong phạm vi 10.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Tính: 3 + 4 = ?",
          "options": [
            "7",
            "6",
            "8",
            "5"
          ],
          "answer": 0,
          "explanation": "3 + 4 = 7."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Có 2 con chim trên cành, thêm 3 con chim bay đến. Hỏi có tất cả bao nhiêu con chim?",
          "guide": "Phép tính: 2 + 3 = 5 (con chim). Trả lời: Có tất cả 5 con chim."
        }
      ]
    },
    {
      "id": "toan1_b12",
      "lessonNumber": 12,
      "title": "Bài 12: Phép trừ trong phạm vi 10",
      "topic": "Chủ đề 3: Phép cộng, phép trừ trong phạm vi 10",
      "volume": 1,
      "semester": 1,
      "week": 10,
      "duration": "3",
      "coreKnowledge": "Ý nghĩa phép trừ là 'bớt đi', 'tách ra'. Dấu trừ (-). Bảng trừ trong phạm vi 10.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Tính: 9 - 5 = ?",
          "options": [
            "4",
            "5",
            "3",
            "6"
          ],
          "answer": 0,
          "explanation": "9 - 5 = 4."
        }
      ]
    },
    {
      "id": "toan1_b14",
      "lessonNumber": 14,
      "title": "Bài 14: Khối lập phương, khối hộp chữ nhật",
      "topic": "Chủ đề 4: Làm quen với hình khối và định hướng trong không gian",
      "volume": 1,
      "semester": 1,
      "week": 14,
      "duration": "2",
      "coreKnowledge": "Nhận biết khối lập phương (viên xúc xắc, khối rubik) và khối hộp chữ nhật (hộp phấn, viên gạch, bao diêm).",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Hộp phấn viết bảng có dạng khối hình nào?",
          "options": [
            "Khối hộp chữ nhật",
            "Khối lập phương",
            "Hình tròn",
            "Hình tam giác"
          ],
          "answer": 0,
          "explanation": "Hộp phấn có dạng khối hộp chữ nhật."
        }
      ]
    },
    {
      "id": "toan1_b15",
      "lessonNumber": 15,
      "title": "Bài 15: Vị trí, định hướng trong không gian",
      "topic": "Chủ đề 4: Làm quen với hình khối và định hướng trong không gian",
      "volume": 1,
      "semester": 1,
      "week": 15,
      "duration": "2",
      "coreKnowledge": "Xác định các vị trí không gian: trên - dưới, trước - sau, phải - trái, ở giữa.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Tay nào của em thường dùng để cầm bút viết bài?",
          "options": [
            "Tay phải",
            "Tay trái",
            "Cả hai tay",
            "Không xác định"
          ],
          "answer": 0,
          "explanation": "Đa số học sinh viết bài bằng tay phải."
        }
      ]
    },
    {
      "id": "toan1_b21",
      "lessonNumber": 21,
      "title": "Bài 21: Các số từ 11 đến 20",
      "topic": "Chủ đề 6: Các số đến 20",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "duration": "3",
      "coreKnowledge": "Đọc, viết, cấu tạo các số từ 11 đến 20. 10 đơn vị tạo thành 1 chục. Ví dụ 14 gồm 1 chục và 4 đơn vị.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Số gồm 1 chục và 7 đơn vị là số nào?",
          "options": [
            "17",
            "71",
            "107",
            "70"
          ],
          "answer": 0,
          "explanation": "1 chục và 7 đơn vị là 17."
        }
      ]
    },
    {
      "id": "toan1_b25",
      "lessonNumber": 25,
      "title": "Bài 25: Phép cộng (không nhớ) trong phạm vi 20",
      "topic": "Chủ đề 7: Phép cộng, phép trừ trong phạm vi 20",
      "volume": 2,
      "semester": 2,
      "week": 22,
      "duration": "3",
      "coreKnowledge": "Cộng nhẩm dạng 12 + 3, 10 + 5, 14 + 5... Cộng phần đơn vị rồi giữ nguyên hàng chục.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Tính: 13 + 4 = ?",
          "options": [
            "17",
            "16",
            "18",
            "15"
          ],
          "answer": 0,
          "explanation": "3 + 4 = 7 -> 13 + 4 = 17."
        }
      ]
    },
    {
      "id": "toan1_b26",
      "lessonNumber": 26,
      "title": "Bài 26: Phép trừ (không nhớ) trong phạm vi 20",
      "topic": "Chủ đề 7: Phép cộng, phép trừ trong phạm vi 20",
      "volume": 2,
      "semester": 2,
      "week": 23,
      "duration": "3",
      "coreKnowledge": "Trừ nhẩm dạng 17 - 4, 15 - 5, 19 - 6... Trừ phần đơn vị.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Tính: 18 - 6 = ?",
          "options": [
            "12",
            "11",
            "13",
            "14"
          ],
          "answer": 0,
          "explanation": "8 - 6 = 2 -> 18 - 6 = 12."
        }
      ]
    },
    {
      "id": "toan1_b29",
      "lessonNumber": 29,
      "title": "Bài 29: Xăng-ti-mét (cm)",
      "topic": "Chủ đề 8: Độ dài và đo độ dài",
      "volume": 2,
      "semester": 2,
      "week": 26,
      "duration": "2",
      "coreKnowledge": "Đơn vị đo độ dài xăng-ti-mét (viết tắt là cm). Dùng thước thẳng có vạch chia cm để đo độ dài đoạn thẳng.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Xăng-ti-mét được viết tắt là:",
          "options": [
            "cm",
            "m",
            "kg",
            "l"
          ],
          "answer": 0,
          "explanation": "Xăng-ti-mét viết tắt là cm."
        }
      ]
    },
    {
      "id": "toan1_b31",
      "lessonNumber": 31,
      "title": "Bài 31: Các số có hai chữ số (đến 100)",
      "topic": "Chủ đề 9: Các số đến 100",
      "volume": 2,
      "semester": 2,
      "week": 28,
      "duration": "3",
      "coreKnowledge": "Đọc, viết, đếm các số tròn chục và số có hai chữ số từ 20 đến 100. Cấu tạo số chục và đơn vị.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Số tròn chục liền sau số 50 là:",
          "options": [
            "60",
            "40",
            "51",
            "70"
          ],
          "answer": 0,
          "explanation": "Liền sau 50 là tròn chục 60."
        }
      ]
    },
    {
      "id": "toan1_b35",
      "lessonNumber": 35,
      "title": "Bài 35: Phép cộng (không nhớ) trong phạm vi 100",
      "topic": "Chủ đề 10: Phép cộng, phép trừ trong phạm vi 100",
      "volume": 2,
      "semester": 2,
      "week": 31,
      "duration": "3",
      "coreKnowledge": "Đặt tính rồi tính cộng không nhớ: cộng đơn vị với đơn vị, chục với chục.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Tính: 32 + 25 = ?",
          "options": [
            "57",
            "56",
            "67",
            "55"
          ],
          "answer": 0,
          "explanation": "32 + 25 = 57."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Đặt tính rồi tính: 41 + 36",
          "guide": "41 + 36 = 77."
        }
      ]
    },
    {
      "id": "toan1_b36",
      "lessonNumber": 36,
      "title": "Bài 36: Phép trừ (không nhớ) trong phạm vi 100",
      "topic": "Chủ đề 10: Phép cộng, phép trừ trong phạm vi 100",
      "volume": 2,
      "semester": 2,
      "week": 32,
      "duration": "3",
      "coreKnowledge": "Đặt tính rồi tính trừ không nhớ các số có hai chữ số.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Tính: 68 - 23 = ?",
          "options": [
            "45",
            "44",
            "35",
            "55"
          ],
          "answer": 0,
          "explanation": "68 - 23 = 45."
        }
      ]
    },
    {
      "id": "toan1_b38",
      "lessonNumber": 38,
      "title": "Bài 38: Các ngày trong tuần",
      "topic": "Chủ đề 11: Thời gian, giờ và lịch",
      "volume": 2,
      "semester": 2,
      "week": 34,
      "duration": "2",
      "coreKnowledge": "Một tuần lễ có 7 ngày: Thứ Hai, Thứ Ba, Thứ Tư, Thứ Năm, Thứ Sáu, Thứ Bảy, Chủ Nhật. Xem đồng hồ đúng giờ.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Một tuần lễ có bao nhiêu ngày?",
          "options": [
            "7 ngày",
            "5 ngày",
            "6 ngày",
            "8 ngày"
          ],
          "answer": 0,
          "explanation": "Một tuần có 7 ngày."
        }
      ]
    },
    {
      "id": "toan1_b42",
      "lessonNumber": 42,
      "title": "Bài 42: Ôn tập chung cuối năm",
      "topic": "Chủ đề 12: Ôn tập cuối năm",
      "volume": 2,
      "semester": 2,
      "week": 35,
      "duration": "3",
      "coreKnowledge": "Củng cố tổng hợp toàn bộ chương trình Toán 1: đếm số, so sánh, cộng trừ không nhớ trong phạm vi 100, đo độ dài và hình học.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Số bé nhất có hai chữ số là:",
          "options": [
            "10",
            "11",
            "01",
            "99"
          ],
          "answer": 0,
          "explanation": "Số bé nhất có 2 chữ số là 10."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Mẹ mua 24 quả trứng, mẹ dùng hết 4 quả để làm bánh. Hỏi mẹ còn lại bao nhiêu quả trứng?",
          "guide": "Mẹ còn lại số quả trứng là: 24 - 4 = 20 (quả trứng). Đáp số: 20 quả trứng."
        }
      ]
    }
  ]
};

  if (typeof window !== 'undefined') {
    window.SGK_TOAN_1 = SGK_TOAN_1;
    if (window.SGK_REGISTRY && typeof window.SGK_REGISTRY.registerBook === 'function') {
      window.SGK_REGISTRY.registerBook(1, 'toan', SGK_TOAN_1);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = SGK_TOAN_1;
  }
})(typeof window !== 'undefined' ? window : this);
