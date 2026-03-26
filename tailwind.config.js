/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ebfbff",
          100: "#cff5fe",
          200: "#a5ebfb",
          300: "#70ddf7",
          400: "#4cc9f0",
          500: "#28b8e2",
          600: "#1697bf",
          700: "#13789a",
          800: "#145f79",
          900: "#154f64",
        },
        highlight: {
          50: "#f4f1ff",
          100: "#ebe5ff",
          200: "#d9ceff",
          300: "#bea9ff",
          400: "#9b7eff",
          500: "#7b61ff",
          600: "#6845f4",
          700: "#5833d9",
          800: "#4a2db0",
          900: "#3e288e",
        },
        light: {
          pb: "#ffffff",
          sb: "#f8fafc",
          altBg: "#eef2f7",
          pt: "#14202d",
          st: "#4d5b6c",
          muted: "#76879c",
          pa: "#28b8e2",
          divider: "#d8e0ea",
          border: "#d8e0ea",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        code: ["var(--font-code)", "Consolas", "Monaco", "monospace"],
        grotesk: ["var(--font-display)", ...fontFamily.sans],
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
        soft: "0 24px 60px rgba(15, 23, 42, 0.08)",
        panel: "0 36px 120px rgba(15, 23, 42, 0.1)",
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
          "--font-sans": "Arial, sans-serif",
          "--font-code": '"IBM Plex Mono", monospace',
          "--font-display": "Arial, sans-serif",
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
          "@apply inline-flex items-center text-[0.7rem] font-code uppercase tracking-tagline text-primary-600": {},
        },
        ".surface-card": {
          "@apply border-t border-light-divider/80 bg-transparent px-0 py-6 shadow-none": {},
        },
        ".surface-panel": {
          "@apply border-t border-light-divider/80 bg-transparent px-0 py-7 shadow-none": {},
        },
        ".button-primary": {
          "@apply inline-flex items-center justify-center rounded-full border border-primary-400 bg-primary-400 px-6 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-light-pb transition-all duration-200 ease-smooth hover:border-highlight-500 hover:bg-highlight-500": {},
        },
        ".button-secondary": {
          "@apply inline-flex items-center justify-center rounded-full border border-light-divider bg-light-sb px-6 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-light-pt transition-all duration-200 ease-smooth hover:border-primary-400 hover:bg-light-altBg": {},
        },
      });
    }),
  ],
};
