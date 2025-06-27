import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Improve development experience
  experimental: {
    // Reduce development build warnings
    optimizePackageImports: ['lucide-react'],
  },
  
  // Disable source maps to prevent console warnings
  productionBrowserSourceMaps: false,
  
  // Webpack configuration to suppress source map generation in development
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable source maps in development to prevent console errors
      config.devtool = false;
    }
    return config;
  },
  
  // Performance optimizations
  images: {
    // Optimize image loading
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
