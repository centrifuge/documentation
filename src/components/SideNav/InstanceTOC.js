import React from "react";
import { Box, Image } from "grommet";
import NodeTOC from "./NodeTOC";
import InternalLink from "./InternalLink";

const InstanceTOC = ({ nodes, size, title, name, icon }) => {
  const subpages = nodes.filter((node) => {
    return node.slug.split("/").filter(Boolean).length === 3;
  });

  const subpagesNodes = nodes
    .filter((node) => {
      // remove subpages from nodes
      return node.slug.split("/").filter(Boolean).length === 2;
    })
    .map((node) => {
      // find pages that have subpages
      const subpage = subpages.find(
        (subpage) =>
          node.slug.split("/").filter(Boolean)[1] ===
          subpage.slug.split("/").filter(Boolean)[1]
      );
      if (subpage) {
        // nest subpages into parents table of contents
        const toc = node.tableOfContents?.items?.map((item) => {
          if (item.title === subpage.category) {
            item.items = subpage.tableOfContents.items;
          }
          return item;
        });
        node.tableOfContents.items = toc;
        return node;
      }
      return node;
    });

  return (
    <Box gap="small">
      {size === "small" && (
        <Box direction="row" align="center" gap="small">
          <Image src={icon} height="20px" />
          <InternalLink
            primary
            altFont
            size="large"
            href={`/${name}/`}
            label={title}
          />
        </Box>
      )}
      <Box gap="0">
        {subpagesNodes.map((node, i) => {
          return <NodeTOC key={i} {...node} size={size} />;
        })}
      </Box>
    </Box>
  );
};

export default InstanceTOC;
