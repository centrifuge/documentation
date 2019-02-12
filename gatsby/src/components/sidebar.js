import React from "react";
import { graphql, StaticQuery } from "gatsby";

const Sidebar = () => (
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
    render={({ allMdx }) => (
      <>
        <p>Sidebar</p>
        <pre>
          <code>{JSON.stringify(allMdx.edges, null, 2)}</code>
        </pre>
      </>
    )}
  />
);

export default Sidebar;
