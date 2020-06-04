import React, { useEffect } from "react";
import docsearch from "docsearch.js";
import styled from "styled-components";

import { Box, Button, Keyboard, TextInput, Image } from 'grommet';
import { Search as SearchIcon } from "grommet-icons";

import "docsearch.js/dist/cdn/docsearch.min.css";
import "./algoliaOverrides.css";

const algolia = {
  apiKey: "e1804220d11b9eefa76395d7f70a2e45",
  indexName: "centrifuge"
};

const SearchBox = styled(TextInput).attrs({
  placeholder: "Search",
  id: "search",
  type: "search",
  newsletter: true,
  dark: true
})``;

const onEnter = () => {

};

const SearchInput = ({ setOpen }) => {
  useEffect(() => {
    docsearch({
      apiKey: algolia.apiKey,
      indexName: algolia.indexName,
      inputSelector: "#search",
      debug: true
    });
  }, []);

  return (
    <Keyboard
      onEsc={() => {
        setOpen(false);
      }}
      onEnter={onEnter}
    >
      <SearchBox focusIndicator={false} />
    </Keyboard>
  );
}

const Search = ({ open, setOpen }) => {
  if (open) {
    return (
      <SearchInput setOpen={setOpen}/>
    );
  }

  return (
    <Button
      plain
      onClick={() => {
        setOpen(true);
      }}
      style={{height: '48px'}}
    >
      {({ hover }) => (
        <Box
          round="xlarge"
          style={{minHeight: '48px', padding: '12px'}}
          background={hover ? 'active' : undefined}
        >
          <SearchIcon />
        </Box>
      )}
    </Button>
  );
};

export default Search;
