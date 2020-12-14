import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

import spec from "../assets/swagger.json";

export default () => <SwaggerUI spec={spec} />;
