@echo off
chcp 65001 > nul
title AI EXAM BUILDER - TRỢ LÝ THIẾT KẾ ĐỀ KIỂM TRA TIỂU HỌC
color 0A
echo =========================================================================
echo    AI EXAM BUILDER - TRỢ LÝ AI THIẾT KẾ ĐỀ KIỂM TRA TIỂU HỌC
echo    TT27 • GDPT 2018 • MA TRẬN • BẢN ĐẶC TẢ • SEA-PLM • VĨNH LONG
echo =========================================================================
echo.
if not exist "%~dp0server\node_modules\" (
    echo [!] Chưa tìm thấy thư viện server. Đang tiến hành cài đặt (chỉ cần làm 1 lần)...
    cd /d "%~dp0server"
    call npm install
)

if not exist "%~dp0client\dist\" (
    echo [!] Chưa tìm thấy bản build giao diện client. Đang tiến hành cài đặt và build...
    cd /d "%~dp0client"
    if not exist "%~dp0client\node_modules\" (
        call npm install
    )
    call npm run build
)

echo.
echo [1/2] Đang khởi động máy chủ ứng dụng...
cd /d "%~dp0server"
start "" http://localhost:3001
node --watch-path=src src/index.js
pause
