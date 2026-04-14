"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getStoredCookieConsent, setStoredCookieConsent, type CookieConsentValue } from "@/lib/cookie-consent";

/**
 * Swiss-standard cookie banner: explicit accept / decline (FADP & DSG).
 * Stores choice in localStorage; does not load non-essential third-party scripts until accepted.
 */
export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const existing = getStoredCookieConsent();
    setVisible(existing === null);
  }, []);

  useEffect(() => {
    if (!mounted || !visible) {
      document.documentElement.style.removeProperty("--cookie-banner-offset");
      return;
    }
    const el = ref.current;
    if (!el) return;

    const setOffset = () => {
      const h = el.offsetHeight;
      document.documentElement.style.setProperty("--cookie-banner-offset", `${h}px`);
    };
    setOffset();
    const ro = new ResizeObserver(setOffset);
    ro.observe(el);
    window.addEventListener("resize", setOffset);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setOffset);
      document.documentElement.style.removeProperty("--cookie-banner-offset");
    };
  }, [mounted, visible]);

  function choose(value: CookieConsentValue) {
    setStoredCookieConsent(value);
    setVisible(false);
  }

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={ref}
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-desc"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ type: "spring", damping: 28, stiffness: 320 }}
          className="fixed inset-x-0 bottom-0 z-[60] pointer-events-none"
          style={{
            paddingBottom: "max(0.75rem, env(safe-area-inset-bottom, 0px))",
            paddingLeft: "max(1rem, env(safe-area-inset-left, 0px))",
            paddingRight: "max(1rem, env(safe-area-inset-right, 0px))",
          }}
        >
          <div className="container max-w-4xl mx-auto pointer-events-auto">
            <div
              className="rounded-t-2xl border border-[var(--line)] shadow-[var(--shadow-lg)] bg-[var(--paper)]/95 backdrop-blur-md px-4 py-4 sm:px-6 sm:py-5"
              style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                <div className="flex-1 min-w-0">
                  <h2
                    id="cookie-banner-title"
                    className="text-[15px] sm:text-base font-bold text-[var(--ink)] mb-2 tracking-tight"
                  >
                    Cookies & Datenschutz
                  </h2>
                  <p
                    id="cookie-banner-desc"
                    className="text-[13.5px] sm:text-[14px] leading-relaxed text-[var(--muted)]"
                  >
                    Wir nutzen Cookies und ähnliche Technologien, um diese Website
                    bereitzustellen und zu verbessern. Mit „Alle akzeptieren“
                    stimmen Sie der Verwendung nicht notwendiger Cookies zu
                    (Art. 6 Abs. 1 lit. a DSG bzw. FADP). Mit „Ablehnen“ werden
                    nur technisch notwendige Cookies gesetzt.{" "}
                    <Link
                      href="/datenschutz"
                      className="text-[var(--brand)] font-semibold underline underline-offset-2 hover:opacity-90"
                    >
                      Datenschutzerklärung
                    </Link>
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row sm:flex-col gap-2 sm:min-w-[168px] shrink-0 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => choose("declined")}
                    className="sm:w-full min-h-[44px] px-4 py-2.5 rounded text-[14px] font-semibold border-2 border-[var(--line)] bg-white text-[var(--ink)] hover:bg-[var(--paper-dark)] active:scale-[0.98] transition touch-manipulation"
                  >
                    Ablehnen
                  </button>
                  <button
                    type="button"
                    onClick={() => choose("accepted")}
                    className="sm:w-full min-h-[44px] px-4 py-2.5 rounded text-[14px] font-bold btn btn-primary justify-center shadow-none touch-manipulation"
                  >
                    Alle akzeptieren
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
