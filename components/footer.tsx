import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight">
            Raka<span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
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
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
        </div>
      </div>
    </footer>
  );
}
