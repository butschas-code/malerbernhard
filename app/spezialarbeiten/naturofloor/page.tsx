import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Naturofloor – Fugenlose Wand- und Bodenbeläge",
  description:
    "Fugenlose Wand- und Bodenbeläge aus Weisszemnt und Quarzsand. Kühl-moderne Optik, renovationsfreundlich, ohne Staub und Baulärm.",
};

const properties = [
  "Fugenloses System — keine Schmutzränder",
  "Direkt auf Böden, Wände und bestehende Fliesen aufbringbar",
  "Staubfrei und lärmarm — Renovation ohne Lärm",
  "5-Schicht-Aufbau mit 3-facher Versiegelung",
  "Rissfest, langlebig und atmungsaktiv",
  "Reinigung: klares Wasser und Microfasertuch",
  "Optik: kühl-modern oder wohnlich-behaglich",
];

export default function NaturofloorPage() {
  return (
    <>
      <PageHero
        label="Spezialarbeiten"
        title="Naturofloor"
        subtitle="Fugenlose Wand- und Bodenbeläge aus Weisszement und Quarzsand. Renovation ganz ohne Staub und Baulärm."
        image="https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1200&q=80"
      />

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <span className="brand-rule" />
              <h2 className="mb-6">Das fugenlose System</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Naturofloor ist ein modernes Beschichtungssystem auf Basis von
                Weisszement und Quarzsand. Es schafft nahtlose Oberflächen, die
                sowohl optisch wie auch funktional überzeugen.
              </p>
              <p className="text-[17px] leading-relaxed mb-4">
                Das System wird in 5 Schritten direkt auf bestehende Böden, Wände
                und Fliesen aufgebracht und abschliessend dreifach versiegelt. So
                entsteht eine robuste, langlebige Oberfläche — <strong>ganz ohne
                Staub und Baulärm</strong>.
              </p>
              <p className="text-[17px] leading-relaxed">
                Die Pflege ist denkbar einfach: klares Wasser mit einem Microfasertuch
                genügt für die tägliche Reinigung.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <h3 className="mb-5 text-[1.1rem]">Eigenschaften & Vorteile</h3>
              <ul className="space-y-3">
                {properties.map((p) => (
                  <li key={p} className="flex items-start gap-3" style={{ fontSize: "15.5px" }}>
                    <svg className="mt-0.5 flex-shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="var(--brand)" strokeWidth="1.5" />
                      <path d="M5 8l2.5 2.5 4-4" stroke="var(--brand)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>

              <div style={{ background: "var(--brand)", borderRadius: "4px", padding: "1.5rem", marginTop: "2rem", color: "white" }}>
                <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7, marginBottom: "0.5rem" }}>
                  Ideal für
                </p>
                <p style={{ fontSize: "15px", lineHeight: 1.6 }}>
                  Badezimmer · Küchen · Wohnräume · Treppenhäuser ·
                  Büros — überall dort, wo fugenlose Eleganz gefragt ist.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80",
              "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
            ].map((src, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="rounded overflow-hidden aspect-square">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`Naturofloor ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="mb-4">Naturofloor erleben</h2>
            <p style={{ fontSize: "17px", color: "var(--muted)", marginBottom: "2rem" }}>
              Kommen Sie vorbei und sehen Sie Muster im Original.
            </p>
            <Link href="/kontakt/anfrage" className="btn btn-primary">
              Beratungstermin anfragen
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
