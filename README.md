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

## Contact form

The `/contact` page has a real working form that emails me via [Resend](https://resend.com).

1. Sign up at <https://resend.com> (free — 3,000 emails/month).
2. Create an API key.
3. Add it to a `.env.local` file (see `.env.example`):
   ```bash
   RESEND_API_KEY=re_xxx
   CONTACT_TO_EMAIL=jainish5658@gmail.com
   CONTACT_FROM=Portfolio <onboarding@resend.dev>
   ```
4. On Vercel: add the same vars under Project → Settings → Environment Variables, then redeploy.

Without the key set, the form returns a friendly error and tells visitors to email directly. To use a custom `from:` domain (e.g. `hello@yourdomain.com`) instead of `onboarding@resend.dev`, verify the domain in Resend first.

## SEO

This site is pre-wired for search visibility on the name "Jainish Solanki" and ML-related queries.

**Built in:**
- Per-page `title`, `description`, `keywords`, canonical URLs (`app/*/page.tsx`)
- Schema.org `Person` + `WebSite` JSON-LD on every page (root `layout.tsx`)
- Schema.org `CreativeWork` JSON-LD on each project page (`/projects/[slug]`)
- Auto-generated **sitemap** at `/sitemap.xml` (`app/sitemap.ts`)
- Auto-generated **robots.txt** at `/robots.txt` (`app/robots.ts`)
- Dynamic **Open Graph image** at `/opengraph-image` (1200×630, brand colors, name + role)
- `metadataBase` driven by `NEXT_PUBLIC_SITE_URL` (set on Vercel)

**Once deployed, do these steps to rank for "Jainish Solanki":**

1. Set `NEXT_PUBLIC_SITE_URL` to your final URL (Vercel Project → Settings → Environment Variables).
2. Submit to **Google Search Console** (<https://search.google.com/search-console>):
   - Add property, verify domain.
   - Submit `https://<your-url>/sitemap.xml`.
   - Request indexing on the home page after first crawl.
3. **Backlinks matter.** Add the portfolio link to:
   - GitHub profile bio (`Sjainish04`)
   - LinkedIn profile
   - SCML 2024 / ICSML author bio if possible
   - University-of-Toronto student profile if you have one
4. Verify the JSON-LD with Google's **Rich Results Test**: <https://search.google.com/test/rich-results>.

## Deploy

Push to `main` — Vercel auto-builds. No `vercel.json` needed; Next.js is detected automatically.

## Build

```bash
npm run build
```
