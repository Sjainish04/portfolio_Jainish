"use client";

import { useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      subject: data.get("subject"),
      message: data.get("message"),
      honeypot: data.get("website"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(json.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {/* Honeypot — hidden from real users */}
      <div className="hidden" aria-hidden>
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field id="name" label="Your name" required autoComplete="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={120}
            placeholder="Ada Lovelace"
            className={inputClass}
            autoComplete="name"
          />
        </Field>
        <Field id="email" label="Email" required autoComplete="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            placeholder="you@somewhere.com"
            className={inputClass}
            autoComplete="email"
          />
        </Field>
      </div>

      <Field id="subject" label="Subject">
        <input
          id="subject"
          name="subject"
          type="text"
          maxLength={200}
          placeholder="What's this about? (optional)"
          className={inputClass}
        />
      </Field>

      <Field id="message" label="Message" required>
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          rows={6}
          placeholder="Tell me what you're working on…"
          className={`${inputClass} resize-y`}
        />
      </Field>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          data-cursor-text={status === "loading" ? "Sending" : "Send"}
          className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-indigo-400 dark:hover:text-white"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </>
          )}
        </button>

        {status === "success" && (
          <span className="inline-flex items-center gap-2 text-sm text-emerald-700 dark:text-emerald-400">
            <CheckCircle2 size={16} />
            Sent. I&apos;ll get back to you soon.
          </span>
        )}
        {status === "error" && (
          <span className="inline-flex items-center gap-2 text-sm text-rose-700 dark:text-rose-400">
            <AlertCircle size={16} />
            {error}
          </span>
        )}
      </div>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/20";

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  autoComplete?: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={id}
      className="flex flex-col gap-2 text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400"
    >
      <span>
        {label}
        {required ? <span className="ml-1 text-indigo-600 dark:text-indigo-400">*</span> : null}
      </span>
      {children}
    </label>
  );
}
