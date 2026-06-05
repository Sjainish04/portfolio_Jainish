import { Section } from "./section";
import { about, education, skills } from "@/lib/data";

export function About() {
  return (
    <Section id="about" eyebrow="01 · About" title="A bit about me">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="space-y-4 text-zinc-300 md:col-span-3">
          {about.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}

          <div className="mt-8">
            <h3 className="mb-3 text-sm font-mono uppercase tracking-widest text-zinc-500">
              Education
            </h3>
            <ul className="space-y-3">
              {education.map((e) => (
                <li key={e.school} className="flex flex-col text-sm">
                  <span className="text-white">{e.school}</span>
                  <span className="text-zinc-400">{e.degree}</span>
                  <span className="font-mono text-xs text-zinc-500">
                    {e.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="mb-4 text-sm font-mono uppercase tracking-widest text-zinc-500">
            Tools I reach for
          </h3>
          <div className="space-y-5">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p className="mb-2 text-xs text-indigo-300">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
