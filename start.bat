@echo off
title Vocabulary World
echo ========================================================
echo   Vocabulary World - CEFR A1-C1 Lug'at Platformasi
echo ========================================================
echo Dastur ishga tushirilmoqda...

python run_server.py

if %ERRORLEVEL% NEQ 0 (
    echo [!] Python orqali ochilmadi, brauzerda to'g'ridan-to'g'ri ochilmoqda...
    start index.html
)
pause
