-- GeekyAce Digital Hub v3.2.0 preflight.
-- Read-only: run this before the migration and save the output with the release record.

BEGIN READ ONLY;

SELECT
  current_database() AS database_name,
  current_setting('server_version') AS postgres_version,
  CURRENT_TIMESTAMP AS checked_at;

SELECT
  table_name,
  column_name,
  data_type,
  is_nullable
FROM information_schema.columns
WHERE table_schema = 'public'
  AND table_name IN ('TeamMember', 'Lead')
ORDER BY table_name, ordinal_position;

SELECT 'TeamMember' AS table_name, COUNT(*) AS row_count FROM "TeamMember"
UNION ALL
SELECT 'Lead' AS table_name, COUNT(*) AS row_count FROM "Lead";

SELECT
  target.name AS target_table,
  to_regclass(format('public.%I', target.name)) AS existing_relation
FROM (VALUES
  ('AceMatchBrief'),
  ('CaseStudy'),
  ('Client'),
  ('Project'),
  ('ProjectMilestone'),
  ('ProjectUpdate')
) AS target(name)
ORDER BY target.name;

SELECT
  indexname,
  indexdef
FROM pg_indexes
WHERE schemaname = 'public'
  AND tablename IN ('TeamMember', 'Lead')
ORDER BY tablename, indexname;

ROLLBACK;
