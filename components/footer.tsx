import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center sm:px-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-text-meta">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
        <div className="flex items-center gap-5">
          {site.socials
            .filter((s) => s.label !== "Email")
            .map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="font-mono text-xs uppercase tracking-widest text-text-meta transition-colors hover:text-foreground"
              >
                {s.label}
                <span aria-hidden className="ml-1">↗</span>
              </a>
            ))}
        </div>
      </div>
    </footer>
  );
}
