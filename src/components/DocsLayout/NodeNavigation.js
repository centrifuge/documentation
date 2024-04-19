import React, { useContext } from "react";
import { Box, Text, ResponsiveContext } from "grommet";
import { Previous, Next } from "grommet-icons";
import { Link } from "gatsby";
import styled from "styled-components";

const AltText = ({ children, ...props }) => (
  <Text size="xsmall" color="dark-3" style={{ fontFamily: "Inter" }} {...props}>
    {children}
  </Text>
);

const Clickable = styled(Text)`
  &:hover {
    color: black;
  }
`;

const NodeNavigation = ({ prevNode, nextNode }) => {
  const prevIconColor = prevNode ? "black" : "dark-3";
  const nextIconColor = nextNode ? "black" : "dark-3";

  const size = useContext(ResponsiveContext);

  return (
    <Box style={{ maxWidth: "960px" }}>
      <Box direction={size === "small" ? "column" : "row"} gap="medium">
        {!!prevNode && (
          <Box
            direction="row"
            gap="small"
            align="start"
            style={{ textDecoration: "none" }}
            flex="grow"
            as={Link}
            to={prevNode.fields.slug}
          >
            <Box align="start">
              <AltText style={{ marginLeft: "22px" }}>Previous</AltText>
              <Box direction="row" align="baseline">
                <Previous
                  size="12px"
                  style={{
                    color: prevIconColor,
                    stroke: prevIconColor,
                    marginRight: "10px",
                    marginTop: "7px",
                  }}
                />
                <Clickable color="brand" truncate weight={500}>
                  {prevNode.fields.title}
                </Clickable>
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
              textDecoration: "none",
            }}
            as={Link}
            to={nextNode.fields.slug}
          >
            <Box align="end">
              <AltText style={{ marginRight: "22px" }}>Next</AltText>
              <Box direction="row" align="center">
                <Clickable color="brand" truncate weight={500}>
                  {nextNode.fields.title}
                </Clickable>
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
    </Box>
  );
};

export default NodeNavigation;
