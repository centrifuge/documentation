import React from "react";
import { Box, Image } from "grommet";
import NodeTOC from "./NodeTOC";
import InternalLink from "./InternalLink";

const InstanceTOC = ({ nodes, size, title, name, icon }) => {
  const secondLevelNodes = [];
  const nodesInSubpages = nodes
    .filter((node) => {
      // remove top level subpages from nodes
      if (node.slug.split("/").filter(Boolean).length === 3) {
        secondLevelNodes.push(node);
        return false;
      }
      return true;
    })
    .map((node) => {
      // find slugs that have subpages and nest the node under the page
      const subpage = secondLevelNodes.filter((subpage) => {
        return (
          subpage.slug.split("/").filter(Boolean)[1] ===
          node.slug.split("/").filter(Boolean)[1]
        );
      });
      if (subpage) {
        node.secondLevelPages = subpage;
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
        {nodesInSubpages?.map((node, i) => {
          return <NodeTOC key={i} {...node} size={size} />;
        })}
      </Box>
    </Box>
  );
};

export default InstanceTOC;
