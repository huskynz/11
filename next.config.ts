import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'serv.husky.nz',
      },
    ],
  },
  experimental: {
    globalNotFound: true,
  },
};

export default nextConfig;
