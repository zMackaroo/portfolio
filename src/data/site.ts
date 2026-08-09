import { aboutContent } from "@/data/about";
import { contactContent, socialLinks } from "@/data/contact";
import { heroContent } from "@/data/hero";

const name = "Sydney D. Enciso";

export const siteConfig = {
  name,
  brand: "Sydney",
  title: `${name} | Engineer & Filmmaker`,
  shortTitle: `${name} | Portfolio`,
  description: aboutContent.lead,
  jobTitle: aboutContent.currentRole,
  email: contactContent.email,
  ogImage: heroContent.avatar.src,
  ogImageAlt: heroContent.avatar.alt,
  ogImageWidth: heroContent.avatar.width,
  ogImageHeight: heroContent.avatar.height,
  keywords: [
    name,
    "software engineer",
    "filmmaker",
    "frontend developer",
    "portfolio",
    "montage",
    "vlogs",
    "storyteller",
    ...aboutContent.roles.map((role) => role.replace(/\.$/, "")),
  ],
  socialLinks,
} as const;
