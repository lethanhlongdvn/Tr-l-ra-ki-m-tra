/**
 * TEACHING TOOLKIT MODULE (VÒNG QUAY MAY MẮN & ĐỒNG HỒ ĐẾM NGƯỢC)
 * Thư viện Bài giảng & Kế hoạch bài dạy Tiểu học - Lê Thành Long
 */

var ToolkitService = {
  students: [
    "Minh Khang", "Bảo An", "Gia Hưng", "Khánh Vy", "Đức Anh", 
    "Hải Đăng", "Quỳnh Chi", "Tuấn Kiệt", "Bảo Ngọc", "Hoàng Nam",
    "Phương Linh", "Thanh Trúc", "Việt Dũng", "Thu Uyên", "Quang Minh"
  ],
  wheelColors: ["#1e3a8a", "#0284c7", "#0d9488", "#16a34a", "#f59e0b", "#ea580c", "#dc2626", "#7c3aed"],
  currentRotation: 0,
  isSpinning: false,

  timerInterval: null,
  timeLeft: 180,
  timerRunning: false,

  initWheel: function(canvasId) {
    if (!canvasId) canvasId = "wheelCanvas";
    var canvas = document.getElementById(canvasId);
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    var numSegments = this.students.length;
    var arc = (2 * Math.PI) / numSegments;
    var radius = canvas.width / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(radius, radius);
    ctx.rotate(this.currentRotation);

    for (var i = 0; i < numSegments; i++) {
      var angle = i * arc;
      ctx.beginPath();
      ctx.fillStyle = this.wheelColors[i % this.wheelColors.length];
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius - 4, angle, angle + arc);
      ctx.lineTo(0, 0);
      ctx.fill();
      ctx.stroke();

      ctx.save();
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 11px 'Be Vietnam Pro', sans-serif";
      ctx.textAlign = "right";
      ctx.translate(0, 0);
      ctx.rotate(angle + arc / 2);
      ctx.fillText(this.students[i], radius - 18, 4);
      ctx.restore();
    }

    ctx.restore();
  },

  spinWheel: function() {
    if (this.isSpinning) return;
    this.isSpinning = true;

    var resultBox = document.getElementById("wheelResult");
    if (resultBox) resultBox.innerHTML = '<span>Đang quay...</span>';

    var extraTurns = Math.floor(Math.random() * 5 + 5) * 2 * Math.PI;
    var randomOffset = Math.random() * 2 * Math.PI;
    var targetRotation = this.currentRotation + extraTurns + randomOffset;
    var startTime = performance.now();
    var duration = 4000;
    var self = this;

    var animate = function(currentTime) {
      var elapsed = currentTime - startTime;
      var progress = Math.min(elapsed / duration, 1);
      self.currentRotation = self.currentRotation + (targetRotation - self.currentRotation) * 0.05;

      self.initWheel();

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        self.isSpinning = false;
        self.calculateWinner();
      }
    };

    requestAnimationFrame(animate);
  },

  calculateWinner: function() {
    var numSegments = this.students.length;
    var arc = (2 * Math.PI) / numSegments;
    var normalizedAngle = (2 * Math.PI - (this.currentRotation % (2 * Math.PI)) + 3 * Math.PI / 2) % (2 * Math.PI);
    var winningIndex = Math.floor(normalizedAngle / arc) % numSegments;
    var winnerName = this.students[winningIndex];

    var resultBox = document.getElementById("wheelResult");
    if (resultBox) {
      resultBox.innerHTML = `
        <div style="font-size: 1.05rem; color: #16a34a; font-weight: 800;">
          🎉 Chúc mừng bạn: <span style="color: #1e3a8a; text-decoration: underline;">${winnerName}</span>!
        </div>
      `;
    }
  },

  updateStudentList: function(text) {
    var lines = text.split("\n").map(function(s) { return s.trim(); }).filter(function(s) { return s.length > 0; });
    if (lines.length >= 2) {
      this.students = lines;
      this.initWheel();
      showToast("Đã cập nhật danh sách " + lines.length + " học sinh!", "success");
    } else {
      showToast("Vui lòng nhập ít nhất 2 học sinh", "error");
    }
  },

  setTimerPreset: function(seconds) {
    this.pauseTimer();
    this.timeLeft = seconds;
    this.updateTimerDisplay();
  },

  startTimer: function() {
    if (this.timerRunning) return;
    this.timerRunning = true;
    var self = this;
    this.timerInterval = setInterval(function() {
      if (self.timeLeft > 0) {
        self.timeLeft--;
        self.updateTimerDisplay();
      } else {
        self.pauseTimer();
        self.playTimerAlert();
      }
    }, 1000);
  },

  pauseTimer: function() {
    this.timerRunning = false;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  },

  resetTimer: function() {
    this.pauseTimer();
    this.timeLeft = 180;
    this.updateTimerDisplay();
  },

  updateTimerDisplay: function() {
    var el = document.getElementById("timerDisplay");
    if (!el) return;
    var m = Math.floor(this.timeLeft / 60);
    var s = this.timeLeft % 60;
    el.textContent = (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
  },

  playTimerAlert: function() {
    showToast("⏰ Hết giờ thảo luận!", "info");
    try {
      var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      var osc = audioCtx.createOscillator();
      var gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.5, audioCtx.currentTime);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.8);
    } catch (e) {}
  }
};

window.ToolkitService = ToolkitService;
