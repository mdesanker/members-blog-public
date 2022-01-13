import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    font-family: helvetica, arial, sans-serif;
    font-size: 18px;
  }

  body {
    width: 100%;
    background-color: #f0f2f5;
    position: relative;
    min-height: 100vh;
  }

  main {
    min-height: 100vh;
    padding-top: ${({ theme }) => theme.heights.header};
    padding-bottom: ${({ theme }) => theme.heights.footer};
    width: 100%;
  }
`;

export default GlobalStyles;
