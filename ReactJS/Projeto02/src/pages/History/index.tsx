import { useContext } from 'react'
import { formatDistanceToNow, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CyclesContext } from '../../contexts/CyclesContext'
import * as S from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <S.HistoryContainer>
      <h1>Meu histórico</h1>

      <S.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Criado</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.map(({ id, task, minutesAmount, startDate, interruptedDate, finishedDate }) => (
              <tr key={id}>
                <td>{task}</td>
                <td>{minutesAmount} minutos</td>
                <td title={format(new Date(startDate), 'd \'de\' LLLL \'de\' yyyy \'às\' HH:mm', { locale: ptBR })}>
                  {formatDistanceToNow(new Date(startDate), { addSuffix: true, locale: ptBR })}
                </td>
                <td>
                  {finishedDate && (<S.Status statusColor="green">Concluído</S.Status>)}
                  {interruptedDate && (<S.Status statusColor="red">Interrompido</S.Status>)}
                  {!finishedDate && !interruptedDate && (<S.Status statusColor="yellow">Em andamento</S.Status>)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </S.HistoryList>
    </S.HistoryContainer>
  )
}
