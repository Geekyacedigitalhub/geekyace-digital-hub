[CmdletBinding()]
param(
  [string]$PreviewEnvironmentFile = ".env.preview.local",
  [string]$ProductionEnvironmentFile = ".env.local",
  [switch]$Apply
)

$ErrorActionPreference = "Stop"
$releaseRoot = Split-Path -Parent $PSScriptRoot
$previewPath = Join-Path $releaseRoot $PreviewEnvironmentFile
$productionPath = Join-Path $releaseRoot $ProductionEnvironmentFile
$reportDirectory = Join-Path $releaseRoot "activation-reports"

function Get-DotEnvValue([string]$Path, [string]$Name) {
  $line = Get-Content -LiteralPath $Path | Where-Object {
    $_ -match ("^" + [regex]::Escape($Name) + "=")
  } | Select-Object -First 1

  if (-not $line) { return $null }
  return (($line -split "=", 2)[1]).Trim().Trim('"').Trim("'")
}

function Get-SecretFingerprint([string]$Value) {
  $bytes = [System.Text.Encoding]::UTF8.GetBytes($Value)
  $sha256 = [System.Security.Cryptography.SHA256]::Create()
  try {
    return (($sha256.ComputeHash($bytes) | ForEach-Object { $_.ToString("x2") }) -join "")
  }
  finally {
    $sha256.Dispose()
  }
}

if (-not $Apply) {
  throw "No database changes were made. Re-run with -Apply after reviewing the preview target."
}

foreach ($path in @($previewPath, $productionPath)) {
  if (-not (Test-Path -LiteralPath $path)) { throw "Environment file not found: $path" }
}

$previewUrl = Get-DotEnvValue $previewPath "DATABASE_POSTGRES_URL"
$productionUrl = Get-DotEnvValue $productionPath "DATABASE_POSTGRES_URL"
if (-not $previewUrl -or -not $productionUrl) { throw "Both files require DATABASE_POSTGRES_URL." }

if ((Get-SecretFingerprint $previewUrl) -eq (Get-SecretFingerprint $productionUrl)) {
  throw "REFUSED: the preview database URL matches production. Create a separate preview database first."
}

$previewUri = [uri]$previewUrl
$productionUri = [uri]$productionUrl
if ($previewUri.Scheme -eq "prisma+postgres") {
  throw "The preview value is an Accelerate URL. Copy the direct PostgreSQL URL (postgres://...@db.prisma.io) with connection pooling turned off."
}
if ($previewUri.Scheme -notin @("postgres", "postgresql")) { throw "Preview is not a direct PostgreSQL URL." }

$psql = Get-Command psql -ErrorAction SilentlyContinue
if (-not $psql) { throw "PostgreSQL 17 psql is required." }
$version = (& $psql.Source --version) -join " "
if ($version -notmatch " 17\.") { throw "PostgreSQL 17 psql is required. Detected: $version" }

Write-Host "Preview host: $($previewUri.Host)"
Write-Host "Production host: $($productionUri.Host)"
Write-Host "The secret fingerprints are different."
$confirmation = Read-Host "Type MIGRATE PREVIEW to apply the additive v3.2 transaction"
if ($confirmation -cne "MIGRATE PREVIEW") { throw "Confirmation did not match. No changes were made." }

New-Item -ItemType Directory -Path $reportDirectory -Force | Out-Null
$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$preflightReport = Join-Path $reportDirectory "preview-preflight-$timestamp.txt"
$postflightReport = Join-Path $reportDirectory "preview-postflight-$timestamp.txt"

$preflight = Join-Path $releaseRoot "prisma\v3_2_preflight_readonly.postgres.sql"
$migration = Join-Path $releaseRoot "prisma\v3_2_marketplace_foundation.postgres.sql"
$postflight = Join-Path $releaseRoot "prisma\v3_2_postflight_readonly.postgres.sql"

& $psql.Source -X $previewUrl -v ON_ERROR_STOP=1 -f $preflight | Tee-Object -FilePath $preflightReport
if ($LASTEXITCODE -ne 0) { throw "Preflight failed. No migration was attempted." }

& $psql.Source -X $previewUrl -v ON_ERROR_STOP=1 -f $migration
if ($LASTEXITCODE -ne 0) { throw "Preview migration failed. The transaction should have rolled back." }

& $psql.Source -X $previewUrl -v ON_ERROR_STOP=1 -f $postflight | Tee-Object -FilePath $postflightReport
if ($LASTEXITCODE -ne 0) { throw "Postflight verification failed." }

[PSCustomObject]@{
  PreviewHost = $previewUri.Host
  PreflightReport = $preflightReport
  PostflightReport = $postflightReport
  CompletedAt = Get-Date
} | Format-List
