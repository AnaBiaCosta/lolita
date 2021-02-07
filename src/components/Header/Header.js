import React from 'react'
import { Link } from 'react-router-dom'
import { brand, user } from '../../assets/images'
import {
  HeaderWrapper,
  Container,
  Brand,
  Item
} from './Header.style'

const Header = () => (
  <HeaderWrapper>
    <Container>
      <Link to="/">
        <Brand src={brand} alt="Lolita" />
      </Link>
      <Link to="/entrar">
        <Item>
          <p>Entrar / Cadastro</p>
          <img src={user} alt="Usuário" />
        </Item>
      </Link>
    </Container>
  </HeaderWrapper>
)

export { Header }
