import React from "react";
import PropTypes from "prop-types";
import { Grommet } from "grommet";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset */
  /*! modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */
  html{box-sizing:border-box}*,::after,::before{box-sizing:inherit}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}hr{height:0}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:SFMono-Regular,Consolas,'Liberation Mono',Menlo,Courier,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{padding:0}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}

  /*
    This CSS resource incorporates links to font software which is the valuable copyrighted property of Monotype and/or its suppliers. You may not attempt to copy, install, redistribute, convert, modify or reverse engineer this font software. Please contact Monotype with any questions regarding Web Fonts: http://www.fonts.com
  */

  /* @import url("https://fast.fonts.net/lt/1.css?apiType=css&c=1101c604-2635-449c-96d3-e8592bcc8b44&fontids=721263,721269,721275"); */

  @font-face {
    font-family: "AvenirNextLTW01";
    font-display: swap;
    font-style: normal;
    src: url("/fonts/721263/2cd55546-ec00-4af9-aeca-4a3cd186da53.woff2")
      format("woff2");
  }
  @font-face {
    font-family: "AvenirNextLTW01";
    font-display: swap;
    font-weight: 500;
    src: url("/fonts/721275/627fbb5a-3bae-4cd9-b617-2f923e29d55e.woff2")
      format("woff2");
  }
  @font-face {
    font-family: "AvenirNextLTW01";
    font-display: swap;
    font-weight: 600;
    src: url("/fonts/721269/aad99a1f-7917-4dd6-bbb5-b07cedbff64f.woff2")
      format("woff2");
  }

  /* Global Styles */
  :root {
    --fw-regular: 400;
    --fw-medium: 500;
    --fw-demibold: 600;

    --f-stack: AvenirNextLTW01, 'Avenir Next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  b, strong {
    font-weight: var(--fw-demibold);
    font-family: var(--f-stack);
  }
`;

const Theme = ({ children }) => (
  <Grommet>
    <>
      <GlobalStyle />
      {children}
    </>
  </Grommet>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired
};

export default Theme;
