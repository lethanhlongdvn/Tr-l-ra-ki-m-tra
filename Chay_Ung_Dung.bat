@echo off
chcp 65001 > nul
title AI EXAM BUILDER - TRO LY THIET KE DE KIEM TRA TIEU HOC
color 0A
echo =========================================================================
echo    AI EXAM BUILDER - TRO LY AI THIET KE DE KIEM TRA TIEU HOC
echo    TT27 - GDPT 2018 - MA TRAN - BAN DAC TA - SEA-PLM - VINH LONG
echo =========================================================================
echo.

set "ROOT_DIR=%~dp0"

REM 1. Kiem tra Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [LOI] May tinh chua cai dat Node.js!
    echo Vui long cai dat Node.js truoc khi chay.
    pause
    exit /b
)

REM 2. Kiem tra thu vien server
if not exist "%ROOT_DIR%server\node_modules" (
    echo [1/3] Dang cai dat thu vien server...
    cd /d "%ROOT_DIR%server"
    call npm install
)

REM 3. Kiem tra ban build client
if not exist "%ROOT_DIR%client\dist\index.html" (
    echo [2/3] Dang build giao dien client...
    cd /d "%ROOT_DIR%client"
    if not exist "%ROOT_DIR%client\node_modules" (
        call npm install
    )
    call npm run build
)

REM 4. Khoi dong ung dung
echo.
echo [3/3] Dang khoi dong may chu tai http://localhost:3001 ...
cd /d "%ROOT_DIR%server"
start "" http://localhost:3001
node src/index.js
pause