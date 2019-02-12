import React from "react";

const ToC = ({ content }) => {
  if (content.items)
    return (
      <ul>
        {/* Level 1 */}
        {content.items.map((level1, index) => (
          <li key={index}>
            <a href={level1.url}>{level1.title}</a>
            {/* Level 2 */}
            {level1.items && (
              <ul>
                {level1.items.map((level2, index) => (
                  <li key={index}>
                    <a href={level2.url}>{level2.title}</a>
                    {/* Level 3 */}
                    {/* {level2.items && (
                      <ul>
                        {level2.items.map((level3, index) => (
                          <li key={index}>
                            <a href={level3.url}>{level3.title}</a>
                          </li>
                        ))}
                      </ul>
                    )} */}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    );

  return null;
};

export default ToC;
