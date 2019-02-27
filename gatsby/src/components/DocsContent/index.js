import React from "react";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/tag";
import styled from "styled-components";
import * as Grommet from "grommet";

import CodeHighlighter from "../CodeHighlighter";

const ListBase = styled(Grommet.Text)`
  padding-left: 1rem;
`;

const mdxGrommetMap = {
  p: Grommet.Paragraph,
  h1: props => (
    <Grommet.Heading
      {...props}
      margin={{ bottom: "large", top: "small" }}
      level={1}
    />
  ),
  h2: props => (
    <Grommet.Heading
      {...props}
      margin={{ bottom: "large", top: "small" }}
      level={2}
    />
  ),
  h3: props => (
    <Grommet.Heading
      {...props}
      margin={{ bottom: "medium", top: "small" }}
      level={3}
    />
  ),
  h4: props => (
    <Grommet.Heading
      {...props}
      margin={{ bottom: "medium", top: "small" }}
      level={4}
    />
  ),
  h5: props => (
    <Grommet.Heading
      {...props}
      margin={{ bottom: "medium", top: "small" }}
      level={5}
    />
  ),
  h6: props => (
    <Grommet.Heading
      {...props}
      margin={{ bottom: "medium", top: "small" }}
      level={6}
    />
  ),
  li: props => <Grommet.Text {...props} as="li" />,
  ul: props => <ListBase {...props} as="ul" />,
  ol: props => <ListBase {...props} as="ol" />,
  a: Grommet.Anchor,
  img: Grommet.Image,
  inlineCode: props => <Grommet.Text color="brand" as="code" {...props} />,
  code: props => (
    <CodeHighlighter
      code={props.children.trim()}
      language={String(props.className).replace(/^language-/, "")}
    />
  )
};

const DocsContent = ({ mdx }) => (
  <MDXProvider components={mdxGrommetMap}>
    <MDXRenderer>{mdx.code.body}</MDXRenderer>
  </MDXProvider>
);

export default DocsContent;
