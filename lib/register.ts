// Single source of truth for the register CTA label and app links (PM decision Nov 11, 2026). Change them here only.
export const REGISTER_CTA_LABEL = "Create free account";

// `next dev` (local MacBook) points at the local app; `next build` (Vercel) uses production.
const IS_DEV = process.env.NODE_ENV === "development";

export const SITE_URL = IS_DEV ? "http://localhost:3000" : "https://www.fidurapay.com";
export const APP_URL = IS_DEV ? "https://curo.local" : "https://app.fidurapay.com";
export const REGISTER_URL = `${APP_URL}/register`;
export const SIGN_IN_URL = `${APP_URL}/login`;

export type Persona = "caregiver" | "senior" | "partner" | "general";

// Register link: ?persona= lets the app preselect the signup path; utm_* params from the landing URL pass through.
export function registerHref(persona: Persona = "general", utm?: URLSearchParams | null): string {
  const url = new URL(REGISTER_URL);
  url.searchParams.set("persona", persona);
  utm?.forEach((value, key) => {
    if (key.startsWith("utm_")) url.searchParams.set(key, value);
  });
  return url.toString();
}
