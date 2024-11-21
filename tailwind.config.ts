import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgSection: "rgba(241, 241, 240, 1)",
        bgAbout: "rgba(253, 253, 253, 1)",
        bgProject: "#050c1c",
        textMediumGray: "rgba(121, 121, 121, 1)"
      },
    },
  },
  plugins: [daisyui],
};
export default config;
