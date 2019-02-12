import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";

const Sidebar = ({}) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
                title
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      return (
        <pre>
          <code>{JSON.parse(allMdx.edges, null, 2)}</code>
        </pre>
      );
    }}
  />
);

export default Sidebar;
