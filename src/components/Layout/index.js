import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Image, Layer } from "grommet";
import { Menu } from "grommet-icons";
import { Link } from "gatsby";

import "./styles.css";
import "@fontsource/inter/variable-full.css";

import docs_wordmark from "../../images/docs_wordmark.svg";

import { theme } from "../../theme";
import Search from "../Search";
import SideNav from "../SideNav";
import SocialFooter from "../SocialFooter";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background: #2762ff;
  border-color: #2762ff;

  :hover {
    background: #000;
    border-color: #000;
  }
`;

const Layout = ({ children, hideFooter, size }) => {
  let sectionProps = {
    fill: "horizontal",
    margin: size !== "small" ? { bottom: "medium" } : {}
  };

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <Box direction="row" style={{ minHeight: "100vh", position: "relative" }}>
      {size === "large" && (
        <Box
          direction="row"
          flex="grow"
          height="100vh"
          style={{
            position: "fixed",
            top: 0,
          }}
        >
          <Box width="360px" overflow="auto">
            {/* side nav */}
            <SideNav size={size} />
          </Box>
        </Box>
      )}
      {size === "large" && (
        <Box
          margin={{ left: "360px" }}
          width="8px"
          style={{
            borderRight:
              "1px solid #EEE",
          }}
        />
      )}
      <Box width="100%" >
        {/* header */}
        {size !== "large" && (
          <>
            <Box
              direction="row"
              fill="horizontal"
              justify="between"
              align="center"
              pad={{ horizontal: "medium", vertical: "medium" }}
            >
              <Link to="/">
                <Image src={docs_wordmark} height="32px" />
              </Link>
              <Button
                icon={<Menu />}
                style={{
                  padding: "0",
                }}
                onClick={() => {
                  setIsNavbarOpen(true);
                }}
              />
            </Box>
            {isNavbarOpen && (
              <Layer full>
                <Box height="100vh" overflow="auto">
                  <Box flex="grow">
                    <SideNav
                      onClose={() => {
                        setIsNavbarOpen(false);
                      }}
                      size={size}
                    />
                  </Box>
                </Box>
              </Layer>
            )}
          </>
        )}
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
