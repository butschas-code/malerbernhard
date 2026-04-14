"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {
    label: "Malerarbeiten",
    href: "/malerarbeiten/innenraum",
    children: [
      { label: "Innenraum", href: "/malerarbeiten/innenraum" },
      { label: "Aussenraum & Fassade", href: "/malerarbeiten/aussenraum-fassade" },
      { label: "Raumgestaltung", href: "/malerarbeiten/raumgestaltung" },
      { label: "Historische Bauten", href: "/malerarbeiten/historische-bauten" },
      { label: "kt.COLOR", href: "/malerarbeiten/kt-color" },
    ],
  },
  {
    label: "Spezialarbeiten",
    href: "/spezialarbeiten/schimmelpilzsanierung",
    children: [
      { label: "Schimmelpilzsanierung", href: "/spezialarbeiten/schimmelpilzsanierung" },
      { label: "Gesundes Wohnen", href: "/spezialarbeiten/gesundes-wohnen" },
      { label: "Naturofloor", href: "/spezialarbeiten/naturofloor" },
      { label: "Spritzwerk", href: "/spezialarbeiten/spritzwerk" },
      { label: "Niederdruck-Strahlen", href: "/spezialarbeiten/niederdruck" },
    ],
  },
  {
    label: "Über uns",
    href: "/ueber-uns",
    children: [
      { label: "Maler Bernhard", href: "/ueber-uns" },
      { label: "Team", href: "/ueber-uns/team" },
      { label: "Vier Generationen", href: "/ueber-uns/vier-generationen" },
      { label: "Philosophie", href: "/ueber-uns/philosophie" },
      { label: "TOP-Ausbildungsbetrieb", href: "/ueber-uns/top-ausbildungsbetrieb" },
      { label: "Leistungssport", href: "/ueber-uns/leistungssport" },
      { label: "Kultur & Sport", href: "/ueber-uns/kultur-sport" },
      { label: "Knowhow", href: "/ueber-uns/knowhow" },
    ],
  },
  {
    label: "Kontakt",
    href: "/kontakt",
    children: [
      { label: "Kontakt", href: "/kontakt" },
      { label: "Anfrage stellen", href: "/kontakt/anfrage" },
      { label: "Links", href: "/kontakt/links" },
    ],
  },
  {
    label: "Bewertungen",
    href: "/bewertungen",
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  const NAV_BG = "#224f9d";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={{
        background: NAV_BG,
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.25)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Malergeschäft Bernhard AG"
              style={{ height: "42px", width: "auto", display: "block" }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" role="navigation">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3.5 py-2 rounded text-[14px] font-medium transition-opacity"
                  style={{ color: "white" }}
                >
                  {item.label}
                  {item.children && (
                    <svg
                      className="inline ml-1"
                      style={{ opacity: 0.6 }}
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                    >
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  )}
                </Link>

                {item.children && (
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-52 rounded border border-[var(--line)] shadow-xl overflow-hidden"
                        style={{ background: "white" }}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-2.5 text-[13.5px] font-medium transition-colors hover:bg-[var(--paper)] hover:text-[var(--brand)] ${
                              isActive(child.href) ? "text-[var(--brand)] bg-[var(--paper)]" : "text-[var(--ink)]"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/kontakt/anfrage"
              className="hidden md:inline-flex items-center gap-2 font-bold text-[13.5px] px-5 py-2.5 rounded transition-all duration-200 hover:scale-[1.03] hover:shadow-lg active:scale-[0.98]"
              style={{
                background: "var(--brand-red)",
                color: "white",
                boxShadow: "0 2px 10px rgba(200,16,46,0.45)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              Offerte anfragen
            </Link>

            <button
              className="lg:hidden p-2 rounded text-white"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menü öffnen"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                {mobileOpen ? (
                  <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                ) : (
                  <>
                    <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="3" y1="15" x2="19" y2="15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{ background: "#1a3f80", borderTop: "1px solid rgba(255,255,255,0.15)" }}
          >
            <div className="container py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    className="w-full text-left px-3 py-2.5 text-[15px] font-semibold text-white flex items-center justify-between"
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    {item.children && (
                      <svg
                        className={`w-4 h-4 transition-transform text-white/60 ${openDropdown === item.label ? "rotate-180" : ""}`}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    )}
                  </button>

                  {item.children && openDropdown === item.label && (
                    <div className="pl-4 space-y-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-[14px] text-white/65 hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {!item.children && (
                    <Link
                      href={item.href}
                      className="block px-3 py-2.5 text-[15px] font-semibold text-white"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-3">
                <Link
                  href="/kontakt/anfrage"
                  className="flex items-center justify-center gap-2 w-full font-bold text-[14px] py-3 rounded"
                  style={{ background: "var(--brand-red)", color: "white" }}
                >
                  Offerte anfragen
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
