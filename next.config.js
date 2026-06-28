/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  distDir: "dist",
  basePath: isGithubActions ? "/swaraj-portfolio" : "",
  assetPrefix: isGithubActions ? "/swaraj-portfolio" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
