/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // --------------------
      // COLOR PALETTE
      // --------------------
      colors: {
        // -------------- REFINED BLUE PALETTE --------------
        primary: {
          50: "#F0F8FF",
          100: "#DCEFFC",
          200: "#B0DEFF",
          300: "#82CDFF",
          400: "#54BCFF",
          500: "#28ABFF",
          600: "#1F8FCC",
          700: "#196999",
          800: "#124466",
          900: "#0B2D33",
        },

        // -------------- NEUTRALS SUITED TO BLUE --------------
        neutral: {
          50: "#FAFAFB",
          100: "#F5F5F7",
          200: "#EBEBEF",
          300: "#DCDCE1",
          400: "#BDBDC4",
          500: "#9E9EA7",
          600: "#7E7E85",
          700: "#5F5F63",
          800: "#40404B",
          900: "#212129",
        },

        // ------------------ LIGHT MODE TOKENS ------------------
        light: {
          pb: "#FFFFFF",
          sb: "#F5F5F7",
          altBg: "#FAFAFB",
          pt: "#212129",
          st: "#40404B",
          muted: "#7E7E85",
          pa: "#28ABFF",
          sa: "#E53E3E",
          hl: "#F6E05E",
          ctaBg: "#28ABFF",
          ctaText: "#FFFFFF",
          ctaHover: "#1F8FCC",
          link: "#28ABFF",
          linkHover: "#54BCFF",
          border: "#EBEBEF",
          divider: "#EBEBEF",
        },

        // ------------------ DARK MODE TOKENS ------------------
        dark: {
          pb: "#121217",
          sb: "#1E1E28",
          altBg: "#2C2C36",
          pt: "#FFFFFF",
          st: "#E0E0E8",
          muted: "#A0A0B0",
          pa: "#54BCFF",
          sa: "#F56565",
          hl: "#F6E05E",
          ctaBg: "#54BCFF",
          ctaText: "#121217",
          ctaHover: "#28ABFF",
          link: "#28ABFF",
          linkHover: "#82CDFF",
          border: "#40404B",
          divider: "#2C2C36",
        },

        // preserve neon & glass if still needed
        neon: {
          blue: { 300: "#6EF4FF", 500: "#3DE8FF", 700: "#1ACFFF" },
          green: { 300: "#6EFF4D", 500: "#39FF14", 700: "#1AFF00" },
          pink: { 300: "#FF6EFF", 500: "#FF2DFE", 700: "#E61AE5" },
          purple: { 300: "#D66FFF", 500: "#C13FFF", 700: "#A81AFF" },
        },
        glass: {
          light: { 100: "rgba(255,255,255,0.3)", 200: "rgba(255,255,255,0.15)", 300: "rgba(255,255,255,0.05)" },
          dark: { 100: "rgba(0,0,0,0.4)", 200: "rgba(0,0,0,0.25)", 300: "rgba(0,0,0,0.1)" },
        },
      },

      // --------------------
      // BACKGROUND GRADIENTS
      // --------------------
      backgroundImage: {
        "gradient-blue": "linear-gradient(90deg, #64B5F6, #2196F3, #1E88E5)",
        "gradient-neon": "linear-gradient(90deg, #3DE8FF, #FF2DFE, #39FF14, #C13FFF)",
        "gradient-sunset": "linear-gradient(90deg, #FBBF24, #F87171, #A855F7)",
        "glass-light": "linear-gradient(to right bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.05))",
        "glass-dark": "linear-gradient(to right bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.1))",
        "radial-blue": "radial-gradient(circle at center, #64B5F6, #2196F3)",
        "conic-blue": "conic-gradient(from 180deg, #2196F3, #42A5F5, #64B5F6, #90CAF9)",
        "radial-neon": "radial-gradient(circle at center, #3DE8FF, transparent)",
        "neumorphic-light": "linear-gradient(145deg, #FFFFFF, #E2E8F0)",
        "neumorphic-dark": "linear-gradient(145deg, #334155, #1E293B)",
      },

      // --------------------
      // TYPOGRAPHY & SPACING
      // --------------------
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: ["var(--font-code)", "Consolas", "Monaco", "monospace"],
        grotesk: ["var(--font-grotesk)", "Helvetica", "Arial", "sans-serif"],
      },
      letterSpacing: {
        tagline: ".15em",
        tight: "-0.025em",
        wide: ".075em",
      },
      spacing: {
        '0.5': '0.125rem',
        '7.5': '1.875rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
      },

      // --------------------
      // BORDER & BLUR
      // --------------------
      borderWidth: {
        DEFAULT: "0.0625rem",
        0.5: "0.5px",
        3: "3px",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },

      // --------------------
      // SHADOWS
      // --------------------
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        neon: "0 0 8px rgba(62,232,255,0.6), 0 0 16px #3DE8FF",
        neumorphic: "5px 5px 15px rgba(0,0,0,0.1), -5px -5px 15px rgba(255,255,255,0.5)",
        subtle: "0 2px 4px rgba(0,0,0,0.05)",
        elevated: "0 4px 12px rgba(0,0,0,0.1)",
      },

      // --------------------
      // ANIMATIONS
      // --------------------
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        neonPulse: { "0%,100%": { opacity: "0.7", transform: "scale(1)" }, "50%": { opacity: "1", transform: "scale(1.05)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-5%)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        gradientShift: { "0%": { backgroundPosition: "0% 50%" }, "50%": { backgroundPosition: "100% 50%" }, "100%": { backgroundPosition: "0% 50%" } },
        bounce: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10%)" } },
        rotate: { "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(360deg)" } },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "neon-pulse": "neonPulse 1.5s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "gradient-shift": "gradientShift 8s ease alternate infinite",
        "bounce": "bounce 2s ease-in-out infinite",
        "spin-slow": "rotate 8s linear infinite",
      },

      // --------------------
      // Z-INDEX & TRANSITIONS
      // --------------------
      zIndex: {
        1: "1", 2: "2", 3: "3", 4: "4", 5: "5",
        60: "60", 70: "70", 80: "80", 90: "90",
      },
      transitionDuration: {
        DEFAULT: "200ms",
        150: "150ms",
        250: "250ms",
        350: "350ms",
      },
      transitionTimingFunction: {
        DEFAULT: "ease-in-out",
        "ease-smooth": "cubic-bezier(0.4,0,0.2,1)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      // BASE STYLES
      addBase({
        ':root': {
          '--font-sora': '"Sora", sans-serif',
          '--font-code': '"Fira Code", monospace',
          '--font-grotesk': '"Inter", sans-serif',
        },
      });

      // COMPONENTS
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]": {},
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]": {},
        },
        ".h2": {
          "@apply font-semibold text-[2rem] leading-[2.75rem] md:text-[2.25rem] md:leading-[3rem] lg:text-[2.5rem] lg:leading-[3.5rem]": {},
        },
        ".h3": {
          "@apply font-medium text-[1.75rem] leading-[2.25rem] md:text-[2rem] md:leading-[2.75rem]": {},
        },
        ".body": {
          "@apply text-[1rem] leading-[1.5rem] md:text-[1.125rem] md:leading-[1.75rem]": {},
        },
        ".caption": {
          "@apply text-[0.875rem] leading-[1.25rem] text-neutral-500": {},
        },
      });

      // UTILITIES
      addUtilities({
        ".btn-neon": {
          "@apply px-6 py-3 rounded-lg font-bold tracking-wider relative overflow-hidden transition-transform": {},
          backgroundColor: theme('colors.neon.blue.500'),
          color: theme('colors.light.ctaText'),
          boxShadow: `0 0 8px ${theme('colors.neon.blue.500')}, 0 0 16px ${theme('colors.neon.blue.500')}`,
        },
        ".btn-neon:hover": {
          transform: "scale(1.05)",
          boxShadow: `0 0 12px ${theme('colors.neon.blue.300')}, 0 0 24px ${theme('colors.neon.blue.300')}`,
        },
        ".glass-card": {
          background: theme('colors.glass.light.200'),
          backdropFilter: "blur(8px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: `1px solid ${theme('colors.glass.light.100')}`,
          borderRadius: "0.75rem",
          padding: "1.5rem",
        },
        ".glass-card-dark": {
          background: theme('colors.glass.dark.200'),
          backdropFilter: "blur(8px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
          border: `1px solid ${theme('colors.glass.dark.100')}`,
          borderRadius: "0.75rem",
          padding: "1.5rem",
        },
        ".neumorphic-card": {
          background: theme('backgroundImage.neumorphic-light'),
          boxShadow: theme('boxShadow.neumorphic'),
          borderRadius: "1rem",
          padding: "1.5rem",
        },
        ".neumorphic-card-dark": {
          background: theme('backgroundImage.neumorphic-dark'),
          boxShadow: theme('boxShadow.neumorphic'),
          borderRadius: "1rem",
          padding: "1.5rem",
        },
        ".tap-highlight-none": {
          "-webkit-tap-highlight-color": "transparent",
        },
      });
    }),
  ],
};
