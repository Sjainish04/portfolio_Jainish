"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = profile.name
    .split(" ")
    .map((p) => p[0])
    .join("");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-200/80 bg-white/80 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-950/70"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-sm font-medium text-zinc-900 transition hover:text-indigo-600 dark:text-zinc-100 dark:hover:text-indigo-300"
          data-cursor-text="Home"
        >
          {initials}.
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === pathname ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative text-sm transition ${
                    active
                      ? "font-medium text-zinc-900 dark:text-zinc-50"
                      : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-1.5 left-0 right-0 mx-auto h-0.5 w-4 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-full border border-zinc-300 bg-white px-4 py-1.5 text-xs font-medium text-zinc-900 transition hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-700 md:inline-block dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-indigo-400 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300"
          >
            Get in touch
          </Link>
        </div>
      </nav>
    </header>
  );
}
