import { ArrowUpRight } from "lucide-react";
import {
  about,
  aboutLead,
  education,
  highlights,
  publications,
  quickFacts,
  skills,
} from "@/lib/data";

const skillCategories = Object.entries(skills);

export function About() {
  return (
    <article className="relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
      {/* Header */}
      <header className="mb-16 md:mb-20">
        <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
          01 · About
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl dark:text-zinc-50">
          A bit about me
        </h1>
      </header>

      {/* Lead + Quick Facts */}
      <section className="mb-24 grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <p className="font-serif text-2xl leading-snug text-zinc-800 md:text-3xl dark:text-zinc-100">
            {aboutLead}
          </p>
          <div className="mt-8 space-y-5 text-zinc-700 dark:text-zinc-300">
            {about.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
        <aside className="md:col-span-5">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
            <p className="mb-5 text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
              Quick facts
            </p>
            <dl className="space-y-4">
              {quickFacts.map((f) => (
                <div key={f.label} className="flex flex-col">
                  <dt className="text-[11px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    {f.label}
                  </dt>
                  <dd className="mt-0.5 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </section>

      {/* Highlights bento */}
      <section className="mb-24">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Highlights
          </h2>
          <p className="hidden text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 md:block dark:text-zinc-500">
            Recent · Selected
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="group relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-colors duration-300 hover:border-indigo-400 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-indigo-400/60"
            >
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
                {h.eyebrow}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {h.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {h.blurb}
              </p>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500">
                {h.date}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills bento */}
      <section className="mb-24">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Tools I reach for
          </h2>
          <p className="hidden text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 md:block dark:text-zinc-500">
            Daily · Comfortable
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-6">
          {skillCategories.map(([category, items], i) => {
            const span =
              i === 0 || i === 3
                ? "md:col-span-3"
                : i === 1
                ? "md:col-span-3"
                : "md:col-span-2";
            return (
              <div
                key={category}
                className={`${span} rounded-2xl border border-zinc-200 bg-white p-5 transition-colors hover:border-indigo-400 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-indigo-400/60`}
              >
                <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
                  {category}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-mono text-[10px] text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Education + Publication */}
      <section className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Education
          </h2>
          <ol className="space-y-4">
            {education.map((e) => (
              <li
                key={e.school}
                className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60"
              >
                <span className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {e.school}
                </span>
                <span className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                  {e.degree}
                </span>
                <span className="mt-2 font-mono text-xs text-zinc-400 dark:text-zinc-500">
                  {e.period}
                </span>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Publications
          </h2>
          <ul className="space-y-4">
            {publications.map((p) => {
              const card = (
                <>
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
                    {p.venue} · {p.status}
                  </span>
                  <span className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                    {p.title}
                  </span>
                  {p.link && (
                    <span className="mt-3 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
                      View conference page
                      <ArrowUpRight size={12} />
                    </span>
                  )}
                </>
              );
              return (
                <li key={p.title}>
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor-text="Verify"
                      className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 transition-colors hover:border-indigo-400 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-indigo-400/60"
                    >
                      {card}
                    </a>
                  ) : (
                    <div className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60">
                      {card}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </article>
  );
}
