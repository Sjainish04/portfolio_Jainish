import { Section } from "./section";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" eyebrow="02 · Experience" title="Where I&apos;ve worked">
      <ol className="relative border-l border-white/10 pl-8">
        {experience.map((job) => (
          <li key={job.company} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[37px] mt-1 h-3 w-3 rounded-full border-2 border-indigo-400 bg-black" />
            <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold text-white">
                {job.role}{" "}
                <span className="text-zinc-400">· {job.company}</span>
              </h3>
              <span className="font-mono text-xs text-zinc-500">
                {job.period}
              </span>
            </div>
            <p className="mb-4 text-sm text-zinc-500">{job.location}</p>
            <ul className="space-y-2 text-sm text-zinc-300">
              {job.bullets.map((b, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
