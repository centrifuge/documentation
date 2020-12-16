import React from "react";
import { ResponsiveContext } from "grommet";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

import spec from "../assets/swagger.json";
import Layout from "../components/Layout";
import { theme } from "../theme";
import { AxisTheme } from "@centrifuge/axis-theme";

export default () => (
  <AxisTheme theme={theme}>
    <ResponsiveContext.Consumer>
      {(size) => (
        <Layout size={size}>
          <SwaggerUI spec={spec} />
        </Layout>
      )}
    </ResponsiveContext.Consumer>
  </AxisTheme>
);
