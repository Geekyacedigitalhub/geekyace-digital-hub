---
title: "Shopify app store launch checklist: the 12 things we won't skip"
excerpt: "Billing, webhook idempotency, embedded App Bridge routing, GDPR webhooks — the gotchas we've learned from three live listings."
tag: "Shopify"
date: "Oct 10, 2026"
read: "9 min read"
cover: "/images/blog/shopify.jpg"
---

After three public listings and a lot of rejected reviews, here's the list we
run every app through before submission.

1. **GDPR webhooks** implemented and returning 200 within 5 seconds.
2. **Billing** retries with a 3-day grace window.
3. **Webhook idempotency** keys stored in Postgres — Shopify resends.
4. **App Bridge 3.x** routing — no hard page reloads inside the iframe.
5. **Polaris v13** components for everything a merchant clicks.
6. **Theme app extension** install works on Dawn, Prestige, and Refresh.
7. **Scope minimization** — don't ask for `read_orders` if you don't need it.
8. **Uninstall cleanup** webhook nulls out shop tokens.
9. **Loading states** on every async action (reviewers hammer the slow-network case).
10. **Accessibility** — every focusable element has a label.
11. **No console errors** in embedded mode.
12. **Demo credentials** supplied to the review team, with a 2-minute loom walkthrough.

Skip any of these and you're looking at a 2-week rejection cycle.
