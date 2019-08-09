import React from "react";
import {Box, Button, Heading, Paragraph, ResponsiveContext} from "grommet";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import {AxisTheme} from "@centrifuge/axis-theme";
import {theme} from "../theme";

const NotFoundPage = () => (
  <AxisTheme theme={theme}>
    <ResponsiveContext.Consumer>
      {size => {
        return <Layout size={size}>
          <SEO title="Something went wrong"/>
          <Box
            fill
            as="main"
            align="center"
            gridArea="main"
            pad={{top: "large", bottom: "xlarge"}}
          >
            <div>
              <Heading lined textAlign="center" level={1}>
                This page doesn’t exist
              </Heading>
              <Paragraph textAlign="center">
                You might have mistyped the address, or the page might have moved.
              </Paragraph>
            </div>
            <Button
              margin={{top: "small"}}
              primary
              href="/overview/introduction/"
              label="Back home"
            />
          </Box>
        </Layout>
      }}</ResponsiveContext.Consumer>
  </AxisTheme>
);

export default NotFoundPage;
