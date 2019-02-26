import React from "react";
import PropTypes from "prop-types";
import { Grid, Box } from "grommet";
import { AxisTheme } from "@centrifuge/axis-theme/";

import Nav from "../Nav";

const Layout = ({ children }) => (
  <AxisTheme>
    <Grid
      style={{ maxWidth: 1152 - 32, gridColumnGap: 32 }}
      margin={{ horizontal: "auto" }}
      fill
      columns={Array(12).fill("1fr")}
      rows={Array(3).fill("auto")}
      areas={[
        { name: "header", start: [0, 0], end: [12, 0] },
        { name: "sidebar", start: [0, 1], end: [3, 1] },
        { name: "main", start: [3, 1], end: [9, 1] },
        { name: "toc", start: [9, 1], end: [12, 1] },
        { name: "footer", start: [0, 2], end: [12, 2] }
      ]}
    >
      <Box gridArea="header" as="header">
        <Nav />
      </Box>
      {children}
      <Box gridArea="footer" as="footer" pad="large" />
    </Grid>
  </AxisTheme>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
