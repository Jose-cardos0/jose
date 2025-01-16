import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "bg-custom": "#1B1B1B",
        "border-custom": "#262626",
        Forground: "#171717",
      },
      fontFamily: {
        Roboto: "Roboto",
      },
    },
  },
  plugins: [],
} satisfies Config;
