import React, { useMemo } from "react";
import { graphql } from "gatsby";
import { Box, ResponsiveContext } from "grommet";

import Layout from "../Layout";
import { theme } from "../../theme";
import { AxisTheme } from "@centrifuge/axis-theme/";
import SEO from "../SEO";

// Import KaTex styles to render Math functions
import "katex/dist/katex.min.css";

import EditPage from "./EditPage";
import Contributors from "./Contributors";
import NodeNavigation from "./NodeNavigation";
import DocsContent from "../DocsContent";
import AnchorMenu from "../AnchorMenu";

export const DocsLayout = ({ data, children }) => {
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
                    style={{
                      maxWidth: "960px",
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
                    <Box
                      direction="row"
                      gap={"medium"}
                      style={{ maxWidth: "960px" }}
                    >
                      <Box
                        style={{
                          minWidth: size === "small" ? "100%" : "740px",
                          width: size === "small" ? "100%" : "740px",
                        }}
                      >
                        <DocsContent>{children}</DocsContent>
                      </Box>
                      <AnchorMenu size={size} mdx={mdx} />
                    </Box>

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
                        vertical: size === "small" ? "12px" : "16px",
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

export const pageQuery = graphql`
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
      body
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
