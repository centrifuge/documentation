const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField, createRedirect } = actions;

  // Redirect
  createRedirect({
    fromPath: "/",
    toPath: "/docs/overview/introduction",
    isPermanent: true
  });

  // Add New Fields To GraphQL
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `file`,
      node,
      value: `docs${value.slice(0, -1)}.md`
    });

    createNodeField({
      name: `slug`,
      node,
      value: `docs${value}`
    });

    createNodeField({
      name: `category`,
      node,
      value: node.frontmatter.category || ``
    });

    createNodeField({
      name: "id",
      node,
      value: node.frontmatter.id || node.id
    });

    createNodeField({
      name: "title",
      node,
      value: node.frontmatter.title || parent.name
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx(filter: { fields: { title: { ne: "404" } } }) {
              edges {
                node {
                  id
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.error(result.errors);
          reject(result.errors);
        }

        // We'll call `createPage` for each result
        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            // This is the slug we created before
            // (or `node.frontmatter.slug`)
            path: node.fields.slug,

            // This component will wrap our MDX content
            component: path.resolve(`./src/components/DocsLayout/index.js`),

            // We can use the values in this context in
            // our page layout component
            context: { id: node.id }
          });
        });
      })
    );
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /autocomplete.js/,
            use: loaders.null()
          }
        ]
      }
    });
  }
};
