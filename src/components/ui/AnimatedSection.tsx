"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

type AnimatedSectionProps = ComponentPropsWithoutRef<"section">;

export function AnimatedSection({ children, ...props }: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <section {...props}>{children}</section>;
  }

  const motionProps = props as HTMLMotionProps<"section">;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionVariants}
      {...motionProps}
    >
      {children}
    </motion.section>
  );
}
