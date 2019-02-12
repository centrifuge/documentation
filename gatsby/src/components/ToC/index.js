import React from "react";

const ToC = ({ content }) => {
  if (content.items)
    return (
      <ul>
        {content.items.map((level0, index) => (
          <li key={index}>
            <a href={level0.url}>{level0.title}</a>
          </li>
        ))}
      </ul>
    );

  return null;
};

export default ToC;
