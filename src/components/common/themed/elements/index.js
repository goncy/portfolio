import styled from 'styled-components'

export const PrimaryColor = styled.div`
  color: ${({ theme }) => theme.primary};
`

export const PrimaryBackground = styled.div`
  background: ${({ theme }) => theme.primary};
  height: inherit;
`

export const SecondaryColor = styled.div`
  color: ${({ theme }) => theme.secondary};
`

export const SecondaryBackground = styled.div`
  background: ${({ theme }) => theme.secondary};
  height: inherit;
`
