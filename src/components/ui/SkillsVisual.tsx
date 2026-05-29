"use client";

import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import { SkillsOrbit } from "@/components/ui/SkillsOrbit";
import { TechBadge } from "@/components/ui/TechBadge";
import { skills, type SkillItem } from "@/data/skills";
import { cn } from "@/lib/utils";

function getArchOffset(index: number, total: number): number {
  const center = (total - 1) / 2;
  const maxDist = Math.max(center, total - 1 - center);
  const dist = Math.abs(index - center);
  return -Math.round((1 - dist / maxDist) * 14);
}

type SkillBadgeRowProps = {
  items: SkillItem[];
  badgeRefs: RefObject<Map<string, HTMLDivElement>>;
  className?: string;
};

function SkillBadgeRow({ items, badgeRefs, className }: SkillBadgeRowProps) {
  return (
    <div className={cn("flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-5", className)}>
      {items.map((skill, index) => (
        <div
          key={skill.id}
          ref={(node) => {
            if (node) {
              badgeRefs.current.set(skill.id, node);
            } else {
              badgeRefs.current.delete(skill.id);
            }
          }}
          style={{ transform: `translateY(${getArchOffset(index, items.length)}px)` }}
        >
          <TechBadge skill={skill} />
        </div>
      ))}
    </div>
  );
}

export function SkillsVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const badgeRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [paths, setPaths] = useState<string[]>([]);

  const rowOne = skills.filter((skill) => skill.row === 1);
  const rowTwo = skills.filter((skill) => skill.row === 2);

  const updatePaths = useCallback(() => {
    const container = containerRef.current;
    const hub = hubRef.current;
    if (!container || !hub) return;

    const containerRect = container.getBoundingClientRect();
    const hubRect = hub.getBoundingClientRect();
    const hubX = hubRect.left + hubRect.width / 2 - containerRect.left;
    const hubY = hubRect.top - containerRect.top + 8;

    const nextPaths: string[] = [];

    for (const skill of skills) {
      const badge = badgeRefs.current.get(skill.id);
      if (!badge) continue;

      const badgeRect = badge.getBoundingClientRect();
      const startX = badgeRect.left + badgeRect.width / 2 - containerRect.left;
      const startY = badgeRect.bottom - containerRect.top;
      const controlY = startY + (hubY - startY) * 0.55;

      nextPaths.push(`M ${startX} ${startY} Q ${startX} ${controlY} ${hubX} ${hubY}`);
    }

    setPaths(nextPaths);
  }, []);

  useLayoutEffect(() => {
    updatePaths();

    const resizeObserver = new ResizeObserver(updatePaths);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener("resize", updatePaths);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updatePaths);
    };
  }, [updatePaths]);

  return (
    <div ref={containerRef} className="relative mx-auto mt-14 w-full max-w-[920px]">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        {paths.map((path, index) => (
          <path
            key={index}
            d={path}
            fill="none"
            stroke="var(--color-border)"
            strokeWidth="1.5"
            opacity="0.55"
          />
        ))}
      </svg>

      <div className="relative z-10 pb-6">
        <SkillBadgeRow items={rowOne} badgeRefs={badgeRefs} />
        <SkillBadgeRow items={rowTwo} badgeRefs={badgeRefs} className="mt-5" />
      </div>

      <SkillsOrbit hubRef={hubRef} />
    </div>
  );
}
