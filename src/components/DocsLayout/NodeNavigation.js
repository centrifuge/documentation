import React, { useContext } from "react";
import { Box, Text, ResponsiveContext } from "grommet";
import { Previous, Next } from "grommet-icons";
import { Link } from "gatsby";

const AltText = ({ children, ...props }) => (
  <Text size="xsmall" color="dark-3" style={{ fontFamily: "Inter" }} {...props}>
    {children}
  </Text>
);

const NodeNavigation = ({ prevNode, nextNode }) => {
  const prevIconColor = !!prevNode ? "black" : "dark-3";
  const nextIconColor = !!nextNode ? "black" : "dark-3";

  const size = useContext(ResponsiveContext);

  return (
    <Box direction={size === "small" ? "column" : "row"} gap="medium">
      {!!prevNode && (
        <Box
          direction="row"
          gap="small"
          align="start"
          style={{ padding: "12px 16px", textDecoration: "none" }}
          flex="grow"
          as={Link}
          to={prevNode.fields.slug}
        >
          <Box align="end">
            <AltText style={{ marginRight: "22px" }}>Previous</AltText>
            <Box direction="row" align="center">
              <Text color="brand" truncate>
                {prevNode.fields.title}
              </Text>
              <Previous
                size="12px"
                style={{
                  color: prevIconColor,
                  stroke: prevIconColor,
                  marginRight: "10px",
                  marginTop: "7px",
                }}
              />
            </Box>
          </Box>
        </Box>
      )}
      {!!nextNode && (
        <Box
          direction="row"
          justify="end"
          gap="small"
          flex="grow"
          align="center"
          alignSelf={size === "small" ? "end" : null}
          style={{
            padding: "12px 16px",
            textDecoration: "none",
          }}
          as={Link}
          to={nextNode.fields.slug}
        >
          <Box align="end">
            <AltText style={{ marginRight: "22px" }}>Next</AltText>
            <Box direction="row" align="center">
              <Text color="brand" truncate>
                {nextNode.fields.title}
              </Text>
              <Next
                size="12px"
                style={{
                  color: nextIconColor,
                  stroke: nextIconColor,
                  marginLeft: "10px",
                }}
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default NodeNavigation;
