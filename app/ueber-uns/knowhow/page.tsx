import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Knowhow & Zertifikate",
  description:
    "Zertifikate und Auszeichnungen von Malergeschäft Bernhard AG: TOP-Ausbildungsbetrieb, Swiss Olympic, kt.COLOR, SMGV, Denkmalpflege.",
};

const certifications = [
  {
    title: "TOP-Ausbildungsbetrieb",
    org: "Berufsbildungsverband",
    desc: "Zertifizierter Ausbildungsbetrieb mit dokumentierter Qualitätsausbildung für Lernende.",
  },
  {
    title: "Leistungssportfreundlicher Lehrbetrieb",
    org: "Swiss Olympic",
    desc: "Offiziell zertifiziert für die parallele Berufsausbildung und Leistungssportkarriere.",
  },
  {
    title: "kt.COLOR-Meister der Farben®",
    org: "kt.COLOR",
    desc: "Mehrere Mitarbeitende sind zertifizierte kt.COLOR-Verarbeiter und Meister der Farben®.",
  },
  {
    title: "Eidg. Handwerker der Denkmalpflege",
    org: "Bundesamt für Kultur",
    desc: "Fachausweis für die Arbeit an historischen Bauten und Denkmälern.",
  },
  {
    title: "SMGV-Mitglied",
    org: "Schweizerischer Maler- und Gipserunternehmer-Verband",
    desc: "Mitglied des Branchenverbands und Einhaltung der Branchenstandards.",
  },
  {
    title: "SCHIMEX-Spezialist",
    org: "Schimex",
    desc: "Ausgebildet für die langfristige, fungizidfreie Schimmelpilzsanierung.",
  },
];

export default function KnowhowPage() {
  return (
    <>
      <PageHero
        label="Über uns"
        title="Knowhow & Zertifikate"
        subtitle="Auszeichnungen und Zertifizierungen, die unser Fachwissen belegen."
      />

      <section className="section bg-white">
        <div className="container">
          <AnimatedSection className="mb-12">
            <span className="brand-rule" />
            <h2 className="mb-4">Ausgezeichnete Kompetenz</h2>
            <p style={{ fontSize: "17px", color: "var(--muted)", maxWidth: "36rem" }}>
              Unsere Zertifizierungen und Auszeichnungen sind Belege für unser
              kontinuierliches Streben nach Qualität und fachlicher Exzellenz.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <AnimatedSection key={cert.title} delay={i * 0.08}>
                <div className="bg-[var(--paper)] rounded p-6 h-full border border-[var(--line)]">
                  <div className="w-10 h-10 rounded flex items-center justify-center mb-4"
                    style={{ background: "var(--brand)", color: "white" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 15l-4-4 1.5-1.5L12 12l5-5L18.5 8.5z" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.25rem" }}>{cert.title}</h3>
                  <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--brand)", marginBottom: "0.625rem", letterSpacing: "0.04em" }}>
                    {cert.org}
                  </p>
                  <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.65 }}>{cert.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
