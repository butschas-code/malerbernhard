import type { Metadata } from "next";
import UeberUnsContent from "./UeberUnsContent";

export const metadata: Metadata = {
  title: "Über uns – Maler Bernhard",
  description:
    "Malergeschäft Bernhard AG – gegründet 1911, geführt in der 4. Generation. Unternehmen, Philosophie, Engagement und Zertifikate.",
};

export default function UeberUnsPage() {
  return <UeberUnsContent />;
}
