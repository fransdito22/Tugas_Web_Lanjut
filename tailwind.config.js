module.exports = {
  purge: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "aqua"],
  },
};
