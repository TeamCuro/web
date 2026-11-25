// Single source of truth for shipped pages. app/sitemap.ts and components/Footer.tsx read it.
// Add a route + its date when a page ships (Epic 08 pages: /help, /security, /receive,
// /accessibility, /about); they then appear in the footer automatically.
// Value = last significant content change (ISO 8601). Bump it only when the page's visible
// content changes meaningfully, not for metadata or refactor edits.
export const ROUTE_LAST_MODIFIED = {
  "": "2026-11-23T18:23:04+05:00",
  "/caregivers": "2026-11-23T18:23:04+05:00",
  "/seniors": "2026-11-23T18:23:04+05:00",
  "/compare": "2026-11-23T18:23:04+05:00",
  "/partners": "2026-11-23T18:23:04+05:00",
  "/pricing": "2026-11-23T18:23:04+05:00",
  "/contact": "2026-11-22T18:53:26+05:00",
  "/terms": "2026-11-23T19:19:19+05:00",
  "/privacy": "2026-11-23T19:19:19+05:00",
} as const satisfies Record<string, string>;

export const LIVE_ROUTES = Object.keys(ROUTE_LAST_MODIFIED);

export function isLive(path: string): boolean {
  return LIVE_ROUTES.includes(path);
}
