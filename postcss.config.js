module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-combine-duplicated-selectors': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};
