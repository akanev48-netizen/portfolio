@echo off
cd /d "%~dp0"
echo Building...
call npm run build
echo.
echo Starting server on http://localhost:3001
echo.
call node start.cjs
