import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import {
  education,
  certifications,
  awards,
  competitions,
} from "@/lib/education";

export function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Education & Credentials"
          title="Degrees, certifications, and wins."
          description="The formal side of the story."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-border bg-surface/60 p-6">
              <h3 className="font-display text-sm font-medium uppercase tracking-[0.2em] text-foreground/60">
                Degrees
              </h3>
              <Stagger className="mt-5 space-y-5" stagger={0.06}>
                {education.map((e) => (
                  <StaggerItem key={`${e.school}-${e.degree}`}>
                    <div>
                      <p className="font-accent text-xs italic text-foreground/50">
                        {e.period}
                      </p>
                      <p className="mt-1 font-display text-base font-medium leading-snug text-foreground">
                        {e.degree}, {e.field}
                      </p>
                      <p className="text-sm text-foreground/70">{e.school}</p>
                      {e.note && (
                        <Badge tone="accent" className="mt-2">
                          {e.note}
                        </Badge>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="h-full rounded-2xl border border-border bg-surface/60 p-6">
              <h3 className="font-display text-sm font-medium uppercase tracking-[0.2em] text-foreground/60">
                Certifications
              </h3>
              <Stagger className="mt-5 space-y-4" stagger={0.04}>
                {certifications.map((c) => (
                  <StaggerItem key={c.name}>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium leading-snug text-foreground">
                          {c.name}
                        </p>
                        <p className="text-xs text-foreground/60">
                          {c.issuer}
                        </p>
                      </div>
                      {c.year && (
                        <span className="shrink-0 font-accent text-xs italic text-foreground/40">
                          {c.year}
                        </span>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="h-full rounded-2xl border border-border bg-surface/60 p-6">
              <h3 className="font-display text-sm font-medium uppercase tracking-[0.2em] text-foreground/60">
                Awards & Fellowships
              </h3>
              <Stagger className="mt-5 space-y-4" stagger={0.06}>
                {awards.map((a) => (
                  <StaggerItem key={a.title}>
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm font-medium leading-snug text-foreground">
                          {a.title}
                        </p>
                        {a.year && (
                          <span className="shrink-0 font-accent text-xs italic text-foreground/40">
                            {a.year}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-foreground/60">{a.org}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="h-full rounded-2xl border border-border bg-surface/60 p-6">
              <h3 className="font-display text-sm font-medium uppercase tracking-[0.2em] text-foreground/60">
                Competitions & Hackathons
              </h3>
              <Stagger className="mt-5 space-y-4" stagger={0.06}>
                {competitions.map((c) => (
                  <StaggerItem key={`${c.year}-${c.title}`}>
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm font-medium leading-snug text-foreground">
                          {c.title}
                        </p>
                        {c.year && (
                          <span className="shrink-0 font-accent text-xs italic text-foreground/40">
                            {c.year}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-foreground/60">
                        {c.event}
                        {c.location ? ` · ${c.location}` : ""}
                      </p>
                      <Badge tone="accent" className="mt-1.5">
                        {c.place}
                      </Badge>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
