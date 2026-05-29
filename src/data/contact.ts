export type SocialLinkItem = {
  id: string;
  name: string;
  href: string;
  iconKey: "instagram" | "github" | "google";
};

export const contactContent = {
  heading: "Contact",
  intro:
    "I'm seeking to join a cross-functional team focused on building accessible, user-centered products that create meaningful impact in people’s everyday lives, or have a project in mind? Let's connect.",
  email: "sydenciso.work@gmail.com",
} as const;

export const socialLinks: SocialLinkItem[] = [
  // {
  //   id: "instagram",
  //   name: "Instagram",
  //   href: "https://www.instagram.com",
  //   iconKey: "instagram",
  // },
  {
    id: "github",
    name: "GitHub",
    href: "https://github.com/zMackaroo",
    iconKey: "github",
  },
  {
    id: "google",
    name: "Google",
    href: "mailto:sydenciso.work@gmail.com",
    iconKey: "google",
  },
];
