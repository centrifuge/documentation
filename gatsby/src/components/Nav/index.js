import React from "react";
import { Anchor, Box, Image } from "grommet";
import { Link } from "gatsby";
import styled from "styled-components";

import { Item } from "../List";

import wordmark from "../../images/centrifuge-developer-wordmark.svg";

const Logo = styled(Image)`
  vertical-align: middle;
  height: 32px;
`;

const ExternalAnchor = ({ href, children }) => (
  <Anchor target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </Anchor>
);

const Nav = () => (
  <Box as="nav">
    <Box
      as="ul"
      gap="large"
      direction="row"
      style={{ listStyle: "none" }}
      pad={{ vertical: "medium", left: "none" }}
    >
      <Box flex="grow" as="li" alignContent="center">
        <Link to="/overview/introduction/">
          <Logo src={wordmark} />
        </Link>
      </Box>
      <Item>
        <ExternalAnchor href="https://centrifuge-os-node-api.api-docs.io/0.0.3/">
          Node API
        </ExternalAnchor>
      </Item>
      <Item>
        <ExternalAnchor href="https://github.com/centrifuge">
          GitHub
        </ExternalAnchor>
      </Item>
      <Item>
        <ExternalAnchor href="https://centrifuge.io/centrifuge_os_white_paper.pdf">
          Whitepaper
        </ExternalAnchor>
      </Item>
      <Item>
        <ExternalAnchor href="https://centrifuge.io/slack/">
          Slack
        </ExternalAnchor>
      </Item>
      <Item>
        <span role="img" aria-label="Search">
          🔍
        </span>
      </Item>
    </Box>
  </Box>
);

export default Nav;
