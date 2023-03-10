import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;

    outline: none;
    user-select: none;
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
