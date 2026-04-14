import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Spritzwerk",
  description:
    "Professionelles Spritzwerk für Einzelanfertigungen und Kleinserien. Möbel, Geländer, Türen, Küchen. Malergeschäft Bernhard AG.",
};

const items = [
  "Möbel und Kleinteile",
  "Geländer und Handläufe",
  "Türen und Fensterläden",
  "Einbauteile und Regale",
  "Küchenkombinationen",
  "Schrankfronten",
  "Gartentische und -möbel",
];

export default function SpritzwerkPage() {
  return (
    <>
      <PageHero
        label="Spezialarbeiten"
        title="Spritzwerk"
        subtitle="Ideal für Einzelanfertigungen und Kleinserien. Professionell lackiert — für makellose Oberflächen."
        image="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=1200&q=80"
      />

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <span className="brand-rule" />
              <h2 className="mb-6">Präzision auf kleinstem Raum</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Mit unserem Fördersystem ermöglichen wir eine effiziente
                Einzel-Schritt-Produktion für Kleinserien und Einzelstücke. Jedes
                Teil wird sorgfältig gereinigt, vorbereitet und lackiert.
              </p>
              <p className="text-[17px] leading-relaxed mb-4">
                Unsere eigene Farbmischanlage erlaubt es uns, exakt die gewünschte
                Farbe zu treffen — nach RAL, NCS oder Ihrer individuellen Farbangabe.
              </p>
              <p className="text-[17px] leading-relaxed">
                Die professionelle Oberflächenreinigung erfolgt mit unserem
                Niederdruckstrahler, der selbst hartnäckige Farbschichten
                schonend entfernt.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <h3 className="mb-5 text-[1.1rem]">Objekte, die wir bearbeiten</h3>
              <ul className="space-y-3 mb-8">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3" style={{ fontSize: "15.5px" }}>
                    <svg className="mt-0.5 flex-shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="var(--brand)" strokeWidth="1.5" />
                      <path d="M5 8l2.5 2.5 4-4" stroke="var(--brand)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ background: "var(--paper)", borderRadius: "4px", padding: "1.25rem" }}>
                <p style={{ fontSize: "13.5px", fontWeight: 700, marginBottom: "0.25rem" }}>
                  Eigene Farbmischanlage
                </p>
                <p style={{ fontSize: "13.5px", color: "var(--muted)", lineHeight: 1.6 }}>
                  RAL · NCS · individuelle Farbcodes · passgenaue Farbabstimmung
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="mb-4">Objekt neu lackieren lassen?</h2>
            <p style={{ fontSize: "17px", color: "var(--muted)", marginBottom: "2rem" }}>
              Kontaktieren Sie uns — wir beraten Sie gerne und erstellen ein Angebot.
            </p>
            <Link href="/kontakt/anfrage" className="btn btn-primary">Anfrage stellen</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
