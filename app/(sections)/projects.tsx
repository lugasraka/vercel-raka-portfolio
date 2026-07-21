import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/section-header";
import { projects as projectsData } from "@/lib/projects";
import type { Project as ProjectType } from "@/lib/types";

type ProjectsProps = {
  items?: ProjectType[];
};

function ProjectCard({ project }: { project: ProjectType }) {
  const primaryHref = project.liveUrl ?? project.githubUrl;
  const isExternal = !!project.liveUrl;
  return (
    <Card className="flex h-full flex-col">
      <Reveal y={0}>
        <div className="flex items-center justify-between">
          <p className="font-accent text-sm italic text-foreground/50">
            {project.year}
          </p>
          <span className="text-xs uppercase tracking-wider text-foreground/40">
            {project.role}
          </span>
        </div>

        <h3 className="mt-4 font-display text-2xl font-medium leading-tight tracking-tight text-foreground">
          {primaryHref ? (
            <a
              href={primaryHref}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="inline-flex items-baseline transition-colors hover:text-accent"
            >
              {project.title}
              <span
                aria-hidden
                className="ml-2 inline-block transition-transform duration-300 hover:translate-x-1"
              >
                ↗
              </span>
            </a>
          ) : (
            project.title
          )}
        </h3>

        <p className="mt-3 text-base leading-relaxed text-foreground/70 text-pretty">
          {project.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Badge key={t} tone="outline">
              {t}
            </Badge>
          ))}
        </div>

        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-accent transition-opacity hover:opacity-80"
              >
                {project.kind === "research" ? "Read more" : "Live demo"}
                <span aria-hidden>↗</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-foreground/60 transition-colors hover:text-foreground"
              >
                GitHub
                <span aria-hidden>↗</span>
              </a>
            )}
          </div>
        )}
      </Reveal>
    </Card>
  );
}

function ProjectGroup({
  eyebrow,
  title,
  description,
  topLinks,
  items,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  topLinks?: Array<{ label: string; href: string }>;
  items: ProjectType[];
}) {
  return (
    <div className="mt-20 first:mt-16">
      <Reveal>
        <div className="max-w-2xl">
          <p className="font-accent text-sm uppercase tracking-[0.25em] text-accent md:text-base">
            {eyebrow}
          </p>
          <h3 className="mt-2 font-display text-2xl font-medium leading-tight tracking-tight text-foreground text-balance md:text-3xl">
            {title}
          </h3>
          {description && (
            <p className="mt-3 text-base leading-relaxed text-foreground/70 text-pretty">
              {description}
            </p>
          )}
          {topLinks && topLinks.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {topLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-foreground/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground transition-all hover:border-foreground/60 hover:bg-foreground hover:text-background"
                >
                  {l.label}
                  <span aria-hidden>↗</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </Reveal>

      <Stagger
        className="mt-10 grid gap-6 md:grid-cols-2"
        stagger={0.1}
        amount={0.1}
      >
        {items.map((p) => (
          <StaggerItem key={p.slug}>
            <ProjectCard project={p} />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

export function Projects({ items }: ProjectsProps = {}) {
  const data = items && items.length > 0 ? items : projectsData;
  const aiPm = data.filter((p) => p.kind === "ai-pm");
  const research = data.filter((p) => p.kind === "research");

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Selected work"
          title="AI products and applied research."
          description="A small set of recent projects — open-source AI tools I built on the side, and research work that shaped how I think about climate and data."
        />

        <ProjectGroup
          eyebrow="AI & Product"
          title="Side projects — open-sourced and deployed."
          description="Personal builds at the intersection of AI, sustainability, and product. Each one started with a PRD."
          items={aiPm}
        />

        <ProjectGroup
          eyebrow="Research & Consulting"
          title="Selected case studies."
          description="Applied research, techno-economic analysis, and consulting engagements across climate, energy, and materials."
          topLinks={[
            {
              label: "Google Scholar",
              href: "https://scholar.google.com/citations?user=ExZmYHgAAAAJ&hl=en",
            },
          ]}
          items={research}
        />
      </div>
    </section>
  );
}
