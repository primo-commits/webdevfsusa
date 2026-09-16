$ErrorActionPreference = 'Continue'
$projectRoot = 'C:\Users\Primoz\projects\webdevfsusa-local'

# Start dev server in background
$devJob = Start-Job -ScriptBlock {
    Set-Location $using:projectRoot
    npm run dev
} -Name 'nextjs-dev'

Write-Host "[dev] Started Next.js dev server (job id: $($devJob.Id))"
Write-Host "[dev] Waiting 15s for server to start..."

Start-Sleep 15

# Smoke test
$base = 'http://localhost:3000'
$routes = @('/', '/us', '/canada', '/canada/auto-repair', '/terms', '/privacy-policy', '/disclaimer', '/landing')
$allOk = $true

foreach ($route in $routes) {
    try {
        $r = Invoke-WebRequest -Uri ($base + $route) -Method GET -TimeoutSec 8 -UseBasicParsing
        Write-Host "[OK]  $($route) -> $($r.StatusCode)"
    } catch {
        Write-Host "[ERR] $($route) -> $($_.Exception.Message)"
        $allOk = $false
    }
}

# Cleanup
Write-Host "[dev] Stopping dev server..."
Stop-Job -Id $devJob.Id
Remove-Job -Id $devJob.Id -Force

if ($allOk) {
    Write-Host "`n[RESULT] All routes passed!"
} else {
    Write-Host "`n[RESULT] Some routes failed."
}
