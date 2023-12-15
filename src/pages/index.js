import { AxisTheme } from "@centrifuge/axis-theme";
import { Link as GatsbyLink } from "gatsby";
import {
  Box,
  Heading,
  Image,
  Paragraph,
  ResponsiveContext,
  Text,
} from "grommet";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import build_face from "../images/faces/build.svg";
import getting_started_face from "../images/faces/getting-started.svg";
import use_face from "../images/faces/use.svg";
import { theme } from "../theme";

const INSTANCE_TYPES = Object.freeze({
  GETTING_STARTED: "getting-started",
  DEVELOPER_DOCS: "developer-documentation",
  USER_DOCS: "user-documentation",
});

const INSTANCES = Object.freeze({
  [INSTANCE_TYPES.GETTING_STARTED]: {
    title: "Getting Started",
    uri: "/getting-started",
    color: "#7ED321",
    avatar: getting_started_face,
  },
  [INSTANCE_TYPES.USER_DOCS]: {
    title: "User docs",
    uri: "/user-documentation",
    color: "#2762FF",
    avatar: use_face,
  },
  [INSTANCE_TYPES.DEVELOPER_DOCS]: {
    title: "Developer docs",
    uri: "/developer-documentation",
    color: "#F44E72",
    avatar: build_face,
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
      <Box
        style={{
          maxWidth: "1024px",
          marginTop: size === "small" ? "0px" : "40px",
          paddingLeft: size === "small" ? "24px" : "60px",
          paddingRight: size === "small" ? "24px" : "60px",
        }}
        width="100%"
        direction="row"
        gap="large"
        justify="center"
        align="center"
      >
        <Box width="70%" flex="grow">
          <Heading lined level={size === "small" ? 2 : 1}>
            Welcome to Centrifuge documentation
          </Heading>
          <Text
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              lineHeight: "1.7em",
            }}
          >
            Welcome to the Centrifuge documentation. If you are new, or want to
            dive deeper into how our products works head to the{" "}
            <strong>Getting Started</strong> section to understand what
            Centrifuge is about and to get an overview of our ecosystem. As a
            user of our network, e.g. investor, issuer, or governance
            participant, you will find advice and guides in{" "}
            <strong>User Documentation</strong>. For the most up-to-date
            technical documentation, check out{" "}
            <strong>Developer Documentation</strong>.
          </Text>
        </Box>
      </Box>
      <Box
        style={{
          maxWidth: "1024px",
          paddingLeft: size === "small" ? "24px" : "60px",
          paddingRight: size === "small" ? "24px" : "60px",
        }}
        width="100%"
        justify="center"
        align="center"
      >
        <Box
          margin={{ vertical: "xlarge" }}
          gap={size === "large" ? "medium" : "60px"}
          width={size === "large" ? "70%" : "100%"}
        >
          <Box align="center">
            <GettingStartedNavButton
              {...INSTANCES[INSTANCE_TYPES.GETTING_STARTED]}
            />
          </Box>
          <Box
            direction={size === "large" ? "row" : "column"}
            justify="center"
            gap={size === "large" ? "medium" : "60px"}
            width="100%"
            align="center"
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
          <ExternalLink
            href="https://centrifuge.io/contributors#careers"
            target="_blank"
          >
            work with us
          </ExternalLink>
        </Box>
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
