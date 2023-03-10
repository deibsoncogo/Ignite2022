import { useState } from 'react'
import { ITask } from './interfaces/task'
import { Home } from './pages/home'
import GlobalStyle from './styles/app'
import { defaultTheme } from './styles/theme'
import { ThemeProvider } from 'styled-components'

export function App() {
  const tasksUseState = useState<ITask[]>(() => {
    const tasksString = localStorage.getItem('@Ignite2022Desafio1:tasks')

    if (tasksString) {
      const tasksJson = JSON.parse(tasksString)
      return tasksJson
    }

    return []
  })

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home tasks={tasksUseState[0]} />
    </ThemeProvider>
  )
}
