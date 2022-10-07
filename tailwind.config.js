/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#411111',
        'logo-color': '#f25b47',
        'logo-text-color': '#f2efbe',
      },
    },
  },
  plugins: [require("daisyui")],
}
