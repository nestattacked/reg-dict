import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Noto Sans SC, sans-serif;
    user-select: none;
  }

  * {
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }
`;

export { GlobalStyle };
