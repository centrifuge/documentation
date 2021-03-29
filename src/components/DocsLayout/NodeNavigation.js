import React from "react";
import { Box, Text } from "grommet";
import { Previous, Next } from "grommet-icons";
import { Link } from "gatsby";

import { theme } from "../../theme";

const AltText = ({ children, ...props }) => (
  <Text
    size="xsmall"
    color="dark-3"
    style={{ fontFamily: "Space Mono" }}
    {...props}
  >
    {children}
  </Text>
);

const NodeNavigation = ({ prevNode, nextNode }) => {
  const prevIconColor = !!prevNode ? "black" : "dark-3";
  const nextIconColor = !!nextNode ? "black" : "dark-3";

  return (
    <Box direction="row" justify="between">
      <Box direction="row" gap="small" align="center">
        <Previous
          style={{
            color: prevIconColor,
            stroke: prevIconColor,
          }}
        />
        <Box>
          <AltText>Prev.</AltText>
          {!!prevNode && (
            <Link to={prevNode.fields.slug}>
              <Text truncate>{prevNode.fields.title}</Text>
            </Link>
          )}
        </Box>
      </Box>
      <Box direction="row" gap="small" align="center">
        <Box align="end">
          <AltText>Next</AltText>
          {!!nextNode && (
            <Link to={nextNode.fields.slug}>
              <Text truncate>{nextNode.fields.title}</Text>
            </Link>
          )}
        </Box>
        <Next
          style={{
            color: nextIconColor,
            stroke: nextIconColor,
          }}
        />
      </Box>
    </Box>
  );
};

export default NodeNavigation;
