export const dynamic = "force-static";

export async function GET() {
  const body = `Contact: mailto:hello@geekyacedigitalhub.com
Contact: https://geekyacedigitalhub.com/contact
Expires: 2027-12-31T23:59:59Z
Preferred-Languages: en
Canonical: https://geekyacedigitalhub.com/.well-known/security.txt
Policy: https://geekyacedigitalhub.com/terms
`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
