import type { Metadata } from "next";
import KontaktContent from "./KontaktContent";

export const metadata: Metadata = {
  title: "Kontakt – Maler Bernhard",
  description:
    "Kontaktieren Sie Malergeschäft Bernhard AG in Dietlikon. Offerte anfragen, anrufen oder per E-Mail — Antwort in 1–2 Werktagen.",
};

export default function KontaktPage() {
  return <KontaktContent />;
}
