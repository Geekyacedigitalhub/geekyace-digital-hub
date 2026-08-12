import crypto from "crypto";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "";
const ADMIN_SESSION_SECRET =
  process.env.ADMIN_SESSION_SECRET ?? "";

const SESSION_COOKIE_NAME = "geekyace_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

function createSignature(value: string): string {
  return crypto
    .createHmac("sha256", ADMIN_SESSION_SECRET)
    .update(value)
    .digest("hex");
}

export function validateAdminCredentials(
  email: string,
  password: string
): boolean {
  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    console.error(
      "ADMIN_EMAIL or ADMIN_PASSWORD is missing from environment variables."
    );

    return false;
  }

  return (
    email.trim().toLowerCase() ===
      ADMIN_EMAIL.trim().toLowerCase() &&
    password === ADMIN_PASSWORD
  );
}

export function createAdminSession(): string {
  if (!ADMIN_SESSION_SECRET) {
    throw new Error(
      "ADMIN_SESSION_SECRET is missing from environment variables."
    );
  }

  const timestamp = Date.now().toString();
  const signature = createSignature(timestamp);

  return `${timestamp}.${signature}`;
}

export function getAdminSessionCookieName(): string {
  return SESSION_COOKIE_NAME;
}

export function getAdminSessionCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: SESSION_MAX_AGE,
  };
}

export function isAdminAuthenticated(
  session: string | undefined
): boolean {
  if (!session || !ADMIN_SESSION_SECRET) {
    return false;
  }

  const parts = session.split(".");

  if (parts.length !== 2) {
    return false;
  }

  const [timestamp, signature] = parts;

  if (!timestamp || !signature) {
    return false;
  }

  const timestampNumber = Number(timestamp);

  if (!Number.isFinite(timestampNumber)) {
    return false;
  }

  const age = Date.now() - timestampNumber;

  if (age < 0 || age > SESSION_MAX_AGE * 1000) {
    return false;
  }

  const expectedSignature = createSignature(timestamp);

  const providedBuffer = Buffer.from(signature, "utf8");
  const expectedBuffer = Buffer.from(
    expectedSignature,
    "utf8"
  );

  if (providedBuffer.length !== expectedBuffer.length) {
    return false;
  }

  try {
    return crypto.timingSafeEqual(
      providedBuffer,
      expectedBuffer
    );
  } catch {
    return false;
  }
}