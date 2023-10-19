/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: 'jit',
  theme: {
    extend: {
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
      colors: {
        'tech-yellow': 'rgb(255,195,39)',
        'tech-pink': 'rgb(255,43,187)',
        'tech-purple': 'rgb(54,2,126)',
        'tech-black': 'rgb(26,26,26)',
      },
    },
    fontSize: {
      xs: '0.5rem',
      sm: '0.8rem',
      md: '1rem',
      base: '1.2rem',
      lg: '2rem',
      xl: '3.7rem',
      '2xl': '4rem',
      '3xl': '5rem',
      '4xl': '6rem',
      '5xl': '8rem',
    },
  },
  plugins: [],
};
