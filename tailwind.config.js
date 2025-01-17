/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        glow: '0px 0px 15px rgba(255, 255, 255, 0.39)',
      },
      fontFamily: {
        text: ["'Segoe UI'", 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}