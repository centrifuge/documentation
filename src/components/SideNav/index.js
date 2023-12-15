import React, { useMemo } from "react";
import { Box, Image, Button } from "grommet";
import { Close } from "grommet-icons";
import { graphql, useStaticQuery, Link } from "gatsby";
import { useLocation } from "@reach/router";

import docs_wordmark from "../../images/docs_wordmark.svg";
import getting_started_face from "../../images/faces/getting-started-small.svg";
import use_face from "../../images/faces/use.svg";
import build_face from "../../images/faces/build.svg";

import InstanceTOC from "./InstanceTOC";

const SideNav = ({ onClose, size }) => {
  const location = useLocation();
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
                category
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
    { name: "user", title: "User documentation", icon: use_face },
    {
      name: "developer",
      title: "Developer documentation",
      icon: build_face,
    },
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
      {size === "small" && (
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
      )}
      <Box gap="medium" fill="horizontal">
        {instances
          .filter((instance) => {
            return (
              size === "small" ||
              instance?.name === location?.pathname?.split("/")[1]
            );
          })
          .map((instance, i) => {
            return (
              <Box gap="small" key={i} flex="grow">
                <InstanceTOC {...instance} size={size} />
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

export default SideNav;
