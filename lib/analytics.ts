// Analytics hook placeholder. Epic 10 wires the real provider (PostHog);
// until then this forwards to window.posthog if present, otherwise no-ops.

declare global {
  interface Window {
    posthog?: { capture: (e: string, p?: Record<string, unknown>) => void };
  }
}

export function trackEvent(name: string, props?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  window.posthog?.capture?.(name, props);
}
