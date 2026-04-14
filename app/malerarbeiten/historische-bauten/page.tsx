import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Historische Bauten",
  description:
    "Werterhaltung und Schutz mit Respekt vor der Bausubstanz. Eidg. Handwerker der Denkmalpflege mit Fachausweis. Referenzen in Zürich, Dietlikon und Ascona.",
};

const references = [
  "Strehlgasse 23, Zürich",
  "Landheim Brüttisellen",
  "Reformierte Kirche Dietlikon",
  "Villa Krebs, Säntisstrasse 11, Dietlikon",
  "Villa via Moscia 72, Ascona",
  "Ref. Pfarrhaus Dietlikon",
  "Liegenschaft Riedenerstr. 1, Dietlikon",
];

const strengths = [
  "Einfühlsamer Umgang mit der Bausubstanz",
  "Verwendung historisch angepasster Materialien",
  "Zusammenarbeit mit Denkmalpflegebehörden",
  "Nachbildung historischer Handwerkstechniken",
  "Eidg. Handwerker der Denkmalpflege mit Fachausweis",
];

export default function HistorischeBautenPage() {
  return (
    <>
      <PageHero
        label="Malerarbeiten"
        title="Historische Bauten"
        subtitle="Werterhaltung und Schutz mit Respekt vor der Bausubstanz. Mit dem Fachausweis als Eidg. Handwerker der Denkmalpflege."
        image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80"
      />

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <span className="brand-rule" />
              <h2 className="mb-6">Denkmalpflege mit Kompetenz</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Die Arbeit an historischen Bauten erfordert besondere Sorgfalt,
                fundiertes Fachwissen und ein tiefes Verständnis für die
                Baugeschichte. Unsere Fachkräfte sind speziell für diese
                anspruchsvolle Aufgabe ausgebildet.
              </p>
              <p className="text-[17px] leading-relaxed mb-4">
                Wir arbeiten eng mit den zuständigen Denkmalpflegebehörden zusammen
                und verwenden ausschliesslich historisch angepasste Materialien.
                Das Ziel ist immer die langfristige Werterhaltung.
              </p>

              <h3 className="mt-8 mb-5 text-[1.1rem]">Unsere Stärken</h3>
              <ul className="space-y-3">
                {strengths.map((s) => (
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

            <AnimatedSection direction="right" delay={0.1}>
              <div className="rounded overflow-hidden aspect-[3/4] mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80"
                  alt="Historisches Gebäude"
                  className="w-full h-full object-cover"
                />
              </div>

              <div style={{ background: "var(--paper)", borderRadius: "4px", padding: "1.5rem" }}>
                <h3 className="mb-5 text-[1.1rem]">Referenzobjekte</h3>
                <ul className="space-y-2.5">
                  {references.map((r) => (
                    <li key={r} className="flex items-center gap-2.5"
                      style={{ fontSize: "14.5px", color: "var(--muted)" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--brand-red)", flexShrink: 0 }} />
                      {r}
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
            <h2 className="mb-4">Historisches Gebäude renovieren?</h2>
            <p style={{ fontSize: "17px", color: "var(--muted)", marginBottom: "2rem" }}>
              Kontaktieren Sie uns für eine fachkundige Beratung zu Ihrem Denkmalpflege-Projekt.
            </p>
            <Link href="/kontakt/anfrage" className="btn btn-primary">
              Anfrage stellen
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
