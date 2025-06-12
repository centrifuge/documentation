import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { redirects } from "./src/redirects";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Centrifuge Docs",
  tagline: "Centrifuge user documentation",
  favicon: "img/logomark-dark.png",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",

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
          position: "right",
          label: "Getting Started",
          exact: true,
        },
        {
          type: "docSidebar",
          sidebarId: "user-documentation",
          position: "right",
          label: "User Documentation",
          exact: true,
        },
        {
          type: "docSidebar",
          sidebarId: "developer-documentation",
          position: "right",
          label: "Developer Documentation",
          exact: true,
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
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
  ],
};

export default config;
