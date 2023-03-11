import { FormEvent, useState } from 'react'
import { HiPlus } from 'react-icons/hi'
import { v4 as uuid } from 'uuid'
import logo from '../assets/logo.svg'
import { Count } from '../components/count'
import { TaskList } from '../components/taskList'
import { useLocalStorageHook } from '../hooks/localStorageHook'
import { ITask } from '../interfaces/task'
import * as S from '../styles/home'

interface IProps {
  tasksPending: ITask[]
  tasksChecked: ITask[]
}

export function Home(props: IProps) {
  const [tasksPending, setTasksPending] = useState<ITask[]>(props.tasksPending)
  const [tasksChecked, setTasksChecked] = useState<ITask[]>(props.tasksChecked)
  const [newDescriptionTask, setNewDescriptionTask] = useState<string>('')

  const { createLocalStorage } = useLocalStorageHook()

  function handleCreateTask(event: FormEvent): void {
    event.preventDefault()

    if (newDescriptionTask.length === 0) { throw new Error('Nenhuma tarega foi descrita') }

    const data: ITask[] = [{ id: uuid(), description: newDescriptionTask }, ...tasksPending]

    setTasksPending(data)
    setNewDescriptionTask('')
    createLocalStorage({ key: 'Pending' }, data)
  }

  function handleTasksPending(tasks: ITask[]): void {
    setTasksPending(tasks)
  }

  function handleTasksChecked(tasks: ITask[]): void {
    setTasksChecked(tasks)
  }

  return (
    <S.Section>
      <S.Header>
        <img src={logo} alt="Logo" />
      </S.Header>

      <S.Aside>
        <form>
          <input
            type="text"
            value={newDescriptionTask}
            onChange={(event) => { setNewDescriptionTask(event.target.value) }}
            placeholder="Adicione uma nova tarefa"
          />

          <button type="submit" onClick={(event) => { handleCreateTask(event) }}>Criar<HiPlus /></button>
        </form>
      </S.Aside>

      <S.Main>
        <section>
          <Count tasksPending={tasksPending.length} tasksChecked={tasksChecked.length} />

          <TaskList
            tasksPending={tasksPending}
            tasksChecked={tasksChecked}
            handleTasksPending={handleTasksPending}
            handleTasksChecked={handleTasksChecked}
          />
        </section>
      </S.Main>
    </S.Section>
  )
}
