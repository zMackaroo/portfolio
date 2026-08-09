export type ToolkitItem = {
  id: string;
  name: string;
  label: string;
};

export const skillsContent = {
  sceneTag: "Scene 007 — The Toolkit",
  engineeringTitle: "Engineering",
  cinemaTitle: "Craft & Cinema",
} as const;

export const engineeringToolkit: ToolkitItem[] = [
  { id: "react", name: "React & React Native", label: "UI" },
  { id: "nextjs", name: "Next.js", label: "SSR" },
  { id: "typescript", name: "TypeScript", label: "LANG" },
  { id: "node", name: "Node.js & Express", label: "API" },
  { id: "redux", name: "Redux", label: "STATE" },
  { id: "mongodb", name: "MongoDB", label: "DATA" },
];

export const cinemaToolkit: ToolkitItem[] = [
  { id: "montage", name: "Montage & Editing", label: "CUT" },
  { id: "vlogs", name: "Vlogs & Storytelling", label: "DOC" },
  { id: "color", name: "Color Grading", label: "GRADE" },
  { id: "motion", name: "Motion & Pacing", label: "MOVE" },
  { id: "figma", name: "Figma & Adobe XD", label: "DESIGN" },
  { id: "illustrator", name: "Illustrator", label: "ART" },
];

export const marqueeItems = [
  "Cinematic Montage",
  "Full-Stack Engineering",
  "Vlogs",
  "Short Films",
  "Color & Motion",
  "Product Design",
] as const;

/* Legacy exports kept for unused orbit components */
export type SkillItem = {
  id: string;
  name: string;
  iconKey: string;
  row: 1 | 2;
};

export type OrbitIconItem = {
  id: string;
  name: string;
  iconKey: string;
  ring: 1 | 2 | 3;
  angle: number;
};

export type OrbitRingConfig = {
  id: 1 | 2 | 3;
  sizeClass: string;
  tiltClass: string;
  durationClass: string;
  reverse?: boolean;
  radius: number;
};

export const skills: SkillItem[] = [];
export const orbitRings: OrbitRingConfig[] = [];
export const orbitIcons: OrbitIconItem[] = [];
