import { FormEvent, useEffect, useState } from 'react'
import { FaCheckCircle, FaCircleNotch, FaTrash } from 'react-icons/fa'
import { HiPlus } from 'react-icons/hi'
import { MdAttachFile } from 'react-icons/md'
import logo from '../assets/logo.svg'
import { ITask } from '../interfaces/task'
import { ITaskInformation } from '../interfaces/taskInformation'
import * as S from '../styles/home'

interface IProps {
  tasks: ITask[]
}

export function Home({ tasks }: IProps) {
  const [tasksList, setTasksList] = useState(tasks)
  const [taskInformation, setTaskInformation] = useState<ITaskInformation>({} as ITaskInformation)
  const [newTask, setNewTask] = useState<string>('')

  function handleCreateTask(event: FormEvent): void {
    event.preventDefault()

    if (newTask.length === 0) { throw new Error('Nenhuma tarega foi descrita') }

    const data = [
      { description: newTask, isCheck: false, timestamp: new Date().getTime() },
      ...tasksList,
    ]

    setTasksList(data)
    setNewTask('')

    localStorage.setItem('@Ignite2022Desafio1:tasks', JSON.stringify(data))
  }

  useEffect(() => {
    setTaskInformation({
      amount: tasksList.length,
      isExisted: tasksList.length === 0,
      checked: tasksList.reduce((acc, crr) => (crr.isCheck ? acc + 1 : acc), 0),
    })
  }, [tasksList])

  return (
    <S.Section>
      <S.Header>
        <img src={logo} alt="Logo" />
      </S.Header>

      <S.Aside>
        <form>
          <input
            type="text"
            value={newTask}
            onChange={(event) => { setNewTask(event.target.value) }}
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
              <strong>{taskInformation.amount}</strong>
            </div>

            <div>
              <p>Concluídas</p>
              <strong>
                {
                  taskInformation.isExisted
                    ? '0'
                    : `${taskInformation.checked} de ${taskInformation.amount}`
                }
              </strong>
            </div>
          </S.Count>

          <S.Task>
            {taskInformation.isExisted ? (
              <S.NoTask>
                <MdAttachFile />
                <strong>Você ainda não tem taregas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </S.NoTask>
            ) : (
              <>
                {tasksList.map(({ description, isCheck, timestamp }) => (
                  <S.YesTask isCheck={isCheck} key={timestamp}>
                    <button type="button" data-type="circle">
                      {isCheck ? <FaCheckCircle /> : <FaCircleNotch />}
                    </button>

                    <p>{description}</p>

                    <button type="button" data-type="trash"><FaTrash /></button>
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
