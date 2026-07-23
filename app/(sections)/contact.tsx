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
  "w-full bg-transparent border-0 border-b border-border-strong py-3 text-base text-foreground placeholder:text-text-meta focus:border-foreground focus:outline-none transition-colors";

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs uppercase tracking-widest text-text-meta">
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
    <section
      id="contact"
      className="grid grid-cols-1 gap-6 px-4 py-16 sm:px-8 md:grid-cols-12 md:gap-8 md:py-24"
    >
      <div className="md:col-span-3">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-text-meta">
            05 / Contact
          </p>
        </Reveal>
      </div>

      <div className="md:col-span-9">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <h2 className="font-sans text-3xl font-semibold leading-[1.05] tracking-tight text-foreground text-balance md:text-4xl lg:text-5xl">
              Get in touch.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-text-secondary text-pretty">
              For professional opportunities, speaking invitations, or just to
              say hello.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {linkedin && (
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-border-subtle px-4 py-2 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-hover-surface"
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
                  className="inline-flex items-center gap-1.5 border border-border-subtle px-4 py-2 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-hover-surface"
                >
                  GitHub
                  <span aria-hidden>↗</span>
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={handleSubmit} className="border-t border-border-subtle pt-8">
              <div className="space-y-6">
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
                    className="inline-flex items-center justify-center gap-2 bg-foreground px-6 py-2.5 font-mono text-xs uppercase tracking-widest text-background transition-opacity hover:opacity-80"
                  >
                    Send
                    <span aria-hidden>→</span>
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
