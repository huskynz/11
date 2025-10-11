import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        huskyPink: {
          DEFAULT: '#ff4fa3',
        },
        huskyPurple: {
          DEFAULT: '#b84fff',
        },
        huskyBlue: {
          DEFAULT: '#e3eafe', // much lighter blue for backgrounds
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
