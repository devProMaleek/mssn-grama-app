import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/lib/**/*.js",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/assets/images/hero-image.svg')",
        'content': "url('/assets/images/background-overlay.png')",
      },
      boxShadow: {
        "inner-hero": "-5px 5px 10px white inset, 5px -5px 10px #FFE10C inset",
      },
      clipPath: {
        'diagonal': 'polygon(0 0, 100% 0, 100% 100%)',
      },
    },
  },
  darkMode: "class",
  variants: {
    extend: {
      clipPath: ['responsive'],
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#FFE10C",
              50: "#fffcda",
              100: "#fff6ad",
              200: "#ffef7d",
              300: "#ffe94b",
              400: "#ffe31a",
              500: "#e6c900",
              600: "#b39c00",
              700: "#807000",
              800: "#4d4300",
              900: "#1c1600",
            },
          },
        },
      },
    }),
    require("flowbite/plugin"),
  ],
};
export default config;
