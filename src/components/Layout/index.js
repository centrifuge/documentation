import React from "react";
import PropTypes from "prop-types";
import {Box} from "grommet";

import styled from "styled-components";

import Nav from "../Nav";
import {theme} from "../../theme";
import {FooterMenu, JoinSlack} from "../Footer";


const Header = styled.header`
  width: 100%;
  display:flex;
  align-items: center;
  top: 0;
  position: sticky;
  flex-direction: column;
  z-index: 10;
`

const Layout = ({children, gap, size}) => {

  let sectionProps = {
    fill: 'horizontal',
    pad: {horizontal: 'medium'},
    style: {
      maxWidth: theme.maxContentWidth
    }
  }

  return (

    <>
      <Header>
        <Box
          align={"center"}
          background={'white'}
          fill={true}
          border={{side: 'bottom', color: 'light-4'}}
        >
          <Nav {...sectionProps} size={size}/>
        </Box>
      </Header>
      <Box align={'center'}>
        <Box {...sectionProps}>
          {children}
        </Box>
      </Box>

      <Box as="footer">
        <Box background={'brand'} align={'center'}>
          <Box {...sectionProps} align={'center'} pad={{...sectionProps.pad, vertical: 'large'}}>
            <JoinSlack/>
          </Box>
        </Box>
        <Box background={'black'} align={'center'}>
          <Box {...sectionProps} align={'center'} pad={{...sectionProps.pad, vertical: 'large'}}>
            <FooterMenu size={size} gap={gap}/>
          </Box>
        </Box>
      </Box>
    </>

  );

};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
