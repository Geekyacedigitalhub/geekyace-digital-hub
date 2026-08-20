# GeekyAce Digital Hub v3.2.0 production activation

The application is ready for a provider-connected preview. Production is not
yet migrated or redeployed.

## Confirmed locally

- Fresh Prisma Client generated from the v3.2 schema.
- Prisma schema validation passed.
- ESLint passed with zero errors.
- Next.js production build passed with 118 routes.
- Consent gates, request-size limits, endpoint throttling, security headers,
  privacy disclosure, responsive layouts, and browser-console checks passed.
- The migration is additive and wrapped in one PostgreSQL transaction.
- Read-only preflight and postflight SQL reports are included.

## Provider actions required before preview deployment

1. In the Prisma Console, confirm that a recent automated production snapshot
   exists. Prisma Postgres snapshots are available from the database Backups tab
   on supported plans.
2. Install PostgreSQL 17 command-line tools. Prisma Postgres runs PostgreSQL 17,
   so `pg_dump`, `pg_restore`, and `psql` must report version 17.
3. Create the manual production backup from this folder:

   ```powershell
   .\scripts\v3_2_database_backup.ps1
   ```

4. Create a separate Prisma Postgres database for preview testing. Never use the
   production database for Vercel Preview deployments.
5. Set the preview database URL in `.env.preview.local`. Copy the verified
   production backup into the new, empty preview database first. The guarded
   restore script refuses production, refuses a non-empty preview target, and
   requires an exact confirmation phrase:

   ```powershell
   .\scripts\v3_2_preview_restore.ps1 -Apply
   ```

   If the restore completed but its final verification was interrupted, run
   the guarded verification helper before continuing:

   ```powershell
   .\scripts\v3_2_preview_restore_verify.ps1 -Apply
   ```

6. Apply the additive v3.2 migration to preview. The guarded migration script
   also refuses to run if the URL matches `.env.local`:

   ```powershell
   .\scripts\v3_2_preview_migrate.ps1 -Apply
   ```

7. In the Vercel project Storage tab, create a **Public** Blob store for public
   team headshots and connect it to Preview and Production. This adds
   `BLOB_READ_WRITE_TOKEN`. Do not use this public store for private client files.
8. Verify the sending domain in Resend. Add these Vercel variables separately
   for Preview and Production:

   - `CONTACT_FROM_EMAIL` — for example,
     `GeekyAce Digital Hub <hello@geekyacedigitalhub.com>`
   - `CONTACT_TO_EMAIL` — the monitored enquiry inbox

9. Ensure the Vercel Preview database values are different from Production.
   Pull Preview into `.env.preview.local` and let the guard script compare the
   complete values without printing them.

## Preview acceptance tests

- Admin login throttles repeated failures and keeps its cookie HTTP-only.
- A real test team profile uploads to Vercel Blob, can be unpublished, edited,
  replaced, and removed without a broken image.
- Contact email arrives from the verified domain and Reply-To uses the buyer's
  validated address.
- Booking, proposal, contact, and AI leads appear once in CRM with correct
  source, consent, service, and studio fields.
- Case-study CMS blocks unsupported proof and allows a complete draft to publish.
- Client workspace remains demo-only until real client authentication and
  authorization are separately implemented and reviewed.
- No private client documents are stored in the public team-image Blob store.
- Mobile, keyboard, screen-reader labels, forms, headers, console, and rollback
  behavior pass on the Vercel Preview URL.

## Rollback

See `prisma/V3_2_ROLLBACK.md`. Because the schema change is additive, roll the
application back to v2.1 first. Restore a database only after separate approval;
restoration overwrites data created after the backup.

## Production gate

Do not run the SQL against production and do not use `vercel --prod` until the
preview migration and every acceptance test above pass.
