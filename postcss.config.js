module.exports = {
  plugins: [
    // 'postcss-import',
    // 'postcss-combine-duplicated-selectors',
    // ['tailwindcss/nesting', 'postcss-nesting'],
    // // 'postcss-flexbugs-fixes',
    // [
    //   "postcss-preset-env",
    //   {
    //     features: { 'nesting-rules': false },
    //     "autoprefixer": {
    //       "flexbox": "no-2009",
    //       "grid": "autoplace"
    //     },
    //     "stage": 3,
    //     "features": {
    //       "custom-properties": false
    //     }
    //   }
    // ],
    'tailwindcss',
    'autoprefixer',
  ],
};
// module.exports = {
//   plugins: {
//     'postcss-import': {},
//     'postcss-combine-duplicated-selectors': {},
//     'tailwindcss/nesting': 'postcss-nesting',
//     '@fullhuman/postcss-purgecss':
//     {
//       content: [
//         './src/pages/**/*.{js,jsx,ts,tsx}',
//         './src/components/**/*.{js,jsx,ts,tsx}'
//       ],
//       defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
//       safelist: ["html", "body"]
//     },
//     tailwindcss: {},
//     autoprefixer: {},
//     ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
//   },
// };
