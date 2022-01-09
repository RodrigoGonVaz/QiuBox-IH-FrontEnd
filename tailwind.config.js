//tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    fontSize: {
        'xxs': '.55rem',
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'rosamx':  {
        100: '#ffffff',
        200: '#fa28b0',
        300: '#b80478',
        400: '#e6e6e6',
        500: '#fb5ac2',
        600: '#ea0599',
        700: '#039fbe',
        800: '#77c593',
        900: '#0087F5'
      },
      }
    },
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [],
}
//Me quede en Semana 8 día 2 primer video