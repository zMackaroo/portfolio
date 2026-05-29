"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

const TYPE_SPEED_MS = 80;
const DELETE_SPEED_MS = 40;
const PAUSE_MS = 2000;

type TypewriterTextProps = {
  strings: readonly string[];
  prefix?: string;
  className?: string;
};

export function TypewriterText({
  strings,
  prefix = "",
  className,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const longestString = useMemo(
    () =>
      strings.reduce(
        (longest, current) =>
          current.length > longest.length ? current : longest,
        "",
      ),
    [strings],
  );

  useEffect(() => {
    if (strings.length === 0) return;

    const current = strings[stringIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_MS);
    } else if (!isDeleting) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, TYPE_SPEED_MS);
    } else if (displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, DELETE_SPEED_MS);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setStringIndex((index) => (index + 1) % strings.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, stringIndex, strings]);

  return (
    <span
      aria-live="polite"
      aria-atomic="true"
      className={cn(
        "inline-block max-w-full overflow-hidden whitespace-normal",
        className,
      )}
      style={{
        minWidth: `min(${prefix.length + longestString.length}ch, 100%)`,
      }}
    >
      {prefix}
      {displayed}
      <span className="cursor-blink" aria-hidden="true">
        |
      </span>
    </span>
  );
}
