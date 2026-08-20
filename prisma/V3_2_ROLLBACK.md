# v3.2 database rollback strategy

The v3.2 migration is additive: it adds columns, indexes, and new tables without
removing or renaming the v2.1 data model. If a deployment fails, the safest
first response is to roll the application back to the last v2.1 deployment and
leave the additive database objects in place.

Do not drop the v3.2 tables or columns after real v3.2 submissions have been
accepted. Doing so would delete leads, proof records, client records, or project
data.

Before migration:

1. Confirm a recent Prisma Postgres automated snapshot exists.
2. Create a PostgreSQL 17 custom-format `pg_dump` backup.
3. Record the deployment and backup timestamps.
4. Run `v3_2_preflight_readonly.postgres.sql` and save its output.

If preview migration fails, the SQL transaction rolls back automatically.

If production application verification fails:

1. Redeploy or promote the last known-good v2.1 deployment.
2. Stop new v3.2 form traffic if data correctness is uncertain.
3. Diagnose with the postflight report and application logs.
4. Restore the database snapshot or `pg_dump` only when data corruption or an
   incompatible database change is confirmed. Restoration overwrites data and
   must be approved separately at the moment it is needed.

Never test a restore by overwriting the production database. Restore into a
separate preview database and verify row counts and critical records there.
