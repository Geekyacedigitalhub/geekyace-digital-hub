// Placeholder — Next.js auto-generates sitemap.xml at the root via app/sitemap.ts,
// but we also expose it at /sitemap-index.xml for tools that expect that name.
import { redirect } from "next/navigation";
export async function GET() { redirect("/sitemap.xml"); }
