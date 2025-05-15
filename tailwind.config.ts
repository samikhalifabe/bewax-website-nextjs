import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'bewax-green': '#99c00d', // Approximate green color from the original site
        'bewax-blue': '#21c2f8', // Approximate blue color from the original site
        'bewax-dark': '#2c3e50', // Approximate dark text/heading color
        'bewax-gray': '#4e515b', // Approximate gray text color
        'bewax-light-gray': '#a1b1bc', // Approximate light gray text color
      },
    },
  },
  plugins: [],
};
export default config;
