import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Berufslehre & Leistungssport",
  description:
    "Malergeschäft Bernhard AG ist Swiss Olympic zertifizierter Leistungssportfreundlicher Lehrbetrieb. Sport und Ausbildung parallel.",
};

export default function LeistungssportPage() {
  return (
    <>
      <PageHero
        label="Über uns"
        title="Berufslehre & Leistungssport"
        subtitle="Sport und Ausbildung müssen sich nicht ausschliessen. Als Swiss Olympic zertifizierter Betrieb unterstützen wir junge Athleten."
        image="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80"
      />

      <section className="section bg-white">
        <div className="container max-w-3xl">
          <AnimatedSection>
            <span className="brand-rule" />
            <h2 className="mb-6">Leistungssportfreundlicher Lehrbetrieb</h2>
            <p className="text-[17px] leading-relaxed mb-4">
              Das Malergeschäft Bernhard AG ist als{" "}
              <strong>Swiss Olympic Leistungssportfreundlicher Lehrbetrieb</strong>{" "}
              zertifiziert. Junge Athleten können bei uns eine Berufsausbildung
              absolvieren und gleichzeitig ihre sportliche Karriere verfolgen.
            </p>
            <p className="text-[17px] leading-relaxed mb-4">
              Durch einen flexiblen und bedarfsorientierten Lehrplan ermöglichen
              wir es, Trainingszeiten, Wettkämpfe und Berufsschulbesuche
              optimal zu koordinieren.
            </p>
            <p className="text-[17px] leading-relaxed mb-8">
              Wir glauben, dass Disziplin, Durchhaltevermögen und Teamgeist —
              Werte, die im Leistungssport gepflegt werden — auch im
              Handwerksberuf von grossem Wert sind.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "Flexibler Lehrplan", text: "Angepasst an Trainings- und Wettkampfkalender" },
                { title: "Verständnisvolles Team", text: "Erfahrung im Umgang mit sportlichen Lernenden" },
                { title: "Swiss Olympic", text: "Offiziell zertifizierter Lehrbetrieb" },
              ].map((item) => (
                <div key={item.title} className="rounded p-5" style={{ background: "var(--paper)" }}>
                  <div className="w-6 h-1 rounded mb-3" style={{ background: "var(--brand-red)" }} />
                  <p style={{ fontWeight: 700, marginBottom: "0.375rem" }}>{item.title}</p>
                  <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.6 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
