const ESLintWebpackPlugin = require("eslint-webpack-plugin");

module.exports = function override(config) {
  // Find the nested rules array that we use
  const rules = config.module.rules.find((obj) => "oneOf" in obj).oneOf;

  // Add markdown loader. Has to go first to override the wildcard at the end
  rules.unshift({
    test: /\.md$/i,
    use: "raw-loader",
  });

  // Remove the eslint webpack plugin, cause it sucks. who tf wants lints in the browser
  config.plugins = config.plugins.filter(
    (plugin) => !(plugin instanceof ESLintWebpackPlugin)
  );

  return config;
};
