/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: "Inter, sans-serif",
      },
      fontWeight: {
        medium: "500",
      },
      screens: {
        xs: "475px",
        xss: "330px"
      },
    },
  },
  plugins: [],
};
