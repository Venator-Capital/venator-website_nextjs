import type { NextConfig } from "next";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import withBundleAnalyzer from "@next/bundle-analyzer";

const baseConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
const withAnalyzer = withBundleAnalyzer?.({ enabled: process.env.NEXTJS_BUNDLE_ANALYZER === "1" }) ?? ((c: NextConfig) => c);

const nextConfig = withAnalyzer(baseConfig);

export default nextConfig;
