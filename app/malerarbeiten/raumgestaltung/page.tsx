import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Raumgestaltung",
  description:
    "Individuelle Raumgestaltung mit Lasurtechniken, Spachteltechniken, Schablonen, Vergoldungen und mehr. Handwerkliche Kreativität von Malergeschäft Bernhard AG.",
};

const techniques = [
  "Lasur- und Wischtechniken",
  "Spachteltechniken",
  "Schablonentechniken",
  "Schwamm-, Tapp- und Wickeltechniken",
  "Effektlackierungen und -beschichtungen",
  "Vergoldungen",
  "Stein- und Holzimitationen",
  "Dekorationsprofile",
  "Beschriftungen / Schilder",
  "Spezialtapeten",
];

const galleryImages = [
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&q=80",
  "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80",
];

export default function RaumgestaltungPage() {
  return (
    <>
      <PageHero
        label="Malerarbeiten"
        title="Raumgestaltung"
        subtitle="Individuelle Raumgestaltung, Farbberatung und Kreativität. Handwerkliche Techniken, die Ihren Wohntraum einzigartig machen."
        image="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80"
      />

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <span className="brand-rule" />
              <h2 className="mb-6">Kreativität & Kunsthandwerk</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Raumgestaltung ist weit mehr als Farbe auf die Wand. Es ist die Kunst,
                mit Materialien, Texturen und Farben eine Atmosphäre zu schaffen, die
                Ihren persönlichen Stil widerspiegelt.
              </p>
              <p className="text-[17px] leading-relaxed mb-4">
                Unsere Fachkräfte beherrschen ein breites Spektrum dekorativer
                Techniken — von klassischen Lasuren bis zu modernen Spachtelarbeiten.
                Wir beraten Sie kompetent bei der Farbwahl und dem passenden Konzept
                für Ihren Raum.
              </p>
              <p className="text-[17px] leading-relaxed">
                Ob Privatwohnung, Geschäftslokal oder öffentlicher Raum — wir
                verwirklichen Ihre Vorstellungen mit handwerklicher Präzision.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <h3 className="mb-6 text-[1.2rem]">Dekorationstechniken</h3>
              <ul className="space-y-3">
                {techniques.map((t) => (
                  <li key={t} className="flex items-start gap-3" style={{ fontSize: "15.5px" }}>
                    <svg className="mt-0.5 flex-shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="var(--brand)" strokeWidth="1.5" />
                      <path d="M5 8l2.5 2.5 4-4" stroke="var(--brand)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container">
          <AnimatedSection>
            <span className="brand-rule" />
            <h2 className="mb-10">Inspirationen</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="rounded overflow-hidden aspect-square">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`Raumgestaltung ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="mb-4">Ihren Wohntraum verwirklichen?</h2>
            <p style={{ fontSize: "17px", color: "var(--muted)", marginBottom: "2rem" }}>
              Rufen Sie uns an oder stellen Sie eine Anfrage — wir beraten Sie gerne persönlich.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/kontakt/anfrage" className="btn btn-primary">Offerte anfragen</Link>
              <a href="tel:+41448332251" className="btn btn-outline">044 833 22 51</a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
