import React from 'react'
import { string } from 'prop-types'
import { heart } from '../../assets/images'
import { Text } from './Title.style'

const Title = ({ text }) => (
  <Text>
    {text}
    <img src={heart} alt="Coração" />
  </Text>
)

Title.propTypes = {
  text: string
}

Title.defaultProps = {
  text: ''
}

export { Title }
