import type { Metadata } from "next";
import { MarqueeStrip } from "@/components/cinematic/MarqueeStrip";
import { SiteFooter } from "@/components/cinematic/SiteFooter";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Films } from "@/components/sections/Films";
import { Hero } from "@/components/sections/Hero";
import { Journal } from "@/components/sections/Journal";
import { Skills } from "@/components/sections/Skills";
import { WorkExperience } from "@/components/sections/WorkExperience";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: siteConfig.shortTitle,
};

export default function Home() {
  return (
    <main className="w-full min-w-0 overflow-x-clip">
      <Hero />
      <MarqueeStrip />
      <About />
      <Films />
      <Journal />
      <FeaturedProjects />
      <WorkExperience />
      <Skills />
      <Contact />
      <SiteFooter />
    </main>
  );
}
