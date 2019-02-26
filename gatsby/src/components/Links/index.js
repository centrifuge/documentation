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

export { navLinkStyles };
