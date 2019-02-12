import React from "react";

const ToC = ({ content: { items } }) => (
  <ul>
    {items.map((level0, index) => (
      <li key={index}>
        <a href={level0.url}>{level0.title}</a>
      </li>
    ))}
  </ul>
);

export default ToC;
