/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#f5f5f5',
        'deep-black': '#333333',
        'gradient-start': '#8B5CF6', // Mor
        'gradient-middle': '#EC4899', // Pembe
        'gradient-end': '#EF4444', // Kırmızı
      },
    },
  },
  plugins: [],
}

