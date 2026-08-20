[CmdletBinding()]
param(
  [string]$EnvironmentFile = ".env.local"
)

$ErrorActionPreference = "Stop"
$releaseRoot = Split-Path -Parent $PSScriptRoot
$environmentPath = Join-Path $releaseRoot $EnvironmentFile
$backupDirectory = Join-Path $releaseRoot "backups"

function Get-DotEnvValue([string]$Path, [string]$Name) {
  $line = Get-Content -LiteralPath $Path | Where-Object {
    $_ -match ("^" + [regex]::Escape($Name) + "=")
  } | Select-Object -First 1

  if (-not $line) { return $null }
  return (($line -split "=", 2)[1]).Trim().Trim('"').Trim("'")
}

if (-not (Test-Path -LiteralPath $environmentPath)) {
  throw "Environment file not found: $environmentPath"
}

$databaseUrl = Get-DotEnvValue $environmentPath "DATABASE_POSTGRES_URL"
if (-not $databaseUrl) { throw "DATABASE_POSTGRES_URL is missing." }

$databaseUri = [uri]$databaseUrl
if ($databaseUri.Scheme -notin @("postgres", "postgresql")) {
  throw "The configured database is not PostgreSQL."
}

$pgDump = Get-Command pg_dump -ErrorAction SilentlyContinue
$pgRestore = Get-Command pg_restore -ErrorAction SilentlyContinue
if (-not $pgDump -or -not $pgRestore) {
  throw "PostgreSQL 17 command-line tools (pg_dump and pg_restore) are required."
}

$version = (& $pgDump.Source --version) -join " "
if ($version -notmatch " 17\.") {
  throw "Prisma Postgres requires PostgreSQL 17 tools. Detected: $version"
}

New-Item -ItemType Directory -Path $backupDirectory -Force | Out-Null
$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$backupPath = Join-Path $backupDirectory "geekyace-production-$timestamp.bak"

& $pgDump.Source -Fc -v -d $databaseUrl -n public -f $backupPath
if ($LASTEXITCODE -ne 0) { throw "pg_dump failed with exit code $LASTEXITCODE." }

& $pgRestore.Source --list $backupPath | Out-Null
if ($LASTEXITCODE -ne 0) { throw "The backup could not be read by pg_restore." }

$backup = Get-Item -LiteralPath $backupPath
$hash = Get-FileHash -LiteralPath $backupPath -Algorithm SHA256

[PSCustomObject]@{
  BackupPath = $backup.FullName
  Bytes = $backup.Length
  SHA256 = $hash.Hash
  DatabaseHost = $databaseUri.Host
  CreatedAt = $backup.LastWriteTime
} | Format-List
