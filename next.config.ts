import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export', // Tells Next.js to export static HTML/CSS/JS files
  images: {
    unoptimized: true, // Required for static exports when using next/image
  }
};

export default nextConfig;
