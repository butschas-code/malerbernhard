import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Interessante Links",
  description: "Nützliche Links: Gemeinde Dietlikon, SMGV, Schimex, MPA, VUM und weitere Partner.",
};

const links = [
  {
    name: "Gemeinde Dietlikon",
    url: "https://www.dietlikon.ch",
    desc: "Offizielle Website der Gemeinde Dietlikon",
  },
  {
    name: "gid – Gewerbe Industrie Dietlikon",
    url: "https://www.gewerbedietlikon.ch",
    desc: "Gewerbeverband Dietlikon",
  },
  {
    name: "VUM Zürich",
    url: "https://www.vumzuerich.ch",
    desc: "Verband Unternehmen Maler Zürich",
  },
  {
    name: "VUM Ostschweiz",
    url: "https://www.vumost.ch",
    desc: "Verband Unternehmen Maler Ostschweiz",
  },
  {
    name: "SMGV",
    url: "https://www.smgv.ch",
    desc: "Schweizerischer Maler- und Gipserunternehmer-Verband",
  },
  {
    name: "Schimex – Schimmelpilzsanierer",
    url: "https://www.schimmelpilzsanierer.ch",
    desc: "Spezialist für Schimmelpilzsanierung",
  },
  {
    name: "MPA – Elektrobiologie",
    url: "https://www.mpa-ag.ch",
    desc: "Elektrobiologie und Elektrosmog-Abschirmung",
  },
];

export default function LinksPage() {
  return (
    <>
      <PageHero label="Kontakt" title="Interessante Links" subtitle="Nützliche Partnerseiten und Verbände." />

      <section className="section bg-white">
        <div className="container max-w-2xl">
          <AnimatedSection>
            <span className="brand-rule" />
            <h2 className="mb-10">Partner & Verbände</h2>
          </AnimatedSection>
          <div className="space-y-3">
            {links.map((link, i) => (
              <AnimatedSection key={link.url} delay={i * 0.06}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-5 rounded border border-[var(--line)] hover:border-[var(--brand)] hover:shadow-sm transition-all"
                  style={{ background: "var(--paper)" }}
                >
                  <div>
                    <p style={{ fontWeight: 700, marginBottom: "0.125rem" }}
                      className="group-hover:text-[var(--brand)] transition-colors">
                      {link.name}
                    </p>
                    <p style={{ fontSize: "13.5px", color: "var(--muted)" }}>{link.desc}</p>
                    <p style={{ fontSize: "12px", color: "var(--brand)", marginTop: "0.25rem" }}>{link.url}</p>
                  </div>
                  <svg className="flex-shrink-0 ml-4 opacity-40 group-hover:opacity-100 transition-opacity"
                    width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
