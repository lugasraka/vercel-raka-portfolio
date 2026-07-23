"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const inputClass =
  "w-full bg-transparent border-0 border-b border-foreground/20 py-3 text-base text-foreground placeholder:text-foreground/30 focus:border-foreground/60 focus:outline-none transition-colors";

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-accent text-xs uppercase tracking-[0.25em] text-foreground/55">
      {children}
    </span>
  );
}

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio contact from ${form.name || "someone"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const linkedin = site.socials.find((s) => s.label === "LinkedIn");
  const github = site.socials.find((s) => s.label === "GitHub");

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[77.5rem] px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <Reveal className="md:pt-8">
            <p className="font-accent text-xs uppercase tracking-[0.3em] text-foreground/50">
              Contact
            </p>
            <h2 className="mt-4 font-display text-5xl font-medium leading-[1.05] tracking-tight text-foreground text-balance md:text-6xl lg:text-7xl">
              Get in{" "}
              <span className="font-accent italic text-accent">touch</span>
              <span className="text-accent">.</span>
            </h2>
            <p className="mt-6 max-w-md font-display text-lg leading-relaxed text-foreground/75 text-pretty">
              For professional opportunities, speaking invitations, or just to
              say hello.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {linkedin && (
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-foreground/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground transition-all hover:border-foreground/60 hover:bg-foreground hover:text-background"
                >
                  LinkedIn
                  <span aria-hidden>↗</span>
                </a>
              )}
              {github && (
                <a
                  href={github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-foreground/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground transition-all hover:border-foreground/60 hover:bg-foreground hover:text-background"
                >
                  GitHub
                  <span aria-hidden>↗</span>
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-form-bg p-8 md:p-12"
            >
              <div className="space-y-8">
                <label className="block">
                  <FieldLabel>Name</FieldLabel>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className={`${inputClass} mt-2`}
                    placeholder=""
                    required
                  />
                </label>

                <label className="block">
                  <FieldLabel>Email</FieldLabel>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className={`${inputClass} mt-2`}
                    placeholder=""
                    required
                  />
                </label>

                <label className="block">
                  <FieldLabel>Message</FieldLabel>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className={`${inputClass} mt-2 min-h-[7rem] resize-y`}
                    placeholder=""
                    required
                  />
                </label>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-xs font-semibold uppercase tracking-wider text-deep shadow-sm transition-colors hover:bg-accent-soft"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
