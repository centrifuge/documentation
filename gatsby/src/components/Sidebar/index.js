import React from "react";
import { graphql, StaticQuery, Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import { Text } from "grommet";
import { axisThemeConfig } from "@centrifuge/axis-theme";

import { List, Item as ListItem } from "../List";
import { navLinkStyles, asideLinkStyles } from "../Links";

const Item = styled(ListItem)`
  margin-bottom: 6px;
`;

const Link = styled(GatsbyLink).attrs({
  activeStyle: {
    color: axisThemeConfig.global.colors.brand
  }
})`
  ${navLinkStyles}
  ${asideLinkStyles}
  
  font-weight: 500;
  color: ${axisThemeConfig.global.colors.black};
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
      <List style={{ position: "sticky", top: 64 + 40 }}>
        {allMdx.group.map((category, index) => (
          <Item key={index}>
            <Text
              as="p"
              weight={600}
              margin={{ bottom: "none", top: index !== 0 ? "16px" : "none" }}
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
