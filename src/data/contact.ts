export type SocialLinkItem = {
  id: string;
  name: string;
  href: string;
  iconKey: "instagram" | "github" | "google";
};

export const contactContent = {
  sceneTag: "Scene 008 — Fade In",
  headingBefore: "Let's create",
  headingLine2: "something ",
  headingAccent: "worth",
  headingLine3: "watching.",
  intro:
    "I'm seeking to join a cross-functional team focused on building accessible, user-centered products that create meaningful impact — or have a film/project in mind? Let's connect.",
  email: "sydenciso.work@gmail.com",
  footerLeft: "© 2026 SYDNEY D. ENCISO",
  footerCenter: "SHOT & BUILT WITH INTENT",
  filmCredit: "A FILM BY SYDNEY D. ENCISO",
} as const;

export const socialLinks: SocialLinkItem[] = [
  {
    id: "github",
    name: "GitHub",
    href: "https://github.com/zMackaroo",
    iconKey: "github",
  },
  {
    id: "google",
    name: "Email",
    href: "mailto:sydenciso.work@gmail.com",
    iconKey: "google",
  },
];
