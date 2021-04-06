const CleanCSS = require("clean-css");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["html", "md", "njk"]);
  for (const ext in ["css", "jpg", "png", "ico"]) {
    eleventyConfig.addPassthroughCopy(`**/*.${ext}`);
  }

  // Markdown Overrides
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#",
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  // CSS minifier
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Clean date formatter
  eleventyConfig.addShortcode("date", (date) =>
    new Intl.DateTimeFormat(undefined, {
      dateStyle: "long",
      timeZone: "UTC",
    }).format(date)
  );

  // For inlining markdown
  eleventyConfig.addPairedShortcode("markdown", (content) => {
    return markdownLibrary.render(content);
  });

  return {
    dir: {
      input: "site",
      output: "build",
    },
  };
};
