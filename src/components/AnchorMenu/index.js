import AnchorLinks from "./AnchorLinks";
import React from "react";

const AnchorMenu = ({ mdx }) => {
  return (
    <>
      {mdx.frontmatter?.category !== "subpage" && (
        <AnchorLinks slug={mdx.fields.slug} links={mdx.tableOfContents.items} />
      )}
      {mdx.frontmatter?.category === "subpage" && (
        <AnchorLinks
          slug={mdx.fields.slug}
          links={mdx.tableOfContents.items[0].items}
        />
      )}
    </>
  );
};

export default AnchorMenu;
