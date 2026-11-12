import { NextResponse } from "next/server";

/**
 * GET /api/ping-search-engines?secret=...
 *
 * Tells Google and Bing that sitemap.xml has been updated. Call this once
 * after a production deploy. `secret` must match PING_SECRET env var (a
 * weak shared secret so the endpoint can't be trivially abused). If the
 * env var is not set the endpoint returns 404.
 *
 * Google doesn't require pinging anymore (they poll sitemaps), but
 * submitting on deploy makes new pages visible within minutes.
 */
export async function GET(request: Request) {
  const secret = process.env.PING_SECRET;
  if (!secret) return new Response("Not configured.", { status: 404 });

  const url = new URL(request.url);
  if (url.searchParams.get("secret") !== secret) {
    return NextResponse.json({ ok: false, error: "bad secret" }, { status: 401 });
  }

  const sitemap = `${process.env.NEXT_PUBLIC_SITE_URL || "https://geekyacedigitalhub.com"}/sitemap.xml`;
  const results: Record<string, { ok: boolean; status?: number; error?: string }> = {};

  const pings: [string, string][] = [
    ["google", `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemap)}`],
    ["bing",   `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemap)}`],
  ];

  await Promise.all(
    pings.map(async ([name, pingUrl]) => {
      try {
        const r = await fetch(pingUrl, { method: "GET", redirect: "follow" });
        results[name] = { ok: r.ok, status: r.status };
      } catch (e) {
        results[name] = { ok: false, error: (e as Error).message };
      }
    })
  );

  return NextResponse.json({ ok: true, sitemap, results });
}
