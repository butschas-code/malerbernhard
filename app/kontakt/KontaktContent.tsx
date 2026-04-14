"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1423742774270-6884aac775fa?w=1920&q=85";

const heroStamps = ["Antwort in 1–2 Werktagen", "Kostenlose Beratung", "Dietlikon"];

const contacts = [
  {
    name: "Thomas Bernhard",
    role: "Geschäftsführer",
    initials: "TB",
    phone: "044 833 22 51",
    tel: "+41448332251",
    email: "t.bernhard@malerbernhard.ch",
  },
  {
    name: "Tobias Keller",
    role: "Geschäftsführer Stv.",
    initials: "TK",
    phone: "044 833 36 86",
    tel: "+41448333686",
    email: "t.keller@malerbernhard.ch",
  },
  {
    name: "Corinne Metzger",
    role: "Sekretärin / Buchhaltung",
    initials: "CM",
    phone: "044 833 22 51",
    tel: "+41448332251",
    email: "c.metzger@malerbernhard.ch",
  },
];

const steps = [
  { n: "1", text: "Wir erhalten Ihre Anfrage und prüfen diese." },
  { n: "2", text: "Innerhalb von 1–2 Werktagen melden wir uns bei Ihnen." },
  { n: "3", text: "Wir vereinbaren einen Besichtigungstermin vor Ort." },
  { n: "4", text: "Sie erhalten ein detailliertes, transparentes Angebot." },
];

export default function KontaktContent() {
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

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    vorname: "", name: "", adresse: "", plz: "", ort: "",
    email: "", tel: "", nachricht: "", leistung: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "w-full px-4 py-2.5 rounded-lg border text-[15px] focus:outline-none focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/10 transition-all bg-white";
  const inputStyle = { borderColor: "var(--line)" };

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative min-h-[88dvh] flex items-end overflow-hidden bg-[var(--ink)]"
      >
        <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale, zIndex: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={HERO_IMAGE} alt="" className="absolute inset-0 w-full h-full object-cover" />
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
                    fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.12em",
                    textTransform: "uppercase", color: "white",
                    background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)",
                    backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
                    borderRadius: "6px", padding: "6px 12px", display: "inline-block",
                  }}
                >
                  {s}
                </motion.span>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-bold tracking-[0.16em] uppercase text-white/70 mb-3"
            >
              Kontakt
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", lineHeight: 1.04 }}
            >
              <span className="text-white">Sprechen wir</span>
              <br />
              <span className="text-gradient-hero">über Ihr Projekt.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              style={{ color: "rgba(255,255,255,0.88)", fontSize: "17px", lineHeight: 1.65, marginTop: "1.25rem" }}
            >
              Kostenlose Beratung vor Ort, transparente Offerten und fachgerechte
              Ausführung — von Innenraum bis Fassade im Glatttal und Grossraum Zürich.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="flex flex-wrap justify-end gap-3 mt-8"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <a href="#anfrage" className="btn btn-primary">
                  Offerte anfragen
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
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
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
      <div style={{ height: "6px", background: "linear-gradient(90deg, var(--brand-red) 0%, var(--brand-secondary) 50%, var(--brand-tertiary) 100%)" }} />

      {/* ─── Direktkontakt ─── */}
      <section className="section section-surface">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <span className="brand-rule" />
              <h2 className="mb-8 text-gradient-heading">Direktkontakt</h2>

              <div className="space-y-4 mb-8">
                {contacts.map((c, i) => (
                  <AnimatedSection key={c.name} delay={i * 0.06}>
                    <div className="flex gap-4 p-5 rounded-xl border border-[var(--line)] bg-white/80 shadow-[var(--shadow)] hover:shadow-[var(--shadow-lg)] hover:border-[var(--brand)]/30 transition-all duration-200">
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-[13px] flex-shrink-0 text-white"
                        style={{ background: "var(--brand)" }}
                      >
                        {c.initials}
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-[15px] mb-0.5">{c.name}</p>
                        <p className="text-[13px] text-[var(--muted)] mb-2">{c.role}</p>
                        <a href={`tel:${c.tel}`} className="block text-[14px] font-semibold text-[var(--brand)] hover:underline underline-offset-2">
                          {c.phone}
                        </a>
                        <a href={`mailto:${c.email}`} className="block text-[13px] text-[var(--muted)] hover:text-[var(--ink)] transition-colors truncate">
                          {c.email}
                        </a>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <div className="rounded-xl p-6" style={{ background: "var(--brand)" }}>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Malergeschäft Bernhard AG
                </p>
                <address className="not-italic text-[14.5px] leading-[1.9]" style={{ color: "rgba(255,255,255,0.82)" }}>
                  Säntisstrasse 30, 8305 Dietlikon<br />
                  <a href="tel:+41448332251" className="font-bold" style={{ color: "white" }}>+41 44 833 22 51</a><br />
                  <a href="mailto:info@malerbernhard.ch" style={{ color: "rgba(255,255,255,0.82)" }}>info@malerbernhard.ch</a>
                </address>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=S%C3%A4ntisstrasse+30+8305+Dietlikon"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white hover:opacity-90 underline underline-offset-4 transition-opacity"
                  >
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1C5.2 1 3 3.2 3 6C3 10 8 15 8 15C8 15 13 10 13 6C13 3.2 10.8 1 8 1ZM8 8C6.9 8 6 7.1 6 6C6 4.9 6.9 4 8 4C9.1 4 10 4.9 10 6C10 7.1 9.1 8 8 8Z" fill="currentColor" />
                    </svg>
                    Route planen
                  </a>
                </div>
                <p className="mt-3 text-[12.5px]" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Mo–Fr 07:30–17:00 Uhr
                </p>
              </div>
            </AnimatedSection>

            {/* Map */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-lg)] ring-1 ring-black/[0.06] aspect-[4/3]">
                <iframe
                  title="Malergeschäft Bernhard AG – Standort"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.7395!2d8.6176!3d47.4283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa3c0e6c57b6f%3A0x3d1b5e7a8f2e4c1a!2sS%C3%A4ntisstrasse%2030%2C%208305%20Dietlikon!5e0!3m2!1sde!2sch!4v1690000000000!5m2!1sde!2sch"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-5 text-[14px] text-[var(--muted)] leading-relaxed">
                <strong className="text-[var(--ink)]">Servicegebiet:</strong>{" "}
                Dietlikon, Wallisellen, Opfikon, Kloten, Bassersdorf, Nürensdorf,
                Brüttisellen, Dübendorf, Effretikon, Volketswil, Zürich, Winterthur
                und Umgebung.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Anfrage form ─── */}
      <section id="anfrage" className="section section-surface-muted scroll-mt-[80px]">
        <div className="container">
          <AnimatedSection className="mb-12">
            <span className="brand-rule" />
            <h2 className="mb-3 text-gradient-heading">Offerte anfragen</h2>
            <p className="text-[17px] text-[var(--muted)] max-w-xl">
              Schildern Sie uns Ihr Projekt — wir melden uns innerhalb von 1–2 Werktagen.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
            {/* Form */}
            <AnimatedSection direction="left">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 rounded-2xl bg-white border border-[var(--line)] shadow-[var(--shadow)]"
                >
                  <div
                    className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6"
                    style={{ background: "var(--brand)" }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-gradient-heading mb-3" style={{ fontSize: "1.6rem" }}>Anfrage erhalten!</h3>
                  <p className="text-[17px] text-[var(--muted)] max-w-xs mx-auto leading-relaxed">
                    Vielen Dank. Wir melden uns innerhalb von 1–2 Werktagen bei Ihnen.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] p-6 md:p-8 space-y-5"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13.5px] font-semibold mb-1.5">
                        Vorname <span style={{ color: "var(--brand-red)" }}>*</span>
                      </label>
                      <input type="text" name="vorname" required value={form.vorname} onChange={handleChange} className={inputClass} style={inputStyle} />
                    </div>
                    <div>
                      <label className="block text-[13.5px] font-semibold mb-1.5">
                        Name <span style={{ color: "var(--brand-red)" }}>*</span>
                      </label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange} className={inputClass} style={inputStyle} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13.5px] font-semibold mb-1.5">
                      Adresse <span style={{ color: "var(--brand-red)" }}>*</span>
                    </label>
                    <input type="text" name="adresse" required value={form.adresse} onChange={handleChange} className={inputClass} style={inputStyle} />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[13.5px] font-semibold mb-1.5">
                        PLZ <span style={{ color: "var(--brand-red)" }}>*</span>
                      </label>
                      <input type="text" name="plz" required value={form.plz} onChange={handleChange} className={inputClass} style={inputStyle} />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-[13.5px] font-semibold mb-1.5">
                        Ort <span style={{ color: "var(--brand-red)" }}>*</span>
                      </label>
                      <input type="text" name="ort" required value={form.ort} onChange={handleChange} className={inputClass} style={inputStyle} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13.5px] font-semibold mb-1.5">
                        E-Mail <span style={{ color: "var(--brand-red)" }}>*</span>
                      </label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange} className={inputClass} style={inputStyle} />
                    </div>
                    <div>
                      <label className="block text-[13.5px] font-semibold mb-1.5">
                        Telefon <span style={{ color: "var(--brand-red)" }}>*</span>
                      </label>
                      <input type="tel" name="tel" required value={form.tel} onChange={handleChange} className={inputClass} style={inputStyle} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13.5px] font-semibold mb-1.5">Gewünschte Leistung</label>
                    <select name="leistung" value={form.leistung} onChange={handleChange} className={inputClass} style={inputStyle}>
                      <option value="">Bitte wählen…</option>
                      <optgroup label="Malerarbeiten">
                        <option>Innenraum</option>
                        <option>Aussenraum & Fassade</option>
                        <option>Raumgestaltung</option>
                        <option>Historische Bauten</option>
                        <option>kt.COLOR</option>
                      </optgroup>
                      <optgroup label="Spezialarbeiten">
                        <option>Schimmelpilzsanierung</option>
                        <option>Gesundes Wohnen</option>
                        <option>Naturofloor</option>
                        <option>Spritzwerk</option>
                        <option>Niederdruck-Strahlen</option>
                      </optgroup>
                      <option>Sonstiges</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[13.5px] font-semibold mb-1.5">
                      Nachricht <span style={{ color: "var(--brand-red)" }}>*</span>
                    </label>
                    <textarea
                      name="nachricht" required rows={5}
                      value={form.nachricht} onChange={handleChange}
                      placeholder="Beschreiben Sie Ihr Projekt, Objekt und Ihre Wünsche…"
                      className={`${inputClass} resize-none`}
                      style={inputStyle}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-full justify-center text-[15px] py-3">
                    Anfrage senden
                  </button>
                  <p className="text-[12px] text-[var(--muted)] text-center">
                    Mit dem Absenden stimmen Sie unserer{" "}
                    <Link href="/datenschutz" className="text-[var(--brand)] hover:underline">Datenschutzerklärung</Link> zu.
                  </p>
                </form>
              )}
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection direction="right" delay={0.1} className="space-y-5">
              {/* Steps */}
              <div className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-[var(--shadow)]">
                <h3 className="text-[1.05rem] font-bold mb-5">Wie es weitergeht</h3>
                <div className="space-y-4">
                  {steps.map((step) => (
                    <div key={step.n} className="flex gap-3.5">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0 text-white"
                        style={{ background: "var(--brand)" }}
                      >
                        {step.n}
                      </div>
                      <p className="text-[14.5px] text-[var(--muted)] leading-relaxed pt-0.5">{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phone CTA */}
              <div className="rounded-2xl p-6" style={{ background: "var(--brand)" }}>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Lieber anrufen?
                </p>
                <a href="tel:+41448332251" className="block text-[1.75rem] font-bold text-white leading-tight hover:opacity-90 transition-opacity">
                  044 833 22 51
                </a>
                <p className="text-[13px] mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>Mo–Fr, 07:30–17:00 Uhr</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-cta-soft">
        <div className="container text-center">
          <AnimatedSection>
            <span className="brand-rule mx-auto" />
            <h2 className="mb-4 text-gradient-heading">Wir freuen uns auf Sie</h2>
            <p className="text-[17px] text-[var(--muted)] mb-8 max-w-lg mx-auto">
              Lernen Sie unser Team kennen und überzeugen Sie sich von
              unserer Arbeit.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/ueber-uns/team" className="btn btn-primary inline-flex items-center justify-center font-bold text-[14px] px-6 py-3 transition-transform duration-200 hover:scale-[1.02]">
                Unser Team
              </Link>
              <Link href="/bewertungen" className="btn btn-outline">
                Kundenstimmen lesen
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
