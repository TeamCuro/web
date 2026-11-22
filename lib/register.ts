// Single source of truth for the register CTA label and app links (PM decision Nov 11, 2026). Change them here only.
export const REGISTER_CTA_LABEL = "Create free account";

export const APP_URL = "https://app.fidurapay.com";
export const REGISTER_URL = `${APP_URL}/register`;
export const SIGN_IN_URL = `${APP_URL}/login`;

export type Persona = "caregiver" | "senior";

// Persona-aware register link: ?persona= lets the app preselect the signup path.
export function registerHref(persona?: Persona): string {
  return persona ? `${REGISTER_URL}?persona=${persona}` : REGISTER_URL;
}
