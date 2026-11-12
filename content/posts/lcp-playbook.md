---
title: "How we cut LCP from 4.1s to 0.9s on a Next.js storefront"
excerpt: "The exact bundle, image, and streaming changes that moved a client from failing Core Web Vitals to a 98 Lighthouse score."
tag: "Performance"
date: "Nov 4, 2026"
read: "7 min read"
cover: "/images/blog/lcp.jpg"
---

A Shopify merchant came to us with a 4.1s Largest Contentful Paint on mobile and
a paid-search team threatening to pause spend. In six weeks we took it to 0.9s.

## 1. Serve the LCP image from the edge, not Shopify's CDN

Product images on Shopify's CDN were arriving at ~280 KB even at mobile widths.
We rendered the hero with `<Image priority>` and a dedicated `_next/image`
loader that pre-optimizes to AVIF at 75% quality — same visual weight, 92 KB.

## 2. Defer the app shell

The third thing in `<head>` was a 180 KB chat widget. We moved it to a
`requestIdleCallback`-gated loader so it only boots after LCP.

## 3. Stream the page, don't SSR it whole

We switched the PDP to a streaming layout: critical hero + price streamed first,
the recommendation carousel in a Suspense boundary 200ms later.

## Result

Mobile LCP dropped to 0.9s, ad quality score rose 21 points, and conversion rate
climbed **+18%** week over week.
