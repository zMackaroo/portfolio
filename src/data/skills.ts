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

export const skillsContent = {
  introBefore: "I'm seeking to join a ",
  introHighlight: "cross-functional",
  introAfter: " team",
  subtitle:
    "focused on building accessible, user-centered products that create meaningful impact in people’s everyday lives.",
} as const;

export const skills: SkillItem[] = [
  { id: "figma", name: "Figma", iconKey: "figma", row: 1 },
  { id: "react", name: "React", iconKey: "react", row: 1 },
  { id: "c", name: "C", iconKey: "c", row: 1 },
  { id: "node", name: "Node.js", iconKey: "node", row: 1 },
  { id: "redux", name: "Redux", iconKey: "redux", row: 1 },
  { id: "javascript", name: "JavaScript", iconKey: "javascript", row: 1 },
  { id: "css3", name: "CSS3", iconKey: "css3", row: 1 },
  { id: "xd", name: "Adobe XD", iconKey: "xd", row: 2 },
  { id: "nextjs", name: "Next.js", iconKey: "nextjs", row: 2 },
  { id: "gatsby", name: "Gatsby", iconKey: "gatsby", row: 2 },
  { id: "illustrator", name: "Illustrator", iconKey: "illustrator", row: 2 },
  { id: "express", name: "Express", iconKey: "express", row: 2 },
  { id: "mongodb", name: "MongoDB", iconKey: "mongodb", row: 2 },
];

export const orbitRings: OrbitRingConfig[] = [
  {
    id: 1,
    sizeClass: "orbit-ring-sm",
    tiltClass: "orbit-tilt-1",
    durationClass: "orbit-duration-8",
    radius: 135,
  },
  {
    id: 2,
    sizeClass: "orbit-ring-md",
    tiltClass: "orbit-tilt-2",
    durationClass: "orbit-duration-12",
    reverse: true,
    radius: 195,
  },
  {
    id: 3,
    sizeClass: "orbit-ring-lg",
    tiltClass: "orbit-tilt-3",
    durationClass: "orbit-duration-18",
    radius: 255,
  },
];

export const orbitIcons: OrbitIconItem[] = [
  {
    id: "orbit-linkedin",
    name: "LinkedIn",
    iconKey: "linkedin",
    ring: 1,
    angle: 20,
  },
  {
    id: "orbit-google",
    name: "Google",
    iconKey: "google",
    ring: 1,
    angle: 200,
  },
  {
    id: "orbit-js",
    name: "JavaScript",
    iconKey: "javascript",
    ring: 2,
    angle: 45,
  },
  { id: "orbit-react", name: "React", iconKey: "react", ring: 2, angle: 200 },
  { id: "orbit-xd", name: "Adobe XD", iconKey: "xd", ring: 2, angle: 300 },
  {
    id: "orbit-ai",
    name: "Illustrator",
    iconKey: "illustrator",
    ring: 3,
    angle: 60,
  },
  { id: "orbit-css", name: "CSS3", iconKey: "css3", ring: 3, angle: 160 },
  { id: "orbit-figma", name: "Figma", iconKey: "figma", ring: 3, angle: 280 },
];
