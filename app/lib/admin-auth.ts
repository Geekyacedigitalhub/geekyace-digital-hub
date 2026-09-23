import crypto from "crypto";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "";
const ADMIN_SESSION_SECRET = process.env.ADMIN_SESSION_SECRET ?? "";

const SESSION_COOKIE_NAME = "__Host-geekyace_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

function createSignature(value: string): string {
  return crypto.createHmac("sha256", ADMIN_SESSION_SECRET).update(value).digest("hex");
}

function safeEqual(left: string, right: string): boolean {
  const leftBuffer = Buffer.from(left, "utf8");
  const rightBuffer = Buffer.from(right, "utf8");
  if (leftBuffer.length !== rightBuffer.length) return false;
  return crypto.timingSafeEqual(leftBuffer, rightBuffer);
}

export function validateAdminCredentials(email: string, password: string): boolean {
  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    console.error("ADMIN_EMAIL or ADMIN_PASSWORD is missing from environment variables.");
    return false;
  }

  return (
    safeEqual(email.trim().toLowerCase(), ADMIN_EMAIL.trim().toLowerCase()) &&
    safeEqual(password, ADMIN_PASSWORD)
  );
}

export function createAdminSession(): string {
  if (!ADMIN_SESSION_SECRET) throw new Error("ADMIN_SESSION_SECRET is missing from environment variables.");
  const timestamp = Date.now().toString();
  return `${timestamp}.${createSignature(timestamp)}`;
}

export function getAdminSessionCookieName(): string {
  return SESSION_COOKIE_NAME;
}

export function getAdminSessionCookieOptions() {
  return { httpOnly: true, secure: true, sameSite: "lax" as const, path: "/", maxAge: SESSION_MAX_AGE };
}

export function isAdminAuthenticated(session: string | undefined): boolean {
  if (!session || !ADMIN_SESSION_SECRET) return false;
  const parts = session.split(".");
  if (parts.length !== 2) return false;
  const [timestamp, signature] = parts;
  if (!timestamp || !signature) return false;

  const timestampNumber = Number(timestamp);
  if (!Number.isFinite(timestampNumber)) return false;

  const age = Date.now() - timestampNumber;
  if (age < 0 || age > SESSION_MAX_AGE * 1000) return false;

  return safeEqual(signature, createSignature(timestamp));
}