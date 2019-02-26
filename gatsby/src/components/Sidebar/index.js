import React from "react";
import { graphql, StaticQuery, Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import { Text } from "grommet";
import { axisThemeConfig } from "@centrifuge/axis-theme";

import { List, Item as ListItem } from "../List";

const Item = styled(ListItem)`
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 6px;
`;

const Link = styled(GatsbyLink).attrs({
  activeStyle: {
    color: axisThemeConfig.global.colors.brand
  }
})`
  line-height: 1.4;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  color: ${axisThemeConfig.global.colors.black};

  &:hover {
    text-decoration: underline;
  }
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
            <Text as="p" weight={600} margin={{ bottom: "none", top: "16px" }}>
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
