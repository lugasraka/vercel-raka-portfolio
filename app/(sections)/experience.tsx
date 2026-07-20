import Image from "next/image";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Reveal } from "@/components/motion/reveal";
import { experience as fallbackExperience } from "@/lib/experience";
import type { Experience as ExperienceType } from "@/lib/types";

type ExperienceProps = {
  items?: ExperienceType[];
};

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 flex max-w-[12rem] flex-col items-center gap-1">
      {items.map((h) => (
        <li
          key={h}
          className="rounded-full bg-foreground/5 px-2.5 py-0.5 text-[10px] font-semibold leading-snug text-foreground/85"
        >
          {h}
        </li>
      ))}
    </ul>
  );
}

function TimelineEntry({ item }: { item: ExperienceType }) {
  return (
    <div className="relative z-10 flex w-48 shrink-0 flex-col items-center md:w-52">
      <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full bg-surface shadow-sm ring-1 ring-border transition-transform duration-300 hover:scale-105">
        {item.logo ? (
          <Image
            src={item.logo}
            alt={`${item.company} logo`}
            width={48}
            height={48}
            className="h-10 w-10 object-contain"
          />
        ) : (
          <span className="font-display text-lg font-medium text-foreground">
            {item.company.charAt(0)}
          </span>
        )}
      </div>

      <h3 className="mt-5 text-center font-display text-base font-medium leading-tight text-foreground">
        {item.company}
      </h3>
      <p className="mt-1 text-center font-accent text-sm italic text-foreground/60 md:text-base">
        {item.period}
      </p>
      <p className="mt-3 max-w-[12rem] text-center text-[10px] font-medium uppercase tracking-wider text-foreground/55">
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
          className="rounded-full bg-foreground/5 px-2.5 py-0.5 text-[10px] font-semibold leading-snug text-foreground/85"
        >
          {h}
        </li>
      ))}
    </ul>
  );
}

function MobileTimelineEntry({ item }: { item: ExperienceType }) {
  return (
    <div className="flex gap-4">
      <div className="relative shrink-0">
        <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-surface shadow-sm ring-1 ring-border">
          {item.logo ? (
            <Image
              src={item.logo}
              alt={`${item.company} logo`}
              width={48}
              height={48}
              className="h-10 w-10 object-contain"
            />
          ) : (
            <span className="font-display text-lg font-medium text-foreground">
              {item.company.charAt(0)}
            </span>
          )}
        </div>
      </div>
      <div className="flex-1 pt-1">
        <h3 className="font-display text-base font-medium leading-tight text-foreground">
          {item.company}
        </h3>
        <p className="mt-1 font-accent text-sm italic text-foreground/60 md:text-base">
          {item.period}
          {item.location ? ` · ${item.location}` : ""}
        </p>
        <p className="mt-2 text-[10px] font-medium uppercase tracking-wider text-foreground/55">
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

export function Experience({ items }: ExperienceProps = {}) {
  const data = items && items.length > 0 ? items : fallbackExperience;
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[110rem] px-6">
        <Reveal>
          <p className="font-accent text-sm uppercase tracking-[0.25em] text-foreground/50 md:text-base">
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

        <div className="mt-20 hidden md:block">
          <Stagger
            className="timeline-track flex items-start justify-between gap-4"
            stagger={0.08}
          >
            {data.map((item) => (
              <StaggerItem key={item.slug}>
                <TimelineEntry item={item} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="mt-16 md:hidden">
          <Stagger className="space-y-8" stagger={0.06}>
            {data.map((item) => (
              <StaggerItem key={`m-${item.slug}`}>
                <MobileTimelineEntry item={item} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
