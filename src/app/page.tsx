import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { RocketJourney } from "@/components/sections/RocketJourney";
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
      <RocketJourney />
      <About />
      <WorkExperience />
      <Skills />
      <FeaturedProjects />
      <Contact />
    </main>
  );
}
