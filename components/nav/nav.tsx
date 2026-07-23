"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-[77.5rem] items-center justify-between px-6">
        <Link
          href="#top"
          className="font-display text-base font-semibold uppercase tracking-[0.18em] text-foreground"
        >
          Raka Adrianto
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((o) => !o)}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 transition-colors duration-300 hover:border-foreground/40",
              open && "border-foreground/30 bg-foreground/5"
            )}
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "h-px w-4 bg-foreground transition-transform duration-300 ease-out motion-reduce:transition-none",
                  open && "translate-y-[3px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "h-px w-4 bg-foreground transition-transform duration-300 ease-out motion-reduce:transition-none",
                  open && "-translate-y-[3px] -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        aria-hidden={!open}
        className={cn(
          "grid bg-background/95 backdrop-blur-md transition-[grid-template-rows,opacity,border-color] duration-300 ease-out md:hidden motion-reduce:transition-none",
          open
            ? "grid-rows-[1fr] border-t border-border/60 opacity-100"
            : "pointer-events-none grid-rows-[0fr] border-t border-transparent opacity-0"
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <nav className="mx-auto flex max-w-[77.5rem] flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? undefined : -1}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium uppercase tracking-[0.2em] text-foreground/80 transition-[color,background-color,opacity,transform] duration-300 ease-out hover:bg-foreground/5 hover:text-foreground motion-reduce:transition-none",
                  open ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
