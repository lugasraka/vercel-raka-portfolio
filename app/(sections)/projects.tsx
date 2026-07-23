import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Badge } from "@/components/ui/badge";
import { projects as projectsData } from "@/lib/projects";
import type { Project as ProjectType } from "@/lib/types";

type ProjectsProps = {
  items?: ProjectType[];
};

function ProjectRow({ project }: { project: ProjectType }) {
  return (
    <article className="grid grid-cols-1 gap-3 border-b border-border-subtle py-6 transition-colors hover:bg-hover-surface md:grid-cols-12 md:gap-6 md:py-8">
      <div className="md:col-span-3">
        <p className="font-mono text-xs uppercase tracking-widest text-text-meta">
          {project.year}
        </p>
        <p className="mt-1 font-mono text-xs text-text-meta">
          {project.role}
        </p>
      </div>

      <div className="md:col-span-9">
        <h3 className="font-sans text-xl font-medium leading-tight text-foreground md:text-2xl">
          {project.title}
        </h3>

        <p className="mt-2 max-w-3xl text-base leading-relaxed text-text-secondary text-pretty">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <Badge key={t} tone="mono">
              {t}
            </Badge>
          ))}
        </div>

        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-widest">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-foreground transition-opacity hover:opacity-70"
              >
                {project.kind === "research" ? "Read more" : "Live Demo"}
                <span aria-hidden>↗</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-text-secondary transition-colors hover:text-foreground"
              >
                GitHub
                <span aria-hidden>↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function ProjectGroup({
  label,
  title,
  description,
  topLinks,
  items,
}: {
  label: string;
  title: string;
  description?: string;
  topLinks?: Array<{ label: string; href: string }>;
  items: ProjectType[];
}) {
  return (
    <div className="mt-12 first:mt-0">
      <Reveal>
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-text-meta">
            {label}
          </p>
          <h3 className="mt-2 font-sans text-xl font-medium leading-tight tracking-tight text-foreground text-balance md:text-2xl">
            {title}
          </h3>
          {description && (
            <p className="mt-2 text-sm leading-relaxed text-text-secondary text-pretty">
              {description}
            </p>
          )}
          {topLinks && topLinks.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {topLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-border-subtle px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-hover-surface"
                >
                  {l.label}
                  <span aria-hidden>↗</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </Reveal>

      <Stagger className="mt-6 border-t border-border-subtle" stagger={0.06}>
        {items.map((p) => (
          <StaggerItem key={p.slug}>
            <ProjectRow project={p} />
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
    <section
      id="projects"
      className="grid grid-cols-1 gap-6 border-b border-border-subtle px-4 py-16 sm:px-8 md:grid-cols-12 md:gap-8 md:py-24"
    >
      <div className="md:col-span-3">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-text-meta">
            03 / Selected Work
          </p>
          <h2 className="mt-3 font-sans text-2xl font-semibold leading-tight tracking-tight text-foreground text-balance md:text-3xl">
            AI products and applied research.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary text-pretty">
            A small set of recent projects — open-source AI tools I built on
            the side, and research work that shaped how I think about climate
            and data.
          </p>
        </Reveal>
      </div>

      <div className="md:col-span-9">
        <ProjectGroup
          label="AI & Product"
          title="Side projects — open-sourced and deployed."
          description="Personal builds at the intersection of AI, sustainability, and product. Each one started with a PRD."
          items={aiPm}
        />

        <ProjectGroup
          label="Research & Consulting"
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
