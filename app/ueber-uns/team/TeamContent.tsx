"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=85";

const heroStamps = ["18 Fachkräfte", "Seit 1911", "Dietlikon"];

const management: TeamMember[] = [
  {
    name: "Thomas Bernhard",
    role: "Geschäftsführer",
    email: "t.bernhard@malerbernhard.ch",
    phone: "044 833 22 51",
    photo: "/team/thomas-bernhard_bw.jpg",
    photoColor: "/team/thomas-bernhard_color.jpg",
  },
  {
    name: "Tobias Keller",
    role: "Geschäftsführer Stv.",
    email: "t.keller@malerbernhard.ch",
    phone: "044 833 36 86",
    photo: "/team/tobias-keller_bw.jpg",
    photoColor: "/team/tobias-keller_color.jpg",
  },
  {
    name: "Corinne Metzger",
    role: "Sekretärin / Buchhaltung",
    email: "c.metzger@malerbernhard.ch",
    phone: "044 833 22 51",
    photo: "/team/corinne-metzger_bw.jpg",
    photoColor: "/team/corinne-metzger_color.jpg",
  },
];

const team: TeamMember[] = [
  { name: "Tamara Goppelt",        role: "Baustellenleiterin, kt.COLOR-Verarbeiterin", photo: "/team/tamara-goppelt_bw.jpg",         photoColor: "/team/tamara-goppelt_color.jpg" },
  { name: "Sabine Pfister",        role: "Vorarbeiterin",                               photo: "/team/sabine-pfister_bw.jpg",          photoColor: "/team/sabine-pfister_color.jpg" },
  { name: "Gzim Hoti",             role: "Kundengipser",                                photo: "/team/gzim-hoti_bw.jpg",               photoColor: "/team/gzim-hoti_color.jpg" },
  { name: "Markus Brönnimann",     role: "Kundenmaler",                                 photo: "/team/markus-broennimann_bw.jpg",       photoColor: "/team/markus-broennimann_color.jpg" },
  { name: "Giacomo Fattorusso",    role: "Kundenmaler",                                 photo: "/team/giacomo-fattorusso_bw.jpg",       photoColor: "/team/giacomo-fattorusso_color.jpg" },
  { name: "Lukas Hauswirth",       role: "Kundenmaler, kt.COLOR-Verarbeiter",           photo: "/team/lukas-hauswirth_bw.jpg",          photoColor: "/team/lukas-hauswirth_color.jpg" },
  { name: "Francisco Malagueta",   role: "Kundenmaler",                                 photo: "/team/francisco-malagueta_bw.jpg",      photoColor: "/team/francisco-malagueta_color.jpg" },
  { name: "Oliver Mongelli",       role: "Kundenmaler, kt.COLOR-Verarbeiter",           photo: "/team/oliver-mongelli_bw.jpg",          photoColor: "/team/oliver-mongelli_color.jpg" },
  { name: "Fatlum Shabani",        role: "Kundenmaler",                                 photo: "/team/fatlum-shabani_bw.jpg",           photoColor: "/team/fatlum-shabani_color.jpg" },
  { name: "D. Lau",                role: "Kundenmaler",                                 photo: "/team/d-lau_bw.jpg",                    photoColor: "/team/d-lau_color.jpg" },
  { name: "Joshua Amato",          role: "Kundenmaler",                                 photo: "/team/joshua-amato_bw.jpg",             photoColor: "/team/joshua-amato_color.jpg" },
  { name: "Joelle Berger",         role: "Kundenmalerin" },
  { name: "Daniel Isak",           role: "Kundenmaler",                                 photo: "/team/daniel-isak_bw.jpg",              photoColor: "/team/daniel-isak_color.jpg" },
  { name: "Din Gorbach",           role: "Kundenmaler",                                 photo: "/team/din-gorbach_bw.jpg",              photoColor: "/team/din-gorbach_color.jpg" },
  { name: "Maurizio Magistretti",  role: "Kundenmaler",                                 photo: "/team/maurizio-magistretti_bw.jpg",     photoColor: "/team/maurizio-magistretti_color.jpg" },
  { name: "Lea Zelnicek",          role: "Lernende 2. Lehrjahr" },
  { name: "Balz",                  role: "Streicheltier",                               photo: "/team/balz_bw.jpg",                     photoColor: "/team/balz_color.jpg" },
];

type TeamMember = {
  name: string;
  role: string;
  email?: string;
  phone?: string;
  photo?: string;
  photoColor?: string;
};

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

function PhotoCard({ member, size = "md" }: { member: TeamMember; size?: "lg" | "md" }) {
  const aspectClass = size === "lg" ? "aspect-[3/4]" : "aspect-square";
  return (
    <div className="group flex flex-col">
      <div className={`relative ${aspectClass} overflow-hidden rounded-xl bg-[var(--paper-dark)] shadow-[var(--shadow-lg)] ring-1 ring-black/[0.06]`}>
        {member.photo && member.photoColor ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={member.photoColor}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={member.photo}
              alt={member.name}
              className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 group-hover:opacity-0"
            />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[var(--paper-dark)]">
            <span className="text-3xl font-bold" style={{ color: "var(--brand)", opacity: 0.35 }}>
              {initials(member.name)}
            </span>
          </div>
        )}
      </div>
      <div className="mt-3 px-0.5">
        <p className="font-bold text-[14.5px]">{member.name}</p>
        <p className="text-[12.5px] text-[var(--muted)] leading-snug mt-0.5">{member.role}</p>
        {member.email && (
          <a href={`mailto:${member.email}`} className="block mt-1.5 text-[12px] text-[var(--brand)] hover:underline underline-offset-2 truncate">
            {member.email}
          </a>
        )}
        {member.phone && (
          <a href={`tel:+41${member.phone.replace(/[ .]/g, "").slice(1)}`} className="block text-[12px] text-[var(--muted)] hover:text-[var(--ink)] transition-colors">
            {member.phone}
          </a>
        )}
      </div>
    </div>
  );
}

export default function TeamContent() {
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
              Team
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", lineHeight: 1.04 }}
            >
              <span className="text-white">Menschen hinter</span>
              <br />
              <span className="text-gradient-hero">dem Handwerk.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              style={{ color: "rgba(255,255,255,0.88)", fontSize: "17px", lineHeight: 1.65, marginTop: "1.25rem" }}
            >
              18 Fachkräfte und Lernende, die täglich mit Präzision und Leidenschaft
              für Ihre Projekte im Einsatz sind — von der Geschäftsleitung bis zum
              Lernenden im zweiten Lehrjahr.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28 }}
              style={{ color: "rgba(255,255,255,0.88)", fontSize: "17px", lineHeight: 1.65, marginTop: "1rem" }}
            >
              Ein eingespieltes Team, das gemeinsam die hohen Qualitätsstandards
              von Malergeschäft Bernhard AG lebt — seit 1911.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.38 }}
              className="flex flex-wrap justify-end gap-3 mt-8"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <a href="mailto:info@malerbernhard.ch" className="btn btn-primary">
                  Kontakt aufnehmen
                </a>
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

      {/* ─── Geschäftsleitung ─── */}
      <section className="section section-surface">
        <div className="container">
          <AnimatedSection>
            <span className="brand-rule" />
            <h2 className="mb-10 text-gradient-heading">Geschäftsleitung</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-6 mb-20">
            {management.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <PhotoCard member={member} size="lg" />
              </AnimatedSection>
            ))}
          </div>

          {/* ─── Fachkräfte & Lernende ─── */}
          <AnimatedSection>
            <span className="brand-rule" />
            <h2 className="mb-10 text-gradient-heading">Fachkräfte & Lernende</h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.04}>
                <PhotoCard member={member} size="md" />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
