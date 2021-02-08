import styled from 'styled-components'

export const Wrapper = styled.button`
  color: #FFF;
  background-color: #26151C;
  border-radius: 4px;
  padding: 6px 32px;
  cursor: pointer;
  font-size: 14px;
  min-width: 100px;

  ${({ disabled }) => disabled && `
    opacity: 0.5;
    pointer-events: none;
  `}

  :hover, :focus {
    opacity: 80%;
    transition: .2s ease-in-out;
  }
`
