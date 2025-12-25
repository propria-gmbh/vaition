import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/vaition",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
