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
        },
        text: {
          DEFAULT: "var(--color-text)",
          muted: "var(--color-text-muted)",
        },
        white: "var(--color-white)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
};

export default config;
