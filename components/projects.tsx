import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Section } from "./section";
import { TiltCard } from "./tilt-card";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section id="projects" eyebrow="03 · Projects" title="Things I've built">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <TiltCard
            key={p.slug}
            strength={5}
            className="group relative flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-colors duration-300 hover:border-indigo-400 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-indigo-400/60"
          >
            <Link
              href={`/projects/${p.slug}`}
              data-cursor-text="Read"
              className="absolute inset-0 z-0 rounded-2xl"
              aria-label={`Read case study for ${p.name}`}
            />

            <div className="relative z-10 mb-3 flex items-start justify-between gap-2">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {p.name}
              </h3>
              <div className="flex items-center gap-2">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.name} on GitHub`}
                    data-cursor-text="Code"
                    className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-600 transition hover:border-indigo-400 hover:text-indigo-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-indigo-400/60 dark:hover:text-indigo-300"
                  >
                    <Github size={14} />
                  </a>
                )}
                <ArrowUpRight
                  size={18}
                  className="text-zinc-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-600 dark:text-zinc-500 dark:group-hover:text-indigo-300"
                />
              </div>
            </div>

            {p.context && (
              <p className="relative z-10 mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500">
                {p.context}
              </p>
            )}

            <p className="relative z-10 mb-5 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {p.tagline}
            </p>

            <div className="relative z-10 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-mono text-[10px] text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
}
