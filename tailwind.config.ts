import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#8df1cd",
          100: "#76eec3",
          200: "#49e8af",
          300: "#1ce29b",
          400: "#17b47c",
          500: "#11875d",
          600: "#0b5a3e",
          700: "#062c1f",
          800: "#000000",
        },
        secondary: {
          50: "#ffffff",
          100: "#fefdff",
          200: "#ddcffa",
          300: "#bda1f5",
          400: "#9c73f0",
          500: "#7c45eb",
          600: "#5c19e4",
          700: "#4a14b6",
          800: "#370f88",
          900: "#240a5a",
          950: "#1b0743",
        },
        accent: {
          50: "#ffffff",
          100: "#ffffff",
          200: "#ffffff",
          300: "#faf1e4",
          400: "#f3dab8",
          500: "#ecc48c",
          600: "#e5ae60",
          700: "#de9734",
          800: "#bf7d20",
          900: "#946018",
          950: "#7e5215",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
