import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Badge } from "@/components/ui/badge";
import {
  education,
  certifications,
  awards,
  competitions,
} from "@/lib/education";

function DegreeRow({
  entry,
}: {
  entry: (typeof education)[number];
}) {
  return (
    <div className="grid grid-cols-1 gap-2 border-b border-border-subtle py-5 transition-colors hover:bg-hover-surface md:grid-cols-12 md:gap-6">
      <div className="md:col-span-3">
        <p className="font-mono text-xs uppercase tracking-widest text-text-meta">
          {entry.period}
        </p>
      </div>
      <div className="md:col-span-9">
        <p className="font-sans text-base font-medium leading-snug text-foreground">
          {entry.degree}, {entry.field}
        </p>
        <p className="mt-1 text-sm text-text-secondary">{entry.school}</p>
        {entry.note && (
          <div className="mt-2">
            <Badge tone="mono">{entry.note}</Badge>
          </div>
        )}
      </div>
    </div>
  );
}

function ListCard({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-border-subtle pt-5">
      <h3 className="font-mono text-xs uppercase tracking-widest text-text-meta">
        {label}
      </h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export function Education() {
  return (
    <section
      id="education"
      className="grid grid-cols-1 gap-6 border-b border-border-subtle px-4 py-16 sm:px-8 md:grid-cols-12 md:gap-8 md:py-24"
    >
      <div className="md:col-span-3">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-text-meta">
            04 / Education
          </p>
          <h2 className="mt-3 font-sans text-2xl font-semibold leading-tight tracking-tight text-foreground text-balance md:text-3xl">
            Degrees, certifications, and wins.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary text-pretty">
            The formal side of the story.
          </p>
        </Reveal>
      </div>

      <div className="md:col-span-9">
        <Reveal>
          <h3 className="font-mono text-xs uppercase tracking-widest text-text-meta">
            Degrees
          </h3>
          <Stagger className="mt-4 border-t border-border-subtle" stagger={0.05}>
            {education.map((e) => (
              <StaggerItem key={`${e.school}-${e.degree}`}>
                <DegreeRow entry={e} />
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>

        <Reveal className="mt-12">
          <div className="grid gap-10 md:grid-cols-2">
            <ListCard label="Certifications">
              <ul className="divide-y divide-border-subtle">
                {certifications.map((c) => (
                  <li
                    key={c.name}
                    className="flex items-start justify-between gap-3 py-3"
                  >
                    <div>
                      <p className="text-sm font-medium leading-snug text-foreground">
                        {c.name}
                      </p>
                      <p className="mt-0.5 text-xs text-text-meta">
                        {c.issuer}
                      </p>
                    </div>
                    {c.year && (
                      <span className="shrink-0 font-mono text-xs text-text-meta">
                        {c.year}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </ListCard>

            <ListCard label="Awards & Fellowships">
              <ul className="divide-y divide-border-subtle">
                {awards.map((a) => (
                  <li
                    key={a.title}
                    className="flex items-start justify-between gap-3 py-3"
                  >
                    <div>
                      <p className="text-sm font-medium leading-snug text-foreground">
                        {a.title}
                      </p>
                      <p className="mt-0.5 text-xs text-text-meta">
                        {a.org}
                      </p>
                    </div>
                    {a.year && (
                      <span className="shrink-0 font-mono text-xs text-text-meta">
                        {a.year}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </ListCard>

            <ListCard label="Competitions & Hackathons">
              <ul className="divide-y divide-border-subtle">
                {competitions.map((c) => (
                  <li
                    key={`${c.year}-${c.title}`}
                    className="py-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm font-medium leading-snug text-foreground">
                        {c.title}
                      </p>
                      <span className="shrink-0 font-mono text-xs text-text-meta">
                        {c.year}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-text-meta">
                      {c.event}
                      {c.location ? ` · ${c.location}` : ""}
                    </p>
                    <div className="mt-2">
                      <Badge tone="mono">{c.place}</Badge>
                    </div>
                  </li>
                ))}
              </ul>
            </ListCard>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
