const screens = {};
for (let i = 1440; i >= 320; i--) {
	screens[`-${i}`] = { max: `${i}px` };
}
module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        '2xl': { max: '1536px' },
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
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ]
};
