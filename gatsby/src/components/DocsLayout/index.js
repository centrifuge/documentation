import React from "react";
import { graphql } from "gatsby";
import { Heading, Box, ResponsiveContext } from "grommet";

import Layout from "../Layout";
import TableOfContents from "../TableOfContents";
import Sidebar from "../Sidebar";
import DocsContent from "../DocsContent";

const DocsLayout = ({ data: { mdx } }) => (
  <Layout>
    <ResponsiveContext.Consumer>
      {size => (
        <>
          <Box gridArea="sidebar" as="aside">
            <Sidebar />
          </Box>

          <Box gridArea="main" as="main">
            <Heading level={1} lined>
              {mdx.frontmatter.title}
            </Heading>

            <DocsContent mdx={mdx} />
          </Box>

          {size === "large" && (
            <Box gridArea="toc" as="aside">
              <TableOfContents content={mdx.tableOfContents} />
            </Box>
          )}
        </>
      )}
    </ResponsiveContext.Consumer>
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
