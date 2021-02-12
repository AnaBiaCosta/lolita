import styled from 'styled-components'
import { breakpoints } from '../GlobalStyle'

export const PageWrapper = styled.section`
  a {
    font-size: 14px;
    color: #333;
    text-decoration: underline;
    padding-bottom: 8px;
    cursor: pointer;
    display: block;
  }
`

export const FormWrapper = styled.div`
  margin-bottom: 56px;

  ${breakpoints.small} {
    margin-bottom: 124px;
  }

  a {
    margin-top: 24px;
  }
`

export const RegisterWrapper = styled.div`
  h2 {
    font-family: 'Nunito', 'sans-serif';
    font-size: 24px;
    font-weight: 800;
    color: #FF8CB5;
    margin-bottom: 8px;
  }
`
