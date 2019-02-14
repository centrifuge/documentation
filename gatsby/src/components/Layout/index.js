import React from "react";
import PropTypes from "prop-types";
import { Grid, Box } from "grommet";

import Nav from "../Nav";
import Theme from "../Theme";

const Layout = ({ children }) => (
  <Theme>
    <Grid
      style={{ maxWidth: 1152 - 32 }}
      margin={{ horizontal: "auto" }}
      fill
      gap={{ column: "medium" }} // This needs to be 32px but /shrug
      columns={[
        "1fr",
        "1fr",
        "1fr",
        "1fr",
        "1fr",
        "1fr",
        "1fr",
        "1fr",
        "1fr",
        "1fr",
        "1fr",
        "1fr"
      ]}
      rows={["auto", "auto"]}
      areas={[
        { name: "header", start: [0, 0], end: [12, 0] },
        { name: "sidebar", start: [0, 1], end: [3, 1] },
        { name: "main", start: [3, 1], end: [9, 1] },
        { name: "toc", start: [9, 1], end: [12, 1] }
      ]}
    >
      <Box gridArea="header" as="header">
        <Nav />
      </Box>
      {children}
    </Grid>
  </Theme>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
