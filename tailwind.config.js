/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          300: "#39DD32",
          400: "#292D32"
        },
        gray: {
          100: "#CCCCCC",
          200: "#F5F5F5",
          300: "#B5B5B5",
          400: "#838080"
        },
        white: "#FFFFFF"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        xl: "15px"
      }
    },
  },
  plugins: [],
};
