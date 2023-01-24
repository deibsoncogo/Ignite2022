import { useContext, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import { CyclesState } from '../../../../reducers/cycles/reducer'
import * as S from './styles'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()
  const [taskSuggestions, setTaskSuggestions] = useState<string[]>([])

  useEffect(() => {
    const cyclesStateStorageString = localStorage.getItem('@ignite-timer:cycles-state-1.0.0')

    if (cyclesStateStorageString) {
      const { cycles }: CyclesState = JSON.parse(cyclesStateStorageString)
      const cyclesNames = cycles.slice(0, 20).map((cycle) => cycle.task)

      setTaskSuggestions([...new Set(cyclesNames)].slice(0, 10))
    }
  }, [activeCycle])

  return (
    <S.FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <S.TaskInput
        id="task"
        type="text"
        placeholder="Projeto A - Criação CRUD"
        list="task-suggestions"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        {taskSuggestions.map((taskName) => <option value={taskName} key={taskName} />)}
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <S.MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="0"
        min={5}
        max={99}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos</span>
    </S.FormContainer>
  )
}
