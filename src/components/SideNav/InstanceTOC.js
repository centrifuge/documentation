import React from "react";
import { Box, Image } from "grommet";

import NodeTOC from "./NodeTOC";
import InternalLink from "./InternalLink";

const InstanceTOC = ({ name, title, icon, nodes, size }) => {
  return (
    <Box gap="small">
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
      <Box gap="0">
        {nodes.map((node, i) => (
          <NodeTOC key={i} {...node} size={size} />
        ))}
      </Box>
    </Box>
  );
};

export default InstanceTOC;
