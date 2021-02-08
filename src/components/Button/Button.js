import React from 'react'
import { bool, string } from 'prop-types'
import { Wrapper } from './Button.style'

const Button = ({ children, disabled }) => (
  <Wrapper disabled={disabled}>
    {children}
  </Wrapper>
)

Button.propType = {
  children: string,
  disabled: bool
}

export { Button }
