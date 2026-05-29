import { skillIconMap } from "@/lib/skill-icons";
import type { SkillItem } from "@/data/skills";

type TechBadgeProps = {
  skill: SkillItem;
};

export function TechBadge({ skill }: TechBadgeProps) {
  const Icon = skillIconMap[skill.iconKey];

  return (
    <div
      title={skill.name}
      className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-border/80 bg-bg-card shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] sm:h-11 sm:w-11"
    >
      {Icon ? (
        <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" aria-label={skill.name} />
      ) : (
        <span className="text-xs font-medium text-text-muted" aria-label={skill.name}>
          {skill.name.slice(0, 2)}
        </span>
      )}
    </div>
  );
}
