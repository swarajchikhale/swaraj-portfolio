/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "/swaraj-portfolio",
  assetPrefix: "/swaraj-portfolio",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
