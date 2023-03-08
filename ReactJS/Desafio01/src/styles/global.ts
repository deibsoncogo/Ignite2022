import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    outline: none;
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};

    button {
      cursor: pointer;
    }
  }
`
