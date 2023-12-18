import React, { useRef, useEffect, useState } from "react";
import { Box } from "grommet";

import InternalLink from "./InternalLink";

const NodeTOC = ({ slug, title, tableOfContents, isParent }) => {
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
          {tableOfContents.items.map((heading, i) => {
            return (
              <Box>
                <InternalLink
                  key={i}
                  href={`${slug}${heading.url}`}
                  label={heading.title}
                />
                {heading?.items?.map((subheading, i) => {
                  if (isParent) {
                    return (
                      <Box style={{ paddingLeft: "16px" }}>
                        <InternalLink
                          key={subheading.title}
                          href={`${slug}${subheading.url.split("#")[1]}`}
                          label={subheading.title}
                        />
                      </Box>
                    );
                  }
                })}
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default NodeTOC;
