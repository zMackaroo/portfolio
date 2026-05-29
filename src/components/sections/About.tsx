import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { aboutContent } from "@/data/about";

export function About() {
  const { roles, currentRole, company, body } = aboutContent;

  return (
    <AnimatedSection
      id="about"
      aria-label="About"
      className="w-full overflow-x-clip bg-bg-elevated py-24"
    >
      <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
        <h2
          className="w-full max-w-full overflow-x-clip text-4xl font-bold leading-tight text-white lg:text-[44px]"
          aria-label={`I'm a ${roles.join(" ")}`}
        >
          <TypewriterText strings={roles} prefix="I'm a " />
        </h2>

        <p className="mt-4 text-base text-text-muted lg:text-lg">
          Currently, I&apos;m a {currentRole} at{" "}
          <span aria-hidden="true">🔵</span>{" "}
          <a
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-text transition-colors hover:text-purple-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
          >
            {company.name}
          </a>
        </p>

        <p className="mt-8 text-base leading-relaxed text-text-muted lg:text-lg text-justify">
          {body}
        </p>
      </div>
    </AnimatedSection>
  );
}
