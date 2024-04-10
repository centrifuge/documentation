import React from "react";
import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";
import {
  Text as GrommetText,
  Heading as GrommetHeading,
  Paragraph as GrommetParagraph,
  Image,
  Box,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "grommet";
import qs from "query-string";

import CodeHighlighter from "../CodeHighlighter";

import "./styles.css";

import link from "../../images/link.svg";

const ListBase = styled(GrommetText)`
  padding-left: 1rem;
`;

const Anchor = styled.a.attrs({
  "aria-hidden": "true",
})`
  display: block;
  position: relative;
  top: -80px;
`;

const Heading = styled(GrommetHeading)`
  position: relative;
  border-bottom: none;
  padding-bottom: 0;
`;

const Paragraph = styled(GrommetParagraph)`
  font-family: Inter, sans-serif;
  font-size: 16px;
  line-height: 1.7em;
`;

const Text = styled(GrommetText)`
  font-family: Inter, sans-serif;
  font-size: 16px;
  line-height: 1.7em;
`;

const Hash = styled.a.attrs({
  "aria-hidden": "true",
})`
  opacity: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 0.3s;
  position: absolute;
  left: -24px;
  text-decoration: none;

  &::before {
    content: "";
    display: block;
    background-image: url(${link});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 16px;
    width: 16px;
  }

  ${Heading}:hover & {
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
`;

const mdxGrommetMap = {
  p: (props) => <Paragraph>{props.children}</Paragraph>,
  h1: (props) => (
    <Heading level={1}>
      <Anchor id={props.id} />
      <Hash href={`#${props.id}`} />
      {props.children}
    </Heading>
  ),
  h2: (props) => (
    <Heading level={2}>
      <Anchor id={props.id} />
      <Hash href={`#${props.id}`} />
      {props.children}
    </Heading>
  ),
  h3: (props) => (
    <Heading level={3}>
      <Anchor id={props.id} />
      <Hash href={`#${props.id}`} />
      {props.children}
    </Heading>
  ),
  h4: (props) => (
    <Heading level={4}>
      <Anchor id={props.id} />
      <Hash href={`#${props.id}`} />
      {props.children}
    </Heading>
  ),
  h5: (props) => (
    <Heading level={5}>
      <Anchor id={props.id} />
      <Hash href={`#${props.id}`} />
      {props.children}
    </Heading>
  ),
  h6: (props) => (
    <Heading level={6}>
      <Anchor id={props.id} />
      <Hash href={`#${props.id}`} />
      {props.children}
    </Heading>
  ),
  table: (props) => (
    <Box fill={"horizontal"}>
      <Table className={"MdxTable"}>{props.children}</Table>
    </Box>
  ),
  thead: (props) => <TableHeader>{props.children}</TableHeader>,
  tbody: (props) => <TableBody>{props.children}</TableBody>,
  tr: (props) => <TableRow as={"tr"}>{props.children}</TableRow>,
  td: (props) => <TableCell>{props.children}</TableCell>,
  th: (props) => <TableCell scope="col">{props.children}</TableCell>,
  li: (props) => <Text {...props} as="li" />,
  ul: (props) => <ListBase {...props} as="ul" />,
  ol: (props) => <ListBase {...props} as="ol" />,
  a: Anchor,
  img: (props) => {
    const styleProps = qs.parseUrl(props.src, { parseBooleans: true }).query;

    if (styleProps.width)
      return (
        <Image
          {...props}
          style={{
            float: styleProps.float || "auto",
            width: styleProps.width || "80%",
          }}
        />
      );
    else
      return (
        <Box pad="large">
          <Image {...props} width="100%" />
        </Box>
      );
  },
  inlineCode: (props) => <Text color="brand" as="code" {...props} />,
  code: (props) => (
    <CodeHighlighter
      code={props.children.trim()}
      language={String(props.className).replace(/^language-/, "")}
    />
  ),
};

const DocsContent = ({ children }) => {
  return (
    <MDXProvider components={mdxGrommetMap}>
      {/*  Note from Devin: temporary fix here to not render page title.
      This is because, with current nav / anchor link system, all articles *must* have at least 1 H1 and 1 H2 element.
      This way we can instead use the in-text H1 as page title (which looks mostly the same) and H2s as subheaders.
      This is an easier fix from a content perspective than forcing every page to have an H1 and an H2 (many pages are not long enough to warrant this)
      So for now, we'll use in-text H1 as title and restore the below once H1s and H2s are not required for every page.

      <Heading level={1} style={{ lineHeight: "32px", marginBottom: 0 }}>
        {mdx.frontmatter.title}
      </Heading>
      */}
      {children}
    </MDXProvider>
  );
};

export default DocsContent;
