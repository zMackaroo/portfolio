import Image from "next/image";
import { FaGithub, FaGlobe } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { cn } from "@/lib/utils";
import type { ProjectItem } from "@/data/projects";

type ProjectCardProps = {
  project: ProjectItem;
  index: number;
};

function isDisabledLink(href: string): boolean {
  return href === "#" || href.trim() === "";
}

function ProjectLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: IconType;
}) {
  const disabled = isDisabledLink(href);
  const className = cn(
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-card text-lg transition-colors",
    disabled
      ? "cursor-not-allowed opacity-40 text-text-muted"
      : "text-white hover:border-purple/50 hover:text-accent-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple",
  );

  if (disabled) {
    return (
      <button
        type="button"
        disabled
        aria-label={`${label} (unavailable)`}
        className={className}
      >
        <Icon aria-hidden="true" className="h-4 w-4" />
      </button>
    );
  }

  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      aria-label={label}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={className}
    >
      <Icon aria-hidden="true" className="h-4 w-4" />
    </a>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 1;

  return (
    <article className="relative lg:min-h-[341px]">
      <div
        className={cn(
          "relative w-full lg:absolute lg:top-1/2 lg:w-[min(100%,583px)] lg:-translate-y-1/2",
          isEven ? "lg:left-0" : "lg:right-0",
        )}
      >
        <Image
          src={project.image}
          alt={`${project.title} mockup screenshot`}
          width={project.imageWidth}
          height={project.imageHeight}
          sizes="(max-width: 1024px) 100vw, 583px"
          className="h-auto w-full rounded-2xl object-cover"
        />
      </div>

      <div
        className={cn(
          "relative z-10 mt-8 flex flex-col gap-5 lg:absolute lg:top-1/2 lg:mt-0 lg:w-[50%] lg:-translate-y-1/2",
          isEven ? "lg:right-0 lg:items-end" : "lg:left-0 lg:items-start",
        )}
      >
        <header className={cn("space-y-2", isEven && "text-right")}>
          {/* <p className="text-sm font-medium text-accent-text">Featured Project</p> */}
          <h3 className="text-3xl font-bold text-white sm:text-4xl">
            {project.title}
          </h3>
        </header>

        <div
          className={cn(
            "w-full rounded-2xl border border-white/10 bg-bg-card/80 p-6 shadow-xl backdrop-blur-md lg:w-[calc(100%+6rem)]",
            isEven && "lg:-ml-24",
          )}
        >
          <p className="text-sm leading-relaxed text-text-muted lg:text-base">
            {project.description}
          </p>
        </div>

        <div className={cn("flex items-center gap-3", isEven && "justify-end")}>
          <ProjectLink
            href={project.githubUrl}
            label="View project on GitHub"
            icon={FaGithub}
          />
          <ProjectLink
            href={project.liveUrl}
            label="View live project"
            icon={FaGlobe}
          />
        </div>
      </div>
    </article>
  );
}
