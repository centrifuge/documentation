import React from "react";
import { Anchor, Box, Image } from "grommet";
import { Link } from "gatsby";
import styled from "styled-components";

import { Item as ListItem } from "../List";
import { navLinkStyles } from "../Links";

import wordmark from "../../images/centrifuge-developer-wordmark.svg";

const Logo = styled(Image)`
  vertical-align: middle;
  height: 32px;
`;

const ExternalAnchor = styled(Anchor).attrs({
  target: "_blank",
  rel: "noopener noreferrer"
})`
  ${navLinkStyles}
  font-weight: 500;
`;

const Item = styled(ListItem)`
  padding: 1.5rem 0;
  line-height: 1rem;
`;

const Nav = () => (
  <Box as="nav" margin={{ bottom: "large" }}>
    <Box as="ul" direction="row">
      <Box flex="grow" as="li" justify="center">
        <Link to="/overview/introduction/">
          <Logo src={wordmark} />
        </Link>
      </Box>
      <Box as="li">
        <Box as="ul" direction="row" align="center" gap="large">
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
    </Box>
  </Box>
);

export default Nav;
