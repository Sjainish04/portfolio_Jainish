import type { Metadata } from "next";
import { Experience } from "@/components/experience";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience",
  description: `Work history of ${profile.name} — Machine Learning roles across NAAVI Aerospace, MITACS Entuitive Workforce, and Cummins Lab at the University of Toronto. Computer vision, OCR, drug-discovery ML.`,
  alternates: { canonical: "/experience" },
  openGraph: {
    title: `Experience — ${profile.name}`,
    description: `ML and engineering experience: NAAVI Aerospace, Entuitive (MITACS), Cummins Lab.`,
    url: "/experience",
  },
};

export default function ExperiencePage() {
  return <Experience />;
}
