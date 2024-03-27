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
        rubik: ['Rubik', 'sans-serif'],
      },
    },
    colors: {
      purple: "#A729F5",
      darkNavy: "#313E51",
      navy:"#3B4D66",
      greyNavy:"#626C7F",
      lightGrey:"#F4F6FA",
      lightBluish:"#F4F6FA",
      white:"#FFFFFF",
      green:"#26D782",
      red:"#EE5454",
      maxLigthPurple:"#F6E7FF"
    },
  },
  plugins: [],
};
export default config;
