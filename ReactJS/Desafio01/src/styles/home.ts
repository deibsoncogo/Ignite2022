import styled from 'styled-components'

export const Section = styled.section`
  display: grid;
  grid-template-rows: minmax(100px, 175px) 50px 1fr;

  min-height: 100vh;
`

export const Header = styled.header`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.gray700};
`

export const Aside = styled.aside`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: linear-gradient(${({ theme }) => theme.gray700} 50%, transparent 50%);

  form {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 70vw;
    max-width: 900px;
    height: 100%;
    gap: 10px;

    input {
      width: 90%;
      height: 100%;
      padding: 0 20px;
      border: 0;
      border-radius: 8px;

      color: ${({ theme }) => theme.gray300};
      background-color: ${({ theme }) => theme.gray500};
    }

    button {
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      width: 10%;
      min-width: 80px;
      height: 100%;
      border: 0;
      border-radius: 8px;
      gap: 8px;

      color: ${({ theme }) => theme.gray100};
      font-weight: 700;
      font-size: 0.875rem;

      background-color: ${({ theme }) => theme.blueDark};

      svg {
        font-size: 1rem
      }

      :hover, :focus {
        opacity: 0.9;
      }
    }
  }
`

export const Main = styled.main`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  section {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: 70vw;
    max-width: 900px;
    height: 100%;
    padding-top: 5rem;
  }
`

export const Task = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  padding-bottom: 1.875rem;
  gap: 15px;
`

export const NoTask = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.gray400};
  padding-top: 3.75rem;
  gap: 4px;

  svg {
    margin-bottom: 10px;
    font-size: 3.75rem;
  }

  strong {
    font-weight: 700;
    font-size: 1rem;
  }

  p {
    font-size: 1rem;
  }
`

interface IYesTask {
  isCheck: boolean
}

export const YesTask = styled.div<IYesTask>`
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
