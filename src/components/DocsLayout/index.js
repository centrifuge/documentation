import React, { useMemo, useContext } from "react";
import { graphql } from "gatsby";
import { Box, Heading, Text, ResponsiveContext } from "grommet";

import Layout from "../Layout";
import { theme } from "../../theme";
import { AxisTheme } from "@centrifuge/axis-theme/";
import SEO from "../SEO";

// Import KaTex styles to render Math functions
import "katex/dist/katex.css";

import EditPage from "./EditPage";
import Contributors from "./Contributors";
import NodeNavigation from "./NodeNavigation";
import DocsContent from "../DocsContent";

const DocsLayout = ({ data }) => {
  const { mdx, allMdx } = data;

  const getNthNode = (n) => {
    let filtered = allMdx.edges.filter(
      (edge) => edge.node.frontmatter.order === n
    );
    if (filtered.length !== 1) return null;
    else return filtered[0].node;
  };

  const prevNode = useMemo(() => getNthNode(mdx.frontmatter.order - 1), [data]);
  const nextNode = useMemo(() => getNthNode(mdx.frontmatter.order + 1), [data]);

  return (
    <AxisTheme theme={theme}>
      <ResponsiveContext.Consumer>
        {(size) => {
          return (
            <Layout hideFooter size={size}>
              <SEO title={mdx.frontmatter.title} />
              <Box width="100%" gap="medium" pad={{ bottom: "large" }}>
                <Box>
                  <Text
                    size="large"
                    style={{
                      fontFamily: "Space Mono",
                      textTransform: "capitalize",
                    }}
                  >
                    {mdx.fields.instanceName}
                  </Text>
                  <Heading level={1} margin={{ vertical: "0" }}>
                    {mdx.frontmatter.title}
                  </Heading>
                  <Box
                    direction={size === "small" ? "column" : "row"}
                    gap="medium"
                  >
                    <EditPage file={mdx.fields.file} />
                    {!!mdx.frontmatter?.contributors && (
                      <Box direction="row" gap="medium">
                        {size !== "small" && <Box border={{ side: "right" }} />}
                        <Contributors
                          contributors={mdx.frontmatter.contributors}
                        />
                      </Box>
                    )}
                  </Box>
                </Box>
                <DocsContent mdx={mdx} />
                <Box>
                  <NodeNavigation prevNode={prevNode} nextNode={nextNode} />
                </Box>
              </Box>
            </Layout>
          );
        }}
      </ResponsiveContext.Consumer>
    </AxisTheme>
  );
};

export const query = graphql`
  query DocsQuery($id: String, $instanceName: String) {
    mdx(id: { eq: $id }) {
      id
      fields {
        file
        instanceName
      }
      frontmatter {
        title
        order
        contributors
      }
      code {
        body
      }
      tableOfContents
    }
    allMdx(
      filter: {
        fields: { title: { ne: "404" }, instanceName: { eq: $instanceName } }
      }
    ) {
      edges {
        node {
          frontmatter {
            order
          }
          fields {
            title
            slug
          }
        }
      }
    }
  }
`;

export default DocsLayout;
