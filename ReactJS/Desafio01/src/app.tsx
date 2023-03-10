import { Home } from './pages/home'
import GlobalStyle from './styles/app'
import { defaultTheme } from './styles/theme'
import { ThemeProvider } from 'styled-components'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}
