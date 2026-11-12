# Google Search Console + Bing setup (5 minutes)

This site is fully wired for SEO / GEO / AEO. The only thing left to turn it
on for real is to verify the property and submit the sitemap.

## 1. Verify on Google Search Console

1. Open https://search.google.com/search-console
2. Click **Add property**
3. Choose **URL prefix** (not Domain) and enter `https://geekyacedigitalhub.com`
4. Under **Other verification methods → HTML tag**, copy the token — it's the
   `content="..."` value only (no quotes), e.g. `abc123def456_ghi789`.
5. Go to Vercel → Project → **Settings → Environment Variables**
6. Add a variable named `GOOGLE_SITE_VERIFICATION` with that token as value.
   - Select **Production**, **Preview**, **Development** environments.
   - Click Save.
7. Redeploy the site (Vercel → Deployments → pick latest → Redeploy).
8. Back in Search Console click **Verify**. The meta tag is now in the HTML.

### Optional (parallel) — Bing Webmaster Tools

1. Open https://www.bing.com/webmasters
2. Add site → import from Google Search Console (1 click, no extra work)
3. If manual verification is needed, copy the token and add it as
   `BING_SITE_VERIFICATION` in Vercel env vars, then redeploy.

## 2. Submit the sitemap

After verification, in Google Search Console:
- Go to **Sitemaps** (left sidebar)
- Enter `sitemap.xml` (just the filename)
- Click **Submit**

Sitemap URL: https://geekyacedigitalhub.com/sitemap.xml
Also submit to Bing: https://www.bing.com/webmasters/sitemaps

The sitemap includes:
- Home, about, services, solutions, portfolio, showcase, blog, contact
- Every service detail page
- Every industry/solutions page
- Every case study / showcase project
- Every blog post
- Privacy + terms

## 3. (Optional) Auto-ping Google/Bing on every deploy

This makes new pages show up in search within minutes after a deploy.

1. In Vercel generate a random string: `openssl rand -hex 20`
2. Add it as env var `PING_SECRET` in Vercel.
3. In Vercel → Project Settings → **Git → Deploy Hooks**, create a deploy
   hook (it already deploys on push; skip if you want pings only).
4. In Project Settings → **Functions**, no extra config needed.
5. After each deploy call:

```
curl https://geekyacedigitalhub.com/api/ping-search-engines?secret=YOUR_PING_SECRET
```

You can wire that into a GitHub Actions post-deploy step or into
Vercel's Deploy Hooks feature.

## 4. AI / GEO discovery

The following are already live and require no setup:
- `/robots.txt`   — allows all major AI crawlers
- `/sitemap.xml`  — full URL list
- `/llms.txt`     — LLM manifest (llmstxt.org)
- `/ai.txt`       — AI citation manifest
- `/feed.xml`     — RSS
- `/manifest.webmanifest` — PWA manifest
- Schema.org (Organization, WebSite, FAQPage, HowTo, BlogPosting,
  BreadcrumbList, Speakable)
- OpenGraph + Twitter cards (auto-generated OG image)

## 5. What to check after

- https://geekyacedigitalhub.com/robots.txt        → should list Googlebot + AI bots
- https://geekyacedigitalhub.com/sitemap.xml      → valid XML with 50+ URLs
- https://geekyacedigitalhub.com/llms.txt         → plain-text manifest
- https://geekyacedigitalhub.com/ai.txt           → AI citation manifest
- View-source on homepage → search for `google-site-verification` → should appear
- https://search.google.com/test/rich-results     → paste homepage URL, confirm
  Organization, WebSite, FAQPage, HowTo all validate.

## 6. 30-day check-in

- Re-crawl usually takes 3–10 days.
- After 30 days check **Performance** in GSC for impressions,
  **Enhancements → FAQs** for rich-result impressions, and
  **Pages** report for Core Web Vitals.
- Ask Perplexity "who is GeekyAce Digital Hub" — it should cite the site.
