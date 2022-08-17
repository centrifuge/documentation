import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { Text } from "grommet";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

const Link = styled(GatsbyLink)`
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }

  font-family: Inter, sans-serif;
  font-weight: 500;
  color: ${(props) =>
    (!!props.color && props.theme.global.colors[props.color]) ||
    props.theme.global.colors.black};

  font-size: 14px;
  line-height: 1.375;
  padding: ${(props) => props.size === 'large' ? '4px 0' : '3px 16px'};
  border-radius: 16px;
  
  &.activeLink {
    color: ${(props) => props.theme.global.colors.brand};
    background-color: #F0F4FF;
  }
`;

const InternalLink = ({ href, label, primary, size, altFont }, ref) => {
  const linkRef = useRef();

  let props = { size, to: href };
  if (!primary) props.color = "dark-3";

  let textProps = {};
  if (primary) textProps.weight = 500;
  if (altFont) textProps.style = { fontFamily: "Inter" };

  useImperativeHandle(ref, () => ({
    isActive: linkRef.current
      ?.getAttribute("class")
      .split(" ")
      .includes("activeLink"),
  }));

  return (
    <Link {...props} activeClassName="activeLink" ref={linkRef}>
      <Text size={size} {...textProps}>
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
