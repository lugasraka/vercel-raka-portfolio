import { Reveal } from "@/components/motion/reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <Reveal>
      <div
        className={
          align === "center"
            ? "mx-auto max-w-2xl text-center"
            : "max-w-2xl"
        }
      >
        <p className="font-mono text-xs uppercase tracking-widest text-text-meta">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-sans text-3xl font-semibold leading-tight tracking-tight text-foreground text-balance md:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-text-secondary text-pretty">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
