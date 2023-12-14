import React from "react";
import { Box, Image } from "grommet";
import { useLocation } from "@reach/router";
import NodeTOC from "./NodeTOC";

const InstanceTOC = ({ nodes, size }) => {
  const location = useLocation(); // causes infinte re-renders
  return (
    <Box gap="small">
      <Box gap="0">
        {nodes
          .filter(
            (node) =>
              node.slug.split("/")[1] === location.pathname.split("/")[1] ||
              (location.pathname === "/" &&
                node.slug.split("/")[1] === "getting-started")
          )
          .map((node, i) => {
            return <NodeTOC key={i} {...node} size={size} />;
          })}
      </Box>
    </Box>
  );
};

export default InstanceTOC;
