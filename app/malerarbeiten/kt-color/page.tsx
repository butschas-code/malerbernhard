import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "kt.COLOR – Meister der Farben®",
  description:
    "Zertifizierte kt.COLOR-Meister der Farben® bei Malergeschäft Bernhard AG. Die feinsten Farben weltweit, inklusive Metallic-Effektfarben. Seit 2025 offizieller kt.COLOR-Partner.",
};

export default function KtColorPage() {
  return (
    <>
      <PageHero
        label="Malerarbeiten"
        title="kt.COLOR – Meister der Farben®"
        subtitle="Partnership mit kt.COLOR seit 2025. Die feinsten Farben der Welt — mit zertifizierten Meistern bei Bernhard."
        image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80"
      />

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="brand-rule" />
              <h2 className="mb-6">Die Welt der Farben</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Seit 2025 sind wir offizieller kt.COLOR-Partner. Mehrere unserer
                Mitarbeitenden haben die Zertifizierung zum kt.COLOR-Meister der
                Farben® erworben.
              </p>
              <p className="text-[17px] leading-relaxed mb-4">
                kt.COLOR steht für aussergewöhnliche Farbqualität und ein einzigartiges
                Farbsortiment — von tiefen, satten Tönen bis zu edlen Metallic-Effekten.
                Die gesamte Musterkkollektion, inklusive Spezial-Metallic-Effektfarben,
                steht Ihnen bei uns vor Ort zur Verfügung.
              </p>
              <p className="text-[17px] leading-relaxed">
                Lassen Sie sich von unseren Farbexperten zu den Möglichkeiten von
                kt.COLOR beraten — für Ergebnisse, die begeistern.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    name: "Champagner Silver",
                    color: "#C0C0C0",
                    desc: "Edles Metallic-Finish mit schimmernder Tiefe",
                  },
                  {
                    name: "Rosso Veneto Palé",
                    color: "#8B3040",
                    desc: "Warmes Burgunderrot mit venezianischem Charakter",
                  },
                  {
                    name: "Bernhard Blau",
                    color: "#1B4F91",
                    desc: "Kraftvolles Blau als markante Akzentfarbe",
                  },
                  {
                    name: "Kalkweiss Natur",
                    color: "#F5F2ED",
                    desc: "Warmes, natürliches Weiss mit Tiefe",
                  },
                ].map((swatch) => (
                  <div key={swatch.name} className="rounded overflow-hidden border border-[var(--line)]">
                    <div style={{ height: "80px", background: swatch.color }} />
                    <div className="p-3">
                      <p style={{ fontSize: "13px", fontWeight: 700 }}>{swatch.name}</p>
                      <p style={{ fontSize: "12px", color: "var(--muted)", marginTop: "2px" }}>{swatch.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "12.5px", color: "var(--muted)", marginTop: "1rem" }}>
                * Farbmuster zur Illustration. Vollständige kt.COLOR-Kollektion in unserem Betrieb erhältlich.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
              "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
              "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
            ].map((src, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="rounded overflow-hidden aspect-square">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`kt.COLOR Projekt ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="mb-4">Farbe erleben</h2>
            <p style={{ fontSize: "17px", color: "var(--muted)", marginBottom: "2rem" }}>
              Besuchen Sie uns und entdecken Sie die kt.COLOR-Kollektion persönlich.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/kontakt/anfrage" className="btn btn-primary">Beratungstermin</Link>
              <Link href="/kontakt" className="btn btn-outline">Kontakt</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
