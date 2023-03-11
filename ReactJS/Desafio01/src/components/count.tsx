import * as S from '../styles/count'

interface IProps {
  tasksPending: number
  tasksChecked: number
}

export function Count({ tasksPending, tasksChecked }: IProps) {
  const tasksTotal = tasksPending + tasksChecked

  const messageTaskChecked = tasksTotal === 0 ? '0' : `${tasksChecked} de ${tasksTotal}`

  return (
    <S.Count>
      <div>
        <p>Tarefas criadas</p> <strong>{tasksTotal}</strong>
      </div>

      <div>
        <p>Concluídas</p> <strong>{messageTaskChecked}</strong>
      </div>
    </S.Count>
  )
}
