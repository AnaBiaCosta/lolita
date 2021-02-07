import React from 'react'
import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'
import '../assets/font/font.css'

export const breakpoints = {
  xsmall: '@media (min-width: 360px)',
  small: '@media (min-width: 768px)',
  medium: '@media (min-width: 998px)',
  large: '@media (min-width: 1280px)',
}

export const Styles = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;1,700&display=swap');

  html, body {
    scroll-behavior: smooth;
    background-color: #FBFBFB;
  }

  button, textarea, input {
    font-family: 'Nunito', 'sans-serif';
    font-weight: 400;
    border: none;
    background: none;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  p, b, label, a, footer {
    font-family: 'Nunito', 'sans-serif';
    font-weight: 400;
  }

  h1, h2, h3, h4, header {
    font-family: 'Bhavuka';
    font-size: 48px;
    color: #333;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a > span > p {
    font-family: 'Bhavuka';
  }
`

const GlobalStyle = () => (
  <Styles />
)

export { GlobalStyle }
