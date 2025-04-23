import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://chatcore.online/api/:path*', // куда на самом деле отправлять
      },
    ];
  },
};

module.exports = nextConfig;
