import type { Metadata } from "next";
import TeamContent from "./TeamContent";

export const metadata: Metadata = {
  title: "Team – Maler Bernhard",
  description:
    "Das Team von Malergeschäft Bernhard AG: Thomas Bernhard, Tobias Keller und 16 weitere Fachkräfte und Lernende.",
};

export default function TeamPage() {
  return <TeamContent />;
}
