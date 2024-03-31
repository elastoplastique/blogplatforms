module.exports = {
  plugins: [
    'postcss-import',
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
    "tailwindcss",
    "autoprefixer",
,

    ...(process.env.NODE_ENV === 'production' ? [
      "cssnano",
      // [
      //   '@fullhuman/postcss-purgecss', {
      //     content: [
      //       // './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
      //       // './src/components/**/*.{js,jsx,ts,tsx}',
      //       // './src/pages/**/*.{js,jsx,ts,tsx}',
      //       // 'dist/**/*.{js,jsx,ts,tsx}',
      //       // './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
      //       // './node_modules/@radix-ui/**/*.{js,ts,jsx,tsx}',
      //       // './node_modules/framer-motion/**/*.{js,ts,jsx,tsx}',
      //       // './src/**/*.{ts,tsx,js,jsx}',
      //       './.next/**/*.{ts,tsx,js,jsx}',
      //       // './.next/**/*.{js,jsx,ts,tsx,html}',
      //     ],
      //     // css: ['./src/styles/globals.css'],
      //     output: 'dist',
      //     defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      //     safelist: ["html", "body"],
      //     // keyframes: true,
      //     // fontFace: true,
      //     // variables: false
      //   }
      // ]
    ] : []),
    // require('postcss-combine-duplicated-selectors'),
    // require('tailwindcss/nesting')('postcss-nesting'),
    // require('postcss-flexbugs-fixes'),
    // require('postcss-preset-env')({
    //   "autoprefixer": {
    //     "flexbox": "no-2009"
    //   },
    //   "stage": 3,
    //   "features": {
    //     "custom-properties": true
    //   }
    // }),
  ]
}
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
