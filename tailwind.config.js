/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        "vega-yellow-800": "#F28E00",

        "vega-blue-800": "#2E406B",
        "vega-blue-900": "#27365B",
        "vega-blue-300": "#E3E7FF",

        "vega-gray-300": "#D6D8E1",
        "vega-gray-400": "#D9D9D9",

        "vega-gray-600": "#6D7882",
        "vega-gray-800": "#404040",

        "vega-green-800": "#008040",
      },
      fontFamily: {
        "vega-poppins": ["Poppins", "serif"],
      },
    },
  },
  plugins: [],
};
