"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const services = [
  {
    label: "Innenraum",
    href: "/malerarbeiten/innenraum",
    image:
      "https://www.malerbernhard.ch/domains/devmalerbernhard_ch/data/galleries/jGal_500322/innenraum_01.jpg",
    text: "Von der einfachen Pinsel-Renovation bis zu komplexen Um- und Neubauten — mit gut ausgebildeten Fachkräften.",
  },
  {
    label: "Aussenraum & Fassade",
    href: "/malerarbeiten/aussenraum-fassade",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    text: "Schutz und Werterhaltung Ihrer Liegenschaft durch qualitativ hochwertige Fassadenarbeiten.",
  },
  {
    label: "Raumgestaltung",
    href: "/malerarbeiten/raumgestaltung",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
    text: "Lasurtechniken, Spachtel, Schablonen, Vergoldungen — handwerkliche Kreativität für Ihren Wohntraum.",
  },
  {
    label: "Spezialarbeiten",
    href: "/spezialarbeiten/schimmelpilzsanierung",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    text: "Schimmelpilzsanierung, EMF-Abschirmung, Naturofloor und Niederdruck-Strahlen.",
  },
  {
    label: "Historische Bauten",
    href: "/malerarbeiten/historische-bauten",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    text: "Eidg. anerkannte Fachkräfte für Denkmalpflege. Werterhaltung mit Respekt vor der Bausubstanz.",
  },
  {
    label: "kt.COLOR",
    href: "/malerarbeiten/kt-color",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    text: "Zertifizierte kt.COLOR-Meister der Farben® — die feinsten Farben der Welt, seit 2025 bei Bernhard.",
  },
];

const processSteps = [
  {
    n: "01",
    title: "Begehung & Beratung",
    text: "Wir kommen zu Ihnen und nehmen uns Zeit für Ihre Wünsche. Kostenlose Beratung vor Ort.",
  },
  {
    n: "02",
    title: "Offerte & Planung",
    text: "Sie erhalten ein transparentes, detailliertes Angebot. Keine versteckten Kosten.",
  },
  {
    n: "03",
    title: "Fachgerechte Ausführung",
    text: "Pünktliche, saubere Arbeit durch ausgebildete Fachkräfte. Qualitätskontrolle nach Abschluss.",
  },
];

const stamps = [
  "Familienbetrieb",
  "Seit 1911",
  "TOP-Ausbildungsbetrieb",
  "SMGV-Mitglied",
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative min-h-[92dvh] flex items-end overflow-hidden bg-[var(--ink)]"
      >
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src="/home_hero.mp4" type="video/mp4" />
        </video>

        {/* Gradient: dark base from bottom + strong right-side darkening for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            zIndex: 1,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%), linear-gradient(to left, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0) 75%)",
          }}
        />

        {/* Content — right-aligned */}
        <motion.div
          style={{ opacity: heroOpacity, zIndex: 2 }}
          className="relative w-full container pb-16 md:pb-24"
        >
          <div className="ml-auto max-w-xl text-right">
            {/* Pills */}
            <div className="flex flex-wrap justify-end gap-2 mb-8">
              {stamps.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.45 }}
                  style={{
                    fontSize: "10.5px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "white",
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.35)",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                    borderRadius: "3px",
                    padding: "4px 10px",
                    display: "inline-block",
                  }}
                >
                  {s}
                </motion.span>
              ))}
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ color: "white", fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)", lineHeight: 1.04 }}
            >
              Der Maler
              <br />
              <span style={{ color: "var(--brand-red)" }}>in Ihrer Nähe.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              style={{ color: "rgba(255,255,255,0.88)", fontSize: "17px", lineHeight: 1.65, marginTop: "1.5rem" }}
            >
              Mit unserer Erfahrung in Techniken, Materialien und Farbkombinationen
              beraten wir Sie kompetent und verwirklichen Ihren Wohn(t)raum.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.42 }}
              className="flex flex-wrap justify-end gap-3 mt-8"
            >
              <Link href="/kontakt/anfrage" className="btn btn-primary">
                Offerte anfragen
              </Link>
              <a href="tel:+41448332251" className="btn btn-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                044 833 22 51
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "rgba(255,255,255,0.45)", zIndex: 2 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── RED ACCENT BAR ─── */}
      <div style={{ height: "6px", background: "var(--brand-red)" }} />

      {/* ─── INTRO SECTION ─── */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="brand-rule" />
              <h2 className="mb-6">Fundiertes Handwerk.<br />Faszinierende Vielfalt.</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Seit 1911 steht die Familie Bernhard für höchste handwerkliche Qualität.
                In der vierten Generation führen wir das Malergeschäft mit 12 ausgewiesenen
                Fachkräften — von Meistermalern über Vorarbeiter bis zu Lernenden.
              </p>
              <p className="text-[17px] leading-relaxed mb-8">
                Unser Spektrum umfasst die gesamte Bandbreite der Oberflächengestaltung:
                Innen, aussen, historisch, dekorativ — mit einer faszinierenden
                Vielfalt an Gestaltungsmöglichkeiten.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Glatttal", "Zürich", "Winterthur", "Flughafen-Region"].map((region) => (
                  <span key={region} className="stamp">{region}</span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="relative aspect-[4/5] rounded overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80"
                  alt="Maler bei der Arbeit"
                  className="w-full h-full object-cover"
                />
                {/* Quality badge */}
                <div className="absolute bottom-6 left-6 bg-white rounded p-4 shadow-lg">
                  <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: "var(--muted)" }}>
                    Gegründet
                  </p>
                  <p style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1, color: "var(--brand)" }}>
                    1911
                  </p>
                  <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>
                    4 Generationen Bernhard
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container">
          <AnimatedSection>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.75rem" }}>
              Unsere Leistungen
            </p>
            <h2 className="mb-4">Was wir für Sie tun</h2>
            <p style={{ fontSize: "17px", color: "var(--muted)", marginBottom: "3rem", maxWidth: "36rem" }}>
              Vom einzelnen Zimmer bis zur kompletten Liegenschaft — wir decken das
              gesamte Spektrum professioneller Malerarbeiten ab.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.href} delay={i * 0.07}>
                <Link
                  href={svc.href}
                  className="group block bg-white rounded overflow-hidden border border-[var(--line)] hover:border-[var(--brand)] transition-all duration-300 hover:shadow-lg"
                  style={{ display: "block" }}
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={svc.image}
                      alt={svc.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.5rem" }}
                      className="group-hover:text-[var(--brand)] transition-colors">
                      {svc.label}
                    </h3>
                    <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.6 }}>{svc.text}</p>
                    <span className="inline-flex items-center gap-1.5 mt-3"
                      style={{ fontSize: "13px", fontWeight: 600, color: "var(--brand)" }}>
                      Mehr erfahren
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BEFORE / AFTER ─── */}
      <section className="section" style={{ background: "var(--ink)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.75rem" }}>
                Vorher / Nachher
              </p>
              <h2 style={{ color: "white" }} className="mb-4">
                Der Unterschied,
                <br />den wir machen.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "17px", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Ziehen Sie den Schieberegler und sehen Sie selbst, wie eine
                professionelle Malerarbeit Räume verwandelt.
              </p>
              <Link href="/kontakt/anfrage" className="btn btn-primary">
                Jetzt anfragen
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <BeforeAfterSlider
                before="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
                after="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&q=80"
                beforeAlt="Raum vor der Renovation"
                afterAlt="Raum nach der Renovation"
              />
              <p style={{ textAlign: "center", fontSize: "12px", color: "rgba(255,255,255,0.35)", marginTop: "0.75rem", letterSpacing: "0.05em" }}>
                ← Ziehen zum Vergleichen →
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="section bg-white">
        <div className="container">
          <AnimatedSection className="text-center mb-14">
            <span className="brand-rule mx-auto" />
            <h2>Unser Ablauf</h2>
            <p style={{ fontSize: "17px", color: "var(--muted)", marginTop: "1rem", maxWidth: "32rem", marginInline: "auto" }}>
              Einfach, transparent, verlässlich — so arbeiten wir mit unseren Kunden.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.n} delay={i * 0.12} className="relative text-center">
                <div className="relative inline-flex w-16 h-16 rounded-full items-center justify-center mb-6 font-bold text-xl z-10"
                  style={{ background: "var(--paper)", border: "2px solid var(--line)", color: "var(--brand)" }}>
                  {step.n}
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                    style={{ background: "var(--brand-red)" }} />
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem" }}>{step.title}</h3>
                <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.65 }}>{step.text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY STRIP ─── */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container">
          <AnimatedSection>
            <span className="brand-rule" />
            <h2 className="mb-3">Unsere Arbeiten</h2>
            <p style={{ fontSize: "17px", color: "var(--muted)", marginBottom: "2.5rem" }}>
              Einblicke aus abgeschlossenen Projekten.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              "https://www.malerbernhard.ch/domains/devmalerbernhard_ch/data/galleries/jGal_500322/innenraum_01.jpg",
              "https://www.malerbernhard.ch/domains/devmalerbernhard_ch/data/galleries/jGal_500322/innenraum_02.jpg",
              "https://www.malerbernhard.ch/domains/devmalerbernhard_ch/data/galleries/jGal_500322/innenraum_03.jpg",
              "https://www.malerbernhard.ch/domains/devmalerbernhard_ch/data/galleries/jGal_500322/innenraum_04.jpg",
            ].map((src, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="group relative rounded overflow-hidden" style={{ aspectRatio: "1" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`Arbeit ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <Link href="/malerarbeiten/innenraum" className="btn btn-outline">
              Alle Arbeiten ansehen
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── TRUST SECTION ─── */}
      <section className="section" style={{ background: "var(--brand)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.75rem" }}>
                Warum Bernhard?
              </p>
              <h2 style={{ color: "white" }} className="mb-6">
                Vertrauen durch
                <br />vier Generationen.
              </h2>
              <ul className="space-y-4">
                {[
                  "12 ausgewiesene Fachkräfte – Meister, Vorarbeiter, Kundenmaler",
                  "TOP-Ausbildungsbetrieb – Swiss Olympic anerkannt",
                  "Eidg. Handwerker der Denkmalpflege",
                  "kt.COLOR-zertifizierte Meister der Farben®",
                  "SMGV-Mitglied – Branchenverband Schweiz",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3"
                    style={{ color: "rgba(255,255,255,0.85)", fontSize: "15.5px" }}>
                    <svg className="mt-0.5 flex-shrink-0" width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9" stroke="var(--brand-red)" strokeWidth="1.5" />
                      <path d="M6 10l3 3 5-5" stroke="var(--brand-red)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "1911", label: "Gegründet" },
                  { number: "4.", label: "Generation" },
                  { number: "12+", label: "Fachkräfte" },
                  { number: "100%", label: "Qualität" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded p-6 text-center"
                    style={{ background: "rgba(255,255,255,0.1)" }}>
                    <p style={{ fontSize: "2.5rem", fontWeight: 700, color: "white", lineHeight: 1 }}>
                      {stat.number}
                    </p>
                    <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", color: "rgba(255,255,255,0.6)", marginTop: "0.25rem", textTransform: "uppercase" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS TEASER ─── */}
      <section className="section bg-white">
        <div className="container text-center">
          <AnimatedSection>
            <span className="brand-rule mx-auto" />
            <h2 className="mb-4">Was unsere Kunden sagen</h2>
            <p style={{ fontSize: "17px", color: "var(--muted)", marginBottom: "2rem" }}>
              Kundenzufriedenheit ist unsere wichtigste Auszeichnung.
            </p>
            <Link href="/bewertungen" className="btn btn-primary">
              Alle Bewertungen lesen
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden" style={{ background: "var(--paper-dark)" }}>
        <div className="container py-20">
          <div className="max-w-2xl">
            <AnimatedSection>
              <span className="brand-rule" />
              <h2 className="mb-4">Bereit für Ihr Projekt?</h2>
              <p style={{ fontSize: "17px", color: "var(--muted)", marginBottom: "2rem" }}>
                Kontaktieren Sie uns für eine unverbindliche Beratung. Wir melden uns
                schnell zurück und besichtigen Ihr Objekt persönlich.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/kontakt/anfrage" className="btn btn-primary">
                  Offerte anfragen
                </Link>
                <Link href="/kontakt" className="btn btn-outline">
                  Kontakt aufnehmen
                </Link>
              </div>
              <p style={{ marginTop: "1.25rem", fontSize: "13.5px", color: "var(--muted)" }}>
                Oder direkt anrufen:{" "}
                <a href="tel:+41448332251" style={{ fontWeight: 700, color: "var(--brand)" }}
                  className="hover:underline">
                  044 833 22 51
                </a>
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
