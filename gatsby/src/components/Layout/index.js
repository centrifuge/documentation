import React from "react";
import PropTypes from "prop-types";

import Sidebar from "../Sidebar";
import Nav from "../Nav";
import Theme from "../Theme";

const Layout = ({ children }) => (
  <Theme>
    <header>
      <Nav />
    </header>
    <aside>
      <Sidebar />
    </aside>
    <main>{children}</main>
  </Theme>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
