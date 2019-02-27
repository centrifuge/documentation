import React from "react";
import styled from "styled-components";
import { Anchor as GrommetAnchor } from "grommet";
import { axisThemeConfig } from "@centrifuge/axis-theme";

import { List, Item as ListItem } from "../List";
import { navLinkStyles } from "../Links";

const Item = styled(ListItem)`
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 6px;
`;

const Anchor = styled(GrommetAnchor).attrs({ color: "#666666" })`
  ${navLinkStyles}
  font-size: 12px;

  &:hover {
    color: ${axisThemeConfig.global.colors.black};
  }
`;

const TableOfContents = ({ content }) => {
  if (content.items)
    return (
      <List style={{position: "sticky", top: 64 + 40}}>
        {/* Level 1 */}
        {content.items.map((level1, index) => (
          <Item key={index}>
            <Item>
              <Anchor href={level1.url}>{level1.title}</Anchor>
            </Item>
            {/* Level 2 */}
            {level1.items && (
              <List style={{ paddingLeft: 16 }}>
                {level1.items.map((level2, index) => (
                  <Item key={index}>
                    <Item>
                      <Anchor href={level2.url}>{level2.title}</Anchor>
                    </Item>
                    {/* Level 3 */}
                    {/* {level2.items && (
                      <List>
                        {level2.items.map((level3, index) => (
                          <Item key={index}>
                            <Anchor href={level3.url}>{level3.title}</Anchor>
                          </Item>
                        ))}
                      </List>
                    )} */}
                  </Item>
                ))}
              </List>
            )}
          </Item>
        ))}
      </List>
    );

  return null;
};

export default TableOfContents;
