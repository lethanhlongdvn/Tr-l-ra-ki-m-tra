/**
 * AI EXAM GENERATOR VIEW MODULE (CHUẨN THÔNG TƯ 27/2020/TT-BGDĐT)
 * Phân hệ Trợ lý AI Ra Đề & Ma Trận Đề Kiểm Tra Tiểu Học
 * Thư viện Bài giảng & Kế hoạch bài dạy Tiểu học - Lê Thành Long
 */

/* ==========================================================================
   VIEW 5: TRỢ LÝ AI SOẠN ĐỀ KIỂM TRA (CHƯƠNG TRÌNH GDPT 2018 - SGK KẾT NỐI TRI THỨC)
   Chuẩn mẫu thực tế: Ma trận phân tầng 3 Mức • Đề kiểm tra 3 ô đánh giá • Barem chấm
   ========================================================================== */

var currentExamData = null;
var currentExamActiveTab = "exam"; // "exam" | "matrix" | "answers" | "reading" | "writing" | "rubric"

function getSubjectsForGrade(grade) {
  var g = parseInt(grade) || 5;
  var all = AIService.EXAM_SUBJECTS;
  var list = [];
  for (var key in all) {
    if (all[key].grades.indexOf(g) !== -1) {
      list.push(all[key]);
    }
  }
  return list;
}

function renderAiExamView(container) {
  var currentGradeNum = selectedGrade === "all" ? 5 : parseInt(selectedGrade);
  var apiKey = localStorage.getItem("tvth_gemini_api_key") || (window.CONFIG && window.CONFIG.DEFAULT_GEMINI_API_KEY) || "";
  var availableSubjects = getSubjectsForGrade(currentGradeNum);
  var defaultSubject = availableSubjects[0]?.id || "TOAN";

  container.innerHTML = `
    <div class="section-header">
      <div>
        <h2 class="section-title">
          <i class="fa-solid fa-wand-magic-sparkles" style="color: #a855f7;"></i> 
          Trợ Lý AI Soạn Đề Kiểm Tra & Ma Trận Chuẩn Sư Phạm
        </h2>
        <p class="section-subtitle">
          Bộ sách <strong>Kết nối tri thức với cuộc sống</strong> • Thông tư 27/2020/TT-BGDĐT • Ma trận 3 Mức độ • Phiếu kiểm tra & Barem chấm
        </p>
      </div>
      <div>
        <button class="btn btn-sm ${apiKey ? 'btn-outline' : 'btn-primary'}" style="${apiKey ? 'border-color: #16a34a; color: #16a34a;' : 'background: linear-gradient(135deg, #7c3aed, #a855f7);'}" onclick="openGeminiApiKeyModal()">
          <i class="fa-solid ${apiKey ? 'fa-key' : 'fa-wand-magic-sparkles'}"></i> 
          ${apiKey ? 'Gemini AI: Đã kết nối' : 'Cấu hình Gemini API Key'}
        </button>
      </div>
    </div>

    <div class="ai-layout-container">
      <!-- CỘT ĐIỀU KHIỂN BÊN TRÁI (FORM THU THẬP THÔNG SỐ) -->
      <div class="ai-ctrl-box" style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm);">
        
        <!-- THANH TRẠNG THÁI BỘ SÁCH THỐNG NHẤT TOÀN QUỐC (KNTT) -->
        <div style="font-size: 0.78rem; font-weight: 800; color: #1e3a8a; background: #eff6ff; border: 1px solid #bfdbfe; padding: 0.35rem 0.75rem; border-radius: var(--radius-full); display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
          <span id="aiBookSeriesBadge"><i class="fa-solid fa-book-bookmark"></i> BỘ SÁCH THỐNG NHẤT: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (KNTT)</span>
          <span style="color: #16a34a;"><i class="fa-solid fa-circle-check"></i> Áp dụng từ 2026 - 2027</span>
        </div>
        <input type="hidden" id="aiBookSeriesSelect" value="kntt">

        <!-- 1. KHỐI LỚP & MÔN THI -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.65rem;">
          <div class="form-group">
            <label for="aiGradeSelect" style="font-weight: 700; font-size: 0.82rem;">1. Khối Lớp:</label>
            <select id="aiGradeSelect" class="form-select" onchange="onExamGradeChange(this.value)">
              <option value="1" ${currentGradeNum === 1 ? 'selected' : ''}>Khối 1</option>
              <option value="2" ${currentGradeNum === 2 ? 'selected' : ''}>Khối 2</option>
              <option value="3" ${currentGradeNum === 3 ? 'selected' : ''}>Khối 3</option>
              <option value="4" ${currentGradeNum === 4 ? 'selected' : ''}>Khối 4</option>
              <option value="5" ${currentGradeNum === 5 ? 'selected' : ''}>Khối 5</option>
            </select>
          </div>

          <div class="form-group">
            <label for="aiSubjectSelect" style="font-weight: 700; font-size: 0.82rem;">2. Môn Thi:</label>
            <select id="aiSubjectSelect" class="form-select" onchange="onExamSubjectChange(this.value)">
              ${availableSubjects.map(function(s) {
                return `<option value="${s.id}">${s.name}</option>`;
              }).join('')}
            </select>
          </div>
        </div>

        <!-- 2. PHẠM VI RA ĐỀ -->
        <div class="form-group" style="margin-top: 0.35rem;">
          <label for="aiScopePreset" style="font-weight: 700; font-size: 0.82rem;">3. Phạm Vi Đề Kiểm Tra (Thông tư 27):</label>
          <select id="aiScopePreset" class="form-select" onchange="onExamScopePresetChange(this.value)">
            <option value="Kiểm tra Định kỳ Cuối Học Kỳ I (Tuần 1 - 18)" selected>Cuối Học Kỳ I (Tuần 1 - 18)</option>
            <option value="Kiểm tra Định kỳ Cuối Học Kỳ II (Tuần 19 - 35)">Cuối Học Kỳ II (Tuần 19 - 35)</option>
          </select>
        </div>

        <!-- ========================================================= -->
        <!-- FORM ĐẶC THÙ CHO MÔN TIẾNG VIỆT (CHUẨN 2 PHIẾU ĐỌC & VIẾT) -->
        <!-- ========================================================= -->
        <div id="tvConfigBox" style="display: none; background: #fdf4ff; border: 1px solid #e879f9; border-radius: var(--radius-sm); padding: 0.75rem; margin-top: 0.65rem;">
          
          <div style="font-weight: 800; font-size: 0.82rem; color: #86198f; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.35rem;">
            <i class="fa-solid fa-book-open-reader"></i> I. PHẦN KIỂM TRA ĐỌC (10,0 điểm)
          </div>

          <div style="display: grid; grid-template-columns: 1fr; gap: 0.45rem; margin-bottom: 0.6rem; background: #fff; padding: 0.5rem; border-radius: 4px; border: 1px solid #f0abfc;">
            <div class="form-group" style="margin-bottom: 0;">
              <label for="tvOralScoreSelect" style="font-weight: 700; font-size: 0.78rem; color: #581c87;">• Điểm Đọc thành tiếng:</label>
              <select id="tvOralScoreSelect" class="form-select" style="font-size: 0.8rem;" onchange="onTvOralScoreChange(this.value)">
                <option value="4" selected>4,0 điểm (Đọc hiểu & LTVC: 6,0 điểm - Chuẩn TT27)</option>
                <option value="3">3,0 điểm (Đọc hiểu & LTVC: 7,0 điểm)</option>
              </select>
            </div>

            <input type="hidden" id="tvOralModeSelect" value="sgk">
            <input type="hidden" id="tvReadingGenreSelect" value="sgk_art">
          </div>

          <div style="font-weight: 800; font-size: 0.82rem; color: #86198f; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.35rem;">
            <i class="fa-solid fa-pen-nib"></i> II. PHẦN KIỂM TRA VIẾT (10,0 điểm)
          </div>

          <!-- Dành cho Lớp 1, 2, 3 -->
          <div id="tvWritingGrade123Box" style="background: #fff; padding: 0.5rem; border-radius: 4px; border: 1px solid #f0abfc;">
            <label for="tvWritingRatioSelect" style="font-weight: 700; font-size: 0.78rem; color: #581c87;">• Phân chia điểm Chính tả & Tập làm văn:</label>
            <select id="tvWritingRatioSelect" class="form-select" style="font-size: 0.8rem;">
              <option value="4-6" selected>Chính tả (Nghe-viết): 4,0đ — Viết đoạn văn: 6,0đ (Chuẩn TT27)</option>
              <option value="3-7">Chính tả (Nghe-viết): 3,0đ — Viết đoạn văn: 7,0đ</option>
              <option value="5-5">Chính tả (Nghe-viết): 5,0đ — Viết đoạn văn: 5,0đ</option>
            </select>
          </div>

          <!-- Dành cho Lớp 4, 5 -->
          <div id="tvWritingGrade45Box" style="display: none; background: #fff; padding: 0.5rem; border-radius: 4px; border: 1px solid #f0abfc;">
            <div style="font-size: 0.78rem; font-weight: 700; color: #1e40af; margin-bottom: 0.35rem;">
              <i class="fa-solid fa-circle-check"></i> Tập làm văn: 10,0 điểm (Bài văn hoàn chỉnh)
            </div>
            <label for="tvEssayGenreSelect" style="font-weight: 700; font-size: 0.78rem; color: #581c87;">• Thể loại Tập làm văn:</label>
            <select id="tvEssayGenreSelect" class="form-select" style="font-size: 0.8rem;">
              <option value="Văn miêu tả cây cối" selected>Văn miêu tả cây cối (cây bóng mát, cây hoa, cây ăn quả)</option>
              <option value="Văn miêu tả con vật">Văn miêu tả con vật nuôi yêu thích</option>
              <option value="Văn miêu tả cảnh vật">Văn miêu tả cảnh đẹp thiên nhiên / quê hương</option>
              <option value="Văn miêu tả người">Văn miêu tả người thân / thầy cô giáo</option>
              <option value="Văn kể chuyện">Văn kể lại câu chuyện đã học / đã nghe</option>
              <option value="Viết đoạn văn nêu tình cảm cảm xúc">Viết đoạn văn nêu tình cảm, cảm xúc</option>
            </select>
            <p style="font-size: 0.71rem; color: #1e40af; margin: 0.3rem 0 0 0;">
              <i class="fa-solid fa-award"></i> Tự động tạo Barem chấm 10 điểm chi tiết trong Hướng Dẫn Chấm.
            </p>
          </div>

        </div>

        <!-- ========================================================= -->
        <!-- FORM CHUẨN CHO CÁC MÔN TOÁN, KHOA HỌC, XÃ HỘI, TIN HỌC... -->
        <!-- ========================================================= -->
        <div id="standardConfigBox" style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.75rem; margin-top: 0.65rem;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.65rem; margin-bottom: 0.5rem;">
            <div class="form-group" style="margin-bottom: 0;">
              <label for="aiMcqCount" style="font-weight: 700; font-size: 0.8rem;">4. Số câu Trắc nghiệm:</label>
              <input type="number" id="aiMcqCount" min="0" max="30" value="8" class="form-control" style="font-weight: 700; text-align: center;">
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label for="aiEssayCount" style="font-weight: 700; font-size: 0.8rem;">5. Số câu Tự luận:</label>
              <input type="number" id="aiEssayCount" min="0" max="10" value="2" class="form-control" style="font-weight: 700; text-align: center;">
            </div>
          </div>

          <!-- HÌNH THỨC CÂU TRẮC NGHIỆM (TÙY MÔN HỌC & ĐA DẠNG HÓA) -->
          <div class="form-group" style="margin-bottom: 0.5rem;">
            <label for="aiQuestionFormatSelect" style="font-weight: 700; font-size: 0.8rem;">6. Hình thức câu Trắc nghiệm:</label>
            <select id="aiQuestionFormatSelect" class="form-select" style="font-size: 0.8rem;">
              <option value="auto" selected>✨ Tự động theo môn (Toán: MCQ/tính toán; Khoa/Sử/Địa/Công nghệ: Đa dạng)</option>
              <option value="diverse">🔀 Đa dạng hóa (4 lựa chọn, Đúng/Sai ☐, Nối cột A-B, Điền từ khuyết)</option>
              <option value="mcq_only">📝 Chỉ trắc nghiệm 4 lựa chọn (A, B, C, D)</option>
            </select>
          </div>

          <!-- ĐỊNH HƯỚNG NỘI DUNG TỰ LUẬN -->
          <div class="form-group" style="margin-bottom: 0.5rem;">
            <label for="aiEssayGuide" style="font-weight: 700; font-size: 0.8rem;">7. Định hướng nội dung Tự luận (Gợi ý cho AI):</label>
            <textarea id="aiEssayGuide" class="form-control" rows="2" placeholder="Ví dụ: Bài 1 đặt tính rồi tính (4 phép tính), Bài 2 giải toán có lời văn 2 bước tính, Bài 3 tính bằng cách thuận tiện..." style="font-size: 0.8rem;"></textarea>
          </div>

          <!-- TỈ LỆ % ĐIỂM TRẮC NGHIỆM / TỰ LUẬN -->
          <div class="form-group" style="margin-bottom: 0;">
            <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 0.8rem; margin-bottom: 0.25rem;">
              <span>Trắc nghiệm: <b id="aiMcqPctLabel" style="color: #7c3aed;">70%</b> (<span id="aiMcqScoreLabel">7,0</span>đ)</span>
              <span>Tự luận: <b id="aiEssayPctLabel" style="color: #2563eb;">30%</b> (<span id="aiEssayScoreLabel">3,0</span>đ)</span>
            </div>
            <input type="range" id="aiScoreRatioSlider" min="0" max="100" step="10" value="70" class="form-range" oninput="onExamScoreRatioChange(this.value)" style="width: 100%; cursor: pointer;">
            <div style="display: flex; justify-content: space-between; gap: 0.25rem; margin-top: 0.35rem;">
              <button type="button" class="btn btn-sm btn-outline" style="padding: 0.15rem 0.4rem; font-size: 0.72rem;" onclick="setExamScoreRatio(70)">70% - 30%</button>
              <button type="button" class="btn btn-sm btn-outline" style="padding: 0.15rem 0.4rem; font-size: 0.72rem;" onclick="setExamScoreRatio(80)">80% - 20%</button>
              <button type="button" class="btn btn-sm btn-outline" style="padding: 0.15rem 0.4rem; font-size: 0.72rem;" onclick="setExamScoreRatio(60)">60% - 40%</button>
              <button type="button" class="btn btn-sm btn-outline" style="padding: 0.15rem 0.4rem; font-size: 0.72rem;" onclick="setExamScoreRatio(50)">50% - 50%</button>
              <button type="button" class="btn btn-sm btn-outline" style="padding: 0.15rem 0.4rem; font-size: 0.72rem;" onclick="setExamScoreRatio(100)">100% TN</button>
            </div>
          </div>
        </div>

        <!-- 4. TỰ NHẬP TỈ LỆ 3 MỨC ĐỘ NHẬN THỨC (THÔNG TƯ 27) -->
        <div style="background: #fdf4ff; border: 1px solid #f0abfc; border-radius: var(--radius-sm); padding: 0.75rem; margin-top: 0.65rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem;">
            <label style="font-weight: 800; font-size: 0.8rem; color: #86198f; margin-bottom: 0;">
              Ma trận 3 Mức độ nhận thức (Tự nhập %):
            </label>
            <span id="aiCognitiveTotalBadge" style="font-size: 0.72rem; font-weight: 800; padding: 0.15rem 0.5rem; border-radius: 9999px; background: #dcfce7; color: #166534;">
              Tổng: 100% ✓
            </span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.4rem; text-align: center;">
            <div>
              <div style="font-size: 0.72rem; font-weight: 700; color: #6b21a8; margin-bottom: 0.15rem;">Mức 1 (Nhận biết)</div>
              <div style="display: flex; align-items: center; justify-content: center; gap: 0.2rem;">
                <input type="number" id="aiLevel1Pct" min="0" max="100" step="5" value="40" class="form-control" style="text-align: center; font-weight: 800; padding: 0.25rem;" oninput="updateCognitiveTotal()">
                <span style="font-size: 0.75rem; font-weight: 700;">%</span>
              </div>
            </div>

            <div>
              <div style="font-size: 0.72rem; font-weight: 700; color: #6b21a8; margin-bottom: 0.15rem;">Mức 2 (Kết nối)</div>
              <div style="display: flex; align-items: center; justify-content: center; gap: 0.2rem;">
                <input type="number" id="aiLevel2Pct" min="0" max="100" step="5" value="40" class="form-control" style="text-align: center; font-weight: 800; padding: 0.25rem;" oninput="updateCognitiveTotal()">
                <span style="font-size: 0.75rem; font-weight: 700;">%</span>
              </div>
            </div>

            <div>
              <div style="font-size: 0.72rem; font-weight: 700; color: #6b21a8; margin-bottom: 0.15rem;">Mức 3 (Vận dụng)</div>
              <div style="display: flex; align-items: center; justify-content: center; gap: 0.2rem;">
                <input type="number" id="aiLevel3Pct" min="0" max="100" step="5" value="20" class="form-control" style="text-align: center; font-weight: 800; padding: 0.25rem;" oninput="updateCognitiveTotal()">
                <span style="font-size: 0.75rem; font-weight: 700;">%</span>
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 0.35rem; margin-top: 0.45rem; justify-content: center;">
            <button type="button" class="btn btn-sm btn-outline" style="padding: 0.15rem 0.45rem; font-size: 0.7rem; background: #fff;" onclick="setCognitivePreset(40, 40, 20)">40 - 40 - 20 (Chuẩn TT27)</button>
            <button type="button" class="btn btn-sm btn-outline" style="padding: 0.15rem 0.45rem; font-size: 0.7rem; background: #fff;" onclick="setCognitivePreset(50, 30, 20)">50 - 30 - 20</button>
            <button type="button" class="btn btn-sm btn-outline" style="padding: 0.15rem 0.45rem; font-size: 0.7rem; background: #fff;" onclick="setCognitivePreset(30, 40, 30)">30 - 40 - 30</button>
          </div>
        </div>

        <!-- 5. CÁC THÔNG SỐ BỔ SUNG -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.65rem; margin-top: 0.65rem;">
          <div class="form-group" style="margin-bottom: 0;">
            <label for="aiDurationSelect" style="font-weight: 700; font-size: 0.8rem;">Thời gian làm bài:</label>
            <select id="aiDurationSelect" class="form-select">
              <option value="35 phút" ${currentGradeNum <= 2 ? 'selected' : ''}>35 phút (Tiết học chuẩn)</option>
              <option value="40 phút" ${currentGradeNum > 2 ? 'selected' : ''}>40 phút (Chuẩn định kỳ)</option>
              <option value="15 phút">15 phút (Kiểm tra nhanh)</option>
              <option value="Đọc: 35p | Viết: 35p">Đọc: 35p | Viết: 35p (Tiếng Việt)</option>
            </select>
          </div>

          <div class="form-group" style="margin-bottom: 0;">
            <label for="aiSchoolNameInput" style="font-weight: 700; font-size: 0.8rem;">Tên Trường Tiểu học:</label>
            <input type="text" id="aiSchoolNameInput" class="form-control" placeholder="Ví dụ: Trường Tiểu học Nguyễn Huệ (Vĩnh Long)...">
          </div>
        </div>

        <div class="form-group" style="margin-top: 0.5rem; margin-bottom: 0;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
            <label for="aiCustomPrompt" style="font-weight: 700; font-size: 0.8rem; margin-bottom: 0;">Ghi chú / Yêu cầu đặc biệt cho AI (Tùy chọn):</label>
            <label style="font-size: 0.74rem; color: #7c3aed; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 0.25rem; background: #f3e8ff; padding: 0.15rem 0.5rem; border-radius: 9999px; border: 1px solid #d8b4fe;" title="Tự động lồng ghép số liệu 124 xã/phường (NQ 202/2025/QH15), địa danh, nông sản và bối cảnh Vĩnh Long vào đề thi">
              <input type="checkbox" id="aiVinhLongLocalCheck" style="cursor: pointer;" checked>
              <span>🏛️ Bối cảnh Vĩnh Long (124 xã/phường)</span>
            </label>
          </div>
          <input type="text" id="aiCustomPrompt" class="form-control" placeholder="Ví dụ: Đề vừa sức học sinh, câu hỏi trắc nghiệm có tình huống thực tế địa phương...">
        </div>

        <!-- NÚT BẮT ĐẦU SOẠN ĐỀ -->
        <button class="btn btn-primary" style="width: 100%; margin-top: 1.15rem; padding: 0.8rem; font-size: 0.95rem; font-weight: 800; background: linear-gradient(135deg, #7c3aed, #a855f7); box-shadow: 0 4px 12px rgba(124, 58, 237, 0.35);" onclick="triggerAiGenerate()">
          <i class="fa-solid fa-wand-magic-sparkles"></i> BẮT ĐẦU SOẠN ĐỀ TỰ ĐỘNG
        </button>

      </div>

      <!-- CỘT KẾT QUẢ BÊN PHẢI (TRÌNH XEM TRƯỚC ĐỀ THI ĐA TABS) -->
      <div class="paper-preview-card" id="aiOutputContainer" style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; box-shadow: var(--shadow-sm); min-height: 600px;">
        <div style="text-align: center; padding: 6rem 1rem; color: var(--text-muted);">
          <div style="width: 70px; height: 70px; border-radius: 50%; background: #f3e8ff; color: #7c3aed; display: inline-flex; align-items: center; justify-content: center; font-size: 2.2rem; margin-bottom: 1.25rem;">
            <i class="fa-solid fa-file-signature"></i>
          </div>
          <h3 style="color: var(--text-color); font-weight: 800; font-size: 1.25rem; margin-bottom: 0.5rem;">Sẵn sàng tạo đề kiểm tra chuẩn Bộ GD&ĐT</h3>
          <p style="font-size: 0.88rem; max-width: 480px; margin: 0 auto; line-height: 1.5;">
            Chọn thông số bên trái và bấm <strong>"BẮT ĐẦU SOẠN ĐỀ TỰ ĐỘNG"</strong>. AI sẽ tạo trọn bộ Ma trận 3 Mức độ, Đề kiểm tra và Hướng dẫn chấm chi tiết theo SGK Kết nối tri thức.
          </p>
        </div>
      </div>
    </div>
  `;

  setTimeout(function() {
    updateExamSubjectFormState(defaultSubject, currentGradeNum);
    updateExamScopeOptions(currentGradeNum, defaultSubject);

    // Tự động phục hồi đề kiểm tra gần nhất nếu có trong phiên
    if (!currentExamData) {
      try {
        var savedDraft = sessionStorage.getItem("tvth_exam_draft");
        if (savedDraft) {
          currentExamData = JSON.parse(savedDraft);
          currentExamActiveTab = (currentExamData.isTiengViet || currentExamData.subjectId === "TIENG_VIET" || currentExamData.readingExam) ? "reading" : "exam";
        }
      } catch(e) {}
    }
    if (currentExamData) {
      var outEl = document.getElementById("aiOutputContainer");
      if (outEl) {
        renderExamOutput(currentExamData, outEl);
      }
    }
  }, 20);
}

// Cập nhật giao diện form khi đổi môn học hoặc khối lớp
function updateExamSubjectFormState(subjectId, grade) {
  var isTv = (subjectId === "TIENG_VIET");
  var g = parseInt(grade) || 3;
  
  var tvBox = document.getElementById("tvConfigBox");
  var stdBox = document.getElementById("standardConfigBox");
  var tvG123Box = document.getElementById("tvWritingGrade123Box");
  var tvG45Box = document.getElementById("tvWritingGrade45Box");

  if (tvBox) tvBox.style.display = isTv ? "block" : "none";
  if (stdBox) stdBox.style.display = isTv ? "none" : "block";

  if (isTv) {
    if (tvG123Box) tvG123Box.style.display = (g <= 3) ? "block" : "none";
    if (tvG45Box) tvG45Box.style.display = (g >= 4) ? "block" : "none";
  } else {
    // Tự động tối ưu cấu trúc đề theo đặc thù từng môn ("Tùy môn nữa nha bạn")
    var mcqInp = document.getElementById("aiMcqCount");
    var essayInp = document.getElementById("aiEssayCount");
    var essayGuideInp = document.getElementById("aiEssayGuide");

    if (subjectId === "TOAN") {
      // Chuẩn thực tế môn Toán (50% TN - 50% TL: 5đ TN, 5đ TL như đề Lương Hòa A)
      setExamScoreRatio(50);
      if (mcqInp) mcqInp.value = 7; // 7 câu TN (hoặc 6-8 câu)
      if (essayInp) essayInp.value = 2; // 2-3 câu TL (5 điểm)
      if (essayGuideInp && !essayGuideInp.value) {
        essayGuideInp.placeholder = "Ví dụ: Bài 1: Đặt tính rồi tính (4 phép tính); Bài 2: Giải toán có lời văn 2 bước tính (hình học / số thập phân / phân số)...";
      }
    } else if (subjectId === "CONG_NGHE") {
      // Chuẩn môn Công nghệ (70% TN - 30% TL: 7 câu TN 7đ + 2 câu TL 3đ)
      setExamScoreRatio(70);
      if (mcqInp) mcqInp.value = 7;
      if (essayInp) essayInp.value = 2;
      if (essayGuideInp && !essayGuideInp.value) {
        essayGuideInp.placeholder = "Ví dụ: Bài 1: Nêu quy trình/lưu ý an toàn; Bài 2: Đề xuất giải pháp/thực hành...";
      }
    } else if (subjectId === "KHOA_HOC" || subjectId === "LICH_SU_DIA_LY" || subjectId === "TIN_HOC") {
      // Chuẩn Khoa học & Lịch sử - Địa lí (70% TN - 30% TL: 8 câu TN 7đ + 2 câu TL 3đ)
      setExamScoreRatio(70);
      if (mcqInp) mcqInp.value = 8;
      if (essayInp) essayInp.value = 2;
      if (essayGuideInp && !essayGuideInp.value) {
        essayGuideInp.placeholder = "Ví dụ: Bài 1: Nêu ý nghĩa hoặc giải thích hiện tượng; Bài 2: Liên hệ thực tế bản thân/địa phương...";
      }
    } else {
      // Các môn khác (Đạo đức, Hoạt động trải nghiệm...)
      setExamScoreRatio(70);
      if (mcqInp) mcqInp.value = 7;
      if (essayInp) essayInp.value = 2;
    }
  }
}

function onTvOralScoreChange(val) {
  // Có thể cập nhật nhãn nếu cần
}

// Xử lý chuyển đổi Bộ sách (Chân trời sáng tạo vs Kết nối tri thức)
function onExamSeriesChange(series) {
  if (typeof window !== 'undefined' && window.SGK_DATA && typeof window.SGK_DATA.setActiveSeries === 'function') {
    window.SGK_DATA.setActiveSeries(series);
  }
  var badge = document.getElementById("aiBookSeriesBadge");
  if (badge) {
    badge.innerHTML = `<i class="fa-solid fa-book-open"></i> BỘ SÁCH: ${series === 'ctst' ? 'CHÂN TRỜI SÁNG TẠO' : 'KẾT NỐI TRI THỨC'}`;
  }
  var grade = document.getElementById("aiGradeSelect")?.value || 5;
  var subject = document.getElementById("aiSubjectSelect")?.value || "TIENG_VIET";
  updateExamScopeOptions(grade, subject, series);
}

// Xử lý thay đổi định hướng ngữ liệu Đọc hiểu SEA-PLM / Vĩnh Long
function onTvReadingGenreChange(val) {
  var customBox = document.getElementById("tvCustomReadingBox");
  if (customBox) {
    customBox.style.display = (val === "custom") ? "block" : "none";
    if (val === "custom") {
      var inp = document.getElementById("tvCustomReadingInput");
      if (inp) inp.focus();
    }
  }
}

// Cập nhật danh sách môn khi đổi khối lớp
function onExamGradeChange(grade) {
  var select = document.getElementById("aiSubjectSelect");
  if (!select) return;
  var subjects = getSubjectsForGrade(grade);
  select.innerHTML = subjects.map(function(s) {
    return `<option value="${s.id}">${s.name}</option>`;
  }).join('');

  var series = document.getElementById("aiBookSeriesSelect")?.value || 'kntt';
  updateExamSubjectFormState(select.value, grade);
  updateExamScopeOptions(grade, select.value, series);
}

// Cập nhật phạm vi bài học khi đổi môn
function onExamSubjectChange(subjectId) {
  var grade = document.getElementById("aiGradeSelect")?.value || 5;
  var series = document.getElementById("aiBookSeriesSelect")?.value || 'kntt';
  updateExamSubjectFormState(subjectId, grade);
  updateExamScopeOptions(grade, subjectId, series);
}

// Nạp danh sách phạm vi kiểm tra định kỳ chuẩn 100% Thông tư 27/2020/TT-BGDĐT
function updateExamScopeOptions(grade, subjectId, series) {
  var scopeSelect = document.getElementById("aiScopePreset");
  if (!scopeSelect) return;

  var g = parseInt(grade) || 5;
  var sub = (subjectId || 'TOAN').toUpperCase();
  var currentSelectedVal = scopeSelect.value;
  var currentSeries = series || document.getElementById("aiBookSeriesSelect")?.value || (window.SGK_DATA?.getActiveSeries ? window.SGK_DATA.getActiveSeries() : 'kntt');
  var sgkKey = sub.toLowerCase().replace('lich_su_dia_ly', 'lich_su_dia_li');

  // Đảm bảo sách được nạp sẵn trong RAM nếu chưa có
  if (typeof window !== 'undefined' && window.SGK_REGISTRY && typeof window.SGK_REGISTRY.ensureBookLoaded === 'function') {
    window.SGK_REGISTRY.ensureBookLoaded(g, sgkKey, currentSeries);
    if (sub === "TIENG_VIET") {
      window.SGK_REGISTRY.ensureBookLoaded(g, 'tieng_viet', 'ctst');
    }
  }

  var options = [];

  if (g <= 3) {
    // LỚP 1, 2, 3: CHỈ KIỂM TRA ĐỊNH KỲ CUỐI KỲ 1 (TUẦN 1 - 18) VÀ CUỐI KỲ 2 (TUẦN 19 - 35) MÔN TOÁN VÀ TIẾNG VIỆT
    options = [
      { value: "Kiểm tra Định kỳ Cuối Học Kỳ I (Tuần 1 - 18)", text: "Cuối Học Kỳ I (Tuần 1 - 18)" },
      { value: "Kiểm tra Định kỳ Cuối Học Kỳ II (Tuần 19 - 35)", text: "Cuối Học Kỳ II (Tuần 19 - 35)" }
    ];
  } else {
    // LỚP 4, 5
    if (sub === "TOAN" || sub === "TIENG_VIET") {
      // Toán và Tiếng Việt Lớp 4, 5: Giữa kỳ & Cuối kỳ chuẩn Thông tư 27
      options = [
        { value: "Kiểm tra Định kỳ Giữa Học Kỳ I (Tuần 1 - 9)", text: "Giữa Học Kỳ I (Tuần 1 - 9)" },
        { value: "Kiểm tra Định kỳ Cuối Học Kỳ I (Tuần 10 - 18)", text: "Cuối Học Kỳ I (Tuần 10 - 18)" },
        { value: "Kiểm tra Định kỳ Cuối Học Kỳ I (Tuần 1 - 18)", text: "Cuối Học Kỳ I (Tuần 1 - 18: Toàn bộ HK1)" },
        { value: "Kiểm tra Định kỳ Giữa Học Kỳ II (Tuần 19 - 27)", text: "Giữa Học Kỳ II (Tuần 19 - 27)" },
        { value: "Kiểm tra Định kỳ Cuối Học Kỳ II (Tuần 28 - 35)", text: "Cuối Học Kỳ II (Tuần 28 - 35)" },
        { value: "Kiểm tra Định kỳ Cuối Học Kỳ II (Tuần 19 - 35)", text: "Cuối Học Kỳ II (Tuần 19 - 35: Toàn bộ HK2)" }
      ];
    } else {
      // Tiếng Anh, Tin học, Công nghệ, Khoa học, Lịch sử & Địa lý: CHỈ KIỂM TRA CUỐI KỲ 1 VÀ CUỐI KỲ 2
      options = [
        { value: "Kiểm tra Định kỳ Cuối Học Kỳ I (Tuần 1 - 18)", text: "Cuối Học Kỳ I (Tuần 1 - 18)" },
        { value: "Kiểm tra Định kỳ Cuối Học Kỳ II (Tuần 19 - 35)", text: "Cuối Học Kỳ II (Tuần 19 - 35)" }
      ];
    }
  }

  var isCurrentValValid = options.some(function(o) { return o.value === currentSelectedVal; });
  var selectedVal = isCurrentValValid ? currentSelectedVal : options[0].value;

  var html = options.map(function(o) {
    return `<option value="${o.value}" ${o.value === selectedVal ? 'selected' : ''}>${o.text}</option>`;
  }).join('');

  scopeSelect.innerHTML = html;
  onExamScopePresetChange(scopeSelect.value);
}

// Xử lý khi chọn phạm vi bài học kiểm tra định kỳ
function onExamScopePresetChange(val) {
  // Tự động đồng bộ ngay học kỳ và tiêu đề đề thi nếu đã có đề hiển thị trên màn hình
  if (currentExamData && typeof AIService !== 'undefined' && AIService.resolveExamTermInfo) {
    var effectiveScope = val;
    if (effectiveScope) {
      var termInfo = AIService.resolveExamTermInfo(effectiveScope);
      currentExamData.scopeDesc = effectiveScope;
      currentExamData.scope = effectiveScope;
      currentExamData.examTerm = termInfo.term;
      currentExamData.examHeaderTitle = termInfo.headerTitle;
      var container = document.getElementById("aiOutputContainer");
      if (container) {
        renderExamOutput(currentExamData, container);
      }
    }
  }
}

// Đồng bộ thanh trượt tỉ lệ điểm % Trắc nghiệm / Tự luận
function onExamScoreRatioChange(mcqPct) {
  var p = parseInt(mcqPct);
  var essayPct = 100 - p;
  
  var mcqLbl = document.getElementById("aiMcqPctLabel");
  var essayLbl = document.getElementById("aiEssayPctLabel");
  var mcqScore = document.getElementById("aiMcqScoreLabel");
  var essayScore = document.getElementById("aiEssayScoreLabel");

  if (mcqLbl) mcqLbl.innerText = p + "%";
  if (essayLbl) essayLbl.innerText = essayPct + "%";
  if (mcqScore) mcqScore.innerText = (p / 10).toString().replace('.', ',');
  if (essayScore) essayScore.innerText = (essayPct / 10).toString().replace('.', ',');
}

function setExamScoreRatio(mcqPct) {
  var slider = document.getElementById("aiScoreRatioSlider");
  if (slider) {
    slider.value = mcqPct;
    onExamScoreRatioChange(mcqPct);
  }
}

// Cập nhật và kiểm tra tổng % 3 mức độ nhận thức
function updateCognitiveTotal() {
  var m1 = parseInt(document.getElementById("aiLevel1Pct")?.value) || 0;
  var m2 = parseInt(document.getElementById("aiLevel2Pct")?.value) || 0;
  var m3 = parseInt(document.getElementById("aiLevel3Pct")?.value) || 0;
  var total = m1 + m2 + m3;

  var badge = document.getElementById("aiCognitiveTotalBadge");
  if (badge) {
    if (total === 100) {
      badge.style.background = "#dcfce7";
      badge.style.color = "#166534";
      badge.innerHTML = "Tổng: 100% ✓";
    } else {
      badge.style.background = "#fee2e2";
      badge.style.color = "#991b1b";
      badge.innerHTML = `Tổng: ${total}% (Cần đủ 100%)`;
    }
  }
}

function setCognitivePreset(m1, m2, m3) {
  var in1 = document.getElementById("aiLevel1Pct");
  var in2 = document.getElementById("aiLevel2Pct");
  var in3 = document.getElementById("aiLevel3Pct");
  if (in1) in1.value = m1;
  if (in2) in2.value = m2;
  if (in3) in3.value = m3;
  updateCognitiveTotal();
}

// Bắt đầu gọi sinh đề
async function triggerAiGenerate() {
  var grade = document.getElementById("aiGradeSelect")?.value || 3;
  var subjectId = document.getElementById("aiSubjectSelect")?.value || "TOAN";
  var scopePreset = document.getElementById("aiScopePreset")?.value || "";
  var customScope = document.getElementById("aiCustomScopeInput")?.value || "";
  var scope = (scopePreset === "custom" && customScope.trim()) ? customScope.trim() : scopePreset;

  var duration = document.getElementById("aiDurationSelect")?.value || "40 phút";
  var schoolName = document.getElementById("aiSchoolNameInput")?.value || "";
  var customPrompt = document.getElementById("aiCustomPrompt")?.value || "";
  var apiKey = localStorage.getItem("tvth_gemini_api_key") || (window.CONFIG && window.CONFIG.DEFAULT_GEMINI_API_KEY) || "";

  var level1Percent = parseInt(document.getElementById("aiLevel1Pct")?.value) || 40;
  var level2Percent = parseInt(document.getElementById("aiLevel2Pct")?.value) || 40;
  var level3Percent = parseInt(document.getElementById("aiLevel3Pct")?.value) || 20;

  var isTv = (subjectId === "TIENG_VIET");
  var series = document.getElementById("aiBookSeriesSelect")?.value || "kntt";
  var payload = {
    grade: grade,
    subjectId: subjectId,
    bookSeries: series,
    scope: scope,
    duration: duration,
    schoolName: schoolName,
    customPrompt: customPrompt,
    apiKey: apiKey,
    level1Percent: level1Percent,
    level2Percent: level2Percent,
    level3Percent: level3Percent,
    isVinhLongLocal: !!document.getElementById("aiVinhLongLocalCheck")?.checked
  };

  if (isTv) {
    var oralScoreVal = parseFloat(document.getElementById("tvOralScoreSelect")?.value) || 4.0;
    var oralModeVal = document.getElementById("tvOralModeSelect")?.value || "sgk";
    var ratioVal = document.getElementById("tvWritingRatioSelect")?.value || "4-6";
    var dictScoreVal = parseFloat(ratioVal.split('-')[0]) || 4.0;
    var genreVal = document.getElementById("tvEssayGenreSelect")?.value || "Văn miêu tả cây cối";
    var readingGenreVal = document.getElementById("tvReadingGenreSelect")?.value || "sgk_art";
    var customReadingVal = document.getElementById("tvCustomReadingInput")?.value || "";

    payload.tvOralScore = oralScoreVal;
    payload.tvOralMode = oralModeVal;
    payload.tvDictationScore = dictScoreVal;
    payload.tvEssayGenre = genreVal;
    payload.tvReadingGenre = readingGenreVal;
    payload.tvCustomReading = customReadingVal;
  } else {
    var mcqCount = parseInt(document.getElementById("aiMcqCount")?.value) || 8;
    var essayCount = parseInt(document.getElementById("aiEssayCount")?.value);
    if (isNaN(essayCount)) essayCount = 2;
    var essayGuide = document.getElementById("aiEssayGuide")?.value || "";

    var sliderVal = parseInt(document.getElementById("aiScoreRatioSlider")?.value);
    var mcqPercent = !isNaN(sliderVal) ? sliderVal : 70;
    var essayPercent = 100 - mcqPercent;
    var questionFormat = document.getElementById("aiQuestionFormatSelect")?.value || "auto";

    payload.mcqCount = mcqCount;
    payload.essayCount = essayCount;
    payload.essayGuide = essayGuide;
    payload.mcqPercent = mcqPercent;
    payload.essayPercent = essayPercent;
    payload.questionFormat = questionFormat;
  }

  var outputEl = document.getElementById("aiOutputContainer");
  if (!outputEl) return;

  outputEl.innerHTML = `
    <div style="text-align: center; padding: 6rem 1rem;">
      <div class="spinner" style="border-top-color: #7c3aed; width: 44px; height: 44px; margin: 0 auto 1.5rem; border-width: 4px;"></div>
      <h3 style="color: #7c3aed; font-weight: 800; font-size: 1.2rem; margin-bottom: 0.5rem;">AI đang phân tích chương trình SGK ${series === 'ctst' ? 'Chân trời sáng tạo' : 'Kết nối tri thức'} & Khung Đọc hiểu SEA-PLM...</h3>
      <p style="color: var(--text-muted); font-size: 0.88rem; max-width: 450px; margin: 0 auto;">
        ${isTv ? 'Đang xây dựng Đề Đọc (Đọc tiếng + Đọc hiểu), Đề Viết (Chính tả + TLV), Ma trận Thông tư 27 và Barem chấm chi tiết...' : 'Đang xây dựng Ma trận 3 Mức độ, Đề kiểm tra và Barem chấm chuẩn Thông tư 27...'}
      </p>
    </div>
  `;

  setTimeout(async function() {
    try {
      var exam = await AIService.generateExam(payload);
      currentExamData = exam;
      try {
        sessionStorage.setItem("tvth_exam_draft", JSON.stringify(exam));
      } catch(e) {}
      currentExamActiveTab = (exam.isTiengViet || exam.subjectId === "TIENG_VIET" || exam.readingExam) ? "reading" : "exam";
      renderExamOutput(exam, outputEl);
      showToast("Đã soạn đề kiểm tra & ma trận thành công!", "success");
    } catch (err) {
      console.error("Lỗi tạo đề AI:", err);
      var rawMsg = err.message || "Không thể kết nối với Google Gemini API để tạo đề!";
      var safeMsg = String(rawMsg).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
      showToast(rawMsg, "error", 7000);

      outputEl.innerHTML = `
        <div style="text-align: center; padding: 4rem 1.5rem; max-width: 580px; margin: 0 auto;">
          <div style="width: 64px; height: 64px; border-radius: 50%; background: #fee2e2; color: #dc2626; display: flex; align-items: center; justify-content: center; font-size: 1.85rem; margin: 0 auto 1.25rem; box-shadow: 0 4px 14px rgba(220, 38, 38, 0.2);">
            <i class="fa-solid fa-triangle-exclamation"></i>
          </div>
          <h3 style="color: #991b1b; font-weight: 800; font-size: 1.25rem; margin-bottom: 0.65rem;">
            Không Thể Kết Nối Với Google Gemini API
          </h3>
          <div style="background: #fff5f5; border: 1px solid #fecaca; border-radius: var(--radius-md); padding: 1.15rem 1.25rem; margin-bottom: 1.5rem; text-align: left; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <div style="display: flex; align-items: flex-start; gap: 0.65rem; color: #b91c1c; font-size: 0.92rem; line-height: 1.5;">
              <i class="fa-solid fa-circle-xmark" style="margin-top: 0.2rem; font-size: 1.15rem; flex-shrink: 0;"></i>
              <div>
                <strong>Chi tiết thông báo lỗi:</strong><br>
                <span>${safeMsg}</span>
              </div>
            </div>
            <div style="margin-top: 0.85rem; padding-top: 0.75rem; border-top: 1px dashed #fca5a5; font-size: 0.82rem; color: #6b7280; line-height: 1.5;">
              <i class="fa-solid fa-circle-info" style="color: #7c3aed;"></i>
              <em>Hệ thống hoạt động ở chế độ <strong>Trực tuyến 100%</strong> theo yêu cầu. Đề kiểm tra và ma trận chỉ được tạo khi có kết nối trực tiếp với Google Gemini AI.</em>
            </div>
          </div>
          <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
            <button class="btn btn-primary" onclick="openGeminiApiKeyModal()" style="background: linear-gradient(135deg, #7c3aed, #a855f7); border: none; font-weight: 700; padding: 0.65rem 1.25rem;">
              <i class="fa-solid fa-key"></i> Cấu hình Gemini API Key
            </button>
            <button class="btn btn-outline" onclick="triggerAiGenerate()" style="border-color: #cbd5e1; font-weight: 600; padding: 0.65rem 1.25rem;">
              <i class="fa-solid fa-rotate-right"></i> Thử tạo lại
            </button>
          </div>
        </div>
      `;
    }
  }, 500);
}

// Hiển thị kết quả đề thi dạng Tabs
function renderExamOutput(exam, container) {
  if (!container || !exam) return;
  if (typeof AIService !== 'undefined' && AIService.sanitizeAndBalanceExam) {
    exam = AIService.sanitizeAndBalanceExam(exam);
  }

  var currentScope = exam.scopeDesc || exam.scope || (typeof document !== 'undefined' ? (document.getElementById("aiCustomScopeInput")?.value || document.getElementById("aiScopePreset")?.value) : "") || "";
  var termInfo = (typeof AIService !== 'undefined' && AIService.resolveExamTermInfo)
    ? AIService.resolveExamTermInfo(currentScope)
    : { term: "HỌC KÌ I", headerTitle: "ĐỀ KIỂM TRA HỌC KÌ I", matrixTitle: "HỌC KÌ I" };

  var examTerm = exam.examTerm || termInfo.term;
  if (termInfo.term === "HỌC KÌ II" && String(examTerm).includes("I") && !String(examTerm).includes("II")) {
    examTerm = "HỌC KÌ II";
  }
  var examHeaderTitle = exam.examHeaderTitle || termInfo.headerTitle;
  if (termInfo.term === "HỌC KÌ II" && String(examHeaderTitle).includes("HỌC KÌ I") && !String(examHeaderTitle).includes("HỌC KÌ II")) {
    examHeaderTitle = "ĐỀ KIỂM TRA HỌC KÌ II";
  }

  var sourceBadgeHtml = `<div style="display: inline-flex; align-items: center; gap: 0.35rem; background: #f3e8ff; color: #7c3aed; padding: 0.35rem 0.75rem; border-radius: 9999px; font-size: 0.8rem; font-weight: 700; border: 1px solid #d8b4fe;" title="Đề thi được tạo trực tuyến bởi mô hình Google Gemini AI"><i class="fa-solid fa-brain"></i> ${exam.modelName ? `AI (${exam.modelName})` : `Google Gemini AI (Online)`}</div>`;

  // =========================================================================
  // GIAO DIỆN HIỂN THỊ ĐẶC BIỆT CHO MÔN TIẾNG VIỆT (4 TABS: ĐỌC, VIẾT, MA TRẬN, ĐÁP ÁN)
  // =========================================================================
  if (exam.isTiengViet || exam.subjectId === "TIENG_VIET" || exam.readingExam) {
    var rd = exam.readingExam || {};
    var wr = exam.writingExam || {};
    var oralScoreStr = (rd.oralScore || 4.0).toFixed(1).replace('.', ',');
    var compScoreStr = (rd.comprehensionScore || 6.0).toFixed(1).replace('.', ',');
    var isSGK = (rd.oralMode !== "custom");
    var grade = exam.grade || 3;

    if (!["reading", "writing", "matrix", "rubric", "seaplm"].includes(currentExamActiveTab)) {
      currentExamActiveTab = "reading";
    }

    container.innerHTML = `
      <!-- THANH ĐIỀU HƯỚNG 5 TABS TIẾNG VIỆT -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.65rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.85rem;">
        <div style="display: flex; gap: 0.35rem; background: #f1f5f9; padding: 0.25rem; border-radius: var(--radius-sm); align-items: center; flex-wrap: wrap;">
          <button class="btn btn-sm ${currentExamActiveTab === 'reading' ? 'btn-primary' : 'btn-ghost'}" style="${currentExamActiveTab === 'reading' ? 'background: #7c3aed;' : ''}" onclick="switchExamTab('reading')">
            <i class="fa-solid fa-book-open"></i> 1. Phiếu Đề Đọc (10đ)
          </button>
          <button class="btn btn-sm ${currentExamActiveTab === 'writing' ? 'btn-primary' : 'btn-ghost'}" style="${currentExamActiveTab === 'writing' ? 'background: #7c3aed;' : ''}" onclick="switchExamTab('writing')">
            <i class="fa-solid fa-pen-nib"></i> 2. Phiếu Đề Viết (10đ)
          </button>
          <button class="btn btn-sm ${currentExamActiveTab === 'matrix' ? 'btn-primary' : 'btn-ghost'}" style="${currentExamActiveTab === 'matrix' ? 'background: #7c3aed;' : ''}" onclick="switchExamTab('matrix')">
            <i class="fa-solid fa-table-cells"></i> 3. Ma Trận Đề (TT 27)
          </button>
          <button class="btn btn-sm ${currentExamActiveTab === 'rubric' ? 'btn-primary' : 'btn-ghost'}" style="${currentExamActiveTab === 'rubric' ? 'background: #7c3aed;' : ''}" onclick="switchExamTab('rubric')">
            <i class="fa-solid fa-square-check"></i> 4. Hướng Dẫn Chấm
          </button>
          <button class="btn btn-sm ${currentExamActiveTab === 'seaplm' ? 'btn-primary' : 'btn-ghost'}" style="${currentExamActiveTab === 'seaplm' ? 'background: #0284c7;' : ''}" onclick="switchExamTab('seaplm')">
            <i class="fa-solid fa-graduation-cap"></i> 5. Đặc Tả & Mã Hóa SEA-PLM
          </button>
        </div>

        <div style="display: flex; gap: 0.45rem; align-items: center;">
          ${sourceBadgeHtml}
          <button class="btn btn-sm btn-primary" style="background: #16a34a; border-color: #16a34a;" onclick="AIService.exportToWord(currentExamData)">
            <i class="fa-solid fa-file-word"></i> Xuất File Word (.docx)
          </button>
          <button class="btn btn-sm btn-outline" onclick="window.print()">
            <i class="fa-solid fa-print"></i> In Đề
          </button>
        </div>
      </div>

      <!-- TAB 1: PHIẾU ĐỀ ĐỌC (HỌC SINH) -->
      <div id="examTabContent_reading" class="exam-paper-sheet" style="display: ${currentExamActiveTab === 'reading' ? 'block' : 'none'}; background: #fff; padding: 1.5rem; border: 1px solid #cbd5e1; border-radius: 4px; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.4; color: #000; text-align: justify; ">
        
        <!-- HEADER 2 CỘT -->
        <table class="exam-header-table" style="width: 100%; border: none; margin-bottom: 12px; font-family: 'Times New Roman', serif;">
          <tr>
            <td style="width: 48%; vertical-align: top; text-align: left;">
              <b>${exam.schoolName || "TRƯỜNG TIỂU HỌC ................................."}</b><br>
              Họ và tên: ...................................................<br>
              Lớp: ${exam.grade}.....
            </td>
            <td style="width: 52%; vertical-align: top; text-align: left;">
              <i>Thứ….. ngày … tháng … năm 2026</i><br>
              <b>KIỂM TRA ĐỊNH KỲ ${examTerm}</b><br>
              <b style="font-size: 13.5pt; text-transform: uppercase;" contenteditable="true" title="Bấm để chỉnh sửa tiêu đề nếu muốn">PHIẾU KIỂM TRA ĐỌC</b><br>
              <b>MÔN: TIẾNG VIỆT - LỚP ${exam.grade}</b><br>
              <i>Thời gian làm bài: 35 - 40 phút</i>
            </td>
          </tr>
        </table>

        <!-- KHUNG ĐÁNH GIÁ 3 Ô PHẦN ĐỌC -->
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
          <tr style="background: #fafafa; font-weight: bold; text-align: center;">
            <td style="border: 1px solid #000; width: 16%; padding: 4px;">Đọc tiếng</td>
            <td style="border: 1px solid #000; width: 16%; padding: 4px;">Đọc hiểu</td>
            <td style="border: 1px solid #000; width: 16%; padding: 4px;">Tổng điểm</td>
            <td style="border: 1px solid #000; width: 34%; padding: 4px;">Nhận xét của giáo viên</td>
            <td style="border: 1px solid #000; width: 18%; padding: 4px;">Chữ kí PHHS</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; height: 50px; text-align: center;">..... / ${oralScoreStr}đ</td>
            <td style="border: 1px solid #000; text-align: center;">..... / ${compScoreStr}đ</td>
            <td style="border: 1px solid #000; text-align: center; font-weight: bold; font-size: 13pt;">..... / 10đ</td>
            <td style="border: 1px solid #000;">&nbsp;</td>
            <td style="border: 1px solid #000;">&nbsp;</td>
          </tr>
        </table>

        <!-- A. ĐỌC THÀNH TIẾNG -->
        <div style="font-weight: bold; font-size: 13.5pt; margin: 10px 0 4px 0;">A. PHẦN ĐỌC THÀNH TIẾNG (${oralScoreStr} điểm)</div>
        <p style="margin: 0 0 6px 0; font-style: italic;">
          ${rd.oralGuideIntro || "Học sinh bốc thăm đọc thành tiếng một đoạn trong các bài sau (thời gian không quá 1 phút) và trả lời câu hỏi do giáo viên nêu:"}
        </p>

        ${(rd.oralItems && rd.oralItems.length > 0) ? `
          <div style="margin-bottom: 14px; display: flex; flex-direction: column; gap: 10px;">
            ${rd.oralItems.map(function(item, idx) {
              var qList = [];
              if (Array.isArray(item.questions) && item.questions.length > 0) {
                qList = item.questions;
              } else if (item.question) {
                qList = item.question.split(/\n+/).map(s => s.trim()).filter(Boolean);
              }
              return `
                <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: 6px; padding: 10px 14px; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
                  <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px; border-bottom: 1px solid #f1f5f9; padding-bottom: 4px;">
                    <span style="font-weight: bold; font-size: 11pt; color: #1e3a8a; text-transform: uppercase;">
                      Phiếu đọc ${idx + 1}: ${item.title}
                    </span>
                    ${item.author ? `<span style="font-size: 9.5pt; color: #64748b; font-style: italic;">Tác giả: ${item.author}</span>` : ''}
                  </div>
                  
                  <div style="background: #fafafa; border: 1px dashed #cbd5e1; border-radius: 4px; padding: 8px 12px; margin: 6px 0; text-align: justify; text-indent: 1.5rem; line-height: 1.5; font-size: 11pt; white-space: pre-line;">
                    ${item.passage || item.content || `<i>(Học sinh đọc cả bài "${item.title}")</i>`}
                  </div>

                  <div style="margin-top: 6px; padding: 6px 10px; background: #f0fdf4; border-left: 3px solid #16a34a; border-radius: 2px; font-size: 10.5pt; color: #14532d;">
                    <b>* Hệ thống câu hỏi tìm hiểu bài trong SGK (Giáo viên chọn 1 câu hỏi):</b>
                    ${qList.length > 0 ? `
                      <ul style="margin: 4px 0 0 18px; padding: 0;">
                        ${qList.map(function(q) {
                          return `<li style="margin-bottom: 2px;">${q}</li>`;
                        }).join('')}
                      </ul>
                    ` : `
                      <div style="margin-top: 2px;">${item.question || "Nêu nội dung hoặc ý nghĩa chính của đoạn đọc trên."}</div>
                    `}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        ` : `
          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 4px; padding: 8px 12px; margin-bottom: 14px;">
            <i>Chưa có dữ liệu bài đọc thành tiếng.</i>
          </div>
        `}

        <!-- B. ĐỌC HIỂU VÀ KIẾN THỨC TIẾNG VIỆT -->
        <div style="font-weight: bold; font-size: 13.5pt; margin: 14px 0 4px 0;">B. PHẦN ĐỌC HIỂU VÀ KIẾN THỨC TIẾNG VIỆT (${compScoreStr} điểm)</div>
        <p style="margin: 0 0 6px 0; font-style: italic;">Đọc thầm bài văn sau và hoàn thành các câu hỏi bên dưới:</p>

        <div style="background: #fdfdfd; border: 1px solid #cbd5e1; border-radius: 4px; padding: 10px 14px; margin: 6px 0 12px 0;">
          <div style="text-align: center; font-weight: bold; font-size: 13.5pt; text-transform: uppercase; margin-bottom: 2px;">
            ${rd.comprehensionReading?.title || "BÀI ĐỌC THẦM"}
          </div>
          ${rd.comprehensionReading?.author ? `<div style="text-align: center; font-style: italic; font-size: 11pt; margin-bottom: 8px; color: #555;">Tác giả: ${rd.comprehensionReading.author}</div>` : ''}
          <div style="text-align: justify; text-indent: 1.5rem; line-height: 1.45;">
            ${rd.comprehensionReading?.passage || ""}
          </div>
        </div>

        <p style="margin: 6px 0 8px 0; font-style: italic; font-weight: bold;">Khoanh vào chữ cái trước câu trả lời đúng và hoàn thành các bài tập:</p>

        ${(rd.questions || []).map(function(q) {
          if (typeof AIService !== 'undefined' && AIService.renderQuestionItem) {
            return AIService.renderQuestionItem(q, false);
          }
          if (q.type === 'mcq') {
            return `
              <div style="margin-bottom: 10px;" contenteditable="true">
                <b>Câu ${q.num}</b> (${q.score ? q.score.toString().replace('.', ',') : '0,5'} điểm - ${q.level || 'Mức 1'}): ${q.text}
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.35rem; padding-left: 1.25rem; margin-top: 3px;">
                  ${(q.options || []).map(function(opt) { return `<div>${opt}</div>`; }).join('')}
                </div>
              </div>
            `;
          } else {
            return `
              <div style="margin-top: 10px; margin-bottom: 12px;" contenteditable="true">
                <b>Câu ${q.num}</b> (${q.score ? q.score.toString().replace('.', ',') : '1,0'} điểm - ${q.level || 'Mức 2'}): ${q.text}
                <div style="margin-top: 4px;">
                  <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
                  <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
                </div>
              </div>
            `;
          }
        }).join('')}
      </div>

      <!-- TAB 2: PHIẾU ĐỀ VIẾT (HỌC SINH) -->
      <div id="examTabContent_writing" class="exam-paper-sheet" style="display: ${currentExamActiveTab === 'writing' ? 'block' : 'none'}; background: #fff; padding: 1.5rem; border: 1px solid #cbd5e1; border-radius: 4px; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.4; color: #000; text-align: justify; ">
        
        <!-- HEADER 2 CỘT -->
        <table class="exam-header-table" style="width: 100%; border: none; margin-bottom: 12px; font-family: 'Times New Roman', serif;">
          <tr>
            <td style="width: 48%; vertical-align: top; text-align: left;">
              <b>${exam.schoolName || "TRƯỜNG TIỂU HỌC ................................."}</b><br>
              Họ và tên: ...................................................<br>
              Lớp: ${exam.grade}.....
            </td>
            <td style="width: 52%; vertical-align: top; text-align: left;">
              <i>Thứ….. ngày … tháng … năm 2026</i><br>
              <b>KIỂM TRA ĐỊNH KỲ ${examTerm}</b><br>
              <b style="font-size: 13.5pt; text-transform: uppercase;" contenteditable="true" title="Bấm để chỉnh sửa tiêu đề nếu muốn">PHIẾU KIỂM TRA VIẾT</b><br>
              <b>MÔN: TIẾNG VIỆT - LỚP ${exam.grade}</b><br>
              <i>Thời gian làm bài: 35 - 40 phút</i>
            </td>
          </tr>
        </table>

        ${grade <= 3 ? `
          <!-- KHUNG ĐÁNH GIÁ 3 Ô PHẦN VIẾT LỚP 1-3 -->
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
            <tr style="background: #fafafa; font-weight: bold; text-align: center;">
              <td style="border: 1px solid #000; width: 18%; padding: 4px;">Chính tả</td>
              <td style="border: 1px solid #000; width: 18%; padding: 4px;">Tập làm văn</td>
              <td style="border: 1px solid #000; width: 18%; padding: 4px;">Tổng điểm Viết</td>
              <td style="border: 1px solid #000; width: 28%; padding: 4px;">Nhận xét của giáo viên</td>
              <td style="border: 1px solid #000; width: 18%; padding: 4px;">Chữ kí PHHS</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; height: 50px; text-align: center;">..... / ${(wr.dictation?.score || 4.0).toFixed(1).replace('.', ',')}đ</td>
              <td style="border: 1px solid #000; text-align: center;">..... / ${(wr.paragraphWriting?.score || 6.0).toFixed(1).replace('.', ',')}đ</td>
              <td style="border: 1px solid #000; text-align: center; font-weight: bold; font-size: 13pt;">..... / 10đ</td>
              <td style="border: 1px solid #000;">&nbsp;</td>
              <td style="border: 1px solid #000;">&nbsp;</td>
            </tr>
          </table>

          <!-- PHẦN 1: CHÍNH TẢ -->
          <div style="font-weight: bold; font-size: 13.5pt; margin: 12px 0 4px 0;">I. CHÍNH TẢ (Nghe - viết) (${(wr.dictation?.score || 4.0).toFixed(1).replace('.', ',')} điểm)</div>
          <p style="margin: 0 0 6px 0; font-style: italic;">
            <b>${wr.dictation?.title || "Bài viết chính tả"}</b> ${wr.dictation?.author ? `(Tác giả: ${wr.dictation.author})` : ''}
          </p>

          <div style="margin-top: 8px;">
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
          </div>

          <!-- PHẦN 2: TẬP LÀM VĂN -->
          <div style="font-weight: bold; font-size: 13.5pt; margin: 18px 0 4px 0;">II. TẬP LÀM VĂN (${(wr.paragraphWriting?.score || 6.0).toFixed(1).replace('.', ',')} điểm)</div>
          <p style="margin: 0 0 6px 0; font-weight: bold;">
            Đề bài: ${wr.paragraphWriting?.prompt || "Viết đoạn văn ngắn theo chủ điểm đã học."}
          </p>
          ${(wr.paragraphWriting?.suggestions && wr.paragraphWriting.suggestions.length > 0) ? `
            <div style="font-style: italic; margin-bottom: 8px; font-size: 11.5pt; color: #475569;">
              Gợi ý:
              ${wr.paragraphWriting.suggestions.map(function(s){ return `<div>• ${s}</div>`; }).join('')}
            </div>
          ` : ''}

          <div style="margin-top: 8px;">
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
          </div>
        ` : `
          <!-- KHUNG ĐÁNH GIÁ LỚP 4-5 -->
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
            <tr style="background: #fafafa; font-weight: bold; text-align: center;">
              <td style="border: 1px solid #000; width: 25%; padding: 6px;">Điểm Tập làm văn</td>
              <td style="border: 1px solid #000; width: 50%; padding: 6px;">Nhận xét của giáo viên</td>
              <td style="border: 1px solid #000; width: 25%; padding: 6px;">Chữ kí của PHHS</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; height: 60px; text-align: center; font-weight: bold; font-size: 14pt;">..... / 10đ</td>
              <td style="border: 1px solid #000;">&nbsp;</td>
              <td style="border: 1px solid #000;">&nbsp;</td>
            </tr>
          </table>

          <div style="font-weight: bold; font-size: 13.5pt; margin: 12px 0 4px 0;">TẬP LÀM VĂN (10,0 điểm)</div>
          <p style="margin: 0 0 8px 0; font-weight: bold; font-size: 13.5pt;">
            Đề bài: ${wr.essay?.prompt || "Em hãy viết một bài văn hoàn chỉnh đúng thể loại đã học."}
          </p>
          ${(wr.essay?.suggestions && wr.essay.suggestions.length > 0) ? `
            <div style="font-style: italic; margin-bottom: 10px; font-size: 12pt; background: #f8fafc; border: 1px dashed #94a3b8; padding: 8px 12px; border-radius: 4px;">
              <b>Gợi ý dàn ý:</b>
              ${wr.essay.suggestions.map(function(s){ return `<div>• ${s}</div>`; }).join('')}
            </div>
          ` : ''}

          <div style="margin-top: 8px;">
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
            <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
          </div>
        `}

      </div>

      <!-- TAB 3: MA TRẬN ĐỀ TIẾNG VIỆT (TT 27) -->
      <div id="examTabContent_matrix" style="display: ${currentExamActiveTab === 'matrix' ? 'block' : 'none'}; background: #fff; padding: 1.5rem; border: 1px solid #cbd5e1; border-radius: 4px; font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.35; color: #000;">
        <div style="text-align: center; font-weight: bold; font-size: 14pt; text-transform: uppercase; margin-bottom: 4px;" contenteditable="true" title="Bấm để chỉnh sửa nếu muốn">
          MA TRẬN ĐỀ KIỂM TRA ĐỊNH KỲ ${termInfo.matrixTitle} MÔN TIẾNG VIỆT LỚP ${exam.grade}
        </div>
        <div style="text-align: center; font-size: 12.5pt; margin-bottom: 14px;">
          Bộ sách: ${exam.bookSeries || 'Kết nối tri thức với cuộc sống (KNTT)'} • Năm học ${exam.schoolYear || '2026 - 2027'}
        </div>

        <div style="font-weight: bold; font-size: 13pt; margin: 10px 0 6px 0; color: #1e3a8a;">I. MA TRẬN 3 TẦNG DÒNG (SỐ CÂU - CÂU SỐ - SỐ ĐIỂM) PHẦN ĐỌC HIỂU (${(exam.readingExam?.comprehensionScore || 6.0).toFixed(1).replace('.', ',')} ĐIỂM)</div>
        ${(exam.threeTierMatrix && typeof AIService !== 'undefined' && AIService.renderThreeTierMatrixTable) ? `
          <div style="margin-bottom: 20px;">
            ${AIService.renderThreeTierMatrixTable(exam.threeTierMatrix, { isWord: false, schoolYear: exam.schoolYear, grade: exam.grade, subjectName: "TIẾNG VIỆT (PHẦN ĐỌC HIỂU)" })}
          </div>
        ` : `
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px; text-align: center;">
          <thead>
            <tr style="background: #f1f5f9; font-weight: bold;">
              <th rowspan="2" style="border: 1px solid #000; width: 35%; padding: 6px; text-align: left;">Mạch kiến thức, kĩ năng</th>
              <th colspan="3" style="border: 1px solid #000; padding: 6px;">Mức độ nhận thức (TT 27)</th>
              <th rowspan="2" style="border: 1px solid #000; width: 15%; padding: 6px;">Tổng điểm</th>
            </tr>
            <tr style="background: #f8fafc; font-weight: bold;">
              <th style="border: 1px solid #000; padding: 4px;">Mức 1</th>
              <th style="border: 1px solid #000; padding: 4px;">Mức 2</th>
              <th style="border: 1px solid #000; padding: 4px;">Mức 3</th>
            </tr>
          </thead>
          <tbody>
            ${(exam.matrix?.readingMatrix || []).map(function(r) {
              return `
                <tr>
                  <td style="border: 1px solid #000; padding: 6px; text-align: left; font-weight: 500;">${r.component}</td>
                  <td style="border: 1px solid #000; padding: 6px;">${r.m1 || '-'}</td>
                  <td style="border: 1px solid #000; padding: 6px;">${r.m2 || '-'}</td>
                  <td style="border: 1px solid #000; padding: 6px;">${r.m3 || '-'}</td>
                  <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">${r.total || '-'}đ</td>
                </tr>
              `;
            }).join('')}
            <tr style="font-weight: bold; background: #fafafa;">
              <td style="border: 1px solid #000; padding: 6px; text-align: left;">Tổng cộng Phần Đọc</td>
              <td style="border: 1px solid #000; padding: 6px;">4,0đ</td>
              <td style="border: 1px solid #000; padding: 6px;">4,0đ</td>
              <td style="border: 1px solid #000; padding: 6px;">2,0đ</td>
              <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">10,0đ</td>
            </tr>
          </tbody>
        </table>
        `}

        <div style="font-weight: bold; font-size: 13pt; margin: 14px 0 6px 0; color: #1e3a8a;">II. MA TRẬN NỘI DUNG VÀ MỨC ĐỘ NHẬN THỨC PHẦN VIẾT (10 ĐIỂM)</div>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px; text-align: center;">
          <thead>
            <tr style="background: #f1f5f9; font-weight: bold;">
              <th style="border: 1px solid #000; width: 45%; padding: 6px; text-align: left;">Nội dung kiểm tra</th>
              <th style="border: 1px solid #000; width: 30%; padding: 6px;">Mức độ đáp ứng</th>
              <th style="border: 1px solid #000; width: 25%; padding: 6px;">Điểm số</th>
            </tr>
          </thead>
          <tbody>
            ${(exam.matrix?.writingMatrix || []).map(function(w) {
              return `
                <tr>
                  <td style="border: 1px solid #000; padding: 6px; text-align: left; font-weight: 500;">${w.component}</td>
                  <td style="border: 1px solid #000; padding: 6px;">${w.level}</td>
                  <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">${w.score} điểm</td>
                </tr>
              `;
            }).join('')}
            <tr style="font-weight: bold; background: #fafafa;">
              <td style="border: 1px solid #000; padding: 6px; text-align: left;">Tổng cộng Phần Viết</td>
              <td style="border: 1px solid #000; padding: 6px;">Chuẩn năng lực TT 27</td>
              <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">10,0 điểm</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- TAB 4: HƯỚNG DẪN CHẤM & ĐÁP ÁN TIẾNG VIỆT -->
      <div id="examTabContent_rubric" style="display: ${currentExamActiveTab === 'rubric' ? 'block' : 'none'}; background: #fff; padding: 1.5rem; border: 1px solid #cbd5e1; border-radius: 4px; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.4; color: #000; text-align: justify; ">
        <div style="text-align: center; font-weight: bold; font-size: 14pt; text-transform: uppercase; margin-bottom: 4px;">
          HƯỚNG DẪN CHẤM VÀ ĐÁP ÁN MÔN TIẾNG VIỆT LỚP ${exam.grade}
        </div>
        <div style="text-align: center; font-size: 12.5pt; margin-bottom: 14px;">
          Chuẩn đánh giá học sinh Tiểu học theo Thông tư 27/2020/TT-BGDĐT
        </div>

        <!-- 1. HƯỚNG DẪN CHẤM ĐỌC THÀNH TIẾNG -->
        <div style="font-weight: bold; font-size: 13.5pt; margin: 10px 0 4px 0; color: #1e3a8a;">A. HƯỚNG DẪN CHẤM ĐỌC THÀNH TIẾNG (${oralScoreStr} ĐIỂM)</div>
        <p style="margin: 0 0 6px 0; font-size: 11.5pt; white-space: pre-line;">
          ${exam.teacherGuide?.oralGuide?.criteria || "- Đọc đúng, rõ ràng, phát âm chuẩn.\n- Trả lời đúng câu hỏi đọc hiểu được 1,0 điểm."}
        </p>

        <div style="font-weight: bold; margin: 8px 0 4px 0; color: #1e3a8a;">
          DANH SÁCH TOÀN BỘ CÂU HỎI VÀ GỢI Ý TRẢ LỜI 5 PHIẾU ĐỌC THÀNH TIẾNG:
        </div>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 14px;">
          <thead>
            <tr style="background: #f1f5f9; font-weight: bold;">
              <th style="border: 1px solid #000; width: 25%; padding: 6px; text-align: center;">Phiếu / Bài đọc</th>
              <th style="border: 1px solid #000; width: 35%; padding: 6px; text-align: center;">Hệ thống câu hỏi trong SGK</th>
              <th style="border: 1px solid #000; width: 40%; padding: 6px; text-align: center;">Gợi ý câu trả lời chuẩn xác</th>
            </tr>
          </thead>
          <tbody>
            ${(function() {
              var list = (rd.oralItems && rd.oralItems.length > 0) ? rd.oralItems : (exam.teacherGuide?.oralGuide?.qaList || []);
              return list.map(function(item, idx) {
                var title = item.title || item.lessonTitle || `Bài đọc ${idx + 1}`;
                var volPage = [];
                if (item.bookVolume) volPage.push(item.bookVolume);
                if (item.page) volPage.push(item.page.includes('Trang') ? item.page : `Trang ${item.page}`);
                var source = volPage.join(' - ');

                var qArr = [];
                if (Array.isArray(item.questions) && item.questions.length > 0) {
                  qArr = item.questions;
                } else if (item.question) {
                  qArr = item.question.split(/\n+/).map(s => s.trim()).filter(Boolean);
                }

                var aArr = [];
                if (Array.isArray(item.answers) && item.answers.length > 0) {
                  aArr = item.answers;
                } else if (item.answer) {
                  aArr = item.answer.split(/\n+/).map(s => s.trim()).filter(Boolean);
                }

                var qHtml = qArr.length > 0 ? qArr.map(function(q, qI) {
                  var pfx = q.trim().match(/^(Câu\s*\d+|\d+[\.\:])/i) ? '' : `Câu ${qI + 1}: `;
                  return `<div style="margin-bottom: 3px;"><b>${pfx}</b>${q}</div>`;
                }).join('') : (item.question || 'Nêu nội dung bài đọc.');

                var aHtml = aArr.length > 0 ? aArr.map(function(a, aI) {
                  var pfx = a.trim().match(/^(Câu\s*\d+|\d+[\.\:]|Trả lời\s*\d+)/i) ? '' : `TL ${aI + 1}: `;
                  return `<div style="margin-bottom: 3px;"><b>${pfx}</b>${a}</div>`;
                }).join('') : `<b>${item.answer || 'Học sinh trả lời đúng trọng tâm nội dung bài đọc.'}</b>`;

                return `
                  <tr>
                    <td style="border: 1px solid #000; padding: 6px; font-weight: bold; vertical-align: top;">
                      Phiếu ${idx + 1}: ${title}<br>
                      <span style="font-size: 10pt; font-weight: normal; color: #555;">${source}</span>
                    </td>
                    <td style="border: 1px solid #000; padding: 6px; vertical-align: top; font-size: 11pt;">${qHtml}</td>
                    <td style="border: 1px solid #000; padding: 6px; vertical-align: top; color: #15803d; font-size: 11pt;">${aHtml}</td>
                  </tr>
                `;
              }).join('');
            })()}
          </tbody>
        </table>

        <!-- 2. HƯỚNG DẪN CHẤM ĐỌC HIỂU -->
        <div style="font-weight: bold; font-size: 13.5pt; margin: 14px 0 4px 0; color: #1e3a8a;">B. ĐÁP ÁN ĐỌC HIỂU VÀ KIẾN THỨC TIẾNG VIỆT (${compScoreStr} ĐIỂM)</div>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
          <thead>
            <tr style="background: #f1f5f9; font-weight: bold;">
              <th style="border: 1px solid #000; width: 12%; padding: 6px; text-align: center;">Câu</th>
              <th style="border: 1px solid #000; width: 25%; padding: 6px; text-align: center;">Đáp án / Lời giải</th>
              <th style="border: 1px solid #000; width: 63%; padding: 6px; text-align: center;">Hướng dẫn chấm chi tiết</th>
            </tr>
          </thead>
          <tbody>
            ${(exam.teacherGuide?.comprehensionAnswers || []).map(function(ans) {
              return `
                <tr>
                  <td style="border: 1px solid #000; padding: 6px; font-weight: bold; text-align: center;">Câu ${ans.num}</td>
                  <td style="border: 1px solid #000; padding: 6px; font-weight: bold; color: #b91c1c; text-align: center; font-size: 12pt;">${ans.ans}</td>
                  <td style="border: 1px solid #000; padding: 6px; text-align: left; vertical-align: top;">${ans.explain}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>

        <!-- 3. HƯỚNG DẪN CHẤM PHẦN VIẾT -->
        <div style="font-weight: bold; font-size: 13.5pt; margin: 14px 0 4px 0; color: #1e3a8a;">C. HƯỚNG DẪN CHẤM PHẦN VIẾT (10 ĐIỂM)</div>
        ${grade <= 3 ? `
          <div style="font-weight: bold; margin-bottom: 4px;">1. Chính tả (${(wr.dictation?.score || 4.0).toFixed(1).replace('.', ',')} điểm):</div>
          <p style="margin: 0 0 8px 0; font-size: 11.5pt; white-space: pre-line;">
            ${exam.teacherGuide?.writingGuide?.dictationCriteria || "- Viết đúng mẫu chữ, độ đều nét, trình bày sạch: 1,0đ\n- Mỗi lỗi chính tả (âm đầu, vần, thanh, hoa): trừ 0,5đ"}
          </p>

          <div style="font-weight: bold; margin: 8px 0 4px 0;">2. Tập làm văn - Viết đoạn văn (${(wr.paragraphWriting?.score || 6.0).toFixed(1).replace('.', ',')} điểm):</div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 14px;">
            <thead>
              <tr style="background: #f1f5f9; font-weight: bold;">
                <th style="border: 1px solid #000; width: 30%; padding: 6px; text-align: center;">Tiêu chí đánh giá</th>
                <th style="border: 1px solid #000; width: 18%; padding: 6px; text-align: center;">Điểm</th>
                <th style="border: 1px solid #000; width: 52%; padding: 6px; text-align: center;">Yêu cầu cần đạt</th>
              </tr>
            </thead>
            <tbody>
              ${(wr.paragraphWriting?.rubric || []).map(function(rub) {
                return `
                  <tr>
                    <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">${rub.criteria}</td>
                    <td style="border: 1px solid #000; padding: 6px; text-align: center; font-weight: bold;">${rub.score}</td>
                    <td style="border: 1px solid #000; padding: 6px;">${rub.detail}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        ` : `
          <div style="font-weight: bold; margin-bottom: 6px;">Barem chấm điểm Bài văn hoàn chỉnh (10,0 điểm):</div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 14px;">
            <thead>
              <tr style="background: #f1f5f9; font-weight: bold;">
                <th style="border: 1px solid #000; width: 25%; padding: 6px; text-align: center;">Tiêu chí chấm</th>
                <th style="border: 1px solid #000; width: 15%; padding: 6px; text-align: center;">Điểm</th>
                <th style="border: 1px solid #000; width: 60%; padding: 6px; text-align: center;">Yêu cầu chi tiết</th>
              </tr>
            </thead>
            <tbody>
              ${(wr.essay?.rubric || []).map(function(rub) {
                return `
                  <tr>
                    <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">${rub.criteria}</td>
                    <td style="border: 1px solid #000; padding: 6px; text-align: center; font-weight: bold;">${rub.score}</td>
                    <td style="border: 1px solid #000; padding: 6px;">${rub.detail}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        `}
      </div>

      <!-- TAB 5: ĐẶC TẢ SIÊU DỮ LIỆU & HƯỚNG DẪN MÃ HÓA CHUẨN ĐÔNG NAM Á (SEA-PLM) -->
      <div id="examTabContent_seaplm" style="display: ${currentExamActiveTab === 'seaplm' ? 'block' : 'none'}; background: #fff; padding: 1.5rem; border: 1px solid #cbd5e1; border-radius: 4px; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.4; color: #000; text-align: justify; ">
        
        <!-- BANNER SEA-PLM -->
        <div style="background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); color: #fff; padding: 1rem 1.25rem; border-radius: 6px; margin-bottom: 1.25rem; box-shadow: 0 4px 12px rgba(2,132,199,0.15);">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
            <div>
              <div style="font-size: 0.82rem; letter-spacing: 0.05em; text-transform: uppercase; color: #bae6fd; font-weight: 700;">
                <i class="fa-solid fa-earth-asia"></i> KHUNG ĐÁNH GIÁ NĂNG LỰC HỌC SINH TIỂU HỌC KHU VỰC ĐÔNG NAM Á (SEA-PLM)
              </div>
              <h3 style="margin: 0.25rem 0 0 0; font-size: 1.2rem; font-weight: 800; color: #ffffff;">
                BẢNG ĐẶC TẢ SIÊU DỮ LIỆU CÂU HỎI & HƯỚNG DẪN MÃ HÓA (CODING GUIDE)
              </h3>
            </div>
            <div style="background: rgba(255,255,255,0.18); padding: 0.4rem 0.8rem; border-radius: 20px; font-size: 0.85rem; font-weight: 700; border: 1px solid rgba(255,255,255,0.3);">
              <i class="fa-solid fa-certificate" style="color: #fef08a;"></i> Chuẩn Bộ Giáo dục và Đào tạo
            </div>
          </div>
          <p style="margin: 0.6rem 0 0 0; font-size: 0.85rem; color: #f0f9ff; line-height: 1.4;">
            Đề kiểm tra tuân thủ nghiêm ngặt <b>6 Nguyên tắc Biên soạn SEA-PLM</b>: Đặt trong 4 bối cảnh chân thực (Cá nhân, Xung quanh, Rộng hơn, Môn học); Trọng tâm đo lường đơn nhất; Trắc nghiệm 4 lựa chọn phản ánh lỗi tư duy học sinh (Misconceptions); Tự luận có hướng dẫn mã hóa chuẩn (Mã 2, Mã 1, Mã 0, Mã 9) kèm bài làm mẫu thực tế.
          </p>
        </div>

        <!-- PHẦN 1: BẢNG MÔ TẢ SIÊU DỮ LIỆU CÂU HỎI (ITEM METADATA TABLE) -->
        <div style="font-weight: bold; font-size: 13.5pt; margin-bottom: 8px; color: #0369a1; display: flex; align-items: center; gap: 0.4rem;">
          <i class="fa-solid fa-table-list"></i> 1. BẢNG MÔ TẢ SIÊU DỮ LIỆU CÂU HỎI (ITEM METADATA TABLE)
        </div>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 22px; font-size: 11pt;">
          <thead>
            <tr style="background: #e0f2fe; font-weight: bold; text-align: center; color: #0369a1;">
              <th style="border: 1px solid #000; width: 14%; padding: 6px;">Mã câu hỏi</th>
              <th style="border: 1px solid #000; width: 8%; padding: 6px;">Thứ tự</th>
              <th style="border: 1px solid #000; width: 18%; padding: 6px;">Bối cảnh (Context)</th>
              <th style="border: 1px solid #000; width: 18%; padding: 6px;">Miền nội dung</th>
              <th style="border: 1px solid #000; width: 18%; padding: 6px;">Quá trình nhận thức</th>
              <th style="border: 1px solid #000; width: 10%; padding: 6px;">Độ khó</th>
              <th style="border: 1px solid #000; width: 8%; padding: 6px;">Điểm</th>
              <th style="border: 1px solid #000; width: 6%; padding: 6px;">Mã tối đa</th>
            </tr>
          </thead>
          <tbody>
            ${(function() {
              var metaList = exam.seaplmMetadataTable ? JSON.parse(JSON.stringify(exam.seaplmMetadataTable)) : [];
              if (!metaList || metaList.length === 0) {
                var order = 1;
                (exam.readingExam?.questions || []).forEach(function(q) {
                  metaList.push({
                    itemCode: q.itemCode || `TV${exam.grade}_RD_${String(q.num).padStart(2, '0')}`,
                    order: order++,
                    context: q.metadata?.context || "Môi trường xung quanh (Local community)",
                    contentDomain: q.metadata?.contentDomain || (q.category === 'lang' ? 'Luyện từ và câu' : 'Đọc hiểu văn bản'),
                    cognitiveProcess: q.metadata?.cognitiveProcess || (q.level === 'Mức 1' ? 'Xác định thông tin (Locate)' : q.level === 'Mức 2' ? 'Kết nối & Suy luận (Interpret)' : 'Phản hồi & Đánh giá (Reflect)'),
                    difficulty: q.metadata?.difficulty || (q.level === 'Mức 1' ? 'Dễ' : q.level === 'Mức 2' ? 'Trung bình' : 'Khó'),
                    itemType: q.type === 'mcq' ? "Trắc nghiệm (MCQ)" : "Tự luận ngắn",
                    score: q.score || 0.5,
                    maxCode: q.type === 'mcq' ? "Mã 1" : "Mã 2"
                  });
                });
                if (exam.writingExam?.paragraphWriting) {
                  metaList.push({
                    itemCode: `TV${exam.grade}_WR_01`,
                    order: order++,
                    context: "Cá nhân (Personal)",
                    contentDomain: "Kỹ năng Viết (Tập làm văn)",
                    cognitiveProcess: "Vận dụng thực hành (Writing)",
                    difficulty: "Trung bình",
                    itemType: "Tự luận viết đoạn",
                    score: exam.writingExam.paragraphWriting.score || 6.0,
                    maxCode: "Mã 2"
                  });
                } else if (exam.writingExam?.essay) {
                  metaList.push({
                    itemCode: `TV${exam.grade}_WR_01`,
                    order: order++,
                    context: "Môi trường xung quanh (Local community)",
                    contentDomain: "Kỹ năng Viết (Tập làm văn)",
                    cognitiveProcess: "Vận dụng thực hành (Writing)",
                    difficulty: "Khó",
                    itemType: "Tự luận bài văn hoàn chỉnh",
                    score: 10.0,
                    maxCode: "Mã 2"
                  });
                }
              }
              return metaList.map(function(item) {
                return `
                  <tr>
                    <td style="border: 1px solid #000; padding: 6px; font-weight: bold; text-align: center; color: #0369a1;">${item.itemCode || '-'}</td>
                    <td style="border: 1px solid #000; padding: 6px; text-align: center;">Câu ${item.order || '-'}</td>
                    <td style="border: 1px solid #000; padding: 6px;">${item.context || '-'}</td>
                    <td style="border: 1px solid #000; padding: 6px;">${item.contentDomain || '-'}</td>
                    <td style="border: 1px solid #000; padding: 6px;">${item.cognitiveProcess || '-'}</td>
                    <td style="border: 1px solid #000; padding: 6px; text-align: center;">${item.difficulty || '-'}</td>
                    <td style="border: 1px solid #000; padding: 6px; text-align: center; font-weight: bold;">${item.score ? item.score.toString().replace('.', ',') : '-'}</td>
                    <td style="border: 1px solid #000; padding: 6px; text-align: center; font-weight: bold; color: #16a34a;">${item.maxCode || 'Mã 1'}</td>
                  </tr>
                `;
              }).join('');
            })()}
          </tbody>
        </table>

        <!-- PHẦN 2: PHÂN TÍCH CƠ SỞ PHƯƠNG ÁN ĐÚNG & PHƯƠNG ÁN NHIỄU -->
        <div style="font-weight: bold; font-size: 13.5pt; margin-bottom: 8px; color: #0369a1; display: flex; align-items: center; gap: 0.4rem;">
          <i class="fa-solid fa-brain"></i> 2. PHÂN TÍCH CƠ SỞ PHƯƠNG ÁN ĐÚNG & PHƯƠNG ÁN NHIỄU (DISTRACTOR RATIONALE)
        </div>
        <p style="margin: 0 0 10px 0; font-size: 11pt; color: #475569; font-style: italic;">
          Phân tích nguyên nhân học sinh chọn nhầm các phương án nhiễu dựa trên lỗi tư duy, nhầm lẫn chi tiết đọc hiểu hoặc hiểu nhầm ngữ nghĩa từ vựng:
        </p>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 22px; font-size: 11.5pt;">
          <thead>
            <tr style="background: #e0f2fe; font-weight: bold; text-align: center; color: #0369a1;">
              <th style="border: 1px solid #000; width: 10%; padding: 6px;">Câu</th>
              <th style="border: 1px solid #000; width: 8%; padding: 6px;">Đáp án</th>
              <th style="border: 1px solid #000; width: 38%; padding: 6px;">Cơ sở phương án đúng</th>
              <th style="border: 1px solid #000; width: 44%; padding: 6px;">Phân tích các phương án nhiễu & Lỗi sai của học sinh</th>
            </tr>
          </thead>
          <tbody>
            ${(exam.readingExam?.questions || []).filter(function(q) { return q.type === 'mcq' || (q.options && q.options.length > 0); }).map(function(q) {
              var dr = q.distractorRationale || {};
              var correctText = dr.correct || q.explain || `Phương án ${q.ans} là chính xác.`;
              var distText = [];
              ['A', 'B', 'C', 'D'].forEach(function(opt) {
                if (opt !== q.ans) {
                  var reason = dr['distractor' + opt] || dr[opt];
                  if (reason) {
                    distText.push(`<b>Lựa chọn ${opt}:</b> ${reason}`);
                  }
                }
              });
              if (distText.length === 0) {
                distText.push(`<b>Các lựa chọn còn lại:</b> Học sinh chọn nhầm do đọc lướt chi tiết hoặc nhầm khái niệm ngữ pháp.`);
              }
              return `
                <tr>
                  <td style="border: 1px solid #000; padding: 8px; text-align: center; font-weight: bold; vertical-align: top;">Câu ${q.num}</td>
                  <td style="border: 1px solid #000; padding: 8px; text-align: center; font-weight: bold; color: #b91c1c; font-size: 13pt; vertical-align: top;">${q.ans}</td>
                  <td style="border: 1px solid #000; padding: 8px; vertical-align: top; color: #15803d; line-height: 1.45;">${correctText}</td>
                  <td style="border: 1px solid #000; padding: 8px; vertical-align: top; color: #334155; line-height: 1.45;">${distText.join('<br>')}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>

        <!-- PHẦN 3: HƯỚNG DẪN MÃ HÓA CHI TIẾT (CODING GUIDE) THEO CHUẨN SEA-PLM -->
        <div style="font-weight: bold; font-size: 13.5pt; margin-bottom: 8px; color: #0369a1; display: flex; align-items: center; gap: 0.4rem;">
          <i class="fa-solid fa-list-check"></i> 3. HƯỚNG DẪN MÃ HÓA CHI TIẾT (CODING GUIDE) CHO CÂU TỰ LUẬN & TẬP LÀM VĂN
        </div>

        <!-- Câu tự luận đọc hiểu -->
        ${(exam.readingExam?.questions || []).filter(function(q) { return q.type === 'constructed' || q.codingGuide; }).map(function(q) {
          var cg = q.codingGuide || {
            maxCode: "Mã 2",
            codes: [
              { code: "Mã 2", description: "Mức tối đa: Trả lời chính xác, trọn vẹn ý và câu văn gãy gọn.", sampleResponse: q.explain || "Học sinh trả lời đầy đủ ý." },
              { code: "Mã 1", description: "Mức chưa tối đa: Trả lời đúng ý chính nhưng diễn đạt chưa trọn vẹn hoặc còn lỗi ngữ pháp.", sampleResponse: "Học sinh trả lời được một phần ý." },
              { code: "Mã 0", description: "Mức không đạt: Trả lời sai hoàn toàn hoặc không liên quan.", sampleResponse: "Trả lời lạc đề hoặc vô nghĩa." },
              { code: "Mã 9", description: "Bỏ trống không làm bài.", sampleResponse: "[Học sinh để giấy trắng]" }
            ]
          };
          return `
            <div style="margin-bottom: 16px;">
              <div style="font-weight: bold; color: #1e3a8a; margin-bottom: 6px; font-size: 12.5pt;">
                Câu ${q.num} (Tự luận Đọc hiểu): ${q.text}
              </div>
              <table style="width: 100%; border-collapse: collapse; font-size: 11.5pt;">
                <thead>
                  <tr style="background: #f8fafc; font-weight: bold;">
                    <th style="border: 1px solid #000; width: 12%; padding: 6px; text-align: center;">Mã hóa</th>
                    <th style="border: 1px solid #000; width: 48%; padding: 6px; text-align: center;">Tiêu chí đánh giá</th>
                    <th style="border: 1px solid #000; width: 40%; padding: 6px; text-align: center;">Ví dụ bài làm mẫu của học sinh (Sample Response)</th>
                  </tr>
                </thead>
                <tbody>
                  ${(cg.codes || []).map(function(c) {
                    var badgeColor = c.code === 'Mã 2' ? '#15803d' : c.code === 'Mã 1' ? '#0284c7' : c.code === 'Mã 0' ? '#b91c1c' : '#64748b';
                    return `
                      <tr>
                        <td style="border: 1px solid #000; padding: 6px; text-align: center; vertical-align: top; font-weight: bold; color: ${badgeColor};">
                          ${c.code}
                        </td>
                        <td style="border: 1px solid #000; padding: 6px; vertical-align: top;">${c.description}</td>
                        <td style="border: 1px solid #000; padding: 6px; vertical-align: top; font-style: italic; color: #334155;">${c.sampleResponse || '-'}</td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          `;
        }).join('')}

        <!-- Phần Tập làm văn -->
        ${(function() {
          var wrItem = exam.writingExam?.paragraphWriting || exam.writingExam?.essay;
          if (!wrItem) return '';
          var cg = wrItem.codingGuide || {
            maxCode: "Mã 2",
            codes: [
              { code: "Mã 2", description: "Mức tối đa: Bài viết đúng thể loại, đủ bố cục, diễn đạt sinh động, giàu cảm xúc, đúng chính tả ngữ pháp.", sampleResponse: "Học sinh viết thành văn mạch lạc, đúng yêu cầu đề bài." },
              { code: "Mã 1", description: "Mức chưa tối đa: Bài viết đúng thể loại nhưng miêu tả/kể sơ sài hoặc mắc một số lỗi ngữ pháp, chính tả.", sampleResponse: "Học sinh viết được bài nhưng ý còn đơn giản, câu chưa mượt mà." },
              { code: "Mã 0", description: "Mức không đạt: Lạc đề hoàn toàn hoặc chỉ viết được vài câu rời rạc.", sampleResponse: "Chỉ viết 1-2 câu không liên quan hoặc lạc sang chủ đề khác." },
              { code: "Mã 9", description: "Bỏ trống không làm bài.", sampleResponse: "[Học sinh để giấy trắng]" }
            ]
          };
          return `
            <div style="margin-bottom: 16px;">
              <div style="font-weight: bold; color: #1e3a8a; margin-bottom: 6px; font-size: 12.5pt;">
                Phần Tập làm văn (${exam.grade <= 3 ? 'Viết đoạn văn' : 'Bài văn hoàn chỉnh'}): ${wrItem.prompt || 'Yêu cầu đề bài'}
              </div>
              <table style="width: 100%; border-collapse: collapse; font-size: 11.5pt;">
                <thead>
                  <tr style="background: #f8fafc; font-weight: bold;">
                    <th style="border: 1px solid #000; width: 12%; padding: 6px; text-align: center;">Mã hóa</th>
                    <th style="border: 1px solid #000; width: 48%; padding: 6px; text-align: center;">Tiêu chí đánh giá</th>
                    <th style="border: 1px solid #000; width: 40%; padding: 6px; text-align: center;">Ví dụ bài làm mẫu của học sinh (Sample Response)</th>
                  </tr>
                </thead>
                <tbody>
                  ${(cg.codes || []).map(function(c) {
                    var badgeColor = c.code === 'Mã 2' ? '#15803d' : c.code === 'Mã 1' ? '#0284c7' : c.code === 'Mã 0' ? '#b91c1c' : '#64748b';
                    return `
                      <tr>
                        <td style="border: 1px solid #000; padding: 6px; text-align: center; vertical-align: top; font-weight: bold; color: ${badgeColor};">
                          ${c.code}
                        </td>
                        <td style="border: 1px solid #000; padding: 6px; vertical-align: top;">${c.description}</td>
                        <td style="border: 1px solid #000; padding: 6px; vertical-align: top; font-style: italic; color: #334155;">${c.sampleResponse || '-'}</td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          `;
        })()}

      </div>
    `;
    return;
  }

  // =========================================================================
  // GIAO DIỆN HIỂN THỊ 3 TABS CHO CÁC MÔN CÒN LẠI (TOÁN, KHOA HỌC, XÃ HỘI...)
  // =========================================================================
  var mcqScoreStr = exam.mcqTotalScore ? exam.mcqTotalScore.toString().replace('.', ',') : "7,0";
  var essayScoreStr = exam.essayTotalScore ? exam.essayTotalScore.toString().replace('.', ',') : "3,0";
  var m = exam.matrix || {};
  var s = m.summary || {};
  var bookSeriesName = exam.bookSeries || (exam.seriesName || "Kết nối tri thức với cuộc sống");

  if (!["exam", "matrix", "answers", "seaplm"].includes(currentExamActiveTab)) {
    currentExamActiveTab = "exam";
  }

  container.innerHTML = `
    <!-- THANH CÔNG CỤ ĐIỀU HƯỚNG VÀ XUẤT BẢN -->
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.65rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.85rem;">
      
      <!-- 4 TABS CHUYỂN ĐỔI -->
      <div style="display: flex; gap: 0.35rem; background: #f1f5f9; padding: 0.25rem; border-radius: var(--radius-sm); align-items: center; flex-wrap: wrap;">
        <button class="btn btn-sm ${currentExamActiveTab === 'exam' ? 'btn-primary' : 'btn-ghost'}" style="${currentExamActiveTab === 'exam' ? 'background: #7c3aed;' : ''}" onclick="switchExamTab('exam')">
          <i class="fa-solid fa-file-lines"></i> 1. Phiếu Đề Thi
        </button>
        <button class="btn btn-sm ${currentExamActiveTab === 'matrix' ? 'btn-primary' : 'btn-ghost'}" style="${currentExamActiveTab === 'matrix' ? 'background: #7c3aed;' : ''}" onclick="switchExamTab('matrix')">
          <i class="fa-solid fa-table-cells"></i> 2. Ma Trận Đề (TT 27)
        </button>
        <button class="btn btn-sm ${currentExamActiveTab === 'answers' ? 'btn-primary' : 'btn-ghost'}" style="${currentExamActiveTab === 'answers' ? 'background: #7c3aed;' : ''}" onclick="switchExamTab('answers')">
          <i class="fa-solid fa-square-check"></i> 3. Hướng Dẫn Chấm
        </button>
        <button class="btn btn-sm ${currentExamActiveTab === 'seaplm' ? 'btn-primary' : 'btn-ghost'}" style="${currentExamActiveTab === 'seaplm' ? 'background: #0284c7;' : ''}" onclick="switchExamTab('seaplm')">
          <i class="fa-solid fa-graduation-cap"></i> 4. Đặc Tả & Mã Hóa SEA-PLM
        </button>
      </div>

      <!-- BADGE NGUỒN GỐC & NÚT THAO TÁC XUẤT FILE & IN -->
      <div style="display: flex; gap: 0.45rem; align-items: center;">
        ${sourceBadgeHtml}
        <button class="btn btn-sm btn-primary" style="background: #16a34a; border-color: #16a34a;" onclick="AIService.exportToWord(currentExamData)">
          <i class="fa-solid fa-file-word"></i> Xuất File Word (.docx)
        </button>
        <button class="btn btn-sm btn-outline" onclick="window.print()">
          <i class="fa-solid fa-print"></i> In Đề
        </button>
      </div>
    </div>

    <!-- NỘI DUNG TAB 1: PHIẾU ĐỀ THI HỌC SINH -->
    <div id="examTabContent_exam" class="exam-paper-sheet" style="display: ${currentExamActiveTab === 'exam' ? 'block' : 'none'}; background: #fff; padding: 1.5rem; border: 1px solid #cbd5e1; border-radius: 4px; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.4; color: #000; text-align: justify; ">
      
      <!-- HEADER 2 CỘT -->
      <table class="exam-header-table" style="width: 100%; border: none; margin-bottom: 12px; font-family: 'Times New Roman', serif;">
        <tr>
          <td style="width: 48%; vertical-align: top; text-align: left;">
            <b>${exam.schoolName || "TRƯỜNG TIỂU HỌC ................................."}</b><br>
            Họ và tên: ...................................................<br>
            Lớp: ${exam.grade}.....
          </td>
          <td style="width: 52%; vertical-align: top; text-align: left;">
            <i>Thứ….. ngày … tháng … năm 2026</i><br>
            <b style="font-size: 13.5pt; text-transform: uppercase;" contenteditable="true" title="Bấm để chỉnh sửa tiêu đề nếu muốn">${examHeaderTitle}</b><br>
            <b>MÔN: ${exam.subjectName.toUpperCase()} - LỚP ${exam.grade}</b><br>
            <i>Thời gian làm bài: ${exam.duration}</i>
          </td>
        </tr>
      </table>

      <!-- KHUNG ĐÁNH GIÁ 3 Ô -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
        <tr>
          <td style="border: 1px solid #000; width: 25%; text-align: center; height: 75px; vertical-align: top; padding: 6px;">
            <b>Điểm</b>
          </td>
          <td style="border: 1px solid #000; width: 50%; text-align: center; vertical-align: top; padding: 6px;">
            <b>Nhận xét của giáo viên</b>
          </td>
          <td style="border: 1px solid #000; width: 25%; text-align: center; vertical-align: top; padding: 6px;">
            <b>Chữ kí của PHHS</b>
          </td>
        </tr>
      </table>

      <!-- PHẦN I: TRẮC NGHIỆM -->
      <div style="font-weight: bold; font-size: 13.5pt; margin: 12px 0 4px 0;">I. PHẦN TRẮC NGHIỆM (${mcqScoreStr} điểm)</div>
      <p style="margin: 0 0 10px 0; font-style: italic;">
        ${(exam.hasDiverseQuestions || (exam.multipleChoice || []).some(function(q){ return q.type && q.type !== 'mcq'; })) ? 'Khoanh vào chữ cái trước câu trả lời đúng hoặc thực hiện theo yêu cầu của từng câu hỏi:' : 'Khoanh vào chữ cái đặt trước câu trả lời đúng:'}
      </p>

      ${(exam.multipleChoice || []).map(function(q) {
        if (typeof AIService !== 'undefined' && AIService.renderQuestionItem) {
          return AIService.renderQuestionItem(q, false);
        }
        return `
          <div style="margin-bottom: 10px;" contenteditable="true">
            <b>Câu ${q.num}</b> (${q.score ? q.score.toString().replace('.', ',') : '0,5'} điểm - ${q.level || 'Mức 1'}): ${q.text}
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.35rem; padding-left: 1.25rem; margin-top: 4px;">
              ${(q.options || []).map(function(opt) { return `<div>${opt}</div>`; }).join('')}
            </div>
          </div>
        `;
      }).join('')}

      <!-- PHẦN II: TỰ LUẬN -->
      ${(exam.essaySection && exam.essaySection.length > 0) ? `
        <div style="font-weight: bold; font-size: 13.5pt; margin: 18px 0 6px 0;">II. PHẦN TỰ LUẬN (${essayScoreStr} điểm)</div>
        ${exam.essaySection.map(function(e) {
          return `
            <div style="margin-top: 10px; margin-bottom: 14px;" contenteditable="true">
              <b>${e.title || `Câu ${e.num} (${e.score ? e.score.toString().replace('.', ',') : ''} điểm):`}</b> ${e.text}
              <div style="margin-top: 6px;">
                <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
                <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
                <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
                <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
                <div style="border-bottom: 1px dotted #777; height: 24px;"></div>
              </div>
            </div>
          `;
        }).join('')}
      ` : ''}
    </div>

    <!-- NỘI DUNG TAB 2: MA TRẬN ĐỀ THI THÔNG TƯ 27 (3 TẦNG DÒNG: SỐ CÂU - CÂU SỐ - SỐ ĐIỂM) -->
    <div id="examTabContent_matrix" style="display: ${currentExamActiveTab === 'matrix' ? 'block' : 'none'}; background: #fff; padding: 1.5rem; border: 1px solid #cbd5e1; border-radius: 4px; font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.35; color: #000;">
      
      <div style="text-align: center; font-weight: bold; font-size: 14pt; text-transform: uppercase; margin-bottom: 4px;" contenteditable="true" title="Bấm để chỉnh sửa nếu muốn">
        MA TRẬN ${examHeaderTitle} MÔN ${exam.subjectName.toUpperCase()} LỚP ${exam.grade}
      </div>
      <div style="text-align: center; font-size: 12.5pt; margin-bottom: 14px;">
        Bộ sách: ${bookSeriesName.toUpperCase()} • Năm học ${exam.schoolYear}
      </div>

      ${(exam.threeTierMatrix && typeof AIService !== 'undefined' && AIService.renderThreeTierMatrixTable) ? `
        ${AIService.renderThreeTierMatrixTable(exam.threeTierMatrix, { isWord: false, schoolYear: exam.schoolYear, grade: exam.grade, subjectName: exam.subjectName })}
      ` : `
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; text-align: center;">
        <thead>
          <tr style="background: #f1f5f9; font-weight: bold;">
            <th rowspan="3" style="border: 1px solid #000; width: 32%; padding: 6px; text-align: left;">Chủ đề / Bài học</th>
            <th colspan="6" style="border: 1px solid #000; padding: 6px;">Mức độ nhận thức</th>
            <th colspan="2" rowspan="2" style="border: 1px solid #000; padding: 6px;">Tổng số câu</th>
            <th rowspan="3" style="border: 1px solid #000; width: 10%; padding: 6px;">Điểm số</th>
          </tr>
          <tr style="background: #f8fafc; font-weight: bold;">
            <th colspan="2" style="border: 1px solid #000; padding: 4px;">Mức 1<br>(Nhận biết)</th>
            <th colspan="2" style="border: 1px solid #000; padding: 4px;">Mức 2<br>(Kết nối)</th>
            <th colspan="2" style="border: 1px solid #000; padding: 4px;">Mức 3<br>(Vận dụng)</th>
          </tr>
          <tr style="background: #f8fafc; font-weight: bold;">
            <th style="border: 1px solid #000; padding: 4px;">TN</th>
            <th style="border: 1px solid #000; padding: 4px;">TL</th>
            <th style="border: 1px solid #000; padding: 4px;">TN</th>
            <th style="border: 1px solid #000; padding: 4px;">TL</th>
            <th style="border: 1px solid #000; padding: 4px;">TN</th>
            <th style="border: 1px solid #000; padding: 4px;">TL</th>
            <th style="border: 1px solid #000; padding: 4px;">TN</th>
            <th style="border: 1px solid #000; padding: 4px;">TL</th>
          </tr>
        </thead>
        <tbody>
          ${(m.topics || []).map(function(t) {
            return `
              <tr>
                <td style="border: 1px solid #000; padding: 6px; text-align: left; font-weight: 500;">${t.topic}</td>
                <td style="border: 1px solid #000; padding: 6px;">${t.m1_mcq || '-'}</td>
                <td style="border: 1px solid #000; padding: 6px;">${t.m1_essay || '-'}</td>
                <td style="border: 1px solid #000; padding: 6px;">${t.m2_mcq || '-'}</td>
                <td style="border: 1px solid #000; padding: 6px;">${t.m2_essay || '-'}</td>
                <td style="border: 1px solid #000; padding: 6px;">${t.m3_mcq || '-'}</td>
                <td style="border: 1px solid #000; padding: 6px;">${t.m3_essay || '-'}</td>
                <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">${t.total_mcq || 0}</td>
                <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">${t.total_essay || 0}</td>
                <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">${t.score ? t.score.toString().replace('.', ',') : '-'}</td>
              </tr>
            `;
          }).join('')}
          <tr style="font-weight: bold; background: #fafafa;">
            <td style="border: 1px solid #000; padding: 6px; text-align: left;">Tổng số câu TN / TL</td>
            <td style="border: 1px solid #000; padding: 6px;">${s.m1_total_mcq || 0}</td>
            <td style="border: 1px solid #000; padding: 6px;">${s.m1_total_essay || 0}</td>
            <td style="border: 1px solid #000; padding: 6px;">${s.m2_total_mcq || 0}</td>
            <td style="border: 1px solid #000; padding: 6px;">${s.m2_total_essay || 0}</td>
            <td style="border: 1px solid #000; padding: 6px;">${s.m3_total_mcq || 0}</td>
            <td style="border: 1px solid #000; padding: 6px;">${s.m3_total_essay || 0}</td>
            <td style="border: 1px solid #000; padding: 6px;">${s.total_mcq_count || 0}</td>
            <td style="border: 1px solid #000; padding: 6px;">${s.total_essay_count || 0}</td>
            <td style="border: 1px solid #000; padding: 6px;">${(s.total_mcq_count || 0) + (s.total_essay_count || 0)}</td>
          </tr>
          <tr style="font-weight: bold; background: #fafafa;">
            <td style="border: 1px solid #000; padding: 6px; text-align: left;">Điểm số</td>
            <td colspan="2" style="border: 1px solid #000; padding: 6px;">${s.m1_score ? s.m1_score.toString().replace('.', ',') : '-'}</td>
            <td colspan="2" style="border: 1px solid #000; padding: 6px;">${s.m2_score ? s.m2_score.toString().replace('.', ',') : '-'}</td>
            <td colspan="2" style="border: 1px solid #000; padding: 6px;">${s.m3_score ? s.m3_score.toString().replace('.', ',') : '-'}</td>
            <td style="border: 1px solid #000; padding: 6px;">${mcqScoreStr}</td>
            <td style="border: 1px solid #000; padding: 6px;">${essayScoreStr}</td>
            <td style="border: 1px solid #000; padding: 6px;">10,0</td>
          </tr>
          <tr style="font-weight: bold; background: #f1f5f9;">
            <td style="border: 1px solid #000; padding: 6px; text-align: left;">Tỉ lệ %</td>
            <td colspan="2" style="border: 1px solid #000; padding: 6px;">${s.m1_pct || 40}%</td>
            <td colspan="2" style="border: 1px solid #000; padding: 6px;">${s.m2_pct || 40}%</td>
            <td colspan="2" style="border: 1px solid #000; padding: 6px;">${s.m3_pct || 20}%</td>
            <td colspan="2" style="border: 1px solid #000; padding: 6px;">100%</td>
            <td style="border: 1px solid #000; padding: 6px;">100%</td>
          </tr>
        </tbody>
      </table>
      `}
    </div>

    <!-- NỘI DUNG TAB 3: HƯỚNG DẪN CHẤM & ĐÁP ÁN -->
    <div id="examTabContent_answers" style="display: ${currentExamActiveTab === 'answers' ? 'block' : 'none'}; background: #fff; padding: 1.5rem; border: 1px solid #cbd5e1; border-radius: 4px; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.4; color: #000; text-align: justify; ">
      
      <div style="text-align: center; font-weight: bold; font-size: 14pt; text-transform: uppercase; margin-bottom: 4px;">
        HƯỚNG DẪN CHẤM VÀ ĐÁP ÁN MÔN ${exam.subjectName.toUpperCase()} LỚP ${exam.grade}
      </div>
      <div style="text-align: center; font-size: 12.5pt; margin-bottom: 14px;">
        Bộ sách: ${bookSeriesName} • Năm học ${exam.schoolYear}
      </div>

      ${(typeof AIService !== 'undefined' && AIService.renderAnswersSection) ? `
        ${AIService.renderAnswersSection(exam, false)}
      ` : `
      <div style="font-weight: bold; font-size: 13.5pt; margin: 12px 0 6px 0;">I. PHẦN TRẮC NGHIỆM (${mcqScoreStr} điểm)</div>
      <p style="margin: 0 0 8px 0; font-style: italic;">${(typeof AIService !== 'undefined' && AIService.getMcqScoringGuide) ? AIService.getMcqScoringGuide(exam.multipleChoice) : 'Mỗi câu trả lời đúng được 0,5 điểm.'}</p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 18px; text-align: center;">
        <tr style="background: #f1f5f9; font-weight: bold;">
          <td style="border: 1px solid #000; padding: 6px; width: 15%;">Câu hỏi</td>
          ${(exam.multipleChoice || []).map(function(q) {
            return `<td style="border: 1px solid #000; padding: 6px;"><b>Câu ${q.num}</b></td>`;
          }).join('')}
        </tr>
        <tr style="font-weight: bold; font-size: 13.5pt; color: #b91c1c;">
          <td style="border: 1px solid #000; padding: 6px;">Đáp án</td>
          ${(exam.multipleChoice || []).map(function(q) {
            return `<td style="border: 1px solid #000; padding: 6px;">${q.ans || '-'}</td>`;
          }).join('')}
        </tr>
      </table>

      ${(exam.essaySection && exam.essaySection.length > 0) ? `
        <div style="font-weight: bold; font-size: 13.5pt; margin: 18px 0 8px 0;">II. PHẦN TỰ LUẬN (${essayScoreStr} điểm)</div>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background: #f1f5f9; font-weight: bold;">
              <th style="border: 1px solid #000; width: 15%; padding: 6px; text-align: center;">Câu</th>
              <th style="border: 1px solid #000; width: 65%; padding: 6px; text-align: center;">Nội dung đáp án & Các bước giải</th>
              <th style="border: 1px solid #000; width: 20%; padding: 6px; text-align: center;">Biểu điểm</th>
            </tr>
          </thead>
          <tbody>
            ${exam.essaySection.map(function(e) {
              return `
                <tr>
                  <td style="border: 1px solid #000; padding: 8px; text-align: center; vertical-align: top; font-weight: bold;">
                    Câu ${e.num}<br>(${e.score ? e.score.toString().replace('.', ',') : ''} đ)
                  </td>
                  <td style="border: 1px solid #000; padding: 8px; vertical-align: top; white-space: pre-line;">
                    ${e.solution || e.text}
                  </td>
                  <td style="border: 1px solid #000; padding: 8px; text-align: center; vertical-align: top;">
                    ${(e.rubric || []).map(function(r) {
                      return `<div style="margin-bottom: 4px;"><b>${r.score}</b></div>`;
                    }).join('') || `<b>${e.score ? e.score.toString().replace('.', ',') : ''} đ</b>`}
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      ` : ''}
      `}

    </div>

    <!-- NỘI DUNG TAB 4: ĐẶC TẢ SIÊU DỮ LIỆU & MÃ HÓA CHUẨN ĐÔNG NAM Á (SEA-PLM) -->
    <div id="examTabContent_seaplm" style="display: ${currentExamActiveTab === 'seaplm' ? 'block' : 'none'}; background: #fff; padding: 1.5rem; border: 1px solid #cbd5e1; border-radius: 4px; font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.4; color: #000; text-align: justify; ">
      
      <!-- BANNER SEA-PLM -->
      <div style="background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); color: #fff; padding: 1rem 1.25rem; border-radius: 6px; margin-bottom: 1.25rem; box-shadow: 0 4px 12px rgba(2,132,199,0.15);">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
          <div>
            <div style="font-size: 0.82rem; letter-spacing: 0.05em; text-transform: uppercase; color: #bae6fd; font-weight: 700;">
              <i class="fa-solid fa-earth-asia"></i> KHUNG ĐÁNH GIÁ NĂNG LỰC HỌC SINH TIỂU HỌC KHU VỰC ĐÔNG NAM Á (SEA-PLM)
            </div>
            <h3 style="margin: 0.25rem 0 0 0; font-size: 1.2rem; font-weight: 800; color: #ffffff;">
              BẢNG ĐẶC TẢ SIÊU DỮ LIỆU CÂU HỎI & HƯỚNG DẪN MÃ HÓA (CODING GUIDE)
            </h3>
          </div>
          <div style="background: rgba(255,255,255,0.18); padding: 0.4rem 0.8rem; border-radius: 20px; font-size: 0.85rem; font-weight: 700; border: 1px solid rgba(255,255,255,0.3);">
            <i class="fa-solid fa-certificate" style="color: #fef08a;"></i> Chuẩn Bộ Giáo dục và Đào tạo
          </div>
        </div>
        <p style="margin: 0.6rem 0 0 0; font-size: 0.85rem; color: #f0f9ff; line-height: 1.4;">
          Đề kiểm tra tuân thủ nghiêm ngặt <b>6 Nguyên tắc Biên soạn SEA-PLM</b>: Đặt trong 4 bối cảnh chân thực (Cá nhân, Xung quanh, Rộng hơn, Môn học); Trọng tâm đo lường đơn nhất; Trắc nghiệm 4 lựa chọn phản ánh lỗi tư duy học sinh (Misconceptions); Tự luận có hướng dẫn mã hóa chuẩn (Mã 2, Mã 1, Mã 0, Mã 9) kèm bài làm mẫu thực tế.
        </p>
      </div>

      <!-- PHẦN 1: BẢNG MÔ TẢ SIÊU DỮ LIỆU CÂU HỎI (ITEM METADATA TABLE) -->
      <div style="font-weight: bold; font-size: 13.5pt; margin-bottom: 8px; color: #0369a1; display: flex; align-items: center; gap: 0.4rem;">
        <i class="fa-solid fa-table-list"></i> 1. BẢNG MÔ TẢ SIÊU DỮ LIỆU CÂU HỎI (ITEM METADATA TABLE)
      </div>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 22px; font-size: 11pt;">
        <thead>
          <tr style="background: #e0f2fe; font-weight: bold; text-align: center; color: #0369a1;">
            <th style="border: 1px solid #000; width: 14%; padding: 6px;">Mã câu</th>
            <th style="border: 1px solid #000; width: 8%; padding: 6px;">Thứ tự</th>
            <th style="border: 1px solid #000; width: 18%; padding: 6px;">Bối cảnh (Context)</th>
            <th style="border: 1px solid #000; width: 18%; padding: 6px;">Miền nội dung</th>
            <th style="border: 1px solid #000; width: 18%; padding: 6px;">Quá trình nhận thức</th>
            <th style="border: 1px solid #000; width: 10%; padding: 6px;">Độ khó</th>
            <th style="border: 1px solid #000; width: 8%; padding: 6px;">Điểm</th>
            <th style="border: 1px solid #000; width: 6%; padding: 6px;">Mã tối đa</th>
          </tr>
        </thead>
        <tbody>
          ${(function() {
            var metaList = exam.seaplmMetadataTable ? JSON.parse(JSON.stringify(exam.seaplmMetadataTable)) : [];
            if (!metaList || metaList.length === 0) {
              var order = 1;
              (exam.multipleChoice || []).forEach(function(q) {
                var ctx = q.metadata?.context || "Bối cảnh môn học (Academic)";
                var dom = q.metadata?.contentDomain || "Kiến thức trọng tâm";
                var cog = q.metadata?.cognitiveProcess || (q.level === 'Mức 1' ? 'Biết (Knowing)' : q.level === 'Mức 2' ? 'Áp dụng (Applying)' : 'Suy luận (Reasoning)');
                metaList.push({
                  itemCode: q.itemCode || `${(exam.subjectName || 'MON').substring(0,3).toUpperCase()}${exam.grade}_MCQ_${String(q.num).padStart(2, '0')}`,
                  order: order++,
                  context: ctx,
                  contentDomain: dom,
                  cognitiveProcess: cog,
                  difficulty: q.metadata?.difficulty || (q.level === 'Mức 1' ? 'Dễ' : q.level === 'Mức 2' ? 'Trung bình' : 'Khó'),
                  itemType: "Trắc nghiệm (MCQ)",
                  score: q.score || 0.5,
                  maxCode: "Mã 1"
                });
              });
              (exam.essaySection || []).forEach(function(e) {
                metaList.push({
                  itemCode: e.itemCode || `${(exam.subjectName || 'MON').substring(0,3).toUpperCase()}${exam.grade}_CR_${String(e.num).padStart(2, '0')}`,
                  order: order++,
                  context: e.metadata?.context || "Môi trường xung quanh (Local community)",
                  contentDomain: e.metadata?.contentDomain || "Vận dụng thực hành",
                  cognitiveProcess: e.metadata?.cognitiveProcess || "Áp dụng / Suy luận",
                  difficulty: e.metadata?.difficulty || "Trung bình - Khó",
                  itemType: "Tự luận (Constructed Response)",
                  score: e.score || 1.0,
                  maxCode: (e.score && e.score >= 2) ? "Mã 2" : "Mã 1"
                });
              });
            }
            return metaList.map(function(item) {
              return `
                <tr>
                  <td style="border: 1px solid #000; padding: 6px; font-weight: bold; text-align: center; color: #0369a1;">${item.itemCode || '-'}</td>
                  <td style="border: 1px solid #000; padding: 6px; text-align: center;">Câu ${item.order || '-'}</td>
                  <td style="border: 1px solid #000; padding: 6px;">${item.context || '-'}</td>
                  <td style="border: 1px solid #000; padding: 6px;">${item.contentDomain || '-'}</td>
                  <td style="border: 1px solid #000; padding: 6px;">${item.cognitiveProcess || '-'}</td>
                  <td style="border: 1px solid #000; padding: 6px; text-align: center;">${item.difficulty || '-'}</td>
                  <td style="border: 1px solid #000; padding: 6px; text-align: center; font-weight: bold;">${item.score ? item.score.toString().replace('.', ',') : '-'}</td>
                  <td style="border: 1px solid #000; padding: 6px; text-align: center; font-weight: bold; color: #16a34a;">${item.maxCode || 'Mã 1'}</td>
                </tr>
              `;
            }).join('');
          })()}
        </tbody>
      </table>

      <!-- PHẦN 2: PHÂN TÍCH CƠ SỞ PHƯƠNG ÁN ĐÚNG & PHƯƠNG ÁN NHIỄU -->
      <div style="font-weight: bold; font-size: 13.5pt; margin-bottom: 8px; color: #0369a1; display: flex; align-items: center; gap: 0.4rem;">
        <i class="fa-solid fa-brain"></i> 2. PHÂN TÍCH CƠ SỞ PHƯƠNG ÁN ĐÚNG & PHƯƠNG ÁN NHIỄU (DISTRACTOR RATIONALE)
      </div>
      <p style="margin: 0 0 10px 0; font-size: 11pt; color: #475569; font-style: italic;">
        Phân tích cơ sở khoa học của phương án đúng và các lỗi tư duy/nhầm lẫn thường gặp (misconceptions) khiến học sinh chọn nhầm các phương án còn lại:
      </p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 22px; font-size: 11.5pt;">
        <thead>
          <tr style="background: #e0f2fe; font-weight: bold; text-align: center; color: #0369a1;">
            <th style="border: 1px solid #000; width: 10%; padding: 6px;">Câu</th>
            <th style="border: 1px solid #000; width: 8%; padding: 6px;">Đáp án</th>
            <th style="border: 1px solid #000; width: 38%; padding: 6px;">Cơ sở phương án đúng</th>
            <th style="border: 1px solid #000; width: 44%; padding: 6px;">Phân tích các phương án nhiễu & Lỗi sai của học sinh</th>
          </tr>
        </thead>
        <tbody>
          ${(exam.multipleChoice || []).map(function(q) {
            var dr = q.distractorRationale || {};
            var correctText = dr.correct || q.explain || `Phương án ${q.ans} là chính xác.`;
            var distText = [];
            ['A', 'B', 'C', 'D'].forEach(function(opt) {
              if (opt !== q.ans) {
                var reason = dr['distractor' + opt] || dr[opt];
                if (reason) {
                  distText.push(`<b>Lựa chọn ${opt}:</b> ${reason}`);
                }
              }
            });
            if (distText.length === 0) {
              distText.push(`<b>Các lựa chọn còn lại:</b> Học sinh chọn nhầm do tính toán sai hoặc hiểu nhầm bản chất câu hỏi.`);
            }
            return `
              <tr>
                <td style="border: 1px solid #000; padding: 8px; text-align: center; font-weight: bold; vertical-align: top;">Câu ${q.num}</td>
                <td style="border: 1px solid #000; padding: 8px; text-align: center; font-weight: bold; color: #b91c1c; font-size: 13pt; vertical-align: top;">${q.ans}</td>
                <td style="border: 1px solid #000; padding: 8px; vertical-align: top; color: #15803d; line-height: 1.45;">${correctText}</td>
                <td style="border: 1px solid #000; padding: 8px; vertical-align: top; color: #334155; line-height: 1.45;">${distText.join('<br>')}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>

      <!-- PHẦN 3: HƯỚNG DẪN MÃ HÓA CHI TIẾT (CODING GUIDE) CHO CÂU TỰ LUẬN -->
      ${(exam.essaySection && exam.essaySection.length > 0) ? `
        <div style="font-weight: bold; font-size: 13.5pt; margin-bottom: 8px; color: #0369a1; display: flex; align-items: center; gap: 0.4rem;">
          <i class="fa-solid fa-list-check"></i> 3. HƯỚNG DẪN MÃ HÓA CHI TIẾT (CODING GUIDE) CHO CÂU TỰ LUẬN
        </div>
        ${exam.essaySection.map(function(e) {
          var cg = e.codingGuide || {
            maxCode: "Mã 2",
            codes: [
              { code: "Mã 2", description: "Mức tối đa: Thực hiện đầy đủ các bước, lập luận đúng và cho kết quả chính xác.", sampleResponse: e.solution || "Học sinh hoàn thành đúng toàn bộ bài giải." },
              { code: "Mã 1", description: "Mức chưa tối đa: Thực hiện đúng bước đầu hoặc tính toán đúng nhưng sai đơn vị / đáp số.", sampleResponse: "Học sinh làm đúng 1 phần bài làm." },
              { code: "Mã 0", description: "Mức không đạt: Tính toán sai toàn bộ hoặc giải lạc đề.", sampleResponse: "Không đưa ra được kết quả hoặc câu trả lời vô nghĩa." },
              { code: "Mã 9", description: "Bỏ trống không làm bài.", sampleResponse: "[Học sinh để giấy trắng]" }
            ]
          };
          return `
            <div style="margin-bottom: 16px;">
              <div style="font-weight: bold; color: #1e3a8a; margin-bottom: 6px; font-size: 12.5pt;">
                ${e.title || `Câu ${e.num}`}: ${e.text}
              </div>
              <table style="width: 100%; border-collapse: collapse; font-size: 11.5pt;">
                <thead>
                  <tr style="background: #f8fafc; font-weight: bold;">
                    <th style="border: 1px solid #000; width: 12%; padding: 6px; text-align: center;">Mã hóa</th>
                    <th style="border: 1px solid #000; width: 48%; padding: 6px; text-align: center;">Tiêu chí đánh giá</th>
                    <th style="border: 1px solid #000; width: 40%; padding: 6px; text-align: center;">Ví dụ bài làm mẫu của học sinh (Sample Response)</th>
                  </tr>
                </thead>
                <tbody>
                  ${(cg.codes || []).map(function(c) {
                    var badgeColor = c.code === 'Mã 2' ? '#15803d' : c.code === 'Mã 1' ? '#0284c7' : c.code === 'Mã 0' ? '#b91c1c' : '#64748b';
                    return `
                      <tr>
                        <td style="border: 1px solid #000; padding: 6px; text-align: center; vertical-align: top; font-weight: bold; color: ${badgeColor};">
                          ${c.code}
                        </td>
                        <td style="border: 1px solid #000; padding: 6px; vertical-align: top;">${c.description}</td>
                        <td style="border: 1px solid #000; padding: 6px; vertical-align: top; font-style: italic; color: #334155;">${c.sampleResponse || '-'}</td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          `;
        }).join('')}
      ` : ''}

    </div>
  `;
}

// Chuyển đổi tabs xem trước
function switchExamTab(tabName) {
  currentExamActiveTab = tabName;
  var elExam = document.getElementById("examTabContent_exam");
  var elMatrix = document.getElementById("examTabContent_matrix");
  var elAnswers = document.getElementById("examTabContent_answers");
  var elReading = document.getElementById("examTabContent_reading");
  var elWriting = document.getElementById("examTabContent_writing");
  var elRubric = document.getElementById("examTabContent_rubric");
  var elSeaplm = document.getElementById("examTabContent_seaplm");

  if (elExam) elExam.style.display = (tabName === "exam" ? "block" : "none");
  if (elMatrix) elMatrix.style.display = (tabName === "matrix" ? "block" : "none");
  if (elAnswers) elAnswers.style.display = (tabName === "answers" ? "block" : "none");
  if (elReading) elReading.style.display = (tabName === "reading" ? "block" : "none");
  if (elWriting) elWriting.style.display = (tabName === "writing" ? "block" : "none");
  if (elRubric) elRubric.style.display = (tabName === "rubric" ? "block" : "none");
  if (elSeaplm) elSeaplm.style.display = (tabName === "seaplm" ? "block" : "none");

  var container = document.getElementById("aiOutputContainer");
  if (container && currentExamData) {
    renderExamOutput(currentExamData, container);
  }
}

// Modal Cấu hình nhanh Gemini API Key
function openGeminiApiKeyModal() {
  var key = localStorage.getItem("tvth_gemini_api_key") || "";
  var modalHtml = `
    <div class="modal-overlay" id="geminiKeyModal">
      <div class="modal-content" style="max-width: 480px;">
        <div class="modal-header">
          <h3 style="display: flex; align-items: center; gap: 0.5rem; font-size: 1.1rem; color: #7c3aed;">
            <i class="fa-solid fa-wand-magic-sparkles"></i> Cấu hình Google Gemini AI
          </h3>
          <button class="modal-close-btn" onclick="document.getElementById('geminiKeyModal').remove()">&times;</button>
        </div>
        <div class="modal-body" style="padding: 1.25rem 0;">
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
            Nhập <strong>API Key Gemini</strong> miễn phí từ <a href="https://aistudio.google.com/app/apikey" target="_blank" style="color: #7c3aed; font-weight: 700;">Google AI Studio</a> để AI soạn đề không giới hạn, bám sát từng bài học SGK Kết nối tri thức.
          </p>
          <div class="form-group">
            <label style="font-weight: 700; font-size: 0.85rem;">Gemini API Key:</label>
            <input type="password" id="quickGeminiApiKeyInput" class="form-control" value="${key}" placeholder="AIzaSy...">
          </div>
          <div style="background: #f5f3ff; border: 1px solid #ddd6fe; border-radius: var(--radius-sm); padding: 0.75rem; font-size: 0.78rem; color: #6b21a8;">
            <i class="fa-solid fa-shield-halved"></i> Key được lưu trữ an toàn trong trình duyệt của bạn (Local Storage).
          </div>
        </div>
        <div class="modal-footer" style="display: flex; justify-content: flex-end; gap: 0.5rem;">
          <button class="btn btn-outline" onclick="document.getElementById('geminiKeyModal').remove()">Đóng</button>
          <button class="btn btn-primary" style="background: linear-gradient(135deg, #7c3aed, #a855f7);" onclick="saveQuickGeminiApiKey()">
            <i class="fa-solid fa-save"></i> Lưu API Key
          </button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function saveQuickGeminiApiKey() {
  var input = document.getElementById("quickGeminiApiKeyInput");
  if (!input) return;
  var key = (input.value || "").trim();
  localStorage.setItem("tvth_gemini_api_key", key);
  showToast(key ? "Đã lưu Gemini API Key thành công!" : "Đã xóa API Key", "success");
  var modal = document.getElementById("geminiKeyModal");
  if (modal) modal.remove();
  if (currentActiveTab === "aiexam") {
    switchMainTab("aiexam");
  }
}

// ==========================================
// WINDOW BINDINGS CHO AI EXAM GENERATOR
// ==========================================
if (typeof window !== "undefined") {
  window.renderAiExamView = typeof renderAiExamView !== "undefined" ? renderAiExamView : null;
  window.getSubjectsForGrade = typeof getSubjectsForGrade !== "undefined" ? getSubjectsForGrade : null;
  window.onExamGradeChange = typeof onExamGradeChange !== "undefined" ? onExamGradeChange : null;
  window.onExamScopePresetChange = typeof onExamScopePresetChange !== "undefined" ? onExamScopePresetChange : null;
  window.onExamScoreRatioChange = typeof onExamScoreRatioChange !== "undefined" ? onExamScoreRatioChange : null;
  window.setExamScoreRatio = typeof setExamScoreRatio !== "undefined" ? setExamScoreRatio : null;
  window.updateCognitiveTotal = typeof updateCognitiveTotal !== "undefined" ? updateCognitiveTotal : null;
  window.setCognitivePreset = typeof setCognitivePreset !== "undefined" ? setCognitivePreset : null;
  window.triggerAiGenerate = typeof triggerAiGenerate !== "undefined" ? triggerAiGenerate : null;
  window.switchExamTab = typeof switchExamTab !== "undefined" ? switchExamTab : null;
  window.openGeminiApiKeyModal = typeof openGeminiApiKeyModal !== "undefined" ? openGeminiApiKeyModal : null;
  window.saveQuickGeminiApiKey = typeof saveQuickGeminiApiKey !== "undefined" ? saveQuickGeminiApiKey : null;
}
