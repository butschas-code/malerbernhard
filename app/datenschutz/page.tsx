import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Malergeschäft Bernhard AG. Stand September 2023.",
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero label="Rechtliches" title="Datenschutzerklärung" subtitle="Stand: September 2023" />

      <section className="section section-surface">
        <div className="container max-w-2xl">
          <AnimatedSection>
            <div style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--ink)" }}>
              <h2 className="mt-0 text-gradient-heading">Grundsatz</h2>
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen.
                Wir verarbeiten Ihre Daten daher ausschliesslich auf Grundlage der
                gesetzlichen Bestimmungen (DSG, DSGVO).
              </p>

              <h2 className="text-gradient-heading">Datenverarbeitung</h2>
              <p>Wir verarbeiten Ihre Daten für folgende Zwecke:</p>
              <ul style={{ paddingLeft: "1.5rem" }}>
                <li>Kommunikation und Anfragenbearbeitung</li>
                <li>Vertragsabschluss und -abwicklung</li>
                <li>Sicherheit und Compliance</li>
                <li>Risikomanagement</li>
              </ul>

              <h2 className="text-gradient-heading">Datenquellen</h2>
              <p>
                Wir erheben Daten direkt von Ihnen (Kontaktformular, E-Mail, Telefon)
                sowie aus öffentlichen Quellen (Register, Behörden, Bonitätsauskünfte).
              </p>

              <h2 className="text-gradient-heading">Weitergabe an Dritte</h2>
              <p>
                Ihre Daten werden nur weitergegeben an: Vertragspartner, Behörden
                und Gerichte (soweit gesetzlich erforderlich). Internationale
                Datenübertragungen erfolgen auf Basis der EU-Standardvertragsklauseln.
              </p>

              <h2 className="text-gradient-heading">Cookie-Einwilligung</h2>
              <p>
                Beim ersten Besuch dieser Website erscheint ein Hinweis, mit dem Sie
                nicht notwendige Cookies <strong>akzeptieren</strong> oder{" "}
                <strong>ablehnen</strong> können (schweizerisches Datenschutzrecht FADP
                und EU-DSGVO). Ihre Entscheidung wird im Browser gespeichert
                (localStorage) und kann jederzeit durch Löschen der Website-Daten im
                Browser zurückgesetzt werden. Technisch notwendige Cookies sind für den
                Betrieb der Seite erforderlich und werden auch bei Ablehnung
                verwendet, soweit unvermeidbar.
              </p>

              <h2 className="text-gradient-heading">Eingesetzte Technologien</h2>
              <ul style={{ paddingLeft: "1.5rem" }}>
                <li>
                  <strong>Google Web Fonts</strong> (Google LLC, Mountain View, USA)
                  — zur einheitlichen Darstellung von Schriftarten
                </li>
                <li>
                  <strong>Google Tag Manager</strong> (Google Ireland Limited, Dublin)
                  — zur Verwaltung von Website-Tags
                </li>
                <li>
                  <strong>Google Analytics</strong> mit IP-Anonymisierung — zur
                  Analyse der Website-Nutzung.{" "}
                  <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer"
                    style={{ color: "var(--brand)" }}>
                    Analytics deaktivieren
                  </a>
                </li>
                <li>
                  <strong>YouTube</strong> (erweiterter Datenschutzmodus)
                  — Cookies werden erst bei Videointeraktion gesetzt
                </li>
                <li>
                  <strong>Google Maps</strong> — zur Darstellung des Standorts
                </li>
              </ul>

              <h2 className="text-gradient-heading">Ihre Rechte</h2>
              <p>Sie haben das Recht auf:</p>
              <ul style={{ paddingLeft: "1.5rem" }}>
                <li>Auskunft über gespeicherte Daten</li>
                <li>Berichtigung unrichtiger Daten</li>
                <li>Löschung Ihrer Daten</li>
                <li>Widerspruch gegen die Verarbeitung</li>
                <li>Datenübertragbarkeit</li>
                <li>Widerruf einer erteilten Einwilligung</li>
              </ul>
              <p>
                Anfragen richten Sie bitte an:{" "}
                <a href="mailto:info@malerbernhard.ch" style={{ color: "var(--brand)" }}>
                  info@malerbernhard.ch
                </a>
              </p>

              <h2 className="text-gradient-heading">Aufsichtsbehörde</h2>
              <p>
                Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter (EDÖB):{" "}
                <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer"
                  style={{ color: "var(--brand)" }}>
                  www.edoeb.admin.ch
                </a>
              </p>

              <h2 className="text-gradient-heading">Social Media</h2>
              <ul style={{ paddingLeft: "1.5rem" }}>
                <li>
                  <a href="https://www.youtube.com/@malerbernhard" target="_blank" rel="noopener noreferrer"
                    style={{ color: "var(--brand)" }}>YouTube</a>
                </li>
                <li>
                  <a href="https://instagram.com/malerbernhard" target="_blank" rel="noopener noreferrer"
                    style={{ color: "var(--brand)" }}>Instagram</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/109805820406631/" target="_blank" rel="noopener noreferrer"
                    style={{ color: "var(--brand)" }}>Facebook</a>
                </li>
              </ul>
              <p style={{ fontSize: "13.5px", color: "var(--muted)", marginTop: "2rem" }}>
                Stand: September 2023
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
