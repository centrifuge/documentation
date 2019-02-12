import React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/tag";

import Layout from "../Layout";

const DocsLayout = ({ data: { mdx } }) => (
  <Layout>
    <h1>{mdx.frontmatter.title}</h1>

    <MDXProvider
      components={{
        p: props => <p {...props} style={{ color: "rebeccapurple" }} />
      }}
    >
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </MDXProvider>
  </Layout>
);

export const query = graphql`
  query DocsQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`;

export default DocsLayout;
