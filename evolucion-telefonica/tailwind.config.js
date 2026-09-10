/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#003D6B',
          800: '#004D7F',
          700: '#005D93',
        },
        accent: {
          500: '#FF9500',
          600: '#E88600',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
