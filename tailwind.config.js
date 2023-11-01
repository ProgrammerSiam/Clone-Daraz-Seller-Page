/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FD5417",
        white: "#FFFFFF",
        black: "#000000",
      },
      boxShadow: {
        "3xl": "0 15px 40px 15px rgba(51 226 160 / 0.1)",
        "4xl": "0px 16px 30px rgba(51 226 160 / 0.1)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1120px",
      xl: "1240px",
      xxl: "1560px",
    },
  },
  plugins: [],
};
