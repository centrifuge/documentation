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
  color: #b4b4b4;

  line-height: 1.375;
  padding: "4px 0";
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  &.activeLink {
    color: #000;
    font-weight: 600;
  }
`;

const AnchorLinks = ({ links, slug }) => {
  const [activeLink, setActiveLink] = React.useState(null);

  const internalLinks = links?.map((link) => {
    return { href: link.url, label: link.title };
  });

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5, rootMargin: "100px 0px -50% 0px" }
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
    <Box
      pad={{ left: "small", right: "medium" }}
      gap="small"
      style={{
        position: "fixed",
        left: "calc(1024px + 300px)",
        minWidth: "200px",
        maxWidth: "300px",
        display: "flex",
        flexWrap: "wrap",
        borderLeft: "1px solid #E0E0E0",
      }}
    >
      {internalLinks.map((link) => (
        <Link
          key={link.href}
          to={`${slug}${link.url}`}
          className={link.href === activeLink ? "activeLink" : ""}
        >
          {link.label}
        </Link>
      ))}
    </Box>
  );
};

export default AnchorLinks;
