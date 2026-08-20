CREATE EXTENSION IF NOT EXISTS prisma_postgres;

SELECT
  current_database() AS database_name,
  current_setting('server_version') AS postgres_version,
  CURRENT_TIMESTAMP AS checked_at;

SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
  AND table_type = 'BASE TABLE'
ORDER BY table_name;

SELECT 'TeamMember' AS table_name, COUNT(*) AS row_count FROM "TeamMember"
UNION ALL
SELECT 'Lead' AS table_name, COUNT(*) AS row_count FROM "Lead";

SELECT extname
FROM pg_extension
WHERE extname = 'prisma_postgres';
