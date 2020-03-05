import React, { useState } from "react";

import { AxisTheme } from "@centrifuge/axis-theme";
import { Box, Image } from "grommet";
import { NavBar } from "@centrifuge/axis-nav-bar";
import { MenuItem } from "@centrifuge/axis-nav-bar";
import { Menu as MenuIcon, User as UserIcon, Close as CloseIcon } from "grommet-icons";
import Search from "../Search";
import styled from "styled-components";
import { navigate } from "gatsby";
const wordmark = require("../../images/centrifuge-developer-wordmark.svg") as string;


const Logo = styled(Image)`
  vertical-align: middle;
  height: 32px;
  margin: 16px 0;
`;

  const Nav = (props) => {
      const [selectedRoute, setSelectedRoute] = useState("/");
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
        },
        {
          label: 'Github',
          route: "https://github.com/centrifuge"
        },
        {
          label: 'Slack',
          route: "https://centrifuge.io/slack/"
        }
      ];
      const onRouteClick = (route) => {
        setSelectedRoute(route);
        if (route.startsWith('/')){
          navigate(route);
        }
        else {
          window.open(route);
        }
      };
      const theme = { navBar: { icons: {
        menu: MenuIcon,
        close: CloseIcon,
        user: UserIcon,
      }}};
   
      return (
        <Box>
            <NavBar
              menuItems={menuItems}
              theme={theme}
              selectedRoute={selectedRoute}
              onRouteClick={(item: MenuItem) => {onRouteClick(item.route);}}
              logo={<Logo src={wordmark} onClick={() => {onRouteClick('/')}} />}
              width={"100%"}
            />
            <Search />
        </Box>

      );
  };

export default Nav;