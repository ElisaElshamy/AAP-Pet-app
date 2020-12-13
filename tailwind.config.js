module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: '#F9665E',
          secondary: {
            1: '#CC563D',
            2: '#883929',
          },
        },
        grey: {
          DEFAULT: '#B3B3B3',
          secondary: {
            1: '#DADADA',
            2: '#F9F9F9',
            3: '#F2F2F2',
            4: '#ECECEC',
            5: '#DFDFDF',
          },
        },
        lemon: {
          DEFAULT: '#FFCC1B',
          secondary: {
            1: '#D1A717',
            2: '#9E7F11',
          },
        },
        mint: {
          DEFAULT: '#00CCA8',
          secondary: {
            1: '#00353C',
          },
        },
        night: {
          DEFAULT: '#242424',
        },
        turquoise: {
          DEFAULT: '#00BFDA',
          secondary: {
            1: '#0099B8',
          },
        },
      },
      fontSize: {
        '3.5xl': '2rem',
      },
      gridTemplateColumns: {
        '3colsmd': 'repeat(3, minmax(0, 224px))',
        '3colslg': 'repeat(3, minmax(224px, 368px))',
      },
      letterSpacing: {
        tightest: '-0.15px',
      },
      maxWidth: {
        '7.5xl': '87.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
