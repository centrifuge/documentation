import React from "react";
import { Box, Image } from "grommet";
import NodeTOC from "./NodeTOC";
import InternalLink from "./InternalLink";

const InstanceTOC = ({ nodes, size, title, name, icon }) => {
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
        {nodes.map((node, i) => {
          return <NodeTOC key={i} {...node} size={size} />;
        })}
      </Box>
    </Box>
  );
};

export default InstanceTOC;
