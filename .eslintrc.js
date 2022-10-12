module.exports = {
  extends: [
    "@lucaspickering/eslint-config/react",
    "plugin:@next/next/recommended",
  ],
  rules: {
    // We use next's <Link> instead
    "jsx-a11y/anchor-is-valid": "off",
  },
};
