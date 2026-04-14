import Link from "next/link";

const footerNav = [
  {
    heading: "Malerarbeiten",
    links: [
      { label: "Innenraum", href: "/malerarbeiten/innenraum" },
      { label: "Aussenraum & Fassade", href: "/malerarbeiten/aussenraum-fassade" },
      { label: "Raumgestaltung", href: "/malerarbeiten/raumgestaltung" },
      { label: "Historische Bauten", href: "/malerarbeiten/historische-bauten" },
      { label: "kt.COLOR", href: "/malerarbeiten/kt-color" },
    ],
  },
  {
    heading: "Spezialarbeiten",
    links: [
      { label: "Schimmelpilzsanierung", href: "/spezialarbeiten/schimmelpilzsanierung" },
      { label: "Gesundes Wohnen", href: "/spezialarbeiten/gesundes-wohnen" },
      { label: "Naturofloor", href: "/spezialarbeiten/naturofloor" },
      { label: "Spritzwerk", href: "/spezialarbeiten/spritzwerk" },
      { label: "Niederdruck-Strahlen", href: "/spezialarbeiten/niederdruck" },
    ],
  },
  {
    heading: "Unternehmen",
    links: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Team", href: "/ueber-uns/team" },
      { label: "Vier Generationen", href: "/ueber-uns/vier-generationen" },
      { label: "Bewertungen", href: "/bewertungen" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white">
      {/* Map + NAP strip */}
      <div className="grid lg:grid-cols-2 min-h-[320px]">
        {/* Google Map embed */}
        <div className="relative min-h-[280px] lg:min-h-0 bg-[var(--ink-light)]">
          <iframe
            title="Malergeschäft Bernhard AG – Standort"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.7395!2d8.6176!3d47.4283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa3c0e6c57b6f%3A0x3d1b5e7a8f2e4c1a!2sS%C3%A4ntisstrasse%2030%2C%208305%20Dietlikon!5e0!3m2!1sde!2sch!4v1690000000000!5m2!1sde!2sch"
            className="absolute inset-0 w-full h-full border-0 grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* NAP */}
        <div className="flex flex-col justify-center px-8 py-10 lg:px-12 bg-[var(--brand-dark)]">
          <div className="flex items-center gap-3 mb-6">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="4" fill="white" fillOpacity="0.12" />
              <path
                d="M22 6L10 18M10 18L8 24L14 22L26 10L22 6Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <span className="font-bold text-lg text-white">Malergeschäft Bernhard AG</span>
            </div>
          </div>

          <address className="not-italic space-y-2 text-white/80 text-[15px]">
            <p>Säntisstrasse 30<br />8305 Dietlikon</p>
            <p>
              <a href="tel:+41448332251" className="hover:text-white transition-colors font-medium">
                +41 44 833 22 51
              </a>
            </p>
            <p>
              <a href="mailto:info@malerbernhard.ch" className="hover:text-white transition-colors">
                info@malerbernhard.ch
              </a>
            </p>
          </address>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=S%C3%A4ntisstrasse+30+8305+Dietlikon"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-semibold text-white/90 hover:text-white underline underline-offset-4 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 1C5.2 1 3 3.2 3 6C3 10 8 15 8 15C8 15 13 10 13 6C13 3.2 10.8 1 8 1ZM8 8C6.9 8 6 7.1 6 6C6 4.9 6.9 4 8 4C9.1 4 10 4.9 10 6C10 7.1 9.1 8 8 8Z" fill="currentColor" />
            </svg>
            Route planen
          </a>

          {/* Social */}
          <div className="flex items-center gap-3 mt-7">
            <a
              href="https://www.facebook.com/109805820406631/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/malerbernhard"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
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
              className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Links grid */}
      <div className="container py-12">
        <div className="grid sm:grid-cols-3 gap-8">
          {footerNav.map((group) => (
            <div key={group.heading}>
              <h4 className="text-[11px] font-bold tracking-[0.14em] uppercase text-white/40 mb-4">
                {group.heading}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-white/65 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container flex flex-col sm:flex-row items-center justify-between py-5 gap-3">
          <p className="text-[12.5px] text-white/40">
            © {new Date().getFullYear()} Malergeschäft Bernhard AG · Gegründet 1911 · 4 Generationen
          </p>
          <div className="flex items-center gap-5">
            <Link href="/impressum" className="text-[12.5px] text-white/40 hover:text-white/70 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-[12.5px] text-white/40 hover:text-white/70 transition-colors">
              Datenschutz
            </Link>
            <span className="text-[11px] font-bold tracking-wide text-white/30 border border-white/10 px-2 py-0.5 rounded">
              SMGV
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
