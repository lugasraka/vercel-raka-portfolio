import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "accent" | "outline";
};

export function Badge({ children, className, tone = "default" }: BadgeProps) {
  const tones = {
    default: "bg-foreground/5 text-foreground/80 border-foreground/10",
    accent: "bg-accent/15 text-accent border-accent/30",
    outline: "bg-transparent text-foreground/70 border-foreground/20",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
