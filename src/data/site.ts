import { aboutContent } from "@/data/about";
import { contactContent, socialLinks } from "@/data/contact";
import { heroContent } from "@/data/hero";

const name = heroContent.speechBubble.replace(/^Hello! I Am /, "");

export const siteConfig = {
  name,
  title: `${name} | UI/UX Designer & Software Engineer`,
  shortTitle: `${name} | Portfolio`,
  description: aboutContent.body,
  jobTitle: aboutContent.currentRole,
  email: contactContent.email,
  ogImage: heroContent.avatar.src,
  ogImageAlt: heroContent.avatar.alt,
  ogImageWidth: heroContent.avatar.width,
  ogImageHeight: heroContent.avatar.height,
  keywords: [
    name,
    "UI/UX designer",
    "software engineer",
    "frontend developer",
    "portfolio",
    "web design",
    "accessible design",
    ...aboutContent.roles.map((role) => role.replace(/\.$/, "")),
  ],
  socialLinks,
} as const;
