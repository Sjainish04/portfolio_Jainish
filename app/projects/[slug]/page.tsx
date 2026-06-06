import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { profile, projects } from "@/lib/data";
import { SITE_URL } from "@/lib/seo";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  const description = `${p.tagline} ${p.description}`.slice(0, 300);
  return {
    title: p.name,
    description,
    alternates: { canonical: `/projects/${p.slug}` },
    keywords: [...p.tech, profile.name, "Jainish Solanki", "ML Engineer", "portfolio"],
    openGraph: {
      type: "article",
      url: `/projects/${p.slug}`,
      title: `${p.name} — ${profile.name}`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${p.name} — ${profile.name}`,
      description,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.name,
    headline: p.name,
    abstract: p.tagline,
    description: p.description,
    keywords: p.tech.join(", "),
    inLanguage: "en",
    url: `${SITE_URL}/projects/${p.slug}`,
    author: {
      "@type": "Person",
      name: profile.name,
      url: SITE_URL,
    },
    ...(p.github && {
      codeRepository: p.github,
      sameAs: p.github,
    }),
  };

  return (
    <>
      <article className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 transition hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-300"
        >
          <ArrowLeft size={14} /> Back to projects
        </Link>

        <p className="mt-16 text-xs font-mono uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
          Project
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl dark:text-zinc-50">
          {p.name}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
          {p.tagline}
        </p>

        {p.context && (
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">
            {p.context}
          </p>
        )}

        <div className="mt-8 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-zinc-200 bg-white px-2.5 py-1 font-mono text-[10px] text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-14 space-y-6 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
          {p.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {(p.github || p.link) && (
          <div className="mt-14 flex flex-wrap gap-3">
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm text-zinc-900 transition hover:border-indigo-500 hover:text-indigo-700 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-100 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
              >
                <Github size={16} /> Code
              </a>
            )}
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm text-white transition hover:bg-indigo-600 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-indigo-400 dark:hover:text-white"
              >
                Live <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        )}
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(creativeWorkSchema),
        }}
      />
    </>
  );
}
