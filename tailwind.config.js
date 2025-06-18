/** @type {import('tailwindcss').Config} */
export default { // <-- Ensure 'export default' here
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- This line tells Tailwind where to find your React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}