/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 20px rgba(255, 105, 180, 0.5)",
      },
    },
  },
  plugins: [],
};
