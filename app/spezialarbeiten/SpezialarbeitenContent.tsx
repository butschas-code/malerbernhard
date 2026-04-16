"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const HERO_PLACEHOLDER = "/hero_spezialarbeiten.png";

const overview = [
  { id: "schimmelpilzsanierung", label: "Schimmelpilzsanierung" },
  { id: "gesundes-wohnen", label: "Gesundes Wohnen" },
  { id: "naturofloor", label: "Naturofloor" },
  { id: "spritzwerk", label: "Spritzwerk" },
  { id: "niederdruck", label: "Niederdruck-Strahlen" },
] as const;

const sectionVisuals = {
  schimmelpilzsanierung: {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=85",
    alt: "Schimmelpilzsanierung und Facharbeit",
  },
  "gesundes-wohnen": {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=85",
    alt: "Gesundes Wohnen und natürliche Materialien",
  },
  naturofloor: {
    src: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1600&q=85",
    alt: "Fugenlose Boden- und Wandflächen",
  },
  spritzwerk: {
    src: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=1600&q=85",
    alt: "Spritzwerk und Lackierung",
  },
  niederdruck: {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85",
    alt: "Niederdruck-Strahlen und Oberflächen",
  },
} as const;

type SectionKey = keyof typeof sectionVisuals;

function SectionBanner({ sectionKey }: { sectionKey: SectionKey }) {
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

const schimmelSteps = [
  {
    n: "1",
    title: "Befundaufnahme",
    text: "Wir analysieren das Ausmass des Befalls und ermitteln die Ursachen (Feuchte, Wärmebrücken, Lüftungsverhalten).",
  },
  {
    n: "2",
    title: "Sanierungskonzept",
    text: "Auf Basis der Analyse erstellen wir ein massgeschneidertes Sanierungskonzept mit Mineralputzen.",
  },
  {
    n: "3",
    title: "Fachgerechte Ausführung",
    text: "Entfernung des befallenen Materials, Desinfektion und Wiederherstellung mit SCHIMEX-Mineralputz.",
  },
  {
    n: "4",
    title: "Nachbetreuung",
    text: "Beratung zur Prävention (Lüftungsverhalten, Heizen) für dauerhaften Schutz.",
  },
];

const naturofloorProps = [
  "Fugenloses System — keine Schmutzränder",
  "Direkt auf Böden, Wände und bestehende Fliesen aufbringbar",
  "Staubfrei und lärmarm — Renovation ohne Lärm",
  "5-Schicht-Aufbau mit 3-facher Versiegelung",
  "Rissfest, langlebig und atmungsaktiv",
  "Reinigung: klares Wasser und Microfasertuch",
  "Optik: kühl-modern oder wohnlich-behaglich",
];

const spritzwerkItems = [
  "Möbel und Kleinteile",
  "Geländer und Handläufe",
  "Türen und Fensterläden",
  "Einbauteile und Regale",
  "Küchenkombinationen",
  "Schrankfronten",
  "Gartentische und -möbel",
];

const niederdruckApps = [
  "Tische und Bänke",
  "Geländer und Verkleidungen",
  "Holz- und Metallschränke",
  "Kleine Möbel und Einrichtungsgegenstände",
  "Fensterläden",
  "Deckensoffiten und -untersichten",
  "Graffiti an Natur- und Kunststein",
  "Fest eingebaute Elemente (ohne Demontage)",
];

const impressionGrid = [
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80",
  "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
];

const heroStamps = ["SCHIMEX · Partner", "Naturofloor", "Seit 1911"];

export default function SpezialarbeitenContent() {
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
      <section
        ref={heroRef}
        className="relative min-h-[88dvh] flex items-end overflow-hidden bg-[var(--ink)]"
      >
        <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale, zIndex: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={HERO_PLACEHOLDER} alt="" className="absolute inset-0 w-full h-full object-cover" />
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
              {heroStamps.map((s, stampIdx) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + stampIdx * 0.07, duration: 0.45 }}
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
              <span className="text-white">Spezialarbeiten</span>
              <br />
              <span className="text-gradient-hero">aus einer Hand.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              style={{ color: "rgba(255,255,255,0.88)", fontSize: "17px", lineHeight: 1.65, marginTop: "1.25rem" }}
            >
              Von der Schimmelpilzsanierung über gesundes Wohnen und fugenlose Bodenbeläge bis zu Spritzwerk und
              Niederdruckstrahlen — kompetente Speziallösungen aus einer Hand.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28 }}
              style={{ color: "rgba(255,255,255,0.88)", fontSize: "17px", lineHeight: 1.65, marginTop: "1rem" }}
            >
              Wo Standard reicht nicht aus, bringen wir spezialisierte Verfahren, geprüfte Systeme und fachkundige Beratung
              ein — für dauerhafte, wohnungsgesunde Ergebnisse, die Sie zuverlässig weiterempfehlen können.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.38 }}
              className="flex flex-col sm:flex-row flex-wrap justify-end gap-3 mt-8"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link href="/kontakt/anfrage" className="btn btn-primary w-full sm:w-auto justify-center">
                  Offerte anfragen
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <a href="tel:+41448332251" className="btn btn-white w-full sm:w-auto justify-center">
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
            <nav aria-label="Spezialarbeiten Abschnitte" className="flex flex-wrap justify-center gap-2.5">
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

      {/* Schimmelpilzsanierung */}
      <section id="schimmelpilzsanierung" className="section section-surface-muted scroll-mt-[88px]">
        <div className="container">
          <SectionBanner sectionKey="schimmelpilzsanierung" />
          <AnimatedSection>
            <span className="brand-rule" />
            <h2 className="mb-4 mt-2 text-gradient-heading">Schimmelpilzsanierung</h2>
            <p className="text-[17px] leading-relaxed max-w-2xl mb-12">
              Langfristige und fungizidfreie Sanierung von Schimmelpilzbefall. Gesund wohnen — nachhaltig saniert.
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <h3 className="mb-6 text-[1.2rem]">Schimmelpilz — ein ernstes Problem</h3>
              <p className="text-[17px] leading-relaxed mb-4">
                Schimmelpilzbefall in Wohnräumen ist nicht nur unästhetisch, sondern kann auch die Gesundheit der Bewohner
                ernsthaft beeinträchtigen. Eine fachgerechte Sanierung ist zwingend notwendig.
              </p>
              <p className="text-[17px] leading-relaxed mb-4">
                Mit unserer Spezialisierung auf <strong>SCHIMEX</strong> bieten wir eine langfristige, fungizidfreie
                Sanierung mit natürlichen mineralischen Baustoffen. Diese schaffen ein optimales, schimmelresistentes
                Raumklima ohne chemische Mittel.
              </p>
              <p className="text-[17px] leading-relaxed mb-6">
                Wir sanieren den Schimmelbefall gründlich, beseitigen die Ursachen und sorgen für ein dauerhaft gesundes
                Wohnklima.
              </p>
              <div
                className="bg-white rounded-lg p-6 border-l-[3px] border-[var(--brand-red)] shadow-[var(--shadow)]"
              >
                <p className="text-[14.5px] font-semibold">Spezialist SCHIMEX</p>
                <p className="text-[14px] text-[var(--muted)] mt-2 leading-relaxed">
                  Natürliche, mineralische Baustoffe · Fungizidfreie Methode · Langfristig wirksam · Gesundes Raumklima
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.08}>
              <h3 className="mb-5 text-[1.1rem]">Unser Vorgehen</h3>
              {schimmelSteps.map((step) => (
                <div key={step.n} className="flex gap-4 mb-6">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white"
                    style={{ background: "var(--brand-tertiary)" }}
                  >
                    {step.n}
                  </div>
                  <div>
                    <p className="font-bold mb-1">{step.title}</p>
                    <p className="text-[14.5px] text-[var(--muted)] leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
              <a
                href="https://www.schimmelpilzsanierer.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-[13.5px] font-semibold text-[var(--brand)]"
              >
                SCHIMEX-Partnerseite →
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Gesundes Wohnen */}
      <section id="gesundes-wohnen" className="section section-surface scroll-mt-[88px]">
        <div className="container">
          <SectionBanner sectionKey="gesundes-wohnen" />
          <AnimatedSection>
            <span className="brand-rule" />
            <h2 className="mb-4 mt-2 text-gradient-heading">Gesundes Wohnen</h2>
            <p className="text-[17px] leading-relaxed max-w-2xl mb-12">
              Elektrosmog-Abschirmung und Lehmputz — für ein natürliches, gesundes Raumklima.
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left">
              <h3 className="mb-6 text-[1.2rem]">Elektrosmog­abschirmung</h3>
              <p className="text-[17px] leading-relaxed mb-4">
                Hochfrequente elektromagnetische Strahlung ist in modernen Gebäuden allgegenwärtig. Mit unserer
                Spezial-Abschirmungsbeschichtung reduzieren wir diese Belastung drastisch.
              </p>
              <div className="space-y-4 mb-6">
                {[
                  { label: "Dämpfung", value: "36 dB" },
                  { label: "Abschirmungsgrad", value: "ca. 99,98 %" },
                  { label: "Schutz vor", value: "Hochfrequenzwellen (WLAN, Mobilfunk)" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-3 border-b border-[var(--line)]"
                  >
                    <span className="text-[14.5px] text-[var(--muted)]">{item.label}</span>
                    <span className="text-[14.5px] font-bold text-[var(--brand)]">{item.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-[14px] text-[var(--muted)]">Technische Dokumentation auf Anfrage erhältlich.</p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.08}>
              <h3 className="mb-6 text-[1.2rem]">Lehmputz</h3>
              <p className="text-[17px] leading-relaxed mb-4">
                Lehm ist eines der ältesten Baumaterialien der Welt und erlebt eine Renaissance im modernen Innenausbau. Er
                reguliert die Raumluftfeuchte auf natürliche Weise und schafft ein angenehmes Wohnklima.
              </p>
              <p className="text-[17px] leading-relaxed mb-6">
                Moderne Lehmprodukte entsprechen dem Trend zu natürlichem, gesundem Wohnen und lassen sich in verschiedensten
                Oberflächen und Texturen verarbeiten.
              </p>
              <div className="rounded-xl border border-[var(--line)] bg-white/90 backdrop-blur-sm p-5 shadow-[var(--shadow)]">
                <h4 className="mb-3 text-[1.05rem]">Vorteile von Lehmputz</h4>
                <ul className="space-y-2">
                  {[
                    "Reguliert Raumluftfeuchtigkeit natürlich",
                    "Wohngesund und emissionsfrei",
                    "Hervorragende Haptik und Optik",
                    "Nachhaltiges, recyclefähiges Material",
                    "Kombinierbar mit dekorativen Techniken",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[14px] text-[var(--muted)]">
                      <span
                        className="shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ background: "var(--brand-secondary)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Naturofloor */}
      <section id="naturofloor" className="section section-surface-muted scroll-mt-[88px]">
        <div className="container">
          <SectionBanner sectionKey="naturofloor" />
          <AnimatedSection>
            <span className="brand-rule" />
            <h2 className="mb-4 mt-2 text-gradient-heading">Naturofloor</h2>
            <p className="text-[17px] leading-relaxed max-w-2xl mb-12">
              Fugenlose Wand- und Bodenbeläge aus Weisszement und Quarzsand. Renovation ganz ohne Staub und Baulärm.
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <h3 className="mb-6 text-[1.2rem]">Das fugenlose System</h3>
              <p className="text-[17px] leading-relaxed mb-4">
                Naturofloor ist ein modernes Beschichtungssystem auf Basis von Weisszement und Quarzsand. Es schafft nahtlose
                Oberflächen, die sowohl optisch wie auch funktional überzeugen.
              </p>
              <p className="text-[17px] leading-relaxed mb-4">
                Das System wird in 5 Schritten direkt auf bestehende Böden, Wände und Fliesen aufgebracht und abschliessend
                dreifach versiegelt. So entsteht eine robuste, langlebige Oberfläche —{" "}
                <strong>ganz ohne Staub und Baulärm</strong>.
              </p>
              <p className="text-[17px] leading-relaxed">
                Die Pflege ist denkbar einfach: klares Wasser mit einem Microfasertuch genügt für die tägliche Reinigung.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.08}>
              <h3 className="mb-5 text-[1.1rem]">Eigenschaften & Vorteile</h3>
              <CheckList items={naturofloorProps} />
              <div
                className="rounded-xl p-6 mt-8 text-white shadow-[var(--shadow)]"
                style={{ background: "var(--brand-secondary)" }}
              >
                <p className="text-[13px] font-bold tracking-[0.1em] uppercase opacity-80 mb-2">Ideal für</p>
                <p className="text-[15px] leading-relaxed">
                  Badezimmer · Küchen · Wohnräume · Treppenhäuser · Büros — überall dort, wo fugenlose Eleganz gefragt ist.
                </p>
              </div>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16">
            {[
              "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80",
              "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
            ].map((src, i) => (
              <AnimatedSection key={src} delay={i * 0.06}>
                <div className="rounded-xl overflow-hidden aspect-square ring-1 ring-black/[0.06] shadow-[var(--shadow)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`Naturofloor ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Spritzwerk */}
      <section id="spritzwerk" className="section section-surface scroll-mt-[88px]">
        <div className="container">
          <SectionBanner sectionKey="spritzwerk" />
          <AnimatedSection>
            <span className="brand-rule" />
            <h2 className="mb-4 mt-2 text-gradient-heading">Spritzwerk</h2>
            <p className="text-[17px] leading-relaxed max-w-2xl mb-12">
              Ideal für Einzelanfertigungen und Kleinserien. Professionell lackiert — für makellose Oberflächen.
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <h3 className="mb-6 text-[1.2rem]">Präzision auf kleinstem Raum</h3>
              <p className="text-[17px] leading-relaxed mb-4">
                Mit unserem Fördersystem ermöglichen wir eine effiziente Einzel-Schritt-Produktion für Kleinserien und
                Einzelstücke. Jedes Teil wird sorgfältig gereinigt, vorbereitet und lackiert.
              </p>
              <p className="text-[17px] leading-relaxed mb-4">
                Unsere eigene Farbmischanlage erlaubt es uns, exakt die gewünschte Farbe zu treffen — nach RAL, NCS oder Ihrer
                individuellen Farbangabe.
              </p>
              <p className="text-[17px] leading-relaxed">
                Die professionelle Oberflächenreinigung erfolgt mit unserem Niederdruckstrahler, der selbst hartnäckige
                Farbschichten schonend entfernt.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.08}>
              <h3 className="mb-5 text-[1.1rem]">Objekte, die wir bearbeiten</h3>
              <div className="mb-8">
                <CheckList items={spritzwerkItems} />
              </div>
              <div className="rounded-xl border border-[var(--line)] bg-[var(--paper)] p-5">
                <p className="text-[13.5px] font-bold mb-1">Eigene Farbmischanlage</p>
                <p className="text-[13.5px] text-[var(--muted)] leading-relaxed">
                  RAL · NCS · individuelle Farbcodes · passgenaue Farbabstimmung
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Niederdruck-Strahlen */}
      <section id="niederdruck" className="section section-surface-muted scroll-mt-[88px]">
        <div className="container">
          <SectionBanner sectionKey="niederdruck" />
          <AnimatedSection>
            <span className="brand-rule" />
            <h2 className="mb-4 mt-2 text-gradient-heading">Niederdruck-Strahlen</h2>
            <p className="text-[17px] leading-relaxed max-w-2xl mb-12">
              Objektschonende Entlackung und Graffiti-Entfernung. Bis in jede Ecke und Fuge — ohne das Material zu
              beschädigen.
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <h3 className="mb-6 text-[1.2rem]">Schonend und effektiv</h3>
              <p className="text-[17px] leading-relaxed mb-4">
                Unser Niederdruckstrahler arbeitet mit Natriumbicarbonat (Backpulver-Granulat) oder Glasgranulat und entfernt
                Lacke und Lasuren, ohne das darunterliegende Material zu beschädigen.
              </p>
              <p className="text-[17px] leading-relaxed mb-4">
                Die Methode eignet sich besonders für Objekte, die nicht demontiert werden können oder sollen. Das Strahlmittel
                erreicht auch schwer zugängliche Ecken und Fugen.
              </p>
              <p className="text-[17px] leading-relaxed">
                Auch für die Entfernung von Graffiti an Natur- und Kunststein ist das Niederdruckverfahren ideal —
                materialschonend und effektiv.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.08}>
              <h3 className="mb-5 text-[1.1rem]">Anwendungsgebiete</h3>
              <CheckList items={niederdruckApps} />
              <div className="rounded-xl bg-white border border-[var(--line)] p-6 mt-8 shadow-[var(--shadow)]">
                <p className="text-[13.5px] font-bold mb-3">Strahlmittel</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "Natriumbicarbonat", desc: "Sehr schonend, wasserlöslich" },
                    { name: "Glasgranulat", desc: "Robuster, für hartnäckige Lacke" },
                  ].map((m) => (
                    <div key={m.name} className="rounded-lg bg-[var(--paper)] p-3">
                      <p className="text-[13px] font-bold">{m.name}</p>
                      <p className="text-[12px] text-[var(--muted)]">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

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
                    alt={`Spezialarbeit ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-cta-soft">
        <div className="container text-center">
          <AnimatedSection>
            <span className="brand-rule mx-auto" />
            <h2 className="mb-4 text-gradient-heading">Spezialprojekt geplant?</h2>
            <p className="text-[17px] text-[var(--muted)] mb-8 max-w-lg mx-auto">
              Wir beraten Sie zu Sanierung, Beschichtungen und Oberflächen — transparent und fachgerecht.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/kontakt/anfrage"
                className="btn btn-primary inline-flex items-center justify-center font-bold text-[14px] px-6 py-3 transition-transform duration-200 hover:scale-[1.02]"
              >
                Anfrage stellen
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
