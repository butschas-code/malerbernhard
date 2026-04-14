import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Kultur & Sport",
  description:
    "Malergeschäft Bernhard AG: Dä Maler im Dorf und fürs Dorf. Engagement für Theaterverein Dietlikon, UHC Kloten-Dietlikon, EHC Bassersdorf und mehr.",
};

const supported = [
  { name: "UHC Kloten-Dietlikon Jets", sport: "Unihockey" },
  { name: "EHC Bassersdorf", sport: "Eishockey" },
  { name: "Tennisclub Dietlikon", sport: "Tennis" },
  { name: "MVD – Musikverein Dietlikon", sport: "Musik" },
  { name: "THD – Theater Dietlikon", sport: "Theater" },
];

export default function KulturSportPage() {
  return (
    <>
      <PageHero
        label="Über uns"
        title="Kultur & Sport"
        subtitle="Dä Maler im Dorf und fürs Dorf. Wir engagieren uns für die Gemeinschaft in Dietlikon."
      />

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <span className="brand-rule" />
              <h2 className="mb-6">Verwurzelt in Dietlikon</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Seit über 100 Jahren ist das Malergeschäft Bernhard AG ein fester
                Bestandteil der Dorfgemeinschaft Dietlikon. Unser Engagement geht
                weit über den Malerberuf hinaus.
              </p>
              <p className="text-[17px] leading-relaxed mb-4">
                Jährlich gestalten wir die Bühnenbilder für den{" "}
                <strong>Theaterverein Dietlikon</strong>. Diese Arbeit kombiniert
                unser handwerkliches Fachwissen mit Kreativität und ist gleichzeitig
                eine wertvolle Ausbildungsplattform für unsere Lernenden.
              </p>
              <p className="text-[17px] leading-relaxed">
                Auch den bekannten{" "}
                <strong>Dietliker Goldstern</strong> pflegen wir mit Stolz —
                unsere Werkstatt produziert die grösste Version dieses lokalen Symbols.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <h3 className="mb-5 text-[1.1rem]">Unterstützte Vereine & Organisationen</h3>
              <div className="space-y-3">
                {supported.map((org) => (
                  <div key={org.name} className="flex items-center justify-between py-3 px-4 rounded"
                    style={{ background: "var(--paper)" }}>
                    <div>
                      <p style={{ fontSize: "15px", fontWeight: 700 }}>{org.name}</p>
                      <p style={{ fontSize: "13px", color: "var(--muted)" }}>{org.sport}</p>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" fill="var(--brand)" />
                      <path d="M5 8l2.5 2.5 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
