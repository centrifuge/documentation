import React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/tag";
import * as Grommet from "grommet";

import Layout from "../Layout";
import TableOfContents from "../TableOfContents";
import CodeHighlighter from "../CodeHighlighter";
import Sidebar from "../Sidebar";

const mdxGrommetMap = {
  p: Grommet.Paragraph,
  h1: props => <Grommet.Heading {...props} level={1} />,
  h2: props => <Grommet.Heading {...props} level={2} />,
  h3: props => <Grommet.Heading {...props} level={3} />,
  h4: props => <Grommet.Heading {...props} level={4} />,
  h5: props => <Grommet.Heading {...props} level={5} />,
  h6: props => <Grommet.Heading {...props} level={6} />,
  a: Grommet.Anchor,
  img: Grommet.Image,
  code: props => (
    <CodeHighlighter
      code={props.children.trim()}
      language={String(props.className).split("language-")[1]}
    />
  )
};

const DocsLayout = ({ data: { mdx } }) => (
  <Layout>
    <Grommet.Box gridArea="sidebar" as="aside">
      <Sidebar />
    </Grommet.Box>

    <Grommet.Box gridArea="main" as="main">
      <Grommet.Heading level={1}>{mdx.frontmatter.title}</Grommet.Heading>

      <MDXProvider components={mdxGrommetMap}>
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
      </MDXProvider>
    </Grommet.Box>

    <Grommet.Box gridArea="toc" as="aside">
      <TableOfContents content={mdx.tableOfContents} />
    </Grommet.Box>
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
