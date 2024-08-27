/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "white": "#ffffff",
      "blue": "#2563ea",
      "gray": "#9e9e9e"
    },
    screens: {
      'sm': '640px',

      'md': '750px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    }
  },
  plugins: [],
};
