import React from "react";
import { Anchor, Box } from "grommet";

import { Item } from "../List";

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
      <Box flex="grow" as="li">
        Logo
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
      <Item>🔍</Item>
    </Box>
  </Box>
);

export default Nav;
