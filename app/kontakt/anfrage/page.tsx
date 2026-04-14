"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export default function AnfragePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    vorname: "",
    name: "",
    adresse: "",
    plz: "",
    ort: "",
    email: "",
    tel: "",
    nachricht: "",
    leistung: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production: submit to API route or form service
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        label="Kontakt"
        title="Offerte anfragen"
        subtitle="Schildern Sie uns Ihr Projekt — wir melden uns innerhalb von 1–2 Werktagen."
      />

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <AnimatedSection direction="left">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6"
                    style={{ background: "var(--brand)" }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h2 className="mb-3">Anfrage erhalten!</h2>
                  <p style={{ fontSize: "17px", color: "var(--muted)", maxWidth: "30rem", marginInline: "auto" }}>
                    Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von
                    1–2 Werktagen bei Ihnen.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13.5px] font-semibold mb-1.5">
                        Vorname <span style={{ color: "var(--brand-red)" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="vorname"
                        required
                        value={form.vorname}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded border text-[15px] focus:outline-none focus:border-[var(--brand)] transition-colors"
                        style={{ borderColor: "var(--line)", background: "var(--paper)" }}
                      />
                    </div>
                    <div>
                      <label className="block text-[13.5px] font-semibold mb-1.5">
                        Name <span style={{ color: "var(--brand-red)" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded border text-[15px] focus:outline-none focus:border-[var(--brand)] transition-colors"
                        style={{ borderColor: "var(--line)", background: "var(--paper)" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13.5px] font-semibold mb-1.5">
                      Adresse <span style={{ color: "var(--brand-red)" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="adresse"
                      required
                      value={form.adresse}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded border text-[15px] focus:outline-none focus:border-[var(--brand)] transition-colors"
                      style={{ borderColor: "var(--line)", background: "var(--paper)" }}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[13.5px] font-semibold mb-1.5">
                        PLZ <span style={{ color: "var(--brand-red)" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="plz"
                        required
                        value={form.plz}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded border text-[15px] focus:outline-none focus:border-[var(--brand)] transition-colors"
                        style={{ borderColor: "var(--line)", background: "var(--paper)" }}
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-[13.5px] font-semibold mb-1.5">
                        Ort <span style={{ color: "var(--brand-red)" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="ort"
                        required
                        value={form.ort}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded border text-[15px] focus:outline-none focus:border-[var(--brand)] transition-colors"
                        style={{ borderColor: "var(--line)", background: "var(--paper)" }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13.5px] font-semibold mb-1.5">
                        E-Mail <span style={{ color: "var(--brand-red)" }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded border text-[15px] focus:outline-none focus:border-[var(--brand)] transition-colors"
                        style={{ borderColor: "var(--line)", background: "var(--paper)" }}
                      />
                    </div>
                    <div>
                      <label className="block text-[13.5px] font-semibold mb-1.5">
                        Telefon <span style={{ color: "var(--brand-red)" }}>*</span>
                      </label>
                      <input
                        type="tel"
                        name="tel"
                        required
                        value={form.tel}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded border text-[15px] focus:outline-none focus:border-[var(--brand)] transition-colors"
                        style={{ borderColor: "var(--line)", background: "var(--paper)" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13.5px] font-semibold mb-1.5">Gewünschte Leistung</label>
                    <select
                      name="leistung"
                      value={form.leistung}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded border text-[15px] focus:outline-none focus:border-[var(--brand)] transition-colors"
                      style={{ borderColor: "var(--line)", background: "var(--paper)" }}
                    >
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
                      name="nachricht"
                      required
                      rows={5}
                      value={form.nachricht}
                      onChange={handleChange}
                      placeholder="Beschreiben Sie Ihr Projekt, Objekt und Ihre Wünsche…"
                      className="w-full px-4 py-2.5 rounded border text-[15px] focus:outline-none focus:border-[var(--brand)] transition-colors resize-none"
                      style={{ borderColor: "var(--line)", background: "var(--paper)" }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-full justify-center">
                    Anfrage senden
                  </button>
                  <p style={{ fontSize: "12.5px", color: "var(--muted)", textAlign: "center" }}>
                    Mit dem Absenden stimmen Sie unserer{" "}
                    <a href="/datenschutz" style={{ color: "var(--brand)" }}>Datenschutzerklärung</a> zu.
                  </p>
                </form>
              )}
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="rounded p-6 mb-6" style={{ background: "var(--paper)" }}>
                <h3 className="mb-4 text-[1.05rem]">Wie es weitergeht</h3>
                {[
                  { step: "1", text: "Wir erhalten Ihre Anfrage und prüfen diese." },
                  { step: "2", text: "Innerhalb von 1–2 Werktagen melden wir uns bei Ihnen." },
                  { step: "3", text: "Wir vereinbaren einen Besichtigungstermin vor Ort." },
                  { step: "4", text: "Sie erhalten ein detailliertes, transparentes Angebot." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3 mb-3 last:mb-0">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ background: "var(--brand)", color: "white" }}>
                      {item.step}
                    </div>
                    <p style={{ fontSize: "14.5px", color: "var(--muted)", lineHeight: 1.6 }}>{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="rounded p-6" style={{ background: "var(--brand)", color: "white" }}>
                <p style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", opacity: 0.7, marginBottom: "0.5rem" }}>
                  Lieber anrufen?
                </p>
                <a href="tel:+41448332251"
                  style={{ fontSize: "1.5rem", fontWeight: 700, color: "white" }}>
                  044 833 22 51
                </a>
                <p style={{ fontSize: "13.5px", opacity: 0.7, marginTop: "0.5rem" }}>
                  Mo–Fr, 07:30–17:00 Uhr
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
