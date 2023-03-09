import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import GlobalStyle from './styles/global'
import { defaultTheme } from './styles/theme'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
