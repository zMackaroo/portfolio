import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--color-bg)",
          elevated: "var(--color-bg-elevated)",
          card: "var(--color-bg-card)",
        },
        border: "var(--color-border)",
        purple: {
          DEFAULT: "var(--color-purple)",
          light: "var(--color-purple-light)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          text: "var(--color-accent-text)",
          soft: "var(--color-accent-soft)",
        },
        text: {
          DEFAULT: "var(--color-text)",
          muted: "var(--color-text-muted)",
          faint: "var(--color-faint)",
        },
        white: "var(--color-white)",
        line: "var(--color-line)",
        rec: "var(--color-rec)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
    },
  },
};

export default config;
