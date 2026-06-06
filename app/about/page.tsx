import type { Metadata } from "next";
import { About } from "@/components/about";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name} — Machine Learning Engineer in ${profile.location}. Computer vision, NLP, physics-informed neural networks. M.Eng. at the University of Toronto, B.Tech (Honours) Aerospace from IIT Kharagpur. SCML 2024 paper, AMII AI for Earth Scholar.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About — ${profile.name}`,
    description: `Machine Learning Engineer. M.Eng. UofT, B.Tech IIT Kharagpur. Published at SCML 2024, AMII AI for Earth Scholar.`,
    url: "/about",
  },
};

export default function AboutPage() {
  return <About />;
}
