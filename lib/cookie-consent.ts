/** localStorage key — Swiss cookie choice (FADP / DSG) */
export const COOKIE_CONSENT_STORAGE_KEY = "malerbernhard-cookie-consent";

export type CookieConsentValue = "accepted" | "declined";

export function getStoredCookieConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (v === "accepted" || v === "declined") return v;
  } catch {
    /* ignore */
  }
  return null;
}

export function setStoredCookieConsent(value: CookieConsentValue): void {
  try {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: value }));
}
