import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::before, ::after {
  box-sizing: inherit;
}

body {
  background-color: ${({ theme }) => theme.colors.background};
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  word-break: break-word;
}
`;
