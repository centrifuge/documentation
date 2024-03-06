const siteUrl = process.env.URL || "http://localhost:8000";
const katex = import("rehype-katex");
const slug = import("rehype-slug");
const imageAttributes = import("remark-image-attributes");
const math = import("remark-math");

module.exports = {
  siteMetadata: {
    title: `Centrifuge Documentation`,
    siteUrl,
    description: `Learn about Centrifuge`,
    author: `@centrifuge`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        sitemap: `${siteUrl}/sitemap.xml`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `code-of-conduct`,
        path: `${__dirname}/docs/code-of-conduct`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `getting-started`,
        path: `${__dirname}/docs/getting-started`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `user`,
        path: `${__dirname}/docs/user`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `developer`,
        path: `${__dirname}/docs/developer`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        remarkPlugins: [math, imageAttributes],
        rehypePlugins: [katex, slug],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              backgroundColor: "none",
              disableBgImage: true,
            },
          },
          {
            resolve: "gatsby-remark-image-attributes",
            options: {
              styleAttributes: ["box-shadow", "margin"],
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-redirect-from",
      options: {
        query: "allMdx",
      },
    },
    "gatsby-plugin-meta-redirect",
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `centrifuge-developers`,
        short_name: `centrifuge`,
        start_url: `/cent-node/overview/introduction/`,
        background_color: `#fff`,
        theme_color: `#2762ff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`,
      },
    },
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-typescript`,
  ],
};

