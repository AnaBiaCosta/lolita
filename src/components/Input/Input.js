import React from 'react'
import { string } from 'prop-types'
import { Wrapper, Label, InputText } from './Input.style'

const Input = ({ label, type, name }) => (
  <Wrapper>
    <InputText id={name} name={name} type={type} required />
    <Label htmlFor={name}>{label}</Label>
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
