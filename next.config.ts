import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //output: "export",
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '47.128.91.158',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: '47.128.91.158',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
