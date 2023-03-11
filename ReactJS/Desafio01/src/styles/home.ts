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
      border: 2px solid ${({ theme }) => theme.gray400};
      border-radius: 8px;

      color: ${({ theme }) => theme.gray300};
      background-color: ${({ theme }) => theme.gray500};

      :hover, :focus {
        border-color: ${({ theme }) => theme.gray300};
      }
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
        background-color: ${({ theme }) => theme.purpleDark};
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
