/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'rubyhospital.ug',
      },
      {
        protocol: 'https',
        hostname: 'cdn.rubyhospital.ug',
      },
      {
        protocol: 'https',
        hostname: '**.rubyhospital.ug',
      },
    ],
  },
};

module.exports = nextConfig;
