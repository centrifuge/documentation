import React from "react";
import PropTypes from "prop-types";

import Sidebar from "../sidebar";

const Layout = ({ children }) => (
  <>
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
