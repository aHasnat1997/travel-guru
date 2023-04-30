/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#e8961b",

          "secondary": "#ffeacc",

          "accent": "#fc9fcf",

          "neutral": "#23252E",

          "base-100": "#EBE8E2",

          "info": "#4480E9",

          "success": "#6ADCCF",

          "warning": "#EFC143",

          "error": "#E87887",
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

