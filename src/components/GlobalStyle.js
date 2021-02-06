import React from 'react'
import reset from 'styled-reset'
import styled, { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  xsmall: '@media (min-width: 360px)',
  small: '@media (min-width: 768px)',
  medium: '@media (min-width: 998px)',
  large: '@media (min-width: 1280px)',
}

export const GlobalStyle = createGlobalStyle`
  ${ reset }
  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;1,700&display=swap')
`