import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Image, Layer, Nav } from "grommet";
import { Menu } from "grommet-icons";
import { Link } from "gatsby";

import "./styles.css";
import "@fontsource/inter/variable-full.css";

import docs_wordmark from "../../images/docs_wordmark.svg";

import SideNav from "../SideNav";
import SocialFooter from "../SocialFooter";

const Layout = ({ children, hideFooter, size }) => {
  let sectionProps = {
    fill: "horizontal",
    margin: size !== "small" ? { bottom: "medium" } : {},
  };

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <>
      {size === "large" && (
        <Nav
          direction="row"
          style={{
            position: "fixed",
            background: "#fff",
            zIndex: 1000,
            height: "64px",
            width: "100%",
            paddingLeft: "20px",
            paddingTop: "20px",
            borderBottom: "1px solid #EEE",
            fontSize: "15px",
          }}
        >
          <Link to="/">
            <Image src={docs_wordmark} height="32px" />
          </Link>
          <Link to="/getting-started" style={{ textDecoration: "none" }}>
            Getting started
          </Link>
          <Link
            to="/user-documentation"
            style={{ textDecoration: "none", color: "#000" }}
          >
            User documentation
          </Link>
          <Link
            to="/developer-documentation"
            style={{ textDecoration: "none", color: "#000" }}
          >
            Developer documentation
          </Link>
        </Nav>
      )}
      <Box direction="row" style={{ minHeight: "100vh", position: "relative" }}>
        {size === "large" && (
          <Box
            direction="row"
            flex="grow"
            height="100vh"
            style={{
              position: "fixed",
              top: "64px",
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
              borderRight: "1px solid #EEE",
            }}
          />
        )}
        <Box width="100%">
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
          <Box
            align="center"
            {...sectionProps}
            flex="grow"
            style={{ marginTop: "64px" }}
          >
            {children}
          </Box>
          {/* footer */}
          {!hideFooter && <SocialFooter />}
        </Box>
      </Box>
    </>
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
