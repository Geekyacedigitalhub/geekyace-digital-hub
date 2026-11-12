import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GeekyAce Digital Hub — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg,#020617 0%,#064e3b 55%,#0f172a 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "linear-gradient(135deg,#4ade80,#10b981)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
              color: "#052e16",
            }}
          >
            G
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: 2, color: "#86efac" }}>
            GEEKYACE DIGITAL HUB
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 78, fontWeight: 900, lineHeight: 1.05, letterSpacing: -2 }}>
            I build digital products<br />
            <span style={{ background: "linear-gradient(90deg,#4ade80,#10b981)", WebkitBackgroundClip: "text", color: "transparent" }}>
              that solve real problems.
            </span>
          </div>
          <div style={{ fontSize: 28, color: "#94a3b8", maxWidth: 780, lineHeight: 1.4 }}>
            Full-stack development agency · Worldwide · Shopify · AI · SaaS · Automation
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["Next.js", "React", "Shopify", "AI", "Prisma", "TypeScript"].map((t) => (
              <div key={t} style={{ padding: "8px 18px", borderRadius: 999, border: "1px solid #4ade8055", color: "#bbf7d0", fontSize: 20, fontWeight: 600 }}>
                {t}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 20, color: "#86efac", fontWeight: 700 }}>
            geekyacedigitalhub.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
