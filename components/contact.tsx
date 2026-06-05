import { Github, Linkedin, Mail } from "lucide-react";
import { Section } from "./section";
import { profile } from "@/lib/data";

export function Contact() {
  const links = [
    { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
    { href: profile.socials.github, label: "GitHub", icon: Github },
    { href: profile.socials.linkedin, label: "LinkedIn", icon: Linkedin },
  ].filter((l) => l.href);

  return (
    <Section id="contact" eyebrow="04 · Contact" title="Let's talk.">
      <p className="max-w-xl text-base leading-relaxed text-zinc-400">
        I&apos;m always open to interesting problems — ML infra, applied
        research, scientific computing, or anything else that sits between
        theory and shipping. The fastest way to reach me is email.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        {links.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white transition hover:border-indigo-400/50 hover:bg-indigo-400/10"
          >
            <Icon size={16} />
            {label}
          </a>
        ))}
      </div>

      <p className="mt-16 font-mono text-xs text-zinc-600">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js, React
        Three Fiber, and a lot of coffee.
      </p>
    </Section>
  );
}
