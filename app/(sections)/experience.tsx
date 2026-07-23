import Image from "next/image";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Reveal } from "@/components/motion/reveal";
import { experience as fallbackExperience } from "@/lib/experience";
import type { Experience as ExperienceType } from "@/lib/types";

type ExperienceProps = {
  items?: ExperienceType[];
};

type Phase = {
  label: string;
  range: string;
  items: ExperienceType[];
};

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 flex max-w-[12rem] flex-col items-center gap-1">
      {items.map((h) => (
        <li
          key={h}
          className="journey-highlight rounded-full bg-foreground/5 px-2.5 py-0.5 text-xs font-semibold leading-snug text-foreground/85 transition-colors duration-300"
        >
          {h}
        </li>
      ))}
    </ul>
  );
}

function TimelineEntry({ item }: { item: ExperienceType }) {
  const isWordmark = item.logoDisplay === "wordmark";
  return (
    <div className="journey-entry relative z-10 flex w-48 shrink-0 flex-col items-center md:w-52">
      <div
        className={`journey-logo relative flex h-[72px] items-center justify-center bg-white shadow-sm ring-1 ring-black/10 transition-all duration-500 dark:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.8)] ${
          isWordmark ? "w-[120px] rounded-xl px-3" : "w-[72px] rounded-full p-3"
        }`}
      >
        {item.logo ? (
          <div className={isWordmark ? "relative h-10 w-full" : "relative h-12 w-12"}>
            <Image
              src={item.logo}
              alt={`${item.company} logo`}
              fill
              sizes={isWordmark ? "96px" : "48px"}
              className="object-contain"
            />
          </div>
        ) : (
          <span className="font-display text-lg font-medium text-foreground">
            {item.company.charAt(0)}
          </span>
        )}
      </div>

      <h3 className="journey-title mt-5 text-center font-display text-base font-medium leading-tight text-foreground transition-colors duration-300">
        {item.company}
      </h3>
      <p className="mt-1 text-center font-accent text-sm italic text-foreground/70 md:text-base">
        {item.period}
      </p>
      <p className="mt-3 max-w-[12rem] text-center text-xs font-medium uppercase tracking-wider text-foreground/55">
        {item.role}
      </p>
      <p className="mt-2 max-w-[12rem] text-center text-xs leading-relaxed text-foreground/75 text-pretty">
        {item.description}
      </p>
      {item.highlights && item.highlights.length > 0 && (
        <Highlights items={item.highlights} />
      )}
    </div>
  );
}

function MobileHighlights({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 flex flex-wrap gap-1.5">
      {items.map((h) => (
        <li
          key={h}
          className="journey-highlight rounded-full bg-foreground/5 px-2.5 py-0.5 text-xs font-semibold leading-snug text-foreground/85 transition-colors duration-300"
        >
          {h}
        </li>
      ))}
    </ul>
  );
}

function MobileTimelineEntry({ item }: { item: ExperienceType }) {
  const isWordmark = item.logoDisplay === "wordmark";
  return (
    <div className="journey-entry flex gap-4">
      <div className="relative shrink-0">
        <div
          className={`journey-logo flex h-[72px] items-center justify-center bg-white shadow-sm ring-1 ring-black/10 transition-all duration-500 dark:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.8)] ${
            isWordmark ? "w-24 rounded-xl px-2.5" : "w-[72px] rounded-full p-3"
          }`}
        >
          {item.logo ? (
            <div className={isWordmark ? "relative h-9 w-full" : "relative h-12 w-12"}>
              <Image
                src={item.logo}
                alt={`${item.company} logo`}
                fill
                sizes={isWordmark ? "76px" : "48px"}
                className="object-contain"
              />
            </div>
          ) : (
            <span className="font-display text-lg font-medium text-foreground">
              {item.company.charAt(0)}
            </span>
          )}
        </div>
      </div>
      <div className="flex-1 pt-1">
        <h3 className="journey-title font-display text-base font-medium leading-tight text-foreground transition-colors duration-300">
          {item.company}
        </h3>
        <p className="mt-1 font-accent text-sm italic text-foreground/70 md:text-base">
          {item.period}
          {item.location ? ` · ${item.location}` : ""}
        </p>
        <p className="mt-2 text-xs font-medium uppercase tracking-wider text-foreground/55">
          {item.role}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-foreground/80 text-pretty">
          {item.description}
        </p>
        {item.highlights && item.highlights.length > 0 && (
          <MobileHighlights items={item.highlights} />
        )}
      </div>
    </div>
  );
}

function PhaseRow({ phase }: { phase: Phase }) {
  return (
    <div className="mt-12 first:mt-0">
      <div className="mb-6 flex items-center gap-4">
        <p className="font-accent text-xs uppercase tracking-[0.25em] text-foreground/70 md:text-sm">
          {phase.label}
        </p>
        <span className="h-px flex-1 bg-foreground/15" />
        <p className="font-accent text-xs uppercase tracking-[0.2em] text-foreground/70 md:text-sm">
          {phase.range}
        </p>
      </div>

      <Stagger
        className="timeline-track flex items-start justify-between gap-4"
        stagger={0.06}
      >
        {phase.items.map((item) => (
          <StaggerItem key={item.slug}>
            <TimelineEntry item={item} />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

function buildPhases(data: ExperienceType[]): Phase[] {
  const slugs = new Set(data.map((d) => d.slug));
  const byPhase: Phase[] = [
    {
      label: "Industry & Consulting",
      range: "2014 — 2017",
      items: data.filter((d) =>
        ["world-bank", "dow-sales", "icon-consultant"].some((s) => slugs.has(s) && d.slug === s)
      ),
    },
    {
      label: "Research & Engineering",
      range: "2017 — 2023",
      items: data.filter((d) =>
        ["kth-researcher", "edf-intern", "wienerberger-lca", "eth-empa-lead-researcher"].some(
          (s) => slugs.has(s) && d.slug === s
        )
      ),
    },
    {
      label: "Product & Program",
      range: "2023 — Now",
      items: data.filter((d) => d.slug === "siemens"),
    },
  ];
  return byPhase.filter((p) => p.items.length > 0);
}

export function Experience({ items }: ExperienceProps = {}) {
  const data = items && items.length > 0 ? items : fallbackExperience;
  const phases = buildPhases(data);
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[77.5rem] px-6">
        <Reveal>
          <p className="font-accent text-sm font-semibold uppercase tracking-[0.25em] text-foreground/50 md:text-base">
            Journey
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium leading-tight tracking-tight text-foreground text-balance md:text-5xl lg:text-6xl">
            The story{" "}
            <span className="font-accent italic text-accent">so far</span>.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/70 text-pretty md:text-lg">
            A short timeline of the teams, places, and problems I&apos;ve worked
            on.
          </p>
        </Reveal>

        <div className="mt-16 hidden md:block">
          {phases.map((phase) => (
            <PhaseRow key={phase.label} phase={phase} />
          ))}
        </div>

        <div className="mt-12 md:hidden">
          {phases.map((phase) => (
            <div key={phase.label} className="mt-12 first:mt-0">
              <div className="mb-6 flex items-center gap-4">
                <p className="font-accent text-xs uppercase tracking-[0.25em] text-foreground/70">
                  {phase.label}
                </p>
                <span className="h-px flex-1 bg-foreground/15" />
                <p className="font-accent text-xs uppercase tracking-[0.2em] text-foreground/70">
                  {phase.range}
                </p>
              </div>
              <Stagger className="space-y-8" stagger={0.06}>
                {phase.items.map((item) => (
                  <StaggerItem key={`m-${item.slug}`}>
                    <MobileTimelineEntry item={item} />
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
