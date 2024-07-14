import { PiStrategy } from "react-icons/pi";
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
        sans: [
          'system-ui',
          {
            fontFeatureSettings: '"kern", "liga", "clig", "calt"',
            fontVariationSettings: '"wght" 400'
          }
        ],
        mono: [
          'Menlo',
          {
            fontFeatureSettings: '"liga", "dlig", "hlig", "calt"',
            fontVariationSettings: '"wght" 400'
          }
        ]
      },
      colors: {
        'menu-selected': '#0091ff',
        'background-left-menu': '#0091ff',
        'backgroround-left-menu-selected': '#006edc',
      },
      spacing: {
        '4.5': '1.125rem',
      },
      screens: {
        'xs': { 'max': '640px' },
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class'
    })
  ],
};

export default config;
