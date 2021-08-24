import React, { useMemo } from "react";
import { Box, Image, Button, Anchor } from "grommet";
import { Close } from "grommet-icons";
import { graphql, useStaticQuery, Link } from "gatsby";

import docs_wordmark from "../../images/docs_wordmark.svg";
import getting_started_face from "../../images/faces/getting-started-small.svg";
import learn_face from "../../images/faces/learn.svg";
import use_face from "../../images/faces/use.svg";
import build_face from "../../images/faces/build.svg";

import InstanceTOC from "./InstanceTOC";

const SideNav = ({ onClose, size }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx {
        group(field: fields___instanceName) {
          fieldValue
          edges {
            node {
              fields {
                slug
                title
              }
              frontmatter {
                order
              }
              tableOfContents
            }
          }
        }
      }
    }
  `);

  let instances = [
    {
      name: "getting-started",
      title: "Getting Started",
      icon: getting_started_face,
    },
    { name: "learn", title: "Learn", icon: learn_face },
    { name: "use", title: "Use", icon: use_face },
    { name: "build", title: "Build", icon: build_face },
  ];

  instances = useMemo(
    () =>
      instances.map((instance) => {
        const group = data.allMdx.group.filter(
          (group) => group.fieldValue === instance.name
        )[0];
        const nodes = group.edges
          .map((edge) => ({
            ...edge.node.fields,
            ...edge.node.frontmatter,
            tableOfContents: edge.node.tableOfContents,
          }))
          .sort((a, b) => a.order - b.order);

        return {
          ...instance,
          nodes,
        };
      }),
    [data]
  );

  return (
    <Box
      pad={{
        horizontal: "medium",
        vertical: "medium",
      }}
      align="start"
      gap="medium"
    >
      {size === "small" ? (
        <Box direction="row" fill="horizontal" justify="between" align="center">
          <Link to="/">
            <Image src={docs_wordmark} height="32px" />
          </Link>
          {!!onClose && (
            <Button
              icon={<Close />}
              style={{
                padding: "0",
              }}
              onClick={onClose}
            />
          )}
        </Box>
      ) : (
        <Link to="/">
          <Image src={docs_wordmark} height="32px" />
        </Link>
      )}
      <Box gap="small" fill="horizontal">
        {instances.map((instance, i) => {
          return (
            <Box gap="small" key={i} flex="grow">
              {i !== 0 && (
                <Box
                  border={{ side: "top", size: "0.5px", color: "light-5" }}
                />
              )}
              <InstanceTOC {...instance} size={size} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SideNav;
