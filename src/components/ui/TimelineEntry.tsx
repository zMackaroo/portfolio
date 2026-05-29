"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TimelineCard } from "@/components/ui/TimelineCard";
import { TimelineDot } from "@/components/ui/TimelineDot";
import {
  formatDateRange,
  type WorkExperience,
} from "@/data/work-experience";
import { usePreferStaticMotion } from "@/hooks/usePreferStaticMotion";
import { cn } from "@/lib/utils";

type TimelineEntryProps = {
  entry: WorkExperience;
  index: number;
  ref?: React.Ref<HTMLLIElement>;
};

function DateBadge({
  entry,
  className,
}: {
  entry: WorkExperience;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const preferStatic = usePreferStaticMotion();

  const badgeClass = cn(
    "inline-flex w-fit rounded-full border border-border bg-bg-card px-3 py-1 text-xs text-text-muted",
    className,
  );

  if (prefersReducedMotion || preferStatic) {
    return <p className={badgeClass}>{formatDateRange(entry.startDate, entry.endDate)}</p>;
  }

  return (
    <motion.p
      initial={{ opacity: 0.6 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={badgeClass}
    >
      {formatDateRange(entry.startDate, entry.endDate)}
    </motion.p>
  );
}

export function TimelineEntry({ entry, index, ref }: TimelineEntryProps) {
  const isLeft = index % 2 === 0;
  const cardSide = isLeft ? "left" : "right";

  return (
    <li ref={ref} data-timeline-index={index} className="relative">
      <div className="lg:hidden">
        <div className="relative pl-10">
          <TimelineDot
            cardSide="right"
            className="absolute left-0 top-5 -translate-x-1/2"
          />
          <DateBadge entry={entry} className="mb-3" />
          <TimelineCard entry={entry} slideFrom="right" />
        </div>
      </div>

      <div
        className={cn(
          "hidden items-center lg:grid lg:grid-cols-[1fr_3rem_1fr] lg:gap-0",
        )}
      >
        <div
          className={cn(
            "flex pr-8",
            isLeft ? "justify-end" : "justify-end",
          )}
        >
          {isLeft ? (
            <TimelineCard entry={entry} slideFrom="left" />
          ) : (
            <DateBadge entry={entry} />
          )}
        </div>

        <div className="flex justify-center">
          <TimelineDot cardSide={cardSide} />
        </div>

        <div
          className={cn(
            "flex pl-8",
            isLeft ? "justify-start" : "justify-start",
          )}
        >
          {isLeft ? (
            <DateBadge entry={entry} />
          ) : (
            <TimelineCard entry={entry} slideFrom="right" />
          )}
        </div>
      </div>
    </li>
  );
}
