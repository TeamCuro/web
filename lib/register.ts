// Single source of truth for the register CTA label and app links (PM decision Nov 11, 2026). Change them here only.
export const REGISTER_CTA_LABEL = "Create free account";

export const APP_URL = "https://app.fidurapay.com";
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
