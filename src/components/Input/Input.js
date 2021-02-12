import React from 'react'
import { string } from 'prop-types'
import {
  Wrapper,
  Label,
  InputText,
  ErrorMessage
} from './Input.style'

const Input = ({
  label,
  type,
  name,
  error,
  value,
  onChange,
  onBlur
}) => (
  <Wrapper>
    <Label htmlFor={name}>{label}</Label>
    <InputText
      id={name}
      name={name}
      type={type}
      error={error}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      required
    />
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </Wrapper>
)

Input.propTypes = {
  label: string,
  type: string,
  name: string
}

Input.defaultProps = {
  label: '',
  type: '',
  name: ''
}

export { Input }
