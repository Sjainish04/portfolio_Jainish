import { Section } from "./section";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" eyebrow="02 · Experience" title="Where I've worked">
      <ol className="relative border-l border-zinc-200 pl-8 dark:border-zinc-800">
        {experience.map((job) => (
          <li key={job.company} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[37px] mt-1.5 h-3 w-3 rounded-full border-2 border-indigo-500 bg-white dark:border-indigo-400 dark:bg-zinc-950" />
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {job.role}{" "}
                  <span className="text-zinc-500 dark:text-zinc-400">
                    · {job.company}
                  </span>
                </h3>
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                  {job.period}
                </span>
              </div>
              <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
                {job.location}
              </p>
              <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
