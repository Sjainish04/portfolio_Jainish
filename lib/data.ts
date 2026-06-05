export const profile = {
  name: "Jainish Solanki",
  role: "ML Engineer",
  tagline:
    "Building practical machine learning systems at the intersection of research and production.",
  location: "Toronto, Canada",
  email: "jainish.solanki@netramark.com",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/Sjainish04",
    linkedin: "https://www.linkedin.com/in/jainishsolanki/",
    twitter: "",
  },
};

export const about = [
  "I'm an ML Engineer at Netramark Corporation in Toronto, where I work on production ML systems, knowledge-graph retrieval, and storage-agnostic data pipelines.",
  "I'm pursuing an MEng in Mechanical & Industrial Engineering at the University of Toronto, with a B.Tech (Honours) in Aerospace Engineering from IIT Kharagpur.",
  "I like deep problems: physics-informed neural networks for damage identification, weak-form solvers, and infrastructure that makes ML actually shippable.",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Netramark Corporation",
    role: "ML Engineer",
    period: "Feb 2026 — Present",
    location: "Toronto, Canada",
    bullets: [
      "Building knowledge-graph retrieval over GLiNER + SapBERT + Neo4j Aura, replacing the previous vector-store pipeline.",
      "Designing storage-agnostic IO via a StorageAdapter pattern (Local + GCS) across a Python uv monorepo.",
      "Shipping orchestrator + CLI patterns that keep the system extensible without breaking existing flows.",
    ],
  },
];

export type Education = {
  school: string;
  degree: string;
  period: string;
};

export const education: Education[] = [
  {
    school: "University of Toronto",
    degree: "MEng, Mechanical & Industrial Engineering",
    period: "Sep 2025 — Nov 2027",
  },
  {
    school: "IIT Kharagpur",
    degree: "B.Tech (Honours), Aerospace Engineering",
    period: "Dec 2021 — Apr 2025",
  },
];

export type Project = {
  name: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    name: "Weak-Form PINNs",
    description:
      "Physics-informed neural network for damage identification on Euler-Bernoulli beams. RBF parameterization with Newmark integration and Gauss-Legendre quadrature in PyTorch.",
    tech: ["PyTorch", "Numerical Methods", "Autograd"],
  },
  {
    name: "CareCompass",
    description:
      "AI-assisted care navigation tool. Vite + React frontend, Express + Supabase backend, GPT-OSS 120B with Cohere reranking — built for the Genesis AI hackathon.",
    tech: ["React", "Express", "Supabase", "GPT-OSS", "Cohere"],
  },
];

export const skills = {
  Languages: ["Python", "TypeScript", "Bash", "C++"],
  "ML / Research": ["PyTorch", "Autograd", "FEM", "Numerical Methods"],
  Backend: ["FastAPI", "PostgreSQL", "Neo4j", "Docker"],
  Frontend: ["React", "Next.js", "Tailwind", "Three.js"],
  Infra: ["GCP", "Vercel", "Linux", "Git", "ROS 2"],
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
