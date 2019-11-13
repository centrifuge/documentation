import React, { useState } from "react";
import { Box, FormField, TextInput } from "grommet";
import { NavBar } from "@centrifuge/axis-nav-bar";

import wordmark from "../../images/centrifuge-developer-wordmark.svg";

const Navbar = _props => {
  const [selectedRoute, setSelectedRoute] = useState("route/to/home");
  const menuItems = [
    {
      label: "Home",
      route: "/home"
    },
    {
      label: "About",
      route: "/about"
    },
    {
      label: "Settings",
      route: "/settings",
    },
    {
      label: "Logout",
      route: "/logout",
    }
  ];

  return (
    <NavBar
      logo={wordmark}
      menuLabel={"John Doe"}
      selectedRoute={selectedRoute}
      menuItems={menuItems}
      onRouteClick={item => setSelectedRoute(item.route)}
    >
      <Box>
        <FormField>
          <TextInput placeholder={"Search"}/>
        </FormField>
      </Box>
    </NavBar>
  );
};

export default Navbar;
