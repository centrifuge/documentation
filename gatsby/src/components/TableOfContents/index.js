import React from "react";
import styled from "styled-components";
import { Anchor as GrommetAnchor } from "grommet";

import { List, Item } from "../List";

const Anchor = styled(GrommetAnchor)`
  line-height: 1.5;
  font-size: 12px;
  margin-bottom: 6px;
`;

const TableOfContents = ({ content }) => {
  if (content.items)
    return (
      <List>
        {/* Level 1 */}
        {content.items.map((level1, index) => (
          <Item key={index}>
            <Anchor href={level1.url}>{level1.title}</Anchor>
            {/* Level 2 */}
            {level1.items && (
              <List style={{ paddingLeft: 16 }}>
                {level1.items.map((level2, index) => (
                  <Item key={index}>
                    <Anchor href={level2.url}>{level2.title}</Anchor>
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
