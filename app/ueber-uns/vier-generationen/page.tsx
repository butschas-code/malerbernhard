import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Vier Generationen",
  description:
    "Seit 1911 führt die Familie Bernhard das Malergeschäft in Dietlikon. Von Gottlieb über Heinrich und Peter bis zu Thomas Bernhard.",
};

const timeline = [
  {
    year: "1911",
    person: "Gottlieb Bernhard",
    title: "Gründung",
    text: "Gottlieb Bernhard gründet das Malergeschäft in Dietlikon. Der Grundstein für eine über 100-jährige Familientradition wird gelegt.",
  },
  {
    year: "1946",
    person: "Heinrich Bernhard",
    title: "Zweite Generation",
    text: "Nach dem unerwarteten Tod von Gottlieb übernimmt Heinrich Bernhard im Alter von 26 Jahren die Leitung des Betriebs und führt ihn erfolgreich weiter.",
  },
  {
    year: "1980",
    person: "Peter Bernhard",
    title: "Dritte Generation",
    text: "Peter Bernhard übernimmt das Geschäft und prägt es über 31 Jahre mit seiner Handwerkskunst und seinem Unternehmergeist.",
  },
  {
    year: "2012",
    person: "Thomas Bernhard",
    title: "Vierte Generation",
    text: "Thomas Bernhard übernimmt die Führung von seinem Vater Peter und führt das Traditionsunternehmen mit modernem Spirit und ungebrochener handwerklicher Exzellenz weiter.",
  },
];

export default function VierGenerationenPage() {
  return (
    <>
      <PageHero
        label="Über uns"
        title="Vier Generationen"
        subtitle="Seit 1911 in der Familie Bernhard. Eine Geschichte von Handwerkskunst, Vertrauen und Kontinuität."
        image="https://images.unsplash.com/photo-1578302758063-5f57fb21ce2d?w=1200&q=80"
      />

      <section className="section bg-white">
        <div className="container max-w-3xl">
          <AnimatedSection>
            <span className="brand-rule" />
            <h2 className="mb-4">Eine Familie, ein Betrieb</h2>
            <p className="text-[17px] leading-relaxed mb-12" style={{ color: "var(--muted)" }}>
              Was 1911 mit Gottlieb Bernhard begann, ist heute ein modernes
              Malergeschäft mit 12 Fachkräften — geführt in der vierten Generation
              mit denselben Werten: Qualität, Verlässlichkeit und Handwerksstolz.
            </p>
          </AnimatedSection>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px"
              style={{ background: "var(--line)" }} />

            <div className="space-y-12 pl-16">
              {timeline.map((item, i) => (
                <AnimatedSection key={item.year} delay={i * 0.12}>
                  <div className="relative">
                    {/* Dot */}
                    <div className="absolute -left-[2.875rem] top-1 w-4 h-4 rounded-full border-2 border-white z-10"
                      style={{ background: "var(--brand)" }} />
                    {/* Year badge */}
                    <span className="inline-block mb-2 font-bold text-sm px-2.5 py-0.5 rounded"
                      style={{ background: "var(--brand-red)", color: "white", fontSize: "12px" }}>
                      {item.year}
                    </span>
                    <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.25rem" }}>
                      {item.person}
                    </h3>
                    <p style={{ fontSize: "12.5px", color: "var(--muted)", marginBottom: "0.75rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                      {item.title}
                    </p>
                    <p style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--ink)", opacity: 0.85 }}>
                      {item.text}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
