import type { Metadata } from "next";
import { localBusinessJsonLd } from "@/lib/seo/jsonld";
import BewertungenContent from "./BewertungenContent";

export const metadata: Metadata = {
  title: "Bewertungen – Maler Bernhard",
  description:
    "5.0 Sterne auf Google — 26 Bewertungen. Lesen Sie, was Kunden über Malergeschäft Bernhard AG sagen.",
};

export default function BewertungenPage() {
  const jsonLd = localBusinessJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BewertungenContent />
    </>
  );
}
