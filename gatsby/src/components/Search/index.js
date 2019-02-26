import React, { useEffect } from "react";
import docsearch from "docsearch.js";

import "docsearch.js/dist/cdn/docsearch.min.css";
import "./algoliaOverrides.css";

const algolia = {
  apiKey: "e1804220d11b9eefa76395d7f70a2e45",
  indexName: "centrifuge"
};

const Search = () => {
  useEffect(() => {
    docsearch({
      apiKey: algolia.apiKey,
      indexName: algolia.indexName,
      inputSelector: "#search",
      debug: true
    });
  }, []);

  return <input type="search" placeholder="Search" id="search" />;
};

export default Search;
