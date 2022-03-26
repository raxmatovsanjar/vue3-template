const screens = {};
const spacing = {};
for (let i = 1440; i >= 320; i--) {
  screens[`-${i}`] = { max: `${i}px` };
}
for (let i = 500; i >= 0; i--) {
  spacing[`${i}`] = `${i}rem`;
}
module.exports = {
  theme: {
    container: {
      center: true,
      padding: '15rem',
      screens: {
        xs: { max: '100%' },
        sm: { max: '640px' },
        md: { max: '768px' },
        lg: { max: '1024px' },
        xl: { max: '1280px' }
      }
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
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false
  }
};
