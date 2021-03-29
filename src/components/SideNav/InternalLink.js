import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { Text } from "grommet";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

const Link = styled(GatsbyLink)`
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }

  font-weight: 500;
  color: ${(props) =>
    (!!props.color && props.theme.global.colors[props.color]) ||
    props.theme.global.colors.black};

  &.activeLink {
    color: ${(props) => props.theme.global.colors.brand};
  }
`;

const InternalLink = ({ href, label, primary, size, altFont }, ref) => {
  const linkRef = useRef();

  let props = { to: href };
  if (!primary) props.color = "dark-3";

  let textProps = {};
  if (primary) textProps.weight = 500;
  if (altFont) textProps.style = { fontFamily: "Space Mono" };

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
