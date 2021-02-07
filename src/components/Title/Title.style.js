import styled from 'styled-components'

export const Text = styled.h1`
  position: relative;
  z-index: 1;
  margin-left: 200px;

  img {
    position: absolute;
    bottom: 5px;
    left: -5px;
    z-index: -1;
  }
`
