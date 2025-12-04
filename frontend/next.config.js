/** @type {import('next').NextConfig} */
const nextConfig = {
  // React strict mode for better development
  reactStrictMode: true,

  // Enable SWC minification
  swcMinify: true,

  // Image optimization domains
  images: {
    domains: ['ypl.app', 'dev.ypl.app'],
  },

  // Environment variables available to the browser
  env: {
    APP_NAME: 'YPL CORE',
    APP_VERSION: '1.0.0',
    APP_COMPANY: 'YPL GRUP INC',
  },

  // Headers for security (HSTS required for .app)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
