import React from "react";
import { Box, Image } from "grommet";
import NodeTOC from "./NodeTOC";
import InternalLink from "./InternalLink";

const InstanceTOC = ({ nodes, size, title, name, icon }) => {
  const parentPages = [];
  const subpagesNodes = nodes
    .map((node) => {
      if (node.category) {
        // store routes of parent pages if child page has a category
        parentPages.push(
          node.slug.split("/").filter(Boolean).splice(0, 2).join("/")
        );
      }
      return node;
    })
    .map((node) => {
      if (
        // find parent page route that matches child page route
        parentPages.includes(node.slug.split("/").filter(Boolean).join("/"))
      ) {
        // set isParent to true for so NodeTOC knows which parent has subpages to render
        node.isParent = true;
        // find the specific with the subpages
        const child = nodes.find(
          (page) =>
            page.category &&
            page.slug.split("/").filter(Boolean)[1] ===
              node.slug.split("/").filter(Boolean)[1]
        );
        node.tableOfContents.items.forEach((item) => {
          if (item.title === child.category) {
            // append the subpages to the parent page's table of contents
            item.items = child.tableOfContents.items;
          } else {
            // clear the default items in the table of contents if there are no subpages
            item.items = [];
          }
        });
      }
      return node;
    })
    .filter((node) => {
      // remove top level subpages from nodes
      return !node?.category;
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
        {subpagesNodes?.map((node, i) => {
          return <NodeTOC key={i} {...node} size={size} />;
        })}
      </Box>
    </Box>
  );
};

export default InstanceTOC;
