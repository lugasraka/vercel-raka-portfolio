import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Blob } from "@/components/decorations/blob";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40"
    >
      <Blob
        className="-top-20 -right-20"
        color="mixed"
        size="lg"
      />
      <Blob
        className="-bottom-32 -left-20"
        color="accent"
        size="md"
        speed="normal"
      />

      <div className="relative mx-auto max-w-[110rem] px-6">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-12 lg:gap-16">
          <div className="md:col-span-7">
            <Reveal>
              <p className="font-accent text-sm uppercase tracking-[0.25em] text-accent md:text-base">
                Hello, I&apos;m
              </p>
            </Reveal>

            <Reveal delay={0.1} as="h1">
              <span className="mt-3 block font-display text-5xl font-medium leading-[1.05] tracking-tight text-foreground text-balance md:text-7xl lg:text-8xl">
                Raka Adrianto.
              </span>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="mt-6 max-w-3xl font-display text-2xl font-light leading-snug text-foreground/80 text-balance md:text-3xl lg:text-4xl">
                <span className="font-accent italic text-foreground/60">
                  A{" "}
                </span>
                technical manager &amp; engineering PhD
                <span className="font-accent italic text-foreground/60">
                  {" "}
                  turning complex data
                </span>{" "}
                into product decisions at Siemens, from{" "}
                {site.location.split(",")[0]}.
              </h2>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/70 text-pretty md:text-lg">
                {site.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="#projects" variant="primary" size="lg">
                  View selected work
                  <span aria-hidden>→</span>
                </Button>
                <Button href="#contact" variant="outline" size="lg">
                  Get in touch
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.6} className="mt-20 hidden md:block">
              <div className="flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-foreground/40">
                <span>Scroll</span>
                <span className="h-px w-12 bg-foreground/30" />
                <span>to explore</span>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-3">
            <Reveal delay={0.2}>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl shadow-xl ring-1 ring-border md:max-w-[24rem]">
                <Image
                  src="/photos/Raka-photo.jpg"
                  alt="Raka Adrianto"
                  fill
                  priority
                  sizes="(min-width: 768px) 25vw, 80vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
