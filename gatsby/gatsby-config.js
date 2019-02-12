module.exports = {
  siteMetadata: {
    title: `Centrifuge Developer`,
    siteUrl: process.env.URL || "http://localhost:8000",
    docsUrl: `https://github.com/centrifuge/developer.centrifuge.io/tree/develop/gatsby/src/pages`,
    description: `A Decentralized Operating System For The Financial Supply Chain`,
    author: `@centrifuge`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve("./src/components/Layout/index.js"),
          docs: require.resolve("./src/components/DocsLayout/index.js")
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/docs/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `centrifuge-developers`,
        short_name: `developers`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#2762ff`,
        display: `minimal-ui`,
        icon: `src/images/centrifuge-logo.png`
      }
    },
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-netlify`
  ]
};
