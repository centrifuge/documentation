import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { Box } from "grommet";

const Link = styled(GatsbyLink)`
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }

  font-family: Inter, sans-serif;
  font-weight: 400;
  color: #424242;

  line-height: 1.375;
  padding: "4px 0";
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  &.activeLink {
    color: #000;
    font-weight: 600;
  }
`;

const AnchorLinks = ({ links, slug, size }) => {
  const [activeLink, setActiveLink] = React.useState(null);

  const internalLinks = links?.map((link) => {
    return { href: link.url, label: link.title };
  });

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersectingEntry = entries.find((entry) => entry.isIntersecting);

        if (intersectingEntry) {
          setActiveLink(`#${intersectingEntry.target.id}`);
        }
      },
      { threshold: 0.1 }
    );

    internalLinks.forEach((link) => {
      const target = document.querySelector(`#${link.href.split("#")[1]}`);
      if (target) {
        observer.observe(target);
      }
    });

    return () => {
      internalLinks.forEach((link) => {
        const target = document.querySelector(`#${link.href.split("#")[1]}`);
        if (target) {
          observer.unobserve(target);
        }
      });
    };
  }, [internalLinks]);

  return (
    <Box pad={{ left: "large" }}>
      <Box
        pad={{ left: "small", right: "medium" }}
        gap="small"
        style={{
          position: "sticky",
          top: "calc(55px + 16px)",
          display: "flex",
          flexWrap: "wrap",
          borderLeft: "1px solid #E0E0E0",
          minWidth: "250px",
          maxWidth: "250px",
        }}
      >
        {internalLinks.map((link) => (
          <Link
            key={link.href}
            to={`${slug}${link.href}`}
            className={link.href === activeLink ? "activeLink" : ""}
          >
            {link.label}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default AnchorLinks;
