const CleanCSS = require("clean-css");
const Image = require("@11ty/eleventy-img");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const path = require('path');

const inputDir = './site';
const outputDir = './build';

module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "html",
    "md",
    "njk",
    // These ones aren't actually templates but this is the only way to get 11ty
    // to watch+copy these files
    "jpg",
    "png",
    "ico",
    "svg",
  ]);

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

  // This makes fancy rescaled versions of images
  eleventyConfig.addShortcode("image", async (src, alt, sizes="(min-width: 30em) 50vw, 100vm") => {
    let metadata = await Image(path.join(inputDir, src), {
      widths: [600, 1200],
      formats: ["jpeg"],
      urlPath: '/assets/generated',
      outputDir: path.join(outputDir, '/assets/generated'),
    });

    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    };

    const image = Image.generateHTML(metadata, imageAttributes);
    return `<div class="img-container">${image}<em>${alt}</em></div>`
  });

  // For inlining markdown
  eleventyConfig.addPairedShortcode("markdown", (content) => {
    return markdownLibrary.render(content);
  });

  return {
    dir: {
      input: inputDir,
      output: outputDir,
    },
  };
};
