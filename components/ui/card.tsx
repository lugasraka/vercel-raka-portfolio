import { cn } from "@/lib/utils";
import Link from "next/link";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
};

export function Card({ children, className, href, external }: CardProps) {
  const base = cn(
    "group relative block rounded-2xl border border-border bg-surface/60 p-6 transition-all duration-500 hover:border-foreground/30 hover:shadow-[0_20px_60px_-20px_rgba(15,25,36,0.15)]",
    className
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }
  return <div className={base}>{children}</div>;
}
