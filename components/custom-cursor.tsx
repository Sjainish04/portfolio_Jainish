"use client";

import { useEffect, useRef } from "react";

const HOVER_SELECTOR =
  "a, button, [role='button'], input, textarea, [data-cursor='hover']";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    // Hide entirely on coarse (touch) pointers
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) {
      dot.style.display = "none";
      ring.style.display = "none";
      document.body.classList.remove("cursor-active");
      return;
    }

    document.body.classList.add("cursor-active");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let rafId = 0;
    let hovering = false;
    let labelText = "";

    // Initial paint at center so it isn't stuck at 0,0
    dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
    ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const el = target.closest<HTMLElement>(HOVER_SELECTOR);
      const isHover = !!el;
      const nextLabel = el?.dataset.cursorText ?? "";

      if (isHover !== hovering) {
        hovering = isHover;
        ring.classList.toggle("cursor-hovering", isHover);
      }
      if (nextLabel !== labelText) {
        labelText = nextLabel;
        label.textContent = nextLabel;
        ring.classList.toggle("cursor-has-label", !!nextLabel);
      }
    };

    const tick = () => {
      rx += (mx - rx) * 0.2;
      ry += (my - ry) * 0.2;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.body.classList.remove("cursor-active");
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="custom-cursor-dot pointer-events-none fixed left-0 top-0 z-[200] h-[8px] w-[8px] rounded-full bg-indigo-600 dark:bg-indigo-300"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="custom-cursor-ring pointer-events-none fixed left-0 top-0 z-[200] flex h-10 w-10 items-center justify-center rounded-full border-2 border-zinc-900/60 bg-transparent text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-900 transition-[width,height,background-color,border-color,color] duration-200 ease-out dark:border-white/70 dark:text-white"
        style={{ willChange: "transform" }}
      >
        <span
          ref={labelRef}
          className="cursor-label opacity-0 transition-opacity duration-150"
        />
      </div>
    </>
  );
}
