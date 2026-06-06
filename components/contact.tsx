import { Clock, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { MagneticButton } from "./magnetic-button";
import { ContactForm } from "./contact-form";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <article className="relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
      <header className="mb-12">
        <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
          04 · Contact
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl dark:text-zinc-50">
          Let&apos;s talk.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg dark:text-zinc-300">
          I&apos;m open to interesting problems — ML infrastructure, applied
          research, scientific computing, and anything that sits between theory
          and shipping. Drop a note below or reach me directly on any platform.
        </p>
      </header>

      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        {/* Form */}
        <div className="md:col-span-7">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8 dark:border-zinc-800 dark:bg-zinc-900/60">
            <ContactForm />
          </div>
        </div>

        {/* Side: direct contact info */}
        <aside className="space-y-6 md:col-span-5">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
            <p className="mb-5 text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
              Reach me directly
            </p>
            <ul className="space-y-3">
              <DirectLink
                href={`mailto:${profile.email}`}
                icon={Mail}
                label={profile.email}
                hint="Email"
              />
              <DirectLink
                href={profile.socials.linkedin}
                icon={Linkedin}
                label="jainish-solanki"
                hint="LinkedIn"
                external
              />
              <DirectLink
                href={profile.socials.github}
                icon={Github}
                label="Sjainish04"
                hint="GitHub"
                external
              />
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
            <p className="mb-5 text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
              Working out of
            </p>
            <ul className="space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
              <li className="flex items-center gap-3">
                <MapPin
                  size={16}
                  className="text-indigo-600 dark:text-indigo-400"
                />
                {profile.location}
              </li>
              <li className="flex items-center gap-3">
                <Clock
                  size={16}
                  className="text-indigo-600 dark:text-indigo-400"
                />
                Replies within ~24 hours on weekdays
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <p className="mt-20 font-mono text-xs text-zinc-400 dark:text-zinc-500">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js + GSAP.
      </p>
    </article>
  );
}

function DirectLink({
  href,
  icon: Icon,
  label,
  hint,
  external,
}: {
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  hint: string;
  external?: boolean;
}) {
  return (
    <li>
      <MagneticButton
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        strength={0.15}
        className="group flex items-center gap-4 rounded-xl border border-transparent px-3 py-3 transition hover:border-indigo-200 hover:bg-indigo-50/60 dark:hover:border-indigo-500/30 dark:hover:bg-indigo-500/10"
      >
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-700 transition group-hover:border-indigo-300 group-hover:text-indigo-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:group-hover:border-indigo-400/60 dark:group-hover:text-indigo-300">
          <Icon size={16} />
        </span>
        <span className="flex flex-col">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">
            {hint}
          </span>
          <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {label}
          </span>
        </span>
      </MagneticButton>
    </li>
  );
}
