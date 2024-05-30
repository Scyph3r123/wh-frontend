/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'auto',
          }
        }
      }
    },
    fontFamily: {
      'karla' : ['Karla', 'sans-serif'],
      'spectral' : ['Spectral', 'serif']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}