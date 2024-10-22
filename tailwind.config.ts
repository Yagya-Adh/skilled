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
        skillItalic: ["Playwrite GB S", "cursive"],
        skillArmia: ["Arima", "system-ui"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        skilled: {
          green: {
            30: "#6fedb2",
          },

          /* 7ad493ea\>: #0e0e0e;
    --black: black;
    --paragraph-gray: #5f5f5f;
    --primary: #6fedb2;
    --secondary: #afebf4;
    --primary-light: #ebfeda;
    --gray: #8c8999;
    --white: white;
    --dark-gray\<deleted\|variable-e2382e90\>: #afafaf;
    --dark-gray-50\<deleted\|variable-816eb261\>: #afafaf80; */
        },
      },
    },
  },
  plugins: [],
};
export default config;
