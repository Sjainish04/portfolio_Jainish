import type { Metadata } from "next";
import { Contact } from "@/components/contact";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name}, Machine Learning Engineer in ${profile.location}. Open to research collaborations, ML infrastructure, applied research, and scientific computing.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact — ${profile.name}`,
    description: `Open to ML, research, scientific-computing collaborations. Toronto-based.`,
    url: "/contact",
  },
};

export default function ContactPage() {
  return <Contact />;
}
