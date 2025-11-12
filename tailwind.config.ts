import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Inter", "system-ui"]
      },
      colors: {
        brand: {
          50: "#F4FBFF",
          100: "#DBF2FF",
          200: "#B9E4FF",
          300: "#87D1FF",
          400: "#4ABEFF",
          500: "#1DA6FF",
          600: "#0C83DB",
          700: "#0F69AD",
          800: "#135487",
          900: "#164773"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(56, 189, 248, 0.25)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: [forms, typography]
};

export default config;
