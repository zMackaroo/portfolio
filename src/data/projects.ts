export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  tag: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  githubUrl: string;
  liveUrl: string;
};

export const projectsContent = {
  sceneTag: "Scene 005 — Selected Work",
  heading: "Selected Work",
  intro:
    "A cut of projects where engineering craft meets a director's eye for detail.",
} as const;

export const projects: ProjectItem[] = [
  {
    id: "battle-arena",
    title: "Battle Arena",
    description:
      "A real-time TikTok LIVE battle overlay where viewers fight on stream.",
    tag: "Real-time · Live",
    image: "/assets/projects/battle-arena.jpeg",
    imageWidth: 583,
    imageHeight: 341,
    githubUrl:
      "https://github.com/zMackaroo/tiktok-live-battle-arena-portfolio",
    liveUrl: "https://zmackaroo.github.io/tiktok-live-battle-arena-portfolio/",
  },
  {
    id: "exvara tech",
    title: "Exvara Tech",
    description:
      "Scalable web & mobile solutions for enterprise systems and automation.",
    tag: "Web · Enterprise",
    image: "/assets/projects/exvara.jpeg",
    imageWidth: 583,
    imageHeight: 341,
    githubUrl: "#",
    liveUrl: "https://www.exvaratech.com/",
  },
  {
    id: "tripbuddy",
    title: "TripBuddy AI",
    description:
      "AI travel planner generating personalized day-by-day itineraries.",
    tag: "AI · Travel",
    image: "/assets/projects/tripbuddy.png",
    imageWidth: 583,
    imageHeight: 341,
    githubUrl: "https://github.com/zMackaroo/tripbuddy",
    liveUrl: "#",
  },
  {
    id: "ekart",
    title: "Karti — Checklist",
    description:
      "A platform to create and manage checklists for your projects.",
    tag: "Product · Web",
    image: "/assets/projects/ekart.jpeg",
    imageWidth: 583,
    imageHeight: 341,
    githubUrl: "https://github.com/zMackaroo/e-kart-portfolio",
    liveUrl: "https://zmackaroo.github.io/e-kart-portfolio/",
  },
  {
    id: "img-video converter",
    title: "Image / Video Converter",
    description:
      "Lightweight browser-based WebP optimizer — fast, private, local.",
    tag: "Tool · Web",
    image: "/assets/projects/image-video-convert.jpeg",
    imageWidth: 583,
    imageHeight: 341,
    githubUrl: "https://github.com/zMackaroo/webp-converter",
    liveUrl: "https://webp-converter-kohl.vercel.app/readme",
  },
  {
    id: "speedup",
    title: "SpeedUp E-Learning",
    description:
      "A virtual learning mobile app for interactive online classes.",
    tag: "Mobile · EdTech",
    image: "/assets/projects/speedup.jpg",
    imageWidth: 200,
    imageHeight: 200,
    githubUrl: "https://github.com/zMackaroo/speeduplearning-application",
    liveUrl: "#",
  },
];
