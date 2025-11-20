@echo off
echo ==========================================
echo  Tuhura Tech - Session Management Setup
echo ==========================================
echo.

echo [1/3] Installing frontend dependencies...
cd frontend
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo Error: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo [2/3] Frontend setup complete!
echo.
echo [3/3] Ready to start!
echo.
echo ==========================================
echo  Setup Complete!
echo ==========================================
echo.
echo To start the frontend:
echo   cd frontend
echo   npm run dev
echo.
echo To start the backend:
echo   python main.py
echo.
echo The frontend will be available at: http://localhost:3000
echo The backend will be available at: http://127.0.0.1:8000
echo.
pause
