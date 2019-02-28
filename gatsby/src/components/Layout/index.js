import React from "react";
import PropTypes from "prop-types";
import { Grid as GrommetGrid, Box, ResponsiveContext } from "grommet";
import { AxisTheme } from "@centrifuge/axis-theme/";
import styled from "styled-components";

import Nav from "../Nav";

const Grid = styled(GrommetGrid).attrs({
  margin: { horizontal: "auto" },
  fill: true
})`
  max-width: calc(1152px - 32px);
  width: 100%;
  grid-column-gap: 32px;
  grid-row-gap: 40px;

  @media only screen and (max-width: 1120px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

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
              { name: "header", start: [0, 0], end: [0, 0] },
              { name: "sidebar", start: [0, 1], end: [0, 1] },
              { name: "main", start: [0, 2], end: [0, 2] },
              { name: "footer", start: [0, 3], end: [0, 3] }
            ];
        }

        return (
          <Grid columns={columns} rows={rows} areas={areas}>
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
