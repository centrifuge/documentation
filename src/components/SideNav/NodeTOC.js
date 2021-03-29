import React, { useRef, useEffect, useState } from "react";
import { Box } from "grommet";

import InternalLink from "./InternalLink";

const NodeTOC = ({ slug, title, order, tableOfContents }) => {
  const [isActive, setActive] = useState(false);
  const linkRef = useRef(null);

  useEffect(() => {
    setActive(!!linkRef.current?.isActive);
  }, [slug]);

  return (
    <Box gap="xsmall">
      <InternalLink primary href={slug} label={title} ref={linkRef} />
      {!!tableOfContents?.items && isActive && (
        <Box pad={{ left: "small" }}>
          {tableOfContents.items.map((heading, i) => (
            <InternalLink
              key={i}
              href={`${slug}${heading.url}`}
              label={heading.title}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default NodeTOC;
