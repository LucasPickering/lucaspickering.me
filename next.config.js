const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: { providerImportSource: "@mdx-js/react" },
});

module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ["tsx", "md", "mdx"],
  trailingSlash: false, // Trailing slash breaks links on GitHub Pages
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
});
