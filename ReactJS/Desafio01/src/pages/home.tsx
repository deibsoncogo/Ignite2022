import { useState } from 'react'
import { FaCheckCircle, FaCircleNotch, FaTrash } from 'react-icons/fa'
import { HiPlus } from 'react-icons/hi'
import { MdAttachFile } from 'react-icons/md'
import logo from '../assets/logo.svg'
import * as S from '../styles/home'

export function Home() {
  const [isTask, setIsTask] = useState(!false)

  return (
    <S.Section>
      <S.Header>
        <img src={logo} alt="Logo" />
      </S.Header>

      <S.Aside>
        <section>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="button" onClick={() => { setIsTask(!isTask) }}>Criar<HiPlus /></button>
        </section>
      </S.Aside>

      <S.Main>
        <section>
          <S.Count>
            <div><p>Tarefas criadas</p> <strong>0</strong></div>
            <div><p>Concluídas</p> <strong>0</strong></div>
          </S.Count>

          <S.Task>
            {!isTask ? (
              <S.NoTask>
                <MdAttachFile />
                <strong>Você ainda não tem taregas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </S.NoTask>
            ) : (
              <>
                <S.YesTask isCheck={false}>
                  <button type="button" data-type="circle"><FaCircleNotch /></button>
                  <p>A descrição que a tarefa vai conter de forma não muito grande</p>
                  <button type="button" data-type="trash"><FaTrash /></button>
                </S.YesTask>

                <S.YesTask isCheck>
                  <button type="button" data-type="circle"><FaCheckCircle /></button>
                  <p>Agora temos uma tarefa que precisa ser grande para criar pelo menos duas linhas descrição</p>
                  <button type="button" data-type="trash"><FaTrash /></button>
                </S.YesTask>
              </>
            )}
          </S.Task>
        </section>
      </S.Main>
    </S.Section>
  )
}
