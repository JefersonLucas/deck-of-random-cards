import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    font-family: Open Sans, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    color: ${({ theme }) => theme.colors.text.black};
    background-color: ${({ theme }) => theme.colors.background.primary};
  } 

  body {
    margin: 0;
    /* display: flex; */
    /* place-items: center; */
    min-width: 320px;
    min-height: 100vh;
  }
`;
