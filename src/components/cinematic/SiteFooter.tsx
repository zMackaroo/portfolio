"use client";

import { useEffect, useState } from "react";
import { contactContent } from "@/data/contact";

export function SiteFooter() {
  const [runtime, setRuntime] = useState("RUNTIME 00:00");

  useEffect(() => {
    const onRuntime = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail;
      if (detail) setRuntime(detail);
    };
    window.addEventListener("cinematic:runtime", onRuntime);
    return () => window.removeEventListener("cinematic:runtime", onRuntime);
  }, []);

  return (
    <footer className="site-footer">
      <span>{contactContent.footerLeft}</span>
      <span>{contactContent.footerCenter}</span>
      <span>{runtime}</span>
    </footer>
  );
}
