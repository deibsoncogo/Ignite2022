import { useState } from 'react'
import { useLocalStorageHook } from './hooks/localStorageHook'
import { ITask } from './interfaces/task'
import { Home } from './pages/home'
import GlobalStyle from './styles/app'
import { defaultTheme } from './styles/theme'
import { ThemeProvider } from 'styled-components'

export function App() {
  const { findLocalStorage } = useLocalStorageHook()

  const tasksPendingUseState = useState<ITask[]>(() => {
    const tasksPending = findLocalStorage({ key: 'Pending' })
    return tasksPending || []
  })

  const tasksCheckedUseState = useState<ITask[]>(() => {
    const tasksChecked = findLocalStorage({ key: 'Checked' })
    return tasksChecked || []
  })

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home tasksPending={tasksPendingUseState[0]} tasksChecked={tasksCheckedUseState[0]} />
    </ThemeProvider>
  )
}
