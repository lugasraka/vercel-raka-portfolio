"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "#about", label: "About", num: "01" },
  { href: "#experience", label: "Experience", num: "02" },
  { href: "#projects", label: "Work", num: "03" },
  { href: "#education", label: "Education", num: "04" },
  { href: "#contact", label: "Contact", num: "05" },
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
        "sticky top-0 z-50 w-full border-b border-border-subtle backdrop-blur-md transition-colors",
        scrolled ? "bg-background/80" : "bg-background/60"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-8">
        <Link
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          raka<span className="text-text-meta">.adrianto</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group inline-flex items-baseline gap-1.5 font-mono text-xs uppercase tracking-widest text-text-meta transition-colors hover:text-foreground"
            >
              <span className="text-text-meta">{l.num}</span>
              <span>/ {l.label}</span>
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-none border border-border-subtle"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "h-px w-4 bg-foreground transition-transform",
                  open && "translate-y-[3px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "h-px w-4 bg-foreground transition-transform",
                  open && "-translate-y-[3px] -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border-subtle bg-background/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-2 px-3 py-2.5 font-mono text-xs uppercase tracking-widest text-text-secondary transition-colors hover:bg-hover-surface hover:text-foreground"
              >
                <span className="text-text-meta">{l.num}</span>
                <span>/ {l.label}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
