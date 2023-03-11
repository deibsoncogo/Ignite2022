import { FormEvent, useState } from 'react'
import { FaCheckCircle, FaCircleNotch, FaTrash } from 'react-icons/fa'
import { HiPlus } from 'react-icons/hi'
import { MdAttachFile } from 'react-icons/md'
import { v4 as uuid } from 'uuid'
import logo from '../assets/logo.svg'
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

  function handleCreateTask(event: FormEvent): void {
    event.preventDefault()

    if (newDescriptionTask.length === 0) { throw new Error('Nenhuma tarega foi descrita') }

    const data: ITask[] = [{ id: uuid(), description: newDescriptionTask }, ...tasksPending]

    localStorage.setItem('@Ignite2022Desafio1:tasksPending', JSON.stringify(data))

    setTasksPending(data)
    setNewDescriptionTask('')
  }

  function handleToggleCheckTask(isChecked: boolean, task: ITask): void {
    const newTasksA = (isChecked ? tasksChecked : tasksPending).filter((item) => item.id !== task.id)
    const newTasksB = [task, ...(!isChecked ? tasksChecked : tasksPending)]

    localStorage.setItem(
      `@Ignite2022Desafio1:tasks${isChecked ? 'Checked' : 'Pending'}`,
      JSON.stringify(newTasksA),
    )

    if (isChecked) { setTasksChecked(newTasksA) } else { setTasksPending(newTasksA) }

    localStorage.setItem(
      `@Ignite2022Desafio1:tasks${!isChecked ? 'Checked' : 'Pending'}`,
      JSON.stringify(newTasksB),
    )

    if (!isChecked) { setTasksChecked(newTasksB) } else { setTasksPending(newTasksB) }
  }

  function handleDeleteTask(isChecked: boolean, id: string): void {
    const newTasks = (isChecked ? tasksChecked : tasksPending).filter((item) => item.id !== id)

    localStorage.setItem(
      `@Ignite2022Desafio1:tasks${isChecked ? 'Checked' : 'Pending'}`,
      JSON.stringify(newTasks),
    )

    if (isChecked) { setTasksChecked(newTasks) } else { setTasksPending(newTasks) }
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
          <S.Count>
            <div>
              <p>Tarefas criadas</p>
              <strong>{tasksPending.length + tasksChecked.length}</strong>
            </div>

            <div>
              <p>Concluídas</p>
              <strong>{`${tasksChecked.length} de ${tasksPending.length + tasksChecked.length}`}</strong>
            </div>
          </S.Count>

          <S.Task>
            {tasksPending.length === 0 && tasksChecked.length === 0 ? (
              <S.NoTask>
                <MdAttachFile />
                <strong>Você ainda não tem taregas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </S.NoTask>
            ) : (
              <>
                {tasksPending.map((task) => (
                  <S.YesTask isCheck={false} key={task.id}>
                    <button type="button" data-type="check" onClick={() => { handleToggleCheckTask(false, task) }}>
                      <FaCircleNotch />
                    </button>

                    <p>{task.description}</p>

                    <button type="button" data-type="trash" onClick={() => { handleDeleteTask(false, task.id) }}>
                      <FaTrash />
                    </button>
                  </S.YesTask>
                ))}

                {tasksChecked.map((task) => (
                  <S.YesTask isCheck key={task.id}>
                    <button type="button" data-type="check" onClick={() => { handleToggleCheckTask(true, task) }}>
                      <FaCheckCircle />
                    </button>

                    <p>{task.description}</p>

                    <button type="button" data-type="trash" onClick={() => { handleDeleteTask(true, task.id) }}>
                      <FaTrash />
                    </button>
                  </S.YesTask>
                ))}
              </>
            )}
          </S.Task>
        </section>
      </S.Main>
    </S.Section>
  )
}
