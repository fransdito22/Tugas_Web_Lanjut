module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./pages/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Custom': ['DM Sans','sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
  },
};
