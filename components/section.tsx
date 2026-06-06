import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
};

export function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section
      id={id}
      className="relative mx-auto w-full max-w-5xl px-6 py-24 md:py-32"
    >
      {(eyebrow || title) && (
        <div className="mb-12">
          {eyebrow && (
            <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
              {eyebrow}
            </p>
          )}
          {title && (
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl dark:text-zinc-50">
              {title}
            </h1>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
