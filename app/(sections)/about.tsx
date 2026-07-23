import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/section-header";
import { site } from "@/lib/site";

export function About() {
  const groups = Object.entries(site.skills) as Array<[string, string[]]>;
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[77.5rem] px-6">
        <SectionHeader
          eyebrow="About"
          title="A short version of the long story."
        />
  
        <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-7" delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed text-foreground/80 text-pretty md:max-w-[42rem]">
              {site.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal className="md:col-span-5" delay={0.2}>
            <div className="group/about rounded-2xl border border-border bg-surface/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/30 hover:bg-surface hover:shadow-[0_20px_60px_-20px_rgba(15,25,36,0.15)] motion-reduce:transform-none">
              <h3 className="font-display text-sm font-medium uppercase tracking-[0.2em] text-foreground/60 transition-colors duration-300 group-hover/about:text-accent">
                What I work with
              </h3>
              <Stagger
                className="mt-5 space-y-5"
                stagger={0.05}
                delay={0.3}
              >
                {groups.map(([group, items]) => (
                  <StaggerItem key={group}>
                    <div>
                      <p className="font-accent text-xs italic text-foreground/70">
                        {group}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {items.map((s) => (
                          <Badge
                            key={s}
                            tone="outline"
                            className="transition-colors duration-300 hover:border-accent/50 hover:bg-accent/10 hover:text-foreground"
                          >
                            {s}
                          </Badge>
                        ))}
                      </div>
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
