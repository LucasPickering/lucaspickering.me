module.exports = {
  env: {
    node: true, // for "process"
    browser: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "prettier",
    "jsx-a11y",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@next/next/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  rules: {
    "no-console": "warn",
    "no-unused-vars": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/no-unescaped-entities": ["error", { forbid: ["<", ">"] }],
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/no-autofocus": "off",
    // We use next's <Link> instead
    "jsx-a11y/anchor-is-valid": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": ["error", { fixToUnknown: true }],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    "@typescript-eslint/no-inferrable-types": [
      "error",
      { ignoreParameters: true },
    ],
    "@typescript-eslint/camelcase": "off",
  },
  overrides: [
    {
      // Special config files
      files: ["*.js", "*.mjs"],
      parserOptions: {
        ecmaVersion: 3,
        project: null,
      },
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
