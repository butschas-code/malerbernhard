import type { Metadata } from "next";
import SpezialarbeitenContent from "./SpezialarbeitenContent";

export const metadata: Metadata = {
  title: "Spezialarbeiten",
  description:
    "Schimmelpilzsanierung (SCHIMEX), gesundes Wohnen, Naturofloor, Spritzwerk und Niederdruck-Strahlen. Spezialleistungen von Malergeschäft Bernhard AG in Dietlikon.",
};

export default function SpezialarbeitenPage() {
  return <SpezialarbeitenContent />;
}
