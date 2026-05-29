"use client";

import { useEffect, useRef, useState } from "react";
import { workExperience } from "@/data/work-experience";

type WorkExperienceBackdropProps = {
  sectionRef: React.RefObject<HTMLElement | null>;
  entryRefs: React.MutableRefObject<(HTMLLIElement | null)[]>;
};

export function WorkExperienceBackdrop({
  sectionRef,
  entryRefs,
}: WorkExperienceBackdropProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<import("@/components/three/TimelineScene").TimelineScene | null>(
    null,
  );

  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mobileMq = window.matchMedia("(max-width: 767px)");
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncMobile = () => setIsMobile(mobileMq.matches);
    const syncMotion = () => setReducedMotion(motionMq.matches);

    syncMobile();
    syncMotion();

    mobileMq.addEventListener("change", syncMobile);
    motionMq.addEventListener("change", syncMotion);

    return () => {
      mobileMq.removeEventListener("change", syncMobile);
      motionMq.removeEventListener("change", syncMotion);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;

    if (!canvas || !section) return;

    let cancelled = false;
    let sectionObserver: IntersectionObserver | null = null;
    let entryObserver: IntersectionObserver | null = null;

    const init = async () => {
      const { TimelineScene } = await import("@/components/three/TimelineScene");
      if (cancelled || !canvasRef.current) return;

      const scene = new TimelineScene({
        canvas: canvasRef.current,
        entryCount: workExperience.length,
        isMobile,
        reducedMotion,
      });
      sceneRef.current = scene;

      sectionObserver = new IntersectionObserver(
        ([entry]) => {
          if (!entry) return;
          const rect = entry.boundingClientRect;
          const viewport = window.innerHeight;
          const total = rect.height + viewport;
          const traveled = viewport - rect.top;
          const progress = Math.min(1, Math.max(0, traveled / total));
          scene.setSectionProgress(progress);
        },
        { threshold: Array.from({ length: 21 }, (_, i) => i / 20) },
      );
      sectionObserver.observe(section);

      const visibleRatios = new Map<number, number>();

      entryObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = Number((entry.target as HTMLElement).dataset.timelineIndex);
            if (Number.isNaN(index)) return;
            visibleRatios.set(index, entry.intersectionRatio);
          });

          let bestIndex = 0;
          let bestRatio = -1;

          visibleRatios.forEach((ratio, index) => {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              bestIndex = index;
            }
          });

          if (bestRatio > 0) {
            scene.setActiveIndex(bestIndex);
          }
        },
        { root: null, threshold: [0, 0.15, 0.35, 0.5, 0.65, 0.85, 1] },
      );

      const observeEntries = () => {
        entryRefs.current.forEach((el) => {
          if (el) entryObserver?.observe(el);
        });
      };

      observeEntries();
      requestAnimationFrame(observeEntries);
    };

    init();

    return () => {
      cancelled = true;
      sectionObserver?.disconnect();
      entryObserver?.disconnect();
      sceneRef.current?.destroy();
      sceneRef.current = null;
    };
  }, [sectionRef, entryRefs, isMobile, reducedMotion]);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="h-full w-full opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-bg)_72%)]" />
    </div>
  );
}
