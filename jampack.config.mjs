const default_options = {
  general: {
    browserslist: 'defaults', // defaults = '> 0.5%, last 2 versions, Firefox ESR, not dead'
  },
  html: {
    add_css_reset_as: 'inline',
    sort_attributes: false,
  },
  css: {
    inline_critical_css: true,
  },
  js: {
    compressor: 'esbuild',
  },
  image: {
    embed_size: 1500,
    srcset_min_width: 390 * 2, // HiDPI phone
    srcset_max_width: 784, // 4K
    max_width: 784,
    external: {
      process: 'download',
      src_include: /^.*$/,
      src_exclude: null,
    },
    cdn: {
      process: 'optimize',
      src_include: /^.*$/,
      src_exclude: null,
    },
    compress: true,
    jpeg: {
      options: {
        quality: 75,
        mozjpeg: true,
      },
    },
    png: {
      options: {
        compressionLevel: 9,
      },
    },
    webp: {
      options_lossless: {
        effort: 4,
        quality: 77,
        mode: 'lossless',
      },
      options_lossly: {
        effort: 4,
        quality: 77,
        mode: 'lossly',
      },
    },
    svg: {
      optimization: true,
      add_width_and_height: false,
    },
  },
  misc: {
    prefetch_links: 'off',
  },
};

export default default_options;