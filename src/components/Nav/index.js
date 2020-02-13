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
  padding: 1.5rem 0;
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
      <Box as="ul"  direction="row" gap={gap}>
        <Box  as="li" flex={!onMobile} justify="center">
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
      <Link partiallyActive={true} activeClassName="activeLink" to="/nfts/overview/introduction/">
        <Anchor>NFTs</Anchor>
      </Link>
    </Item>
    <Item>
      <Link partiallyActive={true} activeClassName="activeLink" to="/chain/">
        <Anchor>Centrifuge Chain</Anchor>
      </Link>
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
