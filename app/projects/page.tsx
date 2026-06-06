import type { Metadata } from "next";
import { Projects } from "@/components/projects";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: `Projects by ${profile.name} — TAVI mortality prediction with IBM Granite-4, Physics-Informed Neural Networks for aeroelastic flutter (SCML 2024), 4D Gaussian Splatting research, full-stack RAG systems, and Decidion AI.`,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `Projects — ${profile.name}`,
    description: `TAVI Risk Insight (IBM Granite-4), PINNs, 4D Gaussian Splatting, RAG, Decidion AI, CareCompass.`,
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return <Projects />;
}
