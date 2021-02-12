import styled from 'styled-components'

export const Text = styled.h1`
  position: relative;
  z-index: 1;
  margin-bottom: 32px;

  img {
    position: absolute;
    bottom: 5px;
    left: -5px;
    z-index: -1;
  }
`
