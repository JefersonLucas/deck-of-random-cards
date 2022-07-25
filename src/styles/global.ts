import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-family: Open Sans, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    color: ${({ theme }) => theme.colors.text.black};
    background-color: ${({ theme }) => theme.colors.background.primary};
  }
 
  #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }

  body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
  }


  button {
    border-radius: 10px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 18px;
    font-weight: 500;
    font-family: inherit;
    color: #fff;
    cursor: pointer;
    transition: all 0.25s;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%),
      0 1px 5px 0 rgb(0 0 0 / 12%);
  }

  button:hover {
    box-shadow: 4px 4px 5px 1px rgb(0 0 0 / 14%);
    opacity: 0.7;
  }
`;
