import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // @ts-ignore – DaisyUI adds this key at runtime, but TypeScript doesn’t recognize it
  daisyui: {
    themes: ["light", "dark", "cupcake", "dracula"],
  },
};

export default config;
