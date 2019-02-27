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
  h1: props => <Grommet.Heading {...props} level={1} />,
  h2: props => <Grommet.Heading {...props} level={2} />,
  h3: props => <Grommet.Heading {...props} level={3} />,
  h4: props => <Grommet.Heading {...props} level={4} />,
  h5: props => <Grommet.Heading {...props} level={5} />,
  h6: props => <Grommet.Heading {...props} level={6} />,
  li: props => <Grommet.Text {...props} as="li" />,
  ul: props => <ListBase {...props} as="ul" />,
  ol: props => <ListBase {...props} as="ol" />,
  a: Grommet.Anchor,
  img: Grommet.Image,
  code: props => (
    <CodeHighlighter
      code={props.children.trim()}
      language={String(props.className).split("language-")[1]}
    />
  )
};

const DocsContent = ({ mdx }) => (
  <MDXProvider components={mdxGrommetMap}>
    <MDXRenderer>{mdx.code.body}</MDXRenderer>
  </MDXProvider>
);

export default DocsContent;
