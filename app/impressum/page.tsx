import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Malergeschäft Bernhard AG, Säntisstrasse 30, 8305 Dietlikon.",
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero label="Rechtliches" title="Impressum" />

      <section className="section section-surface">
        <div className="container max-w-2xl">
          <AnimatedSection>
            <div className="prose" style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--ink)" }}>
              <h2 className="text-gradient-heading">Unternehmensangaben</h2>
              <address className="not-italic" style={{ lineHeight: 2 }}>
                <strong>Malergeschäft Bernhard AG</strong><br />
                Säntisstrasse 30<br />
                8305 Dietlikon<br />
                Schweiz
              </address>

              <table className="mt-6 w-full" style={{ fontSize: "15px" }}>
                <tbody>
                  {[
                    ["Rechtsform", "Aktiengesellschaft (AG)"],
                    ["Telefon", "+41 44 833 22 51"],
                    ["E-Mail", "info@malerbernhard.ch"],
                    ["Website", "www.malerbernhard.ch"],
                  ].map(([label, value]) => (
                    <tr key={label} style={{ borderBottom: "1px solid var(--line)" }}>
                      <td className="py-2.5 pr-6" style={{ fontWeight: 600, color: "var(--muted)", width: "40%" }}>{label}</td>
                      <td className="py-2.5">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h2 className="mt-10 text-gradient-heading">Haftungsausschluss</h2>
              <p>
                Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen
                Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und
                Vollständigkeit der Informationen.
              </p>
              <p>
                Haftungsansprüche gegen den Autor wegen Schäden materieller oder
                immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw.
                Nichtnutzung der veröffentlichten Informationen, durch Missbrauch
                der Verbindung oder durch technische Störungen entstanden sind,
                werden ausgeschlossen.
              </p>

              <h2 className="mt-10 text-gradient-heading">Urheberrechte</h2>
              <p>
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos
                oder anderen Dateien auf dieser Website gehören ausschliesslich
                Malergeschäft Bernhard AG oder den speziell genannten Rechtsinhabern.
              </p>

              <h2 className="mt-10 text-gradient-heading">Datenschutz</h2>
              <p>
                Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die
                datenschutzrechtlichen Bestimmungen des Bundes hat jede Person
                Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor
                Missbrauch ihrer persönlichen Daten.{" "}
                <a href="/datenschutz" style={{ color: "var(--brand)" }}>
                  Zur Datenschutzerklärung
                </a>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
