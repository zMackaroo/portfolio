"use client";

import { useRef } from "react";
import { TimelineEntry } from "@/components/ui/TimelineEntry";
import { WorkExperienceBackdrop } from "@/components/sections/WorkExperienceBackdrop";
import { workExperience } from "@/data/work-experience";

export function WorkExperienceContent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const entryRefs = useRef<(HTMLLIElement | null)[]>([]);

  return (
    <div ref={sectionRef} className="relative">
      <WorkExperienceBackdrop
        sectionRef={sectionRef}
        entryRefs={entryRefs}
      />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-white lg:text-[40px]">
          Work Experience
        </h2>

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-4 top-0 w-0.5 bg-[linear-gradient(to_bottom,transparent,var(--color-purple),var(--color-purple-light),transparent)] opacity-25 lg:left-1/2 lg:-translate-x-1/2 lg:opacity-20"
          />

          <ol className="relative space-y-12 lg:space-y-16">
            {workExperience.map((entry, index) => (
              <TimelineEntry
                key={entry.id}
                entry={entry}
                index={index}
                ref={(element) => {
                  entryRefs.current[index] = element;
                }}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
