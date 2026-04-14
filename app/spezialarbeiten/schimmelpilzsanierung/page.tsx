import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Schimmelpilzsanierung",
  description:
    "Langfristige und fungizidfreie Sanierung von Schimmelpilzbefall mit natürlichen mineralischen Baustoffen (SCHIMEX). Malergeschäft Bernhard AG, Dietlikon.",
};

export default function SchimmelpilzsanierungPage() {
  return (
    <>
      <PageHero
        label="Spezialarbeiten"
        title="Schimmelpilzsanierung"
        subtitle="Langfristige und fungizidfreie Sanierung von Schimmelpilzbefall. Gesund wohnen — nachhaltig saniert."
        image="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80"
      />

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <span className="brand-rule" />
              <h2 className="mb-6">Schimmelpilz — ein ernstes Problem</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Schimmelpilzbefall in Wohnräumen ist nicht nur unästhetisch, sondern
                kann auch die Gesundheit der Bewohner ernsthaft beeinträchtigen. Eine
                fachgerechte Sanierung ist zwingend notwendig.
              </p>
              <p className="text-[17px] leading-relaxed mb-4">
                Mit unserer Spezialisierung auf <strong>SCHIMEX</strong> bieten wir
                eine langfristige, fungizidfreie Sanierung mit natürlichen mineralischen
                Baustoffen. Diese schaffen ein optimales, schimmelresistentes Raumklima
                ohne chemische Mittel.
              </p>
              <p className="text-[17px] leading-relaxed mb-6">
                Wir sanieren den Schimmelbefall gründlich, beseitigen die Ursachen und
                sorgen für ein dauerhaft gesundes Wohnklima.
              </p>

              <div style={{ background: "var(--paper)", borderRadius: "4px", padding: "1.5rem", borderLeft: "3px solid var(--brand-red)" }}>
                <p style={{ fontSize: "14.5px", fontWeight: 600 }}>
                  Spezialist SCHIMEX
                </p>
                <p style={{ fontSize: "14px", color: "var(--muted)", marginTop: "0.5rem", lineHeight: 1.6 }}>
                  Natürliche, mineralische Baustoffe · Fungizidfreie Methode ·
                  Langfristig wirksam · Gesundes Raumklima
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <h3 className="mb-5 text-[1.1rem]">Unser Vorgehen</h3>
              {[
                { n: "1", title: "Befundaufnahme", text: "Wir analysieren das Ausmass des Befalls und ermitteln die Ursachen (Feuchte, Wärmebrücken, Lüftungsverhalten)." },
                { n: "2", title: "Sanierungskonzept", text: "Auf Basis der Analyse erstellen wir ein massgeschneidertes Sanierungskonzept mit Mineralputzen." },
                { n: "3", title: "Fachgerechte Ausführung", text: "Entfernung des befallenen Materials, Desinfektion und Wiederherstellung mit SCHIMEX-Mineralputz." },
                { n: "4", title: "Nachbetreuung", text: "Beratung zur Prävention (Lüftungsverhalten, Heizen) für dauerhaften Schutz." },
              ].map((step) => (
                <div key={step.n} className="flex gap-4 mb-6">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                    style={{ background: "var(--brand)", color: "white" }}>
                    {step.n}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{step.title}</p>
                    <p style={{ fontSize: "14.5px", color: "var(--muted)", lineHeight: 1.6 }}>{step.text}</p>
                  </div>
                </div>
              ))}

              <a
                href="https://www.schimmelpilzsanierer.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2"
                style={{ fontSize: "13.5px", color: "var(--brand)", fontWeight: 600 }}
              >
                SCHIMEX-Partnerseite →
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="mb-4">Schimmelproblem im Haus?</h2>
            <p style={{ fontSize: "17px", color: "var(--muted)", marginBottom: "2rem" }}>
              Handeln Sie schnell — wir kommen zur Befundaufnahme und beraten Sie fachkundig.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/kontakt/anfrage" className="btn btn-primary">Anfrage stellen</Link>
              <a href="tel:+41448332251" className="btn btn-outline">044 833 22 51</a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
