import { useEffect, useState } from "react";
import { registerHref, type Persona } from "./register";

const STORAGE_KEY = "fidura_utm";

// Client only. Landing-URL utm_* params win and are stored; otherwise fall back to the stored ones.
export function captureUtm(): URLSearchParams {
  const found = new URLSearchParams();
  if (typeof window === "undefined") return found;
  new URLSearchParams(window.location.search).forEach((value, key) => {
    if (key.startsWith("utm_") && value) found.set(key, value);
  });
  try {
    const query = found.toString();
    if (query) {
      window.sessionStorage.setItem(STORAGE_KEY, query);
      return found;
    }
    return new URLSearchParams(window.sessionStorage.getItem(STORAGE_KEY) ?? "");
  } catch {
    return found;
  }
}

// Initial value matches SSR markup; UTMs are added after mount.
export function useRegisterHref(persona?: Persona): string {
  const [href, setHref] = useState(() => registerHref(persona));
  useEffect(() => {
    setHref(registerHref(persona, captureUtm()));
  }, [persona]);
  return href;
}
