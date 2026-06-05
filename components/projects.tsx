"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Section } from "./section";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section id="projects" eyebrow="03 · Projects" title="Things I&apos;ve built">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-indigo-400/30 hover:bg-white/[0.04]"
          >
            <div className="mb-3 flex items-start justify-between gap-2">
              <h3 className="text-lg font-semibold text-white">{p.name}</h3>
              <div className="flex gap-1.5 opacity-70 transition group-hover:opacity-100">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.name} on GitHub`}
                    className="text-zinc-400 hover:text-white"
                  >
                    <Github size={16} />
                  </a>
                )}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.name} live`}
                    className="text-zinc-400 hover:text-white"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </div>
            <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-400">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-zinc-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
