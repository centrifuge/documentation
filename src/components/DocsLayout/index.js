import React, { useMemo } from "react";
import { graphql } from "gatsby";
import { Box, Heading, ResponsiveContext } from "grommet";

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

  const prevNode = useMemo(
    () => getNthNode(mdx.frontmatter.order - 1),
    [mdx.frontmatter.order]
  );
  const nextNode = useMemo(
    () => getNthNode(mdx.frontmatter.order + 1),
    [mdx.frontmatter.order]
  );

  return (
    <AxisTheme theme={theme}>
      <ResponsiveContext.Consumer>
        {(size) => {
          return (
            <Layout hideFooter size={size}>
              <SEO title={mdx.frontmatter.title} />
              <Box width="100%" gap="medium" pad={{ bottom: "small" }}>
                <Box gap="0">
                  <Box
                    {...{
                      pad: {
                        horizontal:
                          size === "large"
                            ? "66px"
                            : size === "medium"
                            ? "48px"
                            : "24px",
                        vertical: size === "small" ? "0" : "16px",
                      },
                    }}
                    style={{ maxWidth: "740px", width: "100%" }}
                  >
                    <Heading level={1} style={{ lineHeight: "32px" }}>
                      {mdx.frontmatter.title}
                    </Heading>
                  </Box>
                  <Box
                    style={{
                      maxWidth: "1024px",
                    }}
                    {...{
                      pad: {
                        horizontal:
                          size === "large"
                            ? "66px"
                            : size === "medium"
                            ? "48px"
                            : "24px",
                        vertical: "0",
                      },
                    }}
                  >
                    <DocsContent mdx={mdx} size={size} />
                    <Box
                      direction={size === "small" ? "column" : "row"}
                      gap="medium"
                      margin={{ top: "36px", bottom: "24px" }}
                    >
                      <EditPage file={mdx.fields.file} />
                      {!!mdx.frontmatter?.contributors && (
                        <Box direction="row" gap="medium">
                          {size !== "small" && (
                            <Box border={{ side: "right" }} />
                          )}
                          <Contributors
                            contributors={mdx.frontmatter.contributors}
                          />
                        </Box>
                      )}
                    </Box>
                  </Box>
                  <Box
                    style={{ borderTop: "1px solid #E0E0E0" }}
                    {...{
                      pad: {
                        horizontal:
                          size === "large"
                            ? "66px"
                            : size === "medium"
                            ? "48px"
                            : "24px",
                        vertical: size === "small" ? "0" : "16px",
                      },
                    }}
                  >
                    <NodeNavigation prevNode={prevNode} nextNode={nextNode} />
                  </Box>
                </Box>
              </Box>
            </Layout>
          );
        }}
      </ResponsiveContext.Consumer>
    </AxisTheme>
  );
};

const Maxfunctionresult =
  "Senior Tranche redemptions" * "100,000,000,000" +
  "Junior Tranche investments" * "100,000,000" +
  "Senior investments" * "100,000" +
  "Junior redemptions" * "100";

export const query = graphql`
  query DocsQuery($id: String, $instanceName: String) {
    mdx(id: { eq: $id }) {
      id
      fields {
        file
        instanceName
        slug
      }
      frontmatter {
        title
        order
        contributors
        category
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
