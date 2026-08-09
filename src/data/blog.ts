export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  location: string;
  date: string;
  readingTime: string;
  cover?: string;
  tags: string[];
  /** Paragraphs of the story */
  body: string[];
};

export const blogContent = {
  sceneTag: "Scene 004 — Field Notes",
  heading: "Travel Journal",
  intro:
    "Places, light, and the stories between flights — a written reel of travels and quiet frames.",
  cta: "Open the journal",
  ctaHref: "/blog",
  indexTitle: "Journal",
  indexIntro:
    "Travel stories, field notes, and frames from the road. New chapters land here as I go.",
  placeholder: {
    status: "EN ROUTE",
    title: "Stories packing for departure",
    body: "I'm gathering travel notes, photos, and essays from the road. The first chapters will publish here soon.",
    meta: "DESTINATION — COMING SOON",
  },
  backLabel: "← Back to journal",
} as const;

/**
 * Add travel posts here. While empty, homepage + /blog show the placeholder.
 *
 * Example:
 * {
 *   slug: "taipei-golden-hour",
 *   title: "Golden Hour Over Taipei",
 *   excerpt: "A late walk through alley steam and neon.",
 *   location: "Taipei, Taiwan",
 *   date: "2026-03-12",
 *   readingTime: "4 min",
 *   tags: ["Travel", "City"],
 *   body: ["Paragraph one...", "Paragraph two..."],
 * }
 */
export const blogPosts: BlogPost[] = [];

export function getBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatBlogDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}
