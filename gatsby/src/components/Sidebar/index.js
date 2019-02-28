import React, { useState } from "react";
import { graphql, StaticQuery, Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import {
  Text,
  Box,
  Accordion,
  AccordionPanel,
  ResponsiveContext,
  Heading
} from "grommet";
import { FormDown, FormUp } from "grommet-icons";

import { List, Item as ListItem } from "../List";
import { navLinkStyles, asideLinkStyles } from "../Links";

const Item = styled(ListItem)`
  margin-bottom: 6px;
`;

const Link = styled(GatsbyLink)`
  ${navLinkStyles}
  ${asideLinkStyles}

  font-weight: 500;
  color: ${props => props.theme.global.colors.black};

  &.activeLink {
    color: ${props => props.theme.global.colors.brand};
  }
`;

const renderPanelHeader = (title, active) => (
  <Box direction="row" align="center" justify="between">
    <Heading level={4} margin={{ vertical: "medium" }}>
      {title}
    </Heading>
    {active ? <FormUp /> : <FormDown />}
  </Box>
);

const SidebarAccordion = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState([]);

  return (
    <Accordion
      activeIndex={activeIndex}
      onActive={newActiveIndex => setActiveIndex(newActiveIndex)}
    >
      <AccordionPanel
        header={renderPanelHeader(
          "Expand Sidebar",
          String(activeIndex).includes(0)
        )}
      >
        {children}
      </AccordionPanel>
    </Accordion>
  );
};

const Sidebar = () => (
  <ResponsiveContext.Consumer>
    {size => {
      if (size === "small")
        return (
          <Box>
            <SidebarAccordion>
              <Box pad={{ bottom: "medium" }}>
                <SidebarContent />
              </Box>
            </SidebarAccordion>
          </Box>
        );

      return (
        <Box
          style={{
            position: "sticky",
            position: "-webkit-sticky",
            top: 64 + 40
          }}
        >
          <SidebarContent />
        </Box>
      );
    }}
  </ResponsiveContext.Consumer>
);

const SidebarContent = () => (
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
              as="p"
              weight={600}
              margin={{ bottom: "none", top: index !== 0 ? "16px" : "none" }}
            >
              {category.fieldValue}
            </Text>
            <List>
              {category.edges.map((doc, index) => (
                <Item key={index}>
                  <Link to={doc.node.fields.slug} activeClassName="activeLink">
                    {doc.node.fields.title}
                  </Link>
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
