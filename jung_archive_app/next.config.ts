import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  // Ensure markdown content is bundled with Vercel serverless output.
  // We keep JUNG_ARCHIVE_FINAL at repo root, but copy it into `content/__archives__` during `prebuild`.
  outputFileTracingIncludes: {
    "**/*": ["content/**/*"],
  },
};

export default nextConfig;
