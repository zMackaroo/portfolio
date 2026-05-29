import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SkillsVisual } from "@/components/ui/SkillsVisual";
import { skillsContent } from "@/data/skills";

export function Skills() {
  return (
    <AnimatedSection
      id="skills"
      aria-label="Skills"
      className="w-full overflow-x-clip bg-bg-elevated py-24"
    >
      <div className="mx-auto max-w-[1100px] px-6 text-center lg:px-12">
        <h2 className="mx-auto max-w-3xl text-xl font-normal leading-relaxed text-white sm:text-2xl">
          {skillsContent.introBefore}
          <span className="bg-gradient-to-r from-purple-light to-accent bg-clip-text font-medium text-transparent">
            {skillsContent.introHighlight}
          </span>
          {skillsContent.introAfter}
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-base text-text-muted sm:text-lg">
          {skillsContent.subtitle}
        </p>

        <SkillsVisual />
      </div>
    </AnimatedSection>
  );
}
