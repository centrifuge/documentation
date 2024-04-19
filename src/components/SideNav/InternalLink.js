import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { Box, Text } from "grommet";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { Next } from "grommet-icons";

const Link = styled(GatsbyLink)`
  text-decoration: none;

  :hover {
    text-decoration: none;
  }

  font-family: Inter, sans-serif;
  font-weight: 400;
  color: #424242;

  line-height: 1.375;
  padding: ${(props) => (props.size === "large" ? "4px 0" : "7px 16px")};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  &.activeLink {
    color: ${(props) => props.theme.global.colors.black};
    background-color: #dbe5ff;
    font-weight: 500;
  }
`;

const LinkWithSubpages = styled(GatsbyLink)`
  text-decoration: none;

  :hover {
    text-decoration: none;
  }

  font-family: Inter, sans-serif;
  font-weight: 400;
  color: #424242;

  line-height: 1.375;
  padding: ${(props) => (props.size === "large" ? "4px 0px" : "7px 16px")};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  &.activeLink {
    font-weight: 500;
    color: ${(props) => props.theme.global.colors.black};
  }
`;

const InternalLink = (
  {
    href,
    label,
    primary,
    size,
    altFont,
    hasChildren,
    subpageChild,
    onClick,
    isExpanded,
  },
  ref,
) => {
  const linkRef = useRef();

  let props = { size, to: href };
  if (!primary) props.color = "dark-3";

  let textProps = {};
  if (altFont) textProps.style = { fontFamily: "Inter" };

  useImperativeHandle(ref, () => ({
    isActive: linkRef.current
      ?.getAttribute("class")
      .split(" ")
      .includes("activeLink"),
  }));

  return hasChildren ? (
    <>
      <LinkWithSubpages
        ref={linkRef}
        activeClassName="activeLink"
        partiallyActive
        hasChildren
        onClick={onClick}
        {...props}
      >
        <Box direction="row" justify="between" align="center">
          <Text size="16px">{label}</Text>
          <Next
            style={{
              stroke: "black",
              rotate: isExpanded ? "270deg" : "90deg",
            }}
            size="16px"
          />
        </Box>
      </LinkWithSubpages>
    </>
  ) : (
    <Link {...props} ref={linkRef} partiallyActive activeClassName="activeLink">
      <Text size="16px" margin={{ left: subpageChild ? "small" : "0" }}>
        {label}
      </Text>
    </Link>
  );
};

InternalLink.defaultProps = {
  primary: false,
  altFont: false,
  size: "medium",
};

export default forwardRef(InternalLink);
