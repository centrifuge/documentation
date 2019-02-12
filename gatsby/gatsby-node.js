exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField, createRedirect } = actions;

  createRedirect({
    fromPath: "/",
    toPath: "/overview/introduction",
    isPermanent: true
  });

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);
    let value = parent.relativePath.replace(parent.ext, "");

    if (value === "index") {
      value = "";
    }

    createNodeField({
      name: `slug`,
      node,
      value: `/${value}`
    });

    createNodeField({
      name: `category`,
      node,
      value: node.frontmatter.category || ``
    });

    createNodeField({
      name: "id",
      node,
      value: node.id
    });

    createNodeField({
      name: "title",
      node,
      value: node.frontmatter.title || parent.name
    });
  }
};
