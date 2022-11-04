/** @type {import('next').NextConfig} */
/** @type {import('next-sitemap').IConfig} */ /** @type {import('next-sitemap').IConfig} */

const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["images.microcms-assets.io"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = withVanillaExtract(nextConfig);
