import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "accent" | "outline" | "mono";
};

export function Badge({ children, className, tone = "default" }: BadgeProps) {
  const tones = {
    default: "bg-foreground/5 text-foreground border-foreground/10",
    accent: "bg-accent/15 text-accent border-accent/30",
    outline: "bg-transparent text-foreground/70 border-foreground/20",
    mono: "bg-chip-bg text-chip-text border-chip-border",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border px-2.5 py-1 text-xs tracking-wide",
        tone === "mono" ? "font-mono" : "rounded-full font-medium",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
