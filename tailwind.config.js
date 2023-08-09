/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cover: "url('@/assets/img/cover.avif')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
