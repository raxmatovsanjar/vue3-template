const screens = {};
const spacing = {};
for (let i = 1440; i >= 320; i--) {
  screens[`-${i}`] = { max: `${i}px` };
}
for (let i = 1000; i >= 0; i--) {
  spacing[`${i}`] = `${i}rem`;
}
module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      spacing: { ...spacing },
      colors: {
        black: '#000000'
      },
      screens: {
        xl: { max: '1280px' },
        lg: { max: '1024px' },
        md: { max: '768px' },
        sm: { max: '640px' },
        xs: { max: '475px' },
        '2xs': { max: '375px' },
        ...screens
      }
    }
  },
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false
  }
};
