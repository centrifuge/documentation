import React, { useState } from "react";
import { AxisTheme } from "@centrifuge/axis-theme";
import styled from "styled-components";
import { theme } from "../theme";
import { Box, Grid, Image, ResponsiveContext, Text, Button } from "grommet";
import { Link as GatsbyLink } from "gatsby";

import helloWordImage from "../images/hello_world-42.svg";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Products from "../components/Home/products";

import learn_face from "../images/faces/learn.svg";
import use_face from "../images/faces/use.svg";
import build_face from "../images/faces/build.svg";

const INSTANCE_TYPES = Object.freeze({
  LEARN: "learn",
  USE: "use",
  BUILD: "build",
});

const INSTANCES = Object.freeze({
  [INSTANCE_TYPES.LEARN]: {
    title: "Learn",
    uri: "/learn/",
    color: "#FCBA59",
    avatar: learn_face,
  },
  [INSTANCE_TYPES.USE]: {
    title: "Use",
    uri: "/use/",
    color: "#2762FF",
    avatar: use_face,
  },
  [INSTANCE_TYPES.BUILD]: {
    title: "Build",
    uri: "/build/",
    color: "#F44E72",
    avatar: build_face,
  },
});

const Link = styled(GatsbyLink)`
  text-decoration: none;

  :hover {
    text-decoration: none;
    color: ${(props) =>
      (!!props.color && props.theme.global.colors[props.color]) ||
      props.theme.global.colors.black};
  }

  font-weight: 500;
  color: ${(props) =>
    (!!props.color && props.theme.global.colors[props.color]) ||
    props.theme.global.colors.black};
`;

const ExternalLink = styled.a`
  :hover {
    color: ${(props) =>
      (!!props.color && props.theme.global.colors[props.color]) ||
      props.theme.global.colors.black};
  }

  font-weight: 500;
  color: ${(props) =>
    (!!props.color && props.theme.global.colors[props.color]) ||
    props.theme.global.colors.black};
`;


const InstanceNavButton = ({ uri, color, title, avatar }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={uri}>
      <Box
        height="264px"
        width="264px"
        round="medium"
        justify="center"
        align="center"
        style={{
          boxShadow: `0px 2px 8px ${color}`,
          position: "relative",
          transformStyle: "preserve-3d",
          background: "#FFFFFF",
        }}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        {isHovered && (
          <Image
            src={avatar}
            style={{
              position: "absolute",
              height: "72px",
              top: "-63px",
              left: "0",
              transform: "translateZ(-1px)",
            }}
          />
        )}
        <Text style={{ fontFamily: "Space Mono" }} size="32px">
          {title}
        </Text>
      </Box>
    </Link>
  );
};

const HomePage = () => (
  <AxisTheme theme={theme}>
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Layout size={size} hideFooter fullWidth>
            <SEO title="Centrifuge documentation" />
            <Box direction="row" gap="large" justify="between">
              <Box>
                <Text style={{ fontFamily: "Space Mono" }}>Intro</Text>
              </Box>
              <Box width="70%">
                <Text>
                  Welcome to the Centrifuge documentation. If you are new, head
                  to the <strong>Learn</strong> section to understand our
                  ecosystem and how it works. If you are interested in
                  participating in the Centrifuge Network as an investor, asset
                  originator, validator, or participator, you'll find more
                  information in <strong>Use</strong>. For the most up-to-date
                  technical documentation, check out <strong>Build</strong>.
                </Text>
              </Box>
            </Box>
            <Box
              direction={size === "large" ? "row" : "column"}
              justify="center"
              gap={size === "large" ? "medium" : "84px"}
              margin={{ vertical: "xlarge" }}
            >
              {Object.values(INSTANCE_TYPES).map((value, i) => (
                <InstanceNavButton key={i} {...INSTANCES[value]} />
              ))}
            </Box>
            <ExternalLink href="https://centrifuge.io/careers/" target="_blank">
              <Text style={{ fontFamily: "Space Mono" }}>work with us</Text>
            </ExternalLink>
          </Layout>
        );
      }}
    </ResponsiveContext.Consumer>
  </AxisTheme>
);

export default HomePage;
