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
      },
      width: {
        'badge-sm': '82.6px',
        'badge-md': '118.25px',
      },
      height: {
        'badge-sm': '30.1px',
        'badge-md': '43px',
      },
    },
  },
  plugins: [],
} satisfies Config;
