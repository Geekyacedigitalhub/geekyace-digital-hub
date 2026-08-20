# GeekyAce Digital Hub v3.2.0 — Localhost Release Candidate

This package completes the planned v3.2 buyer, proof, delivery, and growth
experiences for localhost review. It has not been deployed. The live v2.1.0
website remains unchanged.

## Buyer experience

- Premium marketplace with 32 services, five expert studios, filters, search,
  engagement models, and generated service buyer guides.
- AceMatch project planner with a reusable recommended squad and delivery brief.
- Human-reviewed consultation request and scope-before-price proposal journeys.
- Source, service, studio, and referrer attribution on buyer enquiries.
- Required consent and honeypot protection on new conversion forms.

## Trust and proof

- Evidence-aware proof library with visible Verified, Confidential, and Concept
  classifications.
- Three complete launch stories that avoid invented metrics or client claims.
- Detailed public founder profile and richer publishable team-profile fields.
- Case-study CMS with readiness checks that block incomplete proof from being
  published.
- Person and case-study structured data, canonical metadata, sitemap coverage,
  and client-portal no-index protection.

## Delivery and growth operations

- Clearly labeled fictional client workspace demo with milestones, files,
  updates, feedback, project health, and responsive mobile navigation.
- Protected CRM pipeline with source filtering, status movement, and safe
  localhost preview records when the database is unavailable.
- Protected enquiry analytics for source mix, qualification, proposals, wins,
  and service interest. It does not claim revenue attribution or ROAS.
- Protected case-study and team publishing controls in the admin dashboard.

## Verification completed

- Prisma schema validation passed.
- Next.js 16.3 production build passed, including TypeScript validation.
- 118 pages/routes generated, including all 32 service guides and the new proof,
  expert, booking, proposal, portal, CRM, analytics, and CMS routes.
- Browser QA passed for the proof library, proof detail, founder profile, client
  workspace tabs and local-only feedback, booking form, proposal form, and
  protected dashboard login boundary.
- Mobile QA at 390 × 844 passed for the proof library and client workspace with
  no horizontal overflow.
- Browser console check returned no warnings or errors.
- ESLint passed with zero errors; remaining image-preview warnings are limited
  to authenticated admin previews that intentionally use local Blob/object URLs.
- A fresh Prisma Client was generated from the complete v3.2 schema.
- Security headers, consent enforcement, request-size limits, and endpoint
  throttling were verified locally.

## Database and deployment safety gate

The additive PostgreSQL script at
`prisma/v3_2_marketplace_foundation.postgres.sql` has not been applied. The
existing repository includes older migration history, so do not run
`prisma migrate deploy` blindly.

Before production activation:

1. Back up the production database.
2. Review and run the additive SQL against a preview database first.
3. Run a fresh `npm install` so Prisma Client is generated from the v3.2 schema.
4. Verify the admin CRM, case-study CMS, and team publishing against preview data.
5. Configure authenticated real-client portal access before connecting private
   project information. The localhost portal is intentionally a fictional demo.
6. Run the production build and a preview deployment, then perform a final
   accessibility, forms, email, analytics, and rollback check.

The guarded backup and preview-migration commands, environment requirements,
and acceptance tests are documented in `PRODUCTION_ACTIVATION_3.2.0.md`.

## Deployment status

Not deployed. This release candidate is intended for localhost approval only.
