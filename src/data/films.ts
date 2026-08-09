export type FilmItem = {
  id: string;
  title: string;
  type: "Film" | "Reel" | "Short" | "Vlog";
  year: string;
  description: string;
  url?: string;
  poster?: string;
};

export const filmsContent = {
  sceneTag: "Scene 003 — The Cut",
  heading: "Films & Reels",
  intro:
    "Montages, shorts, and vlogs — stories framed through the lens. New work is in the pipeline.",
  placeholder: {
    status: "RENDERING",
    title: "Films in post-production",
    body: "I'm finishing a cut of montages, reels, and shorts. This reel will light up here soon.",
    meta: "ETA — COMING SOON",
  },
} as const;

/** Populate when ready — section shows placeholder while empty. */
export const films: FilmItem[] = [];
