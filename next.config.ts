import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    unoptimized: true,
    remotePatterns: [

        {
            protocol: 'https',
            hostname: 'i.ibb.co.com',
            port: '',
            pathname: '/**'
        },
        {
            protocol: 'https',
            hostname: 'ibb.co.com',
            port: '',
            pathname: '/**'
        }
    ]
  }
};

export default nextConfig;
