/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/header.webp')",
        logo: "url('/logo.webp')",
      },
      colors: {
        asme: {
          "blue-100": "#B8D9E9",
          "blue-200": "#6BABCF",
          "blue-300": "#4F8EB5",
          "blue-400": "#38769F",
          "blue-500": "#1A5582",
          "blue-600": "#133A5B",
          transparentBlue: "#233646D9",
          textShadow: "#D7E3EB",
          white: "#FFFFFF",
          black: "#000000",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
