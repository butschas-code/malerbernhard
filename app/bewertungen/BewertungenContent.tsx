"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { reviews, aggregateRating, formatReviewDateGerman } from "@/lib/reviews";
import type { Review } from "@/lib/reviews";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=85";

const heroStamps = ["5.0 Google Stars", "26 Bewertungen", "Seit 1911"];

/* ─── Helpers ─── */

function StarRow({ count = 5, size = 16 }: { count?: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill="#F5A623">
          <path d="M10 1l2.63 5.33 5.87.86-4.25 4.14 1 5.84L10 14.27l-5.25 2.9 1-5.84L1.5 7.19l5.87-.86z" />
        </svg>
      ))}
    </div>
  );
}

function Initials({ name }: { name: string }) {
  const parts = name.trim().split(/\s+/);
  const letters = parts.length >= 2
    ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    : name.slice(0, 2).toUpperCase();
  // Deterministic hue from name
  const hue = name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360;
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-[13px] text-white flex-shrink-0"
      style={{ background: `hsl(${hue}, 45%, 42%)` }}
    >
      {letters}
    </div>
  );
}

/* ─── Review card ─── */

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col bg-white rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] hover:shadow-[var(--shadow-lg)] transition-shadow duration-300 overflow-hidden"
      itemScope
      itemType="https://schema.org/Review"
    >
      {/* Top accent bar */}
      <div
        className="h-[3px]"
        style={{
          background: `linear-gradient(90deg, hsl(${
            (review.name.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % 360)
          }, 55%, 52%), transparent)`,
        }}
      />

      <div className="flex flex-col flex-1 p-5 md:p-6">
        {/* Stars + date */}
        <div className="flex items-center justify-between mb-4">
          <StarRow count={review.stars} size={15} />
          <span className="text-[11.5px] text-[var(--muted)]" lang="de-CH">
            {formatReviewDateGerman(review.date)}
          </span>
        </div>

        {/* Quote mark */}
        <div
          className="text-[3.5rem] leading-none font-serif mb-1 -mt-1 select-none"
          style={{ color: "var(--brand)", opacity: 0.12 }}
          aria-hidden
        >
          "
        </div>

        {/* Review text */}
        <blockquote
          itemProp="reviewBody"
          className="flex-1 text-[15px] leading-[1.72] text-[var(--ink)] mb-4"
          style={{ opacity: 0.87 }}
        >
          {review.text}
          {review.truncated && (
            <span className="text-[var(--muted)] text-[13px]"> …</span>
          )}
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-[var(--line)]">
          <Initials name={review.name} />
          <div className="min-w-0">
            <p
              itemProp="author"
              className="font-bold text-[14px] truncate"
            >
              {review.name}
            </p>
            <div className="flex items-center gap-1.5 mt-0.5">
              {/* Google G icon */}
              <svg width="11" height="11" viewBox="0 0 24 24" aria-label="Google">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-[11px] text-[var(--muted)]">Google</span>
            </div>
          </div>
        </div>

        {/* Owner response */}
        {review.ownerResponse && (
          <div className="mt-4">
            {expanded ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="rounded-xl p-4 border-l-2"
                style={{ background: "var(--paper)", borderColor: "var(--brand-secondary)" }}
              >
                <p className="text-[11.5px] font-bold uppercase tracking-wider text-[var(--brand)] mb-2">
                  Antwort · Malergeschäft Bernhard AG
                </p>
                <p className="text-[13.5px] leading-relaxed text-[var(--muted)]">
                  {review.ownerResponse.text}
                  {review.ownerResponse.truncated && " …"}
                </p>
                <button
                  onClick={() => setExpanded(false)}
                  className="mt-2 text-[12px] text-[var(--brand)] hover:underline underline-offset-2"
                >
                  Schliessen
                </button>
              </motion.div>
            ) : (
              <button
                onClick={() => setExpanded(true)}
                className="flex items-center gap-1.5 text-[12.5px] font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
                Antwort lesen
              </button>
            )}
          </div>
        )}
      </div>

      {/* Hidden schema data */}
      <div style={{ display: "none" }} itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
        <meta itemProp="ratingValue" content={String(review.stars)} />
        <meta itemProp="bestRating" content="5" />
      </div>
    </motion.article>
  );
}

/* ─── Aggregate hero stat ─── */

function AggregateStat() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col sm:flex-row items-center sm:items-stretch gap-6 sm:gap-10 bg-white rounded-2xl border border-[var(--line)] shadow-[var(--shadow-lg)] p-8 md:p-10 max-w-2xl mx-auto"
    >
      {/* Score */}
      <div className="text-center flex flex-col items-center justify-center">
        <p
          className="font-extrabold leading-none"
          style={{ fontSize: "5rem", color: "var(--brand)", letterSpacing: "-0.03em" }}
        >
          {aggregateRating.ratingValue.toFixed(1)}
        </p>
        <StarRow count={5} size={22} />
        <p className="text-[13px] text-[var(--muted)] mt-2">
          {aggregateRating.reviewCount} Bewertungen
        </p>
      </div>

      <div
        className="hidden sm:block w-px self-stretch"
        style={{ background: "var(--line)" }}
      />

      {/* Details */}
      <div className="flex flex-col justify-center gap-3 text-center sm:text-left">
        <div>
          <p className="text-[2rem] font-bold text-gradient-heading leading-none">
            {aggregateRating.reviewCount}
          </p>
          <p className="text-[13px] text-[var(--muted)] mt-0.5">Gesamtbewertungen</p>
        </div>
        <div>
          <p className="text-[2rem] font-bold text-gradient-heading leading-none">
            100%
          </p>
          <p className="text-[13px] text-[var(--muted)] mt-0.5">Weiterempfehlung</p>
        </div>
        <a
          href="https://www.google.com/maps/search/Malergesch%C3%A4ft+Bernhard+AG+Dietlikon"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--brand)] hover:underline underline-offset-2 mt-1"
        >
          Auf Google bewerten
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

/* ─── Page ─── */

export default function BewertungenContent() {
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
              Kundenstimmen
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", lineHeight: 1.04 }}
            >
              <span className="text-white">Was unsere Kunden</span>
              <br />
              <span className="text-gradient-hero">über uns sagen.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              style={{ color: "rgba(255,255,255,0.88)", fontSize: "17px", lineHeight: 1.65, marginTop: "1.25rem" }}
            >
              {aggregateRating.reviewCount} Bewertungen auf Google — alle 5 Sterne.
              Authentische Erfahrungsberichte, ungefiltert und unverändert.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="flex flex-wrap justify-end gap-3 mt-8"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link href="/kontakt/anfrage" className="btn btn-primary">
                  Offerte anfragen
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://www.google.com/maps/search/Malergesch%C3%A4ft+Bernhard+AG+Dietlikon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-white"
                >
                  Auf Google bewerten
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

      {/* ─── Aggregate rating ─── */}
      <section className="section section-surface">
        <div className="container">
          <AnimatedSection className="mb-14">
            <span className="brand-rule mx-auto" />
            <h2 className="text-center mb-3 text-gradient-heading">Google-Bewertungen</h2>
            <p className="text-center text-[17px] text-[var(--muted)] max-w-xl mx-auto mb-10">
              Alle Bewertungen stammen direkt von Google Maps und werden nicht
              verändert oder gefiltert.
            </p>
            <AggregateStat />
          </AnimatedSection>

          {/* ─── Review grid ─── */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((review, i) => (
              <ReviewCard key={review.name + i} review={review} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Star-only note ─── */}
      <section className="section section-surface-muted">
        <div className="container">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <span className="brand-rule mx-auto" />
            <h2 className="mb-4 text-gradient-heading">Noch mehr Stimmen</h2>
            <p className="text-[17px] text-[var(--muted)] leading-relaxed mb-6">
              Neben den {aggregateRating.textReviews} schriftlichen Bewertungen haben uns
              weitere {aggregateRating.reviewCount - aggregateRating.textReviews} Kunden
              mit vollen 5 Sternen bewertet — ohne Text. Das Ergebnis: ein perfektes
              Rating auf Google.
            </p>
            <div className="flex justify-center mb-8">
              <StarRow count={5} size={28} />
            </div>
            <a
              href="https://www.google.com/maps/search/Malergesch%C3%A4ft+Bernhard+AG+Dietlikon"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline inline-flex items-center gap-2"
            >
              Alle Bewertungen auf Google ansehen
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-cta-soft">
        <div className="container text-center">
          <AnimatedSection>
            <span className="brand-rule mx-auto" />
            <h2 className="mb-4 text-gradient-heading">Überzeugt?</h2>
            <p className="text-[17px] text-[var(--muted)] mb-8 max-w-lg mx-auto">
              Fordern Sie jetzt Ihr persönliches Angebot an — kostenlos,
              unverbindlich und schnell.
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
