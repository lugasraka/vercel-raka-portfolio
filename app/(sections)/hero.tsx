import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="grid grid-cols-1 gap-6 border-b border-border-subtle px-4 py-16 sm:px-8 md:grid-cols-12 md:gap-8 md:py-24"
    >
      <div className="md:col-span-3">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-text-meta">
            00 / Overview
          </p>
        </Reveal>
      </div>

      <div className="md:col-span-9">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-text-meta">
            Hello, I&apos;m
          </p>
        </Reveal>

        <Reveal delay={0.1} as="h1">
          <span className="mt-3 block font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-text-primary text-balance md:text-7xl">
            Raka Adrianto.
          </span>
        </Reveal>

        <Reveal delay={0.2}>
          <h2 className="mt-6 max-w-3xl font-sans text-2xl font-normal leading-snug text-text-secondary text-balance md:text-3xl lg:text-4xl">
            A technical manager &amp; engineering PhD turning complex data
            into product decisions, based in {site.location.split(",")[0]}.
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-text-secondary text-pretty md:text-lg">
            {site.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-foreground px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-background transition-opacity hover:opacity-80"
            >
              View selected work
              <span aria-hidden>→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border-subtle px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-hover-surface"
            >
              Get in touch
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.6} className="mt-16 hidden md:block">
          <div className="flex justify-end">
            <div className="relative aspect-square w-40 overflow-hidden md:w-56 lg:w-64">
              <Image
                src="/photos/Raka-photo.jpg"
                alt="Raka Adrianto"
                fill
                priority
                sizes="(min-width: 768px) 16rem, 10rem"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
