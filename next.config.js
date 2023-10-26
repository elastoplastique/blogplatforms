/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  staticPageGenerationTimeout: 300,
  extension: /\.mdx$/,
  experimental: {
    // This is experimental but can
    // be enabled to allow parallel threads
    // with nextjs automatic static generation
    workerThreads: false,
    cpus: 1,
  },
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    // domains: ['wix.blogplatforms.app', 'blogplatforms.app', 'assets-global.website-files.com', 'static.wixtatic.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.website-files.com',
      },
      {
        protocol: 'https',
        hostname: '**.wixstatic.com',
      },
    ],
  },
});

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx', 'json'],
  reactStrictMode: true,
};

module.exports = withMDX(nextConfig);
