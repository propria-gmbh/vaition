import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "", // Ensure assets are loaded from root for custom domain
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
