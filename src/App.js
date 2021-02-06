import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header, Footer } from './components'
import { Home } from './pages'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
    <Footer />
  </BrowserRouter>
)

export { App }
