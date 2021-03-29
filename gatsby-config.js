module.exports = {
  siteMetadata: {
    title: `Centrifuge Documentation`,
    siteUrl: process.env.URL || "http://localhost:8000",
    description: `Learn about Centrifuge`,
    author: `@centrifuge`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `code-of-conduct`,
    //     path: `${__dirname}/docs/code-of-conduct.md`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `learn`,
        path: `${__dirname}/docs/learn`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `use`,
        path: `${__dirname}/docs/use`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `build`,
        path: `${__dirname}/docs/build`,
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        hastPlugins: [
          require("rehype-slug"),
          require("remark-math"),
          require("remark-image-attributes"),
          require("rehype-katex"),
        ],
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
        icon: `src/images/centrifuge-logo.png`,
      },
    },
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-typescript`,
  ],
};
