module.exports = {
  root: true,
  parser: "@babel/eslint-parser", // or '@typescript-eslint/parser' if you're using TypeScript
  extends: [
    "eslint:recommended",
    "plugin:react/recommended", // if you're using React
    "plugin:mdx/recommended", // add this line
  ],
  rules: {
    "no-undef": "off",
    "no-unused-vars": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    // add your custom rules here
  },
  settings: {
    react: {
      version: "detect", // automatically detect the version of React to use
    },
  },
  overrides: [
    // add this block
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
