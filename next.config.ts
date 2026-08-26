import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [100, 75],
    formats: ["image/avif", "image/webp"],
  },
  outputFileTracingIncludes: {
    "/api/projects": ["./public/projects/**/*"],
  },
  experimental: {
    inlineCss: true,
    cssChunking: true,
    optimizeCss: true,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
