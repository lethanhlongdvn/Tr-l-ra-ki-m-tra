const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  BorderStyle,
  VerticalAlign,
  Header,
  Footer,
  PageNumber
} = require('docx');

const dir = 'D:\\14 DU AN ANTIGRAVITY\\1 APP RA DE KIEM TRA\\KẾ HOẠCH MÔN HỌC CÁC LỚP';

// Viền bảng chuẩn nét đơn đen
const tableBorders = {
  top: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
  bottom: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
  left: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
  right: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
  insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
  insideVertical: { style: BorderStyle.SINGLE, size: 4, color: "000000" }
};

// Chiều rộng in A4 chuẩn Nghị định 30 (lề trái 25mm, lề phải 15mm => 9655 dxa)
const TABLE_WIDTH = 9655;
const COL_WIDTHS = [900, 755, 3800, 2800, 1400];

function createHeaderTable(schoolName = "TRƯỜNG TIỂU HỌC A AN TRƯỜNG", governingBody = "UBND XÃ AN TRƯỜNG") {
  return new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    borders: {
      top: { style: BorderStyle.NONE },
      bottom: { style: BorderStyle.NONE },
      left: { style: BorderStyle.NONE },
      right: { style: BorderStyle.NONE },
      insideHorizontal: { style: BorderStyle.NONE },
      insideVertical: { style: BorderStyle.NONE }
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 4400, type: WidthType.DXA },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: governingBody.toUpperCase(), size: 22, font: "Times New Roman" })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: schoolName.toUpperCase(), bold: true, size: 23, font: "Times New Roman" })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: "TỔ CHUYÊN MÔN / NHÓM TIẾNG ANH", bold: true, size: 21, font: "Times New Roman" })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: "-----------------------", size: 18, color: "666666" })
                ]
              })
            ]
          }),
          new TableCell({
            width: { size: 5255, type: WidthType.DXA },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: "CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM", bold: true, size: 23, font: "Times New Roman" })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: "Độc lập - Tự do - Hạnh phúc", bold: true, size: 23, font: "Times New Roman" })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: "-------------------------------", size: 18, color: "666666" })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({ text: "An Trường, ngày ..... tháng ..... năm 2025", italics: true, size: 21, font: "Times New Roman" })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
}

function createSignaturesTable() {
  return new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    borders: {
      top: { style: BorderStyle.NONE },
      bottom: { style: BorderStyle.NONE },
      left: { style: BorderStyle.NONE },
      right: { style: BorderStyle.NONE },
      insideHorizontal: { style: BorderStyle.NONE },
      insideVertical: { style: BorderStyle.NONE }
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 3200, type: WidthType.DXA },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: "GIÁO VIÊN XÂY DỰNG", bold: true, size: 22, font: "Times New Roman" })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: "(Ký và ghi rõ họ tên)", italics: true, size: 20, font: "Times New Roman" })
                ]
              }),
              new Paragraph({ text: "", spacing: { before: 1200 } }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: "...........................................", size: 22, font: "Times New Roman" })
                ]
              })
            ]
          }),
          new TableCell({
            width: { size: 3200, type: WidthType.DXA },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: "TỔ TRƯỞNG CHUYÊN MÔN", bold: true, size: 22, font: "Times New Roman" })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: "(Ký và ghi rõ họ tên)", italics: true, size: 20, font: "Times New Roman" })
                ]
              }),
              new Paragraph({ text: "", spacing: { before: 1200 } }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: "...........................................", size: 22, font: "Times New Roman" })
                ]
              })
            ]
          }),
          new TableCell({
            width: { size: 3255, type: WidthType.DXA },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: "HIỆU TRƯỞNG PHÊ DUYỆT", bold: true, size: 22, font: "Times New Roman" })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: "(Ký tên, đóng dấu)", italics: true, size: 20, font: "Times New Roman" })
                ]
              }),
              new Paragraph({ text: "", spacing: { before: 1200 } }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: "...........................................", size: 22, font: "Times New Roman" })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
}

function getYccdAndNote(title, grade) {
  const lower = title.toLowerCase();
  
  if (lower.includes('kiểm tra học kì 1') || lower.includes('kiểm tra cuối học kì 1')) {
    return {
      yccd: "Đánh giá định kỳ cuối học kì I bám sát chuẩn Thông tư 27/2020/TT-BGDĐT. Kiểm tra tổng hợp 4 kỹ năng (Nghe, Nói, Đọc, Viết). Phân hóa theo 3 mức độ nhận thức (Mức 1, 2, 3).",
      dddh: "Đề kiểm tra, Phiếu làm bài, File Audio Nghe, Barem đáp án"
    };
  }
  if (lower.includes('kiểm tra học kì 2') || lower.includes('kiểm tra cuối năm')) {
    return {
      yccd: "Đánh giá định kỳ cuối năm học theo chuẩn Thông tư 27. Đánh giá mức độ đạt chuẩn năng lực tiếng Anh cả năm. Khảo sát 4 kỹ năng ngôn ngữ.",
      dddh: "Đề kiểm tra, Phiếu làm bài, File Audio Nghe, Hướng dẫn chấm"
    };
  }
  if (lower.includes('chữa bài')) {
    return {
      yccd: "Chữa bài kiểm tra định kỳ; củng cố kiến thức, sửa lỗi phát âm, ngữ pháp và chính tả cho học sinh. Hướng dẫn phương pháp tự học và rèn luyện kỹ năng.",
      dddh: "Bài kiểm tra đã chấm, bảng tổng hợp kết quả"
    };
  }
  if (lower.includes('review') || lower.includes('ôn tập')) {
    return {
      yccd: "Hệ thống hóa từ vựng, ngữ âm và mẫu câu đã học trong các bài trước. Rèn luyện kỹ năng nghe - nói qua các hoạt động tương tác. Tích hợp NLS: Sử dụng phần mềm tương tác.",
      dddh: "Flashcards, Audio tracks, Bảng tương tác/Ti vi"
    };
  }
  if (lower.includes('fun time')) {
    return {
      yccd: "Phát triển hứng thú học tập qua các bài hát, trò chơi ngôn ngữ và dự án học tập nhỏ. Tăng cường kỹ năng giao tiếp tự nhiên và làm việc nhóm.",
      dddh: "Tranh ảnh, bài hát, dụng cụ trò chơi học tập"
    };
  }
  if (lower.includes('làm quen')) {
    return {
      yccd: `Giới thiệu chương trình Tiếng Anh ${grade} (Bộ sách Global Success - GDPT 2018), cấu trúc sách giáo khoa, các nhân vật, hệ thống ký hiệu và phương pháp học tập hiệu quả.`,
      dddh: "SGK Tiếng Anh, SGV, Video giới thiệu bài học"
    };
  }
  if (lower.includes('starter') || lower.includes('numbers') || lower.includes('alphabet') || lower.includes('hello again') || lower.includes('back to school')) {
    return {
      yccd: "Khởi động năm học, ôn tập bảng chữ cái, các số đếm, các câu chào hỏi và các hiệu lệnh lớp học quen thuộc. Tích hợp NLS: tương tác thẻ chữ, thẻ số điện tử.",
      dddh: "Thẻ chữ, Thẻ số, File âm thanh khởi động"
    };
  }

  // Phân tích theo bài Unit
  return {
    yccd: `Hình thành và rèn luyện năng lực ngôn ngữ theo chủ điểm bài học. Nhận biết và phát âm đúng từ vựng trọng tâm; hiểu và sử dụng được mẫu câu giao tiếp cơ bản. Rèn 4 kỹ năng Nghe - Nói - Đọc - Viết. Tích hợp QCN: Tôn trọng bạn bè trong giao tiếp; Tích hợp NLS: Luyện nghe trên thiết bị số.`,
    dddh: "SGK, Bài giảng điện tử, File Audio, Flashcards"
  };
}

function parseExcelLessons(fileName) {
  const fullPath = path.join(dir, fileName);
  const wb = XLSX.readFile(fullPath);
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const rawRows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
  
  const rows = [];
  for (let i = 6; i < rawRows.length; i++) {
    const r = rawRows[i];
    if (!r || (r[0] === undefined && r[1] === undefined && r[2] === undefined)) continue;
    rows.push({
      week: r[0],
      period: r[1],
      title: (r[2] || '').toString().trim(),
      note: (r[3] || '').toString().trim()
    });
  }
  return rows;
}

function buildGradeSection(grade, fileName) {
  const lessons = parseExcelLessons(fileName);
  const isGrade2 = grade === 2;
  const totalWeeks = 35;
  const totalLessons = lessons.length;
  const sem1Lessons = isGrade2 ? 18 : 72;
  const sem2Lessons = isGrade2 ? 17 : 68;

  const docChildren = [
    // 1. Header cơ quan & Quốc hiệu
    createHeaderTable(),

    new Paragraph({ text: "", spacing: { before: 200 } }),

    // 2. Tiêu đề văn bản
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: "KẾ HOẠCH DẠY HỌC CÁC MÔN HỌC VÀ HOẠT ĐỘNG GIÁO DỤC",
          bold: true,
          size: 27,
          font: "Times New Roman"
        })
      ]
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: `MÔN HỌC: TIẾNG ANH (NGOẠI NGỮ 1) – LỚP ${grade}`,
          bold: true,
          size: 25,
          font: "Times New Roman",
          color: "1E3A8A"
        })
      ]
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: "NĂM HỌC 2025 - 2026",
          bold: true,
          size: 23,
          font: "Times New Roman"
        })
      ]
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: "(Thực hiện theo Chương trình GDPT 2018 – Bộ sách Tiếng Anh Global Success & Công văn 2345/BGDĐT-GDTH)",
          italics: true,
          size: 21,
          font: "Times New Roman"
        })
      ]
    }),

    new Paragraph({ text: "", spacing: { before: 240 } }),

    // 3. Khái quát chương trình & Thời lượng
    new Paragraph({
      children: [
        new TextRun({ text: "I. QUY ĐỊNH THỜI LƯỢNG VÀ KẾ HOẠCH DẠY HỌC", bold: true, size: 24, font: "Times New Roman" })
      ]
    }),
    new Paragraph({
      spacing: { before: 100, after: 60 },
      children: [
        new TextRun({ text: "1. Thời lượng thực hiện môn học:", bold: true, size: 22, font: "Times New Roman" }),
        new TextRun({
          text: isGrade2 
            ? ` Cả năm: 35 tuần x 1 tiết/tuần = 35 tiết. Trong đó: Học kì I: 18 tuần (18 tiết); Học kì II: 17 tuần (17 tiết).`
            : ` Cả năm: 35 tuần x 4 tiết/tuần = 140 tiết. Trong đó: Học kì I: 18 tuần (72 tiết); Học kì II: 17 tuần (68 tiết).`,
          size: 22,
          font: "Times New Roman"
        })
      ]
    }),
    new Paragraph({
      spacing: { before: 60, after: 120 },
      children: [
        new TextRun({ text: "2. Mục tiêu môn học:", bold: true, size: 22, font: "Times New Roman" }),
        new TextRun({
          text: ` Giúp học sinh bước đầu hình thành và phát triển năng lực giao tiếp bằng tiếng Anh thông qua 4 kĩ năng: Nghe, Nói, Đọc, Viết; rèn luyện sự tự tin trong môi trường học tập mới; tích hợp phát triển Năng lực số (NLS), nhận thức trí tuệ nhân tạo (AI) và Giáo dục quyền con người (QCN) phù hợp với lứa tuổi học sinh tiểu học theo chuẩn Thông tư 27/2020/TT-BGDĐT.`,
          size: 22,
          font: "Times New Roman"
        })
      ]
    }),

    // 4. Kế hoạch dạy học chi tiết
    new Paragraph({
      children: [
        new TextRun({ text: "II. KẾ HOẠCH DẠY HỌC CHI TIẾT (PHÂN PHỐI CHƯƠNG TRÌNH 35 TUẦN)", bold: true, size: 24, font: "Times New Roman" })
      ]
    }),
    new Paragraph({ text: "", spacing: { before: 100 } })
  ];

  // Bảng phân phối chương trình chi tiết
  const tableRows = [
    // Header dòng 1
    new TableRow({
      tableHeader: true,
      children: [
        new TableCell({
          width: { size: COL_WIDTHS[0], type: WidthType.DXA },
          shading: { fill: "F1F5F9" },
          verticalAlign: VerticalAlign.CENTER,
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [new TextRun({ text: "Tuần", bold: true, size: 21, font: "Times New Roman" })]
            })
          ]
        }),
        new TableCell({
          width: { size: COL_WIDTHS[1], type: WidthType.DXA },
          shading: { fill: "F1F5F9" },
          verticalAlign: VerticalAlign.CENTER,
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [new TextRun({ text: "Tiết", bold: true, size: 21, font: "Times New Roman" })]
            })
          ]
        }),
        new TableCell({
          width: { size: COL_WIDTHS[2], type: WidthType.DXA },
          shading: { fill: "F1F5F9" },
          verticalAlign: VerticalAlign.CENTER,
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [new TextRun({ text: "Tên bài học / Nội dung dạy học", bold: true, size: 21, font: "Times New Roman" })]
            })
          ]
        }),
        new TableCell({
          width: { size: COL_WIDTHS[3], type: WidthType.DXA },
          shading: { fill: "F1F5F9" },
          verticalAlign: VerticalAlign.CENTER,
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [new TextRun({ text: "Yêu cầu cần đạt / Mục tiêu & Tích hợp", bold: true, size: 21, font: "Times New Roman" })]
            })
          ]
        }),
        new TableCell({
          width: { size: COL_WIDTHS[4], type: WidthType.DXA },
          shading: { fill: "F1F5F9" },
          verticalAlign: VerticalAlign.CENTER,
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [new TextRun({ text: "Ghi chú / ĐDDH", bold: true, size: 21, font: "Times New Roman" })]
            })
          ]
        })
      ]
    })
  ];

  let currentSemester = 0;

  lessons.forEach((item, idx) => {
    const periodNum = parseInt(item.period, 10) || (idx + 1);
    const weekNum = parseInt(item.week, 10) || 1;

    // Chèn hàng phân cách Học kì I / Học kì II
    if (currentSemester === 0 && weekNum <= 18) {
      currentSemester = 1;
      tableRows.push(
        new TableRow({
          children: [
            new TableCell({
              columnSpan: 5,
              shading: { fill: "E2E8F0" },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `HỌC KÌ I: 18 TUẦN (${isGrade2 ? '18 TIẾT' : '72 TIẾT'})`,
                      bold: true,
                      size: 22,
                      font: "Times New Roman",
                      color: "1E3A8A"
                    })
                  ]
                })
              ]
            })
          ]
        })
      );
    } else if (currentSemester === 1 && weekNum > 18) {
      currentSemester = 2;
      tableRows.push(
        new TableRow({
          children: [
            new TableCell({
              columnSpan: 5,
              shading: { fill: "E2E8F0" },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `HỌC KÌ II: 17 TUẦN (${isGrade2 ? '17 TIẾT' : '68 TIẾT'})`,
                      bold: true,
                      size: 22,
                      font: "Times New Roman",
                      color: "1E3A8A"
                    })
                  ]
                })
              ]
            })
          ]
        })
      );
    }

    const { yccd, dddh } = getYccdAndNote(item.title, grade);
    const isSpecial = item.title.toLowerCase().includes('kiểm tra') || item.title.toLowerCase().includes('review');

    tableRows.push(
      new TableRow({
        children: [
          new TableCell({
            width: { size: COL_WIDTHS[0], type: WidthType.DXA },
            verticalAlign: VerticalAlign.CENTER,
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: String(item.week), size: 20, font: "Times New Roman" })]
              })
            ]
          }),
          new TableCell({
            width: { size: COL_WIDTHS[1], type: WidthType.DXA },
            verticalAlign: VerticalAlign.CENTER,
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: String(item.period), bold: true, size: 20, font: "Times New Roman" })]
              })
            ]
          }),
          new TableCell({
            width: { size: COL_WIDTHS[2], type: WidthType.DXA },
            verticalAlign: VerticalAlign.CENTER,
            shading: isSpecial ? { fill: "FEF3C7" } : undefined,
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: item.title,
                    bold: isSpecial,
                    size: 20,
                    font: "Times New Roman",
                    color: isSpecial ? "92400E" : "000000"
                  })
                ]
              })
            ]
          }),
          new TableCell({
            width: { size: COL_WIDTHS[3], type: WidthType.DXA },
            verticalAlign: VerticalAlign.CENTER,
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [new TextRun({ text: yccd, size: 19, font: "Times New Roman" })]
              })
            ]
          }),
          new TableCell({
            width: { size: COL_WIDTHS[4], type: WidthType.DXA },
            verticalAlign: VerticalAlign.CENTER,
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [new TextRun({ text: item.note ? `${item.note}. ${dddh}` : dddh, size: 19, font: "Times New Roman" })]
              })
            ]
          })
        ]
      })
    );
  });

  const matrixTable = new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    borders: tableBorders,
    rows: tableRows
  });

  docChildren.push(matrixTable);
  docChildren.push(new Paragraph({ text: "", spacing: { before: 240 } }));

  // 5. Phần III: Ký duyệt
  docChildren.push(
    new Paragraph({
      children: [
        new TextRun({ text: "III. TỔ CHỨC THỰC HIỆN VÀ PHÊ DUYỆT", bold: true, size: 24, font: "Times New Roman" })
      ]
    }),
    new Paragraph({
      spacing: { before: 80, after: 140 },
      children: [
        new TextRun({
          text: "Kế hoạch dạy học môn Tiếng Anh được xây dựng dựa trên điều kiện thực tế của nhà trường, học sinh và đã được Tổ chuyên môn thông qua, trình Hiệu trưởng phê duyệt thực hiện trong năm học 2025 - 2026.",
          italics: true,
          size: 21,
          font: "Times New Roman"
        })
      ]
    }),
    createSignaturesTable()
  );

  return {
    properties: {
      page: {
        margin: {
          top: 1134,    // 20mm
          bottom: 1134, // 20mm
          left: 1417,   // 25mm
          right: 850    // 15mm
        }
      }
    },
    headers: {
      default: new Header({
        children: [
          new Paragraph({
            alignment: AlignmentType.RIGHT,
            children: [
              new TextRun({
                text: `Kế hoạch dạy học môn Tiếng Anh Lớp ${grade} – Năm học 2025 - 2026`,
                italics: true,
                size: 18,
                font: "Times New Roman",
                color: "666666"
              })
            ]
          })
        ]
      })
    },
    footers: {
      default: new Footer({
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "Trang ",
                size: 18,
                font: "Times New Roman",
                color: "666666"
              }),
              new TextRun({
                children: [PageNumber.CURRENT],
                size: 18,
                font: "Times New Roman",
                color: "666666"
              }),
              new TextRun({
                text: " / ",
                size: 18,
                font: "Times New Roman",
                color: "666666"
              }),
              new TextRun({
                children: [PageNumber.TOTAL_PAGES],
                size: 18,
                font: "Times New Roman",
                color: "666666"
              })
            ]
          })
        ]
      })
    },
    children: docChildren
  };
}

function buildGradeDocx(grade, fileName) {
  const section = buildGradeSection(grade, fileName);
  return new Document({
    sections: [section]
  });
}

async function exportAll() {
  console.log("=== BẮT ĐẦU XUẤT CÁC FILE KHDH MÔN TIẾNG ANH CHUẨN .DOCX ===\n");

  const filesConfig = [
    { grade: 2, xls: 'phan_phoi_chuong_trinh_2025__k2 Ngoai ngu 1.xls', out: 'KHDH MÔN TIẾNG ANH LỚP 2.docx' },
    { grade: 3, xls: 'phan_phoi_chuong_trinh_2025__k3 Ngoai ngu 1.xls', out: 'KHDH MÔN TIẾNG ANH LỚP 3.docx' },
    { grade: 4, xls: 'phan_phoi_chuong_trinh_2025__k4 Ngoai ngu 1.xls', out: 'KHDH MÔN TIẾNG ANH LỚP 4.docx' },
    { grade: 5, xls: 'phan_phoi_chuong_trinh_2025__k5 Ngoai ngu 1.xls', out: 'KHDH MÔN TIẾNG ANH LỚP 5.docx' }
  ];

  for (const cfg of filesConfig) {
    console.log(`Đang xử lý xuất: ${cfg.out} từ ${cfg.xls}...`);
    const doc = buildGradeDocx(cfg.grade, cfg.xls);
    const buffer = await Packer.toBuffer(doc);
    const outPath = path.join(dir, cfg.out);
    fs.writeFileSync(outPath, buffer);
    console.log(`✓ Đã tạo thành công: ${cfg.out} (${(buffer.length / 1024).toFixed(1)} KB)`);
  }

  // TẠO THÊM FILE TỔNG HỢP TOÀN CẤP (LỚP 2, 3, 4, 5)
  console.log(`\nĐang tạo file tổng hợp toàn cấp: KHDH MÔN TIẾNG ANH LỚP 2, 3, 4, 5 (BẢN TỔNG HỢP TOÀN CẤP).docx...`);
  const sections = filesConfig.map(cfg => buildGradeSection(cfg.grade, cfg.xls));
  const combinedDoc = new Document({
    sections
  });

  const combinedBuf = await Packer.toBuffer(combinedDoc);
  const combinedPath = path.join(dir, 'KHDH MÔN TIẾNG ANH LỚP 2, 3, 4, 5 (BẢN TỔNG HỢP TOÀN CẤP).docx');
  fs.writeFileSync(combinedPath, combinedBuf);
  console.log(`✓ Đã tạo thành công: KHDH MÔN TIẾNG ANH LỚP 2, 3, 4, 5 (BẢN TỔNG HỢP TOÀN CẤP).docx (${(combinedBuf.length / 1024).toFixed(1)} KB)`);

  console.log('\n=== TẤT CẢ 5 FILE .DOCX ĐÃ ĐƯỢC XUẤT THÀNH CÔNG VÀO THƯ MỤC! ===');
}

exportAll().catch(err => {
  console.error("LỖI XUẤT DOCX:", err);
  process.exit(1);
});
