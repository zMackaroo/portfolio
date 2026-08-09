"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroContent } from "@/data/hero";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const onReady = () => setLoaded(true);
    window.addEventListener("cinematic:ready", onReady);
    const fallback = window.setTimeout(onReady, 2200);
    return () => {
      window.removeEventListener("cinematic:ready", onReady);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <section
      id="hero"
      className={`hero-cinematic${loaded ? " load" : ""}`}
      data-scene="001"
    >
      <div className="hero-bg" data-parallax="0.18" aria-hidden />
      <div className="hero-portrait" data-parallax="-0.12">
        <Image
          src={heroContent.avatar.src}
          alt={heroContent.avatar.alt}
          width={heroContent.avatar.width}
          height={heroContent.avatar.height}
          priority
          className="hero-portrait-img"
        />
        <span className="hero-portrait-grade" aria-hidden />
      </div>
      <div className="wrap hero-content">
        <div className="hero-kicker">{heroContent.kicker}</div>
        <h1>
          <span className="line">
            <span>{heroContent.nameLine1}</span>
          </span>
          <span className="line">
            <span>
              {heroContent.nameLine2Before}
              <em>{heroContent.nameLine2Accent}</em>
            </span>
          </span>
        </h1>
        <p className="hero-sub">{heroContent.subTagline}</p>
      </div>
      <div className="scroll-cue">
        <div className="track" />
        {heroContent.scrollCue}
      </div>
    </section>
  );
}
