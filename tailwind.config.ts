import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This lets you use className="font-inter" if you want, 
        // or just makes it the default sans font.
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;