import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f8ff",
          600: "#315ec9",
          900: "#0f1b3f"
        }
      }
    }
  },
  plugins: []
};

export default config;
