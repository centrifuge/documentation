import React, { Suspense } from "react";
import { ResponsiveContext } from "grommet";
import "swagger-ui-react/swagger-ui.css";

import spec from "../assets/swagger.json";
import Layout from "../components/Layout";
import { theme } from "../theme";
import { AxisTheme } from "@centrifuge/axis-theme";

const SwaggerUI = React.lazy(() =>
  typeof window !== "undefined"
    ? import("swagger-ui-react")
    : Promise.resolve({ default: () => null })
);

export default () => (
  <AxisTheme theme={theme}>
    <ResponsiveContext.Consumer>
      {(size) => (
        <Layout size={size}>
          <Suspense fallback={<div>Loading...</div>}>
            <SwaggerUI spec={spec} />
          </Suspense>
        </Layout>
      )}
    </ResponsiveContext.Consumer>
  </AxisTheme>
);
