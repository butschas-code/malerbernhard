import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Philosophie",
  description:
    "Die Unternehmensphilosophie von Malergeschäft Bernhard AG: Qualität, Ökologie, Kundenzufriedenheit und nachhaltiges Wirtschaften.",
};

const principles = [
  {
    title: "Qualität & Zuverlässigkeit",
    text: "Sauberes, emissionsarmes Arbeiten, Einhaltung von Terminplänen und eine gemeinsame Qualitätskontrolle nach Projektabschluss sind für uns selbstverständlich.",
  },
  {
    title: "Ökologische Verantwortung",
    text: "Materialbeschaffung, -verarbeitung und Entsorgung erfolgen nach aktuellen ökologischen Massstäben. Wir arbeiten mit umweltverträglichen Produkten und Systemen.",
  },
  {
    title: "Kundenzufriedenheit",
    text: "Durch gründliche Beratungsgespräche stellen wir sicher, dass Ihre Wünsche und Erwartungen vollumfänglich erfüllt werden. Ihr Wohlbefinden steht im Mittelpunkt.",
  },
  {
    title: "Partnerschaftliche Garantie",
    text: "Allfällige Garantieansprüche werden in enger Zusammenarbeit mit den Materiallieferanten geklärt — dabei haben die Interessen des Kunden stets Priorität.",
  },
  {
    title: "Langfristiges Denken",
    text: "Alle Geschäftsaktivitäten sind darauf ausgerichtet, das langfristige Bestehen des Unternehmens zu fördern. Wir denken in Generationen, nicht in Quartalen.",
  },
  {
    title: "Branchenverbund",
    text: "Als Mitglied des SMGV (Schweizerischer Maler- und Gipserunternehmer-Verband) halten wir die branchenüblichen Standards und Normen ein.",
  },
];

export default function PhilosophiePage() {
  return (
    <>
      <PageHero
        label="Über uns"
        title="Philosophie"
        subtitle="Unser Leistungsversprechen gegenüber Kunden, Mitarbeitenden und der Umwelt."
      />

      <section className="section bg-white">
        <div className="container">
          <AnimatedSection className="max-w-2xl mb-14">
            <span className="brand-rule" />
            <h2 className="mb-4">Unser Leistungsversprechen</h2>
            <p className="text-[17px] leading-relaxed" style={{ color: "var(--muted)" }}>
              "Alle Geschäftsaktivitäten nach innen und aussen sind so ausgerichtet,
              dass sie dem langfristigen Bestehen des Geschäftes förderlich sind."
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.08}>
                <div className="bg-[var(--paper)] rounded p-6 h-full">
                  <div className="w-8 h-1 rounded mb-4" style={{ background: "var(--brand-red)" }} />
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.75rem" }}>{p.title}</h3>
                  <p style={{ fontSize: "14.5px", color: "var(--muted)", lineHeight: 1.65 }}>{p.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
