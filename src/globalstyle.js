import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::before, ::after {
  box-sizing: inherit;
}

body {
  background-color: #F0F0F0;
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  word-break: break-word;
}
`;
