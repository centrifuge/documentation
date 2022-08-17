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
      gap="medium"
    >
      <Box
        direction="row"
        gap="small"
        align="start"
        style={{ border: '1px solid #EEE', padding: '12px 16px', borderRadius: '8px', textDecoration: 'none' }}
        flex="grow"
        as={Link}
        to={prevNode.fields.slug}>
        {!!prevNode && (
          <>
            <Previous
              style={{
                color: prevIconColor,
                stroke: prevIconColor,
                marginRight: '10px',
                marginTop: '7px'
              }}
            />
            <Box>
              <AltText>Previous</AltText>
              <Text truncate>{prevNode.fields.title}</Text>
            </Box>
          </>
        )}
      </Box>
      <Box
        direction="row"
        justify="end"
        gap="small"
        flex="grow"
        align="center"
        alignSelf={size === "small" ? "end" : null}
        style={{ border: '1px solid #EEE', padding: '12px 16px', borderRadius: '8px', textDecoration: 'none' }}
        as={Link}
        to={nextNode.fields.slug}
      >
        {!!nextNode && (
          <>
            <Box align="end">
              <AltText>Next</AltText>
              <Text truncate>{nextNode.fields.title}</Text>
            </Box>
            <Next
              style={{
                color: nextIconColor,
                stroke: nextIconColor,
                marginLeft: '10px'
              }}
            />
          </>
        )}
      </Box>
    </Box>
  );
};

export default NodeNavigation;
