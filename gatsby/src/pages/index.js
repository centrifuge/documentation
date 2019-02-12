import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Sidebar from "../components/sidebar";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Sidebar />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
);

export default IndexPage;
