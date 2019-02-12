import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";

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
      <ul>
        {allMdx.group.map((category, index) => (
          <li key={index}>
            <p>{category.fieldValue}</p>
            <ul>
              {category.edges.map((doc, index) => (
                <li key={index}>
                  <Link to={doc.node.fields.slug}>{doc.node.fields.title}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    )}
  />
);

export default Sidebar;
