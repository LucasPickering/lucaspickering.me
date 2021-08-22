const withMDX = require("@next/mdx")();

module.exports = withMDX({
  pageExtensions: ["tsx", "md", "mdx"],
  trailingSlash: false, // Trailing slash breaks links on GitHub Pages
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
});
