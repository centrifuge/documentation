import { visit } from "unist-util-visit";

/**
 * This plugin is used to add custom width to images in markdown.
 *
 * E.g: ![Alt test](./path/to/image/image.png#width=70%;)
 *
 * In the past we used gatsby-remark-image-attributes to get the behavior
 * but the plugin is stale and doesn't support Gatsby v5.
 *
 * This plugin is a (hacky) workaround to get the same behavior. It will
 * parse the image url and if a width parameter is given it will add it to
 * the node title (all other attributes are stripped by other gatsby plugin).
 * In the MDX component we can then use the title to set the width of the image.
 * See src/components/DocsContent/index.js for the implementation.
 */

export default async ({ markdownAST }) => {
  visit(markdownAST, "image", async (node) => {
    const urlParts = node.url.split("#");
    if (urlParts.length > 1) {
      const params = new URLSearchParams(urlParts[1]);
      const width = params.get("width");
      if (width) {
        node.url = `${urlParts[0]}`;
        node.type = "image";
        node.title = `width=${width.replace(";", "")}`;
      }
    }
  });
};
