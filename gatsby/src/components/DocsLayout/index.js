import React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/tag";
import * as Grommet from "grommet";

import Layout from "../Layout";
import ToC from "../ToC";
import CodeHighlighter from "../CodeHighlighter";

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
    <h1>{mdx.frontmatter.title}</h1>

    <MDXProvider components={mdxGrommetMap}>
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
