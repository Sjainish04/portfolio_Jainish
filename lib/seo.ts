import { profile } from "./data";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-jainish.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = `${profile.name} — ${profile.role}`;

export const PRIMARY_KEYWORDS = [
  "Jainish Solanki",
  "Jainish Solanki ML Engineer",
  "Jainish Solanki portfolio",
  "Jainish Solanki Toronto",
  "Machine Learning Engineer Toronto",
  "ML Engineer portfolio",
  "Physics-Informed Neural Networks",
  "PINNs research",
  "3D Gaussian Splatting",
  "RAG pipelines",
  "Computer Vision Engineer",
  "University of Toronto MEng",
  "IIT Kharagpur Aerospace",
  "ICSML 2025",
  "SCML 2024",
  "AMII AI for Earth Scholar",
];

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    givenName: "Jainish",
    familyName: "Solanki",
    jobTitle: "Machine Learning Engineer",
    description: profile.tagline,
    email: `mailto:${profile.email}`,
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    sameAs: [
      profile.socials.github,
      profile.socials.linkedin,
      "https://scml.jp/scml2024.html#papers",
    ].filter(Boolean),
    knowsAbout: [
      "Machine Learning",
      "Computer Vision",
      "Physics-Informed Neural Networks",
      "Retrieval-Augmented Generation",
      "3D Gaussian Splatting",
      "LLM Fine-tuning",
      "PyTorch",
      "FastAPI",
      "Scientific Computing",
      "Numerical Methods",
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "University of Toronto",
        sameAs: "https://www.utoronto.ca/",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Indian Institute of Technology Kharagpur",
        sameAs: "https://www.iitkgp.ac.in/",
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    author: {
      "@type": "Person",
      name: profile.name,
    },
  };
}
