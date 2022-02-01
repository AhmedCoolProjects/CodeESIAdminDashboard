module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      hieght: {
        c350: "350px",
        c450: "450px",
        c150: "150px",
      },
      width: {
        c350: "350px",
        c450: "450px",
        c150: "150px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide", "@tailwindcss/line-clamp")],
};
