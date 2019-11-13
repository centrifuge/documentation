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
 
`;

const Item = styled(ListItem)`
  padding: 0.5rem 0;
  line-height: 1rem;
  
  a {
    ${navLinkStyles}
    color: inherit;
    font-weight: 500;
  }
  
  .activeLink {
    color: ${props => props.theme.global.colors.brand};
  }
  
`;

const Nav = (props) => {
  const {size, ...rest} = props;
  const [opened, setOpened] = useState(false);

  const openMenu = () => setOpened(true);
  const closeMenu = () => setOpened(false);

  const onMobile = size === 'small' || size === 'medium';
  const gap = size === 'small' ? 'medium': 'large';

  return (
    <Box as="nav" {...rest}>
      <Box as="ul" direction="row" gap={gap}>
        <Box as="li" flex={!onMobile} justify="center">
          <div>
            <Link to="/">
              <Logo src={wordmark}/>
            </Link>
          </div>
        </Box>

        {!onMobile && (
          <Box  as="li">
            {renderMainMenuItems('row')}
          </Box>
        )}

        <Box flex={onMobile} as="li" direction={'column'} justify="center">
          <ListItem flex={'grow'}>
            <Search/>
          </ListItem>
        </Box>

        {onMobile && (
          <Box as="li" justify={'center'}>
            <ListItem>
              <Anchor onClick={opened ? closeMenu : openMenu}>
                {opened ? <Close size="20px" /> : <Menu size="20px" />}
              </Anchor>
            </ListItem>
          </Box>
        )}

        {opened && (
          <Layer
            position="right"
            full="vertical"
            responsive={false}
            animate={true}
            onClickOutside={closeMenu}
            onEsc={closeMenu}
            margin={{ top: 'large' }}
          >
           <Box width={'100vw'} pad={'medium'}>
             <Box as="li"  pad={'large'}>
               {renderMainMenuItems('column')}
             </Box>
           </Box>
          </Layer>
        )}
      </Box>
    </Box>
  )
};


const renderMainMenuItems = (direction) => {
  return <Box as="ul" direction={direction} align="start" gap="xsmall">
    <Item>
      <Link partiallyActive={true} activeClassName="activeLink" to="/cent-node/">
        <Anchor>Centrifuge P2P Node</Anchor>
      </Link>
    </Item>
    <Item>
      <Link partiallyActive={true} activeClassName="activeLink" to="/tinlake/">
        <Anchor>Tinlake</Anchor>
      </Link>
    </Item>
    <Item>
      <ExternalAnchor href="https://centrifuge-os-node-api-4.api-docs.io/0.0.6">
        Node API
      </ExternalAnchor>
    </Item>
    <Item>
      <ExternalAnchor href="https://github.com/centrifuge">
        GitHub
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
