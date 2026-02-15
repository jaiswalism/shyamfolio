import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Find the default rule that handles svg
    const assetRule = config.module.rules.find((rule: any) =>
      rule?.test?.test?.(".svg")
    );

    // Exclude svg from that rule
    if (assetRule) {
      assetRule.exclude = /\.svg$/i;
    }

    // Add SVGR loader
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;