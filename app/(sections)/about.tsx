import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Badge } from "@/components/ui/badge";
import { site } from "@/lib/site";

const stats = [
  { value: "+50%", label: "Eco-Design Adoption" },
  { value: "+5M EUR", label: "SaaS Revenue / yr" },
  { value: "10+ yrs", label: "Cross-functional Exp." },
  { value: "PhD", label: "ETH Zürich" },
  { value: "MBA", label: "Imperial College London" },
];

const skillGroups = [
  { key: "01 // Data & AI", group: "Data & AI" },
  { key: "02 // Sustainability & Energy", group: "Sustainability & Energy" },
  { key: "03 // Product & Program", group: "Product & Program" },
  { key: "04 // Tools & Platforms", group: "Tools & Platforms" },
  { key: "05 // Languages", group: "Languages" },
];

export function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 gap-6 border-b border-border-subtle px-4 py-16 sm:px-8 md:grid-cols-12 md:gap-8 md:py-24"
    >
      <div className="md:col-span-3">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-text-meta">
            01 / About
          </p>
        </Reveal>
      </div>

      <div className="md:col-span-9">
        <Reveal>
          <h2 className="max-w-2xl font-sans text-3xl font-semibold leading-tight tracking-tight text-foreground text-balance md:text-4xl lg:text-5xl">
            A short version of the long story.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <dl className="grid grid-cols-2 gap-x-4 gap-y-6 border-y border-border-subtle py-6 md:grid-cols-5">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-mono text-2xl font-medium text-foreground md:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 font-mono text-xs uppercase tracking-widest text-text-meta">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal className="mt-12" delay={0.15}>
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-text-secondary text-pretty md:text-lg">
            {site.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16" delay={0.2}>
          <h3 className="font-mono text-xs uppercase tracking-widest text-text-meta">
            What I work with
          </h3>
          <Stagger
            className="mt-6 grid gap-8 sm:grid-cols-2"
            stagger={0.05}
            delay={0.25}
          >
            {skillGroups.map(({ key, group }) => {
              const items = site.skills[group as keyof typeof site.skills];
              if (!items) return null;
              return (
                <StaggerItem key={group}>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-text-meta">
                      {key}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {items.map((s) => (
                        <Badge key={s} tone="mono">
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Reveal>
      </div>
    </section>
  );
}
