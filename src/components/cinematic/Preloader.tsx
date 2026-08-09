"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDone(true);
      window.dispatchEvent(new CustomEvent("cinematic:ready"));
    }, 1900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      className={`preloader${done ? " done" : ""}`}
      aria-hidden={done}
      aria-label="Loading"
    >
      <div className="pl-title">
        <span style={{ animationDelay: "0.05s" }}>Roll</span>{" "}
        <span style={{ animationDelay: "0.18s" }}>Camera.</span>
      </div>
      <div className="pl-bar" />
      <div className="pl-meta">SCENE 001 — TAKE 01</div>
    </div>
  );
}
