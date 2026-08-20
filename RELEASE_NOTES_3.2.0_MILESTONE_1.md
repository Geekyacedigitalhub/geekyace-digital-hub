# GeekyAce Digital Hub v3.2.0 — Milestone 1

This milestone establishes the service-discovery and buyer-brief foundation
for v3.2.0. It is a review package, not a production deployment.

## Included

- A premium service marketplace covering 32 buyer-ready services across five
  expert studios and three engagement models.
- Search and filters for service, studio, marketplace category, buyer problem,
  deliverable, and platform terminology.
- 32 generated buyer guides with intended outcomes, ideal-fit signals,
  deliverables, specialist roles, delivery phases, engagement options, FAQs,
  metadata, canonical URLs, and structured data.
- AceMatch 2.0 service-aware planning. A buyer can carry a marketplace service
  into the questionnaire and receive a matching studio, starting squad,
  delivery path, deliverables, and reusable project brief.
- Updated service navigation, footer discovery link, and sitemap coverage.
- Data foundations for proof-checked case studies, richer expert profiles,
  lead attribution, and saved AceMatch briefs.
- Readiness helpers that prevent incomplete expert profiles and unsupported
  case studies from being treated as publishable proof.

## Verification

- TypeScript validation passed.
- Prisma schema validation passed.
- Next.js 16.3 production build passed with 104 generated routes/pages.
- Service search, studio filtering, buyer-guide routing, and AceMatch's complete
  five-step recommendation flow passed browser testing.
- Mobile checks at 390 × 844 passed for the marketplace, a service buyer guide,
  and AceMatch with no horizontal overflow or browser errors.

## Database safety

The v3.2.0 Prisma schema contains additive fields and models that have not been
applied to the production database. The existing migration history contains an
older SQLite-era migration, so do not run `prisma migrate deploy` blindly.

`prisma/v3_2_marketplace_foundation.postgres.sql` is a separate PostgreSQL
review script. Back up the production database, review the script against the
current schema, and test it on a preview database before any production use.

## Still planned for later v3.2.0 milestones

- A verified case-study CMS with evidence, permission, metrics, and concept or
  confidential labels.
- Public expert profile pages connected to complete admin publishing controls.
- A buyer/client portal for briefs, files, status, feedback, and delivery.
- CRM routing, enquiry attribution, automated follow-up, and analytics.
- Consultation booking, proposal/quote workflows, and stronger conversion
  measurement.
- Final accessibility, performance, SEO, database-migration, and deployment QA.

## Deployment status

Not deployed. The live v2.1.0 website remains the production version.
