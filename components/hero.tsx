"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { MagneticButton } from "./magnetic-button";
import { HeroBackground } from "./hero-background";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.15 });

      tl.from(eyebrowRef.current, {
        y: 12,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      });

      const letters = nameRef.current?.querySelectorAll("[data-letter]");
      if (letters && letters.length) {
        tl.from(
          letters,
          {
            yPercent: 110,
            opacity: 0,
            duration: 0.85,
            ease: "expo.out",
            stagger: 0.035,
          },
          "-=0.2",
        );
      }

      tl.from(
        roleRef.current,
        { y: 30, opacity: 0, duration: 0.7, ease: "power3.out" },
        "-=0.55",
      );

      tl.from(
        [taglineRef.current, ctaRef.current],
        {
          y: 18,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.4",
      );
    },
    { scope: heroRef },
  );

  const [firstName, ...rest] = profile.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative flex min-h-screen w-full items-center overflow-hidden"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-12">
        <div className="max-w-3xl">
          <span
            ref={eyebrowRef}
            className="mb-6 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.location} · available for collaboration
          </span>

          <h1
            ref={nameRef}
            className="font-sans leading-[0.92] tracking-[-0.04em] text-zinc-900 dark:text-zinc-50"
            aria-label={profile.name}
          >
            <span className="block overflow-hidden pb-[0.05em]">
              <span className="inline-block whitespace-nowrap text-[clamp(3rem,9vw,7.5rem)] font-semibold">
                {firstName.split("").map((char, i) => (
                  <span
                    key={`f${i}`}
                    data-letter
                    className="inline-block"
                    aria-hidden
                  >
                    {char}
                  </span>
                ))}
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.05em]">
              <span className="inline-block whitespace-nowrap font-serif text-[clamp(3.4rem,10vw,8.5rem)] italic text-indigo-700 dark:text-indigo-300">
                {lastName.split("").map((char, i) => (
                  <span
                    key={`l${i}`}
                    data-letter
                    className="inline-block"
                    aria-hidden
                  >
                    {char}
                  </span>
                ))}
                <span
                  data-letter
                  className="inline-block font-sans not-italic text-amber-600 dark:text-amber-400"
                  aria-hidden
                >
                  .
                </span>
              </span>
            </span>
          </h1>

          <div
            ref={roleRef}
            className="mt-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400"
          >
            <span className="h-px w-12 bg-zinc-400 dark:bg-zinc-600" />
            <span>{profile.role}</span>
          </div>

          <p
            ref={taglineRef}
            className="mt-8 max-w-xl text-base leading-relaxed text-zinc-600 md:text-lg dark:text-zinc-300"
          >
            {profile.tagline}
          </p>

          <div
            ref={ctaRef}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="/projects"
              data-cursor-text="See"
              className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-600 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-indigo-400 dark:hover:text-white"
            >
              See my work
              <ArrowDown
                size={16}
                className="-rotate-90 transition-transform group-hover:translate-x-0.5"
              />
            </MagneticButton>
            <MagneticButton
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition-colors hover:border-indigo-500 hover:text-indigo-700 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-100 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
            >
              <Mail size={16} />
              Email me
            </MagneticButton>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-400 dark:text-zinc-600">
        scroll ↓
      </div>
    </section>
  );
}
