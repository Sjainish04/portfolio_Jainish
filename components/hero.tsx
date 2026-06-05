"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { profile } from "@/lib/data";

const Scene = dynamic(
  () => import("./three/scene").then((m) => m.Scene),
  { ssr: false }
);

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Scene />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-transparent to-black" />

      <div className="mx-auto flex max-w-5xl flex-col items-start px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-mono text-sm uppercase tracking-widest text-indigo-300"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl font-semibold tracking-tight text-white md:text-7xl"
        >
          {profile.name}.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-3 text-3xl font-semibold tracking-tight text-zinc-400 md:text-5xl"
        >
          {profile.role}.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-xl text-base text-zinc-400 md:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
          >
            See my work
            <ArrowDown size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
          >
            <Mail size={16} />
            Email me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs font-mono uppercase tracking-widest text-zinc-500"
      >
        scroll
      </motion.div>
    </section>
  );
}
