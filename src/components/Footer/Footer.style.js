import styled from 'styled-components'
import { breakpoints } from '../GlobalStyle'

export const FooterWrapper = styled.footer`
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-top: 1px solid #F2BDD0;
  padding-top: 5px;
  background-color: #F2BDD0;

  img {
    width: 150px;
    height: 19px;
  }

  ${breakpoints.small} {
    height: 50px;

    img {
      width: 165px;
      height: 34px;
    }
  }
`
