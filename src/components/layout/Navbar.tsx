import { LogoMark } from "@/components/ui/LogoMark";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Lab", href: "#" },
] as const;

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4 lg:px-12"
      >
        <a
          href="#hero"
          aria-label="Home"
          className="text-white transition-colors hover:text-accent-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
        >
          <LogoMark />
        </a>

        <ul className="flex shrink-0 items-center gap-4 sm:gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-accent-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
