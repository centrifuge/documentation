import React, {useState} from "react";
import { Box, Image } from "grommet";
import NodeTOC from "./NodeTOC";
import InternalLink from "./InternalLink";

const InstanceTOC = ({ nodes, size, title, name, icon, location }) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(title.toLowerCase().includes(location.pathname.split("/")[1].split("-").join(" ")));
  const secondLevelNodes = [];
  const nodesInSubpages = nodes
    .filter((node) => {
      // remove top level subpages from nodes
      if (node?.category === "subpage") {
        secondLevelNodes.push(node);
        return false;
      }
      return true;
    })
    .map((node) => {
      // find slugs that have subpages and nest the node under the page
      const subpage = secondLevelNodes.filter((subpage) => {
        return (
          subpage.slug.split("/").filter(Boolean)[1] ===
          node.slug.split("/").filter(Boolean)[1]
        );
      });
      if (subpage) {
        node.secondLevelPages = subpage;
      }
      return node;
    });

  return (
    <Box gap="small">
      {size !== "large" && (
        <Box direction="row" align="center" gap="small">
          <Image src={icon} height="20px" />
          <button
            style={{border: "none", background: "none", padding: "0", cursor: "pointer"}}
            onClick={(e) => {
              setOpenMobileMenu(!openMobileMenu)
            }}
            label={name}
          >{title}</button>
        </Box>
      )}
      <Box gap="0">
        {openMobileMenu && nodesInSubpages?.map((node, i) => {
          return <NodeTOC key={i} {...node} size={size} />;
        })}
      </Box>
    </Box>
  );
};

export default InstanceTOC;
