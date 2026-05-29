"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type TimelineDotProps = {
  cardSide: "left" | "right";
  className?: string;
};

export function TimelineDot({ cardSide, className }: TimelineDotProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative z-10 flex size-12 shrink-0 items-center justify-center",
        className,
      )}
    >
      <motion.span
        initial={prefersReducedMotion ? false : { scale: 0 }}
        whileInView={
          prefersReducedMotion
            ? undefined
            : {
                scale: [0, 1, 1.5, 1],
              }
        }
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 0.5,
          delay: 0.15,
          times: [0, 0.45, 0.75, 1],
          ease: "easeOut",
        }}
        className="relative block size-3 rounded-full bg-purple"
      />

      <span
        aria-hidden="true"
        className={cn(
          "absolute top-1/2 h-px -translate-y-1/2 bg-border",
          cardSide === "left"
            ? "right-full w-6 lg:w-8"
            : "left-full w-6 lg:w-8",
        )}
      />
    </div>
  );
}
