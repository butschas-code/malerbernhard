"use client";

import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    label: "Innenraum",
    href: "/malerarbeiten#innenraum",
    image:
      "https://www.malerbernhard.ch/domains/devmalerbernhard_ch/data/galleries/jGal_500322/innenraum_01.jpg",
    text: "Von der einfachen Pinsel-Renovation bis zu komplexen Um- und Neubauten — mit gut ausgebildeten Fachkräften.",
  },
  {
    label: "Aussenraum & Fassade",
    href: "/malerarbeiten#aussenraum-fassade",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    text: "Schutz und Werterhaltung Ihrer Liegenschaft durch qualitativ hochwertige Fassadenarbeiten.",
  },
  {
    label: "Raumgestaltung",
    href: "/malerarbeiten#raumgestaltung",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
    text: "Lasurtechniken, Spachtel, Schablonen, Vergoldungen — handwerkliche Kreativität für Ihren Wohntraum.",
  },
  {
    label: "Spezialarbeiten",
    href: "/spezialarbeiten",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    text: "Schimmelpilzsanierung, EMF-Abschirmung, Naturofloor und Niederdruck-Strahlen.",
  },
  {
    label: "Historische Bauten",
    href: "/malerarbeiten#historische-bauten",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    text: "Eidg. anerkannte Fachkräfte für Denkmalpflege. Werterhaltung mit Respekt vor der Bausubstanz.",
  },
  {
    label: "kt.COLOR",
    href: "/malerarbeiten#kt-color",
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
  const introRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: introProgress } = useScroll({
    target: introRef,
    offset: ["start end", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const videoY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 120]
  );
  const videoScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1, 1.08]
  );
  const heroTextY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 60]
  );

  const introImgY = useSpring(
    useTransform(introProgress, [0, 1], reduceMotion ? [0, 0] : [40, -40]),
    { stiffness: 100, damping: 30 }
  );

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative min-h-[92dvh] flex items-end overflow-hidden bg-[var(--ink)]"
      >
        <motion.div
          className="absolute inset-0"
          style={{
            y: videoY,
            scale: videoScale,
            zIndex: 0,
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/home_hero.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 1,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.38) 100%), linear-gradient(to left, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.18) 45%, rgba(0,0,0,0) 78%)",
          }}
        />

        {/* Floating grain */}
        <div
          className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none"
          style={{
            zIndex: 1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        <motion.div
          style={{ opacity: heroOpacity, y: heroTextY, zIndex: 2 }}
          className="relative w-full container pb-16 md:pb-24"
        >
          <div className="ml-auto max-w-xl text-right">
            <div className="flex flex-wrap justify-end gap-2 mb-8">
              {stamps.map((s, i) => (
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

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)", lineHeight: 1.04 }}
            >
              <span className="text-white">Der Maler</span>
              <br />
              <span className="text-gradient-hero">in Ihrer Nähe.</span>
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
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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
          background:
            "linear-gradient(90deg, var(--brand-red) 0%, var(--brand-secondary) 50%, var(--brand-tertiary) 100%)",
        }}
      />

      {/* ─── INTRO BENTO ─── */}
      <section
        ref={introRef}
        className="section overflow-hidden relative"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, color-mix(in srgb, var(--brand-secondary) 6%, white) 55%, color-mix(in srgb, var(--brand-tertiary) 5%, white) 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage: `radial-gradient(ellipse 90% 60% at 10% 20%, color-mix(in srgb, var(--brand-tertiary) 14%, transparent), transparent),
              radial-gradient(ellipse 70% 50% at 90% 80%, color-mix(in srgb, var(--brand-secondary) 12%, transparent), transparent)`,
          }}
        />
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 lg:items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <AnimatedSection direction="left">
                <span className="brand-rule" />
                <h2 className="mb-6 text-gradient-heading">
                  Fundiertes Handwerk.
                  <br />
                  Faszinierende Vielfalt.
                </h2>
                <p className="text-[17px] leading-relaxed mb-4">
                  Seit 1911 steht die Familie Bernhard für höchste handwerkliche Qualität.
                  In der vierten Generation führen wir das Malergeschäft mit 12 ausgewiesenen
                  Fachkräften — von Meistermalern über Vorarbeiter bis zu Lernenden.
                </p>
                <p className="text-[17px] leading-relaxed">
                  Unser Spektrum umfasst die gesamte Bandbreite der Oberflächengestaltung:
                  Innen, aussen, historisch, dekorativ — mit einer faszinierenden
                  Vielfalt an Gestaltungsmöglichkeiten.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="left" delay={0.08}>
                <div className="flex flex-wrap gap-2">
                  {["Glatttal", "Zürich", "Winterthur", "Flughafen-Region"].map((region) => (
                    <motion.span
                      key={region}
                      className="stamp cursor-default"
                      whileHover={{ y: -2, borderColor: "var(--brand)", transition: { duration: 0.2 } }}
                    >
                      {region}
                    </motion.span>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <motion.div
              className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-[var(--shadow-lg)] min-h-[340px] lg:min-h-[420px]"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div className="absolute inset-0 will-change-transform" style={{ y: introImgY }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80"
                  alt="Maler bei der Arbeit"
                  className="w-full h-[115%] object-cover -top-[7%] relative"
                />
              </motion.div>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 45%)",
                }}
              />
              <motion.div
                className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-auto bg-white/95 backdrop-blur-md rounded-xl p-5 shadow-lg border border-white/50"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: "var(--muted)" }}>
                  Gegründet
                </p>
                <p style={{ fontSize: "2.75rem", fontWeight: 700, lineHeight: 1, color: "var(--brand)" }}>1911</p>
                <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "4px" }}>4 Generationen Bernhard</p>
              </motion.div>
            </motion.div>

            {/* Mini bento strip */}
            <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
              {[
                { t: "12+", s: "Fachkräfte" },
                { t: "4", s: "Generationen" },
                { t: "100%", s: "Engagement" },
                { t: "SMGV", s: "Mitglied" },
              ].map((cell, i) => (
                <motion.div
                  key={cell.s}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.45 }}
                  className="rounded-xl p-4 text-center border border-[var(--line)] bg-[var(--paper)] hover:border-[var(--brand)]/35 transition-colors duration-300"
                >
                  <p className="text-xl font-bold text-gradient-heading">{cell.t}</p>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--muted)] mt-1">{cell.s}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES BENTO ─── */}
      <section
        className="section relative"
        style={{
          background:
            "linear-gradient(165deg, var(--paper) 0%, color-mix(in srgb, var(--brand-secondary) 9%, var(--paper)) 42%, color-mix(in srgb, var(--brand-tertiary) 7%, var(--paper)) 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage: `radial-gradient(circle at 18% 25%, color-mix(in srgb, var(--brand-tertiary) 16%, transparent) 0%, transparent 52%),
              radial-gradient(circle at 82% 75%, color-mix(in srgb, var(--brand-secondary) 14%, transparent) 0%, transparent 48%)`,
          }}
        />
        <div className="container relative">
          <AnimatedSection>
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[var(--muted)] mb-2">Unsere Leistungen</p>
            <h2 className="mb-4 text-gradient-heading">Was wir für Sie tun</h2>
            <p className="text-[17px] text-[var(--muted)] mb-10 max-w-xl">
              Vom einzelnen Zimmer bis zur kompletten Liegenschaft — wir decken das gesamte Spektrum professioneller
              Malerarbeiten ab.
            </p>
          </AnimatedSection>

          {/* Mosaic bento: col1-tall | col2-3-wide / col2+col3 / col1-2-wide | col3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[256px_256px_256px] gap-3 md:gap-3">
            {services.map((svc, i) => {
              const bentoClass = [
                "lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-2",
                "lg:col-start-2 lg:col-span-2 lg:row-start-1 lg:row-span-1",
                "lg:col-start-2 lg:col-span-1 lg:row-start-2 lg:row-span-1",
                "lg:col-start-3 lg:col-span-1 lg:row-start-2 lg:row-span-1",
                "lg:col-start-1 lg:col-span-2 lg:row-start-3 lg:row-span-1",
                "lg:col-start-3 lg:col-span-1 lg:row-start-3 lg:row-span-1",
              ][i];

              return (
                <motion.div
                  key={svc.href}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative min-h-[220px] sm:min-h-0 aspect-[4/3] sm:aspect-auto ${bentoClass}`}
                >
                  <Link
                    href={svc.href}
                    className="group absolute inset-0 rounded-2xl overflow-hidden block"
                  >
                    {/* Image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={svc.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />

                    {/* Permanent dark vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/18 to-black/0 pointer-events-none" />

                    {/* Hover colour wash */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: "linear-gradient(160deg, color-mix(in srgb, var(--brand-tertiary) 38%, transparent), transparent 60%)" }}
                    />

                    {/* Top badge — featured only */}
                    {i === 0 && (
                      <span
                        className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/30 z-10"
                        style={{ background: "color-mix(in srgb, var(--brand-tertiary) 70%, black)" }}
                      >
                        Top
                      </span>
                    )}

                    {/* Text overlay: .bento-card-overlay + globals beats `h3`/`p` ink rules; inner div inherits text-white */}
                    <div className="bento-card-overlay absolute bottom-0 left-0 right-0 p-4 md:p-5 z-10 text-white">
                      <h3 className={`font-bold leading-tight mb-1 ${i === 0 ? "text-[1.3rem]" : i === 1 || i === 4 ? "text-[1.15rem]" : "text-[1rem]"}`}>
                        {svc.label}
                      </h3>
                      {i === 0 || i === 1 || i === 4 ? (
                        <p className="text-[13.5px] leading-snug line-clamp-2">{svc.text}</p>
                      ) : (
                        <div className="text-[12.5px] leading-snug line-clamp-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          {svc.text}
                        </div>
                      )}
                      <span className="inline-flex items-center gap-1 mt-2 text-[12px] font-semibold">
                        Mehr erfahren
                        <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden>
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section
        className="section relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, color-mix(in srgb, var(--brand-tertiary) 4%, white) 50%, #ffffff 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage: `radial-gradient(ellipse 60% 40% at 50% 0%, color-mix(in srgb, var(--brand-secondary) 10%, transparent), transparent)`,
          }}
        />
        <div
          className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 hidden md:block pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, color-mix(in srgb, var(--brand-secondary) 35%, var(--line)) 20%, color-mix(in srgb, var(--brand-tertiary) 30%, var(--line)) 80%, transparent)",
          }}
        />
        <div className="container relative">
          <AnimatedSection className="text-center mb-14">
            <span className="brand-rule mx-auto" />
            <h2 className="text-gradient-heading">Unser Ablauf</h2>
            <p className="text-[17px] text-[var(--muted)] mt-3 max-w-md mx-auto">
              Einfach, transparent, verlässlich — so arbeiten wir mit unseren Kunden.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 relative">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative text-center"
              >
                <motion.div
                  className="relative inline-flex w-[4.25rem] h-[4.25rem] rounded-2xl items-center justify-center mb-6 font-bold text-xl z-10 shadow-[var(--shadow)]"
                  style={{
                    background:
                      "linear-gradient(145deg, color-mix(in srgb, var(--brand-secondary) 8%, var(--paper)) 0%, white 100%)",
                    border: "2px solid color-mix(in srgb, var(--brand-tertiary) 18%, var(--line))",
                    color: "var(--brand-tertiary)",
                  }}
                  whileHover={{ y: -4, boxShadow: "var(--shadow-lg)", transition: { duration: 0.25 } }}
                >
                  {step.n}
                  <span
                    className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white"
                    style={{ background: "var(--brand-red)" }}
                  />
                </motion.div>
                <h3 className="text-[1.1rem] font-bold mb-3">{step.title}</h3>
                <p className="text-[15px] text-[var(--muted)] leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST ─── */}
      <section
        className="section relative overflow-hidden"
        style={{
          background:
            "linear-gradient(165deg, #ffffff 0%, color-mix(in srgb, var(--brand-secondary) 10%, #f8faf9) 38%, color-mix(in srgb, var(--brand-tertiary) 7%, #f5f3fa) 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: `radial-gradient(ellipse 70% 55% at 15% 30%, color-mix(in srgb, var(--brand-secondary) 14%, transparent), transparent),
              radial-gradient(ellipse 55% 45% at 88% 75%, color-mix(in srgb, var(--brand-tertiary) 12%, transparent), transparent)`,
          }}
        />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[var(--muted)] mb-2">Warum Bernhard?</p>
              <h2 className="mb-6 text-gradient-heading">
                Vertrauen durch
                <br />
                vier Generationen.
              </h2>
              <ul className="space-y-4">
                {[
                  "12 ausgewiesene Fachkräfte – Meister, Vorarbeiter, Kundenmaler",
                  "TOP-Ausbildungsbetrieb – Swiss Olympic anerkannt",
                  "Eidg. Handwerker der Denkmalpflege",
                  "kt.COLOR-zertifizierte Meister der Farben®",
                  "SMGV-Mitglied – Branchenverband Schweiz",
                ].map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="flex items-start gap-3 text-[15.5px] text-[var(--ink)]"
                  >
                    <svg className="mt-0.5 flex-shrink-0" width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9" stroke="var(--brand-secondary)" strokeWidth="1.5" />
                      <path d="M6 10l3 3 5-5" stroke="var(--brand-tertiary)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.08}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "1911", label: "Gegründet" },
                  { number: "4.", label: "Generation" },
                  { number: "12+", label: "Fachkräfte" },
                  { number: "100%", label: "Qualität" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.45 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    className="rounded-2xl p-6 text-center border border-[var(--line)] bg-white/80 backdrop-blur-sm shadow-[var(--shadow)]"
                  >
                    <p className="text-[2.5rem] font-bold text-gradient-heading leading-none">{stat.number}</p>
                    <p className="text-[12px] font-semibold tracking-[0.08em] text-[var(--muted)] mt-1 uppercase">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section
        className="section relative overflow-hidden"
        style={{
          background:
            "linear-gradient(185deg, #ffffff 0%, color-mix(in srgb, var(--brand-secondary) 5%, white) 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-35"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 50% at 20% 80%, color-mix(in srgb, var(--brand-tertiary) 12%, transparent), transparent)`,
          }}
        />
        <div className="container text-center relative">
          <AnimatedSection>
            <span className="brand-rule mx-auto" />
            <h2 className="mb-4 text-gradient-heading">Was unsere Kunden sagen</h2>
            <p className="text-[17px] text-[var(--muted)] mb-8 max-w-md mx-auto">
              Kundenzufriedenheit ist unsere wichtigste Auszeichnung.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link href="/bewertungen" className="btn btn-primary">
                Alle Bewertungen lesen
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--paper-dark) 0%, color-mix(in srgb, var(--brand-tertiary) 8%, var(--paper-dark)) 45%, color-mix(in srgb, var(--brand-secondary) 7%, var(--paper)) 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(ellipse 120% 80% at 0% 100%, color-mix(in srgb, var(--brand-tertiary) 22%, transparent), transparent),
              radial-gradient(ellipse 80% 60% at 100% 0%, color-mix(in srgb, var(--brand-secondary) 16%, transparent), transparent)`,
          }}
        />
        <div className="container py-20 relative">
          <div className="max-w-2xl">
            <AnimatedSection>
              <span className="brand-rule" />
              <h2 className="mb-4 text-gradient-heading">Bereit für Ihr Projekt?</h2>
              <p className="text-[17px] text-[var(--muted)] mb-8">
                Kontaktieren Sie uns für eine unverbindliche Beratung. Wir melden uns schnell zurück und besichtigen Ihr
                Objekt persönlich.
              </p>
              <div className="flex flex-wrap gap-3">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link href="/kontakt/anfrage" className="btn btn-primary">
                    Offerte anfragen
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link href="/kontakt" className="btn btn-outline">
                    Kontakt aufnehmen
                  </Link>
                </motion.div>
              </div>
              <p className="mt-6 text-[13.5px] text-[var(--muted)]">
                Oder direkt anrufen:{" "}
                <a href="tel:+41448332251" className="font-bold text-[var(--brand-tertiary)] hover:underline">
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
