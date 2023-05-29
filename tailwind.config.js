/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: ['light'],
  },

  // add daisyUI plugin
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["corporate"],
  },
};
