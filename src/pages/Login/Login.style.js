import styled, { keyframes } from 'styled-components'
import { breakpoints } from '../../components/GlobalStyle'
import { backgroundLogin } from '../../assets/images'

const animeLeft = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
`

export const PageWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  ${breakpoints.small} {
    :before {
      content: '';
      display: block;
      background: url(${backgroundLogin}) no-repeat center center;
      background-size: cover;
    }
  }
`

export const RoutesWrapper = styled.div`
  display: flex;
  margin: 48px 24px 0;

  ${breakpoints.small} {
    display: flex;
    align-items: center;
    margin-left: 0 0 72px 0;
  }

  section {
    opacity: 0;
    transform: translateX(-20px);
    animation: ${animeLeft} .3s forwards;
    min-height: 480px;
  }
`
