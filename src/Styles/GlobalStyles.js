import { createGlobalStyle } from "styled-components";

const GlobalStyle2 = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: #111; /* fundo base escuro */
    color: #000;
  }
`;

export default GlobalStyle2;
