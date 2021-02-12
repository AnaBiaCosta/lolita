import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyle, Header } from './components'
import { Home, Login } from './pages'

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="entrar/*" element={<Login />} />
    </Routes>
  </BrowserRouter>
)

export { App }
