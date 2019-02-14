import React from "react";
import { graphql, StaticQuery, Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import { Text } from "grommet";

import { List, Item } from "../List";

const Link = styled(GatsbyLink)`
  line-height: 24px;
  font-size: 12px;
`;

const Sidebar = () => (
  <StaticQuery
    query={graphql`
      query {
        allMdx(filter: { fields: { title: { ne: "404" } } }) {
          group(field: fields___category) {
            fieldValue
            edges {
              node {
                fields {
                  title
                  slug
                }
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => (
      <List>
        {allMdx.group.map((category, index) => (
          <Item key={index}>
            <Text
              weight={600}
              as="p"
              size="12px"
              margin={{ bottom: "none", top: "16px" }}
              style={{ lineHeight: "24px" }}
            >
              {category.fieldValue}
            </Text>
            <List>
              {category.edges.map((doc, index) => (
                <Item key={index}>
                  <Link to={doc.node.fields.slug}>{doc.node.fields.title}</Link>
                </Item>
              ))}
            </List>
          </Item>
        ))}
      </List>
    )}
  />
);

export default Sidebar;
