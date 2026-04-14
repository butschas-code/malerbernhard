import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Innenraum Malerarbeiten",
  description:
    "Von der einfachen Pinsel-Renovation bis zu komplexen Um- und Neubauten. Professionelle Innenmalerarbeiten im Glatttal und Grossraum Zürich.",
};

const services = [
  "Wandbeläge (ökologische Beschichtungssysteme)",
  "Strukturputze",
  "Tapezieren",
  "Spritzarbeiten",
  "Kunstharzarbeiten (Türen, Fenster)",
  "Lackierarbeiten",
  "Schadenssanierung",
  "Riss-Sanierung",
  "Partielle Gipserarbeiten",
  "Dekorative Techniken",
  "Wärmedämmung",
];

const galleryImages = [
  "https://www.malerbernhard.ch/domains/devmalerbernhard_ch/data/galleries/jGal_500322/innenraum_01.jpg",
  "https://www.malerbernhard.ch/domains/devmalerbernhard_ch/data/galleries/jGal_500322/innenraum_02.jpg",
  "https://www.malerbernhard.ch/domains/devmalerbernhard_ch/data/galleries/jGal_500322/innenraum_03.jpg",
  "https://www.malerbernhard.ch/domains/devmalerbernhard_ch/data/galleries/jGal_500322/innenraum_04.jpg",
  "https://www.malerbernhard.ch/domains/devmalerbernhard_ch/data/galleries/jGal_500322/innenraum_05.jpg",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
];

export default function InnenraumPage() {
  return (
    <>
      <PageHero
        label="Malerarbeiten"
        title="Innenraum"
        subtitle="Von der einfachen Pinsel-Renovation bis zu komplexen Um- und Neubauten — mit gut ausgebildeten Fachkräften der beste Partner für Sie."
        image="https://www.malerbernhard.ch/domains/devmalerbernhard_ch/data/galleries/jGal_500322/innenraum_01.jpg"
      />

      {/* Intro */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <span className="brand-rule" />
              <h2 className="mb-6">Analyse und Beratung</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Jedes Projekt beginnt mit einer sorgfältigen Analyse vor Ort. Wir
                nehmen uns Zeit, um Ihre Vorstellungen zu verstehen, den Untergrund zu
                prüfen und das optimale Material für Ihre Anforderungen zu empfehlen.
              </p>
              <p className="text-[17px] leading-relaxed mb-4">
                Ob ökologische Wandbeschichtungen, kreative Strukturputze oder
                handwerkliche Dekorationstechniken — unsere ausgebildeten Fachkräfte
                setzen Ihr Projekt mit Sorgfalt und Präzision um.
              </p>
              <p className="text-[17px] leading-relaxed">
                Wir arbeiten sauber, emissionsarm und halten unsere Zeitpläne ein.
                Nach Abschluss führen wir eine gemeinsame Qualitätskontrolle durch.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <h3 className="mb-6 text-[1.2rem]">Unsere Leistungen im Innenbereich</h3>
              <ul className="space-y-3">
                {services.map((s) => (
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
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container">
          <AnimatedSection>
            <span className="brand-rule" />
            <h2 className="mb-10">Projektbilder</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="rounded overflow-hidden aspect-square">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`Innenraum Projekt ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="mb-4">Bereit für Ihr Projekt?</h2>
            <p style={{ fontSize: "17px", color: "var(--muted)", marginBottom: "2rem" }}>
              Kontaktieren Sie uns für eine kostenlose Beratung vor Ort.
            </p>
            <Link href="/kontakt/anfrage" className="btn btn-primary">
              Offerte anfragen
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
