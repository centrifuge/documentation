import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { redirects } from "./src/redirects";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Centrifuge Docs",
  tagline: "Centrifuge documentation",
  favicon: "img/favicon.png",

  url: "https://docs.centrifuge.io",
  baseUrl: "/",

  onBrokenLinks: "ignore",
  onBrokenAnchors: "ignore",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "ignore",
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        blog: false,
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/centrifuge-logo-full.svg",
    navbar: {
      title: "Centrifuge Docs",
      logo: {
        alt: "Centrifuge Docs Logo",
        src: "img/centrifuge-logo.svg",
        srcDark: "img/centrifuge-logo-dark.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "getting-started",
          position: "left",
          label: "Getting Started",
          exact: true,
        },
        {
          type: "docSidebar",
          sidebarId: "user-documentation",
          position: "left",
          label: "User Documentation",
          exact: true,
        },
        {
          type: "docSidebar",
          sidebarId: "user-documentation-v2",
          position: "left",
          label: "User Documentation v2",
          exact: true,
        },
        {
          type: "docSidebar",
          sidebarId: "developer-documentation",
          position: "left",
          label: "Developer Documentation",
          exact: true,
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["solidity"],
    },
    algolia: {
      appId: "Q7BQ8D4TVA",
      apiKey: "2a75cfd883570849b5343da30e1a7f6c",
      indexName: "centrifuge",
      contextualSearch: true,
      insights: false,
    },
  } satisfies Preset.ThemeConfig,
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
  ],
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: redirects,
      },
    ],
    "./src/plugins/llms-txt-plugin",
    "./src/plugins/markdown-source-plugin",
  ],
};

export default config;
