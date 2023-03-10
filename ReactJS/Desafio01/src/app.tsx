import { useState } from 'react'
import { ITask } from './interfaces/task'
import { Home } from './pages/home'
import GlobalStyle from './styles/app'
import { defaultTheme } from './styles/theme'
import { ThemeProvider } from 'styled-components'

export function App() {
  const tasksPendingUseState = useState<ITask[]>(() => {
    const tasksPendingString = localStorage.getItem('@Ignite2022Desafio1:tasksPending')

    if (tasksPendingString) {
      const tasksPendingJson = JSON.parse(tasksPendingString)
      return tasksPendingJson
    }

    return []
  })

  const tasksCheckedUseState = useState<ITask[]>(() => {
    const tasksCheckedString = localStorage.getItem('@Ignite2022Desafio1:tasksChecked')

    if (tasksCheckedString) {
      const tasksCheckedJson = JSON.parse(tasksCheckedString)
      return tasksCheckedJson
    }

    return []
  })

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home tasksPending={tasksPendingUseState[0]} tasksChecked={tasksCheckedUseState[0]} />
    </ThemeProvider>
  )
}
