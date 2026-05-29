import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <AnimatedSection
      id="featured-projects"
      aria-label="Featured Projects"
      className="w-full overflow-x-clip bg-bg py-24"
    >
      <div className="mx-auto max-w-[1100px] space-y-32 px-6 lg:px-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </AnimatedSection>
  );
}
