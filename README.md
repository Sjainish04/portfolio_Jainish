# Portfolio — Jainish Solanki

Personal portfolio site. Built as a foundation to iterate on — the tech stack is locked, the content and visuals will keep evolving.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** for styling
- **React Three Fiber + drei + three** for the 3D scene
- **framer-motion** for animations
- **lucide-react** (pinned to `^0.577.0` — v1 dropped brand icons) for icons
- **next-themes** for theming
- Deployed on **Vercel**

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Edit content

All content (bio, experience, projects, skills, socials) lives in **`lib/data.ts`**. Edit that one file — every section reads from it.

```
lib/data.ts            ← bio, projects, experience, skills, socials
app/
  layout.tsx           ← <head>, metadata
  page.tsx             ← composes the sections
  globals.css          ← tailwind + dark theme + scrollbars
components/
  navbar.tsx
  hero.tsx             ← the headline + 3D background
  about.tsx
  experience.tsx
  projects.tsx
  contact.tsx
  section.tsx          ← reusable section wrapper
  three/
    scene.tsx          ← R3F Canvas (dynamic-imported, client-only)
    floating-shape.tsx ← the distorted icosahedron
```

## Edit the 3D scene

The 3D background lives in `components/three/`. `scene.tsx` is the Canvas wrapper (lights, Float, Stars); `floating-shape.tsx` is the hero object. Swap geometries, materials, or whole scenes by editing those two files.

## Deploy

Push to `main` — Vercel auto-builds. No `vercel.json` needed; Next.js is detected automatically.

## Build

```bash
npm run build
```
