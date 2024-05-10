import React from "react";

import { Highlight, themes } from "prism-react-renderer";
import styled from "styled-components";

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 1em;
  overflow-x: scroll;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`;

const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;

export const CodeHighlighter = ({ code, language }) => (
  <Highlight code={code} language={language} theme={themes.oceanicNext}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div key={`${line}-${i}`} {...getLineProps({ line, key: i })}>
            <LineNo>{i + 1}</LineNo>
            {line.map((token, key) => (
              <span
                key={`${token}-${key}`}
                {...getTokenProps({ token, key })}
              />
            ))}
          </div>
        ))}
      </Pre>
    )}
  </Highlight>
);

export default CodeHighlighter;
