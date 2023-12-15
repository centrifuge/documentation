import React from "react";
import { Box } from "grommet";
import NodeTOC from "./NodeTOC";

const InstanceTOC = ({ nodes, size }) => {
  return (
    <Box gap="small">
      <Box gap="0">
        {nodes.map((node, i) => {
          return <NodeTOC key={i} {...node} size={size} />;
        })}
      </Box>
    </Box>
  );
};

export default InstanceTOC;
