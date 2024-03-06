import AnchorLinks from "./AnchorLinks";
import React from "react";

const AnchorMenu = ({ mdx, size }) => {
  return size !== "small" ? (
    <>
      {mdx.frontmatter?.category !== "subpage" && (
        <AnchorLinks
          size={size}
          slug={mdx.fields.slug}
          links={mdx.tableOfContents.items}
        />
      )}
      {mdx.frontmatter?.category === "subpage" && (
        <AnchorLinks
          size={size}
          slug={mdx.fields.slug}
          links={mdx.tableOfContents.items[0].items}
        />
      )}
    </>
  ) : null;
};

export default AnchorMenu;
