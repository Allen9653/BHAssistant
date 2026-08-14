# ==========================================================================
# migrate-legacy-wp.ps1
#
# Premjesta legacy WordPress tema fajlove (index.php, header.php, footer.php,
# functions.php, style.css) iz root-a repozitorija u zaseban folder
# "wordpress-legacy-theme/" koji NIJE dio Vite build pipeline-a i koji Vercel
# ignorise (Vercel ne izvrsava PHP kod).
#
# Pokreni ga iz root-a repozitorija (PowerShell):
#   cd C:\putanja\do\BHAssistant
#   .\migrate-legacy-wp.ps1
#
# Ako PowerShell blokira izvrsavanje skripti, prvo pokreni (jednom, kao Admin
# ili za trenutnu sesiju):
#   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
# ==========================================================================

if (-not (Test-Path "package.json") -or -not (Test-Path "vite.config.ts")) {
    Write-Host "GRESKA: Pokreni ovu skriptu iz root-a BHAssistant repozitorija (tu gdje su package.json i vite.config.ts)." -ForegroundColor Red
    exit 1
}

$dest = "wordpress-legacy-theme"
New-Item -ItemType Directory -Force -Path $dest | Out-Null

$files = @("index.php", "header.php", "footer.php", "functions.php", "style.css")

foreach ($f in $files) {
    if (Test-Path $f) {
        # Probaj prvo "git mv" da se sacuva historija, ako je git repo
        $gitMoveOk = $false
        try {
            git mv $f "$dest\$f" 2>$null
            if ($LASTEXITCODE -eq 0) { $gitMoveOk = $true }
        } catch {}

        if (-not $gitMoveOk) {
            Move-Item -Path $f -Destination "$dest\$f" -Force
        }
        Write-Host "Premjesteno: $f -> $dest\$f" -ForegroundColor Green
    } else {
        Write-Host "Preskoceno (ne postoji): $f" -ForegroundColor Yellow
    }
}

$readme = @"
# Legacy WordPress tema (van Vercel build-a)

Ovi fajlovi (index.php, header.php, footer.php, functions.php, style.css)
pripadaju staroj WordPress temi koja je ucitavala izgradjeni Vite ``dist/``
paket unutar WordPress instalacije.

Posto je aktivna strategija deployment-a cisti React/Vite SPA na
Vercelu (bez PHP/WordPress runtime-a), ovi fajlovi su premjesteni ovdje
kako ne bi zbunjivali build proces ili ostali nezasticeni u produkcijskom
repozitoriju.

Ako se ikada odluci vracanje na WordPress hosting, ovi fajlovi mogu
posluziti kao polazna tacka - ali trebaju svjezi npm run build i kopiranje
dist/ sadrzaja u temu prije aktivacije.
"@

Set-Content -Path "$dest\README.md" -Value $readme -Encoding UTF8

Write-Host ""
Write-Host "Gotovo. WordPress legacy fajlovi su sada u '$dest\'." -ForegroundColor Cyan
Write-Host "Root direktorijum je cist za Vercel Vite deployment." -ForegroundColor Cyan
