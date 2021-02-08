import React from 'react'
import { Title, Input, Button } from '..'

const LoginForm = () => {

  const username = ''
  const password = ''

  const handleSubimit = event => {
    event.preventDefault()

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password }),
    })
      .then(res => res.json())
      .then(json => json)
  }

  return (
    <section>
      <Title text="Login" />
      <form action="" onSubmit={handleSubimit}>
        <Input label="E-mail" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />
        <Button>Entrar</Button>
      </form>
    </section>
  )
}

export { LoginForm }
