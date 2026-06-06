export const profile = {
  name: "Jainish Solanki",
  role: "ML Engineer",
  tagline:
    "Building practical machine learning systems across computer vision, NLP, and physics-informed networks.",
  location: "Toronto, Canada",
  email: "jainish5658@gmail.com",
  phone: "+1 (647) 984-8616",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/Sjainish04",
    linkedin: "https://www.linkedin.com/in/jainish-solanki/",
    twitter: "",
  },
};

export const aboutLead =
  "I'm a Machine Learning Engineer working across computer vision, NLP, and physics-informed networks — currently building OCR + agent pipelines at Entuitive Workforce (MITACS) and a ligand-target analysis pipeline at the Cummins Lab.";

export const about = [
  "My research on Physics-Informed Neural Networks for Aeroelastic Flutter was accepted at ICSML 2025, and I'm a 2026 AMII AI for Earth Scholar. Most of my work lives at the seam between numerical methods and learned systems — PINNs, weak-form solvers, 3D Gaussian Splatting, RAG pipelines.",
  "I'm doing an M.Eng. at the University of Toronto in Mechanical & Industrial Engineering (UTIAS), after a B.Tech (Honours) in Aerospace Engineering from IIT Kharagpur. The formal background isn't CS — I learned to ship by building.",
  "When I'm not on ML, I'm a math tutor, a campus events ambassador at UofT, and an occasional Three.js tinkerer. Always open to interesting collaborations.",
];

export type QuickFact = {
  label: string;
  value: string;
};

export const quickFacts: QuickFact[] = [
  { label: "Based in", value: "Toronto, Canada" },
  { label: "Currently", value: "ML / Research Engineer" },
  { label: "Studying", value: "M.Eng. — University of Toronto" },
  { label: "Previously", value: "B.Tech Aerospace, IIT Kharagpur" },
  { label: "Published", value: "SCML 2024" },
  { label: "Honors", value: "AMII AI for Earth Scholar — 2026" },
];

export type Highlight = {
  eyebrow: string;
  title: string;
  blurb: string;
  date: string;
};

export const highlights: Highlight[] = [
  {
    eyebrow: "Publication",
    title: "PINNs for Aeroelastic Flutter",
    blurb:
      "Accepted at the International Conference on Scientific Computing and Machine Learning. Extending physics-informed networks from 1D axial bar vibration to biaxial bending.",
    date: "ICSML · 2025",
  },
  {
    eyebrow: "Scholarship",
    title: "AMII AI for Earth Scholar",
    blurb:
      "Selected for AMII's highly competitive AI for Earth program — applied machine learning for climate, conservation, and sustainability.",
    date: "Feb · 2026",
  },
  {
    eyebrow: "Research",
    title: "4D Gaussian Splatting",
    blurb:
      "Literature review and formalization under Prof. David Lindell, UofT. Reconstructing dynamic 3D scenes from 2D imagery with Splatfacto.",
    date: "Ongoing",
  },
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
    company: "NAAVI Aerospace",
    role: "AI Perception & Navigation Engineer",
    period: "Oct 2025 — Jan 2026",
    location: "Toronto, Canada",
    bullets: [
      "Developed visual odometry and real-time localization for autonomous drone navigation in GPS-denied environments.",
      "Architected an FGO-based fully autonomous UAV system; wrote the ROS 2 backend.",
      "Integrated SuperVINS into the flight-control + perception pipeline.",
      "Prototyped a reinforcement-learning-based controller and satellite image-matching for spatial tracking.",
    ],
  },
  {
    company: "Entuitive Workforce Inc. (MITACS BSI ON-1195)",
    role: "Machine Learning Developer",
    period: "Apr 2026 — Present",
    location: "Virtual",
    bullets: [
      "Built an end-to-end OCR ingestion pipeline for Certificates of Insurance using AWS Textract.",
      "Designed an adapter layer mapping extracted fields onto downstream business records.",
      "Architecting an Agent2Agent (A2A) protocol to expose the pipeline to Claude and other LLM clients via MCP + REST.",
    ],
  },
  {
    company: "Cummins Lab, University of Toronto",
    role: "Computational Ligands Research Assistant",
    period: "Jun 2026 — Aug 2026",
    location: "Toronto, Canada (Virtual)",
    bullets: [
      "Applied machine-learning techniques to extract structural and functional patterns from inhibitor and receptor datasets for drug discovery.",
      "Built computational pipelines to support ligand-target analysis and downstream lead identification.",
      "Work-Study position alongside coursework — under 8 hours/week.",
    ],
  },
];

export type Education = {
  school: string;
  degree: string;
  period: string;
  detail?: string;
};

export const education: Education[] = [
  {
    school: "University of Toronto",
    degree: "M.Eng., Mechanical & Industrial Engineering (UTIAS)",
    period: "Sep 2025 — Nov 2027",
  },
  {
    school: "IIT Kharagpur",
    degree: "B.Tech (Honours), Aerospace Engineering",
    period: "Dec 2021 — May 2025",
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  body: string[];
  context?: string;
};

export const projects: Project[] = [
  {
    slug: "tavi-risk-insight",
    name: "TAVI Risk Insight",
    tagline:
      "Calibration-drift-aware TAVI mortality prediction with IBM Granite-4.",
    description:
      "Decision support for heart teams. v3 stacking ensemble (AUROC 0.781) with a real-cohort Swin-UNETR oracle, Heart-Team-grade narratives streamed from IBM Granite-4 on watsonx.ai with Granite Guardian as the safety filter.",
    tech: [
      "FastAPI",
      "React",
      "LightGBM",
      "CatBoost",
      "IBM Granite-4",
      "watsonx.ai",
      "Swin-UNETR",
    ],
    github: "https://github.com/Sjainish04/tavi-risk-insight",
    context: "IBM Z × UNSA Sheridan Hackathon",
    body: [
      "Every TAVI risk score in clinical use today (STS-PROM, EuroSCORE II, ACC/STS TVT) miscalibrates 2-5× in modern low-risk-leaning cohorts. This tool surfaces that drift, cross-checks against a real-data-trained Swin-UNETR oracle (Brüggemann 2024, n=1,449), and produces a Heart-Team-grade narrative — streamed live from IBM Granite-4 H-Small on watsonx.ai, with IBM Granite Guardian 3-8B as the medical-safety classifier before tokens reach the clinician.",
      "Five-model risk panel: raw STS-PROM, era-recalibrated STS-PROM, ACC/STS TVT Registry, a v3 stacking ensemble (LightGBM + CatBoost + LR with the Brüggemann oracle as feature 27, AUROC 0.781), and the Brüggemann oracle itself running as a Python 3.8 microservice. Plus VARC-3 procedural complications and per-device (SAPIEN 3 Ultra / Evolut FX+ / Navitor) assessments.",
      "Live model card with bootstrap 95% CIs, reliability diagrams, decision-curve analysis (MSKCC dcurves), and a fairness audit via Microsoft fairlearn. Top finding: adding the Brüggemann oracle closed the female-male AUROC gap from 7.4pp to 0.4pp.",
    ],
  },
  {
    slug: "pinns-aeroelastic-flutter",
    name: "PINNs for Aeroelastic Flutter",
    tagline: "Physics-informed networks for vibration & flutter — ICSML 2025.",
    description:
      "Physics-informed neural networks for 1D axial bar vibration, extended to biaxial bending and aeroelastic flutter equations. Published at ICSML 2025.",
    tech: ["Python", "PyTorch", "DeepXDE", "PINNs", "Numerical Methods"],
    github: "https://github.com/Sjainish04/PINNs_Vibration_1",
    context: "B.Tech research · Prof. Mira Mitra, IIT Kharagpur",
    body: [
      "Solved 2D heat, harmonic oscillator, Euler beam vibration, and aeroelastic flutter equations using DeepXDE with physics-informed losses. Reached over 99% agreement with analytical solutions on the canonical problems.",
      "Built a Physics-Informed DeepONet with zero-coordinate-shift (ZCS) to solve the aeroelastic flutter equations — an operator-learning extension that generalizes across boundary conditions and loading regimes.",
      "The work was accepted at the International Conference on Scientific Computing and Machine Learning (ICSML 2025), with the paper titled 'Solving 1D Axial Bar vibration problem with Physics Informed Neural Networks and extending it further to Biaxial Bending.'",
    ],
  },
  {
    slug: "gaussian-splatting",
    name: "4D Gaussian Splatting",
    tagline: "Dynamic 3D scene reconstruction from 2D imagery.",
    description:
      "Ongoing research on dynamic-scene reconstruction with 4D Gaussian Splatting (CVPR 2024). FPGA-synchronized 3-camera rig + COLMAP/MATLAB SfM calibration.",
    tech: ["4D Gaussian Splatting", "Splatfacto", "COLMAP", "MATLAB", "FPGA"],
    github: "https://github.com/Sjainish04/4DGaussians_for_reference",
    context: "Research · Prof. David Lindell, University of Toronto",
    body: [
      "Working on dynamic 3D scene reconstruction from 2D image sequences using 4D Gaussian Splatting (CVPR 2024). The approach yields superior novel-view synthesis compared to NeRFs on the rigs we tested. The linked repo is the upstream reference; my contributions live in private branches under Prof. Lindell's group.",
      "Synchronized a custom 3-camera rig using FPGA architecture so frames land within tolerance for joint optimization across views.",
      "Performed structure-from-motion calibration via COLMAP and MATLAB so the splats live in a consistent metric world frame across captures.",
    ],
  },
  {
    slug: "decidion-ai",
    name: "Decidion AI",
    tagline:
      "Marketing site for Decidion's decision-intelligence platform.",
    description:
      "Next.js 14 multipage marketing site for Decidion AI. Showcases the Phase 1 platform (TAVI Risk Insight product page, roadmap, founder story) with a custom contact-form route handler.",
    tech: ["Next.js 14", "TypeScript", "Tailwind", "App Router"],
    github: "https://github.com/Sjainish04/decidion-ai",
    body: [
      "Marketing site for Decidion AI, the decision-intelligence startup behind TAVI Risk Insight. Built as a multipage static-mockup showcase of the Phase 1 platform — no auth or real inference, just polished product pages.",
      "Stack: Next.js 14 App Router, TypeScript in strict mode, Tailwind with custom design tokens, Fraunces (display) and Inter (body) via next/font, lucide-react for icons.",
      "Routes include home, about, product (TAVI Risk Insight), roadmap, contact + a `/api/contact` route handler designed to be swapped from console-log to email/CRM in one file.",
    ],
  },
  {
    slug: "carecompass",
    name: "CareCompass — GTA Healthcare Navigator",
    tagline:
      "Multilingual GTA healthcare navigator, built in 36 hours.",
    description:
      "Multilingual healthcare navigation for the Greater Toronto Area. React 18 + Express + Supabase, Cohere for translation, Anthropic Claude for clinical reasoning. Patient/provider dashboards, appointment approval workflow, MapLibre clinic finder.",
    tech: [
      "React 18",
      "Express",
      "Supabase",
      "Cohere",
      "Claude",
      "MapLibre",
      "Twilio",
    ],
    github: "https://github.com/Sjainish04/CareCompass",
    context: "GenAI 2026 Hackathon",
    body: [
      "Full-stack multilingual healthcare platform connecting GTA patients with culturally and linguistically appropriate care. Built at the GenAI 2026 Hackathon and substantially extended after.",
      "Appointment workflow with provider-side approval (pending → confirmed / declined-with-reason), schedule-builder grids, blocked dates, and analytics dashboards. Patient side has care-journey tracking, a MapLibre clinic finder with real slot availability, and an AI navigator chat ('Fatima') for multilingual coordination.",
      "Backend: Express on Supabase (Postgres + Auth + RLS). Cohere `command-a-translate` for 23+ languages, Cohere `command-a` for CDISC/SDTM EHR mapping, Anthropic Claude Sonnet for clinical reasoning. SMS via Twilio, scheduled jobs via node-cron, Winston for logging.",
    ],
  },
  {
    slug: "rag-chatbot",
    name: "RAG Chatbot",
    tagline:
      "Document-grounded Q&A with hybrid retrieval and re-ranking.",
    description:
      "Practical RAG pipeline — vector + lexical retrieval over user-uploaded documents, re-ranking, citation-grounded responses. The reference implementation I keep around for new LLM experiments.",
    tech: ["Python", "Embeddings", "Vector DB", "LangChain"],
    github: "https://github.com/Sjainish04/RAG-Chatbot",
    body: [
      "A reference RAG implementation I keep around as a starting point for new LLM experiments. Hybrid retrieval (vector + lexical), re-ranking, and citation-grounded responses against user-uploaded documents.",
      "Designed so retrieval, generation, and persistence layers are independently swappable — the same skeleton drove the document-QA project I shipped commercially and the experiments behind the aerospace LLM fine-tune.",
      "Active sandbox for new techniques (hypothetical-document expansion, structured outputs, evals). Source is intentionally small and readable.",
    ],
  },
];

export const skills = {
  Languages: ["Python", "TypeScript", "JavaScript", "C++", "MATLAB", "R"],
  "ML / Research": [
    "PyTorch",
    "TensorFlow",
    "LangChain",
    "LoRA",
    "RAG",
    "DeepXDE",
    "XGBoost",
    "SHAP",
  ],
  "Computer Vision": [
    "YOLOv8",
    "3D Gaussian Splatting",
    "COLMAP",
    "SuperVINS",
    "Object Detection",
  ],
  Backend: ["FastAPI", "PostgreSQL", "pgvector", "Neo4j", "Node.js", "Docker"],
  Frontend: ["React", "Next.js", "Vite", "Three.js", "Tailwind", "Redux"],
  Infra: ["GCP", "Vercel", "AWS Textract", "Git", "ROS 2", "Linux"],
};

export type Publication = {
  venue: string;
  title: string;
  status: string;
  link?: string;
};

export const publications: Publication[] = [
  {
    venue: "SCML 2024",
    title:
      "Solving 1D Axial Bar Vibration with Physics-Informed Neural Networks, extended to Biaxial Bending",
    status: "Accepted",
    link: "https://scml.jp/scml2024.html#papers",
  },
];

export const honors = [
  {
    title: "AMII AI for Earth Scholar",
    org: "Alberta Machine Intelligence Institute",
    date: "Feb 2026",
  },
  {
    title: "GitLab AI Hackathon — Duo Agent Platform",
    org: "GitLab",
    date: "Mar 2026",
  },
];

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];
