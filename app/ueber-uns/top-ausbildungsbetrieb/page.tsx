import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "TOP-Ausbildungsbetrieb",
  description:
    "Malergeschäft Bernhard AG ist zertifizierter TOP-Ausbildungsbetrieb. Good Training for a Shared Future!",
};

const criteria = [
  "Jährliche Einreichung von Ausbilder- und Lernendenlisten",
  "Regelmässige Dokumentation der Ausbilderqualifikation",
  "Dokumentierte Ausbildungsinfrastruktur",
  "Systematische Selektion von Lernenden",
  "Halbjährliche Standortgespräche mit Lernenden",
  "Umfassendes Einführungsprogramm",
];

export default function TopAusbildungsbetriebPage() {
  return (
    <>
      <PageHero
        label="Über uns"
        title="TOP-Ausbildungsbetrieb"
        subtitle="Good Training for a Shared Future! Wir bilden die nächste Generation der Handwerker aus."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
      />

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <span className="brand-rule" />
              <h2 className="mb-6">Ausbildung mit System</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Das Label TOP-Ausbildungsbetrieb garantiert, dass Lernende und
                Mitarbeitende in ihrer Berufsbildung menschlich und fachlich
                bestens betreut werden.
              </p>
              <p className="text-[17px] leading-relaxed mb-4">
                Wir befinden uns aktuell auf Stufe 1 — die grundlegenden
                Systemvoraussetzungen sind erfüllt. Das Label wird periodisch
                erneuert und ist an klare Qualitätskriterien gebunden.
              </p>
              <p className="text-[17px] leading-relaxed mb-6">
                Schnupperlehren sind über{" "}
                <a href="https://www.schnuppy.ch" target="_blank" rel="noopener noreferrer"
                  style={{ color: "var(--brand)", fontWeight: 600 }}>
                  schnuppy.ch
                </a>{" "}
                buchbar.
              </p>
              <Link href="/kontakt/anfrage" className="btn btn-primary">
                Schnupperlehre anfragen
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <h3 className="mb-5 text-[1.1rem]">Erfüllte Kriterien (Stufe 1)</h3>
              <ul className="space-y-3">
                {criteria.map((c) => (
                  <li key={c} className="flex items-start gap-3" style={{ fontSize: "15.5px" }}>
                    <svg className="mt-0.5 flex-shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="var(--brand)" strokeWidth="1.5" />
                      <path d="M5 8l2.5 2.5 4-4" stroke="var(--brand)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {c}
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded overflow-hidden border border-[var(--line)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://www.malerbernhard.ch/domains/devmalerbernhard_ch/data/free_docs/4c97f2d-3_b530de1-5_TOP_Visual_500.jpg"
                  alt="TOP-Ausbildungsbetrieb"
                  className="w-full object-contain"
                  style={{ maxHeight: "200px", objectFit: "contain", background: "var(--paper)" }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
