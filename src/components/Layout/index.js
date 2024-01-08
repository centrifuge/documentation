import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Image, Layer, Nav } from "grommet";
import { Menu } from "grommet-icons";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

import "./styles.css";
import "@fontsource/inter/variable-full.css";

import docs_wordmark from "../../images/docs_wordmark.svg";
import githubLogo from "../../images/github-logo.svg";

import SideNav from "../SideNav";
import SocialFooter from "../SocialFooter";
import InternalLink from "../SideNav/InternalLink";

const Layout = ({ children, hideFooter, size }) => {
  let sectionProps = {
    fill: "horizontal",
    margin: size !== "small" ? { bottom: "medium" } : {},
  };

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];

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
            paddingRight: "90px",
            borderBottom: "1px solid #EEE",
            fontSize: "15px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            direction="row"
            align="top"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Link to="/" style={{ padding: "0 16px" }}>
              <Image src={docs_wordmark} height="32px" />
            </Link>
            <InternalLink
              size="16px"
              primary={currentPath === "getting-started"}
              href="/getting-started"
              label="Getting started"
            />
            <InternalLink
              size="16px"
              primary={currentPath === "user"}
              href="/user"
              label="User documentation"
            />
            <InternalLink
              size="16px"
              primary={currentPath === "developer"}
              href="/developer"
              label="Developer documentation"
            />
          </Box>
          <Box alignSelf="start" justify="center">
            <a
              href="https://github.com/centrifuge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={githubLogo} height="24px" />
            </a>
          </Box>
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
            margin={{ left: "354px" }}
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
                <Box direction="row" gap="12px">
                  <Box alignSelf="start" justify="center">
                    <a
                      href="https://github.com/centrifuge"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src={githubLogo} height="24px" />
                    </a>
                  </Box>
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
            style={{
              marginTop: size === "small" ? "16px" : "64px",
            }}
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
