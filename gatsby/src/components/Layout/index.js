import React from "react";
import PropTypes from "prop-types";

import Sidebar from "../Sidebar";
import Nav from "../Nav";

const Layout = ({ children }) => (
  <>
    <header>
      <Nav />
    </header>
    <aside>
      <Sidebar />
    </aside>
    <main>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
