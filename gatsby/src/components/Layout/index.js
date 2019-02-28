import React from "react";
import PropTypes from "prop-types";
import { Grid, Box, ResponsiveContext } from "grommet";
import { AxisTheme } from "@centrifuge/axis-theme/";

import Nav from "../Nav";

const Layout = ({ children }) => (
  <AxisTheme>
    <ResponsiveContext.Consumer>
      {size => {
        let areas;
        let columns = Array(12).fill("1fr");
        let rows = Array(3).fill("auto");

        switch (size) {
          // Desktop
          case "large":
          default:
            areas = [
              { name: "header", start: [0, 0], end: [12, 0] },
              { name: "sidebar", start: [0, 1], end: [3, 1] },
              { name: "main", start: [3, 1], end: [9, 1] },
              { name: "toc", start: [9, 1], end: [12, 1] },
              { name: "footer", start: [0, 2], end: [12, 2] }
            ];
            break;
          // Tablet
          case "medium":
            areas = [
              { name: "header", start: [0, 0], end: [12, 0] },
              { name: "sidebar", start: [0, 1], end: [3, 1] },
              { name: "main", start: [3, 1], end: [12, 1] },
              { name: "footer", start: [0, 2], end: [12, 2] }
            ];
            break;
          // Mobile
          case "small":
            columns = ["1fr"];
            rows = Array(4).fill("auto");
            areas = [
              { name: "header", start: [0, 0], end: [1, 0] },
              { name: "sidebar", start: [0, 1], end: [1, 1] },
              { name: "main", start: [0, 2], end: [1, 2] },
              { name: "footer", start: [0, 3], end: [1, 3] }
            ];
        }

        return (
          <Grid
            style={{ maxWidth: 1152 - 32, gridColumnGap: 32, gridRowGap: 40 }}
            margin={{ horizontal: "auto" }}
            fill
            columns={columns}
            rows={rows}
            areas={areas}
          >
            <Box
              gridArea="header"
              as="header"
              style={{
                backgroundColor: "white",
                top: 0,
                position: "sticky",
                zIndex: 1
              }}
            >
              <Nav />
            </Box>
            {children}
            <Box gridArea="footer" as="footer" pad="large" />
          </Grid>
        );
      }}
    </ResponsiveContext.Consumer>
  </AxisTheme>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
