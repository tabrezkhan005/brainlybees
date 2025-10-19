import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only use static export for production static builds
  // Remove output: 'export' to allow API routes to work
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
