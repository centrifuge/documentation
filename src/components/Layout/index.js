import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Image, Layer } from "grommet";
import { Menu } from "grommet-icons";
import { Link } from "gatsby";

import "./styles.css";
import "@fontsource/space-mono";

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

const Layout = ({ children, hideFooter, fullWidth, size }) => {
  let sectionProps = {
    fill: "horizontal",
    pad: {
      horizontal:
        size === "large" ? "120px" : size === "medium" ? "48px" : "24px",
      vertical: size === "small" ? "12px" : "0",
    },
    margin: size !== "small" ? { bottom: "medium" } : {},
    style: fullWidth
      ? {}
      : {
          maxWidth: theme.maxContentWidth,
        },
  };

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <Box direction="row" style={{ minHeight: "100vh" }}>
      {size === "large" && (
        <Box direction="row" flex="grow">
          <Box width={size === "large" ? "360px" : "240px"}>
            {/* side nav */}
            <SideNav size={size} />
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
      )}
      <Box width="100%">
        {/* header */}
        {size !== "large" ? (
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
        ) : (
          <Box
            direction="row"
            fill="horizontal"
            justify="end"
            pad={{ horizontal: "medium", vertical: "medium" }}
          >
            <Box direction="row" gap="medium">
              <StyledButton primary label="FAQ" href="/faq" />
              <Search open={true} />
            </Box>
          </Box>
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
