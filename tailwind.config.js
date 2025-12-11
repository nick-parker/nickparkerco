/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,jsx,mdx}',
    './pages/**/*.{js,jsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        'prose': '150ch',
      },
    },
  },
  plugins: [],
}
