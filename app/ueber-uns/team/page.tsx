import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Das Team von Malergeschäft Bernhard AG: Thomas Bernhard (Geschäftsführer), Tobias Keller und 16 weitere Fachkräfte und Lernende.",
};

const team = [
  { name: "Thomas Bernhard", role: "Geschäftsführer", email: "t.bernhard@malerbernhard.ch", phone: "044 833 22 51" },
  { name: "Tobias Keller", role: "Geschäftsführer Stv.", email: "t.keller@malerbernhard.ch", phone: "044 833 36 86" },
  { name: "Corinne Metzger", role: "Sekretärin / Buchhaltung", email: "c.metzger@malerbernhard.ch", phone: "044 833 22 51" },
  { name: "Tamara Goppelt", role: "Baustellenleiterin, kt.COLOR-Verarbeiterin" },
  { name: "Sabine Pfister", role: "Vorarbeiterin" },
  { name: "Gzim Hoti", role: "Kundengipser" },
  { name: "Markus Brönnimann", role: "Kundenmaler" },
  { name: "Giacomo Fattorusso", role: "Kundenmaler" },
  { name: "Lukas Hauswirth", role: "Kundenmaler, kt.COLOR-Verarbeiter" },
  { name: "Francisco Malagueta", role: "Kundenmaler" },
  { name: "Oliver Mongelli", role: "Kundenmaler, kt.COLOR-Verarbeiter" },
  { name: "Fatlum Shabani", role: "Kundenmaler" },
  { name: "D. Lau", role: "Kundenmaler" },
  { name: "Joshua Amato", role: "Kundenmaler" },
  { name: "Joelle Berger", role: "Kundenmalerin" },
  { name: "Daniel Isak", role: "Kundenmaler" },
  { name: "Din Gorbach", role: "Kundenmaler" },
  { name: "Maurizio Magistretti", role: "Kundenmaler" },
  { name: "Lea Zelnicek", role: "Lernende 2. Lehrjahr" },
];

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        label="Über uns"
        title="Unser Team"
        subtitle="18 Fachkräfte und Lernende — ein starkes Team für Ihr Projekt."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
      />

      <section className="section bg-white">
        <div className="container">
          <AnimatedSection>
            <span className="brand-rule" />
            <h2 className="mb-4">Geschäftsleitung</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {team.slice(0, 3).map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="bg-white rounded border border-[var(--line)] p-6 text-center">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl"
                    style={{ background: "var(--brand)", color: "white" }}>
                    {initials(member.name)}
                  </div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.25rem" }}>{member.name}</h3>
                  <p style={{ fontSize: "13.5px", color: "var(--muted)", marginBottom: "0.75rem" }}>{member.role}</p>
                  {member.email && (
                    <a href={`mailto:${member.email}`}
                      style={{ fontSize: "13px", color: "var(--brand)", display: "block", marginBottom: "0.25rem" }}>
                      {member.email}
                    </a>
                  )}
                  {member.phone && (
                    <a href={`tel:+41${member.phone.replace(/[ .]/g, "").slice(1)}`}
                      style={{ fontSize: "13px", color: "var(--muted)" }}>
                      {member.phone}
                    </a>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <h2 className="mb-8">Fachkräfte & Lernende</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.slice(3).map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.05}>
                <div className="flex items-center gap-4 bg-[var(--paper)] rounded p-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                    style={{ background: "var(--brand-dark)", color: "white" }}>
                    {initials(member.name)}
                  </div>
                  <div>
                    <p style={{ fontSize: "14.5px", fontWeight: 700 }}>{member.name}</p>
                    <p style={{ fontSize: "13px", color: "var(--muted)" }}>{member.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* Mascot */}
            <AnimatedSection delay={0.8}>
              <div className="flex items-center gap-4 bg-[var(--paper)] rounded p-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: "var(--paper-dark)", border: "1.5px solid var(--line)" }}>
                  🐾
                </div>
                <div>
                  <p style={{ fontSize: "14.5px", fontWeight: 700 }}>Balz</p>
                  <p style={{ fontSize: "13px", color: "var(--muted)" }}>Streicheltier</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
