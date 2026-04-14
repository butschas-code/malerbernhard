import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Gesundes Wohnen",
  description:
    "Elektrosmog-Abschirmung und Lehmputz für ein gesundes Wohnklima. Spezialleistungen von Malergeschäft Bernhard AG.",
};

export default function GesundesWohnenPage() {
  return (
    <>
      <PageHero
        label="Spezialarbeiten"
        title="Gesundes Wohnen"
        subtitle="Elektrosmog-Abschirmung und Lehmputz — für ein natürliches, gesundes Raumklima."
        image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80"
      />

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left">
              <span className="brand-rule" />
              <h2 className="mb-6">Elektrosmog­abschirmung</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Hochfrequente elektromagnetische Strahlung ist in modernen Gebäuden
                allgegenwärtig. Mit unserer Spezial-Abschirmungsbeschichtung reduzieren
                wir diese Belastung drastisch.
              </p>

              <div className="space-y-4 mb-6">
                {[
                  { label: "Dämpfung", value: "36 dB" },
                  { label: "Abschirmungsgrad", value: "ca. 99,98 %" },
                  { label: "Schutz vor", value: "Hochfrequenzwellen (WLAN, Mobilfunk)" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-3"
                    style={{ borderBottom: "1px solid var(--line)" }}>
                    <span style={{ fontSize: "14.5px", color: "var(--muted)" }}>{item.label}</span>
                    <span style={{ fontSize: "14.5px", fontWeight: 700, color: "var(--brand)" }}>{item.value}</span>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: "14px", color: "var(--muted)" }}>
                Technische Dokumentation auf Anfrage erhältlich.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <h2 className="mb-6" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>Lehmputz</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Lehm ist eines der ältesten Baumaterialien der Welt und erlebt eine
                Renaissance im modernen Innenausbau. Er reguliert die Raumluftfeuchte
                auf natürliche Weise und schafft ein angenehmes Wohnklima.
              </p>
              <p className="text-[17px] leading-relaxed mb-6">
                Moderne Lehmprodukte entsprechen dem Trend zu natürlichem, gesundem
                Wohnen und lassen sich in verschiedensten Oberflächen und Texturen
                verarbeiten.
              </p>

              <div style={{ background: "var(--paper)", borderRadius: "4px", padding: "1.5rem" }}>
                <h4 className="mb-3">Vorteile von Lehmputz</h4>
                <ul className="space-y-2">
                  {[
                    "Reguliert Raumluftfeuchtigkeit natürlich",
                    "Wohngesund und emissionsfrei",
                    "Hervorragende Haptik und Optik",
                    "Nachhaltiges, recyclefähiges Material",
                    "Kombinierbar mit dekorativen Techniken",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5"
                      style={{ fontSize: "14px", color: "var(--muted)" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--brand)", flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="mb-4">Gesünder wohnen</h2>
            <p style={{ fontSize: "17px", color: "var(--muted)", marginBottom: "2rem" }}>
              Lassen Sie sich von unseren Spezialisten beraten.
            </p>
            <Link href="/kontakt/anfrage" className="btn btn-primary">
              Beratung anfragen
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
