@echo off
chcp 65001 >nul
echo ====================================================
echo DANG QUET TOAN BO KHO GOOGLE DRIVE (KHOI 1 - 5)...
echo ====================================================
node QUET_TOAN_BO_DRIVE.js
node build_clean_data.js
echo.
echo QUET HOAN TAT! HAY REFRESH LAI TRANG WEB INDEX.HTML DE XEM KET QUA.
pause
