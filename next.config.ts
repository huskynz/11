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
};

export default nextConfig;
