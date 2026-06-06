"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { HeroCanvas } from "./hero-canvas";

export function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const dotBase = isDark
    ? "rgba(244, 244, 245, 0.08)"
    : "rgba(24, 24, 27, 0.07)";
  const dotHighlight = isDark
    ? "rgba(165, 180, 252, 0.65)"
    : "rgba(79, 70, 229, 0.55)";
  const spotlight = isDark
    ? "rgba(99, 102, 241, 0.22)"
    : "rgba(79, 70, 229, 0.10)";

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(${dotBase} 1px, transparent 1px)`,
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent 90%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(${dotHighlight} 1px, transparent 1px)`,
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(circle 240px at var(--mx, -1000px) var(--my, -1000px), black, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle 240px at var(--mx, -1000px) var(--my, -1000px), black, transparent 70%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle 480px at var(--mx, 50%) var(--my, 30%), ${spotlight}, transparent 65%)`,
        }}
      />

      <HeroCanvas />
    </div>
  );
}
