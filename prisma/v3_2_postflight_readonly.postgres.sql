-- GeekyAce Digital Hub v3.2.0 postflight.
-- Read-only: run after the migration on preview, and again after production approval.

BEGIN READ ONLY;

SELECT
  table_name,
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns
WHERE table_schema = 'public'
  AND table_name IN (
    'TeamMember', 'Lead', 'AceMatchBrief', 'CaseStudy', 'Client',
    'Project', 'ProjectMilestone', 'ProjectUpdate'
  )
ORDER BY table_name, ordinal_position;

SELECT
  conrelid::regclass::text AS table_name,
  conname AS constraint_name,
  contype AS constraint_type
FROM pg_constraint
WHERE connamespace = 'public'::regnamespace
  AND conrelid::regclass::text IN (
    '"AceMatchBrief"', '"CaseStudy"', '"Client"', '"Project"',
    '"ProjectMilestone"', '"ProjectUpdate"'
  )
ORDER BY table_name, constraint_name;

SELECT
  tablename,
  indexname
FROM pg_indexes
WHERE schemaname = 'public'
  AND tablename IN (
    'TeamMember', 'Lead', 'AceMatchBrief', 'CaseStudy', 'Client',
    'Project', 'ProjectMilestone', 'ProjectUpdate'
  )
ORDER BY tablename, indexname;

SELECT 'AceMatchBrief' AS table_name, COUNT(*) AS row_count FROM "AceMatchBrief"
UNION ALL SELECT 'CaseStudy', COUNT(*) FROM "CaseStudy"
UNION ALL SELECT 'Client', COUNT(*) FROM "Client"
UNION ALL SELECT 'Project', COUNT(*) FROM "Project"
UNION ALL SELECT 'ProjectMilestone', COUNT(*) FROM "ProjectMilestone"
UNION ALL SELECT 'ProjectUpdate', COUNT(*) FROM "ProjectUpdate";

ROLLBACK;
