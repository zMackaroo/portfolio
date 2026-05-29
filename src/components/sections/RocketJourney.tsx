"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RocketScene } from "@/components/three/RocketScene";
import { journeyMilestones } from "@/data/journey-milestones";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

function milestoneTop(progress: number): string {
  return `${10 + progress * 75}%`;
}

export function RocketJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<RocketScene | null>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
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
    const section = sectionRef.current;
    const pin = pinRef.current;
    const canvas = canvasRef.current;

    if (!section || !pin || !canvas) return;

    let scrollTrigger: ScrollTrigger | null = null;
    let cancelled = false;

    const init = async () => {
      const { RocketScene } = await import("@/components/three/RocketScene");
      if (cancelled || !canvasRef.current) return;

      const scene = new RocketScene({
        canvas: canvasRef.current,
        isMobile,
        reducedMotion,
      });
      sceneRef.current = scene;

      scrollTrigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        pin,
        scrub: reducedMotion ? false : 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = reducedMotion ? 0.5 : self.progress;
          scene.setProgress(progress);
          setScrollProgress(progress);
        },
      });

      if (reducedMotion) {
        scene.setProgress(0.5);
        setScrollProgress(0.5);
      }

      ScrollTrigger.refresh();
    };

    init();

    return () => {
      cancelled = true;
      scrollTrigger?.kill();
      sceneRef.current?.destroy();
      sceneRef.current = null;
      ScrollTrigger.refresh();
    };
  }, [isMobile, reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="journey"
      aria-label="Career journey"
      className={cn(
        "relative w-full overflow-x-clip bg-bg",
        isMobile ? "h-[400vh]" : "h-[600vh]",
      )}
    >
      <div
        ref={pinRef}
        className="journey-canvas-wrapper relative z-10 h-screen w-full"
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        />

        <div className="pointer-events-none absolute inset-0 z-20">
          {journeyMilestones.map((milestone) => {
            const visible =
              reducedMotion || scrollProgress >= milestone.progress;

            return (
              <article
                key={milestone.id}
                className={cn(
                  "absolute rounded-xl border border-border bg-bg-card/80 px-5 py-4 shadow-xl backdrop-blur-sm transition-all duration-500 ease-out",
                  isMobile ? "max-w-[42vw] sm:max-w-[38vw]" : "max-w-[220px]",
                  milestone.side === "left"
                    ? isMobile
                      ? "left-[5%]"
                      : "left-[8%]"
                    : isMobile
                      ? "right-[5%]"
                      : "right-[8%]",
                  visible
                    ? "translate-x-0 opacity-100"
                    : milestone.side === "left"
                      ? "-translate-x-10 opacity-0"
                      : "translate-x-10 opacity-0",
                )}
                style={{ top: milestoneTop(milestone.progress) }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-accent-text">
                  {milestone.year}
                </p>
                <h3 className="mt-1 text-sm font-semibold text-white">
                  {milestone.label}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-text-muted">
                  {milestone.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
