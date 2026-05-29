"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";
import { usePreferStaticMotion } from "@/hooks/usePreferStaticMotion";

const sectionVariants: Variants = {
  hidden: { y: 24 },
  visible: {
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

type AnimatedSectionProps = ComponentPropsWithoutRef<"section">;

export function AnimatedSection({ children, ...props }: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const preferStatic = usePreferStaticMotion();

  if (prefersReducedMotion || preferStatic) {
    return <section {...props}>{children}</section>;
  }

  const motionProps = props as HTMLMotionProps<"section">;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={sectionVariants}
      {...motionProps}
    >
      {children}
    </motion.section>
  );
}
