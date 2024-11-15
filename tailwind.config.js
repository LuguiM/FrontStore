/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color1' : '#0D3A5F',
        'color2' : '#3E4B81',
        'color3' : '#8763AF',
        'color4' : '#E885E5',
        'color5' : '#FFB9F4',
        'color6' : '#C2B0D6',
        'colorWhite' : '#FFFFFF'
      },
    },
  },
  plugins: [],
}

