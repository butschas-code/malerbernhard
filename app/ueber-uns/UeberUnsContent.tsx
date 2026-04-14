"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=1920&q=85";

const heroStamps = ["Familienbetrieb", "Seit 1911", "Dietlikon"];

const principles = [
  {
    title: "Qualität & Zuverlässigkeit",
    text: "Sauberes, emissionsarmes Arbeiten, Einhaltung von Terminplänen und eine gemeinsame Qualitätskontrolle nach Projektabschluss sind für uns selbstverständlich.",
  },
  {
    title: "Ökologische Verantwortung",
    text: "Materialbeschaffung, -verarbeitung und Entsorgung erfolgen nach aktuellen ökologischen Massstäben. Wir arbeiten mit umweltverträglichen Produkten und Systemen.",
  },
  {
    title: "Kundenzufriedenheit",
    text: "Durch gründliche Beratungsgespräche stellen wir sicher, dass Ihre Wünsche und Erwartungen vollumfänglich erfüllt werden. Ihr Wohlbefinden steht im Mittelpunkt.",
  },
  {
    title: "Partnerschaftliche Garantie",
    text: "Allfällige Garantieansprüche werden in enger Zusammenarbeit mit den Materiallieferanten geklärt — dabei haben die Interessen des Kunden stets Priorität.",
  },
  {
    title: "Langfristiges Denken",
    text: "Alle Geschäftsaktivitäten sind darauf ausgerichtet, das langfristige Bestehen des Unternehmens zu fördern. Wir denken in Generationen, nicht in Quartalen.",
  },
  {
    title: "SMGV-Mitglied",
    text: "Als Mitglied des Schweizerischen Maler- und Gipserunternehmer-Verbands halten wir die branchenüblichen Standards und Normen ein.",
  },
];

const timeline = [
  {
    year: "1911",
    person: "Gottlieb Bernhard",
    title: "Gründung",
    text: "Gottlieb Bernhard gründet das Malergeschäft in Dietlikon. Der Grundstein für eine über 100-jährige Familientradition wird gelegt.",
    last: false,
  },
  {
    year: "1946",
    person: "Heinrich Bernhard",
    title: "Zweite Generation",
    text: "Nach dem unerwarteten Tod von Gottlieb übernimmt Heinrich Bernhard im Alter von 26 Jahren die Leitung und führt den Betrieb erfolgreich weiter.",
    last: false,
  },
  {
    year: "1980",
    person: "Peter Bernhard",
    title: "Dritte Generation",
    text: "Peter Bernhard übernimmt das Geschäft und prägt es über 31 Jahre mit seiner Handwerkskunst und seinem Unternehmergeist.",
    last: false,
  },
  {
    year: "2012",
    person: "Thomas Bernhard",
    title: "Vierte Generation",
    text: "Thomas Bernhard übernimmt die Führung von seinem Vater Peter und führt das Traditionsunternehmen mit modernem Spirit und ungebrochener handwerklicher Exzellenz weiter.",
    last: true,
  },
];

const supported = [
  { name: "UHC Kloten-Dietlikon Jets", sport: "Unihockey" },
  { name: "EHC Bassersdorf", sport: "Eishockey" },
  { name: "Tennisclub Dietlikon", sport: "Tennis" },
  { name: "MVD – Musikverein Dietlikon", sport: "Musik" },
  { name: "THD – Theater Dietlikon", sport: "Theater" },
];

const certifications = [
  {
    title: "TOP-Ausbildungsbetrieb",
    org: "Berufsbildungsverband",
    desc: "Zertifizierter Ausbildungsbetrieb mit dokumentierter Qualitätsausbildung für Lernende.",
  },
  {
    title: "Leistungssportfreundlicher Lehrbetrieb",
    org: "Swiss Olympic",
    desc: "Offiziell zertifiziert für die parallele Berufsausbildung und Leistungssportkarriere.",
  },
  {
    title: "kt.COLOR-Meister der Farben®",
    org: "kt.COLOR",
    desc: "Mehrere Mitarbeitende sind zertifizierte kt.COLOR-Verarbeiter und Meister der Farben®.",
  },
  {
    title: "Eidg. Handwerker der Denkmalpflege",
    org: "Bundesamt für Kultur",
    desc: "Fachausweis für die Arbeit an historischen Bauten und Denkmälern.",
  },
  {
    title: "SMGV-Mitglied",
    org: "SMGV",
    desc: "Mitglied des Branchenverbands — Einhaltung aller Branchenstandards und Normen.",
  },
  {
    title: "SCHIMEX-Spezialist",
    org: "Schimex",
    desc: "Ausgebildet für die langfristige, fungizidfreie Schimmelpilzsanierung.",
  },
];

const sectionVisuals: Record<string, { src: string; alt: string }> = {
  philosophie: {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=85",
    alt: "Handwerk mit Qualität und Sorgfalt",
  },
  generationen: {
    src: "https://images.unsplash.com/photo-1578302758063-5f57fb21ce2d?w=1600&q=85",
    alt: "Familientradition seit 1911",
  },
  engagement: {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=85",
    alt: "Engagement für die Gemeinschaft",
  },
  knowhow: {
    src: "https://images.unsplash.com/photo-1503602642458-232111445657?w=1600&q=85",
    alt: "Zertifikate und Knowhow",
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

export default function UeberUnsContent() {
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
      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative min-h-[88dvh] flex items-end overflow-hidden bg-[var(--ink)]"
      >
        <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale, zIndex: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGE}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 1,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.38) 100%), linear-gradient(to left, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.18) 45%, rgba(0,0,0,0) 78%)",
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
              Unternehmen
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", lineHeight: 1.04 }}
            >
              <span className="text-white">Maler Bernhard —</span>
              <br />
              <span className="text-gradient-hero">seit 1911.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              style={{ color: "rgba(255,255,255,0.88)", fontSize: "17px", lineHeight: 1.65, marginTop: "1.25rem" }}
            >
              Das Malergeschäft Bernhard AG steht seit vier Generationen für fundiertes
              Handwerk, ökologische Verantwortung und echte Kundenzufriedenheit im Glatttal
              und Grossraum Zürich.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28 }}
              style={{ color: "rgba(255,255,255,0.88)", fontSize: "17px", lineHeight: 1.65, marginTop: "1rem" }}
            >
              12 ausgewiesene Fachkräfte — darunter Meistermaler, Vorarbeiter und Lernende —
              setzen Ihre Projekte mit Präzision, Sauberkeit und Leidenschaft um.
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

      {/* ─── Brand strip ─── */}
      <div
        style={{
          height: "6px",
          background: "linear-gradient(90deg, var(--brand-red) 0%, var(--brand-secondary) 50%, var(--brand-tertiary) 100%)",
        }}
      />

      {/* ─── Company overview ─── */}
      <section className="section section-surface">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <span className="brand-rule" />
              <h2 className="mb-6 text-gradient-heading">Das gesamte Spektrum</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Das Malergeschäft Bernhard AG umfasst das gesamte Spektrum der
                Oberflächengestaltung und -beschichtung mit einer faszinierenden
                Vielfalt von Gestaltungsmöglichkeiten.
              </p>
              <p className="text-[17px] leading-relaxed mb-4">
                12 ausgewiesene Fachkräfte — darunter diplomierte Meistermaler,
                Vorarbeiter, Kundenmaler und Lernende — setzen Ihre Projekte mit
                Präzision und Leidenschaft um.
              </p>
              <p className="text-[17px] leading-relaxed mb-6">
                Bei grösseren Objekten arbeiten wir eng mit unserem Partner
                Aeschbach & Co. zusammen, um auch umfangreiche Projekte termingerecht
                und in höchster Qualität umzusetzen.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Familienbetrieb", "Seit 1911", "Dietlikon", "Glatttal", "SMGV"].map((s) => (
                  <span key={s} className="stamp">{s}</span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { n: "12+", l: "Fachkräfte" },
                  { n: "4", l: "Generationen" },
                  { n: "1911", l: "Gegründet" },
                  { n: "100+", l: "Jahre Erfahrung" },
                ].map((stat) => (
                  <div
                    key={stat.l}
                    className="rounded-xl p-5 text-center border border-[var(--line)] bg-[var(--paper)] shadow-[var(--shadow)]"
                  >
                    <p className="text-[2.2rem] font-bold text-gradient-heading leading-none">{stat.n}</p>
                    <p className="text-[12px] font-semibold uppercase tracking-wider text-[var(--muted)] mt-1">{stat.l}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/ueber-uns/team" className="btn btn-primary">
                  Unser Team
                </Link>
                <Link href="/ueber-uns/ausbildungsbetrieb" className="btn btn-outline">
                  Ausbildungsbetrieb
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Philosophie ─── */}
      <section className="section section-surface-muted">
        <div className="container">
          <SectionBanner sectionKey="philosophie" />
          <AnimatedSection className="mb-12">
            <span className="brand-rule" />
            <h2 className="mb-4 text-gradient-heading">Unser Leistungsversprechen</h2>
            <p className="text-[17px] text-[var(--muted)] leading-relaxed max-w-2xl">
              „Alle Geschäftsaktivitäten nach innen und aussen sind so ausgerichtet,
              dass sie dem langfristigen Bestehen des Geschäftes förderlich sind."
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {principles.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.06}>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-[var(--line)] p-6 h-full shadow-[var(--shadow)]">
                  <div className="w-8 h-1 rounded mb-4" style={{ background: "var(--brand-red)" }} />
                  <h3 className="text-[1rem] font-bold mb-3">{p.title}</h3>
                  <p className="text-[14.5px] text-[var(--muted)] leading-relaxed">{p.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Vier Generationen ─── */}
      <section className="section section-surface">
        <div className="container">
          <SectionBanner sectionKey="generationen" />
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <span className="brand-rule" />
              <h2 className="mb-4 text-gradient-heading">
                Vertrauen durch
                <br />vier Generationen.
              </h2>
              <p className="text-[17px] leading-relaxed text-[var(--muted)]">
                Was 1911 mit Gottlieb Bernhard begann, ist heute ein modernes
                Malergeschäft mit 12 Fachkräften — geführt in der vierten Generation
                mit denselben Werten: Qualität, Verlässlichkeit und Handwerksstolz.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="relative pl-8">
                <div className="absolute left-0 top-2 bottom-2 w-px bg-[var(--line)]" />
                <div className="space-y-10">
                  {timeline.map((item) => (
                    <div key={item.year} className="relative">
                      <div
                        className="absolute -left-8 top-1 w-4 h-4 rounded-full border-2 border-white z-10"
                        style={{ background: item.last ? "var(--brand-red)" : "var(--brand)" }}
                      />
                      <span
                        className="inline-block mb-1.5 font-bold text-[12px] px-2.5 py-0.5 rounded text-white"
                        style={{ background: item.last ? "var(--brand-red)" : "var(--brand)" }}
                      >
                        {item.year}
                      </span>
                      <h3 className="text-[1.05rem] font-bold mb-0.5">{item.person}</h3>
                      <p className="text-[12px] text-[var(--muted)] font-semibold uppercase tracking-wide mb-2">{item.title}</p>
                      <p className="text-[15.5px] leading-relaxed opacity-85">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Kultur & Engagement ─── */}
      <section className="section section-surface-muted">
        <div className="container">
          <SectionBanner sectionKey="engagement" />
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <span className="brand-rule" />
              <h2 className="mb-6 text-gradient-heading">Verwurzelt in Dietlikon</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Seit über 100 Jahren ist das Malergeschäft Bernhard AG ein fester
                Bestandteil der Dorfgemeinschaft Dietlikon. Unser Engagement geht
                weit über den Malerberuf hinaus.
              </p>
              <p className="text-[17px] leading-relaxed mb-4">
                Jährlich gestalten wir die Bühnenbilder für den{" "}
                <strong>Theaterverein Dietlikon</strong>. Diese Arbeit kombiniert
                unser handwerkliches Fachwissen mit Kreativität und ist gleichzeitig
                eine wertvolle Ausbildungsplattform für unsere Lernenden.
              </p>
              <p className="text-[17px] leading-relaxed">
                Auch den bekannten <strong>Dietliker Goldstern</strong> pflegen wir mit
                Stolz — unsere Werkstatt produziert die grösste Version dieses lokalen Symbols.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <h3 className="mb-5 text-[1.2rem]">Unterstützte Vereine & Organisationen</h3>
              <div className="space-y-3">
                {supported.map((org) => (
                  <div
                    key={org.name}
                    className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/80 border border-[var(--line)] shadow-[var(--shadow)]"
                  >
                    <div>
                      <p className="text-[15px] font-bold">{org.name}</p>
                      <p className="text-[13px] text-[var(--muted)]">{org.sport}</p>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" fill="var(--brand)" />
                      <path d="M5 8l2.5 2.5 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Zertifikate & Knowhow ─── */}
      <section className="section section-surface">
        <div className="container">
          <SectionBanner sectionKey="knowhow" />
          <AnimatedSection className="mb-12">
            <span className="brand-rule" />
            <h2 className="mb-4 text-gradient-heading">Ausgezeichnete Kompetenz</h2>
            <p className="text-[17px] text-[var(--muted)] max-w-xl">
              Unsere Zertifizierungen und Auszeichnungen belegen unser kontinuierliches
              Streben nach Qualität und fachlicher Exzellenz.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <AnimatedSection key={cert.title} delay={i * 0.07}>
                <div className="bg-[var(--paper)] rounded-xl p-6 h-full border border-[var(--line)] shadow-[var(--shadow)]">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: "var(--brand)", color: "white" }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-[1rem] font-bold mb-1">{cert.title}</h3>
                  <p className="text-[12px] font-semibold text-[var(--brand)] mb-2 tracking-wide">{cert.org}</p>
                  <p className="text-[14px] text-[var(--muted)] leading-relaxed">{cert.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-cta-soft">
        <div className="container text-center">
          <AnimatedSection>
            <span className="brand-rule mx-auto" />
            <h2 className="mb-4 text-gradient-heading">Projekt besprechen?</h2>
            <p className="text-[17px] text-[var(--muted)] mb-8 max-w-lg mx-auto">
              Kostenlose Beratung, transparente Offerten und fachgerechte Ausführung —
              von Innenraum bis Fassade, im Glatttal und Grossraum Zürich.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/kontakt/anfrage" className="btn btn-primary inline-flex items-center justify-center font-bold text-[14px] px-6 py-3 transition-transform duration-200 hover:scale-[1.02]">
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
