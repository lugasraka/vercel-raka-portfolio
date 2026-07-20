"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type BlobProps = {
  className?: string;
  color?: "accent" | "deep" | "mixed";
  size?: "sm" | "md" | "lg";
  speed?: "slow" | "normal";
};

const sizeMap = {
  sm: "h-64 w-64",
  md: "h-96 w-96",
  lg: "h-[28rem] w-[28rem]",
};

export function Blob({
  className,
  color = "accent",
  size = "md",
  speed = "slow",
}: BlobProps) {
  const reduce = useReducedMotion();

  const colorMap = {
    accent: "bg-accent/30",
    deep: "bg-deep/20",
    mixed: "bg-gradient-to-br from-accent/30 to-deep/20",
  };

  const duration = speed === "slow" ? 18 : 12;

  return (
    <motion.div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        sizeMap[size],
        colorMap[color],
        className
      )}
      animate={
        reduce
          ? undefined
          : {
              x: [0, 40, -30, 0],
              y: [0, -30, 30, 0],
              scale: [1, 1.08, 0.96, 1],
            }
      }
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
