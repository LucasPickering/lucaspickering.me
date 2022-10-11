const withMDX = require("@next/mdx")();

module.exports = withMDX({
  pageExtensions: ["tsx", "md", "mdx"],
  trailingSlash: false, // Trailing slash breaks links on GitHub Pages
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ["res.cloudinary.com"],
  },
});
