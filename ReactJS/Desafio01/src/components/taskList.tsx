import { useState } from 'react'
import { FaAngleDown, FaAngleUp, FaCheckCircle, FaCircleNotch, FaTrash } from 'react-icons/fa'
import { MdAttachFile, MdFavoriteBorder } from 'react-icons/md'
import { useLocalStorageHook } from '../hooks/localStorageHook'
import { ITask } from '../interfaces/task'
import * as S from '../styles/taskList'

interface IProps {
  tasksPending: ITask[]
  tasksChecked: ITask[]
  handleTasksPending: (tasks: ITask[]) => void
  handleTasksChecked: (tasks: ITask[]) => void
}

export function TaskList({ tasksPending, tasksChecked, handleTasksPending, handleTasksChecked }: IProps) {
  const [isVisibleTasksChecked, setIsVisibleTasksChecked] = useState(false)

  const { createLocalStorage } = useLocalStorageHook()

  function handleToggleCheckTask(isChecked: boolean, task: ITask): void {
    const newTasksA = (isChecked ? tasksChecked : tasksPending).filter((item) => item.id !== task.id)
    const newTasksB = [task, ...(!isChecked ? tasksChecked : tasksPending)]

    createLocalStorage({ key: isChecked ? 'Checked' : 'Pending' }, newTasksA)
    if (isChecked) { handleTasksChecked(newTasksA) } else { handleTasksPending(newTasksA) }

    createLocalStorage({ key: !isChecked ? 'Checked' : 'Pending' }, newTasksB)
    if (!isChecked) { handleTasksChecked(newTasksB) } else { handleTasksPending(newTasksB) }
  }

  function handleDeleteTask(isChecked: boolean, id: string): void {
    const newTasks = (isChecked ? tasksChecked : tasksPending).filter((item) => item.id !== id)

    createLocalStorage({ key: isChecked ? 'Checked' : 'Pending' }, newTasks)
    if (isChecked) { handleTasksChecked(newTasks) } else { handleTasksPending(newTasks) }
  }

  function handleToggleVisibleTasksChecked(): void {
    setIsVisibleTasksChecked(!isVisibleTasksChecked)
  }

  return (
    <S.TaskList>
      {tasksPending.length === 0 && tasksChecked.length === 0 && (
        <S.WarningTask>
          <MdAttachFile />
          <strong>Você ainda não tem taregas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </S.WarningTask>
      )}

      {tasksPending.length === 0 && tasksChecked.length > 0 && (
        <S.WarningTask>
          <span><MdFavoriteBorder /></span>
          <strong>Você não tem nenhuma tarefa pendente</strong>
          <p>Parabens, muito sucesso para você</p>
        </S.WarningTask>
      )}

      {tasksPending.length > 0 && (
        <>
          {tasksPending.map((task) => (
            <S.Task isCheck={false} key={task.id}>
              <button type="button" data-type="check" onClick={() => { handleToggleCheckTask(false, task) }}>
                <FaCircleNotch />
              </button>

              <p>{task.description}</p>

              <button type="button" data-type="trash" onClick={() => { handleDeleteTask(false, task.id) }}>
                <FaTrash />
              </button>
            </S.Task>
          ))}
        </>
      )}

      {tasksChecked.length > 0 && (
        <S.ButtonVisibleTaskChecked type="button" onClick={handleToggleVisibleTasksChecked}>
          <div /> {isVisibleTasksChecked ? <FaAngleUp /> : <FaAngleDown />} <div />
        </S.ButtonVisibleTaskChecked>
      )}

      {tasksChecked.length > 0 && isVisibleTasksChecked && (
        <>
          {tasksChecked.map((task) => (
            <S.Task isCheck key={task.id}>
              <button type="button" data-type="check" onClick={() => { handleToggleCheckTask(true, task) }}>
                <FaCheckCircle />
              </button>

              <p>{task.description}</p>

              <button type="button" data-type="trash" onClick={() => { handleDeleteTask(true, task.id) }}>
                <FaTrash />
              </button>
            </S.Task>
          ))}
        </>
      )}
    </S.TaskList>
  )
}
