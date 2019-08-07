import React, {useState} from "react";
import {Anchor, Box, Image, Layer} from "grommet";
import {Link} from "gatsby";
import styled from "styled-components";

import {Item as ListItem} from "../List";
import {navLinkStyles} from "../Links";
import Search from "../Search";

import wordmark from "../../images/centrifuge-developer-wordmark.svg";
import {Close, Menu} from "grommet-icons";

const Logo = styled(Image)`
  vertical-align: middle;
  height: 32px;
  margin: 16px 0;
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

const Nav = (props) => {
  const {size, ...rest} = props;
  const [opened, setOpened] = useState(false);

  const openMenu = () => setOpened(true);
  const closeMenu = () => setOpened(false);

  const onMobile = size === 'small';

  return (
    <Box as="nav" {...rest}>
      <Box as="ul"  direction="row" gap="large">
        <Box  as="li" flex={!onMobile} justify="center">
          <div>
            <Link to="/docs/overview/introduction/">
              <Logo src={wordmark}/>
            </Link>
          </div>
        </Box>

        {size !== "small" && (
          <Box  as="li">
            {renderMainMenuItems('row')}
          </Box>
        )}
        <Box flex={onMobile} as="li" direction={'column'} justify="center">
          <ListItem flex={'grow'}>
            <Search/>
          </ListItem>
        </Box>

        {size === "small" && (
          <Box as="li" justify={'center'}>
            <ListItem>
              <Anchor>
                <Menu onClick={openMenu}/>
              </Anchor>
            </ListItem>
          </Box>
        )}

        {opened && (
          <Layer
            width={'500px'}
            position="right"
            full="vertical"
            responsive={false}
            animate={true}
            onClickOutside={closeMenu}
            onEsc={closeMenu}
          >
           <Box width={'70vw'} pad={'medium'}>
             <Box fill={'horizontal'} align={'end'}>
               <Anchor onClick={closeMenu}>
                 <Close/>
               </Anchor>

             </Box>
             <Box as="li"  pad={'large'}>
               {renderMainMenuItems('column')}
             </Box>
           </Box>

          </Layer>)
        }

      </Box>
    </Box>
  )
};


const renderMainMenuItems = (direction) => {
  return <Box as="ul" direction={direction} align="center" gap="large">
    <Item>
      <ExternalAnchor href="https://centrifuge-os-node-api-2.api-docs.io/0.0.5">
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
  </Box>
}

export default Nav;
