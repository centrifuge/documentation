import { css } from "styled-components";

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
  font-size: 12px;
  display: inline-block;
`;

export { navLinkStyles, asideLinkStyles };
