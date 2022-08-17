import { AxisTheme } from "@centrifuge/axis-theme";
import { Link as GatsbyLink } from "gatsby";
import { Box, Grid, Image, ResponsiveContext, Text } from "grommet";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import build_face from "../images/faces/build.svg";
import getting_started_face from "../images/faces/getting-started.svg";
import learn_face from "../images/faces/learn.svg";
import use_face from "../images/faces/use.svg";
import { theme } from "../theme";

const INSTANCE_TYPES = Object.freeze({
  LEARN: "learn",
  USE: "use",
  BUILD: "build",
  GETTING_STARTED: "getting-started",
});

const INSTANCES = Object.freeze({
  [INSTANCE_TYPES.LEARN]: {
    title: "Learn",
    uri: "/learn",
    color: "#FCBA59",
    avatar: learn_face,
  },
  [INSTANCE_TYPES.USE]: {
    title: "Use",
    uri: "/use",
    color: "#2762FF",
    avatar: use_face,
  },
  [INSTANCE_TYPES.BUILD]: {
    title: "Build",
    uri: "/build",
    color: "#F44E72",
    avatar: build_face,
  },
  [INSTANCE_TYPES.GETTING_STARTED]: {
    title: "Getting Started",
    uri: "/getting-started",
    color: "#7ED321",
    avatar: getting_started_face,
  },
});

const Link = styled(GatsbyLink)`
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};

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
              top: "30px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        )}
        <Text style={{ fontFamily: "Inter" }} size="32px">
          {title}
        </Text>
      </Box>
    </Link>
  );
};

const GettingStartedNavButton = ({ uri, color, title, avatar }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to="/getting-started">
      <Box
        height="64px"
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
        <Text style={{ fontFamily: "Inter" }} size="24px">
          {title}
        </Text>
      </Box>
    </Link>
  );
};

const HomePage = () => {
  const size = useContext(ResponsiveContext);

  return (
    <Layout size={size} hideFooter fullWidth>
      <SEO title="Centrifuge Documentation" />
      <Box direction="row" gap="large" justify="between">
        <Box>
          <Text style={{ fontFamily: "Inter" }}>Intro</Text>
        </Box>
        <Box width="70%">
          <Text>
            Welcome to the Centrifuge documentation. If you are new, head to the
            <strong>Getting started</strong> section to understand what
            Centrifuge is about and get an overview of our ecosystem. Dive
            deeper into how our products work in the <strong>Learn</strong>{" "}
            section. As a user of our network, e.g. investor, asset originator,
            nominator or validator you find advice and guides in{" "}
            <strong>Use</strong>. For the most up-to-date technical
            documentation, check out <strong>Build</strong>.
          </Text>
        </Box>
      </Box>
      <Box margin={{ vertical: "xlarge" }} gap="large">
        <Box align="center">
          <GettingStartedNavButton
            {...INSTANCES[INSTANCE_TYPES.GETTING_STARTED]}
          />
        </Box>
        <Box
          direction={size === "large" ? "row" : "column"}
          justify="center"
          gap={size === "large" ? "medium" : "84px"}
        >
          {Object.values(INSTANCE_TYPES)
            .filter((value) => value !== INSTANCE_TYPES.GETTING_STARTED)
            .map((value, i) => (
              <InstanceNavButton key={i} {...INSTANCES[value]} />
            ))}
        </Box>
      </Box>
      <Box css={{ fontFamily: "Inter" }} direction="row">
        <Link to="/code-of-conduct" underline>
          code of conduct
        </Link>
        <Box pad={{ horizontal: "small" }}>|</Box>
        <ExternalLink href="https://centrifuge.io/careers/" target="_blank">
          work with us
        </ExternalLink>
      </Box>
    </Layout>
  );
};

export default () => {
  return (
    <AxisTheme theme={theme}>
      <HomePage />
    </AxisTheme>
  );
};
