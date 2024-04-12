module.exports = {
  root: true,
  parser: "@babel/eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:mdx/recommended",
  ],
  rules: {
    "no-undef": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
  },
  settings: {
    "mdx/code-blocks": true,
    react: {
      version: "detect", // automatically detect the version of React to use
    },
  },
  overrides: [
    {
      files: ["**/*.mdx"],
      extends: ["plugin:mdx/overrides"],
      rules: {
        "mdx/no-unused-expressions": 0,
        "mdx/remark": 1,
      },
    },
  ],
};
