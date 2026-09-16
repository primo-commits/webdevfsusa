$ErrorActionPreference = 'Continue'
$projectRoot = 'C:\Users\Primoz\projects\webdevfsusa-local'

# Kill any existing Next.js dev processes on port 3000
$existing = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
if ($existing) {
    $pidToKill = $existing.OwningProcess | Select-Object -Unique
    foreach ($p in $pidToKill) {
        Stop-Process -Id $p -Force -ErrorAction SilentlyContinue
        Write-Host "[clean] Killed process $p on port 3000"
    }
    Start-Sleep 2
}

# Start dev server
Write-Host '[start] Launching npm run dev...'
Start-Process powershell -ArgumentList '-NoProfile','-ExecutionPolicy','Bypass','-Command',"Set-Location '$projectRoot'; npm run dev" -WindowStyle Normal

Write-Host '[start] Waiting 15s for server to boot...'
Start-Sleep 15

# Verify
try {
    $r = Invoke-WebRequest -Uri 'http://localhost:3000' -Method HEAD -TimeoutSec 5 -UseBasicParsing
    Write-Host "[OK] Server is up at http://localhost:3000 (status $($r.StatusCode))"
} catch {
    Write-Host "[WARN] Server not responding yet: $($_.Exception.Message)"
}
