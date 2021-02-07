import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  LoginForm,
  LoginRegister,
  LoginPasswordLost,
  LoginPasswordReset
} from '../../components'

const Login = () => (
  <div>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="cadastro" element={<LoginRegister />} />
      <Route path="recuperar-senha" element={<LoginPasswordLost />} />
      <Route path="nova-senha" element={<LoginPasswordReset />} />
    </Routes>
  </div>
)

export { Login }
