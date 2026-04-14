import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Malergeschäft Bernhard AG in Dietlikon. Telefon 044 833 22 51, E-Mail info@malerbernhard.ch. Offerte anfragen.",
};

const contacts = [
  {
    name: "Thomas Bernhard",
    role: "Geschäftsführer",
    phone: "044 833 22 51",
    email: "t.bernhard@malerbernhard.ch",
  },
  {
    name: "Tobias Keller",
    role: "Geschäftsführer Stv.",
    phone: "044 833 36 86",
    email: "t.keller@malerbernhard.ch",
  },
  {
    name: "Corinne Metzger",
    role: "Sekretärin / Buchhaltung",
    phone: "044 833 22 51",
    email: "c.metzger@malerbernhard.ch",
  },
];

export default function KontaktPage() {
  return (
    <>
      <PageHero
        label="Kontakt"
        title="Sprechen wir!"
        subtitle="Möchten Sie mehr über unsere Dienstleistungen erfahren oder haben Sie eine konkrete Anfrage? Wir freuen uns auf Ihre Nachricht."
      />

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <AnimatedSection direction="left">
              <span className="brand-rule" />
              <h2 className="mb-8">Direktkontakt</h2>

              <div className="space-y-6">
                {contacts.map((c) => (
                  <div key={c.name} className="flex gap-4 p-5 rounded border border-[var(--line)]"
                    style={{ background: "var(--paper)" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                      style={{ background: "var(--brand)", color: "white" }}>
                      {c.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, marginBottom: "0.125rem" }}>{c.name}</p>
                      <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "0.5rem" }}>{c.role}</p>
                      <a href={`tel:+41${c.phone.replace(/[ .]/g, "").slice(1)}`}
                        style={{ fontSize: "14px", color: "var(--brand)", display: "block", fontWeight: 600 }}>
                        {c.phone}
                      </a>
                      <a href={`mailto:${c.email}`}
                        style={{ fontSize: "13.5px", color: "var(--muted)" }}>
                        {c.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 rounded" style={{ background: "var(--brand)", color: "white" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.375rem", color: "white" }}>
                  Malergeschäft Bernhard AG
                </h3>
                <address className="not-italic" style={{ fontSize: "14.5px", color: "rgba(255,255,255,0.8)", lineHeight: 1.8 }}>
                  Säntisstrasse 30<br />
                  8305 Dietlikon<br />
                  <a href="tel:+41448332251" style={{ color: "white", fontWeight: 600 }}>+41 44 833 22 51</a><br />
                  <a href="mailto:info@malerbernhard.ch" style={{ color: "rgba(255,255,255,0.8)" }}>info@malerbernhard.ch</a>
                </address>
              </div>
            </AnimatedSection>

            {/* Quick links */}
            <AnimatedSection direction="right" delay={0.1}>
              <h2 className="mb-8">Schnellzugang</h2>

              <div className="space-y-4">
                <Link href="/kontakt/anfrage"
                  className="group flex items-center justify-between p-5 rounded border border-[var(--line)] hover:border-[var(--brand)] hover:shadow-md transition-all"
                  style={{ background: "var(--paper)" }}>
                  <div>
                    <p style={{ fontWeight: 700 }}>Offerte anfragen</p>
                    <p style={{ fontSize: "13.5px", color: "var(--muted)" }}>Unverbindliches Angebot einholen</p>
                  </div>
                  <svg className="group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>

                <a href="tel:+41448332251"
                  className="group flex items-center justify-between p-5 rounded border border-[var(--line)] hover:border-[var(--brand)] hover:shadow-md transition-all"
                  style={{ background: "var(--paper)" }}>
                  <div>
                    <p style={{ fontWeight: 700 }}>Direkt anrufen</p>
                    <p style={{ fontSize: "13.5px", color: "var(--muted)" }}>044 833 22 51</p>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </a>

                <a href="https://www.google.com/maps/dir/?api=1&destination=S%C3%A4ntisstrasse+30+8305+Dietlikon"
                  target="_blank" rel="noopener noreferrer"
                  className="group flex items-center justify-between p-5 rounded border border-[var(--line)] hover:border-[var(--brand)] hover:shadow-md transition-all"
                  style={{ background: "var(--paper)" }}>
                  <div>
                    <p style={{ fontWeight: 700 }}>Route planen</p>
                    <p style={{ fontSize: "13.5px", color: "var(--muted)" }}>Säntisstrasse 30, 8305 Dietlikon</p>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="var(--brand)" />
                  </svg>
                </a>
              </div>

              <p style={{ marginTop: "2rem", fontSize: "14px", color: "var(--muted)", lineHeight: 1.7 }}>
                <strong>Servicegebiet:</strong> Dietlikon, Wallisellen, Opfikon, Kloten,
                Bassersdorf, Nürensdorf, Brüttisellen, Dübendorf, Effretikon,
                Volketswil, Zürich, Winterthur und Umgebung.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
