// Single source of truth for shipped pages. app/sitemap.ts and components/Footer.tsx read it.
// Add a route here when its page ships. Epic 08 pages (/help, /security, /receive,
// /accessibility, /about) then appear in the footer automatically.
export const LIVE_ROUTES = ["", "/caregivers", "/seniors", "/compare", "/partners", "/pricing", "/contact", "/terms", "/privacy"] as const;

export function isLive(path: string): boolean {
  return (LIVE_ROUTES as readonly string[]).includes(path);
}
