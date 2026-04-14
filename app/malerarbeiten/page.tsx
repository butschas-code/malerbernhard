import type { Metadata } from "next";
import MalerarbeitenContent from "./MalerarbeitenContent";

export const metadata: Metadata = {
  title: "Malerarbeiten",
  description:
    "Innen- und Aussenmalerarbeiten, Raumgestaltung, Denkmalpflege und kt.COLOR. Professionelle Malerarbeiten im Glatttal und Grossraum Zürich — Malergeschäft Bernhard AG.",
};

export default function MalerarbeitenPage() {
  return <MalerarbeitenContent />;
}
