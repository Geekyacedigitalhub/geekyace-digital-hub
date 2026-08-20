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
$verificationSql = Join-Path $releaseRoot "prisma\v3_2_preview_restore_verify.postgres.sql"

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

if (-not $Apply) { throw "No changes were made. Re-run with -Apply after reviewing the preview target." }
foreach ($path in @($previewPath, $productionPath, $verificationSql)) {
  if (-not (Test-Path -LiteralPath $path)) { throw "Required file not found: $path" }
}

$previewUrl = Get-DotEnvValue $previewPath "DATABASE_POSTGRES_URL"
$productionUrl = Get-DotEnvValue $productionPath "DATABASE_POSTGRES_URL"
if (-not $previewUrl -or -not $productionUrl) { throw "Both environment files require DATABASE_POSTGRES_URL." }
if ((Get-SecretFingerprint $previewUrl) -eq (Get-SecretFingerprint $productionUrl)) {
  throw "REFUSED: the preview database URL matches production."
}

$previewUri = [uri]$previewUrl
$productionUri = [uri]$productionUrl
if ($previewUri.Scheme -notin @("postgres", "postgresql")) { throw "Preview is not a direct PostgreSQL URL." }

$psql = Get-Command psql -ErrorAction SilentlyContinue
if (-not $psql) { throw "PostgreSQL 17 psql is required." }
$version = (& $psql.Source --version) -join " "
if ($version -notmatch " 17\.") { throw "PostgreSQL 17 psql is required. Detected: $version" }

Write-Host "Preview host: $($previewUri.Host)"
Write-Host "Production host: $($productionUri.Host)"
Write-Host "The secret fingerprints are different."
$confirmation = Read-Host "Type VERIFY PREVIEW to restore the built-in preview extension and verify the copied tables"
if ($confirmation -cne "VERIFY PREVIEW") { throw "Confirmation did not match. No changes were made." }

New-Item -ItemType Directory -Path $reportDirectory -Force | Out-Null
$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$reportPath = Join-Path $reportDirectory "preview-restore-verification-$timestamp.txt"

& $psql.Source -X $previewUrl -v ON_ERROR_STOP=1 -f $verificationSql | Tee-Object -FilePath $reportPath
if ($LASTEXITCODE -ne 0) { throw "The restored preview database could not be verified." }

[PSCustomObject]@{
  PreviewHost = $previewUri.Host
  VerificationReport = $reportPath
  CompletedAt = Get-Date
} | Format-List
