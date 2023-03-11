import styled from 'styled-components'

export const Count = styled.aside`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding-bottom: 30px;

  div {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 7px;

    p {
      font-weight: 700;
      font-size: 0.875rem;
    }

    strong {
      border-radius: 999px;
      padding: 2px 8px;

      color: ${({ theme }) => theme.gray200};
      font-weight: 700;
      font-size: 0.75rem;

      white-space: nowrap;

      background-color: ${({ theme }) => theme.gray400}
    }
  }

  div:nth-child(1) p { color: ${({ theme }) => theme.blue} }
  div:nth-child(2) p { color: ${({ theme }) => theme.purple} }
`
