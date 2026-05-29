"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void): () => void {
  const narrow = window.matchMedia("(max-width: 767px)");
  const coarse = window.matchMedia("(pointer: coarse)");
  const handler = () => onChange();
  narrow.addEventListener("change", handler);
  coarse.addEventListener("change", handler);
  return () => {
    narrow.removeEventListener("change", handler);
    coarse.removeEventListener("change", handler);
  };
}

function getSnapshot(): boolean {
  return (
    window.matchMedia("(max-width: 767px)").matches ||
    window.matchMedia("(pointer: coarse)").matches
  );
}

/** Touch / narrow viewports — skip enter animations that stick at opacity 0 on iOS. */
export function usePreferStaticMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, () => true);
}
