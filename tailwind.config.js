/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "4side": "0 1px 6px #90909090",
      },
    },
  },
  plugins: [],
};
