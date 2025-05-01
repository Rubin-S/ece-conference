/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          // Backgrounds
          pb: "#FFFFFF", // primary background
          sb: "#E3F2FD", // secondary section background
          altBg: "#F5F5F5", // alternate background (cards, etc.)

          // Text
          pt: "#263238", // primary text
          st: "#546E7A", // secondary text
          muted: "#78909C", // muted / placeholder text

          // Accents
          pa: "#1A237E", // primary accent (headings, links)
          sa: "#B71C1C", // secondary accent (errors, alerts)
          hl: "#FFC107", // highlight (badges, info)

          // Actions
          ctaBg: "#B71C1C", // CTA background
          ctaText: "#FFFFFF", // CTA text
          ctaHover: "#8E1414", // CTA hover state

          // Links
          link: "#1A237E",
          linkHover: "#0F144F",

          // Borders & Dividers
          border: "#B0BEC5",
          divider: "#ECEFF1"
        },
        dark: {
          // Backgrounds
          pb: "#121212",
          sb: "#37474F",
          altBg: "#1B1B2E",

          // Text
          pt: "#ECEFF1",
          st: "#6C7275",
          muted: "#78909C",

          // Accents
          pa: "#3F51B5",
          sa: "#EF5350",
          hl: "#FFD54F",

          // Actions
          ctaBg: "#EF5350",
          ctaText: "#121212",
          ctaHover: "#B71C1C",

          // Links
          link: "#4DD0E1",
          linkHover: "#26A2B3",

          // Borders & Dividers
          border: "#78909C",
          divider: "#546E7A"
        }
      },

      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)"
      },

      letterSpacing: {
        tagline: ".15em"
      },

      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem"
      },

      opacity: {
        15: ".15"
      },

      transitionDuration: {
        DEFAULT: "200ms"
      },

      transitionTimingFunction: {
        DEFAULT: "linear"
      },

      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5"
      },

      borderWidth: {
        DEFAULT: "0.0625rem"
      },

      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)"
      }
    }
  },

  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {}
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {}
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {}
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {}
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {}
        },
        ".h5": {
          "@apply text-2xl leading-normal": {}
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {}
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {}
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {}
        },
        ".caption": {
          "@apply text-sm": {}
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
            {}
        },
        ".quote": {
          "@apply font-code text-lg leading-normal": {}
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {}
        }
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"
        }
      });
    })
  ]
};
