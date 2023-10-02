/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        main: {
          "light-100": "rgb(219 234 254)",
          light: "rgb(59 130 246)",
          default: "rgb(30 58 138)",
          dark: "rgb(30 58 138)",
        },
      },
    },
  },
  plugins: [],
};
