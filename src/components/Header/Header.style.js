import styled from 'styled-components'
import { breakpoints } from '../GlobalStyle'

export const HeaderWrapper = styled.header`
  border-bottom: 1px solid #F2BDD0;
`

export const Brand = styled.img`
  width: 60px;
  height: 22px;

  ${breakpoints.small} {
    width: 77px;
    height: 22px;
  }
`

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  box-sizing: border-box;
  margin: 0 24px;

  ${breakpoints.small} {
    height: 66px;
    margin: 0 auto;
    max-width: 1225px;
  }
`

export const Item = styled.span`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: 'Bhavuka';

  img {
    width: 25px;
    height: 25px;
    margin-left: 8px;
  }

  ${breakpoints.small} {
    font-size: 18px;

    img {
      width: 30px;
      height: 30px;
    }
  }
`
