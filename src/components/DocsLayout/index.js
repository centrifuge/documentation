import React, { useMemo, useEffect } from "react";
import * as path from "path";
import { graphql } from "gatsby";
import { Grid, Box, Heading, Text, ResponsiveContext } from "grommet";

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
  const isTopLevel = useMemo(() => {
    const { file, instanceName } = mdx.fields;
    return path.dirname(file) === instanceName;
  }, [mdx.fields.file, mdx.fields.instanceName]);

  return (
    <AxisTheme theme={theme}>
      <ResponsiveContext.Consumer>
        {(size) => {
          return (
            <Layout hideFooter size={size}>
              <SEO title={mdx.frontmatter.title} />
              <Box width="100%" gap="medium" pad={{ bottom: "large" }}>
                <Box gap="0">
                  <Box style={{ borderBottom: '1px solid #EEE' }} {...{pad: { horizontal: size === "large" ? "60px" : size === "medium" ? "48px" : "24px", vertical: size === "small" ? "12px" : "24px", }, }}>
                  {
                    // skip rendering category for top-level nodes
                    !isTopLevel && (
                      <Text
                        size="large"
                        style={{
                          fontFamily: "Inter",
                          textTransform: "capitalize",
                          fontSize: '13px'
                        }}
                      >
                        {mdx.fields.instanceName.split("-").join(" ")}
                      </Text>
                    )
                  }
                    <Heading level={1} margin={{ top: '0', bottom: '0' }} style={{ lineHeight: '32px'}}>
                      {mdx.frontmatter.title}
                    </Heading>
                  </Box>
                  <Box style={{ maxWidth: '1024px', marginTop: '24px' }} {...{pad: { horizontal: size === "large" ? "60px" : size === "medium" ? "48px" : "24px", vertical: size === "small" ? "12px" : "0" }}}>
                    <DocsContent mdx={mdx} />
                    <Box
                      direction={size === "small" ? "column" : "row"}
                      gap="medium"
                      margin={{ top: '36px', bottom: '24px' }}
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
                    <Box>
                      <NodeNavigation prevNode={prevNode} nextNode={nextNode} />
                    </Box>
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
