import React, { useState } from 'react'
import { Title } from '../Title'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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
        <input type="text" value={username} onChange={({ target }) => setUsername(target.value)} />
        <input type="password" value={password} onChange={({ target }) => setPassword(target.value)} />
        <button type="submit">Entrar</button>
      </form>
    </section>
  )
}

export { LoginForm }
