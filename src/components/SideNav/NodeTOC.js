import React, { useRef, useEffect, useState } from "react";
import { Box } from "grommet";

import InternalLink from "./InternalLink";

const NodeTOC = ({ slug, title, tableOfContents, secondLevelPages }) => {
  const [expandChildren, setExpandChildren] = useState(false);
  const linkRef = useRef(null);

  useEffect(() => {
    if (linkRef.current?.isActive) {
      setExpandChildren(true);
    } else {
      setExpandChildren(false);
    }
  }, [slug]);

  return (
    <Box>
      <InternalLink
        primary
        href={slug}
        label={title}
        ref={linkRef}
        hasChildren={secondLevelPages.length > 0}
      />
      <Box>
        {expandChildren &&
          secondLevelPages &&
          secondLevelPages.map((page, i) => {
            return (
              <Box margin={{ left: "small" }}>
                <InternalLink
                  key={`${i}+${page.slug}`}
                  href={page.slug}
                  label={page.title}
                  subpageChild
                />
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

export default NodeTOC;
