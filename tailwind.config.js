module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGreen: "rgb(31, 199, 212)",
        icons: "rgb(122, 110, 170)",
        navBottom: "rgb(231, 227, 235)",
        siteBackground:
          "linear-gradient(rgb(255, 255, 255) 22%, rgb(215, 202, 236) 100%)",
      },
      boxShadow: {
        button: "rgb(14 14 44 / 40%) 0px -1px 0px 0px inset",
      },
    },
  },
  plugins: [],
};
