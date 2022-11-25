/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes:{
        'fade-in-down':{
          '0%': {
            opacity:'0',
            transform:'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation:{
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      }
    },
  },
  plugins: [],
  screens: {
    tablet: "640px",
    // => @media (min-width: 640px) { ... }

    laptop: "1024px",
    // => @media (min-width: 1024px) { ... }

    desktop: "1280px",
    // => @media (min-width: 1280px) { ... }
  },
}