// @ts-check
/** @type {import('next').NextConfig} */


const nextConfig = {
  staticPageGenerationTimeout: 300,
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP'],
    // This is experimental but can
    // be enabled to allow parallel threads
    // with nextjs automatic static generation
    workerThreads: false,
    cpus: 1,
  },
  transpilePackages: ['lodash', 'lodash-es', '@wix/sdk', '@wix/api-client'],
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx', 'json'],
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 86400,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    domains: ['bloggingplatforms.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.website-files.com',
      },
      {
        protocol: 'https',
        hostname: '**.wixstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'bloggingplatforms.app',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // {
          //   key: 'X-Frame-Options',
          //   value: 'SAMEORIGIN'
          // }
        ],
      },

    ]
  }
};

module.exports = nextConfig
// module.exports = withMDX(nextConfig);
