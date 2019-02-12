import React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/tag";

import Layout from "../Layout";
import ToC from "../ToC";

const DocsLayout = ({ data: { mdx } }) => (
  <Layout>
    <h1>{mdx.frontmatter.title}</h1>

    <MDXProvider components={{}}>
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </MDXProvider>

    <ToC content={mdx.tableOfContents} />
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
      tableOfContents
    }
  }
`;

export default DocsLayout;
