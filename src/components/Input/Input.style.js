import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
`

export const Label = styled.label`
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  position: absolute;
  cursor: text;
  transition: .2s ease-in-out;
  box-sizing: border-box;
  color: #333;
`

export const InputText = styled.input`
  width: 270px;
  font-size: 14px;
  border-bottom: ${({ error }) => error ? '2px solid #FF2D2D' : '1px solid #FF8CB5'};
  transition: .2s ease-in-out;
  box-sizing: border-box;
  color: #333;
  outline: none;

  :valid, :focus {
    color: #333;
    border-bottom: ${({ error }) => error ? '2px solid #FF2D2D' : '2px solid #FF508F'};
  }

  :valid + ${Label}, :focus + ${Label} {
    font-size: 12px;
    top: -22px;
    pointer-events: none;
  }
`
