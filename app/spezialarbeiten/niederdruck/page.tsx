import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Niederdruck-Strahlen",
  description:
    "Objektschonende Entlackung mit Niederdruckstrahler. Natriumbicarbonat oder Glasgranulat. Auch für Graffiti-Entfernung an Natur- und Kunststein.",
};

const applications = [
  "Tische und Bänke",
  "Geländer und Verkleidungen",
  "Holz- und Metallschränke",
  "Kleine Möbel und Einrichtungsgegenstände",
  "Fensterläden",
  "Deckensoffiten und -untersichten",
  "Graffiti an Natur- und Kunststein",
  "Fest eingebaute Elemente (ohne Demontage)",
];

export default function NiederdruckPage() {
  return (
    <>
      <PageHero
        label="Spezialarbeiten"
        title="Niederdruck-Strahlen"
        subtitle="Objektschonende Entlackung und Graffiti-Entfernung. Bis in jede Ecke und Fuge — ohne das Material zu beschädigen."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
      />

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <span className="brand-rule" />
              <h2 className="mb-6">Schonend und effektiv</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Unser Niederdruckstrahler arbeitet mit Natriumbicarbonat
                (Backpulver-Granulat) oder Glasgranulat und entfernt Lacke und
                Lasuren, ohne das darunterliegende Material zu beschädigen.
              </p>
              <p className="text-[17px] leading-relaxed mb-4">
                Die Methode eignet sich besonders für Objekte, die nicht demontiert
                werden können oder sollen. Das Strahlmittel erreicht auch schwer
                zugängliche Ecken und Fugen.
              </p>
              <p className="text-[17px] leading-relaxed">
                Auch für die Entfernung von Graffiti an Natur- und Kunststein ist
                das Niederdruckverfahren ideal — materialschonend und effektiv.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <h3 className="mb-5 text-[1.1rem]">Anwendungsgebiete</h3>
              <ul className="space-y-3">
                {applications.map((a) => (
                  <li key={a} className="flex items-start gap-3" style={{ fontSize: "15.5px" }}>
                    <svg className="mt-0.5 flex-shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="var(--brand)" strokeWidth="1.5" />
                      <path d="M5 8l2.5 2.5 4-4" stroke="var(--brand)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {a}
                  </li>
                ))}
              </ul>

              <div style={{ background: "var(--paper)", borderRadius: "4px", padding: "1.5rem", marginTop: "2rem" }}>
                <p style={{ fontSize: "13.5px", fontWeight: 700, marginBottom: "0.5rem" }}>Strahlmittel</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "Natriumbicarbonat", desc: "Sehr schonend, wasserlöslich" },
                    { name: "Glasgranulat", desc: "Robuster, für hartnäckige Lacke" },
                  ].map((m) => (
                    <div key={m.name} style={{ background: "white", borderRadius: "4px", padding: "0.875rem" }}>
                      <p style={{ fontSize: "13px", fontWeight: 700 }}>{m.name}</p>
                      <p style={{ fontSize: "12px", color: "var(--muted)" }}>{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="mb-4">Objekt entlacken lassen?</h2>
            <p style={{ fontSize: "17px", color: "var(--muted)", marginBottom: "2rem" }}>
              Wir beraten Sie und führen die Arbeit fachgerecht aus.
            </p>
            <Link href="/kontakt/anfrage" className="btn btn-primary">Anfrage stellen</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
