import React, { useState } from "react";

import { AxisTheme } from "@centrifuge/axis-theme";
import { Box, Image } from "grommet";
import { NavBar } from "@centrifuge/axis-nav-bar";
import { MenuItem } from "@centrifuge/axis-nav-bar";
import { Menu as MenuIcon, User as UserIcon, Close as CloseIcon } from "grommet-icons";
import styled from "styled-components";
import { navigate } from "gatsby";
const wordmark = require("../../images/centrifuge-developer-wordmark.svg") as string;
const Logo = styled(Image)`
  vertical-align: middle;
  height: 32px;
  margin: 16px 0;
`;


  const Nav = (props) => {
    const Comp = (props) => {
      const [selectedRoute, setSelectedRoute] = useState("");
      const logo = Logo;
      const menuItems: MenuItem[] = [
        {
          label: "Centrifuge P2P Node",
          route: "/cent-node/"
        },
        {
          label: "Tinlake",
          route: "/tinlake/"
        },
        {
          label: "NFTs",
          route: "/nfts/overview/introduction/"
        },
        {
          label: 'Centrifuge Chain',
          route: "/chain/"
        }
      ];
      const onRouteClick = (route) => {
        setSelectedRoute(route);
        navigate(route);
      };
      const theme = { navBar: { icons: {
        menu: MenuIcon,
        close: CloseIcon,
        user: UserIcon,
      }}};
   
    

      return (
        <AxisTheme>
          <Box>
            <NavBar
              menuItems={menuItems}
              theme={theme}
              selectedRoute={selectedRoute}
              onRouteClick={(item: MenuItem) => {onRouteClick(item.route);}}
              logo={<Logo src={wordmark} onClick={navigate('/')} />}
            />
          </Box>
        </AxisTheme>
      );
    };

    return <Comp />;
  };

export default Nav;