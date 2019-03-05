import React from "react";
import { graphql } from "gatsby";
import { Heading, Box, ResponsiveContext, Anchor } from "grommet";

import Layout from "../Layout";
import TableOfContents from "../TableOfContents";
import Sidebar from "../Sidebar";
import DocsContent from "../DocsContent";
import SEO from "../SEO";

const EditPage = ({ file }) => {
  const GITHUB_BASE =
    "https://github.com/centrifuge/developer.centrifuge.io/tree/develop";
  const githubLink = `${GITHUB_BASE}/${file}`;

  return (
    <Box margin={{ top: "large" }}>
      <Anchor href={githubLink}>Edit this page on GitHub</Anchor>
    </Box>
  );
};

const DocsLayout = ({ data: { mdx } }) => (
  <Layout>
    <SEO title={mdx.frontmatter.title} />
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

            <EditPage file={mdx.fields.file} />
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
      fields {
        file
      }
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
