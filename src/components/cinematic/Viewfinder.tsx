"use client";

import { useEffect, useState } from "react";
import { contactContent } from "@/data/contact";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function scrollToTimecode(scrollY: number, maxScroll: number) {
  const p = maxScroll > 0 ? scrollY / maxScroll : 0;
  const totalFrames = Math.floor(p * 60 * 24);
  const f = totalFrames % 24;
  const s = Math.floor(totalFrames / 24) % 60;
  const m = Math.floor(totalFrames / (24 * 60));
  return {
    timecode: `00:${pad(m)}:${pad(s)}:${pad(f)}`,
    runtime: `RUNTIME ${pad(m)}:${pad(s)}`,
  };
}

export function Viewfinder() {
  const [timecode, setTimecode] = useState("00:00:00:00");

  useEffect(() => {
    const update = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const { timecode: tc, runtime } = scrollToTimecode(window.scrollY, max);
      setTimecode(tc);
      window.dispatchEvent(
        new CustomEvent("cinematic:runtime", { detail: runtime }),
      );
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="viewfinder" aria-hidden>
      <span className="vf-corner tl" />
      <span className="vf-corner tr" />
      <span className="vf-corner bl" />
      <span className="vf-corner br" />
      <div className="vf-rec">
        <span className="dot" /> REC
      </div>
      <div className="vf-tc">{timecode}</div>
      <div className="vf-bottom">{contactContent.filmCredit}</div>
    </div>
  );
}
