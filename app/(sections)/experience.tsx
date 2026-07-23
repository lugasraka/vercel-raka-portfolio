import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Badge } from "@/components/ui/badge";
import { experience as fallbackExperience } from "@/lib/experience";
import type { Experience as ExperienceType } from "@/lib/types";

type ExperienceProps = {
  items?: ExperienceType[];
};

function ExperienceRow({ item }: { item: ExperienceType }) {
  return (
    <article className="grid grid-cols-1 gap-2 border-b border-border-subtle py-6 transition-colors hover:bg-hover-surface md:grid-cols-12 md:gap-6 md:py-8">
      <div className="md:col-span-3">
        <p className="font-mono text-xs uppercase tracking-widest text-text-meta">
          {item.period}
        </p>
        {item.location && (
          <p className="mt-1 font-mono text-xs text-text-meta">
            {item.location}
          </p>
        )}
      </div>

      <div className="md:col-span-9">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <h3 className="font-sans text-lg font-medium text-foreground md:text-xl">
            {item.role}
          </h3>
          <span className="font-mono text-xs uppercase tracking-widest text-text-meta">
            / {item.company}
          </span>
        </div>

        <p className="mt-2 max-w-3xl text-base leading-relaxed text-text-secondary text-pretty">
          {item.description}
        </p>

        {item.highlights && item.highlights.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {item.highlights.map((h) => (
              <li key={h}>
                <Badge tone="mono">{h}</Badge>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export function Experience({ items }: ExperienceProps = {}) {
  const data = items && items.length > 0 ? items : fallbackExperience;
  return (
    <section
      id="experience"
      className="grid grid-cols-1 gap-6 border-b border-border-subtle px-4 py-16 sm:px-8 md:grid-cols-12 md:gap-8 md:py-24"
    >
      <div className="md:col-span-3">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-text-meta">
            02 / Journey
          </p>
          <h2 className="mt-3 font-sans text-2xl font-semibold leading-tight tracking-tight text-foreground text-balance md:text-3xl">
            The story so far.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary text-pretty">
            A short timeline of the teams, places, and problems I&apos;ve worked
            on.
          </p>
        </Reveal>
      </div>

      <div className="md:col-span-9">
        <Stagger className="border-t border-border-subtle" stagger={0.06}>
          {data.map((item) => (
            <StaggerItem key={item.slug}>
              <ExperienceRow item={item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
