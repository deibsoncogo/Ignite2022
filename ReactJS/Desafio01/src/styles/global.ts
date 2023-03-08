import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    outline: none;
    box-sizing: border-box;
  }

  body {
    color: #808080;
    background-color: #1A1A1A;

    button {
      cursor: pointer;
    }
  }
`
