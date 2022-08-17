import React, { useContext } from "react";
import { Box, Text, ResponsiveContext } from "grommet";
import { Previous, Next } from "grommet-icons";
import { Link } from "gatsby";

const AltText = ({ children, ...props }) => (
  <Text
    size="xsmall"
    color="dark-3"
    style={{ fontFamily: "Inter" }}
    {...props}
  >
    {children}
  </Text>
);

const NodeNavigation = ({ prevNode, nextNode }) => {
  const prevIconColor = !!prevNode ? "black" : "dark-3";
  const nextIconColor = !!nextNode ? "black" : "dark-3";

  const size = useContext(ResponsiveContext);

  return (
    <Box
      direction={size === "small" ? "column" : "row"}
      justify="between"
      gap="medium"
    >
      <Box direction="row" gap="small" align="center">
        {!!prevNode && (
          <>
            <Previous
              style={{
                color: prevIconColor,
                stroke: prevIconColor,
              }}
            />
            <Box>
              <AltText>Prev</AltText>
              <Link to={prevNode.fields.slug}>
                <Text truncate>{prevNode.fields.title}</Text>
              </Link>
            </Box>
          </>
        )}
      </Box>
      <Box
        direction="row"
        gap="small"
        align="center"
        alignSelf={size === "small" ? "end" : null}
      >
        {!!nextNode && (
          <>
            <Box align="end">
              <AltText>Next</AltText>
              <Link to={nextNode.fields.slug}>
                <Text truncate>{nextNode.fields.title}</Text>
              </Link>
            </Box>
            <Next
              style={{
                color: nextIconColor,
                stroke: nextIconColor,
              }}
            />
          </>
        )}
      </Box>
    </Box>
  );
};

export default NodeNavigation;
