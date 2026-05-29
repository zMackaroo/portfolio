import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { FaGithub, FaGoogle, FaInstagram } from "react-icons/fa6";
import { contactContent, socialLinks } from "@/data/contact";

const socialIconMap = {
  instagram: FaInstagram,
  github: FaGithub,
  google: FaGoogle,
} as const;

export function Contact() {
  return (
    <AnimatedSection
      id="contact"
      aria-label="Contact"
      className="w-full overflow-x-clip border-t border-border/40 bg-bg-elevated py-24 pb-32"
    >
      <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-white lg:text-[40px]">
          {contactContent.heading}
        </h2>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-text-muted lg:text-lg">
          {contactContent.intro}
        </p>

        <p className="mt-8 text-lg text-white lg:text-xl">{contactContent.email}</p>

        <ul className="mt-8 flex items-center gap-5">
          {socialLinks.map((link) => {
            const Icon = socialIconMap[link.iconKey];

            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-card text-lg text-white transition-colors hover:border-purple/50 hover:text-accent-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
                >
                  <Icon aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </AnimatedSection>
  );
}
