import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing: border-box;

    &:focus {
      outline: 0;
    }
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: Calibri, Arial, sans-serif;
  }
`
