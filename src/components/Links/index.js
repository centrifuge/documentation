import styled,{css} from "styled-components";
import {Anchor} from "grommet";

const navLinkStyles = css`
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &:active {
    opacity: 0.9;
  }
`;

const asideLinkStyles = css`
  line-height: 1.5;
  display: inline-block;
`;

const UnstyledAnchor = styled(Anchor)`
  &, &:hover {
    text-decoration: none;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
  }
`

export {navLinkStyles, asideLinkStyles,UnstyledAnchor};


