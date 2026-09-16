$ErrorActionPreference = 'Stop'
$base = 'http://localhost:3000'
$routes = @('/', '/us', '/canada', '/canada/auto-repair', '/terms', '/privacy-policy', '/disclaimer', '/landing')

foreach ($route in $routes) {
    try {
        $r = Invoke-WebRequest -Uri ($base + $route) -Method GET -TimeoutSec 8 -UseBasicParsing
        Write-Host "$route -> $($r.StatusCode)"
    } catch {
        Write-Host "$route -> ERROR: $($_.Exception.Message)"
    }
}
