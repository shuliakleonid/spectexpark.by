import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/spectexpark.by' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
