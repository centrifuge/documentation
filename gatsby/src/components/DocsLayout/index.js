import React from "react";
import { graphql } from "gatsby";
import { Heading, Box, ResponsiveContext, Anchor } from "grommet";

import Layout from "../Layout";
import TableOfContents from "../TableOfContents";
import Sidebar from "../Sidebar";
import DocsContent from "../DocsContent";

const EditPage = ({ path }) => {
  const GITHUB_BASE =
    "https://github.com/centrifuge/developer.centrifuge.io/tree/develop/";
  const githubLink = `${GITHUB_BASE}${
    path.match(/.*(developer.centrifuge.io)(.*)/)[2]
  }`;

  return (
    <Box margin={{ top: "large" }}>
      <Anchor href={githubLink}>Edit this page on GitHub</Anchor>
    </Box>
  );
};

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

            <EditPage path={mdx.fileAbsolutePath} />
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
      fileAbsolutePath
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
