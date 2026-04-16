"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const HERO_IMAGE = "/hero_ausbildungsbetrieb.png";

const heroStamps = ["TOP-Ausbildungsbetrieb", "Swiss Olympic", "Seit 1911"];

const criteria = [
  "Jährliche Einreichung von Ausbilder- und Lernendenlisten",
  "Regelmässige Dokumentation der Ausbilderqualifikation",
  "Dokumentierte Ausbildungsinfrastruktur",
  "Systematische Selektion von Lernenden",
  "Halbjährliche Standortgespräche mit Lernenden",
  "Umfassendes Einführungsprogramm",
];

const sectionVisuals: Record<string, { src: string; alt: string }> = {
  ausbildung: {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=85",
    alt: "Ausbildung im Handwerk",
  },
  sport: {
    src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600&q=85",
    alt: "Leistungssport und Berufslehre",
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

export default function AusbildungsbetriebContent() {
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
            className="absolute inset-0 w-full h-full object-cover object-top"
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
              Ausbildung
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", lineHeight: 1.04 }}
            >
              <span className="text-white">Ausbildung</span>
              <br />
              <span className="text-gradient-hero">mit Zukunft.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              style={{ color: "rgba(255,255,255,0.88)", fontSize: "17px", lineHeight: 1.65, marginTop: "1.25rem" }}
            >
              Als zertifizierter TOP-Ausbildungsbetrieb und Swiss Olympic anerkannter
              Lehrbetrieb bieten wir jungen Menschen eine fundierte Berufsausbildung —
              mit Herzblut, System und echter Perspektive.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28 }}
              style={{ color: "rgba(255,255,255,0.88)", fontSize: "17px", lineHeight: 1.65, marginTop: "1rem" }}
            >
              Good Training for a Shared Future — auch für Leistungssportler,
              die Beruf und sportliche Karriere parallel verfolgen möchten.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.38 }}
              className="flex flex-wrap justify-end gap-3 mt-8"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link href="/kontakt/anfrage" className="btn btn-primary">
                  Schnupperlehre anfragen
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

      {/* ─── TOP-Ausbildungsbetrieb ─── */}
      <section className="section section-surface">
        <div className="container">
          <SectionBanner sectionKey="ausbildung" />
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <span className="brand-rule" />
              <h2 className="mb-6 text-gradient-heading">Ausbildung mit System</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Das Label <strong>TOP-Ausbildungsbetrieb</strong> garantiert, dass Lernende
                und Mitarbeitende in ihrer Berufsbildung menschlich und fachlich bestens
                betreut werden.
              </p>
              <p className="text-[17px] leading-relaxed mb-4">
                Wir befinden uns aktuell auf Stufe 1 — die grundlegenden
                Systemvoraussetzungen sind erfüllt. Das Label wird periodisch erneuert
                und ist an klare Qualitätskriterien gebunden.
              </p>
              <p className="text-[17px] leading-relaxed mb-8">
                Schnupperlehren sind über{" "}
                <a
                  href="https://www.schnuppy.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--brand)", fontWeight: 600 }}
                >
                  schnuppy.ch
                </a>{" "}
                buchbar.
              </p>
              <Link href="/kontakt/anfrage" className="btn btn-primary">
                Schnupperlehre anfragen
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="mb-8 rounded-xl overflow-hidden border border-[var(--line)] bg-[var(--paper)] shadow-[var(--shadow)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://www.malerbernhard.ch/domains/devmalerbernhard_ch/data/free_docs/4c97f2d-3_b530de1-5_TOP_Visual_500.jpg"
                  alt="TOP-Ausbildungsbetrieb Label"
                  className="w-full object-contain"
                  style={{ maxHeight: "200px", objectFit: "contain", background: "var(--paper)", padding: "1.5rem" }}
                />
              </div>
              <h3 className="mb-5 text-[1.2rem]">Erfüllte Kriterien (Stufe 1)</h3>
              <CheckList items={criteria} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Leistungssport ─── */}
      <section className="section section-surface-muted">
        <div className="container">
          <SectionBanner sectionKey="sport" />
          <AnimatedSection>
            <span className="brand-rule" />
            <h2 className="mb-6 text-gradient-heading">Berufslehre & Leistungssport</h2>
            <p className="text-[17px] leading-relaxed mb-4 max-w-2xl">
              Das Malergeschäft Bernhard AG ist als{" "}
              <strong>Swiss Olympic Leistungssportfreundlicher Lehrbetrieb</strong>{" "}
              zertifiziert. Junge Athleten können bei uns eine Berufsausbildung absolvieren
              und gleichzeitig ihre sportliche Karriere verfolgen.
            </p>
            <p className="text-[17px] leading-relaxed mb-4 max-w-2xl">
              Durch einen flexiblen und bedarfsorientierten Lehrplan ermöglichen wir es,
              Trainingszeiten, Wettkämpfe und Berufsschulbesuche optimal zu koordinieren.
            </p>
            <p className="text-[17px] leading-relaxed mb-10 max-w-2xl">
              Wir glauben, dass Disziplin, Durchhaltevermögen und Teamgeist — Werte, die
              im Leistungssport gepflegt werden — auch im Handwerksberuf von grossem
              Wert sind.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { title: "Flexibler Lehrplan", text: "Angepasst an Trainings- und Wettkampfkalender" },
              { title: "Verständnisvolles Team", text: "Erfahrung im Umgang mit sportlichen Lernenden" },
              { title: "Swiss Olympic", text: "Offiziell zertifizierter Lehrbetrieb" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="rounded-xl p-6 bg-white/80 border border-[var(--line)] shadow-[var(--shadow)] h-full">
                  <div className="w-8 h-1 rounded mb-4" style={{ background: "var(--brand-red)" }} />
                  <h3 className="text-[1rem] font-bold mb-2">{item.title}</h3>
                  <p className="text-[14.5px] text-[var(--muted)] leading-relaxed">{item.text}</p>
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
            <h2 className="mb-4 text-gradient-heading">Interesse an einer Lehrstelle?</h2>
            <p className="text-[17px] text-[var(--muted)] mb-8 max-w-lg mx-auto">
              Wir freuen uns auf Ihre Anfrage — sei es für eine Schnupperlehre,
              eine Berufslehre oder ein Gespräch über eine Leistungssportkarriere.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/kontakt/anfrage" className="btn btn-primary inline-flex items-center justify-center font-bold text-[14px] px-6 py-3 transition-transform duration-200 hover:scale-[1.02]">
                Jetzt anfragen
              </Link>
              <Link href="/ueber-uns/team" className="btn btn-outline">
                Unser Team
              </Link>
            </div>
            <div className="h-[1.65em]" aria-hidden />
            <div className="h-[1.65em]" aria-hidden />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
