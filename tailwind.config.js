/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#faf7f2",
          100: "#f3ece0",
          200: "#e5d6bb",
          300: "#d0b489",
          400: "#bc9560",
          500: "#a9793f",
          600: "#8b6133",
          700: "#6e4d2c",
          800: "#533b23",
          900: "#362516",
        },
        light: {
          pb: "#f7f4ee",
          sb: "#fbf8f2",
          altBg: "#efe8dc",
          pt: "#161410",
          st: "#554d44",
          muted: "#7f766a",
          pa: "#a9793f",
          divider: "#ded5c8",
          border: "#ded5c8",
        },
        dark: {
          pb: "#09090b",
          sb: "#111114",
          altBg: "#1a1a1f",
          pt: "#f5eee3",
          st: "#c7beb2",
          muted: "#968d81",
          pa: "#d0b489",
          divider: "#2a2a31",
          border: "#2a2a31",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        code: ["var(--font-code)", "Consolas", "Monaco", "monospace"],
        grotesk: ["var(--font-display)", ...fontFamily.serif],
      },
      letterSpacing: {
        tagline: ".28em",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },
      boxShadow: {
        soft: "0 24px 60px rgba(20, 17, 12, 0.06)",
        panel: "0 36px 120px rgba(20, 17, 12, 0.08)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.2, 0.8, 0.2, 1)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents }) {
      addBase({
        ":root": {
          "--font-sans": '"Manrope", sans-serif',
          "--font-code": '"IBM Plex Mono", monospace',
          "--font-display": '"Cormorant Garamond", serif',
        },
      });

      addComponents({
        ".container": {
          "@apply mx-auto w-full max-w-[82rem] px-5 md:px-8 xl:px-10": {},
        },
        ".h1": {
          "@apply font-grotesk text-[clamp(3.2rem,8vw,6.6rem)] leading-[0.92] tracking-[-0.045em]": {},
        },
        ".h2": {
          "@apply font-grotesk text-[2.5rem] leading-[0.96] tracking-[-0.03em] md:text-[3.35rem]": {},
        },
        ".h3": {
          "@apply font-grotesk text-[1.95rem] leading-[1] tracking-[-0.02em] md:text-[2.35rem]": {},
        },
        ".body": {
          "@apply text-[1rem] leading-[1.95rem] md:text-[1.05rem]": {},
        },
        ".site-eyebrow": {
          "@apply inline-flex items-center text-[0.7rem] font-code uppercase tracking-tagline text-primary-600 dark:text-primary-300": {},
        },
        ".surface-card": {
          "@apply rounded-[2rem] border border-light-divider/70 bg-white/90 p-7 shadow-soft backdrop-blur-sm dark:border-dark-divider/70 dark:bg-dark-sb/90": {},
        },
        ".surface-panel": {
          "@apply rounded-[2.3rem] border border-light-divider/70 bg-light-sb/95 p-7 shadow-panel backdrop-blur-sm dark:border-dark-divider/70 dark:bg-dark-sb/95": {},
        },
        ".button-primary": {
          "@apply inline-flex items-center justify-center rounded-full border border-light-pt bg-light-pt px-6 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-light-pb transition-all duration-200 ease-smooth hover:border-primary-600 hover:bg-primary-600 dark:border-dark-pt dark:bg-dark-pt dark:text-dark-pb dark:hover:border-primary-300 dark:hover:bg-primary-300": {},
        },
        ".button-secondary": {
          "@apply inline-flex items-center justify-center rounded-full border border-light-divider bg-transparent px-6 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-light-pt transition-all duration-200 ease-smooth hover:border-light-pt hover:bg-white dark:border-dark-divider dark:text-dark-pt dark:hover:border-dark-pt dark:hover:bg-dark-altBg": {},
        },
      });
    }),
  ],
};
