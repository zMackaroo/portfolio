"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { WorkExperience } from "@/data/work-experience";
import { usePreferStaticMotion } from "@/hooks/usePreferStaticMotion";

type TimelineCardProps = {
  entry: WorkExperience;
  slideFrom: "left" | "right";
  className?: string;
};

function TimelineCardContent({
  entry,
  className,
}: {
  entry: WorkExperience;
  className?: string;
}) {
  return (
    <article
      className={`max-w-full rounded-2xl border border-border bg-bg-card p-6 transition-colors hover:border-purple/50 hover:shadow-[0_0_30px_color-mix(in_srgb,var(--color-purple)_10%,transparent)] lg:max-w-[480px] ${className ?? ""}`}
    >
      <header className="flex items-start gap-4">
        <div className="relative flex size-14 shrink-0 items-center justify-center">
          <Image
            src={entry.icon}
            alt={`${entry.company} icon`}
            width={56}
            height={56}
            className="size-14 object-contain"
          />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-white">{entry.company}</h3>
          <p className="mt-1 text-sm text-text-muted">{entry.role}</p>
        </div>
      </header>

      <p className="mt-4 text-sm leading-relaxed text-text-muted">
        {entry.description}
      </p>

      {entry.bullets && entry.bullets.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {entry.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-2 text-sm leading-relaxed text-text-muted"
            >
              <span aria-hidden="true" className="text-accent-text">
                ›
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {entry.tags && entry.tags.length > 0 ? (
        <footer className="mt-5 flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-purple/20 bg-purple/10 px-2 py-0.5 text-xs text-accent-text"
            >
              {tag}
            </span>
          ))}
        </footer>
      ) : null}
    </article>
  );
}

export function TimelineCard({ entry, slideFrom, className }: TimelineCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const preferStatic = usePreferStaticMotion();
  const slideOffset = slideFrom === "left" ? -30 : 30;

  if (prefersReducedMotion || preferStatic) {
    return <TimelineCardContent entry={entry} className={className} />;
  }

  return (
    <motion.article
      initial={{ x: slideOffset }}
      whileInView={{ x: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`max-w-full rounded-2xl border border-border bg-bg-card p-6 transition-colors hover:border-purple/50 hover:shadow-[0_0_30px_color-mix(in_srgb,var(--color-purple)_10%,transparent)] lg:max-w-[480px] ${className ?? ""}`}
    >
      <header className="flex items-start gap-4">
        <div className="relative flex size-14 shrink-0 items-center justify-center">
          <Image
            src={entry.icon}
            alt={`${entry.company} icon`}
            width={56}
            height={56}
            className="size-14 object-contain"
          />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-white">{entry.company}</h3>
          <p className="mt-1 text-sm text-text-muted">{entry.role}</p>
        </div>
      </header>

      <p className="mt-4 text-sm leading-relaxed text-text-muted">
        {entry.description}
      </p>

      {entry.bullets && entry.bullets.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {entry.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-2 text-sm leading-relaxed text-text-muted"
            >
              <span aria-hidden="true" className="text-accent-text">
                ›
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {entry.tags && entry.tags.length > 0 ? (
        <footer className="mt-5 flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-purple/20 bg-purple/10 px-2 py-0.5 text-xs text-accent-text"
            >
              {tag}
            </span>
          ))}
        </footer>
      ) : null}
    </motion.article>
  );
}
