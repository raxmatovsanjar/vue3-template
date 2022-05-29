module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "",
    tailwindcss: {},
    "postcss-simple-vars": {},
    "postcss-mixins": {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  },
};
