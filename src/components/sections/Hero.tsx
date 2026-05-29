import Image from "next/image";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { heroContent } from "@/data/hero";

function AnnotationArrows() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      viewBox="0 0 1100 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M280 180 C360 120 420 100 480 130"
        stroke="var(--color-purple-light)"
        strokeWidth="1.5"
        strokeDasharray="4 6"
        opacity="0.5"
      />
      <path
        d="M480 130 L472 124 M480 130 L486 122"
        stroke="var(--color-purple-light)"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <path
        d="M720 520 C640 560 560 580 500 550"
        stroke="var(--color-purple-light)"
        strokeWidth="1.5"
        strokeDasharray="4 6"
        opacity="0.5"
      />
      <path
        d="M500 550 L508 556 M500 550 L494 558"
        stroke="var(--color-purple-light)"
        strokeWidth="1.5"
        opacity="0.5"
      />
    </svg>
  );
}

export function Hero() {
  const { speechBubble, headline, subTagline, avatar, gradient } = heroContent;

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative w-full overflow-x-clip bg-bg"
    >
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1100px] flex-col items-center justify-center gap-12 px-6 pb-24 pt-28 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-12 lg:pb-0 lg:pt-24">
        <AnnotationArrows />

        <div className="relative z-10 flex w-full shrink-0 justify-center lg:w-auto lg:justify-start">
          <div className="relative size-64 sm:size-72 lg:size-[380px]">
            <GradientBlob
              src={gradient.src}
              alt={gradient.alt}
              width={gradient.width}
              height={gradient.height}
              className="inset-0 h-full w-full object-contain"
            />

            <div
              className="absolute -top-2 left-1/2 z-20 w-[min(100%,12rem)] -translate-x-1/2 sm:w-auto sm:max-w-none lg:-right-4 lg:left-auto lg:translate-x-0"
            >
              <p className="rounded-xl border border-border bg-bg-card px-4 py-2 text-center text-sm text-text shadow-[0_0_40px_rgba(124,58,237,0.15)]">
                {speechBubble}
              </p>
            </div>

            <Image
              src={avatar.src}
              alt={avatar.alt}
              width={avatar.width}
              height={avatar.height}
              priority
              className="absolute inset-0 z-10 m-auto h-auto w-[85%] max-w-[260px] object-contain sm:max-w-[288px] lg:max-w-[380px]"
            />
          </div>
        </div>

        <div className="relative z-10 w-full min-w-0 max-w-xl text-center lg:max-w-lg lg:text-left">
          <h1 className="w-full max-w-full break-words leading-tight tracking-tight">
            <span className="block text-2xl font-medium text-text sm:text-3xl">
              {headline.line1}
            </span>
            <span className="mt-2 block text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
              {headline.line2}
            </span>
            <span className="mt-2 block text-2xl font-medium text-text sm:text-3xl">
              {headline.line3Prefix}
              <span className="border border-purple rounded-full px-2 py-0.5">
                {headline.line3Highlight}
              </span>
              {headline.line3Suffix}
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-text-muted sm:text-lg">
            {subTagline}
          </p>
        </div>
      </div>
    </section>
  );
}
