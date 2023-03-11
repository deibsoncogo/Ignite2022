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

  :hover, :focus {
    border-color: ${({ theme }) => theme.gray300};
    background-color: ${({ theme }) => theme.gray400};
  }

  button {
    border: 0;

    color: ${({ isCheck, theme }) => (isCheck ? theme.purpleDark : theme.blue)};
    font-size: 0;

    background-color: transparent;

    svg {
      font-size: 1rem;
    }

    &[data-type=check]:focus {
      outline-offset: 2px;
      outline: 2px solid;

      border-radius: 50%;
    }

    &[data-type=trash] {
      color: ${({ theme }) => theme.gray300};

      :hover, :focus {
        color: ${({ theme }) => theme.danger};
      }
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

export const ButtonVisibleTaskChecked = styled.button`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  gap: 5px;
  border: 0;

  color: ${({ theme }) => theme.gray300};
  font-size: 0;

  background-color: transparent;

  div {
    width: 100%;
    height: 1px;
    border-radius: 999px;

    background-color: ${({ theme }) => theme.gray400};
  }

  :hover, :focus {
    color: ${({ theme }) => theme.gray200};
  }
`
