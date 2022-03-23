const screens = {};
const spacing = {};
for (let i = 1440; i >= 320; i--) {
  screens[`-${i}`] = { max: `${i}px` };
}
// for (let i = 1000; i >= 0; i--) {
//   spacing[`${i}`] = `${i}rem`;
// }
module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '15rem'
      },
      spacing: { ...spacing },
      colors: {
        black: '#000000'
      },
      screens: {
        xs: { max: '475px' },
        sm: { max: '640px' },
        md: { max: '768px' },
        lg: { max: '1024px' },
        xl: { max: '1280px' },
        ...screens
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1440px',
          '@screen xl': {
            maxWidth: '1280px'
          },
          '@screen lg': {
            maxWidth: '1024px'
          },
          '@screen md': {
            maxWidth: '768px'
          },
          '@screen sm': {
            maxWidth: '640px'
          },
          '@screen xs': {
            maxWidth: '100%'
          }
        }
      });
    }
  ],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false
  }
};
