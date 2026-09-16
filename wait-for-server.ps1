$ErrorActionPreference = 'Continue'
$projectRoot = 'C:\Users\Primoz\projects\webdevfsusa-local'

# Check if server already running
try {
    $r = Invoke-WebRequest -Uri 'http://localhost:3000' -Method HEAD -TimeoutSec 3 -UseBasicParsing
    Write-Host "[ALREADY UP] http://localhost:3000 (status $($r.StatusCode))"
    exit
} catch {
    Write-Host '[check] Server not up yet, launching...'
}

# Kill any existing
$existing = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
if ($existing) {
    $existing.OwningProcess | Select-Object -Unique | ForEach-Object { Stop-Process -Id $_ -Force -ErrorAction SilentlyContinue }
    Start-Sleep 2
}

# Launch via cmd (more reliable than nested powershell)
$psi = New-Object System.Diagnostics.ProcessStartInfo
$psi.FileName = 'cmd.exe'
$psi.Arguments = '/c cd /d "' + $projectRoot + '" && npm run dev'
$psi.UseShellExecute = $true
$psi.WindowStyle = 'Normal'
[System.Diagnostics.Process]::Start($psi) | Out-Null

Write-Host '[start] npm run dev launched via cmd. Polling for port 3000...'

# Poll up to 60s
for ($i = 0; $i -lt 30; $i++) {
    Start-Sleep 2
    $conn = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
    if ($conn) {
        Write-Host "[UP] Server ready after $((($i+1)*2)) seconds at http://localhost:3000"
        exit
    }
}

Write-Host '[WARN] Server did not come up after 60s. Try opening http://localhost:3000 manually.'
