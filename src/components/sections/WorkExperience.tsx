import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { WorkExperienceContent } from "@/components/sections/WorkExperienceContent";

export function WorkExperience() {
  return (
    <AnimatedSection
      id="work-experience"
      aria-label="Work Experience"
      className="relative w-full overflow-x-clip bg-bg py-24"
    >
      <WorkExperienceContent />
    </AnimatedSection>
  );
}
