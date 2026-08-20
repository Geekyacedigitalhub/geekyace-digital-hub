function safePublicUrl(value: string | undefined, fallback: string) {
  const url = value?.trim();
  return url?.startsWith("https://") ? url : fallback;
}

export const publicLinks = {
  booking: safePublicUrl(process.env.NEXT_PUBLIC_BOOKING_URL, "/book"),
  fiverr: safePublicUrl(process.env.NEXT_PUBLIC_FIVERR_PROFILE_URL, "/contact?platform=fiverr#contact-form"),
  upwork: safePublicUrl(process.env.NEXT_PUBLIC_UPWORK_PROFILE_URL, "/contact?platform=upwork#contact-form"),
  whatsapp: safePublicUrl(process.env.NEXT_PUBLIC_WHATSAPP_URL, "/contact?channel=whatsapp#contact-form"),
  discord: safePublicUrl(process.env.NEXT_PUBLIC_DISCORD_URL, "/contact?channel=discord#contact-form"),
};

export function isExternalPublicLink(href: string) {
  return href.startsWith("https://");
}
