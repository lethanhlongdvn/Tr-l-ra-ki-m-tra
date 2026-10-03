@echo off
chcp 65001 > nul
title THƯ VIỆN GIÁO VIÊN TIỂU HỌC
echo ===================================================
echo   ĐANG KHỞI ĐỘNG WEBSITE THƯ VIỆN GIÁO VIÊN...
echo ===================================================
echo.
echo Website đang chạy tại địa chỉ: http://localhost:8000
echo Nhấn Ctrl + C để dừng website khi không sử dụng.
echo.
start http://localhost:8000
python -m http.server 8000
pause
