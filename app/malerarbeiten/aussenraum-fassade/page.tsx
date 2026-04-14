import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Aussenraum & Fassade",
  description:
    "Fassadenschutz, Fassadenrenovation und Holzwerk-Auffrischungen. Professionelle Aussenmalerarbeiten im Grossraum Zürich.",
};

const services = [
  "Fassadenschutz und Fassadenrenovation",
  "Riss-Sanierung an Aussenwänden",
  "Holzwerk-Auffrischungen (Dachgebälk, Fachwerk, Läden)",
  "Spritz- oder Kunstharzarbeiten (Läden, Türen, Gartentore)",
  "Reinigung und Untergrundvorbereitung",
  "Wärmedämmverbundsysteme (WDVS)",
];

export default function AussenraumPage() {
  return (
    <>
      <PageHero
        label="Malerarbeiten"
        title="Aussenraum & Fassade"
        subtitle="Schutz- und Werterhaltung — Verfeinerung und Schmuck. Mit unserem qualifizierten Team führen wir auch grössere Fassadenrenovationen fachgerecht aus."
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
      />

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <span className="brand-rule" />
              <h2 className="mb-6">Schutz und Werterhaltung</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Die Fassade Ihres Gebäudes ist täglich Witterungseinflüssen ausgesetzt.
                Eine professionell durchgeführte Fassadenrenovation schützt nicht nur
                die Substanz, sondern steigert auch den Wert Ihrer Liegenschaft.
              </p>
              <p className="text-[17px] leading-relaxed mb-4">
                Wir garantieren fachgerechte Qualitätsarbeit mit Liebe zum Detail —
                von der sorgfältigen Untergrundbehandlung bis zum abschliessenden
                Qualitätskontrollgang mit dem Kunden.
              </p>
              <p className="text-[17px] leading-relaxed">
                Unser Einsatzgebiet umfasst den Grossraum Zürich und Flughafenregion:
                Wallisellen, Opfikon, Kloten, Bassersdorf, Brüttisellen, Wangen,
                Dübendorf, Effretikon und Winterthur.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <h3 className="mb-6 text-[1.2rem]">Unsere Aussenarbeiten</h3>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s} className="flex items-start gap-3" style={{ fontSize: "15.5px" }}>
                    <svg className="mt-0.5 flex-shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="var(--brand)" strokeWidth="1.5" />
                      <path d="M5 8l2.5 2.5 4-4" stroke="var(--brand)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
              "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&q=80",
              "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80",
              "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
              "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
              "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
            ].map((src, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="rounded overflow-hidden aspect-square">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`Fassade Projekt ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="mb-4">Fassade renovieren lassen?</h2>
            <p style={{ fontSize: "17px", color: "var(--muted)", marginBottom: "2rem" }}>
              Verlangen Sie ein unverbindliches Angebot. Wir besichtigen Ihr Objekt persönlich.
            </p>
            <Link href="/kontakt/anfrage" className="btn btn-primary">
              Offerte anfragen
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
