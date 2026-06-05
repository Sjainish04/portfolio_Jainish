import { ReactNode } from "react";

type SectionProps = {
  id: string;
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
            <p className="mb-3 text-sm font-mono uppercase tracking-widest text-indigo-400">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
