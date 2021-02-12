import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: 16px;
`

export const Label = styled.label`
  display: block;
  color: #333;
  margin-bottom: 8px;
  font-size: 14px;
`

export const InputText = styled.input`
  width: 270px;
  padding: 8px;
  border: ${({ error }) => error ? '2px solid #FF2D2D' : '1px solid #FF8CB5'};;
  border-radius: 4px;

  :focus {
    border: ${({ error }) => error ? '2px solid #FF2D2D' : '2px solid #FF508F'};
  }
`

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: #FF2D2D;
  margin: 8px 0 24px;
`
