import Link from "next/link";

/** Single nav — no duplicate “Alle Leistungen” columns */
const footerLinks = [
  { label: "Malerarbeiten", href: "/malerarbeiten" },
  { label: "Spezialarbeiten", href: "/spezialarbeiten" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Team", href: "/ueber-uns/team" },
  { label: "Ausbildungsbetrieb", href: "/ueber-uns/ausbildungsbetrieb" },
  { label: "Bewertungen", href: "/bewertungen" },
  { label: "Kontakt & Offerte", href: "/kontakt" },
];

export default function Footer() {
  return (
    <footer className="text-white" style={{ background: "var(--brand)" }}>
      {/* Map + NAP */}
      <div className="grid lg:grid-cols-2 min-h-[260px] lg:min-h-[280px]">
        <div className="relative min-h-[220px] lg:min-h-0 bg-[var(--brand-dark)]">
          <iframe
            title="Malergeschäft Bernhard AG – Standort"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.7395!2d8.6176!3d47.4283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa3c0e6c57b6f%3A0x3d1b5e7a8f2e4c1a!2sS%C3%A4ntisstrasse%2030%2C%208305%20Dietlikon!5e0!3m2!1sde!2sch!4v1690000000000!5m2!1sde!2sch"
            className="absolute inset-0 w-full h-full border-0 grayscale opacity-90"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-7 lg:px-10 lg:py-8" style={{ background: "var(--brand)" }}>
          <div className="flex items-center gap-2.5 mb-4">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden>
              <rect width="32" height="32" rx="4" fill="white" fillOpacity="0.15" />
              <path
                d="M22 6L10 18M10 18L8 24L14 22L26 10L22 6Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-bold text-[15px] sm:text-base text-white leading-tight">Malergeschäft Bernhard AG</span>
          </div>

          <address
            className="not-italic space-y-1.5 text-[13.5px]"
            style={{ color: "#ffffff" }}
          >
            {/* Use divs, not p — global `p {}` in globals.css beats any utility on footer text */}
            <div>
              Säntisstrasse 30<br />
              8305 Dietlikon
            </div>
            <div>
              <a
                href="tel:+41448332251"
                className="font-medium hover:opacity-90 transition-opacity"
                style={{ color: "#ffffff" }}
              >
                +41 44 833 22 51
              </a>
            </div>
            <div>
              <a href="mailto:info@malerbernhard.ch" className="hover:opacity-90 transition-opacity" style={{ color: "#ffffff" }}>
                info@malerbernhard.ch
              </a>
            </div>
          </address>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=S%C3%A4ntisstrasse+30+8305+Dietlikon"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-white hover:opacity-90 underline underline-offset-4 transition-opacity"
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M8 1C5.2 1 3 3.2 3 6C3 10 8 15 8 15C8 15 13 10 13 6C13 3.2 10.8 1 8 1ZM8 8C6.9 8 6 7.1 6 6C6 4.9 6.9 4 8 4C9.1 4 10 4.9 10 6C10 7.1 9.1 8 8 8Z" fill="currentColor" />
            </svg>
            Route planen
          </a>

          <div className="flex items-center gap-2 mt-5">
            <a
              href="https://www.facebook.com/109805820406631/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-7 h-7 rounded bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/malerbernhard"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-7 h-7 rounded bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@malerbernhard"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-7 h-7 rounded bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Unified link row */}
      <nav className="border-t border-white/15" aria-label="Fusszeilen-Navigation">
        <div className="container py-5 sm:py-6">
          <ul className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 text-[12.5px] sm:text-[13px]">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/95 hover:text-white hover:underline underline-offset-4 decoration-white/40 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="border-t border-white/15">
        <div className="container flex flex-col sm:flex-row items-center justify-between py-3.5 gap-2.5">
          <div
            className="text-[11.5px] sm:text-[12px] text-center sm:text-left leading-snug"
            style={{ color: "#ffffff" }}
          >
            © {new Date().getFullYear()} Malergeschäft Bernhard AG · Gegründet 1911 · 4 Generationen
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <Link href="/impressum" className="text-[11.5px] sm:text-[12px] text-white hover:opacity-90 transition-opacity">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-[11.5px] sm:text-[12px] text-white hover:opacity-90 transition-opacity">
              Datenschutz
            </Link>
            <span className="text-[10px] font-bold tracking-wide text-white border border-white/35 px-1.5 py-0.5 rounded">
              SMGV
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
