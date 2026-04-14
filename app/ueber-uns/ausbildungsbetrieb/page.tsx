import type { Metadata } from "next";
import AusbildungsbetriebContent from "./AusbildungsbetriebContent";

export const metadata: Metadata = {
  title: "Ausbildungsbetrieb – Maler Bernhard",
  description:
    "Malergeschäft Bernhard AG: TOP-Ausbildungsbetrieb und Swiss Olympic Leistungssportfreundlicher Lehrbetrieb. Jetzt Schnupperlehre anfragen.",
};

export default function AusbildungsbetriebPage() {
  return <AusbildungsbetriebContent />;
}
