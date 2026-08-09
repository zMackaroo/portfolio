"use client";

import { useEffect } from "react";

export function CinematicEffects() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 821px)");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    const observeReveals = () => {
      const reveals = Array.from(
        document.querySelectorAll<HTMLElement>(".reveal:not(.in)"),
      );
      if (reduced.matches) {
        reveals.forEach((el) => el.classList.add("in"));
        return;
      }
      reveals.forEach((el) => io.observe(el));
    };

    observeReveals();
    const observeTimer = window.setTimeout(observeReveals, 100);

    let raf = 0;
    let pxEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );

    const clearParallax = () => {
      pxEls.forEach((el) => {
        el.style.transform = "";
      });
    };

    const parallax = () => {
      pxEls = Array.from(
        document.querySelectorAll<HTMLElement>("[data-parallax]"),
      );
      if (reduced.matches || !desktop.matches) {
        clearParallax();
        raf = requestAnimationFrame(parallax);
        return;
      }
      const vh = window.innerHeight;
      pxEls.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0");
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - vh / 2;
        el.style.transform = `translate3d(0, ${center * speed}px, 0)`;
      });
      raf = requestAnimationFrame(parallax);
    };

    raf = requestAnimationFrame(parallax);

    return () => {
      io.disconnect();
      window.clearTimeout(observeTimer);
      cancelAnimationFrame(raf);
      clearParallax();
    };
  }, []);

  return null;
}
