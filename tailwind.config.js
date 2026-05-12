/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue', 'cursive'],
        inter: ['Inter', 'sans-serif'],
        disket: ['Disket Mono', 'monospace'],
        geist: ['Geist', 'sans-serif'],
        "geist-mono": ['Geist Mono', 'monospace'],
      },
      animation: {
        rainbow: "glow 2.5s linear infinite",
      },
      keyframes: {
        glow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
}
