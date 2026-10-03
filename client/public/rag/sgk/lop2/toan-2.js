/**
 * SỐ HÓA SÁCH GIÁO KHOA TOÁN LỚP 2
 * Bộ sách: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Nhà xuất bản: Nhà xuất bản Giáo dục Việt Nam
 * Chương trình Giáo dục phổ thông 2018 - Chuẩn Thông tư 27/2020/TT-BGDĐT
 * Đồng bộ chuẩn 100% KHDH (175 tiết, 14 chủ đề, 75 bài học)
 */

(function(global) {
  'use strict';

  const SGK_TOAN_2 = {
  "metadata": {
    "grade": 2,
    "subjectId": "toan",
    "subjectName": "Toán",
    "bookName": "Toán 2 - Kết nối tri thức với cuộc sống",
    "publisher": "Nhà xuất bản Giáo dục Việt Nam",
    "totalWeeks": 35,
    "totalPeriods": 175,
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
      "id": "toan2_cd1",
      "name": "Chủ đề 1: Ôn tập và bổ sung",
      "semester": 1,
      "weeks": "1-3",
      "volume": 1
    },
    {
      "id": "toan2_cd2",
      "name": "Chủ đề 2: Phép cộng, phép trừ trong phạm vi 20",
      "semester": 1,
      "weeks": "4-8",
      "volume": 1
    },
    {
      "id": "toan2_cd3",
      "name": "Chủ đề 3: Làm quen với khối lượng, dung tích",
      "semester": 1,
      "weeks": "8-10",
      "volume": 1
    },
    {
      "id": "toan2_cd4",
      "name": "Chủ đề 4: Phép cộng, phép trừ (có nhớ) trong phạm vi 100",
      "semester": 1,
      "weeks": "10-13",
      "volume": 1
    },
    {
      "id": "toan2_cd5",
      "name": "Chủ đề 5: Làm quen với hình phẳng",
      "semester": 1,
      "weeks": "14-15",
      "volume": 1
    },
    {
      "id": "toan2_cd6",
      "name": "Chủ đề 6: Ngày - giờ, giờ - phút, ngày - tháng",
      "semester": 1,
      "weeks": "15-16",
      "volume": 1
    },
    {
      "id": "toan2_cd7",
      "name": "Chủ đề 7: Ôn tập học kì I",
      "semester": 1,
      "weeks": "17-18",
      "volume": 1
    },
    {
      "id": "toan2_cd8",
      "name": "Chủ đề 8: Phép nhân, phép chia",
      "semester": 2,
      "weeks": "19-22",
      "volume": 2
    },
    {
      "id": "toan2_cd9",
      "name": "Chủ đề 9: Làm quen với hình khối",
      "semester": 2,
      "weeks": "23",
      "volume": 2
    },
    {
      "id": "toan2_cd10",
      "name": "Chủ đề 10: Các số trong phạm vi 1 000",
      "semester": 2,
      "weeks": "24-26",
      "volume": 2
    },
    {
      "id": "toan2_cd11",
      "name": "Chủ đề 11: Độ dài và đơn vị đo độ dài. Tiền Việt Nam",
      "semester": 2,
      "weeks": "27-28",
      "volume": 2
    },
    {
      "id": "toan2_cd12",
      "name": "Chủ đề 12: Phép cộng, phép trừ trong phạm vi 1 000",
      "semester": 2,
      "weeks": "28-31",
      "volume": 2
    },
    {
      "id": "toan2_cd13",
      "name": "Chủ đề 13: Làm quen với yếu tố thống kê, xác suất",
      "semester": 2,
      "weeks": "31-32",
      "volume": 2
    },
    {
      "id": "toan2_cd14",
      "name": "Chủ đề 14: Ôn tập cuối năm",
      "semester": 2,
      "weeks": "32-35",
      "volume": 2
    }
  ],
  "lessons": [
    {
      "id": "toan2_b1",
      "lessonNumber": 1,
      "title": "Bài 1: Ôn tập các số đến 100",
      "topic": "Chủ đề 1: Ôn tập và bổ sung",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "duration": "3",
      "coreKnowledge": "Đọc, viết, so sánh các số trong phạm vi 100. Phân tích cấu tạo số gồm số chục và số đơn vị. Thứ tự dãy số trên tia số.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Số gồm 5 chục và 8 đơn vị viết là:",
          "options": [
            "58",
            "85",
            "508",
            "805"
          ],
          "answer": 0,
          "explanation": "Số có 5 chục và 8 đơn vị là số 58."
        },
        {
          "type": "TN",
          "level": 2,
          "question": "Số liền sau của số lớn nhất có hai chữ số là:",
          "options": [
            "98",
            "99",
            "100",
            "101"
          ],
          "answer": 2,
          "explanation": "Số lớn nhất có 2 chữ số là 99, số liền sau 99 là 100."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Viết các số 45, 89, 23, 76 theo thứ tự từ bé đến lớn.",
          "guide": "So sánh chữ số hàng chục rồi xếp: 23, 45, 76, 89."
        },
        {
          "type": "TL",
          "level": 3,
          "question": "Từ ba chữ số 3, 7, 0, em hãy viết tất cả các số có hai chữ số khác nhau.",
          "guide": "Các số có hai chữ số viết được là: 30, 37, 70, 73."
        }
      ]
    },
    {
      "id": "toan2_b2",
      "lessonNumber": 2,
      "title": "Bài 2: Tia số. Số liền trước, số liền sau",
      "topic": "Chủ đề 1: Ôn tập và bổ sung",
      "volume": 1,
      "semester": 1,
      "week": 1,
      "duration": "2",
      "coreKnowledge": "Nhận biết tia số với gốc là 0. Xác định số liền trước (bớt 1) và số liền sau (thêm 1) của một số.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Số liền trước của số 70 là:",
          "options": [
            "69",
            "71",
            "68",
            "80"
          ],
          "answer": 0,
          "explanation": "Số liền trước của 70 là 70 - 1 = 69."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Tìm số liền trước và số liền sau của số 49.",
          "guide": "Số liền trước 49 là 48. Số liền sau 49 là 50."
        }
      ]
    },
    {
      "id": "toan2_b3",
      "lessonNumber": 3,
      "title": "Bài 3: Các thành phần của phép cộng, phép trừ",
      "topic": "Chủ đề 1: Ôn tập và bổ sung",
      "volume": 1,
      "semester": 1,
      "week": 2,
      "duration": "3",
      "coreKnowledge": "Tên gọi các thành phần và kết quả: Số hạng + Số hạng = Tổng; Số bị trừ - Số trừ = Hiệu.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Trong phép tính 32 + 15 = 47, số 47 được gọi là:",
          "options": [
            "Số hạng",
            "Tổng",
            "Số bị trừ",
            "Hiệu"
          ],
          "answer": 1,
          "explanation": "Kết quả của phép cộng gọi là Tổng."
        },
        {
          "type": "TN",
          "level": 1,
          "question": "Trong phép tính 68 - 25 = 43, số 68 được gọi là:",
          "options": [
            "Số bị trừ",
            "Số trừ",
            "Hiệu",
            "Số hạng"
          ],
          "answer": 0,
          "explanation": "Số đứng trước dấu trừ gọi là Số bị trừ."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Biết hai số hạng là 24 và 35. Em hãy viết phép tính và tính tổng.",
          "guide": "Phép tính: 24 + 35 = 59. Tổng là 59."
        }
      ]
    },
    {
      "id": "toan2_b4",
      "lessonNumber": 4,
      "title": "Bài 4: Hơn, kém nhau bao nhiêu",
      "topic": "Chủ đề 1: Ôn tập và bổ sung",
      "volume": 1,
      "semester": 1,
      "week": 2,
      "duration": "2",
      "coreKnowledge": "Nhận biết bài toán so sánh hai số hơn kém nhau bao nhiêu đơn vị bằng phép trừ.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 2,
          "question": "Lớp 2A có 35 học sinh, lớp 2B có 32 học sinh. Lớp 2A nhiều hơn lớp 2B số học sinh là:",
          "options": [
            "3 học sinh",
            "67 học sinh",
            "2 học sinh",
            "5 học sinh"
          ],
          "answer": 0,
          "explanation": "35 - 32 = 3 học sinh."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Hà có 18 cái kẹo, Lan có 12 cái kẹo. Hỏi Lan có ít hơn Hà bao nhiêu cái kẹo?",
          "guide": "Lan có ít hơn Hà số cái kẹo là: 18 - 12 = 6 (cái kẹo). Đáp số: 6 cái kẹo."
        }
      ]
    },
    {
      "id": "toan2_b5",
      "lessonNumber": 5,
      "title": "Bài 5: Ôn tập phép cộng, phép trừ (không nhớ) trong phạm vi 100",
      "topic": "Chủ đề 1: Ôn tập và bổ sung",
      "volume": 1,
      "semester": 1,
      "week": 3,
      "duration": "3",
      "coreKnowledge": "Đặt tính thẳng cột và tính nhẩm phép cộng, phép trừ không nhớ các số có hai chữ số.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Kết quả của phép tính 42 + 36 là:",
          "options": [
            "78",
            "76",
            "88",
            "68"
          ],
          "answer": 0,
          "explanation": "42 + 36 = 78."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Đặt tính rồi tính: a) 54 + 23; b) 87 - 35",
          "guide": "a) 54 + 23 = 77; b) 87 - 35 = 52. (Viết thẳng cột hàng chục, hàng đơn vị)."
        }
      ]
    },
    {
      "id": "toan2_b6",
      "lessonNumber": 6,
      "title": "Bài 6: Luyện tập chung",
      "topic": "Chủ đề 1: Ôn tập và bổ sung",
      "volume": 1,
      "semester": 1,
      "week": 3,
      "duration": "2",
      "coreKnowledge": "Luyện tập củng cố kĩ năng đọc, viết, so sánh số đến 100, xác định số liền trước, liền sau và các thành phần của phép cộng, phép trừ.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Số liền trước của số 70 là:",
          "options": [
            "69",
            "71",
            "68",
            "72"
          ],
          "answer": 0,
          "explanation": "Số liền trước của 70 là 70 - 1 = 69."
        },
        {
          "type": "TN",
          "level": 2,
          "question": "Trong phép tính 45 + 23 = 68, số 68 được gọi là:",
          "options": [
            "Số hạng",
            "Số bị trừ",
            "Tổng",
            "Hiệu"
          ],
          "answer": 2,
          "explanation": "Kết quả của phép cộng gọi là tổng."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Tính nhẩm: 30 + 50 và 80 - 30.",
          "guide": "30 + 50 = 80; 80 - 30 = 50."
        }
      ]
    },
    {
      "id": "toan2_b7",
      "lessonNumber": 7,
      "title": "Bài 7: Phép cộng (qua 10) trong phạm vi 20",
      "topic": "Chủ đề 2: Phép cộng, phép trừ trong phạm vi 20",
      "volume": 1,
      "semester": 1,
      "week": 4,
      "duration": "5",
      "coreKnowledge": "Cách thực hiện phép cộng qua 10 bằng cách tách số để tạo thành 10 rồi cộng với phần còn lại (Ví dụ: 9 + 5 = 9 + 1 + 4 = 14).",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Tính nhẩm: 9 + 4 = ?",
          "options": [
            "13",
            "14",
            "12",
            "15"
          ],
          "answer": 0,
          "explanation": "9 + 4 = 9 + 1 + 3 = 13."
        },
        {
          "type": "TN",
          "level": 1,
          "question": "Tính nhẩm: 8 + 5 = ?",
          "options": [
            "13",
            "12",
            "14",
            "15"
          ],
          "answer": 0,
          "explanation": "8 + 5 = 8 + 2 + 3 = 13."
        }
      ]
    },
    {
      "id": "toan2_b8",
      "lessonNumber": 8,
      "title": "Bài 8: Bảng cộng (qua 10)",
      "topic": "Chủ đề 2: Phép cộng, phép trừ trong phạm vi 20",
      "volume": 1,
      "semester": 1,
      "week": 5,
      "duration": "2",
      "coreKnowledge": "Bảng cộng qua 10 (9 cộng với một số, 8 cộng với một số, 7 cộng với một số, 6 cộng với một số).",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Trong các phép tính sau, phép tính nào có kết quả bằng 15?",
          "options": [
            "8 + 7",
            "9 + 5",
            "7 + 7",
            "8 + 6"
          ],
          "answer": 0,
          "explanation": "8 + 7 = 15; 9 + 5 = 14; 7 + 7 = 14; 8 + 6 = 14."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Tính: 7 + 6 + 2",
          "guide": "7 + 6 = 13, 13 + 2 = 15."
        }
      ]
    },
    {
      "id": "toan2_b9",
      "lessonNumber": 9,
      "title": "Bài 9: Bài toán về thêm, bớt một số đơn vị",
      "topic": "Chủ đề 2: Phép cộng, phép trừ trong phạm vi 20",
      "volume": 1,
      "semester": 1,
      "week": 5,
      "duration": "2",
      "coreKnowledge": "Giải bài toán có lời văn: thêm (làm phép cộng), bớt (làm phép trừ).",
      "sampleQuestions": [
        {
          "type": "TL",
          "level": 2,
          "question": "Trên cành có 9 con chim, một lát sau có thêm 5 con chim bay đến. Hỏi trên cành có tất cả bao nhiêu con chim?",
          "guide": "Số con chim có tất cả là: 9 + 5 = 14 (con chim). Đáp số: 14 con chim."
        }
      ]
    },
    {
      "id": "toan2_b10",
      "lessonNumber": 10,
      "title": "Bài 10: Luyện tập chung",
      "topic": "Chủ đề 2: Phép cộng, phép trừ trong phạm vi 20",
      "volume": 1,
      "semester": 1,
      "week": 5,
      "duration": "2",
      "coreKnowledge": "Củng cố kĩ năng tính cộng qua 10 trong phạm vi 20 bằng cách làm cho tròn 10 rồi cộng với số còn lại.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Kết quả của phép tính 9 + 5 là:",
          "options": [
            "13",
            "14",
            "15",
            "16"
          ],
          "answer": 1,
          "explanation": "9 + 5 = 9 + 1 + 4 = 14."
        },
        {
          "type": "TN",
          "level": 2,
          "question": "Phép tính nào dưới đây có kết quả bằng 15?",
          "options": [
            "8 + 6",
            "7 + 8",
            "9 + 7",
            "8 + 8"
          ],
          "answer": 1,
          "explanation": "7 + 8 = 15; 8 + 6 = 14; 9 + 7 = 16; 8 + 8 = 16."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Lan có 8 bông hoa đỏ và 6 bông hoa vàng. Hỏi Lan có tất cả bao nhiêu bông hoa?",
          "guide": "Lan có tất cả: 8 + 6 = 14 (bông hoa). Đáp số: 14 bông hoa."
        }
      ]
    },
    {
      "id": "toan2_b11",
      "lessonNumber": 11,
      "title": "Bài 11: Phép trừ (qua 10) trong phạm vi 20",
      "topic": "Chủ đề 2: Phép cộng, phép trừ trong phạm vi 20",
      "volume": 1,
      "semester": 1,
      "week": 6,
      "duration": "5",
      "coreKnowledge": "Cách thực hiện phép trừ qua 10 (trừ để được 10 rồi trừ số còn lại hoặc đếm lùi).",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Tính nhẩm: 13 - 5 = ?",
          "options": [
            "8",
            "7",
            "9",
            "6"
          ],
          "answer": 0,
          "explanation": "13 - 3 - 2 = 8."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Tính giá trị biểu thức: 16 - 7 + 4",
          "guide": "16 - 7 = 9; 9 + 4 = 13."
        }
      ]
    },
    {
      "id": "toan2_b12",
      "lessonNumber": 12,
      "title": "Bài 12: Bảng trừ (qua 10)",
      "topic": "Chủ đề 2: Phép cộng, phép trừ trong phạm vi 20",
      "volume": 1,
      "semester": 1,
      "week": 7,
      "duration": "2",
      "coreKnowledge": "Hình thành và ghi nhớ bảng trừ (qua 10) trong phạm vi 20; vận dụng giải các bài toán thực tế.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Kết quả của 13 - 5 là:",
          "options": [
            "7",
            "8",
            "9",
            "6"
          ],
          "answer": 1,
          "explanation": "13 - 5 = 13 - 3 - 2 = 8."
        },
        {
          "type": "TN",
          "level": 2,
          "question": "Số thích hợp điền vào dấu ? trong phép tính 15 - ? = 7 là:",
          "options": [
            "6",
            "7",
            "8",
            "9"
          ],
          "answer": 2,
          "explanation": "15 - 7 = 8 nên số cần điền là 8."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Mẹ mua về 16 quả trứng, mẹ đã dùng hết 9 quả để làm bánh. Hỏi mẹ còn lại bao nhiêu quả trứng?",
          "guide": "Mẹ còn lại: 16 - 9 = 7 (quả trứng). Đáp số: 7 quả trứng."
        }
      ]
    },
    {
      "id": "toan2_b13",
      "lessonNumber": 13,
      "title": "Bài 13: Bài toán về nhiều hơn, ít hơn một số đơn vị",
      "topic": "Chủ đề 2: Phép cộng, phép trừ trong phạm vi 20",
      "volume": 1,
      "semester": 1,
      "week": 7,
      "duration": "2",
      "coreKnowledge": "Nhận biết ý nghĩa thực tế của bài toán về nhiều hơn, ít hơn một số đơn vị; biết cách tìm số lớn (lấy số bé cộng phần nhiều hơn) và tìm số bé (lấy số lớn trừ phần ít hơn).",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 2,
          "question": "An có 9 cái kẹo, Bình có nhiều hơn An 4 cái kẹo. Hỏi Bình có bao nhiêu cái kẹo?",
          "options": [
            "12 cái",
            "13 cái",
            "14 cái",
            "5 cái"
          ],
          "answer": 1,
          "explanation": "Bình có số kẹo là: 9 + 4 = 13 (cái kẹo)."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Tổ Một trồng được 15 cây, tổ Hai trồng được ít hơn tổ Một 6 cây. Hỏi tổ Hai trồng được bao nhiêu cây?",
          "guide": "Tổ Hai trồng được: 15 - 6 = 9 (cây). Đáp số: 9 cây."
        }
      ]
    },
    {
      "id": "toan2_b14",
      "lessonNumber": 14,
      "title": "Bài 14: Luyện tập chung",
      "topic": "Chủ đề 2: Phép cộng, phép trừ trong phạm vi 20",
      "volume": 1,
      "semester": 1,
      "week": 8,
      "duration": "3",
      "coreKnowledge": "Luyện tập thành thạo phép cộng và phép trừ qua 10 trong phạm vi 20; giải bài toán về nhiều hơn, ít hơn.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Tính: 14 - 6 + 5 = ?",
          "options": [
            "12",
            "13",
            "14",
            "15"
          ],
          "answer": 1,
          "explanation": "14 - 6 = 8; 8 + 5 = 13."
        },
        {
          "type": "TL",
          "level": 3,
          "question": "Lớp 2A có 18 bạn nam, số bạn nữ ít hơn bạn nam 3 bạn. Hỏi lớp 2A có tất cả bao nhiêu học sinh?",
          "guide": "Số bạn nữ là: 18 - 3 = 15 (bạn). Lớp 2A có tất cả: 18 + 15 = 33 (học sinh). Đáp số: 33 học sinh."
        }
      ]
    },
    {
      "id": "toan2_b15",
      "lessonNumber": 15,
      "title": "Bài 15: Ki-lô-gam",
      "topic": "Chủ đề 3: Làm quen với khối lượng, dung tích",
      "volume": 1,
      "semester": 1,
      "week": 8,
      "duration": "3",
      "coreKnowledge": "Đơn vị đo khối lượng: ki-lô-gam (viết tắt là kg). Nhận biết cân thăng bằng, đọc số đo trên cân.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Ki-lô-gam được viết tắt là:",
          "options": [
            "kg",
            "g",
            "km",
            "l"
          ],
          "answer": 0,
          "explanation": "Ki-lô-gam viết tắt là kg."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Bao gạo to nặng 25 kg, bao gạo bé nặng 10 kg. Hỏi cả hai bao gạo nặng bao nhiêu ki-lô-gam?",
          "guide": "Cả hai bao nặng: 25 + 10 = 35 (kg). Đáp số: 35 kg."
        }
      ]
    },
    {
      "id": "toan2_b16",
      "lessonNumber": 16,
      "title": "Bài 16: Lít",
      "topic": "Chủ đề 3: Làm quen với khối lượng, dung tích",
      "volume": 1,
      "semester": 1,
      "week": 9,
      "duration": "2",
      "coreKnowledge": "Đơn vị đo dung tích: lít (viết tắt là l). Thực hiện phép cộng trừ với đơn vị lít.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Lít được viết tắt là:",
          "options": [
            "l",
            "kg",
            "m",
            "cm"
          ],
          "answer": 0,
          "explanation": "Lít viết tắt là chữ l."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Trong thùng có 18 l nước, mẹ múc ra 5 l để tưới cây. Hỏi trong thùng còn lại bao nhiêu lít nước?",
          "guide": "Trong thùng còn lại: 18 - 5 = 13 (l). Đáp số: 13 l."
        }
      ]
    },
    {
      "id": "toan2_b17",
      "lessonNumber": 17,
      "title": "Bài 17: Thực hành và trải nghiệm với các đơn vị ki-lô-gam, lít",
      "topic": "Chủ đề 3: Làm quen với khối lượng, dung tích",
      "volume": 1,
      "semester": 1,
      "week": 9,
      "duration": "2",
      "coreKnowledge": "Thực hành cân khối lượng các vật bằng cân đĩa/cân đồng hồ, đong chất lỏng bằng ca 1 lít; củng cố biểu tượng đại lượng kg và l.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Đơn vị dùng để đo khối lượng là:",
          "options": [
            "lít (l)",
            "ki-lô-gam (kg)",
            "xăng-ti-mét (cm)",
            "giờ"
          ],
          "answer": 1,
          "explanation": "Ki-lô-gam (kg) là đơn vị đo khối lượng."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Rót đầy nước từ một can 10 l vào các ca loại 2 l thì rót được mấy ca?",
          "guide": "Số ca rót được là: 10 : 2 = 5 (ca). Đáp số: 5 ca nước."
        }
      ]
    },
    {
      "id": "toan2_b18",
      "lessonNumber": 18,
      "title": "Bài 18: Luyện tập chung",
      "topic": "Chủ đề 3: Làm quen với khối lượng, dung tích",
      "volume": 1,
      "semester": 1,
      "week": 10,
      "duration": "1",
      "coreKnowledge": "Hệ thống hóa kiến thức về ki-lô-gam và lít; giải các bài toán liên quan đến đại lượng khối lượng và dung tích.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "15 kg + 8 kg = ?",
          "options": [
            "22 kg",
            "23 kg",
            "24 kg",
            "25 kg"
          ],
          "answer": 1,
          "explanation": "15 + 8 = 23 kg."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Bao gạo to nặng 25 kg, bao gạo bé nhẹ hơn bao gạo to 8 kg. Hỏi bao gạo bé nặng bao nhiêu ki-lô-gam?",
          "guide": "Bao gạo bé nặng: 25 - 8 = 17 (kg). Đáp số: 17 kg."
        }
      ]
    },
    {
      "id": "toan2_b19",
      "lessonNumber": 19,
      "title": "Bài 19: Phép cộng (có nhớ) số có hai chữ số với số có một chữ số",
      "topic": "Chủ đề 4: Phép cộng, phép trừ (có nhớ) trong phạm vi 100",
      "volume": 1,
      "semester": 1,
      "week": 10,
      "duration": "3",
      "coreKnowledge": "Kỹ thuật đặt tính và tính cộng có nhớ số có hai chữ số với số có một chữ số (cộng đơn vị trước, nhớ 1 sang hàng chục).",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Kết quả của phép tính 37 + 5 là:",
          "options": [
            "42",
            "41",
            "32",
            "43"
          ],
          "answer": 0,
          "explanation": "7 + 5 = 12 viết 2 nhớ 1; 3 thêm 1 bằng 4 -> 42."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Đặt tính rồi tính: 58 + 6",
          "guide": "58 + 6 = 64."
        }
      ]
    },
    {
      "id": "toan2_b20",
      "lessonNumber": 20,
      "title": "Bài 20: Phép cộng (có nhớ) số có hai chữ số với số có hai chữ số",
      "topic": "Chủ đề 4: Phép cộng, phép trừ (có nhớ) trong phạm vi 100",
      "volume": 1,
      "semester": 1,
      "week": 10,
      "duration": "4",
      "coreKnowledge": "Kỹ thuật cộng có nhớ dạng hai chữ số cộng hai chữ số.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Tính: 48 + 25 = ?",
          "options": [
            "73",
            "63",
            "72",
            "83"
          ],
          "answer": 0,
          "explanation": "48 + 25 = 73."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Đàn gà nhà bác An có 36 con gà trống và 28 con gà mái. Hỏi đàn gà có tất cả bao nhiêu con?",
          "guide": "Số gà có tất cả là: 36 + 28 = 64 (con). Đáp số: 64 con gà."
        }
      ]
    },
    {
      "id": "toan2_b21",
      "lessonNumber": 21,
      "title": "Bài 21: Luyện tập chung",
      "topic": "Chủ đề 4: Phép cộng, phép trừ (có nhớ) trong phạm vi 100",
      "volume": 1,
      "semester": 1,
      "week": 11,
      "duration": "2",
      "coreKnowledge": "Luyện tập đặt tính và tính phép cộng có nhớ trong phạm vi 100 dạng số có hai chữ số cộng với số có một hoặc hai chữ số.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Kết quả đặt tính của 37 + 5 là:",
          "options": [
            "41",
            "42",
            "43",
            "44"
          ],
          "answer": 1,
          "explanation": "7 + 5 = 12 viết 2 nhớ 1; 3 thêm 1 bằng 4 -> 42."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Đặt tính rồi tính: 48 + 26 và 59 + 17.",
          "guide": "48 + 26 = 74; 59 + 17 = 76."
        }
      ]
    },
    {
      "id": "toan2_b22",
      "lessonNumber": 22,
      "title": "Bài 22: Phép trừ (có nhớ) số có hai chữ số cho số có một chữ số",
      "topic": "Chủ đề 4: Phép cộng, phép trừ (có nhớ) trong phạm vi 100",
      "volume": 1,
      "semester": 1,
      "week": 12,
      "duration": "4",
      "coreKnowledge": "Kỹ thuật trừ có nhớ số có hai chữ số cho số có một chữ số.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Kết quả của 52 - 7 là:",
          "options": [
            "45",
            "44",
            "46",
            "43"
          ],
          "answer": 0,
          "explanation": "2 không trừ được 7, lấy 12 - 7 = 5, viết 5 nhớ 1; 5 - 1 = 4 -> 45."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Đặt tính rồi tính: 61 - 8",
          "guide": "61 - 8 = 53."
        }
      ]
    },
    {
      "id": "toan2_b23",
      "lessonNumber": 23,
      "title": "Bài 23: Phép trừ (có nhớ) số có hai chữ số cho số có hai chữ số",
      "topic": "Chủ đề 4: Phép cộng, phép trừ (có nhớ) trong phạm vi 100",
      "volume": 1,
      "semester": 1,
      "week": 12,
      "duration": "5",
      "coreKnowledge": "Kỹ thuật trừ có nhớ hai chữ số cho hai chữ số.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Kết quả của 74 - 28 là:",
          "options": [
            "46",
            "56",
            "45",
            "54"
          ],
          "answer": 0,
          "explanation": "74 - 28 = 46."
        },
        {
          "type": "TL",
          "level": 3,
          "question": "Tìm một số biết rằng lấy số đó trừ đi 27 thì được kết quả là 35.",
          "guide": "Số cần tìm là: 35 + 27 = 62."
        }
      ]
    },
    {
      "id": "toan2_b24",
      "lessonNumber": 24,
      "title": "Bài 24: Luyện tập chung",
      "topic": "Chủ đề 4: Phép cộng, phép trừ (có nhớ) trong phạm vi 100",
      "volume": 1,
      "semester": 1,
      "week": 13,
      "duration": "2",
      "coreKnowledge": "Củng cố kĩ năng thực hiện phép trừ có nhớ trong phạm vi 100; giải bài toán thực tế có liên quan.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Kết quả của 52 - 28 là:",
          "options": [
            "24",
            "34",
            "26",
            "36"
          ],
          "answer": 0,
          "explanation": "2 không trừ được 8, lấy 12 - 8 = 4 nhớ 1; 2 thêm 1 là 3; 5 - 3 = 2 -> 24."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Đàn gà nhà bác An có 45 con, bác đã bán đi 19 con gà. Hỏi nhà bác An còn lại bao nhiêu con gà?",
          "guide": "Bác An còn lại: 45 - 19 = 26 (con gà). Đáp số: 26 con gà."
        }
      ]
    },
    {
      "id": "toan2_b25",
      "lessonNumber": 25,
      "title": "Bài 25: Điểm, đoạn thẳng",
      "topic": "Chủ đề 5: Làm quen với hình phẳng",
      "volume": 1,
      "semester": 1,
      "week": 14,
      "duration": "2",
      "coreKnowledge": "Nhận biết điểm (chấm tròn nhỏ, đặt tên bằng chữ cái in hoa A, B, C...) và đoạn thẳng nối hai điểm (đoạn thẳng AB).",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Tên của một điểm thường được đặt bằng chữ cái nào?",
          "options": [
            "Chữ in hoa (A, B, C...)",
            "Chữ in thường (a, b, c...)",
            "Chữ số (1, 2, 3...)",
            "Kí hiệu đặc biệt"
          ],
          "answer": 0,
          "explanation": "Điểm được đặt tên bằng chữ cái in hoa."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Vẽ đoạn thẳng MN có độ dài 6 cm.",
          "guide": "Dùng thước thẳng có vạch cm, chấm điểm M tại vạch 0, điểm N tại vạch 6 rồi nối hai điểm."
        }
      ]
    },
    {
      "id": "toan2_b26",
      "lessonNumber": 26,
      "title": "Bài 26: Đường gấp khúc. Độ dài đường gấp khúc",
      "topic": "Chủ đề 5: Làm quen với hình phẳng",
      "volume": 1,
      "semester": 1,
      "week": 14,
      "duration": "2",
      "coreKnowledge": "Đường gấp khúc gồm nhiều đoạn thẳng nối tiếp nhau. Độ dài đường gấp khúc bằng tổng độ dài các đoạn thẳng thành phần.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 2,
          "question": "Đường gấp khúc ABC gồm hai đoạn thẳng AB = 5 cm và BC = 4 cm. Độ dài đường gấp khúc ABC là:",
          "options": [
            "9 cm",
            "1 cm",
            "20 cm",
            "8 cm"
          ],
          "answer": 0,
          "explanation": "5 + 4 = 9 cm."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Tính độ dài đường gấp khúc MNPQ biết MN = 3 cm, NP = 4 cm, PQ = 5 cm.",
          "guide": "Độ dài đường gấp khúc MNPQ là: 3 + 4 + 5 = 12 (cm)."
        }
      ]
    },
    {
      "id": "toan2_b27",
      "lessonNumber": 27,
      "title": "Bài 27: Thực hành gấp, cắt, ghép, xếp hình. Vẽ đoạn thẳng",
      "topic": "Chủ đề 5: Làm quen với hình phẳng",
      "volume": 1,
      "semester": 1,
      "week": 15,
      "duration": "2",
      "coreKnowledge": "Thực hành kĩ năng gấp, cắt, ghép, xếp các hình phẳng đơn giản; rèn luyện kĩ năng dùng thước thẳng để vẽ đoạn thẳng có độ dài cho trước.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Để vẽ đoạn thẳng AB dài 7 cm, ta đặt vạch số 0 của thước trùng với điểm nào?",
          "options": [
            "Điểm B",
            "Điểm A",
            "Điểm chính giữa",
            "Vạch 1 cm"
          ],
          "answer": 1,
          "explanation": "Đặt vạch 0 cm trùng điểm A rồi đánh dấu điểm B tại vạch 7 cm."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Nêu các bước gấp một tờ giấy hình vuông thành hai hình tam giác bằng nhau.",
          "guide": "Gấp đôi tờ giấy hình vuông theo đường chéo sao cho hai góc đối diện trùng khít nhau."
        }
      ]
    },
    {
      "id": "toan2_b28",
      "lessonNumber": 28,
      "title": "Bài 28: Luyện tập chung",
      "topic": "Chủ đề 5: Làm quen với hình phẳng",
      "volume": 1,
      "semester": 1,
      "week": 15,
      "duration": "1",
      "coreKnowledge": "Củng cố nhận biết điểm, đoạn thẳng, đường thẳng, đường cong, ba điểm thẳng hàng, đường gấp khúc và hình tứ giác.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Hình tứ giác là hình có mấy cạnh?",
          "options": [
            "3 cạnh",
            "4 cạnh",
            "5 cạnh",
            "6 cạnh"
          ],
          "answer": 1,
          "explanation": "Hình tứ giác có 4 đoạn thẳng khép kín gọi là 4 cạnh."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Một đường gấp khúc gồm 3 đoạn thẳng có độ dài lần lượt là 4 cm, 6 cm và 5 cm. Tính độ dài đường gấp khúc đó.",
          "guide": "Độ dài đường gấp khúc là: 4 + 6 + 5 = 15 (cm). Đáp số: 15 cm."
        }
      ]
    },
    {
      "id": "toan2_b29",
      "lessonNumber": 29,
      "title": "Bài 29: Ngày - giờ, giờ - phút",
      "topic": "Chủ đề 6: Ngày - giờ, giờ - phút, ngày - tháng",
      "volume": 1,
      "semester": 1,
      "week": 15,
      "duration": "2",
      "coreKnowledge": "Một ngày có 24 giờ. Một giờ có 60 phút. Xem đồng hồ khi kim phút chỉ số 12 (giờ đúng), số 3 (15 phút), số 6 (30 phút hay rưỡi).",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Một ngày có bao nhiêu giờ?",
          "options": [
            "24 giờ",
            "12 giờ",
            "60 giờ",
            "30 giờ"
          ],
          "answer": 0,
          "explanation": "Một ngày có 24 giờ."
        },
        {
          "type": "TN",
          "level": 1,
          "question": "Đồng hồ có kim ngắn chỉ số 8, kim dài chỉ số 6 là mấy giờ?",
          "options": [
            "8 giờ 30 phút (8 giờ rưỡi)",
            "8 giờ",
            "6 giờ 40 phút",
            "6 giờ 8 phút"
          ],
          "answer": 0,
          "explanation": "Kim dài chỉ số 6 là 30 phút."
        }
      ]
    },
    {
      "id": "toan2_b30",
      "lessonNumber": 30,
      "title": "Bài 30: Ngày - tháng",
      "topic": "Chủ đề 6: Ngày - giờ, giờ - phút, ngày - tháng",
      "volume": 1,
      "semester": 1,
      "week": 16,
      "duration": "2",
      "coreKnowledge": "Làm quen với tờ lịch tháng; nhận biết số ngày trong các tháng, thứ và ngày tương ứng trong tháng.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Một tuần lễ có bao nhiêu ngày?",
          "options": [
            "5 ngày",
            "6 ngày",
            "7 ngày",
            "8 ngày"
          ],
          "answer": 2,
          "explanation": "Một tuần lễ có 7 ngày từ thứ Hai đến Chủ nhật."
        },
        {
          "type": "TN",
          "level": 2,
          "question": "Nếu ngày 2 tháng 10 là thứ Bảy thì ngày 9 tháng 10 cùng năm đó là thứ mấy?",
          "options": [
            "Thứ Sáu",
            "Thứ Bảy",
            "Chủ nhật",
            "Thứ Hai"
          ],
          "answer": 1,
          "explanation": "Cách nhau đúng 7 ngày (1 tuần) nên vẫn là thứ Bảy."
        }
      ]
    },
    {
      "id": "toan2_b31",
      "lessonNumber": 31,
      "title": "Bài 31: Thực hành và trải nghiệm xem đồng hồ, xem lịch",
      "topic": "Chủ đề 6: Ngày - giờ, giờ - phút, ngày - tháng",
      "volume": 1,
      "semester": 1,
      "week": 16,
      "duration": "2",
      "coreKnowledge": "Thực hành quan sát mặt đồng hồ, đọc giờ đúng và giờ rưỡi (phút: 30); xem lịch và lập kế hoạch biểu thời gian trong tuần.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Khi kim dài chỉ số 12, kim ngắn chỉ số 8 thì đồng hồ chỉ mấy giờ?",
          "options": [
            "8 giờ",
            "12 giờ",
            "8 giờ 30 phút",
            "7 giờ"
          ],
          "answer": 0,
          "explanation": "Kim dài chỉ 12, kim ngắn chỉ số nào thì đó là giờ đúng (8 giờ)."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Nam bắt đầu học bài lúc 19 giờ 30 phút và học xong lúc 20 giờ 30 phút. Nam học trong bao lâu?",
          "guide": "Nam học trong thời gian: 20 giờ 30 phút - 19 giờ 30 phút = 1 giờ (60 phút)."
        }
      ]
    },
    {
      "id": "toan2_b32",
      "lessonNumber": 32,
      "title": "Bài 32: Luyện tập chung",
      "topic": "Chủ đề 6: Ngày - giờ, giờ - phút, ngày - tháng",
      "volume": 1,
      "semester": 1,
      "week": 16,
      "duration": "1",
      "coreKnowledge": "Luyện tập xem đồng hồ, xem lịch tờ; tính khoảng thời gian đơn giản.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Đồng hồ chỉ 14 giờ nghĩa là mấy giờ chiều?",
          "options": [
            "1 giờ chiều",
            "2 giờ chiều",
            "3 giờ chiều",
            "4 giờ chiều"
          ],
          "answer": 1,
          "explanation": "14 giờ = 2 giờ chiều."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Một buổi sinh hoạt lớp bắt đầu lúc 8 giờ và kết thúc lúc 8 giờ 35 phút. Hỏi buổi sinh hoạt diễn ra trong bao nhiêu phút?",
          "guide": "Buổi sinh hoạt diễn ra trong: 35 phút."
        }
      ]
    },
    {
      "id": "toan2_b33",
      "lessonNumber": 33,
      "title": "Bài 33: Ôn tập phép cộng, phép trừ trong phạm vi 20, 100",
      "topic": "Chủ đề 7: Ôn tập học kì I",
      "volume": 1,
      "semester": 1,
      "week": 17,
      "duration": "4",
      "coreKnowledge": "Ôn tập tổng hợp các phép cộng, phép trừ có nhớ và không nhớ trong phạm vi 20 và 100; rèn kĩ năng tính nhẩm và đặt tính.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Giá trị của biểu thức 67 - 25 + 18 là:",
          "options": [
            "58",
            "60",
            "62",
            "59"
          ],
          "answer": 1,
          "explanation": "67 - 25 = 42; 42 + 18 = 60."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Đặt tính rồi tính: 72 - 38 và 46 + 47.",
          "guide": "72 - 38 = 34; 46 + 47 = 93."
        }
      ]
    },
    {
      "id": "toan2_b34",
      "lessonNumber": 34,
      "title": "Bài 34: Ôn tập hình phẳng",
      "topic": "Chủ đề 7: Ôn tập học kì I",
      "volume": 1,
      "semester": 1,
      "week": 17,
      "duration": "2",
      "coreKnowledge": "Ôn tập củng cố nhận biết điểm, đoạn thẳng, đường thẳng, đường cong, đường gấp khúc, hình tam giác, hình tứ giác.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Hình tam giác có mấy đỉnh và mấy cạnh?",
          "options": [
            "3 đỉnh, 3 cạnh",
            "4 đỉnh, 4 cạnh",
            "3 đỉnh, 4 cạnh",
            "2 đỉnh, 3 cạnh"
          ],
          "answer": 0,
          "explanation": "Hình tam giác có 3 đỉnh và 3 cạnh."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Đoạn thẳng MN dài 12 cm, đoạn thẳng PQ ngắn hơn đoạn thẳng MN 5 cm. Tính độ dài đoạn thẳng PQ.",
          "guide": "Độ dài đoạn thẳng PQ là: 12 - 5 = 7 (cm). Đáp số: 7 cm."
        }
      ]
    },
    {
      "id": "toan2_b35",
      "lessonNumber": 35,
      "title": "Bài 35: Ôn tập đo lường",
      "topic": "Chủ đề 7: Ôn tập học kì I",
      "volume": 1,
      "semester": 1,
      "week": 18,
      "duration": "2",
      "coreKnowledge": "Ôn tập đại lượng ki-lô-gam, lít, ngày - giờ, giờ - phút, ngày - tháng; giải các bài toán thực tế về đo lường.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Can to đựng 18 l nước, can nhỏ đựng 9 l nước. Cả hai can đựng số lít nước là:",
          "options": [
            "25 l",
            "26 l",
            "27 l",
            "28 l"
          ],
          "answer": 2,
          "explanation": "18 + 9 = 27 l."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Bác Bình nuôi một con ngỗng nặng 6 kg và một con gà nặng 2 kg. Hỏi con ngỗng nặng hơn con gà mấy ki-lô-gam?",
          "guide": "Con ngỗng nặng hơn con gà số ki-lô-gam là: 6 - 2 = 4 (kg). Đáp số: 4 kg."
        }
      ]
    },
    {
      "id": "toan2_b36",
      "lessonNumber": 36,
      "title": "Bài 36: Phép nhân",
      "topic": "Chủ đề 7: Ôn tập học kì I",
      "volume": 1,
      "semester": 1,
      "week": 18,
      "duration": "1",
      "coreKnowledge": "Ý nghĩa của phép nhân là tổng của nhiều số hạng bằng nhau. Ví dụ 2 + 2 + 2 = 2 x 3 = 6.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Tổng 5 + 5 + 5 + 5 được viết thành phép nhân là:",
          "options": [
            "5 x 4",
            "5 x 3",
            "4 x 5",
            "5 x 5"
          ],
          "answer": 0,
          "explanation": "Số 5 được lấy 4 lần nên viết là 5 x 4."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Chuyển tổng sau thành phép nhân rồi tính kết quả: 3 + 3 + 3 + 3 + 3",
          "guide": "3 + 3 + 3 + 3 + 3 = 3 x 5 = 15."
        }
      ]
    },
    {
      "id": "toan2_kt_hk1",
      "lessonNumber": 36.5,
      "title": "Kiểm tra cuối học kì 1",
      "topic": "Chủ đề 7: Ôn tập học kì I",
      "volume": 1,
      "semester": 1,
      "week": 18,
      "duration": "1",
      "coreKnowledge": "Đánh giá định kì cuối học kì 1 theo Thông tư 27 về số và phép tính trong phạm vi 100, hình phẳng, đo lường.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 2,
          "question": "Tính: 54 + 28 = ?",
          "options": [
            "82",
            "72",
            "81",
            "83"
          ],
          "answer": 0,
          "explanation": "54 + 28 = 82."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Đặt tính rồi tính: 80 - 35.",
          "guide": "80 - 35 = 45."
        }
      ]
    },
    {
      "id": "toan2_b37",
      "lessonNumber": 37,
      "title": "Bài 37: Thừa số, tích",
      "topic": "Chủ đề 8: Phép nhân, phép chia",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "duration": "2",
      "coreKnowledge": "Thành phần phép nhân: Thừa số x Thừa số = Tích.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Trong phép nhân 2 x 8 = 16, số 16 được gọi là:",
          "options": [
            "Tích",
            "Thừa số",
            "Tổng",
            "Thương"
          ],
          "answer": 0,
          "explanation": "Kết quả của phép nhân gọi là Tích."
        }
      ]
    },
    {
      "id": "toan2_b38",
      "lessonNumber": 38,
      "title": "Bài 38: Bảng nhân 2",
      "topic": "Chủ đề 8: Phép nhân, phép chia",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "duration": "2",
      "coreKnowledge": "Bảng nhân 2 từ 2 x 1 = 2 đến 2 x 10 = 20.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "2 x 7 = ?",
          "options": [
            "14",
            "16",
            "12",
            "18"
          ],
          "answer": 0,
          "explanation": "2 x 7 = 14."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Mỗi đôi đũa có 2 chiếc đũa. Hỏi 6 đôi đũa có tất cả bao nhiêu chiếc đũa?",
          "guide": "6 đôi đũa có số chiếc đũa là: 2 x 6 = 12 (chiếc đũa). Đáp số: 12 chiếc đũa."
        }
      ]
    },
    {
      "id": "toan2_b39",
      "lessonNumber": 39,
      "title": "Bài 39: Bảng nhân 5",
      "topic": "Chủ đề 8: Phép nhân, phép chia",
      "volume": 2,
      "semester": 2,
      "week": 19,
      "duration": "2",
      "coreKnowledge": "Bảng nhân 5 từ 5 x 1 = 5 đến 5 x 10 = 50.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "5 x 8 = ?",
          "options": [
            "40",
            "35",
            "45",
            "30"
          ],
          "answer": 0,
          "explanation": "5 x 8 = 40."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Mỗi lọ hoa cắm 5 bông hoa. Hỏi 4 lọ hoa như thế cắm tất cả bao nhiêu bông hoa?",
          "guide": "Số bông hoa cắm trong 4 lọ là: 5 x 4 = 20 (bông hoa). Đáp số: 20 bông hoa."
        }
      ]
    },
    {
      "id": "toan2_b40",
      "lessonNumber": 40,
      "title": "Bài 40: Phép chia",
      "topic": "Chủ đề 8: Phép nhân, phép chia",
      "volume": 2,
      "semester": 2,
      "week": 20,
      "duration": "2",
      "coreKnowledge": "Ý nghĩa phép chia (chia thành các phần bằng nhau hoặc chia theo nhóm). Từ phép nhân viết thành 2 phép chia tương ứng.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Từ phép nhân 2 x 5 = 10, ta lập được phép chia nào sau đây?",
          "options": [
            "10 : 2 = 5",
            "10 : 3 = 5",
            "5 : 2 = 10",
            "10 - 2 = 8"
          ],
          "answer": 0,
          "explanation": "10 : 2 = 5 và 10 : 5 = 2."
        }
      ]
    },
    {
      "id": "toan2_b41",
      "lessonNumber": 41,
      "title": "Bài 41: Phép chia",
      "topic": "Chủ đề 8: Phép nhân, phép chia",
      "volume": 2,
      "semester": 2,
      "week": 20,
      "duration": "2",
      "coreKnowledge": "Hình thành khái niệm ban đầu về phép chia qua việc chia thành các phần bằng nhau hoặc chia theo nhóm; nhận biết dấu chia (:).",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Có 10 quả cam chia đều cho 2 bạn. Mỗi bạn được số quả cam là:",
          "options": [
            "4 quả",
            "5 quả",
            "6 quả",
            "2 quả"
          ],
          "answer": 1,
          "explanation": "10 : 2 = 5 quả cam."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Có 12 cái kẹo, chia đều vào các đĩa, mỗi đĩa 3 cái kẹo. Hỏi chia được vào mấy đĩa?",
          "guide": "Chia được số đĩa là: 12 : 3 = 4 (đĩa). Đáp số: 4 đĩa kẹo."
        }
      ]
    },
    {
      "id": "toan2_b42",
      "lessonNumber": 42,
      "title": "Bài 42: Bảng chia 2",
      "topic": "Chủ đề 8: Phép nhân, phép chia",
      "volume": 2,
      "semester": 2,
      "week": 21,
      "duration": "2",
      "coreKnowledge": "Bảng chia 2 từ 2 : 2 = 1 đến 20 : 2 = 10.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "18 : 2 = ?",
          "options": [
            "9",
            "8",
            "7",
            "6"
          ],
          "answer": 0,
          "explanation": "18 : 2 = 9."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Có 14 quả cam chia đều vào 2 đĩa. Hỏi mỗi đĩa có bao nhiêu quả cam?",
          "guide": "Mỗi đĩa có số quả cam là: 14 : 2 = 7 (quả cam). Đáp số: 7 quả cam."
        }
      ]
    },
    {
      "id": "toan2_b43",
      "lessonNumber": 43,
      "title": "Bài 43: Bảng chia 5",
      "topic": "Chủ đề 8: Phép nhân, phép chia",
      "volume": 2,
      "semester": 2,
      "week": 21,
      "duration": "2",
      "coreKnowledge": "Bảng chia 5 từ 5 : 5 = 1 đến 50 : 5 = 10.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "35 : 5 = ?",
          "options": [
            "7",
            "6",
            "8",
            "9"
          ],
          "answer": 0,
          "explanation": "35 : 5 = 7."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Có 25 quyển vở chia đều cho 5 bạn. Hỏi mỗi bạn được bao nhiêu quyển vở?",
          "guide": "Mỗi bạn nhận được: 25 : 5 = 5 (quyển vở). Đáp số: 5 quyển vở."
        }
      ]
    },
    {
      "id": "toan2_b44",
      "lessonNumber": 44,
      "title": "Bài 44: Bảng chia 5",
      "topic": "Chủ đề 8: Phép nhân, phép chia",
      "volume": 2,
      "semester": 2,
      "week": 21,
      "duration": "2",
      "coreKnowledge": "Hình thành và học thuộc bảng chia 5 từ bảng nhân 5; vận dụng giải bài toán chia đều.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Kết quả của 35 : 5 là:",
          "options": [
            "6",
            "7",
            "8",
            "9"
          ],
          "answer": 1,
          "explanation": "Vì 5 x 7 = 35 nên 35 : 5 = 7."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Có 25 bông hoa cắm đều vào 5 lọ. Hỏi mỗi lọ có mấy bông hoa?",
          "guide": "Mỗi lọ có số bông hoa là: 25 : 5 = 5 (bông hoa). Đáp số: 5 bông hoa."
        }
      ]
    },
    {
      "id": "toan2_b45",
      "lessonNumber": 45,
      "title": "Bài 45: Khối trụ, khối cầu",
      "topic": "Chủ đề 8: Phép nhân, phép chia",
      "volume": 2,
      "semester": 2,
      "week": 22,
      "duration": "5",
      "coreKnowledge": "Nhận biết đặc điểm và nhận dạng khối trụ (hộp sữa, lon nước ngọt, ống bơ) và khối cầu (quả bóng, viên bi) trong thực tế.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Đồ vật nào dưới đây có dạng khối cầu?",
          "options": [
            "Quả bóng đá",
            "Hộp sữa đặc",
            "Hộp phấn",
            "Cuốn sách"
          ],
          "answer": 0,
          "explanation": "Quả bóng đá có dạng khối cầu."
        }
      ]
    },
    {
      "id": "toan2_b46",
      "lessonNumber": 46,
      "title": "Bài 46: Khối trụ, khối cầu",
      "topic": "Chủ đề 9: Làm quen với hình khối",
      "volume": 2,
      "semester": 2,
      "week": 23,
      "duration": "2",
      "coreKnowledge": "Nhận biết hình dạng của khối trụ, khối cầu qua đồ vật thực tế như hộp sữa, lon nước ngọt, quả bóng đá, quả địa cầu.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Vật nào sau đây có dạng khối cầu?",
          "options": [
            "Hộp sữa",
            "Quả bóng bàn",
            "Cục tẩy",
            "Bao diêm"
          ],
          "answer": 1,
          "explanation": "Quả bóng bàn có dạng khối cầu."
        },
        {
          "type": "TN",
          "level": 1,
          "question": "Lon nước ngọt có dạng hình khối nào?",
          "options": [
            "Khối trụ",
            "Khối cầu",
            "Khối lập phương",
            "Khối hộp chữ nhật"
          ],
          "answer": 0,
          "explanation": "Lon nước ngọt có dạng khối trụ."
        }
      ]
    },
    {
      "id": "toan2_b47",
      "lessonNumber": 47,
      "title": "Bài 47: Đơn vị, chục, trăm, nghìn",
      "topic": "Chủ đề 9: Làm quen với hình khối",
      "volume": 2,
      "semester": 2,
      "week": 23,
      "duration": "2",
      "coreKnowledge": "Mối quan hệ giữa các hàng: 10 đơn vị = 1 chục, 10 chục = 1 trăm, 10 trăm = 1 nghìn (1000).",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "10 trăm bằng mấy nghìn?",
          "options": [
            "1 nghìn",
            "10 nghìn",
            "100 nghìn",
            "100"
          ],
          "answer": 0,
          "explanation": "10 trăm = 1 nghìn (1 000)."
        }
      ]
    },
    {
      "id": "toan2_b48",
      "lessonNumber": 48,
      "title": "Bài 48: Đơn vị, chục, trăm, nghìn",
      "topic": "Chủ đề 10: Các số trong phạm vi 1 000",
      "volume": 2,
      "semester": 2,
      "week": 24,
      "duration": "2",
      "coreKnowledge": "Hình thành khái niệm đơn vị, chục, trăm, nghìn; biết 10 đơn vị = 1 chục, 10 chục = 1 trăm, 10 trăm = 1 nghìn.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "10 trăm được gọi là gì?",
          "options": [
            "1 chục",
            "1 trăm",
            "1 nghìn",
            "10 nghìn"
          ],
          "answer": 2,
          "explanation": "10 trăm = 1 nghìn (1 000)."
        },
        {
          "type": "TN",
          "level": 2,
          "question": "Số 1 000 đọc là:",
          "options": [
            "Một trăm",
            "Một nghìn",
            "Mười nghìn",
            "Một"
          ],
          "answer": 1,
          "explanation": "1 000 đọc là một nghìn."
        }
      ]
    },
    {
      "id": "toan2_b49",
      "lessonNumber": 49,
      "title": "Bài 49: Các số có ba chữ số",
      "topic": "Chủ đề 10: Các số trong phạm vi 1 000",
      "volume": 2,
      "semester": 2,
      "week": 24,
      "duration": "2",
      "coreKnowledge": "Đọc, viết, phân tích cấu tạo số có ba chữ số (trăm, chục, đơn vị). Ví dụ: 352 = 300 + 50 + 2.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Số 'Ba trăm sáu mươi lăm' được viết là:",
          "options": [
            "365",
            "356",
            "635",
            "563"
          ],
          "answer": 0,
          "explanation": "Ba trăm sáu mươi lăm viết là 365."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Viết số 648 thành tổng các trăm, chục và đơn vị.",
          "guide": "648 = 600 + 40 + 8."
        }
      ]
    },
    {
      "id": "toan2_b50",
      "lessonNumber": 50,
      "title": "Bài 50: So sánh các số có ba chữ số",
      "topic": "Chủ đề 10: Các số trong phạm vi 1 000",
      "volume": 2,
      "semester": 2,
      "week": 24,
      "duration": "2",
      "coreKnowledge": "So sánh lần lượt từ hàng trăm, hàng chục đến hàng đơn vị.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Điền dấu thích hợp vào chỗ chấm: 458 ... 485",
          "options": [
            "<",
            ">",
            "=",
            "+"
          ],
          "answer": 0,
          "explanation": "Hàng trăm bằng nhau (4=4), hàng chục 5 < 8 nên 458 < 485."
        }
      ]
    },
    {
      "id": "toan2_b51",
      "lessonNumber": 51,
      "title": "Bài 51: Số có ba chữ số",
      "topic": "Chủ đề 10: Các số trong phạm vi 1 000",
      "volume": 2,
      "semester": 2,
      "week": 25,
      "duration": "3",
      "coreKnowledge": "Đọc, viết các số có ba chữ số; nhận biết giá trị theo vị trí của từng chữ số ở hàng trăm, hàng chục, hàng đơn vị.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Số 'Ba trăm năm mươi tư' viết là:",
          "options": [
            "304",
            "345",
            "354",
            "534"
          ],
          "answer": 2,
          "explanation": "Số gồm 3 trăm, 5 chục, 4 đơn vị viết là 354."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Trong số 682, chữ số 8 chỉ bao nhiêu đơn vị?",
          "guide": "Chữ số 8 ở hàng chục, có giá trị là 80 (8 chục)."
        }
      ]
    },
    {
      "id": "toan2_b52",
      "lessonNumber": 52,
      "title": "Bài 52: Đề-xi-mét",
      "topic": "Chủ đề 10: Các số trong phạm vi 1 000",
      "volume": 2,
      "semester": 2,
      "week": 25,
      "duration": "2",
      "coreKnowledge": "Đơn vị đo độ dài: đề-xi-mét (viết tắt là dm). 1 dm = 10 cm, 10 cm = 1 dm.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "3 dm bằng bao nhiêu xăng-ti-mét?",
          "options": [
            "30 cm",
            "3 cm",
            "300 cm",
            "13 cm"
          ],
          "answer": 0,
          "explanation": "1 dm = 10 cm nên 3 dm = 30 cm."
        }
      ]
    },
    {
      "id": "toan2_b53",
      "lessonNumber": 53,
      "title": "Bài 53: Mét",
      "topic": "Chủ đề 10: Các số trong phạm vi 1 000",
      "volume": 2,
      "semester": 2,
      "week": 26,
      "duration": "2",
      "coreKnowledge": "Đơn vị đo độ dài: mét (viết tắt là m). 1 m = 10 dm = 100 cm.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "1 m bằng bao nhiêu xăng-ti-mét?",
          "options": [
            "100 cm",
            "10 cm",
            "1000 cm",
            "1 cm"
          ],
          "answer": 0,
          "explanation": "1 m = 100 cm."
        }
      ]
    },
    {
      "id": "toan2_b54",
      "lessonNumber": 54,
      "title": "Bài 54: Ki-lô-mét",
      "topic": "Chủ đề 10: Các số trong phạm vi 1 000",
      "volume": 2,
      "semester": 2,
      "week": 26,
      "duration": "2",
      "coreKnowledge": "Đơn vị đo độ dài: ki-lô-mét (viết tắt là km). 1 km = 1000 m. Dùng để đo khoảng cách xa giữa các tỉnh, thành phố.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "1 km bằng bao nhiêu mét?",
          "options": [
            "1000 m",
            "100 m",
            "10 m",
            "10000 m"
          ],
          "answer": 0,
          "explanation": "1 km = 1000 m."
        }
      ]
    },
    {
      "id": "toan2_b55",
      "lessonNumber": 55,
      "title": "Bài 55: Đề-xi-mét. Mét. Ki-lô-mét",
      "topic": "Chủ đề 11: Độ dài và đơn vị đo độ dài. Tiền Việt Nam",
      "volume": 2,
      "semester": 2,
      "week": 27,
      "duration": "3",
      "coreKnowledge": "Nhận biết các đơn vị đo độ dài: đề-xi-mét (dm), mét (m), ki-lô-mét (km); nắm vững mối quan hệ giữa các đơn vị đo độ dài.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "1 mét (m) bằng bao nhiêu xăng-ti-mét (cm)?",
          "options": [
            "10 cm",
            "100 cm",
            "1000 cm",
            "50 cm"
          ],
          "answer": 1,
          "explanation": "1 m = 100 cm = 10 dm."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Đoạn đường từ nhà Nam đến trường dài 2 km, từ trường đến nhà bà dài 3 km. Hỏi đoạn đường từ nhà Nam qua trường đến nhà bà dài bao nhiêu ki-lô-mét?",
          "guide": "Đoạn đường dài là: 2 + 3 = 5 (km). Đáp số: 5 km."
        }
      ]
    },
    {
      "id": "toan2_b56",
      "lessonNumber": 56,
      "title": "Bài 56: Tiền Việt Nam",
      "topic": "Chủ đề 11: Độ dài và đơn vị đo độ dài. Tiền Việt Nam",
      "volume": 2,
      "semester": 2,
      "week": 27,
      "duration": "1",
      "coreKnowledge": "Nhận biết các tờ tiền: 100 đồng, 200 đồng, 500 đồng, 1000 đồng. Thực hành đổi tiền và tính tiền mua đồ dùng đơn giản.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Hai tờ tiền 500 đồng có tổng giá trị là:",
          "options": [
            "1000 đồng",
            "700 đồng",
            "500 đồng",
            "200 đồng"
          ],
          "answer": 0,
          "explanation": "500 đồng + 500 đồng = 1000 đồng."
        }
      ]
    },
    {
      "id": "toan2_b57",
      "lessonNumber": 57,
      "title": "Bài 57: Phép cộng (không nhớ) trong phạm vi 1000",
      "topic": "Chủ đề 11: Độ dài và đơn vị đo độ dài. Tiền Việt Nam",
      "volume": 2,
      "semester": 2,
      "week": 27,
      "duration": "2",
      "coreKnowledge": "Kỹ thuật cộng các số có ba chữ số không nhớ theo cột dọc từ phải sang trái.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Tính: 342 + 215 = ?",
          "options": [
            "557",
            "556",
            "547",
            "567"
          ],
          "answer": 0,
          "explanation": "342 + 215 = 557."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Đặt tính rồi tính: 406 + 253",
          "guide": "406 + 253 = 659."
        }
      ]
    },
    {
      "id": "toan2_b58",
      "lessonNumber": 58,
      "title": "Bài 58: Phép trừ (không nhớ) trong phạm vi 1000",
      "topic": "Chủ đề 11: Độ dài và đơn vị đo độ dài. Tiền Việt Nam",
      "volume": 2,
      "semester": 2,
      "week": 28,
      "duration": "2",
      "coreKnowledge": "Kỹ thuật trừ các số có ba chữ số không nhớ.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Tính: 687 - 342 = ?",
          "options": [
            "345",
            "335",
            "355",
            "344"
          ],
          "answer": 0,
          "explanation": "687 - 342 = 345."
        }
      ]
    },
    {
      "id": "toan2_b59",
      "lessonNumber": 59,
      "title": "Bài 59: Phép cộng (có nhớ) trong phạm vi 1000",
      "topic": "Chủ đề 12: Phép cộng, phép trừ trong phạm vi 1 000",
      "volume": 2,
      "semester": 2,
      "week": 28,
      "duration": "2",
      "coreKnowledge": "Kỹ thuật cộng có nhớ một lần (sang hàng chục hoặc hàng trăm) trong phạm vi 1000.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Tính: 256 + 138 = ?",
          "options": [
            "394",
            "384",
            "392",
            "404"
          ],
          "answer": 0,
          "explanation": "6 + 8 = 14 viết 4 nhớ 1; 5 + 3 = 8 thêm 1 bằng 9; 2 + 1 = 3 -> 394."
        }
      ]
    },
    {
      "id": "toan2_b60",
      "lessonNumber": 60,
      "title": "Bài 60: Phép trừ (có nhớ) trong phạm vi 1000",
      "topic": "Chủ đề 12: Phép cộng, phép trừ trong phạm vi 1 000",
      "volume": 2,
      "semester": 2,
      "week": 29,
      "duration": "3",
      "coreKnowledge": "Kỹ thuật trừ có nhớ một lần (ở hàng chục hoặc hàng đơn vị).",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Tính: 563 - 227 = ?",
          "options": [
            "336",
            "346",
            "334",
            "326"
          ],
          "answer": 0,
          "explanation": "3 không trừ được 7, lấy 13 - 7 = 6 viết 6 nhớ 1; 2 thêm 1 là 3, 6 - 3 = 3; 5 - 2 = 3 -> 336."
        }
      ]
    },
    {
      "id": "toan2_b61",
      "lessonNumber": 61,
      "title": "Bài 61: Phép trừ (không nhớ) trong phạm vi 1 000",
      "topic": "Chủ đề 12: Phép cộng, phép trừ trong phạm vi 1 000",
      "volume": 2,
      "semester": 2,
      "week": 29,
      "duration": "3",
      "coreKnowledge": "Biết cách đặt tính và tính phép trừ không nhớ trong phạm vi 1 000 dạng trừ số có ba chữ số cho số có một, hai hoặc ba chữ số.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Kết quả của phép tính 567 - 234 là:",
          "options": [
            "333",
            "343",
            "323",
            "334"
          ],
          "answer": 0,
          "explanation": "7-4=3; 6-3=3; 5-2=3 -> 333."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Đặt tính rồi tính: 789 - 345 và 456 - 52.",
          "guide": "789 - 345 = 444; 456 - 52 = 404."
        }
      ]
    },
    {
      "id": "toan2_b62",
      "lessonNumber": 62,
      "title": "Bài 62: Thu thập, phân loại, kiểm đếm số liệu",
      "topic": "Chủ đề 12: Phép cộng, phép trừ trong phạm vi 1 000",
      "volume": 2,
      "semester": 2,
      "week": 30,
      "duration": "4",
      "coreKnowledge": "Làm quen với việc thu thập thông tin, phân loại đồ vật, kiểm đếm số lượng và lập bảng thống kê đơn giản.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Trong hộp có 5 bút chì xanh, 3 bút chì đỏ, 2 bút chì vàng. Tổng số bút chì có trong hộp là:",
          "options": [
            "10 bút chì",
            "8 bút chì",
            "7 bút chì",
            "9 bút chì"
          ],
          "answer": 0,
          "explanation": "5 + 3 + 2 = 10 bút chì."
        }
      ]
    },
    {
      "id": "toan2_b63",
      "lessonNumber": 63,
      "title": "Bài 63: Biểu đồ tranh",
      "topic": "Chủ đề 12: Phép cộng, phép trừ trong phạm vi 1 000",
      "volume": 2,
      "semester": 2,
      "week": 31,
      "duration": "2",
      "coreKnowledge": "Đọc và giải thích thông tin trên biểu đồ tranh (mỗi biểu tượng tương ứng với 1 hoặc một số đối tượng).",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 2,
          "question": "Trên biểu đồ tranh, mỗi ngôi sao biểu thị cho 2 điểm mười. Bạn Mai có 4 ngôi sao, vậy bạn Mai có bao nhiêu điểm mười?",
          "options": [
            "8 điểm mười",
            "4 điểm mười",
            "6 điểm mười",
            "10 điểm mười"
          ],
          "answer": 0,
          "explanation": "2 x 4 = 8 điểm mười."
        }
      ]
    },
    {
      "id": "toan2_b64",
      "lessonNumber": 64,
      "title": "Bài 64: Chắc chắn, có thể, không thể",
      "topic": "Chủ đề 13: Làm quen với yếu tố thống kê, xác suất",
      "volume": 2,
      "semester": 2,
      "week": 31,
      "duration": "1",
      "coreKnowledge": "Làm quen với các thuật ngữ chỉ khả năng xảy ra của một sự kiện: Chắc chắn, Có thể, Không thể.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 2,
          "question": "Trong túi chỉ có các viên bi màu đỏ. Không nhìn vào túi, lấy ra một viên bi. Sự kiện nào sau đây là đúng?",
          "options": [
            "Chắc chắn lấy được bi màu đỏ",
            "Có thể lấy được bi màu xanh",
            "Không thể lấy được bi màu đỏ",
            "Chắc chắn lấy được bi màu vàng"
          ],
          "answer": 0,
          "explanation": "Vì trong túi chỉ có toàn bi đỏ nên chắc chắn lấy được viên bi màu đỏ."
        }
      ]
    },
    {
      "id": "toan2_b65",
      "lessonNumber": 65,
      "title": "Bài 65: Biểu đồ tranh",
      "topic": "Chủ đề 13: Làm quen với yếu tố thống kê, xác suất",
      "volume": 2,
      "semester": 2,
      "week": 31,
      "duration": "2",
      "coreKnowledge": "Làm quen với biểu đồ tranh; biết đọc số liệu và trả lời câu hỏi dựa trên thông tin từ biểu đồ tranh.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Trong biểu đồ tranh, nếu mỗi biểu tượng ngôi sao đại diện cho 2 bông hoa điểm 10, thì 4 ngôi sao đại diện cho bao nhiêu bông hoa điểm 10?",
          "options": [
            "4 bông",
            "6 bông",
            "8 bông",
            "10 bông"
          ],
          "answer": 2,
          "explanation": "4 x 2 = 8 bông hoa điểm 10."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Quan sát biểu đồ và cho biết tổ nào trồng được nhiều cây nhất khi tổ 1 có 3 biểu tượng cái cây, tổ 2 có 5 biểu tượng cái cây.",
          "guide": "Tổ 2 trồng được nhiều cây nhất vì có 5 biểu tượng cây, nhiều hơn tổ 1 có 3 biểu tượng."
        }
      ]
    },
    {
      "id": "toan2_b66",
      "lessonNumber": 66,
      "title": "Bài 66: Chắc chắn, có thể, không thể",
      "topic": "Chủ đề 13: Làm quen với yếu tố thống kê, xác suất",
      "volume": 2,
      "semester": 2,
      "week": 32,
      "duration": "1",
      "coreKnowledge": "Làm quen với các khả năng xảy ra của một sự kiện đơn giản trong đời sống: 'Chắc chắn', 'Có thể', 'Không thể'.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Trong một hộp kín chỉ có các viên bi màu đỏ. Nếu nhắm mắt lấy ra 1 viên bi thì sự kiện 'Lấy được viên bi màu đỏ' là:",
          "options": [
            "Chắc chắn",
            "Có thể",
            "Không thể"
          ],
          "answer": 0,
          "explanation": "Vì trong hộp chỉ toàn bi đỏ nên chắc chắn sẽ lấy được viên bi màu đỏ."
        },
        {
          "type": "TN",
          "level": 2,
          "question": "Trong hộp chỉ có bi xanh và bi đỏ. Khả năng 'Lấy được viên bi màu vàng' là:",
          "options": [
            "Chắc chắn",
            "Có thể",
            "Không thể"
          ],
          "answer": 2,
          "explanation": "Trong hộp không có viên bi vàng nào nên sự kiện này không thể xảy ra."
        }
      ]
    },
    {
      "id": "toan2_b67",
      "lessonNumber": 67,
      "title": "Bài 67: Thực hành và trải nghiệm thu thập, phân loại, kiểm đếm số liệu",
      "topic": "Chủ đề 13: Làm quen với yếu tố thống kê, xác suất",
      "volume": 2,
      "semester": 2,
      "week": 32,
      "duration": "1",
      "coreKnowledge": "Thực hành thu thập, phân loại, đếm số liệu thực tế trong lớp học (số bạn nam/nữ, sở thích món ăn...) và ghi lại kết quả bằng bảng số liệu.",
      "sampleQuestions": [
        {
          "type": "TL",
          "level": 2,
          "question": "Em hãy phân loại các đồ dùng học tập trên bàn của em theo hai nhóm: Nhóm đồ dùng để viết/vẽ và nhóm đồ dùng để đo/cắt.",
          "guide": "Nhóm viết/vẽ gồm: bút chì, bút mực, sáp màu. Nhóm đo/cắt gồm: thước kẻ, kéo thủ công."
        }
      ]
    },
    {
      "id": "toan2_b68",
      "lessonNumber": 68,
      "title": "Bài 68: Ôn tập các số trong phạm vi 1 000",
      "topic": "Chủ đề 14: Ôn tập cuối năm",
      "volume": 2,
      "semester": 2,
      "week": 32,
      "duration": "2",
      "coreKnowledge": "Ôn tập củng cố đọc, viết, đếm, so sánh và sắp xếp thứ tự các số trong phạm vi 1 000; phân tích cấu tạo số thành các trăm, chục, đơn vị.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Số lớn nhất có 3 chữ số là:",
          "options": [
            "900",
            "990",
            "999",
            "1000"
          ],
          "answer": 2,
          "explanation": "Số lớn nhất có 3 chữ số là 999."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Viết số 675 thành tổng các trăm, chục và đơn vị.",
          "guide": "675 = 600 + 70 + 5."
        }
      ]
    },
    {
      "id": "toan2_b69",
      "lessonNumber": 69,
      "title": "Bài 69: Ôn tập phép cộng, phép trừ trong phạm vi 100",
      "topic": "Chủ đề 14: Ôn tập cuối năm",
      "volume": 2,
      "semester": 2,
      "week": 32,
      "duration": "3",
      "coreKnowledge": "Ôn tập các phép tính cộng, trừ trong phạm vi 100 có nhớ và không nhớ; vận dụng giải toán liên quan đến nhiều hơn, ít hơn.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Tính: 38 + 47 = ?",
          "options": [
            "75",
            "85",
            "86",
            "76"
          ],
          "answer": 1,
          "explanation": "38 + 47 = 85."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Một cuộn dây dài 85 m, người ta cắt đi 38 m. Hỏi cuộn dây còn lại dài bao nhiêu mét?",
          "guide": "Cuộn dây còn lại dài: 85 - 38 = 47 (m). Đáp số: 47 m."
        }
      ]
    },
    {
      "id": "toan2_b70",
      "lessonNumber": 70,
      "title": "Bài 70: Ôn tập chung cuối năm",
      "topic": "Chủ đề 14: Ôn tập cuối năm",
      "volume": 2,
      "semester": 2,
      "week": 33,
      "duration": "3",
      "coreKnowledge": "Tổng kết kiến thức toán học toàn diện lớp 2: số và phép tính, hình học đo lường, giải toán và thống kê.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Số lớn nhất có ba chữ số khác nhau là:",
          "options": [
            "987",
            "999",
            "989",
            "978"
          ],
          "answer": 0,
          "explanation": "Số có 3 chữ số khác nhau lớn nhất là 987."
        },
        {
          "type": "TL",
          "level": 3,
          "question": "Một cửa hàng có 350 kg gạo, buổi sáng bán được 120 kg, buổi chiều bán được 110 kg. Hỏi cửa hàng còn lại bao nhiêu ki-lô-gam gạo?",
          "guide": "Cả hai buổi bán được: 120 + 110 = 230 (kg). Cửa hàng còn lại: 350 - 230 = 120 (kg). Đáp số: 120 kg gạo."
        }
      ]
    },
    {
      "id": "toan2_b71",
      "lessonNumber": 71,
      "title": "Bài 71: Ôn tập phép nhân, phép chia",
      "topic": "Chủ đề 14: Ôn tập cuối năm",
      "volume": 2,
      "semester": 2,
      "week": 34,
      "duration": "3",
      "coreKnowledge": "Ôn tập tổng kết bảng nhân 2, bảng nhân 5, bảng chia 2, bảng chia 5 và ý nghĩa các thành phần thừa số, tích, số bị chia, số chia, thương.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Trong phép chia 20 : 5 = 4, số 4 được gọi là:",
          "options": [
            "Số bị chia",
            "Số chia",
            "Thương",
            "Tích"
          ],
          "answer": 2,
          "explanation": "Kết quả của phép chia gọi là thương."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Mỗi hàng có 5 cây bạch đàn. Hỏi 6 hàng như thế có tất cả bao nhiêu cây?",
          "guide": "Số cây có tất cả là: 5 x 6 = 30 (cây). Đáp số: 30 cây."
        }
      ]
    },
    {
      "id": "toan2_b72",
      "lessonNumber": 72,
      "title": "Bài 72: Ôn tập hình học",
      "topic": "Chủ đề 14: Ôn tập cuối năm",
      "volume": 2,
      "semester": 2,
      "week": 34,
      "duration": "2",
      "coreKnowledge": "Ôn tập hệ thống hóa các hình học đã học ở lớp 2: điểm, đoạn thẳng, đường cong, đường gấp khúc, hình tam giác, hình tứ giác, khối trụ, khối cầu.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Hình tam giác có mấy cạnh?",
          "options": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": 0,
          "explanation": "Hình tam giác có 3 cạnh."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Một đường gấp khúc gồm 4 đoạn thẳng, mỗi đoạn thẳng đều dài 3 cm. Tính độ dài đường gấp khúc đó.",
          "guide": "Độ dài đường gấp khúc là: 3 x 4 = 12 (cm) hoặc 3 + 3 + 3 + 3 = 12 (cm). Đáp số: 12 cm."
        }
      ]
    },
    {
      "id": "toan2_b73",
      "lessonNumber": 73,
      "title": "Bài 73: Ôn tập đo lường",
      "topic": "Chủ đề 14: Ôn tập cuối năm",
      "volume": 2,
      "semester": 2,
      "week": 35,
      "duration": "2",
      "coreKnowledge": "Ôn tập kiến thức về đo lường: độ dài (cm, dm, m, km), khối lượng (kg), dung tích (l), thời gian (ngày, giờ, phút) và tiền Việt Nam.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "1 m bằng bao nhiêu dm?",
          "options": [
            "10 dm",
            "100 dm",
            "1 dm",
            "1000 dm"
          ],
          "answer": 0,
          "explanation": "1 m = 10 dm."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "An mua một quyển vở giá 5 000 đồng và một cái bút giá 3 000 đồng. An đưa cho cô bán hàng tờ 10 000 đồng. Hỏi cô bán hàng phải trả lại An bao nhiêu tiền?",
          "guide": "Tổng số tiền An mua là: 5 000 + 3 000 = 8 000 (đồng). Cô bán hàng trả lại: 10 000 - 8 000 = 2 000 (đồng). Đáp số: 2 000 đồng."
        }
      ]
    },
    {
      "id": "toan2_b74",
      "lessonNumber": 74,
      "title": "Bài 74: Ôn tập kiểm đếm số liệu và lựa chọn khả năng",
      "topic": "Chủ đề 14: Ôn tập cuối năm",
      "volume": 2,
      "semester": 2,
      "week": 35,
      "duration": "1",
      "coreKnowledge": "Ôn tập củng cố kĩ năng thu thập, phân loại, kiểm đếm số liệu, đọc biểu đồ tranh và phán đoán khả năng chắc chắn, có thể, không thể.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 1,
          "question": "Gieo một con xúc xắc 6 mặt (1 đến 6 chấm). Khả năng xuất hiện mặt 7 chấm là:",
          "options": [
            "Chắc chắn",
            "Có thể",
            "Không thể"
          ],
          "answer": 2,
          "explanation": "Con xúc xắc chỉ có từ 1 đến 6 chấm nên không thể xuất hiện mặt 7 chấm."
        },
        {
          "type": "TL",
          "level": 2,
          "question": "Em hãy kể ra một sự kiện trong ngày chắc chắn xảy ra và một sự kiện không thể xảy ra.",
          "guide": "Chắc chắn: Mặt trời mọc vào buổi sáng. Không thể: Con gà biết bơi như con cá dưới nước sâu."
        }
      ]
    },
    {
      "id": "toan2_b75",
      "lessonNumber": 75,
      "title": "Bài 75: Ôn tập chung",
      "topic": "Chủ đề 14: Ôn tập cuối năm",
      "volume": 2,
      "semester": 2,
      "week": 35,
      "duration": "1",
      "coreKnowledge": "Ôn tập tổng kết toàn diện các nội dung môn Toán lớp 2: số và phép tính, hình học và đo lường, xác suất thống kê; chuẩn bị hành trang lên lớp 3.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 2,
          "question": "Số liền trước của số bé nhất có ba chữ số là:",
          "options": [
            "98",
            "99",
            "100",
            "101"
          ],
          "answer": 1,
          "explanation": "Số bé nhất có ba chữ số là 100, số liền trước 100 là 99."
        },
        {
          "type": "TL",
          "level": 3,
          "question": "Một bác thợ rèn làm một sợi xích dài 95 cm. Bác đã hàn nối được 48 cm. Hỏi bác còn phải hàn nối thêm bao nhiêu xăng-ti-mét nữa để hoàn thành?",
          "guide": "Bác thợ còn phải hàn thêm: 95 - 48 = 47 (cm). Đáp số: 47 cm."
        }
      ]
    },
    {
      "id": "toan2_kt_hk2",
      "lessonNumber": 75.5,
      "title": "Kiểm tra cuối học kì 2",
      "topic": "Chủ đề 14: Ôn tập cuối năm",
      "volume": 2,
      "semester": 2,
      "week": 35,
      "duration": "1",
      "coreKnowledge": "Đánh giá định kì cuối năm học theo Thông tư 27 toàn diện chương trình môn Toán lớp 2.",
      "sampleQuestions": [
        {
          "type": "TN",
          "level": 2,
          "question": "Số lớn nhất có 3 chữ số khác nhau là:",
          "options": [
            "987",
            "999",
            "989",
            "978"
          ],
          "answer": 0,
          "explanation": "987 là số có 3 chữ số khác nhau lớn nhất."
        },
        {
          "type": "TL",
          "level": 3,
          "question": "Một bao gạo nặng 50 kg, bán đi 25 kg. Hỏi còn lại bao nhiêu kg gạo?",
          "guide": "Còn lại: 50 - 25 = 25 (kg)."
        }
      ]
    }
  ]
};

  if (typeof window !== 'undefined') {
    window.SGK_TOAN_2 = SGK_TOAN_2;
    if (window.SGK_REGISTRY && typeof window.SGK_REGISTRY.registerBook === 'function') {
      window.SGK_REGISTRY.registerBook(2, 'toan', SGK_TOAN_2);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = SGK_TOAN_2;
  }
})(typeof window !== 'undefined' ? window : this);
