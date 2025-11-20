# Tuhura Tech - Session Management Setup Script

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " Tuhura Tech - Session Management Setup" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "[1/3] Installing frontend dependencies..." -ForegroundColor Yellow
Set-Location frontend

try {
    npm install
    if ($LASTEXITCODE -ne 0) {
        throw "npm install failed"
    }
} catch {
    Write-Host "Error: Failed to install dependencies" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "[2/3] Frontend setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "[3/3] Ready to start!" -ForegroundColor Green
Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " Setup Complete!" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "To start the frontend:" -ForegroundColor Yellow
Write-Host "  cd frontend" -ForegroundColor White
Write-Host "  npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "To start the backend:" -ForegroundColor Yellow
Write-Host "  python main.py" -ForegroundColor White
Write-Host ""
Write-Host "The frontend will be available at: http://localhost:3000" -ForegroundColor Cyan
Write-Host "The backend will be available at: http://127.0.0.1:8000" -ForegroundColor Cyan
Write-Host ""
Read-Host "Press Enter to exit"
