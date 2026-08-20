[CmdletBinding()]
param(
  [string]$PreviewEnvironmentFile = ".env.preview.local",
  [string]$ProductionEnvironmentFile = ".env.local",
  [string]$BackupPath,
  [switch]$Apply
)

$ErrorActionPreference = "Stop"
$releaseRoot = Split-Path -Parent $PSScriptRoot
$previewPath = Join-Path $releaseRoot $PreviewEnvironmentFile
$productionPath = Join-Path $releaseRoot $ProductionEnvironmentFile
$backupDirectory = Join-Path $releaseRoot "backups"
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
  throw "REFUSED: the preview database URL matches production."
}

$previewUri = [uri]$previewUrl
$productionUri = [uri]$productionUrl
if ($previewUri.Scheme -eq "prisma+postgres") {
  throw "The preview value is an Accelerate URL. Copy the direct PostgreSQL URL (postgres://...@db.prisma.io) with connection pooling turned off."
}
if ($previewUri.Scheme -notin @("postgres", "postgresql")) { throw "Preview is not a direct PostgreSQL URL." }

$psql = Get-Command psql -ErrorAction SilentlyContinue
$pgRestore = Get-Command pg_restore -ErrorAction SilentlyContinue
if (-not $psql -or -not $pgRestore) {
  throw "PostgreSQL 17 command-line tools (psql and pg_restore) are required."
}

foreach ($tool in @($psql, $pgRestore)) {
  $version = (& $tool.Source --version) -join " "
  if ($version -notmatch " 17\.") { throw "PostgreSQL 17 tools are required. Detected: $version" }
}

if (-not $BackupPath) {
  $latestBackup = Get-ChildItem -LiteralPath $backupDirectory -Filter "geekyace-production-*.bak" -File |
    Sort-Object LastWriteTime -Descending |
    Select-Object -First 1
  if (-not $latestBackup) { throw "No production backup was found in $backupDirectory." }
  $BackupPath = $latestBackup.FullName
}

$resolvedBackup = (Resolve-Path -LiteralPath $BackupPath).Path
& $pgRestore.Source --list $resolvedBackup | Out-Null
if ($LASTEXITCODE -ne 0) { throw "The selected backup could not be read by pg_restore." }

$tableCountOutput = & $psql.Source -X $previewUrl -v ON_ERROR_STOP=1 -tA -c "SELECT COUNT(*) FROM pg_tables WHERE schemaname = 'public';"
if ($LASTEXITCODE -ne 0) { throw "Could not inspect the preview database." }
$tableCount = [int](($tableCountOutput | Select-Object -Last 1).Trim())
if ($tableCount -ne 0) {
  throw "REFUSED: the preview database is not empty ($tableCount public tables found)."
}

Write-Host "Preview host: $($previewUri.Host)"
Write-Host "Production host: $($productionUri.Host)"
Write-Host "Backup: $resolvedBackup"
Write-Host "The target is empty and the secret fingerprints are different."
$confirmation = Read-Host "Type RESTORE PREVIEW to copy the backup into the preview database"
if ($confirmation -cne "RESTORE PREVIEW") { throw "Confirmation did not match. No changes were made." }

New-Item -ItemType Directory -Path $reportDirectory -Force | Out-Null
$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$restoreListPath = Join-Path $reportDirectory "preview-restore-list-$timestamp.txt"
$reportPath = Join-Path $reportDirectory "preview-restore-$timestamp.txt"
$verificationSql = Join-Path $releaseRoot "prisma\v3_2_preview_restore_verify.postgres.sql"

& $pgRestore.Source --list $resolvedBackup |
  Where-Object { $_ -notmatch '; .* SCHEMA - public ' -and $_ -notmatch '; .* COMMENT - SCHEMA public ' } |
  Set-Content -LiteralPath $restoreListPath -Encoding UTF8

& $pgRestore.Source --use-list $restoreListPath --no-owner --no-privileges -d $previewUrl -v $resolvedBackup
if ($LASTEXITCODE -ne 0) { throw "Preview restore failed with exit code $LASTEXITCODE." }

& $psql.Source -X $previewUrl -v ON_ERROR_STOP=1 -f $verificationSql | Tee-Object -FilePath $reportPath
if ($LASTEXITCODE -ne 0) { throw "The restored preview database could not be verified." }

[PSCustomObject]@{
  PreviewHost = $previewUri.Host
  BackupPath = $resolvedBackup
  VerificationReport = $reportPath
  CompletedAt = Get-Date
} | Format-List
