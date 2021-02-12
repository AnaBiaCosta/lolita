import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  LoginForm,
  LoginRegister,
  LoginPasswordLost,
  LoginPasswordReset
} from '../../components'
import {
  PageWrapper,
  RoutesWrapper
} from './Login.style'

const Login = () => {
  console.log('oi')

  return (
    <PageWrapper>
      <RoutesWrapper>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="cadastro" element={<LoginRegister />} />
          <Route path="recuperar-senha" element={<LoginPasswordLost />} />
          <Route path="nova-senha" element={<LoginPasswordReset />} />
        </Routes>
      </RoutesWrapper>
    </PageWrapper>
  )
}

export { Login }
