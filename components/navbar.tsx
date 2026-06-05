"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-black/60 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm font-medium text-white transition hover:text-indigo-300"
        >
          {profile.name.split(" ").map((p) => p[0]).join("")}.
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white transition hover:border-indigo-400/50 hover:bg-indigo-400/10"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
