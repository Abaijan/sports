/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      "1": "3px",
      "2": "6px",
      "3": "9px"
    },

    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
      function({ addUtilities }) {
    addUtilities({
      '.scrollbar-hidden': {
        'scrollbar-width': 'none', /* Firefox */
        '-ms-overflow-style': 'none' /* IE и Edge */
      },
      '.scrollbar-hidden::-webkit-scrollbar': {
        display: 'none' /* Chrome, Safari */
      }
    });
  }],
};
