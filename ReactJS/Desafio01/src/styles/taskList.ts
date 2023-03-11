import styled from 'styled-components'

export const TaskList = styled.aside`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  padding-bottom: 1.875rem;
  gap: 15px;
`

export const WarningTask = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.gray400};
  padding: 3.75rem 0;
  gap: 4px;

  text-align: center;
  font-size: 1rem;

  svg {
    margin-bottom: 10px;
    font-size: 3.75rem;
  }

  strong {
    font-weight: 700;
  }
`

interface ITask {
  isCheck: boolean
}

export const Task = styled.div<ITask>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  border: 2px solid ${({ isCheck, theme }) => (isCheck ? theme.gray500 : theme.gray400)};
  border-radius: 8px;
  padding: 1rem;
  gap: 15px;

  background-color: ${({ theme }) => theme.gray500};

  button {
    border: 0;

    color: ${({ isCheck, theme }) => (isCheck ? theme.purpleDark : theme.blue)};
    font-size: 0;

    background-color: transparent;

    svg {
      font-size: 1rem;
    }

    &[data-type=trash] {
      color: ${({ theme }) => theme.gray300};
    }
  }

  p {
    width: 100%;

    color: ${({ isCheck, theme }) => (isCheck ? theme.gray300 : theme.gray100)};
    font-size: 0.875rem;

    text-align: start;
    text-decoration: ${({ isCheck }) => (isCheck ? 'line-through' : 'none')};
  }
`
