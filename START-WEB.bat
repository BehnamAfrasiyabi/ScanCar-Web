@echo off
title ScanCar - Website (this window must stay open)
cd /d D:\MyProject\0_ScanCar\ScanCar-Web
echo.
echo   ============================================
echo    ScanCar Website — http://127.0.0.1:8899
echo    Shop:   http://127.0.0.1:8899/shop.html
echo    Do NOT close this window while working.
echo   ============================================
echo.
php -S 127.0.0.1:8899
pause
