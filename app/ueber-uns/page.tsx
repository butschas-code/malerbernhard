import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Über uns – Maler Bernhard",
  description:
    "Malergeschäft Bernhard AG – gegründet 1911, geführt in der 4. Generation. 12 qualifizierte Fachkräfte, TOP-Ausbildungsbetrieb, Dietlikon.",
};

const subpages = [
  { href: "/ueber-uns/team", label: "Team", desc: "Unsere 18 Fachkräfte und Lernenden" },
  { href: "/ueber-uns/vier-generationen", label: "Vier Generationen", desc: "Seit 1911 in der Familie Bernhard" },
  { href: "/ueber-uns/philosophie", label: "Philosophie", desc: "Unser Leistungsversprechen" },
  { href: "/ueber-uns/top-ausbildungsbetrieb", label: "TOP-Ausbildungsbetrieb", desc: "Ausgezeichnete Berufsbildung" },
  { href: "/ueber-uns/leistungssport", label: "Leistungssport", desc: "Swiss Olympic zertifiziert" },
  { href: "/ueber-uns/kultur-sport", label: "Kultur & Sport", desc: "Engagiert für Dietlikon" },
  { href: "/ueber-uns/knowhow", label: "Knowhow", desc: "Zertifikate und Auszeichnungen" },
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        label="Über uns"
        title="Maler Bernhard"
        subtitle="Fundiertes Handwerk. Faszinierende Vielfalt. Gegründet 1911 — heute in der 4. Generation."
        image="https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=1200&q=80"
      />

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <span className="brand-rule" />
              <h2 className="mb-6">Das gesamte Spektrum</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Das Malergeschäft Bernhard AG umfasst das gesamte Spektrum der
                Oberflächengestaltung und -beschichtung mit einer faszinierenden
                Vielfalt von Gestaltungsmöglichkeiten.
              </p>
              <p className="text-[17px] leading-relaxed mb-4">
                12 ausgewiesene Fachkräfte — darunter diplomierte Meistermaler,
                Vorarbeiter, Kundenmaler und Lernende — setzen Ihre Projekte mit
                Präzision und Leidenschaft um.
              </p>
              <p className="text-[17px] leading-relaxed mb-6">
                Bei grösseren Objekten arbeiten wir eng mit unserem Partner
                Aeschbach & Co. zusammen, um auch umfangreiche Projekte termingerecht
                und in höchster Qualität umzusetzen.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Familienbetrieb", "Seit 1911", "Dietlikon", "Glatttal", "SMGV"].map((s) => (
                  <span key={s} className="stamp">{s}</span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="relative aspect-[4/5] rounded overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80"
                  alt="Malerarbeiten"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Subpages navigation */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container">
          <AnimatedSection>
            <h2 className="mb-10">Mehr über uns</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subpages.map((page, i) => (
              <AnimatedSection key={page.href} delay={i * 0.06}>
                <Link
                  href={page.href}
                  className="group block bg-white rounded border border-[var(--line)] p-6 hover:border-[var(--brand)] hover:shadow-md transition-all duration-200"
                >
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.5rem" }}
                    className="group-hover:text-[var(--brand)] transition-colors">
                    {page.label}
                  </h3>
                  <p style={{ fontSize: "14px", color: "var(--muted)" }}>{page.desc}</p>
                  <span className="inline-flex items-center gap-1 mt-3"
                    style={{ fontSize: "13px", fontWeight: 600, color: "var(--brand)" }}>
                    Lesen
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
