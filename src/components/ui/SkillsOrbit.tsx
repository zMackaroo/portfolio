import type { RefObject } from "react";
import { LogoMark } from "@/components/ui/LogoMark";
import { orbitIcons, orbitRings } from "@/data/skills";
import { orbitIconMap } from "@/lib/skill-icons";

type SkillsOrbitProps = {
  hubRef?: RefObject<HTMLDivElement | null>;
};

export function SkillsOrbit({ hubRef }: SkillsOrbitProps) {
  return (
    <div
      className="skills-orbit relative mx-auto mt-2 h-[380px] w-full max-w-3xl overflow-visible sm:h-[340px] sm:max-w-4xl"
      aria-hidden="true"
    >
      <div className="orbit-glow" />

      {orbitRings.map((ring) => {
        const icons = orbitIcons.filter((icon) => icon.ring === ring.id);

        return (
          <div
            key={ring.id}
            className={`orbit-ring-wrapper ${ring.sizeClass} ${ring.tiltClass}`}
          >
            <div
              className={`orbit-ring-track ${ring.durationClass} ${ring.reverse ? "orbit-reverse" : ""}`}
            >
              {icons.map((icon) => {
                const Icon = orbitIconMap[icon.iconKey];

                return (
                  <div
                    key={icon.id}
                    className="orbit-icon hidden sm:flex"
                    style={{
                      transform: `rotate(${icon.angle}deg) translateX(${ring.radius}px) rotate(-${icon.angle}deg)`,
                    }}
                  >
                    {Icon ? (
                      <Icon className="h-4 w-4 text-white/45" />
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      <div ref={hubRef} className="orbit-center">
        <LogoMark className="relative z-10 h-10 w-auto" />
      </div>
    </div>
  );
}
