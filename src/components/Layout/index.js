import React from "react";
import PropTypes from "prop-types";
import { Box } from "grommet";

import "./styles.css";
import "@fontsource/space-mono";

import { theme } from "../../theme";
import Search from "../Search";
import SideNav from "../SideNav";
import SocialFooter from "../SocialFooter";

const Layout = ({ children, hideFooter, fullWidth }) => {
  let sectionProps = {
    fill: "horizontal",
    pad: { horizontal: "48px" },
    style: fullWidth
      ? {}
      : {
          maxWidth: theme.maxContentWidth,
        },
  };

  return (
    <Box direction="row" style={{ minHeight: "100vh" }}>
      <Box direction="row" width="20%" flex="grow">
        <Box>
          {/* side nav */}
          <SideNav />
        </Box>
        <Box
          fill="vertical"
          width="8px"
          style={{
            background:
              "linear-gradient(90deg, rgba(216, 216, 216, 0) 0%, #D8D8D8 100%)",
          }}
        />
      </Box>
      <Box width="80%">
        {/* search */}
        <Box
          direction="row"
          fill="horizontal"
          justify="end"
          pad={{ horizontal: "medium", vertical: "medium" }}
        >
          <Box>
            <Search open={true} />
          </Box>
        </Box>
        {/* content */}
        <Box align="center" {...sectionProps} flex="grow">
          {children}
        </Box>
        {/* footer */}
        {!hideFooter && <SocialFooter />}
      </Box>
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  hideFooter: false,
  fullWidth: false,
};

export default Layout;
