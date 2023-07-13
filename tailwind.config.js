/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        bob: {
          boldGray: "#767676",
          borderGray: "#AEAEAE",
          orange: "#FF9900",
          background: "#F5F5F5",
        },
      },
      aspectRatio: {
        picture: "12/10",
      },
    },
  },
  plugins: [],
};
