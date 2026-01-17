/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem"
      }
    },
    extend: {
      colors: { testpink: "#F54927" },
      fontFamily: {
        sans: ['Satoshi', 'sans-serif']
      },
      animation: {
        'move-left': 'move-left 1s linear infinite',
      },
      keyframes: {
        'move-left': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
      },
    },
  },
  plugins: [],
}
