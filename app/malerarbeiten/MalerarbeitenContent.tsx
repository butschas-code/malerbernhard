"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const HERO_PLACEHOLDER = "/hero_malerarbeiten.png";

const overview = [
  { id: "innenraum", label: "Innenraum" },
  { id: "aussenraum-fassade", label: "Aussenraum & Fassade" },
  { id: "raumgestaltung", label: "Raumgestaltung" },
  { id: "historische-bauten", label: "Historische Bauten" },
  { id: "kt-color", label: "kt.COLOR" },
] as const;

/** Full-bleed imagery per service — curated stock for atmosphere */
const sectionVisuals: Record<string, { src: string; alt: string }> = {
  innenraum: {
    src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1600&q=85",
    alt: "Malerarbeiten im Innenbereich",
  },
  "aussenraum-fassade": {
    src: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=1600&q=85",
    alt: "Fassade und Aussenbereich",
  },
  raumgestaltung: {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=85",
    alt: "Raumgestaltung und Farbwirkung",
  },
  "historische-bauten": {
    src: "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=1600&q=85",
    alt: "Historische Architektur",
  },
  "kt-color": {
    src: "https://images.unsplash.com/photo-1503602642458-232111445657?w=1600&q=85",
    alt: "Farben und kt.COLOR",
  },
};

function SectionBanner({ sectionKey }: { sectionKey: keyof typeof sectionVisuals }) {
  const v = sectionVisuals[sectionKey];
  return (
    <div className="relative mb-10 lg:mb-14 rounded-2xl overflow-hidden shadow-[var(--shadow-lg)] aspect-[21/9] min-h-[200px] max-h-[380px] ring-1 ring-black/[0.06]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={v.src} alt={v.alt} className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/35 via-black/5 to-transparent"
        aria-hidden
      />
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((s) => (
        <li key={s} className="flex items-start gap-3" style={{ fontSize: "15.5px" }}>
          <svg className="mt-0.5 flex-shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="var(--brand)" strokeWidth="1.5" />
            <path
              d="M5 8l2.5 2.5 4-4"
              stroke="var(--brand)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {s}
        </li>
      ))}
    </ul>
  );
}

const innenServices = [
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

const aussenServices = [
  "Fassadenschutz und Fassadenrenovation",
  "Riss-Sanierung an Aussenwänden",
  "Holzwerk-Auffrischungen (Dachgebälk, Fachwerk, Läden)",
  "Spritz- oder Kunstharzarbeiten (Läden, Türen, Gartentore)",
  "Reinigung und Untergrundvorbereitung",
  "Wärmedämmverbundsysteme (WDVS)",
];

const raumTechniques = [
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

const historischeRefs = [
  "Strehlgasse 23, Zürich",
  "Landheim Brüttisellen",
  "Reformierte Kirche Dietlikon",
  "Villa Krebs, Säntisstrasse 11, Dietlikon",
  "Villa via Moscia 72, Ascona",
  "Ref. Pfarrhaus Dietlikon",
  "Liegenschaft Riedenerstr. 1, Dietlikon",
];

const historischeStaerken = [
  "Einfühlsamer Umgang mit der Bausubstanz",
  "Verwendung historisch angepasster Materialien",
  "Zusammenarbeit mit Denkmalpflegebehörden",
  "Nachbildung historischer Handwerkstechniken",
  "Eidg. Handwerker der Denkmalpflege mit Fachausweis",
];

const ktSwatches = [
  { name: "Champagner Silver", color: "#C0C0C0", desc: "Edles Metallic-Finish mit schimmernder Tiefe" },
  { name: "Rosso Veneto Palé", color: "#8B3040", desc: "Warmes Burgunderrot mit venezianischem Charakter" },
  { name: "Bernhard Blau", color: "#1B4F91", desc: "Kraftvolles Blau als markante Akzentfarbe" },
  { name: "Kalkweiss Natur", color: "#F5F2ED", desc: "Warmes, natürliches Weiss mit Tiefe" },
];

const impressionGrid = [
  "https://www.malerbernhard.ch/domains/devmalerbernhard_ch/data/galleries/jGal_500322/innenraum_01.jpg",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  "https://www.malerbernhard.ch/domains/devmalerbernhard_ch/data/galleries/jGal_500322/innenraum_04.jpg",
];

const heroStamps = ["Glatttal & Zürich", "Seit 1911", "Meisterbetrieb"];

export default function MalerarbeitenContent() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const imgY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 100]);
  const imgScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1, 1.06]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 50]);

  return (
    <>
      {/* ─── HERO (home-style, image placeholder) ─── */}
      <section
        ref={heroRef}
        className="relative min-h-[88dvh] flex items-end overflow-hidden bg-[var(--ink)]"
      >
        <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale, zIndex: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_PLACEHOLDER}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 1,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.62) 100%), linear-gradient(to left, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.22) 45%, rgba(0,0,0,0) 78%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none"
          style={{
            zIndex: 1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        <motion.div
          style={{ opacity: heroOpacity, y: heroTextY, zIndex: 2 }}
          className="relative w-full container pb-14 md:pb-20"
        >
          <div className="ml-auto max-w-xl text-right">
            <div className="flex flex-wrap justify-end gap-2 mb-6">
              {heroStamps.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.45 }}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  style={{
                    fontSize: "10.5px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "white",
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    borderRadius: "6px",
                    padding: "6px 12px",
                    display: "inline-block",
                  }}
                >
                  {s}
                </motion.span>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-bold tracking-[0.16em] uppercase text-white/70 mb-3"
            >
              Leistungen
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", lineHeight: 1.04 }}
            >
              <span className="text-white">Malerarbeiten</span>
              <br />
              <span className="text-gradient-hero">für Ihr Projekt.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              style={{ color: "rgba(255,255,255,0.88)", fontSize: "17px", lineHeight: 1.65, marginTop: "1.25rem" }}
            >
              Vom Innenraum über Fassaden und Raumgestaltung bis zu historischer Denkmalpflege und kt.COLOR — ein Team, ein
              Ansprechpartner für Ihr Projekt im Glatttal und Grossraum Zürich.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28 }}
              style={{ color: "rgba(255,255,255,0.88)", fontSize: "17px", lineHeight: 1.65, marginTop: "1rem" }}
            >
              Jedes Projekt beginnt mit einer sorgfältigen Analyse vor Ort. Wir nehmen uns Zeit für Ihre Vorstellungen,
              empfehlen passende Materialien und setzen sauber, emissionsarm und termintreu um — mit abschliessender
              Qualitätskontrolle zusammen mit Ihnen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.38 }}
              className="flex flex-wrap justify-end gap-3 mt-8"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link href="/kontakt/anfrage" className="btn btn-primary">
                  Offerte anfragen
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <a href="tel:+41448332251" className="btn btn-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brand-tertiary)" strokeWidth="2" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  044 833 22 51
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "rgba(255,255,255,0.45)", zIndex: 2 }}
        >
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
            transition={reduceMotion ? undefined : { repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      <div
        style={{
          height: "6px",
          background: "linear-gradient(90deg, var(--brand-red) 0%, var(--brand-secondary) 50%, var(--brand-tertiary) 100%)",
        }}
      />

      {/* Leistungen im Überblick — same band as former intro + jump nav */}
      <section className="section section-surface relative overflow-hidden">
        <div className="container max-w-4xl text-center">
          <AnimatedSection>
            <span className="brand-rule mx-auto" />
            <h2 className="mb-6 text-gradient-heading">
              Leistungen im
              <br />
              Überblick.
            </h2>
            <p className="text-[17px] text-[var(--muted)] leading-relaxed max-w-2xl mx-auto mb-8">
              Springen Sie direkt zum gewünschten Abschnitt — ausführliche Beschreibungen und Referenzen finden Sie unten.
            </p>
            <nav aria-label="Malerarbeiten Abschnitte" className="flex flex-wrap justify-center gap-2.5">
              {overview.map((s) => (
                <motion.a
                  key={s.id}
                  href={`#${s.id}`}
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center rounded-full border border-[var(--line)] bg-white/90 backdrop-blur-sm px-4 py-2.5 text-[13.5px] font-semibold text-[var(--ink)] shadow-[var(--shadow)] hover:border-[var(--brand-secondary)]/50 hover:text-[var(--brand)] transition-colors"
                >
                  {s.label}
                </motion.a>
              ))}
            </nav>
          </AnimatedSection>
        </div>
      </section>

      {/* —— Innenraum —— */}
      <section id="innenraum" className="section section-surface-muted scroll-mt-[88px]">
        <div className="container">
          <SectionBanner sectionKey="innenraum" />
          <AnimatedSection>
            <span className="brand-rule" />
            <h2 className="mb-4 mt-2 text-gradient-heading">Innenraum</h2>
            <p className="text-[17px] leading-relaxed max-w-2xl mb-12">
              Von der einfachen Pinsel-Renovation bis zu komplexen Um- und Neubauten — mit gut ausgebildeten Fachkräften der
              beste Partner für Sie.
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <h3 className="mb-6 text-[1.2rem]">Analyse und Beratung</h3>
              <p className="text-[17px] leading-relaxed mb-4">
                Jedes Projekt beginnt mit einer sorgfältigen Analyse vor Ort. Wir nehmen uns Zeit, um Ihre Vorstellungen zu
                verstehen, den Untergrund zu prüfen und das optimale Material für Ihre Anforderungen zu empfehlen.
              </p>
              <p className="text-[17px] leading-relaxed mb-4">
                Ob ökologische Wandbeschichtungen, kreative Strukturputze oder handwerkliche Dekorationstechniken — unsere
                ausgebildeten Fachkräfte setzen Ihr Projekt mit Sorgfalt und Präzision um.
              </p>
              <p className="text-[17px] leading-relaxed">
                Wir arbeiten sauber, emissionsarm und halten unsere Zeitpläne ein. Nach Abschluss führen wir eine gemeinsame
                Qualitätskontrolle durch.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.08}>
              <h3 className="mb-6 text-[1.2rem]">Leistungen im Innenbereich</h3>
              <CheckList items={innenServices} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* —— Aussen —— */}
      <section id="aussenraum-fassade" className="section section-surface scroll-mt-[88px]">
        <div className="container">
          <SectionBanner sectionKey="aussenraum-fassade" />
          <AnimatedSection>
            <span className="brand-rule" />
            <h2 className="mb-4 mt-2 text-gradient-heading">Aussenraum & Fassade</h2>
            <p className="text-[17px] leading-relaxed max-w-2xl mb-12">
              Schutz- und Werterhaltung — Verfeinerung und Schmuck. Mit unserem qualifizierten Team führen wir auch grössere
              Fassadenrenovationen fachgerecht aus.
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <h3 className="mb-6 text-[1.2rem]">Schutz und Werterhaltung</h3>
              <p className="text-[17px] leading-relaxed mb-4">
                Die Fassade Ihres Gebäudes ist täglich Witterungseinflüssen ausgesetzt. Eine professionell durchgeführte
                Fassadenrenovation schützt nicht nur die Substanz, sondern steigert auch den Wert Ihrer Liegenschaft.
              </p>
              <p className="text-[17px] leading-relaxed mb-4">
                Wir garantieren fachgerechte Qualitätsarbeit mit Liebe zum Detail — von der sorgfältigen Untergrundbehandlung
                bis zum abschliessenden Qualitätskontrollgang mit dem Kunden.
              </p>
              <p className="text-[17px] leading-relaxed">
                Unser Einsatzgebiet umfasst den Grossraum Zürich und Flughafenregion: Wallisellen, Opfikon, Kloten,
                Bassersdorf, Brüttisellen, Wangen, Dübendorf, Effretikon und Winterthur.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.08}>
              <h3 className="mb-6 text-[1.2rem]">Unsere Aussenarbeiten</h3>
              <CheckList items={aussenServices} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* —— Raumgestaltung —— */}
      <section id="raumgestaltung" className="section section-surface-muted scroll-mt-[88px]">
        <div className="container">
          <SectionBanner sectionKey="raumgestaltung" />
          <AnimatedSection>
            <span className="brand-rule" />
            <h2 className="mb-4 mt-2 text-gradient-heading">Raumgestaltung</h2>
            <p className="text-[17px] leading-relaxed max-w-2xl mb-12">
              Individuelle Raumgestaltung, Farbberatung und Kreativität. Handwerkliche Techniken, die Ihren Wohntraum
              einzigartig machen.
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <h3 className="mb-6 text-[1.2rem]">Kreativität & Kunsthandwerk</h3>
              <p className="text-[17px] leading-relaxed mb-4">
                Raumgestaltung ist weit mehr als Farbe auf die Wand. Es ist die Kunst, mit Materialien, Texturen und Farben
                eine Atmosphäre zu schaffen, die Ihren persönlichen Stil widerspiegelt.
              </p>
              <p className="text-[17px] leading-relaxed mb-4">
                Unsere Fachkräfte beherrschen ein breites Spektrum dekorativer Techniken — von klassischen Lasuren bis zu
                modernen Spachtelarbeiten. Wir beraten Sie kompetent bei der Farbwahl und dem passenden Konzept für Ihren
                Raum.
              </p>
              <p className="text-[17px] leading-relaxed">
                Ob Privatwohnung, Geschäftslokal oder öffentlicher Raum — wir verwirklichen Ihre Vorstellungen mit
                handwerklicher Präzision.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.08}>
              <h3 className="mb-6 text-[1.2rem]">Dekorationstechniken</h3>
              <CheckList items={raumTechniques} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* —— Historische Bauten —— */}
      <section id="historische-bauten" className="section section-surface scroll-mt-[88px]">
        <div className="container">
          <SectionBanner sectionKey="historische-bauten" />
          <AnimatedSection>
            <span className="brand-rule" />
            <h2 className="mb-4 mt-2 text-gradient-heading">Historische Bauten</h2>
            <p className="text-[17px] leading-relaxed max-w-2xl mb-12">
              Werterhaltung und Schutz mit Respekt vor der Bausubstanz. Mit dem Fachausweis als Eidg. Handwerker der
              Denkmalpflege.
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <h3 className="mb-6 text-[1.2rem]">Denkmalpflege mit Kompetenz</h3>
              <p className="text-[17px] leading-relaxed mb-4">
                Die Arbeit an historischen Bauten erfordert besondere Sorgfalt, fundiertes Fachwissen und ein tiefes
                Verständnis für die Baugeschichte. Unsere Fachkräfte sind speziell für diese anspruchsvolle Aufgabe
                ausgebildet.
              </p>
              <p className="text-[17px] leading-relaxed mb-8">
                Wir arbeiten eng mit den zuständigen Denkmalpflegebehörden zusammen und verwenden ausschliesslich historisch
                angepasste Materialien. Das Ziel ist immer die langfristige Werterhaltung.
              </p>
              <h4 className="mb-5 text-[1.05rem]">Unsere Stärken</h4>
              <CheckList items={historischeStaerken} />
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.08}>
              <div
                className="relative rounded-2xl overflow-hidden aspect-[4/5] max-h-[420px] mb-8 shadow-[var(--shadow-lg)] ring-1 ring-black/[0.06]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=85"
                  alt="Detail historischer Fassade"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
              </div>
              <div className="rounded-xl border border-[var(--line)] bg-white/80 backdrop-blur-sm p-5 shadow-[var(--shadow)]">
                <h4 className="mb-4 text-[1.05rem] text-gradient-heading">Referenzobjekte</h4>
                <ul className="space-y-2.5">
                  {historischeRefs.map((r) => (
                    <li
                      key={r}
                      className="flex items-center gap-2.5"
                      style={{ fontSize: "14.5px", color: "var(--muted)" }}
                    >
                      <span
                        className="shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ background: "var(--brand-red)" }}
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* —— kt.COLOR —— */}
      <section id="kt-color" className="section section-surface-muted scroll-mt-[88px]">
        <div className="container">
          <SectionBanner sectionKey="kt-color" />
          <AnimatedSection>
            <span className="brand-rule" />
            <h2 className="mb-4 mt-2 text-gradient-heading">kt.COLOR – Meister der Farben®</h2>
            <p className="text-[17px] leading-relaxed max-w-2xl mb-12">
              Partnership mit kt.COLOR seit 2025. Die feinsten Farben der Welt — mit zertifizierten Meistern bei Bernhard.
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h3 className="mb-6 text-[1.2rem]">Die Welt der Farben</h3>
              <p className="text-[17px] leading-relaxed mb-4">
                Seit 2025 sind wir offizieller kt.COLOR-Partner. Mehrere unserer Mitarbeitenden haben die Zertifizierung zum
                kt.COLOR-Meister der Farben® erworben.
              </p>
              <p className="text-[17px] leading-relaxed mb-4">
                kt.COLOR steht für aussergewöhnliche Farbqualität und ein einzigartiges Farbsortiment — von tiefen, satten
                Tönen bis zu edlen Metallic-Effekten. Die gesamte Musterkollektion, inklusive Spezial-Metallic-Effektfarben,
                steht Ihnen bei uns vor Ort zur Verfügung.
              </p>
              <p className="text-[17px] leading-relaxed">
                Lassen Sie sich von unseren Farbexperten zu den Möglichkeiten von kt.COLOR beraten — für Ergebnisse, die
                begeistern.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.08}>
              <div className="grid grid-cols-2 gap-4">
                {ktSwatches.map((swatch) => (
                  <div
                    key={swatch.name}
                    className="rounded-xl overflow-hidden border border-[var(--line)] bg-white shadow-[var(--shadow)] hover:shadow-[var(--shadow-lg)] transition-shadow"
                  >
                    <div className="h-[88px]" style={{ background: swatch.color }} />
                    <div className="p-3">
                      <p className="text-[13px] font-bold">{swatch.name}</p>
                      <p className="text-[12px] text-[var(--muted)] mt-1">{swatch.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[12.5px] text-[var(--muted)] mt-4">
                * Farbmuster zur Illustration. Vollständige kt.COLOR-Kollektion in unserem Betrieb erhältlich.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Impressionen */}
      <section className="section section-surface">
        <div className="container">
          <AnimatedSection>
            <span className="brand-rule" />
            <h2 className="mb-10 text-gradient-heading">Impressionen</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {impressionGrid.map((src, i) => (
              <AnimatedSection key={src} delay={i * 0.06}>
                <div className="rounded-xl overflow-hidden aspect-square ring-1 ring-black/[0.06] shadow-[var(--shadow)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`Projekt ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta-soft">
        <div className="container text-center">
          <AnimatedSection>
            <span className="brand-rule mx-auto" />
            <h2 className="mb-4 text-gradient-heading">Projekt besprechen?</h2>
            <p className="text-[17px] text-[var(--muted)] mb-8 max-w-lg mx-auto">
              Kostenlose Beratung vor Ort, transparente Offerten und fachgerechte Ausführung — von Innenraum bis Fassade.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/kontakt/anfrage"
                className="btn btn-primary inline-flex items-center justify-center font-bold text-[14px] px-6 py-3 transition-transform duration-200 hover:scale-[1.02]"
              >
                Offerte anfragen
              </Link>
              <a href="tel:+41448332251" className="btn btn-outline">
                044 833 22 51
              </a>
            </div>
            <div className="h-[1.65em]" aria-hidden />
            <div className="h-[1.65em]" aria-hidden />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
