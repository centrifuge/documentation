const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

exports.onCreateNode = (args) => {
  const { node, actions, getNode } = args;
  const { createNodeField } = actions;

  // Add New Fields To GraphQL
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    const instanceName = getNode(node.parent).sourceInstanceName;
    createNodeField({
      name: `instanceName`,
      node,
      value: instanceName,
    });

    createNodeField({
      name: `file`,
      node,
      value: `${instanceName}${value.slice(0, -1)}/index.md`,
    });

    createNodeField({
      name: `slug`,
      node,
      value: node.frontmatter?.slug
        ? node.frontmatter?.slug
        : `/${instanceName}${value}`,
    });

    createNodeField({
      name: `category`,
      node,
      value: node.frontmatter.category || ``,
    });

    createNodeField({
      name: "id",
      node,
      value: node.frontmatter.id || node.id,
    });

    createNodeField({
      name: "title",
      node,
      value: node.frontmatter.title || node.parent.name,
    });

    createNodeField({
      name: "subtitle",
      node,
      value: node.frontmatter.subtitle || ``,
    });
  }
};

exports.createPages = ({ graphql, actions, reporter }) => {
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
                    instanceName
                  }
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          reporter.panicOnBuild("Error loading MDX result", result.errors);
          reject(result.errors);
        }
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
            context: { id: node.id, instanceName: node.fields.instanceName },
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
            use: loaders.null(),
          },
          {
            test: /\.mdx?$/,
            use: ["babel-loader", "@mdx-js/loader"],
          },
        ],
      },
    });
  }
};
